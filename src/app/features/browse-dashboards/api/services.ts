import { config, getBackendSrv } from '@grafana/runtime';
import { GENERAL_FOLDER_UID } from '../../search/constants';
import { getGrafanaSearcher, NestedFolderDTO } from '../../search/service';
import { queryResultToViewItem } from '../../search/service/utils';
import { DashboardViewItem } from '../../search/types';

import { contextSrv } from '../../../core/core';
import { AccessControlAction } from '../../../types';
import { isSharedWithMe } from '../components/utils';

export const PAGE_SIZE = 50;

export async function listFolders(
  parentUID?: string,
  parentTitle?: string, // TODO: remove this when old UI is gone
  page = 1,
  pageSize = PAGE_SIZE
): Promise<DashboardViewItem[]> {
  if (parentUID && !config.featureToggles.nestedFolders) {
    return [];
  }

  const backendSrv = getBackendSrv();

  let folders: NestedFolderDTO[] = [];
  if (contextSrv.hasPermission(AccessControlAction.FoldersRead)) {
    folders = await backendSrv.get<NestedFolderDTO[]>('/api/folders', {
      parentUid: parentUID,
      page,
      limit: pageSize,
    });
  }
  const subUrlPrefix = config.appSubUrl ?? '';

  return folders.map((item) => ({
    kind: 'folder',
    uid: item.uid,
    title: item.title,
    parentTitle,
    parentUID,

    // URLs from the backend come with subUrlPrefix already included, so match that behaviour here
    url: isSharedWithMe(item.uid) ? undefined : `${subUrlPrefix}/dashboards/f/${item.uid}/`,
  }));
}

export async function listDashboards(parentUID?: string, page = 1, pageSize = PAGE_SIZE): Promise<DashboardViewItem[]> {
  const searcher = getGrafanaSearcher();

  const dashboardsResults = await searcher.search({
    kind: ['dashboard'],
    query: '*',
    location: parentUID || 'general',
    from: (page - 1) * pageSize, // our pages are 1-indexed, so we need to -1 to convert that to correct value to skip
    limit: pageSize,
  });

  return dashboardsResults.view.map((item) => {
    const viewItem = queryResultToViewItem(item, dashboardsResults.view);

    // TODO: Once we remove nestedFolders feature flag, undo this and prevent the 'general'
    // parentUID from being set in searcher
    if (viewItem.parentUID === GENERAL_FOLDER_UID) {
      viewItem.parentUID = undefined;
    }

    return viewItem;
  });
}

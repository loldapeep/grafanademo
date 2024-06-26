import React from 'react';

import { SceneComponentProps, SceneObjectBase, SceneObjectRef, VizPanel } from '@grafana/scenes';
import { LibraryPanel } from '@grafana/schema/src/index.gen';
import { t } from '../../../core/internationalization';
import { ShareLibraryPanel } from '../../dashboard/components/ShareModal/ShareLibraryPanel';
import { shareDashboardType } from '../../dashboard/components/ShareModal/utils';
import { DashboardModel, PanelModel } from '../../dashboard/state';

import { DashboardGridItem } from '../scene/DashboardGridItem';
import { gridItemToPanel, transformSceneToSaveModel } from '../serialization/transformSceneToSaveModel';

import { SceneShareTabState } from './types';

export interface ShareLibraryPanelTabState extends SceneShareTabState {
  panelRef?: SceneObjectRef<VizPanel>;
}

export class ShareLibraryPanelTab extends SceneObjectBase<ShareLibraryPanelTabState> {
  public tabId = shareDashboardType.libraryPanel;
  static Component = ShareLibraryPanelTabRenderer;

  public getTabLabel() {
    return t('share-modal.tab-title.library-panel', 'Library panel');
  }
}

function ShareLibraryPanelTabRenderer({ model }: SceneComponentProps<ShareLibraryPanelTab>) {
  const { panelRef, dashboardRef, modalRef } = model.useState();

  if (!panelRef) {
    return null;
  }

  const panel = panelRef.resolve();
  const parent = panel.parent;

  if (parent instanceof DashboardGridItem) {
    const dashboardScene = dashboardRef.resolve();
    const panelJson = gridItemToPanel(parent);
    const panelModel = new PanelModel(panelJson);

    const dashboardJson = transformSceneToSaveModel(dashboardScene);
    const dashboardModel = new DashboardModel(dashboardJson);

    return (
      <ShareLibraryPanel
        initialFolderUid={dashboardScene.state.meta.folderUid}
        dashboard={dashboardModel}
        panel={panelModel}
        onDismiss={() => {
          modalRef?.resolve().onDismiss();
        }}
        onCreateLibraryPanel={(libPanel: LibraryPanel) => dashboardScene.createLibraryPanel(panel, libPanel)}
      />
    );
  }

  return null;
}

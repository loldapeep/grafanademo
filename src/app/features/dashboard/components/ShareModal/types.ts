import React from 'react';

import { NavModelItem } from '@grafana/data';
import { LibraryPanel } from '@grafana/schema/src/index.gen';
import { DashboardModel, PanelModel } from '../../state';

export interface ShareModalTabProps {
  dashboard: DashboardModel;
  panel?: PanelModel;
  onDismiss?(): void;
  onCreateLibraryPanel?(libPanel: LibraryPanel): void;
}

export interface ShareModalTabModel {
  label: string;
  value: string;
  tabSuffix?: NavModelItem['tabSuffix'];
  component: React.ComponentType<ShareModalTabProps>;
}

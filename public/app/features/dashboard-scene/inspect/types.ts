import { SceneObject, SceneObjectState } from '@grafana/scenes';
import { InspectTab } from '../../inspector/types';

export interface SceneInspectTab<T extends SceneObjectState = SceneObjectState> extends SceneObject<T> {
  getTabValue(): InspectTab;
  getTabLabel(): string;
}

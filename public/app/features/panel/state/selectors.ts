import { PanelModel } from '../../dashboard/state';
import { StoreState } from '../../../types';

import { PanelState } from './reducers';

export function getPanelStateForModel(state: StoreState, model: PanelModel): PanelState | undefined {
  return state.panels[model.key];
}

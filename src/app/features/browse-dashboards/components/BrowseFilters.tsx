import React from 'react';

import { ActionRow } from '../../search/page/components/ActionRow';
import { getGrafanaSearcher } from '../../search/service';
import { useSearchStateManager } from '../../search/state/SearchStateManager';

export function BrowseFilters() {
  const [searchState, stateManager] = useSearchStateManager();

  return (
    <div>
      <ActionRow
        showStarredFilter
        showLayout
        state={searchState}
        getTagOptions={stateManager.getTagOptions}
        getSortOptions={getGrafanaSearcher().getSortOptions}
        sortPlaceholder={getGrafanaSearcher().sortPlaceholder}
        onLayoutChange={stateManager.onLayoutChange}
        onStarredFilterChange={stateManager.onStarredFilterChange}
        onSortChange={stateManager.onSortChange}
        onTagFilterChange={stateManager.onTagFilterChange}
        onDatasourceChange={stateManager.onDatasourceChange}
        onPanelTypeChange={stateManager.onPanelTypeChange}
        onSetIncludePanels={stateManager.onSetIncludePanels}
      />
    </div>
  );
}

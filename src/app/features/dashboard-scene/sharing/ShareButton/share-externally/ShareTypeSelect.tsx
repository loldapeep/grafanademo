import { css } from '@emotion/css';
import React from 'react';

import { SelectableValue, toIconName } from '@grafana/data';
import { selectors as e2eSelectors } from '@grafana/e2e-selectors';
import { Icon, Label, Select, Spinner, Stack, Text, useStyles2 } from '@grafana/ui';
import { contextSrv } from '../../../../../core/core';
import { Trans } from '../../../../../core/internationalization';
import {
  publicDashboardApi,
  useUpdatePublicDashboardAccessMutation,
} from '../../../../dashboard/api/publicDashboardApi';
import {
  isEmailSharingEnabled,
  PublicDashboardShareType,
} from '../../../../dashboard/components/ShareModal/SharePublicDashboard/SharePublicDashboardUtils';
import { DashboardInteractions } from '../../../utils/interactions';
import { AccessControlAction } from '../../../../../types';

import { useShareDrawerContext } from '../../ShareDrawer/ShareDrawerContext';

import { getAnyOneWithTheLinkShareOption } from './ShareExternally';

const selectors = e2eSelectors.pages.ShareDashboardDrawer.ShareExternally;
export default function ShareTypeSelect({
  setShareType,
  options,
  value,
}: {
  setShareType: (v: SelectableValue<PublicDashboardShareType>) => void;
  value: SelectableValue<PublicDashboardShareType>;
  options: Array<SelectableValue<PublicDashboardShareType>>;
}) {
  const { dashboard } = useShareDrawerContext();
  const styles = useStyles2(getStyles);

  const { data: publicDashboard } = publicDashboardApi.endpoints?.getPublicDashboard.useQueryState(
    dashboard.state.uid!
  );
  const [updateAccess, { isLoading }] = useUpdatePublicDashboardAccessMutation();

  const hasWritePermissions = contextSrv.hasPermission(AccessControlAction.DashboardsPublicWrite);
  const anyOneWithTheLinkOpt = getAnyOneWithTheLinkShareOption();

  const onUpdateShareType = (shareType: PublicDashboardShareType) => {
    if (!publicDashboard) {
      return;
    }

    DashboardInteractions.publicDashboardShareTypeChange({
      shareType: shareType === PublicDashboardShareType.EMAIL ? 'email' : 'public',
    });

    const req = {
      dashboard,
      payload: {
        ...publicDashboard!,
        share: shareType,
      },
    };

    updateAccess(req);
  };

  return (
    <div>
      <Stack justifyContent="space-between">
        <Label description={value.description}>
          <Trans i18nKey="public-dashboard.share-configuration.share-type-label">Link access</Trans>
        </Label>
        {isLoading && <Spinner />}
      </Stack>
      <Stack direction="row" gap={1} alignItems="center">
        {isEmailSharingEnabled() ? (
          <Select
            data-testid={selectors.shareTypeSelect}
            options={options}
            value={value}
            disabled={!hasWritePermissions}
            onChange={(v) => {
              setShareType(v);
              onUpdateShareType(v.value!);
            }}
            className={styles.select}
          />
        ) : (
          <>
            {toIconName(anyOneWithTheLinkOpt.icon) && <Icon name={toIconName(anyOneWithTheLinkOpt.icon)!} />}
            <Text>{anyOneWithTheLinkOpt.label}</Text>
          </>
        )}
        <Text element="p" variant="bodySmall" color="disabled">
          <Trans i18nKey="public-dashboard.share-configuration.access-label">can access</Trans>
        </Text>
      </Stack>
    </div>
  );
}

const getStyles = () => {
  return {
    select: css({
      flex: 1,
    }),
  };
};

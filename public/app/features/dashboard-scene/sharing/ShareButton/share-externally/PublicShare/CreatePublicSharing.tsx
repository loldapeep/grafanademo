import { css } from '@emotion/css';
import React from 'react';
import { useForm } from 'react-hook-form';

import { GrafanaTheme2 } from '@grafana/data';
import { Button, Checkbox, FieldSet, Spinner, Stack, useStyles2 } from '@grafana/ui';
import { contextSrv } from '../../../../../../core/core';
import { t, Trans } from '../../../../../../core/internationalization';
import { useCreatePublicDashboardMutation } from '../../../../../dashboard/api/publicDashboardApi';
import { PublicDashboardShareType } from '../../../../../dashboard/components/ShareModal/SharePublicDashboard/SharePublicDashboardUtils';
import { DashboardInteractions } from '../../../../utils/interactions';
import { AccessControlAction } from '../../../../../../types';

import { PublicDashboardAlert } from '../../../../../dashboard/components/ShareModal/SharePublicDashboard/ModalAlerts/PublicDashboardAlert';
import { useShareDrawerContext } from '../../../ShareDrawer/ShareDrawerContext';

export default function CreatePublicSharing({ hasError }: { hasError: boolean }) {
  const { dashboard } = useShareDrawerContext();
  const styles = useStyles2(getStyles);

  const hasWritePermissions = contextSrv.hasPermission(AccessControlAction.DashboardsPublicWrite);

  const {
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm<{ publicAcknowledgment: boolean }>({ mode: 'onChange' });

  const [createPublicDashboard, { isLoading, isError }] = useCreatePublicDashboardMutation();
  const onCreate = () => {
    DashboardInteractions.generatePublicDashboardUrlClicked({ share: PublicDashboardShareType.PUBLIC });
    createPublicDashboard({ dashboard, payload: { share: PublicDashboardShareType.PUBLIC, isEnabled: true } });
  };

  const disableInputs = !hasWritePermissions || isLoading || isError || hasError;

  return (
    <>
      {hasWritePermissions && <PublicDashboardAlert />}
      <form onSubmit={handleSubmit(onCreate)}>
        <FieldSet disabled={disableInputs}>
          <div className={styles.checkbox}>
            <Checkbox
              {...register('publicAcknowledgment', { required: true })}
              label={t(
                'public-dashboard.public-sharing.public-ack',
                'I understand that this entire dashboard will be public.*'
              )}
            />
          </div>
          <Stack direction="row" gap={1} alignItems="center">
            <Button type="submit" disabled={!isValid}>
              <Trans i18nKey="public-dashboard.public-sharing.accept-button">Accept</Trans>
            </Button>
            <Button variant="secondary" onClick={() => dashboard.closeModal()}>
              <Trans i18nKey="public-dashboard.public-sharing.cancel-button">Cancel</Trans>
            </Button>
            {isLoading && <Spinner />}
          </Stack>
        </FieldSet>
      </form>
    </>
  );
}

const getStyles = (theme: GrafanaTheme2) => ({
  checkbox: css({
    marginBottom: theme.spacing(2),
  }),
});

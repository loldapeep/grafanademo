import { css } from '@emotion/css';
import React from 'react';
import { useForm } from 'react-hook-form';

import { GrafanaTheme2 } from '@grafana/data';
import { Button, Checkbox, FieldSet, Spinner, Stack } from '@grafana/ui';
import { useStyles2 } from '@grafana/ui/';
import { contextSrv } from '../../../../../../core/core';
import { t, Trans } from '../../../../../../core/internationalization';
import { useCreatePublicDashboardMutation } from '../../../../../dashboard/api/publicDashboardApi';
import { PublicDashboardShareType } from '../../../../../dashboard/components/ShareModal/SharePublicDashboard/SharePublicDashboardUtils';
import { DashboardInteractions } from '../../../../utils/interactions';
import { AccessControlAction } from '../../../../../../types';

import { EmailSharingPricingAlert } from '../../../../../dashboard/components/ShareModal/SharePublicDashboard/ModalAlerts/EmailSharingPricingAlert';
import { useShareDrawerContext } from '../../../ShareDrawer/ShareDrawerContext';

export const CreateEmailSharing = ({ hasError }: { hasError: boolean }) => {
  const { dashboard } = useShareDrawerContext();
  const styles = useStyles2(getStyles);

  const [createPublicDashboard, { isLoading, isError }] = useCreatePublicDashboardMutation();

  const hasWritePermissions = contextSrv.hasPermission(AccessControlAction.DashboardsPublicWrite);
  const disableInputs = !hasWritePermissions || isLoading || isError || hasError;

  const {
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm<{ billAcknowledgment: boolean }>({ mode: 'onChange' });

  const onCreate = () => {
    DashboardInteractions.generatePublicDashboardUrlClicked({ share: PublicDashboardShareType.EMAIL });
    createPublicDashboard({ dashboard, payload: { share: PublicDashboardShareType.EMAIL, isEnabled: true } });
  };

  return (
    <>
      {hasWritePermissions && <EmailSharingPricingAlert />}
      <form onSubmit={handleSubmit(onCreate)}>
        <FieldSet disabled={disableInputs}>
          <div className={styles.checkbox}>
            <Checkbox
              {...register('billAcknowledgment', { required: true })}
              label={t('public-dashboard.email-sharing.bill-ack', 'I understand that adding users requires payment.*')}
            />
          </div>
          <Stack direction="row" gap={1} alignItems="center">
            <Button type="submit" disabled={!isValid}>
              <Trans i18nKey="public-dashboard.email-sharing.accept-button">Accept</Trans>
            </Button>
            <Button variant="secondary" onClick={() => dashboard.closeModal()}>
              <Trans i18nKey="public-dashboard.email-sharing.cancel-button">Cancel</Trans>
            </Button>
            {isLoading && <Spinner />}
          </Stack>
        </FieldSet>
      </form>
    </>
  );
};

const getStyles = (theme: GrafanaTheme2) => ({
  checkbox: css({
    marginBottom: theme.spacing(2),
  }),
});

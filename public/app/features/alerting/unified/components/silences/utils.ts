import { DefaultTimeZone, addDurationToDate, dateTime, intervalToAbbreviatedDurationString } from '@grafana/data';
import { config } from '@grafana/runtime';
import { SilenceFormFields } from '../../types/silence-form';
import { matcherToMatcherField } from '../../utils/alertmanager';
import { parseQueryParamMatchers } from '../../utils/matchers';
import { MatcherOperator, Silence } from '../../../../../plugins/datasource/alertmanager/types';

/**
 * Parse query params and return default silence form values
 */
export const defaultsFromQuery = (searchParams: URLSearchParams): Partial<SilenceFormFields> => {
  const defaults: Partial<SilenceFormFields> = {};

  const comment = searchParams.get('comment');
  const matchers = searchParams.getAll('matcher');

  const formMatchers = parseQueryParamMatchers(matchers);
  if (formMatchers.length) {
    defaults.matchers = formMatchers.map(matcherToMatcherField);
  }

  if (comment) {
    defaults.comment = comment;
  }

  return defaults;
};

/**
 *
 */
export const getFormFieldsForSilence = (silence: Silence): SilenceFormFields => {
  const now = new Date();
  const isExpired = Date.parse(silence.endsAt) < Date.now();
  const interval = isExpired
    ? {
        start: now,
        end: addDurationToDate(now, { hours: 2 }),
      }
    : { start: new Date(silence.startsAt), end: new Date(silence.endsAt) };
  return {
    id: silence.id,
    startsAt: interval.start.toISOString(),
    endsAt: interval.end.toISOString(),
    comment: silence.comment,
    createdBy: silence.createdBy,
    duration: intervalToAbbreviatedDurationString(interval),
    isRegex: false,
    matchers: silence.matchers?.map(matcherToMatcherField) || [],
    matcherName: '',
    matcherValue: '',
    timeZone: DefaultTimeZone,
  };
};

/**
 * Generate default silence form values
 */
export const getDefaultSilenceFormValues = (partial?: Partial<SilenceFormFields>): SilenceFormFields => {
  const now = new Date();

  const endsAt = addDurationToDate(now, { hours: 2 }); // Default time period is now + 2h
  return {
    id: '',
    startsAt: now.toISOString(),
    endsAt: endsAt.toISOString(),
    comment: `created ${dateTime().format('YYYY-MM-DD HH:mm')}`,
    createdBy: config.bootData.user.name,
    duration: '2h',
    isRegex: false,
    matcherName: '',
    matcherValue: '',
    timeZone: DefaultTimeZone,
    matchers: [{ name: '', value: '', operator: MatcherOperator.equal }],
    ...partial,
  };
};

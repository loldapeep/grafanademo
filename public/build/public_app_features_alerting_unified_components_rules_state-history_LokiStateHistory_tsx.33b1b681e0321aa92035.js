"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_features_alerting_unified_components_rules_state-history_LokiStateHistory_tsx"],{

/***/ "./public/app/features/alerting/unified/api/stateHistoryApi.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stateHistoryApi: () => (/* binding */ stateHistoryApi)
/* harmony export */ });
/* harmony import */ var _alertingApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/api/alertingApi.ts");


const stateHistoryApi = _alertingApi__WEBPACK_IMPORTED_MODULE_0__.alertingApi.injectEndpoints({
  endpoints: (build) => ({
    getRuleHistory: build.query({
      query: ({ ruleUid, from, to, limit = 100 }) => ({
        url: "/api/v1/rules/history",
        params: { ruleUID: ruleUid, from, to, limit }
      })
    })
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/state-history/LogRecordViewer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogRecordViewerByInstance: () => (/* binding */ LogRecordViewerByInstance),
/* harmony export */   LogRecordViewerByTimestamp: () => (/* binding */ LogRecordViewerByTimestamp)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/date-fns/formatDistanceToNowStrict.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-data/src/datetime/formatter.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Tags/TagList.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/Label.tsx");
/* harmony import */ var _AlertStateTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/state-history/common.ts");










function groupRecordsByTimestamp(records) {
  const groupedLines = records.reduce((acc, current) => {
    const tsGroup = acc.get(current.timestamp);
    if (tsGroup) {
      tsGroup.push(current);
    } else {
      acc.set(current.timestamp, [current]);
    }
    return acc;
  }, /* @__PURE__ */ new Map());
  return new Map([...groupedLines].sort((a, b) => b[0] - a[0]));
}
const LogRecordViewerByTimestamp = react__WEBPACK_IMPORTED_MODULE_2___default().memo(
  ({ records, commonLabels, onLabelClick, onRecordsRendered }) => {
    const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
    const groupedLines = groupRecordsByTimestamp(records);
    const timestampRefs = /* @__PURE__ */ new Map();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
      onRecordsRendered && onRecordsRendered(timestampRefs);
    });
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("ul", { className: styles.logsScrollable, "aria-label": "State history by timestamp" }, Array.from(groupedLines.entries()).map(([key, records2]) => {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
        "li",
        {
          id: key.toString(10),
          key,
          "data-testid": key,
          ref: (element) => element && timestampRefs.set(key, element),
          className: styles.listItemWrapper
        },
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Timestamp, { time: key }),
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: styles.logsContainer }, records2.map(({ line }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), { key: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqueId)() }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_AlertStateTag__WEBPACK_IMPORTED_MODULE_4__.AlertStateTag, { state: line.previous, size: "sm", muted: true }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Icon, { name: "arrow-right", size: "sm" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_AlertStateTag__WEBPACK_IMPORTED_MODULE_4__.AlertStateTag, { state: line.current }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, null, line.values && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(AlertInstanceValues, { record: line.values })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, line.labels && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.TagList,
          {
            tags: (0,_common__WEBPACK_IMPORTED_MODULE_5__.omitLabels)(Object.entries(line.labels), commonLabels).map(
              ([key2, value]) => "".concat(key2, "=").concat(value)
            ),
            onClick: onLabelClick
          }
        )))))
      );
    }));
  }
);
LogRecordViewerByTimestamp.displayName = "LogRecordViewerByTimestamp";
function LogRecordViewerByInstance({ records, commonLabels }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  const groupedLines = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.groupBy)(records, (record) => {
    return JSON.stringify(record.line.labels);
  });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, Object.entries(groupedLines).map(([key, records2]) => {
    var _a;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", key }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h4", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.TagList,
      {
        tags: (0,_common__WEBPACK_IMPORTED_MODULE_5__.omitLabels)(Object.entries((_a = records2[0].line.labels) != null ? _a : {}), commonLabels).map(
          ([key2, value]) => "".concat(key2, "=").concat(value)
        )
      }
    )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: styles.logsContainer }, records2.map(({ line, timestamp }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { key: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqueId)() }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_AlertStateTag__WEBPACK_IMPORTED_MODULE_4__.AlertStateTag, { state: line.previous, size: "sm", muted: true }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Icon, { name: "arrow-right", size: "sm" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_AlertStateTag__WEBPACK_IMPORTED_MODULE_4__.AlertStateTag, { state: line.current }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, null, line.values && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(AlertInstanceValues, { record: line.values })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, (0,_grafana_data__WEBPACK_IMPORTED_MODULE_10__.dateTimeFormat)(timestamp))))));
  }));
}
const Timestamp = ({ time }) => {
  const dateTime = new Date(time);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: styles.timestampWrapper }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { alignItems: "center", gap: 1 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Icon, { name: "clock-nine", size: "sm" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", { className: styles.timestampText }, (0,_grafana_data__WEBPACK_IMPORTED_MODULE_10__.dateTimeFormat)(dateTime)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("small", null, "(", (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.formatDistanceToNowStrict)(dateTime), " ago)")));
};
const AlertInstanceValues = react__WEBPACK_IMPORTED_MODULE_2___default().memo(({ record }) => {
  const values = Object.entries(record);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, values.map(([key, value]) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Label__WEBPACK_IMPORTED_MODULE_3__.Label, { key, label: key, value })));
});
AlertInstanceValues.displayName = "AlertInstanceValues";
const getStyles = (theme) => ({
  logsContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    display: "grid",
    gridTemplateColumns: "max-content max-content max-content auto max-content",
    gap: theme.spacing(2, 1),
    alignItems: "center"
  }),
  logsScrollable: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    height: "500px",
    overflow: "scroll",
    flex: 1
  }),
  timestampWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    color: theme.colors.text.secondary
  }),
  timestampText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    color: theme.colors.text.primary,
    fontSize: theme.typography.bodySmall.fontSize,
    fontWeight: theme.typography.fontWeightBold
  }),
  listItemWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    background: "transparent",
    outline: "1px solid transparent",
    padding: "".concat(theme.spacing(1), " ").concat(theme.spacing(1.5)),
    [theme.transitions.handleMotion("no-preference", "reduce")]: {
      transition: "background 150ms, outline 150ms"
    }
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/state-history/LogTimelineViewer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogTimelineViewer: () => (/* binding */ LogTimelineViewer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _core_components_TimelineChart_TimelineChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/TimelineChart/TimelineChart.tsx");
/* harmony import */ var _core_components_TimelineChart_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/TimelineChart/utils.ts");







const replaceVariables = (v) => v;
const LogTimelineViewer = react__WEBPACK_IMPORTED_MODULE_0___default().memo(({ frames, timeRange }) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useTheme2)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_1__["default"], { disableHeight: true }, ({ width }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _core_components_TimelineChart_TimelineChart__WEBPACK_IMPORTED_MODULE_2__.TimelineChart,
    {
      frames,
      timeRange,
      timeZone: "browser",
      mode: _core_components_TimelineChart_utils__WEBPACK_IMPORTED_MODULE_3__.TimelineMode.Changes,
      height: 18 * frames.length + 50,
      width,
      showValue: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.VisibilityMode.Never,
      theme,
      rowHeight: 0.8,
      legend: {
        calcs: [],
        displayMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.LegendDisplayMode.List,
        placement: "bottom",
        showLegend: true
      },
      legendItems: [
        { label: "Normal", color: theme.colors.success.main, yAxis: 1 },
        { label: "Pending", color: theme.colors.warning.main, yAxis: 1 },
        { label: "Alerting", color: theme.colors.error.main, yAxis: 1 },
        { label: "NoData", color: theme.colors.info.main, yAxis: 1 },
        { label: "Mixed", color: theme.colors.text.secondary, yAxis: 1 }
      ],
      replaceVariables
    }
  ));
});
LogTimelineViewer.displayName = "LogTimelineViewer";


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/state-history/LokiStateHistory.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-data/src/datetime/moment_wrapper.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _api_stateHistoryApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/api/stateHistoryApi.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _AlertLabels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabels.tsx");
/* harmony import */ var _HoverCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/HoverCard.tsx");
/* harmony import */ var _LogRecordViewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/state-history/LogRecordViewer.tsx");
/* harmony import */ var _LogTimelineViewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/state-history/LogTimelineViewer.tsx");
/* harmony import */ var _useRuleHistoryRecords__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/state-history/useRuleHistoryRecords.tsx");














const STATE_HISTORY_POLLING_INTERVAL = 10 * 1e3;
const MAX_TIMELINE_SERIES = 12;
const LokiStateHistory = ({ ruleUID }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.useStyles2)(getStyles);
  const [instancesFilter, setInstancesFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const logsRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(/* @__PURE__ */ new Map());
  const { getValues, setValue, register, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_11__.useForm)({ defaultValues: { query: "" } });
  const { useGetRuleHistoryQuery } = _api_stateHistoryApi__WEBPACK_IMPORTED_MODULE_3__.stateHistoryApi;
  const queryTimeRange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => getDefaultTimeRange(), []);
  const {
    currentData: stateHistory,
    isLoading,
    isError,
    error
  } = useGetRuleHistoryQuery(
    {
      ruleUid: ruleUID,
      from: queryTimeRange.from.unix(),
      to: queryTimeRange.to.unix(),
      limit: 250
    },
    {
      refetchOnFocus: true,
      refetchOnReconnect: true,
      pollingInterval: STATE_HISTORY_POLLING_INTERVAL
    }
  );
  const { dataFrames, historyRecords, commonLabels, totalRecordsCount } = (0,_useRuleHistoryRecords__WEBPACK_IMPORTED_MODULE_9__.useRuleHistoryRecords)(
    stateHistory,
    instancesFilter
  );
  const { frameSubset, frameTimeRange } = useFrameSubset(dataFrames);
  const onLogRecordLabelClick = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (label) => {
      const matcherString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__.combineMatcherStrings)(getValues("query"), label);
      setInstancesFilter(matcherString);
      setValue("query", matcherString);
    },
    [setInstancesFilter, setValue, getValues]
  );
  const onFilterCleared = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    setInstancesFilter("");
    setValue("query", "");
  }, [setInstancesFilter, setValue]);
  if (isLoading) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, "Loading...");
  }
  if (isError) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Alert, { title: "Error fetching the state history", severity: "error" }, error instanceof Error ? error.message : "Unable to fetch alert state history");
  }
  const hasMoreInstances = frameSubset.length < dataFrames.length;
  const emptyStateMessage = totalRecordsCount > 0 ? "No matches were found for the given filters among the ".concat(totalRecordsCount, " instances") : "No state transitions have occurred in the last 30 days";
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: styles.fullSize }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("form", { onSubmit: handleSubmit((data) => setInstancesFilter(data.query)) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
    SearchFieldInput,
    {
      ...register("query"),
      showClearFilterSuffix: !!instancesFilter,
      onClearFilterClick: onFilterCleared
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", { type: "submit", hidden: true })), !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(commonLabels) && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: styles.commonLabels }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { gap: 1, alignItems: "center" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("strong", null, "Common labels"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Tooltip, { content: "Common labels are the ones attached to all of the alert instances" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Icon, { name: "info-circle" })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_AlertLabels__WEBPACK_IMPORTED_MODULE_5__.AlertLabels, { labels: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.fromPairs)(commonLabels), size: "sm" }))), (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(frameSubset) ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: styles.emptyState }, emptyStateMessage, totalRecordsCount > 0 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.Button, { variant: "secondary", type: "button", onClick: onFilterCleared }, "Clear filters"))) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: styles.graphWrapper }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_LogTimelineViewer__WEBPACK_IMPORTED_MODULE_8__.LogTimelineViewer, { frames: frameSubset, timeRange: frameTimeRange })), hasMoreInstances && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: styles.moreInstancesWarning }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { direction: "row", alignItems: "center", gap: 1 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Icon, { name: "exclamation-triangle", size: "sm" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("small", null, "Only showing ".concat(frameSubset.length, " out of ").concat(dataFrames.length, " instances. Click on the labels to narrow down the results")))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
    _LogRecordViewer__WEBPACK_IMPORTED_MODULE_7__.LogRecordViewerByTimestamp,
    {
      records: historyRecords,
      commonLabels,
      onRecordsRendered: (recordRefs) => logsRef.current = recordRefs,
      onLabelClick: onLogRecordLabelClick
    }
  )));
};
function useFrameSubset(frames) {
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const frameSubset = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.take)(frames, MAX_TIMELINE_SERIES);
    const frameSubsetTimestamps = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.sortBy)((0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniq)(frameSubset.flatMap((frame) => frame.fields[0].values)));
    const minTs = Math.min(...frameSubsetTimestamps);
    const maxTs = Math.max(...frameSubsetTimestamps);
    const rangeStart = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_17__.dateTime)(minTs);
    const rangeStop = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_17__.dateTime)(maxTs);
    const frameTimeRange = {
      from: rangeStart,
      to: rangeStop,
      raw: {
        from: rangeStart,
        to: rangeStop
      }
    };
    return { frameSubset, frameSubsetTimestamps, frameTimeRange };
  }, [frames]);
}
const SearchFieldInput = react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef(
  ({ showClearFilterSuffix, onClearFilterClick, ...rest }, ref) => {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_18__.Field,
      {
        label: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_19__.Label, { htmlFor: "instancesSearchInput" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { gap: 0.5 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Filter instances"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
          _HoverCard__WEBPACK_IMPORTED_MODULE_6__.HoverCard,
          {
            content: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, "Use label matcher expression (like ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "{foo=bar}"), ") or click on an instance label to filter instances")
          },
          /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Icon, { name: "info-circle", size: "sm" })
        )))
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_20__.Input,
        {
          id: "instancesSearchInput",
          prefix: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Icon, { name: "search" }),
          suffix: showClearFilterSuffix && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.Button, { fill: "text", icon: "times", size: "sm", onClick: onClearFilterClick }, "Clear"),
          placeholder: "Filter instances",
          ref,
          ...rest
        }
      )
    );
  }
);
SearchFieldInput.displayName = "SearchFieldInput";
function getDefaultTimeRange() {
  const fromDateTime = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_17__.dateTime)().subtract(30, "days");
  const toDateTime = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_17__.dateTime)();
  return {
    from: fromDateTime,
    to: toDateTime,
    raw: { from: fromDateTime, to: toDateTime }
  };
}
const getStyles = (theme) => ({
  fullSize: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    minWidth: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column"
  }),
  graphWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    padding: "".concat(theme.spacing(), " 0")
  }),
  emptyState: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    color: theme.colors.text.secondary,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    alignItems: "center",
    margin: "auto auto"
  }),
  moreInstancesWarning: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    color: theme.colors.warning.text,
    padding: theme.spacing()
  }),
  commonLabels: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    display: "grid",
    gridTemplateColumns: "max-content auto"
  }),
  // we need !important here to override the list item default styles
  highlightedLogRecord: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    background: "".concat(theme.colors.primary.transparent, " !important"),
    outline: "1px solid ".concat(theme.colors.primary.shade, " !important")
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LokiStateHistory);


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/state-history/common.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractCommonLabels: () => (/* binding */ extractCommonLabels),
/* harmony export */   omitLabels: () => (/* binding */ omitLabels)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


function omitLabels(labels, common) {
  return labels.filter((label) => {
    return !common.find((commonLabel) => JSON.stringify(commonLabel) === JSON.stringify(label));
  });
}
function extractCommonLabels(labels) {
  const flatLabels = labels.flatMap((label) => label);
  const commonLabels = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqBy)(
    flatLabels.filter((label) => {
      const count = flatLabels.filter((l) => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(label, l)).length;
      return count === Object.keys(labels).length;
    }),
    (label) => JSON.stringify(label)
  );
  return commonLabels;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/state-history/useRuleHistoryRecords.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isLine: () => (/* binding */ isLine),
/* harmony export */   isNumbers: () => (/* binding */ isNumbers),
/* harmony export */   logRecordsToDataFrame: () => (/* binding */ logRecordsToDataFrame),
/* harmony export */   useRuleHistoryRecords: () => (/* binding */ useRuleHistoryRecords)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/field/displayProcessor.ts");
/* harmony import */ var _grafana_data_src_field_fieldComparers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/field/fieldComparers.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-schema/src/raw/dashboard/x/dashboard_types.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/state-history/common.ts");









function useRuleHistoryRecords(stateHistory, filter) {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useTheme2)();
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _a, _b, _c, _d;
    const tsValues = (_b = (_a = stateHistory == null ? void 0 : stateHistory.data) == null ? void 0 : _a.values[0]) != null ? _b : [];
    const timestamps = isNumbers(tsValues) ? tsValues : [];
    const lines = (_d = (_c = stateHistory == null ? void 0 : stateHistory.data) == null ? void 0 : _c.values[1]) != null ? _d : [];
    const logRecords = timestamps.reduce((acc, timestamp, index) => {
      const line = lines[index];
      if (isLine(line)) {
        acc.push({ timestamp, line });
      }
      return acc;
    }, []);
    const logRecordsByInstance = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(logRecords, (record) => {
      return JSON.stringify(record.line.labels);
    });
    const groupLabels = Object.keys(logRecordsByInstance);
    const groupLabelsArray = groupLabels.map((label) => {
      return Object.entries(JSON.parse(label));
    });
    const commonLabels = (0,_common__WEBPACK_IMPORTED_MODULE_3__.extractCommonLabels)(groupLabelsArray);
    const filterMatchers = filter ? (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_2__.parseMatchers)(filter) : [];
    const filteredGroupedLines = Object.entries(logRecordsByInstance).filter(([key]) => {
      const labels = JSON.parse(key);
      return (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_2__.labelsMatchMatchers)(labels, filterMatchers);
    });
    const dataFrames = filteredGroupedLines.map(([key, records]) => {
      return logRecordsToDataFrame(key, records, commonLabels, theme);
    });
    return {
      historyRecords: logRecords.filter(({ line }) => line.labels && (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_2__.labelsMatchMatchers)(line.labels, filterMatchers)),
      dataFrames,
      commonLabels,
      totalRecordsCount: logRecords.length
    };
  }, [stateHistory, filter, theme]);
}
function isNumbers(value) {
  return value.every((v) => typeof v === "number");
}
function isLine(value) {
  return typeof value === "object" && value !== null && "current" in value && "previous" in value;
}
function logRecordsToDataFrame(instanceLabels, records, commonLabels, theme) {
  var _a;
  const parsedInstanceLabels = Object.entries(JSON.parse(instanceLabels));
  const timeField = {
    name: "time",
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.time,
    values: [...records.map((record) => record.timestamp), Date.now()],
    config: { displayName: "Time", custom: { fillOpacity: 100 } }
  };
  const timeIndex = timeField.values.map((_, index) => index);
  timeIndex.sort((0,_grafana_data_src_field_fieldComparers__WEBPACK_IMPORTED_MODULE_6__.fieldIndexComparer)(timeField));
  const stateValues = [...records.map((record) => record.line.current), (_a = records.at(-1)) == null ? void 0 : _a.line.current];
  const frame = {
    fields: [
      {
        ...timeField,
        values: timeField.values.map((_, i) => timeField.values[timeIndex[i]])
      },
      {
        name: "state",
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.string,
        values: stateValues.map((_, i) => stateValues[timeIndex[i]]),
        config: {
          displayName: (0,_common__WEBPACK_IMPORTED_MODULE_3__.omitLabels)(parsedInstanceLabels, commonLabels).map(([key, label]) => "".concat(key, "=").concat(label)).join(", "),
          color: { mode: "thresholds" },
          custom: { fillOpacity: 100 },
          mappings: [
            {
              type: _grafana_schema__WEBPACK_IMPORTED_MODULE_7__.MappingType.ValueToText,
              options: {
                Alerting: {
                  color: theme.colors.error.main
                },
                Pending: {
                  color: theme.colors.warning.main
                },
                Normal: {
                  color: theme.colors.success.main
                },
                NoData: {
                  color: theme.colors.info.main
                }
              }
            }
          ],
          thresholds: {
            mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_7__.ThresholdsMode.Absolute,
            steps: []
          }
        }
      }
    ],
    length: timeField.values.length,
    name: instanceLabels
  };
  frame.fields.forEach((field) => {
    field.display = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_8__.getDisplayProcessor)({ field, theme });
  });
  return frame;
}


/***/ })

}]);
//# sourceMappingURL=public_app_features_alerting_unified_components_rules_state-history_LokiStateHistory_tsx.33b1b681e0321aa92035.js.map
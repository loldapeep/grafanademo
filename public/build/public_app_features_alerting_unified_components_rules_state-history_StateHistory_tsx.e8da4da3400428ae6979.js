"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_features_alerting_unified_components_rules_state-history_StateHistory_tsx"],{

/***/ "./public/app/features/alerting/unified/components/rules/state-history/StateHistory.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   groupStateByLabels: () => (/* binding */ groupStateByLabels),
/* harmony export */   matchKey: () => (/* binding */ matchKey)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-data/src/datetime/formatter.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _hooks_useManagedAlertStateHistory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useManagedAlertStateHistory.ts");
/* harmony import */ var _AlertLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabel.tsx");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var _AlertStateTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx");










const StateHistory = ({ alertId }) => {
  const [textFilter, setTextFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const handleTextFilter = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((event) => {
    setTextFilter(event.currentTarget.value);
  }, []);
  const { loading, error, result = [] } = (0,_hooks_useManagedAlertStateHistory__WEBPACK_IMPORTED_MODULE_3__.useManagedAlertStateHistory)(alertId);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  if (loading && !error) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.LoadingPlaceholder, { text: "Loading history..." });
  }
  if (error && !loading) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Alert, { title: "Failed to fetch alert state history" }, error.message);
  }
  const columns = [
    { id: "state", label: "State", size: "max-content", renderCell: renderStateCell },
    { id: "value", label: "", size: "auto", renderCell: renderValueCell },
    { id: "timestamp", label: "Time", size: "max-content", renderCell: renderTimestampCell }
  ];
  const tables = Object.entries(groupStateByLabels(result)).sort().filter(([groupKey]) => matchKey(groupKey, textFilter)).map(([groupKey, items]) => {
    const tableItems = items.map((historyItem) => ({
      id: historyItem.id,
      data: historyItem
    }));
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { key: groupKey }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("header", { className: styles.tableGroupKey }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", { className: styles.goupKeyText, "aria-label": groupKey }, groupKey)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_DynamicTable__WEBPACK_IMPORTED_MODULE_5__.DynamicTable, { cols: columns, items: tableItems, pagination: { itemsPerPage: 25 } }));
  });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("nav", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field,
    {
      label: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Label, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Stack, { gap: 0.5, alignItems: "center" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Filter group"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Tooltip,
        {
          content: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, "Filter each state history group either by exact match or a regular expression, ex:", " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "region=eu-west-1"), " or ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "/region=us-.+/"))
        },
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Icon, { name: "info-circle", size: "sm" })
      )))
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Input, { prefix: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Icon, { name: "search" }), onChange: handleTextFilter, placeholder: "Search" })
  )), tables);
};
function groupStateByLabels(history) {
  const items = history.map((item) => {
    var _a, _b;
    const LABELS_REGEX = /{.*?}/g;
    const stringifiedLabels = (_b = (_a = item.text.match(LABELS_REGEX)) == null ? void 0 : _a.at(-1)) != null ? _b : "";
    return {
      id: String(item.id),
      state: item.newState,
      // let's omit the labels for each entry since it's just added noise to each state history item
      text: item.text.replace(stringifiedLabels, ""),
      data: item.data,
      timestamp: item.updated,
      stringifiedLabels
    };
  });
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.groupBy)(items, (item) => item.stringifiedLabels);
}
function matchKey(groupKey, textFilter) {
  if (textFilter === "") {
    return true;
  }
  const isRegExp = textFilter.startsWith("/") && textFilter.endsWith("/");
  if (!isRegExp) {
    return groupKey.includes(textFilter);
  }
  try {
    return new RegExp(textFilter.slice(1, -1)).test(groupKey);
  } catch (err) {
    return false;
  }
}
function renderValueCell(item) {
  var _a, _b;
  const matches = (_b = (_a = item.data.data) == null ? void 0 : _a.evalMatches) != null ? _b : [];
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, item.data.text, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(LabelsWrapper, null, matches.map((match) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_AlertLabel__WEBPACK_IMPORTED_MODULE_4__.AlertLabel, { key: match.metric, labelKey: match.metric, value: String(match.value) }))));
}
function renderStateCell(item) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_AlertStateTag__WEBPACK_IMPORTED_MODULE_6__.AlertStateTag, { state: item.data.state });
}
function renderTimestampCell(item) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: TimestampStyle }, item.data.timestamp && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, (0,_grafana_data__WEBPACK_IMPORTED_MODULE_16__.dateTimeFormat)(item.data.timestamp)));
}
const LabelsWrapper = ({ children }) => {
  const { wrapper } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: wrapper }, children);
};
const TimestampStyle = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  display: "flex",
  alignItems: "flex-end",
  flexDirection: "column"
});
const getStyles = (theme) => ({
  wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    "& > *": {
      marginRight: theme.spacing(1)
    }
  }),
  tableGroupKey: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }),
  goupKeyText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    overflowX: "auto",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    display: "block"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StateHistory);


/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useManagedAlertStateHistory.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useManagedAlertStateHistory: () => (/* binding */ useManagedAlertStateHistory)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");





function useManagedAlertStateHistory(alertId) {
  const dispatch = (0,_types__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const history = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__.useUnifiedAlertingSelector)(
    (state) => state.managedAlertStateHistory
  );
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_2__.fetchGrafanaAnnotationsAction)(alertId));
  }, [dispatch, alertId]);
  return history;
}


/***/ })

}]);
//# sourceMappingURL=public_app_features_alerting_unified_components_rules_state-history_StateHistory_tsx.e8da4da3400428ae6979.js.map
"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_features_alerting_unified_components_rule-viewer_tabs_Query_PrometheusQueryPreview_tsx"],{

/***/ "./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/RawQuery.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RawQuery: () => (/* binding */ RawQuery)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/text/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");






function RawQuery({ query, language, className }) {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useTheme2)();
  const styles = getStyles(theme);
  const highlighted = prismjs__WEBPACK_IMPORTED_MODULE_1___default().highlight(query, language.grammar, language.name);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
    "div",
    {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.editorField, "prism-syntax-highlight", className),
      "aria-label": "selector",
      dangerouslySetInnerHTML: { __html: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.textUtil.sanitize(highlighted) }
    }
  );
}
const getStyles = (theme) => {
  return {
    editorField: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      fontFamily: theme.typography.fontFamilyMonospace,
      fontSize: theme.typography.bodySmall.fontSize
    })
  };
};


//# sourceMappingURL=RawQuery.js.map


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-viewer/tabs/Query/PrometheusQueryPreview.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/RawQuery.js");
/* harmony import */ var _grafana_prometheus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-prometheus/src/promql.ts");




const PrometheusQueryPreview = ({ query }) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.RawQuery, { query, language: { grammar: _grafana_prometheus__WEBPACK_IMPORTED_MODULE_2__.promqlGrammar, name: "promql" } }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrometheusQueryPreview);


/***/ })

}]);
//# sourceMappingURL=public_app_features_alerting_unified_components_rule-viewer_tabs_Query_PrometheusQueryPreview_tsx.deeaff34a53db90b7c1c.js.map
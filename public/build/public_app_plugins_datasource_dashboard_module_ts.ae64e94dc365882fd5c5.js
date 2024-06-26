"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_plugins_datasource_dashboard_module_ts"],{

/***/ "./public/app/plugins/datasource/dashboard/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardDatasource: () => (/* binding */ DashboardDatasource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/defer.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/finalize.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/datasource.ts");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _features_dashboard_scene_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/dashboard-scene/utils/utils.ts");





class DashboardDatasource extends _grafana_data__WEBPACK_IMPORTED_MODULE_2__.DataSourceApi {
  constructor(instanceSettings) {
    super(instanceSettings);
  }
  getCollapsedText(query) {
    return "Dashboard Reference: ".concat(query.panelId);
  }
  query(options) {
    var _a, _b;
    const scene = (_b = (_a = options.scopedVars) == null ? void 0 : _a.__sceneObject) == null ? void 0 : _b.value;
    if (options.requestId.indexOf("mixed") > -1) {
      throw new Error("Dashboard data source cannot be used with Mixed data source.");
    }
    if (!scene) {
      throw new Error("Can only be called from a scene");
    }
    const query = options.targets[0];
    if (!query) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({ data: [] });
    }
    const panelId = query.panelId;
    if (!panelId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({ data: [] });
    }
    let sourcePanel = this.findSourcePanel(scene, panelId);
    if (!sourcePanel) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({ data: [], error: { message: "Could not find source panel" } });
    }
    let sourceDataProvider = sourcePanel.state.$data;
    if (!query.withTransforms && sourceDataProvider instanceof _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneDataTransformer) {
      sourceDataProvider = sourceDataProvider.state.$data;
    }
    if (!sourceDataProvider || !sourceDataProvider.getResultsStream) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({ data: [] });
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.defer)(() => {
      if (!sourceDataProvider.isActive && (sourceDataProvider == null ? void 0 : sourceDataProvider.setContainerWidth)) {
        sourceDataProvider == null ? void 0 : sourceDataProvider.setContainerWidth(500);
      }
      const cleanUp = sourceDataProvider.activate();
      return sourceDataProvider.getResultsStream().pipe(
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)((result) => {
          return {
            data: result.data.series,
            state: result.data.state,
            errors: result.data.errors,
            error: result.data.error,
            key: "source-ds-provider"
          };
        }),
        (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.finalize)(cleanUp)
      );
    });
  }
  findSourcePanel(scene, panelId) {
    return (0,_features_dashboard_scene_utils_utils__WEBPACK_IMPORTED_MODULE_1__.findVizPanelByKey)(scene, (0,_features_dashboard_scene_utils_utils__WEBPACK_IMPORTED_MODULE_1__.getVizPanelKeyForPanelId)(panelId));
  }
  testDatasource() {
    return Promise.resolve({ message: "", status: "" });
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/dashboard/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/datasource.ts");
/* harmony import */ var _DashboardQueryEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/dashboard/DashboardQueryEditor.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/dashboard/datasource.ts");




const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_1__.DashboardDatasource).setQueryEditor(_DashboardQueryEditor__WEBPACK_IMPORTED_MODULE_0__.DashboardQueryEditor);


/***/ })

}]);
//# sourceMappingURL=public_app_plugins_datasource_dashboard_module_ts.ae64e94dc365882fd5c5.js.map
"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["tableOldPlugin"],{

/***/ "./public/app/angular/AngularLocationWrapper.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngularLocationWrapper: () => (/* binding */ AngularLocationWrapper)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/utils/deprecationWarning.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/utils/url.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.ts");



const DEFAULT_PORTS = { http: 80, https: 443, ftp: 21 };
class AngularLocationWrapper {
  constructor() {
    this.absUrl = this.wrapInDeprecationWarning(this.absUrl);
    this.hash = this.wrapInDeprecationWarning(this.hash);
    this.host = this.wrapInDeprecationWarning(this.host);
    this.path = this.wrapInDeprecationWarning(this.path);
    this.port = this.wrapInDeprecationWarning(this.port, "window.location");
    this.protocol = this.wrapInDeprecationWarning(this.protocol, "window.location");
    this.replace = this.wrapInDeprecationWarning(this.replace);
    this.search = this.wrapInDeprecationWarning(this.search);
    this.state = this.wrapInDeprecationWarning(this.state);
    this.url = this.wrapInDeprecationWarning(this.url);
  }
  wrapInDeprecationWarning(fn, replacement) {
    let self = this;
    return function wrapper() {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.deprecationWarning)("$location", fn.name, replacement || "locationService");
      return fn.apply(self, arguments);
    };
  }
  absUrl() {
    return "".concat(window.location.origin).concat(this.url());
  }
  hash(newHash) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.navigationLogger)("AngularLocationWrapper", false, "Angular compat layer: hash");
    if (!newHash) {
      return _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation().hash.slice(1);
    } else {
      throw new Error("AngularLocationWrapper method not implemented.");
    }
  }
  host() {
    return new URL(window.location.href).hostname;
  }
  path(pathname) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.navigationLogger)("AngularLocationWrapper", false, "Angular compat layer: path");
    const location = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation();
    if (pathname !== void 0 && pathname !== null) {
      let parsedPath = String(pathname);
      parsedPath = parsedPath.startsWith("/") ? parsedPath : "/".concat(parsedPath);
      const url = new URL("".concat(window.location.origin).concat(parsedPath));
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push({
        pathname: url.pathname,
        search: url.search.length > 0 ? url.search : location.search,
        hash: url.hash.length > 0 ? url.hash : location.hash
      });
      return this;
    }
    if (pathname === null) {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push("/");
      return this;
    }
    return location.pathname;
  }
  port() {
    const url = new URL(window.location.href);
    return parseInt(url.port, 10) || DEFAULT_PORTS[url.protocol] || null;
  }
  protocol() {
    return new URL(window.location.href).protocol.slice(0, -1);
  }
  replace() {
    throw new Error("AngularLocationWrapper method not implemented.");
  }
  search(search, paramValue) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.navigationLogger)("AngularLocationWrapper", false, "Angular compat layer: search");
    if (!search) {
      return _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getSearchObject();
    }
    if (search && arguments.length > 1) {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.partial({
        [search]: paramValue
      });
      return this;
    }
    if (search) {
      let newQuery;
      if (typeof search === "object") {
        newQuery = { ...search };
      } else {
        newQuery = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationSearchToObject)(search);
      }
      for (const key in newQuery) {
        if (newQuery[key] === null || newQuery[key] === void 0) {
          delete newQuery[key];
        }
      }
      const updatedUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_2__.urlUtil.renderUrl(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation().pathname, newQuery);
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push(updatedUrl);
    }
    return this;
  }
  state(state) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.navigationLogger)("AngularLocationWrapper", false, "Angular compat layer: state");
    throw new Error("AngularLocationWrapper method not implemented.");
  }
  url(newUrl) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.navigationLogger)("AngularLocationWrapper", false, "Angular compat layer: url");
    if (newUrl !== void 0) {
      if (newUrl.startsWith("#")) {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push({ ..._grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation(), hash: newUrl });
      } else if (newUrl.startsWith("?")) {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push({ ..._grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation(), search: newUrl });
      } else if (newUrl.trim().length === 0) {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push("/");
      } else {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push(newUrl);
      }
      return _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService;
    }
    const location = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation();
    return "".concat(location.pathname).concat(location.search).concat(location.hash);
  }
}


/***/ }),

/***/ "./public/app/angular/panel/metrics_panel_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetricsPanelCtrl: () => (/* binding */ MetricsPanelCtrl)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/dataframe/processDataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/legacyEvents.ts");
/* harmony import */ var _panel_ctrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/angular/panel/panel_ctrl.ts");
/* harmony import */ var _features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");





class MetricsPanelCtrl extends _panel_ctrl__WEBPACK_IMPORTED_MODULE_1__.PanelCtrl {
  constructor($scope, $injector) {
    super($scope, $injector);
    this.skipDataOnInit = false;
    this.dataList = [];
    this.useDataFrames = false;
    // Updates the response with information from the stream
    this.panelDataObserver = {
      next: (data) => {
        this.panelData = data;
        if (data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Error) {
          this.loading = false;
          this.processDataError(data.error);
        }
        if (data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Loading) {
          this.loading = true;
          this.angularDirtyCheck();
          return;
        }
        if (data.request) {
          const { timeInfo } = data.request;
          if (timeInfo) {
            this.timeInfo = timeInfo;
          }
        }
        if (data.timeRange) {
          this.range = data.timeRange;
        }
        if (this.useDataFrames) {
          this.handleDataFrames(data.series);
        } else {
          const legacy = data.series.map((v) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.toLegacyResponseData)(v));
          this.handleQueryResult({ data: legacy });
        }
        this.angularDirtyCheck();
      }
    };
    this.contextSrv = $injector.get("contextSrv");
    this.datasourceSrv = $injector.get("datasourceSrv");
    this.timeSrv = $injector.get("timeSrv");
    this.templateSrv = $injector.get("templateSrv");
    this.panel.datasource = this.panel.datasource || null;
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_5__.PanelEvents.refresh, this.onMetricsPanelRefresh.bind(this));
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_5__.PanelEvents.panelTeardown, this.onPanelTearDown.bind(this));
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_5__.PanelEvents.componentDidMount, this.onMetricsPanelMounted.bind(this));
  }
  onMetricsPanelMounted() {
    const queryRunner = this.panel.getQueryRunner();
    this.querySubscription = queryRunner.getData({ withTransforms: true, withFieldConfig: true }).subscribe(this.panelDataObserver);
  }
  onPanelTearDown() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
      this.querySubscription = null;
    }
  }
  onMetricsPanelRefresh() {
    if (this.otherPanelInFullscreenMode()) {
      return;
    }
    if (this.panel.snapshotData) {
      this.updateTimeRange();
      let data = this.panel.snapshotData;
      if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(data)) {
        data = data.data;
      }
      this.panelData = {
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Done,
        series: data,
        timeRange: this.range
      };
      return this.$timeout(() => {
        this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_5__.PanelEvents.dataSnapshotLoad, data);
      });
    }
    delete this.error;
    this.loading = true;
    return this.datasourceSrv.get(this.panel.datasource, this.panel.scopedVars).then(this.issueQueries.bind(this)).catch((err) => {
      this.processDataError(err);
    });
  }
  processDataError(err) {
    if (err.cancelled) {
      console.log("Panel request cancelled", err);
      return;
    }
    this.error = err.message || "Request Error";
    if (err.data) {
      if (err.data.message) {
        this.error = err.data.message;
      } else if (err.data.error) {
        this.error = err.data.error;
      }
    }
    this.angularDirtyCheck();
  }
  angularDirtyCheck() {
    if (!this.$scope.$root.$$phase) {
      this.$scope.$digest();
    }
  }
  updateTimeRange(datasource) {
    this.datasource = datasource || this.datasource;
    this.range = this.timeSrv.timeRange();
    const newTimeData = (0,_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__.applyPanelTimeOverrides)(this.panel, this.range);
    this.timeInfo = newTimeData.timeInfo;
    this.range = newTimeData.timeRange;
  }
  issueQueries(datasource) {
    this.updateTimeRange(datasource);
    this.datasource = datasource;
    const panel = this.panel;
    const queryRunner = panel.getQueryRunner();
    return queryRunner.run({
      datasource: panel.datasource,
      queries: panel.targets,
      panelId: panel.id,
      dashboardUID: this.dashboard.uid,
      timezone: this.dashboard.getTimezone(),
      timeInfo: this.timeInfo,
      timeRange: this.range,
      maxDataPoints: panel.maxDataPoints || this.width,
      minInterval: panel.interval,
      scopedVars: panel.scopedVars,
      cacheTimeout: panel.cacheTimeout,
      queryCachingTTL: panel.queryCachingTTL,
      transformations: panel.transformations
    });
  }
  handleDataFrames(data) {
    this.loading = false;
    if (this.dashboard && this.dashboard.snapshot) {
      this.panel.snapshotData = data.map((frame) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.toDataFrameDTO)(frame));
    }
    try {
      this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_5__.PanelEvents.dataFramesReceived, data);
    } catch (err) {
      this.processDataError(err);
    }
  }
  handleQueryResult(result) {
    this.loading = false;
    if (this.dashboard.snapshot) {
      this.panel.snapshotData = result.data;
    }
    if (!result || !result.data) {
      console.log("Data source query result invalid, missing data field:", result);
      result = { data: [] };
    }
    try {
      this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_5__.PanelEvents.dataReceived, result.data);
    } catch (err) {
      this.processDataError(err);
    }
  }
}



/***/ }),

/***/ "./public/app/angular/panel/panel_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelCtrl: () => (/* binding */ PanelCtrl)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/events/EventBus.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/legacyEvents.ts");
/* harmony import */ var _AngularLocationWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/angular/AngularLocationWrapper.ts");
/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/core.ts");






class PanelCtrl {
  constructor($scope, $injector) {
    this.pluginName = "";
    this.pluginId = "";
    this.editModeInitiated = false;
    this.loading = false;
    // overriden from react
    this.onPluginTypeChange = (plugin) => {
    };
    var _a, _b;
    this.panel = (_a = this.panel) != null ? _a : $scope.$parent.panel;
    this.dashboard = (_b = this.dashboard) != null ? _b : $scope.$parent.dashboard;
    this.$injector = $injector;
    this.$scope = $scope;
    this.$timeout = $injector.get("$timeout");
    this.editorTabs = [];
    this.$location = new _AngularLocationWrapper__WEBPACK_IMPORTED_MODULE_1__.AngularLocationWrapper();
    this.events = new _grafana_data__WEBPACK_IMPORTED_MODULE_4__.EventBusSrv();
    this.timing = {};
    const plugin = _core_config__WEBPACK_IMPORTED_MODULE_2__["default"].panels[this.panel.type];
    if (plugin) {
      this.pluginId = plugin.id;
      this.pluginName = plugin.name;
    }
    $scope.$on(_grafana_data__WEBPACK_IMPORTED_MODULE_5__.PanelEvents.componentDidMount.name, () => this.panelDidMount());
  }
  panelDidMount() {
    this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_5__.PanelEvents.componentDidMount);
    this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_5__.PanelEvents.initialized);
    this.dashboard.panelInitialized(this.panel);
  }
  renderingCompleted() {
    _core_core__WEBPACK_IMPORTED_MODULE_3__.profiler.renderingCompleted();
  }
  refresh() {
    this.panel.refresh();
  }
  publishAppEvent(event, payload) {
    this.$scope.$root.appEvent(event, payload);
  }
  initEditMode() {
    if (!this.editModeInitiated) {
      this.editModeInitiated = true;
      this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_5__.PanelEvents.editModeInitialized);
    }
  }
  addEditorTab(title, directiveFn, index, icon) {
    const editorTab = { title, directiveFn, icon };
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(directiveFn)) {
      editorTab.directiveFn = () => {
        return { templateUrl: directiveFn };
      };
    }
    if (index) {
      this.editorTabs.splice(index, 0, editorTab);
    } else {
      this.editorTabs.push(editorTab);
    }
  }
  getExtendedMenu() {
    const menu = [];
    this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_5__.PanelEvents.initPanelActions, menu);
    return menu;
  }
  // Override in sub-class to add items before extended menu
  async getAdditionalMenuItems() {
    return [];
  }
  otherPanelInFullscreenMode() {
    return this.dashboard.otherPanelInFullscreen(this.panel);
  }
  render(payload) {
    this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_5__.PanelEvents.render, payload);
  }
}


/***/ }),

/***/ "./public/app/angular/panel/query_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryCtrl: () => (/* binding */ QueryCtrl)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


class QueryCtrl {
  constructor($scope, $injector) {
    this.$scope = $scope;
    this.$injector = $injector;
    var _a, _b, _c, _d, _e;
    this.panelCtrl = (_a = this.panelCtrl) != null ? _a : $scope.ctrl.panelCtrl;
    this.target = (_b = this.target) != null ? _b : $scope.ctrl.target;
    this.datasource = (_c = this.datasource) != null ? _c : $scope.ctrl.datasource;
    this.panel = (_e = (_d = this.panelCtrl) == null ? void 0 : _d.panel) != null ? _e : $scope.ctrl.panelCtrl.panel;
    this.isLastQuery = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf)(this.panel.targets, this.target) === this.panel.targets.length - 1;
  }
  refresh() {
    this.panelCtrl.refresh();
  }
}


/***/ }),

/***/ "./public/app/features/variables/adhoc/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addFilter: () => (/* binding */ addFilter),
/* harmony export */   applyFilterFromTable: () => (/* binding */ applyFilterFromTable),
/* harmony export */   changeFilter: () => (/* binding */ changeFilter),
/* harmony export */   changeVariableDatasource: () => (/* binding */ changeVariableDatasource),
/* harmony export */   removeFilter: () => (/* binding */ removeFilter),
/* harmony export */   setFiltersFromUrl: () => (/* binding */ setFiltersFromUrl)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
/* harmony import */ var _editor_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/variables/editor/reducer.ts");
/* harmony import */ var _guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/variables/guard.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/variables/state/actions.ts");
/* harmony import */ var _state_keyedVariablesReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/variables/state/keyedVariablesReducer.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/variables/state/selectors.ts");
/* harmony import */ var _state_sharedReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/variables/state/sharedReducer.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/variables/utils.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/variables/adhoc/reducer.ts");











const filterTableName = "Filters";
const applyFilterFromTable = (options) => {
  return async (dispatch, getState) => {
    let variable = getVariableByOptions(options, getState());
    if (!variable) {
      dispatch(createAdHocVariable(options));
      variable = getVariableByOptions(options, getState());
      if (!variable) {
        return;
      }
    }
    const index = variable.filters.findIndex((f) => f.key === options.key && f.value === options.value);
    if (index === -1) {
      const { value, key, operator } = options;
      const filter2 = { value, key, operator };
      return await dispatch(addFilter((0,_utils__WEBPACK_IMPORTED_MODULE_8__.toKeyedVariableIdentifier)(variable), filter2));
    }
    const filter = { ...variable.filters[index], operator: options.operator };
    return await dispatch(changeFilter((0,_utils__WEBPACK_IMPORTED_MODULE_8__.toKeyedVariableIdentifier)(variable), { index, filter }));
  };
};
const changeFilter = (identifier, update) => {
  return async (dispatch, getState) => {
    const variable = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_6__.getVariable)(identifier, getState());
    dispatch((0,_state_keyedVariablesReducer__WEBPACK_IMPORTED_MODULE_5__.toKeyedAction)(identifier.rootStateKey, (0,_reducer__WEBPACK_IMPORTED_MODULE_9__.filterUpdated)((0,_utils__WEBPACK_IMPORTED_MODULE_8__.toVariablePayload)(variable, update))));
    await dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_4__.variableUpdated)((0,_utils__WEBPACK_IMPORTED_MODULE_8__.toKeyedVariableIdentifier)(variable), true));
  };
};
const removeFilter = (identifier, index) => {
  return async (dispatch, getState) => {
    const variable = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_6__.getVariable)(identifier, getState());
    dispatch((0,_state_keyedVariablesReducer__WEBPACK_IMPORTED_MODULE_5__.toKeyedAction)(identifier.rootStateKey, (0,_reducer__WEBPACK_IMPORTED_MODULE_9__.filterRemoved)((0,_utils__WEBPACK_IMPORTED_MODULE_8__.toVariablePayload)(variable, index))));
    await dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_4__.variableUpdated)((0,_utils__WEBPACK_IMPORTED_MODULE_8__.toKeyedVariableIdentifier)(variable), true));
  };
};
const addFilter = (identifier, filter) => {
  return async (dispatch, getState) => {
    const variable = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_6__.getVariable)(identifier, getState());
    dispatch((0,_state_keyedVariablesReducer__WEBPACK_IMPORTED_MODULE_5__.toKeyedAction)(identifier.rootStateKey, (0,_reducer__WEBPACK_IMPORTED_MODULE_9__.filterAdded)((0,_utils__WEBPACK_IMPORTED_MODULE_8__.toVariablePayload)(variable, filter))));
    await dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_4__.variableUpdated)((0,_utils__WEBPACK_IMPORTED_MODULE_8__.toKeyedVariableIdentifier)(variable), true));
  };
};
const setFiltersFromUrl = (identifier, filters) => {
  return async (dispatch, getState) => {
    const variable = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_6__.getVariable)(identifier, getState());
    dispatch((0,_state_keyedVariablesReducer__WEBPACK_IMPORTED_MODULE_5__.toKeyedAction)(identifier.rootStateKey, (0,_reducer__WEBPACK_IMPORTED_MODULE_9__.filtersRestored)((0,_utils__WEBPACK_IMPORTED_MODULE_8__.toVariablePayload)(variable, filters))));
    await dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_4__.variableUpdated)((0,_utils__WEBPACK_IMPORTED_MODULE_8__.toKeyedVariableIdentifier)(variable), true));
  };
};
const changeVariableDatasource = (identifier, datasource) => {
  return async (dispatch, getState) => {
    const variable = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_6__.getVariable)(identifier, getState());
    dispatch(
      (0,_state_keyedVariablesReducer__WEBPACK_IMPORTED_MODULE_5__.toKeyedAction)(
        identifier.rootStateKey,
        (0,_state_sharedReducer__WEBPACK_IMPORTED_MODULE_7__.changeVariableProp)((0,_utils__WEBPACK_IMPORTED_MODULE_8__.toVariablePayload)(variable, { propName: "datasource", propValue: datasource }))
      )
    );
    const ds = await (0,_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_1__.getDatasourceSrv)().get(datasource);
    const message = (ds == null ? void 0 : ds.getTagKeys) ? "Ad hoc filters are applied automatically to all queries that target this data source" : "This data source does not support ad hoc filters yet.";
    dispatch(
      (0,_state_keyedVariablesReducer__WEBPACK_IMPORTED_MODULE_5__.toKeyedAction)(
        identifier.rootStateKey,
        (0,_editor_reducer__WEBPACK_IMPORTED_MODULE_2__.changeVariableEditorExtended)({
          infoText: message
        })
      )
    );
  };
};
const createAdHocVariable = (options) => {
  return (dispatch, getState) => {
    const key = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_6__.getLastKey)(getState());
    const model = {
      ...(0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(_reducer__WEBPACK_IMPORTED_MODULE_9__.initialAdHocVariableModelState),
      datasource: options.datasource,
      name: filterTableName,
      id: filterTableName,
      rootStateKey: key
    };
    const global = false;
    const index = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_6__.getNewVariableIndex)(key, getState());
    const identifier = { type: "adhoc", id: model.id, rootStateKey: key };
    dispatch((0,_state_keyedVariablesReducer__WEBPACK_IMPORTED_MODULE_5__.toKeyedAction)(key, (0,_state_sharedReducer__WEBPACK_IMPORTED_MODULE_7__.addVariable)((0,_utils__WEBPACK_IMPORTED_MODULE_8__.toVariablePayload)(identifier, { global, model, index }))));
  };
};
const getVariableByOptions = (options, state) => {
  var _a;
  const key = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_6__.getLastKey)(state);
  const templatingState = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_6__.getVariablesState)(key, state);
  let result;
  for (const v of Object.values(templatingState.variables)) {
    if ((0,_guard__WEBPACK_IMPORTED_MODULE_3__.isAdHoc)(v) && ((_a = v.datasource) == null ? void 0 : _a.uid) === options.datasource.uid) {
      result = v;
      break;
    }
  }
  return result;
};


/***/ }),

/***/ "./public/app/features/variables/adhoc/reducer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adHocVariableReducer: () => (/* binding */ adHocVariableReducer),
/* harmony export */   adHocVariableSlice: () => (/* binding */ adHocVariableSlice),
/* harmony export */   filterAdded: () => (/* binding */ filterAdded),
/* harmony export */   filterRemoved: () => (/* binding */ filterRemoved),
/* harmony export */   filterUpdated: () => (/* binding */ filterUpdated),
/* harmony export */   filtersRestored: () => (/* binding */ filtersRestored),
/* harmony export */   initialAdHocVariableModelState: () => (/* binding */ initialAdHocVariableModelState)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/variables/types.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/variables/state/selectors.ts");
/* harmony import */ var _state_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/variables/state/types.ts");





const initialAdHocVariableModelState = {
  ..._types__WEBPACK_IMPORTED_MODULE_0__.initialVariableModelState,
  type: "adhoc",
  datasource: null,
  filters: []
};
const adHocVariableSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createSlice)({
  name: "templating/adhoc",
  initialState: _state_types__WEBPACK_IMPORTED_MODULE_2__.initialVariablesState,
  reducers: {
    filterAdded: (state, action) => {
      const instanceState = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_1__.getInstanceState)(state, action.payload.id);
      if (instanceState.type !== "adhoc") {
        return;
      }
      instanceState.filters.push(action.payload.data);
    },
    filterRemoved: (state, action) => {
      const instanceState = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_1__.getInstanceState)(state, action.payload.id);
      if (instanceState.type !== "adhoc") {
        return;
      }
      const index = action.payload.data;
      instanceState.filters.splice(index, 1);
    },
    filterUpdated: (state, action) => {
      const instanceState = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_1__.getInstanceState)(state, action.payload.id);
      if (instanceState.type !== "adhoc") {
        return;
      }
      const { filter, index } = action.payload.data;
      instanceState.filters[index] = filter;
    },
    filtersRestored: (state, action) => {
      const instanceState = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_1__.getInstanceState)(state, action.payload.id);
      if (instanceState.type !== "adhoc") {
        return;
      }
      instanceState.filters = action.payload.data;
    }
  }
});
const { filterAdded, filterRemoved, filterUpdated, filtersRestored } = adHocVariableSlice.actions;
const adHocVariableReducer = adHocVariableSlice.reducer;


/***/ }),

/***/ "./public/app/plugins/panel/table-old/column_options.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColumnOptionsCtrl: () => (/* binding */ ColumnOptionsCtrl),
/* harmony export */   columnOptionsTab: () => (/* binding */ columnOptionsTab)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");



const _ColumnOptionsCtrl = class _ColumnOptionsCtrl {
  constructor($scope) {
    $scope.editor = this;
    this.activeStyleIndex = 0;
    this.panelCtrl = $scope.ctrl;
    this.panel = this.panelCtrl.panel;
    this.unitFormats = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getValueFormats)();
    this.colorModes = [
      { text: "Disabled", value: null },
      { text: "Cell", value: "cell" },
      { text: "Value", value: "value" },
      { text: "Row", value: "row" }
    ];
    this.columnTypes = [
      { text: "Number", value: "number" },
      { text: "String", value: "string" },
      { text: "Date", value: "date" },
      { text: "Hidden", value: "hidden" }
    ];
    this.fontSizes = ["80%", "90%", "100%", "110%", "120%", "130%", "150%", "160%", "180%", "200%", "220%", "250%"];
    this.dateFormats = [
      { text: "YYYY-MM-DD HH:mm:ss", value: "YYYY-MM-DD HH:mm:ss" },
      { text: "YYYY-MM-DD HH:mm:ss.SSS", value: "YYYY-MM-DD HH:mm:ss.SSS" },
      { text: "MM/DD/YY h:mm:ss a", value: "MM/DD/YY h:mm:ss a" },
      { text: "MMMM D, YYYY LT", value: "MMMM D, YYYY LT" },
      { text: "YYYY-MM-DD", value: "YYYY-MM-DD" }
    ];
    this.mappingTypes = [
      { text: "Value to text", value: 1 },
      { text: "Range to text", value: 2 }
    ];
    this.alignTypes = _ColumnOptionsCtrl.alignTypesEnum;
    this.getColumnNames = () => {
      if (!this.panelCtrl.table) {
        return [];
      }
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.panelCtrl.table.columns, (col) => {
        return col.text;
      });
    };
    this.onColorChange = this.onColorChange.bind(this);
  }
  render() {
    this.panelCtrl.render();
  }
  setUnitFormat(column) {
    return (value) => {
      column.unit = value;
      this.panelCtrl.render();
    };
  }
  addColumnStyle() {
    const newStyleRule = {
      unit: "short",
      type: "number",
      alias: "",
      decimals: 2,
      colors: ["rgba(245, 54, 54, 0.9)", "rgba(237, 129, 40, 0.89)", "rgba(50, 172, 45, 0.97)"],
      colorMode: null,
      pattern: "",
      dateFormat: "YYYY-MM-DD HH:mm:ss",
      thresholds: [],
      mappingType: 1,
      align: "auto"
    };
    const styles = this.panel.styles;
    const stylesCount = styles.length;
    let indexToInsert = stylesCount;
    if (stylesCount > 0) {
      const last = styles[stylesCount - 1];
      if (last.pattern === "/.*/") {
        indexToInsert = stylesCount - 1;
      }
    }
    styles.splice(indexToInsert, 0, newStyleRule);
    this.activeStyleIndex = indexToInsert;
  }
  removeColumnStyle(style) {
    this.panel.styles = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.without)(this.panel.styles, style);
  }
  invertColorOrder(index) {
    const ref = this.panel.styles[index].colors;
    const copy = ref[0];
    ref[0] = ref[2];
    ref[2] = copy;
    this.panelCtrl.render();
  }
  onColorChange(style, colorIndex) {
    return (newColor) => {
      style.colors[colorIndex] = newColor;
      this.render();
    };
  }
  addValueMap(style) {
    if (!style.valueMaps) {
      style.valueMaps = [];
    }
    style.valueMaps.push({ value: "", text: "" });
    this.panelCtrl.render();
  }
  removeValueMap(style, index) {
    style.valueMaps.splice(index, 1);
    this.panelCtrl.render();
  }
  addRangeMap(style) {
    if (!style.rangeMaps) {
      style.rangeMaps = [];
    }
    style.rangeMaps.push({ from: "", to: "", text: "" });
    this.panelCtrl.render();
  }
  removeRangeMap(style, index) {
    style.rangeMaps.splice(index, 1);
    this.panelCtrl.render();
  }
};
_ColumnOptionsCtrl.alignTypesEnum = [
  { text: "auto", value: "" },
  { text: "left", value: "left" },
  { text: "center", value: "center" },
  { text: "right", value: "right" }
];
_ColumnOptionsCtrl.$inject = ["$scope"];
let ColumnOptionsCtrl = _ColumnOptionsCtrl;
function columnOptionsTab() {
  "use strict";
  return {
    restrict: "E",
    scope: true,
    templateUrl: "public/app/plugins/panel/table-old/column_options.html",
    controller: ColumnOptionsCtrl
  };
}


/***/ }),

/***/ "./public/app/plugins/panel/table-old/editor.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TablePanelEditorCtrl: () => (/* binding */ TablePanelEditorCtrl),
/* harmony export */   tablePanelEditor: () => (/* binding */ tablePanelEditor)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _transformers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/table-old/transformers.ts");



class TablePanelEditorCtrl {
  constructor($scope, uiSegmentSrv) {
    this.uiSegmentSrv = uiSegmentSrv;
    this.canSetColumns = false;
    this.columnsHelpMessage = "";
    $scope.editor = this;
    this.panelCtrl = $scope.ctrl;
    this.panel = this.panelCtrl.panel;
    this.transformers = _transformers__WEBPACK_IMPORTED_MODULE_1__.transformers;
    this.fontSizes = ["80%", "90%", "100%", "110%", "120%", "130%", "150%", "160%", "180%", "200%", "220%", "250%"];
    this.addColumnSegment = uiSegmentSrv.newPlusButton();
    this.updateTransformHints();
  }
  updateTransformHints() {
    this.canSetColumns = false;
    this.columnsHelpMessage = "";
    switch (this.panel.transform) {
      case "timeseries_aggregations": {
        this.canSetColumns = true;
        break;
      }
      case "json": {
        this.canSetColumns = true;
        break;
      }
      case "table": {
        this.columnsHelpMessage = "Columns and their order are determined by the data query";
      }
    }
  }
  getColumnOptions() {
    if (!this.panelCtrl.dataRaw) {
      return Promise.resolve([]);
    }
    const columns = this.transformers[this.panel.transform].getColumns(this.panelCtrl.dataRaw);
    const segments = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(columns, (c) => this.uiSegmentSrv.newSegment({ value: c.text }));
    return Promise.resolve(segments);
  }
  addColumn() {
    const columns = _transformers__WEBPACK_IMPORTED_MODULE_1__.transformers[this.panel.transform].getColumns(this.panelCtrl.dataRaw);
    const column = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(columns, { text: this.addColumnSegment.value });
    if (column) {
      this.panel.columns.push(column);
      this.render();
    }
    const plusButton = this.uiSegmentSrv.newPlusButton();
    this.addColumnSegment.html = plusButton.html;
    this.addColumnSegment.value = plusButton.value;
  }
  transformChanged() {
    this.panel.columns = [];
    if (this.panel.transform === "annotations") {
      this.panelCtrl.refresh();
    } else {
      if (this.panel.transform === "timeseries_aggregations") {
        this.panel.columns.push({ text: "Avg", value: "avg" });
      }
      this.updateTransformHints();
      this.render();
    }
  }
  render() {
    this.panelCtrl.render();
  }
  removeColumn(column) {
    this.panel.columns = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.without)(this.panel.columns, column);
    this.panelCtrl.render();
  }
}
TablePanelEditorCtrl.$inject = ["$scope", "uiSegmentSrv"];
function tablePanelEditor() {
  "use strict";
  return {
    restrict: "E",
    scope: true,
    templateUrl: "public/app/plugins/panel/table-old/editor.html",
    controller: TablePanelEditorCtrl
  };
}


/***/ }),

/***/ "./public/app/plugins/panel/table-old/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TablePanelCtrl: () => (/* binding */ TablePanelCtrl),
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/jquery/dist/jquery-exposed.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-data/src/types/legacyEvents.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-data/src/dataframe/processDataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-data/src/panel/PanelPlugin.ts");
/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _features_variables_adhoc_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/variables/adhoc/actions.ts");
/* harmony import */ var _plugins_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/sdk.ts");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var _column_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/panel/table-old/column_options.ts");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/panel/table-old/editor.ts");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/panel/table-old/renderer.ts");
/* harmony import */ var _transformers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/panel/table-old/transformers.ts");












class TablePanelCtrl extends _plugins_sdk__WEBPACK_IMPORTED_MODULE_4__.MetricsPanelCtrl {
  constructor($scope, $injector, annotationsSrv, $sanitize) {
    super($scope, $injector);
    this.annotationsSrv = annotationsSrv;
    this.$sanitize = $sanitize;
    this.panelDefaults = {
      targets: [{}],
      transform: "timeseries_to_columns",
      pageSize: null,
      showHeader: true,
      styles: [
        {
          type: "date",
          pattern: "Time",
          alias: "Time",
          dateFormat: "YYYY-MM-DD HH:mm:ss",
          align: "auto"
        },
        {
          unit: "short",
          type: "number",
          alias: "",
          decimals: 2,
          colors: ["rgba(245, 54, 54, 0.9)", "rgba(237, 129, 40, 0.89)", "rgba(50, 172, 45, 0.97)"],
          colorMode: null,
          pattern: "/.*/",
          thresholds: [],
          align: "right"
        }
      ],
      columns: [],
      fontSize: "100%",
      sort: { col: 0, desc: true }
    };
    this.pageIndex = 0;
    if (this.panel.styles === void 0) {
      this.panel.styles = this.panel.columns;
      this.panel.columns = this.panel.fields;
      delete this.panel.columns;
      delete this.panel.fields;
    }
    (0,lodash__WEBPACK_IMPORTED_MODULE_1__.defaults)(this.panel, this.panelDefaults);
    this.panelHasRowColorMode = Boolean(this.panel.styles.find((style) => style.colorMode === "row"));
    this.panelHasLinks = Boolean(this.panel.styles.find((style) => style.link));
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_10__.PanelEvents.dataReceived, this.onDataReceived.bind(this));
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_10__.PanelEvents.dataSnapshotLoad, this.onDataReceived.bind(this));
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_10__.PanelEvents.editModeInitialized, this.onInitEditMode.bind(this));
  }
  onInitEditMode() {
    this.addEditorTab("Options", _editor__WEBPACK_IMPORTED_MODULE_7__.tablePanelEditor, 2);
    this.addEditorTab("Column Styles", _column_options__WEBPACK_IMPORTED_MODULE_6__.columnOptionsTab, 3);
  }
  migrateToPanel(type) {
    this.onPluginTypeChange(_core_config__WEBPACK_IMPORTED_MODULE_2__["default"].panels[type]);
  }
  issueQueries(datasource) {
    this.pageIndex = 0;
    if (this.panel.transform === "annotations") {
      return this.annotationsSrv.getAnnotations({
        dashboard: this.dashboard,
        panel: this.panel,
        range: this.range
      }).then((anno) => {
        this.loading = false;
        this.dataRaw = anno;
        this.pageIndex = 0;
        this.render();
      });
    }
    return super.issueQueries(datasource);
  }
  onDataReceived(dataList) {
    this.dataRaw = dataList;
    this.pageIndex = 0;
    if (this.dataRaw && this.dataRaw.length) {
      if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_11__.isTableData)(this.dataRaw[0])) {
        this.panel.transform = "table";
      } else {
        if (this.dataRaw[0].type === "docs") {
          this.panel.transform = "json";
        } else {
          if (this.panel.transform === "table" || this.panel.transform === "json") {
            this.panel.transform = "timeseries_to_rows";
          }
        }
      }
    }
    this.render();
  }
  render() {
    this.table = (0,_transformers__WEBPACK_IMPORTED_MODULE_9__.transformDataToTable)(this.dataRaw, this.panel);
    this.table.sort(this.panel.sort);
    this.renderer = new _renderer__WEBPACK_IMPORTED_MODULE_8__.TableRenderer(
      this.panel,
      this.table,
      this.dashboard.getTimezone(),
      this.$sanitize,
      this.templateSrv,
      _core_config__WEBPACK_IMPORTED_MODULE_2__["default"].theme2
    );
    return super.render(this.table);
  }
  toggleColumnSort(col, colIndex) {
    if (this.table.columns[this.panel.sort.col]) {
      this.table.columns[this.panel.sort.col].sort = false;
    }
    if (this.panel.sort.col === colIndex) {
      if (this.panel.sort.desc) {
        this.panel.sort.desc = false;
      } else {
        this.panel.sort.col = null;
      }
    } else {
      this.panel.sort.col = colIndex;
      this.panel.sort.desc = true;
    }
    this.render();
  }
  link(scope, elem, attrs, ctrl) {
    let data;
    const panel = ctrl.panel;
    let pageCount = 0;
    function getTableHeight() {
      let panelHeight = ctrl.height;
      if (pageCount > 1) {
        panelHeight -= 26;
      }
      return panelHeight - 31 + "px";
    }
    function appendTableRows(tbodyElem) {
      ctrl.renderer.setTable(data);
      tbodyElem.empty();
      tbodyElem.html(ctrl.renderer.render(ctrl.pageIndex));
    }
    function switchPage(e) {
      const el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
      ctrl.pageIndex = parseInt(el.text(), 10) - 1;
      renderPanel();
    }
    function appendPaginationControls(footerElem) {
      footerElem.empty();
      const pageSize = panel.pageSize || 100;
      pageCount = Math.ceil(data.rows.length / pageSize);
      if (pageCount === 1) {
        return;
      }
      const startPage = Math.max(ctrl.pageIndex - 3, 0);
      const endPage = Math.min(pageCount, startPage + 9);
      const paginationList = jquery__WEBPACK_IMPORTED_MODULE_0___default()("<ul></ul>");
      for (let i = startPage; i < endPage; i++) {
        const activeClass = i === ctrl.pageIndex ? "active" : "";
        const pageLinkElem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(
          '<li><a class="table-panel-page-link pointer ' + activeClass + '">' + (i + 1) + "</a></li>"
        );
        paginationList.append(pageLinkElem);
      }
      footerElem.append(paginationList);
    }
    function renderPanel() {
      const panelElem = elem.parents(".panel-content");
      const rootElem = elem.find(".table-panel-scroll");
      const tbodyElem = elem.find("tbody");
      const footerElem = elem.find(".table-panel-footer");
      elem.css({ "font-size": panel.fontSize });
      panelElem.addClass("table-panel-content");
      appendTableRows(tbodyElem);
      appendPaginationControls(footerElem);
      rootElem.css({ "max-height": getTableHeight() });
    }
    elem.tooltip({
      selector: "[data-link-tooltip]"
    });
    function addFilterClicked(e) {
      const filterData = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).data();
      const options = {
        datasource: panel.datasource,
        key: data.columns[filterData.column].text,
        value: data.rows[filterData.row][filterData.column],
        operator: filterData.operator
      };
      (0,_store_store__WEBPACK_IMPORTED_MODULE_5__.dispatch)((0,_features_variables_adhoc_actions__WEBPACK_IMPORTED_MODULE_3__.applyFilterFromTable)(options));
    }
    elem.on("click", ".table-panel-page-link", switchPage);
    elem.on("click", ".table-panel-filter-link", addFilterClicked);
    const unbindDestroy = scope.$on("$destroy", () => {
      elem.off("click", ".table-panel-page-link");
      elem.off("click", ".table-panel-filter-link");
      unbindDestroy();
    });
    ctrl.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_10__.PanelEvents.render, (renderData) => {
      data = renderData || data;
      if (data) {
        renderPanel();
      }
      ctrl.renderingCompleted();
    });
  }
}
TablePanelCtrl.templateUrl = "module.html";
TablePanelCtrl.$inject = ["$scope", "$injector", "annotationsSrv", "$sanitize"];
const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_12__.PanelPlugin(null);
plugin.angularPanelCtrl = TablePanelCtrl;
plugin.setNoPadding();


/***/ }),

/***/ "./public/app/plugins/panel/table-old/renderer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableRenderer: () => (/* binding */ TableRenderer)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/text/string.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/text/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/datetime/formatter.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _column_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/table-old/column_options.ts");





class TableRenderer {
  constructor(panel, table, timeZone, sanitize, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)(), theme) {
    this.panel = panel;
    this.table = table;
    this.timeZone = timeZone;
    this.sanitize = sanitize;
    this.templateSrv = templateSrv;
    this.theme = theme;
    this.formatters = [];
    this.colorState = {};
    this.initColumns();
  }
  setTable(table) {
    this.table = table;
    this.initColumns();
  }
  initColumns() {
    this.formatters = [];
    this.colorState = {};
    for (let colIndex = 0; colIndex < this.table.columns.length; colIndex++) {
      const column = this.table.columns[colIndex];
      column.title = column.text;
      for (let i = 0; i < this.panel.styles.length; i++) {
        const style = this.panel.styles[i];
        const escapedPattern = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.stringStartsAsRegEx)(style.pattern) ? style.pattern : (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.escapeStringForRegex)((0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.unEscapeStringFromRegex)(style.pattern));
        const regex = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.stringToJsRegex)(escapedPattern);
        if (column.text.match(regex)) {
          column.style = style;
          if (style.alias) {
            column.title = _grafana_data__WEBPACK_IMPORTED_MODULE_4__.textUtil.escapeHtml(column.text.replace(regex, style.alias));
          }
          break;
        }
      }
      this.formatters[colIndex] = this.createColumnFormatter(column);
    }
  }
  getColorForValue(value, style) {
    if (!style.thresholds || !style.colors) {
      return null;
    }
    for (let i = style.thresholds.length; i > 0; i--) {
      if (value >= style.thresholds[i - 1]) {
        return this.theme.visualization.getColorByName(style.colors[i]);
      }
    }
    return this.theme.visualization.getColorByName((0,lodash__WEBPACK_IMPORTED_MODULE_0__.first)(style.colors));
  }
  defaultCellFormatter(v, style) {
    if (v === null || v === void 0 || v === void 0) {
      return "";
    }
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(v)) {
      v = v.join(", ");
    }
    if (style && style.sanitize) {
      return this.sanitize(v);
    } else {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.escape)(v);
    }
  }
  createColumnFormatter(column) {
    if (!column.style) {
      return this.defaultCellFormatter;
    }
    if (column.style.type === "hidden") {
      return (v) => void 0;
    }
    if (column.style.type === "date") {
      return (v) => {
        if (v === void 0 || v === null) {
          return "-";
        }
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(v)) {
          v = v[0];
        }
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(v) && !isNaN(v) && v.length > 12) {
          v = parseInt(v, 10);
        }
        if (!column.style.dateFormat) {
          return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.dateTimeFormatISO)(v, {
            timeZone: this.timeZone
          });
        }
        return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.dateTimeFormat)(v, {
          format: column.style.dateFormat,
          timeZone: this.timeZone
        });
      };
    }
    if (column.style.type === "string") {
      return (v) => {
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(v)) {
          v = v.join(", ");
        }
        const mappingType = column.style.mappingType || 0;
        if (mappingType === 1 && column.style.valueMaps) {
          for (let i = 0; i < column.style.valueMaps.length; i++) {
            const map = column.style.valueMaps[i];
            if (v === null) {
              if (map.value === "null") {
                return map.text;
              }
              continue;
            }
            if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(v) && Number(map.value) === Number(v) || map.value === v) {
              this.setColorState(v, column.style);
              return this.defaultCellFormatter(map.text, column.style);
            }
          }
        }
        if (mappingType === 2 && column.style.rangeMaps) {
          for (let i = 0; i < column.style.rangeMaps.length; i++) {
            const map = column.style.rangeMaps[i];
            if (v === null) {
              if (map.from === "null" && map.to === "null") {
                return map.text;
              }
              continue;
            }
            if (Number(map.from) <= Number(v) && Number(map.to) >= Number(v)) {
              this.setColorState(v, column.style);
              return this.defaultCellFormatter(map.text, column.style);
            }
          }
        }
        if (v === null || v === void 0) {
          return "-";
        }
        this.setColorState(v, column.style);
        return this.defaultCellFormatter(v, column.style);
      };
    }
    if (column.style.type === "number") {
      const valueFormatter = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.getValueFormat)(column.unit || column.style.unit);
      return (v) => {
        if (v === null || v === void 0) {
          return "-";
        }
        if (isNaN(v) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(v)) {
          return this.defaultCellFormatter(v, column.style);
        }
        this.setColorState(v, column.style);
        return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.formattedValueToString)(valueFormatter(v, column.style.decimals, null));
      };
    }
    return (value) => {
      return this.defaultCellFormatter(value, column.style);
    };
  }
  setColorState(value, style) {
    if (!style.colorMode) {
      return;
    }
    if (value === null || value === void 0 || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(value)) {
      return;
    }
    const numericValue = Number(value);
    if (isNaN(numericValue)) {
      return;
    }
    this.colorState[style.colorMode] = this.getColorForValue(numericValue, style);
  }
  renderRowVariables(rowIndex) {
    const scopedVars = {};
    let cellVariable;
    const row = this.table.rows[rowIndex];
    for (let i = 0; i < row.length; i++) {
      cellVariable = "__cell_".concat(i);
      scopedVars[cellVariable] = { value: row[i], text: row[i] ? row[i].toString() : "" };
    }
    return scopedVars;
  }
  formatColumnValue(colIndex, value) {
    const fmt = this.formatters[colIndex];
    if (fmt) {
      return fmt(value);
    }
    return value;
  }
  renderCell(columnIndex, rowIndex, value, addWidthHack = false) {
    value = this.formatColumnValue(columnIndex, value);
    const column = this.table.columns[columnIndex];
    const cellStyles = [];
    let cellStyle = "";
    const cellClasses = [];
    let cellClass = "";
    if (this.colorState.cell) {
      cellStyles.push("background-color:" + this.colorState.cell);
      cellClasses.push("table-panel-color-cell");
      this.colorState.cell = null;
    } else if (this.colorState.value) {
      cellStyles.push("color:" + this.colorState.value);
      this.colorState.value = null;
    }
    let columnHtml = "";
    if (addWidthHack) {
      columnHtml = '<div class="table-panel-width-hack">' + this.table.columns[columnIndex].title + "</div>";
    }
    if (value === void 0) {
      cellStyles.push("display:none");
      column.hidden = true;
    } else {
      column.hidden = false;
    }
    if (column.hidden === true) {
      return "";
    }
    if (column.style && column.style.preserveFormat) {
      cellClasses.push("table-panel-cell-pre");
    }
    if (column.style && column.style.align) {
      const textAlign = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(_column_options__WEBPACK_IMPORTED_MODULE_1__.ColumnOptionsCtrl.alignTypesEnum, ["text", column.style.align]);
      if (textAlign && textAlign["value"]) {
        cellStyles.push("text-align:".concat(textAlign["value"]));
      }
    }
    if (cellStyles.length) {
      cellStyle = ' style="' + cellStyles.join(";") + '"';
    }
    if (column.style && column.style.link) {
      const scopedVars = this.renderRowVariables(rowIndex);
      scopedVars["__cell"] = { value, text: value ? value.toString() : "" };
      const cellLink = this.templateSrv.replace(column.style.linkUrl, scopedVars, encodeURIComponent);
      const sanitizedCellLink = _grafana_data__WEBPACK_IMPORTED_MODULE_4__.textUtil.sanitizeUrl(cellLink);
      const cellLinkTooltip = _grafana_data__WEBPACK_IMPORTED_MODULE_4__.textUtil.escapeHtml(this.templateSrv.replace(column.style.linkTooltip, scopedVars));
      const cellTarget = column.style.linkTargetBlank ? "_blank" : "";
      cellClasses.push("table-panel-cell-link");
      columnHtml += '<a href="'.concat(sanitizedCellLink, '" target="').concat(cellTarget, '" data-link-tooltip data-original-title="').concat(cellLinkTooltip, '" data-placement="right"').concat(cellStyle, ">");
      columnHtml += "".concat(value);
      columnHtml += "</a>";
    } else {
      columnHtml += value;
    }
    if (column.filterable) {
      cellClasses.push("table-panel-cell-filterable");
      columnHtml += '<a class="table-panel-filter-link" data-link-tooltip data-original-title="Filter out value" data-placement="bottom"\n           data-row="'.concat(rowIndex, '" data-column="').concat(columnIndex, '" data-operator="!=">');
      columnHtml += '<i class="fa fa-search-minus"></i>';
      columnHtml += "</a>";
      columnHtml += '<a class="table-panel-filter-link" data-link-tooltip data-original-title="Filter for value" data-placement="bottom"\n           data-row="'.concat(rowIndex, '" data-column="').concat(columnIndex, '" data-operator="=">');
      columnHtml += '<i class="fa fa-search-plus"></i>';
      columnHtml += "</a>";
    }
    if (cellClasses.length) {
      cellClass = ' class="' + cellClasses.join(" ") + '"';
    }
    columnHtml = "<td" + cellClass + cellStyle + ">" + columnHtml + "</td>";
    return columnHtml;
  }
  render(page) {
    const pageSize = this.panel.pageSize || 100;
    const startPos = page * pageSize;
    const endPos = Math.min(startPos + pageSize, this.table.rows.length);
    let html = "";
    for (let y = startPos; y < endPos; y++) {
      const row = this.table.rows[y];
      let cellHtml = "";
      let rowStyle = "";
      const rowClasses = [];
      let rowClass = "";
      for (let i = 0; i < this.table.columns.length; i++) {
        cellHtml += this.renderCell(i, y, row[i], y === startPos);
      }
      if (this.colorState.row) {
        rowStyle = ' style="background-color:' + this.colorState.row + '"';
        rowClasses.push("table-panel-color-row");
        this.colorState.row = null;
      }
      if (rowClasses.length) {
        rowClass = ' class="' + rowClasses.join(" ") + '"';
      }
      html += "<tr " + rowClass + rowStyle + ">" + cellHtml + "</tr>";
    }
    return html;
  }
  render_values() {
    const rows = [];
    const visibleColumns = this.table.columns.filter((column) => !column.hidden);
    for (let y = 0; y < this.table.rows.length; y++) {
      const row = this.table.rows[y];
      const newRow = [];
      for (let i = 0; i < this.table.columns.length; i++) {
        if (!this.table.columns[i].hidden) {
          newRow.push(this.formatColumnValue(i, row[i]));
        }
      }
      rows.push(newRow);
    }
    return {
      columns: visibleColumns,
      rows
    };
  }
}


/***/ }),

/***/ "./public/app/plugins/panel/table-old/transformers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tableDataFormatFilterer: () => (/* binding */ tableDataFormatFilterer),
/* harmony export */   timeSeriesFormatFilterer: () => (/* binding */ timeSeriesFormatFilterer),
/* harmony export */   transformDataToTable: () => (/* binding */ transformDataToTable),
/* harmony export */   transformers: () => (/* binding */ transformers)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_TableModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/TableModel.ts");
/* harmony import */ var _core_time_series2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/time_series2.ts");
/* harmony import */ var _core_utils_flatten__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/utils/flatten.ts");





const transformers = {};
const timeSeriesFormatFilterer = (data) => {
  if (!Array.isArray(data)) {
    return data.datapoints ? [data] : [];
  }
  return data.reduce((acc, series) => {
    if (!series.datapoints) {
      return acc;
    }
    return acc.concat(series);
  }, []);
};
const tableDataFormatFilterer = (data) => {
  if (!Array.isArray(data)) {
    return data.columns ? [data] : [];
  }
  return data.reduce((acc, series) => {
    if (!series.columns) {
      return acc;
    }
    return acc.concat(series);
  }, []);
};
transformers["timeseries_to_rows"] = {
  description: "Time series to rows",
  getColumns: () => {
    return [];
  },
  transform: (data, panel, model) => {
    model.columns = [{ text: "Time", type: "date" }, { text: "Metric" }, { text: "Value" }];
    const filteredData = timeSeriesFormatFilterer(data);
    for (let i = 0; i < filteredData.length; i++) {
      const series = filteredData[i];
      for (let y = 0; y < series.datapoints.length; y++) {
        const dp = series.datapoints[y];
        model.rows.push([dp[1], series.target, dp[0]]);
      }
    }
  }
};
transformers["timeseries_to_columns"] = {
  description: "Time series to columns",
  getColumns: () => {
    return [];
  },
  transform: (data, panel, model) => {
    model.columns.push({ text: "Time", type: "date" });
    const points = {};
    const filteredData = timeSeriesFormatFilterer(data);
    for (let i = 0; i < filteredData.length; i++) {
      const series = filteredData[i];
      model.columns.push({ text: series.target });
      for (let y = 0; y < series.datapoints.length; y++) {
        const dp = series.datapoints[y];
        const timeKey = dp[1].toString();
        if (!points[timeKey]) {
          points[timeKey] = { time: dp[1] };
          points[timeKey][i] = dp[0];
        } else {
          points[timeKey][i] = dp[0];
        }
      }
    }
    for (const time in points) {
      const point = points[time];
      const values = [point.time];
      for (let i = 0; i < filteredData.length; i++) {
        const value = point[i];
        values.push(value);
      }
      model.rows.push(values);
    }
  }
};
transformers["timeseries_aggregations"] = {
  description: "Time series aggregations",
  getColumns: () => {
    return [
      { text: "Avg", value: "avg" },
      { text: "Min", value: "min" },
      { text: "Max", value: "max" },
      { text: "Total", value: "total" },
      { text: "Current", value: "current" },
      { text: "Count", value: "count" }
    ];
  },
  transform: (data, panel, model) => {
    let i, y;
    model.columns.push({ text: "Metric" });
    for (i = 0; i < panel.columns.length; i++) {
      model.columns.push({ text: panel.columns[i].text });
    }
    const filteredData = timeSeriesFormatFilterer(data);
    for (i = 0; i < filteredData.length; i++) {
      const series = new _core_time_series2__WEBPACK_IMPORTED_MODULE_2__["default"]({
        datapoints: filteredData[i].datapoints,
        alias: filteredData[i].target
      });
      series.getFlotPairs("connected");
      const cells = [series.alias];
      for (y = 0; y < panel.columns.length; y++) {
        cells.push(series.stats[panel.columns[y].value]);
      }
      model.rows.push(cells);
    }
  }
};
transformers["annotations"] = {
  description: "Annotations",
  getColumns: () => {
    return [];
  },
  transform: (data, panel, model) => {
    model.columns.push({ text: "Time", type: "date" });
    model.columns.push({ text: "Title" });
    model.columns.push({ text: "Text" });
    model.columns.push({ text: "Tags" });
    if (!data || !data.annotations || data.annotations.length === 0) {
      return;
    }
    for (let i = 0; i < data.annotations.length; i++) {
      const evt = data.annotations[i];
      model.rows.push([evt.time, evt.title, evt.text, evt.tags]);
    }
  }
};
transformers["table"] = {
  description: "Table",
  getColumns: (data) => {
    if (!data || data.length === 0) {
      return [];
    }
    if (data.length === 1) {
      return [...data[0].columns];
    }
    const filteredData = tableDataFormatFilterer(data);
    const columnNames = {};
    const columns = filteredData.reduce((acc, series) => {
      series.columns.forEach((col) => {
        const { text } = col;
        if (columnNames[text] === void 0) {
          columnNames[text] = acc.length;
          acc.push(col);
        }
      });
      return acc;
    }, []);
    return columns;
  },
  transform: (data, panel, model) => {
    if (!data || data.length === 0) {
      return;
    }
    const filteredData = tableDataFormatFilterer(data);
    const noTableIndex = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex)(filteredData, (d) => "columns" in d && "rows" in d);
    if (noTableIndex < 0) {
      throw {
        message: "Result of query #".concat(String.fromCharCode(
          65 + noTableIndex
        ), " is not in table format, try using another transform.")
      };
    }
    (0,_core_TableModel__WEBPACK_IMPORTED_MODULE_1__.mergeTablesIntoModel)(model, ...filteredData);
  }
};
transformers["json"] = {
  description: "JSON Data",
  getColumns: (data) => {
    if (!data || data.length === 0) {
      return [];
    }
    const names = {};
    for (let i = 0; i < data.length; i++) {
      const series = data[i];
      if (series.type !== "docs") {
        continue;
      }
      const maxDocs = Math.min(series.datapoints.length, 100);
      for (let y = 0; y < maxDocs; y++) {
        const doc = series.datapoints[y];
        const flattened = (0,_core_utils_flatten__WEBPACK_IMPORTED_MODULE_3__["default"])(doc, {});
        for (const propName in flattened) {
          names[propName] = true;
        }
      }
    }
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(names, (value, key) => {
      return { text: key, value: key };
    });
  },
  transform: (data, panel, model) => {
    let i, y, z;
    for (const column of panel.columns) {
      const tableCol = { text: column.text };
      if (data.length > 0 && data[0].filterable) {
        tableCol.filterable = true;
      }
      model.columns.push(tableCol);
    }
    if (model.columns.length === 0) {
      model.columns.push({ text: "JSON" });
    }
    for (i = 0; i < data.length; i++) {
      const series = data[i];
      for (y = 0; y < series.datapoints.length; y++) {
        const dp = series.datapoints[y];
        const values = [];
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isObject)(dp) && panel.columns.length > 0) {
          const flattened = (0,_core_utils_flatten__WEBPACK_IMPORTED_MODULE_3__["default"])(dp);
          for (z = 0; z < panel.columns.length; z++) {
            values.push(flattened[panel.columns[z].value]);
          }
        } else {
          values.push(JSON.stringify(dp));
        }
        model.rows.push(values);
      }
    }
  }
};
function transformDataToTable(data, panel) {
  const model = new _core_TableModel__WEBPACK_IMPORTED_MODULE_1__["default"]();
  if (!data || data.length === 0) {
    return model;
  }
  const transformer = transformers[panel.transform];
  if (!transformer) {
    throw { message: "Transformer " + panel.transform + " not found" };
  }
  transformer.transform(data, panel, model);
  return model;
}



/***/ }),

/***/ "./public/app/plugins/sdk.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetricsPanelCtrl: () => (/* binding */ MetricsPanelCtrl),
/* harmony export */   PanelCtrl: () => (/* binding */ PanelCtrl),
/* harmony export */   QueryCtrl: () => (/* binding */ QueryCtrl),
/* harmony export */   loadPluginCss: () => (/* reexport safe */ _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.loadPluginCss)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/utils/makeClassES5Compatible.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/utils/plugin.ts");
/* harmony import */ var _angular_panel_metrics_panel_ctrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/angular/panel/metrics_panel_ctrl.ts");
/* harmony import */ var _angular_panel_panel_ctrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/angular/panel/panel_ctrl.ts");
/* harmony import */ var _angular_panel_query_ctrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/angular/panel/query_ctrl.ts");






const PanelCtrl = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.makeClassES5Compatible)(_angular_panel_panel_ctrl__WEBPACK_IMPORTED_MODULE_1__.PanelCtrl);
const MetricsPanelCtrl = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.makeClassES5Compatible)(_angular_panel_metrics_panel_ctrl__WEBPACK_IMPORTED_MODULE_0__.MetricsPanelCtrl);
const QueryCtrl = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.makeClassES5Compatible)(_angular_panel_query_ctrl__WEBPACK_IMPORTED_MODULE_2__.QueryCtrl);



/***/ })

}]);
//# sourceMappingURL=tableOldPlugin.3cbbdefae17101ac89b1.js.map
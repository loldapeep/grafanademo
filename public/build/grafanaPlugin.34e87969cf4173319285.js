"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["grafanaPlugin"],{

/***/ "./public/app/plugins/datasource/grafana/components/QueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryEditor: () => (/* binding */ QueryEditor),
/* harmony export */   UnthemedQueryEditor: () => (/* binding */ UnthemedQueryEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/datetime/rangeutil.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-data/src/dataframe/DataFrameJSON.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-runtime/src/services/dataSourceSrv.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineLabel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./packages/grafana-ui/src/components/FileDropzone/FileDropzone.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _features_dataframe_import__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dataframe-import/index.ts");
/* harmony import */ var _features_live_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/live/info.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/grafana/types.ts");
/* harmony import */ var _SearchEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/grafana/components/SearchEditor.tsx");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;











const labelWidth = 12;
class UnthemedQueryEditor extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor(props) {
    super(props);
    this.state = { channels: [], channelFields: {} };
    this.queryTypes = [
      {
        label: "Random Walk",
        value: _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaQueryType.RandomWalk,
        description: "Random signal within the selected time range"
      },
      {
        label: "Live Measurements",
        value: _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaQueryType.LiveMeasurements,
        description: "Stream real-time measurements from Grafana"
      },
      {
        label: "List public files",
        value: _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaQueryType.List,
        description: "Show directory listings for public resources"
      }
    ];
    this.onQueryTypeChange = (sel) => {
      const { onChange, query, onRunQuery } = this.props;
      onChange({ ...query, queryType: sel.value });
      onRunQuery();
      this.loadChannelInfo();
    };
    this.onChannelChange = (sel) => {
      const { onChange, query, onRunQuery } = this.props;
      onChange({ ...query, channel: sel == null ? void 0 : sel.value });
      onRunQuery();
    };
    this.onFieldNamesChange = (item) => {
      var _a2, _b, _c;
      const { onChange, query, onRunQuery } = this.props;
      let fields = [];
      if (Array.isArray(item)) {
        fields = item.map((v) => v.value);
      } else if (item.value) {
        fields = [item.value];
      }
      if (fields.length === 1 && !((_b = (_a2 = query.filter) == null ? void 0 : _a2.fields) == null ? void 0 : _b.length) && query.channel) {
        const names = (_c = this.state.channelFields[query.channel]) != null ? _c : [];
        const tf = names.find((f) => f.value === "time" || f.value === "Time");
        if (tf && tf.value && tf.value !== fields[0]) {
          fields = [tf.value, ...fields];
        }
      }
      onChange({
        ...query,
        filter: {
          ...query.filter,
          fields
        }
      });
      onRunQuery();
    };
    this.checkAndUpdateValue = (key, txt) => {
      const { onChange, query, onRunQuery } = this.props;
      if (key === "buffer") {
        let buffer;
        if (txt) {
          try {
            buffer = _grafana_data__WEBPACK_IMPORTED_MODULE_8__.intervalToSeconds(txt) * 1e3;
          } catch (err) {
            console.warn("ERROR", err);
          }
        }
        onChange({
          ...query,
          buffer
        });
      } else {
        onChange({
          ...query,
          [key]: txt
        });
      }
      onRunQuery();
    };
    this.handleEnterKey = (e) => {
      if (e.key !== "Enter") {
        return;
      }
      this.checkAndUpdateValue("buffer", e.currentTarget.value);
    };
    this.handleBlur = (e) => {
      this.checkAndUpdateValue("buffer", e.currentTarget.value);
    };
    this.onFolderChanged = (sel) => {
      const { onChange, query, onRunQuery } = this.props;
      onChange({ ...query, path: sel == null ? void 0 : sel.value });
      onRunQuery();
    };
    // Skip rendering the file list as we're handling that in this component instead.
    this.fileListRenderer = (file, removeFile) => {
      return null;
    };
    this.onFileDrop = (acceptedFiles, fileRejections, event) => {
      _features_dataframe_import__WEBPACK_IMPORTED_MODULE_4__.filesToDataframes(acceptedFiles).subscribe((next) => {
        const snapshot = [];
        next.dataFrames.forEach((df) => {
          const dataframeJson = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_9__.dataFrameToJSON)(df);
          snapshot.push(dataframeJson);
        });
        this.props.onChange({
          ...this.props.query,
          file: { name: next.file.name, size: next.file.size },
          queryType: _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaQueryType.Snapshot,
          snapshot
        });
        this.props.onRunQuery();
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_10__.reportInteraction)("grafana_datasource_drop_files", {
          number_of_files: fileRejections.length + acceptedFiles.length,
          accepted_files: acceptedFiles.map((a) => {
            return { type: a.type, size: a.size };
          }),
          rejected_files: fileRejections.map((r) => {
            return { type: r.file.type, size: r.file.size };
          })
        });
      });
    };
    this.onSearchChange = (search) => {
      const { query, onChange, onRunQuery } = this.props;
      onChange({
        ...query,
        search
      });
      onRunQuery();
    };
    if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_11__.config.featureToggles.panelTitleSearch && _core_config__WEBPACK_IMPORTED_MODULE_3__.hasAlphaPanels) {
      this.queryTypes.push({
        label: "Search",
        value: _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaQueryType.Search,
        description: "Search for grafana resources"
      });
    }
    if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_11__.config.featureToggles.editPanelCSVDragAndDrop) {
      this.queryTypes.push({
        label: "Spreadsheet or snapshot",
        value: _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaQueryType.Snapshot,
        description: "Query an uploaded spreadsheet or a snapshot"
      });
    }
  }
  loadChannelInfo() {
    (0,_features_live_info__WEBPACK_IMPORTED_MODULE_5__.getManagedChannelInfo)().then((v) => {
      this.setState(v);
    });
  }
  loadFolderInfo() {
    const query = {
      targets: [{ queryType: _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaQueryType.List, refId: "A" }]
    };
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_12__.getDataSourceSrv)().get("-- Grafana --").then((ds) => {
      const gds = ds;
      gds.query(query).subscribe({
        next: (rsp) => {
          if (rsp.data.length) {
            const names = rsp.data[0].fields[0];
            const folders = names.values.map((v) => ({
              value: v,
              label: v
            }));
            this.setState({ folders });
          }
        }
      });
    });
  }
  componentDidMount() {
    this.loadChannelInfo();
  }
  renderMeasurementsQuery() {
    var _a2;
    let { channel, filter, buffer } = this.props.query;
    let { channels, channelFields } = this.state;
    let currentChannel = channels.find((c) => c.value === channel);
    if (channel && !currentChannel) {
      currentChannel = {
        value: channel,
        label: channel,
        description: "Connected to ".concat(channel)
      };
      channels = [currentChannel, ...channels];
    }
    const distinctFields = /* @__PURE__ */ new Set();
    const fields = channel ? (_a2 = channelFields[channel]) != null ? _a2 : [] : [];
    if (filter == null ? void 0 : filter.fields) {
      for (const f of filter.fields) {
        if (!distinctFields.has(f)) {
          fields.push({
            value: f,
            label: "".concat(f, " (not loaded)"),
            description: "Configured, but not found in the query results"
          });
          distinctFields.add(f);
        }
      }
    }
    let formattedTime = "";
    if (buffer) {
      formattedTime = _grafana_data__WEBPACK_IMPORTED_MODULE_8__.secondsToHms(buffer / 1e3);
    }
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.InlineField, { label: "Channel", grow: true, labelWidth }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Select,
      {
        options: channels,
        value: currentChannel || "",
        onChange: this.onChannelChange,
        allowCustomValue: true,
        backspaceRemovesValue: true,
        placeholder: "Select measurements channel",
        isClearable: true,
        noOptionsMessage: "Enter channel name",
        formatCreateLabel: (input) => "Connect to: ".concat(input)
      }
    )), channel && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Stack, { direction: "row", gap: 0 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.InlineField, { label: "Fields", grow: true, labelWidth }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Select,
      {
        options: fields,
        value: (filter == null ? void 0 : filter.fields) || [],
        onChange: this.onFieldNamesChange,
        allowCustomValue: true,
        backspaceRemovesValue: true,
        placeholder: "All fields",
        isClearable: true,
        noOptionsMessage: "Unable to list all fields",
        formatCreateLabel: (input) => "Field: ".concat(input),
        isSearchable: true,
        isMulti: true
      }
    )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.InlineField, { label: "Buffer" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_16__.Input,
      {
        placeholder: "Auto",
        width: 12,
        defaultValue: formattedTime,
        onKeyDown: this.handleEnterKey,
        onBlur: this.handleBlur,
        spellCheck: false
      }
    ))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Alert, { title: "Grafana Live - Measurements", severity: "info" }, "This supports real-time event streams in Grafana core. This feature is under heavy development. Expect the interfaces and structures to change as this becomes more production ready."));
  }
  renderListPublicFiles() {
    let { path } = this.props.query;
    let { folders } = this.state;
    if (!folders) {
      folders = [];
      this.loadFolderInfo();
    }
    const currentFolder = folders.find((f) => f.value === path);
    if (path && !currentFolder) {
      folders = [
        ...folders,
        {
          value: path,
          label: path
        }
      ];
    }
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.InlineFieldRow, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.InlineField, { label: "Path", grow: true, labelWidth }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Select,
      {
        options: folders,
        value: currentFolder || "",
        onChange: this.onFolderChanged,
        allowCustomValue: true,
        backspaceRemovesValue: true,
        placeholder: "Select folder",
        isClearable: true,
        formatCreateLabel: (input) => "Folder: ".concat(input)
      }
    )));
  }
  renderSnapshotQuery() {
    var _a2, _b, _c, _d;
    const { query, theme } = this.props;
    const file = query.file;
    const styles = getStyles(theme);
    const fileSize = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_19__.getValueFormat)("decbytes")(file ? file.size : 0);
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.InlineFieldRow, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.InlineField, { label: "Snapshot", grow: true, labelWidth }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_20__.InlineLabel, null, pluralize__WEBPACK_IMPORTED_MODULE_1___default()("frame", (_b = (_a2 = query.snapshot) == null ? void 0 : _a2.length) != null ? _b : 0, true)))), _grafana_runtime__WEBPACK_IMPORTED_MODULE_11__.config.featureToggles.editPanelCSVDragAndDrop && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_21__.FileDropzone,
      {
        readAs: "readAsArrayBuffer",
        fileListRenderer: this.fileListRenderer,
        options: {
          onDrop: this.onFileDrop,
          maxSize: _features_dataframe_import__WEBPACK_IMPORTED_MODULE_4__.maxFileSize,
          multiple: false,
          accept: _features_dataframe_import__WEBPACK_IMPORTED_MODULE_4__.acceptedFiles
        }
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_21__.FileDropzoneDefaultChildren,
        {
          primaryText: ((_d = (_c = this.props) == null ? void 0 : _c.query) == null ? void 0 : _d.file) ? "Replace file" : "Drop file here or click to upload"
        }
      )
    ), file && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: styles.file }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, file == null ? void 0 : file.name), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, (0,_grafana_data__WEBPACK_IMPORTED_MODULE_19__.formattedValueToString)(fileSize))))));
  }
  render() {
    var _a2;
    const query = {
      ..._types__WEBPACK_IMPORTED_MODULE_6__.defaultQuery,
      ...this.props.query
    };
    const { queryType } = query;
    let queryTypes = this.queryTypes;
    if (queryType === _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaQueryType.Snapshot && !_grafana_runtime__WEBPACK_IMPORTED_MODULE_11__.config.featureToggles.editPanelCSVDragAndDrop) {
      queryTypes = [
        ...this.queryTypes,
        {
          label: "Snapshot",
          value: queryType
        }
      ];
    }
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, queryType === _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaQueryType.Search && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Alert, { title: "Grafana Search", severity: "info" }, "Using this datasource to call the new search system is experimental, and subject to change at any time without notice."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.InlineFieldRow, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.InlineField, { label: "Query type", grow: true, labelWidth }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Select,
      {
        options: queryTypes,
        value: queryTypes.find((v) => v.value === queryType) || queryTypes[0],
        onChange: this.onQueryTypeChange
      }
    ))), queryType === _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaQueryType.LiveMeasurements && this.renderMeasurementsQuery(), queryType === _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaQueryType.List && this.renderListPublicFiles(), queryType === _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaQueryType.Snapshot && this.renderSnapshotQuery(), queryType === _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaQueryType.Search && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_SearchEditor__WEBPACK_IMPORTED_MODULE_7__["default"], { value: (_a2 = query.search) != null ? _a2 : {}, onChange: this.onSearchChange }));
  }
}
const QueryEditor = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_22__.withTheme2)(UnthemedQueryEditor);
function getStyles(theme) {
  return {
    file: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n      width: 100%;\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: space-between;\n      padding: ", ";\n      border: 1px dashed ", ";\n      background-color: ", ";\n      margin-top: ", ";\n    "])), theme.spacing(2), theme.colors.border.medium, theme.colors.background.secondary, theme.spacing(1))
  };
}


/***/ }),

/***/ "./public/app/plugins/datasource/grafana/components/SearchEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");



function SearchEditor({ value, onChange }) {
  var _a;
  const [json, setJSON] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((_a = value.query) != null ? _a : "");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const emptySearchQuery = {
      query: "*",
      location: "",
      // general, etc
      ds_uid: "",
      sort: "",
      tags: [],
      kind: [],
      explain: false,
      facet: [{ field: "kind" }, { field: "tags" }],
      from: 0,
      limit: 20
    };
    setJSON(JSON.stringify({ ...emptySearchQuery, ...value }, null, 2));
  }, [value]);
  const handleSearchBlur = () => {
    if (query !== value.query) {
      onChange({ ...value, query });
    }
  };
  const handleSearchEnterKey = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    handleSearchBlur();
  };
  const onSaveSearchJSON = (rawSearchJSON) => {
    var _a2;
    try {
      const searchQuery = JSON.parse(rawSearchJSON);
      onChange(searchQuery);
      setQuery((_a2 = searchQuery.query) != null ? _a2 : "");
    } catch (ex) {
      console.log("UNABLE TO parse search", rawSearchJSON, ex);
    }
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, { label: "Query", grow: true, labelWidth: 12 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input,
    {
      placeholder: "Everything",
      value: query,
      onChange: (e) => setQuery(e.currentTarget.value),
      onKeyDown: handleSearchEnterKey,
      onBlur: handleSearchBlur,
      spellCheck: false
    }
  ))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.CodeEditor,
    {
      height: 300,
      language: "json",
      value: json,
      onBlur: onSaveSearchJSON,
      onSave: onSaveSearchJSON,
      showMiniMap: false,
      showLineNumbers: true
    }
  ));
}


/***/ }),

/***/ "./public/app/plugins/datasource/grafana/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/datasource.ts");
/* harmony import */ var _components_QueryEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/grafana/components/QueryEditor.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/grafana/datasource.ts");




const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_1__.GrafanaDatasource).setQueryEditor(
  _components_QueryEditor__WEBPACK_IMPORTED_MODULE_0__.QueryEditor
);


/***/ })

}]);
//# sourceMappingURL=grafanaPlugin.34e87969cf4173319285.js.map
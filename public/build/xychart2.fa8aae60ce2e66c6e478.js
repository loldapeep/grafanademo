"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["xychart2"],{

/***/ "./public/app/core/components/Layers/LayerName.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayerName: () => (/* binding */ LayerName)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldValidationMessage.tsx");




const LayerName = ({ name, onChange, verifyLayerNameUniqueness, overrideStyles }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [validationError, setValidationError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const onEditLayer = (event) => {
    setIsEditing(true);
  };
  const onEndEditName = (newName) => {
    setIsEditing(false);
    if (validationError) {
      setValidationError(null);
      return;
    }
    if (name !== newName) {
      onChange(newName);
    }
  };
  const onInputChange = (event) => {
    const newName = event.currentTarget.value.trim();
    if (newName.length === 0) {
      setValidationError("An empty layer name is not allowed");
      return;
    }
    if (verifyLayerNameUniqueness && !verifyLayerNameUniqueness(newName) && newName !== name) {
      setValidationError("Layer name already exists");
      return;
    }
    if (validationError) {
      setValidationError(null);
    }
  };
  const onEditLayerBlur = (event) => {
    onEndEditName(event.currentTarget.value.trim());
  };
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      onEndEditName(event.currentTarget.value);
    }
  };
  const onFocus = (event) => {
    event.target.select();
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.wrapper }, !isEditing && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    "button",
    {
      className: styles.layerNameWrapper,
      title: "Edit layer name",
      onClick: onEditLayer,
      "data-testid": "layer-name-div"
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: overrideStyles ? "" : styles.layerName }, name),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "pen", className: styles.layerEditIcon, size: "sm" })
  ), isEditing && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input,
    {
      type: "text",
      defaultValue: name,
      onBlur: onEditLayerBlur,
      autoFocus: true,
      onKeyDown,
      onFocus,
      invalid: validationError !== null,
      onChange: onInputChange,
      className: styles.layerNameInput,
      "data-testid": "layer-name-input"
    }
  ), validationError && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.FieldValidationMessage, { horizontal: true }, validationError))));
};
const getStyles = (theme) => {
  return {
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      label: "Wrapper",
      display: "flex",
      alignItems: "center",
      marginLeft: theme.spacing(0.5)
    }),
    layerNameWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      display: "flex",
      cursor: "pointer",
      border: "1px solid transparent",
      borderRadius: theme.shape.radius.default,
      alignItems: "center",
      padding: "0 0 0 ".concat(theme.spacing(0.5)),
      margin: 0,
      background: "transparent",
      "&:hover": {
        background: theme.colors.action.hover,
        border: "1px dashed ".concat(theme.colors.border.strong)
      },
      "&:focus": {
        border: "2px solid ".concat(theme.colors.primary.border)
      },
      "&:hover, &:focus": {
        ".query-name-edit-icon": {
          visibility: "visible"
        }
      }
    }),
    layerName: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.colors.primary.text,
      cursor: "pointer",
      overflow: "hidden",
      marginLeft: theme.spacing(0.5)
    }),
    layerEditIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(
      (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
        marginLeft: theme.spacing(2),
        visibility: "hidden"
      }),
      "query-name-edit-icon"
    ),
    layerNameInput: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      maxWidth: "300px",
      margin: "-4px 0"
    })
  };
};


/***/ }),

/***/ "./public/app/features/transformers/calculateHeatmap/heatmap.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateHeatmapFromData: () => (/* binding */ calculateHeatmapFromData),
/* harmony export */   heatmapTransformer: () => (/* binding */ heatmapTransformer),
/* harmony export */   isHeatmapCellsDense: () => (/* binding */ isHeatmapCellsDense),
/* harmony export */   prepBucketFrames: () => (/* binding */ prepBucketFrames),
/* harmony export */   readHeatmapRowsCustomMeta: () => (/* binding */ readHeatmapRowsCustomMeta),
/* harmony export */   rowsToCellsHeatmap: () => (/* binding */ rowsToCellsHeatmap),
/* harmony export */   sortAscStrInf: () => (/* binding */ sortAscStrInf)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/ids.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/transformations.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/field/fieldState.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-data/src/types/dataFrameTypes.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-data/src/datetime/durationutil.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/histogram.ts");
/* harmony import */ var _grafana_data_src_transformations_transformers_joinDataFrames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/joinDataFrames.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/transformers/calculateHeatmap/utils.ts");







const heatmapTransformer = {
  id: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.DataTransformerID.heatmap,
  name: "Create heatmap",
  description: "Generate heatmap data from source data.",
  defaultOptions: {},
  isApplicable: (data) => {
    const { xField, yField, xs, ys } = findHeatmapFields(data);
    if (xField || yField) {
      return _grafana_data__WEBPACK_IMPORTED_MODULE_2__.TransformationApplicabilityLevels.NotPossible;
    }
    if (!xs.length || !ys.length) {
      return _grafana_data__WEBPACK_IMPORTED_MODULE_2__.TransformationApplicabilityLevels.NotPossible;
    }
    return _grafana_data__WEBPACK_IMPORTED_MODULE_2__.TransformationApplicabilityLevels.Applicable;
  },
  isApplicableDescription: "The Heatmap transformation requires fields with Heatmap compatible data. No fields with Heatmap data could be found.",
  operator: (options, ctx) => (source) => source.pipe(
    (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((data) => {
      var _a, _b;
      if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.featureToggles.transformationsVariableSupport) {
        const optionsCopy = {
          ...options,
          xBuckets: { ...options.xBuckets },
          yBuckets: { ...options.yBuckets }
        };
        if ((_a = optionsCopy.xBuckets) == null ? void 0 : _a.value) {
          optionsCopy.xBuckets.value = ctx.interpolate(optionsCopy.xBuckets.value);
        }
        if ((_b = optionsCopy.yBuckets) == null ? void 0 : _b.value) {
          optionsCopy.yBuckets.value = ctx.interpolate(optionsCopy.yBuckets.value);
        }
        return heatmapTransformer.transformer(optionsCopy, ctx)(data);
      } else {
        return heatmapTransformer.transformer(options, ctx)(data);
      }
    })
  ),
  transformer: (options) => {
    return (data) => {
      const v = calculateHeatmapFromData(data, options);
      if (options.keepOriginalData) {
        return [v, ...data];
      }
      return [v];
    };
  }
};
function parseNumeric(v) {
  return v === "+Inf" ? Infinity : v === "-Inf" ? -Infinity : +(v != null ? v : 0);
}
function sortAscStrInf(aName, bName) {
  return parseNumeric(aName) - parseNumeric(bName);
}
function readHeatmapRowsCustomMeta(frame) {
  var _a, _b;
  return (_b = (_a = frame == null ? void 0 : frame.meta) == null ? void 0 : _a.custom) != null ? _b : {};
}
function isHeatmapCellsDense(frame) {
  let foundY = false;
  for (let field of frame.fields) {
    switch (field.name) {
      case "y":
      case "yMin":
      case "yMax":
        if (foundY) {
          return false;
        }
        foundY = true;
    }
  }
  return foundY;
}
function rowsToCellsHeatmap(opts) {
  var _a, _b, _c, _d, _e;
  const xField = opts.frame.fields[0];
  const xValues = xField.values;
  const yFields = opts.frame.fields.filter((f, idx) => f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.number && idx > 0);
  const len = xValues.length * yFields.length;
  const xs = new Array(len);
  const ys = new Array(len);
  const counts2 = new Array(len);
  const counts = yFields.map((field) => field.values.slice());
  counts.forEach((bucketCounts, bi) => {
    for (let i = 0; i < bucketCounts.length; i++) {
      counts2[counts.length * i + bi] = bucketCounts[i];
    }
  });
  const bucketBounds = Array.from({ length: yFields.length }, (v, i) => i);
  for (let i = 0, yi = 0, xi = 0; i < len; yi = ++i % bucketBounds.length) {
    ys[i] = bucketBounds[yi];
    if (yi === 0 && i >= bucketBounds.length) {
      xi++;
    }
    xs[i] = xValues[xi];
  }
  let ordinalFieldName = ((_a = yFields[0].labels) == null ? void 0 : _a.le) != null ? "yMax" : "y";
  switch (opts.layout) {
    case _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.le:
      ordinalFieldName = "yMax";
      break;
    case _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.ge:
      ordinalFieldName = "yMin";
      break;
    case _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.unknown:
      ordinalFieldName = "y";
      break;
  }
  const custom = {
    yOrdinalDisplay: yFields.map((f) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.getFieldDisplayName)(f, opts.frame)),
    yMatchWithLabel: Object.keys((_b = yFields[0].labels) != null ? _b : {})[0]
  };
  if (custom.yMatchWithLabel) {
    custom.yOrdinalLabel = yFields.map((f) => {
      var _a2, _b2;
      return (_b2 = (_a2 = f.labels) == null ? void 0 : _a2[custom.yMatchWithLabel]) != null ? _b2 : "";
    });
    if (custom.yMatchWithLabel === "le") {
      custom.yMinDisplay = "0.0";
    }
  }
  if (((_c = opts.unit) == null ? void 0 : _c.length) || opts.decimals != null) {
    const fmt = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_8__.getValueFormat)((_d = opts.unit) != null ? _d : "short");
    if (custom.yMinDisplay) {
      custom.yMinDisplay = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_8__.formattedValueToString)(fmt(0, opts.decimals));
    }
    custom.yOrdinalDisplay = custom.yOrdinalDisplay.map((name) => {
      let num = +name;
      if (!Number.isNaN(num)) {
        return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_8__.formattedValueToString)(fmt(num, opts.decimals));
      }
      return name;
    });
  }
  const valueCfg = {
    ...yFields[0].config
  };
  if (valueCfg.displayNameFromDS) {
    delete valueCfg.displayNameFromDS;
  }
  return {
    length: xs.length,
    refId: opts.frame.refId,
    meta: {
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_9__.DataFrameType.HeatmapCells,
      custom
    },
    fields: [
      {
        name: xField.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.time ? "xMax" : "x",
        type: xField.type,
        values: xs,
        config: xField.config
      },
      {
        name: ordinalFieldName,
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.number,
        values: ys,
        config: {
          unit: "short"
          // ordinal lookup
        }
      },
      {
        name: ((_e = opts.value) == null ? void 0 : _e.length) ? opts.value : "Value",
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.number,
        values: counts2,
        config: valueCfg,
        display: yFields[0].display
      }
    ]
  };
}
function prepBucketFrames(frames) {
  frames = frames.slice();
  frames.sort((a, b) => sortAscStrInf(a.name, b.name));
  const counts = frames.map((frame) => frame.fields[1].values.slice());
  counts.reverse();
  counts.forEach((bucketCounts, bi) => {
    if (bi < counts.length - 1) {
      for (let i = 0; i < bucketCounts.length; i++) {
        bucketCounts[i] -= counts[bi + 1][i];
      }
    }
  });
  counts.reverse();
  return frames.map((frame, i) => ({
    ...frame,
    fields: [
      frame.fields[0],
      {
        ...frame.fields[1],
        values: counts[i]
      }
    ]
  }));
}
function calculateHeatmapFromData(frames, options) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const { xField, yField, xs, ys } = findHeatmapFields(frames);
  if (!xField || !yField) {
    throw "no heatmap fields found";
  }
  if (!xs.length || !ys.length) {
    throw "no values found";
  }
  const xBucketsCfg = (_a = options.xBuckets) != null ? _a : {};
  const yBucketsCfg = (_b = options.yBuckets) != null ? _b : {};
  if (((_c = xBucketsCfg.scale) == null ? void 0 : _c.type) === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.ScaleDistribution.Log) {
    throw "X axis only supports linear buckets";
  }
  const scaleDistribution = (_e = (_d = options.yBuckets) == null ? void 0 : _d.scale) != null ? _e : {
    type: _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.ScaleDistribution.Linear
  };
  const heat2d = heatmap(xs, ys, {
    xSorted: (0,_grafana_data_src_transformations_transformers_joinDataFrames__WEBPACK_IMPORTED_MODULE_10__.isLikelyAscendingVector)(xs),
    xTime: xField.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.time,
    xMode: xBucketsCfg.mode,
    xSize: xBucketsCfg.mode === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCalculationMode.Size ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_11__.durationToMilliseconds)((0,_grafana_data__WEBPACK_IMPORTED_MODULE_11__.parseDuration)((_f = xBucketsCfg.value) != null ? _f : "")) : xBucketsCfg.value ? +xBucketsCfg.value : void 0,
    yMode: yBucketsCfg.mode,
    ySize: yBucketsCfg.value ? +yBucketsCfg.value : void 0,
    yLog: (scaleDistribution == null ? void 0 : scaleDistribution.type) === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.ScaleDistribution.Log ? scaleDistribution == null ? void 0 : scaleDistribution.log : void 0,
    xMin: (_g = options.timeRange) == null ? void 0 : _g.from.valueOf(),
    xMax: (_h = options.timeRange) == null ? void 0 : _h.to.valueOf()
  });
  const frame = {
    length: heat2d.x.length,
    name: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.getFieldDisplayName)(yField),
    meta: {
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_9__.DataFrameType.HeatmapCells
    },
    fields: [
      {
        name: "xMin",
        type: xField.type,
        values: heat2d.x,
        config: xField.config
      },
      {
        name: "yMin",
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.number,
        values: heat2d.y,
        config: {
          ...yField.config,
          // keep units from the original source
          custom: {
            scaleDistribution
          }
        }
      },
      {
        name: "Count",
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.number,
        values: heat2d.count,
        config: {
          unit: "short"
          // always integer
        }
      }
    ]
  };
  return frame;
}
function findHeatmapFields(frames) {
  let xField = void 0;
  let yField = void 0;
  let dataLen = 0;
  for (let frame of frames) {
    const x = frame.fields.find((f) => f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.time);
    if (x) {
      dataLen += frame.length;
    }
  }
  let xs = Array(dataLen);
  let ys = Array(dataLen);
  let j = 0;
  for (let frame of frames) {
    const x = frame.fields.find((f) => f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.time);
    if (!x) {
      continue;
    }
    if (!xField) {
      xField = x;
    }
    const xValues = x.values;
    for (let field of frame.fields) {
      if (field !== x && field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.number) {
        const yValues = field.values;
        for (let i = 0; i < xValues.length; i++, j++) {
          xs[j] = xValues[i];
          ys[j] = yValues[i];
        }
        if (!yField) {
          yField = field;
        }
      }
    }
  }
  return { xField, yField, xs, ys };
}
function heatmap(xs, ys, opts) {
  var _a, _b, _c, _d, _e, _f, _g;
  let len = xs.length;
  let xSorted = (_a = opts == null ? void 0 : opts.xSorted) != null ? _a : false;
  let ySorted = (_b = opts == null ? void 0 : opts.ySorted) != null ? _b : false;
  let minX = (_c = opts == null ? void 0 : opts.xMin) != null ? _c : xSorted ? xs[0] : Infinity;
  let minY = ySorted ? ys[0] : Infinity;
  let maxX = (_d = opts == null ? void 0 : opts.xMax) != null ? _d : xSorted ? xs[len - 1] : -Infinity;
  let maxY = ySorted ? ys[len - 1] : -Infinity;
  let yExp = opts == null ? void 0 : opts.yLog;
  let withPredefX = (opts == null ? void 0 : opts.xMin) != null && (opts == null ? void 0 : opts.xMax) != null;
  let withPredefY = (opts == null ? void 0 : opts.yMin) != null && (opts == null ? void 0 : opts.yMax) != null;
  for (let i = 0; i < len; i++) {
    if (!xSorted && !withPredefX) {
      minX = Math.min(minX, xs[i]);
      maxX = Math.max(maxX, xs[i]);
    }
    if (!ySorted && !withPredefY) {
      if (!yExp || ys[i] > 0) {
        minY = Math.min(minY, ys[i]);
        maxY = Math.max(maxY, ys[i]);
      }
    }
  }
  let xBinIncr = (_e = opts == null ? void 0 : opts.xSize) != null ? _e : 0;
  let yBinIncr = (_f = opts == null ? void 0 : opts.ySize) != null ? _f : 0;
  let xMode = opts == null ? void 0 : opts.xMode;
  let yMode = opts == null ? void 0 : opts.yMode;
  if (!Number.isFinite(xBinIncr) || xBinIncr <= 0) {
    xMode = _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCalculationMode.Count;
    xBinIncr = 20;
  }
  if (!Number.isFinite(yBinIncr) || yBinIncr <= 0) {
    yMode = _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCalculationMode.Count;
    yBinIncr = 10;
  }
  if (xMode === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCalculationMode.Count) {
    let approx = (maxX - minX) / Math.max(xBinIncr - 1, 1);
    let xIncrs = (opts == null ? void 0 : opts.xTime) ? _utils__WEBPACK_IMPORTED_MODULE_0__.niceTimeIncrs : _utils__WEBPACK_IMPORTED_MODULE_0__.niceLinearIncrs;
    let xIncrIdx = xIncrs.findIndex((bucketSize) => bucketSize > approx) - 1;
    xBinIncr = xIncrs[Math.max(xIncrIdx, 0)];
  }
  if (yMode === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCalculationMode.Count) {
    let approx = (maxY - minY) / Math.max(yBinIncr - 1, 1);
    let yIncrs = (opts == null ? void 0 : opts.yTime) ? _utils__WEBPACK_IMPORTED_MODULE_0__.niceTimeIncrs : _utils__WEBPACK_IMPORTED_MODULE_0__.niceLinearIncrs;
    let yIncrIdx = yIncrs.findIndex((bucketSize) => bucketSize > approx) - 1;
    yBinIncr = yIncrs[Math.max(yIncrIdx, 0)];
  }
  let binX = (opts == null ? void 0 : opts.xCeil) ? (v) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_12__.incrRoundUp)(v, xBinIncr) : (v) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_12__.incrRoundDn)(v, xBinIncr);
  let binY = (opts == null ? void 0 : opts.yCeil) ? (v) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_12__.incrRoundUp)(v, yBinIncr) : (v) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_12__.incrRoundDn)(v, yBinIncr);
  if (yExp) {
    yBinIncr = 1 / ((_g = opts == null ? void 0 : opts.ySize) != null ? _g : 1);
    let yLog = yExp === 2 ? Math.log2 : Math.log10;
    binY = (opts == null ? void 0 : opts.yCeil) ? (v) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_12__.incrRoundUp)(yLog(v), yBinIncr) : (v) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_12__.incrRoundDn)(yLog(v), yBinIncr);
  }
  let minXBin = binX(minX);
  let maxXBin = binX(maxX);
  let minYBin = binY(minY);
  let maxYBin = binY(maxY);
  let xBinQty = Math.round((maxXBin - minXBin) / xBinIncr) + 1;
  let yBinQty = Math.round((maxYBin - minYBin) / yBinIncr) + 1;
  let [xs2, ys2, counts] = initBins(xBinQty, yBinQty, minXBin, xBinIncr, minYBin, yBinIncr, yExp);
  for (let i = 0; i < len; i++) {
    if (yExp && ys[i] <= 0) {
      continue;
    }
    const xi = (binX(xs[i]) - minXBin) / xBinIncr;
    const yi = (binY(ys[i]) - minYBin) / yBinIncr;
    const ci = xi * yBinQty + yi;
    counts[ci]++;
  }
  return {
    x: xs2,
    y: ys2,
    count: counts
  };
}
function initBins(xQty, yQty, xMin, xIncr, yMin, yIncr, yExp) {
  const len = xQty * yQty;
  const xs = new Array(len);
  const ys = new Array(len);
  const counts = new Array(len);
  for (let i = 0, yi = 0, x = xMin; i < len; yi = ++i % yQty) {
    counts[i] = 0;
    if (yExp) {
      ys[i] = yExp ** (yMin + yi * yIncr);
    } else {
      ys[i] = yMin + yi * yIncr;
    }
    if (yi === 0 && i >= yQty) {
      x += xIncr;
    }
    xs[i] = x;
  }
  return [xs, ys, counts];
}


/***/ }),

/***/ "./public/app/features/transformers/calculateHeatmap/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decIncrs: () => (/* binding */ decIncrs),
/* harmony export */   fixedDec: () => (/* binding */ fixedDec),
/* harmony export */   genIncrs: () => (/* binding */ genIncrs),
/* harmony export */   niceLinearIncrs: () => (/* binding */ niceLinearIncrs),
/* harmony export */   niceTimeIncrs: () => (/* binding */ niceTimeIncrs),
/* harmony export */   numIncrs: () => (/* binding */ numIncrs),
/* harmony export */   oneIncrs: () => (/* binding */ oneIncrs),
/* harmony export */   wholeIncrs: () => (/* binding */ wholeIncrs)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/utils/numbers.ts");


const { abs, pow } = Math;
const fixedDec = /* @__PURE__ */ new Map();
function genIncrs(base, minExp, maxExp, mults) {
  let incrs = [];
  let multDec = mults.map(_grafana_data__WEBPACK_IMPORTED_MODULE_0__.guessDecimals);
  for (let exp = minExp; exp < maxExp; exp++) {
    let expa = abs(exp);
    let mag = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.roundDecimals)(pow(base, exp), expa);
    for (let i = 0; i < mults.length; i++) {
      let _incr = mults[i] * mag;
      let dec = (_incr >= 0 && exp >= 0 ? 0 : expa) + (exp >= multDec[i] ? 0 : multDec[i]);
      let incr = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.roundDecimals)(_incr, dec);
      incrs.push(incr);
      fixedDec.set(incr, dec);
    }
  }
  return incrs;
}
const onlyWhole = (v) => v % 1 === 0;
const allMults = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5];
const decIncrs = genIncrs(10, -16, 0, allMults);
const oneIncrs = genIncrs(10, 0, 16, allMults);
const wholeIncrs = oneIncrs.filter(onlyWhole);
const numIncrs = decIncrs.concat(oneIncrs);
const niceLinearIncrs = decIncrs.concat(wholeIncrs);
const sec = 1 * 1e3;
const min = 60 * sec;
const hour = 60 * min;
const day = 24 * hour;
const year = 365 * day;
const niceTimeIncrs = [
  1,
  2,
  4,
  5,
  10,
  20,
  25,
  40,
  50,
  100,
  200,
  250,
  400,
  500,
  sec,
  2 * sec,
  4 * sec,
  5 * sec,
  10 * sec,
  15 * sec,
  20 * sec,
  30 * sec,
  min,
  2 * min,
  4 * min,
  5 * min,
  10 * min,
  15 * min,
  20 * min,
  30 * min,
  hour,
  2 * hour,
  4 * hour,
  6 * hour,
  8 * hour,
  12 * hour,
  18 * hour,
  day,
  2 * day,
  3 * day,
  4 * day,
  5 * day,
  6 * day,
  7 * day,
  10 * day,
  15 * day,
  30 * day,
  45 * day,
  60 * day,
  90 * day,
  180 * day,
  year,
  2 * year,
  3 * year,
  4 * year,
  5 * year,
  6 * year,
  7 * year,
  8 * year,
  9 * year,
  10 * year
];


/***/ }),

/***/ "./public/app/plugins/panel/heatmap/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boundedMinMax: () => (/* binding */ boundedMinMax),
/* harmony export */   heatmapPathsDense: () => (/* binding */ heatmapPathsDense),
/* harmony export */   heatmapPathsPoints: () => (/* binding */ heatmapPathsPoints),
/* harmony export */   heatmapPathsSparse: () => (/* binding */ heatmapPathsSparse),
/* harmony export */   prepConfig: () => (/* binding */ prepConfig),
/* harmony export */   valuesToFills: () => (/* binding */ valuesToFills)
/* harmony export */ });
/* harmony import */ var uplot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/uplot/dist/uPlot.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/types/dataFrameTypes.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/histogram.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/config/UPlotConfigBuilder.ts");
/* harmony import */ var _features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/transformers/calculateHeatmap/heatmap.ts");
/* harmony import */ var _barchart_quadtree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/barchart/quadtree.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/heatmap/types.ts");








function prepConfig(opts) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
  const {
    dataRef,
    theme,
    timeZone,
    getTimeRange,
    cellGap,
    hideLE,
    hideGE,
    yAxisConfig,
    ySizeDivisor,
    selectionMode = _types__WEBPACK_IMPORTED_MODULE_3__.HeatmapSelectionMode.X
  } = opts;
  const xScaleKey = "x";
  let isTime = true;
  if (((_b = (_a = dataRef.current) == null ? void 0 : _a.heatmap) == null ? void 0 : _b.fields[0].type) !== _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.time) {
    isTime = false;
  }
  const pxRatio = devicePixelRatio;
  let heatmapType = (_e = (_d = (_c = dataRef.current) == null ? void 0 : _c.heatmap) == null ? void 0 : _d.meta) == null ? void 0 : _e.type;
  const exemplarFillColor = theme.visualization.getColorByName(opts.exemplarColor);
  let qt;
  let hRect;
  let builder = new _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.UPlotConfigBuilder(timeZone);
  builder.addHook("init", (u) => {
    u.root.querySelectorAll(".u-cursor-pt").forEach((el) => {
      Object.assign(el.style, {
        borderRadius: "0",
        border: "1px solid white",
        background: "transparent"
      });
    });
  });
  if (isTime) {
    builder.addHook("setData", (u) => {
      let { min: xMin, max: xMax } = u.scales.x;
      let min = getTimeRange().from.valueOf();
      let max = getTimeRange().to.valueOf();
      if (xMin !== min || xMax !== max) {
        queueMicrotask(() => {
          u.setScale(xScaleKey, { min, max });
        });
      }
    });
  }
  builder.addHook("drawClear", (u) => {
    qt = qt || new _barchart_quadtree__WEBPACK_IMPORTED_MODULE_2__.Quadtree(0, 0, u.bbox.width, u.bbox.height);
    qt.clear();
    u.series.forEach((s, i) => {
      if (i > 0) {
        s._paths = null;
      }
    });
  });
  builder.setMode(2);
  builder.addScale({
    scaleKey: xScaleKey,
    isTime,
    orientation: _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.ScaleOrientation.Horizontal,
    direction: _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.ScaleDirection.Right,
    // TODO: expand by x bucket size and layout
    range: (u, dataMin, dataMax) => {
      var _a2, _b2, _c2, _d2, _e2;
      if (isTime) {
        return [getTimeRange().from.valueOf(), getTimeRange().to.valueOf()];
      } else {
        if (((_a2 = dataRef.current) == null ? void 0 : _a2.xLayout) === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.le) {
          return [dataMin - ((_b2 = dataRef.current) == null ? void 0 : _b2.xBucketSize), dataMax];
        } else if (((_c2 = dataRef.current) == null ? void 0 : _c2.xLayout) === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.ge) {
          return [dataMin, dataMax + ((_d2 = dataRef.current) == null ? void 0 : _d2.xBucketSize)];
        } else {
          let offset = ((_e2 = dataRef.current) == null ? void 0 : _e2.xBucketSize) / 2;
          return [dataMin - offset, dataMax + offset];
        }
      }
    }
  });
  let incrs;
  if (!isTime) {
    incrs = [];
    for (let i = 0; i < 10; i++) {
      incrs.push(i * ((_f = dataRef.current) == null ? void 0 : _f.xBucketSize));
    }
  }
  builder.addAxis({
    scaleKey: xScaleKey,
    placement: _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.AxisPlacement.Bottom,
    incrs,
    isTime,
    theme,
    timeZone
  });
  const yField = (_h = (_g = dataRef.current) == null ? void 0 : _g.heatmap) == null ? void 0 : _h.fields[1];
  if (!yField) {
    return builder;
  }
  const yFieldConfig = (_i = yField.config) == null ? void 0 : _i.custom;
  const yScale = (_j = yFieldConfig == null ? void 0 : yFieldConfig.scaleDistribution) != null ? _j : { type: _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.ScaleDistribution.Linear };
  const yAxisReverse = Boolean(yAxisConfig.reverse);
  const isSparseHeatmap = heatmapType === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.DataFrameType.HeatmapCells && !(0,_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_1__.isHeatmapCellsDense)((_k = dataRef.current) == null ? void 0 : _k.heatmap);
  const shouldUseLogScale = yScale.type !== _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.ScaleDistribution.Linear || isSparseHeatmap;
  const isOrdinalY = (0,_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_1__.readHeatmapRowsCustomMeta)((_l = dataRef.current) == null ? void 0 : _l.heatmap).yOrdinalDisplay != null;
  const yScaleKey = "y_" + (Math.random() + 1).toString(36).substring(7);
  builder.addScale({
    scaleKey: yScaleKey,
    isTime: false,
    // distribution: ScaleDistribution.Ordinal, // does not work with facets/scatter yet
    orientation: _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.ScaleOrientation.Vertical,
    direction: yAxisReverse ? _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.ScaleDirection.Down : _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.ScaleDirection.Up,
    // should be tweakable manually
    distribution: shouldUseLogScale ? _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.ScaleDistribution.Log : _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.ScaleDistribution.Linear,
    log: (_m = yScale.log) != null ? _m : 2,
    range: (
      // sparse already accounts for le/ge by explicit yMin & yMax cell bounds, so no need to expand y range
      isSparseHeatmap ? (u, dataMin, dataMax) => {
        var _a2;
        let bucketFactor = u.data[1][2][0] / u.data[1][1][0];
        dataMax *= bucketFactor;
        let scaleMin, scaleMax;
        [scaleMin, scaleMax] = shouldUseLogScale ? uplot__WEBPACK_IMPORTED_MODULE_0__["default"].rangeLog(dataMin, dataMax, (_a2 = yScale.log) != null ? _a2 : 2, true) : [dataMin, dataMax];
        if (shouldUseLogScale && !isOrdinalY) {
          let yExp = u.scales[yScaleKey].log;
          let log = yExp === 2 ? Math.log2 : Math.log10;
          let { min: explicitMin, max: explicitMax } = yAxisConfig;
          if (explicitMin != null && explicitMin > 0) {
            let minLog = log(explicitMin);
            scaleMin = yExp ** (0,_grafana_data__WEBPACK_IMPORTED_MODULE_8__.incrRoundDn)(minLog, 1);
          }
          if (explicitMax != null && explicitMax > 0) {
            let maxLog = log(explicitMax);
            scaleMax = yExp ** (0,_grafana_data__WEBPACK_IMPORTED_MODULE_8__.incrRoundUp)(maxLog, 1);
          }
        }
        return [scaleMin, scaleMax];
      } : (
        // dense and ordinal only have one of yMin|yMax|y, so expand range by one cell in the direction of le/ge/unknown
        (u, dataMin, dataMax) => {
          var _a2, _b2, _c2, _d2, _e2;
          let scaleMin = dataMin, scaleMax = dataMax;
          let { min: explicitMin, max: explicitMax } = yAxisConfig;
          if (shouldUseLogScale) {
            let yExp = u.scales[yScaleKey].log;
            let minExpanded = false;
            let maxExpanded = false;
            let log = yExp === 2 ? Math.log2 : Math.log10;
            if (ySizeDivisor !== 1) {
              let minLog = log(dataMin);
              let maxLog = log(dataMax);
              if (!Number.isInteger(minLog)) {
                scaleMin = yExp ** (0,_grafana_data__WEBPACK_IMPORTED_MODULE_8__.incrRoundDn)(minLog, 1);
                minExpanded = true;
              }
              if (!Number.isInteger(maxLog)) {
                scaleMax = yExp ** (0,_grafana_data__WEBPACK_IMPORTED_MODULE_8__.incrRoundUp)(maxLog, 1);
                maxExpanded = true;
              }
            }
            if (((_a2 = dataRef.current) == null ? void 0 : _a2.yLayout) === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.le) {
              if (!minExpanded) {
                scaleMin /= yExp;
              }
            } else if (((_b2 = dataRef.current) == null ? void 0 : _b2.yLayout) === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.ge) {
              if (!maxExpanded) {
                scaleMax *= yExp;
              }
            } else {
              scaleMin /= yExp / 2;
              scaleMax *= yExp / 2;
            }
            if (!isOrdinalY) {
              if (explicitMin != null && explicitMin > 0) {
                let minLog = log(explicitMin);
                scaleMin = yExp ** (0,_grafana_data__WEBPACK_IMPORTED_MODULE_8__.incrRoundDn)(minLog, 1);
              }
              if (explicitMax != null && explicitMax > 0) {
                let maxLog = log(explicitMax);
                scaleMax = yExp ** (0,_grafana_data__WEBPACK_IMPORTED_MODULE_8__.incrRoundUp)(maxLog, 1);
              }
            }
          } else {
            let bucketSize = (_c2 = dataRef.current) == null ? void 0 : _c2.yBucketSize;
            if (bucketSize === 0) {
              bucketSize = 1;
            }
            if (bucketSize) {
              if (((_d2 = dataRef.current) == null ? void 0 : _d2.yLayout) === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.le) {
                scaleMin -= bucketSize;
              } else if (((_e2 = dataRef.current) == null ? void 0 : _e2.yLayout) === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.ge) {
                scaleMax += bucketSize;
              } else {
                scaleMin -= bucketSize / 2;
                scaleMax += bucketSize / 2;
              }
            } else {
            }
            if (!isOrdinalY) {
              scaleMin = explicitMin != null ? explicitMin : scaleMin;
              scaleMax = explicitMax != null ? explicitMax : scaleMax;
            }
          }
          return [scaleMin, scaleMax];
        }
      )
    )
  });
  const dispY = (_n = yField.display) != null ? _n : (0,_grafana_data__WEBPACK_IMPORTED_MODULE_9__.getValueFormat)("short");
  builder.addAxis({
    scaleKey: yScaleKey,
    show: yAxisConfig.axisPlacement !== _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.AxisPlacement.Hidden,
    placement: yAxisConfig.axisPlacement || _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.AxisPlacement.Left,
    size: yAxisConfig.axisWidth || null,
    label: yAxisConfig.axisLabel,
    theme,
    formatValue: (v, decimals) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_9__.formattedValueToString)(dispY(v, decimals)),
    splits: isOrdinalY ? (self) => {
      var _a2, _b2;
      const meta = (0,_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_1__.readHeatmapRowsCustomMeta)((_a2 = dataRef.current) == null ? void 0 : _a2.heatmap);
      if (!meta.yOrdinalDisplay) {
        return [0, 1];
      }
      let splits = meta.yOrdinalDisplay.map((v, idx) => idx);
      switch ((_b2 = dataRef.current) == null ? void 0 : _b2.yLayout) {
        case _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.le:
          splits.unshift(-1);
          break;
        case _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.ge:
          splits.push(splits.length);
          break;
      }
      if (self.height < 60) {
        splits = [splits[0], splits[splits.length - 1]];
      } else {
        while (splits.length > 3 && (self.height - 15) / splits.length < 10) {
          splits = splits.filter((v, idx) => idx % 2 === 0);
        }
      }
      return splits;
    } : void 0,
    values: isOrdinalY ? (self, splits) => {
      var _a2;
      const meta = (0,_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_1__.readHeatmapRowsCustomMeta)((_a2 = dataRef.current) == null ? void 0 : _a2.heatmap);
      if (meta.yOrdinalDisplay) {
        return splits.map(
          (v) => {
            var _a3, _b2;
            return v < 0 ? (_a3 = meta.yMinDisplay) != null ? _a3 : "" : (_b2 = meta.yOrdinalDisplay[v]) != null ? _b2 : "";
          }
        );
      }
      return splits;
    } : void 0
  });
  const pathBuilder = isSparseHeatmap ? heatmapPathsSparse : heatmapPathsDense;
  builder.addSeries({
    facets: [
      {
        scale: xScaleKey,
        auto: true,
        sorted: 1
      },
      {
        scale: yScaleKey,
        auto: true
      }
    ],
    pathBuilder: pathBuilder({
      each: (u, seriesIdx, dataIdx, x, y, xSize, ySize) => {
        qt.add({
          x: x - u.bbox.left,
          y: y - u.bbox.top,
          w: xSize,
          h: ySize,
          sidx: seriesIdx,
          didx: dataIdx
        });
      },
      gap: cellGap,
      hideLE,
      hideGE,
      xAlign: ((_o = dataRef.current) == null ? void 0 : _o.xLayout) === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.le ? -1 : ((_p = dataRef.current) == null ? void 0 : _p.xLayout) === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.ge ? 1 : 0,
      yAlign: (((_q = dataRef.current) == null ? void 0 : _q.yLayout) === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.le ? -1 : ((_r = dataRef.current) == null ? void 0 : _r.yLayout) === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.ge ? 1 : 0) * (yAxisReverse ? -1 : 1),
      ySizeDivisor,
      disp: {
        fill: {
          values: (u, seriesIdx) => {
            var _a2, _b2;
            return (_b2 = (_a2 = dataRef.current) == null ? void 0 : _a2.heatmapColors) == null ? void 0 : _b2.values;
          },
          index: (_t = (_s = dataRef.current) == null ? void 0 : _s.heatmapColors) == null ? void 0 : _t.palette
        }
      }
    }),
    theme,
    scaleKey: ""
    // facets' scales used (above)
  });
  builder.addSeries({
    facets: [
      {
        scale: xScaleKey,
        auto: true,
        sorted: 1
      },
      {
        scale: yScaleKey,
        auto: true
      }
    ],
    pathBuilder: heatmapPathsPoints(
      {
        each: (u, seriesIdx, dataIdx, x, y, xSize, ySize) => {
          qt.add({
            x: x - u.bbox.left,
            y: y - u.bbox.top,
            w: xSize,
            h: ySize,
            sidx: seriesIdx,
            didx: dataIdx
          });
        }
      },
      exemplarFillColor,
      dataRef.current.yLayout
    ),
    theme,
    scaleKey: ""
    // facets' scales used (above)
  });
  const dragX = selectionMode === _types__WEBPACK_IMPORTED_MODULE_3__.HeatmapSelectionMode.X || selectionMode === _types__WEBPACK_IMPORTED_MODULE_3__.HeatmapSelectionMode.Xy;
  const dragY = selectionMode === _types__WEBPACK_IMPORTED_MODULE_3__.HeatmapSelectionMode.Y || selectionMode === _types__WEBPACK_IMPORTED_MODULE_3__.HeatmapSelectionMode.Xy;
  const cursor = {
    drag: {
      x: dragX,
      y: dragY,
      setScale: false
    },
    dataIdx: (u, seriesIdx) => {
      if (seriesIdx === 1) {
        hRect = null;
        let cx = u.cursor.left * pxRatio;
        let cy = u.cursor.top * pxRatio;
        qt.get(cx, cy, 1, 1, (o) => {
          if ((0,_barchart_quadtree__WEBPACK_IMPORTED_MODULE_2__.pointWithin)(cx, cy, o.x, o.y, o.x + o.w, o.y + o.h)) {
            hRect = o;
          }
        });
      }
      return hRect && seriesIdx === hRect.sidx ? hRect.didx : null;
    },
    focus: {
      prox: 1e3,
      dist: (u, seriesIdx) => (hRect == null ? void 0 : hRect.sidx) === seriesIdx ? 0 : Infinity
    },
    points: {
      fill: "rgba(255,255,255, 0.3)",
      bbox: (u, seriesIdx) => {
        let isHovered = hRect && seriesIdx === hRect.sidx;
        return {
          left: isHovered ? hRect.x / pxRatio : -10,
          top: isHovered ? hRect.y / pxRatio : -10,
          width: isHovered ? hRect.w / pxRatio : 0,
          height: isHovered ? hRect.h / pxRatio : 0
        };
      }
    }
  };
  builder.setCursor(cursor);
  return builder;
}
const CRISP_EDGES_GAP_MIN = 4;
function heatmapPathsDense(opts) {
  const { disp, each, gap = 1, hideLE = -Infinity, hideGE = Infinity, xAlign = 1, yAlign = 1, ySizeDivisor = 1 } = opts;
  const pxRatio = devicePixelRatio;
  const round = gap >= CRISP_EDGES_GAP_MIN ? Math.round : (v) => v;
  const cellGap = Math.round(gap * pxRatio);
  return (u, seriesIdx) => {
    uplot__WEBPACK_IMPORTED_MODULE_0__["default"].orient(
      u,
      seriesIdx,
      (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim, moveTo, lineTo, rect, arc) => {
        var _a;
        let d = u.data[seriesIdx];
        const xs = d[0];
        const ys = d[1];
        const counts = d[2];
        const dlen = xs.length;
        let fills = disp.fill.values(u, seriesIdx);
        let fillPalette = (_a = disp.fill.index) != null ? _a : [...new Set(fills)];
        let fillPaths = fillPalette.map((color) => new Path2D());
        let yBinQty = dlen - ys.lastIndexOf(ys[0]);
        let xBinQty = dlen / yBinQty;
        let yBinIncr = ys[1] - ys[0] || scaleY.max - scaleY.min;
        let xBinIncr = xs[yBinQty] - xs[0];
        let xSize;
        let ySize;
        if (scaleX.distr === 3) {
          xSize = Math.abs(valToPosX(xs[0] * scaleX.log, scaleX, xDim, xOff) - valToPosX(xs[0], scaleX, xDim, xOff));
        } else {
          xSize = Math.abs(valToPosX(xBinIncr, scaleX, xDim, xOff) - valToPosX(0, scaleX, xDim, xOff));
        }
        if (scaleY.distr === 3) {
          ySize = Math.abs(valToPosY(ys[0] * scaleY.log, scaleY, yDim, yOff) - valToPosY(ys[0], scaleY, yDim, yOff)) / ySizeDivisor;
        } else {
          ySize = Math.abs(valToPosY(yBinIncr, scaleY, yDim, yOff) - valToPosY(0, scaleY, yDim, yOff)) / ySizeDivisor;
        }
        xSize = Math.max(1, round(xSize - cellGap));
        ySize = Math.max(1, round(ySize - cellGap));
        let xOffset = xAlign === -1 ? -xSize : xAlign === 0 ? -xSize / 2 : 0;
        let yOffset = yAlign === 1 ? -ySize : yAlign === 0 ? -ySize / 2 : 0;
        let cys = ys.slice(0, yBinQty).map((y) => round(valToPosY(y, scaleY, yDim, yOff) + yOffset));
        let cxs = Array.from(
          { length: xBinQty },
          (v, i) => round(valToPosX(xs[i * yBinQty], scaleX, xDim, xOff) + xOffset)
        );
        for (let i = 0; i < dlen; i++) {
          if (counts[i] > hideLE && counts[i] < hideGE) {
            let cx = cxs[~~(i / yBinQty)];
            let cy = cys[i % yBinQty];
            let fillPath = fillPaths[fills[i]];
            rect(fillPath, cx, cy, xSize, ySize);
            each(u, 1, i, cx, cy, xSize, ySize);
          }
        }
        u.ctx.save();
        u.ctx.rect(u.bbox.left, u.bbox.top, u.bbox.width, u.bbox.height);
        u.ctx.clip();
        fillPaths.forEach((p, i) => {
          u.ctx.fillStyle = fillPalette[i];
          u.ctx.fill(p);
        });
        u.ctx.restore();
        return null;
      }
    );
    return null;
  };
}
function heatmapPathsPoints(opts, exemplarColor, yLayout) {
  return (u, seriesIdx) => {
    uplot__WEBPACK_IMPORTED_MODULE_0__["default"].orient(
      u,
      seriesIdx,
      (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim, moveTo, lineTo, rect, arc) => {
        let points = new Path2D();
        let fillPaths = [points];
        let fillPalette = [exemplarColor != null ? exemplarColor : "rgba(255,0,255,0.7)"];
        let yShift = yLayout === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.le ? -0.5 : yLayout === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.ge ? 0.5 : 0;
        for (let i = 0; i < dataX.length; i++) {
          let yVal = dataY[i];
          let isSparseHeatmap = scaleY.distr === 3 && scaleY.log === 2;
          if (!isSparseHeatmap) {
            yVal += yShift;
          }
          let x = valToPosX(dataX[i], scaleX, xDim, xOff);
          let y = valToPosY(yVal, scaleY, yDim, yOff);
          let w = 8;
          let h = 8;
          rect(points, x - w / 2, y - h / 2, w, h);
          opts.each(u, seriesIdx, i, x - w / 2, y - h / 2, w, h);
        }
        u.ctx.save();
        u.ctx.rect(u.bbox.left, u.bbox.top, u.bbox.width, u.bbox.height);
        u.ctx.clip();
        fillPaths.forEach((p, i) => {
          u.ctx.fillStyle = fillPalette[i];
          u.ctx.fill(p);
        });
        u.ctx.restore();
      }
    );
    return null;
  };
}
function heatmapPathsSparse(opts) {
  const { disp, each, gap = 1, hideLE = -Infinity, hideGE = Infinity } = opts;
  const pxRatio = devicePixelRatio;
  const round = gap >= CRISP_EDGES_GAP_MIN ? Math.round : (v) => v;
  const cellGap = Math.round(gap * pxRatio);
  return (u, seriesIdx) => {
    uplot__WEBPACK_IMPORTED_MODULE_0__["default"].orient(
      u,
      seriesIdx,
      (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim, moveTo, lineTo, rect, arc) => {
        var _a;
        let d = u.data[seriesIdx];
        const xMaxs = d[0];
        const yMins = d[1];
        const yMaxs = d[2];
        const counts = d[3];
        const dlen = xMaxs.length;
        let fills = disp.fill.values(u, seriesIdx);
        let fillPalette = (_a = disp.fill.index) != null ? _a : [...new Set(fills)];
        let fillPaths = fillPalette.map((color) => new Path2D());
        let xOffs = /* @__PURE__ */ new Map();
        let yOffs = /* @__PURE__ */ new Map();
        for (let i = 0; i < xMaxs.length; i++) {
          let xMax = xMaxs[i];
          let yMin = yMins[i];
          let yMax = yMaxs[i];
          if (!xOffs.has(xMax)) {
            xOffs.set(xMax, round(valToPosX(xMax, scaleX, xDim, xOff)));
          }
          if (!yOffs.has(yMin)) {
            yOffs.set(yMin, round(valToPosY(yMin, scaleY, yDim, yOff)));
          }
          if (!yOffs.has(yMax)) {
            yOffs.set(yMax, round(valToPosY(yMax, scaleY, yDim, yOff)));
          }
        }
        let xSizeUniform = xOffs.get(xMaxs.find((v) => v !== xMaxs[0])) - xOffs.get(xMaxs[0]);
        for (let i = 0; i < dlen; i++) {
          if (counts[i] <= hideLE || counts[i] >= hideGE) {
            continue;
          }
          let xMax = xMaxs[i];
          let yMin = yMins[i];
          let yMax = yMaxs[i];
          let xMaxPx = xOffs.get(xMax);
          let yMinPx = yOffs.get(yMin);
          let yMaxPx = yOffs.get(yMax);
          let xSize = xSizeUniform;
          let ySize = yMinPx - yMaxPx;
          xSize = Math.max(1, xSize - cellGap);
          ySize = Math.max(1, ySize - cellGap);
          let x = xMaxPx - cellGap / 2 - xSize;
          let y = yMaxPx + cellGap / 2;
          let fillPath = fillPaths[fills[i]];
          rect(fillPath, x, y, xSize, ySize);
          each(u, 1, i, x, y, xSize, ySize);
        }
        u.ctx.save();
        u.ctx.rect(u.bbox.left, u.bbox.top, u.bbox.width, u.bbox.height);
        u.ctx.clip();
        fillPaths.forEach((p, i) => {
          u.ctx.fillStyle = fillPalette[i];
          u.ctx.fill(p);
        });
        u.ctx.restore();
      }
    );
    return null;
  };
}
const boundedMinMax = (values, minValue, maxValue, hideLE = -Infinity, hideGE = Infinity) => {
  if (minValue == null) {
    minValue = Infinity;
    for (let i = 0; i < values.length; i++) {
      if (values[i] > hideLE && values[i] < hideGE) {
        minValue = Math.min(minValue, values[i]);
      }
    }
  }
  if (maxValue == null) {
    maxValue = -Infinity;
    for (let i = 0; i < values.length; i++) {
      if (values[i] > hideLE && values[i] < hideGE) {
        maxValue = Math.max(maxValue, values[i]);
      }
    }
  }
  return [minValue, maxValue];
};
const valuesToFills = (values, palette, minValue, maxValue) => {
  let range = maxValue - minValue || 1;
  let paletteSize = palette.length;
  let indexedFills = Array(values.length);
  for (let i = 0; i < values.length; i++) {
    indexedFills[i] = values[i] < minValue ? 0 : values[i] > maxValue ? paletteSize - 1 : Math.min(paletteSize - 1, Math.floor(paletteSize * (values[i] - minValue) / range));
  }
  return indexedFills;
};


/***/ }),

/***/ "./public/app/plugins/panel/xychart/panelcfg.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScatterShow: () => (/* binding */ ScatterShow),
/* harmony export */   SeriesMapping: () => (/* binding */ SeriesMapping),
/* harmony export */   defaultFieldConfig: () => (/* binding */ defaultFieldConfig),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions),
/* harmony export */   defaultXYDimensionConfig: () => (/* binding */ defaultXYDimensionConfig)
/* harmony export */ });
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");


var SeriesMapping = /* @__PURE__ */ ((SeriesMapping2) => {
  SeriesMapping2["Auto"] = "auto";
  SeriesMapping2["Manual"] = "manual";
  return SeriesMapping2;
})(SeriesMapping || {});
var ScatterShow = /* @__PURE__ */ ((ScatterShow2) => {
  ScatterShow2["Lines"] = "lines";
  ScatterShow2["Points"] = "points";
  ScatterShow2["PointsAndLines"] = "points+lines";
  return ScatterShow2;
})(ScatterShow || {});
const defaultXYDimensionConfig = {
  exclude: []
};
const defaultFieldConfig = {
  label: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.VisibilityMode.Auto,
  show: "points" /* Points */
};
const defaultOptions = {
  series: []
};


/***/ }),

/***/ "./public/app/plugins/panel/xychart/v2/SeriesEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeriesEditor: () => (/* binding */ SeriesEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-use/esm/usePrevious.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/field/overrides/processors.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-data/src/field/fieldState.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui_src_components_MatchersUI_FieldNamePicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/MatchersUI/FieldNamePicker.tsx");
/* harmony import */ var _core_components_Layers_LayerName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Layers/LayerName.tsx");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/xychart/v2/panelcfg.gen.ts");









const SeriesEditor = ({
  value: seriesCfg,
  onChange,
  context
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const mapping = (_a = context.options) == null ? void 0 : _a.mapping;
  const prevMapping = (0,react_use__WEBPACK_IMPORTED_MODULE_5__["default"])(mapping);
  const mappingChanged = prevMapping != null && mapping !== prevMapping;
  const defaultFrame = { frame: { matcher: { id: _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FrameMatcherID.byIndex, options: 0 } } };
  const [selectedIdx, setSelectedIdx] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  if (mappingChanged || seriesCfg == null) {
    seriesCfg = [{ ...defaultFrame }];
    onChange([...seriesCfg]);
    if (selectedIdx > 0) {
      setSelectedIdx(0);
    }
  }
  const addSeries = () => {
    seriesCfg = seriesCfg.concat({ ...defaultFrame });
    setSelectedIdx(seriesCfg.length - 1);
    onChange([...seriesCfg]);
  };
  const deleteSeries = (index) => {
    seriesCfg = seriesCfg.filter((s, i) => i !== index);
    setSelectedIdx(0);
    onChange([...seriesCfg]);
  };
  const series = seriesCfg[selectedIdx];
  const formKey = "".concat(mapping).concat(selectedIdx);
  const baseNameMode = mapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_3__.SeriesMapping.Manual ? _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldNamePickerBaseNameMode.ExcludeBaseNames : context.data.length === 1 ? _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldNamePickerBaseNameMode.IncludeAll : _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldNamePickerBaseNameMode.OnlyBaseNames;
  context.data.forEach((frame, frameIndex) => {
    frame.fields.forEach((field, fieldIndex) => {
      field.state = {
        ...field.state,
        origin: {
          frameIndex,
          fieldIndex
        }
      };
    });
  });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, mapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_3__.SeriesMapping.Manual && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button, { icon: "plus", size: "sm", variant: "secondary", onClick: addSeries, className: style.marginBot }, "Add series"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: style.marginBot }, seriesCfg.map((series2, index) => {
    var _a2, _b2;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      "div",
      {
        key: "series/".concat(index),
        className: index === selectedIdx ? "".concat(style.row, " ").concat(style.sel) : style.row,
        onClick: () => setSelectedIdx(index),
        role: "button",
        "aria-label": "Select series ".concat(index + 1),
        tabIndex: 0,
        onKeyPress: (e) => {
          if (e.key === "Enter") {
            setSelectedIdx(index);
          }
        }
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
        _core_components_Layers_LayerName__WEBPACK_IMPORTED_MODULE_2__.LayerName,
        {
          name: (_b2 = (_a2 = series2.name) == null ? void 0 : _a2.fixed) != null ? _b2 : "Series ".concat(index + 1),
          onChange: (v) => {
            series2.name = {
              fixed: v === "" || v === "Series ".concat(index + 1) ? void 0 : v
            };
            onChange([...seriesCfg]);
          }
        }
      ),
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.IconButton,
        {
          name: "trash-alt",
          title: "remove",
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(style.actionIcon),
          onClick: () => deleteSeries(index),
          tooltip: "Delete series"
        }
      )
    );
  }))), selectedIdx >= 0 && series != null && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, { key: formKey }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field, { label: "Frame" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Select,
    {
      placeholder: mapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_3__.SeriesMapping.Auto ? "All frames" : "Select frame",
      isClearable: true,
      options: context.data.map((frame, index) => ({
        value: index,
        label: "".concat((0,_grafana_data__WEBPACK_IMPORTED_MODULE_12__.getFrameDisplayName)(frame, index), " (index: ").concat(index, ", rows: ").concat(frame.length, ")")
      })),
      value: (_b = series.frame) == null ? void 0 : _b.matcher.options,
      onChange: (opt) => {
        if (opt == null) {
          delete series.frame;
        } else {
          series.frame = {
            matcher: {
              id: _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FrameMatcherID.byIndex,
              options: Number(opt.value)
            }
          };
        }
        onChange([...seriesCfg]);
      }
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field, { label: "X field" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui_src_components_MatchersUI_FieldNamePicker__WEBPACK_IMPORTED_MODULE_13__.FieldNamePicker,
    {
      value: (_c = series.x) == null ? void 0 : _c.matcher.options,
      context,
      onChange: (fieldName) => {
        if (fieldName == null) {
          delete series.x;
        } else {
          series.x = {
            matcher: {
              id: _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FieldMatcherID.byName,
              options: fieldName
            }
          };
        }
        onChange([...seriesCfg]);
      },
      item: {
        id: "x",
        name: "x",
        settings: {
          filter: (field) => {
            var _a2, _b2, _c2, _d2, _e2;
            return (mapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_3__.SeriesMapping.Auto || ((_b2 = (_a2 = field.state) == null ? void 0 : _a2.origin) == null ? void 0 : _b2.frameIndex) === ((_c2 = series.frame) == null ? void 0 : _c2.matcher.options)) && field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_14__.FieldType.number && !((_e2 = (_d2 = field.config.custom) == null ? void 0 : _d2.hideFrom) == null ? void 0 : _e2.viz);
          },
          baseNameMode,
          placeholderText: mapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_3__.SeriesMapping.Auto ? "First number field in each frame" : void 0
        }
      }
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field, { label: "Y field" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui_src_components_MatchersUI_FieldNamePicker__WEBPACK_IMPORTED_MODULE_13__.FieldNamePicker,
    {
      value: (_e = (_d = series.y) == null ? void 0 : _d.matcher) == null ? void 0 : _e.options,
      context,
      onChange: (fieldName) => {
        if (fieldName == null) {
          delete series.y;
        } else {
          series.y = {
            matcher: {
              id: _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FieldMatcherID.byName,
              options: fieldName
            }
          };
        }
        onChange([...seriesCfg]);
      },
      item: {
        id: "y",
        name: "y",
        settings: {
          // TODO: filter out series.y?.exclude.options, series.size.matcher.options, series.color.matcher.options
          filter: (field) => {
            var _a2, _b2, _c2, _d2, _e2;
            return (mapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_3__.SeriesMapping.Auto || ((_b2 = (_a2 = field.state) == null ? void 0 : _a2.origin) == null ? void 0 : _b2.frameIndex) === ((_c2 = series.frame) == null ? void 0 : _c2.matcher.options)) && field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_14__.FieldType.number && !((_e2 = (_d2 = field.config.custom) == null ? void 0 : _d2.hideFrom) == null ? void 0 : _e2.viz);
          },
          baseNameMode,
          placeholderText: mapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_3__.SeriesMapping.Auto ? "Remaining number fields in each frame" : void 0
        }
      }
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field, { label: "Size field" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui_src_components_MatchersUI_FieldNamePicker__WEBPACK_IMPORTED_MODULE_13__.FieldNamePicker,
    {
      value: (_g = (_f = series.size) == null ? void 0 : _f.matcher) == null ? void 0 : _g.options,
      context,
      onChange: (fieldName) => {
        if (fieldName == null) {
          delete series.size;
        } else {
          series.size = {
            matcher: {
              id: _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FieldMatcherID.byName,
              options: fieldName
            }
          };
        }
        onChange([...seriesCfg]);
      },
      item: {
        id: "size",
        name: "size",
        settings: {
          // TODO: filter out series.y?.exclude.options, series.size.matcher.options, series.color.matcher.options
          filter: (field) => {
            var _a2, _b2, _c2, _d2, _e2, _f2;
            return field.name !== ((_a2 = series.x) == null ? void 0 : _a2.matcher.options) && (mapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_3__.SeriesMapping.Auto || ((_c2 = (_b2 = field.state) == null ? void 0 : _b2.origin) == null ? void 0 : _c2.frameIndex) === ((_d2 = series.frame) == null ? void 0 : _d2.matcher.options)) && field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_14__.FieldType.number && !((_f2 = (_e2 = field.config.custom) == null ? void 0 : _e2.hideFrom) == null ? void 0 : _f2.viz);
          },
          baseNameMode,
          placeholderText: ""
        }
      }
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field, { label: "Color field" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui_src_components_MatchersUI_FieldNamePicker__WEBPACK_IMPORTED_MODULE_13__.FieldNamePicker,
    {
      value: (_i = (_h = series.color) == null ? void 0 : _h.matcher) == null ? void 0 : _i.options,
      context,
      onChange: (fieldName) => {
        if (fieldName == null) {
          delete series.color;
        } else {
          series.color = {
            matcher: {
              id: _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FieldMatcherID.byName,
              options: fieldName
            }
          };
        }
        onChange([...seriesCfg]);
      },
      item: {
        id: "color",
        name: "color",
        settings: {
          // TODO: filter out series.y?.exclude.options, series.size.matcher.options, series.color.matcher.options
          filter: (field) => {
            var _a2, _b2, _c2, _d2, _e2, _f2;
            return field.name !== ((_a2 = series.x) == null ? void 0 : _a2.matcher.options) && (mapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_3__.SeriesMapping.Auto || ((_c2 = (_b2 = field.state) == null ? void 0 : _b2.origin) == null ? void 0 : _c2.frameIndex) === ((_d2 = series.frame) == null ? void 0 : _d2.matcher.options)) && field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_14__.FieldType.number && !((_f2 = (_e2 = field.config.custom) == null ? void 0 : _e2.hideFrom) == null ? void 0 : _f2.viz);
          },
          baseNameMode,
          placeholderText: ""
        }
      }
    }
  ))));
};
const getStyles = (theme) => ({
  marginBot: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    marginBottom: "20px"
  }),
  row: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    padding: "".concat(theme.spacing(0.5, 1)),
    borderRadius: "".concat(theme.shape.radius.default),
    background: "".concat(theme.colors.background.secondary),
    minHeight: "".concat(theme.spacing(4)),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "3px",
    cursor: "pointer",
    border: "1px solid ".concat(theme.components.input.borderColor),
    "&:hover": {
      border: "1px solid ".concat(theme.components.input.borderHover)
    }
  }),
  sel: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    border: "1px solid ".concat(theme.colors.primary.border),
    "&:hover": {
      border: "1px solid ".concat(theme.colors.primary.border)
    }
  }),
  actionIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    color: "".concat(theme.colors.text.secondary),
    "&:hover": {
      color: "".concat(theme.colors.text)
    }
  })
});


/***/ }),

/***/ "./public/app/plugins/panel/xychart/v2/XYChartPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XYChartPanel2: () => (/* binding */ XYChartPanel2)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_data_src_themes_colorManipulator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/themes/colorManipulator.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/VizLayout/VizLayout.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/VizLegend/VizLegend.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/Plot.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/plugins/TooltipPlugin2.tsx");
/* harmony import */ var _grafana_ui_src_components_uPlot_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/utils.ts");
/* harmony import */ var _XYChartTooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/xychart/v2/XYChartTooltip.tsx");
/* harmony import */ var _scatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/xychart/v2/scatter.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/xychart/v2/utils.ts");












const XYChartPanel2 = (props) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useTheme2)();
  let { mapping, series: mappedSeries } = props.options;
  let series = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => (0,_utils__WEBPACK_IMPORTED_MODULE_4__.prepSeries)(mapping, mappedSeries, props.data.series, props.fieldConfig),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mapping, mappedSeries, props.data.series, props.fieldConfig]
  );
  let { builder, prepData } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => (0,_scatter__WEBPACK_IMPORTED_MODULE_3__.prepConfig)(series, _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.config.theme2),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mapping, mappedSeries, props.data.structureRev, props.fieldConfig, props.options.tooltip]
  );
  let data = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => prepData(series),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [series]
  );
  let error = builder == null || data.length === 0 ? "Err" : "";
  const renderLegend = () => {
    if (!props.options.legend.showLegend) {
      return null;
    }
    const items = [];
    series.forEach((s, idx) => {
      var _a, _b, _c, _d, _e, _f, _g;
      let yField = s.y.field;
      let config2 = yField.config;
      let custom = config2.custom;
      if (!((_a = custom.hideFrom) == null ? void 0 : _a.legend)) {
        items.push({
          yAxis: 1,
          // TODO: pull from y field
          label: s.name.value,
          color: (0,_grafana_data_src_themes_colorManipulator__WEBPACK_IMPORTED_MODULE_7__.alpha)((_b = s.color.fixed) != null ? _b : _grafana_data__WEBPACK_IMPORTED_MODULE_8__.FALLBACK_COLOR, 1),
          getItemKey: () => "".concat(idx, "-").concat(s.name.value),
          fieldName: (_d = (_c = yField.state) == null ? void 0 : _c.displayName) != null ? _d : yField.name,
          disabled: (_g = (_f = (_e = yField.state) == null ? void 0 : _e.hideFrom) == null ? void 0 : _f.viz) != null ? _g : false,
          getDisplayValues: () => (0,_grafana_ui_src_components_uPlot_utils__WEBPACK_IMPORTED_MODULE_9__.getDisplayValuesForCalcs)(props.options.legend.calcs, yField, theme)
        });
      }
    });
    const { placement, displayMode, width, sortBy, sortDesc } = props.options.legend;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.VizLayout.Legend, { placement, width }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.VizLegend,
      {
        className: styles.legend,
        placement,
        items,
        displayMode,
        sortBy,
        sortDesc,
        isSortable: true
      }
    ));
  };
  if (error) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "panel-empty" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, error));
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.VizLayout, { width: props.width, height: props.height, legend: renderLegend() }, (vizWidth, vizHeight) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.UPlotChart, { config: builder, data, width: vizWidth, height: vizHeight }, props.options.tooltip.mode !== _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.TooltipDisplayMode.None && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.TooltipPlugin2,
    {
      config: builder,
      hoverMode: _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.TooltipHoverMode.xyOne,
      render: (u, dataIdxs, seriesIdx, isPinned, dismiss) => {
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          _XYChartTooltip__WEBPACK_IMPORTED_MODULE_2__.XYChartTooltip,
          {
            data: props.data.series,
            dataIdxs,
            xySeries: series,
            dismiss,
            isPinned,
            seriesIdx
          }
        );
      },
      maxWidth: props.options.tooltip.maxWidth
    }
  )));
};
const getStyles = () => ({
  legend: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    div: {
      justifyContent: "flex-start"
    }
  })
});


/***/ }),

/***/ "./public/app/plugins/panel/xychart/v2/XYChartTooltip.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XYChartTooltip: () => (/* binding */ XYChartTooltip)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data_src_themes_colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/themes/colorManipulator.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_src_components_VizTooltip_VizTooltipContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipContent.tsx");
/* harmony import */ var _grafana_ui_src_components_VizTooltip_VizTooltipFooter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipFooter.tsx");
/* harmony import */ var _grafana_ui_src_components_VizTooltip_VizTooltipHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipHeader.tsx");
/* harmony import */ var _grafana_ui_src_components_VizTooltip_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/types.ts");
/* harmony import */ var _status_history_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/status-history/utils.ts");
/* harmony import */ var _timeseries_TimeSeriesTooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/timeseries/TimeSeriesTooltip.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/xychart/v2/utils.ts");











function stripSeriesName(fieldName, seriesName) {
  if (fieldName !== seriesName && fieldName.includes(" ")) {
    fieldName = fieldName.replace(seriesName, "").trim();
  }
  return fieldName;
}
const XYChartTooltip = ({ dataIdxs, seriesIdx, data, xySeries, dismiss, isPinned }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(_timeseries_TimeSeriesTooltip__WEBPACK_IMPORTED_MODULE_2__.getStyles);
  const rowIndex = dataIdxs.find((idx) => idx !== null);
  const series = xySeries[seriesIdx - 1];
  const xField = series.x.field;
  const yField = series.y.field;
  const sizeField = series.size.field;
  const colorField = series.color.field;
  let label = series.name.value;
  let seriesColor = series.color.fixed;
  const headerItem = {
    label,
    value: "",
    color: (0,_grafana_data_src_themes_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(seriesColor != null ? seriesColor : "#fff", 0.5),
    colorIndicator: _grafana_ui_src_components_VizTooltip_types__WEBPACK_IMPORTED_MODULE_6__.ColorIndicator.marker_md
  };
  const contentItems = [
    {
      label: stripSeriesName((_b = (_a = xField.state) == null ? void 0 : _a.displayName) != null ? _b : xField.name, label),
      value: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.fmt)(xField, xField.values[rowIndex])
    },
    {
      label: stripSeriesName((_d = (_c = yField.state) == null ? void 0 : _c.displayName) != null ? _d : yField.name, label),
      value: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.fmt)(yField, yField.values[rowIndex])
    }
  ];
  if (sizeField != null && sizeField !== yField) {
    contentItems.push({
      label: stripSeriesName((_f = (_e = sizeField.state) == null ? void 0 : _e.displayName) != null ? _f : sizeField.name, label),
      value: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.fmt)(sizeField, sizeField.values[rowIndex])
    });
  }
  if (colorField != null && colorField !== yField) {
    contentItems.push({
      label: stripSeriesName((_h = (_g = colorField.state) == null ? void 0 : _g.displayName) != null ? _h : colorField.name, label),
      value: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.fmt)(colorField, colorField.values[rowIndex])
    });
  }
  series._rest.forEach((field) => {
    var _a2, _b2;
    contentItems.push({
      label: stripSeriesName((_b2 = (_a2 = field.state) == null ? void 0 : _a2.displayName) != null ? _b2 : field.name, label),
      value: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.fmt)(field, field.values[rowIndex])
    });
  });
  let footer;
  if (isPinned && seriesIdx != null) {
    const links = (0,_status_history_utils__WEBPACK_IMPORTED_MODULE_1__.getDataLinks)(yField, rowIndex);
    footer = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui_src_components_VizTooltip_VizTooltipFooter__WEBPACK_IMPORTED_MODULE_7__.VizTooltipFooter, { dataLinks: links });
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.wrapper }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui_src_components_VizTooltip_VizTooltipHeader__WEBPACK_IMPORTED_MODULE_8__.VizTooltipHeader, { item: headerItem, isPinned }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui_src_components_VizTooltip_VizTooltipContent__WEBPACK_IMPORTED_MODULE_9__.VizTooltipContent, { items: contentItems, isPinned }), footer);
};


/***/ }),

/***/ "./public/app/plugins/panel/xychart/v2/config.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_POINT_SIZE: () => (/* binding */ DEFAULT_POINT_SIZE),
/* harmony export */   getScatterFieldConfig: () => (/* binding */ getScatterFieldConfig)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/fieldOverrides.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/field/overrides/processors.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/options/builder/axis.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/options/builder/hideSeries.tsx");
/* harmony import */ var _timeseries_LineStyleEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/panel/timeseries/LineStyleEditor.tsx");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/xychart/v2/panelcfg.gen.ts");





const DEFAULT_POINT_SIZE = 5;
function getScatterFieldConfig(cfg) {
  return {
    standardOptions: {
      [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldConfigProperty.Min]: {
        hideFromDefaults: true
      },
      [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldConfigProperty.Max]: {
        hideFromDefaults: true
      },
      [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldConfigProperty.Unit]: {
        hideFromDefaults: true
      },
      [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldConfigProperty.Decimals]: {
        hideFromDefaults: true
      },
      [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldConfigProperty.NoValue]: {
        hideFromDefaults: true
      },
      [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldConfigProperty.DisplayName]: {
        hideFromDefaults: true
      },
      // TODO: this still leaves Color series by: [ Last | Min | Max ]
      // because item.settings?.bySeriesSupport && colorMode.isByValue
      [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldConfigProperty.Color]: {
        settings: {
          byValueSupport: true,
          bySeriesSupport: true,
          preferThresholdsMode: false
        },
        defaultValue: {
          mode: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldColorModeId.PaletteClassic
        }
      }
    },
    useCustomConfig: (builder) => {
      var _a, _b;
      builder.addRadio({
        path: "show",
        name: "Show",
        defaultValue: cfg.show,
        settings: {
          options: [
            { label: "Points", value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_1__.XYShowMode.Points },
            { label: "Lines", value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_1__.XYShowMode.Lines },
            { label: "Both", value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_1__.XYShowMode.PointsAndLines }
          ]
        }
      }).addSliderInput({
        path: "pointSize.fixed",
        name: "Point size",
        defaultValue: (_b = (_a = cfg.pointSize) == null ? void 0 : _a.fixed) != null ? _b : DEFAULT_POINT_SIZE,
        settings: {
          min: 1,
          max: 100,
          step: 1
        },
        showIf: (c) => c.show !== _panelcfg_gen__WEBPACK_IMPORTED_MODULE_1__.XYShowMode.Lines
      }).addNumberInput({
        path: "pointSize.min",
        name: "Min point size",
        showIf: (c) => c.show !== _panelcfg_gen__WEBPACK_IMPORTED_MODULE_1__.XYShowMode.Lines
      }).addNumberInput({
        path: "pointSize.max",
        name: "Max point size",
        showIf: (c) => c.show !== _panelcfg_gen__WEBPACK_IMPORTED_MODULE_1__.XYShowMode.Lines
      }).addRadio({
        path: "pointShape",
        name: "Point shape",
        defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_1__.PointShape.Circle,
        settings: {
          options: [
            { value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_1__.PointShape.Circle, label: "Circle" },
            { value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_1__.PointShape.Square, label: "Square" }
          ]
        },
        showIf: (c) => c.show !== _panelcfg_gen__WEBPACK_IMPORTED_MODULE_1__.XYShowMode.Lines
      }).addSliderInput({
        path: "pointStrokeWidth",
        name: "Point stroke width",
        defaultValue: 1,
        settings: {
          min: 0,
          max: 10
        },
        showIf: (c) => c.show !== _panelcfg_gen__WEBPACK_IMPORTED_MODULE_1__.XYShowMode.Lines
      }).addSliderInput({
        path: "fillOpacity",
        name: "Fill opacity",
        defaultValue: 50,
        settings: {
          min: 0,
          max: 100,
          step: 1
        },
        showIf: (c) => c.show !== _panelcfg_gen__WEBPACK_IMPORTED_MODULE_1__.XYShowMode.Lines
      }).addCustomEditor({
        id: "lineStyle",
        path: "lineStyle",
        name: "Line style",
        showIf: (c) => c.show !== _panelcfg_gen__WEBPACK_IMPORTED_MODULE_1__.XYShowMode.Points,
        editor: _timeseries_LineStyleEditor__WEBPACK_IMPORTED_MODULE_0__.LineStyleEditor,
        override: _timeseries_LineStyleEditor__WEBPACK_IMPORTED_MODULE_0__.LineStyleEditor,
        process: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.identityOverrideProcessor,
        shouldApply: (f) => f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.number
      }).addSliderInput({
        path: "lineWidth",
        name: "Line width",
        defaultValue: cfg.lineWidth,
        settings: {
          min: 0,
          max: 10,
          step: 1
        },
        showIf: (c) => c.show !== _panelcfg_gen__WEBPACK_IMPORTED_MODULE_1__.XYShowMode.Points
      });
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.addAxisConfig(builder, cfg);
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.addHideFrom(builder);
    }
  };
}


/***/ }),

/***/ "./public/app/plugins/panel/xychart/v2/migrations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   xyChartMigrationHandler: () => (/* binding */ xyChartMigrationHandler)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/panel/xychart/panelcfg.gen.ts");



const xyChartMigrationHandler = (panel) => {
  var _a;
  const pluginVersion = (_a = panel == null ? void 0 : panel.pluginVersion) != null ? _a : "";
  if (pluginVersion === "" || parseFloat(pluginVersion) < 11.1) {
    return migrateOptions(panel);
  }
  return panel.options;
};
function migrateOptions(panel) {
  const { dims, seriesMapping, series: oldSeries, ...cleanedOpts } = panel.options;
  const { exclude = [], frame: frameShared, x: xShared } = dims != null ? dims : {};
  const custDefaults = panel.fieldConfig.defaults.custom;
  let oldSeries2 = oldSeries;
  if (seriesMapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__.SeriesMapping.Auto) {
    oldSeries2 = [
      {
        x: void 0,
        y: void 0
      }
    ];
  }
  let i = 0;
  const newSeries = oldSeries2.map(({ x, y, pointColor, pointSize, frame }) => {
    var _a, _b, _c, _d;
    const { fixed: colorFixed, field: colorField } = pointColor != null ? pointColor : {};
    const { fixed: sizeFixed, field: sizeField, min: sizeMin, max: sizeMax } = pointSize != null ? pointSize : {};
    let xMatcherConfig;
    let yMatcherConfig;
    if (x == null && xShared == null) {
      xMatcherConfig = {
        id: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldMatcherID.byType,
        options: "number"
      };
    } else {
      xMatcherConfig = {
        id: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldMatcherID.byName,
        options: x != null ? x : xShared
      };
    }
    if (y == null) {
      yMatcherConfig = {
        id: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldMatcherID.byType,
        options: "number"
      };
    } else {
      yMatcherConfig = {
        id: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldMatcherID.byName,
        options: y
      };
    }
    if (colorField == null && colorFixed && ((_a = custDefaults.pointColor) == null ? void 0 : _a.fixed) !== colorFixed) {
      let hasOverride = panel.fieldConfig.overrides.some(
        (o) => o.matcher.id === yMatcherConfig.id && o.matcher.options === yMatcherConfig.options && o.properties.some((p) => p.id === "color")
      );
      if (!hasOverride) {
        panel.fieldConfig.overrides.push({
          matcher: yMatcherConfig,
          properties: [
            {
              id: "color",
              value: {
                mode: "fixed",
                fixedColor: colorFixed
              }
            }
          ]
        });
      }
    }
    if (sizeField == null && sizeFixed && ((_b = custDefaults.pointSize) == null ? void 0 : _b.fixed) !== sizeFixed) {
      let hasOverride = panel.fieldConfig.overrides.some(
        (o) => o.matcher.id === yMatcherConfig.id && o.matcher.options === yMatcherConfig.options && o.properties.some((p) => p.id === "custom.pointSize.fixed")
      );
      if (!hasOverride) {
        panel.fieldConfig.overrides.push({
          matcher: yMatcherConfig,
          properties: [
            {
              id: "custom.pointSize.fixed",
              value: sizeFixed
            }
          ]
        });
      }
    }
    if (sizeField != null) {
      if (sizeMin && ((_c = custDefaults.pointSize) == null ? void 0 : _c.min) !== sizeMin) {
        let hasOverride = panel.fieldConfig.overrides.some(
          (o) => o.matcher.id === yMatcherConfig.id && o.matcher.options === yMatcherConfig.options && o.properties.some((p) => p.id === "custom.pointSize.min")
        );
        if (!hasOverride) {
          panel.fieldConfig.overrides.push({
            matcher: {
              id: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldMatcherID.byName,
              options: sizeField
            },
            properties: [
              {
                id: "custom.pointSize.min",
                value: sizeMin
              }
            ]
          });
        }
      }
      if (sizeMax && ((_d = custDefaults.pointSize) == null ? void 0 : _d.max) !== sizeMax) {
        let hasOverride = panel.fieldConfig.overrides.some(
          (o) => o.matcher.id === yMatcherConfig.id && o.matcher.options === yMatcherConfig.options && o.properties.some((p) => p.id === "custom.pointSize.max")
        );
        if (!hasOverride) {
          panel.fieldConfig.overrides.push({
            matcher: {
              id: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldMatcherID.byName,
              options: sizeField
            },
            properties: [
              {
                id: "custom.pointSize.max",
                value: sizeMax
              }
            ]
          });
        }
      }
    }
    return {
      frame: {
        matcher: {
          id: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FrameMatcherID.byIndex,
          options: frame != null ? frame : seriesMapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__.SeriesMapping.Manual ? i++ : frameShared != null ? frameShared : 0
        }
      },
      x: {
        matcher: xMatcherConfig
      },
      y: {
        matcher: yMatcherConfig,
        ...exclude.length && {
          exclude: {
            id: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldMatcherID.byNames,
            options: exclude
          }
        }
      },
      ...colorField && {
        color: {
          matcher: {
            id: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldMatcherID.byName,
            options: colorField
          }
        }
      },
      ...sizeField && {
        size: {
          matcher: {
            id: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldMatcherID.byName,
            options: sizeField
          }
        }
      }
    };
  });
  const newOptions = {
    ...cleanedOpts,
    mapping: seriesMapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__.SeriesMapping.Auto ? _panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__.SeriesMapping.Auto : _panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__.SeriesMapping.Manual,
    series: newSeries
  };
  return newOptions;
}


/***/ }),

/***/ "./public/app/plugins/panel/xychart/v2/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/panel/PanelPlugin.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/options/builder/tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/options/builder/legend.tsx");
/* harmony import */ var _SeriesEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/panel/xychart/v2/SeriesEditor.tsx");
/* harmony import */ var _XYChartPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/xychart/v2/XYChartPanel.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/xychart/v2/config.ts");
/* harmony import */ var _migrations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/xychart/v2/migrations.ts");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/xychart/v2/panelcfg.gen.ts");








const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_5__.PanelPlugin(_XYChartPanel__WEBPACK_IMPORTED_MODULE_1__.XYChartPanel2).setMigrationHandler(_migrations__WEBPACK_IMPORTED_MODULE_3__.xyChartMigrationHandler).useFieldConfig((0,_config__WEBPACK_IMPORTED_MODULE_2__.getScatterFieldConfig)(_panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__.defaultFieldConfig)).setPanelOptions((builder) => {
  builder.addRadio({
    path: "mapping",
    name: "Series mapping",
    defaultValue: "auto",
    settings: {
      options: [
        { value: "auto", label: "Auto" },
        { value: "manual", label: "Manual" }
      ]
    }
  }).addCustomEditor({
    id: "series",
    path: "series",
    name: "",
    editor: _SeriesEditor__WEBPACK_IMPORTED_MODULE_0__.SeriesEditor,
    defaultValue: [{}]
  });
  _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.addTooltipOptions(builder, true);
  _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.addLegendOptions(builder);
});


/***/ }),

/***/ "./public/app/plugins/panel/xychart/v2/panelcfg.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointShape: () => (/* binding */ PointShape),
/* harmony export */   SeriesMapping: () => (/* binding */ SeriesMapping),
/* harmony export */   XYShowMode: () => (/* binding */ XYShowMode),
/* harmony export */   defaultFieldConfig: () => (/* binding */ defaultFieldConfig),
/* harmony export */   defaultMatcherConfig: () => (/* binding */ defaultMatcherConfig),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });

var PointShape = /* @__PURE__ */ ((PointShape2) => {
  PointShape2["Circle"] = "circle";
  PointShape2["Square"] = "square";
  return PointShape2;
})(PointShape || {});
var SeriesMapping = /* @__PURE__ */ ((SeriesMapping2) => {
  SeriesMapping2["Auto"] = "auto";
  SeriesMapping2["Manual"] = "manual";
  return SeriesMapping2;
})(SeriesMapping || {});
var XYShowMode = /* @__PURE__ */ ((XYShowMode2) => {
  XYShowMode2["Lines"] = "lines";
  XYShowMode2["Points"] = "points";
  XYShowMode2["PointsAndLines"] = "points+lines";
  return XYShowMode2;
})(XYShowMode || {});
const defaultMatcherConfig = {
  id: ""
};
const defaultFieldConfig = {
  fillOpacity: 50,
  show: "points" /* Points */
};
const defaultOptions = {
  series: []
};


/***/ }),

/***/ "./public/app/plugins/panel/xychart/v2/scatter.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prepConfig: () => (/* binding */ prepConfig)
/* harmony export */ });
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tinycolor2/esm/tinycolor.js");
/* harmony import */ var uplot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/uplot/dist/uPlot.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-data/src/types/valueMapping.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-data/src/types/thresholds.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-data/src/field/fieldColor.ts");
/* harmony import */ var _grafana_data_src_themes_colorManipulator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/themes/colorManipulator.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-schema/src/raw/dashboard/x/dashboard_types.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/config/UPlotConfigBuilder.ts");
/* harmony import */ var _barchart_quadtree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/barchart/quadtree.ts");
/* harmony import */ var _heatmap_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/heatmap/utils.ts");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/xychart/v2/panelcfg.gen.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/xychart/v2/utils.ts");











const prepConfig = (xySeries, theme) => {
  var _a, _b;
  if (xySeries.length === 0) {
    return { builder: null, prepData: () => [] };
  }
  let qt;
  let hRect;
  function drawBubblesFactory(opts) {
    const drawBubbles2 = (u, seriesIdx, idx0, idx1) => {
      uplot__WEBPACK_IMPORTED_MODULE_1__["default"].orient(
        u,
        seriesIdx,
        (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim, moveTo, lineTo, rect, arc) => {
          var _a2, _b2, _c;
          const pxRatio = uplot__WEBPACK_IMPORTED_MODULE_1__["default"].pxRatio;
          const scatterInfo = xySeries[seriesIdx - 1];
          let d = u.data[seriesIdx];
          let showLine = scatterInfo.showLine;
          let showPoints = scatterInfo.showPoints === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.VisibilityMode.Always;
          let strokeWidth = (_a2 = scatterInfo.pointStrokeWidth) != null ? _a2 : 0;
          u.ctx.save();
          u.ctx.rect(u.bbox.left, u.bbox.top, u.bbox.width, u.bbox.height);
          u.ctx.clip();
          let pointAlpha = scatterInfo.fillOpacity / 100;
          u.ctx.fillStyle = (0,_grafana_data_src_themes_colorManipulator__WEBPACK_IMPORTED_MODULE_7__.alpha)(series.fill(), pointAlpha);
          u.ctx.strokeStyle = (0,_grafana_data_src_themes_colorManipulator__WEBPACK_IMPORTED_MODULE_7__.alpha)(series.stroke(), 1);
          u.ctx.lineWidth = strokeWidth;
          let deg360 = 2 * Math.PI;
          let xKey = scaleX.key;
          let yKey = scaleY.key;
          const pointSize = scatterInfo.y.field.config.custom.pointSize;
          const colorByValue = scatterInfo.color.field != null;
          let maxSize = ((_b2 = pointSize.max) != null ? _b2 : pointSize.fixed) * pxRatio;
          let filtLft = u.posToVal(-maxSize / 2, xKey);
          let filtRgt = u.posToVal(u.bbox.width / pxRatio + maxSize / 2, xKey);
          let filtBtm = u.posToVal(u.bbox.height / pxRatio + maxSize / 2, yKey);
          let filtTop = u.posToVal(-maxSize / 2, yKey);
          let sizes = opts.disp.size.values(u, seriesIdx);
          let pointColors = dispColors[seriesIdx - 1].values;
          let pointPalette = dispColors[seriesIdx - 1].index;
          let paletteHasAlpha = dispColors[seriesIdx - 1].hasAlpha;
          let isSquare = scatterInfo.pointShape === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__.PointShape.Square;
          let linePath = showLine ? new Path2D() : null;
          let curColorIdx = -1;
          for (let i = 0; i < d[0].length; i++) {
            let xVal = d[0][i];
            let yVal = d[1][i];
            if (xVal >= filtLft && xVal <= filtRgt && yVal >= filtBtm && yVal <= filtTop) {
              let size = Math.round(sizes[i] * pxRatio);
              let cx = valToPosX(xVal, scaleX, xDim, xOff);
              let cy = valToPosY(yVal, scaleY, yDim, yOff);
              if (showLine) {
                linePath.lineTo(cx, cy);
              }
              if (showPoints) {
                if (colorByValue) {
                  if (pointColors[i] !== curColorIdx) {
                    curColorIdx = pointColors[i];
                    let c = curColorIdx === -1 ? _grafana_data__WEBPACK_IMPORTED_MODULE_8__.FALLBACK_COLOR : pointPalette[curColorIdx];
                    u.ctx.fillStyle = paletteHasAlpha ? c : (0,_grafana_data_src_themes_colorManipulator__WEBPACK_IMPORTED_MODULE_7__.alpha)(c, pointAlpha);
                    u.ctx.strokeStyle = (0,_grafana_data_src_themes_colorManipulator__WEBPACK_IMPORTED_MODULE_7__.alpha)(c, 1);
                  }
                }
                if (isSquare) {
                  let x = Math.round(cx - size / 2);
                  let y = Math.round(cy - size / 2);
                  if (colorByValue || pointAlpha > 0) {
                    u.ctx.fillRect(x, y, size, size);
                  }
                  if (strokeWidth > 0) {
                    u.ctx.strokeRect(x, y, size, size);
                  }
                } else {
                  u.ctx.beginPath();
                  u.ctx.arc(cx, cy, size / 2, 0, deg360);
                  if (colorByValue || pointAlpha > 0) {
                    u.ctx.fill();
                  }
                  if (strokeWidth > 0) {
                    u.ctx.stroke();
                  }
                }
                opts.each(
                  u,
                  seriesIdx,
                  i,
                  cx - size / 2 - strokeWidth / 2,
                  cy - size / 2 - strokeWidth / 2,
                  size + strokeWidth,
                  size + strokeWidth
                );
              }
            }
          }
          if (showLine) {
            u.ctx.strokeStyle = scatterInfo.color.fixed;
            u.ctx.lineWidth = scatterInfo.lineWidth * pxRatio;
            const { lineStyle } = scatterInfo;
            if (lineStyle && lineStyle.fill !== "solid") {
              if (lineStyle.fill === "dot") {
                u.ctx.lineCap = "round";
              }
              u.ctx.setLineDash((_c = lineStyle.dash) != null ? _c : [10, 10]);
            }
            u.ctx.stroke(linePath);
          }
          u.ctx.restore();
        }
      );
      return null;
    };
    return drawBubbles2;
  }
  let drawBubbles = drawBubblesFactory({
    disp: {
      size: {
        //unit: 3, // raw CSS pixels
        values: (u, seriesIdx) => {
          return u.data[seriesIdx][2];
        }
      },
      color: {
        // string values
        values: (u, seriesIdx) => {
          return u.data[seriesIdx][3];
        }
      }
    },
    each: (u, seriesIdx, dataIdx, lft, top, wid, hgt) => {
      lft -= u.bbox.left;
      top -= u.bbox.top;
      qt.add({ x: lft, y: top, w: wid, h: hgt, sidx: seriesIdx, didx: dataIdx });
    }
  });
  const builder = new _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.UPlotConfigBuilder();
  builder.setCursor({
    drag: { setScale: true },
    dataIdx: (u, seriesIdx) => {
      if (seriesIdx === 1) {
        const pxRatio = uplot__WEBPACK_IMPORTED_MODULE_1__["default"].pxRatio;
        hRect = null;
        let dist = Infinity;
        let cx = u.cursor.left * pxRatio;
        let cy = u.cursor.top * pxRatio;
        qt.get(cx, cy, 1, 1, (o) => {
          if ((0,_barchart_quadtree__WEBPACK_IMPORTED_MODULE_2__.pointWithin)(cx, cy, o.x, o.y, o.x + o.w, o.y + o.h)) {
            let ocx = o.x + o.w / 2;
            let ocy = o.y + o.h / 2;
            let dx = ocx - cx;
            let dy = ocy - cy;
            let d = Math.sqrt(dx ** 2 + dy ** 2);
            if (d <= o.w / 2) {
              if (d <= dist) {
                dist = d;
                hRect = o;
              }
            }
          }
        });
      }
      return hRect && seriesIdx === hRect.sidx ? hRect.didx : null;
    },
    points: {
      size: (u, seriesIdx) => {
        return hRect && seriesIdx === hRect.sidx ? hRect.w / uplot__WEBPACK_IMPORTED_MODULE_1__["default"].pxRatio : 0;
      },
      fill: (u, seriesIdx) => "rgba(255,255,255,0.4)"
    }
  });
  builder.addHook("init", (u, r) => {
    u.over.style.overflow = "hidden";
  });
  builder.addHook("drawClear", (u) => {
    qt = qt || new _barchart_quadtree__WEBPACK_IMPORTED_MODULE_2__.Quadtree(0, 0, u.bbox.width, u.bbox.height);
    qt.clear();
    u.series.forEach((s, i) => {
      if (i > 0) {
        s._paths = null;
      }
    });
  });
  builder.setMode(2);
  let xField = xySeries[0].x.field;
  let fieldConfig = xField.config;
  let customConfig = fieldConfig.custom;
  let scaleDistr = customConfig == null ? void 0 : customConfig.scaleDistribution;
  builder.addScale({
    scaleKey: "x",
    isTime: false,
    orientation: _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.ScaleOrientation.Horizontal,
    direction: _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.ScaleDirection.Right,
    distribution: scaleDistr == null ? void 0 : scaleDistr.type,
    log: scaleDistr == null ? void 0 : scaleDistr.log,
    linearThreshold: scaleDistr == null ? void 0 : scaleDistr.linearThreshold,
    min: fieldConfig.min,
    max: fieldConfig.max,
    softMin: customConfig == null ? void 0 : customConfig.axisSoftMin,
    softMax: customConfig == null ? void 0 : customConfig.axisSoftMax,
    centeredZero: customConfig == null ? void 0 : customConfig.axisCenteredZero,
    decimals: fieldConfig.decimals
  });
  let xAxisLabel = customConfig.axisLabel;
  if (xAxisLabel == null || xAxisLabel === "") {
    let dispNames = xySeries.map((s) => {
      var _a2, _b2;
      return (_b2 = (_a2 = s.x.field.state) == null ? void 0 : _a2.displayName) != null ? _b2 : "";
    });
    let xAxisAutoLabel = xySeries.length === 1 ? (_b = (_a = xField.state) == null ? void 0 : _a.displayName) != null ? _b : xField.name : new Set(dispNames).size === 1 ? dispNames[0] : (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getCommonPrefixSuffix)(dispNames);
    if (xAxisAutoLabel !== "") {
      xAxisLabel = xAxisAutoLabel;
    }
  }
  builder.addAxis({
    scaleKey: "x",
    placement: (customConfig == null ? void 0 : customConfig.axisPlacement) !== _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.AxisPlacement.Hidden ? _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.AxisPlacement.Bottom : _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.AxisPlacement.Hidden,
    show: (customConfig == null ? void 0 : customConfig.axisPlacement) !== _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.AxisPlacement.Hidden,
    grid: { show: customConfig == null ? void 0 : customConfig.axisGridShow },
    border: { show: customConfig == null ? void 0 : customConfig.axisBorderShow },
    theme,
    label: xAxisLabel,
    formatValue: (v, decimals) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_10__.formattedValueToString)(xField.display(v, decimals))
  });
  xySeries.forEach((s, si) => {
    var _a2, _b2, _c, _d, _e;
    let field = s.y.field;
    const lineColor = s.color.fixed;
    const pointColor = s.color.fixed;
    let scaleKey = (_a2 = field.config.unit) != null ? _a2 : "y";
    let config = field.config;
    let customConfig2 = config.custom;
    let scaleDistr2 = customConfig2 == null ? void 0 : customConfig2.scaleDistribution;
    builder.addScale({
      scaleKey,
      orientation: _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.ScaleOrientation.Vertical,
      direction: _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.ScaleDirection.Up,
      distribution: scaleDistr2 == null ? void 0 : scaleDistr2.type,
      log: scaleDistr2 == null ? void 0 : scaleDistr2.log,
      linearThreshold: scaleDistr2 == null ? void 0 : scaleDistr2.linearThreshold,
      min: config.min,
      max: config.max,
      softMin: customConfig2 == null ? void 0 : customConfig2.axisSoftMin,
      softMax: customConfig2 == null ? void 0 : customConfig2.axisSoftMax,
      centeredZero: customConfig2 == null ? void 0 : customConfig2.axisCenteredZero,
      decimals: config.decimals
    });
    let yAxisLabel = customConfig2.axisLabel;
    if (yAxisLabel == null || yAxisLabel === "") {
      let dispNames = xySeries.map((s2) => {
        var _a3, _b3;
        return (_b3 = (_a3 = s2.y.field.state) == null ? void 0 : _a3.displayName) != null ? _b3 : "";
      });
      let yAxisAutoLabel = xySeries.length === 1 ? (_c = (_b2 = field.state) == null ? void 0 : _b2.displayName) != null ? _c : field.name : new Set(dispNames).size === 1 ? dispNames[0] : (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getCommonPrefixSuffix)(dispNames);
      if (yAxisAutoLabel !== "") {
        yAxisLabel = yAxisAutoLabel;
      }
    }
    builder.addAxis({
      scaleKey,
      theme,
      placement: (customConfig2 == null ? void 0 : customConfig2.axisPlacement) === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.AxisPlacement.Auto ? _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.AxisPlacement.Left : customConfig2 == null ? void 0 : customConfig2.axisPlacement,
      show: (customConfig2 == null ? void 0 : customConfig2.axisPlacement) !== _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.AxisPlacement.Hidden,
      grid: { show: customConfig2 == null ? void 0 : customConfig2.axisGridShow },
      border: { show: customConfig2 == null ? void 0 : customConfig2.axisBorderShow },
      size: customConfig2 == null ? void 0 : customConfig2.axisWidth,
      // label: yAxisLabel == null || yAxisLabel === '' ? fieldDisplayName : yAxisLabel,
      label: yAxisLabel,
      formatValue: (v, decimals) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_10__.formattedValueToString)(field.display(v, decimals))
    });
    builder.addSeries({
      facets: [
        {
          scale: "x",
          auto: true
        },
        {
          scale: scaleKey,
          auto: true
        }
      ],
      pathBuilder: drawBubbles,
      // drawBubbles({disp: {size: {values: () => }}})
      theme,
      scaleKey: "",
      // facets' scales used (above)
      lineColor: (0,_grafana_data_src_themes_colorManipulator__WEBPACK_IMPORTED_MODULE_7__.alpha)(lineColor != null ? lineColor : "#ffff", 1),
      fillColor: (0,_grafana_data_src_themes_colorManipulator__WEBPACK_IMPORTED_MODULE_7__.alpha)(pointColor != null ? pointColor : "#ffff", 0.5),
      show: !((_e = (_d = field.state) == null ? void 0 : _d.hideFrom) == null ? void 0 : _e.viz)
    });
  });
  const dispColors = xySeries.map((s) => {
    const cfg = {
      index: [],
      getAll: () => [],
      getOne: () => -1,
      // cache for renderer, refreshed in prepData()
      values: [],
      hasAlpha: false
    };
    const f = s.color.field;
    if (f != null) {
      Object.assign(cfg, fieldValueColors(f, theme));
      cfg.hasAlpha = cfg.index.some((v) => !v.endsWith("ff"));
    }
    return cfg;
  });
  function prepData(xySeries2) {
    const { size: sizeRange, color: colorRange } = getGlobalRanges(xySeries2);
    xySeries2.forEach((s, i) => {
      var _a2, _b2;
      dispColors[i].values = dispColors[i].getAll((_b2 = (_a2 = s.color.field) == null ? void 0 : _a2.values) != null ? _b2 : [], colorRange.min, colorRange.max);
    });
    return [
      null,
      ...xySeries2.map((s, idx) => {
        let len = s.x.field.values.length;
        let diams;
        if (s.size.field != null) {
          let { min, max } = s.size;
          let minPx = min ** 2;
          let maxPx = max ** 2;
          let pxRange = maxPx - minPx;
          let vals = s.size.field.values;
          let minVal = sizeRange.min;
          let maxVal = sizeRange.max;
          let valRange = maxVal - minVal;
          diams = Array(len);
          for (let i = 0; i < vals.length; i++) {
            let val = vals[i];
            let valPct = (val - minVal) / valRange;
            let pxArea = minPx + valPct * pxRange;
            diams[i] = pxArea ** 0.5;
          }
        } else {
          diams = Array(len).fill(s.size.fixed);
        }
        return [
          s.x.field.values,
          // X
          s.y.field.values,
          // Y
          diams,
          Array(len).fill(s.color.fixed)
          // TODO: fails for by value
        ];
      })
    ];
  }
  return { builder, prepData };
};
const getGlobalRanges = (xySeries) => {
  const ranges = {
    size: {
      min: Infinity,
      max: -Infinity
    },
    color: {
      min: Infinity,
      max: -Infinity
    }
  };
  xySeries.forEach((series) => {
    [series.size, series.color].forEach((facet, fi) => {
      if (facet.field != null) {
        let range = fi === 0 ? ranges.size : ranges.color;
        const vals = facet.field.values;
        for (let i = 0; i < vals.length; i++) {
          const v = vals[i];
          if (v != null) {
            if (v < range.min) {
              range.min = v;
            }
            if (v > range.max) {
              range.max = v;
            }
          }
        }
      }
    });
  });
  return ranges;
};
function getHex8Color(color, theme) {
  return (0,tinycolor2__WEBPACK_IMPORTED_MODULE_0__["default"])(theme.visualization.getColorByName(color)).toHex8String();
}
function fieldValueColors(f, theme) {
  var _a, _b, _c, _d, _e, _f;
  let index = [];
  let getAll = () => [];
  let getOne = () => -1;
  let conds = "";
  if ((_b = (_a = f.config.mappings) == null ? void 0 : _a.length) != null ? _b : 0 > 0) {
    let mappings = f.config.mappings;
    for (let i = 0; i < mappings.length; i++) {
      let m = mappings[i];
      if (m.type === _grafana_data__WEBPACK_IMPORTED_MODULE_11__.MappingType.ValueToText) {
        for (let k in m.options) {
          let { color } = m.options[k];
          if (color != null) {
            let rhs = f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_12__.FieldType.string ? JSON.stringify(k) : Number(k);
            conds += "v === ".concat(rhs, " ? ").concat(index.length, " : ");
            index.push(getHex8Color(color, theme));
          }
        }
      } else if (m.options.result.color != null) {
        let { color } = m.options.result;
        if (m.type === _grafana_data__WEBPACK_IMPORTED_MODULE_11__.MappingType.RangeToText) {
          let range = [];
          if (m.options.from != null) {
            range.push("v >= ".concat(Number(m.options.from)));
          }
          if (m.options.to != null) {
            range.push("v <= ".concat(Number(m.options.to)));
          }
          if (range.length > 0) {
            conds += "".concat(range.join(" && "), " ? ").concat(index.length, " : ");
            index.push(getHex8Color(color, theme));
          }
        } else if (m.type === _grafana_data__WEBPACK_IMPORTED_MODULE_11__.MappingType.SpecialValue) {
          let spl = m.options.match;
          if (spl === _grafana_data__WEBPACK_IMPORTED_MODULE_11__.SpecialValueMatch.NaN) {
            conds += "isNaN(v)";
          } else if (spl === _grafana_data__WEBPACK_IMPORTED_MODULE_11__.SpecialValueMatch.NullAndNaN) {
            conds += "v == null || isNaN(v)";
          } else {
            conds += "v ".concat(spl === _grafana_data__WEBPACK_IMPORTED_MODULE_11__.SpecialValueMatch.True ? "=== true" : spl === _grafana_data__WEBPACK_IMPORTED_MODULE_11__.SpecialValueMatch.False ? "=== false" : spl === _grafana_data__WEBPACK_IMPORTED_MODULE_11__.SpecialValueMatch.Null ? "== null" : spl === _grafana_data__WEBPACK_IMPORTED_MODULE_11__.SpecialValueMatch.Empty ? '=== ""' : "== null");
          }
          conds += " ? ".concat(index.length, " : ");
          index.push(getHex8Color(color, theme));
        } else if (m.type === _grafana_data__WEBPACK_IMPORTED_MODULE_11__.MappingType.RegexToText) {
        }
      }
    }
    conds += "-1";
  } else if (((_c = f.config.color) == null ? void 0 : _c.mode) === _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.FieldColorModeId.Thresholds) {
    if (((_d = f.config.thresholds) == null ? void 0 : _d.mode) === _grafana_data__WEBPACK_IMPORTED_MODULE_14__.ThresholdsMode.Absolute) {
      let steps = f.config.thresholds.steps;
      let lasti = steps.length - 1;
      for (let i = lasti; i > 0; i--) {
        conds += "v >= ".concat(steps[i].value, " ? ").concat(i, " : ");
      }
      conds += "0";
      index = steps.map((s) => getHex8Color(s.color, theme));
    } else {
    }
  } else if ((_f = (_e = f.config.color) == null ? void 0 : _e.mode) == null ? void 0 : _f.startsWith("continuous")) {
    let calc = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_15__.getFieldColorModeForField)(f).getCalculator(f, theme);
    index = Array(32);
    for (let i = 0; i < index.length; i++) {
      let pct = i / (index.length - 1);
      index[i] = getHex8Color(calc(pct, pct), theme);
    }
    getAll = (vals, min, max) => (0,_heatmap_utils__WEBPACK_IMPORTED_MODULE_3__.valuesToFills)(vals, index, min, max);
  }
  if (conds !== "") {
    getOne = new Function("v", "return ".concat(conds, ";"));
    getAll = new Function(
      "vals",
      "\n      let idxs = Array(vals.length);\n\n      for (let i = 0; i < vals.length; i++) {\n        let v = vals[i];\n        idxs[i] = ".concat(conds, ";\n      }\n\n      return idxs;\n    ")
    );
  }
  return {
    index,
    getOne,
    getAll
  };
}


/***/ }),

/***/ "./public/app/plugins/panel/xychart/v2/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fmt: () => (/* binding */ fmt),
/* harmony export */   getCommonPrefixSuffix: () => (/* binding */ getCommonPrefixSuffix),
/* harmony export */   prepSeries: () => (/* binding */ prepSeries)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/field/fieldState.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/panel/xychart/v2/panelcfg.gen.ts");






function fmt(field, val) {
  if (field.display) {
    return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.formattedValueToString)(field.display(val));
  }
  return "".concat(val);
}
function getFrameMatcher2(config2) {
  if (config2.id === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FrameMatcherID.byIndex) {
    return (frame, index) => index === config2.options;
  }
  return () => false;
}
function prepSeries(mapping, mappedSeries, frames, fieldConfig) {
  (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.cacheFieldDisplayNames)(frames);
  (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.decoupleHideFromState)(frames, fieldConfig);
  let series = [];
  if (mappedSeries.length === 0) {
    mappedSeries = [{}];
  }
  const { palette, getColorByName } = _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.theme2.visualization;
  mappedSeries.forEach((seriesCfg, seriesIdx) => {
    var _a, _b, _c, _d, _e, _f, _g;
    if (mapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__.SeriesMapping.Manual) {
      if (((_a = seriesCfg.frame) == null ? void 0 : _a.matcher) == null || ((_b = seriesCfg.x) == null ? void 0 : _b.matcher) == null || ((_c = seriesCfg.y) == null ? void 0 : _c.matcher) == null) {
        return;
      }
    }
    let xMatcher = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.getFieldMatcher)(
      (_e = (_d = seriesCfg.x) == null ? void 0 : _d.matcher) != null ? _e : {
        id: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldMatcherID.byType,
        options: "number"
      }
    );
    let yMatcher = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.getFieldMatcher)(
      (_g = (_f = seriesCfg.y) == null ? void 0 : _f.matcher) != null ? _g : {
        id: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldMatcherID.byType,
        options: "number"
      }
    );
    let colorMatcher = seriesCfg.color ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.getFieldMatcher)(seriesCfg.color.matcher) : null;
    let sizeMatcher = seriesCfg.size ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.getFieldMatcher)(seriesCfg.size.matcher) : null;
    let frameMatcher = seriesCfg.frame ? getFrameMatcher2(seriesCfg.frame.matcher) : null;
    frames.forEach((frame, frameIdx) => {
      if (frameMatcher != null && !frameMatcher(frame, frameIdx)) {
        return;
      }
      let restFields = [];
      let frameSeries = [];
      let onlyNumFields = frame.fields.filter((field) => field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FieldType.number);
      let x = onlyNumFields.find((field) => xMatcher(field, frame, frames));
      let color = colorMatcher != null ? onlyNumFields.find((field) => field !== x && colorMatcher(field, frame, frames)) : void 0;
      let size = sizeMatcher != null ? onlyNumFields.find((field) => field !== x && field !== color && sizeMatcher(field, frame, frames)) : void 0;
      if (x != null) {
        onlyNumFields.forEach((field) => {
          var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h, _i;
          if (field === x) {
            return;
          }
          if (mapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__.SeriesMapping.Auto && (field === color || field === size)) {
            return;
          }
          if (mapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__.SeriesMapping.Manual && frameSeries.length > 0) {
            return;
          }
          if (yMatcher(field, frame, frames) && !((_b2 = (_a2 = field.config.custom) == null ? void 0 : _a2.hideFrom) == null ? void 0 : _b2.viz)) {
            let y = field;
            let name = (_d2 = (_c2 = seriesCfg.name) == null ? void 0 : _c2.fixed) != null ? _d2 : (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getFieldDisplayName)(y, frame, frames);
            let ser = {
              // these typically come from y field
              name: {
                value: name
              },
              showPoints: y.config.custom.show === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__.XYShowMode.Lines ? _grafana_schema__WEBPACK_IMPORTED_MODULE_7__.VisibilityMode.Never : _grafana_schema__WEBPACK_IMPORTED_MODULE_7__.VisibilityMode.Always,
              pointShape: y.config.custom.pointShape,
              pointStrokeWidth: y.config.custom.pointStrokeWidth,
              fillOpacity: y.config.custom.fillOpacity,
              showLine: y.config.custom.show !== _panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__.XYShowMode.Points,
              lineWidth: (_e2 = y.config.custom.lineWidth) != null ? _e2 : 2,
              lineStyle: y.config.custom.lineStyle,
              x: {
                field: x
              },
              y: {
                field: y
              },
              color: {},
              size: {},
              _rest: restFields
            };
            if (color != null) {
              ser.color.field = color;
            }
            if (size != null) {
              ser.size.field = size;
              ser.size.min = (_g2 = (_f2 = size.config.custom.pointSize) == null ? void 0 : _f2.min) != null ? _g2 : 5;
              ser.size.max = (_i = (_h = size.config.custom.pointSize) == null ? void 0 : _h.max) != null ? _i : 100;
            }
            frameSeries.push(ser);
          }
        });
        if (frameSeries.length === 0) {
        }
        frame.fields.forEach((field) => {
          let isUsedField = frameSeries.some(
            ({ x: x2, y, color: color2, size: size2 }) => x2.field === field || y.field === field || color2.field === field || size2.field === field
          );
          if (!isUsedField) {
            restFields.push(field);
          }
        });
        series.push(...frameSeries);
      } else {
      }
    });
  });
  if (series.length === 0) {
  } else {
    let paletteIdx = 0;
    series.forEach((s, i) => {
      var _a, _b, _c;
      if (s.color.field == null) {
        let colorCfg = (_a = s.y.field.config.color) != null ? _a : { mode: _grafana_data__WEBPACK_IMPORTED_MODULE_8__.FieldColorModeId.PaletteClassic };
        let value = "";
        if (colorCfg.mode === _grafana_data__WEBPACK_IMPORTED_MODULE_8__.FieldColorModeId.PaletteClassic) {
          value = getColorByName(palette[paletteIdx++ % palette.length]);
        } else if (colorCfg.mode === _grafana_data__WEBPACK_IMPORTED_MODULE_8__.FieldColorModeId.Fixed) {
          value = getColorByName(colorCfg.fixedColor);
        }
        s.color.fixed = value;
      }
      if (s.size.field == null) {
        s.size.fixed = (_c = (_b = s.y.field.config.custom.pointSize) == null ? void 0 : _b.fixed) != null ? _c : 5;
      }
    });
    autoNameSeries(series);
  }
  return series;
}
function autoNameSeries(series) {
  let names = series.map((s) => s.name.value.split(/\s+/g));
  const { prefix, suffix } = findCommonPrefixSuffixLengths(names);
  if (prefix < Infinity || suffix < Infinity) {
    series.forEach((s, i) => {
      s.name.value = names[i].slice(prefix, names[i].length - suffix).join(" ");
    });
  }
}
function getCommonPrefixSuffix(strs) {
  let names = strs.map((s) => s.split(/\s+/g));
  let { prefix, suffix } = findCommonPrefixSuffixLengths(names);
  let n = names[0];
  if (n.length === 1 && prefix === 1 && suffix === 1) {
    return "";
  }
  let parts = [];
  if (prefix > 0) {
    parts.push(...n.slice(0, prefix));
  }
  if (suffix > 0) {
    parts.push(...n.slice(-suffix));
  }
  return parts.join(" ");
}
function findCommonPrefixSuffixLengths(names) {
  let commonPrefixLen = Infinity;
  let commonSuffixLen = Infinity;
  let segs0 = names[0];
  for (let i = 1; i < names.length; i++) {
    if (names[i].length < segs0.length) {
      segs0 = names[i];
    }
  }
  for (let i = 1; i < names.length; i++) {
    let segs = names[i];
    if (segs !== segs0) {
      let preLen = 0;
      for (let j = 0; j < segs0.length; j++) {
        if (segs[j] === segs0[j]) {
          preLen++;
        } else {
          break;
        }
      }
      if (preLen < commonPrefixLen) {
        commonPrefixLen = preLen;
      }
      let sufLen = 0;
      for (let j = segs0.length - 1; j >= 0; j--) {
        if (segs[j] === segs0[j]) {
          sufLen++;
        } else {
          break;
        }
      }
      if (sufLen < commonSuffixLen) {
        commonSuffixLen = sufLen;
      }
    }
  }
  return {
    prefix: commonPrefixLen,
    suffix: commonSuffixLen
  };
}


/***/ })

}]);
//# sourceMappingURL=xychart2.fa8aae60ce2e66c6e478.js.map
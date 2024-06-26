"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["heatmapPanel"],{

/***/ "./public/app/core/components/ColorScale/ColorScale.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorScale: () => (/* binding */ ColorScale)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");




const GRADIENT_STOPS = 10;
const ColorScale = ({ colorPalette, min, max, display, hoverValue, useStopsPercentage }) => {
  const [colors, setColors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [scaleHover, setScaleHover] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({ isShown: false, value: 0 });
  const [percent, setPercent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();
  const styles = getStyles(theme, colors);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setColors(getGradientStops({ colorArray: colorPalette, stops: GRADIENT_STOPS, useStopsPercentage }));
  }, [colorPalette, useStopsPercentage]);
  const onScaleMouseMove = (event) => {
    const divOffset = event.nativeEvent.offsetX;
    const offsetWidth = event.currentTarget.offsetWidth;
    const normPercentage = Math.floor(divOffset * 100 / offsetWidth + 1);
    const scaleValue = Math.floor((max - min) * normPercentage / 100 + min);
    setScaleHover({ isShown: true, value: scaleValue });
    setPercent(normPercentage);
  };
  const onScaleMouseLeave = () => {
    setScaleHover({ isShown: false, value: 0 });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setPercent(hoverValue == null ? null : clampPercent100((hoverValue - min) / (max - min)));
  }, [hoverValue, min, max]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.scaleWrapper, onMouseMove: onScaleMouseMove, onMouseLeave: onScaleMouseLeave }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.scaleGradient }, display && (scaleHover.isShown || hoverValue !== void 0) && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.followerContainer }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.follower, style: { left: "".concat(percent, "%") } }))), display && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.followerContainer }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.legendValues }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: styles.disabled }, display(min)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: styles.disabled }, display(max))), percent != null && (scaleHover.isShown || hoverValue !== void 0) && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: styles.hoverValue, style: { left: "".concat(percent, "%") } }, display(hoverValue != null ? hoverValue : scaleHover.value))));
};
const getGradientStops = ({
  colorArray,
  stops,
  useStopsPercentage = true
}) => {
  const colorCount = colorArray.length;
  if (useStopsPercentage && colorCount <= 20) {
    const incr = 1 / colorCount * 100;
    let per = 0;
    const stops2 = [];
    for (const color of colorArray) {
      if (per > 0) {
        stops2.push("".concat(color, " ").concat(per, "%"));
      } else {
        stops2.push(color);
      }
      per += incr;
      stops2.push("".concat(color, " ").concat(per, "%"));
    }
    return stops2;
  }
  const gradientEnd = colorArray[colorCount - 1];
  const skip = Math.ceil(colorCount / stops);
  const gradientStops = /* @__PURE__ */ new Set();
  for (let i = 0; i < colorCount; i += skip) {
    gradientStops.add(colorArray[i]);
  }
  gradientStops.add(gradientEnd);
  return [...gradientStops];
};
function clampPercent100(v) {
  if (v > 1) {
    return 100;
  }
  if (v < 0) {
    return 0;
  }
  return v * 100;
}
const getStyles = (theme, colors) => ({
  scaleWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    width: "100%",
    fontSize: "11px",
    opacity: 1
  }),
  scaleGradient: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    background: "linear-gradient(90deg, ".concat(colors.join(), ")"),
    height: "9px",
    pointerEvents: "none",
    borderRadius: theme.shape.radius.default
  }),
  legendValues: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    display: "flex",
    justifyContent: "space-between",
    pointerEvents: "none"
  }),
  hoverValue: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    position: "absolute",
    marginTop: "-14px",
    padding: "3px 15px",
    transform: "translateX(-50%)"
  }),
  followerContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    position: "relative",
    pointerEvents: "none",
    whiteSpace: "nowrap"
  }),
  follower: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    position: "absolute",
    height: "13px",
    width: "13px",
    borderRadius: theme.shape.radius.default,
    transform: "translateX(-50%) translateY(-50%)",
    border: "2px solid ".concat(theme.colors.text.primary),
    top: "5px"
  }),
  disabled: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    color: theme.colors.text.disabled
  })
});


/***/ }),

/***/ "./public/app/features/transformers/calculateHeatmap/editor/AxisEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AxisEditor: () => (/* binding */ AxisEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/dataLink.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Layout.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _suggestionsInput_SuggestionsInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/transformers/suggestionsInput/SuggestionsInput.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/transformers/utils.ts");








const modeOptions = [
  {
    label: "Size",
    value: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.HeatmapCalculationMode.Size,
    description: "Split the buckets based on size"
  },
  {
    label: "Count",
    value: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.HeatmapCalculationMode.Count,
    description: "Split the buckets based on count"
  }
];
const logModeOptions = [
  {
    label: "Split",
    value: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.HeatmapCalculationMode.Size,
    description: "Split the buckets based on size"
  }
];
const AxisEditor = ({ value, onChange, item }) => {
  var _a, _b, _c;
  const [isInvalid, setInvalid] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const onValueChange = (bucketValue) => {
    setInvalid(!(0,_utils__WEBPACK_IMPORTED_MODULE_2__.numberOrVariableValidator)(bucketValue));
    onChange({
      ...value,
      value: bucketValue
    });
  };
  const templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getTemplateSrv)();
  const variables = templateSrv.getVariables().map((v) => {
    return { value: v.name, label: v.label || v.name, origin: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.VariableOrigin.Template };
  });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.HorizontalGroup, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.RadioButtonGroup,
    {
      value: (value == null ? void 0 : value.mode) || _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.HeatmapCalculationMode.Size,
      options: ((_a = value == null ? void 0 : value.scale) == null ? void 0 : _a.type) === _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.ScaleDistribution.Log ? logModeOptions : modeOptions,
      onChange: (mode) => {
        onChange({
          ...value,
          mode
        });
      }
    }
  ), _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.config.featureToggles.transformationsVariableSupport ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _suggestionsInput_SuggestionsInput__WEBPACK_IMPORTED_MODULE_1__.SuggestionsInput,
    {
      invalid: isInvalid,
      error: "Value needs to be an integer or a variable",
      value: (_b = value == null ? void 0 : value.value) != null ? _b : "",
      placeholder: "Auto",
      onChange: onValueChange,
      suggestions: variables
    }
  ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
    {
      value: (_c = value == null ? void 0 : value.value) != null ? _c : "",
      placeholder: "Auto",
      onChange: (v) => {
        onChange({
          ...value,
          value: v.currentTarget.value
        });
      }
    }
  ));
};


/***/ }),

/***/ "./public/app/features/transformers/calculateHeatmap/editor/helper.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addHeatmapCalculationOptions: () => (/* binding */ addHeatmapCalculationOptions)
/* harmony export */ });
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui_src_options_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/options/builder/axis.tsx");
/* harmony import */ var _AxisEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/transformers/calculateHeatmap/editor/AxisEditor.tsx");




function addHeatmapCalculationOptions(prefix, builder, source, category) {
  builder.addCustomEditor({
    id: "xBuckets",
    path: "".concat(prefix, "xBuckets"),
    name: "X Bucket",
    editor: _AxisEditor__WEBPACK_IMPORTED_MODULE_0__.AxisEditor,
    category,
    defaultValue: {
      mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.HeatmapCalculationMode.Size
    }
  });
  builder.addCustomEditor({
    id: "yBuckets",
    path: "".concat(prefix, "yBuckets"),
    name: "Y Bucket",
    editor: _AxisEditor__WEBPACK_IMPORTED_MODULE_0__.AxisEditor,
    category,
    defaultValue: {
      mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.HeatmapCalculationMode.Size
    }
  });
  builder.addCustomEditor({
    id: "yBuckets-scale",
    path: "".concat(prefix, "yBuckets.scale"),
    name: "Y Bucket scale",
    category,
    editor: _grafana_ui_src_options_builder__WEBPACK_IMPORTED_MODULE_2__.ScaleDistributionEditor,
    defaultValue: { type: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.ScaleDistribution.Linear }
  });
}


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

/***/ "./public/app/features/transformers/suggestionsInput/SuggestionsInput.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuggestionsInput: () => (/* binding */ SuggestionsInput)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _floating_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs");
/* harmony import */ var _floating_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@floating-ui/react/dist/floating-ui.react.mjs");
/* harmony import */ var _floating_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Portal/Portal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/CustomScrollbar/CustomScrollbar.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldValidationMessage.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui_src_components_DataLinks_DataLinkSuggestions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/DataLinks/DataLinkSuggestions.tsx");






const modulo = (a, n) => a - n * Math.floor(a / n);
const ERROR_TOOLTIP_OFFSET = 8;
const getStyles = (theme, inputHeight) => {
  return {
    suggestionsWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      boxShadow: theme.shadows.z2
    }),
    errorTooltip: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      position: "absolute",
      top: inputHeight + ERROR_TOOLTIP_OFFSET + "px",
      zIndex: theme.zIndex.tooltip
    }),
    inputWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      position: "relative"
    })
    // Wrapper with child selector needed.
    // When classnames are applied to the same element as the wrapper, it causes the suggestions to stop working
  };
};
const SuggestionsInput = ({
  value = "",
  onChange,
  suggestions,
  placeholder,
  error,
  invalid
}) => {
  const [showingSuggestions, setShowingSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [suggestionsIndex, setSuggestionsIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const [variableValue, setVariableValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value.toString());
  const [scrollTop, setScrollTop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const [inputHeight, setInputHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const [startPos, setStartPos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();
  const styles = getStyles(theme, inputHeight);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const middleware = [
    (0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_3__.flip)({
      fallbackAxisSideDirection: "start",
      // see https://floating-ui.com/docs/flip#combining-with-shift
      crossAxis: false,
      boundary: document.body
    }),
    (0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_3__.shift)()
  ];
  const { refs, floatingStyles } = (0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_4__.useFloating)({
    open: showingSuggestions,
    placement: "bottom-start",
    onOpenChange: setShowingSuggestions,
    middleware,
    whileElementsMounted: _floating_ui_react__WEBPACK_IMPORTED_MODULE_5__.autoUpdate,
    strategy: "fixed"
  });
  const handleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (ref) => {
      refs.setReference(ref);
      inputRef.current = ref;
    },
    [refs]
  );
  const activeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setScrollTop(getElementPosition(activeRef.current, suggestionsIndex));
  }, [suggestionsIndex]);
  const onVariableSelect = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(
    (item, input = inputRef.current) => {
      const curPos = input.selectionStart;
      const x = input.value;
      if (x[startPos - 1] === "$") {
        input.value = x.slice(0, startPos) + item.value + x.slice(curPos);
      } else {
        input.value = x.slice(0, startPos) + "$" + item.value + x.slice(curPos);
      }
      setVariableValue(input.value);
      setShowingSuggestions(false);
      setSuggestionsIndex(0);
      onChange(input.value);
    },
    [onChange, startPos]
  );
  const onKeyDown = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(
    (event) => {
      if (!showingSuggestions) {
        if (event.key === "$" || event.key === " " && event.ctrlKey) {
          setStartPos(inputRef.current.selectionStart || 0);
          setShowingSuggestions(true);
          return;
        }
        return;
      }
      switch (event.key) {
        case "Backspace":
        case "Escape":
        case "ArrowLeft":
        case "ArrowRight":
          setShowingSuggestions(false);
          return setSuggestionsIndex(0);
        case "Enter":
          event.preventDefault();
          return onVariableSelect(suggestions[suggestionsIndex]);
        case "ArrowDown":
        case "ArrowUp":
          event.preventDefault();
          const direction = event.key === "ArrowDown" ? 1 : -1;
          return setSuggestionsIndex((index) => modulo(index + direction, suggestions.length));
        default:
          return;
      }
    },
    [showingSuggestions, suggestions, suggestionsIndex, onVariableSelect]
  );
  const onValueChanged = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback((event) => {
    setVariableValue(event.currentTarget.value);
  }, []);
  const onBlur = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(
    (event) => {
      onChange(event.currentTarget.value);
    },
    [onChange]
  );
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setInputHeight(inputRef.current.clientHeight);
  }, []);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.inputWrapper }, showingSuggestions && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Portal, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { ref: refs.setFloating, style: floatingStyles, className: styles.suggestionsWrapper }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.CustomScrollbar,
    {
      scrollTop,
      autoHeightMax: "300px",
      setScrollTop: ({ scrollTop: scrollTop2 }) => setScrollTop(scrollTop2)
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_ui_src_components_DataLinks_DataLinkSuggestions__WEBPACK_IMPORTED_MODULE_8__.DataLinkSuggestions,
      {
        activeRef,
        suggestions,
        onSuggestionSelect: onVariableSelect,
        onClose: () => setShowingSuggestions(false),
        activeIndex: suggestionsIndex
      }
    )
  ))), invalid && error && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.errorTooltip }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.FieldValidationMessage, null, error)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Input,
    {
      placeholder,
      invalid,
      ref: handleRef,
      value: variableValue,
      onChange: onValueChanged,
      onBlur,
      onKeyDown
    }
  ));
};
SuggestionsInput.displayName = "SuggestionsInput";
function getElementPosition(suggestionElement, activeIndex) {
  var _a;
  return ((_a = suggestionElement == null ? void 0 : suggestionElement.clientHeight) != null ? _a : 0) * activeIndex;
}


/***/ }),

/***/ "./public/app/plugins/panel/heatmap/HeatmapPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeatmapPanel: () => (/* binding */ HeatmapPanel)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-data/src/types/dashboard.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-runtime/src/components/PanelDataErrorView.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/PanelChrome/PanelContext.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/VizLayout/VizLayout.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/Plot.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/plugins/EventBusPlugin.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/plugins/TooltipPlugin2.tsx");
/* harmony import */ var _core_components_ColorScale_ColorScale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/ColorScale/ColorScale.tsx");
/* harmony import */ var _features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/transformers/calculateHeatmap/heatmap.ts");
/* harmony import */ var _timeseries_plugins_AnnotationsPlugin2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/timeseries/plugins/AnnotationsPlugin2.tsx");
/* harmony import */ var _timeseries_plugins_OutsideRangePlugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/timeseries/plugins/OutsideRangePlugin.tsx");
/* harmony import */ var _HeatmapTooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/panel/heatmap/HeatmapTooltip.tsx");
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/panel/heatmap/fields.ts");
/* harmony import */ var _palettes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/panel/heatmap/palettes.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/panel/heatmap/utils.ts");















const HeatmapPanel = ({
  data,
  id,
  timeRange,
  timeZone,
  width,
  height,
  options,
  fieldConfig,
  eventBus,
  onChangeTimeRange,
  replaceVariables
}) => {
  var _a;
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.useTheme2)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.useStyles2)(getStyles);
  const { sync, eventsScope, canAddAnnotations, onSelectRange } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.usePanelContext)();
  const cursorSync = (_a = sync == null ? void 0 : sync()) != null ? _a : _grafana_data__WEBPACK_IMPORTED_MODULE_12__.DashboardCursorSync.Off;
  const [newAnnotationRange, setNewAnnotationRange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  let timeRangeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(timeRange);
  timeRangeRef.current = timeRange;
  const palette = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_palettes__WEBPACK_IMPORTED_MODULE_8__.quantizeScheme)(options.color, theme), [options.color, theme]);
  const info = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    try {
      return (0,_fields__WEBPACK_IMPORTED_MODULE_7__.prepareHeatmapData)(data.series, data.annotations, options, palette, theme, replaceVariables);
    } catch (ex) {
      return { warning: "".concat(ex) };
    }
  }, [data.series, data.annotations, options, palette, theme, replaceVariables]);
  const facets = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _a2, _b, _c, _d, _e, _f;
    let exemplarsXFacet = [];
    let exemplarsYFacet = [];
    const meta = (0,_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_3__.readHeatmapRowsCustomMeta)(info.heatmap);
    if ((_a2 = info.exemplars) == null ? void 0 : _a2.length) {
      exemplarsXFacet = (_b = info.exemplars) == null ? void 0 : _b.fields[0].values;
      if (meta.yMatchWithLabel) {
        const hasLabeledY = meta.yOrdinalDisplay != null;
        if (hasLabeledY) {
          let matchExemplarsBy = (_c = info.exemplars) == null ? void 0 : _c.fields.find((field) => field.name === meta.yMatchWithLabel).values;
          exemplarsYFacet = matchExemplarsBy.map((label) => {
            var _a3;
            return (_a3 = meta.yOrdinalLabel) == null ? void 0 : _a3.indexOf(label);
          });
        } else {
          exemplarsYFacet = (_d = info.exemplars) == null ? void 0 : _d.fields[1].values;
        }
      } else {
        exemplarsYFacet = (_e = info.exemplars) == null ? void 0 : _e.fields[1].values;
      }
    }
    return [null, (_f = info.heatmap) == null ? void 0 : _f.fields.map((f) => f.values), [exemplarsXFacet, exemplarsYFacet]];
  }, [info.heatmap, info.exemplars]);
  const dataRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(info);
  dataRef.current = info;
  const builder = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const scaleConfig = (_d = (_c = (_b = (_a2 = dataRef.current) == null ? void 0 : _a2.heatmap) == null ? void 0 : _b.fields[1].config) == null ? void 0 : _c.custom) == null ? void 0 : _d.scaleDistribution;
    return (0,_utils__WEBPACK_IMPORTED_MODULE_9__.prepConfig)({
      dataRef,
      theme,
      timeZone,
      getTimeRange: () => timeRangeRef.current,
      cellGap: options.cellGap,
      hideLE: (_e = options.filterValues) == null ? void 0 : _e.le,
      hideGE: (_f = options.filterValues) == null ? void 0 : _f.ge,
      exemplarColor: (_h = (_g = options.exemplars) == null ? void 0 : _g.color) != null ? _h : "rgba(255,0,255,0.7)",
      yAxisConfig: options.yAxis,
      ySizeDivisor: (scaleConfig == null ? void 0 : scaleConfig.type) === _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.ScaleDistribution.Log ? +(((_j = (_i = options.calculation) == null ? void 0 : _i.yBuckets) == null ? void 0 : _j.value) || 1) : 1,
      selectionMode: options.selectionMode
    });
  }, [options, timeZone, data.structureRev, cursorSync]);
  const renderLegend = () => {
    var _a2, _b;
    if (!info.heatmap || !options.legend.show) {
      return null;
    }
    let hoverValue = void 0;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.VizLayout.Legend, { placement: "bottom", maxHeight: "20%" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.colorScaleWrapper }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _core_components_ColorScale_ColorScale__WEBPACK_IMPORTED_MODULE_2__.ColorScale,
      {
        hoverValue,
        colorPalette: palette,
        min: (_a2 = dataRef.current.heatmapColors) == null ? void 0 : _a2.minValue,
        max: (_b = dataRef.current.heatmapColors) == null ? void 0 : _b.maxValue,
        display: info.display
      }
    )));
  };
  if (info.warning || !info.heatmap) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_15__.PanelDataErrorView,
      {
        panelId: id,
        fieldConfig,
        data,
        needsNumberField: true,
        message: info.warning
      }
    );
  }
  const enableAnnotationCreation = Boolean(canAddAnnotations && canAddAnnotations());
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.VizLayout, { width, height, legend: renderLegend() }, (vizWidth, vizHeight) => {
    var _a2, _b;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.UPlotChart, { key: builder.uid, config: builder, data: facets, width: vizWidth, height: vizHeight }, cursorSync !== _grafana_data__WEBPACK_IMPORTED_MODULE_12__.DashboardCursorSync.Off && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.EventBusPlugin, { config: builder, eventBus, frame: (_a2 = info.series) != null ? _a2 : info.heatmap }), options.tooltip.mode !== _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.TooltipDisplayMode.None && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_18__.TooltipPlugin2,
      {
        config: builder,
        hoverMode: options.tooltip.mode === _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.TooltipDisplayMode.Single ? _grafana_ui__WEBPACK_IMPORTED_MODULE_18__.TooltipHoverMode.xOne : _grafana_ui__WEBPACK_IMPORTED_MODULE_18__.TooltipHoverMode.xAll,
        queryZoom: onChangeTimeRange,
        onSelectRange,
        syncMode: cursorSync,
        syncScope: eventsScope,
        render: (u, dataIdxs, seriesIdx, isPinned, dismiss, timeRange2, viaSync) => {
          if (enableAnnotationCreation && timeRange2 != null) {
            setNewAnnotationRange(timeRange2);
            dismiss();
            return;
          }
          const annotate = () => {
            let xVal = u.posToVal(u.cursor.left, "x");
            setNewAnnotationRange({ from: xVal, to: xVal });
            dismiss();
          };
          return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            _HeatmapTooltip__WEBPACK_IMPORTED_MODULE_6__.HeatmapTooltip,
            {
              mode: viaSync ? _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.TooltipDisplayMode.Multi : options.tooltip.mode,
              dataIdxs,
              seriesIdx,
              dataRef,
              isPinned,
              dismiss,
              showHistogram: options.tooltip.yHistogram,
              showColorScale: options.tooltip.showColorScale,
              panelData: data,
              annotate: enableAnnotationCreation ? annotate : void 0,
              maxHeight: options.tooltip.maxHeight,
              maxWidth: options.tooltip.maxWidth
            }
          );
        },
        maxWidth: options.tooltip.maxWidth
      }
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _timeseries_plugins_AnnotationsPlugin2__WEBPACK_IMPORTED_MODULE_4__.AnnotationsPlugin2,
      {
        annotations: (_b = data.annotations) != null ? _b : [],
        config: builder,
        timeZone,
        newRange: newAnnotationRange,
        setNewRange: setNewAnnotationRange,
        canvasRegionRendering: false
      }
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_timeseries_plugins_OutsideRangePlugin__WEBPACK_IMPORTED_MODULE_5__.OutsideRangePlugin, { config: builder, onChangeTimeRange }));
  }));
};
const getStyles = () => ({
  colorScaleWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    marginLeft: "25px",
    padding: "10px 0",
    maxWidth: "300px"
  })
});


/***/ }),

/***/ "./public/app/plugins/panel/heatmap/HeatmapTooltip.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeatmapTooltip: () => (/* binding */ HeatmapTooltip)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uplot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/uplot/dist/uPlot.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-data/src/types/dataFrameTypes.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-data/src/field/fieldState.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_src_components_VizTooltip_VizTooltipContent__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipContent.tsx");
/* harmony import */ var _grafana_ui_src_components_VizTooltip_VizTooltipFooter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipFooter.tsx");
/* harmony import */ var _grafana_ui_src_components_VizTooltip_VizTooltipHeader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipHeader.tsx");
/* harmony import */ var _grafana_ui_src_components_VizTooltip_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/types.ts");
/* harmony import */ var _core_components_ColorScale_ColorScale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/ColorScale/ColorScale.tsx");
/* harmony import */ var _features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
/* harmony import */ var _features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/transformers/calculateHeatmap/heatmap.ts");
/* harmony import */ var _features_visualization_data_hover_DataHoverView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/visualization/data-hover/DataHoverView.tsx");
/* harmony import */ var _status_history_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/panel/status-history/utils.ts");
/* harmony import */ var _timeseries_TimeSeriesTooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/panel/timeseries/TimeSeriesTooltip.tsx");
/* harmony import */ var _timeseries_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/panel/timeseries/utils.ts");
/* harmony import */ var _renderHistogram__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/panel/heatmap/renderHistogram.tsx");
/* harmony import */ var _tooltip_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/panel/heatmap/tooltip/utils.ts");



















const HeatmapTooltip = (props) => {
  if (props.seriesIdx === 2) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _features_visualization_data_hover_DataHoverView__WEBPACK_IMPORTED_MODULE_5__.DataHoverView,
      {
        data: props.dataRef.current.exemplars,
        rowIndex: props.dataIdxs[2],
        header: "Exemplar",
        padding: 8
      }
    );
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeatmapHoverCell, { ...props });
};
const defaultHistogramWidth = 264;
const defaultHistogramHeight = 64;
const HeatmapHoverCell = ({
  dataIdxs,
  dataRef,
  showHistogram,
  isPinned,
  showColorScale = false,
  mode,
  annotate,
  maxHeight,
  maxWidth
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const index = dataIdxs[1];
  const data = dataRef.current;
  const [isSparse] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(
    () => {
      var _a2, _b2;
      return ((_b2 = (_a2 = data.heatmap) == null ? void 0 : _a2.meta) == null ? void 0 : _b2.type) === _grafana_data__WEBPACK_IMPORTED_MODULE_11__.DataFrameType.HeatmapCells && !(0,_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_4__.isHeatmapCellsDense)(data.heatmap);
    }
  );
  const xField = (0,_tooltip_utils__WEBPACK_IMPORTED_MODULE_10__.getFieldFromData)(data.heatmap, "x", isSparse);
  const yField = (0,_tooltip_utils__WEBPACK_IMPORTED_MODULE_10__.getFieldFromData)(data.heatmap, "y", isSparse);
  const countField = (0,_tooltip_utils__WEBPACK_IMPORTED_MODULE_10__.getFieldFromData)(data.heatmap, "count", isSparse);
  const xDisp = (v) => {
    if (xField == null ? void 0 : xField.display) {
      return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_12__.formattedValueToString)(xField.display(v));
    }
    if ((xField == null ? void 0 : xField.type) === _grafana_data__WEBPACK_IMPORTED_MODULE_13__.FieldType.time) {
      const tooltipTimeFormat = "YYYY-MM-DD HH:mm:ss";
      const dashboard = (0,_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_3__.getDashboardSrv)().getCurrent();
      return dashboard == null ? void 0 : dashboard.formatDate(v, tooltipTimeFormat);
    }
    return "".concat(v);
  };
  const xVals = xField.values;
  const yVals = yField.values;
  const countVals = countField.values;
  const meta = (0,_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_4__.readHeatmapRowsCustomMeta)(data.heatmap);
  const yDisp = (yField == null ? void 0 : yField.display) ? (v) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_12__.formattedValueToString)(yField.display(v)) : (v) => "".concat(v);
  let interval = xField == null ? void 0 : xField.config.interval;
  let yBucketMin;
  let yBucketMax;
  let xBucketMin;
  let xBucketMax;
  let nonNumericOrdinalDisplay = void 0;
  let contentItems = [];
  const getYValueIndex = (idx) => {
    var _a2;
    return idx % ((_a2 = data.yBucketCount) != null ? _a2 : 1);
  };
  let yValueIdx = getYValueIndex(index);
  const xValueIdx = Math.floor(index / ((_a = data.yBucketCount) != null ? _a : 1));
  const getData = (idx = index) => {
    if (meta.yOrdinalDisplay) {
      const yMinIdx = data.yLayout === _grafana_schema__WEBPACK_IMPORTED_MODULE_14__.HeatmapCellLayout.le ? yValueIdx - 1 : yValueIdx;
      const yMaxIdx = data.yLayout === _grafana_schema__WEBPACK_IMPORTED_MODULE_14__.HeatmapCellLayout.le ? yValueIdx : yValueIdx + 1;
      yBucketMin = yMinIdx < 0 ? meta.yMinDisplay : "".concat(meta.yOrdinalDisplay[yMinIdx]);
      yBucketMax = "".concat(meta.yOrdinalDisplay[yMaxIdx]);
      if (!meta.yOrdinalLabel || Number.isNaN(+meta.yOrdinalLabel[0])) {
        nonNumericOrdinalDisplay = data.yLayout === _grafana_schema__WEBPACK_IMPORTED_MODULE_14__.HeatmapCellLayout.le ? yBucketMax : yBucketMin;
      }
    } else {
      const value = yVals == null ? void 0 : yVals[yValueIdx];
      if (data.yLayout === _grafana_schema__WEBPACK_IMPORTED_MODULE_14__.HeatmapCellLayout.le) {
        yBucketMax = "".concat(value);
        if (data.yLog) {
          let logFn = data.yLog === 2 ? Math.log2 : Math.log10;
          let exp = logFn(value) - 1 / data.yLogSplit;
          yBucketMin = "".concat(data.yLog ** exp);
        } else {
          yBucketMin = "".concat(value - data.yBucketSize);
        }
      } else {
        yBucketMin = "".concat(value);
        if (data.yLog) {
          let logFn = data.yLog === 2 ? Math.log2 : Math.log10;
          let exp = logFn(value) + 1 / data.yLogSplit;
          yBucketMax = "".concat(data.yLog ** exp);
        } else {
          yBucketMax = "".concat(value + data.yBucketSize);
        }
      }
    }
    if (data.xLayout === _grafana_schema__WEBPACK_IMPORTED_MODULE_14__.HeatmapCellLayout.le) {
      xBucketMax = xVals[idx];
      xBucketMin = xBucketMax - data.xBucketSize;
    } else {
      xBucketMin = xVals[idx];
      xBucketMax = xBucketMin + data.xBucketSize;
    }
  };
  if (isSparse) {
    ({ xBucketMin, xBucketMax, yBucketMin, yBucketMax } = (0,_tooltip_utils__WEBPACK_IMPORTED_MODULE_10__.getSparseCellMinMax)(data, index));
  } else {
    getData();
  }
  const { cellColor, colorPalette } = (0,_tooltip_utils__WEBPACK_IMPORTED_MODULE_10__.getHoverCellColor)(data, index);
  const getDisplayData = (fromIdx, toIdx) => {
    let vals = [];
    for (let idx = fromIdx; idx <= toIdx; idx++) {
      if (!(countVals == null ? void 0 : countVals[idx])) {
        continue;
      }
      const color = (0,_tooltip_utils__WEBPACK_IMPORTED_MODULE_10__.getHoverCellColor)(data, idx).cellColor;
      count = getCountValue(idx);
      if (isSparse) {
        ({ xBucketMin, xBucketMax, yBucketMin, yBucketMax } = (0,_tooltip_utils__WEBPACK_IMPORTED_MODULE_10__.getSparseCellMinMax)(data, idx));
      } else {
        yValueIdx = getYValueIndex(idx);
        getData(idx);
      }
      const { label, value } = getContentLabels()[0];
      vals.push({
        label,
        value,
        color: color != null ? color : "#FFF",
        isActive: index === idx
      });
    }
    return vals;
  };
  const getContentLabels = () => {
    const isMulti = mode === _grafana_schema__WEBPACK_IMPORTED_MODULE_14__.TooltipDisplayMode.Multi && !isPinned;
    if (nonNumericOrdinalDisplay) {
      return isMulti ? [{ label: "Name ".concat(nonNumericOrdinalDisplay), value: data.display(count) }] : [{ label: "Name", value: nonNumericOrdinalDisplay }];
    }
    switch (data.yLayout) {
      case _grafana_schema__WEBPACK_IMPORTED_MODULE_14__.HeatmapCellLayout.unknown:
        return isMulti ? [{ label: yDisp(yBucketMin), value: data.display(count) }] : [{ label: "", value: yDisp(yBucketMin) }];
    }
    return isMulti ? [
      {
        label: "Bucket ".concat(yDisp(yBucketMin)) + "-" + "".concat(yDisp(yBucketMax)),
        value: data.display(count)
      }
    ] : [
      {
        label: "Bucket",
        value: "".concat(yDisp(yBucketMin)) + "-" + "".concat(yDisp(yBucketMax))
      }
    ];
  };
  const getCountValue = (idx) => {
    return countVals == null ? void 0 : countVals[idx];
  };
  let count = getCountValue(index);
  if (mode === _grafana_schema__WEBPACK_IMPORTED_MODULE_14__.TooltipDisplayMode.Single || isPinned) {
    const fromToInt = interval ? [{ label: "Duration", value: (0,_tooltip_utils__WEBPACK_IMPORTED_MODULE_10__.formatMilliseconds)(interval) }] : [];
    contentItems = [
      {
        label: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_15__.getFieldDisplayName)(countField, data.heatmap),
        value: data.display(count),
        color: cellColor != null ? cellColor : "#FFF",
        colorPlacement: _grafana_ui_src_components_VizTooltip_types__WEBPACK_IMPORTED_MODULE_16__.ColorPlacement.trailing,
        colorIndicator: _grafana_ui_src_components_VizTooltip_types__WEBPACK_IMPORTED_MODULE_16__.ColorIndicator.value
      },
      ...getContentLabels(),
      ...fromToInt
    ];
  }
  if (mode === _grafana_schema__WEBPACK_IMPORTED_MODULE_14__.TooltipDisplayMode.Multi && !isPinned) {
    let xVal = xField.values[index];
    let fromIdx = index;
    let toIdx = index;
    while (xField.values[fromIdx - 1] === xVal) {
      fromIdx--;
    }
    while (xField.values[toIdx + 1] === xVal) {
      toIdx++;
    }
    const vals = getDisplayData(fromIdx, toIdx);
    vals.forEach((val) => {
      var _a2;
      contentItems.push({
        label: val.label,
        value: val.value,
        color: (_a2 = val.color) != null ? _a2 : "#FFF",
        colorIndicator: _grafana_ui_src_components_VizTooltip_types__WEBPACK_IMPORTED_MODULE_16__.ColorIndicator.value,
        colorPlacement: _grafana_ui_src_components_VizTooltip_types__WEBPACK_IMPORTED_MODULE_16__.ColorPlacement.trailing,
        isActive: val.isActive
      });
    });
  }
  let footer;
  if (isPinned) {
    let links = [];
    const linksField = (_b = data.series) == null ? void 0 : _b.fields[yValueIdx + 1];
    if (linksField != null) {
      const visible = !Boolean((_d = (_c = linksField.config.custom) == null ? void 0 : _c.hideFrom) == null ? void 0 : _d.tooltip);
      const hasLinks = ((_f = (_e = linksField.config.links) == null ? void 0 : _e.length) != null ? _f : 0) > 0;
      if (visible && hasLinks) {
        links = (0,_status_history_utils__WEBPACK_IMPORTED_MODULE_6__.getDataLinks)(linksField, xValueIdx);
      }
    }
    footer = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui_src_components_VizTooltip_VizTooltipFooter__WEBPACK_IMPORTED_MODULE_17__.VizTooltipFooter, { dataLinks: links, annotate });
  }
  let can = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.useTheme2)();
  const themeSpacing = parseInt(theme.spacing(1), 10);
  let histCssWidth = Math.min(defaultHistogramWidth, maxWidth ? maxWidth - themeSpacing * 2 : defaultHistogramWidth);
  let histCssHeight = defaultHistogramHeight;
  let histCanWidth = Math.round(histCssWidth * uplot__WEBPACK_IMPORTED_MODULE_1__["default"].pxRatio);
  let histCanHeight = Math.round(histCssHeight * uplot__WEBPACK_IMPORTED_MODULE_1__["default"].pxRatio);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
    () => {
      if (showHistogram && xVals != null && countVals != null && mode === _grafana_schema__WEBPACK_IMPORTED_MODULE_14__.TooltipDisplayMode.Single) {
        (0,_renderHistogram__WEBPACK_IMPORTED_MODULE_9__.renderHistogram)(can, histCanWidth, histCanHeight, xVals, countVals, index, data.yBucketCount);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [index]
  );
  const headerItem = {
    label: "",
    value: xDisp(xBucketMax)
  };
  let customContent = [];
  if (mode === _grafana_schema__WEBPACK_IMPORTED_MODULE_14__.TooltipDisplayMode.Single) {
    if (showHistogram && !isSparse) {
      customContent.push(
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          "canvas",
          {
            width: histCanWidth,
            height: histCanHeight,
            ref: can,
            style: { width: histCssWidth + "px", height: histCssHeight + "px" }
          }
        )
      );
    }
    if (colorPalette && showColorScale) {
      customContent.push(
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          _core_components_ColorScale_ColorScale__WEBPACK_IMPORTED_MODULE_2__.ColorScale,
          {
            colorPalette,
            min: (_g = data.heatmapColors) == null ? void 0 : _g.minValue,
            max: (_h = data.heatmapColors) == null ? void 0 : _h.maxValue,
            display: data.display,
            hoverValue: count
          }
        )
      );
    }
  }
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.useStyles2)(_timeseries_TimeSeriesTooltip__WEBPACK_IMPORTED_MODULE_7__.getStyles);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.wrapper }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui_src_components_VizTooltip_VizTooltipHeader__WEBPACK_IMPORTED_MODULE_19__.VizTooltipHeader, { item: headerItem, isPinned }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui_src_components_VizTooltip_VizTooltipContent__WEBPACK_IMPORTED_MODULE_20__.VizTooltipContent,
    {
      items: contentItems,
      isPinned,
      scrollable: (0,_timeseries_utils__WEBPACK_IMPORTED_MODULE_8__.isTooltipScrollable)({ mode, maxHeight }),
      maxHeight
    },
    customContent == null ? void 0 : customContent.map((content, i) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: i, style: { padding: "".concat(theme.spacing(1), " 0") } }, content))
  ), footer);
};


/***/ }),

/***/ "./public/app/plugins/panel/heatmap/fields.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prepareHeatmapData: () => (/* binding */ prepareHeatmapData)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/field/fieldState.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/field/fieldOverrides.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/dataFrameTypes.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/joinDataFrames.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-data/src/field/displayProcessor.ts");
/* harmony import */ var _grafana_prometheus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-prometheus/src/result_transformer.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/transformers/calculateHeatmap/heatmap.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/heatmap/utils.ts");







function prepareHeatmapData(frames, annotations, options, palette, theme, replaceVariables = (v) => v) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  if (!(frames == null ? void 0 : frames.length)) {
    return {};
  }
  (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.cacheFieldDisplayNames)(frames);
  const exemplars = annotations == null ? void 0 : annotations.find((f) => f.name === "exemplar");
  exemplars == null ? void 0 : exemplars.fields.forEach((field) => {
    var _a2, _b2;
    field.getLinks = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getLinksSupplier)(exemplars, field, (_b2 = (_a2 = field.state) == null ? void 0 : _a2.scopedVars) != null ? _b2 : {}, replaceVariables);
  });
  if (options.calculate) {
    if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.featureToggles.transformationsVariableSupport) {
      const optionsCopy = {
        ...options,
        calculation: {
          xBuckets: { ...(_a = options.calculation) == null ? void 0 : _a.xBuckets },
          yBuckets: { ...(_b = options.calculation) == null ? void 0 : _b.yBuckets }
        }
      };
      if (((_d = (_c = optionsCopy.calculation) == null ? void 0 : _c.xBuckets) == null ? void 0 : _d.value) && replaceVariables !== void 0) {
        optionsCopy.calculation.xBuckets.value = replaceVariables(optionsCopy.calculation.xBuckets.value);
      }
      if (((_f = (_e = optionsCopy.calculation) == null ? void 0 : _e.yBuckets) == null ? void 0 : _f.value) && replaceVariables !== void 0) {
        optionsCopy.calculation.yBuckets.value = replaceVariables(optionsCopy.calculation.yBuckets.value);
      }
      return getDenseHeatmapData(
        (0,_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_0__.calculateHeatmapFromData)(frames, (_g = optionsCopy.calculation) != null ? _g : {}),
        exemplars,
        optionsCopy,
        palette,
        theme
      );
    }
    return getDenseHeatmapData(
      (0,_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_0__.calculateHeatmapFromData)(frames, (_h = options.calculation) != null ? _h : {}),
      exemplars,
      options,
      palette,
      theme
    );
  }
  let rowsHeatmap = void 0;
  for (const frame of frames) {
    switch ((_i = frame.meta) == null ? void 0 : _i.type) {
      case _grafana_data__WEBPACK_IMPORTED_MODULE_5__.DataFrameType.HeatmapCells:
        return (0,_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_0__.isHeatmapCellsDense)(frame) ? getDenseHeatmapData(frame, exemplars, options, palette, theme) : getSparseHeatmapData(frame, exemplars, options, palette, theme);
      case _grafana_data__WEBPACK_IMPORTED_MODULE_5__.DataFrameType.HeatmapRows:
        rowsHeatmap = frame;
    }
  }
  if (rowsHeatmap == null) {
    if (frames.length > 1) {
      let allNamesNumeric = frames.every(
        (frame) => {
          var _a2;
          return !Number.isNaN((0,_grafana_prometheus__WEBPACK_IMPORTED_MODULE_6__.parseSampleValue)((_a2 = frame.fields[1].state) == null ? void 0 : _a2.displayName));
        }
      );
      if (allNamesNumeric) {
        frames.sort(_grafana_prometheus__WEBPACK_IMPORTED_MODULE_6__.sortSeriesByLabel);
      }
      rowsHeatmap = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.joinDataFrames)({
        frames,
        keepDisplayNames: true
      });
    } else {
      let frame = frames[0];
      let numberFields = frame.fields.filter((field) => field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_8__.FieldType.number);
      let allNamesNumeric = numberFields.every((field) => {
        var _a2;
        return !Number.isNaN((0,_grafana_prometheus__WEBPACK_IMPORTED_MODULE_6__.parseSampleValue)((_a2 = field.state) == null ? void 0 : _a2.displayName));
      });
      if (allNamesNumeric) {
        numberFields.sort((a, b) => {
          var _a2, _b2;
          return (0,_grafana_prometheus__WEBPACK_IMPORTED_MODULE_6__.parseSampleValue)((_a2 = a.state) == null ? void 0 : _a2.displayName) - (0,_grafana_prometheus__WEBPACK_IMPORTED_MODULE_6__.parseSampleValue)((_b2 = b.state) == null ? void 0 : _b2.displayName);
        });
        rowsHeatmap = {
          ...frame,
          fields: [frame.fields.find((f) => f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_8__.FieldType.time), ...numberFields]
        };
      } else {
        rowsHeatmap = frame;
      }
    }
  }
  rowsHeatmap.fields.forEach((field) => {
    var _a2, _b2, _c2, _d2;
    if (((_b2 = (_a2 = field.config.links) == null ? void 0 : _a2.length) != null ? _b2 : 0) === 0) {
      return;
    }
    field.getLinks = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getLinksSupplier)(rowsHeatmap, field, (_d2 = (_c2 = field.state) == null ? void 0 : _c2.scopedVars) != null ? _d2 : {}, replaceVariables);
  });
  return {
    ...getDenseHeatmapData(
      (0,_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_0__.rowsToCellsHeatmap)({
        unit: (_j = options.yAxis) == null ? void 0 : _j.unit,
        // used to format the ordinal lookup values
        decimals: (_k = options.yAxis) == null ? void 0 : _k.decimals,
        ...options.rowsFrame,
        frame: rowsHeatmap
      }),
      exemplars,
      options,
      palette,
      theme
    ),
    series: rowsHeatmap
  };
}
const getSparseHeatmapData = (frame, exemplars, options, palette, theme) => {
  var _a, _b, _c;
  if (((_a = frame.meta) == null ? void 0 : _a.type) !== _grafana_data__WEBPACK_IMPORTED_MODULE_5__.DataFrameType.HeatmapCells || (0,_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_0__.isHeatmapCellsDense)(frame)) {
    return {
      warning: "Expected sparse heatmap format",
      heatmap: frame
    };
  }
  updateFieldDisplay(frame.fields[1], options.yAxis, theme);
  const valueField = frame.fields[3];
  const disp = updateFieldDisplay(valueField, options.cellValues, theme);
  let [minValue, maxValue] = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.boundedMinMax)(
    valueField.values,
    options.color.min,
    options.color.max,
    (_b = options.filterValues) == null ? void 0 : _b.le,
    (_c = options.filterValues) == null ? void 0 : _c.ge
  );
  return {
    heatmap: frame,
    heatmapColors: {
      palette,
      values: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.valuesToFills)(valueField.values, palette, minValue, maxValue),
      minValue,
      maxValue
    },
    exemplars,
    display: (v) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_9__.formattedValueToString)(disp(v))
  };
};
const getDenseHeatmapData = (frame, exemplars, options, palette, theme) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  if (((_a = frame.meta) == null ? void 0 : _a.type) !== _grafana_data__WEBPACK_IMPORTED_MODULE_5__.DataFrameType.HeatmapCells) {
    return {
      warning: "Expected heatmap scanlines format",
      heatmap: frame
    };
  }
  if (frame.fields.length < 2 || frame.length < 2) {
    return { heatmap: frame };
  }
  const meta = (0,_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_0__.readHeatmapRowsCustomMeta)(frame);
  let xName = void 0;
  let yName = void 0;
  let valueField = void 0;
  for (const field of frame.fields) {
    switch (field.name) {
      case "y":
        yName = field.name;
      case "yMin":
      case "yMax": {
        if (!yName) {
          yName = field.name;
        }
        if (meta.yOrdinalDisplay == null) {
          updateFieldDisplay(field, options.yAxis, theme);
        }
        break;
      }
      case "x":
      case "xMin":
      case "xMax":
        xName = field.name;
        break;
      default: {
        if (field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_8__.FieldType.number && !valueField) {
          valueField = field;
        }
      }
    }
  }
  if (!yName) {
    return { warning: "Missing Y field", heatmap: frame };
  }
  if (!yName) {
    return { warning: "Missing X field", heatmap: frame };
  }
  if (!valueField) {
    return { warning: "Missing value field", heatmap: frame };
  }
  const disp = updateFieldDisplay(valueField, options.cellValues, theme);
  const xs = frame.fields[0].values;
  const ys = frame.fields[1].values;
  const dlen = xs.length;
  let yBinQty = dlen - ys.lastIndexOf(ys[0]);
  let xBinQty = dlen / yBinQty;
  let yBinIncr = ys[1] - ys[0];
  let xBinIncr = xs[yBinQty] - xs[0];
  let [minValue, maxValue] = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.boundedMinMax)(
    valueField.values,
    options.color.min,
    options.color.max,
    (_b = options.filterValues) == null ? void 0 : _b.le,
    (_c = options.filterValues) == null ? void 0 : _c.ge
  );
  let calcX = (_d = options.calculation) == null ? void 0 : _d.xBuckets;
  let calcY = (_e = options.calculation) == null ? void 0 : _e.yBuckets;
  const data = {
    heatmap: frame,
    heatmapColors: {
      palette,
      values: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.valuesToFills)(valueField.values, palette, minValue, maxValue),
      minValue,
      maxValue
    },
    exemplars: (exemplars == null ? void 0 : exemplars.length) ? exemplars : void 0,
    xBucketSize: xBinIncr,
    yBucketSize: yBinIncr,
    xBucketCount: xBinQty,
    yBucketCount: yBinQty,
    yLog: (_g = (_f = calcY == null ? void 0 : calcY.scale) == null ? void 0 : _f.log) != null ? _g : 0,
    xLog: (_i = (_h = calcX == null ? void 0 : calcX.scale) == null ? void 0 : _h.log) != null ? _i : 0,
    xLogSplit: ((_j = calcX == null ? void 0 : calcX.scale) == null ? void 0 : _j.log) ? +((_k = calcX == null ? void 0 : calcX.value) != null ? _k : "1") : 1,
    yLogSplit: ((_l = calcY == null ? void 0 : calcY.scale) == null ? void 0 : _l.log) ? +((_m = calcY == null ? void 0 : calcY.value) != null ? _m : "1") : 1,
    // TODO: improve heuristic
    xLayout: xName === "xMax" ? _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.HeatmapCellLayout.le : xName === "xMin" ? _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.HeatmapCellLayout.ge : _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.HeatmapCellLayout.unknown,
    yLayout: yName === "yMax" ? _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.HeatmapCellLayout.le : yName === "yMin" ? _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.HeatmapCellLayout.ge : _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.HeatmapCellLayout.unknown,
    display: (v) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_9__.formattedValueToString)(disp(v))
  };
  return data;
};
function updateFieldDisplay(field, opts, theme) {
  var _a;
  if (((_a = opts == null ? void 0 : opts.unit) == null ? void 0 : _a.length) || (opts == null ? void 0 : opts.decimals) != null) {
    const { unit, decimals } = opts;
    field.display = void 0;
    field.config = { ...field.config };
    if (unit == null ? void 0 : unit.length) {
      field.config.unit = unit;
    }
    if (decimals != null) {
      field.config.decimals = decimals;
    }
  }
  if (!field.display) {
    field.display = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_11__.getDisplayProcessor)({ field, theme });
  }
  return field.display;
}


/***/ }),

/***/ "./public/app/plugins/panel/heatmap/migrations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   angularToReactHeatmap: () => (/* binding */ angularToReactHeatmap),
/* harmony export */   heatmapChangedHandler: () => (/* binding */ heatmapChangedHandler),
/* harmony export */   heatmapMigrationHandler: () => (/* binding */ heatmapMigrationHandler)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _palettes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/panel/heatmap/palettes.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/heatmap/types.ts");





const heatmapMigrationHandler = (panel) => {
  var _a, _b, _c, _d;
  if (Object.keys((_a = panel.options) != null ? _a : {}).length === 0) {
    return heatmapChangedHandler(panel, "heatmap", { angular: panel }, panel.fieldConfig);
  }
  let showTooltip = (_c = (_b = panel.options) == null ? void 0 : _b.tooltip) == null ? void 0 : _c.show;
  if (showTooltip !== void 0) {
    if (showTooltip === true) {
      panel.options.tooltip.mode = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.TooltipDisplayMode.Single;
    } else if (showTooltip === false) {
      panel.options.tooltip.mode = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.TooltipDisplayMode.None;
    }
    (_d = panel.options.tooltip) == null ? true : delete _d.show;
  }
  return panel.options;
};
const heatmapChangedHandler = (panel, prevPluginId, prevOptions, prevFieldConfig) => {
  if (prevPluginId === "heatmap" && prevOptions.angular) {
    const { fieldConfig, options } = angularToReactHeatmap({
      ...prevOptions.angular,
      fieldConfig: prevFieldConfig
    });
    panel.fieldConfig = fieldConfig;
    return options;
  }
  if (prevPluginId === "heatmap-new") {
    const { bucketFrame, ...options } = panel.options;
    if (bucketFrame) {
      return { ...options, rowsFrame: bucketFrame };
    }
    return panel.options;
  }
  return {};
};
function angularToReactHeatmap(angular) {
  var _a, _b, _c, _d, _e, _f;
  const fieldConfig = {
    defaults: {},
    overrides: []
  };
  const calculate = angular.dataFormat === "tsbuckets" ? false : true;
  const calculation = {
    ..._types__WEBPACK_IMPORTED_MODULE_1__.defaultOptions.calculation
  };
  const oldYAxis = { logBase: 1, ...angular.yAxis };
  if (calculate) {
    if (angular.xBucketSize) {
      calculation.xBuckets = { mode: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HeatmapCalculationMode.Size, value: "".concat(angular.xBucketSize) };
    } else if (angular.xBucketNumber) {
      calculation.xBuckets = { mode: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HeatmapCalculationMode.Count, value: "".concat(angular.xBucketNumber) };
    }
    if (angular.yBucketSize) {
      calculation.yBuckets = { mode: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HeatmapCalculationMode.Size, value: "".concat(angular.yBucketSize) };
    } else if (angular.xBucketNumber) {
      calculation.yBuckets = { mode: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HeatmapCalculationMode.Count, value: "".concat(angular.yBucketNumber) };
    }
    if (oldYAxis.logBase > 1) {
      calculation.yBuckets = {
        mode: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HeatmapCalculationMode.Count,
        value: +oldYAxis.splitFactor > 0 ? "".concat(oldYAxis.splitFactor) : void 0,
        scale: {
          type: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ScaleDistribution.Log,
          log: oldYAxis.logBase
        }
      };
    }
  }
  const cellGap = asNumber((_a = angular.cards) == null ? void 0 : _a.cardPadding, 2);
  const options = {
    calculate,
    calculation,
    color: {
      ..._types__WEBPACK_IMPORTED_MODULE_1__.defaultOptions.color,
      steps: 128
      // best match with existing colors
    },
    cellGap: cellGap ? cellGap : 1,
    // default to size 1
    cellRadius: asNumber((_b = angular.cards) == null ? void 0 : _b.cardRound),
    // just to keep it
    yAxis: {
      axisPlacement: oldYAxis.show === false ? _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.AxisPlacement.Hidden : _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.AxisPlacement.Left,
      reverse: Boolean(angular.reverseYBuckets),
      axisWidth: asNumber(oldYAxis.width),
      min: oldYAxis.min,
      max: oldYAxis.max,
      unit: oldYAxis.format,
      decimals: oldYAxis.decimals
    },
    cellValues: {
      decimals: asNumber(angular.tooltipDecimals)
    },
    rowsFrame: {
      layout: getHeatmapCellLayout(angular.yBucketBound)
    },
    legend: {
      show: Boolean((_c = angular.legend) == null ? void 0 : _c.show)
    },
    showValue: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.VisibilityMode.Never,
    tooltip: {
      mode: Boolean((_d = angular.tooltip) == null ? void 0 : _d.show) ? _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.TooltipDisplayMode.Single : _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.TooltipDisplayMode.None,
      yHistogram: Boolean((_e = angular.tooltip) == null ? void 0 : _e.showHistogram)
    },
    exemplars: {
      ..._types__WEBPACK_IMPORTED_MODULE_1__.defaultOptions.exemplars
    }
  };
  if (angular.hideZeroBuckets) {
    options.filterValues = { ..._types__WEBPACK_IMPORTED_MODULE_1__.defaultOptions.filterValues };
  }
  const color = (_f = angular.color) != null ? _f : {};
  switch (color == null ? void 0 : color.mode) {
    case "spectrum": {
      options.color.mode = _types__WEBPACK_IMPORTED_MODULE_1__.HeatmapColorMode.Scheme;
      const current = color.colorScheme;
      let scheme = _palettes__WEBPACK_IMPORTED_MODULE_0__.colorSchemes.find((v) => v.name === current);
      if (!scheme) {
        scheme = _palettes__WEBPACK_IMPORTED_MODULE_0__.colorSchemes.find((v) => current.indexOf(v.name) >= 0);
      }
      options.color.scheme = scheme ? scheme.name : _types__WEBPACK_IMPORTED_MODULE_1__.defaultOptions.color.scheme;
      break;
    }
    case "opacity": {
      options.color.mode = _types__WEBPACK_IMPORTED_MODULE_1__.HeatmapColorMode.Opacity;
      options.color.scale = color.scale;
      break;
    }
  }
  options.color.fill = color.cardColor;
  options.color.min = color.min;
  options.color.max = color.max;
  if (typeof color.min === "number" && typeof color.max === "number" && color.min > color.max) {
    options.color.min = color.max;
    options.color.max = color.min;
    options.color.reverse = true;
  }
  return { fieldConfig, options };
}
function getHeatmapCellLayout(v) {
  switch (v) {
    case "upper":
      return _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HeatmapCellLayout.ge;
    case "lower":
      return _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HeatmapCellLayout.le;
    case "middle":
      return _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HeatmapCellLayout.unknown;
  }
  return _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HeatmapCellLayout.auto;
}
function asNumber(v, defaultValue) {
  if (v == null || v === "") {
    return defaultValue;
  }
  const num = +v;
  return isNaN(num) ? defaultValue : num;
}


/***/ }),

/***/ "./public/app/plugins/panel/heatmap/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-data/src/panel/PanelPlugin.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-data/src/types/fieldOverrides.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-data/src/field/overrides/processors.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui_src_options_builder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/options/builder/axis.tsx");
/* harmony import */ var _grafana_ui_src_options_builder__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/options/builder/hideSeries.tsx");
/* harmony import */ var _core_components_ColorScale_ColorScale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/ColorScale/ColorScale.tsx");
/* harmony import */ var _features_transformers_calculateHeatmap_editor_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/transformers/calculateHeatmap/editor/helper.ts");
/* harmony import */ var _features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/transformers/calculateHeatmap/heatmap.ts");
/* harmony import */ var _HeatmapPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/heatmap/HeatmapPanel.tsx");
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/heatmap/fields.ts");
/* harmony import */ var _migrations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/panel/heatmap/migrations.ts");
/* harmony import */ var _palettes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/panel/heatmap/palettes.ts");
/* harmony import */ var _suggestions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/panel/heatmap/suggestions.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/panel/heatmap/types.ts");
















const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_10__.PanelPlugin(_HeatmapPanel__WEBPACK_IMPORTED_MODULE_4__.HeatmapPanel).useFieldConfig({
  disableStandardOptions: Object.values(_grafana_data__WEBPACK_IMPORTED_MODULE_11__.FieldConfigProperty).filter((v) => v !== _grafana_data__WEBPACK_IMPORTED_MODULE_11__.FieldConfigProperty.Links),
  useCustomConfig: (builder) => {
    builder.addCustomEditor({
      id: "scaleDistribution",
      path: "scaleDistribution",
      name: "Y axis scale",
      category: ["Heatmap"],
      editor: _grafana_ui_src_options_builder__WEBPACK_IMPORTED_MODULE_12__.ScaleDistributionEditor,
      override: _grafana_ui_src_options_builder__WEBPACK_IMPORTED_MODULE_12__.ScaleDistributionEditor,
      defaultValue: { type: _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.ScaleDistribution.Linear },
      shouldApply: (f) => f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_14__.FieldType.number,
      process: _grafana_data__WEBPACK_IMPORTED_MODULE_15__.identityOverrideProcessor,
      hideFromDefaults: true
    });
    (0,_grafana_ui_src_options_builder__WEBPACK_IMPORTED_MODULE_16__.addHideFrom)(builder);
  }
}).setPanelChangeHandler(_migrations__WEBPACK_IMPORTED_MODULE_6__.heatmapChangedHandler).setMigrationHandler(_migrations__WEBPACK_IMPORTED_MODULE_6__.heatmapMigrationHandler).setPanelOptions((builder, context) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const opts = (_a = context.options) != null ? _a : _types__WEBPACK_IMPORTED_MODULE_9__.defaultOptions;
  let isOrdinalY = false;
  if (context.data.length > 0) {
    try {
      const palette = (0,_palettes__WEBPACK_IMPORTED_MODULE_7__.quantizeScheme)(opts.color, _grafana_runtime__WEBPACK_IMPORTED_MODULE_17__.config.theme2);
      const v = (0,_fields__WEBPACK_IMPORTED_MODULE_5__.prepareHeatmapData)(context.data, void 0, opts, palette, _grafana_runtime__WEBPACK_IMPORTED_MODULE_17__.config.theme2);
      isOrdinalY = (0,_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_3__.readHeatmapRowsCustomMeta)(v.heatmap).yOrdinalDisplay != null;
    } catch {
    }
  }
  let category = ["Heatmap"];
  builder.addRadio({
    path: "calculate",
    name: "Calculate from data",
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_9__.defaultOptions.calculate,
    category,
    settings: {
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false }
      ]
    }
  });
  if (opts.calculate) {
    (0,_features_transformers_calculateHeatmap_editor_helper__WEBPACK_IMPORTED_MODULE_2__.addHeatmapCalculationOptions)("calculation.", builder, opts.calculation, category);
  }
  category = ["Y Axis"];
  builder.addRadio({
    path: "yAxis.axisPlacement",
    name: "Placement",
    defaultValue: (_b = _types__WEBPACK_IMPORTED_MODULE_9__.defaultOptions.yAxis.axisPlacement) != null ? _b : _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.AxisPlacement.Left,
    category,
    settings: {
      options: [
        { label: "Left", value: _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.AxisPlacement.Left },
        { label: "Right", value: _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.AxisPlacement.Right },
        { label: "Hidden", value: _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.AxisPlacement.Hidden }
      ]
    }
  }).addUnitPicker({
    category,
    path: "yAxis.unit",
    name: "Unit",
    defaultValue: void 0,
    settings: {
      isClearable: true
    }
  }).addNumberInput({
    category,
    path: "yAxis.decimals",
    name: "Decimals",
    settings: {
      placeholder: "Auto"
    }
  });
  if (!isOrdinalY) {
    builder.addNumberInput({
      path: "yAxis.min",
      name: "Min value",
      settings: {
        placeholder: "Auto"
      },
      category
    }).addTextInput({
      path: "yAxis.max",
      name: "Max value",
      settings: {
        placeholder: "Auto"
      },
      category
    });
  }
  builder.addNumberInput({
    path: "yAxis.axisWidth",
    name: "Axis width",
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_9__.defaultOptions.yAxis.axisWidth,
    settings: {
      placeholder: "Auto",
      min: 5
      // smaller should just be hidden
    },
    category
  }).addTextInput({
    path: "yAxis.axisLabel",
    name: "Axis label",
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_9__.defaultOptions.yAxis.axisLabel,
    settings: {
      placeholder: "Auto"
    },
    category
  });
  if (!opts.calculate) {
    builder.addRadio({
      path: "rowsFrame.layout",
      name: "Tick alignment",
      defaultValue: (_d = (_c = _types__WEBPACK_IMPORTED_MODULE_9__.defaultOptions.rowsFrame) == null ? void 0 : _c.layout) != null ? _d : _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.HeatmapCellLayout.auto,
      category,
      settings: {
        options: [
          { label: "Auto", value: _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.HeatmapCellLayout.auto },
          { label: "Top (LE)", value: _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.HeatmapCellLayout.le },
          { label: "Middle", value: _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.HeatmapCellLayout.unknown },
          { label: "Bottom (GE)", value: _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.HeatmapCellLayout.ge }
        ]
      }
    });
  }
  builder.addBooleanSwitch({
    path: "yAxis.reverse",
    name: "Reverse",
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_9__.defaultOptions.yAxis.reverse === true,
    category
  });
  category = ["Colors"];
  builder.addRadio({
    path: "color.mode",
    name: "Mode",
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_9__.defaultOptions.color.mode,
    category,
    settings: {
      options: [
        { label: "Scheme", value: _types__WEBPACK_IMPORTED_MODULE_9__.HeatmapColorMode.Scheme },
        { label: "Opacity", value: _types__WEBPACK_IMPORTED_MODULE_9__.HeatmapColorMode.Opacity }
      ]
    }
  });
  builder.addColorPicker({
    path: "color.fill",
    name: "Color",
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_9__.defaultOptions.color.fill,
    category,
    showIf: (opts2) => opts2.color.mode === _types__WEBPACK_IMPORTED_MODULE_9__.HeatmapColorMode.Opacity
  });
  builder.addRadio({
    path: "color.scale",
    name: "Scale",
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_9__.defaultOptions.color.scale,
    category,
    settings: {
      options: [
        { label: "Exponential", value: _types__WEBPACK_IMPORTED_MODULE_9__.HeatmapColorScale.Exponential },
        { label: "Linear", value: _types__WEBPACK_IMPORTED_MODULE_9__.HeatmapColorScale.Linear }
      ]
    },
    showIf: (opts2) => opts2.color.mode === _types__WEBPACK_IMPORTED_MODULE_9__.HeatmapColorMode.Opacity
  });
  builder.addSliderInput({
    path: "color.exponent",
    name: "Exponent",
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_9__.defaultOptions.color.exponent,
    category,
    settings: {
      min: 0.1,
      // 1 for on/off?
      max: 2,
      step: 0.1
    },
    showIf: (opts2) => opts2.color.mode === _types__WEBPACK_IMPORTED_MODULE_9__.HeatmapColorMode.Opacity && opts2.color.scale === _types__WEBPACK_IMPORTED_MODULE_9__.HeatmapColorScale.Exponential
  });
  builder.addSelect({
    path: "color.scheme",
    name: "Scheme",
    description: "",
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_9__.defaultOptions.color.scheme,
    category,
    settings: {
      options: _palettes__WEBPACK_IMPORTED_MODULE_7__.colorSchemes.map((scheme) => ({
        value: scheme.name,
        label: scheme.name
        //description: 'Set a geometry field based on the results of other fields',
      }))
    },
    showIf: (opts2) => opts2.color.mode !== _types__WEBPACK_IMPORTED_MODULE_9__.HeatmapColorMode.Opacity
  });
  builder.addSliderInput({
    path: "color.steps",
    name: "Steps",
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_9__.defaultOptions.color.steps,
    category,
    settings: {
      min: 2,
      max: 128,
      step: 1
    }
  }).addBooleanSwitch({
    path: "color.reverse",
    name: "Reverse",
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_9__.defaultOptions.color.reverse,
    category
  }).addCustomEditor({
    id: "__scale__",
    path: "__scale__",
    name: "",
    category,
    editor: () => {
      const palette = (0,_palettes__WEBPACK_IMPORTED_MODULE_7__.quantizeScheme)(opts.color, _grafana_runtime__WEBPACK_IMPORTED_MODULE_17__.config.theme2);
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_core_components_ColorScale_ColorScale__WEBPACK_IMPORTED_MODULE_1__.ColorScale, { colorPalette: palette, min: 1, max: 100 }));
    }
  });
  builder.addNumberInput({
    path: "color.min",
    name: "Start color scale from value",
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_9__.defaultOptions.color.min,
    settings: {
      placeholder: "Auto (min)"
    },
    category
  }).addNumberInput({
    path: "color.max",
    name: "End color scale at value",
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_9__.defaultOptions.color.max,
    settings: {
      placeholder: "Auto (max)"
    },
    category
  });
  category = ["Cell display"];
  if (!opts.calculate) {
    builder.addTextInput({
      path: "rowsFrame.value",
      name: "Value name",
      defaultValue: (_e = _types__WEBPACK_IMPORTED_MODULE_9__.defaultOptions.rowsFrame) == null ? void 0 : _e.value,
      settings: {
        placeholder: "Value"
      },
      category
    });
  }
  builder.addUnitPicker({
    category,
    path: "cellValues.unit",
    name: "Unit",
    defaultValue: void 0,
    settings: {
      isClearable: true
    }
  }).addNumberInput({
    category,
    path: "cellValues.decimals",
    name: "Decimals",
    settings: {
      placeholder: "Auto"
    }
  });
  builder.addSliderInput({
    name: "Cell gap",
    path: "cellGap",
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_9__.defaultOptions.cellGap,
    category,
    settings: {
      min: 0,
      max: 25
    }
  }).addNumberInput({
    path: "filterValues.le",
    name: "Hide cells with values <=",
    defaultValue: (_f = _types__WEBPACK_IMPORTED_MODULE_9__.defaultOptions.filterValues) == null ? void 0 : _f.le,
    settings: {
      placeholder: "None"
    },
    category
  }).addNumberInput({
    path: "filterValues.ge",
    name: "Hide cells with values >=",
    defaultValue: (_g = _types__WEBPACK_IMPORTED_MODULE_9__.defaultOptions.filterValues) == null ? void 0 : _g.ge,
    settings: {
      placeholder: "None"
    },
    category
  });
  category = ["Tooltip"];
  builder.addRadio({
    path: "tooltip.mode",
    name: "Tooltip mode",
    category,
    defaultValue: _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.TooltipDisplayMode.Single,
    settings: {
      options: [
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.TooltipDisplayMode.Single, label: "Single" },
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.TooltipDisplayMode.Multi, label: "All" },
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.TooltipDisplayMode.None, label: "Hidden" }
      ]
    }
  });
  builder.addBooleanSwitch({
    path: "tooltip.yHistogram",
    name: "Show histogram (Y axis)",
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_9__.defaultOptions.tooltip.yHistogram,
    category,
    showIf: (opts2) => opts2.tooltip.mode === _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.TooltipDisplayMode.Single
  });
  builder.addBooleanSwitch({
    path: "tooltip.showColorScale",
    name: "Show color scale",
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_9__.defaultOptions.tooltip.showColorScale,
    category,
    showIf: (opts2) => opts2.tooltip.mode === _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.TooltipDisplayMode.Single
  });
  builder.addNumberInput({
    path: "tooltip.maxWidth",
    name: "Max width",
    category,
    settings: {
      integer: true
    }
  });
  builder.addNumberInput({
    path: "tooltip.maxHeight",
    name: "Max height",
    category,
    defaultValue: void 0,
    settings: {
      integer: true
    },
    showIf: (options) => {
      var _a2;
      return ((_a2 = options.tooltip) == null ? void 0 : _a2.mode) === _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.TooltipDisplayMode.Multi;
    }
  });
  category = ["Legend"];
  builder.addBooleanSwitch({
    path: "legend.show",
    name: "Show legend",
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_9__.defaultOptions.legend.show,
    category
  });
  category = ["Exemplars"];
  builder.addColorPicker({
    path: "exemplars.color",
    name: "Color",
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_9__.defaultOptions.exemplars.color,
    category
  });
}).setSuggestionsSupplier(new _suggestions__WEBPACK_IMPORTED_MODULE_8__.HeatmapSuggestionsSupplier()).setDataSupport({ annotations: true });


/***/ }),

/***/ "./public/app/plugins/panel/heatmap/palettes.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorSchemes: () => (/* binding */ colorSchemes),
/* harmony export */   quantizeScheme: () => (/* binding */ quantizeScheme)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3/src/index.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/d3-scale-chromatic/src/index.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/tinycolor2/esm/tinycolor.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/heatmap/types.ts");





const colorSchemes = [
  // Diverging
  { name: "BrBG", invert: "always" },
  { name: "PiYG", invert: "always" },
  { name: "PRGn", invert: "always" },
  { name: "PuOr", invert: "always" },
  { name: "RdBu", invert: "always" },
  { name: "RdGy", invert: "always" },
  { name: "RdYlBu", invert: "always" },
  { name: "RdYlGn", invert: "always" },
  { name: "Spectral", invert: "always" },
  // Sequential (Single Hue)
  { name: "Blues", invert: "dark" },
  { name: "Greens", invert: "dark" },
  { name: "Greys", invert: "dark" },
  { name: "Oranges", invert: "dark" },
  { name: "Purples", invert: "dark" },
  { name: "Reds", invert: "dark" },
  // Sequential (Multi-Hue)
  { name: "Turbo", invert: "light" },
  { name: "Cividis", invert: "light" },
  { name: "Viridis", invert: "light" },
  { name: "Magma", invert: "light" },
  { name: "Inferno", invert: "light" },
  { name: "Plasma", invert: "light" },
  { name: "Warm", invert: "light" },
  { name: "Cool", invert: "light" },
  { name: "Cubehelix", invert: "light", name2: "CubehelixDefault" },
  { name: "BuGn", invert: "dark" },
  { name: "BuPu", invert: "dark" },
  { name: "GnBu", invert: "dark" },
  { name: "OrRd", invert: "dark" },
  { name: "PuBuGn", invert: "dark" },
  { name: "PuBu", invert: "dark" },
  { name: "PuRd", invert: "dark" },
  { name: "RdPu", invert: "dark" },
  { name: "YlGnBu", invert: "dark" },
  { name: "YlGn", invert: "dark" },
  { name: "YlOrBr", invert: "dark" },
  { name: "YlOrRd", invert: "dark" },
  // Cyclical
  { name: "Rainbow", invert: "always" },
  { name: "Sinebow", invert: "always" }
];
const DEFAULT_SCHEME = colorSchemes.find((scheme) => scheme.name === "Spectral");
function quantizeScheme(opts, theme) {
  var _a, _b, _c;
  const options = { ..._types__WEBPACK_IMPORTED_MODULE_2__.defaultOptions.color, ...opts };
  const palette = [];
  const steps = ((_a = options.steps) != null ? _a : 128) - 1;
  if (opts.mode === _types__WEBPACK_IMPORTED_MODULE_2__.HeatmapColorMode.Opacity) {
    const fill = (0,tinycolor2__WEBPACK_IMPORTED_MODULE_1__["default"])(theme.visualization.getColorByName(opts.fill)).toPercentageRgb();
    const scale = options.scale === _types__WEBPACK_IMPORTED_MODULE_2__.HeatmapColorScale.Exponential ? d3__WEBPACK_IMPORTED_MODULE_0__.scalePow().exponent(options.exponent).domain([0, 1]).range([0, 1]) : d3__WEBPACK_IMPORTED_MODULE_0__.scaleLinear().domain([0, 1]).range([0, 1]);
    for (let i = 0; i <= steps; i++) {
      fill.a = scale(i / steps);
      palette.push((0,tinycolor2__WEBPACK_IMPORTED_MODULE_1__["default"])(fill).toString("hex8"));
    }
  } else {
    const scheme = (_b = colorSchemes.find((scheme2) => scheme2.name === options.scheme)) != null ? _b : DEFAULT_SCHEME;
    let fnName = "interpolate" + ((_c = scheme.name2) != null ? _c : scheme.name);
    const interpolate = d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_3__[fnName];
    for (let i = 0; i <= steps; i++) {
      let rgbStr = interpolate(i / steps);
      let rgb = rgbStr.indexOf("rgb") === 0 ? "#" + [...rgbStr.matchAll(/\d+/g)].map((v) => (+v[0]).toString(16).padStart(2, "0")).join("") : rgbStr;
      palette.push(rgb);
    }
    if (scheme.invert === "always" || scheme.invert === "dark" && theme.isDark || scheme.invert === "light" && theme.isLight) {
      palette.reverse();
    }
    if (opts.reverse) {
      palette.reverse();
    }
  }
  return palette;
}


/***/ }),

/***/ "./public/app/plugins/panel/heatmap/renderHistogram.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderHistogram: () => (/* binding */ renderHistogram)
/* harmony export */ });

function renderHistogram(can, histCanWidth, histCanHeight, xVals, countVals, index, yBucketCount) {
  var _a;
  let histCtx = (_a = can.current) == null ? void 0 : _a.getContext("2d");
  if (histCtx != null) {
    const barsGap = 1;
    let fromIdx = index;
    while (xVals[fromIdx - 1] === xVals[index]) {
      fromIdx--;
    }
    let toIdx = fromIdx + yBucketCount;
    let maxCount = 0;
    let i = fromIdx;
    while (i < toIdx) {
      let c = countVals[i];
      maxCount = Math.max(maxCount, c);
      i++;
    }
    let pHov = new Path2D();
    let pRest = new Path2D();
    i = fromIdx;
    let j = 0;
    while (i < toIdx) {
      let c = countVals[i];
      if (c > 0) {
        let pctY = c / maxCount;
        let pctX = j / yBucketCount;
        let p = i === index ? pHov : pRest;
        const xCoord = histCanWidth * pctX + barsGap;
        const width = histCanWidth / yBucketCount - barsGap;
        p.rect(xCoord, Math.round(histCanHeight * (1 - pctY)), width, Math.round(histCanHeight * pctY));
      }
      i++;
      j++;
    }
    histCtx.clearRect(0, 0, histCanWidth, histCanHeight);
    histCtx.fillStyle = "#2E3036";
    histCtx.fill(pRest);
    histCtx.fillStyle = "#5794F2";
    histCtx.fill(pHov);
  }
}


/***/ }),

/***/ "./public/app/plugins/panel/heatmap/suggestions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeatmapSuggestionsSupplier: () => (/* binding */ HeatmapSuggestionsSupplier)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/panel/heatmap/fields.ts");
/* harmony import */ var _palettes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/heatmap/palettes.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/heatmap/types.ts");





class HeatmapSuggestionsSupplier {
  getSuggestionsForData(builder) {
    var _a;
    const { dataSummary } = builder;
    if (!((_a = builder.data) == null ? void 0 : _a.series) || !dataSummary.hasData || dataSummary.timeFieldCount < 1 || dataSummary.numberFieldCount < 2 || dataSummary.numberFieldCount > 10) {
      return;
    }
    const palette = (0,_palettes__WEBPACK_IMPORTED_MODULE_1__.quantizeScheme)(_types__WEBPACK_IMPORTED_MODULE_2__.defaultOptions.color, _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.theme2);
    const info = (0,_fields__WEBPACK_IMPORTED_MODULE_0__.prepareHeatmapData)(builder.data.series, void 0, _types__WEBPACK_IMPORTED_MODULE_2__.defaultOptions, palette, _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.theme2);
    if (!info || info.warning) {
      return;
    }
    builder.getListAppender({
      name: "",
      pluginId: "heatmap",
      options: {},
      fieldConfig: {
        defaults: {
          custom: {}
        },
        overrides: []
      }
    });
  }
}


/***/ }),

/***/ "./public/app/plugins/panel/heatmap/tooltip/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatMilliseconds: () => (/* binding */ formatMilliseconds),
/* harmony export */   getFieldFromData: () => (/* binding */ getFieldFromData),
/* harmony export */   getHoverCellColor: () => (/* binding */ getHoverCellColor),
/* harmony export */   getSparseCellMinMax: () => (/* binding */ getSparseCellMinMax)
/* harmony export */ });

const getHoverCellColor = (data, index) => {
  var _a, _b;
  const colorPalette = (_a = data.heatmapColors) == null ? void 0 : _a.palette;
  const colorIndex = (_b = data.heatmapColors) == null ? void 0 : _b.values[index];
  let cellColor = void 0;
  if (colorIndex != null) {
    cellColor = colorPalette[colorIndex];
  }
  return { cellColor, colorPalette };
};
const conversions = {
  year: 1e3 * 60 * 60 * 24 * 365,
  month: 1e3 * 60 * 60 * 24 * 30,
  week: 1e3 * 60 * 60 * 24 * 7,
  day: 1e3 * 60 * 60 * 24,
  h: 1e3 * 60 * 60,
  m: 1e3 * 60,
  s: 1e3,
  ms: 1
};
const noPluralize = /* @__PURE__ */ new Set(["ms", "s", "m", "h"]);
const formatMilliseconds = (milliseconds) => {
  let value = 1;
  let unit = "ms";
  for (unit in conversions) {
    if (milliseconds >= conversions[unit]) {
      value = Math.floor(milliseconds / conversions[unit]);
      break;
    }
  }
  const plural = value !== 1 && !noPluralize.has(unit);
  const unitString = plural ? unit + "s" : unit;
  return "".concat(value, " ").concat(unitString);
};
const getFieldFromData = (data, fieldType, isSparse) => {
  let field;
  switch (fieldType) {
    case "x":
      field = isSparse ? data == null ? void 0 : data.fields.find(({ name }) => name === "x" || name === "xMin" || name === "xMax") : data == null ? void 0 : data.fields[0];
      break;
    case "y":
      field = isSparse ? data == null ? void 0 : data.fields.find(({ name }) => name === "y" || name === "yMin" || name === "yMax") : data == null ? void 0 : data.fields[1];
      break;
    case "count":
      field = isSparse ? data == null ? void 0 : data.fields.find(({ name }) => name === "count") : data == null ? void 0 : data.fields[2];
      break;
  }
  return field;
};
const getSparseCellMinMax = (data, index) => {
  let fields = data.heatmap.fields;
  let xMax = fields.find((f) => f.name === "xMax");
  let yMin = fields.find((f) => f.name === "yMin");
  let yMax = fields.find((f) => f.name === "yMax");
  let interval = xMax.config.interval;
  return {
    xBucketMin: xMax.values[index] - interval,
    xBucketMax: xMax.values[index],
    yBucketMin: yMin.values[index],
    yBucketMax: yMax.values[index]
  };
};


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


/***/ })

}]);
//# sourceMappingURL=heatmapPanel.eab8a633805570276785.js.map
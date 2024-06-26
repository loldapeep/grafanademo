"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["graphitePlugin"],{

/***/ "./public/app/core/utils/arrayMove.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayMove: () => (/* binding */ arrayMove)
/* harmony export */ });

const arrayMove = (array, fromIndex, toIndex) => {
  array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
  return array;
};


/***/ }),

/***/ "./public/app/core/utils/version.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SemVersion: () => (/* binding */ SemVersion),
/* harmony export */   isVersionGtOrEq: () => (/* binding */ isVersionGtOrEq)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


const versionPattern = /^(\d+)(?:\.(\d+))?(?:\.(\d+))?(?:-([0-9A-Za-z\.]+))?/;
class SemVersion {
  constructor(version) {
    this.major = 0;
    this.minor = 0;
    this.patch = 0;
    this.meta = "";
    const match = versionPattern.exec(version);
    if (match) {
      this.major = Number(match[1]);
      this.minor = Number(match[2] || 0);
      this.patch = Number(match[3] || 0);
      this.meta = match[4];
    }
  }
  isGtOrEq(version) {
    const compared = new SemVersion(version);
    for (let i = 0; i < this.comparable.length; ++i) {
      if (this.comparable[i] > compared.comparable[i]) {
        return true;
      }
      if (this.comparable[i] < compared.comparable[i]) {
        return false;
      }
    }
    return true;
  }
  isValid() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(this.major);
  }
  get comparable() {
    return [this.major, this.minor, this.patch];
  }
}
function isVersionGtOrEq(a, b) {
  const aSemver = new SemVersion(a);
  return aSemver.isGtOrEq(b);
}


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/AddGraphiteFunction.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddGraphiteFunction: () => (/* binding */ AddGraphiteFunction)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Segment/Segment.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/helpers.ts");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;






function AddGraphiteFunction({ funcDefs }) {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(void 0);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.mapFuncDefsToSelectables)(funcDefs), [funcDefs]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if ((value == null ? void 0 : value.value) !== void 0) {
      dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__.actions.addFunction({ name: value.value }));
      setValue(void 0);
    }
  }, [value, dispatch]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Segment,
    {
      Component: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { icon: "plus", variant: "secondary", className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.button), "aria-label": "Add new function" }),
      options,
      onChange: setValue,
      inputMinWidth: 150
    }
  ));
}
function getStyles(theme) {
  return {
    button: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n      margin-right: ", ";\n    "])), theme.spacing(0.5))
  };
}


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/AnnotationsEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnnotationEditor: () => (/* binding */ AnnotationEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/TagsInput/TagsInput.tsx");




const AnnotationEditor = (props) => {
  var _a, _b;
  const { query, onChange } = props;
  const [target, setTarget] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_a = query.target) != null ? _a : "");
  const [tags, setTags] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_b = query.tags) != null ? _b : []);
  const updateValue = (key, val) => {
    if (key === "tags") {
      onChange({
        ...query,
        [key]: val,
        fromAnnotations: true,
        queryType: key
      });
    } else {
      onChange({
        ...query,
        [key]: val,
        fromAnnotations: true,
        textEditor: true
      });
    }
  };
  const onTagsChange = (tagsInput) => {
    setTags(tagsInput);
    updateValue("tags", tagsInput);
  };
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Box, { marginBottom: 5 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, { label: "Graphite Query", labelWidth: 24, grow: true }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
    {
      value: target,
      onChange: (e) => setTarget(e.currentTarget.value || ""),
      onBlur: () => updateValue("target", target),
      placeholder: "Example: statsd.application.counters.*.count"
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h5", { className: styles.heading }, "Or"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, { label: "Graphite events tags", labelWidth: 24 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TagsInput, { id: "tags-input", width: 50, tags, onChange: onTagsChange, placeholder: "Example: event_tag" })));
};
const getStyles = (theme) => ({
  heading: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    fontSize: theme.typography.body.fontSize,
    marginBottom: theme.spacing(1)
  })
});


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/FunctionEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FunctionEditor: () => (/* binding */ FunctionEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _FunctionEditorControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/FunctionEditorControls.tsx");





const getStyles = (theme) => {
  return {
    icon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      marginRight: theme.spacing(0.5)
    }),
    label: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.bodySmall.fontSize,
      cursor: "pointer",
      display: "inline-block"
    })
  };
};
const FunctionEditor = ({ onMoveLeft, onMoveRight, func, ...props }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const renderContent = ({ updatePopperPosition }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _FunctionEditorControls__WEBPACK_IMPORTED_MODULE_2__.FunctionEditorControls,
    {
      ...props,
      func,
      onMoveLeft: () => {
        onMoveLeft(func);
        updatePopperPosition == null ? void 0 : updatePopperPosition();
      },
      onMoveRight: () => {
        onMoveRight(func);
        updatePopperPosition == null ? void 0 : updatePopperPosition();
      }
    }
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, func.def.unknown && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip, { content: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(TooltipContent, null), placement: "bottom", interactive: true }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { "data-testid": "warning-icon", name: "exclamation-triangle", size: "xs", className: styles.icon })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip, { content: renderContent, placement: "top", interactive: true }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: styles.label }, func.def.name)));
};
const TooltipContent = react__WEBPACK_IMPORTED_MODULE_1___default().memo(() => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "This function is not supported. Check your function for typos and", " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    "a",
    {
      target: "_blank",
      className: "external-link",
      rel: "noreferrer noopener",
      href: "https://graphite.readthedocs.io/en/latest/functions.html"
    },
    "read the docs"
  ), " ", "to see whether you need to upgrade your data source\u2019s version to make this function available.");
});
TooltipContent.displayName = "FunctionEditorTooltipContent";



/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/FunctionEditorControls.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FunctionEditorControls: () => (/* binding */ FunctionEditorControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");



const FunctionDescription = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(async () => {
  return {
    default(props) {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, props.description);
    }
  };
});
const FunctionHelpButton = (props) => {
  if (props.description) {
    let tooltip = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Loading description...") }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FunctionDescription, { description: props.description }));
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, { content: tooltip, placement: "bottom-end" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { className: props.description ? void 0 : "pointer", name: "question-circle" }));
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon,
    {
      className: "pointer",
      name: "question-circle",
      onClick: () => {
        window.open(
          "http://graphite.readthedocs.org/en/latest/functions.html#graphite.render.functions." + props.name,
          "_blank"
        );
      }
    }
  );
};
const FunctionEditorControls = (props) => {
  const { func, onMoveLeft, onMoveRight, onRemove } = props;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    "div",
    {
      style: {
        display: "flex",
        width: "60px",
        justifyContent: "space-between"
      }
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { name: "arrow-left", onClick: () => onMoveLeft(func) }),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FunctionHelpButton, { name: func.def.name, description: func.def.description }),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { name: "times", onClick: () => onRemove(func) }),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { name: "arrow-right", onClick: () => onMoveRight(func) })
  );
};


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/FunctionParamEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FunctionParamEditor: () => (/* binding */ FunctionParamEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Segment/Segment.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Segment/SegmentInput.tsx");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;



function FunctionParamEditor({ editableParam, onChange, onExpandedChange, autofocus }) {
  var _a2;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  if (((_a2 = editableParam.options) == null ? void 0 : _a2.length) > 0) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Segment,
      {
        autofocus,
        value: editableParam.value,
        inputPlaceholder: editableParam.name,
        className: styles.segment,
        options: editableParam.options,
        placeholder: " +" + editableParam.name,
        onChange: (value) => {
          onChange(value.value || "");
        },
        onExpandedChange,
        inputMinWidth: 150,
        allowCustomValue: true,
        allowEmptyValue: true
      }
    );
  } else {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SegmentInput,
      {
        autofocus,
        className: styles.input,
        value: editableParam.value || "",
        placeholder: " +" + editableParam.name,
        inputPlaceholder: editableParam.name,
        onChange: (value) => {
          onChange(value.toString());
        },
        onExpandedChange,
        style: { height: "25px", paddingTop: "2px", marginTop: "2px", paddingLeft: "4px", minWidth: "100px" }
      }
    );
  }
}
const getStyles = (theme) => ({
  segment: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    margin: 0,
    padding: 0
  }),
  input: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n    margin: 0;\n    padding: 0;\n    input {\n      height: 25px;\n    },\n  "])))
});


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/FunctionsSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FunctionsSection: () => (/* binding */ FunctionsSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Segment/SegmentSection.tsx");
/* harmony import */ var _AddGraphiteFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/AddGraphiteFunction.tsx");
/* harmony import */ var _GraphiteFunctionEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/GraphiteFunctionEditor.tsx");





function FunctionsSection({ functions = [], funcDefs }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SegmentSection, { label: "Functions", fill: true }, functions.map((func, index) => {
    return !func.hidden && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_GraphiteFunctionEditor__WEBPACK_IMPORTED_MODULE_2__.GraphiteFunctionEditor, { key: index, func });
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AddGraphiteFunction__WEBPACK_IMPORTED_MODULE_1__.AddGraphiteFunction, { funcDefs }));
}


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/GraphiteFunctionEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphiteFunctionEditor: () => (/* binding */ GraphiteFunctionEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Layout.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineLabel.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var _FunctionEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/FunctionEditor.tsx");
/* harmony import */ var _FunctionParamEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/FunctionParamEditor.tsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/helpers.ts");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;








function GraphiteFunctionEditor({ func }) {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const [mouseOver, setIsMouseOver] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [expanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  let params = (0,_helpers__WEBPACK_IMPORTED_MODULE_6__.mapFuncInstanceToParams)(func);
  params = params.filter((p, index) => {
    return index < func.def.params.length && !p.optional || func.added || p.value || expanded || mouseOver;
  });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    "div",
    {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.container, { [styles.error]: func.def.unknown }),
      onBlur: () => setIsMouseOver(false),
      onFocus: () => setIsMouseOver(true),
      onMouseOver: () => setIsMouseOver(true),
      onMouseOut: () => setIsMouseOver(false)
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.HorizontalGroup, { spacing: "none" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _FunctionEditor__WEBPACK_IMPORTED_MODULE_4__.FunctionEditor,
      {
        func,
        onMoveLeft: () => {
          dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__.actions.moveFunction({ func, offset: -1 }));
        },
        onMoveRight: () => {
          dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__.actions.moveFunction({ func, offset: 1 }));
        },
        onRemove: () => {
          dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__.actions.removeFunction({ func }));
        }
      }
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.InlineLabel, { className: styles.label }, "("), params.map((editableParam, index) => {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { key: index }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
        _FunctionParamEditor__WEBPACK_IMPORTED_MODULE_5__.FunctionParamEditor,
        {
          autofocus: index === 0 && func.added,
          editableParam,
          onChange: (value) => {
            if (value !== "" || editableParam.optional) {
              dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__.actions.updateFunctionParam({ func, index, value }));
            }
            setIsExpanded(false);
            setIsMouseOver(false);
          },
          onExpandedChange: setIsExpanded
        }
      ), index !== params.length - 1 ? "," : "");
    }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.InlineLabel, { className: styles.label }, ")"))
  );
}
const getStyles = (theme) => ({
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    backgroundColor: theme.colors.background.secondary,
    borderRadius: theme.shape.radius.default,
    marginRight: theme.spacing(0.5),
    padding: "0 ".concat(theme.spacing(1)),
    height: "".concat(theme.v1.spacing.formInputHeight, "px")
  }),
  error: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n    border: 1px solid ", ";\n  "])), theme.colors.error.main),
  label: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    padding: 0,
    margin: 0
  }),
  button: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    padding: theme.spacing(0.5)
  })
});


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/GraphiteQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphiteQueryEditor: () => (/* binding */ GraphiteQueryEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var _FunctionsSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/FunctionsSection.tsx");
/* harmony import */ var _GraphiteTextEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/GraphiteTextEditor.tsx");
/* harmony import */ var _SeriesSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/SeriesSection.tsx");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b, _c;








function GraphiteQueryEditor({
  datasource,
  onRunQuery,
  onChange,
  query,
  range,
  queries
}) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _state_context__WEBPACK_IMPORTED_MODULE_3__.GraphiteQueryEditorContext,
    {
      datasource,
      onRunQuery,
      onChange,
      query,
      queries,
      range
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(GraphiteQueryEditorContent, null)
  );
}
function GraphiteQueryEditorContent() {
  var _a2, _b2, _c2;
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const state = (0,_state_context__WEBPACK_IMPORTED_MODULE_3__.useGraphiteState)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.container }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.visualEditor }, ((_a2 = state.target) == null ? void 0 : _a2.textEditor) && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_GraphiteTextEditor__WEBPACK_IMPORTED_MODULE_5__.GraphiteTextEditor, { rawQuery: state.target.target }), !((_b2 = state.target) == null ? void 0 : _b2.textEditor) && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SeriesSection__WEBPACK_IMPORTED_MODULE_6__.SeriesSection, { state }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_FunctionsSection__WEBPACK_IMPORTED_MODULE_4__.FunctionsSection, { functions: (_c2 = state.queryModel) == null ? void 0 : _c2.functions, funcDefs: state.funcDefs }))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button,
    {
      className: styles.toggleButton,
      icon: "pen",
      variant: "secondary",
      "aria-label": "Toggle editor mode",
      onClick: () => {
        dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__.actions.toggleEditorMode());
      }
    }
  ));
}
function getStyles(theme) {
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n      display: flex;\n    "]))),
    visualEditor: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_b || (_b = __template(["\n      flex-grow: 1;\n    "]))),
    toggleButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_c || (_c = __template(["\n      margin-left: ", ";\n    "])), theme.spacing(0.5))
  };
}


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/GraphiteTextEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphiteTextEditor: () => (/* binding */ GraphiteTextEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/QueryField/QueryField.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");





function GraphiteTextEditor({ rawQuery }) {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const updateQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (query) => {
      dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_1__.actions.updateQuery({ query }));
    },
    [dispatch]
  );
  const runQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_1__.actions.runQuery());
  }, [dispatch]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.QueryField,
    {
      query: rawQuery,
      onChange: updateQuery,
      onBlur: runQuery,
      onRunQuery: runQuery,
      placeholder: "Enter a Graphite query (run with Shift+Enter)",
      portalOrigin: "graphite"
    }
  );
}


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/GraphiteVariableEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphiteVariableEditor: () => (/* binding */ GraphiteVariableEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/types.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/helpers.ts");





const GRAPHITE_QUERY_VARIABLE_TYPE_OPTIONS = [
  { label: "Default Query", value: _types__WEBPACK_IMPORTED_MODULE_1__.GraphiteQueryType.Default },
  { label: "Value Query", value: _types__WEBPACK_IMPORTED_MODULE_1__.GraphiteQueryType.Value },
  { label: "Metric Name Query", value: _types__WEBPACK_IMPORTED_MODULE_1__.GraphiteQueryType.MetricName }
];
const GraphiteVariableEditor = (props) => {
  var _a;
  const { query, onChange } = props;
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.convertToGraphiteQueryObject)(query));
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Select query type", labelWidth: 20 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select,
    {
      "aria-label": "select query type",
      options: GRAPHITE_QUERY_VARIABLE_TYPE_OPTIONS,
      width: 25,
      value: (_a = value.queryType) != null ? _a : _types__WEBPACK_IMPORTED_MODULE_1__.GraphiteQueryType.Default,
      onChange: (selectableValue) => {
        var _a2;
        setValue({
          ...value,
          queryType: selectableValue.value
        });
        if (value.target) {
          onChange(
            {
              ...value,
              queryType: selectableValue.value
            },
            (_a2 = value.target) != null ? _a2 : ""
          );
        }
      }
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Query", labelWidth: 20, grow: true }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
    {
      "aria-label": "Variable editor query input",
      value: value.target,
      onBlur: () => {
        var _a2;
        return onChange(value, (_a2 = value.target) != null ? _a2 : "");
      },
      onChange: (e) => {
        setValue({
          ...value,
          target: e.currentTarget.value
        });
      }
    }
  )));
};


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/MetricSegment.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetricSegment: () => (/* binding */ MetricSegment)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Segment/SegmentAsync.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var _state_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/providers.ts");







function MetricSegment({ metricIndex, segment, state }) {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const loadOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (value) => {
      return (0,_state_providers__WEBPACK_IMPORTED_MODULE_4__.getAltSegmentsSelectables)(state, metricIndex, value || "");
    },
    [state, metricIndex]
  );
  const debouncedLoadOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(loadOptions, 200, { leading: true }), [loadOptions]);
  const onSegmentChanged = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (selectableValue) => {
      dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__.actions.segmentValueChanged({ segment: selectableValue.value, index: metricIndex }));
    },
    [dispatch, metricIndex]
  );
  const onSegmentChangedDebounced = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(onSegmentChanged, 100), [onSegmentChanged]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.SegmentAsync,
    {
      value: segment.value,
      inputMinWidth: 150,
      allowCustomValue: true,
      loadOptions: debouncedLoadOptions,
      reloadOptionsOnChange: true,
      onChange: onSegmentChangedDebounced
    }
  );
}


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/MetricTankMetaInspector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetricTankMetaInspector: () => (/* binding */ MetricTankMetaInspector)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/datetime/rangeutil.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/stylesFactory.ts");
/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/meta.ts");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;






class MetricTankMetaInspector extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  renderMeta(meta, key) {
    var _a2;
    const styles = getStyles();
    const buckets = (0,_meta__WEBPACK_IMPORTED_MODULE_3__.parseSchemaRetentions)(meta["schema-retentions"]);
    const rollupNotice = (0,_meta__WEBPACK_IMPORTED_MODULE_3__.getRollupNotice)([meta]);
    const runtimeNotice = (0,_meta__WEBPACK_IMPORTED_MODULE_3__.getRuntimeConsolidationNotice)([meta]);
    const normFunc = ((_a2 = meta["consolidator-normfetch"]) != null ? _a2 : "").replace("Consolidator", "");
    const totalSeconds = buckets.reduce(
      (acc, bucket) => acc + (bucket.retention ? _grafana_data__WEBPACK_IMPORTED_MODULE_4__.intervalToSeconds(bucket.retention) : 0),
      0
    );
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.metaItem, key }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.metaItemHeader }, "Schema: ", meta["schema-name"], /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "small muted" }, "Series count: ", meta.count)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.metaItemBody }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.step }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.stepHeading }, "Step 1: Fetch"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.stepDescription }, "First data is fetched, either from raw data archive or a rollup archive"), rollupNotice && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, rollupNotice.text), !rollupNotice && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "No rollup archive was used"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, buckets.map((bucket, index) => {
      const bucketLength = bucket.retention ? _grafana_data__WEBPACK_IMPORTED_MODULE_4__.intervalToSeconds(bucket.retention) : 0;
      const lengthPercent = bucketLength / totalSeconds * 100;
      const isActive = index === meta["archive-read"];
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { key: bucket.retention, className: styles.bucket }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.bucketInterval }, bucket.interval), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
        "div",
        {
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.bucketRetention, { [styles.bucketRetentionActive]: isActive }),
          style: { flexGrow: lengthPercent }
        }
      ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { style: { flexGrow: 100 - lengthPercent } }, bucket.retention));
    }))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.step }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.stepHeading }, "Step 2: Normalization"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.stepDescription }, "Normalization happens when series with different intervals between points are combined."), meta["aggnum-norm"] > 1 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "Normalization did occur using ", normFunc), meta["aggnum-norm"] === 1 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "No normalization was needed")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.step }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.stepHeading }, "Step 3: Runtime consolidation"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.stepDescription }, "If there are too many data points at this point Metrictank will consolidate them down to below max data points (set in queries tab)."), runtimeNotice && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, runtimeNotice.text), !runtimeNotice && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "No runtime consolidation"))));
  }
  render() {
    var _a2, _b2;
    const { data } = this.props;
    const seriesMetas = {};
    for (const series of data) {
      if ((_b2 = (_a2 = series == null ? void 0 : series.meta) == null ? void 0 : _a2.custom) == null ? void 0 : _b2.seriesMetaList) {
        for (const metaItem of series.meta.custom.seriesMetaList) {
          const key = "".concat(JSON.stringify(metaItem));
          if (seriesMetas[key]) {
            seriesMetas[key].count += metaItem.count;
          } else {
            seriesMetas[key] = metaItem;
          }
        }
      }
    }
    if (Object.keys(seriesMetas).length === 0) {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, "No response meta data");
    }
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", { className: "page-heading" }, "Metrictank Lineage"), Object.keys(seriesMetas).map((key) => this.renderMeta(seriesMetas[key], key)));
  }
}
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.stylesFactory)(() => {
  const { theme } = _core_config__WEBPACK_IMPORTED_MODULE_2__.config;
  const borderColor = theme.isDark ? theme.palette.gray25 : theme.palette.gray85;
  const background = theme.isDark ? theme.palette.dark1 : theme.palette.white;
  const headerBg = theme.isDark ? theme.palette.gray15 : theme.palette.gray85;
  return {
    metaItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n      background: ", ";\n      border: 1px solid ", ";\n      margin-bottom: ", ";\n    "])), background, borderColor, theme.spacing.md),
    metaItemHeader: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_b || (_b = __template(["\n      background: ", ";\n      padding: ", " ", ";\n      font-size: ", ";\n      display: flex;\n      justify-content: space-between;\n    "])), headerBg, theme.spacing.xs, theme.spacing.md, theme.typography.size.md),
    metaItemBody: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_c || (_c = __template(["\n      padding: ", ";\n    "])), theme.spacing.md),
    stepHeading: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_d || (_d = __template(["\n      font-size: ", ";\n    "])), theme.typography.size.md),
    stepDescription: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_e || (_e = __template(["\n      font-size: ", ";\n      color: ", ";\n      margin-bottom: ", ";\n    "])), theme.typography.size.sm, theme.colors.textWeak, theme.spacing.sm),
    step: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_f || (_f = __template(["\n      margin-bottom: ", ";\n\n      &:last-child {\n        margin-bottom: 0;\n      }\n    "])), theme.spacing.lg),
    bucket: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_g || (_g = __template(["\n      display: flex;\n      margin-bottom: ", ";\n      border-radius: ", ";\n    "])), theme.spacing.sm, theme.border.radius.sm),
    bucketInterval: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_h || (_h = __template(["\n      flex-grow: 0;\n      width: 60px;\n    "]))),
    bucketRetention: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_i || (_i = __template(["\n      background: linear-gradient(0deg, ", ", ", ");\n      text-align: center;\n      color: ", ";\n      margin-right: ", ";\n      border-radius: ", ";\n    "])), theme.palette.blue85, theme.palette.blue95, theme.palette.white, theme.spacing.md, theme.border.radius.sm),
    bucketRetentionActive: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_j || (_j = __template(["\n      background: linear-gradient(0deg, ", ", ", ");\n    "])), theme.palette.greenBase, theme.palette.greenShade)
  };
});


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/MetricsSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetricsSection: () => (/* binding */ MetricsSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MetricSegment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/MetricSegment.tsx");



function MetricsSection({ segments = [], state }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, segments.map((segment, index) => {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MetricSegment__WEBPACK_IMPORTED_MODULE_1__.MetricSegment, { segment, metricIndex: index, key: index, state });
  }));
}


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/PlayButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayButton: () => (/* binding */ PlayButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");





function PlayButton() {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const onClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_1__.actions.unpause());
  }, [dispatch]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { icon: "play", onClick, type: "button", variant: "secondary", "aria-label": "Unpause query" });
}


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/SeriesSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeriesSection: () => (/* binding */ SeriesSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Segment/SegmentSection.tsx");
/* harmony import */ var _MetricsSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/MetricsSection.tsx");
/* harmony import */ var _TagsSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/TagsSection.tsx");





function SeriesSection({ state }) {
  var _a, _b;
  const sectionContent = ((_a = state.queryModel) == null ? void 0 : _a.seriesByTagUsed) ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TagsSection__WEBPACK_IMPORTED_MODULE_2__.TagsSection, { tags: (_b = state.queryModel) == null ? void 0 : _b.tags, state }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MetricsSection__WEBPACK_IMPORTED_MODULE_1__.MetricsSection, { segments: state.segments, state });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SegmentSection, { label: "Series", fill: true }, sectionContent);
}


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/TagEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TagEditor: () => (/* binding */ TagEditor)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Segment/SegmentAsync.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Segment/Segment.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var _state_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/providers.ts");







function TagEditor({ tag, tagIndex, state }) {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const getTagsOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (inputValue) => {
      return (0,_state_providers__WEBPACK_IMPORTED_MODULE_4__.getTagsSelectables)(state, tagIndex, inputValue || "");
    },
    [state, tagIndex]
  );
  const debouncedGetTagsOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(getTagsOptions, 200, { leading: true }), [getTagsOptions]);
  const getTagValueOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (inputValue) => {
      return (0,_state_providers__WEBPACK_IMPORTED_MODULE_4__.getTagValuesSelectables)(state, tag, tagIndex, inputValue || "");
    },
    [state, tagIndex, tag]
  );
  const debouncedGetTagValueOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(getTagValueOptions, 200, { leading: true }),
    [getTagValueOptions]
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.SegmentAsync,
    {
      inputMinWidth: 150,
      value: tag.key,
      loadOptions: debouncedGetTagsOptions,
      reloadOptionsOnChange: true,
      onChange: (value) => {
        dispatch(
          _state_actions__WEBPACK_IMPORTED_MODULE_2__.actions.tagChanged({
            tag: { ...tag, key: value.value },
            index: tagIndex
          })
        );
      },
      allowCustomValue: true
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Segment,
    {
      inputMinWidth: 50,
      value: tag.operator,
      options: (0,_state_providers__WEBPACK_IMPORTED_MODULE_4__.getTagOperatorsSelectables)(),
      onChange: (value) => {
        dispatch(
          _state_actions__WEBPACK_IMPORTED_MODULE_2__.actions.tagChanged({
            tag: { ...tag, operator: value.value },
            index: tagIndex
          })
        );
      }
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.SegmentAsync,
    {
      inputMinWidth: 150,
      value: tag.value,
      loadOptions: debouncedGetTagValueOptions,
      reloadOptionsOnChange: true,
      onChange: (value) => {
        dispatch(
          _state_actions__WEBPACK_IMPORTED_MODULE_2__.actions.tagChanged({
            tag: { ...tag, value: value.value },
            index: tagIndex
          })
        );
      },
      allowCustomValue: true
    }
  ));
}


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/TagsSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TagsSection: () => (/* binding */ TagsSection)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Segment/SegmentAsync.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var _state_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/providers.ts");
/* harmony import */ var _PlayButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/PlayButton.tsx");
/* harmony import */ var _TagEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/TagEditor.tsx");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;









function TagsSection({ tags, state }) {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  const getTagsAsSegmentsOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (inputValue) => {
      return (0,_state_providers__WEBPACK_IMPORTED_MODULE_5__.getTagsAsSegmentsSelectables)(state, inputValue || "");
    },
    [state]
  );
  const debouncedGetTagsAsSegments = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(getTagsAsSegmentsOptions, 200, { leading: true }),
    [getTagsAsSegmentsOptions]
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, tags.map((tag, index) => {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_TagEditor__WEBPACK_IMPORTED_MODULE_7__.TagEditor, { key: index, tagIndex: index, tag, state });
  }), tags.length && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.SegmentAsync,
    {
      inputMinWidth: 150,
      onChange: (value) => {
        dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_3__.actions.addNewTag({ segment: value.value }));
      },
      loadOptions: debouncedGetTagsAsSegments,
      reloadOptionsOnChange: true,
      Component: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button, { icon: "plus", variant: "secondary", className: styles.button, "aria-label": "Add new tag" })
    }
  ), state.paused && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_PlayButton__WEBPACK_IMPORTED_MODULE_6__.PlayButton, null));
}
function getStyles(theme) {
  return {
    button: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n      margin-right: ", ";\n    "])), theme.spacing(0.5))
  };
}


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/helpers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertToGraphiteQueryObject: () => (/* binding */ convertToGraphiteQueryObject),
/* harmony export */   mapFuncDefsToSelectables: () => (/* binding */ mapFuncDefsToSelectables),
/* harmony export */   mapFuncInstanceToParams: () => (/* binding */ mapFuncInstanceToParams),
/* harmony export */   mapSegmentsToSelectables: () => (/* binding */ mapSegmentsToSelectables),
/* harmony export */   mapStringsToSelectables: () => (/* binding */ mapStringsToSelectables)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/types.ts");



function mapStringsToSelectables(values) {
  return values.map((value) => ({
    value,
    label: value
  }));
}
function mapSegmentsToSelectables(segments) {
  return segments.map((segment) => ({
    label: segment.value,
    value: segment
  }));
}
function mapFuncDefsToSelectables(funcDefs) {
  const categories = {};
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)(funcDefs, (funcDef) => {
    if (!funcDef.category) {
      return;
    }
    if (!categories[funcDef.category]) {
      categories[funcDef.category] = { label: funcDef.category, value: funcDef.category, options: [] };
    }
    categories[funcDef.category].options.push({
      label: funcDef.name,
      value: funcDef.name
    });
  });
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.sortBy)(categories, "label");
}
function createEditableParam(paramDef, additional, value) {
  var _a, _b;
  return {
    name: paramDef.name,
    value: (value == null ? void 0 : value.toString()) || "",
    optional: !!paramDef.optional || additional,
    // only first param is required when multiple are allowed
    multiple: !!paramDef.multiple,
    options: (_b = (_a = paramDef.options) == null ? void 0 : _a.map((option) => ({
      value: option.toString(),
      label: option.toString()
    }))) != null ? _b : []
  };
}
function mapFuncInstanceToParams(func) {
  var _a;
  const params = func.def.params.map(
    (paramDef, index) => createEditableParam(paramDef, false, func.params[index])
  );
  while (params.length < func.params.length) {
    const paramDef = func.def.params[func.def.params.length - 1];
    const value = func.params[params.length];
    params.push(createEditableParam(paramDef, true, value));
  }
  if (params.length && params[params.length - 1].value && ((_a = params[params.length - 1]) == null ? void 0 : _a.multiple)) {
    const paramDef = func.def.params[func.def.params.length - 1];
    params.push(createEditableParam(paramDef, true, ""));
  }
  return params;
}
function convertToGraphiteQueryObject(query) {
  if (typeof query === "string") {
    return {
      refId: "A",
      target: query,
      queryType: _types__WEBPACK_IMPORTED_MODULE_1__.GraphiteQueryType.Default.toString()
    };
  }
  return query;
}


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/configuration/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigEditor: () => (/* binding */ ConfigEditor),
/* harmony export */   SHOW_MAPPINGS_HELP_KEY: () => (/* binding */ SHOW_MAPPINGS_HELP_KEY)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/utils/datasource.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/DataSourceSettings/DataSourceHttpSettings.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldSet.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _core_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/store.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/types.ts");
/* harmony import */ var _versions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/versions.ts");
/* harmony import */ var _MappingsConfiguration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/configuration/MappingsConfiguration.tsx");
/* harmony import */ var _parseLokiLabelMappings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/graphite/configuration/parseLokiLabelMappings.ts");










const SHOW_MAPPINGS_HELP_KEY = "grafana.datasources.graphite.config.showMappingsHelp";
const graphiteVersions = _versions__WEBPACK_IMPORTED_MODULE_4__.GRAPHITE_VERSIONS.map((version) => ({ label: "".concat(version, ".x"), value: version }));
const graphiteTypes = Object.entries(_types__WEBPACK_IMPORTED_MODULE_3__.GraphiteType).map(([label, value]) => ({
  label,
  value
}));
class ConfigEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showMappingsHelp: _core_store__WEBPACK_IMPORTED_MODULE_2__["default"].getObject(SHOW_MAPPINGS_HELP_KEY, true)
    };
  }
  componentDidMount() {
    (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.updateDatasourcePluginJsonDataOption)(this.props, "graphiteVersion", this.currentGraphiteVersion);
  }
  render() {
    var _a, _b;
    const { options, onOptionsChange } = this.props;
    const currentVersion = graphiteVersions.find((item) => item.value === this.currentGraphiteVersion);
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, options.access === "direct" && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Alert, { title: "Deprecation Notice", severity: "warning" }, "This data source uses browser access mode. This mode is deprecated and will be removed in the future. Please use server access mode instead."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.DataSourceHttpSettings,
      {
        defaultUrl: "http://localhost:8080",
        dataSourceConfig: options,
        onChange: onOptionsChange,
        secureSocksDSProxyEnabled: _core_config__WEBPACK_IMPORTED_MODULE_1__.config.secureSocksDSProxyEnabled
      }
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.FieldSet, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("legend", { className: "page-heading" }, "Graphite details"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Field,
      {
        label: "Version",
        description: "This option controls what functions are available in the Graphite query editor."
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Select,
        {
          id: "graphite-version",
          "aria-label": "Graphite version",
          value: currentVersion,
          options: graphiteVersions,
          width: 16,
          onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.onUpdateDatasourceJsonDataOptionSelect)(this.props, "graphiteVersion")
        }
      )
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Field,
      {
        label: "Graphite backend type",
        description: "There are different types of Graphite compatible backends. Here you can specify the type you are using. For Metrictank, this will enable specific features, like query processing meta data. Metrictank\n        is a multi-tenant timeseries engine for Graphite and friends."
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Select,
        {
          id: "backend-type",
          options: graphiteTypes,
          value: graphiteTypes.find((type) => type.value === options.jsonData.graphiteType),
          width: 16,
          onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.onUpdateDatasourceJsonDataOptionSelect)(this.props, "graphiteType")
        }
      )
    ), options.jsonData.graphiteType === _types__WEBPACK_IMPORTED_MODULE_3__.GraphiteType.Metrictank && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Field,
      {
        label: "Rollup indicator",
        description: "Shows up as an info icon in panel headers when data is aggregated."
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Switch,
        {
          id: "rollup-indicator",
          value: !!options.jsonData.rollupIndicatorEnabled,
          onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.onUpdateDatasourceJsonDataOptionChecked)(this.props, "rollupIndicatorEnabled")
        }
      )
    )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _MappingsConfiguration__WEBPACK_IMPORTED_MODULE_5__.MappingsConfiguration,
      {
        mappings: (((_b = (_a = options.jsonData.importConfiguration) == null ? void 0 : _a.loki) == null ? void 0 : _b.mappings) || []).map(_parseLokiLabelMappings__WEBPACK_IMPORTED_MODULE_6__.toString),
        showHelp: this.state.showMappingsHelp,
        onDismiss: () => {
          this.setState({ showMappingsHelp: false });
          _core_store__WEBPACK_IMPORTED_MODULE_2__["default"].setObject(SHOW_MAPPINGS_HELP_KEY, false);
        },
        onRestoreHelp: () => {
          this.setState({ showMappingsHelp: true });
          _core_store__WEBPACK_IMPORTED_MODULE_2__["default"].setObject(SHOW_MAPPINGS_HELP_KEY, true);
        },
        onChange: (mappings) => {
          onOptionsChange({
            ...options,
            jsonData: {
              ...options.jsonData,
              importConfiguration: {
                ...options.jsonData.importConfiguration,
                loki: {
                  mappings: mappings.map(_parseLokiLabelMappings__WEBPACK_IMPORTED_MODULE_6__.fromString)
                }
              }
            }
          });
        }
      }
    ));
  }
  get currentGraphiteVersion() {
    return this.props.options.jsonData.graphiteVersion || _versions__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_GRAPHITE_VERSION;
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/configuration/MappingsConfiguration.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MappingsConfiguration: () => (/* binding */ MappingsConfiguration)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _MappingsHelp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/configuration/MappingsHelp.tsx");




const MappingsConfiguration = (props) => {
  const [mappings, setMappings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.mappings || []);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "page-heading" }, "Label mappings"), !props.showHelp && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { fill: "text", onClick: props.onRestoreHelp }, "Learn how label mappings work")), props.showHelp && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MappingsHelp__WEBPACK_IMPORTED_MODULE_1__["default"], { onDismiss: props.onDismiss }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Box, { marginBottom: 5 }, mappings.map((mapping, i) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, { key: i }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineField, { label: "Mapping (".concat(i + 1, ")") }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input,
    {
      width: 50,
      onChange: (changeEvent) => {
        let newMappings = mappings.concat();
        newMappings[i] = changeEvent.target.value;
        setMappings(newMappings);
      },
      onBlur: () => {
        props.onChange(mappings);
      },
      placeholder: "e.g. test.metric.(labelName).*",
      value: mapping
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button,
    {
      type: "button",
      "aria-label": "Remove header",
      variant: "secondary",
      size: "xs",
      onClick: (_) => {
        let newMappings = mappings.concat();
        newMappings.splice(i, 1);
        setMappings(newMappings);
        props.onChange(newMappings);
      }
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Icon, { name: "trash-alt" })
  ))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button,
    {
      variant: "secondary",
      icon: "plus",
      type: "button",
      onClick: () => {
        setMappings([...mappings, ""]);
      }
    },
    "Add label mapping"
  )));
};


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/configuration/MappingsHelp.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MappingsHelp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");



function MappingsHelp(props) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { severity: "info", title: "How to map Graphite metrics to labels?", onRemove: props.onDismiss }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Mappings are currently supported only between Graphite and Loki queries."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "When you switch your data source from Graphite to Loki, your queries are mapped according to the mappings defined in the example below. To define a mapping, write the full path of the metric and replace nodes you want to map to label with the label name in parentheses. The value of the label is extracted from your Graphite query when you switch data sources."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "All tags are automatically mapped to labels regardless of the mapping configuration. Graphite matching patterns (using {}) are converted to Loki's regular expressions matching patterns. When you use functions in your queries, the metrics, and tags are extracted to match them with defined mappings."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Example: for a mapping = ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "servers.(cluster).(server).*"), ":"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Graphite query"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Mapped to Loki query"))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "alias(servers.", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("u", null, "west"), ".", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("u", null, "001"), ".cpu,1,2)")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, '{cluster="', /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("u", null, "west"), '", server="', /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("u", null, "001"), '"}'))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "alias(servers.*.", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("u", null, "{001,002}"), ".*,1,2)")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, '{server=~"', /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("u", null, "(001|002)"), '"}'))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "interpolate(seriesByTag('foo=bar', 'server=002'), inf))")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, '{foo="bar", server="002"}'))))));
}


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/configuration/parseLokiLabelMappings.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromString: () => (/* binding */ fromString),
/* harmony export */   toString: () => (/* binding */ toString)
/* harmony export */ });

function fromString(text) {
  return {
    matchers: text.split(".").map((metricNode) => {
      if (metricNode.startsWith("(") && metricNode.endsWith(")")) {
        return {
          value: "*",
          labelName: metricNode.slice(1, -1)
        };
      } else {
        return { value: metricNode };
      }
    })
  };
}
function toString(mapping) {
  return mapping.matchers.map((matcher) => {
    return matcher.labelName ? "(".concat(matcher.labelName, ")") : "".concat(matcher.value);
  }).join(".");
}


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphiteDatasource: () => (/* binding */ GraphiteDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/merge.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/throwError.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/pipe.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-data/src/types/query.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-data/src/types/datasource.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-data/src/dataframe/processDataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./packages/grafana-data/src/datetime/datemath.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./packages/grafana-data/src/utils/variables.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./packages/grafana-data/src/datetime/moment_wrapper.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _core_utils_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/utils/version.ts");
/* harmony import */ var _features_templating_template_srv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var _plugins_datasource_graphite_meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/meta.ts");
/* harmony import */ var _components_AnnotationsEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/AnnotationsEditor.tsx");
/* harmony import */ var _components_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/helpers.ts");
/* harmony import */ var _gfunc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/graphite/gfunc.ts");
/* harmony import */ var _graphite_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/graphite/graphite_query.ts");
/* harmony import */ var _migrations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/graphite/migrations.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/graphite/types.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/graphite/utils.ts");
/* harmony import */ var _versions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/graphite/versions.ts");

















const GRAPHITE_TAG_COMPARATORS = {
  "=": _grafana_data__WEBPACK_IMPORTED_MODULE_12__.AbstractLabelOperator.Equal,
  "!=": _grafana_data__WEBPACK_IMPORTED_MODULE_12__.AbstractLabelOperator.NotEqual,
  "=~": _grafana_data__WEBPACK_IMPORTED_MODULE_12__.AbstractLabelOperator.EqualRegEx,
  "!=~": _grafana_data__WEBPACK_IMPORTED_MODULE_12__.AbstractLabelOperator.NotEqualRegEx
};
function convertGlobToRegEx(text) {
  if (text.includes("*") || text.includes("{")) {
    return "^" + text.replace(/\*/g, ".*").replace(/\{/g, "(").replace(/}/g, ")").replace(/,/g, "|");
  } else {
    return text;
  }
}
class GraphiteDatasource extends _grafana_data__WEBPACK_IMPORTED_MODULE_13__.DataSourceApi {
  constructor(instanceSettings, templateSrv = (0,_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)()) {
    var _a, _b;
    super(instanceSettings);
    this.templateSrv = templateSrv;
    this.funcDefs = null;
    this.funcDefsPromise = null;
    this.requestCounter = 100;
    this.convertResponseToDataFrames = (result) => {
      const data = [];
      if (!result || !result.data) {
        return { data };
      }
      const series = result.data.series || result.data;
      if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(series)) {
        throw { message: "Missing series in result", data: result };
      }
      for (let i = 0; i < series.length; i++) {
        const s = series[i];
        s.title = s.target;
        for (let y = 0; y < s.datapoints.length; y++) {
          s.datapoints[y][1] *= 1e3;
        }
        const frame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_14__.toDataFrame)(s);
        if (s.meta) {
          frame.meta = {
            custom: {
              requestMetaList: result.data.meta,
              // info for the whole request
              seriesMetaList: s.meta
              // Array of metadata
            }
          };
          if (this.rollupIndicatorEnabled) {
            const rollupNotice = (0,_plugins_datasource_graphite_meta__WEBPACK_IMPORTED_MODULE_3__.getRollupNotice)(s.meta);
            const runtimeNotice = (0,_plugins_datasource_graphite_meta__WEBPACK_IMPORTED_MODULE_3__.getRuntimeConsolidationNotice)(s.meta);
            if (rollupNotice) {
              frame.meta.notices = [rollupNotice];
            } else if (runtimeNotice) {
              frame.meta.notices = [runtimeNotice];
            }
          }
          if (i === 0 && result.data.meta.stats) {
            frame.meta.stats = this.getRequestStats(result.data.meta);
          }
        }
        data.push(frame);
      }
      return { data };
    };
    this.basicAuth = instanceSettings.basicAuth;
    this.url = instanceSettings.url;
    this.name = instanceSettings.name;
    this.graphiteVersion = instanceSettings.jsonData.graphiteVersion || _versions__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_GRAPHITE_VERSION;
    this.metricMappings = ((_b = (_a = instanceSettings.jsonData.importConfiguration) == null ? void 0 : _a.loki) == null ? void 0 : _b.mappings) || [];
    this.isMetricTank = instanceSettings.jsonData.graphiteType === _types__WEBPACK_IMPORTED_MODULE_9__.GraphiteType.Metrictank;
    this.supportsTags = supportsTags(this.graphiteVersion);
    this.cacheTimeout = instanceSettings.cacheTimeout;
    this.rollupIndicatorEnabled = instanceSettings.jsonData.rollupIndicatorEnabled;
    this.withCredentials = instanceSettings.withCredentials;
    this.funcDefs = null;
    this.funcDefsPromise = null;
    this._seriesRefLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.annotations = {
      QueryEditor: _components_AnnotationsEditor__WEBPACK_IMPORTED_MODULE_4__.AnnotationEditor,
      prepareAnnotation: _migrations__WEBPACK_IMPORTED_MODULE_8__.prepareAnnotation
    };
  }
  getQueryOptionsInfo() {
    return {
      maxDataPoints: true,
      cacheTimeout: true,
      links: [
        {
          text: "Help",
          url: "http://docs.grafana.org/features/datasources/graphite/#using-graphite-in-grafana"
        }
      ]
    };
  }
  getImportQueryConfiguration() {
    return {
      loki: {
        mappings: this.metricMappings
      }
    };
  }
  async exportToAbstractQueries(queries) {
    return queries.map((query) => this.exportToAbstractQuery(query));
  }
  exportToAbstractQuery(query) {
    const graphiteQuery = new _graphite_query__WEBPACK_IMPORTED_MODULE_7__["default"](
      this,
      {
        ...query,
        target: query.target || "",
        textEditor: false
      },
      (0,_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)()
    );
    graphiteQuery.parseTarget();
    let labels = [];
    const config = this.getImportQueryConfiguration().loki;
    if (graphiteQuery.seriesByTagUsed) {
      graphiteQuery.tags.forEach((tag) => {
        labels.push({
          name: tag.key,
          operator: GRAPHITE_TAG_COMPARATORS[tag.operator],
          value: tag.value
        });
      });
    } else {
      const targetNodes = graphiteQuery.segments.map((segment) => segment.value);
      let mappings = config.mappings.filter((mapping) => mapping.matchers.length <= targetNodes.length);
      for (let mapping of mappings) {
        const matchers = mapping.matchers.concat();
        matchers.every((matcher, index) => {
          if (matcher.labelName) {
            let value = targetNodes[index];
            if (value === "*") {
              return true;
            }
            const converted = convertGlobToRegEx(value);
            labels.push({
              name: matcher.labelName,
              operator: converted !== value ? _grafana_data__WEBPACK_IMPORTED_MODULE_12__.AbstractLabelOperator.EqualRegEx : _grafana_data__WEBPACK_IMPORTED_MODULE_12__.AbstractLabelOperator.Equal,
              value: converted
            });
            return true;
          }
          return targetNodes[index] === matcher.value || matcher.value === "*";
        });
      }
    }
    return {
      refId: query.refId,
      labelMatchers: labels
    };
  }
  query(options) {
    if (options.targets.some((target) => target.fromAnnotations)) {
      const streams = [];
      for (const target of options.targets) {
        streams.push(
          new rxjs__WEBPACK_IMPORTED_MODULE_15__.Observable((subscriber) => {
            this.annotationEvents(options.range, target).then((events) => subscriber.next({ data: [(0,_grafana_data__WEBPACK_IMPORTED_MODULE_14__.toDataFrame)(events)] })).catch((ex) => subscriber.error(new Error(ex))).finally(() => subscriber.complete());
          })
        );
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(...streams);
    }
    const graphOptions = {
      from: this.translateTime(options.range.from, false, options.timezone),
      until: this.translateTime(options.range.to, true, options.timezone),
      targets: options.targets,
      format: options.format,
      cacheTimeout: options.cacheTimeout || this.cacheTimeout,
      maxDataPoints: options.maxDataPoints
    };
    const params = this.buildGraphiteParams(graphOptions, options.scopedVars);
    if (params.length === 0) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)({ data: [] });
    }
    if (this.isMetricTank) {
      params.push("meta=true");
    }
    const httpOptions = {
      method: "POST",
      url: "/render",
      data: params.join("&"),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    this.addTracingHeaders(httpOptions, options);
    if (options.panelId) {
      httpOptions.requestId = this.name + ".panelId." + options.panelId;
    }
    return this.doGraphiteRequest(httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(this.convertResponseToDataFrames));
  }
  addTracingHeaders(httpOptions, options) {
    const proxyMode = !this.url.match(/^http/);
    if (!httpOptions.headers) {
      httpOptions.headers = {};
    }
    if (proxyMode) {
      if (options.dashboardId) {
        httpOptions.headers["X-Dashboard-Id"] = options.dashboardId;
      }
      if (options.panelId) {
        httpOptions.headers["X-Panel-Id"] = options.panelId;
      }
      if (options.panelPluginId) {
        httpOptions.headers["X-Panel-Plugin-Id"] = options.panelPluginId;
      }
    }
  }
  getRequestStats(meta) {
    const stats = [];
    for (const key in meta.stats) {
      let unit = void 0;
      if (key.endsWith(".ms")) {
        unit = "ms";
      }
      stats.push({ displayName: key, value: meta.stats[key], unit });
    }
    return stats;
  }
  parseTags(tagString) {
    let tags = [];
    tags = tagString.split(",");
    if (tags.length === 1) {
      tags = tagString.split(" ");
      if (tags[0] === "") {
        tags = [];
      }
    }
    return tags;
  }
  interpolateVariablesInQueries(queries, scopedVars) {
    let expandedQueries = queries;
    if (queries && queries.length > 0) {
      expandedQueries = queries.map((query) => {
        var _a;
        const expandedQuery = {
          ...query,
          datasource: this.getRef(),
          target: this.templateSrv.replace((_a = query.target) != null ? _a : "", scopedVars)
        };
        return expandedQuery;
      });
    }
    return expandedQueries;
  }
  annotationEvents(range, target) {
    var _a;
    if (target.target) {
      const targetAnnotation = this.templateSrv.replace(target.target, {}, "glob");
      const graphiteQuery = {
        range,
        targets: [{ target: targetAnnotation }],
        format: "json",
        maxDataPoints: 100
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.lastValueFrom)(
        this.query(graphiteQuery).pipe(
          (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)((result) => {
            const list = [];
            for (let i = 0; i < result.data.length; i++) {
              const target2 = result.data[i];
              for (let y = 0; y < target2.length; y++) {
                const time = target2.fields[0].values[y];
                const value = target2.fields[1].values[y];
                if (!value) {
                  continue;
                }
                list.push({
                  annotation: target2,
                  time,
                  title: target2.name
                });
              }
            }
            return list;
          })
        )
      );
    } else {
      const tags = this.templateSrv.replace((_a = target.tags) == null ? void 0 : _a.join(" "));
      return this.events({ range, tags }).then((results) => {
        const list = [];
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(results.data)) {
          console.error("Unable to get annotations from ".concat(results.url, "."));
          return [];
        }
        for (let i = 0; i < results.data.length; i++) {
          const e = results.data[i];
          let tags2 = e.tags;
          if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(e.tags)) {
            tags2 = this.parseTags(e.tags);
          }
          list.push({
            annotation: target,
            time: e.when * 1e3,
            title: e.what,
            tags: tags2,
            text: e.data
          });
        }
        return list;
      });
    }
  }
  events(options) {
    try {
      let tags = "";
      if (options.tags) {
        tags = "&tags=" + options.tags;
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.lastValueFrom)(
        this.doGraphiteRequest({
          method: "GET",
          url: "/events/get_data?from=" + this.translateTime(options.range.raw.from, false, options.timezone) + "&until=" + this.translateTime(options.range.raw.to, true, options.timezone) + tags
        })
      );
    } catch (err) {
      return Promise.reject(err);
    }
  }
  targetContainsTemplate(target) {
    var _a;
    return this.templateSrv.containsTemplate((_a = target.target) != null ? _a : "");
  }
  translateTime(date, roundUp, timezone) {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(date)) {
      if (date === "now") {
        return "now";
      } else if (date.indexOf("now-") >= 0 && date.indexOf("/") === -1) {
        date = date.substring(3);
        date = date.replace("m", "min");
        date = date.replace("M", "mon");
        return date;
      }
      date = _grafana_data__WEBPACK_IMPORTED_MODULE_20__.parse(date, roundUp, timezone);
    }
    if (roundUp) {
      if (date.get("s")) {
        date.add(1, "s");
      }
    } else if (roundUp === false) {
      if (date.get("s")) {
        date.subtract(1, "s");
      }
    }
    return date.unix();
  }
  metricFindQuery(findQuery, optionalOptions) {
    var _a;
    const options = optionalOptions || {};
    const queryObject = (0,_components_helpers__WEBPACK_IMPORTED_MODULE_5__.convertToGraphiteQueryObject)(findQuery);
    if (queryObject.queryType === _types__WEBPACK_IMPORTED_MODULE_9__.GraphiteQueryType.Value || queryObject.queryType === _types__WEBPACK_IMPORTED_MODULE_9__.GraphiteQueryType.MetricName) {
      return this.requestMetricRender(queryObject, options, queryObject.queryType);
    }
    let query = (_a = queryObject.target) != null ? _a : "";
    let interpolatedQuery = this.templateSrv.replace(
      query,
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_21__.getSearchFilterScopedVar)({ query, wildcardChar: "", options: optionalOptions })
    );
    let allParams = interpolatedQuery.match(/^tag_values\((.*)\)$/);
    let expressions = allParams ? allParams[1].split(/,(?![^{]*\})/).filter((p) => !!p) : void 0;
    if (expressions) {
      options.limit = 1e4;
      return this.getTagValuesAutoComplete(expressions.slice(1), expressions[0], void 0, options);
    }
    allParams = interpolatedQuery.match(/^tags\((.*)\)$/);
    expressions = allParams ? allParams[1].split(",").filter((p) => !!p) : void 0;
    if (expressions) {
      options.limit = 1e4;
      return this.getTagsAutoComplete(expressions, void 0, options);
    }
    let useExpand = query.match(/^expand\((.*)\)$/);
    query = useExpand ? useExpand[1] : query;
    interpolatedQuery = this.templateSrv.replace(
      query,
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_21__.getSearchFilterScopedVar)({ query, wildcardChar: "*", options: optionalOptions })
    );
    let range;
    if (options.range) {
      range = {
        from: this.translateTime(options.range.from, false, options.timezone),
        until: this.translateTime(options.range.to, true, options.timezone)
      };
    }
    if (useExpand) {
      return this.requestMetricExpand(interpolatedQuery, options.requestId, range);
    } else {
      return this.requestMetricFind(interpolatedQuery, options.requestId, range);
    }
  }
  /**
   * Search for metrics matching giving pattern using /metrics/render endpoint.
   * It will return all possible values or names and parse them based on queryType.
   * For example:
   *
   * queryType: GraphiteQueryType.Value
   * query: groupByNode(movingAverage(apps.country.IE.counters.requests.count, 10), 2, 'sum')
   * result: 239.4, 233.4, 230.8, 230.4, 233.9, 238, 239.8, 236.8, 235.8
   *
   * queryType: GraphiteQueryType.MetricName
   * query: highestAverage(carbon.agents.*.*, 5)
   * result: carbon.agents.aa6338c54341-a.memUsage, carbon.agents.aa6338c54341-a.committedPoints, carbon.agents.aa6338c54341-a.updateOperations, carbon.agents.aa6338c54341-a.metricsReceived, carbon.agents.aa6338c54341-a.activeConnections
   */
  async requestMetricRender(queryObject, options, queryType) {
    var _a, _b;
    const requestId = (_a = options.requestId) != null ? _a : "Q".concat(this.requestCounter++);
    const range = (_b = options.range) != null ? _b : {
      from: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_22__.dateTime)().subtract(6, "hour"),
      to: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_22__.dateTime)(),
      raw: {
        from: "now - 6h",
        to: "now"
      }
    };
    const queryReq = {
      app: "graphite-variable-editor",
      interval: "1s",
      intervalMs: 1e4,
      startTime: Date.now(),
      targets: [{ ...queryObject }],
      timezone: "browser",
      scopedVars: {},
      requestId,
      range
    };
    const data = await (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.lastValueFrom)(this.query(queryReq));
    let result;
    if (queryType === _types__WEBPACK_IMPORTED_MODULE_9__.GraphiteQueryType.Value) {
      result = data.data[0].fields[1].values.filter((f) => !!f).map((v) => ({
        text: v.toString(),
        value: v,
        expandable: false
      }));
    } else if (queryType === _types__WEBPACK_IMPORTED_MODULE_9__.GraphiteQueryType.MetricName) {
      result = data.data.map((series) => ({
        text: series.name,
        value: series.name,
        expandable: false
      }));
    } else {
      result = [];
    }
    return Promise.resolve(result);
  }
  /**
   * Search for metrics matching giving pattern using /metrics/find endpoint. It will
   * return all possible values at the last level of the query, for example:
   *
   * metrics: prod.servers.001.cpu, prod.servers.002.cpu
   * query: *.servers.*
   * result: 001, 002
   *
   * For more complex searches use requestMetricExpand
   */
  requestMetricFind(query, requestId, range) {
    const params = {};
    if (range) {
      params.from = range.from;
      params.until = range.until;
    }
    const httpOptions = {
      method: "POST",
      url: "/metrics/find",
      params,
      data: "query=".concat(query),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      // for cancellations
      requestId
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.lastValueFrom)(
      this.doGraphiteRequest(httpOptions).pipe(
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)((results) => {
          return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(results.data, (metric) => {
            return {
              text: metric.text,
              expandable: metric.expandable ? true : false
            };
          });
        })
      )
    );
  }
  /**
   * Search for metrics matching giving pattern using /metrics/expand endpoint.
   * The result will contain all metrics (with full name) matching provided query.
   * It's a more flexible version of /metrics/find endpoint (@see requestMetricFind)
   */
  requestMetricExpand(query, requestId, range) {
    const params = { query };
    if (range) {
      params.from = range.from;
      params.until = range.until;
    }
    const httpOptions = {
      method: "GET",
      url: "/metrics/expand",
      params,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      // for cancellations
      requestId
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.lastValueFrom)(
      this.doGraphiteRequest(httpOptions).pipe(
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)((results) => {
          return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(results.data.results, (metric) => {
            return {
              text: metric,
              expandable: false
            };
          });
        })
      )
    );
  }
  getTags(optionalOptions) {
    const options = optionalOptions || {};
    const params = {};
    if (options.range) {
      params.from = this.translateTime(options.range.from, false, options.timezone);
      params.until = this.translateTime(options.range.to, true, options.timezone);
    }
    const httpOptions = {
      method: "GET",
      url: "/tags",
      // for cancellations
      requestId: options.requestId,
      params
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.lastValueFrom)(
      this.doGraphiteRequest(httpOptions).pipe(
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)((results) => {
          return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(results.data, (tag) => {
            return {
              text: tag.tag,
              id: tag.id
            };
          });
        })
      )
    );
  }
  getTagValues(options = {}) {
    const params = {};
    if (options.range) {
      params.from = this.translateTime(options.range.from, false, options.timezone);
      params.until = this.translateTime(options.range.to, true, options.timezone);
    }
    const httpOptions = {
      method: "GET",
      url: "/tags/" + this.templateSrv.replace(options.key),
      // for cancellations
      requestId: options.requestId,
      params
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.lastValueFrom)(
      this.doGraphiteRequest(httpOptions).pipe(
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)((results) => {
          if (results.data && results.data.values) {
            return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(results.data.values, (value) => {
              return {
                text: value.value,
                id: value.id
              };
            });
          } else {
            return [];
          }
        })
      )
    );
  }
  getTagsAutoComplete(expressions, tagPrefix, optionalOptions) {
    const options = optionalOptions || {};
    const params = {
      expr: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(expressions, (expression) => this.templateSrv.replace((expression || "").trim()))
    };
    if (tagPrefix) {
      params.tagPrefix = tagPrefix;
    }
    if (options.limit) {
      params.limit = options.limit;
    }
    if (options.range) {
      params.from = this.translateTime(options.range.from, false, options.timezone);
      params.until = this.translateTime(options.range.to, true, options.timezone);
    }
    const httpOptions = {
      method: "GET",
      url: "/tags/autoComplete/tags",
      params,
      // for cancellations
      requestId: options.requestId
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.lastValueFrom)(this.doGraphiteRequest(httpOptions).pipe(mapToTags()));
  }
  getTagValuesAutoComplete(expressions, tag, valuePrefix, optionalOptions) {
    const options = optionalOptions || {};
    const params = {
      expr: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(expressions, (expression) => this.templateSrv.replace((expression || "").trim())),
      tag: this.templateSrv.replace((tag || "").trim())
    };
    if (valuePrefix) {
      params.valuePrefix = valuePrefix;
    }
    if (options.limit) {
      params.limit = options.limit;
    }
    if (options.range) {
      params.from = this.translateTime(options.range.from, false, options.timezone);
      params.until = this.translateTime(options.range.to, true, options.timezone);
    }
    const httpOptions = {
      method: "GET",
      url: "/tags/autoComplete/values",
      params,
      // for cancellations
      requestId: options.requestId
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.lastValueFrom)(this.doGraphiteRequest(httpOptions).pipe(mapToTags()));
  }
  getVersion(optionalOptions) {
    const options = optionalOptions || {};
    const httpOptions = {
      method: "GET",
      url: "/version",
      requestId: options.requestId
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.lastValueFrom)(
      this.doGraphiteRequest(httpOptions).pipe(
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)((results) => {
          if (results.data) {
            const semver = new _core_utils_version__WEBPACK_IMPORTED_MODULE_1__.SemVersion(results.data);
            return semver.isValid() ? results.data : "";
          }
          return "";
        }),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.catchError)(() => {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)("");
        })
      )
    );
  }
  createFuncInstance(funcDef, options) {
    return _gfunc__WEBPACK_IMPORTED_MODULE_6__["default"].createFuncInstance(funcDef, options, this.funcDefs);
  }
  getFuncDef(name) {
    return _gfunc__WEBPACK_IMPORTED_MODULE_6__["default"].getFuncDef(name, this.funcDefs);
  }
  waitForFuncDefsLoaded() {
    return this.getFuncDefs();
  }
  getFuncDefs() {
    if (this.funcDefsPromise !== null) {
      return this.funcDefsPromise;
    }
    if (!supportsFunctionIndex(this.graphiteVersion)) {
      this.funcDefs = _gfunc__WEBPACK_IMPORTED_MODULE_6__["default"].getFuncDefs(this.graphiteVersion);
      this.funcDefsPromise = Promise.resolve(this.funcDefs);
      return this.funcDefsPromise;
    }
    const httpOptions = {
      method: "GET",
      url: "/functions",
      // add responseType because if this is not defined,
      // backend_srv defaults to json
      responseType: "text"
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.lastValueFrom)(
      this.doGraphiteRequest(httpOptions).pipe(
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)((results) => {
          const fixedData = JSON.parse(results.data.replace(/"default": ?Infinity/g, '"default": 1e9999'));
          this.funcDefs = _gfunc__WEBPACK_IMPORTED_MODULE_6__["default"].parseFuncDefs(fixedData);
          return this.funcDefs;
        }),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.catchError)((error) => {
          console.error("Fetching graphite functions error", error);
          this.funcDefs = _gfunc__WEBPACK_IMPORTED_MODULE_6__["default"].getFuncDefs(this.graphiteVersion);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(this.funcDefs);
        })
      )
    );
  }
  testDatasource() {
    const query = {
      app: "graphite",
      interval: "10ms",
      intervalMs: 10,
      requestId: "reqId",
      scopedVars: {},
      startTime: 0,
      timezone: "browser",
      panelId: 3,
      rangeRaw: { from: "now-1h", to: "now" },
      range: {
        from: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_22__.dateTime)("now-1h"),
        to: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_22__.dateTime)("now"),
        raw: { from: "now-1h", to: "now" }
      },
      targets: [{ refId: "A", target: "constantLine(100)" }],
      maxDataPoints: 300
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.lastValueFrom)(this.query(query)).then(() => ({ status: "success", message: "Data source is working" }));
  }
  doGraphiteRequest(options) {
    if (this.basicAuth || this.withCredentials) {
      options.withCredentials = true;
    }
    if (this.basicAuth) {
      options.headers = options.headers || {};
      options.headers.Authorization = this.basicAuth;
    }
    options.url = this.url + options.url;
    options.inspect = { type: "graphite" };
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_24__.getBackendSrv)().fetch(options).pipe(
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.catchError)((err) => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.throwError)((0,_utils__WEBPACK_IMPORTED_MODULE_10__.reduceError)(err));
      })
    );
  }
  buildGraphiteParams(options, scopedVars) {
    const graphiteOptions = ["from", "until", "rawData", "format", "maxDataPoints", "cacheTimeout"];
    const cleanOptions = [], targets = {};
    let target, targetValue, i;
    const regex = /\#([A-Z])/g;
    const intervalFormatFixRegex = /'(\d+)m'/gi;
    let hasTargets = false;
    options["format"] = "json";
    function fixIntervalFormat(match) {
      return match.replace("m", "min").replace("M", "mon");
    }
    for (i = 0; i < options.targets.length; i++) {
      target = options.targets[i];
      if (!target.target) {
        continue;
      }
      if (!target.refId) {
        target.refId = this._seriesRefLetters[i];
      }
      targetValue = this.templateSrv.replace(target.target, scopedVars);
      targetValue = targetValue.replace(intervalFormatFixRegex, fixIntervalFormat);
      targets[target.refId] = targetValue;
    }
    function nestedSeriesRegexReplacer(match, g1) {
      return targets[g1] || match;
    }
    for (i = 0; i < options.targets.length; i++) {
      target = options.targets[i];
      if (!target.target) {
        continue;
      }
      targetValue = targets[target.refId];
      targetValue = targetValue.replace(regex, nestedSeriesRegexReplacer);
      targets[target.refId] = targetValue;
      if (!target.hide) {
        hasTargets = true;
        cleanOptions.push("target=" + encodeURIComponent(targetValue));
      }
    }
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(options, (value, key) => {
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf)(graphiteOptions, key) === -1) {
        return;
      }
      if (value) {
        cleanOptions.push(key + "=" + encodeURIComponent(value));
      }
    });
    if (!hasTargets) {
      return [];
    }
    return cleanOptions;
  }
}
function supportsTags(version) {
  return (0,_core_utils_version__WEBPACK_IMPORTED_MODULE_1__.isVersionGtOrEq)(version, "1.1");
}
function supportsFunctionIndex(version) {
  return (0,_core_utils_version__WEBPACK_IMPORTED_MODULE_1__.isVersionGtOrEq)(version, "1.1");
}
function mapToTags() {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_26__.pipe)(
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)((results) => {
      if (results.data) {
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(results.data, (value) => {
          return { text: value };
        });
      } else {
        return [];
      }
    })
  );
}


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/gfunc.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FuncInstance: () => (/* binding */ FuncInstance),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_utils_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/utils/version.ts");



const index = {};
function addFuncDef(funcDef) {
  funcDef.params = funcDef.params || [];
  funcDef.defaultParams = funcDef.defaultParams || [];
  index[funcDef.name] = funcDef;
  if (funcDef.shortName) {
    index[funcDef.shortName] = funcDef;
  }
}
const optionalSeriesRefArgs = [{ name: "other", type: "value_or_series", optional: true, multiple: true }];
addFuncDef({
  name: "scaleToSeconds",
  category: "Transform",
  params: [{ name: "seconds", type: "int" }],
  defaultParams: [1]
});
addFuncDef({
  name: "perSecond",
  category: "Transform",
  params: [{ name: "max value", type: "int", optional: true }],
  defaultParams: []
});
addFuncDef({
  name: "holtWintersForecast",
  category: "Calculate"
});
addFuncDef({
  name: "holtWintersConfidenceBands",
  category: "Calculate",
  params: [{ name: "delta", type: "int" }],
  defaultParams: [3]
});
addFuncDef({
  name: "holtWintersAberration",
  category: "Calculate",
  params: [{ name: "delta", type: "int" }],
  defaultParams: [3]
});
addFuncDef({
  name: "nPercentile",
  category: "Calculate",
  params: [{ name: "Nth percentile", type: "int" }],
  defaultParams: [95]
});
addFuncDef({
  name: "diffSeries",
  params: optionalSeriesRefArgs,
  defaultParams: ["#A"],
  category: "Combine"
});
addFuncDef({
  name: "stddevSeries",
  params: optionalSeriesRefArgs,
  defaultParams: [""],
  category: "Combine"
});
addFuncDef({
  name: "divideSeries",
  params: optionalSeriesRefArgs,
  defaultParams: ["#A"],
  category: "Combine"
});
addFuncDef({
  name: "multiplySeries",
  params: optionalSeriesRefArgs,
  defaultParams: ["#A"],
  category: "Combine"
});
addFuncDef({
  name: "asPercent",
  params: optionalSeriesRefArgs,
  defaultParams: ["#A"],
  category: "Combine"
});
addFuncDef({
  name: "group",
  params: optionalSeriesRefArgs,
  defaultParams: ["#A", "#B"],
  category: "Combine"
});
addFuncDef({
  name: "sumSeries",
  shortName: "sum",
  category: "Combine",
  params: optionalSeriesRefArgs,
  defaultParams: [""]
});
addFuncDef({
  name: "averageSeries",
  shortName: "avg",
  category: "Combine",
  params: optionalSeriesRefArgs,
  defaultParams: [""]
});
addFuncDef({
  name: "rangeOfSeries",
  category: "Combine"
});
addFuncDef({
  name: "percentileOfSeries",
  category: "Combine",
  params: [
    { name: "n", type: "int" },
    { name: "interpolate", type: "boolean", options: ["true", "false"] }
  ],
  defaultParams: [95, "false"]
});
addFuncDef({
  name: "sumSeriesWithWildcards",
  category: "Combine",
  params: [{ name: "node", type: "int", multiple: true }],
  defaultParams: [3]
});
addFuncDef({
  name: "maxSeries",
  shortName: "max",
  category: "Combine"
});
addFuncDef({
  name: "minSeries",
  shortName: "min",
  category: "Combine"
});
addFuncDef({
  name: "averageSeriesWithWildcards",
  category: "Combine",
  params: [{ name: "node", type: "int", multiple: true }],
  defaultParams: [3]
});
addFuncDef({
  name: "alias",
  category: "Alias",
  params: [{ name: "alias", type: "string" }],
  defaultParams: ["alias"]
});
addFuncDef({
  name: "aliasSub",
  category: "Alias",
  params: [
    { name: "search", type: "string" },
    { name: "replace", type: "string" }
  ],
  defaultParams: ["", "\\1"]
});
addFuncDef({
  name: "consolidateBy",
  category: "Special",
  params: [
    {
      name: "function",
      type: "string",
      options: ["sum", "average", "min", "max"]
    }
  ],
  defaultParams: ["max"]
});
addFuncDef({
  name: "cumulative",
  category: "Special",
  params: [],
  defaultParams: []
});
addFuncDef({
  name: "groupByNode",
  category: "Combine",
  params: [
    {
      name: "node",
      type: "int",
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
    },
    {
      name: "function",
      type: "string",
      options: ["sum", "avg", "maxSeries"]
    }
  ],
  defaultParams: [3, "sum"]
});
addFuncDef({
  name: "aliasByNode",
  category: "Alias",
  params: [
    {
      name: "node",
      type: "int",
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
      multiple: true
    }
  ],
  defaultParams: [3]
});
addFuncDef({
  name: "substr",
  category: "Special",
  params: [
    {
      name: "start",
      type: "int",
      options: [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
    },
    {
      name: "stop",
      type: "int",
      options: [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
    }
  ],
  defaultParams: [0, 0]
});
addFuncDef({
  name: "sortByName",
  category: "Sorting",
  params: [
    {
      name: "natural",
      type: "boolean",
      options: ["true", "false"],
      optional: true
    }
  ],
  defaultParams: ["false"]
});
addFuncDef({
  name: "sortByMaxima",
  category: "Sorting"
});
addFuncDef({
  name: "sortByMinima",
  category: "Sorting"
});
addFuncDef({
  name: "sortByTotal",
  category: "Sorting"
});
addFuncDef({
  name: "aliasByMetric",
  category: "Alias"
});
addFuncDef({
  name: "randomWalk",
  fake: true,
  category: "Special",
  params: [{ name: "name", type: "string" }],
  defaultParams: ["randomWalk"]
});
addFuncDef({
  name: "countSeries",
  category: "Combine"
});
addFuncDef({
  name: "constantLine",
  category: "Special",
  params: [{ name: "value", type: "int" }],
  defaultParams: [10]
});
addFuncDef({
  name: "cactiStyle",
  category: "Special"
});
addFuncDef({
  name: "keepLastValue",
  category: "Transform",
  params: [{ name: "n", type: "int" }],
  defaultParams: [100]
});
addFuncDef({
  name: "changed",
  category: "Special",
  params: [],
  defaultParams: []
});
addFuncDef({
  name: "scale",
  category: "Transform",
  params: [{ name: "factor", type: "int" }],
  defaultParams: [1]
});
addFuncDef({
  name: "offset",
  category: "Transform",
  params: [{ name: "amount", type: "int" }],
  defaultParams: [10]
});
addFuncDef({
  name: "transformNull",
  category: "Transform",
  params: [{ name: "amount", type: "int" }],
  defaultParams: [0]
});
addFuncDef({
  name: "integral",
  category: "Transform"
});
addFuncDef({
  name: "derivative",
  category: "Transform"
});
addFuncDef({
  name: "nonNegativeDerivative",
  category: "Transform",
  params: [{ name: "max value or 0", type: "int", optional: true }],
  defaultParams: [""]
});
addFuncDef({
  name: "timeShift",
  category: "Transform",
  params: [
    {
      name: "amount",
      type: "select",
      options: ["1h", "6h", "12h", "1d", "2d", "7d", "14d", "30d"]
    }
  ],
  defaultParams: ["1d"]
});
addFuncDef({
  name: "timeStack",
  category: "Transform",
  params: [
    {
      name: "timeShiftUnit",
      type: "select",
      options: ["1h", "6h", "12h", "1d", "2d", "7d", "14d", "30d"]
    },
    { name: "timeShiftStart", type: "int" },
    { name: "timeShiftEnd", type: "int" }
  ],
  defaultParams: ["1d", 0, 7]
});
addFuncDef({
  name: "summarize",
  category: "Transform",
  params: [
    { name: "interval", type: "string" },
    {
      name: "func",
      type: "select",
      options: ["sum", "avg", "min", "max", "last"]
    },
    {
      name: "alignToFrom",
      type: "boolean",
      optional: true,
      options: ["false", "true"]
    }
  ],
  defaultParams: ["1h", "sum", "false"]
});
addFuncDef({
  name: "smartSummarize",
  category: "Transform",
  params: [
    { name: "interval", type: "string" },
    {
      name: "func",
      type: "select",
      options: ["sum", "avg", "min", "max", "last"]
    }
  ],
  defaultParams: ["1h", "sum"]
});
addFuncDef({
  name: "absolute",
  category: "Transform"
});
addFuncDef({
  name: "hitcount",
  category: "Transform",
  params: [{ name: "interval", type: "string" }],
  defaultParams: ["10s"]
});
addFuncDef({
  name: "log",
  category: "Transform",
  params: [{ name: "base", type: "int" }],
  defaultParams: ["10"]
});
addFuncDef({
  name: "averageAbove",
  category: "Filter Series",
  params: [{ name: "n", type: "int" }],
  defaultParams: [25]
});
addFuncDef({
  name: "averageBelow",
  category: "Filter Series",
  params: [{ name: "n", type: "int" }],
  defaultParams: [25]
});
addFuncDef({
  name: "currentAbove",
  category: "Filter Series",
  params: [{ name: "n", type: "int" }],
  defaultParams: [25]
});
addFuncDef({
  name: "currentBelow",
  category: "Filter Series",
  params: [{ name: "n", type: "int" }],
  defaultParams: [25]
});
addFuncDef({
  name: "maximumAbove",
  category: "Filter Series",
  params: [{ name: "value", type: "int" }],
  defaultParams: [0]
});
addFuncDef({
  name: "maximumBelow",
  category: "Filter Series",
  params: [{ name: "value", type: "int" }],
  defaultParams: [0]
});
addFuncDef({
  name: "minimumAbove",
  category: "Filter Series",
  params: [{ name: "value", type: "int" }],
  defaultParams: [0]
});
addFuncDef({
  name: "minimumBelow",
  category: "Filter Series",
  params: [{ name: "value", type: "int" }],
  defaultParams: [0]
});
addFuncDef({
  name: "limit",
  category: "Filter Series",
  params: [{ name: "n", type: "int" }],
  defaultParams: [5]
});
addFuncDef({
  name: "mostDeviant",
  category: "Filter Series",
  params: [{ name: "n", type: "int" }],
  defaultParams: [10]
});
addFuncDef({
  name: "exclude",
  category: "Filter Series",
  params: [{ name: "exclude", type: "string" }],
  defaultParams: ["exclude"]
});
addFuncDef({
  name: "highestCurrent",
  category: "Filter Series",
  params: [{ name: "count", type: "int" }],
  defaultParams: [5]
});
addFuncDef({
  name: "highestMax",
  category: "Filter Series",
  params: [{ name: "count", type: "int" }],
  defaultParams: [5]
});
addFuncDef({
  name: "lowestCurrent",
  category: "Filter Series",
  params: [{ name: "count", type: "int" }],
  defaultParams: [5]
});
addFuncDef({
  name: "movingAverage",
  category: "Calculate",
  params: [
    {
      name: "windowSize",
      type: "int_or_interval",
      options: ["5", "7", "10", "5min", "10min", "30min", "1hour"]
    }
  ],
  defaultParams: [10]
});
addFuncDef({
  name: "movingMedian",
  category: "Calculate",
  params: [
    {
      name: "windowSize",
      type: "int_or_interval",
      options: ["5", "7", "10", "5min", "10min", "30min", "1hour"]
    }
  ],
  defaultParams: ["5"]
});
addFuncDef({
  name: "stdev",
  category: "Calculate",
  params: [
    { name: "n", type: "int" },
    { name: "tolerance", type: "int" }
  ],
  defaultParams: [5, 0.1]
});
addFuncDef({
  name: "highestAverage",
  category: "Filter Series",
  params: [{ name: "count", type: "int" }],
  defaultParams: [5]
});
addFuncDef({
  name: "lowestAverage",
  category: "Filter Series",
  params: [{ name: "count", type: "int" }],
  defaultParams: [5]
});
addFuncDef({
  name: "removeAbovePercentile",
  category: "Filter Data",
  params: [{ name: "n", type: "int" }],
  defaultParams: [5]
});
addFuncDef({
  name: "removeAboveValue",
  category: "Filter Data",
  params: [{ name: "n", type: "int" }],
  defaultParams: [5]
});
addFuncDef({
  name: "removeBelowPercentile",
  category: "Filter Data",
  params: [{ name: "n", type: "int" }],
  defaultParams: [5]
});
addFuncDef({
  name: "removeBelowValue",
  category: "Filter Data",
  params: [{ name: "n", type: "int" }],
  defaultParams: [5]
});
addFuncDef({
  name: "useSeriesAbove",
  category: "Filter Series",
  params: [
    { name: "value", type: "int" },
    { name: "search", type: "string" },
    { name: "replace", type: "string" }
  ],
  defaultParams: [0, "search", "replace"]
});
addFuncDef({
  name: "aggregateLine",
  category: "Calculate",
  params: [
    {
      name: "func",
      type: "select",
      options: ["sum", "avg", "min", "max", "last"]
    }
  ],
  defaultParams: ["avg"],
  version: "1.0"
});
addFuncDef({
  name: "averageOutsidePercentile",
  category: "Filter Series",
  params: [{ name: "n", type: "int" }],
  defaultParams: [95],
  version: "1.0"
});
addFuncDef({
  name: "delay",
  category: "Transform",
  params: [{ name: "steps", type: "int" }],
  defaultParams: [1],
  version: "1.0"
});
addFuncDef({
  name: "exponentialMovingAverage",
  category: "Calculate",
  params: [
    {
      name: "windowSize",
      type: "int_or_interval",
      options: ["5", "7", "10", "5min", "10min", "30min", "1hour"]
    }
  ],
  defaultParams: [10],
  version: "1.0"
});
addFuncDef({
  name: "fallbackSeries",
  category: "Special",
  params: [{ name: "fallback", type: "string" }],
  defaultParams: ["constantLine(0)"],
  version: "1.0"
});
addFuncDef({
  name: "grep",
  category: "Filter Series",
  params: [{ name: "grep", type: "string" }],
  defaultParams: ["grep"],
  version: "1.0"
});
addFuncDef({
  name: "groupByNodes",
  category: "Combine",
  params: [
    {
      name: "function",
      type: "string",
      options: ["sum", "avg", "maxSeries"]
    },
    {
      name: "node",
      type: "int",
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
      multiple: true
    }
  ],
  defaultParams: ["sum", 3],
  version: "1.0"
});
addFuncDef({
  name: "integralByInterval",
  category: "Transform",
  params: [
    {
      name: "intervalUnit",
      type: "select",
      options: ["1h", "6h", "12h", "1d", "2d", "7d", "14d", "30d"]
    }
  ],
  defaultParams: ["1d"],
  version: "1.0"
});
addFuncDef({
  name: "interpolate",
  category: "Transform",
  params: [{ name: "limit", type: "int", optional: true }],
  defaultParams: [],
  version: "1.0"
});
addFuncDef({
  name: "invert",
  category: "Transform",
  version: "1.0"
});
addFuncDef({
  name: "isNonNull",
  category: "Combine",
  version: "1.0"
});
addFuncDef({
  name: "linearRegression",
  category: "Calculate",
  params: [
    {
      name: "startSourceAt",
      type: "select",
      options: ["-1h", "-6h", "-12h", "-1d", "-2d", "-7d", "-14d", "-30d"],
      optional: true
    },
    {
      name: "endSourceAt",
      type: "select",
      options: ["-1h", "-6h", "-12h", "-1d", "-2d", "-7d", "-14d", "-30d"],
      optional: true
    }
  ],
  defaultParams: [],
  version: "1.0"
});
addFuncDef({
  name: "mapSeries",
  shortName: "map",
  params: [{ name: "node", type: "int" }],
  defaultParams: [3],
  category: "Combine",
  version: "1.0"
});
addFuncDef({
  name: "movingMin",
  category: "Calculate",
  params: [
    {
      name: "windowSize",
      type: "int_or_interval",
      options: ["5", "7", "10", "5min", "10min", "30min", "1hour"]
    }
  ],
  defaultParams: [10],
  version: "1.0"
});
addFuncDef({
  name: "movingMax",
  category: "Calculate",
  params: [
    {
      name: "windowSize",
      type: "int_or_interval",
      options: ["5", "7", "10", "5min", "10min", "30min", "1hour"]
    }
  ],
  defaultParams: [10],
  version: "1.0"
});
addFuncDef({
  name: "movingSum",
  category: "Calculate",
  params: [
    {
      name: "windowSize",
      type: "int_or_interval",
      options: ["5", "7", "10", "5min", "10min", "30min", "1hour"]
    }
  ],
  defaultParams: [10],
  version: "1.0"
});
addFuncDef({
  name: "multiplySeriesWithWildcards",
  category: "Combine",
  params: [
    {
      name: "position",
      type: "int",
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
      multiple: true
    }
  ],
  defaultParams: [2],
  version: "1.0"
});
addFuncDef({
  name: "offsetToZero",
  category: "Transform",
  version: "1.0"
});
addFuncDef({
  name: "pow",
  category: "Transform",
  params: [{ name: "factor", type: "int" }],
  defaultParams: [10],
  version: "1.0"
});
addFuncDef({
  name: "powSeries",
  category: "Transform",
  params: optionalSeriesRefArgs,
  defaultParams: [""],
  version: "1.0"
});
addFuncDef({
  name: "reduceSeries",
  shortName: "reduce",
  params: [
    {
      name: "function",
      type: "string",
      options: ["asPercent", "diffSeries", "divideSeries"]
    },
    {
      name: "reduceNode",
      type: "int",
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    },
    { name: "reduceMatchers", type: "string", multiple: true }
  ],
  defaultParams: ["asPercent", 2, "used_bytes"],
  category: "Combine",
  version: "1.0"
});
addFuncDef({
  name: "removeBetweenPercentile",
  category: "Filter Series",
  params: [{ name: "n", type: "int" }],
  defaultParams: [95],
  version: "1.0"
});
addFuncDef({
  name: "removeEmptySeries",
  category: "Filter Series",
  version: "1.0"
});
addFuncDef({
  name: "squareRoot",
  category: "Transform",
  version: "1.0"
});
addFuncDef({
  name: "timeSlice",
  category: "Transform",
  params: [
    {
      name: "startSliceAt",
      type: "select",
      options: ["-1h", "-6h", "-12h", "-1d", "-2d", "-7d", "-14d", "-30d"]
    },
    {
      name: "endSliceAt",
      type: "select",
      options: ["-1h", "-6h", "-12h", "-1d", "-2d", "-7d", "-14d", "-30d"],
      optional: true
    }
  ],
  defaultParams: ["-1h"],
  version: "1.0"
});
addFuncDef({
  name: "weightedAverage",
  category: "Combine",
  params: [
    { name: "other", type: "value_or_series", optional: true },
    {
      name: "node",
      type: "int",
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
    }
  ],
  defaultParams: ["#A", 4],
  version: "1.0"
});
addFuncDef({
  name: "seriesByTag",
  category: "Special",
  params: [{ name: "tagExpression", type: "string", multiple: true }],
  version: "1.1"
});
addFuncDef({
  name: "groupByTags",
  category: "Combine",
  params: [
    {
      name: "function",
      type: "string",
      options: ["sum", "avg", "maxSeries"]
    },
    { name: "tag", type: "string", multiple: true }
  ],
  defaultParams: ["sum", "tag"],
  version: "1.1"
});
addFuncDef({
  name: "aliasByTags",
  category: "Alias",
  params: [{ name: "tag", type: "string", multiple: true }],
  defaultParams: ["tag"],
  version: "1.1"
});
function isVersionRelatedFunction(obj, graphiteVersion) {
  return !obj.version || (0,app_core_utils_version__WEBPACK_IMPORTED_MODULE_1__.isVersionGtOrEq)(graphiteVersion, obj.version);
}
class FuncInstance {
  constructor(funcDef, options) {
    this.text = "";
    this.def = funcDef;
    this.params = [];
    if (options && options.withDefaultParams && funcDef.defaultParams) {
      this.params = funcDef.defaultParams.slice(0);
    }
    this.updateText();
  }
  render(metricExp, replaceVariables) {
    const str = this.def.name + "(";
    const parameters = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.params, (value, index2) => {
      let paramType;
      if (index2 < this.def.params.length) {
        paramType = this.def.params[index2].type;
      } else if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(this.def.params), "multiple")) {
        paramType = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(this.def.params), "type");
      }
      const neverQuotedParams = ["value_or_series", "boolean", "int", "float", "node", "int_or_infinity"];
      const neverQuotedFunctions = ["asPercent"];
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(neverQuotedParams, paramType) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(neverQuotedFunctions, this.def.name)) {
        return value;
      }
      const valueInterpolated = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(value) ? replaceVariables(value) : value;
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(["int_or_interval", "node_or_tag"], paramType) && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isFinite)(+valueInterpolated)) {
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.toString)(value);
      }
      return "'" + value + "'";
    });
    while (parameters[parameters.length - 1] === "") {
      parameters.pop();
    }
    if (metricExp) {
      parameters.unshift(metricExp);
    }
    return str + parameters.join(", ") + ")";
  }
  _hasMultipleParamsInString(strValue, index2) {
    if (strValue.indexOf(",") === -1) {
      return false;
    }
    if (this.def.params[index2 + 1] && this.def.params[index2 + 1].optional) {
      return true;
    }
    if (index2 + 1 >= this.def.params.length && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(this.def.params), "multiple")) {
      return true;
    }
    return false;
  }
  updateParam(strValue, index2) {
    if (this._hasMultipleParamsInString(strValue, index2)) {
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(strValue.split(","), (partVal, idx) => {
        this.updateParam(partVal.trim(), index2 + idx);
      });
      return;
    }
    if (strValue === "" && (index2 >= this.def.params.length || this.def.params[index2].optional)) {
      this.params.splice(index2, 1);
    } else {
      this.params[index2] = strValue;
    }
    this.updateText();
  }
  updateText() {
    if (this.params.length === 0) {
      this.text = this.def.name + "()";
      return;
    }
    let text = this.def.name + "(";
    text += this.params.join(", ");
    text += ")";
    this.text = text;
  }
}
function createFuncInstance(funcDef, options, idx) {
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(funcDef)) {
    funcDef = getFuncDef(funcDef, idx);
  }
  return new FuncInstance(funcDef, options);
}
function getFuncDef(name, idx) {
  if (!(idx || index)[name]) {
    return { name, params: [{ name: "", type: "", multiple: true }], defaultParams: [""], unknown: true };
  }
  return (idx || index)[name];
}
function getFuncDefs(graphiteVersion, idx) {
  const funcs = {};
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)(idx || index, (funcDef) => {
    if (isVersionRelatedFunction(funcDef, graphiteVersion)) {
      funcs[funcDef.name] = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.assign)({}, funcDef, {
        params: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.filter)(funcDef.params, (param) => {
          return isVersionRelatedFunction(param, graphiteVersion);
        })
      });
    }
  });
  return funcs;
}
function parseFuncDefs(rawDefs) {
  const funcDefs = {};
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)(rawDefs || {}, (funcDef, funcName) => {
    if (funcDef.group === "Graph") {
      return;
    }
    let description = funcDef.description;
    if (description) {
      description = description.replace(/:py:func:`(.+)( <[^>]*>)?`/g, "``$1``").replace(/.. seealso:: /g, "See also: ").replace(/.. code-block *:: *none/g, ".. code-block::");
    }
    const func = {
      name: funcDef.name,
      description,
      category: funcDef.group,
      params: [],
      defaultParams: [],
      fake: false
    };
    if (/^seriesLists?$/.test((0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(funcDef, "params[0].type", ""))) {
      if (funcDef.params[0].multiple) {
        funcDef.params[0].required = false;
      } else {
        funcDef.params.shift();
      }
    } else {
      func.fake = true;
    }
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)(funcDef.params, (rawParam) => {
      const param = {
        name: rawParam.name,
        type: "string",
        optional: !rawParam.required,
        multiple: !!rawParam.multiple,
        options: void 0
      };
      if (rawParam.default !== void 0) {
        if (rawParam.default === Infinity) {
          func.defaultParams.push("inf");
        } else {
          func.defaultParams.push((0,lodash__WEBPACK_IMPORTED_MODULE_0__.toString)(rawParam.default));
        }
      } else if (rawParam.suggestions) {
        func.defaultParams.push((0,lodash__WEBPACK_IMPORTED_MODULE_0__.toString)(rawParam.suggestions[0]));
      } else {
        func.defaultParams.push("");
      }
      if (rawParam.type === "boolean") {
        param.type = "boolean";
        param.options = ["true", "false"];
      } else if (rawParam.type === "integer") {
        param.type = "int";
      } else if (rawParam.type === "float") {
        param.type = "float";
      } else if (rawParam.type === "node") {
        param.type = "node";
        param.options = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
      } else if (rawParam.type === "nodeOrTag") {
        param.type = "node_or_tag";
        param.options = ["name", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
      } else if (rawParam.type === "intOrInterval") {
        param.type = "int_or_interval";
      } else if (rawParam.type === "seriesList") {
        param.type = "value_or_series";
      } else if (rawParam.type === "intOrInf") {
        param.type = "int_or_infinity";
      }
      if (rawParam.options) {
        param.options = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(rawParam.options, lodash__WEBPACK_IMPORTED_MODULE_0__.toString);
      } else if (rawParam.suggestions) {
        param.options = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(rawParam.suggestions, lodash__WEBPACK_IMPORTED_MODULE_0__.toString);
      }
      func.params.push(param);
    });
    funcDefs[funcName] = func;
  });
  return funcDefs;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createFuncInstance,
  getFuncDef,
  getFuncDefs,
  parseFuncDefs
});


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/graphite_query.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GraphiteQuery)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_utils_arrayMove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/utils/arrayMove.ts");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/parser.ts");




class GraphiteQuery {
  constructor(datasource, target, templateSrv, scopedVars) {
    this.functions = [];
    this.segments = [];
    this.tags = [];
    this.seriesByTagUsed = false;
    this.checkOtherSegmentsIndex = 0;
    this.datasource = datasource;
    this.target = target;
    this.templateSrv = templateSrv;
    this.scopedVars = scopedVars;
    this.parseTarget();
    this.removeTagValue = "-- remove tag --";
  }
  parseTarget() {
    this.functions = [];
    this.segments = [];
    this.tags = [];
    this.seriesByTagUsed = false;
    this.error = null;
    if (this.target.textEditor) {
      return;
    }
    const parser = new _parser__WEBPACK_IMPORTED_MODULE_2__.Parser(this.target.target);
    const astNode = parser.getAst();
    if (astNode === null) {
      this.checkOtherSegmentsIndex = 0;
      return;
    }
    if (astNode.type === "error") {
      this.error = astNode.message + " at position: " + astNode.pos;
      this.target.textEditor = true;
      return;
    }
    try {
      this.parseTargetRecursive(astNode, null);
    } catch (err) {
      if (err instanceof Error) {
        console.error("error parsing target:", err.message);
        this.error = err.message;
      }
      this.target.textEditor = true;
    }
    this.checkOtherSegmentsIndex = this.segments.length - 1;
  }
  getSegmentPathUpTo(index) {
    const arr = this.segments.slice(0, index);
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.reduce)(
      arr,
      (result, segment) => {
        return result ? result + "." + segment.value : segment.value;
      },
      ""
    );
  }
  parseTargetRecursive(astNode, func) {
    if (astNode === null) {
      return null;
    }
    switch (astNode.type) {
      case "function":
        const innerFunc = this.datasource.createFuncInstance(astNode.name, {
          withDefaultParams: false
        });
        handleMultipleSeriesByTagsParams(astNode);
        handleDivideSeriesListsNestedFunctions(astNode);
        (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(astNode.params, (param) => {
          this.parseTargetRecursive(param, innerFunc);
        });
        innerFunc.updateText();
        this.functions.push(innerFunc);
        if (innerFunc.def.name === "seriesByTag" && !this.seriesByTagUsed) {
          this.seriesByTagUsed = true;
          innerFunc.hidden = true;
          this.tags = this.splitSeriesByTagParams(innerFunc);
        }
        break;
      case "series-ref":
        if (this.segments.length > 0 || this.getSeriesByTagFuncIndex() >= 0) {
          this.addFunctionParameter(func, astNode.value);
        } else {
          this.segments.push(astNode);
        }
        break;
      case "bool":
      case "string":
      case "number":
        this.addFunctionParameter(func, astNode.value);
        break;
      case "metric":
        if (this.segments.length || this.tags.length) {
          this.addFunctionParameter(func, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.join)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(astNode.segments, "value"), "."));
        } else {
          this.segments = astNode.segments;
        }
        break;
    }
  }
  updateSegmentValue(segment, index) {
    this.segments[index].value = segment.value;
  }
  addSelectMetricSegment() {
    this.segments.push({ value: "select metric" });
  }
  addFunction(newFunc) {
    this.functions.push(newFunc);
  }
  addFunctionParameter(func, value) {
    if (func.params.length >= func.def.params.length && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(func.def.params), "multiple", false)) {
      throw { message: "too many parameters for function " + func.def.name };
    }
    func.params.push(value);
  }
  removeFunction(func) {
    this.functions = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.without)(this.functions, func);
  }
  moveFunction(func, offset) {
    const index = this.functions.indexOf(func);
    (0,_core_utils_arrayMove__WEBPACK_IMPORTED_MODULE_1__.arrayMove)(this.functions, index, index + offset);
  }
  updateModelTarget(targets) {
    const wrapFunction = (target, func) => {
      return func.render(target, (value) => {
        return this.templateSrv.replace(value, this.scopedVars);
      });
    };
    if (!this.target.textEditor) {
      const metricPath = this.getSegmentPathUpTo(this.segments.length).replace(/\.?select metric$/, "");
      this.target.target = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.reduce)(this.functions, wrapFunction, metricPath);
    }
    this.updateRenderedTarget(this.target, targets);
    for (const target of targets || []) {
      if (target.refId !== this.target.refId) {
        this.updateRenderedTarget(target, targets);
      }
    }
    this.functions.forEach((func) => func.added = false);
  }
  updateRenderedTarget(target, targets) {
    const targetsByRefId = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.keyBy)(targets, "refId");
    delete targetsByRefId[target.refId];
    const nestedSeriesRefRegex = /\#([A-Z])/g;
    let targetWithNestedQueries = target.target;
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(targetsByRefId, (t, id) => {
      var _a;
      const regex = RegExp("#(".concat(id, ")"), "g");
      const refMatches = targetWithNestedQueries.match(regex);
      t.refCount = (_a = refMatches == null ? void 0 : refMatches.length) != null ? _a : 0;
    });
    while (targetWithNestedQueries.match(nestedSeriesRefRegex)) {
      const updated = targetWithNestedQueries.replace(nestedSeriesRefRegex, (match, g1) => {
        const t = targetsByRefId[g1];
        if (!t) {
          return match;
        }
        if (t.refCount === 0) {
          delete targetsByRefId[g1];
        }
        t.refCount--;
        return t.target;
      });
      if (updated === targetWithNestedQueries) {
        break;
      }
      targetWithNestedQueries = updated;
    }
    delete target.targetFull;
    if (target.target !== targetWithNestedQueries) {
      target.targetFull = targetWithNestedQueries;
    }
  }
  splitSeriesByTagParams(func) {
    const tagPattern = /([^\!=~]+)(\!?=~?)(.*)/;
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.flatten)(
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(func.params, (param) => {
        const matches = tagPattern.exec(param);
        if (matches) {
          const tag = matches.slice(1);
          if (tag.length === 3) {
            return {
              key: tag[0],
              operator: tag[1],
              value: tag[2]
            };
          }
        }
        return [];
      })
    );
  }
  getSeriesByTagFuncIndex() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex)(this.functions, (func) => func.def.name === "seriesByTag");
  }
  getSeriesByTagFunc() {
    const seriesByTagFuncIndex = this.getSeriesByTagFuncIndex();
    if (seriesByTagFuncIndex >= 0) {
      return this.functions[seriesByTagFuncIndex];
    } else {
      return void 0;
    }
  }
  addTag(tag) {
    const newTagParam = renderTagString(tag);
    this.getSeriesByTagFunc().params.push(newTagParam);
    this.tags.push(tag);
  }
  removeTag(index) {
    this.getSeriesByTagFunc().params.splice(index, 1);
    this.tags.splice(index, 1);
  }
  updateTag(tag, tagIndex) {
    this.error = null;
    if (tag.key === this.removeTagValue) {
      this.removeTag(tagIndex);
      if (this.tags.length === 0) {
        this.removeFunction(this.getSeriesByTagFunc());
        this.checkOtherSegmentsIndex = 0;
        this.seriesByTagUsed = false;
      }
      return;
    }
    this.getSeriesByTagFunc().params[tagIndex] = renderTagString(tag);
    this.tags[tagIndex] = tag;
  }
  renderTagExpressions(excludeIndex = -1) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.compact)(
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.tags, (tagExpr, index) => {
        if (index !== excludeIndex) {
          return tagExpr.key + tagExpr.operator + tagExpr.value;
        } else {
          return void 0;
        }
      })
    );
  }
}
function renderTagString(tag) {
  return tag.key + tag.operator + tag.value;
}
function handleMultipleSeriesByTagsParams(astNode) {
  if (astNode.params && astNode.params.length >= 2) {
    let count = 0;
    astNode.params = astNode.params.map((p) => {
      if (p.type === "function") {
        count += 1;
      }
      if (count === 2 && p.type === "function" && p.name === "seriesByTag") {
        const stringParams = p.params && p.params.reduce((acc, p2, idx, paramsArr) => {
          if (idx === 0 || idx !== paramsArr.length - 1) {
            return "".concat(acc, "'").concat(p2.value, "',");
          }
          return "".concat(acc, "'").concat(p2.value, "'");
        }, "");
        return {
          type: "string",
          value: "".concat(p.name, "(").concat(stringParams, ")")
        };
      }
      return p;
    });
  }
}
function handleDivideSeriesListsNestedFunctions(astNode) {
  if (astNode.name === "divideSeriesLists" && astNode.params && astNode.params.length >= 2) {
    astNode.params = astNode.params.map((p, idx) => {
      if (idx === 1 && p.type === "function") {
        let functionString = "";
        let s = p.name + "(" + nestedFunctionsToString(p, functionString);
        p = {
          type: "string",
          value: s
        };
      }
      return p;
    });
  }
  return astNode;
}
function nestedFunctionsToString(node, functionString) {
  var _a, _b;
  let count = 0;
  if (node.params) {
    count++;
    const paramsLength = (_b = (_a = node.params) == null ? void 0 : _a.length) != null ? _b : 0;
    node.params.forEach((innerNode, idx) => {
      if (idx < paramsLength - 1) {
        functionString += switchCase(innerNode, functionString) + ",";
      } else {
        functionString += switchCase(innerNode, functionString);
      }
    });
    return functionString + ")";
  } else {
    return functionString += switchCase(node, functionString);
  }
}
function switchCase(node, functionString) {
  switch (node.type) {
    case "function":
      functionString += node.name + "(";
      return nestedFunctionsToString(node, functionString);
    case "metric":
      const segmentString = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.join)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(node.segments, "value"), ".");
      return segmentString;
    default:
      return node.value;
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/lexer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lexer: () => (/* binding */ Lexer)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


const unicodeLetterTable = [
  170,
  170,
  181,
  181,
  186,
  186,
  192,
  214,
  216,
  246,
  248,
  705,
  710,
  721,
  736,
  740,
  748,
  748,
  750,
  750,
  880,
  884,
  886,
  887,
  890,
  893,
  902,
  902,
  904,
  906,
  908,
  908,
  910,
  929,
  931,
  1013,
  1015,
  1153,
  1162,
  1319,
  1329,
  1366,
  1369,
  1369,
  1377,
  1415,
  1488,
  1514,
  1520,
  1522,
  1568,
  1610,
  1646,
  1647,
  1649,
  1747,
  1749,
  1749,
  1765,
  1766,
  1774,
  1775,
  1786,
  1788,
  1791,
  1791,
  1808,
  1808,
  1810,
  1839,
  1869,
  1957,
  1969,
  1969,
  1994,
  2026,
  2036,
  2037,
  2042,
  2042,
  2048,
  2069,
  2074,
  2074,
  2084,
  2084,
  2088,
  2088,
  2112,
  2136,
  2308,
  2361,
  2365,
  2365,
  2384,
  2384,
  2392,
  2401,
  2417,
  2423,
  2425,
  2431,
  2437,
  2444,
  2447,
  2448,
  2451,
  2472,
  2474,
  2480,
  2482,
  2482,
  2486,
  2489,
  2493,
  2493,
  2510,
  2510,
  2524,
  2525,
  2527,
  2529,
  2544,
  2545,
  2565,
  2570,
  2575,
  2576,
  2579,
  2600,
  2602,
  2608,
  2610,
  2611,
  2613,
  2614,
  2616,
  2617,
  2649,
  2652,
  2654,
  2654,
  2674,
  2676,
  2693,
  2701,
  2703,
  2705,
  2707,
  2728,
  2730,
  2736,
  2738,
  2739,
  2741,
  2745,
  2749,
  2749,
  2768,
  2768,
  2784,
  2785,
  2821,
  2828,
  2831,
  2832,
  2835,
  2856,
  2858,
  2864,
  2866,
  2867,
  2869,
  2873,
  2877,
  2877,
  2908,
  2909,
  2911,
  2913,
  2929,
  2929,
  2947,
  2947,
  2949,
  2954,
  2958,
  2960,
  2962,
  2965,
  2969,
  2970,
  2972,
  2972,
  2974,
  2975,
  2979,
  2980,
  2984,
  2986,
  2990,
  3001,
  3024,
  3024,
  3077,
  3084,
  3086,
  3088,
  3090,
  3112,
  3114,
  3123,
  3125,
  3129,
  3133,
  3133,
  3160,
  3161,
  3168,
  3169,
  3205,
  3212,
  3214,
  3216,
  3218,
  3240,
  3242,
  3251,
  3253,
  3257,
  3261,
  3261,
  3294,
  3294,
  3296,
  3297,
  3313,
  3314,
  3333,
  3340,
  3342,
  3344,
  3346,
  3386,
  3389,
  3389,
  3406,
  3406,
  3424,
  3425,
  3450,
  3455,
  3461,
  3478,
  3482,
  3505,
  3507,
  3515,
  3517,
  3517,
  3520,
  3526,
  3585,
  3632,
  3634,
  3635,
  3648,
  3654,
  3713,
  3714,
  3716,
  3716,
  3719,
  3720,
  3722,
  3722,
  3725,
  3725,
  3732,
  3735,
  3737,
  3743,
  3745,
  3747,
  3749,
  3749,
  3751,
  3751,
  3754,
  3755,
  3757,
  3760,
  3762,
  3763,
  3773,
  3773,
  3776,
  3780,
  3782,
  3782,
  3804,
  3805,
  3840,
  3840,
  3904,
  3911,
  3913,
  3948,
  3976,
  3980,
  4096,
  4138,
  4159,
  4159,
  4176,
  4181,
  4186,
  4189,
  4193,
  4193,
  4197,
  4198,
  4206,
  4208,
  4213,
  4225,
  4238,
  4238,
  4256,
  4293,
  4304,
  4346,
  4348,
  4348,
  4352,
  4680,
  4682,
  4685,
  4688,
  4694,
  4696,
  4696,
  4698,
  4701,
  4704,
  4744,
  4746,
  4749,
  4752,
  4784,
  4786,
  4789,
  4792,
  4798,
  4800,
  4800,
  4802,
  4805,
  4808,
  4822,
  4824,
  4880,
  4882,
  4885,
  4888,
  4954,
  4992,
  5007,
  5024,
  5108,
  5121,
  5740,
  5743,
  5759,
  5761,
  5786,
  5792,
  5866,
  5870,
  5872,
  5888,
  5900,
  5902,
  5905,
  5920,
  5937,
  5952,
  5969,
  5984,
  5996,
  5998,
  6e3,
  6016,
  6067,
  6103,
  6103,
  6108,
  6108,
  6176,
  6263,
  6272,
  6312,
  6314,
  6314,
  6320,
  6389,
  6400,
  6428,
  6480,
  6509,
  6512,
  6516,
  6528,
  6571,
  6593,
  6599,
  6656,
  6678,
  6688,
  6740,
  6823,
  6823,
  6917,
  6963,
  6981,
  6987,
  7043,
  7072,
  7086,
  7087,
  7104,
  7141,
  7168,
  7203,
  7245,
  7247,
  7258,
  7293,
  7401,
  7404,
  7406,
  7409,
  7424,
  7615,
  7680,
  7957,
  7960,
  7965,
  7968,
  8005,
  8008,
  8013,
  8016,
  8023,
  8025,
  8025,
  8027,
  8027,
  8029,
  8029,
  8031,
  8061,
  8064,
  8116,
  8118,
  8124,
  8126,
  8126,
  8130,
  8132,
  8134,
  8140,
  8144,
  8147,
  8150,
  8155,
  8160,
  8172,
  8178,
  8180,
  8182,
  8188,
  8305,
  8305,
  8319,
  8319,
  8336,
  8348,
  8450,
  8450,
  8455,
  8455,
  8458,
  8467,
  8469,
  8469,
  8473,
  8477,
  8484,
  8484,
  8486,
  8486,
  8488,
  8488,
  8490,
  8493,
  8495,
  8505,
  8508,
  8511,
  8517,
  8521,
  8526,
  8526,
  8544,
  8584,
  11264,
  11310,
  11312,
  11358,
  11360,
  11492,
  11499,
  11502,
  11520,
  11557,
  11568,
  11621,
  11631,
  11631,
  11648,
  11670,
  11680,
  11686,
  11688,
  11694,
  11696,
  11702,
  11704,
  11710,
  11712,
  11718,
  11720,
  11726,
  11728,
  11734,
  11736,
  11742,
  11823,
  11823,
  12293,
  12295,
  12321,
  12329,
  12337,
  12341,
  12344,
  12348,
  12353,
  12438,
  12445,
  12447,
  12449,
  12538,
  12540,
  12543,
  12549,
  12589,
  12593,
  12686,
  12704,
  12730,
  12784,
  12799,
  13312,
  13312,
  19893,
  19893,
  19968,
  19968,
  40907,
  40907,
  40960,
  42124,
  42192,
  42237,
  42240,
  42508,
  42512,
  42527,
  42538,
  42539,
  42560,
  42606,
  42623,
  42647,
  42656,
  42735,
  42775,
  42783,
  42786,
  42888,
  42891,
  42894,
  42896,
  42897,
  42912,
  42921,
  43002,
  43009,
  43011,
  43013,
  43015,
  43018,
  43020,
  43042,
  43072,
  43123,
  43138,
  43187,
  43250,
  43255,
  43259,
  43259,
  43274,
  43301,
  43312,
  43334,
  43360,
  43388,
  43396,
  43442,
  43471,
  43471,
  43520,
  43560,
  43584,
  43586,
  43588,
  43595,
  43616,
  43638,
  43642,
  43642,
  43648,
  43695,
  43697,
  43697,
  43701,
  43702,
  43705,
  43709,
  43712,
  43712,
  43714,
  43714,
  43739,
  43741,
  43777,
  43782,
  43785,
  43790,
  43793,
  43798,
  43808,
  43814,
  43816,
  43822,
  43968,
  44002,
  44032,
  44032,
  55203,
  55203,
  55216,
  55238,
  55243,
  55291,
  63744,
  64045,
  64048,
  64109,
  64112,
  64217,
  64256,
  64262,
  64275,
  64279,
  64285,
  64285,
  64287,
  64296,
  64298,
  64310,
  64312,
  64316,
  64318,
  64318,
  64320,
  64321,
  64323,
  64324,
  64326,
  64433,
  64467,
  64829,
  64848,
  64911,
  64914,
  64967,
  65008,
  65019,
  65136,
  65140,
  65142,
  65276,
  65313,
  65338,
  65345,
  65370,
  65382,
  65470,
  65474,
  65479,
  65482,
  65487,
  65490,
  65495,
  65498,
  65500,
  65536,
  65547,
  65549,
  65574,
  65576,
  65594,
  65596,
  65597,
  65599,
  65613,
  65616,
  65629,
  65664,
  65786,
  65856,
  65908,
  66176,
  66204,
  66208,
  66256,
  66304,
  66334,
  66352,
  66378,
  66432,
  66461,
  66464,
  66499,
  66504,
  66511,
  66513,
  66517,
  66560,
  66717,
  67584,
  67589,
  67592,
  67592,
  67594,
  67637,
  67639,
  67640,
  67644,
  67644,
  67647,
  67669,
  67840,
  67861,
  67872,
  67897,
  68096,
  68096,
  68112,
  68115,
  68117,
  68119,
  68121,
  68147,
  68192,
  68220,
  68352,
  68405,
  68416,
  68437,
  68448,
  68466,
  68608,
  68680,
  69635,
  69687,
  69763,
  69807,
  73728,
  74606,
  74752,
  74850,
  77824,
  78894,
  92160,
  92728,
  110592,
  110593,
  119808,
  119892,
  119894,
  119964,
  119966,
  119967,
  119970,
  119970,
  119973,
  119974,
  119977,
  119980,
  119982,
  119993,
  119995,
  119995,
  119997,
  120003,
  120005,
  120069,
  120071,
  120074,
  120077,
  120084,
  120086,
  120092,
  120094,
  120121,
  120123,
  120126,
  120128,
  120132,
  120134,
  120134,
  120138,
  120144,
  120146,
  120485,
  120488,
  120512,
  120514,
  120538,
  120540,
  120570,
  120572,
  120596,
  120598,
  120628,
  120630,
  120654,
  120656,
  120686,
  120688,
  120712,
  120714,
  120744,
  120746,
  120770,
  120772,
  120779,
  131072,
  131072,
  173782,
  173782,
  173824,
  173824,
  177972,
  177972,
  177984,
  177984,
  178205,
  178205,
  194560,
  195101
];
const identifierStartTable = [];
for (let i = 0; i < 128; i++) {
  identifierStartTable[i] = i >= 48 && i <= 57 || // 0-9
  i === 36 || // $
  i === 126 || // ~
  i === 124 || // |
  i >= 65 && i <= 90 || // A-Z
  i === 95 || // _
  i === 45 || // -
  i === 42 || // *
  i === 58 || // :
  i === 91 || // templateStart [
  i === 93 || // templateEnd ]
  i === 63 || // ?
  i === 37 || // %
  i === 35 || // #
  i === 61 || // =
  i >= 97 && i <= 122;
}
const identifierPartTable = identifierStartTable;
class Lexer {
  constructor(expression) {
    this.input = expression;
    this.char = 1;
    this.from = 1;
  }
  peek(i) {
    return this.input.charAt(i || 0);
  }
  skip(i) {
    i = i || 1;
    this.char += i;
    this.input = this.input.slice(i);
  }
  tokenize() {
    const list = [];
    let token = this.next();
    while (token) {
      list.push(token);
      token = this.next();
    }
    return list;
  }
  next() {
    this.from = this.char;
    if (/\s/.test(this.peek())) {
      while (/\s/.test(this.peek())) {
        this.from += 1;
        this.skip();
      }
      if (this.peek() === "") {
        return null;
      }
    }
    let match = this.scanStringLiteral();
    if (match) {
      return match;
    }
    match = this.scanPunctuator() || this.scanNumericLiteral() || this.scanIdentifier() || this.scanTemplateSequence();
    if (match) {
      this.skip(match.value.length);
      return match;
    }
    return null;
  }
  scanTemplateSequence() {
    if (this.peek() === "[" && this.peek(1) === "[") {
      return {
        type: "templateStart",
        value: "[[",
        pos: this.char
      };
    }
    if (this.peek() === "]" && this.peek(1) === "]") {
      return {
        type: "templateEnd",
        value: "[[",
        pos: this.char
      };
    }
    return null;
  }
  /*
   * Extract a JavaScript identifier out of the next sequence of
   * characters or return 'null' if its not possible. In addition,
   * to Identifier this method can also produce BooleanLiteral
   * (true/false) and NullLiteral (null).
   */
  scanIdentifier() {
    let id = "";
    let index = 0;
    let type, char;
    function isUnicodeLetter(code) {
      for (let i = 0; i < unicodeLetterTable.length; ) {
        if (code < unicodeLetterTable[i++]) {
          return false;
        }
        if (code <= unicodeLetterTable[i++]) {
          return true;
        }
      }
      return false;
    }
    function isHexDigit(str) {
      return /^[0-9a-fA-F]$/.test(str);
    }
    const readUnicodeEscapeSequence = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.bind)(function() {
      index += 1;
      if (this.peek(index) !== "u") {
        return null;
      }
      const ch1 = this.peek(index + 1);
      const ch2 = this.peek(index + 2);
      const ch3 = this.peek(index + 3);
      const ch4 = this.peek(index + 4);
      let code;
      if (isHexDigit(ch1) && isHexDigit(ch2) && isHexDigit(ch3) && isHexDigit(ch4)) {
        code = parseInt(ch1 + ch2 + ch3 + ch4, 16);
        if (isUnicodeLetter(code)) {
          index += 5;
          return "\\u" + ch1 + ch2 + ch3 + ch4;
        }
        return null;
      }
      return null;
    }, this);
    const getIdentifierStart = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.bind)(function() {
      const chr = this.peek(index);
      const code = chr.charCodeAt(0);
      if (chr === "*") {
        index += 1;
        return chr;
      }
      if (code === 92) {
        return readUnicodeEscapeSequence();
      }
      if (code < 128) {
        if (identifierStartTable[code]) {
          index += 1;
          return chr;
        }
        return null;
      }
      if (isUnicodeLetter(code)) {
        index += 1;
        return chr;
      }
      return null;
    }, this);
    const getIdentifierPart = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.bind)(function() {
      const chr = this.peek(index);
      const code = chr.charCodeAt(0);
      if (code === 92) {
        return readUnicodeEscapeSequence();
      }
      if (code < 128) {
        if (identifierPartTable[code]) {
          index += 1;
          return chr;
        }
        return null;
      }
      if (isUnicodeLetter(code)) {
        index += 1;
        return chr;
      }
      return null;
    }, this);
    char = getIdentifierStart();
    if (char === null) {
      return null;
    }
    id = char;
    for (; ; ) {
      char = getIdentifierPart();
      if (char === null) {
        break;
      }
      id += char;
    }
    switch (id) {
      case "true": {
        type = "bool";
        break;
      }
      case "false": {
        type = "bool";
        break;
      }
      default:
        type = "identifier";
    }
    return {
      type,
      value: id,
      pos: this.char
    };
  }
  /*
   * Extract a numeric literal out of the next sequence of
   * characters or return 'null' if its not possible. This method
   * supports all numeric literals described in section 7.8.3
   * of the EcmaScript 5 specification.
   *
   * This method's implementation was heavily influenced by the
   * scanNumericLiteral function in the Esprima parser's source code.
   */
  scanNumericLiteral() {
    let index = 0;
    let value = "";
    const length = this.input.length;
    let char = this.peek(index);
    let bad;
    function isDecimalDigit(str) {
      return /^[0-9]$/.test(str);
    }
    function isOctalDigit(str) {
      return /^[0-7]$/.test(str);
    }
    function isHexDigit(str) {
      return /^[0-9a-fA-F]$/.test(str);
    }
    function isIdentifierStart(ch) {
      return ch === "$" || ch === "_" || ch === "\\" || ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z";
    }
    if (char === "-") {
      value += char;
      index += 1;
      char = this.peek(index);
    }
    if (char !== "." && !isDecimalDigit(char)) {
      return null;
    }
    if (char !== ".") {
      value += this.peek(index);
      index += 1;
      char = this.peek(index);
      if (value === "0") {
        if (char === "x" || char === "X") {
          index += 1;
          value += char;
          while (index < length) {
            char = this.peek(index);
            if (!isHexDigit(char)) {
              break;
            }
            value += char;
            index += 1;
          }
          if (value.length <= 2) {
            return {
              type: "number",
              value,
              isMalformed: true,
              pos: this.char
            };
          }
          if (index < length) {
            char = this.peek(index);
            if (isIdentifierStart(char)) {
              return null;
            }
          }
          return {
            type: "number",
            value,
            base: 16,
            isMalformed: false,
            pos: this.char
          };
        }
        if (isOctalDigit(char)) {
          index += 1;
          value += char;
          bad = false;
          while (index < length) {
            char = this.peek(index);
            if (isDecimalDigit(char)) {
              bad = true;
            }
            if (!isOctalDigit(char)) {
              if (!this.isPunctuator(char)) {
                return null;
              }
              break;
            }
            value += char;
            index += 1;
          }
          if (index < length) {
            char = this.peek(index);
            if (isIdentifierStart(char)) {
              return null;
            }
          }
          return {
            type: "number",
            value,
            base: 8,
            isMalformed: bad
          };
        }
        if (isDecimalDigit(char)) {
          index += 1;
          value += char;
        }
      }
      while (index < length) {
        char = this.peek(index);
        if (!isDecimalDigit(char)) {
          break;
        }
        value += char;
        index += 1;
      }
    }
    if (char === ".") {
      value += char;
      index += 1;
      while (index < length) {
        char = this.peek(index);
        if (!isDecimalDigit(char)) {
          break;
        }
        value += char;
        index += 1;
      }
    }
    if (char === "e" || char === "E") {
      value += char;
      index += 1;
      char = this.peek(index);
      if (char === "+" || char === "-") {
        value += this.peek(index);
        index += 1;
      }
      char = this.peek(index);
      if (isDecimalDigit(char)) {
        value += char;
        index += 1;
        while (index < length) {
          char = this.peek(index);
          if (!isDecimalDigit(char)) {
            break;
          }
          value += char;
          index += 1;
        }
      } else {
        return null;
      }
    }
    if (index < length) {
      char = this.peek(index);
      if (!this.isPunctuator(char)) {
        return null;
      }
    }
    return {
      type: "number",
      value,
      base: 10,
      pos: this.char,
      isMalformed: !isFinite(+value)
    };
  }
  isPunctuator(ch1) {
    switch (ch1) {
      case ".":
      case "(":
      case ")":
      case ",":
      case "{":
      case "}":
        return true;
    }
    return false;
  }
  scanPunctuator() {
    const ch1 = this.peek();
    if (this.isPunctuator(ch1)) {
      return {
        type: ch1,
        value: ch1,
        pos: this.char
      };
    }
    return null;
  }
  /*
   * Extract a string out of the next sequence of characters and/or
   * lines or return 'null' if its not possible. Since strings can
   * span across multiple lines this method has to move the char
   * pointer.
   *
   * This method recognizes pseudo-multiline JavaScript strings:
   *
   *   var str = "hello\
   *   world";
   */
  scanStringLiteral() {
    const quote = this.peek();
    if (quote !== '"' && quote !== "'") {
      return null;
    }
    let value = "";
    this.skip();
    while (this.peek() !== quote) {
      if (this.peek() === "") {
        return {
          type: "string",
          value,
          isUnclosed: true,
          quote,
          pos: this.char
        };
      }
      const char = this.peek();
      const jump = 1;
      value += char;
      this.skip(jump);
    }
    this.skip();
    return {
      type: "string",
      value,
      isUnclosed: false,
      quote,
      pos: this.char
    };
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/meta.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRollupNotice: () => (/* binding */ getRollupNotice),
/* harmony export */   getRuntimeConsolidationNotice: () => (/* binding */ getRuntimeConsolidationNotice),
/* harmony export */   parseSchemaRetentions: () => (/* binding */ parseSchemaRetentions)
/* harmony export */ });

function toInteger(val) {
  if (val) {
    return parseInt(val, 10);
  }
  return void 0;
}
function toBooleanOrTimestamp(val) {
  if (val) {
    if (val === "true") {
      return true;
    }
    if (val === "false") {
      return false;
    }
    return parseInt(val, 10);
  }
  return void 0;
}
function getRollupNotice(metaList) {
  var _a;
  for (const meta of metaList) {
    const archiveIndex = meta["archive-read"];
    if (archiveIndex > 0) {
      const schema = parseSchemaRetentions(meta["schema-retentions"]);
      const intervalString = schema[archiveIndex].interval;
      const func = ((_a = meta["consolidator-normfetch"]) != null ? _a : "").replace("Consolidator", "");
      return {
        text: "Data is rolled up, aggregated over ".concat(intervalString, " using ").concat(func, " function"),
        severity: "info",
        inspect: "meta"
      };
    }
  }
  return null;
}
function getRuntimeConsolidationNotice(metaList) {
  var _a;
  for (const meta of metaList) {
    const runtimeNr = meta["aggnum-rc"];
    if (runtimeNr > 0) {
      const func = ((_a = meta["consolidator-rc"]) != null ? _a : "").replace("Consolidator", "");
      return {
        text: "Data is runtime consolidated, ".concat(runtimeNr, " datapoints combined using ").concat(func, " function"),
        severity: "info",
        inspect: "meta"
      };
    }
  }
  return null;
}
function parseSchemaRetentions(spec) {
  if (!spec) {
    return [];
  }
  return spec.split(",").map((str) => {
    const vals = str.split(":");
    return {
      interval: vals[0],
      retention: vals[1],
      chunkspan: vals[2],
      numchunks: toInteger(vals[3]),
      ready: toBooleanOrTimestamp(vals[4])
    };
  });
}


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/migrations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prepareAnnotation: () => (/* binding */ prepareAnnotation)
/* harmony export */ });

const migrateLegacyAnnotation = (json) => {
  if (typeof json.target === "string" && json.target) {
    return {
      fromAnnotations: true,
      target: json.target,
      textEditor: true
    };
  }
  return {
    queryType: "tags",
    tags: (json.tags || "").split(" "),
    fromAnnotations: true
  };
};
const prepareAnnotation = (json) => {
  const resultingTarget = json.target && typeof json.target !== "string" ? json.target : migrateLegacyAnnotation(json);
  json.target = resultingTarget;
  return json;
};


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/datasource.ts");
/* harmony import */ var _components_GraphiteQueryEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/GraphiteQueryEditor.tsx");
/* harmony import */ var _components_GraphiteVariableEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/GraphiteVariableEditor.tsx");
/* harmony import */ var _components_MetricTankMetaInspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/MetricTankMetaInspector.tsx");
/* harmony import */ var _configuration_ConfigEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/configuration/ConfigEditor.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/datasource.ts");







const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_5__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_4__.GraphiteDatasource).setQueryEditor(_components_GraphiteQueryEditor__WEBPACK_IMPORTED_MODULE_0__.GraphiteQueryEditor).setConfigEditor(_configuration_ConfigEditor__WEBPACK_IMPORTED_MODULE_3__.ConfigEditor).setVariableQueryEditor(_components_GraphiteVariableEditor__WEBPACK_IMPORTED_MODULE_1__.GraphiteVariableEditor).setMetadataInspector(_components_MetricTankMetaInspector__WEBPACK_IMPORTED_MODULE_2__.MetricTankMetaInspector);


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/parser.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Parser: () => (/* binding */ Parser)
/* harmony export */ });
/* harmony import */ var _lexer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/graphite/lexer.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/utils.ts");



class Parser {
  constructor(expression) {
    this.expression = expression;
    this.lexer = new _lexer__WEBPACK_IMPORTED_MODULE_0__.Lexer(expression);
    this.tokens = this.lexer.tokenize();
    this.index = 0;
  }
  getAst() {
    return this.start();
  }
  start() {
    try {
      return this.functionCall() || this.metricExpression();
    } catch (e) {
      if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isGraphiteParserError)(e)) {
        return {
          type: "error",
          message: e.message,
          pos: e.pos
        };
      }
    }
    return null;
  }
  curlyBraceSegment() {
    if (this.match("identifier", "{") || this.match("{")) {
      let curlySegment = "";
      while (!this.match("") && !this.match("}")) {
        curlySegment += this.consumeToken().value;
      }
      if (!this.match("}")) {
        this.errorMark("Expected closing '}'");
      }
      curlySegment += this.consumeToken().value;
      if (this.match("identifier")) {
        curlySegment += this.consumeToken().value;
      }
      return {
        type: "segment",
        value: curlySegment
      };
    } else {
      return null;
    }
  }
  metricSegment() {
    const curly = this.curlyBraceSegment();
    if (curly) {
      return curly;
    }
    if (this.match("identifier") || this.match("number") || this.match("bool")) {
      const tokenValue = this.consumeToken().value;
      const parts = tokenValue && typeof tokenValue === "string" ? tokenValue.split(".") : "";
      if (parts.length === 2) {
        this.tokens.splice(this.index, 0, { type: "." });
        this.tokens.splice(this.index + 1, 0, {
          type: "number",
          value: parts[1]
        });
      }
      return {
        type: "segment",
        value: parts[0]
      };
    }
    if (!this.match("templateStart")) {
      this.errorMark("Expected metric identifier");
    }
    this.consumeToken();
    if (!this.match("identifier")) {
      this.errorMark("Expected identifier after templateStart");
    }
    const node = {
      type: "template",
      value: this.consumeToken().value
    };
    if (!this.match("templateEnd")) {
      this.errorMark("Expected templateEnd");
    }
    this.consumeToken();
    return node;
  }
  metricExpression() {
    if (!this.match("templateStart") && !this.match("identifier") && !this.match("number") && !this.match("{")) {
      return null;
    }
    const node = {
      type: "metric",
      segments: []
    };
    const segments = this.metricSegment();
    if (node.segments && segments) {
      node.segments.push(segments);
    }
    while (this.match(".")) {
      this.consumeToken();
      const segment = this.metricSegment();
      if (!segment) {
        this.errorMark("Expected metric identifier");
      }
      if (node.segments && segment) {
        node.segments.push(segment);
      }
    }
    return node;
  }
  functionCall() {
    if (!this.match("identifier", "(")) {
      return null;
    }
    let name = "";
    const token = this.consumeToken();
    if (typeof token.value === "string") {
      name = token.value;
    }
    const node = {
      type: "function",
      name
    };
    this.consumeToken();
    node.params = this.functionParameters();
    if (!this.match(")")) {
      this.errorMark("Expected closing parenthesis");
    }
    this.consumeToken();
    return node;
  }
  boolExpression() {
    if (!this.match("bool")) {
      return null;
    }
    return {
      type: "bool",
      value: this.consumeToken().value === "true"
    };
  }
  functionParameters() {
    if (this.match(")") || this.match("")) {
      return [];
    }
    const param = this.functionCall() || this.numericLiteral() || this.seriesRefExpression() || this.boolExpression() || this.metricExpression() || this.stringLiteral();
    if (!this.match(",") && param) {
      return [param];
    }
    this.consumeToken();
    if (param) {
      return [param].concat(this.functionParameters());
    }
    return [];
  }
  seriesRefExpression() {
    if (!this.match("identifier")) {
      return null;
    }
    const value = this.tokens[this.index].value;
    if (value && typeof value === "string" && !value.match(/\#[A-Z]/)) {
      return null;
    }
    const token = this.consumeToken();
    return {
      type: "series-ref",
      value: token.value
    };
  }
  numericLiteral() {
    if (!this.match("number")) {
      return null;
    }
    const token = this.consumeToken();
    if (token && token.value && typeof token.value === "string") {
      return {
        type: "number",
        value: parseFloat(token.value)
      };
    }
    return null;
  }
  stringLiteral() {
    if (!this.match("string")) {
      return null;
    }
    const token = this.consumeToken();
    if (token.isUnclosed && token.pos) {
      const error = {
        message: "Unclosed string parameter",
        pos: token.pos
      };
      throw error;
    }
    return {
      type: "string",
      value: token.value
    };
  }
  errorMark(text) {
    const currentToken = this.tokens[this.index];
    const type = currentToken ? currentToken.type : "end of string";
    const error = {
      message: text + " instead found " + type,
      pos: currentToken && currentToken.pos ? currentToken.pos : this.lexer.char
    };
    throw error;
  }
  // returns token value and incre
  consumeToken() {
    this.index++;
    return this.tokens[this.index - 1];
  }
  matchToken(type, index) {
    const token = this.tokens[this.index + index];
    return token === void 0 && type === "" || token && token.type === type;
  }
  match(token1, token2) {
    return this.matchToken(token1, 0) && (!token2 || this.matchToken(token2, 1));
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   actions: () => (/* binding */ actions)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");


const init = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("init");
const timeRangeChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("time-range-changed");
const queriesChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("queries-changed");
const queryChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("query-changed");
const segmentValueChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("segment-value-changed");
const addNewTag = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("add-new-tag");
const tagChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("tag-changed");
const unpause = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("unpause");
const addFunction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("add-function");
const removeFunction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("remove-function");
const moveFunction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("move-function");
const updateFunctionParam = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("change-function-param");
const updateQuery = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("update-query");
const runQuery = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("run-current-query");
const toggleEditorMode = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("toggle-editor");
const actions = {
  init,
  timeRangeChanged,
  queriesChanged,
  queryChanged,
  segmentValueChanged,
  tagChanged,
  addNewTag,
  unpause,
  addFunction,
  removeFunction,
  moveFunction,
  updateFunctionParam,
  updateQuery,
  runQuery,
  toggleEditorMode
};


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/state/context.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphiteQueryEditorContext: () => (/* binding */ GraphiteQueryEditorContext),
/* harmony export */   useDispatch: () => (/* binding */ useDispatch),
/* harmony export */   useGraphiteState: () => (/* binding */ useGraphiteState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-use/esm/usePrevious.js");
/* harmony import */ var _features_templating_template_srv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/store.ts");






const DispatchContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const GraphiteStateContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useDispatch = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DispatchContext);
};
const useGraphiteState = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(GraphiteStateContext);
};
const GraphiteQueryEditorContext = ({
  datasource,
  onRunQuery,
  onChange,
  query,
  queries,
  range,
  children
}) => {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [needsRefresh, setNeedsRefresh] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const dispatch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return (0,_store__WEBPACK_IMPORTED_MODULE_3__.createStore)((state2) => {
      setState(state2);
    });
  }, []);
  const previousRange = (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])(range);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (JSON.stringify(previousRange == null ? void 0 : previousRange.raw) !== JSON.stringify(range == null ? void 0 : range.raw)) {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_2__.actions.timeRangeChanged(range));
    }
  }, [dispatch, range, previousRange]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
    () => {
      if (state) {
        dispatch(_actions__WEBPACK_IMPORTED_MODULE_2__.actions.queriesChanged(queries));
      }
    },
    // adding state to dependencies causes infinite loops
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(queries)]
  );
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
    () => {
      var _a;
      if (state && ((_a = state.target) == null ? void 0 : _a.target) !== query.target) {
        dispatch(_actions__WEBPACK_IMPORTED_MODULE_2__.actions.queryChanged(query));
      }
    },
    // adding state to dependencies causes infinite loops
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch, query]
  );
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
    () => {
      if (needsRefresh && state) {
        setNeedsRefresh(false);
        onChange({ ...query, target: state.target.target, targetFull: state.target.targetFull });
        onRunQuery();
      }
    },
    // adding state to dependencies causes infinite loops
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [needsRefresh, JSON.stringify(query)]
  );
  if (!state) {
    dispatch(
      _actions__WEBPACK_IMPORTED_MODULE_2__.actions.init({
        target: query,
        datasource,
        range,
        templateSrv: (0,_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)(),
        // list of queries is passed only when the editor is in Dashboards or Alerting. This is to allow interpolation
        // of sub-queries which are stored in "targetFull" property. This is used by alerting in the backend.
        queries: queries || [],
        refresh: () => {
          setNeedsRefresh(true);
        }
      })
    );
    return null;
  } else {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GraphiteStateContext.Provider, { value: state }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DispatchContext.Provider, { value: dispatch }, children));
  }
};


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/state/helpers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GRAPHITE_TAG_OPERATORS: () => (/* binding */ GRAPHITE_TAG_OPERATORS),
/* harmony export */   TAG_PREFIX: () => (/* binding */ TAG_PREFIX),
/* harmony export */   addSelectMetricSegment: () => (/* binding */ addSelectMetricSegment),
/* harmony export */   addSeriesByTagFunc: () => (/* binding */ addSeriesByTagFunc),
/* harmony export */   buildSegments: () => (/* binding */ buildSegments),
/* harmony export */   checkOtherSegments: () => (/* binding */ checkOtherSegments),
/* harmony export */   emptySegments: () => (/* binding */ emptySegments),
/* harmony export */   handleMetricsAutoCompleteError: () => (/* binding */ handleMetricsAutoCompleteError),
/* harmony export */   handleTagsAutoCompleteError: () => (/* binding */ handleTagsAutoCompleteError),
/* harmony export */   handleTargetChanged: () => (/* binding */ handleTargetChanged),
/* harmony export */   parseTarget: () => (/* binding */ parseTarget),
/* harmony export */   pause: () => (/* binding */ pause),
/* harmony export */   removeTagPrefix: () => (/* binding */ removeTagPrefix),
/* harmony export */   smartlyHandleNewAliasByNode: () => (/* binding */ smartlyHandleNewAliasByNode),
/* harmony export */   spliceSegments: () => (/* binding */ spliceSegments)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_copy_appNotification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var _core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/reducers/appNotification.ts");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/store/store.ts");





const GRAPHITE_TAG_OPERATORS = ["=", "!=", "=~", "!=~"];
const TAG_PREFIX = "tag: ";
async function parseTarget(state) {
  state.queryModel.parseTarget();
  await buildSegments(state);
}
async function buildSegments(state, modifyLastSegment = true) {
  state.segments = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.clone)(state.queryModel.segments);
  const checkOtherSegmentsIndex = state.queryModel.checkOtherSegmentsIndex || 0;
  await checkOtherSegments(state, checkOtherSegmentsIndex, modifyLastSegment);
}
function addSelectMetricSegment(state) {
  state.queryModel.addSelectMetricSegment();
  state.segments.push({ value: "select metric", fake: true });
}
async function checkOtherSegments(state, fromIndex, modifyLastSegment = true) {
  if (state.queryModel.segments.length === 1 && state.queryModel.segments[0].type === "series-ref") {
    return;
  }
  if (fromIndex === 0) {
    addSelectMetricSegment(state);
    return;
  }
  const currentFromIndex = fromIndex + 1;
  const path = state.queryModel.getSegmentPathUpTo(currentFromIndex);
  if (path === "") {
    return;
  }
  try {
    const segments = await state.datasource.metricFindQuery(path);
    if (segments.length === 0) {
      if (path !== "" && modifyLastSegment) {
        state.queryModel.segments = state.queryModel.segments.splice(0, currentFromIndex);
        state.segments = state.segments.splice(0, currentFromIndex);
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.some)(state.segments, { fake: true })) {
          addSelectMetricSegment(state);
        }
      }
    } else if (segments[0].expandable) {
      if (state.segments.length === fromIndex) {
        addSelectMetricSegment(state);
      } else {
        await checkOtherSegments(state, currentFromIndex);
      }
    }
  } catch (err) {
    if (err instanceof Error) {
      handleMetricsAutoCompleteError(state, err);
    }
  }
}
function spliceSegments(state, index) {
  state.segments = state.segments.splice(0, index);
  state.queryModel.segments = state.queryModel.segments.splice(0, index);
}
function emptySegments(state) {
  state.queryModel.segments = [];
  state.segments = [];
}
async function addSeriesByTagFunc(state, tag) {
  const newFunc = state.datasource.createFuncInstance("seriesByTag", {
    withDefaultParams: false
  });
  const tagParam = "".concat(tag, "=");
  newFunc.params = [tagParam];
  state.queryModel.addFunction(newFunc);
  newFunc.added = true;
  emptySegments(state);
  handleTargetChanged(state);
  await parseTarget(state);
}
function smartlyHandleNewAliasByNode(state, func) {
  if (func.def.name !== "aliasByNode") {
    return;
  }
  for (let i = 0; i < state.segments.length; i++) {
    if (state.segments[i].value.indexOf("*") >= 0) {
      func.params[0] = i;
      func.added = false;
      handleTargetChanged(state);
      return;
    }
  }
}
function pause(state) {
  state.paused = true;
}
function removeTagPrefix(value) {
  return value.replace(TAG_PREFIX, "");
}
function handleTargetChanged(state) {
  if (state.queryModel.error) {
    return;
  }
  let oldTarget = state.queryModel.target.target;
  state.queryModel.updateModelTarget(
    (state.queries || []).filter((query) => "target" in query && typeof query.target === "string")
  );
  const newTarget = state.queryModel.target.target.replace(/\s+/g, "");
  oldTarget = oldTarget.replace(/\s+/g, "");
  if (newTarget !== oldTarget && !state.paused) {
    state.refresh();
  }
}
function handleMetricsAutoCompleteError(state, error) {
  if (!state.metricAutoCompleteErrorShown) {
    state.metricAutoCompleteErrorShown = true;
    (0,_store_store__WEBPACK_IMPORTED_MODULE_3__.dispatch)((0,_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_2__.notifyApp)((0,_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_1__.createErrorNotification)("Fetching metrics failed: ".concat(error.message, "."))));
  }
  return state;
}
function handleTagsAutoCompleteError(state, error) {
  if (!state.tagsAutoCompleteErrorShown) {
    state.tagsAutoCompleteErrorShown = true;
    (0,_store_store__WEBPACK_IMPORTED_MODULE_3__.dispatch)((0,_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_2__.notifyApp)((0,_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_1__.createErrorNotification)("Fetching tags failed: ".concat(error.message, "."))));
  }
  return state;
}


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/state/providers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAltSegmentsSelectables: () => (/* binding */ getAltSegmentsSelectables),
/* harmony export */   getTagOperatorsSelectables: () => (/* binding */ getTagOperatorsSelectables),
/* harmony export */   getTagValuesSelectables: () => (/* binding */ getTagValuesSelectables),
/* harmony export */   getTagsAsSegmentsSelectables: () => (/* binding */ getTagsAsSegmentsSelectables),
/* harmony export */   getTagsSelectables: () => (/* binding */ getTagsSelectables)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/helpers.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/helpers.ts");




const MAX_SUGGESTIONS = 5e3;
async function getAltSegments(state, index, prefix) {
  let query = prefix.length > 0 ? "*" + prefix + "*" : "*";
  if (index > 0) {
    query = state.queryModel.getSegmentPathUpTo(index) + "." + query;
  }
  const options = {
    range: state.range,
    requestId: "get-alt-segments"
  };
  try {
    const segments = await state.datasource.metricFindQuery(query, options);
    const altSegments = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(segments, (segment) => {
      return {
        value: segment.text,
        expandable: segment.expandable
      };
    });
    if (index > 0 && altSegments.length === 0) {
      return altSegments;
    }
    if (index === 0) {
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.eachRight)(state.queries, (target) => {
        if (target.refId === state.queryModel.target.refId) {
          return;
        }
        altSegments.unshift({
          type: "series-ref",
          value: "#" + target.refId,
          expandable: false
        });
      });
    }
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.eachRight)(state.templateSrv.getVariables(), (variable) => {
      altSegments.unshift({
        type: "template",
        value: "$" + variable.name,
        expandable: true
      });
    });
    altSegments.unshift({ value: "*", expandable: true });
    altSegments.splice(MAX_SUGGESTIONS);
    if (state.supportsTags && index === 0) {
      removeTaggedEntry(altSegments);
      return await addAltTagSegments(state, prefix, altSegments);
    } else {
      return altSegments;
    }
  } catch (err) {
    if (err instanceof Error) {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.handleMetricsAutoCompleteError)(state, err);
    }
  }
  return [];
}
async function getAltSegmentsSelectables(state, index, prefix) {
  return (0,_components_helpers__WEBPACK_IMPORTED_MODULE_1__.mapSegmentsToSelectables)(await getAltSegments(state, index, prefix));
}
function getTagOperatorsSelectables() {
  return (0,_components_helpers__WEBPACK_IMPORTED_MODULE_1__.mapStringsToSelectables)(_helpers__WEBPACK_IMPORTED_MODULE_2__.GRAPHITE_TAG_OPERATORS);
}
async function getTags(state, index, tagPrefix) {
  try {
    const tagExpressions = state.queryModel.renderTagExpressions(index);
    const values = await state.datasource.getTagsAutoComplete(tagExpressions, tagPrefix, {
      range: state.range,
      limit: MAX_SUGGESTIONS
    });
    const altTags = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(values, "text");
    altTags.splice(0, 0, state.removeTagValue);
    return altTags;
  } catch (err) {
    if (err instanceof Error) {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.handleTagsAutoCompleteError)(state, err);
    }
  }
  return [];
}
async function getTagsSelectables(state, index, tagPrefix) {
  return (0,_components_helpers__WEBPACK_IMPORTED_MODULE_1__.mapStringsToSelectables)(await getTags(state, index, tagPrefix));
}
async function getTagsAsSegments(state, tagPrefix) {
  let tagsAsSegments;
  try {
    const tagExpressions = state.queryModel.renderTagExpressions();
    const values = await state.datasource.getTagsAutoComplete(tagExpressions, tagPrefix, {
      range: state.range,
      limit: MAX_SUGGESTIONS
    });
    tagsAsSegments = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(values, (val) => {
      return {
        value: val.text,
        type: "tag",
        expandable: false
      };
    });
  } catch (err) {
    tagsAsSegments = [];
    if (err instanceof Error) {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.handleTagsAutoCompleteError)(state, err);
    }
  }
  return tagsAsSegments;
}
async function getTagsAsSegmentsSelectables(state, tagPrefix) {
  return (0,_components_helpers__WEBPACK_IMPORTED_MODULE_1__.mapSegmentsToSelectables)(await getTagsAsSegments(state, tagPrefix));
}
async function getTagValues(state, tag, index, valuePrefix) {
  const tagExpressions = state.queryModel.renderTagExpressions(index);
  const tagKey = tag.key;
  const values = await state.datasource.getTagValuesAutoComplete(tagExpressions, tagKey, valuePrefix, {
    limit: MAX_SUGGESTIONS
  });
  const altValues = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(values, "text");
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.eachRight)(state.templateSrv.getVariables(), (variable) => {
    altValues.push("${" + variable.name + ":regex}");
  });
  return altValues;
}
async function getTagValuesSelectables(state, tag, index, valuePrefix) {
  return (0,_components_helpers__WEBPACK_IMPORTED_MODULE_1__.mapStringsToSelectables)(await getTagValues(state, tag, index, valuePrefix));
}
async function addAltTagSegments(state, prefix, altSegments) {
  let tagSegments = await getTagsAsSegments(state, prefix);
  tagSegments = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(tagSegments, (segment) => {
    segment.value = _helpers__WEBPACK_IMPORTED_MODULE_2__.TAG_PREFIX + segment.value;
    return segment;
  });
  return altSegments.concat(...tagSegments);
}
function removeTaggedEntry(altSegments) {
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.remove)(altSegments, (s) => s.value === "_tagged");
}


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/state/store.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStore: () => (/* binding */ createStore)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _graphite_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/graphite/graphite_query.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/helpers.ts");





const reducer = async (action, state) => {
  state = { ...state };
  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.init.match(action)) {
    const deps = action.payload;
    deps.target.target = deps.target.target || "";
    await deps.datasource.waitForFuncDefsLoaded();
    state = {
      ...state,
      ...deps,
      queryModel: new _graphite_query__WEBPACK_IMPORTED_MODULE_0__["default"](deps.datasource, deps.target, (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getTemplateSrv)()),
      supportsTags: deps.datasource.supportsTags,
      paused: false,
      removeTagValue: "-- remove tag --",
      funcDefs: deps.datasource.funcDefs,
      queries: deps.queries
    };
    await (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.buildSegments)(state, false);
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.timeRangeChanged.match(action)) {
    state.range = action.payload;
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.queriesChanged.match(action)) {
    state.queries = action.payload;
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.handleTargetChanged)(state);
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.queryChanged.match(action)) {
    state.target.target = action.payload.target || "";
    await (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.parseTarget)(state);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.handleTargetChanged)(state);
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.segmentValueChanged.match(action)) {
    const { segment: segmentOrString, index: segmentIndex } = action.payload;
    let segment;
    if (typeof segmentOrString === "string") {
      segment = {
        value: segmentOrString,
        expandable: true,
        fake: false
      };
    } else {
      segment = segmentOrString;
    }
    state.error = null;
    state.segments[segmentIndex] = segment;
    state.queryModel.updateSegmentValue(segment, segmentIndex);
    if (state.queryModel.functions.length > 0 && state.queryModel.functions[0].def.fake) {
      state.queryModel.functions = [];
    }
    if (segment.type === "tag") {
      const tag = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.removeTagPrefix)(segment.value);
      (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.pause)(state);
      await (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.addSeriesByTagFunc)(state, tag);
      return state;
    }
    if (segment.expandable) {
      await (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.checkOtherSegments)(state, segmentIndex + 1);
    } else {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.spliceSegments)(state, segmentIndex + 1);
    }
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.handleTargetChanged)(state);
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.tagChanged.match(action)) {
    const { tag, index: tagIndex } = action.payload;
    state.queryModel.updateTag(tag, tagIndex);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.handleTargetChanged)(state);
    if (state.queryModel.tags.length === 0) {
      await (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.checkOtherSegments)(state, 0);
      state.paused = false;
    }
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.addNewTag.match(action)) {
    const segment = action.payload.segment;
    const newTagKey = segment.value;
    const newTag = { key: newTagKey, operator: "=", value: "" };
    state.queryModel.addTag(newTag);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.handleTargetChanged)(state);
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.unpause.match(action)) {
    state.paused = false;
    state.refresh();
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.addFunction.match(action)) {
    const newFunc = state.datasource.createFuncInstance(action.payload.name, {
      withDefaultParams: true
    });
    newFunc.added = true;
    state.queryModel.addFunction(newFunc);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.smartlyHandleNewAliasByNode)(state, newFunc);
    if (state.segments.length === 1 && state.segments[0].fake) {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.emptySegments)(state);
    }
    if (!newFunc.params.length && newFunc.added) {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.handleTargetChanged)(state);
    }
    if (newFunc.def.name === "seriesByTag") {
      await (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.parseTarget)(state);
    }
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.removeFunction.match(action)) {
    state.queryModel.removeFunction(action.payload.func);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.handleTargetChanged)(state);
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.moveFunction.match(action)) {
    const { func, offset } = action.payload;
    state.queryModel.moveFunction(func, offset);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.handleTargetChanged)(state);
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.updateFunctionParam.match(action)) {
    const { func, index, value } = action.payload;
    func.updateParam(value, index);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.handleTargetChanged)(state);
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.updateQuery.match(action)) {
    state.target.target = action.payload.query;
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.handleTargetChanged)(state);
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.runQuery.match(action)) {
    state.refresh();
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.toggleEditorMode.match(action)) {
    state.target.textEditor = !state.target.textEditor;
    await (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.parseTarget)(state);
  }
  return { ...state };
};
const createStore = (onChange) => {
  let state = {};
  const dispatch = async (action) => {
    state = await reducer(action, state);
    onChange(state);
  };
  return dispatch;
};


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphiteQueryType: () => (/* binding */ GraphiteQueryType),
/* harmony export */   GraphiteType: () => (/* binding */ GraphiteType)
/* harmony export */ });

var GraphiteQueryType = /* @__PURE__ */ ((GraphiteQueryType2) => {
  GraphiteQueryType2["Default"] = "Default";
  GraphiteQueryType2["Value"] = "Value";
  GraphiteQueryType2["MetricName"] = "Metric Name";
  return GraphiteQueryType2;
})(GraphiteQueryType || {});
var GraphiteType = /* @__PURE__ */ ((GraphiteType2) => {
  GraphiteType2["Default"] = "default";
  GraphiteType2["Metrictank"] = "metrictank";
  return GraphiteType2;
})(GraphiteType || {});


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isGraphiteParserError: () => (/* binding */ isGraphiteParserError),
/* harmony export */   reduceError: () => (/* binding */ reduceError)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


function reduceError(error) {
  var _a, _b;
  if (error && error.status === 500 && ((_b = (_a = error.data) == null ? void 0 : _a.message) == null ? void 0 : _b.startsWith("<body"))) {
    const newMessage = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(
      error.data.message.replace(/(<([^>]+)>)/gi, "").trim().split(/\n/)
    ).replace(/u?&#[^;]+;/g, "");
    error.data.message = "Graphite encountered an unexpected error while handling your request. ".concat(newMessage);
  }
  return error;
}
function isGraphiteParserError(e) {
  return typeof e === "object" && e !== null && "message" in e && "pos" in e;
}


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/versions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_GRAPHITE_VERSION: () => (/* binding */ DEFAULT_GRAPHITE_VERSION),
/* harmony export */   GRAPHITE_VERSIONS: () => (/* binding */ GRAPHITE_VERSIONS)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


const GRAPHITE_VERSIONS = ["0.9", "1.0", "1.1"];
const DEFAULT_GRAPHITE_VERSION = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(GRAPHITE_VERSIONS);


/***/ })

}]);
//# sourceMappingURL=graphitePlugin.443a0cf24a5f6a2dab39.js.map
"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["xychart"],{

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

/***/ "./public/app/features/dimensions/editors/ColorDimensionEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorDimensionEditor: () => (/* binding */ ColorDimensionEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/ColorPicker/ColorPicker.tsx");
/* harmony import */ var _grafana_ui_src_components_MatchersUI_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/MatchersUI/utils.ts");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;




const fixedColorOption = {
  label: "Fixed color",
  value: "_____fixed_____"
};
const ColorDimensionEditor = (props) => {
  var _a2, _b2, _c;
  const { value, context, onChange, item } = props;
  const defaultColor = "dark-green";
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const fieldName = value == null ? void 0 : value.field;
  const isFixed = value && Boolean(!fieldName) && (value == null ? void 0 : value.fixed);
  const names = (0,_grafana_ui_src_components_MatchersUI_utils__WEBPACK_IMPORTED_MODULE_3__.useFieldDisplayNames)(context.data);
  const selectOptions = (0,_grafana_ui_src_components_MatchersUI_utils__WEBPACK_IMPORTED_MODULE_3__.useSelectOptions)(names, fieldName, fixedColorOption, void 0, (_a2 = item.settings) == null ? void 0 : _a2.baseNameMode);
  const onSelectChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (selection) => {
      var _a3;
      if (!selection) {
        onChange(void 0);
        return;
      }
      const field = selection.value;
      if (field && field !== fixedColorOption.value) {
        onChange({
          ...value,
          field
        });
      } else {
        const fixed = (_a3 = value == null ? void 0 : value.fixed) != null ? _a3 : defaultColor;
        onChange({
          ...value,
          field: void 0,
          fixed
        });
      }
    },
    [onChange, value]
  );
  const onColorChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (c) => {
      onChange({
        field: void 0,
        fixed: c != null ? c : defaultColor
      });
    },
    [onChange]
  );
  const selectedOption = isFixed ? fixedColorOption : selectOptions.find((v) => v.value === fieldName);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.container }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select,
    {
      value: selectedOption,
      options: selectOptions,
      onChange: onSelectChange,
      noOptionsMessage: "No fields found",
      isClearable: (_b2 = item.settings) == null ? void 0 : _b2.isClearable,
      placeholder: (_c = item.settings) == null ? void 0 : _c.placeholder
    }
  ), isFixed && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.picker }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.ColorPicker, { color: value == null ? void 0 : value.fixed, onChange: onColorChange, enableNamedColors: true }))));
};
const getStyles = (theme) => ({
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: flex-end;\n    align-items: center;\n  "]))),
  picker: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_b || (_b = __template(["\n    padding-left: 8px;\n  "])))
});


/***/ }),

/***/ "./public/app/features/dimensions/editors/IconSelector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");




const IconSelector = ({ value, onChange }) => {
  const [icons, setIcons] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value ? [{ value, label: value }] : []);
  const [icon, setIcon] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const iconRoot = window.__grafana_public_path__ + "img/icons/unicons/";
  const onChangeIcon = (value2) => {
    onChange(value2);
    setIcon(value2);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get("".concat(iconRoot, "/index.json")).then((data) => {
      setIcons(
        data.files.map((icon2) => ({
          value: icon2,
          label: icon2
        }))
      );
    });
  }, [iconRoot]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select,
    {
      options: icons,
      value: icon,
      onChange: (selectedValue) => {
        onChangeIcon(selectedValue.value);
      }
    }
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconSelector);


/***/ }),

/***/ "./public/app/features/dimensions/editors/ResourceDimensionEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourceDimensionEditor: () => (/* binding */ ResourceDimensionEditor),
/* harmony export */   niceName: () => (/* binding */ niceName)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui_src_components_MatchersUI_FieldNamePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/MatchersUI/FieldNamePicker.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/dimensions/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dimensions/types.ts");
/* harmony import */ var _ResourcePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dimensions/editors/ResourcePicker.tsx");








const resourceOptions = [
  { label: "Fixed", value: _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.ResourceDimensionMode.Fixed, description: "Fixed value" },
  { label: "Field", value: _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.ResourceDimensionMode.Field, description: "Use a string field result" }
  //  { label: 'Mapping', value: ResourceDimensionMode.Mapping, description: 'Map the results of a value to an svg' },
];
const dummyFieldSettings = {
  settings: {}
};
const ResourceDimensionEditor = (props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const { value, context, onChange, item } = props;
  const labelWidth = 9;
  const onModeChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (mode2) => {
      onChange({
        ...value,
        mode: mode2
      });
    },
    [onChange, value]
  );
  const onFieldChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (field = "") => {
      onChange({
        ...value,
        field
      });
    },
    [onChange, value]
  );
  const onFixedChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (fixed) => {
      onChange({
        ...value,
        fixed: fixed != null ? fixed : ""
      });
    },
    [onChange, value]
  );
  const onClear = (event) => {
    event.stopPropagation();
    onChange({ mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.ResourceDimensionMode.Fixed, fixed: "", field: "" });
  };
  const mode = (_a = value == null ? void 0 : value.mode) != null ? _a : _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.ResourceDimensionMode.Fixed;
  const showSourceRadio = (_c = (_b = item.settings) == null ? void 0 : _b.showSourceRadio) != null ? _c : true;
  const mediaType = (_e = (_d = item.settings) == null ? void 0 : _d.resourceType) != null ? _e : _types__WEBPACK_IMPORTED_MODULE_2__.MediaType.Icon;
  const folderName = (_g = (_f = item.settings) == null ? void 0 : _f.folderName) != null ? _g : ___WEBPACK_IMPORTED_MODULE_1__.ResourceFolderName.Icon;
  const maxFiles = (_h = item.settings) == null ? void 0 : _h.maxFiles;
  let srcPath = "";
  if (mediaType === _types__WEBPACK_IMPORTED_MODULE_2__.MediaType.Icon) {
    if (value == null ? void 0 : value.fixed) {
      srcPath = (0,___WEBPACK_IMPORTED_MODULE_1__.getPublicOrAbsoluteUrl)(value.fixed);
    } else if ((_i = item.settings) == null ? void 0 : _i.placeholderValue) {
      srcPath = (0,___WEBPACK_IMPORTED_MODULE_1__.getPublicOrAbsoluteUrl)(item.settings.placeholderValue);
    }
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, showSourceRadio && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineFieldRow, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineField, { label: "Source", labelWidth, grow: true }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.RadioButtonGroup, { value: mode, options: resourceOptions, onChange: onModeChange, fullWidth: true }))), mode !== _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.ResourceDimensionMode.Fixed && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineFieldRow, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineField, { label: "Field", labelWidth, grow: true }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui_src_components_MatchersUI_FieldNamePicker__WEBPACK_IMPORTED_MODULE_8__.FieldNamePicker,
    {
      context,
      value: (_j = value.field) != null ? _j : "",
      onChange: onFieldChange,
      item: dummyFieldSettings
    }
  ))), mode === _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.ResourceDimensionMode.Fixed && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _ResourcePicker__WEBPACK_IMPORTED_MODULE_3__.ResourcePicker,
    {
      onChange: onFixedChange,
      onClear,
      value: value == null ? void 0 : value.fixed,
      src: srcPath,
      placeholder: (_l = (_k = item.settings) == null ? void 0 : _k.placeholderText) != null ? _l : "Select a value",
      name: (_m = niceName(value == null ? void 0 : value.fixed)) != null ? _m : "",
      mediaType,
      folderName,
      size: _types__WEBPACK_IMPORTED_MODULE_2__.ResourcePickerSize.NORMAL,
      maxFiles
    }
  ), mode === _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.ResourceDimensionMode.Mapping && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineFieldRow, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineField, { label: "Mappings", labelWidth, grow: true }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "TODO mappings editor!"))));
};
function niceName(value) {
  if (!value) {
    return void 0;
  }
  const idx = value.lastIndexOf("/");
  if (idx > 0) {
    return value.substring(idx + 1);
  }
  return value;
}


/***/ }),

/***/ "./public/app/features/dimensions/editors/ScalarDimensionEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScalarDimensionEditor: () => (/* binding */ ScalarDimensionEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui_src_components_MatchersUI_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/MatchersUI/utils.ts");
/* harmony import */ var _core_components_OptionsUI_NumberInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/OptionsUI/NumberInput.tsx");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;







const fixedValueOption = {
  label: "Fixed value",
  value: "_____fixed_____"
};
const scalarOptions = [
  { label: "Mod", value: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionMode.Mod, description: "Use field values, mod from max" },
  { label: "Clamped", value: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionMode.Clamped, description: "Use field values, clamped to max and min" }
];
const ScalarDimensionEditor = ({ value, context, onChange, item }) => {
  var _a2, _b;
  const { settings } = item;
  const DEFAULT_VALUE = 0;
  const fieldName = value == null ? void 0 : value.field;
  const isFixed = Boolean(!fieldName);
  const names = (0,_grafana_ui_src_components_MatchersUI_utils__WEBPACK_IMPORTED_MODULE_4__.useFieldDisplayNames)(context.data);
  const selectOptions = (0,_grafana_ui_src_components_MatchersUI_utils__WEBPACK_IMPORTED_MODULE_4__.useSelectOptions)(names, fieldName, fixedValueOption, _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.number);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  const onSelectChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (selection) => {
      var _a3;
      const field = selection.value;
      if (field && field !== fixedValueOption.value) {
        onChange({
          ...value,
          field
        });
      } else {
        const fixed = (_a3 = value.fixed) != null ? _a3 : DEFAULT_VALUE;
        onChange({
          ...value,
          field: void 0,
          fixed
        });
      }
    },
    [onChange, value]
  );
  const onModeChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (mode2) => {
      onChange({
        ...value,
        mode: mode2
      });
    },
    [onChange, value]
  );
  const onValueChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (v) => {
      onChange({
        ...value,
        field: void 0,
        fixed: v != null ? v : DEFAULT_VALUE
      });
    },
    [onChange, value]
  );
  const val = value != null ? value : {};
  const mode = (_a2 = value == null ? void 0 : value.mode) != null ? _a2 : _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionMode.Mod;
  const selectedOption = isFixed ? fixedValueOption : selectOptions.find((v) => v.value === fieldName);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineFieldRow, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineField, { label: "Limit", labelWidth: 8, grow: true }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.RadioButtonGroup, { value: mode, options: scalarOptions, onChange: onModeChange, fullWidth: true }))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Select,
    {
      value: selectedOption,
      options: selectOptions,
      onChange: onSelectChange,
      noOptionsMessage: "No fields found"
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.range }, isFixed && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineFieldRow, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineField, { label: "Value", labelWidth: 8, grow: true }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _core_components_OptionsUI_NumberInput__WEBPACK_IMPORTED_MODULE_2__.NumberInput,
    {
      value: (_b = val == null ? void 0 : val.fixed) != null ? _b : DEFAULT_VALUE,
      onChange: onValueChange,
      max: settings == null ? void 0 : settings.max,
      min: settings == null ? void 0 : settings.min
    }
  )))));
};
const getStyles = (theme) => ({
  range: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n    padding-top: 8px;\n  "])))
});


/***/ }),

/***/ "./public/app/features/dimensions/editors/ScaleDimensionEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScaleDimensionEditor: () => (/* binding */ ScaleDimensionEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui_src_components_MatchersUI_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/MatchersUI/utils.ts");
/* harmony import */ var _core_components_OptionsUI_NumberInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/OptionsUI/NumberInput.tsx");
/* harmony import */ var _scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dimensions/scale.ts");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;






const fixedValueOption = {
  label: "Fixed value",
  value: "_____fixed_____"
};
const ScaleDimensionEditor = (props) => {
  const { value, context, onChange, item } = props;
  const { settings } = item;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const fieldName = value == null ? void 0 : value.field;
  const isFixed = Boolean(!fieldName);
  const names = (0,_grafana_ui_src_components_MatchersUI_utils__WEBPACK_IMPORTED_MODULE_5__.useFieldDisplayNames)(context.data);
  const selectOptions = (0,_grafana_ui_src_components_MatchersUI_utils__WEBPACK_IMPORTED_MODULE_5__.useSelectOptions)(names, fieldName, fixedValueOption, settings == null ? void 0 : settings.filteredFieldType);
  const minMaxStep = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return (0,_scale__WEBPACK_IMPORTED_MODULE_3__.validateScaleOptions)(settings);
  }, [settings]);
  const validateAndDoChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (v) => {
      onChange((0,_scale__WEBPACK_IMPORTED_MODULE_3__.validateScaleConfig)(v, minMaxStep));
    },
    [onChange, minMaxStep]
  );
  const onSelectChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (selection) => {
      const field = selection.value;
      if (field && field !== fixedValueOption.value) {
        validateAndDoChange({
          ...value,
          field
        });
      } else {
        validateAndDoChange({
          ...value,
          field: void 0
        });
      }
    },
    [validateAndDoChange, value]
  );
  const onMinChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (min) => {
      if (min !== void 0) {
        validateAndDoChange({
          ...value,
          min
        });
      }
    },
    [validateAndDoChange, value]
  );
  const onMaxChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (max) => {
      if (max !== void 0) {
        validateAndDoChange({
          ...value,
          max
        });
      }
    },
    [validateAndDoChange, value]
  );
  const onValueChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (fixed) => {
      if (fixed !== void 0) {
        validateAndDoChange({
          ...value,
          fixed
        });
      }
    },
    [validateAndDoChange, value]
  );
  const val = value != null ? value : {};
  const selectedOption = isFixed ? fixedValueOption : selectOptions.find((v) => v.value === fieldName);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Select,
    {
      value: selectedOption,
      options: selectOptions,
      onChange: onSelectChange,
      noOptionsMessage: "No fields found"
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.range }, isFixed && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineFieldRow, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineField, { label: "Value", labelWidth: 8, grow: true }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_core_components_OptionsUI_NumberInput__WEBPACK_IMPORTED_MODULE_2__.NumberInput, { value: val.fixed, ...minMaxStep, onChange: onValueChange }))), !isFixed && !minMaxStep.hideRange && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineFieldRow, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineField, { label: "Min", labelWidth: 8, grow: true }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_core_components_OptionsUI_NumberInput__WEBPACK_IMPORTED_MODULE_2__.NumberInput, { value: val.min, ...minMaxStep, onChange: onMinChange }))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineFieldRow, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineField, { label: "Max", labelWidth: 8, grow: true }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_core_components_OptionsUI_NumberInput__WEBPACK_IMPORTED_MODULE_2__.NumberInput, { value: val.max, ...minMaxStep, onChange: onMaxChange }))))));
};
const getStyles = (theme) => ({
  range: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n    padding-top: 8px;\n  "])))
});


/***/ }),

/***/ "./public/app/features/dimensions/editors/TextDimensionEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextDimensionEditor: () => (/* binding */ TextDimensionEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui_src_components_MatchersUI_FieldNamePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/MatchersUI/FieldNamePicker.tsx");
/* harmony import */ var _core_components_OptionsUI_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/OptionsUI/string.tsx");






const textOptions = [
  { label: "Fixed", value: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.TextDimensionMode.Fixed, description: "Fixed value" },
  { label: "Field", value: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.TextDimensionMode.Field, description: "Display field value" }
  //  { label: 'Template', value: TextDimensionMode.Template, description: 'use template text' },
];
const dummyFieldSettings = {
  settings: {}
};
const dummyStringSettings = {
  settings: {}
};
const TextDimensionEditor = ({ value, context, onChange }) => {
  var _a, _b;
  const labelWidth = 9;
  const onModeChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (mode2) => {
      onChange({
        ...value,
        mode: mode2
      });
    },
    [onChange, value]
  );
  const onFieldChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (field) => {
      onChange({
        ...value,
        field
      });
    },
    [onChange, value]
  );
  const onFixedChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (fixed = "") => {
      onChange({
        ...value,
        fixed
      });
    },
    [onChange, value]
  );
  const onClearFixed = () => {
    onFixedChange("");
  };
  const mode = (_a = value == null ? void 0 : value.mode) != null ? _a : _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.TextDimensionMode.Fixed;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, { label: "Source", labelWidth, grow: true }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.RadioButtonGroup, { value: mode, options: textOptions, onChange: onModeChange, fullWidth: true }))), mode !== _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.TextDimensionMode.Fixed && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, { label: "Field", labelWidth, grow: true }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui_src_components_MatchersUI_FieldNamePicker__WEBPACK_IMPORTED_MODULE_6__.FieldNamePicker,
    {
      context,
      value: (_b = value.field) != null ? _b : "",
      onChange: onFieldChange,
      item: dummyFieldSettings
    }
  ))), mode === _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.TextDimensionMode.Fixed && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, { key: value == null ? void 0 : value.fixed }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, { label: "Value", labelWidth, grow: true }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _core_components_OptionsUI_string__WEBPACK_IMPORTED_MODULE_1__.StringValueEditor,
    {
      context,
      value: value == null ? void 0 : value.fixed,
      onChange: onFixedChange,
      item: dummyStringSettings,
      suffix: (value == null ? void 0 : value.fixed) && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { icon: "times", variant: "secondary", fill: "text", size: "sm", onClick: onClearFixed })
    }
  ))), mode === _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.TextDimensionMode.Template && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, { label: "Template", labelWidth, grow: true }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _core_components_OptionsUI_string__WEBPACK_IMPORTED_MODULE_1__.StringValueEditor,
    {
      context,
      value: value == null ? void 0 : value.fixed,
      onChange: onFixedChange,
      item: dummyStringSettings
    }
  ))));
};


/***/ }),

/***/ "./public/app/features/dimensions/editors/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorDimensionEditor: () => (/* reexport safe */ _ColorDimensionEditor__WEBPACK_IMPORTED_MODULE_0__.ColorDimensionEditor),
/* harmony export */   ResourceDimensionEditor: () => (/* reexport safe */ _ResourceDimensionEditor__WEBPACK_IMPORTED_MODULE_2__.ResourceDimensionEditor),
/* harmony export */   ScalarDimensionEditor: () => (/* reexport safe */ _ScalarDimensionEditor__WEBPACK_IMPORTED_MODULE_4__.ScalarDimensionEditor),
/* harmony export */   ScaleDimensionEditor: () => (/* reexport safe */ _ScaleDimensionEditor__WEBPACK_IMPORTED_MODULE_3__.ScaleDimensionEditor),
/* harmony export */   TextDimensionEditor: () => (/* reexport safe */ _TextDimensionEditor__WEBPACK_IMPORTED_MODULE_5__.TextDimensionEditor),
/* harmony export */   niceName: () => (/* reexport safe */ _ResourceDimensionEditor__WEBPACK_IMPORTED_MODULE_2__.niceName)
/* harmony export */ });
/* harmony import */ var _ColorDimensionEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/dimensions/editors/ColorDimensionEditor.tsx");
/* harmony import */ var _IconSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/dimensions/editors/IconSelector.tsx");
/* harmony import */ var _ResourceDimensionEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dimensions/editors/ResourceDimensionEditor.tsx");
/* harmony import */ var _ScaleDimensionEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dimensions/editors/ScaleDimensionEditor.tsx");
/* harmony import */ var _ScalarDimensionEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dimensions/editors/ScalarDimensionEditor.tsx");
/* harmony import */ var _TextDimensionEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dimensions/editors/TextDimensionEditor.tsx");









/***/ }),

/***/ "./public/app/plugins/panel/xychart/AutoEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoEditor: () => (/* binding */ AutoEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/field/fieldState.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _dims__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/xychart/dims.ts");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;





const AutoEditor = ({ value, onChange, context }) => {
  var _a2, _b2;
  const frameNames = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _a3;
    if ((_a3 = context == null ? void 0 : context.data) == null ? void 0 : _a3.length) {
      return context.data.map((f, idx) => ({
        value: idx,
        label: "".concat((0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getFrameDisplayName)(f, idx), " (index: ").concat(idx, ", rows: ").concat(f.length, ")")
      }));
    }
    return [{ value: 0, label: "First result" }];
  }, [context.data]);
  const dims = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_dims__WEBPACK_IMPORTED_MODULE_2__.getXYDimensions)(value, context.data), [context.data, value]);
  const info = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _a3, _b3;
    const v = {
      numberFields: [],
      yFields: [],
      xAxis: (value == null ? void 0 : value.x) ? {
        label: "".concat(value.x, " (Not found)"),
        value: value.x
        // empty
      } : void 0
    };
    const frame = context.data ? context.data[(_a3 = value == null ? void 0 : value.frame) != null ? _a3 : 0] : void 0;
    if (frame) {
      const xName = "x" in dims ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getFieldDisplayName)(dims.x, dims.frame, context.data) : void 0;
      for (let field of frame.fields) {
        if ((0,_dims__WEBPACK_IMPORTED_MODULE_2__.isGraphable)(field)) {
          const name = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getFieldDisplayName)(field, frame, context.data);
          const sel = {
            label: name,
            value: name
          };
          v.numberFields.push(sel);
          if ((value == null ? void 0 : value.x) && name === value.x) {
            v.xAxis = sel;
          }
          if (xName !== name) {
            v.yFields.push({
              label: name,
              value: (_b3 = value == null ? void 0 : value.exclude) == null ? void 0 : _b3.includes(name)
            });
          }
        }
      }
      if (!v.xAxis) {
        v.xAxis = { label: xName, value: xName };
      }
    }
    return v;
  }, [dims, context.data, value]);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  if (!((_a2 = context.data) == null ? void 0 : _a2.length)) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, "No data...");
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, { label: "Data" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Select,
    {
      isClearable: true,
      options: frameNames,
      placeholder: "Change filter",
      value: frameNames.find((v) => v.value === (value == null ? void 0 : value.frame)),
      onChange: (v) => {
        onChange({
          ...value,
          frame: v == null ? void 0 : v.value,
          x: void 0
        });
      }
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, { label: "X Field" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Select,
    {
      isClearable: true,
      options: info.numberFields,
      value: info.xAxis,
      placeholder: "".concat((_b2 = info.numberFields) == null ? void 0 : _b2[0].label, " (First numeric)"),
      onChange: (v) => {
        onChange({
          ...value,
          x: v == null ? void 0 : v.value
        });
      }
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, { label: "Y Fields" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, info.yFields.map((v) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { key: v.label, className: styles.row }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.IconButton,
    {
      name: v.value ? "eye-slash" : "eye",
      onClick: () => {
        const exclude = (value == null ? void 0 : value.exclude) ? [...value.exclude] : [];
        let idx = exclude.indexOf(v.label);
        if (idx < 0) {
          exclude.push(v.label);
        } else {
          exclude.splice(idx, 1);
        }
        onChange({
          ...value,
          exclude
        });
      },
      tooltip: v.value ? "Disable" : "Enable"
    }
  ), v.label)))));
};
const getStyles = (theme) => ({
  sorter: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n    margin-top: 10px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    align-items: center;\n    cursor: pointer;\n  "]))),
  row: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_b || (_b = __template(["\n    padding: ", ";\n    border-radius: ", ";\n    background: ", ";\n    min-height: ", ";\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    align-items: center;\n    margin-bottom: 3px;\n    border: 1px solid ", ";\n  "])), theme.spacing(0.5, 1), theme.shape.radius.default, theme.colors.background.secondary, theme.spacing(4), theme.components.input.borderColor)
});


/***/ }),

/***/ "./public/app/plugins/panel/xychart/ManualEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManualEditor: () => (/* binding */ ManualEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/field/fieldState.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-data/src/field/overrides/processors.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _core_components_Layers_LayerName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Layers/LayerName.tsx");
/* harmony import */ var _ScatterSeriesEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/xychart/ScatterSeriesEditor.tsx");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/xychart/panelcfg.gen.ts");








const ManualEditor = ({
  value,
  onChange,
  context
}) => {
  var _a, _b;
  const frameNames = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _a2;
    if ((_a2 = context == null ? void 0 : context.data) == null ? void 0 : _a2.length) {
      return context.data.map((frame, index) => ({
        value: index,
        label: "".concat((0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.getFrameDisplayName)(frame, index), " (index: ").concat(index, ", rows: ").concat(frame.length, ")")
      }));
    }
    return [{ value: 0, label: "First result" }];
  }, [context.data]);
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  const onFieldChange = (val, index, field) => {
    onChange(
      value.map((obj, i) => {
        if (i === index) {
          return { ...obj, [field]: val };
        }
        return obj;
      })
    );
  };
  const createNewSeries = () => {
    onChange([
      ...value,
      {
        pointColor: void 0,
        pointSize: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__.defaultFieldConfig.pointSize
      }
    ]);
    setSelected(value.length);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!(value == null ? void 0 : value.length)) {
      createNewSeries();
    }
  }, []);
  const onSeriesDelete = (index) => {
    onChange(value.filter((_, i) => i !== index));
  };
  const getRowStyle = (index) => {
    return index === selected ? "".concat(style.row, " ").concat(style.sel) : style.row;
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { icon: "plus", size: "sm", variant: "secondary", onClick: createNewSeries, className: style.marginBot }, "Add series"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: style.marginBot }, value.map((series, index) => {
    var _a2;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      "div",
      {
        key: "series/".concat(index),
        className: getRowStyle(index),
        onClick: () => setSelected(index),
        role: "button",
        "aria-label": "Select series ".concat(index + 1),
        tabIndex: 0,
        onKeyPress: (e) => {
          if (e.key === "Enter") {
            setSelected(index);
          }
        }
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
        _core_components_Layers_LayerName__WEBPACK_IMPORTED_MODULE_2__.LayerName,
        {
          name: (_a2 = series.name) != null ? _a2 : "Series ".concat(index + 1),
          onChange: (v) => onFieldChange(v, index, "name")
        }
      ),
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.IconButton,
        {
          name: "trash-alt",
          title: "remove",
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(style.actionIcon),
          onClick: () => onSeriesDelete(index),
          tooltip: "Delete series"
        }
      )
    );
  })), selected >= 0 && value[selected] && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, frameNames.length > 1 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field, { label: "Data" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Select,
    {
      isClearable: false,
      options: frameNames,
      placeholder: "Change filter",
      value: (_a = frameNames.find((v) => {
        return v.value === value[selected].frame;
      })) != null ? _a : 0,
      onChange: (val) => {
        onChange(
          value.map((obj, i) => {
            if (i === selected) {
              if (val === null) {
                return { ...value[i], frame: void 0 };
              }
              return { ...value[i], frame: val == null ? void 0 : val.value, x: void 0, y: void 0 };
            }
            return obj;
          })
        );
      }
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _ScatterSeriesEditor__WEBPACK_IMPORTED_MODULE_3__.ScatterSeriesEditor,
    {
      key: "series/".concat(selected),
      baseNameMode: _grafana_data__WEBPACK_IMPORTED_MODULE_11__.FieldNamePickerBaseNameMode.ExcludeBaseNames,
      item: {},
      context,
      value: value[selected],
      onChange: (val) => {
        onChange(
          value.map((obj, i) => {
            if (i === selected) {
              return val;
            }
            return obj;
          })
        );
      },
      frameFilter: (_b = value[selected].frame) != null ? _b : void 0
    }
  )));
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

/***/ "./public/app/plugins/panel/xychart/ScatterSeriesEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScatterSeriesEditor: () => (/* binding */ ScatterSeriesEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui_src_components_MatchersUI_FieldNamePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/MatchersUI/FieldNamePicker.tsx");
/* harmony import */ var _features_dimensions_editors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/dimensions/editors/index.ts");





const ScatterSeriesEditor = ({ value, onChange, context, baseNameMode, frameFilter = -1 }) => {
  var _a, _b;
  const onFieldChange = (val, field) => {
    onChange({ ...value, [field]: val });
  };
  const frame = context.data && frameFilter > -1 ? context.data[frameFilter] : void 0;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, { label: "X Field" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui_src_components_MatchersUI_FieldNamePicker__WEBPACK_IMPORTED_MODULE_3__.FieldNamePicker,
    {
      value: (_a = value.x) != null ? _a : "",
      context,
      onChange: (field) => onFieldChange(field, "x"),
      item: {
        id: "x",
        name: "x",
        settings: {
          filter: (field) => {
            var _a2;
            return (_a2 = frame == null ? void 0 : frame.fields.some((obj) => {
              var _a3, _b2;
              return ((_a3 = obj.state) == null ? void 0 : _a3.displayName) === ((_b2 = field.state) == null ? void 0 : _b2.displayName);
            })) != null ? _a2 : true;
          },
          baseNameMode,
          placeholderText: "select X field"
        }
      }
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, { label: "Y Field" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui_src_components_MatchersUI_FieldNamePicker__WEBPACK_IMPORTED_MODULE_3__.FieldNamePicker,
    {
      value: (_b = value.y) != null ? _b : "",
      context,
      onChange: (field) => onFieldChange(field, "y"),
      item: {
        id: "y",
        name: "y",
        settings: {
          filter: (field) => {
            var _a2;
            return (_a2 = frame == null ? void 0 : frame.fields.some((obj) => {
              var _a3, _b2;
              return ((_a3 = obj.state) == null ? void 0 : _a3.displayName) === ((_b2 = field.state) == null ? void 0 : _b2.displayName);
            })) != null ? _a2 : true;
          },
          baseNameMode,
          placeholderText: "select Y field"
        }
      }
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, { label: "Point color" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _features_dimensions_editors__WEBPACK_IMPORTED_MODULE_1__.ColorDimensionEditor,
    {
      value: value.pointColor,
      context,
      onChange: (field) => onFieldChange(field, "pointColor"),
      item: {
        id: "x",
        name: "x",
        settings: {
          baseNameMode,
          isClearable: true,
          placeholder: "Use standard color scheme"
        }
      }
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, { label: "Point size" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _features_dimensions_editors__WEBPACK_IMPORTED_MODULE_1__.ScaleDimensionEditor,
    {
      value: value.pointSize,
      context,
      onChange: (field) => onFieldChange(field, "pointSize"),
      item: {
        id: "x",
        name: "x",
        settings: {
          min: 1,
          max: 100
        }
      }
    }
  )));
};


/***/ }),

/***/ "./public/app/plugins/panel/xychart/XYChartPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XYChartPanel: () => (/* binding */ XYChartPanel)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/react-use/esm/usePrevious.js");
/* harmony import */ var _grafana_data_src_themes_colorManipulator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-data/src/themes/colorManipulator.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/VizLayout/VizLayout.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/VizLegend/VizLegend.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/Plot.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/plugins/TooltipPlugin2.tsx");
/* harmony import */ var _grafana_ui_src_components_uPlot_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/utils.ts");
/* harmony import */ var _XYChartTooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/xychart/XYChartTooltip.tsx");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/xychart/panelcfg.gen.ts");
/* harmony import */ var _scatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/xychart/scatter.ts");












const XYChartPanel = (props) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useTheme2)();
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [series, setSeries] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [builder, setBuilder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [facets, setFacets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const oldOptions = (0,react_use__WEBPACK_IMPORTED_MODULE_6__["default"])(props.options);
  const oldData = (0,react_use__WEBPACK_IMPORTED_MODULE_6__["default"])(props.data);
  const initSeries = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    const getData = () => props.data.series;
    const info = (0,_scatter__WEBPACK_IMPORTED_MODULE_4__.prepScatter)(props.options, getData, _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.config.theme2);
    if (info.error) {
      setError(info.error);
    } else if (info.series.length && props.data.series) {
      setBuilder(info.builder);
      setSeries(info.series);
      setFacets(() => (0,_scatter__WEBPACK_IMPORTED_MODULE_4__.prepData)(info, props.data.series));
      setError(void 0);
    }
  }, [props.data.series, props.options]);
  const initFacets = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setFacets(() => (0,_scatter__WEBPACK_IMPORTED_MODULE_4__.prepData)({ error, series }, props.data.series));
  }, [props.data.series, error, series]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (oldOptions !== props.options || (oldData == null ? void 0 : oldData.structureRev) !== props.data.structureRev) {
      initSeries();
    } else if ((oldData == null ? void 0 : oldData.series) !== props.data.series) {
      initFacets();
    }
  }, [props]);
  const renderLegend = () => {
    var _a, _b, _c, _d;
    const items = [];
    for (let si = 0; si < series.length; si++) {
      const s = series[si];
      const frame = s.frame(props.data.series);
      if (frame) {
        for (const item of s.legend()) {
          const field = s.y(frame);
          item.getDisplayValues = () => (0,_grafana_ui_src_components_uPlot_utils__WEBPACK_IMPORTED_MODULE_8__.getDisplayValuesForCalcs)(props.options.legend.calcs, field, theme);
          item.disabled = !((_a = s.show) != null ? _a : true);
          if (props.options.seriesMapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_3__.SeriesMapping.Manual) {
            item.label = (_d = (_c = (_b = props.options.series) == null ? void 0 : _b[si]) == null ? void 0 : _c.name) != null ? _d : "Series ".concat(si + 1);
          }
          item.color = (0,_grafana_data_src_themes_colorManipulator__WEBPACK_IMPORTED_MODULE_9__.alpha)(s.lineColor(frame), 1);
          items.push(item);
        }
      }
    }
    if (!props.options.legend.showLegend) {
      return null;
    }
    const legendStyle = {
      flexStart: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
        div: {
          justifyContent: "flex-start"
        }
      })
    };
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.VizLayout.Legend, { placement: props.options.legend.placement, width: props.options.legend.width }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.VizLegend,
      {
        className: legendStyle.flexStart,
        placement: props.options.legend.placement,
        items,
        displayMode: props.options.legend.displayMode
      }
    ));
  };
  if (error || !builder || !facets) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "panel-empty" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, error));
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.VizLayout, { width: props.width, height: props.height, legend: renderLegend() }, (vizWidth, vizHeight) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.UPlotChart, { config: builder, data: facets, width: vizWidth, height: vizHeight }, props.options.tooltip.mode !== _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.TooltipDisplayMode.None && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
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
            allSeries: series,
            dismiss,
            isPinned,
            options: props.options,
            seriesIdx
          }
        );
      },
      maxWidth: props.options.tooltip.maxWidth
    }
  ))));
};


/***/ }),

/***/ "./public/app/plugins/panel/xychart/XYChartTooltip.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XYChartTooltip: () => (/* binding */ XYChartTooltip)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/field/fieldState.ts");
/* harmony import */ var _grafana_data_src_themes_colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/themes/colorManipulator.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_src_components_VizTooltip_VizTooltipContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipContent.tsx");
/* harmony import */ var _grafana_ui_src_components_VizTooltip_VizTooltipFooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipFooter.tsx");
/* harmony import */ var _grafana_ui_src_components_VizTooltip_VizTooltipHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipHeader.tsx");
/* harmony import */ var _grafana_ui_src_components_VizTooltip_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/types.ts");
/* harmony import */ var _status_history_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/status-history/utils.ts");
/* harmony import */ var _timeseries_TimeSeriesTooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/timeseries/TimeSeriesTooltip.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/xychart/utils.ts");












const XYChartTooltip = ({ dataIdxs, seriesIdx, data, allSeries, dismiss, options, isPinned }) => {
  var _a, _b, _c;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(_timeseries_TimeSeriesTooltip__WEBPACK_IMPORTED_MODULE_2__.getStyles);
  const rowIndex = dataIdxs.find((idx) => idx !== null);
  const hoveredPointIndex = seriesIdx - 1;
  if (!allSeries || rowIndex == null) {
    return null;
  }
  const series = allSeries[hoveredPointIndex];
  const frame = series.frame(data);
  const xField = series.x(frame);
  const yField = series.y(frame);
  let label = series.name;
  if (options.seriesMapping === "manual") {
    label = (_c = (_b = (_a = options.series) == null ? void 0 : _a[hoveredPointIndex]) == null ? void 0 : _b.name) != null ? _c : "Series ".concat(hoveredPointIndex + 1);
  }
  let colorThing = series.pointColor(frame);
  if (Array.isArray(colorThing)) {
    colorThing = colorThing[rowIndex];
  }
  const headerItem = {
    label,
    value: "",
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    color: (0,_grafana_data_src_themes_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(colorThing, 0.5),
    colorIndicator: _grafana_ui_src_components_VizTooltip_types__WEBPACK_IMPORTED_MODULE_6__.ColorIndicator.marker_md
  };
  const contentItems = [
    {
      label: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.getFieldDisplayName)(xField, frame),
      value: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.fmt)(xField, xField.values[rowIndex])
    },
    {
      label: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.getFieldDisplayName)(yField, frame),
      value: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.fmt)(yField, yField.values[rowIndex])
    }
  ];
  const extraFields = frame.fields.filter((f) => f !== xField && f !== yField);
  if (extraFields) {
    extraFields.forEach((field) => {
      contentItems.push({
        label: field.name,
        value: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.fmt)(field, field.values[rowIndex])
      });
    });
  }
  let footer;
  if (isPinned && seriesIdx != null) {
    const links = (0,_status_history_utils__WEBPACK_IMPORTED_MODULE_1__.getDataLinks)(yField, rowIndex);
    footer = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui_src_components_VizTooltip_VizTooltipFooter__WEBPACK_IMPORTED_MODULE_8__.VizTooltipFooter, { dataLinks: links });
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.wrapper }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui_src_components_VizTooltip_VizTooltipHeader__WEBPACK_IMPORTED_MODULE_9__.VizTooltipHeader, { item: headerItem, isPinned }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui_src_components_VizTooltip_VizTooltipContent__WEBPACK_IMPORTED_MODULE_10__.VizTooltipContent, { items: contentItems, isPinned }), footer);
};


/***/ }),

/***/ "./public/app/plugins/panel/xychart/config.ts":
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
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/xychart/panelcfg.gen.ts");





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
            { label: "Points", value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_1__.ScatterShow.Points },
            { label: "Lines", value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_1__.ScatterShow.Lines },
            { label: "Both", value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_1__.ScatterShow.PointsAndLines }
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
        showIf: (c) => c.show !== _panelcfg_gen__WEBPACK_IMPORTED_MODULE_1__.ScatterShow.Lines
      }).addCustomEditor({
        id: "lineStyle",
        path: "lineStyle",
        name: "Line style",
        showIf: (c) => c.show !== _panelcfg_gen__WEBPACK_IMPORTED_MODULE_1__.ScatterShow.Points,
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
        showIf: (c) => c.show !== _panelcfg_gen__WEBPACK_IMPORTED_MODULE_1__.ScatterShow.Points
      });
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.addAxisConfig(builder, cfg);
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.addHideFrom(builder);
    }
  };
}


/***/ }),

/***/ "./public/app/plugins/panel/xychart/dims.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DimensionError: () => (/* binding */ DimensionError),
/* harmony export */   getXYDimensions: () => (/* binding */ getXYDimensions),
/* harmony export */   isGraphable: () => (/* binding */ isGraphable)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/field/fieldState.ts");


var DimensionError = /* @__PURE__ */ ((DimensionError2) => {
  DimensionError2[DimensionError2["NoData"] = 0] = "NoData";
  DimensionError2[DimensionError2["BadFrameSelection"] = 1] = "BadFrameSelection";
  DimensionError2[DimensionError2["XNotFound"] = 2] = "XNotFound";
  return DimensionError2;
})(DimensionError || {});
function isGraphable(field) {
  return field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number;
}
function getXYDimensions(cfg, data) {
  var _a;
  if (!data || !data.length) {
    return { error: 0 /* NoData */ };
  }
  if (!cfg) {
    cfg = {
      frame: 0
    };
  }
  let frame = data[(_a = cfg.frame) != null ? _a : 0];
  if (!frame) {
    return { error: 1 /* BadFrameSelection */ };
  }
  let xIndex = -1;
  for (let i = 0; i < frame.fields.length; i++) {
    const f = frame.fields[i];
    if (cfg.x && cfg.x === (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getFieldDisplayName)(f, frame, data)) {
      xIndex = i;
      break;
    }
    if (isGraphable(f) && !cfg.x) {
      xIndex = i;
      break;
    }
  }
  let hasTime = false;
  const x = frame.fields[xIndex];
  const fields = [x];
  for (const f of frame.fields) {
    if (f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.time) {
      hasTime = true;
    }
    if (f === x || !isGraphable(f)) {
      continue;
    }
    if (cfg.exclude) {
      const name = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getFieldDisplayName)(f, frame, data);
      if (cfg.exclude.includes(name)) {
        continue;
      }
    }
    fields.push(f);
  }
  return {
    x,
    fields: {
      x: getSimpleFieldMatcher(x),
      y: getSimpleFieldNotMatcher(x)
      // Not x
    },
    frame: {
      ...frame,
      fields
    },
    hasData: frame.fields.length > 0,
    hasTime
  };
}
function getSimpleFieldMatcher(f) {
  if (!f) {
    return () => false;
  }
  return (field) => f === field || !!(f.state && f.state === field.state);
}
function getSimpleFieldNotMatcher(f) {
  if (!f) {
    return () => false;
  }
  const m = getSimpleFieldMatcher(f);
  return (field) => !m(field, { fields: [], length: 0 }, []);
}


/***/ }),

/***/ "./public/app/plugins/panel/xychart/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/panel/PanelPlugin.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/options/builder/tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/options/builder/legend.tsx");
/* harmony import */ var _AutoEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/panel/xychart/AutoEditor.tsx");
/* harmony import */ var _ManualEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/xychart/ManualEditor.tsx");
/* harmony import */ var _XYChartPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/xychart/XYChartPanel.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/xychart/config.ts");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/xychart/panelcfg.gen.ts");








const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_5__.PanelPlugin(_XYChartPanel__WEBPACK_IMPORTED_MODULE_2__.XYChartPanel).useFieldConfig((0,_config__WEBPACK_IMPORTED_MODULE_3__.getScatterFieldConfig)(_panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__.defaultFieldConfig)).setPanelOptions((builder) => {
  builder.addRadio({
    path: "seriesMapping",
    name: "Series mapping",
    defaultValue: "auto",
    settings: {
      options: [
        { value: "auto", label: "Table", description: "Plot values within a single table result" },
        { value: "manual", label: "Manual", description: "Construct values from any result" }
      ]
    }
  }).addCustomEditor({
    id: "xyPlotConfig",
    path: "dims",
    name: "",
    editor: _AutoEditor__WEBPACK_IMPORTED_MODULE_0__.AutoEditor,
    showIf: (cfg) => cfg.seriesMapping === "auto"
  }).addCustomEditor({
    id: "series",
    path: "series",
    name: "",
    defaultValue: [],
    editor: _ManualEditor__WEBPACK_IMPORTED_MODULE_1__.ManualEditor,
    showIf: (cfg) => cfg.seriesMapping === "manual"
  });
  _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.addTooltipOptions(builder, true);
  _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.addLegendOptions(builder);
});


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

/***/ "./public/app/plugins/panel/xychart/scatter.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prepData: () => (/* binding */ prepData),
/* harmony export */   prepScatter: () => (/* binding */ prepScatter)
/* harmony export */ });
/* harmony import */ var uplot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/uplot/dist/uPlot.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/field/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-data/src/field/displayProcessor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-data/src/field/fieldState.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_data_src_themes_colorManipulator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-data/src/themes/colorManipulator.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/config/UPlotConfigBuilder.ts");
/* harmony import */ var _features_dimensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/dimensions/index.ts");
/* harmony import */ var _barchart_quadtree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/barchart/quadtree.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/xychart/config.ts");
/* harmony import */ var _dims__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/xychart/dims.ts");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/xychart/panelcfg.gen.ts");












function prepScatter(options, getData, theme) {
  let series;
  let builder;
  try {
    series = prepSeries(options, getData());
    builder = prepConfig(getData, series, theme);
  } catch (e) {
    let errorMsg = "Unknown error in prepScatter";
    if (typeof e === "string") {
      errorMsg = e;
    } else if (e instanceof Error) {
      errorMsg = e.message;
    }
    return {
      error: errorMsg,
      series: []
    };
  }
  return {
    series,
    builder
  };
}
function getScatterSeries(seriesIndex, frames, frameIndex, xIndex, yIndex, dims) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const frame = frames[frameIndex];
  const y = frame.fields[yIndex];
  let state = (_a = y.state) != null ? _a : {};
  state.seriesIndex = seriesIndex;
  y.state = state;
  let seriesColor = dims.pointColorFixed ? _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.config.theme2.visualization.getColorByName(dims.pointColorFixed) : (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.getFieldSeriesColor)(y, _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.config.theme2).color;
  let pointColor = () => seriesColor;
  const fieldConfig = { ..._panelcfg_gen__WEBPACK_IMPORTED_MODULE_5__.defaultFieldConfig, ...y.config.custom };
  let pointColorMode = _grafana_data__WEBPACK_IMPORTED_MODULE_7__.fieldColorModeRegistry.get(_grafana_data__WEBPACK_IMPORTED_MODULE_8__.FieldColorModeId.PaletteClassic);
  if (dims.pointColorIndex) {
    const f = frames[frameIndex].fields[dims.pointColorIndex];
    if (f) {
      pointColorMode = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.getFieldColorModeForField)(y);
      if (pointColorMode.isByValue) {
        const index = dims.pointColorIndex;
        pointColor = (frame2) => {
          var _a2;
          const field = frame2.fields[index];
          if ((_a2 = field.state) == null ? void 0 : _a2.range) {
            field.state.range = void 0;
          }
          field.display = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_9__.getDisplayProcessor)({ field, theme: _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.config.theme2 });
          return field.values.map((v) => field.display(v).color);
        };
      } else {
        seriesColor = pointColorMode.getCalculator(f, _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.config.theme2)(f.values[0], 1);
        pointColor = () => seriesColor;
      }
    }
  }
  let pointSizeHints = dims.pointSizeConfig;
  let pointSizeFixed = (_f = (_e = (_b = dims.pointSizeConfig) == null ? void 0 : _b.fixed) != null ? _e : (_d = (_c = y.config.custom) == null ? void 0 : _c.pointSize) == null ? void 0 : _d.fixed) != null ? _f : _config__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_POINT_SIZE;
  let pointSize = () => pointSizeFixed;
  if (dims.pointSizeIndex) {
    pointSize = (frame2) => {
      const s = (0,_features_dimensions__WEBPACK_IMPORTED_MODULE_1__.getScaledDimensionForField)(
        frame2.fields[dims.pointSizeIndex],
        dims.pointSizeConfig,
        _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.ScaleDimensionMode.Quad
      );
      const vals = Array(frame2.length);
      for (let i = 0; i < frame2.length; i++) {
        vals[i] = s.get(i);
      }
      return vals;
    };
  } else {
    pointSizeHints = {
      fixed: pointSizeFixed,
      min: pointSizeFixed,
      max: pointSizeFixed
    };
  }
  const name = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_11__.getFieldDisplayName)(y, frame, frames);
  return {
    name,
    frame: (frames2) => frames2[frameIndex],
    x: (frame2) => frame2.fields[xIndex],
    y: (frame2) => frame2.fields[yIndex],
    legend: () => {
      return [
        {
          label: name,
          color: seriesColor,
          // single color for series?
          getItemKey: () => name,
          yAxis: yIndex
          // << but not used
        }
      ];
    },
    showLine: fieldConfig.show !== _panelcfg_gen__WEBPACK_IMPORTED_MODULE_5__.ScatterShow.Points,
    lineWidth: (_g = fieldConfig.lineWidth) != null ? _g : 2,
    lineStyle: fieldConfig.lineStyle,
    lineColor: () => seriesColor,
    showPoints: fieldConfig.show !== _panelcfg_gen__WEBPACK_IMPORTED_MODULE_5__.ScatterShow.Lines ? _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.VisibilityMode.Always : _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.VisibilityMode.Never,
    pointSize,
    pointColor,
    pointSymbol: (frame2, from) => "circle",
    // single field, multiple symbols.... kinda equals multiple series 🤔
    label: _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.VisibilityMode.Never,
    labelValue: () => "",
    show: !((_h = frame.fields[yIndex].config.custom.hideFrom) == null ? void 0 : _h.viz),
    hints: {
      pointSize: pointSizeHints,
      pointColor: {
        mode: pointColorMode
      }
    }
  };
}
function prepSeries(options, frames) {
  var _a, _b, _c, _d, _e, _f;
  let seriesIndex = 0;
  if (!frames.length) {
    throw "Missing data";
  }
  if (options.seriesMapping === "manual") {
    if (!((_a = options.series) == null ? void 0 : _a.length)) {
      throw "Missing series config";
    }
    const scatterSeries = [];
    for (const series of options.series) {
      if (!(series == null ? void 0 : series.x)) {
        throw "Select X dimension";
      }
      if (!(series == null ? void 0 : series.y)) {
        throw "Select Y dimension";
      }
      for (let frameIndex2 = 0; frameIndex2 < frames.length; frameIndex2++) {
        if (series.frame !== void 0 && series.frame !== frameIndex2) {
          continue;
        }
        const frame2 = frames[frameIndex2];
        const xIndex2 = (0,_features_dimensions__WEBPACK_IMPORTED_MODULE_1__.findFieldIndex)(series.x, frame2, frames);
        if (xIndex2 != null) {
          const yIndex = (0,_features_dimensions__WEBPACK_IMPORTED_MODULE_1__.findFieldIndex)(series.y, frame2, frames);
          if (yIndex == null) {
            throw "Y must be in the same frame as X";
          }
          const dims2 = {
            pointColorFixed: (_b = series.pointColor) == null ? void 0 : _b.fixed,
            pointColorIndex: (0,_features_dimensions__WEBPACK_IMPORTED_MODULE_1__.findFieldIndex)((_c = series.pointColor) == null ? void 0 : _c.field, frame2, frames),
            pointSizeConfig: series.pointSize,
            pointSizeIndex: (0,_features_dimensions__WEBPACK_IMPORTED_MODULE_1__.findFieldIndex)((_d = series.pointSize) == null ? void 0 : _d.field, frame2, frames)
          };
          scatterSeries.push(getScatterSeries(seriesIndex++, frames, frameIndex2, xIndex2, yIndex, dims2));
        }
      }
    }
    return scatterSeries;
  }
  const dims = (_e = options.dims) != null ? _e : {};
  const frameIndex = (_f = dims.frame) != null ? _f : 0;
  const frame = frames[frameIndex];
  const numericIndices = [];
  let xIndex = (0,_features_dimensions__WEBPACK_IMPORTED_MODULE_1__.findFieldIndex)(dims.x, frame, frames);
  for (let i = 0; i < frame.fields.length; i++) {
    if ((0,_dims__WEBPACK_IMPORTED_MODULE_4__.isGraphable)(frame.fields[i])) {
      if (xIndex == null || i === xIndex) {
        xIndex = i;
        continue;
      }
      if (dims.exclude && dims.exclude.includes((0,_grafana_data__WEBPACK_IMPORTED_MODULE_11__.getFieldDisplayName)(frame.fields[i], frame, frames))) {
        continue;
      }
      numericIndices.push(i);
    }
  }
  if (xIndex == null) {
    throw "Missing X dimension";
  }
  if (!numericIndices.length) {
    throw "No Y values";
  }
  return numericIndices.map((yIndex) => getScatterSeries(seriesIndex++, frames, frameIndex, xIndex, yIndex, {}));
}
const prepConfig = (getData, scatterSeries, theme) => {
  let qt;
  let hRect;
  function drawBubblesFactory(opts) {
    const drawBubbles2 = (u, seriesIdx, idx0, idx1) => {
      uplot__WEBPACK_IMPORTED_MODULE_0__["default"].orient(
        u,
        seriesIdx,
        (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim, moveTo, lineTo, rect, arc) => {
          var _a, _b;
          const pxRatio = uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio;
          const scatterInfo = scatterSeries[seriesIdx - 1];
          let d = u.data[seriesIdx];
          let showLine = scatterInfo.showLine;
          let showPoints = scatterInfo.showPoints === _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.VisibilityMode.Always;
          if (!showPoints && scatterInfo.showPoints === _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.VisibilityMode.Auto) {
            showPoints = d[0].length < 1e3;
          }
          if (!showPoints && !showLine) {
            showLine = true;
          }
          let strokeWidth = 1;
          u.ctx.save();
          u.ctx.rect(u.bbox.left, u.bbox.top, u.bbox.width, u.bbox.height);
          u.ctx.clip();
          u.ctx.fillStyle = series.fill();
          u.ctx.strokeStyle = series.stroke();
          u.ctx.lineWidth = strokeWidth;
          let deg360 = 2 * Math.PI;
          let xKey = scaleX.key;
          let yKey = scaleY.key;
          let pointHints = scatterInfo.hints.pointSize;
          const colorByValue = scatterInfo.hints.pointColor.mode.isByValue;
          let maxSize = ((_a = pointHints.max) != null ? _a : pointHints.fixed) * pxRatio;
          let filtLft = u.posToVal(-maxSize / 2, xKey);
          let filtRgt = u.posToVal(u.bbox.width / pxRatio + maxSize / 2, xKey);
          let filtBtm = u.posToVal(u.bbox.height / pxRatio + maxSize / 2, yKey);
          let filtTop = u.posToVal(-maxSize / 2, yKey);
          let sizes = opts.disp.size.values(u, seriesIdx);
          let pointColors = opts.disp.color.values(u, seriesIdx);
          let pointAlpha = opts.disp.color.alpha;
          let linePath = showLine ? new Path2D() : null;
          let curColor = null;
          for (let i = 0; i < d[0].length; i++) {
            let xVal = d[0][i];
            let yVal = d[1][i];
            let size = sizes[i] * pxRatio;
            if (xVal >= filtLft && xVal <= filtRgt && yVal >= filtBtm && yVal <= filtTop) {
              let cx = valToPosX(xVal, scaleX, xDim, xOff);
              let cy = valToPosY(yVal, scaleY, yDim, yOff);
              if (showLine) {
                linePath.lineTo(cx, cy);
              }
              if (showPoints) {
                u.ctx.beginPath();
                u.ctx.arc(cx, cy, size / 2, 0, deg360);
                if (colorByValue) {
                  if (pointColors[i] !== curColor) {
                    curColor = pointColors[i];
                    u.ctx.fillStyle = (0,_grafana_data_src_themes_colorManipulator__WEBPACK_IMPORTED_MODULE_12__.alpha)(curColor, pointAlpha);
                    u.ctx.strokeStyle = curColor;
                  }
                }
                u.ctx.fill();
                u.ctx.stroke();
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
            let frame = scatterInfo.frame(getData());
            u.ctx.strokeStyle = scatterInfo.lineColor(frame);
            u.ctx.lineWidth = scatterInfo.lineWidth * pxRatio;
            const { lineStyle } = scatterInfo;
            if (lineStyle && lineStyle.fill !== "solid") {
              if (lineStyle.fill === "dot") {
                u.ctx.lineCap = "round";
              }
              u.ctx.setLineDash((_b = lineStyle.dash) != null ? _b : [10, 10]);
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
        },
        alpha: 0.5
      }
    },
    each: (u, seriesIdx, dataIdx, lft, top, wid, hgt) => {
      lft -= u.bbox.left;
      top -= u.bbox.top;
      qt.add({ x: lft, y: top, w: wid, h: hgt, sidx: seriesIdx, didx: dataIdx });
    }
  });
  const builder = new _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.UPlotConfigBuilder();
  builder.setCursor({
    drag: { setScale: true },
    dataIdx: (u, seriesIdx) => {
      if (seriesIdx === 1) {
        const pxRatio = uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio;
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
        return hRect && seriesIdx === hRect.sidx ? hRect.w / uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio : 0;
      },
      fill: (u, seriesIdx) => "rgba(255,255,255,0.4)"
    }
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
  const frames = getData();
  let xField = scatterSeries[0].x(scatterSeries[0].frame(frames));
  let fieldConfig = xField.config;
  let customConfig = fieldConfig.custom;
  let scaleDistr = customConfig == null ? void 0 : customConfig.scaleDistribution;
  builder.addScale({
    scaleKey: "x",
    isTime: false,
    orientation: _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.ScaleOrientation.Horizontal,
    direction: _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.ScaleDirection.Right,
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
  builder.addAxis({
    scaleKey: "x",
    placement: (customConfig == null ? void 0 : customConfig.axisPlacement) !== _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.AxisPlacement.Hidden ? _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.AxisPlacement.Bottom : _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.AxisPlacement.Hidden,
    show: (customConfig == null ? void 0 : customConfig.axisPlacement) !== _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.AxisPlacement.Hidden,
    grid: { show: customConfig == null ? void 0 : customConfig.axisGridShow },
    border: { show: customConfig == null ? void 0 : customConfig.axisBorderShow },
    theme,
    label: xAxisLabel == null || xAxisLabel === "" ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_11__.getFieldDisplayName)(xField, scatterSeries[0].frame(frames), frames) : xAxisLabel,
    formatValue: (v, decimals) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_14__.formattedValueToString)(xField.display(v, decimals))
  });
  scatterSeries.forEach((s, si) => {
    var _a, _b;
    let frame = s.frame(frames);
    let field = s.y(frame);
    const lineColor = s.lineColor(frame);
    const pointColor = asSingleValue(frame, s.pointColor);
    let scaleKey = (_a = field.config.unit) != null ? _a : "y";
    let config2 = field.config;
    let customConfig2 = config2.custom;
    let scaleDistr2 = customConfig2 == null ? void 0 : customConfig2.scaleDistribution;
    builder.addScale({
      scaleKey,
      orientation: _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.ScaleOrientation.Vertical,
      direction: _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.ScaleDirection.Up,
      distribution: scaleDistr2 == null ? void 0 : scaleDistr2.type,
      log: scaleDistr2 == null ? void 0 : scaleDistr2.log,
      linearThreshold: scaleDistr2 == null ? void 0 : scaleDistr2.linearThreshold,
      min: config2.min,
      max: config2.max,
      softMin: customConfig2 == null ? void 0 : customConfig2.axisSoftMin,
      softMax: customConfig2 == null ? void 0 : customConfig2.axisSoftMax,
      centeredZero: customConfig2 == null ? void 0 : customConfig2.axisCenteredZero,
      decimals: config2.decimals
    });
    let yAxisLabel = customConfig2 == null ? void 0 : customConfig2.axisLabel;
    builder.addAxis({
      scaleKey,
      theme,
      placement: (customConfig2 == null ? void 0 : customConfig2.axisPlacement) === _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.AxisPlacement.Auto ? _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.AxisPlacement.Left : customConfig2 == null ? void 0 : customConfig2.axisPlacement,
      show: (customConfig2 == null ? void 0 : customConfig2.axisPlacement) !== _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.AxisPlacement.Hidden,
      grid: { show: customConfig2 == null ? void 0 : customConfig2.axisGridShow },
      border: { show: customConfig2 == null ? void 0 : customConfig2.axisBorderShow },
      size: customConfig2 == null ? void 0 : customConfig2.axisWidth,
      label: yAxisLabel == null || yAxisLabel === "" ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_11__.getFieldDisplayName)(field, scatterSeries[si].frame(frames), frames) : yAxisLabel,
      formatValue: (v, decimals) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_14__.formattedValueToString)(field.display(v, decimals))
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
      lineColor: (0,_grafana_data_src_themes_colorManipulator__WEBPACK_IMPORTED_MODULE_12__.alpha)("" + lineColor, 1),
      fillColor: (0,_grafana_data_src_themes_colorManipulator__WEBPACK_IMPORTED_MODULE_12__.alpha)(pointColor, 0.5),
      show: !((_b = customConfig2.hideFrom) == null ? void 0 : _b.viz)
    });
  });
  return builder;
};
function prepData(info, data, from) {
  if (info.error || !data.length) {
    return [null];
  }
  return [
    null,
    ...info.series.map((s, idx) => {
      const frame = s.frame(data);
      let colorValues;
      const r = s.pointColor(frame);
      if (Array.isArray(r)) {
        colorValues = r;
      } else {
        colorValues = Array(frame.length).fill(r);
      }
      return [
        s.x(frame).values,
        // X
        s.y(frame).values,
        // Y
        asArray(frame, s.pointSize),
        colorValues
      ];
    })
  ];
}
function asArray(frame, lookup) {
  const r = lookup(frame);
  if (Array.isArray(r)) {
    return r;
  }
  return Array(frame.length).fill(r);
}
function asSingleValue(frame, lookup) {
  const r = lookup(frame);
  if (Array.isArray(r)) {
    return r[0];
  }
  return r;
}


/***/ })

}]);
//# sourceMappingURL=xychart.4ca53c1d0cfaf7cb1e2b.js.map
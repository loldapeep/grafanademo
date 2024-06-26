(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["lokiPlugin"],{

/***/ "./node_modules/@grafana/experimental/dist/esm/QueryEditor/EditorHeader.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorHeader: () => (/* binding */ EditorHeader)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");




const EditorHeader = ({ children }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.root }, children);
};
const getStyles = (theme) => ({
  root: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: theme.spacing(3),
    minHeight: theme.spacing(4)
  })
});


//# sourceMappingURL=EditorHeader.js.map


/***/ }),

/***/ "./node_modules/@grafana/experimental/dist/esm/QueryEditor/FlexItem.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlexItem: () => (/* binding */ FlexItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const FlexItem = ({ grow, shrink }) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { display: "block", flexGrow: grow, flexShrink: shrink } });
};


//# sourceMappingURL=FlexItem.js.map


/***/ }),

/***/ "./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/QueryModellerBase.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryModellerBase: () => (/* binding */ QueryModellerBase)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/utils/Registry.ts");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/types.js");



class QueryModellerBase {
  constructor(operationDefinitions, innerQueryPlaceholder) {
    this.categories = [];
    this.operationsRegistry = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.Registry(() => operationDefinitions);
    this.innerQueryPlaceholder = innerQueryPlaceholder || "<query>";
  }
  setOperationCategories(categories) {
    this.categories = categories;
  }
  getOperationsForCategory(category) {
    return this.operationsRegistry.list().filter((op) => op.category === category && !op.hideFromList);
  }
  getAlternativeOperations(key) {
    return this.operationsRegistry.list().filter((op) => op.alternativesKey && op.alternativesKey === key);
  }
  getCategories() {
    return this.categories;
  }
  getOperationDefinition(id) {
    return this.operationsRegistry.getIfExists(id);
  }
  hasBinaryOp(query) {
    return query.operations.find((op) => {
      const def = this.getOperationDefinition(op.id);
      return (def == null ? void 0 : def.category) === _types_js__WEBPACK_IMPORTED_MODULE_1__.BINARY_OPERATIONS_KEY;
    }) !== void 0;
  }
}


//# sourceMappingURL=QueryModellerBase.js.map


/***/ }),

/***/ "./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/LabelFilterItem.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LabelFilterItem: () => (/* binding */ LabelFilterItem),
/* harmony export */   isConflictingLabelFilter: () => (/* binding */ isConflictingLabelFilter)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/experimental/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/utils/selectUtils.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _QueryEditor_InputGroup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/QueryEditor/InputGroup.js");
/* harmony import */ var _QueryEditor_AccessoryButton_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/QueryEditor/AccessoryButton.js");









var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const CONFLICTING_LABEL_FILTER_ERROR_MESSAGE = "You have conflicting label filters";
function LabelFilterItem({
  item,
  items,
  defaultOp,
  onChange,
  onDelete,
  onGetLabelNames,
  onGetLabelValues,
  invalidLabel,
  invalidValue,
  multiValueSeparator = "|"
}) {
  var _a;
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const [labelNamesMenuOpen, setLabelNamesMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [labelValuesMenuOpen, setLabelValuesMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const isMultiSelect = (operator = item.op) => {
    var _a2;
    return (_a2 = operators.find((op) => op.label === operator)) == null ? void 0 : _a2.isMultiValue;
  };
  const getSelectOptionsFromString = (item2) => {
    if (item2) {
      if (item2.indexOf(multiValueSeparator) > 0) {
        return item2.split(multiValueSeparator);
      }
      return [item2];
    }
    return [];
  };
  const getOptions = () => {
    const labelValues = state.labelValues ? [...state.labelValues] : [];
    const selectedOptions = getSelectOptionsFromString(item == null ? void 0 : item.value).map(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption);
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqBy)([...selectedOptions, ...labelValues], "value");
  };
  const isConflicting = isConflictingLabelFilter(item, items);
  const { current: id } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)((0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])());
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "data-testid": "visual-query-builder-dimensions-filter-item" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, { error: CONFLICTING_LABEL_FILTER_ERROR_MESSAGE, invalid: isConflicting ? true : void 0 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_QueryEditor_InputGroup_js__WEBPACK_IMPORTED_MODULE_5__.InputGroup, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Select,
    {
      placeholder: "Select label",
      "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_7__.selectors.components.QueryBuilder.labelSelect,
      inputId: `visual-query-builder-dimensions-filter-item-key-${id}`,
      width: "auto",
      value: item.label ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption)(item.label) : null,
      allowCustomValue: true,
      onOpenMenu: async () => {
        setState({ isLoadingLabelNames: true });
        const labelNames = await onGetLabelNames(item);
        setLabelNamesMenuOpen(true);
        setState({ labelNames, isLoadingLabelNames: void 0 });
      },
      onCloseMenu: () => {
        setLabelNamesMenuOpen(false);
      },
      isOpen: labelNamesMenuOpen,
      isLoading: state.isLoadingLabelNames,
      options: state.labelNames,
      onChange: (change) => {
        var _a2;
        if (change.value) {
          onChange(__spreadProps(__spreadValues({}, item), {
            op: (_a2 = item.op) != null ? _a2 : defaultOp,
            label: change.value
          }));
        }
      },
      invalid: isConflicting || invalidLabel
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Select,
    {
      "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_7__.selectors.components.QueryBuilder.matchOperatorSelect,
      value: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption)((_a = item.op) != null ? _a : defaultOp),
      options: operators,
      width: "auto",
      onChange: (change) => {
        if (change.value) {
          onChange(__spreadProps(__spreadValues({}, item), {
            op: change.value,
            value: isMultiSelect(change.value) ? item.value : getSelectOptionsFromString(item == null ? void 0 : item.value)[0]
          }));
        }
      },
      invalid: isConflicting
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Select,
    {
      placeholder: "Select value",
      "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_7__.selectors.components.QueryBuilder.valueSelect,
      inputId: `visual-query-builder-dimensions-filter-item-value-${id}`,
      width: "auto",
      value: isMultiSelect() ? getSelectOptionsFromString(item == null ? void 0 : item.value).map(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption) : getSelectOptionsFromString(item == null ? void 0 : item.value).map(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption)[0],
      allowCustomValue: true,
      onOpenMenu: async () => {
        setState({ isLoadingLabelValues: true });
        const labelValues = await onGetLabelValues(item);
        setState(__spreadProps(__spreadValues({}, state), {
          labelValues,
          isLoadingLabelValues: void 0
        }));
        setLabelValuesMenuOpen(true);
      },
      onCloseMenu: () => {
        setLabelValuesMenuOpen(false);
      },
      isOpen: labelValuesMenuOpen,
      isMulti: isMultiSelect(),
      isLoading: state.isLoadingLabelValues,
      options: getOptions(),
      onChange: (change) => {
        var _a2, _b;
        if (change.value) {
          onChange(__spreadProps(__spreadValues({}, item), {
            value: change.value,
            op: (_a2 = item.op) != null ? _a2 : defaultOp
          }));
        } else {
          const changes = change.map((change2) => {
            if (change2.value) {
              return change2.value;
            } else {
              return void 0;
            }
          }).filter((val) => val !== void 0).join(multiValueSeparator);
          onChange(__spreadProps(__spreadValues({}, item), { value: changes, op: (_b = item.op) != null ? _b : defaultOp }));
        }
      },
      invalid: isConflicting || invalidValue
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_QueryEditor_AccessoryButton_js__WEBPACK_IMPORTED_MODULE_8__.AccessoryButton, { "aria-label": "remove", icon: "times", variant: "secondary", onClick: onDelete }))));
}
const operators = [
  { label: "=", value: "=", description: "Equals", isMultiValue: false },
  { label: "!=", value: "!=", description: "Does not equal", isMultiValue: false },
  { label: "=~", value: "=~", description: "Matches regex", isMultiValue: true },
  { label: "!~", value: "!~", description: "Does not match regex", isMultiValue: true }
];
function isConflictingLabelFilter(newLabel, labels) {
  if (!newLabel.label || !newLabel.op || !newLabel.value) {
    return false;
  }
  if (labels.length < 2) {
    return false;
  }
  const operationIsNegative = newLabel.op.toString().startsWith("!");
  const candidates = labels.filter(
    (label) => label.label === newLabel.label && label.value === newLabel.value && label.op !== newLabel.op
  );
  const conflict = candidates.some((candidate) => {
    var _a, _b;
    if (operationIsNegative && ((_a = candidate == null ? void 0 : candidate.op) == null ? void 0 : _a.toString().startsWith("!")) === false) {
      return true;
    }
    if (operationIsNegative === false && ((_b = candidate == null ? void 0 : candidate.op) == null ? void 0 : _b.toString().startsWith("!"))) {
      return true;
    }
    return false;
  });
  return conflict;
}


//# sourceMappingURL=LabelFilterItem.js.map


/***/ }),

/***/ "./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/LabelFilters.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LabelFilters: () => (/* binding */ LabelFilters),
/* harmony export */   MISSING_LABEL_FILTER_ERROR_MESSAGE: () => (/* binding */ MISSING_LABEL_FILTER_ERROR_MESSAGE)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _QueryEditor_EditorField_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/QueryEditor/EditorField.js");
/* harmony import */ var _QueryEditor_EditorFieldGroup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/QueryEditor/EditorFieldGroup.js");
/* harmony import */ var _QueryEditor_EditorList_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/QueryEditor/EditorList.js");
/* harmony import */ var _LabelFilterItem_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/LabelFilterItem.js");







const MISSING_LABEL_FILTER_ERROR_MESSAGE = "Select at least 1 label filter (label and value)";
function LabelFilters({
  labelsFilters,
  onChange,
  onGetLabelNames,
  onGetLabelValues,
  labelFilterRequired,
  multiValueSeparator
}) {
  const defaultOp = "=";
  const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([{ op: defaultOp }]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (labelsFilters.length > 0) {
      setItems(labelsFilters);
    } else {
      setItems([{ op: defaultOp }]);
    }
  }, [labelsFilters]);
  const onLabelsChange = (newItems) => {
    setItems(newItems);
    const newLabels = newItems.filter((item) => item.label !== void 0 && item.value !== void 0);
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(newLabels, labelsFilters)) {
      onChange(newLabels);
    }
  };
  const hasLabelFilter = items.some((item) => item.label && item.value);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_QueryEditor_EditorFieldGroup_js__WEBPACK_IMPORTED_MODULE_2__.EditorFieldGroup, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _QueryEditor_EditorField_js__WEBPACK_IMPORTED_MODULE_3__.EditorField,
    {
      label: "Label filters",
      error: MISSING_LABEL_FILTER_ERROR_MESSAGE,
      invalid: labelFilterRequired && !hasLabelFilter
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _QueryEditor_EditorList_js__WEBPACK_IMPORTED_MODULE_4__.EditorList,
      {
        items,
        onChange: onLabelsChange,
        renderItem: (item, onChangeItem, onDelete) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          _LabelFilterItem_js__WEBPACK_IMPORTED_MODULE_5__.LabelFilterItem,
          {
            item,
            items,
            defaultOp,
            onChange: onChangeItem,
            onDelete,
            onGetLabelNames,
            onGetLabelValues,
            invalidLabel: labelFilterRequired && !item.label,
            invalidValue: labelFilterRequired && !item.value,
            multiValueSeparator
          }
        )
      }
    )
  ));
}


//# sourceMappingURL=LabelFilters.js.map


/***/ }),

/***/ "./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/OperationEditor.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperationEditor: () => (/* binding */ OperationEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _OperationEditorBody_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/OperationEditorBody.js");






function OperationEditor({
  operation,
  index,
  onRemove,
  onChange,
  onRunQuery,
  queryModeller,
  query,
  datasource,
  flash,
  highlight,
  timeRange,
  isConflictingOperation
}) {
  const def = queryModeller.getOperationDefinition(operation.id);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();
  const isConflicting = isConflictingOperation ? isConflictingOperation(operation, query.operations) : false;
  const styles = getStyles(theme);
  if (!def) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Operation ", operation.id, " not found");
  }
  const isInvalid = (isDragging) => {
    if (isDragging) {
      return void 0;
    }
    return isConflicting ? true : void 0;
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__.Draggable, { draggableId: `operation-${index}`, index }, (provided, snapshot) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField,
    {
      error: "You have conflicting label filters",
      invalid: isInvalid(snapshot.isDragging),
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.error, styles.cardWrapper)
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _OperationEditorBody_js__WEBPACK_IMPORTED_MODULE_5__.OperationEditorBody,
      {
        provided,
        flash,
        highlight,
        isConflicting,
        index,
        operation,
        definition: def,
        onChange,
        onRemove,
        queryModeller,
        query,
        timeRange,
        onRunQuery,
        datasource
      }
    )
  ));
}
const getStyles = (theme, isConflicting) => {
  return {
    cardWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      alignItems: "stretch"
    }),
    error: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      marginBottom: theme.spacing(1)
    })
  };
};


//# sourceMappingURL=OperationEditor.js.map


/***/ }),

/***/ "./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/OperationEditorBody.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperationEditorBody: () => (/* binding */ OperationEditorBody)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _OperationHeader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/OperationHeader.js");
/* harmony import */ var _OperationParamEditor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/OperationParamEditor.js");
/* harmony import */ var _QueryEditor_Stack_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/QueryEditor/Stack.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/experimental/node_modules/uuid/dist/esm-browser/v4.js");








var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function OperationEditorBody({
  provided,
  flash,
  isConflicting,
  highlight,
  index,
  queryModeller,
  onChange,
  onRemove,
  operation,
  definition,
  query,
  timeRange,
  onRunQuery,
  datasource
}) {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();
  const styles = getStyles(theme, isConflicting);
  const shouldFlash = useFlash(flash);
  const { current: id } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])());
  const onParamValueChanged = (paramIdx, value) => {
    const update = __spreadProps(__spreadValues({}, operation), { params: [...operation.params] });
    update.params[paramIdx] = value;
    callParamChangedThenOnChange(definition, update, index, paramIdx, onChange);
  };
  const onAddRestParam = () => {
    const update = __spreadProps(__spreadValues({}, operation), { params: [...operation.params, ""] });
    callParamChangedThenOnChange(definition, update, index, operation.params.length, onChange);
  };
  const onRemoveRestParam = (paramIdx) => {
    const update = __spreadProps(__spreadValues({}, operation), {
      params: [...operation.params.slice(0, paramIdx), ...operation.params.slice(paramIdx + 1)]
    });
    callParamChangedThenOnChange(definition, update, index, paramIdx, onChange);
  };
  let restParam;
  if (definition.params.length > 0) {
    const lastParamDef = definition.params[definition.params.length - 1];
    if (lastParamDef.restParam) {
      restParam = renderAddRestParamButton(lastParamDef, onAddRestParam, index, operation.params.length, styles);
    }
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    "div",
    __spreadProps(__spreadValues({
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.card, (shouldFlash || highlight) && styles.cardHighlight, isConflicting && styles.cardError),
      ref: provided.innerRef
    }, provided.draggableProps), {
      "data-testid": `operations.${index}.wrapper`
    }),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _OperationHeader_js__WEBPACK_IMPORTED_MODULE_4__.OperationHeader,
      {
        operation,
        dragHandleProps: provided.dragHandleProps,
        definition,
        index,
        onChange,
        onRemove,
        queryModeller
      }
    ),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.body }, operation.params.map((param, paramIndex) => {
      const paramDef = definition.params[Math.min(definition.params.length - 1, paramIndex)];
      const Editor = (0,_OperationParamEditor_js__WEBPACK_IMPORTED_MODULE_5__.getOperationParamEditor)(paramDef);
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.paramRow, key: `${paramIndex}-1` }, !paramDef.hideName && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.paramName }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { htmlFor: (0,_OperationParamEditor_js__WEBPACK_IMPORTED_MODULE_5__.getOperationParamId)(id, paramIndex) }, paramDef.name), paramDef.description && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Tooltip, { placement: "top", content: paramDef.description, theme: "info" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Icon, { name: "info-circle", size: "sm", className: styles.infoIcon }))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.paramValue }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_QueryEditor_Stack_js__WEBPACK_IMPORTED_MODULE_8__.Stack, { gap: 0.5, direction: "row", alignItems: "center", wrap: false }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Editor,
        {
          index: paramIndex,
          paramDef,
          value: operation.params[paramIndex],
          operation,
          operationId: id,
          onChange: onParamValueChanged,
          onRunQuery,
          query,
          datasource,
          timeRange,
          queryModeller
        }
      ), paramDef.restParam && (operation.params.length > definition.params.length || paramDef.optional) && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Button,
        {
          "data-testid": `operations.${index}.remove-rest-param`,
          size: "sm",
          fill: "text",
          icon: "times",
          variant: "secondary",
          title: `Remove ${paramDef.name}`,
          onClick: () => onRemoveRestParam(paramIndex)
        }
      ))));
    })),
    restParam,
    index < query.operations.length - 1 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.arrow }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.arrowLine }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.arrowArrow }))
  );
}
const getStyles = (theme, isConflicting) => {
  return {
    cardWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      alignItems: "stretch"
    }),
    error: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginBottom: theme.spacing(1)
    }),
    card: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      background: theme.colors.background.primary,
      border: `1px solid ${theme.colors.border.medium}`,
      cursor: "grab",
      borderRadius: theme.shape.radius.default,
      position: "relative",
      transition: "all 0.5s ease-in 0s",
      height: isConflicting ? "auto" : "100%"
    }),
    cardError: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      boxShadow: `0px 0px 4px 0px ${theme.colors.warning.main}`,
      border: `1px solid ${theme.colors.warning.main}`
    }),
    cardHighlight: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      boxShadow: `0px 0px 4px 0px ${theme.colors.primary.border}`,
      border: `1px solid ${theme.colors.primary.border}`
    }),
    infoIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginLeft: theme.spacing(0.5),
      color: theme.colors.text.secondary,
      ":hover": {
        color: theme.colors.text.primary
      }
    }),
    body: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      margin: theme.spacing(1, 1, 0.5, 1),
      display: "table"
    }),
    paramRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      label: "paramRow",
      display: "table-row",
      verticalAlign: "middle"
    }),
    paramName: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "table-cell",
      padding: theme.spacing(0, 1, 0, 0),
      fontSize: theme.typography.bodySmall.fontSize,
      fontWeight: theme.typography.fontWeightMedium,
      verticalAlign: "middle",
      height: "32px"
    }),
    paramValue: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      label: "paramValue",
      display: "table-cell",
      verticalAlign: "middle"
    }),
    restParam: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      padding: theme.spacing(0, 1, 1, 1)
    }),
    arrow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      position: "absolute",
      top: "0",
      right: "-18px",
      display: "flex"
    }),
    arrowLine: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      height: "2px",
      width: "8px",
      backgroundColor: theme.colors.border.strong,
      position: "relative",
      top: "14px"
    }),
    arrowArrow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: 0,
      height: 0,
      borderTop: `5px solid transparent`,
      borderBottom: `5px solid transparent`,
      borderLeft: `7px solid ${theme.colors.border.strong}`,
      position: "relative",
      top: "10px"
    })
  };
};
function useFlash(flash) {
  const [keepFlash, setKeepFlash] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let t;
    if (flash) {
      t = setTimeout(() => {
        setKeepFlash(false);
      }, 1e3);
    } else {
      setKeepFlash(true);
    }
    return () => clearTimeout(t);
  }, [flash]);
  return keepFlash && flash;
}
function callParamChangedThenOnChange(def, operation, operationIndex, paramIndex, onChange) {
  if (def.paramChangedHandler) {
    onChange(operationIndex, def.paramChangedHandler(paramIndex, operation, def));
  } else {
    onChange(operationIndex, operation);
  }
}
function renderAddRestParamButton(paramDef, onAddRestParam, operationIndex, paramIndex, styles) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.restParam, key: `${paramIndex}-2` }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Button,
    {
      size: "sm",
      icon: "plus",
      title: `Add ${paramDef.name}`.trimEnd(),
      variant: "secondary",
      onClick: onAddRestParam,
      "data-testid": `operations.${operationIndex}.add-rest-param`
    },
    paramDef.name
  ));
}


//# sourceMappingURL=OperationEditorBody.js.map


/***/ }),

/***/ "./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/OperationExplainedBox.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperationExplainedBox: () => (/* binding */ OperationExplainedBox)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/text/markdown.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





function OperationExplainedBox({ title, stepNumber, markdown, children }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.box }, stepNumber !== void 0 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.stepNumber }, stepNumber), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.boxInner }, title && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.header }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, title)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.body }, markdown && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { dangerouslySetInnerHTML: { __html: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.renderMarkdown)(markdown) } }), children)));
}
const getStyles = (theme) => {
  return {
    box: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      background: theme.colors.background.secondary,
      padding: theme.spacing(1),
      borderRadius: theme.shape.radius.default,
      position: "relative"
    }),
    boxInner: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      marginLeft: theme.spacing(4)
    }),
    stepNumber: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      fontWeight: theme.typography.fontWeightMedium,
      background: theme.colors.secondary.main,
      width: "20px",
      height: "20px",
      borderRadius: theme.shape.radius.circle,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "10px",
      left: "11px",
      fontSize: theme.typography.bodySmall.fontSize
    }),
    header: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      paddingBottom: theme.spacing(0.5),
      display: "flex",
      alignItems: "center",
      fontFamily: theme.typography.fontFamilyMonospace
    }),
    body: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      color: theme.colors.text.secondary,
      "p:last-child": {
        margin: 0
      },
      a: {
        color: theme.colors.text.link,
        textDecoration: "underline"
      }
    })
  };
};


//# sourceMappingURL=OperationExplainedBox.js.map


/***/ }),

/***/ "./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/OperationHeader.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperationHeader: () => (/* binding */ OperationHeader)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _OperationInfoButton_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/OperationInfoButton.js");
/* harmony import */ var _QueryEditor_FlexItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/QueryEditor/FlexItem.js");






var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const OperationHeader = react__WEBPACK_IMPORTED_MODULE_1___default().memo(
  ({ operation, definition, index, onChange, onRemove, queryModeller, dragHandleProps }) => {
    var _a;
    const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const onToggleSwitcher = () => {
      if (state.isOpen) {
        setState(__spreadProps(__spreadValues({}, state), { isOpen: false }));
      } else {
        const alternatives = queryModeller.getAlternativeOperations(definition.alternativesKey).map((alt) => ({ label: alt.name, value: alt }));
        setState({ isOpen: true, alternatives });
      }
    };
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.header }, !state.isOpen && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", __spreadValues({}, dragHandleProps), (_a = definition.name) != null ? _a : definition.id), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_QueryEditor_FlexItem_js__WEBPACK_IMPORTED_MODULE_3__.FlexItem, { grow: 1 }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: `${styles.operationHeaderButtons} operation-header-show-on-hover` }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button,
      {
        icon: "angle-down",
        size: "sm",
        onClick: onToggleSwitcher,
        fill: "text",
        variant: "secondary",
        title: "Click to view alternative operations"
      }
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_OperationInfoButton_js__WEBPACK_IMPORTED_MODULE_5__.OperationInfoButton, { definition, operation, innerQueryPlaceholder: queryModeller.innerQueryPlaceholder }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button,
      {
        icon: "times",
        size: "sm",
        onClick: () => onRemove(index),
        fill: "text",
        variant: "secondary",
        title: "Remove operation"
      }
    ))), state.isOpen && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.selectWrapper }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Select,
      {
        autoFocus: true,
        openMenuOnFocus: true,
        placeholder: "Replace with",
        options: state.alternatives,
        isOpen: true,
        onCloseMenu: onToggleSwitcher,
        onChange: (value) => {
          if (value.value) {
            const newDef = queryModeller.getOperationDefinition(value.value.id);
            const newParams = [...newDef.defaultParams];
            for (let i = 0; i < Math.min(operation.params.length, newParams.length); i++) {
              if (newDef.params[i].type === definition.params[i].type) {
                newParams[i] = operation.params[i];
              }
            }
            const changedOp = __spreadProps(__spreadValues({}, operation), { params: newParams, id: value.value.id });
            onChange(index, definition.changeTypeHandler ? definition.changeTypeHandler(changedOp, newDef) : changedOp);
          }
        }
      }
    )));
  }
);
OperationHeader.displayName = "OperationHeader";
const getStyles = (theme) => {
  return {
    header: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      borderBottom: `1px solid ${theme.colors.border.medium}`,
      padding: theme.spacing(0.5, 0.5, 0.5, 1),
      display: "flex",
      alignItems: "center"
    }),
    operationHeaderButtons: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      opacity: 1
    }),
    selectWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      paddingRight: theme.spacing(2)
    })
  };
};


//# sourceMappingURL=OperationHeader.js.map


/***/ }),

/***/ "./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/OperationInfoButton.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperationInfoButton: () => (/* binding */ OperationInfoButton)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_popper_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-popper-tooltip/dist/esm/react-popper-tooltip.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/text/markdown.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Portal/Portal.tsx");
/* harmony import */ var _QueryEditor_FlexItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/QueryEditor/FlexItem.js");







var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const OperationInfoButton = react__WEBPACK_IMPORTED_MODULE_1___default().memo(({ definition, operation, innerQueryPlaceholder }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const { getTooltipProps, setTooltipRef, setTriggerRef, visible } = (0,react_popper_tooltip__WEBPACK_IMPORTED_MODULE_3__.usePopperTooltip)({
    placement: "top",
    visible: show,
    offset: [0, 16],
    onVisibleChange: setShow,
    interactive: true,
    trigger: ["click"]
  });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button,
    {
      title: "Click to show description",
      ref: setTriggerRef,
      icon: "info-circle",
      size: "sm",
      variant: "secondary",
      fill: "text"
    }
  ), visible && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Portal, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", __spreadProps(__spreadValues({ ref: setTooltipRef }, getTooltipProps()), { className: styles.docBox }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.docBoxHeader }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, definition.renderer(operation, definition, innerQueryPlaceholder)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_QueryEditor_FlexItem_js__WEBPACK_IMPORTED_MODULE_6__.FlexItem, { grow: 1 }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button,
    {
      icon: "times",
      onClick: () => setShow(false),
      fill: "text",
      variant: "secondary",
      title: "Remove operation"
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    "div",
    {
      className: styles.docBoxBody,
      dangerouslySetInnerHTML: { __html: getOperationDocs(definition, operation) }
    }
  ))));
});
OperationInfoButton.displayName = "OperationDocs";
const getStyles = (theme) => {
  return {
    docBox: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      overflow: "hidden",
      background: theme.colors.background.primary,
      border: `1px solid ${theme.colors.border.strong}`,
      boxShadow: theme.shadows.z3,
      maxWidth: "600px",
      padding: theme.spacing(1),
      borderRadius: theme.shape.radius.default,
      zIndex: theme.zIndex.tooltip
    }),
    docBoxHeader: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      fontSize: theme.typography.h5.fontSize,
      fontFamily: theme.typography.fontFamilyMonospace,
      paddingBottom: theme.spacing(1),
      display: "flex",
      alignItems: "center"
    }),
    docBoxBody: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      // The markdown paragraph has a marginBottom this removes it
      marginBottom: theme.spacing(-1),
      color: theme.colors.text.secondary
    }),
    signature: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      fontSize: theme.typography.bodySmall.fontSize,
      fontFamily: theme.typography.fontFamilyMonospace
    }),
    dropdown: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      opacity: 0,
      color: theme.colors.text.secondary
    })
  };
};
function getOperationDocs(def, op) {
  var _a;
  return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.renderMarkdown)(def.explainHandler ? def.explainHandler(op, def) : (_a = def.documentation) != null ? _a : "no docs");
}


//# sourceMappingURL=OperationInfoButton.js.map


/***/ }),

/***/ "./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/OperationList.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperationList: () => (/* binding */ OperationList)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/react-use/esm/useMountedState.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/react-use/esm/usePrevious.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Cascader/Cascader.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _OperationEditor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/OperationEditor.js");
/* harmony import */ var _QueryEditor_Stack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/QueryEditor/Stack.js");








var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function OperationList({
  query,
  datasource,
  queryModeller,
  onChange,
  onRunQuery,
  highlightedOp,
  timeRange,
  isConflictingOperation
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const { operations } = query;
  const opsToHighlight = useOperationsHighlight(operations);
  const [cascaderOpen, setCascaderOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const onOperationChange = (index, update) => {
    const updatedList = [...operations];
    updatedList.splice(index, 1, update);
    onChange(__spreadProps(__spreadValues({}, query), { operations: updatedList }));
  };
  const onRemove = (index) => {
    const updatedList = [...operations.slice(0, index), ...operations.slice(index + 1)];
    onChange(__spreadProps(__spreadValues({}, query), { operations: updatedList }));
  };
  const addOptions = queryModeller.getCategories().map((category) => {
    return {
      value: category,
      label: category,
      items: queryModeller.getOperationsForCategory(category).map((operation) => ({
        value: operation.id,
        label: operation.name,
        isLeaf: true
      }))
    };
  });
  const onAddOperation = (value) => {
    const operationDef = queryModeller.getOperationDefinition(value);
    if (!operationDef) {
      return;
    }
    onChange(operationDef.addOperationHandler(operationDef, query, queryModeller));
    setCascaderOpen(false);
  };
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const updatedList = [...operations];
    const element = updatedList[result.source.index];
    updatedList.splice(result.source.index, 1);
    updatedList.splice(result.destination.index, 0, element);
    onChange(__spreadProps(__spreadValues({}, query), { operations: updatedList }));
  };
  const onCascaderBlur = () => {
    setCascaderOpen(false);
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_QueryEditor_Stack_js__WEBPACK_IMPORTED_MODULE_3__.Stack, { gap: 1, direction: "column" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_QueryEditor_Stack_js__WEBPACK_IMPORTED_MODULE_3__.Stack, { gap: 1 }, operations.length > 0 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__.DragDropContext, { onDragEnd }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__.Droppable, { droppableId: "sortable-field-mappings", direction: "horizontal" }, (provided) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", __spreadValues({ className: styles.operationList, ref: provided.innerRef }, provided.droppableProps), operations.map((op, index) => {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _OperationEditor_js__WEBPACK_IMPORTED_MODULE_5__.OperationEditor,
      {
        key: op.id + JSON.stringify(op.params) + index,
        queryModeller,
        index,
        operation: op,
        query,
        datasource,
        onChange: onOperationChange,
        onRemove,
        onRunQuery,
        flash: opsToHighlight[index],
        highlight: highlightedOp === op,
        timeRange,
        isConflictingOperation
      }
    );
  }), provided.placeholder))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.addButton }, cascaderOpen ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Cascader,
    {
      options: addOptions,
      onSelect: onAddOperation,
      onBlur: onCascaderBlur,
      autoFocus: true,
      alwaysOpen: true,
      hideActiveLevelLabel: true,
      placeholder: "Search"
    }
  ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { icon: "plus", variant: "secondary", onClick: () => setCascaderOpen(true), title: "Add operation" }, "Operations"))));
}
function useOperationsHighlight(operations) {
  const isMounted = (0,react_use__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const prevOperations = (0,react_use__WEBPACK_IMPORTED_MODULE_9__["default"])(operations);
  if (!isMounted()) {
    return operations.map(() => false);
  }
  if (!prevOperations) {
    return operations.map(() => true);
  }
  let newOps = [];
  if (prevOperations.length - 1 === operations.length && operations.every((op) => prevOperations.includes(op))) {
    return operations.map(() => false);
  }
  if (prevOperations.length + 1 === operations.length && prevOperations.every((op) => operations.includes(op))) {
    const newOp = operations.find((op) => !prevOperations.includes(op));
    newOps = operations.map((op) => {
      return op === newOp;
    });
  } else {
    newOps = operations.map((op, index) => {
      var _a;
      return !isSameOp(op.id, (_a = prevOperations[index]) == null ? void 0 : _a.id);
    });
  }
  return newOps;
}
function isSameOp(op1, op2) {
  return op1 === op2 || `__${op1}_by` === op2 || op1 === `__${op2}_by`;
}
const getStyles = (theme) => {
  return {
    heading: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      label: "heading",
      fontSize: 12,
      fontWeight: theme.typography.fontWeightMedium,
      marginBottom: 0
    }),
    operationList: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      label: "operationList",
      display: "flex",
      flexWrap: "wrap",
      gap: theme.spacing(2)
    }),
    addButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      label: "addButton",
      width: 126,
      paddingBottom: theme.spacing(1)
    })
  };
};


//# sourceMappingURL=OperationList.js.map


/***/ }),

/***/ "./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/OperationListExplained.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperationListExplained: () => (/* binding */ OperationListExplained)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OperationExplainedBox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/OperationExplainedBox.js");
/* harmony import */ var _RawQuery_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/RawQuery.js");




function OperationListExplained({
  query,
  queryModeller,
  stepNumber,
  language,
  onMouseEnter,
  onMouseLeave
}) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, query.operations.map((op, index) => {
    var _a;
    const def = queryModeller.getOperationDefinition(op.id);
    if (!def) {
      return `Operation ${op.id} not found`;
    }
    const title = def.renderer(op, def, queryModeller.innerQueryPlaceholder);
    const body = def.explainHandler ? def.explainHandler(op, def) : (_a = def.documentation) != null ? _a : "no docs";
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      "div",
      {
        key: index,
        onMouseEnter: () => onMouseEnter == null ? void 0 : onMouseEnter(op, index),
        onMouseLeave: () => onMouseLeave == null ? void 0 : onMouseLeave(op, index)
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        _OperationExplainedBox_js__WEBPACK_IMPORTED_MODULE_1__.OperationExplainedBox,
        {
          stepNumber: index + stepNumber,
          title: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RawQuery_js__WEBPACK_IMPORTED_MODULE_2__.RawQuery, { query: title, language }),
          markdown: body
        }
      )
    );
  }));
}


//# sourceMappingURL=OperationListExplained.js.map


/***/ }),

/***/ "./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/OperationParamEditor.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOperationParamEditor: () => (/* binding */ getOperationParamEditor),
/* harmony export */   getOperationParamId: () => (/* binding */ getOperationParamId)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/utils/selectUtils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Input/AutoSizeInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Checkbox.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _QueryEditor_Stack_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/QueryEditor/Stack.js");






function getOperationParamEditor(paramDef) {
  if (paramDef.editor) {
    return paramDef.editor;
  }
  if (paramDef.options) {
    return SelectInputParamEditor;
  }
  switch (paramDef.type) {
    case "boolean":
      return BoolInputParamEditor;
    case "number":
    case "string":
    default:
      return SimpleInputParamEditor;
  }
}
function SimpleInputParamEditor(props) {
  var _a;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.AutoSizeInput,
    {
      id: getOperationParamId(props.operationId, props.index),
      defaultValue: (_a = props.value) == null ? void 0 : _a.toString(),
      minWidth: props.paramDef.minWidth,
      placeholder: props.paramDef.placeholder,
      title: props.paramDef.description,
      maxWidth: (props.paramDef.minWidth || 20) * 3,
      onCommitChange: (evt) => {
        props.onChange(props.index, evt.currentTarget.value);
        if (props.paramDef.runQueryOnEnter && evt.type === "keydown") {
          props.onRunQuery();
        }
      }
    }
  );
}
function BoolInputParamEditor(props) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox,
    {
      id: getOperationParamId(props.operationId, props.index),
      value: Boolean(props.value),
      onChange: (evt) => props.onChange(props.index, evt.currentTarget.checked)
    }
  );
}
function SelectInputParamEditor({
  paramDef,
  value,
  index,
  operationId,
  onChange
}) {
  var _a, _b;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  let selectOptions = paramDef.options;
  if (!((_a = selectOptions[0]) == null ? void 0 : _a.label)) {
    selectOptions = paramDef.options.map((option) => ({
      label: option.toString(),
      value: option
    }));
  }
  let valueOption = (_b = selectOptions.find((x) => x.value === value)) != null ? _b : (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.toOption)(value);
  if (!value && paramDef.optional) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.optionalParam }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
      {
        size: "sm",
        variant: "secondary",
        title: `Add ${paramDef.name}`,
        icon: "plus",
        onClick: () => onChange(index, selectOptions[0].value)
      },
      paramDef.name
    ));
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_QueryEditor_Stack_js__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 0.5, direction: "row", alignItems: "center" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Select,
    {
      id: getOperationParamId(operationId, index),
      value: valueOption,
      options: selectOptions,
      placeholder: paramDef.placeholder,
      allowCustomValue: true,
      onChange: (value2) => onChange(index, value2.value),
      width: paramDef.minWidth || "auto"
    }
  ), paramDef.optional && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
    {
      "data-testid": `operations.${index}.remove-param`,
      size: "sm",
      fill: "text",
      icon: "times",
      variant: "secondary",
      title: `Remove ${paramDef.name}`,
      onClick: () => onChange(index, "")
    }
  ));
}
const getStyles = (theme) => {
  return {
    optionalParam: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      marginTop: theme.spacing(1)
    })
  };
};
function getOperationParamId(operationId, paramIndex) {
  return `operations.${operationId}.param.${paramIndex}`;
}


//# sourceMappingURL=OperationParamEditor.js.map


/***/ }),

/***/ "./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/QueryBuilderHints.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryBuilderHints: () => (/* binding */ QueryBuilderHints)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");





const QueryBuilderHints = ({
  datasource,
  query: visualQuery,
  onChange,
  data,
  queryModeller,
  buildVisualQueryFromString,
  buildDataQueryFromQueryString,
  buildQueryStringFromDataQuery
}) => {
  const [hints, setHints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var _a;
    const dataQuery = buildDataQueryFromQueryString(queryModeller.renderQuery(visualQuery));
    const hints2 = (_a = datasource.getQueryHints) == null ? void 0 : _a.call(datasource, dataQuery, (data == null ? void 0 : data.series) || []).filter((hint) => {
      var _a2;
      return (_a2 = hint.fix) == null ? void 0 : _a2.action;
    });
    setHints(hints2 != null ? hints2 : []);
  }, [datasource, visualQuery, data, queryModeller, buildDataQueryFromQueryString]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, hints.length > 0 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.container }, hints.map((hint) => {
    var _a, _b, _c, _d;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, { content: `${hint.label} ${(_a = hint.fix) == null ? void 0 : _a.label}`, key: hint.type }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button,
      {
        onClick: () => {
          var _a2, _b2, _c2;
          (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)("grafana_query_builder_hints_clicked", {
            hint: hint.type,
            datasourceType: datasource.type
          });
          if ((_a2 = hint == null ? void 0 : hint.fix) == null ? void 0 : _a2.action) {
            const dataQuery = buildDataQueryFromQueryString(queryModeller.renderQuery(visualQuery));
            const newQuery = (_b2 = datasource.modifyQuery) == null ? void 0 : _b2.call(datasource, dataQuery, hint.fix.action);
            if (newQuery) {
              const newVisualQuery = buildVisualQueryFromString((_c2 = buildQueryStringFromDataQuery(newQuery)) != null ? _c2 : "");
              return onChange(newVisualQuery.query);
            }
          }
        },
        fill: "outline",
        size: "sm",
        className: styles.hint
      },
      "hint: ",
      ((_b = hint.fix) == null ? void 0 : _b.title) || ((_d = (_c = hint.fix) == null ? void 0 : _c.action) == null ? void 0 : _d.type.toLowerCase().replace("_", " "))
    ));
  })));
};
QueryBuilderHints.displayName = "QueryBuilderHints";
const getStyles = (theme) => {
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)`
      display: flex;
      align-items: start;
    `,
    hint: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)`
      margin-right: ${theme.spacing(1)};
    `
  };
};


//# sourceMappingURL=QueryBuilderHints.js.map


/***/ }),

/***/ "./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/QueryEditorModeToggle.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryEditorModeToggle: () => (/* binding */ QueryEditorModeToggle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/types.js");




const editorModes = [
  { label: "Builder", value: _types_js__WEBPACK_IMPORTED_MODULE_1__.QueryEditorMode.Builder },
  { label: "Code", value: _types_js__WEBPACK_IMPORTED_MODULE_1__.QueryEditorMode.Code }
];
function QueryEditorModeToggle({ mode, onChange }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "data-testid": "QueryEditorModeToggle" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, { options: editorModes, size: "sm", value: mode, onChange }));
}


//# sourceMappingURL=QueryEditorModeToggle.js.map


/***/ }),

/***/ "./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/QueryHeaderSwitch.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryHeaderSwitch: () => (/* binding */ QueryHeaderSwitch)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _QueryEditor_Stack_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/QueryEditor/Stack.js");






var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function QueryHeaderSwitch(_a) {
  var _b = _a, { label } = _b, inputProps = __objRest(_b, ["label"]);
  const dashedLabel = label.replace(" ", "-");
  const switchIdRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)((0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqueId)(`switch-${dashedLabel}`));
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_QueryEditor_Stack_js__WEBPACK_IMPORTED_MODULE_4__.Stack, { gap: 1 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", { htmlFor: switchIdRef.current, className: styles.switchLabel }, label), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Switch, __spreadProps(__spreadValues({}, inputProps), { id: switchIdRef.current })));
}
const getStyles = (theme) => {
  return {
    switchLabel: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      color: theme.colors.text.secondary,
      cursor: "pointer",
      fontSize: theme.typography.bodySmall.fontSize,
      "&:hover": {
        color: theme.colors.text.primary
      }
    })
  };
};


//# sourceMappingURL=QueryHeaderSwitch.js.map


/***/ }),

/***/ "./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/QueryOptionGroup.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryOptionGroup: () => (/* binding */ QueryOptionGroup)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useToggle.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Collapse/Collapse.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _QueryEditor_Stack_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/QueryEditor/Stack.js");








function QueryOptionGroup({ title, children, collapsedInfo, queryStats }) {
  const [isOpen, toggleOpen] = (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(false);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.wrapper }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Collapse,
    {
      className: styles.collapse,
      collapsible: true,
      isOpen,
      onToggle: toggleOpen,
      label: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_QueryEditor_Stack_js__WEBPACK_IMPORTED_MODULE_5__.Stack, { gap: 0 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h6", { className: styles.title }, title), !isOpen && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.description }, collapsedInfo.map((x, i) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { key: i }, x))))
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.body }, children)
  ), queryStats && _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.config.featureToggles.lokiQuerySplitting && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tooltip, { content: "Note: the query will be split into multiple parts and executed in sequence. Query limits will only apply each individual part." }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Icon, { tabIndex: 0, name: "info-circle", className: styles.tooltip, size: "sm" })), queryStats && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", { className: styles.stats }, generateQueryStats(queryStats)));
}
const getStyles = (theme) => {
  return {
    collapse: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      backgroundColor: "unset",
      border: "unset",
      marginBottom: 0,
      ["> button"]: {
        padding: theme.spacing(0, 1)
      }
    }),
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }),
    title: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      flexGrow: 1,
      overflow: "hidden",
      fontSize: theme.typography.bodySmall.fontSize,
      fontWeight: theme.typography.fontWeightMedium,
      margin: 0
    }),
    description: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      color: theme.colors.text.secondary,
      fontSize: theme.typography.bodySmall.fontSize,
      fontWeight: theme.typography.bodySmall.fontWeight,
      paddingLeft: theme.spacing(2),
      gap: theme.spacing(2),
      display: "flex"
    }),
    body: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      display: "flex",
      gap: theme.spacing(2),
      flexWrap: "wrap"
    }),
    stats: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      margin: "0px",
      color: theme.colors.text.secondary,
      fontSize: theme.typography.bodySmall.fontSize
    }),
    tooltip: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      marginRight: theme.spacing(0.25)
    })
  };
};
const generateQueryStats = (queryStats) => {
  if (queryStats.message) {
    return queryStats.message;
  }
  return `This query will process approximately ${convertUnits(queryStats)}.`;
};
const convertUnits = (queryStats) => {
  const { text, suffix } = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_9__.getValueFormat)("bytes")(queryStats.bytes, 1);
  return text + suffix;
};


//# sourceMappingURL=QueryOptionGroup.js.map


/***/ }),

/***/ "./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/RawQuery.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/types.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BINARY_OPERATIONS_KEY: () => (/* binding */ BINARY_OPERATIONS_KEY),
/* harmony export */   QueryEditorMode: () => (/* binding */ QueryEditorMode)
/* harmony export */ });
var QueryEditorMode = /* @__PURE__ */ ((QueryEditorMode2) => {
  QueryEditorMode2["Code"] = "code";
  QueryEditorMode2["Builder"] = "builder";
  return QueryEditorMode2;
})(QueryEditorMode || {});
const BINARY_OPERATIONS_KEY = "Binary operations";


//# sourceMappingURL=types.js.map


/***/ }),

/***/ "./node_modules/@popperjs/core/lib/createPopper.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPopper: () => (/* binding */ createPopper),
/* harmony export */   detectOverflow: () => (/* reexport safe */ _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   popperGenerator: () => (/* binding */ popperGenerator)
/* harmony export */ });
/* harmony import */ var _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/orderModifiers.js");
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/debounce.js");
/* harmony import */ var _utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/mergeByName.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");









var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: (0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(reference) ? (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__["default"])(reference) : reference.contextElement ? (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__["default"])(reference.contextElement) : [],
          popper: (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = (0,_utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_3__["default"])([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: (0,_dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_4__["default"])(reference, (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_5__["default"])(popper), state.options.strategy === 'fixed'),
          popper: (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__["default"])(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: (0,_utils_debounce_js__WEBPACK_IMPORTED_MODULE_7__["default"])(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref) {
        var name = _ref.name,
            _ref$options = _ref.options,
            options = _ref$options === void 0 ? {} : _ref$options,
            effect = _ref.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/contains.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contains)
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isShadowRoot)(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBoundingClientRect)
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/math.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js");




function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element)) {
    scaleX = element.offsetWidth > 0 ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_1__.round)(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_1__.round)(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  var _ref = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(element) ? (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element) : window,
      visualViewport = _ref.visualViewport;

  var addVisualOffsets = !(0,_isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_3__["default"])() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getClippingRect)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _getViewportRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js");
/* harmony import */ var _getDocumentRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js");
/* harmony import */ var _listScrollParents_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/math.js");















function getInnerBoundingClientRect(element, strategy) {
  var rect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === _enums_js__WEBPACK_IMPORTED_MODULE_1__.viewport ? (0,_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_getViewportRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element, strategy)) : (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : (0,_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_getDocumentRect_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = (0,_listScrollParents_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_8__["default"])(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf((0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_9__["default"])(element).position) >= 0;
  var clipperElement = canEscapeClipping && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isHTMLElement)(element) ? (0,_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__["default"])(element) : element;

  if (!(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clippingParent) && (0,_contains_js__WEBPACK_IMPORTED_MODULE_11__["default"])(clippingParent, clipperElement) && (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_12__["default"])(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.max)(rect.top, accRect.top);
    accRect.right = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.min)(rect.right, accRect.right);
    accRect.bottom = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.min)(rect.bottom, accRect.bottom);
    accRect.left = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.max)(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCompositeRect)
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getNodeScroll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/math.js");









function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(rect.width) / element.offsetWidth || 1;
  var scaleY = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(offsetParent);
  var offsetParentIsScaled = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);
  var documentElement = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent);
  var rect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_5__["default"])(documentElement)) {
      scroll = (0,_getNodeScroll_js__WEBPACK_IMPORTED_MODULE_6__["default"])(offsetParent);
    }

    if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(offsetParent)) {
      offsets = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_7__["default"])(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getComputedStyle)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getComputedStyle(element) {
  return (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element).getComputedStyle(element);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDocumentElement)
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return (((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDocumentRect)
/* harmony export */ });
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/math.js");




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var winScroll = (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
  var y = -winScroll.scrollTop;

  if ((0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(body || html).direction === 'rtl') {
    x += (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getHTMLElementScroll)
/* harmony export */ });
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getLayoutRect)
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNodeName)
/* harmony export */ });
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNodeScroll)
/* harmony export */ });
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js");




function getNodeScroll(node) {
  if (node === (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node) || !(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(node)) {
    return (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node);
  } else {
    return (0,_getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node);
  }
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOffsetParent)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _isTableElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _utils_userAgent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/userAgent.js");








function getTrueOffsetParent(element) {
  if (!(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
  (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = /firefox/i.test((0,_utils_userAgent_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
  var isIE = /Trident/i.test((0,_utils_userAgent_js__WEBPACK_IMPORTED_MODULE_2__["default"])());

  if (isIE && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = (0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);

  if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isShadowRoot)(currentNode)) {
    currentNode = currentNode.host;
  }

  while ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(currentNode) && ['html', 'body'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_4__["default"])(currentNode)) < 0) {
    var css = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && (0,_isTableElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(offsetParent) && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent) === 'html' || (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent) === 'body' && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getParentNode)
/* harmony export */ });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");



function getParentNode(element) {
  if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element) // fallback

  );
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getScrollParent)
/* harmony export */ });
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(node) && (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node)) {
    return node;
  }

  return getScrollParent((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getViewportRect)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js");




function getViewportRect(element, strategy) {
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var html = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = (0,_isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element),
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindow)
/* harmony export */ });
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindowScroll)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getWindowScroll(node) {
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindowScrollBarX)
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)).left + (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).scrollLeft;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isElement: () => (/* binding */ isElement),
/* harmony export */   isHTMLElement: () => (/* binding */ isHTMLElement),
/* harmony export */   isShadowRoot: () => (/* binding */ isShadowRoot)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");


function isElement(node) {
  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isLayoutViewport)
/* harmony export */ });
/* harmony import */ var _utils_userAgent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/userAgent.js");

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test((0,_utils_userAgent_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isScrollParent)
/* harmony export */ });
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isTableElement)
/* harmony export */ });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) >= 0;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listScrollParents)
/* harmony export */ });
/* harmony import */ var _getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = (0,_getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__["default"])(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__["default"])(target)));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/enums.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   afterMain: () => (/* binding */ afterMain),
/* harmony export */   afterRead: () => (/* binding */ afterRead),
/* harmony export */   afterWrite: () => (/* binding */ afterWrite),
/* harmony export */   auto: () => (/* binding */ auto),
/* harmony export */   basePlacements: () => (/* binding */ basePlacements),
/* harmony export */   beforeMain: () => (/* binding */ beforeMain),
/* harmony export */   beforeRead: () => (/* binding */ beforeRead),
/* harmony export */   beforeWrite: () => (/* binding */ beforeWrite),
/* harmony export */   bottom: () => (/* binding */ bottom),
/* harmony export */   clippingParents: () => (/* binding */ clippingParents),
/* harmony export */   end: () => (/* binding */ end),
/* harmony export */   left: () => (/* binding */ left),
/* harmony export */   main: () => (/* binding */ main),
/* harmony export */   modifierPhases: () => (/* binding */ modifierPhases),
/* harmony export */   placements: () => (/* binding */ placements),
/* harmony export */   popper: () => (/* binding */ popper),
/* harmony export */   read: () => (/* binding */ read),
/* harmony export */   reference: () => (/* binding */ reference),
/* harmony export */   right: () => (/* binding */ right),
/* harmony export */   start: () => (/* binding */ start),
/* harmony export */   top: () => (/* binding */ top),
/* harmony export */   variationPlacements: () => (/* binding */ variationPlacements),
/* harmony export */   viewport: () => (/* binding */ viewport),
/* harmony export */   write: () => (/* binding */ write)
/* harmony export */ });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || !(0,_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || !(0,_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/arrow.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@popperjs/core/lib/enums.js");








 // eslint-disable-next-line import/no-unused-modules

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return (0,_utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(typeof padding !== 'number' ? padding : (0,_utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_1__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_2__.basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(state.placement);
  var axis = (0,_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(basePlacement);
  var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_2__.left, _enums_js__WEBPACK_IMPORTED_MODULE_2__.right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__["default"])(arrowElement);
  var minProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.top : _enums_js__WEBPACK_IMPORTED_MODULE_2__.left;
  var maxProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_2__.right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_7__.within)(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!(0,_dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_8__["default"])(state.elements.popper, arrowElement)) {
    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   mapToStyles: () => (/* binding */ mapToStyles)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/math.js");







 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x,
      y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(x * dpr) / dpr || 0,
    y: (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums_js__WEBPACK_IMPORTED_MODULE_1__.left;
  var sideY = _enums_js__WEBPACK_IMPORTED_MODULE_1__.top;
  var win = window;

  if (adaptive) {
    var offsetParent = (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper)) {
      offsetParent = (0,_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(popper);

      if ((0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"])(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.top || (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.left || placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.right) && variation === _enums_js__WEBPACK_IMPORTED_MODULE_1__.end) {
      sideY = _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.left || (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.top || placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom) && variation === _enums_js__WEBPACK_IMPORTED_MODULE_1__.end) {
      sideX = _enums_js__WEBPACK_IMPORTED_MODULE_1__.right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }, (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper)) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.placement),
    variation: (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_7__["default"])(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/flip.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/getVariation.js");






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if ((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.auto) {
    return [];
  }

  var oppositePlacement = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(placement);
  return [(0,_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(placement), oppositePlacement, (0,_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [(0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.auto ? (0,_utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);

    var isStartVariation = (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_5__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.start;
    var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_1__.top, _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_1__.right : _enums_js__WEBPACK_IMPORTED_MODULE_1__.left : isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_1__.top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(mainVariationSide);
    }

    var altVariationSide = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/hide.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/detectOverflow.js");



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom, _enums_js__WEBPACK_IMPORTED_MODULE_0__.left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyStyles: () => (/* reexport safe */ _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   arrow: () => (/* reexport safe */ _arrow_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   computeStyles: () => (/* reexport safe */ _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   eventListeners: () => (/* reexport safe */ _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   flip: () => (/* reexport safe */ _flip_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   hide: () => (/* reexport safe */ _hide_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   offset: () => (/* reexport safe */ _offset_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   popperOffsets: () => (/* reexport safe */ _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   preventOverflow: () => (/* reexport safe */ _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__["default"])
/* harmony export */ });
/* harmony import */ var _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _arrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _flip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _hide_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _offset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");










/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/offset.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   distanceAndSkiddingToXY: () => (/* binding */ distanceAndSkiddingToXY)
/* harmony export */ });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@popperjs/core/lib/enums.js");

 // eslint-disable-next-line import/no-unused-modules

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var invertDistance = [_enums_js__WEBPACK_IMPORTED_MODULE_1__.left, _enums_js__WEBPACK_IMPORTED_MODULE_1__.top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [_enums_js__WEBPACK_IMPORTED_MODULE_1__.left, _enums_js__WEBPACK_IMPORTED_MODULE_1__.right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = _enums_js__WEBPACK_IMPORTED_MODULE_1__.placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/computeOffsets.js");


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = (0,_utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/getAltAxis.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/math.js");












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state.placement);
  var variation = (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = (0,_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(basePlacement);
  var altAxis = (0,_utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_4__["default"])(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.top : _enums_js__WEBPACK_IMPORTED_MODULE_5__.left;
    var altSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_5__.right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = offset + overflow[mainSide];
    var max = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_5__.start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_5__.start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__["default"])(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : (0,_utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.within)(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_9__["default"])(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.within)(tether ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_10__.min)(min, tetherMin) : min, offset, tether ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_10__.max)(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.top : _enums_js__WEBPACK_IMPORTED_MODULE_5__.left;

    var _altSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_5__.right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [_enums_js__WEBPACK_IMPORTED_MODULE_5__.top, _enums_js__WEBPACK_IMPORTED_MODULE_5__.left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.withinMaxClamp)(_tetherMin, _offset, _tetherMax) : (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.within)(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper-lite.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPopper: () => (/* binding */ createPopper),
/* harmony export */   defaultModifiers: () => (/* binding */ defaultModifiers),
/* harmony export */   detectOverflow: () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   popperGenerator: () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_4__.popperGenerator)
/* harmony export */ });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");





var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"]];
var createPopper = /*#__PURE__*/(0,_createPopper_js__WEBPACK_IMPORTED_MODULE_4__.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyStyles: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.applyStyles),
/* harmony export */   arrow: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.arrow),
/* harmony export */   computeStyles: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.computeStyles),
/* harmony export */   createPopper: () => (/* binding */ createPopper),
/* harmony export */   createPopperLite: () => (/* reexport safe */ _popper_lite_js__WEBPACK_IMPORTED_MODULE_11__.createPopper),
/* harmony export */   defaultModifiers: () => (/* binding */ defaultModifiers),
/* harmony export */   detectOverflow: () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   eventListeners: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.eventListeners),
/* harmony export */   flip: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.flip),
/* harmony export */   hide: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.hide),
/* harmony export */   offset: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.offset),
/* harmony export */   popperGenerator: () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_9__.popperGenerator),
/* harmony export */   popperOffsets: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.popperOffsets),
/* harmony export */   preventOverflow: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.preventOverflow)
/* harmony export */ });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony import */ var _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@popperjs/core/lib/popper-lite.js");
/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/@popperjs/core/lib/modifiers/index.js");










var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_4__["default"], _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_6__["default"], _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_7__["default"], _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_8__["default"]];
var createPopper = /*#__PURE__*/(0,_createPopper_js__WEBPACK_IMPORTED_MODULE_9__.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ computeAutoPlacement)
/* harmony export */ });
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.placements : _options$allowedAutoP;
  var variation = (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement);
  var placements = variation ? flipVariations ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements : _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements.filter(function (placement) {
    return (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === variation;
  }) : _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = (0,_detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[(0,_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ computeOffsets)
/* harmony export */ });
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@popperjs/core/lib/enums.js");




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? (0,_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) : null;
  var variation = placement ? (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? (0,_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case _enums_js__WEBPACK_IMPORTED_MODULE_2__.start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case _enums_js__WEBPACK_IMPORTED_MODULE_2__.end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/debounce.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ debounce)
/* harmony export */ });
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ detectOverflow)
/* harmony export */ });
/* harmony import */ var _dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _computeOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/computeOffsets.js");
/* harmony import */ var _rectToClientRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _expandToHashMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = (0,_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(typeof padding !== 'number' ? padding : (0,_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_2__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements));
  var altContext = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.reference : _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = (0,_dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(element) ? element : element.contextElement || (0,_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = (0,_dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.elements.reference);
  var popperOffsets = (0,_computeOffsets_js__WEBPACK_IMPORTED_MODULE_7__["default"])({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = (0,_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_8__["default"])(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ expandToHashMap)
/* harmony export */ });
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getAltAxis)
/* harmony export */ });
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBasePlacement)
/* harmony export */ });

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getFreshSideObject)
/* harmony export */ });
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMainAxisFromPlacement)
/* harmony export */ });
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOppositePlacement)
/* harmony export */ });
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOppositeVariationPlacement)
/* harmony export */ });
var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getVariation.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getVariation)
/* harmony export */ });
function getVariation(placement) {
  return placement.split('-')[1];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/math.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   max: () => (/* binding */ max),
/* harmony export */   min: () => (/* binding */ min),
/* harmony export */   round: () => (/* binding */ round)
/* harmony export */ });
var max = Math.max;
var min = Math.min;
var round = Math.round;

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergeByName.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeByName)
/* harmony export */ });
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergePaddingObject)
/* harmony export */ });
/* harmony import */ var _getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");

function mergePaddingObject(paddingObject) {
  return Object.assign({}, (0,_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), paddingObject);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ orderModifiers)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/enums.js");
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums_js__WEBPACK_IMPORTED_MODULE_0__.modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rectToClientRect)
/* harmony export */ });
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/userAgent.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUAString)
/* harmony export */ });
function getUAString() {
  var uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/within.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   within: () => (/* binding */ within),
/* harmony export */   withinMaxClamp: () => (/* binding */ withinMaxClamp)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@popperjs/core/lib/utils/math.js");

function within(min, value, max) {
  return (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.max)(min, (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.min)(value, max));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

/***/ }),

/***/ "./packages/grafana-o11y-ds-frontend/src/LocalStorageValueProvider/LocalStorageValueProvider.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalStorageValueProvider: () => (/* binding */ LocalStorageValueProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-o11y-ds-frontend/src/store.ts");



const LocalStorageValueProvider = (props) => {
  const { children, storageKey, defaultValue } = props;
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({ value: _store__WEBPACK_IMPORTED_MODULE_1__.store.getObject(props.storageKey, props.defaultValue) });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const onStorageUpdate = (v) => {
      if (v.key === storageKey) {
        setState({ value: _store__WEBPACK_IMPORTED_MODULE_1__.store.getObject(props.storageKey, props.defaultValue) });
      }
    };
    window.addEventListener("storage", onStorageUpdate);
    return () => {
      window.removeEventListener("storage", onStorageUpdate);
    };
  });
  const onSaveToStore = (value) => {
    try {
      _store__WEBPACK_IMPORTED_MODULE_1__.store.setObject(storageKey, value);
    } catch (error) {
      console.error(error);
    }
    setState({ value });
  };
  const onDeleteFromStore = () => {
    try {
      _store__WEBPACK_IMPORTED_MODULE_1__.store.delete(storageKey);
    } catch (error) {
      console.log(error);
    }
    setState({ value: defaultValue });
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, children(state.value, onSaveToStore, onDeleteFromStore));
};


/***/ }),

/***/ "./packages/grafana-o11y-ds-frontend/src/store.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Store: () => (/* binding */ Store),
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });

class Store {
  get(key) {
    return window.localStorage[key];
  }
  set(key, value) {
    window.localStorage[key] = value;
  }
  getBool(key, def) {
    if (def !== void 0 && !this.exists(key)) {
      return def;
    }
    return window.localStorage[key] === "true";
  }
  getObject(key, def) {
    let ret = def;
    if (this.exists(key)) {
      const json = window.localStorage[key];
      try {
        ret = JSON.parse(json);
      } catch (error) {
        console.error("Error parsing store object: ".concat(key, ". Returning default: ").concat(def, ". [").concat(error, "]"));
      }
    }
    return ret;
  }
  /* Returns true when successfully stored, throws error if not successfully stored */
  setObject(key, value) {
    let json;
    try {
      json = JSON.stringify(value);
    } catch (error) {
      throw new Error("Could not stringify object: ".concat(key, ". [").concat(error, "]"));
    }
    try {
      this.set(key, json);
    } catch (error) {
      const errorToThrow = new Error("Could not save item in localStorage: ".concat(key, ". [").concat(error, "]"));
      if (error instanceof Error) {
        errorToThrow.name = error.name;
      }
      throw errorToThrow;
    }
    return true;
  }
  exists(key) {
    return window.localStorage[key] !== void 0;
  }
  delete(key) {
    window.localStorage.removeItem(key);
  }
}
const store = new Store();


/***/ }),

/***/ "./public/app/plugins/datasource/loki/LanguageProvider.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LokiLanguageProvider)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lru-cache/dist/esm/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/types/datasource.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-data/src/types/time.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/datasource.ts");
/* harmony import */ var _languageUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/languageUtils.ts");
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/loki/queryUtils.ts");
/* harmony import */ var _querybuilder_parsing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/parsing.ts");
/* harmony import */ var _responseUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/loki/responseUtils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/loki/types.ts");











const NS_IN_MS = 1e6;
const EMPTY_SELECTOR = "{}";
class LokiLanguageProvider extends _grafana_data__WEBPACK_IMPORTED_MODULE_8__.LanguageProvider {
  constructor(datasource, initialValues) {
    super();
    this.started = false;
    /**
     *  Cache for labels of series. This is bit simplistic in the sense that it just counts responses each as a 1 and does
     *  not account for different size of a response. If that is needed a `length` function can be added in the options.
     *  10 as a max size is totally arbitrary right now.
     */
    this.seriesCache = new lru_cache__WEBPACK_IMPORTED_MODULE_1__.LRUCache({ max: 10 });
    this.labelsCache = new lru_cache__WEBPACK_IMPORTED_MODULE_1__.LRUCache({ max: 10 });
    this.request = async (url, params) => {
      try {
        return await this.datasource.metadataRequest(url, params);
      } catch (error) {
        console.error(error);
      }
      return void 0;
    };
    /**
     * Initialize the language provider by fetching set of labels.
     */
    this.start = (timeRange) => {
      var _a, _b;
      const range = timeRange != null ? timeRange : this.getDefaultTimeRange();
      if (!this.startTask || ((_a = this.startedTimeRange) == null ? void 0 : _a.from.isSame(range.from)) === false || ((_b = this.startedTimeRange) == null ? void 0 : _b.to.isSame(range.to)) === false) {
        this.startedTimeRange = range;
        this.startTask = this.fetchLabels({ timeRange: range }).then(() => {
          this.started = true;
          return [];
        });
      }
      return this.startTask;
    };
    /**
     * Fetch series labels for a selector
     *
     * This method fetches labels for a given stream selector, such as `{job="grafana"}`.
     * It returns a promise that resolves to a record mapping label names to their corresponding values.
     *
     * @param streamSelector - The stream selector for which you want to retrieve labels.
     * @param options - (Optional) An object containing additional options - currently only time range.
     * @param options.timeRange - (Optional) The time range for which you want to retrieve label keys. If not provided, the default time range is used.
     * @returns A promise containing a record of label names and their values.
     * @throws An error if the fetch operation fails.
     */
    this.fetchSeriesLabels = async (streamSelector, options) => {
      var _a;
      const interpolatedMatch = this.datasource.interpolateString(streamSelector);
      const url = "series";
      const range = (_a = options == null ? void 0 : options.timeRange) != null ? _a : this.getDefaultTimeRange();
      const { start, end } = this.datasource.getTimeRangeParams(range);
      const cacheKey = this.generateCacheKey(url, start, end, interpolatedMatch);
      let value = this.seriesCache.get(cacheKey);
      if (!value) {
        const params = { "match[]": interpolatedMatch, start, end };
        const data = await this.request(url, params);
        if (!Array.isArray(data)) {
          return {};
        }
        const { values } = (0,_languageUtils__WEBPACK_IMPORTED_MODULE_3__.processLabels)(data);
        value = values;
        this.seriesCache.set(cacheKey, value);
      }
      return value;
    };
    /**
     * Fetch series for a selector. Use this for raw results. Use fetchSeriesLabels() to get labels.
     * @param match
     * @param streamSelector - The stream selector for which you want to retrieve labels.
     * @param options - (Optional) An object containing additional options.
     * @param options.timeRange - (Optional) The time range for which you want to retrieve label keys. If not provided, the default time range is used.
     * @returns A promise containing array with records of label names and their value.
     */
    this.fetchSeries = async (match, options) => {
      var _a;
      const url = "series";
      const range = (_a = options == null ? void 0 : options.timeRange) != null ? _a : this.getDefaultTimeRange();
      const { start, end } = this.datasource.getTimeRangeParams(range);
      const params = { "match[]": match, start, end };
      return await this.request(url, params);
    };
    this.datasource = datasource;
    this.labelKeys = [];
    Object.assign(this, initialValues);
  }
  /**
   * Returns the label keys that have been fetched.
   * If labels have not been fetched yet, it will return an empty array.
   * For updated labels (which should not happen often), use fetchLabels.
   * @todo It is quite complicated to know when to use fetchLabels and when to use getLabelKeys.
   * We should consider simplifying this and use caching in the same way as with seriesCache and labelsCache
   * and just always use fetchLabels.
   * Caching should be thought out properly, so we are not fetching this often, as labelKeys should not be changing often.
   *
   * @returns {string[]} An array of label keys or an empty array if labels have not been fetched.
   */
  getLabelKeys() {
    return this.labelKeys;
  }
  importFromAbstractQuery(labelBasedQuery) {
    return {
      refId: labelBasedQuery.refId,
      expr: (0,_languageUtils__WEBPACK_IMPORTED_MODULE_3__.abstractQueryToExpr)(labelBasedQuery),
      queryType: _types__WEBPACK_IMPORTED_MODULE_7__.LokiQueryType.Range
    };
  }
  exportToAbstractQuery(query) {
    if (!query.expr || query.expr.length === 0) {
      return { refId: query.refId, labelMatchers: [] };
    }
    const streamSelectors = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_4__.getStreamSelectorsFromQuery)(query.expr);
    const labelMatchers = streamSelectors.map((streamSelector) => {
      const visualQuery = (0,_querybuilder_parsing__WEBPACK_IMPORTED_MODULE_5__.buildVisualQueryFromString)(streamSelector).query;
      const matchers = visualQuery.labels.map((label) => {
        return {
          name: label.label,
          value: label.value,
          operator: _languageUtils__WEBPACK_IMPORTED_MODULE_3__.mapAbstractOperatorsToOp[label.op]
        };
      });
      return matchers;
    });
    return {
      refId: query.refId,
      labelMatchers: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.flatten)(labelMatchers)
    };
  }
  /**
   * Fetch label keys using the best applicable endpoint.
   *
   * This asynchronous function returns all available label keys from the data source.
   * It returns a promise that resolves to an array of strings containing the label keys.
   *
   * @param options - (Optional) An object containing additional options.
   * @param options.streamSelector - (Optional) The stream selector to filter label keys. If not provided, all label keys are fetched.
   * @param options.timeRange - (Optional) The time range for which you want to retrieve label keys. If not provided, the default time range is used.
   * @returns A promise containing an array of label keys.
   * @throws An error if the fetch operation fails.
   */
  async fetchLabels(options) {
    if (!options || !options.streamSelector) {
      return this.fetchLabelsByLabelsEndpoint(options);
    } else {
      const data = await this.fetchSeriesLabels(options.streamSelector, { timeRange: options.timeRange });
      return Object.keys(data != null ? data : {});
    }
  }
  /**
   * Fetch all label keys
   * This asynchronous function returns all available label keys from the data source.
   * It returns a promise that resolves to an array of strings containing the label keys.
   *
   * @param options - (Optional) An object containing additional options - currently only time range.
   * @param options.timeRange - (Optional) The time range for which you want to retrieve label keys. If not provided, the default time range is used.
   * @returns A promise containing an array of label keys.
   * @throws An error if the fetch operation fails.
   */
  async fetchLabelsByLabelsEndpoint(options) {
    var _a;
    const url = "labels";
    const range = (_a = options == null ? void 0 : options.timeRange) != null ? _a : this.getDefaultTimeRange();
    const timeRange = this.datasource.getTimeRangeParams(range);
    const res = await this.request(url, timeRange);
    if (Array.isArray(res)) {
      const labels = res.slice().sort().filter((label) => label !== "__name__");
      this.labelKeys = labels;
      return this.labelKeys;
    }
    return [];
  }
  // Cache key is a bit different here. We round up to a minute the intervals.
  // The rounding may seem strange but makes relative intervals like now-1h less prone to need separate request every
  // millisecond while still actually getting all the keys for the correct interval. This still can create problems
  // when user does not the newest values for a minute if already cached.
  generateCacheKey(url, start, end, param) {
    return [url, this.roundTime(start), this.roundTime(end), param].join();
  }
  // Round nanoseconds epoch to nearest 5 minute interval
  roundTime(nanoseconds) {
    return nanoseconds ? Math.floor(nanoseconds / NS_IN_MS / 1e3 / 60 / 5) : 0;
  }
  /**
   * Fetch label values
   *
   * This asynchronous function fetches values associated with a specified label name.
   * It returns a promise that resolves to an array of strings containing the label values.
   *
   * @param labelName - The name of the label for which you want to retrieve values.
   * @param options - (Optional) An object containing additional options.
   * @param options.streamSelector - (Optional) The stream selector to filter label values. If not provided, all label values are fetched.
   * @param options.timeRange - (Optional) The time range for which you want to retrieve label values. If not provided, the default time range is used.
   * @returns A promise containing an array of label values.
   * @throws An error if the fetch operation fails.
   */
  async fetchLabelValues(labelName, options) {
    var _a;
    const label = encodeURIComponent(this.datasource.interpolateString(labelName));
    const streamParam = (options == null ? void 0 : options.streamSelector) && options.streamSelector !== EMPTY_SELECTOR ? this.datasource.interpolateString(options.streamSelector) : void 0;
    const url = "label/".concat(label, "/values");
    const range = (_a = options == null ? void 0 : options.timeRange) != null ? _a : this.getDefaultTimeRange();
    const rangeParams = this.datasource.getTimeRangeParams(range);
    const { start, end } = rangeParams;
    const params = { start, end };
    let paramCacheKey = label;
    if (streamParam) {
      params.query = streamParam;
      paramCacheKey += streamParam;
    }
    const cacheKey = this.generateCacheKey(url, start, end, paramCacheKey);
    let labelValues = this.labelsCache.get(cacheKey);
    if (!labelValues) {
      this.labelsCache.set(cacheKey, []);
      const res = await this.request(url, params);
      if (Array.isArray(res)) {
        labelValues = res.slice().sort();
        this.labelsCache.set(cacheKey, labelValues);
      }
    }
    return labelValues != null ? labelValues : [];
  }
  /**
   * Get parser and label keys for a selector
   *
   * This asynchronous function is used to fetch parsers and label keys for a selected log stream based on sampled lines.
   * It returns a promise that resolves to an object with the following properties:
   *
   * - `extractedLabelKeys`: An array of available label keys associated with the log stream.
   * - `hasJSON`: A boolean indicating whether JSON parsing is available for the stream.
   * - `hasLogfmt`: A boolean indicating whether Logfmt parsing is available for the stream.
   * - `hasPack`: A boolean indicating whether Pack parsing is available for the stream.
   * - `unwrapLabelKeys`: An array of label keys that can be used for unwrapping log data.
   *
   * @param streamSelector - The selector for the log stream you want to analyze.
   * @param options - (Optional) An object containing additional options.
   * @param options.maxLines - (Optional) The number of log lines requested when determining parsers and label keys.
   * @param options.timeRange - (Optional) The time range for which you want to retrieve label keys. If not provided, the default time range is used.
   * Smaller maxLines is recommended for improved query performance. The default count is 10.
   * @returns A promise containing an object with parser and label key information.
   * @throws An error if the fetch operation fails.
   */
  async getParserAndLabelKeys(streamSelector, options) {
    var _a;
    const empty = {
      extractedLabelKeys: [],
      structuredMetadataKeys: [],
      unwrapLabelKeys: [],
      hasJSON: false,
      hasLogfmt: false,
      hasPack: false
    };
    if (!_grafana_runtime__WEBPACK_IMPORTED_MODULE_9__.config.featureToggles.lokiQueryHints) {
      return empty;
    }
    const series = await this.datasource.getDataSamples(
      {
        expr: streamSelector,
        refId: "data-samples",
        maxLines: (options == null ? void 0 : options.maxLines) || _datasource__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_MAX_LINES_SAMPLE
      },
      (_a = options == null ? void 0 : options.timeRange) != null ? _a : this.getDefaultTimeRange()
    );
    if (!series.length) {
      return empty;
    }
    const { hasLogfmt, hasJSON, hasPack } = (0,_responseUtils__WEBPACK_IMPORTED_MODULE_6__.extractLogParserFromDataFrame)(series[0]);
    return {
      extractedLabelKeys: [
        ...(0,_responseUtils__WEBPACK_IMPORTED_MODULE_6__.extractLabelKeysFromDataFrame)(series[0], _types__WEBPACK_IMPORTED_MODULE_7__.LabelType.Indexed),
        ...(0,_responseUtils__WEBPACK_IMPORTED_MODULE_6__.extractLabelKeysFromDataFrame)(series[0], _types__WEBPACK_IMPORTED_MODULE_7__.LabelType.Parsed)
      ],
      structuredMetadataKeys: (0,_responseUtils__WEBPACK_IMPORTED_MODULE_6__.extractLabelKeysFromDataFrame)(series[0], _types__WEBPACK_IMPORTED_MODULE_7__.LabelType.StructuredMetadata),
      unwrapLabelKeys: (0,_responseUtils__WEBPACK_IMPORTED_MODULE_6__.extractUnwrapLabelKeysFromDataFrame)(series[0]),
      hasJSON,
      hasPack,
      hasLogfmt
    };
  }
  /**
   * Get the default time range
   *
   * @returns {TimeRange} The default time range
   */
  getDefaultTimeRange() {
    return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_10__.getDefaultTimeRange)();
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/LiveStreams.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LiveStreams: () => (/* binding */ LiveStreams)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/timer.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/throwError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/retryWhen.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/finalize.js");
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/dom/webSocket.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/dataframe/CircularDataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _liveStreamsResultTransformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/loki/liveStreamsResultTransformer.ts");






class LiveStreams {
  constructor() {
    this.streams = {};
  }
  getStream(target, retryInterval = 5e3) {
    let stream = this.streams[target.url];
    if (stream) {
      return stream;
    }
    const data = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.CircularDataFrame({ capacity: target.size });
    data.addField({ name: "Time", type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.time, config: {} });
    data.addField({ name: "Line", type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string });
    data.addField({ name: "id", type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string });
    data.meta = { ...data.meta, preferredVisualisationType: "logs" };
    data.refId = target.refId;
    stream = (0,rxjs_webSocket__WEBPACK_IMPORTED_MODULE_3__.webSocket)(target.url).pipe(
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => {
        (0,_liveStreamsResultTransformer__WEBPACK_IMPORTED_MODULE_0__.appendResponseToBufferedData)(response, data);
        return [data];
      }),
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(
        (attempts) => attempts.pipe(
          (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)((error, i) => {
            const retryAttempt = i + 1;
            if (error.code === 1006 && retryAttempt < 30) {
              if (retryAttempt > 10) {
                console.warn(
                  "Websocket connection is being disrupted. We keep reconnecting but consider starting new live tailing again. Error: ".concat(error.reason)
                );
              }
              return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.timer)(retryInterval);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(error);
          })
        )
      ),
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => {
        delete this.streams[target.url];
      })
    );
    this.streams[target.url] = stream;
    return stream;
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/LogContextProvider.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOKI_LOG_CONTEXT_PRESERVED_LABELS: () => (/* binding */ LOKI_LOG_CONTEXT_PRESERVED_LABELS),
/* harmony export */   LogContextProvider: () => (/* binding */ LogContextProvider),
/* harmony export */   SHOULD_INCLUDE_PIPELINE_OPERATIONS: () => (/* binding */ SHOULD_INCLUDE_PIPELINE_OPERATIONS)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-data/src/types/logs.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-data/src/types/app.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-data/src/datetime/moment_wrapper.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-data/src/dataframe/FieldCache.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/lezer-logql/index.es.js");
/* harmony import */ var _components_LokiContextUi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/components/LokiContextUi.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/datasource.ts");
/* harmony import */ var _languageUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/loki/languageUtils.ts");
/* harmony import */ var _modifyQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/loki/modifyQuery.ts");
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/loki/queryUtils.ts");
/* harmony import */ var _sortDataFrame__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/loki/sortDataFrame.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/loki/types.ts");












const LOKI_LOG_CONTEXT_PRESERVED_LABELS = "lokiLogContextPreservedLabels";
const SHOULD_INCLUDE_PIPELINE_OPERATIONS = "lokiLogContextShouldIncludePipelineOperations";
class LogContextProvider {
  constructor(datasource) {
    this.getLogRowContextQuery = async (row, options, origQuery, cacheFilters = true) => {
      const { query } = await this.getQueryAndRange(row, options, origQuery, cacheFilters);
      if (!cacheFilters) {
        this.cachedContextFilters = [];
      }
      return query;
    };
    this.getLogRowContext = async (row, options, origQuery) => {
      const direction = options && options.direction || _grafana_data__WEBPACK_IMPORTED_MODULE_9__.LogRowContextQueryDirection.Backward;
      const { query, range } = await this.getQueryAndRange(row, options, origQuery);
      const processResults = (result) => {
        const frames = result.data;
        const processedFrames = frames.map((frame) => (0,_sortDataFrame__WEBPACK_IMPORTED_MODULE_7__.sortDataFrameByTime)(frame, _sortDataFrame__WEBPACK_IMPORTED_MODULE_7__.SortDirection.Descending));
        return {
          ...result,
          data: processedFrames
        };
      };
      const app = _grafana_data__WEBPACK_IMPORTED_MODULE_10__.CoreApp.Explore;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.lastValueFrom)(
        this.datasource.query((0,_datasource__WEBPACK_IMPORTED_MODULE_3__.makeRequest)(query, range, app, "".concat(_datasource__WEBPACK_IMPORTED_MODULE_3__.REF_ID_STARTER_LOG_ROW_CONTEXT).concat(direction))).pipe(
          (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.catchError)((err) => {
            const error = {
              message: "Error during context query. Please check JS console logs.",
              status: err.status,
              statusText: err.statusText
            };
            throw error;
          }),
          (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.switchMap)((res) => (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(processResults(res)))
        )
      );
    };
    this.processContextFiltersToExpr = (contextFilters, query) => {
      const labelFilters = contextFilters.map((filter) => {
        if (!filter.nonIndexed && filter.enabled) {
          return "".concat(filter.label, '="').concat((0,_languageUtils__WEBPACK_IMPORTED_MODULE_4__.escapeLabelValueInExactSelector)(filter.value), '"');
        }
        return "";
      }).filter((label) => !!label).join(",");
      let expr = "{".concat(labelFilters, "}");
      if (query) {
        let hasParser = false;
        if ((0,_queryUtils__WEBPACK_IMPORTED_MODULE_6__.isQueryWithParser)(query.expr).parserCount === 1) {
          hasParser = true;
          const parser = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_6__.getParserFromQuery)(query.expr);
          if (parser) {
            expr = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_5__.addParserToQuery)(expr, parser);
          }
        }
        const nonIndexedLabels = contextFilters.filter((filter) => filter.nonIndexed && filter.enabled);
        for (const parsedLabel of nonIndexedLabels) {
          if (parsedLabel.enabled) {
            expr = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_5__.addLabelToQuery)(
              expr,
              parsedLabel.label,
              "=",
              parsedLabel.value,
              hasParser ? _types__WEBPACK_IMPORTED_MODULE_8__.LabelType.Parsed : _types__WEBPACK_IMPORTED_MODULE_8__.LabelType.StructuredMetadata
            );
          }
        }
      }
      return expr;
    };
    this.processPipelineStagesToExpr = (currentExpr, query) => {
      var _a;
      let newExpr = currentExpr;
      const origExpr = (_a = query == null ? void 0 : query.expr) != null ? _a : "";
      if ((0,_queryUtils__WEBPACK_IMPORTED_MODULE_6__.isQueryWithParser)(origExpr).parserCount > 1) {
        return newExpr;
      }
      const allNodePositions = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_6__.getNodePositionsFromQuery)(origExpr, [
        _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.PipelineStage,
        _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.LabelParser,
        _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.Logfmt,
        _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.Json,
        _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.LineFilters,
        _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.LabelFilter
      ]);
      const pipelineStagePositions = allNodePositions.filter((position) => {
        var _a2;
        return ((_a2 = position.type) == null ? void 0 : _a2.id) === _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.PipelineStage;
      });
      const otherNodePositions = allNodePositions.filter((position) => {
        var _a2;
        return ((_a2 = position.type) == null ? void 0 : _a2.id) !== _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.PipelineStage;
      });
      for (const pipelineStagePosition of pipelineStagePositions) {
        if (otherNodePositions.some((position) => pipelineStagePosition.contains(position))) {
          continue;
        }
        newExpr += " ".concat(pipelineStagePosition.getExpression(origExpr));
      }
      return newExpr;
    };
    this.queryContainsValidPipelineStages = (query) => {
      var _a;
      const origExpr = (_a = query == null ? void 0 : query.expr) != null ? _a : "";
      const allNodePositions = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_6__.getNodePositionsFromQuery)(origExpr, [
        _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.PipelineStage,
        _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.LabelParser,
        _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.LineFilters,
        _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.LabelFilter
      ]);
      const pipelineStagePositions = allNodePositions.filter((position) => {
        var _a2;
        return ((_a2 = position.type) == null ? void 0 : _a2.id) === _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.PipelineStage;
      });
      const otherNodePositions = allNodePositions.filter((position) => {
        var _a2;
        return ((_a2 = position.type) == null ? void 0 : _a2.id) !== _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.PipelineStage;
      });
      return pipelineStagePositions.some(
        (pipelineStagePosition) => otherNodePositions.every((position) => pipelineStagePosition.contains(position) === false)
      );
    };
    this.getInitContextFilters = async (row, query, timeRange) => {
      let preservedFiltersApplied = false;
      if (!query || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(row.labels)) {
        return { contextFilters: [], preservedFiltersApplied };
      }
      const rowLabels = row.labels;
      let allLabels = [];
      if (!(0,_queryUtils__WEBPACK_IMPORTED_MODULE_6__.isQueryWithParser)(query.expr).queryWithParser) {
        await this.datasource.languageProvider.start(timeRange);
        allLabels = this.datasource.languageProvider.getLabelKeys();
      } else {
        const stream = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_6__.getStreamSelectorsFromQuery)(query.expr);
        allLabels = await this.datasource.languageProvider.fetchLabels({ streamSelector: stream[0], timeRange });
      }
      const contextFilters = [];
      Object.entries(rowLabels).forEach(([label, value]) => {
        const labelType = (0,_languageUtils__WEBPACK_IMPORTED_MODULE_4__.getLabelTypeFromFrame)(label, row.dataFrame, row.rowIndex);
        const filter = {
          label,
          value,
          enabled: allLabels.includes(label),
          nonIndexed: labelType !== null && labelType !== _types__WEBPACK_IMPORTED_MODULE_8__.LabelType.Indexed
        };
        contextFilters.push(filter);
      });
      let preservedLabels = void 0;
      const preservedLabelsString = window.localStorage.getItem(LOKI_LOG_CONTEXT_PRESERVED_LABELS);
      if (preservedLabelsString) {
        try {
          preservedLabels = JSON.parse(preservedLabelsString);
        } catch (e) {
        }
      }
      if (!preservedLabels) {
        return { contextFilters, preservedFiltersApplied };
      } else {
        let arePreservedLabelsUsed = false;
        const newContextFilters = contextFilters.map((contextFilter) => {
          if (preservedLabels.removedLabels.includes(contextFilter.label)) {
            arePreservedLabelsUsed = true;
            return { ...contextFilter, enabled: false };
          }
          if (preservedLabels.selectedExtractedLabels.includes(contextFilter.label)) {
            arePreservedLabelsUsed = true;
            return { ...contextFilter, enabled: true };
          }
          return { ...contextFilter };
        });
        const isAtLeastOneRealLabelEnabled = newContextFilters.some(({ enabled, nonIndexed }) => enabled && !nonIndexed);
        if (!isAtLeastOneRealLabelEnabled) {
          return { contextFilters, preservedFiltersApplied };
        } else {
          if (arePreservedLabelsUsed) {
            preservedFiltersApplied = true;
          }
          return { contextFilters: newContextFilters, preservedFiltersApplied };
        }
      }
    };
    this.datasource = datasource;
    this.cachedContextFilters = [];
  }
  async getQueryAndRange(row, options, origQuery, cacheFilters = true) {
    const direction = options && options.direction || _grafana_data__WEBPACK_IMPORTED_MODULE_9__.LogRowContextQueryDirection.Backward;
    const limit = options && options.limit || this.datasource.maxLines;
    if (this.cachedContextFilters.length === 0 || !cacheFilters) {
      const filters = (await this.getInitContextFilters(row, origQuery, {
        from: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_15__.dateTime)(row.timeEpochMs),
        to: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_15__.dateTime)(row.timeEpochMs),
        raw: { from: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_15__.dateTime)(row.timeEpochMs), to: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_15__.dateTime)(row.timeEpochMs) }
      })).contextFilters.filter((filter) => filter.enabled);
      this.cachedContextFilters = filters;
    }
    return await this.prepareLogRowContextQueryTarget(row, limit, direction, origQuery);
  }
  async prepareLogRowContextQueryTarget(row, limit, direction, origQuery) {
    const expr = this.prepareExpression(this.cachedContextFilters, origQuery);
    const contextTimeBuffer = 2 * 60 * 60 * 1e3;
    const queryDirection = direction === _grafana_data__WEBPACK_IMPORTED_MODULE_9__.LogRowContextQueryDirection.Forward ? _types__WEBPACK_IMPORTED_MODULE_8__.LokiQueryDirection.Forward : _types__WEBPACK_IMPORTED_MODULE_8__.LokiQueryDirection.Backward;
    const query = {
      expr,
      queryType: _types__WEBPACK_IMPORTED_MODULE_8__.LokiQueryType.Range,
      // refId has to be:
      // - always different (temporarily, will be fixed later)
      // - not increase in size
      // because it may be called many times from logs-context
      refId: "".concat(_datasource__WEBPACK_IMPORTED_MODULE_3__.REF_ID_STARTER_LOG_ROW_CONTEXT, "_").concat(Math.random().toString()),
      maxLines: limit,
      direction: queryDirection,
      datasource: { uid: this.datasource.uid, type: this.datasource.type }
    };
    const fieldCache = new _grafana_data__WEBPACK_IMPORTED_MODULE_16__.FieldCache(row.dataFrame);
    const tsField = fieldCache.getFirstFieldOfType(_grafana_data__WEBPACK_IMPORTED_MODULE_17__.FieldType.time);
    if (tsField === void 0) {
      throw new Error("loki: data frame missing time-field, should never happen");
    }
    const tsValue = tsField.values[row.rowIndex];
    const timestamp = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_15__.toUtc)(tsValue);
    const range = queryDirection === _types__WEBPACK_IMPORTED_MODULE_8__.LokiQueryDirection.Forward ? {
      // start param in Loki API is inclusive so we'll have to filter out the row that this request is based from
      // and any other that were logged in the same ns but before the row. Right now these rows will be lost
      // because the are before but came it he response that should return only rows after.
      from: timestamp,
      // convert to ns, we lose some precision here but it is not that important at the far points of the context
      to: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_15__.toUtc)(row.timeEpochMs + contextTimeBuffer)
    } : {
      // convert to ns, we lose some precision here but it is not that important at the far points of the context
      from: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_15__.toUtc)(row.timeEpochMs - contextTimeBuffer),
      to: timestamp
    };
    return {
      query,
      range: {
        from: range.from,
        to: range.to,
        raw: range
      }
    };
  }
  getLogRowContextUi(row, runContextQuery, origQuery) {
    var _a;
    const updateFilter = (contextFilters) => {
      this.cachedContextFilters = contextFilters;
      if (runContextQuery) {
        runContextQuery();
      }
    };
    this.onContextClose = (_a = this.onContextClose) != null ? _a : () => {
      this.cachedContextFilters = [];
    };
    return (0,_components_LokiContextUi__WEBPACK_IMPORTED_MODULE_2__.LokiContextUi)({
      row,
      origQuery,
      updateFilter,
      onClose: this.onContextClose,
      logContextProvider: this,
      runContextQuery
    });
  }
  prepareExpression(contextFilters, query) {
    let preparedExpression = this.processContextFiltersToExpr(contextFilters, query);
    if (window.localStorage.getItem(SHOULD_INCLUDE_PIPELINE_OPERATIONS) === "true") {
      preparedExpression = this.processPipelineStagesToExpr(preparedExpression, query);
    }
    return preparedExpression;
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/LokiVariableSupport.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LokiVariableSupport: () => (/* binding */ LokiVariableSupport)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/variables.ts");
/* harmony import */ var _components_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/loki/components/VariableQueryEditor.tsx");





class LokiVariableSupport extends _grafana_data__WEBPACK_IMPORTED_MODULE_1__.CustomVariableSupport {
  constructor(datasource) {
    super();
    this.datasource = datasource;
    this.editor = _components_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_0__.LokiVariableQueryEditor;
  }
  async execute(query, scopedVars, range) {
    return this.datasource.metricFindQuery(query, { scopedVars, range });
  }
  query(request) {
    const result = this.execute(request.targets[0], request.scopedVars, request.range);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(result).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((data) => ({ data })));
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/backendResultTransformer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transformBackendResult: () => (/* binding */ transformBackendResult)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/dataframe/processDataFrame.ts");
/* harmony import */ var _getDerivedFields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/loki/getDerivedFields.ts");
/* harmony import */ var _makeTableFrames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/makeTableFrames.ts");
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/queryUtils.ts");
/* harmony import */ var _responseUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/responseUtils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/loki/types.ts");







function isMetricFrame(frame) {
  return frame.fields.every((field) => field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.time || field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.number);
}
function setFrameMeta(frame, meta) {
  const { meta: oldMeta, ...rest } = frame;
  const newMeta = { ...oldMeta, ...meta };
  return {
    ...rest,
    meta: newMeta
  };
}
function processStreamFrame(frame, query, derivedFieldConfigs) {
  var _a;
  const custom = {
    ...(_a = frame.meta) == null ? void 0 : _a.custom,
    // keep the original meta.custom
    // used by logsModel
    lokiQueryStatKey: "Summary: total bytes processed"
  };
  if ((0,_responseUtils__WEBPACK_IMPORTED_MODULE_3__.dataFrameHasLokiError)(frame)) {
    custom.error = "Error when parsing some of the logs";
  }
  const meta = {
    preferredVisualisationType: "logs",
    limit: query == null ? void 0 : query.maxLines,
    searchWords: query !== void 0 ? (0,_queryUtils__WEBPACK_IMPORTED_MODULE_2__.getHighlighterExpressionsFromQuery)(query.expr) : void 0,
    custom
  };
  const newFrame = setFrameMeta(frame, meta);
  const derivedFields = (0,_getDerivedFields__WEBPACK_IMPORTED_MODULE_0__.getDerivedFields)(newFrame, derivedFieldConfigs);
  return {
    ...newFrame,
    fields: [...newFrame.fields, ...derivedFields]
  };
}
function processStreamsFrames(frames, queryMap, derivedFieldConfigs) {
  return frames.map((frame) => {
    const query = frame.refId !== void 0 ? queryMap.get(frame.refId) : void 0;
    return processStreamFrame(frame, query, derivedFieldConfigs);
  });
}
function processMetricInstantFrames(frames) {
  return frames.length > 0 ? (0,_makeTableFrames__WEBPACK_IMPORTED_MODULE_1__.makeTableFrames)(frames) : [];
}
function processMetricRangeFrames(frames) {
  const meta = { preferredVisualisationType: "graph" };
  return frames.map((frame) => setFrameMeta(frame, meta));
}
function groupFrames(frames, queryMap) {
  const streamsFrames = [];
  const metricInstantFrames = [];
  const metricRangeFrames = [];
  frames.forEach((frame) => {
    var _a;
    if (!isMetricFrame(frame)) {
      streamsFrames.push(frame);
    } else {
      const isInstantFrame = frame.refId != null && ((_a = queryMap.get(frame.refId)) == null ? void 0 : _a.queryType) === _types__WEBPACK_IMPORTED_MODULE_4__.LokiQueryType.Instant;
      if (isInstantFrame) {
        metricInstantFrames.push(frame);
      } else {
        metricRangeFrames.push(frame);
      }
    }
  });
  return { streamsFrames, metricInstantFrames, metricRangeFrames };
}
function improveError(error, queryMap) {
  if (error === void 0) {
    return error;
  }
  const { refId, message } = error;
  if (refId === void 0 || message === void 0) {
    return error;
  }
  const query = queryMap.get(refId);
  if (query === void 0) {
    return error;
  }
  if (message.includes("escape") && query.expr.includes("\\")) {
    return {
      ...error,
      message: "".concat(message, ". Make sure that all special characters are escaped with \\. For more information on escaping of special characters visit LogQL documentation at https://grafana.com/docs/loki/latest/logql/.")
    };
  }
  return error;
}
function transformBackendResult(response, queries, derivedFieldConfigs) {
  const { data, error, ...rest } = response;
  const dataFrames = data.map((d) => {
    if (!(0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.isDataFrame)(d)) {
      throw new Error("transformation only supports dataframe responses");
    }
    return d;
  });
  const queryMap = new Map(queries.map((query) => [query.refId, query]));
  const { streamsFrames, metricInstantFrames, metricRangeFrames } = groupFrames(dataFrames, queryMap);
  return {
    ...rest,
    error: improveError(error, queryMap),
    data: [
      ...processMetricRangeFrames(metricRangeFrames),
      ...processMetricInstantFrames(metricInstantFrames),
      ...processStreamsFrames(streamsFrames, queryMap, derivedFieldConfigs)
    ]
  };
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/components/AnnotationsQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LokiAnnotationsQueryEditor: () => (/* binding */ LokiAnnotationsQueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/QueryEditor/EditorRow.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/QueryEditor/EditorField.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/queryUtils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/types.ts");
/* harmony import */ var _LokiOptionFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/components/LokiOptionFields.tsx");
/* harmony import */ var _LokiQueryField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/loki/components/LokiQueryField.tsx");








const LokiAnnotationsQueryEditor = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function LokiAnnotationQueryEditor(props) {
  var _a;
  const { annotation, onAnnotationChange, history } = props;
  if (annotation === void 0 || onAnnotationChange === void 0) {
    return null;
  }
  const onChangeQuery = (query) => {
    const instant = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_1__.getNormalizedLokiQuery)(query).queryType === _types__WEBPACK_IMPORTED_MODULE_2__.LokiQueryType.Instant;
    onAnnotationChange({
      ...annotation,
      expr: query.expr,
      maxLines: query.maxLines,
      instant
    });
  };
  const queryWithRefId = {
    refId: "",
    expr: annotation.expr,
    maxLines: annotation.maxLines,
    instant: annotation.instant,
    queryType: annotation.queryType
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { gap: 5, direction: "column" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { gap: 0, direction: "column" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _LokiQueryField__WEBPACK_IMPORTED_MODULE_4__.LokiQueryField,
    {
      datasource: props.datasource,
      query: queryWithRefId,
      onChange: onChangeQuery,
      onRunQuery: () => {
      },
      history,
      ExtraFieldElement: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        _LokiOptionFields__WEBPACK_IMPORTED_MODULE_3__.LokiOptionFields,
        {
          lineLimitValue: ((_a = queryWithRefId == null ? void 0 : queryWithRefId.maxLines) == null ? void 0 : _a.toString()) || "",
          resolution: queryWithRefId.resolution || 1,
          query: queryWithRefId,
          onRunQuery: () => {
          },
          onChange: onChangeQuery
        }
      )
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_6__.EditorRow, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_experimental__WEBPACK_IMPORTED_MODULE_7__.EditorField,
    {
      label: "Title",
      tooltip: "Use either the name or a pattern. For example, {{instance}} is replaced with label value for the label instance."
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input,
      {
        type: "text",
        placeholder: "alertname",
        value: annotation.titleFormat,
        onChange: (event) => {
          onAnnotationChange({
            ...annotation,
            titleFormat: event.currentTarget.value
          });
        }
      }
    )
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_7__.EditorField, { label: "Tags" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input,
    {
      type: "text",
      placeholder: "label1,label2",
      value: annotation.tagKeys,
      onChange: (event) => {
        onAnnotationChange({
          ...annotation,
          tagKeys: event.currentTarget.value
        });
      }
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_experimental__WEBPACK_IMPORTED_MODULE_7__.EditorField,
    {
      label: "Text",
      tooltip: "Use either the name or a pattern. For example, {{instance}} is replaced with label value for the label instance."
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input,
      {
        type: "text",
        placeholder: "instance",
        value: annotation.textFormat,
        onChange: (event) => {
          onAnnotationChange({
            ...annotation,
            textFormat: event.currentTarget.value
          });
        }
      }
    )
  )));
});


/***/ }),

/***/ "./public/app/plugins/datasource/loki/components/LokiCheatSheet.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LokiCheatSheet)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _languageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/languageUtils.ts");





const DEFAULT_EXAMPLES = ['{job="default/prometheus"}'];
const PREFERRED_LABELS = ["job", "app", "k8s_app"];
const EXAMPLES_LIMIT = 5;
const LOGQL_EXAMPLES = [
  {
    title: "Log pipeline",
    expression: '{job="mysql"} |= "metrics" | logfmt | duration > 10s',
    label: 'This query targets the MySQL job, keeps logs that contain the substring "metrics", and then parses and filters the logs further.'
  },
  {
    title: "Count over time",
    expression: 'count_over_time({job="mysql"}[5m])',
    label: "This query counts all the log lines within the last five minutes for the MySQL job."
  },
  {
    title: "Rate",
    expression: 'rate(({job="mysql"} |= "error" != "timeout")[10s])',
    label: "This query gets the per-second rate of all non-timeout errors within the last ten seconds for the MySQL job."
  },
  {
    title: "Aggregate, count, and group",
    expression: 'sum(count_over_time({job="mysql"}[5m])) by (level)',
    label: "Get the count of logs during the last five minutes, grouping by level."
  }
];
class LokiCheatSheet extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      userExamples: []
    };
    this.checkUserLabels = async () => {
      var _a;
      const provider = (_a = this.props.datasource) == null ? void 0 : _a.languageProvider;
      if (provider.started) {
        const labels = provider.getLabelKeys() || [];
        const preferredLabel = PREFERRED_LABELS.find((l) => labels.includes(l));
        if (preferredLabel) {
          const values = await provider.fetchLabelValues(preferredLabel);
          const userExamples = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.shuffle)(values).slice(0, EXAMPLES_LIMIT).map((value) => "{".concat(preferredLabel, '="').concat((0,_languageUtils__WEBPACK_IMPORTED_MODULE_2__.escapeLabelValueInExactSelector)(value), '"}'));
          this.setState({ userExamples });
        }
      } else {
        this.scheduleUserLabelChecking();
      }
    };
  }
  componentDidMount() {
    this.scheduleUserLabelChecking();
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.reportInteraction)("grafana_loki_cheatsheet_opened", {});
  }
  componentWillUnmount() {
    clearTimeout(this.userLabelTimer);
  }
  scheduleUserLabelChecking() {
    this.userLabelTimer = setTimeout(this.checkUserLabels, 1e3);
  }
  renderExpression(expr) {
    const { onClickExample } = this.props;
    const onClick = (query) => {
      onClickExample(query);
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.reportInteraction)("grafana_loki_cheatsheet_example_clicked", {});
    };
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      "button",
      {
        type: "button",
        className: "cheat-sheet-item__example",
        key: expr,
        onClick: () => onClick({ refId: "A", expr })
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", null, expr)
    );
  }
  render() {
    const { userExamples } = this.state;
    const hasUserExamples = userExamples.length > 0;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, "Loki Cheat Sheet"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "cheat-sheet-item" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "cheat-sheet-item__title" }, "See your logs"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "cheat-sheet-item__label" }, "Start by selecting a log stream from the Label browser, or alternatively you can write a stream selector into the query field."), hasUserExamples ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "cheat-sheet-item__label" }, "Here are some example streams from your logs:"), userExamples.map((example) => this.renderExpression(example))) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "cheat-sheet-item__label" }, "Here is an example of a log stream:"), this.renderExpression(DEFAULT_EXAMPLES[0]))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "cheat-sheet-item" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "cheat-sheet-item__title" }, "Combine stream selectors"), this.renderExpression('{app="cassandra",namespace="prod"}'), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "cheat-sheet-item__label" }, "Returns all log lines from streams that have both labels.")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "cheat-sheet-item" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "cheat-sheet-item__title" }, "Filtering for search terms."), this.renderExpression('{app="cassandra"} |~ "(duration|latency)s*(=|is|of)s*[d.]+"'), this.renderExpression('{app="cassandra"} |= "exact match"'), this.renderExpression('{app="cassandra"} != "do not match"'), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "cheat-sheet-item__label" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", { href: "https://grafana.com/docs/loki/latest/logql/#log-pipeline", target: "logql" }, "LogQL"), " ", "supports exact and regular expression filters.")), LOGQL_EXAMPLES.map((item) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "cheat-sheet-item", key: item.expression }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "cheat-sheet-item__title" }, item.title), this.renderExpression(item.expression), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "cheat-sheet-item__label" }, item.label))));
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/components/LokiContextUi.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IS_LOKI_LOG_CONTEXT_UI_OPEN: () => (/* binding */ IS_LOKI_LOG_CONTEXT_UI_OPEN),
/* harmony export */   LokiContextUi: () => (/* binding */ LokiContextUi)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/datetime/moment_wrapper.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./packages/grafana-data/src/text/markdown.ts");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/RawQuery.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Collapse/Collapse.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./packages/grafana-ui/src/components/RenderUserContentAsHTML/RenderUserContentAsHTML.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _LogContextProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/LogContextProvider.ts");
/* harmony import */ var _languageUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/languageUtils.ts");
/* harmony import */ var _syntax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/loki/syntax.ts");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;










function getStyles(theme) {
  return {
    labels: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n      display: flex;\n      gap: ", ";\n    "])), theme.spacing(0.5)),
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_b || (_b = __template(["\n      display: flex;\n      flex-direction: column;\n      flex: 1;\n      gap: ", ";\n      position: relative;\n    "])), theme.spacing(0.5)),
    textWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_c || (_c = __template(["\n      display: flex;\n      align-items: center;\n    "]))),
    hidden: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_d || (_d = __template(["\n      visibility: hidden;\n    "]))),
    label: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_e || (_e = __template(["\n      max-width: 100%;\n      &:first-of-type {\n        margin-bottom: ", ";\n      }\n      &:not(:first-of-type) {\n        margin: ", " 0;\n      }\n    "])), theme.spacing(2), theme.spacing(2)),
    rawQueryContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_f || (_f = __template(["\n      text-align: start;\n      line-break: anywhere;\n      margin-top: -", ";\n      margin-right: ", ";\n      min-height: ", ";\n    "])), theme.spacing(0.25), theme.spacing(6), theme.spacing(4)),
    ui: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_g || (_g = __template(["\n      background-color: ", ";\n      padding: ", ";\n    "])), theme.colors.background.secondary, theme.spacing(2)),
    notification: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      position: "absolute",
      zIndex: theme.zIndex.portal,
      top: 0,
      right: 0
    }),
    rawQuery: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_h || (_h = __template(["\n      display: inline;\n    "]))),
    queryDescription: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_i || (_i = __template(["\n      margin-left: ", ";\n    "])), theme.spacing(0.5)),
    iconButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_j || (_j = __template(["\n      position: absolute;\n      top: ", ";\n      right: ", ";\n      z-index: ", ";\n    "])), theme.spacing(1), theme.spacing(1), theme.zIndex.navbarFixed),
    operationsToggle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_k || (_k = __template(["\n      margin: ", " 0 ", " 0;\n      & > div {\n        margin: 0;\n        & > label {\n          padding: 0;\n        }\n      }\n    "])), theme.spacing(1), theme.spacing(-1))
  };
}
const IS_LOKI_LOG_CONTEXT_UI_OPEN = "isLogContextQueryUiOpen";
function LokiContextUi(props) {
  const { row, logContextProvider, updateFilter, onClose, origQuery, runContextQuery } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const [contextFilters, setContextFilters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [showPreservedFiltersAppliedNotification, setShowPreservedFiltersAppliedNotification] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [initialized, setInitialized] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(window.localStorage.getItem(IS_LOKI_LOG_CONTEXT_UI_OPEN) === "true");
  const [includePipelineOperations, setIncludePipelineOperations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(
    window.localStorage.getItem(_LogContextProvider__WEBPACK_IMPORTED_MODULE_2__.SHOULD_INCLUDE_PIPELINE_OPERATIONS) === "true"
  );
  const timerHandle = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();
  const previousInitialized = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(false);
  const previousContextFilters = react__WEBPACK_IMPORTED_MODULE_1___default().useRef([]);
  const isInitialState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (initialized && contextFilters.some((filter) => filter.nonIndexed === filter.enabled)) {
      return false;
    }
    if (includePipelineOperations && logContextProvider.queryContainsValidPipelineStages(origQuery)) {
      return false;
    }
    return true;
  }, [contextFilters, includePipelineOperations, initialized, logContextProvider, origQuery]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!initialized) {
      return;
    }
    if (!previousInitialized.current) {
      previousInitialized.current = initialized;
      return;
    }
    if (contextFilters.filter(({ enabled, nonIndexed }) => enabled && !nonIndexed).length === 0) {
      setContextFilters(previousContextFilters.current);
      return;
    }
    previousContextFilters.current = structuredClone(contextFilters);
    if (timerHandle.current) {
      clearTimeout(timerHandle.current);
    }
    setLoading(true);
    timerHandle.current = window.setTimeout(() => {
      updateFilter(contextFilters.filter(({ enabled }) => enabled));
      const preservedLabels = {
        removedLabels: [],
        selectedExtractedLabels: []
      };
      contextFilters.forEach(({ enabled, nonIndexed, label }) => {
        if (!enabled && !nonIndexed) {
          preservedLabels.removedLabels.push(label);
        }
        if (enabled && nonIndexed) {
          preservedLabels.selectedExtractedLabels.push(label);
        }
      });
      window.localStorage.setItem(_LogContextProvider__WEBPACK_IMPORTED_MODULE_2__.LOKI_LOG_CONTEXT_PRESERVED_LABELS, JSON.stringify(preservedLabels));
      setLoading(false);
    }, 1500);
    return () => {
      clearTimeout(timerHandle.current);
    };
  }, [contextFilters, initialized]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    return () => {
      clearTimeout(timerHandle.current);
      onClose();
    };
  }, [onClose]);
  (0,react_use__WEBPACK_IMPORTED_MODULE_6__["default"])(async () => {
    setLoading(true);
    const initContextFilters = await logContextProvider.getInitContextFilters(row, origQuery, {
      from: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.dateTime)(row.timeEpochMs),
      to: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.dateTime)(row.timeEpochMs),
      raw: { from: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.dateTime)(row.timeEpochMs), to: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.dateTime)(row.timeEpochMs) }
    });
    setContextFilters(initContextFilters.contextFilters);
    setShowPreservedFiltersAppliedNotification(initContextFilters.preservedFiltersApplied);
    setInitialized(true);
    setLoading(false);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (showPreservedFiltersAppliedNotification) {
      setTimeout(() => {
        setShowPreservedFiltersAppliedNotification(false);
      }, 2e3);
    }
  }, [showPreservedFiltersAppliedNotification]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.reportInteraction)("grafana_explore_logs_loki_log_context_loaded", {
      logRowUid: row.uid,
      type: "load"
    });
    return () => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.reportInteraction)("grafana_explore_logs_loki_log_context_loaded", {
        logRowUid: row.uid,
        type: "unload"
      });
    };
  }, [row.uid]);
  const realLabels = contextFilters.filter(({ nonIndexed }) => !nonIndexed);
  const realLabelsEnabled = realLabels.filter(({ enabled }) => enabled);
  const parsedLabels = contextFilters.filter(({ nonIndexed }) => nonIndexed);
  const parsedLabelsEnabled = parsedLabels.filter(({ enabled }) => enabled);
  const contextFilterToSelectFilter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((contextFilter) => {
    return {
      label: "".concat(contextFilter.label, '="').concat((0,_languageUtils__WEBPACK_IMPORTED_MODULE_3__.escapeLabelValueInSelector)(contextFilter.value), '"'),
      value: contextFilter.label
    };
  }, []);
  const showNonIndexedLabels = parsedLabels.length > 0;
  let queryExpr = logContextProvider.prepareExpression(
    contextFilters.filter(({ enabled }) => enabled),
    origQuery
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.wrapper }, showPreservedFiltersAppliedNotification && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Alert,
    {
      className: styles.notification,
      title: "Previously used filters have been applied.",
      severity: "info",
      elevated: true
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Tooltip, { content: "Revert to initial log context query." }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.iconButton }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Button,
    {
      "data-testid": "revert-button",
      icon: "history-alt",
      variant: "secondary",
      disabled: isInitialState,
      onClick: (e) => {
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.reportInteraction)("grafana_explore_logs_loki_log_context_reverted", {
          logRowUid: row.uid
        });
        setContextFilters((contextFilters2) => {
          return contextFilters2.map((contextFilter) => ({
            ...contextFilter,
            // For revert to initial query we need to enable all labels and disable all parsed labels
            enabled: !contextFilter.nonIndexed
          }));
        });
        window.localStorage.removeItem(_LogContextProvider__WEBPACK_IMPORTED_MODULE_2__.LOKI_LOG_CONTEXT_PRESERVED_LABELS);
        window.localStorage.removeItem(_LogContextProvider__WEBPACK_IMPORTED_MODULE_2__.SHOULD_INCLUDE_PIPELINE_OPERATIONS);
        setIncludePipelineOperations(false);
      }
    }
  ))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Collapse,
    {
      collapsible: true,
      isOpen,
      onToggle: () => {
        window.localStorage.setItem(IS_LOKI_LOG_CONTEXT_UI_OPEN, (!isOpen).toString());
        setIsOpen((isOpen2) => !isOpen2);
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.reportInteraction)("grafana_explore_logs_loki_log_context_toggled", {
          logRowUid: row.uid,
          action: !isOpen ? "open" : "close"
        });
      },
      label: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.rawQueryContainer }, initialized ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
        _grafana_experimental__WEBPACK_IMPORTED_MODULE_13__.RawQuery,
        {
          language: { grammar: _syntax__WEBPACK_IMPORTED_MODULE_4__.lokiGrammar, name: "loki" },
          query: queryExpr,
          className: styles.rawQuery
        }
      ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Tooltip, { content: "The initial log context query is created from all labels defining the stream for the selected log line. Use the editor below to customize the log context query." }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Icon, { name: "info-circle", size: "sm", className: styles.queryDescription }))) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Spinner, null))
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.ui }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_16__.Label,
      {
        className: styles.label,
        description: "The initial log context query is created from all labels defining the stream for the selected log line. You can broaden your search by removing one or more of the label filters."
      },
      "Widen the search"
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.MultiSelect,
      {
        isLoading: loading,
        options: realLabels.map(contextFilterToSelectFilter),
        value: realLabelsEnabled.map(contextFilterToSelectFilter),
        closeMenuOnSelect: true,
        maxMenuHeight: 200,
        noOptionsMessage: "No further labels available",
        onChange: (keys, actionMeta) => {
          if (actionMeta.action === "select-option") {
            (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.reportInteraction)("grafana_explore_logs_loki_log_context_filtered", {
              logRowUid: row.uid,
              type: "label",
              action: "select"
            });
          }
          if (actionMeta.action === "remove-value") {
            (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.reportInteraction)("grafana_explore_logs_loki_log_context_filtered", {
              logRowUid: row.uid,
              type: "label",
              action: "remove"
            });
          }
          return setContextFilters(
            contextFilters.map((filter) => {
              if (filter.nonIndexed) {
                return filter;
              }
              filter.enabled = keys.some((key) => key.value === filter.label);
              return filter;
            })
          );
        }
      }
    ), showNonIndexedLabels && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_16__.Label,
      {
        className: styles.label,
        description: "By using a parser in your original query, you can use filters for extracted labels. Refine your search by applying extracted labels created from the selected log line."
      },
      "Refine the search"
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.MultiSelect,
      {
        isLoading: loading,
        options: parsedLabels.map(contextFilterToSelectFilter),
        value: parsedLabelsEnabled.map(contextFilterToSelectFilter),
        closeMenuOnSelect: true,
        maxMenuHeight: 200,
        noOptionsMessage: "No further labels available",
        isClearable: true,
        onChange: (keys, actionMeta) => {
          if (actionMeta.action === "select-option") {
            (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.reportInteraction)("grafana_explore_logs_loki_log_context_filtered", {
              logRowUid: row.uid,
              type: "parsed_label",
              action: "select"
            });
          }
          if (actionMeta.action === "remove-value") {
            (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.reportInteraction)("grafana_explore_logs_loki_log_context_filtered", {
              logRowUid: row.uid,
              type: "parsed_label",
              action: "remove"
            });
          }
          setContextFilters(
            contextFilters.map((filter) => {
              if (!filter.nonIndexed) {
                return filter;
              }
              filter.enabled = keys.some((key) => key.value === filter.label);
              return filter;
            })
          );
        }
      }
    )), logContextProvider.queryContainsValidPipelineStages(origQuery) && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.InlineFieldRow, { className: styles.operationsToggle }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_19__.InlineField,
      {
        label: "Include LogQL pipeline operations",
        tooltip: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_20__.RenderUserContentAsHTML,
          {
            content: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_21__.renderMarkdown)(
              "This will include LogQL operations such as `line_format` or `label_format`. It won't include line or label filter operations."
            )
          }
        )
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_22__.InlineSwitch,
        {
          value: includePipelineOperations,
          showLabel: true,
          transparent: true,
          onChange: (e) => {
            (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.reportInteraction)("grafana_explore_logs_loki_log_context_pipeline_toggled", {
              logRowUid: row.uid,
              action: e.currentTarget.checked ? "enable" : "disable"
            });
            window.localStorage.setItem(_LogContextProvider__WEBPACK_IMPORTED_MODULE_2__.SHOULD_INCLUDE_PIPELINE_OPERATIONS, e.currentTarget.checked.toString());
            setIncludePipelineOperations(e.currentTarget.checked);
            if (runContextQuery) {
              runContextQuery();
            }
          }
        }
      )
    )))
  ));
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/components/LokiLabelBrowser.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LokiLabelBrowser: () => (/* binding */ LokiLabelBrowser),
/* harmony export */   UnthemedLokiLabelBrowser: () => (/* binding */ UnthemedLokiLabelBrowser),
/* harmony export */   buildSelector: () => (/* binding */ buildSelector),
/* harmony export */   facetLabels: () => (/* binding */ facetLabels)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/utils/fuzzy.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/BrowserLabel/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _languageUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/languageUtils.ts");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;







const MAX_LABEL_COUNT = 1e3;
const MAX_VALUE_COUNT = 1e4;
const MAX_AUTO_SELECT = 4;
const EMPTY_SELECTOR = "{}";
function buildSelector(labels) {
  const selectedLabels = [];
  for (const label of labels) {
    if (label.selected && label.values && label.values.length > 0) {
      const selectedValues = label.values.filter((value) => value.selected).map((value) => value.name);
      if (selectedValues.length > 1) {
        selectedLabels.push("".concat(label.name, '=~"').concat(selectedValues.map(_languageUtils__WEBPACK_IMPORTED_MODULE_3__.escapeLabelValueInRegexSelector).join("|"), '"'));
      } else if (selectedValues.length === 1) {
        selectedLabels.push("".concat(label.name, '="').concat((0,_languageUtils__WEBPACK_IMPORTED_MODULE_3__.escapeLabelValueInExactSelector)(selectedValues[0]), '"'));
      }
    }
  }
  return ["{", selectedLabels.join(","), "}"].join("");
}
function facetLabels(labels, possibleLabels, lastFacetted) {
  return labels.map((label) => {
    var _a2;
    const possibleValues = possibleLabels[label.name];
    if (possibleValues) {
      let existingValues;
      if (label.name === lastFacetted && label.values) {
        existingValues = label.values;
      } else {
        const selectedValues = new Set(
          ((_a2 = label.values) == null ? void 0 : _a2.filter((value) => value.selected).map((value) => value.name)) || []
        );
        existingValues = possibleValues.map((value) => ({ name: value, selected: selectedValues.has(value) }));
      }
      return { ...label, loading: false, values: existingValues, facets: existingValues.length };
    }
    return { ...label, loading: false, hidden: !possibleValues, values: void 0, facets: 0 };
  });
}
const getStyles = (theme) => ({
  wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n    background-color: ", ";\n    width: 100%;\n  "])), theme.colors.background.secondary),
  wrapperPadding: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_b || (_b = __template(["\n    padding: ", ";\n  "])), theme.spacing(2)),
  list: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_c || (_c = __template(["\n    margin-top: ", ";\n    display: flex;\n    flex-wrap: wrap;\n    max-height: 200px;\n    overflow: auto;\n  "])), theme.spacing(1)),
  section: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_d || (_d = __template(["\n    & + & {\n      margin: ", ";\n    }\n\n    position: relative;\n  "])), theme.spacing(2, 0)),
  footerSectionStyles: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_e || (_e = __template(["\n    padding: ", ";\n    background-color: ", ";\n    position: sticky;\n    bottom: -", "; /* offset the padding on modal */\n    left: 0;\n  "])), theme.spacing(1), theme.colors.background.primary, theme.spacing(3)),
  selector: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_f || (_f = __template(["\n    font-family: ", ";\n    margin-bottom: ", ";\n    width: 100%;\n  "])), theme.typography.fontFamilyMonospace, theme.spacing(1)),
  status: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_g || (_g = __template(["\n    margin-bottom: ", ";\n    color: ", ";\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    transition: opacity 100ms linear;\n    opacity: 0;\n    font-size: ", ";\n    height: calc(", " + 10px);\n  "])), theme.spacing(1), theme.colors.text.secondary, theme.typography.bodySmall.fontSize, theme.typography.bodySmall.fontSize),
  statusShowing: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_h || (_h = __template(["\n    opacity: 1;\n  "]))),
  error: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_i || (_i = __template(["\n    color: ", ";\n  "])), theme.colors.error.main),
  valueList: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_j || (_j = __template(["\n    margin-right: ", ";\n    resize: horizontal;\n  "])), theme.spacing(1)),
  valueListWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_k || (_k = __template(["\n    border-left: 1px solid ", ";\n    margin: ", ";\n    padding: ", ";\n  "])), theme.colors.border.medium, theme.spacing(1, 0), theme.spacing(1, 0, 1, 1)),
  valueListArea: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_l || (_l = __template(["\n    display: flex;\n    flex-wrap: wrap;\n    margin-top: ", ";\n  "])), theme.spacing(1)),
  valueTitle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_m || (_m = __template(["\n    margin-left: -", ";\n    margin-bottom: ", ";\n  "])), theme.spacing(0.5), theme.spacing(1)),
  validationStatus: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_n || (_n = __template(["\n    padding: ", ";\n    margin-bottom: ", ";\n    color: ", ";\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  "])), theme.spacing(0.5), theme.spacing(1), theme.colors.text.maxContrast)
});
class UnthemedLokiLabelBrowser extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  constructor() {
    super(...arguments);
    this.state = {
      labels: [],
      searchTerm: "",
      status: "Ready",
      error: "",
      validationStatus: ""
    };
    this.onChangeSearch = (event) => {
      this.setState({ searchTerm: event.target.value });
    };
    this.onClickRunLogsQuery = () => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)("grafana_loki_label_browser_closed", {
        app: this.props.app,
        closeType: "showLogsButton"
      });
      const selector = buildSelector(this.state.labels);
      this.props.onChange(selector);
    };
    this.onClickRunMetricsQuery = () => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)("grafana_loki_label_browser_closed", {
        app: this.props.app,
        closeType: "showLogsRateButton"
      });
      const selector = buildSelector(this.state.labels);
      const query = "rate(".concat(selector, "[$__auto])");
      this.props.onChange(query);
    };
    this.onClickClear = () => {
      this.setState((state) => {
        const labels = state.labels.map((label) => ({
          ...label,
          values: void 0,
          selected: false,
          loading: false,
          hidden: false,
          facets: void 0
        }));
        return { labels, searchTerm: "", status: "", error: "", validationStatus: "" };
      });
      this.props.deleteLastUsedLabels();
    };
    this.onClickLabel = (name, value, event) => {
      const label = this.state.labels.find((l) => l.name === name);
      if (!label) {
        return;
      }
      const selected = !label.selected;
      let nextValue = { selected };
      if (label.values && !selected) {
        const values = label.values.map((value2) => ({ ...value2, selected: false }));
        nextValue = { ...nextValue, facets: 0, values };
      }
      this.setState({ searchTerm: "" });
      this.updateLabelState(name, nextValue, "", () => this.doFacettingForLabel(name));
    };
    this.onClickValue = (name, value, event) => {
      const label = this.state.labels.find((l) => l.name === name);
      if (!label || !label.values) {
        return;
      }
      this.setState({ searchTerm: "" });
      const values = label.values.map((v) => ({ ...v, selected: v.name === value ? !v.selected : v.selected }));
      this.updateLabelState(name, { values }, "", () => this.doFacetting(name));
    };
    this.onClickValidate = () => {
      const selector = buildSelector(this.state.labels);
      this.validateSelector(selector);
    };
    this.doFacetting = (lastFacetted) => {
      const selector = buildSelector(this.state.labels);
      if (selector === EMPTY_SELECTOR) {
        const labels = this.state.labels.map((label) => {
          return { ...label, facets: 0, values: void 0, hidden: false };
        });
        this.setState({ labels }, () => {
          this.state.labels.forEach((label) => label.selected && this.fetchValues(label.name, selector));
        });
      } else {
        this.fetchSeries(selector, lastFacetted);
      }
    };
  }
  updateLabelState(name, updatedFields, status = "", cb) {
    this.setState((state) => {
      const labels = state.labels.map((label) => {
        if (label.name === name) {
          return { ...label, ...updatedFields };
        }
        return label;
      });
      const error = status ? "" : state.error;
      return { labels, status, error, validationStatus: "" };
    }, cb);
  }
  componentDidMount() {
    const { languageProvider, autoSelect = MAX_AUTO_SELECT, lastUsedLabels, timeRange } = this.props;
    if (languageProvider) {
      const selectedLabels = lastUsedLabels;
      languageProvider.start(timeRange).then(() => {
        let rawLabels = languageProvider.getLabelKeys();
        if (rawLabels.length > MAX_LABEL_COUNT) {
          const error = "Too many labels found (showing only ".concat(MAX_LABEL_COUNT, " of ").concat(rawLabels.length, ")");
          rawLabels = rawLabels.slice(0, MAX_LABEL_COUNT);
          this.setState({ error });
        }
        const labels = rawLabels.map((label, i, arr) => ({
          name: label,
          selected: arr.length <= autoSelect && selectedLabels.length === 0 || selectedLabels.includes(label),
          loading: false
        }));
        this.setState({ labels }, () => {
          this.state.labels.forEach((label) => {
            if (label.selected) {
              this.fetchValues(label.name, EMPTY_SELECTOR);
            }
          });
        });
      });
    }
  }
  doFacettingForLabel(name) {
    const label = this.state.labels.find((l) => l.name === name);
    if (!label) {
      return;
    }
    const selectedLabels = this.state.labels.filter((label2) => label2.selected).map((label2) => label2.name);
    this.props.storeLastUsedLabels(selectedLabels);
    if (label.selected) {
      if (!label.values) {
        this.fetchValues(name, buildSelector(this.state.labels));
      }
    } else {
      this.doFacetting();
    }
  }
  async fetchValues(name, selector) {
    const { languageProvider, timeRange } = this.props;
    this.updateLabelState(name, { loading: true }, "Fetching values for ".concat(name));
    try {
      let rawValues = await languageProvider.fetchLabelValues(name, { timeRange });
      if (selector !== buildSelector(this.state.labels)) {
        this.updateLabelState(name, { loading: false }, "");
        return;
      }
      if (rawValues.length > MAX_VALUE_COUNT) {
        const error = "Too many values for ".concat(name, " (showing only ").concat(MAX_VALUE_COUNT, " of ").concat(rawValues.length, ")");
        rawValues = rawValues.slice(0, MAX_VALUE_COUNT);
        this.setState({ error });
      }
      const values = rawValues.map((value) => ({ name: value }));
      this.updateLabelState(name, { values, loading: false });
    } catch (error) {
      console.error(error);
    }
  }
  async fetchSeries(selector, lastFacetted) {
    const { languageProvider, timeRange } = this.props;
    if (lastFacetted) {
      this.updateLabelState(lastFacetted, { loading: true }, "Loading labels for ".concat(selector));
    }
    try {
      const possibleLabels = await languageProvider.fetchSeriesLabels(selector, { timeRange });
      if (selector !== buildSelector(this.state.labels)) {
        if (lastFacetted) {
          this.updateLabelState(lastFacetted, { loading: false });
        }
        return;
      }
      if (Object.keys(possibleLabels).length === 0) {
        this.setState({ error: "Empty results, no matching label for ".concat(selector) });
        return;
      }
      const labels = facetLabels(this.state.labels, possibleLabels, lastFacetted);
      this.setState({ labels, error: "" });
      if (lastFacetted) {
        this.updateLabelState(lastFacetted, { loading: false });
      }
    } catch (error) {
      console.error(error);
    }
  }
  async validateSelector(selector) {
    const { languageProvider, timeRange } = this.props;
    this.setState({ validationStatus: "Validating selector ".concat(selector), error: "" });
    const streams = await languageProvider.fetchSeries(selector, { timeRange });
    this.setState({ validationStatus: "Selector is valid (".concat(streams.length, " streams found)") });
  }
  render() {
    const { theme } = this.props;
    const { labels, searchTerm, status, error, validationStatus } = this.state;
    if (labels.length === 0) {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LoadingPlaceholder, { text: "Loading labels..." });
    }
    const styles = getStyles(theme);
    const selector = buildSelector(this.state.labels);
    const empty = selector === EMPTY_SELECTOR;
    let selectedLabels = labels.filter((label) => label.selected && label.values);
    if (searchTerm) {
      selectedLabels = selectedLabels.map((label) => {
        const searchResults = label.values.filter((value) => {
          if (value.selected) {
            value.highlightParts = void 0;
            return true;
          }
          const fuzzyMatchResult = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.fuzzyMatch)(value.name.toLowerCase(), searchTerm.toLowerCase());
          if (fuzzyMatchResult.found) {
            value.highlightParts = fuzzyMatchResult.ranges;
            value.order = fuzzyMatchResult.distance;
            return true;
          } else {
            return false;
          }
        });
        return {
          ...label,
          values: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.sortBy)(searchResults, (value) => value.selected ? -Infinity : value.order)
        };
      });
    } else {
      selectedLabels = this.state.labels.filter((label) => label.selected && label.values).map((label) => ({
        ...label,
        values: (label == null ? void 0 : label.values) ? label.values.map((value) => ({ ...value, highlightParts: void 0 })) : []
      }));
    }
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: styles.wrapper }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.section, styles.wrapperPadding) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Label, { description: "Which labels would you like to consider for your search?" }, "1. Select labels to search in"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: styles.list }, labels.map((label) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Label,
      {
        key: label.name,
        name: label.name,
        loading: label.loading,
        active: label.selected,
        hidden: label.hidden,
        facets: label.facets,
        onClick: this.onClickLabel
      }
    )))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.section, styles.wrapperPadding) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Label, { description: "Choose the label values that you would like to use for the query. Use the search field to find values across selected labels." }, "2. Find values for the selected labels"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
      {
        onChange: this.onChangeSearch,
        "aria-label": "Filter expression for values",
        value: searchTerm,
        placeholder: "Enter a label value"
      }
    )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: styles.valueListArea }, selectedLabels.map((label) => {
      var _a2, _b2;
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { role: "list", key: label.name, className: styles.valueListWrapper }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: styles.valueTitle, "aria-label": "Values for ".concat(label.name) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Label,
        {
          name: label.name,
          loading: label.loading,
          active: label.selected,
          hidden: label.hidden,
          facets: label.facets || ((_a2 = label.values) == null ? void 0 : _a2.length),
          onClick: this.onClickLabel
        }
      )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
        react_window__WEBPACK_IMPORTED_MODULE_10__.FixedSizeList,
        {
          height: 200,
          itemCount: ((_b2 = label.values) == null ? void 0 : _b2.length) || 0,
          itemSize: 28,
          itemKey: (i) => {
            var _a3, _b3;
            return (_b3 = (_a3 = label.values) == null ? void 0 : _a3[i].name) != null ? _b3 : i;
          },
          width: 200,
          className: styles.valueList
        },
        ({ index, style }) => {
          var _a3;
          const value = (_a3 = label.values) == null ? void 0 : _a3[index];
          if (!value) {
            return null;
          }
          return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { style }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Label,
            {
              name: label.name,
              value: value == null ? void 0 : value.name,
              active: value == null ? void 0 : value.selected,
              highlightParts: value == null ? void 0 : value.highlightParts,
              onClick: this.onClickValue,
              searchTerm
            }
          ));
        }
      ));
    })))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: styles.footerSectionStyles }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Label, null, "3. Resulting selector"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("pre", { "aria-label": "selector", className: styles.selector }, selector), validationStatus && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: styles.validationStatus }, validationStatus), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.status, (status || error) && styles.statusShowing) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", { className: error ? styles.error : "" }, error || status)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { gap: 1 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Button, { "aria-label": "Use selector as logs button", disabled: empty, onClick: this.onClickRunLogsQuery }, "Show logs"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Button,
      {
        "aria-label": "Use selector as metrics button",
        variant: "secondary",
        disabled: empty,
        onClick: this.onClickRunMetricsQuery
      },
      "Show logs rate"
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Button,
      {
        "aria-label": "Validate submit button",
        variant: "secondary",
        disabled: empty,
        onClick: this.onClickValidate
      },
      "Validate selector"
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Button, { "aria-label": "Selector clear button", variant: "secondary", onClick: this.onClickClear }, "Clear"))));
  }
}
const LokiLabelBrowser = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.withTheme2)(UnthemedLokiLabelBrowser);


/***/ }),

/***/ "./public/app/plugins/datasource/loki/components/LokiOptionFields.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_RESOLUTION: () => (/* binding */ DEFAULT_RESOLUTION),
/* harmony export */   LokiOptionFields: () => (/* binding */ LokiOptionFields),
/* harmony export */   RESOLUTION_OPTIONS: () => (/* binding */ RESOLUTION_OPTIONS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   preprocessMaxLines: () => (/* binding */ preprocessMaxLines),
/* harmony export */   queryTypeOptions: () => (/* binding */ queryTypeOptions)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/FormLabel/FormLabel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/queryUtils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/types.ts");







const queryTypeOptions = [
  { value: _types__WEBPACK_IMPORTED_MODULE_3__.LokiQueryType.Range, label: "Range", description: "Run query over a range of time." },
  {
    value: _types__WEBPACK_IMPORTED_MODULE_3__.LokiQueryType.Instant,
    label: "Instant",
    description: 'Run query against a single point in time. For this query, the "To" time is used.'
  }
];
if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.featureToggles.lokiExperimentalStreaming) {
  queryTypeOptions.push({
    value: _types__WEBPACK_IMPORTED_MODULE_3__.LokiQueryType.Stream,
    label: "Stream",
    description: "Run a query and keep sending results on an interval"
  });
}
const DEFAULT_RESOLUTION = {
  value: 1,
  label: "1/1"
};
const RESOLUTION_OPTIONS = [DEFAULT_RESOLUTION].concat(
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)([2, 3, 4, 5, 10], (value) => ({
    value,
    label: "1/" + value
  }))
);
function LokiOptionFields(props) {
  var _a;
  const { lineLimitValue, resolution, onRunQuery, runOnBlur, onChange } = props;
  const query = (_a = props.query) != null ? _a : {};
  const queryType = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_2__.getLokiQueryType)(query);
  function onChangeQueryLimit(value) {
    const nextQuery = { ...query, maxLines: preprocessMaxLines(value) };
    onChange(nextQuery);
  }
  function onQueryTypeChange(queryType2) {
    const { instant, range, ...rest } = query;
    onChange({ ...rest, queryType: queryType2 });
  }
  function onMaxLinesChange(e) {
    if (query.maxLines !== preprocessMaxLines(e.currentTarget.value)) {
      onChangeQueryLimit(e.currentTarget.value);
    }
  }
  function onReturnKeyDown(e) {
    if (e.key === "Enter") {
      onRunQuery();
    }
  }
  function onResolutionChange(option) {
    const nextQuery = { ...query, resolution: option.value };
    onChange(nextQuery);
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { alignItems: "flex-start", gap: 0.5, "aria-label": "Loki extra field" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { wrap: "nowrap", gap: 0, "data-testid": "queryTypeField", "aria-label": "Query type field" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineFormLabel, { width: "auto" }, "Query type"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.RadioButtonGroup,
    {
      options: queryTypeOptions,
      value: queryType,
      onChange: (type) => {
        onQueryTypeChange(type);
        if (runOnBlur) {
          onRunQuery();
        }
      }
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { wrap: "nowrap", gap: 0, "data-testid": "lineLimitField", "aria-label": "Line limit field" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineField, { label: "Line limit", tooltip: "Upper limit for number of log lines returned by query." }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
    {
      className: "width-4",
      placeholder: "auto",
      type: "number",
      min: 0,
      onChange: onMaxLinesChange,
      onKeyDown: onReturnKeyDown,
      value: lineLimitValue,
      onBlur: () => {
        if (runOnBlur) {
          onRunQuery();
        }
      }
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineField,
    {
      label: "Resolution",
      tooltip: "Resolution 1/1 sets step parameter of Loki metrics range queries such that each pixel corresponds to one data point. For better performance, lower resolutions can be picked. 1/2 only retrieves a data point for every other pixel, and 1/10 retrieves one data point per 10 pixels."
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Select,
      {
        isSearchable: false,
        onChange: onResolutionChange,
        options: RESOLUTION_OPTIONS,
        value: resolution,
        "aria-label": "Select resolution"
      }
    )
  )));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(LokiOptionFields));
function preprocessMaxLines(value) {
  const maxLines = parseInt(value, 10);
  if (isNaN(maxLines) || maxLines < 0) {
    return void 0;
  }
  return maxLines;
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/components/LokiQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LokiQueryEditor: () => (/* binding */ LokiQueryEditor),
/* harmony export */   lokiQueryEditorExplainKey: () => (/* binding */ lokiQueryEditorExplainKey),
/* harmony export */   testIds: () => (/* binding */ testIds)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/react-use/esm/usePrevious.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./packages/grafana-data/src/types/app.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/types.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/QueryEditor/EditorHeader.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/QueryHeaderSwitch.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/QueryEditor/FlexItem.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/QueryEditorModeToggle.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/QueryEditor/EditorRows.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Space.tsx");
/* harmony import */ var _querybuilder_components_LabelBrowserModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/components/LabelBrowserModal.tsx");
/* harmony import */ var _querybuilder_components_LokiQueryBuilderContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/components/LokiQueryBuilderContainer.tsx");
/* harmony import */ var _querybuilder_components_LokiQueryBuilderOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/components/LokiQueryBuilderOptions.tsx");
/* harmony import */ var _querybuilder_components_LokiQueryCodeEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/components/LokiQueryCodeEditor.tsx");
/* harmony import */ var _querybuilder_components_QueryPatternsModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/components/QueryPatternsModal.tsx");
/* harmony import */ var _querybuilder_parsing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/parsing.ts");
/* harmony import */ var _querybuilder_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/state.ts");
/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/loki/components/stats.ts");

















const testIds = {
  editor: "loki-editor"
};
const lokiQueryEditorExplainKey = "LokiQueryEditorExplainDefault";
const LokiQueryEditor = react__WEBPACK_IMPORTED_MODULE_1___default().memo((props) => {
  const id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
  const { onChange, onRunQuery, onAddQuery, data, app, queries, datasource, range: timeRange } = props;
  const [parseModalOpen, setParseModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [queryPatternsModalOpen, setQueryPatternsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [dataIsStale, setDataIsStale] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [labelBrowserVisible, setLabelBrowserVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [queryStats, setQueryStats] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [explain, setExplain] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(window.localStorage.getItem(lokiQueryEditorExplainKey) === "true");
  const predefinedOperations = datasource.predefinedOperations;
  const previousTimeRange = (0,react_use__WEBPACK_IMPORTED_MODULE_10__["default"])(timeRange);
  const query = (0,_querybuilder_state__WEBPACK_IMPORTED_MODULE_8__.getQueryWithDefaults)(props.query);
  if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_11__.config.featureToggles.lokiPredefinedOperations && !query.expr && predefinedOperations) {
    query.expr = "{} ".concat(predefinedOperations);
  }
  const previousQueryExpr = (0,react_use__WEBPACK_IMPORTED_MODULE_10__["default"])(query.expr);
  const previousQueryType = (0,react_use__WEBPACK_IMPORTED_MODULE_10__["default"])(query.queryType);
  const editorMode = query.editorMode;
  const onExplainChange = (event) => {
    window.localStorage.setItem(lokiQueryEditorExplainKey, event.currentTarget.checked ? "true" : "false");
    setExplain(event.currentTarget.checked);
  };
  const onEditorModeChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (newEditorMode) => {
      var _a;
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_12__.reportInteraction)("grafana_loki_editor_mode_clicked", {
        newEditor: newEditorMode,
        previousEditor: (_a = query.editorMode) != null ? _a : "",
        newQuery: !query.expr,
        app: app != null ? app : ""
      });
      if (newEditorMode === _grafana_experimental__WEBPACK_IMPORTED_MODULE_13__.QueryEditorMode.Builder) {
        const result = (0,_querybuilder_parsing__WEBPACK_IMPORTED_MODULE_7__.buildVisualQueryFromString)(query.expr || "");
        if (result.errors.length) {
          setParseModalOpen(true);
          return;
        }
      }
      (0,_querybuilder_state__WEBPACK_IMPORTED_MODULE_8__.changeEditorMode)(query, newEditorMode, onChange);
    },
    [onChange, query, app]
  );
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setDataIsStale(false);
  }, [data]);
  const onChangeInternal = (query2) => {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(query2, props.query)) {
      setDataIsStale(true);
    }
    onChange(query2);
  };
  const onClickLabelBrowserButton = () => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_12__.reportInteraction)("grafana_loki_label_browser_opened", {
      app
    });
    setLabelBrowserVisible((visible) => !visible);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const shouldUpdate = (0,_stats__WEBPACK_IMPORTED_MODULE_9__.shouldUpdateStats)(
      query.expr,
      previousQueryExpr,
      timeRange,
      previousTimeRange,
      query.queryType,
      previousQueryType
    );
    if (shouldUpdate && timeRange) {
      const makeAsyncRequest = async () => {
        const stats = await datasource.getStats({ ...query, refId: "".concat(id, "_").concat(query.refId) }, timeRange);
        setQueryStats(stats);
      };
      makeAsyncRequest();
    }
  }, [datasource, timeRange, previousTimeRange, query, previousQueryExpr, previousQueryType, setQueryStats, id]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.ConfirmModal,
    {
      isOpen: parseModalOpen,
      title: "Query parsing",
      body: "There were errors while trying to parse the query. Continuing to visual builder may lose some parts of the query.",
      confirmText: "Continue",
      onConfirm: () => {
        onChange({ ...query, editorMode: _grafana_experimental__WEBPACK_IMPORTED_MODULE_13__.QueryEditorMode.Builder });
        setParseModalOpen(false);
      },
      onDismiss: () => setParseModalOpen(false)
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _querybuilder_components_QueryPatternsModal__WEBPACK_IMPORTED_MODULE_6__.QueryPatternsModal,
    {
      isOpen: queryPatternsModalOpen,
      onClose: () => setQueryPatternsModalOpen(false),
      query,
      queries,
      app,
      onChange,
      onAddQuery
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _querybuilder_components_LabelBrowserModal__WEBPACK_IMPORTED_MODULE_2__.LabelBrowserModal,
    {
      isOpen: labelBrowserVisible,
      datasource,
      query,
      app,
      onClose: () => setLabelBrowserVisible(false),
      onChange: onChangeInternal,
      onRunQuery,
      timeRange
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_15__.EditorHeader, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.Stack, { gap: 1 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Button,
    {
      "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_18__.selectors.components.QueryBuilder.queryPatterns,
      variant: "secondary",
      size: "sm",
      onClick: () => {
        setQueryPatternsModalOpen((prevValue) => !prevValue);
        const visualQuery = (0,_querybuilder_parsing__WEBPACK_IMPORTED_MODULE_7__.buildVisualQueryFromString)(query.expr || "");
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_12__.reportInteraction)("grafana_loki_query_patterns_opened", {
          version: "v2",
          app: app != null ? app : "",
          editorMode: query.editorMode,
          preSelectedOperationsCount: visualQuery.query.operations.length,
          preSelectedLabelsCount: visualQuery.query.labels.length
        });
      }
    },
    "Kick start your query"
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Button, { variant: "secondary", size: "sm", onClick: onClickLabelBrowserButton, "data-testid": "label-browser-button" }, "Label browser")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_19__.QueryHeaderSwitch, { label: "Explain query", value: explain, onChange: onExplainChange }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_20__.FlexItem, { grow: 1 }), app !== _grafana_data__WEBPACK_IMPORTED_MODULE_21__.CoreApp.Explore && app !== _grafana_data__WEBPACK_IMPORTED_MODULE_21__.CoreApp.Correlations && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Button,
    {
      variant: dataIsStale ? "primary" : "secondary",
      size: "sm",
      onClick: onRunQuery,
      icon: (data == null ? void 0 : data.state) === _grafana_data__WEBPACK_IMPORTED_MODULE_22__.LoadingState.Loading ? "spinner" : void 0,
      disabled: (data == null ? void 0 : data.state) === _grafana_data__WEBPACK_IMPORTED_MODULE_22__.LoadingState.Loading
    },
    queries && queries.length > 1 ? "Run queries" : "Run query"
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_23__.QueryEditorModeToggle, { mode: editorMode, onChange: onEditorModeChange })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_24__.Space, { v: 0.5 }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_25__.EditorRows, null, editorMode === _grafana_experimental__WEBPACK_IMPORTED_MODULE_13__.QueryEditorMode.Code && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_querybuilder_components_LokiQueryCodeEditor__WEBPACK_IMPORTED_MODULE_5__.LokiQueryCodeEditor, { ...props, query, onChange: onChangeInternal, showExplain: explain }), editorMode === _grafana_experimental__WEBPACK_IMPORTED_MODULE_13__.QueryEditorMode.Builder && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _querybuilder_components_LokiQueryBuilderContainer__WEBPACK_IMPORTED_MODULE_3__.LokiQueryBuilderContainer,
    {
      datasource: props.datasource,
      query,
      onChange: onChangeInternal,
      onRunQuery: props.onRunQuery,
      showExplain: explain,
      timeRange
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _querybuilder_components_LokiQueryBuilderOptions__WEBPACK_IMPORTED_MODULE_4__.LokiQueryBuilderOptions,
    {
      query,
      onChange,
      onRunQuery,
      app,
      maxLines: datasource.maxLines,
      queryStats
    }
  )));
});
LokiQueryEditor.displayName = "LokiQueryEditor";


/***/ }),

/***/ "./public/app/plugins/datasource/loki/components/LokiQueryEditorByApp.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LokiQueryEditorByApp: () => (/* binding */ LokiQueryEditorByApp),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   testIds: () => (/* binding */ testIds)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/app.ts");
/* harmony import */ var _LokiQueryEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/components/LokiQueryEditor.tsx");
/* harmony import */ var _LokiQueryEditorForAlerting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/components/LokiQueryEditorForAlerting.tsx");





function LokiQueryEditorByApp(props) {
  const { app } = props;
  switch (app) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_3__.CoreApp.CloudAlerting:
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LokiQueryEditorForAlerting__WEBPACK_IMPORTED_MODULE_2__.LokiQueryEditorForAlerting, { ...props });
    default:
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LokiQueryEditor__WEBPACK_IMPORTED_MODULE_1__.LokiQueryEditor, { ...props });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(LokiQueryEditorByApp));
const testIds = {
  editor: "loki-editor"
};


/***/ }),

/***/ "./public/app/plugins/datasource/loki/components/LokiQueryEditorForAlerting.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LokiQueryEditorForAlerting: () => (/* binding */ LokiQueryEditorForAlerting),
/* harmony export */   testIds: () => (/* binding */ testIds)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LokiQueryField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/components/LokiQueryField.tsx");



function LokiQueryEditorForAlerting(props) {
  const { query, data, datasource, onChange, onRunQuery, history } = props;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _LokiQueryField__WEBPACK_IMPORTED_MODULE_1__.LokiQueryField,
    {
      datasource,
      query,
      onChange,
      onRunQuery,
      history,
      data,
      placeholder: "Enter a Loki query",
      "data-testid": testIds.editor
    }
  );
}
const testIds = {
  editor: "loki-editor-cloud-alerting"
};


/***/ }),

/***/ "./public/app/plugins/datasource/loki/components/LokiQueryField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LokiQueryField: () => (/* binding */ LokiQueryField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _languageUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/languageUtils.ts");
/* harmony import */ var _monaco_query_field_MonacoQueryFieldWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/components/monaco-query-field/MonacoQueryFieldWrapper.tsx");




class LokiQueryField extends (react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent) {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.onChangeQuery = (value, override) => {
      const { query, onChange, onRunQuery } = this.props;
      if (onChange) {
        const nextQuery = { ...query, expr: value };
        onChange(nextQuery);
        if (override && onRunQuery) {
          onRunQuery();
        }
      }
    };
    this.state = { labelsLoaded: false };
  }
  async componentDidMount() {
    this._isMounted = true;
    await this.props.datasource.languageProvider.start(this.props.range);
    if (this._isMounted) {
      this.setState({ labelsLoaded: true });
    }
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  componentDidUpdate(prevProps) {
    const {
      range,
      datasource: { languageProvider }
    } = this.props;
    const refreshLabels = (0,_languageUtils__WEBPACK_IMPORTED_MODULE_1__.shouldRefreshLabels)(range, prevProps.range);
    if (refreshLabels) {
      languageProvider.fetchLabels({ timeRange: range });
    }
  }
  render() {
    var _a, _b;
    const { ExtraFieldElement, query, datasource, history, onRunQuery, range } = this.props;
    const placeholder = (_a = this.props.placeholder) != null ? _a : "Enter a Loki query (run with Shift+Enter)";
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      "div",
      {
        className: "gf-form-inline gf-form-inline--xs-view-flex-column flex-grow-1",
        "data-testid": this.props["data-testid"]
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "gf-form--grow flex-shrink-1 min-width-15" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        _monaco_query_field_MonacoQueryFieldWrapper__WEBPACK_IMPORTED_MODULE_2__.MonacoQueryFieldWrapper,
        {
          datasource,
          history: history != null ? history : [],
          onChange: this.onChangeQuery,
          onRunQuery,
          initialValue: (_b = query.expr) != null ? _b : "",
          placeholder,
          timeRange: range
        }
      ))
    ), ExtraFieldElement);
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/components/VariableQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LokiVariableQueryEditor: () => (/* binding */ LokiVariableQueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/usePrevious.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _migrations_variableQueryMigrations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/migrations/variableQueryMigrations.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/types.ts");






const variableOptions = [
  { label: "Label names", value: _types__WEBPACK_IMPORTED_MODULE_2__.LokiVariableQueryType.LabelNames },
  { label: "Label values", value: _types__WEBPACK_IMPORTED_MODULE_2__.LokiVariableQueryType.LabelValues }
];
const refId = "LokiVariableQueryEditor-VariableQuery";
const LokiVariableQueryEditor = ({ onChange, query, datasource, range }) => {
  const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0);
  const [label, setLabel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [labelOptions, setLabelOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [stream, setStream] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const previousType = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(type);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!query) {
      return;
    }
    const variableQuery = typeof query === "string" ? (0,_migrations_variableQueryMigrations__WEBPACK_IMPORTED_MODULE_1__.migrateVariableQuery)(query) : query;
    setType(variableQuery.type);
    setLabel(variableQuery.label || "");
    setStream(variableQuery.stream || "");
  }, [query]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (type !== _types__WEBPACK_IMPORTED_MODULE_2__.LokiVariableQueryType.LabelValues || previousType === type) {
      return;
    }
    datasource.languageProvider.fetchLabels({ timeRange: range }).then((labelNames) => {
      setLabelOptions(labelNames.map((labelName) => ({ label: labelName, value: labelName })));
    });
  }, [datasource, type, range, previousType]);
  const onQueryTypeChange = (newType) => {
    setType(newType.value);
    if (newType.value !== void 0) {
      onChange({
        type: newType.value,
        label,
        stream,
        refId
      });
    }
  };
  const onLabelChange = (newLabel) => {
    setLabel(newLabel.value || "");
  };
  const onStreamChange = (e) => {
    setStream(e.currentTarget.value);
  };
  const handleBlur = () => {
    if (type !== void 0) {
      onChange({ type, label, stream, refId: "LokiVariableQueryEditor-VariableQuery" });
    }
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineField, { label: "Query type", labelWidth: 20 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Select,
    {
      "aria-label": "Query type",
      onChange: onQueryTypeChange,
      onBlur: handleBlur,
      value: type,
      options: variableOptions,
      width: 16
    }
  )), type === _types__WEBPACK_IMPORTED_MODULE_2__.LokiVariableQueryType.LabelValues && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineField, { label: "Label", labelWidth: 20 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Select,
    {
      "aria-label": "Label",
      onChange: onLabelChange,
      onBlur: handleBlur,
      value: { label, value: label },
      options: labelOptions,
      width: 16,
      allowCustomValue: true
    }
  )))), type === _types__WEBPACK_IMPORTED_MODULE_2__.LokiVariableQueryType.LabelValues && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineField,
    {
      label: "Stream selector",
      labelWidth: 20,
      grow: true,
      tooltip: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, 'Optional. If defined, a list of values for the specified log stream selector is returned. For example: {label="value"} or {label="$variable"}')
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Input,
      {
        type: "text",
        "aria-label": "Stream selector",
        placeholder: "Optional stream selector",
        value: stream,
        onChange: onStreamChange,
        onBlur: handleBlur
      }
    )
  )));
};


/***/ }),

/***/ "./public/app/plugins/datasource/loki/components/monaco-query-field/MonacoQueryFieldLazy.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonacoQueryFieldLazy: () => (/* binding */ MonacoQueryFieldLazy)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Field = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/* import() | loki-query-field */ "loki-query-field").then(__webpack_require__.bind(__webpack_require__, "./public/app/plugins/datasource/loki/components/monaco-query-field/MonacoQueryField.tsx")));
const MonacoQueryFieldLazy = (props) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: null }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, { ...props }));
};


/***/ }),

/***/ "./public/app/plugins/datasource/loki/components/monaco-query-field/MonacoQueryFieldWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonacoQueryFieldWrapper: () => (/* binding */ MonacoQueryFieldWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MonacoQueryFieldLazy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/components/monaco-query-field/MonacoQueryFieldLazy.tsx");



const MonacoQueryFieldWrapper = (props) => {
  const lastRunValueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const { onRunQuery, onChange, ...rest } = props;
  const handleRunQuery = (value) => {
    lastRunValueRef.current = value;
    onChange(value);
    onRunQuery();
  };
  const handleBlur = (value) => {
    onChange(value);
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MonacoQueryFieldLazy__WEBPACK_IMPORTED_MODULE_1__.MonacoQueryFieldLazy, { onRunQuery: handleRunQuery, onBlur: handleBlur, onChange, ...rest });
};


/***/ }),

/***/ "./public/app/plugins/datasource/loki/components/monaco-query-field/monaco-completion-provider/validation.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeHolderScopedVars: () => (/* binding */ placeHolderScopedVars),
/* harmony export */   validateQuery: () => (/* binding */ validateQuery)
/* harmony export */ });
/* harmony import */ var _querybuilder_parsingUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/parsingUtils.ts");


function validateQuery(query, interpolatedQuery, queryLines, parser) {
  if (!query) {
    return false;
  }
  const interpolatedErrors = parseQuery(interpolatedQuery, parser);
  if (!interpolatedErrors.length) {
    return false;
  }
  let parseErrors = interpolatedErrors;
  if (query !== interpolatedQuery) {
    const queryErrors = parseQuery(query, parser);
    parseErrors = interpolatedErrors.flatMap(
      (interpolatedError) => queryErrors.filter((queryError) => interpolatedError.text === queryError.text) || interpolatedError
    );
  }
  return parseErrors.map((parseError) => findErrorBoundary(query, queryLines, parseError)).filter(isErrorBoundary);
}
function parseQuery(query, parser) {
  const parseErrors = [];
  const tree = parser.parse(query);
  tree.iterate({
    enter: (nodeRef) => {
      if (nodeRef.type.id === _querybuilder_parsingUtils__WEBPACK_IMPORTED_MODULE_0__.ErrorId) {
        const node = nodeRef.node;
        parseErrors.push({
          node,
          text: query.substring(node.from, node.to)
        });
      }
    }
  });
  return parseErrors;
}
function findErrorBoundary(query, queryLines, parseError) {
  if (queryLines.length === 1) {
    const isEmptyString = parseError.node.from === parseError.node.to;
    const errorNode = isEmptyString && parseError.node.parent ? parseError.node.parent : parseError.node;
    const error = isEmptyString ? query.substring(errorNode.from, errorNode.to) : parseError.text;
    return {
      startLineNumber: 1,
      startColumn: errorNode.from + 1,
      endLineNumber: 1,
      endColumn: errorNode.to + 1,
      error
    };
  }
  let startPos = 0, endPos = 0;
  for (let line = 0; line < queryLines.length; line++) {
    endPos = startPos + queryLines[line].length;
    if (parseError.node.from > endPos) {
      startPos += queryLines[line].length + 1;
      continue;
    }
    return {
      startLineNumber: line + 1,
      startColumn: parseError.node.from - startPos + 1,
      endLineNumber: line + 1,
      endColumn: parseError.node.to - startPos + 1,
      error: parseError.text
    };
  }
  return null;
}
function isErrorBoundary(boundary) {
  return boundary !== null;
}
const placeHolderScopedVars = {
  __interval: { text: "1s", value: "1s" },
  __rate_interval: { text: "1s", value: "1s" },
  __auto: { text: "1s", value: "1s" },
  __interval_ms: { text: "1000", value: 1e3 },
  __range_ms: { text: "1000", value: 1e3 },
  __range_s: { text: "1", value: 1 },
  __range: { text: "1s", value: "1s" }
};


/***/ }),

/***/ "./public/app/plugins/datasource/loki/components/stats.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shouldUpdateStats: () => (/* binding */ shouldUpdateStats)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/datetime/moment_wrapper.ts");


function compareTime(time1, time2) {
  if (!time1 || !time2) {
    return false;
  }
  const isAbsolute = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.isDateTime)(time1);
  if (isAbsolute) {
    return time1.isSame(time2);
  }
  return time1 === time2;
}
function shouldUpdateStats(query, prevQuery, timeRange, prevTimeRange, queryType, prevQueryType) {
  if (prevQuery === void 0 || query.trim() !== prevQuery.trim() || queryType !== prevQueryType) {
    return true;
  }
  if (compareTime(timeRange == null ? void 0 : timeRange.raw.from, prevTimeRange == null ? void 0 : prevTimeRange.raw.from) && compareTime(timeRange == null ? void 0 : timeRange.raw.to, prevTimeRange == null ? void 0 : prevTimeRange.raw.to)) {
    return false;
  }
  return true;
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/configuration/AlertingSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertingSettings: () => (/* binding */ AlertingSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/ConfigEditor/ConfigSection/ConfigSubSection.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/ConfigEditor/ConfigSection/ConfigDescriptionLink.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");




function AlertingSettings({
  options,
  onOptionsChange
}) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.ConfigSubSection,
    {
      title: "Alerting",
      description: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.ConfigDescriptionLink,
        {
          description: "Manage alert rules for the Loki data source.",
          suffix: "loki/configure-loki-data-source/#alerting",
          feature: "alerting"
        }
      )
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField,
      {
        labelWidth: 29,
        label: "Manage alert rules in Alerting UI",
        disabled: options.readOnly,
        tooltip: "Manage alert rules for this data source. To manage other alerting resources, add an Alertmanager data source."
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineSwitch,
        {
          value: options.jsonData.manageAlerts !== false,
          onChange: (event) => onOptionsChange({
            ...options,
            jsonData: { ...options.jsonData, manageAlerts: event.currentTarget.checked }
          })
        }
      )
    )
  );
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/configuration/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigEditor: () => (/* binding */ ConfigEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/ConfigEditor/DataSourceDescription.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/ConfigEditor/Connection/ConnectionSettings.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/ConfigEditor/Auth/Auth.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/ConfigEditor/Auth/utils.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/ConfigEditor/ConfigSection/ConfigSection.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/ConfigEditor/AdvancedSettings/AdvancedHttpSettings.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Divider/Divider.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/DataSourceSettings/SecureSocksProxySettings.tsx");
/* harmony import */ var _AlertingSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/configuration/AlertingSettings.tsx");
/* harmony import */ var _DerivedFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/configuration/DerivedFields.tsx");
/* harmony import */ var _QuerySettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/configuration/QuerySettings.tsx");








const makeJsonUpdater = (field) => (options, value) => {
  return {
    ...options,
    jsonData: {
      ...options.jsonData,
      [field]: value
    }
  };
};
const setMaxLines = makeJsonUpdater("maxLines");
const setPredefinedOperations = makeJsonUpdater("predefinedOperations");
const setDerivedFields = makeJsonUpdater("derivedFields");
const ConfigEditor = (props) => {
  const { options, onOptionsChange } = props;
  const updatePredefinedOperations = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (value) => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)("grafana_loki_predefined_operations_changed", { value });
      onOptionsChange(setPredefinedOperations(options, value));
    },
    [options, onOptionsChange]
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_experimental__WEBPACK_IMPORTED_MODULE_5__.DataSourceDescription,
    {
      dataSourceName: "Loki",
      docsLink: "https://grafana.com/docs/grafana/latest/datasources/loki/configure-loki-data-source/",
      hasRequiredFields: false
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Divider, { spacing: 4 }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_7__.ConnectionSettings, { config: options, onChange: onOptionsChange, urlPlaceholder: "http://localhost:3100" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Divider, { spacing: 4 }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_experimental__WEBPACK_IMPORTED_MODULE_8__.Auth,
    {
      ...(0,_grafana_experimental__WEBPACK_IMPORTED_MODULE_9__.convertLegacyAuthProps)({
        config: options,
        onChange: onOptionsChange
      })
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Divider, { spacing: 4 }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_experimental__WEBPACK_IMPORTED_MODULE_10__.ConfigSection,
    {
      title: "Additional settings",
      description: "Additional settings are optional settings that can be configured for more control over your data source.",
      isCollapsible: true,
      isInitiallyOpen: true
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { gap: 5, direction: "column" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_12__.AdvancedHttpSettings, { config: options, onChange: onOptionsChange }), _grafana_runtime__WEBPACK_IMPORTED_MODULE_13__.config.secureSocksDSProxyEnabled && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.SecureSocksProxySettings, { options, onOptionsChange }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AlertingSettings__WEBPACK_IMPORTED_MODULE_1__.AlertingSettings, { options, onOptionsChange }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _QuerySettings__WEBPACK_IMPORTED_MODULE_3__.QuerySettings,
      {
        maxLines: options.jsonData.maxLines || "",
        onMaxLinedChange: (value) => onOptionsChange(setMaxLines(options, value)),
        predefinedOperations: options.jsonData.predefinedOperations || "",
        onPredefinedOperationsChange: updatePredefinedOperations
      }
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _DerivedFields__WEBPACK_IMPORTED_MODULE_2__.DerivedFields,
      {
        fields: options.jsonData.derivedFields,
        onChange: (value) => onOptionsChange(setDerivedFields(options, value))
      }
    ))
  ));
};


/***/ }),

/***/ "./public/app/plugins/datasource/loki/configuration/DebugSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DebugSection: () => (/* binding */ DebugSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/TextArea/TextArea.tsx");




const DebugSection = (props) => {
  const { derivedFields, className } = props;
  const [debugText, setDebugText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  let debugFields = [];
  if (debugText && derivedFields) {
    debugFields = makeDebugFields(derivedFields, debugText);
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, { label: "Debug log message", labelWidth: 24, grow: true }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.TextArea,
    {
      type: "text",
      "aria-label": "Loki query",
      placeholder: "Paste an example log line here to test the regular expressions of your derived fields",
      value: debugText,
      onChange: (event) => setDebugText(event.currentTarget.value)
    }
  )), !!debugFields.length && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DebugFields, { fields: debugFields }));
};
const DebugFields = ({ fields }) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", { className: "filter-table" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Name"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Value"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Url"))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, fields.map((field) => {
    let value = field.value;
    if (field.error && field.error instanceof Error) {
      value = field.error.message;
    } else if (field.href) {
      value = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: field.href }, value);
    }
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { key: "".concat(field.name, "=").concat(field.value) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, field.name), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, value), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, field.href ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: field.href }, field.href) : ""));
  })));
};
function makeDebugFields(derivedFields, debugText) {
  return derivedFields.filter((field) => field.name && field.matcherRegex).map((field) => {
    try {
      const testMatch = debugText.match(field.matcherRegex);
      let href;
      const value = testMatch && testMatch[1];
      if (value) {
        href = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getTemplateSrv)().replace(field.url, {
          __value: {
            value: {
              raw: value
            },
            text: "Raw value"
          }
        });
      }
      const debugFiled = {
        name: field.name,
        value: value || "<no match>",
        href
      };
      return debugFiled;
    } catch (error) {
      return {
        name: field.name,
        error
      };
    }
  });
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/configuration/DerivedField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DerivedField: () => (/* binding */ DerivedField)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/usePrevious.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-runtime/src/components/DataSourcePicker.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/DataLinks/DataLinkInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b, _c, _d, _e, _f, _g;





const getStyles = (theme) => ({
  row: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n    display: flex;\n    align-items: baseline;\n  "]))),
  nameField: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_b || (_b = __template(["\n    flex: 2;\n    margin-right: ", ";\n  "])), theme.spacing(0.5)),
  regexField: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_c || (_c = __template(["\n    flex: 3;\n    margin-right: ", ";\n  "])), theme.spacing(0.5)),
  urlField: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_d || (_d = __template(["\n    flex: 1;\n    margin-right: ", ";\n  "])), theme.spacing(0.5)),
  urlDisplayLabelField: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_e || (_e = __template(["\n    flex: 1;\n  "]))),
  internalLink: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_f || (_f = __template(["\n    margin-right: ", ";\n  "])), theme.spacing(1)),
  dataSource: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_g || (_g = __template([""]))),
  nameMatcherField: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    width: theme.spacing(20),
    marginRight: theme.spacing(0.5)
  })
});
const DerivedField = (props) => {
  var _a2;
  const { value, onChange, onDelete, suggestions, className, validateName } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const [showInternalLink, setShowInternalLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!!value.datasourceUid);
  const previousUid = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(value.datasourceUid);
  const [fieldType, setFieldType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_a2 = value.matcherType) != null ? _a2 : "regex");
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!previousUid && value.datasourceUid && !showInternalLink) {
      setShowInternalLink(true);
    }
    if (previousUid && !value.datasourceUid && showInternalLink) {
      setShowInternalLink(false);
    }
  }, [previousUid, value.datasourceUid, showInternalLink]);
  const handleChange = (field) => (event) => {
    onChange({
      ...value,
      [field]: event.currentTarget.value
    });
  };
  const invalidName = !validateName(value.name);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className, "data-testid": "derived-field" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "gf-form" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, { className: styles.nameField, label: "Name", invalid: invalidName, error: "The name is already in use" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input, { value: value.name, onChange: handleChange("name"), placeholder: "Field name", invalid: invalidName })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field,
    {
      className: styles.nameMatcherField,
      label: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
        TooltipLabel,
        {
          label: "Type",
          content: "Derived fields can be created from labels or by applying a regular expression to the log message."
        }
      )
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Select,
      {
        options: [
          { label: "Regex in log line", value: "regex" },
          { label: "Label", value: "label" }
        ],
        value: fieldType,
        onChange: (type) => {
          if (type.value === "label" || type.value === "regex") {
            setFieldType(type.value);
            onChange({
              ...value,
              matcherType: type.value
            });
          }
        }
      }
    )
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field,
    {
      className: styles.regexField,
      label: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, fieldType === "regex" && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
        TooltipLabel,
        {
          label: "Regex",
          content: "Use to parse and capture some part of the log message. You can use the captured groups in the template."
        }
      ), fieldType === "label" && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(TooltipLabel, { label: "Label", content: "Use to derive the field from a label." }))
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input, { value: value.matcherRegex, onChange: handleChange("matcherRegex") })
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, { label: "" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button,
    {
      variant: "destructive",
      title: "Remove field",
      icon: "times",
      onClick: (event) => {
        event.preventDefault();
        onDelete();
      }
    }
  ))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "gf-form" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, { label: showInternalLink ? "Query" : "URL", className: styles.urlField }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.DataLinkInput,
    {
      placeholder: showInternalLink ? "${__value.raw}" : "http://example.com/${__value.raw}",
      value: value.url || "",
      onChange: (newValue) => onChange({
        ...value,
        url: newValue
      }),
      suggestions
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field,
    {
      className: styles.urlDisplayLabelField,
      label: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
        TooltipLabel,
        {
          label: "URL Label",
          content: "Use to override the button label when this derived field is found in a log."
        }
      )
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input, { value: value.urlDisplayLabel, onChange: handleChange("urlDisplayLabel") })
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "gf-form" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, { label: "Internal link", className: styles.internalLink }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Switch,
    {
      value: showInternalLink,
      onChange: (e) => {
        const { checked } = e.currentTarget;
        if (!checked) {
          onChange({
            ...value,
            datasourceUid: void 0
          });
        }
        setShowInternalLink(checked);
      }
    }
  )), showInternalLink && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, { label: "", className: styles.dataSource }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_10__.DataSourcePicker,
    {
      tracing: true,
      onChange: (ds) => onChange({
        ...value,
        datasourceUid: ds.uid
      }),
      current: value.datasourceUid,
      noDefault: true
    }
  ))));
};
const TooltipLabel = ({ content, label }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Label, null, label, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Tooltip, { placement: "top", content, theme: "info" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Icon, { tabIndex: 0, name: "info-circle", size: "sm", style: { marginLeft: "10px" } })));


/***/ }),

/***/ "./public/app/plugins/datasource/loki/configuration/DerivedFields.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DerivedFields: () => (/* binding */ DerivedFields)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/utils/dataLinks.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/types/dataLink.ts");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/ConfigEditor/ConfigSection/ConfigSubSection.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/ConfigEditor/ConfigSection/ConfigDescriptionLink.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _DebugSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/configuration/DebugSection.tsx");
/* harmony import */ var _DerivedField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/configuration/DerivedField.tsx");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b, _c, _d, _e;







const getStyles = (theme) => ({
  addButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n    margin-right: 10px;\n  "]))),
  derivedField: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_b || (_b = __template(["\n    margin-bottom: ", ";\n  "])), theme.spacing(1)),
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_c || (_c = __template(["\n    margin-bottom: ", ";\n  "])), theme.spacing(4)),
  debugSection: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_d || (_d = __template(["\n    margin-top: ", ";\n  "])), theme.spacing(4))
});
const DerivedFields = ({ fields = [], onChange }) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useTheme2)();
  const styles = getStyles(theme);
  const [showDebug, setShowDebug] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const validateName = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (name) => {
      return fields.filter((field) => field.name && field.name === name).length <= 1;
    },
    [fields]
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_experimental__WEBPACK_IMPORTED_MODULE_5__.ConfigSubSection,
    {
      title: "Derived fields",
      description: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
        _grafana_experimental__WEBPACK_IMPORTED_MODULE_6__.ConfigDescriptionLink,
        {
          description: "Derived fields can be used to extract new fields from a log message and create a link from its value.",
          suffix: "loki/configure-loki-data-source/#derived-fields",
          feature: "derived fields"
        }
      )
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.container }, fields.map((field, index) => {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
        _DerivedField__WEBPACK_IMPORTED_MODULE_3__.DerivedField,
        {
          className: styles.derivedField,
          key: index,
          value: field,
          onChange: (newField) => {
            const newDerivedFields = [...fields];
            newDerivedFields.splice(index, 1, newField);
            onChange(newDerivedFields);
          },
          onDelete: () => {
            const newDerivedFields = [...fields];
            newDerivedFields.splice(index, 1);
            onChange(newDerivedFields);
          },
          validateName,
          suggestions: [
            {
              value: _grafana_data__WEBPACK_IMPORTED_MODULE_7__.DataLinkBuiltInVars.valueRaw,
              label: "Raw value",
              documentation: "Exact string captured by the regular expression",
              origin: _grafana_data__WEBPACK_IMPORTED_MODULE_8__.VariableOrigin.Value
            }
          ]
        }
      );
    }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Button,
      {
        variant: "secondary",
        className: styles.addButton,
        icon: "plus",
        onClick: (event) => {
          event.preventDefault();
          const emptyConfig = {
            name: "",
            matcherRegex: "",
            urlDisplayLabel: "",
            url: "",
            matcherType: "regex"
          };
          const newDerivedFields = [...fields, emptyConfig];
          onChange(newDerivedFields);
        }
      },
      "Add"
    ), fields.length > 0 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Button, { variant: "secondary", type: "button", onClick: () => setShowDebug(!showDebug) }, showDebug ? "Hide example log message" : "Show example log message")), showDebug && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.debugSection }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _DebugSection__WEBPACK_IMPORTED_MODULE_2__.DebugSection,
      {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_e || (_e = __template(["\n                margin-bottom: 10px;\n              "]))),
        derivedFields: fields
      }
    )))
  );
};


/***/ }),

/***/ "./public/app/plugins/datasource/loki/configuration/QuerySettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuerySettings: () => (/* binding */ QuerySettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/ConfigEditor/ConfigSection/ConfigSubSection.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/ConfigEditor/ConfigSection/ConfigDescriptionLink.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");





const QuerySettings = (props) => {
  const { maxLines, onMaxLinedChange, predefinedOperations, onPredefinedOperationsChange } = props;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.ConfigSubSection,
    {
      title: "Queries",
      description: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.ConfigDescriptionLink,
        {
          description: "Additional options to customize your querying experience.",
          suffix: "loki/configure-loki-data-source/#queries",
          feature: "query settings"
        }
      )
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField,
      {
        label: "Maximum lines",
        htmlFor: "loki_config_maxLines",
        labelWidth: 22,
        tooltip: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "Loki queries must contain a limit of the maximum number of lines returned (default: 1000). Increase this limit to have a bigger result set for ad-hoc analysis. Decrease this limit if your browser becomes sluggish when displaying the log results.")
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input,
        {
          type: "number",
          id: "loki_config_maxLines",
          value: maxLines,
          onChange: (event) => onMaxLinedChange(event.currentTarget.value),
          width: 16,
          placeholder: "1000",
          spellCheck: false
        }
      )
    ),
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.featureToggles.lokiPredefinedOperations && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineFieldRow, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField,
      {
        label: "Predefined operations",
        htmlFor: "loki_config_predefinedOperations",
        labelWidth: 22,
        tooltip: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, 'Predefined operations are used as an initial state for your queries. They are useful, if you want to unpack, parse or format all log lines. Currently we support only log operations starting with |. For example: | unpack | line_format "{{.message}}".')
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input,
        {
          type: "string",
          id: "loki_config_predefinedOperations",
          value: predefinedOperations,
          onChange: (event) => onPredefinedOperationsChange(event.currentTarget.value),
          width: 40,
          placeholder: "| unpack | line_format",
          spellCheck: false
        }
      )
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Badge,
      {
        text: "Experimental",
        color: "orange",
        icon: "exclamation-triangle",
        tooltip: "Predefined operations is an experimental feature that may change in the future."
      }
    )))
  );
};


/***/ }),

/***/ "./public/app/plugins/datasource/loki/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_MAX_LINES: () => (/* binding */ DEFAULT_MAX_LINES),
/* harmony export */   DEFAULT_MAX_LINES_SAMPLE: () => (/* binding */ DEFAULT_MAX_LINES_SAMPLE),
/* harmony export */   LOKI_ENDPOINT: () => (/* binding */ LOKI_ENDPOINT),
/* harmony export */   LokiDatasource: () => (/* binding */ LokiDatasource),
/* harmony export */   REF_ID_DATA_SAMPLES: () => (/* binding */ REF_ID_DATA_SAMPLES),
/* harmony export */   REF_ID_STARTER_ANNOTATION: () => (/* binding */ REF_ID_STARTER_ANNOTATION),
/* harmony export */   REF_ID_STARTER_LOG_ROW_CONTEXT: () => (/* binding */ REF_ID_STARTER_LOG_ROW_CONTEXT),
/* harmony export */   REF_ID_STARTER_LOG_SAMPLE: () => (/* binding */ REF_ID_STARTER_LOG_SAMPLE),
/* harmony export */   REF_ID_STARTER_LOG_VOLUME: () => (/* binding */ REF_ID_STARTER_LOG_VOLUME),
/* harmony export */   REF_ID_STARTER_STATS: () => (/* binding */ REF_ID_STARTER_STATS),
/* harmony export */   lokiRegularEscape: () => (/* binding */ lokiRegularEscape),
/* harmony export */   lokiSpecialRegexEscape: () => (/* binding */ lokiSpecialRegexEscape),
/* harmony export */   makeRequest: () => (/* binding */ makeRequest)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/throwError.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/merge.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./packages/grafana-data/src/datetime/rangeutil.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./packages/grafana-data/src/types/logs.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./packages/grafana-data/src/utils/url.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./packages/grafana-data/src/types/app.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("./packages/grafana-data/src/dataframe/DataFrameView.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("./packages/grafana-data/src/utils/legend.ts");
/* harmony import */ var _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/lezer-logql/index.es.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./packages/grafana-runtime/src/utils/DataSourceWithBackend.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _LanguageProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/LanguageProvider.ts");
/* harmony import */ var _LiveStreams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/LiveStreams.ts");
/* harmony import */ var _LogContextProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/loki/LogContextProvider.ts");
/* harmony import */ var _LokiVariableSupport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/loki/LokiVariableSupport.ts");
/* harmony import */ var _backendResultTransformer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/loki/backendResultTransformer.ts");
/* harmony import */ var _components_AnnotationsQueryEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/loki/components/AnnotationsQueryEditor.tsx");
/* harmony import */ var _components_monaco_query_field_monaco_completion_provider_validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/loki/components/monaco-query-field/monaco-completion-provider/validation.ts");
/* harmony import */ var _languageUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/loki/languageUtils.ts");
/* harmony import */ var _migrations_variableQueryMigrations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/loki/migrations/variableQueryMigrations.ts");
/* harmony import */ var _modifyQuery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/loki/modifyQuery.ts");
/* harmony import */ var _queryHints__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/loki/queryHints.ts");
/* harmony import */ var _querySplitting__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/loki/querySplitting.ts");
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/loki/queryUtils.ts");
/* harmony import */ var _querybuilder_parsingUtils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/parsingUtils.ts");
/* harmony import */ var _streaming__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/datasource/loki/streaming.ts");
/* harmony import */ var _tracking__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/plugins/datasource/loki/tracking.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/plugins/datasource/loki/types.ts");
























const DEFAULT_MAX_LINES = 1e3;
const DEFAULT_MAX_LINES_SAMPLE = 10;
const LOKI_ENDPOINT = "/loki/api/v1";
const REF_ID_DATA_SAMPLES = "loki-data-samples";
const REF_ID_STARTER_ANNOTATION = "annotation-";
const REF_ID_STARTER_LOG_ROW_CONTEXT = "log-row-context-query-";
const REF_ID_STARTER_LOG_VOLUME = "log-volume-";
const REF_ID_STARTER_LOG_SAMPLE = "log-sample-";
const REF_ID_STARTER_STATS = "log-stats-";
const NS_IN_MS = 1e6;
function makeRequest(query, range, app, requestId, hideFromInspector) {
  const intervalInfo = _grafana_data__WEBPACK_IMPORTED_MODULE_19__.calculateInterval(range, 1);
  return {
    targets: [query],
    requestId,
    interval: intervalInfo.interval,
    intervalMs: intervalInfo.intervalMs,
    range,
    scopedVars: {},
    timezone: "UTC",
    app,
    startTime: Date.now(),
    hideFromInspector
  };
}
class LokiDatasource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_20__.DataSourceWithBackend {
  constructor(instanceSettings, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_21__.getTemplateSrv)()) {
    var _a, _b;
    super(instanceSettings);
    this.instanceSettings = instanceSettings;
    this.templateSrv = templateSrv;
    this.streams = new _LiveStreams__WEBPACK_IMPORTED_MODULE_3__.LiveStreams();
    /**
     * Runs live queries, which involves creating a WebSocket connection to listen for new logs.
     * It returns a slightly different DataQueryResponse compared to runQueries. It provides a single DataFrame
     * even if there are multiple Loki streams. Common labels are set on dataFrame.labels, and unique labels per row are
     * available in dataFrame.fields.labels.
     * @returns An Observable of DataQueryResponse with streaming data or an error message if live tailing encounters an issue.
     */
    this.runLiveQuery = (target, maxDataPoints) => {
      const liveTarget = this.createLiveTarget(target, maxDataPoints);
      return this.streams.getStream(liveTarget).pipe(
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)((data) => ({
          data: data || [],
          key: "loki-".concat(liveTarget.refId),
          state: _grafana_data__WEBPACK_IMPORTED_MODULE_23__.LoadingState.Streaming
        })),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.catchError)((err) => {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.throwError)(() => "Live tailing was stopped due to following error: ".concat(err.reason));
        })
      );
    };
    /**
     * Part of `DataSourceWithLogsContextSupport`, used to retrieve log context for a log row.
     * @returns A promise that resolves to an object containing the log context data as DataFrames.
     */
    this.getLogRowContext = async (row, options, origQuery) => {
      return await this.logContextProvider.getLogRowContext(row, options, (0,_queryUtils__WEBPACK_IMPORTED_MODULE_14__.getLokiQueryFromDataQuery)(origQuery));
    };
    /**
     * Part of `DataSourceWithLogsContextSupport`, used to retrieve the log context query for the provided log row and original query.
     * @returns A promise that resolves to a DataQuery representing the log context query.
     */
    this.getLogRowContextQuery = async (row, options, origQuery, cacheFilters) => {
      return await this.logContextProvider.getLogRowContextQuery(
        row,
        options,
        (0,_queryUtils__WEBPACK_IMPORTED_MODULE_14__.getLokiQueryFromDataQuery)(origQuery),
        cacheFilters
      );
    };
    this.languageProvider = new _LanguageProvider__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    const settingsData = instanceSettings.jsonData || {};
    this.maxLines = parseInt((_a = settingsData.maxLines) != null ? _a : "0", 10) || DEFAULT_MAX_LINES;
    this.predefinedOperations = (_b = settingsData.predefinedOperations) != null ? _b : "";
    this.annotations = {
      QueryEditor: _components_AnnotationsQueryEditor__WEBPACK_IMPORTED_MODULE_7__.LokiAnnotationsQueryEditor
    };
    this.variables = new _LokiVariableSupport__WEBPACK_IMPORTED_MODULE_5__.LokiVariableSupport(this);
    this.logContextProvider = new _LogContextProvider__WEBPACK_IMPORTED_MODULE_4__.LogContextProvider(this);
  }
  /**
   * Implemented for DataSourceWithSupplementaryQueriesSupport.
   * It generates a DataQueryRequest for a specific supplementary query type.
   * @returns A DataQueryRequest for the supplementary queries or undefined if not supported.
   */
  getSupplementaryRequest(type, request, options) {
    switch (type) {
      case _grafana_data__WEBPACK_IMPORTED_MODULE_26__.SupplementaryQueryType.LogsVolume:
        const logsVolumeOption = (options == null ? void 0 : options.type) === _grafana_data__WEBPACK_IMPORTED_MODULE_26__.SupplementaryQueryType.LogsVolume ? options : { type };
        return this.getLogsVolumeDataProvider(request, logsVolumeOption);
      case _grafana_data__WEBPACK_IMPORTED_MODULE_26__.SupplementaryQueryType.LogsSample:
        const logsSampleOption = (options == null ? void 0 : options.type) === _grafana_data__WEBPACK_IMPORTED_MODULE_26__.SupplementaryQueryType.LogsSample ? options : { type };
        return this.getLogsSampleDataProvider(request, logsSampleOption);
      default:
        return void 0;
    }
  }
  /**
   * Implemented for DataSourceWithSupplementaryQueriesSupport.
   * It returns the supplementary types that the data source supports.
   * @returns An array of supported supplementary query types.
   */
  getSupportedSupplementaryQueryTypes() {
    return [_grafana_data__WEBPACK_IMPORTED_MODULE_26__.SupplementaryQueryType.LogsVolume, _grafana_data__WEBPACK_IMPORTED_MODULE_26__.SupplementaryQueryType.LogsSample];
  }
  /**
   * Implemented for DataSourceWithSupplementaryQueriesSupport.
   * It retrieves supplementary queries based on the provided options and Loki query.
   * @returns A supplemented Loki query or undefined if unsupported.
   */
  getSupplementaryQuery(options, query) {
    const normalizedQuery = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_14__.getNormalizedLokiQuery)(query);
    let expr = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_11__.removeCommentsFromQuery)(normalizedQuery.expr);
    let isQuerySuitable = false;
    switch (options.type) {
      case _grafana_data__WEBPACK_IMPORTED_MODULE_26__.SupplementaryQueryType.LogsVolume:
        isQuerySuitable = !!(expr && (0,_queryUtils__WEBPACK_IMPORTED_MODULE_14__.isLogsQuery)(expr) && normalizedQuery.queryType === _types__WEBPACK_IMPORTED_MODULE_18__.LokiQueryType.Range);
        if (!isQuerySuitable) {
          return void 0;
        }
        const dropErrorExpression = "".concat(expr, " | drop __error__");
        const field = options.field || "level";
        if ((0,_queryUtils__WEBPACK_IMPORTED_MODULE_14__.isQueryWithError)(this.interpolateString(dropErrorExpression, _components_monaco_query_field_monaco_completion_provider_validation__WEBPACK_IMPORTED_MODULE_8__.placeHolderScopedVars)) === false) {
          expr = dropErrorExpression;
        }
        return {
          ...normalizedQuery,
          refId: "".concat(REF_ID_STARTER_LOG_VOLUME).concat(normalizedQuery.refId),
          queryType: _types__WEBPACK_IMPORTED_MODULE_18__.LokiQueryType.Range,
          supportingQueryType: _types__WEBPACK_IMPORTED_MODULE_18__.SupportingQueryType.LogsVolume,
          expr: "sum by (".concat(field, ") (count_over_time(").concat(expr, "[$__auto]))"),
          legendFormat: "{{ ".concat(field, " }}")
        };
      case _grafana_data__WEBPACK_IMPORTED_MODULE_26__.SupplementaryQueryType.LogsSample:
        isQuerySuitable = !!(expr && !(0,_queryUtils__WEBPACK_IMPORTED_MODULE_14__.isLogsQuery)(expr));
        if (!isQuerySuitable) {
          return void 0;
        }
        return {
          ...normalizedQuery,
          queryType: _types__WEBPACK_IMPORTED_MODULE_18__.LokiQueryType.Range,
          refId: "".concat(REF_ID_STARTER_LOG_SAMPLE).concat(normalizedQuery.refId),
          expr: (0,_queryUtils__WEBPACK_IMPORTED_MODULE_14__.getLogQueryFromMetricsQuery)(expr),
          maxLines: Number.isNaN(Number(options.limit)) ? this.maxLines : Number(options.limit)
        };
      default:
        return void 0;
    }
  }
  /**
   * Private method used in the `getDataProvider` for DataSourceWithSupplementaryQueriesSupport, specifically for Logs volume queries.
   * @returns An Observable of DataQueryResponse or undefined if no suitable queries are found.
   */
  getLogsVolumeDataProvider(request, options) {
    const logsVolumeRequest = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(request);
    const targets = logsVolumeRequest.targets.map((query) => this.getSupplementaryQuery(options, query)).filter((query) => !!query);
    if (!targets.length) {
      return void 0;
    }
    return { ...logsVolumeRequest, targets };
  }
  /**
   * Private method used in the `getDataProvider` for DataSourceWithSupplementaryQueriesSupport, specifically for Logs sample queries.
   * @returns An Observable of DataQueryResponse or undefined if no suitable queries are found.
   */
  getLogsSampleDataProvider(request, options) {
    const logsSampleRequest = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(request);
    const targets = logsSampleRequest.targets.map((query) => this.getSupplementaryQuery({ type: _grafana_data__WEBPACK_IMPORTED_MODULE_26__.SupplementaryQueryType.LogsSample, limit: 100 }, query)).filter((query) => !!query);
    if (!targets.length) {
      return void 0;
    }
    return { ...logsSampleRequest, targets };
  }
  /**
   * Required by DataSourceApi. It executes queries based on the provided DataQueryRequest.
   * @returns An Observable of DataQueryResponse containing the query results.
   */
  query(request) {
    var _a;
    const queries = request.targets.map(_queryUtils__WEBPACK_IMPORTED_MODULE_14__.getNormalizedLokiQuery).map((q) => {
      var _a2;
      return { ...q, maxLines: (_a2 = q.maxLines) != null ? _a2 : this.maxLines };
    });
    const fixedRequest = {
      ...request,
      targets: queries
    };
    const streamQueries = fixedRequest.targets.filter((q) => q.queryType === _types__WEBPACK_IMPORTED_MODULE_18__.LokiQueryType.Stream);
    if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_27__.config.featureToggles.lokiExperimentalStreaming && streamQueries.length > 0 && ((_a = fixedRequest.rangeRaw) == null ? void 0 : _a.to) === "now") {
      const streamRequest = {
        ...fixedRequest,
        targets: streamQueries
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_28__.merge)(
        ...streamQueries.map(
          (q) => (0,_streaming__WEBPACK_IMPORTED_MODULE_16__.doLokiChannelStream)(
            this.applyTemplateVariables(q, request.scopedVars, request.filters),
            this,
            // the datasource
            streamRequest
          )
        )
      );
    }
    if (fixedRequest.liveStreaming) {
      return this.runLiveQueryThroughBackend(fixedRequest);
    }
    if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_27__.config.featureToggles.lokiQuerySplitting && (0,_queryUtils__WEBPACK_IMPORTED_MODULE_14__.requestSupportsSplitting)(fixedRequest.targets)) {
      return (0,_querySplitting__WEBPACK_IMPORTED_MODULE_13__.runSplitQuery)(this, fixedRequest);
    }
    const startTime = /* @__PURE__ */ new Date();
    return this.runQuery(fixedRequest).pipe(
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.tap)(
        (response) => (0,_tracking__WEBPACK_IMPORTED_MODULE_17__.trackQuery)(response, fixedRequest, startTime, { predefinedOperations: this.predefinedOperations })
      )
    );
  }
  /**
   * Executes requests through the backend using the `super.query()`, as part of the `query` method in DataSourceWithBackend.
   * @returns An Observable of transformed DataQueryResponse results from the backend.
   */
  runQuery(fixedRequest) {
    return super.query(fixedRequest).pipe(
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(
        (response) => {
          var _a;
          return (0,_backendResultTransformer__WEBPACK_IMPORTED_MODULE_6__.transformBackendResult)(response, fixedRequest.targets, (_a = this.instanceSettings.jsonData.derivedFields) != null ? _a : []);
        }
      )
    );
  }
  /**
   * Used within the `query` to execute live queries.
   * It is intended for logs-queries, not metric queries.
   * @returns An Observable of DataQueryResponse with live query results or an empty response if no suitable queries are found.
   * @todo: The name says "backend" but it's actually running the query through the frontend. We should fix this.
   */
  runLiveQueryThroughBackend(request) {
    const logsQueries = request.targets.filter((query) => query.expr !== "" && (0,_queryUtils__WEBPACK_IMPORTED_MODULE_14__.isLogsQuery)(query.expr));
    if (logsQueries.length === 0) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.of)({
        data: [],
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_23__.LoadingState.Done
      });
    }
    const subQueries = logsQueries.map((query) => {
      const interpolatedQuery = this.applyTemplateVariables(query, request.scopedVars, request.filters);
      const maxDataPoints = interpolatedQuery.maxLines || this.maxLines;
      return this.runLiveQuery(interpolatedQuery, maxDataPoints);
    });
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_28__.merge)(...subQueries);
  }
  /**
   * Used within the `runLiveQuery` to create a live target for a Loki query.
   * @returns A LokiLiveTarget object containing the necessary information for a live query.
   */
  createLiveTarget(target, maxDataPoints) {
    const query = target.expr;
    const baseUrl = this.instanceSettings.url;
    const params = _grafana_data__WEBPACK_IMPORTED_MODULE_31__.urlUtil.serializeParams({ query });
    return {
      query,
      url: (0,_streaming__WEBPACK_IMPORTED_MODULE_16__.convertToWebSocketUrl)("".concat(baseUrl, "/loki/api/v1/tail?").concat(params)),
      refId: target.refId,
      size: maxDataPoints
    };
  }
  /**
   * Implemented as a part of DataSourceApi. Interpolates variables and adds ad hoc filters to a list of Loki queries.
   * @returns An array of expanded Loki queries with interpolated variables and ad hoc filters.
   */
  interpolateVariablesInQueries(queries, scopedVars, adhocFilters) {
    let expandedQueries = queries;
    if (queries && queries.length) {
      expandedQueries = queries.map((query) => ({
        ...query,
        datasource: this.getRef(),
        expr: this.addAdHocFilters(
          this.templateSrv.replace(query.expr, scopedVars, this.interpolateQueryExpr),
          adhocFilters
        )
      }));
    }
    return expandedQueries;
  }
  /**
   * Implemented as part of DataSourceApi. Converts a Loki query to a simple text string.
   * Used, for example, in Query history.
   * @returns A text representation of the query.
   */
  getQueryDisplayText(query) {
    return query.expr;
  }
  /**
   * Given a time range, returns it as Loki parameters.
   * @returns An object containing the start and end times in nanoseconds since the Unix epoch.
   */
  getTimeRangeParams(timeRange) {
    return { start: timeRange.from.valueOf() * NS_IN_MS, end: timeRange.to.valueOf() * NS_IN_MS };
  }
  /**
   * Implemented as part of DataSourceWithQueryImportSupport.
   * Imports queries from AbstractQuery objects when switching between different data source types.
   * @returns A Promise that resolves to an array of Loki queries.
   */
  async importFromAbstractQueries(abstractQueries) {
    await this.languageProvider.start();
    const existingKeys = this.languageProvider.labelKeys;
    if (existingKeys && existingKeys.length) {
      abstractQueries = abstractQueries.map((abstractQuery) => {
        abstractQuery.labelMatchers = abstractQuery.labelMatchers.filter((labelMatcher) => {
          return existingKeys.includes(labelMatcher.name);
        });
        return abstractQuery;
      });
    }
    return abstractQueries.map((abstractQuery) => this.languageProvider.importFromAbstractQuery(abstractQuery));
  }
  /**
   * Implemented as part of DataSourceWithQueryImportSupport.
   * Exports Loki queries to AbstractQuery objects when switching between different data source types.
   * @returns A Promise that resolves to an array of AbstractQuery objects.
   */
  async exportToAbstractQueries(queries) {
    return queries.map((query) => this.languageProvider.exportToAbstractQuery(query));
  }
  /**
   * A method that wraps `getResource` from DataSourceWithBackend to perform metadata requests, with an additional check for valid URL values.
   * @returns A Promise that resolves to the data retrieved from the metadata request, or an empty array if no data is available.
   */
  async metadataRequest(url, params, options) {
    if (url.startsWith("/")) {
      throw new Error("invalid metadata request url: ".concat(url));
    }
    const res = await this.getResource(url, params, options);
    return res.data || [];
  }
  /**
   * Used in `getQueryStats`. It wraps `getResource` from DataSourceWithBackend to perform a stats request
   * Specifically designed for the stats endpoint, which does not return data but includes stats directly in the response object.
   * @returns A Promise that resolves to a QueryStats object containing the statistics retrieved from the stats request.
   */
  async statsMetadataRequest(url, params, options) {
    if (url.startsWith("/")) {
      throw new Error("invalid metadata request url: ".concat(url));
    }
    return await this.getResource(url, params, options);
  }
  /**
   * Used in `getStats`. Retrieves statistics for a Loki query and processes them into a QueryStats object.
   * @returns A Promise that resolves to a QueryStats object containing the query statistics or undefined if the query is invalid.
   */
  async getQueryStats(query, timeRange) {
    if ((0,_queryUtils__WEBPACK_IMPORTED_MODULE_14__.isQueryWithError)(this.interpolateString(query.expr, _components_monaco_query_field_monaco_completion_provider_validation__WEBPACK_IMPORTED_MODULE_8__.placeHolderScopedVars))) {
      return void 0;
    }
    const labelMatchers = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_14__.getStreamSelectorsFromQuery)(query.expr);
    let statsForAll = { streams: 0, chunks: 0, bytes: 0, entries: 0 };
    for (const idx in labelMatchers) {
      const { start, end } = this.getStatsTimeRange(query, Number(idx), timeRange);
      if (start === void 0 || end === void 0) {
        return { streams: 0, chunks: 0, bytes: 0, entries: 0, message: "Query size estimate not available." };
      }
      try {
        const data = await this.statsMetadataRequest(
          "index/stats",
          {
            query: labelMatchers[idx],
            start,
            end
          },
          { showErrorAlert: false, requestId: "".concat(REF_ID_STARTER_STATS).concat(query.refId) }
        );
        statsForAll = {
          streams: statsForAll.streams + data.streams,
          chunks: statsForAll.chunks + data.chunks,
          bytes: statsForAll.bytes + data.bytes,
          entries: statsForAll.entries + data.entries
        };
      } catch (e) {
        break;
      }
    }
    return statsForAll;
  }
  /**
   * Used within the `getQueryStats`. Retrieves the time range for a Loki stats query, adjusting it to cover the requested period.
   * In metric queries, this means extending it over the range interval.
   * @returns An object containing the start and end time in nanoseconds (NS_IN_MS) or undefined if the time range cannot be estimated.
   */
  getStatsTimeRange(query, idx, timeRange) {
    let start, end;
    const NS_IN_MS2 = 1e6;
    const durationNodes = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_14__.getNodesFromQuery)(query.expr, [_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.Duration]);
    const durations = durationNodes.map((d) => query.expr.substring(d.from, d.to));
    if ((0,_queryUtils__WEBPACK_IMPORTED_MODULE_14__.isLogsQuery)(query.expr)) {
      if (query.queryType === _types__WEBPACK_IMPORTED_MODULE_18__.LokiQueryType.Instant) {
        return { start: void 0, end: void 0 };
      }
      return this.getTimeRangeParams(timeRange);
    }
    if (query.queryType === _types__WEBPACK_IMPORTED_MODULE_18__.LokiQueryType.Instant) {
      if (!!durations[idx]) {
        end = this.getTimeRangeParams(timeRange).end;
        start = end - _grafana_data__WEBPACK_IMPORTED_MODULE_19__.intervalToMs(durations[idx]) * NS_IN_MS2;
        return { start, end };
      } else {
        if (/(\$__auto|\$__range)/.test(query.expr)) {
          return this.getTimeRangeParams(timeRange);
        }
        return { start: void 0, end: void 0 };
      }
    }
    return this.getTimeRangeParams(timeRange);
  }
  /**
   * Retrieves statistics for a Loki query and returns the QueryStats object.
   * @returns A Promise that resolves to a QueryStats object or null if the query is invalid or has no statistics.
   */
  async getStats(query, timeRange) {
    if (!query.expr) {
      return null;
    }
    const response = await this.getQueryStats(query, timeRange);
    if (!response) {
      return null;
    }
    return Object.values(response).every((v) => v === 0) ? null : response;
  }
  /**
   * Implemented as part of DataSourceAPI and used for template variable queries.
   * @returns A Promise that resolves to an array of results from the metric find query.
   */
  async metricFindQuery(query, options) {
    if (!query) {
      return Promise.resolve([]);
    }
    let interpolatedVariableQuery;
    if (typeof query === "string") {
      interpolatedVariableQuery = this.parseStringToVariableQuery(this.interpolateString(query, options == null ? void 0 : options.scopedVars));
    } else {
      interpolatedVariableQuery = {
        ...query,
        label: this.interpolateString(query.label || "", options == null ? void 0 : options.scopedVars),
        stream: this.interpolateString(query.stream || "", options == null ? void 0 : options.scopedVars)
      };
    }
    if (interpolatedVariableQuery) {
      return await this.processMetricFindQuery(interpolatedVariableQuery, options == null ? void 0 : options.range);
    }
    return Promise.resolve([]);
  }
  /**
   * Used within the `metricFindQuery`. Retrieves the correct variable results based on the provided LokiVariableQuery.
   * @returns A Promise that resolves to an array of variable results based on the query type and parameters.
   */
  async processMetricFindQuery(query, timeRange) {
    if (query.type === _types__WEBPACK_IMPORTED_MODULE_18__.LokiVariableQueryType.LabelNames) {
      const result2 = await this.languageProvider.fetchLabels({ timeRange });
      return result2.map((value) => ({ text: value }));
    }
    if (!query.label) {
      return [];
    }
    const result = await this.languageProvider.fetchLabelValues(query.label, {
      streamSelector: query.stream,
      timeRange
    });
    return result.map((value) => ({ text: value }));
  }
  /**
   * Used in `metricFindQuery` to process legacy query strings (label_name() and label_values()) to variable query objects.
   * @returns LokiVariableQuery object based on the provided query string, or undefined if string can't be parsed.
   */
  parseStringToVariableQuery(query) {
    const refId = "LokiVariableQueryEditor-VariableQuery";
    const labelNames = query.match(_migrations_variableQueryMigrations__WEBPACK_IMPORTED_MODULE_10__.labelNamesRegex);
    if (labelNames) {
      return {
        type: _types__WEBPACK_IMPORTED_MODULE_18__.LokiVariableQueryType.LabelNames,
        refId
      };
    }
    const labelValues = query.match(_migrations_variableQueryMigrations__WEBPACK_IMPORTED_MODULE_10__.labelValuesRegex);
    if (labelValues) {
      return {
        type: _types__WEBPACK_IMPORTED_MODULE_18__.LokiVariableQueryType.LabelValues,
        label: labelValues[2],
        stream: labelValues[1],
        refId
      };
    }
    return void 0;
  }
  /**
   * Used to fetch data samples, typically for autocompletion and query building to recommend parsers, labels, and values based on sampled data.
   * Currently, it works for logs data only.
   * @returns A Promise that resolves to an array of DataFrames containing data samples.
   */
  async getDataSamples(query, timeRange) {
    if (!(0,_queryUtils__WEBPACK_IMPORTED_MODULE_14__.isLogsQuery)(query.expr) || (0,_queryUtils__WEBPACK_IMPORTED_MODULE_14__.isQueryWithError)(this.interpolateString(query.expr, _components_monaco_query_field_monaco_completion_provider_validation__WEBPACK_IMPORTED_MODULE_8__.placeHolderScopedVars))) {
      return [];
    }
    const lokiLogsQuery = {
      expr: query.expr,
      queryType: _types__WEBPACK_IMPORTED_MODULE_18__.LokiQueryType.Range,
      refId: REF_ID_DATA_SAMPLES,
      maxLines: query.maxLines || DEFAULT_MAX_LINES_SAMPLE,
      supportingQueryType: _types__WEBPACK_IMPORTED_MODULE_18__.SupportingQueryType.DataSample
    };
    const request = makeRequest(lokiLogsQuery, timeRange, _grafana_data__WEBPACK_IMPORTED_MODULE_32__.CoreApp.Unknown, REF_ID_DATA_SAMPLES, true);
    return await (0,rxjs__WEBPACK_IMPORTED_MODULE_33__.lastValueFrom)(this.query(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_34__.switchMap)((res) => (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.of)(res.data))));
  }
  /**
   * Implemented as part of the DataSourceAPI. Retrieves tag keys that can be used for ad-hoc filtering.
   * @returns A Promise that resolves to an array of label names represented as MetricFindValue objects.
   */
  async getTagKeys(options) {
    var _a;
    let streamSelector = "{}";
    for (const filter of (_a = options == null ? void 0 : options.filters) != null ? _a : []) {
      streamSelector = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_11__.addLabelToQuery)(streamSelector, filter.key, filter.operator, filter.value);
    }
    const result = await this.languageProvider.fetchLabels({ timeRange: options == null ? void 0 : options.timeRange, streamSelector });
    return result.map((value) => ({ text: value }));
  }
  /**
   * Implemented as part of the DataSourceAPI. Retrieves tag values that can be used for ad-hoc filtering.
   * @returns A Promise that resolves to an array of label values represented as MetricFindValue objects
   */
  async getTagValues(options) {
    var _a;
    let streamSelector = "{}";
    for (const filter of (_a = options == null ? void 0 : options.filters) != null ? _a : []) {
      streamSelector = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_11__.addLabelToQuery)(streamSelector, filter.key, filter.operator, filter.value);
    }
    const result = await this.languageProvider.fetchLabelValues(options.key, {
      timeRange: options.timeRange,
      streamSelector
    });
    return result.map((value) => ({ text: value }));
  }
  /**
   * Used for interpolation logic in `interpolateVariablesInQueries` and `applyTemplateVariables`.
   * Handles escaping of special characters based on variable type and value.
   * @returns The interpolated value with appropriate character escaping.
   */
  interpolateQueryExpr(value, variable) {
    if (!variable.multi && !variable.includeAll) {
      return lokiRegularEscape(value);
    }
    if (typeof value === "string") {
      return lokiSpecialRegexEscape(value);
    }
    const escapedValues = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(value, lokiSpecialRegexEscape);
    return escapedValues.join("|");
  }
  /**
   * Implemented for `DataSourceWithToggleableQueryFiltersSupport`. Toggles a filter on or off based on the provided filter action.
   * It is used for example in Explore to toggle fields on and off trough log details.
   * @returns A new LokiQuery with the filter toggled as specified.
   */
  toggleQueryFilter(query, filter) {
    var _a, _b, _c, _d, _e;
    let expression = (_a = query.expr) != null ? _a : "";
    const labelType = (0,_languageUtils__WEBPACK_IMPORTED_MODULE_9__.getLabelTypeFromFrame)(filter.options.key, filter.frame, 0);
    switch (filter.type) {
      case "FILTER_FOR": {
        if (((_b = filter.options) == null ? void 0 : _b.key) && ((_c = filter.options) == null ? void 0 : _c.value)) {
          const value = (0,_languageUtils__WEBPACK_IMPORTED_MODULE_9__.escapeLabelValueInSelector)(filter.options.value);
          expression = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_11__.queryHasFilter)(expression, filter.options.key, "=", value) ? (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_11__.removeLabelFromQuery)(expression, filter.options.key, "=", value) : (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_11__.addLabelToQuery)(expression, filter.options.key, "=", value, labelType);
        }
        break;
      }
      case "FILTER_OUT": {
        if (((_d = filter.options) == null ? void 0 : _d.key) && ((_e = filter.options) == null ? void 0 : _e.value)) {
          const value = (0,_languageUtils__WEBPACK_IMPORTED_MODULE_9__.escapeLabelValueInSelector)(filter.options.value);
          if ((0,_modifyQuery__WEBPACK_IMPORTED_MODULE_11__.queryHasFilter)(expression, filter.options.key, "=", value)) {
            expression = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_11__.removeLabelFromQuery)(expression, filter.options.key, "=", value);
          }
          expression = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_11__.addLabelToQuery)(expression, filter.options.key, "!=", value, labelType);
        }
        break;
      }
      default:
        break;
    }
    return { ...query, expr: expression };
  }
  /**
   * Implemented for `DataSourceWithToggleableQueryFiltersSupport`. Checks if a query expression contains a filter based on the provided filter options.
   * @returns A boolean value indicating whether the filter exists in the query expression.
   */
  queryHasFilter(query, filter) {
    var _a;
    let expression = (_a = query.expr) != null ? _a : "";
    return (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_11__.queryHasFilter)(expression, filter.key, "=", filter.value);
  }
  /**
   * Implemented as part of `DataSourceWithQueryModificationSupport`. Used to modify a query based on the provided action.
   * It is used, for example, in the Query Builder to apply hints such as parsers, operations, etc.
   * @returns A new LokiQuery with the specified modification applied.
   */
  modifyQuery(query, action) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    let expression = (_a = query.expr) != null ? _a : "";
    switch (action.type) {
      case "ADD_FILTER": {
        if (((_b = action.options) == null ? void 0 : _b.key) && ((_c = action.options) == null ? void 0 : _c.value)) {
          const labelType = (0,_languageUtils__WEBPACK_IMPORTED_MODULE_9__.getLabelTypeFromFrame)(action.options.key, action.frame, 0);
          const value = (0,_languageUtils__WEBPACK_IMPORTED_MODULE_9__.escapeLabelValueInSelector)(action.options.value);
          expression = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_11__.addLabelToQuery)(expression, action.options.key, "=", value, labelType);
        }
        break;
      }
      case "ADD_FILTER_OUT": {
        if (((_d = action.options) == null ? void 0 : _d.key) && ((_e = action.options) == null ? void 0 : _e.value)) {
          const labelType = (0,_languageUtils__WEBPACK_IMPORTED_MODULE_9__.getLabelTypeFromFrame)(action.options.key, action.frame, 0);
          const value = (0,_languageUtils__WEBPACK_IMPORTED_MODULE_9__.escapeLabelValueInSelector)(action.options.value);
          expression = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_11__.addLabelToQuery)(expression, action.options.key, "!=", value, labelType);
        }
        break;
      }
      case "ADD_LOGFMT_PARSER": {
        expression = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_11__.addParserToQuery)(expression, "logfmt");
        break;
      }
      case "ADD_JSON_PARSER": {
        expression = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_11__.addParserToQuery)(expression, "json");
        break;
      }
      case "ADD_UNPACK_PARSER": {
        expression = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_11__.addParserToQuery)(expression, "unpack");
        break;
      }
      case "ADD_NO_PIPELINE_ERROR": {
        expression = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_11__.addNoPipelineErrorToQuery)(expression);
        break;
      }
      case "ADD_LEVEL_LABEL_FORMAT": {
        if (((_f = action.options) == null ? void 0 : _f.originalLabel) && ((_g = action.options) == null ? void 0 : _g.renameTo)) {
          expression = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_11__.addLabelFormatToQuery)(expression, {
            renameTo: action.options.renameTo,
            originalLabel: action.options.originalLabel
          });
        }
        break;
      }
      case "ADD_LABEL_FILTER": {
        const parserPositions = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_11__.getParserPositions)(query.expr);
        const labelFilterPositions = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_11__.getLabelFilterPositions)(query.expr);
        const lastPosition = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_11__.findLastPosition)([...parserPositions, ...labelFilterPositions]);
        const filter = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_11__.toLabelFilter)("", "", "=");
        expression = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_11__.addFilterAsLabelFilter)(expression, [lastPosition], filter);
        break;
      }
      case "ADD_STRING_FILTER":
      case "ADD_LINE_FILTER": {
        expression = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_11__.addLineFilter)(expression, (_h = action.options) == null ? void 0 : _h.value);
        break;
      }
      case "ADD_STRING_FILTER_OUT":
      case "ADD_LINE_FILTER_OUT": {
        expression = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_11__.addLineFilter)(expression, (_i = action.options) == null ? void 0 : _i.value, "!=");
        break;
      }
      default:
        break;
    }
    return { ...query, expr: expression };
  }
  /**
   * Implemented as part of `DataSourceWithQueryModificationSupport`. Returns a list of operation
   * types that are supported by `modifyQuery()`.
   */
  getSupportedQueryModifications() {
    return [
      "ADD_FILTER",
      "ADD_FILTER_OUT",
      "ADD_LOGFMT_PARSER",
      "ADD_JSON_PARSER",
      "ADD_UNPACK_PARSER",
      "ADD_NO_PIPELINE_ERROR",
      "ADD_LEVEL_LABEL_FORMAT",
      "ADD_LABEL_FILTER",
      "ADD_STRING_FILTER",
      "ADD_STRING_FILTER_OUT"
    ];
  }
  /**
   * Part of `DataSourceWithLogsContextSupport`, used to retrieve the log context UI for the provided log row and original query.
   * @returns A React component or element representing the log context UI for the log row.
   */
  getLogRowContextUi(row, runContextQuery, origQuery) {
    return this.logContextProvider.getLogRowContextUi(row, runContextQuery, (0,_queryUtils__WEBPACK_IMPORTED_MODULE_14__.getLokiQueryFromDataQuery)(origQuery));
  }
  /**
   * Implemented as part of the DataSourceAPI. It allows the datasource to serve as a source of annotations for a dashboard.
   * @returns A promise that resolves to an array of AnnotationEvent objects representing the annotations for the dashboard.
   * @todo This is deprecated and it is recommended to use the `AnnotationSupport` feature for annotations.
   */
  async annotationQuery(options) {
    const { expr, maxLines, instant, tagKeys = "", titleFormat = "", textFormat = "" } = options.annotation;
    if (!expr) {
      return [];
    }
    const id = "".concat(REF_ID_STARTER_ANNOTATION).concat(options.annotation.name);
    const query = {
      refId: id,
      expr,
      maxLines,
      instant,
      queryType: instant ? _types__WEBPACK_IMPORTED_MODULE_18__.LokiQueryType.Instant : _types__WEBPACK_IMPORTED_MODULE_18__.LokiQueryType.Range
    };
    const request = makeRequest(query, options.range, _grafana_data__WEBPACK_IMPORTED_MODULE_32__.CoreApp.Dashboard, id);
    const { data } = await (0,rxjs__WEBPACK_IMPORTED_MODULE_33__.lastValueFrom)(this.query(request));
    const annotations = [];
    const splitKeys = tagKeys.split(",").filter((v) => v !== "");
    for (const frame of data) {
      const view = new _grafana_data__WEBPACK_IMPORTED_MODULE_35__.DataFrameView(frame);
      view.forEach((row) => {
        const { labels } = row;
        const maybeDuplicatedTags = Object.entries(labels).map(([key, val]) => [key, val.trim()]).filter(([key, val]) => {
          if (val === "") {
            return false;
          }
          if (splitKeys.length && !splitKeys.includes(key)) {
            return false;
          }
          return true;
        }).map(([key, val]) => val);
        const tags = Array.from(new Set(maybeDuplicatedTags));
        annotations.push({
          time: new Date(row.Time).valueOf(),
          title: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_36__.renderLegendFormat)(titleFormat, labels),
          text: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_36__.renderLegendFormat)(textFormat, labels) || row.Line,
          tags
        });
      });
    }
    return annotations;
  }
  /**
   * Adds ad hoc filters to a query expression, handling proper escaping of filter values.
   * @returns The query expression with ad hoc filters and correctly escaped values.
   * @todo this.templateSrv.getAdhocFilters() is deprecated
   */
  addAdHocFilters(queryExpr, adhocFilters) {
    if (!adhocFilters) {
      return queryExpr;
    }
    let expr = (0,_querybuilder_parsingUtils__WEBPACK_IMPORTED_MODULE_15__.replaceVariables)(queryExpr);
    expr = adhocFilters.reduce((acc, filter) => {
      const { key, operator } = filter;
      let { value } = filter;
      if ((0,_languageUtils__WEBPACK_IMPORTED_MODULE_9__.isRegexSelector)(operator)) {
        value = lokiRegularEscape(value);
      } else {
        value = (0,_languageUtils__WEBPACK_IMPORTED_MODULE_9__.escapeLabelValueInSelector)(value, operator);
      }
      return (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_11__.addLabelToQuery)(acc, key, operator, value);
    }, expr);
    return (0,_querybuilder_parsingUtils__WEBPACK_IMPORTED_MODULE_15__.returnVariables)(expr);
  }
  /**
   * Filters out queries that are empty or hidden. Used when running queries through backend.
   * It is called from DatasourceWithBackend.
   * @returns `true` if the query is not hidden and its expression is not empty; `false` otherwise.
   */
  filterQuery(query) {
    if (query.hide || query.expr === "") {
      return false;
    }
    return true;
  }
  /**
   * Applies template variables and add hoc filters to a query. Used when running queries through backend.
   * It is called from DatasourceWithBackend.
   * @returns A modified Loki query with template variables and ad hoc filters applied.
   */
  applyTemplateVariables(target, scopedVars, adhocFilters) {
    const { __auto, __interval, __interval_ms, __range, __range_s, __range_ms, ...rest } = scopedVars || {};
    const exprWithAdHoc = this.addAdHocFilters(target.expr, adhocFilters);
    const variables = {
      ...rest,
      // pass through for backend interpolation. Need to be in scopedVars for Scenes though
      __interval: {
        value: "$__interval"
      },
      __interval_ms: {
        value: "$__interval_ms"
      }
    };
    return {
      ...target,
      legendFormat: this.templateSrv.replace(target.legendFormat, rest),
      expr: this.templateSrv.replace(exprWithAdHoc, variables, this.interpolateQueryExpr)
    };
  }
  /**
   * Interpolates template variables in a given string. Template variables are passed trough scopedVars.
   * @returns The string with template variables replaced by their values.
   */
  interpolateString(string, scopedVars) {
    return this.templateSrv.replace(string, scopedVars, this.interpolateQueryExpr);
  }
  /**
   * Retrieves and returns a list of variable names used in the template service.
   * Used for example in the Query Builder to populate the variable dropdown with template variables.
   * @returns An array of variable names, each prefixed with '$'.
   */
  getVariables() {
    return this.templateSrv.getVariables().map((v) => "$".concat(v.name));
  }
  /**
   * Retrieves query hints for query improvements based on a Loki query and its result data.
   * Used in Query builder to provide hints for query improvements, such as adding a parser, etc.
   * @returns An array of query hints for potential query improvements.
   */
  getQueryHints(query, result) {
    return (0,_queryHints__WEBPACK_IMPORTED_MODULE_12__.getQueryHints)(query.expr, result);
  }
  /**
   * Get a default LokiQuery based on the specified app. Currently used in UnifiedAlerting.
   * @returns A default LokiQuery object with appropriate settings for the given application.
   */
  getDefaultQuery(app) {
    const defaults = { refId: "A", expr: "" };
    if (app === _grafana_data__WEBPACK_IMPORTED_MODULE_32__.CoreApp.UnifiedAlerting) {
      return {
        ...defaults,
        queryType: _types__WEBPACK_IMPORTED_MODULE_18__.LokiQueryType.Instant
      };
    }
    return {
      ...defaults,
      queryType: _types__WEBPACK_IMPORTED_MODULE_18__.LokiQueryType.Range
    };
  }
}
function lokiRegularEscape(value) {
  if (typeof value === "string") {
    return value.replace(/'/g, "\\\\'");
  }
  return value;
}
function lokiSpecialRegexEscape(value) {
  if (typeof value === "string") {
    return lokiRegularEscape(value.replace(/\\/g, "\\\\\\\\").replace(/[$^*{}\[\]+?.()|]/g, "\\\\$&"));
  }
  return value;
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/getDerivedFields.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDerivedFields: () => (/* binding */ getDerivedFields)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/services/dataSourceSrv.ts");




function getDerivedFields(dataFrame, derivedFieldConfigs) {
  if (!derivedFieldConfigs.length) {
    return [];
  }
  const derivedFieldsGrouped = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(derivedFieldConfigs, "name");
  const newFields = Object.values(derivedFieldsGrouped).map(fieldFromDerivedFieldConfig);
  const lineField = dataFrame.fields.find((f) => f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string);
  if (lineField === void 0) {
    throw new Error("invalid logs-dataframe, string-field missing");
  }
  const labelFields = dataFrame.fields.find((f) => f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.other && f.name === "labels");
  for (let i = 0; i < lineField.values.length; i++) {
    for (const field of newFields) {
      if (derivedFieldsGrouped[field.name][0].matcherType === "label" && labelFields) {
        const label = labelFields.values[i];
        if (label) {
          const intersectingKey = Object.keys(label).find(
            (key) => derivedFieldsGrouped[field.name][0].matcherRegex === key
          );
          if (intersectingKey) {
            field.values.push(label[intersectingKey]);
            continue;
          }
        }
        field.values.push(null);
      } else if (derivedFieldsGrouped[field.name][0].matcherType === "regex" || derivedFieldsGrouped[field.name][0].matcherType === void 0) {
        const line = lineField.values[i];
        const logMatch = line.match(derivedFieldsGrouped[field.name][0].matcherRegex);
        if (logMatch && logMatch[1]) {
          field.values.push(logMatch[1]);
          continue;
        }
        field.values.push(null);
      } else {
        field.values.push(null);
      }
    }
  }
  return newFields;
}
function fieldFromDerivedFieldConfig(derivedFieldConfigs) {
  const dataSourceSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getDataSourceSrv)();
  const dataLinks = derivedFieldConfigs.reduce((acc, derivedFieldConfig) => {
    var _a;
    if (derivedFieldConfig.datasourceUid) {
      const dsSettings = dataSourceSrv.getInstanceSettings(derivedFieldConfig.datasourceUid);
      const queryType = (type) => {
        switch (type) {
          case "tempo":
            return "traceql";
          case "grafana-x-ray-datasource":
            return "getTrace";
          default:
            return void 0;
        }
      };
      acc.push({
        // Will be filled out later
        title: derivedFieldConfig.urlDisplayLabel || "",
        url: "",
        // This is hardcoded for Jaeger or Zipkin not way right now to specify datasource specific query object
        internal: {
          query: { query: derivedFieldConfig.url, queryType: queryType(dsSettings == null ? void 0 : dsSettings.type) },
          datasourceUid: derivedFieldConfig.datasourceUid,
          datasourceName: (_a = dsSettings == null ? void 0 : dsSettings.name) != null ? _a : "Data source not found"
        }
      });
    } else if (derivedFieldConfig.url) {
      acc.push({
        // We do not know what title to give here so we count on presentation layer to create a title from metadata.
        title: derivedFieldConfig.urlDisplayLabel || "",
        // This is hardcoded for Jaeger or Zipkin not way right now to specify datasource specific query object
        url: derivedFieldConfig.url
      });
    }
    return acc;
  }, []);
  return {
    name: derivedFieldConfigs[0].name,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string,
    config: {
      links: dataLinks
    },
    // We are adding values later on
    values: []
  };
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/languageUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SUGGESTIONS_LIMIT: () => (/* binding */ SUGGESTIONS_LIMIT),
/* harmony export */   abstractQueryToExpr: () => (/* binding */ abstractQueryToExpr),
/* harmony export */   escapeLabelValueInExactSelector: () => (/* binding */ escapeLabelValueInExactSelector),
/* harmony export */   escapeLabelValueInRegexSelector: () => (/* binding */ escapeLabelValueInRegexSelector),
/* harmony export */   escapeLabelValueInSelector: () => (/* binding */ escapeLabelValueInSelector),
/* harmony export */   getLabelTypeFromFrame: () => (/* binding */ getLabelTypeFromFrame),
/* harmony export */   isBytesString: () => (/* binding */ isBytesString),
/* harmony export */   isRegexSelector: () => (/* binding */ isRegexSelector),
/* harmony export */   limitSuggestions: () => (/* binding */ limitSuggestions),
/* harmony export */   mapAbstractOperatorsToOp: () => (/* binding */ mapAbstractOperatorsToOp),
/* harmony export */   mapOpToAbstractOp: () => (/* binding */ mapOpToAbstractOp),
/* harmony export */   processLabels: () => (/* binding */ processLabels),
/* harmony export */   shouldRefreshLabels: () => (/* binding */ shouldRefreshLabels),
/* harmony export */   unescapeLabelValue: () => (/* binding */ unescapeLabelValue)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/query.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/types.ts");




function roundMsToMin(milliseconds) {
  return roundSecToMin(milliseconds / 1e3);
}
function roundSecToMin(seconds) {
  return Math.floor(seconds / 60);
}
function shouldRefreshLabels(range, prevRange) {
  if (range && prevRange) {
    const sameMinuteFrom = roundMsToMin(range.from.valueOf()) === roundMsToMin(prevRange.from.valueOf());
    const sameMinuteTo = roundMsToMin(range.to.valueOf()) === roundMsToMin(prevRange.to.valueOf());
    return !(sameMinuteFrom && sameMinuteTo);
  }
  return false;
}
const RE2_METACHARACTERS = /[*+?()|\\.\[\]{}^$]/g;
function escapeLokiRegexp(value) {
  return value.replace(RE2_METACHARACTERS, "\\$&");
}
function escapeLabelValueInExactSelector(labelValue) {
  return labelValue.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/"/g, '\\"');
}
function unescapeLabelValue(labelValue) {
  return labelValue.replace(/\\n/g, "\n").replace(/\\"/g, '"').replace(/\\\\/g, "\\");
}
function escapeLabelValueInRegexSelector(labelValue) {
  return escapeLabelValueInExactSelector(escapeLokiRegexp(labelValue));
}
function escapeLabelValueInSelector(labelValue, selector) {
  return isRegexSelector(selector) ? escapeLabelValueInRegexSelector(labelValue) : escapeLabelValueInExactSelector(labelValue);
}
function isRegexSelector(selector) {
  if (selector && (selector.includes("=~") || selector.includes("!~"))) {
    return true;
  }
  return false;
}
function isBytesString(string) {
  const BYTES_KEYWORDS = [
    "b",
    "kib",
    "Kib",
    "kb",
    "KB",
    "mib",
    "Mib",
    "mb",
    "MB",
    "gib",
    "Gib",
    "gb",
    "GB",
    "tib",
    "Tib",
    "tb",
    "TB",
    "pib",
    "Pib",
    "pb",
    "PB",
    "eib",
    "Eib",
    "eb",
    "EB"
  ];
  const regex = new RegExp("^(?:-?\\d+(?:\\.\\d+)?)(?:".concat(BYTES_KEYWORDS.join("|"), ")$"));
  const match = string.match(regex);
  return !!match;
}
function getLabelTypeFromFrame(labelKey, frame, index) {
  var _a;
  if (!frame || index === void 0) {
    return null;
  }
  const typeField = (_a = frame.fields.find((field) => field.name === "labelTypes")) == null ? void 0 : _a.values[index];
  if (!typeField) {
    return null;
  }
  switch (typeField[labelKey]) {
    case "I":
      return _types__WEBPACK_IMPORTED_MODULE_1__.LabelType.Indexed;
    case "S":
      return _types__WEBPACK_IMPORTED_MODULE_1__.LabelType.StructuredMetadata;
    case "P":
      return _types__WEBPACK_IMPORTED_MODULE_1__.LabelType.Parsed;
    default:
      return null;
  }
}
const mapOpToAbstractOp = {
  [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.AbstractLabelOperator.Equal]: "=",
  [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.AbstractLabelOperator.NotEqual]: "!=",
  [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.AbstractLabelOperator.EqualRegEx]: "=~",
  [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.AbstractLabelOperator.NotEqualRegEx]: "!~"
};
const mapAbstractOperatorsToOp = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.invert)(mapOpToAbstractOp);
function abstractQueryToExpr(labelBasedQuery) {
  const expr = labelBasedQuery.labelMatchers.map((selector) => {
    const operator = mapOpToAbstractOp[selector.operator];
    if (operator) {
      return "".concat(selector.name).concat(operator, '"').concat(selector.value, '"');
    } else {
      return "";
    }
  }).filter((e) => e !== "").join(", ");
  return expr ? "{".concat(expr, "}") : "";
}
function processLabels(labels) {
  const valueSet = {};
  labels.forEach((label) => {
    Object.keys(label).forEach((key) => {
      if (!valueSet[key]) {
        valueSet[key] = /* @__PURE__ */ new Set();
      }
      if (!valueSet[key].has(label[key])) {
        valueSet[key].add(label[key]);
      }
    });
  });
  const valueArray = {};
  limitSuggestions(Object.keys(valueSet)).forEach((key) => {
    valueArray[key] = limitSuggestions(Array.from(valueSet[key]));
  });
  return { values: valueArray, keys: Object.keys(valueArray) };
}
const SUGGESTIONS_LIMIT = 1e4;
function limitSuggestions(items) {
  return items.slice(0, SUGGESTIONS_LIMIT);
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/lineParser.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isLogLineJSON: () => (/* binding */ isLogLineJSON),
/* harmony export */   isLogLineLogfmt: () => (/* binding */ isLogLineLogfmt),
/* harmony export */   isLogLinePacked: () => (/* binding */ isLogLinePacked)
/* harmony export */ });

function isLogLineJSON(line) {
  let parsed;
  try {
    parsed = JSON.parse(line);
  } catch (error) {
  }
  return typeof parsed === "object";
}
const LOGFMT_REGEXP = /(?:^|\s)([\w\(\)\[\]\{\}]+)=(""|(?:".*?[^\\]"|[^"\s]\S*))/;
function isLogLineLogfmt(line) {
  return LOGFMT_REGEXP.test(line);
}
function isLogLinePacked(line) {
  let parsed;
  try {
    parsed = JSON.parse(line);
    return parsed.hasOwnProperty("_entry");
  } catch (error) {
    return false;
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/liveStreamsResultTransformer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendResponseToBufferedData: () => (/* binding */ appendResponseToBufferedData)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/uuid/dist/esm-browser/v5.js");


const UUID_NAMESPACE = "6ec946da-0f49-47a8-983a-1d76d17e7c92";
function appendResponseToBufferedData(response, data) {
  const streams = response.streams;
  if (!streams || !streams.length) {
    return;
  }
  const tsField = data.fields[0];
  const lineField = data.fields[1];
  const idField = data.fields[2];
  const usedUids = {};
  for (const stream of streams) {
    const allLabelsString = Object.entries(stream.stream).map(([key, val]) => "".concat(key, '="').concat(val, '"')).sort().join("");
    for (const [ts, line] of stream.values) {
      tsField.values.push(new Date(parseInt(ts.slice(0, -6), 10)).toISOString());
      lineField.values.push(line);
      idField.values.push(createUid(ts, allLabelsString, line, usedUids, data.refId));
    }
  }
}
function createUid(ts, labelsString, line, usedUids, refId) {
  let id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(ts, "_").concat(labelsString, "_").concat(line), UUID_NAMESPACE);
  if (id in usedUids) {
    const newCount = usedUids[id] + 1;
    usedUids[id] = newCount;
    id = "".concat(id, "_").concat(newCount);
  } else {
    usedUids[id] = 0;
  }
  if (refId) {
    return "".concat(refId, "_").concat(id);
  }
  return id;
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/logsTimeSplitting.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   splitTimeRange: () => (/* binding */ splitTimeRange)
/* harmony export */ });

function splitTimeRange(startTime, endTime, idealRangeDuration) {
  if (endTime - startTime <= idealRangeDuration) {
    return [[startTime, endTime]];
  }
  const result = [];
  for (let chunkEndTime = endTime; chunkEndTime > startTime; chunkEndTime -= idealRangeDuration) {
    const chunkStartTime = Math.max(chunkEndTime - idealRangeDuration, startTime);
    result.push([chunkStartTime, chunkEndTime]);
  }
  result.reverse();
  return result;
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/makeTableFrames.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeTableFrames: () => (/* binding */ makeTableFrames)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");



function makeTableFrames(instantMetricFrames) {
  const framesWithRefId = instantMetricFrames.filter((f) => f.refId !== void 0);
  const framesByRefId = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(framesWithRefId, (frame) => frame.refId);
  return Object.entries(framesByRefId).map(([refId, frames]) => makeTableFrame(frames, refId));
}
function makeTableFrame(instantMetricFrames, refId) {
  const tableTimeField = { name: "Time", config: {}, values: [], type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.time };
  const tableValueField = {
    name: "Value #".concat(refId),
    config: {},
    values: [],
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number
  };
  const allLabelNames = new Set(
    instantMetricFrames.map((frame) => frame.fields.map((field) => {
      var _a;
      return Object.keys((_a = field.labels) != null ? _a : {});
    }).flat()).flat()
  );
  const sortedLabelNames = Array.from(allLabelNames).sort();
  const labelFields = sortedLabelNames.map((labelName) => ({
    name: labelName,
    config: { filterable: true },
    values: [],
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string
  }));
  instantMetricFrames.forEach((frame) => {
    var _a, _b;
    const timeField = frame.fields.find((field) => field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.time);
    const valueField = frame.fields.find((field) => field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number);
    if (timeField == null || valueField == null) {
      return;
    }
    const timeArray = timeField.values;
    const valueArray = valueField.values;
    for (let x of timeArray) {
      tableTimeField.values.push(x);
    }
    for (let x of valueArray) {
      tableValueField.values.push(x);
    }
    const labels = (_a = valueField.labels) != null ? _a : {};
    for (let f of labelFields) {
      const text = (_b = labels[f.name]) != null ? _b : "";
      for (let i = 0; i < valueArray.length; i++) {
        f.values.push(text);
      }
    }
  });
  return {
    fields: [tableTimeField, ...labelFields, tableValueField],
    refId,
    meta: { preferredVisualisationType: "table" },
    length: tableTimeField.values.length
  };
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/metricTimeSplitting.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   splitTimeRange: () => (/* binding */ splitTimeRange)
/* harmony export */ });

function splitTimeRange(startTime, endTime, step, idealRangeDuration) {
  if (idealRangeDuration < step) {
    return [[startTime, endTime]];
  }
  const alignedDuration = Math.trunc(idealRangeDuration / step) * step;
  const alignedStartTime = startTime - startTime % step;
  const result = [];
  for (let chunkStartTime = alignedStartTime; chunkStartTime < endTime; chunkStartTime += alignedDuration) {
    const chunkEndTime = Math.min(chunkStartTime + alignedDuration - step, endTime);
    result.push([chunkStartTime, chunkEndTime]);
  }
  return result;
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/migrations/variableQueryMigrations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   labelNamesRegex: () => (/* binding */ labelNamesRegex),
/* harmony export */   labelValuesRegex: () => (/* binding */ labelValuesRegex),
/* harmony export */   migrateVariableQuery: () => (/* binding */ migrateVariableQuery)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/loki/types.ts");


const labelNamesRegex = /^label_names\(\)\s*$/;
const labelValuesRegex = /^label_values\((?:(.+),\s*)?([a-zA-Z_$][a-zA-Z0-9_]*)\)\s*$/;
function migrateVariableQuery(rawQuery) {
  if (typeof rawQuery !== "string") {
    return rawQuery;
  }
  const queryBase = {
    refId: "LokiVariableQueryEditor-VariableQuery",
    type: _types__WEBPACK_IMPORTED_MODULE_0__.LokiVariableQueryType.LabelNames
  };
  const labelNames = rawQuery.match(labelNamesRegex);
  if (labelNames) {
    return {
      ...queryBase,
      type: _types__WEBPACK_IMPORTED_MODULE_0__.LokiVariableQueryType.LabelNames
    };
  }
  const labelValues = rawQuery.match(labelValuesRegex);
  if (labelValues) {
    return {
      ...queryBase,
      type: _types__WEBPACK_IMPORTED_MODULE_0__.LokiVariableQueryType.LabelValues,
      label: labelValues[2] ? labelValues[2] : labelValues[1],
      stream: labelValues[2] ? labelValues[1] : void 0
    };
  }
  return queryBase;
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/modifyQuery.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodePosition: () => (/* binding */ NodePosition),
/* harmony export */   addFilterAsLabelFilter: () => (/* binding */ addFilterAsLabelFilter),
/* harmony export */   addLabelFormatToQuery: () => (/* binding */ addLabelFormatToQuery),
/* harmony export */   addLabelToQuery: () => (/* binding */ addLabelToQuery),
/* harmony export */   addLineFilter: () => (/* binding */ addLineFilter),
/* harmony export */   addNoPipelineErrorToQuery: () => (/* binding */ addNoPipelineErrorToQuery),
/* harmony export */   addParserToQuery: () => (/* binding */ addParserToQuery),
/* harmony export */   findLastPosition: () => (/* binding */ findLastPosition),
/* harmony export */   getLabelFilterPositions: () => (/* binding */ getLabelFilterPositions),
/* harmony export */   getParserPositions: () => (/* binding */ getParserPositions),
/* harmony export */   getStreamSelectorPositions: () => (/* binding */ getStreamSelectorPositions),
/* harmony export */   queryHasFilter: () => (/* binding */ queryHasFilter),
/* harmony export */   removeCommentsFromQuery: () => (/* binding */ removeCommentsFromQuery),
/* harmony export */   removeLabelFromQuery: () => (/* binding */ removeLabelFromQuery),
/* harmony export */   toLabelFilter: () => (/* binding */ toLabelFilter)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/lezer-logql/index.es.js");
/* harmony import */ var _languageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/languageUtils.ts");
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/queryUtils.ts");
/* harmony import */ var _querybuilder_LokiQueryModeller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/LokiQueryModeller.ts");
/* harmony import */ var _querybuilder_parsing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/parsing.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/loki/types.ts");








class NodePosition {
  constructor(from, to, type) {
    this.from = from;
    this.to = to;
    this.type = type;
  }
  static fromNode(node) {
    return new NodePosition(node.from, node.to, node.type);
  }
  contains(position) {
    return this.from <= position.from && this.to >= position.to;
  }
  getExpression(query) {
    return query.substring(this.from, this.to);
  }
}
function queryHasFilter(query, key, operator, value) {
  const matchers = getMatchersWithFilter(query, key, operator, value);
  return matchers.length > 0;
}
function removeLabelFromQuery(query, key, operator, value) {
  var _a;
  const matchers = getMatchersWithFilter(query, key, operator, value);
  for (const matcher of matchers) {
    query = ((_a = matcher.parent) == null ? void 0 : _a.type.id) === _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.LabelFilter ? removeLabelFilter(query, matcher) : removeSelector(query, matcher);
  }
  return query;
}
function removeLabelFilter(query, matcher) {
  var _a;
  const pipelineStage = (_a = matcher.parent) == null ? void 0 : _a.parent;
  if (!pipelineStage || pipelineStage.type.id !== _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.PipelineStage) {
    return query;
  }
  return (query.substring(0, pipelineStage.from) + query.substring(pipelineStage.to)).trim();
}
function removeSelector(query, matcher) {
  let selector = matcher;
  do {
    selector = selector.parent;
  } while (selector && selector.type.id !== _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.Selector);
  const label = matcher.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.Identifier);
  if (!selector || !label) {
    return query;
  }
  const labelName = query.substring(label.from, label.to);
  const prefix = query.substring(0, selector.from);
  const suffix = query.substring(selector.to);
  const matchVisQuery = (0,_querybuilder_parsing__WEBPACK_IMPORTED_MODULE_5__.buildVisualQueryFromString)(query.substring(selector.from, selector.to));
  matchVisQuery.query.labels = matchVisQuery.query.labels.filter((label2) => label2.label !== labelName);
  return prefix + _querybuilder_LokiQueryModeller__WEBPACK_IMPORTED_MODULE_4__.lokiQueryModeller.renderQuery(matchVisQuery.query) + suffix;
}
function getMatchersWithFilter(query, label, operator, value) {
  const tree = _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.parser.parse(query);
  const matchers = [];
  tree.iterate({
    enter: ({ type, node }) => {
      if (type.id === _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.Matcher) {
        matchers.push(node);
      }
    }
  });
  return matchers.filter((matcher) => {
    const labelNode = matcher.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.Identifier);
    const opNode = labelNode == null ? void 0 : labelNode.nextSibling;
    const valueNode = matcher.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.String);
    if (!labelNode || !opNode || !valueNode) {
      return false;
    }
    const labelName = query.substring(labelNode.from, labelNode.to);
    if (labelName !== label) {
      return false;
    }
    const labelValue = query.substring(valueNode.from, valueNode.to);
    if ((0,_querybuilder_parsing__WEBPACK_IMPORTED_MODULE_5__.handleQuotes)(labelValue) !== (0,_languageUtils__WEBPACK_IMPORTED_MODULE_2__.unescapeLabelValue)(value)) {
      return false;
    }
    const labelOperator = query.substring(opNode.from, opNode.to);
    if (labelOperator !== operator) {
      return false;
    }
    return true;
  });
}
function addLabelToQuery(query, key, operator, value, labelType) {
  if (!key || !value) {
    throw new Error("Need label to add to query.");
  }
  const streamSelectorPositions = getStreamSelectorPositions(query);
  if (!streamSelectorPositions.length) {
    return query;
  }
  const parserPositions = getParserPositions(query);
  const labelFilterPositions = getLabelFilterPositions(query);
  const hasStreamSelectorMatchers = getMatcherInStreamPositions(query);
  const labelFormatPositions = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_3__.getNodePositionsFromQuery)(query, [_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.LabelFormatExpr]);
  const everyStreamSelectorHasMatcher = streamSelectorPositions.every(
    (streamSelectorPosition) => hasStreamSelectorMatchers.some(
      (matcherPosition) => matcherPosition.from >= streamSelectorPosition.from && matcherPosition.to <= streamSelectorPosition.to
    )
  );
  const filter = toLabelFilter(key, value, operator);
  if (labelType === _types__WEBPACK_IMPORTED_MODULE_6__.LabelType.Parsed || labelType === _types__WEBPACK_IMPORTED_MODULE_6__.LabelType.StructuredMetadata) {
    const lastPositionsPerExpression = getLastPositionPerExpression(query, [
      ...streamSelectorPositions,
      ...labelFilterPositions,
      ...parserPositions,
      ...labelFormatPositions
    ]);
    return addFilterAsLabelFilter(query, lastPositionsPerExpression, filter);
  } else if (labelType === _types__WEBPACK_IMPORTED_MODULE_6__.LabelType.Indexed) {
    return addFilterToStreamSelector(query, streamSelectorPositions, filter);
  } else {
    if (parserPositions.length === 0 || everyStreamSelectorHasMatcher === false) {
      return addFilterToStreamSelector(query, streamSelectorPositions, filter);
    } else {
      const lastPositionsPerExpression = getLastPositionPerExpression(query, [
        ...parserPositions,
        ...labelFilterPositions,
        ...labelFormatPositions
      ]);
      return addFilterAsLabelFilter(query, lastPositionsPerExpression, filter);
    }
  }
}
function getLastPositionPerExpression(query, positions) {
  const subExpressions = findLeaves((0,_queryUtils__WEBPACK_IMPORTED_MODULE_3__.getNodePositionsFromQuery)(query, [_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.Expr]));
  const subPositions = [...positions];
  const lastPositionsPerExpression = subExpressions.map((subExpression) => {
    return findLastPosition(
      subPositions.filter((p) => {
        return subExpression.contains(p);
      })
    );
  });
  return lastPositionsPerExpression;
}
function addParserToQuery(query, parser2) {
  const lineFilterPositions = getLineFiltersPositions(query);
  if (lineFilterPositions.length) {
    return addParser(query, lineFilterPositions, parser2);
  } else {
    const streamSelectorPositions = getStreamSelectorPositions(query);
    if (!streamSelectorPositions.length) {
      return query;
    }
    return addParser(query, streamSelectorPositions, parser2);
  }
}
function addNoPipelineErrorToQuery(query) {
  const parserPositions = getParserPositions(query);
  if (!parserPositions.length) {
    return query;
  }
  const filter = toLabelFilter("__error__", "", "=");
  return addFilterAsLabelFilter(query, parserPositions, filter);
}
function addLabelFormatToQuery(query, labelFormat) {
  const logQueryPositions = getLogQueryPositions(query);
  return addLabelFormat(query, logQueryPositions, labelFormat);
}
function removeCommentsFromQuery(query) {
  const lineCommentPositions = getLineCommentPositions(query);
  if (!lineCommentPositions.length) {
    return query;
  }
  let newQuery = "";
  let prev = 0;
  for (let lineCommentPosition of lineCommentPositions) {
    newQuery = newQuery + query.substring(prev, lineCommentPosition.from);
    prev = lineCommentPosition.to;
  }
  newQuery = newQuery + query.substring(prev);
  return newQuery;
}
function getStreamSelectorPositions(query) {
  const tree = _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.parser.parse(query);
  const positions = [];
  tree.iterate({
    enter: ({ type, node }) => {
      if (type.id === _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.Selector) {
        positions.push(NodePosition.fromNode(node));
        return false;
      }
    }
  });
  return positions;
}
function getParserPositions(query) {
  const tree = _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.parser.parse(query);
  const positions = [];
  const parserNodeTypes = [_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.LabelParser, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.JsonExpressionParser, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.LogfmtParser, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.LogfmtExpressionParser];
  tree.iterate({
    enter: ({ type, node }) => {
      if (parserNodeTypes.includes(type.id)) {
        positions.push(NodePosition.fromNode(node));
        return false;
      }
    }
  });
  return positions;
}
function getLabelFilterPositions(query) {
  const tree = _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.parser.parse(query);
  const positions = [];
  tree.iterate({
    enter: ({ type, node }) => {
      if (type.id === _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.LabelFilter) {
        positions.push(NodePosition.fromNode(node));
        return false;
      }
    }
  });
  return positions;
}
function getLineFiltersPositions(query) {
  const tree = _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.parser.parse(query);
  const positions = [];
  tree.iterate({
    enter: ({ type, node }) => {
      if (type.id === _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.LineFilters) {
        positions.push(NodePosition.fromNode(node));
        return false;
      }
    }
  });
  return positions;
}
function getLogQueryPositions(query) {
  const tree = _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.parser.parse(query);
  const positions = [];
  tree.iterate({
    enter: ({ type, node }) => {
      if (type.id === _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.LogExpr) {
        positions.push(NodePosition.fromNode(node));
        return false;
      }
      if (type.id === _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.LogRangeExpr) {
        const logPartsPositions = [];
        const selector = node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.Selector);
        if (selector) {
          logPartsPositions.push(NodePosition.fromNode(selector));
        }
        const pipeline = node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.PipelineExpr);
        if (pipeline) {
          logPartsPositions.push(NodePosition.fromNode(pipeline));
        }
        const unwrap = node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.UnwrapExpr);
        if (unwrap) {
          logPartsPositions.push(NodePosition.fromNode(unwrap));
        }
        const sorted = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.sortBy)(logPartsPositions, (position) => position.to);
        positions.push(new NodePosition(sorted[0].from, sorted[sorted.length - 1].to));
        return false;
      }
    }
  });
  return positions;
}
function toLabelFilter(key, value, operator) {
  return { label: key, op: operator, value };
}
function addFilterToStreamSelector(query, vectorSelectorPositions, filter) {
  let newQuery = "";
  let prev = 0;
  for (let i = 0; i < vectorSelectorPositions.length; i++) {
    const match = vectorSelectorPositions[i];
    const isLast = i === vectorSelectorPositions.length - 1;
    const start = query.substring(prev, match.from);
    const end = isLast ? query.substring(match.to) : "";
    const matchVisQuery = (0,_querybuilder_parsing__WEBPACK_IMPORTED_MODULE_5__.buildVisualQueryFromString)(query.substring(match.from, match.to));
    if (!labelExists(matchVisQuery.query.labels, filter)) {
      matchVisQuery.query.labels.push(filter);
    }
    const newLabels = _querybuilder_LokiQueryModeller__WEBPACK_IMPORTED_MODULE_4__.lokiQueryModeller.renderQuery(matchVisQuery.query);
    newQuery += start + newLabels + end;
    prev = match.to;
  }
  return newQuery;
}
function addFilterAsLabelFilter(query, positionsToAddAfter, filter) {
  let newQuery = "";
  let prev = 0;
  for (let i = 0; i < positionsToAddAfter.length; i++) {
    const match = positionsToAddAfter[i];
    const isLast = i === positionsToAddAfter.length - 1;
    const start = query.substring(prev, match.to);
    const end = isLast ? query.substring(match.to) : "";
    let labelFilter = "";
    if (!Number.isNaN(Number(filter.value)) && (filter.op === "<" || filter.op === ">")) {
      labelFilter = " | ".concat(filter.label).concat(filter.op).concat(Number(filter.value));
    } else {
      labelFilter = " | ".concat(filter.label).concat(filter.op, "`").concat((0,_languageUtils__WEBPACK_IMPORTED_MODULE_2__.unescapeLabelValue)(filter.value), "`");
    }
    newQuery += start + labelFilter + end;
    prev = match.to;
  }
  return newQuery;
}
function addParser(query, queryPartPositions, parser2) {
  let newQuery = "";
  let prev = 0;
  for (let i = 0; i < queryPartPositions.length; i++) {
    const match = queryPartPositions[i];
    const isLast = i === queryPartPositions.length - 1;
    const start = query.substring(prev, match.to);
    const end = isLast ? query.substring(match.to) : "";
    newQuery += start + " | ".concat(parser2) + end;
    prev = match.to;
  }
  return newQuery;
}
function addLabelFormat(query, logQueryPositions, labelFormat) {
  let newQuery = "";
  let prev = 0;
  for (let i = 0; i < logQueryPositions.length; i++) {
    const match = logQueryPositions[i];
    const isLast = i === logQueryPositions.length - 1;
    const start = query.substring(prev, match.to);
    const end = isLast ? query.substring(match.to) : "";
    const labelFilter = " | label_format ".concat(labelFormat.renameTo, "=").concat(labelFormat.originalLabel);
    newQuery += start + labelFilter + end;
    prev = match.to;
  }
  return newQuery;
}
function addLineFilter(query, value = "", operator = "|=") {
  const streamSelectorPositions = getStreamSelectorPositions(query);
  if (!streamSelectorPositions.length) {
    return query;
  }
  const streamSelectorEnd = streamSelectorPositions[0].to;
  const newQueryExpr = query.slice(0, streamSelectorEnd) + " ".concat(operator, " `").concat(value, "`") + query.slice(streamSelectorEnd);
  return newQueryExpr;
}
function getLineCommentPositions(query) {
  const tree = _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.parser.parse(query);
  const positions = [];
  tree.iterate({
    enter: ({ type, from, to }) => {
      if (type.id === _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.LineComment) {
        positions.push(new NodePosition(from, to, type));
        return false;
      }
    }
  });
  return positions;
}
function labelExists(labels, filter) {
  return labels.find((label) => label.label === filter.label && label.value === filter.value);
}
function findLastPosition(positions) {
  if (!positions.length) {
    return new NodePosition(0, 0);
  }
  return positions.reduce((prev, current) => prev.to > current.to ? prev : current);
}
function findLeaves(nodes) {
  return nodes.filter((node) => nodes.every((n) => node.contains(n) === false || node === n));
}
function getAllPositionsInNodeByType(node, type) {
  if (node.type.id === type) {
    return [NodePosition.fromNode(node)];
  }
  const positions = [];
  let pos = 0;
  let child = node.childAfter(pos);
  while (child) {
    positions.push(...getAllPositionsInNodeByType(child, type));
    pos = child.to;
    child = node.childAfter(pos);
  }
  return positions;
}
function getMatcherInStreamPositions(query) {
  const tree = _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.parser.parse(query);
  const positions = [];
  tree.iterate({
    enter: ({ node }) => {
      if (node.type.id === _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.Selector) {
        positions.push(...getAllPositionsInNodeByType(node, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.Matcher));
      }
    }
  });
  return positions;
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/datasource.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/events/common.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/services/appEvents.ts");
/* harmony import */ var _components_LokiCheatSheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/loki/components/LokiCheatSheet.tsx");
/* harmony import */ var _components_LokiQueryEditorByApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/components/LokiQueryEditorByApp.tsx");
/* harmony import */ var _configuration_ConfigEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/configuration/ConfigEditor.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/datasource.ts");
/* harmony import */ var _tracking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/loki/tracking.ts");








const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_5__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_3__.LokiDatasource).setQueryEditor(_components_LokiQueryEditorByApp__WEBPACK_IMPORTED_MODULE_1__["default"]).setConfigEditor(_configuration_ConfigEditor__WEBPACK_IMPORTED_MODULE_2__.ConfigEditor).setQueryEditorHelp(_components_LokiCheatSheet__WEBPACK_IMPORTED_MODULE_0__["default"]);
(0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.getAppEvents)().subscribe(_grafana_data__WEBPACK_IMPORTED_MODULE_7__.DashboardLoadedEvent, _tracking__WEBPACK_IMPORTED_MODULE_4__.onDashboardLoadedHandler);


/***/ }),

/***/ "./public/app/plugins/datasource/loki/queryHints.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getQueryHints: () => (/* binding */ getQueryHints)
/* harmony export */ });
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/loki/queryUtils.ts");
/* harmony import */ var _responseUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/responseUtils.ts");



function getQueryHints(query, series) {
  if (series.length === 0) {
    return [];
  }
  const hints = [];
  const { queryWithParser, parserCount } = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_0__.isQueryWithParser)(query);
  if (!queryWithParser) {
    const { hasLogfmt, hasJSON, hasPack } = (0,_responseUtils__WEBPACK_IMPORTED_MODULE_1__.extractLogParserFromDataFrame)(series[0]);
    if (hasJSON) {
      if (hasPack) {
        hints.push({
          type: "ADD_UNPACK_PARSER",
          label: "Selected log stream selector has packed logs.",
          fix: {
            title: "add unpack parser",
            label: "Consider using unpack parser.",
            action: {
              type: "ADD_UNPACK_PARSER",
              query
            }
          }
        });
      } else {
        hints.push({
          type: "ADD_JSON_PARSER",
          label: "Selected log stream selector has JSON formatted logs.",
          fix: {
            title: "add json parser",
            label: "Consider using JSON parser.",
            action: {
              type: "ADD_JSON_PARSER",
              query
            }
          }
        });
      }
    }
    if (hasLogfmt) {
      hints.push({
        type: "ADD_LOGFMT_PARSER",
        label: "Selected log stream selector has logfmt formatted logs.",
        fix: {
          title: "add logfmt parser",
          label: "Consider using logfmt parser to turn key-value pairs in your log lines to labels.",
          action: {
            type: "ADD_LOGFMT_PARSER",
            query
          }
        }
      });
    }
  }
  if (queryWithParser) {
    if (parserCount === 1) {
      const hasPipelineErrorFiltering = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_0__.isQueryPipelineErrorFiltering)(query);
      const hasError = (0,_responseUtils__WEBPACK_IMPORTED_MODULE_1__.extractHasErrorLabelFromDataFrame)(series[0]);
      if (hasError && !hasPipelineErrorFiltering) {
        hints.push({
          type: "ADD_NO_PIPELINE_ERROR",
          label: "Some logs in your selected log streams have parsing error.",
          fix: {
            title: "remove pipeline errors",
            label: "Consider filtering out logs with parsing errors.",
            action: {
              type: "ADD_NO_PIPELINE_ERROR",
              query
            }
          }
        });
      }
    }
    const hasLabelFilter = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_0__.isQueryWithLabelFilter)(query);
    if (!hasLabelFilter) {
      hints.push({
        type: "ADD_LABEL_FILTER",
        label: "Consider filtering logs by their label and value.",
        fix: {
          title: "add label filter",
          label: "",
          action: {
            type: "ADD_LABEL_FILTER",
            query
          }
        }
      });
    }
  }
  const queryWithLabelFormat = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_0__.isQueryWithLabelFormat)(query);
  if (!queryWithLabelFormat) {
    const hasLevel = (0,_responseUtils__WEBPACK_IMPORTED_MODULE_1__.dataFrameHasLevelLabel)(series[0]);
    const levelLikeLabel = (0,_responseUtils__WEBPACK_IMPORTED_MODULE_1__.extractLevelLikeLabelFromDataFrame)(series[0]);
    if (!hasLevel && levelLikeLabel) {
      hints.push({
        type: "ADD_LEVEL_LABEL_FORMAT",
        label: 'Some logs in your selected log stream have "'.concat(levelLikeLabel, '" label.'),
        fix: {
          title: "add label level format",
          label: "If ".concat(levelLikeLabel, ' label has level values, consider using label_format to rename it to "level". Level label can be then visualized in log volumes.'),
          action: {
            type: "ADD_LEVEL_LABEL_FORMAT",
            query,
            options: {
              renameTo: "level",
              originalLabel: levelLikeLabel
            }
          }
        }
      });
    }
  }
  const hasLineFilter = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_0__.isQueryWithLineFilter)(query);
  if (!hasLineFilter) {
    hints.push({
      type: "ADD_LINE_FILTER",
      label: "Consider filtering logs for specific string.",
      fix: {
        title: "add line filter",
        label: "",
        action: {
          type: "ADD_LINE_FILTER",
          query
        }
      }
    });
  }
  return hints;
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/querySplitting.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOADING_FRAME_NAME: () => (/* binding */ LOADING_FRAME_NAME),
/* harmony export */   partitionTimeRange: () => (/* binding */ partitionTimeRange),
/* harmony export */   runSplitGroupedQueries: () => (/* binding */ runSplitGroupedQueries),
/* harmony export */   runSplitQuery: () => (/* binding */ runSplitQuery)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/datetime/moment_wrapper.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-data/src/dataframe/ArrayDataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-data/src/datetime/durationutil.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-data/src/datetime/rangeutil.ts");
/* harmony import */ var _grafana_o11y_ds_frontend__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-o11y-ds-frontend/src/combineResponses.ts");
/* harmony import */ var _logsTimeSplitting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/logsTimeSplitting.ts");
/* harmony import */ var _metricTimeSplitting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/metricTimeSplitting.ts");
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/queryUtils.ts");
/* harmony import */ var _tracking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/loki/tracking.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/loki/types.ts");











function partitionTimeRange(isLogsQuery2, originalTimeRange, stepMs, duration) {
  const start = originalTimeRange.from.toDate().getTime();
  const end = originalTimeRange.to.toDate().getTime();
  const ranges = isLogsQuery2 ? (0,_logsTimeSplitting__WEBPACK_IMPORTED_MODULE_1__.splitTimeRange)(start, end, duration) : (0,_metricTimeSplitting__WEBPACK_IMPORTED_MODULE_2__.splitTimeRange)(start, end, stepMs, duration);
  return ranges.map(([start2, end2]) => {
    const from = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.dateTime)(start2);
    const to = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.dateTime)(end2);
    return {
      from,
      to,
      raw: { from, to }
    };
  });
}
function adjustTargetsFromResponseState(targets, response) {
  if (!response) {
    return targets;
  }
  return targets.map((target) => {
    if (!target.maxLines || !(0,_queryUtils__WEBPACK_IMPORTED_MODULE_3__.isLogsQuery)(target.expr)) {
      return target;
    }
    const targetFrame = response.data.find((frame) => frame.refId === target.refId);
    if (!targetFrame) {
      return target;
    }
    const updatedMaxLines = target.maxLines - targetFrame.length;
    return {
      ...target,
      maxLines: updatedMaxLines < 0 ? 0 : updatedMaxLines
    };
  }).filter((target) => target.maxLines === void 0 || target.maxLines > 0);
}
function runSplitGroupedQueries(datasource, requests) {
  const responseKey = requests.length ? requests[0].request.queryGroupId : (0,uuid__WEBPACK_IMPORTED_MODULE_7__["default"])();
  let mergedResponse = { data: [], state: _grafana_data__WEBPACK_IMPORTED_MODULE_8__.LoadingState.Streaming, key: responseKey };
  const totalRequests = Math.max(...requests.map(({ partition: partition2 }) => partition2.length));
  const longestPartition = requests.filter(({ partition: partition2 }) => partition2.length === totalRequests)[0].partition;
  let shouldStop = false;
  let subquerySubsciption = null;
  const runNextRequest = (subscriber, requestN, requestGroup) => {
    if (shouldStop) {
      subscriber.complete();
      return;
    }
    const done = () => {
      mergedResponse.state = _grafana_data__WEBPACK_IMPORTED_MODULE_8__.LoadingState.Done;
      subscriber.next(mergedResponse);
      subscriber.complete();
    };
    const nextRequest = () => {
      const { nextRequestN, nextRequestGroup } = getNextRequestPointers(requests, requestGroup, requestN);
      if (nextRequestN > 0 && nextRequestGroup >= 0) {
        runNextRequest(subscriber, nextRequestN, nextRequestGroup);
        return;
      }
      done();
    };
    const group = requests[requestGroup];
    const range = group.partition[requestN - 1];
    const targets = adjustTargetsFromResponseState(group.request.targets, mergedResponse);
    if (!targets.length) {
      nextRequest();
      return;
    }
    const subRequest = { ...requests[requestGroup].request, range, targets };
    if (group.request.requestId) {
      subRequest.requestId = "".concat(group.request.requestId, "_").concat(requestN);
    }
    subquerySubsciption = datasource.runQuery(subRequest).subscribe({
      next: (partialResponse) => {
        var _a;
        mergedResponse = (0,_grafana_o11y_ds_frontend__WEBPACK_IMPORTED_MODULE_9__.combineResponses)(mergedResponse, partialResponse);
        mergedResponse = updateLoadingFrame(mergedResponse, subRequest, longestPartition, requestN);
        if (((_a = mergedResponse.errors) != null ? _a : []).length > 0 || mergedResponse.error != null) {
          shouldStop = true;
        }
      },
      complete: () => {
        subscriber.next(mergedResponse);
        nextRequest();
      },
      error: (error) => {
        subscriber.error(error);
      }
    });
  };
  const response = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Observable((subscriber) => {
    runNextRequest(subscriber, totalRequests, 0);
    return () => {
      shouldStop = true;
      if (subquerySubsciption != null) {
        subquerySubsciption.unsubscribe();
      }
    };
  });
  return response;
}
const LOADING_FRAME_NAME = "loki-splitting-progress";
function updateLoadingFrame(response, request, partition2, requestN) {
  if ((0,_queryUtils__WEBPACK_IMPORTED_MODULE_3__.isLogsQuery)(request.targets[0].expr)) {
    return response;
  }
  response.data = response.data.filter((frame) => frame.name !== LOADING_FRAME_NAME);
  if (requestN <= 1) {
    return response;
  }
  const loadingFrame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_11__.arrayToDataFrame)([
    {
      time: partition2[0].from.valueOf(),
      timeEnd: partition2[requestN - 2].to.valueOf(),
      isRegion: true,
      color: "rgba(120, 120, 120, 0.1)"
    }
  ]);
  loadingFrame.name = LOADING_FRAME_NAME;
  loadingFrame.meta = {
    dataTopic: _grafana_data__WEBPACK_IMPORTED_MODULE_12__.DataTopic.Annotations
  };
  response.data.push(loadingFrame);
  return response;
}
function getNextRequestPointers(requests, requestGroup, requestN) {
  for (let i = requestGroup + 1; i < requests.length; i++) {
    const group = requests[i];
    if (group.partition[requestN - 1]) {
      return {
        nextRequestGroup: i,
        nextRequestN: requestN
      };
    }
  }
  return {
    // Find the first group where `[requestN - 1]` is defined
    nextRequestGroup: requests.findIndex((group) => (group == null ? void 0 : group.partition[requestN - 1]) !== void 0),
    nextRequestN: requestN - 1
  };
}
function querySupportsSplitting(query) {
  return query.queryType !== _types__WEBPACK_IMPORTED_MODULE_5__.LokiQueryType.Instant && // Queries with $__range variable should not be split because then the interpolated $__range variable is incorrect
  // because it is interpolated on the backend with the split timeRange
  !(0,_queryUtils__WEBPACK_IMPORTED_MODULE_3__.isQueryWithRangeVariable)(query.expr);
}
function runSplitQuery(datasource, request) {
  const queries = request.targets.filter((query) => !query.hide).filter((query) => query.expr);
  const [nonSplittingQueries, normalQueries] = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.partition)(queries, (query) => !querySupportsSplitting(query));
  const [logQueries, metricQueries] = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.partition)(normalQueries, (query) => (0,_queryUtils__WEBPACK_IMPORTED_MODULE_3__.isLogsQuery)(query.expr));
  request.queryGroupId = (0,uuid__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const oneDayMs = 24 * 60 * 60 * 1e3;
  const rangePartitionedLogQueries = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(
    logQueries,
    (query) => query.splitDuration ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_13__.durationToMilliseconds)((0,_grafana_data__WEBPACK_IMPORTED_MODULE_13__.parseDuration)(query.splitDuration)) : oneDayMs
  );
  const rangePartitionedMetricQueries = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(
    metricQueries,
    (query) => query.splitDuration ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_13__.durationToMilliseconds)((0,_grafana_data__WEBPACK_IMPORTED_MODULE_13__.parseDuration)(query.splitDuration)) : oneDayMs
  );
  const requests = [];
  for (const [chunkRangeMs, queries2] of Object.entries(rangePartitionedLogQueries)) {
    const resolutionPartition = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(queries2, (query) => query.resolution || 1);
    for (const resolution in resolutionPartition) {
      requests.push({
        request: { ...request, targets: resolutionPartition[resolution] },
        partition: partitionTimeRange(true, request.range, request.intervalMs, Number(chunkRangeMs))
      });
    }
  }
  for (const [chunkRangeMs, queries2] of Object.entries(rangePartitionedMetricQueries)) {
    const stepMsPartition = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(
      queries2,
      (query) => calculateStep(request.intervalMs, request.range, query.resolution || 1, query.step)
    );
    for (const stepMs in stepMsPartition) {
      const targets = stepMsPartition[stepMs].map((q) => {
        const { maxLines, ...query } = q;
        return query;
      });
      requests.push({
        request: { ...request, targets },
        partition: partitionTimeRange(false, request.range, Number(stepMs), Number(chunkRangeMs))
      });
    }
  }
  if (nonSplittingQueries.length) {
    requests.push({
      request: { ...request, targets: nonSplittingQueries },
      partition: [request.range]
    });
  }
  const startTime = /* @__PURE__ */ new Date();
  return runSplitGroupedQueries(datasource, requests).pipe(
    (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.tap)((response) => {
      if (response.state === _grafana_data__WEBPACK_IMPORTED_MODULE_8__.LoadingState.Done) {
        (0,_tracking__WEBPACK_IMPORTED_MODULE_4__.trackGroupedQueries)(response, requests, request, startTime, {
          predefinedOperations: datasource.predefinedOperations
        });
      }
    })
  );
}
function calculateStep(intervalMs, range, resolution, step) {
  const interval_regex = /(-?\d+(?:\.\d+)?)(ms|[Mwdhmsy])/;
  if (step == null ? void 0 : step.match(interval_regex)) {
    return _grafana_data__WEBPACK_IMPORTED_MODULE_15__.intervalToMs(step) * resolution;
  }
  const newStep = intervalMs * resolution;
  const safeStep = Math.round((range.to.valueOf() - range.from.valueOf()) / 11e3);
  return Math.max(newStep, safeStep);
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/queryUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHighlighterExpressionsFromQuery: () => (/* binding */ getHighlighterExpressionsFromQuery),
/* harmony export */   getLogQueryFromMetricsQuery: () => (/* binding */ getLogQueryFromMetricsQuery),
/* harmony export */   getLogQueryFromMetricsQueryAtPosition: () => (/* binding */ getLogQueryFromMetricsQueryAtPosition),
/* harmony export */   getLokiQueryFromDataQuery: () => (/* binding */ getLokiQueryFromDataQuery),
/* harmony export */   getLokiQueryType: () => (/* binding */ getLokiQueryType),
/* harmony export */   getNodeFromQuery: () => (/* binding */ getNodeFromQuery),
/* harmony export */   getNodePositionsFromQuery: () => (/* binding */ getNodePositionsFromQuery),
/* harmony export */   getNodesFromQuery: () => (/* binding */ getNodesFromQuery),
/* harmony export */   getNormalizedLokiQuery: () => (/* binding */ getNormalizedLokiQuery),
/* harmony export */   getParserFromQuery: () => (/* binding */ getParserFromQuery),
/* harmony export */   getStreamSelectorsFromQuery: () => (/* binding */ getStreamSelectorsFromQuery),
/* harmony export */   getStringsFromLineFilter: () => (/* binding */ getStringsFromLineFilter),
/* harmony export */   isLogsQuery: () => (/* binding */ isLogsQuery),
/* harmony export */   isLokiQuery: () => (/* binding */ isLokiQuery),
/* harmony export */   isQueryPipelineErrorFiltering: () => (/* binding */ isQueryPipelineErrorFiltering),
/* harmony export */   isQueryWithError: () => (/* binding */ isQueryWithError),
/* harmony export */   isQueryWithLabelFilter: () => (/* binding */ isQueryWithLabelFilter),
/* harmony export */   isQueryWithLabelFormat: () => (/* binding */ isQueryWithLabelFormat),
/* harmony export */   isQueryWithLineFilter: () => (/* binding */ isQueryWithLineFilter),
/* harmony export */   isQueryWithNode: () => (/* binding */ isQueryWithNode),
/* harmony export */   isQueryWithParser: () => (/* binding */ isQueryWithParser),
/* harmony export */   isQueryWithRangeVariable: () => (/* binding */ isQueryWithRangeVariable),
/* harmony export */   obfuscate: () => (/* binding */ obfuscate),
/* harmony export */   parseToNodeNamesArray: () => (/* binding */ parseToNodeNamesArray),
/* harmony export */   requestSupportsSplitting: () => (/* binding */ requestSupportsSplitting)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/lezer-logql/index.es.js");
/* harmony import */ var _modifyQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/modifyQuery.ts");
/* harmony import */ var _querybuilder_parsingUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/parsingUtils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/loki/types.ts");






function getHighlighterExpressionsFromQuery(input = "") {
  var _a, _b;
  const results = [];
  const filters = getNodesFromQuery(input, [_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.LineFilter]);
  for (const filter of filters) {
    const pipeExact = (_a = filter.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.Filter)) == null ? void 0 : _a.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.PipeExact);
    const pipeMatch = (_b = filter.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.Filter)) == null ? void 0 : _b.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.PipeMatch);
    const strings = getStringsFromLineFilter(filter);
    if (!pipeExact && !pipeMatch || !strings.length) {
      continue;
    }
    for (const string of strings) {
      const filterTerm = input.substring(string.from, string.to).trim();
      const backtickedTerm = filterTerm[0] === "`";
      const unwrappedFilterTerm = filterTerm.substring(1, filterTerm.length - 1);
      if (!unwrappedFilterTerm) {
        continue;
      }
      let resultTerm = "";
      if (pipeMatch) {
        resultTerm = backtickedTerm ? unwrappedFilterTerm : unwrappedFilterTerm.replace(/\\\\/g, "\\");
      } else {
        resultTerm = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.escapeRegExp)(unwrappedFilterTerm);
      }
      if (resultTerm) {
        results.push(resultTerm);
      }
    }
  }
  return results;
}
function getStringsFromLineFilter(filter) {
  const nodes = [];
  let node = filter;
  do {
    const string = node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.String);
    if (string && !node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.FilterOp)) {
      nodes.push(string);
    }
    node = node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.OrFilter);
  } while (node != null);
  return nodes;
}
function getNormalizedLokiQuery(query) {
  const queryType = getLokiQueryType(query);
  const { instant, range, ...rest } = query;
  return { ...rest, queryType };
}
function getLokiQueryType(query) {
  const { queryType } = query;
  const hasValidQueryType = queryType === _types__WEBPACK_IMPORTED_MODULE_4__.LokiQueryType.Range || queryType === _types__WEBPACK_IMPORTED_MODULE_4__.LokiQueryType.Instant || queryType === _types__WEBPACK_IMPORTED_MODULE_4__.LokiQueryType.Stream;
  if (hasValidQueryType) {
    return queryType;
  }
  if (query.instant === true) {
    return _types__WEBPACK_IMPORTED_MODULE_4__.LokiQueryType.Instant;
  }
  return _types__WEBPACK_IMPORTED_MODULE_4__.LokiQueryType.Range;
}
const tagsToObscure = ["String", "Identifier", "LineComment", "Number"];
const partsToKeep = ["__error__", "__interval", "__interval_ms", "__auto"];
function obfuscate(query) {
  let obfuscatedQuery = query;
  const tree = _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.parser.parse(query);
  tree.iterate({
    enter: ({ name, from, to }) => {
      const queryPart = query.substring(from, to);
      if (tagsToObscure.includes(name) && !partsToKeep.includes(queryPart)) {
        obfuscatedQuery = obfuscatedQuery.replace(queryPart, name);
      }
    }
  });
  return obfuscatedQuery;
}
function parseToNodeNamesArray(query) {
  const queryParts = [];
  const tree = _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.parser.parse(query);
  tree.iterate({
    enter: ({ name }) => {
      queryParts.push(name);
    }
  });
  return queryParts;
}
function isQueryWithNode(query, nodeType) {
  let isQueryWithNode2 = false;
  const tree = _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.parser.parse(query);
  tree.iterate({
    enter: ({ type }) => {
      if (type.id === nodeType) {
        isQueryWithNode2 = true;
        return false;
      }
    }
  });
  return isQueryWithNode2;
}
function getNodesFromQuery(query, nodeTypes) {
  const nodes = [];
  const tree = _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.parser.parse(query);
  tree.iterate({
    enter: (node) => {
      if (nodeTypes === void 0 || nodeTypes.includes(node.type.id)) {
        nodes.push(node.node);
      }
    }
  });
  return nodes;
}
function getNodePositionsFromQuery(query, nodeTypes) {
  const positions = [];
  const tree = _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.parser.parse(query);
  tree.iterate({
    enter: (node) => {
      if (nodeTypes === void 0 || nodeTypes.includes(node.type.id)) {
        positions.push(_modifyQuery__WEBPACK_IMPORTED_MODULE_2__.NodePosition.fromNode(node.node));
      }
    }
  });
  return positions;
}
function getNodeFromQuery(query, nodeType) {
  const nodes = getNodesFromQuery(query, [nodeType]);
  return nodes.length > 0 ? nodes[0] : void 0;
}
function isQueryWithError(query) {
  return isQueryWithNode(query, _querybuilder_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.ErrorId);
}
function isLogsQuery(query) {
  return !isQueryWithNode(query, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.MetricExpr);
}
function isQueryWithParser(query) {
  const nodes = getNodesFromQuery(query, [_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.LabelParser, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.JsonExpressionParser, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.Logfmt]);
  const parserCount = nodes.length;
  return { queryWithParser: parserCount > 0, parserCount };
}
function getParserFromQuery(query) {
  const parsers = getNodesFromQuery(query, [_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.LabelParser, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.Json, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.Logfmt]);
  return parsers.length > 0 ? query.substring(parsers[0].from, parsers[0].to).trim() : void 0;
}
function isQueryPipelineErrorFiltering(query) {
  var _a;
  const labels = getNodesFromQuery(query, [_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.LabelFilter]);
  for (const node of labels) {
    const label = (_a = node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.Matcher)) == null ? void 0 : _a.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.Identifier);
    if (label) {
      const labelName = query.substring(label.from, label.to);
      if (labelName === "__error__") {
        return true;
      }
    }
  }
  return false;
}
function isQueryWithLabelFormat(query) {
  return isQueryWithNode(query, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.LabelFormatExpr);
}
function getLogQueryFromMetricsQuery(query) {
  if (isLogsQuery(query)) {
    return query;
  }
  const selectorNode = getNodeFromQuery(query, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.Selector);
  if (!selectorNode) {
    return "";
  }
  const selector = query.substring(selectorNode.from, selectorNode.to);
  const pipelineExprNode = getNodeFromQuery(query, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.PipelineExpr);
  const pipelineExpr = pipelineExprNode ? query.substring(pipelineExprNode.from, pipelineExprNode.to) : "";
  return "".concat(selector, " ").concat(pipelineExpr).trim();
}
function getLogQueryFromMetricsQueryAtPosition(query, position) {
  if (isLogsQuery(query)) {
    return query;
  }
  const metricQuery = getNodesFromQuery(query, [_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.MetricExpr]).reverse().find((node) => node.from <= position && node.to >= position);
  if (!metricQuery) {
    return "";
  }
  return getLogQueryFromMetricsQuery(query.substring(metricQuery.from, metricQuery.to));
}
function isQueryWithLabelFilter(query) {
  return isQueryWithNode(query, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.LabelFilter);
}
function isQueryWithLineFilter(query) {
  return isQueryWithNode(query, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.LineFilter);
}
function isQueryWithRangeVariable(query) {
  const rangeNodes = getNodesFromQuery(query, [_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_1__.Range]);
  for (const node of rangeNodes) {
    if (query.substring(node.from, node.to).match(/\[\$__range(_s|_ms)?/)) {
      return true;
    }
  }
  return false;
}
function getStreamSelectorsFromQuery(query) {
  const labelMatcherPositions = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_2__.getStreamSelectorPositions)(query);
  const labelMatchers = labelMatcherPositions.map((labelMatcher) => {
    return query.slice(labelMatcher.from, labelMatcher.to);
  });
  return labelMatchers;
}
function requestSupportsSplitting(allQueries) {
  const queries = allQueries.filter((query) => !query.hide).filter((query) => !query.refId.includes("do-not-chunk")).filter((query) => query.expr);
  return queries.length > 0;
}
const isLokiQuery = (query) => {
  if (!query) {
    return false;
  }
  return "expr" in query && query.expr !== void 0;
};
const getLokiQueryFromDataQuery = (query) => {
  if (!query || !isLokiQuery(query)) {
    return void 0;
  }
  return query;
};


/***/ }),

/***/ "./public/app/plugins/datasource/loki/querybuilder/LokiQueryModeller.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LokiQueryModeller: () => (/* binding */ LokiQueryModeller),
/* harmony export */   lokiQueryModeller: () => (/* binding */ lokiQueryModeller)
/* harmony export */ });
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/QueryModellerBase.js");
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/operations.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/types.ts");




class LokiQueryModeller extends _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.QueryModellerBase {
  constructor() {
    super(_operations__WEBPACK_IMPORTED_MODULE_0__.operationDefinitions, "<expr>");
    this.setOperationCategories([
      _types__WEBPACK_IMPORTED_MODULE_1__.LokiVisualQueryOperationCategory.Aggregations,
      _types__WEBPACK_IMPORTED_MODULE_1__.LokiVisualQueryOperationCategory.RangeFunctions,
      _types__WEBPACK_IMPORTED_MODULE_1__.LokiVisualQueryOperationCategory.Formats,
      _types__WEBPACK_IMPORTED_MODULE_1__.LokiVisualQueryOperationCategory.BinaryOps,
      _types__WEBPACK_IMPORTED_MODULE_1__.LokiVisualQueryOperationCategory.LabelFilters,
      _types__WEBPACK_IMPORTED_MODULE_1__.LokiVisualQueryOperationCategory.LineFilters
    ]);
  }
  renderOperations(queryString, operations) {
    for (const operation of operations) {
      const def = this.operationsRegistry.getIfExists(operation.id);
      if (!def) {
        console.error("Could not find operation ".concat(operation.id, " in the registry"));
        continue;
      }
      queryString = def.renderer(operation, def, queryString);
    }
    return queryString;
  }
  renderBinaryQueries(queryString, binaryQueries) {
    if (binaryQueries) {
      for (const binQuery of binaryQueries) {
        queryString = "".concat(this.renderBinaryQuery(queryString, binQuery));
      }
    }
    return queryString;
  }
  renderBinaryQuery(leftOperand, binaryQuery) {
    let result = leftOperand + " ".concat(binaryQuery.operator, " ");
    if (binaryQuery.vectorMatches) {
      result += "".concat(binaryQuery.vectorMatchesType, "(").concat(binaryQuery.vectorMatches, ") ");
    }
    return result + this.renderQuery(binaryQuery.query, true);
  }
  renderLabels(labels) {
    if (labels.length === 0) {
      return "{}";
    }
    let expr = "{";
    for (const filter of labels) {
      if (expr !== "{") {
        expr += ", ";
      }
      expr += "".concat(filter.label).concat(filter.op, '"').concat(filter.value, '"');
    }
    return expr + "}";
  }
  renderQuery(query, nested) {
    var _a;
    let queryString = this.renderLabels(query.labels);
    queryString = this.renderOperations(queryString, query.operations);
    if (!nested && this.hasBinaryOp(query) && Boolean((_a = query.binaryQueries) == null ? void 0 : _a.length)) {
      queryString = "(".concat(queryString, ")");
    }
    queryString = this.renderBinaryQueries(queryString, query.binaryQueries);
    return queryString;
  }
  getQueryPatterns() {
    return [
      {
        name: "Parse log lines with logfmt parser",
        type: _types__WEBPACK_IMPORTED_MODULE_1__.LokiQueryPatternType.Log,
        // {} | logfmt | __error__=``
        operations: [
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.Logfmt, params: [] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LabelFilterNoErrors, params: [] }
        ]
      },
      {
        name: "Parse log lines with JSON parser",
        type: _types__WEBPACK_IMPORTED_MODULE_1__.LokiQueryPatternType.Log,
        // {} | json | __error__=``
        operations: [
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.Json, params: [] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LabelFilterNoErrors, params: [] }
        ]
      },
      {
        name: "Filter log line and parse with logfmt parser",
        type: _types__WEBPACK_IMPORTED_MODULE_1__.LokiQueryPatternType.Log,
        // {} |= `` | logfmt | __error__=``
        operations: [
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LineContains, params: [""] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.Logfmt, params: [] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LabelFilterNoErrors, params: [] }
        ]
      },
      {
        name: "Filter log lines and parse with json parser",
        type: _types__WEBPACK_IMPORTED_MODULE_1__.LokiQueryPatternType.Log,
        // {} |= `` | json | __error__=``
        operations: [
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LineContains, params: [""] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.Json, params: [] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LabelFilterNoErrors, params: [] }
        ]
      },
      {
        name: "Parse log line with logfmt parser and use label filter",
        type: _types__WEBPACK_IMPORTED_MODULE_1__.LokiQueryPatternType.Log,
        // {} |= `` | logfmt | __error__=`` | label=`value`
        operations: [
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LineContains, params: [""] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.Logfmt, params: [] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LabelFilterNoErrors, params: [] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LabelFilter, params: ["label", "=", "value"] }
        ]
      },
      {
        name: "Parse log lines with nested json",
        type: _types__WEBPACK_IMPORTED_MODULE_1__.LokiQueryPatternType.Log,
        // {} |= `` | json | line_format `{{ .message}}` | json
        operations: [
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LineContains, params: [""] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.Json, params: [] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LabelFilterNoErrors, params: [] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LineFormat, params: ["{{.message}}"] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.Json, params: [] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LabelFilterNoErrors, params: [] }
        ]
      },
      {
        name: "Reformat log lines",
        type: _types__WEBPACK_IMPORTED_MODULE_1__.LokiQueryPatternType.Log,
        // {} |= `` | logfmt | line_format `{{.message}}`
        operations: [
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LineContains, params: [""] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.Logfmt, params: [] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LabelFilterNoErrors, params: [] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LineFormat, params: ["{{.message}}"] }
        ]
      },
      {
        name: "Rename lvl label to level",
        type: _types__WEBPACK_IMPORTED_MODULE_1__.LokiQueryPatternType.Log,
        // {} |= `` | logfmt | label_format level=lvl
        operations: [
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LineContains, params: [""] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.Logfmt, params: [] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LabelFilterNoErrors, params: [] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LabelFormat, params: ["lvl", "level"] }
        ]
      },
      {
        name: "Query on value inside a log line",
        type: _types__WEBPACK_IMPORTED_MODULE_1__.LokiQueryPatternType.Metric,
        // sum(sum_over_time({ | logfmt | __error__=`` | unwrap | __error__=`` [$__auto]))
        operations: [
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LineContains, params: [""] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.Logfmt, params: [] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LabelFilterNoErrors, params: [] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.Unwrap, params: [""] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LabelFilterNoErrors, params: [] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.SumOverTime, params: ["$__auto"] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.Sum, params: [] }
        ]
      },
      {
        name: "Total requests per label of streams",
        type: _types__WEBPACK_IMPORTED_MODULE_1__.LokiQueryPatternType.Metric,
        // sum by() (count_over_time({}[$__auto)
        operations: [
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LineContains, params: [""] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.CountOverTime, params: ["$__auto"] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.Sum, params: [] }
        ]
      },
      {
        name: "Total requests per parsed label or label of streams",
        type: _types__WEBPACK_IMPORTED_MODULE_1__.LokiQueryPatternType.Metric,
        // sum by() (count_over_time({}| logfmt | __error__=`` [$__auto))
        operations: [
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LineContains, params: [""] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.Logfmt, params: [] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LabelFilterNoErrors, params: [] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.CountOverTime, params: ["$__auto"] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.Sum, params: [] }
        ]
      },
      {
        name: "Bytes used by a log stream",
        type: _types__WEBPACK_IMPORTED_MODULE_1__.LokiQueryPatternType.Metric,
        // bytes_over_time({}[$__auto])
        operations: [
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LineContains, params: [""] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.BytesOverTime, params: ["$__auto"] }
        ]
      },
      {
        name: "Count of log lines per stream",
        type: _types__WEBPACK_IMPORTED_MODULE_1__.LokiQueryPatternType.Metric,
        // count_over_time({}[$__auto])
        operations: [
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LineContains, params: [""] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.CountOverTime, params: ["$__auto"] }
        ]
      },
      {
        name: "Top N results by label or parsed label",
        type: _types__WEBPACK_IMPORTED_MODULE_1__.LokiQueryPatternType.Metric,
        // topk(10, sum by () (count_over_time({} | logfmt | __error__=`` [$__auto])))
        operations: [
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.Logfmt, params: [] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LabelFilterNoErrors, params: [] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.CountOverTime, params: ["$__auto"] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.Sum, params: [] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.TopK, params: [10] }
        ]
      },
      {
        name: "Extracted quantile",
        type: _types__WEBPACK_IMPORTED_MODULE_1__.LokiQueryPatternType.Metric,
        // quantile_over_time(0.5,{} | logfmt | unwrap latency[$__auto]) by ()
        operations: [
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.Logfmt, params: [] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LabelFilterNoErrors, params: [] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.Unwrap, params: ["latency"] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LabelFilterNoErrors, params: [] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.QuantileOverTime, params: ["$__auto", 0.5] },
          { id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.Sum, params: [] }
        ]
      }
    ];
  }
}
const lokiQueryModeller = new LokiQueryModeller();


/***/ }),

/***/ "./public/app/plugins/datasource/loki/querybuilder/binaryScalarOperations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   binaryScalarDefs: () => (/* binding */ binaryScalarDefs),
/* harmony export */   binaryScalarOperations: () => (/* binding */ binaryScalarOperations)
/* harmony export */ });
/* harmony import */ var _operationUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/operationUtils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/types.ts");



const binaryScalarDefs = [
  {
    id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.Addition,
    name: "Add scalar",
    sign: "+"
  },
  {
    id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.Subtraction,
    name: "Subtract scalar",
    sign: "-"
  },
  {
    id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.MultiplyBy,
    name: "Multiply by scalar",
    sign: "*"
  },
  {
    id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.DivideBy,
    name: "Divide by scalar",
    sign: "/"
  },
  {
    id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.Modulo,
    name: "Modulo by scalar",
    sign: "%"
  },
  {
    id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.Exponent,
    name: "Exponent",
    sign: "^"
  },
  {
    id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.EqualTo,
    name: "Equal to",
    sign: "==",
    comparison: true
  },
  {
    id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.NotEqualTo,
    name: "Not equal to",
    sign: "!=",
    comparison: true
  },
  {
    id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.GreaterThan,
    name: "Greater than",
    sign: ">",
    comparison: true
  },
  {
    id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LessThan,
    name: "Less than",
    sign: "<",
    comparison: true
  },
  {
    id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.GreaterOrEqual,
    name: "Greater or equal to",
    sign: ">=",
    comparison: true
  },
  {
    id: _types__WEBPACK_IMPORTED_MODULE_1__.LokiOperationId.LessOrEqual,
    name: "Less or equal to",
    sign: "<=",
    comparison: true
  }
];
const binaryScalarOperations = binaryScalarDefs.map((opDef) => {
  const params = [{ name: "Value", type: "number" }];
  let defaultParams = [2];
  if (opDef.comparison) {
    params.push({
      name: "Bool",
      type: "boolean",
      description: "If checked comparison will return 0 or 1 for the value rather than filtering."
    });
    defaultParams = [2, false];
  }
  return {
    id: opDef.id,
    name: opDef.name,
    params,
    defaultParams,
    alternativesKey: "binary scalar operations",
    category: _types__WEBPACK_IMPORTED_MODULE_1__.LokiVisualQueryOperationCategory.BinaryOps,
    renderer: getSimpleBinaryRenderer(opDef.sign),
    addOperationHandler: _operationUtils__WEBPACK_IMPORTED_MODULE_0__.defaultAddOperationHandler
  };
});
function getSimpleBinaryRenderer(operator) {
  return function binaryRenderer(model, def, innerExpr) {
    let param = model.params[0];
    let bool = "";
    if (model.params.length === 2) {
      bool = model.params[1] ? " bool" : "";
    }
    return "".concat(innerExpr, " ").concat(operator).concat(bool, " ").concat(param);
  };
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/querybuilder/components/LabelBrowserModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LabelBrowserModal: () => (/* binding */ LabelBrowserModal)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_o11y_ds_frontend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-o11y-ds-frontend/src/LocalStorageValueProvider/LocalStorageValueProvider.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _components_LokiLabelBrowser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/components/LokiLabelBrowser.tsx");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;






const LabelBrowserModal = (props) => {
  const { isOpen, onClose, datasource, app, timeRange } = props;
  const [labelsLoaded, setLabelsLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [hasLogLabels, setHasLogLabels] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const LAST_USED_LABELS_KEY = "grafana.datasources.loki.browser.labels";
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!isOpen) {
      return;
    }
    datasource.languageProvider.fetchLabels({ timeRange }).then((labels) => {
      setLabelsLoaded(true);
      setHasLogLabels(labels.length > 0);
    });
  }, [datasource, isOpen, timeRange]);
  const changeQuery = (value) => {
    const { query, onChange: onChange2, onRunQuery } = props;
    const nextQuery = { ...query, expr: value };
    onChange2(nextQuery);
    onRunQuery();
  };
  const onChange = (selector) => {
    changeQuery(selector);
    onClose();
  };
  const reportInteractionAndClose = () => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)("grafana_loki_label_browser_closed", {
      app,
      closeType: "modalClose"
    });
    onClose();
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal, { isOpen, title: "Label browser", onDismiss: reportInteractionAndClose, className: styles.modal }, !labelsLoaded && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.LoadingPlaceholder, { text: "Loading labels..." }), labelsLoaded && !hasLogLabels && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "No labels found."), labelsLoaded && hasLogLabels && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_o11y_ds_frontend__WEBPACK_IMPORTED_MODULE_7__.LocalStorageValueProvider, { storageKey: LAST_USED_LABELS_KEY, defaultValue: [] }, (lastUsedLabels, onLastUsedLabelsSave, onLastUsedLabelsDelete) => {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _components_LokiLabelBrowser__WEBPACK_IMPORTED_MODULE_2__.LokiLabelBrowser,
      {
        languageProvider: datasource.languageProvider,
        onChange,
        lastUsedLabels,
        storeLastUsedLabels: onLastUsedLabelsSave,
        deleteLastUsedLabels: onLastUsedLabelsDelete,
        app,
        timeRange
      }
    );
  }));
};
const getStyles = (theme) => {
  return {
    modal: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n      width: 85vw;\n      ", " {\n        width: 100%;\n      }\n    "])), theme.breakpoints.down("md"))
  };
};


/***/ }),

/***/ "./public/app/plugins/datasource/loki/querybuilder/components/LabelParamEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LabelParamEditor: () => (/* binding */ LabelParamEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _operationUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/operationUtils.ts");




const LabelParamEditor = ({
  onChange,
  index,
  operationId,
  value,
  query,
  datasource,
  queryModeller
}) => {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select,
    {
      inputId: (0,_operationUtils__WEBPACK_IMPORTED_MODULE_1__.getOperationParamId)(operationId, index),
      autoFocus: value === "",
      openMenuOnFocus: true,
      onOpenMenu: async () => {
        setState({ isLoading: true });
        const options = await loadGroupByLabels(query, datasource, queryModeller);
        setState({ options, isLoading: void 0 });
      },
      isLoading: state.isLoading,
      allowCustomValue: true,
      noOptionsMessage: "No labels found",
      loadingMessage: "Loading labels",
      options: state.options,
      value: toOption(value),
      onChange: (value2) => onChange(index, value2.value)
    }
  );
};
async function loadGroupByLabels(query, datasource, queryModeller) {
  let labels = query.labels;
  const queryString = queryModeller.renderLabels(labels);
  const result = await datasource.languageProvider.fetchLabels({ streamSelector: queryString });
  return result.map((x) => ({
    label: x,
    value: x
  }));
}
const toOption = (value) => ({ label: value == null ? void 0 : value.toString(), value });


/***/ }),

/***/ "./public/app/plugins/datasource/loki/querybuilder/components/LokiQueryBuilder.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LokiQueryBuilder: () => (/* binding */ LokiQueryBuilder),
/* harmony export */   TIME_SPAN_TO_TRIGGER_SAMPLES: () => (/* binding */ TIME_SPAN_TO_TRIGGER_SAMPLES)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/react-use/esm/usePrevious.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-data/src/types/time.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/QueryEditor/EditorRow.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/LabelFilters.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/OperationExplainedBox.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/RawQuery.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/OperationsEditorRow.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/OperationList.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/QueryBuilderHints.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/OperationListExplained.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _components_LokiQueryEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/components/LokiQueryEditor.tsx");
/* harmony import */ var _languageUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/languageUtils.ts");
/* harmony import */ var _syntax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/loki/syntax.ts");
/* harmony import */ var _LokiQueryModeller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/LokiQueryModeller.ts");
/* harmony import */ var _operationUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/operationUtils.ts");
/* harmony import */ var _parsing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/parsing.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/types.ts");
/* harmony import */ var _LokiQueryBuilderExplained__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/components/LokiQueryBuilderExplained.tsx");
/* harmony import */ var _NestedQueryList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/components/NestedQueryList.tsx");
















const TIME_SPAN_TO_TRIGGER_SAMPLES = 5 * 60 * 1e3;
const LokiQueryBuilder = react__WEBPACK_IMPORTED_MODULE_1___default().memo(
  ({ datasource, query, onChange, onRunQuery, showExplain, timeRange }) => {
    const [sampleData, setSampleData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [highlightedOp, setHighlightedOp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(void 0);
    const prevQuery = (0,react_use__WEBPACK_IMPORTED_MODULE_11__["default"])(query);
    const prevTimeRange = (0,react_use__WEBPACK_IMPORTED_MODULE_11__["default"])(timeRange);
    const onChangeLabels = (labels) => {
      onChange({ ...query, labels });
    };
    const withTemplateVariableOptions = async (optionsPromise) => {
      const options = await optionsPromise;
      return [...datasource.getVariables(), ...options].map((value) => ({ label: value, value }));
    };
    const onGetLabelNames = async (forLabel) => {
      const labelsToConsider = query.labels.filter((x) => x !== forLabel);
      const hasEqualityOperation = labelsToConsider.find(
        (filter) => filter.op === "=" || filter.op === "=~" && new RegExp(filter.value).test("") === false
      );
      if (labelsToConsider.length === 0 || !hasEqualityOperation) {
        return await datasource.languageProvider.fetchLabels({ timeRange });
      }
      const streamSelector = _LokiQueryModeller__WEBPACK_IMPORTED_MODULE_5__.lokiQueryModeller.renderLabels(labelsToConsider);
      const possibleLabelNames = await datasource.languageProvider.fetchLabels({
        streamSelector,
        timeRange
      });
      const labelsNamesToConsider = labelsToConsider.map((l) => l.label);
      return possibleLabelNames.filter((label) => !labelsNamesToConsider.includes(label)).sort();
    };
    const onGetLabelValues = async (forLabel) => {
      if (!forLabel.label) {
        return [];
      }
      let values;
      const labelsToConsider = query.labels.filter((x) => x !== forLabel);
      const hasEqualityOperation = labelsToConsider.find(
        (filter) => filter.op === "=" || filter.op === "=~" && new RegExp(filter.value).test("") === false
      );
      if (labelsToConsider.length === 0 || !hasEqualityOperation) {
        values = await datasource.languageProvider.fetchLabelValues(forLabel.label, { timeRange });
      } else {
        const streamSelector = _LokiQueryModeller__WEBPACK_IMPORTED_MODULE_5__.lokiQueryModeller.renderLabels(labelsToConsider);
        values = await datasource.languageProvider.fetchLabelValues(forLabel.label, {
          streamSelector,
          timeRange
        });
      }
      return values ? values.map((v) => (0,_languageUtils__WEBPACK_IMPORTED_MODULE_3__.escapeLabelValueInSelector)(v, forLabel.op)) : [];
    };
    const labelFilterRequired = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
      const { labels, operations: op } = query;
      if (!labels.length && op.length) {
        if (op.length === 1 && op[0].id === _types__WEBPACK_IMPORTED_MODULE_8__.LokiOperationId.LineContains && op[0].params[0] === "") {
          return false;
        }
        return true;
      }
      return false;
    }, [query]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
      const onGetSampleData = async () => {
        const lokiQuery = { expr: _LokiQueryModeller__WEBPACK_IMPORTED_MODULE_5__.lokiQueryModeller.renderQuery(query), refId: "data-samples" };
        const range = timeRange != null ? timeRange : (0,_grafana_data__WEBPACK_IMPORTED_MODULE_12__.getDefaultTimeRange)();
        const series = await datasource.getDataSamples(lokiQuery, range);
        const sampleData2 = { series, state: _grafana_data__WEBPACK_IMPORTED_MODULE_13__.LoadingState.Done, timeRange: range };
        setSampleData(sampleData2);
      };
      const updateBasedOnChangedTimeRange = prevTimeRange && timeRange && (Math.abs(timeRange.to.valueOf() - prevTimeRange.to.valueOf()) > TIME_SPAN_TO_TRIGGER_SAMPLES || Math.abs(timeRange.from.valueOf() - prevTimeRange.from.valueOf()) > TIME_SPAN_TO_TRIGGER_SAMPLES);
      const updateBasedOnChangedQuery = !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(prevQuery, query);
      if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_14__.config.featureToggles.lokiQueryHints && (updateBasedOnChangedTimeRange || updateBasedOnChangedQuery)) {
        onGetSampleData().catch(console.error);
      }
    }, [datasource, query, timeRange, prevQuery, prevTimeRange]);
    const lang = { grammar: _syntax__WEBPACK_IMPORTED_MODULE_4__["default"], name: "logql" };
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "data-testid": _components_LokiQueryEditor__WEBPACK_IMPORTED_MODULE_2__.testIds.editor }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_15__.EditorRow, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_experimental__WEBPACK_IMPORTED_MODULE_16__.LabelFilters,
      {
        onGetLabelNames: (forLabel) => withTemplateVariableOptions(onGetLabelNames(forLabel)),
        onGetLabelValues: (forLabel) => withTemplateVariableOptions(onGetLabelValues(forLabel)),
        labelsFilters: query.labels,
        onChange: onChangeLabels,
        labelFilterRequired
      }
    )), showExplain && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_experimental__WEBPACK_IMPORTED_MODULE_17__.OperationExplainedBox,
      {
        stepNumber: 1,
        title: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_18__.RawQuery, { query: "".concat(_LokiQueryModeller__WEBPACK_IMPORTED_MODULE_5__.lokiQueryModeller.renderLabels(query.labels)), language: lang })
      },
      _LokiQueryBuilderExplained__WEBPACK_IMPORTED_MODULE_9__.EXPLAIN_LABEL_FILTER_CONTENT
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_19__.OperationsEditorRow, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_experimental__WEBPACK_IMPORTED_MODULE_20__.OperationList,
      {
        queryModeller: _LokiQueryModeller__WEBPACK_IMPORTED_MODULE_5__.lokiQueryModeller,
        query,
        onChange,
        onRunQuery,
        datasource,
        highlightedOp,
        isConflictingOperation: (operation, otherOperations) => operation.id === _types__WEBPACK_IMPORTED_MODULE_8__.LokiOperationId.LabelFilter && (0,_operationUtils__WEBPACK_IMPORTED_MODULE_6__.isConflictingFilter)(operation, otherOperations)
      }
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_experimental__WEBPACK_IMPORTED_MODULE_21__.QueryBuilderHints,
      {
        datasource,
        query,
        onChange,
        data: sampleData,
        queryModeller: _LokiQueryModeller__WEBPACK_IMPORTED_MODULE_5__.lokiQueryModeller,
        buildVisualQueryFromString: _parsing__WEBPACK_IMPORTED_MODULE_7__.buildVisualQueryFromString,
        buildDataQueryFromQueryString: (queryString) => ({ expr: queryString, refId: "hints" }),
        buildQueryStringFromDataQuery: (query2) => query2.expr
      }
    )), showExplain && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_experimental__WEBPACK_IMPORTED_MODULE_22__.OperationListExplained,
      {
        stepNumber: 2,
        queryModeller: _LokiQueryModeller__WEBPACK_IMPORTED_MODULE_5__.lokiQueryModeller,
        query,
        language: lang,
        onMouseEnter: (op) => {
          setHighlightedOp(op);
        },
        onMouseLeave: () => {
          setHighlightedOp(void 0);
        }
      }
    ), query.binaryQueries && query.binaryQueries.length > 0 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _NestedQueryList__WEBPACK_IMPORTED_MODULE_10__.NestedQueryList,
      {
        query,
        datasource,
        onChange,
        onRunQuery,
        showExplain
      }
    ));
  }
);
LokiQueryBuilder.displayName = "LokiQueryBuilder";


/***/ }),

/***/ "./public/app/plugins/datasource/loki/querybuilder/components/LokiQueryBuilderContainer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LokiQueryBuilderContainer: () => (/* binding */ LokiQueryBuilderContainer)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LokiQueryEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/components/LokiQueryEditor.tsx");
/* harmony import */ var _LokiQueryModeller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/LokiQueryModeller.ts");
/* harmony import */ var _parsing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/parsing.ts");
/* harmony import */ var _LokiQueryBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/components/LokiQueryBuilder.tsx");
/* harmony import */ var _QueryPreview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/components/QueryPreview.tsx");








function LokiQueryBuilderContainer(props) {
  const { query, onChange, onRunQuery, datasource, showExplain, timeRange } = props;
  const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(stateSlice.reducer, {
    expr: query.expr,
    // Use initial visual query only if query.expr is empty string
    visQuery: query.expr === "" ? {
      labels: [],
      operations: [{ id: "__line_contains", params: [""] }]
    } : void 0
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch(exprChanged(query.expr));
  }, [query.expr]);
  const onVisQueryChange = (visQuery) => {
    const expr = _LokiQueryModeller__WEBPACK_IMPORTED_MODULE_2__.lokiQueryModeller.renderQuery(visQuery);
    dispatch(visualQueryChange({ visQuery, expr }));
    onChange({ ...props.query, expr });
  };
  if (!state.visQuery) {
    return null;
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _LokiQueryBuilder__WEBPACK_IMPORTED_MODULE_4__.LokiQueryBuilder,
    {
      query: state.visQuery,
      datasource,
      onChange: onVisQueryChange,
      onRunQuery,
      showExplain,
      "data-testid": _components_LokiQueryEditor__WEBPACK_IMPORTED_MODULE_1__.testIds.editor,
      timeRange
    }
  ), query.expr !== "" && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_QueryPreview__WEBPACK_IMPORTED_MODULE_5__.QueryPreview, { query: query.expr }));
}
const initialState = { expr: "" };
const stateSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__.createSlice)({
  name: "loki-builder-container",
  initialState,
  reducers: {
    visualQueryChange: (state, action) => {
      state.expr = action.payload.expr;
      state.visQuery = action.payload.visQuery;
    },
    exprChanged: (state, action) => {
      if (!state.visQuery || state.expr !== action.payload) {
        state.expr = action.payload;
        const parseResult = (0,_parsing__WEBPACK_IMPORTED_MODULE_3__.buildVisualQueryFromString)(action.payload);
        state.visQuery = parseResult.query;
      }
    }
  }
});
const { visualQueryChange, exprChanged } = stateSlice.actions;


/***/ }),

/***/ "./public/app/plugins/datasource/loki/querybuilder/components/LokiQueryBuilderExplained.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXPLAIN_LABEL_FILTER_CONTENT: () => (/* binding */ EXPLAIN_LABEL_FILTER_CONTENT),
/* harmony export */   LokiQueryBuilderExplained: () => (/* binding */ LokiQueryBuilderExplained)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/OperationExplainedBox.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/RawQuery.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/OperationListExplained.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _syntax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/syntax.ts");
/* harmony import */ var _LokiQueryModeller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/LokiQueryModeller.ts");
/* harmony import */ var _parsing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/parsing.ts");







const EXPLAIN_LABEL_FILTER_CONTENT = "Fetch all log lines matching label filters.";
const LokiQueryBuilderExplained = react__WEBPACK_IMPORTED_MODULE_0___default().memo(({ query }) => {
  const visQuery = (0,_parsing__WEBPACK_IMPORTED_MODULE_3__.buildVisualQueryFromString)(query || "").query;
  const lang = { grammar: _syntax__WEBPACK_IMPORTED_MODULE_1__.lokiGrammar, name: "lokiql" };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { gap: 0, direction: "column" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_experimental__WEBPACK_IMPORTED_MODULE_5__.OperationExplainedBox,
    {
      stepNumber: 1,
      title: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_6__.RawQuery, { query: "".concat(_LokiQueryModeller__WEBPACK_IMPORTED_MODULE_2__.lokiQueryModeller.renderLabels(visQuery.labels)), language: lang })
    },
    EXPLAIN_LABEL_FILTER_CONTENT
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_experimental__WEBPACK_IMPORTED_MODULE_7__.OperationListExplained,
    {
      stepNumber: 2,
      queryModeller: _LokiQueryModeller__WEBPACK_IMPORTED_MODULE_2__.lokiQueryModeller,
      query: visQuery,
      language: lang
    }
  ));
});
LokiQueryBuilderExplained.displayName = "LokiQueryBuilderExplained";


/***/ }),

/***/ "./public/app/plugins/datasource/loki/querybuilder/components/LokiQueryBuilderOptions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LokiQueryBuilderOptions: () => (/* binding */ LokiQueryBuilderOptions)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/datetime/durationutil.ts");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/QueryEditor/EditorRow.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/QueryOptionGroup.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/QueryEditor/EditorField.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Input/AutoSizeInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _components_LokiOptionFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/components/LokiOptionFields.tsx");
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/queryUtils.ts");









const LokiQueryBuilderOptions = react__WEBPACK_IMPORTED_MODULE_1___default().memo(
  ({ app, query, onChange, onRunQuery, maxLines, queryStats }) => {
    var _a, _b, _c, _d;
    const [splitDurationValid, setSplitDurationValid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const onQueryTypeChange = (value) => {
      onChange({ ...query, queryType: value });
      onRunQuery();
    };
    const onResolutionChange = (option) => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)("grafana_loki_resolution_clicked", {
        app,
        resolution: option.value
      });
      onChange({ ...query, resolution: option.value });
      onRunQuery();
    };
    const onChunkRangeChange = (evt) => {
      const value = evt.currentTarget.value;
      if (!(0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.isValidDuration)(value)) {
        setSplitDurationValid(false);
        return;
      }
      setSplitDurationValid(true);
      onChange({ ...query, splitDuration: value });
      onRunQuery();
    };
    const onLegendFormatChanged = (evt) => {
      onChange({ ...query, legendFormat: evt.currentTarget.value });
      onRunQuery();
    };
    function onMaxLinesChange(e) {
      const newMaxLines = (0,_components_LokiOptionFields__WEBPACK_IMPORTED_MODULE_2__.preprocessMaxLines)(e.currentTarget.value);
      if (query.maxLines !== newMaxLines) {
        onChange({ ...query, maxLines: newMaxLines });
        onRunQuery();
      }
    }
    function onStepChange(e) {
      onChange({ ...query, step: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.trim)(e.currentTarget.value) });
      onRunQuery();
    }
    const queryType = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_3__.getLokiQueryType)(query);
    const isLogQuery = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_3__.isLogsQuery)(query.expr);
    const isValidStep = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
      if (!query.step || (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.isValidGrafanaDuration)(query.step) || !isNaN(Number(query.step))) {
        return true;
      }
      return false;
    }, [query.step]);
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_6__.EditorRow, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_experimental__WEBPACK_IMPORTED_MODULE_7__.QueryOptionGroup,
      {
        title: "Options",
        collapsedInfo: getCollapsedInfo(query, queryType, maxLines, isLogQuery, isValidStep),
        queryStats
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
        _grafana_experimental__WEBPACK_IMPORTED_MODULE_8__.EditorField,
        {
          label: "Legend",
          tooltip: "Series name override or template. Ex. {{hostname}} will be replaced with label value for hostname."
        },
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.AutoSizeInput,
          {
            placeholder: "{{label}}",
            type: "string",
            minWidth: 14,
            defaultValue: query.legendFormat,
            onCommitChange: onLegendFormatChanged
          }
        )
      ),
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_8__.EditorField, { label: "Type" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.RadioButtonGroup, { options: _components_LokiOptionFields__WEBPACK_IMPORTED_MODULE_2__.queryTypeOptions, value: queryType, onChange: onQueryTypeChange })),
      isLogQuery && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_8__.EditorField, { label: "Line limit", tooltip: "Upper limit for number of log lines returned by query." }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.AutoSizeInput,
        {
          className: "width-4",
          placeholder: maxLines.toString(),
          type: "number",
          min: 0,
          defaultValue: (_b = (_a = query.maxLines) == null ? void 0 : _a.toString()) != null ? _b : "",
          onCommitChange: onMaxLinesChange
        }
      )),
      !isLogQuery && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
        _grafana_experimental__WEBPACK_IMPORTED_MODULE_8__.EditorField,
        {
          label: "Step",
          tooltip: "Use the step parameter when making metric queries to Loki. If not filled, Grafana's calculated interval will be used. Example valid values: 1s, 5m, 10h, 1d.",
          invalid: !isValidStep,
          error: "Invalid step. Example valid values: 1s, 5m, 10h, 1d."
        },
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.AutoSizeInput,
          {
            className: "width-6",
            placeholder: "auto",
            type: "string",
            defaultValue: (_c = query.step) != null ? _c : "",
            onCommitChange: onStepChange
          }
        )
      ), query.resolution !== void 0 && query.resolution > 1 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
        _grafana_experimental__WEBPACK_IMPORTED_MODULE_8__.EditorField,
        {
          label: "Resolution",
          tooltip: "Changes the step parameter of Loki metrics range queries. With a resolution of 1/1, each pixel corresponds to one data point. 1/10 retrieves one data point per 10 pixels. Lower resolutions perform better."
        },
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Select,
          {
            isSearchable: false,
            onChange: onResolutionChange,
            options: _components_LokiOptionFields__WEBPACK_IMPORTED_MODULE_2__.RESOLUTION_OPTIONS,
            value: query.resolution || 1,
            "aria-label": "Select resolution"
          }
        )
      ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Alert,
        {
          severity: "warning",
          title: "The 'Resolution' is deprecated. Use 'Step' editor instead to change step parameter."
        }
      ))),
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_13__.config.featureToggles.lokiQuerySplittingConfig && _grafana_runtime__WEBPACK_IMPORTED_MODULE_13__.config.featureToggles.lokiQuerySplitting && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
        _grafana_experimental__WEBPACK_IMPORTED_MODULE_8__.EditorField,
        {
          label: "Split Duration",
          tooltip: "Defines the duration of a single query when query splitting is enabled."
        },
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.AutoSizeInput,
          {
            minWidth: 14,
            type: "string",
            min: 0,
            defaultValue: (_d = query.splitDuration) != null ? _d : "1d",
            onCommitChange: onChunkRangeChange,
            invalid: !splitDurationValid
          }
        )
      )
    ));
  }
);
function getCollapsedInfo(query, queryType, maxLines, isLogQuery, isValidStep) {
  var _a;
  const queryTypeLabel = _components_LokiOptionFields__WEBPACK_IMPORTED_MODULE_2__.queryTypeOptions.find((x) => x.value === queryType);
  const resolutionLabel = _components_LokiOptionFields__WEBPACK_IMPORTED_MODULE_2__.RESOLUTION_OPTIONS.find((x) => {
    var _a2;
    return x.value === ((_a2 = query.resolution) != null ? _a2 : 1);
  });
  const items = [];
  if (query.legendFormat) {
    items.push("Legend: ".concat(query.legendFormat));
  }
  items.push("Type: ".concat(queryTypeLabel == null ? void 0 : queryTypeLabel.label));
  if (isLogQuery) {
    items.push("Line limit: ".concat((_a = query.maxLines) != null ? _a : maxLines));
  }
  if (!isLogQuery) {
    if (query.step) {
      items.push("Step: ".concat(isValidStep ? query.step : "Invalid value"));
    }
    if (query.resolution) {
      items.push("Resolution: ".concat(resolutionLabel == null ? void 0 : resolutionLabel.label));
    }
  }
  return items;
}
LokiQueryBuilderOptions.displayName = "LokiQueryBuilderOptions";


/***/ }),

/***/ "./public/app/plugins/datasource/loki/querybuilder/components/LokiQueryCodeEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LokiQueryCodeEditor: () => (/* binding */ LokiQueryCodeEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _components_LokiQueryEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/components/LokiQueryEditor.tsx");
/* harmony import */ var _components_LokiQueryField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/components/LokiQueryField.tsx");
/* harmony import */ var _LokiQueryBuilderExplained__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/components/LokiQueryBuilderExplained.tsx");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b, _c;






function LokiQueryCodeEditor({
  query,
  datasource,
  range,
  onRunQuery,
  onChange,
  data,
  app,
  showExplain,
  history
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.wrapper }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _components_LokiQueryField__WEBPACK_IMPORTED_MODULE_3__.LokiQueryField,
    {
      datasource,
      query,
      range,
      onRunQuery,
      onChange,
      history,
      data,
      app,
      "data-testid": _components_LokiQueryEditor__WEBPACK_IMPORTED_MODULE_2__.testIds.editor
    }
  ), showExplain && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_LokiQueryBuilderExplained__WEBPACK_IMPORTED_MODULE_4__.LokiQueryBuilderExplained, { query: query.expr }));
}
const getStyles = (theme) => {
  return {
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n      max-width: 100%;\n      .gf-form {\n        margin-bottom: 0.5;\n      }\n    "]))),
    buttonGroup: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_b || (_b = __template(["\n      border: 1px solid ", ";\n      border-top: none;\n      padding: ", ";\n      margin-bottom: ", ";\n      display: flex;\n      flex-grow: 1;\n      justify-content: end;\n      font-size: ", ";\n    "])), theme.colors.border.medium, theme.spacing(0.5, 0.5, 0.5, 0.5), theme.spacing(0.5), theme.typography.bodySmall.fontSize),
    hint: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_c || (_c = __template(["\n      color: ", ";\n      white-space: nowrap;\n      cursor: help;\n    "])), theme.colors.text.disabled)
  };
};


/***/ }),

/***/ "./public/app/plugins/datasource/loki/querybuilder/components/NestedQuery.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NestedQuery: () => (/* binding */ NestedQuery)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/utils/selectUtils.ts");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/QueryEditor/FlexItem.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/QueryEditor/EditorRows.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Input/AutoSizeInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _binaryScalarOperations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/binaryScalarOperations.ts");
/* harmony import */ var _LokiQueryBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/components/LokiQueryBuilder.tsx");








const NestedQuery = react__WEBPACK_IMPORTED_MODULE_1___default().memo(
  ({ nestedQuery, index, datasource, onChange, onRemove, onRunQuery, showExplain }) => {
    const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.card }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.header }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.name }, "Operator"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Select,
      {
        "aria-label": "Select operator",
        width: "auto",
        options: operators,
        value: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.toOption)(nestedQuery.operator),
        onChange: (value) => {
          onChange(index, {
            ...nestedQuery,
            operator: value.value
          });
        }
      }
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.name }, "Vector matches"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.vectorMatchWrapper }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Select,
      {
        width: "auto",
        value: nestedQuery.vectorMatchesType || "on",
        allowCustomValue: true,
        options: [
          { value: "on", label: "on" },
          { value: "ignoring", label: "ignoring" }
        ],
        onChange: (val) => {
          onChange(index, {
            ...nestedQuery,
            vectorMatchesType: val.value
          });
        }
      }
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.AutoSizeInput,
      {
        className: styles.vectorMatchInput,
        minWidth: 20,
        defaultValue: nestedQuery.vectorMatches,
        onCommitChange: (evt) => {
          onChange(index, {
            ...nestedQuery,
            vectorMatches: evt.currentTarget.value,
            vectorMatchesType: nestedQuery.vectorMatchesType || "on"
          });
        }
      }
    )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_8__.FlexItem, { grow: 1 }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.IconButton, { name: "times", size: "sm", onClick: () => onRemove(index), tooltip: "Remove nested query" })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.body }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_10__.EditorRows, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _LokiQueryBuilder__WEBPACK_IMPORTED_MODULE_3__.LokiQueryBuilder,
      {
        showExplain,
        query: nestedQuery.query,
        datasource,
        onRunQuery,
        onChange: (update) => {
          onChange(index, { ...nestedQuery, query: update });
        }
      }
    ))));
  }
);
const operators = _binaryScalarOperations__WEBPACK_IMPORTED_MODULE_2__.binaryScalarDefs.map((def) => ({ label: def.sign, value: def.sign }));
NestedQuery.displayName = "NestedQuery";
const getStyles = (theme) => {
  return {
    card: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      label: "card",
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(0.5)
    }),
    header: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      label: "header",
      padding: theme.spacing(0.5, 0.5, 0.5, 1),
      gap: theme.spacing(1),
      display: "flex",
      alignItems: "center"
    }),
    name: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      label: "name",
      whiteSpace: "nowrap"
    }),
    body: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      label: "body",
      paddingLeft: theme.spacing(2)
    }),
    vectorMatchInput: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      label: "vectorMatchInput",
      marginLeft: -1
    }),
    vectorMatchWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      label: "vectorMatchWrapper",
      display: "flex"
    })
  };
};


/***/ }),

/***/ "./public/app/plugins/datasource/loki/querybuilder/components/NestedQueryList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NestedQueryList: () => (/* binding */ NestedQueryList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _NestedQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/components/NestedQuery.tsx");




function NestedQueryList({ query, datasource, onChange, onRunQuery, showExplain }) {
  var _a;
  const nestedQueries = (_a = query.binaryQueries) != null ? _a : [];
  const onNestedQueryUpdate = (index, update) => {
    const updatedList = [...nestedQueries];
    updatedList.splice(index, 1, update);
    onChange({ ...query, binaryQueries: updatedList });
  };
  const onRemove = (index) => {
    const updatedList = [...nestedQueries.slice(0, index), ...nestedQueries.slice(index + 1)];
    onChange({ ...query, binaryQueries: updatedList });
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { direction: "column", gap: 1 }, nestedQueries.map((nestedQuery, index) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _NestedQuery__WEBPACK_IMPORTED_MODULE_1__.NestedQuery,
    {
      key: index.toString(),
      nestedQuery,
      index,
      onChange: onNestedQueryUpdate,
      datasource,
      onRemove,
      onRunQuery,
      showExplain
    }
  )));
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/querybuilder/components/QueryPattern.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryPattern: () => (/* binding */ QueryPattern)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/RawQuery.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Card/Card.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _syntax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/syntax.ts");
/* harmony import */ var _LokiQueryModeller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/LokiQueryModeller.ts");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b, _c, _d;






const QueryPattern = (props) => {
  const { pattern, onPatternSelect, hasNewQueryOption, hasPreviousQuery, selectedPatternName, setSelectedPatternName } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const lang = { grammar: _syntax__WEBPACK_IMPORTED_MODULE_2__["default"], name: "logql" };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Card, { className: styles.card }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Card.Heading, null, pattern.name), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.rawQueryContainer }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_experimental__WEBPACK_IMPORTED_MODULE_6__.RawQuery,
    {
      query: _LokiQueryModeller__WEBPACK_IMPORTED_MODULE_3__.lokiQueryModeller.renderQuery({ labels: [], operations: pattern.operations }),
      language: lang,
      className: styles.rawQuery
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Card.Actions, null, selectedPatternName !== pattern.name ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button,
    {
      size: "sm",
      onClick: () => {
        if (hasPreviousQuery) {
          setSelectedPatternName(pattern.name);
        } else {
          onPatternSelect(pattern);
        }
      }
    },
    "Use this query"
  ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.spacing }, "If you would like to use this query, ".concat(hasNewQueryOption ? "you can either replace your current query or create a new query" : "your current query will be replaced", ".")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { size: "sm", fill: "outline", onClick: () => setSelectedPatternName(null) }, "Back"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button,
    {
      size: "sm",
      onClick: () => {
        onPatternSelect(pattern);
      }
    },
    "Apply to query"
  ), hasNewQueryOption && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button,
    {
      size: "sm",
      onClick: () => {
        onPatternSelect(pattern, true);
      }
    },
    "Create new query"
  ))));
};
const getStyles = (theme) => {
  return {
    card: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n      width: 49.5%;\n      display: flex;\n      flex-direction: column;\n    "]))),
    rawQueryContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_b || (_b = __template(["\n      flex-grow: 1;\n    "]))),
    rawQuery: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_c || (_c = __template(["\n      background-color: ", ";\n      padding: ", ";\n      margin-top: ", ";\n    "])), theme.colors.background.primary, theme.spacing(1), theme.spacing(1)),
    spacing: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_d || (_d = __template(["\n      margin-bottom: ", ";\n    "])), theme.spacing(1))
  };
};


/***/ }),

/***/ "./public/app/plugins/datasource/loki/querybuilder/components/QueryPatternsModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryPatternsModal: () => (/* binding */ QueryPatternsModal)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-data/src/query/refId.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Collapse/Collapse.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _LokiQueryModeller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/LokiQueryModeller.ts");
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/operations.ts");
/* harmony import */ var _parsing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/parsing.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/types.ts");
/* harmony import */ var _QueryPattern__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/components/QueryPattern.tsx");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b, _c;











const keepOperationCategories = [
  _types__WEBPACK_IMPORTED_MODULE_6__.LokiVisualQueryOperationCategory.Formats,
  _types__WEBPACK_IMPORTED_MODULE_6__.LokiVisualQueryOperationCategory.LineFilters,
  _types__WEBPACK_IMPORTED_MODULE_6__.LokiVisualQueryOperationCategory.LabelFilters
];
const excludeOperationIds = [_types__WEBPACK_IMPORTED_MODULE_6__.LokiOperationId.Unwrap];
const keepOperations = _operations__WEBPACK_IMPORTED_MODULE_4__.operationDefinitions.filter(
  (operation) => operation.category && keepOperationCategories.includes(operation.category) && !excludeOperationIds.includes(operation.id)
).map((operation) => operation.id);
const QueryPatternsModal = (props) => {
  const { isOpen, onClose, onChange, onAddQuery, query, queries, app } = props;
  const [openTabs, setOpenTabs] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [selectedPatternName, setSelectedPatternName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  const hasNewQueryOption = !!onAddQuery;
  const hasPreviousQuery = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => (0,_parsing__WEBPACK_IMPORTED_MODULE_5__.buildVisualQueryFromString)(query.expr).query.operations.length > 0,
    [query.expr]
  );
  const onPatternSelect = (pattern, selectAsNewQuery = false) => {
    const visualQuery = (0,_parsing__WEBPACK_IMPORTED_MODULE_5__.buildVisualQueryFromString)(selectAsNewQuery ? "" : query.expr);
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_9__.reportInteraction)("grafana_loki_query_patterns_selected", {
      version: "v2",
      app: app != null ? app : "",
      editorMode: query.editorMode,
      selectedPattern: pattern.name,
      preSelectedOperationsCount: visualQuery.query.operations.length,
      preSelectedLabelsCount: visualQuery.query.labels.length,
      createNewQuery: hasNewQueryOption && selectAsNewQuery
    });
    visualQuery.query.operations = visualQuery.query.operations.filter((op) => keepOperations.includes(op.id));
    const patternOperations = pattern.operations.filter(
      (patternOp) => visualQuery.query.operations.findIndex((op) => op.id === patternOp.id) < 0
    );
    visualQuery.query.operations = [...visualQuery.query.operations, ...patternOperations];
    if (hasNewQueryOption && selectAsNewQuery) {
      onAddQuery({
        ...query,
        refId: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_10__.getNextRefId)(queries != null ? queries : [query]),
        expr: _LokiQueryModeller__WEBPACK_IMPORTED_MODULE_3__.lokiQueryModeller.renderQuery(visualQuery.query)
      });
    } else {
      onChange({
        ...query,
        expr: _LokiQueryModeller__WEBPACK_IMPORTED_MODULE_3__.lokiQueryModeller.renderQuery(visualQuery.query)
      });
    }
    setSelectedPatternName(null);
    onClose();
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Modal, { isOpen, title: "Kick start your query", onDismiss: onClose, className: styles.modal }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: styles.spacing }, "Kick start your query by selecting one of these queries. You can then continue to complete your query."), Object.values(_types__WEBPACK_IMPORTED_MODULE_6__.LokiQueryPatternType).map((patternType) => {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Collapse,
      {
        key: patternType,
        label: "".concat((0,lodash__WEBPACK_IMPORTED_MODULE_1__.capitalize)(patternType), " query starters"),
        isOpen: openTabs.includes(patternType),
        collapsible: true,
        onToggle: () => setOpenTabs(
          (tabs) => (
            // close tab if it's already open, otherwise open it
            tabs.includes(patternType) ? tabs.filter((t) => t !== patternType) : [...tabs, patternType]
          )
        )
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: styles.cardsContainer }, _LokiQueryModeller__WEBPACK_IMPORTED_MODULE_3__.lokiQueryModeller.getQueryPatterns().filter((pattern) => pattern.type === patternType).map((pattern) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
        _QueryPattern__WEBPACK_IMPORTED_MODULE_7__.QueryPattern,
        {
          key: pattern.name,
          pattern,
          hasNewQueryOption,
          hasPreviousQuery,
          onPatternSelect,
          selectedPatternName,
          setSelectedPatternName
        }
      )))
    );
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Button, { variant: "secondary", onClick: onClose }, "Close"));
};
const getStyles = (theme) => {
  return {
    cardsContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap;\n      justify-content: space-between;\n    "]))),
    spacing: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_b || (_b = __template(["\n      margin-bottom: ", ";\n    "])), theme.spacing(1)),
    modal: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_c || (_c = __template(["\n      width: 85vw;\n      ", " {\n        width: 100%;\n      }\n    "])), theme.breakpoints.down("md"))
  };
};


/***/ }),

/***/ "./public/app/plugins/datasource/loki/querybuilder/components/QueryPreview.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryPreview: () => (/* binding */ QueryPreview)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/QueryEditor/EditorRow.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/QueryEditor/EditorFieldGroup.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/components/RawQuery.js");
/* harmony import */ var _syntax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/syntax.ts");




function QueryPreview({ query }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorRow, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.EditorFieldGroup, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_4__.RawQuery, { query, language: { grammar: _syntax__WEBPACK_IMPORTED_MODULE_1__.lokiGrammar, name: "lokiql" } })));
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/querybuilder/components/UnwrapParamEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnwrapParamEditor: () => (/* binding */ UnwrapParamEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/utils/selectUtils.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-data/src/types/time.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _components_monaco_query_field_monaco_completion_provider_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/components/monaco-query-field/monaco-completion-provider/validation.ts");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/datasource.ts");
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/queryUtils.ts");
/* harmony import */ var _responseUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/loki/responseUtils.ts");
/* harmony import */ var _operationUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/operationUtils.ts");










function UnwrapParamEditor({
  onChange,
  index,
  operationId,
  value,
  query,
  datasource,
  timeRange,
  queryModeller
}) {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Select,
    {
      inputId: (0,_operationUtils__WEBPACK_IMPORTED_MODULE_5__.getOperationParamId)(operationId, index),
      onOpenMenu: async () => {
        if (datasource instanceof _datasource__WEBPACK_IMPORTED_MODULE_2__.LokiDatasource && _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.config.featureToggles.lokiQueryHints) {
          setState({ isLoading: true });
          const options = await loadUnwrapOptions(query, datasource, queryModeller, timeRange);
          setState({ options, isLoading: void 0 });
        }
      },
      isLoading: state.isLoading,
      allowCustomValue: true,
      noOptionsMessage: "No labels found",
      loadingMessage: "Loading labels",
      options: state.options,
      value: value ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_8__.toOption)(value.toString()) : null,
      onChange: (value2) => {
        if (value2.value) {
          onChange(index, value2.value);
        }
      }
    }
  );
}
async function loadUnwrapOptions(query, datasource, queryModeller, timeRange = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_9__.getDefaultTimeRange)()) {
  const queryExpr = queryModeller.renderQuery(query);
  const logExpr = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_3__.getLogQueryFromMetricsQuery)(queryExpr);
  if ((0,_queryUtils__WEBPACK_IMPORTED_MODULE_3__.isQueryWithError)(datasource.interpolateString(logExpr, _components_monaco_query_field_monaco_completion_provider_validation__WEBPACK_IMPORTED_MODULE_1__.placeHolderScopedVars))) {
    return [];
  }
  const samples = await datasource.getDataSamples({ expr: logExpr, refId: "unwrap_samples" }, timeRange);
  const unwrapLabels = (0,_responseUtils__WEBPACK_IMPORTED_MODULE_4__.extractUnwrapLabelKeysFromDataFrame)(samples[0]);
  const labelOptions = unwrapLabels.map((label) => ({
    label,
    value: label
  }));
  return labelOptions;
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/querybuilder/operationUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLokiOperation: () => (/* binding */ addLokiOperation),
/* harmony export */   addNestedQueryHandler: () => (/* binding */ addNestedQueryHandler),
/* harmony export */   createAggregationOperation: () => (/* binding */ createAggregationOperation),
/* harmony export */   createAggregationOperationWithParam: () => (/* binding */ createAggregationOperationWithParam),
/* harmony export */   createRangeOperation: () => (/* binding */ createRangeOperation),
/* harmony export */   createRangeOperationWithGrouping: () => (/* binding */ createRangeOperationWithGrouping),
/* harmony export */   defaultAddOperationHandler: () => (/* binding */ defaultAddOperationHandler),
/* harmony export */   functionRendererLeft: () => (/* binding */ functionRendererLeft),
/* harmony export */   getAggregationExplainer: () => (/* binding */ getAggregationExplainer),
/* harmony export */   getLastLabelRemovedHandler: () => (/* binding */ getLastLabelRemovedHandler),
/* harmony export */   getLineFilterRenderer: () => (/* binding */ getLineFilterRenderer),
/* harmony export */   getLokiOperationDisplayName: () => (/* binding */ getLokiOperationDisplayName),
/* harmony export */   getOnLabelAddedHandler: () => (/* binding */ getOnLabelAddedHandler),
/* harmony export */   getOperationParamId: () => (/* binding */ getOperationParamId),
/* harmony export */   getRangeAggregationWithGroupingRenderer: () => (/* binding */ getRangeAggregationWithGroupingRenderer),
/* harmony export */   isConflictingFilter: () => (/* binding */ isConflictingFilter),
/* harmony export */   labelFilterRenderer: () => (/* binding */ labelFilterRenderer),
/* harmony export */   pipelineRenderer: () => (/* binding */ pipelineRenderer)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _languageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/languageUtils.ts");
/* harmony import */ var _syntax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/syntax.ts");
/* harmony import */ var _components_LabelParamEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/components/LabelParamEditor.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/types.ts");







function createRangeOperation(name, isRangeOperationWithGrouping) {
  const params = [getRangeVectorParamDef()];
  const defaultParams = ["$__auto"];
  let paramChangedHandler = void 0;
  if (name === _types__WEBPACK_IMPORTED_MODULE_5__.LokiOperationId.QuantileOverTime) {
    defaultParams.push("0.95");
    params.push({
      name: "Quantile",
      type: "number"
    });
  }
  if (isRangeOperationWithGrouping) {
    params.push({
      name: "By label",
      type: "string",
      restParam: true,
      optional: true
    });
    paramChangedHandler = getOnLabelAddedHandler("__".concat(name, "_by"));
  }
  return {
    id: name,
    name: getLokiOperationDisplayName(name),
    params,
    defaultParams,
    alternativesKey: "range function",
    category: _types__WEBPACK_IMPORTED_MODULE_5__.LokiVisualQueryOperationCategory.RangeFunctions,
    orderRank: _types__WEBPACK_IMPORTED_MODULE_5__.LokiOperationOrder.RangeVectorFunction,
    renderer: operationWithRangeVectorRenderer,
    addOperationHandler: addLokiOperation,
    paramChangedHandler,
    explainHandler: (op, def) => {
      var _a, _b;
      let opDocs = (_b = (_a = _syntax__WEBPACK_IMPORTED_MODULE_3__.FUNCTIONS.find((x) => x.insertText === op.id)) == null ? void 0 : _a.documentation) != null ? _b : "";
      if (op.params[0] === "$__auto") {
        return "".concat(opDocs, " `$__auto` is a variable that will be replaced with the [value of step](https://grafana.com/docs/grafana/next/datasources/loki/query-editor/#options) for range queries and with the value of the selected time range (calculated to - from) for instant queries.");
      } else {
        return "".concat(opDocs, " The [range vector](https://grafana.com/docs/loki/latest/logql/metric_queries/#range-vector-aggregation) is set to `").concat(op.params[0], "`.");
      }
    }
  };
}
function createRangeOperationWithGrouping(name) {
  const rangeOperation = createRangeOperation(name, true);
  const params = rangeOperation.params.slice(0, -1);
  const operations = [
    rangeOperation,
    {
      id: "__".concat(name, "_by"),
      name: "".concat(getLokiOperationDisplayName(name), " by"),
      params: [
        ...params,
        {
          name: "Label",
          type: "string",
          restParam: true,
          optional: true,
          editor: _components_LabelParamEditor__WEBPACK_IMPORTED_MODULE_4__.LabelParamEditor
        }
      ],
      defaultParams: [...rangeOperation.defaultParams, ""],
      alternativesKey: "range function with grouping",
      category: _types__WEBPACK_IMPORTED_MODULE_5__.LokiVisualQueryOperationCategory.RangeFunctions,
      renderer: getRangeAggregationWithGroupingRenderer(name, "by"),
      paramChangedHandler: getLastLabelRemovedHandler(name),
      explainHandler: getAggregationExplainer(name, "by"),
      addOperationHandler: addLokiOperation,
      hideFromList: true
    },
    {
      id: "__".concat(name, "_without"),
      name: "".concat(getLokiOperationDisplayName(name), " without"),
      params: [
        ...params,
        {
          name: "Label",
          type: "string",
          restParam: true,
          optional: true,
          editor: _components_LabelParamEditor__WEBPACK_IMPORTED_MODULE_4__.LabelParamEditor
        }
      ],
      defaultParams: [...rangeOperation.defaultParams, ""],
      alternativesKey: "range function with grouping",
      category: _types__WEBPACK_IMPORTED_MODULE_5__.LokiVisualQueryOperationCategory.RangeFunctions,
      renderer: getRangeAggregationWithGroupingRenderer(name, "without"),
      paramChangedHandler: getLastLabelRemovedHandler(name),
      explainHandler: getAggregationExplainer(name, "without"),
      addOperationHandler: addLokiOperation,
      hideFromList: true
    }
  ];
  return operations;
}
function getRangeAggregationWithGroupingRenderer(aggregation, grouping) {
  return function aggregationRenderer(model, def, innerExpr) {
    const restParamIndex = def.params.findIndex((param) => param.restParam);
    const params = model.params.slice(0, restParamIndex);
    const restParams = model.params.slice(restParamIndex);
    if (params.length === 2 && aggregation === _types__WEBPACK_IMPORTED_MODULE_5__.LokiOperationId.QuantileOverTime) {
      return "".concat(aggregation, "(").concat(params[1], ", ").concat(innerExpr, " [").concat(params[0], "]) ").concat(grouping, " (").concat(restParams.join(", "), ")");
    }
    return "".concat(aggregation, "(").concat(innerExpr, " [").concat(params[0], "]) ").concat(grouping, " (").concat(restParams.join(", "), ")");
  };
}
function operationWithRangeVectorRenderer(model, def, innerExpr) {
  var _a, _b, _c;
  const params = (_a = model.params) != null ? _a : [];
  const rangeVector = (_b = params[0]) != null ? _b : "$__auto";
  if (params.length === 2 && model.id === _types__WEBPACK_IMPORTED_MODULE_5__.LokiOperationId.QuantileOverTime) {
    const quantile = params[1];
    return "".concat(model.id, "(").concat(quantile, ", ").concat(innerExpr, " [").concat(rangeVector, "])");
  }
  return "".concat(model.id, "(").concat(innerExpr, " [").concat((_c = params[0]) != null ? _c : "$__auto", "])");
}
function labelFilterRenderer(model, def, innerExpr) {
  const integerOperators = ["<", "<=", ">", ">="];
  if (integerOperators.includes(String(model.params[1]))) {
    return "".concat(innerExpr, " | ").concat(model.params[0], " ").concat(model.params[1], " ").concat(model.params[2]);
  }
  return "".concat(innerExpr, " | ").concat(model.params[0], " ").concat(model.params[1], " `").concat(model.params[2], "`");
}
function isConflictingFilter(operation, queryOperations) {
  if (!operation) {
    return false;
  }
  const operationIsNegative = operation.params[1].toString().startsWith("!");
  const candidates = queryOperations.filter(
    (queryOperation) => queryOperation.id === _types__WEBPACK_IMPORTED_MODULE_5__.LokiOperationId.LabelFilter && queryOperation.params[0] === operation.params[0] && queryOperation.params[2] === operation.params[2]
  );
  const conflict = candidates.some((candidate) => {
    if (operationIsNegative && candidate.params[1].toString().startsWith("!") === false) {
      return true;
    }
    if (operationIsNegative === false && candidate.params[1].toString().startsWith("!")) {
      return true;
    }
    return false;
  });
  return conflict;
}
function pipelineRenderer(model, def, innerExpr) {
  switch (model.id) {
    case _types__WEBPACK_IMPORTED_MODULE_5__.LokiOperationId.Logfmt:
      const [strict = false, keepEmpty = false, ...labels] = model.params;
      return "".concat(innerExpr, " | logfmt").concat(strict ? " --strict" : "").concat(keepEmpty ? " --keep-empty" : "", " ").concat(labels.filter((label) => label).join(", ")).trim();
    case _types__WEBPACK_IMPORTED_MODULE_5__.LokiOperationId.Json:
      return "".concat(innerExpr, " | json ").concat(model.params.filter((param) => param).join(", ")).trim();
    case _types__WEBPACK_IMPORTED_MODULE_5__.LokiOperationId.Drop:
      return "".concat(innerExpr, " | drop ").concat(model.params.filter((param) => param).join(", ")).trim();
    case _types__WEBPACK_IMPORTED_MODULE_5__.LokiOperationId.Keep:
      return "".concat(innerExpr, " | keep ").concat(model.params.filter((param) => param).join(", ")).trim();
    default:
      return "".concat(innerExpr, " | ").concat(model.id);
  }
}
function isRangeVectorFunction(def) {
  return def.category === _types__WEBPACK_IMPORTED_MODULE_5__.LokiVisualQueryOperationCategory.RangeFunctions;
}
function getIndexOfOrLast(operations, queryModeller, condition) {
  const index = operations.findIndex((x) => {
    const opDef = queryModeller.getOperationDefinition(x.id);
    if (!opDef) {
      return false;
    }
    return condition(opDef);
  });
  return index === -1 ? operations.length : index;
}
function addLokiOperation(def, query, modeller) {
  const newOperation = {
    id: def.id,
    params: def.defaultParams
  };
  const operations = [...query.operations];
  const existingRangeVectorFunction = operations.find((x) => {
    const opDef = modeller.getOperationDefinition(x.id);
    if (!opDef) {
      return false;
    }
    return isRangeVectorFunction(opDef);
  });
  switch (def.category) {
    case _types__WEBPACK_IMPORTED_MODULE_5__.LokiVisualQueryOperationCategory.Aggregations:
    case _types__WEBPACK_IMPORTED_MODULE_5__.LokiVisualQueryOperationCategory.Functions:
      if (!existingRangeVectorFunction) {
        const placeToInsert2 = getIndexOfOrLast(
          operations,
          modeller,
          (def2) => def2.category === _types__WEBPACK_IMPORTED_MODULE_5__.LokiVisualQueryOperationCategory.Functions
        );
        operations.splice(placeToInsert2, 0, { id: _types__WEBPACK_IMPORTED_MODULE_5__.LokiOperationId.Rate, params: ["$__auto"] });
      }
      operations.push(newOperation);
      break;
    case _types__WEBPACK_IMPORTED_MODULE_5__.LokiVisualQueryOperationCategory.RangeFunctions:
      if (existingRangeVectorFunction) {
        const index = operations.indexOf(existingRangeVectorFunction);
        operations[index] = newOperation;
        break;
      }
    default:
      const placeToInsert = getIndexOfOrLast(
        operations,
        modeller,
        (x) => {
          var _a, _b;
          return ((_a = def.orderRank) != null ? _a : 100) < ((_b = x.orderRank) != null ? _b : 100);
        }
      );
      operations.splice(placeToInsert, 0, newOperation);
      break;
  }
  return {
    ...query,
    operations
  };
}
function addNestedQueryHandler(def, query) {
  var _a;
  return {
    ...query,
    binaryQueries: [
      ...(_a = query.binaryQueries) != null ? _a : [],
      {
        operator: "/",
        query
      }
    ]
  };
}
function getLineFilterRenderer(operation, caseInsensitive) {
  return function lineFilterRenderer(model, def, innerExpr) {
    const hasBackticks = model.params.some((param) => typeof param === "string" && param.includes("`"));
    const delimiter = hasBackticks ? '"' : "`";
    let params;
    if (hasBackticks) {
      params = model.params.map(
        (param) => typeof param === "string" ? (0,_languageUtils__WEBPACK_IMPORTED_MODULE_2__.escapeLabelValueInExactSelector)(param) : param
      );
    } else {
      params = model.params;
    }
    if (caseInsensitive) {
      return "".concat(innerExpr, " ").concat(operation, " ").concat(delimiter, "(?i)").concat(params.join("".concat(delimiter, " or ").concat(delimiter, "(?i)"))).concat(delimiter);
    }
    return "".concat(innerExpr, " ").concat(operation, " ").concat(delimiter).concat(params.join("".concat(delimiter, " or ").concat(delimiter))).concat(delimiter);
  };
}
function getRangeVectorParamDef() {
  return {
    name: "Range",
    type: "string",
    options: ["$__auto", "1m", "5m", "10m", "1h", "24h"]
  };
}
function getOperationParamId(operationId, paramIndex) {
  return "operations.".concat(operationId, ".param.").concat(paramIndex);
}
function getOnLabelAddedHandler(changeToOperationId) {
  return function onParamChanged(index, op, def) {
    if (op.params.length === def.params.length) {
      return {
        ...op,
        id: changeToOperationId
      };
    }
    return op;
  };
}
function getAggregationExplainer(aggregationName, mode) {
  return function aggregationExplainer(model) {
    const labels = model.params.map((label) => "`".concat(label, "`")).join(" and ");
    const labelWord = pluralize__WEBPACK_IMPORTED_MODULE_1___default()("label", model.params.length);
    switch (mode) {
      case "by":
        return "Calculates ".concat(aggregationName, " over dimensions while preserving ").concat(labelWord, " ").concat(labels, ".");
      case "without":
        return "Calculates ".concat(aggregationName, " over the dimensions ").concat(labels, ". All other labels are preserved.");
      default:
        return "Calculates ".concat(aggregationName, " over the dimensions.");
    }
  };
}
function getLastLabelRemovedHandler(changeToOperationId) {
  return function onParamChanged(index, op, def) {
    if (op.params.length < def.params.length) {
      return {
        ...op,
        id: changeToOperationId
      };
    }
    return op;
  };
}
function getLokiOperationDisplayName(funcName) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.capitalize)(funcName.replace(/_/g, " "));
}
function defaultAddOperationHandler(def, query) {
  const newOperation = {
    id: def.id,
    params: def.defaultParams
  };
  return {
    ...query,
    operations: [...query.operations, newOperation]
  };
}
function createAggregationOperation(name, overrides = {}) {
  const operations = [
    {
      id: name,
      name: getLokiOperationDisplayName(name),
      params: [
        {
          name: "By label",
          type: "string",
          restParam: true,
          optional: true
        }
      ],
      defaultParams: [],
      alternativesKey: "plain aggregations",
      category: _types__WEBPACK_IMPORTED_MODULE_5__.LokiVisualQueryOperationCategory.Aggregations,
      renderer: functionRendererLeft,
      paramChangedHandler: getOnLabelAddedHandler("__".concat(name, "_by")),
      explainHandler: getAggregationExplainer(name, ""),
      addOperationHandler: defaultAddOperationHandler,
      ...overrides
    },
    {
      id: "__".concat(name, "_by"),
      name: "".concat(getLokiOperationDisplayName(name), " by"),
      params: [
        {
          name: "Label",
          type: "string",
          restParam: true,
          optional: true,
          editor: _components_LabelParamEditor__WEBPACK_IMPORTED_MODULE_4__.LabelParamEditor
        }
      ],
      defaultParams: [""],
      alternativesKey: "aggregations by",
      category: _types__WEBPACK_IMPORTED_MODULE_5__.LokiVisualQueryOperationCategory.Aggregations,
      renderer: getAggregationByRenderer(name),
      paramChangedHandler: getLastLabelRemovedHandler(name),
      explainHandler: getAggregationExplainer(name, "by"),
      addOperationHandler: defaultAddOperationHandler,
      hideFromList: true,
      ...overrides
    },
    {
      id: "__".concat(name, "_without"),
      name: "".concat(getLokiOperationDisplayName(name), " without"),
      params: [
        {
          name: "Label",
          type: "string",
          restParam: true,
          optional: true,
          editor: _components_LabelParamEditor__WEBPACK_IMPORTED_MODULE_4__.LabelParamEditor
        }
      ],
      defaultParams: [""],
      alternativesKey: "aggregations by",
      category: _types__WEBPACK_IMPORTED_MODULE_5__.LokiVisualQueryOperationCategory.Aggregations,
      renderer: getAggregationWithoutRenderer(name),
      paramChangedHandler: getLastLabelRemovedHandler(name),
      explainHandler: getAggregationExplainer(name, "without"),
      addOperationHandler: defaultAddOperationHandler,
      hideFromList: true,
      ...overrides
    }
  ];
  return operations;
}
function getAggregationWithoutRenderer(aggregation) {
  return function aggregationRenderer(model, def, innerExpr) {
    return "".concat(aggregation, " without(").concat(model.params.join(", "), ") (").concat(innerExpr, ")");
  };
}
function functionRendererLeft(model, def, innerExpr) {
  const params = renderParams(model, def, innerExpr);
  const str = model.id + "(";
  if (innerExpr) {
    params.push(innerExpr);
  }
  return str + params.join(", ") + ")";
}
function renderParams(model, def, innerExpr) {
  var _a;
  return ((_a = model.params) != null ? _a : []).map((value, index) => {
    const paramDef = def.params[index];
    if (paramDef.type === "string") {
      return '"' + value + '"';
    }
    return value;
  });
}
function getAggregationByRenderer(aggregation) {
  return function aggregationRenderer(model, def, innerExpr) {
    return "".concat(aggregation, " by(").concat(model.params.join(", "), ") (").concat(innerExpr, ")");
  };
}
function createAggregationOperationWithParam(name, paramsDef, overrides = {}) {
  const operations = createAggregationOperation(name, overrides);
  operations[0].params.unshift(...paramsDef.params);
  operations[1].params.unshift(...paramsDef.params);
  operations[2].params.unshift(...paramsDef.params);
  operations[0].defaultParams = paramsDef.defaultParams;
  operations[1].defaultParams = [...paramsDef.defaultParams, ""];
  operations[2].defaultParams = [...paramsDef.defaultParams, ""];
  operations[1].renderer = getAggregationByRendererWithParameter(name);
  operations[2].renderer = getAggregationByRendererWithParameter(name);
  return operations;
}
function getAggregationByRendererWithParameter(aggregation) {
  return function aggregationRenderer(model, def, innerExpr) {
    const restParamIndex = def.params.findIndex((param) => param.restParam);
    const params = model.params.slice(0, restParamIndex);
    const restParams = model.params.slice(restParamIndex);
    return "".concat(aggregation, " by(").concat(restParams.join(", "), ") (").concat(params.map((param, idx) => def.params[idx].type === "string" ? '"'.concat(param, '"') : param).join(", "), ", ").concat(innerExpr, ")");
  };
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/querybuilder/operations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkParamsAreValid: () => (/* binding */ checkParamsAreValid),
/* harmony export */   explainOperator: () => (/* binding */ explainOperator),
/* harmony export */   getDefinitionById: () => (/* binding */ getDefinitionById),
/* harmony export */   operationDefinitions: () => (/* binding */ operationDefinitions)
/* harmony export */ });
/* harmony import */ var _binaryScalarOperations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/binaryScalarOperations.ts");
/* harmony import */ var _components_UnwrapParamEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/components/UnwrapParamEditor.tsx");
/* harmony import */ var _operationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/operationUtils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/types.ts");





function getOperationDefinitions() {
  const aggregations = [
    _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.Sum,
    _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.Min,
    _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.Max,
    _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.Avg,
    _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.Stddev,
    _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.Stdvar,
    _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.Count
  ].flatMap(
    (opId) => (0,_operationUtils__WEBPACK_IMPORTED_MODULE_2__.createAggregationOperation)(opId, {
      addOperationHandler: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.addLokiOperation,
      orderRank: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationOrder.Last
    })
  );
  const aggregationsWithParam = [_types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.TopK, _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.BottomK].flatMap((opId) => {
    return (0,_operationUtils__WEBPACK_IMPORTED_MODULE_2__.createAggregationOperationWithParam)(
      opId,
      {
        params: [{ name: "K-value", type: "number" }],
        defaultParams: [5]
      },
      {
        addOperationHandler: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.addLokiOperation,
        orderRank: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationOrder.Last
      }
    );
  });
  const rangeOperations = [
    (0,_operationUtils__WEBPACK_IMPORTED_MODULE_2__.createRangeOperation)(_types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.Rate),
    (0,_operationUtils__WEBPACK_IMPORTED_MODULE_2__.createRangeOperation)(_types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.RateCounter),
    (0,_operationUtils__WEBPACK_IMPORTED_MODULE_2__.createRangeOperation)(_types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.CountOverTime),
    (0,_operationUtils__WEBPACK_IMPORTED_MODULE_2__.createRangeOperation)(_types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.SumOverTime),
    (0,_operationUtils__WEBPACK_IMPORTED_MODULE_2__.createRangeOperation)(_types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.BytesRate),
    (0,_operationUtils__WEBPACK_IMPORTED_MODULE_2__.createRangeOperation)(_types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.BytesOverTime),
    (0,_operationUtils__WEBPACK_IMPORTED_MODULE_2__.createRangeOperation)(_types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.AbsentOverTime)
  ];
  const rangeOperationsWithGrouping = [
    ...(0,_operationUtils__WEBPACK_IMPORTED_MODULE_2__.createRangeOperationWithGrouping)(_types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.AvgOverTime),
    ...(0,_operationUtils__WEBPACK_IMPORTED_MODULE_2__.createRangeOperationWithGrouping)(_types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.MaxOverTime),
    ...(0,_operationUtils__WEBPACK_IMPORTED_MODULE_2__.createRangeOperationWithGrouping)(_types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.MinOverTime),
    ...(0,_operationUtils__WEBPACK_IMPORTED_MODULE_2__.createRangeOperationWithGrouping)(_types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.FirstOverTime),
    ...(0,_operationUtils__WEBPACK_IMPORTED_MODULE_2__.createRangeOperationWithGrouping)(_types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.LastOverTime),
    ...(0,_operationUtils__WEBPACK_IMPORTED_MODULE_2__.createRangeOperationWithGrouping)(_types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.StdvarOverTime),
    ...(0,_operationUtils__WEBPACK_IMPORTED_MODULE_2__.createRangeOperationWithGrouping)(_types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.StddevOverTime),
    ...(0,_operationUtils__WEBPACK_IMPORTED_MODULE_2__.createRangeOperationWithGrouping)(_types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.QuantileOverTime)
  ];
  const list = [
    ...aggregations,
    ...aggregationsWithParam,
    ...rangeOperations,
    ...rangeOperationsWithGrouping,
    {
      id: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.Json,
      name: "Json",
      params: [
        {
          name: "Expression",
          type: "string",
          restParam: true,
          optional: true,
          minWidth: 18,
          placeholder: 'server="servers[0]"',
          description: "Using expressions with your json parser will extract only the specified json fields to labels. You can specify one or more expressions in this way. All expressions must be quoted."
        }
      ],
      defaultParams: [],
      alternativesKey: "format",
      category: _types__WEBPACK_IMPORTED_MODULE_3__.LokiVisualQueryOperationCategory.Formats,
      orderRank: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationOrder.Parsers,
      renderer: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.pipelineRenderer,
      addOperationHandler: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.addLokiOperation,
      explainHandler: () => "This will extract keys and values from a [json](https://grafana.com/docs/loki/latest/logql/log_queries/#json) formatted log line as labels. The extracted labels can be used in label filter expressions and used as values for a range aggregation via the unwrap operation."
    },
    {
      id: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.Logfmt,
      name: "Logfmt",
      params: [
        {
          name: "Strict",
          type: "boolean",
          optional: true,
          description: "With strict parsing enabled, the logfmt parser immediately stops scanning the log line and returns early with an error when it encounters any poorly formatted key/value pair."
        },
        {
          name: "Keep empty",
          type: "boolean",
          optional: true,
          description: "The logfmt parser retains standalone keys (keys without a value) as labels with its value set to empty string. "
        },
        {
          name: "Expression",
          type: "string",
          optional: true,
          restParam: true,
          minWidth: 18,
          placeholder: "field_name",
          description: "Using expressions with your logfmt parser will extract and rename (if provided) only the specified fields to labels. You can specify one or more expressions in this way."
        }
      ],
      defaultParams: [false, false],
      alternativesKey: "format",
      category: _types__WEBPACK_IMPORTED_MODULE_3__.LokiVisualQueryOperationCategory.Formats,
      orderRank: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationOrder.Parsers,
      renderer: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.pipelineRenderer,
      addOperationHandler: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.addLokiOperation,
      explainHandler: () => "This will extract all keys and values from a [logfmt](https://grafana.com/docs/loki/latest/logql/log_queries/#logfmt) formatted log line as labels. The extracted labels can be used in label filter expressions and used as values for a range aggregation via the unwrap operation."
    },
    {
      id: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.Regexp,
      name: "Regexp",
      params: [
        {
          name: "String",
          type: "string",
          hideName: true,
          placeholder: "<re>",
          description: "The regexp expression that matches the structure of a log line.",
          minWidth: 20
        }
      ],
      defaultParams: [""],
      alternativesKey: "format",
      category: _types__WEBPACK_IMPORTED_MODULE_3__.LokiVisualQueryOperationCategory.Formats,
      orderRank: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationOrder.Parsers,
      renderer: (model, def, innerExpr) => "".concat(innerExpr, " | regexp `").concat(model.params[0], "`"),
      addOperationHandler: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.addLokiOperation,
      explainHandler: () => 'The [regexp parser](https://grafana.com/docs/loki/latest/logql/log_queries/#regular-expression) takes a single parameter | regexp "<re>" which is the regular expression using the Golang RE2 syntax. The regular expression must contain a least one named sub-match (e.g (?P<name>re)), each sub-match will extract a different label. The expression matches the structure of a log line. The extracted labels can be used in label filter expressions and used as values for a range aggregation via the unwrap operation.'
    },
    {
      id: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.Pattern,
      name: "Pattern",
      params: [
        {
          name: "String",
          type: "string",
          hideName: true,
          placeholder: "<pattern-expression>",
          description: "The expression that matches the structure of a log line.",
          minWidth: 20
        }
      ],
      defaultParams: [""],
      alternativesKey: "format",
      category: _types__WEBPACK_IMPORTED_MODULE_3__.LokiVisualQueryOperationCategory.Formats,
      orderRank: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationOrder.Parsers,
      renderer: (model, def, innerExpr) => "".concat(innerExpr, " | pattern `").concat(model.params[0], "`"),
      addOperationHandler: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.addLokiOperation,
      explainHandler: () => "The [pattern parser](https://grafana.com/docs/loki/latest/logql/log_queries/#pattern) allows the explicit extraction of fields from log lines by defining a pattern expression (| pattern `<pattern-expression>`). The expression matches the structure of a log line. The extracted labels can be used in label filter expressions and used as values for a range aggregation via the unwrap operation."
    },
    {
      id: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.Unpack,
      name: "Unpack",
      params: [],
      defaultParams: [],
      alternativesKey: "format",
      category: _types__WEBPACK_IMPORTED_MODULE_3__.LokiVisualQueryOperationCategory.Formats,
      orderRank: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationOrder.Parsers,
      renderer: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.pipelineRenderer,
      addOperationHandler: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.addLokiOperation,
      explainHandler: () => "This will extract all keys and values from a JSON log line, [unpacking](https://grafana.com/docs/loki/latest/logql/log_queries/#unpack) all embedded labels in the pack stage. The extracted labels can be used in label filter expressions and used as values for a range aggregation via the unwrap operation."
    },
    {
      id: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.LineFormat,
      name: "Line format",
      params: [
        {
          name: "String",
          type: "string",
          hideName: true,
          placeholder: "{{.status_code}}",
          description: "A line template that can refer to stream labels and extracted labels.",
          minWidth: 20
        }
      ],
      defaultParams: [""],
      alternativesKey: "format",
      category: _types__WEBPACK_IMPORTED_MODULE_3__.LokiVisualQueryOperationCategory.Formats,
      orderRank: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationOrder.PipeOperations,
      renderer: (model, def, innerExpr) => "".concat(innerExpr, " | line_format `").concat(model.params[0], "`"),
      addOperationHandler: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.addLokiOperation,
      explainHandler: () => "This will replace log line using a specified template. The template can refer to stream labels and extracted labels.\n\nExample: `{{.status_code}} - {{.message}}`\n\n[Read the docs](https://grafana.com/docs/loki/latest/logql/log_queries/#line-format-expression) for more.\n        "
    },
    {
      id: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.LabelFormat,
      name: "Label format",
      params: [
        { name: "Label", type: "string" },
        { name: "Rename to", type: "string" }
      ],
      defaultParams: ["", ""],
      alternativesKey: "format",
      category: _types__WEBPACK_IMPORTED_MODULE_3__.LokiVisualQueryOperationCategory.Formats,
      orderRank: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationOrder.PipeOperations,
      renderer: (model, def, innerExpr) => "".concat(innerExpr, " | label_format ").concat(model.params[1], "=").concat(model.params[0]),
      addOperationHandler: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.addLokiOperation,
      explainHandler: () => 'This will change name of label to desired new label. In the example below, label "error_level" will be renamed to "level".\n\nExample: ``error_level=`level` ``\n\n[Read the docs](https://grafana.com/docs/loki/latest/logql/log_queries/#labels-format-expression) for more.\n        '
    },
    {
      id: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.LineContains,
      name: "Line contains",
      params: [
        {
          name: "",
          type: "string",
          hideName: true,
          restParam: true,
          placeholder: "Text to find",
          description: "Find log lines that contains this text",
          minWidth: 20,
          runQueryOnEnter: true
        }
      ],
      defaultParams: [""],
      alternativesKey: "line filter",
      category: _types__WEBPACK_IMPORTED_MODULE_3__.LokiVisualQueryOperationCategory.LineFilters,
      orderRank: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationOrder.LineFilters,
      renderer: (0,_operationUtils__WEBPACK_IMPORTED_MODULE_2__.getLineFilterRenderer)("|="),
      addOperationHandler: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.addLokiOperation,
      explainHandler: (op) => {
        var _a;
        return "Return log lines that contain string `".concat((_a = op.params) == null ? void 0 : _a.join("`, or `"), "`.");
      }
    },
    {
      id: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.LineContainsNot,
      name: "Line does not contain",
      params: [
        {
          name: "",
          type: "string",
          hideName: true,
          restParam: true,
          placeholder: "Text to exclude",
          description: "Find log lines that does not contain this text",
          minWidth: 26,
          runQueryOnEnter: true
        }
      ],
      defaultParams: [""],
      alternativesKey: "line filter",
      category: _types__WEBPACK_IMPORTED_MODULE_3__.LokiVisualQueryOperationCategory.LineFilters,
      orderRank: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationOrder.LineFilters,
      renderer: (0,_operationUtils__WEBPACK_IMPORTED_MODULE_2__.getLineFilterRenderer)("!="),
      addOperationHandler: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.addLokiOperation,
      explainHandler: (op) => {
        var _a;
        return "Return log lines that does not contain string `".concat((_a = op.params) == null ? void 0 : _a.join("`, or `"), "`.");
      }
    },
    {
      id: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.LineContainsCaseInsensitive,
      name: "Line contains case insensitive",
      params: [
        {
          name: "",
          type: "string",
          hideName: true,
          restParam: true,
          placeholder: "Text to find",
          description: "Find log lines that contains this text",
          minWidth: 33,
          runQueryOnEnter: true
        }
      ],
      defaultParams: [""],
      alternativesKey: "line filter",
      category: _types__WEBPACK_IMPORTED_MODULE_3__.LokiVisualQueryOperationCategory.LineFilters,
      orderRank: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationOrder.LineFilters,
      renderer: (0,_operationUtils__WEBPACK_IMPORTED_MODULE_2__.getLineFilterRenderer)("|~", true),
      addOperationHandler: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.addLokiOperation,
      explainHandler: (op) => {
        var _a;
        return "Return log lines that match regex `(?i)".concat((_a = op.params) == null ? void 0 : _a.join("`, or `(?i)"), "`.");
      }
    },
    {
      id: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.LineContainsNotCaseInsensitive,
      name: "Line does not contain case insensitive",
      params: [
        {
          name: "",
          type: "string",
          hideName: true,
          restParam: true,
          placeholder: "Text to exclude",
          description: "Find log lines that does not contain this text",
          minWidth: 40,
          runQueryOnEnter: true
        }
      ],
      defaultParams: [""],
      alternativesKey: "line filter",
      category: _types__WEBPACK_IMPORTED_MODULE_3__.LokiVisualQueryOperationCategory.LineFilters,
      orderRank: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationOrder.LineFilters,
      renderer: (0,_operationUtils__WEBPACK_IMPORTED_MODULE_2__.getLineFilterRenderer)("!~", true),
      addOperationHandler: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.addLokiOperation,
      explainHandler: (op) => {
        var _a;
        return "Return log lines that does not match regex `(?i)".concat((_a = op.params) == null ? void 0 : _a.join("`, or `(?i)"), "`.");
      }
    },
    {
      id: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.LineMatchesRegex,
      name: "Line contains regex match",
      params: [
        {
          name: "",
          type: "string",
          hideName: true,
          restParam: true,
          placeholder: "Pattern to match",
          description: "Find log lines that match this regex pattern",
          minWidth: 30,
          runQueryOnEnter: true
        }
      ],
      defaultParams: [""],
      alternativesKey: "line filter",
      category: _types__WEBPACK_IMPORTED_MODULE_3__.LokiVisualQueryOperationCategory.LineFilters,
      orderRank: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationOrder.LineFilters,
      renderer: (0,_operationUtils__WEBPACK_IMPORTED_MODULE_2__.getLineFilterRenderer)("|~"),
      addOperationHandler: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.addLokiOperation,
      explainHandler: (op) => {
        var _a;
        return "Return log lines that match a `RE2` regex pattern. `".concat((_a = op.params) == null ? void 0 : _a.join("`, or `"), "`.");
      }
    },
    {
      id: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.LineMatchesRegexNot,
      name: "Line does not match regex",
      params: [
        {
          name: "",
          type: "string",
          hideName: true,
          restParam: true,
          placeholder: "Pattern to exclude",
          description: "Find log lines that does not match this regex pattern",
          minWidth: 30,
          runQueryOnEnter: true
        }
      ],
      defaultParams: [""],
      alternativesKey: "line filter",
      category: _types__WEBPACK_IMPORTED_MODULE_3__.LokiVisualQueryOperationCategory.LineFilters,
      orderRank: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationOrder.LineFilters,
      renderer: (0,_operationUtils__WEBPACK_IMPORTED_MODULE_2__.getLineFilterRenderer)("!~"),
      addOperationHandler: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.addLokiOperation,
      explainHandler: (op) => {
        var _a;
        return "Return log lines that doesn't match a `RE2` regex pattern. `".concat((_a = op.params) == null ? void 0 : _a.join("`, or `"), "`.");
      }
    },
    {
      id: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.LineFilterIpMatches,
      name: "IP line filter expression",
      params: [
        {
          name: "Operator",
          type: "string",
          minWidth: 16,
          options: [_types__WEBPACK_IMPORTED_MODULE_3__.lokiOperators.contains, _types__WEBPACK_IMPORTED_MODULE_3__.lokiOperators.doesNotContain]
        },
        {
          name: "Pattern",
          type: "string",
          placeholder: "<pattern>",
          minWidth: 16,
          runQueryOnEnter: true
        }
      ],
      defaultParams: ["|=", ""],
      alternativesKey: "line filter",
      category: _types__WEBPACK_IMPORTED_MODULE_3__.LokiVisualQueryOperationCategory.LineFilters,
      orderRank: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationOrder.LineFilters,
      renderer: (op, def, innerExpr) => "".concat(innerExpr, " ").concat(op.params[0], " ip(`").concat(op.params[1], "`)"),
      addOperationHandler: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.addLokiOperation,
      explainHandler: (op) => "Return log lines using IP matching of `".concat(op.params[1], "`")
    },
    {
      id: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.LabelFilter,
      name: "Label filter expression",
      params: [
        { name: "Label", type: "string", minWidth: 14 },
        {
          name: "Operator",
          type: "string",
          minWidth: 14,
          options: [
            _types__WEBPACK_IMPORTED_MODULE_3__.lokiOperators.equals,
            _types__WEBPACK_IMPORTED_MODULE_3__.lokiOperators.doesNotEqual,
            _types__WEBPACK_IMPORTED_MODULE_3__.lokiOperators.matchesRegex,
            _types__WEBPACK_IMPORTED_MODULE_3__.lokiOperators.doesNotMatchRegex,
            _types__WEBPACK_IMPORTED_MODULE_3__.lokiOperators.greaterThan,
            _types__WEBPACK_IMPORTED_MODULE_3__.lokiOperators.lessThan,
            _types__WEBPACK_IMPORTED_MODULE_3__.lokiOperators.greaterThanOrEqual,
            _types__WEBPACK_IMPORTED_MODULE_3__.lokiOperators.lessThanOrEqual
          ]
        },
        { name: "Value", type: "string", minWidth: 14 }
      ],
      defaultParams: ["", "=", ""],
      alternativesKey: "label filter",
      category: _types__WEBPACK_IMPORTED_MODULE_3__.LokiVisualQueryOperationCategory.LabelFilters,
      orderRank: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationOrder.PipeOperations,
      renderer: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.labelFilterRenderer,
      addOperationHandler: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.addLokiOperation,
      explainHandler: () => "Label expression filter allows filtering using original and extracted labels."
    },
    {
      id: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.LabelFilterIpMatches,
      name: "IP label filter expression",
      params: [
        { name: "Label", type: "string", minWidth: 14 },
        {
          name: "Operator",
          type: "string",
          minWidth: 14,
          options: [_types__WEBPACK_IMPORTED_MODULE_3__.lokiOperators.equals, _types__WEBPACK_IMPORTED_MODULE_3__.lokiOperators.doesNotEqual]
        },
        { name: "Value", type: "string", minWidth: 14 }
      ],
      defaultParams: ["", "=", ""],
      alternativesKey: "label filter",
      category: _types__WEBPACK_IMPORTED_MODULE_3__.LokiVisualQueryOperationCategory.LabelFilters,
      orderRank: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationOrder.PipeOperations,
      renderer: (model, def, innerExpr) => "".concat(innerExpr, " | ").concat(model.params[0], " ").concat(model.params[1], " ip(`").concat(model.params[2], "`)"),
      addOperationHandler: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.addLokiOperation,
      explainHandler: (op) => "Return log lines using IP matching of `".concat(op.params[2], "` for `").concat(op.params[0], "` label")
    },
    {
      id: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.LabelFilterNoErrors,
      name: "No pipeline errors",
      params: [],
      defaultParams: [],
      alternativesKey: "label filter",
      category: _types__WEBPACK_IMPORTED_MODULE_3__.LokiVisualQueryOperationCategory.LabelFilters,
      orderRank: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationOrder.NoErrors,
      renderer: (model, def, innerExpr) => "".concat(innerExpr, " | __error__=``"),
      addOperationHandler: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.addLokiOperation,
      explainHandler: () => "Filter out all formatting and parsing errors."
    },
    {
      id: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.Unwrap,
      name: "Unwrap",
      params: [
        {
          name: "Identifier",
          type: "string",
          hideName: true,
          minWidth: 16,
          placeholder: "Label key",
          editor: _components_UnwrapParamEditor__WEBPACK_IMPORTED_MODULE_1__.UnwrapParamEditor
        },
        {
          name: "Conversion function",
          hideName: true,
          type: "string",
          options: ["duration", "duration_seconds", "bytes"],
          optional: true
        }
      ],
      defaultParams: ["", ""],
      alternativesKey: "format",
      category: _types__WEBPACK_IMPORTED_MODULE_3__.LokiVisualQueryOperationCategory.Formats,
      orderRank: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationOrder.Unwrap,
      renderer: (op, def, innerExpr) => "".concat(innerExpr, " | unwrap ").concat(op.params[1] ? "".concat(op.params[1], "(").concat(op.params[0], ")") : op.params[0]),
      addOperationHandler: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.addLokiOperation,
      explainHandler: (op) => {
        let label = String(op.params[0]).length > 0 ? op.params[0] : "<label>";
        return "Use the extracted label `".concat(label, "` as sample values instead of log lines for the subsequent range aggregation.").concat(op.params[1] ? " Conversion function `".concat(op.params[1], "` wrapping `").concat(label, "` will attempt to convert this label from a specific format (e.g. 3k, 500ms).") : "");
      }
    },
    {
      id: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.Decolorize,
      name: "Decolorize",
      params: [],
      defaultParams: [],
      alternativesKey: "format",
      category: _types__WEBPACK_IMPORTED_MODULE_3__.LokiVisualQueryOperationCategory.Formats,
      orderRank: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationOrder.PipeOperations,
      renderer: (op, def, innerExpr) => "".concat(innerExpr, " | decolorize"),
      addOperationHandler: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.addLokiOperation,
      explainHandler: () => "This will remove ANSI color codes from log lines."
    },
    {
      id: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.Drop,
      name: "Drop",
      params: [
        // As drop can support both labels (e.g. job) and expressions (e.g. job="grafana"), we
        // use input and not LabelParamEditor.
        {
          name: "Label",
          type: "string",
          restParam: true,
          optional: true,
          minWidth: 18,
          placeholder: 'job="grafana"',
          description: "Specify labels or expressions to drop."
        }
      ],
      defaultParams: [""],
      alternativesKey: "format",
      category: _types__WEBPACK_IMPORTED_MODULE_3__.LokiVisualQueryOperationCategory.Formats,
      orderRank: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationOrder.PipeOperations,
      renderer: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.pipelineRenderer,
      addOperationHandler: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.addLokiOperation,
      explainHandler: () => "The drop expression will drop the given labels in the pipeline."
    },
    {
      id: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.Keep,
      name: "Keep",
      params: [
        // As keep can support both labels (e.g. job) and expressions (e.g. job="grafana"), we
        // use input and not LabelParamEditor.
        {
          name: "Label",
          type: "string",
          restParam: true,
          optional: true,
          minWidth: 18,
          placeholder: 'job="grafana"',
          description: "Specify labels or expressions to keep."
        }
      ],
      defaultParams: [""],
      alternativesKey: "format",
      category: _types__WEBPACK_IMPORTED_MODULE_3__.LokiVisualQueryOperationCategory.Formats,
      orderRank: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationOrder.PipeOperations,
      renderer: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.pipelineRenderer,
      addOperationHandler: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.addLokiOperation,
      explainHandler: () => "The keep expression will keep only the specified labels in the pipeline and drop all the other labels."
    },
    ..._binaryScalarOperations__WEBPACK_IMPORTED_MODULE_0__.binaryScalarOperations,
    {
      id: _types__WEBPACK_IMPORTED_MODULE_3__.LokiOperationId.NestedQuery,
      name: "Binary operation with query",
      params: [],
      defaultParams: [],
      category: _types__WEBPACK_IMPORTED_MODULE_3__.LokiVisualQueryOperationCategory.BinaryOps,
      renderer: (model, def, innerExpr) => innerExpr,
      addOperationHandler: _operationUtils__WEBPACK_IMPORTED_MODULE_2__.addNestedQueryHandler
    }
  ];
  return list;
}
const operationDefinitions = getOperationDefinitions();
function explainOperator(id) {
  var _a;
  const definition = operationDefinitions.find((operation) => operation.id === id);
  const explain = ((_a = definition == null ? void 0 : definition.explainHandler) == null ? void 0 : _a.call(definition, { id: "", params: ["<value>"] })) || "";
  return explain.replace(/\[(.*)\]\(.*\)/g, "$1");
}
function getDefinitionById(id) {
  return operationDefinitions.find((x) => x.id === id);
}
function checkParamsAreValid(def, params) {
  if (params.length < def.params.filter((param) => !param.optional).length) {
    return false;
  }
  return true;
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/querybuilder/parsing.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildVisualQueryFromString: () => (/* binding */ buildVisualQueryFromString),
/* harmony export */   handleExpression: () => (/* binding */ handleExpression),
/* harmony export */   handleQuotes: () => (/* binding */ handleQuotes)
/* harmony export */ });
/* harmony import */ var _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/lezer-logql/index.es.js");
/* harmony import */ var _binaryScalarOperations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/binaryScalarOperations.ts");
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/operations.ts");
/* harmony import */ var _parsingUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/parsingUtils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/types.ts");






function buildVisualQueryFromString(expr) {
  const replacedExpr = (0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.replaceVariables)(expr);
  const tree = _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.parser.parse(replacedExpr);
  const node = tree.topNode;
  const visQuery = {
    labels: [],
    operations: []
  };
  const context = {
    query: visQuery,
    errors: []
  };
  try {
    handleExpression(replacedExpr, node, context);
  } catch (err) {
    console.error(err);
    if (err instanceof Error) {
      context.errors.push({
        text: err.message
      });
    }
  }
  if (isEmptyQuery(context.query)) {
    context.errors = [];
  }
  return context;
}
function handleExpression(expr, node, context) {
  const visQuery = context.query;
  switch (node.type.id) {
    case _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Matcher: {
      visQuery.labels.push(getLabel(expr, node));
      const err = node.getChild(_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.ErrorId);
      if (err) {
        context.errors.push((0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.makeError)(expr, err));
      }
      break;
    }
    case _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LineFilter: {
      const { operation, error } = getLineFilter(expr, node);
      if (operation) {
        visQuery.operations.push(operation);
      }
      if (error) {
        context.errors.push(createNotSupportedError(expr, node, error));
      }
      break;
    }
    case _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LabelParser: {
      visQuery.operations.push(getLabelParser(expr, node));
      break;
    }
    case _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LabelFilter: {
      const { operation, error } = getLabelFilter(expr, node);
      if (operation) {
        visQuery.operations.push(operation);
      }
      if (error) {
        context.errors.push(createNotSupportedError(expr, node, error));
      }
      break;
    }
    case _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.JsonExpressionParser: {
      visQuery.operations.push(getJsonExpressionParser(expr, node));
      break;
    }
    case _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LogfmtParser:
    case _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LogfmtExpressionParser: {
      const { operation, error } = getLogfmtParser(expr, node);
      if (operation) {
        visQuery.operations.push(operation);
      }
      if (error) {
        context.errors.push(createNotSupportedError(expr, node, error));
      }
      break;
    }
    case _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LineFormatExpr: {
      visQuery.operations.push(getLineFormat(expr, node));
      break;
    }
    case _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LabelFormatMatcher: {
      visQuery.operations.push(getLabelFormat(expr, node));
      break;
    }
    case _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.UnwrapExpr: {
      const { operation, error } = handleUnwrapExpr(expr, node, context);
      if (operation) {
        visQuery.operations.push(operation);
      }
      if (error) {
        context.errors.push(createNotSupportedError(expr, node, error));
      }
      break;
    }
    case _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Decolorize: {
      visQuery.operations.push(getDecolorize());
      break;
    }
    case _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.RangeAggregationExpr: {
      visQuery.operations.push(handleRangeAggregation(expr, node, context));
      break;
    }
    case _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.VectorAggregationExpr: {
      visQuery.operations.push(handleVectorAggregation(expr, node, context));
      break;
    }
    case _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.BinOpExpr: {
      handleBinary(expr, node, context);
      break;
    }
    case _parsingUtils__WEBPACK_IMPORTED_MODULE_3__.ErrorId: {
      if (isIntervalVariableError(node)) {
        break;
      }
      context.errors.push((0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.makeError)(expr, node));
      break;
    }
    case _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.DropLabelsExpr: {
      visQuery.operations.push(handleDropFilter(expr, node, context));
      break;
    }
    case _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.KeepLabelsExpr: {
      visQuery.operations.push(handleKeepFilter(expr, node, context));
      break;
    }
    default: {
      let child = node.firstChild;
      while (child) {
        handleExpression(expr, child, context);
        child = child.nextSibling;
      }
    }
  }
}
function getLabel(expr, node) {
  const labelNode = node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Identifier);
  const label = (0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, labelNode);
  const op = (0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, labelNode == null ? void 0 : labelNode.nextSibling);
  let value = (0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.String));
  value = value.substring(1, value.length - 1);
  return {
    label,
    op,
    value
  };
}
function getLineFilter(expr, node) {
  var _a;
  const filter = (0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Filter));
  const filterExpr = handleQuotes((0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.String)));
  const ipLineFilter = (_a = node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.FilterOp)) == null ? void 0 : _a.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Ip);
  if (ipLineFilter) {
    return {
      operation: {
        id: _types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.LineFilterIpMatches,
        params: [filter, filterExpr]
      }
    };
  }
  const params = [filterExpr];
  let orFilter = node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.OrFilter);
  while (orFilter) {
    params.push(handleQuotes((0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, orFilter.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.String))));
    orFilter = orFilter.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.OrFilter);
  }
  const mapFilter = {
    "|=": _types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.LineContains,
    "!=": _types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.LineContainsNot,
    "|~": _types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.LineMatchesRegex,
    "!~": _types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.LineMatchesRegexNot
  };
  return {
    operation: {
      id: mapFilter[filter],
      params
    }
  };
}
function getLabelParser(expr, node) {
  const parserNode = node.firstChild;
  const parser2 = (0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, parserNode);
  const string = handleQuotes((0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.String)));
  let params = !!string ? [string] : [];
  const opDef = (0,_operations__WEBPACK_IMPORTED_MODULE_2__.getDefinitionById)(parser2);
  if (opDef && !(0,_operations__WEBPACK_IMPORTED_MODULE_2__.checkParamsAreValid)(opDef, params)) {
    params = (opDef == null ? void 0 : opDef.defaultParams) || [];
  }
  return {
    id: parser2,
    params
  };
}
function getJsonExpressionParser(expr, node) {
  const parserNode = node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Json);
  const parser2 = (0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, parserNode);
  const params = [...(0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getAllByType)(expr, node, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LabelExtractionExpression)];
  return {
    id: parser2,
    params
  };
}
function getLogfmtParser(expr, node) {
  const flags = [];
  const labels = [];
  let error = void 0;
  const offset = node.from;
  node.toTree().iterate({
    enter: (subNode) => {
      if (subNode.type.id === _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.ParserFlag) {
        flags.push(expr.substring(subNode.from + offset, subNode.to + offset));
      } else if (subNode.type.id === _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LabelExtractionExpression) {
        labels.push(expr.substring(subNode.from + offset, subNode.to + offset));
      } else if (subNode.type.id === _parsingUtils__WEBPACK_IMPORTED_MODULE_3__.ErrorId) {
        error = 'Unexpected string "'.concat(expr.substring(subNode.from + offset, subNode.to + offset), '"');
      }
    }
  });
  const operation = {
    id: _types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.Logfmt,
    params: [flags.includes("--strict"), flags.includes("--keep-empty"), ...labels]
  };
  return {
    operation,
    error
  };
}
function getLabelFilter(expr, node) {
  if (node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Or) || node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.And) || node.getChild("Comma")) {
    return {
      error: 'Label filter with comma, "and", "or" not supported in query builder'
    };
  }
  if (node.firstChild.type.id === _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.IpLabelFilter) {
    const ipLabelFilter = node.firstChild;
    const label2 = ipLabelFilter == null ? void 0 : ipLabelFilter.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Identifier);
    const op2 = label2 == null ? void 0 : label2.nextSibling;
    const value2 = ipLabelFilter == null ? void 0 : ipLabelFilter.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.String);
    const valueString = handleQuotes((0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, value2));
    return {
      operation: {
        id: _types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.LabelFilterIpMatches,
        params: [(0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, label2), (0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, op2), valueString]
      }
    };
  }
  const id = _types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.LabelFilter;
  if (node.firstChild.type.id === _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.UnitFilter) {
    const filter2 = node.firstChild.firstChild;
    const label2 = filter2.firstChild;
    const op2 = label2.nextSibling;
    const value2 = op2.nextSibling;
    const valueString = handleQuotes((0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, value2));
    return {
      operation: {
        id,
        params: [(0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, label2), (0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, op2), valueString]
      }
    };
  }
  const filter = node.firstChild;
  const label = filter.firstChild;
  const op = label.nextSibling;
  const value = op.nextSibling;
  const params = [(0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, label), (0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, op), handleQuotes((0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, value))];
  if (params.join("") === "__error__=") {
    return {
      operation: {
        id: _types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.LabelFilterNoErrors,
        params: []
      }
    };
  }
  return {
    operation: {
      id,
      params
    }
  };
}
function getLineFormat(expr, node) {
  const id = _types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.LineFormat;
  const string = handleQuotes((0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.String)));
  return {
    id,
    params: [string]
  };
}
function getLabelFormat(expr, node) {
  const id = _types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.LabelFormat;
  const renameTo = node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Identifier);
  const op = renameTo.nextSibling;
  const originalLabel = op.nextSibling;
  return {
    id,
    params: [(0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, originalLabel), handleQuotes((0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, renameTo))]
  };
}
function getDecolorize() {
  const id = _types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.Decolorize;
  return {
    id,
    params: []
  };
}
function handleUnwrapExpr(expr, node, context) {
  var _a;
  const unwrapExprChild = node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.UnwrapExpr);
  const labelFilterChild = node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LabelFilter);
  const unwrapChild = node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Unwrap);
  if (unwrapExprChild) {
    handleExpression(expr, unwrapExprChild, context);
  }
  if (labelFilterChild) {
    handleExpression(expr, labelFilterChild, context);
  }
  if (unwrapChild) {
    if (((_a = unwrapChild.nextSibling) == null ? void 0 : _a.type.id) === _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.ConvOp) {
      const convOp = unwrapChild.nextSibling;
      const identifier = convOp.nextSibling;
      return {
        operation: {
          id: _types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.Unwrap,
          params: [(0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, identifier), (0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, convOp)]
        }
      };
    }
    return {
      operation: {
        id: _types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.Unwrap,
        params: [(0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, unwrapChild == null ? void 0 : unwrapChild.nextSibling), ""]
      }
    };
  }
  return {};
}
function handleRangeAggregation(expr, node, context) {
  const nameNode = node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.RangeOp);
  const funcName = (0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, nameNode);
  const number = node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Number);
  const logExpr = node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LogRangeExpr);
  const params = number !== null && number !== void 0 ? [(0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, number)] : [];
  const range = logExpr == null ? void 0 : logExpr.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Range);
  const rangeValue = range ? (0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, range) : null;
  const grouping = node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Grouping);
  if (rangeValue) {
    params.unshift(rangeValue.substring(1, rangeValue.length - 1));
  }
  if (grouping) {
    params.push(...(0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getAllByType)(expr, grouping, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Identifier));
  }
  const op = {
    id: funcName,
    params
  };
  if (logExpr) {
    handleExpression(expr, logExpr, context);
  }
  return op;
}
function handleVectorAggregation(expr, node, context) {
  var _a, _b;
  const nameNode = node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.VectorOp);
  let funcName = (0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, nameNode);
  const grouping = node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Grouping);
  const params = [];
  const numberNode = node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Number);
  if (numberNode) {
    params.push(Number((0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, numberNode)));
  }
  if (grouping) {
    const byModifier = grouping.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.By);
    if (byModifier && funcName) {
      funcName = "__".concat(funcName, "_by");
    }
    const withoutModifier = grouping.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Without);
    if (withoutModifier) {
      funcName = "__".concat(funcName, "_without");
    }
    params.push(...(0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getAllByType)(expr, grouping, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Identifier));
  }
  const metricExpr = node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.MetricExpr);
  const op = { id: funcName, params };
  if (metricExpr) {
    if (((_a = metricExpr.firstChild) == null ? void 0 : _a.type.id) === _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.BinOpExpr) {
      context.errors.push({
        text: "Query parsing is ambiguous.",
        from: metricExpr.firstChild.from,
        to: (_b = metricExpr.firstChild) == null ? void 0 : _b.to
      });
    }
    handleExpression(expr, metricExpr, context);
  }
  return op;
}
const operatorToOpName = _binaryScalarOperations__WEBPACK_IMPORTED_MODULE_1__.binaryScalarDefs.reduce((acc, def) => {
  acc[def.sign] = {
    id: def.id,
    comparison: def.comparison
  };
  return acc;
}, {});
function handleBinary(expr, node, context) {
  const visQuery = context.query;
  const left = node.firstChild;
  const op = (0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, left.nextSibling);
  const binModifier = getBinaryModifier(expr, node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.BinOpModifier));
  const right = node.lastChild;
  const opDef = operatorToOpName[op];
  const leftNumber = getLastChildWithSelector(left, "MetricExpr.LiteralExpr.Number");
  const rightNumber = getLastChildWithSelector(right, "MetricExpr.LiteralExpr.Number");
  const rightBinary = right.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.BinOpExpr);
  if (leftNumber) {
  } else {
    handleExpression(expr, left, context);
  }
  if (rightNumber) {
    visQuery.operations.push((0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.makeBinOp)(opDef, expr, right, !!(binModifier == null ? void 0 : binModifier.isBool)));
  } else if (rightBinary) {
    const leftMostChild = (0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getLeftMostChild)(right);
    if ((leftMostChild == null ? void 0 : leftMostChild.type.id) === _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Number) {
      visQuery.operations.push((0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.makeBinOp)(opDef, expr, leftMostChild, !!(binModifier == null ? void 0 : binModifier.isBool)));
    }
    handleExpression(expr, right, context);
  } else {
    visQuery.binaryQueries = visQuery.binaryQueries || [];
    const binQuery = {
      operator: op,
      query: {
        labels: [],
        operations: []
      }
    };
    if (binModifier == null ? void 0 : binModifier.isMatcher) {
      binQuery.vectorMatchesType = binModifier.matchType;
      binQuery.vectorMatches = binModifier.matches;
    }
    visQuery.binaryQueries.push(binQuery);
    handleExpression(expr, right, {
      query: binQuery.query,
      errors: context.errors
    });
  }
}
function getBinaryModifier(expr, node) {
  var _a;
  if (!node) {
    return void 0;
  }
  const matcher = node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.OnOrIgnoringModifier);
  const boolMatcher = node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Bool);
  if (!matcher && boolMatcher) {
    return { isBool: true, isMatcher: false };
  } else {
    if (!matcher) {
      return void 0;
    }
    const labels = (0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, (_a = matcher.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.GroupingLabels)) == null ? void 0 : _a.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.GroupingLabelList));
    return {
      isMatcher: true,
      isBool: !!boolMatcher,
      matches: labels,
      matchType: matcher.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.On) ? "on" : "ignoring"
    };
  }
}
function isIntervalVariableError(node) {
  var _a;
  return ((_a = node == null ? void 0 : node.parent) == null ? void 0 : _a.type.id) === _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Range;
}
function handleQuotes(string) {
  if (string[0] === '"' && string[string.length - 1] === '"') {
    return string.substring(1, string.length - 1).replace(/\\"/g, '"').replace(/\\\\/g, "\\");
  }
  return string.replace(/`/g, "");
}
function getLastChildWithSelector(node, selector) {
  let child = node;
  const children = selector.split(".");
  for (const s of children) {
    child = child.getChild(s);
    if (!child) {
      return null;
    }
  }
  return child;
}
function createNotSupportedError(expr, node, error) {
  const err = (0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.makeError)(expr, node);
  err.text = "".concat(error, ": ").concat(err.text);
  return err;
}
function isEmptyQuery(query) {
  if (query.labels.length === 0 && query.operations.length === 0) {
    return true;
  }
  return false;
}
function handleDropFilter(expr, node, context) {
  const labels = [];
  let exploringNode = node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.DropLabels);
  while (exploringNode) {
    const label = (0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, exploringNode.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.DropLabel));
    if (label) {
      labels.push(label);
    }
    exploringNode = exploringNode == null ? void 0 : exploringNode.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.DropLabels);
  }
  labels.reverse();
  return {
    id: _types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.Drop,
    params: labels
  };
}
function handleKeepFilter(expr, node, context) {
  const labels = [];
  let exploringNode = node.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.KeepLabels);
  while (exploringNode) {
    const label = (0,_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.getString)(expr, exploringNode.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.KeepLabel));
    if (label) {
      labels.push(label);
    }
    exploringNode = exploringNode == null ? void 0 : exploringNode.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.KeepLabels);
  }
  labels.reverse();
  return {
    id: _types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.Keep,
    params: labels
  };
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/querybuilder/parsingUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorId: () => (/* binding */ ErrorId),
/* harmony export */   getAllByType: () => (/* binding */ getAllByType),
/* harmony export */   getLeftMostChild: () => (/* binding */ getLeftMostChild),
/* harmony export */   getString: () => (/* binding */ getString),
/* harmony export */   makeBinOp: () => (/* binding */ makeBinOp),
/* harmony export */   makeError: () => (/* binding */ makeError),
/* harmony export */   regexifyLabelValuesQueryString: () => (/* binding */ regexifyLabelValuesQueryString),
/* harmony export */   replaceVariables: () => (/* binding */ replaceVariables),
/* harmony export */   returnVariables: () => (/* binding */ returnVariables),
/* harmony export */   variableRegex: () => (/* binding */ variableRegex)
/* harmony export */ });

const ErrorId = 0;
function getLeftMostChild(cur) {
  return cur.firstChild ? getLeftMostChild(cur.firstChild) : cur;
}
function makeError(expr, node) {
  var _a;
  return {
    text: getString(expr, node),
    // TODO: this are positions in the string with the replaced variables. Means it cannot be used to show exact
    //  placement of the error for the user. We need some translation table to positions before the variable
    //  replace.
    from: node.from,
    to: node.to,
    parentType: (_a = node.parent) == null ? void 0 : _a.name
  };
}
const variableRegex = /\$(\w+)|\[\[([\s\S]+?)(?::(\w+))?\]\]|\${(\w+)(?:\.([^:^\}]+))?(?::([^\}]+))?}/g;
function replaceVariables(expr) {
  return expr.replace(variableRegex, (match, var1, var2, fmt2, var3, fieldPath, fmt3) => {
    const fmt = fmt2 || fmt3;
    let variable = var1;
    let varType = "0";
    if (var2) {
      variable = var2;
      varType = "1";
    }
    if (var3) {
      variable = var3;
      varType = "2";
    }
    return "__V_".concat(varType, "__") + variable + "__V__" + (fmt ? "__F__" + fmt + "__F__" : "");
  });
}
const varTypeFunc = [
  (v, f) => "$".concat(v),
  (v, f) => "[[".concat(v).concat(f ? ":".concat(f) : "", "]]"),
  (v, f) => "${".concat(v).concat(f ? ":".concat(f) : "", "}")
];
function returnVariables(expr) {
  return expr.replace(/__V_(\d)__(.+?)__V__(?:__F__(\w+)__F__)?/g, (match, type, v, f) => {
    return varTypeFunc[parseInt(type, 10)](v, f);
  });
}
function getString(expr, node) {
  if (!node) {
    return "";
  }
  return returnVariables(expr.substring(node.from, node.to));
}
function makeBinOp(opDef, expr, numberNode, hasBool) {
  const params = [parseFloat(getString(expr, numberNode))];
  if (opDef.comparison) {
    params.push(hasBool);
  }
  return {
    id: opDef.id,
    params
  };
}
function getAllByType(expr, cur, type) {
  if (cur.type.id === type || cur.name === type) {
    return [getString(expr, cur)];
  }
  const values = [];
  let pos = 0;
  let child = cur.childAfter(pos);
  while (child) {
    values.push(...getAllByType(expr, child, type));
    pos = child.to;
    child = cur.childAfter(pos);
  }
  return values;
}
const regexifyLabelValuesQueryString = (query) => {
  const queryArray = query.split(" ");
  return queryArray.map((query2) => "".concat(query2, ".*")).join("");
};


/***/ }),

/***/ "./public/app/plugins/datasource/loki/querybuilder/state.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeEditorMode: () => (/* binding */ changeEditorMode),
/* harmony export */   getDefaultEditorMode: () => (/* binding */ getDefaultEditorMode),
/* harmony export */   getQueryWithDefaults: () => (/* binding */ getQueryWithDefaults)
/* harmony export */ });
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/loki/types.ts");



const queryEditorModeDefaultLocalStorageKey = "LokiQueryEditorModeDefault";
function changeEditorMode(query, editorMode, onChange) {
  if (query.expr === "") {
    window.localStorage.setItem(queryEditorModeDefaultLocalStorageKey, editorMode);
  }
  onChange({ ...query, editorMode });
}
function getDefaultEditorMode(expr) {
  if (expr != null && expr !== "") {
    return _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.QueryEditorMode.Code;
  }
  const value = window.localStorage.getItem(queryEditorModeDefaultLocalStorageKey);
  switch (value) {
    case "code":
      return _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.QueryEditorMode.Code;
    case "builder":
    default:
      return _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.QueryEditorMode.Builder;
  }
}
function getQueryWithDefaults(query) {
  let result = query;
  if (!query.editorMode) {
    result = { ...query, editorMode: getDefaultEditorMode(query.expr) };
  }
  if (query.expr == null) {
    result = { ...result, expr: "" };
  }
  if (query.queryType == null) {
    result = { ...result, queryType: _types__WEBPACK_IMPORTED_MODULE_0__.LokiQueryType.Range };
  }
  return result;
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/querybuilder/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LokiOperationId: () => (/* binding */ LokiOperationId),
/* harmony export */   LokiOperationOrder: () => (/* binding */ LokiOperationOrder),
/* harmony export */   LokiQueryPatternType: () => (/* binding */ LokiQueryPatternType),
/* harmony export */   LokiVisualQueryOperationCategory: () => (/* binding */ LokiVisualQueryOperationCategory),
/* harmony export */   lokiOperators: () => (/* binding */ lokiOperators)
/* harmony export */ });
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/types.js");


var LokiQueryPatternType = /* @__PURE__ */ ((LokiQueryPatternType2) => {
  LokiQueryPatternType2["Log"] = "log";
  LokiQueryPatternType2["Metric"] = "metric";
  return LokiQueryPatternType2;
})(LokiQueryPatternType || {});
var LokiVisualQueryOperationCategory = /* @__PURE__ */ ((LokiVisualQueryOperationCategory2) => {
  LokiVisualQueryOperationCategory2["Aggregations"] = "Aggregations";
  LokiVisualQueryOperationCategory2["RangeFunctions"] = "Range functions";
  LokiVisualQueryOperationCategory2["Functions"] = "Functions";
  LokiVisualQueryOperationCategory2["Formats"] = "Formats";
  LokiVisualQueryOperationCategory2["LineFilters"] = "Line filters";
  LokiVisualQueryOperationCategory2["LabelFilters"] = "Label filters";
  LokiVisualQueryOperationCategory2[LokiVisualQueryOperationCategory2["BinaryOps"] = _grafana_experimental__WEBPACK_IMPORTED_MODULE_0__.BINARY_OPERATIONS_KEY] = "BinaryOps";
  return LokiVisualQueryOperationCategory2;
})(LokiVisualQueryOperationCategory || {});
var LokiOperationId = /* @__PURE__ */ ((LokiOperationId2) => {
  LokiOperationId2["Json"] = "json";
  LokiOperationId2["Logfmt"] = "logfmt";
  LokiOperationId2["Regexp"] = "regexp";
  LokiOperationId2["Pattern"] = "pattern";
  LokiOperationId2["Unpack"] = "unpack";
  LokiOperationId2["LineFormat"] = "line_format";
  LokiOperationId2["LabelFormat"] = "label_format";
  LokiOperationId2["Decolorize"] = "decolorize";
  LokiOperationId2["Drop"] = "drop";
  LokiOperationId2["Keep"] = "keep";
  LokiOperationId2["Rate"] = "rate";
  LokiOperationId2["RateCounter"] = "rate_counter";
  LokiOperationId2["CountOverTime"] = "count_over_time";
  LokiOperationId2["SumOverTime"] = "sum_over_time";
  LokiOperationId2["AvgOverTime"] = "avg_over_time";
  LokiOperationId2["MaxOverTime"] = "max_over_time";
  LokiOperationId2["MinOverTime"] = "min_over_time";
  LokiOperationId2["FirstOverTime"] = "first_over_time";
  LokiOperationId2["LastOverTime"] = "last_over_time";
  LokiOperationId2["StdvarOverTime"] = "stdvar_over_time";
  LokiOperationId2["StddevOverTime"] = "stddev_over_time";
  LokiOperationId2["QuantileOverTime"] = "quantile_over_time";
  LokiOperationId2["BytesRate"] = "bytes_rate";
  LokiOperationId2["BytesOverTime"] = "bytes_over_time";
  LokiOperationId2["AbsentOverTime"] = "absent_over_time";
  LokiOperationId2["Sum"] = "sum";
  LokiOperationId2["Avg"] = "avg";
  LokiOperationId2["Min"] = "min";
  LokiOperationId2["Max"] = "max";
  LokiOperationId2["Stddev"] = "stddev";
  LokiOperationId2["Stdvar"] = "stdvar";
  LokiOperationId2["Count"] = "count";
  LokiOperationId2["TopK"] = "topk";
  LokiOperationId2["BottomK"] = "bottomk";
  LokiOperationId2["LineContains"] = "__line_contains";
  LokiOperationId2["LineContainsNot"] = "__line_contains_not";
  LokiOperationId2["LineContainsCaseInsensitive"] = "__line_contains_case_insensitive";
  LokiOperationId2["LineContainsNotCaseInsensitive"] = "__line_contains_not_case_insensitive";
  LokiOperationId2["LineMatchesRegex"] = "__line_matches_regex";
  LokiOperationId2["LineMatchesRegexNot"] = "__line_matches_regex_not";
  LokiOperationId2["LineFilterIpMatches"] = "__line_filter_ip_matches";
  LokiOperationId2["LabelFilter"] = "__label_filter";
  LokiOperationId2["LabelFilterNoErrors"] = "__label_filter_no_errors";
  LokiOperationId2["LabelFilterIpMatches"] = "__label_filter_ip_marches";
  LokiOperationId2["Unwrap"] = "unwrap";
  LokiOperationId2["SumBy"] = "__sum_by";
  LokiOperationId2["SumWithout"] = "__sum_without";
  LokiOperationId2["Addition"] = "__addition";
  LokiOperationId2["Subtraction"] = "__subtraction";
  LokiOperationId2["MultiplyBy"] = "__multiply_by";
  LokiOperationId2["DivideBy"] = "__divide_by";
  LokiOperationId2["Modulo"] = "__modulo";
  LokiOperationId2["Exponent"] = "__exponent";
  LokiOperationId2["NestedQuery"] = "__nested_query";
  LokiOperationId2["EqualTo"] = "__equal_to";
  LokiOperationId2["NotEqualTo"] = "__not_equal_to";
  LokiOperationId2["GreaterThan"] = "__greater_than";
  LokiOperationId2["LessThan"] = "__less_than";
  LokiOperationId2["GreaterOrEqual"] = "__greater_or_equal";
  LokiOperationId2["LessOrEqual"] = "__less_or_equal";
  return LokiOperationId2;
})(LokiOperationId || {});
var LokiOperationOrder = /* @__PURE__ */ ((LokiOperationOrder2) => {
  LokiOperationOrder2[LokiOperationOrder2["LineFilters"] = 1] = "LineFilters";
  LokiOperationOrder2[LokiOperationOrder2["Parsers"] = 2] = "Parsers";
  LokiOperationOrder2[LokiOperationOrder2["PipeOperations"] = 3] = "PipeOperations";
  LokiOperationOrder2[LokiOperationOrder2["Unwrap"] = 4] = "Unwrap";
  LokiOperationOrder2[LokiOperationOrder2["NoErrors"] = 5] = "NoErrors";
  LokiOperationOrder2[LokiOperationOrder2["RangeVectorFunction"] = 5] = "RangeVectorFunction";
  LokiOperationOrder2[LokiOperationOrder2["Last"] = 6] = "Last";
  return LokiOperationOrder2;
})(LokiOperationOrder || {});
const lokiOperators = {
  equals: { label: "=", value: "=", description: "Equals", isMultiValue: false },
  doesNotEqual: { label: "!=", value: "!=", description: "Does not equal", isMultiValue: false },
  matchesRegex: { label: "=~", value: "=~", description: "Matches regex", isMultiValue: true },
  doesNotMatchRegex: { label: "!~", value: "!~", description: "Does not match regex", isMultiValue: true },
  greaterThan: { label: ">", value: ">", description: "Greater than", isMultiValue: false },
  greaterThanOrEqual: { label: ">=", value: ">=", description: "Greater than or equal to", isMultiValue: false },
  lessThan: { label: "<", value: "<", description: "Less than", isMultiValue: false },
  lessThanOrEqual: { label: "<=", value: "<=", description: "Less than or equal to", isMultiValue: false },
  contains: { label: "|=", value: "|=", description: "Contains", isMultiValue: false },
  doesNotContain: { label: "!=", value: "!=", description: "Does not contain", isMultiValue: false }
};


/***/ }),

/***/ "./public/app/plugins/datasource/loki/responseUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataFrameHasLevelLabel: () => (/* binding */ dataFrameHasLevelLabel),
/* harmony export */   dataFrameHasLokiError: () => (/* binding */ dataFrameHasLokiError),
/* harmony export */   extractHasErrorLabelFromDataFrame: () => (/* binding */ extractHasErrorLabelFromDataFrame),
/* harmony export */   extractLabelKeysFromDataFrame: () => (/* binding */ extractLabelKeysFromDataFrame),
/* harmony export */   extractLevelLikeLabelFromDataFrame: () => (/* binding */ extractLevelLikeLabelFromDataFrame),
/* harmony export */   extractLogParserFromDataFrame: () => (/* binding */ extractLogParserFromDataFrame),
/* harmony export */   extractUnwrapLabelKeysFromDataFrame: () => (/* binding */ extractUnwrapLabelKeysFromDataFrame)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/datetime/durationutil.ts");
/* harmony import */ var _languageUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/loki/languageUtils.ts");
/* harmony import */ var _lineParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/lineParser.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/types.ts");





function dataFrameHasLokiError(frame) {
  var _a, _b;
  const labelSets = (_b = (_a = frame.fields.find((f) => f.name === "labels")) == null ? void 0 : _a.values) != null ? _b : [];
  return labelSets.some((labels) => labels.__error__ !== void 0);
}
function dataFrameHasLevelLabel(frame) {
  var _a, _b;
  const labelSets = (_b = (_a = frame.fields.find((f) => f.name === "labels")) == null ? void 0 : _a.values) != null ? _b : [];
  return labelSets.some((labels) => labels.level !== void 0);
}
function extractLogParserFromDataFrame(frame) {
  const lineField = frame.fields.find((field) => field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.string);
  if (lineField == null) {
    return { hasJSON: false, hasLogfmt: false, hasPack: false };
  }
  const logLines = lineField.values;
  let hasJSON = false;
  let hasLogfmt = false;
  let hasPack = false;
  logLines.forEach((line) => {
    if ((0,_lineParser__WEBPACK_IMPORTED_MODULE_1__.isLogLineJSON)(line)) {
      hasJSON = true;
      hasPack = (0,_lineParser__WEBPACK_IMPORTED_MODULE_1__.isLogLinePacked)(line);
    }
    if ((0,_lineParser__WEBPACK_IMPORTED_MODULE_1__.isLogLineLogfmt)(line)) {
      hasLogfmt = true;
    }
  });
  return { hasLogfmt, hasJSON, hasPack };
}
function extractLabelKeysFromDataFrame(frame, type = _types__WEBPACK_IMPORTED_MODULE_2__.LabelType.Indexed) {
  var _a, _b, _c, _d, _e, _f;
  const labelsArray = (_c = (_b = (_a = frame == null ? void 0 : frame.fields) == null ? void 0 : _a.find((field) => field.name === "labels")) == null ? void 0 : _b.values) != null ? _c : [];
  const labelTypeArray = (_f = (_e = (_d = frame == null ? void 0 : frame.fields) == null ? void 0 : _d.find((field) => field.name === "labelTypes")) == null ? void 0 : _e.values) != null ? _f : [];
  if (!(labelsArray == null ? void 0 : labelsArray.length)) {
    return [];
  }
  if (!(labelTypeArray == null ? void 0 : labelTypeArray.length)) {
    if (type === _types__WEBPACK_IMPORTED_MODULE_2__.LabelType.Indexed) {
      const { keys: labelKeys } = (0,_languageUtils__WEBPACK_IMPORTED_MODULE_0__.processLabels)(labelsArray);
      return labelKeys;
    }
    return [];
  }
  let labelsSet = /* @__PURE__ */ new Set();
  for (let i = 0; i < labelsArray.length; i++) {
    const labels = labelsArray[i];
    const labelsType = labelTypeArray[i];
    const allLabelKeys = Object.keys(labels).filter((key) => labelsType[key] === type);
    labelsSet = /* @__PURE__ */ new Set([...labelsSet, ...allLabelKeys]);
  }
  return Array.from(labelsSet);
}
function extractUnwrapLabelKeysFromDataFrame(frame) {
  var _a, _b, _c;
  const labelsArray = (_c = (_b = (_a = frame == null ? void 0 : frame.fields) == null ? void 0 : _a.find((field) => field.name === "labels")) == null ? void 0 : _b.values) != null ? _c : [];
  if (!(labelsArray == null ? void 0 : labelsArray.length)) {
    return [];
  }
  const possibleUnwrapLabels = Object.keys(labelsArray[0]).filter((key) => {
    const value = labelsArray[0][key];
    if (!value) {
      return false;
    }
    return !isNaN(Number(value)) || (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.isValidGoDuration)(value) || (0,_languageUtils__WEBPACK_IMPORTED_MODULE_0__.isBytesString)(value);
  });
  return possibleUnwrapLabels.filter((label) => labelsArray.every((obj) => obj[label]));
}
function extractHasErrorLabelFromDataFrame(frame) {
  const labelField = frame.fields.find((field) => field.name === "labels" && field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.other);
  if (labelField == null) {
    return false;
  }
  const labels = labelField.values;
  return labels.some((label) => label["__error__"]);
}
function extractLevelLikeLabelFromDataFrame(frame) {
  const labelField = frame.fields.find((field) => field.name === "labels" && field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.other);
  if (labelField == null) {
    return null;
  }
  const labelsArray = labelField.values.slice(0, 2);
  let levelLikeLabel = null;
  for (let labels of labelsArray) {
    const label = Object.keys(labels).find((label2) => label2 === "lvl" || label2.includes("level"));
    if (label) {
      levelLikeLabel = label;
      break;
    }
  }
  return levelLikeLabel;
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/sortDataFrame.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SortDirection: () => (/* binding */ SortDirection),
/* harmony export */   sortDataFrameByTime: () => (/* binding */ sortDataFrameByTime)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");


var SortDirection = /* @__PURE__ */ ((SortDirection2) => {
  SortDirection2[SortDirection2["Ascending"] = 0] = "Ascending";
  SortDirection2[SortDirection2["Descending"] = 1] = "Descending";
  return SortDirection2;
})(SortDirection || {});
function makeIndex(field, dir) {
  const fieldValues = field.values;
  const { nanos } = field;
  const index = Array(fieldValues.length);
  for (let i = 0; i < index.length; i++) {
    index[i] = i;
  }
  const isAsc = dir === 0 /* Ascending */;
  index.sort((a, b) => {
    const valA = fieldValues[a];
    const valB = fieldValues[b];
    if (valA < valB) {
      return isAsc ? -1 : 1;
    }
    if (valA > valB) {
      return isAsc ? 1 : -1;
    }
    if (nanos === void 0) {
      return 0;
    }
    const nanoA = nanos[a];
    const nanoB = nanos[b];
    if (nanoA < nanoB) {
      return isAsc ? -1 : 1;
    }
    if (nanoA > nanoB) {
      return isAsc ? 1 : -1;
    }
    return 0;
  });
  return index;
}
function sortDataFrameByTime(frame, dir) {
  const { fields, ...rest } = frame;
  const timeField = fields.find((field) => field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.time);
  if (timeField === void 0) {
    throw new Error("missing timestamp field. should never happen");
  }
  const index = makeIndex(timeField, dir);
  return {
    ...rest,
    fields: fields.map((field) => ({
      ...field,
      values: sorted(field.values, index),
      nanos: field.nanos === void 0 ? void 0 : sorted(field.nanos, index)
    }))
  };
}
function sorted(vals, index) {
  return vals.map((_, idx) => vals[index[idx]]);
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/streaming.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertToWebSocketUrl: () => (/* binding */ convertToWebSocketUrl),
/* harmony export */   doLokiChannelStream: () => (/* binding */ doLokiChannelStream),
/* harmony export */   getLiveStreamKey: () => (/* binding */ getLiveStreamKey)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/defer.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/dataframe/StreamingDataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/live.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/live.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");




async function getLiveStreamKey(query) {
  const str = JSON.stringify({ expr: query.expr });
  const msgUint8 = new TextEncoder().encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-1", msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer.slice(0, 8)));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}
function doLokiChannelStream(query, ds, options) {
  var _a;
  const range = options.range;
  const maxDelta = range.to.valueOf() - range.from.valueOf() + 1e3;
  let maxLength = (_a = options.maxDataPoints) != null ? _a : 1e3;
  if (maxLength > 100) {
    maxLength *= 2;
  }
  let frame = void 0;
  const updateFrame = (msg) => {
    if (msg == null ? void 0 : msg.message) {
      const p = msg.message;
      if (!frame) {
        frame = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.StreamingDataFrame.fromDataFrameJSON(p, {
          maxLength,
          maxDelta,
          displayNameFormat: query.legendFormat
        });
      } else {
        frame.push(p);
      }
    }
    return frame;
  };
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.defer)(() => getLiveStreamKey(query)).pipe(
    (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((key) => {
      return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getGrafanaLiveSrv)().getStream({
        scope: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.LiveChannelScope.DataSource,
        namespace: ds.uid,
        path: "tail/".concat(key),
        data: {
          ...query,
          timeRange: {
            from: range.from.valueOf().toString(),
            to: range.to.valueOf().toString()
          }
        }
      }).pipe(
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)((evt) => {
          const frame2 = updateFrame(evt);
          return {
            data: frame2 ? [frame2] : [],
            state: _grafana_data__WEBPACK_IMPORTED_MODULE_6__.LoadingState.Streaming
          };
        })
      );
    })
  );
}
const convertToWebSocketUrl = (url) => {
  const protocol = window.location.protocol === "https:" ? "wss://" : "ws://";
  let backend = "".concat(protocol).concat(window.location.host).concat(_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.config.appSubUrl);
  if (backend.endsWith("/")) {
    backend = backend.slice(0, -1);
  }
  return "".concat(backend).concat(url);
};


/***/ }),

/***/ "./public/app/plugins/datasource/loki/tracking.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onDashboardLoadedHandler: () => (/* binding */ onDashboardLoadedHandler),
/* harmony export */   trackGroupedQueries: () => (/* binding */ trackGroupedQueries),
/* harmony export */   trackQuery: () => (/* binding */ trackQuery)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/types/app.ts");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/experimental/dist/esm/VisualQueryBuilder/types.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/loki/datasource.ts");
/* harmony import */ var _plugin_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/plugin.json");
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/queryUtils.ts");
/* harmony import */ var _querybuilder_parsingUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/parsingUtils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/loki/types.ts");









const onDashboardLoadedHandler = ({
  payload: { dashboardId, orgId, grafanaVersion, queries }
}) => {
  var _a, _b;
  try {
    const lokiQueries = (_b = (_a = queries[_plugin_json__WEBPACK_IMPORTED_MODULE_1__.id]) == null ? void 0 : _a.filter((query) => !query.hide)) == null ? void 0 : _b.map((query) => (0,_queryUtils__WEBPACK_IMPORTED_MODULE_2__.getNormalizedLokiQuery)(query));
    if (!(lokiQueries == null ? void 0 : lokiQueries.length)) {
      return;
    }
    const logsQueries = lokiQueries.filter((query) => (0,_queryUtils__WEBPACK_IMPORTED_MODULE_2__.isLogsQuery)(query.expr));
    const metricQueries = lokiQueries.filter((query) => !(0,_queryUtils__WEBPACK_IMPORTED_MODULE_2__.isLogsQuery)(query.expr));
    const instantQueries = lokiQueries.filter((query) => query.queryType === _types__WEBPACK_IMPORTED_MODULE_4__.LokiQueryType.Instant);
    const rangeQueries = lokiQueries.filter((query) => query.queryType === _types__WEBPACK_IMPORTED_MODULE_4__.LokiQueryType.Range);
    const builderModeQueries = lokiQueries.filter((query) => query.editorMode === _grafana_experimental__WEBPACK_IMPORTED_MODULE_5__.QueryEditorMode.Builder);
    const codeModeQueries = lokiQueries.filter((query) => query.editorMode === _grafana_experimental__WEBPACK_IMPORTED_MODULE_5__.QueryEditorMode.Code);
    const queriesWithTemplateVariables = lokiQueries.filter(isQueryWithTemplateVariables);
    const queriesWithChangedResolution = lokiQueries.filter(isQueryWithChangedResolution);
    const queriesWithChangedLineLimit = lokiQueries.filter(isQueryWithChangedLineLimit);
    const queriesWithChangedLegend = lokiQueries.filter(isQueryWithChangedLegend);
    const event = {
      grafana_version: grafanaVersion,
      dashboard_id: dashboardId,
      org_id: orgId,
      queries_count: lokiQueries.length,
      logs_queries_count: logsQueries.length,
      metric_queries_count: metricQueries.length,
      instant_queries_count: instantQueries.length,
      range_queries_count: rangeQueries.length,
      builder_mode_queries_count: builderModeQueries.length,
      code_mode_queries_count: codeModeQueries.length,
      queries_with_template_variables_count: queriesWithTemplateVariables.length,
      queries_with_changed_resolution_count: queriesWithChangedResolution.length,
      queries_with_changed_line_limit_count: queriesWithChangedLineLimit.length,
      queries_with_changed_legend_count: queriesWithChangedLegend.length
    };
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.reportInteraction)("grafana_loki_dashboard_loaded", event);
  } catch (error) {
    console.error("error in loki tracking handler", error);
  }
};
const isQueryWithTemplateVariables = (query) => {
  return _querybuilder_parsingUtils__WEBPACK_IMPORTED_MODULE_3__.variableRegex.test(query.expr);
};
const isQueryWithChangedResolution = (query) => {
  if (!query.resolution) {
    return false;
  }
  return query.resolution !== 1;
};
const isQueryWithChangedLineLimit = (query) => {
  return query.maxLines !== null && query.maxLines !== void 0;
};
const isQueryWithChangedLegend = (query) => {
  if (!query.legendFormat) {
    return false;
  }
  return query.legendFormat !== "";
};
const shouldNotReportBasedOnRefId = (refId) => {
  const starters = [
    _datasource__WEBPACK_IMPORTED_MODULE_0__.REF_ID_STARTER_ANNOTATION,
    _datasource__WEBPACK_IMPORTED_MODULE_0__.REF_ID_STARTER_LOG_ROW_CONTEXT,
    _datasource__WEBPACK_IMPORTED_MODULE_0__.REF_ID_STARTER_LOG_VOLUME,
    _datasource__WEBPACK_IMPORTED_MODULE_0__.REF_ID_STARTER_LOG_SAMPLE,
    _datasource__WEBPACK_IMPORTED_MODULE_0__.REF_ID_DATA_SAMPLES
  ];
  if (starters.some((starter) => refId.startsWith(starter))) {
    return true;
  }
  return false;
};
const calculateTotalBytes = (response) => {
  var _a, _b, _c, _d, _e, _f;
  let totalBytes = 0;
  for (const frame of response.data) {
    const byteKey = (_b = (_a = frame.meta) == null ? void 0 : _a.custom) == null ? void 0 : _b.lokiQueryStatKey;
    if (byteKey) {
      totalBytes += (_f = (_e = (_d = (_c = frame.meta) == null ? void 0 : _c.stats) == null ? void 0 : _d.find((stat) => stat.displayName === byteKey)) == null ? void 0 : _e.value) != null ? _f : 0;
    }
  }
  return totalBytes;
};
function trackQuery(response, request, startTime, trackingSettings = {}, extraPayload = {}) {
  var _a, _b, _c, _d;
  const { app, targets: queries } = request;
  if (app !== _grafana_data__WEBPACK_IMPORTED_MODULE_7__.CoreApp.Explore) {
    return;
  }
  let totalBytes = calculateTotalBytes(response);
  for (const query of queries) {
    if (shouldNotReportBasedOnRefId(query.refId)) {
      return;
    }
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.reportInteraction)("grafana_explore_loki_query_executed", {
      grafana_version: _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.config.buildInfo.version,
      editor_mode: query.editorMode,
      has_data: response.data.some((frame) => frame.length > 0),
      has_error: response.error !== void 0,
      legend: query.legendFormat,
      line_limit: query.maxLines,
      obfuscated_query: (0,_queryUtils__WEBPACK_IMPORTED_MODULE_2__.obfuscate)(query.expr),
      query_type: (0,_queryUtils__WEBPACK_IMPORTED_MODULE_2__.isLogsQuery)(query.expr) ? "logs" : "metric",
      query_vector_type: query.queryType,
      resolution: query.resolution,
      simultaneously_executed_query_count: queries.filter((query2) => !query2.hide).length,
      simultaneously_hidden_query_count: queries.filter((query2) => query2.hide).length,
      time_range_from: (_b = (_a = request == null ? void 0 : request.range) == null ? void 0 : _a.from) == null ? void 0 : _b.toISOString(),
      time_range_to: (_d = (_c = request == null ? void 0 : request.range) == null ? void 0 : _c.to) == null ? void 0 : _d.toISOString(),
      time_taken: Date.now() - startTime.getTime(),
      bytes_processed: totalBytes,
      is_split: false,
      predefined_operations_applied: trackingSettings.predefinedOperations ? query.expr.includes(trackingSettings.predefinedOperations) : "n/a",
      ...extraPayload
    });
  }
}
function trackGroupedQueries(response, groupedRequests, originalRequest, startTime, trackingSettings = {}) {
  const splittingPayload = {
    split_query_group_count: groupedRequests.length,
    split_query_largest_partition_size: Math.max(...groupedRequests.map(({ partition }) => partition.length)),
    split_query_total_request_count: groupedRequests.reduce((total, { partition }) => total + partition.length, 0),
    is_split: true,
    simultaneously_executed_query_count: originalRequest.targets.filter((query) => !query.hide).length,
    simultaneously_hidden_query_count: originalRequest.targets.filter((query) => query.hide).length
  };
  for (const group of groupedRequests) {
    const split_query_partition_size = group.partition.length;
    trackQuery(response, group.request, startTime, trackingSettings, {
      ...splittingPayload,
      split_query_partition_size
    });
  }
}


/***/ }),

/***/ "./node_modules/react-fast-compare/index.js":
/***/ ((module) => {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.3
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    // START: Modifications:
    // Apply guards for `Object.create(null)` handling. See:
    // - https://github.com/FormidableLabs/react-fast-compare/issues/64
    // - https://github.com/epoberezkin/fast-deep-equal/issues/49
    if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === 'function' && typeof b.valueOf === 'function') return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString && typeof a.toString === 'function' && typeof b.toString === 'function') return a.toString() === b.toString();
    // END: Modifications

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/react-popper-tooltip/dist/esm/react-popper-tooltip.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePopperTooltip: () => (/* binding */ usePopperTooltip)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js");





function useGetLatest(val) {
  var ref = react__WEBPACK_IMPORTED_MODULE_2__.useRef(val);
  ref.current = val;
  return react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function () {
    return ref.current;
  }, []);
}

var noop = function noop() {// do nothing
};

function useControlledState(_ref) {
  var initial = _ref.initial,
      value = _ref.value,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? noop : _ref$onChange;

  if (initial === undefined && value === undefined) {
    throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');
  }

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(initial),
      state = _React$useState[0],
      setState = _React$useState[1];

  var getLatest = useGetLatest(state);
  var set = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function (updater) {
    var state = getLatest();
    var updatedState = typeof updater === 'function' ? updater(state) : updater;
    if (typeof updatedState.persist === 'function') updatedState.persist();
    setState(updatedState);
    if (typeof onChange === 'function') onChange(updatedState);
  }, [getLatest, onChange]);
  var isControlled = value !== undefined;
  return [isControlled ? value : state, isControlled ? onChange : set];
}
function generateBoundingClientRect(x, y) {
  if (x === void 0) {
    x = 0;
  }

  if (y === void 0) {
    y = 0;
  }

  return function () {
    return {
      width: 0,
      height: 0,
      top: y,
      right: x,
      bottom: y,
      left: x,
      x: 0,
      y: 0,
      toJSON: function toJSON() {
        return null;
      }
    };
  };
}

var _excluded = ["styles", "attributes"];
var virtualElement = {
  getBoundingClientRect: generateBoundingClientRect()
};
var defaultConfig = {
  closeOnOutsideClick: true,
  closeOnTriggerHidden: false,
  defaultVisible: false,
  delayHide: 0,
  delayShow: 0,
  followCursor: false,
  interactive: false,
  mutationObserverOptions: {
    attributes: true,
    childList: true,
    subtree: true
  },
  offset: [0, 6],
  trigger: 'hover'
};
function usePopperTooltip(config, popperOptions) {
  var _popperProps$state, _popperProps$state$mo, _popperProps$state$mo2;

  if (config === void 0) {
    config = {};
  }

  if (popperOptions === void 0) {
    popperOptions = {};
  }

  // Merging options with default options.
  // Keys with undefined values are replaced with the default ones if any.
  // Keys with other values pass through.
  var finalConfig = Object.keys(defaultConfig).reduce(function (config, key) {
    var _extends2;

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, config, (_extends2 = {}, _extends2[key] = config[key] !== undefined ? config[key] : defaultConfig[key], _extends2));
  }, config);
  var defaultModifiers = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(function () {
    return [{
      name: 'offset',
      options: {
        offset: finalConfig.offset
      }
    }];
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  Array.isArray(finalConfig.offset) ? finalConfig.offset : []);

  var finalPopperOptions = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, popperOptions, {
    placement: popperOptions.placement || finalConfig.placement,
    modifiers: popperOptions.modifiers || defaultModifiers
  });

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(null),
      triggerRef = _React$useState[0],
      setTriggerRef = _React$useState[1];

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_2__.useState(null),
      tooltipRef = _React$useState2[0],
      setTooltipRef = _React$useState2[1];

  var _useControlledState = useControlledState({
    initial: finalConfig.defaultVisible,
    value: finalConfig.visible,
    onChange: finalConfig.onVisibleChange
  }),
      visible = _useControlledState[0],
      setVisible = _useControlledState[1];

  var timer = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    return function () {
      return clearTimeout(timer.current);
    };
  }, []);

  var _usePopper = (0,react_popper__WEBPACK_IMPORTED_MODULE_3__.usePopper)(finalConfig.followCursor ? virtualElement : triggerRef, tooltipRef, finalPopperOptions),
      styles = _usePopper.styles,
      attributes = _usePopper.attributes,
      popperProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_usePopper, _excluded);

  var update = popperProps.update;
  var getLatest = useGetLatest({
    visible: visible,
    triggerRef: triggerRef,
    tooltipRef: tooltipRef,
    finalConfig: finalConfig
  });
  var isTriggeredBy = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function (trigger) {
    return Array.isArray(finalConfig.trigger) ? finalConfig.trigger.includes(trigger) : finalConfig.trigger === trigger;
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  Array.isArray(finalConfig.trigger) ? finalConfig.trigger : [finalConfig.trigger]);
  var hideTooltip = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function () {
    clearTimeout(timer.current);
    timer.current = window.setTimeout(function () {
      return setVisible(false);
    }, finalConfig.delayHide);
  }, [finalConfig.delayHide, setVisible]);
  var showTooltip = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function () {
    clearTimeout(timer.current);
    timer.current = window.setTimeout(function () {
      return setVisible(true);
    }, finalConfig.delayShow);
  }, [finalConfig.delayShow, setVisible]);
  var toggleTooltip = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function () {
    if (getLatest().visible) {
      hideTooltip();
    } else {
      showTooltip();
    }
  }, [getLatest, hideTooltip, showTooltip]); // Handle click outside

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (!getLatest().finalConfig.closeOnOutsideClick) return;

    var handleClickOutside = function handleClickOutside(event) {
      var _event$composedPath;

      var _getLatest = getLatest(),
          tooltipRef = _getLatest.tooltipRef,
          triggerRef = _getLatest.triggerRef;

      var target = (event.composedPath == null ? void 0 : (_event$composedPath = event.composedPath()) == null ? void 0 : _event$composedPath[0]) || event.target;

      if (target instanceof Node) {
        if (tooltipRef != null && triggerRef != null && !tooltipRef.contains(target) && !triggerRef.contains(target)) {
          hideTooltip();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      return document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [getLatest, hideTooltip]); // Trigger: click

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (triggerRef == null || !isTriggeredBy('click')) return;
    triggerRef.addEventListener('click', toggleTooltip);
    return function () {
      return triggerRef.removeEventListener('click', toggleTooltip);
    };
  }, [triggerRef, isTriggeredBy, toggleTooltip]); // Trigger: double-click

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (triggerRef == null || !isTriggeredBy('double-click')) return;
    triggerRef.addEventListener('dblclick', toggleTooltip);
    return function () {
      return triggerRef.removeEventListener('dblclick', toggleTooltip);
    };
  }, [triggerRef, isTriggeredBy, toggleTooltip]); // Trigger: right-click

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (triggerRef == null || !isTriggeredBy('right-click')) return;

    var preventDefaultAndToggle = function preventDefaultAndToggle(event) {
      // Don't show the context menu
      event.preventDefault();
      toggleTooltip();
    };

    triggerRef.addEventListener('contextmenu', preventDefaultAndToggle);
    return function () {
      return triggerRef.removeEventListener('contextmenu', preventDefaultAndToggle);
    };
  }, [triggerRef, isTriggeredBy, toggleTooltip]); // Trigger: focus

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (triggerRef == null || !isTriggeredBy('focus')) return;
    triggerRef.addEventListener('focus', showTooltip);
    triggerRef.addEventListener('blur', hideTooltip);
    return function () {
      triggerRef.removeEventListener('focus', showTooltip);
      triggerRef.removeEventListener('blur', hideTooltip);
    };
  }, [triggerRef, isTriggeredBy, showTooltip, hideTooltip]); // Trigger: hover on trigger

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (triggerRef == null || !isTriggeredBy('hover')) return;
    triggerRef.addEventListener('mouseenter', showTooltip);
    triggerRef.addEventListener('mouseleave', hideTooltip);
    return function () {
      triggerRef.removeEventListener('mouseenter', showTooltip);
      triggerRef.removeEventListener('mouseleave', hideTooltip);
    };
  }, [triggerRef, isTriggeredBy, showTooltip, hideTooltip]); // Trigger: hover on tooltip, keep it open if hovered

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (tooltipRef == null || !isTriggeredBy('hover') || !getLatest().finalConfig.interactive) return;
    tooltipRef.addEventListener('mouseenter', showTooltip);
    tooltipRef.addEventListener('mouseleave', hideTooltip);
    return function () {
      tooltipRef.removeEventListener('mouseenter', showTooltip);
      tooltipRef.removeEventListener('mouseleave', hideTooltip);
    };
  }, [tooltipRef, isTriggeredBy, showTooltip, hideTooltip, getLatest]); // Handle closing tooltip if trigger hidden

  var isReferenceHidden = popperProps == null ? void 0 : (_popperProps$state = popperProps.state) == null ? void 0 : (_popperProps$state$mo = _popperProps$state.modifiersData) == null ? void 0 : (_popperProps$state$mo2 = _popperProps$state$mo.hide) == null ? void 0 : _popperProps$state$mo2.isReferenceHidden;
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (finalConfig.closeOnTriggerHidden && isReferenceHidden) hideTooltip();
  }, [finalConfig.closeOnTriggerHidden, hideTooltip, isReferenceHidden]); // Handle follow cursor

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (!finalConfig.followCursor || triggerRef == null) return;

    function setMousePosition(_ref) {
      var clientX = _ref.clientX,
          clientY = _ref.clientY;
      virtualElement.getBoundingClientRect = generateBoundingClientRect(clientX, clientY);
      update == null ? void 0 : update();
    }

    triggerRef.addEventListener('mousemove', setMousePosition);
    return function () {
      return triggerRef.removeEventListener('mousemove', setMousePosition);
    };
  }, [finalConfig.followCursor, triggerRef, update]); // Handle tooltip DOM mutation changes (aka mutation observer)

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (tooltipRef == null || update == null || finalConfig.mutationObserverOptions == null) return;
    var observer = new MutationObserver(update);
    observer.observe(tooltipRef, finalConfig.mutationObserverOptions);
    return function () {
      return observer.disconnect();
    };
  }, [finalConfig.mutationObserverOptions, tooltipRef, update]); // Tooltip props getter

  var getTooltipProps = function getTooltipProps(args) {
    if (args === void 0) {
      args = {};
    }

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, args, {
      style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, args.style, styles.popper)
    }, attributes.popper, {
      'data-popper-interactive': finalConfig.interactive
    });
  }; // Arrow props getter


  var getArrowProps = function getArrowProps(args) {
    if (args === void 0) {
      args = {};
    }

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, args, attributes.arrow, {
      style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, args.style, styles.arrow),
      'data-popper-arrow': true
    });
  };

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    getArrowProps: getArrowProps,
    getTooltipProps: getTooltipProps,
    setTooltipRef: setTooltipRef,
    setTriggerRef: setTriggerRef,
    tooltipRef: tooltipRef,
    triggerRef: triggerRef,
    visible: visible
  }, popperProps);
}


//# sourceMappingURL=react-popper-tooltip.js.map


/***/ }),

/***/ "./node_modules/react-popper/lib/esm/usePopper.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePopper: () => (/* binding */ usePopper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@popperjs/core/lib/popper.js");
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-fast-compare/index.js");
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-popper/lib/esm/utils.js");





var EMPTY_MODIFIERS = [];
var usePopper = function usePopper(referenceElement, popperElement, options) {
  if (options === void 0) {
    options = {};
  }

  var prevOptions = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || 'bottom',
    strategy: options.strategy || 'absolute',
    modifiers: options.modifiers || EMPTY_MODIFIERS
  };

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: '0',
        top: '0'
      },
      arrow: {
        position: 'absolute'
      }
    },
    attributes: {}
  }),
      state = _React$useState[0],
      setState = _React$useState[1];

  var updateStateModifier = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return {
      name: 'updateState',
      enabled: true,
      phase: 'write',
      fn: function fn(_ref) {
        var state = _ref.state;
        var elements = Object.keys(state.elements);
        react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync(function () {
          setState({
            styles: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.fromEntries)(elements.map(function (element) {
              return [element, state.styles[element] || {}];
            })),
            attributes: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.fromEntries)(elements.map(function (element) {
              return [element, state.attributes[element]];
            }))
          });
        });
      },
      requires: ['computeStyles']
    };
  }, []);
  var popperOptions = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
        name: 'applyStyles',
        enabled: false
      }])
    };

    if (react_fast_compare__WEBPACK_IMPORTED_MODULE_2___default()(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  (0,_utils__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(function () {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  (0,_utils__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(function () {
    if (referenceElement == null || popperElement == null) {
      return;
    }

    var createPopper = options.createPopper || _popperjs_core__WEBPACK_IMPORTED_MODULE_4__.createPopper;
    var popperInstance = createPopper(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function () {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};

/***/ }),

/***/ "./node_modules/react-popper/lib/esm/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromEntries: () => (/* binding */ fromEntries),
/* harmony export */   safeInvoke: () => (/* binding */ safeInvoke),
/* harmony export */   setRef: () => (/* binding */ setRef),
/* harmony export */   unwrapArray: () => (/* binding */ unwrapArray),
/* harmony export */   useIsomorphicLayoutEffect: () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */

var safeInvoke = function safeInvoke(fn) {
  if (typeof fn === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
};
/**
 * Sets a ref using either a ref callback or a ref object
 */

var setRef = function setRef(ref, node) {
  // if its a function call it
  if (typeof ref === 'function') {
    return safeInvoke(ref, node);
  } // otherwise we should treat it as a ref object
  else if (ref != null) {
      ref.current = node;
    }
};
/**
 * Simple ponyfill for Object.fromEntries
 */

var fromEntries = function fromEntries(entries) {
  return entries.reduce(function (acc, _ref) {
    var key = _ref[0],
        value = _ref[1];
    acc[key] = value;
    return acc;
  }, {});
};
/**
 * Small wrapper around `useLayoutEffect` to get rid of the warning on SSR envs
 */

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && window.document && window.document.createElement ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/dom/WebSocketSubject.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebSocketSubject: () => (/* binding */ WebSocketSubject)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscriber.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _ReplaySubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js");






var DEFAULT_WEBSOCKET_CONFIG = {
    url: '',
    deserializer: function (e) { return JSON.parse(e.data); },
    serializer: function (value) { return JSON.stringify(value); },
};
var WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT = 'WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }';
var WebSocketSubject = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(WebSocketSubject, _super);
    function WebSocketSubject(urlConfigOrSource, destination) {
        var _this = _super.call(this) || this;
        _this._socket = null;
        if (urlConfigOrSource instanceof _Observable__WEBPACK_IMPORTED_MODULE_1__.Observable) {
            _this.destination = destination;
            _this.source = urlConfigOrSource;
        }
        else {
            var config = (_this._config = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, DEFAULT_WEBSOCKET_CONFIG));
            _this._output = new _Subject__WEBPACK_IMPORTED_MODULE_2__.Subject();
            if (typeof urlConfigOrSource === 'string') {
                config.url = urlConfigOrSource;
            }
            else {
                for (var key in urlConfigOrSource) {
                    if (urlConfigOrSource.hasOwnProperty(key)) {
                        config[key] = urlConfigOrSource[key];
                    }
                }
            }
            if (!config.WebSocketCtor && WebSocket) {
                config.WebSocketCtor = WebSocket;
            }
            else if (!config.WebSocketCtor) {
                throw new Error('no WebSocket constructor can be found');
            }
            _this.destination = new _ReplaySubject__WEBPACK_IMPORTED_MODULE_3__.ReplaySubject();
        }
        return _this;
    }
    WebSocketSubject.prototype.lift = function (operator) {
        var sock = new WebSocketSubject(this._config, this.destination);
        sock.operator = operator;
        sock.source = this;
        return sock;
    };
    WebSocketSubject.prototype._resetState = function () {
        this._socket = null;
        if (!this.source) {
            this.destination = new _ReplaySubject__WEBPACK_IMPORTED_MODULE_3__.ReplaySubject();
        }
        this._output = new _Subject__WEBPACK_IMPORTED_MODULE_2__.Subject();
    };
    WebSocketSubject.prototype.multiplex = function (subMsg, unsubMsg, messageFilter) {
        var self = this;
        return new _Observable__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
            try {
                self.next(subMsg());
            }
            catch (err) {
                observer.error(err);
            }
            var subscription = self.subscribe({
                next: function (x) {
                    try {
                        if (messageFilter(x)) {
                            observer.next(x);
                        }
                    }
                    catch (err) {
                        observer.error(err);
                    }
                },
                error: function (err) { return observer.error(err); },
                complete: function () { return observer.complete(); },
            });
            return function () {
                try {
                    self.next(unsubMsg());
                }
                catch (err) {
                    observer.error(err);
                }
                subscription.unsubscribe();
            };
        });
    };
    WebSocketSubject.prototype._connectSocket = function () {
        var _this = this;
        var _a = this._config, WebSocketCtor = _a.WebSocketCtor, protocol = _a.protocol, url = _a.url, binaryType = _a.binaryType;
        var observer = this._output;
        var socket = null;
        try {
            socket = protocol ? new WebSocketCtor(url, protocol) : new WebSocketCtor(url);
            this._socket = socket;
            if (binaryType) {
                this._socket.binaryType = binaryType;
            }
        }
        catch (e) {
            observer.error(e);
            return;
        }
        var subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_4__.Subscription(function () {
            _this._socket = null;
            if (socket && socket.readyState === 1) {
                socket.close();
            }
        });
        socket.onopen = function (evt) {
            var _socket = _this._socket;
            if (!_socket) {
                socket.close();
                _this._resetState();
                return;
            }
            var openObserver = _this._config.openObserver;
            if (openObserver) {
                openObserver.next(evt);
            }
            var queue = _this.destination;
            _this.destination = _Subscriber__WEBPACK_IMPORTED_MODULE_5__.Subscriber.create(function (x) {
                if (socket.readyState === 1) {
                    try {
                        var serializer = _this._config.serializer;
                        socket.send(serializer(x));
                    }
                    catch (e) {
                        _this.destination.error(e);
                    }
                }
            }, function (err) {
                var closingObserver = _this._config.closingObserver;
                if (closingObserver) {
                    closingObserver.next(undefined);
                }
                if (err && err.code) {
                    socket.close(err.code, err.reason);
                }
                else {
                    observer.error(new TypeError(WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT));
                }
                _this._resetState();
            }, function () {
                var closingObserver = _this._config.closingObserver;
                if (closingObserver) {
                    closingObserver.next(undefined);
                }
                socket.close();
                _this._resetState();
            });
            if (queue && queue instanceof _ReplaySubject__WEBPACK_IMPORTED_MODULE_3__.ReplaySubject) {
                subscription.add(queue.subscribe(_this.destination));
            }
        };
        socket.onerror = function (e) {
            _this._resetState();
            observer.error(e);
        };
        socket.onclose = function (e) {
            if (socket === _this._socket) {
                _this._resetState();
            }
            var closeObserver = _this._config.closeObserver;
            if (closeObserver) {
                closeObserver.next(e);
            }
            if (e.wasClean) {
                observer.complete();
            }
            else {
                observer.error(e);
            }
        };
        socket.onmessage = function (e) {
            try {
                var deserializer = _this._config.deserializer;
                observer.next(deserializer(e));
            }
            catch (err) {
                observer.error(err);
            }
        };
    };
    WebSocketSubject.prototype._subscribe = function (subscriber) {
        var _this = this;
        var source = this.source;
        if (source) {
            return source.subscribe(subscriber);
        }
        if (!this._socket) {
            this._connectSocket();
        }
        this._output.subscribe(subscriber);
        subscriber.add(function () {
            var _socket = _this._socket;
            if (_this._output.observers.length === 0) {
                if (_socket && (_socket.readyState === 1 || _socket.readyState === 0)) {
                    _socket.close();
                }
                _this._resetState();
            }
        });
        return subscriber;
    };
    WebSocketSubject.prototype.unsubscribe = function () {
        var _socket = this._socket;
        if (_socket && (_socket.readyState === 1 || _socket.readyState === 0)) {
            _socket.close();
        }
        this._resetState();
        _super.prototype.unsubscribe.call(this);
    };
    return WebSocketSubject;
}(_Subject__WEBPACK_IMPORTED_MODULE_2__.AnonymousSubject));

//# sourceMappingURL=WebSocketSubject.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/dom/webSocket.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   webSocket: () => (/* binding */ webSocket)
/* harmony export */ });
/* harmony import */ var _WebSocketSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/dom/WebSocketSubject.js");

function webSocket(urlConfigOrSource) {
    return new _WebSocketSubject__WEBPACK_IMPORTED_MODULE_0__.WebSocketSubject(urlConfigOrSource);
}
//# sourceMappingURL=webSocket.js.map

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/parse.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/uuid/dist/esm-browser/validate.js");


function parse(uuid) {
  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parse);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/sha1.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);

  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);

    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }

    M[i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);

    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }

    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }

    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];

    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sha1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v35.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DNS: () => (/* binding */ DNS),
/* harmony export */   URL: () => (/* binding */ URL),
/* harmony export */   "default": () => (/* binding */ v35)
/* harmony export */ });
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/uuid/dist/esm-browser/parse.js");



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;

    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0,_parse_js__WEBPACK_IMPORTED_MODULE_0__["default"])(namespace);
    }

    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.unsafeStringify)(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v5.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/uuid/dist/esm-browser/sha1.js");


const v5 = (0,_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v5);

/***/ }),

/***/ "./node_modules/@grafana/lezer-logql/index.es.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbsentOverTime: () => (/* binding */ AbsentOverTime),
/* harmony export */   Add: () => (/* binding */ Add),
/* harmony export */   And: () => (/* binding */ And),
/* harmony export */   Avg: () => (/* binding */ Avg),
/* harmony export */   AvgOverTime: () => (/* binding */ AvgOverTime),
/* harmony export */   BinOpExpr: () => (/* binding */ BinOpExpr),
/* harmony export */   BinOpModifier: () => (/* binding */ BinOpModifier),
/* harmony export */   Bool: () => (/* binding */ Bool),
/* harmony export */   Bottomk: () => (/* binding */ Bottomk),
/* harmony export */   By: () => (/* binding */ By),
/* harmony export */   Bytes: () => (/* binding */ Bytes),
/* harmony export */   BytesConv: () => (/* binding */ BytesConv),
/* harmony export */   BytesFilter: () => (/* binding */ BytesFilter),
/* harmony export */   BytesOverTime: () => (/* binding */ BytesOverTime),
/* harmony export */   BytesRate: () => (/* binding */ BytesRate),
/* harmony export */   ConvOp: () => (/* binding */ ConvOp),
/* harmony export */   Count: () => (/* binding */ Count),
/* harmony export */   CountOverTime: () => (/* binding */ CountOverTime),
/* harmony export */   Decolorize: () => (/* binding */ Decolorize),
/* harmony export */   DecolorizeExpr: () => (/* binding */ DecolorizeExpr),
/* harmony export */   Div: () => (/* binding */ Div),
/* harmony export */   Drop: () => (/* binding */ Drop),
/* harmony export */   DropLabel: () => (/* binding */ DropLabel),
/* harmony export */   DropLabels: () => (/* binding */ DropLabels),
/* harmony export */   DropLabelsExpr: () => (/* binding */ DropLabelsExpr),
/* harmony export */   Duration: () => (/* binding */ Duration),
/* harmony export */   DurationConv: () => (/* binding */ DurationConv),
/* harmony export */   DurationFilter: () => (/* binding */ DurationFilter),
/* harmony export */   DurationSecondsConv: () => (/* binding */ DurationSecondsConv),
/* harmony export */   Eq: () => (/* binding */ Eq),
/* harmony export */   Eql: () => (/* binding */ Eql),
/* harmony export */   Expr: () => (/* binding */ Expr),
/* harmony export */   Filter: () => (/* binding */ Filter),
/* harmony export */   FilterOp: () => (/* binding */ FilterOp),
/* harmony export */   FirstOverTime: () => (/* binding */ FirstOverTime),
/* harmony export */   GroupLeft: () => (/* binding */ GroupLeft),
/* harmony export */   GroupRight: () => (/* binding */ GroupRight),
/* harmony export */   Grouping: () => (/* binding */ Grouping),
/* harmony export */   GroupingLabel: () => (/* binding */ GroupingLabel),
/* harmony export */   GroupingLabelList: () => (/* binding */ GroupingLabelList),
/* harmony export */   GroupingLabels: () => (/* binding */ GroupingLabels),
/* harmony export */   Gte: () => (/* binding */ Gte),
/* harmony export */   Gtr: () => (/* binding */ Gtr),
/* harmony export */   Identifier: () => (/* binding */ Identifier),
/* harmony export */   Ignoring: () => (/* binding */ Ignoring),
/* harmony export */   Ip: () => (/* binding */ Ip),
/* harmony export */   IpLabelFilter: () => (/* binding */ IpLabelFilter),
/* harmony export */   Json: () => (/* binding */ Json),
/* harmony export */   JsonExpressionParser: () => (/* binding */ JsonExpressionParser),
/* harmony export */   Keep: () => (/* binding */ Keep),
/* harmony export */   KeepLabel: () => (/* binding */ KeepLabel),
/* harmony export */   KeepLabels: () => (/* binding */ KeepLabels),
/* harmony export */   KeepLabelsExpr: () => (/* binding */ KeepLabelsExpr),
/* harmony export */   LabelExtractionExpression: () => (/* binding */ LabelExtractionExpression),
/* harmony export */   LabelExtractionExpressionList: () => (/* binding */ LabelExtractionExpressionList),
/* harmony export */   LabelFilter: () => (/* binding */ LabelFilter),
/* harmony export */   LabelFormat: () => (/* binding */ LabelFormat),
/* harmony export */   LabelFormatExpr: () => (/* binding */ LabelFormatExpr),
/* harmony export */   LabelFormatMatcher: () => (/* binding */ LabelFormatMatcher),
/* harmony export */   LabelName: () => (/* binding */ LabelName),
/* harmony export */   LabelParser: () => (/* binding */ LabelParser),
/* harmony export */   LabelReplace: () => (/* binding */ LabelReplace),
/* harmony export */   LabelReplaceExpr: () => (/* binding */ LabelReplaceExpr),
/* harmony export */   Labels: () => (/* binding */ Labels),
/* harmony export */   LabelsFormat: () => (/* binding */ LabelsFormat),
/* harmony export */   LastOverTime: () => (/* binding */ LastOverTime),
/* harmony export */   LineComment: () => (/* binding */ LineComment),
/* harmony export */   LineFilter: () => (/* binding */ LineFilter),
/* harmony export */   LineFilters: () => (/* binding */ LineFilters),
/* harmony export */   LineFormat: () => (/* binding */ LineFormat),
/* harmony export */   LineFormatExpr: () => (/* binding */ LineFormatExpr),
/* harmony export */   LiteralExpr: () => (/* binding */ LiteralExpr),
/* harmony export */   LogExpr: () => (/* binding */ LogExpr),
/* harmony export */   LogQL: () => (/* binding */ LogQL),
/* harmony export */   LogRangeExpr: () => (/* binding */ LogRangeExpr),
/* harmony export */   Logfmt: () => (/* binding */ Logfmt),
/* harmony export */   LogfmtExpressionParser: () => (/* binding */ LogfmtExpressionParser),
/* harmony export */   LogfmtParser: () => (/* binding */ LogfmtParser),
/* harmony export */   LogfmtParserFlags: () => (/* binding */ LogfmtParserFlags),
/* harmony export */   Lss: () => (/* binding */ Lss),
/* harmony export */   Lte: () => (/* binding */ Lte),
/* harmony export */   Matcher: () => (/* binding */ Matcher),
/* harmony export */   Matchers: () => (/* binding */ Matchers),
/* harmony export */   Max: () => (/* binding */ Max),
/* harmony export */   MaxOverTime: () => (/* binding */ MaxOverTime),
/* harmony export */   MetricExpr: () => (/* binding */ MetricExpr),
/* harmony export */   Min: () => (/* binding */ Min),
/* harmony export */   MinOverTime: () => (/* binding */ MinOverTime),
/* harmony export */   Mod: () => (/* binding */ Mod),
/* harmony export */   Mul: () => (/* binding */ Mul),
/* harmony export */   Neq: () => (/* binding */ Neq),
/* harmony export */   Nre: () => (/* binding */ Nre),
/* harmony export */   Number: () => (/* binding */ Number),
/* harmony export */   NumberFilter: () => (/* binding */ NumberFilter),
/* harmony export */   Offset: () => (/* binding */ Offset),
/* harmony export */   OffsetExpr: () => (/* binding */ OffsetExpr),
/* harmony export */   On: () => (/* binding */ On),
/* harmony export */   OnOrIgnoringModifier: () => (/* binding */ OnOrIgnoringModifier),
/* harmony export */   Or: () => (/* binding */ Or),
/* harmony export */   OrFilter: () => (/* binding */ OrFilter),
/* harmony export */   ParserFlag: () => (/* binding */ ParserFlag),
/* harmony export */   Pattern: () => (/* binding */ Pattern),
/* harmony export */   Pipe: () => (/* binding */ Pipe),
/* harmony export */   PipeExact: () => (/* binding */ PipeExact),
/* harmony export */   PipeMatch: () => (/* binding */ PipeMatch),
/* harmony export */   PipelineExpr: () => (/* binding */ PipelineExpr),
/* harmony export */   PipelineStage: () => (/* binding */ PipelineStage),
/* harmony export */   Pow: () => (/* binding */ Pow),
/* harmony export */   QuantileOverTime: () => (/* binding */ QuantileOverTime),
/* harmony export */   Range: () => (/* binding */ Range),
/* harmony export */   RangeAggregationExpr: () => (/* binding */ RangeAggregationExpr),
/* harmony export */   RangeOp: () => (/* binding */ RangeOp),
/* harmony export */   Rate: () => (/* binding */ Rate),
/* harmony export */   RateCounter: () => (/* binding */ RateCounter),
/* harmony export */   Re: () => (/* binding */ Re),
/* harmony export */   Regexp: () => (/* binding */ Regexp),
/* harmony export */   Selector: () => (/* binding */ Selector),
/* harmony export */   Sort: () => (/* binding */ Sort),
/* harmony export */   Sort_Desc: () => (/* binding */ Sort_Desc),
/* harmony export */   Stddev: () => (/* binding */ Stddev),
/* harmony export */   StddevOverTime: () => (/* binding */ StddevOverTime),
/* harmony export */   Stdvar: () => (/* binding */ Stdvar),
/* harmony export */   StdvarOverTime: () => (/* binding */ StdvarOverTime),
/* harmony export */   String: () => (/* binding */ String),
/* harmony export */   Sub: () => (/* binding */ Sub),
/* harmony export */   Sum: () => (/* binding */ Sum),
/* harmony export */   SumOverTime: () => (/* binding */ SumOverTime),
/* harmony export */   Topk: () => (/* binding */ Topk),
/* harmony export */   UnitFilter: () => (/* binding */ UnitFilter),
/* harmony export */   Unless: () => (/* binding */ Unless),
/* harmony export */   Unpack: () => (/* binding */ Unpack),
/* harmony export */   Unwrap: () => (/* binding */ Unwrap),
/* harmony export */   UnwrapExpr: () => (/* binding */ UnwrapExpr),
/* harmony export */   Vector: () => (/* binding */ Vector),
/* harmony export */   VectorAggregationExpr: () => (/* binding */ VectorAggregationExpr),
/* harmony export */   VectorExpr: () => (/* binding */ VectorExpr),
/* harmony export */   VectorOp: () => (/* binding */ VectorOp),
/* harmony export */   Without: () => (/* binding */ Without),
/* harmony export */   formatLokiQuery: () => (/* binding */ formatLokiQuery),
/* harmony export */   parser: () => (/* binding */ parser)
/* harmony export */ });
/* harmony import */ var _lezer_lr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@lezer/lr/dist/index.js");


// This file was generated by lezer-generator. You probably shouldn't edit it.
const Json$1 = 1,
  Logfmt$1 = 2,
  Unpack$1 = 3,
  Pattern$1 = 4,
  Regexp$1 = 5,
  Unwrap$1 = 6,
  LabelFormat$1 = 7,
  LineFormat$1 = 8,
  LabelReplace$1 = 9,
  Vector$1 = 10,
  Offset$1 = 11,
  Bool$1 = 12,
  On$1 = 13,
  Ignoring$1 = 14,
  GroupLeft$1 = 15,
  GroupRight$1 = 16,
  Decolorize$1 = 17,
  Drop$1 = 18,
  Keep$1 = 19,
  By$1 = 20,
  Without$1 = 21,
  And$1 = 22,
  Or$1 = 23,
  Unless$1 = 24,
  Sum$1 = 25,
  Avg$1 = 26,
  Count$1 = 27,
  Max$1 = 28,
  Min$1 = 29,
  Stddev$1 = 30,
  Stdvar$1 = 31,
  Bottomk$1 = 32,
  Topk$1 = 33,
  Sort$1 = 34,
  Sort_Desc$1 = 35,
  MetricExpr$1 = 96;

const keywordTokens = {
  json: Json$1,
  logfmt: Logfmt$1,
  unpack: Unpack$1,
  pattern: Pattern$1,
  regexp: Regexp$1,
  label_format: LabelFormat$1,
  line_format: LineFormat$1,
  label_replace: LabelReplace$1,
  vector: Vector$1,
  offset: Offset$1,
  bool: Bool$1,
  on: On$1,
  ignoring: Ignoring$1,
  group_left: GroupLeft$1,
  group_right: GroupRight$1,
  unwrap: Unwrap$1,
  decolorize: Decolorize$1,
  drop: Drop$1,
  keep: Keep$1,
};

const specializeIdentifier = (value) => {
  return keywordTokens[value.toLowerCase()] || -1;
};

const contextualKeywordTokens = {
  by: By$1,
  without: Without$1,
  and: And$1,
  or: Or$1,
  unless: Unless$1,
  sum: Sum$1,
  avg: Avg$1,
  count: Count$1,
  max: Max$1,
  min: Min$1,
  stddev: Stddev$1,
  stdvar: Stdvar$1,
  bottomk: Bottomk$1,
  topk: Topk$1,
  sort: Sort$1,
  sort_desc: Sort_Desc$1,
};

const extendIdentifier = (value) => {
  return contextualKeywordTokens[value.toLowerCase()] || -1;
};

// This file was generated by lezer-generator. You probably shouldn't edit it.
const spec_Identifier = {__proto__:null,ip:291, count_over_time:297, rate:299, rate_counter:301, bytes_over_time:303, bytes_rate:305, avg_over_time:307, sum_over_time:309, min_over_time:311, max_over_time:313, stddev_over_time:315, stdvar_over_time:317, quantile_over_time:319, first_over_time:321, last_over_time:323, absent_over_time:325, bytes:331, duration:333, duration_seconds:335};
const parser = _lezer_lr__WEBPACK_IMPORTED_MODULE_0__.LRParser.deserialize({
  version: 14,
  states: "EtOYQPOOO#cQPO'#DUOOQO'#EP'#EPO#hQPO'#EPO$wQPO'#DTOYQPO'#DTOOQO'#Eb'#EbO%UQPO'#EaOOQO'#E}'#E}O%ZQPO'#E|Q%fQPOOO&gQPO'#FZO&lQPO'#F[OOQO'#E`'#E`OOQO'#DS'#DSOOQO'#Ec'#EcOOQO'#Ed'#EdOOQO'#Ee'#EeOOQO'#Ef'#EfOOQO'#Eg'#EgOOQO'#Eh'#EhOOQO'#Ei'#EiOOQO'#Ej'#EjOOQO'#Ek'#EkOOQO'#El'#ElOOQO'#Em'#EmOOQO'#En'#EnOOQO'#Eo'#EoOOQO'#Ep'#EpOOQO'#Eq'#EqO&qQPO'#DWOOQO'#DV'#DVO'PQPO,59pOOQO,5:k,5:kOOQO'#Dc'#DcO'XQPO'#DbO'aQPO'#DaO(zQPO'#D`O*eQPO'#D`OOQO'#D_'#D_O,gQPO,59oO-uQPO,59oO-|QPO,5:zO.TQPO,5:{O.`QPO'#EzO0kQPO,5;hO0rQPO,5;hO0wQPO,5;jO0wQPO,5;jO0wQPO,5;jO0wQPO,5;jO0wQPO,5;jO0wQPO,5;jOYQPO,5;uO3ZQPO,5;vO3`QPO,59rO#cQPO,59qOOQO1G/[1G/[OOQO'#Df'#DfO3eQPO,59|O5OQPO,59|OOQO'#Dg'#DgO5TQPO,59{OOQO,59{,59{O5]QPO'#DWO5zQPO'#DjO7kQPO'#DmO9XQPO'#DmOOQO'#Dm'#DmOOQO'#Dt'#DtOOQO'#Dr'#DrO+TQPO'#DrO9^QPO,59zO:wQPO'#ETO:|QPO'#EUOOQO'#EX'#EXO;RQPO'#EYO;WQPO'#E]OOQO,59z,59zOOQO,59y,59yOOQO1G/Z1G/ZOOQO1G0f1G0fO;]QPO'#ErO.WQPO'#ErO;qQPO1G0gO;vQPO1G0gO;{QPO,5;fO=XQPO1G1SO=`QPO1G1SO=gQPO1G1SO=nQPO'#FQO?|QPO'#FPO@WQPO'#FPOYQPO1G1UOYQPO1G1UOYQPO1G1UOYQPO1G1UOYQPO1G1UOYQPO1G1UO@bQPO1G1aO@iQPO1G1bOOQO1G/^1G/^OOQO1G/]1G/]O5TQPO1G/hO@nQPO1G/hO@sQPO'#DhOB^QPO'#DhOOQO1G/g1G/gOBtQPO,59rOBcQPO,5:aOOQO'#Dk'#DkOCOQPO,5:UODoQPO'#DpOOQO'#Do'#DoOF]QPO,5:]OGvQPO,5:YOOQO,5:X,5:XOIaQPO,5:^O+TQPO,5:^O+TQPO,5:^OOQO,5:o,5:oOIoQPO'#EWOOQO'#EV'#EVOItQPO,5:pOK_QPO'#E[OOQO'#E['#E[OOQO'#EZ'#EZOMOQPO,5:tONiQPO'#E_OOQO'#E_'#E_OOQO'#E^'#E^O!!YQPO,5:wO!#sQPO'#D`O;]QPO,5;^O!#zQPO'#EsO!$PQPO,5;^O!$jQPO,5;^O!$tQPO,5;^O!${QPO,5;^O!%QQPO7+&RO.WQPO7+&ROOQO'#E{'#E{O!&bQPO1G1QOOQO1G1Q1G1QOYQPO7+&nO!&jQPO7+&nO!'zQPO7+&nO!(RQPO7+&nO!(YQQO'#FROOQO,5;l,5;lO!*hQPO,5;kO!*oQPO,5;kO!,QQPO7+&pO!,XQPO7+&pOOQO7+&p7+&pO!,fQPO7+&pO!,mQPO7+&pO!-rQPO7+&pO!.SQPO7+&{OOQO7+&|7+&|OOQO7+%S7+%SO!.XQPO7+%SO5TQPO,5:SO!.^QPO,5:SO!.cQPO1G/yOOQO1G/{1G/{OOQO1G0S1G0SOOQO1G0U1G0UOOQO,5:V,5:VO!.hQPO1G/wO!0RQPO,5:[O!0WQPO,5:ZOOQO1G/x1G/xO!0]QPO1G/xO!1vQPO,5:rO:|QPO,5:qO;RQPO,5:uO;WQPO,5:xO!2OQPO,5;aO!$PQPO1G0xO!2^QPO1G0xO!2fQPO,5;_O+TQPO,5;aO!2kQPO1G0xO!2rQPO'#EtO!2wQPO1G0xO!2kQPO1G0xO!3PQPO1G0xO!3WQPO1G0xO;lQPO1G0xOOQO1G0x1G0xOOQO<<Im<<ImO!3cQPO<<ImO!3hQPO,5;gOOQO7+&l7+&lO!3mQPO<<JYOOQO<<JY<<JYOYQPO<<JYOOQO'#FT'#FTO!3tQPO,5;mOOQO'#FS'#FSOOQO,5;m,5;mOOQO1G1V1G1VO!3|QPO1G1VO!6VQPO<<JgOOQO<<Hn<<HnOOQO1G/n1G/nO!6[QPO1G/nO!6aQPO7+%eOOQO1G/v1G/vOOQO1G/u1G/uOOQO1G0^1G0^OOQO1G0]1G0]OOQO1G0a1G0aOOQO1G0d1G0dOOQO'#Ev'#EvOOQO1G0{1G0{O!6fQPO1G0{OOQO'#Ew'#EwOOQO'#Ex'#ExOOQO'#Ey'#EyOOQO7+&d7+&dOOQO1G0y1G0yO!6kQPO1G0{O!7PQPO7+&dOOQO,5;`,5;`O!7XQPO7+&dO;lQPO7+&dO!7`QPO7+&dO!7kQPOAN?XOOQO1G1R1G1RO!8{QPOAN?tO!:]QPOAN?tO!:dQQO1G1XOOQO1G1X1G1XOOQO7+&q7+&qO!:lQPOAN@ROOQO7+%Y7+%YO!:qQPO<<IPO!:vQPO7+&gO!:{QPO<<JOO!;TQPO<<JOO!;]QPO'#EuO!;bQPO<<JOOOQOG24sG24sOOQOG25`G25`OOQO1G1Y1G1YOOQO7+&s7+&sO!;jQPOG25mOOQOAN>kAN>kO!;oQPO<<JROOQOAN?jAN?jO!;tQPOAN?jO!;|QPOLD+XOOQOAN?mAN?mOOQO,5:p,5:pO!<RQPO!$'NsO!<WQPO!)9D_O!<]QPO!.K9yOOQO!4//e!4//eO:|QPO'#EUO!<bQPO'#D`O!=YQPO,59oO!=dQPO'#DTOYQPO1G1UOYQPO1G1UOYQPO1G1UOYQPO1G1UOYQPO1G1UOYQPO1G1UO0wQPO,5;jO0wQPO,5;jO0wQPO,5;jO0wQPO,5;jO0wQPO,5;jO0wQPO,5;jO!>oQPO7+&pO!>vQPO7+&pO!?TQPO7+&pO!@]QPO7+&pO!@dQPO7+&pO!?[QPO'#FO",
  stateData: "!@q~O$ROStOS~OXZOY[OiWOjWOkWOlWOmWOnWOoWOpWOqWOrWOsWO!tQO!uRO!vRO$SPO$WTO$Y_O$Z`O$[aO$]bO$^cO$_dO$`eO$afO$bgO$chO$diO$ejO$fkO$glO$hmO~O{nO~O!tqO~O!OrO!QrO!WrO!XrOfwXgwXhwX!jwX!lwX!mwX!nwX!owX!uwX!vwX#ywX#zwX#{wX#|wX~O!]vO$PwX$XwX~P#mO$W{O~Od|Oe|O$W}O~Of!QOg!POh!QO!O!UO!j!UO!l!UO!m!UO!n!UO!o!UO!u!RO!v!RO#y!SO#z!SO#{!SO#|!TO~O$W!VO~O$W!WO~O|!XO!O!XO!P!XO!Q!XO~O$T!YO$U!ZO~O}!]O$V!_O~Og!`Of!TXh!TX!O!TX!Q!TX!W!TX!X!TX!]!TX!j!TX!l!TX!m!TX!n!TX!o!TX!u!TX!v!TX#y!TX#z!TX#{!TX#|!TX$P!TX$X!TX$i!TX$T!TX~O!OrO!QrO!WrO!XrOf!SXg!SXh!SX!]!SX!j!SX!l!SX!m!SX!n!SX!o!SX!u!SX!v!SX#y!SX#z!SX#{!SX#|!SX$P!SX$X!SX$i!SX$T!SX~OP!dOQ!cOR!fOS!eOT!eOV!lOW!kOa!mOb!nOc!oO{!bO$W!iO~O!OrO!QrO!WrO!XrOfwagwahwa!jwa!lwa!mwa!nwa!owa!uwa!vwa#ywa#zwa#{wa#|wa~O!]vO$Pwa$Xwa~P+]OfvXgvXhvX!OvX!jvX!lvX!mvX!nvX!ovX!uvX!vvX#yvX#zvX#{vX#|vX~O$X!rO~P,tO$X!sO~P,tO!t!wO$SPO$W!uO~O$W!xO~OXZOY[OiWOjWOkWOlWOmWOnWOoWOpWOqWOrWOsWO!uRO!vRO$SPO$WTO$Y_O$Z`O$[aO$]bO$^cO$_dO$`eO$afO$bgO$chO$diO$ejO$fkO$glO$hmO~O!t!yO~P.eO$W!{O~O[#OO]!|O^!|OX#sPY#sPi#sPj#sPk#sPl#sPm#sPn#sPo#sPp#sPq#sPr#sPs#sP!t#sP!u#sP!v#sP$S#sP$W#sP$Y#sP$Z#sP$[#sP$]#sP$^#sP$_#sP$`#sP$a#sP$b#sP$c#sP$d#sP$e#sP$f#sP$g#sP$h#sP~O!t#WO~O}#XO~Og#ZOf!Uah!Ua!O!Ua!Q!Ua!W!Ua!X!Ua!]!Ua!j!Ua!l!Ua!m!Ua!n!Ua!o!Ua!u!Ua!v!Ua#y!Ua#z!Ua#{!Ua#|!Ua$P!Ua$X!Ua$i!Ua$T!Ua~O$W#[O~O}#]O$V!_O~O|#`O!O#`O!P!XO!Q!XO!j#aO!l#aO!m#aO!n#aO!o#aO~O{#dO!`#bOf!^Xg!^Xh!^X!O!^X!Q!^X!W!^X!X!^X!]!^X!j!^X!l!^X!m!^X!n!^X!o!^X!u!^X!v!^X#y!^X#z!^X#{!^X#|!^X$P!^X$X!^X$i!^X$T!^X~O{#dOf!aXg!aXh!aX!O!aX!Q!aX!W!aX!X!aX!]!aX!j!aX!l!aX!m!aX!n!aX!o!aX!u!aX!v!aX#y!aX#z!aX#{!aX#|!aX$P!aX$X!aX$i!aX$T!aX~O}#hO~Of#jOg#kO$T#jOh!Sa!O!Sa!Q!Sa!W!Sa!X!Sa!]!Sa!j!Sa!l!Sa!m!Sa!n!Sa!o!Sa!u!Sa!v!Sa#y!Sa#z!Sa#{!Sa#|!Sa$P!Sa$X!Sa$i!Sa~O}#lO~O{#mO~O{#pO~O{#tO~O!OrO!QrO!WrO!XrO!]#xO$i#zO~O$X$PO~O$T$QO~O{$RO$X$TO~Of!sXg!sXh!sX!O!sX!j!sX!l!sX!m!sX!n!sX!o!sX!u!sX!v!sX#y!sX#z!sX#{!sX#|!sX$X!sX~O$T$UO~P<TO$X$VO~P,tO!t$WO~P.eO$W$YO~OX#sXY#sXi#sXj#sXk#sXl#sXm#sXn#sXo#sXp#sXq#sXr#sXs#sX!t#sX!u#sX!v#sX$S#sX$W#sX$Y#sX$Z#sX$[#sX$]#sX$^#sX$_#sX$`#sX$a#sX$b#sX$c#sX$d#sX$e#sX$f#sX$g#sX$h#sX~O_$[O`$[O~P=sO]!|O^!|O~P=sO$T$dO~P,tO$X$eO~O}$gO~Og$hOf![Xh![X!O![X!Q![X!W![X!X![X!]![X!j![X!l![X!m![X!n![X!o![X!u![X!v![X#y![X#z![X#{![X#|![X$P![X$X![X$i![X$T![X~O$W$iO~O!k$kO!q$lO!tQO!uRO!vRO~O}#XO$V!_O~PBcO{#dO!`$nOf!^ag!^ah!^a!O!^a!Q!^a!W!^a!X!^a!]!^a!j!^a!l!^a!m!^a!n!^a!o!^a!u!^a!v!^a#y!^a#z!^a#{!^a#|!^a$P!^a$X!^a$i!^a$T!^a~O|$pOf!dXg!dXh!dX!O!dX!Q!dX!W!dX!X!dX!]!dX!j!dX!l!dX!m!dX!n!dX!o!dX!u!dX!v!dX#y!dX#z!dX#{!dX#|!dX$P!dX$T!dX$X!dX$i!dX~O$T$qOf!eag!eah!ea!O!ea!Q!ea!W!ea!X!ea!]!ea!j!ea!l!ea!m!ea!n!ea!o!ea!u!ea!v!ea#y!ea#z!ea#{!ea#|!ea$P!ea$X!ea$i!ea~O$T$qOf!bag!bah!ba!O!ba!Q!ba!W!ba!X!ba!]!ba!j!ba!l!ba!m!ba!n!ba!o!ba!u!ba!v!ba#y!ba#z!ba#{!ba#|!ba$P!ba$X!ba$i!ba~Of#jOg#kO$T#jO$X$rO~O|$tO~O$T$uOf!xag!xah!xa!O!xa!Q!xa!W!xa!X!xa!]!xa!j!xa!l!xa!m!xa!n!xa!o!xa!u!xa!v!xa#y!xa#z!xa#{!xa#|!xa$P!xa$X!xa$i!xa~O|!XO!O!XO!P!XO!Q!XOf#OXg#OXh#OX!W#OX!X#OX!]#OX!j#OX!l#OX!m#OX!n#OX!o#OX!u#OX!v#OX#y#OX#z#OX#{#OX#|#OX$P#OX$T#OX$X#OX$i#OX~O$T$vOf!|ag!|ah!|a!O!|a!Q!|a!W!|a!X!|a!]!|a!j!|a!l!|a!m!|a!n!|a!o!|a!u!|a!v!|a#y!|a#z!|a#{!|a#|!|a$P!|a$X!|a$i!|a~O|!XO!O!XO!P!XO!Q!XOf#RXg#RXh#RX!W#RX!X#RX!]#RX!j#RX!l#RX!m#RX!n#RX!o#RX!u#RX!v#RX#y#RX#z#RX#{#RX#|#RX$P#RX$T#RX$X#RX$i#RX~O$T$wOf#Pag#Pah#Pa!O#Pa!Q#Pa!W#Pa!X#Pa!]#Pa!j#Pa!l#Pa!m#Pa!n#Pa!o#Pa!u#Pa!v#Pa#y#Pa#z#Pa#{#Pa#|#Pa$P#Pa$X#Pa$i#Pa~OU$xO~P*eO!k${O~O!]$|O$i#zO~O!OrO!QrO!WrO!XrO!]#xO~OZ%OO$X#fa~P!$XO$X%TO~P;]O$X%UO~Od|Oe|Of#Tqg#Tqh#Tq!O#Tq!j#Tq!l#Tq!m#Tq!n#Tq!o#Tq!u#Tq!v#Tq#y#Tq#z#Tq#{#Tq#|#Tq$P#Tq$X#Tq$T#Tq~O$T%XO$X%YO~Od|Oe|Of#pqg#pqh#pq!O#pq!j#pq!l#pq!m#pq!n#pq!o#pq!u#pq!v#pq#y#pq#z#pq#{#pq#|#pq$P#pq$X#pq$T#pq~O$T%]O~P<TO$X%[O~P,tO#x%^O$X%aO~OX#saY#sai#saj#sak#sal#sam#san#sao#sap#saq#sar#sas#sa!t#sa!u#sa!v#sa$S#sa$Y#sa$Z#sa$[#sa$]#sa$^#sa$_#sa$`#sa$a#sa$b#sa$c#sa$d#sa$e#sa$f#sa$g#sa$h#sa~O$W$YO~P!(bO_%cO`%cO$W#sa~P!(bOf!QOh!QO!O!UO!j!UO!l!UO!m!UO!n!UO!o!UO!u!RO!v!RO#y#rq#z#rq#{#rq#|#rq$P#rq$X#rq~Og#rq~P!*|Of#rqg#rqh#rq~P!+SOg!PO~P!*|O$P#rq$X#rq~P%fOf#rqg#rqh#rq!O#rq!j#rq!l#rq!m#rq!n#rq!o#rq#y#rq#z#rq#{#rq#|#rq~O!u!RO!v!RO$P#rq$X#rq~P!,wO}%dO~O$X%eO~O}%gO~O$W%hO~O$T$qOf!eig!eih!ei!O!ei!Q!ei!W!ei!X!ei!]!ei!j!ei!l!ei!m!ei!n!ei!o!ei!u!ei!v!ei#y!ei#z!ei#{!ei#|!ei$P!ei$X!ei$i!ei~O}%iO~O{#dO~Of#jO$T#jOg!fih!fi!O!fi!Q!fi!W!fi!X!fi!]!fi!j!fi!l!fi!m!fi!n!fi!o!fi!u!fi!v!fi#y!fi#z!fi#{!fi#|!fi$P!fi$X!fi$i!fi~O{%kO}%kO~O{%pO$k%rO$l%sO$m%tO~OZ%OO$X#fi~O$j%vO~O$X#fi~P!$XO!k%yO~O!]$|O$X#fi~O$X%{O~P;]O!]$|O$X%{O$i#zO~O$X%}O~O{&OO~O$X&PO~P,tO$T&RO$X&SO~O$W$YOX#siY#sii#sij#sik#sil#sim#sin#sio#sip#siq#sir#sis#si!t#si!u#si!v#si$S#si$Y#si$Z#si$[#si$]#si$^#si$_#si$`#si$a#si$b#si$c#si$d#si$e#si$f#si$g#si$h#si~O$T&UO~O$X&VO~O}&WO~O$W&XO~Of#jOg#kO$T#jO!]#ii$i#ii$X#ii~O!]$|O$X#fq~O$X#fq~P!$XOZ%OO!]&[O$X#fq~Od|Oe|Of#T!Rg#T!Rh#T!R!O#T!R!j#T!R!l#T!R!m#T!R!n#T!R!o#T!R!u#T!R!v#T!R#y#T!R#z#T!R#{#T!R#|#T!R$P#T!R$X#T!R$T#T!R~Od|Oe|Of#p!Rg#p!Rh#p!R!O#p!R!j#p!R!l#p!R!m#p!R!n#p!R!o#p!R!u#p!R!v#p!R#y#p!R#z#p!R#{#p!R#|#p!R$P#p!R$X#p!R$T#p!R~O$X&_O~P,tO#x%^O$X&aO~O}&bO~O$X&cO~O{&dO~O!]$|O$X#fy~OZ%OO$X#fy~OU$xO~O!]&[O$X#fy~O$T&gO~O$X&hO~O!]$|O$X#f!R~O}&jO~O$T&kO~O}&lO~O$X&mO~OP!dOQ!cOR!fOS!eOT!eOV&nOW!kOa!mOb!nOc!oO{!bO$W!iO~O!]&oO$Twa~P+]O!]&oO$TwX~P#mOf&yOh&yO!O&}O!j&}O!l&}O!m&}O!n&}O!o&}O!u&zO!v&zO#y#rq#z#rq#{#rq#|#rq$T#rq~Og#rq~P!=nOf#rqg#rqh#rq~P!=tOg&xO~P!=nOf&yOg&xOh&yO!O&}O!j&}O!l&}O!m&}O!n&}O!o&}O!u&zO!v&zO#y&{O#z&{O#{&{O#|&|O~O$T#rq~P!?[O!u&zO!v&zO$T#rq~P!,wO",
  goto: "1j$PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP$Q%P%h&W&ZPPPPPP&r'U'f't(VPP(f(n(wP)Q)VP)Q)Q)Y)c)Q)k)|)|*VPPPPPP*VP)|*`PPP)Q)Q*y+P)Q)Q+W+Z)Q+a+d+j,],r-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-n-w.[.h/Q/T/T/T/W/g,]/j,]0P0u1W1a1dPPPPP,],][YOT}!{$U%]Q$^#PQ$_#QS$`#R&tQ$a#SQ$b#TQ$c#UQ'O&rQ'P&sQ'Q&uQ'R&vQ'S&wR'T!Vt^O}!V!{#P#Q#R#S#T#U$U%]&r&s&t&u&v&wRyTjSOT}!V!{#P#Q#R#S#T#U$U%]S!t{$QQ#}!u]&q&r&s&t&u&v&wRpPQoP^!hv!i#j#k#x$|&oQ#Y!YS#q!n$vT#u!o$wQxSQ#y!tQ$}#|Q%R#}Q%z%QR&p&q[wS!t#|#}%Q&q]!qx#y$}%R%z&piuSx!t#y#|#}$}%Q%R%z&p&qhtSx!t#y#|#}$}%Q%R%z&p&qR!auksSux!t#y#|#}$}%Q%R%z&p&qQ!^sV#^!`#Z$hW![s!`#Z$hR$j#`Q#_!`Q$f#ZR%f$hV!pv#x&oR#c!cQ#f!cQ#g!dR$o#cU#e!c!d#cR%j$qU!jv#x&oQ#i!iQ$r#jQ$s#kR%w$|_!hv!i#j#k#x$|&o_!gv!i#j#k#x$|&ov]OT}!V!{#P#Q#R#S#T#U$U%]&r&s&t&u&v&wT$m#`#aQ#o!lR&i&nS#n!l&nR%l$uR#s!nQ#r!nR%m$vR#w!oQ#v!oR%n$wj^O#P#Q#R#S#T#U&r&s&t&u&v&wQzTQ!z}Q#V!VQ$X!{Q%Z$UR&Q%]w]OT}!V!{#P#Q#R#S#T#U$U%]&r&s&t&u&v&wwVOT}!V!{#P#Q#R#S#T#U$U%]&r&s&t&u&v&wwUOT}!V!{#P#Q#R#S#T#U$U%]&r&s&t&u&v&wQ!v{Q$O!uR%W$QS#|!t#}W$z#y#{%R%SQ%u$yQ%|%TR&Z%{Q%Q#|Q%u$zQ&]%|R&e&ZQ#{!tS$y#y%RQ%P#|Q%S#}S%x$}%QS&Y%z%|R&f&]R%q$xR%o$xQ!OXQ%V$PQ%[$VQ&^%}R&_&PR$S!xwXOT}!V!{#P#Q#R#S#T#U$U%]&r&s&t&u&v&wQ#P!PQ#Q!QQ#R!RQ#S!SQ#T!TQ#U!UQ&r&xQ&s&yQ&t&zQ&u&{Q&v&|R&w&}h!}!P!Q!R!S!T!U&x&y&z&{&|&}R$]#OQ$Z!|Q%b$[R&T%cR%_$YQ%`$YR&`&R",
  nodeNames: "⚠ Json Logfmt Unpack Pattern Regexp Unwrap LabelFormat LineFormat LabelReplace Vector Offset Bool On Ignoring GroupLeft GroupRight Decolorize Drop Keep By Without And Or Unless Sum Avg Count Max Min Stddev Stdvar Bottomk Topk Sort Sort_Desc LineComment LogQL Expr LogExpr Selector Matchers Matcher Identifier Eq String Neq Re Nre PipelineExpr PipelineStage LineFilters LineFilter Filter PipeExact PipeMatch FilterOp Ip OrFilter Pipe LogfmtParser LogfmtParserFlags ParserFlag LabelParser JsonExpressionParser LabelExtractionExpressionList LabelExtractionExpression LogfmtExpressionParser LabelFilter IpLabelFilter UnitFilter DurationFilter Gtr Duration Gte Lss Lte Eql BytesFilter Bytes NumberFilter LiteralExpr Number Add Sub LineFormatExpr LabelFormatExpr LabelsFormat LabelFormatMatcher DecolorizeExpr DropLabelsExpr DropLabels DropLabel KeepLabelsExpr KeepLabels KeepLabel MetricExpr RangeAggregationExpr RangeOp CountOverTime Rate RateCounter BytesOverTime BytesRate AvgOverTime SumOverTime MinOverTime MaxOverTime StddevOverTime StdvarOverTime QuantileOverTime FirstOverTime LastOverTime AbsentOverTime LogRangeExpr Range OffsetExpr UnwrapExpr ConvOp BytesConv DurationConv DurationSecondsConv Grouping Labels VectorAggregationExpr VectorOp BinOpExpr BinOpModifier OnOrIgnoringModifier GroupingLabels GroupingLabelList GroupingLabel LabelName Mul Div Mod Pow LabelReplaceExpr VectorExpr",
  maxTerm: 167,
  skippedNodes: [0,36],
  repeatNodeCount: 0,
  tokenData: "5b~RvX^#ipq#iqr$^rs$qst%cuv%nxy%syz%xz{%}{|&S|}&X}!O&^!O!P(l!P!Q)l!Q!R)q!R![+X![!]2X!^!_2m!_!`2z!`!a3a!c!}3n!}#O4U#P#Q4Z#Q#R4`#R#S3n#S#T4e#T#o3n#o#p4q#p#q4v#q#r5]#y#z#i$f$g#i#BY#BZ#i$IS$I_#i$I|$JO#i$JT$JU#i$KV$KW#i&FU&FV#i~#nY$R~X^#ipq#i#y#z#i$f$g#i#BY#BZ#i$IS$I_#i$I|$JO#i$JT$JU#i$KV$KW#i&FU&FV#i~$aQ!_!`$g#r#s$l~$lO!O~~$qO!Q~~$tUOY$qZr$qrs%Ws#O$q#O#P%]#P~$q~%]O}~~%`PO~$q~%hQt~OY%cZ~%c~%sO#{~~%xO$W~~%}O$X~~&SO#y~~&XO!u~~&^O$T~~&cP!v~}!O&f~&iQ#_#`&o#g#h'|~&rP#X#Y&u~&xP#X#Y&{~'OP#d#e'R~'UP}!O'X~'[P#X#Y'_~'bP#a#b'e~'hP#d#e'k~'nP#h#i'q~'tP#m#n'w~'|O!`~~(PP#h#i(S~(VP#f#g(Y~(]P#]#^(`~(cP#V#W(f~(iP#h#i'w~(oP!Q![(r~(wR!t~!Q![(r!g!h)Q#X#Y)Q~)TR{|)^}!O)^!Q![)d~)aP!Q![)d~)iP!t~!Q![)d~)qO#z~~)ve!t~!O!P(r!Q![+X!g!h,l!i!j-Z!m!n-Z!o!p-Z!r!s-Z!v!w-Z#U#V-O#W#X-d#X#Y/f#Z#[/x#[#]-{#_#`/x#a#b0R#d#e/x#g#h/T#h#i/x#k#l0d#l#m1m#m#n1O~+^d!t~!O!P(r!Q![+X!g!h,l!i!j-Z!m!n-Z!o!p-Z!r!s-Z!v!w-Z#U#V-O#W#X-d#X#Y/f#Z#[/x#[#]-{#_#`/x#a#b0R#d#e/x#g#h/T#h#i/x#k#l0d#m#n1O~,oT{|)^}!O)^!Q![)d!d!e-O#]#^-T~-TO!q~~-WP#U#V-O~-^Q!d!e-O#]#^-T~-iP!k~!Q![-l~-oS!Q![-l#[#]-{#a#b.a#g#h/T~.QP!k~!Q![.T~.WR!Q![.T#a#b.a#g#h/T~.fQ!k~!Q![.l#g#h/O~.oR!Q![.l#a#b.x#g#h/T~.{P#g#h/O~/TO!k~~/YP!k~!Q![/]~/`Q!Q![/]#a#b.x~/iT{|)^}!O)^!Q![)d#U#V-O#]#^-T~/{Q#U#V-O#]#^-T~0WS!k~!Q![.l#U#V-O#]#^-T#g#h/O~0iP!k~!Q![0l~0oT!Q![0l#W#X-d#[#]-{#a#b.a#g#h/T~1TP!k~!Q![1W~1ZU!Q![1W#W#X-d#[#]-{#a#b.a#g#h/T#k#l0d~1pR!Q![1y!c!i1y#T#Z1y~2OR!t~!Q![1y!c!i1y#T#Z1yP2^T{P!Q![2X![!]2X!c!}2X#R#S2X#T#o2X~2rP!m~!_!`2u~2zO!n~~3PQ|~!_!`3V#r#s3[~3[O!o~~3aO!P~~3fP!j~!_!`3i~3nO!l~R3uT{P#xQ!Q![3n![!]2X!c!}3n#R#S3n#T#o3n~4ZO$i~~4`O$j~~4eO#|~~4hRO#S4e#S#T%W#T~4e~4vO$S~~4{Q!]~!_!`5R#r#s5W~5WO!W~~5]O!X~~5bO$U~",
  tokenizers: [0, 1],
  topRules: {"LogQL":[0,37]},
  specialized: [{term: 43, get: (value, stack) => (specializeIdentifier(value) << 1)},{term: 43, get: (value, stack) => (extendIdentifier(value) << 1) | 1},{term: 43, get: value => spec_Identifier[value] || -1}],
  tokenPrec: 0
});
// This file was generated by lezer-generator. You probably shouldn't edit it.
const Json = 1,
  Logfmt = 2,
  Unpack = 3,
  Pattern = 4,
  Regexp = 5,
  Unwrap = 6,
  LabelFormat = 7,
  LineFormat = 8,
  LabelReplace = 9,
  Vector = 10,
  Offset = 11,
  Bool = 12,
  On = 13,
  Ignoring = 14,
  GroupLeft = 15,
  GroupRight = 16,
  Decolorize = 17,
  Drop = 18,
  Keep = 19,
  By = 20,
  Without = 21,
  And = 22,
  Or = 23,
  Unless = 24,
  Sum = 25,
  Avg = 26,
  Count = 27,
  Max = 28,
  Min = 29,
  Stddev = 30,
  Stdvar = 31,
  Bottomk = 32,
  Topk = 33,
  Sort = 34,
  Sort_Desc = 35,
  LineComment = 36,
  LogQL = 37,
  Expr = 38,
  LogExpr = 39,
  Selector = 40,
  Matchers = 41,
  Matcher = 42,
  Identifier = 43,
  Eq = 44,
  String = 45,
  Neq = 46,
  Re = 47,
  Nre = 48,
  PipelineExpr = 49,
  PipelineStage = 50,
  LineFilters = 51,
  LineFilter = 52,
  Filter = 53,
  PipeExact = 54,
  PipeMatch = 55,
  FilterOp = 56,
  Ip = 57,
  OrFilter = 58,
  Pipe = 59,
  LogfmtParser = 60,
  LogfmtParserFlags = 61,
  ParserFlag = 62,
  LabelParser = 63,
  JsonExpressionParser = 64,
  LabelExtractionExpressionList = 65,
  LabelExtractionExpression = 66,
  LogfmtExpressionParser = 67,
  LabelFilter = 68,
  IpLabelFilter = 69,
  UnitFilter = 70,
  DurationFilter = 71,
  Gtr = 72,
  Duration = 73,
  Gte = 74,
  Lss = 75,
  Lte = 76,
  Eql = 77,
  BytesFilter = 78,
  Bytes = 79,
  NumberFilter = 80,
  LiteralExpr = 81,
  Number = 82,
  Add = 83,
  Sub = 84,
  LineFormatExpr = 85,
  LabelFormatExpr = 86,
  LabelsFormat = 87,
  LabelFormatMatcher = 88,
  DecolorizeExpr = 89,
  DropLabelsExpr = 90,
  DropLabels = 91,
  DropLabel = 92,
  KeepLabelsExpr = 93,
  KeepLabels = 94,
  KeepLabel = 95,
  MetricExpr = 96,
  RangeAggregationExpr = 97,
  RangeOp = 98,
  CountOverTime = 99,
  Rate = 100,
  RateCounter = 101,
  BytesOverTime = 102,
  BytesRate = 103,
  AvgOverTime = 104,
  SumOverTime = 105,
  MinOverTime = 106,
  MaxOverTime = 107,
  StddevOverTime = 108,
  StdvarOverTime = 109,
  QuantileOverTime = 110,
  FirstOverTime = 111,
  LastOverTime = 112,
  AbsentOverTime = 113,
  LogRangeExpr = 114,
  Range = 115,
  OffsetExpr = 116,
  UnwrapExpr = 117,
  ConvOp = 118,
  BytesConv = 119,
  DurationConv = 120,
  DurationSecondsConv = 121,
  Grouping = 122,
  Labels = 123,
  VectorAggregationExpr = 124,
  VectorOp = 125,
  BinOpExpr = 126,
  BinOpModifier = 127,
  OnOrIgnoringModifier = 128,
  GroupingLabels = 129,
  GroupingLabelList = 130,
  GroupingLabel = 131,
  LabelName = 132,
  Mul = 133,
  Div = 134,
  Mod = 135,
  Pow = 136,
  LabelReplaceExpr = 137,
  VectorExpr = 138;

function getNodeFromQuery(query, nodeType) {
  const nodes = [];
  const tree = parser.parse(query);
  tree.iterate({
    enter: (node) => {
      if (nodeType === undefined || nodeType === node.type.id) {
        nodes.push(node.node);
      }
    },
  });
  return nodes[0];
}

function isLogsQuery(query) {
  if (getNodeFromQuery(query, MetricExpr$1)) {
    return false;
  }
  return true;
}

function indent(level) {
  return '  '.repeat(level);
}

function indentMultiline(block, level) {
  const lines = block.split('\n');
  return lines.map((line) => indent(level) + line).join('\n');
}

function trimMultiline(block) {
  const lines = block.split('\n');
  return lines.map((line) => line.trimEnd()).join('\n');
}

function needsBrackets(node, queryType) {
  const childNodeIsSame = node.firstChild?.type.id === queryType;
  let addBrackets = false;

  if (node.firstChild && childNodeIsSame) {
    addBrackets = true;
    node = node.firstChild;
  }

  return { addBrackets, newNode: node };
}

function iterateNode(node, lookingFor) {
  const nodes = [];
  let child = node.firstChild;

  while (child) {
    if (lookingFor.includes(child.type.id)) {
      nodes.push(child);
    }

    nodes.push(...iterateNode(child, lookingFor));
    child = child.nextSibling;
  }

  return nodes;
}

function buildResponse(pipelineType, lastPipelineType, formattedNode) {
  if (lastPipelineType === pipelineType) {
    return ` ${formattedNode}`;
  }

  return `\n${indent(1)}${formattedNode}`;
}

function trimEnd(input, charactersToTrim) {
  let endIndex = input.length - 1;
  while (endIndex >= 0 && charactersToTrim.includes(input[endIndex])) {
    endIndex--;
  }
  return input.substring(0, endIndex + 1);
}

const formatLogExpr = (node, query) => {
  const { addBrackets, newNode } = needsBrackets(node, LogExpr);
  node = newNode;

  const tree = parser.parse(query.substring(node.from, node.to));
  let formatted = '';

  tree.iterate({
    enter: (ref) => {
      const node = ref.node;

      switch (node.type.id) {
        case Selector:
          formatted += formatSelector(node, query);
          break;

        case PipelineExpr:
          node.parent?.type.id !== PipelineExpr && (formatted += formatPipelineExpr(node, query));
          break;
      }
    },
  });

  return addBrackets ? '(' + formatted + ')' : formatted;
};

function formatSelector(node, query) {
  const selector = query.substring(node.from, node.to);
  const subtree = parser.parse(selector);
  const labelNodes = [];
  let response = '';

  subtree.iterate({
    enter: (ref) => {
      const node = ref.node;
      if (node.type.id === Matcher) {
        labelNodes.push(node);
      }
    },
  });

  labelNodes.sort((a, b) => {
    const labelNodeA = a.getChild(Identifier);
    const labelNodeB = b.getChild(Identifier);

    const labelValueA = labelNodeA && query.substring(labelNodeA.from, labelNodeA.to);
    const labelValueB = labelNodeB && query.substring(labelNodeB.from, labelNodeB.to);

    if (!labelValueA || !labelValueB) {
      return 0;
    }

    if (labelValueA < labelValueB) {
      return -1;
    }

    if (labelValueA > labelValueB) {
      return 1;
    }

    return 0;
  });

  labelNodes.forEach((node) => {
    const labelNode = node.getChild(Identifier);
    const operatorNode = labelNode ? labelNode.nextSibling : null;
    const valueNode = node.getChild(String);

    const label = labelNode ? query.substring(labelNode.from, labelNode.to) : null;
    const operator = operatorNode ? query.substring(operatorNode.from, operatorNode.to) : null;
    const value = valueNode ? query.substring(valueNode.from, valueNode.to) : null;

    response += `${label}${operator}${value}, `;
  });

  return '{' + trimEnd(response, ', ') + '}';
}

function formatPipelineExpr(node, query) {
  const pipelineExprNodes = [
    LineFilter,
    LabelParser,
    LogfmtParser,
    LabelFilter,
    JsonExpressionParser,
    LineFormatExpr,
    LabelFormatExpr,
    DecolorizeExpr,
  ];
  let lastPipelineType;
  let response = '';

  iterateNode(node, pipelineExprNodes).forEach((node) => {
    switch (node.type.id) {
      case LineFilter:
        response += buildResponse(LineFilter, lastPipelineType, formatLineFilter(node, query));
        lastPipelineType = LineFilter;
        break;

      case LabelParser:
        response += buildResponse(LabelParser, lastPipelineType, formatLabelParser(node, query));
        lastPipelineType = LabelParser;
        break;

      case LogfmtParser:
        response += buildResponse(LogfmtParser, lastPipelineType, formatLabelParser(node, query));
        lastPipelineType = LogfmtParser;
        break;

      case JsonExpressionParser:
        response += buildResponse(JsonExpressionParser, lastPipelineType, formatJsonExpressionParser(node, query));
        lastPipelineType = JsonExpressionParser;
        break;

      case LabelFilter:
        response += buildResponse(LabelFilter, lastPipelineType, formatLabelFilter(node, query));
        lastPipelineType = LabelFilter;
        break;

      case LineFormatExpr:
        response += buildResponse(LineFormatExpr, lastPipelineType, formatLineFormatExpr(node, query));
        lastPipelineType = LineFormatExpr;
        break;

      case LabelFormatExpr:
        response += buildResponse(LabelFormatExpr, lastPipelineType, formatLabelFormatExpr(node, query));
        lastPipelineType = LabelFormatExpr;
        break;

      case DecolorizeExpr:
        response += buildResponse(DecolorizeExpr, lastPipelineType, formatDecolorizeExpr());
        lastPipelineType = DecolorizeExpr;
        break;
    }
  });

  return response;
}

function formatLineFilter(node, query) {
  const filterNode = node.getChild(Filter);
  const filterOperationNode = node.getChild(FilterOp);
  const stringNode = node.getChild(String);

  const filter = filterNode && query.substring(filterNode.from, filterNode.to);
  const string = stringNode && query.substring(stringNode.from, stringNode.to);

  if (filterOperationNode) {
    return `${filter} ip(${string})`;
  }
  return `${filter} ${string}`;
}

function formatLabelParser(node, query) {
  const hasString = node.getChild(String);

  if (hasString) {
    const parserNode = node.getChild(Regexp) || node.getChild(Pattern);
    const stringNode = node.getChild(String);

    const parser = parserNode && query.substring(parserNode.from, parserNode.to);
    const string = stringNode && query.substring(stringNode.from, stringNode.to);

    return `| ${parser}${string}`;
  }

  const labelParser = query.substring(node.from, node.to);
  return `| ${labelParser}`;
}

function formatJsonExpressionParser(node, query) {
  const jsonExpressionNodes = iterateNode(node, [LabelExtractionExpression]);
  let response = '';

  jsonExpressionNodes.forEach((node) => {
    const identifierNode = node.getChild(Identifier);
    const valueNode = node.getChild(String);

    const identifier = identifierNode && query.substring(identifierNode.from, identifierNode.to);
    const value = valueNode && query.substring(valueNode.from, valueNode.to);

    response += `${identifier}=${value}, `;
  });

  return `| json ${trimEnd(response, ', ')}`;
}

function formatLabelFilter(node, query) {
  const selectedFilter =
    node.getChild(Matcher) ||
    node.getChild(IpLabelFilter) ||
    node.getChild(NumberFilter) ||
    node.getChild(UnitFilter)?.getChild(DurationFilter) ||
    node.getChild(UnitFilter)?.getChild(BytesFilter);

  if (!selectedFilter) {
    return '';
  }

  const selectedFilterType = selectedFilter.type.id;

  const identifierNode = selectedFilter.getChild(Identifier);
  const operatorNode = identifierNode && identifierNode.nextSibling;
  let valueNode;

  if (selectedFilterType === DurationFilter) {
    valueNode = selectedFilter.getChild(Duration);
  } else if (selectedFilterType === BytesFilter) {
    valueNode = selectedFilter.getChild(Bytes);
  } else if (selectedFilterType === NumberFilter) {
    valueNode = selectedFilter.getChild(LiteralExpr);
  } else {
    valueNode = selectedFilter.getChild(String);
  }

  const identifier = identifierNode && query.substring(identifierNode.from, identifierNode.to);
  const operator = operatorNode && query.substring(operatorNode.from, operatorNode.to);
  const value = valueNode && query.substring(valueNode.from, valueNode.to);

  if (selectedFilterType === IpLabelFilter) {
    return `| ${identifier}${operator}ip(${value})`;
  }

  return `| ${identifier}${operator}${value}`;
}

function formatLineFormatExpr(node, query) {
  const stringNode = node.getChild(String);
  const string = stringNode && query.substring(stringNode.from, stringNode.to);
  return `| line_format ${string}`;
}

function formatLabelFormatExpr(node, query) {
  const labelFormatMatcherNodes = iterateNode(node, [LabelFormatMatcher]);
  let response = '| label_format ';

  labelFormatMatcherNodes.forEach((labelFormatMatcherNode) => {
    let identifierNode;
    let valueNode;

    if (labelFormatMatcherNode.getChildren(Identifier).length === 2) {
      [identifierNode, valueNode] = labelFormatMatcherNode.getChildren(Identifier);
    } else {
      identifierNode = labelFormatMatcherNode.getChild(Identifier);
      valueNode = labelFormatMatcherNode.getChild(String);
    }

    const identifier = identifierNode && query.substring(identifierNode.from, identifierNode.to);
    const value = valueNode && query.substring(valueNode.from, valueNode.to);

    response += `${identifier}=${value}, `;
  });

  return trimEnd(response, ', ');
}

function formatDecolorizeExpr() {
  return `| decolorize`;
}

const formatMetricExpr = (node, query) => {
  const { addBrackets, newNode } = needsBrackets(node, MetricExpr);
  node = newNode;
  let formatted = '';

  const childNode = node.firstChild;
  switch (childNode && childNode.type.id) {
    case RangeAggregationExpr:
      formatted = formatRangeAggregationExpr(node, query);
      break;

    case VectorAggregationExpr:
      formatted = formatVectorAggregationExpr(node, query);
      break;

    case BinOpExpr:
      formatted = formatBinOpExpr(node, query);
      break;

    case LiteralExpr:
      formatted = formatLiteralExpr(node, query);
      break;

    case LabelReplaceExpr:
      formatted = formatLabelReplaceExpr(node, query);
      break;

    case VectorExpr:
      formatted = formatVectorExpr(node, query);
      break;
  }

  return addBrackets ? '(' + formatted + ')' : formatted;
};

function formatRangeAggregationExpr(node, query) {
  let response = '';

  iterateNode(node, [RangeOp, Number, LogRangeExpr, Grouping]).forEach((node) => {
    if (node.parent?.type.id !== RangeAggregationExpr) {
      return;
    }

    switch (node.type.id) {
      case RangeOp:
        response += `${query.substring(node.from, node.to)}(\n`;
        break;

      case Number:
        response += `${indent(1) + query.substring(node.from, node.to)},\n`;
        break;

      case LogRangeExpr:
        response += formatLogRangeExpr(node, query);
        break;

      case Grouping:
        response += formatGrouping(node, query);
        break;
    }
  });

  return response;
}

function formatLogRangeExpr(node, query) {
  const nodes = [];
  let selector = '';
  let pipeline = '';
  let range = '';
  let offset = '';
  let unwrap = '';

  iterateNode(node, [Selector, Range, OffsetExpr, UnwrapExpr, PipelineExpr]).forEach((node) => {
    if (node.parent?.type.id !== LogRangeExpr) {
      return;
    }

    nodes.push(node);

    switch (node.type.id) {
      case Selector: {
        let logExpr = query.substring(node.from, node.to);
        selector += formatSelector({ ...node, from: 0, to: logExpr.length }, logExpr);
        break;
      }

      case PipelineExpr:
        pipeline += formatPipelineExpr(node, query);
        break;

      case Range:
        range += query.substring(node.from, node.to);
        break;

      case OffsetExpr: {
        const durationNode = node.getChild(Duration);
        offset += ` offset ${durationNode ? query.substring(durationNode.from, durationNode.to) : ''}`;
        break;
      }

      case UnwrapExpr:
        iterateNode(node, [Identifier, ConvOp, LabelFilter]).forEach((node, _, arr) => {
          switch (node.type.id) {
            case Identifier: {
              if (node.parent?.type.id !== UnwrapExpr) {
                return;
              }

              const hasConvOp = arr.find((node) => node.type.id === ConvOp);

              if (hasConvOp) {
                return;
              }

              unwrap += `| unwrap ${query.substring(node.from, node.to)} `;
              return;
            }

            case ConvOp: {
              const identifierNode = arr.find((node) => node.type.id === Identifier);
              const identifier = identifierNode ? query.substring(identifierNode.from, identifierNode.to) : '';
              unwrap += `| unwrap ${query.substring(node.from, node.to)}(${identifier}) `;
              return;
            }

            case LabelFilter:
              unwrap += formatLabelFilter(node, query);
              return;
          }
        });
        break;
    }
  });

  let response = '';
  nodes.forEach((node, index, array) => {
    const previousNode = array[index - 1];

    if (node.type.id === Selector) {
      response += indent(1) + selector;
    }

    if (node.type.id === PipelineExpr) {
      response += indentMultiline(pipeline, 1);
    }

    if (node.type.id === Range) {
      response += '\n' + indent(1) + range;
    }

    if (node.type.id === OffsetExpr) {
      response += offset;
    }

    if (node.type.id === UnwrapExpr) {
      if (previousNode?.type.id !== OffsetExpr && previousNode?.type.id !== Range) {
        response += '\n' + indent(1) + unwrap;
      } else {
        response += ' ' + unwrap;
      }
    }
  });

  return (response += '\n)');
}

function formatGrouping(node, query) {
  let response = '';

  const labels = iterateNode(node, [Identifier]).map((node) => {
    return query.substring(node.from, node.to);
  });

  iterateNode(node, [By, Without]).forEach((node) => {
    if (node.parent?.type.id !== Grouping) {
      return;
    }

    switch (node.type.id) {
      case By:
        response = ` by (${labels.join(', ')}) `;
        break;

      case Without:
        response = ` without (${labels.join(', ')}) `;
        break;
    }
  });

  return response;
}

function formatVectorAggregationExpr(node, query) {
  let response = '';

  iterateNode(node, [VectorOp, Number, MetricExpr, Grouping]).forEach((node, _, arr) => {
    if (node.parent?.type.id !== VectorAggregationExpr) {
      return;
    }

    switch (node.type.id) {
      case VectorOp:
        response += `${query.substring(node.from, node.to)}`;
        break;

      case Number:
        response += `(\n`;
        response += `${indent(1) + query.substring(node.from, node.to)},\n`;
        break;

      case MetricExpr: {
        const hasNumber = arr.find((node) => node.type.id === Number && node.parent?.type.id === VectorAggregationExpr);
        response += hasNumber ? '' : '(\n';

        const metricExpr = query.substring(node.from, node.to);
        const metricNode = getNodeFromQuery(metricExpr, MetricExpr);
        response += indentMultiline(formatMetricExpr(metricNode, metricExpr), 1);
        response += '\n)';
        break;
      }

      case Grouping:
        response += formatGrouping(node, query);
        break;
    }
  });

  return response;
}

function formatBinOpExpr(node, query) {
  let operator;

  const [leftExpr, rightExpr] = iterateNode(node, [Expr]).map((node, idx) => {
    if (idx === 0) {
      operator = query.substring(node.nextSibling?.from ?? 0, node.nextSibling?.to);
    }

    const expr = query.substring(node.from, node.to);
    let expressionNode;

    if (isLogsQuery(expr)) {
      expressionNode = getNodeFromQuery(expr, LogExpr);
      return formatLogExpr(expressionNode, expr);
    } else {
      expressionNode = getNodeFromQuery(expr, MetricExpr);
      return formatMetricExpr(expressionNode, expr);
    }
  });

  return leftExpr + '\n' + operator + '\n' + rightExpr;
}

function formatLiteralExpr(node, query) {
  node = node.getChild(LiteralExpr) ?? node;
  const addNode = node.getChild(Add);
  const subNode = node.getChild(Sub);
  const numberNode = node.getChild(Number);

  if (!numberNode) {
    return '';
  }

  if (addNode) {
    return `+${query.substring(numberNode.from, numberNode.to)}`;
  }

  if (subNode) {
    return `-${query.substring(numberNode.from, numberNode.to)}`;
  }

  return query.substring(numberNode.from, numberNode.to);
}

function formatLabelReplaceExpr(node, query) {
  let response = 'label_replace(\n';

  iterateNode(node, [MetricExpr, String]).forEach((node) => {
    if (node.parent?.type.id !== LabelReplaceExpr) {
      return;
    }

    if (node.type.id === MetricExpr) {
      const metricExpr = query.substring(node.from, node.to);
      const metricNode = getNodeFromQuery(metricExpr, MetricExpr);
      response += indentMultiline(formatMetricExpr(metricNode, metricExpr), 1) + ',\n';
    } else {
      response += indent(1) + query.substring(node.from, node.to) + ',\n';
    }
  });

  return trimEnd(response, ',\n') + '\n)';
}

function formatVectorExpr(node, query) {
  node = node.getChild(VectorExpr) ?? node;
  const numberNode = node.getChild(Number);

  if (!numberNode) {
    return '';
  }

  return `vector(${query.substring(numberNode.from, numberNode.to)})`;
}

/**
 * @experimental This feature is subject to change or removal in future versions.
 */
const formatLokiQuery = (query) => {
  const tree = parser.parse(query);
  let formatted = '';

  tree.iterate({
    enter: (ref) => {
      const node = ref.node;

      if (node.parent?.type.id !== Expr || node.parent?.parent?.type.id === BinOpExpr) {
        return;
      }

      switch (node.type.id) {
        case MetricExpr:
          formatted = formatMetricExpr(node, query);
          return false;

        case LogExpr:
          formatted = formatLogExpr(node, query);
          return false;
      }
    },
  });

  return trimMultiline(formatted);
};




/***/ }),

/***/ "./node_modules/lru-cache/dist/esm/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LRUCache: () => (/* binding */ LRUCache)
/* harmony export */ });
/**
 * @module LRUCache
 */
const perf = typeof performance === 'object' &&
    performance &&
    typeof performance.now === 'function'
    ? performance
    : Date;
const warned = new Set();
/* c8 ignore start */
const PROCESS = (typeof process === 'object' && !!process ? process : {});
/* c8 ignore start */
const emitWarning = (msg, type, code, fn) => {
    typeof PROCESS.emitWarning === 'function'
        ? PROCESS.emitWarning(msg, type, code, fn)
        : console.error(`[${code}] ${type}: ${msg}`);
};
let AC = globalThis.AbortController;
let AS = globalThis.AbortSignal;
/* c8 ignore start */
if (typeof AC === 'undefined') {
    //@ts-ignore
    AS = class AbortSignal {
        onabort;
        _onabort = [];
        reason;
        aborted = false;
        addEventListener(_, fn) {
            this._onabort.push(fn);
        }
    };
    //@ts-ignore
    AC = class AbortController {
        constructor() {
            warnACPolyfill();
        }
        signal = new AS();
        abort(reason) {
            if (this.signal.aborted)
                return;
            //@ts-ignore
            this.signal.reason = reason;
            //@ts-ignore
            this.signal.aborted = true;
            //@ts-ignore
            for (const fn of this.signal._onabort) {
                fn(reason);
            }
            this.signal.onabort?.(reason);
        }
    };
    let printACPolyfillWarning = PROCESS.env?.LRU_CACHE_IGNORE_AC_WARNING !== '1';
    const warnACPolyfill = () => {
        if (!printACPolyfillWarning)
            return;
        printACPolyfillWarning = false;
        emitWarning('AbortController is not defined. If using lru-cache in ' +
            'node 14, load an AbortController polyfill from the ' +
            '`node-abort-controller` package. A minimal polyfill is ' +
            'provided for use by LRUCache.fetch(), but it should not be ' +
            'relied upon in other contexts (eg, passing it to other APIs that ' +
            'use AbortController/AbortSignal might have undesirable effects). ' +
            'You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.', 'NO_ABORT_CONTROLLER', 'ENOTSUP', warnACPolyfill);
    };
}
/* c8 ignore stop */
const shouldWarn = (code) => !warned.has(code);
const TYPE = Symbol('type');
const isPosInt = (n) => n && n === Math.floor(n) && n > 0 && isFinite(n);
/* c8 ignore start */
// This is a little bit ridiculous, tbh.
// The maximum array length is 2^32-1 or thereabouts on most JS impls.
// And well before that point, you're caching the entire world, I mean,
// that's ~32GB of just integers for the next/prev links, plus whatever
// else to hold that many keys and values.  Just filling the memory with
// zeroes at init time is brutal when you get that big.
// But why not be complete?
// Maybe in the future, these limits will have expanded.
const getUintArray = (max) => !isPosInt(max)
    ? null
    : max <= Math.pow(2, 8)
        ? Uint8Array
        : max <= Math.pow(2, 16)
            ? Uint16Array
            : max <= Math.pow(2, 32)
                ? Uint32Array
                : max <= Number.MAX_SAFE_INTEGER
                    ? ZeroArray
                    : null;
/* c8 ignore stop */
class ZeroArray extends Array {
    constructor(size) {
        super(size);
        this.fill(0);
    }
}
class Stack {
    heap;
    length;
    // private constructor
    static #constructing = false;
    static create(max) {
        const HeapCls = getUintArray(max);
        if (!HeapCls)
            return [];
        Stack.#constructing = true;
        const s = new Stack(max, HeapCls);
        Stack.#constructing = false;
        return s;
    }
    constructor(max, HeapCls) {
        /* c8 ignore start */
        if (!Stack.#constructing) {
            throw new TypeError('instantiate Stack using Stack.create(n)');
        }
        /* c8 ignore stop */
        this.heap = new HeapCls(max);
        this.length = 0;
    }
    push(n) {
        this.heap[this.length++] = n;
    }
    pop() {
        return this.heap[--this.length];
    }
}
/**
 * Default export, the thing you're using this module to get.
 *
 * All properties from the options object (with the exception of
 * {@link OptionsBase.max} and {@link OptionsBase.maxSize}) are added as
 * normal public members. (`max` and `maxBase` are read-only getters.)
 * Changing any of these will alter the defaults for subsequent method calls,
 * but is otherwise safe.
 */
class LRUCache {
    // properties coming in from the options of these, only max and maxSize
    // really *need* to be protected. The rest can be modified, as they just
    // set defaults for various methods.
    #max;
    #maxSize;
    #dispose;
    #disposeAfter;
    #fetchMethod;
    /**
     * {@link LRUCache.OptionsBase.ttl}
     */
    ttl;
    /**
     * {@link LRUCache.OptionsBase.ttlResolution}
     */
    ttlResolution;
    /**
     * {@link LRUCache.OptionsBase.ttlAutopurge}
     */
    ttlAutopurge;
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnGet}
     */
    updateAgeOnGet;
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnHas}
     */
    updateAgeOnHas;
    /**
     * {@link LRUCache.OptionsBase.allowStale}
     */
    allowStale;
    /**
     * {@link LRUCache.OptionsBase.noDisposeOnSet}
     */
    noDisposeOnSet;
    /**
     * {@link LRUCache.OptionsBase.noUpdateTTL}
     */
    noUpdateTTL;
    /**
     * {@link LRUCache.OptionsBase.maxEntrySize}
     */
    maxEntrySize;
    /**
     * {@link LRUCache.OptionsBase.sizeCalculation}
     */
    sizeCalculation;
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnFetchRejection}
     */
    noDeleteOnFetchRejection;
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnStaleGet}
     */
    noDeleteOnStaleGet;
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchAbort}
     */
    allowStaleOnFetchAbort;
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchRejection}
     */
    allowStaleOnFetchRejection;
    /**
     * {@link LRUCache.OptionsBase.ignoreFetchAbort}
     */
    ignoreFetchAbort;
    // computed properties
    #size;
    #calculatedSize;
    #keyMap;
    #keyList;
    #valList;
    #next;
    #prev;
    #head;
    #tail;
    #free;
    #disposed;
    #sizes;
    #starts;
    #ttls;
    #hasDispose;
    #hasFetchMethod;
    #hasDisposeAfter;
    /**
     * Do not call this method unless you need to inspect the
     * inner workings of the cache.  If anything returned by this
     * object is modified in any way, strange breakage may occur.
     *
     * These fields are private for a reason!
     *
     * @internal
     */
    static unsafeExposeInternals(c) {
        return {
            // properties
            starts: c.#starts,
            ttls: c.#ttls,
            sizes: c.#sizes,
            keyMap: c.#keyMap,
            keyList: c.#keyList,
            valList: c.#valList,
            next: c.#next,
            prev: c.#prev,
            get head() {
                return c.#head;
            },
            get tail() {
                return c.#tail;
            },
            free: c.#free,
            // methods
            isBackgroundFetch: (p) => c.#isBackgroundFetch(p),
            backgroundFetch: (k, index, options, context) => c.#backgroundFetch(k, index, options, context),
            moveToTail: (index) => c.#moveToTail(index),
            indexes: (options) => c.#indexes(options),
            rindexes: (options) => c.#rindexes(options),
            isStale: (index) => c.#isStale(index),
        };
    }
    // Protected read-only members
    /**
     * {@link LRUCache.OptionsBase.max} (read-only)
     */
    get max() {
        return this.#max;
    }
    /**
     * {@link LRUCache.OptionsBase.maxSize} (read-only)
     */
    get maxSize() {
        return this.#maxSize;
    }
    /**
     * The total computed size of items in the cache (read-only)
     */
    get calculatedSize() {
        return this.#calculatedSize;
    }
    /**
     * The number of items stored in the cache (read-only)
     */
    get size() {
        return this.#size;
    }
    /**
     * {@link LRUCache.OptionsBase.fetchMethod} (read-only)
     */
    get fetchMethod() {
        return this.#fetchMethod;
    }
    /**
     * {@link LRUCache.OptionsBase.dispose} (read-only)
     */
    get dispose() {
        return this.#dispose;
    }
    /**
     * {@link LRUCache.OptionsBase.disposeAfter} (read-only)
     */
    get disposeAfter() {
        return this.#disposeAfter;
    }
    constructor(options) {
        const { max = 0, ttl, ttlResolution = 1, ttlAutopurge, updateAgeOnGet, updateAgeOnHas, allowStale, dispose, disposeAfter, noDisposeOnSet, noUpdateTTL, maxSize = 0, maxEntrySize = 0, sizeCalculation, fetchMethod, noDeleteOnFetchRejection, noDeleteOnStaleGet, allowStaleOnFetchRejection, allowStaleOnFetchAbort, ignoreFetchAbort, } = options;
        if (max !== 0 && !isPosInt(max)) {
            throw new TypeError('max option must be a nonnegative integer');
        }
        const UintArray = max ? getUintArray(max) : Array;
        if (!UintArray) {
            throw new Error('invalid max value: ' + max);
        }
        this.#max = max;
        this.#maxSize = maxSize;
        this.maxEntrySize = maxEntrySize || this.#maxSize;
        this.sizeCalculation = sizeCalculation;
        if (this.sizeCalculation) {
            if (!this.#maxSize && !this.maxEntrySize) {
                throw new TypeError('cannot set sizeCalculation without setting maxSize or maxEntrySize');
            }
            if (typeof this.sizeCalculation !== 'function') {
                throw new TypeError('sizeCalculation set to non-function');
            }
        }
        if (fetchMethod !== undefined &&
            typeof fetchMethod !== 'function') {
            throw new TypeError('fetchMethod must be a function if specified');
        }
        this.#fetchMethod = fetchMethod;
        this.#hasFetchMethod = !!fetchMethod;
        this.#keyMap = new Map();
        this.#keyList = new Array(max).fill(undefined);
        this.#valList = new Array(max).fill(undefined);
        this.#next = new UintArray(max);
        this.#prev = new UintArray(max);
        this.#head = 0;
        this.#tail = 0;
        this.#free = Stack.create(max);
        this.#size = 0;
        this.#calculatedSize = 0;
        if (typeof dispose === 'function') {
            this.#dispose = dispose;
        }
        if (typeof disposeAfter === 'function') {
            this.#disposeAfter = disposeAfter;
            this.#disposed = [];
        }
        else {
            this.#disposeAfter = undefined;
            this.#disposed = undefined;
        }
        this.#hasDispose = !!this.#dispose;
        this.#hasDisposeAfter = !!this.#disposeAfter;
        this.noDisposeOnSet = !!noDisposeOnSet;
        this.noUpdateTTL = !!noUpdateTTL;
        this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection;
        this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection;
        this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort;
        this.ignoreFetchAbort = !!ignoreFetchAbort;
        // NB: maxEntrySize is set to maxSize if it's set
        if (this.maxEntrySize !== 0) {
            if (this.#maxSize !== 0) {
                if (!isPosInt(this.#maxSize)) {
                    throw new TypeError('maxSize must be a positive integer if specified');
                }
            }
            if (!isPosInt(this.maxEntrySize)) {
                throw new TypeError('maxEntrySize must be a positive integer if specified');
            }
            this.#initializeSizeTracking();
        }
        this.allowStale = !!allowStale;
        this.noDeleteOnStaleGet = !!noDeleteOnStaleGet;
        this.updateAgeOnGet = !!updateAgeOnGet;
        this.updateAgeOnHas = !!updateAgeOnHas;
        this.ttlResolution =
            isPosInt(ttlResolution) || ttlResolution === 0
                ? ttlResolution
                : 1;
        this.ttlAutopurge = !!ttlAutopurge;
        this.ttl = ttl || 0;
        if (this.ttl) {
            if (!isPosInt(this.ttl)) {
                throw new TypeError('ttl must be a positive integer if specified');
            }
            this.#initializeTTLTracking();
        }
        // do not allow completely unbounded caches
        if (this.#max === 0 && this.ttl === 0 && this.#maxSize === 0) {
            throw new TypeError('At least one of max, maxSize, or ttl is required');
        }
        if (!this.ttlAutopurge && !this.#max && !this.#maxSize) {
            const code = 'LRU_CACHE_UNBOUNDED';
            if (shouldWarn(code)) {
                warned.add(code);
                const msg = 'TTL caching without ttlAutopurge, max, or maxSize can ' +
                    'result in unbounded memory consumption.';
                emitWarning(msg, 'UnboundedCacheWarning', code, LRUCache);
            }
        }
    }
    /**
     * Return the remaining TTL time for a given entry key
     */
    getRemainingTTL(key) {
        return this.#keyMap.has(key) ? Infinity : 0;
    }
    #initializeTTLTracking() {
        const ttls = new ZeroArray(this.#max);
        const starts = new ZeroArray(this.#max);
        this.#ttls = ttls;
        this.#starts = starts;
        this.#setItemTTL = (index, ttl, start = perf.now()) => {
            starts[index] = ttl !== 0 ? start : 0;
            ttls[index] = ttl;
            if (ttl !== 0 && this.ttlAutopurge) {
                const t = setTimeout(() => {
                    if (this.#isStale(index)) {
                        this.delete(this.#keyList[index]);
                    }
                }, ttl + 1);
                // unref() not supported on all platforms
                /* c8 ignore start */
                if (t.unref) {
                    t.unref();
                }
                /* c8 ignore stop */
            }
        };
        this.#updateItemAge = index => {
            starts[index] = ttls[index] !== 0 ? perf.now() : 0;
        };
        this.#statusTTL = (status, index) => {
            if (ttls[index]) {
                const ttl = ttls[index];
                const start = starts[index];
                /* c8 ignore next */
                if (!ttl || !start)
                    return;
                status.ttl = ttl;
                status.start = start;
                status.now = cachedNow || getNow();
                const age = status.now - start;
                status.remainingTTL = ttl - age;
            }
        };
        // debounce calls to perf.now() to 1s so we're not hitting
        // that costly call repeatedly.
        let cachedNow = 0;
        const getNow = () => {
            const n = perf.now();
            if (this.ttlResolution > 0) {
                cachedNow = n;
                const t = setTimeout(() => (cachedNow = 0), this.ttlResolution);
                // not available on all platforms
                /* c8 ignore start */
                if (t.unref) {
                    t.unref();
                }
                /* c8 ignore stop */
            }
            return n;
        };
        this.getRemainingTTL = key => {
            const index = this.#keyMap.get(key);
            if (index === undefined) {
                return 0;
            }
            const ttl = ttls[index];
            const start = starts[index];
            if (!ttl || !start) {
                return Infinity;
            }
            const age = (cachedNow || getNow()) - start;
            return ttl - age;
        };
        this.#isStale = index => {
            const s = starts[index];
            const t = ttls[index];
            return !!t && !!s && (cachedNow || getNow()) - s > t;
        };
    }
    // conditionally set private methods related to TTL
    #updateItemAge = () => { };
    #statusTTL = () => { };
    #setItemTTL = () => { };
    /* c8 ignore stop */
    #isStale = () => false;
    #initializeSizeTracking() {
        const sizes = new ZeroArray(this.#max);
        this.#calculatedSize = 0;
        this.#sizes = sizes;
        this.#removeItemSize = index => {
            this.#calculatedSize -= sizes[index];
            sizes[index] = 0;
        };
        this.#requireSize = (k, v, size, sizeCalculation) => {
            // provisionally accept background fetches.
            // actual value size will be checked when they return.
            if (this.#isBackgroundFetch(v)) {
                return 0;
            }
            if (!isPosInt(size)) {
                if (sizeCalculation) {
                    if (typeof sizeCalculation !== 'function') {
                        throw new TypeError('sizeCalculation must be a function');
                    }
                    size = sizeCalculation(v, k);
                    if (!isPosInt(size)) {
                        throw new TypeError('sizeCalculation return invalid (expect positive integer)');
                    }
                }
                else {
                    throw new TypeError('invalid size value (must be positive integer). ' +
                        'When maxSize or maxEntrySize is used, sizeCalculation ' +
                        'or size must be set.');
                }
            }
            return size;
        };
        this.#addItemSize = (index, size, status) => {
            sizes[index] = size;
            if (this.#maxSize) {
                const maxSize = this.#maxSize - sizes[index];
                while (this.#calculatedSize > maxSize) {
                    this.#evict(true);
                }
            }
            this.#calculatedSize += sizes[index];
            if (status) {
                status.entrySize = size;
                status.totalCalculatedSize = this.#calculatedSize;
            }
        };
    }
    #removeItemSize = _i => { };
    #addItemSize = (_i, _s, _st) => { };
    #requireSize = (_k, _v, size, sizeCalculation) => {
        if (size || sizeCalculation) {
            throw new TypeError('cannot set size without setting maxSize or maxEntrySize on cache');
        }
        return 0;
    };
    *#indexes({ allowStale = this.allowStale } = {}) {
        if (this.#size) {
            for (let i = this.#tail; true;) {
                if (!this.#isValidIndex(i)) {
                    break;
                }
                if (allowStale || !this.#isStale(i)) {
                    yield i;
                }
                if (i === this.#head) {
                    break;
                }
                else {
                    i = this.#prev[i];
                }
            }
        }
    }
    *#rindexes({ allowStale = this.allowStale } = {}) {
        if (this.#size) {
            for (let i = this.#head; true;) {
                if (!this.#isValidIndex(i)) {
                    break;
                }
                if (allowStale || !this.#isStale(i)) {
                    yield i;
                }
                if (i === this.#tail) {
                    break;
                }
                else {
                    i = this.#next[i];
                }
            }
        }
    }
    #isValidIndex(index) {
        return (index !== undefined &&
            this.#keyMap.get(this.#keyList[index]) === index);
    }
    /**
     * Return a generator yielding `[key, value]` pairs,
     * in order from most recently used to least recently used.
     */
    *entries() {
        for (const i of this.#indexes()) {
            if (this.#valList[i] !== undefined &&
                this.#keyList[i] !== undefined &&
                !this.#isBackgroundFetch(this.#valList[i])) {
                yield [this.#keyList[i], this.#valList[i]];
            }
        }
    }
    /**
     * Inverse order version of {@link LRUCache.entries}
     *
     * Return a generator yielding `[key, value]` pairs,
     * in order from least recently used to most recently used.
     */
    *rentries() {
        for (const i of this.#rindexes()) {
            if (this.#valList[i] !== undefined &&
                this.#keyList[i] !== undefined &&
                !this.#isBackgroundFetch(this.#valList[i])) {
                yield [this.#keyList[i], this.#valList[i]];
            }
        }
    }
    /**
     * Return a generator yielding the keys in the cache,
     * in order from most recently used to least recently used.
     */
    *keys() {
        for (const i of this.#indexes()) {
            const k = this.#keyList[i];
            if (k !== undefined &&
                !this.#isBackgroundFetch(this.#valList[i])) {
                yield k;
            }
        }
    }
    /**
     * Inverse order version of {@link LRUCache.keys}
     *
     * Return a generator yielding the keys in the cache,
     * in order from least recently used to most recently used.
     */
    *rkeys() {
        for (const i of this.#rindexes()) {
            const k = this.#keyList[i];
            if (k !== undefined &&
                !this.#isBackgroundFetch(this.#valList[i])) {
                yield k;
            }
        }
    }
    /**
     * Return a generator yielding the values in the cache,
     * in order from most recently used to least recently used.
     */
    *values() {
        for (const i of this.#indexes()) {
            const v = this.#valList[i];
            if (v !== undefined &&
                !this.#isBackgroundFetch(this.#valList[i])) {
                yield this.#valList[i];
            }
        }
    }
    /**
     * Inverse order version of {@link LRUCache.values}
     *
     * Return a generator yielding the values in the cache,
     * in order from least recently used to most recently used.
     */
    *rvalues() {
        for (const i of this.#rindexes()) {
            const v = this.#valList[i];
            if (v !== undefined &&
                !this.#isBackgroundFetch(this.#valList[i])) {
                yield this.#valList[i];
            }
        }
    }
    /**
     * Iterating over the cache itself yields the same results as
     * {@link LRUCache.entries}
     */
    [Symbol.iterator]() {
        return this.entries();
    }
    /**
     * A String value that is used in the creation of the default string description of an object.
     * Called by the built-in method Object.prototype.toString.
     */
    [Symbol.toStringTag] = 'LRUCache';
    /**
     * Find a value for which the supplied fn method returns a truthy value,
     * similar to Array.find().  fn is called as fn(value, key, cache).
     */
    find(fn, getOptions = {}) {
        for (const i of this.#indexes()) {
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v)
                ? v.__staleWhileFetching
                : v;
            if (value === undefined)
                continue;
            if (fn(value, this.#keyList[i], this)) {
                return this.get(this.#keyList[i], getOptions);
            }
        }
    }
    /**
     * Call the supplied function on each item in the cache, in order from
     * most recently used to least recently used.  fn is called as
     * fn(value, key, cache).  Does not update age or recenty of use.
     * Does not iterate over stale values.
     */
    forEach(fn, thisp = this) {
        for (const i of this.#indexes()) {
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v)
                ? v.__staleWhileFetching
                : v;
            if (value === undefined)
                continue;
            fn.call(thisp, value, this.#keyList[i], this);
        }
    }
    /**
     * The same as {@link LRUCache.forEach} but items are iterated over in
     * reverse order.  (ie, less recently used items are iterated over first.)
     */
    rforEach(fn, thisp = this) {
        for (const i of this.#rindexes()) {
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v)
                ? v.__staleWhileFetching
                : v;
            if (value === undefined)
                continue;
            fn.call(thisp, value, this.#keyList[i], this);
        }
    }
    /**
     * Delete any stale entries. Returns true if anything was removed,
     * false otherwise.
     */
    purgeStale() {
        let deleted = false;
        for (const i of this.#rindexes({ allowStale: true })) {
            if (this.#isStale(i)) {
                this.delete(this.#keyList[i]);
                deleted = true;
            }
        }
        return deleted;
    }
    /**
     * Get the extended info about a given entry, to get its value, size, and
     * TTL info simultaneously. Like {@link LRUCache#dump}, but just for a
     * single key. Always returns stale values, if their info is found in the
     * cache, so be sure to check for expired TTLs if relevant.
     */
    info(key) {
        const i = this.#keyMap.get(key);
        if (i === undefined)
            return undefined;
        const v = this.#valList[i];
        const value = this.#isBackgroundFetch(v)
            ? v.__staleWhileFetching
            : v;
        if (value === undefined)
            return undefined;
        const entry = { value };
        if (this.#ttls && this.#starts) {
            const ttl = this.#ttls[i];
            const start = this.#starts[i];
            if (ttl && start) {
                const remain = ttl - (perf.now() - start);
                entry.ttl = remain;
                entry.start = Date.now();
            }
        }
        if (this.#sizes) {
            entry.size = this.#sizes[i];
        }
        return entry;
    }
    /**
     * Return an array of [key, {@link LRUCache.Entry}] tuples which can be
     * passed to cache.load()
     */
    dump() {
        const arr = [];
        for (const i of this.#indexes({ allowStale: true })) {
            const key = this.#keyList[i];
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v)
                ? v.__staleWhileFetching
                : v;
            if (value === undefined || key === undefined)
                continue;
            const entry = { value };
            if (this.#ttls && this.#starts) {
                entry.ttl = this.#ttls[i];
                // always dump the start relative to a portable timestamp
                // it's ok for this to be a bit slow, it's a rare operation.
                const age = perf.now() - this.#starts[i];
                entry.start = Math.floor(Date.now() - age);
            }
            if (this.#sizes) {
                entry.size = this.#sizes[i];
            }
            arr.unshift([key, entry]);
        }
        return arr;
    }
    /**
     * Reset the cache and load in the items in entries in the order listed.
     * Note that the shape of the resulting cache may be different if the
     * same options are not used in both caches.
     */
    load(arr) {
        this.clear();
        for (const [key, entry] of arr) {
            if (entry.start) {
                // entry.start is a portable timestamp, but we may be using
                // node's performance.now(), so calculate the offset, so that
                // we get the intended remaining TTL, no matter how long it's
                // been on ice.
                //
                // it's ok for this to be a bit slow, it's a rare operation.
                const age = Date.now() - entry.start;
                entry.start = perf.now() - age;
            }
            this.set(key, entry.value, entry);
        }
    }
    /**
     * Add a value to the cache.
     *
     * Note: if `undefined` is specified as a value, this is an alias for
     * {@link LRUCache#delete}
     */
    set(k, v, setOptions = {}) {
        if (v === undefined) {
            this.delete(k);
            return this;
        }
        const { ttl = this.ttl, start, noDisposeOnSet = this.noDisposeOnSet, sizeCalculation = this.sizeCalculation, status, } = setOptions;
        let { noUpdateTTL = this.noUpdateTTL } = setOptions;
        const size = this.#requireSize(k, v, setOptions.size || 0, sizeCalculation);
        // if the item doesn't fit, don't do anything
        // NB: maxEntrySize set to maxSize by default
        if (this.maxEntrySize && size > this.maxEntrySize) {
            if (status) {
                status.set = 'miss';
                status.maxEntrySizeExceeded = true;
            }
            // have to delete, in case something is there already.
            this.delete(k);
            return this;
        }
        let index = this.#size === 0 ? undefined : this.#keyMap.get(k);
        if (index === undefined) {
            // addition
            index = (this.#size === 0
                ? this.#tail
                : this.#free.length !== 0
                    ? this.#free.pop()
                    : this.#size === this.#max
                        ? this.#evict(false)
                        : this.#size);
            this.#keyList[index] = k;
            this.#valList[index] = v;
            this.#keyMap.set(k, index);
            this.#next[this.#tail] = index;
            this.#prev[index] = this.#tail;
            this.#tail = index;
            this.#size++;
            this.#addItemSize(index, size, status);
            if (status)
                status.set = 'add';
            noUpdateTTL = false;
        }
        else {
            // update
            this.#moveToTail(index);
            const oldVal = this.#valList[index];
            if (v !== oldVal) {
                if (this.#hasFetchMethod && this.#isBackgroundFetch(oldVal)) {
                    oldVal.__abortController.abort(new Error('replaced'));
                    const { __staleWhileFetching: s } = oldVal;
                    if (s !== undefined && !noDisposeOnSet) {
                        if (this.#hasDispose) {
                            this.#dispose?.(s, k, 'set');
                        }
                        if (this.#hasDisposeAfter) {
                            this.#disposed?.push([s, k, 'set']);
                        }
                    }
                }
                else if (!noDisposeOnSet) {
                    if (this.#hasDispose) {
                        this.#dispose?.(oldVal, k, 'set');
                    }
                    if (this.#hasDisposeAfter) {
                        this.#disposed?.push([oldVal, k, 'set']);
                    }
                }
                this.#removeItemSize(index);
                this.#addItemSize(index, size, status);
                this.#valList[index] = v;
                if (status) {
                    status.set = 'replace';
                    const oldValue = oldVal && this.#isBackgroundFetch(oldVal)
                        ? oldVal.__staleWhileFetching
                        : oldVal;
                    if (oldValue !== undefined)
                        status.oldValue = oldValue;
                }
            }
            else if (status) {
                status.set = 'update';
            }
        }
        if (ttl !== 0 && !this.#ttls) {
            this.#initializeTTLTracking();
        }
        if (this.#ttls) {
            if (!noUpdateTTL) {
                this.#setItemTTL(index, ttl, start);
            }
            if (status)
                this.#statusTTL(status, index);
        }
        if (!noDisposeOnSet && this.#hasDisposeAfter && this.#disposed) {
            const dt = this.#disposed;
            let task;
            while ((task = dt?.shift())) {
                this.#disposeAfter?.(...task);
            }
        }
        return this;
    }
    /**
     * Evict the least recently used item, returning its value or
     * `undefined` if cache is empty.
     */
    pop() {
        try {
            while (this.#size) {
                const val = this.#valList[this.#head];
                this.#evict(true);
                if (this.#isBackgroundFetch(val)) {
                    if (val.__staleWhileFetching) {
                        return val.__staleWhileFetching;
                    }
                }
                else if (val !== undefined) {
                    return val;
                }
            }
        }
        finally {
            if (this.#hasDisposeAfter && this.#disposed) {
                const dt = this.#disposed;
                let task;
                while ((task = dt?.shift())) {
                    this.#disposeAfter?.(...task);
                }
            }
        }
    }
    #evict(free) {
        const head = this.#head;
        const k = this.#keyList[head];
        const v = this.#valList[head];
        if (this.#hasFetchMethod && this.#isBackgroundFetch(v)) {
            v.__abortController.abort(new Error('evicted'));
        }
        else if (this.#hasDispose || this.#hasDisposeAfter) {
            if (this.#hasDispose) {
                this.#dispose?.(v, k, 'evict');
            }
            if (this.#hasDisposeAfter) {
                this.#disposed?.push([v, k, 'evict']);
            }
        }
        this.#removeItemSize(head);
        // if we aren't about to use the index, then null these out
        if (free) {
            this.#keyList[head] = undefined;
            this.#valList[head] = undefined;
            this.#free.push(head);
        }
        if (this.#size === 1) {
            this.#head = this.#tail = 0;
            this.#free.length = 0;
        }
        else {
            this.#head = this.#next[head];
        }
        this.#keyMap.delete(k);
        this.#size--;
        return head;
    }
    /**
     * Check if a key is in the cache, without updating the recency of use.
     * Will return false if the item is stale, even though it is technically
     * in the cache.
     *
     * Will not update item age unless
     * {@link LRUCache.OptionsBase.updateAgeOnHas} is set.
     */
    has(k, hasOptions = {}) {
        const { updateAgeOnHas = this.updateAgeOnHas, status } = hasOptions;
        const index = this.#keyMap.get(k);
        if (index !== undefined) {
            const v = this.#valList[index];
            if (this.#isBackgroundFetch(v) &&
                v.__staleWhileFetching === undefined) {
                return false;
            }
            if (!this.#isStale(index)) {
                if (updateAgeOnHas) {
                    this.#updateItemAge(index);
                }
                if (status) {
                    status.has = 'hit';
                    this.#statusTTL(status, index);
                }
                return true;
            }
            else if (status) {
                status.has = 'stale';
                this.#statusTTL(status, index);
            }
        }
        else if (status) {
            status.has = 'miss';
        }
        return false;
    }
    /**
     * Like {@link LRUCache#get} but doesn't update recency or delete stale
     * items.
     *
     * Returns `undefined` if the item is stale, unless
     * {@link LRUCache.OptionsBase.allowStale} is set.
     */
    peek(k, peekOptions = {}) {
        const { allowStale = this.allowStale } = peekOptions;
        const index = this.#keyMap.get(k);
        if (index === undefined ||
            (!allowStale && this.#isStale(index))) {
            return;
        }
        const v = this.#valList[index];
        // either stale and allowed, or forcing a refresh of non-stale value
        return this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
    }
    #backgroundFetch(k, index, options, context) {
        const v = index === undefined ? undefined : this.#valList[index];
        if (this.#isBackgroundFetch(v)) {
            return v;
        }
        const ac = new AC();
        const { signal } = options;
        // when/if our AC signals, then stop listening to theirs.
        signal?.addEventListener('abort', () => ac.abort(signal.reason), {
            signal: ac.signal,
        });
        const fetchOpts = {
            signal: ac.signal,
            options,
            context,
        };
        const cb = (v, updateCache = false) => {
            const { aborted } = ac.signal;
            const ignoreAbort = options.ignoreFetchAbort && v !== undefined;
            if (options.status) {
                if (aborted && !updateCache) {
                    options.status.fetchAborted = true;
                    options.status.fetchError = ac.signal.reason;
                    if (ignoreAbort)
                        options.status.fetchAbortIgnored = true;
                }
                else {
                    options.status.fetchResolved = true;
                }
            }
            if (aborted && !ignoreAbort && !updateCache) {
                return fetchFail(ac.signal.reason);
            }
            // either we didn't abort, and are still here, or we did, and ignored
            const bf = p;
            if (this.#valList[index] === p) {
                if (v === undefined) {
                    if (bf.__staleWhileFetching) {
                        this.#valList[index] = bf.__staleWhileFetching;
                    }
                    else {
                        this.delete(k);
                    }
                }
                else {
                    if (options.status)
                        options.status.fetchUpdated = true;
                    this.set(k, v, fetchOpts.options);
                }
            }
            return v;
        };
        const eb = (er) => {
            if (options.status) {
                options.status.fetchRejected = true;
                options.status.fetchError = er;
            }
            return fetchFail(er);
        };
        const fetchFail = (er) => {
            const { aborted } = ac.signal;
            const allowStaleAborted = aborted && options.allowStaleOnFetchAbort;
            const allowStale = allowStaleAborted || options.allowStaleOnFetchRejection;
            const noDelete = allowStale || options.noDeleteOnFetchRejection;
            const bf = p;
            if (this.#valList[index] === p) {
                // if we allow stale on fetch rejections, then we need to ensure that
                // the stale value is not removed from the cache when the fetch fails.
                const del = !noDelete || bf.__staleWhileFetching === undefined;
                if (del) {
                    this.delete(k);
                }
                else if (!allowStaleAborted) {
                    // still replace the *promise* with the stale value,
                    // since we are done with the promise at this point.
                    // leave it untouched if we're still waiting for an
                    // aborted background fetch that hasn't yet returned.
                    this.#valList[index] = bf.__staleWhileFetching;
                }
            }
            if (allowStale) {
                if (options.status && bf.__staleWhileFetching !== undefined) {
                    options.status.returnedStale = true;
                }
                return bf.__staleWhileFetching;
            }
            else if (bf.__returned === bf) {
                throw er;
            }
        };
        const pcall = (res, rej) => {
            const fmp = this.#fetchMethod?.(k, v, fetchOpts);
            if (fmp && fmp instanceof Promise) {
                fmp.then(v => res(v === undefined ? undefined : v), rej);
            }
            // ignored, we go until we finish, regardless.
            // defer check until we are actually aborting,
            // so fetchMethod can override.
            ac.signal.addEventListener('abort', () => {
                if (!options.ignoreFetchAbort ||
                    options.allowStaleOnFetchAbort) {
                    res(undefined);
                    // when it eventually resolves, update the cache.
                    if (options.allowStaleOnFetchAbort) {
                        res = v => cb(v, true);
                    }
                }
            });
        };
        if (options.status)
            options.status.fetchDispatched = true;
        const p = new Promise(pcall).then(cb, eb);
        const bf = Object.assign(p, {
            __abortController: ac,
            __staleWhileFetching: v,
            __returned: undefined,
        });
        if (index === undefined) {
            // internal, don't expose status.
            this.set(k, bf, { ...fetchOpts.options, status: undefined });
            index = this.#keyMap.get(k);
        }
        else {
            this.#valList[index] = bf;
        }
        return bf;
    }
    #isBackgroundFetch(p) {
        if (!this.#hasFetchMethod)
            return false;
        const b = p;
        return (!!b &&
            b instanceof Promise &&
            b.hasOwnProperty('__staleWhileFetching') &&
            b.__abortController instanceof AC);
    }
    async fetch(k, fetchOptions = {}) {
        const { 
        // get options
        allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, 
        // set options
        ttl = this.ttl, noDisposeOnSet = this.noDisposeOnSet, size = 0, sizeCalculation = this.sizeCalculation, noUpdateTTL = this.noUpdateTTL, 
        // fetch exclusive options
        noDeleteOnFetchRejection = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection = this.allowStaleOnFetchRejection, ignoreFetchAbort = this.ignoreFetchAbort, allowStaleOnFetchAbort = this.allowStaleOnFetchAbort, context, forceRefresh = false, status, signal, } = fetchOptions;
        if (!this.#hasFetchMethod) {
            if (status)
                status.fetch = 'get';
            return this.get(k, {
                allowStale,
                updateAgeOnGet,
                noDeleteOnStaleGet,
                status,
            });
        }
        const options = {
            allowStale,
            updateAgeOnGet,
            noDeleteOnStaleGet,
            ttl,
            noDisposeOnSet,
            size,
            sizeCalculation,
            noUpdateTTL,
            noDeleteOnFetchRejection,
            allowStaleOnFetchRejection,
            allowStaleOnFetchAbort,
            ignoreFetchAbort,
            status,
            signal,
        };
        let index = this.#keyMap.get(k);
        if (index === undefined) {
            if (status)
                status.fetch = 'miss';
            const p = this.#backgroundFetch(k, index, options, context);
            return (p.__returned = p);
        }
        else {
            // in cache, maybe already fetching
            const v = this.#valList[index];
            if (this.#isBackgroundFetch(v)) {
                const stale = allowStale && v.__staleWhileFetching !== undefined;
                if (status) {
                    status.fetch = 'inflight';
                    if (stale)
                        status.returnedStale = true;
                }
                return stale ? v.__staleWhileFetching : (v.__returned = v);
            }
            // if we force a refresh, that means do NOT serve the cached value,
            // unless we are already in the process of refreshing the cache.
            const isStale = this.#isStale(index);
            if (!forceRefresh && !isStale) {
                if (status)
                    status.fetch = 'hit';
                this.#moveToTail(index);
                if (updateAgeOnGet) {
                    this.#updateItemAge(index);
                }
                if (status)
                    this.#statusTTL(status, index);
                return v;
            }
            // ok, it is stale or a forced refresh, and not already fetching.
            // refresh the cache.
            const p = this.#backgroundFetch(k, index, options, context);
            const hasStale = p.__staleWhileFetching !== undefined;
            const staleVal = hasStale && allowStale;
            if (status) {
                status.fetch = isStale ? 'stale' : 'refresh';
                if (staleVal && isStale)
                    status.returnedStale = true;
            }
            return staleVal ? p.__staleWhileFetching : (p.__returned = p);
        }
    }
    /**
     * Return a value from the cache. Will update the recency of the cache
     * entry found.
     *
     * If the key is not found, get() will return `undefined`.
     */
    get(k, getOptions = {}) {
        const { allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, status, } = getOptions;
        const index = this.#keyMap.get(k);
        if (index !== undefined) {
            const value = this.#valList[index];
            const fetching = this.#isBackgroundFetch(value);
            if (status)
                this.#statusTTL(status, index);
            if (this.#isStale(index)) {
                if (status)
                    status.get = 'stale';
                // delete only if not an in-flight background fetch
                if (!fetching) {
                    if (!noDeleteOnStaleGet) {
                        this.delete(k);
                    }
                    if (status && allowStale)
                        status.returnedStale = true;
                    return allowStale ? value : undefined;
                }
                else {
                    if (status &&
                        allowStale &&
                        value.__staleWhileFetching !== undefined) {
                        status.returnedStale = true;
                    }
                    return allowStale ? value.__staleWhileFetching : undefined;
                }
            }
            else {
                if (status)
                    status.get = 'hit';
                // if we're currently fetching it, we don't actually have it yet
                // it's not stale, which means this isn't a staleWhileRefetching.
                // If it's not stale, and fetching, AND has a __staleWhileFetching
                // value, then that means the user fetched with {forceRefresh:true},
                // so it's safe to return that value.
                if (fetching) {
                    return value.__staleWhileFetching;
                }
                this.#moveToTail(index);
                if (updateAgeOnGet) {
                    this.#updateItemAge(index);
                }
                return value;
            }
        }
        else if (status) {
            status.get = 'miss';
        }
    }
    #connect(p, n) {
        this.#prev[n] = p;
        this.#next[p] = n;
    }
    #moveToTail(index) {
        // if tail already, nothing to do
        // if head, move head to next[index]
        // else
        //   move next[prev[index]] to next[index] (head has no prev)
        //   move prev[next[index]] to prev[index]
        // prev[index] = tail
        // next[tail] = index
        // tail = index
        if (index !== this.#tail) {
            if (index === this.#head) {
                this.#head = this.#next[index];
            }
            else {
                this.#connect(this.#prev[index], this.#next[index]);
            }
            this.#connect(this.#tail, index);
            this.#tail = index;
        }
    }
    /**
     * Deletes a key out of the cache.
     * Returns true if the key was deleted, false otherwise.
     */
    delete(k) {
        let deleted = false;
        if (this.#size !== 0) {
            const index = this.#keyMap.get(k);
            if (index !== undefined) {
                deleted = true;
                if (this.#size === 1) {
                    this.clear();
                }
                else {
                    this.#removeItemSize(index);
                    const v = this.#valList[index];
                    if (this.#isBackgroundFetch(v)) {
                        v.__abortController.abort(new Error('deleted'));
                    }
                    else if (this.#hasDispose || this.#hasDisposeAfter) {
                        if (this.#hasDispose) {
                            this.#dispose?.(v, k, 'delete');
                        }
                        if (this.#hasDisposeAfter) {
                            this.#disposed?.push([v, k, 'delete']);
                        }
                    }
                    this.#keyMap.delete(k);
                    this.#keyList[index] = undefined;
                    this.#valList[index] = undefined;
                    if (index === this.#tail) {
                        this.#tail = this.#prev[index];
                    }
                    else if (index === this.#head) {
                        this.#head = this.#next[index];
                    }
                    else {
                        const pi = this.#prev[index];
                        this.#next[pi] = this.#next[index];
                        const ni = this.#next[index];
                        this.#prev[ni] = this.#prev[index];
                    }
                    this.#size--;
                    this.#free.push(index);
                }
            }
        }
        if (this.#hasDisposeAfter && this.#disposed?.length) {
            const dt = this.#disposed;
            let task;
            while ((task = dt?.shift())) {
                this.#disposeAfter?.(...task);
            }
        }
        return deleted;
    }
    /**
     * Clear the cache entirely, throwing away all values.
     */
    clear() {
        for (const index of this.#rindexes({ allowStale: true })) {
            const v = this.#valList[index];
            if (this.#isBackgroundFetch(v)) {
                v.__abortController.abort(new Error('deleted'));
            }
            else {
                const k = this.#keyList[index];
                if (this.#hasDispose) {
                    this.#dispose?.(v, k, 'delete');
                }
                if (this.#hasDisposeAfter) {
                    this.#disposed?.push([v, k, 'delete']);
                }
            }
        }
        this.#keyMap.clear();
        this.#valList.fill(undefined);
        this.#keyList.fill(undefined);
        if (this.#ttls && this.#starts) {
            this.#ttls.fill(0);
            this.#starts.fill(0);
        }
        if (this.#sizes) {
            this.#sizes.fill(0);
        }
        this.#head = 0;
        this.#tail = 0;
        this.#free.length = 0;
        this.#calculatedSize = 0;
        this.#size = 0;
        if (this.#hasDisposeAfter && this.#disposed) {
            const dt = this.#disposed;
            let task;
            while ((task = dt?.shift())) {
                this.#disposeAfter?.(...task);
            }
        }
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./public/app/plugins/datasource/loki/plugin.json":
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"type":"datasource","name":"Loki","id":"loki","category":"logging","logs":true,"metrics":true,"alerting":true,"annotations":true,"streaming":true,"backend":true,"queryOptions":{"maxDataPoints":true},"info":{"description":"Like Prometheus but for logs. OSS logging solution from Grafana Labs","author":{"name":"Grafana Labs","url":"https://grafana.com"},"logos":{"small":"img/loki_icon.svg","large":"img/loki_icon.svg"},"links":[{"name":"Learn more","url":"https://grafana.com/loki"},{"name":"GitHub Project","url":"https://github.com/grafana/loki"}]}}');

/***/ })

}]);
//# sourceMappingURL=lokiPlugin.009c2adca0fa31b1ed18.js.map
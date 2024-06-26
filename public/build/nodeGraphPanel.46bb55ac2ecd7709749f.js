"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["nodeGraphPanel"],{

/***/ "./public/app/plugins/panel/nodeGraph/Edge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Edge: () => (/* binding */ Edge),
/* harmony export */   defaultEdgeColor: () => (/* binding */ defaultEdgeColor),
/* harmony export */   defaultHighlightedEdgeColor: () => (/* binding */ defaultHighlightedEdgeColor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EdgeArrowMarker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/EdgeArrowMarker.tsx");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/Node.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/utils.ts");





const defaultHighlightedEdgeColor = "#a00";
const defaultEdgeColor = "#999";
const Edge = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function Edge2(props) {
  const { edge, onClick, onMouseEnter, onMouseLeave, hovering, svgIdNamespace } = props;
  const { source, target, sourceNodeRadius, targetNodeRadius } = edge;
  const arrowHeadHeight = 10 + edge.thickness * 2;
  const line = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.shortenLine)(
    {
      x1: source.x,
      y1: source.y,
      x2: target.x,
      y2: target.y
    },
    sourceNodeRadius + (0,_Node__WEBPACK_IMPORTED_MODULE_2__.computeNodeCircumferenceStrokeWidth)(sourceNodeRadius) / 2 || _Node__WEBPACK_IMPORTED_MODULE_2__.nodeR,
    targetNodeRadius + (0,_Node__WEBPACK_IMPORTED_MODULE_2__.computeNodeCircumferenceStrokeWidth)(targetNodeRadius) / 2 || _Node__WEBPACK_IMPORTED_MODULE_2__.nodeR,
    arrowHeadHeight
  );
  const edgeColor = edge.color || defaultEdgeColor;
  const highlightedEdgeColor = edge.color || defaultHighlightedEdgeColor;
  const markerId = "triangle-".concat(svgIdNamespace, "-").concat(edge.id);
  const coloredMarkerId = "triangle-colored-".concat(svgIdNamespace, "-").concat(edge.id);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EdgeArrowMarker__WEBPACK_IMPORTED_MODULE_1__.EdgeArrowMarker, { id: markerId, fill: edgeColor, headHeight: arrowHeadHeight }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EdgeArrowMarker__WEBPACK_IMPORTED_MODULE_1__.EdgeArrowMarker, { id: coloredMarkerId, fill: highlightedEdgeColor, headHeight: arrowHeadHeight }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    "g",
    {
      onClick: (event) => onClick(event, edge),
      style: { cursor: "pointer" },
      "aria-label": "Edge from: ".concat(source.id, " to: ").concat(target.id)
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      "line",
      {
        strokeWidth: (hovering ? 1 : 0) + (edge.highlighted ? 1 : 0) + edge.thickness,
        stroke: edge.highlighted ? highlightedEdgeColor : edgeColor,
        x1: line.x1,
        y1: line.y1,
        x2: line.x2,
        y2: line.y2,
        strokeDasharray: edge.strokeDasharray,
        markerEnd: "url(#".concat(edge.highlighted ? coloredMarkerId : markerId, ")")
      }
    ),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      "line",
      {
        stroke: "transparent",
        x1: line.x1,
        y1: line.y1,
        x2: line.x2,
        y2: line.y2,
        strokeWidth: 20,
        onMouseEnter: () => {
          onMouseEnter(edge.id);
        },
        onMouseLeave: () => {
          onMouseLeave(edge.id);
        }
      }
    )
  ));
});


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/EdgeArrowMarker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EdgeArrowMarker: () => (/* binding */ EdgeArrowMarker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Edge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/Edge.tsx");



function EdgeArrowMarker({
  id = "triangle",
  fill = _Edge__WEBPACK_IMPORTED_MODULE_1__.defaultEdgeColor,
  headHeight = 10
}) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    "marker",
    {
      id,
      viewBox: "0 0 10 10",
      refX: "1",
      refY: "5",
      markerUnits: "userSpaceOnUse",
      markerWidth: headHeight,
      markerHeight: headHeight,
      orient: "auto"
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M 0 0 L 10 5 L 0 10 z", fill })
  ));
}


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/EdgeLabel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EdgeLabel: () => (/* binding */ EdgeLabel)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/Node.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/utils.ts");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b, _c;





const getStyles = (theme) => {
  return {
    mainGroup: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n      pointer-events: none;\n      font-size: 8px;\n    "]))),
    background: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_b || (_b = __template(["\n      fill: ", ";\n    "])), theme.components.tooltip.background),
    text: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_c || (_c = __template(["\n      fill: ", ";\n    "])), theme.components.tooltip.text)
  };
};
const EdgeLabel = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function EdgeLabel2(props) {
  const { edge } = props;
  const { source, target, sourceNodeRadius, targetNodeRadius } = edge;
  const line = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.shortenLine)(
    {
      x1: source.x,
      y1: source.y,
      x2: target.x,
      y2: target.y
    },
    sourceNodeRadius || _Node__WEBPACK_IMPORTED_MODULE_2__.nodeR,
    targetNodeRadius || _Node__WEBPACK_IMPORTED_MODULE_2__.nodeR
  );
  const middle = {
    x: line.x1 + (line.x2 - line.x1) / 2,
    y: line.y1 + (line.y2 - line.y1) / 2
  };
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const stats = [edge.mainStat, edge.secondaryStat].filter((x) => x);
  const height = stats.length > 1 ? "30" : "15";
  const middleOffset = stats.length > 1 ? 15 : 7.5;
  let offset = stats.length > 1 ? -5 : 2.5;
  const contents = [];
  stats.forEach((stat, index) => {
    contents.push(
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("text", { key: index, className: styles.text, x: middle.x, y: middle.y + offset, textAnchor: "middle" }, stat)
    );
    offset += 15;
  });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("g", { className: styles.mainGroup }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    "rect",
    {
      className: styles.background,
      x: middle.x - 40,
      y: middle.y - middleOffset,
      width: "80",
      height,
      rx: "5"
    }
  ), contents);
});


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/Legend.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Legend: () => (/* binding */ Legend)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/VizLegend/VizLegend.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/VizLegend/VizLegendListItem.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;





function getStyles() {
  return {
    item: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n      label: LegendItem;\n      flex-grow: 0;\n    "]))),
    legend: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_b || (_b = __template(["\n      label: Legend;\n      pointer-events: all;\n    "])))
  };
}
const Legend = function Legend2(props) {
  const { nodes, onSort, sort, sortable } = props;
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const colorItems = getColorLegendItems(nodes, theme);
  const onClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (item) => {
      onSort({
        field: item.data.field,
        ascending: item.data.field === (sort == null ? void 0 : sort.field) ? !(sort == null ? void 0 : sort.ascending) : false
      });
    },
    [sort, onSort]
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.VizLegend,
    {
      className: styles.legend,
      displayMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.LegendDisplayMode.List,
      placement: "bottom",
      items: colorItems,
      itemRenderer: (item) => {
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.VizLegendListItem, { item, className: styles.item, onLabelClick: sortable ? onClick : void 0 }), sortable && ((sort == null ? void 0 : sort.field) === item.data.field ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon, { name: sort.ascending ? "arrow-up" : "arrow-down" }) : ""));
      }
    }
  );
};
function getColorLegendItems(nodes, theme) {
  var _a2, _b2;
  if (!nodes.length) {
    return [];
  }
  const fields = [nodes[0].mainStat, nodes[0].secondaryStat].filter(
    (item) => Boolean(item)
  );
  const node = nodes.find((n) => n.arcSections.length > 0);
  if (node) {
    if (((_b2 = (_a2 = node.arcSections[0].config) == null ? void 0 : _a2.color) == null ? void 0 : _b2.mode) === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldColorModeId.Fixed) {
      fields.push(...new Set(nodes.map((n) => n.arcSections).flat()));
    }
  }
  if (nodes[0].color) {
    fields.push(nodes[0].color);
  }
  return fields.map((f) => {
    var _a3, _b3, _c, _d, _e;
    const item = {
      label: f.config.displayName || f.name,
      yAxis: 0,
      data: { field: f }
    };
    if (((_a3 = f.config.color) == null ? void 0 : _a3.mode) === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldColorModeId.Fixed && ((_b3 = f.config.color) == null ? void 0 : _b3.fixedColor)) {
      item.color = theme.visualization.getColorByName(((_c = f.config.color) == null ? void 0 : _c.fixedColor) || "");
    } else if ((_d = f.config.color) == null ? void 0 : _d.mode) {
      item.gradient = (_e = f.config.color) == null ? void 0 : _e.mode;
    }
    if (!(item.color || item.gradient)) {
      item.color = theme.visualization.getColorByName("");
    }
    return item;
  });
}


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/Marker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Marker: () => (/* binding */ Marker)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b, _c;



const nodeR = 40;
const getStyles = (theme) => ({
  mainGroup: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n    cursor: pointer;\n    font-size: 10px;\n  "]))),
  mainCircle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_b || (_b = __template(["\n    fill: ", ";\n    stroke: ", ";\n  "])), theme.components.panel.background, theme.colors.border.strong),
  text: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_c || (_c = __template(["\n    width: 50px;\n    height: 50px;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  "])))
});
const Marker = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function Marker2(props) {
  const { marker, onClick } = props;
  const { node } = marker;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  if (!(node.x !== void 0 && node.y !== void 0)) {
    return null;
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    "g",
    {
      "data-node-id": node.id,
      className: styles.mainGroup,
      onClick: (event) => {
        onClick == null ? void 0 : onClick(event, marker);
      },
      "aria-label": "Hidden nodes marker: ".concat(node.id)
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("circle", { className: styles.mainCircle, r: nodeR, cx: node.x, cy: node.y }),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("g", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("foreignObject", { x: node.x - 25, y: node.y - 25, width: "50", height: "50" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.text }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, marker.count > 100 ? ">100" : marker.count, " nodes"))))
  );
});


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/Node.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: () => (/* binding */ Node),
/* harmony export */   computeNodeCircumferenceStrokeWidth: () => (/* binding */ computeNodeCircumferenceStrokeWidth),
/* harmony export */   highlightedNodeColor: () => (/* binding */ highlightedNodeColor),
/* harmony export */   nodeR: () => (/* binding */ nodeR)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/tinycolor2/esm/tinycolor.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/field/fieldColor.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/utils.ts");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b, _c, _d, _e, _f, _g, _h, _i;







const nodeR = 40;
const highlightedNodeColor = "#a00";
const getStyles = (theme, hovering) => ({
  mainGroup: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n    cursor: pointer;\n    font-size: 10px;\n    transition: opacity 300ms;\n    opacity: ", ";\n  "])), hovering === "inactive" ? 0.5 : 1),
  mainCircle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_b || (_b = __template(["\n    fill: ", ";\n  "])), theme.components.panel.background),
  filledCircle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_c || (_c = __template(["\n    fill: ", ";\n  "])), highlightedNodeColor),
  hoverCircle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_d || (_d = __template(["\n    opacity: 0.5;\n    fill: transparent;\n    stroke: ", ";\n  "])), theme.colors.primary.text),
  text: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_e || (_e = __template(["\n    fill: ", ";\n    pointer-events: none;\n  "])), theme.colors.text.primary),
  titleText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_f || (_f = __template(["\n    text-align: center;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    background-color: ", ";\n    width: 140px;\n  "])), (0,tinycolor2__WEBPACK_IMPORTED_MODULE_3__["default"])(theme.colors.background.primary).setAlpha(0.6).toHex8String()),
  statsText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_g || (_g = __template(["\n    text-align: center;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    width: 70px;\n  "]))),
  textHovering: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_h || (_h = __template(["\n    width: 200px;\n    & span {\n      background-color: ", ";\n    }\n  "])), (0,tinycolor2__WEBPACK_IMPORTED_MODULE_3__["default"])(theme.colors.background.primary).setAlpha(0.8).toHex8String()),
  clickTarget: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_i || (_i = __template(["\n    fill: none;\n    stroke: none;\n    pointer-events: fill;\n  "])))
});
const computeNodeCircumferenceStrokeWidth = (nodeRadius) => Math.ceil(nodeRadius * 0.075);
const Node = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function Node2(props) {
  var _a2;
  const { node, onMouseEnter, onMouseLeave, onClick, hovering } = props;
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useTheme2)();
  const styles = getStyles(theme, hovering);
  const isHovered = hovering === "active";
  const nodeRadius = ((_a2 = node.nodeRadius) == null ? void 0 : _a2.values[node.dataFrameRowIndex]) || nodeR;
  const strokeWidth = computeNodeCircumferenceStrokeWidth(nodeRadius);
  if (!(node.x !== void 0 && node.y !== void 0)) {
    return null;
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("g", { "data-node-id": node.id, className: styles.mainGroup, "aria-label": "Node: ".concat(node.title) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
    "circle",
    {
      "data-testid": "node-circle-".concat(node.id),
      className: node.highlighted ? styles.filledCircle : styles.mainCircle,
      r: nodeRadius,
      cx: node.x,
      cy: node.y
    }
  ), isHovered && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("circle", { className: styles.hoverCircle, r: nodeRadius - 3, cx: node.x, cy: node.y, strokeWidth }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ColorCircle, { node }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("g", { className: styles.text, style: { pointerEvents: "none" } }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(NodeContents, { node, hovering }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
    "foreignObject",
    {
      x: node.x - (isHovered ? 100 : 70),
      y: node.y + nodeRadius + 5,
      width: isHovered ? "200" : "140",
      height: "40"
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(styles.titleText, isHovered && styles.textHovering) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, node.title), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, node.subTitle))
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
    "rect",
    {
      "data-testid": "node-click-rect-".concat(node.id),
      onMouseEnter: () => {
        onMouseEnter(node.id);
      },
      onMouseLeave: () => {
        onMouseLeave(node.id);
      },
      onClick: (event) => {
        onClick(event, node);
      },
      className: styles.clickTarget,
      x: node.x - nodeRadius - 5,
      y: node.y - nodeRadius - 5,
      width: nodeRadius * 2 + 10,
      height: nodeRadius * 2 + 50
    }
  ));
});
function NodeContents({ node, hovering }) {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useTheme2)();
  const styles = getStyles(theme, hovering);
  const isHovered = hovering === "active";
  if (!(node.x !== void 0 && node.y !== void 0)) {
    return null;
  }
  return node.icon ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("foreignObject", { x: node.x - 35, y: node.y - 20, width: "70", height: "40" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { style: { width: 70, overflow: "hidden", display: "flex", justifyContent: "center", marginTop: -4 } }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon, { "data-testid": "node-icon-".concat(node.icon), name: node.icon, size: "xxxl" }))) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("foreignObject", { x: node.x - (isHovered ? 100 : 35), y: node.y - 15, width: isHovered ? "200" : "70", height: "40" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(styles.statsText, isHovered && styles.textHovering) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, node.mainStat && (0,_utils__WEBPACK_IMPORTED_MODULE_4__.statToString)(node.mainStat.config, node.mainStat.values[node.dataFrameRowIndex])), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, node.secondaryStat && (0,_utils__WEBPACK_IMPORTED_MODULE_4__.statToString)(node.secondaryStat.config, node.secondaryStat.values[node.dataFrameRowIndex]))));
}
function ColorCircle(props) {
  var _a2, _b2;
  const { node } = props;
  const fullStat = node.arcSections.find((s) => s.values[node.dataFrameRowIndex] >= 1);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useTheme2)();
  const nodeRadius = ((_a2 = node.nodeRadius) == null ? void 0 : _a2.values[node.dataFrameRowIndex]) || nodeR;
  const strokeWidth = computeNodeCircumferenceStrokeWidth(nodeRadius);
  if (fullStat) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      "circle",
      {
        fill: "none",
        stroke: theme.visualization.getColorByName(((_b2 = fullStat.config.color) == null ? void 0 : _b2.fixedColor) || ""),
        strokeWidth,
        r: nodeRadius,
        cx: node.x,
        cy: node.y
      }
    );
  }
  const nonZero = node.arcSections.filter((s) => s.values[node.dataFrameRowIndex] !== 0);
  if (nonZero.length === 0) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      "circle",
      {
        fill: "none",
        stroke: node.color ? getColor(node.color, node.dataFrameRowIndex, theme) : "gray",
        strokeWidth,
        r: nodeRadius,
        cx: node.x,
        cy: node.y
      }
    );
  }
  const { elements } = nonZero.reduce(
    (acc, section, index) => {
      var _a3;
      const color = ((_a3 = section.config.color) == null ? void 0 : _a3.fixedColor) || "";
      const value = section.values[node.dataFrameRowIndex];
      const el = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
        ArcSection,
        {
          key: index,
          r: nodeRadius,
          x: node.x,
          y: node.y,
          startPercent: acc.percent,
          percent: value + acc.percent > 1 ? (
            // If the values aren't correct and add up to more than 100% lets still render correctly the amounts we
            // already have and cap it at 100%
            1 - acc.percent
          ) : value,
          color: theme.visualization.getColorByName(color),
          strokeWidth
        }
      );
      acc.elements.push(el);
      acc.percent = acc.percent + value;
      return acc;
    },
    { elements: [], percent: 0 }
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, elements);
}
function ArcSection({
  r,
  x,
  y,
  startPercent,
  percent,
  color,
  strokeWidth = 2
}) {
  const endPercent = startPercent + percent;
  const startXPos = x + Math.sin(2 * Math.PI * startPercent) * r;
  const startYPos = y - Math.cos(2 * Math.PI * startPercent) * r;
  const endXPos = x + Math.sin(2 * Math.PI * endPercent) * r;
  const endYPos = y - Math.cos(2 * Math.PI * endPercent) * r;
  const largeArc = percent > 0.5 ? "1" : "0";
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
    "path",
    {
      fill: "none",
      d: "M ".concat(startXPos, " ").concat(startYPos, " A ").concat(r, " ").concat(r, " 0 ").concat(largeArc, " 1 ").concat(endXPos, " ").concat(endYPos),
      stroke: color,
      strokeWidth
    }
  );
}
function getColor(field, index, theme) {
  if (!field.config.color) {
    return field.values[index];
  }
  return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.getFieldColorModeForField)(field).getCalculator(field, theme)(0, field.values[index]);
}


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/NodeGraph.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeGraph: () => (/* binding */ NodeGraph)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use_lib_useMeasure__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./node_modules/react-use/lib/useMeasure.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _Edge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/Edge.tsx");
/* harmony import */ var _EdgeLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/EdgeLabel.tsx");
/* harmony import */ var _Legend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/Legend.tsx");
/* harmony import */ var _Marker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/Marker.tsx");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/Node.tsx");
/* harmony import */ var _ViewControls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/ViewControls.tsx");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/layout.ts");
/* harmony import */ var _useCategorizeFrames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/useCategorizeFrames.ts");
/* harmony import */ var _useContextMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/useContextMenu.tsx");
/* harmony import */ var _useFocusPositionOnLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/useFocusPositionOnLayout.ts");
/* harmony import */ var _useHighlight__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/useHighlight.ts");
/* harmony import */ var _usePanning__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/usePanning.ts");
/* harmony import */ var _useZoom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/useZoom.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/utils.ts");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;



















const getStyles = (theme) => ({
  wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n    label: wrapper;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    position: relative;\n  "]))),
  svg: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_b || (_b = __template(["\n    label: svg;\n    height: 100%;\n    width: 100%;\n    overflow: visible;\n    font-size: 10px;\n    cursor: move;\n  "]))),
  svgPanning: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_c || (_c = __template(["\n    label: svgPanning;\n    user-select: none;\n  "]))),
  noDataMsg: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_d || (_d = __template(["\n    height: 100%;\n    width: 100%;\n    display: grid;\n    place-items: center;\n    font-size: ", ";\n    color: ", ";\n  "])), theme.typography.h4.fontSize, theme.colors.text.secondary),
  mainGroup: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_e || (_e = __template(["\n    label: mainGroup;\n    will-change: transform;\n  "]))),
  viewControls: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_f || (_f = __template(["\n    label: viewControls;\n    position: absolute;\n    left: 2px;\n    bottom: 3px;\n    right: 0;\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-between;\n    pointer-events: none;\n  "]))),
  legend: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_g || (_g = __template(["\n    label: legend;\n    background: ", ";\n    box-shadow: ", ";\n    padding-bottom: 5px;\n    margin-right: 10px;\n  "])), theme.colors.background.secondary, theme.shadows.z1),
  viewControlsWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_h || (_h = __template(["\n    margin-left: auto;\n  "]))),
  alert: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_i || (_i = __template(["\n    label: alert;\n    padding: 5px 8px;\n    font-size: 10px;\n    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);\n    border-radius: ", ";\n    align-items: center;\n    position: absolute;\n    top: 0;\n    right: 0;\n    background: ", ";\n    color: ", ";\n  "])), theme.shape.radius.default, theme.colors.warning.main, theme.colors.warning.contrastText),
  loadingWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_j || (_j = __template(["\n    label: loadingWrapper;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  "])))
});
const defaultNodeCountLimit = 200;
function NodeGraph({ getLinks, dataFrames, nodeLimit, panelId }) {
  const nodeCountLimit = nodeLimit || defaultNodeCountLimit;
  const { edges: edgesDataFrames, nodes: nodesDataFrames } = (0,_useCategorizeFrames__WEBPACK_IMPORTED_MODULE_10__.useCategorizeFrames)(dataFrames);
  const [measureRef, { width, height }] = (0,react_use_lib_useMeasure__WEBPACK_IMPORTED_MODULE_17__["default"])();
  const [config, setConfig] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_layout__WEBPACK_IMPORTED_MODULE_9__.defaultConfig);
  const firstNodesDataFrame = nodesDataFrames[0];
  const firstEdgesDataFrame = edgesDataFrames[0];
  const svgIdNamespace = panelId || "nodegraphpanel";
  const processed = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => (0,_utils__WEBPACK_IMPORTED_MODULE_16__.processNodes)(firstNodesDataFrame, firstEdgesDataFrame),
    [firstEdgesDataFrame, firstNodesDataFrame]
  );
  const { nodeHover, setNodeHover, clearNodeHover, edgeHover, setEdgeHover, clearEdgeHover } = useHover();
  const [hoveringIds, setHoveringIds] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    let linked = [];
    if (nodeHover) {
      linked = (0,_utils__WEBPACK_IMPORTED_MODULE_16__.findConnectedNodesForNode)(processed.nodes, processed.edges, nodeHover);
    } else if (edgeHover) {
      linked = (0,_utils__WEBPACK_IMPORTED_MODULE_16__.findConnectedNodesForEdge)(processed.nodes, processed.edges, edgeHover);
    }
    setHoveringIds(linked);
  }, [nodeHover, edgeHover, processed]);
  const [focusedNodeId, setFocusedNodeId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const setFocused = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((e, m) => setFocusedNodeId(m.node.id), [setFocusedNodeId]);
  const { nodes, edges, markers, bounds, hiddenNodesCount, loading } = (0,_layout__WEBPACK_IMPORTED_MODULE_9__.useLayout)(
    processed.nodes,
    processed.edges,
    config,
    nodeCountLimit,
    width,
    focusedNodeId,
    processed.hasFixedPositions
  );
  const focusPosition = (0,_useFocusPositionOnLayout__WEBPACK_IMPORTED_MODULE_12__.useFocusPositionOnLayout)(config, nodes, focusedNodeId);
  const { panRef, zoomRef, onStepUp, onStepDown, isPanning, position, scale, isMaxZoom, isMinZoom } = usePanAndZoom(
    bounds,
    focusPosition
  );
  const { onEdgeOpen, onNodeOpen, MenuComponent } = (0,_useContextMenu__WEBPACK_IMPORTED_MODULE_11__.useContextMenu)(
    getLinks,
    firstNodesDataFrame,
    firstEdgesDataFrame,
    config,
    setConfig,
    setFocusedNodeId
  );
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.useStyles2)(getStyles);
  const topLevelRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (r) => {
      measureRef(r);
      zoomRef.current = r;
    },
    [measureRef, zoomRef]
  );
  const highlightId = (0,_useHighlight__WEBPACK_IMPORTED_MODULE_13__.useHighlight)(focusedNodeId);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { ref: topLevelRef, className: styles.wrapper }, loading ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: styles.loadingWrapper }, "Computing layout\xA0", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_19__.Spinner, null)) : null, dataFrames.length && processed.nodes.length ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
    "svg",
    {
      ref: panRef,
      viewBox: "".concat(-(width / 2), " ").concat(-(height / 2), " ").concat(width, " ").concat(height),
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(styles.svg, isPanning && styles.svgPanning)
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      "g",
      {
        className: styles.mainGroup,
        style: { transform: "scale(".concat(scale, ") translate(").concat(Math.floor(position.x), "px, ").concat(Math.floor(position.y), "px)") }
      },
      !config.gridLayout && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
        Edges,
        {
          edges,
          nodeHoveringId: nodeHover,
          edgeHoveringId: edgeHover,
          onClick: onEdgeOpen,
          onMouseEnter: setEdgeHover,
          onMouseLeave: clearEdgeHover,
          svgIdNamespace
        }
      ),
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
        Nodes,
        {
          nodes,
          onMouseEnter: setNodeHover,
          onMouseLeave: clearNodeHover,
          onClick: onNodeOpen,
          hoveringIds: hoveringIds || [highlightId]
        }
      ),
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Markers, { markers: markers || [], onClick: setFocused }),
      !config.gridLayout && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(EdgeLabels, { edges, nodeHoveringId: nodeHover, edgeHoveringId: edgeHover })
    )
  ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: styles.noDataMsg }, "No data"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: styles.viewControls }, nodes.length ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: styles.legend }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
    _Legend__WEBPACK_IMPORTED_MODULE_5__.Legend,
    {
      sortable: config.gridLayout,
      nodes,
      sort: config.sort,
      onSort: (sort) => {
        setConfig({
          ...config,
          sort
        });
      }
    }
  )) : null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: styles.viewControlsWrapper }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
    _ViewControls__WEBPACK_IMPORTED_MODULE_8__.ViewControls,
    {
      config,
      onConfigChange: (cfg) => {
        if (cfg.gridLayout !== config.gridLayout) {
          setFocusedNodeId(void 0);
        }
        setConfig(cfg);
      },
      onMinus: onStepDown,
      onPlus: onStepUp,
      scale,
      disableZoomIn: isMaxZoom,
      disableZoomOut: isMinZoom
    }
  ))), hiddenNodesCount > 0 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: styles.alert, "aria-label": "Nodes hidden warning" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_20__.Icon, { size: "sm", name: "info-circle" }), " ", hiddenNodesCount, " nodes are hidden for performance reasons."), MenuComponent);
}
const Nodes = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function Nodes2(props) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, props.nodes.map((n) => {
    var _a2;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      _Node__WEBPACK_IMPORTED_MODULE_7__.Node,
      {
        key: n.id,
        node: n,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        onClick: props.onClick,
        hovering: !props.hoveringIds || props.hoveringIds.length === 0 ? "default" : ((_a2 = props.hoveringIds) == null ? void 0 : _a2.includes(n.id)) ? "active" : "inactive"
      }
    );
  }));
});
const Markers = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function Nodes3(props) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, props.markers.map((m) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Marker__WEBPACK_IMPORTED_MODULE_6__.Marker, { key: "marker-" + m.node.id, marker: m, onClick: props.onClick })));
});
const Edges = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function Edges2(props) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, props.edges.map((e) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
    _Edge__WEBPACK_IMPORTED_MODULE_3__.Edge,
    {
      key: e.id,
      edge: e,
      hovering: e.source.id === props.nodeHoveringId || e.target.id === props.nodeHoveringId || props.edgeHoveringId === e.id,
      onClick: props.onClick,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave,
      svgIdNamespace: props.svgIdNamespace
    }
  )));
});
const EdgeLabels = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function EdgeLabels2(props) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, props.edges.map((e, index) => {
    const shouldShow = e.source.id === props.nodeHoveringId || e.target.id === props.nodeHoveringId || props.edgeHoveringId === e.id;
    const hasStats = e.mainStat || e.secondaryStat;
    return shouldShow && hasStats && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_EdgeLabel__WEBPACK_IMPORTED_MODULE_4__.EdgeLabel, { key: e.id, edge: e });
  }));
});
function usePanAndZoom(bounds, focus) {
  const { scale, onStepDown, onStepUp, ref, isMax, isMin } = (0,_useZoom__WEBPACK_IMPORTED_MODULE_15__.useZoom)();
  const { state: panningState, ref: panRef } = (0,_usePanning__WEBPACK_IMPORTED_MODULE_14__.usePanning)({
    scale,
    bounds,
    focus
  });
  const { position, isPanning } = panningState;
  return { zoomRef: ref, panRef, position, isPanning, scale, onStepDown, onStepUp, isMaxZoom: isMax, isMinZoom: isMin };
}
function useHover() {
  const [nodeHover, setNodeHover] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(void 0);
  const clearNodeHover = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => setNodeHover(void 0), [setNodeHover]);
  const [edgeHover, setEdgeHover] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(void 0);
  const clearEdgeHover = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => setEdgeHover(void 0), [setEdgeHover]);
  return { nodeHover, setNodeHover, clearNodeHover, edgeHover, setEdgeHover, clearEdgeHover };
}


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/NodeGraphPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeGraphPanel: () => (/* binding */ NodeGraphPanel)
/* harmony export */ });
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_explore_utils_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/explore/utils/links.ts");
/* harmony import */ var _NodeGraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/NodeGraph.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/utils.ts");






const NodeGraphPanel = ({ width, height, data, options }) => {
  const getLinks = (0,_features_explore_utils_links__WEBPACK_IMPORTED_MODULE_1__.useLinks)(data.timeRange);
  const panelId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  if (!data || !data.series.length) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "panel-empty" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No data found in response"));
  }
  const memoizedGetNodeGraphDataFrames = (0,memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(_utils__WEBPACK_IMPORTED_MODULE_3__.getNodeGraphDataFrames);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { width, height } }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _NodeGraph__WEBPACK_IMPORTED_MODULE_2__.NodeGraph,
    {
      dataFrames: memoizedGetNodeGraphDataFrames(data.series, options),
      getLinks,
      panelId
    }
  ));
};


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/ViewControls.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewControls: () => (/* binding */ ViewControls)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Layout.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;



function getStyles() {
  return {
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n      label: wrapper;\n      pointer-events: all;\n    "])))
  };
}
function ViewControls(props) {
  const { config, onConfigChange, onPlus, onMinus, disableZoomOut, disableZoomIn } = props;
  const [showConfig, setShowConfig] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const allowConfiguration = false;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.wrapper }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.VerticalGroup, { spacing: "sm" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, { spacing: "xs" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button,
    {
      icon: "plus-circle",
      onClick: onPlus,
      size: "md",
      title: "Zoom in",
      variant: "secondary",
      disabled: disableZoomIn
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button,
    {
      icon: "minus-circle",
      onClick: onMinus,
      size: "md",
      title: "Zoom out",
      variant: "secondary",
      disabled: disableZoomOut
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, { spacing: "xs" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button,
    {
      icon: "code-branch",
      onClick: () => onConfigChange({ ...config, gridLayout: false }),
      size: "md",
      title: "Default layout",
      variant: "secondary",
      disabled: !config.gridLayout
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button,
    {
      icon: "apps",
      onClick: () => onConfigChange({ ...config, gridLayout: true }),
      size: "md",
      title: "Grid layout",
      variant: "secondary",
      disabled: config.gridLayout
    }
  ))), allowConfiguration && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { size: "xs", fill: "text", onClick: () => setShowConfig((showConfig2) => !showConfig2) }, showConfig ? "Hide config" : "Show config"), allowConfiguration && showConfig && Object.keys(config).filter((k) => k !== "show").map((k) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { key: k }, k, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    "input",
    {
      style: { width: 50 },
      type: "number",
      value: config[k],
      onChange: (e) => {
        onConfigChange({ ...config, [k]: parseFloat(e.target.value) });
      }
    }
  ))));
}


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/createLayoutWorker.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMsaglWorker: () => (/* binding */ createMsaglWorker),
/* harmony export */   createWorker: () => (/* binding */ createWorker)
/* harmony export */ });
/* harmony import */ var _core_utils_CorsWorker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/utils/CorsWorker.ts");


const createWorker = () => new _core_utils_CorsWorker__WEBPACK_IMPORTED_MODULE_0__.CorsWorker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("public_app_plugins_panel_nodeGraph_layout_worker_js"), __webpack_require__.b));
const createMsaglWorker = () => new _core_utils_CorsWorker__WEBPACK_IMPORTED_MODULE_0__.CorsWorker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("public_app_plugins_panel_nodeGraph_layeredLayout_worker_js"), __webpack_require__.b));


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/editor/ArcOptionsEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArcOptionsEditor: () => (/* binding */ ArcOptionsEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/ColorPicker/ColorPicker.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui_src_components_MatchersUI_FieldNamePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/MatchersUI/FieldNamePicker.tsx");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;




const ArcOptionsEditor = ({ value, onChange, context }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const addArc = () => {
    const newArc = { field: "", color: "" };
    onChange(value ? [...value, newArc] : [newArc]);
  };
  const removeArc = (idx) => {
    const copy = value == null ? void 0 : value.slice();
    copy.splice(idx, 1);
    onChange(copy);
  };
  const updateField = (idx, field, newValue) => {
    var _a2;
    let arcs = (_a2 = value == null ? void 0 : value.slice()) != null ? _a2 : [];
    arcs[idx][field] = newValue;
    onChange(arcs);
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, value == null ? void 0 : value.map((arc, i) => {
    var _a2;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.section, key: i }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_ui_src_components_MatchersUI_FieldNamePicker__WEBPACK_IMPORTED_MODULE_3__.FieldNamePicker,
      {
        context,
        value: (_a2 = arc.field) != null ? _a2 : "",
        onChange: (val) => {
          updateField(i, "field", val);
        },
        item: {
          settings: {
            filter: (field) => field.name.includes("arc__")
          },
          id: "arc-field-".concat(i),
          name: "arc-field-".concat(i)
        }
      }
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ColorPicker,
      {
        color: arc.color || "#808080",
        onChange: (val) => {
          updateField(i, "color", val);
        }
      }
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { size: "sm", icon: "minus", variant: "secondary", onClick: () => removeArc(i), title: "Remove arc" }));
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { size: "sm", icon: "plus", onClick: addArc, variant: "secondary" }, "Add arc"));
};
const getStyles = () => {
  return {
    section: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 0 8px;\n      margin-bottom: 8px;\n    "])))
  };
};


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/layout.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultConfig: () => (/* binding */ defaultConfig),
/* harmony export */   useLayout: () => (/* binding */ useLayout)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/react-use/esm/useUnmount.js");
/* harmony import */ var react_use_lib_useMountedState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-use/lib/useMountedState.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _createLayoutWorker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/createLayoutWorker.ts");
/* harmony import */ var _useNodeLimit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/useNodeLimit.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/utils.ts");









const defaultConfig = {
  linkDistance: 150,
  linkStrength: 0.5,
  forceX: 2e3,
  forceXStrength: 0.02,
  forceCollide: 100,
  tick: 300,
  gridLayout: false
};
function useLayout(rawNodes, rawEdges, config = defaultConfig, nodeCountLimit, width, rootNodeId, hasFixedPositions) {
  const [nodesGraph, setNodesGraph] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [edgesGraph, setEdgesGraph] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const isMounted = (0,react_use_lib_useMountedState__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const layoutWorkerCancelRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  (0,react_use__WEBPACK_IMPORTED_MODULE_6__["default"])(() => {
    if (layoutWorkerCancelRef.current) {
      layoutWorkerCancelRef.current();
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (rawNodes.length === 0) {
      setNodesGraph([]);
      setEdgesGraph([]);
      setLoading(false);
      return;
    }
    if (hasFixedPositions) {
      setNodesGraph(rawNodes);
      const nodesMap = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.fromPairs)(rawNodes.map((node) => [node.id, node]));
      setEdgesGraph(
        rawEdges.map(
          (e) => ({
            ...e,
            source: nodesMap[e.source],
            target: nodesMap[e.target]
          })
        )
      );
      setLoading(false);
      return;
    }
    const layoutType = _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.config.featureToggles.nodeGraphDotLayout && rawNodes.length <= 500 ? "layered" : "default";
    setLoading(true);
    const cancel = layout(rawNodes, rawEdges, layoutType, ({ nodes, edges }) => {
      if (isMounted()) {
        setNodesGraph(nodes);
        setEdgesGraph(edges);
        setLoading(false);
      }
    });
    layoutWorkerCancelRef.current = cancel;
    return cancel;
  }, [hasFixedPositions, rawNodes, rawEdges, isMounted]);
  const [nodesGrid, edgesGrid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (rawNodes.length === 0) {
      return [[], []];
    }
    const rawNodesCopy = rawNodes.map((n) => ({ ...n }));
    const rawEdgesCopy = rawEdges.map((e) => ({ ...e }));
    gridLayout(rawNodesCopy, width, config.sort);
    return [rawNodesCopy, rawEdgesCopy];
  }, [config.sort, rawNodes, rawEdges, width]);
  const {
    nodes: nodesWithLimit,
    edges: edgesWithLimit,
    markers
  } = (0,_useNodeLimit__WEBPACK_IMPORTED_MODULE_3__.useNodeLimit)(
    config.gridLayout ? nodesGrid : nodesGraph,
    config.gridLayout ? edgesGrid : edgesGraph,
    nodeCountLimit,
    config,
    rootNodeId
  );
  const bounds = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => (0,_utils__WEBPACK_IMPORTED_MODULE_4__.graphBounds)([...nodesWithLimit, ...(markers || []).map((m) => m.node)]),
    [nodesWithLimit, markers]
  );
  return {
    nodes: nodesWithLimit,
    edges: edgesWithLimit,
    markers,
    bounds,
    hiddenNodesCount: rawNodes.length - nodesWithLimit.length,
    loading
  };
}
function layout(nodes, edges, engine, done) {
  const worker = engine === "default" ? (0,_createLayoutWorker__WEBPACK_IMPORTED_MODULE_2__.createWorker)() : (0,_createLayoutWorker__WEBPACK_IMPORTED_MODULE_2__.createMsaglWorker)();
  worker.onmessage = (event) => {
    const nodesMap = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.fromPairs)(nodes.map((node) => [node.id, node]));
    event.data.nodes = event.data.nodes.map((node) => {
      return {
        ...nodesMap[node.id],
        ...node
      };
    });
    done(event.data);
  };
  worker.postMessage({
    nodes: nodes.map((n) => ({
      id: n.id,
      incoming: n.incoming
    })),
    edges,
    config: defaultConfig
  });
  return () => {
    worker.terminate();
  };
}
function gridLayout(nodes, width, sort) {
  const spacingVertical = 140;
  const spacingHorizontal = 120;
  const padding = spacingHorizontal / 2;
  const perRow = Math.min(Math.floor((width - padding * 2) / spacingVertical), nodes.length);
  const midPoint = Math.floor((perRow - 1) * spacingHorizontal / 2);
  if (sort) {
    nodes.sort((node1, node2) => {
      const val1 = sort.field.values[node1.dataFrameRowIndex];
      const val2 = sort.field.values[node2.dataFrameRowIndex];
      return sort.ascending ? val1 - val2 : val2 - val1;
    });
  }
  for (const [index, node] of nodes.entries()) {
    const row = Math.floor(index / perRow);
    const column = index % perRow;
    node.x = column * spacingHorizontal - midPoint;
    node.y = -60 + row * spacingVertical;
  }
}


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/panel/PanelPlugin.ts");
/* harmony import */ var _NodeGraphPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/NodeGraphPanel.tsx");
/* harmony import */ var _editor_ArcOptionsEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/editor/ArcOptionsEditor.tsx");
/* harmony import */ var _suggestions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/suggestions.ts");





const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_3__.PanelPlugin(_NodeGraphPanel__WEBPACK_IMPORTED_MODULE_0__.NodeGraphPanel).setPanelOptions((builder, context) => {
  builder.addNestedOptions({
    category: ["Nodes"],
    path: "nodes",
    build: (builder2) => {
      builder2.addUnitPicker({
        name: "Main stat unit",
        path: "mainStatUnit"
      });
      builder2.addUnitPicker({
        name: "Secondary stat unit",
        path: "secondaryStatUnit"
      });
      builder2.addCustomEditor({
        name: "Arc sections",
        path: "arcs",
        id: "arcs",
        editor: _editor_ArcOptionsEditor__WEBPACK_IMPORTED_MODULE_1__.ArcOptionsEditor
      });
    }
  });
  builder.addNestedOptions({
    category: ["Edges"],
    path: "edges",
    build: (builder2) => {
      builder2.addUnitPicker({
        name: "Main stat unit",
        path: "mainStatUnit"
      });
      builder2.addUnitPicker({
        name: "Secondary stat unit",
        path: "secondaryStatUnit"
      });
    }
  });
}).setSuggestionsSupplier(new _suggestions__WEBPACK_IMPORTED_MODULE_2__.NodeGraphSuggestionsSupplier());


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/suggestions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeGraphSuggestionsSupplier: () => (/* binding */ NodeGraphSuggestionsSupplier)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/panel.ts");
/* harmony import */ var _types_suggestions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/types/suggestions.ts");



class NodeGraphSuggestionsSupplier {
  getListWithDefaults(builder) {
    return builder.getListAppender({
      name: _types_suggestions__WEBPACK_IMPORTED_MODULE_0__.SuggestionName.NodeGraph,
      pluginId: "nodeGraph"
    });
  }
  hasCorrectFields(frames) {
    let hasNodesFrame = false;
    let hasEdgesFrame = false;
    const nodeFields = [
      ["id", _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string],
      ["title", _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string],
      ["mainstat", _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number]
    ];
    const edgeFields = [
      ["id", _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string],
      ["source", _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string],
      ["target", _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string]
    ];
    for (const frame of frames) {
      if (this.checkFields(nodeFields, frame)) {
        hasNodesFrame = true;
      }
      if (this.checkFields(edgeFields, frame)) {
        hasEdgesFrame = true;
      }
    }
    return hasNodesFrame && hasEdgesFrame;
  }
  checkFields(fields, frame) {
    let hasCorrectFields = true;
    for (const field of fields) {
      const [name, type] = field;
      const frameField = frame.fields.find((f) => f.name === name);
      if (!frameField || type !== frameField.type) {
        hasCorrectFields = false;
        break;
      }
    }
    return hasCorrectFields;
  }
  getSuggestionsForData(builder) {
    if (!builder.data) {
      return;
    }
    const hasCorrectFields = this.hasCorrectFields(builder.data.series);
    const nodeGraphFrames = builder.data.series.filter(
      (df) => df.meta && df.meta.preferredVisualisationType === "nodeGraph"
    );
    if (hasCorrectFields || nodeGraphFrames.length === 2) {
      this.getListWithDefaults(builder).append({
        name: _types_suggestions__WEBPACK_IMPORTED_MODULE_0__.SuggestionName.NodeGraph,
        score: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.VisualizationSuggestionScore.Best
      });
    }
  }
}


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/useCategorizeFrames.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCategorizeFrames: () => (/* binding */ useCategorizeFrames)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/utils.ts");



function useCategorizeFrames(series) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getGraphFrame)(series);
  }, [series]);
}


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/useContextMenu.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLabelStyles: () => (/* binding */ getLabelStyles),
/* harmony export */   useContextMenu: () => (/* binding */ useContextMenu)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/ContextMenu/ContextMenu.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/MenuGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/MenuItem.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/utils.ts");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;




function useContextMenu(getLinks, nodes, edges, config, setConfig, setFocusedNodeId) {
  const [menu, setMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(void 0);
  const onNodeOpen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (event, node) => {
      const [label, showGridLayout] = config.gridLayout ? ["Show in Graph layout", false] : ["Show in Grid layout", true];
      const extraNodeItem = [
        {
          label,
          onClick: (node2) => {
            setFocusedNodeId(node2.id);
            setConfig({ ...config, gridLayout: showGridLayout });
            setMenu(void 0);
          }
        }
      ];
      const links = nodes ? getLinks(nodes, node.dataFrameRowIndex) : [];
      const renderer = getItemsRenderer(links, node, extraNodeItem);
      setMenu(makeContextMenu(/* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(NodeHeader, { node, nodes }), event, setMenu, renderer));
    },
    [config, nodes, getLinks, setMenu, setConfig, setFocusedNodeId]
  );
  const onEdgeOpen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (event, edge) => {
      if (!edges) {
        return;
      }
      const links = getLinks(edges, edge.dataFrameRowIndex);
      const renderer = getItemsRenderer(links, edge);
      setMenu(makeContextMenu(/* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(EdgeHeader, { edge, edges }), event, setMenu, renderer));
    },
    [edges, getLinks, setMenu]
  );
  return { onEdgeOpen, onNodeOpen, MenuComponent: menu };
}
function makeContextMenu(header, event, setMenu, renderer) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ContextMenu,
    {
      renderHeader: () => header,
      renderMenuItems: renderer,
      onClose: () => setMenu(void 0),
      x: event.pageX,
      y: event.pageY
    }
  );
}
function getItemsRenderer(links, item, extraItems) {
  if (!(links.length || (extraItems == null ? void 0 : extraItems.length))) {
    return void 0;
  }
  const items = getItems(links);
  return () => {
    let groups = items == null ? void 0 : items.map((group, index) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.MenuGroup, { key: "".concat(group.label).concat(index), label: group.label }, (group.items || []).map(mapMenuItem(item))));
    if (extraItems) {
      groups = [...extraItems.map(mapMenuItem(item)), ...groups];
    }
    return groups;
  };
}
function mapMenuItem(item) {
  return function NodeGraphMenuItem(link) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.MenuItem,
      {
        key: link.label,
        url: link.url,
        label: link.label,
        ariaLabel: link.ariaLabel,
        onClick: link.onClick ? (event) => {
          var _a2;
          if (!((event == null ? void 0 : event.ctrlKey) || (event == null ? void 0 : event.metaKey) || (event == null ? void 0 : event.shiftKey))) {
            event == null ? void 0 : event.preventDefault();
            event == null ? void 0 : event.stopPropagation();
            (_a2 = link.onClick) == null ? void 0 : _a2.call(link, item);
          }
        } : void 0,
        target: "_self"
      }
    );
  };
}
function getItems(links) {
  const defaultGroup = "Open in Explore";
  const groups = links.reduce((acc, l) => {
    let group;
    let title;
    if (l.title.indexOf("/") !== -1) {
      group = l.title.split("/")[0];
      title = l.title.split("/")[1];
      acc[group] = acc[group] || [];
      acc[group].push({ l, newTitle: title });
    } else {
      acc[defaultGroup] = acc[defaultGroup] || [];
      acc[defaultGroup].push({ l });
    }
    return acc;
  }, {});
  return Object.keys(groups).map((key) => {
    return {
      label: key,
      ariaLabel: key,
      items: groups[key].map((link) => ({
        label: link.newTitle || link.l.title,
        ariaLabel: link.newTitle || link.l.title,
        url: link.l.href,
        onClick: link.l.onClick
      }))
    };
  });
}
function FieldRow({ field, index }) {
  var _a2;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    HeaderRow,
    {
      label: ((_a2 = field.config) == null ? void 0 : _a2.displayName) || field.name,
      value: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.statToString)(field.config, field.values[index] || "")
    }
  );
}
function HeaderRow({ label, value }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getLabelStyles);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", { className: styles.label }, label, ": "), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", { className: styles.value }, value));
}
function NodeHeader({ node, nodes }) {
  const rows = [];
  if (nodes) {
    const fields = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getNodeFields)(nodes);
    for (const f of [fields.title, fields.subTitle, fields.mainStat, fields.secondaryStat, ...fields.details]) {
      if (f && f.values[node.dataFrameRowIndex]) {
        rows.push(/* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(FieldRow, { key: f.name, field: f, index: node.dataFrameRowIndex }));
      }
    }
  } else {
    if (node.title) {
      rows.push(/* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(HeaderRow, { key: "title", label: "Title", value: node.title }));
    }
    if (node.subTitle) {
      rows.push(/* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(HeaderRow, { key: "subtitle", label: "Subtitle", value: node.subTitle }));
    }
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("table", { style: { width: "100%" } }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tbody", null, rows));
}
function EdgeHeader(props) {
  var _a2, _b2;
  const index = props.edge.dataFrameRowIndex;
  const fields = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getEdgeFields)(props.edges);
  const valueSource = ((_a2 = fields.source) == null ? void 0 : _a2.values[index]) || "";
  const valueTarget = ((_b2 = fields.target) == null ? void 0 : _b2.values[index]) || "";
  const rows = [];
  if (valueSource && valueTarget) {
    rows.push(/* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(HeaderRow, { key: "header-row", label: "Source \u2192 Target", value: "".concat(valueSource, " \u2192 ").concat(valueTarget) }));
  }
  for (const f of [fields.mainStat, fields.secondaryStat, ...fields.details]) {
    if (f && f.values[index]) {
      rows.push(/* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(FieldRow, { key: "field-row-".concat(index), field: f, index }));
    }
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("table", { style: { width: "100%" } }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tbody", null, rows));
}
const getLabelStyles = (theme) => {
  return {
    label: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_a || (_a = __template(["\n      label: Label;\n      line-height: 1.25;\n      color: ", ";\n      font-size: ", ";\n      font-weight: ", ";\n      padding-right: ", ";\n    "])), theme.colors.text.disabled, theme.typography.size.sm, theme.typography.fontWeightMedium, theme.spacing(1)),
    value: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_b || (_b = __template(["\n      label: Value;\n      font-size: ", ";\n      font-weight: ", ";\n      color: ", ";\n    "])), theme.typography.size.sm, theme.typography.fontWeightMedium, theme.colors.text.primary)
  };
};


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/useFocusPositionOnLayout.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFocusPositionOnLayout: () => (/* binding */ useFocusPositionOnLayout)
/* harmony export */ });
/* harmony import */ var react_use_lib_usePrevious__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-use/lib/usePrevious.js");


function useFocusPositionOnLayout(config, nodes, focusedNodeId) {
  const prevLayoutGrid = (0,react_use_lib_usePrevious__WEBPACK_IMPORTED_MODULE_0__["default"])(config.gridLayout);
  let focusPosition;
  if (prevLayoutGrid === true && !config.gridLayout && focusedNodeId) {
    const node = nodes.find((n) => n.id === focusedNodeId);
    if (node) {
      focusPosition = {
        x: -node.x,
        y: -node.y
      };
    }
  }
  return focusPosition;
}


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/useHighlight.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useHighlight: () => (/* binding */ useHighlight)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use_lib_useMountedState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-use/lib/useMountedState.js");



function useHighlight(focusedNodeId) {
  const [highlightId, setHighlightId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const mounted = (0,react_use_lib_useMountedState__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (focusedNodeId) {
      setHighlightId(focusedNodeId);
      setTimeout(() => {
        if (mounted()) {
          setHighlightId(void 0);
        }
      }, 500);
    }
  }, [focusedNodeId, mounted]);
  return highlightId;
}


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/useNodeLimit.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   limitGraphLayout: () => (/* binding */ limitGraphLayout),
/* harmony export */   limitGridLayout: () => (/* binding */ limitGridLayout),
/* harmony export */   useNodeLimit: () => (/* binding */ useNodeLimit)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function useNodeLimit(nodes, edges, limit, config, rootId) {
  const [edgesMap, nodesMap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!(nodes.length && edges.length)) {
      return [{}, {}];
    }
    const edgesMap2 = edges.reduce((acc, e) => {
      var _a, _b;
      acc[e.source.id] = [...(_a = acc[e.source.id]) != null ? _a : [], e];
      acc[e.target.id] = [...(_b = acc[e.target.id]) != null ? _b : [], e];
      return acc;
    }, {});
    const nodesMap2 = nodes.reduce((acc, node) => {
      acc[node.id] = node;
      return acc;
    }, {});
    return [edgesMap2, nodesMap2];
  }, [edges, nodes]);
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (nodes.length <= limit) {
      return { nodes, edges };
    }
    if (config.gridLayout) {
      return limitGridLayout(nodes, limit, rootId);
    }
    return limitGraphLayout(nodes, edges, nodesMap, edgesMap, limit, rootId);
  }, [edges, edgesMap, limit, nodes, nodesMap, rootId, config.gridLayout]);
}
function limitGraphLayout(nodes, edges, nodesMap, edgesMap, limit, rootId) {
  let roots;
  if (rootId) {
    roots = [nodesMap[rootId]];
  } else {
    roots = nodes.filter((n) => n.incoming === 0);
    if (!roots.length) {
      roots = [nodes[0]];
    }
  }
  const { visibleNodes, markers } = collectVisibleNodes(limit, roots, nodesMap, edgesMap);
  const markersWithStats = collectMarkerStats(markers, visibleNodes, nodesMap, edgesMap);
  const markersMap = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.fromPairs)(markersWithStats.map((m) => [m.node.id, m]));
  for (const marker of markersWithStats) {
    if (marker.count === 1) {
      delete markersMap[marker.node.id];
      visibleNodes[marker.node.id] = marker.node;
    }
  }
  const visibleEdges = edges.filter(
    (e) => (visibleNodes[e.source.id] || markersMap[e.source.id]) && (visibleNodes[e.target.id] || markersMap[e.target.id])
  );
  return {
    nodes: Object.values(visibleNodes),
    edges: visibleEdges,
    markers: Object.values(markersMap)
  };
}
function limitGridLayout(nodes, limit, rootId) {
  let start = 0;
  let stop = limit;
  let markers = [];
  if (rootId) {
    const index = nodes.findIndex((node) => node.id === rootId);
    const prevLimit = Math.floor(limit / 2);
    let afterLimit = prevLimit;
    start = index - prevLimit;
    if (start < 0) {
      afterLimit += Math.abs(start);
      start = 0;
    }
    stop = index + afterLimit + 1;
    if (stop > nodes.length) {
      if (start > 0) {
        start = Math.max(0, start - (stop - nodes.length));
      }
      stop = nodes.length;
    }
    if (start > 1) {
      markers.push({ node: nodes[start - 1], count: start });
    }
    if (nodes.length - stop > 1) {
      markers.push({ node: nodes[stop], count: nodes.length - stop });
    }
  } else {
    if (nodes.length - limit > 1) {
      markers = [{ node: nodes[limit], count: nodes.length - limit }];
    }
  }
  return {
    nodes: nodes.slice(start, stop),
    edges: [],
    markers
  };
}
function collectVisibleNodes(limit, roots, nodesMap, edgesMap) {
  const visibleNodes = {};
  let stack = [...roots];
  while (Object.keys(visibleNodes).length < limit && stack.length > 0) {
    let current = stack.shift();
    if (visibleNodes[current.id]) {
      continue;
    }
    visibleNodes[current.id] = current;
    const edges = edgesMap[current.id] || [];
    const connectedNodes = edges.map((e) => {
      const id = e.source.id === current.id ? e.target.id : e.source.id;
      return nodesMap[id];
    });
    stack = stack.concat(connectedNodes);
  }
  const markers = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniq)(stack.filter((n) => !visibleNodes[n.id]));
  return { visibleNodes, markers };
}
function collectMarkerStats(markers, visibleNodes, nodesMap, edgesMap) {
  return markers.map((marker) => {
    const nodesToCount = {};
    let count = 0;
    let stack = [marker];
    while (stack.length > 0 && count <= 101) {
      let current = stack.shift();
      if (visibleNodes[current.id] || nodesToCount[current.id]) {
        continue;
      }
      if (!nodesToCount[current.id]) {
        count++;
      }
      nodesToCount[current.id] = current;
      const edges = edgesMap[current.id] || [];
      const connectedNodes = edges.map((e) => {
        const id = e.source.id === current.id ? e.target.id : e.source.id;
        return nodesMap[id];
      });
      stack = stack.concat(connectedNodes);
    }
    return {
      node: marker,
      count
    };
  });
}


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/usePanning.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePanning: () => (/* binding */ usePanning)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use_lib_useMountedState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-use/lib/useMountedState.js");
/* harmony import */ var react_use_lib_usePrevious__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/lib/usePrevious.js");




function usePanning({ scale = 1, bounds, focus } = {}) {
  const isMounted = (0,react_use_lib_useMountedState__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const isPanning = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const frame = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const panRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const initial = { x: 0, y: 0 };
  const viewBounds = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
    () => ({
      right: bounds ? -bounds.left : Infinity,
      left: bounds ? -bounds.right : -Infinity,
      bottom: bounds ? -bounds.top : -Infinity,
      top: bounds ? -bounds.bottom : Infinity
    }),
    [bounds]
  );
  const startMousePosition = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initial);
  const prevPosition = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initial);
  const currentPosition = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initial);
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    isPanning: false,
    position: initial
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const startPanning = (event) => {
      if (!isPanning.current && isMounted()) {
        isPanning.current = true;
        startMousePosition.current = getEventXY(event);
        prevPosition.current = { ...currentPosition.current };
        setState((state2) => ({ ...state2, isPanning: true }));
        bindEvents();
      }
    };
    const stopPanning = () => {
      if (isPanning.current && isMounted()) {
        isPanning.current = false;
        setState((state2) => ({ ...state2, isPanning: false }));
        unbindEvents();
      }
    };
    const onPanStart = (event) => {
      startPanning(event);
      onPan(event);
    };
    const bindEvents = () => {
      document.addEventListener("mousemove", onPan);
      document.addEventListener("mouseup", stopPanning);
      document.addEventListener("touchmove", onPan);
      document.addEventListener("touchend", stopPanning);
    };
    const unbindEvents = () => {
      document.removeEventListener("mousemove", onPan);
      document.removeEventListener("mouseup", stopPanning);
      document.removeEventListener("touchmove", onPan);
      document.removeEventListener("touchend", stopPanning);
    };
    const onPan = (event) => {
      cancelAnimationFrame(frame.current);
      const pos = getEventXY(event);
      frame.current = requestAnimationFrame(() => {
        if (isMounted() && panRef.current) {
          let xDiff = pos.x - startMousePosition.current.x;
          let yDiff = pos.y - startMousePosition.current.y;
          currentPosition.current = {
            x: inBounds(prevPosition.current.x + xDiff / scale, viewBounds.left, viewBounds.right),
            y: inBounds(prevPosition.current.y + yDiff / scale, viewBounds.top, viewBounds.bottom)
          };
          setState((state2) => ({
            ...state2,
            position: {
              ...currentPosition.current
            }
          }));
        }
      });
    };
    const ref = panRef.current;
    if (ref) {
      ref.addEventListener("mousedown", onPanStart);
      ref.addEventListener("touchstart", onPanStart);
    }
    return () => {
      if (ref) {
        ref.removeEventListener("mousedown", onPanStart);
        ref.removeEventListener("touchstart", onPanStart);
      }
    };
  }, [scale, viewBounds, isMounted]);
  const previousFocus = (0,react_use_lib_usePrevious__WEBPACK_IMPORTED_MODULE_2__["default"])(focus);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (focus && (previousFocus == null ? void 0 : previousFocus.x) !== focus.x && (previousFocus == null ? void 0 : previousFocus.y) !== focus.y) {
      const position2 = {
        x: inBounds(focus.x, viewBounds.left, viewBounds.right),
        y: inBounds(focus.y, viewBounds.top, viewBounds.bottom)
      };
      setState({
        position: position2,
        isPanning: false
      });
      currentPosition.current = position2;
      prevPosition.current = position2;
    }
  }, [focus, previousFocus, viewBounds, currentPosition, prevPosition]);
  let position = state.position;
  if (focus && (previousFocus == null ? void 0 : previousFocus.x) !== focus.x && (previousFocus == null ? void 0 : previousFocus.y) !== focus.y) {
    position = focus;
  }
  return {
    state: {
      ...state,
      position: {
        x: inBounds(position.x, viewBounds.left, viewBounds.right),
        y: inBounds(position.y, viewBounds.top, viewBounds.bottom)
      }
    },
    ref: panRef
  };
}
function inBounds(value, min, max) {
  return Math.min(Math.max(value, min != null ? min : -Infinity), max != null ? max : Infinity);
}
function getEventXY(event) {
  if ("changedTouches" in event && event instanceof TouchEvent) {
    return { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY };
  } else if (event instanceof MouseEvent) {
    return { x: event.clientX, y: event.clientY };
  }
  return { x: 0, y: 0 };
}


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/useZoom.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useZoom: () => (/* binding */ useZoom)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const defaultOptions = {
  stepDown: (s) => s / 1.5,
  stepUp: (s) => s * 1.5,
  min: 0.13,
  max: 2.25
};
function useZoom({ stepUp, stepDown, min, max } = defaultOptions) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [scale, setScale] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const onStepUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (scale < (max != null ? max : Infinity)) {
      setScale(stepUp(scale));
    }
  }, [scale, stepUp, max]);
  const onStepDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (scale > (min != null ? min : -Infinity)) {
      setScale(stepDown(scale));
    }
  }, [scale, stepDown, min]);
  const onWheel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    function(wheelEvent) {
      if (wheelEvent.ctrlKey || wheelEvent.metaKey) {
        wheelEvent.preventDefault();
        setScale(Math.min(Math.max(min != null ? min : -Infinity, scale + Math.min(wheelEvent.deltaY, 2) * -0.01), max != null ? max : Infinity));
        if (wheelEvent.deltaY < 0) {
          const newScale = scale + Math.max(wheelEvent.deltaY, -4) * -0.015;
          setScale(Math.max(min != null ? min : -Infinity, newScale));
        } else if (wheelEvent.deltaY > 0) {
          const newScale = scale + Math.min(wheelEvent.deltaY, 4) * -0.015;
          setScale(Math.min(max != null ? max : Infinity, newScale));
        }
      }
    },
    [min, max, scale]
  );
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!ref.current) {
      return;
    }
    const zoomRef = ref.current;
    zoomRef.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      if (zoomRef) {
        zoomRef.removeEventListener("wheel", onWheel);
      }
    };
  }, [onWheel]);
  return {
    onStepUp,
    onStepDown,
    scale: Math.max(Math.min(scale, max != null ? max : Infinity), min != null ? min : -Infinity),
    isMax: scale >= (max != null ? max : Infinity),
    isMin: scale <= (min != null ? min : -Infinity),
    ref
  };
}


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyOptionsToFrames: () => (/* binding */ applyOptionsToFrames),
/* harmony export */   findConnectedNodesForEdge: () => (/* binding */ findConnectedNodesForEdge),
/* harmony export */   findConnectedNodesForNode: () => (/* binding */ findConnectedNodesForNode),
/* harmony export */   getEdgeFields: () => (/* binding */ getEdgeFields),
/* harmony export */   getGraphFrame: () => (/* binding */ getGraphFrame),
/* harmony export */   getNodeFields: () => (/* binding */ getNodeFields),
/* harmony export */   getNodeGraphDataFrames: () => (/* binding */ getNodeGraphDataFrames),
/* harmony export */   graphBounds: () => (/* binding */ graphBounds),
/* harmony export */   makeEdgesDataFrame: () => (/* binding */ makeEdgesDataFrame),
/* harmony export */   makeNodesDataFrame: () => (/* binding */ makeNodesDataFrame),
/* harmony export */   processNodes: () => (/* binding */ processNodes),
/* harmony export */   shortenLine: () => (/* binding */ shortenLine),
/* harmony export */   statToString: () => (/* binding */ statToString)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/dataframe/FieldCache.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/utils/nodeGraph.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/dataframe/MutableDataFrame.ts");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/Node.tsx");



function shortenLine(line, sourceNodeRadius, targetNodeRadius, arrowHeadHeight = 1) {
  const vx = line.x2 - line.x1;
  const vy = line.y2 - line.y1;
  const mag = Math.sqrt(vx * vx + vy * vy);
  const cosine = (line.x2 - line.x1) / mag;
  const sine = (line.y2 - line.y1) / mag;
  const scaledThickness = arrowHeadHeight - arrowHeadHeight / 10;
  return {
    x1: line.x1 + cosine * (sourceNodeRadius + 5),
    y1: line.y1 + sine * (sourceNodeRadius + 5),
    x2: line.x2 - cosine * (targetNodeRadius + 3 + scaledThickness),
    y2: line.y2 - sine * (targetNodeRadius + 3 + scaledThickness)
  };
}
function getNodeFields(nodes) {
  const normalizedFrames = {
    ...nodes,
    fields: nodes.fields.map((field) => ({ ...field, name: field.name.toLowerCase() }))
  };
  const fieldsCache = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldCache(normalizedFrames);
  return {
    id: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.id.toLowerCase()),
    title: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.title.toLowerCase()),
    subTitle: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.subTitle.toLowerCase()),
    mainStat: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.mainStat.toLowerCase()),
    secondaryStat: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.secondaryStat.toLowerCase()),
    arc: findFieldsByPrefix(nodes, _grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.arc),
    details: findFieldsByPrefix(nodes, _grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.detail),
    color: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.color),
    icon: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.icon),
    nodeRadius: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.nodeRadius.toLowerCase()),
    highlighted: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.highlighted.toLowerCase()),
    fixedX: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.fixedX.toLowerCase()),
    fixedY: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.fixedY.toLowerCase())
  };
}
function getEdgeFields(edges) {
  const normalizedFrames = {
    ...edges,
    fields: edges.fields.map((field) => ({ ...field, name: field.name.toLowerCase() }))
  };
  const fieldsCache = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldCache(normalizedFrames);
  return {
    id: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.id.toLowerCase()),
    source: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.source.toLowerCase()),
    target: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.target.toLowerCase()),
    mainStat: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.mainStat.toLowerCase()),
    secondaryStat: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.secondaryStat.toLowerCase()),
    details: findFieldsByPrefix(edges, _grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.detail.toLowerCase()),
    // @deprecated -- for edges use color instead
    highlighted: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.highlighted.toLowerCase()),
    thickness: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.thickness.toLowerCase()),
    color: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.color.toLowerCase()),
    strokeDasharray: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.strokeDasharray.toLowerCase())
  };
}
function findFieldsByPrefix(frame, prefix) {
  return frame.fields.filter((f) => f.name.match(new RegExp("^" + prefix)));
}
function processNodes(nodes, edges) {
  var _a, _b;
  if (!(edges || nodes)) {
    return { nodes: [], edges: [] };
  }
  if (nodes) {
    const nodeFields = getNodeFields(nodes);
    if (!nodeFields.id) {
      throw new Error("id field is required for nodes data frame.");
    }
    const hasFixedPositions = nodeFields.fixedX && nodeFields.fixedX.values.every((v) => Number.isFinite(v)) && nodeFields.fixedY && nodeFields.fixedY.values.every((v) => Number.isFinite(v));
    if (!hasFixedPositions) {
      const somePosFilled = nodeFields.fixedX && nodeFields.fixedX.values.some((v) => Number.isFinite(v)) || nodeFields.fixedY && nodeFields.fixedY.values.some((v) => Number.isFinite(v));
      if (somePosFilled) {
        throw new Error("If fixedX and fixedY fields are present, the values have to be all filled and valid");
      }
    }
    const nodesMap = {};
    for (let i = 0; i < nodeFields.id.values.length; i++) {
      const id = nodeFields.id.values[i];
      nodesMap[id] = makeNodeDatum(id, nodeFields, i);
    }
    let edgeDatums = edges ? processEdges(edges, getEdgeFields(edges), nodesMap) : [];
    for (const e of edgeDatums) {
      nodesMap[e.target].incoming++;
    }
    return {
      nodes: Object.values(nodesMap),
      edges: edgeDatums,
      hasFixedPositions,
      legend: nodeFields.arc.map((f) => {
        var _a2, _b2;
        return {
          color: (_b2 = (_a2 = f.config.color) == null ? void 0 : _a2.fixedColor) != null ? _b2 : "",
          name: f.config.displayName || f.name
        };
      })
    };
  } else {
    edges = edges;
    const nodesMap = {};
    const edgeFields = getEdgeFields(edges);
    for (let i = 0; i < edges.length; i++) {
      const { source, target } = makeNodeDatumsFromEdge(edgeFields, i);
      nodesMap[target.id] = nodesMap[target.id] || target;
      nodesMap[source.id] = nodesMap[source.id] || source;
      if (computableField(edgeFields.mainStat)) {
        nodesMap[target.id].mainStatNumeric = ((_a = nodesMap[target.id].mainStatNumeric) != null ? _a : 0) + edgeFields.mainStat.values[i];
      }
      if (computableField(edgeFields.secondaryStat)) {
        nodesMap[target.id].secondaryStatNumeric = ((_b = nodesMap[target.id].secondaryStatNumeric) != null ? _b : 0) + edgeFields.secondaryStat.values[i];
      }
      nodesMap[target.id].incoming++;
    }
    let edgeDatums = processEdges(edges, edgeFields, nodesMap);
    const nodes2 = normalizeStatsForNodes(nodesMap, edgeFields);
    return {
      nodes: nodes2,
      edges: edgeDatums,
      // Edge-only datasets never have fixedX/fixedY
      hasFixedPositions: false
    };
  }
}
function processEdges(edges, edgeFields, nodesMap) {
  if (!edgeFields.id) {
    throw new Error("id field is required for edges data frame.");
  }
  return edgeFields.id.values.map((id, index) => {
    var _a, _b, _c, _d, _e, _f;
    const target = (_a = edgeFields.target) == null ? void 0 : _a.values[index];
    const source = (_b = edgeFields.source) == null ? void 0 : _b.values[index];
    const sourceNode = nodesMap[source];
    const targetNode = nodesMap[target];
    return {
      id,
      dataFrameRowIndex: index,
      source,
      target,
      sourceNodeRadius: !sourceNode.nodeRadius ? _Node__WEBPACK_IMPORTED_MODULE_0__.nodeR : sourceNode.nodeRadius.values[sourceNode.dataFrameRowIndex],
      targetNodeRadius: !targetNode.nodeRadius ? _Node__WEBPACK_IMPORTED_MODULE_0__.nodeR : targetNode.nodeRadius.values[targetNode.dataFrameRowIndex],
      mainStat: edgeFields.mainStat ? statToString(edgeFields.mainStat.config, edgeFields.mainStat.values[index]) : "",
      secondaryStat: edgeFields.secondaryStat ? statToString(edgeFields.secondaryStat.config, edgeFields.secondaryStat.values[index]) : "",
      // @deprecated -- for edges use color instead
      highlighted: ((_c = edgeFields.highlighted) == null ? void 0 : _c.values[index]) || false,
      thickness: ((_d = edgeFields.thickness) == null ? void 0 : _d.values[index]) || 1,
      color: (_e = edgeFields.color) == null ? void 0 : _e.values[index],
      strokeDasharray: (_f = edgeFields.strokeDasharray) == null ? void 0 : _f.values[index]
    };
  });
}
function computableField(field) {
  return field && field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.number;
}
function normalizeStatsForNodes(nodesMap, edgeFields) {
  const secondaryStatValues = [];
  const mainStatValues = [];
  const secondaryStatField = computableField(edgeFields.secondaryStat) ? {
    ...edgeFields.secondaryStat,
    values: secondaryStatValues
  } : void 0;
  const mainStatField = computableField(edgeFields.mainStat) ? {
    ...edgeFields.mainStat,
    values: mainStatValues
  } : void 0;
  return Object.values(nodesMap).map((node, index) => {
    if (mainStatField || secondaryStatField) {
      const newNode = {
        ...node
      };
      if (mainStatField) {
        newNode.mainStat = mainStatField;
        mainStatValues.push(node.mainStatNumeric);
        newNode.dataFrameRowIndex = index;
      }
      if (secondaryStatField) {
        newNode.secondaryStat = secondaryStatField;
        secondaryStatValues.push(node.secondaryStatNumeric);
        newNode.dataFrameRowIndex = index;
      }
      return newNode;
    }
    return node;
  });
}
function makeNodeDatumsFromEdge(edgeFields, index) {
  var _a, _b;
  const targetId = (_a = edgeFields.target) == null ? void 0 : _a.values[index];
  const sourceId = (_b = edgeFields.source) == null ? void 0 : _b.values[index];
  return {
    target: makeSimpleNodeDatum(targetId, index),
    source: makeSimpleNodeDatum(sourceId, index)
  };
}
function makeSimpleNodeDatum(name, index) {
  return {
    id: name,
    title: name,
    subTitle: "",
    dataFrameRowIndex: index,
    incoming: 0,
    arcSections: [],
    highlighted: false
  };
}
function makeNodeDatum(id, nodeFields, index) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  return {
    id,
    title: ((_a = nodeFields.title) == null ? void 0 : _a.values[index]) || "",
    subTitle: ((_b = nodeFields.subTitle) == null ? void 0 : _b.values[index]) || "",
    dataFrameRowIndex: index,
    incoming: 0,
    mainStat: nodeFields.mainStat,
    secondaryStat: nodeFields.secondaryStat,
    arcSections: nodeFields.arc,
    color: nodeFields.color,
    icon: ((_c = nodeFields.icon) == null ? void 0 : _c.values[index]) || "",
    nodeRadius: nodeFields.nodeRadius,
    highlighted: ((_d = nodeFields.highlighted) == null ? void 0 : _d.values[index]) || false,
    x: (_f = (_e = nodeFields.fixedX) == null ? void 0 : _e.values[index]) != null ? _f : void 0,
    y: (_h = (_g = nodeFields.fixedY) == null ? void 0 : _g.values[index]) != null ? _h : void 0
  };
}
function statToString(config, value) {
  if (typeof value === "string") {
    return value;
  } else {
    const decimals = config.decimals || 2;
    if (Number.isFinite(value)) {
      return value.toFixed(decimals) + (config.unit ? " " + config.unit : "");
    } else {
      return "";
    }
  }
}
function makeNodesDataFrame(count) {
  const frame = nodesFrame();
  for (let i = 0; i < count; i++) {
    frame.add(makeNode(i));
  }
  return frame;
}
function makeNode(index) {
  return {
    id: index.toString(),
    title: "service:".concat(index),
    subtitle: "service",
    arc__success: 0.5,
    arc__errors: 0.5,
    mainstat: 0.1,
    secondarystat: 2,
    color: 0.5,
    icon: "database",
    noderadius: 40
  };
}
function nodesFrame() {
  const fields = {
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.id]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.title]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.subTitle]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.mainStat]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.number
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.secondaryStat]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.number
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.arc + "success"]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.number,
      config: { color: { mode: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldColorModeId.Fixed, fixedColor: "green" } }
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.arc + "errors"]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.number,
      config: { color: { mode: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldColorModeId.Fixed, fixedColor: "red" } }
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.color]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.number,
      config: { color: { mode: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldColorModeId.ContinuousGrYlRd } }
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.icon]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.nodeRadius]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.number
    }
  };
  return new _grafana_data__WEBPACK_IMPORTED_MODULE_5__.MutableDataFrame({
    name: "nodes",
    fields: Object.entries(fields).map(([key, value]) => ({
      ...value,
      name: key
    }))
  });
}
function makeEdgesDataFrame(edges) {
  const frame = edgesFrame();
  for (const edge of edges) {
    frame.add({
      id: edge.source + "--" + edge.target,
      ...edge
    });
  }
  return frame;
}
function edgesFrame() {
  const fields = {
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.id]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.source]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.target]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.mainStat]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.number
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.secondaryStat]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.number
    }
  };
  return new _grafana_data__WEBPACK_IMPORTED_MODULE_5__.MutableDataFrame({
    name: "edges",
    fields: Object.entries(fields).map(([key, value]) => ({
      ...value,
      name: key
    }))
  });
}
function graphBounds(nodes) {
  if (nodes.length === 0) {
    return { top: 0, right: 0, bottom: 0, left: 0, center: { x: 0, y: 0 } };
  }
  const bounds = nodes.reduce(
    (acc, node) => {
      if (node.x > acc.right) {
        acc.right = node.x;
      }
      if (node.x < acc.left) {
        acc.left = node.x;
      }
      if (node.y > acc.bottom) {
        acc.bottom = node.y;
      }
      if (node.y < acc.top) {
        acc.top = node.y;
      }
      return acc;
    },
    { top: Infinity, right: -Infinity, bottom: -Infinity, left: Infinity }
  );
  const y = bounds.top + (bounds.bottom - bounds.top) / 2;
  const x = bounds.left + (bounds.right - bounds.left) / 2;
  return {
    ...bounds,
    center: {
      x,
      y
    }
  };
}
function getNodeGraphDataFrames(frames, options) {
  let nodeGraphFrames = frames.filter((frame) => {
    var _a;
    if (((_a = frame.meta) == null ? void 0 : _a.preferredVisualisationType) === "nodeGraph") {
      return true;
    }
    if (frame.name === "nodes" || frame.name === "edges" || frame.refId === "nodes" || frame.refId === "edges") {
      return true;
    }
    const fieldsCache = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldCache(frame);
    if (fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.id)) {
      return true;
    }
    return false;
  });
  if (options) {
    nodeGraphFrames = applyOptionsToFrames(nodeGraphFrames, options);
  }
  return nodeGraphFrames;
}
const applyOptionsToFrames = (frames, options) => {
  return frames.map((frame) => {
    var _a, _b, _c, _d, _e, _f;
    const fieldsCache = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldCache(frame);
    if (fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.source.toLowerCase())) {
      if ((_a = options == null ? void 0 : options.edges) == null ? void 0 : _a.mainStatUnit) {
        const field = frame.fields.find((field2) => field2.name.toLowerCase() === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.mainStat);
        if (field) {
          field.config = { ...field.config, unit: options.edges.mainStatUnit };
        }
      }
      if ((_b = options == null ? void 0 : options.edges) == null ? void 0 : _b.secondaryStatUnit) {
        const field = frame.fields.find(
          (field2) => field2.name.toLowerCase() === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.secondaryStat
        );
        if (field) {
          field.config = { ...field.config, unit: options.edges.secondaryStatUnit };
        }
      }
    } else {
      if ((_c = options == null ? void 0 : options.nodes) == null ? void 0 : _c.mainStatUnit) {
        const field = frame.fields.find((field2) => field2.name.toLowerCase() === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.mainStat);
        if (field) {
          field.config = { ...field.config, unit: options.nodes.mainStatUnit };
        }
      }
      if ((_d = options == null ? void 0 : options.nodes) == null ? void 0 : _d.secondaryStatUnit) {
        const field = frame.fields.find(
          (field2) => field2.name.toLowerCase() === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.secondaryStat
        );
        if (field) {
          field.config = { ...field.config, unit: options.nodes.secondaryStatUnit };
        }
      }
      if ((_f = (_e = options == null ? void 0 : options.nodes) == null ? void 0 : _e.arcs) == null ? void 0 : _f.length) {
        for (const arc of options.nodes.arcs) {
          const field = frame.fields.find((field2) => {
            var _a2;
            return field2.name.toLowerCase() === ((_a2 = arc.field) == null ? void 0 : _a2.toLowerCase());
          });
          if (field && arc.color) {
            field.config = { ...field.config, color: { fixedColor: arc.color, mode: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldColorModeId.Fixed } };
          }
        }
      }
    }
    return frame;
  });
};
const findConnectedNodesForEdge = (nodes, edges, edgeId) => {
  const edge = edges.find((edge2) => edge2.id === edgeId);
  if (edge) {
    return [
      ...new Set(nodes.filter((node) => edge.source === node.id || edge.target === node.id).map((node) => node.id))
    ];
  }
  return [];
};
const findConnectedNodesForNode = (nodes, edges, nodeId) => {
  const node = nodes.find((node2) => node2.id === nodeId);
  if (node) {
    const linkedEdges = edges.filter((edge) => edge.source === node.id || edge.target === node.id);
    return [
      ...new Set(
        linkedEdges.flatMap(
          (edge) => nodes.filter((n) => edge.source === n.id || edge.target === n.id).map((n) => n.id)
        )
      )
    ];
  }
  return [];
};
const getGraphFrame = (frames) => {
  return frames.reduce(
    (acc, frame) => {
      const sourceField = frame.fields.filter((f) => f.name === "source");
      if (frame.name === "edges" || sourceField.length) {
        acc.edges.push(frame);
      } else {
        acc.nodes.push(frame);
      }
      return acc;
    },
    { edges: [], nodes: [] }
  );
};


/***/ })

}]);
//# sourceMappingURL=nodeGraphPanel.46bb55ac2ecd7709749f.js.map
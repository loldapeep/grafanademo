"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["alertmanagerPlugin"],{

/***/ "./node_modules/@grafana/async-query-data/dist/index.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({ value: true }));

var runtime = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var rxjs = __webpack_require__("./node_modules/rxjs/dist/cjs/index.js");
var data = __webpack_require__("./packages/grafana-data/src/index.ts");
var tslib = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
var React = __webpack_require__("./node_modules/react/index.js");
var ui = __webpack_require__("./packages/grafana-ui/src/index.ts");

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function isFunction(value) {
    return typeof value === 'function';
}

function hasLift(source) {
    return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return function (source) {
        if (hasLift(source)) {
            return source.lift(function (liftedSource) {
                try {
                    return init(liftedSource, this);
                }
                catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError('Unable to lift unknown Observable type');
    };
}

function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}

var UnsubscriptionError = createErrorClass(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});

function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}

var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = tslib.__values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialFinalizer = this.initialTeardown;
            if (isFunction(initialFinalizer)) {
                try {
                    initialFinalizer();
                }
                catch (e) {
                    errors = e instanceof UnsubscriptionError ? e.errors : [e];
                }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for (var _finalizers_1 = tslib.__values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof UnsubscriptionError) {
                                errors = tslib.__spreadArray(tslib.__spreadArray([], tslib.__read(errors)), tslib.__read(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            arrRemove(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());
Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe)));
}
function execFinalizer(finalizer) {
    if (isFunction(finalizer)) {
        finalizer();
    }
    else {
        finalizer.unsubscribe();
    }
}

var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false,
};

var timeoutProvider = {
    setTimeout: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return setTimeout.apply(void 0, tslib.__spreadArray([handler, timeout], tslib.__read(args)));
    },
    clearTimeout: function (handle) {
        return (clearTimeout)(handle);
    },
    delegate: undefined,
};

function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function () {
        {
            throw err;
        }
    });
}

function noop() { }

var Subscriber = (function (_super) {
    tslib.__extends(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (isSubscription(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) ;
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) ;
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) ;
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(Subscription));
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
}
var ConsumerObserver = (function () {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function (value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    ConsumerObserver.prototype.error = function (err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
        else {
            handleUnhandledError(err);
        }
    };
    ConsumerObserver.prototype.complete = function () {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    return ConsumerObserver;
}());
var SafeSubscriber = (function (_super) {
    tslib.__extends(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: (observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined),
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined,
            };
        }
        else {
            var context_1;
            if (_this && config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function () { return _this.unsubscribe(); };
                partialObserver = {
                    next: observerOrNext.next && bind(observerOrNext.next, context_1),
                    error: observerOrNext.error && bind(observerOrNext.error, context_1),
                    complete: observerOrNext.complete && bind(observerOrNext.complete, context_1),
                };
            }
            else {
                partialObserver = observerOrNext;
            }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber));
function handleUnhandledError(error) {
    {
        reportUnhandledError(error);
    }
}
function defaultErrorHandler(err) {
    throw err;
}
var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler,
    complete: noop,
};

function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = (function (_super) {
    tslib.__extends(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext
            ? function (value) {
                try {
                    onNext(value);
                }
                catch (err) {
                    destination.error(err);
                }
            }
            : _super.prototype._next;
        _this._error = onError
            ? function (err) {
                try {
                    onError(err);
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._error;
        _this._complete = onComplete
            ? function () {
                try {
                    onComplete();
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function () {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var closed_1 = this.closed;
            _super.prototype.unsubscribe.call(this);
            !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
    };
    return OperatorSubscriber;
}(Subscriber));

function map(project, thisArg) {
    return operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}

var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
function getRequestLooper(req, options) {
  return new rxjs.Observable((subscriber) => {
    let nextQuery = void 0;
    let subscription = void 0;
    let loadingState = data.LoadingState.Loading;
    let nextRequestDelay = 1;
    let count = 1;
    let shouldCancel = false;
    const observer = {
      next: (rsp) => {
        loadingState = rsp.state;
        let checkstate = false;
        if (loadingState !== data.LoadingState.Error) {
          nextQuery = options.getNextQuery(rsp);
          const _shouldCancel = options.shouldCancel();
          if (nextQuery && _shouldCancel) {
            shouldCancel = _shouldCancel;
            nextQuery = void 0;
          }
          checkstate = true;
        }
        const data$1 = options.process(rsp.data);
        if (checkstate) {
          if (nextQuery) {
            if (data$1.length && data$1[0].length) {
              loadingState = data.LoadingState.Streaming;
            } else {
              loadingState = data.LoadingState.Loading;
            }
            nextRequestDelay = nextRequestDelay * 2 > 10 ? 10 : nextRequestDelay * 2;
          } else {
            loadingState = data.LoadingState.Done;
            nextRequestDelay = 0;
          }
        }
        subscriber.next(__spreadProps$1(__spreadValues$1({}, rsp), { data: data$1, state: loadingState, key: req.requestId }));
      },
      error: (err) => {
        subscriber.error(err);
      },
      complete: () => {
        if (subscription) {
          subscription.unsubscribe();
          subscription = void 0;
        }
        if (nextQuery) {
          const next = nextQuery;
          setTimeout(() => {
            subscription = options.query(__spreadProps$1(__spreadValues$1({}, req), { requestId: `${req.requestId}.${++count}`, targets: [next] })).subscribe(observer);
            nextQuery = void 0;
          }, nextRequestDelay * 1e3);
        } else {
          subscriber.complete();
        }
      }
    };
    subscription = options.query(req).subscribe(observer);
    return function unsubscribe() {
      observer.complete();
      if (nextQuery || shouldCancel) {
        options.onCancel();
      }
      nextQuery = void 0;
    };
  });
}

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
const RUNNING_STATUSES = ["started", "submitted", "running"];
const isRunning = (status = "") => RUNNING_STATUSES.includes(status);
const isCustomMeta = (meta) => {
  return !!(typeof meta === "object" && (meta == null ? void 0 : meta.hasOwnProperty("queryID")) && (meta == null ? void 0 : meta.hasOwnProperty("status")));
};
class DatasourceWithAsyncBackend extends runtime.DataSourceWithBackend {
  constructor(instanceSettings, asyncQueryDataSupport = false) {
    super(instanceSettings);
    this.runningQueries = {};
    this.requestCounter = 100;
    // cancel sets shouldCancel to tell requestLooper to cancel the query
    this.cancel = (target) => {
      this.storeQuery(target, { shouldCancel: true });
    };
    this.asyncQueryDataSupport = asyncQueryDataSupport;
  }
  query(request) {
    if (this.asyncQueryDataSupport) {
      const targets = this.filterQuery ? request.targets.filter(this.filterQuery) : request.targets;
      if (!targets.length) {
        return rxjs.of({ data: [] });
      }
      const all = [];
      for (let target of targets) {
        if (target.hide) {
          continue;
        }
        all.push(this.doSingle(target, request));
      }
      return rxjs.merge(...all);
    } else {
      return super.query(request);
    }
  }
  storeQuery(target, queryInfo) {
    const key = JSON.stringify(target);
    const existingQueryInfo = this.runningQueries[key] || {};
    this.runningQueries[key] = __spreadValues(__spreadValues({}, existingQueryInfo), queryInfo);
  }
  getQuery(target) {
    const key = JSON.stringify(target);
    return this.runningQueries[key] || {};
  }
  removeQuery(target) {
    const key = JSON.stringify(target);
    delete this.runningQueries[key];
  }
  doSingle(target, request) {
    let queryID = void 0;
    let status = void 0;
    let allData = [];
    return getRequestLooper(
      __spreadProps(__spreadValues({}, request), { targets: [target], requestId: `aws_ts_${this.requestCounter++}` }),
      {
        /**
         * Additional query to execute if the current query is still in a running state
         */
        getNextQuery: (rsp) => {
          var _a, _b;
          if ((_a = rsp.data) == null ? void 0 : _a.length) {
            const first = rsp.data[0];
            const meta = (_b = first.meta) == null ? void 0 : _b.custom;
            if (isCustomMeta(meta) && isRunning(meta.status)) {
              queryID = meta.queryID;
              status = meta.status;
              this.storeQuery(target, { queryID });
              return __spreadProps(__spreadValues({}, target), { queryID });
            }
          }
          this.removeQuery(target);
          return void 0;
        },
        /**
         * The original request
         */
        query: (request2) => {
          const { range, targets, requestId, intervalMs, maxDataPoints } = request2;
          const [_query] = targets;
          const query = __spreadValues(__spreadValues({}, _query), this.asyncQueryDataSupport ? { meta: { queryFlow: "async" } } : {});
          const data = {
            queries: [
              __spreadValues(__spreadProps(__spreadValues({}, query), {
                intervalMs,
                maxDataPoints,
                // getRef optionally chained to support < v8.3.x of Grafana
                datasource: this == null ? void 0 : this.getRef(),
                datasourceId: this.id
              }), this.applyTemplateVariables(query, request2.scopedVars))
            ],
            range,
            from: range.from.valueOf().toString(),
            to: range.to.valueOf().toString()
          };
          let headers = {};
          if (isRunning(status)) {
            headers = { "X-Cache-Skip": true };
          }
          const options = {
            method: "POST",
            url: "/api/ds/query",
            data,
            requestId,
            headers
          };
          return runtime.getBackendSrv().fetch(options).pipe(map((result) => ({ data: runtime.toDataQueryResponse(result).data })));
        },
        /**
         * Process the results
         */
        process: (data) => {
          for (const frame of data) {
            if (frame.fields.length > 0) {
              allData.push(frame);
            }
          }
          return allData;
        },
        shouldCancel: () => {
          const { shouldCancel } = this.getQuery(target);
          return !!shouldCancel;
        },
        /**
         * Callback that gets executed when unsubscribed
         */
        onCancel: () => {
          if (queryID) {
            this.removeQuery(target);
            this.postResource("cancel", {
              queryId: queryID
            }).catch((err) => {
              err.isHandled = true;
              console.error(`error cancelling query ID: ${queryID}`, err);
            });
          }
        }
      }
    );
  }
}

const RunQueryButtons = (props) => {
  const { state } = props;
  const [running, setRunning] = React.useState(false);
  const [stopping, setStopping] = React.useState(false);
  const [lastState, setLastState] = React.useState(state);
  const [lastQuery, setLastQuery] = React.useState(props.query);
  React.useEffect(() => {
    if (state && lastState !== state && state !== data.LoadingState.Loading) {
      setRunning(false);
      setStopping(false);
    }
    setLastState(state);
  }, [state, lastState]);
  const onRunQuery = () => {
    setRunning(true);
    setLastQuery(props.query);
    props.onRunQuery();
  };
  const onCancelQuery = props.onCancelQuery ? () => {
    var _a;
    (_a = props.onCancelQuery) == null ? void 0 : _a.call(props, lastQuery);
    setStopping(true);
  } : void 0;
  return /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, /* @__PURE__ */ React__default["default"].createElement(
    ui.Button,
    {
      variant: props.enableRun ? "primary" : "secondary",
      size: "sm",
      onClick: onRunQuery,
      icon: running && !stopping ? "fa fa-spinner" : void 0,
      disabled: state === data.LoadingState.Loading || !props.enableRun
    },
    "Run query"
  ), onCancelQuery && /* @__PURE__ */ React__default["default"].createElement(
    ui.Button,
    {
      variant: running && !stopping ? "primary" : "secondary",
      size: "sm",
      disabled: !running || stopping,
      icon: stopping ? "fa fa-spinner" : void 0,
      onClick: onCancelQuery
    },
    "Stop query"
  ));
};

exports.DatasourceWithAsyncBackend = DatasourceWithAsyncBackend;
exports.RunQueryButtons = RunQueryButtons;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/components/ConnectionConfig.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectionConfig: () => (/* binding */ ConnectionConfig),
/* harmony export */   DEFAULT_LABEL_WIDTH: () => (/* binding */ DEFAULT_LABEL_WIDTH)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldSet.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Button/ButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/ToolbarButton/ToolbarButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Collapse/Collapse.tsx");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-data/src/utils/datasource.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _regions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/regions.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/types.js");
/* harmony import */ var _providers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/providers.js");
/* harmony import */ var _NewConnectionConfig_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/components/NewConnectionConfig.js");
/* harmony import */ var _ConnectionConfig_styles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/components/ConnectionConfig.styles.js");










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
const DEFAULT_LABEL_WIDTH = 28;
const DS_TYPES_THAT_SUPPORT_TEMP_CREDS = ["cloudwatch", "grafana-athena-datasource"];
const toOption = (value) => ({ value, label: value });
const isAwsAuthType = (value) => {
  return typeof value === "string" && _providers_js__WEBPACK_IMPORTED_MODULE_3__.awsAuthProviderOptions.some((opt) => opt.value === value);
};
const ConnectionConfig = (props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const [isARNInstructionsOpen, setIsARNInstructionsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [regions, setRegions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((props.standardRegions || _regions_js__WEBPACK_IMPORTED_MODULE_1__.standardRegions).map(toOption));
  const { loadRegions, onOptionsChange, skipHeader = false, skipEndpoint = false } = props;
  const { labelWidth = DEFAULT_LABEL_WIDTH, options, inExperimentalAuthComponent } = props;
  let profile = options.jsonData.profile;
  if (profile === void 0) {
    profile = options.database;
  }
  const tempCredsFeatureEnabled = _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.config.featureToggles.awsDatasourcesTempCredentials && DS_TYPES_THAT_SUPPORT_TEMP_CREDS.includes(options.type);
  const awsAssumeRoleEnabled = (_a = _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.config.awsAssumeRoleEnabled) != null ? _a : true;
  const awsAllowedAuthProviders = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
    () => _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.config.awsAllowedAuthProviders.filter((provider) => provider === _types_js__WEBPACK_IMPORTED_MODULE_2__.AwsAuthType.GrafanaAssumeRole ? tempCredsFeatureEnabled : true).filter(isAwsAuthType),
    [tempCredsFeatureEnabled]
  );
  const currentProvider = _providers_js__WEBPACK_IMPORTED_MODULE_3__.awsAuthProviderOptions.find((p) => p.value === options.jsonData.authType);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!currentProvider && awsAllowedAuthProviders.length) {
      onOptionsChange(__spreadProps(__spreadValues({}, options), {
        jsonData: __spreadProps(__spreadValues({}, options.jsonData), {
          authType: awsAllowedAuthProviders[0]
        })
      }));
    }
  }, [currentProvider, options, onOptionsChange, awsAllowedAuthProviders]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!loadRegions) {
      return;
    }
    loadRegions().then((regions2) => setRegions(regions2.map(toOption)));
  }, [loadRegions]);
  const inputWidth = inExperimentalAuthComponent ? "width-20" : "width-30";
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, props.newFormStylingEnabled ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _NewConnectionConfig_js__WEBPACK_IMPORTED_MODULE_4__.NewConnectionConfig,
    __spreadValues({
      currentProvider,
      awsAllowedAuthProviders,
      isARNInstructionsOpen,
      setIsARNInstructionsOpen,
      awsAssumeRoleEnabled,
      regions
    }, props)
  ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.FieldSet, { label: skipHeader ? "" : "Connection Details", "data-testid": "connection-config" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineField,
    {
      label: "Authentication Provider",
      labelWidth,
      tooltip: "Specify which AWS credentials chain to use."
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Select,
      {
        "aria-label": "Authentication Provider",
        className: inputWidth,
        value: currentProvider,
        options: _providers_js__WEBPACK_IMPORTED_MODULE_3__.awsAuthProviderOptions.filter((opt) => awsAllowedAuthProviders.includes(opt.value)),
        defaultValue: options.jsonData.authType,
        onChange: (option) => {
          (0,_grafana_data__WEBPACK_IMPORTED_MODULE_10__.onUpdateDatasourceJsonDataOptionSelect)(props, "authType")(option);
        },
        menuShouldPortal: true
      }
    )
  ), options.jsonData.authType === "credentials" && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineField,
    {
      label: "Credentials Profile Name",
      labelWidth,
      tooltip: "Credentials profile name, as specified in ~/.aws/credentials, leave blank for default."
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Input,
      {
        "aria-label": "Credentials Profile Name",
        className: inputWidth,
        placeholder: "default",
        value: profile,
        onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_10__.onUpdateDatasourceJsonDataOption)(props, "profile")
      }
    )
  ), options.jsonData.authType === "keys" && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineField, { label: "Access Key ID", labelWidth }, ((_b = props.options.secureJsonFields) == null ? void 0 : _b.accessKey) ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.ButtonGroup, { className: inputWidth }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Input, { disabled: true, placeholder: "Configured" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.ToolbarButton,
    {
      icon: "edit",
      tooltip: "Edit Access Key ID",
      type: "button",
      onClick: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_10__.onUpdateDatasourceResetOption)(props, "accessKey")
    }
  )) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Input,
    {
      "aria-label": "Access Key ID",
      className: inputWidth,
      value: (_d = (_c = options.secureJsonData) == null ? void 0 : _c.accessKey) != null ? _d : "",
      onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_10__.onUpdateDatasourceSecureJsonDataOption)(props, "accessKey")
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineField, { label: "Secret Access Key", labelWidth }, ((_e = props.options.secureJsonFields) == null ? void 0 : _e.secretKey) ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.ButtonGroup, { className: inputWidth }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Input, { disabled: true, placeholder: "Configured" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.ToolbarButton,
    {
      icon: "edit",
      type: "button",
      tooltip: "Edit Secret Access Key",
      onClick: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_10__.onUpdateDatasourceResetOption)(props, "secretKey")
    }
  )) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Input,
    {
      "aria-label": "Secret Access Key",
      className: inputWidth,
      value: (_g = (_f = options.secureJsonData) == null ? void 0 : _f.secretKey) != null ? _g : "",
      onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_10__.onUpdateDatasourceSecureJsonDataOption)(props, "secretKey")
    }
  ))), options.jsonData.authType === _types_js__WEBPACK_IMPORTED_MODULE_2__.AwsAuthType.GrafanaAssumeRole && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: _ConnectionConfig_styles_js__WEBPACK_IMPORTED_MODULE_5__.assumeRoleInstructionsStyle }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Collapse,
    {
      label: "How to create an IAM role for grafana to assume:",
      collapsible: true,
      isOpen: isARNInstructionsOpen,
      onToggle: () => setIsARNInstructionsOpen(!isARNInstructionsOpen)
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ol", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "1. Create a new IAM role in the AWS console, and select ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "AWS account"), " as the Trusted entity, and select ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "Another AWS account"), " as the account.")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "2. Enter the account ID of the Grafana account that has permission to assume this role:", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, " 008923505280 "), " and check the ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "Require external ID"), " box.")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "3. Enter the following external ID:", " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, props.externalId || "External Id is currently unavailable"), " and click", " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "Next"), ".")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "4. Add any required permissions you would like Grafana to be able to access on your behalf. For more details on our permissions please", " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      "a",
      {
        href: "https://grafana.com/docs/grafana/latest/datasources/aws-cloudwatch/",
        target: "_blank",
        rel: "noreferrer"
      },
      "read through our documentation"
    ), ".")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "5. Give the role a name and description, and click ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "Create role"), ".")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "6. Copy the ARN of the role you just created and paste it into the ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "Assume Role ARN"), " ", "field below.")))
  )), awsAssumeRoleEnabled && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineField,
    {
      label: "Assume Role ARN",
      labelWidth,
      tooltip: "Optionally, specify the ARN of a role to assume. Specifying a role here will ensure that the selected authentication provider is used to assume the specified role rather than using the credentials directly. Leave blank if you don't need to assume a role at all"
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Input,
      {
        "aria-label": "Assume Role ARN",
        className: inputWidth,
        placeholder: "arn:aws:iam:*",
        value: options.jsonData.assumeRoleArn || "",
        onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_10__.onUpdateDatasourceJsonDataOption)(props, "assumeRoleArn")
      }
    )
  ), options.jsonData.authType !== _types_js__WEBPACK_IMPORTED_MODULE_2__.AwsAuthType.GrafanaAssumeRole && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineField,
    {
      label: "External ID",
      labelWidth,
      tooltip: "If you are assuming a role in another account, that has been created with an external ID, specify the external ID here."
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Input,
      {
        "aria-label": "External ID",
        className: inputWidth,
        placeholder: "External ID",
        value: options.jsonData.externalId || "",
        onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_10__.onUpdateDatasourceJsonDataOption)(props, "externalId")
      }
    )
  )), !skipEndpoint && options.jsonData.authType !== _types_js__WEBPACK_IMPORTED_MODULE_2__.AwsAuthType.GrafanaAssumeRole && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineField,
    {
      label: "Endpoint",
      labelWidth,
      tooltip: "Optionally, specify a custom endpoint for the service"
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Input,
      {
        "aria-label": "Endpoint",
        className: inputWidth,
        placeholder: (_h = props.defaultEndpoint) != null ? _h : "https://{service}.{region}.amazonaws.com",
        value: options.jsonData.endpoint || "",
        onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_10__.onUpdateDatasourceJsonDataOption)(props, "endpoint")
      }
    )
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineField,
    {
      label: "Default Region",
      labelWidth,
      tooltip: "Specify the region, such as for US West (Oregon) use ` us-west-2 ` as the region."
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Select,
      {
        "aria-label": "Default Region",
        className: inputWidth,
        value: regions.find((region) => region.value === options.jsonData.defaultRegion),
        options: regions,
        defaultValue: options.jsonData.defaultRegion,
        allowCustomValue: true,
        onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_10__.onUpdateDatasourceJsonDataOptionSelect)(props, "defaultRegion"),
        formatCreateLabel: (r) => `Use region: ${r}`,
        menuShouldPortal: true
      }
    )
  ), props.children));
};


//# sourceMappingURL=ConnectionConfig.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/components/ConnectionConfig.styles.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assumeRoleInstructionsStyle: () => (/* binding */ assumeRoleInstructionsStyle)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");


const assumeRoleInstructionsStyle = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  maxWidth: "715px"
});


//# sourceMappingURL=ConnectionConfig.styles.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/components/Divider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Divider: () => (/* binding */ Divider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Divider/Divider.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _utils_version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/components/utils/version.js");





function Divider() {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();
  if ((0,_utils_version_js__WEBPACK_IMPORTED_MODULE_1__.isVersionGtOrEq)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.buildInfo.version, "10.1.0")) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Divider, null);
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    "div",
    {
      style: { borderTop: `1px solid ${theme.colors.border.weak}`, margin: theme.spacing(2, 0), width: "100%" }
    }
  );
}


//# sourceMappingURL=Divider.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/components/NewConnectionConfig.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewConnectionConfig: () => (/* binding */ NewConnectionConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Button/ButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/ToolbarButton/ToolbarButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Collapse/Collapse.tsx");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/utils/datasource.ts");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/types.js");
/* harmony import */ var _providers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/providers.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/aws-sdk/node_modules/@grafana/experimental/dist/esm/ConfigEditor/ConfigSection/ConfigSection.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/aws-sdk/node_modules/@grafana/experimental/dist/esm/ConfigEditor/ConfigSection/ConfigSubSection.js");
/* harmony import */ var _ConnectionConfig_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/components/ConnectionConfig.styles.js");








var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
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
const NewConnectionConfig = (_a) => {
  var _b = _a, {
    isARNInstructionsOpen,
    setIsARNInstructionsOpen,
    awsAssumeRoleEnabled,
    currentProvider,
    awsAllowedAuthProviders,
    skipHeader,
    regions
  } = _b, props = __objRest(_b, [
    "isARNInstructionsOpen",
    "setIsARNInstructionsOpen",
    "awsAssumeRoleEnabled",
    "currentProvider",
    "awsAllowedAuthProviders",
    "skipHeader",
    "regions"
  ]);
  var _a2, _b2, _c, _d, _e, _f, _g;
  const options = props.options;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "data-testid": "connection-config" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_4__.ConfigSection, { title: skipHeader ? "" : "Connection Details", "data-testid": "connection-config" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_5__.ConfigSubSection, { title: "Authentication" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
    {
      label: "Authentication Provider",
      description: "Specify which AWS credentials chain to use.",
      htmlFor: "authProvider"
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Select,
      {
        id: "authProvider",
        "aria-label": "Authentication Provider",
        value: currentProvider,
        options: _providers_js__WEBPACK_IMPORTED_MODULE_2__.awsAuthProviderOptions.filter((opt) => awsAllowedAuthProviders.includes(opt.value)),
        defaultValue: options.jsonData.authType,
        onChange: (option) => {
          (0,_grafana_data__WEBPACK_IMPORTED_MODULE_8__.onUpdateDatasourceJsonDataOptionSelect)(props, "authType")(option);
        },
        menuShouldPortal: true
      }
    )
  ), options.jsonData.authType === "credentials" && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
    {
      label: "Credentials Profile Name",
      description: "Credentials profile name, as specified in ~/.aws/credentials, leave blank for default.",
      htmlFor: "credentialsProfileName"
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
      {
        id: "credentialsProfileName",
        placeholder: "default",
        value: options.jsonData.profile,
        onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_8__.onUpdateDatasourceJsonDataOption)(props, "profile")
      }
    )
  ), options.jsonData.authType === "keys" && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field, { label: "Access Key ID", htmlFor: "accessKeyId" }, ((_a2 = props.options.secureJsonFields) == null ? void 0 : _a2.accessKey) ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.ButtonGroup, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input, { disabled: true, placeholder: "Configured", id: "accessKeyId" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.ToolbarButton,
    {
      icon: "edit",
      tooltip: "Edit Access Key ID",
      type: "button",
      onClick: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_8__.onUpdateDatasourceResetOption)(props, "accessKey")
    }
  )) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
    {
      id: "accessKeyId",
      value: (_c = (_b2 = options.secureJsonData) == null ? void 0 : _b2.accessKey) != null ? _c : "",
      onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_8__.onUpdateDatasourceSecureJsonDataOption)(props, "accessKey")
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field, { label: "Secret Access Key", htmlFor: "secretKey" }, ((_d = props.options.secureJsonFields) == null ? void 0 : _d.secretKey) ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.ButtonGroup, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input, { disabled: true, placeholder: "Configured" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.ToolbarButton,
    {
      id: "secretKey",
      icon: "edit",
      type: "button",
      tooltip: "Edit Secret Access Key",
      onClick: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_8__.onUpdateDatasourceResetOption)(props, "secretKey")
    }
  )) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
    {
      id: "secretKey",
      value: (_f = (_e = options.secureJsonData) == null ? void 0 : _e.secretKey) != null ? _f : "",
      onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_8__.onUpdateDatasourceSecureJsonDataOption)(props, "secretKey")
    }
  )))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_5__.ConfigSubSection, { title: "Assume Role" }, options.jsonData.authType === _types_js__WEBPACK_IMPORTED_MODULE_1__.AwsAuthType.GrafanaAssumeRole && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: _ConnectionConfig_styles_js__WEBPACK_IMPORTED_MODULE_3__.assumeRoleInstructionsStyle }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Collapse,
    {
      label: "How to create an IAM role for grafana to assume:",
      collapsible: true,
      isOpen: isARNInstructionsOpen,
      onToggle: () => setIsARNInstructionsOpen(!isARNInstructionsOpen)
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ol", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "1. Create a new IAM role in the AWS console, and select ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "Another AWS account"), " as the", " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "Trusted entity"), ".")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "2. Enter the account ID of the Grafana account that has permission to assume this role:", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, " 008923505280 "), " and check the ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "Require external ID"), " box.")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "3. Enter the following external ID:", " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, props.externalId || "External Id is currently unavailable"), " and click", " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "Next"), ".")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "4. Add any required permissions you would like Grafana to be able to access on your behalf. For more details on our permissions please", " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      "a",
      {
        href: "https://grafana.com/docs/grafana/latest/datasources/aws-cloudwatch/",
        target: "_blank",
        rel: "noreferrer"
      },
      "read through our documentation"
    ), ".")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "5. Give the role a name and description, and click ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "Create role"), ".")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "6. Copy the ARN of the role you just created and paste it into the ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "Assume Role ARN"), " ", "field below.")))
  )), awsAssumeRoleEnabled && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
    {
      htmlFor: "assumeRoleArn",
      label: "Assume Role ARN",
      description: "Optional. Specifying the ARN of a role will ensure that the\n                  selected authentication provider is used to assume the role rather than the\n                  credentials directly."
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
      {
        id: "assumeRoleArn",
        placeholder: "arn:aws:iam:*",
        value: options.jsonData.assumeRoleArn || "",
        onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_8__.onUpdateDatasourceJsonDataOption)(props, "assumeRoleArn")
      }
    )
  ), options.jsonData.authType !== _types_js__WEBPACK_IMPORTED_MODULE_1__.AwsAuthType.GrafanaAssumeRole && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
    {
      htmlFor: "externalId",
      label: "External ID",
      description: "If you are assuming a role in another account, that has been created with an external ID, specify the external ID here."
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
      {
        id: "externalId",
        placeholder: "External ID",
        value: options.jsonData.externalId || "",
        onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_8__.onUpdateDatasourceJsonDataOption)(props, "externalId")
      }
    )
  ))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_5__.ConfigSubSection, { title: "Additional Settings" }, !props.skipEndpoint && options.jsonData.authType !== _types_js__WEBPACK_IMPORTED_MODULE_1__.AwsAuthType.GrafanaAssumeRole && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
    {
      label: "Endpoint",
      description: "Optionally, specify a custom endpoint for the service",
      htmlFor: "endpoint"
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
      {
        id: "endpoint",
        placeholder: (_g = props.defaultEndpoint) != null ? _g : "https://{service}.{region}.amazonaws.com",
        value: options.jsonData.endpoint || "",
        onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_8__.onUpdateDatasourceJsonDataOption)(props, "endpoint")
      }
    )
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
    {
      label: "Default Region",
      description: "Specify the region, such as for US West (Oregon) use ` us-west-2 ` as the region.",
      htmlFor: "defaultRegion"
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Select,
      {
        id: "defaultRegion",
        "aria-label": "Default Region",
        value: regions.find((region) => region.value === options.jsonData.defaultRegion),
        options: regions,
        defaultValue: options.jsonData.defaultRegion,
        allowCustomValue: true,
        onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_8__.onUpdateDatasourceJsonDataOptionSelect)(props, "defaultRegion"),
        formatCreateLabel: (r) => `Use region: ${r}`,
        menuShouldPortal: true
      }
    )
  )), props.children));
};


//# sourceMappingURL=NewConnectionConfig.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/components/SIGV4ConnectionConfig.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SIGV4ConnectionConfig: () => (/* binding */ SIGV4ConnectionConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ConnectionConfig_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/components/ConnectionConfig.js");



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
const SIGV4ConnectionConfig = (props) => {
  var _a, _b, _c, _d;
  const { onOptionsChange, options } = props;
  const connectionConfigProps = {
    onOptionsChange: (awsDataSourceSettings) => {
      var _a2, _b2, _c2, _d2;
      const dataSourceSettings = __spreadProps(__spreadValues({}, options), {
        jsonData: __spreadProps(__spreadValues({}, options.jsonData), {
          sigV4AuthType: awsDataSourceSettings.jsonData.authType,
          sigV4Profile: awsDataSourceSettings.jsonData.profile,
          sigV4AssumeRoleArn: awsDataSourceSettings.jsonData.assumeRoleArn,
          sigV4ExternalId: awsDataSourceSettings.jsonData.externalId,
          sigV4Region: awsDataSourceSettings.jsonData.defaultRegion,
          sigV4Endpoint: awsDataSourceSettings.jsonData.endpoint
        }),
        secureJsonFields: {
          sigV4AccessKey: (_a2 = awsDataSourceSettings.secureJsonFields) == null ? void 0 : _a2.accessKey,
          sigV4SecretKey: (_b2 = awsDataSourceSettings.secureJsonFields) == null ? void 0 : _b2.secretKey
        },
        secureJsonData: {
          sigV4AccessKey: (_c2 = awsDataSourceSettings.secureJsonData) == null ? void 0 : _c2.accessKey,
          sigV4SecretKey: (_d2 = awsDataSourceSettings.secureJsonData) == null ? void 0 : _d2.secretKey
        }
      });
      onOptionsChange(dataSourceSettings);
    },
    options: __spreadProps(__spreadValues({}, options), {
      jsonData: __spreadProps(__spreadValues({}, options.jsonData), {
        authType: options.jsonData.sigV4AuthType,
        profile: options.jsonData.sigV4Profile,
        assumeRoleArn: options.jsonData.sigV4AssumeRoleArn,
        externalId: options.jsonData.sigV4ExternalId,
        defaultRegion: options.jsonData.sigV4Region,
        endpoint: options.jsonData.sigV4Endpoint
      }),
      secureJsonFields: {
        accessKey: (_a = options.secureJsonFields) == null ? void 0 : _a.sigV4AccessKey,
        secretKey: (_b = options.secureJsonFields) == null ? void 0 : _b.sigV4SecretKey
      },
      secureJsonData: {
        accessKey: (_c = options.secureJsonData) == null ? void 0 : _c.sigV4AccessKey,
        secretKey: (_d = options.secureJsonData) == null ? void 0 : _d.sigV4SecretKey
      }
    }),
    inExperimentalAuthComponent: props.inExperimentalAuthComponent
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "gf-form" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "SigV4 Auth Details")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ConnectionConfig_js__WEBPACK_IMPORTED_MODULE_1__.ConnectionConfig, __spreadProps(__spreadValues({}, connectionConfigProps), { skipHeader: true, skipEndpoint: true })));
};


//# sourceMappingURL=SIGV4ConnectionConfig.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/components/utils/version.js":
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


//# sourceMappingURL=version.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AwsAuthType: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_11__.AwsAuthType),
/* harmony export */   ConfigSelect: () => (/* reexport safe */ _sql_ConfigEditor_ConfigSelect_js__WEBPACK_IMPORTED_MODULE_3__.ConfigSelect),
/* harmony export */   ConnectionConfig: () => (/* reexport safe */ _components_ConnectionConfig_js__WEBPACK_IMPORTED_MODULE_0__.ConnectionConfig),
/* harmony export */   DEFAULT_LABEL_WIDTH: () => (/* reexport safe */ _components_ConnectionConfig_js__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_LABEL_WIDTH),
/* harmony export */   Divider: () => (/* reexport safe */ _components_Divider_js__WEBPACK_IMPORTED_MODULE_1__.Divider),
/* harmony export */   FillValueOptions: () => (/* reexport safe */ _sql_QueryEditor_FillValueSelect_js__WEBPACK_IMPORTED_MODULE_9__.FillValueOptions),
/* harmony export */   FillValueSelect: () => (/* reexport safe */ _sql_QueryEditor_FillValueSelect_js__WEBPACK_IMPORTED_MODULE_9__.FillValueSelect),
/* harmony export */   FormatSelect: () => (/* reexport safe */ _sql_QueryEditor_FormatSelect_js__WEBPACK_IMPORTED_MODULE_8__.FormatSelect),
/* harmony export */   InlineInput: () => (/* reexport safe */ _sql_ConfigEditor_InlineInput_js__WEBPACK_IMPORTED_MODULE_4__.InlineInput),
/* harmony export */   QueryCodeEditor: () => (/* reexport safe */ _sql_QueryEditor_QueryCodeEditor_js__WEBPACK_IMPORTED_MODULE_6__.QueryCodeEditor),
/* harmony export */   QueryEditorHeader: () => (/* reexport safe */ _sql_QueryEditor_QueryEditorHeader_js__WEBPACK_IMPORTED_MODULE_7__.QueryEditorHeader),
/* harmony export */   ResourceSelector: () => (/* reexport safe */ _sql_ResourceSelector_js__WEBPACK_IMPORTED_MODULE_5__.ResourceSelector),
/* harmony export */   SIGV4ConnectionConfig: () => (/* reexport safe */ _components_SIGV4ConnectionConfig_js__WEBPACK_IMPORTED_MODULE_2__.SIGV4ConnectionConfig),
/* harmony export */   appendTemplateVariablesAsSuggestions: () => (/* reexport safe */ _sql_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.appendTemplateVariablesAsSuggestions),
/* harmony export */   applySQLTemplateVariables: () => (/* reexport safe */ _sql_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.applySQLTemplateVariables),
/* harmony export */   awsAuthProviderOptions: () => (/* reexport safe */ _providers_js__WEBPACK_IMPORTED_MODULE_13__.awsAuthProviderOptions),
/* harmony export */   filterSQLQuery: () => (/* reexport safe */ _sql_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.filterSQLQuery),
/* harmony export */   standardRegions: () => (/* reexport safe */ _regions_js__WEBPACK_IMPORTED_MODULE_12__.standardRegions)
/* harmony export */ });
/* harmony import */ var _components_ConnectionConfig_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/components/ConnectionConfig.js");
/* harmony import */ var _components_Divider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/components/Divider.js");
/* harmony import */ var _components_SIGV4ConnectionConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/components/SIGV4ConnectionConfig.js");
/* harmony import */ var _sql_ConfigEditor_ConfigSelect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/sql/ConfigEditor/ConfigSelect.js");
/* harmony import */ var _sql_ConfigEditor_InlineInput_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/sql/ConfigEditor/InlineInput.js");
/* harmony import */ var _sql_ResourceSelector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/sql/ResourceSelector.js");
/* harmony import */ var _sql_QueryEditor_QueryCodeEditor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/sql/QueryEditor/QueryCodeEditor.js");
/* harmony import */ var _sql_QueryEditor_QueryEditorHeader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/sql/QueryEditor/QueryEditorHeader.js");
/* harmony import */ var _sql_QueryEditor_FormatSelect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/sql/QueryEditor/FormatSelect.js");
/* harmony import */ var _sql_QueryEditor_FillValueSelect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/sql/QueryEditor/FillValueSelect.js");
/* harmony import */ var _sql_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/sql/utils/utils.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/types.js");
/* harmony import */ var _regions_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/regions.js");
/* harmony import */ var _providers_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/providers.js");














//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/providers.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   awsAuthProviderOptions: () => (/* binding */ awsAuthProviderOptions)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/types.js");


const awsAuthProviderOptions = [
  {
    label: "Workspace IAM Role",
    value: _types_js__WEBPACK_IMPORTED_MODULE_0__.AwsAuthType.EC2IAMRole
  },
  {
    label: "Grafana Assume Role",
    value: _types_js__WEBPACK_IMPORTED_MODULE_0__.AwsAuthType.GrafanaAssumeRole
  },
  {
    label: "AWS SDK Default",
    value: _types_js__WEBPACK_IMPORTED_MODULE_0__.AwsAuthType.Default
  },
  {
    label: "Access & secret key",
    value: _types_js__WEBPACK_IMPORTED_MODULE_0__.AwsAuthType.Keys
  },
  {
    label: "Credentials file",
    value: _types_js__WEBPACK_IMPORTED_MODULE_0__.AwsAuthType.Credentials
  }
];


//# sourceMappingURL=providers.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/regions.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   standardRegions: () => (/* binding */ standardRegions)
/* harmony export */ });
const standardRegions = [
  "af-south-1",
  "ap-east-1",
  "ap-northeast-1",
  "ap-northeast-2",
  "ap-northeast-3",
  "ap-south-1",
  "ap-southeast-1",
  "ap-southeast-2",
  "ca-central-1",
  "cn-north-1",
  "cn-northwest-1",
  "eu-central-1",
  "eu-north-1",
  "eu-west-1",
  "eu-west-2",
  "eu-west-3",
  "me-south-1",
  "sa-east-1",
  "us-east-1",
  "us-east-2",
  "us-gov-east-1",
  "us-gov-west-1",
  "us-iso-east-1",
  "us-isob-east-1",
  "us-west-1",
  "us-west-2"
];


//# sourceMappingURL=regions.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/sql/ConfigEditor/ConfigSelect.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigSelect: () => (/* binding */ ConfigSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ResourceSelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/sql/ResourceSelector.js");
/* harmony import */ var _components_ConnectionConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/components/ConnectionConfig.js");




var __defProp = Object.defineProperty;
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
function ConfigSelect(props) {
  var _a, _b, _c;
  const { jsonData } = props.options;
  const commonProps = {
    title: jsonData.defaultRegion ? "" : "select a default region",
    labelWidth: (_a = props.labelWidth) != null ? _a : _components_ConnectionConfig_js__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_LABEL_WIDTH,
    className: "width-30"
  };
  const dependencies = [
    props.options.jsonData.assumeRoleArn,
    props.options.jsonData.authType,
    props.options.jsonData.defaultRegion,
    props.options.jsonData.endpoint,
    props.options.jsonData.externalId,
    props.options.jsonData.profile,
    (_b = props.options.secureJsonData) == null ? void 0 : _b.accessKey,
    (_c = props.options.secureJsonData) == null ? void 0 : _c.secretKey
  ].concat(props.dependencies);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _ResourceSelector_js__WEBPACK_IMPORTED_MODULE_1__.ResourceSelector,
    __spreadValues({
      id: props.id,
      newFormStylingEnabled: props.newFormStylingEnabled,
      label: props.label,
      "data-testid": props["data-testid"],
      onChange: props.onChange,
      fetch: props.fetch,
      value: props.value,
      saveOptions: props.saveOptions,
      dependencies,
      hidden: props.hidden,
      disabled: props.disabled || !jsonData.defaultRegion,
      allowCustomValue: props.allowCustomValue,
      autoFocus: props.autoFocus,
      backspaceRemovesValue: props.backspaceRemovesValue,
      invalid: props.invalid,
      isClearable: props.isClearable,
      isMulti: props.isMulti,
      inputId: props.inputId,
      showAllSelectedWhenOpen: props.showAllSelectedWhenOpen,
      maxMenuHeight: props.maxMenuHeight,
      minMenuHeight: props.minMenuHeight,
      maxVisibleValues: props.maxVisibleValues,
      menuPlacement: props.menuPlacement,
      menuPosition: props.menuPosition,
      noOptionsMessage: props.noOptionsMessage,
      onBlur: props.onBlur,
      onCreateOption: props.onCreateOption,
      onInputChange: props.onInputChange,
      placeholder: props.placeholder,
      width: props.width,
      isOptionDisabled: props.isOptionDisabled
    }, commonProps)
  );
}


//# sourceMappingURL=ConfigSelect.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/sql/ConfigEditor/InlineInput.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineInput: () => (/* binding */ InlineInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _components_ConnectionConfig_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/components/ConnectionConfig.js");




function InlineInput(props) {
  var _a;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField,
    {
      label: props.label,
      labelWidth: (_a = props.labelWidth) != null ? _a : _components_ConnectionConfig_js__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_LABEL_WIDTH,
      tooltip: props.tooltip,
      hidden: props.hidden,
      disabled: props.disabled
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input,
      {
        "data-testid": props["data-testid"],
        className: "width-30",
        value: props.value,
        onChange: props.onChange,
        placeholder: props.placeholder,
        disabled: props.disabled
      }
    )
  );
}


//# sourceMappingURL=InlineInput.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/sql/QueryEditor/FillValueSelect.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FillValueOptions: () => (/* binding */ FillValueOptions),
/* harmony export */   FillValueSelect: () => (/* binding */ FillValueSelect),
/* harmony export */   SelectableFillValueOptions: () => (/* binding */ SelectableFillValueOptions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/aws-sdk/node_modules/@grafana/experimental/dist/esm/QueryEditor/EditorField.js");




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
var FillValueOptions = /* @__PURE__ */ ((FillValueOptions2) => {
  FillValueOptions2[FillValueOptions2["Previous"] = 0] = "Previous";
  FillValueOptions2[FillValueOptions2["Null"] = 1] = "Null";
  FillValueOptions2[FillValueOptions2["Value"] = 2] = "Value";
  return FillValueOptions2;
})(FillValueOptions || {});
const SelectableFillValueOptions = [
  {
    label: "Previous Value",
    value: 0 /* Previous */
  },
  {
    label: "NULL",
    value: 1 /* Null */
  },
  {
    label: "Value",
    value: 2 /* Value */
  }
];
function FillValueSelect(props) {
  var _a, _b, _c, _d, _e, _f;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, props.newFormStylingEnabled ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, { label: "Fill with", tooltip: "value to fill missing points", htmlFor: "fillWith" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select,
    {
      id: "fillWith",
      "aria-label": "Fill with",
      "data-testid": "table-fill-with-select",
      options: SelectableFillValueOptions,
      value: (_b = (_a = props.query.fillMode) == null ? void 0 : _a.mode) != null ? _b : 0 /* Previous */,
      onChange: ({ value }) => {
        var _a2;
        props.onChange(__spreadProps(__spreadValues({}, props.query), {
          fillMode: __spreadProps(__spreadValues({}, props.query.fillMode), { mode: value })
        }));
        (_a2 = props.onRunQuery) == null ? void 0 : _a2.call(props);
      },
      menuShouldPortal: true
    }
  )), ((_c = props.query.fillMode) == null ? void 0 : _c.mode) === 2 /* Value */ && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, { label: "Value", htmlFor: "valueToFill", width: 6 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input,
    {
      id: "valueToFill",
      "aria-label": "Value",
      type: "number",
      value: props.query.fillMode.value,
      onChange: ({ currentTarget }) => props.onChange(__spreadProps(__spreadValues({}, props.query), {
        fillMode: {
          mode: 2 /* Value */,
          value: currentTarget.valueAsNumber
        }
      })),
      onBlur: () => {
        var _a2;
        return (_a2 = props.onRunQuery) == null ? void 0 : _a2.call(props);
      }
    }
  ))) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, { label: "Fill value", tooltip: "value to fill missing points" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select,
    {
      "aria-label": "Fill value",
      options: SelectableFillValueOptions,
      value: (_e = (_d = props.query.fillMode) == null ? void 0 : _d.mode) != null ? _e : 0 /* Previous */,
      onChange: ({ value }) => {
        var _a2;
        props.onChange(__spreadProps(__spreadValues({}, props.query), {
          fillMode: __spreadProps(__spreadValues({}, props.query.fillMode), { mode: value })
        }));
        (_a2 = props.onRunQuery) == null ? void 0 : _a2.call(props);
      },
      className: "width-12",
      menuShouldPortal: true
    }
  )), ((_f = props.query.fillMode) == null ? void 0 : _f.mode) === 2 /* Value */ && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, { label: "Value", labelWidth: 11 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input,
    {
      type: "number",
      "aria-label": "Value",
      value: props.query.fillMode.value,
      onChange: ({ currentTarget }) => props.onChange(__spreadProps(__spreadValues({}, props.query), {
        fillMode: {
          mode: 2 /* Value */,
          value: currentTarget.valueAsNumber
        }
      })),
      onBlur: () => {
        var _a2;
        return (_a2 = props.onRunQuery) == null ? void 0 : _a2.call(props);
      }
    }
  ))));
}


//# sourceMappingURL=FillValueSelect.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/sql/QueryEditor/FormatSelect.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormatSelect: () => (/* binding */ FormatSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");



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
function FormatSelect(props) {
  var _a;
  const onChangeFormat = (e) => {
    var _a2;
    props.onChange(__spreadProps(__spreadValues({}, props.query), {
      format: e.value || 0
    }));
    (_a2 = props.onRunQuery) == null ? void 0 : _a2.call(props);
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, props.newFormStylingEnabled ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select,
    {
      "aria-label": "Format data frames as",
      id: (_a = props.id) != null ? _a : "formatAs",
      options: props.options,
      value: props.query.format,
      onChange: onChangeFormat,
      menuShouldPortal: true
    }
  ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, { label: "Format as", labelWidth: 11 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select,
    {
      "aria-label": "Format as",
      options: props.options,
      value: props.query.format,
      onChange: onChangeFormat,
      className: "width-12",
      menuShouldPortal: true
    }
  )));
}


//# sourceMappingURL=FormatSelect.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/sql/QueryEditor/QueryCodeEditor.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryCodeEditor: () => (/* binding */ QueryCodeEditor)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");




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
function QueryCodeEditor(props) {
  const { getSuggestions, query } = props;
  const { rawSQL } = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.defaults)(props.query, { rawSQL: "" });
  const onRawSqlChange = (rawSQL2) => {
    const query2 = __spreadProps(__spreadValues({}, props.query), {
      rawSQL: rawSQL2
    });
    props.onChange(query2);
    props.onRunQuery();
  };
  const suggestionsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    suggestionsRef.current = getSuggestions(query);
  }, [getSuggestions, query]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.CodeEditor,
    __spreadValues({
      language: props.language,
      value: rawSQL,
      onBlur: onRawSqlChange,
      showMiniMap: false,
      showLineNumbers: true,
      getSuggestions: () => suggestionsRef.current,
      height: "240px"
    }, props.editorProps)
  );
}


//# sourceMappingURL=QueryCodeEditor.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/sql/QueryEditor/QueryEditorHeader.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryEditorHeader: () => (/* binding */ QueryEditorHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/aws-sdk/node_modules/@grafana/experimental/dist/esm/QueryEditor/EditorHeader.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/aws-sdk/node_modules/@grafana/experimental/dist/esm/QueryEditor/FlexItem.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_async_query_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/index.js");






function QueryEditorHeader({
  query,
  showAsyncQueryButtons,
  extraHeaderElementLeft,
  extraHeaderElementRight,
  enableRunButton,
  onRunQuery,
  data,
  cancel
}) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorHeader, null, extraHeaderElementLeft, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.FlexItem, { grow: 1 }), showAsyncQueryButtons ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_async_query_data__WEBPACK_IMPORTED_MODULE_1__.RunQueryButtons,
    {
      onRunQuery,
      enableRun: enableRunButton,
      query,
      onCancelQuery: cancel,
      state: data == null ? void 0 : data.state
    }
  ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button,
    {
      variant: enableRunButton ? "primary" : "secondary",
      size: "sm",
      onClick: onRunQuery,
      icon: (data == null ? void 0 : data.state) === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.LoadingState.Loading ? "fa fa-spinner" : void 0,
      disabled: (data == null ? void 0 : data.state) === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.LoadingState.Loading || !enableRunButton
    },
    "Run queries"
  ), extraHeaderElementRight);
}


//# sourceMappingURL=QueryEditorHeader.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/sql/ResourceSelector.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourceSelector: () => (/* binding */ ResourceSelector)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/sql/types.js");





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
function ResourceSelector(props) {
  const propsDependencies = props.dependencies;
  const propsOnChange = props.onChange;
  const dependencies = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(props.dependencies);
  const fetched = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  const resource = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(props.value || props.default || null);
  const [resources, setResources] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(
    resource.current ? [resource.current] : []
  );
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const defaultOpts = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const opts = [
      {
        label: `default (${props.default})`,
        value: _types_js__WEBPACK_IMPORTED_MODULE_2__.defaultKey,
        description: `Default value set in the data source`
      }
    ];
    if (props.value && props.value !== _types_js__WEBPACK_IMPORTED_MODULE_2__.defaultKey) {
      opts.push({ label: props.value, value: props.value });
    }
    return opts;
  }, [props.default, props.value]);
  const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.default ? defaultOpts : []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (props.resources !== void 0) {
      setResources(props.resources);
    }
  }, [props.resources]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const newOptions = props.default ? defaultOpts : [];
    if (resources.length) {
      resources.forEach((r) => {
        const value = typeof r === "string" ? r : r.value;
        if (!newOptions.find((o) => o.value === value)) {
          typeof r === "string" ? newOptions.push({ label: r, value: r }) : newOptions.push(r);
        }
      });
      setOptions(newOptions);
    } else {
      setOptions([]);
    }
  }, [resources, defaultOpts, props.default]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(propsDependencies, dependencies.current)) {
      fetched.current = false;
      resource.current = null;
      dependencies.current = propsDependencies;
      propsOnChange(null);
    }
  }, [propsDependencies, propsOnChange]);
  const fetch = async () => {
    var _a;
    if (fetched.current) {
      return;
    }
    if (props.saveOptions) {
      await props.saveOptions();
    }
    try {
      const resources2 = await ((_a = props.fetch) == null ? void 0 : _a.call(props)) || [];
      setResources(resources2);
    } finally {
      fetched.current = true;
    }
  };
  const onChange = (e) => {
    propsOnChange(e);
    if (e.value) {
      resource.current = e.value;
    }
  };
  const onClick = async () => {
    setIsLoading(true);
    try {
      await fetch();
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, props.newFormStylingEnabled ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select,
    __spreadProps(__spreadValues({}, props), {
      id: props.id,
      "aria-label": props.label,
      options,
      onChange,
      isLoading,
      className: props.className || "min-width-6",
      onOpenMenu: () => props.fetch && onClick(),
      menuShouldPortal: true
    })
  ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField,
    {
      label: props.label,
      labelWidth: props.labelWidth,
      tooltip: props.tooltip,
      hidden: props.hidden,
      htmlFor: props.id
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "data-testid": props["data-testid"], title: props.title }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select,
      __spreadProps(__spreadValues({}, props), {
        id: props.id,
        "aria-label": props.label,
        options,
        onChange,
        isLoading,
        className: props.className || "min-width-6",
        onOpenMenu: () => props.fetch && onClick(),
        menuShouldPortal: true
      })
    ))
  ));
}


//# sourceMappingURL=ResourceSelector.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/sql/types.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultKey: () => (/* binding */ defaultKey)
/* harmony export */ });
const defaultKey = "__default";


//# sourceMappingURL=types.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/sql/utils/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendTemplateVariablesAsSuggestions: () => (/* binding */ appendTemplateVariablesAsSuggestions),
/* harmony export */   applySQLTemplateVariables: () => (/* binding */ applySQLTemplateVariables),
/* harmony export */   filterSQLQuery: () => (/* binding */ filterSQLQuery)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/types.ts");


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
function filterSQLQuery(query) {
  return !!query.rawSQL;
}
function applySQLTemplateVariables(query, scopedVars, getTemplateSrv) {
  const templateSrv = getTemplateSrv();
  return __spreadProps(__spreadValues({}, query), {
    rawSQL: templateSrv.replace(query.rawSQL, scopedVars, interpolateVariable)
  });
}
function interpolateVariable(value) {
  if (typeof value === "string" || typeof value === "number") {
    return value;
  }
  const quotedValues = value.map((v) => {
    return quoteLiteral(v);
  });
  return quotedValues.join(",");
}
function quoteLiteral(value) {
  return "'" + String(value).replace(/'/g, "''") + "'";
}
const appendTemplateVariablesAsSuggestions = (getTemplateSrv, sugs) => {
  const templateSrv = getTemplateSrv();
  const templateSugs = [];
  templateSrv.getVariables().forEach((variable) => {
    const label = "$" + variable.name;
    let val = templateSrv.replace(label);
    if (val === label) {
      val = "";
    }
    templateSugs.push({
      label,
      kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_0__.CodeEditorSuggestionItemKind.Text,
      detail: `(Template Variable) ${val}`
    });
  });
  return sugs.concat(templateSugs);
};


//# sourceMappingURL=utils.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/types.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AwsAuthType: () => (/* binding */ AwsAuthType)
/* harmony export */ });
var AwsAuthType = /* @__PURE__ */ ((AwsAuthType2) => {
  AwsAuthType2["Keys"] = "keys";
  AwsAuthType2["Credentials"] = "credentials";
  AwsAuthType2["Default"] = "default";
  AwsAuthType2["EC2IAMRole"] = "ec2_iam_role";
  AwsAuthType2["ARN"] = "arn";
  AwsAuthType2["GrafanaAssumeRole"] = "grafana_assume_role";
  return AwsAuthType2;
})(AwsAuthType || {});


//# sourceMappingURL=types.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/node_modules/@grafana/experimental/dist/esm/ConfigEditor/ConfigSection/ConfigSection.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigSection: () => (/* binding */ ConfigSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GenericConfigSection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/aws-sdk/node_modules/@grafana/experimental/dist/esm/ConfigEditor/ConfigSection/GenericConfigSection.js");



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
const ConfigSection = (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_GenericConfigSection_js__WEBPACK_IMPORTED_MODULE_1__.GenericConfigSection, __spreadProps(__spreadValues({}, props), { kind: "section" }), children);
};


//# sourceMappingURL=ConfigSection.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/node_modules/@grafana/experimental/dist/esm/ConfigEditor/ConfigSection/ConfigSubSection.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigSubSection: () => (/* binding */ ConfigSubSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GenericConfigSection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/aws-sdk/node_modules/@grafana/experimental/dist/esm/ConfigEditor/ConfigSection/GenericConfigSection.js");



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
const ConfigSubSection = (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_GenericConfigSection_js__WEBPACK_IMPORTED_MODULE_1__.GenericConfigSection, __spreadProps(__spreadValues({}, props), { kind: "sub-section" }), children);
};


//# sourceMappingURL=ConfigSubSection.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/node_modules/@grafana/experimental/dist/esm/ConfigEditor/ConfigSection/GenericConfigSection.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericConfigSection: () => (/* binding */ GenericConfigSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");




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
const GenericConfigSection = ({
  children,
  title,
  description,
  isCollapsible = false,
  isInitiallyOpen = true,
  kind = "section",
  className
}) => {
  const { colors, typography, spacing } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isCollapsible ? isInitiallyOpen : true);
  const iconName = isOpen ? "angle-up" : "angle-down";
  const isSubSection = kind === "sub-section";
  const collapsibleButtonAriaLabel = `${isOpen ? "Collapse" : "Expand"} section ${title}`;
  const styles = {
    header: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }),
    title: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      margin: 0
    }),
    subtitle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      margin: 0,
      fontWeight: typography.fontWeightRegular
    }),
    descriptionText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)(__spreadProps(__spreadValues({
      marginTop: spacing(isSubSection ? 0.25 : 0.5),
      marginBottom: 0
    }, typography.bodySmall), {
      color: colors.text.secondary
    })),
    content: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginTop: spacing(2)
    })
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.header }, kind === "section" ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: styles.title }, title) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", { className: styles.subtitle }, title), isCollapsible && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton,
    {
      name: iconName,
      onClick: () => setIsOpen(!isOpen),
      type: "button",
      size: "xl",
      "aria-label": collapsibleButtonAriaLabel
    }
  )), description && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: styles.descriptionText }, description), isOpen && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.content }, children));
};


//# sourceMappingURL=GenericConfigSection.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/node_modules/@grafana/experimental/dist/esm/QueryEditor/EditorField.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorField: () => (/* binding */ EditorField)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Space_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/aws-sdk/node_modules/@grafana/experimental/dist/esm/QueryEditor/Space.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/utils/reactUtils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");





var __defProp = Object.defineProperty;
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
const EditorField = (props) => {
  var _b;
  const _a = props, { label, optional, tooltip, tooltipInteractive, children, width } = _a, fieldProps = __objRest(_a, ["label", "optional", "tooltip", "tooltipInteractive", "children", "width"]);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)((0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((theme) => getStyles(theme, width), [width]));
  const childInputId = (fieldProps == null ? void 0 : fieldProps.htmlFor) || ((_b = _grafana_ui__WEBPACK_IMPORTED_MODULE_3__) == null ? void 0 : _b.getChildId(children));
  const labelEl = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { className: styles.label, htmlFor: childInputId }, label, optional && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: styles.optional }, " - optional"), tooltip && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip, { placement: "top", content: tooltip, theme: "info", interactive: tooltipInteractive }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { tabIndex: 0, name: "info-circle", size: "sm", className: styles.icon }))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Space_js__WEBPACK_IMPORTED_MODULE_6__.Space, { v: 0.5 }));
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: styles.root }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field, __spreadValues({ className: styles.field, label: labelEl }, fieldProps), children));
};
const getStyles = (theme, width) => {
  return {
    root: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      minWidth: theme.spacing(width != null ? width : 0)
    }),
    label: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      fontSize: 12,
      fontWeight: theme.typography.fontWeightMedium
    }),
    optional: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      fontStyle: "italic",
      color: theme.colors.text.secondary
    }),
    field: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      marginBottom: 0
      // GrafanaUI/Field has a bottom margin which we must remove
    }),
    icon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      color: theme.colors.text.secondary,
      marginLeft: theme.spacing(1),
      ":hover": {
        color: theme.colors.text.primary
      }
    })
  };
};


//# sourceMappingURL=EditorField.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/node_modules/@grafana/experimental/dist/esm/QueryEditor/EditorHeader.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/@grafana/aws-sdk/node_modules/@grafana/experimental/dist/esm/QueryEditor/FlexItem.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/@grafana/aws-sdk/node_modules/@grafana/experimental/dist/esm/QueryEditor/Space.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Space: () => (/* binding */ Space)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");




const Space = (props) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)((0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((theme) => getStyles(theme, props), [props]));
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.wrapper) });
};
Space.defaultProps = {
  v: 0,
  h: 0,
  layout: "block"
};
const getStyles = (theme, props) => {
  var _a, _b;
  return {
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)([
      {
        paddingRight: theme.spacing((_a = props.h) != null ? _a : 0),
        paddingBottom: theme.spacing((_b = props.v) != null ? _b : 0)
      },
      props.layout === "inline" && {
        display: "inline-block"
      },
      props.layout === "block" && {
        display: "block"
      }
    ])
  };
};


//# sourceMappingURL=Space.js.map


/***/ }),

/***/ "./public/app/plugins/datasource/alertmanager/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigEditor: () => (/* binding */ ConfigEditor)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/immer/dist/immer.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _grafana_aws_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/DataSourceSettings/DataSourceHttpSettings.tsx");
/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");








const IMPL_OPTIONS = [
  {
    value: _types__WEBPACK_IMPORTED_MODULE_3__.AlertManagerImplementation.mimir,
    label: "Mimir",
    description: "https://grafana.com/oss/mimir/. An open source, horizontally scalable, highly available, multi-tenant, long-term storage for Prometheus."
  },
  {
    value: _types__WEBPACK_IMPORTED_MODULE_3__.AlertManagerImplementation.cortex,
    label: "Cortex",
    description: "https://cortexmetrics.io/"
  },
  {
    value: _types__WEBPACK_IMPORTED_MODULE_3__.AlertManagerImplementation.prometheus,
    label: "Prometheus",
    description: "https://prometheus.io/. Does not support editing configuration via API, so contact points and notification policies are read-only."
  }
];
const ConfigEditor = (props) => {
  var _a;
  const { options, onOptionsChange } = props;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!options.jsonData.implementation) {
      onOptionsChange(
        (0,immer__WEBPACK_IMPORTED_MODULE_4__.produce)(options, (draft) => {
          draft.jsonData.implementation = _types__WEBPACK_IMPORTED_MODULE_3__.AlertManagerImplementation.mimir;
        })
      );
    }
  }, [options, onOptionsChange]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "page-heading" }, "Alertmanager"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Box, { marginBottom: 5 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineField, { label: "Implementation", labelWidth: 26 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Select,
    {
      width: 40,
      options: IMPL_OPTIONS,
      value: options.jsonData.implementation || _types__WEBPACK_IMPORTED_MODULE_3__.AlertManagerImplementation.mimir,
      onChange: (value) => onOptionsChange({
        ...options,
        jsonData: {
          ...options.jsonData,
          implementation: value.value
        }
      })
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineField,
    {
      label: "Receive Grafana Alerts",
      tooltip: "When enabled, Grafana-managed alerts are sent to this Alertmanager.",
      labelWidth: 26
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineSwitch,
      {
        value: (_a = options.jsonData.handleGrafanaManagedAlerts) != null ? _a : false,
        onChange: (e) => {
          onOptionsChange(
            (0,immer__WEBPACK_IMPORTED_MODULE_4__.produce)(options, (draft) => {
              draft.jsonData.handleGrafanaManagedAlerts = e.currentTarget.checked;
            })
          );
        }
      }
    )
  ), options.jsonData.handleGrafanaManagedAlerts && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Text, { variant: "bodySmall", color: "secondary" }, "Make sure to enable the alert forwarding on the ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, { to: "/alerting/admin" }, "settings page"), ".")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.DataSourceHttpSettings,
    {
      defaultUrl: "",
      dataSourceConfig: options,
      showAccessOptions: true,
      onChange: onOptionsChange,
      sigV4AuthToggleEnabled: _core_config__WEBPACK_IMPORTED_MODULE_2__.config.sigV4AuthEnabled,
      renderSigV4Editor: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_aws_sdk__WEBPACK_IMPORTED_MODULE_1__.SIGV4ConnectionConfig, { ...props }),
      secureSocksDSProxyEnabled: false
    }
  ));
};


/***/ }),

/***/ "./public/app/plugins/datasource/alertmanager/DataSource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertManagerDatasource: () => (/* binding */ AlertManagerDatasource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/datasource.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _features_alerting_unified_api_buildInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/api/buildInfo.ts");
/* harmony import */ var _features_alerting_unified_utils_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");







class AlertManagerDatasource extends _grafana_data__WEBPACK_IMPORTED_MODULE_3__.DataSourceApi {
  constructor(instanceSettings) {
    super(instanceSettings);
    this.instanceSettings = instanceSettings;
  }
  // `query()` has to be implemented but we actually don't use it, just need this
  // data source to proxy requests.
  // @ts-ignore
  query() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)({
      data: []
    });
  }
  _request(url) {
    const options = {
      headers: {},
      method: "GET",
      url: this.instanceSettings.url + url
    };
    if (this.instanceSettings.basicAuth || this.instanceSettings.withCredentials) {
      this.instanceSettings.withCredentials = true;
    }
    if (this.instanceSettings.basicAuth) {
      options.headers.Authorization = this.instanceSettings.basicAuth;
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.getBackendSrv)().fetch(options));
  }
  async testDatasource() {
    var _a;
    let alertmanagerResponse;
    const amUrl = this.instanceSettings.url;
    const amFeatures = amUrl ? await (0,_features_alerting_unified_api_buildInfo__WEBPACK_IMPORTED_MODULE_0__.discoverAlertmanagerFeaturesByUrl)(amUrl) : { lazyConfigInit: false };
    if (this.instanceSettings.jsonData.implementation === _types__WEBPACK_IMPORTED_MODULE_2__.AlertManagerImplementation.prometheus) {
      try {
        alertmanagerResponse = await this._request("/alertmanager/api/v2/status");
        if (alertmanagerResponse && (alertmanagerResponse == null ? void 0 : alertmanagerResponse.status) === 200) {
          return {
            status: "error",
            message: "It looks like you have chosen Prometheus implementation, but detected a Mimir or Cortex endpoint. Please update implementation selection and try again."
          };
        }
      } catch (e) {
      }
      try {
        alertmanagerResponse = await this._request("/api/v2/status");
      } catch (e) {
      }
    } else {
      try {
        alertmanagerResponse = await this._request("/api/v2/status");
        if (alertmanagerResponse && (alertmanagerResponse == null ? void 0 : alertmanagerResponse.status) === 200) {
          return {
            status: "error",
            message: "It looks like you have chosen a Mimir or Cortex implementation, but detected a Prometheus endpoint. Please update implementation selection and try again."
          };
        }
      } catch (e) {
      }
      try {
        alertmanagerResponse = await this._request("/alertmanager/api/v2/status");
      } catch (e) {
        if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.isFetchError)(e) && amFeatures.lazyConfigInit && ((_a = (0,_features_alerting_unified_utils_redux__WEBPACK_IMPORTED_MODULE_1__.messageFromError)(e)) == null ? void 0 : _a.includes("the Alertmanager is not configured"))) {
          return {
            status: "success",
            message: "Health check passed.",
            details: { message: "Mimir Alertmanager without the fallback configuration has been discovered." }
          };
        }
      }
    }
    return (alertmanagerResponse == null ? void 0 : alertmanagerResponse.status) === 200 ? {
      status: "success",
      message: "Health check passed."
    } : {
      status: "error",
      message: "Health check failed."
    };
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/alertmanager/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/datasource.ts");
/* harmony import */ var _ConfigEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/ConfigEditor.tsx");
/* harmony import */ var _DataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/DataSource.ts");




const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.DataSourcePlugin(_DataSource__WEBPACK_IMPORTED_MODULE_1__.AlertManagerDatasource).setConfigEditor(_ConfigEditor__WEBPACK_IMPORTED_MODULE_0__.ConfigEditor);


/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/index.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.interval = exports.iif = exports.generate = exports.fromEventPattern = exports.fromEvent = exports.from = exports.forkJoin = exports.empty = exports.defer = exports.connectable = exports.concat = exports.combineLatest = exports.bindNodeCallback = exports.bindCallback = exports.UnsubscriptionError = exports.TimeoutError = exports.SequenceError = exports.ObjectUnsubscribedError = exports.NotFoundError = exports.EmptyError = exports.ArgumentOutOfRangeError = exports.firstValueFrom = exports.lastValueFrom = exports.isObservable = exports.identity = exports.noop = exports.pipe = exports.NotificationKind = exports.Notification = exports.Subscriber = exports.Subscription = exports.Scheduler = exports.VirtualAction = exports.VirtualTimeScheduler = exports.animationFrameScheduler = exports.animationFrame = exports.queueScheduler = exports.queue = exports.asyncScheduler = exports.async = exports.asapScheduler = exports.asap = exports.AsyncSubject = exports.ReplaySubject = exports.BehaviorSubject = exports.Subject = exports.animationFrames = exports.observable = exports.ConnectableObservable = exports.Observable = void 0;
exports.filter = exports.expand = exports.exhaustMap = exports.exhaustAll = exports.exhaust = exports.every = exports.endWith = exports.elementAt = exports.distinctUntilKeyChanged = exports.distinctUntilChanged = exports.distinct = exports.dematerialize = exports.delayWhen = exports.delay = exports.defaultIfEmpty = exports.debounceTime = exports.debounce = exports.count = exports.connect = exports.concatWith = exports.concatMapTo = exports.concatMap = exports.concatAll = exports.combineLatestWith = exports.combineLatestAll = exports.combineAll = exports.catchError = exports.bufferWhen = exports.bufferToggle = exports.bufferTime = exports.bufferCount = exports.buffer = exports.auditTime = exports.audit = exports.config = exports.NEVER = exports.EMPTY = exports.scheduled = exports.zip = exports.using = exports.timer = exports.throwError = exports.range = exports.race = exports.partition = exports.pairs = exports.onErrorResumeNext = exports.of = exports.never = exports.merge = void 0;
exports.switchMap = exports.switchAll = exports.subscribeOn = exports.startWith = exports.skipWhile = exports.skipUntil = exports.skipLast = exports.skip = exports.single = exports.shareReplay = exports.share = exports.sequenceEqual = exports.scan = exports.sampleTime = exports.sample = exports.refCount = exports.retryWhen = exports.retry = exports.repeatWhen = exports.repeat = exports.reduce = exports.raceWith = exports.publishReplay = exports.publishLast = exports.publishBehavior = exports.publish = exports.pluck = exports.pairwise = exports.onErrorResumeNextWith = exports.observeOn = exports.multicast = exports.min = exports.mergeWith = exports.mergeScan = exports.mergeMapTo = exports.mergeMap = exports.flatMap = exports.mergeAll = exports.max = exports.materialize = exports.mapTo = exports.map = exports.last = exports.isEmpty = exports.ignoreElements = exports.groupBy = exports.first = exports.findIndex = exports.find = exports.finalize = void 0;
exports.zipWith = exports.zipAll = exports.withLatestFrom = exports.windowWhen = exports.windowToggle = exports.windowTime = exports.windowCount = exports.window = exports.toArray = exports.timestamp = exports.timeoutWith = exports.timeout = exports.timeInterval = exports.throwIfEmpty = exports.throttleTime = exports.throttle = exports.tap = exports.takeWhile = exports.takeUntil = exports.takeLast = exports.take = exports.switchScan = exports.switchMapTo = void 0;
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
Object.defineProperty(exports, "Observable", ({ enumerable: true, get: function () { return Observable_1.Observable; } }));
var ConnectableObservable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/ConnectableObservable.js");
Object.defineProperty(exports, "ConnectableObservable", ({ enumerable: true, get: function () { return ConnectableObservable_1.ConnectableObservable; } }));
var observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/symbol/observable.js");
Object.defineProperty(exports, "observable", ({ enumerable: true, get: function () { return observable_1.observable; } }));
var animationFrames_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/dom/animationFrames.js");
Object.defineProperty(exports, "animationFrames", ({ enumerable: true, get: function () { return animationFrames_1.animationFrames; } }));
var Subject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subject.js");
Object.defineProperty(exports, "Subject", ({ enumerable: true, get: function () { return Subject_1.Subject; } }));
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/BehaviorSubject.js");
Object.defineProperty(exports, "BehaviorSubject", ({ enumerable: true, get: function () { return BehaviorSubject_1.BehaviorSubject; } }));
var ReplaySubject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/ReplaySubject.js");
Object.defineProperty(exports, "ReplaySubject", ({ enumerable: true, get: function () { return ReplaySubject_1.ReplaySubject; } }));
var AsyncSubject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/AsyncSubject.js");
Object.defineProperty(exports, "AsyncSubject", ({ enumerable: true, get: function () { return AsyncSubject_1.AsyncSubject; } }));
var asap_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/asap.js");
Object.defineProperty(exports, "asap", ({ enumerable: true, get: function () { return asap_1.asap; } }));
Object.defineProperty(exports, "asapScheduler", ({ enumerable: true, get: function () { return asap_1.asapScheduler; } }));
var async_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/async.js");
Object.defineProperty(exports, "async", ({ enumerable: true, get: function () { return async_1.async; } }));
Object.defineProperty(exports, "asyncScheduler", ({ enumerable: true, get: function () { return async_1.asyncScheduler; } }));
var queue_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/queue.js");
Object.defineProperty(exports, "queue", ({ enumerable: true, get: function () { return queue_1.queue; } }));
Object.defineProperty(exports, "queueScheduler", ({ enumerable: true, get: function () { return queue_1.queueScheduler; } }));
var animationFrame_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/animationFrame.js");
Object.defineProperty(exports, "animationFrame", ({ enumerable: true, get: function () { return animationFrame_1.animationFrame; } }));
Object.defineProperty(exports, "animationFrameScheduler", ({ enumerable: true, get: function () { return animationFrame_1.animationFrameScheduler; } }));
var VirtualTimeScheduler_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/VirtualTimeScheduler.js");
Object.defineProperty(exports, "VirtualTimeScheduler", ({ enumerable: true, get: function () { return VirtualTimeScheduler_1.VirtualTimeScheduler; } }));
Object.defineProperty(exports, "VirtualAction", ({ enumerable: true, get: function () { return VirtualTimeScheduler_1.VirtualAction; } }));
var Scheduler_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Scheduler.js");
Object.defineProperty(exports, "Scheduler", ({ enumerable: true, get: function () { return Scheduler_1.Scheduler; } }));
var Subscription_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subscription.js");
Object.defineProperty(exports, "Subscription", ({ enumerable: true, get: function () { return Subscription_1.Subscription; } }));
var Subscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subscriber.js");
Object.defineProperty(exports, "Subscriber", ({ enumerable: true, get: function () { return Subscriber_1.Subscriber; } }));
var Notification_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Notification.js");
Object.defineProperty(exports, "Notification", ({ enumerable: true, get: function () { return Notification_1.Notification; } }));
Object.defineProperty(exports, "NotificationKind", ({ enumerable: true, get: function () { return Notification_1.NotificationKind; } }));
var pipe_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/pipe.js");
Object.defineProperty(exports, "pipe", ({ enumerable: true, get: function () { return pipe_1.pipe; } }));
var noop_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/noop.js");
Object.defineProperty(exports, "noop", ({ enumerable: true, get: function () { return noop_1.noop; } }));
var identity_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/identity.js");
Object.defineProperty(exports, "identity", ({ enumerable: true, get: function () { return identity_1.identity; } }));
var isObservable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isObservable.js");
Object.defineProperty(exports, "isObservable", ({ enumerable: true, get: function () { return isObservable_1.isObservable; } }));
var lastValueFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/lastValueFrom.js");
Object.defineProperty(exports, "lastValueFrom", ({ enumerable: true, get: function () { return lastValueFrom_1.lastValueFrom; } }));
var firstValueFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/firstValueFrom.js");
Object.defineProperty(exports, "firstValueFrom", ({ enumerable: true, get: function () { return firstValueFrom_1.firstValueFrom; } }));
var ArgumentOutOfRangeError_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/ArgumentOutOfRangeError.js");
Object.defineProperty(exports, "ArgumentOutOfRangeError", ({ enumerable: true, get: function () { return ArgumentOutOfRangeError_1.ArgumentOutOfRangeError; } }));
var EmptyError_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/EmptyError.js");
Object.defineProperty(exports, "EmptyError", ({ enumerable: true, get: function () { return EmptyError_1.EmptyError; } }));
var NotFoundError_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/NotFoundError.js");
Object.defineProperty(exports, "NotFoundError", ({ enumerable: true, get: function () { return NotFoundError_1.NotFoundError; } }));
var ObjectUnsubscribedError_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/ObjectUnsubscribedError.js");
Object.defineProperty(exports, "ObjectUnsubscribedError", ({ enumerable: true, get: function () { return ObjectUnsubscribedError_1.ObjectUnsubscribedError; } }));
var SequenceError_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/SequenceError.js");
Object.defineProperty(exports, "SequenceError", ({ enumerable: true, get: function () { return SequenceError_1.SequenceError; } }));
var timeout_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/timeout.js");
Object.defineProperty(exports, "TimeoutError", ({ enumerable: true, get: function () { return timeout_1.TimeoutError; } }));
var UnsubscriptionError_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/UnsubscriptionError.js");
Object.defineProperty(exports, "UnsubscriptionError", ({ enumerable: true, get: function () { return UnsubscriptionError_1.UnsubscriptionError; } }));
var bindCallback_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/bindCallback.js");
Object.defineProperty(exports, "bindCallback", ({ enumerable: true, get: function () { return bindCallback_1.bindCallback; } }));
var bindNodeCallback_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/bindNodeCallback.js");
Object.defineProperty(exports, "bindNodeCallback", ({ enumerable: true, get: function () { return bindNodeCallback_1.bindNodeCallback; } }));
var combineLatest_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/combineLatest.js");
Object.defineProperty(exports, "combineLatest", ({ enumerable: true, get: function () { return combineLatest_1.combineLatest; } }));
var concat_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/concat.js");
Object.defineProperty(exports, "concat", ({ enumerable: true, get: function () { return concat_1.concat; } }));
var connectable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/connectable.js");
Object.defineProperty(exports, "connectable", ({ enumerable: true, get: function () { return connectable_1.connectable; } }));
var defer_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/defer.js");
Object.defineProperty(exports, "defer", ({ enumerable: true, get: function () { return defer_1.defer; } }));
var empty_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/empty.js");
Object.defineProperty(exports, "empty", ({ enumerable: true, get: function () { return empty_1.empty; } }));
var forkJoin_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/forkJoin.js");
Object.defineProperty(exports, "forkJoin", ({ enumerable: true, get: function () { return forkJoin_1.forkJoin; } }));
var from_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/from.js");
Object.defineProperty(exports, "from", ({ enumerable: true, get: function () { return from_1.from; } }));
var fromEvent_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/fromEvent.js");
Object.defineProperty(exports, "fromEvent", ({ enumerable: true, get: function () { return fromEvent_1.fromEvent; } }));
var fromEventPattern_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/fromEventPattern.js");
Object.defineProperty(exports, "fromEventPattern", ({ enumerable: true, get: function () { return fromEventPattern_1.fromEventPattern; } }));
var generate_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/generate.js");
Object.defineProperty(exports, "generate", ({ enumerable: true, get: function () { return generate_1.generate; } }));
var iif_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/iif.js");
Object.defineProperty(exports, "iif", ({ enumerable: true, get: function () { return iif_1.iif; } }));
var interval_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/interval.js");
Object.defineProperty(exports, "interval", ({ enumerable: true, get: function () { return interval_1.interval; } }));
var merge_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/merge.js");
Object.defineProperty(exports, "merge", ({ enumerable: true, get: function () { return merge_1.merge; } }));
var never_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/never.js");
Object.defineProperty(exports, "never", ({ enumerable: true, get: function () { return never_1.never; } }));
var of_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/of.js");
Object.defineProperty(exports, "of", ({ enumerable: true, get: function () { return of_1.of; } }));
var onErrorResumeNext_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/onErrorResumeNext.js");
Object.defineProperty(exports, "onErrorResumeNext", ({ enumerable: true, get: function () { return onErrorResumeNext_1.onErrorResumeNext; } }));
var pairs_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/pairs.js");
Object.defineProperty(exports, "pairs", ({ enumerable: true, get: function () { return pairs_1.pairs; } }));
var partition_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/partition.js");
Object.defineProperty(exports, "partition", ({ enumerable: true, get: function () { return partition_1.partition; } }));
var race_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/race.js");
Object.defineProperty(exports, "race", ({ enumerable: true, get: function () { return race_1.race; } }));
var range_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/range.js");
Object.defineProperty(exports, "range", ({ enumerable: true, get: function () { return range_1.range; } }));
var throwError_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/throwError.js");
Object.defineProperty(exports, "throwError", ({ enumerable: true, get: function () { return throwError_1.throwError; } }));
var timer_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/timer.js");
Object.defineProperty(exports, "timer", ({ enumerable: true, get: function () { return timer_1.timer; } }));
var using_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/using.js");
Object.defineProperty(exports, "using", ({ enumerable: true, get: function () { return using_1.using; } }));
var zip_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/zip.js");
Object.defineProperty(exports, "zip", ({ enumerable: true, get: function () { return zip_1.zip; } }));
var scheduled_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduled/scheduled.js");
Object.defineProperty(exports, "scheduled", ({ enumerable: true, get: function () { return scheduled_1.scheduled; } }));
var empty_2 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/empty.js");
Object.defineProperty(exports, "EMPTY", ({ enumerable: true, get: function () { return empty_2.EMPTY; } }));
var never_2 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/never.js");
Object.defineProperty(exports, "NEVER", ({ enumerable: true, get: function () { return never_2.NEVER; } }));
__exportStar(__webpack_require__("./node_modules/rxjs/dist/cjs/internal/types.js"), exports);
var config_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/config.js");
Object.defineProperty(exports, "config", ({ enumerable: true, get: function () { return config_1.config; } }));
var audit_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/audit.js");
Object.defineProperty(exports, "audit", ({ enumerable: true, get: function () { return audit_1.audit; } }));
var auditTime_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/auditTime.js");
Object.defineProperty(exports, "auditTime", ({ enumerable: true, get: function () { return auditTime_1.auditTime; } }));
var buffer_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/buffer.js");
Object.defineProperty(exports, "buffer", ({ enumerable: true, get: function () { return buffer_1.buffer; } }));
var bufferCount_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/bufferCount.js");
Object.defineProperty(exports, "bufferCount", ({ enumerable: true, get: function () { return bufferCount_1.bufferCount; } }));
var bufferTime_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/bufferTime.js");
Object.defineProperty(exports, "bufferTime", ({ enumerable: true, get: function () { return bufferTime_1.bufferTime; } }));
var bufferToggle_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/bufferToggle.js");
Object.defineProperty(exports, "bufferToggle", ({ enumerable: true, get: function () { return bufferToggle_1.bufferToggle; } }));
var bufferWhen_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/bufferWhen.js");
Object.defineProperty(exports, "bufferWhen", ({ enumerable: true, get: function () { return bufferWhen_1.bufferWhen; } }));
var catchError_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/catchError.js");
Object.defineProperty(exports, "catchError", ({ enumerable: true, get: function () { return catchError_1.catchError; } }));
var combineAll_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/combineAll.js");
Object.defineProperty(exports, "combineAll", ({ enumerable: true, get: function () { return combineAll_1.combineAll; } }));
var combineLatestAll_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/combineLatestAll.js");
Object.defineProperty(exports, "combineLatestAll", ({ enumerable: true, get: function () { return combineLatestAll_1.combineLatestAll; } }));
var combineLatestWith_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/combineLatestWith.js");
Object.defineProperty(exports, "combineLatestWith", ({ enumerable: true, get: function () { return combineLatestWith_1.combineLatestWith; } }));
var concatAll_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/concatAll.js");
Object.defineProperty(exports, "concatAll", ({ enumerable: true, get: function () { return concatAll_1.concatAll; } }));
var concatMap_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/concatMap.js");
Object.defineProperty(exports, "concatMap", ({ enumerable: true, get: function () { return concatMap_1.concatMap; } }));
var concatMapTo_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/concatMapTo.js");
Object.defineProperty(exports, "concatMapTo", ({ enumerable: true, get: function () { return concatMapTo_1.concatMapTo; } }));
var concatWith_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/concatWith.js");
Object.defineProperty(exports, "concatWith", ({ enumerable: true, get: function () { return concatWith_1.concatWith; } }));
var connect_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/connect.js");
Object.defineProperty(exports, "connect", ({ enumerable: true, get: function () { return connect_1.connect; } }));
var count_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/count.js");
Object.defineProperty(exports, "count", ({ enumerable: true, get: function () { return count_1.count; } }));
var debounce_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/debounce.js");
Object.defineProperty(exports, "debounce", ({ enumerable: true, get: function () { return debounce_1.debounce; } }));
var debounceTime_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/debounceTime.js");
Object.defineProperty(exports, "debounceTime", ({ enumerable: true, get: function () { return debounceTime_1.debounceTime; } }));
var defaultIfEmpty_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/defaultIfEmpty.js");
Object.defineProperty(exports, "defaultIfEmpty", ({ enumerable: true, get: function () { return defaultIfEmpty_1.defaultIfEmpty; } }));
var delay_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/delay.js");
Object.defineProperty(exports, "delay", ({ enumerable: true, get: function () { return delay_1.delay; } }));
var delayWhen_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/delayWhen.js");
Object.defineProperty(exports, "delayWhen", ({ enumerable: true, get: function () { return delayWhen_1.delayWhen; } }));
var dematerialize_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/dematerialize.js");
Object.defineProperty(exports, "dematerialize", ({ enumerable: true, get: function () { return dematerialize_1.dematerialize; } }));
var distinct_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/distinct.js");
Object.defineProperty(exports, "distinct", ({ enumerable: true, get: function () { return distinct_1.distinct; } }));
var distinctUntilChanged_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/distinctUntilChanged.js");
Object.defineProperty(exports, "distinctUntilChanged", ({ enumerable: true, get: function () { return distinctUntilChanged_1.distinctUntilChanged; } }));
var distinctUntilKeyChanged_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/distinctUntilKeyChanged.js");
Object.defineProperty(exports, "distinctUntilKeyChanged", ({ enumerable: true, get: function () { return distinctUntilKeyChanged_1.distinctUntilKeyChanged; } }));
var elementAt_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/elementAt.js");
Object.defineProperty(exports, "elementAt", ({ enumerable: true, get: function () { return elementAt_1.elementAt; } }));
var endWith_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/endWith.js");
Object.defineProperty(exports, "endWith", ({ enumerable: true, get: function () { return endWith_1.endWith; } }));
var every_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/every.js");
Object.defineProperty(exports, "every", ({ enumerable: true, get: function () { return every_1.every; } }));
var exhaust_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/exhaust.js");
Object.defineProperty(exports, "exhaust", ({ enumerable: true, get: function () { return exhaust_1.exhaust; } }));
var exhaustAll_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/exhaustAll.js");
Object.defineProperty(exports, "exhaustAll", ({ enumerable: true, get: function () { return exhaustAll_1.exhaustAll; } }));
var exhaustMap_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/exhaustMap.js");
Object.defineProperty(exports, "exhaustMap", ({ enumerable: true, get: function () { return exhaustMap_1.exhaustMap; } }));
var expand_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/expand.js");
Object.defineProperty(exports, "expand", ({ enumerable: true, get: function () { return expand_1.expand; } }));
var filter_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/filter.js");
Object.defineProperty(exports, "filter", ({ enumerable: true, get: function () { return filter_1.filter; } }));
var finalize_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/finalize.js");
Object.defineProperty(exports, "finalize", ({ enumerable: true, get: function () { return finalize_1.finalize; } }));
var find_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/find.js");
Object.defineProperty(exports, "find", ({ enumerable: true, get: function () { return find_1.find; } }));
var findIndex_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/findIndex.js");
Object.defineProperty(exports, "findIndex", ({ enumerable: true, get: function () { return findIndex_1.findIndex; } }));
var first_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/first.js");
Object.defineProperty(exports, "first", ({ enumerable: true, get: function () { return first_1.first; } }));
var groupBy_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/groupBy.js");
Object.defineProperty(exports, "groupBy", ({ enumerable: true, get: function () { return groupBy_1.groupBy; } }));
var ignoreElements_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/ignoreElements.js");
Object.defineProperty(exports, "ignoreElements", ({ enumerable: true, get: function () { return ignoreElements_1.ignoreElements; } }));
var isEmpty_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/isEmpty.js");
Object.defineProperty(exports, "isEmpty", ({ enumerable: true, get: function () { return isEmpty_1.isEmpty; } }));
var last_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/last.js");
Object.defineProperty(exports, "last", ({ enumerable: true, get: function () { return last_1.last; } }));
var map_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/map.js");
Object.defineProperty(exports, "map", ({ enumerable: true, get: function () { return map_1.map; } }));
var mapTo_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/mapTo.js");
Object.defineProperty(exports, "mapTo", ({ enumerable: true, get: function () { return mapTo_1.mapTo; } }));
var materialize_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/materialize.js");
Object.defineProperty(exports, "materialize", ({ enumerable: true, get: function () { return materialize_1.materialize; } }));
var max_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/max.js");
Object.defineProperty(exports, "max", ({ enumerable: true, get: function () { return max_1.max; } }));
var mergeAll_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/mergeAll.js");
Object.defineProperty(exports, "mergeAll", ({ enumerable: true, get: function () { return mergeAll_1.mergeAll; } }));
var flatMap_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/flatMap.js");
Object.defineProperty(exports, "flatMap", ({ enumerable: true, get: function () { return flatMap_1.flatMap; } }));
var mergeMap_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/mergeMap.js");
Object.defineProperty(exports, "mergeMap", ({ enumerable: true, get: function () { return mergeMap_1.mergeMap; } }));
var mergeMapTo_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/mergeMapTo.js");
Object.defineProperty(exports, "mergeMapTo", ({ enumerable: true, get: function () { return mergeMapTo_1.mergeMapTo; } }));
var mergeScan_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/mergeScan.js");
Object.defineProperty(exports, "mergeScan", ({ enumerable: true, get: function () { return mergeScan_1.mergeScan; } }));
var mergeWith_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/mergeWith.js");
Object.defineProperty(exports, "mergeWith", ({ enumerable: true, get: function () { return mergeWith_1.mergeWith; } }));
var min_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/min.js");
Object.defineProperty(exports, "min", ({ enumerable: true, get: function () { return min_1.min; } }));
var multicast_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/multicast.js");
Object.defineProperty(exports, "multicast", ({ enumerable: true, get: function () { return multicast_1.multicast; } }));
var observeOn_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/observeOn.js");
Object.defineProperty(exports, "observeOn", ({ enumerable: true, get: function () { return observeOn_1.observeOn; } }));
var onErrorResumeNextWith_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/onErrorResumeNextWith.js");
Object.defineProperty(exports, "onErrorResumeNextWith", ({ enumerable: true, get: function () { return onErrorResumeNextWith_1.onErrorResumeNextWith; } }));
var pairwise_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/pairwise.js");
Object.defineProperty(exports, "pairwise", ({ enumerable: true, get: function () { return pairwise_1.pairwise; } }));
var pluck_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/pluck.js");
Object.defineProperty(exports, "pluck", ({ enumerable: true, get: function () { return pluck_1.pluck; } }));
var publish_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/publish.js");
Object.defineProperty(exports, "publish", ({ enumerable: true, get: function () { return publish_1.publish; } }));
var publishBehavior_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/publishBehavior.js");
Object.defineProperty(exports, "publishBehavior", ({ enumerable: true, get: function () { return publishBehavior_1.publishBehavior; } }));
var publishLast_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/publishLast.js");
Object.defineProperty(exports, "publishLast", ({ enumerable: true, get: function () { return publishLast_1.publishLast; } }));
var publishReplay_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/publishReplay.js");
Object.defineProperty(exports, "publishReplay", ({ enumerable: true, get: function () { return publishReplay_1.publishReplay; } }));
var raceWith_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/raceWith.js");
Object.defineProperty(exports, "raceWith", ({ enumerable: true, get: function () { return raceWith_1.raceWith; } }));
var reduce_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/reduce.js");
Object.defineProperty(exports, "reduce", ({ enumerable: true, get: function () { return reduce_1.reduce; } }));
var repeat_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/repeat.js");
Object.defineProperty(exports, "repeat", ({ enumerable: true, get: function () { return repeat_1.repeat; } }));
var repeatWhen_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/repeatWhen.js");
Object.defineProperty(exports, "repeatWhen", ({ enumerable: true, get: function () { return repeatWhen_1.repeatWhen; } }));
var retry_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/retry.js");
Object.defineProperty(exports, "retry", ({ enumerable: true, get: function () { return retry_1.retry; } }));
var retryWhen_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/retryWhen.js");
Object.defineProperty(exports, "retryWhen", ({ enumerable: true, get: function () { return retryWhen_1.retryWhen; } }));
var refCount_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/refCount.js");
Object.defineProperty(exports, "refCount", ({ enumerable: true, get: function () { return refCount_1.refCount; } }));
var sample_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/sample.js");
Object.defineProperty(exports, "sample", ({ enumerable: true, get: function () { return sample_1.sample; } }));
var sampleTime_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/sampleTime.js");
Object.defineProperty(exports, "sampleTime", ({ enumerable: true, get: function () { return sampleTime_1.sampleTime; } }));
var scan_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/scan.js");
Object.defineProperty(exports, "scan", ({ enumerable: true, get: function () { return scan_1.scan; } }));
var sequenceEqual_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/sequenceEqual.js");
Object.defineProperty(exports, "sequenceEqual", ({ enumerable: true, get: function () { return sequenceEqual_1.sequenceEqual; } }));
var share_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/share.js");
Object.defineProperty(exports, "share", ({ enumerable: true, get: function () { return share_1.share; } }));
var shareReplay_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/shareReplay.js");
Object.defineProperty(exports, "shareReplay", ({ enumerable: true, get: function () { return shareReplay_1.shareReplay; } }));
var single_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/single.js");
Object.defineProperty(exports, "single", ({ enumerable: true, get: function () { return single_1.single; } }));
var skip_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/skip.js");
Object.defineProperty(exports, "skip", ({ enumerable: true, get: function () { return skip_1.skip; } }));
var skipLast_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/skipLast.js");
Object.defineProperty(exports, "skipLast", ({ enumerable: true, get: function () { return skipLast_1.skipLast; } }));
var skipUntil_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/skipUntil.js");
Object.defineProperty(exports, "skipUntil", ({ enumerable: true, get: function () { return skipUntil_1.skipUntil; } }));
var skipWhile_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/skipWhile.js");
Object.defineProperty(exports, "skipWhile", ({ enumerable: true, get: function () { return skipWhile_1.skipWhile; } }));
var startWith_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/startWith.js");
Object.defineProperty(exports, "startWith", ({ enumerable: true, get: function () { return startWith_1.startWith; } }));
var subscribeOn_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/subscribeOn.js");
Object.defineProperty(exports, "subscribeOn", ({ enumerable: true, get: function () { return subscribeOn_1.subscribeOn; } }));
var switchAll_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/switchAll.js");
Object.defineProperty(exports, "switchAll", ({ enumerable: true, get: function () { return switchAll_1.switchAll; } }));
var switchMap_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/switchMap.js");
Object.defineProperty(exports, "switchMap", ({ enumerable: true, get: function () { return switchMap_1.switchMap; } }));
var switchMapTo_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/switchMapTo.js");
Object.defineProperty(exports, "switchMapTo", ({ enumerable: true, get: function () { return switchMapTo_1.switchMapTo; } }));
var switchScan_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/switchScan.js");
Object.defineProperty(exports, "switchScan", ({ enumerable: true, get: function () { return switchScan_1.switchScan; } }));
var take_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/take.js");
Object.defineProperty(exports, "take", ({ enumerable: true, get: function () { return take_1.take; } }));
var takeLast_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/takeLast.js");
Object.defineProperty(exports, "takeLast", ({ enumerable: true, get: function () { return takeLast_1.takeLast; } }));
var takeUntil_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/takeUntil.js");
Object.defineProperty(exports, "takeUntil", ({ enumerable: true, get: function () { return takeUntil_1.takeUntil; } }));
var takeWhile_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/takeWhile.js");
Object.defineProperty(exports, "takeWhile", ({ enumerable: true, get: function () { return takeWhile_1.takeWhile; } }));
var tap_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/tap.js");
Object.defineProperty(exports, "tap", ({ enumerable: true, get: function () { return tap_1.tap; } }));
var throttle_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/throttle.js");
Object.defineProperty(exports, "throttle", ({ enumerable: true, get: function () { return throttle_1.throttle; } }));
var throttleTime_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/throttleTime.js");
Object.defineProperty(exports, "throttleTime", ({ enumerable: true, get: function () { return throttleTime_1.throttleTime; } }));
var throwIfEmpty_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/throwIfEmpty.js");
Object.defineProperty(exports, "throwIfEmpty", ({ enumerable: true, get: function () { return throwIfEmpty_1.throwIfEmpty; } }));
var timeInterval_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/timeInterval.js");
Object.defineProperty(exports, "timeInterval", ({ enumerable: true, get: function () { return timeInterval_1.timeInterval; } }));
var timeout_2 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/timeout.js");
Object.defineProperty(exports, "timeout", ({ enumerable: true, get: function () { return timeout_2.timeout; } }));
var timeoutWith_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/timeoutWith.js");
Object.defineProperty(exports, "timeoutWith", ({ enumerable: true, get: function () { return timeoutWith_1.timeoutWith; } }));
var timestamp_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/timestamp.js");
Object.defineProperty(exports, "timestamp", ({ enumerable: true, get: function () { return timestamp_1.timestamp; } }));
var toArray_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/toArray.js");
Object.defineProperty(exports, "toArray", ({ enumerable: true, get: function () { return toArray_1.toArray; } }));
var window_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/window.js");
Object.defineProperty(exports, "window", ({ enumerable: true, get: function () { return window_1.window; } }));
var windowCount_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/windowCount.js");
Object.defineProperty(exports, "windowCount", ({ enumerable: true, get: function () { return windowCount_1.windowCount; } }));
var windowTime_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/windowTime.js");
Object.defineProperty(exports, "windowTime", ({ enumerable: true, get: function () { return windowTime_1.windowTime; } }));
var windowToggle_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/windowToggle.js");
Object.defineProperty(exports, "windowToggle", ({ enumerable: true, get: function () { return windowToggle_1.windowToggle; } }));
var windowWhen_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/windowWhen.js");
Object.defineProperty(exports, "windowWhen", ({ enumerable: true, get: function () { return windowWhen_1.windowWhen; } }));
var withLatestFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/withLatestFrom.js");
Object.defineProperty(exports, "withLatestFrom", ({ enumerable: true, get: function () { return withLatestFrom_1.withLatestFrom; } }));
var zipAll_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/zipAll.js");
Object.defineProperty(exports, "zipAll", ({ enumerable: true, get: function () { return zipAll_1.zipAll; } }));
var zipWith_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/zipWith.js");
Object.defineProperty(exports, "zipWith", ({ enumerable: true, get: function () { return zipWith_1.zipWith; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/AsyncSubject.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AsyncSubject = void 0;
var Subject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subject.js");
var AsyncSubject = (function (_super) {
    __extends(AsyncSubject, _super);
    function AsyncSubject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._value = null;
        _this._hasValue = false;
        _this._isComplete = false;
        return _this;
    }
    AsyncSubject.prototype._checkFinalizedStatuses = function (subscriber) {
        var _a = this, hasError = _a.hasError, _hasValue = _a._hasValue, _value = _a._value, thrownError = _a.thrownError, isStopped = _a.isStopped, _isComplete = _a._isComplete;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped || _isComplete) {
            _hasValue && subscriber.next(_value);
            subscriber.complete();
        }
    };
    AsyncSubject.prototype.next = function (value) {
        if (!this.isStopped) {
            this._value = value;
            this._hasValue = true;
        }
    };
    AsyncSubject.prototype.complete = function () {
        var _a = this, _hasValue = _a._hasValue, _value = _a._value, _isComplete = _a._isComplete;
        if (!_isComplete) {
            this._isComplete = true;
            _hasValue && _super.prototype.next.call(this, _value);
            _super.prototype.complete.call(this);
        }
    };
    return AsyncSubject;
}(Subject_1.Subject));
exports.AsyncSubject = AsyncSubject;
//# sourceMappingURL=AsyncSubject.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/BehaviorSubject.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BehaviorSubject = void 0;
var Subject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subject.js");
var BehaviorSubject = (function (_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: false,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        !subscription.closed && subscriber.next(this._value);
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
        if (hasError) {
            throw thrownError;
        }
        this._throwIfClosed();
        return _value;
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, (this._value = value));
    };
    return BehaviorSubject;
}(Subject_1.Subject));
exports.BehaviorSubject = BehaviorSubject;
//# sourceMappingURL=BehaviorSubject.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/Notification.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.observeNotification = exports.Notification = exports.NotificationKind = void 0;
var empty_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/empty.js");
var of_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/of.js");
var throwError_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/throwError.js");
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
var NotificationKind;
(function (NotificationKind) {
    NotificationKind["NEXT"] = "N";
    NotificationKind["ERROR"] = "E";
    NotificationKind["COMPLETE"] = "C";
})(NotificationKind = exports.NotificationKind || (exports.NotificationKind = {}));
var Notification = (function () {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    Notification.prototype.observe = function (observer) {
        return observeNotification(this, observer);
    };
    Notification.prototype.do = function (nextHandler, errorHandler, completeHandler) {
        var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
        return kind === 'N' ? nextHandler === null || nextHandler === void 0 ? void 0 : nextHandler(value) : kind === 'E' ? errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(error) : completeHandler === null || completeHandler === void 0 ? void 0 : completeHandler();
    };
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
        var _a;
        return isFunction_1.isFunction((_a = nextOrObserver) === null || _a === void 0 ? void 0 : _a.next)
            ? this.observe(nextOrObserver)
            : this.do(nextOrObserver, error, complete);
    };
    Notification.prototype.toObservable = function () {
        var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
        var result = kind === 'N'
            ?
                of_1.of(value)
            :
                kind === 'E'
                    ?
                        throwError_1.throwError(function () { return error; })
                    :
                        kind === 'C'
                            ?
                                empty_1.EMPTY
                            :
                                0;
        if (!result) {
            throw new TypeError("Unexpected notification kind " + kind);
        }
        return result;
    };
    Notification.createNext = function (value) {
        return new Notification('N', value);
    };
    Notification.createError = function (err) {
        return new Notification('E', undefined, err);
    };
    Notification.createComplete = function () {
        return Notification.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    return Notification;
}());
exports.Notification = Notification;
function observeNotification(notification, observer) {
    var _a, _b, _c;
    var _d = notification, kind = _d.kind, value = _d.value, error = _d.error;
    if (typeof kind !== 'string') {
        throw new TypeError('Invalid notification, missing "kind"');
    }
    kind === 'N' ? (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, value) : kind === 'E' ? (_b = observer.error) === null || _b === void 0 ? void 0 : _b.call(observer, error) : (_c = observer.complete) === null || _c === void 0 ? void 0 : _c.call(observer);
}
exports.observeNotification = observeNotification;
//# sourceMappingURL=Notification.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/NotificationFactories.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createNotification = exports.nextNotification = exports.errorNotification = exports.COMPLETE_NOTIFICATION = void 0;
exports.COMPLETE_NOTIFICATION = (function () { return createNotification('C', undefined, undefined); })();
function errorNotification(error) {
    return createNotification('E', undefined, error);
}
exports.errorNotification = errorNotification;
function nextNotification(value) {
    return createNotification('N', value, undefined);
}
exports.nextNotification = nextNotification;
function createNotification(kind, value, error) {
    return {
        kind: kind,
        value: value,
        error: error,
    };
}
exports.createNotification = createNotification;
//# sourceMappingURL=NotificationFactories.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/Observable.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Observable = void 0;
var Subscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subscriber.js");
var Subscription_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subscription.js");
var observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/symbol/observable.js");
var pipe_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/pipe.js");
var config_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/config.js");
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
var errorContext_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/errorContext.js");
var Observable = (function () {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new Subscriber_1.SafeSubscriber(observerOrNext, error, complete);
        errorContext_1.errorContext(function () {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator
                ?
                    operator.call(subscriber, source)
                : source
                    ?
                        _this._subscribe(subscriber)
                    :
                        _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscriber = new Subscriber_1.SafeSubscriber({
                next: function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve,
            });
            _this.subscribe(subscriber);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config_1.config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && isFunction_1.isFunction(value.next) && isFunction_1.isFunction(value.error) && isFunction_1.isFunction(value.complete);
}
function isSubscriber(value) {
    return (value && value instanceof Subscriber_1.Subscriber) || (isObserver(value) && Subscription_1.isSubscription(value));
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/ReplaySubject.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReplaySubject = void 0;
var Subject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subject.js");
var dateTimestampProvider_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/dateTimestampProvider.js");
var ReplaySubject = (function (_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(_bufferSize, _windowTime, _timestampProvider) {
        if (_bufferSize === void 0) { _bufferSize = Infinity; }
        if (_windowTime === void 0) { _windowTime = Infinity; }
        if (_timestampProvider === void 0) { _timestampProvider = dateTimestampProvider_1.dateTimestampProvider; }
        var _this = _super.call(this) || this;
        _this._bufferSize = _bufferSize;
        _this._windowTime = _windowTime;
        _this._timestampProvider = _timestampProvider;
        _this._buffer = [];
        _this._infiniteTimeWindow = true;
        _this._infiniteTimeWindow = _windowTime === Infinity;
        _this._bufferSize = Math.max(1, _bufferSize);
        _this._windowTime = Math.max(1, _windowTime);
        return _this;
    }
    ReplaySubject.prototype.next = function (value) {
        var _a = this, isStopped = _a.isStopped, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow, _timestampProvider = _a._timestampProvider, _windowTime = _a._windowTime;
        if (!isStopped) {
            _buffer.push(value);
            !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
        }
        this._trimBuffer();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._trimBuffer();
        var subscription = this._innerSubscribe(subscriber);
        var _a = this, _infiniteTimeWindow = _a._infiniteTimeWindow, _buffer = _a._buffer;
        var copy = _buffer.slice();
        for (var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
            subscriber.next(copy[i]);
        }
        this._checkFinalizedStatuses(subscriber);
        return subscription;
    };
    ReplaySubject.prototype._trimBuffer = function () {
        var _a = this, _bufferSize = _a._bufferSize, _timestampProvider = _a._timestampProvider, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow;
        var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
        _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
        if (!_infiniteTimeWindow) {
            var now = _timestampProvider.now();
            var last = 0;
            for (var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
                last = i;
            }
            last && _buffer.splice(0, last + 1);
        }
    };
    return ReplaySubject;
}(Subject_1.Subject));
exports.ReplaySubject = ReplaySubject;
//# sourceMappingURL=ReplaySubject.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/Scheduler.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Scheduler = void 0;
var dateTimestampProvider_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/dateTimestampProvider.js");
var Scheduler = (function () {
    function Scheduler(schedulerActionCtor, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.schedulerActionCtor(this, work).schedule(state, delay);
    };
    Scheduler.now = dateTimestampProvider_1.dateTimestampProvider.now;
    return Scheduler;
}());
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/Subject.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnonymousSubject = exports.Subject = void 0;
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
var Subscription_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subscription.js");
var ObjectUnsubscribedError_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/ObjectUnsubscribedError.js");
var arrRemove_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/arrRemove.js");
var errorContext_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/errorContext.js");
var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
    };
    Subject.prototype.next = function (value) {
        var _this = this;
        errorContext_1.errorContext(function () {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                if (!_this.currentObservers) {
                    _this.currentObservers = Array.from(_this.observers);
                }
                try {
                    for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var observer = _c.value;
                        observer.next(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    };
    Subject.prototype.error = function (err) {
        var _this = this;
        errorContext_1.errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().error(err);
                }
            }
        });
    };
    Subject.prototype.complete = function () {
        var _this = this;
        errorContext_1.errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().complete();
                }
            }
        });
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function () {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function (subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function (subscriber) {
        var _this = this;
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        if (hasError || isStopped) {
            return Subscription_1.EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new Subscription_1.Subscription(function () {
            _this.currentObservers = null;
            arrRemove_1.arrRemove(observers, subscriber);
        });
    };
    Subject.prototype._checkFinalizedStatuses = function (subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped) {
            subscriber.complete();
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_1.Observable));
exports.Subject = Subject;
var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function (err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function () {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : Subscription_1.EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject;
}(Subject));
exports.AnonymousSubject = AnonymousSubject;
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/Subscriber.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EMPTY_OBSERVER = exports.SafeSubscriber = exports.Subscriber = void 0;
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
var Subscription_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subscription.js");
var config_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/config.js");
var reportUnhandledError_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/reportUnhandledError.js");
var noop_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/noop.js");
var NotificationFactories_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/NotificationFactories.js");
var timeoutProvider_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/timeoutProvider.js");
var errorContext_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/errorContext.js");
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (Subscription_1.isSubscription(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = exports.EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) {
            handleStoppedNotification(NotificationFactories_1.nextNotification(value), this);
        }
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) {
            handleStoppedNotification(NotificationFactories_1.errorNotification(err), this);
        }
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) {
            handleStoppedNotification(NotificationFactories_1.COMPLETE_NOTIFICATION, this);
        }
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
}
var ConsumerObserver = (function () {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function (value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    ConsumerObserver.prototype.error = function (err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
        else {
            handleUnhandledError(err);
        }
    };
    ConsumerObserver.prototype.complete = function () {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    return ConsumerObserver;
}());
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction_1.isFunction(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: (observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined),
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined,
            };
        }
        else {
            var context_1;
            if (_this && config_1.config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function () { return _this.unsubscribe(); };
                partialObserver = {
                    next: observerOrNext.next && bind(observerOrNext.next, context_1),
                    error: observerOrNext.error && bind(observerOrNext.error, context_1),
                    complete: observerOrNext.complete && bind(observerOrNext.complete, context_1),
                };
            }
            else {
                partialObserver = observerOrNext;
            }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
function handleUnhandledError(error) {
    if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        errorContext_1.captureError(error);
    }
    else {
        reportUnhandledError_1.reportUnhandledError(error);
    }
}
function defaultErrorHandler(err) {
    throw err;
}
function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = config_1.config.onStoppedNotification;
    onStoppedNotification && timeoutProvider_1.timeoutProvider.setTimeout(function () { return onStoppedNotification(notification, subscriber); });
}
exports.EMPTY_OBSERVER = {
    closed: true,
    next: noop_1.noop,
    error: defaultErrorHandler,
    complete: noop_1.noop,
};
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/Subscription.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isSubscription = exports.EMPTY_SUBSCRIPTION = exports.Subscription = void 0;
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
var UnsubscriptionError_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/UnsubscriptionError.js");
var arrRemove_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/arrRemove.js");
var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialFinalizer = this.initialTeardown;
            if (isFunction_1.isFunction(initialFinalizer)) {
                try {
                    initialFinalizer();
                }
                catch (e) {
                    errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? e.errors : [e];
                }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new UnsubscriptionError_1.UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            arrRemove_1.arrRemove(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove_1.arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());
exports.Subscription = Subscription;
exports.EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && isFunction_1.isFunction(value.remove) && isFunction_1.isFunction(value.add) && isFunction_1.isFunction(value.unsubscribe)));
}
exports.isSubscription = isSubscription;
function execFinalizer(finalizer) {
    if (isFunction_1.isFunction(finalizer)) {
        finalizer();
    }
    else {
        finalizer.unsubscribe();
    }
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/config.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.config = void 0;
exports.config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false,
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/firstValueFrom.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.firstValueFrom = void 0;
var EmptyError_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/EmptyError.js");
var Subscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subscriber.js");
function firstValueFrom(source, config) {
    var hasConfig = typeof config === 'object';
    return new Promise(function (resolve, reject) {
        var subscriber = new Subscriber_1.SafeSubscriber({
            next: function (value) {
                resolve(value);
                subscriber.unsubscribe();
            },
            error: reject,
            complete: function () {
                if (hasConfig) {
                    resolve(config.defaultValue);
                }
                else {
                    reject(new EmptyError_1.EmptyError());
                }
            },
        });
        source.subscribe(subscriber);
    });
}
exports.firstValueFrom = firstValueFrom;
//# sourceMappingURL=firstValueFrom.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/lastValueFrom.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.lastValueFrom = void 0;
var EmptyError_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/EmptyError.js");
function lastValueFrom(source, config) {
    var hasConfig = typeof config === 'object';
    return new Promise(function (resolve, reject) {
        var _hasValue = false;
        var _value;
        source.subscribe({
            next: function (value) {
                _value = value;
                _hasValue = true;
            },
            error: reject,
            complete: function () {
                if (_hasValue) {
                    resolve(_value);
                }
                else if (hasConfig) {
                    resolve(config.defaultValue);
                }
                else {
                    reject(new EmptyError_1.EmptyError());
                }
            },
        });
    });
}
exports.lastValueFrom = lastValueFrom;
//# sourceMappingURL=lastValueFrom.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/ConnectableObservable.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConnectableObservable = void 0;
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
var Subscription_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subscription.js");
var refCount_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/refCount.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var ConnectableObservable = (function (_super) {
    __extends(ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._subject = null;
        _this._refCount = 0;
        _this._connection = null;
        if (lift_1.hasLift(source)) {
            _this.lift = source.lift;
        }
        return _this;
    }
    ConnectableObservable.prototype._subscribe = function (subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function () {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    };
    ConnectableObservable.prototype._teardown = function () {
        this._refCount = 0;
        var _connection = this._connection;
        this._subject = this._connection = null;
        _connection === null || _connection === void 0 ? void 0 : _connection.unsubscribe();
    };
    ConnectableObservable.prototype.connect = function () {
        var _this = this;
        var connection = this._connection;
        if (!connection) {
            connection = this._connection = new Subscription_1.Subscription();
            var subject_1 = this.getSubject();
            connection.add(this.source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subject_1, undefined, function () {
                _this._teardown();
                subject_1.complete();
            }, function (err) {
                _this._teardown();
                subject_1.error(err);
            }, function () { return _this._teardown(); })));
            if (connection.closed) {
                this._connection = null;
                connection = Subscription_1.Subscription.EMPTY;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function () {
        return refCount_1.refCount()(this);
    };
    return ConnectableObservable;
}(Observable_1.Observable));
exports.ConnectableObservable = ConnectableObservable;
//# sourceMappingURL=ConnectableObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/bindCallback.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bindCallback = void 0;
var bindCallbackInternals_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/bindCallbackInternals.js");
function bindCallback(callbackFunc, resultSelector, scheduler) {
    return bindCallbackInternals_1.bindCallbackInternals(false, callbackFunc, resultSelector, scheduler);
}
exports.bindCallback = bindCallback;
//# sourceMappingURL=bindCallback.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/bindCallbackInternals.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bindCallbackInternals = void 0;
var isScheduler_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isScheduler.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
var subscribeOn_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/subscribeOn.js");
var mapOneOrManyArgs_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/mapOneOrManyArgs.js");
var observeOn_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/observeOn.js");
var AsyncSubject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/AsyncSubject.js");
function bindCallbackInternals(isNodeStyle, callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (isScheduler_1.isScheduler(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindCallbackInternals(isNodeStyle, callbackFunc, scheduler)
                    .apply(this, args)
                    .pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
            };
        }
    }
    if (scheduler) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return bindCallbackInternals(isNodeStyle, callbackFunc)
                .apply(this, args)
                .pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
        };
    }
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var subject = new AsyncSubject_1.AsyncSubject();
        var uninitialized = true;
        return new Observable_1.Observable(function (subscriber) {
            var subs = subject.subscribe(subscriber);
            if (uninitialized) {
                uninitialized = false;
                var isAsync_1 = false;
                var isComplete_1 = false;
                callbackFunc.apply(_this, __spreadArray(__spreadArray([], __read(args)), [
                    function () {
                        var results = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            results[_i] = arguments[_i];
                        }
                        if (isNodeStyle) {
                            var err = results.shift();
                            if (err != null) {
                                subject.error(err);
                                return;
                            }
                        }
                        subject.next(1 < results.length ? results : results[0]);
                        isComplete_1 = true;
                        if (isAsync_1) {
                            subject.complete();
                        }
                    },
                ]));
                if (isComplete_1) {
                    subject.complete();
                }
                isAsync_1 = true;
            }
            return subs;
        });
    };
}
exports.bindCallbackInternals = bindCallbackInternals;
//# sourceMappingURL=bindCallbackInternals.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/bindNodeCallback.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bindNodeCallback = void 0;
var bindCallbackInternals_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/bindCallbackInternals.js");
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    return bindCallbackInternals_1.bindCallbackInternals(true, callbackFunc, resultSelector, scheduler);
}
exports.bindNodeCallback = bindNodeCallback;
//# sourceMappingURL=bindNodeCallback.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/combineLatest.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.combineLatestInit = exports.combineLatest = void 0;
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
var argsArgArrayOrObject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/argsArgArrayOrObject.js");
var from_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/from.js");
var identity_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/identity.js");
var mapOneOrManyArgs_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/mapOneOrManyArgs.js");
var args_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/args.js");
var createObject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/createObject.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var executeSchedule_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/executeSchedule.js");
function combineLatest() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(args);
    var resultSelector = args_1.popResultSelector(args);
    var _a = argsArgArrayOrObject_1.argsArgArrayOrObject(args), observables = _a.args, keys = _a.keys;
    if (observables.length === 0) {
        return from_1.from([], scheduler);
    }
    var result = new Observable_1.Observable(combineLatestInit(observables, scheduler, keys
        ?
            function (values) { return createObject_1.createObject(keys, values); }
        :
            identity_1.identity));
    return resultSelector ? result.pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : result;
}
exports.combineLatest = combineLatest;
function combineLatestInit(observables, scheduler, valueTransform) {
    if (valueTransform === void 0) { valueTransform = identity_1.identity; }
    return function (subscriber) {
        maybeSchedule(scheduler, function () {
            var length = observables.length;
            var values = new Array(length);
            var active = length;
            var remainingFirstValues = length;
            var _loop_1 = function (i) {
                maybeSchedule(scheduler, function () {
                    var source = from_1.from(observables[i], scheduler);
                    var hasFirstValue = false;
                    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
                        values[i] = value;
                        if (!hasFirstValue) {
                            hasFirstValue = true;
                            remainingFirstValues--;
                        }
                        if (!remainingFirstValues) {
                            subscriber.next(valueTransform(values.slice()));
                        }
                    }, function () {
                        if (!--active) {
                            subscriber.complete();
                        }
                    }));
                }, subscriber);
            };
            for (var i = 0; i < length; i++) {
                _loop_1(i);
            }
        }, subscriber);
    };
}
exports.combineLatestInit = combineLatestInit;
function maybeSchedule(scheduler, execute, subscription) {
    if (scheduler) {
        executeSchedule_1.executeSchedule(subscription, scheduler, execute);
    }
    else {
        execute();
    }
}
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/concat.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.concat = void 0;
var concatAll_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/concatAll.js");
var args_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/args.js");
var from_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/from.js");
function concat() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return concatAll_1.concatAll()(from_1.from(args, args_1.popScheduler(args)));
}
exports.concat = concat;
//# sourceMappingURL=concat.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/connectable.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.connectable = void 0;
var Subject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subject.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
var defer_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/defer.js");
var DEFAULT_CONFIG = {
    connector: function () { return new Subject_1.Subject(); },
    resetOnDisconnect: true,
};
function connectable(source, config) {
    if (config === void 0) { config = DEFAULT_CONFIG; }
    var connection = null;
    var connector = config.connector, _a = config.resetOnDisconnect, resetOnDisconnect = _a === void 0 ? true : _a;
    var subject = connector();
    var result = new Observable_1.Observable(function (subscriber) {
        return subject.subscribe(subscriber);
    });
    result.connect = function () {
        if (!connection || connection.closed) {
            connection = defer_1.defer(function () { return source; }).subscribe(subject);
            if (resetOnDisconnect) {
                connection.add(function () { return (subject = connector()); });
            }
        }
        return connection;
    };
    return result;
}
exports.connectable = connectable;
//# sourceMappingURL=connectable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/defer.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defer = void 0;
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
function defer(observableFactory) {
    return new Observable_1.Observable(function (subscriber) {
        innerFrom_1.innerFrom(observableFactory()).subscribe(subscriber);
    });
}
exports.defer = defer;
//# sourceMappingURL=defer.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/dom/animationFrames.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.animationFrames = void 0;
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
var performanceTimestampProvider_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/performanceTimestampProvider.js");
var animationFrameProvider_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/animationFrameProvider.js");
function animationFrames(timestampProvider) {
    return timestampProvider ? animationFramesFactory(timestampProvider) : DEFAULT_ANIMATION_FRAMES;
}
exports.animationFrames = animationFrames;
function animationFramesFactory(timestampProvider) {
    return new Observable_1.Observable(function (subscriber) {
        var provider = timestampProvider || performanceTimestampProvider_1.performanceTimestampProvider;
        var start = provider.now();
        var id = 0;
        var run = function () {
            if (!subscriber.closed) {
                id = animationFrameProvider_1.animationFrameProvider.requestAnimationFrame(function (timestamp) {
                    id = 0;
                    var now = provider.now();
                    subscriber.next({
                        timestamp: timestampProvider ? now : timestamp,
                        elapsed: now - start,
                    });
                    run();
                });
            }
        };
        run();
        return function () {
            if (id) {
                animationFrameProvider_1.animationFrameProvider.cancelAnimationFrame(id);
            }
        };
    });
}
var DEFAULT_ANIMATION_FRAMES = animationFramesFactory();
//# sourceMappingURL=animationFrames.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/empty.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.empty = exports.EMPTY = void 0;
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
exports.EMPTY = new Observable_1.Observable(function (subscriber) { return subscriber.complete(); });
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
}
exports.empty = empty;
function emptyScheduled(scheduler) {
    return new Observable_1.Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/forkJoin.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.forkJoin = void 0;
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
var argsArgArrayOrObject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/argsArgArrayOrObject.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var args_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/args.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var mapOneOrManyArgs_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/mapOneOrManyArgs.js");
var createObject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/createObject.js");
function forkJoin() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var resultSelector = args_1.popResultSelector(args);
    var _a = argsArgArrayOrObject_1.argsArgArrayOrObject(args), sources = _a.args, keys = _a.keys;
    var result = new Observable_1.Observable(function (subscriber) {
        var length = sources.length;
        if (!length) {
            subscriber.complete();
            return;
        }
        var values = new Array(length);
        var remainingCompletions = length;
        var remainingEmissions = length;
        var _loop_1 = function (sourceIndex) {
            var hasValue = false;
            innerFrom_1.innerFrom(sources[sourceIndex]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
                if (!hasValue) {
                    hasValue = true;
                    remainingEmissions--;
                }
                values[sourceIndex] = value;
            }, function () { return remainingCompletions--; }, undefined, function () {
                if (!remainingCompletions || !hasValue) {
                    if (!remainingEmissions) {
                        subscriber.next(keys ? createObject_1.createObject(keys, values) : values);
                    }
                    subscriber.complete();
                }
            }));
        };
        for (var sourceIndex = 0; sourceIndex < length; sourceIndex++) {
            _loop_1(sourceIndex);
        }
    });
    return resultSelector ? result.pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : result;
}
exports.forkJoin = forkJoin;
//# sourceMappingURL=forkJoin.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/from.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.from = void 0;
var scheduled_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduled/scheduled.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
function from(input, scheduler) {
    return scheduler ? scheduled_1.scheduled(input, scheduler) : innerFrom_1.innerFrom(input);
}
exports.from = from;
//# sourceMappingURL=from.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/fromEvent.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromEvent = void 0;
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
var mergeMap_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/mergeMap.js");
var isArrayLike_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isArrayLike.js");
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
var mapOneOrManyArgs_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/mapOneOrManyArgs.js");
var nodeEventEmitterMethods = ['addListener', 'removeListener'];
var eventTargetMethods = ['addEventListener', 'removeEventListener'];
var jqueryMethods = ['on', 'off'];
function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction_1.isFunction(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
    }
    var _a = __read(isEventTarget(target)
        ? eventTargetMethods.map(function (methodName) { return function (handler) { return target[methodName](eventName, handler, options); }; })
        :
            isNodeStyleEventEmitter(target)
                ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName))
                : isJQueryStyleEventEmitter(target)
                    ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName))
                    : [], 2), add = _a[0], remove = _a[1];
    if (!add) {
        if (isArrayLike_1.isArrayLike(target)) {
            return mergeMap_1.mergeMap(function (subTarget) { return fromEvent(subTarget, eventName, options); })(innerFrom_1.innerFrom(target));
        }
    }
    if (!add) {
        throw new TypeError('Invalid event target');
    }
    return new Observable_1.Observable(function (subscriber) {
        var handler = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return subscriber.next(1 < args.length ? args : args[0]);
        };
        add(handler);
        return function () { return remove(handler); };
    });
}
exports.fromEvent = fromEvent;
function toCommonHandlerRegistry(target, eventName) {
    return function (methodName) { return function (handler) { return target[methodName](eventName, handler); }; };
}
function isNodeStyleEventEmitter(target) {
    return isFunction_1.isFunction(target.addListener) && isFunction_1.isFunction(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
    return isFunction_1.isFunction(target.on) && isFunction_1.isFunction(target.off);
}
function isEventTarget(target) {
    return isFunction_1.isFunction(target.addEventListener) && isFunction_1.isFunction(target.removeEventListener);
}
//# sourceMappingURL=fromEvent.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/fromEventPattern.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromEventPattern = void 0;
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
var mapOneOrManyArgs_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/mapOneOrManyArgs.js");
function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
    }
    return new Observable_1.Observable(function (subscriber) {
        var handler = function () {
            var e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                e[_i] = arguments[_i];
            }
            return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue = addHandler(handler);
        return isFunction_1.isFunction(removeHandler) ? function () { return removeHandler(handler, retValue); } : undefined;
    });
}
exports.fromEventPattern = fromEventPattern;
//# sourceMappingURL=fromEventPattern.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/fromSubscribable.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromSubscribable = void 0;
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
function fromSubscribable(subscribable) {
    return new Observable_1.Observable(function (subscriber) { return subscribable.subscribe(subscriber); });
}
exports.fromSubscribable = fromSubscribable;
//# sourceMappingURL=fromSubscribable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/generate.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generate = void 0;
var identity_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/identity.js");
var isScheduler_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isScheduler.js");
var defer_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/defer.js");
var scheduleIterable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduled/scheduleIterable.js");
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrScheduler, scheduler) {
    var _a, _b;
    var resultSelector;
    var initialState;
    if (arguments.length === 1) {
        (_a = initialStateOrOptions, initialState = _a.initialState, condition = _a.condition, iterate = _a.iterate, _b = _a.resultSelector, resultSelector = _b === void 0 ? identity_1.identity : _b, scheduler = _a.scheduler);
    }
    else {
        initialState = initialStateOrOptions;
        if (!resultSelectorOrScheduler || isScheduler_1.isScheduler(resultSelectorOrScheduler)) {
            resultSelector = identity_1.identity;
            scheduler = resultSelectorOrScheduler;
        }
        else {
            resultSelector = resultSelectorOrScheduler;
        }
    }
    function gen() {
        var state;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    state = initialState;
                    _a.label = 1;
                case 1:
                    if (!(!condition || condition(state))) return [3, 4];
                    return [4, resultSelector(state)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    state = iterate(state);
                    return [3, 1];
                case 4: return [2];
            }
        });
    }
    return defer_1.defer((scheduler
        ?
            function () { return scheduleIterable_1.scheduleIterable(gen(), scheduler); }
        :
            gen));
}
exports.generate = generate;
//# sourceMappingURL=generate.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/iif.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.iif = void 0;
var defer_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/defer.js");
function iif(condition, trueResult, falseResult) {
    return defer_1.defer(function () { return (condition() ? trueResult : falseResult); });
}
exports.iif = iif;
//# sourceMappingURL=iif.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromReadableStreamLike = exports.fromAsyncIterable = exports.fromIterable = exports.fromPromise = exports.fromArrayLike = exports.fromInteropObservable = exports.innerFrom = void 0;
var isArrayLike_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isArrayLike.js");
var isPromise_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isPromise.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
var isInteropObservable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isInteropObservable.js");
var isAsyncIterable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isAsyncIterable.js");
var throwUnobservableError_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/throwUnobservableError.js");
var isIterable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isIterable.js");
var isReadableStreamLike_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isReadableStreamLike.js");
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
var reportUnhandledError_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/reportUnhandledError.js");
var observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/symbol/observable.js");
function innerFrom(input) {
    if (input instanceof Observable_1.Observable) {
        return input;
    }
    if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) {
            return fromInteropObservable(input);
        }
        if (isArrayLike_1.isArrayLike(input)) {
            return fromArrayLike(input);
        }
        if (isPromise_1.isPromise(input)) {
            return fromPromise(input);
        }
        if (isAsyncIterable_1.isAsyncIterable(input)) {
            return fromAsyncIterable(input);
        }
        if (isIterable_1.isIterable(input)) {
            return fromIterable(input);
        }
        if (isReadableStreamLike_1.isReadableStreamLike(input)) {
            return fromReadableStreamLike(input);
        }
    }
    throw throwUnobservableError_1.createInvalidObservableTypeError(input);
}
exports.innerFrom = innerFrom;
function fromInteropObservable(obj) {
    return new Observable_1.Observable(function (subscriber) {
        var obs = obj[observable_1.observable]();
        if (isFunction_1.isFunction(obs.subscribe)) {
            return obs.subscribe(subscriber);
        }
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    });
}
exports.fromInteropObservable = fromInteropObservable;
function fromArrayLike(array) {
    return new Observable_1.Observable(function (subscriber) {
        for (var i = 0; i < array.length && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    });
}
exports.fromArrayLike = fromArrayLike;
function fromPromise(promise) {
    return new Observable_1.Observable(function (subscriber) {
        promise
            .then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, reportUnhandledError_1.reportUnhandledError);
    });
}
exports.fromPromise = fromPromise;
function fromIterable(iterable) {
    return new Observable_1.Observable(function (subscriber) {
        var e_1, _a;
        try {
            for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
                var value = iterable_1_1.value;
                subscriber.next(value);
                if (subscriber.closed) {
                    return;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        subscriber.complete();
    });
}
exports.fromIterable = fromIterable;
function fromAsyncIterable(asyncIterable) {
    return new Observable_1.Observable(function (subscriber) {
        process(asyncIterable, subscriber).catch(function (err) { return subscriber.error(err); });
    });
}
exports.fromAsyncIterable = fromAsyncIterable;
function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable(isReadableStreamLike_1.readableStreamLikeToAsyncGenerator(readableStream));
}
exports.fromReadableStreamLike = fromReadableStreamLike;
function process(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function () {
        var value, e_2_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 11]);
                    asyncIterable_1 = __asyncValues(asyncIterable);
                    _b.label = 1;
                case 1: return [4, asyncIterable_1.next()];
                case 2:
                    if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
                    value = asyncIterable_1_1.value;
                    subscriber.next(value);
                    if (subscriber.closed) {
                        return [2];
                    }
                    _b.label = 3;
                case 3: return [3, 1];
                case 4: return [3, 11];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 11];
                case 6:
                    _b.trys.push([6, , 9, 10]);
                    if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
                    return [4, _a.call(asyncIterable_1)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8: return [3, 10];
                case 9:
                    if (e_2) throw e_2.error;
                    return [7];
                case 10: return [7];
                case 11:
                    subscriber.complete();
                    return [2];
            }
        });
    });
}
//# sourceMappingURL=innerFrom.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/interval.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.interval = void 0;
var async_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/async.js");
var timer_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/timer.js");
function interval(period, scheduler) {
    if (period === void 0) { period = 0; }
    if (scheduler === void 0) { scheduler = async_1.asyncScheduler; }
    if (period < 0) {
        period = 0;
    }
    return timer_1.timer(period, period, scheduler);
}
exports.interval = interval;
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/merge.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.merge = void 0;
var mergeAll_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/mergeAll.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var empty_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/empty.js");
var args_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/args.js");
var from_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/from.js");
function merge() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(args);
    var concurrent = args_1.popNumber(args, Infinity);
    var sources = args;
    return !sources.length
        ?
            empty_1.EMPTY
        : sources.length === 1
            ?
                innerFrom_1.innerFrom(sources[0])
            :
                mergeAll_1.mergeAll(concurrent)(from_1.from(sources, scheduler));
}
exports.merge = merge;
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/never.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.never = exports.NEVER = void 0;
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
var noop_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/noop.js");
exports.NEVER = new Observable_1.Observable(noop_1.noop);
function never() {
    return exports.NEVER;
}
exports.never = never;
//# sourceMappingURL=never.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/of.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.of = void 0;
var args_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/args.js");
var from_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/from.js");
function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(args);
    return from_1.from(args, scheduler);
}
exports.of = of;
//# sourceMappingURL=of.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/onErrorResumeNext.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.onErrorResumeNext = void 0;
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
var argsOrArgArray_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/argsOrArgArray.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var noop_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/noop.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
function onErrorResumeNext() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    var nextSources = argsOrArgArray_1.argsOrArgArray(sources);
    return new Observable_1.Observable(function (subscriber) {
        var sourceIndex = 0;
        var subscribeNext = function () {
            if (sourceIndex < nextSources.length) {
                var nextSource = void 0;
                try {
                    nextSource = innerFrom_1.innerFrom(nextSources[sourceIndex++]);
                }
                catch (err) {
                    subscribeNext();
                    return;
                }
                var innerSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, undefined, noop_1.noop, noop_1.noop);
                nextSource.subscribe(innerSubscriber);
                innerSubscriber.add(subscribeNext);
            }
            else {
                subscriber.complete();
            }
        };
        subscribeNext();
    });
}
exports.onErrorResumeNext = onErrorResumeNext;
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/pairs.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pairs = void 0;
var from_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/from.js");
function pairs(obj, scheduler) {
    return from_1.from(Object.entries(obj), scheduler);
}
exports.pairs = pairs;
//# sourceMappingURL=pairs.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/partition.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.partition = void 0;
var not_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/not.js");
var filter_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/filter.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
function partition(source, predicate, thisArg) {
    return [filter_1.filter(predicate, thisArg)(innerFrom_1.innerFrom(source)), filter_1.filter(not_1.not(predicate, thisArg))(innerFrom_1.innerFrom(source))];
}
exports.partition = partition;
//# sourceMappingURL=partition.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/race.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.raceInit = exports.race = void 0;
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var argsOrArgArray_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/argsOrArgArray.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function race() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    sources = argsOrArgArray_1.argsOrArgArray(sources);
    return sources.length === 1 ? innerFrom_1.innerFrom(sources[0]) : new Observable_1.Observable(raceInit(sources));
}
exports.race = race;
function raceInit(sources) {
    return function (subscriber) {
        var subscriptions = [];
        var _loop_1 = function (i) {
            subscriptions.push(innerFrom_1.innerFrom(sources[i]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
                if (subscriptions) {
                    for (var s = 0; s < subscriptions.length; s++) {
                        s !== i && subscriptions[s].unsubscribe();
                    }
                    subscriptions = null;
                }
                subscriber.next(value);
            })));
        };
        for (var i = 0; subscriptions && !subscriber.closed && i < sources.length; i++) {
            _loop_1(i);
        }
    };
}
exports.raceInit = raceInit;
//# sourceMappingURL=race.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/range.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.range = void 0;
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
var empty_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/empty.js");
function range(start, count, scheduler) {
    if (count == null) {
        count = start;
        start = 0;
    }
    if (count <= 0) {
        return empty_1.EMPTY;
    }
    var end = count + start;
    return new Observable_1.Observable(scheduler
        ?
            function (subscriber) {
                var n = start;
                return scheduler.schedule(function () {
                    if (n < end) {
                        subscriber.next(n++);
                        this.schedule();
                    }
                    else {
                        subscriber.complete();
                    }
                });
            }
        :
            function (subscriber) {
                var n = start;
                while (n < end && !subscriber.closed) {
                    subscriber.next(n++);
                }
                subscriber.complete();
            });
}
exports.range = range;
//# sourceMappingURL=range.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/throwError.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.throwError = void 0;
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
function throwError(errorOrErrorFactory, scheduler) {
    var errorFactory = isFunction_1.isFunction(errorOrErrorFactory) ? errorOrErrorFactory : function () { return errorOrErrorFactory; };
    var init = function (subscriber) { return subscriber.error(errorFactory()); };
    return new Observable_1.Observable(scheduler ? function (subscriber) { return scheduler.schedule(init, 0, subscriber); } : init);
}
exports.throwError = throwError;
//# sourceMappingURL=throwError.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/timer.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.timer = void 0;
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
var async_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/async.js");
var isScheduler_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isScheduler.js");
var isDate_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isDate.js");
function timer(dueTime, intervalOrScheduler, scheduler) {
    if (dueTime === void 0) { dueTime = 0; }
    if (scheduler === void 0) { scheduler = async_1.async; }
    var intervalDuration = -1;
    if (intervalOrScheduler != null) {
        if (isScheduler_1.isScheduler(intervalOrScheduler)) {
            scheduler = intervalOrScheduler;
        }
        else {
            intervalDuration = intervalOrScheduler;
        }
    }
    return new Observable_1.Observable(function (subscriber) {
        var due = isDate_1.isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
        if (due < 0) {
            due = 0;
        }
        var n = 0;
        return scheduler.schedule(function () {
            if (!subscriber.closed) {
                subscriber.next(n++);
                if (0 <= intervalDuration) {
                    this.schedule(undefined, intervalDuration);
                }
                else {
                    subscriber.complete();
                }
            }
        }, due);
    });
}
exports.timer = timer;
//# sourceMappingURL=timer.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/using.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.using = void 0;
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var empty_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/empty.js");
function using(resourceFactory, observableFactory) {
    return new Observable_1.Observable(function (subscriber) {
        var resource = resourceFactory();
        var result = observableFactory(resource);
        var source = result ? innerFrom_1.innerFrom(result) : empty_1.EMPTY;
        source.subscribe(subscriber);
        return function () {
            if (resource) {
                resource.unsubscribe();
            }
        };
    });
}
exports.using = using;
//# sourceMappingURL=using.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/observable/zip.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.zip = void 0;
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var argsOrArgArray_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/argsOrArgArray.js");
var empty_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/empty.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var args_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/args.js");
function zip() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var resultSelector = args_1.popResultSelector(args);
    var sources = argsOrArgArray_1.argsOrArgArray(args);
    return sources.length
        ? new Observable_1.Observable(function (subscriber) {
            var buffers = sources.map(function () { return []; });
            var completed = sources.map(function () { return false; });
            subscriber.add(function () {
                buffers = completed = null;
            });
            var _loop_1 = function (sourceIndex) {
                innerFrom_1.innerFrom(sources[sourceIndex]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
                    buffers[sourceIndex].push(value);
                    if (buffers.every(function (buffer) { return buffer.length; })) {
                        var result = buffers.map(function (buffer) { return buffer.shift(); });
                        subscriber.next(resultSelector ? resultSelector.apply(void 0, __spreadArray([], __read(result))) : result);
                        if (buffers.some(function (buffer, i) { return !buffer.length && completed[i]; })) {
                            subscriber.complete();
                        }
                    }
                }, function () {
                    completed[sourceIndex] = true;
                    !buffers[sourceIndex].length && subscriber.complete();
                }));
            };
            for (var sourceIndex = 0; !subscriber.closed && sourceIndex < sources.length; sourceIndex++) {
                _loop_1(sourceIndex);
            }
            return function () {
                buffers = completed = null;
            };
        })
        : empty_1.EMPTY;
}
exports.zip = zip;
//# sourceMappingURL=zip.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OperatorSubscriber = exports.createOperatorSubscriber = void 0;
var Subscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subscriber.js");
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
exports.createOperatorSubscriber = createOperatorSubscriber;
var OperatorSubscriber = (function (_super) {
    __extends(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext
            ? function (value) {
                try {
                    onNext(value);
                }
                catch (err) {
                    destination.error(err);
                }
            }
            : _super.prototype._next;
        _this._error = onError
            ? function (err) {
                try {
                    onError(err);
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._error;
        _this._complete = onComplete
            ? function () {
                try {
                    onComplete();
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function () {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var closed_1 = this.closed;
            _super.prototype.unsubscribe.call(this);
            !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
    };
    return OperatorSubscriber;
}(Subscriber_1.Subscriber));
exports.OperatorSubscriber = OperatorSubscriber;
//# sourceMappingURL=OperatorSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/audit.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.audit = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function audit(durationSelector) {
    return lift_1.operate(function (source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        var durationSubscriber = null;
        var isComplete = false;
        var endDuration = function () {
            durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
            durationSubscriber = null;
            if (hasValue) {
                hasValue = false;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
            isComplete && subscriber.complete();
        };
        var cleanupDuration = function () {
            durationSubscriber = null;
            isComplete && subscriber.complete();
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            hasValue = true;
            lastValue = value;
            if (!durationSubscriber) {
                innerFrom_1.innerFrom(durationSelector(value)).subscribe((durationSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, endDuration, cleanupDuration)));
            }
        }, function () {
            isComplete = true;
            (!hasValue || !durationSubscriber || durationSubscriber.closed) && subscriber.complete();
        }));
    });
}
exports.audit = audit;
//# sourceMappingURL=audit.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/auditTime.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.auditTime = void 0;
var async_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/async.js");
var audit_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/audit.js");
var timer_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/timer.js");
function auditTime(duration, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.asyncScheduler; }
    return audit_1.audit(function () { return timer_1.timer(duration, scheduler); });
}
exports.auditTime = auditTime;
//# sourceMappingURL=auditTime.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/buffer.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buffer = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var noop_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/noop.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
function buffer(closingNotifier) {
    return lift_1.operate(function (source, subscriber) {
        var currentBuffer = [];
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) { return currentBuffer.push(value); }, function () {
            subscriber.next(currentBuffer);
            subscriber.complete();
        }));
        innerFrom_1.innerFrom(closingNotifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
            var b = currentBuffer;
            currentBuffer = [];
            subscriber.next(b);
        }, noop_1.noop));
        return function () {
            currentBuffer = null;
        };
    });
}
exports.buffer = buffer;
//# sourceMappingURL=buffer.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/bufferCount.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bufferCount = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var arrRemove_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/arrRemove.js");
function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) { startBufferEvery = null; }
    startBufferEvery = startBufferEvery !== null && startBufferEvery !== void 0 ? startBufferEvery : bufferSize;
    return lift_1.operate(function (source, subscriber) {
        var buffers = [];
        var count = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            var e_1, _a, e_2, _b;
            var toEmit = null;
            if (count++ % startBufferEvery === 0) {
                buffers.push([]);
            }
            try {
                for (var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()) {
                    var buffer = buffers_1_1.value;
                    buffer.push(value);
                    if (bufferSize <= buffer.length) {
                        toEmit = toEmit !== null && toEmit !== void 0 ? toEmit : [];
                        toEmit.push(buffer);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return)) _a.call(buffers_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (toEmit) {
                try {
                    for (var toEmit_1 = __values(toEmit), toEmit_1_1 = toEmit_1.next(); !toEmit_1_1.done; toEmit_1_1 = toEmit_1.next()) {
                        var buffer = toEmit_1_1.value;
                        arrRemove_1.arrRemove(buffers, buffer);
                        subscriber.next(buffer);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (toEmit_1_1 && !toEmit_1_1.done && (_b = toEmit_1.return)) _b.call(toEmit_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }, function () {
            var e_3, _a;
            try {
                for (var buffers_2 = __values(buffers), buffers_2_1 = buffers_2.next(); !buffers_2_1.done; buffers_2_1 = buffers_2.next()) {
                    var buffer = buffers_2_1.value;
                    subscriber.next(buffer);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (buffers_2_1 && !buffers_2_1.done && (_a = buffers_2.return)) _a.call(buffers_2);
                }
                finally { if (e_3) throw e_3.error; }
            }
            subscriber.complete();
        }, undefined, function () {
            buffers = null;
        }));
    });
}
exports.bufferCount = bufferCount;
//# sourceMappingURL=bufferCount.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/bufferTime.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bufferTime = void 0;
var Subscription_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subscription.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var arrRemove_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/arrRemove.js");
var async_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/async.js");
var args_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/args.js");
var executeSchedule_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/executeSchedule.js");
function bufferTime(bufferTimeSpan) {
    var _a, _b;
    var otherArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherArgs[_i - 1] = arguments[_i];
    }
    var scheduler = (_a = args_1.popScheduler(otherArgs)) !== null && _a !== void 0 ? _a : async_1.asyncScheduler;
    var bufferCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
    var maxBufferSize = otherArgs[1] || Infinity;
    return lift_1.operate(function (source, subscriber) {
        var bufferRecords = [];
        var restartOnEmit = false;
        var emit = function (record) {
            var buffer = record.buffer, subs = record.subs;
            subs.unsubscribe();
            arrRemove_1.arrRemove(bufferRecords, record);
            subscriber.next(buffer);
            restartOnEmit && startBuffer();
        };
        var startBuffer = function () {
            if (bufferRecords) {
                var subs = new Subscription_1.Subscription();
                subscriber.add(subs);
                var buffer = [];
                var record_1 = {
                    buffer: buffer,
                    subs: subs,
                };
                bufferRecords.push(record_1);
                executeSchedule_1.executeSchedule(subs, scheduler, function () { return emit(record_1); }, bufferTimeSpan);
            }
        };
        if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
            executeSchedule_1.executeSchedule(subscriber, scheduler, startBuffer, bufferCreationInterval, true);
        }
        else {
            restartOnEmit = true;
        }
        startBuffer();
        var bufferTimeSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            var e_1, _a;
            var recordsCopy = bufferRecords.slice();
            try {
                for (var recordsCopy_1 = __values(recordsCopy), recordsCopy_1_1 = recordsCopy_1.next(); !recordsCopy_1_1.done; recordsCopy_1_1 = recordsCopy_1.next()) {
                    var record = recordsCopy_1_1.value;
                    var buffer = record.buffer;
                    buffer.push(value);
                    maxBufferSize <= buffer.length && emit(record);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (recordsCopy_1_1 && !recordsCopy_1_1.done && (_a = recordsCopy_1.return)) _a.call(recordsCopy_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }, function () {
            while (bufferRecords === null || bufferRecords === void 0 ? void 0 : bufferRecords.length) {
                subscriber.next(bufferRecords.shift().buffer);
            }
            bufferTimeSubscriber === null || bufferTimeSubscriber === void 0 ? void 0 : bufferTimeSubscriber.unsubscribe();
            subscriber.complete();
            subscriber.unsubscribe();
        }, undefined, function () { return (bufferRecords = null); });
        source.subscribe(bufferTimeSubscriber);
    });
}
exports.bufferTime = bufferTime;
//# sourceMappingURL=bufferTime.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/bufferToggle.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bufferToggle = void 0;
var Subscription_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subscription.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var noop_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/noop.js");
var arrRemove_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/arrRemove.js");
function bufferToggle(openings, closingSelector) {
    return lift_1.operate(function (source, subscriber) {
        var buffers = [];
        innerFrom_1.innerFrom(openings).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (openValue) {
            var buffer = [];
            buffers.push(buffer);
            var closingSubscription = new Subscription_1.Subscription();
            var emitBuffer = function () {
                arrRemove_1.arrRemove(buffers, buffer);
                subscriber.next(buffer);
                closingSubscription.unsubscribe();
            };
            closingSubscription.add(innerFrom_1.innerFrom(closingSelector(openValue)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, emitBuffer, noop_1.noop)));
        }, noop_1.noop));
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            var e_1, _a;
            try {
                for (var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()) {
                    var buffer = buffers_1_1.value;
                    buffer.push(value);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return)) _a.call(buffers_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }, function () {
            while (buffers.length > 0) {
                subscriber.next(buffers.shift());
            }
            subscriber.complete();
        }));
    });
}
exports.bufferToggle = bufferToggle;
//# sourceMappingURL=bufferToggle.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/bufferWhen.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bufferWhen = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var noop_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/noop.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
function bufferWhen(closingSelector) {
    return lift_1.operate(function (source, subscriber) {
        var buffer = null;
        var closingSubscriber = null;
        var openBuffer = function () {
            closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
            var b = buffer;
            buffer = [];
            b && subscriber.next(b);
            innerFrom_1.innerFrom(closingSelector()).subscribe((closingSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, openBuffer, noop_1.noop)));
        };
        openBuffer();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) { return buffer === null || buffer === void 0 ? void 0 : buffer.push(value); }, function () {
            buffer && subscriber.next(buffer);
            subscriber.complete();
        }, undefined, function () { return (buffer = closingSubscriber = null); }));
    });
}
exports.bufferWhen = bufferWhen;
//# sourceMappingURL=bufferWhen.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/catchError.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.catchError = void 0;
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
function catchError(selector) {
    return lift_1.operate(function (source, subscriber) {
        var innerSub = null;
        var syncUnsub = false;
        var handledResult;
        innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, undefined, function (err) {
            handledResult = innerFrom_1.innerFrom(selector(err, catchError(selector)(source)));
            if (innerSub) {
                innerSub.unsubscribe();
                innerSub = null;
                handledResult.subscribe(subscriber);
            }
            else {
                syncUnsub = true;
            }
        }));
        if (syncUnsub) {
            innerSub.unsubscribe();
            innerSub = null;
            handledResult.subscribe(subscriber);
        }
    });
}
exports.catchError = catchError;
//# sourceMappingURL=catchError.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/combineAll.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.combineAll = void 0;
var combineLatestAll_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/combineLatestAll.js");
exports.combineAll = combineLatestAll_1.combineLatestAll;
//# sourceMappingURL=combineAll.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/combineLatest.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.combineLatest = void 0;
var combineLatest_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/combineLatest.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var argsOrArgArray_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/argsOrArgArray.js");
var mapOneOrManyArgs_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/mapOneOrManyArgs.js");
var pipe_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/pipe.js");
var args_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/args.js");
function combineLatest() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var resultSelector = args_1.popResultSelector(args);
    return resultSelector
        ? pipe_1.pipe(combineLatest.apply(void 0, __spreadArray([], __read(args))), mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector))
        : lift_1.operate(function (source, subscriber) {
            combineLatest_1.combineLatestInit(__spreadArray([source], __read(argsOrArgArray_1.argsOrArgArray(args))))(subscriber);
        });
}
exports.combineLatest = combineLatest;
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/combineLatestAll.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.combineLatestAll = void 0;
var combineLatest_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/combineLatest.js");
var joinAllInternals_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/joinAllInternals.js");
function combineLatestAll(project) {
    return joinAllInternals_1.joinAllInternals(combineLatest_1.combineLatest, project);
}
exports.combineLatestAll = combineLatestAll;
//# sourceMappingURL=combineLatestAll.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/combineLatestWith.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.combineLatestWith = void 0;
var combineLatest_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/combineLatest.js");
function combineLatestWith() {
    var otherSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
    }
    return combineLatest_1.combineLatest.apply(void 0, __spreadArray([], __read(otherSources)));
}
exports.combineLatestWith = combineLatestWith;
//# sourceMappingURL=combineLatestWith.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/concat.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.concat = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var concatAll_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/concatAll.js");
var args_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/args.js");
var from_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/from.js");
function concat() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(args);
    return lift_1.operate(function (source, subscriber) {
        concatAll_1.concatAll()(from_1.from(__spreadArray([source], __read(args)), scheduler)).subscribe(subscriber);
    });
}
exports.concat = concat;
//# sourceMappingURL=concat.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/concatAll.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.concatAll = void 0;
var mergeAll_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/mergeAll.js");
function concatAll() {
    return mergeAll_1.mergeAll(1);
}
exports.concatAll = concatAll;
//# sourceMappingURL=concatAll.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/concatMap.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.concatMap = void 0;
var mergeMap_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/mergeMap.js");
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
function concatMap(project, resultSelector) {
    return isFunction_1.isFunction(resultSelector) ? mergeMap_1.mergeMap(project, resultSelector, 1) : mergeMap_1.mergeMap(project, 1);
}
exports.concatMap = concatMap;
//# sourceMappingURL=concatMap.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/concatMapTo.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.concatMapTo = void 0;
var concatMap_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/concatMap.js");
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
function concatMapTo(innerObservable, resultSelector) {
    return isFunction_1.isFunction(resultSelector) ? concatMap_1.concatMap(function () { return innerObservable; }, resultSelector) : concatMap_1.concatMap(function () { return innerObservable; });
}
exports.concatMapTo = concatMapTo;
//# sourceMappingURL=concatMapTo.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/concatWith.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.concatWith = void 0;
var concat_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/concat.js");
function concatWith() {
    var otherSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
    }
    return concat_1.concat.apply(void 0, __spreadArray([], __read(otherSources)));
}
exports.concatWith = concatWith;
//# sourceMappingURL=concatWith.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/connect.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.connect = void 0;
var Subject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subject.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var fromSubscribable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/fromSubscribable.js");
var DEFAULT_CONFIG = {
    connector: function () { return new Subject_1.Subject(); },
};
function connect(selector, config) {
    if (config === void 0) { config = DEFAULT_CONFIG; }
    var connector = config.connector;
    return lift_1.operate(function (source, subscriber) {
        var subject = connector();
        innerFrom_1.innerFrom(selector(fromSubscribable_1.fromSubscribable(subject))).subscribe(subscriber);
        subscriber.add(source.subscribe(subject));
    });
}
exports.connect = connect;
//# sourceMappingURL=connect.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/count.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.count = void 0;
var reduce_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/reduce.js");
function count(predicate) {
    return reduce_1.reduce(function (total, value, i) { return (!predicate || predicate(value, i) ? total + 1 : total); }, 0);
}
exports.count = count;
//# sourceMappingURL=count.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/debounce.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.debounce = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var noop_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/noop.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
function debounce(durationSelector) {
    return lift_1.operate(function (source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        var durationSubscriber = null;
        var emit = function () {
            durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
            durationSubscriber = null;
            if (hasValue) {
                hasValue = false;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
            hasValue = true;
            lastValue = value;
            durationSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, emit, noop_1.noop);
            innerFrom_1.innerFrom(durationSelector(value)).subscribe(durationSubscriber);
        }, function () {
            emit();
            subscriber.complete();
        }, undefined, function () {
            lastValue = durationSubscriber = null;
        }));
    });
}
exports.debounce = debounce;
//# sourceMappingURL=debounce.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/debounceTime.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.debounceTime = void 0;
var async_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/async.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.asyncScheduler; }
    return lift_1.operate(function (source, subscriber) {
        var activeTask = null;
        var lastValue = null;
        var lastTime = null;
        var emit = function () {
            if (activeTask) {
                activeTask.unsubscribe();
                activeTask = null;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        function emitWhenIdle() {
            var targetTime = lastTime + dueTime;
            var now = scheduler.now();
            if (now < targetTime) {
                activeTask = this.schedule(undefined, targetTime - now);
                subscriber.add(activeTask);
                return;
            }
            emit();
        }
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            lastValue = value;
            lastTime = scheduler.now();
            if (!activeTask) {
                activeTask = scheduler.schedule(emitWhenIdle, dueTime);
                subscriber.add(activeTask);
            }
        }, function () {
            emit();
            subscriber.complete();
        }, undefined, function () {
            lastValue = activeTask = null;
        }));
    });
}
exports.debounceTime = debounceTime;
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/defaultIfEmpty.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultIfEmpty = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function defaultIfEmpty(defaultValue) {
    return lift_1.operate(function (source, subscriber) {
        var hasValue = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            hasValue = true;
            subscriber.next(value);
        }, function () {
            if (!hasValue) {
                subscriber.next(defaultValue);
            }
            subscriber.complete();
        }));
    });
}
exports.defaultIfEmpty = defaultIfEmpty;
//# sourceMappingURL=defaultIfEmpty.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/delay.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.delay = void 0;
var async_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/async.js");
var delayWhen_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/delayWhen.js");
var timer_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/timer.js");
function delay(due, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.asyncScheduler; }
    var duration = timer_1.timer(due, scheduler);
    return delayWhen_1.delayWhen(function () { return duration; });
}
exports.delay = delay;
//# sourceMappingURL=delay.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/delayWhen.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.delayWhen = void 0;
var concat_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/concat.js");
var take_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/take.js");
var ignoreElements_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/ignoreElements.js");
var mapTo_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/mapTo.js");
var mergeMap_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/mergeMap.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
        return function (source) {
            return concat_1.concat(subscriptionDelay.pipe(take_1.take(1), ignoreElements_1.ignoreElements()), source.pipe(delayWhen(delayDurationSelector)));
        };
    }
    return mergeMap_1.mergeMap(function (value, index) { return innerFrom_1.innerFrom(delayDurationSelector(value, index)).pipe(take_1.take(1), mapTo_1.mapTo(value)); });
}
exports.delayWhen = delayWhen;
//# sourceMappingURL=delayWhen.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/dematerialize.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dematerialize = void 0;
var Notification_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Notification.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function dematerialize() {
    return lift_1.operate(function (source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (notification) { return Notification_1.observeNotification(notification, subscriber); }));
    });
}
exports.dematerialize = dematerialize;
//# sourceMappingURL=dematerialize.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/distinct.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.distinct = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var noop_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/noop.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
function distinct(keySelector, flushes) {
    return lift_1.operate(function (source, subscriber) {
        var distinctKeys = new Set();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            var key = keySelector ? keySelector(value) : value;
            if (!distinctKeys.has(key)) {
                distinctKeys.add(key);
                subscriber.next(value);
            }
        }));
        flushes && innerFrom_1.innerFrom(flushes).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () { return distinctKeys.clear(); }, noop_1.noop));
    });
}
exports.distinct = distinct;
//# sourceMappingURL=distinct.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/distinctUntilChanged.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.distinctUntilChanged = void 0;
var identity_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/identity.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function distinctUntilChanged(comparator, keySelector) {
    if (keySelector === void 0) { keySelector = identity_1.identity; }
    comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
    return lift_1.operate(function (source, subscriber) {
        var previousKey;
        var first = true;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            var currentKey = keySelector(value);
            if (first || !comparator(previousKey, currentKey)) {
                first = false;
                previousKey = currentKey;
                subscriber.next(value);
            }
        }));
    });
}
exports.distinctUntilChanged = distinctUntilChanged;
function defaultCompare(a, b) {
    return a === b;
}
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/distinctUntilKeyChanged.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.distinctUntilKeyChanged = void 0;
var distinctUntilChanged_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/distinctUntilChanged.js");
function distinctUntilKeyChanged(key, compare) {
    return distinctUntilChanged_1.distinctUntilChanged(function (x, y) { return compare ? compare(x[key], y[key]) : x[key] === y[key]; });
}
exports.distinctUntilKeyChanged = distinctUntilKeyChanged;
//# sourceMappingURL=distinctUntilKeyChanged.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/elementAt.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.elementAt = void 0;
var ArgumentOutOfRangeError_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/ArgumentOutOfRangeError.js");
var filter_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/filter.js");
var throwIfEmpty_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/throwIfEmpty.js");
var defaultIfEmpty_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/defaultIfEmpty.js");
var take_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/take.js");
function elementAt(index, defaultValue) {
    if (index < 0) {
        throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
    }
    var hasDefaultValue = arguments.length >= 2;
    return function (source) {
        return source.pipe(filter_1.filter(function (v, i) { return i === index; }), take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function () { return new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError(); }));
    };
}
exports.elementAt = elementAt;
//# sourceMappingURL=elementAt.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/endWith.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.endWith = void 0;
var concat_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/concat.js");
var of_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/of.js");
function endWith() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return function (source) { return concat_1.concat(source, of_1.of.apply(void 0, __spreadArray([], __read(values)))); };
}
exports.endWith = endWith;
//# sourceMappingURL=endWith.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/every.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.every = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function every(predicate, thisArg) {
    return lift_1.operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            if (!predicate.call(thisArg, value, index++, source)) {
                subscriber.next(false);
                subscriber.complete();
            }
        }, function () {
            subscriber.next(true);
            subscriber.complete();
        }));
    });
}
exports.every = every;
//# sourceMappingURL=every.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/exhaust.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exhaust = void 0;
var exhaustAll_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/exhaustAll.js");
exports.exhaust = exhaustAll_1.exhaustAll;
//# sourceMappingURL=exhaust.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/exhaustAll.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exhaustAll = void 0;
var exhaustMap_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/exhaustMap.js");
var identity_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/identity.js");
function exhaustAll() {
    return exhaustMap_1.exhaustMap(identity_1.identity);
}
exports.exhaustAll = exhaustAll;
//# sourceMappingURL=exhaustAll.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/exhaustMap.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exhaustMap = void 0;
var map_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/map.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function exhaustMap(project, resultSelector) {
    if (resultSelector) {
        return function (source) {
            return source.pipe(exhaustMap(function (a, i) { return innerFrom_1.innerFrom(project(a, i)).pipe(map_1.map(function (b, ii) { return resultSelector(a, b, i, ii); })); }));
        };
    }
    return lift_1.operate(function (source, subscriber) {
        var index = 0;
        var innerSub = null;
        var isComplete = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (outerValue) {
            if (!innerSub) {
                innerSub = OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, function () {
                    innerSub = null;
                    isComplete && subscriber.complete();
                });
                innerFrom_1.innerFrom(project(outerValue, index++)).subscribe(innerSub);
            }
        }, function () {
            isComplete = true;
            !innerSub && subscriber.complete();
        }));
    });
}
exports.exhaustMap = exhaustMap;
//# sourceMappingURL=exhaustMap.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/expand.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.expand = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var mergeInternals_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/mergeInternals.js");
function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) { concurrent = Infinity; }
    concurrent = (concurrent || 0) < 1 ? Infinity : concurrent;
    return lift_1.operate(function (source, subscriber) {
        return mergeInternals_1.mergeInternals(source, subscriber, project, concurrent, undefined, true, scheduler);
    });
}
exports.expand = expand;
//# sourceMappingURL=expand.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/filter.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.filter = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function filter(predicate, thisArg) {
    return lift_1.operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) { return predicate.call(thisArg, value, index++) && subscriber.next(value); }));
    });
}
exports.filter = filter;
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/finalize.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.finalize = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
function finalize(callback) {
    return lift_1.operate(function (source, subscriber) {
        try {
            source.subscribe(subscriber);
        }
        finally {
            subscriber.add(callback);
        }
    });
}
exports.finalize = finalize;
//# sourceMappingURL=finalize.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/find.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createFind = exports.find = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function find(predicate, thisArg) {
    return lift_1.operate(createFind(predicate, thisArg, 'value'));
}
exports.find = find;
function createFind(predicate, thisArg, emit) {
    var findIndex = emit === 'index';
    return function (source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            var i = index++;
            if (predicate.call(thisArg, value, i, source)) {
                subscriber.next(findIndex ? i : value);
                subscriber.complete();
            }
        }, function () {
            subscriber.next(findIndex ? -1 : undefined);
            subscriber.complete();
        }));
    };
}
exports.createFind = createFind;
//# sourceMappingURL=find.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/findIndex.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.findIndex = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var find_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/find.js");
function findIndex(predicate, thisArg) {
    return lift_1.operate(find_1.createFind(predicate, thisArg, 'index'));
}
exports.findIndex = findIndex;
//# sourceMappingURL=findIndex.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/first.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.first = void 0;
var EmptyError_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/EmptyError.js");
var filter_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/filter.js");
var take_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/take.js");
var defaultIfEmpty_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/defaultIfEmpty.js");
var throwIfEmpty_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/throwIfEmpty.js");
var identity_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/identity.js");
function first(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function (source) {
        return source.pipe(predicate ? filter_1.filter(function (v, i) { return predicate(v, i, source); }) : identity_1.identity, take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function () { return new EmptyError_1.EmptyError(); }));
    };
}
exports.first = first;
//# sourceMappingURL=first.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/flatMap.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.flatMap = void 0;
var mergeMap_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/mergeMap.js");
exports.flatMap = mergeMap_1.mergeMap;
//# sourceMappingURL=flatMap.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/groupBy.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.groupBy = void 0;
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var Subject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subject.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function groupBy(keySelector, elementOrOptions, duration, connector) {
    return lift_1.operate(function (source, subscriber) {
        var element;
        if (!elementOrOptions || typeof elementOrOptions === 'function') {
            element = elementOrOptions;
        }
        else {
            (duration = elementOrOptions.duration, element = elementOrOptions.element, connector = elementOrOptions.connector);
        }
        var groups = new Map();
        var notify = function (cb) {
            groups.forEach(cb);
            cb(subscriber);
        };
        var handleError = function (err) { return notify(function (consumer) { return consumer.error(err); }); };
        var activeGroups = 0;
        var teardownAttempted = false;
        var groupBySourceSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, function (value) {
            try {
                var key_1 = keySelector(value);
                var group_1 = groups.get(key_1);
                if (!group_1) {
                    groups.set(key_1, (group_1 = connector ? connector() : new Subject_1.Subject()));
                    var grouped = createGroupedObservable(key_1, group_1);
                    subscriber.next(grouped);
                    if (duration) {
                        var durationSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(group_1, function () {
                            group_1.complete();
                            durationSubscriber_1 === null || durationSubscriber_1 === void 0 ? void 0 : durationSubscriber_1.unsubscribe();
                        }, undefined, undefined, function () { return groups.delete(key_1); });
                        groupBySourceSubscriber.add(innerFrom_1.innerFrom(duration(grouped)).subscribe(durationSubscriber_1));
                    }
                }
                group_1.next(element ? element(value) : value);
            }
            catch (err) {
                handleError(err);
            }
        }, function () { return notify(function (consumer) { return consumer.complete(); }); }, handleError, function () { return groups.clear(); }, function () {
            teardownAttempted = true;
            return activeGroups === 0;
        });
        source.subscribe(groupBySourceSubscriber);
        function createGroupedObservable(key, groupSubject) {
            var result = new Observable_1.Observable(function (groupSubscriber) {
                activeGroups++;
                var innerSub = groupSubject.subscribe(groupSubscriber);
                return function () {
                    innerSub.unsubscribe();
                    --activeGroups === 0 && teardownAttempted && groupBySourceSubscriber.unsubscribe();
                };
            });
            result.key = key;
            return result;
        }
    });
}
exports.groupBy = groupBy;
//# sourceMappingURL=groupBy.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/ignoreElements.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ignoreElements = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var noop_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/noop.js");
function ignoreElements() {
    return lift_1.operate(function (source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, noop_1.noop));
    });
}
exports.ignoreElements = ignoreElements;
//# sourceMappingURL=ignoreElements.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/isEmpty.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isEmpty = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function isEmpty() {
    return lift_1.operate(function (source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
            subscriber.next(false);
            subscriber.complete();
        }, function () {
            subscriber.next(true);
            subscriber.complete();
        }));
    });
}
exports.isEmpty = isEmpty;
//# sourceMappingURL=isEmpty.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/joinAllInternals.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.joinAllInternals = void 0;
var identity_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/identity.js");
var mapOneOrManyArgs_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/mapOneOrManyArgs.js");
var pipe_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/pipe.js");
var mergeMap_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/mergeMap.js");
var toArray_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/toArray.js");
function joinAllInternals(joinFn, project) {
    return pipe_1.pipe(toArray_1.toArray(), mergeMap_1.mergeMap(function (sources) { return joinFn(sources); }), project ? mapOneOrManyArgs_1.mapOneOrManyArgs(project) : identity_1.identity);
}
exports.joinAllInternals = joinAllInternals;
//# sourceMappingURL=joinAllInternals.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/last.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.last = void 0;
var EmptyError_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/EmptyError.js");
var filter_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/filter.js");
var takeLast_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/takeLast.js");
var throwIfEmpty_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/throwIfEmpty.js");
var defaultIfEmpty_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/defaultIfEmpty.js");
var identity_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/identity.js");
function last(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function (source) {
        return source.pipe(predicate ? filter_1.filter(function (v, i) { return predicate(v, i, source); }) : identity_1.identity, takeLast_1.takeLast(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function () { return new EmptyError_1.EmptyError(); }));
    };
}
exports.last = last;
//# sourceMappingURL=last.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/map.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.map = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function map(project, thisArg) {
    return lift_1.operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}
exports.map = map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/mapTo.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapTo = void 0;
var map_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/map.js");
function mapTo(value) {
    return map_1.map(function () { return value; });
}
exports.mapTo = mapTo;
//# sourceMappingURL=mapTo.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/materialize.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.materialize = void 0;
var Notification_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Notification.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function materialize() {
    return lift_1.operate(function (source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            subscriber.next(Notification_1.Notification.createNext(value));
        }, function () {
            subscriber.next(Notification_1.Notification.createComplete());
            subscriber.complete();
        }, function (err) {
            subscriber.next(Notification_1.Notification.createError(err));
            subscriber.complete();
        }));
    });
}
exports.materialize = materialize;
//# sourceMappingURL=materialize.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/max.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.max = void 0;
var reduce_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/reduce.js");
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
function max(comparer) {
    return reduce_1.reduce(isFunction_1.isFunction(comparer) ? function (x, y) { return (comparer(x, y) > 0 ? x : y); } : function (x, y) { return (x > y ? x : y); });
}
exports.max = max;
//# sourceMappingURL=max.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/merge.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.merge = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var argsOrArgArray_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/argsOrArgArray.js");
var mergeAll_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/mergeAll.js");
var args_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/args.js");
var from_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/from.js");
function merge() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(args);
    var concurrent = args_1.popNumber(args, Infinity);
    args = argsOrArgArray_1.argsOrArgArray(args);
    return lift_1.operate(function (source, subscriber) {
        mergeAll_1.mergeAll(concurrent)(from_1.from(__spreadArray([source], __read(args)), scheduler)).subscribe(subscriber);
    });
}
exports.merge = merge;
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/mergeAll.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mergeAll = void 0;
var mergeMap_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/mergeMap.js");
var identity_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/identity.js");
function mergeAll(concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    return mergeMap_1.mergeMap(identity_1.identity, concurrent);
}
exports.mergeAll = mergeAll;
//# sourceMappingURL=mergeAll.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/mergeInternals.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mergeInternals = void 0;
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var executeSchedule_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/executeSchedule.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
    var buffer = [];
    var active = 0;
    var index = 0;
    var isComplete = false;
    var checkComplete = function () {
        if (isComplete && !buffer.length && !active) {
            subscriber.complete();
        }
    };
    var outerNext = function (value) { return (active < concurrent ? doInnerSub(value) : buffer.push(value)); };
    var doInnerSub = function (value) {
        expand && subscriber.next(value);
        active++;
        var innerComplete = false;
        innerFrom_1.innerFrom(project(value, index++)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (innerValue) {
            onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
            if (expand) {
                outerNext(innerValue);
            }
            else {
                subscriber.next(innerValue);
            }
        }, function () {
            innerComplete = true;
        }, undefined, function () {
            if (innerComplete) {
                try {
                    active--;
                    var _loop_1 = function () {
                        var bufferedValue = buffer.shift();
                        if (innerSubScheduler) {
                            executeSchedule_1.executeSchedule(subscriber, innerSubScheduler, function () { return doInnerSub(bufferedValue); });
                        }
                        else {
                            doInnerSub(bufferedValue);
                        }
                    };
                    while (buffer.length && active < concurrent) {
                        _loop_1();
                    }
                    checkComplete();
                }
                catch (err) {
                    subscriber.error(err);
                }
            }
        }));
    };
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, outerNext, function () {
        isComplete = true;
        checkComplete();
    }));
    return function () {
        additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
    };
}
exports.mergeInternals = mergeInternals;
//# sourceMappingURL=mergeInternals.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/mergeMap.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mergeMap = void 0;
var map_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/map.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var mergeInternals_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/mergeInternals.js");
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    if (isFunction_1.isFunction(resultSelector)) {
        return mergeMap(function (a, i) { return map_1.map(function (b, ii) { return resultSelector(a, b, i, ii); })(innerFrom_1.innerFrom(project(a, i))); }, concurrent);
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return lift_1.operate(function (source, subscriber) { return mergeInternals_1.mergeInternals(source, subscriber, project, concurrent); });
}
exports.mergeMap = mergeMap;
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/mergeMapTo.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mergeMapTo = void 0;
var mergeMap_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/mergeMap.js");
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    if (isFunction_1.isFunction(resultSelector)) {
        return mergeMap_1.mergeMap(function () { return innerObservable; }, resultSelector, concurrent);
    }
    if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return mergeMap_1.mergeMap(function () { return innerObservable; }, concurrent);
}
exports.mergeMapTo = mergeMapTo;
//# sourceMappingURL=mergeMapTo.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/mergeScan.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mergeScan = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var mergeInternals_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/mergeInternals.js");
function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    return lift_1.operate(function (source, subscriber) {
        var state = seed;
        return mergeInternals_1.mergeInternals(source, subscriber, function (value, index) { return accumulator(state, value, index); }, concurrent, function (value) {
            state = value;
        }, false, undefined, function () { return (state = null); });
    });
}
exports.mergeScan = mergeScan;
//# sourceMappingURL=mergeScan.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/mergeWith.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mergeWith = void 0;
var merge_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/merge.js");
function mergeWith() {
    var otherSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
    }
    return merge_1.merge.apply(void 0, __spreadArray([], __read(otherSources)));
}
exports.mergeWith = mergeWith;
//# sourceMappingURL=mergeWith.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/min.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.min = void 0;
var reduce_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/reduce.js");
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
function min(comparer) {
    return reduce_1.reduce(isFunction_1.isFunction(comparer) ? function (x, y) { return (comparer(x, y) < 0 ? x : y); } : function (x, y) { return (x < y ? x : y); });
}
exports.min = min;
//# sourceMappingURL=min.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/multicast.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.multicast = void 0;
var ConnectableObservable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/ConnectableObservable.js");
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
var connect_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/connect.js");
function multicast(subjectOrSubjectFactory, selector) {
    var subjectFactory = isFunction_1.isFunction(subjectOrSubjectFactory) ? subjectOrSubjectFactory : function () { return subjectOrSubjectFactory; };
    if (isFunction_1.isFunction(selector)) {
        return connect_1.connect(selector, {
            connector: subjectFactory,
        });
    }
    return function (source) { return new ConnectableObservable_1.ConnectableObservable(source, subjectFactory); };
}
exports.multicast = multicast;
//# sourceMappingURL=multicast.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/observeOn.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.observeOn = void 0;
var executeSchedule_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/executeSchedule.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function observeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return lift_1.operate(function (source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) { return executeSchedule_1.executeSchedule(subscriber, scheduler, function () { return subscriber.next(value); }, delay); }, function () { return executeSchedule_1.executeSchedule(subscriber, scheduler, function () { return subscriber.complete(); }, delay); }, function (err) { return executeSchedule_1.executeSchedule(subscriber, scheduler, function () { return subscriber.error(err); }, delay); }));
    });
}
exports.observeOn = observeOn;
//# sourceMappingURL=observeOn.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/onErrorResumeNextWith.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.onErrorResumeNext = exports.onErrorResumeNextWith = void 0;
var argsOrArgArray_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/argsOrArgArray.js");
var onErrorResumeNext_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/onErrorResumeNext.js");
function onErrorResumeNextWith() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    var nextSources = argsOrArgArray_1.argsOrArgArray(sources);
    return function (source) { return onErrorResumeNext_1.onErrorResumeNext.apply(void 0, __spreadArray([source], __read(nextSources))); };
}
exports.onErrorResumeNextWith = onErrorResumeNextWith;
exports.onErrorResumeNext = onErrorResumeNextWith;
//# sourceMappingURL=onErrorResumeNextWith.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/pairwise.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pairwise = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function pairwise() {
    return lift_1.operate(function (source, subscriber) {
        var prev;
        var hasPrev = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            var p = prev;
            prev = value;
            hasPrev && subscriber.next([p, value]);
            hasPrev = true;
        }));
    });
}
exports.pairwise = pairwise;
//# sourceMappingURL=pairwise.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/pluck.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pluck = void 0;
var map_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/map.js");
function pluck() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i] = arguments[_i];
    }
    var length = properties.length;
    if (length === 0) {
        throw new Error('list of properties cannot be empty.');
    }
    return map_1.map(function (x) {
        var currentProp = x;
        for (var i = 0; i < length; i++) {
            var p = currentProp === null || currentProp === void 0 ? void 0 : currentProp[properties[i]];
            if (typeof p !== 'undefined') {
                currentProp = p;
            }
            else {
                return undefined;
            }
        }
        return currentProp;
    });
}
exports.pluck = pluck;
//# sourceMappingURL=pluck.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/publish.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.publish = void 0;
var Subject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subject.js");
var multicast_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/multicast.js");
var connect_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/connect.js");
function publish(selector) {
    return selector ? function (source) { return connect_1.connect(selector)(source); } : function (source) { return multicast_1.multicast(new Subject_1.Subject())(source); };
}
exports.publish = publish;
//# sourceMappingURL=publish.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/publishBehavior.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.publishBehavior = void 0;
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/BehaviorSubject.js");
var ConnectableObservable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/ConnectableObservable.js");
function publishBehavior(initialValue) {
    return function (source) {
        var subject = new BehaviorSubject_1.BehaviorSubject(initialValue);
        return new ConnectableObservable_1.ConnectableObservable(source, function () { return subject; });
    };
}
exports.publishBehavior = publishBehavior;
//# sourceMappingURL=publishBehavior.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/publishLast.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.publishLast = void 0;
var AsyncSubject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/AsyncSubject.js");
var ConnectableObservable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/ConnectableObservable.js");
function publishLast() {
    return function (source) {
        var subject = new AsyncSubject_1.AsyncSubject();
        return new ConnectableObservable_1.ConnectableObservable(source, function () { return subject; });
    };
}
exports.publishLast = publishLast;
//# sourceMappingURL=publishLast.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/publishReplay.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.publishReplay = void 0;
var ReplaySubject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/ReplaySubject.js");
var multicast_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/multicast.js");
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
function publishReplay(bufferSize, windowTime, selectorOrScheduler, timestampProvider) {
    if (selectorOrScheduler && !isFunction_1.isFunction(selectorOrScheduler)) {
        timestampProvider = selectorOrScheduler;
    }
    var selector = isFunction_1.isFunction(selectorOrScheduler) ? selectorOrScheduler : undefined;
    return function (source) { return multicast_1.multicast(new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, timestampProvider), selector)(source); };
}
exports.publishReplay = publishReplay;
//# sourceMappingURL=publishReplay.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/raceWith.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.raceWith = void 0;
var race_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/race.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var identity_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/identity.js");
function raceWith() {
    var otherSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
    }
    return !otherSources.length
        ? identity_1.identity
        : lift_1.operate(function (source, subscriber) {
            race_1.raceInit(__spreadArray([source], __read(otherSources)))(subscriber);
        });
}
exports.raceWith = raceWith;
//# sourceMappingURL=raceWith.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/reduce.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.reduce = void 0;
var scanInternals_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/scanInternals.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
function reduce(accumulator, seed) {
    return lift_1.operate(scanInternals_1.scanInternals(accumulator, seed, arguments.length >= 2, false, true));
}
exports.reduce = reduce;
//# sourceMappingURL=reduce.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/refCount.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.refCount = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function refCount() {
    return lift_1.operate(function (source, subscriber) {
        var connection = null;
        source._refCount++;
        var refCounter = OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, undefined, undefined, function () {
            if (!source || source._refCount <= 0 || 0 < --source._refCount) {
                connection = null;
                return;
            }
            var sharedConnection = source._connection;
            var conn = connection;
            connection = null;
            if (sharedConnection && (!conn || sharedConnection === conn)) {
                sharedConnection.unsubscribe();
            }
            subscriber.unsubscribe();
        });
        source.subscribe(refCounter);
        if (!refCounter.closed) {
            connection = source.connect();
        }
    });
}
exports.refCount = refCount;
//# sourceMappingURL=refCount.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/repeat.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.repeat = void 0;
var empty_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/empty.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var timer_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/timer.js");
function repeat(countOrConfig) {
    var _a;
    var count = Infinity;
    var delay;
    if (countOrConfig != null) {
        if (typeof countOrConfig === 'object') {
            (_a = countOrConfig.count, count = _a === void 0 ? Infinity : _a, delay = countOrConfig.delay);
        }
        else {
            count = countOrConfig;
        }
    }
    return count <= 0
        ? function () { return empty_1.EMPTY; }
        : lift_1.operate(function (source, subscriber) {
            var soFar = 0;
            var sourceSub;
            var resubscribe = function () {
                sourceSub === null || sourceSub === void 0 ? void 0 : sourceSub.unsubscribe();
                sourceSub = null;
                if (delay != null) {
                    var notifier = typeof delay === 'number' ? timer_1.timer(delay) : innerFrom_1.innerFrom(delay(soFar));
                    var notifierSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
                        notifierSubscriber_1.unsubscribe();
                        subscribeToSource();
                    });
                    notifier.subscribe(notifierSubscriber_1);
                }
                else {
                    subscribeToSource();
                }
            };
            var subscribeToSource = function () {
                var syncUnsub = false;
                sourceSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, function () {
                    if (++soFar < count) {
                        if (sourceSub) {
                            resubscribe();
                        }
                        else {
                            syncUnsub = true;
                        }
                    }
                    else {
                        subscriber.complete();
                    }
                }));
                if (syncUnsub) {
                    resubscribe();
                }
            };
            subscribeToSource();
        });
}
exports.repeat = repeat;
//# sourceMappingURL=repeat.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/repeatWhen.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.repeatWhen = void 0;
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var Subject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subject.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function repeatWhen(notifier) {
    return lift_1.operate(function (source, subscriber) {
        var innerSub;
        var syncResub = false;
        var completions$;
        var isNotifierComplete = false;
        var isMainComplete = false;
        var checkComplete = function () { return isMainComplete && isNotifierComplete && (subscriber.complete(), true); };
        var getCompletionSubject = function () {
            if (!completions$) {
                completions$ = new Subject_1.Subject();
                innerFrom_1.innerFrom(notifier(completions$)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
                    if (innerSub) {
                        subscribeForRepeatWhen();
                    }
                    else {
                        syncResub = true;
                    }
                }, function () {
                    isNotifierComplete = true;
                    checkComplete();
                }));
            }
            return completions$;
        };
        var subscribeForRepeatWhen = function () {
            isMainComplete = false;
            innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, function () {
                isMainComplete = true;
                !checkComplete() && getCompletionSubject().next();
            }));
            if (syncResub) {
                innerSub.unsubscribe();
                innerSub = null;
                syncResub = false;
                subscribeForRepeatWhen();
            }
        };
        subscribeForRepeatWhen();
    });
}
exports.repeatWhen = repeatWhen;
//# sourceMappingURL=repeatWhen.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/retry.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.retry = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var identity_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/identity.js");
var timer_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/timer.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
function retry(configOrCount) {
    if (configOrCount === void 0) { configOrCount = Infinity; }
    var config;
    if (configOrCount && typeof configOrCount === 'object') {
        config = configOrCount;
    }
    else {
        config = {
            count: configOrCount,
        };
    }
    var _a = config.count, count = _a === void 0 ? Infinity : _a, delay = config.delay, _b = config.resetOnSuccess, resetOnSuccess = _b === void 0 ? false : _b;
    return count <= 0
        ? identity_1.identity
        : lift_1.operate(function (source, subscriber) {
            var soFar = 0;
            var innerSub;
            var subscribeForRetry = function () {
                var syncUnsub = false;
                innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
                    if (resetOnSuccess) {
                        soFar = 0;
                    }
                    subscriber.next(value);
                }, undefined, function (err) {
                    if (soFar++ < count) {
                        var resub_1 = function () {
                            if (innerSub) {
                                innerSub.unsubscribe();
                                innerSub = null;
                                subscribeForRetry();
                            }
                            else {
                                syncUnsub = true;
                            }
                        };
                        if (delay != null) {
                            var notifier = typeof delay === 'number' ? timer_1.timer(delay) : innerFrom_1.innerFrom(delay(err, soFar));
                            var notifierSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
                                notifierSubscriber_1.unsubscribe();
                                resub_1();
                            }, function () {
                                subscriber.complete();
                            });
                            notifier.subscribe(notifierSubscriber_1);
                        }
                        else {
                            resub_1();
                        }
                    }
                    else {
                        subscriber.error(err);
                    }
                }));
                if (syncUnsub) {
                    innerSub.unsubscribe();
                    innerSub = null;
                    subscribeForRetry();
                }
            };
            subscribeForRetry();
        });
}
exports.retry = retry;
//# sourceMappingURL=retry.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/retryWhen.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.retryWhen = void 0;
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var Subject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subject.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function retryWhen(notifier) {
    return lift_1.operate(function (source, subscriber) {
        var innerSub;
        var syncResub = false;
        var errors$;
        var subscribeForRetryWhen = function () {
            innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, undefined, function (err) {
                if (!errors$) {
                    errors$ = new Subject_1.Subject();
                    innerFrom_1.innerFrom(notifier(errors$)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
                        return innerSub ? subscribeForRetryWhen() : (syncResub = true);
                    }));
                }
                if (errors$) {
                    errors$.next(err);
                }
            }));
            if (syncResub) {
                innerSub.unsubscribe();
                innerSub = null;
                syncResub = false;
                subscribeForRetryWhen();
            }
        };
        subscribeForRetryWhen();
    });
}
exports.retryWhen = retryWhen;
//# sourceMappingURL=retryWhen.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/sample.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sample = void 0;
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var noop_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/noop.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function sample(notifier) {
    return lift_1.operate(function (source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            hasValue = true;
            lastValue = value;
        }));
        innerFrom_1.innerFrom(notifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
            if (hasValue) {
                hasValue = false;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        }, noop_1.noop));
    });
}
exports.sample = sample;
//# sourceMappingURL=sample.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/sampleTime.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sampleTime = void 0;
var async_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/async.js");
var sample_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/sample.js");
var interval_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/interval.js");
function sampleTime(period, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.asyncScheduler; }
    return sample_1.sample(interval_1.interval(period, scheduler));
}
exports.sampleTime = sampleTime;
//# sourceMappingURL=sampleTime.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/scan.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.scan = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var scanInternals_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/scanInternals.js");
function scan(accumulator, seed) {
    return lift_1.operate(scanInternals_1.scanInternals(accumulator, seed, arguments.length >= 2, true));
}
exports.scan = scan;
//# sourceMappingURL=scan.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/scanInternals.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.scanInternals = void 0;
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
    return function (source, subscriber) {
        var hasState = hasSeed;
        var state = seed;
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            var i = index++;
            state = hasState
                ?
                    accumulator(state, value, i)
                :
                    ((hasState = true), value);
            emitOnNext && subscriber.next(state);
        }, emitBeforeComplete &&
            (function () {
                hasState && subscriber.next(state);
                subscriber.complete();
            })));
    };
}
exports.scanInternals = scanInternals;
//# sourceMappingURL=scanInternals.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/sequenceEqual.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sequenceEqual = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
function sequenceEqual(compareTo, comparator) {
    if (comparator === void 0) { comparator = function (a, b) { return a === b; }; }
    return lift_1.operate(function (source, subscriber) {
        var aState = createState();
        var bState = createState();
        var emit = function (isEqual) {
            subscriber.next(isEqual);
            subscriber.complete();
        };
        var createSubscriber = function (selfState, otherState) {
            var sequenceEqualSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (a) {
                var buffer = otherState.buffer, complete = otherState.complete;
                if (buffer.length === 0) {
                    complete ? emit(false) : selfState.buffer.push(a);
                }
                else {
                    !comparator(a, buffer.shift()) && emit(false);
                }
            }, function () {
                selfState.complete = true;
                var complete = otherState.complete, buffer = otherState.buffer;
                complete && emit(buffer.length === 0);
                sequenceEqualSubscriber === null || sequenceEqualSubscriber === void 0 ? void 0 : sequenceEqualSubscriber.unsubscribe();
            });
            return sequenceEqualSubscriber;
        };
        source.subscribe(createSubscriber(aState, bState));
        innerFrom_1.innerFrom(compareTo).subscribe(createSubscriber(bState, aState));
    });
}
exports.sequenceEqual = sequenceEqual;
function createState() {
    return {
        buffer: [],
        complete: false,
    };
}
//# sourceMappingURL=sequenceEqual.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/share.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.share = void 0;
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var Subject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subject.js");
var Subscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subscriber.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
function share(options) {
    if (options === void 0) { options = {}; }
    var _a = options.connector, connector = _a === void 0 ? function () { return new Subject_1.Subject(); } : _a, _b = options.resetOnError, resetOnError = _b === void 0 ? true : _b, _c = options.resetOnComplete, resetOnComplete = _c === void 0 ? true : _c, _d = options.resetOnRefCountZero, resetOnRefCountZero = _d === void 0 ? true : _d;
    return function (wrapperSource) {
        var connection;
        var resetConnection;
        var subject;
        var refCount = 0;
        var hasCompleted = false;
        var hasErrored = false;
        var cancelReset = function () {
            resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
            resetConnection = undefined;
        };
        var reset = function () {
            cancelReset();
            connection = subject = undefined;
            hasCompleted = hasErrored = false;
        };
        var resetAndUnsubscribe = function () {
            var conn = connection;
            reset();
            conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
        };
        return lift_1.operate(function (source, subscriber) {
            refCount++;
            if (!hasErrored && !hasCompleted) {
                cancelReset();
            }
            var dest = (subject = subject !== null && subject !== void 0 ? subject : connector());
            subscriber.add(function () {
                refCount--;
                if (refCount === 0 && !hasErrored && !hasCompleted) {
                    resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
                }
            });
            dest.subscribe(subscriber);
            if (!connection &&
                refCount > 0) {
                connection = new Subscriber_1.SafeSubscriber({
                    next: function (value) { return dest.next(value); },
                    error: function (err) {
                        hasErrored = true;
                        cancelReset();
                        resetConnection = handleReset(reset, resetOnError, err);
                        dest.error(err);
                    },
                    complete: function () {
                        hasCompleted = true;
                        cancelReset();
                        resetConnection = handleReset(reset, resetOnComplete);
                        dest.complete();
                    },
                });
                innerFrom_1.innerFrom(source).subscribe(connection);
            }
        })(wrapperSource);
    };
}
exports.share = share;
function handleReset(reset, on) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (on === true) {
        reset();
        return;
    }
    if (on === false) {
        return;
    }
    var onSubscriber = new Subscriber_1.SafeSubscriber({
        next: function () {
            onSubscriber.unsubscribe();
            reset();
        },
    });
    return innerFrom_1.innerFrom(on.apply(void 0, __spreadArray([], __read(args)))).subscribe(onSubscriber);
}
//# sourceMappingURL=share.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/shareReplay.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.shareReplay = void 0;
var ReplaySubject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/ReplaySubject.js");
var share_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/share.js");
function shareReplay(configOrBufferSize, windowTime, scheduler) {
    var _a, _b, _c;
    var bufferSize;
    var refCount = false;
    if (configOrBufferSize && typeof configOrBufferSize === 'object') {
        (_a = configOrBufferSize.bufferSize, bufferSize = _a === void 0 ? Infinity : _a, _b = configOrBufferSize.windowTime, windowTime = _b === void 0 ? Infinity : _b, _c = configOrBufferSize.refCount, refCount = _c === void 0 ? false : _c, scheduler = configOrBufferSize.scheduler);
    }
    else {
        bufferSize = (configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity);
    }
    return share_1.share({
        connector: function () { return new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler); },
        resetOnError: true,
        resetOnComplete: false,
        resetOnRefCountZero: refCount,
    });
}
exports.shareReplay = shareReplay;
//# sourceMappingURL=shareReplay.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/single.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.single = void 0;
var EmptyError_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/EmptyError.js");
var SequenceError_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/SequenceError.js");
var NotFoundError_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/NotFoundError.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function single(predicate) {
    return lift_1.operate(function (source, subscriber) {
        var hasValue = false;
        var singleValue;
        var seenValue = false;
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            seenValue = true;
            if (!predicate || predicate(value, index++, source)) {
                hasValue && subscriber.error(new SequenceError_1.SequenceError('Too many matching values'));
                hasValue = true;
                singleValue = value;
            }
        }, function () {
            if (hasValue) {
                subscriber.next(singleValue);
                subscriber.complete();
            }
            else {
                subscriber.error(seenValue ? new NotFoundError_1.NotFoundError('No matching values') : new EmptyError_1.EmptyError());
            }
        }));
    });
}
exports.single = single;
//# sourceMappingURL=single.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/skip.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.skip = void 0;
var filter_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/filter.js");
function skip(count) {
    return filter_1.filter(function (_, index) { return count <= index; });
}
exports.skip = skip;
//# sourceMappingURL=skip.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/skipLast.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.skipLast = void 0;
var identity_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/identity.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function skipLast(skipCount) {
    return skipCount <= 0
        ?
            identity_1.identity
        : lift_1.operate(function (source, subscriber) {
            var ring = new Array(skipCount);
            var seen = 0;
            source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
                var valueIndex = seen++;
                if (valueIndex < skipCount) {
                    ring[valueIndex] = value;
                }
                else {
                    var index = valueIndex % skipCount;
                    var oldValue = ring[index];
                    ring[index] = value;
                    subscriber.next(oldValue);
                }
            }));
            return function () {
                ring = null;
            };
        });
}
exports.skipLast = skipLast;
//# sourceMappingURL=skipLast.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/skipUntil.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.skipUntil = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var noop_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/noop.js");
function skipUntil(notifier) {
    return lift_1.operate(function (source, subscriber) {
        var taking = false;
        var skipSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
            skipSubscriber === null || skipSubscriber === void 0 ? void 0 : skipSubscriber.unsubscribe();
            taking = true;
        }, noop_1.noop);
        innerFrom_1.innerFrom(notifier).subscribe(skipSubscriber);
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) { return taking && subscriber.next(value); }));
    });
}
exports.skipUntil = skipUntil;
//# sourceMappingURL=skipUntil.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/skipWhile.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.skipWhile = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function skipWhile(predicate) {
    return lift_1.operate(function (source, subscriber) {
        var taking = false;
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) { return (taking || (taking = !predicate(value, index++))) && subscriber.next(value); }));
    });
}
exports.skipWhile = skipWhile;
//# sourceMappingURL=skipWhile.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/startWith.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.startWith = void 0;
var concat_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/concat.js");
var args_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/args.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
function startWith() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(values);
    return lift_1.operate(function (source, subscriber) {
        (scheduler ? concat_1.concat(values, source, scheduler) : concat_1.concat(values, source)).subscribe(subscriber);
    });
}
exports.startWith = startWith;
//# sourceMappingURL=startWith.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/subscribeOn.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.subscribeOn = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
function subscribeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return lift_1.operate(function (source, subscriber) {
        subscriber.add(scheduler.schedule(function () { return source.subscribe(subscriber); }, delay));
    });
}
exports.subscribeOn = subscribeOn;
//# sourceMappingURL=subscribeOn.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/switchAll.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.switchAll = void 0;
var switchMap_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/switchMap.js");
var identity_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/identity.js");
function switchAll() {
    return switchMap_1.switchMap(identity_1.identity);
}
exports.switchAll = switchAll;
//# sourceMappingURL=switchAll.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/switchMap.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.switchMap = void 0;
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function switchMap(project, resultSelector) {
    return lift_1.operate(function (source, subscriber) {
        var innerSubscriber = null;
        var index = 0;
        var isComplete = false;
        var checkComplete = function () { return isComplete && !innerSubscriber && subscriber.complete(); };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
            var innerIndex = 0;
            var outerIndex = index++;
            innerFrom_1.innerFrom(project(value, outerIndex)).subscribe((innerSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (innerValue) { return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue); }, function () {
                innerSubscriber = null;
                checkComplete();
            })));
        }, function () {
            isComplete = true;
            checkComplete();
        }));
    });
}
exports.switchMap = switchMap;
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/switchMapTo.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.switchMapTo = void 0;
var switchMap_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/switchMap.js");
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
function switchMapTo(innerObservable, resultSelector) {
    return isFunction_1.isFunction(resultSelector) ? switchMap_1.switchMap(function () { return innerObservable; }, resultSelector) : switchMap_1.switchMap(function () { return innerObservable; });
}
exports.switchMapTo = switchMapTo;
//# sourceMappingURL=switchMapTo.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/switchScan.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.switchScan = void 0;
var switchMap_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/switchMap.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
function switchScan(accumulator, seed) {
    return lift_1.operate(function (source, subscriber) {
        var state = seed;
        switchMap_1.switchMap(function (value, index) { return accumulator(state, value, index); }, function (_, innerValue) { return ((state = innerValue), innerValue); })(source).subscribe(subscriber);
        return function () {
            state = null;
        };
    });
}
exports.switchScan = switchScan;
//# sourceMappingURL=switchScan.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/take.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.take = void 0;
var empty_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/empty.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function take(count) {
    return count <= 0
        ?
            function () { return empty_1.EMPTY; }
        : lift_1.operate(function (source, subscriber) {
            var seen = 0;
            source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
                if (++seen <= count) {
                    subscriber.next(value);
                    if (count <= seen) {
                        subscriber.complete();
                    }
                }
            }));
        });
}
exports.take = take;
//# sourceMappingURL=take.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/takeLast.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.takeLast = void 0;
var empty_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/empty.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function takeLast(count) {
    return count <= 0
        ? function () { return empty_1.EMPTY; }
        : lift_1.operate(function (source, subscriber) {
            var buffer = [];
            source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
                buffer.push(value);
                count < buffer.length && buffer.shift();
            }, function () {
                var e_1, _a;
                try {
                    for (var buffer_1 = __values(buffer), buffer_1_1 = buffer_1.next(); !buffer_1_1.done; buffer_1_1 = buffer_1.next()) {
                        var value = buffer_1_1.value;
                        subscriber.next(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (buffer_1_1 && !buffer_1_1.done && (_a = buffer_1.return)) _a.call(buffer_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                subscriber.complete();
            }, undefined, function () {
                buffer = null;
            }));
        });
}
exports.takeLast = takeLast;
//# sourceMappingURL=takeLast.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/takeUntil.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.takeUntil = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var noop_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/noop.js");
function takeUntil(notifier) {
    return lift_1.operate(function (source, subscriber) {
        innerFrom_1.innerFrom(notifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () { return subscriber.complete(); }, noop_1.noop));
        !subscriber.closed && source.subscribe(subscriber);
    });
}
exports.takeUntil = takeUntil;
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/takeWhile.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.takeWhile = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function takeWhile(predicate, inclusive) {
    if (inclusive === void 0) { inclusive = false; }
    return lift_1.operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            var result = predicate(value, index++);
            (result || inclusive) && subscriber.next(value);
            !result && subscriber.complete();
        }));
    });
}
exports.takeWhile = takeWhile;
//# sourceMappingURL=takeWhile.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/tap.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tap = void 0;
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var identity_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/identity.js");
function tap(observerOrNext, error, complete) {
    var tapObserver = isFunction_1.isFunction(observerOrNext) || error || complete
        ?
            { next: observerOrNext, error: error, complete: complete }
        : observerOrNext;
    return tapObserver
        ? lift_1.operate(function (source, subscriber) {
            var _a;
            (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
            var isUnsub = true;
            source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
                var _a;
                (_a = tapObserver.next) === null || _a === void 0 ? void 0 : _a.call(tapObserver, value);
                subscriber.next(value);
            }, function () {
                var _a;
                isUnsub = false;
                (_a = tapObserver.complete) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
                subscriber.complete();
            }, function (err) {
                var _a;
                isUnsub = false;
                (_a = tapObserver.error) === null || _a === void 0 ? void 0 : _a.call(tapObserver, err);
                subscriber.error(err);
            }, function () {
                var _a, _b;
                if (isUnsub) {
                    (_a = tapObserver.unsubscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
                }
                (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
            }));
        })
        :
            identity_1.identity;
}
exports.tap = tap;
//# sourceMappingURL=tap.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/throttle.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.throttle = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
function throttle(durationSelector, config) {
    return lift_1.operate(function (source, subscriber) {
        var _a = config !== null && config !== void 0 ? config : {}, _b = _a.leading, leading = _b === void 0 ? true : _b, _c = _a.trailing, trailing = _c === void 0 ? false : _c;
        var hasValue = false;
        var sendValue = null;
        var throttled = null;
        var isComplete = false;
        var endThrottling = function () {
            throttled === null || throttled === void 0 ? void 0 : throttled.unsubscribe();
            throttled = null;
            if (trailing) {
                send();
                isComplete && subscriber.complete();
            }
        };
        var cleanupThrottling = function () {
            throttled = null;
            isComplete && subscriber.complete();
        };
        var startThrottle = function (value) {
            return (throttled = innerFrom_1.innerFrom(durationSelector(value)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, endThrottling, cleanupThrottling)));
        };
        var send = function () {
            if (hasValue) {
                hasValue = false;
                var value = sendValue;
                sendValue = null;
                subscriber.next(value);
                !isComplete && startThrottle(value);
            }
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            hasValue = true;
            sendValue = value;
            !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
        }, function () {
            isComplete = true;
            !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
        }));
    });
}
exports.throttle = throttle;
//# sourceMappingURL=throttle.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/throttleTime.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.throttleTime = void 0;
var async_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/async.js");
var throttle_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/throttle.js");
var timer_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/timer.js");
function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) { scheduler = async_1.asyncScheduler; }
    var duration$ = timer_1.timer(duration, scheduler);
    return throttle_1.throttle(function () { return duration$; }, config);
}
exports.throttleTime = throttleTime;
//# sourceMappingURL=throttleTime.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/throwIfEmpty.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.throwIfEmpty = void 0;
var EmptyError_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/EmptyError.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function throwIfEmpty(errorFactory) {
    if (errorFactory === void 0) { errorFactory = defaultErrorFactory; }
    return lift_1.operate(function (source, subscriber) {
        var hasValue = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            hasValue = true;
            subscriber.next(value);
        }, function () { return (hasValue ? subscriber.complete() : subscriber.error(errorFactory())); }));
    });
}
exports.throwIfEmpty = throwIfEmpty;
function defaultErrorFactory() {
    return new EmptyError_1.EmptyError();
}
//# sourceMappingURL=throwIfEmpty.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/timeInterval.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TimeInterval = exports.timeInterval = void 0;
var async_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/async.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function timeInterval(scheduler) {
    if (scheduler === void 0) { scheduler = async_1.asyncScheduler; }
    return lift_1.operate(function (source, subscriber) {
        var last = scheduler.now();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            var now = scheduler.now();
            var interval = now - last;
            last = now;
            subscriber.next(new TimeInterval(value, interval));
        }));
    });
}
exports.timeInterval = timeInterval;
var TimeInterval = (function () {
    function TimeInterval(value, interval) {
        this.value = value;
        this.interval = interval;
    }
    return TimeInterval;
}());
exports.TimeInterval = TimeInterval;
//# sourceMappingURL=timeInterval.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/timeout.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.timeout = exports.TimeoutError = void 0;
var async_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/async.js");
var isDate_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isDate.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var createErrorClass_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/createErrorClass.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var executeSchedule_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/executeSchedule.js");
exports.TimeoutError = createErrorClass_1.createErrorClass(function (_super) {
    return function TimeoutErrorImpl(info) {
        if (info === void 0) { info = null; }
        _super(this);
        this.message = 'Timeout has occurred';
        this.name = 'TimeoutError';
        this.info = info;
    };
});
function timeout(config, schedulerArg) {
    var _a = (isDate_1.isValidDate(config) ? { first: config } : typeof config === 'number' ? { each: config } : config), first = _a.first, each = _a.each, _b = _a.with, _with = _b === void 0 ? timeoutErrorFactory : _b, _c = _a.scheduler, scheduler = _c === void 0 ? schedulerArg !== null && schedulerArg !== void 0 ? schedulerArg : async_1.asyncScheduler : _c, _d = _a.meta, meta = _d === void 0 ? null : _d;
    if (first == null && each == null) {
        throw new TypeError('No timeout provided.');
    }
    return lift_1.operate(function (source, subscriber) {
        var originalSourceSubscription;
        var timerSubscription;
        var lastValue = null;
        var seen = 0;
        var startTimer = function (delay) {
            timerSubscription = executeSchedule_1.executeSchedule(subscriber, scheduler, function () {
                try {
                    originalSourceSubscription.unsubscribe();
                    innerFrom_1.innerFrom(_with({
                        meta: meta,
                        lastValue: lastValue,
                        seen: seen,
                    })).subscribe(subscriber);
                }
                catch (err) {
                    subscriber.error(err);
                }
            }, delay);
        };
        originalSourceSubscription = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
            seen++;
            subscriber.next((lastValue = value));
            each > 0 && startTimer(each);
        }, undefined, undefined, function () {
            if (!(timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.closed)) {
                timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
            }
            lastValue = null;
        }));
        !seen && startTimer(first != null ? (typeof first === 'number' ? first : +first - scheduler.now()) : each);
    });
}
exports.timeout = timeout;
function timeoutErrorFactory(info) {
    throw new exports.TimeoutError(info);
}
//# sourceMappingURL=timeout.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/timeoutWith.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.timeoutWith = void 0;
var async_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/async.js");
var isDate_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isDate.js");
var timeout_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/timeout.js");
function timeoutWith(due, withObservable, scheduler) {
    var first;
    var each;
    var _with;
    scheduler = scheduler !== null && scheduler !== void 0 ? scheduler : async_1.async;
    if (isDate_1.isValidDate(due)) {
        first = due;
    }
    else if (typeof due === 'number') {
        each = due;
    }
    if (withObservable) {
        _with = function () { return withObservable; };
    }
    else {
        throw new TypeError('No observable provided to switch to');
    }
    if (first == null && each == null) {
        throw new TypeError('No timeout provided.');
    }
    return timeout_1.timeout({
        first: first,
        each: each,
        scheduler: scheduler,
        with: _with,
    });
}
exports.timeoutWith = timeoutWith;
//# sourceMappingURL=timeoutWith.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/timestamp.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.timestamp = void 0;
var dateTimestampProvider_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/dateTimestampProvider.js");
var map_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/map.js");
function timestamp(timestampProvider) {
    if (timestampProvider === void 0) { timestampProvider = dateTimestampProvider_1.dateTimestampProvider; }
    return map_1.map(function (value) { return ({ value: value, timestamp: timestampProvider.now() }); });
}
exports.timestamp = timestamp;
//# sourceMappingURL=timestamp.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/toArray.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toArray = void 0;
var reduce_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/reduce.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var arrReducer = function (arr, value) { return (arr.push(value), arr); };
function toArray() {
    return lift_1.operate(function (source, subscriber) {
        reduce_1.reduce(arrReducer, [])(source).subscribe(subscriber);
    });
}
exports.toArray = toArray;
//# sourceMappingURL=toArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/window.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.window = void 0;
var Subject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subject.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var noop_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/noop.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
function window(windowBoundaries) {
    return lift_1.operate(function (source, subscriber) {
        var windowSubject = new Subject_1.Subject();
        subscriber.next(windowSubject.asObservable());
        var errorHandler = function (err) {
            windowSubject.error(err);
            subscriber.error(err);
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) { return windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.next(value); }, function () {
            windowSubject.complete();
            subscriber.complete();
        }, errorHandler));
        innerFrom_1.innerFrom(windowBoundaries).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
            windowSubject.complete();
            subscriber.next((windowSubject = new Subject_1.Subject()));
        }, noop_1.noop, errorHandler));
        return function () {
            windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.unsubscribe();
            windowSubject = null;
        };
    });
}
exports.window = window;
//# sourceMappingURL=window.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/windowCount.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.windowCount = void 0;
var Subject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subject.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) { startWindowEvery = 0; }
    var startEvery = startWindowEvery > 0 ? startWindowEvery : windowSize;
    return lift_1.operate(function (source, subscriber) {
        var windows = [new Subject_1.Subject()];
        var starts = [];
        var count = 0;
        subscriber.next(windows[0].asObservable());
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            var e_1, _a;
            try {
                for (var windows_1 = __values(windows), windows_1_1 = windows_1.next(); !windows_1_1.done; windows_1_1 = windows_1.next()) {
                    var window_1 = windows_1_1.value;
                    window_1.next(value);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (windows_1_1 && !windows_1_1.done && (_a = windows_1.return)) _a.call(windows_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var c = count - windowSize + 1;
            if (c >= 0 && c % startEvery === 0) {
                windows.shift().complete();
            }
            if (++count % startEvery === 0) {
                var window_2 = new Subject_1.Subject();
                windows.push(window_2);
                subscriber.next(window_2.asObservable());
            }
        }, function () {
            while (windows.length > 0) {
                windows.shift().complete();
            }
            subscriber.complete();
        }, function (err) {
            while (windows.length > 0) {
                windows.shift().error(err);
            }
            subscriber.error(err);
        }, function () {
            starts = null;
            windows = null;
        }));
    });
}
exports.windowCount = windowCount;
//# sourceMappingURL=windowCount.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/windowTime.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.windowTime = void 0;
var Subject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subject.js");
var async_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/async.js");
var Subscription_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subscription.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var arrRemove_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/arrRemove.js");
var args_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/args.js");
var executeSchedule_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/executeSchedule.js");
function windowTime(windowTimeSpan) {
    var _a, _b;
    var otherArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherArgs[_i - 1] = arguments[_i];
    }
    var scheduler = (_a = args_1.popScheduler(otherArgs)) !== null && _a !== void 0 ? _a : async_1.asyncScheduler;
    var windowCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
    var maxWindowSize = otherArgs[1] || Infinity;
    return lift_1.operate(function (source, subscriber) {
        var windowRecords = [];
        var restartOnClose = false;
        var closeWindow = function (record) {
            var window = record.window, subs = record.subs;
            window.complete();
            subs.unsubscribe();
            arrRemove_1.arrRemove(windowRecords, record);
            restartOnClose && startWindow();
        };
        var startWindow = function () {
            if (windowRecords) {
                var subs = new Subscription_1.Subscription();
                subscriber.add(subs);
                var window_1 = new Subject_1.Subject();
                var record_1 = {
                    window: window_1,
                    subs: subs,
                    seen: 0,
                };
                windowRecords.push(record_1);
                subscriber.next(window_1.asObservable());
                executeSchedule_1.executeSchedule(subs, scheduler, function () { return closeWindow(record_1); }, windowTimeSpan);
            }
        };
        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
            executeSchedule_1.executeSchedule(subscriber, scheduler, startWindow, windowCreationInterval, true);
        }
        else {
            restartOnClose = true;
        }
        startWindow();
        var loop = function (cb) { return windowRecords.slice().forEach(cb); };
        var terminate = function (cb) {
            loop(function (_a) {
                var window = _a.window;
                return cb(window);
            });
            cb(subscriber);
            subscriber.unsubscribe();
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            loop(function (record) {
                record.window.next(value);
                maxWindowSize <= ++record.seen && closeWindow(record);
            });
        }, function () { return terminate(function (consumer) { return consumer.complete(); }); }, function (err) { return terminate(function (consumer) { return consumer.error(err); }); }));
        return function () {
            windowRecords = null;
        };
    });
}
exports.windowTime = windowTime;
//# sourceMappingURL=windowTime.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/windowToggle.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.windowToggle = void 0;
var Subject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subject.js");
var Subscription_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subscription.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var noop_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/noop.js");
var arrRemove_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/arrRemove.js");
function windowToggle(openings, closingSelector) {
    return lift_1.operate(function (source, subscriber) {
        var windows = [];
        var handleError = function (err) {
            while (0 < windows.length) {
                windows.shift().error(err);
            }
            subscriber.error(err);
        };
        innerFrom_1.innerFrom(openings).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (openValue) {
            var window = new Subject_1.Subject();
            windows.push(window);
            var closingSubscription = new Subscription_1.Subscription();
            var closeWindow = function () {
                arrRemove_1.arrRemove(windows, window);
                window.complete();
                closingSubscription.unsubscribe();
            };
            var closingNotifier;
            try {
                closingNotifier = innerFrom_1.innerFrom(closingSelector(openValue));
            }
            catch (err) {
                handleError(err);
                return;
            }
            subscriber.next(window.asObservable());
            closingSubscription.add(closingNotifier.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, closeWindow, noop_1.noop, handleError)));
        }, noop_1.noop));
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            var e_1, _a;
            var windowsCopy = windows.slice();
            try {
                for (var windowsCopy_1 = __values(windowsCopy), windowsCopy_1_1 = windowsCopy_1.next(); !windowsCopy_1_1.done; windowsCopy_1_1 = windowsCopy_1.next()) {
                    var window_1 = windowsCopy_1_1.value;
                    window_1.next(value);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (windowsCopy_1_1 && !windowsCopy_1_1.done && (_a = windowsCopy_1.return)) _a.call(windowsCopy_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }, function () {
            while (0 < windows.length) {
                windows.shift().complete();
            }
            subscriber.complete();
        }, handleError, function () {
            while (0 < windows.length) {
                windows.shift().unsubscribe();
            }
        }));
    });
}
exports.windowToggle = windowToggle;
//# sourceMappingURL=windowToggle.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/windowWhen.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.windowWhen = void 0;
var Subject_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subject.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
function windowWhen(closingSelector) {
    return lift_1.operate(function (source, subscriber) {
        var window;
        var closingSubscriber;
        var handleError = function (err) {
            window.error(err);
            subscriber.error(err);
        };
        var openWindow = function () {
            closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
            window === null || window === void 0 ? void 0 : window.complete();
            window = new Subject_1.Subject();
            subscriber.next(window.asObservable());
            var closingNotifier;
            try {
                closingNotifier = innerFrom_1.innerFrom(closingSelector());
            }
            catch (err) {
                handleError(err);
                return;
            }
            closingNotifier.subscribe((closingSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, openWindow, openWindow, handleError)));
        };
        openWindow();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) { return window.next(value); }, function () {
            window.complete();
            subscriber.complete();
        }, handleError, function () {
            closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
            window = null;
        }));
    });
}
exports.windowWhen = windowWhen;
//# sourceMappingURL=windowWhen.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/withLatestFrom.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.withLatestFrom = void 0;
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
var OperatorSubscriber_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js");
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var identity_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/identity.js");
var noop_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/noop.js");
var args_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/args.js");
function withLatestFrom() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    var project = args_1.popResultSelector(inputs);
    return lift_1.operate(function (source, subscriber) {
        var len = inputs.length;
        var otherValues = new Array(len);
        var hasValue = inputs.map(function () { return false; });
        var ready = false;
        var _loop_1 = function (i) {
            innerFrom_1.innerFrom(inputs[i]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
                otherValues[i] = value;
                if (!ready && !hasValue[i]) {
                    hasValue[i] = true;
                    (ready = hasValue.every(identity_1.identity)) && (hasValue = null);
                }
            }, noop_1.noop));
        };
        for (var i = 0; i < len; i++) {
            _loop_1(i);
        }
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            if (ready) {
                var values = __spreadArray([value], __read(otherValues));
                subscriber.next(project ? project.apply(void 0, __spreadArray([], __read(values))) : values);
            }
        }));
    });
}
exports.withLatestFrom = withLatestFrom;
//# sourceMappingURL=withLatestFrom.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/zip.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.zip = void 0;
var zip_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/zip.js");
var lift_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/lift.js");
function zip() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    return lift_1.operate(function (source, subscriber) {
        zip_1.zip.apply(void 0, __spreadArray([source], __read(sources))).subscribe(subscriber);
    });
}
exports.zip = zip;
//# sourceMappingURL=zip.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/zipAll.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.zipAll = void 0;
var zip_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/zip.js");
var joinAllInternals_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/joinAllInternals.js");
function zipAll(project) {
    return joinAllInternals_1.joinAllInternals(zip_1.zip, project);
}
exports.zipAll = zipAll;
//# sourceMappingURL=zipAll.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/operators/zipWith.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.zipWith = void 0;
var zip_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/zip.js");
function zipWith() {
    var otherInputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        otherInputs[_i] = arguments[_i];
    }
    return zip_1.zip.apply(void 0, __spreadArray([], __read(otherInputs)));
}
exports.zipWith = zipWith;
//# sourceMappingURL=zipWith.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduled/scheduleArray.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.scheduleArray = void 0;
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
function scheduleArray(input, scheduler) {
    return new Observable_1.Observable(function (subscriber) {
        var i = 0;
        return scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
            }
            else {
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    this.schedule();
                }
            }
        });
    });
}
exports.scheduleArray = scheduleArray;
//# sourceMappingURL=scheduleArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduled/scheduleAsyncIterable.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.scheduleAsyncIterable = void 0;
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
var executeSchedule_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/executeSchedule.js");
function scheduleAsyncIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    return new Observable_1.Observable(function (subscriber) {
        executeSchedule_1.executeSchedule(subscriber, scheduler, function () {
            var iterator = input[Symbol.asyncIterator]();
            executeSchedule_1.executeSchedule(subscriber, scheduler, function () {
                iterator.next().then(function (result) {
                    if (result.done) {
                        subscriber.complete();
                    }
                    else {
                        subscriber.next(result.value);
                    }
                });
            }, 0, true);
        });
    });
}
exports.scheduleAsyncIterable = scheduleAsyncIterable;
//# sourceMappingURL=scheduleAsyncIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduled/scheduleIterable.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.scheduleIterable = void 0;
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
var iterator_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/symbol/iterator.js");
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
var executeSchedule_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/executeSchedule.js");
function scheduleIterable(input, scheduler) {
    return new Observable_1.Observable(function (subscriber) {
        var iterator;
        executeSchedule_1.executeSchedule(subscriber, scheduler, function () {
            iterator = input[iterator_1.iterator]();
            executeSchedule_1.executeSchedule(subscriber, scheduler, function () {
                var _a;
                var value;
                var done;
                try {
                    (_a = iterator.next(), value = _a.value, done = _a.done);
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                }
                else {
                    subscriber.next(value);
                }
            }, 0, true);
        });
        return function () { return isFunction_1.isFunction(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return(); };
    });
}
exports.scheduleIterable = scheduleIterable;
//# sourceMappingURL=scheduleIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduled/scheduleObservable.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.scheduleObservable = void 0;
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var observeOn_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/observeOn.js");
var subscribeOn_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/subscribeOn.js");
function scheduleObservable(input, scheduler) {
    return innerFrom_1.innerFrom(input).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
}
exports.scheduleObservable = scheduleObservable;
//# sourceMappingURL=scheduleObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduled/schedulePromise.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.schedulePromise = void 0;
var innerFrom_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js");
var observeOn_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/observeOn.js");
var subscribeOn_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/subscribeOn.js");
function schedulePromise(input, scheduler) {
    return innerFrom_1.innerFrom(input).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
}
exports.schedulePromise = schedulePromise;
//# sourceMappingURL=schedulePromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduled/scheduleReadableStreamLike.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.scheduleReadableStreamLike = void 0;
var scheduleAsyncIterable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduled/scheduleAsyncIterable.js");
var isReadableStreamLike_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isReadableStreamLike.js");
function scheduleReadableStreamLike(input, scheduler) {
    return scheduleAsyncIterable_1.scheduleAsyncIterable(isReadableStreamLike_1.readableStreamLikeToAsyncGenerator(input), scheduler);
}
exports.scheduleReadableStreamLike = scheduleReadableStreamLike;
//# sourceMappingURL=scheduleReadableStreamLike.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduled/scheduled.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.scheduled = void 0;
var scheduleObservable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduled/scheduleObservable.js");
var schedulePromise_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduled/schedulePromise.js");
var scheduleArray_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduled/scheduleArray.js");
var scheduleIterable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduled/scheduleIterable.js");
var scheduleAsyncIterable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduled/scheduleAsyncIterable.js");
var isInteropObservable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isInteropObservable.js");
var isPromise_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isPromise.js");
var isArrayLike_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isArrayLike.js");
var isIterable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isIterable.js");
var isAsyncIterable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isAsyncIterable.js");
var throwUnobservableError_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/throwUnobservableError.js");
var isReadableStreamLike_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isReadableStreamLike.js");
var scheduleReadableStreamLike_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduled/scheduleReadableStreamLike.js");
function scheduled(input, scheduler) {
    if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) {
            return scheduleObservable_1.scheduleObservable(input, scheduler);
        }
        if (isArrayLike_1.isArrayLike(input)) {
            return scheduleArray_1.scheduleArray(input, scheduler);
        }
        if (isPromise_1.isPromise(input)) {
            return schedulePromise_1.schedulePromise(input, scheduler);
        }
        if (isAsyncIterable_1.isAsyncIterable(input)) {
            return scheduleAsyncIterable_1.scheduleAsyncIterable(input, scheduler);
        }
        if (isIterable_1.isIterable(input)) {
            return scheduleIterable_1.scheduleIterable(input, scheduler);
        }
        if (isReadableStreamLike_1.isReadableStreamLike(input)) {
            return scheduleReadableStreamLike_1.scheduleReadableStreamLike(input, scheduler);
        }
    }
    throw throwUnobservableError_1.createInvalidObservableTypeError(input);
}
exports.scheduled = scheduled;
//# sourceMappingURL=scheduled.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduler/Action.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Action = void 0;
var Subscription_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subscription.js");
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameAction.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnimationFrameAction = void 0;
var AsyncAction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/AsyncAction.js");
var animationFrameProvider_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/animationFrameProvider.js");
var AnimationFrameAction = (function (_super) {
    __extends(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider_1.animationFrameProvider.requestAnimationFrame(function () { return scheduler.flush(undefined); }));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        var _a;
        if (delay === void 0) { delay = 0; }
        if (delay != null ? delay > 0 : this.delay > 0) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        var actions = scheduler.actions;
        if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
            animationFrameProvider_1.animationFrameProvider.cancelAnimationFrame(id);
            scheduler._scheduled = undefined;
        }
        return undefined;
    };
    return AnimationFrameAction;
}(AsyncAction_1.AsyncAction));
exports.AnimationFrameAction = AnimationFrameAction;
//# sourceMappingURL=AnimationFrameAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameScheduler.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnimationFrameScheduler = void 0;
var AsyncScheduler_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/AsyncScheduler.js");
var AnimationFrameScheduler = (function (_super) {
    __extends(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler.prototype.flush = function (action) {
        this._active = true;
        var flushId = this._scheduled;
        this._scheduled = undefined;
        var actions = this.actions;
        var error;
        action = action || actions.shift();
        do {
            if ((error = action.execute(action.state, action.delay))) {
                break;
            }
        } while ((action = actions[0]) && action.id === flushId && actions.shift());
        this._active = false;
        if (error) {
            while ((action = actions[0]) && action.id === flushId && actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.AnimationFrameScheduler = AnimationFrameScheduler;
//# sourceMappingURL=AnimationFrameScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduler/AsapAction.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AsapAction = void 0;
var AsyncAction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/AsyncAction.js");
var immediateProvider_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/immediateProvider.js");
var AsapAction = (function (_super) {
    __extends(AsapAction, _super);
    function AsapAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = immediateProvider_1.immediateProvider.setImmediate(scheduler.flush.bind(scheduler, undefined)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        var _a;
        if (delay === void 0) { delay = 0; }
        if (delay != null ? delay > 0 : this.delay > 0) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        var actions = scheduler.actions;
        if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
            immediateProvider_1.immediateProvider.clearImmediate(id);
            if (scheduler._scheduled === id) {
                scheduler._scheduled = undefined;
            }
        }
        return undefined;
    };
    return AsapAction;
}(AsyncAction_1.AsyncAction));
exports.AsapAction = AsapAction;
//# sourceMappingURL=AsapAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduler/AsapScheduler.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AsapScheduler = void 0;
var AsyncScheduler_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/AsyncScheduler.js");
var AsapScheduler = (function (_super) {
    __extends(AsapScheduler, _super);
    function AsapScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler.prototype.flush = function (action) {
        this._active = true;
        var flushId = this._scheduled;
        this._scheduled = undefined;
        var actions = this.actions;
        var error;
        action = action || actions.shift();
        do {
            if ((error = action.execute(action.state, action.delay))) {
                break;
            }
        } while ((action = actions[0]) && action.id === flushId && actions.shift());
        this._active = false;
        if (error) {
            while ((action = actions[0]) && action.id === flushId && actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.AsapScheduler = AsapScheduler;
//# sourceMappingURL=AsapScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduler/AsyncAction.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AsyncAction = void 0;
var Action_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/Action.js");
var intervalProvider_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/intervalProvider.js");
var arrRemove_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/arrRemove.js");
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        var _a;
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, _id, delay) {
        if (delay === void 0) { delay = 0; }
        return intervalProvider_1.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (_scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay != null && this.delay === delay && this.pending === false) {
            return id;
        }
        if (id != null) {
            intervalProvider_1.intervalProvider.clearInterval(id);
        }
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, _delay) {
        var errored = false;
        var errorValue;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = e ? e : new Error('Scheduled action threw falsy error');
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype.unsubscribe = function () {
        if (!this.closed) {
            var _a = this, id = _a.id, scheduler = _a.scheduler;
            var actions = scheduler.actions;
            this.work = this.state = this.scheduler = null;
            this.pending = false;
            arrRemove_1.arrRemove(actions, this);
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, null);
            }
            this.delay = null;
            _super.prototype.unsubscribe.call(this);
        }
    };
    return AsyncAction;
}(Action_1.Action));
exports.AsyncAction = AsyncAction;
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduler/AsyncScheduler.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AsyncScheduler = void 0;
var Scheduler_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Scheduler.js");
var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler_1.Scheduler.now; }
        var _this = _super.call(this, SchedulerAction, now) || this;
        _this.actions = [];
        _this._active = false;
        return _this;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this._active) {
            actions.push(action);
            return;
        }
        var error;
        this._active = true;
        do {
            if ((error = action.execute(action.state, action.delay))) {
                break;
            }
        } while ((action = actions.shift()));
        this._active = false;
        if (error) {
            while ((action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduler/QueueAction.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueueAction = void 0;
var AsyncAction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/AsyncAction.js");
var QueueAction = (function (_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if ((delay != null && delay > 0) || (delay == null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.flush(this);
        return 0;
    };
    return QueueAction;
}(AsyncAction_1.AsyncAction));
exports.QueueAction = QueueAction;
//# sourceMappingURL=QueueAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduler/QueueScheduler.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueueScheduler = void 0;
var AsyncScheduler_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/AsyncScheduler.js");
var QueueScheduler = (function (_super) {
    __extends(QueueScheduler, _super);
    function QueueScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.QueueScheduler = QueueScheduler;
//# sourceMappingURL=QueueScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduler/VirtualTimeScheduler.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VirtualAction = exports.VirtualTimeScheduler = void 0;
var AsyncAction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/AsyncAction.js");
var Subscription_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subscription.js");
var AsyncScheduler_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/AsyncScheduler.js");
var VirtualTimeScheduler = (function (_super) {
    __extends(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(schedulerActionCtor, maxFrames) {
        if (schedulerActionCtor === void 0) { schedulerActionCtor = VirtualAction; }
        if (maxFrames === void 0) { maxFrames = Infinity; }
        var _this = _super.call(this, schedulerActionCtor, function () { return _this.frame; }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
    }
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error;
        var action;
        while ((action = actions[0]) && action.delay <= maxFrames) {
            actions.shift();
            this.frame = action.delay;
            if ((error = action.execute(action.state, action.delay))) {
                break;
            }
        }
        if (error) {
            while ((action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.VirtualTimeScheduler = VirtualTimeScheduler;
var VirtualAction = (function (_super) {
    __extends(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) { index = (scheduler.index += 1); }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (Number.isFinite(delay)) {
            if (!this.id) {
                return _super.prototype.schedule.call(this, state, delay);
            }
            this.active = false;
            var action = new VirtualAction(this.scheduler, this.work);
            this.add(action);
            return action.schedule(state, delay);
        }
        else {
            return Subscription_1.Subscription.EMPTY;
        }
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return 1;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return undefined;
    };
    VirtualAction.prototype._execute = function (state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction;
}(AsyncAction_1.AsyncAction));
exports.VirtualAction = VirtualAction;
//# sourceMappingURL=VirtualTimeScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduler/animationFrame.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.animationFrame = exports.animationFrameScheduler = void 0;
var AnimationFrameAction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameAction.js");
var AnimationFrameScheduler_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameScheduler.js");
exports.animationFrameScheduler = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
exports.animationFrame = exports.animationFrameScheduler;
//# sourceMappingURL=animationFrame.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduler/animationFrameProvider.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.animationFrameProvider = void 0;
var Subscription_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Subscription.js");
exports.animationFrameProvider = {
    schedule: function (callback) {
        var request = requestAnimationFrame;
        var cancel = cancelAnimationFrame;
        var delegate = exports.animationFrameProvider.delegate;
        if (delegate) {
            request = delegate.requestAnimationFrame;
            cancel = delegate.cancelAnimationFrame;
        }
        var handle = request(function (timestamp) {
            cancel = undefined;
            callback(timestamp);
        });
        return new Subscription_1.Subscription(function () { return cancel === null || cancel === void 0 ? void 0 : cancel(handle); });
    },
    requestAnimationFrame: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var delegate = exports.animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
    },
    cancelAnimationFrame: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var delegate = exports.animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
    },
    delegate: undefined,
};
//# sourceMappingURL=animationFrameProvider.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduler/asap.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.asap = exports.asapScheduler = void 0;
var AsapAction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/AsapAction.js");
var AsapScheduler_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/AsapScheduler.js");
exports.asapScheduler = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);
exports.asap = exports.asapScheduler;
//# sourceMappingURL=asap.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduler/async.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.async = exports.asyncScheduler = void 0;
var AsyncAction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/AsyncAction.js");
var AsyncScheduler_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/AsyncScheduler.js");
exports.asyncScheduler = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
exports.async = exports.asyncScheduler;
//# sourceMappingURL=async.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduler/dateTimestampProvider.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dateTimestampProvider = void 0;
exports.dateTimestampProvider = {
    now: function () {
        return (exports.dateTimestampProvider.delegate || Date).now();
    },
    delegate: undefined,
};
//# sourceMappingURL=dateTimestampProvider.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduler/immediateProvider.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.immediateProvider = void 0;
var Immediate_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/Immediate.js");
var setImmediate = Immediate_1.Immediate.setImmediate, clearImmediate = Immediate_1.Immediate.clearImmediate;
exports.immediateProvider = {
    setImmediate: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var delegate = exports.immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate).apply(void 0, __spreadArray([], __read(args)));
    },
    clearImmediate: function (handle) {
        var delegate = exports.immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
    },
    delegate: undefined,
};
//# sourceMappingURL=immediateProvider.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduler/intervalProvider.js":
/***/ (function(__unused_webpack_module, exports) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.intervalProvider = void 0;
exports.intervalProvider = {
    setInterval: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var delegate = exports.intervalProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
            return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearInterval: function (handle) {
        var delegate = exports.intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
    },
    delegate: undefined,
};
//# sourceMappingURL=intervalProvider.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduler/performanceTimestampProvider.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.performanceTimestampProvider = void 0;
exports.performanceTimestampProvider = {
    now: function () {
        return (exports.performanceTimestampProvider.delegate || performance).now();
    },
    delegate: undefined,
};
//# sourceMappingURL=performanceTimestampProvider.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduler/queue.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.queue = exports.queueScheduler = void 0;
var QueueAction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/QueueAction.js");
var QueueScheduler_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/QueueScheduler.js");
exports.queueScheduler = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
exports.queue = exports.queueScheduler;
//# sourceMappingURL=queue.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/scheduler/timeoutProvider.js":
/***/ (function(__unused_webpack_module, exports) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.timeoutProvider = void 0;
exports.timeoutProvider = {
    setTimeout: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var delegate = exports.timeoutProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
            return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearTimeout: function (handle) {
        var delegate = exports.timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined,
};
//# sourceMappingURL=timeoutProvider.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/symbol/iterator.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.iterator = exports.getSymbolIterator = void 0;
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
exports.getSymbolIterator = getSymbolIterator;
exports.iterator = getSymbolIterator();
//# sourceMappingURL=iterator.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/symbol/observable.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.observable = void 0;
exports.observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/types.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/ArgumentOutOfRangeError.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArgumentOutOfRangeError = void 0;
var createErrorClass_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/createErrorClass.js");
exports.ArgumentOutOfRangeError = createErrorClass_1.createErrorClass(function (_super) {
    return function ArgumentOutOfRangeErrorImpl() {
        _super(this);
        this.name = 'ArgumentOutOfRangeError';
        this.message = 'argument out of range';
    };
});
//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/EmptyError.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmptyError = void 0;
var createErrorClass_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/createErrorClass.js");
exports.EmptyError = createErrorClass_1.createErrorClass(function (_super) { return function EmptyErrorImpl() {
    _super(this);
    this.name = 'EmptyError';
    this.message = 'no elements in sequence';
}; });
//# sourceMappingURL=EmptyError.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/Immediate.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TestTools = exports.Immediate = void 0;
var nextHandle = 1;
var resolved;
var activeHandles = {};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
exports.Immediate = {
    setImmediate: function (cb) {
        var handle = nextHandle++;
        activeHandles[handle] = true;
        if (!resolved) {
            resolved = Promise.resolve();
        }
        resolved.then(function () { return findAndClearHandle(handle) && cb(); });
        return handle;
    },
    clearImmediate: function (handle) {
        findAndClearHandle(handle);
    },
};
exports.TestTools = {
    pending: function () {
        return Object.keys(activeHandles).length;
    }
};
//# sourceMappingURL=Immediate.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/NotFoundError.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotFoundError = void 0;
var createErrorClass_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/createErrorClass.js");
exports.NotFoundError = createErrorClass_1.createErrorClass(function (_super) {
    return function NotFoundErrorImpl(message) {
        _super(this);
        this.name = 'NotFoundError';
        this.message = message;
    };
});
//# sourceMappingURL=NotFoundError.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/ObjectUnsubscribedError.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ObjectUnsubscribedError = void 0;
var createErrorClass_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/createErrorClass.js");
exports.ObjectUnsubscribedError = createErrorClass_1.createErrorClass(function (_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = 'ObjectUnsubscribedError';
        this.message = 'object unsubscribed';
    };
});
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/SequenceError.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SequenceError = void 0;
var createErrorClass_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/createErrorClass.js");
exports.SequenceError = createErrorClass_1.createErrorClass(function (_super) {
    return function SequenceErrorImpl(message) {
        _super(this);
        this.name = 'SequenceError';
        this.message = message;
    };
});
//# sourceMappingURL=SequenceError.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/UnsubscriptionError.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnsubscriptionError = void 0;
var createErrorClass_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/createErrorClass.js");
exports.UnsubscriptionError = createErrorClass_1.createErrorClass(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/args.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.popNumber = exports.popScheduler = exports.popResultSelector = void 0;
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
var isScheduler_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isScheduler.js");
function last(arr) {
    return arr[arr.length - 1];
}
function popResultSelector(args) {
    return isFunction_1.isFunction(last(args)) ? args.pop() : undefined;
}
exports.popResultSelector = popResultSelector;
function popScheduler(args) {
    return isScheduler_1.isScheduler(last(args)) ? args.pop() : undefined;
}
exports.popScheduler = popScheduler;
function popNumber(args, defaultValue) {
    return typeof last(args) === 'number' ? args.pop() : defaultValue;
}
exports.popNumber = popNumber;
//# sourceMappingURL=args.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/argsArgArrayOrObject.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.argsArgArrayOrObject = void 0;
var isArray = Array.isArray;
var getPrototypeOf = Object.getPrototypeOf, objectProto = Object.prototype, getKeys = Object.keys;
function argsArgArrayOrObject(args) {
    if (args.length === 1) {
        var first_1 = args[0];
        if (isArray(first_1)) {
            return { args: first_1, keys: null };
        }
        if (isPOJO(first_1)) {
            var keys = getKeys(first_1);
            return {
                args: keys.map(function (key) { return first_1[key]; }),
                keys: keys,
            };
        }
    }
    return { args: args, keys: null };
}
exports.argsArgArrayOrObject = argsArgArrayOrObject;
function isPOJO(obj) {
    return obj && typeof obj === 'object' && getPrototypeOf(obj) === objectProto;
}
//# sourceMappingURL=argsArgArrayOrObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/argsOrArgArray.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.argsOrArgArray = void 0;
var isArray = Array.isArray;
function argsOrArgArray(args) {
    return args.length === 1 && isArray(args[0]) ? args[0] : args;
}
exports.argsOrArgArray = argsOrArgArray;
//# sourceMappingURL=argsOrArgArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/arrRemove.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrRemove = void 0;
function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}
exports.arrRemove = arrRemove;
//# sourceMappingURL=arrRemove.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/createErrorClass.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createErrorClass = void 0;
function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}
exports.createErrorClass = createErrorClass;
//# sourceMappingURL=createErrorClass.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/createObject.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createObject = void 0;
function createObject(keys, values) {
    return keys.reduce(function (result, key, i) { return ((result[key] = values[i]), result); }, {});
}
exports.createObject = createObject;
//# sourceMappingURL=createObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/errorContext.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.captureError = exports.errorContext = void 0;
var config_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/config.js");
var context = null;
function errorContext(cb) {
    if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) {
            context = { errorThrown: false, error: null };
        }
        cb();
        if (isRoot) {
            var _a = context, errorThrown = _a.errorThrown, error = _a.error;
            context = null;
            if (errorThrown) {
                throw error;
            }
        }
    }
    else {
        cb();
    }
}
exports.errorContext = errorContext;
function captureError(err) {
    if (config_1.config.useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
    }
}
exports.captureError = captureError;
//# sourceMappingURL=errorContext.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/executeSchedule.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.executeSchedule = void 0;
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
    if (delay === void 0) { delay = 0; }
    if (repeat === void 0) { repeat = false; }
    var scheduleSubscription = scheduler.schedule(function () {
        work();
        if (repeat) {
            parentSubscription.add(this.schedule(null, delay));
        }
        else {
            this.unsubscribe();
        }
    }, delay);
    parentSubscription.add(scheduleSubscription);
    if (!repeat) {
        return scheduleSubscription;
    }
}
exports.executeSchedule = executeSchedule;
//# sourceMappingURL=executeSchedule.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/identity.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.identity = void 0;
function identity(x) {
    return x;
}
exports.identity = identity;
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/isArrayLike.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isArrayLike = void 0;
exports.isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/isAsyncIterable.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isAsyncIterable = void 0;
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
function isAsyncIterable(obj) {
    return Symbol.asyncIterator && isFunction_1.isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
exports.isAsyncIterable = isAsyncIterable;
//# sourceMappingURL=isAsyncIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/isDate.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isValidDate = void 0;
function isValidDate(value) {
    return value instanceof Date && !isNaN(value);
}
exports.isValidDate = isValidDate;
//# sourceMappingURL=isDate.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/isFunction.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isFunction = void 0;
function isFunction(value) {
    return typeof value === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/isInteropObservable.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isInteropObservable = void 0;
var observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/symbol/observable.js");
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
function isInteropObservable(input) {
    return isFunction_1.isFunction(input[observable_1.observable]);
}
exports.isInteropObservable = isInteropObservable;
//# sourceMappingURL=isInteropObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/isIterable.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isIterable = void 0;
var iterator_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/symbol/iterator.js");
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
function isIterable(input) {
    return isFunction_1.isFunction(input === null || input === void 0 ? void 0 : input[iterator_1.iterator]);
}
exports.isIterable = isIterable;
//# sourceMappingURL=isIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/isObservable.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isObservable = void 0;
var Observable_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/Observable.js");
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
function isObservable(obj) {
    return !!obj && (obj instanceof Observable_1.Observable || (isFunction_1.isFunction(obj.lift) && isFunction_1.isFunction(obj.subscribe)));
}
exports.isObservable = isObservable;
//# sourceMappingURL=isObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/isPromise.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isPromise = void 0;
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
function isPromise(value) {
    return isFunction_1.isFunction(value === null || value === void 0 ? void 0 : value.then);
}
exports.isPromise = isPromise;
//# sourceMappingURL=isPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/isReadableStreamLike.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isReadableStreamLike = exports.readableStreamLikeToAsyncGenerator = void 0;
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
function readableStreamLikeToAsyncGenerator(readableStream) {
    return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    reader = readableStream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, , 9, 10]);
                    _b.label = 2;
                case 2:
                    if (false) {}
                    return [4, __await(reader.read())];
                case 3:
                    _a = _b.sent(), value = _a.value, done = _a.done;
                    if (!done) return [3, 5];
                    return [4, __await(void 0)];
                case 4: return [2, _b.sent()];
                case 5: return [4, __await(value)];
                case 6: return [4, _b.sent()];
                case 7:
                    _b.sent();
                    return [3, 2];
                case 8: return [3, 10];
                case 9:
                    reader.releaseLock();
                    return [7];
                case 10: return [2];
            }
        });
    });
}
exports.readableStreamLikeToAsyncGenerator = readableStreamLikeToAsyncGenerator;
function isReadableStreamLike(obj) {
    return isFunction_1.isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
exports.isReadableStreamLike = isReadableStreamLike;
//# sourceMappingURL=isReadableStreamLike.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/isScheduler.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isScheduler = void 0;
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
function isScheduler(value) {
    return value && isFunction_1.isFunction(value.schedule);
}
exports.isScheduler = isScheduler;
//# sourceMappingURL=isScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/lift.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.operate = exports.hasLift = void 0;
var isFunction_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/isFunction.js");
function hasLift(source) {
    return isFunction_1.isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
exports.hasLift = hasLift;
function operate(init) {
    return function (source) {
        if (hasLift(source)) {
            return source.lift(function (liftedSource) {
                try {
                    return init(liftedSource, this);
                }
                catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError('Unable to lift unknown Observable type');
    };
}
exports.operate = operate;
//# sourceMappingURL=lift.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/mapOneOrManyArgs.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapOneOrManyArgs = void 0;
var map_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/operators/map.js");
var isArray = Array.isArray;
function callOrApply(fn, args) {
    return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
    return map_1.map(function (args) { return callOrApply(fn, args); });
}
exports.mapOneOrManyArgs = mapOneOrManyArgs;
//# sourceMappingURL=mapOneOrManyArgs.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/noop.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.noop = void 0;
function noop() { }
exports.noop = noop;
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/not.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.not = void 0;
function not(pred, thisArg) {
    return function (value, index) { return !pred.call(thisArg, value, index); };
}
exports.not = not;
//# sourceMappingURL=not.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/pipe.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pipeFromArray = exports.pipe = void 0;
var identity_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/util/identity.js");
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity_1.identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/reportUnhandledError.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.reportUnhandledError = void 0;
var config_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/config.js");
var timeoutProvider_1 = __webpack_require__("./node_modules/rxjs/dist/cjs/internal/scheduler/timeoutProvider.js");
function reportUnhandledError(err) {
    timeoutProvider_1.timeoutProvider.setTimeout(function () {
        var onUnhandledError = config_1.config.onUnhandledError;
        if (onUnhandledError) {
            onUnhandledError(err);
        }
        else {
            throw err;
        }
    });
}
exports.reportUnhandledError = reportUnhandledError;
//# sourceMappingURL=reportUnhandledError.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/cjs/internal/util/throwUnobservableError.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createInvalidObservableTypeError = void 0;
function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
exports.createInvalidObservableTypeError = createInvalidObservableTypeError;
//# sourceMappingURL=throwUnobservableError.js.map

/***/ })

}]);
//# sourceMappingURL=alertmanagerPlugin.5f0d6b71e0d8a0dc3433.js.map
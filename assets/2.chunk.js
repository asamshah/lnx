"use strict";
(self["webpackChunkFFC_SKELETON_THEME"] = self["webpackChunkFFC_SKELETON_THEME"] || []).push([[2],{

/***/ "./node_modules/drift-zoom/es/BoundingBox.js":
/*!***************************************************!*\
  !*** ./node_modules/drift-zoom/es/BoundingBox.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BoundingBox)
/* harmony export */ });
/* harmony import */ var _util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/throwIfMissing */ "./node_modules/drift-zoom/es/util/throwIfMissing.js");
/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/dom */ "./node_modules/drift-zoom/es/util/dom.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var BoundingBox = /*#__PURE__*/function () {
  function BoundingBox(options) {
    _classCallCheck(this, BoundingBox);

    this.isShowing = false;
    var _options$namespace = options.namespace,
        namespace = _options$namespace === void 0 ? null : _options$namespace,
        _options$zoomFactor = options.zoomFactor,
        zoomFactor = _options$zoomFactor === void 0 ? (0,_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$zoomFactor,
        _options$containerEl = options.containerEl,
        containerEl = _options$containerEl === void 0 ? (0,_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$containerEl;
    this.settings = {
      namespace: namespace,
      zoomFactor: zoomFactor,
      containerEl: containerEl
    };
    this.openClasses = this._buildClasses("open");

    this._buildElement();
  }

  _createClass(BoundingBox, [{
    key: "_buildClasses",
    value: function _buildClasses(suffix) {
      var classes = ["drift-".concat(suffix)];
      var ns = this.settings.namespace;

      if (ns) {
        classes.push("".concat(ns, "-").concat(suffix));
      }

      return classes;
    }
  }, {
    key: "_buildElement",
    value: function _buildElement() {
      this.el = document.createElement("div");
      (0,_util_dom__WEBPACK_IMPORTED_MODULE_1__.addClasses)(this.el, this._buildClasses("bounding-box"));
    }
  }, {
    key: "show",
    value: function show(zoomPaneWidth, zoomPaneHeight) {
      this.isShowing = true;
      this.settings.containerEl.appendChild(this.el);
      var style = this.el.style;
      style.width = "".concat(Math.round(zoomPaneWidth / this.settings.zoomFactor), "px");
      style.height = "".concat(Math.round(zoomPaneHeight / this.settings.zoomFactor), "px");
      (0,_util_dom__WEBPACK_IMPORTED_MODULE_1__.addClasses)(this.el, this.openClasses);
    }
  }, {
    key: "hide",
    value: function hide() {
      if (this.isShowing) {
        this.settings.containerEl.removeChild(this.el);
      }

      this.isShowing = false;
      (0,_util_dom__WEBPACK_IMPORTED_MODULE_1__.removeClasses)(this.el, this.openClasses);
    }
  }, {
    key: "setPosition",
    value: function setPosition(percentageOffsetX, percentageOffsetY, triggerRect) {
      var pageXOffset = window.pageXOffset;
      var pageYOffset = window.pageYOffset;
      var inlineLeft = triggerRect.left + percentageOffsetX * triggerRect.width - this.el.clientWidth / 2 + pageXOffset;
      var inlineTop = triggerRect.top + percentageOffsetY * triggerRect.height - this.el.clientHeight / 2 + pageYOffset;

      if (inlineLeft < triggerRect.left + pageXOffset) {
        inlineLeft = triggerRect.left + pageXOffset;
      } else if (inlineLeft + this.el.clientWidth > triggerRect.left + triggerRect.width + pageXOffset) {
        inlineLeft = triggerRect.left + triggerRect.width - this.el.clientWidth + pageXOffset;
      }

      if (inlineTop < triggerRect.top + pageYOffset) {
        inlineTop = triggerRect.top + pageYOffset;
      } else if (inlineTop + this.el.clientHeight > triggerRect.top + triggerRect.height + pageYOffset) {
        inlineTop = triggerRect.top + triggerRect.height - this.el.clientHeight + pageYOffset;
      }

      this.el.style.left = "".concat(inlineLeft, "px");
      this.el.style.top = "".concat(inlineTop, "px");
    }
  }]);

  return BoundingBox;
}();


//# sourceMappingURL=BoundingBox.js.map

/***/ }),

/***/ "./node_modules/drift-zoom/es/Drift.js":
/*!*********************************************!*\
  !*** ./node_modules/drift-zoom/es/Drift.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Drift)
/* harmony export */ });
/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/dom */ "./node_modules/drift-zoom/es/util/dom.js");
/* harmony import */ var _injectBaseStylesheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injectBaseStylesheet */ "./node_modules/drift-zoom/es/injectBaseStylesheet.js");
/* harmony import */ var _Trigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Trigger */ "./node_modules/drift-zoom/es/Trigger.js");
/* harmony import */ var _ZoomPane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ZoomPane */ "./node_modules/drift-zoom/es/ZoomPane.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }






var Drift = /*#__PURE__*/function () {
  function Drift(triggerEl) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Drift);

    this.VERSION = "1.5.1";
    this.triggerEl = triggerEl;
    this.destroy = this.destroy.bind(this);

    if (!(0,_util_dom__WEBPACK_IMPORTED_MODULE_0__.isDOMElement)(this.triggerEl)) {
      throw new TypeError("`new Drift` requires a DOM element as its first argument.");
    } // Prefix for generated element class names (e.g. `my-ns` will
    // result in classes such as `my-ns-pane`. Default `drift-`
    // prefixed classes will always be added as well.


    var namespace = options["namespace"] || null; // Whether the ZoomPane should show whitespace when near the edges.

    var showWhitespaceAtEdges = options["showWhitespaceAtEdges"] || false; // Whether the inline ZoomPane should stay inside
    // the bounds of its image.

    var containInline = options["containInline"] || false; // How much to offset the ZoomPane from the
    // interaction point when inline.

    var inlineOffsetX = options["inlineOffsetX"] || 0;
    var inlineOffsetY = options["inlineOffsetY"] || 0; // A DOM element to append the inline ZoomPane to

    var inlineContainer = options["inlineContainer"] || document.body; // Which trigger attribute to pull the ZoomPane image source from.

    var sourceAttribute = options["sourceAttribute"] || "data-zoom"; // How much to magnify the trigger by in the ZoomPane.
    // (e.g., `zoomFactor: 3` will result in a 900 px wide ZoomPane imag
    // if the trigger is displayed at 300 px wide)

    var zoomFactor = options["zoomFactor"] || 3; // A DOM element to append the non-inline ZoomPane to.
    // Required if `inlinePane !== true`.

    var paneContainer = options["paneContainer"] === undefined ? document.body : options["paneContainer"]; // When to switch to an inline ZoomPane. This can be a boolean or
    // an integer. If `true`, the ZoomPane will always be inline,
    // if `false`, it will switch to inline when `windowWidth <= inlinePane`

    var inlinePane = options["inlinePane"] || 375; // If `true`, touch events will trigger the zoom, like mouse events.

    var handleTouch = "handleTouch" in options ? !!options["handleTouch"] : true; // If present (and a function), this will be called
    // whenever the ZoomPane is shown.

    var onShow = options["onShow"] || null; // If present (and a function), this will be called
    // whenever the ZoomPane is hidden.

    var onHide = options["onHide"] || null; // Add base styles to the page. See the "Theming"
    // section of README.md for more information.

    var injectBaseStyles = "injectBaseStyles" in options ? !!options["injectBaseStyles"] : true; // An optional number that determines how long to wait before
    // showing the ZoomPane because of a `mouseenter` event.

    var hoverDelay = options["hoverDelay"] || 0; // An optional number that determines how long to wait before
    // showing the ZoomPane because of a `touchstart` event.
    // It's unlikely that you would want to use this option, since
    // "tap and hold" is much more intentional than a hover event.

    var touchDelay = options["touchDelay"] || 0; // If true, a bounding box will show the area currently being previewed
    // during mouse hover

    var hoverBoundingBox = options["hoverBoundingBox"] || false; // If true, a bounding box will show the area currently being previewed
    // during touch events

    var touchBoundingBox = options["touchBoundingBox"] || false; // A DOM element to append the bounding box to.

    var boundingBoxContainer = options["boundingBoxContainer"] || document.body; // If true, the events related to handleTouch use passive listeners in
    // order to improve performance for touch devices.

    var passive = options["passive"] || false;

    if (inlinePane !== true && !(0,_util_dom__WEBPACK_IMPORTED_MODULE_0__.isDOMElement)(paneContainer)) {
      throw new TypeError("`paneContainer` must be a DOM element when `inlinePane !== true`");
    }

    if (!(0,_util_dom__WEBPACK_IMPORTED_MODULE_0__.isDOMElement)(inlineContainer)) {
      throw new TypeError("`inlineContainer` must be a DOM element");
    }

    this.settings = {
      namespace: namespace,
      showWhitespaceAtEdges: showWhitespaceAtEdges,
      containInline: containInline,
      inlineOffsetX: inlineOffsetX,
      inlineOffsetY: inlineOffsetY,
      inlineContainer: inlineContainer,
      sourceAttribute: sourceAttribute,
      zoomFactor: zoomFactor,
      paneContainer: paneContainer,
      inlinePane: inlinePane,
      handleTouch: handleTouch,
      onShow: onShow,
      onHide: onHide,
      injectBaseStyles: injectBaseStyles,
      hoverDelay: hoverDelay,
      touchDelay: touchDelay,
      hoverBoundingBox: hoverBoundingBox,
      touchBoundingBox: touchBoundingBox,
      boundingBoxContainer: boundingBoxContainer,
      passive: passive
    };

    if (this.settings.injectBaseStyles) {
      (0,_injectBaseStylesheet__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }

    this._buildZoomPane();

    this._buildTrigger();
  }

  _createClass(Drift, [{
    key: "_buildZoomPane",
    value: function _buildZoomPane() {
      this.zoomPane = new _ZoomPane__WEBPACK_IMPORTED_MODULE_3__["default"]({
        container: this.settings.paneContainer,
        zoomFactor: this.settings.zoomFactor,
        showWhitespaceAtEdges: this.settings.showWhitespaceAtEdges,
        containInline: this.settings.containInline,
        inline: this.settings.inlinePane,
        namespace: this.settings.namespace,
        inlineOffsetX: this.settings.inlineOffsetX,
        inlineOffsetY: this.settings.inlineOffsetY,
        inlineContainer: this.settings.inlineContainer
      });
    }
  }, {
    key: "_buildTrigger",
    value: function _buildTrigger() {
      this.trigger = new _Trigger__WEBPACK_IMPORTED_MODULE_2__["default"]({
        el: this.triggerEl,
        zoomPane: this.zoomPane,
        handleTouch: this.settings.handleTouch,
        onShow: this.settings.onShow,
        onHide: this.settings.onHide,
        sourceAttribute: this.settings.sourceAttribute,
        hoverDelay: this.settings.hoverDelay,
        touchDelay: this.settings.touchDelay,
        hoverBoundingBox: this.settings.hoverBoundingBox,
        touchBoundingBox: this.settings.touchBoundingBox,
        namespace: this.settings.namespace,
        zoomFactor: this.settings.zoomFactor,
        boundingBoxContainer: this.settings.boundingBoxContainer,
        passive: this.settings.passive
      });
    }
  }, {
    key: "setZoomImageURL",
    value: function setZoomImageURL(imageURL) {
      this.zoomPane._setImageURL(imageURL);
    }
  }, {
    key: "disable",
    value: function disable() {
      this.trigger.enabled = false;
    }
  }, {
    key: "enable",
    value: function enable() {
      this.trigger.enabled = true;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.trigger._hide();

      this.trigger._unbindEvents();
    }
  }, {
    key: "isShowing",
    get: function get() {
      return this.zoomPane.isShowing;
    }
  }, {
    key: "zoomFactor",
    get: function get() {
      return this.settings.zoomFactor;
    },
    set: function set(zf) {
      this.settings.zoomFactor = zf;
      this.zoomPane.settings.zoomFactor = zf;
      this.trigger.settings.zoomFactor = zf;
      this.boundingBox.settings.zoomFactor = zf;
    }
  }]);

  return Drift;
}(); // Public API

/* eslint-disable no-self-assign */



Object.defineProperty(Drift.prototype, "isShowing", {
  get: function get() {
    return this.isShowing;
  }
});
Object.defineProperty(Drift.prototype, "zoomFactor", {
  get: function get() {
    return this.zoomFactor;
  },
  set: function set(value) {
    this.zoomFactor = value;
  }
});
Drift.prototype["setZoomImageURL"] = Drift.prototype.setZoomImageURL;
Drift.prototype["disable"] = Drift.prototype.disable;
Drift.prototype["enable"] = Drift.prototype.enable;
Drift.prototype["destroy"] = Drift.prototype.destroy;
/* eslint-enable no-self-assign */
//# sourceMappingURL=Drift.js.map

/***/ }),

/***/ "./node_modules/drift-zoom/es/Trigger.js":
/*!***********************************************!*\
  !*** ./node_modules/drift-zoom/es/Trigger.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Trigger)
/* harmony export */ });
/* harmony import */ var _util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/throwIfMissing */ "./node_modules/drift-zoom/es/util/throwIfMissing.js");
/* harmony import */ var _BoundingBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoundingBox */ "./node_modules/drift-zoom/es/BoundingBox.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var Trigger = /*#__PURE__*/function () {
  function Trigger() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Trigger);

    this._show = this._show.bind(this);
    this._hide = this._hide.bind(this);
    this._handleEntry = this._handleEntry.bind(this);
    this._handleMovement = this._handleMovement.bind(this);
    var _options$el = options.el,
        el = _options$el === void 0 ? (0,_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$el,
        _options$zoomPane = options.zoomPane,
        zoomPane = _options$zoomPane === void 0 ? (0,_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$zoomPane,
        _options$sourceAttrib = options.sourceAttribute,
        sourceAttribute = _options$sourceAttrib === void 0 ? (0,_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$sourceAttrib,
        _options$handleTouch = options.handleTouch,
        handleTouch = _options$handleTouch === void 0 ? (0,_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$handleTouch,
        _options$onShow = options.onShow,
        onShow = _options$onShow === void 0 ? null : _options$onShow,
        _options$onHide = options.onHide,
        onHide = _options$onHide === void 0 ? null : _options$onHide,
        _options$hoverDelay = options.hoverDelay,
        hoverDelay = _options$hoverDelay === void 0 ? 0 : _options$hoverDelay,
        _options$touchDelay = options.touchDelay,
        touchDelay = _options$touchDelay === void 0 ? 0 : _options$touchDelay,
        _options$hoverBoundin = options.hoverBoundingBox,
        hoverBoundingBox = _options$hoverBoundin === void 0 ? (0,_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$hoverBoundin,
        _options$touchBoundin = options.touchBoundingBox,
        touchBoundingBox = _options$touchBoundin === void 0 ? (0,_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$touchBoundin,
        _options$namespace = options.namespace,
        namespace = _options$namespace === void 0 ? null : _options$namespace,
        _options$zoomFactor = options.zoomFactor,
        zoomFactor = _options$zoomFactor === void 0 ? (0,_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$zoomFactor,
        _options$boundingBoxC = options.boundingBoxContainer,
        boundingBoxContainer = _options$boundingBoxC === void 0 ? (0,_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$boundingBoxC,
        _options$passive = options.passive,
        passive = _options$passive === void 0 ? false : _options$passive;
    this.settings = {
      el: el,
      zoomPane: zoomPane,
      sourceAttribute: sourceAttribute,
      handleTouch: handleTouch,
      onShow: onShow,
      onHide: onHide,
      hoverDelay: hoverDelay,
      touchDelay: touchDelay,
      hoverBoundingBox: hoverBoundingBox,
      touchBoundingBox: touchBoundingBox,
      namespace: namespace,
      zoomFactor: zoomFactor,
      boundingBoxContainer: boundingBoxContainer,
      passive: passive
    };

    if (this.settings.hoverBoundingBox || this.settings.touchBoundingBox) {
      this.boundingBox = new _BoundingBox__WEBPACK_IMPORTED_MODULE_1__["default"]({
        namespace: this.settings.namespace,
        zoomFactor: this.settings.zoomFactor,
        containerEl: this.settings.boundingBoxContainer
      });
    }

    this.enabled = true;

    this._bindEvents();
  }

  _createClass(Trigger, [{
    key: "_preventDefault",
    value: function _preventDefault(event) {
      event.preventDefault();
    }
  }, {
    key: "_preventDefaultAllowTouchScroll",
    value: function _preventDefaultAllowTouchScroll(event) {
      if (!this.settings.touchDelay || !this._isTouchEvent(event) || this.isShowing) {
        event.preventDefault();
      }
    }
  }, {
    key: "_isTouchEvent",
    value: function _isTouchEvent(event) {
      return !!event.touches;
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      this.settings.el.addEventListener("mouseenter", this._handleEntry);
      this.settings.el.addEventListener("mouseleave", this._hide);
      this.settings.el.addEventListener("mousemove", this._handleMovement);
      var isPassive = {
        passive: this.settings.passive
      };

      if (this.settings.handleTouch) {
        this.settings.el.addEventListener("touchstart", this._handleEntry, isPassive);
        this.settings.el.addEventListener("touchend", this._hide);
        this.settings.el.addEventListener("touchmove", this._handleMovement, isPassive);
      } else {
        this.settings.el.addEventListener("touchstart", this._preventDefault, isPassive);
        this.settings.el.addEventListener("touchend", this._preventDefault);
        this.settings.el.addEventListener("touchmove", this._preventDefault, isPassive);
      }
    }
  }, {
    key: "_unbindEvents",
    value: function _unbindEvents() {
      this.settings.el.removeEventListener("mouseenter", this._handleEntry);
      this.settings.el.removeEventListener("mouseleave", this._hide);
      this.settings.el.removeEventListener("mousemove", this._handleMovement);

      if (this.settings.handleTouch) {
        this.settings.el.removeEventListener("touchstart", this._handleEntry);
        this.settings.el.removeEventListener("touchend", this._hide);
        this.settings.el.removeEventListener("touchmove", this._handleMovement);
      } else {
        this.settings.el.removeEventListener("touchstart", this._preventDefault);
        this.settings.el.removeEventListener("touchend", this._preventDefault);
        this.settings.el.removeEventListener("touchmove", this._preventDefault);
      }
    }
  }, {
    key: "_handleEntry",
    value: function _handleEntry(e) {
      this._preventDefaultAllowTouchScroll(e);

      this._lastMovement = e;

      if (e.type == "mouseenter" && this.settings.hoverDelay) {
        this.entryTimeout = setTimeout(this._show, this.settings.hoverDelay);
      } else if (this.settings.touchDelay) {
        this.entryTimeout = setTimeout(this._show, this.settings.touchDelay);
      } else {
        this._show();
      }
    }
  }, {
    key: "_show",
    value: function _show() {
      if (!this.enabled) {
        return;
      }

      var onShow = this.settings.onShow;

      if (onShow && typeof onShow === "function") {
        onShow();
      }

      this.settings.zoomPane.show(this.settings.el.getAttribute(this.settings.sourceAttribute), this.settings.el.clientWidth, this.settings.el.clientHeight);

      if (this._lastMovement) {
        var touchActivated = this._lastMovement.touches;

        if (touchActivated && this.settings.touchBoundingBox || !touchActivated && this.settings.hoverBoundingBox) {
          this.boundingBox.show(this.settings.zoomPane.el.clientWidth, this.settings.zoomPane.el.clientHeight);
        }
      }

      this._handleMovement();
    }
  }, {
    key: "_hide",
    value: function _hide(e) {
      if (e) {
        this._preventDefaultAllowTouchScroll(e);
      }

      this._lastMovement = null;

      if (this.entryTimeout) {
        clearTimeout(this.entryTimeout);
      }

      if (this.boundingBox) {
        this.boundingBox.hide();
      }

      var onHide = this.settings.onHide;

      if (onHide && typeof onHide === "function") {
        onHide();
      }

      this.settings.zoomPane.hide();
    }
  }, {
    key: "_handleMovement",
    value: function _handleMovement(e) {
      if (e) {
        this._preventDefaultAllowTouchScroll(e);

        this._lastMovement = e;
      } else if (this._lastMovement) {
        e = this._lastMovement;
      } else {
        return;
      }

      var movementX;
      var movementY;

      if (e.touches) {
        var firstTouch = e.touches[0];
        movementX = firstTouch.clientX;
        movementY = firstTouch.clientY;
      } else {
        movementX = e.clientX;
        movementY = e.clientY;
      }

      var el = this.settings.el;
      var rect = el.getBoundingClientRect();
      var offsetX = movementX - rect.left;
      var offsetY = movementY - rect.top;
      var percentageOffsetX = offsetX / this.settings.el.clientWidth;
      var percentageOffsetY = offsetY / this.settings.el.clientHeight;

      if (this.boundingBox) {
        this.boundingBox.setPosition(percentageOffsetX, percentageOffsetY, rect);
      }

      this.settings.zoomPane.setPosition(percentageOffsetX, percentageOffsetY, rect);
    }
  }, {
    key: "isShowing",
    get: function get() {
      return this.settings.zoomPane.isShowing;
    }
  }]);

  return Trigger;
}();


//# sourceMappingURL=Trigger.js.map

/***/ }),

/***/ "./node_modules/drift-zoom/es/ZoomPane.js":
/*!************************************************!*\
  !*** ./node_modules/drift-zoom/es/ZoomPane.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZoomPane)
/* harmony export */ });
/* harmony import */ var _util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/throwIfMissing */ "./node_modules/drift-zoom/es/util/throwIfMissing.js");
/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/dom */ "./node_modules/drift-zoom/es/util/dom.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var ZoomPane = /*#__PURE__*/function () {
  function ZoomPane() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ZoomPane);

    // All officially-supported browsers have this, but it's easy to
    // account for, just in case.
    this.HAS_ANIMATION = false;

    if (typeof document !== "undefined") {
      var divStyle = document.createElement("div").style;
      this.HAS_ANIMATION = "animation" in divStyle || "webkitAnimation" in divStyle;
    }

    this._completeShow = this._completeShow.bind(this);
    this._completeHide = this._completeHide.bind(this);
    this._handleLoad = this._handleLoad.bind(this);
    this.isShowing = false;
    var _options$container = options.container,
        container = _options$container === void 0 ? null : _options$container,
        _options$zoomFactor = options.zoomFactor,
        zoomFactor = _options$zoomFactor === void 0 ? (0,_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$zoomFactor,
        _options$inline = options.inline,
        inline = _options$inline === void 0 ? (0,_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$inline,
        _options$namespace = options.namespace,
        namespace = _options$namespace === void 0 ? null : _options$namespace,
        _options$showWhitespa = options.showWhitespaceAtEdges,
        showWhitespaceAtEdges = _options$showWhitespa === void 0 ? (0,_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$showWhitespa,
        _options$containInlin = options.containInline,
        containInline = _options$containInlin === void 0 ? (0,_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$containInlin,
        _options$inlineOffset = options.inlineOffsetX,
        inlineOffsetX = _options$inlineOffset === void 0 ? 0 : _options$inlineOffset,
        _options$inlineOffset2 = options.inlineOffsetY,
        inlineOffsetY = _options$inlineOffset2 === void 0 ? 0 : _options$inlineOffset2,
        _options$inlineContai = options.inlineContainer,
        inlineContainer = _options$inlineContai === void 0 ? document.body : _options$inlineContai;
    this.settings = {
      container: container,
      zoomFactor: zoomFactor,
      inline: inline,
      namespace: namespace,
      showWhitespaceAtEdges: showWhitespaceAtEdges,
      containInline: containInline,
      inlineOffsetX: inlineOffsetX,
      inlineOffsetY: inlineOffsetY,
      inlineContainer: inlineContainer
    };
    this.openClasses = this._buildClasses("open");
    this.openingClasses = this._buildClasses("opening");
    this.closingClasses = this._buildClasses("closing");
    this.inlineClasses = this._buildClasses("inline");
    this.loadingClasses = this._buildClasses("loading");

    this._buildElement();
  }

  _createClass(ZoomPane, [{
    key: "_buildClasses",
    value: function _buildClasses(suffix) {
      var classes = ["drift-".concat(suffix)];
      var ns = this.settings.namespace;

      if (ns) {
        classes.push("".concat(ns, "-").concat(suffix));
      }

      return classes;
    }
  }, {
    key: "_buildElement",
    value: function _buildElement() {
      this.el = document.createElement("div");
      (0,_util_dom__WEBPACK_IMPORTED_MODULE_1__.addClasses)(this.el, this._buildClasses("zoom-pane"));
      var loaderEl = document.createElement("div");
      (0,_util_dom__WEBPACK_IMPORTED_MODULE_1__.addClasses)(loaderEl, this._buildClasses("zoom-pane-loader"));
      this.el.appendChild(loaderEl);
      this.imgEl = document.createElement("img");
      this.el.appendChild(this.imgEl);
    }
  }, {
    key: "_setImageURL",
    value: function _setImageURL(imageURL) {
      this.imgEl.setAttribute("src", imageURL);
    }
  }, {
    key: "_setImageSize",
    value: function _setImageSize(triggerWidth, triggerHeight) {
      this.imgEl.style.width = "".concat(triggerWidth * this.settings.zoomFactor, "px");
      this.imgEl.style.height = "".concat(triggerHeight * this.settings.zoomFactor, "px");
    } // `percentageOffsetX` and `percentageOffsetY` must be percentages
    // expressed as floats between `0' and `1`.

  }, {
    key: "setPosition",
    value: function setPosition(percentageOffsetX, percentageOffsetY, triggerRect) {
      var imgElWidth = this.imgEl.offsetWidth;
      var imgElHeight = this.imgEl.offsetHeight;
      var elWidth = this.el.offsetWidth;
      var elHeight = this.el.offsetHeight;
      var centreOfContainerX = elWidth / 2;
      var centreOfContainerY = elHeight / 2;
      var targetImgXToBeCentre = imgElWidth * percentageOffsetX;
      var targetImgYToBeCentre = imgElHeight * percentageOffsetY;
      var left = centreOfContainerX - targetImgXToBeCentre;
      var top = centreOfContainerY - targetImgYToBeCentre;
      var differenceBetweenContainerWidthAndImgWidth = elWidth - imgElWidth;
      var differenceBetweenContainerHeightAndImgHeight = elHeight - imgElHeight;
      var isContainerLargerThanImgX = differenceBetweenContainerWidthAndImgWidth > 0;
      var isContainerLargerThanImgY = differenceBetweenContainerHeightAndImgHeight > 0;
      var minLeft = isContainerLargerThanImgX ? differenceBetweenContainerWidthAndImgWidth / 2 : 0;
      var minTop = isContainerLargerThanImgY ? differenceBetweenContainerHeightAndImgHeight / 2 : 0;
      var maxLeft = isContainerLargerThanImgX ? differenceBetweenContainerWidthAndImgWidth / 2 : differenceBetweenContainerWidthAndImgWidth;
      var maxTop = isContainerLargerThanImgY ? differenceBetweenContainerHeightAndImgHeight / 2 : differenceBetweenContainerHeightAndImgHeight;

      if (this.el.parentElement === this.settings.inlineContainer) {
        // This may be needed in the future to deal with browser event
        // inconsistencies, but it's difficult to tell for sure.
        // let scrollX = isTouch ? 0 : window.scrollX;
        // let scrollY = isTouch ? 0 : window.scrollY;
        var scrollX = window.pageXOffset;
        var scrollY = window.pageYOffset;
        var inlineLeft = triggerRect.left + percentageOffsetX * triggerRect.width - elWidth / 2 + this.settings.inlineOffsetX + scrollX;
        var inlineTop = triggerRect.top + percentageOffsetY * triggerRect.height - elHeight / 2 + this.settings.inlineOffsetY + scrollY;

        if (this.settings.containInline) {
          if (inlineLeft < triggerRect.left + scrollX) {
            inlineLeft = triggerRect.left + scrollX;
          } else if (inlineLeft + elWidth > triggerRect.left + triggerRect.width + scrollX) {
            inlineLeft = triggerRect.left + triggerRect.width - elWidth + scrollX;
          }

          if (inlineTop < triggerRect.top + scrollY) {
            inlineTop = triggerRect.top + scrollY;
          } else if (inlineTop + elHeight > triggerRect.top + triggerRect.height + scrollY) {
            inlineTop = triggerRect.top + triggerRect.height - elHeight + scrollY;
          }
        }

        this.el.style.left = "".concat(inlineLeft, "px");
        this.el.style.top = "".concat(inlineTop, "px");
      }

      if (!this.settings.showWhitespaceAtEdges) {
        if (left > minLeft) {
          left = minLeft;
        } else if (left < maxLeft) {
          left = maxLeft;
        }

        if (top > minTop) {
          top = minTop;
        } else if (top < maxTop) {
          top = maxTop;
        }
      }

      this.imgEl.style.transform = "translate(".concat(left, "px, ").concat(top, "px)");
      this.imgEl.style.webkitTransform = "translate(".concat(left, "px, ").concat(top, "px)");
    }
  }, {
    key: "_removeListenersAndResetClasses",
    value: function _removeListenersAndResetClasses() {
      this.el.removeEventListener("animationend", this._completeShow);
      this.el.removeEventListener("animationend", this._completeHide);
      this.el.removeEventListener("webkitAnimationEnd", this._completeShow);
      this.el.removeEventListener("webkitAnimationEnd", this._completeHide);
      (0,_util_dom__WEBPACK_IMPORTED_MODULE_1__.removeClasses)(this.el, this.openClasses);
      (0,_util_dom__WEBPACK_IMPORTED_MODULE_1__.removeClasses)(this.el, this.closingClasses);
    }
  }, {
    key: "show",
    value: function show(imageURL, triggerWidth, triggerHeight) {
      this._removeListenersAndResetClasses();

      this.isShowing = true;
      (0,_util_dom__WEBPACK_IMPORTED_MODULE_1__.addClasses)(this.el, this.openClasses);

      if (this.imgEl.getAttribute("src") != imageURL) {
        (0,_util_dom__WEBPACK_IMPORTED_MODULE_1__.addClasses)(this.el, this.loadingClasses);
        this.imgEl.addEventListener("load", this._handleLoad);

        this._setImageURL(imageURL);
      }

      this._setImageSize(triggerWidth, triggerHeight);

      if (this._isInline) {
        this._showInline();
      } else {
        this._showInContainer();
      }

      if (this.HAS_ANIMATION) {
        this.el.addEventListener("animationend", this._completeShow);
        this.el.addEventListener("webkitAnimationEnd", this._completeShow);
        (0,_util_dom__WEBPACK_IMPORTED_MODULE_1__.addClasses)(this.el, this.openingClasses);
      }
    }
  }, {
    key: "_showInline",
    value: function _showInline() {
      this.settings.inlineContainer.appendChild(this.el);
      (0,_util_dom__WEBPACK_IMPORTED_MODULE_1__.addClasses)(this.el, this.inlineClasses);
    }
  }, {
    key: "_showInContainer",
    value: function _showInContainer() {
      this.settings.container.appendChild(this.el);
    }
  }, {
    key: "hide",
    value: function hide() {
      this._removeListenersAndResetClasses();

      this.isShowing = false;

      if (this.HAS_ANIMATION) {
        this.el.addEventListener("animationend", this._completeHide);
        this.el.addEventListener("webkitAnimationEnd", this._completeHide);
        (0,_util_dom__WEBPACK_IMPORTED_MODULE_1__.addClasses)(this.el, this.closingClasses);
      } else {
        (0,_util_dom__WEBPACK_IMPORTED_MODULE_1__.removeClasses)(this.el, this.openClasses);
        (0,_util_dom__WEBPACK_IMPORTED_MODULE_1__.removeClasses)(this.el, this.inlineClasses);
      }
    }
  }, {
    key: "_completeShow",
    value: function _completeShow() {
      this.el.removeEventListener("animationend", this._completeShow);
      this.el.removeEventListener("webkitAnimationEnd", this._completeShow);
      (0,_util_dom__WEBPACK_IMPORTED_MODULE_1__.removeClasses)(this.el, this.openingClasses);
    }
  }, {
    key: "_completeHide",
    value: function _completeHide() {
      this.el.removeEventListener("animationend", this._completeHide);
      this.el.removeEventListener("webkitAnimationEnd", this._completeHide);
      (0,_util_dom__WEBPACK_IMPORTED_MODULE_1__.removeClasses)(this.el, this.openClasses);
      (0,_util_dom__WEBPACK_IMPORTED_MODULE_1__.removeClasses)(this.el, this.closingClasses);
      (0,_util_dom__WEBPACK_IMPORTED_MODULE_1__.removeClasses)(this.el, this.inlineClasses);
      this.el.style.left = "";
      this.el.style.top = ""; // The window could have been resized above or below `inline`
      // limits since the ZoomPane was shown. Because of this, we
      // can't rely on `this._isInline` here.

      if (this.el.parentElement === this.settings.container) {
        this.settings.container.removeChild(this.el);
      } else if (this.el.parentElement === this.settings.inlineContainer) {
        this.settings.inlineContainer.removeChild(this.el);
      }
    }
  }, {
    key: "_handleLoad",
    value: function _handleLoad() {
      this.imgEl.removeEventListener("load", this._handleLoad);
      (0,_util_dom__WEBPACK_IMPORTED_MODULE_1__.removeClasses)(this.el, this.loadingClasses);
    }
  }, {
    key: "_isInline",
    get: function get() {
      var inline = this.settings.inline;
      return inline === true || typeof inline === "number" && window.innerWidth <= inline;
    }
  }]);

  return ZoomPane;
}();


//# sourceMappingURL=ZoomPane.js.map

/***/ }),

/***/ "./node_modules/drift-zoom/es/injectBaseStylesheet.js":
/*!************************************************************!*\
  !*** ./node_modules/drift-zoom/es/injectBaseStylesheet.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ injectBaseStylesheet)
/* harmony export */ });
/* UNMINIFIED RULES

const RULES = `
@keyframes noop {
  0% { zoom: 1; }
}

@-webkit-keyframes noop {
  0% { zoom: 1; }
}

.drift-zoom-pane.drift-open {
  display: block;
}

.drift-zoom-pane.drift-opening, .drift-zoom-pane.drift-closing {
  animation: noop 1ms;
  -webkit-animation: noop 1ms;
}

.drift-zoom-pane {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.drift-zoom-pane-loader {
  display: none;
}

.drift-zoom-pane img {
  position: absolute;
  display: block;
  max-width: none;
  max-height: none;
}

.drift-bounding-box {
  position: absolute;
  pointer-events: none;
}
`;

*/
var RULES = ".drift-bounding-box,.drift-zoom-pane{position:absolute;pointer-events:none}@keyframes noop{0%{zoom:1}}@-webkit-keyframes noop{0%{zoom:1}}.drift-zoom-pane.drift-open{display:block}.drift-zoom-pane.drift-closing,.drift-zoom-pane.drift-opening{animation:noop 1ms;-webkit-animation:noop 1ms}.drift-zoom-pane{overflow:hidden;width:100%;height:100%;top:0;left:0}.drift-zoom-pane-loader{display:none}.drift-zoom-pane img{position:absolute;display:block;max-width:none;max-height:none}";
function injectBaseStylesheet() {
  if (document.querySelector(".drift-base-styles")) {
    return;
  }

  var styleEl = document.createElement("style");
  styleEl.type = "text/css";
  styleEl.classList.add("drift-base-styles");
  styleEl.appendChild(document.createTextNode(RULES));
  var head = document.head;
  head.insertBefore(styleEl, head.firstChild);
}
//# sourceMappingURL=injectBaseStylesheet.js.map

/***/ }),

/***/ "./node_modules/drift-zoom/es/util/dom.js":
/*!************************************************!*\
  !*** ./node_modules/drift-zoom/es/util/dom.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addClasses: () => (/* binding */ addClasses),
/* harmony export */   isDOMElement: () => (/* binding */ isDOMElement),
/* harmony export */   removeClasses: () => (/* binding */ removeClasses)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// This is not really a perfect check, but works fine.
// From http://stackoverflow.com/questions/384286
var HAS_DOM_2 = (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === "object";
function isDOMElement(obj) {
  return HAS_DOM_2 ? obj instanceof HTMLElement : obj && _typeof(obj) === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
}
function addClasses(el, classNames) {
  classNames.forEach(function (className) {
    el.classList.add(className);
  });
}
function removeClasses(el, classNames) {
  classNames.forEach(function (className) {
    el.classList.remove(className);
  });
}
//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "./node_modules/drift-zoom/es/util/throwIfMissing.js":
/*!***********************************************************!*\
  !*** ./node_modules/drift-zoom/es/util/throwIfMissing.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ throwIfMissing)
/* harmony export */ });
function throwIfMissing() {
  throw new Error("Missing parameter");
}
//# sourceMappingURL=throwIfMissing.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5jaHVuay5qcz92PTkyMDk5NjU2MzcwJmVuYWJsZV9qc19taW5pZmljYXRpb249MSIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GRkMtU0tFTEVUT04tVEhFTUUvLi9ub2RlX21vZHVsZXMvZHJpZnQtem9vbS9lcy9Cb3VuZGluZ0JveC5qcyIsIndlYnBhY2s6Ly9GRkMtU0tFTEVUT04tVEhFTUUvLi9ub2RlX21vZHVsZXMvZHJpZnQtem9vbS9lcy9EcmlmdC5qcyIsIndlYnBhY2s6Ly9GRkMtU0tFTEVUT04tVEhFTUUvLi9ub2RlX21vZHVsZXMvZHJpZnQtem9vbS9lcy9UcmlnZ2VyLmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9kcmlmdC16b29tL2VzL1pvb21QYW5lLmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9kcmlmdC16b29tL2VzL2luamVjdEJhc2VTdHlsZXNoZWV0LmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9kcmlmdC16b29tL2VzL3V0aWwvZG9tLmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9kcmlmdC16b29tL2VzL3V0aWwvdGhyb3dJZk1pc3NpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5pbXBvcnQgdGhyb3dJZk1pc3NpbmcgZnJvbSBcIi4vdXRpbC90aHJvd0lmTWlzc2luZ1wiO1xuaW1wb3J0IHsgYWRkQ2xhc3NlcywgcmVtb3ZlQ2xhc3NlcyB9IGZyb20gXCIuL3V0aWwvZG9tXCI7XG5cbnZhciBCb3VuZGluZ0JveCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEJvdW5kaW5nQm94KG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQm91bmRpbmdCb3gpO1xuXG4gICAgdGhpcy5pc1Nob3dpbmcgPSBmYWxzZTtcbiAgICB2YXIgX29wdGlvbnMkbmFtZXNwYWNlID0gb3B0aW9ucy5uYW1lc3BhY2UsXG4gICAgICAgIG5hbWVzcGFjZSA9IF9vcHRpb25zJG5hbWVzcGFjZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9vcHRpb25zJG5hbWVzcGFjZSxcbiAgICAgICAgX29wdGlvbnMkem9vbUZhY3RvciA9IG9wdGlvbnMuem9vbUZhY3RvcixcbiAgICAgICAgem9vbUZhY3RvciA9IF9vcHRpb25zJHpvb21GYWN0b3IgPT09IHZvaWQgMCA/IHRocm93SWZNaXNzaW5nKCkgOiBfb3B0aW9ucyR6b29tRmFjdG9yLFxuICAgICAgICBfb3B0aW9ucyRjb250YWluZXJFbCA9IG9wdGlvbnMuY29udGFpbmVyRWwsXG4gICAgICAgIGNvbnRhaW5lckVsID0gX29wdGlvbnMkY29udGFpbmVyRWwgPT09IHZvaWQgMCA/IHRocm93SWZNaXNzaW5nKCkgOiBfb3B0aW9ucyRjb250YWluZXJFbDtcbiAgICB0aGlzLnNldHRpbmdzID0ge1xuICAgICAgbmFtZXNwYWNlOiBuYW1lc3BhY2UsXG4gICAgICB6b29tRmFjdG9yOiB6b29tRmFjdG9yLFxuICAgICAgY29udGFpbmVyRWw6IGNvbnRhaW5lckVsXG4gICAgfTtcbiAgICB0aGlzLm9wZW5DbGFzc2VzID0gdGhpcy5fYnVpbGRDbGFzc2VzKFwib3BlblwiKTtcblxuICAgIHRoaXMuX2J1aWxkRWxlbWVudCgpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEJvdW5kaW5nQm94LCBbe1xuICAgIGtleTogXCJfYnVpbGRDbGFzc2VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9idWlsZENsYXNzZXMoc3VmZml4KSB7XG4gICAgICB2YXIgY2xhc3NlcyA9IFtcImRyaWZ0LVwiLmNvbmNhdChzdWZmaXgpXTtcbiAgICAgIHZhciBucyA9IHRoaXMuc2V0dGluZ3MubmFtZXNwYWNlO1xuXG4gICAgICBpZiAobnMpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKFwiXCIuY29uY2F0KG5zLCBcIi1cIikuY29uY2F0KHN1ZmZpeCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2xhc3NlcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2J1aWxkRWxlbWVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYnVpbGRFbGVtZW50KCkge1xuICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBhZGRDbGFzc2VzKHRoaXMuZWwsIHRoaXMuX2J1aWxkQ2xhc3NlcyhcImJvdW5kaW5nLWJveFwiKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNob3dcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdyh6b29tUGFuZVdpZHRoLCB6b29tUGFuZUhlaWdodCkge1xuICAgICAgdGhpcy5pc1Nob3dpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zZXR0aW5ncy5jb250YWluZXJFbC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICAgIHZhciBzdHlsZSA9IHRoaXMuZWwuc3R5bGU7XG4gICAgICBzdHlsZS53aWR0aCA9IFwiXCIuY29uY2F0KE1hdGgucm91bmQoem9vbVBhbmVXaWR0aCAvIHRoaXMuc2V0dGluZ3Muem9vbUZhY3RvciksIFwicHhcIik7XG4gICAgICBzdHlsZS5oZWlnaHQgPSBcIlwiLmNvbmNhdChNYXRoLnJvdW5kKHpvb21QYW5lSGVpZ2h0IC8gdGhpcy5zZXR0aW5ncy56b29tRmFjdG9yKSwgXCJweFwiKTtcbiAgICAgIGFkZENsYXNzZXModGhpcy5lbCwgdGhpcy5vcGVuQ2xhc3Nlcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhpZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGlkZSgpIHtcbiAgICAgIGlmICh0aGlzLmlzU2hvd2luZykge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNvbnRhaW5lckVsLnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmlzU2hvd2luZyA9IGZhbHNlO1xuICAgICAgcmVtb3ZlQ2xhc3Nlcyh0aGlzLmVsLCB0aGlzLm9wZW5DbGFzc2VzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0UG9zaXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UG9zaXRpb24ocGVyY2VudGFnZU9mZnNldFgsIHBlcmNlbnRhZ2VPZmZzZXRZLCB0cmlnZ2VyUmVjdCkge1xuICAgICAgdmFyIHBhZ2VYT2Zmc2V0ID0gd2luZG93LnBhZ2VYT2Zmc2V0O1xuICAgICAgdmFyIHBhZ2VZT2Zmc2V0ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgdmFyIGlubGluZUxlZnQgPSB0cmlnZ2VyUmVjdC5sZWZ0ICsgcGVyY2VudGFnZU9mZnNldFggKiB0cmlnZ2VyUmVjdC53aWR0aCAtIHRoaXMuZWwuY2xpZW50V2lkdGggLyAyICsgcGFnZVhPZmZzZXQ7XG4gICAgICB2YXIgaW5saW5lVG9wID0gdHJpZ2dlclJlY3QudG9wICsgcGVyY2VudGFnZU9mZnNldFkgKiB0cmlnZ2VyUmVjdC5oZWlnaHQgLSB0aGlzLmVsLmNsaWVudEhlaWdodCAvIDIgKyBwYWdlWU9mZnNldDtcblxuICAgICAgaWYgKGlubGluZUxlZnQgPCB0cmlnZ2VyUmVjdC5sZWZ0ICsgcGFnZVhPZmZzZXQpIHtcbiAgICAgICAgaW5saW5lTGVmdCA9IHRyaWdnZXJSZWN0LmxlZnQgKyBwYWdlWE9mZnNldDtcbiAgICAgIH0gZWxzZSBpZiAoaW5saW5lTGVmdCArIHRoaXMuZWwuY2xpZW50V2lkdGggPiB0cmlnZ2VyUmVjdC5sZWZ0ICsgdHJpZ2dlclJlY3Qud2lkdGggKyBwYWdlWE9mZnNldCkge1xuICAgICAgICBpbmxpbmVMZWZ0ID0gdHJpZ2dlclJlY3QubGVmdCArIHRyaWdnZXJSZWN0LndpZHRoIC0gdGhpcy5lbC5jbGllbnRXaWR0aCArIHBhZ2VYT2Zmc2V0O1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5saW5lVG9wIDwgdHJpZ2dlclJlY3QudG9wICsgcGFnZVlPZmZzZXQpIHtcbiAgICAgICAgaW5saW5lVG9wID0gdHJpZ2dlclJlY3QudG9wICsgcGFnZVlPZmZzZXQ7XG4gICAgICB9IGVsc2UgaWYgKGlubGluZVRvcCArIHRoaXMuZWwuY2xpZW50SGVpZ2h0ID4gdHJpZ2dlclJlY3QudG9wICsgdHJpZ2dlclJlY3QuaGVpZ2h0ICsgcGFnZVlPZmZzZXQpIHtcbiAgICAgICAgaW5saW5lVG9wID0gdHJpZ2dlclJlY3QudG9wICsgdHJpZ2dlclJlY3QuaGVpZ2h0IC0gdGhpcy5lbC5jbGllbnRIZWlnaHQgKyBwYWdlWU9mZnNldDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5zdHlsZS5sZWZ0ID0gXCJcIi5jb25jYXQoaW5saW5lTGVmdCwgXCJweFwiKTtcbiAgICAgIHRoaXMuZWwuc3R5bGUudG9wID0gXCJcIi5jb25jYXQoaW5saW5lVG9wLCBcInB4XCIpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBCb3VuZGluZ0JveDtcbn0oKTtcblxuZXhwb3J0IHsgQm91bmRpbmdCb3ggYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Qm91bmRpbmdCb3guanMubWFwIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5pbXBvcnQgeyBpc0RPTUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsL2RvbVwiO1xuaW1wb3J0IGluamVjdEJhc2VTdHlsZXNoZWV0IGZyb20gXCIuL2luamVjdEJhc2VTdHlsZXNoZWV0XCI7XG5pbXBvcnQgVHJpZ2dlciBmcm9tIFwiLi9UcmlnZ2VyXCI7XG5pbXBvcnQgWm9vbVBhbmUgZnJvbSBcIi4vWm9vbVBhbmVcIjtcblxudmFyIERyaWZ0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRHJpZnQodHJpZ2dlckVsKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyaWZ0KTtcblxuICAgIHRoaXMuVkVSU0lPTiA9IFwiMS41LjFcIjtcbiAgICB0aGlzLnRyaWdnZXJFbCA9IHRyaWdnZXJFbDtcbiAgICB0aGlzLmRlc3Ryb3kgPSB0aGlzLmRlc3Ryb3kuYmluZCh0aGlzKTtcblxuICAgIGlmICghaXNET01FbGVtZW50KHRoaXMudHJpZ2dlckVsKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImBuZXcgRHJpZnRgIHJlcXVpcmVzIGEgRE9NIGVsZW1lbnQgYXMgaXRzIGZpcnN0IGFyZ3VtZW50LlwiKTtcbiAgICB9IC8vIFByZWZpeCBmb3IgZ2VuZXJhdGVkIGVsZW1lbnQgY2xhc3MgbmFtZXMgKGUuZy4gYG15LW5zYCB3aWxsXG4gICAgLy8gcmVzdWx0IGluIGNsYXNzZXMgc3VjaCBhcyBgbXktbnMtcGFuZWAuIERlZmF1bHQgYGRyaWZ0LWBcbiAgICAvLyBwcmVmaXhlZCBjbGFzc2VzIHdpbGwgYWx3YXlzIGJlIGFkZGVkIGFzIHdlbGwuXG5cblxuICAgIHZhciBuYW1lc3BhY2UgPSBvcHRpb25zW1wibmFtZXNwYWNlXCJdIHx8IG51bGw7IC8vIFdoZXRoZXIgdGhlIFpvb21QYW5lIHNob3VsZCBzaG93IHdoaXRlc3BhY2Ugd2hlbiBuZWFyIHRoZSBlZGdlcy5cblxuICAgIHZhciBzaG93V2hpdGVzcGFjZUF0RWRnZXMgPSBvcHRpb25zW1wic2hvd1doaXRlc3BhY2VBdEVkZ2VzXCJdIHx8IGZhbHNlOyAvLyBXaGV0aGVyIHRoZSBpbmxpbmUgWm9vbVBhbmUgc2hvdWxkIHN0YXkgaW5zaWRlXG4gICAgLy8gdGhlIGJvdW5kcyBvZiBpdHMgaW1hZ2UuXG5cbiAgICB2YXIgY29udGFpbklubGluZSA9IG9wdGlvbnNbXCJjb250YWluSW5saW5lXCJdIHx8IGZhbHNlOyAvLyBIb3cgbXVjaCB0byBvZmZzZXQgdGhlIFpvb21QYW5lIGZyb20gdGhlXG4gICAgLy8gaW50ZXJhY3Rpb24gcG9pbnQgd2hlbiBpbmxpbmUuXG5cbiAgICB2YXIgaW5saW5lT2Zmc2V0WCA9IG9wdGlvbnNbXCJpbmxpbmVPZmZzZXRYXCJdIHx8IDA7XG4gICAgdmFyIGlubGluZU9mZnNldFkgPSBvcHRpb25zW1wiaW5saW5lT2Zmc2V0WVwiXSB8fCAwOyAvLyBBIERPTSBlbGVtZW50IHRvIGFwcGVuZCB0aGUgaW5saW5lIFpvb21QYW5lIHRvXG5cbiAgICB2YXIgaW5saW5lQ29udGFpbmVyID0gb3B0aW9uc1tcImlubGluZUNvbnRhaW5lclwiXSB8fCBkb2N1bWVudC5ib2R5OyAvLyBXaGljaCB0cmlnZ2VyIGF0dHJpYnV0ZSB0byBwdWxsIHRoZSBab29tUGFuZSBpbWFnZSBzb3VyY2UgZnJvbS5cblxuICAgIHZhciBzb3VyY2VBdHRyaWJ1dGUgPSBvcHRpb25zW1wic291cmNlQXR0cmlidXRlXCJdIHx8IFwiZGF0YS16b29tXCI7IC8vIEhvdyBtdWNoIHRvIG1hZ25pZnkgdGhlIHRyaWdnZXIgYnkgaW4gdGhlIFpvb21QYW5lLlxuICAgIC8vIChlLmcuLCBgem9vbUZhY3RvcjogM2Agd2lsbCByZXN1bHQgaW4gYSA5MDAgcHggd2lkZSBab29tUGFuZSBpbWFnXG4gICAgLy8gaWYgdGhlIHRyaWdnZXIgaXMgZGlzcGxheWVkIGF0IDMwMCBweCB3aWRlKVxuXG4gICAgdmFyIHpvb21GYWN0b3IgPSBvcHRpb25zW1wiem9vbUZhY3RvclwiXSB8fCAzOyAvLyBBIERPTSBlbGVtZW50IHRvIGFwcGVuZCB0aGUgbm9uLWlubGluZSBab29tUGFuZSB0by5cbiAgICAvLyBSZXF1aXJlZCBpZiBgaW5saW5lUGFuZSAhPT0gdHJ1ZWAuXG5cbiAgICB2YXIgcGFuZUNvbnRhaW5lciA9IG9wdGlvbnNbXCJwYW5lQ29udGFpbmVyXCJdID09PSB1bmRlZmluZWQgPyBkb2N1bWVudC5ib2R5IDogb3B0aW9uc1tcInBhbmVDb250YWluZXJcIl07IC8vIFdoZW4gdG8gc3dpdGNoIHRvIGFuIGlubGluZSBab29tUGFuZS4gVGhpcyBjYW4gYmUgYSBib29sZWFuIG9yXG4gICAgLy8gYW4gaW50ZWdlci4gSWYgYHRydWVgLCB0aGUgWm9vbVBhbmUgd2lsbCBhbHdheXMgYmUgaW5saW5lLFxuICAgIC8vIGlmIGBmYWxzZWAsIGl0IHdpbGwgc3dpdGNoIHRvIGlubGluZSB3aGVuIGB3aW5kb3dXaWR0aCA8PSBpbmxpbmVQYW5lYFxuXG4gICAgdmFyIGlubGluZVBhbmUgPSBvcHRpb25zW1wiaW5saW5lUGFuZVwiXSB8fCAzNzU7IC8vIElmIGB0cnVlYCwgdG91Y2ggZXZlbnRzIHdpbGwgdHJpZ2dlciB0aGUgem9vbSwgbGlrZSBtb3VzZSBldmVudHMuXG5cbiAgICB2YXIgaGFuZGxlVG91Y2ggPSBcImhhbmRsZVRvdWNoXCIgaW4gb3B0aW9ucyA/ICEhb3B0aW9uc1tcImhhbmRsZVRvdWNoXCJdIDogdHJ1ZTsgLy8gSWYgcHJlc2VudCAoYW5kIGEgZnVuY3Rpb24pLCB0aGlzIHdpbGwgYmUgY2FsbGVkXG4gICAgLy8gd2hlbmV2ZXIgdGhlIFpvb21QYW5lIGlzIHNob3duLlxuXG4gICAgdmFyIG9uU2hvdyA9IG9wdGlvbnNbXCJvblNob3dcIl0gfHwgbnVsbDsgLy8gSWYgcHJlc2VudCAoYW5kIGEgZnVuY3Rpb24pLCB0aGlzIHdpbGwgYmUgY2FsbGVkXG4gICAgLy8gd2hlbmV2ZXIgdGhlIFpvb21QYW5lIGlzIGhpZGRlbi5cblxuICAgIHZhciBvbkhpZGUgPSBvcHRpb25zW1wib25IaWRlXCJdIHx8IG51bGw7IC8vIEFkZCBiYXNlIHN0eWxlcyB0byB0aGUgcGFnZS4gU2VlIHRoZSBcIlRoZW1pbmdcIlxuICAgIC8vIHNlY3Rpb24gb2YgUkVBRE1FLm1kIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuXG4gICAgdmFyIGluamVjdEJhc2VTdHlsZXMgPSBcImluamVjdEJhc2VTdHlsZXNcIiBpbiBvcHRpb25zID8gISFvcHRpb25zW1wiaW5qZWN0QmFzZVN0eWxlc1wiXSA6IHRydWU7IC8vIEFuIG9wdGlvbmFsIG51bWJlciB0aGF0IGRldGVybWluZXMgaG93IGxvbmcgdG8gd2FpdCBiZWZvcmVcbiAgICAvLyBzaG93aW5nIHRoZSBab29tUGFuZSBiZWNhdXNlIG9mIGEgYG1vdXNlZW50ZXJgIGV2ZW50LlxuXG4gICAgdmFyIGhvdmVyRGVsYXkgPSBvcHRpb25zW1wiaG92ZXJEZWxheVwiXSB8fCAwOyAvLyBBbiBvcHRpb25hbCBudW1iZXIgdGhhdCBkZXRlcm1pbmVzIGhvdyBsb25nIHRvIHdhaXQgYmVmb3JlXG4gICAgLy8gc2hvd2luZyB0aGUgWm9vbVBhbmUgYmVjYXVzZSBvZiBhIGB0b3VjaHN0YXJ0YCBldmVudC5cbiAgICAvLyBJdCdzIHVubGlrZWx5IHRoYXQgeW91IHdvdWxkIHdhbnQgdG8gdXNlIHRoaXMgb3B0aW9uLCBzaW5jZVxuICAgIC8vIFwidGFwIGFuZCBob2xkXCIgaXMgbXVjaCBtb3JlIGludGVudGlvbmFsIHRoYW4gYSBob3ZlciBldmVudC5cblxuICAgIHZhciB0b3VjaERlbGF5ID0gb3B0aW9uc1tcInRvdWNoRGVsYXlcIl0gfHwgMDsgLy8gSWYgdHJ1ZSwgYSBib3VuZGluZyBib3ggd2lsbCBzaG93IHRoZSBhcmVhIGN1cnJlbnRseSBiZWluZyBwcmV2aWV3ZWRcbiAgICAvLyBkdXJpbmcgbW91c2UgaG92ZXJcblxuICAgIHZhciBob3ZlckJvdW5kaW5nQm94ID0gb3B0aW9uc1tcImhvdmVyQm91bmRpbmdCb3hcIl0gfHwgZmFsc2U7IC8vIElmIHRydWUsIGEgYm91bmRpbmcgYm94IHdpbGwgc2hvdyB0aGUgYXJlYSBjdXJyZW50bHkgYmVpbmcgcHJldmlld2VkXG4gICAgLy8gZHVyaW5nIHRvdWNoIGV2ZW50c1xuXG4gICAgdmFyIHRvdWNoQm91bmRpbmdCb3ggPSBvcHRpb25zW1widG91Y2hCb3VuZGluZ0JveFwiXSB8fCBmYWxzZTsgLy8gQSBET00gZWxlbWVudCB0byBhcHBlbmQgdGhlIGJvdW5kaW5nIGJveCB0by5cblxuICAgIHZhciBib3VuZGluZ0JveENvbnRhaW5lciA9IG9wdGlvbnNbXCJib3VuZGluZ0JveENvbnRhaW5lclwiXSB8fCBkb2N1bWVudC5ib2R5OyAvLyBJZiB0cnVlLCB0aGUgZXZlbnRzIHJlbGF0ZWQgdG8gaGFuZGxlVG91Y2ggdXNlIHBhc3NpdmUgbGlzdGVuZXJzIGluXG4gICAgLy8gb3JkZXIgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZSBmb3IgdG91Y2ggZGV2aWNlcy5cblxuICAgIHZhciBwYXNzaXZlID0gb3B0aW9uc1tcInBhc3NpdmVcIl0gfHwgZmFsc2U7XG5cbiAgICBpZiAoaW5saW5lUGFuZSAhPT0gdHJ1ZSAmJiAhaXNET01FbGVtZW50KHBhbmVDb250YWluZXIpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYHBhbmVDb250YWluZXJgIG11c3QgYmUgYSBET00gZWxlbWVudCB3aGVuIGBpbmxpbmVQYW5lICE9PSB0cnVlYFwiKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzRE9NRWxlbWVudChpbmxpbmVDb250YWluZXIpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYGlubGluZUNvbnRhaW5lcmAgbXVzdCBiZSBhIERPTSBlbGVtZW50XCIpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0dGluZ3MgPSB7XG4gICAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZSxcbiAgICAgIHNob3dXaGl0ZXNwYWNlQXRFZGdlczogc2hvd1doaXRlc3BhY2VBdEVkZ2VzLFxuICAgICAgY29udGFpbklubGluZTogY29udGFpbklubGluZSxcbiAgICAgIGlubGluZU9mZnNldFg6IGlubGluZU9mZnNldFgsXG4gICAgICBpbmxpbmVPZmZzZXRZOiBpbmxpbmVPZmZzZXRZLFxuICAgICAgaW5saW5lQ29udGFpbmVyOiBpbmxpbmVDb250YWluZXIsXG4gICAgICBzb3VyY2VBdHRyaWJ1dGU6IHNvdXJjZUF0dHJpYnV0ZSxcbiAgICAgIHpvb21GYWN0b3I6IHpvb21GYWN0b3IsXG4gICAgICBwYW5lQ29udGFpbmVyOiBwYW5lQ29udGFpbmVyLFxuICAgICAgaW5saW5lUGFuZTogaW5saW5lUGFuZSxcbiAgICAgIGhhbmRsZVRvdWNoOiBoYW5kbGVUb3VjaCxcbiAgICAgIG9uU2hvdzogb25TaG93LFxuICAgICAgb25IaWRlOiBvbkhpZGUsXG4gICAgICBpbmplY3RCYXNlU3R5bGVzOiBpbmplY3RCYXNlU3R5bGVzLFxuICAgICAgaG92ZXJEZWxheTogaG92ZXJEZWxheSxcbiAgICAgIHRvdWNoRGVsYXk6IHRvdWNoRGVsYXksXG4gICAgICBob3ZlckJvdW5kaW5nQm94OiBob3ZlckJvdW5kaW5nQm94LFxuICAgICAgdG91Y2hCb3VuZGluZ0JveDogdG91Y2hCb3VuZGluZ0JveCxcbiAgICAgIGJvdW5kaW5nQm94Q29udGFpbmVyOiBib3VuZGluZ0JveENvbnRhaW5lcixcbiAgICAgIHBhc3NpdmU6IHBhc3NpdmVcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuaW5qZWN0QmFzZVN0eWxlcykge1xuICAgICAgaW5qZWN0QmFzZVN0eWxlc2hlZXQoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9idWlsZFpvb21QYW5lKCk7XG5cbiAgICB0aGlzLl9idWlsZFRyaWdnZXIoKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEcmlmdCwgW3tcbiAgICBrZXk6IFwiX2J1aWxkWm9vbVBhbmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2J1aWxkWm9vbVBhbmUoKSB7XG4gICAgICB0aGlzLnpvb21QYW5lID0gbmV3IFpvb21QYW5lKHtcbiAgICAgICAgY29udGFpbmVyOiB0aGlzLnNldHRpbmdzLnBhbmVDb250YWluZXIsXG4gICAgICAgIHpvb21GYWN0b3I6IHRoaXMuc2V0dGluZ3Muem9vbUZhY3RvcixcbiAgICAgICAgc2hvd1doaXRlc3BhY2VBdEVkZ2VzOiB0aGlzLnNldHRpbmdzLnNob3dXaGl0ZXNwYWNlQXRFZGdlcyxcbiAgICAgICAgY29udGFpbklubGluZTogdGhpcy5zZXR0aW5ncy5jb250YWluSW5saW5lLFxuICAgICAgICBpbmxpbmU6IHRoaXMuc2V0dGluZ3MuaW5saW5lUGFuZSxcbiAgICAgICAgbmFtZXNwYWNlOiB0aGlzLnNldHRpbmdzLm5hbWVzcGFjZSxcbiAgICAgICAgaW5saW5lT2Zmc2V0WDogdGhpcy5zZXR0aW5ncy5pbmxpbmVPZmZzZXRYLFxuICAgICAgICBpbmxpbmVPZmZzZXRZOiB0aGlzLnNldHRpbmdzLmlubGluZU9mZnNldFksXG4gICAgICAgIGlubGluZUNvbnRhaW5lcjogdGhpcy5zZXR0aW5ncy5pbmxpbmVDb250YWluZXJcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfYnVpbGRUcmlnZ2VyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9idWlsZFRyaWdnZXIoKSB7XG4gICAgICB0aGlzLnRyaWdnZXIgPSBuZXcgVHJpZ2dlcih7XG4gICAgICAgIGVsOiB0aGlzLnRyaWdnZXJFbCxcbiAgICAgICAgem9vbVBhbmU6IHRoaXMuem9vbVBhbmUsXG4gICAgICAgIGhhbmRsZVRvdWNoOiB0aGlzLnNldHRpbmdzLmhhbmRsZVRvdWNoLFxuICAgICAgICBvblNob3c6IHRoaXMuc2V0dGluZ3Mub25TaG93LFxuICAgICAgICBvbkhpZGU6IHRoaXMuc2V0dGluZ3Mub25IaWRlLFxuICAgICAgICBzb3VyY2VBdHRyaWJ1dGU6IHRoaXMuc2V0dGluZ3Muc291cmNlQXR0cmlidXRlLFxuICAgICAgICBob3ZlckRlbGF5OiB0aGlzLnNldHRpbmdzLmhvdmVyRGVsYXksXG4gICAgICAgIHRvdWNoRGVsYXk6IHRoaXMuc2V0dGluZ3MudG91Y2hEZWxheSxcbiAgICAgICAgaG92ZXJCb3VuZGluZ0JveDogdGhpcy5zZXR0aW5ncy5ob3ZlckJvdW5kaW5nQm94LFxuICAgICAgICB0b3VjaEJvdW5kaW5nQm94OiB0aGlzLnNldHRpbmdzLnRvdWNoQm91bmRpbmdCb3gsXG4gICAgICAgIG5hbWVzcGFjZTogdGhpcy5zZXR0aW5ncy5uYW1lc3BhY2UsXG4gICAgICAgIHpvb21GYWN0b3I6IHRoaXMuc2V0dGluZ3Muem9vbUZhY3RvcixcbiAgICAgICAgYm91bmRpbmdCb3hDb250YWluZXI6IHRoaXMuc2V0dGluZ3MuYm91bmRpbmdCb3hDb250YWluZXIsXG4gICAgICAgIHBhc3NpdmU6IHRoaXMuc2V0dGluZ3MucGFzc2l2ZVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFpvb21JbWFnZVVSTFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRab29tSW1hZ2VVUkwoaW1hZ2VVUkwpIHtcbiAgICAgIHRoaXMuem9vbVBhbmUuX3NldEltYWdlVVJMKGltYWdlVVJMKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGlzYWJsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgdGhpcy50cmlnZ2VyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZW5hYmxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICAgIHRoaXMudHJpZ2dlci5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdGhpcy50cmlnZ2VyLl9oaWRlKCk7XG5cbiAgICAgIHRoaXMudHJpZ2dlci5fdW5iaW5kRXZlbnRzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzU2hvd2luZ1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuem9vbVBhbmUuaXNTaG93aW5nO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ6b29tRmFjdG9yXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy56b29tRmFjdG9yO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoemYpIHtcbiAgICAgIHRoaXMuc2V0dGluZ3Muem9vbUZhY3RvciA9IHpmO1xuICAgICAgdGhpcy56b29tUGFuZS5zZXR0aW5ncy56b29tRmFjdG9yID0gemY7XG4gICAgICB0aGlzLnRyaWdnZXIuc2V0dGluZ3Muem9vbUZhY3RvciA9IHpmO1xuICAgICAgdGhpcy5ib3VuZGluZ0JveC5zZXR0aW5ncy56b29tRmFjdG9yID0gemY7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERyaWZ0O1xufSgpOyAvLyBQdWJsaWMgQVBJXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtYXNzaWduICovXG5cblxuZXhwb3J0IHsgRHJpZnQgYXMgZGVmYXVsdCB9O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KERyaWZ0LnByb3RvdHlwZSwgXCJpc1Nob3dpbmdcIiwge1xuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1Nob3dpbmc7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KERyaWZ0LnByb3RvdHlwZSwgXCJ6b29tRmFjdG9yXCIsIHtcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuem9vbUZhY3RvcjtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICB0aGlzLnpvb21GYWN0b3IgPSB2YWx1ZTtcbiAgfVxufSk7XG5EcmlmdC5wcm90b3R5cGVbXCJzZXRab29tSW1hZ2VVUkxcIl0gPSBEcmlmdC5wcm90b3R5cGUuc2V0Wm9vbUltYWdlVVJMO1xuRHJpZnQucHJvdG90eXBlW1wiZGlzYWJsZVwiXSA9IERyaWZ0LnByb3RvdHlwZS5kaXNhYmxlO1xuRHJpZnQucHJvdG90eXBlW1wiZW5hYmxlXCJdID0gRHJpZnQucHJvdG90eXBlLmVuYWJsZTtcbkRyaWZ0LnByb3RvdHlwZVtcImRlc3Ryb3lcIl0gPSBEcmlmdC5wcm90b3R5cGUuZGVzdHJveTtcbi8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gKi9cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPURyaWZ0LmpzLm1hcCIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuaW1wb3J0IHRocm93SWZNaXNzaW5nIGZyb20gXCIuL3V0aWwvdGhyb3dJZk1pc3NpbmdcIjtcbmltcG9ydCBCb3VuZGluZ0JveCBmcm9tIFwiLi9Cb3VuZGluZ0JveFwiO1xuXG52YXIgVHJpZ2dlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFRyaWdnZXIoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyaWdnZXIpO1xuXG4gICAgdGhpcy5fc2hvdyA9IHRoaXMuX3Nob3cuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oaWRlID0gdGhpcy5faGlkZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZUVudHJ5ID0gdGhpcy5faGFuZGxlRW50cnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVNb3ZlbWVudCA9IHRoaXMuX2hhbmRsZU1vdmVtZW50LmJpbmQodGhpcyk7XG4gICAgdmFyIF9vcHRpb25zJGVsID0gb3B0aW9ucy5lbCxcbiAgICAgICAgZWwgPSBfb3B0aW9ucyRlbCA9PT0gdm9pZCAwID8gdGhyb3dJZk1pc3NpbmcoKSA6IF9vcHRpb25zJGVsLFxuICAgICAgICBfb3B0aW9ucyR6b29tUGFuZSA9IG9wdGlvbnMuem9vbVBhbmUsXG4gICAgICAgIHpvb21QYW5lID0gX29wdGlvbnMkem9vbVBhbmUgPT09IHZvaWQgMCA/IHRocm93SWZNaXNzaW5nKCkgOiBfb3B0aW9ucyR6b29tUGFuZSxcbiAgICAgICAgX29wdGlvbnMkc291cmNlQXR0cmliID0gb3B0aW9ucy5zb3VyY2VBdHRyaWJ1dGUsXG4gICAgICAgIHNvdXJjZUF0dHJpYnV0ZSA9IF9vcHRpb25zJHNvdXJjZUF0dHJpYiA9PT0gdm9pZCAwID8gdGhyb3dJZk1pc3NpbmcoKSA6IF9vcHRpb25zJHNvdXJjZUF0dHJpYixcbiAgICAgICAgX29wdGlvbnMkaGFuZGxlVG91Y2ggPSBvcHRpb25zLmhhbmRsZVRvdWNoLFxuICAgICAgICBoYW5kbGVUb3VjaCA9IF9vcHRpb25zJGhhbmRsZVRvdWNoID09PSB2b2lkIDAgPyB0aHJvd0lmTWlzc2luZygpIDogX29wdGlvbnMkaGFuZGxlVG91Y2gsXG4gICAgICAgIF9vcHRpb25zJG9uU2hvdyA9IG9wdGlvbnMub25TaG93LFxuICAgICAgICBvblNob3cgPSBfb3B0aW9ucyRvblNob3cgPT09IHZvaWQgMCA/IG51bGwgOiBfb3B0aW9ucyRvblNob3csXG4gICAgICAgIF9vcHRpb25zJG9uSGlkZSA9IG9wdGlvbnMub25IaWRlLFxuICAgICAgICBvbkhpZGUgPSBfb3B0aW9ucyRvbkhpZGUgPT09IHZvaWQgMCA/IG51bGwgOiBfb3B0aW9ucyRvbkhpZGUsXG4gICAgICAgIF9vcHRpb25zJGhvdmVyRGVsYXkgPSBvcHRpb25zLmhvdmVyRGVsYXksXG4gICAgICAgIGhvdmVyRGVsYXkgPSBfb3B0aW9ucyRob3ZlckRlbGF5ID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkaG92ZXJEZWxheSxcbiAgICAgICAgX29wdGlvbnMkdG91Y2hEZWxheSA9IG9wdGlvbnMudG91Y2hEZWxheSxcbiAgICAgICAgdG91Y2hEZWxheSA9IF9vcHRpb25zJHRvdWNoRGVsYXkgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyR0b3VjaERlbGF5LFxuICAgICAgICBfb3B0aW9ucyRob3ZlckJvdW5kaW4gPSBvcHRpb25zLmhvdmVyQm91bmRpbmdCb3gsXG4gICAgICAgIGhvdmVyQm91bmRpbmdCb3ggPSBfb3B0aW9ucyRob3ZlckJvdW5kaW4gPT09IHZvaWQgMCA/IHRocm93SWZNaXNzaW5nKCkgOiBfb3B0aW9ucyRob3ZlckJvdW5kaW4sXG4gICAgICAgIF9vcHRpb25zJHRvdWNoQm91bmRpbiA9IG9wdGlvbnMudG91Y2hCb3VuZGluZ0JveCxcbiAgICAgICAgdG91Y2hCb3VuZGluZ0JveCA9IF9vcHRpb25zJHRvdWNoQm91bmRpbiA9PT0gdm9pZCAwID8gdGhyb3dJZk1pc3NpbmcoKSA6IF9vcHRpb25zJHRvdWNoQm91bmRpbixcbiAgICAgICAgX29wdGlvbnMkbmFtZXNwYWNlID0gb3B0aW9ucy5uYW1lc3BhY2UsXG4gICAgICAgIG5hbWVzcGFjZSA9IF9vcHRpb25zJG5hbWVzcGFjZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9vcHRpb25zJG5hbWVzcGFjZSxcbiAgICAgICAgX29wdGlvbnMkem9vbUZhY3RvciA9IG9wdGlvbnMuem9vbUZhY3RvcixcbiAgICAgICAgem9vbUZhY3RvciA9IF9vcHRpb25zJHpvb21GYWN0b3IgPT09IHZvaWQgMCA/IHRocm93SWZNaXNzaW5nKCkgOiBfb3B0aW9ucyR6b29tRmFjdG9yLFxuICAgICAgICBfb3B0aW9ucyRib3VuZGluZ0JveEMgPSBvcHRpb25zLmJvdW5kaW5nQm94Q29udGFpbmVyLFxuICAgICAgICBib3VuZGluZ0JveENvbnRhaW5lciA9IF9vcHRpb25zJGJvdW5kaW5nQm94QyA9PT0gdm9pZCAwID8gdGhyb3dJZk1pc3NpbmcoKSA6IF9vcHRpb25zJGJvdW5kaW5nQm94QyxcbiAgICAgICAgX29wdGlvbnMkcGFzc2l2ZSA9IG9wdGlvbnMucGFzc2l2ZSxcbiAgICAgICAgcGFzc2l2ZSA9IF9vcHRpb25zJHBhc3NpdmUgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkcGFzc2l2ZTtcbiAgICB0aGlzLnNldHRpbmdzID0ge1xuICAgICAgZWw6IGVsLFxuICAgICAgem9vbVBhbmU6IHpvb21QYW5lLFxuICAgICAgc291cmNlQXR0cmlidXRlOiBzb3VyY2VBdHRyaWJ1dGUsXG4gICAgICBoYW5kbGVUb3VjaDogaGFuZGxlVG91Y2gsXG4gICAgICBvblNob3c6IG9uU2hvdyxcbiAgICAgIG9uSGlkZTogb25IaWRlLFxuICAgICAgaG92ZXJEZWxheTogaG92ZXJEZWxheSxcbiAgICAgIHRvdWNoRGVsYXk6IHRvdWNoRGVsYXksXG4gICAgICBob3ZlckJvdW5kaW5nQm94OiBob3ZlckJvdW5kaW5nQm94LFxuICAgICAgdG91Y2hCb3VuZGluZ0JveDogdG91Y2hCb3VuZGluZ0JveCxcbiAgICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlLFxuICAgICAgem9vbUZhY3Rvcjogem9vbUZhY3RvcixcbiAgICAgIGJvdW5kaW5nQm94Q29udGFpbmVyOiBib3VuZGluZ0JveENvbnRhaW5lcixcbiAgICAgIHBhc3NpdmU6IHBhc3NpdmVcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuaG92ZXJCb3VuZGluZ0JveCB8fCB0aGlzLnNldHRpbmdzLnRvdWNoQm91bmRpbmdCb3gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmdCb3ggPSBuZXcgQm91bmRpbmdCb3goe1xuICAgICAgICBuYW1lc3BhY2U6IHRoaXMuc2V0dGluZ3MubmFtZXNwYWNlLFxuICAgICAgICB6b29tRmFjdG9yOiB0aGlzLnNldHRpbmdzLnpvb21GYWN0b3IsXG4gICAgICAgIGNvbnRhaW5lckVsOiB0aGlzLnNldHRpbmdzLmJvdW5kaW5nQm94Q29udGFpbmVyXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5fYmluZEV2ZW50cygpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRyaWdnZXIsIFt7XG4gICAga2V5OiBcIl9wcmV2ZW50RGVmYXVsdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcHJldmVudERlZmF1bHQoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9wcmV2ZW50RGVmYXVsdEFsbG93VG91Y2hTY3JvbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3ByZXZlbnREZWZhdWx0QWxsb3dUb3VjaFNjcm9sbChldmVudCkge1xuICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLnRvdWNoRGVsYXkgfHwgIXRoaXMuX2lzVG91Y2hFdmVudChldmVudCkgfHwgdGhpcy5pc1Nob3dpbmcpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2lzVG91Y2hFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaXNUb3VjaEV2ZW50KGV2ZW50KSB7XG4gICAgICByZXR1cm4gISFldmVudC50b3VjaGVzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfYmluZEV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYmluZEV2ZW50cygpIHtcbiAgICAgIHRoaXMuc2V0dGluZ3MuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy5faGFuZGxlRW50cnkpO1xuICAgICAgdGhpcy5zZXR0aW5ncy5lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLl9oaWRlKTtcbiAgICAgIHRoaXMuc2V0dGluZ3MuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLl9oYW5kbGVNb3ZlbWVudCk7XG4gICAgICB2YXIgaXNQYXNzaXZlID0ge1xuICAgICAgICBwYXNzaXZlOiB0aGlzLnNldHRpbmdzLnBhc3NpdmVcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLmhhbmRsZVRvdWNoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5faGFuZGxlRW50cnksIGlzUGFzc2l2ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuX2hpZGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5faGFuZGxlTW92ZW1lbnQsIGlzUGFzc2l2ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuX3ByZXZlbnREZWZhdWx0LCBpc1Bhc3NpdmUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLl9wcmV2ZW50RGVmYXVsdCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLl9wcmV2ZW50RGVmYXVsdCwgaXNQYXNzaXZlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3VuYmluZEV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5iaW5kRXZlbnRzKCkge1xuICAgICAgdGhpcy5zZXR0aW5ncy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCB0aGlzLl9oYW5kbGVFbnRyeSk7XG4gICAgICB0aGlzLnNldHRpbmdzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMuX2hpZGUpO1xuICAgICAgdGhpcy5zZXR0aW5ncy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuX2hhbmRsZU1vdmVtZW50KTtcblxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuaGFuZGxlVG91Y2gpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLl9oYW5kbGVFbnRyeSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuX2hpZGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5faGFuZGxlTW92ZW1lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLl9wcmV2ZW50RGVmYXVsdCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuX3ByZXZlbnREZWZhdWx0KTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMuX3ByZXZlbnREZWZhdWx0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2hhbmRsZUVudHJ5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVFbnRyeShlKSB7XG4gICAgICB0aGlzLl9wcmV2ZW50RGVmYXVsdEFsbG93VG91Y2hTY3JvbGwoZSk7XG5cbiAgICAgIHRoaXMuX2xhc3RNb3ZlbWVudCA9IGU7XG5cbiAgICAgIGlmIChlLnR5cGUgPT0gXCJtb3VzZWVudGVyXCIgJiYgdGhpcy5zZXR0aW5ncy5ob3ZlckRlbGF5KSB7XG4gICAgICAgIHRoaXMuZW50cnlUaW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLl9zaG93LCB0aGlzLnNldHRpbmdzLmhvdmVyRGVsYXkpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNldHRpbmdzLnRvdWNoRGVsYXkpIHtcbiAgICAgICAgdGhpcy5lbnRyeVRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuX3Nob3csIHRoaXMuc2V0dGluZ3MudG91Y2hEZWxheSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zaG93KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9zaG93XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zaG93KCkge1xuICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgb25TaG93ID0gdGhpcy5zZXR0aW5ncy5vblNob3c7XG5cbiAgICAgIGlmIChvblNob3cgJiYgdHlwZW9mIG9uU2hvdyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIG9uU2hvdygpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldHRpbmdzLnpvb21QYW5lLnNob3codGhpcy5zZXR0aW5ncy5lbC5nZXRBdHRyaWJ1dGUodGhpcy5zZXR0aW5ncy5zb3VyY2VBdHRyaWJ1dGUpLCB0aGlzLnNldHRpbmdzLmVsLmNsaWVudFdpZHRoLCB0aGlzLnNldHRpbmdzLmVsLmNsaWVudEhlaWdodCk7XG5cbiAgICAgIGlmICh0aGlzLl9sYXN0TW92ZW1lbnQpIHtcbiAgICAgICAgdmFyIHRvdWNoQWN0aXZhdGVkID0gdGhpcy5fbGFzdE1vdmVtZW50LnRvdWNoZXM7XG5cbiAgICAgICAgaWYgKHRvdWNoQWN0aXZhdGVkICYmIHRoaXMuc2V0dGluZ3MudG91Y2hCb3VuZGluZ0JveCB8fCAhdG91Y2hBY3RpdmF0ZWQgJiYgdGhpcy5zZXR0aW5ncy5ob3ZlckJvdW5kaW5nQm94KSB7XG4gICAgICAgICAgdGhpcy5ib3VuZGluZ0JveC5zaG93KHRoaXMuc2V0dGluZ3Muem9vbVBhbmUuZWwuY2xpZW50V2lkdGgsIHRoaXMuc2V0dGluZ3Muem9vbVBhbmUuZWwuY2xpZW50SGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9oYW5kbGVNb3ZlbWVudCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfaGlkZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaGlkZShlKSB7XG4gICAgICBpZiAoZSkge1xuICAgICAgICB0aGlzLl9wcmV2ZW50RGVmYXVsdEFsbG93VG91Y2hTY3JvbGwoZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2xhc3RNb3ZlbWVudCA9IG51bGw7XG5cbiAgICAgIGlmICh0aGlzLmVudHJ5VGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5lbnRyeVRpbWVvdXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5ib3VuZGluZ0JveCkge1xuICAgICAgICB0aGlzLmJvdW5kaW5nQm94LmhpZGUoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG9uSGlkZSA9IHRoaXMuc2V0dGluZ3Mub25IaWRlO1xuXG4gICAgICBpZiAob25IaWRlICYmIHR5cGVvZiBvbkhpZGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBvbkhpZGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXR0aW5ncy56b29tUGFuZS5oaWRlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9oYW5kbGVNb3ZlbWVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlTW92ZW1lbnQoZSkge1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgdGhpcy5fcHJldmVudERlZmF1bHRBbGxvd1RvdWNoU2Nyb2xsKGUpO1xuXG4gICAgICAgIHRoaXMuX2xhc3RNb3ZlbWVudCA9IGU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2xhc3RNb3ZlbWVudCkge1xuICAgICAgICBlID0gdGhpcy5fbGFzdE1vdmVtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbW92ZW1lbnRYO1xuICAgICAgdmFyIG1vdmVtZW50WTtcblxuICAgICAgaWYgKGUudG91Y2hlcykge1xuICAgICAgICB2YXIgZmlyc3RUb3VjaCA9IGUudG91Y2hlc1swXTtcbiAgICAgICAgbW92ZW1lbnRYID0gZmlyc3RUb3VjaC5jbGllbnRYO1xuICAgICAgICBtb3ZlbWVudFkgPSBmaXJzdFRvdWNoLmNsaWVudFk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb3ZlbWVudFggPSBlLmNsaWVudFg7XG4gICAgICAgIG1vdmVtZW50WSA9IGUuY2xpZW50WTtcbiAgICAgIH1cblxuICAgICAgdmFyIGVsID0gdGhpcy5zZXR0aW5ncy5lbDtcbiAgICAgIHZhciByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgb2Zmc2V0WCA9IG1vdmVtZW50WCAtIHJlY3QubGVmdDtcbiAgICAgIHZhciBvZmZzZXRZID0gbW92ZW1lbnRZIC0gcmVjdC50b3A7XG4gICAgICB2YXIgcGVyY2VudGFnZU9mZnNldFggPSBvZmZzZXRYIC8gdGhpcy5zZXR0aW5ncy5lbC5jbGllbnRXaWR0aDtcbiAgICAgIHZhciBwZXJjZW50YWdlT2Zmc2V0WSA9IG9mZnNldFkgLyB0aGlzLnNldHRpbmdzLmVsLmNsaWVudEhlaWdodDtcblxuICAgICAgaWYgKHRoaXMuYm91bmRpbmdCb3gpIHtcbiAgICAgICAgdGhpcy5ib3VuZGluZ0JveC5zZXRQb3NpdGlvbihwZXJjZW50YWdlT2Zmc2V0WCwgcGVyY2VudGFnZU9mZnNldFksIHJlY3QpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldHRpbmdzLnpvb21QYW5lLnNldFBvc2l0aW9uKHBlcmNlbnRhZ2VPZmZzZXRYLCBwZXJjZW50YWdlT2Zmc2V0WSwgcmVjdCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzU2hvd2luZ1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3Muem9vbVBhbmUuaXNTaG93aW5nO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUcmlnZ2VyO1xufSgpO1xuXG5leHBvcnQgeyBUcmlnZ2VyIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRyaWdnZXIuanMubWFwIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5pbXBvcnQgdGhyb3dJZk1pc3NpbmcgZnJvbSBcIi4vdXRpbC90aHJvd0lmTWlzc2luZ1wiO1xuaW1wb3J0IHsgYWRkQ2xhc3NlcywgcmVtb3ZlQ2xhc3NlcyB9IGZyb20gXCIuL3V0aWwvZG9tXCI7XG5cbnZhciBab29tUGFuZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFpvb21QYW5lKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBab29tUGFuZSk7XG5cbiAgICAvLyBBbGwgb2ZmaWNpYWxseS1zdXBwb3J0ZWQgYnJvd3NlcnMgaGF2ZSB0aGlzLCBidXQgaXQncyBlYXN5IHRvXG4gICAgLy8gYWNjb3VudCBmb3IsIGp1c3QgaW4gY2FzZS5cbiAgICB0aGlzLkhBU19BTklNQVRJT04gPSBmYWxzZTtcblxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHZhciBkaXZTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGU7XG4gICAgICB0aGlzLkhBU19BTklNQVRJT04gPSBcImFuaW1hdGlvblwiIGluIGRpdlN0eWxlIHx8IFwid2Via2l0QW5pbWF0aW9uXCIgaW4gZGl2U3R5bGU7XG4gICAgfVxuXG4gICAgdGhpcy5fY29tcGxldGVTaG93ID0gdGhpcy5fY29tcGxldGVTaG93LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fY29tcGxldGVIaWRlID0gdGhpcy5fY29tcGxldGVIaWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5faGFuZGxlTG9hZCA9IHRoaXMuX2hhbmRsZUxvYWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmlzU2hvd2luZyA9IGZhbHNlO1xuICAgIHZhciBfb3B0aW9ucyRjb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lcixcbiAgICAgICAgY29udGFpbmVyID0gX29wdGlvbnMkY29udGFpbmVyID09PSB2b2lkIDAgPyBudWxsIDogX29wdGlvbnMkY29udGFpbmVyLFxuICAgICAgICBfb3B0aW9ucyR6b29tRmFjdG9yID0gb3B0aW9ucy56b29tRmFjdG9yLFxuICAgICAgICB6b29tRmFjdG9yID0gX29wdGlvbnMkem9vbUZhY3RvciA9PT0gdm9pZCAwID8gdGhyb3dJZk1pc3NpbmcoKSA6IF9vcHRpb25zJHpvb21GYWN0b3IsXG4gICAgICAgIF9vcHRpb25zJGlubGluZSA9IG9wdGlvbnMuaW5saW5lLFxuICAgICAgICBpbmxpbmUgPSBfb3B0aW9ucyRpbmxpbmUgPT09IHZvaWQgMCA/IHRocm93SWZNaXNzaW5nKCkgOiBfb3B0aW9ucyRpbmxpbmUsXG4gICAgICAgIF9vcHRpb25zJG5hbWVzcGFjZSA9IG9wdGlvbnMubmFtZXNwYWNlLFxuICAgICAgICBuYW1lc3BhY2UgPSBfb3B0aW9ucyRuYW1lc3BhY2UgPT09IHZvaWQgMCA/IG51bGwgOiBfb3B0aW9ucyRuYW1lc3BhY2UsXG4gICAgICAgIF9vcHRpb25zJHNob3dXaGl0ZXNwYSA9IG9wdGlvbnMuc2hvd1doaXRlc3BhY2VBdEVkZ2VzLFxuICAgICAgICBzaG93V2hpdGVzcGFjZUF0RWRnZXMgPSBfb3B0aW9ucyRzaG93V2hpdGVzcGEgPT09IHZvaWQgMCA/IHRocm93SWZNaXNzaW5nKCkgOiBfb3B0aW9ucyRzaG93V2hpdGVzcGEsXG4gICAgICAgIF9vcHRpb25zJGNvbnRhaW5JbmxpbiA9IG9wdGlvbnMuY29udGFpbklubGluZSxcbiAgICAgICAgY29udGFpbklubGluZSA9IF9vcHRpb25zJGNvbnRhaW5JbmxpbiA9PT0gdm9pZCAwID8gdGhyb3dJZk1pc3NpbmcoKSA6IF9vcHRpb25zJGNvbnRhaW5JbmxpbixcbiAgICAgICAgX29wdGlvbnMkaW5saW5lT2Zmc2V0ID0gb3B0aW9ucy5pbmxpbmVPZmZzZXRYLFxuICAgICAgICBpbmxpbmVPZmZzZXRYID0gX29wdGlvbnMkaW5saW5lT2Zmc2V0ID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkaW5saW5lT2Zmc2V0LFxuICAgICAgICBfb3B0aW9ucyRpbmxpbmVPZmZzZXQyID0gb3B0aW9ucy5pbmxpbmVPZmZzZXRZLFxuICAgICAgICBpbmxpbmVPZmZzZXRZID0gX29wdGlvbnMkaW5saW5lT2Zmc2V0MiA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJGlubGluZU9mZnNldDIsXG4gICAgICAgIF9vcHRpb25zJGlubGluZUNvbnRhaSA9IG9wdGlvbnMuaW5saW5lQ29udGFpbmVyLFxuICAgICAgICBpbmxpbmVDb250YWluZXIgPSBfb3B0aW9ucyRpbmxpbmVDb250YWkgPT09IHZvaWQgMCA/IGRvY3VtZW50LmJvZHkgOiBfb3B0aW9ucyRpbmxpbmVDb250YWk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgem9vbUZhY3Rvcjogem9vbUZhY3RvcixcbiAgICAgIGlubGluZTogaW5saW5lLFxuICAgICAgbmFtZXNwYWNlOiBuYW1lc3BhY2UsXG4gICAgICBzaG93V2hpdGVzcGFjZUF0RWRnZXM6IHNob3dXaGl0ZXNwYWNlQXRFZGdlcyxcbiAgICAgIGNvbnRhaW5JbmxpbmU6IGNvbnRhaW5JbmxpbmUsXG4gICAgICBpbmxpbmVPZmZzZXRYOiBpbmxpbmVPZmZzZXRYLFxuICAgICAgaW5saW5lT2Zmc2V0WTogaW5saW5lT2Zmc2V0WSxcbiAgICAgIGlubGluZUNvbnRhaW5lcjogaW5saW5lQ29udGFpbmVyXG4gICAgfTtcbiAgICB0aGlzLm9wZW5DbGFzc2VzID0gdGhpcy5fYnVpbGRDbGFzc2VzKFwib3BlblwiKTtcbiAgICB0aGlzLm9wZW5pbmdDbGFzc2VzID0gdGhpcy5fYnVpbGRDbGFzc2VzKFwib3BlbmluZ1wiKTtcbiAgICB0aGlzLmNsb3NpbmdDbGFzc2VzID0gdGhpcy5fYnVpbGRDbGFzc2VzKFwiY2xvc2luZ1wiKTtcbiAgICB0aGlzLmlubGluZUNsYXNzZXMgPSB0aGlzLl9idWlsZENsYXNzZXMoXCJpbmxpbmVcIik7XG4gICAgdGhpcy5sb2FkaW5nQ2xhc3NlcyA9IHRoaXMuX2J1aWxkQ2xhc3NlcyhcImxvYWRpbmdcIik7XG5cbiAgICB0aGlzLl9idWlsZEVsZW1lbnQoKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhab29tUGFuZSwgW3tcbiAgICBrZXk6IFwiX2J1aWxkQ2xhc3Nlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYnVpbGRDbGFzc2VzKHN1ZmZpeCkge1xuICAgICAgdmFyIGNsYXNzZXMgPSBbXCJkcmlmdC1cIi5jb25jYXQoc3VmZml4KV07XG4gICAgICB2YXIgbnMgPSB0aGlzLnNldHRpbmdzLm5hbWVzcGFjZTtcblxuICAgICAgaWYgKG5zKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaChcIlwiLmNvbmNhdChucywgXCItXCIpLmNvbmNhdChzdWZmaXgpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9idWlsZEVsZW1lbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2J1aWxkRWxlbWVudCgpIHtcbiAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYWRkQ2xhc3Nlcyh0aGlzLmVsLCB0aGlzLl9idWlsZENsYXNzZXMoXCJ6b29tLXBhbmVcIikpO1xuICAgICAgdmFyIGxvYWRlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGFkZENsYXNzZXMobG9hZGVyRWwsIHRoaXMuX2J1aWxkQ2xhc3NlcyhcInpvb20tcGFuZS1sb2FkZXJcIikpO1xuICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChsb2FkZXJFbCk7XG4gICAgICB0aGlzLmltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5pbWdFbCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9zZXRJbWFnZVVSTFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0SW1hZ2VVUkwoaW1hZ2VVUkwpIHtcbiAgICAgIHRoaXMuaW1nRWwuc2V0QXR0cmlidXRlKFwic3JjXCIsIGltYWdlVVJMKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3NldEltYWdlU2l6ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0SW1hZ2VTaXplKHRyaWdnZXJXaWR0aCwgdHJpZ2dlckhlaWdodCkge1xuICAgICAgdGhpcy5pbWdFbC5zdHlsZS53aWR0aCA9IFwiXCIuY29uY2F0KHRyaWdnZXJXaWR0aCAqIHRoaXMuc2V0dGluZ3Muem9vbUZhY3RvciwgXCJweFwiKTtcbiAgICAgIHRoaXMuaW1nRWwuc3R5bGUuaGVpZ2h0ID0gXCJcIi5jb25jYXQodHJpZ2dlckhlaWdodCAqIHRoaXMuc2V0dGluZ3Muem9vbUZhY3RvciwgXCJweFwiKTtcbiAgICB9IC8vIGBwZXJjZW50YWdlT2Zmc2V0WGAgYW5kIGBwZXJjZW50YWdlT2Zmc2V0WWAgbXVzdCBiZSBwZXJjZW50YWdlc1xuICAgIC8vIGV4cHJlc3NlZCBhcyBmbG9hdHMgYmV0d2VlbiBgMCcgYW5kIGAxYC5cblxuICB9LCB7XG4gICAga2V5OiBcInNldFBvc2l0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBvc2l0aW9uKHBlcmNlbnRhZ2VPZmZzZXRYLCBwZXJjZW50YWdlT2Zmc2V0WSwgdHJpZ2dlclJlY3QpIHtcbiAgICAgIHZhciBpbWdFbFdpZHRoID0gdGhpcy5pbWdFbC5vZmZzZXRXaWR0aDtcbiAgICAgIHZhciBpbWdFbEhlaWdodCA9IHRoaXMuaW1nRWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgdmFyIGVsV2lkdGggPSB0aGlzLmVsLm9mZnNldFdpZHRoO1xuICAgICAgdmFyIGVsSGVpZ2h0ID0gdGhpcy5lbC5vZmZzZXRIZWlnaHQ7XG4gICAgICB2YXIgY2VudHJlT2ZDb250YWluZXJYID0gZWxXaWR0aCAvIDI7XG4gICAgICB2YXIgY2VudHJlT2ZDb250YWluZXJZID0gZWxIZWlnaHQgLyAyO1xuICAgICAgdmFyIHRhcmdldEltZ1hUb0JlQ2VudHJlID0gaW1nRWxXaWR0aCAqIHBlcmNlbnRhZ2VPZmZzZXRYO1xuICAgICAgdmFyIHRhcmdldEltZ1lUb0JlQ2VudHJlID0gaW1nRWxIZWlnaHQgKiBwZXJjZW50YWdlT2Zmc2V0WTtcbiAgICAgIHZhciBsZWZ0ID0gY2VudHJlT2ZDb250YWluZXJYIC0gdGFyZ2V0SW1nWFRvQmVDZW50cmU7XG4gICAgICB2YXIgdG9wID0gY2VudHJlT2ZDb250YWluZXJZIC0gdGFyZ2V0SW1nWVRvQmVDZW50cmU7XG4gICAgICB2YXIgZGlmZmVyZW5jZUJldHdlZW5Db250YWluZXJXaWR0aEFuZEltZ1dpZHRoID0gZWxXaWR0aCAtIGltZ0VsV2lkdGg7XG4gICAgICB2YXIgZGlmZmVyZW5jZUJldHdlZW5Db250YWluZXJIZWlnaHRBbmRJbWdIZWlnaHQgPSBlbEhlaWdodCAtIGltZ0VsSGVpZ2h0O1xuICAgICAgdmFyIGlzQ29udGFpbmVyTGFyZ2VyVGhhbkltZ1ggPSBkaWZmZXJlbmNlQmV0d2VlbkNvbnRhaW5lcldpZHRoQW5kSW1nV2lkdGggPiAwO1xuICAgICAgdmFyIGlzQ29udGFpbmVyTGFyZ2VyVGhhbkltZ1kgPSBkaWZmZXJlbmNlQmV0d2VlbkNvbnRhaW5lckhlaWdodEFuZEltZ0hlaWdodCA+IDA7XG4gICAgICB2YXIgbWluTGVmdCA9IGlzQ29udGFpbmVyTGFyZ2VyVGhhbkltZ1ggPyBkaWZmZXJlbmNlQmV0d2VlbkNvbnRhaW5lcldpZHRoQW5kSW1nV2lkdGggLyAyIDogMDtcbiAgICAgIHZhciBtaW5Ub3AgPSBpc0NvbnRhaW5lckxhcmdlclRoYW5JbWdZID8gZGlmZmVyZW5jZUJldHdlZW5Db250YWluZXJIZWlnaHRBbmRJbWdIZWlnaHQgLyAyIDogMDtcbiAgICAgIHZhciBtYXhMZWZ0ID0gaXNDb250YWluZXJMYXJnZXJUaGFuSW1nWCA/IGRpZmZlcmVuY2VCZXR3ZWVuQ29udGFpbmVyV2lkdGhBbmRJbWdXaWR0aCAvIDIgOiBkaWZmZXJlbmNlQmV0d2VlbkNvbnRhaW5lcldpZHRoQW5kSW1nV2lkdGg7XG4gICAgICB2YXIgbWF4VG9wID0gaXNDb250YWluZXJMYXJnZXJUaGFuSW1nWSA/IGRpZmZlcmVuY2VCZXR3ZWVuQ29udGFpbmVySGVpZ2h0QW5kSW1nSGVpZ2h0IC8gMiA6IGRpZmZlcmVuY2VCZXR3ZWVuQ29udGFpbmVySGVpZ2h0QW5kSW1nSGVpZ2h0O1xuXG4gICAgICBpZiAodGhpcy5lbC5wYXJlbnRFbGVtZW50ID09PSB0aGlzLnNldHRpbmdzLmlubGluZUNvbnRhaW5lcikge1xuICAgICAgICAvLyBUaGlzIG1heSBiZSBuZWVkZWQgaW4gdGhlIGZ1dHVyZSB0byBkZWFsIHdpdGggYnJvd3NlciBldmVudFxuICAgICAgICAvLyBpbmNvbnNpc3RlbmNpZXMsIGJ1dCBpdCdzIGRpZmZpY3VsdCB0byB0ZWxsIGZvciBzdXJlLlxuICAgICAgICAvLyBsZXQgc2Nyb2xsWCA9IGlzVG91Y2ggPyAwIDogd2luZG93LnNjcm9sbFg7XG4gICAgICAgIC8vIGxldCBzY3JvbGxZID0gaXNUb3VjaCA/IDAgOiB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgICAgdmFyIHNjcm9sbFggPSB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgICAgIHZhciBzY3JvbGxZID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICB2YXIgaW5saW5lTGVmdCA9IHRyaWdnZXJSZWN0LmxlZnQgKyBwZXJjZW50YWdlT2Zmc2V0WCAqIHRyaWdnZXJSZWN0LndpZHRoIC0gZWxXaWR0aCAvIDIgKyB0aGlzLnNldHRpbmdzLmlubGluZU9mZnNldFggKyBzY3JvbGxYO1xuICAgICAgICB2YXIgaW5saW5lVG9wID0gdHJpZ2dlclJlY3QudG9wICsgcGVyY2VudGFnZU9mZnNldFkgKiB0cmlnZ2VyUmVjdC5oZWlnaHQgLSBlbEhlaWdodCAvIDIgKyB0aGlzLnNldHRpbmdzLmlubGluZU9mZnNldFkgKyBzY3JvbGxZO1xuXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmNvbnRhaW5JbmxpbmUpIHtcbiAgICAgICAgICBpZiAoaW5saW5lTGVmdCA8IHRyaWdnZXJSZWN0LmxlZnQgKyBzY3JvbGxYKSB7XG4gICAgICAgICAgICBpbmxpbmVMZWZ0ID0gdHJpZ2dlclJlY3QubGVmdCArIHNjcm9sbFg7XG4gICAgICAgICAgfSBlbHNlIGlmIChpbmxpbmVMZWZ0ICsgZWxXaWR0aCA+IHRyaWdnZXJSZWN0LmxlZnQgKyB0cmlnZ2VyUmVjdC53aWR0aCArIHNjcm9sbFgpIHtcbiAgICAgICAgICAgIGlubGluZUxlZnQgPSB0cmlnZ2VyUmVjdC5sZWZ0ICsgdHJpZ2dlclJlY3Qud2lkdGggLSBlbFdpZHRoICsgc2Nyb2xsWDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW5saW5lVG9wIDwgdHJpZ2dlclJlY3QudG9wICsgc2Nyb2xsWSkge1xuICAgICAgICAgICAgaW5saW5lVG9wID0gdHJpZ2dlclJlY3QudG9wICsgc2Nyb2xsWTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlubGluZVRvcCArIGVsSGVpZ2h0ID4gdHJpZ2dlclJlY3QudG9wICsgdHJpZ2dlclJlY3QuaGVpZ2h0ICsgc2Nyb2xsWSkge1xuICAgICAgICAgICAgaW5saW5lVG9wID0gdHJpZ2dlclJlY3QudG9wICsgdHJpZ2dlclJlY3QuaGVpZ2h0IC0gZWxIZWlnaHQgKyBzY3JvbGxZO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWwuc3R5bGUubGVmdCA9IFwiXCIuY29uY2F0KGlubGluZUxlZnQsIFwicHhcIik7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUudG9wID0gXCJcIi5jb25jYXQoaW5saW5lVG9wLCBcInB4XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuc2V0dGluZ3Muc2hvd1doaXRlc3BhY2VBdEVkZ2VzKSB7XG4gICAgICAgIGlmIChsZWZ0ID4gbWluTGVmdCkge1xuICAgICAgICAgIGxlZnQgPSBtaW5MZWZ0O1xuICAgICAgICB9IGVsc2UgaWYgKGxlZnQgPCBtYXhMZWZ0KSB7XG4gICAgICAgICAgbGVmdCA9IG1heExlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9wID4gbWluVG9wKSB7XG4gICAgICAgICAgdG9wID0gbWluVG9wO1xuICAgICAgICB9IGVsc2UgaWYgKHRvcCA8IG1heFRvcCkge1xuICAgICAgICAgIHRvcCA9IG1heFRvcDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmltZ0VsLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiLmNvbmNhdChsZWZ0LCBcInB4LCBcIikuY29uY2F0KHRvcCwgXCJweClcIik7XG4gICAgICB0aGlzLmltZ0VsLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiLmNvbmNhdChsZWZ0LCBcInB4LCBcIikuY29uY2F0KHRvcCwgXCJweClcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9yZW1vdmVMaXN0ZW5lcnNBbmRSZXNldENsYXNzZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbW92ZUxpc3RlbmVyc0FuZFJlc2V0Q2xhc3NlcygpIHtcbiAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCB0aGlzLl9jb21wbGV0ZVNob3cpO1xuICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIHRoaXMuX2NvbXBsZXRlSGlkZSk7XG4gICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3ZWJraXRBbmltYXRpb25FbmRcIiwgdGhpcy5fY29tcGxldGVTaG93KTtcbiAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndlYmtpdEFuaW1hdGlvbkVuZFwiLCB0aGlzLl9jb21wbGV0ZUhpZGUpO1xuICAgICAgcmVtb3ZlQ2xhc3Nlcyh0aGlzLmVsLCB0aGlzLm9wZW5DbGFzc2VzKTtcbiAgICAgIHJlbW92ZUNsYXNzZXModGhpcy5lbCwgdGhpcy5jbG9zaW5nQ2xhc3Nlcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNob3dcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdyhpbWFnZVVSTCwgdHJpZ2dlcldpZHRoLCB0cmlnZ2VySGVpZ2h0KSB7XG4gICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcnNBbmRSZXNldENsYXNzZXMoKTtcblxuICAgICAgdGhpcy5pc1Nob3dpbmcgPSB0cnVlO1xuICAgICAgYWRkQ2xhc3Nlcyh0aGlzLmVsLCB0aGlzLm9wZW5DbGFzc2VzKTtcblxuICAgICAgaWYgKHRoaXMuaW1nRWwuZ2V0QXR0cmlidXRlKFwic3JjXCIpICE9IGltYWdlVVJMKSB7XG4gICAgICAgIGFkZENsYXNzZXModGhpcy5lbCwgdGhpcy5sb2FkaW5nQ2xhc3Nlcyk7XG4gICAgICAgIHRoaXMuaW1nRWwuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgdGhpcy5faGFuZGxlTG9hZCk7XG5cbiAgICAgICAgdGhpcy5fc2V0SW1hZ2VVUkwoaW1hZ2VVUkwpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZXRJbWFnZVNpemUodHJpZ2dlcldpZHRoLCB0cmlnZ2VySGVpZ2h0KTtcblxuICAgICAgaWYgKHRoaXMuX2lzSW5saW5lKSB7XG4gICAgICAgIHRoaXMuX3Nob3dJbmxpbmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3Nob3dJbkNvbnRhaW5lcigpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5IQVNfQU5JTUFUSU9OKSB7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCB0aGlzLl9jb21wbGV0ZVNob3cpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ3ZWJraXRBbmltYXRpb25FbmRcIiwgdGhpcy5fY29tcGxldGVTaG93KTtcbiAgICAgICAgYWRkQ2xhc3Nlcyh0aGlzLmVsLCB0aGlzLm9wZW5pbmdDbGFzc2VzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3Nob3dJbmxpbmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3Nob3dJbmxpbmUoKSB7XG4gICAgICB0aGlzLnNldHRpbmdzLmlubGluZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICAgIGFkZENsYXNzZXModGhpcy5lbCwgdGhpcy5pbmxpbmVDbGFzc2VzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3Nob3dJbkNvbnRhaW5lclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2hvd0luQ29udGFpbmVyKCkge1xuICAgICAgdGhpcy5zZXR0aW5ncy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhpZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGlkZSgpIHtcbiAgICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVyc0FuZFJlc2V0Q2xhc3NlcygpO1xuXG4gICAgICB0aGlzLmlzU2hvd2luZyA9IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy5IQVNfQU5JTUFUSU9OKSB7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCB0aGlzLl9jb21wbGV0ZUhpZGUpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ3ZWJraXRBbmltYXRpb25FbmRcIiwgdGhpcy5fY29tcGxldGVIaWRlKTtcbiAgICAgICAgYWRkQ2xhc3Nlcyh0aGlzLmVsLCB0aGlzLmNsb3NpbmdDbGFzc2VzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZUNsYXNzZXModGhpcy5lbCwgdGhpcy5vcGVuQ2xhc3Nlcyk7XG4gICAgICAgIHJlbW92ZUNsYXNzZXModGhpcy5lbCwgdGhpcy5pbmxpbmVDbGFzc2VzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2NvbXBsZXRlU2hvd1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfY29tcGxldGVTaG93KCkge1xuICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIHRoaXMuX2NvbXBsZXRlU2hvdyk7XG4gICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3ZWJraXRBbmltYXRpb25FbmRcIiwgdGhpcy5fY29tcGxldGVTaG93KTtcbiAgICAgIHJlbW92ZUNsYXNzZXModGhpcy5lbCwgdGhpcy5vcGVuaW5nQ2xhc3Nlcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9jb21wbGV0ZUhpZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2NvbXBsZXRlSGlkZSgpIHtcbiAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCB0aGlzLl9jb21wbGV0ZUhpZGUpO1xuICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2Via2l0QW5pbWF0aW9uRW5kXCIsIHRoaXMuX2NvbXBsZXRlSGlkZSk7XG4gICAgICByZW1vdmVDbGFzc2VzKHRoaXMuZWwsIHRoaXMub3BlbkNsYXNzZXMpO1xuICAgICAgcmVtb3ZlQ2xhc3Nlcyh0aGlzLmVsLCB0aGlzLmNsb3NpbmdDbGFzc2VzKTtcbiAgICAgIHJlbW92ZUNsYXNzZXModGhpcy5lbCwgdGhpcy5pbmxpbmVDbGFzc2VzKTtcbiAgICAgIHRoaXMuZWwuc3R5bGUubGVmdCA9IFwiXCI7XG4gICAgICB0aGlzLmVsLnN0eWxlLnRvcCA9IFwiXCI7IC8vIFRoZSB3aW5kb3cgY291bGQgaGF2ZSBiZWVuIHJlc2l6ZWQgYWJvdmUgb3IgYmVsb3cgYGlubGluZWBcbiAgICAgIC8vIGxpbWl0cyBzaW5jZSB0aGUgWm9vbVBhbmUgd2FzIHNob3duLiBCZWNhdXNlIG9mIHRoaXMsIHdlXG4gICAgICAvLyBjYW4ndCByZWx5IG9uIGB0aGlzLl9pc0lubGluZWAgaGVyZS5cblxuICAgICAgaWYgKHRoaXMuZWwucGFyZW50RWxlbWVudCA9PT0gdGhpcy5zZXR0aW5ncy5jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZWwucGFyZW50RWxlbWVudCA9PT0gdGhpcy5zZXR0aW5ncy5pbmxpbmVDb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5pbmxpbmVDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9oYW5kbGVMb2FkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVMb2FkKCkge1xuICAgICAgdGhpcy5pbWdFbC5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCB0aGlzLl9oYW5kbGVMb2FkKTtcbiAgICAgIHJlbW92ZUNsYXNzZXModGhpcy5lbCwgdGhpcy5sb2FkaW5nQ2xhc3Nlcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9pc0lubGluZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIGlubGluZSA9IHRoaXMuc2V0dGluZ3MuaW5saW5lO1xuICAgICAgcmV0dXJuIGlubGluZSA9PT0gdHJ1ZSB8fCB0eXBlb2YgaW5saW5lID09PSBcIm51bWJlclwiICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IGlubGluZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gWm9vbVBhbmU7XG59KCk7XG5cbmV4cG9ydCB7IFpvb21QYW5lIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVpvb21QYW5lLmpzLm1hcCIsIi8qIFVOTUlOSUZJRUQgUlVMRVNcblxuY29uc3QgUlVMRVMgPSBgXG5Aa2V5ZnJhbWVzIG5vb3Age1xuICAwJSB7IHpvb206IDE7IH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIG5vb3Age1xuICAwJSB7IHpvb206IDE7IH1cbn1cblxuLmRyaWZ0LXpvb20tcGFuZS5kcmlmdC1vcGVuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kcmlmdC16b29tLXBhbmUuZHJpZnQtb3BlbmluZywgLmRyaWZ0LXpvb20tcGFuZS5kcmlmdC1jbG9zaW5nIHtcbiAgYW5pbWF0aW9uOiBub29wIDFtcztcbiAgLXdlYmtpdC1hbmltYXRpb246IG5vb3AgMW1zO1xufVxuXG4uZHJpZnQtem9vbS1wYW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZHJpZnQtem9vbS1wYW5lLWxvYWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kcmlmdC16b29tLXBhbmUgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiBub25lO1xuICBtYXgtaGVpZ2h0OiBub25lO1xufVxuXG4uZHJpZnQtYm91bmRpbmctYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbmA7XG5cbiovXG52YXIgUlVMRVMgPSBcIi5kcmlmdC1ib3VuZGluZy1ib3gsLmRyaWZ0LXpvb20tcGFuZXtwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lfUBrZXlmcmFtZXMgbm9vcHswJXt6b29tOjF9fUAtd2Via2l0LWtleWZyYW1lcyBub29wezAle3pvb206MX19LmRyaWZ0LXpvb20tcGFuZS5kcmlmdC1vcGVue2Rpc3BsYXk6YmxvY2t9LmRyaWZ0LXpvb20tcGFuZS5kcmlmdC1jbG9zaW5nLC5kcmlmdC16b29tLXBhbmUuZHJpZnQtb3BlbmluZ3thbmltYXRpb246bm9vcCAxbXM7LXdlYmtpdC1hbmltYXRpb246bm9vcCAxbXN9LmRyaWZ0LXpvb20tcGFuZXtvdmVyZmxvdzpoaWRkZW47d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt0b3A6MDtsZWZ0OjB9LmRyaWZ0LXpvb20tcGFuZS1sb2FkZXJ7ZGlzcGxheTpub25lfS5kcmlmdC16b29tLXBhbmUgaW1ne3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6YmxvY2s7bWF4LXdpZHRoOm5vbmU7bWF4LWhlaWdodDpub25lfVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5qZWN0QmFzZVN0eWxlc2hlZXQoKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyaWZ0LWJhc2Utc3R5bGVzXCIpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIHN0eWxlRWwudHlwZSA9IFwidGV4dC9jc3NcIjtcbiAgc3R5bGVFbC5jbGFzc0xpc3QuYWRkKFwiZHJpZnQtYmFzZS1zdHlsZXNcIik7XG4gIHN0eWxlRWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoUlVMRVMpKTtcbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkO1xuICBoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsLCBoZWFkLmZpcnN0Q2hpbGQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5qZWN0QmFzZVN0eWxlc2hlZXQuanMubWFwIiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxuXG4vLyBUaGlzIGlzIG5vdCByZWFsbHkgYSBwZXJmZWN0IGNoZWNrLCBidXQgd29ya3MgZmluZS5cbi8vIEZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zODQyODZcbnZhciBIQVNfRE9NXzIgPSAodHlwZW9mIEhUTUxFbGVtZW50ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoSFRNTEVsZW1lbnQpKSA9PT0gXCJvYmplY3RcIjtcbmV4cG9ydCBmdW5jdGlvbiBpc0RPTUVsZW1lbnQob2JqKSB7XG4gIHJldHVybiBIQVNfRE9NXzIgPyBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA6IG9iaiAmJiBfdHlwZW9mKG9iaikgPT09IFwib2JqZWN0XCIgJiYgb2JqICE9PSBudWxsICYmIG9iai5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2Ygb2JqLm5vZGVOYW1lID09PSBcInN0cmluZ1wiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzZXMoZWwsIGNsYXNzTmFtZXMpIHtcbiAgY2xhc3NOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMoZWwsIGNsYXNzTmFtZXMpIHtcbiAgY2xhc3NOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZG9tLmpzLm1hcCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRocm93SWZNaXNzaW5nKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlclwiKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRocm93SWZNaXNzaW5nLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
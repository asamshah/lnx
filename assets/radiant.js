/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/resources/scripts/Theme.js":
/*!****************************************!*\
  !*** ./src/resources/scripts/Theme.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Theme)
/* harmony export */ });
/* harmony import */ var evx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! evx */ "./node_modules/evx/dist/evx.es.js");
/* harmony import */ var element_closest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! element-closest */ "./node_modules/element-closest/index.mjs");
/* harmony import */ var _lib_Queue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/Queue */ "./src/resources/scripts/lib/Queue.js");
/* harmony import */ var _lib_Helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/Helpers */ "./src/resources/scripts/lib/Helpers.js");
/* harmony import */ var vex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vex-js */ "./node_modules/vex-js/dist/js/vex.js");
/* harmony import */ var vex_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vex_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_MethodCall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/MethodCall */ "./src/resources/scripts/components/MethodCall.js");
/* harmony import */ var _components_MegaMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/MegaMenu */ "./src/resources/scripts/components/MegaMenu.js");
/* harmony import */ var _components_ClassChange__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ClassChange */ "./src/resources/scripts/components/ClassChange.js");
/* harmony import */ var _components_SlideToggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/SlideToggle */ "./src/resources/scripts/components/SlideToggle.js");
/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Product */ "./src/resources/scripts/components/Product.js");
/* harmony import */ var _components_NumberSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/NumberSelector */ "./src/resources/scripts/components/NumberSelector.js");
/* harmony import */ var _components_StickyElem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/StickyElem */ "./src/resources/scripts/components/StickyElem.js");
/* harmony import */ var _components_LoadMore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/LoadMore */ "./src/resources/scripts/components/LoadMore.js");
/* harmony import */ var _components_LockScroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/LockScroll */ "./src/resources/scripts/components/LockScroll.js");
/* harmony import */ var _components_ObjectFit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/ObjectFit */ "./src/resources/scripts/components/ObjectFit.js");
/* harmony import */ var _components_SideCart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/SideCart */ "./src/resources/scripts/components/SideCart.js");
/* harmony import */ var _components_Quicklink__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/Quicklink */ "./src/resources/scripts/components/Quicklink.js");
/* harmony import */ var _components_AjaxSearch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/AjaxSearch */ "./src/resources/scripts/components/AjaxSearch.js");
/* harmony import */ var _components_SetCSSVar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/SetCSSVar */ "./src/resources/scripts/components/SetCSSVar.js");
/* harmony import */ var _components_LazyLoad__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/LazyLoad */ "./src/resources/scripts/components/LazyLoad.js");
/* harmony import */ var _components_LazyLoadTrigger__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/LazyLoadTrigger */ "./src/resources/scripts/components/LazyLoadTrigger.js");
/* harmony import */ var _components_KeenSlider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/KeenSlider */ "./src/resources/scripts/components/KeenSlider.js");
/* harmony import */ var _components_CountryProvinceSelector__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/CountryProvinceSelector */ "./src/resources/scripts/components/CountryProvinceSelector.js");
/* harmony import */ var _components_SlideToggleGroup__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/SlideToggleGroup */ "./src/resources/scripts/components/SlideToggleGroup.js");
/* harmony import */ var _components_ImageZoom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/ImageZoom */ "./src/resources/scripts/components/ImageZoom.js");
/* harmony import */ var _components_KeenSliderNav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/KeenSliderNav */ "./src/resources/scripts/components/KeenSliderNav.js");
/* harmony import */ var _components_ScrollTo__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/ScrollTo */ "./src/resources/scripts/components/ScrollTo.js");
/* harmony import */ var _components_SlidingMenu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/SlidingMenu */ "./src/resources/scripts/components/SlidingMenu.js");
/* harmony import */ var _components_CountdownTimer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/CountdownTimer */ "./src/resources/scripts/components/CountdownTimer.js");
/* harmony import */ var _components_VideoAutoPlay__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/VideoAutoPlay */ "./src/resources/scripts/components/VideoAutoPlay.js");





vex_js__WEBPACK_IMPORTED_MODULE_4___default().registerPlugin(__webpack_require__(/*! vex-dialog */ "./node_modules/vex-dialog/dist/vex.dialog.js"));
(vex_js__WEBPACK_IMPORTED_MODULE_4___default().defaultOptions).className = 'vex-theme-plain';
(vex_js__WEBPACK_IMPORTED_MODULE_4___default().dialog).buttons.YES.className = 'btn';
(vex_js__WEBPACK_IMPORTED_MODULE_4___default().dialog).buttons.NO.className = 'btn btn--secondary';
const {
  detect
} = __webpack_require__(/*! detect-browser */ "./node_modules/detect-browser/es/index.js");




// import AddToCart from './components/AddToCart';


// import Cart from './components/Cart';



















const components = {
  'countdown-timer': _components_CountdownTimer__WEBPACK_IMPORTED_MODULE_28__["default"],
  'sliding-menu': _components_SlidingMenu__WEBPACK_IMPORTED_MODULE_27__["default"],
  'scroll-to': _components_ScrollTo__WEBPACK_IMPORTED_MODULE_26__["default"],
  'image-zoom': _components_ImageZoom__WEBPACK_IMPORTED_MODULE_24__["default"],
  'lazy-load': _components_LazyLoad__WEBPACK_IMPORTED_MODULE_19__["default"],
  'lazy-load-trigger': _components_LazyLoadTrigger__WEBPACK_IMPORTED_MODULE_20__["default"],
  'set-css-var': _components_SetCSSVar__WEBPACK_IMPORTED_MODULE_18__["default"],
  'quicklink': _components_Quicklink__WEBPACK_IMPORTED_MODULE_16__["default"],
  'keen-slider': _components_KeenSlider__WEBPACK_IMPORTED_MODULE_21__["default"],
  'product': _components_Product__WEBPACK_IMPORTED_MODULE_9__["default"],
  'method-call': _components_MethodCall__WEBPACK_IMPORTED_MODULE_5__["default"],
  'mega-menus': _components_MegaMenu__WEBPACK_IMPORTED_MODULE_6__["default"],
  'class-change': _components_ClassChange__WEBPACK_IMPORTED_MODULE_7__["default"],
  'slide-toggle': _components_SlideToggle__WEBPACK_IMPORTED_MODULE_8__["default"],
  'toggle-group': _components_SlideToggleGroup__WEBPACK_IMPORTED_MODULE_23__["default"],
  // 'add-to-cart': AddToCart,
  'number-selector': _components_NumberSelector__WEBPACK_IMPORTED_MODULE_10__["default"],
  // 'cart': Cart,
  'sticky': _components_StickyElem__WEBPACK_IMPORTED_MODULE_11__["default"],
  'load-more': _components_LoadMore__WEBPACK_IMPORTED_MODULE_12__["default"],
  'lock-scroll': _components_LockScroll__WEBPACK_IMPORTED_MODULE_13__["default"],
  'object-fit': _components_ObjectFit__WEBPACK_IMPORTED_MODULE_14__["default"],
  'side-cart': _components_SideCart__WEBPACK_IMPORTED_MODULE_15__["default"],
  'ajax-search': _components_AjaxSearch__WEBPACK_IMPORTED_MODULE_17__["default"],
  'country-province-selector': _components_CountryProvinceSelector__WEBPACK_IMPORTED_MODULE_22__["default"],
  'keen-slider-nav': _components_KeenSliderNav__WEBPACK_IMPORTED_MODULE_25__["default"],
  'radiant-video-autoplay': _components_VideoAutoPlay__WEBPACK_IMPORTED_MODULE_29__["default"]
};
const options = {};
const state = {
  eventQueue: new _lib_Queue__WEBPACK_IMPORTED_MODULE_2__["default"](),
  ajaxCache: []
};
class Theme {
  constructor() {
    let ctx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : state;
    let passedOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this._options = {
      ...passedOptions,
      ...options
    };
    let themeInfoElem = document.querySelector('[data-theme-information]');
    if (themeInfoElem) {
      ctx = {
        ...ctx,
        ...JSON.parse(themeInfoElem.innerHTML)
      };
    }
    this._ctx = (0,evx__WEBPACK_IMPORTED_MODULE_0__.create)(ctx);
    this._viewportEvent();
    this._bodyScrollListen();
    this._runHooks();
    this._browserDetect();
    this._components = [];
  }
  _browserDetect() {
    const browser = detect();
    if (browser) {
      document.body.classList.add(`browser--${_lib_Helpers__WEBPACK_IMPORTED_MODULE_3__["default"].handleize(browser.name)}`);
      document.body.classList.add(`os--${_lib_Helpers__WEBPACK_IMPORTED_MODULE_3__["default"].handleize(browser.os)}`);
    }
  }
  _viewportEvent() {
    window.addEventListener('resize', () => {
      this._viewportLogic();
    }, {
      passive: true
    });
    this._viewportLogic();
  }
  _bodyScrollListen() {
    const targetNode = document.body;
    const config = {
      attributes: true,
      childList: false,
      subtree: false
    };
    const callback = function (mutationsList, observer) {
      document.documentElement.style.setProperty('--scroll-gap-right', getComputedStyle(document.body).paddingRight);
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  }
  _viewportLogic() {
    let vh = window.innerHeight * 0.01;
    let vw = document.body.clientWidth * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  }
  mountComponents() {
    let container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    for (let componentKey in components) {
      if (components.hasOwnProperty(componentKey)) {
        let selector = `[data-${componentKey}]`;
        let elements = container.querySelectorAll(selector);
        for (let elem of elements) {
          this.mountComponent(componentKey, componentKey, elem);
        }
      }
    }
    window.__Theme = this;
    window.__ThemeComponents = this._components;
    this._ctx.emit('radiant--mounted');
  }
  unmountComponents() {
    let container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    for (var i = this._components.length - 1; i >= 0; i--) {
      let component = this._components[i];
      if (container.contains(component.elem)) {
        let componentObj = component.component;
        if (typeof componentObj.unmount === 'function') {
          componentObj.unmount();
        }
        component = null;
        componentObj = null;
        this._components.splice(i, 1);
      }
    }
  }
  mountComponent(type, dataAttr, elem) {
    try {
      let optionStr = elem.getAttribute(`data-${dataAttr}`).trim();
      let options = {};
      if (optionStr.startsWith('{') || optionStr.startsWith('[')) {
        options = JSON.parse(optionStr);
      }
      let compInstance = new components[type](elem, this, options, this._ctx);
      this._components.push({
        type: type,
        elem: elem,
        id: compInstance._options.id,
        component: compInstance
      });
      compInstance.mount();
    } catch (e) {
      console.error(`-----ERROR IN COMPONENT----- \ntype: ${type}\nelement and stack trace below:`);
      console.error(elem);
      console.error(e);
    }
  }
  getOptions() {
    return this._options;
  }
  getComponent(id) {
    return this._components.find(component => component.id === id);
  }
  getComponentByElem(elem) {
    return this._components.find(component => component.elem === elem);
  }
  _runHooks() {
    this._ctx.on('cart-item-added', state => {
      if (window.pintrk) {
        pintrk('track', 'addtocart', {
          value: state.lastItemAdded.item.price / 100.0,
          order_quantity: state.lastItemAdded.quantity
        });
      }
      if (window.fbq) {
        fbq('track', 'AddToCart');
      }
    });
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/AjaxSearch.js":
/*!********************************************************!*\
  !*** ./src/resources/scripts/components/AjaxSearch.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AjaxSearch)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");
/* harmony import */ var _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Helpers */ "./src/resources/scripts/lib/Helpers.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



class AjaxSearch extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._response = null;
    this._form = this._elem.querySelector('[data-ajax-search-form]');
    this._triggers = this._elem.querySelectorAll('[data-ajax-search-trigger]');
    this._input = this._elem.querySelector('[data-ajax-search-input]');
    this._results = this._elem.querySelector('[data-ajax-search-results]');
    this._clearTrigger = null;
    this._exitTrigger = this._elem.querySelector('[data-ajax-search-exit]');
    this._loading = false;
  }
  async mount() {
    this._form.addEventListener('submit', e => {
      //e.preventDefault()
      this._submitForm();
    });
    this._input.addEventListener('input', () => {
      if (this._input.value.length === 0) {
        this._clearSearch();
      }
    });
    this._input.addEventListener('input', _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].debounce(() => {
      if (this._input.value.length !== 0) {
        this._submitForm();
      }
    }, 300));
    this._exitTrigger.addEventListener('click', e => {
      e.preventDefault();
      this._clearSearch();
    });
    if (this._input.value) {
      this._elem.classList.add('open');
      this._submitForm();
    }
    for (let trigger of this._triggers) {
      trigger.addEventListener('click', e => {
        this._elem.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        this._input.value = trigger.dataset.ajaxSearchTrigger;
        this._submitForm();
      });
    }
  }
  async _submitForm() {
    if (this._loading) return false;
    let valid = this._form.reportValidity();
    if (valid) {
      this._loading = true;
      this._elem.classList.add('ajax-search--loading');
      let url = `/search?view=ajax&q=${this._input.value}&type=product`;
      if (this._input.value.split(" ").length === 1) {
        url += `&options[prefix]=last`;
      }
      let {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(url);
      let parser = new DOMParser();
      let html = parser.parseFromString(data, 'text/html');
      let fetchedElem = html.querySelector('[data-ajax-search-results]');
      this._results.innerHTML = fetchedElem.innerHTML;
      this._clearTrigger = this._elem.querySelector('[data-ajax-search-clear]');
      if (this._clearTrigger) {
        this._clearTrigger.addEventListener('click', e => {
          e.preventDefault();
          e.stopPropagation();
          this._clearSearch();
        });
      }
      this._theme.mountComponents(this._results);
      this._ctx.emit('radiant--scroll-lock-elem', null, this._elem);
      this._ctx.emit('radiant--lazy-load-update');
      this._ctx.emit('radiant--quicklink-listen-to', null, this._results);
      this._elem.classList.remove('ajax-search--loading');
      this._loading = false;
    }
  }
  _clearSearch() {
    this._results.innerHTML = '';
    this._input.value = '';
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/ClassChange.js":
/*!*********************************************************!*\
  !*** ./src/resources/scripts/components/ClassChange.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClassChange)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

class ClassChange extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
  }
  mount() {
    if (this._options.length) {
      for (let option of this._options) {
        this._optionLogic(option);
      }
    } else {
      this._optionLogic(this._options);
    }
  }
  _optionLogic(option) {
    if (!option.on) {
      option.on = 'click';
    }
    if (option.whenOutside) {
      document.addEventListener(option.on, e => {
        let clickIsInside = this._elem.contains(e.target) || this._elem === e.target;
        let toExclude = document.querySelectorAll(option.whenOutsideExcept);
        let hasClickedExclude = Array.from(toExclude).some(elem => elem.contains(e.target) || elem === e.target);
        if (clickIsInside || hasClickedExclude) return false;
        this._eventLogic(option, e);
      }, option.preventDefault ? {
        passive: false
      } : {
        passive: true
      });
    } else {
      this._elem.addEventListener(option.on, e => {
        this._eventLogic(option, e);
      }, option.preventDefault ? {
        passive: false
      } : {
        passive: true
      });
    }
  }
  _eventLogic(option, e) {
    if (option.onlyThisElem && e.target !== this._elem) {
      return false;
    }
    if (option.preventDefault) {
      e.preventDefault();
    }
    if (option.target.includes('closest:')) {
      let parentSelector = option.target.split('closest:')[1].trim();
      if (option.subTarget) {
        this._elem.closest(parentSelector).querySelector(option.subTarget).classList[option.method](option.class);
      } else {
        this._elem.closest(parentSelector).classList[option.method](option.class);
      }
    } else if (option.target === 'this') {
      this._elem.classList[option.method](option.class);
    } else {
      let targets = document.querySelectorAll(option.target);
      for (let target of targets) {
        target.classList[option.method](option.class);
      }
    }
    if (option.resizeWindow) {
      window.dispatchEvent(new Event('resize'));
    }
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/CountdownTimer.js":
/*!************************************************************!*\
  !*** ./src/resources/scripts/components/CountdownTimer.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CountdownTimer)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");
/* harmony import */ var _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Helpers */ "./src/resources/scripts/lib/Helpers.js");
/* harmony import */ var _lib_AjaxApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/AjaxApi */ "./src/resources/scripts/lib/AjaxApi.js");
/* harmony import */ var countdown_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! countdown-js */ "./node_modules/countdown-js/index.js");
/* harmony import */ var countdown_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(countdown_js__WEBPACK_IMPORTED_MODULE_3__);




class CountdownTimer extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._elem = elem;
    this._options = {
      ...{
        epoch: 0,
        separator: ''
      },
      ...this._options
    };
    this._timer = null;
    this._timerElems = this._elem.querySelectorAll('[data-time]');
  }
  async mount() {
    let CountdownDate;
    if (this._options.epoch) {
      CountdownDate = new Date(this._options.epoch * 1000);
    }
    if (this._options.time) {
      let todayDate = new Date();
      let month = todayDate.getUTCMonth() + 1;
      let day = todayDate.getUTCDate();
      let year = todayDate.getUTCFullYear();
      let todayYYMMDD = year + "/" + month + "/" + day;
      CountdownDate = new Date(todayYYMMDD + ' ' + this._options.time + ':00');
      if (this._options.time_zone) {
        CountdownDate = this._changeTimezone(CountdownDate, this._options.time_zone);
      }
    }
    this._timer = countdown_js__WEBPACK_IMPORTED_MODULE_3___default().timer(CountdownDate, timeLeft => {
      this._updateTimeElems(timeLeft);
    }, () => {
      this._updateTimeElems({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }, false);
    });
  }
  _changeTimezone(date, timezone) {
    let invdate = new Date(date.toLocaleString('en-US', {
      timeZone: timezone
    }));
    let diff = date.getTime() - invdate.getTime();
    return new Date(date.getTime() + diff);
  }
  _updateTimeElems(timeLeft) {
    let reachedZero = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    for (let [index, timeElem] of this._timerElems.entries()) {
      let time = timeLeft[timeElem.dataset.time];
      if (time === 0 && reachedZero) {
        timeElem.classList.add('hide');
      } else {
        reachedZero = false;
        timeElem.innerHTML = _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].pad(time, 2);
        if (!this._options.numbersOnly) {
          if (timeElem.dataset.time === 'days') {
            timeElem.innerHTML += '<span>days</span>';
          }
          if (timeElem.dataset.time === 'hours') {
            timeElem.innerHTML += '<span>hrs</span>';
          }
          if (timeElem.dataset.time === 'minutes') {
            timeElem.innerHTML += '<span>mins</span>';
          }
          if (timeElem.dataset.time === 'seconds') {
            timeElem.innerHTML += '<span>secs</span>';
          }
        }
        if (index + 1 !== this._timerElems.length) {
          timeElem.innerHTML += this._options.separator;
        }
        if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
          this._elem.classList.add('hide');
          if (this._options.hideParentElement) {
            for (let el of document.querySelectorAll(this._options.hideParentElement)) {
              el.classList.remove();
            }
            if (document.querySelector(this._options.hideParentElement).classList.contains('keen-slider__slide')) {
              let slider = this._elem.closest('[data-keen-slider]');
              let comp = this._theme.getComponentByElem(slider);
              if (comp) {
                comp.component._slider.update();
              }
            }
          }
        }
      }
    }
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/CountryProvinceSelector.js":
/*!*********************************************************************!*\
  !*** ./src/resources/scripts/components/CountryProvinceSelector.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CountryProvinceSelector)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

class CountryProvinceSelector extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._countryEl = this._elem.querySelector('[data-country-selector]');
    this._provinceEl = this._elem.querySelector('[data-province-selector]');
    this._provinceContainer = this._elem.querySelector('[data-province-container]');
  }
  mount() {
    this._countryEl.addEventListener('change', e => {
      this._countryHandler();
    });
    this._initCountry();
    this._initProvince();
  }
  _initCountry() {
    var t = this._countryEl.getAttribute('data-default');
    this._setSelectorByValue(this._countryEl, t);
    this._countryHandler();
  }
  _initProvince() {
    var t = this._provinceEl.getAttribute('data-default');
    t && this._provinceEl.options.length > 0 && this._setSelectorByValue(this._provinceEl, t);
  }
  _countryHandler() {
    var t = this._countryEl.options[this._countryEl.selectedIndex];
    var e = t.getAttribute('data-provinces');
    var n = JSON.parse(e);
    this._clearOptions(this._provinceEl);
    if (n && n.length === 0) {
      this._provinceContainer.style.display = 'none';
    } else {
      for (var i = 0; i < n.length; i++) {
        t = document.createElement('option');
        t.value = n[i][0];
        t.innerHTML = n[i][1];
        this._provinceEl.appendChild(t);
      }
      this._provinceContainer.style.display = '';
    }
  }
  _setSelectorByValue(t, e) {
    for (var n = 0, i = t.options.length; n < i; n++) {
      var o = t.options[n];
      if (e === o.value || e === o.innerHTML) {
        t.selectedIndex = n;
        return n;
      }
    }
  }
  _clearOptions(t) {
    for (; t.firstChild;) t.removeChild(t.firstChild);
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/ImageZoom.js":
/*!*******************************************************!*\
  !*** ./src/resources/scripts/components/ImageZoom.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageZoom)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

class ImageZoom extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._pane = this._elem.querySelector('[data-zoom-pane]');
    this._options = {
      ...{
        paneContainer: this._pane,
        zoomFactor: 2,
        hoverDelay: 100
      },
      ...this._options
    };
  }
  async mount() {
    if (this._options.enableWhen && !matchMedia(`only screen and ${this._options.enableWhen}`).matches) {
      window.addEventListener('resize', e => {
        if (matchMedia(`only screen and ${this._options.enableWhen}`).matches && !this._isMounted) {
          this.mount();
        } else if (!matchMedia(`only screen and ${this._options.enableWhen}`).matches && this._isMounted) {
          this.unmount();
          this._isMounted = false;
        }
      }, {
        passive: true
      });
      return false;
    }
    if (matchMedia(`only screen and (max-width: 834px)`).matches) {
      await this._zoomMobile();
    } else {
      await this._zoomDesktop();
    }
  }
  async _zoomDesktop() {
    const {
      default: Drift
    } = await __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(__webpack_require__, /*! drift-zoom */ "./node_modules/drift-zoom/es/Drift.js"));
    this._drift = new Drift(this._elem, this._options);
  }
  async _zoomMobile() {
    const {
      PinchToZoom
    } = await __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(__webpack_require__, /*! pinch-to-zoom */ "./node_modules/pinch-to-zoom/dist/index.module.js"));
    new PinchToZoom(this._elem);
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/KeenSlider.js":
/*!********************************************************!*\
  !*** ./src/resources/scripts/components/KeenSlider.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KeenSliderComp)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");
/* harmony import */ var evx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! evx */ "./node_modules/evx/dist/evx.es.js");
/* harmony import */ var _lib_Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/Helpers */ "./src/resources/scripts/lib/Helpers.js");
/* harmony import */ var keen_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! keen-slider */ "./node_modules/keen-slider/keen-slider.es.js");




class KeenSliderComp extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    options = {
      ...{
        dragSpeed: 1,
        autoplaySpeed: 5000,
        duration: 500,
        arrowSvg: `<svg width="43" height="74" viewBox="0 0 43 74" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00633 2L40 37L2 72" stroke="currentColor" stroke-width="3"/></svg>`
      },
      ...options
    };
    let optionsCopy = {
      ...options
    };
    super(elem, theme, options, ctx);
    this._slider = null;
    this._autoplayInterval = null;
    this.shouldAutoplay = false;
    this._localCtx = (0,evx__WEBPACK_IMPORTED_MODULE_1__.create)();
    this._isMounted = false;
    this._addedListener = false;
    super.reinitOnResize(optionsCopy);
  }
  mount() {
    if (this._options.mount === false) {
      return false;
    }
    if (this._options.enableWhen && !this._addedListener) {
      window.addEventListener('resize', e => {
        if (matchMedia(`only screen and ${this._options.enableWhen}`).matches && !this._isMounted) {
          this.mount();
        } else if (!matchMedia(`only screen and ${this._options.enableWhen}`).matches && this._isMounted) {
          this.unmount();
          this._isMounted = false;
        }
      }, {
        passive: true
      });
      this._addedListener = true;
    }
    if (this._options.enableWhen && !matchMedia(`only screen and ${this._options.enableWhen}`).matches) {
      return false;
    }
    this._convertOldOptions();
    this._slidesPerView = typeof this._options.slides === 'object' ? this._options.slides.perView || this._options.slides.number : this._options.slides;
    this._elem.classList.add('keen-slider');
    for (let elem of this._elem.children) {
      if (elem.hasAttribute('data-keen-dots') || elem.hasAttribute('data-keen-nav')) continue;
      elem.classList.add('keen-slider__slide');
      if (this._options.fade) {
        elem.classList.add('fader-slide');
      }
    }
    this._slides = this._elem.querySelectorAll('.keen-slider__slide');

    // AS NAV FOR
    if (this._options.asNavFor) {
      this._ctx.on('ffc--mounted', e => {
        this._parentSlider = this._theme.getComponent(this._options.asNavFor);
        this._parentSlider = this._parentSlider.component;
        this._parentSliderTimeout = null;
        this._parentSlider._localCtx.on('slide-change', (state, data) => {
          console.log(data.slider.track.details.rel);
          if (this._parentSliderTimeout) clearTimeout(this._parentSliderTimeout);
          this._parentSliderTimeout = setTimeout(() => {
            const next = data.slider.track.details.rel || 0;
            this.goToSlide(data.slider.track.details.rel);
          }, 100);
        });
      });
    }
    if (this._options.arrows) this._createArrows();
    if (this._options.dots && this._slides.length > 1) this._createDots();
    if (this._slides.length === this._slidesPerView) {
      this._options.loop = false;
      this._options.controls = false;
    }
    this._dotsContainer = this._options.dotsContainer ? document.querySelector(this._options.dotsContainer) || this._elem : this._elem;
    this._dots = this._dotsContainer.querySelectorAll('[data-dot]');
    if (!this._prevArrow) this._prevArrow = this._elem.querySelector('[data-keen-prev]');
    if (!this._nextArrow) this._nextArrow = this._elem.querySelector('[data-keen-next]');
    this._options.animationStarted = slider => {
      this._localCtx.emit('animation-started', null, {
        slider: slider
      });
    };
    this._options.slideChanged = slider => {
      this.updateClasses(slider);
      this.updateFadeHeight(slider);
      this._localCtx.emit('slide-change', null, {
        slider: slider
      });
      this.adaptiveHeight(slider);
      if (this._isMounted) this.scrollRevealFix(slider);
      this._pauseVideos();
      if (this._options.playVideos) this._playVideos(slider);
      if (this._options.setSlideCount) this._setSlideCount(slider);
      this._doSlideCSSVars(slider);

      // if (this._options.asNavFor && this._parentSlider) {
      //   let parentSlider = this._parentSlider._slider
      //   console.log(this._slider)
      //   const next = this._slider.track.details.rel || 0
      //   parentSlider.moveToIdx(Math.min(parentSlider.track.details.maxIdx, next))
      // }
    };
    this._options.animationEnded = slider => {
      if (this._options.namespace) {
        this._ctx.emit('keen-slider:change', {
          namespace: this._options.namespace,
          activeSlide: slider.track.details.rel
        });
      }
      if (this._options.asNavFor && this._parentSlider) {
        let parentSlider = this._parentSlider._slider;
        const next = this._slider.track.details.rel || 0;
        parentSlider.moveToIdx(Math.min(parentSlider.track.details.maxIdx, next));
      }
    };
    this._options.created = slider => {
      this._elem.classList.add('keen-slider--ready');
      this.updateClasses(slider);
      this.updateFadeHeight(slider);
      this.adaptiveHeight(slider);
      this._doSlideCSSVars(slider);
      if (this._options.autoplay) this._setupAutoplay(slider);
      if (this._options.autoplayWhenVisibleOnly) this._doAutoplayOnScroll();
      if (this._options.alignArrowsTo) this.alignArrows();
      if (this._options.arrowKeyNavigation) this._addArrowKeyEvents();
      if (this._options.playVideos) this._playVideos(slider);
      if (this._options.setSlideCount) this._setSlideCount(slider);
      if (this._options.focusOnSelect) this.focusOnSelect(slider);
      window.addEventListener('resize', e => {
        this.updateFadeHeight();
        this.adaptiveHeight();
        if (this._options.alignArrowsTo) {
          _lib_Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].nextFrame(() => {
            this.alignArrows();
          });
        }
      }, {
        passive: true
      });
    };
    this._options.dragStarted = () => {
      this.shouldAutoplay = false;
    };
    this._options.dragEnded = () => {
      this.shouldAutoplay = true;
    };
    if (this._options.fade) {
      this._options.detailsChanged = slider => this.fader(slider);
      this._options.renderMode = 'custom';
    }
    this._slider = new keen_slider__WEBPACK_IMPORTED_MODULE_3__["default"](this._elem, this._options);
    if (this._prevArrow) this._prevArrow.addEventListener('click', e => this.goToPrev(e));
    if (this._nextArrow) this._nextArrow.addEventListener('click', e => this.goToNext(e));
    for (let dot of this._dots) {
      dot.addEventListener('click', e => {
        e.preventDefault();
        this.goToSlide(Number(dot.dataset.dot));
        if (this._parentSlider) {
          this._parentSlider.goToSlide(Number(dot.dataset.dot));
        }
      });
    }
    this._isMounted = true;
    if (this._options.triggerOnMount) {
      this._ctx.emit(this._options.triggerOnMount);
    }
  }
  focusOnSelect() {
    let slider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._slider;
    for (let [index, slide] of this._slides.entries()) {
      slide.addEventListener('click', e => {
        this.goToSlide(index);
      });
    }
  }
  _setSlideCount() {
    let slider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._slider;
    let slideCountParentElem = document.querySelector(this._options.setSlideCount);
    let totalElem = slideCountParentElem.querySelector('[data-slide-total]');
    let currentElem = slideCountParentElem.querySelector('[data-slide-current]');
    totalElem.innerHTML = slider.details().size;
    currentElem.innerHTML = slider.details().relativeSlide + 1;
    if (this.isAtEnd(slider) && slider.details().relativeSlide == 0) {
      slideCountParentElem.classList.add('hide');
    }
  }
  unmount() {
    if (this._slider) {
      this._slider.destroy();
    }
    if (this._navContainer && this._navContainer.parentNode) {
      this._navContainer.parentNode.removeChild(this._navContainer);
    }
    this._elem.classList.remove('keen-slider');
    for (let elem of this._elem.children) {
      elem.classList.remove('keen-slider__slide');
      elem.classList.remove('fader-slide');
      elem.removeAttribute('style');
    }
    this._elem.style.height = '';
  }
  _setupAutoplay(slider) {
    if (!this._options.autoplay) {
      clearTimeout(this.autoplayTimeout);
      return false;
    }
    this.shouldAutoplay = true;
    this.shouldAutoplayVisible = true;
    if (this._options.pauseAutoplayOnHover) {
      this._elem.addEventListener('mouseover', e => {
        this.shouldAutoplay = false;
        clearTimeout(this.autoplayTimeout);
      });
      this._elem.addEventListener('mouseout', e => {
        this.shouldAutoplay = true;
        this.autoplay();
      });
    }
    this.autoplay();
    slider.on('dragStarted', () => {
      if (this.autoplayTimeout) clearTimeout(this.autoplayTimeout);
    });
    slider.on('animationEnded', () => {
      this.autoplay();
    });
    slider.on('updated', () => {
      this.autoplay();
    });
  }
  autoplay() {
    clearTimeout(this.autoplayTimeout);
    this.autoplayTimeout = setTimeout(() => {
      if (!this.shouldAutoplay || !this.shouldAutoplayVisible) return;
      if (this._slider) {
        if (this.isAtEnd() && !this._options.loop) {
          this.goToSlide(0);
        } else {
          this._slider.next();
        }
      }
    }, this._options.autoplaySpeed);
  }
  _doAutoplayOnScroll() {
    if (!this._options.autoplay) return false;
    let visibleCheck = () => {
      if (_lib_Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].isInViewport(this._elem) && this.shouldAutoplayVisible == false) {
        this.shouldAutoplayVisible = true;
        this.autoplay();
      } else {
        this.shouldAutoplayVisible = false;
        if (this.autoplayTimeout) clearTimeout(this.autoplayTimeout);
      }
    };
    window.addEventListener('scroll', e => {
      visibleCheck();
    }, {
      passive: true
    });
    visibleCheck();
  }
  _doSlideCSSVars() {
    let slider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._slider;
    let slide = this.getActiveSlideElem(slider);
    if (slide && slide.dataset.slideCssVars) {
      let varArr = JSON.parse(slide.dataset.slideCssVars);
      for (let cssVar of varArr) {
        let toSetOn = document.querySelector(cssVar.onElem);
        for (let classStr of toSetOn.classList) {
          if (classStr.includes(cssVar.class.replace('[value]', ''))) {
            toSetOn.classList.remove(classStr);
          }
        }
        if (toSetOn) {
          toSetOn.classList.add(cssVar.class.replace('[value]', cssVar.value));
        }
      }
    }
  }
  _addArrowKeyEvents() {
    document.addEventListener('keydown', e => {
      let ev = e || window.event;
      if (ev.keyCode === 37) {
        // left arrow
        this._slider.prev();
      } else if (ev.keyCode === 39) {
        // right arrow
        this._slider.next();
      }
    });
  }
  _createArrows() {
    var e = document.createElement('ul');
    e.classList.add('keen-nav');
    e.setAttribute('data-keen-nav', true);
    e.innerHTML = `
        <li>
          <button data-keen-prev class="keen-arrow-prev keen-arrow" aria-label="Previous Slide">
            <span class="keen-arrow-inner">
              ${this._options.arrowSvg || ''}
            </span>
          </button>
        </li>
        <li>
          <button data-keen-next class="keen-arrow-next keen-arrow" aria-label="Next Slide">
            <span class="keen-arrow-inner">
              ${this._options.arrowSvg || ''}
            </span>
          </button>
        </li>
    `;
    this._navContainer = e;
    this._prevArrow = this._navContainer.querySelector('[data-keen-prev]');
    this._nextArrow = this._navContainer.querySelector('[data-keen-next]');
    if (this._options.appendArrows) {
      let toAppend = document.querySelector(this._options.appendArrows);
      if (toAppend) toAppend.appendChild(e);
    } else {
      this._elem.appendChild(e);
    }
  }
  _createDots() {
    var e = document.createElement('ul');
    e.classList.add('keen-dots');
    e.setAttribute('data-keen-dots', true);
    let dotsToMake = Math.ceil(this._slides.length / this._slidesPerView);
    for (let i = 0; i < dotsToMake; i++) {
      e.innerHTML += `
        <li>
          <button data-dot='${i * this._slidesPerView}' aria-label="Slider dot"></button>
        </li>
      `;
    }
    this._elem.classList.add('keen--dotted');
    this._elem.appendChild(e);
  }
  _playVideos() {
    let slider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._slider;
    this._pauseVideos();
    _lib_Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].nextFrame(() => {
      let active = this.getActiveSlideElem();
      let activeVideo = active.querySelector('video');
      if (activeVideo) {
        if (activeVideo.hasAttribute('[data-lazy]') && !activeVideo.classList.contains('loaded')) {
          activeVideo.addEventListener('ffc--loaded', e => {
            console.log('loaded Event');
            activeVideo.play();
          });
        } else {
          activeVideo.play();
        }
      }
    });
  }
  _pauseVideos() {
    let videos = this._elem.querySelectorAll('video');
    for (let video of videos) {
      video.pause();
    }
  }
  fader() {
    let slider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._slider;
    for (let [index, slide] of slider.slides.entries()) {
      slide.style.opacity = slider.track.details.slides[index].portion;
    }
  }
  goToSlide(index) {
    let dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (!this._slider) return;
    let duration = dontAnimate ? 0 : this._options.duration;
    let nearest = false;

    // if (this._options.loop && this._slider.track.details.slides.length > 2) {
    //   nearest = true
    // }

    this._slider.moveToIdx(index, nearest, duration);
    for (let dot of this._dots) {
      dot.classList.remove('active');
      if (Number(dot.dataset.dot) === index) {
        dot.classList.add('active');
      }
    }
  }
  goToPrev(e) {
    e.preventDefault();
    this._slider.prev();
  }
  goToNext(e) {
    e.preventDefault();
    this._slider.next();
  }
  scrollRevealFix() {
    for (let slide of this._slides) {
      if (slide.hasAttribute('data-sr-id') || slide.hasAttribute('data-reveal')) {
        slide.style.removeProperty('opacity');
        slide.style.removeProperty('transition');
        slide.style.removeProperty('visibility');
        slide.removeAttribute('data-sr-id');
        slide.removeAttribute('data-reveal');
      }
    }
  }
  getActiveSlideElem() {
    let slider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._slider;
    let slideIndex = slider.track.details.rel;
    for (let [index, slide] of this._slides.entries()) {
      if (index === slideIndex) {
        return slide;
      }
    }
    return false;
  }
  adaptiveHeight() {
    let slider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._slider;
    if (!this._options.adaptiveHeight || !slider) return false;
    this._elem.classList.add('keen--adaptive-height');
    _lib_Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].nextFrame(() => {
      let slide = slider.track.details.rel;
      let height = 0;
      height += parseFloat(getComputedStyle(this._elem).paddingBottom);
      height += parseFloat(getComputedStyle(this._elem).paddingTop);
      let activeSlide = this.getActiveSlideElem(slider);
      if (!activeSlide) return;
      height += activeSlide.clientHeight;
      this._elem.style.height = `${height}px`;
    });
  }
  updateFadeHeight() {
    let slider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._slider;
    if (!this._options.fade || !slider) return false;
    let slide = slider.track.details.rel;
    let height = 0;
    height += parseFloat(getComputedStyle(this._elem).paddingBottom);
    height += parseFloat(getComputedStyle(this._elem).paddingTop);
    let activeSlide = this.getActiveSlideElem(slider);
    if (!activeSlide) return;
    height += activeSlide.getBoundingClientRect().height;
    this._elem.style.height = `${height}px`;
    if (!this._elem.classList.contains('fade-slider')) {
      this._elem.classList.add('fade-slider');
    }
  }
  alignArrows() {
    if (!this._options.alignArrowsTo || !this._navContainer) return false;
    let elem = this._elem.querySelector(this._options.alignArrowsTo);
    this._navContainer.style.top = `${elem.clientHeight / 2}px`;
  }
  updateClasses(slider) {
    if (!slider) return false;
    let slide = slider.track.details.rel;
    let maxSlides = slider.track.details.slides.length;
    let perView = this._slidesPerView;
    let endSlide = slide + perView;
    let canSlide = perView !== maxSlides;
    if (this._prevArrow && !this._options.loop) {
      if (slide === 0 || !canSlide) {
        this._prevArrow.setAttribute('disabled', 'disabled');
      } else {
        this._prevArrow.removeAttribute('disabled');
      }
    }
    if (this._nextArrow && !this._options.loop) {
      if (this.isAtEnd(slider) || !canSlide) {
        this._nextArrow.setAttribute('disabled', 'disabled');
      } else {
        this._nextArrow.removeAttribute('disabled');
      }
    }
    let activeSlide = this.getActiveSlideElem(slider);
    for (let slide of this._slides) {
      slide.classList.remove('active');
    }
    if (activeSlide) {
      activeSlide.classList.add('active');
    }
    if (this._dots) {
      for (let dot of this._dots) {
        dot.classList.remove('active');
        if (Number(dot.dataset.dot) === slide) {
          dot.classList.add('active');
        }
      }
    }
    let idx = slider.track.details.maxIdx;
    let totalSlides = idx === Infinity ? maxSlides : idx + 1;
    this._elem.style.setProperty('--current-slide', slide + 1);
    this._elem.style.setProperty('--total-slides', totalSlides);
    if (this._options.progressSelector) {
      let progressElem = document.querySelector(this._options.progressSelector);
      if (progressElem) {
        progressElem.style.setProperty('--current-slide', slide + 1);
        progressElem.style.setProperty('--total-slides', totalSlides);
        if (totalSlides === 1) {
          progressElem.classList.add('hide');
        }
      }
    }
  }
  isAtEnd() {
    let slider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._slider;
    let slide = slider.track.details.rel;
    let maxSlides = slider.track.details.slides.length;
    let perView = this._slidesPerView;
    let endSlide = slide + Math.floor(perView);
    return endSlide >= maxSlides;
  }
  refresh() {
    return this._slider.refresh();
  }
  resize() {
    return this._slider.resize();
  }
  _convertOldOptions() {
    if (this._options.slidesPerView) {
      this._options.slides = this._options.slides || {};
      this._options.slides.perView = this._options.slidesPerView;
      delete this._options.slidesPerView;
    }
    if (this._options.spacing) {
      this._options.slides.spacing = this._options.spacing;
    }
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/KeenSliderNav.js":
/*!***********************************************************!*\
  !*** ./src/resources/scripts/components/KeenSliderNav.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KeenSliderNav)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

class KeenSliderNav extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._mainSlider = this._theme.getComponent(this._options.parentSlider);
  }
  mount() {
    for (let [index, item] of this._elem.querySelectorAll('.keen-slider__nav-item').entries()) {
      item.addEventListener('click', e => {
        this._elem.querySelectorAll('.keen-slider__nav-item').forEach(element => {
          element == item ? element.classList.add('is-active') : element.classList.remove('is-active');
        });
        this.goToSlide(index);
      });
    }
    this._ctx.on('keen-slider:change', payload => {
      this._elem.querySelectorAll('.keen-slider__nav-item').forEach(item => {
        if (Number(item.dataset.dot) === payload.activeSlide) {
          item.classList.add('is-active');
        } else {
          item.classList.remove('is-active');
        }
      });
    });
  }
  goToSlide(index) {
    this._mainSlider.component.goToSlide(index);
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/LazyLoad.js":
/*!******************************************************!*\
  !*** ./src/resources/scripts/components/LazyLoad.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LazyLoadComp)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vanilla-lazyload */ "./node_modules/vanilla-lazyload/dist/lazyload.min.js");
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vanilla_lazyload__WEBPACK_IMPORTED_MODULE_1__);


class LazyLoadComp extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._options = {
      ...{
        elements_selector: '[data-lazy]',
        callback_loaded: e => {
          if (e.parentNode.nodeName === 'PICTURE') {
            e.parentNode.classList.add('loaded');
          }
          if (e.nodeName === 'VIDEO') {
            this._ctx.emit('radiant--video-loaded', null, e);
          }
        },
        callback_error: e => {
          if (e.parentNode.nodeName === 'PICTURE') {
            e.parentNode.classList.add('error');
          }
        },
        threshold: 500
      },
      ...this._options
    };
    this._lazyLoad = null;
  }
  mount() {
    this._lazyLoad = new (vanilla_lazyload__WEBPACK_IMPORTED_MODULE_1___default())(this._options);
    this._ctx.on('radiant--lazy-load-update', e => {
      this._lazyLoad.update();
    });
    this._ctx.on('radiant--lazy-load-elem', (state, elem) => {
      vanilla_lazyload__WEBPACK_IMPORTED_MODULE_1___default().load(elem, this._options);
    });
    document.addEventListener('radiant--lazy-load-update', e => {
      this._lazyLoad.update();
    });
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/LazyLoadTrigger.js":
/*!*************************************************************!*\
  !*** ./src/resources/scripts/components/LazyLoadTrigger.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LazyLoadTrigger)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

class LazyLoadTrigger extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
  }
  mount() {
    if (this._options.length) {
      for (let option of this._options) {
        this._optionLogic(option);
      }
    } else {
      this._optionLogic(this._options);
    }
  }
  _optionLogic(option) {
    if (!option.on) {
      option.on = 'click';
    }
    if (option.whenOutside) {
      document.addEventListener(option.on, e => {
        let clickIsInside = this._elem.contains(e.target) || this._elem === e.target;
        let toExclude = document.querySelectorAll(option.whenOutsideExcept);
        let hasClickedExclude = Array.from(toExclude).some(elem => elem.contains(e.target) || elem === e.target);
        if (clickIsInside || hasClickedExclude) return false;
        this._eventLogic(option, e);
      }, option.preventDefault ? {
        passive: false
      } : {
        passive: true
      });
    } else {
      this._eventListener = e => {
        this._eventLogic(option, e);
      };
      this._elem.addEventListener(option.on, this._eventListener, option.preventDefault ? {
        passive: false
      } : {
        passive: true
      });
    }
  }
  _lazyLoadElem(option, elem) {
    this._ctx.emit('radiant--lazy-load-elem', null, elem);
    if (this._eventListener) {
      this._elem.removeEventListener(option.on, this._eventListener);
    }
  }
  _eventLogic(option, e) {
    if (option.onlyThisElem && e.target !== this._elem) {
      return false;
    }
    if (option.preventDefault) {
      e.preventDefault();
    }
    let elem = null;
    if (option.target.includes('closest:')) {
      let parentSelector = option.target.split('closest:')[1].trim();
      if (option.subTarget) {
        elem = this._elem.closest(parentSelector).querySelector(option.subTarget);
      } else {
        elem = this._elem.closest(parentSelector);
      }
      this._lazyLoadElem(option, elem);
    } else if (option.target === 'this') {
      elem = this._elem;
      if (option.subTarget) {
        elem = this._elem.querySelector(option.subTarget);
      }
      this._lazyLoadElem(option, elem);
    } else {
      let targets = document.querySelectorAll(option.target);
      for (let target of targets) {
        this._lazyLoadElem(option, target);
      }
    }
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/LoadMore.js":
/*!******************************************************!*\
  !*** ./src/resources/scripts/components/LoadMore.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoadMore)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


class LoadMore extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._loadMoreContainer = this._elem.querySelector('[data-load-more-container]');
    this._loadMoreTriggerContainer = this._elem.querySelector('[data-load-more-trigger-container]');
    this._loadMoreTrigger = this._loadMoreTriggerContainer ? this._loadMoreTriggerContainer.querySelector('[data-load-more-trigger]') : null;
    this._loadPreviousTriggerContainer = this._elem.querySelector('[data-load-previous-trigger-container]');
    this._loadPreviousTrigger = this._loadPreviousTriggerContainer ? this._loadPreviousTriggerContainer.querySelector('[data-load-previous-trigger]') : null;
    this._loading = false;
    this._originalText = this._loadMoreTrigger ? this._loadMoreTrigger.innerHTML : '';
    this._pageNumber = this._options.basePage;
    this._currentPage = this._options.basePage;
    this._baseURL = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
  }
  async mount() {
    if (this._loadMoreTrigger) {
      this._loadMoreTrigger.addEventListener('click', e => {
        e.preventDefault();
        this._load(this._loadMoreTrigger, this._loadMoreTriggerContainer, 'next');
      });
    }
    if (this._loadPreviousTrigger) {
      this._loadPreviousTrigger.addEventListener('click', e => {
        e.preventDefault();
        this._load(this._loadPreviousTrigger, this._loadPreviousTriggerContainer, 'previous');
      });
    }
    if (this._options.historyState) {
      requestAnimationFrame(this._trackScroll.bind(this));
    }
    if (this._options.infiniteScroll) {
      this._setupInfiniteScroll();
    }
  }
  async _load(trigger, container, type) {
    if (this._loading) return false;
    this._loading = true;
    container.classList.add('radiant--loading');
    trigger.innerHTML = this._options.loadingText;
    let {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(trigger.getAttribute('href'));
    if (type == 'next') {
      this._pageNumber++;
    } else {
      this._pageNumber--;
    }
    let parser = new DOMParser();
    let html = parser.parseFromString(data, 'text/html');
    let items = html.querySelectorAll('[data-load-more-container] > *');
    let fragment = document.createDocumentFragment();
    for (let item of items) {
      fragment.appendChild(item);
      item.setAttribute('data-page-number', this._pageNumber);
    }
    this._theme.mountComponents(fragment);
    let newLoadMoreTrigger = null;
    if (type === 'next') {
      this._loadMoreContainer.appendChild(fragment);
      newLoadMoreTrigger = html.querySelector('[data-load-more-trigger]');
    } else {
      this._loadMoreContainer.prepend(fragment);
      newLoadMoreTrigger = html.querySelector('[data-load-previous-trigger]');
    }
    if (newLoadMoreTrigger) {
      trigger.setAttribute('href', newLoadMoreTrigger.getAttribute('href'));
    } else {
      container.parentNode.removeChild(container);
    }
    this._loading = false;
    container.classList.remove('radiant--loading');
    trigger.innerHTML = this._originalText;
    this._ctx.emit('radiant--lazy-load-update');
    this._ctx.emit('radiant--quicklink-listen-to', null, this._elem);
  }
  _setupInfiniteScroll() {
    let observer = new IntersectionObserver((entries, observer) => {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          if (this._loadMoreTriggerContainer && entry.target === this._loadMoreTriggerContainer) {
            console.log("LOAD MORE");
            this._load(this._loadMoreTrigger, this._loadMoreTriggerContainer, 'next');
          } else if (this._loadPreviousTriggerContainer && entry.target === this._loadPreviousTriggerContainer) {
            console.log("LOAD PREV");
            this._load(this._loadPreviousTrigger, this._loadPreviousTriggerContainer, 'prev');
          }
        }
      }
    }, {
      threshold: 0,
      rootMargin: "500px"
    });
    if (this._loadMoreTriggerContainer) {
      observer.observe(this._loadMoreTriggerContainer);
    }
    if (this._loadPreviousTriggerContainer) {
      observer.observe(this._loadPreviousTriggerContainer);
    }
  }
  _trackScroll() {
    let firstElemInView = null;
    for (let elem of this._loadMoreContainer.children) {
      if (elem.getBoundingClientRect().top >= 0) {
        firstElemInView = elem;
        break;
      }
    }
    if (firstElemInView) {
      let pageNumber = firstElemInView.getAttribute('data-page-number');
      if (pageNumber && Number(pageNumber) !== this._currentPage) {
        this._currentPage = Number(pageNumber);
        this._updateHistoryState();
      } else if (!pageNumber && this._currentPage !== this._options.basePage) {
        this._currentPage = this._options.basePage;
        this._updateHistoryState();
      }
    }
    requestAnimationFrame(this._trackScroll.bind(this));
  }
  _updateHistoryState() {
    let newurl = `${this._baseURL}?page=${this._currentPage}`;
    window.history.replaceState({
      path: newurl
    }, '', newurl);
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/LockScroll.js":
/*!********************************************************!*\
  !*** ./src/resources/scripts/components/LockScroll.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LockScroll)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");
/* harmony import */ var _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Helpers */ "./src/resources/scripts/lib/Helpers.js");


class LockScroll extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
  }
  async mount() {
    let {
      disableBodyScroll,
      enableBodyScroll,
      clearAllBodyScrollLocks
    } = await __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(__webpack_require__, /*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js"));
    this._disableBodyScroll = disableBodyScroll;
    this._enableBodyScroll = enableBodyScroll;
    this._clearAllBodyScrollLocks = clearAllBodyScrollLocks;
    if (this._options.length) {
      for (let option of this._options) {
        this._optionLogic(option);
      }
    } else {
      this._optionLogic(this._options);
    }
    this._ctx.on('radiant--scroll-lock-elem', (state, data) => {
      this._lockScroll(data);
    });
    this._ctx.on('radiant--clear-all-scroll-locks', (state, data) => {
      this._clearAllBodyScrollLocks();
      let lockedElems = document.querySelectorAll('[data-is-locked="true"]');
      for (let elem of lockedElems) {
        elem.removeAttribute('data-is-locked');
      }
    });
  }
  _optionLogic(option) {
    if (!option.on) {
      option.on = 'click';
    }
    if (option.whenOutside) {
      document.addEventListener(option.on, e => {
        let clickIsInside = this._elem.contains(e.target) || this._elem === e.target;
        let toExclude = document.querySelectorAll(option.whenOutsideExcept);
        let hasClickedExclude = Array.from(toExclude).some(elem => elem.contains(e.target) || elem === e.target);
        let target = document.querySelector(option.target);
        let hasClickedOtherLockScroll = _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].hasParentWithSelector(e.target, '[data-lock-scroll]');
        if (hasClickedOtherLockScroll && !clickIsInside && !hasClickedExclude) {
          target.removeAttribute('data-is-locked');
        }
        if (!target.hasAttribute('data-is-locked')) {
          return false;
        }
        if (clickIsInside || hasClickedExclude) return false;
        this._eventLogic(option, e);
      }, option.preventDefault ? {
        passive: false
      } : {
        passive: true
      });
    } else {
      this._elem.addEventListener(option.on, e => {
        this._eventLogic(option, e);
      }, option.preventDefault ? {
        passive: false
      } : {
        passive: true
      });
    }
  }
  _eventLogic(option, e) {
    if (option.onlyThisElem && e.target !== this._elem) {
      return false;
    }
    if (option.preventDefault) {
      e.preventDefault();
    }
    this._clearAllBodyScrollLocks();
    let target = document.querySelector(option.target);
    if (option.method === 'lockScroll') {
      this._lockScroll(target);
    } else if (option.method === 'toggleScroll') {
      if (!target.hasAttribute('data-is-locked')) {
        this._disableBodyScroll(target, {
          reserveScrollBarGap: true
        });
        target.setAttribute('data-is-locked', true);
      } else {
        this._clearAllBodyScrollLocks();
        target.removeAttribute('data-is-locked');
      }
    } else {
      let lockedElems = document.querySelectorAll('[data-is-locked="true"]');
      for (let elem of lockedElems) {
        elem.removeAttribute('data-is-locked');
      }
    }
  }
  _lockScroll(elem) {
    this._clearAllBodyScrollLocks();
    let lockedElems = document.querySelectorAll('[data-is-locked="true"]');
    for (let elem of lockedElems) {
      elem.removeAttribute('data-is-locked');
    }
    this._disableBodyScroll(elem, {
      reserveScrollBarGap: true
    });
    elem.setAttribute('data-is-locked', true);
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/MegaMenu.js":
/*!******************************************************!*\
  !*** ./src/resources/scripts/components/MegaMenu.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

class MegaMenu extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._options = {
      ...{
        historyState: false
      },
      ...this._options
    };
    this._navItems = this._elem.querySelectorAll('[data-nav-item]');
    this._megaMenus = this._elem.querySelectorAll('[data-mega-menu]');
    this._timeout = null;
  }
  mount() {
    let searchDropdown = document.querySelector('.search-dropdown');
    for (let navItem of this._navItems) {
      navItem.addEventListener('mouseenter', e => {
        if (this._timeout) {
          clearTimeout(this._timeout);
          this._timeout = null;
        }
        for (let megaMenu of this._megaMenus) {
          megaMenu.classList.remove('open');
          let navItem = megaMenu.previousElementSibling;
          navItem.classList.remove('dropdown-open');
        }
        let megaMenu = navItem.nextElementSibling;
        if (megaMenu.hasAttribute('data-mega-menu')) {
          megaMenu.classList.add('open');
          navItem.classList.add('dropdown-open');
        }
      });

      // navItem.addEventListener('mouseleave', (e) => {
      //   this._timeout = setTimeout(() => {
      //     let megaMenu = navItem.nextElementSibling
      //     if (megaMenu.hasAttribute('data-mega-menu')) {
      //       megaMenu.classList.remove('open')
      //       navItem.classList.remove('dropdown-open')
      //     }
      //   }, 500)
      // })

      document.querySelector('.site-header').addEventListener('mouseleave', e => {
        for (let megaMenu of this._megaMenus) {
          megaMenu.classList.remove('open');
          let navItem = megaMenu.previousElementSibling;
          navItem.classList.remove('dropdown-open');
        }
      });
    }
    for (let megaMenu of this._megaMenus) {
      let megaMenuInner = megaMenu.querySelector('[data-mega-menu-inner]');
      megaMenuInner.addEventListener('mouseenter', e => {
        if (this._timeout) {
          clearTimeout(this._timeout);
          this._timeout = null;
        }
        let navItem = megaMenu.previousElementSibling;
        megaMenu.classList.add('open');
        navItem.classList.add('dropdown-open');
      });

      // megaMenuInner.addEventListener('mouseleave', (e) => {
      //   let navItem = megaMenu.previousElementSibling
      //   megaMenu.classList.remove('open')
      //   navItem.classList.remove('dropdown-open')
      // })
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MegaMenu);

/***/ }),

/***/ "./src/resources/scripts/components/MethodCall.js":
/*!********************************************************!*\
  !*** ./src/resources/scripts/components/MethodCall.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MethodCall)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

class MethodCall extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
  }
  mount() {
    if (this._options.length) {
      for (let option of this._options) {
        this._optionLogic(option);
      }
    } else {
      this._optionLogic(this._options);
    }
  }
  _optionLogic(option) {
    this._elem.addEventListener(option.on, async e => {
      if (option.preventDefault) {
        e.preventDefault();
      }
      if (option.onlyThisElem && e.target !== this._elem) {
        return false;
      }
      let comp = this._theme.getComponent(option.componentId).component;
      comp[option.method](...option.args);
    });
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/NumberSelector.js":
/*!************************************************************!*\
  !*** ./src/resources/scripts/components/NumberSelector.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NumberSelector)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

class NumberSelector extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._input = this._elem.querySelector('[data-input]');
    this._minus = this._elem.querySelector('[data-minus]');
    this._plus = this._elem.querySelector('[data-plus]');
    this._max = this._input.getAttribute('max') ? Number(this._input.getAttribute('max')) : null;
    this._min = this._input.getAttribute('min') ? Number(this._input.getAttribute('min')) : null;
  }
  mount() {
    this._input.addEventListener('input', e => {
      let currentValue = Number(this._input.value);
      if (this._min && currentValue < this._min) {
        this._input.value = this._min;
      }
      if (this._max && currentValue > this._max) {
        this._input.value = this._max;
      }
    });
    this._minus.addEventListener('click', e => {
      e.preventDefault();
      let newValue = Number(this._input.value) - 1;
      if (this._min && newValue < this._min) {
        return false;
      }
      this._input.value = newValue;
    });
    this._plus.addEventListener('click', e => {
      e.preventDefault();
      let newValue = Number(this._input.value) + 1;
      if (this._max && newValue > this._max) {
        return false;
      }
      this._input.value = newValue;
    });
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/ObjectFit.js":
/*!*******************************************************!*\
  !*** ./src/resources/scripts/components/ObjectFit.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ObjectFit)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

class ObjectFit extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
  }
  async mount() {
    let objectFitImages = await __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(__webpack_require__, /*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js", 23));
    objectFitImages.default();
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/Product.js":
/*!*****************************************************!*\
  !*** ./src/resources/scripts/components/Product.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");
/* harmony import */ var _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Helpers */ "./src/resources/scripts/lib/Helpers.js");


class Product extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._options = {
      ...{
        historyState: true
      },
      ...this._options
    };
    this._product = this._elem.querySelector('[data-product-json]') ? JSON.parse(this._elem.querySelector('[data-product-json]').innerHTML) : null;
    this._variantOptionTriggers = this._elem.querySelectorAll('[data-variant-option-trigger]');
    this._variant = null;
    this._sellingPlan = null;
    this._masterSelects = this._elem.querySelectorAll('[data-master-select]');
    this._priceWrappers = this._elem.querySelectorAll('[data-product-prices]');
    this._prices = this._elem.querySelectorAll('[data-price]');
    this._priceVaries = this._elem.querySelectorAll('[data-price-varies]');
    this._comparePrices = this._elem.querySelectorAll('[data-compare-price]');
    this._images = this._elem.querySelectorAll('[data-product-image]');
    this._addToCarts = this._elem.querySelectorAll('[data-submit]');
    this._addToCartHTML = Array.from(this._addToCarts).map(elem => {
      let textElem = elem.querySelector('[data-submit-text]') || elem;
      return textElem.innerHTML;
    });
    this._quantityInput = this._elem.querySelector('[data-quantity-input]');
    this._quantitySelects = this._elem.querySelectorAll('[data-quantity]');
    this._variantRadios = this._elem.querySelectorAll('[data-variant-id]');
    this._extraProductsInput = this._elem.querySelector('[data-extra-products]');
    this._extraProductRadios = this._elem.querySelectorAll('[data-extra-product]');
    this._sellingPlanInput = this._elem.querySelector('[data-selling-plan]');
    this._atcAreas = this._elem.querySelectorAll('[data-atc-area]');
    this._oosAreas = this._elem.querySelectorAll('[data-oos-area]');
  }
  mount() {
    if (this._product === null) {
      return false;
    }
    this._variant = this._getVariantFromOptions();
    for (let optionSelector of this._variantOptionTriggers) {
      optionSelector.addEventListener('change', e => {
        this._onSelectChange();
      });
    }
    for (let optionSelector of this._variantRadios) {
      optionSelector.addEventListener('change', e => {
        this._onSelectChange();
      });
    }
    for (let optionSelector of this._masterSelects) {
      optionSelector.addEventListener('change', e => {
        this._onSelectChange();
      });
    }
    for (let optionSelector of this._extraProductRadios) {
      optionSelector.addEventListener('change', e => {
        this._onExtraProductRadioChange();
      });
    }
    for (let quantitySwitch of this._quantitySelects) {
      quantitySwitch.addEventListener('change', e => {
        if (quantitySwitch.checked) {
          this._quantityInput.value = quantitySwitch.dataset.quantity;
        }
      });
    }
    this._onSelectChange();
  }
  _onExtraProductRadioChange() {
    let extraProducts = [];
    for (let radio of this._extraProductRadios) {
      if (radio.checked) {
        let obj = JSON.parse(radio.dataset.extraProduct);
        extraProducts.push({
          id: obj.id,
          quantity: obj.quantity,
          selling_plan: obj.selling_plan
        });
      }
    }
    if (this._extraProductsInput) {
      this._extraProductsInput.value = JSON.stringify(extraProducts);
    }
  }
  _linkedOptions(variant) {
    for (let optionSelector of this._variantOptionTriggers) {
      optionSelector.removeAttribute('disabled');
      for (let prodVariant of this._product.variants) {
        if (prodVariant.option1 === variant.option1 && optionSelector.value === prodVariant.option2 && !prodVariant.available) {
          optionSelector.setAttribute('disabled', 'disabled');
        }
      }
    }
  }
  _onSelectChange() {
    let variant = this._getVariantFromOptions();
    this._updateAddToCartState(variant);
    if (!variant) {
      return;
    }
    this._updateMasterSelect(variant);
    this._updateProductPrices(variant);
    this._switchToVariantImage(variant);
    this._onExtraProductRadioChange();
    this._updateSellingPlan(variant);
    this._updateAtcAreas(variant);
    // this._linkedOptions(variant)
    this._variant = variant;
    if (this._options.historyState) {
      this._updateHistoryState(variant);
    }
  }
  _updateAtcAreas(variant) {
    for (let area of this._atcAreas) {
      if (variant.available) {
        area.classList.remove('hide');
      } else {
        area.classList.add('hide');
      }
    }
    for (let area of this._oosAreas) {
      if (variant.available) {
        area.classList.add('hide');
      } else {
        area.classList.remove('hide');
      }
    }
  }
  _updateSellingPlan(variant) {
    if (!this._sellingPlanInput) return false;
    this._sellingPlanInput.value = '';
    this._sellingPlan = null;
    if (variant.selling_plan_allocations.length > 0) {
      this._sellingPlan = variant.selling_plan_allocations[0].selling_plan_id;
      this._sellingPlanInput.value = this._sellingPlan;
    }
  }
  _updateHistoryState(variant) {
    if (!history.replaceState || !variant) {
      return;
    }
    let newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?variant=${variant.id}`;
    if (this._sellingPlan) {
      newurl += `&selling_plan=${this._sellingPlan}`;
    }
    window.history.replaceState({
      path: newurl
    }, '', newurl);
  }
  _updateAddToCartState(variant) {
    if (!variant && this._product.available) {
      for (let addToCart of this._addToCarts) {
        addToCart.setAttribute('disabled', 'disabled');
        let addToCartText = addToCart.querySelector('[data-submit-text]') || addToCart;
        addToCartText.innerHTML = this._ctx.getState().locale.makeASelection;
      }
      return;
    }
    if (!variant) {
      return;
    }
    if (variant.available) {
      for (let [i, addToCart] of this._addToCarts.entries()) {
        addToCart.removeAttribute('disabled');
        let addToCartText = addToCart.querySelector('[data-submit-text]') || addToCart;
        addToCartText.innerHTML = this._addToCartHTML[i];
      }
    } else {
      for (let addToCart of this._addToCarts) {
        addToCart.setAttribute('disabled', 'disabled');
        let addToCartText = addToCart.querySelector('[data-submit-text]') || addToCart;
        addToCartText.innerHTML = this._ctx.getState().locale.soldOut;
      }
    }
  }
  _switchToVariantImage(variant) {
    for (let productImage of this._images) {
      if (productImage.dataset.productImage) {
        let idArray = productImage.dataset.productImage.split(',');
        if (idArray.includes(variant.id.toString())) {
          let mainSlider = this._theme.getComponent('mainProductSlider');
          if (mainSlider) {
            mainSlider.component.goToSlide(productImage.dataset.index);
          }
        }
      }
    }
  }
  _updateProductPrices(variant) {
    for (let varies of this._priceVaries) {
      varies.classList.add('hide');
    }
    for (let productPrice of this._prices) {
      if (variant.compare_at_price > variant.price) {
        productPrice.classList.add('on-sale');
      } else {
        productPrice.classList.remove('on-sale');
      }
      productPrice.innerHTML = this._formatMoney(variant.price);
    }
    for (let productComparePrice of this._comparePrices) {
      if (variant.compare_at_price > variant.price) {
        productComparePrice.classList.remove('hide');
        productComparePrice.innerHTML = this._formatMoney(variant.compare_at_price);
      } else {
        productComparePrice.classList.add('hide');
        productComparePrice.innerHTML = '';
      }
    }
  }
  _formatMoney(price) {
    return _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].formatMoney(price, this._ctx.getState());
  }
  _updateMasterSelect(variant) {
    for (let originalSelector of this._masterSelects) {
      originalSelector.value = variant.id;
    }
  }
  _getCurrentOptions() {
    let currentOptions = [];
    for (let optionSelector of this._variantOptionTriggers) {
      let type = optionSelector.getAttribute('type');
      let currentOption = {};
      let alreadyDone = false;
      for (let option of currentOptions) {
        if (option.index === optionSelector.dataset.index) {
          alreadyDone = true;
        }
      }
      if (alreadyDone) continue;
      if (type === 'radio' || type === 'checkbox') {
        if (optionSelector.checked) {
          currentOption.value = optionSelector.value;
          currentOption.index = optionSelector.dataset.index;
          currentOptions.push(currentOption);
        } else {
          currentOptions.push(false);
        }
      } else {
        currentOption.value = optionSelector.value;
        currentOption.index = optionSelector.dataset.index;
        currentOptions.push(currentOption);
      }
    }
    currentOptions = _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].compact(currentOptions);
    return currentOptions;
  }
  _getVariantFromOptions() {
    let selectedValues = this._getCurrentOptions();
    let variants = this._product.variants;
    let found = false;
    for (let radio of this._variantRadios) {
      if (radio.checked) {
        return this._product.variants.find(variant => `${variant.id}` === radio.dataset.variantId);
      }
    }
    if (selectedValues.length > 0) {
      for (let variant of variants) {
        var satisfied = true;
        for (let option of selectedValues) {
          if (satisfied) {
            satisfied = option.value === variant[option.index];
          }
        }
        if (satisfied) {
          found = variant;
        }
      }
    }
    if (!found) {
      return this._product.variants.find(variant => `${variant.id}` === `${this._masterSelects[0].value}`);
    }
    return found || null;
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/Quicklink.js":
/*!*******************************************************!*\
  !*** ./src/resources/scripts/components/Quicklink.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Quicklink)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

class Quicklink extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._options = {
      ...{
        limit: 50,
        ignores: [url => {
          let toTest = url.replace(document.location.origin, '');
          let toIgnore = ['/account/logout', '/account/login', '/cart/clear', '/cart/add', '/cart/update', '/cart/change', '/pages/privacy-policy', '/pages/policies', '/#swym-wishlist', '/search', '/#', '/#main', '/checkout'];
          let ignoring = toIgnore.some(urlToIgnore => toTest.includes(urlToIgnore));
          return ignoring;
        }]
      },
      ...this._options
    };
  }
  async mount() {
    let quicklink = await __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(__webpack_require__, /*! quicklink */ "./node_modules/quicklink/dist/quicklink.mjs"));
    window.addEventListener('load', async e => {
      this._options.el = this._elem;
      quicklink.listen(this._options);
    });
    this._ctx.on('radiant--quicklink-listen-to', (state, elem) => {
      console.log(elem);
      this._options.el = elem;
      quicklink.listen(this._options);
    });
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/ScrollTo.js":
/*!******************************************************!*\
  !*** ./src/resources/scripts/components/ScrollTo.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScrollTo)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");
/* harmony import */ var _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Helpers */ "./src/resources/scripts/lib/Helpers.js");


class ScrollTo extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._options = {
      ...{
        offset: 0
      },
      ...this._options
    };
    this._offset = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));
  }
  mount() {
    let hash = this._elem.getAttribute('href') ? this._elem.getAttribute('href') : '#';
    if (!this._options.target) {
      this._options = {
        on: "click",
        target: hash,
        preventDefault: true,
        offset: 0
      };
    }
    if (this._options.length) {
      for (let option of this._options) {
        this._optionLogic(option);
        if (window.location.hash === hash) {
          this._eventLogic(option);
        }
      }
    } else {
      this._optionLogic(this._options);
      if (window.location.hash === hash) {
        this._eventLogic(this._options);
      }
    }
  }
  _optionLogic(option) {
    this._elem.addEventListener(option.on, async e => {
      if (option.onlyThisElem && e.target !== this._elem) {
        return false;
      }
      if (option.preventDefault) {
        e.preventDefault();
      }
      this._eventLogic(option);
    }, option.preventDefault ? {
      passive: false
    } : {
      passive: true
    });
  }
  _eventLogic(option) {
    let target = document.querySelector(option.target);
    let scrolltToTop = window.pageYOffset + target.getBoundingClientRect().top - this._offset - this._options.offset;
    window.scrollTo({
      top: scrolltToTop,
      behavior: 'smooth'
    });
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/SetCSSVar.js":
/*!*******************************************************!*\
  !*** ./src/resources/scripts/components/SetCSSVar.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetCSSVar)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

class SetCSSVar extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
  }
  mount() {
    if (this._options.length) {
      for (let option of this._options) {
        this._optionLogic(option);
        if (option.updateOnResize === true) {
          window.addEventListener('resize', e => {
            this._optionLogic(option);
          }, {
            passive: true
          });
        }
        if (option.updateOnCtx) {
          this._ctx.on(option.updateOnCtx, e => {
            this._optionLogic(option);
          }, {
            passive: true
          });
        }
      }
    } else {
      this._optionLogic(this._options);
      if (this._options.updateOnResize === true) {
        window.addEventListener('resize', e => {
          this._optionLogic(this._options);
        }, {
          passive: true
        });
      }
    }
  }
  _optionLogic(option) {
    let toGet = document.querySelector(option.selector);
    if (!toGet) return;
    let dimensions = toGet.getBoundingClientRect();
    let setOn = [document.documentElement];
    if (option.setOn) {
      setOn = document.querySelectorAll(option.setOn);
    }
    for (let toSet of setOn) {
      toSet.style.setProperty(option.var, `${Math.round(dimensions[option.get])}px`);
    }
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/SideCart.js":
/*!******************************************************!*\
  !*** ./src/resources/scripts/components/SideCart.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

class SideCart extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._scrollArea = this._elem.querySelector('[data-side-cart-items]');
  }
  async mount() {
    this._ctx.on('show-side-cart', async () => {
      this.showSideCart();
    });
    let params = new URLSearchParams(window.location.search);
    if (params.has('show-cart')) {
      this.showSideCart();
    }
    this._doEditorListeners();
  }
  showSideCart() {
    this._scrollArea = this._elem.querySelector('[data-side-cart-items]');
    this._elem.classList.add('shown');
    this._ctx.on('cart-item-added--refreshed', (state, data) => {
      this._scrollArea = this._elem.querySelector('[data-side-cart-items]');
      if (this._elem.classList.contains('shown')) {
        this._ctx.emit('radiant--scroll-lock-elem', null, this._scrollArea);
      }
    });
  }
  _doEditorListeners() {
    document.addEventListener('shopify:section:select', e => {
      if (e.target.contains(this._elem)) {
        this._elem.classList.add('shown');
      }
    });
    document.addEventListener('shopify:section:deselect', e => {
      if (e.target.contains(this._elem)) {
        this._elem.classList.remove('shown');
      }
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideCart);

/***/ }),

/***/ "./src/resources/scripts/components/SlideToggle.js":
/*!*********************************************************!*\
  !*** ./src/resources/scripts/components/SlideToggle.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SlideToggle)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");
/* harmony import */ var _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Helpers */ "./src/resources/scripts/lib/Helpers.js");


class SlideToggle extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
  }
  mount() {
    if (this._options.length) {
      for (let option of this._options) {
        this._optionLogic(option);
      }
    } else {
      this._optionLogic(this._options);
    }
  }
  _optionLogic(option) {
    this._elem.addEventListener(option.on, async e => {
      if (option.preventDefault) {
        e.preventDefault();
      }
      let target = document.querySelector(option.selector);
      let method = null;
      if (option.method === 'slideDown') {
        method = '_slideDown';
      } else if (option.method === 'slideUp') {
        method = '_slideUp';
      } else {
        method = this._elem.classList.contains('open') ? '_slideUp' : '_slideDown';
      }
      if (option.useQueue) {
        this._ctx.getState().eventQueue.add(async () => {
          return await this[method](target);
        });
      } else {
        await this[method](target);
      }
    });
  }
  _slideDown(elem) {
    return new Promise((resolve, reject) => {
      elem.style.maxHeight = 'none';
      let scrollHeight = elem.scrollHeight;
      elem.style.maxHeight = '0px';
      this._elem.classList.add('open');
      elem.dataset.transitioning = true;
      let openEvent = e => {
        if (e.propertyName === 'max-height') {
          elem.dataset.transitioning = false;
          elem.style.maxHeight = 'none';
          elem.classList.add('open');
          elem.removeEventListener('transitionend', openEvent, false);
          resolve();
        }
      };
      elem.addEventListener('transitionend', openEvent, false);
      _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].nextFrame(() => {
        elem.style.maxHeight = `${scrollHeight}px`;
      });
    });
  }
  _slideUp(elem) {
    return new Promise((resolve, reject) => {
      elem.style.maxHeight = `${elem.scrollHeight}px`;
      this._elem.classList.remove('open');
      elem.dataset.transitioning = true;
      let closeEvent = e => {
        if (e.propertyName === 'max-height') {
          elem.removeEventListener('transitionend', closeEvent, false);
          elem.dataset.transitioning = false;
          resolve();
        }
      };
      elem.addEventListener('transitionend', closeEvent, false);
      _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].nextFrame(() => {
        elem.style.maxHeight = `0px`;
        elem.classList.remove('open');
      });
    });
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/SlideToggleGroup.js":
/*!**************************************************************!*\
  !*** ./src/resources/scripts/components/SlideToggleGroup.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SlideToggleGroup)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");
/* harmony import */ var _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Helpers */ "./src/resources/scripts/lib/Helpers.js");


class SlideToggleGroup extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._toggleItems = this._elem.querySelectorAll('[data-toggle-item]');
  }
  mount() {
    if (this._options.closeOnOutsideClick && matchMedia('only screen and (min-width: 835px)').matches) {
      document.addEventListener('click', e => {
        let clickIsInside = this._elem.contains(e.target) || this._elem === e.target;
        if (clickIsInside) return false;
        for (let item of this._toggleItems) {
          let elemToSlide = item.querySelector('[data-toggle-elem]');
          if (item.classList.contains('open')) {
            _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].slideUp(elemToSlide, item);
          }
        }
      }, {
        passive: true
      });
    }
    for (let item of this._toggleItems) {
      let trigger = item.querySelector('[data-toggle-trigger]');
      trigger.addEventListener('click', e => {
        e.preventDefault();
        let elemToSlide = item.querySelector('[data-toggle-elem]');
        if (elemToSlide.dataset.transitioning === 'true') {
          return false;
        }
        if (item.classList.contains('open')) {
          _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].slideUp(elemToSlide, item);
        } else {
          _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].slideDown(elemToSlide, item);
        }
        let otherToggles = item.parentNode.querySelectorAll('[data-toggle-item]');
        for (let otherItem of otherToggles) {
          if (otherItem !== item && otherItem.classList.contains('open') && otherItem.dataset.transitioning !== 'true') {
            let elemToSlide = otherItem.querySelector('[data-toggle-elem]');
            _lib_Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].slideUp(elemToSlide, otherItem);
          }
        }
      });
    }
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/SlidingMenu.js":
/*!*********************************************************!*\
  !*** ./src/resources/scripts/components/SlidingMenu.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SlidingMenu)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

class SlidingMenu extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._slidingArea = this._elem.querySelector('[data-moving-container]');
    this._navItems = this._elem.querySelectorAll('[data-nav-item]');
    this._width = this._elem.getBoundingClientRect().width;
    this._height = this._elem.getBoundingClientRect().height;
    this._currentLevel = 1;
  }
  mount() {
    for (let navItem of this._navItems) {
      let navLinks = navItem.querySelectorAll('[data-level]');
      for (let link of navLinks) {
        let linkLevel = parseInt(link.dataset.level);
        let menuArea = link.dataset.menuArea;
        link.addEventListener('click', e => {
          e.preventDefault();
          if (menuArea) {
            this.showMenu(linkLevel, menuArea);
          }
          this.goToLevel(linkLevel);
        });
      }
    }
    let firstItem = this._navItems[0].querySelector('[data-menu-area]');
    this.setWidths();
    this.setHeight(firstItem);
    window.addEventListener('resize', e => {
      this.setWidths();
      this.goToLevel(this._currentLevel);
    }, {
      passive: true
    });
  }
  setWidths() {
    this._width = this._elem.getBoundingClientRect().width;
    this._slidingArea.style.minWidth = `${this._width * 3}px`;
    for (let navItem of this._navItems) {
      navItem.style.width = `${this._width}px`;
    }
  }
  setHeight() {
    let elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._elem;
    this._height = elem.getBoundingClientRect().height + 40;
    this._slidingArea.style.minHeight = `${this._height}px`;
  }
  showMenu(level, menuHandle) {
    let toHide = this._elem.querySelectorAll(`[data-nav-item='${level}'] > nav`);
    let toShow = this._elem.querySelector(`[data-nav-item='${level}'] [data-menu-area='${menuHandle}']`);
    for (let navItem of toHide) {
      navItem.classList.add('hide');
    }
    toShow.classList.remove('hide');
    this.setHeight(toShow);
  }
  goToLevel(level) {
    this._currentLevel = level;
    for (let navItem of this._navItems) {
      navItem.classList.remove('shown');
    }
    if (this._navItems[level - 1]) {
      this._navItems[level - 1].classList.add('shown');
    }
    let activeMenuArea = this._navItems[level - 1].querySelector(`nav[data-menu-area]:not(.hide)`);
    this.setHeight(activeMenuArea);
    this._elem.scrollTo(0, 0);
    let transformAmount = 0 - (level - 1) * this._width;
    if (document.documentElement.dir === 'rtl') {
      transformAmount *= -1;
    }
    let transform = `translateX(${transformAmount}px)`;
    this._slidingArea.style.webkitTransform = transform;
    this._slidingArea.style.MozTransform = transform;
    this._slidingArea.style.msTransform = transform;
    this._slidingArea.style.OTransform = transform;
    this._slidingArea.style.transform = transform;
  }
  reset() {
    this.goToLevel(1);
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/StickyElem.js":
/*!********************************************************!*\
  !*** ./src/resources/scripts/components/StickyElem.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StickyElem)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

let hcSticky = null;
class StickyElem extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
    this._sticky = null;
    this._options = options;
    this._selector = this._options.top;
  }
  async mount() {
    hcSticky = await __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(__webpack_require__, /*! hc-sticky */ "./node_modules/hc-sticky/dist/hc-sticky.js", 23));
    hcSticky = hcSticky.default;
    if (typeof this._selector === 'string') {
      this._options.top = document.querySelector(this._selector).getBoundingClientRect().height;
    }
    this._sticky = new hcSticky(this._elem, this._options);
    if (typeof this._selector === 'string') {
      window.addEventListener('resize', e => {
        this._options.top = document.querySelector(this._selector).getBoundingClientRect().height;
        this._sticky.update(this._options);
      }, {
        passive: true
      });
    }
  }
}

/***/ }),

/***/ "./src/resources/scripts/components/VideoAutoPlay.js":
/*!***********************************************************!*\
  !*** ./src/resources/scripts/components/VideoAutoPlay.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Quicklink)
/* harmony export */ });
/* harmony import */ var _inherited_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inherited/Component */ "./src/resources/scripts/inherited/Component.js");

class Quicklink extends _inherited_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elem, theme, options, ctx) {
    super(elem, theme, options, ctx);
  }
  async mount() {
    if (this._elem.hasAttribute('[data-lazy]') && !this._elem.classList.contains('loaded')) {
      this._elem.addEventListener('ffc--loaded', e => {
        console.log('loaded Event');
        this._elem.play();
      });
    } else {
      this._elem.play();
    }
  }
}

/***/ }),

/***/ "./src/resources/scripts/inherited/Component.js":
/*!******************************************************!*\
  !*** ./src/resources/scripts/inherited/Component.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _lib_Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/Helpers */ "./src/resources/scripts/lib/Helpers.js");

class Component {
  constructor(elem, theme, options, ctx) {
    this._theme = theme;
    this._elem = elem;
    this._ctx = ctx;
    this._options = options;
    this._originalOptions = {
      ...this._options
    };
    this._addedResizeListener = false;
    this._optionsCheck(true);
  }
  _optionsCheck(firstRun) {
    if (Array.isArray(this._options)) return false;
    let newOptions = {
      ...this._originalOptions
    };
    newOptions.usingSettingsFor = 'desktop';
    if (this._originalOptions.responsive && this._originalOptions.responsive.length) {
      for (let optionsObj of this._originalOptions.responsive) {
        if (matchMedia(`only screen and (max-width: ${optionsObj.breakpoint})`).matches) {
          newOptions = {
            ...this._originalOptions,
            ...optionsObj.settings
          };
          newOptions.usingSettingsFor = optionsObj.breakpoint;
        }
      }
    }
    if (firstRun) {
      this._options = newOptions;
    } else if (this._options.usingSettingsFor !== newOptions.usingSettingsFor) {
      this._options = newOptions;
      return true;
    }
    return false;
  }
  reinitOnResize() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (this._addedResizeListener) return;
    if (options) this._originalOptions = options;
    window.addEventListener('resize', e => {
      let changed = this._optionsCheck();
      if (changed) {
        this.unmount();
        this.mount();
        _lib_Helpers__WEBPACK_IMPORTED_MODULE_0__["default"].nextFrame(() => {
          if (typeof this.update === 'function') {
            this.update();
          }
        });
      }
    }, {
      passive: true
    });
    this._addedResizeListener = true;
  }
}

/***/ }),

/***/ "./src/resources/scripts/lib/AjaxApi.js":
/*!**********************************************!*\
  !*** ./src/resources/scripts/lib/AjaxApi.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AjaxApi)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Helpers */ "./src/resources/scripts/lib/Helpers.js");


let endpoints = {
  cart: {
    clear: '/cart/clear.json',
    get: '/cart.json',
    add: '/cart/add.js',
    change: '/cart/change.js',
    update: '/cart/update.js'
  },
  product: {
    get: '/products/[handle].json',
    getCustom: '/products/[handle]?view=json'
  }
};
class AjaxApi {
  static async getCart() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    let rootURL = state ? state.rootURL : '';
    let result = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(rootURL + _Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].getEndpoint(endpoints.cart.get));
    return result.data;
  }
  static async addToCart(options) {
    let state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let rootURL = state ? state.rootURL : '';
    let result = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(rootURL + _Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].getEndpoint(endpoints.cart.add), options);
    return result.data;
  }
  static async changeCart(options) {
    let state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let rootURL = state ? state.rootURL : '';
    let result = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(rootURL + _Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].getEndpoint(endpoints.cart.change), options);
    return result.data;
  }
  static async updateCart(options) {
    let state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let rootURL = state ? state.rootURL : '';
    let result = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(rootURL + _Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].getEndpoint(endpoints.cart.update), options);
    return result.data;
  }
  static async emptyCart(options) {
    let state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let rootURL = state ? state.rootURL : '';
    let result = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(rootURL + _Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].getEndpoint(endpoints.cart.clear), options);
    return result.data;
  }
  static async updateCartItem(id, quantity) {
    let props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    return await AjaxApi.changeCart({
      line: `${id}`,
      quantity: quantity,
      properties: props
    }, state);
  }
  static async removeCartItem(id) {
    return await AjaxApi.updateCartItem(id, 0);
  }
  static async getProduct(handle) {
    let state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let rootURL = state ? state.rootURL : '';
    let endpoint = endpoints.product.get.replace('[handle]', handle);
    let result = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(rootURL + _Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].getEndpoint(endpoint));
    return result.data.product;
  }
  static async getCustomProduct(handle) {
    let state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let rootURL = state ? state.rootURL : '';
    let endpoint = endpoints.product.getCustom.replace('[handle]', handle);
    let result = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(rootURL + _Helpers__WEBPACK_IMPORTED_MODULE_1__["default"].getEndpoint(endpoint), {
      responseType: 'json'
    });
    return typeof result.data === 'object' ? result.data : JSON.parse(result.data);
  }
}

/***/ }),

/***/ "./src/resources/scripts/lib/Helpers.js":
/*!**********************************************!*\
  !*** ./src/resources/scripts/lib/Helpers.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Helpers)
/* harmony export */ });
class Helpers {
  static formatWithDelimiters(number, precision, thousands, decimal) {
    precision = precision || 2;
    thousands = thousands || ',';
    decimal = decimal || '.';
    if (isNaN(number) || number == null) {
      return 0;
    }
    number = (number / 100.0).toFixed(precision);
    const parts = number.split('.');
    const dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
    const centsAmount = parts[1] ? decimal + parts[1] : '';
    return dollarsAmount + centsAmount;
  }
  static isInViewport(elem) {
    var distance = elem.getBoundingClientRect();
    return distance.top >= 0 && distance.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  }
  static hasParentWithSelector(element, selector) {
    if (element.matches(selector)) return element;
    return element.parentElement && Helpers.hasParentWithSelector(element.parentElement, selector);
  }
  static debounce(callback, wait) {
    var _this = this;
    let timeout;
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const context = _this;
      clearTimeout(timeout);
      timeout = setTimeout(() => callback.apply(context, args), wait);
    };
  }
  static getParameterByName(name) {
    let url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  static compact(array) {
    var index = -1;
    var length = array == null ? 0 : array.length;
    var resIndex = 0;
    var result = [];
    while (++index < length) {
      var value = array[index];
      if (value) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  static isAnyPartOfElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
    const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
    return vertInView && horInView;
  }
  static formatMoney(cents, state) {
    let format = state.moneyFormat;
    if (cents === 0) return state.locale.free;
    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }
    let value = '';
    const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    switch (format.match(placeholderRegex)[1]) {
      case 'amount':
        value = Helpers.formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = Helpers.formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = Helpers.formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = Helpers.formatWithDelimiters(cents, 0, '.', ',');
        break;
      case 'amount_no_decimals_with_space_separator':
        value = Helpers.formatWithDelimiters(cents, 0, ' ');
        break;
    }
    return format.replace(placeholderRegex, value).replace(".00", "").replace(',00', '');
  }
  static getSizedImageUrl(src, size) {
    if (size === null || src === null) {
      return src;
    }
    if (size === 'master') {
      return Helpers.removeProtocol(src);
    }
    var match = src.match(/\.(webp|jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
    if (match) {
      var prefix = src.split(match[0]);
      var suffix = match[0];
      return Helpers.removeProtocol(prefix[0] + '_' + size + suffix);
    } else {
      return null;
    }
  }
  static removeProtocol(path) {
    return path.replace(/http(s)?:/, '');
  }
  static getEndpoint(endpoint) {
    if (endpoint.includes('?')) {
      return `${endpoint}&v=${Math.random()}`;
    } else {
      return `${endpoint}?v=${Math.random()}`;
    }
  }
  static nextFrame(callback) {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(callback);
    });
  }
  static slideDown(elem, mainElem) {
    elem.style.maxHeight = 'none';
    let scrollHeight = elem.scrollHeight;
    elem.style.maxHeight = '0px';
    mainElem.classList.add('open');
    elem.classList.add('open');
    elem.dataset.transitioning = true;
    elem.dataset.lastEvent = 'slideDown';
    let openEvent = e => {
      if (e.propertyName === 'max-height' && elem.dataset.lastEvent == 'slideDown') {
        elem.dataset.transitioning = false;
        elem.style.maxHeight = 'none';
        elem.removeEventListener('transitionend', openEvent, false);
      }
    };
    elem.addEventListener('transitionend', openEvent, false);
    Helpers.nextFrame(() => {
      elem.style.maxHeight = `${scrollHeight}px`;
    });
  }
  static slideUp(elem, mainElem) {
    elem.style.maxHeight = `${elem.scrollHeight}px`;
    mainElem.classList.remove('open');
    elem.dataset.transitioning = true;
    elem.dataset.lastEvent = 'slideUp';
    let closeEvent = e => {
      if (e.propertyName === 'max-height' && elem.dataset.lastEvent == 'slideUp') {
        elem.classList.remove('open');
        elem.dataset.transitioning = false;
        elem.removeEventListener('transitionend', closeEvent, false);
      }
    };
    elem.addEventListener('transitionend', closeEvent, false);
    Helpers.nextFrame(() => {
      elem.style.maxHeight = `0px`;
    });
  }
  static handleize(str) {
    str = str.toLowerCase();
    var toReplace = ['"', "'", "\\", "(", ")", "[", "]"];

    // For the old browsers
    for (var i = 0; i < toReplace.length; ++i) {
      str = str.replace(toReplace[i], "");
    }
    str = str.replace(/\W+/g, "-");
    if (str.charAt(str.length - 1) == "-") {
      str = str.replace(/-+\z/, "");
    }
    if (str.charAt(0) == "-") {
      str = str.replace(/\A-+/, "");
    }
    return str;
  }
  static copyToClipboard(str) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
  static pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
}

/***/ }),

/***/ "./src/resources/scripts/lib/Queue.js":
/*!********************************************!*\
  !*** ./src/resources/scripts/lib/Queue.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Queue {
  constructor() {
    this.queue = [];
    this.processing = false;
  }
  onInit() {}
  add(job) {
    this.queue.push(job);
    if (!this.processing) {
      this.process();
    }
  }
  async process() {
    this.processing = true;
    if (this.queue.length === 0) {
      this.processing = false;
      return false;
    } else {
      let job = this.queue.shift();
      await job();
      this.process();
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Queue);

/***/ }),

/***/ "./src/resources/styles/radiant.scss":
/*!*******************************************!*\
  !*** ./src/resources/styles/radiant.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "radiant.css.liquid");

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/countdown-js/index.js":
/*!********************************************!*\
  !*** ./node_modules/countdown-js/index.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


var Countdown = function(){}

Countdown.timer = function(end, onTick, onComplete) {
  var timeLeft = end - new Date();

  var timeAPI = {
    DAYS: 1000 * 60 * 60 * 24,
    HOURS: 1000 * 60 * 60,
    MINUTES: 1000 * 60,
    SECONDS: 1000
  }

  var tick = function() {
    if(timeLeft > 0) {
      var time = timeLeft
      var days = Math.floor(time / (timeAPI.DAYS))
      time %= timeAPI.DAYS
      var hours = Math.floor(time / (timeAPI.HOURS))
      time %= timeAPI.HOURS
      var minutes = Math.floor(time / (timeAPI.MINUTES))
      time %= timeAPI.MINUTES
      var seconds = Math.floor(time / (timeAPI.SECONDS))

      var countdown = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      }
      onTick(countdown)
      timeLeft -= 1000
    }else {
      timeLeft -= 1000
      clearInterval(interval),
      onComplete()
    }
  }

  var interval = setInterval(
    (function(self){
      return function(){
        tick.call(self)
      }
    })(this), 1000
  )

  var getTimeRemaining = function() {
      var time = timeLeft
      var days = Math.floor(time / timeAPI.DAYS)
      time %= timeAPI.DAYS
      var hours = Math.floor(time / timeAPI.HOURS)
      time %= timeAPI.HOURS
      var minutes = Math.floor(time / timeAPI.MINUTES)
      time %= timeAPI.MINUTES
      var seconds = Math.floor(time / timeAPI.SECONDS)

      return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      }
    }

  tick.call(this)

  return {
    abort: function() {
      clearInterval(interval)
    },
    getTimeRemaining: getTimeRemaining
  }
}

module.exports = Countdown;


/***/ }),

/***/ "./node_modules/detect-browser/es/index.js":
/*!*************************************************!*\
  !*** ./node_modules/detect-browser/es/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BotInfo: () => (/* binding */ BotInfo),
/* harmony export */   BrowserInfo: () => (/* binding */ BrowserInfo),
/* harmony export */   NodeInfo: () => (/* binding */ NodeInfo),
/* harmony export */   ReactNativeInfo: () => (/* binding */ ReactNativeInfo),
/* harmony export */   SearchBotDeviceInfo: () => (/* binding */ SearchBotDeviceInfo),
/* harmony export */   browserName: () => (/* binding */ browserName),
/* harmony export */   detect: () => (/* binding */ detect),
/* harmony export */   detectOS: () => (/* binding */ detectOS),
/* harmony export */   getNodeVersion: () => (/* binding */ getNodeVersion),
/* harmony export */   parseUserAgent: () => (/* binding */ parseUserAgent)
/* harmony export */ });
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var BrowserInfo = /** @class */ (function () {
    function BrowserInfo(name, version, os) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.type = 'browser';
    }
    return BrowserInfo;
}());

var NodeInfo = /** @class */ (function () {
    function NodeInfo(version) {
        this.version = version;
        this.type = 'node';
        this.name = 'node';
        this.os = process.platform;
    }
    return NodeInfo;
}());

var SearchBotDeviceInfo = /** @class */ (function () {
    function SearchBotDeviceInfo(name, version, os, bot) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.bot = bot;
        this.type = 'bot-device';
    }
    return SearchBotDeviceInfo;
}());

var BotInfo = /** @class */ (function () {
    function BotInfo() {
        this.type = 'bot';
        this.bot = true; // NOTE: deprecated test name instead
        this.name = 'bot';
        this.version = null;
        this.os = null;
    }
    return BotInfo;
}());

var ReactNativeInfo = /** @class */ (function () {
    function ReactNativeInfo() {
        this.type = 'react-native';
        this.name = 'react-native';
        this.version = null;
        this.os = null;
    }
    return ReactNativeInfo;
}());

// tslint:disable-next-line:max-line-length
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [
    ['aol', /AOLShield\/([0-9\._]+)/],
    ['edge', /Edge\/([0-9\._]+)/],
    ['edge-ios', /EdgiOS\/([0-9\._]+)/],
    ['yandexbrowser', /YaBrowser\/([0-9\._]+)/],
    ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/],
    ['samsung', /SamsungBrowser\/([0-9\.]+)/],
    ['silk', /\bSilk\/([0-9._-]+)\b/],
    ['miui', /MiuiBrowser\/([0-9\.]+)$/],
    ['beaker', /BeakerBrowser\/([0-9\.]+)/],
    ['edge-chromium', /EdgA?\/([0-9\.]+)/],
    [
        'chromium-webview',
        /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
    ],
    ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/],
    ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/],
    ['fxios', /FxiOS\/([0-9\.]+)/],
    ['opera-mini', /Opera Mini.*Version\/([0-9\.]+)/],
    ['opera', /Opera\/([0-9\.]+)(?:\s|$)/],
    ['opera', /OPR\/([0-9\.]+)(:?\s|$)/],
    ['pie', /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
    ['pie', /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
    ['netfront', /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
    ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ['ie', /MSIE\s(7\.0)/],
    ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ['android', /Android\s([0-9\.]+)/],
    ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ['safari', /Version\/([0-9\._]+).*Safari/],
    ['facebook', /FB[AS]V\/([0-9\.]+)/],
    ['instagram', /Instagram\s([0-9\.]+)/],
    ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/],
    ['ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    ['curl', /^curl\/([0-9\.]+)$/],
    ['searchbot', SEARCHBOX_UA_REGEX],
];
var operatingSystemRules = [
    ['iOS', /iP(hone|od|ad)/],
    ['Android OS', /Android/],
    ['BlackBerry OS', /BlackBerry|BB10/],
    ['Windows Mobile', /IEMobile/],
    ['Amazon OS', /Kindle/],
    ['Windows 3.11', /Win16/],
    ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/],
    ['Windows 98', /(Windows 98)|(Win98)/],
    ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/],
    ['Windows XP', /(Windows NT 5.1)|(Windows XP)/],
    ['Windows Server 2003', /(Windows NT 5.2)/],
    ['Windows Vista', /(Windows NT 6.0)/],
    ['Windows 7', /(Windows NT 6.1)/],
    ['Windows 8', /(Windows NT 6.2)/],
    ['Windows 8.1', /(Windows NT 6.3)/],
    ['Windows 10', /(Windows NT 10.0)/],
    ['Windows ME', /Windows ME/],
    ['Windows CE', /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
    ['Open BSD', /OpenBSD/],
    ['Sun OS', /SunOS/],
    ['Chrome OS', /CrOS/],
    ['Linux', /(Linux)|(X11)/],
    ['Mac OS', /(Mac_PowerPC)|(Macintosh)/],
    ['QNX', /QNX/],
    ['BeOS', /BeOS/],
    ['OS/2', /OS\/2/],
];
function detect(userAgent) {
    if (!!userAgent) {
        return parseUserAgent(userAgent);
    }
    if (typeof document === 'undefined' &&
        typeof navigator !== 'undefined' &&
        navigator.product === 'ReactNative') {
        return new ReactNativeInfo();
    }
    if (typeof navigator !== 'undefined') {
        return parseUserAgent(navigator.userAgent);
    }
    return getNodeVersion();
}
function matchUserAgent(ua) {
    // opted for using reduce here rather than Array#first with a regex.test call
    // this is primarily because using the reduce we only perform the regex
    // execution once rather than once for the test and for the exec again below
    // probably something that needs to be benchmarked though
    return (ua !== '' &&
        userAgentRules.reduce(function (matched, _a) {
            var browser = _a[0], regex = _a[1];
            if (matched) {
                return matched;
            }
            var uaMatch = regex.exec(ua);
            return !!uaMatch && [browser, uaMatch];
        }, false));
}
function browserName(ua) {
    var data = matchUserAgent(ua);
    return data ? data[0] : null;
}
function parseUserAgent(ua) {
    var matchedRule = matchUserAgent(ua);
    if (!matchedRule) {
        return null;
    }
    var name = matchedRule[0], match = matchedRule[1];
    if (name === 'searchbot') {
        return new BotInfo();
    }
    // Do not use RegExp for split operation as some browser do not support it (See: http://blog.stevenlevithan.com/archives/cross-browser-split)
    var versionParts = match[1] && match[1].split('.').join('_').split('_').slice(0, 3);
    if (versionParts) {
        if (versionParts.length < REQUIRED_VERSION_PARTS) {
            versionParts = __spreadArray(__spreadArray([], versionParts, true), createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length), true);
        }
    }
    else {
        versionParts = [];
    }
    var version = versionParts.join('.');
    var os = detectOS(ua);
    var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua);
    if (searchBotMatch && searchBotMatch[1]) {
        return new SearchBotDeviceInfo(name, version, os, searchBotMatch[1]);
    }
    return new BrowserInfo(name, version, os);
}
function detectOS(ua) {
    for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {
        var _a = operatingSystemRules[ii], os = _a[0], regex = _a[1];
        var match = regex.exec(ua);
        if (match) {
            return os;
        }
    }
    return null;
}
function getNodeVersion() {
    var isNode = typeof process !== 'undefined' && process.version;
    return isNode ? new NodeInfo(process.version.slice(1)) : null;
}
function createVersionParts(count) {
    var output = [];
    for (var ii = 0; ii < count; ii++) {
        output.push('0');
    }
    return output;
}


/***/ }),

/***/ "./node_modules/evx/dist/evx.es.js":
/*!*****************************************!*\
  !*** ./node_modules/evx/dist/evx.es.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   create: () => (/* binding */ a),
/* harmony export */   emit: () => (/* binding */ r),
/* harmony export */   getState: () => (/* binding */ u),
/* harmony export */   hydrate: () => (/* binding */ o),
/* harmony export */   on: () => (/* binding */ c)
/* harmony export */ });
var n=function(n){if("object"!=typeof(t=n)||Array.isArray(t))throw"state should be an object";var t},t=function(n,t,e,c){return(r=n,r.reduce(function(n,t,e){return n.indexOf(t)>-1?n:n.concat(t)},[])).reduce(function(n,e){return n.concat(t[e]||[])},[]).map(function(n){return n(e,c)});var r},e=a(),c=e.on,r=e.emit,o=e.hydrate,u=e.getState;function a(e){void 0===e&&(e={});var c={};return{getState:function(){return Object.assign({},e)},hydrate:function(r){return n(r),Object.assign(e,r),function(){var n=["*"].concat(Object.keys(r));t(n,c,e)}},on:function(n,t){return(n=[].concat(n)).map(function(n){return c[n]=(c[n]||[]).concat(t)}),function(){return n.map(function(n){return c[n].splice(c[n].indexOf(t),1)})}},emit:function(r,o,u){var a=("*"===r?[]:["*"]).concat(r);(o="function"==typeof o?o(e):o)&&(n(o),Object.assign(e,o),a=a.concat(Object.keys(o))),t(a,c,e,u)}}}
//# sourceMappingURL=evx.es.js.map


/***/ }),

/***/ "./node_modules/keen-slider/keen-slider.es.js":
/*!****************************************************!*\
  !*** ./node_modules/keen-slider/keen-slider.es.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ y)
/* harmony export */ });
var n=function(){return n=Object.assign||function(n){for(var t,i=1,e=arguments.length;i<e;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},n.apply(this,arguments)};function t(n,t,i){if(i||2===arguments.length)for(var e,r=0,a=t.length;r<a;r++)!e&&r in t||(e||(e=Array.prototype.slice.call(t,0,r)),e[r]=t[r]);return n.concat(e||Array.prototype.slice.call(t))}function i(n){return Array.prototype.slice.call(n)}function e(n,t){var i=Math.floor(n);return i===t||i+1===t?n:t}function r(){return Date.now()}function a(n,t,i){if(t="data-keen-slider-"+t,null===i)return n.removeAttribute(t);n.setAttribute(t,i||"")}function o(n,t){return t=t||document,"function"==typeof n&&(n=n(t)),Array.isArray(n)?n:"string"==typeof n?i(t.querySelectorAll(n)):n instanceof HTMLElement?[n]:n instanceof NodeList?i(n):[]}function u(n){n.raw&&(n=n.raw),n.cancelable&&!n.defaultPrevented&&n.preventDefault()}function s(n){n.raw&&(n=n.raw),n.stopPropagation&&n.stopPropagation()}function c(){var n=[];return{add:function(t,i,e,r){t.addListener?t.addListener(e):t.addEventListener(i,e,r),n.push([t,i,e,r])},input:function(n,t,i,e){this.add(n,t,function(n){return function(t){t.nativeEvent&&(t=t.nativeEvent);var i=t.changedTouches||[],e=t.targetTouches||[],r=t.detail&&t.detail.x?t.detail:null;return n({id:r?r.identifier?r.identifier:"i":e[0]?e[0]?e[0].identifier:"e":"d",idChanged:r?r.identifier?r.identifier:"i":i[0]?i[0]?i[0].identifier:"e":"d",raw:t,x:r&&r.x?r.x:e[0]?e[0].screenX:r?r.x:t.pageX,y:r&&r.y?r.y:e[0]?e[0].screenY:r?r.y:t.pageY})}}(i),e)},purge:function(){n.forEach((function(n){n[0].removeListener?n[0].removeListener(n[2]):n[0].removeEventListener(n[1],n[2],n[3])})),n=[]}}}function d(n,t,i){return Math.min(Math.max(n,t),i)}function l(n){return(n>0?1:0)-(n<0?1:0)||+n}function f(n){var t=n.getBoundingClientRect();return{height:e(t.height,n.offsetHeight),width:e(t.width,n.offsetWidth)}}function p(n,t,i,e){var r=n&&n[t];return null==r?i:e&&"function"==typeof r?r():r}function v(n){return Math.round(1e6*n)/1e6}function h(n){var t,i,e,r,a,o;function u(t){o||(o=t),s(!0);var a=t-o;a>e&&(a=e);var l=r[i];if(l[3]<a)return i++,u(t);var f=l[2],p=l[4],v=l[0],h=l[1]*(0,l[5])(0===p?1:(a-f)/p);if(h&&n.track.to(v+h),a<e)return d();o=null,s(!1),c(null),n.emit("animationEnded")}function s(n){t.active=n}function c(n){t.targetIdx=n}function d(){var n;n=u,a=window.requestAnimationFrame(n)}function l(){var t;t=a,window.cancelAnimationFrame(t),s(!1),c(null),o&&n.emit("animationStopped"),o=null}return t={active:!1,start:function(t){if(l(),n.track.details){var a=0,o=n.track.details.position;i=0,e=0,r=t.map((function(n){var t,i=o,r=null!==(t=n.earlyExit)&&void 0!==t?t:n.duration,u=n.easing,s=n.distance*u(r/n.duration)||0;o+=s;var c=e;return e+=r,a+=s,[i,n.distance,c,e,n.duration,u]})),c(n.track.distToIdx(a)),d(),n.emit("animationStarted")}},stop:l,targetIdx:null}}function m(n){var i,e,a,o,u,s,c,f,h,m,g,b,x,k,y=1/0,w=[],M=null,T=0;function C(n){_(T+n)}function E(n){var t=z(T+n).abs;return D(t)?t:null}function z(n){var i=Math.floor(Math.abs(v(n/e))),r=v((n%e+e)%e);r===e&&(r=0);var a=l(n),o=c.indexOf(t([],c,!0).reduce((function(n,t){return Math.abs(t-r)<Math.abs(n-r)?t:n}))),u=o;return a<0&&i++,o===s&&(u=0,i+=a>0?1:-1),{abs:u+i*s*a,origin:o,rel:u}}function I(n,t,i){var e;if(t||!S())return A(n,i);if(!D(n))return null;var r=z(null!=i?i:T),a=r.abs,o=n-r.rel,u=a+o;e=A(u);var c=A(u-s*l(o));return(null!==c&&Math.abs(c)<Math.abs(e)||null===e)&&(e=c),v(e)}function A(n,t){if(null==t&&(t=v(T)),!D(n)||null===n)return null;n=Math.round(n);var i=z(t),r=i.abs,a=i.rel,o=i.origin,u=O(n),d=(t%e+e)%e,l=c[o],f=Math.floor((n-(r-a))/s)*e;return v(l-d-l+c[u]+f+(o===s?e:0))}function D(n){return L(n)===n}function L(n){return d(n,h,m)}function S(){return o.loop}function O(n){return(n%s+s)%s}function _(t){var i;i=t-T,w.push({distance:i,timestamp:r()}),w.length>6&&(w=w.slice(-6)),T=v(t);var e=H().abs;if(e!==M){var a=null!==M;M=e,a&&n.emit("slideChanged")}}function H(t){var r=t?null:function(){if(s){var n=S(),t=n?(T%e+e)%e:T,i=(n?T%e:T)-u[0][2],r=0-(i<0&&n?e-Math.abs(i):i),c=0,d=z(T),f=d.abs,p=d.rel,v=u[p][2],y=u.map((function(t,i){var a=r+c;(a<0-t[0]||a>1)&&(a+=(Math.abs(a)>e-1&&n?e:0)*l(-a));var u=i-p,d=l(u),h=u+f;n&&(-1===d&&a>v&&(h+=s),1===d&&a<v&&(h-=s),null!==g&&h<g&&(a+=e),null!==b&&h>b&&(a-=e));var m=a+t[0]+t[1],x=Math.max(a>=0&&m<=1?1:m<0||a>1?0:a<0?Math.min(1,(t[0]+a)/t[0]):(1-a)/t[0],0);return c+=t[0]+t[1],{abs:h,distance:o.rtl?-1*a+1-t[0]:a,portion:x,size:t[0]}}));return f=L(f),p=O(f),{abs:L(f),length:a,max:k,maxIdx:m,min:x,minIdx:h,position:T,progress:n?t/e:T/a,rel:p,slides:y,slidesLength:e}}}();return i.details=r,n.emit("detailsChanged"),r}return i={absToRel:O,add:C,details:null,distToIdx:E,idxToDist:I,init:function(t){if(function(){if(o=n.options,u=(o.trackConfig||[]).map((function(n){return[p(n,"size",1),p(n,"spacing",0),p(n,"origin",0)]})),s=u.length){e=v(u.reduce((function(n,t){return n+t[0]+t[1]}),0));var t,i=s-1;a=v(e+u[0][2]-u[i][0]-u[i][2]-u[i][1]),c=u.reduce((function(n,i){if(!n)return[0];var e=u[n.length-1],r=n[n.length-1]+(e[0]+e[2])+e[1];return r-=i[2],n[n.length-1]>r&&(r=n[n.length-1]),r=v(r),n.push(r),(!t||t<r)&&(f=n.length-1),t=r,n}),null),0===a&&(f=0),c.push(v(e))}}(),!s)return H(!0);var i;!function(){var t=n.options.range,i=n.options.loop;g=h=i?p(i,"min",-1/0):0,b=m=i?p(i,"max",y):f;var e=p(t,"min",null),r=p(t,"max",null);e&&(h=e),r&&(m=r),x=h===-1/0?h:n.track.idxToDist(h||0,!0,0),k=m===y?m:I(m,!0,0),null===r&&(b=m),p(t,"align",!1)&&m!==y&&0===u[O(m)][2]&&(k-=1-u[O(m)][0],m=E(k-T)),x=v(x),k=v(k)}(),i=t,Number(i)===i?C(A(L(t))):H()},to:_,velocity:function(){var n=r(),t=w.reduce((function(t,i){var e=i.distance,r=i.timestamp;return n-r>200||(l(e)!==l(t.distance)&&t.distance&&(t={distance:0,lastTimestamp:0,time:0}),t.time&&(t.distance+=e),t.lastTimestamp&&(t.time+=r-t.lastTimestamp),t.lastTimestamp=r),t}),{distance:0,lastTimestamp:0,time:0});return t.distance/t.time||0}}}function g(n){var t,i,e,r,a,o,u,s;function c(n){return 2*n}function f(n){return d(n,u,s)}function p(n){return 1-Math.pow(1-n,3)}function v(){return e?n.track.velocity():0}function h(){b();var t="free-snap"===n.options.mode,i=n.track,e=v();r=l(e);var u=n.track.details,s=[];if(e||!t){var d=m(e),h=d.dist,g=d.dur;if(g=c(g),h*=r,t){var x=i.idxToDist(i.distToIdx(h),!0);x&&(h=x)}s.push({distance:h,duration:g,easing:p});var k=u.position,y=k+h;if(y<a||y>o){var w=y<a?a-k:o-k,M=0,T=e;if(l(w)===r){var C=Math.min(Math.abs(w)/Math.abs(h),1),E=function(n){return 1-Math.pow(1-n,1/3)}(C)*g;s[0].earlyExit=E,T=e*(1-C)}else s[0].earlyExit=0,M+=w;var z=m(T,100),I=z.dist*r;n.options.rubberband&&(s.push({distance:I,duration:c(z.dur),easing:p}),s.push({distance:-I+M,duration:500,easing:p}))}n.animator.start(s)}else n.moveToIdx(f(u.abs),!0,{duration:500,easing:function(n){return 1+--n*n*n*n*n}})}function m(n,t){void 0===t&&(t=1e3);var i=147e-9+(n=Math.abs(n))/t;return{dist:Math.pow(n,2)/i,dur:n/i}}function g(){var t=n.track.details;t&&(a=t.min,o=t.max,u=t.minIdx,s=t.maxIdx)}function b(){n.animator.stop()}n.on("updated",g),n.on("optionsChanged",g),n.on("created",g),n.on("dragStarted",(function(){e=!1,b(),t=i=n.track.details.abs})),n.on("dragChecked",(function(){e=!0})),n.on("dragEnded",(function(){var e=n.options.mode;"snap"===e&&function(){var e=n.track,r=n.track.details,u=r.position,s=l(v());(u>o||u<a)&&(s=0);var c=t+s;0===r.slides[e.absToRel(c)].portion&&(c-=s),t!==i&&(c=i),l(e.idxToDist(c,!0))!==s&&(c+=s),c=f(c);var d=e.idxToDist(c,!0);n.animator.start([{distance:d,duration:500,easing:function(n){return 1+--n*n*n*n*n}}])}(),"free"!==e&&"free-snap"!==e||h()})),n.on("dragged",(function(){i=n.track.details.abs}))}function b(n){var t,i,e,r,a,f,p,v,h,m,g,b,x,k,y,w,M,T,C=c();function E(t){if(f&&v===t.id){var o=D(t);if(h){if(!A(t))return I(t);m=o,h=!1,n.emit("dragChecked")}if(w)return m=o;u(t);var c=function(t){if(M===-1/0&&T===1/0)return t;var e=n.track.details,o=e.length,u=e.position,s=d(t,M-u,T-u);if(0===o)return 0;if(!n.options.rubberband)return s;if(u<=T&&u>=M)return t;if(u<M&&i>0||u>T&&i<0)return t;var c=(u<M?u-M:u-T)/o,l=r*o,f=Math.abs(c*l),p=Math.max(0,1-f/a*2);return p*p*t}(p(m-o)/r*e);i=l(c);var x=n.track.details.position;(x>M&&x<T||x===M&&i>0||x===T&&i<0)&&s(t),g+=c,!b&&Math.abs(g*r)>5&&(b=!0),n.track.add(c),m=o,n.emit("dragged")}}function z(t){!f&&n.track.details&&n.track.details.length&&(g=0,f=!0,b=!1,h=!0,v=t.id,A(t),m=D(t),n.emit("dragStarted"))}function I(t){f&&v===t.idChanged&&(f=!1,n.emit("dragEnded"))}function A(n){var t=L(),i=t?n.y:n.x,e=t?n.x:n.y,r=void 0!==x&&void 0!==k&&Math.abs(k-e)<=Math.abs(x-i);return x=i,k=e,r}function D(n){return L()?n.y:n.x}function L(){return n.options.vertical}function S(){r=n.size,a=L()?window.innerHeight:window.innerWidth;var t=n.track.details;t&&(M=t.min,T=t.max)}function O(n){b&&(s(n),u(n))}function _(){if(C.purge(),n.options.drag&&!n.options.disabled){var i;i=n.options.dragSpeed||1,p="function"==typeof i?i:function(n){return n*i},e=n.options.rtl?-1:1,S(),t=n.container,function(){var n="data-keen-slider-clickable";o("[".concat(n,"]:not([").concat(n,"=false])"),t).map((function(n){C.add(n,"dragstart",s),C.add(n,"mousedown",s),C.add(n,"touchstart",s)}))}(),C.add(t,"dragstart",(function(n){u(n)})),C.add(t,"click",O,{capture:!0}),C.input(t,"ksDragStart",z),C.input(t,"ksDrag",E),C.input(t,"ksDragEnd",I),C.input(t,"mousedown",z),C.input(t,"mousemove",E),C.input(t,"mouseleave",I),C.input(t,"mouseup",I),C.input(t,"touchstart",z,{passive:!0}),C.input(t,"touchmove",E,{passive:!1}),C.input(t,"touchend",I),C.input(t,"touchcancel",I),C.add(window,"wheel",(function(n){f&&u(n)}));var r="data-keen-slider-scrollable";o("[".concat(r,"]:not([").concat(r,"=false])"),n.container).map((function(n){return function(n){var t;C.input(n,"touchstart",(function(n){t=D(n),w=!0,y=!0}),{passive:!0}),C.input(n,"touchmove",(function(i){var e=L(),r=e?n.scrollHeight-n.clientHeight:n.scrollWidth-n.clientWidth,a=t-D(i),o=e?n.scrollTop:n.scrollLeft,s=e&&"scroll"===n.style.overflowY||!e&&"scroll"===n.style.overflowX;if(t=D(i),(a<0&&o>0||a>0&&o<r)&&y&&s)return w=!0;y=!1,u(i),w=!1})),C.input(n,"touchend",(function(){w=!1}))}(n)}))}}n.on("updated",S),n.on("optionsChanged",_),n.on("created",_),n.on("destroyed",C.purge)}function x(n){var t,i,e=null;function r(t,i,e){n.animator.active?o(t,i,e):requestAnimationFrame((function(){return o(t,i,e)}))}function a(){r(!1,!1,i)}function o(i,r,a){var o=0,u=n.size,d=n.track.details;if(d&&t){var l=d.slides;t.forEach((function(n,t){if(i)!e&&r&&s(n,null,a),c(n,null,a);else{if(!l[t])return;var d=l[t].size*u;!e&&r&&s(n,d,a),c(n,l[t].distance*u-o,a),o+=d}}))}}function u(t){return"performance"===n.options.renderMode?Math.round(t):t}function s(n,t,i){var e=i?"height":"width";null!==t&&(t=u(t)+"px"),n.style["min-"+e]=t,n.style["max-"+e]=t}function c(n,t,i){if(null!==t){t=u(t);var e=i?t:0;t="translate3d(".concat(i?0:t,"px, ").concat(e,"px, 0)")}n.style.transform=t,n.style["-webkit-transform"]=t}function d(){t&&(o(!0,!0,i),t=null),n.on("detailsChanged",a,!0)}function l(){r(!1,!0,i)}function f(){d(),i=n.options.vertical,n.options.disabled||"custom"===n.options.renderMode||(e="auto"===p(n.options.slides,"perView",null),n.on("detailsChanged",a),(t=n.slides).length&&l())}n.on("created",f),n.on("optionsChanged",f),n.on("beforeOptionsChanged",(function(){d()})),n.on("updated",l),n.on("destroyed",d)}function k(t,i){return function(e){var r,u,s,d,l,v,h=c();function m(n){var t;a(e.container,"reverse","rtl"!==(t=e.container,window.getComputedStyle(t,null).getPropertyValue("direction"))||n?null:""),a(e.container,"v",e.options.vertical&&!n?"":null),a(e.container,"disabled",e.options.disabled&&!n?"":null)}function g(){b()&&M()}function b(){var t=null;if(d.forEach((function(n){n.matches&&(t=n.__media)})),t===r)return!1;r||e.emit("beforeOptionsChanged"),r=t;var i=t?s.breakpoints[t]:s;return e.options=n(n({},s),i),m(),I(),A(),C(),!0}function x(n){var t=f(n);return(e.options.vertical?t.height:t.width)/e.size||1}function k(){return e.options.trackConfig.length}function y(t){for(var a in r=!1,s=n(n({},i),t),h.purge(),u=e.size,d=[],s.breakpoints||[]){var o=window.matchMedia(a);o.__media=a,d.push(o),h.add(o,"change",g)}h.add(window,"orientationchange",z),h.add(window,"resize",E),b()}function w(n){e.animator.stop();var t=e.track.details;e.track.init(null!=n?n:t?t.abs:0)}function M(n){w(n),e.emit("optionsChanged")}function T(n,t){if(n)return y(n),void M(t);I(),A();var i=k();C(),k()!==i?M(t):w(t),e.emit("updated")}function C(){var n=e.options.slides;if("function"==typeof n)return e.options.trackConfig=n(e.size,e.slides);for(var t=e.slides,i=t.length,r="number"==typeof n?n:p(n,"number",i,!0),a=[],o=p(n,"perView",1,!0),u=p(n,"spacing",0,!0)/e.size||0,s="auto"===o?u:u/o,c=p(n,"origin","auto"),d=0,l=0;l<r;l++){var f="auto"===o?x(t[l]):1/o-u+s,v="center"===c?.5-f/2:"auto"===c?0:c;a.push({origin:v,size:f,spacing:u}),d+=f}if(d+=u*(r-1),"auto"===c&&!e.options.loop&&1!==o){var h=0;a.map((function(n){var t=d-h;return h+=n.size+u,t>=1||(n.origin=1-t-(d>1?0:1-d)),n}))}e.options.trackConfig=a}function E(){I();var n=e.size;e.options.disabled||n===u||(u=n,T())}function z(){E(),setTimeout(E,500),setTimeout(E,2e3)}function I(){var n=f(e.container);e.size=(e.options.vertical?n.height:n.width)||1}function A(){e.slides=o(e.options.selector,e.container)}e.container=(v=o(t,l||document)).length?v[0]:null,e.destroy=function(){h.purge(),e.emit("destroyed"),m(!0)},e.prev=function(){e.moveToIdx(e.track.details.abs-1,!0)},e.next=function(){e.moveToIdx(e.track.details.abs+1,!0)},e.update=T,y(e.options)}}var y=function(n,i,e){try{return function(n,t){var i,e={};return i={emit:function(n){e[n]&&e[n].forEach((function(n){n(i)}));var t=i.options&&i.options[n];t&&t(i)},moveToIdx:function(n,t,e){var r=i.track.idxToDist(n,t);if(r){var a=i.options.defaultAnimation;i.animator.start([{distance:r,duration:p(e||a,"duration",500),easing:p(e||a,"easing",(function(n){return 1+--n*n*n*n*n}))}])}},on:function(n,t,i){void 0===i&&(i=!1),e[n]||(e[n]=[]);var r=e[n].indexOf(t);r>-1?i&&delete e[n][r]:i||e[n].push(t)},options:n},function(){if(i.track=m(i),i.animator=h(i),t)for(var n=0,e=t;n<e.length;n++)(0,e[n])(i);i.track.init(i.options.initial||0),i.emit("created")}(),i}(i,t([k(n,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),x,b,g],e||[],!0))}catch(n){console.error(n)}};


/***/ }),

/***/ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js":
/*!*****************************************************************!*\
  !*** ./node_modules/smoothscroll-polyfill/dist/smoothscroll.js ***!
  \*****************************************************************/
/***/ ((module) => {

/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict';

  // polyfill
  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if (
      'scrollBehavior' in d.documentElement.style &&
      w.__forceSmoothScrollPolyfill__ !== true
    ) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now =
      w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (
        firstArg === null ||
        typeof firstArg !== 'object' ||
        firstArg.behavior === undefined ||
        firstArg.behavior === 'auto' ||
        firstArg.behavior === 'instant'
      ) {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError(
        'behavior member of ScrollOptions ' +
          firstArg.behavior +
          ' is not a valid value for enumeration ScrollBehavior.'
      );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      while (el !== d.body && isScrollable(el) === false) {
        el = el.parentNode || el.host;
      }

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : w.scrollX || w.pageXOffset,
          // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
              ? arguments[1]
              : w.scrollY || w.pageYOffset
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : w.scrollX || w.pageXOffset,
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : w.scrollY || w.pageYOffset
      );
    };

    // w.scrollBy
    w.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object' ? arguments[0] : 0,
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined ? arguments[1] : 0
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
      );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(
          this,
          // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
          // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
        );

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        this,
        this,
        typeof left === 'undefined' ? this.scrollLeft : ~~left,
        typeof top === 'undefined' ? this.scrollTop : ~~top
      );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(
          this,
          arguments[0].left !== undefined
            ? ~~arguments[0].left + this.scrollLeft
            : ~~arguments[0] + this.scrollLeft,
          arguments[0].top !== undefined
            ? ~~arguments[0].top + this.scrollTop
            : ~~arguments[1] + this.scrollTop
        );

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(
          this,
          arguments[0] === undefined ? true : arguments[0]
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(
          this,
          scrollableParent,
          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
          scrollableParent.scrollTop + clientRects.top - parentRects.top
        );

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (true) {
    // commonjs
    module.exports = { polyfill: polyfill };
  } else {}

}());


/***/ }),

/***/ "./node_modules/vanilla-lazyload/dist/lazyload.min.js":
/*!************************************************************!*\
  !*** ./node_modules/vanilla-lazyload/dist/lazyload.min.js ***!
  \************************************************************/
/***/ (function(module) {

!function(n,t){ true?module.exports=t():0}(this,(function(){"use strict";function n(){return n=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},n.apply(this,arguments)}var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),a=t&&window.devicePixelRatio>1,r={elements_selector:".lazy",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},c=function(t){return n({},r,t)},l=function(n,t){var e,i="LazyLoad::Initialized",o=new n(t);try{e=new CustomEvent(i,{detail:{instance:o}})}catch(n){(e=document.createEvent("CustomEvent")).initCustomEvent(i,!1,!1,{instance:o})}window.dispatchEvent(e)},u="src",s="srcset",d="sizes",f="poster",_="llOriginalAttrs",g="data",v="loading",b="loaded",m="applied",p="error",h="native",E="data-",I="ll-status",y=function(n,t){return n.getAttribute(E+t)},k=function(n){return y(n,I)},w=function(n,t){return function(n,t,e){var i="data-ll-status";null!==e?n.setAttribute(i,e):n.removeAttribute(i)}(n,0,t)},A=function(n){return w(n,null)},L=function(n){return null===k(n)},O=function(n){return k(n)===h},x=[v,b,m,p],C=function(n,t,e,i){n&&(void 0===i?void 0===e?n(t):n(t,e):n(t,e,i))},N=function(n,t){o?n.classList.add(t):n.className+=(n.className?" ":"")+t},M=function(n,t){o?n.classList.remove(t):n.className=n.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},z=function(n){return n.llTempImage},T=function(n,t){if(t){var e=t._observer;e&&e.unobserve(n)}},R=function(n,t){n&&(n.loadingCount+=t)},G=function(n,t){n&&(n.toLoadCount=t)},j=function(n){for(var t,e=[],i=0;t=n.children[i];i+=1)"SOURCE"===t.tagName&&e.push(t);return e},D=function(n,t){var e=n.parentNode;e&&"PICTURE"===e.tagName&&j(e).forEach(t)},H=function(n,t){j(n).forEach(t)},V=[u],F=[u,f],B=[u,s,d],J=[g],P=function(n){return!!n[_]},S=function(n){return n[_]},U=function(n){return delete n[_]},$=function(n,t){if(!P(n)){var e={};t.forEach((function(t){e[t]=n.getAttribute(t)})),n[_]=e}},q=function(n,t){if(P(n)){var e=S(n);t.forEach((function(t){!function(n,t,e){e?n.setAttribute(t,e):n.removeAttribute(t)}(n,t,e[t])}))}},K=function(n,t,e){N(n,t.class_applied),w(n,m),e&&(t.unobserve_completed&&T(n,t),C(t.callback_applied,n,e))},Q=function(n,t,e){N(n,t.class_loading),w(n,v),e&&(R(e,1),C(t.callback_loading,n,e))},W=function(n,t,e){e&&n.setAttribute(t,e)},X=function(n,t){W(n,d,y(n,t.data_sizes)),W(n,s,y(n,t.data_srcset)),W(n,u,y(n,t.data_src))},Y={IMG:function(n,t){D(n,(function(n){$(n,B),X(n,t)})),$(n,B),X(n,t)},IFRAME:function(n,t){$(n,V),W(n,u,y(n,t.data_src))},VIDEO:function(n,t){H(n,(function(n){$(n,V),W(n,u,y(n,t.data_src))})),$(n,F),W(n,f,y(n,t.data_poster)),W(n,u,y(n,t.data_src)),n.load()},OBJECT:function(n,t){$(n,J),W(n,g,y(n,t.data_src))}},Z=["IMG","IFRAME","VIDEO","OBJECT"],nn=function(n,t){!t||function(n){return n.loadingCount>0}(t)||function(n){return n.toLoadCount>0}(t)||C(n.callback_finish,t)},tn=function(n,t,e){n.addEventListener(t,e),n.llEvLisnrs[t]=e},en=function(n,t,e){n.removeEventListener(t,e)},on=function(n){return!!n.llEvLisnrs},an=function(n){if(on(n)){var t=n.llEvLisnrs;for(var e in t){var i=t[e];en(n,e,i)}delete n.llEvLisnrs}},rn=function(n,t,e){!function(n){delete n.llTempImage}(n),R(e,-1),function(n){n&&(n.toLoadCount-=1)}(e),M(n,t.class_loading),t.unobserve_completed&&T(n,e)},cn=function(n,t,e){var i=z(n)||n;on(i)||function(n,t,e){on(n)||(n.llEvLisnrs={});var i="VIDEO"===n.tagName?"loadeddata":"load";tn(n,i,t),tn(n,"error",e)}(i,(function(o){!function(n,t,e,i){var o=O(t);rn(t,e,i),N(t,e.class_loaded),w(t,b),C(e.callback_loaded,t,i),o||nn(e,i)}(0,n,t,e),an(i)}),(function(o){!function(n,t,e,i){var o=O(t);rn(t,e,i),N(t,e.class_error),w(t,p),C(e.callback_error,t,i),e.restore_on_error&&q(t,B),o||nn(e,i)}(0,n,t,e),an(i)}))},ln=function(n,t,e){!function(n){return Z.indexOf(n.tagName)>-1}(n)?function(n,t,e){!function(n){n.llTempImage=document.createElement("IMG")}(n),cn(n,t,e),function(n){P(n)||(n[_]={backgroundImage:n.style.backgroundImage})}(n),function(n,t,e){var i=y(n,t.data_bg),o=y(n,t.data_bg_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage='url("'.concat(r,'")'),z(n).setAttribute(u,r),Q(n,t,e))}(n,t,e),function(n,t,e){var i=y(n,t.data_bg_multi),o=y(n,t.data_bg_multi_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage=r,K(n,t,e))}(n,t,e),function(n,t,e){var i=y(n,t.data_bg_set);if(i){var o=i.split("|"),a=o.map((function(n){return"image-set(".concat(n,")")}));n.style.backgroundImage=a.join(),""===n.style.backgroundImage&&(a=o.map((function(n){return"-webkit-image-set(".concat(n,")")})),n.style.backgroundImage=a.join()),K(n,t,e)}}(n,t,e)}(n,t,e):function(n,t,e){cn(n,t,e),function(n,t,e){var i=Y[n.tagName];i&&(i(n,t),Q(n,t,e))}(n,t,e)}(n,t,e)},un=function(n){n.removeAttribute(u),n.removeAttribute(s),n.removeAttribute(d)},sn=function(n){D(n,(function(n){q(n,B)})),q(n,B)},dn={IMG:sn,IFRAME:function(n){q(n,V)},VIDEO:function(n){H(n,(function(n){q(n,V)})),q(n,F),n.load()},OBJECT:function(n){q(n,J)}},fn=function(n,t){(function(n){var t=dn[n.tagName];t?t(n):function(n){if(P(n)){var t=S(n);n.style.backgroundImage=t.backgroundImage}}(n)})(n),function(n,t){L(n)||O(n)||(M(n,t.class_entered),M(n,t.class_exited),M(n,t.class_applied),M(n,t.class_loading),M(n,t.class_loaded),M(n,t.class_error))}(n,t),A(n),U(n)},_n=["IMG","IFRAME","VIDEO"],gn=function(n){return n.use_native&&"loading"in HTMLImageElement.prototype},vn=function(n,t,e){n.forEach((function(n){return function(n){return n.isIntersecting||n.intersectionRatio>0}(n)?function(n,t,e,i){var o=function(n){return x.indexOf(k(n))>=0}(n);w(n,"entered"),N(n,e.class_entered),M(n,e.class_exited),function(n,t,e){t.unobserve_entered&&T(n,e)}(n,e,i),C(e.callback_enter,n,t,i),o||ln(n,e,i)}(n.target,n,t,e):function(n,t,e,i){L(n)||(N(n,e.class_exited),function(n,t,e,i){e.cancel_on_exit&&function(n){return k(n)===v}(n)&&"IMG"===n.tagName&&(an(n),function(n){D(n,(function(n){un(n)})),un(n)}(n),sn(n),M(n,e.class_loading),R(i,-1),A(n),C(e.callback_cancel,n,t,i))}(n,t,e,i),C(e.callback_exit,n,t,i))}(n.target,n,t,e)}))},bn=function(n){return Array.prototype.slice.call(n)},mn=function(n){return n.container.querySelectorAll(n.elements_selector)},pn=function(n){return function(n){return k(n)===p}(n)},hn=function(n,t){return function(n){return bn(n).filter(L)}(n||mn(t))},En=function(n,e){var o=c(n);this._settings=o,this.loadingCount=0,function(n,t){i&&!gn(n)&&(t._observer=new IntersectionObserver((function(e){vn(e,n,t)}),function(n){return{root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}}(n)))}(o,this),function(n,e){t&&(e._onlineHandler=function(){!function(n,t){var e;(e=mn(n),bn(e).filter(pn)).forEach((function(t){M(t,n.class_error),A(t)})),t.update()}(n,e)},window.addEventListener("online",e._onlineHandler))}(o,this),this.update(e)};return En.prototype={update:function(n){var t,o,a=this._settings,r=hn(n,a);G(this,r.length),!e&&i?gn(a)?function(n,t,e){n.forEach((function(n){-1!==_n.indexOf(n.tagName)&&function(n,t,e){n.setAttribute("loading","lazy"),cn(n,t,e),function(n,t){var e=Y[n.tagName];e&&e(n,t)}(n,t),w(n,h)}(n,t,e)})),G(e,0)}(r,a,this):(o=r,function(n){n.disconnect()}(t=this._observer),function(n,t){t.forEach((function(t){n.observe(t)}))}(t,o)):this.loadAll(r)},destroy:function(){this._observer&&this._observer.disconnect(),t&&window.removeEventListener("online",this._onlineHandler),mn(this._settings).forEach((function(n){U(n)})),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(n){var t=this,e=this._settings;hn(n,e).forEach((function(n){T(n,t),ln(n,e,t)}))},restoreAll:function(){var n=this._settings;mn(n).forEach((function(t){fn(t,n)}))}},En.load=function(n,t){var e=c(t);ln(n,e)},En.resetStatus=function(n){A(n)},t&&function(n,t){if(t)if(t.length)for(var e,i=0;e=t[i];i+=1)l(n,e);else l(n,t)}(En,window.lazyLoadOptions),En}));


/***/ }),

/***/ "./node_modules/vex-dialog/dist/vex.dialog.js":
/*!****************************************************!*\
  !*** ./node_modules/vex-dialog/dist/vex.dialog.js ***!
  \****************************************************/
/***/ ((module) => {

(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=undefined;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=undefined;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

function deepcopy(value) {
  if (!(!!value && typeof value == 'object')) {
    return value;
  }
  if (Object.prototype.toString.call(value) == '[object Date]') {
    return new Date(value.getTime());
  }
  if (Array.isArray(value)) {
    return value.map(deepcopy);
  }
  var result = {};
  Object.keys(value).forEach(
    function(key) { result[key] = deepcopy(value[key]); });
  return result;
}

module.exports = deepcopy;

},{}],2:[function(require,module,exports){

/**
 * Expose `parse`.
 */

module.exports = parse;

/**
 * Tests for browser support.
 */

var innerHTMLBug = false;
var bugTestDiv;
if (typeof document !== 'undefined') {
  bugTestDiv = document.createElement('div');
  // Setup
  bugTestDiv.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
  // Make sure that link elements get serialized correctly by innerHTML
  // This requires a wrapper element in IE
  innerHTMLBug = !bugTestDiv.getElementsByTagName('link').length;
  bugTestDiv = undefined;
}

/**
 * Wrap map from jquery.
 */

var map = {
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  // for script/link/style tags to work in IE6-8, you have to wrap
  // in a div with a non-whitespace character in front, ha!
  _default: innerHTMLBug ? [1, 'X<div>', '</div>'] : [0, '', '']
};

map.td =
map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option =
map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead =
map.tbody =
map.colgroup =
map.caption =
map.tfoot = [1, '<table>', '</table>'];

map.polyline =
map.ellipse =
map.polygon =
map.circle =
map.text =
map.line =
map.path =
map.rect =
map.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">','</svg>'];

/**
 * Parse `html` and return a DOM Node instance, which could be a TextNode,
 * HTML DOM Node of some kind (<div> for example), or a DocumentFragment
 * instance, depending on the contents of the `html` string.
 *
 * @param {String} html - HTML string to "domify"
 * @param {Document} doc - The `document` instance to create the Node for
 * @return {DOMNode} the TextNode, DOM Node, or DocumentFragment instance
 * @api private
 */

function parse(html, doc) {
  if ('string' != typeof html) throw new TypeError('String expected');

  // default to the global `document` object
  if (!doc) doc = document;

  // tag name
  var m = /<([\w:]+)/.exec(html);
  if (!m) return doc.createTextNode(html);

  html = html.replace(/^\s+|\s+$/g, ''); // Remove leading/trailing whitespace

  var tag = m[1];

  // body support
  if (tag == 'body') {
    var el = doc.createElement('html');
    el.innerHTML = html;
    return el.removeChild(el.lastChild);
  }

  // wrap map
  var wrap = map[tag] || map._default;
  var depth = wrap[0];
  var prefix = wrap[1];
  var suffix = wrap[2];
  var el = doc.createElement('div');
  el.innerHTML = prefix + html + suffix;
  while (depth--) el = el.lastChild;

  // one element
  if (el.firstChild == el.lastChild) {
    return el.removeChild(el.firstChild);
  }

  // several elements
  var fragment = doc.createDocumentFragment();
  while (el.firstChild) {
    fragment.appendChild(el.removeChild(el.firstChild));
  }

  return fragment;
}

},{}],3:[function(require,module,exports){
// get successful control from form and assemble into object
// http://www.w3.org/TR/html401/interact/forms.html#h-17.13.2

// types which indicate a submit action and are not successful controls
// these will be ignored
var k_r_submitter = /^(?:submit|button|image|reset|file)$/i;

// node names which could be successful controls
var k_r_success_contrls = /^(?:input|select|textarea|keygen)/i;

// Matches bracket notation.
var brackets = /(\[[^\[\]]*\])/g;

// serializes form fields
// @param form MUST be an HTMLForm element
// @param options is an optional argument to configure the serialization. Default output
// with no options specified is a url encoded string
//    - hash: [true | false] Configure the output type. If true, the output will
//    be a js object.
//    - serializer: [function] Optional serializer function to override the default one.
//    The function takes 3 arguments (result, key, value) and should return new result
//    hash and url encoded str serializers are provided with this module
//    - disabled: [true | false]. If true serialize disabled fields.
//    - empty: [true | false]. If true serialize empty fields
function serialize(form, options) {
    if (typeof options != 'object') {
        options = { hash: !!options };
    }
    else if (options.hash === undefined) {
        options.hash = true;
    }

    var result = (options.hash) ? {} : '';
    var serializer = options.serializer || ((options.hash) ? hash_serializer : str_serialize);

    var elements = form && form.elements ? form.elements : [];

    //Object store each radio and set if it's empty or not
    var radio_store = Object.create(null);

    for (var i=0 ; i<elements.length ; ++i) {
        var element = elements[i];

        // ingore disabled fields
        if ((!options.disabled && element.disabled) || !element.name) {
            continue;
        }
        // ignore anyhting that is not considered a success field
        if (!k_r_success_contrls.test(element.nodeName) ||
            k_r_submitter.test(element.type)) {
            continue;
        }

        var key = element.name;
        var val = element.value;

        // we can't just use element.value for checkboxes cause some browsers lie to us
        // they say "on" for value when the box isn't checked
        if ((element.type === 'checkbox' || element.type === 'radio') && !element.checked) {
            val = undefined;
        }

        // If we want empty elements
        if (options.empty) {
            // for checkbox
            if (element.type === 'checkbox' && !element.checked) {
                val = '';
            }

            // for radio
            if (element.type === 'radio') {
                if (!radio_store[element.name] && !element.checked) {
                    radio_store[element.name] = false;
                }
                else if (element.checked) {
                    radio_store[element.name] = true;
                }
            }

            // if options empty is true, continue only if its radio
            if (!val && element.type == 'radio') {
                continue;
            }
        }
        else {
            // value-less fields are ignored unless options.empty is true
            if (!val) {
                continue;
            }
        }

        // multi select boxes
        if (element.type === 'select-multiple') {
            val = [];

            var selectOptions = element.options;
            var isSelectedOptions = false;
            for (var j=0 ; j<selectOptions.length ; ++j) {
                var option = selectOptions[j];
                var allowedEmpty = options.empty && !option.value;
                var hasValue = (option.value || allowedEmpty);
                if (option.selected && hasValue) {
                    isSelectedOptions = true;

                    // If using a hash serializer be sure to add the
                    // correct notation for an array in the multi-select
                    // context. Here the name attribute on the select element
                    // might be missing the trailing bracket pair. Both names
                    // "foo" and "foo[]" should be arrays.
                    if (options.hash && key.slice(key.length - 2) !== '[]') {
                        result = serializer(result, key + '[]', option.value);
                    }
                    else {
                        result = serializer(result, key, option.value);
                    }
                }
            }

            // Serialize if no selected options and options.empty is true
            if (!isSelectedOptions && options.empty) {
                result = serializer(result, key, '');
            }

            continue;
        }

        result = serializer(result, key, val);
    }

    // Check for all empty radio buttons and serialize them with key=""
    if (options.empty) {
        for (var key in radio_store) {
            if (!radio_store[key]) {
                result = serializer(result, key, '');
            }
        }
    }

    return result;
}

function parse_keys(string) {
    var keys = [];
    var prefix = /^([^\[\]]*)/;
    var children = new RegExp(brackets);
    var match = prefix.exec(string);

    if (match[1]) {
        keys.push(match[1]);
    }

    while ((match = children.exec(string)) !== null) {
        keys.push(match[1]);
    }

    return keys;
}

function hash_assign(result, keys, value) {
    if (keys.length === 0) {
        result = value;
        return result;
    }

    var key = keys.shift();
    var between = key.match(/^\[(.+?)\]$/);

    if (key === '[]') {
        result = result || [];

        if (Array.isArray(result)) {
            result.push(hash_assign(null, keys, value));
        }
        else {
            // This might be the result of bad name attributes like "[][foo]",
            // in this case the original `result` object will already be
            // assigned to an object literal. Rather than coerce the object to
            // an array, or cause an exception the attribute "_values" is
            // assigned as an array.
            result._values = result._values || [];
            result._values.push(hash_assign(null, keys, value));
        }

        return result;
    }

    // Key is an attribute name and can be assigned directly.
    if (!between) {
        result[key] = hash_assign(result[key], keys, value);
    }
    else {
        var string = between[1];
        // +var converts the variable into a number
        // better than parseInt because it doesn't truncate away trailing
        // letters and actually fails if whole thing is not a number
        var index = +string;

        // If the characters between the brackets is not a number it is an
        // attribute name and can be assigned directly.
        if (isNaN(index)) {
            result = result || {};
            result[string] = hash_assign(result[string], keys, value);
        }
        else {
            result = result || [];
            result[index] = hash_assign(result[index], keys, value);
        }
    }

    return result;
}

// Object/hash encoding serializer.
function hash_serializer(result, key, value) {
    var matches = key.match(brackets);

    // Has brackets? Use the recursive assignment function to walk the keys,
    // construct any missing objects in the result tree and make the assignment
    // at the end of the chain.
    if (matches) {
        var keys = parse_keys(key);
        hash_assign(result, keys, value);
    }
    else {
        // Non bracket notation can make assignments directly.
        var existing = result[key];

        // If the value has been assigned already (for instance when a radio and
        // a checkbox have the same name attribute) convert the previous value
        // into an array before pushing into it.
        //
        // NOTE: If this requirement were removed all hash creation and
        // assignment could go through `hash_assign`.
        if (existing) {
            if (!Array.isArray(existing)) {
                result[key] = [ existing ];
            }

            result[key].push(value);
        }
        else {
            result[key] = value;
        }
    }

    return result;
}

// urlform encoding serializer
function str_serialize(result, key, value) {
    // encode newlines as \r\n cause the html spec says so
    value = value.replace(/(\r)?\n/g, '\r\n');
    value = encodeURIComponent(value);

    // spaces should be '+' rather than '%20'.
    value = value.replace(/%20/g, '+');
    return result + (result ? '&' : '') + encodeURIComponent(key) + '=' + value;
}

module.exports = serialize;

},{}],4:[function(require,module,exports){
var domify = require('domify')
var serialize = require('form-serialize')
var cloneDeep = require('deep-clone-simple')

// Build DOM elements for the structure of the dialog
var buildDialogForm = function buildDialogForm (options) {
  var form = document.createElement('form')
  form.classList.add('vex-dialog-form')

  var message = document.createElement('div')
  message.classList.add('vex-dialog-message')
  message.appendChild(options.message instanceof window.Node ? options.message : domify(options.message))

  var input = document.createElement('div')
  input.classList.add('vex-dialog-input')
  input.appendChild(options.input instanceof window.Node ? options.input : domify(options.input))

  form.appendChild(message)
  form.appendChild(input)

  return form
}

// Take an array of buttons (see the default buttons below) and turn them into DOM elements
var buttonsToDOM = function buttonsToDOM (buttons) {
  var domButtons = document.createElement('div')
  domButtons.classList.add('vex-dialog-buttons')

  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i]
    var domButton = document.createElement('button')
    domButton.type = button.type
    domButton.textContent = button.text
    domButton.className = button.className
    domButton.classList.add('vex-dialog-button')
    if (i === 0) {
      domButton.classList.add('vex-first')
    } else if (i === buttons.length - 1) {
      domButton.classList.add('vex-last')
    }
    // Attach click listener to button with closure
    (function (button) {
      domButton.addEventListener('click', function (e) {
        if (button.click) {
          button.click.call(this, e)
        }
      }.bind(this))
    }.bind(this)(button))

    domButtons.appendChild(domButton)
  }

  return domButtons
}

var plugin = function plugin (vex) {
  // Define the API first
  var dialog = {
    // Plugin name
    name: 'dialog',

    // Open
    open: function open (opts) {
      var options = Object.assign({}, cloneDeep(this.defaultOptions), opts)

      // `message` is unsafe internally, so translate
      // safe default: HTML-escape the message before passing it through
      if (options.unsafeMessage && !options.message) {
        options.message = options.unsafeMessage
      } else if (options.message) {
        options.message = vex._escapeHtml(options.message)
      }

      // Build the form from the options
      var form = options.unsafeContent = buildDialogForm(options)

      // Open the dialog
      var dialogInstance = vex.open(options)

      if (options.yesText !== '') {
        options.buttons[0].text = options.yesText
      }

      if (options.noText !== '') {
        options.buttons[1].text = options.noText
      }

      // Quick comment - these options and appending buttons and everything
      // would preferably be done _before_ opening the dialog. However, since
      // they rely on the context of the vex instance, we have to do them
      // after. A potential future fix would be to differentiate between
      // a "created" vex instance and an "opened" vex instance, so any actions
      // that rely on the specific context of the instance can do their stuff
      // before opening the dialog on the page.

      // Override the before close callback to also pass the value of the form
      var beforeClose = options.beforeClose && options.beforeClose.bind(dialogInstance)
      dialogInstance.options.beforeClose = function dialogBeforeClose () {
        // Only call the callback once - when the validation in beforeClose, if present, is true
        var shouldClose = beforeClose ? beforeClose() : true
        if (shouldClose) {
          options.callback(this.value || false)
        }
        // Return the result of beforeClose() to vex
        return shouldClose
      }.bind(dialogInstance)

      // Append buttons to form with correct context
      form.appendChild(buttonsToDOM.call(dialogInstance, options.buttons))

      // Attach form to instance
      dialogInstance.form = form

      // Add submit listener to form
      form.addEventListener('submit', options.onSubmit.bind(dialogInstance))

      // Optionally focus the first input in the form
      if (options.focusFirstInput) {
        var el = dialogInstance.contentEl.querySelector('button, input, select, textarea')
        if (el) {
          el.focus()
        }
      }

      // For chaining
      return dialogInstance
    },

    // Alert
    alert: function (options) {
      // Allow string as message
      if (typeof options === 'string') {
        options = {
          message: options
        }
      }
      options = Object.assign({}, cloneDeep(this.defaultOptions), cloneDeep(this.defaultAlertOptions), options)
      return this.open(options)
    },

    // Confirm
    confirm: function (options) {
      if (typeof options !== 'object' || typeof options.callback !== 'function') {
        throw new Error('dialog.confirm(options) requires options.callback.')
      }
      options = Object.assign({}, cloneDeep(this.defaultOptions), cloneDeep(this.defaultConfirmOptions), options)
      return this.open(options)
    },

    // Prompt
    prompt: function (options) {
      if (typeof options !== 'object' || typeof options.callback !== 'function') {
        throw new Error('dialog.prompt(options) requires options.callback.')
      }
      var defaults = Object.assign({}, cloneDeep(this.defaultOptions), cloneDeep(this.defaultPromptOptions))
      var dynamicDefaults = {
        unsafeMessage: '<label for="vex">' + vex._escapeHtml(options.label || defaults.label) + '</label>',
        input: '<input name="vex" type="text" class="vex-dialog-prompt-input" placeholder="' + vex._escapeHtml(options.placeholder || defaults.placeholder) + '" value="' + vex._escapeHtml(options.value || defaults.value) + '" />'
      }
      options = Object.assign(defaults, dynamicDefaults, options)
      // Pluck the value of the "vex" input field as the return value for prompt's callback
      // More closely mimics "window.prompt" in that a single string is returned
      var callback = options.callback
      options.callback = function promptCallback (value) {
        if (typeof value === 'object') {
          var keys = Object.keys(value)
          value = keys.length ? value[keys[0]] : ''
        }
        callback(value)
      }
      return this.open(options)
    }
  }

  // Now define any additional data that's not the direct dialog API
  dialog.buttons = {
    YES: {
      text: 'OK',
      type: 'submit',
      className: 'vex-dialog-button-primary',
      click: function yesClick () {
        this.value = true
      }
    },

    NO: {
      text: 'Cancel',
      type: 'button',
      className: 'vex-dialog-button-secondary',
      click: function noClick () {
        this.value = false
        this.close()
      }
    }
  }

  dialog.defaultOptions = {
    callback: function () {},
    afterOpen: function () {},
    message: '',
    input: '',
    yesText: '',
    noText: '',
    buttons: [
      dialog.buttons.YES,
      dialog.buttons.NO
    ],
    showCloseButton: false,
    onSubmit: function onDialogSubmit (e) {
      e.preventDefault()
      if (this.options.input) {
        this.value = serialize(this.form, { hash: true })
      }
      return this.close()
    },
    focusFirstInput: true
  }

  dialog.defaultAlertOptions = {
    buttons: [
      dialog.buttons.YES
    ]
  }

  dialog.defaultPromptOptions = {
    label: 'Prompt:',
    placeholder: '',
    value: ''
  }

  dialog.defaultConfirmOptions = {}

  return dialog
}

module.exports = plugin

},{"deep-clone-simple":1,"domify":2,"form-serialize":3}]},{},[4])(4)
});

/***/ }),

/***/ "./node_modules/vex-js/dist/js/vex.js":
/*!********************************************!*\
  !*** ./node_modules/vex-js/dist/js/vex.js ***!
  \********************************************/
/***/ ((module) => {

(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=undefined;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=undefined;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
/*
 * classList.js: Cross-browser full element.classList implementation.
 * 1.1.20170427
 *
 * By Eli Grey, http://eligrey.com
 * License: Dedicated to the public domain.
 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

if ("document" in window.self) {

// Full polyfill for browsers with no classList support
// Including IE < Edge missing SVGElement.classList
if (!("classList" in document.createElement("_")) 
	|| document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {

(function (view) {

"use strict";

if (!('Element' in view)) return;

var
	  classListProp = "classList"
	, protoProp = "prototype"
	, elemCtrProto = view.Element[protoProp]
	, objCtr = Object
	, strTrim = String[protoProp].trim || function () {
		return this.replace(/^\s+|\s+$/g, "");
	}
	, arrIndexOf = Array[protoProp].indexOf || function (item) {
		var
			  i = 0
			, len = this.length
		;
		for (; i < len; i++) {
			if (i in this && this[i] === item) {
				return i;
			}
		}
		return -1;
	}
	// Vendors: please allow content code to instantiate DOMExceptions
	, DOMEx = function (type, message) {
		this.name = type;
		this.code = DOMException[type];
		this.message = message;
	}
	, checkTokenAndGetIndex = function (classList, token) {
		if (token === "") {
			throw new DOMEx(
				  "SYNTAX_ERR"
				, "An invalid or illegal string was specified"
			);
		}
		if (/\s/.test(token)) {
			throw new DOMEx(
				  "INVALID_CHARACTER_ERR"
				, "String contains an invalid character"
			);
		}
		return arrIndexOf.call(classList, token);
	}
	, ClassList = function (elem) {
		var
			  trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
			, classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
			, i = 0
			, len = classes.length
		;
		for (; i < len; i++) {
			this.push(classes[i]);
		}
		this._updateClassName = function () {
			elem.setAttribute("class", this.toString());
		};
	}
	, classListProto = ClassList[protoProp] = []
	, classListGetter = function () {
		return new ClassList(this);
	}
;
// Most DOMException implementations don't allow calling DOMException's toString()
// on non-DOMExceptions. Error's toString() is sufficient here.
DOMEx[protoProp] = Error[protoProp];
classListProto.item = function (i) {
	return this[i] || null;
};
classListProto.contains = function (token) {
	token += "";
	return checkTokenAndGetIndex(this, token) !== -1;
};
classListProto.add = function () {
	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
	;
	do {
		token = tokens[i] + "";
		if (checkTokenAndGetIndex(this, token) === -1) {
			this.push(token);
			updated = true;
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.remove = function () {
	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
		, index
	;
	do {
		token = tokens[i] + "";
		index = checkTokenAndGetIndex(this, token);
		while (index !== -1) {
			this.splice(index, 1);
			updated = true;
			index = checkTokenAndGetIndex(this, token);
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.toggle = function (token, force) {
	token += "";

	var
		  result = this.contains(token)
		, method = result ?
			force !== true && "remove"
		:
			force !== false && "add"
	;

	if (method) {
		this[method](token);
	}

	if (force === true || force === false) {
		return force;
	} else {
		return !result;
	}
};
classListProto.toString = function () {
	return this.join(" ");
};

if (objCtr.defineProperty) {
	var classListPropDesc = {
		  get: classListGetter
		, enumerable: true
		, configurable: true
	};
	try {
		objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	} catch (ex) { // IE 8 doesn't support enumerable:true
		// adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36
		// modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected
		if (ex.number === undefined || ex.number === -0x7FF5EC54) {
			classListPropDesc.enumerable = false;
			objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
		}
	}
} else if (objCtr[protoProp].__defineGetter__) {
	elemCtrProto.__defineGetter__(classListProp, classListGetter);
}

}(window.self));

}

// There is full or partial native classList support, so just check if we need
// to normalize the add/remove and toggle APIs.

(function () {
	"use strict";

	var testElement = document.createElement("_");

	testElement.classList.add("c1", "c2");

	// Polyfill for IE 10/11 and Firefox <26, where classList.add and
	// classList.remove exist but support only one argument at a time.
	if (!testElement.classList.contains("c2")) {
		var createMethod = function(method) {
			var original = DOMTokenList.prototype[method];

			DOMTokenList.prototype[method] = function(token) {
				var i, len = arguments.length;

				for (i = 0; i < len; i++) {
					token = arguments[i];
					original.call(this, token);
				}
			};
		};
		createMethod('add');
		createMethod('remove');
	}

	testElement.classList.toggle("c3", false);

	// Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	// support the second argument.
	if (testElement.classList.contains("c3")) {
		var _toggle = DOMTokenList.prototype.toggle;

		DOMTokenList.prototype.toggle = function(token, force) {
			if (1 in arguments && !this.contains(token) === !force) {
				return force;
			} else {
				return _toggle.call(this, token);
			}
		};

	}

	testElement = null;
}());

}

},{}],2:[function(require,module,exports){

/**
 * Expose `parse`.
 */

module.exports = parse;

/**
 * Tests for browser support.
 */

var innerHTMLBug = false;
var bugTestDiv;
if (typeof document !== 'undefined') {
  bugTestDiv = document.createElement('div');
  // Setup
  bugTestDiv.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
  // Make sure that link elements get serialized correctly by innerHTML
  // This requires a wrapper element in IE
  innerHTMLBug = !bugTestDiv.getElementsByTagName('link').length;
  bugTestDiv = undefined;
}

/**
 * Wrap map from jquery.
 */

var map = {
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  // for script/link/style tags to work in IE6-8, you have to wrap
  // in a div with a non-whitespace character in front, ha!
  _default: innerHTMLBug ? [1, 'X<div>', '</div>'] : [0, '', '']
};

map.td =
map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option =
map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead =
map.tbody =
map.colgroup =
map.caption =
map.tfoot = [1, '<table>', '</table>'];

map.polyline =
map.ellipse =
map.polygon =
map.circle =
map.text =
map.line =
map.path =
map.rect =
map.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">','</svg>'];

/**
 * Parse `html` and return a DOM Node instance, which could be a TextNode,
 * HTML DOM Node of some kind (<div> for example), or a DocumentFragment
 * instance, depending on the contents of the `html` string.
 *
 * @param {String} html - HTML string to "domify"
 * @param {Document} doc - The `document` instance to create the Node for
 * @return {DOMNode} the TextNode, DOM Node, or DocumentFragment instance
 * @api private
 */

function parse(html, doc) {
  if ('string' != typeof html) throw new TypeError('String expected');

  // default to the global `document` object
  if (!doc) doc = document;

  // tag name
  var m = /<([\w:]+)/.exec(html);
  if (!m) return doc.createTextNode(html);

  html = html.replace(/^\s+|\s+$/g, ''); // Remove leading/trailing whitespace

  var tag = m[1];

  // body support
  if (tag == 'body') {
    var el = doc.createElement('html');
    el.innerHTML = html;
    return el.removeChild(el.lastChild);
  }

  // wrap map
  var wrap = map[tag] || map._default;
  var depth = wrap[0];
  var prefix = wrap[1];
  var suffix = wrap[2];
  var el = doc.createElement('div');
  el.innerHTML = prefix + html + suffix;
  while (depth--) el = el.lastChild;

  // one element
  if (el.firstChild == el.lastChild) {
    return el.removeChild(el.firstChild);
  }

  // several elements
  var fragment = doc.createDocumentFragment();
  while (el.firstChild) {
    fragment.appendChild(el.removeChild(el.firstChild));
  }

  return fragment;
}

},{}],3:[function(require,module,exports){
/**
 * Code refactored from Mozilla Developer Network:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */

'use strict';

function assign(target, firstSource) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert first argument to object');
  }

  var to = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var nextSource = arguments[i];
    if (nextSource === undefined || nextSource === null) {
      continue;
    }

    var keysArray = Object.keys(Object(nextSource));
    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
      var nextKey = keysArray[nextIndex];
      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
      if (desc !== undefined && desc.enumerable) {
        to[nextKey] = nextSource[nextKey];
      }
    }
  }
  return to;
}

function polyfill() {
  if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: assign
    });
  }
}

module.exports = {
  assign: assign,
  polyfill: polyfill
};

},{}],4:[function(require,module,exports){
// classList polyfill for old browsers
require('classlist-polyfill')
// Object.assign polyfill
require('es6-object-assign').polyfill()

// String to DOM function
var domify = require('domify')

// Use the DOM's HTML parsing to escape any dangerous strings
var escapeHtml = function escapeHtml (str) {
  if (typeof str !== 'undefined') {
    var div = document.createElement('div')
    div.appendChild(document.createTextNode(str))
    return div.innerHTML
  } else {
    return ''
  }
}

// Utility function to add space-delimited class strings to a DOM element's classList
var addClasses = function addClasses (el, classStr) {
  if (typeof classStr !== 'string' || classStr.length === 0) {
    return
  }
  var classes = classStr.split(' ')
  for (var i = 0; i < classes.length; i++) {
    var className = classes[i]
    if (className.length) {
      el.classList.add(className)
    }
  }
}

// Detect CSS Animation End Support
// https://github.com/limonte/sweetalert2/blob/99bd539f85e15ac170f69d35001d12e092ef0054/src/utils/dom.js#L194
var animationEndEvent = (function detectAnimationEndEvent () {
  var el = document.createElement('div')
  var eventNames = {
    'animation': 'animationend',
    'WebkitAnimation': 'webkitAnimationEnd',
    'MozAnimation': 'animationend',
    'OAnimation': 'oanimationend',
    'msAnimation': 'MSAnimationEnd'
  }
  for (var i in eventNames) {
    if (el.style[i] !== undefined) {
      return eventNames[i]
    }
  }
  return false
})()

// vex base CSS classes
var baseClassNames = {
  vex: 'vex',
  content: 'vex-content',
  overlay: 'vex-overlay',
  close: 'vex-close',
  closing: 'vex-closing',
  open: 'vex-open'
}

// Private lookup table of all open vex objects, keyed by id
var vexes = {}
var globalId = 1

// Private boolean to assist the escapeButtonCloses option
var isEscapeActive = false

// vex itself is an object that exposes a simple API to open and close vex objects in various ways
var vex = {
  open: function open (opts) {
    // Check for usage of deprecated options, and log a warning
    var warnDeprecated = function warnDeprecated (prop) {
      console.warn('The "' + prop + '" property is deprecated in vex 3. Use CSS classes and the appropriate "ClassName" options, instead.')
      console.warn('See http://github.hubspot.com/vex/api/advanced/#options')
    }
    if (opts.css) {
      warnDeprecated('css')
    }
    if (opts.overlayCSS) {
      warnDeprecated('overlayCSS')
    }
    if (opts.contentCSS) {
      warnDeprecated('contentCSS')
    }
    if (opts.closeCSS) {
      warnDeprecated('closeCSS')
    }

    // The dialog instance
    var vexInstance = {}

    // Set id
    vexInstance.id = globalId++

    // Store internally
    vexes[vexInstance.id] = vexInstance

    // Set state
    vexInstance.isOpen = true

    // Close function on the vex instance
    // This is how all API functions should close individual vexes
    vexInstance.close = function instanceClose () {
      // Check state
      if (!this.isOpen) {
        return true
      }

      var options = this.options

      // escapeButtonCloses is checked first
      if (isEscapeActive && !options.escapeButtonCloses) {
        return false
      }

      // Allow the user to validate any info or abort the close with the beforeClose callback
      var shouldClose = (function shouldClose () {
        // Call before close callback
        if (options.beforeClose) {
          return options.beforeClose.call(this)
        }
        // Otherwise indicate that it's ok to continue with close
        return true
      }.bind(this)())

      // If beforeClose() fails, abort the close
      if (shouldClose === false) {
        return false
      }

      // Update state
      this.isOpen = false

      // Detect if the content el has any CSS animations defined
      var style = window.getComputedStyle(this.contentEl)
      function hasAnimationPre (prefix) {
        return style.getPropertyValue(prefix + 'animation-name') !== 'none' && style.getPropertyValue(prefix + 'animation-duration') !== '0s'
      }
      var hasAnimation = hasAnimationPre('') || hasAnimationPre('-webkit-') || hasAnimationPre('-moz-') || hasAnimationPre('-o-')

      // Define the function that will actually close the instance
      var close = function close () {
        if (!this.rootEl.parentNode) {
          return
        }
        // Run once
        this.rootEl.removeEventListener(animationEndEvent, close)
        this.overlayEl.removeEventListener(animationEndEvent, close)
        // Remove from lookup table (prevent memory leaks)
        delete vexes[this.id]
        // Remove the dialog from the DOM
        this.rootEl.parentNode.removeChild(this.rootEl)
        // Remove the overlay from the DOM
        this.bodyEl.removeChild(this.overlayEl)
        // Call after close callback
        if (options.afterClose) {
          options.afterClose.call(this)
        }
        // Remove styling from the body, if no more vexes are open
        if (Object.keys(vexes).length === 0) {
          document.body.classList.remove(baseClassNames.open)
        }
      }.bind(this)

      // Close the vex
      if (animationEndEvent && hasAnimation) {
        // Setup the end event listener, to remove the el from the DOM
        this.rootEl.addEventListener(animationEndEvent, close)
        this.overlayEl.addEventListener(animationEndEvent, close)
        // Add the closing class to the dialog, showing the close animation
        this.rootEl.classList.add(baseClassNames.closing)
        this.overlayEl.classList.add(baseClassNames.closing)
      } else {
        close()
      }

      return true
    }

    // Allow strings as content
    if (typeof opts === 'string') {
      opts = {
        content: opts
      }
    }

    // `content` is unsafe internally, so translate
    // safe default: HTML-escape the content before passing it through
    if (opts.unsafeContent && !opts.content) {
      opts.content = opts.unsafeContent
    } else if (opts.content) {
      opts.content = escapeHtml(opts.content)
    }

    // Store options on instance for future reference
    var options = vexInstance.options = Object.assign({}, vex.defaultOptions, opts)

    // Get Body Element
    var bodyEl = vexInstance.bodyEl = document.getElementsByTagName('body')[0]

    // vex root
    var rootEl = vexInstance.rootEl = document.createElement('div')
    rootEl.classList.add(baseClassNames.vex)
    addClasses(rootEl, options.className)

    // Overlay
    var overlayEl = vexInstance.overlayEl = document.createElement('div')
    overlayEl.classList.add(baseClassNames.overlay)
    addClasses(overlayEl, options.overlayClassName)
    if (options.overlayClosesOnClick) {
      rootEl.addEventListener('click', function overlayClickListener (e) {
        if (e.target === rootEl) {
          vexInstance.close()
        }
      })
    }
    bodyEl.appendChild(overlayEl)

    // Content
    var contentEl = vexInstance.contentEl = document.createElement('div')
    contentEl.classList.add(baseClassNames.content)
    addClasses(contentEl, options.contentClassName)
    contentEl.appendChild(options.content instanceof window.Node ? options.content : domify(options.content))
    rootEl.appendChild(contentEl)

    // Close button
    if (options.showCloseButton) {
      var closeEl = vexInstance.closeEl = document.createElement('div')
      closeEl.classList.add(baseClassNames.close)
      addClasses(closeEl, options.closeClassName)
      closeEl.addEventListener('click', vexInstance.close.bind(vexInstance))
      contentEl.appendChild(closeEl)
    }

    // Add to DOM
    document.querySelector(options.appendLocation).appendChild(rootEl)

    // Call after open callback
    if (options.afterOpen) {
      options.afterOpen.call(vexInstance)
    }

    // Apply styling to the body
    document.body.classList.add(baseClassNames.open)

    // Return the created vex instance
    return vexInstance
  },

  // A top-level vex.close function to close dialogs by reference or id
  close: function close (vexOrId) {
    var id
    if (vexOrId.id) {
      id = vexOrId.id
    } else if (typeof vexOrId === 'string') {
      id = vexOrId
    } else {
      throw new TypeError('close requires a vex object or id string')
    }
    if (!vexes[id]) {
      return false
    }
    return vexes[id].close()
  },

  // Close the most recently created/opened vex
  closeTop: function closeTop () {
    var ids = Object.keys(vexes)
    if (!ids.length) {
      return false
    }
    return vexes[ids[ids.length - 1]].close()
  },

  // Close every vex!
  closeAll: function closeAll () {
    for (var id in vexes) {
      this.close(id)
    }
    return true
  },

  // A getter for the internal lookup table
  getAll: function getAll () {
    return vexes
  },

  // A getter for the internal lookup table
  getById: function getById (id) {
    return vexes[id]
  }
}

// Close top vex on escape
window.addEventListener('keyup', function vexKeyupListener (e) {
  if (e.keyCode === 27) {
    isEscapeActive = true
    vex.closeTop()
    isEscapeActive = false
  }
})

// Close all vexes on history pop state (useful in single page apps)
window.addEventListener('popstate', function () {
  if (vex.defaultOptions.closeAllOnPopState) {
    vex.closeAll()
  }
})

vex.defaultOptions = {
  content: '',
  showCloseButton: true,
  escapeButtonCloses: true,
  overlayClosesOnClick: true,
  appendLocation: 'body',
  className: '',
  overlayClassName: '',
  contentClassName: '',
  closeClassName: '',
  closeAllOnPopState: true
}

// TODO Loading symbols?

// Include escapeHtml function on the library object
Object.defineProperty(vex, '_escapeHtml', {
  configurable: false,
  enumerable: false,
  writable: false,
  value: escapeHtml
})

// Plugin system!
vex.registerPlugin = function registerPlugin (pluginFn, name) {
  var plugin = pluginFn(vex)
  var pluginName = name || plugin.name
  if (vex[pluginName]) {
    throw new Error('Plugin ' + name + ' is already registered.')
  }
  vex[pluginName] = plugin
}

module.exports = vex

},{"classlist-polyfill":1,"domify":2,"es6-object-assign":3}]},{},[4])(4)
});

/***/ }),

/***/ "./node_modules/element-closest/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/element-closest/index.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function polyfill(window) {
  var ElementPrototype = window.Element.prototype;

  if (typeof ElementPrototype.matches !== 'function') {
    ElementPrototype.matches = ElementPrototype.msMatchesSelector || ElementPrototype.mozMatchesSelector || ElementPrototype.webkitMatchesSelector || function matches(selector) {
      var element = this;
      var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
      var index = 0;

      while (elements[index] && elements[index] !== element) {
        ++index;
      }

      return Boolean(elements[index]);
    };
  }

  if (typeof ElementPrototype.closest !== 'function') {
    ElementPrototype.closest = function closest(selector) {
      var element = this;

      while (element && element.nodeType === 1) {
        if (element.matches(selector)) {
          return element;
        }

        element = element.parentNode;
      }

      return null;
    };
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (polyfill);
//# sourceMappingURL=index.mjs.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".chunk.js?v=92099656370&enable_js_minification=1";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "FFC-SKELETON-THEME:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkFFC_SKELETON_THEME"] = self["webpackChunkFFC_SKELETON_THEME"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************************!*\
  !*** ./src/resources/scripts/radiant.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_radiant_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/radiant.scss */ "./src/resources/styles/radiant.scss");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Theme */ "./src/resources/scripts/Theme.js");
__webpack_require__.p = window.__webpack_public_path__;



smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_1___default().polyfill();
let theme = new _Theme__WEBPACK_IMPORTED_MODULE_2__["default"]();
theme.mountComponents();
document.addEventListener('shopify:section:unload', e => {
  theme.unmountComponents(e.target);
});
document.addEventListener('shopify:section:load', e => {
  theme.mountComponents(e.target);
  theme._ctx.emit('radiant--lazy-load-update');
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaWFudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDck5BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5R0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNubkJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pIQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1VEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFlQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekRBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0ZBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdk9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25MQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JOQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDREE7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7O0FDaGJBOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNW5CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2h2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL3NyYy9yZXNvdXJjZXMvc2NyaXB0cy9UaGVtZS5qcyIsIndlYnBhY2s6Ly9GRkMtU0tFTEVUT04tVEhFTUUvLi9zcmMvcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9BamF4U2VhcmNoLmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL3NyYy9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL0NsYXNzQ2hhbmdlLmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL3NyYy9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL0NvdW50ZG93blRpbWVyLmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL3NyYy9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL0NvdW50cnlQcm92aW5jZVNlbGVjdG9yLmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL3NyYy9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL0ltYWdlWm9vbS5qcyIsIndlYnBhY2s6Ly9GRkMtU0tFTEVUT04tVEhFTUUvLi9zcmMvcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9LZWVuU2xpZGVyLmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL3NyYy9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL0tlZW5TbGlkZXJOYXYuanMiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FLy4vc3JjL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvTGF6eUxvYWQuanMiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FLy4vc3JjL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvTGF6eUxvYWRUcmlnZ2VyLmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL3NyYy9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL0xvYWRNb3JlLmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL3NyYy9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL0xvY2tTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FLy4vc3JjL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvTWVnYU1lbnUuanMiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FLy4vc3JjL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvTWV0aG9kQ2FsbC5qcyIsIndlYnBhY2s6Ly9GRkMtU0tFTEVUT04tVEhFTUUvLi9zcmMvcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9OdW1iZXJTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9GRkMtU0tFTEVUT04tVEhFTUUvLi9zcmMvcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9PYmplY3RGaXQuanMiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FLy4vc3JjL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9GRkMtU0tFTEVUT04tVEhFTUUvLi9zcmMvcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9RdWlja2xpbmsuanMiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FLy4vc3JjL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvU2Nyb2xsVG8uanMiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FLy4vc3JjL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvU2V0Q1NTVmFyLmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL3NyYy9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL1NpZGVDYXJ0LmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL3NyYy9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL1NsaWRlVG9nZ2xlLmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL3NyYy9yZXNvdXJjZXMvc2NyaXB0cy9jb21wb25lbnRzL1NsaWRlVG9nZ2xlR3JvdXAuanMiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FLy4vc3JjL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvU2xpZGluZ01lbnUuanMiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FLy4vc3JjL3Jlc291cmNlcy9zY3JpcHRzL2NvbXBvbmVudHMvU3RpY2t5RWxlbS5qcyIsIndlYnBhY2s6Ly9GRkMtU0tFTEVUT04tVEhFTUUvLi9zcmMvcmVzb3VyY2VzL3NjcmlwdHMvY29tcG9uZW50cy9WaWRlb0F1dG9QbGF5LmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL3NyYy9yZXNvdXJjZXMvc2NyaXB0cy9pbmhlcml0ZWQvQ29tcG9uZW50LmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL3NyYy9yZXNvdXJjZXMvc2NyaXB0cy9saWIvQWpheEFwaS5qcyIsIndlYnBhY2s6Ly9GRkMtU0tFTEVUT04tVEhFTUUvLi9zcmMvcmVzb3VyY2VzL3NjcmlwdHMvbGliL0hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FLy4vc3JjL3Jlc291cmNlcy9zY3JpcHRzL2xpYi9RdWV1ZS5qcyIsIndlYnBhY2s6Ly9GRkMtU0tFTEVUT04tVEhFTUUvLi9zcmMvcmVzb3VyY2VzL3N0eWxlcy9yYWRpYW50LnNjc3MiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly9GRkMtU0tFTEVUT04tVEhFTUUvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly9GRkMtU0tFTEVUT04tVEhFTUUvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly9GRkMtU0tFTEVUT04tVEhFTUUvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly9GRkMtU0tFTEVUT04tVEhFTUUvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly9GRkMtU0tFTEVUT04tVEhFTUUvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FLy4vbm9kZV9tb2R1bGVzL2NvdW50ZG93bi1qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9GRkMtU0tFTEVUT04tVEhFTUUvLi9ub2RlX21vZHVsZXMvZGV0ZWN0LWJyb3dzZXIvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FLy4vbm9kZV9tb2R1bGVzL2V2eC9kaXN0L2V2eC5lcy5qcyIsIndlYnBhY2s6Ly9GRkMtU0tFTEVUT04tVEhFTUUvLi9ub2RlX21vZHVsZXMva2Vlbi1zbGlkZXIva2Vlbi1zbGlkZXIuZXMuanMiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FLy4vbm9kZV9tb2R1bGVzL3Ntb290aHNjcm9sbC1wb2x5ZmlsbC9kaXN0L3Ntb290aHNjcm9sbC5qcyIsIndlYnBhY2s6Ly9GRkMtU0tFTEVUT04tVEhFTUUvLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1sYXp5bG9hZC9kaXN0L2xhenlsb2FkLm1pbi5qcyIsIndlYnBhY2s6Ly9GRkMtU0tFTEVUT04tVEhFTUUvLi9ub2RlX21vZHVsZXMvdmV4LWRpYWxvZy9kaXN0L3ZleC5kaWFsb2cuanMiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FLy4vbm9kZV9tb2R1bGVzL3ZleC1qcy9kaXN0L2pzL3ZleC5qcyIsIndlYnBhY2s6Ly9GRkMtU0tFTEVUT04tVEhFTUUvLi9ub2RlX21vZHVsZXMvZWxlbWVudC1jbG9zZXN0L2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9GRkMtU0tFTEVUT04tVEhFTUUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS93ZWJwYWNrL3J1bnRpbWUvY3JlYXRlIGZha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9GRkMtU0tFTEVUT04tVEhFTUUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FL3dlYnBhY2svcnVudGltZS9nZXQgbWluaS1jc3MgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9GRkMtU0tFTEVUT04tVEhFTUUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9GRkMtU0tFTEVUT04tVEhFTUUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vRkZDLVNLRUxFVE9OLVRIRU1FL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL0ZGQy1TS0VMRVRPTi1USEVNRS8uL3NyYy9yZXNvdXJjZXMvc2NyaXB0cy9yYWRpYW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZSB9IGZyb20gJ2V2eCc7XHJcbmltcG9ydCAnZWxlbWVudC1jbG9zZXN0JztcclxuaW1wb3J0IFF1ZXVlIGZyb20gJy4vbGliL1F1ZXVlJztcclxuaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi9saWIvSGVscGVycyc7XHJcbmltcG9ydCB2ZXggZnJvbSAndmV4LWpzJztcclxudmV4LnJlZ2lzdGVyUGx1Z2luKHJlcXVpcmUoJ3ZleC1kaWFsb2cnKSk7XHJcbnZleC5kZWZhdWx0T3B0aW9ucy5jbGFzc05hbWUgPSAndmV4LXRoZW1lLXBsYWluJztcclxudmV4LmRpYWxvZy5idXR0b25zLllFUy5jbGFzc05hbWUgPSAnYnRuJztcclxudmV4LmRpYWxvZy5idXR0b25zLk5PLmNsYXNzTmFtZSA9ICdidG4gYnRuLS1zZWNvbmRhcnknO1xyXG5cclxuY29uc3QgeyBkZXRlY3QgfSA9IHJlcXVpcmUoJ2RldGVjdC1icm93c2VyJyk7XHJcblxyXG5pbXBvcnQgTWV0aG9kQ2FsbCBmcm9tICcuL2NvbXBvbmVudHMvTWV0aG9kQ2FsbCc7XHJcbmltcG9ydCBNZWdhTWVudSBmcm9tICcuL2NvbXBvbmVudHMvTWVnYU1lbnUnO1xyXG5pbXBvcnQgQ2xhc3NDaGFuZ2UgZnJvbSAnLi9jb21wb25lbnRzL0NsYXNzQ2hhbmdlJztcclxuaW1wb3J0IFNsaWRlVG9nZ2xlIGZyb20gJy4vY29tcG9uZW50cy9TbGlkZVRvZ2dsZSc7XHJcbi8vIGltcG9ydCBBZGRUb0NhcnQgZnJvbSAnLi9jb21wb25lbnRzL0FkZFRvQ2FydCc7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4vY29tcG9uZW50cy9Qcm9kdWN0JztcclxuaW1wb3J0IE51bWJlclNlbGVjdG9yIGZyb20gJy4vY29tcG9uZW50cy9OdW1iZXJTZWxlY3Rvcic7XHJcbi8vIGltcG9ydCBDYXJ0IGZyb20gJy4vY29tcG9uZW50cy9DYXJ0JztcclxuaW1wb3J0IFN0aWNreUVsZW0gZnJvbSAnLi9jb21wb25lbnRzL1N0aWNreUVsZW0nO1xyXG5pbXBvcnQgTG9hZE1vcmUgZnJvbSAnLi9jb21wb25lbnRzL0xvYWRNb3JlJztcclxuaW1wb3J0IExvY2tTY3JvbGwgZnJvbSAnLi9jb21wb25lbnRzL0xvY2tTY3JvbGwnO1xyXG5pbXBvcnQgT2JqZWN0Rml0IGZyb20gJy4vY29tcG9uZW50cy9PYmplY3RGaXQnO1xyXG5pbXBvcnQgU2lkZUNhcnQgZnJvbSAnLi9jb21wb25lbnRzL1NpZGVDYXJ0JztcclxuaW1wb3J0IFF1aWNrbGluayBmcm9tICcuL2NvbXBvbmVudHMvUXVpY2tsaW5rJztcclxuaW1wb3J0IEFqYXhTZWFyY2ggZnJvbSAnLi9jb21wb25lbnRzL0FqYXhTZWFyY2gnO1xyXG5pbXBvcnQgU2V0Q1NTVmFyIGZyb20gJy4vY29tcG9uZW50cy9TZXRDU1NWYXInO1xyXG5pbXBvcnQgTGF6eUxvYWQgZnJvbSAnLi9jb21wb25lbnRzL0xhenlMb2FkJztcclxuaW1wb3J0IExhenlMb2FkVHJpZ2dlciBmcm9tICcuL2NvbXBvbmVudHMvTGF6eUxvYWRUcmlnZ2VyJztcclxuaW1wb3J0IEtlZW5TbGlkZXIgZnJvbSAnLi9jb21wb25lbnRzL0tlZW5TbGlkZXInO1xyXG5pbXBvcnQgQ291bnRyeVByb3ZpbmNlU2VsZWN0b3IgZnJvbSAnLi9jb21wb25lbnRzL0NvdW50cnlQcm92aW5jZVNlbGVjdG9yJztcclxuaW1wb3J0IFNsaWRlVG9nZ2xlR3JvdXAgZnJvbSAnLi9jb21wb25lbnRzL1NsaWRlVG9nZ2xlR3JvdXAnO1xyXG5pbXBvcnQgSW1hZ2Vab29tIGZyb20gJy4vY29tcG9uZW50cy9JbWFnZVpvb20nO1xyXG5pbXBvcnQgS2VlblNsaWRlck5hdiBmcm9tICcuL2NvbXBvbmVudHMvS2VlblNsaWRlck5hdic7XHJcbmltcG9ydCBTY3JvbGxUbyBmcm9tICcuL2NvbXBvbmVudHMvU2Nyb2xsVG8nO1xyXG5pbXBvcnQgU2xpZGluZ01lbnUgZnJvbSAnLi9jb21wb25lbnRzL1NsaWRpbmdNZW51J1xyXG5pbXBvcnQgQ291bnRkb3duVGltZXIgZnJvbSAnLi9jb21wb25lbnRzL0NvdW50ZG93blRpbWVyJ1xyXG5pbXBvcnQgVmlkZW9BdXRvUGxheSBmcm9tICcuL2NvbXBvbmVudHMvVmlkZW9BdXRvUGxheSdcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSB7XHJcbiAgJ2NvdW50ZG93bi10aW1lcic6IENvdW50ZG93blRpbWVyLFxyXG4gICdzbGlkaW5nLW1lbnUnOiBTbGlkaW5nTWVudSxcclxuICAnc2Nyb2xsLXRvJzogU2Nyb2xsVG8sXHJcbiAgJ2ltYWdlLXpvb20nOiBJbWFnZVpvb20sXHJcbiAgJ2xhenktbG9hZCc6IExhenlMb2FkLFxyXG4gICdsYXp5LWxvYWQtdHJpZ2dlcic6IExhenlMb2FkVHJpZ2dlcixcclxuICAnc2V0LWNzcy12YXInOiBTZXRDU1NWYXIsXHJcbiAgJ3F1aWNrbGluayc6IFF1aWNrbGluayxcclxuICAna2Vlbi1zbGlkZXInOiBLZWVuU2xpZGVyLFxyXG4gICdwcm9kdWN0JzogUHJvZHVjdCxcclxuICAnbWV0aG9kLWNhbGwnOiBNZXRob2RDYWxsLFxyXG4gICdtZWdhLW1lbnVzJzogTWVnYU1lbnUsXHJcbiAgJ2NsYXNzLWNoYW5nZSc6IENsYXNzQ2hhbmdlLFxyXG4gICdzbGlkZS10b2dnbGUnOiBTbGlkZVRvZ2dsZSxcclxuICAndG9nZ2xlLWdyb3VwJzogU2xpZGVUb2dnbGVHcm91cCxcclxuICAvLyAnYWRkLXRvLWNhcnQnOiBBZGRUb0NhcnQsXHJcbiAgJ251bWJlci1zZWxlY3Rvcic6IE51bWJlclNlbGVjdG9yLFxyXG4gIC8vICdjYXJ0JzogQ2FydCxcclxuICAnc3RpY2t5JzogU3RpY2t5RWxlbSxcclxuICAnbG9hZC1tb3JlJzogTG9hZE1vcmUsXHJcbiAgJ2xvY2stc2Nyb2xsJzogTG9ja1Njcm9sbCxcclxuICAnb2JqZWN0LWZpdCc6IE9iamVjdEZpdCxcclxuICAnc2lkZS1jYXJ0JzogU2lkZUNhcnQsXHJcbiAgJ2FqYXgtc2VhcmNoJzogQWpheFNlYXJjaCxcclxuICAnY291bnRyeS1wcm92aW5jZS1zZWxlY3Rvcic6IENvdW50cnlQcm92aW5jZVNlbGVjdG9yLFxyXG4gICdrZWVuLXNsaWRlci1uYXYnOiBLZWVuU2xpZGVyTmF2LFxyXG4gICdyYWRpYW50LXZpZGVvLWF1dG9wbGF5JzogVmlkZW9BdXRvUGxheVxyXG59O1xyXG5cclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7fTtcclxuXHJcbmNvbnN0IHN0YXRlID0ge1xyXG4gIGV2ZW50UXVldWU6IG5ldyBRdWV1ZSgpLFxyXG4gIGFqYXhDYWNoZTogW11cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRoZW1lIHtcclxuICBjb25zdHJ1Y3RvcihjdHggPSBzdGF0ZSwgcGFzc2VkT3B0aW9ucyA9IHt9KSB7XHJcbiAgICB0aGlzLl9vcHRpb25zID0geyAuLi5wYXNzZWRPcHRpb25zLCAuLi5vcHRpb25zIH07XHJcbiAgICBsZXQgdGhlbWVJbmZvRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRoZW1lLWluZm9ybWF0aW9uXScpO1xyXG4gICAgaWYgKHRoZW1lSW5mb0VsZW0pIHtcclxuICAgICAgY3R4ID0geyAuLi5jdHgsIC4uLkpTT04ucGFyc2UodGhlbWVJbmZvRWxlbS5pbm5lckhUTUwpIH07XHJcbiAgICB9XHJcbiAgICB0aGlzLl9jdHggPSBjcmVhdGUoY3R4KTtcclxuICAgIHRoaXMuX3ZpZXdwb3J0RXZlbnQoKTtcclxuICAgIHRoaXMuX2JvZHlTY3JvbGxMaXN0ZW4oKTtcclxuICAgIHRoaXMuX3J1bkhvb2tzKCk7XHJcbiAgICB0aGlzLl9icm93c2VyRGV0ZWN0KCk7XHJcbiAgICB0aGlzLl9jb21wb25lbnRzID0gW107XHJcbiAgfVxyXG5cclxuICBfYnJvd3NlckRldGVjdCgpIHtcclxuICAgIGNvbnN0IGJyb3dzZXIgPSBkZXRlY3QoKTtcclxuICAgIGlmIChicm93c2VyKSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChgYnJvd3Nlci0tJHtIZWxwZXJzLmhhbmRsZWl6ZShicm93c2VyLm5hbWUpfWApO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoYG9zLS0ke0hlbHBlcnMuaGFuZGxlaXplKGJyb3dzZXIub3MpfWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3ZpZXdwb3J0RXZlbnQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgJ3Jlc2l6ZScsXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICB0aGlzLl92aWV3cG9ydExvZ2ljKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHsgcGFzc2l2ZTogdHJ1ZSB9XHJcbiAgICApO1xyXG4gICAgdGhpcy5fdmlld3BvcnRMb2dpYygpO1xyXG4gIH1cclxuXHJcbiAgX2JvZHlTY3JvbGxMaXN0ZW4oKSB7XHJcbiAgICBjb25zdCB0YXJnZXROb2RlID0gZG9jdW1lbnQuYm9keTtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiBmYWxzZSwgc3VidHJlZTogZmFsc2UgfTtcclxuXHJcbiAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uIChtdXRhdGlvbnNMaXN0LCBvYnNlcnZlcikge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXHJcbiAgICAgICAgJy0tc2Nyb2xsLWdhcC1yaWdodCcsXHJcbiAgICAgICAgZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5wYWRkaW5nUmlnaHRcclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjayk7XHJcbiAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBfdmlld3BvcnRMb2dpYygpIHtcclxuICAgIGxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XHJcbiAgICBsZXQgdncgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoICogMC4wMTtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsIGAke3ZofXB4YCk7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdncnLCBgJHt2d31weGApO1xyXG4gIH1cclxuXHJcbiAgbW91bnRDb21wb25lbnRzKGNvbnRhaW5lciA9IGRvY3VtZW50KSB7XHJcbiAgICBmb3IgKGxldCBjb21wb25lbnRLZXkgaW4gY29tcG9uZW50cykge1xyXG4gICAgICBpZiAoY29tcG9uZW50cy5oYXNPd25Qcm9wZXJ0eShjb21wb25lbnRLZXkpKSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdG9yID0gYFtkYXRhLSR7Y29tcG9uZW50S2V5fV1gO1xyXG4gICAgICAgIGxldCBlbGVtZW50cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuICAgICAgICBmb3IgKGxldCBlbGVtIG9mIGVsZW1lbnRzKSB7XHJcbiAgICAgICAgICB0aGlzLm1vdW50Q29tcG9uZW50KGNvbXBvbmVudEtleSwgY29tcG9uZW50S2V5LCBlbGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5fX1RoZW1lID0gdGhpcztcclxuICAgIHdpbmRvdy5fX1RoZW1lQ29tcG9uZW50cyA9IHRoaXMuX2NvbXBvbmVudHM7XHJcblxyXG4gICAgdGhpcy5fY3R4LmVtaXQoJ3JhZGlhbnQtLW1vdW50ZWQnKTtcclxuICB9XHJcblxyXG4gIHVubW91bnRDb21wb25lbnRzKGNvbnRhaW5lciA9IGRvY3VtZW50KSB7XHJcbiAgICBmb3IgKHZhciBpID0gdGhpcy5fY29tcG9uZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5fY29tcG9uZW50c1tpXTtcclxuXHJcbiAgICAgIGlmIChjb250YWluZXIuY29udGFpbnMoY29tcG9uZW50LmVsZW0pKSB7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudE9iaiA9IGNvbXBvbmVudC5jb21wb25lbnQ7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRPYmoudW5tb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgY29tcG9uZW50T2JqLnVubW91bnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29tcG9uZW50ID0gbnVsbDtcclxuICAgICAgICBjb21wb25lbnRPYmogPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtb3VudENvbXBvbmVudCh0eXBlLCBkYXRhQXR0ciwgZWxlbSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IG9wdGlvblN0ciA9IGVsZW0uZ2V0QXR0cmlidXRlKGBkYXRhLSR7ZGF0YUF0dHJ9YCkudHJpbSgpO1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xyXG4gICAgICBpZiAob3B0aW9uU3RyLnN0YXJ0c1dpdGgoJ3snKSB8fCBvcHRpb25TdHIuc3RhcnRzV2l0aCgnWycpKSB7XHJcbiAgICAgICAgb3B0aW9ucyA9IEpTT04ucGFyc2Uob3B0aW9uU3RyKTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgY29tcEluc3RhbmNlID0gbmV3IGNvbXBvbmVudHNbdHlwZV0oZWxlbSwgdGhpcywgb3B0aW9ucywgdGhpcy5fY3R4KTtcclxuICAgICAgdGhpcy5fY29tcG9uZW50cy5wdXNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgIGVsZW06IGVsZW0sXHJcbiAgICAgICAgaWQ6IGNvbXBJbnN0YW5jZS5fb3B0aW9ucy5pZCxcclxuICAgICAgICBjb21wb25lbnQ6IGNvbXBJbnN0YW5jZVxyXG4gICAgICB9KTtcclxuICAgICAgY29tcEluc3RhbmNlLm1vdW50KCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYC0tLS0tRVJST1IgSU4gQ09NUE9ORU5ULS0tLS0gXFxudHlwZTogJHt0eXBlfVxcbmVsZW1lbnQgYW5kIHN0YWNrIHRyYWNlIGJlbG93OmApO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVsZW0pO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0T3B0aW9ucygpIHtcclxuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29tcG9uZW50KGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50cy5maW5kKChjb21wb25lbnQpID0+IGNvbXBvbmVudC5pZCA9PT0gaWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29tcG9uZW50QnlFbGVtKGVsZW0pIHtcclxuICAgIHJldHVybiB0aGlzLl9jb21wb25lbnRzLmZpbmQoKGNvbXBvbmVudCkgPT4gY29tcG9uZW50LmVsZW0gPT09IGVsZW0pO1xyXG4gIH1cclxuXHJcbiAgX3J1bkhvb2tzKCkge1xyXG4gICAgdGhpcy5fY3R4Lm9uKCdjYXJ0LWl0ZW0tYWRkZWQnLCAoc3RhdGUpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5waW50cmspIHtcclxuICAgICAgICBwaW50cmsoJ3RyYWNrJywgJ2FkZHRvY2FydCcsIHtcclxuICAgICAgICAgIHZhbHVlOiBzdGF0ZS5sYXN0SXRlbUFkZGVkLml0ZW0ucHJpY2UgLyAxMDAuMCxcclxuICAgICAgICAgIG9yZGVyX3F1YW50aXR5OiBzdGF0ZS5sYXN0SXRlbUFkZGVkLnF1YW50aXR5XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHdpbmRvdy5mYnEpIHtcclxuICAgICAgICBmYnEoJ3RyYWNrJywgJ0FkZFRvQ2FydCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9pbmhlcml0ZWQvQ29tcG9uZW50J1xyXG5pbXBvcnQgSGVscGVycyBmcm9tICcuLi9saWIvSGVscGVycydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWpheFNlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eCkge1xyXG4gICAgICBzdXBlcihlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KVxyXG4gICAgICB0aGlzLl9yZXNwb25zZSA9IG51bGxcclxuICAgICAgdGhpcy5fZm9ybSA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtYWpheC1zZWFyY2gtZm9ybV0nKVxyXG4gICAgICB0aGlzLl90cmlnZ2VycyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYWpheC1zZWFyY2gtdHJpZ2dlcl0nKVxyXG4gICAgICB0aGlzLl9pbnB1dCA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtYWpheC1zZWFyY2gtaW5wdXRdJylcclxuICAgICAgdGhpcy5fcmVzdWx0cyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtYWpheC1zZWFyY2gtcmVzdWx0c10nKVxyXG4gICAgICB0aGlzLl9jbGVhclRyaWdnZXIgPSBudWxsXHJcbiAgICAgIHRoaXMuX2V4aXRUcmlnZ2VyID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hamF4LXNlYXJjaC1leGl0XScpXHJcbiAgICAgIHRoaXMuX2xvYWRpbmcgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG1vdW50ICgpIHtcclxuICAgICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcclxuICAgICAgICAvL2UucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHRoaXMuX3N1Ym1pdEZvcm0oKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgdGhpcy5faW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lucHV0LnZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5fY2xlYXJTZWFyY2goKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIHRoaXMuX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgSGVscGVycy5kZWJvdW5jZSgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lucHV0LnZhbHVlLmxlbmd0aCAhPT0gIDApIHtcclxuICAgICAgICAgIHRoaXMuX3N1Ym1pdEZvcm0oKVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgMzAwKSlcclxuXHJcbiAgICAgIHRoaXMuX2V4aXRUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgdGhpcy5fY2xlYXJTZWFyY2goKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKHRoaXMuX2lucHV0LnZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKCdvcGVuJylcclxuICAgICAgICB0aGlzLl9zdWJtaXRGb3JtKClcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yKGxldCB0cmlnZ2VyIG9mIHRoaXMuX3RyaWdnZXJzKSB7XHJcbiAgICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLl9lbGVtLnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgdGhpcy5faW5wdXQudmFsdWUgPSB0cmlnZ2VyLmRhdGFzZXQuYWpheFNlYXJjaFRyaWdnZXJcclxuICAgICAgICAgIHRoaXMuX3N1Ym1pdEZvcm0oKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBfc3VibWl0Rm9ybSAoKSB7XHJcbiAgICAgIGlmICh0aGlzLl9sb2FkaW5nKSByZXR1cm4gZmFsc2VcclxuXHJcbiAgICAgIGxldCB2YWxpZCA9IHRoaXMuX2Zvcm0ucmVwb3J0VmFsaWRpdHkoKVxyXG5cclxuICAgICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGluZyA9IHRydWVcclxuICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoJ2FqYXgtc2VhcmNoLS1sb2FkaW5nJylcclxuXHJcbiAgICAgICAgbGV0IHVybCA9IGAvc2VhcmNoP3ZpZXc9YWpheCZxPSR7dGhpcy5faW5wdXQudmFsdWV9JnR5cGU9cHJvZHVjdGBcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2lucHV0LnZhbHVlLnNwbGl0KFwiIFwiKS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgIHVybCArPSBgJm9wdGlvbnNbcHJlZml4XT1sYXN0YFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KHVybClcclxuICAgICAgICBsZXQgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpXHJcbiAgICAgICAgbGV0IGh0bWwgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGRhdGEsICd0ZXh0L2h0bWwnKVxyXG4gICAgICAgIGxldCBmZXRjaGVkRWxlbSA9IGh0bWwucXVlcnlTZWxlY3RvcignW2RhdGEtYWpheC1zZWFyY2gtcmVzdWx0c10nKVxyXG4gICAgICAgIHRoaXMuX3Jlc3VsdHMuaW5uZXJIVE1MID0gZmV0Y2hlZEVsZW0uaW5uZXJIVE1MXHJcblxyXG4gICAgICAgIHRoaXMuX2NsZWFyVHJpZ2dlciA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtYWpheC1zZWFyY2gtY2xlYXJdJylcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2NsZWFyVHJpZ2dlcikge1xyXG4gICAgICAgICAgdGhpcy5fY2xlYXJUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgIHRoaXMuX2NsZWFyU2VhcmNoKClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl90aGVtZS5tb3VudENvbXBvbmVudHModGhpcy5fcmVzdWx0cylcclxuXHJcbiAgICAgICAgdGhpcy5fY3R4LmVtaXQoJ3JhZGlhbnQtLXNjcm9sbC1sb2NrLWVsZW0nLCBudWxsLCB0aGlzLl9lbGVtKVxyXG4gICAgICAgIHRoaXMuX2N0eC5lbWl0KCdyYWRpYW50LS1sYXp5LWxvYWQtdXBkYXRlJylcclxuICAgICAgICB0aGlzLl9jdHguZW1pdCgncmFkaWFudC0tcXVpY2tsaW5rLWxpc3Rlbi10bycsIG51bGwsIHRoaXMuX3Jlc3VsdHMpXHJcblxyXG4gICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWpheC1zZWFyY2gtLWxvYWRpbmcnKVxyXG4gICAgICAgIHRoaXMuX2xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2NsZWFyU2VhcmNoICgpIHtcclxuICAgICAgdGhpcy5fcmVzdWx0cy5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICB0aGlzLl9pbnB1dC52YWx1ZSA9ICcnXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2luaGVyaXRlZC9Db21wb25lbnQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGFzc0NoYW5nZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IgKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpIHtcclxuICAgIHN1cGVyKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpXHJcbiAgfVxyXG5cclxuICBtb3VudCAoKSB7XHJcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgZm9yIChsZXQgb3B0aW9uIG9mIHRoaXMuX29wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLl9vcHRpb25Mb2dpYyhvcHRpb24pXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX29wdGlvbkxvZ2ljKHRoaXMuX29wdGlvbnMpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfb3B0aW9uTG9naWMob3B0aW9uKSB7XHJcbiAgICBpZiAoIW9wdGlvbi5vbikge1xyXG4gICAgICBvcHRpb24ub24gPSAnY2xpY2snXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvbi53aGVuT3V0c2lkZSkge1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG9wdGlvbi5vbiwgZSA9PiB7XHJcbiAgICAgICAgbGV0IGNsaWNrSXNJbnNpZGUgPSB0aGlzLl9lbGVtLmNvbnRhaW5zKGUudGFyZ2V0KSB8fCB0aGlzLl9lbGVtID09PSBlLnRhcmdldFxyXG4gICAgICAgIGxldCB0b0V4Y2x1ZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbi53aGVuT3V0c2lkZUV4Y2VwdClcclxuICAgICAgICBsZXQgaGFzQ2xpY2tlZEV4Y2x1ZGUgPSBBcnJheS5mcm9tKHRvRXhjbHVkZSkuc29tZShlbGVtID0+IGVsZW0uY29udGFpbnMoZS50YXJnZXQpIHx8IGVsZW0gPT09IGUudGFyZ2V0KVxyXG5cclxuICAgICAgICBpZiAoY2xpY2tJc0luc2lkZSB8fCBoYXNDbGlja2VkRXhjbHVkZSkgcmV0dXJuIGZhbHNlXHJcblxyXG4gICAgICAgIHRoaXMuX2V2ZW50TG9naWMob3B0aW9uLCBlKVxyXG4gICAgICBcclxuICAgICAgfSwgb3B0aW9uLnByZXZlbnREZWZhdWx0ID8geyBwYXNzaXZlOiBmYWxzZSB9IDogeyBwYXNzaXZlOiB0cnVlIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9lbGVtLmFkZEV2ZW50TGlzdGVuZXIob3B0aW9uLm9uLCBlID0+IHtcclxuICAgICAgICB0aGlzLl9ldmVudExvZ2ljKG9wdGlvbiwgZSlcclxuICAgICAgfSwgb3B0aW9uLnByZXZlbnREZWZhdWx0ID8geyBwYXNzaXZlOiBmYWxzZSB9IDogeyBwYXNzaXZlOiB0cnVlIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfZXZlbnRMb2dpYyAob3B0aW9uLCBlKSB7XHJcbiAgICBpZiAob3B0aW9uLm9ubHlUaGlzRWxlbSAmJiBlLnRhcmdldCAhPT0gdGhpcy5fZWxlbSkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKG9wdGlvbi5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9uLnRhcmdldC5pbmNsdWRlcygnY2xvc2VzdDonKSkge1xyXG4gICAgICBsZXQgcGFyZW50U2VsZWN0b3IgPSBvcHRpb24udGFyZ2V0LnNwbGl0KCdjbG9zZXN0OicpWzFdLnRyaW0oKVxyXG4gICAgICBpZiAob3B0aW9uLnN1YlRhcmdldCkge1xyXG4gICAgICAgIHRoaXMuX2VsZW0uY2xvc2VzdChwYXJlbnRTZWxlY3RvcikucXVlcnlTZWxlY3RvcihvcHRpb24uc3ViVGFyZ2V0KS5jbGFzc0xpc3Rbb3B0aW9uLm1ldGhvZF0ob3B0aW9uLmNsYXNzKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2VsZW0uY2xvc2VzdChwYXJlbnRTZWxlY3RvcikuY2xhc3NMaXN0W29wdGlvbi5tZXRob2RdKG9wdGlvbi5jbGFzcylcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChvcHRpb24udGFyZ2V0ID09PSAndGhpcycpIHtcclxuICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3Rbb3B0aW9uLm1ldGhvZF0ob3B0aW9uLmNsYXNzKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbi50YXJnZXQpXHJcbiAgICAgIGZvciAobGV0IHRhcmdldCBvZiB0YXJnZXRzKSB7XHJcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdFtvcHRpb24ubWV0aG9kXShvcHRpb24uY2xhc3MpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9uLnJlc2l6ZVdpbmRvdykge1xyXG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Jlc2l6ZScpKVxyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vaW5oZXJpdGVkL0NvbXBvbmVudCdcclxuaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi4vbGliL0hlbHBlcnMnXHJcbmltcG9ydCBBamF4QXBpIGZyb20gJy4uL2xpYi9BamF4QXBpJ1xyXG5pbXBvcnQgQ291bnRkb3duIGZyb20gJ2NvdW50ZG93bi1qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50ZG93blRpbWVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eCkge1xyXG4gICAgc3VwZXIoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eClcclxuICAgIHRoaXMuX2VsZW0gPSBlbGVtXHJcbiAgICB0aGlzLl9vcHRpb25zID0gey4uLntcclxuICAgICAgZXBvY2g6IDAsXHJcbiAgICAgIHNlcGFyYXRvcjogJydcclxuICAgIH0sIC4uLnRoaXMuX29wdGlvbnN9XHJcbiAgICB0aGlzLl90aW1lciA9IG51bGxcclxuICAgIHRoaXMuX3RpbWVyRWxlbXMgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRpbWVdJylcclxuICB9XHJcblxyXG4gIGFzeW5jICBtb3VudCAoKSB7XHJcbiAgICBsZXQgQ291bnRkb3duRGF0ZVxyXG5cclxuICAgIGlmICh0aGlzLl9vcHRpb25zLmVwb2NoKSB7XHJcbiAgICAgIENvdW50ZG93bkRhdGUgPSBuZXcgRGF0ZSh0aGlzLl9vcHRpb25zLmVwb2NoICogMTAwMClcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fb3B0aW9ucy50aW1lKSB7XHJcbiAgICAgIGxldCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAgIGxldCBtb250aCA9IHRvZGF5RGF0ZS5nZXRVVENNb250aCgpICsgMVxyXG4gICAgICBsZXQgZGF5ID0gdG9kYXlEYXRlLmdldFVUQ0RhdGUoKVxyXG4gICAgICBsZXQgeWVhciA9IHRvZGF5RGF0ZS5nZXRVVENGdWxsWWVhcigpXHJcbiAgICAgIGxldCB0b2RheVlZTU1ERCA9IHllYXIgKyBcIi9cIiArIG1vbnRoICsgXCIvXCIgKyBkYXlcclxuXHJcbiAgICAgIENvdW50ZG93bkRhdGUgPSBuZXcgRGF0ZSh0b2RheVlZTU1ERCArICcgJyArIHRoaXMuX29wdGlvbnMudGltZSArICc6MDAnKVxyXG4gICAgICBcclxuICAgICAgaWYgKHRoaXMuX29wdGlvbnMudGltZV96b25lKSB7XHJcbiAgICAgICAgQ291bnRkb3duRGF0ZSA9IHRoaXMuX2NoYW5nZVRpbWV6b25lKENvdW50ZG93bkRhdGUsIHRoaXMuX29wdGlvbnMudGltZV96b25lKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fdGltZXIgPSBDb3VudGRvd24udGltZXIoQ291bnRkb3duRGF0ZSwgKHRpbWVMZWZ0KSA9PiB7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZVRpbWVFbGVtcyh0aW1lTGVmdClcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5fdXBkYXRlVGltZUVsZW1zKHtcclxuICAgICAgICBkYXlzOiAwLFxyXG4gICAgICAgIGhvdXJzOiAwLFxyXG4gICAgICAgIG1pbnV0ZXM6IDAsXHJcbiAgICAgICAgc2Vjb25kczogMFxyXG4gICAgICB9LCBmYWxzZSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBfY2hhbmdlVGltZXpvbmUoZGF0ZSwgdGltZXpvbmUpIHtcclxuICAgIGxldCBpbnZkYXRlID0gbmV3IERhdGUoZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7XHJcbiAgICAgIHRpbWVab25lOiB0aW1lem9uZVxyXG4gICAgfSkpXHJcbiAgICBsZXQgZGlmZiA9IGRhdGUuZ2V0VGltZSgpIC0gaW52ZGF0ZS5nZXRUaW1lKClcclxuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIGRpZmYpXHJcbiAgfVxyXG5cclxuICBfdXBkYXRlVGltZUVsZW1zICh0aW1lTGVmdCwgcmVhY2hlZFplcm8gPSB0cnVlKSB7XHJcbiAgICBmb3IgKGxldCBbaW5kZXgsIHRpbWVFbGVtXSBvZiB0aGlzLl90aW1lckVsZW1zLmVudHJpZXMoKSkge1xyXG4gICAgICBsZXQgdGltZSA9IHRpbWVMZWZ0W3RpbWVFbGVtLmRhdGFzZXQudGltZV1cclxuICAgICAgaWYgKHRpbWUgPT09IDAgJiYgcmVhY2hlZFplcm8pIHtcclxuICAgICAgICB0aW1lRWxlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZWFjaGVkWmVybyA9IGZhbHNlXHJcbiAgICAgICAgdGltZUVsZW0uaW5uZXJIVE1MID0gSGVscGVycy5wYWQodGltZSwgMilcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9vcHRpb25zLm51bWJlcnNPbmx5KSB7XHJcbiAgICAgICAgICBpZiAodGltZUVsZW0uZGF0YXNldC50aW1lID09PSAnZGF5cycpIHtcclxuICAgICAgICAgICAgdGltZUVsZW0uaW5uZXJIVE1MICs9ICc8c3Bhbj5kYXlzPC9zcGFuPidcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAodGltZUVsZW0uZGF0YXNldC50aW1lID09PSAnaG91cnMnKSB7XHJcbiAgICAgICAgICAgIHRpbWVFbGVtLmlubmVySFRNTCArPSAnPHNwYW4+aHJzPC9zcGFuPidcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAodGltZUVsZW0uZGF0YXNldC50aW1lID09PSAnbWludXRlcycpIHtcclxuICAgICAgICAgICAgdGltZUVsZW0uaW5uZXJIVE1MICs9ICc8c3Bhbj5taW5zPC9zcGFuPidcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAodGltZUVsZW0uZGF0YXNldC50aW1lID09PSAnc2Vjb25kcycpIHtcclxuICAgICAgICAgICAgdGltZUVsZW0uaW5uZXJIVE1MICs9ICc8c3Bhbj5zZWNzPC9zcGFuPidcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgoaW5kZXggKyAxKSAhPT0gdGhpcy5fdGltZXJFbGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgIHRpbWVFbGVtLmlubmVySFRNTCArPSB0aGlzLl9vcHRpb25zLnNlcGFyYXRvclxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRpbWVMZWZ0LmRheXMgPT09IDAgJiYgdGltZUxlZnQuaG91cnMgPT09IDAgJiYgdGltZUxlZnQubWludXRlcyA9PT0gMCAmJiB0aW1lTGVmdC5zZWNvbmRzID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG5cclxuICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zLmhpZGVQYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGVsIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fb3B0aW9ucy5oaWRlUGFyZW50RWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fb3B0aW9ucy5oaWRlUGFyZW50RWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdrZWVuLXNsaWRlcl9fc2xpZGUnKSkge1xyXG4gICAgICAgICAgICAgIGxldCBzbGlkZXIgPSB0aGlzLl9lbGVtLmNsb3Nlc3QoJ1tkYXRhLWtlZW4tc2xpZGVyXScpXHJcbiAgICAgICAgICAgICAgbGV0IGNvbXAgPSB0aGlzLl90aGVtZS5nZXRDb21wb25lbnRCeUVsZW0oc2xpZGVyKVxyXG5cclxuICAgICAgICAgICAgICBpZiAoY29tcCkge1xyXG4gICAgICAgICAgICAgICAgY29tcC5jb21wb25lbnQuX3NsaWRlci51cGRhdGUoKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vaW5oZXJpdGVkL0NvbXBvbmVudCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50cnlQcm92aW5jZVNlbGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eCkge1xyXG4gICAgc3VwZXIoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eClcclxuICAgIHRoaXMuX2NvdW50cnlFbCA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtY291bnRyeS1zZWxlY3Rvcl0nKVxyXG4gICAgdGhpcy5fcHJvdmluY2VFbCA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvdmluY2Utc2VsZWN0b3JdJylcclxuICAgIHRoaXMuX3Byb3ZpbmNlQ29udGFpbmVyID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm92aW5jZS1jb250YWluZXJdJylcclxuICB9XHJcblxyXG4gIG1vdW50ICgpIHtcclxuICAgIHRoaXMuX2NvdW50cnlFbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcclxuICAgICAgdGhpcy5fY291bnRyeUhhbmRsZXIoKVxyXG4gICAgfSlcclxuICAgIHRoaXMuX2luaXRDb3VudHJ5KClcclxuICAgIHRoaXMuX2luaXRQcm92aW5jZSgpXHJcbiAgfVxyXG5cclxuICBfaW5pdENvdW50cnkgKCkge1xyXG4gICAgdmFyIHQgPSB0aGlzLl9jb3VudHJ5RWwuZ2V0QXR0cmlidXRlKCdkYXRhLWRlZmF1bHQnKVxyXG4gICAgdGhpcy5fc2V0U2VsZWN0b3JCeVZhbHVlKHRoaXMuX2NvdW50cnlFbCwgdClcclxuICAgIHRoaXMuX2NvdW50cnlIYW5kbGVyKClcclxuICB9XHJcblxyXG4gIF9pbml0UHJvdmluY2UgKCkge1xyXG4gICAgdmFyIHQgPSB0aGlzLl9wcm92aW5jZUVsLmdldEF0dHJpYnV0ZSgnZGF0YS1kZWZhdWx0JylcclxuICAgIHQgJiYgdGhpcy5fcHJvdmluY2VFbC5vcHRpb25zLmxlbmd0aCA+IDAgJiYgdGhpcy5fc2V0U2VsZWN0b3JCeVZhbHVlKHRoaXMuX3Byb3ZpbmNlRWwsIHQpXHJcbiAgfVxyXG5cclxuICBfY291bnRyeUhhbmRsZXIgKCkge1xyXG4gICAgdmFyIHQgPSB0aGlzLl9jb3VudHJ5RWwub3B0aW9uc1t0aGlzLl9jb3VudHJ5RWwuc2VsZWN0ZWRJbmRleF1cclxuICAgIHZhciBlID0gdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvdmluY2VzJylcclxuICAgIHZhciBuID0gSlNPTi5wYXJzZShlKVxyXG5cclxuICAgIHRoaXMuX2NsZWFyT3B0aW9ucyh0aGlzLl9wcm92aW5jZUVsKVxyXG4gICAgaWYgKG4gJiYgbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5fcHJvdmluY2VDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXHJcbiAgICAgICAgdC52YWx1ZSA9IG5baV1bMF1cclxuICAgICAgICB0LmlubmVySFRNTCA9IG5baV1bMV1cclxuICAgICAgICB0aGlzLl9wcm92aW5jZUVsLmFwcGVuZENoaWxkKHQpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fcHJvdmluY2VDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICcnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2V0U2VsZWN0b3JCeVZhbHVlICh0LCBlKSB7XHJcbiAgICBmb3IgKHZhciBuID0gMCwgaSA9IHQub3B0aW9ucy5sZW5ndGg7IG4gPCBpOyBuKyspIHtcclxuICAgICAgdmFyIG8gPSB0Lm9wdGlvbnNbbl1cclxuICAgICAgaWYgKGUgPT09IG8udmFsdWUgfHwgZSA9PT0gby5pbm5lckhUTUwpIHtcclxuICAgICAgICB0LnNlbGVjdGVkSW5kZXggPSBuXHJcbiAgICAgICAgcmV0dXJuIG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2NsZWFyT3B0aW9ucyAodCkge1xyXG4gICAgZm9yICg7IHQuZmlyc3RDaGlsZDspIHQucmVtb3ZlQ2hpbGQodC5maXJzdENoaWxkKVxyXG4gIH1cclxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vaW5oZXJpdGVkL0NvbXBvbmVudCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlWm9vbSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IgKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpIHtcclxuICAgIHN1cGVyKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpXHJcbiAgICB0aGlzLl9wYW5lID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS16b29tLXBhbmVdJylcclxuICAgIHRoaXMuX29wdGlvbnMgPSB7Li4ue1xyXG4gICAgICBwYW5lQ29udGFpbmVyOiB0aGlzLl9wYW5lLFxyXG4gICAgICB6b29tRmFjdG9yOiAyLFxyXG4gICAgICBob3ZlckRlbGF5OiAxMDBcclxuICAgIH0sIC4uLnRoaXMuX29wdGlvbnN9XHJcbiAgfVxyXG5cclxuICBhc3luYyBtb3VudCAoKSB7XHJcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5lbmFibGVXaGVuICYmICFtYXRjaE1lZGlhKGBvbmx5IHNjcmVlbiBhbmQgJHt0aGlzLl9vcHRpb25zLmVuYWJsZVdoZW59YCkubWF0Y2hlcykge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZSA9PiB7XHJcbiAgICAgICAgaWYgKG1hdGNoTWVkaWEoYG9ubHkgc2NyZWVuIGFuZCAke3RoaXMuX29wdGlvbnMuZW5hYmxlV2hlbn1gKS5tYXRjaGVzICYmICF0aGlzLl9pc01vdW50ZWQpIHtcclxuICAgICAgICAgIHRoaXMubW91bnQoKVxyXG4gICAgICAgIH0gZWxzZSBpZighbWF0Y2hNZWRpYShgb25seSBzY3JlZW4gYW5kICR7dGhpcy5fb3B0aW9ucy5lbmFibGVXaGVufWApLm1hdGNoZXMgJiYgdGhpcy5faXNNb3VudGVkKSB7XHJcbiAgICAgICAgICB0aGlzLnVubW91bnQoKVxyXG4gICAgICAgICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHsgcGFzc2l2ZTogdHJ1ZSB9KVxyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKG1hdGNoTWVkaWEoYG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MzRweClgKS5tYXRjaGVzKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuX3pvb21Nb2JpbGUoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXdhaXQgdGhpcy5fem9vbURlc2t0b3AoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgX3pvb21EZXNrdG9wICgpIHtcclxuICAgIGNvbnN0IHsgZGVmYXVsdDogRHJpZnQgfSA9IGF3YWl0IGltcG9ydCgnZHJpZnQtem9vbScpXHJcbiAgICB0aGlzLl9kcmlmdCA9IG5ldyBEcmlmdCh0aGlzLl9lbGVtLCB0aGlzLl9vcHRpb25zKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgX3pvb21Nb2JpbGUgKCkge1xyXG4gICAgY29uc3QgeyBQaW5jaFRvWm9vbSB9ID0gYXdhaXQgaW1wb3J0KCdwaW5jaC10by16b29tJylcclxuICAgIG5ldyBQaW5jaFRvWm9vbSh0aGlzLl9lbGVtKTsgXHJcbiAgfVxyXG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9pbmhlcml0ZWQvQ29tcG9uZW50J1xyXG5pbXBvcnQgeyBjcmVhdGUgfSBmcm9tICdldngnXHJcbmltcG9ydCBIZWxwZXJzIGZyb20gJy4uL2xpYi9IZWxwZXJzJ1xyXG5pbXBvcnQgS2VlblNsaWRlciBmcm9tICdrZWVuLXNsaWRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtlZW5TbGlkZXJDb21wIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eCkge1xyXG4gICAgb3B0aW9ucyA9IHsuLi57XHJcbiAgICAgIGRyYWdTcGVlZDogMSxcclxuICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcclxuICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgYXJyb3dTdmc6IGA8c3ZnIHdpZHRoPVwiNDNcIiBoZWlnaHQ9XCI3NFwiIHZpZXdCb3g9XCIwIDAgNDMgNzRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTIuMDA2MzMgMkw0MCAzN0wyIDcyXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiM1wiLz48L3N2Zz5gXHJcbiAgICB9LCAuLi5vcHRpb25zfVxyXG4gICAgbGV0IG9wdGlvbnNDb3B5ID0gey4uLm9wdGlvbnN9XHJcbiAgICBzdXBlcihlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KVxyXG4gICAgdGhpcy5fc2xpZGVyID0gbnVsbFxyXG4gICAgdGhpcy5fYXV0b3BsYXlJbnRlcnZhbCA9IG51bGxcclxuICAgIHRoaXMuc2hvdWxkQXV0b3BsYXkgPSBmYWxzZVxyXG4gICAgdGhpcy5fbG9jYWxDdHggPSBjcmVhdGUoKVxyXG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2VcclxuICAgIHRoaXMuX2FkZGVkTGlzdGVuZXIgPSBmYWxzZVxyXG4gICAgc3VwZXIucmVpbml0T25SZXNpemUob3B0aW9uc0NvcHkpXHJcbiAgfVxyXG5cclxuICBtb3VudCAoKSB7XHJcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5tb3VudCA9PT0gZmFsc2UpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuZW5hYmxlV2hlbiAmJiAhdGhpcy5fYWRkZWRMaXN0ZW5lcikge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZSA9PiB7XHJcbiAgICAgICAgaWYgKG1hdGNoTWVkaWEoYG9ubHkgc2NyZWVuIGFuZCAke3RoaXMuX29wdGlvbnMuZW5hYmxlV2hlbn1gKS5tYXRjaGVzICYmICF0aGlzLl9pc01vdW50ZWQpIHtcclxuICAgICAgICAgIHRoaXMubW91bnQoKVxyXG4gICAgICAgIH0gZWxzZSBpZighbWF0Y2hNZWRpYShgb25seSBzY3JlZW4gYW5kICR7dGhpcy5fb3B0aW9ucy5lbmFibGVXaGVufWApLm1hdGNoZXMgJiYgdGhpcy5faXNNb3VudGVkKSB7XHJcbiAgICAgICAgICB0aGlzLnVubW91bnQoKVxyXG4gICAgICAgICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHsgcGFzc2l2ZTogdHJ1ZSB9KVxyXG4gICAgICB0aGlzLl9hZGRlZExpc3RlbmVyID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9vcHRpb25zLmVuYWJsZVdoZW4gJiYgIW1hdGNoTWVkaWEoYG9ubHkgc2NyZWVuIGFuZCAke3RoaXMuX29wdGlvbnMuZW5hYmxlV2hlbn1gKS5tYXRjaGVzKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2NvbnZlcnRPbGRPcHRpb25zKClcclxuXHJcbiAgICB0aGlzLl9zbGlkZXNQZXJWaWV3ID0gdHlwZW9mIHRoaXMuX29wdGlvbnMuc2xpZGVzID09PSAnb2JqZWN0JyA/ICh0aGlzLl9vcHRpb25zLnNsaWRlcy5wZXJWaWV3IHx8IHRoaXMuX29wdGlvbnMuc2xpZGVzLm51bWJlcikgOiB0aGlzLl9vcHRpb25zLnNsaWRlc1xyXG4gICAgXHJcbiAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoJ2tlZW4tc2xpZGVyJylcclxuICAgIGZvciAobGV0IGVsZW0gb2YgdGhpcy5fZWxlbS5jaGlsZHJlbikge1xyXG4gICAgICBpZiAoZWxlbS5oYXNBdHRyaWJ1dGUoJ2RhdGEta2Vlbi1kb3RzJykgfHwgZWxlbS5oYXNBdHRyaWJ1dGUoJ2RhdGEta2Vlbi1uYXYnKSkgY29udGludWVcclxuICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdrZWVuLXNsaWRlcl9fc2xpZGUnKVxyXG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5mYWRlKSB7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdmYWRlci1zbGlkZScpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuX3NsaWRlcyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvckFsbCgnLmtlZW4tc2xpZGVyX19zbGlkZScpXHJcblxyXG4gICAgLy8gQVMgTkFWIEZPUlxyXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuYXNOYXZGb3IpIHtcclxuICAgICAgdGhpcy5fY3R4Lm9uKCdmZmMtLW1vdW50ZWQnLCBlID0+IHtcclxuICAgICAgICB0aGlzLl9wYXJlbnRTbGlkZXIgPSB0aGlzLl90aGVtZS5nZXRDb21wb25lbnQodGhpcy5fb3B0aW9ucy5hc05hdkZvcilcclxuICAgICAgICB0aGlzLl9wYXJlbnRTbGlkZXIgPSB0aGlzLl9wYXJlbnRTbGlkZXIuY29tcG9uZW50XHJcblxyXG4gICAgICAgIHRoaXMuX3BhcmVudFNsaWRlclRpbWVvdXQgPSBudWxsXHJcblxyXG4gICAgICAgIHRoaXMuX3BhcmVudFNsaWRlci5fbG9jYWxDdHgub24oJ3NsaWRlLWNoYW5nZScsIChzdGF0ZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuc2xpZGVyLnRyYWNrLmRldGFpbHMucmVsKVxyXG5cclxuICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50U2xpZGVyVGltZW91dCkgY2xlYXJUaW1lb3V0KHRoaXMuX3BhcmVudFNsaWRlclRpbWVvdXQpXHJcblxyXG4gICAgICAgICAgICB0aGlzLl9wYXJlbnRTbGlkZXJUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbmV4dCA9IGRhdGEuc2xpZGVyLnRyYWNrLmRldGFpbHMucmVsIHx8IDBcclxuICAgICAgICAgICAgICB0aGlzLmdvVG9TbGlkZShkYXRhLnNsaWRlci50cmFjay5kZXRhaWxzLnJlbClcclxuICAgICAgICAgICAgfSwgMTAwKVxyXG5cclxuICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9vcHRpb25zLmFycm93cykgdGhpcy5fY3JlYXRlQXJyb3dzKClcclxuICAgIGlmICh0aGlzLl9vcHRpb25zLmRvdHMgJiYgdGhpcy5fc2xpZGVzLmxlbmd0aCA+IDEpIHRoaXMuX2NyZWF0ZURvdHMoKVxyXG4gICAgXHJcblxyXG4gICAgaWYgKHRoaXMuX3NsaWRlcy5sZW5ndGggPT09IHRoaXMuX3NsaWRlc1BlclZpZXcpIHtcclxuICAgICAgdGhpcy5fb3B0aW9ucy5sb29wID0gZmFsc2VcclxuICAgICAgdGhpcy5fb3B0aW9ucy5jb250cm9scyA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZG90c0NvbnRhaW5lciA9IHRoaXMuX29wdGlvbnMuZG90c0NvbnRhaW5lciA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fb3B0aW9ucy5kb3RzQ29udGFpbmVyKSB8fCB0aGlzLl9lbGVtIDogdGhpcy5fZWxlbVxyXG4gICAgdGhpcy5fZG90cyA9IHRoaXMuX2RvdHNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZG90XScpXHJcblxyXG4gICAgaWYgKCF0aGlzLl9wcmV2QXJyb3cpIHRoaXMuX3ByZXZBcnJvdyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEta2Vlbi1wcmV2XScpXHJcbiAgICBpZiAoIXRoaXMuX25leHRBcnJvdykgdGhpcy5fbmV4dEFycm93ID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rZWVuLW5leHRdJylcclxuXHJcbiAgICB0aGlzLl9vcHRpb25zLmFuaW1hdGlvblN0YXJ0ZWQgPSBzbGlkZXIgPT4ge1xyXG4gICAgICB0aGlzLl9sb2NhbEN0eC5lbWl0KCdhbmltYXRpb24tc3RhcnRlZCcsIG51bGwsIHsgc2xpZGVyOiBzbGlkZXIgfSlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9vcHRpb25zLnNsaWRlQ2hhbmdlZCA9IChzbGlkZXIpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVDbGFzc2VzKHNsaWRlcilcclxuICAgICAgdGhpcy51cGRhdGVGYWRlSGVpZ2h0KHNsaWRlcilcclxuICAgICAgdGhpcy5fbG9jYWxDdHguZW1pdCgnc2xpZGUtY2hhbmdlJywgbnVsbCwgeyBzbGlkZXI6IHNsaWRlciB9KVxyXG4gICAgICB0aGlzLmFkYXB0aXZlSGVpZ2h0KHNsaWRlcilcclxuICAgICAgaWYgKHRoaXMuX2lzTW91bnRlZCkgdGhpcy5zY3JvbGxSZXZlYWxGaXgoc2xpZGVyKVxyXG5cclxuICAgICAgdGhpcy5fcGF1c2VWaWRlb3MoKVxyXG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5wbGF5VmlkZW9zKSB0aGlzLl9wbGF5VmlkZW9zKHNsaWRlcilcclxuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuc2V0U2xpZGVDb3VudCkgdGhpcy5fc2V0U2xpZGVDb3VudChzbGlkZXIpXHJcblxyXG4gICAgICB0aGlzLl9kb1NsaWRlQ1NTVmFycyhzbGlkZXIpXHJcblxyXG4gICAgICAvLyBpZiAodGhpcy5fb3B0aW9ucy5hc05hdkZvciAmJiB0aGlzLl9wYXJlbnRTbGlkZXIpIHtcclxuICAgICAgLy8gICBsZXQgcGFyZW50U2xpZGVyID0gdGhpcy5fcGFyZW50U2xpZGVyLl9zbGlkZXJcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLl9zbGlkZXIpXHJcbiAgICAgIC8vICAgY29uc3QgbmV4dCA9IHRoaXMuX3NsaWRlci50cmFjay5kZXRhaWxzLnJlbCB8fCAwXHJcbiAgICAgIC8vICAgcGFyZW50U2xpZGVyLm1vdmVUb0lkeChNYXRoLm1pbihwYXJlbnRTbGlkZXIudHJhY2suZGV0YWlscy5tYXhJZHgsIG5leHQpKVxyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fb3B0aW9ucy5hbmltYXRpb25FbmRlZCA9IChzbGlkZXIpID0+IHtcclxuICAgICAgaWYgKHRoaXMuX29wdGlvbnMubmFtZXNwYWNlKSB7XHJcbiAgICAgICAgdGhpcy5fY3R4LmVtaXQoJ2tlZW4tc2xpZGVyOmNoYW5nZScsIHtcclxuICAgICAgICAgIG5hbWVzcGFjZTogdGhpcy5fb3B0aW9ucy5uYW1lc3BhY2UsXHJcbiAgICAgICAgICBhY3RpdmVTbGlkZTogc2xpZGVyLnRyYWNrLmRldGFpbHMucmVsLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLmFzTmF2Rm9yICYmIHRoaXMuX3BhcmVudFNsaWRlcikge1xyXG4gICAgICAgIGxldCBwYXJlbnRTbGlkZXIgPSB0aGlzLl9wYXJlbnRTbGlkZXIuX3NsaWRlclxyXG4gICAgICAgIGNvbnN0IG5leHQgPSB0aGlzLl9zbGlkZXIudHJhY2suZGV0YWlscy5yZWwgfHwgMFxyXG4gICAgICAgIHBhcmVudFNsaWRlci5tb3ZlVG9JZHgoTWF0aC5taW4ocGFyZW50U2xpZGVyLnRyYWNrLmRldGFpbHMubWF4SWR4LCBuZXh0KSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX29wdGlvbnMuY3JlYXRlZCA9IChzbGlkZXIpID0+IHtcclxuICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKCdrZWVuLXNsaWRlci0tcmVhZHknKVxyXG4gICAgICB0aGlzLnVwZGF0ZUNsYXNzZXMoc2xpZGVyKVxyXG4gICAgICB0aGlzLnVwZGF0ZUZhZGVIZWlnaHQoc2xpZGVyKVxyXG4gICAgICB0aGlzLmFkYXB0aXZlSGVpZ2h0KHNsaWRlcilcclxuICAgICAgdGhpcy5fZG9TbGlkZUNTU1ZhcnMoc2xpZGVyKVxyXG5cclxuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuYXV0b3BsYXkpIHRoaXMuX3NldHVwQXV0b3BsYXkoc2xpZGVyKVxyXG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5hdXRvcGxheVdoZW5WaXNpYmxlT25seSkgdGhpcy5fZG9BdXRvcGxheU9uU2Nyb2xsKClcclxuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuYWxpZ25BcnJvd3NUbykgdGhpcy5hbGlnbkFycm93cygpXHJcbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLmFycm93S2V5TmF2aWdhdGlvbikgdGhpcy5fYWRkQXJyb3dLZXlFdmVudHMoKVxyXG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5wbGF5VmlkZW9zKSB0aGlzLl9wbGF5VmlkZW9zKHNsaWRlcilcclxuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuc2V0U2xpZGVDb3VudCkgdGhpcy5fc2V0U2xpZGVDb3VudChzbGlkZXIpXHJcbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLmZvY3VzT25TZWxlY3QpIHRoaXMuZm9jdXNPblNlbGVjdChzbGlkZXIpXHJcblxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVGYWRlSGVpZ2h0KClcclxuICAgICAgICB0aGlzLmFkYXB0aXZlSGVpZ2h0KClcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuYWxpZ25BcnJvd3NUbykge1xyXG4gICAgICAgICAgSGVscGVycy5uZXh0RnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFsaWduQXJyb3dzKClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fb3B0aW9ucy5kcmFnU3RhcnRlZCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5zaG91bGRBdXRvcGxheSA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fb3B0aW9ucy5kcmFnRW5kZWQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2hvdWxkQXV0b3BsYXkgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICh0aGlzLl9vcHRpb25zLmZhZGUpIHtcclxuICAgICAgdGhpcy5fb3B0aW9ucy5kZXRhaWxzQ2hhbmdlZCA9IChzbGlkZXIpID0+IHRoaXMuZmFkZXIoc2xpZGVyKVxyXG4gICAgICB0aGlzLl9vcHRpb25zLnJlbmRlck1vZGUgPSAnY3VzdG9tJ1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3NsaWRlciA9IG5ldyBLZWVuU2xpZGVyKHRoaXMuX2VsZW0sIHRoaXMuX29wdGlvbnMpXHJcblxyXG4gICAgaWYgKHRoaXMuX3ByZXZBcnJvdykgdGhpcy5fcHJldkFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmdvVG9QcmV2KGUpKVxyXG4gICAgaWYgKHRoaXMuX25leHRBcnJvdykgdGhpcy5fbmV4dEFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmdvVG9OZXh0KGUpKVxyXG5cclxuICAgIGZvciAobGV0IGRvdCBvZiB0aGlzLl9kb3RzKSB7XHJcbiAgICAgIGRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHRoaXMuZ29Ub1NsaWRlKE51bWJlcihkb3QuZGF0YXNldC5kb3QpKVxyXG4gXHJcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudFNsaWRlcikge1xyXG4gICAgICAgICAgdGhpcy5fcGFyZW50U2xpZGVyLmdvVG9TbGlkZShOdW1iZXIoZG90LmRhdGFzZXQuZG90KSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZVxyXG5cclxuICAgIGlmICh0aGlzLl9vcHRpb25zLnRyaWdnZXJPbk1vdW50KSB7XHJcbiAgICAgIHRoaXMuX2N0eC5lbWl0KHRoaXMuX29wdGlvbnMudHJpZ2dlck9uTW91bnQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1c09uU2VsZWN0IChzbGlkZXIgPSB0aGlzLl9zbGlkZXIpIHtcclxuICAgIGZvciAobGV0IFtpbmRleCwgc2xpZGVdIG9mIHRoaXMuX3NsaWRlcy5lbnRyaWVzKCkpIHtcclxuICAgICAgc2xpZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICB0aGlzLmdvVG9TbGlkZShpbmRleClcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zZXRTbGlkZUNvdW50KHNsaWRlciA9IHRoaXMuX3NsaWRlcikge1xyXG4gICAgbGV0IHNsaWRlQ291bnRQYXJlbnRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9vcHRpb25zLnNldFNsaWRlQ291bnQpXHJcbiAgICBsZXQgdG90YWxFbGVtID0gc2xpZGVDb3VudFBhcmVudEVsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtc2xpZGUtdG90YWxdJylcclxuICAgIGxldCBjdXJyZW50RWxlbSA9IHNsaWRlQ291bnRQYXJlbnRFbGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNsaWRlLWN1cnJlbnRdJylcclxuXHJcbiAgICB0b3RhbEVsZW0uaW5uZXJIVE1MID0gc2xpZGVyLmRldGFpbHMoKS5zaXplXHJcbiAgICBjdXJyZW50RWxlbS5pbm5lckhUTUwgPSBzbGlkZXIuZGV0YWlscygpLnJlbGF0aXZlU2xpZGUgKyAxXHJcblxyXG4gICAgaWYgKHRoaXMuaXNBdEVuZChzbGlkZXIpICYmIHNsaWRlci5kZXRhaWxzKCkucmVsYXRpdmVTbGlkZSA9PSAwKSB7XHJcbiAgICAgIHNsaWRlQ291bnRQYXJlbnRFbGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdW5tb3VudCAoKSB7XHJcbiAgICBpZiAodGhpcy5fc2xpZGVyKSB7XHJcbiAgICAgIHRoaXMuX3NsaWRlci5kZXN0cm95KClcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9uYXZDb250YWluZXIgJiYgdGhpcy5fbmF2Q29udGFpbmVyLnBhcmVudE5vZGUpIHtcclxuICAgICAgdGhpcy5fbmF2Q29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5fbmF2Q29udGFpbmVyKVxyXG4gICAgfVxyXG4gICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdrZWVuLXNsaWRlcicpXHJcbiAgICBmb3IgKGxldCBlbGVtIG9mIHRoaXMuX2VsZW0uY2hpbGRyZW4pIHtcclxuICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdrZWVuLXNsaWRlcl9fc2xpZGUnKVxyXG4gICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGVyLXNsaWRlJylcclxuICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcclxuICAgIH1cclxuICAgIHRoaXMuX2VsZW0uc3R5bGUuaGVpZ2h0ID0gJydcclxuICB9XHJcblxyXG4gIF9zZXR1cEF1dG9wbGF5IChzbGlkZXIpIHtcclxuICAgIGlmICghdGhpcy5fb3B0aW9ucy5hdXRvcGxheSkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5hdXRvcGxheVRpbWVvdXQpXHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hvdWxkQXV0b3BsYXkgPSB0cnVlXHJcbiAgICB0aGlzLnNob3VsZEF1dG9wbGF5VmlzaWJsZSA9IHRydWVcclxuXHJcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5wYXVzZUF1dG9wbGF5T25Ib3Zlcikge1xyXG4gICAgICB0aGlzLl9lbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGUgPT4ge1xyXG4gICAgICAgIHRoaXMuc2hvdWxkQXV0b3BsYXkgPSBmYWxzZVxyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmF1dG9wbGF5VGltZW91dClcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHRoaXMuX2VsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBlID0+IHtcclxuICAgICAgICB0aGlzLnNob3VsZEF1dG9wbGF5ID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuYXV0b3BsYXkoKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXV0b3BsYXkoKVxyXG5cclxuICAgIHNsaWRlci5vbignZHJhZ1N0YXJ0ZWQnLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmF1dG9wbGF5VGltZW91dCkgY2xlYXJUaW1lb3V0KHRoaXMuYXV0b3BsYXlUaW1lb3V0KVxyXG4gICAgfSlcclxuXHJcbiAgICBzbGlkZXIub24oJ2FuaW1hdGlvbkVuZGVkJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmF1dG9wbGF5KClcclxuICAgIH0pXHJcblxyXG4gICAgc2xpZGVyLm9uKCd1cGRhdGVkJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmF1dG9wbGF5KClcclxuICAgIH0pIFxyXG5cclxuICB9XHJcblxyXG4gIGF1dG9wbGF5ICgpIHtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLmF1dG9wbGF5VGltZW91dClcclxuICAgIHRoaXMuYXV0b3BsYXlUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5zaG91bGRBdXRvcGxheSB8fCAhdGhpcy5zaG91bGRBdXRvcGxheVZpc2libGUpIHJldHVyblxyXG5cclxuICAgICAgaWYgKHRoaXMuX3NsaWRlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQXRFbmQoKSAmJiAhdGhpcy5fb3B0aW9ucy5sb29wKSB7XHJcbiAgICAgICAgICB0aGlzLmdvVG9TbGlkZSgwKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLl9zbGlkZXIubmV4dCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCB0aGlzLl9vcHRpb25zLmF1dG9wbGF5U3BlZWQpXHJcbiAgfVxyXG5cclxuICBfZG9BdXRvcGxheU9uU2Nyb2xsICgpIHtcclxuICAgIGlmICghdGhpcy5fb3B0aW9ucy5hdXRvcGxheSkgcmV0dXJuIGZhbHNlXHJcblxyXG4gICAgbGV0IHZpc2libGVDaGVjayA9ICgpID0+IHtcclxuICAgICAgaWYoSGVscGVycy5pc0luVmlld3BvcnQodGhpcy5fZWxlbSkgJiYgdGhpcy5zaG91bGRBdXRvcGxheVZpc2libGUgPT0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLnNob3VsZEF1dG9wbGF5VmlzaWJsZSA9IHRydWVcclxuICAgICAgICB0aGlzLmF1dG9wbGF5KClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNob3VsZEF1dG9wbGF5VmlzaWJsZSA9IGZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b3BsYXlUaW1lb3V0KSBjbGVhclRpbWVvdXQodGhpcy5hdXRvcGxheVRpbWVvdXQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGUgPT4ge1xyXG4gICAgICB2aXNpYmxlQ2hlY2soKVxyXG4gICAgfSwgeyBwYXNzaXZlOiB0cnVlIH0pXHJcbiAgICB2aXNpYmxlQ2hlY2soKVxyXG4gIH1cclxuXHJcbiAgX2RvU2xpZGVDU1NWYXJzIChzbGlkZXIgPSB0aGlzLl9zbGlkZXIpIHtcclxuICAgIGxldCBzbGlkZSA9IHRoaXMuZ2V0QWN0aXZlU2xpZGVFbGVtKHNsaWRlcilcclxuXHJcbiAgICBpZiAoc2xpZGUgJiYgc2xpZGUuZGF0YXNldC5zbGlkZUNzc1ZhcnMpIHtcclxuICAgICAgbGV0IHZhckFyciA9IEpTT04ucGFyc2Uoc2xpZGUuZGF0YXNldC5zbGlkZUNzc1ZhcnMpO1xyXG5cclxuICAgICAgZm9yIChsZXQgY3NzVmFyIG9mIHZhckFycikge1xyXG4gICAgICAgIGxldCB0b1NldE9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjc3NWYXIub25FbGVtKVxyXG5cclxuICAgICAgICBmb3IgKGxldCBjbGFzc1N0ciBvZiB0b1NldE9uLmNsYXNzTGlzdCkge1xyXG4gICAgICAgICAgaWYgKGNsYXNzU3RyLmluY2x1ZGVzKGNzc1Zhci5jbGFzcy5yZXBsYWNlKCdbdmFsdWVdJywgJycpKSkge1xyXG4gICAgICAgICAgICB0b1NldE9uLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NTdHIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodG9TZXRPbikge1xyXG4gICAgICAgICAgdG9TZXRPbi5jbGFzc0xpc3QuYWRkKGNzc1Zhci5jbGFzcy5yZXBsYWNlKCdbdmFsdWVdJywgY3NzVmFyLnZhbHVlKSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9hZGRBcnJvd0tleUV2ZW50cyAoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XHJcbiAgICAgIGxldCBldiA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgICBpZiAoZXYua2V5Q29kZSA9PT0gMzcpIHtcclxuICAgICAgICAgLy8gbGVmdCBhcnJvd1xyXG4gICAgICAgICB0aGlzLl9zbGlkZXIucHJldigpXHJcbiAgICAgIH0gZWxzZSBpZiAoZXYua2V5Q29kZSA9PT0gMzkpIHtcclxuICAgICAgICAgLy8gcmlnaHQgYXJyb3dcclxuICAgICAgICAgdGhpcy5fc2xpZGVyLm5leHQoKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgX2NyZWF0ZUFycm93cyAoKSB7XHJcbiAgICB2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBlLmNsYXNzTGlzdC5hZGQoJ2tlZW4tbmF2JylcclxuICAgIGUuc2V0QXR0cmlidXRlKCdkYXRhLWtlZW4tbmF2JywgdHJ1ZSlcclxuICAgIGUuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxidXR0b24gZGF0YS1rZWVuLXByZXYgY2xhc3M9XCJrZWVuLWFycm93LXByZXYga2Vlbi1hcnJvd1wiIGFyaWEtbGFiZWw9XCJQcmV2aW91cyBTbGlkZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImtlZW4tYXJyb3ctaW5uZXJcIj5cclxuICAgICAgICAgICAgICAke3RoaXMuX29wdGlvbnMuYXJyb3dTdmcgfHwgJyd9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGJ1dHRvbiBkYXRhLWtlZW4tbmV4dCBjbGFzcz1cImtlZW4tYXJyb3ctbmV4dCBrZWVuLWFycm93XCIgYXJpYS1sYWJlbD1cIk5leHQgU2xpZGVcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJrZWVuLWFycm93LWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgJHt0aGlzLl9vcHRpb25zLmFycm93U3ZnIHx8ICcnfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgYDtcclxuICAgIHRoaXMuX25hdkNvbnRhaW5lciA9IGVcclxuICAgIHRoaXMuX3ByZXZBcnJvdyA9IHRoaXMuX25hdkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rZWVuLXByZXZdJylcclxuICAgIHRoaXMuX25leHRBcnJvdyA9IHRoaXMuX25hdkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rZWVuLW5leHRdJylcclxuXHJcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5hcHBlbmRBcnJvd3MpIHtcclxuICAgICAgbGV0IHRvQXBwZW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9vcHRpb25zLmFwcGVuZEFycm93cylcclxuICAgICAgaWYgKHRvQXBwZW5kKSB0b0FwcGVuZC5hcHBlbmRDaGlsZChlKSBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2VsZW0uYXBwZW5kQ2hpbGQoZSkgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfY3JlYXRlRG90cyAoKSB7XHJcbiAgICB2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBlLmNsYXNzTGlzdC5hZGQoJ2tlZW4tZG90cycpXHJcbiAgICBlLnNldEF0dHJpYnV0ZSgnZGF0YS1rZWVuLWRvdHMnLCB0cnVlKVxyXG5cclxuICAgIGxldCBkb3RzVG9NYWtlID0gTWF0aC5jZWlsKHRoaXMuX3NsaWRlcy5sZW5ndGggLyB0aGlzLl9zbGlkZXNQZXJWaWV3KVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZG90c1RvTWFrZTsgaSsrKSB7XHJcbiAgICAgIGUuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YnV0dG9uIGRhdGEtZG90PScke2kgKiB0aGlzLl9zbGlkZXNQZXJWaWV3fScgYXJpYS1sYWJlbD1cIlNsaWRlciBkb3RcIj48L2J1dHRvbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICBgXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKCdrZWVuLS1kb3R0ZWQnKVxyXG4gICAgdGhpcy5fZWxlbS5hcHBlbmRDaGlsZChlKSBcclxuICB9XHJcblxyXG4gIF9wbGF5VmlkZW9zIChzbGlkZXIgPSB0aGlzLl9zbGlkZXIpIHtcclxuICAgIHRoaXMuX3BhdXNlVmlkZW9zKClcclxuXHJcbiAgICBIZWxwZXJzLm5leHRGcmFtZSgoKSA9PiB7XHJcbiAgICAgIGxldCBhY3RpdmUgPSB0aGlzLmdldEFjdGl2ZVNsaWRlRWxlbSgpXHJcbiAgICAgIGxldCBhY3RpdmVWaWRlbyA9IGFjdGl2ZS5xdWVyeVNlbGVjdG9yKCd2aWRlbycpXHJcblxyXG4gICAgICBpZiAoYWN0aXZlVmlkZW8pIHtcclxuICAgICAgICBpZiAoYWN0aXZlVmlkZW8uaGFzQXR0cmlidXRlKCdbZGF0YS1sYXp5XScpICYmICFhY3RpdmVWaWRlby5jbGFzc0xpc3QuY29udGFpbnMoJ2xvYWRlZCcpKSB7XHJcbiAgICAgICAgICBhY3RpdmVWaWRlby5hZGRFdmVudExpc3RlbmVyKCdmZmMtLWxvYWRlZCcsIGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9hZGVkIEV2ZW50JylcclxuICAgICAgICAgICAgYWN0aXZlVmlkZW8ucGxheSgpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhY3RpdmVWaWRlby5wbGF5KClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBfcGF1c2VWaWRlb3MgKCkge1xyXG4gICAgbGV0IHZpZGVvcyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvckFsbCgndmlkZW8nKVxyXG4gICAgZm9yIChsZXQgdmlkZW8gb2YgdmlkZW9zKSB7XHJcbiAgICAgIHZpZGVvLnBhdXNlKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZhZGVyIChzbGlkZXIgPSB0aGlzLl9zbGlkZXIpIHtcclxuICAgIGZvciAobGV0IFtpbmRleCwgc2xpZGVdIG9mIHNsaWRlci5zbGlkZXMuZW50cmllcygpKSB7XHJcbiAgICAgIHNsaWRlLnN0eWxlLm9wYWNpdHkgPSBzbGlkZXIudHJhY2suZGV0YWlscy5zbGlkZXNbaW5kZXhdLnBvcnRpb25cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdvVG9TbGlkZSAoaW5kZXgsIGRvbnRBbmltYXRlID0gZmFsc2UpIHtcclxuICAgIGlmICghdGhpcy5fc2xpZGVyKSByZXR1cm5cclxuICAgICAgXHJcbiAgICBsZXQgZHVyYXRpb24gPSBkb250QW5pbWF0ZSA/IDAgOiB0aGlzLl9vcHRpb25zLmR1cmF0aW9uXHJcblxyXG4gICAgbGV0IG5lYXJlc3QgPSBmYWxzZVxyXG5cclxuICAgIC8vIGlmICh0aGlzLl9vcHRpb25zLmxvb3AgJiYgdGhpcy5fc2xpZGVyLnRyYWNrLmRldGFpbHMuc2xpZGVzLmxlbmd0aCA+IDIpIHtcclxuICAgIC8vICAgbmVhcmVzdCA9IHRydWVcclxuICAgIC8vIH1cclxuXHJcbiAgICB0aGlzLl9zbGlkZXIubW92ZVRvSWR4KGluZGV4LCBuZWFyZXN0LCBkdXJhdGlvbilcclxuXHJcbiAgICBmb3IgKGxldCBkb3Qgb2YgdGhpcy5fZG90cykge1xyXG4gICAgICBkb3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuXHJcbiAgICAgIGlmIChOdW1iZXIoZG90LmRhdGFzZXQuZG90KSA9PT0gaW5kZXgpIHtcclxuICAgICAgICBkb3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ29Ub1ByZXYgKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgdGhpcy5fc2xpZGVyLnByZXYoKVxyXG4gIH1cclxuXHJcbiAgZ29Ub05leHQgKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgdGhpcy5fc2xpZGVyLm5leHQoKVxyXG4gIH1cclxuXHJcbiAgc2Nyb2xsUmV2ZWFsRml4ICgpIHtcclxuICAgIGZvciAobGV0IHNsaWRlIG9mIHRoaXMuX3NsaWRlcykge1xyXG4gICAgICBpZiAoc2xpZGUuaGFzQXR0cmlidXRlKCdkYXRhLXNyLWlkJykgfHwgc2xpZGUuaGFzQXR0cmlidXRlKCdkYXRhLXJldmVhbCcpKSB7XHJcbiAgICAgICAgc2xpZGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ29wYWNpdHknKVxyXG4gICAgICAgIHNsaWRlLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcclxuICAgICAgICBzbGlkZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndmlzaWJpbGl0eScpXHJcbiAgICAgICAgc2xpZGUucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNyLWlkJylcclxuICAgICAgICBzbGlkZS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtcmV2ZWFsJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0QWN0aXZlU2xpZGVFbGVtIChzbGlkZXIgPSB0aGlzLl9zbGlkZXIpIHtcclxuICAgIGxldCBzbGlkZUluZGV4ID0gc2xpZGVyLnRyYWNrLmRldGFpbHMucmVsXHJcblxyXG4gICAgZm9yIChsZXQgW2luZGV4LCBzbGlkZV0gb2YgdGhpcy5fc2xpZGVzLmVudHJpZXMoKSkge1xyXG4gICAgICBpZiAoaW5kZXggPT09IHNsaWRlSW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gc2xpZGVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgYWRhcHRpdmVIZWlnaHQgKHNsaWRlciA9IHRoaXMuX3NsaWRlcikge1xyXG4gICAgaWYgKCF0aGlzLl9vcHRpb25zLmFkYXB0aXZlSGVpZ2h0IHx8ICFzbGlkZXIpIHJldHVybiBmYWxzZVxyXG5cclxuICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZCgna2Vlbi0tYWRhcHRpdmUtaGVpZ2h0JylcclxuICBcclxuICAgIEhlbHBlcnMubmV4dEZyYW1lKCgpID0+IHtcclxuICAgICAgbGV0IHNsaWRlID0gc2xpZGVyLnRyYWNrLmRldGFpbHMucmVsXHJcbiAgICAgIFxyXG4gICAgICBsZXQgaGVpZ2h0ID0gMFxyXG5cclxuICAgICAgaGVpZ2h0ICs9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9lbGVtKS5wYWRkaW5nQm90dG9tKVxyXG4gICAgICBoZWlnaHQgKz0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW0pLnBhZGRpbmdUb3ApXHJcblxyXG4gICAgICBsZXQgYWN0aXZlU2xpZGUgPSB0aGlzLmdldEFjdGl2ZVNsaWRlRWxlbShzbGlkZXIpXHJcblxyXG4gICAgICBpZiAoIWFjdGl2ZVNsaWRlKSByZXR1cm5cclxuXHJcbiAgICAgIGhlaWdodCArPSBhY3RpdmVTbGlkZS5jbGllbnRIZWlnaHRcclxuICAgICAgdGhpcy5fZWxlbS5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlRmFkZUhlaWdodCAoc2xpZGVyID0gdGhpcy5fc2xpZGVyKSB7XHJcbiAgICBpZiAoIXRoaXMuX29wdGlvbnMuZmFkZSB8fCAhc2xpZGVyKSByZXR1cm4gZmFsc2VcclxuXHJcbiAgICBsZXQgc2xpZGUgPSBzbGlkZXIudHJhY2suZGV0YWlscy5yZWxcclxuICAgIFxyXG4gICAgbGV0IGhlaWdodCA9IDBcclxuXHJcbiAgICBoZWlnaHQgKz0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW0pLnBhZGRpbmdCb3R0b20pXHJcbiAgICBoZWlnaHQgKz0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW0pLnBhZGRpbmdUb3ApXHJcblxyXG4gICAgbGV0IGFjdGl2ZVNsaWRlID0gdGhpcy5nZXRBY3RpdmVTbGlkZUVsZW0oc2xpZGVyKVxyXG4gICAgaWYgKCFhY3RpdmVTbGlkZSkgcmV0dXJuXHJcblxyXG4gICAgaGVpZ2h0ICs9IGFjdGl2ZVNsaWRlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxyXG5cclxuICAgIHRoaXMuX2VsZW0uc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YFxyXG5cclxuICAgIGlmICghdGhpcy5fZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhZGUtc2xpZGVyJykpIHtcclxuICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKCdmYWRlLXNsaWRlcicpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhbGlnbkFycm93cyAoKSB7XHJcbiAgICBpZiAoIXRoaXMuX29wdGlvbnMuYWxpZ25BcnJvd3NUbyB8fCAhdGhpcy5fbmF2Q29udGFpbmVyKSByZXR1cm4gZmFsc2VcclxuICAgIGxldCBlbGVtID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKHRoaXMuX29wdGlvbnMuYWxpZ25BcnJvd3NUbylcclxuICAgIHRoaXMuX25hdkNvbnRhaW5lci5zdHlsZS50b3AgPSBgJHtlbGVtLmNsaWVudEhlaWdodCAvIDJ9cHhgXHJcbiAgfVxyXG5cclxuICB1cGRhdGVDbGFzc2VzIChzbGlkZXIpIHtcclxuICAgIGlmICghc2xpZGVyKSByZXR1cm4gZmFsc2VcclxuXHJcbiAgICBsZXQgc2xpZGUgPSBzbGlkZXIudHJhY2suZGV0YWlscy5yZWxcclxuICAgIGxldCBtYXhTbGlkZXMgPSBzbGlkZXIudHJhY2suZGV0YWlscy5zbGlkZXMubGVuZ3RoXHJcbiAgICBsZXQgcGVyVmlldyA9IHRoaXMuX3NsaWRlc1BlclZpZXdcclxuICAgIGxldCBlbmRTbGlkZSA9IHNsaWRlICsgcGVyVmlld1xyXG5cclxuICAgIGxldCBjYW5TbGlkZSA9IHBlclZpZXcgIT09IG1heFNsaWRlc1xyXG5cclxuICAgIGlmICh0aGlzLl9wcmV2QXJyb3cgJiYgIXRoaXMuX29wdGlvbnMubG9vcCkge1xyXG4gICAgICBpZiAoc2xpZGUgPT09IDAgfHwgIWNhblNsaWRlKSB7XHJcbiAgICAgICAgdGhpcy5fcHJldkFycm93LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX3ByZXZBcnJvdy5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9uZXh0QXJyb3cgJiYgIXRoaXMuX29wdGlvbnMubG9vcCkge1xyXG4gICAgICBpZiAodGhpcy5pc0F0RW5kKHNsaWRlcikgfHwgIWNhblNsaWRlKSB7XHJcbiAgICAgICAgdGhpcy5fbmV4dEFycm93LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX25leHRBcnJvdy5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBhY3RpdmVTbGlkZSA9IHRoaXMuZ2V0QWN0aXZlU2xpZGVFbGVtKHNsaWRlcilcclxuXHJcbiAgICBmb3IgKGxldCBzbGlkZSBvZiB0aGlzLl9zbGlkZXMpIHtcclxuICAgICAgc2xpZGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aXZlU2xpZGUpIHtcclxuICAgICAgYWN0aXZlU2xpZGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fZG90cykge1xyXG4gICAgICBmb3IgKGxldCBkb3Qgb2YgdGhpcy5fZG90cykge1xyXG4gICAgICAgIGRvdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG5cclxuICAgICAgICBpZiAoTnVtYmVyKGRvdC5kYXRhc2V0LmRvdCkgPT09IHNsaWRlKSB7XHJcbiAgICAgICAgICBkb3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgaWR4ID0gc2xpZGVyLnRyYWNrLmRldGFpbHMubWF4SWR4XHJcbiAgICBsZXQgdG90YWxTbGlkZXMgPSBpZHggPT09IEluZmluaXR5ID8gbWF4U2xpZGVzIDogaWR4ICsgMVxyXG5cclxuICAgIHRoaXMuX2VsZW0uc3R5bGUuc2V0UHJvcGVydHkoJy0tY3VycmVudC1zbGlkZScsIHNsaWRlICsgMSlcclxuICAgIHRoaXMuX2VsZW0uc3R5bGUuc2V0UHJvcGVydHkoJy0tdG90YWwtc2xpZGVzJywgdG90YWxTbGlkZXMpXHJcblxyXG4gICAgaWYgKHRoaXMuX29wdGlvbnMucHJvZ3Jlc3NTZWxlY3Rvcikge1xyXG4gICAgICBsZXQgcHJvZ3Jlc3NFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9vcHRpb25zLnByb2dyZXNzU2VsZWN0b3IpXHJcbiAgICAgIGlmKHByb2dyZXNzRWxlbSkge1xyXG4gICAgICAgIHByb2dyZXNzRWxlbS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jdXJyZW50LXNsaWRlJywgc2xpZGUgKyAxKVxyXG4gICAgICAgIHByb2dyZXNzRWxlbS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10b3RhbC1zbGlkZXMnLCB0b3RhbFNsaWRlcylcclxuXHJcbiAgICAgICAgaWYgKHRvdGFsU2xpZGVzID09PSAxKSB7XHJcbiAgICAgICAgICBwcm9ncmVzc0VsZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0F0RW5kIChzbGlkZXIgPSB0aGlzLl9zbGlkZXIpIHtcclxuICAgIGxldCBzbGlkZSA9IHNsaWRlci50cmFjay5kZXRhaWxzLnJlbFxyXG4gICAgbGV0IG1heFNsaWRlcyA9IHNsaWRlci50cmFjay5kZXRhaWxzLnNsaWRlcy5sZW5ndGhcclxuICAgIGxldCBwZXJWaWV3ID0gdGhpcy5fc2xpZGVzUGVyVmlld1xyXG4gICAgbGV0IGVuZFNsaWRlID0gc2xpZGUgKyBNYXRoLmZsb29yKHBlclZpZXcpXHJcblxyXG4gICAgcmV0dXJuIGVuZFNsaWRlID49IG1heFNsaWRlc1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaCAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2xpZGVyLnJlZnJlc2goKVxyXG4gIH1cclxuXHJcbiAgcmVzaXplICgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zbGlkZXIucmVzaXplKClcclxuICB9XHJcblxyXG4gIF9jb252ZXJ0T2xkT3B0aW9ucygpIHtcclxuICAgIGlmICh0aGlzLl9vcHRpb25zLnNsaWRlc1BlclZpZXcpIHtcclxuICAgICAgdGhpcy5fb3B0aW9ucy5zbGlkZXMgPSB0aGlzLl9vcHRpb25zLnNsaWRlcyB8fCB7fVxyXG4gICAgICB0aGlzLl9vcHRpb25zLnNsaWRlcy5wZXJWaWV3ID0gdGhpcy5fb3B0aW9ucy5zbGlkZXNQZXJWaWV3XHJcbiAgICAgIGRlbGV0ZSB0aGlzLl9vcHRpb25zLnNsaWRlc1BlclZpZXdcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5zcGFjaW5nKSB7XHJcbiAgICAgIHRoaXMuX29wdGlvbnMuc2xpZGVzLnNwYWNpbmcgPSB0aGlzLl9vcHRpb25zLnNwYWNpbmdcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2luaGVyaXRlZC9Db21wb25lbnQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZWVuU2xpZGVyTmF2IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eCkge1xyXG4gICAgc3VwZXIoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eClcclxuICAgIHRoaXMuX21haW5TbGlkZXIgPSB0aGlzLl90aGVtZS5nZXRDb21wb25lbnQodGhpcy5fb3B0aW9ucy5wYXJlbnRTbGlkZXIpXHJcbiAgfVxyXG5cclxuICBtb3VudCAoKSB7XHJcbiAgICBmb3IgKGxldCBbaW5kZXgsIGl0ZW1dIG9mIHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvckFsbCgnLmtlZW4tc2xpZGVyX19uYXYtaXRlbScpLmVudHJpZXMoKSkge1xyXG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCcua2Vlbi1zbGlkZXJfX25hdi1pdGVtJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgKGVsZW1lbnQgPT0gaXRlbSkgPyBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpIDogZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZ29Ub1NsaWRlKGluZGV4KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2N0eC5vbigna2Vlbi1zbGlkZXI6Y2hhbmdlJywgcGF5bG9hZCA9PiB7XHJcbiAgICAgIHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvckFsbCgnLmtlZW4tc2xpZGVyX19uYXYtaXRlbScpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKE51bWJlcihpdGVtLmRhdGFzZXQuZG90KSA9PT0gcGF5bG9hZC5hY3RpdmVTbGlkZSkge1xyXG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdvVG9TbGlkZShpbmRleCkge1xyXG4gICAgdGhpcy5fbWFpblNsaWRlci5jb21wb25lbnQuZ29Ub1NsaWRlKGluZGV4KVxyXG4gIH1cclxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vaW5oZXJpdGVkL0NvbXBvbmVudCdcclxuaW1wb3J0IExhenlMb2FkIGZyb20gJ3ZhbmlsbGEtbGF6eWxvYWQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXp5TG9hZENvbXAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yIChlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KSB7XHJcbiAgICBzdXBlcihlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KVxyXG4gICAgdGhpcy5fb3B0aW9ucyA9IHsuLi57XHJcbiAgICAgIGVsZW1lbnRzX3NlbGVjdG9yOiAnW2RhdGEtbGF6eV0nLFxyXG4gICAgICBjYWxsYmFja19sb2FkZWQ6IGUgPT4ge1xyXG4gICAgICAgIGlmIChlLnBhcmVudE5vZGUubm9kZU5hbWUgPT09ICdQSUNUVVJFJykge1xyXG4gICAgICAgICAgZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLm5vZGVOYW1lID09PSAnVklERU8nKSB7XHJcbiAgICAgICAgICB0aGlzLl9jdHguZW1pdCgncmFkaWFudC0tdmlkZW8tbG9hZGVkJywgbnVsbCwgZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGNhbGxiYWNrX2Vycm9yOiBlID0+IHtcclxuICAgICAgICBpZiAoZS5wYXJlbnROb2RlLm5vZGVOYW1lID09PSAnUElDVFVSRScpIHtcclxuICAgICAgICAgIGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB0aHJlc2hvbGQ6IDUwMFxyXG4gICAgfSwgLi4udGhpcy5fb3B0aW9uc31cclxuICAgIHRoaXMuX2xhenlMb2FkID0gbnVsbFxyXG4gIH1cclxuXHJcbiAgbW91bnQgKCkge1xyXG4gICAgdGhpcy5fbGF6eUxvYWQgPSBuZXcgTGF6eUxvYWQodGhpcy5fb3B0aW9ucylcclxuXHJcbiAgICB0aGlzLl9jdHgub24oJ3JhZGlhbnQtLWxhenktbG9hZC11cGRhdGUnLCBlID0+IHtcclxuICAgICAgdGhpcy5fbGF6eUxvYWQudXBkYXRlKClcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5fY3R4Lm9uKCdyYWRpYW50LS1sYXp5LWxvYWQtZWxlbScsIChzdGF0ZSwgZWxlbSkgPT4ge1xyXG4gICAgICBMYXp5TG9hZC5sb2FkKGVsZW0sIHRoaXMuX29wdGlvbnMpXHJcbiAgICB9KVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3JhZGlhbnQtLWxhenktbG9hZC11cGRhdGUnLCBlID0+IHtcclxuICAgICAgdGhpcy5fbGF6eUxvYWQudXBkYXRlKClcclxuICAgIH0pXHJcbiAgfVxyXG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9pbmhlcml0ZWQvQ29tcG9uZW50J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF6eUxvYWRUcmlnZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eCkge1xyXG4gICAgc3VwZXIoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eClcclxuICB9XHJcblxyXG4gIG1vdW50ICgpIHtcclxuICAgIGlmICh0aGlzLl9vcHRpb25zLmxlbmd0aCkge1xyXG4gICAgICBmb3IgKGxldCBvcHRpb24gb2YgdGhpcy5fb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX29wdGlvbkxvZ2ljKG9wdGlvbilcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fb3B0aW9uTG9naWModGhpcy5fb3B0aW9ucylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9vcHRpb25Mb2dpYyhvcHRpb24pIHtcclxuICAgIGlmICghb3B0aW9uLm9uKSB7XHJcbiAgICAgIG9wdGlvbi5vbiA9ICdjbGljaydcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9uLndoZW5PdXRzaWRlKSB7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIob3B0aW9uLm9uLCBlID0+IHtcclxuICAgICAgICBsZXQgY2xpY2tJc0luc2lkZSA9IHRoaXMuX2VsZW0uY29udGFpbnMoZS50YXJnZXQpIHx8IHRoaXMuX2VsZW0gPT09IGUudGFyZ2V0XHJcbiAgICAgICAgbGV0IHRvRXhjbHVkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwob3B0aW9uLndoZW5PdXRzaWRlRXhjZXB0KVxyXG4gICAgICAgIGxldCBoYXNDbGlja2VkRXhjbHVkZSA9IEFycmF5LmZyb20odG9FeGNsdWRlKS5zb21lKGVsZW0gPT4gZWxlbS5jb250YWlucyhlLnRhcmdldCkgfHwgZWxlbSA9PT0gZS50YXJnZXQpXHJcblxyXG4gICAgICAgIGlmIChjbGlja0lzSW5zaWRlIHx8IGhhc0NsaWNrZWRFeGNsdWRlKSByZXR1cm4gZmFsc2VcclxuXHJcbiAgICAgICAgdGhpcy5fZXZlbnRMb2dpYyhvcHRpb24sIGUpXHJcbiAgICAgIFxyXG4gICAgICB9LCBvcHRpb24ucHJldmVudERlZmF1bHQgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiB7IHBhc3NpdmU6IHRydWUgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIgPSBlID0+IHtcclxuICAgICAgICB0aGlzLl9ldmVudExvZ2ljKG9wdGlvbiwgZSlcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9lbGVtLmFkZEV2ZW50TGlzdGVuZXIob3B0aW9uLm9uLCB0aGlzLl9ldmVudExpc3RlbmVyLCBvcHRpb24ucHJldmVudERlZmF1bHQgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiB7IHBhc3NpdmU6IHRydWUgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9sYXp5TG9hZEVsZW0gKG9wdGlvbiwgZWxlbSkge1xyXG4gICAgdGhpcy5fY3R4LmVtaXQoJ3JhZGlhbnQtLWxhenktbG9hZC1lbGVtJywgbnVsbCwgZWxlbSlcclxuICAgIGlmICh0aGlzLl9ldmVudExpc3RlbmVyKSB7XHJcbiAgICAgIHRoaXMuX2VsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihvcHRpb24ub24sIHRoaXMuX2V2ZW50TGlzdGVuZXIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfZXZlbnRMb2dpYyAob3B0aW9uLCBlKSB7XHJcbiAgICBpZiAob3B0aW9uLm9ubHlUaGlzRWxlbSAmJiBlLnRhcmdldCAhPT0gdGhpcy5fZWxlbSkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKG9wdGlvbi5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZWxlbSA9IG51bGxcclxuXHJcbiAgICBpZiAob3B0aW9uLnRhcmdldC5pbmNsdWRlcygnY2xvc2VzdDonKSkge1xyXG4gICAgICBsZXQgcGFyZW50U2VsZWN0b3IgPSBvcHRpb24udGFyZ2V0LnNwbGl0KCdjbG9zZXN0OicpWzFdLnRyaW0oKVxyXG4gICAgICBpZiAob3B0aW9uLnN1YlRhcmdldCkge1xyXG4gICAgICAgIGVsZW0gPSB0aGlzLl9lbGVtLmNsb3Nlc3QocGFyZW50U2VsZWN0b3IpLnF1ZXJ5U2VsZWN0b3Iob3B0aW9uLnN1YlRhcmdldClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtID0gdGhpcy5fZWxlbS5jbG9zZXN0KHBhcmVudFNlbGVjdG9yKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2xhenlMb2FkRWxlbShvcHRpb24sIGVsZW0pXHJcbiAgICB9IGVsc2UgaWYgKG9wdGlvbi50YXJnZXQgPT09ICd0aGlzJykge1xyXG4gICAgICBlbGVtID0gdGhpcy5fZWxlbVxyXG4gICAgICBpZiAob3B0aW9uLnN1YlRhcmdldCkge1xyXG4gICAgICAgIGVsZW0gPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3Iob3B0aW9uLnN1YlRhcmdldClcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9sYXp5TG9hZEVsZW0ob3B0aW9uLCBlbGVtKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbi50YXJnZXQpXHJcbiAgICAgIGZvciAobGV0IHRhcmdldCBvZiB0YXJnZXRzKSB7XHJcbiAgICAgICAgdGhpcy5fbGF6eUxvYWRFbGVtKG9wdGlvbiwgdGFyZ2V0KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9pbmhlcml0ZWQvQ29tcG9uZW50J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkTW9yZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IgKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpIHtcclxuICAgIHN1cGVyKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpXHJcbiAgICB0aGlzLl9sb2FkTW9yZUNvbnRhaW5lciA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtbG9hZC1tb3JlLWNvbnRhaW5lcl0nKVxyXG5cclxuICAgIHRoaXMuX2xvYWRNb3JlVHJpZ2dlckNvbnRhaW5lciA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtbG9hZC1tb3JlLXRyaWdnZXItY29udGFpbmVyXScpXHJcbiAgICB0aGlzLl9sb2FkTW9yZVRyaWdnZXIgPSB0aGlzLl9sb2FkTW9yZVRyaWdnZXJDb250YWluZXIgPyB0aGlzLl9sb2FkTW9yZVRyaWdnZXJDb250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtbG9hZC1tb3JlLXRyaWdnZXJdJykgOiBudWxsXHJcblxyXG4gICAgdGhpcy5fbG9hZFByZXZpb3VzVHJpZ2dlckNvbnRhaW5lciA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtbG9hZC1wcmV2aW91cy10cmlnZ2VyLWNvbnRhaW5lcl0nKVxyXG4gICAgdGhpcy5fbG9hZFByZXZpb3VzVHJpZ2dlciA9IHRoaXMuX2xvYWRQcmV2aW91c1RyaWdnZXJDb250YWluZXIgPyB0aGlzLl9sb2FkUHJldmlvdXNUcmlnZ2VyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWxvYWQtcHJldmlvdXMtdHJpZ2dlcl0nKSA6IG51bGxcclxuXHJcblxyXG4gICAgdGhpcy5fbG9hZGluZyA9IGZhbHNlXHJcbiAgICB0aGlzLl9vcmlnaW5hbFRleHQgPSB0aGlzLl9sb2FkTW9yZVRyaWdnZXIgPyB0aGlzLl9sb2FkTW9yZVRyaWdnZXIuaW5uZXJIVE1MIDogJydcclxuICAgIHRoaXMuX3BhZ2VOdW1iZXIgPSB0aGlzLl9vcHRpb25zLmJhc2VQYWdlXHJcbiAgICB0aGlzLl9jdXJyZW50UGFnZSA9IHRoaXMuX29wdGlvbnMuYmFzZVBhZ2VcclxuXHJcbiAgICB0aGlzLl9iYXNlVVJMID0gYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH0ke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX1gXHJcbiAgfVxyXG5cclxuICBhc3luYyBtb3VudCAoKSB7XHJcbiAgICBpZiAodGhpcy5fbG9hZE1vcmVUcmlnZ2VyKSB7XHJcbiAgICAgIHRoaXMuX2xvYWRNb3JlVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLl9sb2FkKHRoaXMuX2xvYWRNb3JlVHJpZ2dlciwgdGhpcy5fbG9hZE1vcmVUcmlnZ2VyQ29udGFpbmVyLCAnbmV4dCcpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2xvYWRQcmV2aW91c1RyaWdnZXIpIHtcclxuICAgICAgdGhpcy5fbG9hZFByZXZpb3VzVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLl9sb2FkKHRoaXMuX2xvYWRQcmV2aW91c1RyaWdnZXIsIHRoaXMuX2xvYWRQcmV2aW91c1RyaWdnZXJDb250YWluZXIsICdwcmV2aW91cycpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuaGlzdG9yeVN0YXRlKSB7XHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl90cmFja1Njcm9sbC5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9vcHRpb25zLmluZmluaXRlU2Nyb2xsKSB7XHJcbiAgICAgIHRoaXMuX3NldHVwSW5maW5pdGVTY3JvbGwoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgX2xvYWQgKHRyaWdnZXIsIGNvbnRhaW5lciwgdHlwZSkge1xyXG4gICAgaWYgKHRoaXMuX2xvYWRpbmcpIHJldHVybiBmYWxzZVxyXG4gICAgdGhpcy5fbG9hZGluZyA9IHRydWVcclxuXHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgncmFkaWFudC0tbG9hZGluZycpXHJcblxyXG4gICAgdHJpZ2dlci5pbm5lckhUTUwgPSB0aGlzLl9vcHRpb25zLmxvYWRpbmdUZXh0XHJcblxyXG4gICAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KHRyaWdnZXIuZ2V0QXR0cmlidXRlKCdocmVmJykpXHJcblxyXG4gICAgaWYgKHR5cGUgPT0gJ25leHQnKSB7XHJcbiAgICAgIHRoaXMuX3BhZ2VOdW1iZXIrK1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fcGFnZU51bWJlci0tXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKVxyXG4gICAgbGV0IGh0bWwgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGRhdGEsICd0ZXh0L2h0bWwnKVxyXG5cclxuICAgIGxldCBpdGVtcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbG9hZC1tb3JlLWNvbnRhaW5lcl0gPiAqJylcclxuICAgIGxldCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxyXG5cclxuICAgIGZvciAobGV0IGl0ZW0gb2YgaXRlbXMpIHtcclxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChpdGVtKVxyXG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLXBhZ2UtbnVtYmVyJywgdGhpcy5fcGFnZU51bWJlcilcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl90aGVtZS5tb3VudENvbXBvbmVudHMoZnJhZ21lbnQpXHJcblxyXG4gICAgbGV0IG5ld0xvYWRNb3JlVHJpZ2dlciA9IG51bGxcclxuICAgIGlmICh0eXBlID09PSAnbmV4dCcpIHtcclxuICAgICAgdGhpcy5fbG9hZE1vcmVDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpXHJcbiAgICAgIG5ld0xvYWRNb3JlVHJpZ2dlciA9IGh0bWwucXVlcnlTZWxlY3RvcignW2RhdGEtbG9hZC1tb3JlLXRyaWdnZXJdJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2xvYWRNb3JlQ29udGFpbmVyLnByZXBlbmQoZnJhZ21lbnQpXHJcbiAgICAgIG5ld0xvYWRNb3JlVHJpZ2dlciA9IGh0bWwucXVlcnlTZWxlY3RvcignW2RhdGEtbG9hZC1wcmV2aW91cy10cmlnZ2VyXScpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5ld0xvYWRNb3JlVHJpZ2dlcikge1xyXG4gICAgICB0cmlnZ2VyLnNldEF0dHJpYnV0ZSgnaHJlZicsIG5ld0xvYWRNb3JlVHJpZ2dlci5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvbnRhaW5lcilcclxuICAgIH1cclxuICAgIHRoaXMuX2xvYWRpbmcgPSBmYWxzZVxyXG5cclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdyYWRpYW50LS1sb2FkaW5nJylcclxuXHJcbiAgICB0cmlnZ2VyLmlubmVySFRNTCA9IHRoaXMuX29yaWdpbmFsVGV4dFxyXG5cclxuICAgIHRoaXMuX2N0eC5lbWl0KCdyYWRpYW50LS1sYXp5LWxvYWQtdXBkYXRlJylcclxuICAgIHRoaXMuX2N0eC5lbWl0KCdyYWRpYW50LS1xdWlja2xpbmstbGlzdGVuLXRvJywgbnVsbCwgdGhpcy5fZWxlbSlcclxuICB9XHJcblxyXG4gIF9zZXR1cEluZmluaXRlU2Nyb2xsICgpIHtcclxuICAgIGxldCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcclxuICAgICAgZm9yIChsZXQgZW50cnkgb2YgZW50cmllcykge1xyXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgaWYgKHRoaXMuX2xvYWRNb3JlVHJpZ2dlckNvbnRhaW5lciAmJiBlbnRyeS50YXJnZXQgPT09IHRoaXMuX2xvYWRNb3JlVHJpZ2dlckNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxPQUQgTU9SRVwiKVxyXG4gICAgICAgICAgICB0aGlzLl9sb2FkKHRoaXMuX2xvYWRNb3JlVHJpZ2dlciwgdGhpcy5fbG9hZE1vcmVUcmlnZ2VyQ29udGFpbmVyLCAnbmV4dCcpXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCB0aGlzLl9sb2FkUHJldmlvdXNUcmlnZ2VyQ29udGFpbmVyICYmIGVudHJ5LnRhcmdldCA9PT0gdGhpcy5fbG9hZFByZXZpb3VzVHJpZ2dlckNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxPQUQgUFJFVlwiKVxyXG4gICAgICAgICAgICB0aGlzLl9sb2FkKHRoaXMuX2xvYWRQcmV2aW91c1RyaWdnZXIsIHRoaXMuX2xvYWRQcmV2aW91c1RyaWdnZXJDb250YWluZXIsICdwcmV2JylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgdGhyZXNob2xkOiAwLFxyXG4gICAgICByb290TWFyZ2luOiBcIjUwMHB4XCJcclxuICAgIH0pXHJcblxyXG4gICAgaWYgKHRoaXMuX2xvYWRNb3JlVHJpZ2dlckNvbnRhaW5lcikge1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHRoaXMuX2xvYWRNb3JlVHJpZ2dlckNvbnRhaW5lcilcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fbG9hZFByZXZpb3VzVHJpZ2dlckNvbnRhaW5lcikge1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHRoaXMuX2xvYWRQcmV2aW91c1RyaWdnZXJDb250YWluZXIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfdHJhY2tTY3JvbGwgKCkge1xyXG4gICAgbGV0IGZpcnN0RWxlbUluVmlldyA9IG51bGxcclxuICAgIGZvciAobGV0IGVsZW0gb2YgdGhpcy5fbG9hZE1vcmVDb250YWluZXIuY2hpbGRyZW4pIHtcclxuICAgICAgaWYgKGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID49IDApIHtcclxuICAgICAgICBmaXJzdEVsZW1JblZpZXcgPSBlbGVtXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGZpcnN0RWxlbUluVmlldykge1xyXG4gICAgICBsZXQgcGFnZU51bWJlciA9IGZpcnN0RWxlbUluVmlldy5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFnZS1udW1iZXInKVxyXG4gICAgICBpZiAocGFnZU51bWJlciAmJiBOdW1iZXIocGFnZU51bWJlcikgIT09IHRoaXMuX2N1cnJlbnRQYWdlKSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFBhZ2UgPSBOdW1iZXIocGFnZU51bWJlcilcclxuICAgICAgICB0aGlzLl91cGRhdGVIaXN0b3J5U3RhdGUoKVxyXG4gICAgICB9IGVsc2UgaWYgKCFwYWdlTnVtYmVyICYmIHRoaXMuX2N1cnJlbnRQYWdlICE9PSB0aGlzLl9vcHRpb25zLmJhc2VQYWdlKSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFBhZ2UgPSB0aGlzLl9vcHRpb25zLmJhc2VQYWdlXHJcbiAgICAgICAgdGhpcy5fdXBkYXRlSGlzdG9yeVN0YXRlKClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl90cmFja1Njcm9sbC5iaW5kKHRoaXMpKVxyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZUhpc3RvcnlTdGF0ZSAoKSB7XHJcbiAgICBsZXQgbmV3dXJsID0gYCR7dGhpcy5fYmFzZVVSTH0/cGFnZT0ke3RoaXMuX2N1cnJlbnRQYWdlfWBcclxuICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IHBhdGg6IG5ld3VybCB9LCAnJywgbmV3dXJsKVxyXG4gIH1cclxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vaW5oZXJpdGVkL0NvbXBvbmVudCdcclxuaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi4vbGliL0hlbHBlcnMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NrU2Nyb2xsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eCkge1xyXG4gICAgc3VwZXIoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eClcclxuICB9XHJcblxyXG4gIGFzeW5jIG1vdW50ICgpIHtcclxuICAgIGxldCB7IGRpc2FibGVCb2R5U2Nyb2xsLCBlbmFibGVCb2R5U2Nyb2xsLCBjbGVhckFsbEJvZHlTY3JvbGxMb2NrcyB9ID0gYXdhaXQgaW1wb3J0KCdib2R5LXNjcm9sbC1sb2NrJylcclxuXHJcbiAgICB0aGlzLl9kaXNhYmxlQm9keVNjcm9sbCA9IGRpc2FibGVCb2R5U2Nyb2xsXHJcbiAgICB0aGlzLl9lbmFibGVCb2R5U2Nyb2xsID0gZW5hYmxlQm9keVNjcm9sbFxyXG4gICAgdGhpcy5fY2xlYXJBbGxCb2R5U2Nyb2xsTG9ja3MgPSBjbGVhckFsbEJvZHlTY3JvbGxMb2Nrc1xyXG5cclxuICAgIGlmICh0aGlzLl9vcHRpb25zLmxlbmd0aCkge1xyXG4gICAgICBmb3IgKGxldCBvcHRpb24gb2YgdGhpcy5fb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX29wdGlvbkxvZ2ljKG9wdGlvbilcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fb3B0aW9uTG9naWModGhpcy5fb3B0aW9ucylcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9jdHgub24oJ3JhZGlhbnQtLXNjcm9sbC1sb2NrLWVsZW0nLCAoc3RhdGUsIGRhdGEpID0+IHtcclxuICAgICAgdGhpcy5fbG9ja1Njcm9sbChkYXRhKVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLl9jdHgub24oJ3JhZGlhbnQtLWNsZWFyLWFsbC1zY3JvbGwtbG9ja3MnLCAoc3RhdGUsIGRhdGEpID0+IHtcclxuICAgICAgdGhpcy5fY2xlYXJBbGxCb2R5U2Nyb2xsTG9ja3MoKVxyXG5cclxuICAgICAgbGV0IGxvY2tlZEVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaXMtbG9ja2VkPVwidHJ1ZVwiXScpXHJcbiAgICAgIGZvciAobGV0IGVsZW0gb2YgbG9ja2VkRWxlbXMpIHtcclxuICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1pcy1sb2NrZWQnKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgX29wdGlvbkxvZ2ljKG9wdGlvbikge1xyXG4gICAgaWYgKCFvcHRpb24ub24pIHtcclxuICAgICAgb3B0aW9uLm9uID0gJ2NsaWNrJ1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb24ud2hlbk91dHNpZGUpIHtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihvcHRpb24ub24sIGUgPT4ge1xyXG4gICAgICAgIGxldCBjbGlja0lzSW5zaWRlID0gdGhpcy5fZWxlbS5jb250YWlucyhlLnRhcmdldCkgfHwgdGhpcy5fZWxlbSA9PT0gZS50YXJnZXRcclxuICAgICAgICBsZXQgdG9FeGNsdWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChvcHRpb24ud2hlbk91dHNpZGVFeGNlcHQpXHJcbiAgICAgICAgbGV0IGhhc0NsaWNrZWRFeGNsdWRlID0gQXJyYXkuZnJvbSh0b0V4Y2x1ZGUpLnNvbWUoZWxlbSA9PiBlbGVtLmNvbnRhaW5zKGUudGFyZ2V0KSB8fCBlbGVtID09PSBlLnRhcmdldClcclxuXHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9uLnRhcmdldClcclxuXHJcbiAgICAgICAgbGV0IGhhc0NsaWNrZWRPdGhlckxvY2tTY3JvbGwgPSBIZWxwZXJzLmhhc1BhcmVudFdpdGhTZWxlY3RvcihlLnRhcmdldCwgJ1tkYXRhLWxvY2stc2Nyb2xsXScpXHJcblxyXG4gICAgICAgIGlmIChoYXNDbGlja2VkT3RoZXJMb2NrU2Nyb2xsICYmICFjbGlja0lzSW5zaWRlICYmICFoYXNDbGlja2VkRXhjbHVkZSkge1xyXG4gICAgICAgICAgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1pcy1sb2NrZWQnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLWlzLWxvY2tlZCcpKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjbGlja0lzSW5zaWRlIHx8IGhhc0NsaWNrZWRFeGNsdWRlKSByZXR1cm4gZmFsc2VcclxuXHJcbiAgICAgICAgdGhpcy5fZXZlbnRMb2dpYyhvcHRpb24sIGUpXHJcbiAgICAgIFxyXG4gICAgICB9LCBvcHRpb24ucHJldmVudERlZmF1bHQgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiB7IHBhc3NpdmU6IHRydWUgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2VsZW0uYWRkRXZlbnRMaXN0ZW5lcihvcHRpb24ub24sIGUgPT4ge1xyXG4gICAgICAgIHRoaXMuX2V2ZW50TG9naWMob3B0aW9uLCBlKVxyXG4gICAgICB9LCBvcHRpb24ucHJldmVudERlZmF1bHQgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiB7IHBhc3NpdmU6IHRydWUgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9ldmVudExvZ2ljKG9wdGlvbiwgZSkge1xyXG4gICAgaWYgKG9wdGlvbi5vbmx5VGhpc0VsZW0gJiYgZS50YXJnZXQgIT09IHRoaXMuX2VsZW0pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvbi5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9jbGVhckFsbEJvZHlTY3JvbGxMb2NrcygpXHJcblxyXG4gICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9uLnRhcmdldClcclxuXHJcbiAgICBpZiAob3B0aW9uLm1ldGhvZCA9PT0gJ2xvY2tTY3JvbGwnKSB7XHJcbiAgICAgIHRoaXMuX2xvY2tTY3JvbGwodGFyZ2V0KVxyXG4gICAgfSBlbHNlIGlmIChvcHRpb24ubWV0aG9kID09PSAndG9nZ2xlU2Nyb2xsJykge1xyXG4gICAgICBpZiAoIXRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtaXMtbG9ja2VkJykpIHtcclxuICAgICAgICB0aGlzLl9kaXNhYmxlQm9keVNjcm9sbCh0YXJnZXQsIHsgcmVzZXJ2ZVNjcm9sbEJhckdhcDogdHJ1ZSB9KVxyXG4gICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaXMtbG9ja2VkJywgdHJ1ZSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9jbGVhckFsbEJvZHlTY3JvbGxMb2NrcygpXHJcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1pcy1sb2NrZWQnKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgbG9ja2VkRWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pcy1sb2NrZWQ9XCJ0cnVlXCJdJylcclxuICAgICAgZm9yIChsZXQgZWxlbSBvZiBsb2NrZWRFbGVtcykge1xyXG4gICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWlzLWxvY2tlZCcpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9sb2NrU2Nyb2xsKGVsZW0pIHtcclxuICAgIHRoaXMuX2NsZWFyQWxsQm9keVNjcm9sbExvY2tzKClcclxuICAgIGxldCBsb2NrZWRFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWlzLWxvY2tlZD1cInRydWVcIl0nKVxyXG4gICAgZm9yIChsZXQgZWxlbSBvZiBsb2NrZWRFbGVtcykge1xyXG4gICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1pcy1sb2NrZWQnKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLl9kaXNhYmxlQm9keVNjcm9sbChlbGVtLCB7IHJlc2VydmVTY3JvbGxCYXJHYXA6IHRydWUgfSlcclxuICAgIGVsZW0uc2V0QXR0cmlidXRlKCdkYXRhLWlzLWxvY2tlZCcsIHRydWUpXHJcbiAgfVxyXG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9pbmhlcml0ZWQvQ29tcG9uZW50J1xyXG5cclxuY2xhc3MgTWVnYU1lbnUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yIChlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KSB7XHJcbiAgICBzdXBlcihlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KVxyXG4gICAgdGhpcy5fb3B0aW9ucyA9IHsuLi57XHJcbiAgICAgIGhpc3RvcnlTdGF0ZTogZmFsc2VcclxuICAgIH0sIC4uLnRoaXMuX29wdGlvbnN9XHJcbiAgICB0aGlzLl9uYXZJdGVtcyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmF2LWl0ZW1dJylcclxuICAgIHRoaXMuX21lZ2FNZW51cyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbWVnYS1tZW51XScpXHJcbiAgICB0aGlzLl90aW1lb3V0ID0gbnVsbFxyXG4gIH1cclxuXHJcbiAgbW91bnQgKCkge1xyXG4gICAgbGV0IHNlYXJjaERyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1kcm9wZG93bicpXHJcblxyXG4gICAgZm9yIChsZXQgbmF2SXRlbSBvZiB0aGlzLl9uYXZJdGVtcykge1xyXG4gICAgICBuYXZJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLl90aW1lb3V0KSB7XHJcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcclxuICAgICAgICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IG1lZ2FNZW51IG9mIHRoaXMuX21lZ2FNZW51cykge1xyXG4gICAgICAgICAgbWVnYU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpXHJcbiAgICAgICAgICBsZXQgbmF2SXRlbSA9IG1lZ2FNZW51LnByZXZpb3VzRWxlbWVudFNpYmxpbmdcclxuICAgICAgICAgIG5hdkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd24tb3BlbicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtZWdhTWVudSA9IG5hdkl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nXHJcbiAgICAgICAgaWYgKG1lZ2FNZW51Lmhhc0F0dHJpYnV0ZSgnZGF0YS1tZWdhLW1lbnUnKSkge1xyXG4gICAgICAgICAgbWVnYU1lbnUuY2xhc3NMaXN0LmFkZCgnb3BlbicpXHJcbiAgICAgICAgICBuYXZJdGVtLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLW9wZW4nKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vIG5hdkl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChlKSA9PiB7XHJcbiAgICAgIC8vICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAvLyAgICAgbGV0IG1lZ2FNZW51ID0gbmF2SXRlbS5uZXh0RWxlbWVudFNpYmxpbmdcclxuICAgICAgLy8gICAgIGlmIChtZWdhTWVudS5oYXNBdHRyaWJ1dGUoJ2RhdGEtbWVnYS1tZW51JykpIHtcclxuICAgICAgLy8gICAgICAgbWVnYU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpXHJcbiAgICAgIC8vICAgICAgIG5hdkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd24tb3BlbicpXHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgfSwgNTAwKVxyXG4gICAgICAvLyB9KVxyXG5cclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChlKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgbWVnYU1lbnUgb2YgdGhpcy5fbWVnYU1lbnVzKSB7XHJcbiAgICAgICAgICBtZWdhTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJylcclxuICAgICAgICAgIGxldCBuYXZJdGVtID0gbWVnYU1lbnUucHJldmlvdXNFbGVtZW50U2libGluZ1xyXG4gICAgICAgICAgbmF2SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bi1vcGVuJylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgbWVnYU1lbnUgb2YgdGhpcy5fbWVnYU1lbnVzKSB7XHJcbiAgICAgIGxldCBtZWdhTWVudUlubmVyID0gbWVnYU1lbnUucXVlcnlTZWxlY3RvcignW2RhdGEtbWVnYS1tZW51LWlubmVyXScpXHJcbiAgICAgIG1lZ2FNZW51SW5uZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RpbWVvdXQpIHtcclxuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxyXG4gICAgICAgICAgdGhpcy5fdGltZW91dCA9IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5hdkl0ZW0gPSBtZWdhTWVudS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXHJcbiAgICAgICAgbWVnYU1lbnUuY2xhc3NMaXN0LmFkZCgnb3BlbicpXHJcbiAgICAgICAgbmF2SXRlbS5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bi1vcGVuJylcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vIG1lZ2FNZW51SW5uZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChlKSA9PiB7XHJcbiAgICAgIC8vICAgbGV0IG5hdkl0ZW0gPSBtZWdhTWVudS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXHJcbiAgICAgIC8vICAgbWVnYU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpXHJcbiAgICAgIC8vICAgbmF2SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bi1vcGVuJylcclxuICAgICAgLy8gfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZ2FNZW51XHJcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vaW5oZXJpdGVkL0NvbXBvbmVudCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGhvZENhbGwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yIChlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KSB7XHJcbiAgICBzdXBlcihlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KVxyXG4gIH1cclxuXHJcbiAgbW91bnQgKCkge1xyXG4gICAgaWYgKHRoaXMuX29wdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIGZvciAobGV0IG9wdGlvbiBvZiB0aGlzLl9vcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9uTG9naWMob3B0aW9uKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9vcHRpb25Mb2dpYyh0aGlzLl9vcHRpb25zKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX29wdGlvbkxvZ2ljKG9wdGlvbikge1xyXG4gICAgdGhpcy5fZWxlbS5hZGRFdmVudExpc3RlbmVyKG9wdGlvbi5vbiwgYXN5bmMgZSA9PiB7XHJcbiAgICAgIGlmIChvcHRpb24ucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG9wdGlvbi5vbmx5VGhpc0VsZW0gJiYgZS50YXJnZXQgIT09IHRoaXMuX2VsZW0pIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgbGV0IGNvbXAgPSB0aGlzLl90aGVtZS5nZXRDb21wb25lbnQob3B0aW9uLmNvbXBvbmVudElkKS5jb21wb25lbnRcclxuICAgICAgY29tcFtvcHRpb24ubWV0aG9kXSguLi5vcHRpb24uYXJncylcclxuICAgIH0pXHJcbiAgfVxyXG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9pbmhlcml0ZWQvQ29tcG9uZW50J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtYmVyU2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yIChlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KSB7XHJcbiAgICBzdXBlcihlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KVxyXG4gICAgdGhpcy5faW5wdXQgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWlucHV0XScpXHJcbiAgICB0aGlzLl9taW51cyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtbWludXNdJylcclxuICAgIHRoaXMuX3BsdXMgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBsdXNdJylcclxuICAgIHRoaXMuX21heCA9IHRoaXMuX2lucHV0LmdldEF0dHJpYnV0ZSgnbWF4JykgPyBOdW1iZXIodGhpcy5faW5wdXQuZ2V0QXR0cmlidXRlKCdtYXgnKSkgOiBudWxsXHJcbiAgICB0aGlzLl9taW4gPSB0aGlzLl9pbnB1dC5nZXRBdHRyaWJ1dGUoJ21pbicpID8gTnVtYmVyKHRoaXMuX2lucHV0LmdldEF0dHJpYnV0ZSgnbWluJykpIDogbnVsbFxyXG4gIH1cclxuXHJcbiAgbW91bnQgKCkge1xyXG4gICAgdGhpcy5faW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlID0+IHtcclxuICAgICAgbGV0IGN1cnJlbnRWYWx1ZSA9IE51bWJlcih0aGlzLl9pbnB1dC52YWx1ZSlcclxuICAgICAgaWYgKHRoaXMuX21pbiAmJiBjdXJyZW50VmFsdWUgPCB0aGlzLl9taW4pIHtcclxuICAgICAgICB0aGlzLl9pbnB1dC52YWx1ZSA9IHRoaXMuX21pblxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLl9tYXggJiYgY3VycmVudFZhbHVlID4gdGhpcy5fbWF4KSB7XHJcbiAgICAgICAgdGhpcy5faW5wdXQudmFsdWUgPSB0aGlzLl9tYXhcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLl9taW51cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgbGV0IG5ld1ZhbHVlID0gTnVtYmVyKHRoaXMuX2lucHV0LnZhbHVlKSAtIDFcclxuICAgICAgaWYgKHRoaXMuX21pbiAmJiBuZXdWYWx1ZSA8IHRoaXMuX21pbikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2lucHV0LnZhbHVlID0gbmV3VmFsdWVcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5fcGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgbGV0IG5ld1ZhbHVlID0gTnVtYmVyKHRoaXMuX2lucHV0LnZhbHVlKSArIDFcclxuICAgICAgaWYgKHRoaXMuX21heCAmJiBuZXdWYWx1ZSA+IHRoaXMuX21heCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2lucHV0LnZhbHVlID0gbmV3VmFsdWVcclxuICAgIH0pXHJcbiAgfVxyXG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9pbmhlcml0ZWQvQ29tcG9uZW50J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0Rml0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eCkge1xyXG4gICAgc3VwZXIoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eClcclxuICB9XHJcblxyXG4gIGFzeW5jIG1vdW50ICgpIHtcclxuICAgIGxldCBvYmplY3RGaXRJbWFnZXMgPSBhd2FpdCBpbXBvcnQoJ29iamVjdC1maXQtaW1hZ2VzJylcclxuICAgIG9iamVjdEZpdEltYWdlcy5kZWZhdWx0KClcclxuICB9XHJcbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2luaGVyaXRlZC9Db21wb25lbnQnXHJcbmltcG9ydCBIZWxwZXJzIGZyb20gJy4uL2xpYi9IZWxwZXJzJ1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpIHtcclxuICAgICAgICBzdXBlcihlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KVxyXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSB7Li4ue1xyXG4gICAgICAgICAgaGlzdG9yeVN0YXRlOiB0cnVlXHJcbiAgICAgICAgfSwgLi4udGhpcy5fb3B0aW9uc31cclxuICAgICAgICB0aGlzLl9wcm9kdWN0ID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9kdWN0LWpzb25dJykgPyBKU09OLnBhcnNlKHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvZHVjdC1qc29uXScpLmlubmVySFRNTCkgOiBudWxsXHJcbiAgICAgICAgdGhpcy5fdmFyaWFudE9wdGlvblRyaWdnZXJzID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS12YXJpYW50LW9wdGlvbi10cmlnZ2VyXScpXHJcbiAgICAgICAgdGhpcy5fdmFyaWFudCA9IG51bGxcclxuICAgICAgICB0aGlzLl9zZWxsaW5nUGxhbiA9IG51bGxcclxuICAgICAgICB0aGlzLl9tYXN0ZXJTZWxlY3RzID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tYXN0ZXItc2VsZWN0XScpXHJcbiAgICAgICAgdGhpcy5fcHJpY2VXcmFwcGVycyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcHJvZHVjdC1wcmljZXNdJylcclxuICAgICAgICB0aGlzLl9wcmljZXMgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXByaWNlXScpXHJcbiAgICAgICAgdGhpcy5fcHJpY2VWYXJpZXMgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXByaWNlLXZhcmllc10nKVxyXG4gICAgICAgIHRoaXMuX2NvbXBhcmVQcmljZXMgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNvbXBhcmUtcHJpY2VdJylcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9pbWFnZXMgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXByb2R1Y3QtaW1hZ2VdJylcclxuICAgICAgICB0aGlzLl9hZGRUb0NhcnRzID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zdWJtaXRdJylcclxuICAgICAgICB0aGlzLl9hZGRUb0NhcnRIVE1MID0gQXJyYXkuZnJvbSh0aGlzLl9hZGRUb0NhcnRzKS5tYXAoZWxlbSA9PiB7XHJcbiAgICAgICAgICBsZXQgdGV4dEVsZW0gPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXN1Ym1pdC10ZXh0XScpIHx8IGVsZW1cclxuICAgICAgICAgIHJldHVybiB0ZXh0RWxlbS5pbm5lckhUTUxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLl9xdWFudGl0eUlucHV0ID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1xdWFudGl0eS1pbnB1dF0nKVxyXG4gICAgICAgIHRoaXMuX3F1YW50aXR5U2VsZWN0cyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcXVhbnRpdHldJylcclxuICAgICAgICB0aGlzLl92YXJpYW50UmFkaW9zID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS12YXJpYW50LWlkXScpXHJcblxyXG4gICAgICAgIHRoaXMuX2V4dHJhUHJvZHVjdHNJbnB1dCA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtZXh0cmEtcHJvZHVjdHNdJylcclxuICAgICAgICB0aGlzLl9leHRyYVByb2R1Y3RSYWRpb3MgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWV4dHJhLXByb2R1Y3RdJylcclxuXHJcbiAgICAgICAgdGhpcy5fc2VsbGluZ1BsYW5JbnB1dCA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtc2VsbGluZy1wbGFuXScpXHJcblxyXG4gICAgICAgIHRoaXMuX2F0Y0FyZWFzID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hdGMtYXJlYV0nKVxyXG4gICAgICAgIHRoaXMuX29vc0FyZWFzID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1vb3MtYXJlYV0nKVxyXG4gICAgfVxyXG5cclxuICAgIG1vdW50ICgpIHtcclxuICAgICAgaWYgKHRoaXMuX3Byb2R1Y3QgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fdmFyaWFudCA9IHRoaXMuX2dldFZhcmlhbnRGcm9tT3B0aW9ucygpXHJcblxyXG4gICAgICBmb3IgKGxldCBvcHRpb25TZWxlY3RvciBvZiB0aGlzLl92YXJpYW50T3B0aW9uVHJpZ2dlcnMpIHtcclxuICAgICAgICBvcHRpb25TZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcclxuICAgICAgICAgIHRoaXMuX29uU2VsZWN0Q2hhbmdlKClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBvcHRpb25TZWxlY3RvciBvZiB0aGlzLl92YXJpYW50UmFkaW9zKSB7XHJcbiAgICAgICAgb3B0aW9uU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9vblNlbGVjdENoYW5nZSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgb3B0aW9uU2VsZWN0b3Igb2YgdGhpcy5fbWFzdGVyU2VsZWN0cykge1xyXG4gICAgICAgIG9wdGlvblNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fb25TZWxlY3RDaGFuZ2UoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IG9wdGlvblNlbGVjdG9yIG9mIHRoaXMuX2V4dHJhUHJvZHVjdFJhZGlvcykge1xyXG4gICAgICAgIG9wdGlvblNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fb25FeHRyYVByb2R1Y3RSYWRpb0NoYW5nZSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgcXVhbnRpdHlTd2l0Y2ggb2YgdGhpcy5fcXVhbnRpdHlTZWxlY3RzKSB7XHJcbiAgICAgICAgcXVhbnRpdHlTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XHJcbiAgICAgICAgICBpZiAocXVhbnRpdHlTd2l0Y2guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9xdWFudGl0eUlucHV0LnZhbHVlID0gcXVhbnRpdHlTd2l0Y2guZGF0YXNldC5xdWFudGl0eVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX29uU2VsZWN0Q2hhbmdlKClcclxuICAgIH1cclxuXHJcbiAgICBfb25FeHRyYVByb2R1Y3RSYWRpb0NoYW5nZSAoKSB7XHJcbiAgICAgIGxldCBleHRyYVByb2R1Y3RzID0gW11cclxuXHJcbiAgICAgIGZvciAobGV0IHJhZGlvIG9mIHRoaXMuX2V4dHJhUHJvZHVjdFJhZGlvcykge1xyXG4gICAgICAgIGlmIChyYWRpby5jaGVja2VkKSB7XHJcbiAgICAgICAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShyYWRpby5kYXRhc2V0LmV4dHJhUHJvZHVjdClcclxuICAgICAgICAgIGV4dHJhUHJvZHVjdHMucHVzaCh7XHJcbiAgICAgICAgICAgIGlkOiBvYmouaWQsXHJcbiAgICAgICAgICAgIHF1YW50aXR5OiBvYmoucXVhbnRpdHksXHJcbiAgICAgICAgICAgIHNlbGxpbmdfcGxhbjogb2JqLnNlbGxpbmdfcGxhblxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLl9leHRyYVByb2R1Y3RzSW5wdXQpIHtcclxuICAgICAgICB0aGlzLl9leHRyYVByb2R1Y3RzSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeShleHRyYVByb2R1Y3RzKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2xpbmtlZE9wdGlvbnMgKHZhcmlhbnQpIHtcclxuICAgICAgZm9yIChsZXQgb3B0aW9uU2VsZWN0b3Igb2YgdGhpcy5fdmFyaWFudE9wdGlvblRyaWdnZXJzKSB7XHJcbiAgICAgICAgb3B0aW9uU2VsZWN0b3IucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXHJcbiAgICAgICAgZm9yIChsZXQgcHJvZFZhcmlhbnQgb2YgdGhpcy5fcHJvZHVjdC52YXJpYW50cykge1xyXG4gICAgICAgICAgaWYgKHByb2RWYXJpYW50Lm9wdGlvbjEgPT09IHZhcmlhbnQub3B0aW9uMSAmJiBvcHRpb25TZWxlY3Rvci52YWx1ZSA9PT0gcHJvZFZhcmlhbnQub3B0aW9uMiAmJiAhcHJvZFZhcmlhbnQuYXZhaWxhYmxlKSB7XHJcbiAgICAgICAgICAgIG9wdGlvblNlbGVjdG9yLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9vblNlbGVjdENoYW5nZSAoKSB7XHJcbiAgICAgIGxldCB2YXJpYW50ID0gdGhpcy5fZ2V0VmFyaWFudEZyb21PcHRpb25zKClcclxuXHJcbiAgICAgIHRoaXMuX3VwZGF0ZUFkZFRvQ2FydFN0YXRlKHZhcmlhbnQpXHJcbiAgICAgIGlmICghdmFyaWFudCkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl91cGRhdGVNYXN0ZXJTZWxlY3QodmFyaWFudClcclxuICAgICAgdGhpcy5fdXBkYXRlUHJvZHVjdFByaWNlcyh2YXJpYW50KVxyXG4gICAgICB0aGlzLl9zd2l0Y2hUb1ZhcmlhbnRJbWFnZSh2YXJpYW50KVxyXG4gICAgICB0aGlzLl9vbkV4dHJhUHJvZHVjdFJhZGlvQ2hhbmdlKClcclxuICAgICAgdGhpcy5fdXBkYXRlU2VsbGluZ1BsYW4odmFyaWFudClcclxuICAgICAgdGhpcy5fdXBkYXRlQXRjQXJlYXModmFyaWFudClcclxuICAgICAgLy8gdGhpcy5fbGlua2VkT3B0aW9ucyh2YXJpYW50KVxyXG4gICAgICB0aGlzLl92YXJpYW50ID0gdmFyaWFudFxyXG5cclxuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuaGlzdG9yeVN0YXRlKSB7XHJcbiAgICAgICAgICB0aGlzLl91cGRhdGVIaXN0b3J5U3RhdGUodmFyaWFudClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVBdGNBcmVhcyAodmFyaWFudCkge1xyXG4gICAgICBmb3IgKGxldCBhcmVhIG9mIHRoaXMuX2F0Y0FyZWFzKSB7XHJcbiAgICAgICAgaWYgKHZhcmlhbnQuYXZhaWxhYmxlKSB7XHJcbiAgICAgICAgICBhcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhcmVhLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgYXJlYSBvZiB0aGlzLl9vb3NBcmVhcykge1xyXG4gICAgICAgIGlmICh2YXJpYW50LmF2YWlsYWJsZSkge1xyXG4gICAgICAgICAgYXJlYS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfdXBkYXRlU2VsbGluZ1BsYW4gKHZhcmlhbnQpIHtcclxuICAgICAgaWYgKCF0aGlzLl9zZWxsaW5nUGxhbklucHV0KSByZXR1cm4gZmFsc2VcclxuXHJcbiAgICAgIHRoaXMuX3NlbGxpbmdQbGFuSW5wdXQudmFsdWUgPSAnJ1xyXG4gICAgICB0aGlzLl9zZWxsaW5nUGxhbiA9IG51bGxcclxuXHJcbiAgICAgIGlmICh2YXJpYW50LnNlbGxpbmdfcGxhbl9hbGxvY2F0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5fc2VsbGluZ1BsYW4gPSB2YXJpYW50LnNlbGxpbmdfcGxhbl9hbGxvY2F0aW9uc1swXS5zZWxsaW5nX3BsYW5faWRcclxuICAgICAgICB0aGlzLl9zZWxsaW5nUGxhbklucHV0LnZhbHVlID0gdGhpcy5fc2VsbGluZ1BsYW5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVIaXN0b3J5U3RhdGUgKHZhcmlhbnQpIHtcclxuICAgICAgaWYgKCFoaXN0b3J5LnJlcGxhY2VTdGF0ZSB8fCAhdmFyaWFudCkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGxldCBuZXd1cmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fSR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfT92YXJpYW50PSR7dmFyaWFudC5pZH1gXHJcblxyXG4gICAgICBpZiAodGhpcy5fc2VsbGluZ1BsYW4pIHtcclxuICAgICAgICBuZXd1cmwgKz0gYCZzZWxsaW5nX3BsYW49JHt0aGlzLl9zZWxsaW5nUGxhbn1gXHJcbiAgICAgIH1cclxuICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHsgcGF0aDogbmV3dXJsIH0sICcnLCBuZXd1cmwpXHJcbiAgICB9XHJcblxyXG4gICAgX3VwZGF0ZUFkZFRvQ2FydFN0YXRlICh2YXJpYW50KSB7XHJcbiAgICAgIGlmICghdmFyaWFudCAmJiB0aGlzLl9wcm9kdWN0LmF2YWlsYWJsZSkge1xyXG4gICAgICAgIGZvciAobGV0IGFkZFRvQ2FydCBvZiB0aGlzLl9hZGRUb0NhcnRzKSB7XHJcbiAgICAgICAgICBhZGRUb0NhcnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXHJcbiAgICAgICAgICBsZXQgYWRkVG9DYXJ0VGV4dCA9IGFkZFRvQ2FydC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zdWJtaXQtdGV4dF0nKSB8fCBhZGRUb0NhcnRcclxuICAgICAgICAgIGFkZFRvQ2FydFRleHQuaW5uZXJIVE1MID0gdGhpcy5fY3R4LmdldFN0YXRlKCkubG9jYWxlLm1ha2VBU2VsZWN0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXZhcmlhbnQpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHZhcmlhbnQuYXZhaWxhYmxlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgW2ksIGFkZFRvQ2FydF0gb2YgdGhpcy5fYWRkVG9DYXJ0cy5lbnRyaWVzKCkpIHtcclxuICAgICAgICAgIGFkZFRvQ2FydC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcclxuICAgICAgICAgIGxldCBhZGRUb0NhcnRUZXh0ID0gYWRkVG9DYXJ0LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXN1Ym1pdC10ZXh0XScpIHx8IGFkZFRvQ2FydFxyXG4gICAgICAgICAgYWRkVG9DYXJ0VGV4dC5pbm5lckhUTUwgPSB0aGlzLl9hZGRUb0NhcnRIVE1MW2ldXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAobGV0IGFkZFRvQ2FydCBvZiB0aGlzLl9hZGRUb0NhcnRzKSB7XHJcbiAgICAgICAgICBhZGRUb0NhcnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXHJcbiAgICAgICAgICBsZXQgYWRkVG9DYXJ0VGV4dCA9IGFkZFRvQ2FydC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zdWJtaXQtdGV4dF0nKSB8fCBhZGRUb0NhcnRcclxuICAgICAgICAgIGFkZFRvQ2FydFRleHQuaW5uZXJIVE1MID0gdGhpcy5fY3R4LmdldFN0YXRlKCkubG9jYWxlLnNvbGRPdXRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfc3dpdGNoVG9WYXJpYW50SW1hZ2UgKHZhcmlhbnQpIHtcclxuICAgICAgZm9yIChsZXQgcHJvZHVjdEltYWdlIG9mIHRoaXMuX2ltYWdlcykge1xyXG4gICAgICAgIGlmIChwcm9kdWN0SW1hZ2UuZGF0YXNldC5wcm9kdWN0SW1hZ2UpIHtcclxuICAgICAgICAgIGxldCBpZEFycmF5ID0gcHJvZHVjdEltYWdlLmRhdGFzZXQucHJvZHVjdEltYWdlLnNwbGl0KCcsJylcclxuICAgICAgICAgIGlmIChpZEFycmF5LmluY2x1ZGVzKHZhcmlhbnQuaWQudG9TdHJpbmcoKSkpIHtcclxuICAgICAgICAgICAgbGV0IG1haW5TbGlkZXIgPSB0aGlzLl90aGVtZS5nZXRDb21wb25lbnQoJ21haW5Qcm9kdWN0U2xpZGVyJylcclxuICAgICAgICAgICAgaWYgKG1haW5TbGlkZXIpIHtcclxuICAgICAgICAgICAgICBtYWluU2xpZGVyLmNvbXBvbmVudC5nb1RvU2xpZGUocHJvZHVjdEltYWdlLmRhdGFzZXQuaW5kZXgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfdXBkYXRlUHJvZHVjdFByaWNlcyAodmFyaWFudCkge1xyXG4gICAgICBmb3IgKGxldCB2YXJpZXMgb2YgdGhpcy5fcHJpY2VWYXJpZXMpIHtcclxuICAgICAgICB2YXJpZXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IHByb2R1Y3RQcmljZSBvZiB0aGlzLl9wcmljZXMpIHtcclxuICAgICAgICBpZiAodmFyaWFudC5jb21wYXJlX2F0X3ByaWNlID4gdmFyaWFudC5wcmljZSkge1xyXG4gICAgICAgICAgcHJvZHVjdFByaWNlLmNsYXNzTGlzdC5hZGQoJ29uLXNhbGUnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwcm9kdWN0UHJpY2UuY2xhc3NMaXN0LnJlbW92ZSgnb24tc2FsZScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb2R1Y3RQcmljZS5pbm5lckhUTUwgPSB0aGlzLl9mb3JtYXRNb25leSh2YXJpYW50LnByaWNlKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBwcm9kdWN0Q29tcGFyZVByaWNlIG9mIHRoaXMuX2NvbXBhcmVQcmljZXMpIHtcclxuICAgICAgICBpZiAodmFyaWFudC5jb21wYXJlX2F0X3ByaWNlID4gdmFyaWFudC5wcmljZSkge1xyXG4gICAgICAgICAgcHJvZHVjdENvbXBhcmVQcmljZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgICAgIHByb2R1Y3RDb21wYXJlUHJpY2UuaW5uZXJIVE1MID0gdGhpcy5fZm9ybWF0TW9uZXkodmFyaWFudC5jb21wYXJlX2F0X3ByaWNlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwcm9kdWN0Q29tcGFyZVByaWNlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgICAgICAgcHJvZHVjdENvbXBhcmVQcmljZS5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9mb3JtYXRNb25leSAocHJpY2UpIHtcclxuICAgICAgcmV0dXJuIEhlbHBlcnMuZm9ybWF0TW9uZXkocHJpY2UsIHRoaXMuX2N0eC5nZXRTdGF0ZSgpKVxyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVNYXN0ZXJTZWxlY3QgKHZhcmlhbnQpIHtcclxuICAgICAgZm9yIChsZXQgb3JpZ2luYWxTZWxlY3RvciBvZiB0aGlzLl9tYXN0ZXJTZWxlY3RzKSB7XHJcbiAgICAgICAgb3JpZ2luYWxTZWxlY3Rvci52YWx1ZSA9IHZhcmlhbnQuaWRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9nZXRDdXJyZW50T3B0aW9ucyAoKSB7XHJcbiAgICAgIGxldCBjdXJyZW50T3B0aW9ucyA9IFtdXHJcbiAgICAgIGZvciAobGV0IG9wdGlvblNlbGVjdG9yIG9mIHRoaXMuX3ZhcmlhbnRPcHRpb25UcmlnZ2Vycykge1xyXG4gICAgICAgIGxldCB0eXBlID0gb3B0aW9uU2VsZWN0b3IuZ2V0QXR0cmlidXRlKCd0eXBlJylcclxuICAgICAgICBsZXQgY3VycmVudE9wdGlvbiA9IHt9XHJcbiAgICAgICAgbGV0IGFscmVhZHlEb25lID0gZmFsc2VcclxuICAgICAgICBmb3IgKGxldCBvcHRpb24gb2YgY3VycmVudE9wdGlvbnMpIHtcclxuICAgICAgICAgIGlmIChvcHRpb24uaW5kZXggPT09IG9wdGlvblNlbGVjdG9yLmRhdGFzZXQuaW5kZXgpIHtcclxuICAgICAgICAgICAgYWxyZWFkeURvbmUgPSB0cnVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhbHJlYWR5RG9uZSkgY29udGludWVcclxuICAgICAgICBpZiAodHlwZSA9PT0gJ3JhZGlvJyB8fCB0eXBlID09PSAnY2hlY2tib3gnKSB7XHJcbiAgICAgICAgICBpZiAob3B0aW9uU2VsZWN0b3IuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBjdXJyZW50T3B0aW9uLnZhbHVlID0gb3B0aW9uU2VsZWN0b3IudmFsdWVcclxuICAgICAgICAgICAgY3VycmVudE9wdGlvbi5pbmRleCA9IG9wdGlvblNlbGVjdG9yLmRhdGFzZXQuaW5kZXhcclxuICAgICAgICAgICAgY3VycmVudE9wdGlvbnMucHVzaChjdXJyZW50T3B0aW9uKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY3VycmVudE9wdGlvbnMucHVzaChmYWxzZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY3VycmVudE9wdGlvbi52YWx1ZSA9IG9wdGlvblNlbGVjdG9yLnZhbHVlXHJcbiAgICAgICAgICBjdXJyZW50T3B0aW9uLmluZGV4ID0gb3B0aW9uU2VsZWN0b3IuZGF0YXNldC5pbmRleFxyXG4gICAgICAgICAgY3VycmVudE9wdGlvbnMucHVzaChjdXJyZW50T3B0aW9uKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjdXJyZW50T3B0aW9ucyA9IEhlbHBlcnMuY29tcGFjdChjdXJyZW50T3B0aW9ucylcclxuICAgICAgcmV0dXJuIGN1cnJlbnRPcHRpb25zXHJcbiAgICB9XHJcblxyXG4gICAgX2dldFZhcmlhbnRGcm9tT3B0aW9ucyAoKSB7XHJcbiAgICAgIGxldCBzZWxlY3RlZFZhbHVlcyA9IHRoaXMuX2dldEN1cnJlbnRPcHRpb25zKClcclxuICAgICAgbGV0IHZhcmlhbnRzID0gdGhpcy5fcHJvZHVjdC52YXJpYW50c1xyXG4gICAgICBsZXQgZm91bmQgPSBmYWxzZVxyXG5cclxuICAgICAgZm9yIChsZXQgcmFkaW8gb2YgdGhpcy5fdmFyaWFudFJhZGlvcykge1xyXG4gICAgICAgIGlmIChyYWRpby5jaGVja2VkKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5fcHJvZHVjdC52YXJpYW50cy5maW5kKHZhcmlhbnQgPT4gYCR7dmFyaWFudC5pZH1gID09PSByYWRpby5kYXRhc2V0LnZhcmlhbnRJZClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzZWxlY3RlZFZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9yIChsZXQgdmFyaWFudCBvZiB2YXJpYW50cykge1xyXG4gICAgICAgICAgdmFyIHNhdGlzZmllZCA9IHRydWVcclxuXHJcbiAgICAgICAgICBmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0ZWRWYWx1ZXMpIHtcclxuICAgICAgICAgICAgaWYgKHNhdGlzZmllZCkge1xyXG4gICAgICAgICAgICAgIHNhdGlzZmllZCA9IChvcHRpb24udmFsdWUgPT09IHZhcmlhbnRbb3B0aW9uLmluZGV4XSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChzYXRpc2ZpZWQpIHtcclxuICAgICAgICAgICAgZm91bmQgPSB2YXJpYW50XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2R1Y3QudmFyaWFudHMuZmluZCh2YXJpYW50ID0+IGAke3ZhcmlhbnQuaWR9YCA9PT0gYCR7dGhpcy5fbWFzdGVyU2VsZWN0c1swXS52YWx1ZX1gKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZm91bmQgfHwgbnVsbFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9pbmhlcml0ZWQvQ29tcG9uZW50J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVpY2tsaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eCkge1xyXG4gICAgc3VwZXIoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eClcclxuICAgIHRoaXMuX29wdGlvbnMgPSB7Li4ue1xyXG4gICAgICBsaW1pdDogNTAsXHJcbiAgICAgIGlnbm9yZXM6IFtcclxuICAgICAgICB1cmwgPT4ge1xyXG4gICAgICAgICAgbGV0IHRvVGVzdCA9IHVybC5yZXBsYWNlKGRvY3VtZW50LmxvY2F0aW9uLm9yaWdpbiwgJycpXHJcbiAgICAgICAgICBsZXQgdG9JZ25vcmUgPSBbXHJcbiAgICAgICAgICAnL2FjY291bnQvbG9nb3V0JyxcclxuICAgICAgICAgICcvYWNjb3VudC9sb2dpbicsXHJcbiAgICAgICAgICAnL2NhcnQvY2xlYXInLFxyXG4gICAgICAgICAgJy9jYXJ0L2FkZCcsXHJcbiAgICAgICAgICAnL2NhcnQvdXBkYXRlJyxcclxuICAgICAgICAgICcvY2FydC9jaGFuZ2UnLFxyXG4gICAgICAgICAgJy9wYWdlcy9wcml2YWN5LXBvbGljeScsXHJcbiAgICAgICAgICAnL3BhZ2VzL3BvbGljaWVzJyxcclxuICAgICAgICAgICcvI3N3eW0td2lzaGxpc3QnLFxyXG4gICAgICAgICAgJy9zZWFyY2gnLFxyXG4gICAgICAgICAgJy8jJyxcclxuICAgICAgICAgICcvI21haW4nLFxyXG4gICAgICAgICAgJy9jaGVja291dCdcclxuICAgICAgICAgIF1cclxuICAgICAgICAgIGxldCBpZ25vcmluZyA9IHRvSWdub3JlLnNvbWUodXJsVG9JZ25vcmUgPT4gdG9UZXN0LmluY2x1ZGVzKHVybFRvSWdub3JlKSlcclxuXHJcbiAgICAgICAgICByZXR1cm4gaWdub3JpbmdcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sIC4uLnRoaXMuX29wdGlvbnN9XHJcbiAgfVxyXG5cclxuICBhc3luYyBtb3VudCAoKSB7XHJcbiAgICBsZXQgcXVpY2tsaW5rID0gYXdhaXQgaW1wb3J0KCdxdWlja2xpbmsnKVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYXN5bmMgZSA9PiB7XHJcbiAgICAgIHRoaXMuX29wdGlvbnMuZWwgPSB0aGlzLl9lbGVtXHJcbiAgICAgIHF1aWNrbGluay5saXN0ZW4odGhpcy5fb3B0aW9ucylcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5fY3R4Lm9uKCdyYWRpYW50LS1xdWlja2xpbmstbGlzdGVuLXRvJywgKHN0YXRlLCBlbGVtKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVsZW0pXHJcbiAgICAgIHRoaXMuX29wdGlvbnMuZWwgPSBlbGVtXHJcbiAgICAgIHF1aWNrbGluay5saXN0ZW4odGhpcy5fb3B0aW9ucylcclxuICAgIH0pXHJcbiAgfVxyXG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9pbmhlcml0ZWQvQ29tcG9uZW50J1xyXG5pbXBvcnQgSGVscGVycyBmcm9tICcuLi9saWIvSGVscGVycydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbFRvIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eCkge1xyXG4gICAgc3VwZXIoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eClcclxuICAgIHRoaXMuX29wdGlvbnMgPSB7Li4ue1xyXG4gICAgICBvZmZzZXQ6IDBcclxuICAgIH0sIC4uLnRoaXMuX29wdGlvbnN9XHJcbiAgICB0aGlzLl9vZmZzZXQgPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWhlYWRlci1oZWlnaHQnKSlcclxuICB9XHJcblxyXG4gIG1vdW50ICgpIHtcclxuICAgIGxldCBoYXNoID0gdGhpcy5fZWxlbS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSA/IHRoaXMuX2VsZW0uZ2V0QXR0cmlidXRlKCdocmVmJykgOiAnIydcclxuXHJcbiAgICBpZiAoIXRoaXMuX29wdGlvbnMudGFyZ2V0KSB7XHJcbiAgICAgIHRoaXMuX29wdGlvbnMgPSB7XHJcbiAgICAgICAgb246IFwiY2xpY2tcIixcclxuICAgICAgICB0YXJnZXQ6IGhhc2gsXHJcbiAgICAgICAgcHJldmVudERlZmF1bHQ6IHRydWUsXHJcbiAgICAgICAgb2Zmc2V0OiAwXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgZm9yIChsZXQgb3B0aW9uIG9mIHRoaXMuX29wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLl9vcHRpb25Mb2dpYyhvcHRpb24pXHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gaGFzaCkge1xyXG4gICAgICAgICAgdGhpcy5fZXZlbnRMb2dpYyhvcHRpb24pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9vcHRpb25Mb2dpYyh0aGlzLl9vcHRpb25zKVxyXG5cclxuICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSBoYXNoKSB7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRMb2dpYyh0aGlzLl9vcHRpb25zKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBcclxuXHJcbiAgX29wdGlvbkxvZ2ljKG9wdGlvbikge1xyXG4gICAgdGhpcy5fZWxlbS5hZGRFdmVudExpc3RlbmVyKG9wdGlvbi5vbiwgYXN5bmMgZSA9PiB7XHJcbiAgICAgIGlmIChvcHRpb24ub25seVRoaXNFbGVtICYmIGUudGFyZ2V0ICE9PSB0aGlzLl9lbGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmIChvcHRpb24ucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fZXZlbnRMb2dpYyhvcHRpb24pXHJcbiAgIFxyXG4gICAgfSwgb3B0aW9uLnByZXZlbnREZWZhdWx0ID8geyBwYXNzaXZlOiBmYWxzZSB9IDogeyBwYXNzaXZlOiB0cnVlIH0pXHJcbiAgfVxyXG5cclxuICBfZXZlbnRMb2dpYyAob3B0aW9uKSB7XHJcbiAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb24udGFyZ2V0KVxyXG4gICAgbGV0IHNjcm9sbHRUb1RvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCArIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSB0aGlzLl9vZmZzZXQgLSB0aGlzLl9vcHRpb25zLm9mZnNldFxyXG4gICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgdG9wOiBzY3JvbGx0VG9Ub3AsXHJcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgfSlcclxuICB9XHJcbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2luaGVyaXRlZC9Db21wb25lbnQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXRDU1NWYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yIChlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KSB7XHJcbiAgICBzdXBlcihlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KVxyXG4gIH1cclxuXHJcbiAgbW91bnQgKCkge1xyXG4gICAgaWYgKHRoaXMuX29wdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIGZvciAobGV0IG9wdGlvbiBvZiB0aGlzLl9vcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9uTG9naWMob3B0aW9uKVxyXG5cclxuICAgICAgICBpZiAob3B0aW9uLnVwZGF0ZU9uUmVzaXplID09PSB0cnVlKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbkxvZ2ljKG9wdGlvbilcclxuICAgICAgICAgIH0sIHsgcGFzc2l2ZTogdHJ1ZSB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbi51cGRhdGVPbkN0eCkge1xyXG4gICAgICAgICAgdGhpcy5fY3R4Lm9uKG9wdGlvbi51cGRhdGVPbkN0eCwgZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbkxvZ2ljKG9wdGlvbilcclxuICAgICAgICAgIH0sIHsgcGFzc2l2ZTogdHJ1ZSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fb3B0aW9uTG9naWModGhpcy5fb3B0aW9ucylcclxuXHJcbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLnVwZGF0ZU9uUmVzaXplID09PSB0cnVlKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGUgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fb3B0aW9uTG9naWModGhpcy5fb3B0aW9ucylcclxuICAgICAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX29wdGlvbkxvZ2ljKG9wdGlvbikge1xyXG4gICAgbGV0IHRvR2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb24uc2VsZWN0b3IpXHJcblxyXG4gICAgaWYoIXRvR2V0KSByZXR1cm5cclxuICAgIFxyXG4gICAgbGV0IGRpbWVuc2lvbnMgPSB0b0dldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG5cclxuICAgIGxldCBzZXRPbiA9IFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRdXHJcblxyXG4gICAgaWYgKG9wdGlvbi5zZXRPbikge1xyXG4gICAgICBzZXRPbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwob3B0aW9uLnNldE9uKVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgdG9TZXQgb2Ygc2V0T24pIHtcclxuICAgICAgdG9TZXQuc3R5bGUuc2V0UHJvcGVydHkob3B0aW9uLnZhcixgJHtNYXRoLnJvdW5kKGRpbWVuc2lvbnNbb3B0aW9uLmdldF0pfXB4YClcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2luaGVyaXRlZC9Db21wb25lbnQnXHJcblxyXG5jbGFzcyBTaWRlQ2FydCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eCkge1xyXG4gICAgICAgIHN1cGVyKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpXHJcbiAgICAgICAgdGhpcy5fc2Nyb2xsQXJlYSA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtc2lkZS1jYXJ0LWl0ZW1zXScpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbW91bnQgKCkge1xyXG4gICAgICAgIHRoaXMuX2N0eC5vbignc2hvdy1zaWRlLWNhcnQnLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1NpZGVDYXJ0KClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxyXG4gICAgICAgIGlmIChwYXJhbXMuaGFzKCdzaG93LWNhcnQnKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTaWRlQ2FydCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9kb0VkaXRvckxpc3RlbmVycygpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1NpZGVDYXJ0ICgpIHtcclxuICAgICAgICB0aGlzLl9zY3JvbGxBcmVhID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zaWRlLWNhcnQtaXRlbXNdJylcclxuICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoJ3Nob3duJylcclxuICAgICAgICB0aGlzLl9jdHgub24oJ2NhcnQtaXRlbS1hZGRlZC0tcmVmcmVzaGVkJywgKHN0YXRlLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbEFyZWEgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNpZGUtY2FydC1pdGVtc10nKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3duJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N0eC5lbWl0KCdyYWRpYW50LS1zY3JvbGwtbG9jay1lbGVtJywgbnVsbCwgdGhpcy5fc2Nyb2xsQXJlYSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX2RvRWRpdG9yTGlzdGVuZXJzICgpIHtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2hvcGlmeTpzZWN0aW9uOnNlbGVjdCcsIGUgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jb250YWlucyh0aGlzLl9lbGVtKSkge1xyXG4gICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKCdzaG93bicpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2hvcGlmeTpzZWN0aW9uOmRlc2VsZWN0JywgZSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNvbnRhaW5zKHRoaXMuX2VsZW0pKSB7XHJcbiAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3duJylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVDYXJ0XHJcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vaW5oZXJpdGVkL0NvbXBvbmVudCdcclxuaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi4vbGliL0hlbHBlcnMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZVRvZ2dsZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IgKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpIHtcclxuICAgIHN1cGVyKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpXHJcbiAgfVxyXG5cclxuICBtb3VudCAoKSB7XHJcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgZm9yIChsZXQgb3B0aW9uIG9mIHRoaXMuX29wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLl9vcHRpb25Mb2dpYyhvcHRpb24pXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX29wdGlvbkxvZ2ljKHRoaXMuX29wdGlvbnMpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfb3B0aW9uTG9naWMob3B0aW9uKSB7XHJcbiAgICB0aGlzLl9lbGVtLmFkZEV2ZW50TGlzdGVuZXIob3B0aW9uLm9uLCBhc3luYyBlID0+IHtcclxuICAgICAgaWYgKG9wdGlvbi5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb24uc2VsZWN0b3IpXHJcbiAgICAgIGxldCBtZXRob2QgPSBudWxsXHJcbiAgICAgIFxyXG4gICAgICBpZiAob3B0aW9uLm1ldGhvZCA9PT0gJ3NsaWRlRG93bicpIHtcclxuICAgICAgICBtZXRob2QgPSAnX3NsaWRlRG93bidcclxuICAgICAgfSBlbHNlIGlmIChvcHRpb24ubWV0aG9kID09PSAnc2xpZGVVcCcpIHtcclxuICAgICAgICBtZXRob2QgPSAnX3NsaWRlVXAnXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWV0aG9kID0gdGhpcy5fZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSA/ICdfc2xpZGVVcCcgOiAnX3NsaWRlRG93bidcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG9wdGlvbi51c2VRdWV1ZSkge1xyXG4gICAgICAgIHRoaXMuX2N0eC5nZXRTdGF0ZSgpLmV2ZW50UXVldWUuYWRkKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzW21ldGhvZF0odGFyZ2V0KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXdhaXQgdGhpc1ttZXRob2RdKHRhcmdldClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIF9zbGlkZURvd24gKGVsZW0pIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGVsZW0uc3R5bGUubWF4SGVpZ2h0ID0gJ25vbmUnXHJcbiAgICAgIGxldCBzY3JvbGxIZWlnaHQgPSBlbGVtLnNjcm9sbEhlaWdodFxyXG4gICAgICBlbGVtLnN0eWxlLm1heEhlaWdodCA9ICcwcHgnXHJcbiAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZCgnb3BlbicpXHJcbiAgICAgIGVsZW0uZGF0YXNldC50cmFuc2l0aW9uaW5nID0gdHJ1ZVxyXG5cclxuICAgICAgbGV0IG9wZW5FdmVudCA9IGUgPT4ge1xyXG4gICAgICAgICAgaWYgKGUucHJvcGVydHlOYW1lID09PSAnbWF4LWhlaWdodCcpIHtcclxuICAgICAgICAgICAgZWxlbS5kYXRhc2V0LnRyYW5zaXRpb25pbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICBlbGVtLnN0eWxlLm1heEhlaWdodCA9ICdub25lJ1xyXG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ29wZW4nKVxyXG4gICAgICAgICAgICBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBvcGVuRXZlbnQsIGZhbHNlKVxyXG4gICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBvcGVuRXZlbnQsIGZhbHNlKVxyXG4gICAgICBIZWxwZXJzLm5leHRGcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgZWxlbS5zdHlsZS5tYXhIZWlnaHQgPSBgJHtzY3JvbGxIZWlnaHR9cHhgXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0gXHJcblxyXG4gIF9zbGlkZVVwIChlbGVtKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBlbGVtLnN0eWxlLm1heEhlaWdodCA9IGAke2VsZW0uc2Nyb2xsSGVpZ2h0fXB4YFxyXG4gICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKVxyXG4gICAgICBlbGVtLmRhdGFzZXQudHJhbnNpdGlvbmluZyA9IHRydWVcclxuXHJcbiAgICAgIGxldCBjbG9zZUV2ZW50ID0gZSA9PiB7XHJcbiAgICAgICAgaWYgKGUucHJvcGVydHlOYW1lID09PSAnbWF4LWhlaWdodCcpIHtcclxuICAgICAgICAgIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGNsb3NlRXZlbnQsIGZhbHNlKVxyXG4gICAgICAgICAgZWxlbS5kYXRhc2V0LnRyYW5zaXRpb25pbmcgPSBmYWxzZVxyXG4gICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGNsb3NlRXZlbnQsIGZhbHNlKVxyXG4gICAgICBIZWxwZXJzLm5leHRGcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgZWxlbS5zdHlsZS5tYXhIZWlnaHQgPSBgMHB4YFxyXG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2luaGVyaXRlZC9Db21wb25lbnQnXHJcbmltcG9ydCBIZWxwZXJzIGZyb20gJy4uL2xpYi9IZWxwZXJzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVUb2dnbGVHcm91cCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IgKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpIHtcclxuICAgIHN1cGVyKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpXHJcbiAgICB0aGlzLl90b2dnbGVJdGVtcyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9nZ2xlLWl0ZW1dJylcclxuICB9XHJcblxyXG4gIG1vdW50ICgpIHtcclxuXHJcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5jbG9zZU9uT3V0c2lkZUNsaWNrICYmIG1hdGNoTWVkaWEoJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MzVweCknKS5tYXRjaGVzKSB7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgbGV0IGNsaWNrSXNJbnNpZGUgPSB0aGlzLl9lbGVtLmNvbnRhaW5zKGUudGFyZ2V0KSB8fCB0aGlzLl9lbGVtID09PSBlLnRhcmdldFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjbGlja0lzSW5zaWRlKSByZXR1cm4gZmFsc2VcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLl90b2dnbGVJdGVtcykge1xyXG4gICAgICAgICAgbGV0IGVsZW1Ub1NsaWRlID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS10b2dnbGUtZWxlbV0nKVxyXG4gICAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcclxuICAgICAgICAgICAgSGVscGVycy5zbGlkZVVwKGVsZW1Ub1NsaWRlLCBpdGVtKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgeyBwYXNzaXZlOiB0cnVlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLl90b2dnbGVJdGVtcykge1xyXG5cclxuICAgICAgbGV0IHRyaWdnZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRvZ2dsZS10cmlnZ2VyXScpXHJcblxyXG4gICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIGxldCBlbGVtVG9TbGlkZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtdG9nZ2xlLWVsZW1dJylcclxuXHJcbiAgICAgICAgaWYoZWxlbVRvU2xpZGUuZGF0YXNldC50cmFuc2l0aW9uaW5nID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcclxuICAgICAgICAgIEhlbHBlcnMuc2xpZGVVcChlbGVtVG9TbGlkZSwgaXRlbSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgSGVscGVycy5zbGlkZURvd24oZWxlbVRvU2xpZGUsIGl0ZW0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgb3RoZXJUb2dnbGVzID0gaXRlbS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZS1pdGVtXScpXHJcblxyXG4gICAgICAgIGZvciAobGV0IG90aGVySXRlbSBvZiBvdGhlclRvZ2dsZXMpIHtcclxuICAgICAgICAgIGlmIChvdGhlckl0ZW0gIT09IGl0ZW0gJiYgb3RoZXJJdGVtLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpICYmIG90aGVySXRlbS5kYXRhc2V0LnRyYW5zaXRpb25pbmcgIT09ICd0cnVlJykgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgZWxlbVRvU2xpZGUgPSBvdGhlckl0ZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtdG9nZ2xlLWVsZW1dJylcclxuICAgICAgICAgICAgSGVscGVycy5zbGlkZVVwKGVsZW1Ub1NsaWRlLCBvdGhlckl0ZW0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2luaGVyaXRlZC9Db21wb25lbnQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkaW5nTWVudSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eCkge1xyXG4gICAgICAgIHN1cGVyKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpXHJcbiAgICAgICAgdGhpcy5fc2xpZGluZ0FyZWEgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1vdmluZy1jb250YWluZXJdJylcclxuICAgICAgICB0aGlzLl9uYXZJdGVtcyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmF2LWl0ZW1dJylcclxuICAgICAgICB0aGlzLl93aWR0aCA9IHRoaXMuX2VsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcclxuICAgICAgICB0aGlzLl9oZWlnaHQgPSB0aGlzLl9lbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRMZXZlbCA9IDFcclxuICAgIH1cclxuXHJcbiAgICBtb3VudCAoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgbmF2SXRlbSBvZiB0aGlzLl9uYXZJdGVtcykge1xyXG4gICAgICAgICAgICBsZXQgbmF2TGlua3MgPSBuYXZJdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWxldmVsXScpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGxpbmsgb2YgbmF2TGlua3MpIHtcclxuICAgICAgICAgICAgICAgIGxldCBsaW5rTGV2ZWwgPSBwYXJzZUludChsaW5rLmRhdGFzZXQubGV2ZWwpXHJcbiAgICAgICAgICAgICAgICBsZXQgbWVudUFyZWEgPSBsaW5rLmRhdGFzZXQubWVudUFyZWFcclxuICAgICAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZW51QXJlYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNZW51KGxpbmtMZXZlbCwgbWVudUFyZWEpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29Ub0xldmVsKGxpbmtMZXZlbClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBmaXJzdEl0ZW0gPSB0aGlzLl9uYXZJdGVtc1swXS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tZW51LWFyZWFdJylcclxuICAgICAgICB0aGlzLnNldFdpZHRocygpXHJcbiAgICAgICAgdGhpcy5zZXRIZWlnaHQoZmlyc3RJdGVtKVxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0V2lkdGhzKClcclxuICAgICAgICAgICAgdGhpcy5nb1RvTGV2ZWwodGhpcy5fY3VycmVudExldmVsKVxyXG4gICAgICAgIH0sIHsgcGFzc2l2ZTogdHJ1ZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNldFdpZHRocyAoKSB7XHJcbiAgICAgICAgdGhpcy5fd2lkdGggPSB0aGlzLl9lbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXHJcbiAgICAgICAgdGhpcy5fc2xpZGluZ0FyZWEuc3R5bGUubWluV2lkdGggPSBgJHt0aGlzLl93aWR0aCAqIDN9cHhgXHJcbiAgICAgICAgZm9yIChsZXQgbmF2SXRlbSBvZiB0aGlzLl9uYXZJdGVtcykge1xyXG4gICAgICAgICAgICBuYXZJdGVtLnN0eWxlLndpZHRoID0gYCR7dGhpcy5fd2lkdGh9cHhgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEhlaWdodCAoZWxlbSA9IHRoaXMuX2VsZW0pIHtcclxuICAgICAgICB0aGlzLl9oZWlnaHQgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArIDQwXHJcbiAgICAgICAgdGhpcy5fc2xpZGluZ0FyZWEuc3R5bGUubWluSGVpZ2h0ID0gYCR7dGhpcy5faGVpZ2h0fXB4YFxyXG4gICAgfVxyXG5cclxuICAgIHNob3dNZW51IChsZXZlbCwgbWVudUhhbmRsZSkge1xyXG4gICAgICAgIGxldCB0b0hpZGUgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLW5hdi1pdGVtPScke2xldmVsfSddID4gbmF2YClcclxuICAgICAgICBsZXQgdG9TaG93ID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1uYXYtaXRlbT0nJHtsZXZlbH0nXSBbZGF0YS1tZW51LWFyZWE9JyR7bWVudUhhbmRsZX0nXWApXHJcbiAgICAgICAgZm9yIChsZXQgbmF2SXRlbSBvZiB0b0hpZGUpIHtcclxuICAgICAgICAgICAgbmF2SXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9TaG93LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgIHRoaXMuc2V0SGVpZ2h0KHRvU2hvdylcclxuICAgIH1cclxuXHJcbiAgICBnb1RvTGV2ZWwgKGxldmVsKSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudExldmVsID0gbGV2ZWxcclxuXHJcbiAgICAgICAgZm9yIChsZXQgbmF2SXRlbSBvZiB0aGlzLl9uYXZJdGVtcykge1xyXG4gICAgICAgICAgICBuYXZJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3duJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX25hdkl0ZW1zW2xldmVsIC0gMV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fbmF2SXRlbXNbbGV2ZWwgLSAxXS5jbGFzc0xpc3QuYWRkKCdzaG93bicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYWN0aXZlTWVudUFyZWEgPSB0aGlzLl9uYXZJdGVtc1tsZXZlbCAtIDFdLnF1ZXJ5U2VsZWN0b3IoYG5hdltkYXRhLW1lbnUtYXJlYV06bm90KC5oaWRlKWApXHJcbiAgICAgICAgdGhpcy5zZXRIZWlnaHQoYWN0aXZlTWVudUFyZWEpXHJcblxyXG4gICAgICAgIHRoaXMuX2VsZW0uc2Nyb2xsVG8oMCwgMClcclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgdHJhbnNmb3JtQW1vdW50ID0gMCAtICgobGV2ZWwgLSAxKSAqIHRoaXMuX3dpZHRoKVxyXG5cclxuICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpciA9PT0gJ3J0bCcpIHtcclxuICAgICAgICAgIHRyYW5zZm9ybUFtb3VudCAqPSAtMVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dHJhbnNmb3JtQW1vdW50fXB4KWBcclxuICAgICAgICB0aGlzLl9zbGlkaW5nQXJlYS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1cclxuICAgICAgICB0aGlzLl9zbGlkaW5nQXJlYS5zdHlsZS5Nb3pUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1cclxuICAgICAgICB0aGlzLl9zbGlkaW5nQXJlYS5zdHlsZS5tc1RyYW5zZm9ybSA9IHRyYW5zZm9ybVxyXG4gICAgICAgIHRoaXMuX3NsaWRpbmdBcmVhLnN0eWxlLk9UcmFuc2Zvcm0gPSB0cmFuc2Zvcm1cclxuICAgICAgICB0aGlzLl9zbGlkaW5nQXJlYS5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cclxuICAgIH1cclxuXHJcbiAgICByZXNldCAoKSB7XHJcbiAgICAgICAgdGhpcy5nb1RvTGV2ZWwoMSlcclxuICAgIH1cclxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vaW5oZXJpdGVkL0NvbXBvbmVudCdcclxuXHJcbmxldCBoY1N0aWNreSA9IG51bGxcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0aWNreUVsZW0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yIChlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KSB7XHJcbiAgICBzdXBlcihlbGVtLCB0aGVtZSwgb3B0aW9ucywgY3R4KVxyXG4gICAgdGhpcy5fc3RpY2t5ID0gbnVsbFxyXG4gICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnNcclxuICAgIHRoaXMuX3NlbGVjdG9yID0gdGhpcy5fb3B0aW9ucy50b3BcclxuICB9XHJcblxyXG4gIGFzeW5jIG1vdW50ICgpIHtcclxuICAgIGhjU3RpY2t5ID0gYXdhaXQgaW1wb3J0KCdoYy1zdGlja3knKVxyXG4gICAgaGNTdGlja3kgPSBoY1N0aWNreS5kZWZhdWx0XHJcblxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9zZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5fb3B0aW9ucy50b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX3NlbGVjdG9yKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcclxuICAgIH1cclxuICAgIHRoaXMuX3N0aWNreSA9IG5ldyBoY1N0aWNreSh0aGlzLl9lbGVtLCB0aGlzLl9vcHRpb25zKVxyXG5cclxuICAgIGlmICh0eXBlb2YgdGhpcy5fc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBlID0+IHtcclxuICAgICAgICB0aGlzLl9vcHRpb25zLnRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fc2VsZWN0b3IpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxyXG4gICAgICAgIHRoaXMuX3N0aWNreS51cGRhdGUodGhpcy5fb3B0aW9ucylcclxuICAgICAgfSwgeyBwYXNzaXZlOiB0cnVlIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9pbmhlcml0ZWQvQ29tcG9uZW50J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVpY2tsaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eCkge1xyXG4gICAgc3VwZXIoZWxlbSwgdGhlbWUsIG9wdGlvbnMsIGN0eClcclxuICB9XHJcblxyXG4gIGFzeW5jIG1vdW50ICgpIHtcclxuICAgIGlmICh0aGlzLl9lbGVtLmhhc0F0dHJpYnV0ZSgnW2RhdGEtbGF6eV0nKSAmJiAhdGhpcy5fZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2xvYWRlZCcpKSB7XHJcbiAgICAgIHRoaXMuX2VsZW0uYWRkRXZlbnRMaXN0ZW5lcignZmZjLS1sb2FkZWQnLCBlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbG9hZGVkIEV2ZW50JylcclxuICAgICAgICB0aGlzLl9lbGVtLnBsYXkoKVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZWxlbS5wbGF5KClcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgSGVscGVycyBmcm9tICcuLi9saWIvSGVscGVycydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IgKGVsZW0sIHRoZW1lLCBvcHRpb25zLCBjdHgpIHtcclxuICAgIHRoaXMuX3RoZW1lID0gdGhlbWVcclxuICAgIHRoaXMuX2VsZW0gPSBlbGVtXHJcbiAgICB0aGlzLl9jdHggPSBjdHhcclxuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zXHJcbiAgICB0aGlzLl9vcmlnaW5hbE9wdGlvbnMgPSB7Li4udGhpcy5fb3B0aW9uc31cclxuXHJcbiAgICB0aGlzLl9hZGRlZFJlc2l6ZUxpc3RlbmVyID0gZmFsc2VcclxuICAgIHRoaXMuX29wdGlvbnNDaGVjayh0cnVlKVxyXG4gIH1cclxuXHJcbiAgX29wdGlvbnNDaGVjayAoZmlyc3RSdW4pIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuX29wdGlvbnMpKSByZXR1cm4gZmFsc2VcclxuXHJcbiAgICBsZXQgbmV3T3B0aW9ucyA9IHsuLi50aGlzLl9vcmlnaW5hbE9wdGlvbnN9XHJcbiAgICBuZXdPcHRpb25zLnVzaW5nU2V0dGluZ3NGb3IgPSAnZGVza3RvcCdcclxuXHJcbiAgICBpZiAodGhpcy5fb3JpZ2luYWxPcHRpb25zLnJlc3BvbnNpdmUgJiYgdGhpcy5fb3JpZ2luYWxPcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoKSB7XHJcbiAgICAgIGZvciAobGV0IG9wdGlvbnNPYmogb2YgdGhpcy5fb3JpZ2luYWxPcHRpb25zLnJlc3BvbnNpdmUpIHtcclxuICAgICAgICBpZiAobWF0Y2hNZWRpYShgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7b3B0aW9uc09iai5icmVha3BvaW50fSlgKS5tYXRjaGVzKSB7XHJcbiAgICAgICAgICBuZXdPcHRpb25zID0gey4uLnRoaXMuX29yaWdpbmFsT3B0aW9ucywgLi4ub3B0aW9uc09iai5zZXR0aW5nc31cclxuICAgICAgICAgIG5ld09wdGlvbnMudXNpbmdTZXR0aW5nc0ZvciA9IG9wdGlvbnNPYmouYnJlYWtwb2ludFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaXJzdFJ1bikge1xyXG4gICAgICB0aGlzLl9vcHRpb25zID0gbmV3T3B0aW9uc1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLl9vcHRpb25zLnVzaW5nU2V0dGluZ3NGb3IgIT09IG5ld09wdGlvbnMudXNpbmdTZXR0aW5nc0Zvcikge1xyXG4gICAgICB0aGlzLl9vcHRpb25zID0gbmV3T3B0aW9uc1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZVxyXG4gICAgXHJcbiAgfVxyXG5cclxuXHJcbiAgcmVpbml0T25SZXNpemUgKG9wdGlvbnMgPSBmYWxzZSkge1xyXG4gICAgaWYgKHRoaXMuX2FkZGVkUmVzaXplTGlzdGVuZXIpIHJldHVyblxyXG4gICAgaWYgKG9wdGlvbnMpIHRoaXMuX29yaWdpbmFsT3B0aW9ucyA9IG9wdGlvbnNcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBlID0+IHtcclxuICAgICAgbGV0IGNoYW5nZWQgPSB0aGlzLl9vcHRpb25zQ2hlY2soKVxyXG5cclxuICAgICAgaWYgKGNoYW5nZWQpIHtcclxuICAgICAgICB0aGlzLnVubW91bnQoKVxyXG4gICAgICAgIHRoaXMubW91bnQoKVxyXG5cclxuICAgICAgICBIZWxwZXJzLm5leHRGcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMudXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgfSwgeyBwYXNzaXZlOiB0cnVlIH0pXHJcbiAgICB0aGlzLl9hZGRlZFJlc2l6ZUxpc3RlbmVyID0gdHJ1ZVxyXG4gIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgSGVscGVycyBmcm9tICcuL0hlbHBlcnMnXHJcblxyXG5sZXQgZW5kcG9pbnRzID0ge1xyXG4gIGNhcnQ6IHtcclxuICAgIGNsZWFyOiAnL2NhcnQvY2xlYXIuanNvbicsXHJcbiAgICBnZXQ6ICcvY2FydC5qc29uJyxcclxuICAgIGFkZDogJy9jYXJ0L2FkZC5qcycsXHJcbiAgICBjaGFuZ2U6ICcvY2FydC9jaGFuZ2UuanMnLFxyXG4gICAgdXBkYXRlOiAnL2NhcnQvdXBkYXRlLmpzJ1xyXG4gIH0sXHJcbiAgcHJvZHVjdDoge1xyXG4gICAgZ2V0OiAnL3Byb2R1Y3RzL1toYW5kbGVdLmpzb24nLFxyXG4gICAgZ2V0Q3VzdG9tOiAnL3Byb2R1Y3RzL1toYW5kbGVdP3ZpZXc9anNvbidcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFqYXhBcGkge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRDYXJ0IChzdGF0ZSA9IGZhbHNlKSB7XHJcbiAgICBsZXQgcm9vdFVSTCA9IHN0YXRlID8gc3RhdGUucm9vdFVSTCA6ICcnXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KHJvb3RVUkwgKyBIZWxwZXJzLmdldEVuZHBvaW50KGVuZHBvaW50cy5jYXJ0LmdldCkpXHJcbiAgICByZXR1cm4gcmVzdWx0LmRhdGFcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBhZGRUb0NhcnQgKG9wdGlvbnMsIHN0YXRlID0gZmFsc2UpIHtcclxuICAgIGxldCByb290VVJMID0gc3RhdGUgPyBzdGF0ZS5yb290VVJMIDogJydcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KHJvb3RVUkwgKyBIZWxwZXJzLmdldEVuZHBvaW50KGVuZHBvaW50cy5jYXJ0LmFkZCksIG9wdGlvbnMpXHJcbiAgICByZXR1cm4gcmVzdWx0LmRhdGFcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBjaGFuZ2VDYXJ0IChvcHRpb25zLCBzdGF0ZSA9IGZhbHNlKSB7XHJcbiAgICBsZXQgcm9vdFVSTCA9IHN0YXRlID8gc3RhdGUucm9vdFVSTCA6ICcnXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChyb290VVJMICsgSGVscGVycy5nZXRFbmRwb2ludChlbmRwb2ludHMuY2FydC5jaGFuZ2UpLCBvcHRpb25zKVxyXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdXBkYXRlQ2FydCAob3B0aW9ucywgc3RhdGUgPSBmYWxzZSkge1xyXG4gICAgbGV0IHJvb3RVUkwgPSBzdGF0ZSA/IHN0YXRlLnJvb3RVUkwgOiAnJ1xyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3Qocm9vdFVSTCArIEhlbHBlcnMuZ2V0RW5kcG9pbnQoZW5kcG9pbnRzLmNhcnQudXBkYXRlKSwgb3B0aW9ucylcclxuICAgIHJldHVybiByZXN1bHQuZGF0YVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGVtcHR5Q2FydCAob3B0aW9ucywgc3RhdGUgPSBmYWxzZSkge1xyXG4gICAgbGV0IHJvb3RVUkwgPSBzdGF0ZSA/IHN0YXRlLnJvb3RVUkwgOiAnJ1xyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3Qocm9vdFVSTCArIEhlbHBlcnMuZ2V0RW5kcG9pbnQoZW5kcG9pbnRzLmNhcnQuY2xlYXIpLCBvcHRpb25zKVxyXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdXBkYXRlQ2FydEl0ZW0gKGlkLCBxdWFudGl0eSwgcHJvcHMgPSB7fSwgc3RhdGUgPSBmYWxzZSkge1xyXG4gICAgcmV0dXJuIGF3YWl0IEFqYXhBcGkuY2hhbmdlQ2FydCh7XHJcbiAgICAgIGxpbmU6IGAke2lkfWAsXHJcbiAgICAgIHF1YW50aXR5OiBxdWFudGl0eSxcclxuICAgICAgcHJvcGVydGllczogcHJvcHNcclxuICAgIH0sIHN0YXRlKVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHJlbW92ZUNhcnRJdGVtIChpZCkge1xyXG4gICAgcmV0dXJuIGF3YWl0IEFqYXhBcGkudXBkYXRlQ2FydEl0ZW0oaWQsIDApXHJcbiAgfSBcclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldFByb2R1Y3QgKGhhbmRsZSwgc3RhdGUgPSBmYWxzZSkge1xyXG4gICAgbGV0IHJvb3RVUkwgPSBzdGF0ZSA/IHN0YXRlLnJvb3RVUkwgOiAnJ1xyXG4gICAgbGV0IGVuZHBvaW50ID0gZW5kcG9pbnRzLnByb2R1Y3QuZ2V0LnJlcGxhY2UoJ1toYW5kbGVdJywgaGFuZGxlKVxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChyb290VVJMICsgSGVscGVycy5nZXRFbmRwb2ludChlbmRwb2ludCkpXHJcbiAgICByZXR1cm4gcmVzdWx0LmRhdGEucHJvZHVjdFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldEN1c3RvbVByb2R1Y3QgKGhhbmRsZSwgc3RhdGUgPSBmYWxzZSkge1xyXG4gICAgbGV0IHJvb3RVUkwgPSBzdGF0ZSA/IHN0YXRlLnJvb3RVUkwgOiAnJ1xyXG4gICAgbGV0IGVuZHBvaW50ID0gZW5kcG9pbnRzLnByb2R1Y3QuZ2V0Q3VzdG9tLnJlcGxhY2UoJ1toYW5kbGVdJywgaGFuZGxlKVxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChyb290VVJMICsgSGVscGVycy5nZXRFbmRwb2ludChlbmRwb2ludCksIHsgcmVzcG9uc2VUeXBlOiAnanNvbicgfSlcclxuICAgIHJldHVybiB0eXBlb2YgcmVzdWx0LmRhdGEgPT09ICdvYmplY3QnID8gcmVzdWx0LmRhdGEgOiBKU09OLnBhcnNlKHJlc3VsdC5kYXRhKVxyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBlcnMge1xyXG4gIHN0YXRpYyBmb3JtYXRXaXRoRGVsaW1pdGVycyAobnVtYmVyLCBwcmVjaXNpb24sIHRob3VzYW5kcywgZGVjaW1hbCkge1xyXG4gICAgcHJlY2lzaW9uID0gcHJlY2lzaW9uIHx8IDJcclxuICAgIHRob3VzYW5kcyA9IHRob3VzYW5kcyB8fCAnLCdcclxuICAgIGRlY2ltYWwgPSBkZWNpbWFsIHx8ICcuJ1xyXG5cclxuICAgIGlmIChpc05hTihudW1iZXIpIHx8IG51bWJlciA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiAwXHJcbiAgICB9XHJcblxyXG4gICAgbnVtYmVyID0gKG51bWJlciAvIDEwMC4wKS50b0ZpeGVkKHByZWNpc2lvbilcclxuXHJcbiAgICBjb25zdCBwYXJ0cyA9IG51bWJlci5zcGxpdCgnLicpXHJcbiAgICBjb25zdCBkb2xsYXJzQW1vdW50ID0gcGFydHNbMF0ucmVwbGFjZSgvKFxcZCkoPz0oXFxkXFxkXFxkKSsoPyFcXGQpKS9nLCAnJDEnICsgdGhvdXNhbmRzKVxyXG4gICAgY29uc3QgY2VudHNBbW91bnQgPSBwYXJ0c1sxXSA/IChkZWNpbWFsICsgcGFydHNbMV0pIDogJydcclxuXHJcbiAgICByZXR1cm4gZG9sbGFyc0Ftb3VudCArIGNlbnRzQW1vdW50XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaXNJblZpZXdwb3J0IChlbGVtKSB7XHJcbiAgICB2YXIgZGlzdGFuY2UgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgZGlzdGFuY2UudG9wID49IDAgJiZcclxuICAgICAgZGlzdGFuY2UuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodClcclxuICAgIClcclxuICB9XHJcblxyXG4gIHN0YXRpYyBoYXNQYXJlbnRXaXRoU2VsZWN0b3IgKGVsZW1lbnQsIHNlbGVjdG9yKSB7XHJcbiAgICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSByZXR1cm4gZWxlbWVudDtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQucGFyZW50RWxlbWVudCAmJiBIZWxwZXJzLmhhc1BhcmVudFdpdGhTZWxlY3RvcihlbGVtZW50LnBhcmVudEVsZW1lbnQsIHNlbGVjdG9yKVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRlYm91bmNlKGNhbGxiYWNrLCB3YWl0KSB7XHJcbiAgICAgIGxldCB0aW1lb3V0O1xyXG4gICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2suYXBwbHkoY29udGV4dCwgYXJncyksIHdhaXQpO1xyXG4gICAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFBhcmFtZXRlckJ5TmFtZShuYW1lLCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZikge1xyXG4gICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgJ1xcXFwkJicpO1xyXG4gICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnWz8mXScgKyBuYW1lICsgJyg9KFteJiNdKil8JnwjfCQpJyksXHJcbiAgICAgICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcclxuICAgIGlmICghcmVzdWx0cykgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAoIXJlc3VsdHNbMl0pIHJldHVybiAnJztcclxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY29tcGFjdCAoYXJyYXkpIHtcclxuICAgIHZhciBpbmRleCA9IC0xXHJcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGhcclxuICAgIHZhciByZXNJbmRleCA9IDBcclxuICAgIHZhciByZXN1bHQgPSBbXVxyXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcclxuICAgICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdXHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxuICB9XHJcblxyXG4gIHN0YXRpYyBpc0FueVBhcnRPZkVsZW1lbnRJblZpZXdwb3J0IChlbCkge1xyXG4gICAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIC8vIERPTVJlY3QgeyB4OiA4LCB5OiA4LCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCwgdG9wOiA4LCByaWdodDogMTA4LCBib3R0b206IDEwOCwgbGVmdDogOCB9XHJcbiAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XHJcbiAgICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCk7XHJcblxyXG4gICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMyNTkzMy9kZXRlcm1pbmUtd2hldGhlci10d28tZGF0ZS1yYW5nZXMtb3ZlcmxhcFxyXG4gICAgICBjb25zdCB2ZXJ0SW5WaWV3ID0gKHJlY3QudG9wIDw9IHdpbmRvd0hlaWdodCkgJiYgKChyZWN0LnRvcCArIHJlY3QuaGVpZ2h0KSA+PSAwKTtcclxuICAgICAgY29uc3QgaG9ySW5WaWV3ID0gKHJlY3QubGVmdCA8PSB3aW5kb3dXaWR0aCkgJiYgKChyZWN0LmxlZnQgKyByZWN0LndpZHRoKSA+PSAwKTtcclxuXHJcbiAgICAgIHJldHVybiAodmVydEluVmlldyAmJiBob3JJblZpZXcpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZvcm1hdE1vbmV5IChjZW50cywgc3RhdGUpIHtcclxuXHJcbiAgICBsZXQgZm9ybWF0ID0gc3RhdGUubW9uZXlGb3JtYXRcclxuXHJcbiAgICBpZiAoY2VudHMgPT09IDApIHJldHVybiBzdGF0ZS5sb2NhbGUuZnJlZVxyXG5cclxuICAgIGlmICh0eXBlb2YgY2VudHMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGNlbnRzID0gY2VudHMucmVwbGFjZSgnLicsICcnKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCB2YWx1ZSA9ICcnXHJcbiAgICBjb25zdCBwbGFjZWhvbGRlclJlZ2V4ID0gL1xce1xce1xccyooXFx3KylcXHMqXFx9XFx9L1xyXG5cclxuICAgIHN3aXRjaChmb3JtYXQubWF0Y2gocGxhY2Vob2xkZXJSZWdleClbMV0pIHtcclxuICAgICAgY2FzZSAnYW1vdW50JzpcclxuICAgICAgICB2YWx1ZSA9IEhlbHBlcnMuZm9ybWF0V2l0aERlbGltaXRlcnMoY2VudHMsIDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdhbW91bnRfbm9fZGVjaW1hbHMnOlxyXG4gICAgICAgIHZhbHVlID0gSGVscGVycy5mb3JtYXRXaXRoRGVsaW1pdGVycyhjZW50cywgMCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2Ftb3VudF93aXRoX2NvbW1hX3NlcGFyYXRvcic6XHJcbiAgICAgICAgdmFsdWUgPSBIZWxwZXJzLmZvcm1hdFdpdGhEZWxpbWl0ZXJzKGNlbnRzLCAyLCAnLicsICcsJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2Ftb3VudF9ub19kZWNpbWFsc193aXRoX2NvbW1hX3NlcGFyYXRvcic6XHJcbiAgICAgICAgdmFsdWUgPSBIZWxwZXJzLmZvcm1hdFdpdGhEZWxpbWl0ZXJzKGNlbnRzLCAwLCAnLicsICcsJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2Ftb3VudF9ub19kZWNpbWFsc193aXRoX3NwYWNlX3NlcGFyYXRvcic6XHJcbiAgICAgICAgdmFsdWUgPSBIZWxwZXJzLmZvcm1hdFdpdGhEZWxpbWl0ZXJzKGNlbnRzLCAwLCAnICcpXHJcbiAgICAgICAgYnJlYWtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZm9ybWF0LnJlcGxhY2UocGxhY2Vob2xkZXJSZWdleCwgdmFsdWUpLnJlcGxhY2UoXCIuMDBcIiwgXCJcIikucmVwbGFjZSgnLDAwJywgJycpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0U2l6ZWRJbWFnZVVybCAoc3JjLCBzaXplKSB7XHJcbiAgICBpZiAoc2l6ZSA9PT0gbnVsbCB8fCBzcmMgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHNyY1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzaXplID09PSAnbWFzdGVyJykge1xyXG4gICAgICByZXR1cm4gSGVscGVycy5yZW1vdmVQcm90b2NvbChzcmMpXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG1hdGNoID0gc3JjLm1hdGNoKC9cXC4od2VicHxqcGd8anBlZ3xnaWZ8cG5nfGJtcHxiaXRtYXB8dGlmZnx0aWYpKFxcP3Y9XFxkKyk/JC9pKVxyXG5cclxuICAgIGlmIChtYXRjaCkge1xyXG4gICAgICB2YXIgcHJlZml4ID0gc3JjLnNwbGl0KG1hdGNoWzBdKVxyXG4gICAgICB2YXIgc3VmZml4ID0gbWF0Y2hbMF1cclxuXHJcbiAgICAgIHJldHVybiBIZWxwZXJzLnJlbW92ZVByb3RvY29sKHByZWZpeFswXSArICdfJyArIHNpemUgKyBzdWZmaXgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbW92ZVByb3RvY29sIChwYXRoKSB7XHJcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9odHRwKHMpPzovLCAnJylcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRFbmRwb2ludCAoZW5kcG9pbnQpIHtcclxuICAgIGlmIChlbmRwb2ludC5pbmNsdWRlcygnPycpKSB7XHJcbiAgICAgIHJldHVybiBgJHtlbmRwb2ludH0mdj0ke01hdGgucmFuZG9tKCl9YCBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBgJHtlbmRwb2ludH0/dj0ke01hdGgucmFuZG9tKCl9YCBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBuZXh0RnJhbWUgKGNhbGxiYWNrKSB7XHJcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjaylcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzbGlkZURvd24gKGVsZW0sIG1haW5FbGVtKSB7XHJcbiAgICBlbGVtLnN0eWxlLm1heEhlaWdodCA9ICdub25lJ1xyXG4gICAgbGV0IHNjcm9sbEhlaWdodCA9IGVsZW0uc2Nyb2xsSGVpZ2h0XHJcbiAgICBlbGVtLnN0eWxlLm1heEhlaWdodCA9ICcwcHgnXHJcbiAgICBtYWluRWxlbS5jbGFzc0xpc3QuYWRkKCdvcGVuJylcclxuICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnb3BlbicpXHJcbiAgICBlbGVtLmRhdGFzZXQudHJhbnNpdGlvbmluZyA9IHRydWVcclxuICAgIGVsZW0uZGF0YXNldC5sYXN0RXZlbnQgPSAnc2xpZGVEb3duJ1xyXG5cclxuICAgIGxldCBvcGVuRXZlbnQgPSBlID0+IHtcclxuICAgICAgICBpZiAoZS5wcm9wZXJ0eU5hbWUgPT09ICdtYXgtaGVpZ2h0JyAmJiBlbGVtLmRhdGFzZXQubGFzdEV2ZW50ID09ICdzbGlkZURvd24nKSB7XHJcbiAgICAgICAgICBlbGVtLmRhdGFzZXQudHJhbnNpdGlvbmluZyA9IGZhbHNlXHJcbiAgICAgICAgICBlbGVtLnN0eWxlLm1heEhlaWdodCA9ICdub25lJ1xyXG4gICAgICAgICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgb3BlbkV2ZW50LCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBvcGVuRXZlbnQsIGZhbHNlKVxyXG4gICAgSGVscGVycy5uZXh0RnJhbWUoKCkgPT4ge1xyXG4gICAgICBlbGVtLnN0eWxlLm1heEhlaWdodCA9IGAke3Njcm9sbEhlaWdodH1weGBcclxuICAgIH0pXHJcbiAgfSBcclxuXHJcbiAgc3RhdGljIHNsaWRlVXAgKGVsZW0sIG1haW5FbGVtKSB7XHJcbiAgICBlbGVtLnN0eWxlLm1heEhlaWdodCA9IGAke2VsZW0uc2Nyb2xsSGVpZ2h0fXB4YFxyXG4gICAgbWFpbkVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpXHJcbiAgICBlbGVtLmRhdGFzZXQudHJhbnNpdGlvbmluZyA9IHRydWVcclxuICAgIGVsZW0uZGF0YXNldC5sYXN0RXZlbnQgPSAnc2xpZGVVcCdcclxuXHJcbiAgICBsZXQgY2xvc2VFdmVudCA9IGUgPT4ge1xyXG4gICAgICBpZiAoZS5wcm9wZXJ0eU5hbWUgPT09ICdtYXgtaGVpZ2h0JyAmJiBlbGVtLmRhdGFzZXQubGFzdEV2ZW50ID09ICdzbGlkZVVwJykge1xyXG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpXHJcbiAgICAgICAgZWxlbS5kYXRhc2V0LnRyYW5zaXRpb25pbmcgPSBmYWxzZVxyXG4gICAgICAgIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGNsb3NlRXZlbnQsIGZhbHNlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBjbG9zZUV2ZW50LCBmYWxzZSlcclxuICAgIEhlbHBlcnMubmV4dEZyYW1lKCgpID0+IHtcclxuICAgICAgZWxlbS5zdHlsZS5tYXhIZWlnaHQgPSBgMHB4YFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHN0YXRpYyBoYW5kbGVpemUgKHN0cikge1xyXG4gICAgc3RyID0gc3RyLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgdmFyIHRvUmVwbGFjZSA9IFsnXCInLCBcIidcIiwgXCJcXFxcXCIsIFwiKFwiLCBcIilcIiwgXCJbXCIsIFwiXVwiXTtcclxuICAgIFxyXG4gICAgLy8gRm9yIHRoZSBvbGQgYnJvd3NlcnNcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9SZXBsYWNlLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UodG9SZXBsYWNlW2ldLCBcIlwiKVxyXG4gICAgfVxyXG5cclxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9cXFcrL2csIFwiLVwiKVxyXG5cclxuICAgIGlmIChzdHIuY2hhckF0KHN0ci5sZW5ndGggLSAxKSA9PSBcIi1cIikge1xyXG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC8tK1xcei8sIFwiXCIpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN0ci5jaGFyQXQoMCkgPT0gXCItXCIpIHtcclxuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZSgvXFxBLSsvLCBcIlwiKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdHJcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjb3B5VG9DbGlwYm9hcmQgKHN0cikge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXHJcbiAgICBlbC52YWx1ZSA9IHN0clxyXG4gICAgZWwuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKVxyXG4gICAgZWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXHJcbiAgICBlbC5zdHlsZS5sZWZ0ID0gJy05OTk5cHgnXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKVxyXG4gICAgZWwuc2VsZWN0KClcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JylcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWwpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcGFkIChuLCB3aWR0aCwgeikge1xyXG4gICAgeiA9IHogfHwgJzAnXHJcbiAgICBuID0gbiArICcnXHJcbiAgICByZXR1cm4gbi5sZW5ndGggPj0gd2lkdGggPyBuIDogbmV3IEFycmF5KHdpZHRoIC0gbi5sZW5ndGggKyAxKS5qb2luKHopICsgblxyXG4gIH1cclxufSIsImNsYXNzIFF1ZXVlIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnF1ZXVlID0gW11cclxuICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIG9uSW5pdCAoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkIChqb2IpIHtcclxuICAgICAgICB0aGlzLnF1ZXVlLnB1c2goam9iKVxyXG4gICAgICAgIGlmICghdGhpcy5wcm9jZXNzaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2VzcygpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHByb2Nlc3MgKCkge1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWVcclxuICAgICAgICBpZiAodGhpcy5xdWV1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGpvYiA9IHRoaXMucXVldWUuc2hpZnQoKVxyXG4gICAgICAgICAgICBhd2FpdCBqb2IoKVxyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3MoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVldWVcclxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInJhZGlhbnQuY3NzLmxpcXVpZFwiOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBidWlsZEZ1bGxQYXRoID0gcmVxdWlyZSgnLi4vY29yZS9idWlsZEZ1bGxQYXRoJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHZhciBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGZ1bGxQYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgcmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGJyb3dzZXIgcmVxdWVzdCBjYW5jZWxsYXRpb24gKGFzIG9wcG9zZWQgdG8gYSBtYW51YWwgY2FuY2VsbGF0aW9uKVxuICAgIHJlcXVlc3Qub25hYm9ydCA9IGZ1bmN0aW9uIGhhbmRsZUFib3J0KCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdSZXF1ZXN0IGFib3J0ZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHZhciB0aW1lb3V0RXJyb3JNZXNzYWdlID0gJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJztcbiAgICAgIGlmIChjb25maWcudGltZW91dEVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlID0gY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2U7XG4gICAgICB9XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IodGltZW91dEVycm9yTWVzc2FnZSwgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oZnVsbFBhdGgpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9ICEhY29uZmlnLndpdGhDcmVkZW50aWFscztcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL2NvcmUvbWVyZ2VDb25maWcnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoYXhpb3MuZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9tZXJnZUNvbmZpZycpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuICAgIGNvbmZpZy51cmwgPSBhcmd1bWVudHNbMF07XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICB9XG5cbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcblxuICAvLyBTZXQgY29uZmlnLm1ldGhvZFxuICBpZiAoY29uZmlnLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSBpZiAodGhpcy5kZWZhdWx0cy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gdGhpcy5kZWZhdWx0cy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcubWV0aG9kID0gJ2dldCc7XG4gIH1cblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuQXhpb3MucHJvdG90eXBlLmdldFVyaSA9IGZ1bmN0aW9uIGdldFVyaShjb25maWcpIHtcbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgcmV0dXJuIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKS5yZXBsYWNlKC9eXFw/LywgJycpO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgZnVsbCBwYXRoXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRGdWxsUGF0aChiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpIHtcbiAgaWYgKGJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwocmVxdWVzdGVkVVJMKSkge1xuICAgIHJldHVybiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpO1xuICB9XG4gIHJldHVybiByZXF1ZXN0ZWRVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzXG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cblxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgZXJyb3IuaXNBeGlvc0Vycm9yID0gdHJ1ZTtcblxuICBlcnJvci50b0pTT04gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGNvZGU6IHRoaXMuY29kZVxuICAgIH07XG4gIH07XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuICB2YXIgY29uZmlnID0ge307XG5cbiAgdmFyIHZhbHVlRnJvbUNvbmZpZzJLZXlzID0gWyd1cmwnLCAnbWV0aG9kJywgJ3BhcmFtcycsICdkYXRhJ107XG4gIHZhciBtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cyA9IFsnaGVhZGVycycsICdhdXRoJywgJ3Byb3h5J107XG4gIHZhciBkZWZhdWx0VG9Db25maWcyS2V5cyA9IFtcbiAgICAnYmFzZVVSTCcsICd1cmwnLCAndHJhbnNmb3JtUmVxdWVzdCcsICd0cmFuc2Zvcm1SZXNwb25zZScsICdwYXJhbXNTZXJpYWxpemVyJyxcbiAgICAndGltZW91dCcsICd3aXRoQ3JlZGVudGlhbHMnLCAnYWRhcHRlcicsICdyZXNwb25zZVR5cGUnLCAneHNyZkNvb2tpZU5hbWUnLFxuICAgICd4c3JmSGVhZGVyTmFtZScsICdvblVwbG9hZFByb2dyZXNzJywgJ29uRG93bmxvYWRQcm9ncmVzcycsXG4gICAgJ21heENvbnRlbnRMZW5ndGgnLCAndmFsaWRhdGVTdGF0dXMnLCAnbWF4UmVkaXJlY3RzJywgJ2h0dHBBZ2VudCcsXG4gICAgJ2h0dHBzQWdlbnQnLCAnY2FuY2VsVG9rZW4nLCAnc29ja2V0UGF0aCdcbiAgXTtcblxuICB1dGlscy5mb3JFYWNoKHZhbHVlRnJvbUNvbmZpZzJLZXlzLCBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cywgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChkZWZhdWx0VG9Db25maWcyS2V5cywgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBheGlvc0tleXMgPSB2YWx1ZUZyb21Db25maWcyS2V5c1xuICAgIC5jb25jYXQobWVyZ2VEZWVwUHJvcGVydGllc0tleXMpXG4gICAgLmNvbmNhdChkZWZhdWx0VG9Db25maWcyS2V5cyk7XG5cbiAgdmFyIG90aGVyS2V5cyA9IE9iamVjdFxuICAgIC5rZXlzKGNvbmZpZzIpXG4gICAgLmZpbHRlcihmdW5jdGlvbiBmaWx0ZXJBeGlvc0tleXMoa2V5KSB7XG4gICAgICByZXR1cm4gYXhpb3NLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gICAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChvdGhlcktleXMsIGZ1bmN0aW9uIG90aGVyS2V5c0RlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY29uZmlnO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQWNjZXB0Jyk7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB2YXIgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKGhhc2htYXJrSW5kZXggIT09IC0xKSB7XG4gICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaGFzaG1hcmtJbmRleCk7XG4gICAgfVxuXG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwpICYmIHZhbC5jb25zdHJ1Y3RvciAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsLmNvbnN0cnVjdG9yKVxuICAgICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOUycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiBlcXVhbCB0byBtZXJnZSB3aXRoIHRoZSBkaWZmZXJlbmNlIGJlaW5nIHRoYXQgbm8gcmVmZXJlbmNlXG4gKiB0byBvcmlnaW5hbCBvYmplY3RzIGlzIGtlcHQuXG4gKlxuICogQHNlZSBtZXJnZVxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gZGVlcE1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGRlZXBNZXJnZTogZGVlcE1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIENvdW50ZG93biA9IGZ1bmN0aW9uKCl7fVxuXG5Db3VudGRvd24udGltZXIgPSBmdW5jdGlvbihlbmQsIG9uVGljaywgb25Db21wbGV0ZSkge1xuICB2YXIgdGltZUxlZnQgPSBlbmQgLSBuZXcgRGF0ZSgpO1xuXG4gIHZhciB0aW1lQVBJID0ge1xuICAgIERBWVM6IDEwMDAgKiA2MCAqIDYwICogMjQsXG4gICAgSE9VUlM6IDEwMDAgKiA2MCAqIDYwLFxuICAgIE1JTlVURVM6IDEwMDAgKiA2MCxcbiAgICBTRUNPTkRTOiAxMDAwXG4gIH1cblxuICB2YXIgdGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHRpbWVMZWZ0ID4gMCkge1xuICAgICAgdmFyIHRpbWUgPSB0aW1lTGVmdFxuICAgICAgdmFyIGRheXMgPSBNYXRoLmZsb29yKHRpbWUgLyAodGltZUFQSS5EQVlTKSlcbiAgICAgIHRpbWUgJT0gdGltZUFQSS5EQVlTXG4gICAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKHRpbWUgLyAodGltZUFQSS5IT1VSUykpXG4gICAgICB0aW1lICU9IHRpbWVBUEkuSE9VUlNcbiAgICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gKHRpbWVBUEkuTUlOVVRFUykpXG4gICAgICB0aW1lICU9IHRpbWVBUEkuTUlOVVRFU1xuICAgICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKHRpbWUgLyAodGltZUFQSS5TRUNPTkRTKSlcblxuICAgICAgdmFyIGNvdW50ZG93biA9IHtcbiAgICAgICAgZGF5czogZGF5cyxcbiAgICAgICAgaG91cnM6IGhvdXJzLFxuICAgICAgICBtaW51dGVzOiBtaW51dGVzLFxuICAgICAgICBzZWNvbmRzOiBzZWNvbmRzXG4gICAgICB9XG4gICAgICBvblRpY2soY291bnRkb3duKVxuICAgICAgdGltZUxlZnQgLT0gMTAwMFxuICAgIH1lbHNlIHtcbiAgICAgIHRpbWVMZWZ0IC09IDEwMDBcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpLFxuICAgICAgb25Db21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoXG4gICAgKGZ1bmN0aW9uKHNlbGYpe1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgICAgIHRpY2suY2FsbChzZWxmKVxuICAgICAgfVxuICAgIH0pKHRoaXMpLCAxMDAwXG4gIClcblxuICB2YXIgZ2V0VGltZVJlbWFpbmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHRpbWUgPSB0aW1lTGVmdFxuICAgICAgdmFyIGRheXMgPSBNYXRoLmZsb29yKHRpbWUgLyB0aW1lQVBJLkRBWVMpXG4gICAgICB0aW1lICU9IHRpbWVBUEkuREFZU1xuICAgICAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcih0aW1lIC8gdGltZUFQSS5IT1VSUylcbiAgICAgIHRpbWUgJT0gdGltZUFQSS5IT1VSU1xuICAgICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUgLyB0aW1lQVBJLk1JTlVURVMpXG4gICAgICB0aW1lICU9IHRpbWVBUEkuTUlOVVRFU1xuICAgICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKHRpbWUgLyB0aW1lQVBJLlNFQ09ORFMpXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRheXM6IGRheXMsXG4gICAgICAgIGhvdXJzOiBob3VycyxcbiAgICAgICAgbWludXRlczogbWludXRlcyxcbiAgICAgICAgc2Vjb25kczogc2Vjb25kc1xuICAgICAgfVxuICAgIH1cblxuICB0aWNrLmNhbGwodGhpcylcblxuICByZXR1cm4ge1xuICAgIGFib3J0OiBmdW5jdGlvbigpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG4gICAgfSxcbiAgICBnZXRUaW1lUmVtYWluaW5nOiBnZXRUaW1lUmVtYWluaW5nXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb3VudGRvd247XG4iLCJ2YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG52YXIgQnJvd3NlckluZm8gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQnJvd3NlckluZm8obmFtZSwgdmVyc2lvbiwgb3MpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICAgICAgdGhpcy5vcyA9IG9zO1xuICAgICAgICB0aGlzLnR5cGUgPSAnYnJvd3Nlcic7XG4gICAgfVxuICAgIHJldHVybiBCcm93c2VySW5mbztcbn0oKSk7XG5leHBvcnQgeyBCcm93c2VySW5mbyB9O1xudmFyIE5vZGVJbmZvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vZGVJbmZvKHZlcnNpb24pIHtcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICAgICAgdGhpcy50eXBlID0gJ25vZGUnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnbm9kZSc7XG4gICAgICAgIHRoaXMub3MgPSBwcm9jZXNzLnBsYXRmb3JtO1xuICAgIH1cbiAgICByZXR1cm4gTm9kZUluZm87XG59KCkpO1xuZXhwb3J0IHsgTm9kZUluZm8gfTtcbnZhciBTZWFyY2hCb3REZXZpY2VJbmZvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlYXJjaEJvdERldmljZUluZm8obmFtZSwgdmVyc2lvbiwgb3MsIGJvdCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgICB0aGlzLm9zID0gb3M7XG4gICAgICAgIHRoaXMuYm90ID0gYm90O1xuICAgICAgICB0aGlzLnR5cGUgPSAnYm90LWRldmljZSc7XG4gICAgfVxuICAgIHJldHVybiBTZWFyY2hCb3REZXZpY2VJbmZvO1xufSgpKTtcbmV4cG9ydCB7IFNlYXJjaEJvdERldmljZUluZm8gfTtcbnZhciBCb3RJbmZvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJvdEluZm8oKSB7XG4gICAgICAgIHRoaXMudHlwZSA9ICdib3QnO1xuICAgICAgICB0aGlzLmJvdCA9IHRydWU7IC8vIE5PVEU6IGRlcHJlY2F0ZWQgdGVzdCBuYW1lIGluc3RlYWRcbiAgICAgICAgdGhpcy5uYW1lID0gJ2JvdCc7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IG51bGw7XG4gICAgICAgIHRoaXMub3MgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gQm90SW5mbztcbn0oKSk7XG5leHBvcnQgeyBCb3RJbmZvIH07XG52YXIgUmVhY3ROYXRpdmVJbmZvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlYWN0TmF0aXZlSW5mbygpIHtcbiAgICAgICAgdGhpcy50eXBlID0gJ3JlYWN0LW5hdGl2ZSc7XG4gICAgICAgIHRoaXMubmFtZSA9ICdyZWFjdC1uYXRpdmUnO1xuICAgICAgICB0aGlzLnZlcnNpb24gPSBudWxsO1xuICAgICAgICB0aGlzLm9zID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0TmF0aXZlSW5mbztcbn0oKSk7XG5leHBvcnQgeyBSZWFjdE5hdGl2ZUluZm8gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbnZhciBTRUFSQ0hCT1hfVUFfUkVHRVggPSAvYWxleGF8Ym90fGNyYXdsKGVyfGluZyl8ZmFjZWJvb2tleHRlcm5hbGhpdHxmZWVkYnVybmVyfGdvb2dsZSB3ZWIgcHJldmlld3xuYWdpb3N8cG9zdHJhbmt8cGluZ2RvbXxzbHVycHxzcGlkZXJ8eWFob28hfHlhbmRleC87XG52YXIgU0VBUkNIQk9UX09TX1JFR0VYID0gLyhudWhrfGN1cmx8R29vZ2xlYm90fFlhbW15Ym90fE9wZW5ib3R8U2x1cnB8TVNOQm90fEFza1xcIEplZXZlc1xcL1Rlb21hfGlhX2FyY2hpdmVyKS87XG52YXIgUkVRVUlSRURfVkVSU0lPTl9QQVJUUyA9IDM7XG52YXIgdXNlckFnZW50UnVsZXMgPSBbXG4gICAgWydhb2wnLCAvQU9MU2hpZWxkXFwvKFswLTlcXC5fXSspL10sXG4gICAgWydlZGdlJywgL0VkZ2VcXC8oWzAtOVxcLl9dKykvXSxcbiAgICBbJ2VkZ2UtaW9zJywgL0VkZ2lPU1xcLyhbMC05XFwuX10rKS9dLFxuICAgIFsneWFuZGV4YnJvd3NlcicsIC9ZYUJyb3dzZXJcXC8oWzAtOVxcLl9dKykvXSxcbiAgICBbJ2tha2FvdGFsaycsIC9LQUtBT1RBTEtcXHMoWzAtOVxcLl0rKS9dLFxuICAgIFsnc2Ftc3VuZycsIC9TYW1zdW5nQnJvd3NlclxcLyhbMC05XFwuXSspL10sXG4gICAgWydzaWxrJywgL1xcYlNpbGtcXC8oWzAtOS5fLV0rKVxcYi9dLFxuICAgIFsnbWl1aScsIC9NaXVpQnJvd3NlclxcLyhbMC05XFwuXSspJC9dLFxuICAgIFsnYmVha2VyJywgL0JlYWtlckJyb3dzZXJcXC8oWzAtOVxcLl0rKS9dLFxuICAgIFsnZWRnZS1jaHJvbWl1bScsIC9FZGdBP1xcLyhbMC05XFwuXSspL10sXG4gICAgW1xuICAgICAgICAnY2hyb21pdW0td2VidmlldycsXG4gICAgICAgIC8oPyFDaHJvbS4qT1BSKXd2XFwpLipDaHJvbSg/OmV8aXVtKVxcLyhbMC05XFwuXSspKDo/XFxzfCQpLyxcbiAgICBdLFxuICAgIFsnY2hyb21lJywgLyg/IUNocm9tLipPUFIpQ2hyb20oPzplfGl1bSlcXC8oWzAtOVxcLl0rKSg6P1xcc3wkKS9dLFxuICAgIFsncGhhbnRvbWpzJywgL1BoYW50b21KU1xcLyhbMC05XFwuXSspKDo/XFxzfCQpL10sXG4gICAgWydjcmlvcycsIC9DcmlPU1xcLyhbMC05XFwuXSspKDo/XFxzfCQpL10sXG4gICAgWydmaXJlZm94JywgL0ZpcmVmb3hcXC8oWzAtOVxcLl0rKSg/Olxcc3wkKS9dLFxuICAgIFsnZnhpb3MnLCAvRnhpT1NcXC8oWzAtOVxcLl0rKS9dLFxuICAgIFsnb3BlcmEtbWluaScsIC9PcGVyYSBNaW5pLipWZXJzaW9uXFwvKFswLTlcXC5dKykvXSxcbiAgICBbJ29wZXJhJywgL09wZXJhXFwvKFswLTlcXC5dKykoPzpcXHN8JCkvXSxcbiAgICBbJ29wZXJhJywgL09QUlxcLyhbMC05XFwuXSspKDo/XFxzfCQpL10sXG4gICAgWydwaWUnLCAvXk1pY3Jvc29mdCBQb2NrZXQgSW50ZXJuZXQgRXhwbG9yZXJcXC8oXFxkK1xcLlxcZCspJC9dLFxuICAgIFsncGllJywgL15Nb3ppbGxhXFwvXFxkXFwuXFxkK1xcc1xcKGNvbXBhdGlibGU7XFxzKD86TVNQP0lFfE1TSW50ZXJuZXQgRXhwbG9yZXIpIChcXGQrXFwuXFxkKyk7LipXaW5kb3dzIENFLipcXCkkL10sXG4gICAgWyduZXRmcm9udCcsIC9eTW96aWxsYVxcL1xcZFxcLlxcZCsuKk5ldEZyb250XFwvKFxcZC5cXGQpL10sXG4gICAgWydpZScsIC9UcmlkZW50XFwvN1xcLjAuKnJ2XFw6KFswLTlcXC5dKykuKlxcKS4qR2Vja28kL10sXG4gICAgWydpZScsIC9NU0lFXFxzKFswLTlcXC5dKyk7LipUcmlkZW50XFwvWzQtN10uMC9dLFxuICAgIFsnaWUnLCAvTVNJRVxccyg3XFwuMCkvXSxcbiAgICBbJ2JiMTAnLCAvQkIxMDtcXHNUb3VjaC4qVmVyc2lvblxcLyhbMC05XFwuXSspL10sXG4gICAgWydhbmRyb2lkJywgL0FuZHJvaWRcXHMoWzAtOVxcLl0rKS9dLFxuICAgIFsnaW9zJywgL1ZlcnNpb25cXC8oWzAtOVxcLl9dKykuKk1vYmlsZS4qU2FmYXJpLiovXSxcbiAgICBbJ3NhZmFyaScsIC9WZXJzaW9uXFwvKFswLTlcXC5fXSspLipTYWZhcmkvXSxcbiAgICBbJ2ZhY2Vib29rJywgL0ZCW0FTXVZcXC8oWzAtOVxcLl0rKS9dLFxuICAgIFsnaW5zdGFncmFtJywgL0luc3RhZ3JhbVxccyhbMC05XFwuXSspL10sXG4gICAgWydpb3Mtd2VidmlldycsIC9BcHBsZVdlYktpdFxcLyhbMC05XFwuXSspLipNb2JpbGUvXSxcbiAgICBbJ2lvcy13ZWJ2aWV3JywgL0FwcGxlV2ViS2l0XFwvKFswLTlcXC5dKykuKkdlY2tvXFwpJC9dLFxuICAgIFsnY3VybCcsIC9eY3VybFxcLyhbMC05XFwuXSspJC9dLFxuICAgIFsnc2VhcmNoYm90JywgU0VBUkNIQk9YX1VBX1JFR0VYXSxcbl07XG52YXIgb3BlcmF0aW5nU3lzdGVtUnVsZXMgPSBbXG4gICAgWydpT1MnLCAvaVAoaG9uZXxvZHxhZCkvXSxcbiAgICBbJ0FuZHJvaWQgT1MnLCAvQW5kcm9pZC9dLFxuICAgIFsnQmxhY2tCZXJyeSBPUycsIC9CbGFja0JlcnJ5fEJCMTAvXSxcbiAgICBbJ1dpbmRvd3MgTW9iaWxlJywgL0lFTW9iaWxlL10sXG4gICAgWydBbWF6b24gT1MnLCAvS2luZGxlL10sXG4gICAgWydXaW5kb3dzIDMuMTEnLCAvV2luMTYvXSxcbiAgICBbJ1dpbmRvd3MgOTUnLCAvKFdpbmRvd3MgOTUpfChXaW45NSl8KFdpbmRvd3NfOTUpL10sXG4gICAgWydXaW5kb3dzIDk4JywgLyhXaW5kb3dzIDk4KXwoV2luOTgpL10sXG4gICAgWydXaW5kb3dzIDIwMDAnLCAvKFdpbmRvd3MgTlQgNS4wKXwoV2luZG93cyAyMDAwKS9dLFxuICAgIFsnV2luZG93cyBYUCcsIC8oV2luZG93cyBOVCA1LjEpfChXaW5kb3dzIFhQKS9dLFxuICAgIFsnV2luZG93cyBTZXJ2ZXIgMjAwMycsIC8oV2luZG93cyBOVCA1LjIpL10sXG4gICAgWydXaW5kb3dzIFZpc3RhJywgLyhXaW5kb3dzIE5UIDYuMCkvXSxcbiAgICBbJ1dpbmRvd3MgNycsIC8oV2luZG93cyBOVCA2LjEpL10sXG4gICAgWydXaW5kb3dzIDgnLCAvKFdpbmRvd3MgTlQgNi4yKS9dLFxuICAgIFsnV2luZG93cyA4LjEnLCAvKFdpbmRvd3MgTlQgNi4zKS9dLFxuICAgIFsnV2luZG93cyAxMCcsIC8oV2luZG93cyBOVCAxMC4wKS9dLFxuICAgIFsnV2luZG93cyBNRScsIC9XaW5kb3dzIE1FL10sXG4gICAgWydXaW5kb3dzIENFJywgL1dpbmRvd3MgQ0V8V2luQ0V8TWljcm9zb2Z0IFBvY2tldCBJbnRlcm5ldCBFeHBsb3Jlci9dLFxuICAgIFsnT3BlbiBCU0QnLCAvT3BlbkJTRC9dLFxuICAgIFsnU3VuIE9TJywgL1N1bk9TL10sXG4gICAgWydDaHJvbWUgT1MnLCAvQ3JPUy9dLFxuICAgIFsnTGludXgnLCAvKExpbnV4KXwoWDExKS9dLFxuICAgIFsnTWFjIE9TJywgLyhNYWNfUG93ZXJQQyl8KE1hY2ludG9zaCkvXSxcbiAgICBbJ1FOWCcsIC9RTlgvXSxcbiAgICBbJ0JlT1MnLCAvQmVPUy9dLFxuICAgIFsnT1MvMicsIC9PU1xcLzIvXSxcbl07XG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0KHVzZXJBZ2VudCkge1xuICAgIGlmICghIXVzZXJBZ2VudCkge1xuICAgICAgICByZXR1cm4gcGFyc2VVc2VyQWdlbnQodXNlckFnZW50KTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWFjdE5hdGl2ZUluZm8oKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZVVzZXJBZ2VudChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldE5vZGVWZXJzaW9uKCk7XG59XG5mdW5jdGlvbiBtYXRjaFVzZXJBZ2VudCh1YSkge1xuICAgIC8vIG9wdGVkIGZvciB1c2luZyByZWR1Y2UgaGVyZSByYXRoZXIgdGhhbiBBcnJheSNmaXJzdCB3aXRoIGEgcmVnZXgudGVzdCBjYWxsXG4gICAgLy8gdGhpcyBpcyBwcmltYXJpbHkgYmVjYXVzZSB1c2luZyB0aGUgcmVkdWNlIHdlIG9ubHkgcGVyZm9ybSB0aGUgcmVnZXhcbiAgICAvLyBleGVjdXRpb24gb25jZSByYXRoZXIgdGhhbiBvbmNlIGZvciB0aGUgdGVzdCBhbmQgZm9yIHRoZSBleGVjIGFnYWluIGJlbG93XG4gICAgLy8gcHJvYmFibHkgc29tZXRoaW5nIHRoYXQgbmVlZHMgdG8gYmUgYmVuY2htYXJrZWQgdGhvdWdoXG4gICAgcmV0dXJuICh1YSAhPT0gJycgJiZcbiAgICAgICAgdXNlckFnZW50UnVsZXMucmVkdWNlKGZ1bmN0aW9uIChtYXRjaGVkLCBfYSkge1xuICAgICAgICAgICAgdmFyIGJyb3dzZXIgPSBfYVswXSwgcmVnZXggPSBfYVsxXTtcbiAgICAgICAgICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdWFNYXRjaCA9IHJlZ2V4LmV4ZWModWEpO1xuICAgICAgICAgICAgcmV0dXJuICEhdWFNYXRjaCAmJiBbYnJvd3NlciwgdWFNYXRjaF07XG4gICAgICAgIH0sIGZhbHNlKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gYnJvd3Nlck5hbWUodWEpIHtcbiAgICB2YXIgZGF0YSA9IG1hdGNoVXNlckFnZW50KHVhKTtcbiAgICByZXR1cm4gZGF0YSA/IGRhdGFbMF0gOiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVXNlckFnZW50KHVhKSB7XG4gICAgdmFyIG1hdGNoZWRSdWxlID0gbWF0Y2hVc2VyQWdlbnQodWEpO1xuICAgIGlmICghbWF0Y2hlZFJ1bGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBuYW1lID0gbWF0Y2hlZFJ1bGVbMF0sIG1hdGNoID0gbWF0Y2hlZFJ1bGVbMV07XG4gICAgaWYgKG5hbWUgPT09ICdzZWFyY2hib3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgQm90SW5mbygpO1xuICAgIH1cbiAgICAvLyBEbyBub3QgdXNlIFJlZ0V4cCBmb3Igc3BsaXQgb3BlcmF0aW9uIGFzIHNvbWUgYnJvd3NlciBkbyBub3Qgc3VwcG9ydCBpdCAoU2VlOiBodHRwOi8vYmxvZy5zdGV2ZW5sZXZpdGhhbi5jb20vYXJjaGl2ZXMvY3Jvc3MtYnJvd3Nlci1zcGxpdClcbiAgICB2YXIgdmVyc2lvblBhcnRzID0gbWF0Y2hbMV0gJiYgbWF0Y2hbMV0uc3BsaXQoJy4nKS5qb2luKCdfJykuc3BsaXQoJ18nKS5zbGljZSgwLCAzKTtcbiAgICBpZiAodmVyc2lvblBhcnRzKSB7XG4gICAgICAgIGlmICh2ZXJzaW9uUGFydHMubGVuZ3RoIDwgUkVRVUlSRURfVkVSU0lPTl9QQVJUUykge1xuICAgICAgICAgICAgdmVyc2lvblBhcnRzID0gX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCB2ZXJzaW9uUGFydHMsIHRydWUpLCBjcmVhdGVWZXJzaW9uUGFydHMoUkVRVUlSRURfVkVSU0lPTl9QQVJUUyAtIHZlcnNpb25QYXJ0cy5sZW5ndGgpLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmVyc2lvblBhcnRzID0gW107XG4gICAgfVxuICAgIHZhciB2ZXJzaW9uID0gdmVyc2lvblBhcnRzLmpvaW4oJy4nKTtcbiAgICB2YXIgb3MgPSBkZXRlY3RPUyh1YSk7XG4gICAgdmFyIHNlYXJjaEJvdE1hdGNoID0gU0VBUkNIQk9UX09TX1JFR0VYLmV4ZWModWEpO1xuICAgIGlmIChzZWFyY2hCb3RNYXRjaCAmJiBzZWFyY2hCb3RNYXRjaFsxXSkge1xuICAgICAgICByZXR1cm4gbmV3IFNlYXJjaEJvdERldmljZUluZm8obmFtZSwgdmVyc2lvbiwgb3MsIHNlYXJjaEJvdE1hdGNoWzFdKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBCcm93c2VySW5mbyhuYW1lLCB2ZXJzaW9uLCBvcyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0T1ModWEpIHtcbiAgICBmb3IgKHZhciBpaSA9IDAsIGNvdW50ID0gb3BlcmF0aW5nU3lzdGVtUnVsZXMubGVuZ3RoOyBpaSA8IGNvdW50OyBpaSsrKSB7XG4gICAgICAgIHZhciBfYSA9IG9wZXJhdGluZ1N5c3RlbVJ1bGVzW2lpXSwgb3MgPSBfYVswXSwgcmVnZXggPSBfYVsxXTtcbiAgICAgICAgdmFyIG1hdGNoID0gcmVnZXguZXhlYyh1YSk7XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIG9zO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vZGVWZXJzaW9uKCkge1xuICAgIHZhciBpc05vZGUgPSB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy52ZXJzaW9uO1xuICAgIHJldHVybiBpc05vZGUgPyBuZXcgTm9kZUluZm8ocHJvY2Vzcy52ZXJzaW9uLnNsaWNlKDEpKSA6IG51bGw7XG59XG5mdW5jdGlvbiBjcmVhdGVWZXJzaW9uUGFydHMoY291bnQpIHtcbiAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IGNvdW50OyBpaSsrKSB7XG4gICAgICAgIG91dHB1dC5wdXNoKCcwJyk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG59XG4iLCJ2YXIgbj1mdW5jdGlvbihuKXtpZihcIm9iamVjdFwiIT10eXBlb2YodD1uKXx8QXJyYXkuaXNBcnJheSh0KSl0aHJvd1wic3RhdGUgc2hvdWxkIGJlIGFuIG9iamVjdFwiO3ZhciB0fSx0PWZ1bmN0aW9uKG4sdCxlLGMpe3JldHVybihyPW4sci5yZWR1Y2UoZnVuY3Rpb24obix0LGUpe3JldHVybiBuLmluZGV4T2YodCk+LTE/bjpuLmNvbmNhdCh0KX0sW10pKS5yZWR1Y2UoZnVuY3Rpb24obixlKXtyZXR1cm4gbi5jb25jYXQodFtlXXx8W10pfSxbXSkubWFwKGZ1bmN0aW9uKG4pe3JldHVybiBuKGUsYyl9KTt2YXIgcn0sZT1hKCksYz1lLm9uLHI9ZS5lbWl0LG89ZS5oeWRyYXRlLHU9ZS5nZXRTdGF0ZTtmdW5jdGlvbiBhKGUpe3ZvaWQgMD09PWUmJihlPXt9KTt2YXIgYz17fTtyZXR1cm57Z2V0U3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSxlKX0saHlkcmF0ZTpmdW5jdGlvbihyKXtyZXR1cm4gbihyKSxPYmplY3QuYXNzaWduKGUsciksZnVuY3Rpb24oKXt2YXIgbj1bXCIqXCJdLmNvbmNhdChPYmplY3Qua2V5cyhyKSk7dChuLGMsZSl9fSxvbjpmdW5jdGlvbihuLHQpe3JldHVybihuPVtdLmNvbmNhdChuKSkubWFwKGZ1bmN0aW9uKG4pe3JldHVybiBjW25dPShjW25dfHxbXSkuY29uY2F0KHQpfSksZnVuY3Rpb24oKXtyZXR1cm4gbi5tYXAoZnVuY3Rpb24obil7cmV0dXJuIGNbbl0uc3BsaWNlKGNbbl0uaW5kZXhPZih0KSwxKX0pfX0sZW1pdDpmdW5jdGlvbihyLG8sdSl7dmFyIGE9KFwiKlwiPT09cj9bXTpbXCIqXCJdKS5jb25jYXQocik7KG89XCJmdW5jdGlvblwiPT10eXBlb2Ygbz9vKGUpOm8pJiYobihvKSxPYmplY3QuYXNzaWduKGUsbyksYT1hLmNvbmNhdChPYmplY3Qua2V5cyhvKSkpLHQoYSxjLGUsdSl9fX1leHBvcnR7YyBhcyBvbixyIGFzIGVtaXQsbyBhcyBoeWRyYXRlLHUgYXMgZ2V0U3RhdGUsYSBhcyBjcmVhdGV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXZ4LmVzLmpzLm1hcFxuIiwidmFyIG49ZnVuY3Rpb24oKXtyZXR1cm4gbj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihuKXtmb3IodmFyIHQsaT0xLGU9YXJndW1lbnRzLmxlbmd0aDtpPGU7aSsrKWZvcih2YXIgciBpbiB0PWFyZ3VtZW50c1tpXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxyKSYmKG5bcl09dFtyXSk7cmV0dXJuIG59LG4uYXBwbHkodGhpcyxhcmd1bWVudHMpfTtmdW5jdGlvbiB0KG4sdCxpKXtpZihpfHwyPT09YXJndW1lbnRzLmxlbmd0aClmb3IodmFyIGUscj0wLGE9dC5sZW5ndGg7cjxhO3IrKykhZSYmciBpbiB0fHwoZXx8KGU9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodCwwLHIpKSxlW3JdPXRbcl0pO3JldHVybiBuLmNvbmNhdChlfHxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0KSl9ZnVuY3Rpb24gaShuKXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobil9ZnVuY3Rpb24gZShuLHQpe3ZhciBpPU1hdGguZmxvb3Iobik7cmV0dXJuIGk9PT10fHxpKzE9PT10P246dH1mdW5jdGlvbiByKCl7cmV0dXJuIERhdGUubm93KCl9ZnVuY3Rpb24gYShuLHQsaSl7aWYodD1cImRhdGEta2Vlbi1zbGlkZXItXCIrdCxudWxsPT09aSlyZXR1cm4gbi5yZW1vdmVBdHRyaWJ1dGUodCk7bi5zZXRBdHRyaWJ1dGUodCxpfHxcIlwiKX1mdW5jdGlvbiBvKG4sdCl7cmV0dXJuIHQ9dHx8ZG9jdW1lbnQsXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bih0KSksQXJyYXkuaXNBcnJheShuKT9uOlwic3RyaW5nXCI9PXR5cGVvZiBuP2kodC5xdWVyeVNlbGVjdG9yQWxsKG4pKTpuIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ/W25dOm4gaW5zdGFuY2VvZiBOb2RlTGlzdD9pKG4pOltdfWZ1bmN0aW9uIHUobil7bi5yYXcmJihuPW4ucmF3KSxuLmNhbmNlbGFibGUmJiFuLmRlZmF1bHRQcmV2ZW50ZWQmJm4ucHJldmVudERlZmF1bHQoKX1mdW5jdGlvbiBzKG4pe24ucmF3JiYobj1uLnJhdyksbi5zdG9wUHJvcGFnYXRpb24mJm4uc3RvcFByb3BhZ2F0aW9uKCl9ZnVuY3Rpb24gYygpe3ZhciBuPVtdO3JldHVybnthZGQ6ZnVuY3Rpb24odCxpLGUscil7dC5hZGRMaXN0ZW5lcj90LmFkZExpc3RlbmVyKGUpOnQuYWRkRXZlbnRMaXN0ZW5lcihpLGUsciksbi5wdXNoKFt0LGksZSxyXSl9LGlucHV0OmZ1bmN0aW9uKG4sdCxpLGUpe3RoaXMuYWRkKG4sdCxmdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24odCl7dC5uYXRpdmVFdmVudCYmKHQ9dC5uYXRpdmVFdmVudCk7dmFyIGk9dC5jaGFuZ2VkVG91Y2hlc3x8W10sZT10LnRhcmdldFRvdWNoZXN8fFtdLHI9dC5kZXRhaWwmJnQuZGV0YWlsLng/dC5kZXRhaWw6bnVsbDtyZXR1cm4gbih7aWQ6cj9yLmlkZW50aWZpZXI/ci5pZGVudGlmaWVyOlwiaVwiOmVbMF0/ZVswXT9lWzBdLmlkZW50aWZpZXI6XCJlXCI6XCJkXCIsaWRDaGFuZ2VkOnI/ci5pZGVudGlmaWVyP3IuaWRlbnRpZmllcjpcImlcIjppWzBdP2lbMF0/aVswXS5pZGVudGlmaWVyOlwiZVwiOlwiZFwiLHJhdzp0LHg6ciYmci54P3IueDplWzBdP2VbMF0uc2NyZWVuWDpyP3IueDp0LnBhZ2VYLHk6ciYmci55P3IueTplWzBdP2VbMF0uc2NyZWVuWTpyP3IueTp0LnBhZ2VZfSl9fShpKSxlKX0scHVyZ2U6ZnVuY3Rpb24oKXtuLmZvckVhY2goKGZ1bmN0aW9uKG4pe25bMF0ucmVtb3ZlTGlzdGVuZXI/blswXS5yZW1vdmVMaXN0ZW5lcihuWzJdKTpuWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoblsxXSxuWzJdLG5bM10pfSkpLG49W119fX1mdW5jdGlvbiBkKG4sdCxpKXtyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobix0KSxpKX1mdW5jdGlvbiBsKG4pe3JldHVybihuPjA/MTowKS0objwwPzE6MCl8fCtufWZ1bmN0aW9uIGYobil7dmFyIHQ9bi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtyZXR1cm57aGVpZ2h0OmUodC5oZWlnaHQsbi5vZmZzZXRIZWlnaHQpLHdpZHRoOmUodC53aWR0aCxuLm9mZnNldFdpZHRoKX19ZnVuY3Rpb24gcChuLHQsaSxlKXt2YXIgcj1uJiZuW3RdO3JldHVybiBudWxsPT1yP2k6ZSYmXCJmdW5jdGlvblwiPT10eXBlb2Ygcj9yKCk6cn1mdW5jdGlvbiB2KG4pe3JldHVybiBNYXRoLnJvdW5kKDFlNipuKS8xZTZ9ZnVuY3Rpb24gaChuKXt2YXIgdCxpLGUscixhLG87ZnVuY3Rpb24gdSh0KXtvfHwobz10KSxzKCEwKTt2YXIgYT10LW87YT5lJiYoYT1lKTt2YXIgbD1yW2ldO2lmKGxbM108YSlyZXR1cm4gaSsrLHUodCk7dmFyIGY9bFsyXSxwPWxbNF0sdj1sWzBdLGg9bFsxXSooMCxsWzVdKSgwPT09cD8xOihhLWYpL3ApO2lmKGgmJm4udHJhY2sudG8oditoKSxhPGUpcmV0dXJuIGQoKTtvPW51bGwscyghMSksYyhudWxsKSxuLmVtaXQoXCJhbmltYXRpb25FbmRlZFwiKX1mdW5jdGlvbiBzKG4pe3QuYWN0aXZlPW59ZnVuY3Rpb24gYyhuKXt0LnRhcmdldElkeD1ufWZ1bmN0aW9uIGQoKXt2YXIgbjtuPXUsYT13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKG4pfWZ1bmN0aW9uIGwoKXt2YXIgdDt0PWEsd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHQpLHMoITEpLGMobnVsbCksbyYmbi5lbWl0KFwiYW5pbWF0aW9uU3RvcHBlZFwiKSxvPW51bGx9cmV0dXJuIHQ9e2FjdGl2ZTohMSxzdGFydDpmdW5jdGlvbih0KXtpZihsKCksbi50cmFjay5kZXRhaWxzKXt2YXIgYT0wLG89bi50cmFjay5kZXRhaWxzLnBvc2l0aW9uO2k9MCxlPTAscj10Lm1hcCgoZnVuY3Rpb24obil7dmFyIHQsaT1vLHI9bnVsbCE9PSh0PW4uZWFybHlFeGl0KSYmdm9pZCAwIT09dD90Om4uZHVyYXRpb24sdT1uLmVhc2luZyxzPW4uZGlzdGFuY2UqdShyL24uZHVyYXRpb24pfHwwO28rPXM7dmFyIGM9ZTtyZXR1cm4gZSs9cixhKz1zLFtpLG4uZGlzdGFuY2UsYyxlLG4uZHVyYXRpb24sdV19KSksYyhuLnRyYWNrLmRpc3RUb0lkeChhKSksZCgpLG4uZW1pdChcImFuaW1hdGlvblN0YXJ0ZWRcIil9fSxzdG9wOmwsdGFyZ2V0SWR4Om51bGx9fWZ1bmN0aW9uIG0obil7dmFyIGksZSxhLG8sdSxzLGMsZixoLG0sZyxiLHgsayx5PTEvMCx3PVtdLE09bnVsbCxUPTA7ZnVuY3Rpb24gQyhuKXtfKFQrbil9ZnVuY3Rpb24gRShuKXt2YXIgdD16KFQrbikuYWJzO3JldHVybiBEKHQpP3Q6bnVsbH1mdW5jdGlvbiB6KG4pe3ZhciBpPU1hdGguZmxvb3IoTWF0aC5hYnModihuL2UpKSkscj12KChuJWUrZSklZSk7cj09PWUmJihyPTApO3ZhciBhPWwobiksbz1jLmluZGV4T2YodChbXSxjLCEwKS5yZWR1Y2UoKGZ1bmN0aW9uKG4sdCl7cmV0dXJuIE1hdGguYWJzKHQtcik8TWF0aC5hYnMobi1yKT90Om59KSkpLHU9bztyZXR1cm4gYTwwJiZpKyssbz09PXMmJih1PTAsaSs9YT4wPzE6LTEpLHthYnM6dStpKnMqYSxvcmlnaW46byxyZWw6dX19ZnVuY3Rpb24gSShuLHQsaSl7dmFyIGU7aWYodHx8IVMoKSlyZXR1cm4gQShuLGkpO2lmKCFEKG4pKXJldHVybiBudWxsO3ZhciByPXoobnVsbCE9aT9pOlQpLGE9ci5hYnMsbz1uLXIucmVsLHU9YStvO2U9QSh1KTt2YXIgYz1BKHUtcypsKG8pKTtyZXR1cm4obnVsbCE9PWMmJk1hdGguYWJzKGMpPE1hdGguYWJzKGUpfHxudWxsPT09ZSkmJihlPWMpLHYoZSl9ZnVuY3Rpb24gQShuLHQpe2lmKG51bGw9PXQmJih0PXYoVCkpLCFEKG4pfHxudWxsPT09bilyZXR1cm4gbnVsbDtuPU1hdGgucm91bmQobik7dmFyIGk9eih0KSxyPWkuYWJzLGE9aS5yZWwsbz1pLm9yaWdpbix1PU8obiksZD0odCVlK2UpJWUsbD1jW29dLGY9TWF0aC5mbG9vcigobi0oci1hKSkvcykqZTtyZXR1cm4gdihsLWQtbCtjW3VdK2YrKG89PT1zP2U6MCkpfWZ1bmN0aW9uIEQobil7cmV0dXJuIEwobik9PT1ufWZ1bmN0aW9uIEwobil7cmV0dXJuIGQobixoLG0pfWZ1bmN0aW9uIFMoKXtyZXR1cm4gby5sb29wfWZ1bmN0aW9uIE8obil7cmV0dXJuKG4lcytzKSVzfWZ1bmN0aW9uIF8odCl7dmFyIGk7aT10LVQsdy5wdXNoKHtkaXN0YW5jZTppLHRpbWVzdGFtcDpyKCl9KSx3Lmxlbmd0aD42JiYodz13LnNsaWNlKC02KSksVD12KHQpO3ZhciBlPUgoKS5hYnM7aWYoZSE9PU0pe3ZhciBhPW51bGwhPT1NO009ZSxhJiZuLmVtaXQoXCJzbGlkZUNoYW5nZWRcIil9fWZ1bmN0aW9uIEgodCl7dmFyIHI9dD9udWxsOmZ1bmN0aW9uKCl7aWYocyl7dmFyIG49UygpLHQ9bj8oVCVlK2UpJWU6VCxpPShuP1QlZTpUKS11WzBdWzJdLHI9MC0oaTwwJiZuP2UtTWF0aC5hYnMoaSk6aSksYz0wLGQ9eihUKSxmPWQuYWJzLHA9ZC5yZWwsdj11W3BdWzJdLHk9dS5tYXAoKGZ1bmN0aW9uKHQsaSl7dmFyIGE9citjOyhhPDAtdFswXXx8YT4xKSYmKGErPShNYXRoLmFicyhhKT5lLTEmJm4/ZTowKSpsKC1hKSk7dmFyIHU9aS1wLGQ9bCh1KSxoPXUrZjtuJiYoLTE9PT1kJiZhPnYmJihoKz1zKSwxPT09ZCYmYTx2JiYoaC09cyksbnVsbCE9PWcmJmg8ZyYmKGErPWUpLG51bGwhPT1iJiZoPmImJihhLT1lKSk7dmFyIG09YSt0WzBdK3RbMV0seD1NYXRoLm1heChhPj0wJiZtPD0xPzE6bTwwfHxhPjE/MDphPDA/TWF0aC5taW4oMSwodFswXSthKS90WzBdKTooMS1hKS90WzBdLDApO3JldHVybiBjKz10WzBdK3RbMV0se2FiczpoLGRpc3RhbmNlOm8ucnRsPy0xKmErMS10WzBdOmEscG9ydGlvbjp4LHNpemU6dFswXX19KSk7cmV0dXJuIGY9TChmKSxwPU8oZikse2FiczpMKGYpLGxlbmd0aDphLG1heDprLG1heElkeDptLG1pbjp4LG1pbklkeDpoLHBvc2l0aW9uOlQscHJvZ3Jlc3M6bj90L2U6VC9hLHJlbDpwLHNsaWRlczp5LHNsaWRlc0xlbmd0aDplfX19KCk7cmV0dXJuIGkuZGV0YWlscz1yLG4uZW1pdChcImRldGFpbHNDaGFuZ2VkXCIpLHJ9cmV0dXJuIGk9e2Fic1RvUmVsOk8sYWRkOkMsZGV0YWlsczpudWxsLGRpc3RUb0lkeDpFLGlkeFRvRGlzdDpJLGluaXQ6ZnVuY3Rpb24odCl7aWYoZnVuY3Rpb24oKXtpZihvPW4ub3B0aW9ucyx1PShvLnRyYWNrQ29uZmlnfHxbXSkubWFwKChmdW5jdGlvbihuKXtyZXR1cm5bcChuLFwic2l6ZVwiLDEpLHAobixcInNwYWNpbmdcIiwwKSxwKG4sXCJvcmlnaW5cIiwwKV19KSkscz11Lmxlbmd0aCl7ZT12KHUucmVkdWNlKChmdW5jdGlvbihuLHQpe3JldHVybiBuK3RbMF0rdFsxXX0pLDApKTt2YXIgdCxpPXMtMTthPXYoZSt1WzBdWzJdLXVbaV1bMF0tdVtpXVsyXS11W2ldWzFdKSxjPXUucmVkdWNlKChmdW5jdGlvbihuLGkpe2lmKCFuKXJldHVyblswXTt2YXIgZT11W24ubGVuZ3RoLTFdLHI9bltuLmxlbmd0aC0xXSsoZVswXStlWzJdKStlWzFdO3JldHVybiByLT1pWzJdLG5bbi5sZW5ndGgtMV0+ciYmKHI9bltuLmxlbmd0aC0xXSkscj12KHIpLG4ucHVzaChyKSwoIXR8fHQ8cikmJihmPW4ubGVuZ3RoLTEpLHQ9cixufSksbnVsbCksMD09PWEmJihmPTApLGMucHVzaCh2KGUpKX19KCksIXMpcmV0dXJuIEgoITApO3ZhciBpOyFmdW5jdGlvbigpe3ZhciB0PW4ub3B0aW9ucy5yYW5nZSxpPW4ub3B0aW9ucy5sb29wO2c9aD1pP3AoaSxcIm1pblwiLC0xLzApOjAsYj1tPWk/cChpLFwibWF4XCIseSk6Zjt2YXIgZT1wKHQsXCJtaW5cIixudWxsKSxyPXAodCxcIm1heFwiLG51bGwpO2UmJihoPWUpLHImJihtPXIpLHg9aD09PS0xLzA/aDpuLnRyYWNrLmlkeFRvRGlzdChofHwwLCEwLDApLGs9bT09PXk/bTpJKG0sITAsMCksbnVsbD09PXImJihiPW0pLHAodCxcImFsaWduXCIsITEpJiZtIT09eSYmMD09PXVbTyhtKV1bMl0mJihrLT0xLXVbTyhtKV1bMF0sbT1FKGstVCkpLHg9dih4KSxrPXYoayl9KCksaT10LE51bWJlcihpKT09PWk/QyhBKEwodCkpKTpIKCl9LHRvOl8sdmVsb2NpdHk6ZnVuY3Rpb24oKXt2YXIgbj1yKCksdD13LnJlZHVjZSgoZnVuY3Rpb24odCxpKXt2YXIgZT1pLmRpc3RhbmNlLHI9aS50aW1lc3RhbXA7cmV0dXJuIG4tcj4yMDB8fChsKGUpIT09bCh0LmRpc3RhbmNlKSYmdC5kaXN0YW5jZSYmKHQ9e2Rpc3RhbmNlOjAsbGFzdFRpbWVzdGFtcDowLHRpbWU6MH0pLHQudGltZSYmKHQuZGlzdGFuY2UrPWUpLHQubGFzdFRpbWVzdGFtcCYmKHQudGltZSs9ci10Lmxhc3RUaW1lc3RhbXApLHQubGFzdFRpbWVzdGFtcD1yKSx0fSkse2Rpc3RhbmNlOjAsbGFzdFRpbWVzdGFtcDowLHRpbWU6MH0pO3JldHVybiB0LmRpc3RhbmNlL3QudGltZXx8MH19fWZ1bmN0aW9uIGcobil7dmFyIHQsaSxlLHIsYSxvLHUscztmdW5jdGlvbiBjKG4pe3JldHVybiAyKm59ZnVuY3Rpb24gZihuKXtyZXR1cm4gZChuLHUscyl9ZnVuY3Rpb24gcChuKXtyZXR1cm4gMS1NYXRoLnBvdygxLW4sMyl9ZnVuY3Rpb24gdigpe3JldHVybiBlP24udHJhY2sudmVsb2NpdHkoKTowfWZ1bmN0aW9uIGgoKXtiKCk7dmFyIHQ9XCJmcmVlLXNuYXBcIj09PW4ub3B0aW9ucy5tb2RlLGk9bi50cmFjayxlPXYoKTtyPWwoZSk7dmFyIHU9bi50cmFjay5kZXRhaWxzLHM9W107aWYoZXx8IXQpe3ZhciBkPW0oZSksaD1kLmRpc3QsZz1kLmR1cjtpZihnPWMoZyksaCo9cix0KXt2YXIgeD1pLmlkeFRvRGlzdChpLmRpc3RUb0lkeChoKSwhMCk7eCYmKGg9eCl9cy5wdXNoKHtkaXN0YW5jZTpoLGR1cmF0aW9uOmcsZWFzaW5nOnB9KTt2YXIgaz11LnBvc2l0aW9uLHk9aytoO2lmKHk8YXx8eT5vKXt2YXIgdz15PGE/YS1rOm8tayxNPTAsVD1lO2lmKGwodyk9PT1yKXt2YXIgQz1NYXRoLm1pbihNYXRoLmFicyh3KS9NYXRoLmFicyhoKSwxKSxFPWZ1bmN0aW9uKG4pe3JldHVybiAxLU1hdGgucG93KDEtbiwxLzMpfShDKSpnO3NbMF0uZWFybHlFeGl0PUUsVD1lKigxLUMpfWVsc2Ugc1swXS5lYXJseUV4aXQ9MCxNKz13O3ZhciB6PW0oVCwxMDApLEk9ei5kaXN0KnI7bi5vcHRpb25zLnJ1YmJlcmJhbmQmJihzLnB1c2goe2Rpc3RhbmNlOkksZHVyYXRpb246Yyh6LmR1ciksZWFzaW5nOnB9KSxzLnB1c2goe2Rpc3RhbmNlOi1JK00sZHVyYXRpb246NTAwLGVhc2luZzpwfSkpfW4uYW5pbWF0b3Iuc3RhcnQocyl9ZWxzZSBuLm1vdmVUb0lkeChmKHUuYWJzKSwhMCx7ZHVyYXRpb246NTAwLGVhc2luZzpmdW5jdGlvbihuKXtyZXR1cm4gMSstLW4qbipuKm4qbn19KX1mdW5jdGlvbiBtKG4sdCl7dm9pZCAwPT09dCYmKHQ9MWUzKTt2YXIgaT0xNDdlLTkrKG49TWF0aC5hYnMobikpL3Q7cmV0dXJue2Rpc3Q6TWF0aC5wb3cobiwyKS9pLGR1cjpuL2l9fWZ1bmN0aW9uIGcoKXt2YXIgdD1uLnRyYWNrLmRldGFpbHM7dCYmKGE9dC5taW4sbz10Lm1heCx1PXQubWluSWR4LHM9dC5tYXhJZHgpfWZ1bmN0aW9uIGIoKXtuLmFuaW1hdG9yLnN0b3AoKX1uLm9uKFwidXBkYXRlZFwiLGcpLG4ub24oXCJvcHRpb25zQ2hhbmdlZFwiLGcpLG4ub24oXCJjcmVhdGVkXCIsZyksbi5vbihcImRyYWdTdGFydGVkXCIsKGZ1bmN0aW9uKCl7ZT0hMSxiKCksdD1pPW4udHJhY2suZGV0YWlscy5hYnN9KSksbi5vbihcImRyYWdDaGVja2VkXCIsKGZ1bmN0aW9uKCl7ZT0hMH0pKSxuLm9uKFwiZHJhZ0VuZGVkXCIsKGZ1bmN0aW9uKCl7dmFyIGU9bi5vcHRpb25zLm1vZGU7XCJzbmFwXCI9PT1lJiZmdW5jdGlvbigpe3ZhciBlPW4udHJhY2sscj1uLnRyYWNrLmRldGFpbHMsdT1yLnBvc2l0aW9uLHM9bCh2KCkpOyh1Pm98fHU8YSkmJihzPTApO3ZhciBjPXQrczswPT09ci5zbGlkZXNbZS5hYnNUb1JlbChjKV0ucG9ydGlvbiYmKGMtPXMpLHQhPT1pJiYoYz1pKSxsKGUuaWR4VG9EaXN0KGMsITApKSE9PXMmJihjKz1zKSxjPWYoYyk7dmFyIGQ9ZS5pZHhUb0Rpc3QoYywhMCk7bi5hbmltYXRvci5zdGFydChbe2Rpc3RhbmNlOmQsZHVyYXRpb246NTAwLGVhc2luZzpmdW5jdGlvbihuKXtyZXR1cm4gMSstLW4qbipuKm4qbn19XSl9KCksXCJmcmVlXCIhPT1lJiZcImZyZWUtc25hcFwiIT09ZXx8aCgpfSkpLG4ub24oXCJkcmFnZ2VkXCIsKGZ1bmN0aW9uKCl7aT1uLnRyYWNrLmRldGFpbHMuYWJzfSkpfWZ1bmN0aW9uIGIobil7dmFyIHQsaSxlLHIsYSxmLHAsdixoLG0sZyxiLHgsayx5LHcsTSxULEM9YygpO2Z1bmN0aW9uIEUodCl7aWYoZiYmdj09PXQuaWQpe3ZhciBvPUQodCk7aWYoaCl7aWYoIUEodCkpcmV0dXJuIEkodCk7bT1vLGg9ITEsbi5lbWl0KFwiZHJhZ0NoZWNrZWRcIil9aWYodylyZXR1cm4gbT1vO3UodCk7dmFyIGM9ZnVuY3Rpb24odCl7aWYoTT09PS0xLzAmJlQ9PT0xLzApcmV0dXJuIHQ7dmFyIGU9bi50cmFjay5kZXRhaWxzLG89ZS5sZW5ndGgsdT1lLnBvc2l0aW9uLHM9ZCh0LE0tdSxULXUpO2lmKDA9PT1vKXJldHVybiAwO2lmKCFuLm9wdGlvbnMucnViYmVyYmFuZClyZXR1cm4gcztpZih1PD1UJiZ1Pj1NKXJldHVybiB0O2lmKHU8TSYmaT4wfHx1PlQmJmk8MClyZXR1cm4gdDt2YXIgYz0odTxNP3UtTTp1LVQpL28sbD1yKm8sZj1NYXRoLmFicyhjKmwpLHA9TWF0aC5tYXgoMCwxLWYvYSoyKTtyZXR1cm4gcCpwKnR9KHAobS1vKS9yKmUpO2k9bChjKTt2YXIgeD1uLnRyYWNrLmRldGFpbHMucG9zaXRpb247KHg+TSYmeDxUfHx4PT09TSYmaT4wfHx4PT09VCYmaTwwKSYmcyh0KSxnKz1jLCFiJiZNYXRoLmFicyhnKnIpPjUmJihiPSEwKSxuLnRyYWNrLmFkZChjKSxtPW8sbi5lbWl0KFwiZHJhZ2dlZFwiKX19ZnVuY3Rpb24geih0KXshZiYmbi50cmFjay5kZXRhaWxzJiZuLnRyYWNrLmRldGFpbHMubGVuZ3RoJiYoZz0wLGY9ITAsYj0hMSxoPSEwLHY9dC5pZCxBKHQpLG09RCh0KSxuLmVtaXQoXCJkcmFnU3RhcnRlZFwiKSl9ZnVuY3Rpb24gSSh0KXtmJiZ2PT09dC5pZENoYW5nZWQmJihmPSExLG4uZW1pdChcImRyYWdFbmRlZFwiKSl9ZnVuY3Rpb24gQShuKXt2YXIgdD1MKCksaT10P24ueTpuLngsZT10P24ueDpuLnkscj12b2lkIDAhPT14JiZ2b2lkIDAhPT1rJiZNYXRoLmFicyhrLWUpPD1NYXRoLmFicyh4LWkpO3JldHVybiB4PWksaz1lLHJ9ZnVuY3Rpb24gRChuKXtyZXR1cm4gTCgpP24ueTpuLnh9ZnVuY3Rpb24gTCgpe3JldHVybiBuLm9wdGlvbnMudmVydGljYWx9ZnVuY3Rpb24gUygpe3I9bi5zaXplLGE9TCgpP3dpbmRvdy5pbm5lckhlaWdodDp3aW5kb3cuaW5uZXJXaWR0aDt2YXIgdD1uLnRyYWNrLmRldGFpbHM7dCYmKE09dC5taW4sVD10Lm1heCl9ZnVuY3Rpb24gTyhuKXtiJiYocyhuKSx1KG4pKX1mdW5jdGlvbiBfKCl7aWYoQy5wdXJnZSgpLG4ub3B0aW9ucy5kcmFnJiYhbi5vcHRpb25zLmRpc2FibGVkKXt2YXIgaTtpPW4ub3B0aW9ucy5kcmFnU3BlZWR8fDEscD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2k6ZnVuY3Rpb24obil7cmV0dXJuIG4qaX0sZT1uLm9wdGlvbnMucnRsPy0xOjEsUygpLHQ9bi5jb250YWluZXIsZnVuY3Rpb24oKXt2YXIgbj1cImRhdGEta2Vlbi1zbGlkZXItY2xpY2thYmxlXCI7byhcIltcIi5jb25jYXQobixcIl06bm90KFtcIikuY29uY2F0KG4sXCI9ZmFsc2VdKVwiKSx0KS5tYXAoKGZ1bmN0aW9uKG4pe0MuYWRkKG4sXCJkcmFnc3RhcnRcIixzKSxDLmFkZChuLFwibW91c2Vkb3duXCIscyksQy5hZGQobixcInRvdWNoc3RhcnRcIixzKX0pKX0oKSxDLmFkZCh0LFwiZHJhZ3N0YXJ0XCIsKGZ1bmN0aW9uKG4pe3Uobil9KSksQy5hZGQodCxcImNsaWNrXCIsTyx7Y2FwdHVyZTohMH0pLEMuaW5wdXQodCxcImtzRHJhZ1N0YXJ0XCIseiksQy5pbnB1dCh0LFwia3NEcmFnXCIsRSksQy5pbnB1dCh0LFwia3NEcmFnRW5kXCIsSSksQy5pbnB1dCh0LFwibW91c2Vkb3duXCIseiksQy5pbnB1dCh0LFwibW91c2Vtb3ZlXCIsRSksQy5pbnB1dCh0LFwibW91c2VsZWF2ZVwiLEkpLEMuaW5wdXQodCxcIm1vdXNldXBcIixJKSxDLmlucHV0KHQsXCJ0b3VjaHN0YXJ0XCIseix7cGFzc2l2ZTohMH0pLEMuaW5wdXQodCxcInRvdWNobW92ZVwiLEUse3Bhc3NpdmU6ITF9KSxDLmlucHV0KHQsXCJ0b3VjaGVuZFwiLEkpLEMuaW5wdXQodCxcInRvdWNoY2FuY2VsXCIsSSksQy5hZGQod2luZG93LFwid2hlZWxcIiwoZnVuY3Rpb24obil7ZiYmdShuKX0pKTt2YXIgcj1cImRhdGEta2Vlbi1zbGlkZXItc2Nyb2xsYWJsZVwiO28oXCJbXCIuY29uY2F0KHIsXCJdOm5vdChbXCIpLmNvbmNhdChyLFwiPWZhbHNlXSlcIiksbi5jb250YWluZXIpLm1hcCgoZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKG4pe3ZhciB0O0MuaW5wdXQobixcInRvdWNoc3RhcnRcIiwoZnVuY3Rpb24obil7dD1EKG4pLHc9ITAseT0hMH0pLHtwYXNzaXZlOiEwfSksQy5pbnB1dChuLFwidG91Y2htb3ZlXCIsKGZ1bmN0aW9uKGkpe3ZhciBlPUwoKSxyPWU/bi5zY3JvbGxIZWlnaHQtbi5jbGllbnRIZWlnaHQ6bi5zY3JvbGxXaWR0aC1uLmNsaWVudFdpZHRoLGE9dC1EKGkpLG89ZT9uLnNjcm9sbFRvcDpuLnNjcm9sbExlZnQscz1lJiZcInNjcm9sbFwiPT09bi5zdHlsZS5vdmVyZmxvd1l8fCFlJiZcInNjcm9sbFwiPT09bi5zdHlsZS5vdmVyZmxvd1g7aWYodD1EKGkpLChhPDAmJm8+MHx8YT4wJiZvPHIpJiZ5JiZzKXJldHVybiB3PSEwO3k9ITEsdShpKSx3PSExfSkpLEMuaW5wdXQobixcInRvdWNoZW5kXCIsKGZ1bmN0aW9uKCl7dz0hMX0pKX0obil9KSl9fW4ub24oXCJ1cGRhdGVkXCIsUyksbi5vbihcIm9wdGlvbnNDaGFuZ2VkXCIsXyksbi5vbihcImNyZWF0ZWRcIixfKSxuLm9uKFwiZGVzdHJveWVkXCIsQy5wdXJnZSl9ZnVuY3Rpb24geChuKXt2YXIgdCxpLGU9bnVsbDtmdW5jdGlvbiByKHQsaSxlKXtuLmFuaW1hdG9yLmFjdGl2ZT9vKHQsaSxlKTpyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uKCl7cmV0dXJuIG8odCxpLGUpfSkpfWZ1bmN0aW9uIGEoKXtyKCExLCExLGkpfWZ1bmN0aW9uIG8oaSxyLGEpe3ZhciBvPTAsdT1uLnNpemUsZD1uLnRyYWNrLmRldGFpbHM7aWYoZCYmdCl7dmFyIGw9ZC5zbGlkZXM7dC5mb3JFYWNoKChmdW5jdGlvbihuLHQpe2lmKGkpIWUmJnImJnMobixudWxsLGEpLGMobixudWxsLGEpO2Vsc2V7aWYoIWxbdF0pcmV0dXJuO3ZhciBkPWxbdF0uc2l6ZSp1OyFlJiZyJiZzKG4sZCxhKSxjKG4sbFt0XS5kaXN0YW5jZSp1LW8sYSksbys9ZH19KSl9fWZ1bmN0aW9uIHUodCl7cmV0dXJuXCJwZXJmb3JtYW5jZVwiPT09bi5vcHRpb25zLnJlbmRlck1vZGU/TWF0aC5yb3VuZCh0KTp0fWZ1bmN0aW9uIHMobix0LGkpe3ZhciBlPWk/XCJoZWlnaHRcIjpcIndpZHRoXCI7bnVsbCE9PXQmJih0PXUodCkrXCJweFwiKSxuLnN0eWxlW1wibWluLVwiK2VdPXQsbi5zdHlsZVtcIm1heC1cIitlXT10fWZ1bmN0aW9uIGMobix0LGkpe2lmKG51bGwhPT10KXt0PXUodCk7dmFyIGU9aT90OjA7dD1cInRyYW5zbGF0ZTNkKFwiLmNvbmNhdChpPzA6dCxcInB4LCBcIikuY29uY2F0KGUsXCJweCwgMClcIil9bi5zdHlsZS50cmFuc2Zvcm09dCxuLnN0eWxlW1wiLXdlYmtpdC10cmFuc2Zvcm1cIl09dH1mdW5jdGlvbiBkKCl7dCYmKG8oITAsITAsaSksdD1udWxsKSxuLm9uKFwiZGV0YWlsc0NoYW5nZWRcIixhLCEwKX1mdW5jdGlvbiBsKCl7cighMSwhMCxpKX1mdW5jdGlvbiBmKCl7ZCgpLGk9bi5vcHRpb25zLnZlcnRpY2FsLG4ub3B0aW9ucy5kaXNhYmxlZHx8XCJjdXN0b21cIj09PW4ub3B0aW9ucy5yZW5kZXJNb2RlfHwoZT1cImF1dG9cIj09PXAobi5vcHRpb25zLnNsaWRlcyxcInBlclZpZXdcIixudWxsKSxuLm9uKFwiZGV0YWlsc0NoYW5nZWRcIixhKSwodD1uLnNsaWRlcykubGVuZ3RoJiZsKCkpfW4ub24oXCJjcmVhdGVkXCIsZiksbi5vbihcIm9wdGlvbnNDaGFuZ2VkXCIsZiksbi5vbihcImJlZm9yZU9wdGlvbnNDaGFuZ2VkXCIsKGZ1bmN0aW9uKCl7ZCgpfSkpLG4ub24oXCJ1cGRhdGVkXCIsbCksbi5vbihcImRlc3Ryb3llZFwiLGQpfWZ1bmN0aW9uIGsodCxpKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHIsdSxzLGQsbCx2LGg9YygpO2Z1bmN0aW9uIG0obil7dmFyIHQ7YShlLmNvbnRhaW5lcixcInJldmVyc2VcIixcInJ0bFwiIT09KHQ9ZS5jb250YWluZXIsd2luZG93LmdldENvbXB1dGVkU3R5bGUodCxudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKFwiZGlyZWN0aW9uXCIpKXx8bj9udWxsOlwiXCIpLGEoZS5jb250YWluZXIsXCJ2XCIsZS5vcHRpb25zLnZlcnRpY2FsJiYhbj9cIlwiOm51bGwpLGEoZS5jb250YWluZXIsXCJkaXNhYmxlZFwiLGUub3B0aW9ucy5kaXNhYmxlZCYmIW4/XCJcIjpudWxsKX1mdW5jdGlvbiBnKCl7YigpJiZNKCl9ZnVuY3Rpb24gYigpe3ZhciB0PW51bGw7aWYoZC5mb3JFYWNoKChmdW5jdGlvbihuKXtuLm1hdGNoZXMmJih0PW4uX19tZWRpYSl9KSksdD09PXIpcmV0dXJuITE7cnx8ZS5lbWl0KFwiYmVmb3JlT3B0aW9uc0NoYW5nZWRcIikscj10O3ZhciBpPXQ/cy5icmVha3BvaW50c1t0XTpzO3JldHVybiBlLm9wdGlvbnM9bihuKHt9LHMpLGkpLG0oKSxJKCksQSgpLEMoKSwhMH1mdW5jdGlvbiB4KG4pe3ZhciB0PWYobik7cmV0dXJuKGUub3B0aW9ucy52ZXJ0aWNhbD90LmhlaWdodDp0LndpZHRoKS9lLnNpemV8fDF9ZnVuY3Rpb24gaygpe3JldHVybiBlLm9wdGlvbnMudHJhY2tDb25maWcubGVuZ3RofWZ1bmN0aW9uIHkodCl7Zm9yKHZhciBhIGluIHI9ITEscz1uKG4oe30saSksdCksaC5wdXJnZSgpLHU9ZS5zaXplLGQ9W10scy5icmVha3BvaW50c3x8W10pe3ZhciBvPXdpbmRvdy5tYXRjaE1lZGlhKGEpO28uX19tZWRpYT1hLGQucHVzaChvKSxoLmFkZChvLFwiY2hhbmdlXCIsZyl9aC5hZGQod2luZG93LFwib3JpZW50YXRpb25jaGFuZ2VcIix6KSxoLmFkZCh3aW5kb3csXCJyZXNpemVcIixFKSxiKCl9ZnVuY3Rpb24gdyhuKXtlLmFuaW1hdG9yLnN0b3AoKTt2YXIgdD1lLnRyYWNrLmRldGFpbHM7ZS50cmFjay5pbml0KG51bGwhPW4/bjp0P3QuYWJzOjApfWZ1bmN0aW9uIE0obil7dyhuKSxlLmVtaXQoXCJvcHRpb25zQ2hhbmdlZFwiKX1mdW5jdGlvbiBUKG4sdCl7aWYobilyZXR1cm4geShuKSx2b2lkIE0odCk7SSgpLEEoKTt2YXIgaT1rKCk7QygpLGsoKSE9PWk/TSh0KTp3KHQpLGUuZW1pdChcInVwZGF0ZWRcIil9ZnVuY3Rpb24gQygpe3ZhciBuPWUub3B0aW9ucy5zbGlkZXM7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgbilyZXR1cm4gZS5vcHRpb25zLnRyYWNrQ29uZmlnPW4oZS5zaXplLGUuc2xpZGVzKTtmb3IodmFyIHQ9ZS5zbGlkZXMsaT10Lmxlbmd0aCxyPVwibnVtYmVyXCI9PXR5cGVvZiBuP246cChuLFwibnVtYmVyXCIsaSwhMCksYT1bXSxvPXAobixcInBlclZpZXdcIiwxLCEwKSx1PXAobixcInNwYWNpbmdcIiwwLCEwKS9lLnNpemV8fDAscz1cImF1dG9cIj09PW8/dTp1L28sYz1wKG4sXCJvcmlnaW5cIixcImF1dG9cIiksZD0wLGw9MDtsPHI7bCsrKXt2YXIgZj1cImF1dG9cIj09PW8/eCh0W2xdKToxL28tdStzLHY9XCJjZW50ZXJcIj09PWM/LjUtZi8yOlwiYXV0b1wiPT09Yz8wOmM7YS5wdXNoKHtvcmlnaW46dixzaXplOmYsc3BhY2luZzp1fSksZCs9Zn1pZihkKz11KihyLTEpLFwiYXV0b1wiPT09YyYmIWUub3B0aW9ucy5sb29wJiYxIT09byl7dmFyIGg9MDthLm1hcCgoZnVuY3Rpb24obil7dmFyIHQ9ZC1oO3JldHVybiBoKz1uLnNpemUrdSx0Pj0xfHwobi5vcmlnaW49MS10LShkPjE/MDoxLWQpKSxufSkpfWUub3B0aW9ucy50cmFja0NvbmZpZz1hfWZ1bmN0aW9uIEUoKXtJKCk7dmFyIG49ZS5zaXplO2Uub3B0aW9ucy5kaXNhYmxlZHx8bj09PXV8fCh1PW4sVCgpKX1mdW5jdGlvbiB6KCl7RSgpLHNldFRpbWVvdXQoRSw1MDApLHNldFRpbWVvdXQoRSwyZTMpfWZ1bmN0aW9uIEkoKXt2YXIgbj1mKGUuY29udGFpbmVyKTtlLnNpemU9KGUub3B0aW9ucy52ZXJ0aWNhbD9uLmhlaWdodDpuLndpZHRoKXx8MX1mdW5jdGlvbiBBKCl7ZS5zbGlkZXM9byhlLm9wdGlvbnMuc2VsZWN0b3IsZS5jb250YWluZXIpfWUuY29udGFpbmVyPSh2PW8odCxsfHxkb2N1bWVudCkpLmxlbmd0aD92WzBdOm51bGwsZS5kZXN0cm95PWZ1bmN0aW9uKCl7aC5wdXJnZSgpLGUuZW1pdChcImRlc3Ryb3llZFwiKSxtKCEwKX0sZS5wcmV2PWZ1bmN0aW9uKCl7ZS5tb3ZlVG9JZHgoZS50cmFjay5kZXRhaWxzLmFicy0xLCEwKX0sZS5uZXh0PWZ1bmN0aW9uKCl7ZS5tb3ZlVG9JZHgoZS50cmFjay5kZXRhaWxzLmFicysxLCEwKX0sZS51cGRhdGU9VCx5KGUub3B0aW9ucyl9fXZhciB5PWZ1bmN0aW9uKG4saSxlKXt0cnl7cmV0dXJuIGZ1bmN0aW9uKG4sdCl7dmFyIGksZT17fTtyZXR1cm4gaT17ZW1pdDpmdW5jdGlvbihuKXtlW25dJiZlW25dLmZvckVhY2goKGZ1bmN0aW9uKG4pe24oaSl9KSk7dmFyIHQ9aS5vcHRpb25zJiZpLm9wdGlvbnNbbl07dCYmdChpKX0sbW92ZVRvSWR4OmZ1bmN0aW9uKG4sdCxlKXt2YXIgcj1pLnRyYWNrLmlkeFRvRGlzdChuLHQpO2lmKHIpe3ZhciBhPWkub3B0aW9ucy5kZWZhdWx0QW5pbWF0aW9uO2kuYW5pbWF0b3Iuc3RhcnQoW3tkaXN0YW5jZTpyLGR1cmF0aW9uOnAoZXx8YSxcImR1cmF0aW9uXCIsNTAwKSxlYXNpbmc6cChlfHxhLFwiZWFzaW5nXCIsKGZ1bmN0aW9uKG4pe3JldHVybiAxKy0tbipuKm4qbipufSkpfV0pfX0sb246ZnVuY3Rpb24obix0LGkpe3ZvaWQgMD09PWkmJihpPSExKSxlW25dfHwoZVtuXT1bXSk7dmFyIHI9ZVtuXS5pbmRleE9mKHQpO3I+LTE/aSYmZGVsZXRlIGVbbl1bcl06aXx8ZVtuXS5wdXNoKHQpfSxvcHRpb25zOm59LGZ1bmN0aW9uKCl7aWYoaS50cmFjaz1tKGkpLGkuYW5pbWF0b3I9aChpKSx0KWZvcih2YXIgbj0wLGU9dDtuPGUubGVuZ3RoO24rKykoMCxlW25dKShpKTtpLnRyYWNrLmluaXQoaS5vcHRpb25zLmluaXRpYWx8fDApLGkuZW1pdChcImNyZWF0ZWRcIil9KCksaX0oaSx0KFtrKG4se2RyYWc6ITAsbW9kZTpcInNuYXBcIixyZW5kZXJNb2RlOlwicHJlY2lzaW9uXCIscnViYmVyYmFuZDohMCxzZWxlY3RvcjpcIi5rZWVuLXNsaWRlcl9fc2xpZGVcIn0pLHgsYixnXSxlfHxbXSwhMCkpfWNhdGNoKG4pe2NvbnNvbGUuZXJyb3Iobil9fTtleHBvcnR7eSBhcyBkZWZhdWx0fTtcbiIsIi8qIHNtb290aHNjcm9sbCB2MC40LjQgLSAyMDE5IC0gRHVzdGFuIEthc3RlbiwgSmVyZW1pYXMgTWVuaWNoZWxsaSAtIE1JVCBMaWNlbnNlICovXG4oZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gcG9seWZpbGxcbiAgZnVuY3Rpb24gcG9seWZpbGwoKSB7XG4gICAgLy8gYWxpYXNlc1xuICAgIHZhciB3ID0gd2luZG93O1xuICAgIHZhciBkID0gZG9jdW1lbnQ7XG5cbiAgICAvLyByZXR1cm4gaWYgc2Nyb2xsIGJlaGF2aW9yIGlzIHN1cHBvcnRlZCBhbmQgcG9seWZpbGwgaXMgbm90IGZvcmNlZFxuICAgIGlmIChcbiAgICAgICdzY3JvbGxCZWhhdmlvcicgaW4gZC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiZcbiAgICAgIHcuX19mb3JjZVNtb290aFNjcm9sbFBvbHlmaWxsX18gIT09IHRydWVcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBnbG9iYWxzXG4gICAgdmFyIEVsZW1lbnQgPSB3LkhUTUxFbGVtZW50IHx8IHcuRWxlbWVudDtcbiAgICB2YXIgU0NST0xMX1RJTUUgPSA0Njg7XG5cbiAgICAvLyBvYmplY3QgZ2F0aGVyaW5nIG9yaWdpbmFsIHNjcm9sbCBtZXRob2RzXG4gICAgdmFyIG9yaWdpbmFsID0ge1xuICAgICAgc2Nyb2xsOiB3LnNjcm9sbCB8fCB3LnNjcm9sbFRvLFxuICAgICAgc2Nyb2xsQnk6IHcuc2Nyb2xsQnksXG4gICAgICBlbGVtZW50U2Nyb2xsOiBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGwgfHwgc2Nyb2xsRWxlbWVudCxcbiAgICAgIHNjcm9sbEludG9WaWV3OiBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlld1xuICAgIH07XG5cbiAgICAvLyBkZWZpbmUgdGltaW5nIG1ldGhvZFxuICAgIHZhciBub3cgPVxuICAgICAgdy5wZXJmb3JtYW5jZSAmJiB3LnBlcmZvcm1hbmNlLm5vd1xuICAgICAgICA/IHcucGVyZm9ybWFuY2Uubm93LmJpbmQody5wZXJmb3JtYW5jZSlcbiAgICAgICAgOiBEYXRlLm5vdztcblxuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyBpZiBhIHRoZSBjdXJyZW50IGJyb3dzZXIgaXMgbWFkZSBieSBNaWNyb3NvZnRcbiAgICAgKiBAbWV0aG9kIGlzTWljcm9zb2Z0QnJvd3NlclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1c2VyQWdlbnRcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc01pY3Jvc29mdEJyb3dzZXIodXNlckFnZW50KSB7XG4gICAgICB2YXIgdXNlckFnZW50UGF0dGVybnMgPSBbJ01TSUUgJywgJ1RyaWRlbnQvJywgJ0VkZ2UvJ107XG5cbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKHVzZXJBZ2VudFBhdHRlcm5zLmpvaW4oJ3wnKSkudGVzdCh1c2VyQWdlbnQpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogSUUgaGFzIHJvdW5kaW5nIGJ1ZyByb3VuZGluZyBkb3duIGNsaWVudEhlaWdodCBhbmQgY2xpZW50V2lkdGggYW5kXG4gICAgICogcm91bmRpbmcgdXAgc2Nyb2xsSGVpZ2h0IGFuZCBzY3JvbGxXaWR0aCBjYXVzaW5nIGZhbHNlIHBvc2l0aXZlc1xuICAgICAqIG9uIGhhc1Njcm9sbGFibGVTcGFjZVxuICAgICAqL1xuICAgIHZhciBST1VORElOR19UT0xFUkFOQ0UgPSBpc01pY3Jvc29mdEJyb3dzZXIody5uYXZpZ2F0b3IudXNlckFnZW50KSA/IDEgOiAwO1xuXG4gICAgLyoqXG4gICAgICogY2hhbmdlcyBzY3JvbGwgcG9zaXRpb24gaW5zaWRlIGFuIGVsZW1lbnRcbiAgICAgKiBAbWV0aG9kIHNjcm9sbEVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzY3JvbGxFbGVtZW50KHgsIHkpIHtcbiAgICAgIHRoaXMuc2Nyb2xsTGVmdCA9IHg7XG4gICAgICB0aGlzLnNjcm9sbFRvcCA9IHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0dXJucyByZXN1bHQgb2YgYXBwbHlpbmcgZWFzZSBtYXRoIGZ1bmN0aW9uIHRvIGEgbnVtYmVyXG4gICAgICogQG1ldGhvZCBlYXNlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGtcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVhc2Uoaykge1xuICAgICAgcmV0dXJuIDAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIGspKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYSBzbW9vdGggYmVoYXZpb3Igc2hvdWxkIGJlIGFwcGxpZWRcbiAgICAgKiBAbWV0aG9kIHNob3VsZEJhaWxPdXRcbiAgICAgKiBAcGFyYW0ge051bWJlcnxPYmplY3R9IGZpcnN0QXJnXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gc2hvdWxkQmFpbE91dChmaXJzdEFyZykge1xuICAgICAgaWYgKFxuICAgICAgICBmaXJzdEFyZyA9PT0gbnVsbCB8fFxuICAgICAgICB0eXBlb2YgZmlyc3RBcmcgIT09ICdvYmplY3QnIHx8XG4gICAgICAgIGZpcnN0QXJnLmJlaGF2aW9yID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgZmlyc3RBcmcuYmVoYXZpb3IgPT09ICdhdXRvJyB8fFxuICAgICAgICBmaXJzdEFyZy5iZWhhdmlvciA9PT0gJ2luc3RhbnQnXG4gICAgICApIHtcbiAgICAgICAgLy8gZmlyc3QgYXJndW1lbnQgaXMgbm90IGFuIG9iamVjdC9udWxsXG4gICAgICAgIC8vIG9yIGJlaGF2aW9yIGlzIGF1dG8sIGluc3RhbnQgb3IgdW5kZWZpbmVkXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGZpcnN0QXJnID09PSAnb2JqZWN0JyAmJiBmaXJzdEFyZy5iZWhhdmlvciA9PT0gJ3Ntb290aCcpIHtcbiAgICAgICAgLy8gZmlyc3QgYXJndW1lbnQgaXMgYW4gb2JqZWN0IGFuZCBiZWhhdmlvciBpcyBzbW9vdGhcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyB0aHJvdyBlcnJvciB3aGVuIGJlaGF2aW9yIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICdiZWhhdmlvciBtZW1iZXIgb2YgU2Nyb2xsT3B0aW9ucyAnICtcbiAgICAgICAgICBmaXJzdEFyZy5iZWhhdmlvciArXG4gICAgICAgICAgJyBpcyBub3QgYSB2YWxpZCB2YWx1ZSBmb3IgZW51bWVyYXRpb24gU2Nyb2xsQmVoYXZpb3IuJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYW4gZWxlbWVudCBoYXMgc2Nyb2xsYWJsZSBzcGFjZSBpbiB0aGUgcHJvdmlkZWQgYXhpc1xuICAgICAqIEBtZXRob2QgaGFzU2Nyb2xsYWJsZVNwYWNlXG4gICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBheGlzXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gaGFzU2Nyb2xsYWJsZVNwYWNlKGVsLCBheGlzKSB7XG4gICAgICBpZiAoYXhpcyA9PT0gJ1knKSB7XG4gICAgICAgIHJldHVybiBlbC5jbGllbnRIZWlnaHQgKyBST1VORElOR19UT0xFUkFOQ0UgPCBlbC5zY3JvbGxIZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChheGlzID09PSAnWCcpIHtcbiAgICAgICAgcmV0dXJuIGVsLmNsaWVudFdpZHRoICsgUk9VTkRJTkdfVE9MRVJBTkNFIDwgZWwuc2Nyb2xsV2lkdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaW5kaWNhdGVzIGlmIGFuIGVsZW1lbnQgaGFzIGEgc2Nyb2xsYWJsZSBvdmVyZmxvdyBwcm9wZXJ0eSBpbiB0aGUgYXhpc1xuICAgICAqIEBtZXRob2QgY2FuT3ZlcmZsb3dcbiAgICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGF4aXNcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjYW5PdmVyZmxvdyhlbCwgYXhpcykge1xuICAgICAgdmFyIG92ZXJmbG93VmFsdWUgPSB3LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpWydvdmVyZmxvdycgKyBheGlzXTtcblxuICAgICAgcmV0dXJuIG92ZXJmbG93VmFsdWUgPT09ICdhdXRvJyB8fCBvdmVyZmxvd1ZhbHVlID09PSAnc2Nyb2xsJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYW4gZWxlbWVudCBjYW4gYmUgc2Nyb2xsZWQgaW4gZWl0aGVyIGF4aXNcbiAgICAgKiBAbWV0aG9kIGlzU2Nyb2xsYWJsZVxuICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXhpc1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzU2Nyb2xsYWJsZShlbCkge1xuICAgICAgdmFyIGlzU2Nyb2xsYWJsZVkgPSBoYXNTY3JvbGxhYmxlU3BhY2UoZWwsICdZJykgJiYgY2FuT3ZlcmZsb3coZWwsICdZJyk7XG4gICAgICB2YXIgaXNTY3JvbGxhYmxlWCA9IGhhc1Njcm9sbGFibGVTcGFjZShlbCwgJ1gnKSAmJiBjYW5PdmVyZmxvdyhlbCwgJ1gnKTtcblxuICAgICAgcmV0dXJuIGlzU2Nyb2xsYWJsZVkgfHwgaXNTY3JvbGxhYmxlWDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBmaW5kcyBzY3JvbGxhYmxlIHBhcmVudCBvZiBhbiBlbGVtZW50XG4gICAgICogQG1ldGhvZCBmaW5kU2Nyb2xsYWJsZVBhcmVudFxuICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgKiBAcmV0dXJucyB7Tm9kZX0gZWxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmaW5kU2Nyb2xsYWJsZVBhcmVudChlbCkge1xuICAgICAgd2hpbGUgKGVsICE9PSBkLmJvZHkgJiYgaXNTY3JvbGxhYmxlKGVsKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWwgPSBlbC5wYXJlbnROb2RlIHx8IGVsLmhvc3Q7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzZWxmIGludm9rZWQgZnVuY3Rpb24gdGhhdCwgZ2l2ZW4gYSBjb250ZXh0LCBzdGVwcyB0aHJvdWdoIHNjcm9sbGluZ1xuICAgICAqIEBtZXRob2Qgc3RlcFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzdGVwKGNvbnRleHQpIHtcbiAgICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgICB2YXIgdmFsdWU7XG4gICAgICB2YXIgY3VycmVudFg7XG4gICAgICB2YXIgY3VycmVudFk7XG4gICAgICB2YXIgZWxhcHNlZCA9ICh0aW1lIC0gY29udGV4dC5zdGFydFRpbWUpIC8gU0NST0xMX1RJTUU7XG5cbiAgICAgIC8vIGF2b2lkIGVsYXBzZWQgdGltZXMgaGlnaGVyIHRoYW4gb25lXG4gICAgICBlbGFwc2VkID0gZWxhcHNlZCA+IDEgPyAxIDogZWxhcHNlZDtcblxuICAgICAgLy8gYXBwbHkgZWFzaW5nIHRvIGVsYXBzZWQgdGltZVxuICAgICAgdmFsdWUgPSBlYXNlKGVsYXBzZWQpO1xuXG4gICAgICBjdXJyZW50WCA9IGNvbnRleHQuc3RhcnRYICsgKGNvbnRleHQueCAtIGNvbnRleHQuc3RhcnRYKSAqIHZhbHVlO1xuICAgICAgY3VycmVudFkgPSBjb250ZXh0LnN0YXJ0WSArIChjb250ZXh0LnkgLSBjb250ZXh0LnN0YXJ0WSkgKiB2YWx1ZTtcblxuICAgICAgY29udGV4dC5tZXRob2QuY2FsbChjb250ZXh0LnNjcm9sbGFibGUsIGN1cnJlbnRYLCBjdXJyZW50WSk7XG5cbiAgICAgIC8vIHNjcm9sbCBtb3JlIGlmIHdlIGhhdmUgbm90IHJlYWNoZWQgb3VyIGRlc3RpbmF0aW9uXG4gICAgICBpZiAoY3VycmVudFggIT09IGNvbnRleHQueCB8fCBjdXJyZW50WSAhPT0gY29udGV4dC55KSB7XG4gICAgICAgIHcucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXAuYmluZCh3LCBjb250ZXh0KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2Nyb2xscyB3aW5kb3cgb3IgZWxlbWVudCB3aXRoIGEgc21vb3RoIGJlaGF2aW9yXG4gICAgICogQG1ldGhvZCBzbW9vdGhTY3JvbGxcbiAgICAgKiBAcGFyYW0ge09iamVjdHxOb2RlfSBlbFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNtb290aFNjcm9sbChlbCwgeCwgeSkge1xuICAgICAgdmFyIHNjcm9sbGFibGU7XG4gICAgICB2YXIgc3RhcnRYO1xuICAgICAgdmFyIHN0YXJ0WTtcbiAgICAgIHZhciBtZXRob2Q7XG4gICAgICB2YXIgc3RhcnRUaW1lID0gbm93KCk7XG5cbiAgICAgIC8vIGRlZmluZSBzY3JvbGwgY29udGV4dFxuICAgICAgaWYgKGVsID09PSBkLmJvZHkpIHtcbiAgICAgICAgc2Nyb2xsYWJsZSA9IHc7XG4gICAgICAgIHN0YXJ0WCA9IHcuc2Nyb2xsWCB8fCB3LnBhZ2VYT2Zmc2V0O1xuICAgICAgICBzdGFydFkgPSB3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldDtcbiAgICAgICAgbWV0aG9kID0gb3JpZ2luYWwuc2Nyb2xsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Nyb2xsYWJsZSA9IGVsO1xuICAgICAgICBzdGFydFggPSBlbC5zY3JvbGxMZWZ0O1xuICAgICAgICBzdGFydFkgPSBlbC5zY3JvbGxUb3A7XG4gICAgICAgIG1ldGhvZCA9IHNjcm9sbEVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIC8vIHNjcm9sbCBsb29waW5nIG92ZXIgYSBmcmFtZVxuICAgICAgc3RlcCh7XG4gICAgICAgIHNjcm9sbGFibGU6IHNjcm9sbGFibGUsXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICBzdGFydFRpbWU6IHN0YXJ0VGltZSxcbiAgICAgICAgc3RhcnRYOiBzdGFydFgsXG4gICAgICAgIHN0YXJ0WTogc3RhcnRZLFxuICAgICAgICB4OiB4LFxuICAgICAgICB5OiB5XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBPUklHSU5BTCBNRVRIT0RTIE9WRVJSSURFU1xuICAgIC8vIHcuc2Nyb2xsIGFuZCB3LnNjcm9sbFRvXG4gICAgdy5zY3JvbGwgPSB3LnNjcm9sbFRvID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBhY3Rpb24gd2hlbiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICAgICAgaWYgKGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICBvcmlnaW5hbC5zY3JvbGwuY2FsbChcbiAgICAgICAgICB3LFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLmxlZnRcbiAgICAgICAgICAgIDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCdcbiAgICAgICAgICAgICAgPyBhcmd1bWVudHNbMF1cbiAgICAgICAgICAgICAgOiB3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCxcbiAgICAgICAgICAvLyB1c2UgdG9wIHByb3AsIHNlY29uZCBhcmd1bWVudCBpZiBwcmVzZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbFlcbiAgICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLnRvcFxuICAgICAgICAgICAgOiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/IGFyZ3VtZW50c1sxXVxuICAgICAgICAgICAgICA6IHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXG4gICAgICBzbW9vdGhTY3JvbGwuY2FsbChcbiAgICAgICAgdyxcbiAgICAgICAgZC5ib2R5LFxuICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS5sZWZ0XG4gICAgICAgICAgOiB3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCxcbiAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS50b3BcbiAgICAgICAgICA6IHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0XG4gICAgICApO1xuICAgIH07XG5cbiAgICAvLyB3LnNjcm9sbEJ5XG4gICAgdy5zY3JvbGxCeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkpIHtcbiAgICAgICAgb3JpZ2luYWwuc2Nyb2xsQnkuY2FsbChcbiAgICAgICAgICB3LFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLmxlZnRcbiAgICAgICAgICAgIDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCcgPyBhcmd1bWVudHNbMF0gOiAwLFxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMF0udG9wXG4gICAgICAgICAgICA6IGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gTEVUIFRIRSBTTU9PVEhORVNTIEJFR0lOIVxuICAgICAgc21vb3RoU2Nyb2xsLmNhbGwoXG4gICAgICAgIHcsXG4gICAgICAgIGQuYm9keSxcbiAgICAgICAgfn5hcmd1bWVudHNbMF0ubGVmdCArICh3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCksXG4gICAgICAgIH5+YXJndW1lbnRzWzBdLnRvcCArICh3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldClcbiAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbCBhbmQgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsVG9cbiAgICBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGwgPSBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxUbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgLy8gaWYgb25lIG51bWJlciBpcyBwYXNzZWQsIHRocm93IGVycm9yIHRvIG1hdGNoIEZpcmVmb3ggaW1wbGVtZW50YXRpb25cbiAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdudW1iZXInICYmIGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdWYWx1ZSBjb3VsZCBub3QgYmUgY29udmVydGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBvcmlnaW5hbC5lbGVtZW50U2Nyb2xsLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAvLyB1c2UgbGVmdCBwcm9wLCBmaXJzdCBudW1iZXIgYXJndW1lbnQgb3IgZmFsbGJhY2sgdG8gc2Nyb2xsTGVmdFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0ubGVmdFxuICAgICAgICAgICAgOiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnb2JqZWN0JyA/IH5+YXJndW1lbnRzWzBdIDogdGhpcy5zY3JvbGxMZWZ0LFxuICAgICAgICAgIC8vIHVzZSB0b3AgcHJvcCwgc2Vjb25kIGFyZ3VtZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbFRvcFxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS50b3BcbiAgICAgICAgICAgIDogYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyB+fmFyZ3VtZW50c1sxXSA6IHRoaXMuc2Nyb2xsVG9wXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGVmdCA9IGFyZ3VtZW50c1swXS5sZWZ0O1xuICAgICAgdmFyIHRvcCA9IGFyZ3VtZW50c1swXS50b3A7XG5cbiAgICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcbiAgICAgIHNtb290aFNjcm9sbC5jYWxsKFxuICAgICAgICB0aGlzLFxuICAgICAgICB0aGlzLFxuICAgICAgICB0eXBlb2YgbGVmdCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNjcm9sbExlZnQgOiB+fmxlZnQsXG4gICAgICAgIHR5cGVvZiB0b3AgPT09ICd1bmRlZmluZWQnID8gdGhpcy5zY3JvbGxUb3AgOiB+fnRvcFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy8gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsQnlcbiAgICBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxCeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgb3JpZ2luYWwuZWxlbWVudFNjcm9sbC5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS5sZWZ0ICsgdGhpcy5zY3JvbGxMZWZ0XG4gICAgICAgICAgICA6IH5+YXJndW1lbnRzWzBdICsgdGhpcy5zY3JvbGxMZWZ0LFxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS50b3AgKyB0aGlzLnNjcm9sbFRvcFxuICAgICAgICAgICAgOiB+fmFyZ3VtZW50c1sxXSArIHRoaXMuc2Nyb2xsVG9wXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNjcm9sbCh7XG4gICAgICAgIGxlZnQ6IH5+YXJndW1lbnRzWzBdLmxlZnQgKyB0aGlzLnNjcm9sbExlZnQsXG4gICAgICAgIHRvcDogfn5hcmd1bWVudHNbMF0udG9wICsgdGhpcy5zY3JvbGxUb3AsXG4gICAgICAgIGJlaGF2aW9yOiBhcmd1bWVudHNbMF0uYmVoYXZpb3JcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlld1xuICAgIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3ID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG4gICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pID09PSB0cnVlKSB7XG4gICAgICAgIG9yaWdpbmFsLnNjcm9sbEludG9WaWV3LmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbMF1cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcbiAgICAgIHZhciBzY3JvbGxhYmxlUGFyZW50ID0gZmluZFNjcm9sbGFibGVQYXJlbnQodGhpcyk7XG4gICAgICB2YXIgcGFyZW50UmVjdHMgPSBzY3JvbGxhYmxlUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIGNsaWVudFJlY3RzID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgaWYgKHNjcm9sbGFibGVQYXJlbnQgIT09IGQuYm9keSkge1xuICAgICAgICAvLyByZXZlYWwgZWxlbWVudCBpbnNpZGUgcGFyZW50XG4gICAgICAgIHNtb290aFNjcm9sbC5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgc2Nyb2xsYWJsZVBhcmVudCxcbiAgICAgICAgICBzY3JvbGxhYmxlUGFyZW50LnNjcm9sbExlZnQgKyBjbGllbnRSZWN0cy5sZWZ0IC0gcGFyZW50UmVjdHMubGVmdCxcbiAgICAgICAgICBzY3JvbGxhYmxlUGFyZW50LnNjcm9sbFRvcCArIGNsaWVudFJlY3RzLnRvcCAtIHBhcmVudFJlY3RzLnRvcFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHJldmVhbCBwYXJlbnQgaW4gdmlld3BvcnQgdW5sZXNzIGlzIGZpeGVkXG4gICAgICAgIGlmICh3LmdldENvbXB1dGVkU3R5bGUoc2Nyb2xsYWJsZVBhcmVudCkucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgICAgICB3LnNjcm9sbEJ5KHtcbiAgICAgICAgICAgIGxlZnQ6IHBhcmVudFJlY3RzLmxlZnQsXG4gICAgICAgICAgICB0b3A6IHBhcmVudFJlY3RzLnRvcCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZXZlYWwgZWxlbWVudCBpbiB2aWV3cG9ydFxuICAgICAgICB3LnNjcm9sbEJ5KHtcbiAgICAgICAgICBsZWZ0OiBjbGllbnRSZWN0cy5sZWZ0LFxuICAgICAgICAgIHRvcDogY2xpZW50UmVjdHMudG9wLFxuICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIGNvbW1vbmpzXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7IHBvbHlmaWxsOiBwb2x5ZmlsbCB9O1xuICB9IGVsc2Uge1xuICAgIC8vIGdsb2JhbFxuICAgIHBvbHlmaWxsKCk7XG4gIH1cblxufSgpKTtcbiIsIiFmdW5jdGlvbihuLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOihuPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6bnx8c2VsZikuTGF6eUxvYWQ9dCgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oKXtyZXR1cm4gbj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihuKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgZT1hcmd1bWVudHNbdF07Zm9yKHZhciBpIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsaSkmJihuW2ldPWVbaV0pfXJldHVybiBufSxuLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgdD1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93LGU9dCYmIShcIm9uc2Nyb2xsXCJpbiB3aW5kb3cpfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiYvKGdsZXxpbmd8cm8pYm90fGNyYXdsfHNwaWRlci9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksaT10JiZcIkludGVyc2VjdGlvbk9ic2VydmVyXCJpbiB3aW5kb3csbz10JiZcImNsYXNzTGlzdFwiaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIiksYT10JiZ3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbz4xLHI9e2VsZW1lbnRzX3NlbGVjdG9yOlwiLmxhenlcIixjb250YWluZXI6ZXx8dD9kb2N1bWVudDpudWxsLHRocmVzaG9sZDozMDAsdGhyZXNob2xkczpudWxsLGRhdGFfc3JjOlwic3JjXCIsZGF0YV9zcmNzZXQ6XCJzcmNzZXRcIixkYXRhX3NpemVzOlwic2l6ZXNcIixkYXRhX2JnOlwiYmdcIixkYXRhX2JnX2hpZHBpOlwiYmctaGlkcGlcIixkYXRhX2JnX211bHRpOlwiYmctbXVsdGlcIixkYXRhX2JnX211bHRpX2hpZHBpOlwiYmctbXVsdGktaGlkcGlcIixkYXRhX2JnX3NldDpcImJnLXNldFwiLGRhdGFfcG9zdGVyOlwicG9zdGVyXCIsY2xhc3NfYXBwbGllZDpcImFwcGxpZWRcIixjbGFzc19sb2FkaW5nOlwibG9hZGluZ1wiLGNsYXNzX2xvYWRlZDpcImxvYWRlZFwiLGNsYXNzX2Vycm9yOlwiZXJyb3JcIixjbGFzc19lbnRlcmVkOlwiZW50ZXJlZFwiLGNsYXNzX2V4aXRlZDpcImV4aXRlZFwiLHVub2JzZXJ2ZV9jb21wbGV0ZWQ6ITAsdW5vYnNlcnZlX2VudGVyZWQ6ITEsY2FuY2VsX29uX2V4aXQ6ITAsY2FsbGJhY2tfZW50ZXI6bnVsbCxjYWxsYmFja19leGl0Om51bGwsY2FsbGJhY2tfYXBwbGllZDpudWxsLGNhbGxiYWNrX2xvYWRpbmc6bnVsbCxjYWxsYmFja19sb2FkZWQ6bnVsbCxjYWxsYmFja19lcnJvcjpudWxsLGNhbGxiYWNrX2ZpbmlzaDpudWxsLGNhbGxiYWNrX2NhbmNlbDpudWxsLHVzZV9uYXRpdmU6ITEscmVzdG9yZV9vbl9lcnJvcjohMX0sYz1mdW5jdGlvbih0KXtyZXR1cm4gbih7fSxyLHQpfSxsPWZ1bmN0aW9uKG4sdCl7dmFyIGUsaT1cIkxhenlMb2FkOjpJbml0aWFsaXplZFwiLG89bmV3IG4odCk7dHJ5e2U9bmV3IEN1c3RvbUV2ZW50KGkse2RldGFpbDp7aW5zdGFuY2U6b319KX1jYXRjaChuKXsoZT1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpKS5pbml0Q3VzdG9tRXZlbnQoaSwhMSwhMSx7aW5zdGFuY2U6b30pfXdpbmRvdy5kaXNwYXRjaEV2ZW50KGUpfSx1PVwic3JjXCIscz1cInNyY3NldFwiLGQ9XCJzaXplc1wiLGY9XCJwb3N0ZXJcIixfPVwibGxPcmlnaW5hbEF0dHJzXCIsZz1cImRhdGFcIix2PVwibG9hZGluZ1wiLGI9XCJsb2FkZWRcIixtPVwiYXBwbGllZFwiLHA9XCJlcnJvclwiLGg9XCJuYXRpdmVcIixFPVwiZGF0YS1cIixJPVwibGwtc3RhdHVzXCIseT1mdW5jdGlvbihuLHQpe3JldHVybiBuLmdldEF0dHJpYnV0ZShFK3QpfSxrPWZ1bmN0aW9uKG4pe3JldHVybiB5KG4sSSl9LHc9ZnVuY3Rpb24obix0KXtyZXR1cm4gZnVuY3Rpb24obix0LGUpe3ZhciBpPVwiZGF0YS1sbC1zdGF0dXNcIjtudWxsIT09ZT9uLnNldEF0dHJpYnV0ZShpLGUpOm4ucmVtb3ZlQXR0cmlidXRlKGkpfShuLDAsdCl9LEE9ZnVuY3Rpb24obil7cmV0dXJuIHcobixudWxsKX0sTD1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbD09PWsobil9LE89ZnVuY3Rpb24obil7cmV0dXJuIGsobik9PT1ofSx4PVt2LGIsbSxwXSxDPWZ1bmN0aW9uKG4sdCxlLGkpe24mJih2b2lkIDA9PT1pP3ZvaWQgMD09PWU/bih0KTpuKHQsZSk6bih0LGUsaSkpfSxOPWZ1bmN0aW9uKG4sdCl7bz9uLmNsYXNzTGlzdC5hZGQodCk6bi5jbGFzc05hbWUrPShuLmNsYXNzTmFtZT9cIiBcIjpcIlwiKSt0fSxNPWZ1bmN0aW9uKG4sdCl7bz9uLmNsYXNzTGlzdC5yZW1vdmUodCk6bi5jbGFzc05hbWU9bi5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXHMrKVwiK3QrXCIoXFxcXHMrfCQpXCIpLFwiIFwiKS5yZXBsYWNlKC9eXFxzKy8sXCJcIikucmVwbGFjZSgvXFxzKyQvLFwiXCIpfSx6PWZ1bmN0aW9uKG4pe3JldHVybiBuLmxsVGVtcEltYWdlfSxUPWZ1bmN0aW9uKG4sdCl7aWYodCl7dmFyIGU9dC5fb2JzZXJ2ZXI7ZSYmZS51bm9ic2VydmUobil9fSxSPWZ1bmN0aW9uKG4sdCl7biYmKG4ubG9hZGluZ0NvdW50Kz10KX0sRz1mdW5jdGlvbihuLHQpe24mJihuLnRvTG9hZENvdW50PXQpfSxqPWZ1bmN0aW9uKG4pe2Zvcih2YXIgdCxlPVtdLGk9MDt0PW4uY2hpbGRyZW5baV07aSs9MSlcIlNPVVJDRVwiPT09dC50YWdOYW1lJiZlLnB1c2godCk7cmV0dXJuIGV9LEQ9ZnVuY3Rpb24obix0KXt2YXIgZT1uLnBhcmVudE5vZGU7ZSYmXCJQSUNUVVJFXCI9PT1lLnRhZ05hbWUmJmooZSkuZm9yRWFjaCh0KX0sSD1mdW5jdGlvbihuLHQpe2oobikuZm9yRWFjaCh0KX0sVj1bdV0sRj1bdSxmXSxCPVt1LHMsZF0sSj1bZ10sUD1mdW5jdGlvbihuKXtyZXR1cm4hIW5bX119LFM9ZnVuY3Rpb24obil7cmV0dXJuIG5bX119LFU9ZnVuY3Rpb24obil7cmV0dXJuIGRlbGV0ZSBuW19dfSwkPWZ1bmN0aW9uKG4sdCl7aWYoIVAobikpe3ZhciBlPXt9O3QuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZVt0XT1uLmdldEF0dHJpYnV0ZSh0KX0pKSxuW19dPWV9fSxxPWZ1bmN0aW9uKG4sdCl7aWYoUChuKSl7dmFyIGU9UyhuKTt0LmZvckVhY2goKGZ1bmN0aW9uKHQpeyFmdW5jdGlvbihuLHQsZSl7ZT9uLnNldEF0dHJpYnV0ZSh0LGUpOm4ucmVtb3ZlQXR0cmlidXRlKHQpfShuLHQsZVt0XSl9KSl9fSxLPWZ1bmN0aW9uKG4sdCxlKXtOKG4sdC5jbGFzc19hcHBsaWVkKSx3KG4sbSksZSYmKHQudW5vYnNlcnZlX2NvbXBsZXRlZCYmVChuLHQpLEModC5jYWxsYmFja19hcHBsaWVkLG4sZSkpfSxRPWZ1bmN0aW9uKG4sdCxlKXtOKG4sdC5jbGFzc19sb2FkaW5nKSx3KG4sdiksZSYmKFIoZSwxKSxDKHQuY2FsbGJhY2tfbG9hZGluZyxuLGUpKX0sVz1mdW5jdGlvbihuLHQsZSl7ZSYmbi5zZXRBdHRyaWJ1dGUodCxlKX0sWD1mdW5jdGlvbihuLHQpe1cobixkLHkobix0LmRhdGFfc2l6ZXMpKSxXKG4scyx5KG4sdC5kYXRhX3NyY3NldCkpLFcobix1LHkobix0LmRhdGFfc3JjKSl9LFk9e0lNRzpmdW5jdGlvbihuLHQpe0QobiwoZnVuY3Rpb24obil7JChuLEIpLFgobix0KX0pKSwkKG4sQiksWChuLHQpfSxJRlJBTUU6ZnVuY3Rpb24obix0KXskKG4sViksVyhuLHUseShuLHQuZGF0YV9zcmMpKX0sVklERU86ZnVuY3Rpb24obix0KXtIKG4sKGZ1bmN0aW9uKG4peyQobixWKSxXKG4sdSx5KG4sdC5kYXRhX3NyYykpfSkpLCQobixGKSxXKG4sZix5KG4sdC5kYXRhX3Bvc3RlcikpLFcobix1LHkobix0LmRhdGFfc3JjKSksbi5sb2FkKCl9LE9CSkVDVDpmdW5jdGlvbihuLHQpeyQobixKKSxXKG4sZyx5KG4sdC5kYXRhX3NyYykpfX0sWj1bXCJJTUdcIixcIklGUkFNRVwiLFwiVklERU9cIixcIk9CSkVDVFwiXSxubj1mdW5jdGlvbihuLHQpeyF0fHxmdW5jdGlvbihuKXtyZXR1cm4gbi5sb2FkaW5nQ291bnQ+MH0odCl8fGZ1bmN0aW9uKG4pe3JldHVybiBuLnRvTG9hZENvdW50PjB9KHQpfHxDKG4uY2FsbGJhY2tfZmluaXNoLHQpfSx0bj1mdW5jdGlvbihuLHQsZSl7bi5hZGRFdmVudExpc3RlbmVyKHQsZSksbi5sbEV2TGlzbnJzW3RdPWV9LGVuPWZ1bmN0aW9uKG4sdCxlKXtuLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxlKX0sb249ZnVuY3Rpb24obil7cmV0dXJuISFuLmxsRXZMaXNucnN9LGFuPWZ1bmN0aW9uKG4pe2lmKG9uKG4pKXt2YXIgdD1uLmxsRXZMaXNucnM7Zm9yKHZhciBlIGluIHQpe3ZhciBpPXRbZV07ZW4obixlLGkpfWRlbGV0ZSBuLmxsRXZMaXNucnN9fSxybj1mdW5jdGlvbihuLHQsZSl7IWZ1bmN0aW9uKG4pe2RlbGV0ZSBuLmxsVGVtcEltYWdlfShuKSxSKGUsLTEpLGZ1bmN0aW9uKG4pe24mJihuLnRvTG9hZENvdW50LT0xKX0oZSksTShuLHQuY2xhc3NfbG9hZGluZyksdC51bm9ic2VydmVfY29tcGxldGVkJiZUKG4sZSl9LGNuPWZ1bmN0aW9uKG4sdCxlKXt2YXIgaT16KG4pfHxuO29uKGkpfHxmdW5jdGlvbihuLHQsZSl7b24obil8fChuLmxsRXZMaXNucnM9e30pO3ZhciBpPVwiVklERU9cIj09PW4udGFnTmFtZT9cImxvYWRlZGRhdGFcIjpcImxvYWRcIjt0bihuLGksdCksdG4obixcImVycm9yXCIsZSl9KGksKGZ1bmN0aW9uKG8peyFmdW5jdGlvbihuLHQsZSxpKXt2YXIgbz1PKHQpO3JuKHQsZSxpKSxOKHQsZS5jbGFzc19sb2FkZWQpLHcodCxiKSxDKGUuY2FsbGJhY2tfbG9hZGVkLHQsaSksb3x8bm4oZSxpKX0oMCxuLHQsZSksYW4oaSl9KSwoZnVuY3Rpb24obyl7IWZ1bmN0aW9uKG4sdCxlLGkpe3ZhciBvPU8odCk7cm4odCxlLGkpLE4odCxlLmNsYXNzX2Vycm9yKSx3KHQscCksQyhlLmNhbGxiYWNrX2Vycm9yLHQsaSksZS5yZXN0b3JlX29uX2Vycm9yJiZxKHQsQiksb3x8bm4oZSxpKX0oMCxuLHQsZSksYW4oaSl9KSl9LGxuPWZ1bmN0aW9uKG4sdCxlKXshZnVuY3Rpb24obil7cmV0dXJuIFouaW5kZXhPZihuLnRhZ05hbWUpPi0xfShuKT9mdW5jdGlvbihuLHQsZSl7IWZ1bmN0aW9uKG4pe24ubGxUZW1wSW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKX0obiksY24obix0LGUpLGZ1bmN0aW9uKG4pe1Aobil8fChuW19dPXtiYWNrZ3JvdW5kSW1hZ2U6bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2V9KX0obiksZnVuY3Rpb24obix0LGUpe3ZhciBpPXkobix0LmRhdGFfYmcpLG89eShuLHQuZGF0YV9iZ19oaWRwaSkscj1hJiZvP286aTtyJiYobi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J3VybChcIicuY29uY2F0KHIsJ1wiKScpLHoobikuc2V0QXR0cmlidXRlKHUsciksUShuLHQsZSkpfShuLHQsZSksZnVuY3Rpb24obix0LGUpe3ZhciBpPXkobix0LmRhdGFfYmdfbXVsdGkpLG89eShuLHQuZGF0YV9iZ19tdWx0aV9oaWRwaSkscj1hJiZvP286aTtyJiYobi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9cixLKG4sdCxlKSl9KG4sdCxlKSxmdW5jdGlvbihuLHQsZSl7dmFyIGk9eShuLHQuZGF0YV9iZ19zZXQpO2lmKGkpe3ZhciBvPWkuc3BsaXQoXCJ8XCIpLGE9by5tYXAoKGZ1bmN0aW9uKG4pe3JldHVyblwiaW1hZ2Utc2V0KFwiLmNvbmNhdChuLFwiKVwiKX0pKTtuLnN0eWxlLmJhY2tncm91bmRJbWFnZT1hLmpvaW4oKSxcIlwiPT09bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UmJihhPW8ubWFwKChmdW5jdGlvbihuKXtyZXR1cm5cIi13ZWJraXQtaW1hZ2Utc2V0KFwiLmNvbmNhdChuLFwiKVwiKX0pKSxuLnN0eWxlLmJhY2tncm91bmRJbWFnZT1hLmpvaW4oKSksSyhuLHQsZSl9fShuLHQsZSl9KG4sdCxlKTpmdW5jdGlvbihuLHQsZSl7Y24obix0LGUpLGZ1bmN0aW9uKG4sdCxlKXt2YXIgaT1ZW24udGFnTmFtZV07aSYmKGkobix0KSxRKG4sdCxlKSl9KG4sdCxlKX0obix0LGUpfSx1bj1mdW5jdGlvbihuKXtuLnJlbW92ZUF0dHJpYnV0ZSh1KSxuLnJlbW92ZUF0dHJpYnV0ZShzKSxuLnJlbW92ZUF0dHJpYnV0ZShkKX0sc249ZnVuY3Rpb24obil7RChuLChmdW5jdGlvbihuKXtxKG4sQil9KSkscShuLEIpfSxkbj17SU1HOnNuLElGUkFNRTpmdW5jdGlvbihuKXtxKG4sVil9LFZJREVPOmZ1bmN0aW9uKG4pe0gobiwoZnVuY3Rpb24obil7cShuLFYpfSkpLHEobixGKSxuLmxvYWQoKX0sT0JKRUNUOmZ1bmN0aW9uKG4pe3EobixKKX19LGZuPWZ1bmN0aW9uKG4sdCl7KGZ1bmN0aW9uKG4pe3ZhciB0PWRuW24udGFnTmFtZV07dD90KG4pOmZ1bmN0aW9uKG4pe2lmKFAobikpe3ZhciB0PVMobik7bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9dC5iYWNrZ3JvdW5kSW1hZ2V9fShuKX0pKG4pLGZ1bmN0aW9uKG4sdCl7TChuKXx8TyhuKXx8KE0obix0LmNsYXNzX2VudGVyZWQpLE0obix0LmNsYXNzX2V4aXRlZCksTShuLHQuY2xhc3NfYXBwbGllZCksTShuLHQuY2xhc3NfbG9hZGluZyksTShuLHQuY2xhc3NfbG9hZGVkKSxNKG4sdC5jbGFzc19lcnJvcikpfShuLHQpLEEobiksVShuKX0sX249W1wiSU1HXCIsXCJJRlJBTUVcIixcIlZJREVPXCJdLGduPWZ1bmN0aW9uKG4pe3JldHVybiBuLnVzZV9uYXRpdmUmJlwibG9hZGluZ1wiaW4gSFRNTEltYWdlRWxlbWVudC5wcm90b3R5cGV9LHZuPWZ1bmN0aW9uKG4sdCxlKXtuLmZvckVhY2goKGZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gbi5pc0ludGVyc2VjdGluZ3x8bi5pbnRlcnNlY3Rpb25SYXRpbz4wfShuKT9mdW5jdGlvbihuLHQsZSxpKXt2YXIgbz1mdW5jdGlvbihuKXtyZXR1cm4geC5pbmRleE9mKGsobikpPj0wfShuKTt3KG4sXCJlbnRlcmVkXCIpLE4obixlLmNsYXNzX2VudGVyZWQpLE0obixlLmNsYXNzX2V4aXRlZCksZnVuY3Rpb24obix0LGUpe3QudW5vYnNlcnZlX2VudGVyZWQmJlQobixlKX0obixlLGkpLEMoZS5jYWxsYmFja19lbnRlcixuLHQsaSksb3x8bG4obixlLGkpfShuLnRhcmdldCxuLHQsZSk6ZnVuY3Rpb24obix0LGUsaSl7TChuKXx8KE4obixlLmNsYXNzX2V4aXRlZCksZnVuY3Rpb24obix0LGUsaSl7ZS5jYW5jZWxfb25fZXhpdCYmZnVuY3Rpb24obil7cmV0dXJuIGsobik9PT12fShuKSYmXCJJTUdcIj09PW4udGFnTmFtZSYmKGFuKG4pLGZ1bmN0aW9uKG4pe0QobiwoZnVuY3Rpb24obil7dW4obil9KSksdW4obil9KG4pLHNuKG4pLE0obixlLmNsYXNzX2xvYWRpbmcpLFIoaSwtMSksQShuKSxDKGUuY2FsbGJhY2tfY2FuY2VsLG4sdCxpKSl9KG4sdCxlLGkpLEMoZS5jYWxsYmFja19leGl0LG4sdCxpKSl9KG4udGFyZ2V0LG4sdCxlKX0pKX0sYm49ZnVuY3Rpb24obil7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG4pfSxtbj1mdW5jdGlvbihuKXtyZXR1cm4gbi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChuLmVsZW1lbnRzX3NlbGVjdG9yKX0scG49ZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiBrKG4pPT09cH0obil9LGhuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiBibihuKS5maWx0ZXIoTCl9KG58fG1uKHQpKX0sRW49ZnVuY3Rpb24obixlKXt2YXIgbz1jKG4pO3RoaXMuX3NldHRpbmdzPW8sdGhpcy5sb2FkaW5nQ291bnQ9MCxmdW5jdGlvbihuLHQpe2kmJiFnbihuKSYmKHQuX29ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZnVuY3Rpb24oZSl7dm4oZSxuLHQpfSksZnVuY3Rpb24obil7cmV0dXJue3Jvb3Q6bi5jb250YWluZXI9PT1kb2N1bWVudD9udWxsOm4uY29udGFpbmVyLHJvb3RNYXJnaW46bi50aHJlc2hvbGRzfHxuLnRocmVzaG9sZCtcInB4XCJ9fShuKSkpfShvLHRoaXMpLGZ1bmN0aW9uKG4sZSl7dCYmKGUuX29ubGluZUhhbmRsZXI9ZnVuY3Rpb24oKXshZnVuY3Rpb24obix0KXt2YXIgZTsoZT1tbihuKSxibihlKS5maWx0ZXIocG4pKS5mb3JFYWNoKChmdW5jdGlvbih0KXtNKHQsbi5jbGFzc19lcnJvciksQSh0KX0pKSx0LnVwZGF0ZSgpfShuLGUpfSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubGluZVwiLGUuX29ubGluZUhhbmRsZXIpKX0obyx0aGlzKSx0aGlzLnVwZGF0ZShlKX07cmV0dXJuIEVuLnByb3RvdHlwZT17dXBkYXRlOmZ1bmN0aW9uKG4pe3ZhciB0LG8sYT10aGlzLl9zZXR0aW5ncyxyPWhuKG4sYSk7Ryh0aGlzLHIubGVuZ3RoKSwhZSYmaT9nbihhKT9mdW5jdGlvbihuLHQsZSl7bi5mb3JFYWNoKChmdW5jdGlvbihuKXstMSE9PV9uLmluZGV4T2Yobi50YWdOYW1lKSYmZnVuY3Rpb24obix0LGUpe24uc2V0QXR0cmlidXRlKFwibG9hZGluZ1wiLFwibGF6eVwiKSxjbihuLHQsZSksZnVuY3Rpb24obix0KXt2YXIgZT1ZW24udGFnTmFtZV07ZSYmZShuLHQpfShuLHQpLHcobixoKX0obix0LGUpfSkpLEcoZSwwKX0ocixhLHRoaXMpOihvPXIsZnVuY3Rpb24obil7bi5kaXNjb25uZWN0KCl9KHQ9dGhpcy5fb2JzZXJ2ZXIpLGZ1bmN0aW9uKG4sdCl7dC5mb3JFYWNoKChmdW5jdGlvbih0KXtuLm9ic2VydmUodCl9KSl9KHQsbykpOnRoaXMubG9hZEFsbChyKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuX29ic2VydmVyJiZ0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCksdCYmd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbmxpbmVcIix0aGlzLl9vbmxpbmVIYW5kbGVyKSxtbih0aGlzLl9zZXR0aW5ncykuZm9yRWFjaCgoZnVuY3Rpb24obil7VShuKX0pKSxkZWxldGUgdGhpcy5fb2JzZXJ2ZXIsZGVsZXRlIHRoaXMuX3NldHRpbmdzLGRlbGV0ZSB0aGlzLl9vbmxpbmVIYW5kbGVyLGRlbGV0ZSB0aGlzLmxvYWRpbmdDb3VudCxkZWxldGUgdGhpcy50b0xvYWRDb3VudH0sbG9hZEFsbDpmdW5jdGlvbihuKXt2YXIgdD10aGlzLGU9dGhpcy5fc2V0dGluZ3M7aG4obixlKS5mb3JFYWNoKChmdW5jdGlvbihuKXtUKG4sdCksbG4obixlLHQpfSkpfSxyZXN0b3JlQWxsOmZ1bmN0aW9uKCl7dmFyIG49dGhpcy5fc2V0dGluZ3M7bW4obikuZm9yRWFjaCgoZnVuY3Rpb24odCl7Zm4odCxuKX0pKX19LEVuLmxvYWQ9ZnVuY3Rpb24obix0KXt2YXIgZT1jKHQpO2xuKG4sZSl9LEVuLnJlc2V0U3RhdHVzPWZ1bmN0aW9uKG4pe0Eobil9LHQmJmZ1bmN0aW9uKG4sdCl7aWYodClpZih0Lmxlbmd0aClmb3IodmFyIGUsaT0wO2U9dFtpXTtpKz0xKWwobixlKTtlbHNlIGwobix0KX0oRW4sd2luZG93LmxhenlMb2FkT3B0aW9ucyksRW59KSk7XG4iLCIoZnVuY3Rpb24oZil7aWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiJiZ0eXBlb2YgbW9kdWxlIT09XCJ1bmRlZmluZWRcIil7bW9kdWxlLmV4cG9ydHM9ZigpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtdLGYpfWVsc2V7dmFyIGc7aWYodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCIpe2c9d2luZG93fWVsc2UgaWYodHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCIpe2c9Z2xvYmFsfWVsc2UgaWYodHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiKXtnPXNlbGZ9ZWxzZXtnPXRoaXN9Zy52ZXhEaWFsb2cgPSBmKCl9fSkoZnVuY3Rpb24oKXt2YXIgZGVmaW5lLG1vZHVsZSxleHBvcnRzO3JldHVybiAoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc31yZXR1cm4gZX0pKCkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBkZWVwY29weSh2YWx1ZSkge1xuICBpZiAoISghIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JykpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlLmdldFRpbWUoKSk7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLm1hcChkZWVwY29weSk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChcbiAgICBmdW5jdGlvbihrZXkpIHsgcmVzdWx0W2tleV0gPSBkZWVwY29weSh2YWx1ZVtrZXldKTsgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVlcGNvcHk7XG5cbn0se31dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXG4vKipcbiAqIEV4cG9zZSBgcGFyc2VgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2U7XG5cbi8qKlxuICogVGVzdHMgZm9yIGJyb3dzZXIgc3VwcG9ydC5cbiAqL1xuXG52YXIgaW5uZXJIVE1MQnVnID0gZmFsc2U7XG52YXIgYnVnVGVzdERpdjtcbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gIGJ1Z1Rlc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy8gU2V0dXBcbiAgYnVnVGVzdERpdi5pbm5lckhUTUwgPSAnICA8bGluay8+PHRhYmxlPjwvdGFibGU+PGEgaHJlZj1cIi9hXCI+YTwvYT48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIvPic7XG4gIC8vIE1ha2Ugc3VyZSB0aGF0IGxpbmsgZWxlbWVudHMgZ2V0IHNlcmlhbGl6ZWQgY29ycmVjdGx5IGJ5IGlubmVySFRNTFxuICAvLyBUaGlzIHJlcXVpcmVzIGEgd3JhcHBlciBlbGVtZW50IGluIElFXG4gIGlubmVySFRNTEJ1ZyA9ICFidWdUZXN0RGl2LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaW5rJykubGVuZ3RoO1xuICBidWdUZXN0RGl2ID0gdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIFdyYXAgbWFwIGZyb20ganF1ZXJ5LlxuICovXG5cbnZhciBtYXAgPSB7XG4gIGxlZ2VuZDogWzEsICc8ZmllbGRzZXQ+JywgJzwvZmllbGRzZXQ+J10sXG4gIHRyOiBbMiwgJzx0YWJsZT48dGJvZHk+JywgJzwvdGJvZHk+PC90YWJsZT4nXSxcbiAgY29sOiBbMiwgJzx0YWJsZT48dGJvZHk+PC90Ym9keT48Y29sZ3JvdXA+JywgJzwvY29sZ3JvdXA+PC90YWJsZT4nXSxcbiAgLy8gZm9yIHNjcmlwdC9saW5rL3N0eWxlIHRhZ3MgdG8gd29yayBpbiBJRTYtOCwgeW91IGhhdmUgdG8gd3JhcFxuICAvLyBpbiBhIGRpdiB3aXRoIGEgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyIGluIGZyb250LCBoYSFcbiAgX2RlZmF1bHQ6IGlubmVySFRNTEJ1ZyA/IFsxLCAnWDxkaXY+JywgJzwvZGl2PiddIDogWzAsICcnLCAnJ11cbn07XG5cbm1hcC50ZCA9XG5tYXAudGggPSBbMywgJzx0YWJsZT48dGJvZHk+PHRyPicsICc8L3RyPjwvdGJvZHk+PC90YWJsZT4nXTtcblxubWFwLm9wdGlvbiA9XG5tYXAub3B0Z3JvdXAgPSBbMSwgJzxzZWxlY3QgbXVsdGlwbGU9XCJtdWx0aXBsZVwiPicsICc8L3NlbGVjdD4nXTtcblxubWFwLnRoZWFkID1cbm1hcC50Ym9keSA9XG5tYXAuY29sZ3JvdXAgPVxubWFwLmNhcHRpb24gPVxubWFwLnRmb290ID0gWzEsICc8dGFibGU+JywgJzwvdGFibGU+J107XG5cbm1hcC5wb2x5bGluZSA9XG5tYXAuZWxsaXBzZSA9XG5tYXAucG9seWdvbiA9XG5tYXAuY2lyY2xlID1cbm1hcC50ZXh0ID1cbm1hcC5saW5lID1cbm1hcC5wYXRoID1cbm1hcC5yZWN0ID1cbm1hcC5nID0gWzEsICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCI+JywnPC9zdmc+J107XG5cbi8qKlxuICogUGFyc2UgYGh0bWxgIGFuZCByZXR1cm4gYSBET00gTm9kZSBpbnN0YW5jZSwgd2hpY2ggY291bGQgYmUgYSBUZXh0Tm9kZSxcbiAqIEhUTUwgRE9NIE5vZGUgb2Ygc29tZSBraW5kICg8ZGl2PiBmb3IgZXhhbXBsZSksIG9yIGEgRG9jdW1lbnRGcmFnbWVudFxuICogaW5zdGFuY2UsIGRlcGVuZGluZyBvbiB0aGUgY29udGVudHMgb2YgdGhlIGBodG1sYCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWwgLSBIVE1MIHN0cmluZyB0byBcImRvbWlmeVwiXG4gKiBAcGFyYW0ge0RvY3VtZW50fSBkb2MgLSBUaGUgYGRvY3VtZW50YCBpbnN0YW5jZSB0byBjcmVhdGUgdGhlIE5vZGUgZm9yXG4gKiBAcmV0dXJuIHtET01Ob2RlfSB0aGUgVGV4dE5vZGUsIERPTSBOb2RlLCBvciBEb2N1bWVudEZyYWdtZW50IGluc3RhbmNlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShodG1sLCBkb2MpIHtcbiAgaWYgKCdzdHJpbmcnICE9IHR5cGVvZiBodG1sKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdHJpbmcgZXhwZWN0ZWQnKTtcblxuICAvLyBkZWZhdWx0IHRvIHRoZSBnbG9iYWwgYGRvY3VtZW50YCBvYmplY3RcbiAgaWYgKCFkb2MpIGRvYyA9IGRvY3VtZW50O1xuXG4gIC8vIHRhZyBuYW1lXG4gIHZhciBtID0gLzwoW1xcdzpdKykvLmV4ZWMoaHRtbCk7XG4gIGlmICghbSkgcmV0dXJuIGRvYy5jcmVhdGVUZXh0Tm9kZShodG1sKTtcblxuICBodG1sID0gaHRtbC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7IC8vIFJlbW92ZSBsZWFkaW5nL3RyYWlsaW5nIHdoaXRlc3BhY2VcblxuICB2YXIgdGFnID0gbVsxXTtcblxuICAvLyBib2R5IHN1cHBvcnRcbiAgaWYgKHRhZyA9PSAnYm9keScpIHtcbiAgICB2YXIgZWwgPSBkb2MuY3JlYXRlRWxlbWVudCgnaHRtbCcpO1xuICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIGVsLnJlbW92ZUNoaWxkKGVsLmxhc3RDaGlsZCk7XG4gIH1cblxuICAvLyB3cmFwIG1hcFxuICB2YXIgd3JhcCA9IG1hcFt0YWddIHx8IG1hcC5fZGVmYXVsdDtcbiAgdmFyIGRlcHRoID0gd3JhcFswXTtcbiAgdmFyIHByZWZpeCA9IHdyYXBbMV07XG4gIHZhciBzdWZmaXggPSB3cmFwWzJdO1xuICB2YXIgZWwgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVsLmlubmVySFRNTCA9IHByZWZpeCArIGh0bWwgKyBzdWZmaXg7XG4gIHdoaWxlIChkZXB0aC0tKSBlbCA9IGVsLmxhc3RDaGlsZDtcblxuICAvLyBvbmUgZWxlbWVudFxuICBpZiAoZWwuZmlyc3RDaGlsZCA9PSBlbC5sYXN0Q2hpbGQpIHtcbiAgICByZXR1cm4gZWwucmVtb3ZlQ2hpbGQoZWwuZmlyc3RDaGlsZCk7XG4gIH1cblxuICAvLyBzZXZlcmFsIGVsZW1lbnRzXG4gIHZhciBmcmFnbWVudCA9IGRvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIHdoaWxlIChlbC5maXJzdENoaWxkKSB7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZWwucmVtb3ZlQ2hpbGQoZWwuZmlyc3RDaGlsZCkpO1xuICB9XG5cbiAgcmV0dXJuIGZyYWdtZW50O1xufVxuXG59LHt9XSwzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIGdldCBzdWNjZXNzZnVsIGNvbnRyb2wgZnJvbSBmb3JtIGFuZCBhc3NlbWJsZSBpbnRvIG9iamVjdFxuLy8gaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDQwMS9pbnRlcmFjdC9mb3Jtcy5odG1sI2gtMTcuMTMuMlxuXG4vLyB0eXBlcyB3aGljaCBpbmRpY2F0ZSBhIHN1Ym1pdCBhY3Rpb24gYW5kIGFyZSBub3Qgc3VjY2Vzc2Z1bCBjb250cm9sc1xuLy8gdGhlc2Ugd2lsbCBiZSBpZ25vcmVkXG52YXIga19yX3N1Ym1pdHRlciA9IC9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaTtcblxuLy8gbm9kZSBuYW1lcyB3aGljaCBjb3VsZCBiZSBzdWNjZXNzZnVsIGNvbnRyb2xzXG52YXIga19yX3N1Y2Nlc3NfY29udHJscyA9IC9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtcblxuLy8gTWF0Y2hlcyBicmFja2V0IG5vdGF0aW9uLlxudmFyIGJyYWNrZXRzID0gLyhcXFtbXlxcW1xcXV0qXFxdKS9nO1xuXG4vLyBzZXJpYWxpemVzIGZvcm0gZmllbGRzXG4vLyBAcGFyYW0gZm9ybSBNVVNUIGJlIGFuIEhUTUxGb3JtIGVsZW1lbnRcbi8vIEBwYXJhbSBvcHRpb25zIGlzIGFuIG9wdGlvbmFsIGFyZ3VtZW50IHRvIGNvbmZpZ3VyZSB0aGUgc2VyaWFsaXphdGlvbi4gRGVmYXVsdCBvdXRwdXRcbi8vIHdpdGggbm8gb3B0aW9ucyBzcGVjaWZpZWQgaXMgYSB1cmwgZW5jb2RlZCBzdHJpbmdcbi8vICAgIC0gaGFzaDogW3RydWUgfCBmYWxzZV0gQ29uZmlndXJlIHRoZSBvdXRwdXQgdHlwZS4gSWYgdHJ1ZSwgdGhlIG91dHB1dCB3aWxsXG4vLyAgICBiZSBhIGpzIG9iamVjdC5cbi8vICAgIC0gc2VyaWFsaXplcjogW2Z1bmN0aW9uXSBPcHRpb25hbCBzZXJpYWxpemVyIGZ1bmN0aW9uIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IG9uZS5cbi8vICAgIFRoZSBmdW5jdGlvbiB0YWtlcyAzIGFyZ3VtZW50cyAocmVzdWx0LCBrZXksIHZhbHVlKSBhbmQgc2hvdWxkIHJldHVybiBuZXcgcmVzdWx0XG4vLyAgICBoYXNoIGFuZCB1cmwgZW5jb2RlZCBzdHIgc2VyaWFsaXplcnMgYXJlIHByb3ZpZGVkIHdpdGggdGhpcyBtb2R1bGVcbi8vICAgIC0gZGlzYWJsZWQ6IFt0cnVlIHwgZmFsc2VdLiBJZiB0cnVlIHNlcmlhbGl6ZSBkaXNhYmxlZCBmaWVsZHMuXG4vLyAgICAtIGVtcHR5OiBbdHJ1ZSB8IGZhbHNlXS4gSWYgdHJ1ZSBzZXJpYWxpemUgZW1wdHkgZmllbGRzXG5mdW5jdGlvbiBzZXJpYWxpemUoZm9ybSwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPSAnb2JqZWN0Jykge1xuICAgICAgICBvcHRpb25zID0geyBoYXNoOiAhIW9wdGlvbnMgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAob3B0aW9ucy5oYXNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb3B0aW9ucy5oYXNoID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gKG9wdGlvbnMuaGFzaCkgPyB7fSA6ICcnO1xuICAgIHZhciBzZXJpYWxpemVyID0gb3B0aW9ucy5zZXJpYWxpemVyIHx8ICgob3B0aW9ucy5oYXNoKSA/IGhhc2hfc2VyaWFsaXplciA6IHN0cl9zZXJpYWxpemUpO1xuXG4gICAgdmFyIGVsZW1lbnRzID0gZm9ybSAmJiBmb3JtLmVsZW1lbnRzID8gZm9ybS5lbGVtZW50cyA6IFtdO1xuXG4gICAgLy9PYmplY3Qgc3RvcmUgZWFjaCByYWRpbyBhbmQgc2V0IGlmIGl0J3MgZW1wdHkgb3Igbm90XG4gICAgdmFyIHJhZGlvX3N0b3JlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgIGZvciAodmFyIGk9MCA7IGk8ZWxlbWVudHMubGVuZ3RoIDsgKytpKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZWxlbWVudHNbaV07XG5cbiAgICAgICAgLy8gaW5nb3JlIGRpc2FibGVkIGZpZWxkc1xuICAgICAgICBpZiAoKCFvcHRpb25zLmRpc2FibGVkICYmIGVsZW1lbnQuZGlzYWJsZWQpIHx8ICFlbGVtZW50Lm5hbWUpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlnbm9yZSBhbnlodGluZyB0aGF0IGlzIG5vdCBjb25zaWRlcmVkIGEgc3VjY2VzcyBmaWVsZFxuICAgICAgICBpZiAoIWtfcl9zdWNjZXNzX2NvbnRybHMudGVzdChlbGVtZW50Lm5vZGVOYW1lKSB8fFxuICAgICAgICAgICAga19yX3N1Ym1pdHRlci50ZXN0KGVsZW1lbnQudHlwZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGtleSA9IGVsZW1lbnQubmFtZTtcbiAgICAgICAgdmFyIHZhbCA9IGVsZW1lbnQudmFsdWU7XG5cbiAgICAgICAgLy8gd2UgY2FuJ3QganVzdCB1c2UgZWxlbWVudC52YWx1ZSBmb3IgY2hlY2tib3hlcyBjYXVzZSBzb21lIGJyb3dzZXJzIGxpZSB0byB1c1xuICAgICAgICAvLyB0aGV5IHNheSBcIm9uXCIgZm9yIHZhbHVlIHdoZW4gdGhlIGJveCBpc24ndCBjaGVja2VkXG4gICAgICAgIGlmICgoZWxlbWVudC50eXBlID09PSAnY2hlY2tib3gnIHx8IGVsZW1lbnQudHlwZSA9PT0gJ3JhZGlvJykgJiYgIWVsZW1lbnQuY2hlY2tlZCkge1xuICAgICAgICAgICAgdmFsID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2Ugd2FudCBlbXB0eSBlbGVtZW50c1xuICAgICAgICBpZiAob3B0aW9ucy5lbXB0eSkge1xuICAgICAgICAgICAgLy8gZm9yIGNoZWNrYm94XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnY2hlY2tib3gnICYmICFlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZm9yIHJhZGlvXG4gICAgICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyYWRpb19zdG9yZVtlbGVtZW50Lm5hbWVdICYmICFlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmFkaW9fc3RvcmVbZWxlbWVudC5uYW1lXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmFkaW9fc3RvcmVbZWxlbWVudC5uYW1lXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiBvcHRpb25zIGVtcHR5IGlzIHRydWUsIGNvbnRpbnVlIG9ubHkgaWYgaXRzIHJhZGlvXG4gICAgICAgICAgICBpZiAoIXZhbCAmJiBlbGVtZW50LnR5cGUgPT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gdmFsdWUtbGVzcyBmaWVsZHMgYXJlIGlnbm9yZWQgdW5sZXNzIG9wdGlvbnMuZW1wdHkgaXMgdHJ1ZVxuICAgICAgICAgICAgaWYgKCF2YWwpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG11bHRpIHNlbGVjdCBib3hlc1xuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnc2VsZWN0LW11bHRpcGxlJykge1xuICAgICAgICAgICAgdmFsID0gW107XG5cbiAgICAgICAgICAgIHZhciBzZWxlY3RPcHRpb25zID0gZWxlbWVudC5vcHRpb25zO1xuICAgICAgICAgICAgdmFyIGlzU2VsZWN0ZWRPcHRpb25zID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKHZhciBqPTAgOyBqPHNlbGVjdE9wdGlvbnMubGVuZ3RoIDsgKytqKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbiA9IHNlbGVjdE9wdGlvbnNbal07XG4gICAgICAgICAgICAgICAgdmFyIGFsbG93ZWRFbXB0eSA9IG9wdGlvbnMuZW1wdHkgJiYgIW9wdGlvbi52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgaGFzVmFsdWUgPSAob3B0aW9uLnZhbHVlIHx8IGFsbG93ZWRFbXB0eSk7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCAmJiBoYXNWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkT3B0aW9ucyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdXNpbmcgYSBoYXNoIHNlcmlhbGl6ZXIgYmUgc3VyZSB0byBhZGQgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvcnJlY3Qgbm90YXRpb24gZm9yIGFuIGFycmF5IGluIHRoZSBtdWx0aS1zZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgLy8gY29udGV4dC4gSGVyZSB0aGUgbmFtZSBhdHRyaWJ1dGUgb24gdGhlIHNlbGVjdCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIC8vIG1pZ2h0IGJlIG1pc3NpbmcgdGhlIHRyYWlsaW5nIGJyYWNrZXQgcGFpci4gQm90aCBuYW1lc1xuICAgICAgICAgICAgICAgICAgICAvLyBcImZvb1wiIGFuZCBcImZvb1tdXCIgc2hvdWxkIGJlIGFycmF5cy5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuaGFzaCAmJiBrZXkuc2xpY2Uoa2V5Lmxlbmd0aCAtIDIpICE9PSAnW10nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBzZXJpYWxpemVyKHJlc3VsdCwga2V5ICsgJ1tdJywgb3B0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHNlcmlhbGl6ZXIocmVzdWx0LCBrZXksIG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNlcmlhbGl6ZSBpZiBubyBzZWxlY3RlZCBvcHRpb25zIGFuZCBvcHRpb25zLmVtcHR5IGlzIHRydWVcbiAgICAgICAgICAgIGlmICghaXNTZWxlY3RlZE9wdGlvbnMgJiYgb3B0aW9ucy5lbXB0eSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHNlcmlhbGl6ZXIocmVzdWx0LCBrZXksICcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQgPSBzZXJpYWxpemVyKHJlc3VsdCwga2V5LCB2YWwpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBhbGwgZW1wdHkgcmFkaW8gYnV0dG9ucyBhbmQgc2VyaWFsaXplIHRoZW0gd2l0aCBrZXk9XCJcIlxuICAgIGlmIChvcHRpb25zLmVtcHR5KSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiByYWRpb19zdG9yZSkge1xuICAgICAgICAgICAgaWYgKCFyYWRpb19zdG9yZVtrZXldKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gc2VyaWFsaXplcihyZXN1bHQsIGtleSwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcGFyc2Vfa2V5cyhzdHJpbmcpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciBwcmVmaXggPSAvXihbXlxcW1xcXV0qKS87XG4gICAgdmFyIGNoaWxkcmVuID0gbmV3IFJlZ0V4cChicmFja2V0cyk7XG4gICAgdmFyIG1hdGNoID0gcHJlZml4LmV4ZWMoc3RyaW5nKTtcblxuICAgIGlmIChtYXRjaFsxXSkge1xuICAgICAgICBrZXlzLnB1c2gobWF0Y2hbMV0pO1xuICAgIH1cblxuICAgIHdoaWxlICgobWF0Y2ggPSBjaGlsZHJlbi5leGVjKHN0cmluZykpICE9PSBudWxsKSB7XG4gICAgICAgIGtleXMucHVzaChtYXRjaFsxXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIGhhc2hfYXNzaWduKHJlc3VsdCwga2V5cywgdmFsdWUpIHtcbiAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgdmFyIGtleSA9IGtleXMuc2hpZnQoKTtcbiAgICB2YXIgYmV0d2VlbiA9IGtleS5tYXRjaCgvXlxcWyguKz8pXFxdJC8pO1xuXG4gICAgaWYgKGtleSA9PT0gJ1tdJykge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQgfHwgW107XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goaGFzaF9hc3NpZ24obnVsbCwga2V5cywgdmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRoaXMgbWlnaHQgYmUgdGhlIHJlc3VsdCBvZiBiYWQgbmFtZSBhdHRyaWJ1dGVzIGxpa2UgXCJbXVtmb29dXCIsXG4gICAgICAgICAgICAvLyBpbiB0aGlzIGNhc2UgdGhlIG9yaWdpbmFsIGByZXN1bHRgIG9iamVjdCB3aWxsIGFscmVhZHkgYmVcbiAgICAgICAgICAgIC8vIGFzc2lnbmVkIHRvIGFuIG9iamVjdCBsaXRlcmFsLiBSYXRoZXIgdGhhbiBjb2VyY2UgdGhlIG9iamVjdCB0b1xuICAgICAgICAgICAgLy8gYW4gYXJyYXksIG9yIGNhdXNlIGFuIGV4Y2VwdGlvbiB0aGUgYXR0cmlidXRlIFwiX3ZhbHVlc1wiIGlzXG4gICAgICAgICAgICAvLyBhc3NpZ25lZCBhcyBhbiBhcnJheS5cbiAgICAgICAgICAgIHJlc3VsdC5fdmFsdWVzID0gcmVzdWx0Ll92YWx1ZXMgfHwgW107XG4gICAgICAgICAgICByZXN1bHQuX3ZhbHVlcy5wdXNoKGhhc2hfYXNzaWduKG51bGwsIGtleXMsIHZhbHVlKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8vIEtleSBpcyBhbiBhdHRyaWJ1dGUgbmFtZSBhbmQgY2FuIGJlIGFzc2lnbmVkIGRpcmVjdGx5LlxuICAgIGlmICghYmV0d2Vlbikge1xuICAgICAgICByZXN1bHRba2V5XSA9IGhhc2hfYXNzaWduKHJlc3VsdFtrZXldLCBrZXlzLCB2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgc3RyaW5nID0gYmV0d2VlblsxXTtcbiAgICAgICAgLy8gK3ZhciBjb252ZXJ0cyB0aGUgdmFyaWFibGUgaW50byBhIG51bWJlclxuICAgICAgICAvLyBiZXR0ZXIgdGhhbiBwYXJzZUludCBiZWNhdXNlIGl0IGRvZXNuJ3QgdHJ1bmNhdGUgYXdheSB0cmFpbGluZ1xuICAgICAgICAvLyBsZXR0ZXJzIGFuZCBhY3R1YWxseSBmYWlscyBpZiB3aG9sZSB0aGluZyBpcyBub3QgYSBudW1iZXJcbiAgICAgICAgdmFyIGluZGV4ID0gK3N0cmluZztcblxuICAgICAgICAvLyBJZiB0aGUgY2hhcmFjdGVycyBiZXR3ZWVuIHRoZSBicmFja2V0cyBpcyBub3QgYSBudW1iZXIgaXQgaXMgYW5cbiAgICAgICAgLy8gYXR0cmlidXRlIG5hbWUgYW5kIGNhbiBiZSBhc3NpZ25lZCBkaXJlY3RseS5cbiAgICAgICAgaWYgKGlzTmFOKGluZGV4KSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0IHx8IHt9O1xuICAgICAgICAgICAgcmVzdWx0W3N0cmluZ10gPSBoYXNoX2Fzc2lnbihyZXN1bHRbc3RyaW5nXSwga2V5cywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0IHx8IFtdO1xuICAgICAgICAgICAgcmVzdWx0W2luZGV4XSA9IGhhc2hfYXNzaWduKHJlc3VsdFtpbmRleF0sIGtleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIE9iamVjdC9oYXNoIGVuY29kaW5nIHNlcmlhbGl6ZXIuXG5mdW5jdGlvbiBoYXNoX3NlcmlhbGl6ZXIocmVzdWx0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIG1hdGNoZXMgPSBrZXkubWF0Y2goYnJhY2tldHMpO1xuXG4gICAgLy8gSGFzIGJyYWNrZXRzPyBVc2UgdGhlIHJlY3Vyc2l2ZSBhc3NpZ25tZW50IGZ1bmN0aW9uIHRvIHdhbGsgdGhlIGtleXMsXG4gICAgLy8gY29uc3RydWN0IGFueSBtaXNzaW5nIG9iamVjdHMgaW4gdGhlIHJlc3VsdCB0cmVlIGFuZCBtYWtlIHRoZSBhc3NpZ25tZW50XG4gICAgLy8gYXQgdGhlIGVuZCBvZiB0aGUgY2hhaW4uXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgdmFyIGtleXMgPSBwYXJzZV9rZXlzKGtleSk7XG4gICAgICAgIGhhc2hfYXNzaWduKHJlc3VsdCwga2V5cywgdmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gTm9uIGJyYWNrZXQgbm90YXRpb24gY2FuIG1ha2UgYXNzaWdubWVudHMgZGlyZWN0bHkuXG4gICAgICAgIHZhciBleGlzdGluZyA9IHJlc3VsdFtrZXldO1xuXG4gICAgICAgIC8vIElmIHRoZSB2YWx1ZSBoYXMgYmVlbiBhc3NpZ25lZCBhbHJlYWR5IChmb3IgaW5zdGFuY2Ugd2hlbiBhIHJhZGlvIGFuZFxuICAgICAgICAvLyBhIGNoZWNrYm94IGhhdmUgdGhlIHNhbWUgbmFtZSBhdHRyaWJ1dGUpIGNvbnZlcnQgdGhlIHByZXZpb3VzIHZhbHVlXG4gICAgICAgIC8vIGludG8gYW4gYXJyYXkgYmVmb3JlIHB1c2hpbmcgaW50byBpdC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gTk9URTogSWYgdGhpcyByZXF1aXJlbWVudCB3ZXJlIHJlbW92ZWQgYWxsIGhhc2ggY3JlYXRpb24gYW5kXG4gICAgICAgIC8vIGFzc2lnbm1lbnQgY291bGQgZ28gdGhyb3VnaCBgaGFzaF9hc3NpZ25gLlxuICAgICAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShleGlzdGluZykpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IFsgZXhpc3RpbmcgXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gdXJsZm9ybSBlbmNvZGluZyBzZXJpYWxpemVyXG5mdW5jdGlvbiBzdHJfc2VyaWFsaXplKHJlc3VsdCwga2V5LCB2YWx1ZSkge1xuICAgIC8vIGVuY29kZSBuZXdsaW5lcyBhcyBcXHJcXG4gY2F1c2UgdGhlIGh0bWwgc3BlYyBzYXlzIHNvXG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC8oXFxyKT9cXG4vZywgJ1xcclxcbicpO1xuICAgIHZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblxuICAgIC8vIHNwYWNlcyBzaG91bGQgYmUgJysnIHJhdGhlciB0aGFuICclMjAnLlxuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvJTIwL2csICcrJyk7XG4gICAgcmV0dXJuIHJlc3VsdCArIChyZXN1bHQgPyAnJicgOiAnJykgKyBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNlcmlhbGl6ZTtcblxufSx7fV0sNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZG9taWZ5ID0gcmVxdWlyZSgnZG9taWZ5JylcclxudmFyIHNlcmlhbGl6ZSA9IHJlcXVpcmUoJ2Zvcm0tc2VyaWFsaXplJylcclxudmFyIGNsb25lRGVlcCA9IHJlcXVpcmUoJ2RlZXAtY2xvbmUtc2ltcGxlJylcclxuXHJcbi8vIEJ1aWxkIERPTSBlbGVtZW50cyBmb3IgdGhlIHN0cnVjdHVyZSBvZiB0aGUgZGlhbG9nXHJcbnZhciBidWlsZERpYWxvZ0Zvcm0gPSBmdW5jdGlvbiBidWlsZERpYWxvZ0Zvcm0gKG9wdGlvbnMpIHtcclxuICB2YXIgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxyXG4gIGZvcm0uY2xhc3NMaXN0LmFkZCgndmV4LWRpYWxvZy1mb3JtJylcclxuXHJcbiAgdmFyIG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgndmV4LWRpYWxvZy1tZXNzYWdlJylcclxuICBtZXNzYWdlLmFwcGVuZENoaWxkKG9wdGlvbnMubWVzc2FnZSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlID8gb3B0aW9ucy5tZXNzYWdlIDogZG9taWZ5KG9wdGlvbnMubWVzc2FnZSkpXHJcblxyXG4gIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZCgndmV4LWRpYWxvZy1pbnB1dCcpXHJcbiAgaW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9ucy5pbnB1dCBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlID8gb3B0aW9ucy5pbnB1dCA6IGRvbWlmeShvcHRpb25zLmlucHV0KSlcclxuXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlKVxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpXHJcblxyXG4gIHJldHVybiBmb3JtXHJcbn1cclxuXHJcbi8vIFRha2UgYW4gYXJyYXkgb2YgYnV0dG9ucyAoc2VlIHRoZSBkZWZhdWx0IGJ1dHRvbnMgYmVsb3cpIGFuZCB0dXJuIHRoZW0gaW50byBET00gZWxlbWVudHNcclxudmFyIGJ1dHRvbnNUb0RPTSA9IGZ1bmN0aW9uIGJ1dHRvbnNUb0RPTSAoYnV0dG9ucykge1xyXG4gIHZhciBkb21CdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBkb21CdXR0b25zLmNsYXNzTGlzdC5hZGQoJ3ZleC1kaWFsb2ctYnV0dG9ucycpXHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGJ1dHRvbiA9IGJ1dHRvbnNbaV1cclxuICAgIHZhciBkb21CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgZG9tQnV0dG9uLnR5cGUgPSBidXR0b24udHlwZVxyXG4gICAgZG9tQnV0dG9uLnRleHRDb250ZW50ID0gYnV0dG9uLnRleHRcclxuICAgIGRvbUJ1dHRvbi5jbGFzc05hbWUgPSBidXR0b24uY2xhc3NOYW1lXHJcbiAgICBkb21CdXR0b24uY2xhc3NMaXN0LmFkZCgndmV4LWRpYWxvZy1idXR0b24nKVxyXG4gICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgZG9tQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3ZleC1maXJzdCcpXHJcbiAgICB9IGVsc2UgaWYgKGkgPT09IGJ1dHRvbnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICBkb21CdXR0b24uY2xhc3NMaXN0LmFkZCgndmV4LWxhc3QnKVxyXG4gICAgfVxyXG4gICAgLy8gQXR0YWNoIGNsaWNrIGxpc3RlbmVyIHRvIGJ1dHRvbiB3aXRoIGNsb3N1cmVcclxuICAgIChmdW5jdGlvbiAoYnV0dG9uKSB7XHJcbiAgICAgIGRvbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGJ1dHRvbi5jbGljaykge1xyXG4gICAgICAgICAgYnV0dG9uLmNsaWNrLmNhbGwodGhpcywgZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0uYmluZCh0aGlzKSlcclxuICAgIH0uYmluZCh0aGlzKShidXR0b24pKVxyXG5cclxuICAgIGRvbUJ1dHRvbnMuYXBwZW5kQ2hpbGQoZG9tQnV0dG9uKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRvbUJ1dHRvbnNcclxufVxyXG5cclxudmFyIHBsdWdpbiA9IGZ1bmN0aW9uIHBsdWdpbiAodmV4KSB7XHJcbiAgLy8gRGVmaW5lIHRoZSBBUEkgZmlyc3RcclxuICB2YXIgZGlhbG9nID0ge1xyXG4gICAgLy8gUGx1Z2luIG5hbWVcclxuICAgIG5hbWU6ICdkaWFsb2cnLFxyXG5cclxuICAgIC8vIE9wZW5cclxuICAgIG9wZW46IGZ1bmN0aW9uIG9wZW4gKG9wdHMpIHtcclxuICAgICAgdmFyIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBjbG9uZURlZXAodGhpcy5kZWZhdWx0T3B0aW9ucyksIG9wdHMpXHJcblxyXG4gICAgICAvLyBgbWVzc2FnZWAgaXMgdW5zYWZlIGludGVybmFsbHksIHNvIHRyYW5zbGF0ZVxyXG4gICAgICAvLyBzYWZlIGRlZmF1bHQ6IEhUTUwtZXNjYXBlIHRoZSBtZXNzYWdlIGJlZm9yZSBwYXNzaW5nIGl0IHRocm91Z2hcclxuICAgICAgaWYgKG9wdGlvbnMudW5zYWZlTWVzc2FnZSAmJiAhb3B0aW9ucy5tZXNzYWdlKSB7XHJcbiAgICAgICAgb3B0aW9ucy5tZXNzYWdlID0gb3B0aW9ucy51bnNhZmVNZXNzYWdlXHJcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5tZXNzYWdlKSB7XHJcbiAgICAgICAgb3B0aW9ucy5tZXNzYWdlID0gdmV4Ll9lc2NhcGVIdG1sKG9wdGlvbnMubWVzc2FnZSlcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQnVpbGQgdGhlIGZvcm0gZnJvbSB0aGUgb3B0aW9uc1xyXG4gICAgICB2YXIgZm9ybSA9IG9wdGlvbnMudW5zYWZlQ29udGVudCA9IGJ1aWxkRGlhbG9nRm9ybShvcHRpb25zKVxyXG5cclxuICAgICAgLy8gT3BlbiB0aGUgZGlhbG9nXHJcbiAgICAgIHZhciBkaWFsb2dJbnN0YW5jZSA9IHZleC5vcGVuKG9wdGlvbnMpXHJcblxyXG4gICAgICBpZiAob3B0aW9ucy55ZXNUZXh0ICE9PSAnJykge1xyXG4gICAgICAgIG9wdGlvbnMuYnV0dG9uc1swXS50ZXh0ID0gb3B0aW9ucy55ZXNUZXh0XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChvcHRpb25zLm5vVGV4dCAhPT0gJycpIHtcclxuICAgICAgICBvcHRpb25zLmJ1dHRvbnNbMV0udGV4dCA9IG9wdGlvbnMubm9UZXh0XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFF1aWNrIGNvbW1lbnQgLSB0aGVzZSBvcHRpb25zIGFuZCBhcHBlbmRpbmcgYnV0dG9ucyBhbmQgZXZlcnl0aGluZ1xyXG4gICAgICAvLyB3b3VsZCBwcmVmZXJhYmx5IGJlIGRvbmUgX2JlZm9yZV8gb3BlbmluZyB0aGUgZGlhbG9nLiBIb3dldmVyLCBzaW5jZVxyXG4gICAgICAvLyB0aGV5IHJlbHkgb24gdGhlIGNvbnRleHQgb2YgdGhlIHZleCBpbnN0YW5jZSwgd2UgaGF2ZSB0byBkbyB0aGVtXHJcbiAgICAgIC8vIGFmdGVyLiBBIHBvdGVudGlhbCBmdXR1cmUgZml4IHdvdWxkIGJlIHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlblxyXG4gICAgICAvLyBhIFwiY3JlYXRlZFwiIHZleCBpbnN0YW5jZSBhbmQgYW4gXCJvcGVuZWRcIiB2ZXggaW5zdGFuY2UsIHNvIGFueSBhY3Rpb25zXHJcbiAgICAgIC8vIHRoYXQgcmVseSBvbiB0aGUgc3BlY2lmaWMgY29udGV4dCBvZiB0aGUgaW5zdGFuY2UgY2FuIGRvIHRoZWlyIHN0dWZmXHJcbiAgICAgIC8vIGJlZm9yZSBvcGVuaW5nIHRoZSBkaWFsb2cgb24gdGhlIHBhZ2UuXHJcblxyXG4gICAgICAvLyBPdmVycmlkZSB0aGUgYmVmb3JlIGNsb3NlIGNhbGxiYWNrIHRvIGFsc28gcGFzcyB0aGUgdmFsdWUgb2YgdGhlIGZvcm1cclxuICAgICAgdmFyIGJlZm9yZUNsb3NlID0gb3B0aW9ucy5iZWZvcmVDbG9zZSAmJiBvcHRpb25zLmJlZm9yZUNsb3NlLmJpbmQoZGlhbG9nSW5zdGFuY2UpXHJcbiAgICAgIGRpYWxvZ0luc3RhbmNlLm9wdGlvbnMuYmVmb3JlQ2xvc2UgPSBmdW5jdGlvbiBkaWFsb2dCZWZvcmVDbG9zZSAoKSB7XHJcbiAgICAgICAgLy8gT25seSBjYWxsIHRoZSBjYWxsYmFjayBvbmNlIC0gd2hlbiB0aGUgdmFsaWRhdGlvbiBpbiBiZWZvcmVDbG9zZSwgaWYgcHJlc2VudCwgaXMgdHJ1ZVxyXG4gICAgICAgIHZhciBzaG91bGRDbG9zZSA9IGJlZm9yZUNsb3NlID8gYmVmb3JlQ2xvc2UoKSA6IHRydWVcclxuICAgICAgICBpZiAoc2hvdWxkQ2xvc2UpIHtcclxuICAgICAgICAgIG9wdGlvbnMuY2FsbGJhY2sodGhpcy52YWx1ZSB8fCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmV0dXJuIHRoZSByZXN1bHQgb2YgYmVmb3JlQ2xvc2UoKSB0byB2ZXhcclxuICAgICAgICByZXR1cm4gc2hvdWxkQ2xvc2VcclxuICAgICAgfS5iaW5kKGRpYWxvZ0luc3RhbmNlKVxyXG5cclxuICAgICAgLy8gQXBwZW5kIGJ1dHRvbnMgdG8gZm9ybSB3aXRoIGNvcnJlY3QgY29udGV4dFxyXG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbnNUb0RPTS5jYWxsKGRpYWxvZ0luc3RhbmNlLCBvcHRpb25zLmJ1dHRvbnMpKVxyXG5cclxuICAgICAgLy8gQXR0YWNoIGZvcm0gdG8gaW5zdGFuY2VcclxuICAgICAgZGlhbG9nSW5zdGFuY2UuZm9ybSA9IGZvcm1cclxuXHJcbiAgICAgIC8vIEFkZCBzdWJtaXQgbGlzdGVuZXIgdG8gZm9ybVxyXG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9wdGlvbnMub25TdWJtaXQuYmluZChkaWFsb2dJbnN0YW5jZSkpXHJcblxyXG4gICAgICAvLyBPcHRpb25hbGx5IGZvY3VzIHRoZSBmaXJzdCBpbnB1dCBpbiB0aGUgZm9ybVxyXG4gICAgICBpZiAob3B0aW9ucy5mb2N1c0ZpcnN0SW5wdXQpIHtcclxuICAgICAgICB2YXIgZWwgPSBkaWFsb2dJbnN0YW5jZS5jb250ZW50RWwucXVlcnlTZWxlY3RvcignYnV0dG9uLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpXHJcbiAgICAgICAgaWYgKGVsKSB7XHJcbiAgICAgICAgICBlbC5mb2N1cygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBGb3IgY2hhaW5pbmdcclxuICAgICAgcmV0dXJuIGRpYWxvZ0luc3RhbmNlXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIEFsZXJ0XHJcbiAgICBhbGVydDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgLy8gQWxsb3cgc3RyaW5nIGFzIG1lc3NhZ2VcclxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBvcHRpb25zXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBjbG9uZURlZXAodGhpcy5kZWZhdWx0T3B0aW9ucyksIGNsb25lRGVlcCh0aGlzLmRlZmF1bHRBbGVydE9wdGlvbnMpLCBvcHRpb25zKVxyXG4gICAgICByZXR1cm4gdGhpcy5vcGVuKG9wdGlvbnMpXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIENvbmZpcm1cclxuICAgIGNvbmZpcm06IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIG9wdGlvbnMuY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpYWxvZy5jb25maXJtKG9wdGlvbnMpIHJlcXVpcmVzIG9wdGlvbnMuY2FsbGJhY2suJylcclxuICAgICAgfVxyXG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgY2xvbmVEZWVwKHRoaXMuZGVmYXVsdE9wdGlvbnMpLCBjbG9uZURlZXAodGhpcy5kZWZhdWx0Q29uZmlybU9wdGlvbnMpLCBvcHRpb25zKVxyXG4gICAgICByZXR1cm4gdGhpcy5vcGVuKG9wdGlvbnMpXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFByb21wdFxyXG4gICAgcHJvbXB0OiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnIHx8IHR5cGVvZiBvcHRpb25zLmNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaWFsb2cucHJvbXB0KG9wdGlvbnMpIHJlcXVpcmVzIG9wdGlvbnMuY2FsbGJhY2suJylcclxuICAgICAgfVxyXG4gICAgICB2YXIgZGVmYXVsdHMgPSBPYmplY3QuYXNzaWduKHt9LCBjbG9uZURlZXAodGhpcy5kZWZhdWx0T3B0aW9ucyksIGNsb25lRGVlcCh0aGlzLmRlZmF1bHRQcm9tcHRPcHRpb25zKSlcclxuICAgICAgdmFyIGR5bmFtaWNEZWZhdWx0cyA9IHtcclxuICAgICAgICB1bnNhZmVNZXNzYWdlOiAnPGxhYmVsIGZvcj1cInZleFwiPicgKyB2ZXguX2VzY2FwZUh0bWwob3B0aW9ucy5sYWJlbCB8fCBkZWZhdWx0cy5sYWJlbCkgKyAnPC9sYWJlbD4nLFxyXG4gICAgICAgIGlucHV0OiAnPGlucHV0IG5hbWU9XCJ2ZXhcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwidmV4LWRpYWxvZy1wcm9tcHQtaW5wdXRcIiBwbGFjZWhvbGRlcj1cIicgKyB2ZXguX2VzY2FwZUh0bWwob3B0aW9ucy5wbGFjZWhvbGRlciB8fCBkZWZhdWx0cy5wbGFjZWhvbGRlcikgKyAnXCIgdmFsdWU9XCInICsgdmV4Ll9lc2NhcGVIdG1sKG9wdGlvbnMudmFsdWUgfHwgZGVmYXVsdHMudmFsdWUpICsgJ1wiIC8+J1xyXG4gICAgICB9XHJcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBkeW5hbWljRGVmYXVsdHMsIG9wdGlvbnMpXHJcbiAgICAgIC8vIFBsdWNrIHRoZSB2YWx1ZSBvZiB0aGUgXCJ2ZXhcIiBpbnB1dCBmaWVsZCBhcyB0aGUgcmV0dXJuIHZhbHVlIGZvciBwcm9tcHQncyBjYWxsYmFja1xyXG4gICAgICAvLyBNb3JlIGNsb3NlbHkgbWltaWNzIFwid2luZG93LnByb21wdFwiIGluIHRoYXQgYSBzaW5nbGUgc3RyaW5nIGlzIHJldHVybmVkXHJcbiAgICAgIHZhciBjYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2tcclxuICAgICAgb3B0aW9ucy5jYWxsYmFjayA9IGZ1bmN0aW9uIHByb21wdENhbGxiYWNrICh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKVxyXG4gICAgICAgICAgdmFsdWUgPSBrZXlzLmxlbmd0aCA/IHZhbHVlW2tleXNbMF1dIDogJydcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGJhY2sodmFsdWUpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMub3BlbihvcHRpb25zKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gTm93IGRlZmluZSBhbnkgYWRkaXRpb25hbCBkYXRhIHRoYXQncyBub3QgdGhlIGRpcmVjdCBkaWFsb2cgQVBJXHJcbiAgZGlhbG9nLmJ1dHRvbnMgPSB7XHJcbiAgICBZRVM6IHtcclxuICAgICAgdGV4dDogJ09LJyxcclxuICAgICAgdHlwZTogJ3N1Ym1pdCcsXHJcbiAgICAgIGNsYXNzTmFtZTogJ3ZleC1kaWFsb2ctYnV0dG9uLXByaW1hcnknLFxyXG4gICAgICBjbGljazogZnVuY3Rpb24geWVzQ2xpY2sgKCkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgTk86IHtcclxuICAgICAgdGV4dDogJ0NhbmNlbCcsXHJcbiAgICAgIHR5cGU6ICdidXR0b24nLFxyXG4gICAgICBjbGFzc05hbWU6ICd2ZXgtZGlhbG9nLWJ1dHRvbi1zZWNvbmRhcnknLFxyXG4gICAgICBjbGljazogZnVuY3Rpb24gbm9DbGljayAoKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5jbG9zZSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpYWxvZy5kZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7fSxcclxuICAgIGFmdGVyT3BlbjogZnVuY3Rpb24gKCkge30sXHJcbiAgICBtZXNzYWdlOiAnJyxcclxuICAgIGlucHV0OiAnJyxcclxuICAgIHllc1RleHQ6ICcnLFxyXG4gICAgbm9UZXh0OiAnJyxcclxuICAgIGJ1dHRvbnM6IFtcclxuICAgICAgZGlhbG9nLmJ1dHRvbnMuWUVTLFxyXG4gICAgICBkaWFsb2cuYnV0dG9ucy5OT1xyXG4gICAgXSxcclxuICAgIHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXHJcbiAgICBvblN1Ym1pdDogZnVuY3Rpb24gb25EaWFsb2dTdWJtaXQgKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW5wdXQpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gc2VyaWFsaXplKHRoaXMuZm9ybSwgeyBoYXNoOiB0cnVlIH0pXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMuY2xvc2UoKVxyXG4gICAgfSxcclxuICAgIGZvY3VzRmlyc3RJbnB1dDogdHJ1ZVxyXG4gIH1cclxuXHJcbiAgZGlhbG9nLmRlZmF1bHRBbGVydE9wdGlvbnMgPSB7XHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgIGRpYWxvZy5idXR0b25zLllFU1xyXG4gICAgXVxyXG4gIH1cclxuXHJcbiAgZGlhbG9nLmRlZmF1bHRQcm9tcHRPcHRpb25zID0ge1xyXG4gICAgbGFiZWw6ICdQcm9tcHQ6JyxcclxuICAgIHBsYWNlaG9sZGVyOiAnJyxcclxuICAgIHZhbHVlOiAnJ1xyXG4gIH1cclxuXHJcbiAgZGlhbG9nLmRlZmF1bHRDb25maXJtT3B0aW9ucyA9IHt9XHJcblxyXG4gIHJldHVybiBkaWFsb2dcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBwbHVnaW5cclxuXG59LHtcImRlZXAtY2xvbmUtc2ltcGxlXCI6MSxcImRvbWlmeVwiOjIsXCJmb3JtLXNlcmlhbGl6ZVwiOjN9XX0se30sWzRdKSg0KVxufSk7IiwiKGZ1bmN0aW9uKGYpe2lmKHR5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIiYmdHlwZW9mIG1vZHVsZSE9PVwidW5kZWZpbmVkXCIpe21vZHVsZS5leHBvcnRzPWYoKX1lbHNlIGlmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShbXSxmKX1lbHNle3ZhciBnO2lmKHR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiKXtnPXdpbmRvd31lbHNlIGlmKHR5cGVvZiBnbG9iYWwhPT1cInVuZGVmaW5lZFwiKXtnPWdsb2JhbH1lbHNlIGlmKHR5cGVvZiBzZWxmIT09XCJ1bmRlZmluZWRcIil7Zz1zZWxmfWVsc2V7Zz10aGlzfWcudmV4ID0gZigpfX0pKGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8qXG4gKiBjbGFzc0xpc3QuanM6IENyb3NzLWJyb3dzZXIgZnVsbCBlbGVtZW50LmNsYXNzTGlzdCBpbXBsZW1lbnRhdGlvbi5cbiAqIDEuMS4yMDE3MDQyN1xuICpcbiAqIEJ5IEVsaSBHcmV5LCBodHRwOi8vZWxpZ3JleS5jb21cbiAqIExpY2Vuc2U6IERlZGljYXRlZCB0byB0aGUgcHVibGljIGRvbWFpbi5cbiAqICAgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lbGlncmV5L2NsYXNzTGlzdC5qcy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kXG4gKi9cblxuLypnbG9iYWwgc2VsZiwgZG9jdW1lbnQsIERPTUV4Y2VwdGlvbiAqL1xuXG4vKiEgQHNvdXJjZSBodHRwOi8vcHVybC5lbGlncmV5LmNvbS9naXRodWIvY2xhc3NMaXN0LmpzL2Jsb2IvbWFzdGVyL2NsYXNzTGlzdC5qcyAqL1xuXG5pZiAoXCJkb2N1bWVudFwiIGluIHdpbmRvdy5zZWxmKSB7XG5cbi8vIEZ1bGwgcG9seWZpbGwgZm9yIGJyb3dzZXJzIHdpdGggbm8gY2xhc3NMaXN0IHN1cHBvcnRcbi8vIEluY2x1ZGluZyBJRSA8IEVkZ2UgbWlzc2luZyBTVkdFbGVtZW50LmNsYXNzTGlzdFxuaWYgKCEoXCJjbGFzc0xpc3RcIiBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiX1wiKSkgXG5cdHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyAmJiAhKFwiY2xhc3NMaXN0XCIgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcImdcIikpKSB7XG5cbihmdW5jdGlvbiAodmlldykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaWYgKCEoJ0VsZW1lbnQnIGluIHZpZXcpKSByZXR1cm47XG5cbnZhclxuXHQgIGNsYXNzTGlzdFByb3AgPSBcImNsYXNzTGlzdFwiXG5cdCwgcHJvdG9Qcm9wID0gXCJwcm90b3R5cGVcIlxuXHQsIGVsZW1DdHJQcm90byA9IHZpZXcuRWxlbWVudFtwcm90b1Byb3BdXG5cdCwgb2JqQ3RyID0gT2JqZWN0XG5cdCwgc3RyVHJpbSA9IFN0cmluZ1twcm90b1Byb3BdLnRyaW0gfHwgZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnJlcGxhY2UoL15cXHMrfFxccyskL2csIFwiXCIpO1xuXHR9XG5cdCwgYXJySW5kZXhPZiA9IEFycmF5W3Byb3RvUHJvcF0uaW5kZXhPZiB8fCBmdW5jdGlvbiAoaXRlbSkge1xuXHRcdHZhclxuXHRcdFx0ICBpID0gMFxuXHRcdFx0LCBsZW4gPSB0aGlzLmxlbmd0aFxuXHRcdDtcblx0XHRmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHtcblx0XHRcdFx0cmV0dXJuIGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAtMTtcblx0fVxuXHQvLyBWZW5kb3JzOiBwbGVhc2UgYWxsb3cgY29udGVudCBjb2RlIHRvIGluc3RhbnRpYXRlIERPTUV4Y2VwdGlvbnNcblx0LCBET01FeCA9IGZ1bmN0aW9uICh0eXBlLCBtZXNzYWdlKSB7XG5cdFx0dGhpcy5uYW1lID0gdHlwZTtcblx0XHR0aGlzLmNvZGUgPSBET01FeGNlcHRpb25bdHlwZV07XG5cdFx0dGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcblx0fVxuXHQsIGNoZWNrVG9rZW5BbmRHZXRJbmRleCA9IGZ1bmN0aW9uIChjbGFzc0xpc3QsIHRva2VuKSB7XG5cdFx0aWYgKHRva2VuID09PSBcIlwiKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXgoXG5cdFx0XHRcdCAgXCJTWU5UQVhfRVJSXCJcblx0XHRcdFx0LCBcIkFuIGludmFsaWQgb3IgaWxsZWdhbCBzdHJpbmcgd2FzIHNwZWNpZmllZFwiXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAoL1xccy8udGVzdCh0b2tlbikpIHtcblx0XHRcdHRocm93IG5ldyBET01FeChcblx0XHRcdFx0ICBcIklOVkFMSURfQ0hBUkFDVEVSX0VSUlwiXG5cdFx0XHRcdCwgXCJTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXJcIlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIGFyckluZGV4T2YuY2FsbChjbGFzc0xpc3QsIHRva2VuKTtcblx0fVxuXHQsIENsYXNzTGlzdCA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0dmFyXG5cdFx0XHQgIHRyaW1tZWRDbGFzc2VzID0gc3RyVHJpbS5jYWxsKGVsZW0uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgfHwgXCJcIilcblx0XHRcdCwgY2xhc3NlcyA9IHRyaW1tZWRDbGFzc2VzID8gdHJpbW1lZENsYXNzZXMuc3BsaXQoL1xccysvKSA6IFtdXG5cdFx0XHQsIGkgPSAwXG5cdFx0XHQsIGxlbiA9IGNsYXNzZXMubGVuZ3RoXG5cdFx0O1xuXHRcdGZvciAoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdHRoaXMucHVzaChjbGFzc2VzW2ldKTtcblx0XHR9XG5cdFx0dGhpcy5fdXBkYXRlQ2xhc3NOYW1lID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLnRvU3RyaW5nKCkpO1xuXHRcdH07XG5cdH1cblx0LCBjbGFzc0xpc3RQcm90byA9IENsYXNzTGlzdFtwcm90b1Byb3BdID0gW11cblx0LCBjbGFzc0xpc3RHZXR0ZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIG5ldyBDbGFzc0xpc3QodGhpcyk7XG5cdH1cbjtcbi8vIE1vc3QgRE9NRXhjZXB0aW9uIGltcGxlbWVudGF0aW9ucyBkb24ndCBhbGxvdyBjYWxsaW5nIERPTUV4Y2VwdGlvbidzIHRvU3RyaW5nKClcbi8vIG9uIG5vbi1ET01FeGNlcHRpb25zLiBFcnJvcidzIHRvU3RyaW5nKCkgaXMgc3VmZmljaWVudCBoZXJlLlxuRE9NRXhbcHJvdG9Qcm9wXSA9IEVycm9yW3Byb3RvUHJvcF07XG5jbGFzc0xpc3RQcm90by5pdGVtID0gZnVuY3Rpb24gKGkpIHtcblx0cmV0dXJuIHRoaXNbaV0gfHwgbnVsbDtcbn07XG5jbGFzc0xpc3RQcm90by5jb250YWlucyA9IGZ1bmN0aW9uICh0b2tlbikge1xuXHR0b2tlbiArPSBcIlwiO1xuXHRyZXR1cm4gY2hlY2tUb2tlbkFuZEdldEluZGV4KHRoaXMsIHRva2VuKSAhPT0gLTE7XG59O1xuY2xhc3NMaXN0UHJvdG8uYWRkID0gZnVuY3Rpb24gKCkge1xuXHR2YXJcblx0XHQgIHRva2VucyA9IGFyZ3VtZW50c1xuXHRcdCwgaSA9IDBcblx0XHQsIGwgPSB0b2tlbnMubGVuZ3RoXG5cdFx0LCB0b2tlblxuXHRcdCwgdXBkYXRlZCA9IGZhbHNlXG5cdDtcblx0ZG8ge1xuXHRcdHRva2VuID0gdG9rZW5zW2ldICsgXCJcIjtcblx0XHRpZiAoY2hlY2tUb2tlbkFuZEdldEluZGV4KHRoaXMsIHRva2VuKSA9PT0gLTEpIHtcblx0XHRcdHRoaXMucHVzaCh0b2tlbik7XG5cdFx0XHR1cGRhdGVkID0gdHJ1ZTtcblx0XHR9XG5cdH1cblx0d2hpbGUgKCsraSA8IGwpO1xuXG5cdGlmICh1cGRhdGVkKSB7XG5cdFx0dGhpcy5fdXBkYXRlQ2xhc3NOYW1lKCk7XG5cdH1cbn07XG5jbGFzc0xpc3RQcm90by5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdHZhclxuXHRcdCAgdG9rZW5zID0gYXJndW1lbnRzXG5cdFx0LCBpID0gMFxuXHRcdCwgbCA9IHRva2Vucy5sZW5ndGhcblx0XHQsIHRva2VuXG5cdFx0LCB1cGRhdGVkID0gZmFsc2Vcblx0XHQsIGluZGV4XG5cdDtcblx0ZG8ge1xuXHRcdHRva2VuID0gdG9rZW5zW2ldICsgXCJcIjtcblx0XHRpbmRleCA9IGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbik7XG5cdFx0d2hpbGUgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0dGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0dXBkYXRlZCA9IHRydWU7XG5cdFx0XHRpbmRleCA9IGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbik7XG5cdFx0fVxuXHR9XG5cdHdoaWxlICgrK2kgPCBsKTtcblxuXHRpZiAodXBkYXRlZCkge1xuXHRcdHRoaXMuX3VwZGF0ZUNsYXNzTmFtZSgpO1xuXHR9XG59O1xuY2xhc3NMaXN0UHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gKHRva2VuLCBmb3JjZSkge1xuXHR0b2tlbiArPSBcIlwiO1xuXG5cdHZhclxuXHRcdCAgcmVzdWx0ID0gdGhpcy5jb250YWlucyh0b2tlbilcblx0XHQsIG1ldGhvZCA9IHJlc3VsdCA/XG5cdFx0XHRmb3JjZSAhPT0gdHJ1ZSAmJiBcInJlbW92ZVwiXG5cdFx0OlxuXHRcdFx0Zm9yY2UgIT09IGZhbHNlICYmIFwiYWRkXCJcblx0O1xuXG5cdGlmIChtZXRob2QpIHtcblx0XHR0aGlzW21ldGhvZF0odG9rZW4pO1xuXHR9XG5cblx0aWYgKGZvcmNlID09PSB0cnVlIHx8IGZvcmNlID09PSBmYWxzZSkge1xuXHRcdHJldHVybiBmb3JjZTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gIXJlc3VsdDtcblx0fVxufTtcbmNsYXNzTGlzdFByb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5qb2luKFwiIFwiKTtcbn07XG5cbmlmIChvYmpDdHIuZGVmaW5lUHJvcGVydHkpIHtcblx0dmFyIGNsYXNzTGlzdFByb3BEZXNjID0ge1xuXHRcdCAgZ2V0OiBjbGFzc0xpc3RHZXR0ZXJcblx0XHQsIGVudW1lcmFibGU6IHRydWVcblx0XHQsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHR9O1xuXHR0cnkge1xuXHRcdG9iakN0ci5kZWZpbmVQcm9wZXJ0eShlbGVtQ3RyUHJvdG8sIGNsYXNzTGlzdFByb3AsIGNsYXNzTGlzdFByb3BEZXNjKTtcblx0fSBjYXRjaCAoZXgpIHsgLy8gSUUgOCBkb2Vzbid0IHN1cHBvcnQgZW51bWVyYWJsZTp0cnVlXG5cdFx0Ly8gYWRkaW5nIHVuZGVmaW5lZCB0byBmaWdodCB0aGlzIGlzc3VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lbGlncmV5L2NsYXNzTGlzdC5qcy9pc3N1ZXMvMzZcblx0XHQvLyBtb2Rlcm5pZSBJRTgtTVNXNyBtYWNoaW5lIGhhcyBJRTggOC4wLjYwMDEuMTg3MDIgYW5kIGlzIGFmZmVjdGVkXG5cdFx0aWYgKGV4Lm51bWJlciA9PT0gdW5kZWZpbmVkIHx8IGV4Lm51bWJlciA9PT0gLTB4N0ZGNUVDNTQpIHtcblx0XHRcdGNsYXNzTGlzdFByb3BEZXNjLmVudW1lcmFibGUgPSBmYWxzZTtcblx0XHRcdG9iakN0ci5kZWZpbmVQcm9wZXJ0eShlbGVtQ3RyUHJvdG8sIGNsYXNzTGlzdFByb3AsIGNsYXNzTGlzdFByb3BEZXNjKTtcblx0XHR9XG5cdH1cbn0gZWxzZSBpZiAob2JqQ3RyW3Byb3RvUHJvcF0uX19kZWZpbmVHZXR0ZXJfXykge1xuXHRlbGVtQ3RyUHJvdG8uX19kZWZpbmVHZXR0ZXJfXyhjbGFzc0xpc3RQcm9wLCBjbGFzc0xpc3RHZXR0ZXIpO1xufVxuXG59KHdpbmRvdy5zZWxmKSk7XG5cbn1cblxuLy8gVGhlcmUgaXMgZnVsbCBvciBwYXJ0aWFsIG5hdGl2ZSBjbGFzc0xpc3Qgc3VwcG9ydCwgc28ganVzdCBjaGVjayBpZiB3ZSBuZWVkXG4vLyB0byBub3JtYWxpemUgdGhlIGFkZC9yZW1vdmUgYW5kIHRvZ2dsZSBBUElzLlxuXG4oZnVuY3Rpb24gKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHR2YXIgdGVzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiX1wiKTtcblxuXHR0ZXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYzFcIiwgXCJjMlwiKTtcblxuXHQvLyBQb2x5ZmlsbCBmb3IgSUUgMTAvMTEgYW5kIEZpcmVmb3ggPDI2LCB3aGVyZSBjbGFzc0xpc3QuYWRkIGFuZFxuXHQvLyBjbGFzc0xpc3QucmVtb3ZlIGV4aXN0IGJ1dCBzdXBwb3J0IG9ubHkgb25lIGFyZ3VtZW50IGF0IGEgdGltZS5cblx0aWYgKCF0ZXN0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjMlwiKSkge1xuXHRcdHZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbihtZXRob2QpIHtcblx0XHRcdHZhciBvcmlnaW5hbCA9IERPTVRva2VuTGlzdC5wcm90b3R5cGVbbWV0aG9kXTtcblxuXHRcdFx0RE9NVG9rZW5MaXN0LnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odG9rZW4pIHtcblx0XHRcdFx0dmFyIGksIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdFx0dG9rZW4gPSBhcmd1bWVudHNbaV07XG5cdFx0XHRcdFx0b3JpZ2luYWwuY2FsbCh0aGlzLCB0b2tlbik7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fTtcblx0XHRjcmVhdGVNZXRob2QoJ2FkZCcpO1xuXHRcdGNyZWF0ZU1ldGhvZCgncmVtb3ZlJyk7XG5cdH1cblxuXHR0ZXN0RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiYzNcIiwgZmFsc2UpO1xuXG5cdC8vIFBvbHlmaWxsIGZvciBJRSAxMCBhbmQgRmlyZWZveCA8MjQsIHdoZXJlIGNsYXNzTGlzdC50b2dnbGUgZG9lcyBub3Rcblx0Ly8gc3VwcG9ydCB0aGUgc2Vjb25kIGFyZ3VtZW50LlxuXHRpZiAodGVzdEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYzNcIikpIHtcblx0XHR2YXIgX3RvZ2dsZSA9IERPTVRva2VuTGlzdC5wcm90b3R5cGUudG9nZ2xlO1xuXG5cdFx0RE9NVG9rZW5MaXN0LnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbih0b2tlbiwgZm9yY2UpIHtcblx0XHRcdGlmICgxIGluIGFyZ3VtZW50cyAmJiAhdGhpcy5jb250YWlucyh0b2tlbikgPT09ICFmb3JjZSkge1xuXHRcdFx0XHRyZXR1cm4gZm9yY2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gX3RvZ2dsZS5jYWxsKHRoaXMsIHRva2VuKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdH1cblxuXHR0ZXN0RWxlbWVudCA9IG51bGw7XG59KCkpO1xuXG59XG5cbn0se31dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXG4vKipcbiAqIEV4cG9zZSBgcGFyc2VgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2U7XG5cbi8qKlxuICogVGVzdHMgZm9yIGJyb3dzZXIgc3VwcG9ydC5cbiAqL1xuXG52YXIgaW5uZXJIVE1MQnVnID0gZmFsc2U7XG52YXIgYnVnVGVzdERpdjtcbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gIGJ1Z1Rlc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy8gU2V0dXBcbiAgYnVnVGVzdERpdi5pbm5lckhUTUwgPSAnICA8bGluay8+PHRhYmxlPjwvdGFibGU+PGEgaHJlZj1cIi9hXCI+YTwvYT48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIvPic7XG4gIC8vIE1ha2Ugc3VyZSB0aGF0IGxpbmsgZWxlbWVudHMgZ2V0IHNlcmlhbGl6ZWQgY29ycmVjdGx5IGJ5IGlubmVySFRNTFxuICAvLyBUaGlzIHJlcXVpcmVzIGEgd3JhcHBlciBlbGVtZW50IGluIElFXG4gIGlubmVySFRNTEJ1ZyA9ICFidWdUZXN0RGl2LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaW5rJykubGVuZ3RoO1xuICBidWdUZXN0RGl2ID0gdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIFdyYXAgbWFwIGZyb20ganF1ZXJ5LlxuICovXG5cbnZhciBtYXAgPSB7XG4gIGxlZ2VuZDogWzEsICc8ZmllbGRzZXQ+JywgJzwvZmllbGRzZXQ+J10sXG4gIHRyOiBbMiwgJzx0YWJsZT48dGJvZHk+JywgJzwvdGJvZHk+PC90YWJsZT4nXSxcbiAgY29sOiBbMiwgJzx0YWJsZT48dGJvZHk+PC90Ym9keT48Y29sZ3JvdXA+JywgJzwvY29sZ3JvdXA+PC90YWJsZT4nXSxcbiAgLy8gZm9yIHNjcmlwdC9saW5rL3N0eWxlIHRhZ3MgdG8gd29yayBpbiBJRTYtOCwgeW91IGhhdmUgdG8gd3JhcFxuICAvLyBpbiBhIGRpdiB3aXRoIGEgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyIGluIGZyb250LCBoYSFcbiAgX2RlZmF1bHQ6IGlubmVySFRNTEJ1ZyA/IFsxLCAnWDxkaXY+JywgJzwvZGl2PiddIDogWzAsICcnLCAnJ11cbn07XG5cbm1hcC50ZCA9XG5tYXAudGggPSBbMywgJzx0YWJsZT48dGJvZHk+PHRyPicsICc8L3RyPjwvdGJvZHk+PC90YWJsZT4nXTtcblxubWFwLm9wdGlvbiA9XG5tYXAub3B0Z3JvdXAgPSBbMSwgJzxzZWxlY3QgbXVsdGlwbGU9XCJtdWx0aXBsZVwiPicsICc8L3NlbGVjdD4nXTtcblxubWFwLnRoZWFkID1cbm1hcC50Ym9keSA9XG5tYXAuY29sZ3JvdXAgPVxubWFwLmNhcHRpb24gPVxubWFwLnRmb290ID0gWzEsICc8dGFibGU+JywgJzwvdGFibGU+J107XG5cbm1hcC5wb2x5bGluZSA9XG5tYXAuZWxsaXBzZSA9XG5tYXAucG9seWdvbiA9XG5tYXAuY2lyY2xlID1cbm1hcC50ZXh0ID1cbm1hcC5saW5lID1cbm1hcC5wYXRoID1cbm1hcC5yZWN0ID1cbm1hcC5nID0gWzEsICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCI+JywnPC9zdmc+J107XG5cbi8qKlxuICogUGFyc2UgYGh0bWxgIGFuZCByZXR1cm4gYSBET00gTm9kZSBpbnN0YW5jZSwgd2hpY2ggY291bGQgYmUgYSBUZXh0Tm9kZSxcbiAqIEhUTUwgRE9NIE5vZGUgb2Ygc29tZSBraW5kICg8ZGl2PiBmb3IgZXhhbXBsZSksIG9yIGEgRG9jdW1lbnRGcmFnbWVudFxuICogaW5zdGFuY2UsIGRlcGVuZGluZyBvbiB0aGUgY29udGVudHMgb2YgdGhlIGBodG1sYCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWwgLSBIVE1MIHN0cmluZyB0byBcImRvbWlmeVwiXG4gKiBAcGFyYW0ge0RvY3VtZW50fSBkb2MgLSBUaGUgYGRvY3VtZW50YCBpbnN0YW5jZSB0byBjcmVhdGUgdGhlIE5vZGUgZm9yXG4gKiBAcmV0dXJuIHtET01Ob2RlfSB0aGUgVGV4dE5vZGUsIERPTSBOb2RlLCBvciBEb2N1bWVudEZyYWdtZW50IGluc3RhbmNlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShodG1sLCBkb2MpIHtcbiAgaWYgKCdzdHJpbmcnICE9IHR5cGVvZiBodG1sKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdHJpbmcgZXhwZWN0ZWQnKTtcblxuICAvLyBkZWZhdWx0IHRvIHRoZSBnbG9iYWwgYGRvY3VtZW50YCBvYmplY3RcbiAgaWYgKCFkb2MpIGRvYyA9IGRvY3VtZW50O1xuXG4gIC8vIHRhZyBuYW1lXG4gIHZhciBtID0gLzwoW1xcdzpdKykvLmV4ZWMoaHRtbCk7XG4gIGlmICghbSkgcmV0dXJuIGRvYy5jcmVhdGVUZXh0Tm9kZShodG1sKTtcblxuICBodG1sID0gaHRtbC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7IC8vIFJlbW92ZSBsZWFkaW5nL3RyYWlsaW5nIHdoaXRlc3BhY2VcblxuICB2YXIgdGFnID0gbVsxXTtcblxuICAvLyBib2R5IHN1cHBvcnRcbiAgaWYgKHRhZyA9PSAnYm9keScpIHtcbiAgICB2YXIgZWwgPSBkb2MuY3JlYXRlRWxlbWVudCgnaHRtbCcpO1xuICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIGVsLnJlbW92ZUNoaWxkKGVsLmxhc3RDaGlsZCk7XG4gIH1cblxuICAvLyB3cmFwIG1hcFxuICB2YXIgd3JhcCA9IG1hcFt0YWddIHx8IG1hcC5fZGVmYXVsdDtcbiAgdmFyIGRlcHRoID0gd3JhcFswXTtcbiAgdmFyIHByZWZpeCA9IHdyYXBbMV07XG4gIHZhciBzdWZmaXggPSB3cmFwWzJdO1xuICB2YXIgZWwgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVsLmlubmVySFRNTCA9IHByZWZpeCArIGh0bWwgKyBzdWZmaXg7XG4gIHdoaWxlIChkZXB0aC0tKSBlbCA9IGVsLmxhc3RDaGlsZDtcblxuICAvLyBvbmUgZWxlbWVudFxuICBpZiAoZWwuZmlyc3RDaGlsZCA9PSBlbC5sYXN0Q2hpbGQpIHtcbiAgICByZXR1cm4gZWwucmVtb3ZlQ2hpbGQoZWwuZmlyc3RDaGlsZCk7XG4gIH1cblxuICAvLyBzZXZlcmFsIGVsZW1lbnRzXG4gIHZhciBmcmFnbWVudCA9IGRvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIHdoaWxlIChlbC5maXJzdENoaWxkKSB7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZWwucmVtb3ZlQ2hpbGQoZWwuZmlyc3RDaGlsZCkpO1xuICB9XG5cbiAgcmV0dXJuIGZyYWdtZW50O1xufVxuXG59LHt9XSwzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuICogQ29kZSByZWZhY3RvcmVkIGZyb20gTW96aWxsYSBEZXZlbG9wZXIgTmV0d29yazpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9hc3NpZ25cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIGZpcnN0U291cmNlKSB7XG4gIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCB8fCB0YXJnZXQgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBmaXJzdCBhcmd1bWVudCB0byBvYmplY3QnKTtcbiAgfVxuXG4gIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBuZXh0U291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgIGlmIChuZXh0U291cmNlID09PSB1bmRlZmluZWQgfHwgbmV4dFNvdXJjZSA9PT0gbnVsbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIGtleXNBcnJheSA9IE9iamVjdC5rZXlzKE9iamVjdChuZXh0U291cmNlKSk7XG4gICAgZm9yICh2YXIgbmV4dEluZGV4ID0gMCwgbGVuID0ga2V5c0FycmF5Lmxlbmd0aDsgbmV4dEluZGV4IDwgbGVuOyBuZXh0SW5kZXgrKykge1xuICAgICAgdmFyIG5leHRLZXkgPSBrZXlzQXJyYXlbbmV4dEluZGV4XTtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuZXh0U291cmNlLCBuZXh0S2V5KTtcbiAgICAgIGlmIChkZXNjICE9PSB1bmRlZmluZWQgJiYgZGVzYy5lbnVtZXJhYmxlKSB7XG4gICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRvO1xufVxuXG5mdW5jdGlvbiBwb2x5ZmlsbCgpIHtcbiAgaWYgKCFPYmplY3QuYXNzaWduKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdCwgJ2Fzc2lnbicsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogYXNzaWduXG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFzc2lnbjogYXNzaWduLFxuICBwb2x5ZmlsbDogcG9seWZpbGxcbn07XG5cbn0se31dLDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gY2xhc3NMaXN0IHBvbHlmaWxsIGZvciBvbGQgYnJvd3NlcnNcclxucmVxdWlyZSgnY2xhc3NsaXN0LXBvbHlmaWxsJylcclxuLy8gT2JqZWN0LmFzc2lnbiBwb2x5ZmlsbFxyXG5yZXF1aXJlKCdlczYtb2JqZWN0LWFzc2lnbicpLnBvbHlmaWxsKClcclxuXHJcbi8vIFN0cmluZyB0byBET00gZnVuY3Rpb25cclxudmFyIGRvbWlmeSA9IHJlcXVpcmUoJ2RvbWlmeScpXHJcblxyXG4vLyBVc2UgdGhlIERPTSdzIEhUTUwgcGFyc2luZyB0byBlc2NhcGUgYW55IGRhbmdlcm91cyBzdHJpbmdzXHJcbnZhciBlc2NhcGVIdG1sID0gZnVuY3Rpb24gZXNjYXBlSHRtbCAoc3RyKSB7XHJcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHIpKVxyXG4gICAgcmV0dXJuIGRpdi5pbm5lckhUTUxcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuICcnXHJcbiAgfVxyXG59XHJcblxyXG4vLyBVdGlsaXR5IGZ1bmN0aW9uIHRvIGFkZCBzcGFjZS1kZWxpbWl0ZWQgY2xhc3Mgc3RyaW5ncyB0byBhIERPTSBlbGVtZW50J3MgY2xhc3NMaXN0XHJcbnZhciBhZGRDbGFzc2VzID0gZnVuY3Rpb24gYWRkQ2xhc3NlcyAoZWwsIGNsYXNzU3RyKSB7XHJcbiAgaWYgKHR5cGVvZiBjbGFzc1N0ciAhPT0gJ3N0cmluZycgfHwgY2xhc3NTdHIubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgdmFyIGNsYXNzZXMgPSBjbGFzc1N0ci5zcGxpdCgnICcpXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgY2xhc3NOYW1lID0gY2xhc3Nlc1tpXVxyXG4gICAgaWYgKGNsYXNzTmFtZS5sZW5ndGgpIHtcclxuICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBEZXRlY3QgQ1NTIEFuaW1hdGlvbiBFbmQgU3VwcG9ydFxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbGltb250ZS9zd2VldGFsZXJ0Mi9ibG9iLzk5YmQ1MzlmODVlMTVhYzE3MGY2OWQzNTAwMWQxMmUwOTJlZjAwNTQvc3JjL3V0aWxzL2RvbS5qcyNMMTk0XHJcbnZhciBhbmltYXRpb25FbmRFdmVudCA9IChmdW5jdGlvbiBkZXRlY3RBbmltYXRpb25FbmRFdmVudCAoKSB7XHJcbiAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICB2YXIgZXZlbnROYW1lcyA9IHtcclxuICAgICdhbmltYXRpb24nOiAnYW5pbWF0aW9uZW5kJyxcclxuICAgICdXZWJraXRBbmltYXRpb24nOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcclxuICAgICdNb3pBbmltYXRpb24nOiAnYW5pbWF0aW9uZW5kJyxcclxuICAgICdPQW5pbWF0aW9uJzogJ29hbmltYXRpb25lbmQnLFxyXG4gICAgJ21zQW5pbWF0aW9uJzogJ01TQW5pbWF0aW9uRW5kJ1xyXG4gIH1cclxuICBmb3IgKHZhciBpIGluIGV2ZW50TmFtZXMpIHtcclxuICAgIGlmIChlbC5zdHlsZVtpXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiBldmVudE5hbWVzW2ldXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZVxyXG59KSgpXHJcblxyXG4vLyB2ZXggYmFzZSBDU1MgY2xhc3Nlc1xyXG52YXIgYmFzZUNsYXNzTmFtZXMgPSB7XHJcbiAgdmV4OiAndmV4JyxcclxuICBjb250ZW50OiAndmV4LWNvbnRlbnQnLFxyXG4gIG92ZXJsYXk6ICd2ZXgtb3ZlcmxheScsXHJcbiAgY2xvc2U6ICd2ZXgtY2xvc2UnLFxyXG4gIGNsb3Npbmc6ICd2ZXgtY2xvc2luZycsXHJcbiAgb3BlbjogJ3ZleC1vcGVuJ1xyXG59XHJcblxyXG4vLyBQcml2YXRlIGxvb2t1cCB0YWJsZSBvZiBhbGwgb3BlbiB2ZXggb2JqZWN0cywga2V5ZWQgYnkgaWRcclxudmFyIHZleGVzID0ge31cclxudmFyIGdsb2JhbElkID0gMVxyXG5cclxuLy8gUHJpdmF0ZSBib29sZWFuIHRvIGFzc2lzdCB0aGUgZXNjYXBlQnV0dG9uQ2xvc2VzIG9wdGlvblxyXG52YXIgaXNFc2NhcGVBY3RpdmUgPSBmYWxzZVxyXG5cclxuLy8gdmV4IGl0c2VsZiBpcyBhbiBvYmplY3QgdGhhdCBleHBvc2VzIGEgc2ltcGxlIEFQSSB0byBvcGVuIGFuZCBjbG9zZSB2ZXggb2JqZWN0cyBpbiB2YXJpb3VzIHdheXNcclxudmFyIHZleCA9IHtcclxuICBvcGVuOiBmdW5jdGlvbiBvcGVuIChvcHRzKSB7XHJcbiAgICAvLyBDaGVjayBmb3IgdXNhZ2Ugb2YgZGVwcmVjYXRlZCBvcHRpb25zLCBhbmQgbG9nIGEgd2FybmluZ1xyXG4gICAgdmFyIHdhcm5EZXByZWNhdGVkID0gZnVuY3Rpb24gd2FybkRlcHJlY2F0ZWQgKHByb3ApIHtcclxuICAgICAgY29uc29sZS53YXJuKCdUaGUgXCInICsgcHJvcCArICdcIiBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkIGluIHZleCAzLiBVc2UgQ1NTIGNsYXNzZXMgYW5kIHRoZSBhcHByb3ByaWF0ZSBcIkNsYXNzTmFtZVwiIG9wdGlvbnMsIGluc3RlYWQuJylcclxuICAgICAgY29uc29sZS53YXJuKCdTZWUgaHR0cDovL2dpdGh1Yi5odWJzcG90LmNvbS92ZXgvYXBpL2FkdmFuY2VkLyNvcHRpb25zJylcclxuICAgIH1cclxuICAgIGlmIChvcHRzLmNzcykge1xyXG4gICAgICB3YXJuRGVwcmVjYXRlZCgnY3NzJylcclxuICAgIH1cclxuICAgIGlmIChvcHRzLm92ZXJsYXlDU1MpIHtcclxuICAgICAgd2FybkRlcHJlY2F0ZWQoJ292ZXJsYXlDU1MnKVxyXG4gICAgfVxyXG4gICAgaWYgKG9wdHMuY29udGVudENTUykge1xyXG4gICAgICB3YXJuRGVwcmVjYXRlZCgnY29udGVudENTUycpXHJcbiAgICB9XHJcbiAgICBpZiAob3B0cy5jbG9zZUNTUykge1xyXG4gICAgICB3YXJuRGVwcmVjYXRlZCgnY2xvc2VDU1MnKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBkaWFsb2cgaW5zdGFuY2VcclxuICAgIHZhciB2ZXhJbnN0YW5jZSA9IHt9XHJcblxyXG4gICAgLy8gU2V0IGlkXHJcbiAgICB2ZXhJbnN0YW5jZS5pZCA9IGdsb2JhbElkKytcclxuXHJcbiAgICAvLyBTdG9yZSBpbnRlcm5hbGx5XHJcbiAgICB2ZXhlc1t2ZXhJbnN0YW5jZS5pZF0gPSB2ZXhJbnN0YW5jZVxyXG5cclxuICAgIC8vIFNldCBzdGF0ZVxyXG4gICAgdmV4SW5zdGFuY2UuaXNPcGVuID0gdHJ1ZVxyXG5cclxuICAgIC8vIENsb3NlIGZ1bmN0aW9uIG9uIHRoZSB2ZXggaW5zdGFuY2VcclxuICAgIC8vIFRoaXMgaXMgaG93IGFsbCBBUEkgZnVuY3Rpb25zIHNob3VsZCBjbG9zZSBpbmRpdmlkdWFsIHZleGVzXHJcbiAgICB2ZXhJbnN0YW5jZS5jbG9zZSA9IGZ1bmN0aW9uIGluc3RhbmNlQ2xvc2UgKCkge1xyXG4gICAgICAvLyBDaGVjayBzdGF0ZVxyXG4gICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnNcclxuXHJcbiAgICAgIC8vIGVzY2FwZUJ1dHRvbkNsb3NlcyBpcyBjaGVja2VkIGZpcnN0XHJcbiAgICAgIGlmIChpc0VzY2FwZUFjdGl2ZSAmJiAhb3B0aW9ucy5lc2NhcGVCdXR0b25DbG9zZXMpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gdmFsaWRhdGUgYW55IGluZm8gb3IgYWJvcnQgdGhlIGNsb3NlIHdpdGggdGhlIGJlZm9yZUNsb3NlIGNhbGxiYWNrXHJcbiAgICAgIHZhciBzaG91bGRDbG9zZSA9IChmdW5jdGlvbiBzaG91bGRDbG9zZSAoKSB7XHJcbiAgICAgICAgLy8gQ2FsbCBiZWZvcmUgY2xvc2UgY2FsbGJhY2tcclxuICAgICAgICBpZiAob3B0aW9ucy5iZWZvcmVDbG9zZSkge1xyXG4gICAgICAgICAgcmV0dXJuIG9wdGlvbnMuYmVmb3JlQ2xvc2UuY2FsbCh0aGlzKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBPdGhlcndpc2UgaW5kaWNhdGUgdGhhdCBpdCdzIG9rIHRvIGNvbnRpbnVlIHdpdGggY2xvc2VcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9LmJpbmQodGhpcykoKSlcclxuXHJcbiAgICAgIC8vIElmIGJlZm9yZUNsb3NlKCkgZmFpbHMsIGFib3J0IHRoZSBjbG9zZVxyXG4gICAgICBpZiAoc2hvdWxkQ2xvc2UgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFVwZGF0ZSBzdGF0ZVxyXG4gICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlXHJcblxyXG4gICAgICAvLyBEZXRlY3QgaWYgdGhlIGNvbnRlbnQgZWwgaGFzIGFueSBDU1MgYW5pbWF0aW9ucyBkZWZpbmVkXHJcbiAgICAgIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY29udGVudEVsKVxyXG4gICAgICBmdW5jdGlvbiBoYXNBbmltYXRpb25QcmUgKHByZWZpeCkge1xyXG4gICAgICAgIHJldHVybiBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByZWZpeCArICdhbmltYXRpb24tbmFtZScpICE9PSAnbm9uZScgJiYgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcmVmaXggKyAnYW5pbWF0aW9uLWR1cmF0aW9uJykgIT09ICcwcydcclxuICAgICAgfVxyXG4gICAgICB2YXIgaGFzQW5pbWF0aW9uID0gaGFzQW5pbWF0aW9uUHJlKCcnKSB8fCBoYXNBbmltYXRpb25QcmUoJy13ZWJraXQtJykgfHwgaGFzQW5pbWF0aW9uUHJlKCctbW96LScpIHx8IGhhc0FuaW1hdGlvblByZSgnLW8tJylcclxuXHJcbiAgICAgIC8vIERlZmluZSB0aGUgZnVuY3Rpb24gdGhhdCB3aWxsIGFjdHVhbGx5IGNsb3NlIHRoZSBpbnN0YW5jZVxyXG4gICAgICB2YXIgY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJvb3RFbC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUnVuIG9uY2VcclxuICAgICAgICB0aGlzLnJvb3RFbC5yZW1vdmVFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBjbG9zZSlcclxuICAgICAgICB0aGlzLm92ZXJsYXlFbC5yZW1vdmVFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBjbG9zZSlcclxuICAgICAgICAvLyBSZW1vdmUgZnJvbSBsb29rdXAgdGFibGUgKHByZXZlbnQgbWVtb3J5IGxlYWtzKVxyXG4gICAgICAgIGRlbGV0ZSB2ZXhlc1t0aGlzLmlkXVxyXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgZGlhbG9nIGZyb20gdGhlIERPTVxyXG4gICAgICAgIHRoaXMucm9vdEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5yb290RWwpXHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBvdmVybGF5IGZyb20gdGhlIERPTVxyXG4gICAgICAgIHRoaXMuYm9keUVsLnJlbW92ZUNoaWxkKHRoaXMub3ZlcmxheUVsKVxyXG4gICAgICAgIC8vIENhbGwgYWZ0ZXIgY2xvc2UgY2FsbGJhY2tcclxuICAgICAgICBpZiAob3B0aW9ucy5hZnRlckNsb3NlKSB7XHJcbiAgICAgICAgICBvcHRpb25zLmFmdGVyQ2xvc2UuY2FsbCh0aGlzKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW1vdmUgc3R5bGluZyBmcm9tIHRoZSBib2R5LCBpZiBubyBtb3JlIHZleGVzIGFyZSBvcGVuXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHZleGVzKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShiYXNlQ2xhc3NOYW1lcy5vcGVuKVxyXG4gICAgICAgIH1cclxuICAgICAgfS5iaW5kKHRoaXMpXHJcblxyXG4gICAgICAvLyBDbG9zZSB0aGUgdmV4XHJcbiAgICAgIGlmIChhbmltYXRpb25FbmRFdmVudCAmJiBoYXNBbmltYXRpb24pIHtcclxuICAgICAgICAvLyBTZXR1cCB0aGUgZW5kIGV2ZW50IGxpc3RlbmVyLCB0byByZW1vdmUgdGhlIGVsIGZyb20gdGhlIERPTVxyXG4gICAgICAgIHRoaXMucm9vdEVsLmFkZEV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIGNsb3NlKVxyXG4gICAgICAgIHRoaXMub3ZlcmxheUVsLmFkZEV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIGNsb3NlKVxyXG4gICAgICAgIC8vIEFkZCB0aGUgY2xvc2luZyBjbGFzcyB0byB0aGUgZGlhbG9nLCBzaG93aW5nIHRoZSBjbG9zZSBhbmltYXRpb25cclxuICAgICAgICB0aGlzLnJvb3RFbC5jbGFzc0xpc3QuYWRkKGJhc2VDbGFzc05hbWVzLmNsb3NpbmcpXHJcbiAgICAgICAgdGhpcy5vdmVybGF5RWwuY2xhc3NMaXN0LmFkZChiYXNlQ2xhc3NOYW1lcy5jbG9zaW5nKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNsb3NlKClcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICAvLyBBbGxvdyBzdHJpbmdzIGFzIGNvbnRlbnRcclxuICAgIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgb3B0cyA9IHtcclxuICAgICAgICBjb250ZW50OiBvcHRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBgY29udGVudGAgaXMgdW5zYWZlIGludGVybmFsbHksIHNvIHRyYW5zbGF0ZVxyXG4gICAgLy8gc2FmZSBkZWZhdWx0OiBIVE1MLWVzY2FwZSB0aGUgY29udGVudCBiZWZvcmUgcGFzc2luZyBpdCB0aHJvdWdoXHJcbiAgICBpZiAob3B0cy51bnNhZmVDb250ZW50ICYmICFvcHRzLmNvbnRlbnQpIHtcclxuICAgICAgb3B0cy5jb250ZW50ID0gb3B0cy51bnNhZmVDb250ZW50XHJcbiAgICB9IGVsc2UgaWYgKG9wdHMuY29udGVudCkge1xyXG4gICAgICBvcHRzLmNvbnRlbnQgPSBlc2NhcGVIdG1sKG9wdHMuY29udGVudClcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdG9yZSBvcHRpb25zIG9uIGluc3RhbmNlIGZvciBmdXR1cmUgcmVmZXJlbmNlXHJcbiAgICB2YXIgb3B0aW9ucyA9IHZleEluc3RhbmNlLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB2ZXguZGVmYXVsdE9wdGlvbnMsIG9wdHMpXHJcblxyXG4gICAgLy8gR2V0IEJvZHkgRWxlbWVudFxyXG4gICAgdmFyIGJvZHlFbCA9IHZleEluc3RhbmNlLmJvZHlFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF1cclxuXHJcbiAgICAvLyB2ZXggcm9vdFxyXG4gICAgdmFyIHJvb3RFbCA9IHZleEluc3RhbmNlLnJvb3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICByb290RWwuY2xhc3NMaXN0LmFkZChiYXNlQ2xhc3NOYW1lcy52ZXgpXHJcbiAgICBhZGRDbGFzc2VzKHJvb3RFbCwgb3B0aW9ucy5jbGFzc05hbWUpXHJcblxyXG4gICAgLy8gT3ZlcmxheVxyXG4gICAgdmFyIG92ZXJsYXlFbCA9IHZleEluc3RhbmNlLm92ZXJsYXlFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBvdmVybGF5RWwuY2xhc3NMaXN0LmFkZChiYXNlQ2xhc3NOYW1lcy5vdmVybGF5KVxyXG4gICAgYWRkQ2xhc3NlcyhvdmVybGF5RWwsIG9wdGlvbnMub3ZlcmxheUNsYXNzTmFtZSlcclxuICAgIGlmIChvcHRpb25zLm92ZXJsYXlDbG9zZXNPbkNsaWNrKSB7XHJcbiAgICAgIHJvb3RFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIG92ZXJsYXlDbGlja0xpc3RlbmVyIChlKSB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSByb290RWwpIHtcclxuICAgICAgICAgIHZleEluc3RhbmNlLmNsb3NlKClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBib2R5RWwuYXBwZW5kQ2hpbGQob3ZlcmxheUVsKVxyXG5cclxuICAgIC8vIENvbnRlbnRcclxuICAgIHZhciBjb250ZW50RWwgPSB2ZXhJbnN0YW5jZS5jb250ZW50RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29udGVudEVsLmNsYXNzTGlzdC5hZGQoYmFzZUNsYXNzTmFtZXMuY29udGVudClcclxuICAgIGFkZENsYXNzZXMoY29udGVudEVsLCBvcHRpb25zLmNvbnRlbnRDbGFzc05hbWUpXHJcbiAgICBjb250ZW50RWwuYXBwZW5kQ2hpbGQob3B0aW9ucy5jb250ZW50IGluc3RhbmNlb2Ygd2luZG93Lk5vZGUgPyBvcHRpb25zLmNvbnRlbnQgOiBkb21pZnkob3B0aW9ucy5jb250ZW50KSlcclxuICAgIHJvb3RFbC5hcHBlbmRDaGlsZChjb250ZW50RWwpXHJcblxyXG4gICAgLy8gQ2xvc2UgYnV0dG9uXHJcbiAgICBpZiAob3B0aW9ucy5zaG93Q2xvc2VCdXR0b24pIHtcclxuICAgICAgdmFyIGNsb3NlRWwgPSB2ZXhJbnN0YW5jZS5jbG9zZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgY2xvc2VFbC5jbGFzc0xpc3QuYWRkKGJhc2VDbGFzc05hbWVzLmNsb3NlKVxyXG4gICAgICBhZGRDbGFzc2VzKGNsb3NlRWwsIG9wdGlvbnMuY2xvc2VDbGFzc05hbWUpXHJcbiAgICAgIGNsb3NlRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB2ZXhJbnN0YW5jZS5jbG9zZS5iaW5kKHZleEluc3RhbmNlKSlcclxuICAgICAgY29udGVudEVsLmFwcGVuZENoaWxkKGNsb3NlRWwpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIHRvIERPTVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmFwcGVuZExvY2F0aW9uKS5hcHBlbmRDaGlsZChyb290RWwpXHJcblxyXG4gICAgLy8gQ2FsbCBhZnRlciBvcGVuIGNhbGxiYWNrXHJcbiAgICBpZiAob3B0aW9ucy5hZnRlck9wZW4pIHtcclxuICAgICAgb3B0aW9ucy5hZnRlck9wZW4uY2FsbCh2ZXhJbnN0YW5jZSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBBcHBseSBzdHlsaW5nIHRvIHRoZSBib2R5XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoYmFzZUNsYXNzTmFtZXMub3BlbilcclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIGNyZWF0ZWQgdmV4IGluc3RhbmNlXHJcbiAgICByZXR1cm4gdmV4SW5zdGFuY2VcclxuICB9LFxyXG5cclxuICAvLyBBIHRvcC1sZXZlbCB2ZXguY2xvc2UgZnVuY3Rpb24gdG8gY2xvc2UgZGlhbG9ncyBieSByZWZlcmVuY2Ugb3IgaWRcclxuICBjbG9zZTogZnVuY3Rpb24gY2xvc2UgKHZleE9ySWQpIHtcclxuICAgIHZhciBpZFxyXG4gICAgaWYgKHZleE9ySWQuaWQpIHtcclxuICAgICAgaWQgPSB2ZXhPcklkLmlkXHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2ZXhPcklkID09PSAnc3RyaW5nJykge1xyXG4gICAgICBpZCA9IHZleE9ySWRcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Nsb3NlIHJlcXVpcmVzIGEgdmV4IG9iamVjdCBvciBpZCBzdHJpbmcnKVxyXG4gICAgfVxyXG4gICAgaWYgKCF2ZXhlc1tpZF0pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmV4ZXNbaWRdLmNsb3NlKClcclxuICB9LFxyXG5cclxuICAvLyBDbG9zZSB0aGUgbW9zdCByZWNlbnRseSBjcmVhdGVkL29wZW5lZCB2ZXhcclxuICBjbG9zZVRvcDogZnVuY3Rpb24gY2xvc2VUb3AgKCkge1xyXG4gICAgdmFyIGlkcyA9IE9iamVjdC5rZXlzKHZleGVzKVxyXG4gICAgaWYgKCFpZHMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZleGVzW2lkc1tpZHMubGVuZ3RoIC0gMV1dLmNsb3NlKClcclxuICB9LFxyXG5cclxuICAvLyBDbG9zZSBldmVyeSB2ZXghXHJcbiAgY2xvc2VBbGw6IGZ1bmN0aW9uIGNsb3NlQWxsICgpIHtcclxuICAgIGZvciAodmFyIGlkIGluIHZleGVzKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoaWQpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH0sXHJcblxyXG4gIC8vIEEgZ2V0dGVyIGZvciB0aGUgaW50ZXJuYWwgbG9va3VwIHRhYmxlXHJcbiAgZ2V0QWxsOiBmdW5jdGlvbiBnZXRBbGwgKCkge1xyXG4gICAgcmV0dXJuIHZleGVzXHJcbiAgfSxcclxuXHJcbiAgLy8gQSBnZXR0ZXIgZm9yIHRoZSBpbnRlcm5hbCBsb29rdXAgdGFibGVcclxuICBnZXRCeUlkOiBmdW5jdGlvbiBnZXRCeUlkIChpZCkge1xyXG4gICAgcmV0dXJuIHZleGVzW2lkXVxyXG4gIH1cclxufVxyXG5cclxuLy8gQ2xvc2UgdG9wIHZleCBvbiBlc2NhcGVcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gdmV4S2V5dXBMaXN0ZW5lciAoZSkge1xyXG4gIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XHJcbiAgICBpc0VzY2FwZUFjdGl2ZSA9IHRydWVcclxuICAgIHZleC5jbG9zZVRvcCgpXHJcbiAgICBpc0VzY2FwZUFjdGl2ZSA9IGZhbHNlXHJcbiAgfVxyXG59KVxyXG5cclxuLy8gQ2xvc2UgYWxsIHZleGVzIG9uIGhpc3RvcnkgcG9wIHN0YXRlICh1c2VmdWwgaW4gc2luZ2xlIHBhZ2UgYXBwcylcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgZnVuY3Rpb24gKCkge1xyXG4gIGlmICh2ZXguZGVmYXVsdE9wdGlvbnMuY2xvc2VBbGxPblBvcFN0YXRlKSB7XHJcbiAgICB2ZXguY2xvc2VBbGwoKVxyXG4gIH1cclxufSlcclxuXHJcbnZleC5kZWZhdWx0T3B0aW9ucyA9IHtcclxuICBjb250ZW50OiAnJyxcclxuICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgZXNjYXBlQnV0dG9uQ2xvc2VzOiB0cnVlLFxyXG4gIG92ZXJsYXlDbG9zZXNPbkNsaWNrOiB0cnVlLFxyXG4gIGFwcGVuZExvY2F0aW9uOiAnYm9keScsXHJcbiAgY2xhc3NOYW1lOiAnJyxcclxuICBvdmVybGF5Q2xhc3NOYW1lOiAnJyxcclxuICBjb250ZW50Q2xhc3NOYW1lOiAnJyxcclxuICBjbG9zZUNsYXNzTmFtZTogJycsXHJcbiAgY2xvc2VBbGxPblBvcFN0YXRlOiB0cnVlXHJcbn1cclxuXHJcbi8vIFRPRE8gTG9hZGluZyBzeW1ib2xzP1xyXG5cclxuLy8gSW5jbHVkZSBlc2NhcGVIdG1sIGZ1bmN0aW9uIG9uIHRoZSBsaWJyYXJ5IG9iamVjdFxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkodmV4LCAnX2VzY2FwZUh0bWwnLCB7XHJcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICB3cml0YWJsZTogZmFsc2UsXHJcbiAgdmFsdWU6IGVzY2FwZUh0bWxcclxufSlcclxuXHJcbi8vIFBsdWdpbiBzeXN0ZW0hXHJcbnZleC5yZWdpc3RlclBsdWdpbiA9IGZ1bmN0aW9uIHJlZ2lzdGVyUGx1Z2luIChwbHVnaW5GbiwgbmFtZSkge1xyXG4gIHZhciBwbHVnaW4gPSBwbHVnaW5Gbih2ZXgpXHJcbiAgdmFyIHBsdWdpbk5hbWUgPSBuYW1lIHx8IHBsdWdpbi5uYW1lXHJcbiAgaWYgKHZleFtwbHVnaW5OYW1lXSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdQbHVnaW4gJyArIG5hbWUgKyAnIGlzIGFscmVhZHkgcmVnaXN0ZXJlZC4nKVxyXG4gIH1cclxuICB2ZXhbcGx1Z2luTmFtZV0gPSBwbHVnaW5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB2ZXhcclxuXG59LHtcImNsYXNzbGlzdC1wb2x5ZmlsbFwiOjEsXCJkb21pZnlcIjoyLFwiZXM2LW9iamVjdC1hc3NpZ25cIjozfV19LHt9LFs0XSkoNClcbn0pOyIsImZ1bmN0aW9uIHBvbHlmaWxsKHdpbmRvdykge1xuICB2YXIgRWxlbWVudFByb3RvdHlwZSA9IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZTtcblxuICBpZiAodHlwZW9mIEVsZW1lbnRQcm90b3R5cGUubWF0Y2hlcyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIEVsZW1lbnRQcm90b3R5cGUubWF0Y2hlcyA9IEVsZW1lbnRQcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudFByb3RvdHlwZS5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudFByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgZnVuY3Rpb24gbWF0Y2hlcyhzZWxlY3Rvcikge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzO1xuICAgICAgdmFyIGVsZW1lbnRzID0gKGVsZW1lbnQuZG9jdW1lbnQgfHwgZWxlbWVudC5vd25lckRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG5cbiAgICAgIHdoaWxlIChlbGVtZW50c1tpbmRleF0gJiYgZWxlbWVudHNbaW5kZXhdICE9PSBlbGVtZW50KSB7XG4gICAgICAgICsraW5kZXg7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBCb29sZWFuKGVsZW1lbnRzW2luZGV4XSk7XG4gICAgfTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgRWxlbWVudFByb3RvdHlwZS5jbG9zZXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgRWxlbWVudFByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24gY2xvc2VzdChzZWxlY3Rvcikge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzO1xuXG4gICAgICB3aGlsZSAoZWxlbWVudCAmJiBlbGVtZW50Lm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBvbHlmaWxsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsInZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IChvYmopID0+IChPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSkgOiAob2JqKSA9PiAob2JqLl9fcHJvdG9fXyk7XG52YXIgbGVhZlByb3RvdHlwZXM7XG4vLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLy8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8vIG1vZGUgJiAxNjogcmV0dXJuIHZhbHVlIHdoZW4gaXQncyBQcm9taXNlLWxpa2Vcbi8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbl9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG5cdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IHRoaXModmFsdWUpO1xuXHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlKSB7XG5cdFx0aWYoKG1vZGUgJiA0KSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYoKG1vZGUgJiAxNikgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZTtcblx0fVxuXHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuXHR2YXIgZGVmID0ge307XG5cdGxlYWZQcm90b3R5cGVzID0gbGVhZlByb3RvdHlwZXMgfHwgW251bGwsIGdldFByb3RvKHt9KSwgZ2V0UHJvdG8oW10pLCBnZXRQcm90byhnZXRQcm90byldO1xuXHRmb3IodmFyIGN1cnJlbnQgPSBtb2RlICYgMiAmJiB2YWx1ZTsgdHlwZW9mIGN1cnJlbnQgPT0gJ29iamVjdCcgJiYgIX5sZWFmUHJvdG90eXBlcy5pbmRleE9mKGN1cnJlbnQpOyBjdXJyZW50ID0gZ2V0UHJvdG8oY3VycmVudCkpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjdXJyZW50KS5mb3JFYWNoKChrZXkpID0+IChkZWZba2V5XSA9ICgpID0+ICh2YWx1ZVtrZXldKSkpO1xuXHR9XG5cdGRlZlsnZGVmYXVsdCddID0gKCkgPT4gKHZhbHVlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBkZWYpO1xuXHRyZXR1cm4gbnM7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5jaHVuay5qcz92PTkyMDk5NjU2MzcwJmVuYWJsZV9qc19taW5pZmljYXRpb249MVwiO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwiRkZDLVNLRUxFVE9OLVRIRU1FOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDA6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rRkZDX1NLRUxFVE9OX1RIRU1FXCJdID0gc2VsZltcIndlYnBhY2tDaHVua0ZGQ19TS0VMRVRPTl9USEVNRVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuX193ZWJwYWNrX3B1YmxpY19wYXRoX187XHJcblxyXG5pbXBvcnQgJy4uL3N0eWxlcy9yYWRpYW50LnNjc3MnO1xyXG5pbXBvcnQgc21vb3Roc2Nyb2xsIGZyb20gJ3Ntb290aHNjcm9sbC1wb2x5ZmlsbCc7XHJcbmltcG9ydCBUaGVtZSBmcm9tICcuL1RoZW1lJztcclxuXHJcbnNtb290aHNjcm9sbC5wb2x5ZmlsbCgpO1xyXG5cclxubGV0IHRoZW1lID0gbmV3IFRoZW1lKCk7XHJcbnRoZW1lLm1vdW50Q29tcG9uZW50cygpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2hvcGlmeTpzZWN0aW9uOnVubG9hZCcsIChlKSA9PiB7XHJcbiAgdGhlbWUudW5tb3VudENvbXBvbmVudHMoZS50YXJnZXQpO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3BpZnk6c2VjdGlvbjpsb2FkJywgKGUpID0+IHtcclxuICB0aGVtZS5tb3VudENvbXBvbmVudHMoZS50YXJnZXQpO1xyXG4gIHRoZW1lLl9jdHguZW1pdCgncmFkaWFudC0tbGF6eS1sb2FkLXVwZGF0ZScpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
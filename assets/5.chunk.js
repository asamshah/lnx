"use strict";
(self["webpackChunkFFC_SKELETON_THEME"] = self["webpackChunkFFC_SKELETON_THEME"] || []).push([[5],{

/***/ "./node_modules/pinch-to-zoom/dist/index.module.js":
/*!*********************************************************!*\
  !*** ./node_modules/pinch-to-zoom/dist/index.module.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PinchToZoom: () => (/* binding */ PinchToZoom)
/* harmony export */ });
function getLengthOfLine(point1, point2) {
    let middlePoint = {
        clientX: point2.clientX,
        clientY: point1.clientY,
    };
    let legX = Math.abs(middlePoint.clientX - point1.clientX);
    let legY = Math.abs(middlePoint.clientY - point2.clientY);
    return Math.sqrt(legX * legX + legY * legY);
}
function getMiddleOfLine(point1, point2) {
    return {
        clientX: Math.min(point2.clientX, point1.clientX) + (Math.abs(point2.clientX - point1.clientX) / 2),
        clientY: Math.min(point2.clientY, point1.clientY) + (Math.abs(point2.clientY - point1.clientY) / 2),
    };
}
function getMiddleTouchOnElement(touches, boundingRect) {
    let middleTouch = getMiddleOfLine(touches[0], touches[1]);
    return {
        clientX: middleTouch.clientX - boundingRect.left,
        clientY: middleTouch.clientY - boundingRect.top,
    };
}
function isTouchesInsideRect(touches, rect) {
    return Array.prototype.every.call(touches, (touch) => ((touch.clientX <= rect.right) && (touch.clientX >= rect.left)
        &&
            (touch.clientY <= rect.bottom) && (touch.clientY >= rect.top)));
}

let defaultConfig = {
    maxScale: 4,
    minScale: 1,
    transitionDuration: 100,
};
class PinchToZoom {
    constructor(element, config = defaultConfig) {
        this.element = element;
        this.unsubscribe = () => {
            clearTimeout(this.timeoutId);
            this.element.removeEventListener('touchstart', this.onTouchStart);
            this.element.removeEventListener('touchmove', this.onTouchMove);
            this.element.removeEventListener('touchend', this.onTouchEnd);
            this.element.removeEventListener('touchcancel', this.onTouchEnd);
        };
        this.onTouchStart = (event) => {
            if (event.touches.length !== 2) {
                return;
            }
            this.initialBoundingRect = this.element.getBoundingClientRect();
            if (!event.touches.length || !isTouchesInsideRect(event.touches, this.initialBoundingRect)) {
                return;
            }
            event.preventDefault();
            this.setTransitionDuration(0);
            let [touch1, touch2] = event.touches;
            let middleTouchOnElement = getMiddleTouchOnElement(event.touches, this.initialBoundingRect);
            this.initialPinchLength = getLengthOfLine(touch1, touch2);
            this.setTransformOrigin(`${middleTouchOnElement.clientX}px`, `${middleTouchOnElement.clientY}px`);
            this.firstTouch = middleTouchOnElement;
        };
        this.onTouchMove = (event) => {
            if (this.firstTouch) {
                let middleTouchOnElement = getMiddleTouchOnElement(event.touches, this.initialBoundingRect);
                this.currentPinchLength = getLengthOfLine(event.touches[0], event.touches[1]);
                let scale = this.currentPinchLength / this.initialPinchLength;
                let translateX = middleTouchOnElement.clientX - this.firstTouch.clientX;
                let translateY = middleTouchOnElement.clientY - this.firstTouch.clientY;
                this.setTransform(scale, translateX, translateY);
                if (this.config.onScale) {
                    this.config.onScale(scale, translateX, translateY);
                }
            }
        };
        this.onTouchEnd = () => {
            this.setTransitionDuration(this.config.transitionDuration);
            this.setTransform(1, 0, 0);
            clearTimeout(this.timeoutId);
            this.timeoutId = window.setTimeout(() => {
                this.setTransitionDuration(0);
                this.setTransformOrigin('50%', '50%');
            }, this.config.transitionDuration);
            this.resetProperties();
        };
        this.resetProperties = () => {
            this.firstTouch = null;
            this.initialPinchLength = null;
            this.currentPinchLength = null;
            this.initialBoundingRect = null;
        };
        this.setTransitionDuration = (duration) => {
            this.element.style.transitionDuration = `${duration}ms`;
        };
        this.setTransform = (scale, translateX, translateY) => {
            scale = scale < this.config.minScale ? this.config.minScale : scale;
            scale = scale > this.config.maxScale ? this.config.maxScale : scale;
            this.element.style.transform = (`translate3d(${translateX}px, ${translateY}px, 0)` +
                `scale3d(${scale}, ${scale}, 1)`);
        };
        this.setTransformOrigin = (x, y) => {
            this.element.style.transformOrigin = `${x} ${y} 0`;
        };
        this.config = Object.assign({}, defaultConfig, config);
        element.addEventListener('touchstart', this.onTouchStart);
        element.addEventListener('touchmove', this.onTouchMove);
        element.addEventListener('touchend', this.onTouchEnd);
        element.addEventListener('touchcancel', this.onTouchEnd);
    }
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jaHVuay5qcz92PTkyMDk5NjU2MzcwJmVuYWJsZV9qc19taW5pZmljYXRpb249MSIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GRkMtU0tFTEVUT04tVEhFTUUvLi9ub2RlX21vZHVsZXMvcGluY2gtdG8tem9vbS9kaXN0L2luZGV4Lm1vZHVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRMZW5ndGhPZkxpbmUocG9pbnQxLCBwb2ludDIpIHtcbiAgICBsZXQgbWlkZGxlUG9pbnQgPSB7XG4gICAgICAgIGNsaWVudFg6IHBvaW50Mi5jbGllbnRYLFxuICAgICAgICBjbGllbnRZOiBwb2ludDEuY2xpZW50WSxcbiAgICB9O1xuICAgIGxldCBsZWdYID0gTWF0aC5hYnMobWlkZGxlUG9pbnQuY2xpZW50WCAtIHBvaW50MS5jbGllbnRYKTtcbiAgICBsZXQgbGVnWSA9IE1hdGguYWJzKG1pZGRsZVBvaW50LmNsaWVudFkgLSBwb2ludDIuY2xpZW50WSk7XG4gICAgcmV0dXJuIE1hdGguc3FydChsZWdYICogbGVnWCArIGxlZ1kgKiBsZWdZKTtcbn1cbmZ1bmN0aW9uIGdldE1pZGRsZU9mTGluZShwb2ludDEsIHBvaW50Mikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNsaWVudFg6IE1hdGgubWluKHBvaW50Mi5jbGllbnRYLCBwb2ludDEuY2xpZW50WCkgKyAoTWF0aC5hYnMocG9pbnQyLmNsaWVudFggLSBwb2ludDEuY2xpZW50WCkgLyAyKSxcbiAgICAgICAgY2xpZW50WTogTWF0aC5taW4ocG9pbnQyLmNsaWVudFksIHBvaW50MS5jbGllbnRZKSArIChNYXRoLmFicyhwb2ludDIuY2xpZW50WSAtIHBvaW50MS5jbGllbnRZKSAvIDIpLFxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRNaWRkbGVUb3VjaE9uRWxlbWVudCh0b3VjaGVzLCBib3VuZGluZ1JlY3QpIHtcbiAgICBsZXQgbWlkZGxlVG91Y2ggPSBnZXRNaWRkbGVPZkxpbmUodG91Y2hlc1swXSwgdG91Y2hlc1sxXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xpZW50WDogbWlkZGxlVG91Y2guY2xpZW50WCAtIGJvdW5kaW5nUmVjdC5sZWZ0LFxuICAgICAgICBjbGllbnRZOiBtaWRkbGVUb3VjaC5jbGllbnRZIC0gYm91bmRpbmdSZWN0LnRvcCxcbiAgICB9O1xufVxuZnVuY3Rpb24gaXNUb3VjaGVzSW5zaWRlUmVjdCh0b3VjaGVzLCByZWN0KSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5ldmVyeS5jYWxsKHRvdWNoZXMsICh0b3VjaCkgPT4gKCh0b3VjaC5jbGllbnRYIDw9IHJlY3QucmlnaHQpICYmICh0b3VjaC5jbGllbnRYID49IHJlY3QubGVmdClcbiAgICAgICAgJiZcbiAgICAgICAgICAgICh0b3VjaC5jbGllbnRZIDw9IHJlY3QuYm90dG9tKSAmJiAodG91Y2guY2xpZW50WSA+PSByZWN0LnRvcCkpKTtcbn1cblxubGV0IGRlZmF1bHRDb25maWcgPSB7XG4gICAgbWF4U2NhbGU6IDQsXG4gICAgbWluU2NhbGU6IDEsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAxMDAsXG59O1xuY2xhc3MgUGluY2hUb1pvb20ge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZyA9IGRlZmF1bHRDb25maWcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaFN0YXJ0KTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLm9uVG91Y2hFbmQpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uVG91Y2hTdGFydCA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbml0aWFsQm91bmRpbmdSZWN0ID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgaWYgKCFldmVudC50b3VjaGVzLmxlbmd0aCB8fCAhaXNUb3VjaGVzSW5zaWRlUmVjdChldmVudC50b3VjaGVzLCB0aGlzLmluaXRpYWxCb3VuZGluZ1JlY3QpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbkR1cmF0aW9uKDApO1xuICAgICAgICAgICAgbGV0IFt0b3VjaDEsIHRvdWNoMl0gPSBldmVudC50b3VjaGVzO1xuICAgICAgICAgICAgbGV0IG1pZGRsZVRvdWNoT25FbGVtZW50ID0gZ2V0TWlkZGxlVG91Y2hPbkVsZW1lbnQoZXZlbnQudG91Y2hlcywgdGhpcy5pbml0aWFsQm91bmRpbmdSZWN0KTtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFBpbmNoTGVuZ3RoID0gZ2V0TGVuZ3RoT2ZMaW5lKHRvdWNoMSwgdG91Y2gyKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VHJhbnNmb3JtT3JpZ2luKGAke21pZGRsZVRvdWNoT25FbGVtZW50LmNsaWVudFh9cHhgLCBgJHttaWRkbGVUb3VjaE9uRWxlbWVudC5jbGllbnRZfXB4YCk7XG4gICAgICAgICAgICB0aGlzLmZpcnN0VG91Y2ggPSBtaWRkbGVUb3VjaE9uRWxlbWVudDtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vblRvdWNoTW92ZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3RUb3VjaCkge1xuICAgICAgICAgICAgICAgIGxldCBtaWRkbGVUb3VjaE9uRWxlbWVudCA9IGdldE1pZGRsZVRvdWNoT25FbGVtZW50KGV2ZW50LnRvdWNoZXMsIHRoaXMuaW5pdGlhbEJvdW5kaW5nUmVjdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGluY2hMZW5ndGggPSBnZXRMZW5ndGhPZkxpbmUoZXZlbnQudG91Y2hlc1swXSwgZXZlbnQudG91Y2hlc1sxXSk7XG4gICAgICAgICAgICAgICAgbGV0IHNjYWxlID0gdGhpcy5jdXJyZW50UGluY2hMZW5ndGggLyB0aGlzLmluaXRpYWxQaW5jaExlbmd0aDtcbiAgICAgICAgICAgICAgICBsZXQgdHJhbnNsYXRlWCA9IG1pZGRsZVRvdWNoT25FbGVtZW50LmNsaWVudFggLSB0aGlzLmZpcnN0VG91Y2guY2xpZW50WDtcbiAgICAgICAgICAgICAgICBsZXQgdHJhbnNsYXRlWSA9IG1pZGRsZVRvdWNoT25FbGVtZW50LmNsaWVudFkgLSB0aGlzLmZpcnN0VG91Y2guY2xpZW50WTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRyYW5zZm9ybShzY2FsZSwgdHJhbnNsYXRlWCwgdHJhbnNsYXRlWSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLm9uU2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcub25TY2FsZShzY2FsZSwgdHJhbnNsYXRlWCwgdHJhbnNsYXRlWSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uVG91Y2hFbmQgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFRyYW5zaXRpb25EdXJhdGlvbih0aGlzLmNvbmZpZy50cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICAgICAgdGhpcy5zZXRUcmFuc2Zvcm0oMSwgMCwgMCk7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SWQpO1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uRHVyYXRpb24oMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUcmFuc2Zvcm1PcmlnaW4oJzUwJScsICc1MCUnKTtcbiAgICAgICAgICAgIH0sIHRoaXMuY29uZmlnLnRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICAgICAgICB0aGlzLnJlc2V0UHJvcGVydGllcygpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlc2V0UHJvcGVydGllcyA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RUb3VjaCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxQaW5jaExlbmd0aCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaW5jaExlbmd0aCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxCb3VuZGluZ1JlY3QgPSBudWxsO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldFRyYW5zaXRpb25EdXJhdGlvbiA9IChkdXJhdGlvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke2R1cmF0aW9ufW1zYDtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRUcmFuc2Zvcm0gPSAoc2NhbGUsIHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVkpID0+IHtcbiAgICAgICAgICAgIHNjYWxlID0gc2NhbGUgPCB0aGlzLmNvbmZpZy5taW5TY2FsZSA/IHRoaXMuY29uZmlnLm1pblNjYWxlIDogc2NhbGU7XG4gICAgICAgICAgICBzY2FsZSA9IHNjYWxlID4gdGhpcy5jb25maWcubWF4U2NhbGUgPyB0aGlzLmNvbmZpZy5tYXhTY2FsZSA6IHNjYWxlO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IChgdHJhbnNsYXRlM2QoJHt0cmFuc2xhdGVYfXB4LCAke3RyYW5zbGF0ZVl9cHgsIDApYCArXG4gICAgICAgICAgICAgICAgYHNjYWxlM2QoJHtzY2FsZX0sICR7c2NhbGV9LCAxKWApO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldFRyYW5zZm9ybU9yaWdpbiA9ICh4LCB5KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gYCR7eH0gJHt5fSAwYDtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0Q29uZmlnLCBjb25maWcpO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQpO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5vblRvdWNoRW5kKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFBpbmNoVG9ab29tIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
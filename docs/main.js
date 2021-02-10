(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /workspaces/davidviolet18.github.io/src/main.ts */"zUnb");


/***/ }),

/***/ "0q0b":
/*!***************************************************!*\
  !*** ./src/app/shared/slides/slides.component.ts ***!
  \***************************************************/
/*! exports provided: SlidesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesComponent", function() { return SlidesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function SlidesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlidesComponent_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.prevImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "keyboard_arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SlidesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlidesComponent_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.nextImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SlidesComponent {
    constructor() {
        this.slides = [];
        this._currentSlide = 0;
    }
    get currentSlide() { return this._currentSlide; }
    set currentSlide(value) {
        if (value < 0)
            value = 0;
        if (value >= this.slides_length)
            value = this.slides_length - 1;
        this._currentSlide = value;
    }
    get slides_length() { return this.slides.length; }
    ngOnInit() {
    }
    nextImage() {
        this.currentSlide += 1;
    }
    prevImage() {
        this.currentSlide -= 1;
    }
}
SlidesComponent.ɵfac = function SlidesComponent_Factory(t) { return new (t || SlidesComponent)(); };
SlidesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SlidesComponent, selectors: [["app-slides"]], inputs: { slides: "slides" }, decls: 13, vars: 5, consts: [[1, "slider"], [1, "layer-container"], [1, "layer"], ["width", "100%", 3, "src"], [1, "actions-btns"], [1, "material-icons"], ["class", "left-btn", 4, "ngIf"], ["class", "right-btn", 4, "ngIf"], [1, "counter"], [1, "left-btn"], [3, "click"], [1, "right-btn"]], template: function SlidesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SlidesComponent_div_8_Template, 4, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SlidesComponent_div_9_Template, 4, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.slides[ctx.currentSlide], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSlide > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSlide + 1 < ctx.slides_length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.currentSlide + 1, " - ", ctx.slides_length, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".slider[_ngcontent-%COMP%]   .layer-container[_ngcontent-%COMP%] {\n  min-height: 12rem;\n  position: relative;\n  border: 1px solid gray;\n}\n.slider[_ngcontent-%COMP%]   .layer-container[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%] {\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.slider[_ngcontent-%COMP%]   .layer-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  outline: 0;\n  padding: 0.5rem;\n  cursor: pointer;\n  transition: background-color 500ms ease;\n  color: white;\n}\n.slider[_ngcontent-%COMP%]   .layer-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border: 0;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.slider[_ngcontent-%COMP%]   .layer-container[_ngcontent-%COMP%]   .actions-btns[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  transition: opacity 500ms ease;\n  opacity: 0.2;\n}\n.slider[_ngcontent-%COMP%]   .layer-container[_ngcontent-%COMP%]   .left-btn[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]   .layer-container[_ngcontent-%COMP%]   .right-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 2rem;\n  line-height: 2.5rem;\n  background-color: rgba(0, 0, 0, 0.6);\n  top: 50%;\n  margin-top: -3rem;\n  transition: opacity 500ms ease;\n  opacity: 0.2;\n}\n.slider[_ngcontent-%COMP%]   .layer-container[_ngcontent-%COMP%]   .left-btn[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]   .layer-container[_ngcontent-%COMP%]   .right-btn[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n}\n.slider[_ngcontent-%COMP%]   .layer-container[_ngcontent-%COMP%]   .left-btn[_ngcontent-%COMP%] {\n  left: 0;\n}\n.slider[_ngcontent-%COMP%]   .layer-container[_ngcontent-%COMP%]   .right-btn[_ngcontent-%COMP%] {\n  right: 0;\n}\n.slider[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1rem;\n}\n.slider[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.5rem 2rem;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: white;\n  border-radius: 50px;\n}\n.slider[_ngcontent-%COMP%]:hover   .layer-container[_ngcontent-%COMP%]   .actions-btns[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.slider[_ngcontent-%COMP%]:hover   .layer-container[_ngcontent-%COMP%]   .left-btn[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]:hover   .layer-container[_ngcontent-%COMP%]   .right-btn[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NsaWRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUFSO0FBRVE7RUFDSSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFBWjtBQUdRO0VBQ0ksU0FBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsdUNBQUE7RUFLQSxZQUFBO0FBTFo7QUFDWTtFQUNJLFNBQUE7RUFDQSwwQ0FBQTtBQUNoQjtBQUdRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBRFo7QUFHUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFEWjtBQUVZO0VBQ0ksa0JBQUE7QUFBaEI7QUFHUTtFQUFZLE9BQUE7QUFBcEI7QUFDUTtFQUFhLFFBQUE7QUFFckI7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQURRO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBR1o7QUFHWTtFQUFnQixVQUFBO0FBQTVCO0FBQ1k7RUFBd0IsVUFBQTtBQUVwQyIsImZpbGUiOiJzbGlkZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVyIHtcbiAgICAubGF5ZXItY29udGFpbmVyIHtcbiAgICAgICAgbWluLWhlaWdodDogMTJyZW07XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcblxuICAgICAgICAubGF5ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zIGVhc2U7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgfVxuICAgICAgICAuYWN0aW9ucy1idG5zIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNik7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2U7XG4gICAgICAgICAgICBvcGFjaXR5OiAuMjtcbiAgICAgICAgfVxuICAgICAgICAubGVmdC1idG4sIC5yaWdodC1idG4ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtM3JlbTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZTtcbiAgICAgICAgICAgIG9wYWNpdHk6IC4yO1xuICAgICAgICAgICAgPiBidXR0b24ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubGVmdC1idG4geyBsZWZ0OiAwOyB9XG4gICAgICAgIC5yaWdodC1idG4geyByaWdodDogMDsgfVxuICAgIH1cbiAgICAuY291bnRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNik7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgLmxheWVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAuYWN0aW9ucy1idG5zIHsgb3BhY2l0eTogMTsgfVxuICAgICAgICAgICAgLmxlZnQtYnRuLCAucmlnaHQtYnRuIHsgb3BhY2l0eTogMTsgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "320Y":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _logo_reseaux_logo_reseaux_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logo-reseaux/logo-reseaux.component */ "wPIg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function HeaderComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function HeaderComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function HeaderComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A propos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "R\u00E9alisations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Me contacter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor() {
        this.menuOpened = false;
    }
    ngOnInit() {
    }
    toggleMenu() {
        this.menuOpened = !this.menuOpened;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 17, vars: 8, consts: [[1, "container", "d-flex", "align-items-center"], [1, "text-align-center", "ml-auto", "mr-auto", "menu"], [1, "d-xs-flex", 3, "click"], [1, "material-icons"], [4, "ngIf", "ngIfThen", "ngIfElse"], [1, "text-align-right", "white-space-nowrap", "reseaux"], [1, "menu-overlay", 3, "click"], ["menu", ""], ["routerLink", "", "routerLinkActive", "active", 1, "d-xs-none"], ["routerLink", "realisations", "routerLinkActive", "active", 1, "d-xs-none"], ["routerLink", "", "fragment", "contact", 1, "d-xs-none"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "David Violet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_5_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_div_9_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-logo-reseaux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_12_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderComponent_div_14_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_ng_template_15_Template, 6, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true)("ngIfThen", _r2)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opened", ctx.menuOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true)("ngIfThen", _r2)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _logo_reseaux_logo_reseaux_component__WEBPACK_IMPORTED_MODULE_2__["LogoReseauxComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: ["[_nghost-%COMP%] {\n  background-color: var(--surface-background);\n  display: block;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: 5rem;\n}\n\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 1rem;\n}\n\n@media (min-width: 0px) and (max-width: 730px) {\n  .menu[_ngcontent-%COMP%] {\n    margin-right: 0px;\n  }\n}\n\n.reseaux[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n  padding: 0.5rem;\n}\n\n@media (min-width: 0px) and (max-width: 730px) {\n  .reseaux[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.d-xs-flex[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n\n.menu-overlay[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (min-width: 0px) and (max-width: 730px) {\n  .menu-overlay[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    z-index: 999;\n    visibility: hidden;\n  }\n  .menu-overlay[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.8);\n    opacity: 0;\n    transition: all 500ms ease;\n  }\n  .menu-overlay[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    position: absolute;\n    background-color: #ffffff;\n    padding: 1rem 2rem;\n    border-radius: 1rem;\n    width: calc(90% - 4rem);\n    left: 5%;\n    bottom: 10%;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25), 0 2px 16px rgba(0, 0, 0, 0.25), 0 4px 32px rgba(0, 0, 0, 0.25);\n    transition: all 500ms ease;\n    opacity: 0;\n    transform: translateY(50vh);\n  }\n  .menu-overlay[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    display: block !important;\n    padding: 1rem 0rem;\n    margin: 1rem 0rem;\n  }\n  .menu-overlay.opened[_ngcontent-%COMP%] {\n    visibility: visible;\n  }\n  .menu-overlay.opened[_ngcontent-%COMP%]::before {\n    opacity: 1;\n  }\n  .menu-overlay.opened[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9taXhpbnMvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSwyQ0FBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7QUFESjs7QUFLSTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQUZSOztBQ09JO0VEUko7SUFNUSxpQkFBQTtFQUROO0FBQ0Y7O0FBS0k7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUZSOztBQ0xJO0VERUo7SUFRUSxhQUFBO0VBRE47QUFDRjs7QUFLSTtFQUNJLG1CQUFBO0FBRlI7O0FBTUE7RUFDSSxhQUFBO0FBSEo7O0FDbEJJO0VEb0JKO0lBR1EsY0FBQTtJQUNBLGVBQUE7SUFDQSxNQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxPQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VBRE47RUFFTTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtJQUNBLE1BQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLE9BQUE7SUFDQSxvQ0FBQTtJQUNBLFVBQUE7SUFDQSwwQkFBQTtFQUFWO0VBRU07SUFDSSxrQkFBQTtJQUNBLHlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7SUFDQSx5R0FBQTtJQUNBLDBCQUFBO0lBQ0EsVUFBQTtJQUNBLDJCQUFBO0VBQVY7RUFDVTtJQUNJLHlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFQUNkO0VBRU07SUFDSSxtQkFBQTtFQUFWO0VBQ1U7SUFDSSxVQUFBO0VBQ2Q7RUFDVTtJQUNJLHdCQUFBO0lBQ0EsVUFBQTtFQUNkO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9taXhpbnMvbWl4aW5zLnNjc3NcIjtcblxuOmhvc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtYmFja2dyb3VuZCk7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb250YWluZXIge1xuICAgIGhlaWdodDogNXJlbTtcbn1cblxuLm1lbnUge1xuICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgfVxuICAgIEBpbmNsdWRlIHhzIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgfVxufVxuXG4ucmVzZWF1eCB7XG4gICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgfVxuICAgIEBpbmNsdWRlIHhzIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi5kLXhzLWZsZXgge1xuICAgIGkge1xuICAgICAgICBtYXJnaW4tbGVmdDogLjVyZW07XG4gICAgfVxufVxuXG4ubWVudS1vdmVybGF5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIEBpbmNsdWRlIHhzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC44KTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgICA+IGRpdiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDkwJSAtIDRyZW0pO1xuICAgICAgICAgICAgbGVmdDogNSU7XG4gICAgICAgICAgICBib3R0b206IDEwJTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsMCwwLC4yNSksIDAgMnB4IDE2cHggcmdiYSgwLDAsMCwuMjUpLCAwIDRweCAzMnB4IHJnYmEoMCwwLDAsLjI1KTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHZoKTtcbiAgICAgICAgICAgID4gYSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDByZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDByZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5vcGVuZWQge1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgID4gZGl2IHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJAaW1wb3J0IFwiLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG4vLyBUWVBPR1JBUEhZXG5AbWl4aW4gdHlwb2dyYXBoeS10aGluIHsgZm9udC13ZWlnaHQ6IDEwMDsgfVxuQG1peGluIHR5cG9ncmFwaHktZXh0cmEtbGlnaHQgeyBmb250LXdlaWdodDogMjAwOyB9XG5AbWl4aW4gdHlwb2dyYXBoeS1saWdodCB7IGZvbnQtd2VpZ2h0OiAzMDA7IH1cbkBtaXhpbiB0eXBvZ3JhcGh5LW5vcm1hbCB7IGZvbnQtd2VpZ2h0OiA0MDA7IH1cbkBtaXhpbiB0eXBvZ3JhcGh5LW1lZGl1bSB7IGZvbnQtd2VpZ2h0OiA1MDA7IH1cbkBtaXhpbiB0eXBvZ3JhcGh5LXNlbWktYm9sZCB7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cbkBtaXhpbiB0eXBvZ3JhcGh5LWJvbGQgeyBmb250LXdlaWdodDogNzAwOyB9XG5AbWl4aW4gdHlwb2dyYXBoeS1leHRyYS1ib2xkIHsgZm9udC13ZWlnaHQ6IDgwMDsgfVxuQG1peGluIHR5cG9ncmFwaHktYmxhY2sgeyBmb250LXdlaWdodDogOTAwOyB9XG5cbkBtaXhpbiB0eXBvZ3JhcGh5LXJvYm90byB7IGZvbnQtZmFtaWx5OiAncm9ib3RvJywgc2Fucy1zZXJpZjsgfVxuQG1peGluIHR5cG9ncmFwaHktY29va2llIHsgZm9udC1mYW1pbHk6ICdjb29raWUnLCBjdXJzaXZlOyB9XG5cbi8vIFJFU1BPTlNJVkVcbkBtaXhpbiB4cyB7XG4gICAgJG1xOiBtYXAtZ2V0KCRtYXA6ICRicmVha3BvaW50cywgJGtleTogXCJ4c1wiKTtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3ttYXAtZ2V0KCRtcSwgXCJtaW5cIil9KSBhbmQgKG1heC13aWR0aDogI3ttYXAtZ2V0KCRtcSwgXCJtYXhcIil9KVxuICAgIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIHNtIHtcbiAgICAkbXE6IG1hcC1nZXQoJG1hcDogJGJyZWFrcG9pbnRzLCAka2V5OiBcInNtXCIpO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAje21hcC1nZXQoJG1xLCBcIm1pblwiKX0pIGFuZCAobWF4LXdpZHRoOiAje21hcC1nZXQoJG1xLCBcIm1heFwiKX0pXG4gICAge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5AbWl4aW4gbWQge1xuICAgICRtcTogbWFwLWdldCgkbWFwOiAkYnJlYWtwb2ludHMsICRrZXk6IFwibWRcIik7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7bWFwLWdldCgkbXEsIFwibWluXCIpfSkgYW5kIChtYXgtd2lkdGg6ICN7bWFwLWdldCgkbXEsIFwibWF4XCIpfSlcbiAgICB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiB4bCB7XG4gICAgJG1xOiBtYXAtZ2V0KCRtYXA6ICRicmVha3BvaW50cywgJGtleTogXCJ4bFwiKTtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3ttYXAtZ2V0KCRtcSwgXCJtaW5cIil9KSBhbmQgKG1heC13aWR0aDogI3ttYXAtZ2V0KCRtcSwgXCJtYXhcIil9KVxuICAgIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "JOQT":
/*!*********************************************************************************************!*\
  !*** ./src/app/page-home/sections/section-developpement/section-developpement.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SectionDeveloppementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionDeveloppementComponent", function() { return SectionDeveloppementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_illustration_developpement_illustration_developpement_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/illustration-developpement/illustration-developpement.component */ "NCQS");


class SectionDeveloppementComponent {
    constructor() { }
    ngOnInit() {
    }
}
SectionDeveloppementComponent.ɵfac = function SectionDeveloppementComponent_Factory(t) { return new (t || SectionDeveloppementComponent)(); };
SectionDeveloppementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionDeveloppementComponent, selectors: [["app-section-developpement"]], decls: 24, vars: 0, consts: [["id", "developpement"], [1, "decor"], [1, "line-decor"], [1, "container"], [1, "line", "left"], [1, "container", "d-grid", "grid-two-columns", "align-items-center", "grid-column-reverse"], [1, "content"], [1, "subtitle"], [1, "img"]], template: function SectionDeveloppementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " D\u00E9veloppement Web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "D\u00E9veloppement d\u2019interfaces et d\u2019applications serveurs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Code comment\u00E9 et structur\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Tout supports (pc, tablette, t\u00E9l\u00E9phone, ...)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Conforme aux normes web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "S\u00E9curisation des donn\u00E9es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-illustration-developpement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_illustration_developpement_illustration_developpement_component__WEBPACK_IMPORTED_MODULE_1__["IllustrationDeveloppementComponent"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n\n\n.decor[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/developpement-decor.svg\");\n  background-repeat: no-repeat;\n  background-position: center right;\n  background-size: auto;\n  position: absolute;\n  top: -10%;\n  left: 0;\n  height: 120%;\n  width: 50vw;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NlY3Rpb24tZGV2ZWxvcHBlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFRLGtCQUFBO0FBRVI7O0FBREE7Ozs7Ozs7O0VBQUE7O0FBVUE7RUFDSSx3REFBQTtFQUNBLDRCQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFHSiIsImZpbGUiOiJzZWN0aW9uLWRldmVsb3BwZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuLyouZGVjb3Ige1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xMDBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IC0xO1xuICAgID4gc3ZnIHtcbiAgICAgICAgd2lkdGg6IDQ1dnc7XG4gICAgfVxufSovXG5cbi5kZWNvciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9kZXZlbG9wcGVtZW50LWRlY29yLnN2Z1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciByaWdodDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTEwJTtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTIwJTtcbiAgICB3aWR0aDogNTB2dztcbiAgICB6LWluZGV4OiAtMTtcbn0iXX0= */"] });


/***/ }),

/***/ "JSry":
/*!*****************************************************************!*\
  !*** ./src/app/shared/logo-dribbble/logo-dribbble.component.ts ***!
  \*****************************************************************/
/*! exports provided: LogoDribbbleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoDribbbleComponent", function() { return LogoDribbbleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LogoDribbbleComponent {
    constructor() {
        this.invertedColor = false;
    }
    ngOnInit() {
    }
}
LogoDribbbleComponent.ɵfac = function LogoDribbbleComponent_Factory(t) { return new (t || LogoDribbbleComponent)(); };
LogoDribbbleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoDribbbleComponent, selectors: [["app-logo-dribbble"]], inputs: { invertedColor: "invertedColor" }, decls: 3, vars: 2, consts: [["width", "32", "height", "32", "viewBox", "0 0 32 32", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16 30.892C24.2843 30.892 31 24.1763 31 15.892C31 7.60776 24.2843 0.892029 16 0.892029C7.71573 0.892029 1 7.60776 1 15.892C1 24.1763 7.71573 30.892 16 30.892Z", "fill", "#EC407A"], ["d", "M16 0C7.178 0 0 7.178 0 16C0 24.822 7.178 32 16 32C24.822 32 32 24.822 32 16C32 7.178 24.822 0 16 0ZM29.994 16.12C26.606 15.226 23.132 15.122 19.822 15.804C19.37 14.676 18.882 13.566 18.358 12.47C21.352 11.07 24.12 9.172 26.548 6.826C28.69 9.284 30 12.488 30 16C30 16.04 29.994 16.078 29.994 16.12ZM25.134 5.414C22.866 7.604 20.286 9.388 17.49 10.692C15.996 7.832 14.248 5.1 12.27 2.52C13.46 2.19 14.706 2 16 2C19.49 2 22.68 3.292 25.134 5.414ZM10.294 3.228C12.324 5.812 14.106 8.564 15.624 11.446C11.424 13.05 6.864 13.666 2.298 13.132C3.224 8.7 6.256 5.04 10.294 3.228ZM2 16C2 15.7 2.026 15.406 2.046 15.112C3.23 15.252 4.414 15.344 5.594 15.344C9.358 15.344 13.056 14.608 16.522 13.258C17.002 14.258 17.454 15.272 17.872 16.3C12.956 17.776 8.576 20.924 5.628 25.37C3.382 22.886 2 19.604 2 16ZM7.09 26.79C9.802 22.526 13.938 19.52 18.592 18.16C19.856 21.64 20.766 25.254 21.296 28.952C19.662 29.624 17.874 30 16 30C12.618 30 9.512 28.794 7.09 26.79ZM23.172 28C22.622 24.476 21.75 21.026 20.556 17.696C23.578 17.128 26.74 17.262 29.82 18.132C29.174 22.324 26.672 25.9 23.172 28Z", "fill", "#C2185B"]], template: function LogoDribbbleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("contrast", ctx.invertedColor);
    } }, styles: [".contrast[_ngcontent-%COMP%]    > path[_ngcontent-%COMP%] {\n  fill: #6D6D6D;\n}\n.contrast[_ngcontent-%COMP%]    > path[_ngcontent-%COMP%]:first-child {\n  fill: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ28tZHJpYmJibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0FBQVI7QUFFSTtFQUNJLGFBQUE7QUFBUiIsImZpbGUiOiJsb2dvLWRyaWJiYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRyYXN0IHtcbiAgICA+IHBhdGgge1xuICAgICAgICBmaWxsOiAjNkQ2RDZEO1xuICAgIH1cbiAgICA+IHBhdGg6Zmlyc3QtY2hpbGQge1xuICAgICAgICBmaWxsOiAjZmZmZmZmO1xuICAgIH1cblxufSJdfQ== */"] });


/***/ }),

/***/ "JZDR":
/*!***********************************************************************************************!*\
  !*** ./src/app/page-home/sections/section-accompagnement/section-accompagnement.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SectionAccompagnementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionAccompagnementComponent", function() { return SectionAccompagnementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_illustration_accompagnement_illustration_accompagnement_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/illustration-accompagnement/illustration-accompagnement.component */ "YOn9");


class SectionAccompagnementComponent {
    constructor() { }
    ngOnInit() {
    }
}
SectionAccompagnementComponent.ɵfac = function SectionAccompagnementComponent_Factory(t) { return new (t || SectionAccompagnementComponent)(); };
SectionAccompagnementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionAccompagnementComponent, selectors: [["app-section-accompagnement"]], decls: 20, vars: 0, consts: [["id", "accompagnement"], [1, "decor"], [1, "line-decor"], [1, "container"], [1, "line", "right"], [1, "container", "d-grid", "grid-two-columns", "align-items-center"], [1, "content"], [1, "img"]], template: function SectionAccompagnementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Accompagnement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "H\u00E9bergement sur serveurs linux ou windows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Formation au d\u00E9veloppement web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Accompagnement des d\u00E9veloppeurs aux bonnes pratiques de l\u2019ergonomie web et mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-illustration-accompagnement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_illustration_accompagnement_illustration_accompagnement_component__WEBPACK_IMPORTED_MODULE_1__["IllustrationAccompagnementComponent"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n.decor[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/accompagnement-decor.svg\");\n  background-repeat: no-repeat;\n  background-position: top left;\n  background-size: auto;\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 50vw;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NlY3Rpb24tYWNjb21wYWduZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUSxrQkFBQTtBQUVSOztBQUFBO0VBQ0kseURBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBR0oiLCJmaWxlIjoic2VjdGlvbi1hY2NvbXBhZ25lbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgcG9zaXRpb246IHJlbGF0aXZlO31cblxuLmRlY29yIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2FjY29tcGFnbmVtZW50LWRlY29yLnN2Z1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNTB2dztcbiAgICB6LWluZGV4OiAtMTtcbn0iXX0= */"] });


/***/ }),

/***/ "NCQS":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/illustration-developpement/illustration-developpement.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: IllustrationDeveloppementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IllustrationDeveloppementComponent", function() { return IllustrationDeveloppementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class IllustrationDeveloppementComponent {
    constructor() { }
    ngOnInit() {
    }
}
IllustrationDeveloppementComponent.ɵfac = function IllustrationDeveloppementComponent_Factory(t) { return new (t || IllustrationDeveloppementComponent)(); };
IllustrationDeveloppementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IllustrationDeveloppementComponent, selectors: [["app-illustration-developpement"]], decls: 243, vars: 0, consts: [["width", "100%", "height", "100%", "viewBox", "0 0 1980 1615", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["width", "424.877", "height", "738.233", "transform", "matrix(0.866041 0.499972 -0.866041 0.499972 1233.95 799.502)", "fill", "black", "fill-opacity", "0.1"], ["d", "M920.634 1041.84L903.073 1031.97V1348.19L920.634 1358.61V1041.84Z", "fill", "#DBD9D4"], ["d", "M903.073 1031.97L920.634 1023.19L937.646 1031.97L920.634 1041.84L903.073 1031.97Z", "fill", "#F5F3EF"], ["d", "M920.634 1041.84V1358.69L937.646 1348.81V1031.97L920.634 1041.84Z", "fill", "#E8E6E1"], ["d", "M1487.64 706.844L1470.07 696.966V1013.19L1487.64 1023.61V706.844Z", "fill", "#DBD9D4"], ["d", "M1470.07 696.966L1487.64 688.185L1504.65 696.966L1487.64 706.844L1470.07 696.966Z", "fill", "#F5F3EF"], ["d", "M1487.64 706.844V1023.69L1504.65 1013.81V696.966L1487.64 706.844Z", "fill", "#E8E6E1"], ["d", "M619.636 864.844L602.075 854.966V1171.19L619.636 1181.61V864.844Z", "fill", "#DBD9D4"], ["d", "M602.075 854.966L619.636 846.185L636.648 854.966L619.636 864.844L602.075 854.966Z", "fill", "#F5F3EF"], ["d", "M619.636 864.844V1181.69L636.648 1171.81V854.966L619.636 864.844Z", "fill", "#E8E6E1"], ["d", "M902.635 1033.56L574.075 844.185L574.076 870.685L902.637 1060.61L902.635 1033.56Z", "fill", "#DBD9D4"], ["d", "M574.075 844.185L1195.57 488.185L1523.57 676.687L902.636 1033.56L574.075 844.185Z", "fill", "#F5F3EF"], ["d", "M902.636 1033.56V1060.69L1523.57 703.809V676.687L902.636 1033.56Z", "fill", "#E8E6E1"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M869.575 102.185C874.265 102.185 878.069 104.42 878.075 107.179L878.075 226.992L780.038 283.335V283.319L776.322 285.051L776.284 285.039C775.062 285.513 773.619 285.786 772.075 285.786C767.794 285.786 764.299 283.685 764.085 281.043L764.075 281.04V164.185C764.075 162.7 765.175 161.367 766.921 160.451L862.964 104.042C864.522 102.909 866.905 102.185 869.575 102.185ZM779.354 167.257C779.558 167.146 779.758 167.034 779.956 166.922V166.903L779.354 167.257Z", "fill", "#E74949"], ["d", "M764.075 164.185V164.074L764.077 164.074C764.075 164.111 764.075 164.148 764.075 164.185Z", "fill", "#E74949"], ["d", "M874.877 111.093C876.826 110.177 878.075 108.767 878.075 107.185C878.075 104.424 874.269 102.185 869.575 102.185C866.905 102.185 864.523 102.909 862.964 104.042L766.92 160.452C765.174 161.368 764.075 162.701 764.075 164.185C764.075 166.947 767.88 169.185 772.575 169.185C775.096 169.185 777.36 168.54 778.917 167.514L874.877 111.093Z", "fill", "white", "fill-opacity", "0.5"], ["d", "M780.075 166.855C778.071 167.99 775.822 169.185 772.575 169.185C767.88 169.185 764.075 166.947 764.075 164.185C764.075 164.148 764.075 164.111 764.077 164.074L764.075 164.074V164.185V281.04L764.085 281.043C764.299 283.685 767.794 285.786 772.075 285.786C773.619 285.786 775.062 285.513 776.284 285.039L776.322 285.051L780.075 283.302V166.855Z", "fill", "black", "fill-opacity", "0.1"], ["d", "M814.686 183.744L822.743 178.95V210.45C822.743 213.346 822.188 216.239 821.078 219.128C819.986 221.986 818.437 224.616 816.432 227.017C814.427 229.419 812.162 231.37 809.637 232.872C805.501 235.333 802.279 236.032 799.969 234.968C797.659 233.884 796.504 231.102 796.504 226.623L804.615 221.798C804.615 224.027 805.018 225.433 805.824 226.016C806.629 226.599 807.9 226.374 809.637 225.341C811.177 224.425 812.403 223.081 813.317 221.308C814.23 219.536 814.686 217.514 814.686 215.244V183.744Z", "fill", "white"], ["d", "M849.922 196.343C849.922 194.572 849.385 193.538 848.31 193.239C847.236 192.92 845.303 193.07 842.509 193.69C839.716 194.29 837.505 194.563 835.876 194.512C831.436 194.362 829.216 191.922 829.216 187.193C829.216 184.735 829.806 182.196 830.988 179.576C832.188 176.925 833.898 174.397 836.118 171.993C838.356 169.578 840.862 167.545 843.637 165.894C846.431 164.233 848.919 163.346 851.104 163.234C853.288 163.101 854.98 163.75 856.179 165.183C857.397 166.604 858.006 168.679 858.006 171.409L849.949 176.202C849.949 174.119 849.385 172.84 848.257 172.365C847.129 171.869 845.544 172.229 843.503 173.443C841.534 174.615 840.003 176.015 838.911 177.644C837.819 179.252 837.272 180.848 837.272 182.431C837.272 183.91 837.908 184.772 839.179 185.015C840.468 185.248 842.357 185.062 844.846 184.457C849.43 183.334 852.769 183.337 854.863 184.466C856.958 185.594 858.006 187.929 858.006 191.471C858.006 195.409 856.726 199.264 854.165 203.037C851.605 206.79 848.158 209.955 843.825 212.532C840.818 214.322 838.078 215.316 835.607 215.515C833.137 215.694 831.248 215.057 829.941 213.606C828.652 212.143 828.007 209.943 828.007 207.006L836.091 202.197C836.091 207.217 838.669 208.194 843.825 205.126C845.741 203.986 847.236 202.649 848.31 201.114C849.385 199.558 849.922 197.968 849.922 196.343Z", "fill", "white"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1084.08 142.842C1088.77 142.842 1092.58 145.077 1092.58 147.835L1092.58 267.649L994.547 323.991V323.975L990.83 325.708L990.793 325.695C989.57 326.169 988.128 326.443 986.583 326.443C982.303 326.443 978.808 324.342 978.594 321.7L978.583 321.696V204.842C978.583 203.357 979.683 202.024 981.43 201.108L1077.47 144.698C1079.03 143.566 1081.41 142.842 1084.08 142.842ZM993.863 207.913C994.067 207.802 994.267 207.69 994.464 207.579V207.56L993.863 207.913Z", "fill", "#ECD361"], ["d", "M978.583 204.842V204.73L978.585 204.731C978.584 204.768 978.583 204.804 978.583 204.842Z", "fill", "#ECD361"], ["d", "M1089.39 151.75C1091.33 150.833 1092.58 149.423 1092.58 147.842C1092.58 145.08 1088.78 142.842 1084.08 142.842C1081.41 142.842 1079.03 143.566 1077.47 144.698L981.428 201.109C979.683 202.024 978.583 203.357 978.583 204.842C978.583 207.603 982.389 209.842 987.083 209.842C989.604 209.842 991.869 209.196 993.426 208.171L1089.39 151.75Z", "fill", "white", "fill-opacity", "0.5"], ["d", "M994.583 207.511C992.58 208.646 990.33 209.842 987.083 209.842C982.389 209.842 978.583 207.603 978.583 204.842C978.583 204.804 978.584 204.768 978.585 204.731L978.583 204.73V204.842V321.696L978.594 321.7C978.808 324.342 982.303 326.443 986.583 326.443C988.128 326.443 989.57 326.169 990.793 325.695L990.83 325.708L994.583 323.958V207.511Z", "fill", "black", "fill-opacity", "0.1"], ["d", "M1014.2 259.531L1029.51 256.705V265.455L1006.39 267.806V260.431L1029.51 235.268V244.018L1014.2 259.531Z", "fill", "black"], ["d", "M1038.35 268.386L1032.57 271.821L1046.97 213.851L1052.74 210.416L1038.35 268.386Z", "fill", "black"], ["d", "M1072.32 224.861L1056.72 227.801V219.113L1080.11 216.603V223.947L1056.72 249.301V240.582L1072.32 224.861Z", "fill", "black"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M628.148 205.556C632.838 205.556 636.642 207.791 636.648 210.549L636.648 330.363L538.611 386.706V386.689L534.895 388.422L534.857 388.409C533.635 388.883 532.192 389.157 530.648 389.157C526.367 389.157 522.872 387.056 522.658 384.414L522.648 384.41V267.556C522.648 266.071 523.748 264.738 525.494 263.822L621.537 207.412C623.095 206.28 625.478 205.556 628.148 205.556ZM537.927 270.627C538.131 270.516 538.331 270.405 538.529 270.293V270.274L537.927 270.627Z", "fill", "#59AFE0"], ["d", "M522.648 267.556V267.445L522.65 267.445C522.648 267.482 522.648 267.519 522.648 267.556Z", "fill", "#59AFE0"], ["d", "M633.45 214.464C635.399 213.547 636.648 212.137 636.648 210.556C636.648 207.794 632.842 205.556 628.148 205.556C625.478 205.556 623.096 206.28 621.537 207.412L525.493 263.823C523.747 264.739 522.648 266.072 522.648 267.556C522.648 270.317 526.453 272.556 531.148 272.556C533.669 272.556 535.933 271.91 537.49 270.885L633.45 214.464Z", "fill", "white", "fill-opacity", "0.5"], ["d", "M538.648 270.226C536.644 271.36 534.395 272.556 531.148 272.556C526.453 272.556 522.648 270.317 522.648 267.556C522.648 267.519 522.648 267.482 522.65 267.445L522.648 267.445V267.556V384.41L522.658 384.414C522.872 387.056 526.367 389.157 530.648 389.157C532.192 389.157 533.635 388.883 534.857 388.409L534.895 388.422L538.648 386.672V270.226Z", "fill", "black", "fill-opacity", "0.1"], ["d", "M563.741 349.957C557.295 351.688 554.073 348.761 554.073 341.178V334.959C554.073 330.563 552.479 329.314 549.292 331.21V324.741C552.408 322.887 554.001 319.867 554.073 315.678V309.053C554.073 305.199 554.878 301.605 556.49 298.271C558.101 294.938 560.518 291.781 563.741 288.801L565.245 292.938C563.884 294.33 562.855 295.964 562.156 297.837C561.458 299.69 561.091 301.909 561.055 304.493V311.055C561.055 315.763 559.453 320.019 556.248 323.821C559.453 323.831 561.055 326.201 561.055 330.93V337.555C561.145 342.377 562.541 344.525 565.245 344L563.741 349.957Z", "fill", "white"], ["d", "M569.542 330.819C569.542 329.381 569.954 327.969 570.777 326.584C571.619 325.187 572.666 324.116 573.92 323.37C575.191 322.614 576.238 322.439 577.062 322.845C577.903 323.24 578.324 324.156 578.324 325.594C578.324 327.01 577.912 328.412 577.089 329.798C576.265 331.162 575.209 332.228 573.92 332.995C572.648 333.752 571.601 333.937 570.777 333.552C569.954 333.146 569.542 332.235 569.542 330.819Z", "fill", "white"], ["d", "M585.548 321.296C585.548 319.858 585.96 318.447 586.784 317.061C587.625 315.664 588.673 314.593 589.926 313.848C591.197 313.091 592.245 312.916 593.068 313.322C593.91 313.717 594.331 314.633 594.331 316.071C594.331 317.488 593.919 318.889 593.095 320.275C592.272 321.64 591.215 322.706 589.926 323.473C588.655 324.229 587.607 324.414 586.784 324.029C585.96 323.624 585.548 322.712 585.548 321.296Z", "fill", "white"], ["d", "M601.555 311.773C601.555 310.335 601.967 308.924 602.79 307.538C603.632 306.141 604.679 305.07 605.932 304.325C607.204 303.568 608.251 303.393 609.075 303.799C609.916 304.194 610.337 305.111 610.337 306.548C610.337 307.965 609.925 309.366 609.102 310.752C608.278 312.117 607.222 313.183 605.932 313.95C604.661 314.706 603.614 314.892 602.79 314.507C601.967 314.101 601.555 313.19 601.555 311.773Z", "fill", "white"], ["d", "M615.091 314.345C617.812 311.601 619.209 307.749 619.28 302.79V296.165C619.28 291.457 620.918 287.211 624.195 283.428C620.918 283.544 619.28 281.196 619.28 276.384V269.852C619.209 265.041 617.812 262.851 615.091 263.283L616.594 257.356C619.799 256.491 622.207 256.767 623.819 258.183C625.43 259.579 626.245 262.188 626.263 266.011V272.729C626.334 276.833 627.928 277.958 631.043 276.104V282.573C627.856 284.469 626.263 287.594 626.263 291.948V298.729C626.12 306.106 622.897 312.701 616.594 318.513L615.091 314.345Z", "fill", "white"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M537.757 467.283C542.448 467.283 546.251 469.518 546.257 472.277L546.258 592.09L448.221 648.433V648.417L444.504 650.149L444.467 650.137C443.244 650.611 441.802 650.885 440.257 650.885C435.977 650.885 432.481 648.783 432.268 646.141L432.257 646.138V529.283C432.257 527.799 433.357 526.465 435.104 525.55L531.147 469.14C532.705 468.007 535.087 467.283 537.757 467.283ZM447.537 532.355C447.74 532.244 447.94 532.132 448.138 532.021V532.001L447.537 532.355Z", "fill", "#ECD361"], ["d", "M432.257 529.283V529.172L432.259 529.172C432.258 529.209 432.257 529.246 432.257 529.283Z", "fill", "#ECD361"], ["d", "M543.06 476.191C545.009 475.275 546.257 473.865 546.257 472.283C546.257 469.522 542.452 467.283 537.757 467.283C535.088 467.283 532.705 468.007 531.147 469.14L435.102 525.55C433.357 526.466 432.257 527.799 432.257 529.283C432.257 532.045 436.063 534.283 440.757 534.283C443.278 534.283 445.543 533.638 447.1 532.612L543.06 476.191Z", "fill", "white", "fill-opacity", "0.5"], ["d", "M448.257 531.953C446.253 533.088 444.004 534.283 440.757 534.283C436.063 534.283 432.257 532.045 432.257 529.283C432.257 529.246 432.258 529.209 432.259 529.172L432.257 529.172V529.283V646.138L432.268 646.141C432.481 648.783 435.977 650.885 440.257 650.885C441.802 650.885 443.244 650.611 444.467 650.137L444.504 650.149L448.257 648.4V531.953Z", "fill", "black", "fill-opacity", "0.1"], ["d", "M468.725 570.637L474.224 555.6L481.173 551.466L472.633 573.469L481.395 585.459L474.365 589.641L468.725 581.043L463.086 596.352L456.056 600.534L464.818 578.118L456.277 566.277L463.227 562.143L468.725 570.637Z", "fill", "black"], ["d", "M492.352 544.815L499.886 565.083L507.379 535.875L515.315 531.154V565.279L509.252 568.886V559.558L509.856 543.097L501.94 573.236L497.791 575.704L489.895 554.996L490.499 570.714V580.042L484.457 583.637V549.512L492.352 544.815Z", "fill", "black"], ["d", "M526.635 552.896L539.465 545.262V550.911L520.592 562.139V528.014L526.635 524.419V552.896Z", "fill", "black"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M699.651 609.584C704.342 609.584 708.145 611.819 708.151 614.577L708.151 734.391L610.114 790.734V790.717L606.398 792.45L606.361 792.438C605.138 792.911 603.696 793.185 602.151 793.185C597.87 793.185 594.375 791.084 594.161 788.442L594.151 788.438V671.584C594.151 670.099 595.251 668.766 596.997 667.85L693.04 611.44C694.599 610.308 696.981 609.584 699.651 609.584ZM609.431 674.656C609.634 674.544 609.834 674.433 610.032 674.321V674.302L609.431 674.656Z", "fill", "#E64949"], ["d", "M594.151 671.584V671.473L594.153 671.473C594.151 671.51 594.151 671.547 594.151 671.584Z", "fill", "#E64949"], ["d", "M704.954 618.492C706.902 617.575 708.151 616.165 708.151 614.584C708.151 611.822 704.345 609.584 699.651 609.584C696.981 609.584 694.599 610.308 693.041 611.44L596.996 667.851C595.25 668.767 594.151 670.1 594.151 671.584C594.151 674.345 597.957 676.584 602.651 676.584C605.172 676.584 607.437 675.938 608.993 674.913L704.954 618.492Z", "fill", "white", "fill-opacity", "0.5"], ["d", "M610.151 674.254C608.147 675.388 605.898 676.584 602.651 676.584C597.957 676.584 594.151 674.345 594.151 671.584C594.151 671.547 594.151 671.51 594.153 671.473L594.151 671.473V671.584V788.438L594.161 788.442C594.375 791.084 597.87 793.185 602.151 793.185C603.696 793.185 605.138 792.911 606.361 792.438L606.398 792.45L610.151 790.7V674.254Z", "fill", "black", "fill-opacity", "0.1"], ["d", "M634.372 731.28L629.84 733.976V723.007L621.002 728.265V739.234L616.47 741.93V716.336L621.002 713.64V724.011L629.84 718.753V708.382L634.372 705.686V731.28Z", "fill", "white"], ["d", "M654.449 698.013L647.711 702.022V723.344L643.179 726.04V704.718L636.532 708.672V704.401L654.449 693.742V698.013Z", "fill", "white"], ["d", "M662.969 688.673L668.619 703.874L674.238 681.968L680.19 678.427V704.02L675.643 706.726V699.73L676.097 687.384L670.16 709.988L667.048 711.84L661.126 696.308L661.579 708.097V715.093L657.047 717.789V692.196L662.969 688.673Z", "fill", "white"], ["d", "M688.68 694.733L698.303 689.008V693.244L684.148 701.666V676.072L688.68 673.376V694.733Z", "fill", "white"], ["width", "71.1967", "height", "7.19669", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 1005.05 605.681)", "fill", "#6E6E6E"], ["width", "167.197", "height", "7.19669", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 860.257 689.284)", "fill", "#5A5A5A"], ["width", "71.1967", "height", "167.197", "transform", "matrix(0.866041 0.499972 -0.866041 0.499972 1005.05 612.877)", "fill", "#EF2A2A"], ["width", "71.1967", "height", "7.19669", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 860.257 689.283)", "fill", "#D5D5D5"], ["width", "167.197", "height", "7.19669", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 921.915 724.881)", "fill", "#C0C0C0"], ["width", "167.197", "height", "71.1967", "transform", "matrix(0.866041 -0.499972 0.866041 0.499972 860.257 689.284)", "fill", "#EDEDED"], ["width", "14.8889", "height", "66.8889", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 968.433 578.208)", "fill", "#6E6E6E"], ["width", "42.8889", "height", "66.8889", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 931.29 599.654)", "fill", "#5A5A5A"], ["width", "14.8889", "height", "42.8889", "transform", "matrix(0.866041 0.499972 -0.866041 0.499972 968.434 645.096)", "fill", "#EF2A2A"], ["width", "14.8889", "height", "66.8889", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 931.29 599.653)", "fill", "#D5D5D5"], ["width", "42.8889", "height", "66.8889", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 944.184 607.097)", "fill", "#C0C0C0"], ["width", "42.8889", "height", "14.8889", "transform", "matrix(0.866041 -0.499972 0.866041 0.499972 931.29 599.653)", "fill", "#EDEDED"], ["width", "11.2182", "height", "208.218", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 1074.6 314.889)", "fill", "#6E6E6E"], ["width", "11.2182", "height", "208.218", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 1064.89 320.499)", "fill", "#5A5A5A"], ["width", "11.2182", "height", "11.2182", "transform", "matrix(0.866041 0.499972 -0.866041 0.499972 1074.6 523.107)", "fill", "#EF2A2A"], ["width", "11.2182", "height", "208.218", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 1064.89 320.497)", "fill", "#D5D5D5"], ["width", "11.2182", "height", "208.218", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 1074.6 326.106)", "fill", "#C0C0C0"], ["width", "11.2182", "height", "11.2182", "transform", "matrix(0.866041 -0.499972 0.866041 0.499972 1064.89 320.498)", "fill", "#EDEDED"], ["width", "11.218", "height", "11.218", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 1064.9 320.486)", "fill", "#6E6E6E"], ["width", "305.218", "height", "11.218", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 800.567 473.093)", "fill", "#5A5A5A"], ["width", "11.218", "height", "305.218", "transform", "matrix(0.866041 0.499972 -0.866041 0.499972 1064.9 331.703)", "fill", "#EF2A2A"], ["width", "11.218", "height", "11.218", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 800.567 473.091)", "fill", "#D5D5D5"], ["width", "305.218", "height", "11.218", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 810.282 478.7)", "fill", "#C0C0C0"], ["width", "305.218", "height", "11.218", "transform", "matrix(0.866041 -0.499972 0.866041 0.499972 800.567 473.093)", "fill", "#EDEDED"], ["width", "11.218", "height", "11.218", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 1064.88 517.495)", "fill", "#6E6E6E"], ["width", "305.218", "height", "11.218", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 800.551 670.102)", "fill", "#5A5A5A"], ["width", "11.218", "height", "305.218", "transform", "matrix(0.866041 0.499972 -0.866041 0.499972 1064.88 528.712)", "fill", "#EF2A2A"], ["width", "11.218", "height", "11.218", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 800.551 670.1)", "fill", "#D5D5D5"], ["width", "305.218", "height", "11.218", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 810.266 675.709)", "fill", "#C0C0C0"], ["width", "305.218", "height", "11.218", "transform", "matrix(0.866041 -0.499972 0.866041 0.499972 800.551 670.102)", "fill", "#EDEDED"], ["width", "11.2182", "height", "208.218", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 800.881 472.903)", "fill", "#6E6E6E"], ["width", "11.2182", "height", "208.218", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 791.166 478.513)", "fill", "#5A5A5A"], ["width", "11.2182", "height", "11.2182", "transform", "matrix(0.866041 0.499972 -0.866041 0.499972 800.881 681.121)", "fill", "#EF2A2A"], ["width", "11.2182", "height", "208.218", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 791.166 478.511)", "fill", "#D5D5D5"], ["width", "11.2182", "height", "208.218", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 800.881 484.12)", "fill", "#C0C0C0"], ["width", "11.2182", "height", "11.2182", "transform", "matrix(0.866041 -0.499972 0.866041 0.499972 791.166 478.512)", "fill", "#EDEDED"], ["width", "300.121", "height", "181.078", "transform", "matrix(0.86601 -0.500028 -3.18907e-05 1 810.266 489.918)", "fill", "#77BCDD"], ["d", "M1070.17 354.094L1070.17 520.928L929.119 602.368C928.944 599.209 928.855 595.973 928.855 592.662C928.858 505.904 989.769 400.404 1064.9 357.022C1066.67 356.003 1068.42 355.027 1070.17 354.094Z", "fill", "white", "fill-opacity", "0.2"], ["d", "M868.387 532.955L866.226 534.203L866.225 562.1L868.386 560.852L868.386 564.772L861.81 568.569L861.811 532.832L868.387 529.035L868.387 532.955Z", "fill", "white"], ["d", "M877.126 551.271C877.126 550.462 877.359 549.671 877.826 548.898C878.303 548.118 878.897 547.524 879.607 547.113C880.328 546.697 880.921 546.607 881.388 546.841C881.865 547.069 882.104 547.588 882.104 548.397C882.104 549.193 881.87 549.979 881.403 550.752C880.936 551.514 880.338 552.106 879.607 552.527C878.886 552.943 878.293 553.04 877.826 552.818C877.359 552.583 877.126 552.068 877.126 551.271Z", "fill", "white"], ["d", "M910.206 526.141C910.034 528.995 909.151 531.672 907.557 534.174C905.974 536.67 903.883 538.669 901.285 540.169C898.444 541.809 896.206 542 894.572 540.74C892.949 539.463 892.137 536.896 892.137 533.041L892.137 531.477C892.137 529.016 892.513 526.631 893.264 524.322C894.015 522.014 895.085 519.96 896.476 518.161C897.876 516.345 899.5 514.903 901.347 513.837C903.905 512.36 905.965 511.961 907.528 512.641C909.09 513.321 909.994 515.02 910.237 517.739L905.67 520.376C905.559 518.788 905.158 517.824 904.468 517.484C903.788 517.127 902.748 517.352 901.347 518.161C899.825 519.04 898.683 520.332 897.922 522.037C897.171 523.724 896.785 525.898 896.765 528.558L896.765 530.492C896.765 533.258 897.125 535.071 897.845 535.932C898.576 536.788 899.723 536.764 901.286 535.862C902.696 535.047 903.747 534.072 904.437 532.935C905.137 531.781 905.538 530.395 905.639 528.778L910.206 526.141Z", "fill", "white"], ["d", "M937.959 506.426C937.959 508.945 937.573 511.377 936.802 513.721C936.03 516.064 934.924 518.168 933.483 520.031C932.052 521.889 930.408 523.354 928.551 524.426C926.714 525.486 925.075 525.923 923.634 525.736C922.193 525.548 921.076 524.74 920.285 523.31C919.493 521.869 919.093 519.92 919.083 517.465L919.083 516.2C919.083 513.68 919.473 511.24 920.255 508.878C921.047 506.499 922.158 504.387 923.589 502.541C925.03 500.678 926.674 499.213 928.521 498.147C930.368 497.08 932.007 496.649 933.438 496.854C934.879 497.042 935.99 497.871 936.772 499.342C937.563 500.795 937.959 502.775 937.959 505.283L937.959 506.426ZM933.331 507.937C933.331 505.254 932.915 503.455 932.083 502.541C931.251 501.627 930.064 501.615 928.521 502.506C926.989 503.391 925.806 504.765 924.974 506.628C924.142 508.48 923.721 510.739 923.71 513.405L923.71 514.653C923.71 517.266 924.126 519.053 924.958 520.014C925.791 520.975 926.988 521.004 928.551 520.102C930.083 519.217 931.261 517.846 932.083 515.988C932.905 514.119 933.321 511.851 933.331 509.185L933.331 507.937Z", "fill", "white"], ["d", "M947.824 512.946L947.825 487.352L954.645 483.415C956.593 482.289 958.334 481.794 959.866 481.929C961.409 482.046 962.611 482.793 963.474 484.17C964.336 485.535 964.768 487.407 964.768 489.786L964.767 490.964C964.767 493.343 964.341 495.704 963.489 498.048C962.646 500.386 961.454 502.51 959.911 504.42C958.368 506.33 956.628 507.851 954.69 508.982L947.824 512.946ZM952.392 488.987L952.391 506.073L954.598 504.798C956.385 503.767 957.75 502.305 958.693 500.412C959.637 498.52 960.119 496.314 960.14 493.794L960.14 492.441C960.14 489.839 959.673 488.14 958.739 487.343C957.806 486.535 956.441 486.649 954.645 487.686L952.392 488.987Z", "fill", "white"], ["d", "M987.983 478.667L979.215 483.729L979.215 490.585L989.506 484.643L989.505 488.88L974.648 497.458L974.649 471.864L989.476 463.303L989.476 467.575L979.215 473.499L979.215 479.599L987.984 474.536L987.983 478.667Z", "fill", "white"], ["d", "M998.671 481.091C998.671 480.283 998.904 479.492 999.371 478.718C999.848 477.939 1000.44 477.344 1001.15 476.934C1001.87 476.518 1002.47 476.427 1002.93 476.662C1003.41 476.89 1003.65 477.409 1003.65 478.217C1003.65 479.014 1003.42 479.799 1002.95 480.573C1002.48 481.334 1001.88 481.926 1001.15 482.348C1000.43 482.764 999.838 482.861 999.371 482.638C998.904 482.404 998.671 481.888 998.671 481.091Z", "fill", "white"], ["d", "M1012.57 445.785L1019.15 441.988L1019.15 477.724L1012.57 481.521L1012.57 477.601L1014.75 476.344L1014.75 448.448L1012.57 449.705L1012.57 445.785Z", "fill", "white"], ["width", "103.054", "height", "11.0536", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 1115.56 642.67)", "fill", "#6E6E6E"], ["width", "243.054", "height", "11.0536", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 905.065 764.203)", "fill", "#5A5A5A"], ["width", "103.054", "height", "243.054", "transform", "matrix(0.866041 0.499972 -0.866041 0.499972 1115.56 653.723)", "fill", "#AAAAAA"], ["width", "103.054", "height", "11.0536", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 905.065 764.201)", "fill", "#BEBEBE"], ["width", "243.054", "height", "11.0536", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 994.315 815.729)", "fill", "#969696"], ["width", "243.054", "height", "103.054", "transform", "matrix(0.866041 -0.499972 0.866041 0.499972 905.065 764.203)", "fill", "#828282"], ["width", "159.459", "height", "5.45948", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 846.053 787.091)", "fill", "#6E6E6E"], ["width", "107.459", "height", "5.45948", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 752.99 840.82)", "fill", "#5A5A5A"], ["width", "159.459", "height", "107.459", "transform", "matrix(0.866041 0.499972 -0.866041 0.499972 846.053 792.55)", "fill", "#AAAAAA"], ["width", "159.459", "height", "5.45948", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 752.99 840.819)", "fill", "#BEBEBE"], ["width", "107.459", "height", "5.45948", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 891.085 920.55)", "fill", "#969696"], ["width", "107.459", "height", "159.459", "transform", "matrix(0.866041 -0.499972 0.866041 0.499972 752.99 840.819)", "fill", "#EAEEF2"], ["width", "129.572", "height", "90.9109", "transform", "matrix(0.866041 0.499972 -0.866041 0.499972 846.575 793.269)", "fill", "#77BCDD"], ["r", "4.4304", "transform", "matrix(0.866041 0.499972 -0.866041 0.499972 929.559 885.279)", "fill", "#969696"], ["d", "M885.756 815.888L958.79 858.051L880.057 903.504L858.225 890.9C840.46 866.451 848.818 837.173 883.301 817.266C884.11 816.798 884.929 816.339 885.756 815.888Z", "fill", "white", "fill-opacity", "0.2"], ["width", "274.644", "height", "180.139", "transform", "matrix(0.866009 -0.500028 -3.18609e-05 1 576.477 413.388)", "fill", "#56747D"], ["rx", "3.06245", "ry", "3.37946", "transform", "matrix(0.866009 -0.500028 -3.18645e-05 1 593.057 427.339)", "fill", "#F6FA58"], ["width", "135.013", "height", "4.42349", "rx", "2.21174", "transform", "matrix(0.866009 -0.500028 -3.18682e-05 1 598.675 421.884)", "fill", "#F6FA58"], ["rx", "3.06245", "ry", "3.37946", "transform", "matrix(0.866009 -0.500028 -3.18645e-05 1 765.137 327.981)", "fill", "white"], ["width", "24.3834", "height", "4.42349", "rx", "2.21174", "transform", "matrix(0.866009 -0.500028 -3.18682e-05 1 770.978 322.397)", "fill", "white"], ["rx", "3.06245", "ry", "3.37946", "transform", "matrix(0.866009 -0.500028 -3.18645e-05 1 765.136 336.358)", "fill", "white"], ["width", "19.0927", "height", "4.42349", "rx", "2.21174", "transform", "matrix(0.866009 -0.500028 -3.18682e-05 1 770.978 330.773)", "fill", "white"], ["rx", "3.06245", "ry", "3.37946", "transform", "matrix(0.866009 -0.500028 -3.18645e-05 1 765.136 344.735)", "fill", "white"], ["width", "28.524", "height", "4.42349", "rx", "2.21174", "transform", "matrix(0.866009 -0.500028 -3.18682e-05 1 770.978 339.15)", "fill", "white"], ["rx", "3.06245", "ry", "3.37946", "transform", "matrix(0.866009 -0.500028 -3.18645e-05 1 765.136 353.112)", "fill", "white"], ["width", "20.7029", "height", "4.42349", "rx", "2.21174", "transform", "matrix(0.866009 -0.500028 -3.18682e-05 1 770.977 347.527)", "fill", "white"], ["rx", "3.06245", "ry", "3.37946", "transform", "matrix(0.866009 -0.500028 -3.18645e-05 1 765.136 361.489)", "fill", "white"], ["width", "14.7221", "height", "4.42349", "rx", "2.21174", "transform", "matrix(0.866009 -0.500028 -3.18682e-05 1 770.977 355.904)", "fill", "white"], ["rx", "3.06245", "ry", "3.37946", "transform", "matrix(0.866009 -0.500028 -3.18645e-05 1 765.135 369.866)", "fill", "white"], ["width", "31.2843", "height", "4.42349", "rx", "2.21174", "transform", "matrix(0.866009 -0.500028 -3.18682e-05 1 770.977 364.281)", "fill", "white"], ["rx", "3.06245", "ry", "3.37946", "transform", "matrix(0.866009 -0.500028 -3.18645e-05 1 765.135 378.242)", "fill", "white"], ["width", "20.7029", "height", "4.42349", "rx", "2.21174", "transform", "matrix(0.866009 -0.500028 -3.18682e-05 1 770.976 372.657)", "fill", "white"], ["rx", "3.06245", "ry", "3.37946", "transform", "matrix(0.866009 -0.500028 -3.18645e-05 1 765.135 386.513)", "fill", "white"], ["width", "29.6741", "height", "4.42349", "rx", "2.21174", "transform", "matrix(0.866009 -0.500028 -3.18682e-05 1 770.976 380.929)", "fill", "white"], ["rx", "3.06245", "ry", "3.37946", "transform", "matrix(0.866009 -0.500028 -3.18645e-05 1 593.056 439.237)", "fill", "#F6FA58"], ["width", "42.5619", "height", "4.42349", "rx", "2.21174", "transform", "matrix(0.866009 -0.500028 -3.18682e-05 1 598.675 433.781)", "fill", "#F6FA58"], ["rx", "3.06245", "ry", "3.37946", "transform", "matrix(0.866009 -0.500028 -3.18645e-05 1 593.056 451.135)", "fill", "#F6FA58"], ["width", "81.6947", "height", "4.42349", "rx", "2.21174", "transform", "matrix(0.866009 -0.500028 -3.18682e-05 1 598.674 445.679)", "fill", "#F6FA58"], ["rx", "3.06245", "ry", "3.37946", "transform", "matrix(0.866009 -0.500028 -3.18645e-05 1 593.055 463.033)", "fill", "#F6FA58"], ["width", "127.678", "height", "4.42349", "rx", "2.21174", "transform", "matrix(0.866009 -0.500028 -3.18682e-05 1 598.674 457.577)", "fill", "#F6FA58"], ["rx", "3.06245", "ry", "3.37946", "transform", "matrix(0.866009 -0.500028 -3.18645e-05 1 593.055 474.93)", "fill", "#F6FA58"], ["width", "94.9999", "height", "4.42349", "rx", "2.21174", "transform", "matrix(0.866009 -0.500028 -3.18682e-05 1 598.673 469.475)", "fill", "#F6FA58"], ["rx", "3.06245", "ry", "3.37946", "transform", "matrix(0.866009 -0.500028 -3.18645e-05 1 593.054 507.229)", "fill", "#F35858"], ["width", "77.7814", "height", "4.42349", "rx", "2.21174", "transform", "matrix(0.866009 -0.500028 -3.18682e-05 1 598.672 501.773)", "fill", "#F35858"], ["rx", "3.06245", "ry", "3.37946", "transform", "matrix(0.866009 -0.500028 -3.18645e-05 1 593.054 519.127)", "fill", "#F35858"], ["width", "100.087", "height", "4.42349", "rx", "2.21174", "transform", "matrix(0.866009 -0.500028 -3.18682e-05 1 598.672 513.671)", "fill", "#F35858"], ["rx", "3.06245", "ry", "3.37946", "transform", "matrix(0.866009 -0.500028 -3.18645e-05 1 593.053 531.025)", "fill", "#F35858"], ["width", "81.6947", "height", "4.42349", "rx", "2.21174", "transform", "matrix(0.866009 -0.500028 -3.18682e-05 1 598.672 525.569)", "fill", "#F35858"], ["rx", "3.06245", "ry", "3.37946", "transform", "matrix(0.866009 -0.500028 -3.18645e-05 1 593.053 542.923)", "fill", "#F35858"], ["width", "67.6069", "height", "4.42349", "rx", "2.21174", "transform", "matrix(0.866009 -0.500028 -3.18682e-05 1 598.671 537.467)", "fill", "#F35858"], ["rx", "3.06245", "ry", "3.37946", "transform", "matrix(0.866009 -0.500028 -3.18645e-05 1 593.052 554.82)", "fill", "#F35858"], ["width", "124.741", "height", "4.42349", "rx", "2.21174", "transform", "matrix(0.866009 -0.500028 -3.18682e-05 1 598.671 549.365)", "fill", "#F35858"], ["width", "291.625", "height", "173.334", "transform", "matrix(0.866009 -0.500028 -3.18609e-05 1 1034.55 457.825)", "fill", "#56747D"], ["r", "3.2518", "transform", "matrix(0.866009 -0.500028 -3.18649e-05 1 1052.15 470.296)", "fill", "#58C9FA"], ["width", "143.361", "height", "4.25639", "rx", "2.12819", "transform", "matrix(0.866009 -0.500028 -3.1869e-05 1 1058.12 464.723)", "fill", "#58C9FA"], ["r", "3.2518", "transform", "matrix(0.866009 -0.500028 -3.18649e-05 1 1234.87 364.795)", "fill", "white"], ["width", "25.891", "height", "4.25639", "rx", "2.12819", "transform", "matrix(0.866009 -0.500028 -3.1869e-05 1 1241.07 359.085)", "fill", "white"], ["r", "3.2518", "transform", "matrix(0.866009 -0.500028 -3.18649e-05 1 1234.87 372.855)", "fill", "white"], ["width", "20.2731", "height", "4.25639", "rx", "2.12819", "transform", "matrix(0.866009 -0.500028 -3.1869e-05 1 1241.07 367.146)", "fill", "white"], ["r", "3.2518", "transform", "matrix(0.866009 -0.500028 -3.18649e-05 1 1234.87 380.916)", "fill", "white"], ["width", "30.2875", "height", "4.25639", "rx", "2.12819", "transform", "matrix(0.866009 -0.500028 -3.1869e-05 1 1241.07 375.206)", "fill", "white"], ["r", "3.2518", "transform", "matrix(0.866009 -0.500028 -3.18649e-05 1 1234.87 388.976)", "fill", "white"], ["width", "21.9829", "height", "4.25639", "rx", "2.12819", "transform", "matrix(0.866009 -0.500028 -3.1869e-05 1 1241.07 383.267)", "fill", "white"], ["r", "3.2518", "transform", "matrix(0.866009 -0.500028 -3.18649e-05 1 1234.87 397.036)", "fill", "white"], ["width", "15.6323", "height", "4.25639", "rx", "2.12819", "transform", "matrix(0.866009 -0.500028 -3.1869e-05 1 1241.07 391.327)", "fill", "white"], ["r", "3.2518", "transform", "matrix(0.866009 -0.500028 -3.18649e-05 1 1234.87 405.097)", "fill", "white"], ["width", "33.2186", "height", "4.25639", "rx", "2.12819", "transform", "matrix(0.866009 -0.500028 -3.1869e-05 1 1241.07 399.387)", "fill", "white"], ["r", "3.2518", "transform", "matrix(0.866009 -0.500028 -3.18649e-05 1 1234.87 413.157)", "fill", "white"], ["width", "21.9829", "height", "4.25639", "rx", "2.12819", "transform", "matrix(0.866009 -0.500028 -3.1869e-05 1 1241.07 407.448)", "fill", "white"], ["r", "3.2518", "transform", "matrix(0.866009 -0.500028 -3.18649e-05 1 1234.87 421.116)", "fill", "white"], ["width", "31.5088", "height", "4.25639", "rx", "2.12819", "transform", "matrix(0.866009 -0.500028 -3.1869e-05 1 1241.07 415.406)", "fill", "white"], ["r", "3.2518", "transform", "matrix(0.866009 -0.500028 -3.18649e-05 1 1052.15 481.744)", "fill", "#58C9FA"], ["width", "45.1934", "height", "4.25639", "rx", "2.12819", "transform", "matrix(0.866009 -0.500028 -3.1869e-05 1 1058.12 476.172)", "fill", "#58C9FA"], ["r", "3.2518", "transform", "matrix(0.866009 -0.500028 -3.18649e-05 1 1052.15 493.192)", "fill", "#58C9FA"], ["width", "86.7457", "height", "4.25639", "rx", "2.12819", "transform", "matrix(0.866009 -0.500028 -3.1869e-05 1 1058.12 487.62)", "fill", "#58C9FA"], ["r", "3.2518", "transform", "matrix(0.866009 -0.500028 -3.18649e-05 1 1052.15 504.641)", "fill", "#58C9FA"], ["width", "135.572", "height", "4.25639", "rx", "2.12819", "transform", "matrix(0.866009 -0.500028 -3.1869e-05 1 1058.12 499.068)", "fill", "#58C9FA"], ["r", "3.2518", "transform", "matrix(0.866009 -0.500028 -3.18649e-05 1 1052.15 516.089)", "fill", "#58C9FA"], ["width", "100.874", "height", "4.25639", "rx", "2.12819", "transform", "matrix(0.866009 -0.500028 -3.1869e-05 1 1058.12 510.517)", "fill", "#58C9FA"], ["r", "3.2518", "transform", "matrix(0.866009 -0.500028 -3.18649e-05 1 1052.15 527.538)", "fill", "#F6FA58"], ["width", "82.5905", "height", "4.25639", "rx", "2.12819", "transform", "matrix(0.866009 -0.500028 -3.1869e-05 1 1058.12 521.965)", "fill", "#F6FA58"], ["r", "3.2518", "transform", "matrix(0.866009 -0.500028 -3.18649e-05 1 1052.15 538.986)", "fill", "#F6FA58"], ["width", "106.275", "height", "4.25639", "rx", "2.12819", "transform", "matrix(0.866009 -0.500028 -3.1869e-05 1 1058.12 533.413)", "fill", "#F6FA58"], ["r", "3.2518", "transform", "matrix(0.866009 -0.500028 -3.18649e-05 1 1052.15 550.434)", "fill", "#F6FA58"], ["width", "86.7457", "height", "4.25639", "rx", "2.12819", "transform", "matrix(0.866009 -0.500028 -3.1869e-05 1 1058.12 544.862)", "fill", "#F6FA58"], ["r", "3.2518", "transform", "matrix(0.866009 -0.500028 -3.18649e-05 1 1052.15 561.883)", "fill", "#F6FA58"], ["width", "71.7869", "height", "4.25639", "rx", "2.12819", "transform", "matrix(0.866009 -0.500028 -3.1869e-05 1 1058.12 556.31)", "fill", "#F6FA58"], ["r", "3.2518", "transform", "matrix(0.866009 -0.500028 -3.18649e-05 1 1052.15 573.331)", "fill", "#F6FA58"], ["width", "132.453", "height", "4.25639", "rx", "2.12819", "transform", "matrix(0.866009 -0.500028 -3.1869e-05 1 1058.11 567.758)", "fill", "#F6FA58"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1244.69 265.587C1249.38 265.587 1253.19 267.822 1253.19 270.58L1253.19 390.394L1155.16 446.737V446.72L1151.44 448.453L1151.4 448.44C1150.18 448.914 1148.74 449.188 1147.19 449.188C1142.91 449.188 1139.42 447.087 1139.2 444.445L1139.19 444.441V327.587C1139.19 326.102 1140.29 324.769 1142.04 323.853L1238.08 267.443C1239.64 266.311 1242.02 265.587 1244.69 265.587ZM1154.47 330.658C1154.68 330.547 1154.88 330.436 1155.07 330.324V330.305L1154.47 330.658Z", "fill", "#59AFE0"], ["d", "M1139.19 327.587V327.476L1139.19 327.476C1139.19 327.513 1139.19 327.55 1139.19 327.587Z", "fill", "#59AFE0"], ["d", "M1249.99 274.495C1251.94 273.578 1253.19 272.168 1253.19 270.587C1253.19 267.825 1249.39 265.587 1244.69 265.587C1242.02 265.587 1239.64 266.311 1238.08 267.443L1142.04 323.854C1140.29 324.77 1139.19 326.103 1139.19 327.587C1139.19 330.348 1143 332.587 1147.69 332.587C1150.21 332.587 1152.48 331.941 1154.03 330.916L1249.99 274.495Z", "fill", "white", "fill-opacity", "0.5"], ["d", "M1155.19 330.257C1153.19 331.391 1150.94 332.587 1147.69 332.587C1143 332.587 1139.19 330.348 1139.19 327.587C1139.19 327.55 1139.19 327.513 1139.19 327.476L1139.19 327.476V327.587V444.441L1139.2 444.445C1139.42 447.087 1142.91 449.188 1147.19 449.188C1148.74 449.188 1150.18 448.914 1151.4 448.44L1151.44 448.453L1155.19 446.703V330.257Z", "fill", "black", "fill-opacity", "0.1"], ["d", "M1173.21 384.925V396.948L1167.17 400.544V366.419L1178.61 359.612C1180.81 358.302 1182.74 357.62 1184.41 357.567C1186.09 357.506 1187.38 358.075 1188.27 359.274C1189.17 360.457 1189.62 362.151 1189.62 364.354C1189.62 367.698 1188.64 370.925 1186.66 374.037C1184.7 377.126 1181.98 379.704 1178.51 381.773L1173.21 384.925ZM1173.21 379.23L1178.61 376.018C1180.2 375.067 1181.42 373.907 1182.25 372.537C1183.1 371.158 1183.52 369.657 1183.52 368.032C1183.52 366.36 1183.1 365.26 1182.25 364.732C1181.41 364.204 1180.24 364.368 1178.75 365.223L1173.21 368.519V379.23Z", "fill", "white"], ["d", "M1217.66 370.501L1211.62 374.096V359.471L1199.84 366.481V381.106L1193.79 384.701V350.576L1199.84 346.981V360.81L1211.62 353.799V339.971L1217.66 336.376V370.501Z", "fill", "white"], ["d", "M1229 351.731V363.754L1222.96 367.349V333.224L1234.4 326.418C1236.6 325.108 1238.54 324.426 1240.2 324.373C1241.88 324.312 1243.17 324.881 1244.07 326.08C1244.97 327.263 1245.42 328.957 1245.42 331.16C1245.42 334.504 1244.43 337.731 1242.46 340.843C1240.5 343.931 1237.78 346.51 1234.3 348.579L1229 351.731ZM1229 346.036L1234.4 342.824C1236 341.873 1237.21 340.713 1238.05 339.343C1238.89 337.964 1239.32 336.463 1239.32 334.838C1239.32 333.166 1238.89 332.066 1238.05 331.538C1237.2 331.01 1236.03 331.174 1234.54 332.029L1229 335.325V346.036Z", "fill", "white"], ["rx", "198.079", "ry", "200.606", "transform", "matrix(0.866041 0.499972 -0.866041 0.499972 1367.59 1363.67)", "fill", "black", "fill-opacity", "0.1"], ["d", "M1184.25 1240.28L1182.66 1239.72C1181.58 1238.84 1181.41 1237.26 1182.28 1236.17L1328.47 1055.49C1329.35 1054.42 1330.93 1054.25 1332.02 1055.12C1333.1 1056 1333.27 1057.58 1332.4 1058.66L1186.21 1239.35L1184.25 1240.28Z", "fill", "#727272"], ["d", "M1500.93 1240.28L1498.97 1239.35L1352.77 1058.66C1351.9 1057.58 1352.07 1056 1353.15 1055.12C1354.24 1054.25 1355.82 1054.42 1356.7 1055.49L1502.89 1236.17C1503.77 1237.26 1503.6 1238.84 1502.52 1239.72L1500.93 1240.28Z", "fill", "#727272"], ["d", "M1482.44 1102.21C1481.69 1099.55 1480.48 1096.7 1476.83 1094.59C1469.35 1090.28 1457.22 1090.28 1449.72 1094.59C1446.17 1096.65 1444.17 1099.33 1443.79 1102C1442.69 1109.64 1528.16 1332.99 1528.16 1332.99C1529.36 1335.44 1529.12 1336.36 1531.33 1337.64C1535.55 1340.07 1542.39 1340.07 1546.61 1337.64C1548.77 1336.39 1549.83 1334.74 1549.77 1333.11C1549.72 1331.55 1484.15 1108.24 1482.44 1102.21Z", "fill", "#CD995D"], ["d", "M1181.06 1245.96C1179.99 1245.96 1178.99 1245.27 1178.66 1244.2C1178.24 1242.87 1178.96 1241.46 1180.29 1241.04L1330.51 1193.2C1331.86 1192.79 1333.26 1193.52 1333.68 1194.83C1334.1 1196.17 1333.38 1197.58 1332.05 1198L1181.83 1245.84L1181.06 1245.96Z", "fill", "#727272"], ["d", "M1329.14 1331.67L1326.94 1330.38L1218.3 1133.88C1217.63 1132.66 1218.07 1131.13 1219.28 1130.45C1220.5 1129.78 1222.04 1130.21 1222.71 1131.43L1331.35 1327.93C1332.02 1329.16 1331.58 1330.69 1330.36 1331.36L1329.14 1331.67Z", "fill", "#727272"], ["d", "M1499.13 1247.21L1498.36 1247.1L1348.13 1199.26C1346.82 1198.84 1346.08 1197.43 1346.51 1196.09C1346.92 1194.77 1348.33 1194.06 1349.67 1194.46L1499.9 1242.3C1501.22 1242.72 1501.95 1244.13 1501.52 1245.46C1501.19 1246.53 1500.2 1247.21 1499.13 1247.21Z", "fill", "#727272"], ["d", "M1351.05 1332.93L1349.83 1332.62C1348.61 1331.95 1348.16 1330.41 1348.84 1329.19L1457.48 1132.7C1458.16 1131.47 1459.69 1131.04 1460.9 1131.71C1462.12 1132.39 1462.57 1133.92 1461.88 1135.14L1353.25 1331.64L1351.05 1332.93Z", "fill", "#727272"], ["d", "M1354.03 1165.59C1346.55 1161.27 1334.42 1161.27 1326.93 1165.59C1323.37 1167.64 1321.5 1170.31 1321.33 1173C1321.14 1175.97 1328.37 1446.51 1328.27 1448.03C1328.16 1449.7 1329.21 1451.4 1331.43 1452.66C1335.65 1455.1 1342.49 1455.1 1346.72 1452.66C1348.88 1451.43 1349.93 1449.78 1349.88 1448.14C1349.83 1446.58 1359.74 1176.11 1359.64 1173.2C1359.55 1170.45 1357.69 1167.69 1354.03 1165.59Z", "fill", "#E4AC69"], ["d", "M1199.15 1216.34C1217.83 1233.46 1247.76 1231.09 1266 1211.04C1284.24 1190.99 1283.89 1160.86 1265.21 1143.74C1246.53 1126.61 1166.4 1107.6 1148.16 1127.64C1129.91 1147.69 1180.47 1199.22 1199.15 1216.34Z", "fill", "#563993"], ["d", "M1199.15 1202.88C1217.83 1220.01 1247.76 1217.63 1266 1197.58C1284.24 1177.54 1283.89 1147.4 1265.21 1130.28C1246.53 1113.16 1166.4 1094.14 1148.16 1114.19C1129.91 1134.24 1180.47 1185.76 1199.15 1202.88Z", "fill", "white"], ["width", "76.9775", "height", "250.324", "rx", "38.4888", "transform", "matrix(0.985069 -0.172162 0.171502 0.985184 1158.54 947.863)", "fill", "#563993"], ["width", "81.059", "height", "264.848", "rx", "40.5295", "transform", "matrix(-0.435342 0.900265 -0.899588 -0.43674 1424.59 1043.04)", "fill", "#563993"], ["rx", "58.0937", "ry", "58.3091", "transform", "matrix(-1 0 0 1 1366.5 1070.45)", "fill", "#563993"], ["d", "M1196.46 941.237C1177.05 944.629 1163.59 962.037 1164.64 981.272C1164.61 985.55 1165.26 989.783 1166.54 993.814L1186.04 1105.81C1169.24 1104.83 1154.71 1106.99 1148.16 1114.19C1143.94 1118.82 1143.4 1125.14 1145.29 1132.32C1136.87 1154.78 1181.78 1200.42 1199.15 1216.34C1217.83 1233.46 1247.76 1231.09 1266 1211.04C1276.66 1199.32 1280.97 1184.16 1278.98 1170.16C1280.77 1157.36 1277.48 1144.34 1269.15 1134.4L1254.56 1050.6L1308.76 1076.91C1311.96 1106.07 1336.59 1128.76 1366.5 1128.76C1398.58 1128.76 1424.59 1102.65 1424.59 1070.45C1424.59 1038.25 1398.58 1012.14 1366.5 1012.14C1364.78 1012.14 1363.08 1012.22 1361.4 1012.36L1222.75 945.05C1218.6 943.034 1214.27 941.793 1209.93 941.271C1205.6 940.483 1201.05 940.434 1196.46 941.237Z", "fill", "black", "fill-opacity", "0.1"], ["d", "M1118.25 1257.23C1136.93 1274.35 1166.86 1271.98 1185.1 1251.93C1203.34 1231.89 1202.99 1201.75 1184.31 1184.63C1165.63 1167.51 1085.5 1148.49 1067.26 1168.54C1049.01 1188.59 1099.57 1240.11 1118.25 1257.23Z", "fill", "#563993"], ["d", "M1118.25 1243.78C1136.93 1260.9 1166.86 1258.53 1185.1 1238.48C1203.35 1218.43 1202.99 1188.3 1184.31 1171.17C1165.63 1154.05 1085.5 1135.03 1067.26 1155.08C1049.01 1175.13 1099.57 1226.65 1118.25 1243.78Z", "fill", "white"], ["width", "76.9775", "height", "250.324", "rx", "38.4888", "transform", "matrix(0.985069 -0.172162 0.171502 0.985184 1077.64 988.757)", "fill", "#563993"], ["d", "M1200.02 1103.35C1200.78 1100.69 1201.99 1097.84 1205.63 1095.73C1213.13 1091.41 1225.26 1091.41 1232.74 1095.73C1236.3 1097.79 1238.29 1100.47 1238.67 1103.14C1239.77 1110.78 1154.71 1333.63 1154.24 1335.07C1153.39 1337.63 1152.64 1338.78 1151.08 1339.72C1146.89 1342.2 1140.02 1342.15 1135.8 1339.72C1133.63 1338.47 1132.58 1336.82 1132.62 1335.19C1132.67 1333.63 1198.32 1109.38 1200.02 1103.35Z", "fill", "#E4AC69"], ["d", "M1496.11 1072.41C1486.1 1073.54 1433.07 1042.92 1391.11 1018.69C1375.89 1009.91 1362.08 1001.94 1352.4 996.643L1351.28 996.593L1152.32 1112.22L1153.43 1112.28C1163.12 1117.57 1176.93 1125.54 1192.14 1134.33C1234.11 1158.56 1287.13 1189.17 1297.14 1188.04L1299.41 1187.3L1498.38 1071.66L1496.11 1072.41Z", "fill", "url(#paint0_linear)"], ["width", "81.059", "height", "264.848", "rx", "40.5295", "transform", "matrix(-0.435342 0.900265 -0.899588 -0.43674 1343.69 1083.93)", "fill", "#563993"], ["rx", "58.0937", "ry", "58.3091", "transform", "matrix(-1 0 0 1 1310.64 1094)", "fill", "#563993"], ["rx", "48.1111", "ry", "48.1449", "transform", "matrix(-0.220125 -0.975472 -0.975177 0.22143 1174.53 723.691)", "fill", "#FEA299"], ["width", "78.3906", "height", "163.883", "rx", "39.1953", "transform", "matrix(0.486332 -0.874259 -0.873626 -0.485727 1288.84 832.042)", "fill", "#FEA299"], ["width", "78.4097", "height", "188.029", "rx", "39.2048", "transform", "matrix(0.120592 -0.992974 -0.992579 -0.119359 1428.87 846.379)", "fill", "white"], ["width", "203.328", "height", "324.064", "rx", "101.664", "transform", "matrix(-1 0 0 1 1429.06 758.72)", "fill", "#FFD76C"], ["d", "M1352.53 1079.64C1344.49 1081.69 1336.07 1082.78 1327.4 1082.78C1271.25 1082.78 1225.73 1037.1 1225.73 980.743V860.761C1225.73 804.406 1271.25 758.72 1327.4 758.72C1336.07 758.72 1344.49 759.811 1352.53 761.863C1308.54 773.093 1276.01 813.113 1276.01 860.761V980.743C1276.01 1028.39 1308.54 1068.41 1352.53 1079.64Z", "fill", "black", "fill-opacity", "0.1"], ["rx", "52.5078", "ry", "19.0626", "transform", "matrix(-1 0 0 1 1328.51 777.783)", "fill", "white"], ["rx", "48.1111", "ry", "48.1449", "transform", "matrix(-0.220125 -0.975472 -0.975177 0.22143 1031.7 776.473)", "fill", "#FEA299"], ["width", "78.3906", "height", "163.882", "rx", "39.1953", "transform", "matrix(0.486332 -0.874259 -0.873626 -0.485727 1146.01 884.824)", "fill", "#FEA299"], ["width", "78.4097", "height", "188.029", "rx", "39.2048", "transform", "matrix(0.120592 -0.992974 -0.992579 -0.119359 1286.04 899.162)", "fill", "white"], ["width", "75.9688", "height", "130.074", "rx", "25", "transform", "matrix(-1 0 0 1 1365.4 665.64)", "fill", "#FEA299"], ["width", "94.9609", "height", "127.831", "rx", "20", "transform", "matrix(-1 0 0 1 1357.58 609.574)", "fill", "#FEA299"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1340.4 795.714H1330.08C1316.27 795.714 1305.08 784.522 1305.08 770.714V690.64C1305.08 676.833 1316.27 665.64 1330.08 665.64H1340.4C1354.21 665.64 1365.4 676.833 1365.4 690.64V770.714C1365.4 784.522 1354.21 795.714 1340.4 795.714Z", "fill", "black", "fill-opacity", "0.1"], ["d", "M1289.43 769.924C1289.43 778.107 1306.02 784.74 1327.15 784.74C1348.28 784.74 1365.4 778.107 1365.4 769.924C1365.4 789.129 1348.28 797.957 1327.15 797.957C1306.02 797.957 1289.43 788.032 1289.43 769.924Z", "fill", "white"], ["d", "M1296.69 523.14C1292.67 558.874 1315.87 523.735 1370.36 542.913C1456.81 589.196 1416.18 678.268 1364.67 707.956C1314.32 716.042 1315.78 697.251 1309.79 685.215C1303.79 673.179 1332.91 653.488 1309.79 639.732C1289.65 646.807 1273.26 655.204 1250.88 628.109C1192.63 557.612 1298.43 507.739 1296.69 523.14Z", "fill", "#563993"], ["rx", "18.4336", "ry", "24.1085", "transform", "matrix(-1 0 0 1 1305.63 659.286)", "fill", "#FEA299"], ["d", "M1530.81 900.482C1530.99 898.778 1530.65 897.123 1530.02 895.696C1529.6 894.754 1529.06 893.902 1528.45 893.208L1526.71 891.751C1525.74 891.186 1524.77 891.038 1524.02 891.474L1325.05 1007.11C1325.81 1006.67 1326.78 1006.81 1327.75 1007.37L1329.48 1008.84C1330.1 1009.54 1330.63 1010.38 1331.05 1011.32C1331.68 1012.75 1332.02 1014.4 1331.84 1016.11C1328.98 1043.11 1325.03 1100.44 1323.71 1190.4C1323.99 1203.86 1323.01 1212.1 1318.19 1214.92L1517.16 1099.28C1521.98 1096.48 1522.95 1088.23 1522.68 1074.77C1524 984.809 1527.95 927.488 1530.81 900.482Z", "fill", "url(#paint1_linear)"], ["d", "M1327.75 1007.37C1330.06 1008.71 1332.24 1012.29 1331.84 1016.11C1328.98 1043.11 1325.03 1100.44 1323.71 1190.4C1324.3 1218.79 1319.29 1223.99 1284.34 1203.83C1281.73 1202.31 1278.94 1200.65 1275.98 1198.86C1263.38 1191.19 1178.16 1140.57 1153.52 1126.09C1150.6 1124.36 1149.83 1110.34 1153.43 1112.27C1163.12 1117.57 1176.92 1125.53 1192.14 1134.33C1234.11 1158.56 1287.13 1189.17 1297.14 1188.04C1311.27 1186.47 1306.85 1138.54 1323.75 1009.6C1324.14 1006.72 1325.95 1006.33 1327.75 1007.37Z", "fill", "#DBD9D4"], ["id", "paint0_linear", "x1", "1290.54", "y1", "1031.66", "x2", "1360.15", "y2", "1152.22", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#F7F5F0"], ["offset", "1", "stop-color", "#F3F1EC"], ["id", "paint1_linear", "x1", "1378.17", "y1", "975.682", "x2", "1467.43", "y2", "1130.29", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#F6F4EF"], ["offset", "0.00401606", "stop-color", "#F6F4EF"], ["offset", "0.0345558", "stop-color", "#F6F4EF"], ["offset", "0.064257", "stop-color", "#E8E6E1"], ["offset", "0.669086", "stop-color", "#E8E6E1"], ["offset", "1", "stop-color", "#E8E6E1"]], template: function IllustrationDeveloppementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "rect", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "rect", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "rect", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "rect", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "rect", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "rect", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "rect", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "rect", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "rect", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "rect", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "rect", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "rect", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "rect", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "rect", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "rect", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "rect", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "rect", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "rect", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "rect", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "rect", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "rect", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "rect", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "rect", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "rect", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "rect", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "rect", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "rect", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "rect", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "rect", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "rect", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "rect", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "rect", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "rect", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "rect", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "rect", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "rect", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "rect", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "rect", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "rect", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "rect", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "rect", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "rect", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "rect", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "rect", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "rect", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "rect", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "rect", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "rect", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "rect", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "rect", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "circle", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "path", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "rect", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "ellipse", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "rect", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "ellipse", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "rect", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "ellipse", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "rect", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "ellipse", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "rect", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "ellipse", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "rect", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "ellipse", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "rect", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "ellipse", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "rect", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "ellipse", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "rect", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "ellipse", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "rect", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "ellipse", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "rect", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "ellipse", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "rect", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "ellipse", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "rect", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "ellipse", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "rect", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "ellipse", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "rect", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "ellipse", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "rect", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "ellipse", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "rect", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "ellipse", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "rect", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "ellipse", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "rect", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "rect", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "circle", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "rect", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "circle", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "rect", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "circle", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "rect", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "circle", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "rect", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "circle", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "rect", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "circle", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "rect", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "circle", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "rect", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "circle", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "rect", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "circle", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "rect", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "circle", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "rect", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "circle", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "rect", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "circle", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "rect", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "circle", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "rect", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "circle", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "rect", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "circle", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "rect", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "circle", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "rect", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "circle", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "rect", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "circle", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "rect", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "path", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "path", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "path", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "path", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "path", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "path", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "path", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "ellipse", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "path", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "path", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "path", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "path", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "path", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "path", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "path", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "path", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "path", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "path", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "rect", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "rect", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "ellipse", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "path", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "path", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "path", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "rect", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "path", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "path", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "rect", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "ellipse", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "ellipse", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "rect", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "rect", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "rect", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "path", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "ellipse", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "ellipse", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "rect", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "rect", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "rect", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "rect", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "path", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "path", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "path", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "ellipse", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "path", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "path", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "linearGradient", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "stop", 233);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "stop", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "linearGradient", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "stop", 236);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "stop", 237);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "stop", 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "stop", 239);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "stop", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "stop", 241);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbGx1c3RyYXRpb24tZGV2ZWxvcHBlbWVudC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "O4QB":
/*!**************************************************!*\
  !*** ./src/app/page-home/page-home.component.ts ***!
  \**************************************************/
/*! exports provided: PageHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHomeComponent", function() { return PageHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sections_section_presentation_section_presentation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/section-presentation/section-presentation.component */ "oE1+");
/* harmony import */ var _sections_section_audit_section_audit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/section-audit/section-audit.component */ "e5GX");
/* harmony import */ var _sections_section_conception_section_conception_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/section-conception/section-conception.component */ "Y+9V");
/* harmony import */ var _sections_section_developpement_section_developpement_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/section-developpement/section-developpement.component */ "JOQT");
/* harmony import */ var _sections_section_accompagnement_section_accompagnement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/section-accompagnement/section-accompagnement.component */ "JZDR");
/* harmony import */ var _sections_section_realisations_section_realisations_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/section-realisations/section-realisations.component */ "b6UP");
/* harmony import */ var _sections_section_contact_section_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/section-contact/section-contact.component */ "VX8R");








class PageHomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageHomeComponent.ɵfac = function PageHomeComponent_Factory(t) { return new (t || PageHomeComponent)(); };
PageHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageHomeComponent, selectors: [["app-page-home"]], decls: 8, vars: 0, consts: [["id", "page-home"]], template: function PageHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-section-presentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-section-audit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-section-conception");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-section-developpement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-section-accompagnement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-section-realisations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-section-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_sections_section_presentation_section_presentation_component__WEBPACK_IMPORTED_MODULE_1__["SectionPresentationComponent"], _sections_section_audit_section_audit_component__WEBPACK_IMPORTED_MODULE_2__["SectionAuditComponent"], _sections_section_conception_section_conception_component__WEBPACK_IMPORTED_MODULE_3__["SectionConceptionComponent"], _sections_section_developpement_section_developpement_component__WEBPACK_IMPORTED_MODULE_4__["SectionDeveloppementComponent"], _sections_section_accompagnement_section_accompagnement_component__WEBPACK_IMPORTED_MODULE_5__["SectionAccompagnementComponent"], _sections_section_realisations_section_realisations_component__WEBPACK_IMPORTED_MODULE_6__["SectionRealisationsComponent"], _sections_section_contact_section_contact_component__WEBPACK_IMPORTED_MODULE_7__["SectionContactComponent"]], styles: ["#page-home {\n  position: relative;\n}\n\nh2 span {\n  display: inline-block;\n  width: 2.5rem;\n  height: 2.5rem;\n  margin-right: 1rem;\n  border-radius: 50%;\n  background-color: var(--primary-color);\n  text-align: center;\n  color: var(--text-contrast);\n}\n\nsection {\n  position: relative;\n}\n\nsection .container {\n  min-height: inherit;\n}\n\n.content ul {\n  margin-top: 2rem;\n  list-style: none;\n  padding: 0;\n}\n\n.content ul li {\n  padding-bottom: 1rem;\n}\n\n.content ul li::before {\n  content: \"\";\n  display: inline-block;\n  background: var(--primary-color);\n  width: 0.5rem;\n  height: 0.5rem;\n  margin-right: 1rem;\n  border-radius: 50%;\n}\n\n@media (min-width: 0px) and (max-width: 730px) {\n  .decor {\n    display: none;\n  }\n}\n\n.line-decor {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n\n@media (min-width: 0px) and (max-width: 730px) {\n  .line-decor {\n    display: none;\n  }\n}\n\n.line-decor .container {\n  height: 100%;\n}\n\n.line-decor .container .line {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.line-decor .container .line.left {\n  background-image: url(/assets/line-left.svg);\n}\n\n.line-decor .container .line.right {\n  background-image: url(/assets/line-right.svg);\n}\n\n.line path {\n  stroke: var(--primary-color);\n  stroke-width: 16;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 32 32;\n  fill: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ2UtaG9tZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9taXhpbnMvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtBQUFKOztBQUdJO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFBUjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBQ0k7RUFDSSxtQkFBQTtBQUNSOztBQUlJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFEUjs7QUFFUTtFQUNJLG9CQUFBO0FBQVo7O0FBQ1k7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNoQjs7QUNuQkk7RUR1Qko7SUFFUSxhQUFBO0VBRE47QUFDRjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFESjs7QUNsQ0k7RUQ2Qko7SUFRUSxhQUFBO0VBQ047QUFDRjs7QUFBSTtFQUNJLFlBQUE7QUFFUjs7QUFEUTtFQUNJLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFHWjs7QUFGWTtFQUNJLDRDQUFBO0FBSWhCOztBQUZZO0VBQ0ksNkNBQUE7QUFJaEI7O0FBSUk7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQURSIiwiZmlsZSI6InBhZ2UtaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvbWl4aW5zL21peGlucy5zY3NzXCI7XG4jcGFnZS1ob21lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5oMiB7XG4gICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDIuNXJlbTtcbiAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb250cmFzdCk7XG4gICAgfVxufVxuc2VjdGlvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5jb250YWluZXIge1xuICAgICAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICAgIH1cbiAgICBcbn1cbi5jb250ZW50IHtcbiAgICB1bCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgICAgICB3aWR0aDogLjVyZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAuNXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLmRlY29yIHtcbiAgICBAaW5jbHVkZSB4cyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4ubGluZS1kZWNvciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBAaW5jbHVkZSB4cyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC5saW5lIHtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgJi5sZWZ0IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9saW5lLWxlZnQuc3ZnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYucmlnaHQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2xpbmUtcmlnaHQuc3ZnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn1cbi5saW5lIHtcbiAgICBwYXRoIHtcbiAgICAgICAgc3Ryb2tlOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAxNjtcbiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAzMiAzMjtcbiAgICAgICAgZmlsbDogbm9uZTtcbiAgICB9XG59XG4iLCJAaW1wb3J0IFwiLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG4vLyBUWVBPR1JBUEhZXG5AbWl4aW4gdHlwb2dyYXBoeS10aGluIHsgZm9udC13ZWlnaHQ6IDEwMDsgfVxuQG1peGluIHR5cG9ncmFwaHktZXh0cmEtbGlnaHQgeyBmb250LXdlaWdodDogMjAwOyB9XG5AbWl4aW4gdHlwb2dyYXBoeS1saWdodCB7IGZvbnQtd2VpZ2h0OiAzMDA7IH1cbkBtaXhpbiB0eXBvZ3JhcGh5LW5vcm1hbCB7IGZvbnQtd2VpZ2h0OiA0MDA7IH1cbkBtaXhpbiB0eXBvZ3JhcGh5LW1lZGl1bSB7IGZvbnQtd2VpZ2h0OiA1MDA7IH1cbkBtaXhpbiB0eXBvZ3JhcGh5LXNlbWktYm9sZCB7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cbkBtaXhpbiB0eXBvZ3JhcGh5LWJvbGQgeyBmb250LXdlaWdodDogNzAwOyB9XG5AbWl4aW4gdHlwb2dyYXBoeS1leHRyYS1ib2xkIHsgZm9udC13ZWlnaHQ6IDgwMDsgfVxuQG1peGluIHR5cG9ncmFwaHktYmxhY2sgeyBmb250LXdlaWdodDogOTAwOyB9XG5cbkBtaXhpbiB0eXBvZ3JhcGh5LXJvYm90byB7IGZvbnQtZmFtaWx5OiAncm9ib3RvJywgc2Fucy1zZXJpZjsgfVxuQG1peGluIHR5cG9ncmFwaHktY29va2llIHsgZm9udC1mYW1pbHk6ICdjb29raWUnLCBjdXJzaXZlOyB9XG5cbi8vIFJFU1BPTlNJVkVcbkBtaXhpbiB4cyB7XG4gICAgJG1xOiBtYXAtZ2V0KCRtYXA6ICRicmVha3BvaW50cywgJGtleTogXCJ4c1wiKTtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3ttYXAtZ2V0KCRtcSwgXCJtaW5cIil9KSBhbmQgKG1heC13aWR0aDogI3ttYXAtZ2V0KCRtcSwgXCJtYXhcIil9KVxuICAgIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIHNtIHtcbiAgICAkbXE6IG1hcC1nZXQoJG1hcDogJGJyZWFrcG9pbnRzLCAka2V5OiBcInNtXCIpO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAje21hcC1nZXQoJG1xLCBcIm1pblwiKX0pIGFuZCAobWF4LXdpZHRoOiAje21hcC1nZXQoJG1xLCBcIm1heFwiKX0pXG4gICAge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5AbWl4aW4gbWQge1xuICAgICRtcTogbWFwLWdldCgkbWFwOiAkYnJlYWtwb2ludHMsICRrZXk6IFwibWRcIik7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7bWFwLWdldCgkbXEsIFwibWluXCIpfSkgYW5kIChtYXgtd2lkdGg6ICN7bWFwLWdldCgkbXEsIFwibWF4XCIpfSlcbiAgICB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiB4bCB7XG4gICAgJG1xOiBtYXAtZ2V0KCRtYXA6ICRicmVha3BvaW50cywgJGtleTogXCJ4bFwiKTtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3ttYXAtZ2V0KCRtcSwgXCJtaW5cIil9KSBhbmQgKG1heC13aWR0aDogI3ttYXAtZ2V0KCRtcSwgXCJtYXhcIil9KVxuICAgIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufSJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ "PZ0w":
/*!******************************************************************!*\
  !*** ./src/app/page-realisations/page-realisations.component.ts ***!
  \******************************************************************/
/*! exports provided: PageRealisationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRealisationsComponent", function() { return PageRealisationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_realisation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/realisation.service */ "XpdA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_realisation_card_realisation_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/realisation-card/realisation-card.component */ "TLQx");




function PageRealisationsComponent_app_realisation_card_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-realisation-card", 3);
} if (rf & 2) {
    const realisation_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("realisation", realisation_r1);
} }
class PageRealisationsComponent {
    constructor(realisationService) {
        this.realisationService = realisationService;
        this.realisations = [];
    }
    ngOnInit() {
        this.realisationService.loadRealisations()
            .subscribe(x => {
            this.realisations = x;
        });
    }
}
PageRealisationsComponent.ɵfac = function PageRealisationsComponent_Factory(t) { return new (t || PageRealisationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_realisation_service__WEBPACK_IMPORTED_MODULE_1__["RealisationService"])); };
PageRealisationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageRealisationsComponent, selectors: [["app-page-realisations"]], decls: 6, vars: 1, consts: [[1, "container", "text-align-center"], [1, "content", "grid-three-columns", "d-grid"], [3, "realisation", 4, "ngFor", "ngForOf"], [3, "realisation"]], template: function PageRealisationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mes r\u00E9alisations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PageRealisationsComponent_app_realisation_card_5_Template, 1, 1, "app-realisation-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.realisations);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _shared_realisation_card_realisation_card_component__WEBPACK_IMPORTED_MODULE_3__["RealisationCardComponent"]], styles: ["[_nghost-%COMP%] {\n  margin-bottom: 2rem;\n  display: block;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ2UtcmVhbGlzYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoicGFnZS1yZWFsaXNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuaDIge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/header/header.component */ "320Y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "app-container"], [1, "content-wrap"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], encapsulation: 2 });


/***/ }),

/***/ "TLQx":
/*!***********************************************************************!*\
  !*** ./src/app/shared/realisation-card/realisation-card.component.ts ***!
  \***********************************************************************/
/*! exports provided: RealisationCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealisationCardComponent", function() { return RealisationCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_realisation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/realisation.service */ "XpdA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function RealisationCardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " A venir... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
function RealisationCardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "url(" + ctx_r1.folder + ctx_r1.realisation.tag + "/" + ctx_r1.realisation.thumbnail + ")"));
} }
function RealisationCardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.realisation.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.realisation.description);
} }
const _c1 = function (a1) { return ["/realisations", a1]; };
const _c2 = function () { return []; };
class RealisationCardComponent {
    constructor(realisationService) {
        this.realisationService = realisationService;
        this.realisation = undefined;
        this.folder = "";
    }
    ngOnInit() {
        this.folder = this.realisationService.getFolder();
    }
}
RealisationCardComponent.ɵfac = function RealisationCardComponent_Factory(t) { return new (t || RealisationCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_realisation_service__WEBPACK_IMPORTED_MODULE_1__["RealisationService"])); };
RealisationCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RealisationCardComponent, selectors: [["app-realisation-card"]], inputs: { realisation: "realisation" }, decls: 4, vars: 9, consts: [[1, "realisation", 3, "routerLink"], ["class", "none", 4, "ngIf"], ["class", "thumbnail", 3, "ngStyle", 4, "ngIf"], ["class", "content", 4, "ngIf"], [1, "none"], [1, "thumbnail", 3, "ngStyle"], [1, "content"], [1, "subtitle"], [1, "description"]], template: function RealisationCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RealisationCardComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RealisationCardComponent_div_2_Template, 1, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RealisationCardComponent_div_3_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.realisation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.realisation ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.realisation.tag) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.realisation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.realisation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.realisation);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: [".realisation[_ngcontent-%COMP%] {\n  height: 15rem;\n  display: block;\n  min-height: 15rem;\n  border-radius: 1rem;\n  position: relative;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25), 0px 2px 8px rgba(0, 0, 0, 0.25);\n  transition: box-shadow 200ms ease;\n  color: var(--text-constrast);\n}\n.realisation[_ngcontent-%COMP%]   .none[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.realisation[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 1rem;\n}\n.realisation[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  text-align: left;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 0;\n  padding: 0.5rem;\n  color: var(--text-contrast);\n}\n.realisation[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: var(--primary-color);\n  opacity: 0.8;\n  z-index: -1;\n  border-radius: 0 0 1rem 1rem;\n}\n.realisation[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.realisation[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25), 0px 2px 8px rgba(0, 0, 0, 0.25), 0px 4px 16px rgba(0, 0, 0, 0.25);\n}\n.realisation.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  cursor: default;\n}\n@media (min-width: 0px) and (max-width: 730px) {\n  .realisation[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n  .realisation.disabled[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlYWxpc2F0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvbWl4aW5zL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0RUFBQTtFQUNBLGlDQUFBO0VBQ0EsNEJBQUE7QUFESjtBQUVJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUFBUjtBQUNRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQUNaO0FBQ1E7RUFDSSxTQUFBO0FBQ1o7QUFFSTtFQUNJLDhHQUFBO0FBQVI7QUFFSTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtBQUFSO0FDeENJO0VEakJKO0lBNkRRLG1CQUFBO0VBQU47RUFDTTtJQUNJLGFBQUE7RUFDVjtBQUNGIiwiZmlsZSI6InJlYWxpc2F0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL21peGlucy9taXhpbnMuc2Nzc1wiO1xuXG4ucmVhbGlzYXRpb24ge1xuICAgIGhlaWdodDogMTVyZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWluLWhlaWdodDogMTVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxcHggcmdiYSgwLDAsMCwuMjUpLCAwcHggMnB4IDhweCByZ2JhKDAsMCwwLC4yNSk7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBlYXNlO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbnN0cmFzdCk7XG4gICAgLm5vbmUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC50aHVtYm5haWwge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIH1cbiAgICAuY29udGVudCB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbnRyYXN0KTtcbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDFyZW0gMXJlbTtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAxcHggcmdiYSgwLDAsMCwuMjUpLCAwcHggMnB4IDhweCByZ2JhKDAsMCwwLC4yNSksIDBweCA0cHggMTZweCByZ2JhKDAsMCwwLC4yNSk7XG4gICAgfVxuICAgICYuZGlzYWJsZWQge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHhzIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxufSIsIkBpbXBvcnQgXCIuLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi8vIFRZUE9HUkFQSFlcbkBtaXhpbiB0eXBvZ3JhcGh5LXRoaW4geyBmb250LXdlaWdodDogMTAwOyB9XG5AbWl4aW4gdHlwb2dyYXBoeS1leHRyYS1saWdodCB7IGZvbnQtd2VpZ2h0OiAyMDA7IH1cbkBtaXhpbiB0eXBvZ3JhcGh5LWxpZ2h0IHsgZm9udC13ZWlnaHQ6IDMwMDsgfVxuQG1peGluIHR5cG9ncmFwaHktbm9ybWFsIHsgZm9udC13ZWlnaHQ6IDQwMDsgfVxuQG1peGluIHR5cG9ncmFwaHktbWVkaXVtIHsgZm9udC13ZWlnaHQ6IDUwMDsgfVxuQG1peGluIHR5cG9ncmFwaHktc2VtaS1ib2xkIHsgZm9udC13ZWlnaHQ6IDYwMDsgfVxuQG1peGluIHR5cG9ncmFwaHktYm9sZCB7IGZvbnQtd2VpZ2h0OiA3MDA7IH1cbkBtaXhpbiB0eXBvZ3JhcGh5LWV4dHJhLWJvbGQgeyBmb250LXdlaWdodDogODAwOyB9XG5AbWl4aW4gdHlwb2dyYXBoeS1ibGFjayB7IGZvbnQtd2VpZ2h0OiA5MDA7IH1cblxuQG1peGluIHR5cG9ncmFwaHktcm9ib3RvIHsgZm9udC1mYW1pbHk6ICdyb2JvdG8nLCBzYW5zLXNlcmlmOyB9XG5AbWl4aW4gdHlwb2dyYXBoeS1jb29raWUgeyBmb250LWZhbWlseTogJ2Nvb2tpZScsIGN1cnNpdmU7IH1cblxuLy8gUkVTUE9OU0lWRVxuQG1peGluIHhzIHtcbiAgICAkbXE6IG1hcC1nZXQoJG1hcDogJGJyZWFrcG9pbnRzLCAka2V5OiBcInhzXCIpO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAje21hcC1nZXQoJG1xLCBcIm1pblwiKX0pIGFuZCAobWF4LXdpZHRoOiAje21hcC1nZXQoJG1xLCBcIm1heFwiKX0pXG4gICAge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5AbWl4aW4gc20ge1xuICAgICRtcTogbWFwLWdldCgkbWFwOiAkYnJlYWtwb2ludHMsICRrZXk6IFwic21cIik7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7bWFwLWdldCgkbXEsIFwibWluXCIpfSkgYW5kIChtYXgtd2lkdGg6ICN7bWFwLWdldCgkbXEsIFwibWF4XCIpfSlcbiAgICB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiBtZCB7XG4gICAgJG1xOiBtYXAtZ2V0KCRtYXA6ICRicmVha3BvaW50cywgJGtleTogXCJtZFwiKTtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3ttYXAtZ2V0KCRtcSwgXCJtaW5cIil9KSBhbmQgKG1heC13aWR0aDogI3ttYXAtZ2V0KCRtcSwgXCJtYXhcIil9KVxuICAgIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIHhsIHtcbiAgICAkbXE6IG1hcC1nZXQoJG1hcDogJGJyZWFrcG9pbnRzLCAka2V5OiBcInhsXCIpO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAje21hcC1nZXQoJG1xLCBcIm1pblwiKX0pIGFuZCAobWF4LXdpZHRoOiAje21hcC1nZXQoJG1xLCBcIm1heFwiKX0pXG4gICAge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ "VX8R":
/*!*********************************************************************************!*\
  !*** ./src/app/page-home/sections/section-contact/section-contact.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SectionContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionContactComponent", function() { return SectionContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_logo_reseaux_logo_reseaux_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/logo-reseaux/logo-reseaux.component */ "wPIg");


class SectionContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
SectionContactComponent.ɵfac = function SectionContactComponent_Factory(t) { return new (t || SectionContactComponent)(); };
SectionContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionContactComponent, selectors: [["app-section-contact"]], decls: 16, vars: 0, consts: [["id", "contact"], [1, "container"], ["width", "600", "viewBox", "0 0 600 200", 1, "line"], ["d", "M300 10 C 350 50, 300 100, 300 150", "stroke-width", "12"], ["d", "M40.7468 41.0661C37.6031 44.3121 32.3969 44.3121 29.2532 41.0661L3.1043 14.0655C-1.81115 8.98995 1.78546 0.5 8.85106 0.499999L61.1489 0.499995C68.2145 0.499994 71.8111 8.98995 66.8957 14.0655L40.7468 41.0661Z", "transform", "translate(265, 150)", 1, "arrow"], [1, "contact"], ["href", "mailto:davidviolet18@gmail.com?subject=Demande d'informations&body=Bonjour,"], [1, "reseaux"], [1, "subtitle"]], template: function SectionContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Et si on parlait ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " davidviolet18@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Retrouvez-moi aussi sur :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-logo-reseaux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_logo_reseaux_logo_reseaux_component__WEBPACK_IMPORTED_MODULE_1__["LogoReseauxComponent"]], styles: ["section[_ngcontent-%COMP%] {\n  text-align: center;\n  min-height: auto;\n  padding-bottom: 5rem;\n}\nsection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  margin-bottom: 6rem;\n}\nsection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\nsection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nsection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n@media (min-width: 0px) and (max-width: 730px) {\n  section[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.arrow[_ngcontent-%COMP%] {\n  stroke: none;\n  stroke-width: 0;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 32 32;\n  fill: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NlY3Rpb24tY29udGFjdC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9taXhpbnMvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFESjtBQUVJO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQVI7QUFDUTtFQUNJLG1CQUFBO0FBQ1o7QUFDUTtFQUNJLGlCQUFBO0FBQ1o7QUFBWTtFQUNJLDJCQUFBO0FBRWhCO0FDQ0k7RURHSTtJQUFNLGFBQUE7RUFBWjtBQUNGO0FBRUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FBQ0oiLCJmaWxlIjoic2VjdGlvbi1jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy9taXhpbnMvbWl4aW5zLnNjc3NcIjtcblxuc2VjdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDVyZW07XG4gICAgLmNvbnRhY3Qge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZyZW07XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgID4gc3BhbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBAaW5jbHVkZSB4cyB7XG4gICAgICAgIHN2ZyB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgICB9XG59XG4uYXJyb3cge1xuICAgIHN0cm9rZTogbm9uZTtcbiAgICBzdHJva2Utd2lkdGg6IDA7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMzIgMzI7XG4gICAgZmlsbDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59IiwiQGltcG9ydCBcIi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcblxuLy8gVFlQT0dSQVBIWVxuQG1peGluIHR5cG9ncmFwaHktdGhpbiB7IGZvbnQtd2VpZ2h0OiAxMDA7IH1cbkBtaXhpbiB0eXBvZ3JhcGh5LWV4dHJhLWxpZ2h0IHsgZm9udC13ZWlnaHQ6IDIwMDsgfVxuQG1peGluIHR5cG9ncmFwaHktbGlnaHQgeyBmb250LXdlaWdodDogMzAwOyB9XG5AbWl4aW4gdHlwb2dyYXBoeS1ub3JtYWwgeyBmb250LXdlaWdodDogNDAwOyB9XG5AbWl4aW4gdHlwb2dyYXBoeS1tZWRpdW0geyBmb250LXdlaWdodDogNTAwOyB9XG5AbWl4aW4gdHlwb2dyYXBoeS1zZW1pLWJvbGQgeyBmb250LXdlaWdodDogNjAwOyB9XG5AbWl4aW4gdHlwb2dyYXBoeS1ib2xkIHsgZm9udC13ZWlnaHQ6IDcwMDsgfVxuQG1peGluIHR5cG9ncmFwaHktZXh0cmEtYm9sZCB7IGZvbnQtd2VpZ2h0OiA4MDA7IH1cbkBtaXhpbiB0eXBvZ3JhcGh5LWJsYWNrIHsgZm9udC13ZWlnaHQ6IDkwMDsgfVxuXG5AbWl4aW4gdHlwb2dyYXBoeS1yb2JvdG8geyBmb250LWZhbWlseTogJ3JvYm90bycsIHNhbnMtc2VyaWY7IH1cbkBtaXhpbiB0eXBvZ3JhcGh5LWNvb2tpZSB7IGZvbnQtZmFtaWx5OiAnY29va2llJywgY3Vyc2l2ZTsgfVxuXG4vLyBSRVNQT05TSVZFXG5AbWl4aW4geHMge1xuICAgICRtcTogbWFwLWdldCgkbWFwOiAkYnJlYWtwb2ludHMsICRrZXk6IFwieHNcIik7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7bWFwLWdldCgkbXEsIFwibWluXCIpfSkgYW5kIChtYXgtd2lkdGg6ICN7bWFwLWdldCgkbXEsIFwibWF4XCIpfSlcbiAgICB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiBzbSB7XG4gICAgJG1xOiBtYXAtZ2V0KCRtYXA6ICRicmVha3BvaW50cywgJGtleTogXCJzbVwiKTtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3ttYXAtZ2V0KCRtcSwgXCJtaW5cIil9KSBhbmQgKG1heC13aWR0aDogI3ttYXAtZ2V0KCRtcSwgXCJtYXhcIil9KVxuICAgIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIG1kIHtcbiAgICAkbXE6IG1hcC1nZXQoJG1hcDogJGJyZWFrcG9pbnRzLCAka2V5OiBcIm1kXCIpO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAje21hcC1nZXQoJG1xLCBcIm1pblwiKX0pIGFuZCAobWF4LXdpZHRoOiAje21hcC1nZXQoJG1xLCBcIm1heFwiKX0pXG4gICAge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5AbWl4aW4geGwge1xuICAgICRtcTogbWFwLWdldCgkbWFwOiAkYnJlYWtwb2ludHMsICRrZXk6IFwieGxcIik7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7bWFwLWdldCgkbXEsIFwibWluXCIpfSkgYW5kIChtYXgtd2lkdGg6ICN7bWFwLWdldCgkbXEsIFwibWF4XCIpfSlcbiAgICB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ "XpdA":
/*!*************************************************!*\
  !*** ./src/app/services/realisation.service.ts ***!
  \*************************************************/
/*! exports provided: RealisationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealisationService", function() { return RealisationService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class RealisationService {
    constructor(http) {
        this.http = http;
    }
    getFolder() {
        return "/assets/realisations/";
    }
    loadRealisations() {
        return this.http.get("assets/realisations/realisations.json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(results => results.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["shareReplay"])(1));
    }
}
RealisationService.ɵfac = function RealisationService_Factory(t) { return new (t || RealisationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RealisationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RealisationService, factory: RealisationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Xy+Y":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/illustration-conception/illustration-conception.component.ts ***!
  \*************************************************************************************/
/*! exports provided: IllustrationConceptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IllustrationConceptionComponent", function() { return IllustrationConceptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class IllustrationConceptionComponent {
    constructor() { }
    ngOnInit() {
    }
}
IllustrationConceptionComponent.ɵfac = function IllustrationConceptionComponent_Factory(t) { return new (t || IllustrationConceptionComponent)(); };
IllustrationConceptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IllustrationConceptionComponent, selectors: [["app-illustration-conception"]], decls: 288, vars: 0, consts: [["width", "100%", "height", "100%", "viewBox", "0 0 2013 1425", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["opacity", "0.5"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M38.2309 56.3315C36.1692 58.3899 36.97 65.7056 36.9268 68.4129C36.8605 72.6276 37.1228 76.8046 37.4751 81.0041C37.7113 83.8159 39.0421 110.649 42.7457 108.588C44.8336 107.427 43.5246 99.6649 43.521 97.2097C43.5125 91.7513 43.2855 86.3063 42.9216 80.8601C42.5832 75.804 42.3708 70.8067 42.5656 65.7409C42.613 64.5045 43.7699 50.7826 38.2309 56.3315Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M128.016 53.0237C110.304 53.1646 92.5987 54.0383 74.8951 54.5736C66.3761 54.8312 57.8627 55.1586 49.3528 55.6307C46.4531 55.7917 40.2339 54.8634 37.8179 56.4084C32.4549 59.8387 41.1041 60.6407 43.4098 60.5569C78.4453 59.2864 113.493 57.6132 148.558 57.5342C165.759 57.4959 182.952 57.9856 200.155 57.8757C206.73 57.8338 214.012 55.0007 215.673 62.6548C217.547 71.2919 215.394 80.9085 214.808 89.5875C214.416 95.3813 214.556 101.055 214.817 106.844C214.984 110.552 214.548 114.731 215.204 118.37C215.835 121.875 218.354 123.976 220.664 120.051C222.043 117.705 221.357 111.913 221.449 109.195C221.572 105.536 221.456 101.877 221.456 98.2162C221.455 89.2813 222.716 80.3817 222.549 71.4487C222.442 65.6884 222.136 55.2455 214.871 53.8615C206.87 52.3371 197.036 53.87 188.849 53.7764C168.562 53.545 148.309 52.8651 128.016 53.0237Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M79.2109 108.909C72.5322 108.909 65.8529 108.949 59.1747 109.059C53.4472 109.154 44.442 107.96 39.1112 110.009C35.4618 111.412 34.4924 115.487 39.1112 116.572C44.1487 117.756 51.7408 115.82 57.0114 115.727C83.4403 115.261 110.124 114.653 136.515 116.324C161.245 117.89 186.452 119.408 211.218 117.755C213.302 117.616 223.929 117.193 219.08 113.21C216.251 110.884 204.784 112.414 201.107 112.302C188.138 111.911 175.157 111.824 162.193 111.333C149.398 110.847 136.659 109.409 123.86 109.053C108.989 108.639 94.0861 108.909 79.2109 108.909Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M72.5291 70.9217C82.9388 71.3761 93.2378 86.4729 82.7051 93.7692C72.8243 100.615 54.3058 93.1124 59.8003 79.8371C59.0104 81.7564 60.7989 77.7519 60.8214 77.7252C61.8663 76.4943 63.7424 75.1315 65.0301 74.1612C66.504 73.0506 68.0387 71.8282 69.8157 71.2716C70.9822 70.9065 70.7991 72.2808 72.5291 70.9217ZM67.4592 65.4766C62.5872 67.3789 60.3636 69.5248 57.0154 73.4077C54.6987 76.095 51.7455 77.5088 51.7717 81.1402C51.7771 81.944 52.8098 82.8274 52.9881 83.6015C53.2346 84.6714 52.9492 86.042 53.1445 87.1788C55.16 98.9085 69.1552 102.863 79.3994 100.649C88.323 98.7195 94.9969 90.1534 92.9297 80.8389C90.8485 71.4623 76.9439 61.7668 67.4592 65.4766Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M63.1191 81.8513C63.1191 86.0709 69.7845 86.0709 69.7845 81.8513C69.7845 77.6798 63.1191 77.5005 63.1191 81.8513Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M71.4583 80.9972C71.4583 84.3504 76.7544 84.3504 76.7544 80.9972C76.7544 77.6823 71.4583 77.5408 71.4583 80.9972Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M73.098 87.912C71.402 88.5639 69.2508 87.2121 67.8584 88.1028C65.3926 89.6812 67.8645 91.1096 69.1863 91.7439C75.1372 94.5995 76.196 86.7254 73.098 87.912Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M163.982 78.5602C163.805 78.6356 163.174 78.9029 163.982 78.5602V78.5602ZM138.067 74.7727C133.613 75.7782 129.852 79.9376 125.013 79.3811C121.305 78.9546 118.794 75.376 115.133 74.8559C110.45 74.1901 97.7038 84.8735 104.405 86.7065C108.315 87.7764 110.484 80.6315 113.938 80.2517C116.67 79.9516 120.386 83.3023 123.217 83.7793C128.5 84.6693 132.127 81.7597 136.764 79.8836C141.803 77.8446 144.67 79.6806 149.052 81.9468C152.511 83.7355 155.768 84.9002 159.726 84.162C163.441 83.47 168.107 79.6502 171.846 80.0421C175.508 80.4261 178.122 84.2477 181.889 84.6025C183.442 84.7483 185.753 85.2775 185.492 82.8813C185.284 80.9626 183.143 81.2876 181.803 80.5901C178.359 78.7966 175.137 75.6197 170.981 75.8906C167.854 76.0948 165.007 78.2917 162.126 79.3428C152.688 82.7847 147.383 72.6833 138.067 74.7727Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M145.95 135.549C127.746 135.716 109.481 135.986 91.3283 137.445C87.0247 137.791 43.0808 141.94 43.1642 142.239C43.3181 142.792 48.9703 143.637 48.935 143.767C48.554 142.822 47.6832 142.431 46.3231 142.595C88.0002 142.595 129.545 138.863 171.277 139.534C181.763 139.703 192.288 139.632 202.767 139.963C205.383 140.045 211.864 141.92 213.919 140.739C219.31 137.639 209.515 137.281 207.893 137.151C187.356 135.508 166.545 135.343 145.95 135.549Z", "fill", "#7E69AC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M37.769 144.393C35.0476 147.122 37.5536 156.938 37.6607 160.627C37.8159 165.961 37.6881 171.332 38.156 176.652C38.6903 182.729 39.5192 189.203 41.1135 195.099C41.9917 198.347 45.0739 203.509 46.2953 197.607C47.1673 193.392 45.8431 187.8 45.3824 183.505C44.766 177.761 44.6169 172.092 44.5938 166.319C44.5731 161.289 44.4763 156.238 44.0637 151.224C43.8495 148.621 42.54 139.648 37.769 144.393Z", "fill", "#7E69AC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M106.238 194.382C93.3201 194.604 80.374 194.908 67.4778 195.715C62.192 196.046 56.9105 196.539 51.6442 197.098C50.5695 197.212 38.675 197.695 43.99 202.084C46.3889 204.066 56.257 201.326 59.5163 201.041C64.998 200.56 70.4785 200.248 75.9761 200.015C88.7141 199.474 101.491 198.997 114.242 199.218C137.528 199.622 160.665 199.802 183.958 199.283C187.267 199.209 213.194 199.902 214.075 196.459C214.784 193.684 205.512 194.957 203.822 195.007C197.62 195.193 191.418 195.15 185.214 195.118C158.933 194.983 132.499 193.938 106.238 194.382Z", "fill", "#7E69AC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M209.685 139.79C210.095 151.291 212.054 162.78 212.68 174.316C212.966 179.59 213.303 184.859 213.561 190.134C213.645 191.836 212.959 195.936 214.971 196.915C217.732 198.258 218.103 195.552 218.62 193.722C220.113 188.437 219.103 181.571 218.968 176.141C218.837 170.883 218.828 165.616 218.44 160.368C218.043 155.007 216.963 149.746 216.462 144.403C216.25 142.144 216.991 138.384 214.592 136.981C212.519 135.769 209.595 137.297 209.685 139.79Z", "fill", "#7E69AC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M82.7123 158.923C82.7616 158.96 82.8103 158.998 82.859 159.037C82.8103 158.998 82.761 158.961 82.7123 158.923ZM71.7341 155.515C75.8277 156.684 79.1899 156.248 83.1004 159.228C86.3421 161.699 89.6671 165.314 90.7424 169.309C93.2265 178.54 84.8049 183.599 76.9097 183.698C68.8228 183.8 56.8528 181.924 57.2672 171.559C57.5849 163.595 63.4001 155.824 71.7341 155.515ZM72.0225 150.298C61.4072 150.827 52.8444 162.748 52.9363 172.782C53.047 184.944 66.8274 188.077 76.6164 188.162C87.6645 188.256 98.6815 180.628 95.7209 168.204C93.3488 158.249 82.2308 149.768 72.0225 150.298Z", "fill", "#7E69AC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M61.3445 166.627C61.3445 170.018 66.7027 170.018 66.7027 166.627C66.7027 163.274 61.3445 163.13 61.3445 166.627Z", "fill", "#7E69AC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M72.5833 165.139C72.5833 168.557 77.984 168.557 77.984 165.139C77.984 161.76 72.5833 161.615 72.5833 165.139Z", "fill", "#7E69AC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M66.3873 172.874C62.8998 176.356 75.1515 182.46 78.0409 177.616C80.4142 173.638 75.2471 174.957 73.4154 174.742C71.4248 174.507 68.0121 171.254 66.3873 172.874Z", "fill", "#7E69AC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M164.342 165.209C164.006 165.35 164.006 165.35 164.342 165.209V165.209ZM118.333 159.54C114.802 160.203 103.213 164.112 103.057 168.302C102.771 175.917 114.12 168.117 116.585 167.116C123.28 164.395 126.798 169.945 133.524 170.238C139.365 170.492 144.736 165.493 150.239 166.085C156.004 166.704 158.777 172.837 165.433 169.58C168.954 167.858 168.865 165.202 164.912 164.952C162.523 164.801 160.882 165.788 158.391 164.76C154.496 163.154 152.927 160.537 148.266 160.953C144.748 161.267 141.569 163.249 138.136 164.016C130.274 165.773 125.913 158.121 118.333 159.54Z", "fill", "#7E69AC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M191.465 168.515C191.222 168.617 191.222 168.617 191.465 168.515V168.515ZM192.355 165.344C192.394 165.362 192.661 165.731 192.355 165.344V165.344ZM188.307 162.924C188.155 163.041 188.155 163.041 188.307 162.924V162.924ZM188.396 162.894C189.181 163.364 195.492 167.679 190.908 168.696C188.581 169.212 186.655 164.529 188.396 162.894ZM186.306 158.113C176.196 162.723 187.075 179.218 195.009 172.516C198.348 169.696 198.787 163.996 195.539 161.058C193.593 159.297 188.948 156.907 186.306 158.113Z", "fill", "#7E69AC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M91.4048 223.116C78.7898 223.12 66.064 222.855 53.466 223.603C51.3458 223.729 43.2693 223.325 42.1769 225.542C40.1785 229.595 48.4887 227.583 49.6961 227.462C74.7801 224.951 100.983 226.395 126.149 227.111C146.732 227.696 167.205 228.06 187.763 229.12C193.167 229.399 198.566 229.707 203.966 230.033C205.726 230.139 210.155 231.306 210.527 228.495C210.87 225.893 205.344 226.481 203.964 226.408C192.987 225.83 182.018 225.225 171.044 224.607C144.63 223.118 117.86 223.112 91.4048 223.116Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M41.7716 227.624C39.4153 229.966 40.5198 238.91 40.4541 241.867C40.3391 247.037 40.0951 252.203 39.9855 257.372C39.8717 262.775 40.0299 268.202 40.3494 273.597C40.4833 275.862 42.3424 286.809 45.2695 280.544C46.5772 277.745 45.2378 269.947 45.2579 266.775C45.2938 261.002 45.6048 255.253 45.892 249.488C46.1391 244.532 46.1482 239.571 46.3648 234.614C46.4336 233.034 46.6204 222.76 41.7716 227.624Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M212.649 273.807C200.372 275.065 187.898 274.47 175.575 275.4C164.954 276.201 154.343 276.528 143.695 276.754C119.582 277.263 95.4295 277.759 71.3872 279.768C65.9079 280.226 60.4353 280.712 54.9414 280.957C52.1939 281.08 40.6645 279.83 39.8058 282.726C38.3435 287.659 50.6731 285.707 53.3325 285.63C59.1805 285.461 65.0012 285.038 70.8329 284.594C95.3473 282.726 119.955 282.168 144.522 281.391C157.883 280.97 171.151 279.992 184.483 279.103C191.127 278.66 197.79 278.645 204.434 278.216C206.173 278.103 212.326 278.325 213.577 276.926C214.436 275.965 214.653 273.62 212.649 273.807Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M208.487 228.463C208.908 240.237 209.574 252 209.971 263.773C210.091 267.314 209.021 273.659 210.993 276.781C214.163 281.802 216.637 276.488 217.217 273.36C219.05 263.487 217.08 252.58 216.568 242.645C216.373 238.855 217.55 230.42 215.719 227.028C213.974 223.797 208.331 224.121 208.487 228.463Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M187.876 245.231C192.579 246.505 193.266 256.731 187.959 257.488C180.06 258.614 183.514 247.34 187.876 245.231ZM186.558 241.165C185.123 241.12 181.812 240.724 180.927 241.892C180.187 242.87 180.935 244.931 180.849 245.862C180.538 249.189 177.833 251.11 179.042 255.038C179.863 257.704 182.061 260.209 184.74 261.135C198.876 266.021 198.704 238.707 186.558 241.165Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M58.9323 243C58.897 243.045 58.8617 243.09 58.827 243.135C58.8617 243.09 58.897 243.045 58.9323 243ZM70.0355 237.092C69.9801 236.62 69.9247 236.146 69.8693 235.673C77.5339 239.291 83.6327 246.021 81.0878 255.054C79.1459 261.946 72.1301 264.39 65.5937 262.689C58.3582 260.805 54.9005 254.841 56.8514 247.517C57.7515 244.139 60.5155 239.598 64.0882 238.512C65.7513 238.007 69.4294 239.295 70.0355 237.092ZM65.5534 234.231C63.6146 234.362 61.7275 235.17 60.1453 236.274C61.6265 235.022 63.6006 234.276 65.5534 234.231ZM65.6086 229.78C60.8194 229.927 57.6812 232.826 54.8405 236.308C53.949 237.401 50.9349 240.298 51.3079 241.771C51.6031 242.935 52.3753 244.638 54.0013 243.34C45.4848 260.313 67.486 274.791 80.9171 262.987C93.4518 251.972 81.0156 229.264 65.6086 229.78Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M61.2566 245.547C61.2566 247.807 64.7654 247.807 64.7654 245.547C64.7654 243.287 61.2566 243.287 61.2566 245.547Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M67.2451 245.933C67.2451 248.23 70.8106 248.23 70.8106 245.933C70.8106 243.636 67.2451 243.636 67.2451 245.933Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M69.9624 254C68.2944 254.136 62.1889 253.569 61.1172 255.03C59.3263 257.471 62.1846 257.556 63.5885 257.82C64.8531 258.057 70.35 257.923 71.1247 256.8C71.8093 255.808 71.6492 253.857 69.9624 254Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M143.523 247.669C143.237 247.787 143.237 247.787 143.523 247.669V247.669ZM120.454 245.982C116.695 246.258 113.512 248.42 109.919 249.282C106.083 250.204 104.423 248.51 100.935 247.401C97.3073 246.248 94.7265 246.703 91.8104 249.181C90.1582 250.585 86.5331 253.817 87.5658 256.311C89.9306 262.019 95.2833 252.732 97.8009 252.3C101.728 251.626 105.223 255.06 109.751 254.077C113.855 253.188 117.497 250.37 121.783 250.34C125.368 250.314 128.746 252.275 132.284 252.75C137.686 253.475 141.234 251.557 146.227 250.132C150.558 248.898 153.594 250.526 157.667 251.896C159.529 252.521 165.74 254.797 164.597 250.671C164.274 249.505 156.088 247.421 154.819 247.02C150.344 245.607 147.51 246.158 143.247 247.783C139.692 249.139 136.702 249.799 132.89 249.053C128.69 248.231 124.871 245.646 120.454 245.982Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M444.827 101.505C445.434 88.4553 446.268 75.4235 446.708 62.3657C446.925 55.8951 447.096 49.4239 447.261 42.9521C447.298 41.511 447.335 40.0705 447.367 38.6295C447.475 33.7337 446.894 33.3331 451.821 32.8986C473.8 30.9585 495.866 30.3154 517.872 28.5601C544.412 26.4432 571.09 24.9814 597.705 24.3262C609.532 24.0345 621.409 23.4303 633.238 23.7981C635.859 23.8795 641.004 23.1976 642.035 25.2349C642.481 26.115 641.546 29.1436 641.427 30.1592C641.057 33.3319 640.711 36.5156 640.497 39.704C639.239 58.5092 639.989 77.7885 643.63 96.3086C635.088 91.4918 624.296 87.3485 614.34 88.1708C604.189 89.0089 596.596 94.8736 588.472 100.271C583.876 103.324 582.328 104.127 577.743 101.17C573.792 98.6206 570.054 95.7062 566.326 92.846C560.574 88.4315 555.145 83.6452 549.566 79.0174C539.309 70.5083 525.178 58.3968 511.012 61.9627C500.891 64.5106 491.545 70.0731 482.76 75.5171C469.709 83.605 457.895 93.5097 444.827 101.505ZM620.728 18.0028C570.302 18.0028 520.253 22.8913 469.968 25.5358C464.717 25.8117 459.483 26.2183 454.25 26.7234C450.762 27.0601 442.233 25.6464 439.948 28.6264C438.423 30.6145 439.733 30.9129 439.948 32.802C440.218 35.1827 440.058 38.0035 439.988 40.5234C439.82 46.5953 439.644 52.6665 439.506 58.739C438.985 81.6893 438.66 104.635 439.589 127.58C439.791 132.584 441.615 139.512 440.617 144.374C439.895 147.895 437.481 150.037 443.049 150.687C448.527 151.328 455.227 149.699 460.71 149.178C466.226 148.652 471.74 148.083 477.262 147.628C501.271 145.649 525.512 145.948 549.583 145.291C573.872 144.628 598.169 144.585 622.466 144.572C632.632 144.566 644.248 145.138 654.167 142.34C657.657 141.355 658.221 140.87 657.361 137.408C657.198 136.751 656.144 136.508 655.834 135.321C655.414 133.704 655.63 131.74 655.532 130.058C655.211 124.563 655.099 119.059 654.84 113.561C654.407 104.375 652.824 95.4595 651.653 86.3657C650.301 75.8636 650.371 65.2005 650.343 54.6297C650.327 48.7663 650.478 42.9224 650.949 37.0754C651.251 33.3253 653.098 27.7263 652.161 24.229C651.695 22.4877 650.931 21.1068 649.119 20.3574C647.971 19.8821 647.005 20.254 645.87 20.1337C644.524 19.9909 643.684 19.8018 642.071 19.4366C635.16 17.8703 627.771 18.0028 620.728 18.0028Z", "fill", "#7E69AC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M592.822 42.97C592.818 46.6247 592.248 52.0177 593.933 55.459C596.07 59.8242 598.743 58.4597 599.452 54.3577C599.857 52.0073 599.848 45.0517 599.092 42.97C598.024 40.0234 592.822 38.0165 592.822 42.97Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M598.953 44.3811C595.522 44.5021 585.53 43.6785 583.209 46.4373C579.227 51.169 586.159 52.0071 589.135 51.7421C592.58 51.4358 603.223 52.1834 605.53 49.4216C609.388 44.8011 601.651 44.2827 598.953 44.3811Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M465.809 166.473C480.893 169.094 476.2 192.091 461.928 186.765C456.955 184.908 449.627 179.545 452.376 173.226C454.429 168.505 461.121 166.024 465.809 166.473ZM459.564 159.323C449.754 160.974 443.048 171.59 446.411 180.85C449.656 189.783 461.963 196.325 471.039 193.114C479.703 190.049 484.025 178.521 481.104 170.088C478.052 161.277 468.109 157.884 459.564 159.323Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M551.311 169.163C547.556 169.475 544.31 172.104 540.531 172.57C536.998 173.005 534.07 171.796 530.762 170.83C526.763 169.662 523.095 169.149 519.009 170.186C515.886 170.979 512.806 173.104 509.562 173.361C503.179 173.865 495.76 166.582 490.777 174.819C488.388 178.768 491.857 181.311 495.43 179.47C499.156 177.55 497.327 176.863 501.948 177.997C505.803 178.942 508.919 179.456 512.781 178.131C516.28 176.931 519.351 174.735 523.153 174.488C526.876 174.247 530.115 175.943 533.673 176.674C538.05 177.574 541.922 176.893 546.069 175.521C550.013 174.217 551.587 173.503 555.567 174.667C558.087 175.404 563.593 177.746 566.046 175.859C570.287 172.596 564.609 172.119 562.373 171.655C558.773 170.91 555.047 168.858 551.311 169.163Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M637.251 166.972C637.281 166.995 637.311 167.018 637.34 167.041C637.311 167.018 637.28 166.995 637.251 166.972ZM633.564 166.2C639.047 166.554 644.976 176.541 637.711 176.895C632.597 177.145 626.877 168.399 633.564 166.2ZM632.795 158.028C615.458 162.869 623.383 187.31 640.105 184.487C647.7 183.205 650.275 174.405 647.763 167.891C646.685 165.094 644.583 162.735 642.07 161.125C640.216 159.937 634.913 157.438 632.795 158.028Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M551.913 209.053C567.168 208.529 582.424 208.005 597.696 207.864C605.972 207.787 614.203 207.932 622.467 208.406C626.132 208.616 629.795 208.819 633.463 208.974C634.095 209.001 634.969 208.958 635.935 208.911C638.205 208.799 640.977 208.663 642.281 209.352C649.576 213.212 634.713 213.635 632.906 213.604C628.86 213.536 624.818 213.337 620.776 213.137C617.244 212.962 613.711 212.787 610.175 212.701C587.491 212.143 564.668 213.163 541.945 214.177C536.737 214.41 531.533 214.642 526.337 214.855C520.821 215.082 515.306 215.228 509.792 215.375C501.908 215.584 494.026 215.793 486.143 216.236C483.134 216.405 480.124 216.584 477.115 216.764L477.115 216.764L477.114 216.764C472.803 217.02 468.492 217.277 464.179 217.504C460.802 217.682 457.425 217.855 454.044 217.94C453.435 217.955 452.642 218.04 451.776 218.132C449.68 218.356 447.158 218.625 445.795 218.068C444.156 217.398 442.83 216.46 443.732 214.474C444.494 212.795 447.263 212.996 449.283 213.143L449.283 213.143L449.283 213.143C449.834 213.183 450.33 213.219 450.713 213.212C457.166 213.087 463.606 212.724 470.048 212.33C472.404 212.186 474.76 212.037 477.115 211.889L477.116 211.889L477.116 211.889L477.116 211.889L477.116 211.889C489.38 211.118 501.633 210.347 513.928 210.138C526.595 209.921 539.253 209.487 551.913 209.053ZM631.589 309.457L633.667 309.431L635.975 309.403C638.24 309.601 639.253 311.978 637.799 313.805C636.686 315.205 632.401 315.268 629.608 315.309H629.607C628.834 315.321 628.174 315.33 627.729 315.366C620.437 315.952 613.16 316.216 605.847 316.286C590.445 316.432 575.103 317.092 559.727 317.97C543.988 318.867 528.235 319.204 512.481 319.542H512.481H512.481C500.891 319.79 489.301 320.038 477.715 320.509C471.081 320.779 464.445 320.981 457.808 321.155C457.094 321.174 456.146 321.276 455.072 321.392C450.88 321.845 444.787 322.503 443.407 319.173C442.182 316.218 443.884 314.858 446.375 314.239C445.981 312.489 446.054 310.03 446.096 308.621C446.108 308.198 446.118 307.869 446.111 307.683C446.049 305.917 446.005 304.151 445.961 302.384C445.912 300.382 445.863 298.381 445.785 296.38C445.716 294.564 445.65 292.746 445.585 290.927C445.328 283.755 445.071 276.565 444.519 269.42C444.264 266.123 443.86 262.865 443.457 259.611C442.812 254.417 442.17 249.237 442.14 243.934C442.135 242.98 442.087 241.787 442.033 240.442C441.758 233.557 441.322 222.673 445.596 219.359C453.131 214.962 451.641 227.653 450.976 233.317C450.867 234.252 450.779 234.996 450.759 235.439C450.326 244.858 450.913 253.861 451.861 263.22C452.501 269.54 452.127 275.839 451.753 282.149C451.619 284.402 451.486 286.657 451.398 288.915C451.355 290.032 451.316 291.148 451.278 292.264C451.159 295.699 451.04 299.131 450.782 302.563C450.754 302.934 450.744 303.646 450.732 304.556C450.699 307.121 450.644 311.26 450.095 313.772C451.265 313.722 452.399 313.734 453.336 313.744C453.934 313.751 454.451 313.757 454.847 313.745C456.637 313.691 458.427 313.638 460.217 313.586H460.217L460.241 313.585C465.555 313.429 470.869 313.274 476.182 313.074C488.724 312.602 501.268 312.445 513.813 312.287C528.629 312.101 543.446 311.915 558.256 311.211C582.664 310.051 607.155 309.754 631.588 309.457H631.589H631.589ZM636.116 217.382C636.104 233.516 637.351 249.206 638.809 265.275C639.71 275.214 640.433 285.191 641.008 295.156C641.035 295.617 641.031 296.387 641.026 297.352C640.997 302.861 640.934 314.734 646.379 311.894C650.491 309.749 648.911 297.315 648.036 290.434C647.844 288.925 647.687 287.683 647.63 286.876C647.511 285.16 647.393 283.445 647.276 281.731L647.275 281.714L647.275 281.713C646.727 273.725 646.18 265.744 645.46 257.766L645.308 256.084L645.307 256.083C644.473 246.868 643.64 237.66 643.492 228.402C643.48 227.636 643.554 226.569 643.637 225.365C643.878 221.879 644.198 217.238 642.75 215.387C640.713 212.782 636.121 213.553 636.116 217.382Z", "fill", "#7E69AC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M552.61 256.933C572.096 248.117 591.809 239.198 612.071 232.848C613.536 232.39 614.462 233.9 614.129 235.167C613.787 236.473 610.617 237.587 608.515 238.326C607.886 238.547 607.353 238.734 607.019 238.883C604.189 240.147 601.351 241.396 598.514 242.644C595.608 243.923 592.702 245.201 589.804 246.496C583.778 249.189 577.746 251.87 571.714 254.55C565.254 257.421 558.794 260.292 552.341 263.177C552.097 263.287 551.852 263.396 551.608 263.505C560.382 266.624 569.106 269.881 577.792 273.237C580.76 274.384 583.718 275.554 586.677 276.725C588.35 277.387 590.024 278.049 591.7 278.707C592.245 278.921 593.195 279.211 594.337 279.56C598.056 280.696 603.811 282.453 604.236 284.228C604.928 287.119 596.984 284.322 593.986 283.267C593.589 283.127 593.278 283.018 593.087 282.956C588.663 281.543 584.293 279.967 579.925 278.393L579.321 278.175C575.859 276.928 572.402 275.668 568.946 274.407C562.194 271.945 555.442 269.483 548.653 267.121C547.693 266.787 546.732 266.454 545.771 266.122C534.877 271.015 524.004 275.956 513.166 280.975C507.355 283.666 501.575 286.42 495.811 289.211C494.553 289.82 492.995 290.762 491.303 291.785C487.247 294.236 482.418 297.154 479.097 297.082C477.316 297.042 476.116 296.661 475.93 294.502C475.738 292.274 478.596 291.106 480.651 290.266C481.143 290.065 481.589 289.882 481.936 289.709C488.097 286.628 494.295 283.625 500.512 280.659C512.858 274.77 525.32 269.117 537.827 263.575C537.899 263.544 537.971 263.512 538.043 263.48C531.107 261.132 524.151 258.841 517.181 256.598C516.485 256.374 515.058 255.979 513.182 255.459C504.321 253.005 485.444 247.777 486.284 244.723C487.247 241.23 504.945 247.615 512.78 250.441C514.249 250.971 515.371 251.376 515.971 251.567C525.339 254.553 534.68 257.622 543.973 260.831C546.848 259.54 549.727 258.237 552.61 256.933Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M469.118 333.659C474.822 334.659 478.846 340.13 478.22 345.86C477.374 353.602 469.658 357.151 462.529 356.141C454.441 354.994 452.74 348.157 456.658 341.578C457.526 340.122 458.524 338.38 460.101 337.613C461.185 337.086 462.566 337.552 463.44 337.127C466.501 335.637 464.66 333.263 469.118 333.659ZM466.521 328.601C459.561 329.491 446.701 337.544 447.352 345.603C447.917 346.537 448.766 346.919 449.9 346.749C449.627 348.495 449.716 350.222 450.167 351.93C450.828 354.148 452.147 355.966 453.915 357.41C457.554 360.385 462.53 361.115 467.062 360.593C475.525 359.62 482.195 353.836 482.67 345.034C483.134 336.443 475.634 327.45 466.521 328.601Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M500.232 339.087C497.109 340.742 492.169 343.284 490.337 346.428C488.403 349.748 490.406 353.38 494.482 351.809C497.718 350.563 499.776 346.601 503.228 345.331C506.274 344.211 507.502 344.782 510.721 345.898C514.038 347.047 516.938 348.158 520.524 347.876C525.031 347.522 528.935 344.908 533.347 344.314C537.061 343.813 540.124 345.258 543.682 345.833C547.809 346.5 550.508 344.938 554.369 344.125C556.996 343.571 561.625 345.823 563.541 344.981C567.849 343.087 563.292 340.771 560.907 340.006C556.89 338.717 554.418 339.854 550.597 340.923C546.448 342.083 544.657 341.211 540.691 340.146C532.668 337.99 526.47 343.202 518.866 342.255C511.825 341.377 507.612 335.179 500.232 339.087Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M631.42 335.235C639.142 342.475 630.467 352.776 621.952 346.99C618.955 344.953 618.907 341.682 621.24 338.756C623.373 336.079 628.059 335.035 631.42 335.235ZM628.557 329.385C621.342 330.788 614.536 334.099 613.883 342.426C613.246 350.55 621.579 354.323 628.58 353.79C644.297 352.593 643.161 326.561 628.557 329.385Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M271.053 391.042C260.011 391.166 248.975 391.573 237.955 392.271C227.476 392.934 216.105 392.43 205.796 394.462C202.869 395.038 198.915 397.706 202.807 400.641C205.543 402.704 215.552 400.331 218.819 400.13C230.85 399.39 242.887 398.505 254.935 398.079C266.341 397.676 277.746 397.534 289.157 397.42C290.899 397.403 293.791 396.844 295.526 397.35C298.019 398.077 297.428 398.275 297.614 401.439C297.953 407.172 297.859 412.926 297.745 418.664C297.635 424.217 297.43 429.77 297.45 435.325C297.464 439.289 296.197 447.166 298.186 450.608C301.049 455.562 304.019 450.181 304.232 446.888C304.642 440.591 304.459 434.216 304.46 427.911C304.462 421.993 304.504 416.074 304.296 410.159C304.144 405.885 304.755 398.426 302.453 394.541C300.109 390.585 294.464 391.438 290.345 391.25C283.92 390.954 277.483 390.975 271.053 391.042Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M200.8 398.183C200.812 409.304 199.526 420.35 199.165 431.457C199 436.564 198.665 442.172 199.956 447.185C201.261 452.247 205.403 453.344 205.88 447.693C206.846 436.249 206.609 424.384 207.361 412.849C207.627 408.776 209.355 401.313 207.742 397.499C206.321 394.14 200.794 393.496 200.8 398.183Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M304.341 447.2C285.165 449.738 265.119 448.813 245.807 449.212C236.541 449.403 227.278 449.415 218.011 449.512C214.777 449.546 206.564 448.316 203.766 450.134C199.312 453.028 204.145 455.261 207.093 455.325C225.38 455.726 243.871 454.885 262.155 454.285C270.369 454.015 278.611 453.883 286.804 453.185C291.847 452.755 297.359 452.339 302.257 450.984C303.3 450.694 305.573 450.754 305.806 449.331C305.951 448.451 305.689 447.014 304.341 447.2Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M224.603 463.364C219.273 463.395 203.213 460.92 201.006 466.117C198.064 473.048 209.543 471.43 212.63 471.351C219.641 471.171 226.648 471.151 233.661 471.154C240.542 471.157 247.423 471.113 254.303 470.949C256.297 470.901 260.936 471.729 262.083 469.328C262.954 467.504 262.266 466.065 260.659 465.1C256.791 462.775 246.744 464.123 242.217 463.914C236.354 463.644 230.472 463.364 224.603 463.364Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M289.439 464.647C286.393 464.829 280.232 463.573 277.504 464.967C274.403 466.551 275.496 469.032 278.173 470.122C280.027 470.877 287.633 470.481 289.439 469.607C291.322 468.694 293.45 464.401 289.439 464.647Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M322.83 399.274C319.577 400.167 320.564 418.635 320.48 421.562C320.25 429.583 319.349 439.672 322.014 447.397C323.714 452.321 326.978 451.654 326.422 446.469C325.934 441.918 325.096 437.42 324.733 432.84C323.912 422.476 322.796 411.422 323.571 401.049C323.901 401.652 326.987 407.242 327.713 406.825C327.493 406.955 324.154 398.925 322.83 399.274Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M359.422 392.473C352.839 392.57 346.256 392.687 339.675 392.869C334.442 393.015 326.219 392.155 321.42 394.356C315.706 396.977 318.417 402.816 323.784 402.94C328.532 403.049 333.595 401.979 338.386 401.814C351.327 401.371 364.291 401.277 377.237 401.166C388.946 401.065 401.153 402.314 412.759 400.556C414.481 415.842 409.825 431.193 411.408 446.655C411.654 449.055 411.544 452.446 414.6 452.993C418.457 453.683 418.615 449.863 418.762 447.127C419.179 439.316 418.953 431.5 419.525 423.678C420.055 416.431 421.098 409.023 420.217 401.764C419.133 392.831 414.852 393.547 407.285 393.176C391.304 392.392 375.421 392.238 359.422 392.473Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M337.359 446.753C334.005 446.837 328.433 445.804 326.284 449.02C324.048 452.367 326.701 455.286 329.953 455.973C333.802 456.786 338.821 455.671 342.816 455.659C346.976 455.647 351.137 455.693 355.297 455.71C373.134 455.78 391.046 456.05 408.87 455.312C411.359 455.209 418.423 456.044 420.146 453.656C421.675 451.539 420.605 449.639 418.592 448.56C415.289 446.79 408.504 447.464 404.83 447.323C400.292 447.15 395.749 447.094 391.209 447.023C373.29 446.747 355.277 446.31 337.359 446.753Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M352.447 462.224C345.772 462.338 338.651 462.045 332.042 463.057C326.231 463.947 325.516 469.564 331.771 470.221C337.519 470.826 344.488 469.697 350.264 469.326C352.316 469.194 354.702 469.381 355.685 467.113C356.711 464.744 354.749 462.472 352.447 462.224Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M402.908 462.814C399.346 462.903 388.94 461.371 387.175 465.44C384.237 472.214 398.325 469.641 401.027 469.541C404.433 469.416 417.708 471.405 417.711 465.982C417.714 460.665 406.171 462.733 402.908 462.814Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M200.224 496.477C200.233 508.801 199.466 521.241 200.59 533.534C201.055 538.618 200.975 548.357 203.92 552.668C206.01 555.727 208.91 555.513 210.052 551.839C210.815 549.383 209.594 544.471 209.458 541.844C209.327 539.323 209.173 536.802 209.057 534.28C208.757 527.783 208.781 521.295 208.87 514.794C208.947 509.218 210.289 501.84 209.023 496.477C207.843 491.479 200.224 490.311 200.224 496.477Z", "fill", "#7E69AC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M324.081 485.636C302.699 486.172 281.27 485.693 259.907 486.751C249.372 487.273 238.878 488.419 228.395 489.562C223.245 490.123 218.098 490.702 212.957 491.336C211.405 491.527 198.514 492.027 203.363 496.929C205.48 499.07 212.217 496.834 214.883 496.518C220.045 495.909 225.217 495.377 230.386 494.831C240.222 493.79 250.07 492.805 259.948 492.258C283.212 490.969 306.572 491.356 329.859 490.497C336.158 490.265 342.439 490.098 348.741 490.346C350.395 490.411 362.555 491.029 357.276 486.538C354.779 484.413 345.367 485.51 342.247 485.446C336.192 485.321 330.133 485.484 324.081 485.636Z", "fill", "#7E69AC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M353.229 506.399C353.123 500.705 353.017 495.01 352.758 489.322C352.485 483.33 360.646 482.422 363.067 487.272C364.809 490.764 364.503 496.704 364.24 501.796C364.134 503.848 364.036 505.762 364.081 507.322C364.185 510.899 364.448 514.596 364.715 518.343C365.385 527.772 366.078 537.512 364.316 546.412C363.459 550.738 359.81 553.011 357.382 550.654C357.378 550.659 357.375 550.664 357.372 550.669C356.458 552.015 353.615 552.012 351.521 552.01C350.944 552.009 350.424 552.008 350.017 552.036C344.28 552.426 338.649 553.084 332.963 553.936C321.633 555.634 310.402 556.678 298.949 556.962C291.179 557.154 283.397 557.218 275.613 557.283C260.709 557.407 245.796 557.531 230.939 558.55C225.93 558.894 220.997 559.484 216.069 560.427C215.65 560.507 215.184 560.611 214.688 560.721C211.025 561.536 205.721 562.715 205.359 557.595C204.928 551.519 218.098 550.723 224.876 550.313C225.91 550.251 226.796 550.197 227.462 550.135C248.041 548.221 268.942 548.518 289.608 548.811C290.61 548.825 291.61 548.839 292.611 548.853C294.223 548.875 295.835 548.902 297.447 548.928C306.296 549.074 315.134 549.22 323.979 548.679C328.005 548.432 332.082 548.306 336.168 548.179C342.686 547.977 349.223 547.774 355.598 547.084C354.636 543.356 354.468 538.957 354.31 534.811C354.248 533.197 354.188 531.621 354.083 530.138C353.523 522.236 353.376 514.317 353.229 506.399Z", "fill", "#7E69AC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M370.534 493.71C367.645 494.103 365.236 496.575 366.525 499.711C368.15 503.659 372.988 502.116 376.183 501.866C386.341 501.071 396.947 502.66 406.983 501.461C409.723 501.133 413.7 499.64 411.239 495.958C409.389 493.19 402.65 493.676 399.785 493.411C389.988 492.504 380.319 492.746 370.534 493.71Z", "fill", "#CCC1E2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M387.678 510.935C383.738 511.2 374.568 510.991 372.908 515.474C369.93 523.515 381.594 520.681 385.145 520.224C389.271 519.693 398.996 521.115 401.193 517.115C405.121 509.961 391.133 510.696 387.678 510.935Z", "fill", "#CCC1E2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M377.548 528.582C375.679 530.451 375.676 533.79 377.548 535.66C379.839 537.949 384.832 537.473 387.843 537.641C392.043 537.875 404.105 540.096 406.19 535.151C409.004 528.479 398.081 528.619 394.489 528.24C390.336 527.803 380.989 525.138 377.548 528.582Z", "fill", "#CCC1E2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M230.327 414.368C230.327 421.542 241.531 421.542 241.531 414.368C241.531 407.234 230.327 407.125 230.327 414.368Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M251.578 414.45C251.578 422.651 264.34 422.634 264.34 414.45C264.34 406.277 251.578 406.194 251.578 414.45Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M238.722 425.354C232.519 427.066 238.234 432.323 241.114 433.524C245.692 435.434 251.939 436.841 256.518 433.979C258.34 432.84 259.819 431.326 258.484 429.116C257.062 426.763 255.114 427.809 252.948 428.027C250.204 428.303 247.987 428.26 245.337 427.38C243.36 426.724 240.879 424.76 238.722 425.354Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M351.243 414.822C351.243 419.674 358.777 419.674 358.777 414.822C358.777 409.97 351.243 409.97 351.243 414.822Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M367.905 415.553C367.905 420.944 376.274 420.944 376.274 415.553C376.274 410.161 367.905 410.162 367.905 415.553Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M367.285 427.252C362.888 427.819 350.172 429.108 349.461 434.527C348.363 442.888 362.296 436.121 365.476 435.465C369.526 434.629 373.143 434.847 377.187 435.009C379.407 435.098 382.36 435.458 382.127 432.076C381.745 426.523 371.128 426.759 367.285 427.252Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M256.744 504.356C253.557 505.206 249.388 510.715 251.581 514.086C255.176 519.616 256.761 511.126 258.266 510.309C261.003 508.822 263.226 514.256 266.087 511.405C270.601 506.908 259.586 503.594 256.744 504.356Z", "fill", "#7E69AC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M293.258 500.268C289.479 500.303 281.501 505.653 280.935 509.604C280.6 511.951 282.156 514.206 284.687 514.238C288.132 514.28 289.227 509.8 292.214 508.863C295.436 507.852 294.958 510.179 297.74 511.386C299.777 512.269 302.324 511.899 303.031 509.396C304.365 504.673 297.141 500.194 293.258 500.268Z", "fill", "#7E69AC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M264.33 522.888C258.285 526.43 268.231 534.023 271.679 534.972C276.884 536.405 287.361 533.731 288.595 527.372C289.086 524.842 287.503 522.549 284.71 523.002C282.41 523.376 280.935 526.26 278.805 527.293C275.93 528.687 273.374 528.592 270.932 526.494C268.941 524.784 267.875 520.82 264.33 522.888Z", "fill", "#7E69AC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M268.711 575.226C263.311 576.378 257.821 575.605 252.394 576.688C246.861 577.793 243.553 579.883 238.412 577.777C238.171 577.675 237.929 577.573 237.688 577.471C233.709 575.757 229.538 575.249 225.373 577.981C222.909 579.597 215.426 585.188 216.328 588.6C218.282 595.996 226.702 584.398 228.849 583.268C232.943 581.113 235.75 583.866 239.964 584.643C245.013 585.574 249.076 582.906 253.831 581.844C259.393 580.601 265.651 580.168 271.31 579.503C273.545 579.241 282.013 581.009 282.778 578.226C284.091 573.447 270.834 574.776 268.711 575.226Z", "fill", "#CCC1E2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M307.674 590.122C308.027 590.389 307.744 590.175 307.674 590.122V590.122ZM322.8 574.937C327.423 574.468 342.215 571.165 345.252 575.943C347.23 579.055 344.091 590.54 341.096 592.025C338.703 593.211 333.127 591.9 330.501 591.807C325.614 591.635 320.716 591.558 315.835 591.253C314.198 591.151 308.93 591.452 307.646 590.003C306.131 588.292 306.198 579.171 305.841 576.909C310.092 578.285 318.355 575.389 322.8 574.937ZM332.672 570.253C326.751 570.51 320.831 570.955 314.954 571.749C311.678 572.192 308.359 573.369 305.333 573.926C304.358 574.106 302.775 573.608 301.579 574.185C298.084 575.873 301.144 587.289 301.987 590.339C303.281 595.024 306.539 595.783 311.104 596.224C317.116 596.806 323.252 596.623 329.283 596.549C335.097 596.478 342.936 597.767 346.198 591.933C348.307 588.162 350.568 579.378 348.766 575.175C346.395 569.644 337.542 570.049 332.672 570.253Z", "fill", "#CCC1E2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M398.98 593.259C398.663 593.666 398.663 593.666 398.98 593.259V593.259ZM400.277 591.695C400.179 591.844 399.725 592.324 400.277 591.695V591.695ZM386.156 591.266C388.766 590.774 391.377 590.289 393.991 589.812C391.516 593.276 388.91 591.844 384.683 591.542C385.174 591.45 385.665 591.358 386.156 591.266ZM373.703 590.04C374.365 589.818 375.026 589.597 375.688 589.376C375.668 589.879 375.776 590.351 376.013 590.79C374.88 590.668 373.748 590.537 372.618 590.397C372.98 590.278 373.342 590.159 373.703 590.04ZM367.933 585.779C367.896 584.87 369.262 585.494 370.046 585.433C368.536 586.762 367.831 586.878 367.933 585.779ZM388.57 575.471C388.769 575.217 389.032 575.23 389.359 575.509C389.002 575.629 387.626 576.213 388.57 575.471ZM401.954 573.897C401.99 573.897 402.732 574.899 401.954 573.897V573.897ZM401.578 573.568C401.773 573.717 401.773 573.717 401.578 573.568V573.568ZM399.908 573.373C402.644 573.835 402.437 577.046 399.908 573.373V573.373ZM367.758 573.154C367.202 573.616 367.393 573.168 367.758 573.154V573.154ZM378.223 566.317C373.577 566.588 365.05 566.315 361.17 568.79C356.106 572.022 358.771 583.144 359.224 588.019C359.894 595.226 363.284 597.278 370.072 598.035C378.172 598.938 386.494 599.106 394.636 598.892C401.968 598.699 406.144 596.177 407.487 588.457C407.898 586.095 408.942 582.441 408.91 580.178C408.887 578.609 408.105 577.893 407.809 576.559C406.125 568.961 403.309 568.06 395.522 567.728C389.79 567.484 383.847 566.023 378.223 566.317Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M894.934 49.0677C906.745 49.3194 920.147 55.8566 918.279 69.7056C916.911 79.8509 908.127 88.0867 897.954 88.7968C887.02 89.5598 875.46 81.1683 873.974 70.0357C872.303 57.5139 883.383 48.8179 894.934 49.0677ZM889.141 43.4303C884.353 44.1452 879.777 46.6597 875.561 48.9121C873.951 49.7724 865.791 55.0165 872.191 56.3193C856.771 81.1884 893.061 104.288 913.465 88.125C922.627 80.8668 927.451 67.106 921.528 56.3345C915.403 45.1939 900.876 41.6679 889.141 43.4303Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M886.319 64.5982C886.319 69.2429 893.528 69.2429 893.528 64.5982C893.528 59.9535 886.319 59.9535 886.319 64.5982Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M899.686 65.3421C899.686 70.3776 907.502 70.3776 907.502 65.3421C907.502 60.3065 899.686 60.3065 899.686 65.3421Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M890.665 75.3007C889.613 79.1211 901.607 81.0805 902.006 76.6589C902.196 74.5463 891.397 72.6355 890.665 75.3007Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M925.824 72.9396C939.625 71.2835 953.854 72.0489 967.721 72.4459C971.192 72.5462 974.662 72.6435 978.133 72.7013C980.34 72.7384 985.106 73.7974 987.031 72.7645C994.918 68.535 979.447 66.4899 977.257 66.2954C963.463 65.1603 942.176 64.7555 928.341 65.2911C924.249 65.4497 923.365 73.2344 925.824 72.9396Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M987.926 141.545C988.044 127.086 988.562 112.528 989.674 98.111C990.127 92.2346 990.67 86.3661 991.12 80.4897C991.332 77.7218 992.316 73.8449 990.689 71.4162C989.012 68.9139 985.334 68.3935 983.118 70.6113C980.465 74.0455 981.236 79.8095 980.906 83.9635C980.399 90.3512 979.786 96.734 979.482 103.135C978.893 115.525 978.755 128.13 979.751 140.502C980.221 146.34 981.24 152.037 982.596 157.731C983.214 160.322 988.126 171.868 987.093 173.46C985.493 175.929 973.663 174.996 971.098 175.064C964.513 175.241 957.926 175.356 951.34 175.482C945.701 175.59 940.063 175.667 934.423 175.717C932.184 175.737 919.027 175.338 921.946 178.658C889.31 180.932 856.051 177.136 823.614 175.833C821.976 175.767 819.295 175.302 816.82 175.168C816.524 173.973 816.28 172.905 816.22 172.163C815.794 166.95 815.682 161.719 815.22 156.507C814.375 146.971 812.735 137.532 811.759 128.013C810.786 118.503 810.884 108.965 810.317 99.4326C810.22 97.7991 809.99 84.4195 806.614 81.1688C808.214 81.7755 810.796 81.8546 812.282 81.7348C824.315 80.7639 836.26 78.6732 848.189 76.8786C851.602 76.3655 859.347 76.729 862.178 75.0231C864.628 73.5458 865.598 68.368 861.336 68.7868C849.44 70.0611 837.609 72.0387 825.807 73.986C822.651 74.5064 819.502 75.0632 816.354 75.6323C814.251 76.0122 808.702 75.9831 807.071 77.2506C805.091 78.7893 804.881 79.8362 805.552 80.5323C804.619 80.2757 803.5 80.6788 802.157 82.023C799.618 85.3284 802.005 93.4687 802.308 97.3443C802.672 101.993 802.85 106.65 803.062 111.308C803.471 120.32 804.415 129.208 805.865 138.112C807.49 148.087 808.872 158.103 810.501 168.075C810.925 170.672 811.478 173.204 812.184 175.712C807.795 177.958 810.779 181.527 814.26 182.161C814.285 182.165 814.311 182.169 814.336 182.173C815.421 184.819 816.938 187.271 818.123 183.725C818.214 183.453 818.256 183.118 818.267 182.742C827.258 183.76 837.14 183.127 845.991 183.489C865.164 184.273 884.455 185.449 903.647 184.853C911.245 184.617 918.866 183.942 926.401 182.928C930.815 182.334 935.246 181.626 939.589 180.641C939.9 180.571 940.374 180.497 940.92 180.407C941.009 180.405 941.1 180.402 941.184 180.401C947.835 180.301 954.48 180.122 961.126 179.846C966.704 179.614 972.307 179.495 977.867 178.969C981.321 178.642 988.62 178.703 990.74 175.23C992.668 172.071 989.445 163.937 988.987 160.389C988.182 154.143 987.874 147.839 987.926 141.545Z", "fill", "#CCC1E2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M920.524 99.7929C915.209 100.248 910.295 102.744 904.931 102.775C900.43 102.8 895.998 101.455 891.471 101.654C886.162 101.885 883.24 105.319 878.589 106.468C874.886 107.382 872.554 104.548 869.297 103.294C865.185 101.71 862.147 102.528 858.622 104.923C856.033 106.683 849.993 110.632 850.04 114.191C850.178 124.973 862.757 110.079 865.293 109.899C868.662 109.659 872.426 113.5 876.011 113.718C880.751 114.008 883.789 110.953 888.154 109.84C892.567 108.714 897.338 110.093 901.762 110.521C906.81 111.009 911.228 109.884 916.112 108.679C920.845 107.511 924.878 107.573 929.687 108.554C932.933 109.216 941.019 113.064 942.439 108.116C944.372 101.378 924.239 99.4768 920.524 99.7929Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M922.141 120.356C911.252 121.413 900.296 122.34 889.357 122.637C884.619 122.765 866.405 120.735 868.02 126.755C869.405 131.917 894.191 128.667 899.239 128.274C904.813 127.841 910.377 127.236 915.923 126.534C917.888 126.285 922.635 126.543 924.022 124.894C925.344 123.322 924.692 120.101 922.141 120.356Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M847.019 147.774C846.771 147.879 846.771 147.879 847.019 147.774V147.774ZM849.316 147.743C852.031 147.657 851.449 146.226 854.157 146.972C855.406 147.316 855.535 146.805 856.503 147.999C858.392 150.328 856.613 155.4 854.75 157.277C847.855 164.226 839.579 148.052 849.316 147.743ZM849.316 140.925C830.438 141.559 838.337 170.721 854.767 164.768C861.553 162.309 865.818 151.234 861.827 145.01C859.886 141.982 857.41 141.444 854.157 141.234C853.402 141.185 852.452 142.283 851.981 142.233C850.861 142.114 850.965 140.863 849.316 140.925Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M894.46 148.773C894.124 148.669 900.421 150.5 899.732 149.784C901.202 151.313 899.226 154.929 897.562 155.56C893.535 157.089 891.274 150.826 894.46 148.773ZM897.255 140.866C891.344 141.704 886.782 144.165 885.974 150.738C885.229 156.805 889.328 162.949 895.795 163.068C909.889 163.326 910.318 139.043 897.255 140.866Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M961.597 149.039C962.423 159.813 951.251 149.951 961.597 149.039V149.039ZM956.803 137.512C955.826 139.183 956.659 140.955 958.133 141.926C944.955 144.711 947.94 164.541 961.35 161.612C968.169 160.122 969.423 152.951 968.407 147.03C967.923 144.215 960.907 130.495 956.803 137.512Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1142.93 136.068C1154.75 136.319 1168.15 142.857 1166.28 156.706C1164.91 166.851 1156.13 175.087 1145.95 175.797C1135.02 176.56 1123.46 168.168 1121.97 157.036C1120.3 144.514 1131.38 135.818 1142.93 136.068ZM1137.14 130.43C1132.35 131.145 1127.78 133.66 1123.56 135.912C1121.95 136.772 1113.79 142.016 1120.19 143.319C1104.77 168.188 1141.06 191.288 1161.46 175.125C1170.63 167.867 1175.45 154.106 1169.53 143.334C1163.4 132.194 1148.88 128.668 1137.14 130.43Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1134.32 151.598C1134.32 156.243 1141.53 156.243 1141.53 151.598C1141.53 146.954 1134.32 146.954 1134.32 151.598Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1147.69 152.342C1147.69 157.378 1155.5 157.378 1155.5 152.342C1155.5 147.306 1147.69 147.306 1147.69 152.342Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1138.67 162.301C1137.61 166.121 1149.61 168.08 1150.01 163.659C1150.2 161.546 1139.4 159.636 1138.67 162.301Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1173.82 159.94C1187.62 158.284 1201.85 159.049 1215.72 159.446C1219.19 159.546 1222.66 159.644 1226.13 159.701C1228.34 159.738 1233.11 160.797 1235.03 159.764C1242.92 155.535 1227.45 153.49 1225.26 153.295C1211.46 152.16 1190.18 151.755 1176.34 152.291C1172.25 152.45 1171.36 160.234 1173.82 159.94Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1235.93 228.545C1236.04 214.086 1236.56 199.528 1237.67 185.111C1238.13 179.235 1238.67 173.366 1239.12 167.49C1239.33 164.722 1240.32 160.845 1238.69 158.416C1237.01 155.914 1233.33 155.394 1231.12 157.611C1228.47 161.046 1229.24 166.809 1228.91 170.964C1228.4 177.351 1227.79 183.734 1227.48 190.135C1226.89 202.525 1226.75 215.13 1227.75 227.502C1228.22 233.34 1229.24 239.037 1230.6 244.731C1231.21 247.322 1236.13 258.868 1235.09 260.46C1233.49 262.929 1221.66 261.996 1219.1 262.064C1212.51 262.241 1205.93 262.356 1199.34 262.482C1193.7 262.59 1188.06 262.667 1182.42 262.717C1180.18 262.737 1167.03 262.338 1169.95 265.658C1137.31 267.932 1104.05 264.136 1071.61 262.833C1069.98 262.767 1067.29 262.302 1064.82 262.168C1064.52 260.973 1064.28 259.905 1064.22 259.163C1063.79 253.95 1063.68 248.719 1063.22 243.507C1062.37 233.971 1060.73 224.532 1059.76 215.013C1058.79 205.503 1058.88 195.965 1058.32 186.433C1058.22 184.799 1057.99 171.419 1054.61 168.169C1056.21 168.776 1058.8 168.855 1060.28 168.735C1072.32 167.764 1084.26 165.673 1096.19 163.879C1099.6 163.365 1107.35 163.729 1110.18 162.023C1112.63 160.546 1113.6 155.368 1109.34 155.787C1097.44 157.061 1085.61 159.039 1073.81 160.986C1070.65 161.506 1067.5 162.063 1064.35 162.632C1062.25 163.012 1056.7 162.983 1055.07 164.251C1053.09 165.789 1052.88 166.836 1053.55 167.532C1052.62 167.276 1051.5 167.679 1050.16 169.023C1047.62 172.328 1050.01 180.469 1050.31 184.344C1050.67 188.993 1050.85 193.65 1051.06 198.308C1051.47 207.32 1052.41 216.208 1053.86 225.112C1055.49 235.087 1056.87 245.103 1058.5 255.075C1058.93 257.672 1059.48 260.204 1060.18 262.712C1055.79 264.958 1058.78 268.527 1062.26 269.161C1062.28 269.165 1062.31 269.169 1062.34 269.173C1063.42 271.819 1064.94 274.271 1066.12 270.725C1066.21 270.453 1066.26 270.118 1066.27 269.742C1075.26 270.76 1085.14 270.127 1093.99 270.489C1113.16 271.273 1132.46 272.449 1151.65 271.853C1159.25 271.617 1166.87 270.942 1174.4 269.928C1178.81 269.334 1183.25 268.626 1187.59 267.641C1187.9 267.571 1188.37 267.497 1188.92 267.407C1189.01 267.405 1189.1 267.402 1189.18 267.401C1195.84 267.301 1202.48 267.122 1209.13 266.846C1214.7 266.614 1220.31 266.495 1225.87 265.969C1229.32 265.642 1236.62 265.703 1238.74 262.23C1240.67 259.071 1237.45 250.937 1236.99 247.389C1236.18 241.143 1235.87 234.839 1235.93 228.545Z", "fill", "#CCC1E2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1168.52 186.793C1163.21 187.248 1158.3 189.744 1152.93 189.775C1148.43 189.8 1144 188.455 1139.47 188.654C1134.16 188.885 1131.24 192.319 1126.59 193.468C1122.89 194.382 1120.55 191.548 1117.3 190.294C1113.18 188.71 1110.15 189.528 1106.62 191.923C1104.03 193.683 1097.99 197.632 1098.04 201.191C1098.18 211.973 1110.76 197.079 1113.29 196.899C1116.66 196.659 1120.43 200.5 1124.01 200.718C1128.75 201.008 1131.79 197.953 1136.15 196.84C1140.57 195.714 1145.34 197.093 1149.76 197.521C1154.81 198.009 1159.23 196.884 1164.11 195.679C1168.84 194.511 1172.88 194.573 1177.69 195.554C1180.93 196.216 1189.02 200.064 1190.44 195.116C1192.37 188.378 1172.24 186.477 1168.52 186.793Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1170.14 207.356C1159.25 208.413 1148.3 209.34 1137.36 209.637C1132.62 209.765 1114.41 207.735 1116.02 213.755C1117.4 218.917 1142.19 215.667 1147.24 215.274C1152.81 214.841 1158.38 214.236 1163.92 213.534C1165.89 213.285 1170.63 213.543 1172.02 211.894C1173.34 210.322 1172.69 207.101 1170.14 207.356Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1095.02 234.774C1094.77 234.879 1094.77 234.879 1095.02 234.774V234.774ZM1097.32 234.743C1100.03 234.657 1099.45 233.226 1102.16 233.972C1103.41 234.316 1103.53 233.805 1104.5 234.999C1106.39 237.328 1104.61 242.4 1102.75 244.277C1095.85 251.226 1087.58 235.052 1097.32 234.743ZM1097.32 227.925C1078.44 228.559 1086.34 257.721 1102.77 251.768C1109.55 249.309 1113.82 238.234 1109.83 232.01C1107.89 228.982 1105.41 228.444 1102.16 228.234C1101.4 228.185 1100.45 229.283 1099.98 229.233C1098.86 229.114 1098.97 227.863 1097.32 227.925Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1142.46 235.773C1142.12 235.669 1148.42 237.5 1147.73 236.784C1149.2 238.313 1147.23 241.929 1145.56 242.56C1141.53 244.089 1139.27 237.826 1142.46 235.773ZM1145.26 227.866C1139.34 228.704 1134.78 231.165 1133.97 237.738C1133.23 243.805 1137.33 249.949 1143.79 250.068C1157.89 250.326 1158.32 226.043 1145.26 227.866Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1209.6 236.039C1210.42 246.813 1199.25 236.951 1209.6 236.039V236.039ZM1204.8 224.512C1203.83 226.183 1204.66 227.955 1206.13 228.926C1192.96 231.711 1195.94 251.541 1209.35 248.612C1216.17 247.122 1217.42 239.951 1216.41 234.03C1215.92 231.215 1208.91 217.495 1204.8 224.512Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M703.912 429.138C703.909 436.58 703.532 444.177 704.904 451.53C705.319 453.756 705.647 458.02 707.995 459.176C710.354 460.336 712.641 459.032 713.227 456.614C713.911 453.801 712.411 449.59 712.26 446.637C712.051 442.602 712.037 438.562 712.035 434.522C712.034 431.605 712.994 426.911 709.55 425.41C706.989 424.294 703.912 426.369 703.912 429.138Z", "fill", "#CCC1E2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M821.57 417.367C796.912 419.842 771.899 420.356 747.152 421.647C735.713 422.243 721.888 421.482 711.111 425.91C709.11 426.733 701.942 431.309 707.761 433.173C709.575 433.754 711.417 431.8 712.907 431.145C715.387 430.056 718.258 429.719 720.904 429.294C743.39 425.683 766.911 426.312 789.629 424.624C795.45 424.192 801.274 423.747 807.083 423.175C811.233 422.767 819.956 419.776 823.786 421.306C830.331 423.92 830.178 440.906 830.307 446.748C830.374 449.77 827.442 460.615 833.271 459.515C837.937 458.635 836.247 447.368 835.884 444.287C834.93 436.208 833.302 416.178 821.57 417.367Z", "fill", "#CCC1E2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M830.664 459.124C809.246 461.057 787.334 459.16 765.828 459.92C754.555 460.32 743.294 460.955 732.019 461.327C727.143 461.489 722.262 461.495 717.384 461.53C715.051 461.546 704.432 462.96 711.001 467.586C713.91 469.635 723.179 467.985 726.516 467.945C731.528 467.886 736.539 467.678 741.547 467.481C753.15 467.028 764.746 466.399 776.355 466.085C787.46 465.784 798.57 465.72 809.674 465.419C815.199 465.269 820.8 465.1 826.276 464.293C827.512 464.111 831.525 463.966 832.383 462.588C833.194 461.285 832.625 458.935 830.664 459.124Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M725.398 443.043C725.283 443.316 725.283 443.316 725.398 443.043V443.043ZM734.674 440.224C735.012 440.367 735.012 440.367 734.674 440.224V440.224ZM734.239 440.146C739.238 445.24 731.551 451.322 726.869 446.35C721.899 441.073 731.021 440.163 734.239 440.146ZM728.938 432.438C711.721 435.501 717.817 458.447 733.897 455.131C740.956 453.675 744.994 446.563 742.564 439.732C741.614 437.063 739.546 434.134 736.664 433.292C735.227 432.873 733.956 433.533 732.587 433.379C731.282 433.232 730.558 432.146 728.938 432.438Z", "fill", "#CCC1E2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M794.828 438.896C784.446 438.929 774.062 439.37 763.682 439.567C760.497 439.627 752.314 438.202 752.301 443.221C752.287 448.585 761.403 446.604 764.437 446.532C774.733 446.286 785.056 445.834 795.312 444.854C797.902 444.606 806.87 445.034 806.861 441.511C806.851 437.778 796.92 438.896 794.828 438.896Z", "fill", "#CCC1E2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M819.625 473.903C793.947 474.592 768.309 474.832 742.653 476.146C733.057 476.637 723.473 477.003 713.863 477.003C712.012 477.003 708.285 476.286 706.543 477.452C701.815 480.613 707.198 483.327 710.28 483.498C731.356 484.668 752.738 481.756 773.803 481.099C786.134 480.715 798.469 480.601 810.794 479.974C814.156 479.802 817.519 479.604 820.875 479.343C822.806 479.194 827.911 479.604 829.471 478.475C836.283 473.544 821.921 473.841 819.625 473.903Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M701.815 486.458C701.573 493.115 701.548 499.656 702.419 506.276C702.762 508.882 702.919 511.838 705.973 512.5C708.746 513.101 710.152 511.003 710.727 508.677C712.129 502.998 710.895 494.825 710.879 488.925C710.871 486.008 710.868 482.743 707.264 482.084C704.514 481.58 701.92 483.568 701.815 486.458Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M846.841 502.507C805.276 504.697 763.766 506.609 722.172 508.368C718.928 508.505 693.729 508.23 702.538 517.018C705.26 519.732 712.27 517.894 715.789 517.722C721.077 517.462 726.368 517.263 731.656 516.994C752.623 515.927 773.645 515.639 794.596 514.441C806.125 513.782 817.629 512.751 829.098 511.408C834.554 510.769 841.326 510.835 846.435 508.697C849.064 507.597 851.9 502.238 846.841 502.507Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M822.942 468.736C819.781 471.884 821.406 478.095 821.645 481.986C821.972 487.341 822.371 492.699 823.039 498.024C823.474 501.483 823.244 506.867 825.09 509.855C827.25 513.354 832.009 512.967 833.963 509.586C835.691 506.597 834.816 500.306 834.771 496.993C834.71 492.411 834.424 487.822 834.152 483.25C833.925 479.428 834.791 473.303 832.689 470.033C830.553 466.709 825.904 465.79 822.942 468.736Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M727.938 493.167C727.568 493.452 727.568 493.452 727.938 493.167V493.167ZM735.321 492.242C742.209 493.627 731.07 501.67 727.55 496.15C727.001 495.287 726.715 494.227 727.597 493.478C728.403 492.793 728.909 494.005 729.67 493.679C730.981 493.118 733.922 492.189 735.321 492.242ZM734.371 485.639C729.668 486.011 723.201 486.301 720.874 491.016C717.746 497.348 723.095 503.55 729.282 504.513C735.236 505.441 744.126 502.142 744.603 495.198C744.987 489.599 739.661 485.209 734.371 485.639Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M773.635 488.987C768.766 489.066 759.197 487.626 754.955 489.999C750.758 492.348 752.629 496.529 756.458 497.529C758.989 498.19 763.125 497.124 765.761 497.016C769.227 496.875 772.696 496.845 776.164 496.797C781.997 496.718 787.827 496.785 793.661 496.785C799.619 496.785 805.678 496.947 811.626 496.51C819.151 495.956 818.949 490.321 811.589 489.616C799.087 488.42 786.178 488.79 773.635 488.987Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M761.198 552.097C761.198 554.774 763.574 552.097 763.557 552.097C763.574 552.097 761.198 549.42 761.198 552.097Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M707.465 530.546C707.618 538.328 707.719 546.117 708.052 553.893C708.157 556.352 707.453 561.153 710.433 562.407C713.75 563.802 714.782 560.324 715.164 557.967C716.374 550.501 715.188 541.976 715.071 534.421C715.032 531.885 715.581 528.354 712.7 527.089C710.35 526.057 707.418 527.973 707.465 530.546Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M835.44 530.668C835.637 531.131 835.637 531.131 835.44 530.668V530.668ZM835.717 530.588C835.877 530.655 836.521 530.925 835.717 530.588V530.588ZM772.851 524.299C760.904 524.486 748.95 524.628 737.011 525.139C731.916 525.358 726.762 525.534 721.684 526.015C718.087 526.355 709.153 526.496 706.82 529.435C702.006 535.502 712.214 533.848 714.413 533.355C718.414 532.458 722.499 532.17 726.587 531.955C735.457 531.487 744.33 531.237 753.211 531.058C777.295 530.574 801.396 530.647 825.484 530.538C827.817 530.528 832.031 529.59 834.186 530.534C836.343 531.479 836.221 533.804 836.446 536.503C836.744 540.094 834.375 546.938 836.18 549.958C838.98 554.644 843.051 550.665 843.673 547.249C844.533 542.529 843.17 536.861 841.836 532.35C839.954 525.984 837.34 525.731 831.183 525.233C823.99 524.652 816.822 524.3 809.604 524.233C797.356 524.121 785.099 524.108 772.851 524.299Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M820.102 556.467C794.191 559.476 767.541 557.703 741.491 557.81C735.156 557.836 728.816 557.886 722.487 558.194C719.144 558.355 711.221 557.434 708.931 560.012C704.104 565.448 712.799 566.239 715.974 566.014C722.392 565.558 728.826 565.349 735.261 565.3C757.926 565.125 780.72 566.182 803.367 565.064C812.855 564.596 822.131 562.973 831.443 561.159C833.506 560.757 847.629 558.072 839.576 554.854C834.816 552.952 825.102 555.884 820.102 556.467Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M744.446 546.517C744.266 546.749 744.266 546.749 744.446 546.517V546.517ZM744.273 546.476C744.211 546.643 744.021 547.054 744.273 546.476V546.476ZM742.638 544.368C742.676 544.417 742.83 544.614 742.638 544.368V544.368ZM742.576 544.352C743.199 545.097 743.62 545.928 743.836 546.845C738.467 548.299 736.398 543.956 742.576 544.352ZM742.236 544.149C742.238 544.15 742.993 544.468 742.236 544.149V544.149ZM733.417 537.678C729.942 542.005 727.074 547.048 731.406 551.99C735.279 556.409 743.072 556.98 747.988 554.029C753.052 550.989 752.614 544.59 749.082 540.413C746.808 537.723 744.964 537.798 741.664 537.359C739.417 537.06 735.323 535.313 733.417 537.678Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M769.335 545.687C769.335 551.448 794.213 548.968 798.639 548.962C802.347 548.957 824.765 551.002 823.156 545.073C821.834 540.201 799.752 542.622 795.049 542.615C790.984 542.61 769.335 539.819 769.335 545.687Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1627.88 42.1044C1627.89 42.6809 1627.9 43.2232 1627.91 43.7217C1628.18 54.6063 1628.02 66.049 1627.14 76.9081C1626.83 80.6574 1624.11 85.4096 1621 80.2412C1619.63 77.9687 1619.82 73.3019 1619.96 69.8689C1620 68.9485 1620.03 68.1169 1620.03 67.4438C1620.03 63.6133 1620.23 59.7437 1620.43 55.8637C1620.83 48.2782 1621.22 40.653 1620.1 33.203C1620.08 33.0522 1620.06 32.9072 1620.04 32.7676C1619.55 29.4915 1619.51 29.2651 1615.91 29.3396C1614.41 29.3708 1612.91 29.4114 1611.41 29.452C1609.93 29.4919 1608.45 29.5319 1606.97 29.5629C1605.51 29.5937 1604.04 29.6219 1602.57 29.6501C1597.97 29.7386 1593.37 29.8271 1588.77 29.9954C1588.01 30.0238 1586.57 30.2034 1584.77 30.43C1581.15 30.8831 1576.04 31.5243 1571.74 31.5206C1571.74 31.5391 1571.74 31.5576 1571.74 31.5762C1571.75 31.6094 1571.75 31.6427 1571.75 31.6766C1571.8 34.0515 1571.19 36.7026 1570.57 39.366C1570.06 41.5965 1569.54 43.8356 1569.41 45.9282C1569.09 50.9078 1569.09 55.9399 1569.09 60.972C1569.08 67.0994 1569.08 73.2269 1568.51 79.2596C1568.48 79.5537 1568.47 79.8646 1568.45 80.1791C1568.45 80.2209 1568.44 80.2628 1568.44 80.3046C1568.64 80.275 1568.83 80.2541 1569.01 80.2426C1572.11 80.0459 1575.23 80.0284 1578.36 80.0109C1580.08 80.0013 1581.8 79.9917 1583.51 79.952C1586.59 79.8807 1589.7 79.884 1592.83 79.8874C1599.74 79.8948 1606.7 79.9023 1613.45 79.1069C1615.45 78.8484 1616.14 81.4068 1615.25 82.733C1614.45 83.9202 1612.24 84.1125 1610.63 84.2534C1610.22 84.2892 1609.85 84.3216 1609.54 84.3662C1605.19 85.0112 1600.78 85.2362 1596.38 85.431C1591.77 85.6354 1587.15 85.7883 1582.53 85.9169C1581.43 85.9473 1579.96 86.0956 1578.34 86.26C1574.04 86.694 1568.63 87.2406 1565.95 86.0261C1563.07 84.7213 1563.13 83.2724 1564.31 82.1499C1563.79 81.0148 1563.71 79.356 1563.65 78.0587C1563.63 77.5633 1563.6 77.1207 1563.56 76.7801C1562.92 71.6141 1562.54 66.5143 1562.53 61.3041C1562.51 51.0984 1562.53 40.499 1565.35 30.6203C1564.22 30.1253 1563.54 29.3954 1563.54 28.3434C1563.56 23.0434 1580.05 23.3131 1587.89 23.4413C1589.29 23.4642 1590.42 23.4826 1591.12 23.4639C1596.84 23.3146 1602.55 23.2952 1608.26 23.3261C1609.47 23.3325 1610.81 23.2536 1612.21 23.1717C1615.17 22.9977 1618.35 22.8108 1620.9 23.405C1627.62 24.9647 1627.78 35.6648 1627.88 42.1044Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1669.9 24.5666C1676.14 24.2366 1682.38 24.1608 1688.63 24.1377C1695.24 24.1043 1701.86 24.2233 1708.47 24.4265L1708.62 24.4311C1711.55 24.5191 1727.83 25.008 1720.35 29.0646C1719.92 29.3013 1719.43 29.4991 1718.89 29.6633C1719.21 31.5416 1719.25 33.4809 1719.19 34.4151C1719 37.9582 1718.87 41.5051 1718.75 45.0519C1718.66 47.4557 1718.57 49.8595 1718.47 52.262C1718.17 58.9004 1717.89 65.5382 1717.66 72.1795C1717.64 72.9948 1717.68 74.0609 1717.73 75.2492C1717.89 79.1782 1718.1 84.4426 1715.97 86.3888C1714.09 88.0975 1712.81 87.7551 1711.95 86.5945C1706.59 88.1506 1695.59 87.6447 1690.05 87.3903C1688.72 87.329 1687.71 87.2823 1687.16 87.2825C1686.19 87.2829 1684.39 87.4039 1682.11 87.5568C1672.64 88.1933 1654.95 89.3813 1654.92 84.7102C1654.91 84.2607 1655.06 83.8579 1655.33 83.4971C1654.58 82.7311 1653.91 81.6064 1653.47 80.2032C1651.92 75.1653 1651.77 69.7288 1651.65 64.5046C1651.49 57.1277 1651.49 49.7423 1651.49 42.3584C1651.49 38.5662 1651.49 34.7743 1651.46 30.9842C1650.45 29.624 1651.05 28.0684 1652.32 26.9831C1655.01 24.6737 1661.69 24.6458 1666.52 24.6256C1667.82 24.6201 1668.98 24.6153 1669.9 24.5666ZM1659.75 81.4482C1665.76 80.1645 1675.89 80.5777 1681.32 80.7991C1682.74 80.857 1683.84 80.9019 1684.46 80.8996C1690 80.8777 1695.55 80.9548 1701.09 81.1762C1701.66 81.1992 1702.51 81.1777 1703.51 81.1525C1705.52 81.1018 1708.14 81.0357 1710.37 81.2825C1710.34 80.9806 1710.32 80.7046 1710.31 80.4663C1710.06 75.536 1710.24 70.5632 1710.42 65.618C1710.46 64.5668 1710.5 63.5169 1710.53 62.4689C1710.65 58.7716 1710.81 55.0761 1710.96 51.3805L1710.96 51.3799C1711.06 49.0529 1711.16 46.7258 1711.25 44.3982C1711.29 43.377 1711.23 41.9899 1711.17 40.4293C1711.03 37.2545 1710.87 33.3617 1711.44 30.3719C1709.39 30.3329 1707.28 30.1876 1705.36 30.0543C1703.5 29.9258 1701.8 29.8086 1700.47 29.8084C1698.78 29.8083 1697.09 29.8031 1695.4 29.7979H1695.4H1695.4C1690.72 29.7835 1686.03 29.7691 1681.35 29.8618C1680.91 29.8706 1680.46 29.8792 1680.02 29.8878C1673.57 30.0122 1667.07 30.1376 1660.67 30.9872C1660.3 31.0371 1659.84 31.1332 1659.35 31.2498C1660.05 34.18 1659.7 38.3098 1659.4 41.9266L1659.4 41.9267C1659.26 43.6834 1659.12 45.3191 1659.12 46.6377C1659.11 54.8373 1659.33 63.0046 1659.54 71.1638L1659.54 71.1642C1659.62 74.2505 1659.71 77.3357 1659.78 80.421C1659.78 80.7893 1659.78 81.1314 1659.75 81.4482Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1591.33 85.6797C1587.23 88.0743 1589.44 97.6533 1590.86 100.966C1593.19 106.414 1597.93 110.676 1603.04 113.504C1613.37 119.219 1628.26 117.701 1636.08 127.61C1636.16 127.712 1638.86 130.386 1639.47 126.923C1639.98 124.082 1634.94 119.742 1632.98 118.318C1627.43 114.267 1620.3 112.961 1613.87 110.938C1607.02 108.78 1599.5 104.802 1596.63 97.7364C1595.61 95.2338 1597.55 82.0269 1591.33 85.6797Z", "fill", "#CCC1E2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1685.03 90.2849C1681.28 91.3205 1683.76 96.4895 1683.76 99.0776C1683.75 102.306 1682.72 105.686 1680.73 108.262C1675.68 114.797 1665.8 115.776 1658.39 117.65C1653.01 119.011 1640.14 121.93 1639.64 129.204C1639.08 137.329 1650.44 127.442 1651.4 127.037C1662.02 123.141 1675.76 122.389 1683.95 113.814C1687.34 110.275 1689.34 105.55 1689.65 100.674C1689.83 97.9292 1689.86 88.9654 1685.03 90.2849Z", "fill", "#CCC1E2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1607.42 162.346C1607.33 147.314 1621.71 138.222 1634.72 134.801C1650.36 130.683 1664.92 141.638 1666.76 157.397C1668.71 174.028 1656.17 187.417 1639.64 188.151C1625.1 188.797 1607.51 178.385 1607.42 162.346ZM1642.34 142.029C1643.19 143.179 1643.95 145.013 1642.25 146.012C1640.61 146.967 1639.79 145.819 1638.97 144.664C1638.44 143.934 1637.92 143.2 1637.19 142.994C1635.29 142.458 1632.23 144.458 1630.65 145.623C1630.01 146.096 1629.09 147.115 1628.02 148.305C1624.62 152.095 1619.65 157.629 1616.91 152.867C1605.96 171.78 1633.26 185.933 1648.79 178.776C1665.84 170.916 1662.52 142.179 1642.34 142.029Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1628.03 157.314C1628.03 160.764 1633.48 160.764 1633.48 157.314C1633.48 153.903 1628.03 153.757 1628.03 157.314Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1637.62 156.666C1637.62 160.892 1644.29 160.892 1644.29 156.666C1644.29 152.488 1637.62 152.31 1637.62 156.666Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1630.76 166.514C1625.3 169.726 1640.91 176.108 1641.53 169.586C1641.79 166.773 1639.07 167.532 1637.25 167.325C1635.52 167.126 1632.41 165.554 1630.76 166.514Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1628.39 189.301C1628.63 197.505 1628.51 205.703 1630.07 213.793C1630.36 215.329 1630.57 220.902 1631.78 222.043C1634.77 224.851 1634.82 219.47 1634.94 217.408C1635.35 210.021 1634.57 202.405 1634.4 195.003C1634.37 193.41 1634.79 190.11 1634.04 188.568C1632.84 186.12 1628.27 185.393 1628.39 189.301Z", "fill", "#CCC1E2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1622.55 182.649C1610.58 196.085 1594.09 195.095 1577.49 196.272C1568.71 196.894 1559.84 198.17 1552.78 203.846C1549.5 206.486 1546.66 209.793 1544.76 213.562C1543.93 215.21 1539.98 224.716 1545.91 222.461C1548.01 221.661 1550.08 215.374 1551.44 213.514C1554.03 209.973 1557.34 207.049 1561.31 205.148C1568.97 201.482 1578.13 201.545 1586.44 201.079C1595.12 200.593 1604.45 200.139 1612.43 196.362C1616.19 194.585 1619.71 192.368 1622.73 189.513C1623.81 188.492 1626.13 186.758 1626.3 185.197C1626.5 183.413 1624.78 180.146 1622.55 182.649Z", "fill", "#CCC1E2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1562.12 223.888C1550.87 224.264 1539.64 224.719 1528.41 225.43C1526.11 225.575 1518.44 225.11 1520.39 229.826C1521.96 233.605 1531.32 231.105 1534.41 230.922C1546.11 230.227 1557.86 229.986 1569.54 228.933C1572.16 228.697 1584.02 228.791 1579.12 224.143C1576.79 221.93 1565.33 223.778 1562.12 223.888Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1513.25 229.312C1509.71 233.967 1511.34 245.281 1511.61 250.877C1511.86 256.3 1510.81 266.216 1517.89 267.057C1515.64 266.762 1519.6 267.193 1520.24 267.228C1521.68 267.305 1523.12 267.33 1524.56 267.345C1527.89 267.382 1531.21 267.337 1534.54 267.271C1542.07 267.12 1549.62 266.901 1557.14 266.485C1560.3 266.31 1577.45 266.456 1578.13 263.172C1578.99 258.976 1562.55 261.349 1559.61 261.484C1552.44 261.812 1545.26 261.882 1538.08 261.976C1534.53 262.022 1530.97 262.057 1527.41 261.988C1525.94 261.959 1520.13 262.562 1519.24 261.582C1518.47 260.748 1519.07 253.081 1519.05 251.908C1519 248.085 1519 244.252 1519.14 240.431C1519.23 237.858 1520.62 232.963 1519.49 230.546C1518.39 228.196 1515.17 227.394 1513.25 229.312Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1571.15 229.529C1571.36 238.045 1571.42 246.733 1573.43 255.062C1574.1 257.834 1575.04 263.549 1577.83 264.984C1580.75 266.491 1583.27 264.341 1583.46 261.445C1583.7 257.804 1581.75 253.025 1581.35 249.289C1580.89 244.931 1580.62 240.568 1580.46 236.188C1580.34 232.895 1581.34 227.956 1578.2 225.832C1575.38 223.924 1571.06 225.846 1571.15 229.529Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1593.53 227.45C1590.03 230.933 1591.6 241.963 1592.04 246.439C1592.36 249.717 1595.94 265.845 1601.32 257.435C1603.7 253.715 1600.68 243.878 1600.7 239.54C1600.71 236.777 1601.69 233.284 1601.22 230.63C1600.59 227.122 1596.7 224.282 1593.53 227.45Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1617.75 224.574C1628.25 223.491 1638.77 222.678 1649.33 222.577C1649.84 222.573 1650.37 222.566 1650.92 222.559C1658.16 222.467 1669.04 222.329 1673.91 227.765C1676.57 230.727 1677.77 235.305 1678.82 239.295C1679.01 240.04 1679.2 240.764 1679.4 241.453C1679.56 242.042 1679.78 242.713 1680.01 243.439C1681.1 246.865 1682.58 251.501 1681.08 254.371C1680.26 255.945 1678.93 257.287 1676.92 256.729C1676.45 256.599 1676.08 256.433 1675.8 256.236C1676.57 257.07 1676.91 258.257 1676.41 259.42C1675.44 261.666 1672.38 261.714 1669.98 261.751C1669.39 261.761 1668.85 261.769 1668.38 261.808C1660.36 262.477 1652.3 262.923 1644.25 262.993C1640.42 263.027 1636.59 262.995 1632.76 262.964C1628.81 262.932 1624.87 262.9 1620.92 262.938C1618.06 262.966 1615.14 263.239 1612.23 263.511C1608.54 263.855 1604.86 264.199 1601.28 264.052C1598.6 263.941 1595.74 263.064 1596.42 259.601C1596.97 256.775 1599.63 256.528 1602.02 256.307C1602.22 256.287 1602.43 256.268 1602.63 256.248C1610.22 255.475 1617.82 255.201 1625.45 255.229C1641.48 255.284 1657.5 255.201 1673.53 255.118C1674.19 255.172 1674.81 255.424 1675.32 255.807C1674.74 255.107 1674.76 254.174 1674.77 253.181C1674.77 252.731 1674.78 252.27 1674.73 251.811C1674.63 250.89 1674.54 249.973 1674.45 249.057C1674.16 246.031 1673.86 243.026 1673.28 239.982C1673.2 239.523 1673.11 239.017 1673.02 238.482C1672.5 235.321 1671.8 231.134 1669.29 229.428C1666.76 227.712 1661.81 227.794 1657.95 227.859C1656.91 227.876 1655.94 227.892 1655.13 227.871C1644.83 227.605 1634.46 228.337 1624.21 229.269C1623.42 229.341 1622.63 229.41 1621.84 229.478C1617.94 229.818 1614.01 230.16 1610.17 230.858C1609.46 230.986 1608.39 231.361 1607.16 231.792C1603.88 232.936 1599.48 234.471 1597.98 232.781C1593.03 227.179 1614.79 224.879 1617.75 224.574Z", "fill", "#9E89CC"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1729.5 211.821C1729.96 212.408 1729.96 212.408 1729.5 211.821V211.821ZM1658.42 177.119C1652.04 180.869 1663.85 191.872 1666.85 193.574C1673.62 197.403 1682.92 197.981 1690.48 199.058C1700.05 200.422 1710.46 200.923 1719.65 204.058C1723.57 205.394 1726.06 207.478 1728.62 210.681C1729.92 212.304 1733.05 219.3 1735.9 217.644C1741.64 214.309 1726.18 200.313 1722.77 198.808C1715.03 195.387 1705.87 194.429 1697.59 193.101C1689.89 191.866 1682.03 190.947 1674.52 188.769C1670.39 187.571 1667.46 185.64 1665.08 181.943C1663.59 179.638 1662.38 174.804 1658.42 177.119Z", "fill", "#CCC1E2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1756.22 220.103C1748.86 220.266 1741.52 220.832 1734.18 221.397C1730.07 221.715 1725.95 222.032 1721.83 222.278C1720.54 222.355 1719.25 222.425 1717.96 222.494L1717.96 222.494C1714.33 222.69 1710.7 222.885 1707.09 223.25C1706.54 223.305 1705.9 223.358 1705.21 223.414C1702.14 223.666 1697.96 224.01 1695.29 225.129C1692.84 223.276 1689.06 224.851 1689 228.154C1688.9 234.17 1688.96 240.079 1689.69 246.059C1689.86 247.447 1690.74 254.474 1692.64 258.132C1691.97 261.587 1694.91 262.555 1697.65 262.82C1708.27 263.844 1719.4 263.049 1730.38 262.264C1735.97 261.865 1741.51 261.469 1746.93 261.316C1748.74 261.265 1750.56 261.245 1752.4 261.224C1758.39 261.157 1764.5 261.088 1770.3 259.955C1770.53 259.91 1770.78 259.865 1771.05 259.818C1773.34 259.407 1776.5 258.839 1776.74 256.315C1776.89 254.8 1776.03 253.413 1774.6 253.219C1774.7 251.956 1774.54 250.579 1774.43 249.566C1774.4 249.331 1774.37 249.115 1774.35 248.925C1774.01 245.414 1773.13 241.927 1772.27 238.483L1772.27 238.483L1772.27 238.482C1772.07 237.708 1771.88 236.937 1771.69 236.168C1771.49 235.316 1771.3 234.303 1771.09 233.21L1771.09 233.21C1770.36 229.354 1769.44 224.507 1767.01 222.257C1764.45 219.897 1760.29 220.002 1756.95 220.085C1756.7 220.091 1756.46 220.098 1756.22 220.103ZM1769.16 253.595C1768.29 251.313 1768.04 248.225 1767.79 245.291C1767.64 243.449 1767.49 241.667 1767.2 240.183C1766.98 239.068 1766.8 237.893 1766.62 236.699C1766.18 233.799 1765.72 230.785 1764.63 228.244C1763.17 224.84 1761.87 224.97 1758.8 225.278C1758.23 225.335 1757.6 225.399 1756.89 225.447C1753.77 225.659 1750.64 225.93 1747.52 226.2L1747.51 226.2C1746.02 226.33 1744.52 226.46 1743.02 226.583C1736.6 227.111 1730.18 227.516 1723.76 227.922C1720.01 228.159 1716.25 228.395 1712.5 228.657C1709.56 228.862 1706.69 229.421 1703.82 229.979L1703.82 229.979C1701.56 230.42 1699.3 230.86 1697.02 231.121C1696.98 231.901 1696.92 232.684 1696.86 233.43L1696.86 233.43C1696.77 234.445 1696.69 235.391 1696.71 236.166C1696.78 239.602 1697.09 243.018 1697.39 246.437C1697.44 246.964 1697.48 247.49 1697.53 248.016C1697.59 248.647 1697.72 249.457 1697.87 250.356C1698.1 251.746 1698.37 253.348 1698.43 254.823C1698.71 254.821 1698.99 254.822 1699.26 254.823C1699.61 254.824 1699.95 254.826 1700.28 254.82C1708.37 254.678 1716.45 254.433 1724.53 254.123C1725.56 254.083 1726.59 254.043 1727.62 254.003C1734.83 253.722 1742.04 253.442 1749.26 253.359C1752.12 253.326 1755.03 253.416 1757.94 253.506C1761.69 253.622 1765.45 253.739 1769.16 253.595Z", "fill", "#9E89CC"], ["cx", "1186", "cy", "1106", "rx", "791", "ry", "29", "fill", "black", "fill-opacity", "0.1"], ["d", "M476 265C476 253.954 484.954 245 496 245H1872C1883.05 245 1892 253.954 1892 265V291H476V265Z", "fill", "#AACCF2"], ["d", "M476 301H1892V1106H476V301Z", "fill", "#E1E8F0"], ["d", "M476 301.797H1892V389.804H476V301.797Z", "fill", "#2DA6F7"], ["x", "527.228", "y", "325.441", "width", "194.404", "height", "42.0334", "fill", "white"], ["x", "762.353", "y", "325.441", "width", "806.516", "height", "42.0334", "fill", "black", "fill-opacity", "0.2"], ["x", "1712.04", "y", "325.441", "width", "39.4063", "height", "39.4063", "fill", "white"], ["d", "M1661.83 329.381C1662.84 327.63 1665.36 327.63 1666.38 329.381L1686.28 363.862C1687.29 365.613 1686.03 367.802 1684.01 367.802H1644.19C1642.17 367.802 1640.91 365.613 1641.92 363.862L1661.83 329.381Z", "fill", "white"], ["cx", "1680.52", "cy", "364.847", "r", "11.8219", "fill", "#FF0500"], ["cx", "1797.43", "cy", "346.457", "r", "21.0167", "fill", "white"], ["cx", "1814.5", "cy", "364.847", "r", "11.8219", "fill", "#FF0500"], ["cx", "603.414", "cy", "502.769", "r", "76.1855", "fill", "#ACCCF3"], ["x", "548.245", "y", "588.149", "width", "110.338", "height", "28.898", "fill", "#4E92E5"], ["x", "499.644", "y", "623.615", "width", "207.54", "height", "14.449", "fill", "#ACCCF3"], ["x", "548.245", "y", "718.19", "width", "158.939", "height", "14.449", "fill", "#4E92E5"], ["cx", "511.466", "cy", "724.758", "r", "11.8219", "fill", "#4E92E5"], ["x", "548.245", "y", "756.283", "width", "98.5158", "height", "14.449", "fill", "#4E92E5"], ["cx", "511.466", "cy", "762.851", "r", "11.8219", "fill", "#4E92E5"], ["x", "548.245", "y", "795.689", "width", "68.3043", "height", "14.449", "fill", "#4E92E5"], ["cx", "511.466", "cy", "802.257", "r", "11.8219", "fill", "#4E92E5"], ["x", "548.245", "y", "836.409", "width", "136.609", "height", "14.449", "fill", "#4E92E5"], ["cx", "511.466", "cy", "842.977", "r", "11.8219", "fill", "#4E92E5"], ["x", "548.245", "y", "875.815", "width", "158.939", "height", "14.449", "fill", "#4E92E5"], ["cx", "511.466", "cy", "882.383", "r", "11.8219", "fill", "#4E92E5"], ["x", "548.245", "y", "913.908", "width", "118.219", "height", "14.449", "fill", "#4E92E5"], ["cx", "511.466", "cy", "920.476", "r", "11.8219", "fill", "#4E92E5"], ["x", "740.022", "y", "408.194", "width", "820.965", "height", "659.399", "fill", "white"], ["x", "762", "y", "427", "width", "630", "height", "224", "fill", "#E2EFFF"], ["x", "762.352", "y", "426.584", "width", "772.364", "height", "224.616", "stroke", "#A1C4EE", "stroke-width", "5"], ["x", "1385", "y", "429", "width", "97", "height", "47", "fill", "#E2EFFF"], ["x", "799.131", "y", "444.973", "width", "189.15", "height", "185.21", "fill", "#D0D4F9"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M977.773 455.482H809.639V619.674H977.773V455.482ZM799.131 444.973V630.183H988.281V444.973H799.131Z", "fill", "#6F6FC7"], ["d", "M877.944 513.934L820.805 611.793H969.892L933.113 543.489L913.41 578.298L877.944 513.934Z", "fill", "#6F6FC7"], ["cx", "939.68", "cy", "494.888", "r", "17.0761", "fill", "#6F6FC7"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1042.14 452.69V444.973H1050.07V449.973H1047.14V452.69H1042.14ZM1058.01 444.973V449.973H1073.88V444.973H1058.01ZM1081.82 444.973V449.973H1097.69V444.973H1081.82ZM1105.62 444.973V449.973H1121.5V444.973H1105.62ZM1129.43 444.973V449.973H1145.3V444.973H1129.43ZM1153.24 444.973V449.973H1169.11V444.973H1153.24ZM1177.05 444.973V449.973H1192.92V444.973H1177.05ZM1200.86 444.973V449.973H1216.73V444.973H1200.86ZM1224.66 444.973V449.973H1227.6V452.69H1232.6V444.973H1224.66ZM1232.6 475.841V460.407H1227.6V475.841H1232.6ZM1232.6 483.559H1227.6V498.993H1232.6V483.559ZM1232.6 506.71H1227.6V522.144H1232.6V506.71ZM1232.6 529.861H1227.6V545.295H1232.6V529.861ZM1232.6 553.012H1227.6V568.446H1232.6V553.012ZM1232.6 576.163H1227.6V591.598H1232.6V576.163ZM1232.6 599.315H1227.6V614.749H1232.6V599.315ZM1232.6 622.466H1227.6V625.183H1224.66V630.183H1232.6V622.466ZM1216.73 630.183V625.183H1200.86V630.183H1216.73ZM1192.92 630.183V625.183H1177.05V630.183H1192.92ZM1169.11 630.183V625.183H1153.24V630.183H1169.11ZM1145.3 630.183V625.183H1129.43V630.183H1145.3ZM1121.5 630.183V625.183H1105.62V630.183H1121.5ZM1097.69 630.183V625.183H1081.82V630.183H1097.69ZM1073.88 630.183V625.183H1058.01V630.183H1073.88ZM1050.07 630.183V625.183H1047.14V622.466H1042.14V630.183H1050.07ZM1042.14 614.749H1047.14V599.315H1042.14V614.749ZM1042.14 591.598H1047.14V576.163H1042.14V591.598ZM1042.14 568.446H1047.14V553.012H1042.14V568.446ZM1042.14 545.295H1047.14V529.861H1042.14V545.295ZM1042.14 522.144H1047.14V506.71H1042.14V522.144ZM1042.14 498.993H1047.14V483.559H1042.14V498.993ZM1042.14 475.841H1047.14V460.407H1042.14V475.841Z", "fill", "#6F6FC7"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1286.46 452.69V444.973H1294.39V449.973H1291.46V452.69H1286.46ZM1302.33 444.973V449.973H1318.2V444.973H1302.33ZM1326.14 444.973V449.973H1342.01V444.973H1326.14ZM1349.94 444.973V449.973H1365.82V444.973H1349.94ZM1373.75 444.973V449.973H1389.62V444.973H1373.75ZM1397.56 444.973V449.973H1413.43V444.973H1397.56ZM1421.37 444.973V449.973H1437.24V444.973H1421.37ZM1445.18 444.973V449.973H1461.05V444.973H1445.18ZM1468.98 444.973V449.973H1471.92V452.69H1476.92V444.973H1468.98ZM1476.92 475.841V460.407H1471.92V475.841H1476.92ZM1476.92 483.559H1471.92V498.993H1476.92V483.559ZM1476.92 506.71H1471.92V522.144H1476.92V506.71ZM1476.92 529.861H1471.92V545.295H1476.92V529.861ZM1476.92 553.012H1471.92V568.446H1476.92V553.012ZM1476.92 576.163H1471.92V591.598H1476.92V576.163ZM1476.92 599.315H1471.92V614.749H1476.92V599.315ZM1476.92 622.466H1471.92V625.183H1468.98V630.183H1476.92V622.466ZM1461.05 630.183V625.183H1445.18V630.183H1461.05ZM1437.24 630.183V625.183H1421.37V630.183H1437.24ZM1413.43 630.183V625.183H1397.56V630.183H1413.43ZM1389.62 630.183V625.183H1373.75V630.183H1389.62ZM1365.82 630.183V625.183H1349.94V630.183H1365.82ZM1342.01 630.183V625.183H1326.14V630.183H1342.01ZM1318.2 630.183V625.183H1302.33V630.183H1318.2ZM1294.39 630.183V625.183H1291.46V622.466H1286.46V630.183H1294.39ZM1286.46 614.749H1291.46V599.315H1286.46V614.749ZM1286.46 591.598H1291.46V576.163H1286.46V591.598ZM1286.46 568.446H1291.46V553.012H1286.46V568.446ZM1286.46 545.295H1291.46V529.861H1286.46V545.295ZM1286.46 522.144H1291.46V506.71H1286.46V522.144ZM1286.46 498.993H1291.46V483.559H1286.46V498.993ZM1286.46 475.841H1291.46V460.407H1286.46V475.841Z", "fill", "#6F6FC7"], ["x", "762.352", "y", "670.903", "width", "105.083", "height", "13.1354", "fill", "#ACCCF3"], ["x", "904.215", "y", "670.903", "width", "84.0668", "height", "13.1354", "fill", "#ACCCF3"], ["x", "1036.88", "y", "670.903", "width", "126.1", "height", "13.1354", "fill", "#ACCCF3"], ["x", "1232.6", "y", "670.903", "width", "89.321", "height", "13.1354", "fill", "#ACCCF3"], ["x", "862.182", "y", "783.867", "width", "210.167", "height", "13.1354", "fill", "#ACCCF3"], ["x", "862.182", "y", "824.587", "width", "483.384", "height", "13.1354", "fill", "#ACCCF3"], ["x", "862.182", "y", "850.858", "width", "483.384", "height", "13.1354", "fill", "#ACCCF3"], ["x", "862.182", "y", "875.815", "width", "483.384", "height", "13.1354", "fill", "#ACCCF3"], ["x", "862.182", "y", "902.086", "width", "483.384", "height", "13.1354", "fill", "#ACCCF3"], ["x", "862.182", "y", "751.029", "width", "132.668", "height", "27.5844", "fill", "#4E92E5"], ["cx", "805.699", "cy", "774.672", "r", "45.974", "fill", "#ACCCF3"], ["x", "862.182", "y", "974.331", "width", "210.167", "height", "13.1354", "fill", "#ACCCF3"], ["x", "862.182", "y", "1015.05", "width", "483.384", "height", "13.1354", "fill", "#ACCCF3"], ["x", "862.182", "y", "1041.32", "width", "483.384", "height", "13.1354", "fill", "#ACCCF3"], ["x", "862.182", "y", "941.493", "width", "132.668", "height", "27.5844", "fill", "#4E92E5"], ["cx", "805.699", "cy", "965.136", "r", "45.974", "fill", "#ACCCF3"], ["x", "1579.38", "y", "408.194", "width", "279.785", "height", "659.399", "fill", "white"], ["x", "1608.27", "y", "437.092", "width", "72.2449", "height", "17.0761", "fill", "#ACCCF3"], ["x", "1802.68", "y", "437.092", "width", "35.4657", "height", "17.0761", "fill", "#ACCCF3"], ["cx", "1638.49", "cy", "544.802", "r", "30.2115", "fill", "#ACCCF3"], ["x", "1687.09", "y", "519.845", "width", "74.872", "height", "18.3896", "fill", "#4E92E5"], ["x", "1687.09", "y", "556.624", "width", "151.058", "height", "11.8219", "fill", "#ACCCF3"], ["cx", "1638.49", "cy", "640.691", "r", "30.2115", "fill", "#ACCCF3"], ["x", "1687.09", "y", "615.734", "width", "74.872", "height", "18.3896", "fill", "#4E92E5"], ["x", "1687.09", "y", "652.513", "width", "151.058", "height", "11.8219", "fill", "#ACCCF3"], ["cx", "1638.49", "cy", "736.58", "r", "30.2115", "fill", "#ACCCF3"], ["x", "1687.09", "y", "711.622", "width", "74.872", "height", "18.3896", "fill", "#4E92E5"], ["x", "1687.09", "y", "748.402", "width", "151.058", "height", "11.8219", "fill", "#ACCCF3"], ["cx", "1638.49", "cy", "832.468", "r", "30.2115", "fill", "#ACCCF3"], ["x", "1687.09", "y", "807.511", "width", "74.872", "height", "18.3896", "fill", "#4E92E5"], ["x", "1687.09", "y", "844.29", "width", "151.058", "height", "11.8219", "fill", "#ACCCF3"], ["cx", "1638.49", "cy", "928.357", "r", "30.2115", "fill", "#ACCCF3"], ["x", "1687.09", "y", "903.4", "width", "74.872", "height", "18.3896", "fill", "#4E92E5"], ["x", "1687.09", "y", "940.179", "width", "151.058", "height", "11.8219", "fill", "#ACCCF3"], ["cx", "923", "cy", "1332.5", "rx", "188", "ry", "21.5", "fill", "black", "fill-opacity", "0.1"], ["x", "767", "y", "1211", "width", "128.895", "height", "126.21", "fill", "#D0EFF9"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M888.734 1218.16H774.161V1330.05H888.734V1218.16ZM767 1211V1337.21H895.895V1211H767Z", "fill", "#25A6EF"], ["d", "M820.706 1257.99L781.769 1324.68H883.363L858.3 1278.13L844.874 1301.85L820.706 1257.99Z", "fill", "#25A6EF"], ["cx", "862.776", "cy", "1245.01", "r", "11.6364", "fill", "#25A6EF"], ["x", "869", "y", "1152", "width", "189.15", "height", "185.21", "fill", "#D0D4F9"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1047.64 1162.51H879.508V1326.7H1047.64V1162.51ZM869 1152V1337.21H1058.15V1152H869Z", "fill", "#6F6FC7"], ["d", "M947.813 1220.96L890.674 1318.82H1039.76L1002.98 1250.52L983.278 1285.32L947.813 1220.96Z", "fill", "#6F6FC7"], ["cx", "1009.55", "cy", "1201.91", "r", "17.0761", "fill", "#6F6FC7"], ["cx", "284", "cy", "1287.5", "rx", "188", "ry", "21.5", "fill", "black", "fill-opacity", "0.1"], ["d", "M190.7 1290.23C177.277 1284.71 168.532 1282.99 166.91 1270.67C165.288 1258.35 173.309 1247.13 184.826 1245.62C196.343 1244.1 234.626 1274.51 236.248 1286.83C237.87 1299.15 204.122 1295.76 190.7 1290.23Z", "fill", "#563993"], ["d", "M192.595 1286.56C179.173 1281.03 170.427 1279.31 168.805 1266.99C167.183 1254.67 175.204 1243.46 186.721 1241.94C198.238 1240.42 236.521 1270.84 238.143 1283.16C239.765 1295.48 206.017 1292.08 192.595 1286.56Z", "fill", "white"], ["d", "M235.062 1096.96C238.649 1086.82 249.855 1081.6 259.927 1085.37C269.627 1089.01 274.707 1099.67 271.417 1109.49L220.31 1262.04C216.61 1273.09 204.491 1278.86 193.584 1274.77C183.077 1270.84 177.657 1259.21 181.399 1248.63L235.062 1096.96Z", "fill", "#563993"], ["d", "M216.9 1269.25C203.425 1271.58 188.225 1263.7 179.522 1254.06C178.662 1254.61 177.384 1257.83 179.159 1266.22C181.377 1276.71 195.999 1279.46 203.223 1282.11C210.448 1284.76 230.376 1266.93 216.9 1269.25Z", "fill", "white"], ["rx", "26.6795", "ry", "26.6824", "transform", "matrix(0.956694 0.291094 -0.290871 0.956762 246.952 1126.8)", "fill", "#563993"], ["d", "M355.464 1286.41C343.528 1294.67 337.325 1301.07 326.111 1295.73C314.898 1290.38 309.859 1277.54 314.857 1267.05C319.855 1256.56 366.194 1240.99 377.407 1246.33C388.62 1251.68 367.401 1278.15 355.464 1286.41Z", "fill", "#563993"], ["d", "M353.412 1282.82C341.475 1291.08 335.273 1297.48 324.059 1292.13C312.846 1286.79 307.807 1273.95 312.805 1263.46C317.803 1252.97 364.141 1237.4 375.355 1242.74C386.568 1248.08 365.349 1274.56 353.412 1282.82Z", "fill", "white"], ["d", "M246.571 1122.18C242.343 1112.29 247.049 1100.85 257.013 1096.8C266.608 1092.9 277.568 1097.3 281.799 1106.76L347.514 1253.6C352.271 1264.23 347.267 1276.69 336.477 1281.08C326.082 1285.3 314.221 1280.42 309.81 1270.11L246.571 1122.18Z", "fill", "#563993"], ["d", "M349.19 1256.6C343.803 1269.17 328.926 1277.64 316.101 1279.69C316.101 1280.72 318.101 1283.54 326.104 1286.62C336.107 1290.47 346.367 1279.69 352.523 1275.07C358.68 1270.45 354.578 1244.03 349.19 1256.6Z", "fill", "white"], ["rx", "26.6801", "ry", "26.6818", "transform", "matrix(0.926373 -0.376606 0.376362 0.926473 255.72 1134.74)", "fill", "#563993"], ["width", "35.9139", "height", "75.1482", "rx", "17.9569", "transform", "matrix(0.916517 -0.3997 0.399642 0.9168 154.862 1022.14)", "fill", "#FEA299"], ["rx", "22.0622", "ry", "22.064", "transform", "matrix(0.904461 -0.426285 0.426225 0.904746 198.976 1080.19)", "fill", "#FEA299"], ["width", "35.92", "height", "93.0721", "rx", "17.96", "transform", "matrix(0.374655 0.927293 -0.927014 0.374709 239.059 984.645)", "fill", "white"], ["d", "M222.408 991.379C231.601 987.663 242.066 992.106 245.782 1001.3C249.498 1010.5 245.058 1020.97 235.865 1024.68L201.245 1038.68L210.634 1060.21C210.87 1060.75 211.077 1061.3 211.256 1061.85C214.471 1064 217.162 1067.03 218.931 1070.78C224.125 1081.81 219.401 1094.95 208.382 1100.15C197.362 1105.34 184.218 1100.61 179.025 1089.59C176.708 1084.67 176.365 1079.33 177.673 1074.46L163.682 1042.37C161.924 1040.67 160.485 1038.59 159.511 1036.17C155.795 1026.98 160.235 1016.51 169.428 1012.79L222.408 991.379Z", "fill", "black", "fill-opacity", "0.1"], ["y", "1094.64", "width", "590", "height", "38", "transform", "rotate(-9.62376 0 1094.64)", "fill", "#2DA6F7"], ["x", "209.633", "y", "978.036", "width", "93.3698", "height", "148.306", "rx", "46.6849", "fill", "#FFD76C"], ["d", "M244.775 1124.9C248.466 1125.84 252.334 1126.34 256.318 1126.34C282.101 1126.34 303.003 1105.43 303.003 1079.64V1024.73C303.003 998.943 282.101 978.036 256.318 978.036C252.334 978.036 248.466 978.535 244.775 979.474C264.975 984.613 279.917 1002.93 279.917 1024.73V1079.64C279.917 1101.45 264.975 1119.76 244.775 1124.9Z", "fill", "black", "fill-opacity", "0.1"], ["cx", "255.805", "cy", "986.76", "rx", "24.112", "ry", "8.72388", "fill", "white"], ["rx", "22.0626", "ry", "22.0636", "transform", "matrix(0.904544 -0.426379 0.426131 0.904662 348.867 1076.12)", "fill", "#FEA299"], ["width", "35.92", "height", "75.1439", "rx", "17.96", "transform", "matrix(0.389661 -0.921079 0.920813 0.389718 277.445 1065.36)", "fill", "#FEA299"], ["width", "35.9177", "height", "86.2184", "rx", "17.9589", "transform", "matrix(0.708588 -0.705722 0.705417 0.708693 232.735 1018.81)", "fill", "white"], ["x", "238.362", "y", "934.929", "width", "34.8854", "height", "59.5277", "rx", "17.4427", "fill", "#FEA299"], ["x", "241.953", "y", "909.271", "width", "43.6068", "height", "58.5013", "rx", "20", "fill", "#FEA299"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M252.213 935.299C260.124 936.955 266.065 943.97 266.065 952.372V977.014C266.065 985.417 260.124 992.431 252.213 994.087C244.303 992.431 238.362 985.417 238.362 977.014V952.372C238.362 943.97 244.303 936.955 252.213 935.299Z", "fill", "black", "fill-opacity", "0.1"], ["d", "M273.247 982.654C273.247 986.399 265.633 989.435 255.93 989.435C246.227 989.435 238.362 986.399 238.362 982.654C238.362 991.444 246.227 995.483 255.93 995.483C265.633 995.483 273.247 990.941 273.247 982.654Z", "fill", "white"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M280.708 926.6L280.799 926.526C278.588 927.156 276.213 927.7 273.708 928.135C272.485 924.004 269.409 921.074 265.809 921.074C261.134 921.074 257.344 926.013 257.344 932.107C257.344 938.2 261.134 943.14 265.809 943.14C266.06 943.14 266.31 943.126 266.556 943.098C266.571 943.452 266.578 943.808 266.578 944.166C266.578 958.337 255.094 969.825 240.927 969.825C229.181 969.825 219.279 961.928 216.238 951.152C212.445 946.82 210.146 941.147 210.146 934.936V921.067C210.146 909.858 217.634 900.399 227.88 897.419C234.117 885.838 246.35 877.968 260.422 877.968C275.517 877.968 288.496 887.025 294.227 900.002C294.263 899.333 294.281 898.659 294.281 897.981C294.281 882.278 284.487 868.862 270.676 863.513C288.401 866.228 301.976 881.545 301.976 900.034C301.976 906.669 300.228 912.001 297.166 916.175C296.226 919.284 291.914 922.495 285.509 924.96C283.985 925.595 282.381 926.141 280.708 926.6Z", "fill", "#563993"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M228.101 909.271C221.228 909.271 215.012 912.087 210.544 916.629C212.634 905.147 222.686 896.442 234.771 896.442C248.371 896.442 259.396 907.467 259.396 921.067V924.905C258.117 926.838 257.344 929.355 257.344 932.107C257.344 934.633 257.995 936.961 259.091 938.821C258.271 943.995 255.84 948.632 252.328 952.203C252.59 950.764 252.726 949.281 252.726 947.766V933.896C252.726 920.296 241.701 909.271 228.101 909.271Z", "fill", "white", "fill-opacity", "0.2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M230.715 892.954C231.335 892.116 231.989 891.306 232.676 890.524C238.35 886.504 245.376 884.125 252.983 884.125C271.825 884.125 287.099 898.715 287.099 916.712C287.099 919.485 286.736 922.176 286.054 924.746C283.676 925.696 280.992 926.541 278.074 927.238C278.274 925.809 278.378 924.351 278.378 922.87C278.378 904.873 263.103 890.284 244.262 890.284C239.448 890.284 234.867 891.236 230.715 892.954Z", "fill", "white", "fill-opacity", "0.2"], ["cx", "1858.5", "cy", "1204", "rx", "154.5", "ry", "22", "fill", "black", "fill-opacity", "0.1"], ["d", "M1846.37 1121.91C1846.37 1119.2 1826.73 1117 1802.5 1117C1778.27 1117 1758.63 1119.2 1758.63 1121.91V1201.93C1758.63 1204.64 1778.27 1206.84 1802.5 1206.84C1826.73 1206.84 1846.37 1204.64 1846.37 1201.93V1121.91Z", "fill", "#F9F9F9"], ["cx", "1802.5", "cy", "1121.91", "rx", "43.8665", "ry", "4.91304", "fill", "black", "fill-opacity", "0.1"], ["d", "M1846.37 1145.78C1846.37 1148.49 1826.73 1150.69 1802.5 1150.69C1778.27 1150.69 1758.63 1148.49 1758.63 1145.78V1177.01C1758.63 1179.72 1778.27 1181.92 1802.5 1181.92C1826.73 1181.92 1846.37 1179.72 1846.37 1177.01V1145.78Z", "fill", "#B890C6"], ["d", "M1845.31 1122.99C1841.67 1124.82 1828.93 1126.26 1812.68 1126.69C1812.68 1126.74 1812.68 1126.78 1812.68 1126.83C1812.8 1128.51 1812.63 1128.73 1811.98 1132.09C1811.32 1135.45 1810.92 1138.76 1813.03 1138.76C1815.13 1138.76 1814.94 1135.85 1814.64 1133.8C1814.54 1133.04 1814.43 1132.31 1814.43 1131.74C1814.43 1129.63 1817.59 1129.98 1817.24 1132.44C1817.18 1132.84 1817.1 1133.33 1817.01 1133.88C1816.52 1136.76 1815.77 1141.21 1817.24 1141.21C1818.99 1141.21 1819.35 1135.25 1818.99 1132.44C1818.64 1129.63 1821.8 1126.12 1821.8 1129.28C1821.8 1129.89 1821.78 1130.72 1821.75 1131.64C1821.62 1135.51 1821.44 1141.21 1822.85 1141.21C1823.66 1141.21 1823.73 1138.71 1823.8 1136C1823.89 1132.79 1823.98 1129.28 1825.31 1129.28C1826.34 1129.28 1826.81 1130.2 1827.33 1131.2C1828.04 1132.58 1828.83 1134.11 1831.28 1133.49C1833.67 1132.89 1834.25 1131.73 1834.82 1130.57C1835.25 1129.7 1835.68 1128.83 1836.89 1128.23C1838.46 1127.45 1839.37 1128.63 1840.29 1129.82C1841.03 1130.78 1841.77 1131.74 1842.86 1131.74C1845.31 1131.74 1845.31 1126.15 1845.31 1122.99Z", "fill", "#EA2B2B"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1842.15 1124.02C1835.1 1125.68 1820 1126.83 1802.5 1126.83C1785 1126.83 1769.9 1125.68 1762.86 1124.02C1769.9 1122.36 1785 1121.21 1802.5 1121.21C1820 1121.21 1835.1 1122.36 1842.15 1124.02Z", "fill", "#EA2B2B"], ["d", "M1939.73 1111.91C1939.73 1109.2 1920.09 1107 1895.87 1107C1871.64 1107 1852 1109.2 1852 1111.91V1191.93C1852 1194.64 1871.64 1196.84 1895.87 1196.84C1920.09 1196.84 1939.73 1194.64 1939.73 1191.93V1111.91Z", "fill", "#F9F9F9"], ["cx", "1895.87", "cy", "1111.91", "rx", "43.8665", "ry", "4.91304", "fill", "black", "fill-opacity", "0.1"], ["d", "M1939.73 1135.78C1939.73 1138.49 1920.09 1140.69 1895.87 1140.69C1871.64 1140.69 1852 1138.49 1852 1135.78V1167.01C1852 1169.72 1871.64 1171.92 1895.87 1171.92C1920.09 1171.92 1939.73 1169.72 1939.73 1167.01V1135.78Z", "fill", "#B890C6"], ["d", "M1938.68 1112.99C1935.04 1114.82 1922.29 1116.26 1906.05 1116.69C1906.05 1116.74 1906.04 1116.78 1906.04 1116.83C1906.16 1118.51 1906 1118.73 1905.34 1122.09C1904.69 1125.45 1904.29 1128.76 1906.39 1128.76C1908.5 1128.76 1908.3 1125.85 1908.01 1123.8C1907.9 1123.04 1907.8 1122.31 1907.8 1121.74C1907.8 1119.63 1910.96 1119.98 1910.61 1122.44C1910.55 1122.84 1910.47 1123.33 1910.37 1123.88C1909.89 1126.76 1909.13 1131.21 1910.61 1131.21C1912.36 1131.21 1912.71 1125.25 1912.36 1122.44C1912.01 1119.63 1915.17 1116.12 1915.17 1119.28C1915.17 1119.89 1915.14 1120.72 1915.11 1121.64C1914.99 1125.51 1914.81 1131.21 1916.22 1131.21C1917.02 1131.21 1917.09 1128.71 1917.16 1126C1917.25 1122.79 1917.35 1119.28 1918.68 1119.28C1919.7 1119.28 1920.18 1120.2 1920.69 1121.2C1921.41 1122.58 1922.19 1124.11 1924.64 1123.49C1927.04 1122.89 1927.62 1121.73 1928.19 1120.57C1928.62 1119.7 1929.05 1118.83 1930.26 1118.23C1931.82 1117.45 1932.73 1118.63 1933.66 1119.82C1934.39 1120.78 1935.14 1121.74 1936.22 1121.74C1938.67 1121.74 1938.68 1116.15 1938.68 1112.99Z", "fill", "#6F6FC7"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1935.51 1114.02C1928.47 1115.68 1913.37 1116.83 1895.87 1116.83C1878.37 1116.83 1863.26 1115.68 1856.22 1114.02C1863.26 1112.36 1878.37 1111.21 1895.87 1111.21C1913.37 1111.21 1928.47 1112.36 1935.51 1114.02Z", "fill", "#6F6FC7"], ["d", "M1925.73 1136.91C1925.73 1134.2 1906.09 1132 1881.87 1132C1857.64 1132 1838 1134.2 1838 1136.91V1216.93C1838 1219.64 1857.64 1221.84 1881.87 1221.84C1906.09 1221.84 1925.73 1219.64 1925.73 1216.93V1136.91Z", "fill", "#F9F9F9"], ["cx", "1881.87", "cy", "1136.91", "rx", "43.8665", "ry", "4.91304", "fill", "black", "fill-opacity", "0.1"], ["d", "M1925.73 1160.78C1925.73 1163.49 1906.09 1165.69 1881.87 1165.69C1857.64 1165.69 1838 1163.49 1838 1160.78V1192.01C1838 1194.72 1857.64 1196.92 1881.87 1196.92C1906.09 1196.92 1925.73 1194.72 1925.73 1192.01V1160.78Z", "fill", "#B890C6"], ["d", "M1924.68 1137.99C1921.04 1139.82 1908.29 1141.26 1892.05 1141.69C1892.05 1141.74 1892.04 1141.78 1892.04 1141.83C1892.16 1143.51 1892 1143.73 1891.34 1147.09C1890.69 1150.45 1890.29 1153.76 1892.39 1153.76C1894.5 1153.76 1894.3 1150.85 1894.01 1148.8C1893.9 1148.04 1893.8 1147.31 1893.8 1146.74C1893.8 1144.63 1896.96 1144.98 1896.61 1147.44C1896.55 1147.84 1896.47 1148.33 1896.37 1148.88C1895.89 1151.76 1895.13 1156.21 1896.61 1156.21C1898.36 1156.21 1898.71 1150.25 1898.36 1147.44C1898.01 1144.63 1901.17 1141.12 1901.17 1144.28C1901.17 1144.89 1901.14 1145.72 1901.11 1146.64C1900.99 1150.51 1900.81 1156.21 1902.22 1156.21C1903.02 1156.21 1903.09 1153.71 1903.16 1151C1903.25 1147.79 1903.35 1144.28 1904.68 1144.28C1905.7 1144.28 1906.18 1145.2 1906.69 1146.2C1907.41 1147.58 1908.19 1149.11 1910.64 1148.49C1913.04 1147.89 1913.62 1146.73 1914.19 1145.57C1914.62 1144.7 1915.05 1143.83 1916.26 1143.23C1917.82 1142.45 1918.73 1143.63 1919.66 1144.82C1920.39 1145.78 1921.14 1146.74 1922.22 1146.74C1924.67 1146.74 1924.68 1141.15 1924.68 1137.99Z", "fill", "#4E92E5"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1921.51 1139.02C1914.47 1140.68 1899.37 1141.83 1881.87 1141.83C1864.37 1141.83 1849.26 1140.68 1842.22 1139.02C1849.26 1137.36 1864.37 1136.21 1881.87 1136.21C1899.37 1136.21 1914.47 1137.36 1921.51 1139.02Z", "fill", "#4E92E5"], ["x", "1393", "y", "446", "width", "89", "height", "30", "fill", "#8DACD2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1357.38 1129.96C1354.64 1129.62 1352.7 1127.12 1353.04 1124.38L1434.98 464.146C1435.32 461.406 1437.82 459.46 1440.56 459.8C1443.3 460.14 1445.24 462.637 1444.9 465.378L1362.96 1125.62C1362.62 1128.36 1360.12 1130.3 1357.38 1129.96Z", "fill", "#C8C8C8"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1432.56 523.441C1428.45 522.925 1425.54 519.174 1426.06 515.064L1432.5 463.827C1433.02 459.717 1436.77 456.804 1440.88 457.321C1444.99 457.837 1447.9 461.588 1447.38 465.698L1440.94 516.936C1440.42 521.045 1436.67 523.958 1432.56 523.441Z", "fill", "#C8C8C8"], ["cx", "1285", "cy", "1331", "rx", "123", "ry", "28", "fill", "black", "fill-opacity", "0.1"], ["d", "M1267.29 1345.61C1258.65 1351.18 1244.81 1350.41 1236.37 1343.88C1227.94 1337.35 1228.1 1327.54 1236.74 1321.96C1245.38 1316.39 1282.44 1310.2 1290.87 1316.73C1299.31 1323.25 1275.93 1340.03 1267.29 1345.61Z", "fill", "#563993"], ["d", "M1267.29 1341.22C1258.65 1346.8 1244.81 1346.03 1236.37 1339.5C1227.94 1332.97 1228.1 1323.16 1236.74 1317.58C1245.38 1312.01 1282.44 1305.82 1290.87 1312.34C1299.31 1318.87 1275.93 1335.65 1267.29 1341.22Z", "fill", "white"], ["d", "M1240.69 1153.19C1241.17 1142.37 1250.44 1134.05 1261.25 1134.74C1271.66 1135.39 1279.67 1144.18 1279.38 1154.6L1274.83 1316.52C1274.5 1328.24 1264.51 1337.35 1252.81 1336.61C1241.53 1335.9 1232.91 1326.29 1233.41 1315L1240.69 1153.19Z", "fill", "#FFD76C"], ["cx", "1260.88", "cy", "1178.44", "rx", "26.8655", "ry", "26.8655", "fill", "#FFD76C"], ["d", "M1261.25 1134.74C1250.44 1134.05 1241.17 1142.37 1240.69 1153.19L1240.33 1161.14C1236.39 1165.81 1234.01 1171.85 1234.01 1178.44C1234.01 1184.17 1235.81 1189.48 1238.86 1193.84L1233.41 1315C1232.91 1326.29 1241.53 1335.9 1252.81 1336.61C1264.51 1337.35 1274.5 1328.24 1274.83 1316.52L1278.13 1199.04C1284.01 1194.11 1287.75 1186.71 1287.75 1178.44C1287.75 1170.71 1284.48 1163.75 1279.26 1158.85L1279.38 1154.6C1279.67 1144.18 1271.66 1135.39 1261.25 1134.74Z", "fill", "black", "fill-opacity", "0.1"], ["d", "M1323.09 1349.31C1314.45 1354.84 1300.61 1354.07 1292.17 1347.6C1283.74 1341.13 1283.9 1331.4 1292.54 1325.87C1301.18 1320.35 1338.23 1314.21 1346.67 1320.68C1355.11 1327.15 1331.73 1343.78 1323.09 1349.31Z", "fill", "#563993"], ["d", "M1323.09 1344.97C1314.45 1350.49 1300.61 1349.73 1292.17 1343.26C1283.74 1336.78 1283.9 1327.06 1292.54 1321.53C1301.18 1316 1338.23 1309.86 1346.67 1316.34C1355.11 1322.81 1331.73 1339.44 1323.09 1344.97Z", "fill", "white"], ["d", "M1285 1153.2C1284.81 1142.38 1293.53 1133.49 1304.36 1133.49C1314.79 1133.49 1323.34 1141.76 1323.71 1152.18L1329.36 1314.06C1329.77 1325.78 1320.38 1335.5 1308.65 1335.5C1297.36 1335.5 1288.14 1326.45 1287.94 1315.16L1285 1153.2Z", "fill", "#FFD76C"], ["cx", "1286.71", "cy", "1189.29", "rx", "26.8655", "ry", "26.8655", "fill", "#FFD76C"], ["d", "M1329.34 1317.85C1326.75 1319.66 1311.25 1327.92 1290.33 1324.05L1293.95 1337.74L1327.53 1335.67C1329.51 1329.82 1331.4 1316.4 1329.34 1317.85Z", "fill", "white"], ["d", "M1274.57 1317.44C1271.99 1319.25 1254.68 1326.12 1233.76 1322.24L1239.96 1339.29L1272.76 1335.27C1274.74 1329.41 1276.64 1315.99 1274.57 1317.44Z", "fill", "white"], ["x", "1318.38", "y", "1107.17", "width", "36.1651", "height", "75.6664", "rx", "18.0826", "transform", "rotate(-161.772 1318.38 1107.17)", "fill", "#FEA299"], ["x", "1230", "y", "1078.81", "width", "36.1651", "height", "93.7178", "rx", "18.0826", "transform", "rotate(-70.2192 1230 1078.81)", "fill", "white"], ["d", "M1236.12 1061.8C1232.74 1071.2 1237.62 1081.55 1247.01 1084.93L1301.17 1104.41C1310.57 1107.79 1320.93 1102.91 1324.31 1093.51C1325.19 1091.05 1325.51 1088.52 1325.33 1086.07L1336.39 1052.47C1339.51 1042.99 1334.36 1032.77 1324.87 1029.64C1315.39 1026.52 1305.16 1031.68 1302.04 1041.16L1294.64 1063.63L1259.25 1050.9C1249.86 1047.52 1239.5 1052.4 1236.12 1061.8Z", "fill", "black", "fill-opacity", "0.1"], ["x", "1231.95", "y", "1034.81", "width", "94.0294", "height", "149.31", "rx", "47.0147", "fill", "#563993"], ["d", "M1267.34 1182.68C1271.06 1183.62 1274.95 1184.12 1278.96 1184.12C1304.93 1184.12 1325.98 1163.08 1325.98 1137.11V1081.83C1325.98 1055.86 1304.93 1034.81 1278.96 1034.81C1274.95 1034.81 1271.06 1035.32 1267.34 1036.26C1287.68 1041.44 1302.73 1059.88 1302.73 1081.83V1137.11C1302.73 1159.06 1287.68 1177.5 1267.34 1182.68Z", "fill", "black", "fill-opacity", "0.1"], ["cx", "1278.45", "cy", "1043.6", "rx", "24.2823", "ry", "8.78296", "fill", "white"], ["cx", "1379.02", "cy", "984.752", "rx", "22.2157", "ry", "22.2157", "transform", "rotate(-110.343 1379.02 984.752)", "fill", "#FEA299"], ["x", "1362.1", "y", "1055.49", "width", "36.1651", "height", "75.6664", "rx", "18.0826", "transform", "rotate(-152.178 1362.1 1055.49)", "fill", "#563993"], ["x", "1307.72", "y", "1094.81", "width", "36.1651", "height", "86.8123", "rx", "18.0826", "transform", "rotate(-129.989 1307.72 1094.81)", "fill", "#563993"], ["x", "1257.26", "y", "990.9", "width", "35.1319", "height", "59.9308", "rx", "17.5659", "fill", "#FEA299"], ["x", "1260.88", "y", "965.068", "width", "43.9148", "height", "58.8975", "rx", "20", "fill", "#FEA299"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1271.21 991.272C1279.18 992.94 1285.16 1000 1285.16 1008.47V1033.26C1285.16 1041.73 1279.18 1048.79 1271.21 1050.46C1263.25 1048.79 1257.26 1041.73 1257.26 1033.26V1008.47C1257.26 1000 1263.25 992.94 1271.21 991.272Z", "fill", "black", "fill-opacity", "0.1"], ["d", "M1292.4 1038.95C1292.4 1042.72 1284.73 1045.77 1274.96 1045.77C1265.18 1045.77 1257.26 1042.72 1257.26 1038.95C1257.26 1047.8 1265.18 1051.86 1274.96 1051.86C1284.73 1051.86 1292.4 1047.29 1292.4 1038.95Z", "fill", "white"], ["d", "M1319.64 941.867C1321.71 945.696 1322.88 950.042 1322.88 954.648C1322.88 970.057 1309.81 982.547 1293.69 982.547C1291.46 982.547 1289.29 982.309 1287.21 981.858C1287.22 982.258 1287.23 982.66 1287.23 983.064C1287.23 1002.47 1271.5 1018.2 1252.1 1018.2C1232.69 1018.2 1216.97 1002.47 1216.97 983.064C1216.97 967.961 1226.5 955.084 1239.87 950.118C1241.29 938.99 1251.31 930.366 1263.46 930.366C1267.66 930.366 1271.6 931.394 1275.02 933.198C1280.08 929.172 1286.59 926.75 1293.69 926.75C1300.4 926.75 1306.58 928.913 1311.51 932.551C1311.41 925.609 1308.65 919.28 1304.17 914.448C1313.45 919.119 1319.78 928.428 1319.78 939.149C1319.78 940.066 1319.73 940.973 1319.64 941.867Z", "fill", "#563993"], ["d", "M1269.22 1013.75C1267.67 1013.96 1266.1 1014.06 1264.5 1014.06C1245.09 1014.06 1229.36 998.334 1229.36 978.931C1229.36 965.745 1236.63 954.256 1247.37 948.247C1230.2 950.554 1216.97 965.263 1216.97 983.064C1216.97 1002.47 1232.69 1018.2 1252.1 1018.2C1258.31 1018.2 1264.15 1016.58 1269.22 1013.75Z", "fill", "white", "fill-opacity", "0.1"], ["d", "M1287.23 952.84C1287.23 953.982 1287.14 955.103 1286.97 956.198C1285.25 945.379 1275.38 937.083 1263.46 937.083C1254.24 937.083 1246.24 942.053 1242.3 949.315C1241.48 949.554 1240.67 949.822 1239.87 950.118C1241.29 938.99 1251.31 930.366 1263.46 930.366C1276.59 930.366 1287.23 940.428 1287.23 952.84Z", "fill", "white", "fill-opacity", "0.1"], ["d", "M1287.49 980.481C1303.61 980.481 1316.68 967.99 1316.68 952.582C1316.68 941.507 1309.93 931.94 1300.14 927.434C1313.16 930.242 1322.88 941.361 1322.88 954.648C1322.88 970.057 1309.81 982.547 1293.69 982.547C1289.15 982.547 1284.86 981.559 1281.03 979.796C1283.11 980.244 1285.27 980.481 1287.49 980.481Z", "fill", "white", "fill-opacity", "0.1"], ["cx", "1284.9", "cy", "987.972", "rx", "8.52464", "ry", "11.1079", "fill", "#FEA299"]], template: function IllustrationConceptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "g", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "g", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "g", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "g", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "g", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "path", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "path", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "path", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "path", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "path", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "path", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "path", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "path", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "path", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "path", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "g", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "path", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "path", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "path", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "path", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "path", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "path", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "path", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "path", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "path", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "path", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "path", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "path", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "path", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "path", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "path", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "ellipse", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "path", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "path", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "path", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "rect", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "rect", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "rect", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "path", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "circle", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "circle", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "circle", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "circle", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "rect", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "rect", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "rect", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "circle", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "rect", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "circle", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "rect", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "circle", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "rect", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "circle", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "rect", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "circle", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "rect", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "circle", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "rect", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "rect", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "rect", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "rect", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "rect", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "path", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "path", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "circle", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "path", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "path", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "rect", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "rect", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "rect", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "rect", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "rect", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "rect", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "rect", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "rect", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "rect", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "rect", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "circle", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "rect", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "rect", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "rect", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "rect", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "circle", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "rect", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "rect", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "rect", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "circle", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "rect", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "rect", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "circle", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "rect", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "rect", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "circle", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "rect", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "rect", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "circle", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "rect", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "rect", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "circle", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "rect", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "rect", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "ellipse", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "rect", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "path", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "path", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "circle", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "rect", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "path", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "path", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "circle", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "ellipse", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "path", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "path", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "path", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "path", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "ellipse", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "path", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "path", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "path", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "path", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "ellipse", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "rect", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "ellipse", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "rect", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "path", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "rect", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "rect", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "path", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "ellipse", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "ellipse", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "rect", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "rect", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "rect", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "rect", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "path", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "path", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "path", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "path", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "path", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "ellipse", 233);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "path", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "ellipse", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "path", 236);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "path", 237);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "path", 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "path", 239);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "ellipse", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "path", 241);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "path", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "path", 243);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "path", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "ellipse", 245);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "path", 246);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "path", 247);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "path", 248);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "rect", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "path", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "path", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "ellipse", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "path", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "path", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "path", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "ellipse", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "path", 257);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "path", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "path", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "path", 260);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "ellipse", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "path", 262);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "path", 263);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "rect", 264);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "rect", 265);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "path", 266);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "rect", 267);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "path", 268);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "ellipse", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "ellipse", 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "rect", 271);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "rect", 272);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "rect", 273);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "rect", 274);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "path", 275);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "path", 276);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "path", 277);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "path", 278);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "path", 279);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "path", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](287, "ellipse", 281);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbGx1c3RyYXRpb24tY29uY2VwdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Y+9V":
/*!***************************************************************************************!*\
  !*** ./src/app/page-home/sections/section-conception/section-conception.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SectionConceptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionConceptionComponent", function() { return SectionConceptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_illustration_conception_illustration_conception_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/illustration-conception/illustration-conception.component */ "Xy+Y");


class SectionConceptionComponent {
    constructor() { }
    ngOnInit() {
    }
}
SectionConceptionComponent.ɵfac = function SectionConceptionComponent_Factory(t) { return new (t || SectionConceptionComponent)(); };
SectionConceptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionConceptionComponent, selectors: [["app-section-conception"]], decls: 26, vars: 0, consts: [["id", "conception"], [1, "decor"], [1, "line-decor"], [1, "container"], [1, "line", "right"], [1, "container", "d-grid", "grid-two-columns", "align-items-center"], [1, "content"], [1, "subtitle"], [1, "img"]], template: function SectionConceptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Conception d'interfaces");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Une d\u00E9marche centr\u00E9e utilisateur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Exploration des besoins utilisateurs, comprendre leur environnement, leurs \u00E9motions, leurs motivations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Id\u00E9ation de solutions de conception");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cr\u00E9ation de prototypes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Evaluation des solutions g\u00E9n\u00E9r\u00E9es avec des utilisateurs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Design d\u2019interface");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-illustration-conception");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_illustration_conception_illustration_conception_component__WEBPACK_IMPORTED_MODULE_1__["IllustrationConceptionComponent"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n.decor[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/conception-decor.svg\");\n  background-repeat: no-repeat;\n  background-position: center left;\n  background-size: cover;\n  position: absolute;\n  top: -25%;\n  right: 0;\n  height: 150%;\n  width: 25vw;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NlY3Rpb24tY29uY2VwdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxREFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJzZWN0aW9uLWNvbmNlcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZGVjb3Ige1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvY29uY2VwdGlvbi1kZWNvci5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgbGVmdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0yNSU7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiAxNTAlO1xuICAgIHdpZHRoOiAyNXZ3O1xuICAgIHotaW5kZXg6IC0xO1xufSJdfQ== */"] });


/***/ }),

/***/ "YOn9":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/illustration-accompagnement/illustration-accompagnement.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: IllustrationAccompagnementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IllustrationAccompagnementComponent", function() { return IllustrationAccompagnementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class IllustrationAccompagnementComponent {
    constructor() { }
    ngOnInit() {
    }
}
IllustrationAccompagnementComponent.ɵfac = function IllustrationAccompagnementComponent_Factory(t) { return new (t || IllustrationAccompagnementComponent)(); };
IllustrationAccompagnementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IllustrationAccompagnementComponent, selectors: [["app-illustration-accompagnement"]], decls: 143, vars: 0, consts: [["width", "100%", "height", "100%", "viewBox", "0 0 3426 2374", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1322.74 765.259C1324.97 765.259 1326.78 767.067 1326.78 769.298V1058.5C1326.78 1072.1 1334.37 1084.57 1346.46 1090.81L1582.86 1212.77C1614.12 1228.9 1615.13 1273.24 1584.63 1290.78L1207.13 1507.75C1207.11 1507.76 1207.08 1507.78 1207.06 1507.79L1207.05 1507.8L1207.01 1507.82L826.29 1726.64C801.952 1740.63 801.979 1775.75 826.339 1789.71L1653.59 2263.49C1664.78 2269.9 1678.52 2269.9 1689.71 2263.5L2235.58 1951.06C2260.06 1937.05 2259.96 1901.71 2235.39 1887.85L2016.47 1764.31L1941.73 1807.73C1927.92 1815.75 1910.87 1815.74 1897.07 1807.71L1891.69 1804.59L1826.18 1842.14C1824.24 1843.24 1821.78 1842.57 1820.67 1840.64C1819.56 1838.7 1820.23 1836.24 1822.16 1835.13L1883.63 1799.9L1867.54 1790.53L1793.9 1832.75C1798.12 1837.75 1796.64 1843.94 1789.46 1848.09C1780.41 1853.31 1765.74 1853.31 1756.69 1848.09C1747.64 1842.87 1747.64 1834.4 1756.69 1829.17C1764.82 1824.48 1777.5 1824 1786.55 1827.75C1786.75 1827.57 1786.97 1827.42 1787.21 1827.28L1859.48 1785.84L1803.81 1753.46C1801.88 1752.33 1801.23 1749.86 1802.35 1747.93C1803.47 1746.01 1805.95 1745.35 1807.88 1746.47L1901.13 1800.73C1912.42 1807.3 1926.37 1807.31 1937.67 1800.74L2419.56 1520.82C2443.53 1506.9 2443.73 1472.35 2419.91 1458.16L2322.34 1400.01L2248.2 1442.47C2246.26 1443.58 2243.79 1442.91 2242.68 1440.97C2241.58 1439.04 2242.25 1436.57 2244.18 1435.46L2314.37 1395.27L2272.41 1370.26L2157.02 1436.88C2155.09 1438 2152.62 1437.33 2151.51 1435.4C2150.39 1433.47 2151.05 1431 2152.98 1429.89L2264.46 1365.52L2238.58 1350.11C2208.96 1332.45 2209.87 1289.24 2240.21 1272.84L2257.69 1263.4L1990.55 1104.35C1988.63 1103.21 1988 1100.73 1989.15 1098.82C1990.29 1096.9 1992.77 1096.27 1994.68 1097.41L2155.31 1193.05L2228.15 1154.3C2230.12 1153.25 2232.57 1154 2233.62 1155.97C2234.66 1157.94 2233.92 1160.39 2231.95 1161.43L2163.43 1197.88L2178.37 1206.77L2218.86 1183.23C2220.79 1182.11 2223.26 1182.76 2224.38 1184.69C2225.5 1186.62 2224.85 1189.09 2222.92 1190.22L2186.31 1211.5L2265.97 1258.93L2369.38 1203.08L2196.64 1103.36C2177.32 1092.2 2177.32 1074.12 2196.64 1062.97L2501.66 886.876C2520.98 875.723 2552.31 875.723 2571.63 886.876L2876.65 1062.97C2895.97 1074.12 2895.97 1092.2 2876.65 1103.36L2571.63 1279.45C2552.31 1290.6 2520.98 1290.6 2501.66 1279.45L2377.59 1207.82L2269.94 1265.97L2269.93 1265.99C2269.14 1267.32 2267.7 1268.03 2266.26 1267.96L2244.05 1279.95C2219.22 1293.36 2218.48 1328.72 2242.72 1343.17L2424.05 1451.22C2453.15 1468.56 2452.92 1510.79 2423.62 1527.81L2302.46 1598.19L2347.82 1625.31C2349.74 1626.46 2350.36 1628.94 2349.22 1630.85C2348.07 1632.77 2345.59 1633.39 2343.68 1632.25L2294.47 1602.83L2255.05 1625.73L2323.53 1664.73C2323.7 1664.64 2323.87 1664.54 2324.04 1664.44C2355.83 1646.08 2407.39 1646.08 2439.19 1664.44C2470.99 1682.8 2470.99 1712.56 2439.19 1730.92C2407.39 1749.28 2355.83 1749.28 2324.04 1730.92C2295.16 1714.25 2292.51 1688.18 2316.06 1669.78L2246.98 1630.43L2246.97 1630.42L2024.57 1759.61L2239.36 1880.81C2269.38 1897.75 2269.52 1940.95 2239.6 1958.07L1693.73 2270.51C1680.05 2278.34 1663.25 2278.34 1649.57 2270.5L1018.19 1908.9L915.551 1972.85C922.795 1979.7 921.28 1988.78 911.005 1994.71C898.953 2001.67 879.412 2001.67 867.359 1994.71C855.307 1987.75 855.307 1976.47 867.359 1969.51C878.659 1962.99 896.542 1962.58 908.664 1968.29C908.986 1967.66 909.478 1967.11 910.121 1966.71L1010.23 1904.34L956.514 1873.57L801.217 1967.22C829.416 1985.69 828.231 2013.87 797.664 2031.52C765.864 2049.88 714.307 2049.88 682.508 2031.52C650.708 2013.16 650.708 1983.4 682.508 1965.04C712.896 1947.5 761.326 1946.72 793.315 1962.7C793.549 1962.46 793.816 1962.25 794.114 1962.07L948.49 1868.97L822.324 1796.72C792.551 1779.66 792.518 1736.74 822.265 1719.64L1197.05 1504.23L923.422 1341.94C909.929 1333.94 901.656 1319.41 901.656 1303.72V1019.11C901.656 1016.88 903.465 1015.07 905.695 1015.07C907.926 1015.07 909.735 1016.88 909.735 1019.11V1303.72C909.735 1316.56 916.503 1328.44 927.543 1334.99L1205.09 1499.6L1387.34 1394.85L1110.39 1230.59C1096.89 1222.58 1088.62 1208.06 1088.62 1192.37V907.758C1088.62 905.527 1090.43 903.719 1092.66 903.719C1094.89 903.719 1096.7 905.527 1096.7 907.758V1192.37C1096.7 1205.21 1103.47 1217.09 1114.51 1223.64L1394.08 1389.46C1394.5 1389.7 1394.85 1390.01 1395.14 1390.37L1580.6 1283.77C1605.56 1269.43 1604.74 1233.15 1579.15 1219.95L1342.76 1097.99C1327.98 1090.36 1318.7 1075.13 1318.7 1058.5V769.298C1318.7 767.067 1320.51 765.259 1322.74 765.259ZM2869.65 1067.01L2564.63 890.915C2549.17 881.993 2524.12 881.993 2508.66 890.915L2203.64 1067.01C2188.18 1075.93 2188.18 1090.39 2203.64 1099.32L2508.66 1275.41C2524.12 1284.33 2549.17 1284.33 2564.63 1275.41L2869.65 1099.32C2885.11 1090.39 2885.11 1075.93 2869.65 1067.01ZM1763.68 1844.05C1768.87 1847.04 1777.28 1847.04 1782.46 1844.05C1787.65 1841.06 1787.65 1836.2 1782.46 1833.21C1777.28 1830.22 1768.87 1830.22 1763.68 1833.21C1758.5 1836.2 1758.5 1841.06 1763.68 1844.05ZM2331.03 1726.88C2358.97 1743.01 2404.26 1743.01 2432.2 1726.88C2460.13 1710.75 2460.13 1684.61 2432.2 1668.48C2404.26 1652.35 2358.97 1652.35 2331.03 1668.48C2303.1 1684.61 2303.1 1710.75 2331.03 1726.88ZM790.668 2027.48C762.732 2043.61 717.44 2043.61 689.504 2027.48C661.568 2011.35 661.568 1985.2 689.504 1969.08C717.44 1952.95 762.732 1952.95 790.668 1969.08C818.603 1985.2 818.603 2011.35 790.668 2027.48ZM904.009 1990.67C895.82 1995.4 882.544 1995.4 874.355 1990.67C866.167 1985.94 866.167 1978.28 874.355 1973.55C882.544 1968.83 895.82 1968.83 904.009 1973.55C912.197 1978.28 912.197 1985.94 904.009 1990.67Z", "fill", "#4F1EB5"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1032.66 1534.47C1056.06 1547.98 1094.01 1547.98 1117.42 1534.47C1140.83 1520.96 1140.83 1499.05 1117.42 1485.54C1094.01 1472.02 1056.06 1472.02 1032.66 1485.54C1009.25 1499.05 1009.25 1520.96 1032.66 1534.47ZM1039.65 1530.43C1059.2 1541.71 1090.88 1541.71 1110.42 1530.43C1129.96 1519.15 1129.96 1500.86 1110.42 1489.58C1090.88 1478.29 1059.2 1478.29 1039.65 1489.58C1020.11 1500.86 1020.11 1519.15 1039.65 1530.43Z", "fill", "#4F1EB5"], ["width", "195.375", "height", "19.7488", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 1925.63 1483.4)", "fill", "#6E6E6E"], ["width", "458.814", "height", "19.7488", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 1528.28 1712.82)", "fill", "#5A5A5A"], ["width", "195.375", "height", "458.814", "transform", "matrix(0.866041 0.499972 -0.866041 0.499972 1925.63 1503.15)", "fill", "#EF2A2A"], ["width", "195.375", "height", "19.7488", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 1528.28 1712.82)", "fill", "#D5D5D5"], ["width", "458.814", "height", "19.7488", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 1697.48 1810.51)", "fill", "#C0C0C0"], ["width", "458.814", "height", "195.375", "transform", "matrix(0.866041 -0.499972 0.866041 0.499972 1528.28 1712.82)", "fill", "#EDEDED"], ["width", "40.8574", "height", "183.554", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 1825.13 1408.01)", "fill", "#6E6E6E"], ["width", "117.694", "height", "183.554", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 1723.21 1466.86)", "fill", "#5A5A5A"], ["width", "40.8574", "height", "117.694", "transform", "matrix(0.866041 0.499972 -0.866041 0.499972 1825.14 1591.56)", "fill", "#EF2A2A"], ["width", "40.8574", "height", "183.554", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 1723.21 1466.86)", "fill", "#D5D5D5"], ["width", "117.694", "height", "183.554", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 1758.59 1487.29)", "fill", "#C0C0C0"], ["width", "117.694", "height", "40.8574", "transform", "matrix(0.866041 -0.499972 0.866041 0.499972 1723.21 1466.86)", "fill", "#EDEDED"], ["width", "30.7845", "height", "571.383", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 2116.48 685.424)", "fill", "#6E6E6E"], ["width", "30.7845", "height", "571.383", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 2089.82 700.817)", "fill", "#5A5A5A"], ["width", "30.7845", "height", "30.7845", "transform", "matrix(0.866041 0.499972 -0.866041 0.499972 2116.48 1256.81)", "fill", "#EF2A2A"], ["width", "30.7845", "height", "571.383", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 2089.82 700.812)", "fill", "#D5D5D5"], ["width", "30.7845", "height", "571.383", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 2116.48 716.206)", "fill", "#C0C0C0"], ["width", "30.7845", "height", "30.7845", "transform", "matrix(0.866041 -0.499972 0.866041 0.499972 2089.82 700.815)", "fill", "#EDEDED"], ["width", "30.7838", "height", "30.7838", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 2089.85 700.782)", "fill", "#6E6E6E"], ["width", "837.566", "height", "30.7838", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 1364.48 1119.56)", "fill", "#5A5A5A"], ["width", "30.7838", "height", "837.566", "transform", "matrix(0.866041 0.499972 -0.866041 0.499972 2089.85 731.564)", "fill", "#EF2A2A"], ["width", "30.7838", "height", "30.7838", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 1364.48 1119.56)", "fill", "#D5D5D5"], ["width", "837.566", "height", "30.7838", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 1391.14 1134.95)", "fill", "#C0C0C0"], ["width", "837.566", "height", "30.7838", "transform", "matrix(0.866041 -0.499972 0.866041 0.499972 1364.48 1119.56)", "fill", "#EDEDED"], ["width", "30.7838", "height", "30.7838", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 2089.8 1241.41)", "fill", "#6E6E6E"], ["width", "837.566", "height", "30.7838", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 1364.44 1660.18)", "fill", "#5A5A5A"], ["width", "30.7838", "height", "837.566", "transform", "matrix(0.866041 0.499972 -0.866041 0.499972 2089.8 1272.19)", "fill", "#EF2A2A"], ["width", "30.7838", "height", "30.7838", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 1364.44 1660.18)", "fill", "#D5D5D5"], ["width", "837.566", "height", "30.7838", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 1391.1 1675.57)", "fill", "#C0C0C0"], ["width", "837.566", "height", "30.7838", "transform", "matrix(0.866041 -0.499972 0.866041 0.499972 1364.44 1660.18)", "fill", "#EDEDED"], ["width", "30.7845", "height", "571.383", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 1365.34 1119.04)", "fill", "#6E6E6E"], ["width", "30.7845", "height", "571.383", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 1338.68 1134.43)", "fill", "#5A5A5A"], ["width", "30.7845", "height", "30.7845", "transform", "matrix(0.866041 0.499972 -0.866041 0.499972 1365.34 1690.42)", "fill", "#EF2A2A"], ["width", "30.7845", "height", "571.383", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 1338.68 1134.43)", "fill", "#D5D5D5"], ["width", "30.7845", "height", "571.383", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 1365.34 1149.82)", "fill", "#C0C0C0"], ["width", "30.7845", "height", "30.7845", "transform", "matrix(0.866041 -0.499972 0.866041 0.499972 1338.68 1134.43)", "fill", "#EDEDED"], ["width", "823.579", "height", "496.907", "transform", "matrix(0.86601 -0.500028 -3.18907e-05 1 1391.1 1165.73)", "fill", "#4F1EB5"], ["d", "M1897.13 1074.97C1897.13 1077.35 1897.06 1079.75 1896.93 1082.16C1901.74 1078.49 1906.67 1075.17 1911.7 1072.26C1962.2 1043.11 2003.13 1066.74 2003.13 1125.05C2003.13 1144.72 1998.47 1165.82 1990.36 1186.27L1557.97 1435.93C1568.11 1384.51 1603.92 1330.15 1646.54 1305.54C1646.87 1305.35 1647.19 1305.17 1647.52 1304.98C1652.85 1260.03 1679.46 1210.78 1714.27 1179.92C1714.57 1121.73 1755.39 1051.24 1805.7 1022.19C1856.2 993.03 1897.13 1016.66 1897.13 1074.97Z", "fill", "#75CEFA"], ["r", "20.2333", "transform", "matrix(0.86601 -0.500028 -3.18595e-05 1 1595.17 1463.5)", "fill", "#E93C63"], ["r", "20.2333", "transform", "matrix(0.86601 -0.500028 -3.18595e-05 1 1881.38 1298.25)", "fill", "#E93C63"], ["r", "20.2333", "transform", "matrix(0.86601 -0.500028 -3.18595e-05 1 1809.82 1339.57)", "fill", "#E93C63"], ["r", "20.2333", "transform", "matrix(0.86601 -0.500028 -3.18595e-05 1 1738.27 1380.88)", "fill", "#E93C63"], ["r", "20.2333", "transform", "matrix(0.86601 -0.500028 -3.18595e-05 1 1666.72 1422.19)", "fill", "#E93C63"], ["r", "20.2333", "transform", "matrix(0.86601 -0.500028 -3.18595e-05 1 1952.93 1256.94)", "fill", "#E93C63"], ["d", "M2104.32 793.009L2104.31 1250.83L1717.25 1474.31C1716.77 1465.64 1716.52 1456.76 1716.52 1447.68C1716.53 1209.6 1883.68 920.089 2089.86 801.042C2094.7 798.246 2099.52 795.568 2104.32 793.009Z", "fill", "white", "fill-opacity", "0.2"], ["width", "350.793", "height", "695.736", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 2257.19 367.467)", "fill", "#75CEFA"], ["width", "345.202", "height", "695.292", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 2560.99 543.307)", "fill", "#0792D7"], ["d", "M2265.24 392.926C2255.95 387.561 2251.64 380.739 2251.64 374.226C2251.64 367.712 2255.95 360.891 2265.24 355.526L2522.44 207.041C2531.73 201.681 2543.99 198.958 2556.33 198.958C2568.68 198.958 2580.94 201.681 2590.23 207.041L2852.09 358.218C2861.38 363.583 2865.69 370.405 2865.69 376.918C2865.69 383.432 2861.38 390.253 2852.09 395.618L2594.89 544.103C2585.61 549.463 2573.34 552.186 2561 552.186C2548.65 552.186 2536.39 549.463 2527.11 544.103L2265.24 392.926Z", "fill", "#75CEFA", "stroke", "#E0F3FC", "stroke-width", "3"], ["x", "1.29897", "y", "0.749959", "width", "292.689", "height", "39.1233", "rx", "8.5", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 2590.07 605.106)", "fill", "#03597A", "stroke", "#E0F3FC", "stroke-width", "3"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2638 597.744)", "fill", "#0792D7"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2797.86 505.438)", "fill", "#0792D7"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2757.9 528.515)", "fill", "#75CEFA"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2717.93 551.591)", "fill", "#75CEFA"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2677.96 574.668)", "fill", "#75CEFA"], ["x", "1.29897", "y", "0.749959", "width", "292.689", "height", "39.1233", "rx", "8.5", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 2590.07 710.13)", "fill", "#03597A", "stroke", "#E0F3FC", "stroke-width", "3"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2638 702.769)", "fill", "#0792D7"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2797.86 610.463)", "fill", "#0792D7"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2757.9 633.539)", "fill", "#75CEFA"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2717.93 656.615)", "fill", "#75CEFA"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2677.96 679.692)", "fill", "#75CEFA"], ["x", "1.29897", "y", "0.749959", "width", "292.689", "height", "39.1233", "rx", "8.5", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 2590.07 815.154)", "fill", "#03597A", "stroke", "#E0F3FC", "stroke-width", "3"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2638 807.793)", "fill", "#0792D7"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2797.86 715.487)", "fill", "#0792D7"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2757.9 738.563)", "fill", "#75CEFA"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2717.93 761.64)", "fill", "#75CEFA"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2677.96 784.716)", "fill", "#75CEFA"], ["x", "1.29897", "y", "0.749959", "width", "292.689", "height", "39.1233", "rx", "8.5", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 2590.07 1025.2)", "fill", "#03597A", "stroke", "#E0F3FC", "stroke-width", "3"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2638 1017.84)", "fill", "#0792D7"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2797.86 925.535)", "fill", "#0792D7"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2757.9 948.612)", "fill", "#75CEFA"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2717.93 971.688)", "fill", "#75CEFA"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2677.96 994.764)", "fill", "#75CEFA"], ["x", "1.29897", "y", "0.749959", "width", "292.689", "height", "39.1233", "rx", "8.5", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 2590.07 920.178)", "fill", "#03597A", "stroke", "#E0F3FC", "stroke-width", "3"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2638 912.817)", "fill", "#0792D7"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2797.86 820.511)", "fill", "#0792D7"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2757.9 843.587)", "fill", "#75CEFA"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2717.93 866.664)", "fill", "#75CEFA"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2677.96 889.74)", "fill", "#75CEFA"], ["x", "1.29897", "y", "0.749959", "width", "292.689", "height", "39.1233", "rx", "8.5", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 2590.07 1130.23)", "fill", "#03597A", "stroke", "#E0F3FC", "stroke-width", "3"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2638 1122.86)", "fill", "#0792D7"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2797.86 1030.56)", "fill", "#0792D7"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2757.9 1053.64)", "fill", "#75CEFA"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2717.93 1076.71)", "fill", "#75CEFA"], ["rx", "11.5631", "ry", "11.5631", "transform", "matrix(0.86601 -0.500028 -3.1848e-05 1 2677.96 1099.79)", "fill", "#75CEFA"], ["x", "1.29897", "y", "-0.749959", "width", "320.708", "height", "50.3976", "rx", "8.5", "transform", "matrix(0.866009 0.500028 -3.18609e-05 -1 2268.22 489.423)", "fill", "#4AAAE6", "stroke", "#168FDB", "stroke-width", "3"], ["width", "49.9728", "height", "12.5246", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2279.2 477.577)", "fill", "#03587A"], ["r", "7.74954", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2341.11 507.063)", "fill", "white"], ["r", "7.74954", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2366.46 521.699)", "fill", "white"], ["r", "7.74954", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2391.81 536.335)", "fill", "#0792D7"], ["width", "31.534", "height", "31.534", "rx", "10", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2509.37 619.98)", "fill", "#C4E9FC"], ["x", "1.29897", "y", "-0.749959", "width", "320.708", "height", "50.3976", "rx", "8.5", "transform", "matrix(0.866009 0.500028 -3.18609e-05 -1 2268.22 1017.2)", "fill", "#4AAAE6", "stroke", "#168FDB", "stroke-width", "3"], ["width", "49.9728", "height", "12.5246", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2279.2 1005.36)", "fill", "#03587A"], ["r", "7.74954", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2341.11 1034.85)", "fill", "white"], ["r", "7.74954", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2366.46 1049.48)", "fill", "white"], ["r", "7.74954", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2391.81 1064.12)", "fill", "#0792D7"], ["width", "31.534", "height", "31.534", "rx", "10", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2509.37 1147.76)", "fill", "#C4E9FC"], ["x", "1.29897", "y", "-0.749959", "width", "320.708", "height", "50.3976", "rx", "8.5", "transform", "matrix(0.866009 0.500028 -3.18609e-05 -1 2268.22 911.648)", "fill", "#4AAAE6", "stroke", "#168FDB", "stroke-width", "3"], ["width", "49.9728", "height", "12.5246", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2279.2 899.803)", "fill", "#03587A"], ["r", "7.74954", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2341.11 929.289)", "fill", "white"], ["r", "7.74954", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2366.46 943.924)", "fill", "white"], ["r", "7.74954", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2391.81 958.561)", "fill", "#0792D7"], ["width", "31.534", "height", "31.534", "rx", "10", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2509.37 1042.21)", "fill", "#C4E9FC"], ["x", "1.29897", "y", "-0.749959", "width", "320.708", "height", "50.3976", "rx", "8.5", "transform", "matrix(0.866009 0.500028 -3.18609e-05 -1 2268.22 806.092)", "fill", "#4AAAE6", "stroke", "#168FDB", "stroke-width", "3"], ["width", "49.9728", "height", "12.5246", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2279.2 794.246)", "fill", "#03587A"], ["r", "7.74954", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2341.11 823.732)", "fill", "white"], ["r", "7.74954", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2366.46 838.368)", "fill", "white"], ["r", "7.74954", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2391.81 853.004)", "fill", "#0792D7"], ["width", "31.534", "height", "31.534", "rx", "10", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2509.37 936.649)", "fill", "#C4E9FC"], ["x", "1.29897", "y", "-0.749959", "width", "320.708", "height", "50.3976", "rx", "8.5", "transform", "matrix(0.866009 0.500028 -3.18609e-05 -1 2268.22 700.535)", "fill", "#4AAAE6", "stroke", "#168FDB", "stroke-width", "3"], ["width", "49.9728", "height", "12.5246", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2279.2 688.69)", "fill", "#03587A"], ["r", "7.74954", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2341.11 718.176)", "fill", "white"], ["r", "7.74954", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2366.46 732.811)", "fill", "white"], ["r", "7.74954", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2391.81 747.448)", "fill", "#0792D7"], ["width", "31.534", "height", "31.534", "rx", "10", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2509.37 831.093)", "fill", "#C4E9FC"], ["x", "1.29897", "y", "-0.749959", "width", "320.708", "height", "50.3976", "rx", "8.5", "transform", "matrix(0.866009 0.500028 -3.18609e-05 -1 2268.22 594.979)", "fill", "#4AAAE6", "stroke", "#168FDB", "stroke-width", "3"], ["width", "49.9728", "height", "12.5246", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2279.2 583.134)", "fill", "#03587A"], ["r", "7.74954", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2341.11 612.62)", "fill", "white"], ["r", "7.74954", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2366.46 627.255)", "fill", "white"], ["r", "7.74954", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2391.81 641.891)", "fill", "#0792D7"], ["width", "31.534", "height", "31.534", "rx", "10", "transform", "matrix(0.866009 0.500028 -3.18596e-05 -1 2509.37 725.537)", "fill", "#C4E9FC"], ["width", "230.746", "height", "230.746", "transform", "matrix(0.866041 -0.499972 0.866041 0.499972 2347.82 375.572)", "fill", "#03597A"], ["r", "12.9041", "transform", "matrix(0.866041 0.499972 -0.866041 0.499972 2502.99 349.788)", "fill", "white"], ["r", "12.9041", "transform", "matrix(0.866041 0.499972 -0.866041 0.499972 2592.32 401.356)", "fill", "white"], ["rx", "24.7134", "ry", "24.7134", "transform", "matrix(0.866041 0.499972 -0.866041 0.499972 2547.66 375.572)", "fill", "white"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1440.69 228.977C1437.96 226.999 1435.16 225.15 1432.28 223.434L1316.41 118.429C1273.86 88.4742 1212.22 89.7867 1143.64 129.381C1015.22 203.528 911.118 383.846 911.114 532.131C800.275 596.129 707.547 739.22 684.235 872.542C673.394 877.012 662.312 882.485 651.043 888.991C569.616 936.007 497.963 1025.71 456.427 1122.87L579.355 1232.45L1774.78 542.219C1778.56 520.835 1780.55 499.698 1780.55 479.175C1780.56 423.112 1765.68 379.654 1740.23 351.291L1740.91 351.903C1739.46 350.314 1737.98 348.773 1736.46 347.28C1731.78 342.522 1726.78 338.24 1721.47 334.448L1610.24 234.571C1570.42 198.336 1509.6 193.989 1440.69 228.977ZM1499.07 375.212C1499.06 376.544 1499.05 377.879 1499.02 379.217C1499.04 379.203 1499.06 379.189 1499.07 379.175C1499.08 378.531 1499.08 377.888 1499.08 377.246C1499.08 376.566 1499.08 375.888 1499.07 375.212Z", "fill", "#0792D7"], ["d", "M1500.37 380.564C1516.17 367.522 1532.57 355.992 1549.39 346.282C1618.74 306.239 1681 305.35 1723.6 336.359L1740.91 351.904C1735.58 346.061 1729.8 340.872 1723.6 336.359L1610.24 234.572C1569.78 197.755 1507.64 193.858 1437.36 230.693C1475.67 256.438 1499.08 306.927 1499.08 377.246C1499.08 377.965 1499.08 378.686 1499.07 379.407L1500.37 380.564Z", "fill", "black", "fill-opacity", "0.1"], ["d", "M807.162 982.127C796.322 986.597 785.24 992.07 773.971 998.577C692.544 1045.59 620.891 1135.29 579.355 1232.45L456.427 1122.87C497.964 1025.71 569.616 936.007 651.043 888.991C662.312 882.485 673.394 877.012 684.235 872.542L807.162 982.127Z", "fill", "white", "fill-opacity", "0.9"], ["d", "M1034.04 641.717C923.202 705.714 830.474 848.805 807.162 982.126L684.235 872.541C707.547 739.22 800.275 596.129 911.113 532.131L1034.04 641.717Z", "fill", "white", "fill-opacity", "0.8"], ["d", "M1266.57 238.967C1138.15 313.114 1034.05 493.431 1034.04 641.717L911.114 532.131C911.118 383.846 1015.22 203.528 1143.64 129.381C1212.22 89.7867 1273.86 88.4742 1316.41 118.429L1432.28 223.434C1390.1 198.313 1331.44 201.511 1266.57 238.967Z", "fill", "white", "fill-opacity", "0.7"], ["width", "15.8412", "height", "284.831", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 781.39 1646.97)", "fill", "#6E6E6E"], ["width", "172.728", "height", "284.831", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 631.804 1733.33)", "fill", "#5A5A5A"], ["width", "15.8412", "height", "172.728", "transform", "matrix(0.866041 0.499972 -0.866041 0.499972 781.39 1931.8)", "fill", "#AAAAAA"], ["width", "15.8412", "height", "284.831", "transform", "matrix(0.86601 0.500028 3.18351e-05 1 631.803 1733.33)", "fill", "#BEBEBE"], ["width", "172.728", "height", "284.831", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 645.522 1741.25)", "fill", "#969696"], ["width", "172.728", "height", "15.8412", "transform", "matrix(0.866041 -0.499972 0.866041 0.499972 631.803 1733.33)", "fill", "#828282"], ["width", "157.295", "height", "232.925", "transform", "matrix(0.866009 -0.500028 -3.18609e-05 1 654.336 1748.06)", "fill", "#4F1EB5"], ["r", "12.4679", "transform", "matrix(0.86601 -0.500028 -3.18351e-05 1 724.252 1960.24)", "fill", "#464646"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M790.552 1767.37L790.548 1902.34L674.318 1969.45C686.163 1895 732.122 1815.15 790.552 1767.37Z", "fill", "white", "fill-opacity", "0.2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M2106.5 1707.65C2103.68 1702.89 2105.25 1696.76 2110 1693.94L2169.57 1658.64C2174.32 1655.83 2180.46 1657.4 2183.27 1662.15C2186.09 1666.9 2184.52 1673.03 2179.77 1675.85L2120.2 1711.15C2115.45 1713.97 2109.31 1712.4 2106.5 1707.65Z", "fill", "#A67BFF"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M2334.39 1575.62C2331.57 1570.87 2333.14 1564.74 2337.9 1561.92L2397.47 1526.62C2402.22 1523.8 2408.35 1525.37 2411.17 1530.12C2413.98 1534.88 2412.41 1541.01 2407.66 1543.82L2348.09 1579.13C2343.34 1581.94 2337.21 1580.37 2334.39 1575.62Z", "fill", "#A67BFF"]], template: function IllustrationAccompagnementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rect", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "rect", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rect", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "rect", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "rect", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "rect", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "rect", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "rect", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "rect", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "rect", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "rect", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "rect", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "rect", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "rect", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "rect", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "rect", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "rect", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "rect", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "rect", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "rect", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "rect", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "rect", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "rect", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "rect", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "rect", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "rect", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "rect", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "rect", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "rect", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "rect", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "rect", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "rect", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "rect", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "rect", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "rect", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "circle", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "circle", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "circle", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "circle", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "circle", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "circle", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "rect", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "rect", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "rect", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "ellipse", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "ellipse", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "ellipse", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "ellipse", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "ellipse", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "rect", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "ellipse", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "ellipse", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "ellipse", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "ellipse", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "ellipse", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "rect", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "ellipse", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "ellipse", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "ellipse", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "ellipse", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "ellipse", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "rect", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "ellipse", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "ellipse", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "ellipse", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "ellipse", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "ellipse", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "rect", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "ellipse", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "ellipse", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "ellipse", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "ellipse", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "ellipse", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "rect", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "ellipse", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "ellipse", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "ellipse", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "ellipse", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "ellipse", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "rect", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "rect", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "circle", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "circle", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "circle", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "rect", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "rect", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "rect", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "circle", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "circle", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "circle", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "rect", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "rect", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "rect", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "circle", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "circle", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "circle", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "rect", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "rect", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "rect", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "circle", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "circle", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "circle", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "rect", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "rect", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "rect", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "circle", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "circle", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "circle", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "rect", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "rect", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "rect", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "circle", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "circle", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "circle", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "rect", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "rect", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "circle", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "circle", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "ellipse", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "path", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "path", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "path", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "path", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "rect", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "rect", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "rect", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "rect", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "rect", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "rect", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "rect", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "circle", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "path", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "path", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "path", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbGx1c3RyYXRpb24tYWNjb21wYWduZW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _page_home_page_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-home/page-home.component */ "O4QB");
/* harmony import */ var _page_realisations_page_realisations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-realisations/page-realisations.component */ "PZ0w");
/* harmony import */ var _page_home_sections_section_presentation_section_presentation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-home/sections/section-presentation/section-presentation.component */ "oE1+");
/* harmony import */ var _page_home_sections_section_audit_section_audit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-home/sections/section-audit/section-audit.component */ "e5GX");
/* harmony import */ var _page_home_sections_section_conception_section_conception_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-home/sections/section-conception/section-conception.component */ "Y+9V");
/* harmony import */ var _page_home_sections_section_developpement_section_developpement_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-home/sections/section-developpement/section-developpement.component */ "JOQT");
/* harmony import */ var _page_home_sections_section_accompagnement_section_accompagnement_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-home/sections/section-accompagnement/section-accompagnement.component */ "JZDR");
/* harmony import */ var _page_home_sections_section_realisations_section_realisations_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-home/sections/section-realisations/section-realisations.component */ "b6UP");
/* harmony import */ var _page_home_sections_section_contact_section_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-home/sections/section-contact/section-contact.component */ "VX8R");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/header/header.component */ "320Y");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");
/* harmony import */ var _shared_logo_linkedin_logo_linkedin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/logo-linkedin/logo-linkedin.component */ "hrOu");
/* harmony import */ var _shared_logo_dribbble_logo_dribbble_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/logo-dribbble/logo-dribbble.component */ "JSry");
/* harmony import */ var _shared_illustration_presentation_illustration_presentation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/illustration-presentation/illustration-presentation.component */ "eKob");
/* harmony import */ var _shared_illustration_audit_illustration_audit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/illustration-audit/illustration-audit.component */ "dZAL");
/* harmony import */ var _shared_illustration_conception_illustration_conception_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/illustration-conception/illustration-conception.component */ "Xy+Y");
/* harmony import */ var _shared_illustration_developpement_illustration_developpement_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/illustration-developpement/illustration-developpement.component */ "NCQS");
/* harmony import */ var _shared_illustration_accompagnement_illustration_accompagnement_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/illustration-accompagnement/illustration-accompagnement.component */ "YOn9");
/* harmony import */ var _shared_logo_reseaux_logo_reseaux_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/logo-reseaux/logo-reseaux.component */ "wPIg");
/* harmony import */ var _shared_realisation_card_realisation_card_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/realisation-card/realisation-card.component */ "TLQx");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _page_realisation_page_realisation_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./page-realisation/page-realisation.component */ "hA6M");
/* harmony import */ var _shared_slides_slides_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/slides/slides.component */ "0q0b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ "fXoL");





























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_24__["MarkdownModule"].forRoot({ loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _page_home_page_home_component__WEBPACK_IMPORTED_MODULE_4__["PageHomeComponent"],
        _page_realisations_page_realisations_component__WEBPACK_IMPORTED_MODULE_5__["PageRealisationsComponent"],
        _page_home_sections_section_presentation_section_presentation_component__WEBPACK_IMPORTED_MODULE_6__["SectionPresentationComponent"],
        _page_home_sections_section_audit_section_audit_component__WEBPACK_IMPORTED_MODULE_7__["SectionAuditComponent"],
        _page_home_sections_section_conception_section_conception_component__WEBPACK_IMPORTED_MODULE_8__["SectionConceptionComponent"],
        _page_home_sections_section_developpement_section_developpement_component__WEBPACK_IMPORTED_MODULE_9__["SectionDeveloppementComponent"],
        _page_home_sections_section_accompagnement_section_accompagnement_component__WEBPACK_IMPORTED_MODULE_10__["SectionAccompagnementComponent"],
        _page_home_sections_section_realisations_section_realisations_component__WEBPACK_IMPORTED_MODULE_11__["SectionRealisationsComponent"],
        _page_home_sections_section_contact_section_contact_component__WEBPACK_IMPORTED_MODULE_12__["SectionContactComponent"],
        _shared_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
        _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
        _shared_logo_linkedin_logo_linkedin_component__WEBPACK_IMPORTED_MODULE_15__["LogoLinkedinComponent"],
        _shared_logo_dribbble_logo_dribbble_component__WEBPACK_IMPORTED_MODULE_16__["LogoDribbbleComponent"],
        _shared_illustration_presentation_illustration_presentation_component__WEBPACK_IMPORTED_MODULE_17__["IllustrationPresentationComponent"],
        _shared_illustration_audit_illustration_audit_component__WEBPACK_IMPORTED_MODULE_18__["IllustrationAuditComponent"],
        _shared_illustration_conception_illustration_conception_component__WEBPACK_IMPORTED_MODULE_19__["IllustrationConceptionComponent"],
        _shared_illustration_developpement_illustration_developpement_component__WEBPACK_IMPORTED_MODULE_20__["IllustrationDeveloppementComponent"],
        _shared_illustration_accompagnement_illustration_accompagnement_component__WEBPACK_IMPORTED_MODULE_21__["IllustrationAccompagnementComponent"],
        _shared_logo_reseaux_logo_reseaux_component__WEBPACK_IMPORTED_MODULE_22__["LogoReseauxComponent"],
        _shared_realisation_card_realisation_card_component__WEBPACK_IMPORTED_MODULE_23__["RealisationCardComponent"],
        _page_realisation_page_realisation_component__WEBPACK_IMPORTED_MODULE_25__["PageRealisationComponent"],
        _shared_slides_slides_component__WEBPACK_IMPORTED_MODULE_26__["SlidesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_24__["MarkdownModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "b6UP":
/*!*******************************************************************************************!*\
  !*** ./src/app/page-home/sections/section-realisations/section-realisations.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SectionRealisationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionRealisationsComponent", function() { return SectionRealisationsComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_realisation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/realisation.service */ "XpdA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_realisation_card_realisation_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/realisation-card/realisation-card.component */ "TLQx");






function SectionRealisationsComponent_app_realisation_card_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-realisation-card", 11);
} if (rf & 2) {
    const realisation_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("realisation", realisation_r1);
} }
class SectionRealisationsComponent {
    constructor(realisationService) {
        this.realisationService = realisationService;
        this.realisations = [].fill(undefined);
    }
    ngOnInit() {
        this.realisationService.loadRealisations()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(r => r.slice(0, 6)))
            .subscribe(x => {
            // toujours 6 éléments
            this.realisations = x.concat(new Array(6)).slice(0, 6);
        });
    }
}
SectionRealisationsComponent.ɵfac = function SectionRealisationsComponent_Factory(t) { return new (t || SectionRealisationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_realisation_service__WEBPACK_IMPORTED_MODULE_2__["RealisationService"])); };
SectionRealisationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SectionRealisationsComponent, selectors: [["app-section-realisations"]], decls: 15, vars: 1, consts: [["id", "realisations"], [1, "decor"], ["width", "400", "height", "101", "viewBox", "0 0 400 101", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M399.642 100.878H1.73798e-05L0 0.314453C9.25352 13.1789 19.2286 24.6056 30.3938 33.3782C63.7112 59.5562 98.1474 50.4944 132.445 41.4691C163.001 33.4285 193.447 25.4168 222.894 42.3782C234.653 49.1515 244.625 55.4469 253.744 61.2044C293.095 86.0483 316.585 100.878 399.394 100.878C399.477 100.878 399.559 100.878 399.642 100.878Z", "fill", "#6B41A6"], [1, "line-decor"], [1, "container"], [1, "line", "left"], [1, "container", "text-align-center"], [1, "content", "grid-three-columns", "d-grid"], [3, "realisation", 4, "ngFor", "ngForOf"], ["routerLink", "realisations", 1, "all"], [3, "realisation"]], template: function SectionRealisationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Mes r\u00E9alisations");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SectionRealisationsComponent_app_realisation_card_12_Template, 1, 1, "app-realisation-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Voir toutes les r\u00E9alisations");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.realisations);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _shared_realisation_card_realisation_card_component__WEBPACK_IMPORTED_MODULE_5__["RealisationCardComponent"]], styles: ["section[_ngcontent-%COMP%] {\n  background-color: var(--secondary-color);\n  color: var(--text-contrast);\n  padding-top: 5rem;\n  padding-bottom: 2rem;\n}\nsection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\nsection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-contrast);\n}\nsection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--text-contrast);\n}\nsection[_ngcontent-%COMP%]   a.all[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 1rem 2rem;\n  margin-top: 2rem;\n}\n.decor[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -100px;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NlY3Rpb24tcmVhbGlzYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksd0NBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFBSjtBQUNJO0VBQ0ksbUJBQUE7QUFDUjtBQUNJO0VBQ0ksMkJBQUE7QUFDUjtBQUFRO0VBQ0ksMkJBQUE7QUFFWjtBQUFRO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRVo7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7QUFBSiIsImZpbGUiOiJzZWN0aW9uLXJlYWxpc2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuc2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb250cmFzdCk7XG4gICAgcGFkZGluZy10b3A6IDVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgaDIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIH1cbiAgICBhIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29udHJhc3QpO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbnRyYXN0KTtcbiAgICAgICAgfVxuICAgICAgICAmLmFsbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4uZGVjb3Ige1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xMDBweDtcbiAgICBsZWZ0OiAwO1xufSJdfQ== */"] });


/***/ }),

/***/ "dZAL":
/*!***************************************************************************!*\
  !*** ./src/app/shared/illustration-audit/illustration-audit.component.ts ***!
  \***************************************************************************/
/*! exports provided: IllustrationAuditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IllustrationAuditComponent", function() { return IllustrationAuditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class IllustrationAuditComponent {
    constructor() { }
    ngOnInit() {
    }
}
IllustrationAuditComponent.ɵfac = function IllustrationAuditComponent_Factory(t) { return new (t || IllustrationAuditComponent)(); };
IllustrationAuditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IllustrationAuditComponent, selectors: [["app-illustration-audit"]], decls: 247, vars: 0, consts: [["width", "100%", "height", "100%", "viewBox", "0 0 2506 1864", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0)"], ["width", "832", "height", "1078", "transform", "matrix(0.866025 -0.5 0.864976 0.501813 409.398 1056.55)", "fill", "black", "fill-opacity", "0.3"], ["width", "832", "height", "1078", "transform", "matrix(0.866025 -0.5 0.864976 0.501813 409.398 1033.55)", "fill", "white"], ["r", "48.5", "transform", "matrix(0.866025 -0.5 0.864976 0.501813 590.287 1034.74)", "fill", "#C4C4C4"], ["r", "37.5", "transform", "matrix(0.866025 -0.5 0.864976 0.501813 590.287 1034.74)", "fill", "white"], ["r", "20.5", "transform", "matrix(0.866025 -0.5 0.864976 0.501813 590.287 1034.74)", "fill", "#C4C4C4"], ["r", "15.5", "transform", "matrix(0.866025 -0.5 0.864976 0.501813 590.287 1034.74)", "fill", "white"], ["width", "327", "height", "17", "rx", "8.5", "transform", "matrix(0.866025 -0.5 0.864976 0.501813 635.359 971.172)", "fill", "#C4C4C4"], ["width", "588", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.864976 0.501813 666.498 989.237)", "fill", "#C4C4C4"], ["width", "545", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.864976 0.501813 685.528 1000.28)", "fill", "#C4C4C4"], ["width", "65", "height", "8", "rx", "4", "transform", "matrix(0.866025 -0.5 0.864976 0.501813 679.348 1115.98)", "fill", "#C4C4C4"], ["width", "35", "height", "8", "rx", "4", "transform", "matrix(0.866025 -0.5 0.864976 0.501813 691.458 1123.01)", "fill", "#C4C4C4"], ["width", "715", "height", "4", "transform", "matrix(0.866025 -0.5 0.864976 0.501813 629.171 1094.89)", "fill", "#C4C4C4"], ["d", "M795.396 1048.98C821.341 1034 854.817 1024.16 891.036 1020.87C927.255 1017.57 964.359 1020.99 997.042 1030.64C1029.72 1040.29 1056.31 1055.66 1073 1074.57C1089.68 1093.48 1095.61 1114.96 1089.94 1135.92C1084.26 1156.88 1067.28 1176.26 1041.41 1191.29C1015.54 1206.31 982.113 1216.21 945.911 1219.56C909.709 1222.92 872.588 1219.56 839.856 1209.97C807.125 1200.38 780.462 1185.04 763.681 1166.16L783.237 1160.35C797.895 1176.84 821.184 1190.24 849.773 1198.61C878.362 1206.99 910.787 1209.92 942.407 1206.99C974.028 1204.06 1003.22 1195.42 1025.82 1182.3C1048.42 1169.17 1063.25 1152.25 1068.21 1133.94C1073.16 1115.63 1067.98 1096.87 1053.41 1080.35C1038.84 1063.84 1015.61 1050.4 987.068 1041.98C958.521 1033.55 926.112 1030.56 894.476 1033.44C862.841 1036.32 833.601 1044.91 810.939 1058L795.396 1048.98Z", "fill", "#8E1BE9"], ["d", "M823.075 1065.04C839.169 1055.75 859.074 1048.97 880.931 1045.34C902.788 1041.71 925.884 1041.34 948.066 1044.27C970.247 1047.21 990.789 1053.34 1007.77 1062.11C1024.76 1070.88 1037.64 1081.99 1045.2 1094.41C1052.76 1106.83 1054.77 1120.16 1051.03 1133.14C1047.29 1146.12 1037.93 1158.34 1023.81 1168.66C1009.7 1178.97 991.297 1187.05 970.323 1192.13C949.348 1197.21 926.485 1199.13 903.867 1197.71L905.684 1187.9C925.439 1189.14 945.409 1187.47 963.73 1183.03C982.05 1178.59 998.124 1171.54 1010.45 1162.53C1022.78 1153.52 1030.96 1142.85 1034.22 1131.51C1037.49 1120.17 1035.74 1108.53 1029.13 1097.68C1022.53 1086.83 1011.28 1077.13 996.442 1069.47C981.606 1061.81 963.663 1056.45 944.289 1053.89C924.915 1051.32 904.741 1051.64 885.65 1054.82C866.558 1057.99 849.173 1063.91 835.115 1072.02L823.075 1065.04Z", "fill", "#34CEF0"], ["d", "M850.754 1081.1C865.541 1072.56 884.766 1067.07 905.479 1065.47C926.192 1063.87 947.247 1066.25 965.415 1072.24C983.583 1078.23 997.859 1087.5 1006.05 1098.64C1014.25 1109.77 1015.9 1122.15 1010.77 1133.87L999.06 1132.14C1003.54 1121.91 1002.09 1111.09 994.938 1101.37C987.781 1091.65 975.312 1083.55 959.443 1078.31C943.574 1073.08 925.183 1071 907.092 1072.4C889 1073.8 872.208 1078.59 859.292 1086.05L850.754 1081.1Z", "fill", "#EB1818"], ["width", "832", "height", "1078", "transform", "matrix(0.866025 -0.5 0.864976 0.501813 387 949)", "fill", "black", "fill-opacity", "0.1"], ["width", "832", "height", "1078", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 388 927)", "fill", "white"], ["r", "48.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 568.451 928.938)", "fill", "#C4C4C4"], ["r", "37.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 568.451 928.938)", "fill", "white"], ["r", "20.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 568.451 928.938)", "fill", "#C4C4C4"], ["r", "15.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 568.451 928.938)", "fill", "white"], ["width", "327", "height", "17", "rx", "8.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 613.679 865.105)", "fill", "#C4C4C4"], ["width", "588", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 644.669 883.425)", "fill", "#C4C4C4"], ["width", "545", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 663.608 894.62)", "fill", "#C4C4C4"], ["width", "726", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 846.248 1142.24)", "fill", "#C4C4C4"], ["width", "673", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 865.186 1153.44)", "fill", "#C4C4C4"], ["width", "107", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1289.92 1002.77)", "fill", "#C4C4C4"], ["width", "107", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1487.91 1119.82)", "fill", "#C4C4C4"], ["width", "329", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1515.45 1136.1)", "fill", "#C4C4C4"], ["width", "329", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1530.95 1145.26)", "fill", "#C4C4C4"], ["width", "329", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1549.89 1156.46)", "fill", "#C4C4C4"], ["width", "377", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 883.888 875.072)", "fill", "#C4C4C4"], ["width", "377", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 899.383 884.232)", "fill", "#C4C4C4"], ["width", "377", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 918.322 895.427)", "fill", "#C4C4C4"], ["width", "145", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1568.83 1167.65)", "fill", "#C4C4C4"], ["width", "63", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1326.07 1024.15)", "fill", "#C4C4C4"], ["width", "49", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1343.29 1034.32)", "fill", "#C4C4C4"], ["width", "54", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1362.23 1045.52)", "fill", "#C4C4C4"], ["width", "63", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1476.76 937.146)", "fill", "#C4C4C4"], ["width", "31", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1521.69 931.324)", "fill", "#C4C4C4"], ["width", "31", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1540.63 942.519)", "fill", "#C4C4C4"], ["width", "63", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1556.43 891.146)", "fill", "#C4C4C4"], ["width", "31", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1601.36 885.324)", "fill", "#C4C4C4"], ["width", "31", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1620.3 896.519)", "fill", "#C4C4C4"], ["width", "49", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1379.44 1055.7)", "fill", "#C4C4C4"], ["width", "54", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1398.38 1066.89)", "fill", "#C4C4C4"], ["width", "31", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1557.84 952.697)", "fill", "#C4C4C4"], ["width", "31", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1576.78 963.893)", "fill", "#C4C4C4"], ["width", "31", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1637.52 906.697)", "fill", "#C4C4C4"], ["width", "31", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1656.46 917.893)", "fill", "#C4C4C4"], ["width", "49", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1415.6 1077.07)", "fill", "#C4C4C4"], ["width", "54", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1434.54 1088.27)", "fill", "#C4C4C4"], ["width", "31", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1594 974.071)", "fill", "#C4C4C4"], ["width", "31", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1612.94 985.266)", "fill", "#C4C4C4"], ["width", "31", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1673.67 928.071)", "fill", "#C4C4C4"], ["width", "31", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 1692.61 939.266)", "fill", "#C4C4C4"], ["width", "84", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 656.061 1018.68)", "fill", "#C4C4C4"], ["width", "45", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 671.556 1027.84)", "fill", "#C4C4C4"], ["width", "84", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 955.63 1195.77)", "fill", "#C4C4C4"], ["width", "45", "height", "11", "rx", "5.5", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 971.125 1204.93)", "fill", "#C4C4C4"], ["width", "715", "height", "4", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 606.994 989.672)", "fill", "#C4C4C4"], ["width", "35", "height", "56", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 767.969 1084.83)", "fill", "#DA3434"], ["width", "35", "height", "91", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 780.275 1042.52)", "fill", "#ECCD2C"], ["width", "35", "height", "131", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 788.277 997.667)", "fill", "#35A2DF"], ["width", "35", "height", "168", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 798.862 954.338)", "fill", "#CB2DE4"], ["width", "35", "height", "193", "transform", "matrix(0.866025 -0.5 0.860831 0.508891 819.776 917.116)", "fill", "#45CE52"], ["d", "M1106.32 1108.77C1140.12 1089.26 1183.68 1076.52 1230.77 1072.39C1277.87 1068.26 1326.07 1072.95 1368.5 1085.78C1410.92 1098.61 1445.39 1118.93 1466.98 1143.83C1488.56 1168.73 1496.15 1196.93 1488.67 1224.41C1481.18 1251.88 1459 1277.22 1425.29 1296.79C1391.59 1316.36 1348.09 1329.17 1301.02 1333.38C1253.95 1337.59 1205.73 1332.99 1163.24 1320.23C1120.75 1307.47 1086.18 1287.21 1064.47 1262.35L1089.92 1254.83C1108.88 1276.55 1139.07 1294.24 1176.19 1305.39C1213.3 1316.53 1255.42 1320.55 1296.54 1316.87C1337.65 1313.2 1375.64 1302.01 1405.08 1284.91C1434.52 1267.81 1453.9 1245.68 1460.44 1221.69C1466.98 1197.69 1460.34 1173.06 1441.49 1151.31C1422.64 1129.56 1392.53 1111.81 1355.47 1100.6C1318.42 1089.4 1276.31 1085.3 1235.18 1088.91C1194.05 1092.52 1156 1103.64 1126.47 1120.69L1106.32 1108.77Z", "fill", "#30C6C6"], ["d", "M1142.47 1130.15C1163.4 1118.07 1189.25 1109.3 1217.61 1104.66C1245.98 1100.02 1275.93 1099.67 1304.69 1103.62C1333.44 1107.58 1360.04 1115.73 1382.03 1127.3C1404.01 1138.86 1420.65 1153.48 1430.39 1169.78C1440.13 1186.08 1442.66 1203.54 1437.74 1220.52C1432.82 1237.49 1420.61 1253.44 1402.25 1266.87C1383.89 1280.3 1359.98 1290.77 1332.75 1297.31C1305.52 1303.85 1275.86 1306.24 1246.54 1304.26L1248.95 1291.44C1274.56 1293.17 1300.47 1291.08 1324.25 1285.36C1348.04 1279.65 1368.92 1270.51 1384.96 1258.78C1400.99 1247.05 1411.66 1233.12 1415.95 1218.29C1420.25 1203.46 1418.04 1188.21 1409.53 1173.98C1401.02 1159.74 1386.49 1146.97 1367.29 1136.87C1348.09 1126.76 1324.85 1119.65 1299.74 1116.19C1274.62 1112.73 1248.46 1113.04 1223.68 1117.09C1198.91 1121.15 1176.33 1128.8 1158.05 1139.35L1142.47 1130.15Z", "fill", "#2EBD2B"], ["d", "M1178.63 1151.52C1197.78 1140.46 1222.64 1133.41 1249.4 1131.43C1276.17 1129.45 1303.36 1132.67 1326.79 1140.57C1350.23 1148.48 1368.62 1160.65 1379.14 1175.21C1389.67 1189.78 1391.74 1205.92 1385.05 1221.18L1369.93 1218.87C1375.78 1205.54 1373.97 1191.44 1364.77 1178.72C1355.58 1166 1339.52 1155.37 1319.05 1148.46C1298.57 1141.56 1274.83 1138.75 1251.45 1140.48C1228.07 1142.2 1206.36 1148.37 1189.63 1158.02L1178.63 1151.52Z", "fill", "#E4C938"], ["d", "M1574.34 1495.29C1561.75 1488.24 1548.32 1509.27 1552.73 1557.61L1972 1792.41C1965.68 1754.98 1950.52 1678.7 1940.46 1673.06C1927.87 1666.01 1940.68 1700.45 1924.7 1691.5C1908.72 1682.55 1917.74 1638.06 1900.56 1628.44C1883.38 1618.82 1907.33 1727.64 1888.96 1717.35C1870.58 1707.06 1881.65 1660.03 1869.06 1652.98C1856.48 1645.94 1853.54 1686.48 1838.76 1678.2C1823.98 1669.92 1826.06 1586.71 1810.08 1577.76C1794.1 1568.81 1805.95 1605.31 1792.17 1597.59C1778.39 1589.87 1781.69 1528.33 1770.1 1521.84C1758.51 1515.35 1761.94 1550.8 1751.55 1544.98C1741.16 1539.17 1738.08 1492.87 1722.1 1483.92C1706.12 1474.97 1719.57 1622.49 1703.59 1613.54C1687.61 1604.59 1686.54 1522.21 1676.16 1516.39C1665.77 1510.57 1665.82 1546.52 1654.44 1540.14C1643.05 1533.77 1640.49 1482.79 1627.9 1475.74C1615.32 1468.69 1617.83 1579.35 1606.24 1572.87C1594.66 1566.38 1586.92 1502.33 1574.34 1495.29Z", "fill", "#D731B2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1597.28 1556.56L1552.11 1531.26C1551.67 1538.88 1551.82 1547.67 1552.73 1557.61L1972 1792.41C1970.62 1784.24 1968.82 1774.21 1966.74 1763.47L1611.72 1564.65C1610.3 1570.8 1608.55 1574.16 1606.24 1572.87C1603.02 1571.06 1600.1 1564.81 1597.28 1556.56Z", "fill", "black", "fill-opacity", "0.1"], ["d", "M1569.48 1549.19C1556.9 1542.14 1547.87 1572.34 1547.87 1584.96L1967.15 1819.76C1960.83 1782.33 1951.55 1776.55 1941.48 1770.91C1928.9 1763.86 1934.57 1779.86 1918.59 1770.91C1902.61 1761.96 1912.89 1728.47 1895.71 1718.85C1878.53 1709.23 1902.48 1761.05 1884.1 1750.76C1865.73 1740.47 1876.79 1711.56 1864.21 1704.52C1851.62 1697.47 1848.69 1727.13 1833.9 1718.85C1819.12 1710.57 1821.2 1650.28 1805.22 1641.33C1789.24 1632.38 1801.1 1669.65 1787.32 1661.93C1773.53 1654.22 1776.83 1595.16 1765.25 1588.67C1753.66 1582.18 1757.08 1638.22 1746.7 1632.4C1736.31 1626.58 1733.22 1593.91 1717.24 1584.96C1701.26 1576.01 1714.72 1614.06 1698.74 1605.11C1682.76 1596.16 1681.69 1578.15 1671.3 1572.34C1660.91 1566.52 1660.97 1617.49 1649.58 1611.11C1638.2 1604.73 1635.63 1587.48 1623.05 1580.43C1610.47 1573.38 1607.59 1605.23 1596.01 1598.75C1584.42 1592.26 1582.07 1556.24 1569.48 1549.19Z", "fill", "#3FB52C"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1931.25 1771.67L1957.42 1786.33C1961.1 1793.22 1964.4 1803.51 1967.15 1819.76L1547.87 1584.96C1547.87 1578.79 1550.03 1568.41 1553.71 1560.24L1584.18 1577.3C1587.43 1586.88 1590.78 1595.82 1596.01 1598.75C1601.36 1601.74 1604.85 1596.56 1608.3 1590.81L1829.97 1714.95C1831.14 1716.7 1832.44 1718.03 1833.9 1718.85C1835.99 1720.02 1837.84 1720.43 1839.52 1720.3L1875.01 1740.17C1876.75 1744.45 1879.5 1748.19 1884.1 1750.76C1888.48 1753.21 1890.45 1752.14 1891.16 1749.22L1910.6 1760.11C1912.15 1764.77 1914.52 1768.63 1918.59 1770.91C1926.51 1775.35 1929.11 1773.65 1931.25 1771.67Z", "fill", "black", "fill-opacity", "0.1"], ["d", "M1548.64 1590.95C1536.05 1583.91 1531.82 1589.15 1531.82 1601.77L1951.09 1836.58C1944.77 1799.14 1937.83 1818.21 1927.76 1812.57C1915.18 1805.52 1918.51 1796.67 1902.53 1787.72C1886.55 1778.77 1902.82 1765.18 1885.64 1755.56C1868.46 1745.94 1886.43 1777.87 1868.05 1767.58C1849.67 1757.28 1853.35 1745.9 1840.76 1738.85C1828.18 1731.8 1832.63 1743.94 1817.85 1735.66C1803.07 1727.39 1801.34 1692.17 1785.36 1683.22C1769.38 1674.27 1777.39 1701.47 1763.61 1693.75C1749.83 1686.03 1754.36 1673.45 1742.78 1666.96C1731.19 1660.48 1733.02 1677.59 1722.63 1671.77C1712.24 1665.95 1720.07 1652.56 1704.09 1643.61C1688.11 1634.66 1693.28 1672.02 1677.3 1663.07C1661.32 1654.12 1668 1617.83 1657.61 1612.02C1647.23 1606.2 1642.9 1642.89 1631.51 1636.51C1620.13 1630.14 1616.85 1619.06 1604.27 1612.02C1591.69 1604.97 1591.54 1622.05 1579.96 1615.56C1568.37 1609.07 1561.22 1598 1548.64 1590.95Z", "fill", "#EEE62C"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1680.93 1664.4L1909.05 1792.16C1912.89 1795.39 1914.94 1798.56 1916.91 1801.61C1919.45 1805.54 1921.85 1809.26 1927.76 1812.57C1930.89 1814.32 1933.72 1813.69 1936.32 1813.11C1942.08 1811.82 1946.74 1810.77 1951.09 1836.58L1531.82 1601.77C1531.82 1589.15 1536.05 1583.91 1548.64 1590.95C1555.06 1594.55 1560.07 1599.2 1564.97 1603.74C1569.67 1608.11 1574.28 1612.38 1579.96 1615.56C1585.35 1618.58 1588.27 1616.49 1591.11 1614.11L1673.94 1660.49C1674.94 1661.5 1676.05 1662.37 1677.3 1663.07C1678.65 1663.83 1679.85 1664.25 1680.93 1664.4Z", "fill", "black", "fill-opacity", "0.1"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1317.9 689.031L1108.78 575L904 689.031V781L1111.25 896.788L1318 781V689.031L1317.9 689.031Z", "fill", "#10BE17"], ["width", "237.531", "height", "91.5724", "transform", "matrix(0.872496 -0.488621 0 1 1110.75 805.094)", "fill", "black", "fill-opacity", "0.1"], ["d", "M1317.9 689.031L1111.15 805.034L904 689.031L1108.78 575L1317.9 689.031Z", "fill", "white", "fill-opacity", "0.1"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1553.9 718.031L1344.78 604L1140 718.031L1140 916.5L1346.75 1032.29H1347.25L1554 916.5V718.031L1553.9 718.031Z", "fill", "#EDC949"], ["width", "237.531", "height", "199.312", "transform", "matrix(0.872496 -0.488621 0 1 1346.75 834.094)", "fill", "black", "fill-opacity", "0.1"], ["d", "M1553.9 718.031L1347.15 834.034L1140 718.031L1344.78 604L1553.9 718.031Z", "fill", "white", "fill-opacity", "0.1"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1801.9 750.031L1592.78 636L1388 750.031V1050.69L1594.75 1166.48V1166.76L1595 1166.62L1595.25 1166.76V1166.48L1802 1050.69V750.031L1801.9 750.031Z", "fill", "#DB2A5F"], ["width", "237.531", "height", "300.663", "transform", "matrix(0.872496 -0.488621 0 1 1594.75 866.094)", "fill", "black", "fill-opacity", "0.1"], ["d", "M1801.9 750.031L1595.15 866.034L1388 750.031L1592.78 636L1801.9 750.031Z", "fill", "white", "fill-opacity", "0.1"], ["width", "278.358", "height", "387.6", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 2032.93 1277)", "fill", "white"], ["x", "0.012163", "y", "0.519973", "width", "277.358", "height", "386.6", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 2033.37 1277.23)", "stroke", "black", "stroke-opacity", "0.2"], ["width", "278.358", "height", "387.6", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 2032.93 1270)", "fill", "white"], ["x", "0.012163", "y", "0.519973", "width", "277.358", "height", "386.6", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 2033.37 1270.23)", "stroke", "black", "stroke-opacity", "0.2"], ["width", "278.358", "height", "387.6", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 2032.93 1263)", "fill", "white"], ["x", "0.012163", "y", "0.519973", "width", "277.358", "height", "386.6", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 2033.37 1263.23)", "stroke", "black", "stroke-opacity", "0.2"], ["width", "278.358", "height", "387.6", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 2032.93 1255)", "fill", "white"], ["x", "0.012163", "y", "0.519973", "width", "277.358", "height", "386.6", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 2033.37 1255.23)", "stroke", "black", "stroke-opacity", "0.2"], ["width", "278.358", "height", "387.6", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 2032.93 1248)", "fill", "white"], ["x", "0.012163", "y", "0.519973", "width", "277.358", "height", "386.6", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 2033.37 1248.23)", "stroke", "black", "stroke-opacity", "0.2"], ["width", "278.358", "height", "387.6", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 2032.93 1241)", "fill", "white"], ["x", "0.012163", "y", "0.519973", "width", "277.358", "height", "386.6", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 2033.37 1241.23)", "stroke", "black", "stroke-opacity", "0.2"], ["width", "278.358", "height", "387.6", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 2032.93 1235)", "fill", "white"], ["x", "0.012163", "y", "0.519973", "width", "277.358", "height", "386.6", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 2033.37 1235.23)", "stroke", "black", "stroke-opacity", "0.2"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 2024.19 1257.61)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 2010.34 1266.5)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 1968.78 1293.15)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 1954.93 1302.04)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 1996.49 1275.38)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 1982.64 1284.27)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 1830.27 1382.01)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 1816.42 1390.89)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 1774.87 1417.55)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 1761.01 1426.44)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 1802.57 1399.78)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 1788.72 1408.66)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 1927.23 1319.81)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 1913.38 1328.69)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 1871.83 1355.35)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 1857.97 1364.24)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 1899.53 1337.58)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 1885.68 1346.47)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 2141.84 1325.54)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 2127.99 1334.42)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 2086.44 1361.08)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 2072.58 1369.96)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 2114.14 1343.31)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 2100.29 1352.19)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 1947.92 1449.93)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 1934.07 1458.82)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 1892.52 1485.48)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 1878.67 1494.36)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 1920.22 1467.71)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 1906.37 1476.59)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 2044.88 1387.74)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 2031.03 1396.62)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 1989.48 1423.28)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 1975.63 1432.16)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 2017.18 1405.51)", "fill", "#C4C4C4"], ["width", "110.293", "height", "8.40325", "transform", "matrix(0.866025 0.5 -0.841699 0.539947 2003.33 1414.39)", "fill", "#C4C4C4"], ["cx", "816", "cy", "1692.5", "rx", "81", "ry", "44.5", "fill", "black", "fill-opacity", "0.1"], ["cx", "591", "cy", "1579.5", "rx", "81", "ry", "44.5", "fill", "black", "fill-opacity", "0.1"], ["cx", "561.979", "cy", "1574.19", "rx", "19.2334", "ry", "20.8076", "fill", "#563993"], ["cx", "561.979", "cy", "1569.86", "rx", "19.2334", "ry", "20.8076", "fill", "white"], ["x", "0.483434", "y", "0.516128", "width", "34.5406", "height", "98.8605", "rx", "17.2703", "transform", "matrix(0.999462 0.0327866 -0.0325935 0.999469 551.146 1403.05)", "fill", "#563993", "stroke", "#563993"], ["x", "0.483434", "y", "0.516128", "width", "34.5406", "height", "103.48", "rx", "17.2703", "transform", "matrix(0.999462 0.0327866 -0.0325935 0.999469 549.043 1467.54)", "fill", "#563993", "stroke", "#563993"], ["rx", "16.2058", "ry", "24.8515", "transform", "matrix(0.42214 -0.906531 0.905571 0.424194 608.398 1564.11)", "fill", "#563993"], ["rx", "16.2058", "ry", "24.8515", "transform", "matrix(0.42214 -0.906531 0.905571 0.424194 608.398 1560.2)", "fill", "white"], ["x", "0.505924", "y", "0.493969", "width", "34.5405", "height", "98.8607", "rx", "17.2702", "transform", "matrix(0.999928 -0.0119907 0.01192 0.999929 582.504 1395.16)", "fill", "#563993", "stroke", "#563993"], ["x", "0.505924", "y", "0.493969", "width", "34.5405", "height", "103.48", "rx", "17.2702", "transform", "matrix(0.999928 -0.0119907 0.01192 0.999929 583.273 1459.67)", "fill", "#563993", "stroke", "#563993"], ["d", "M583.568 1407.31C585.842 1400.21 592.436 1395.03 600.279 1394.94C610.092 1394.82 618.143 1402.71 618.26 1412.55L619.025 1476.76C619.026 1476.81 619.026 1476.86 619.027 1476.91C619.027 1476.95 619.028 1476.98 619.028 1477.02C619.029 1477.03 619.029 1477.05 619.029 1477.06L619.85 1545.89C619.967 1555.74 612.107 1563.81 602.293 1563.93C592.479 1564.05 584.429 1556.16 584.312 1546.32L583.491 1477.49C583.49 1477.44 583.49 1477.39 583.49 1477.33C583.489 1477.28 583.488 1477.23 583.488 1477.19L583.171 1450.65C595.001 1450.52 604.552 1440.87 604.552 1428.97C604.552 1417.21 595.214 1407.64 583.568 1407.31Z", "fill", "black", "fill-opacity", "0.2"], ["width", "25.8539", "height", "67.8966", "rx", "12.927", "transform", "matrix(0.982227 -0.187695 0.186627 0.982431 598.934 1324.15)", "fill", "#563993"], ["width", "25.9171", "height", "65.1559", "rx", "12.9586", "transform", "matrix(-0.372679 -0.92796 0.927195 -0.37458 621.126 1399.84)", "fill", "#563993"], ["d", "M611.631 1321.73C604.618 1323.07 600.017 1329.85 601.353 1336.89L609.186 1378.12C609.969 1382.25 612.622 1385.54 616.097 1387.29C616.159 1387.47 616.226 1387.64 616.297 1387.82C618.964 1394.46 626.494 1397.68 633.116 1395L669.549 1380.28C676.171 1377.61 679.376 1370.05 676.709 1363.41C674.042 1356.77 666.512 1353.56 659.89 1356.23L633.378 1366.94L626.747 1332.03C625.411 1325 618.643 1320.39 611.631 1321.73Z", "fill", "black", "fill-opacity", "0.2"], ["rx", "18.7004", "ry", "18.8502", "transform", "matrix(0.983751 -0.179538 0.178513 0.983938 668.238 1361.14)", "fill", "#FEA299"], ["x", "585.103", "y", "1308.03", "width", "41.9245", "height", "118.777", "rx", "20.9623", "fill", "#563993"], ["d", "M620.398 1406.43H620.977V1340.54C620.977 1322.58 606.076 1308.03 587.696 1308.03C569.316 1308.03 554.416 1322.58 554.416 1340.54V1406.43H554.995C557.905 1421.49 571.439 1432.87 587.696 1432.87C603.953 1432.87 617.488 1421.49 620.398 1406.43Z", "fill", "white"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M605.849 1404.7H605.27C602.589 1418.57 590.886 1429.33 576.344 1430.93C579.886 1432.19 583.709 1432.87 587.696 1432.87C603.953 1432.87 617.488 1421.49 620.398 1406.43H620.977V1340.54C620.977 1322.58 606.077 1308.03 587.696 1308.03C586.42 1308.03 585.161 1308.1 583.922 1308.24C596.712 1312.77 605.849 1324.75 605.849 1338.81V1404.7Z", "fill", "#563993", "fill-opacity", "0.25"], ["d", "M593.099 1324.93C589.425 1319.08 580.565 1312.36 573.217 1311.5C573.433 1318.14 575.033 1332.13 579.7 1334.91C585.535 1338.37 596.773 1330.79 593.099 1324.93Z", "fill", "white"], ["cx", "596.557", "cy", "1323.42", "rx", "5.40265", "ry", "4.11817", "fill", "#563993"], ["d", "M596.224 1329.23C595.836 1326.33 598.17 1321.68 600.663 1323.2C608.581 1328.03 610.192 1365.46 610.52 1380.49C610.595 1383.94 607.808 1386.71 604.359 1386.71C600.893 1386.71 598.087 1383.91 598.083 1380.44C598.072 1368.23 597.853 1341.39 596.224 1329.23Z", "fill", "#563993"], ["x", "540.585", "y", "1308.03", "width", "41.9245", "height", "118.777", "rx", "20.9623", "fill", "#563993"], ["width", "25.8668", "height", "67.8628", "rx", "12.9334", "transform", "matrix(0.891846 0.452338 -0.450213 0.892921 552.655 1317.02)", "fill", "#563993"], ["width", "25.8831", "height", "50.2036", "rx", "12.9415", "transform", "matrix(0.763445 -0.645873 0.643644 0.765325 522 1372)", "fill", "#563993"], ["d", "M564.19 1322.88C557.819 1319.64 550.044 1322.2 546.822 1328.59L527.936 1366.05C525.953 1369.98 526.157 1374.45 528.091 1378.05C528.596 1379.42 529.342 1380.73 530.334 1381.91L545.979 1400.51C550.582 1405.98 558.737 1406.68 564.194 1402.06C569.65 1397.44 570.342 1389.26 565.74 1383.79L554.624 1370.57L569.891 1340.29C573.113 1333.91 570.56 1326.11 564.19 1322.88Z", "fill", "black", "fill-opacity", "0.2"], ["rx", "16.3851", "ry", "11.5527", "transform", "matrix(0.983751 -0.179538 0.178513 0.983938 565.25 1402.45)", "fill", "#FEA299"], ["x", "573.001", "y", "1275.08", "width", "29.8226", "height", "49.418", "rx", "14.9113", "fill", "#FEA299"], ["d", "M567.382 1278.04C567.382 1268.71 573.21 1260.39 581.968 1257.19L584.496 1256.27C599.281 1250.88 614.926 1261.82 614.926 1277.56C614.926 1290.08 604.779 1300.23 592.262 1300.23H589.571C577.316 1300.23 567.382 1290.29 567.382 1278.04Z", "fill", "#FEA299"], ["d", "M573.171 1267.13C569.704 1268.35 567.382 1271.63 567.382 1275.32V1288.95C567.382 1292.68 569.719 1295.85 573.001 1297.08V1316.48C573.001 1320.91 576.581 1324.5 580.997 1324.5C585.413 1324.5 588.993 1320.91 588.993 1316.48V1296.7C591.813 1295.27 593.747 1292.34 593.747 1288.95V1272.13C593.747 1266.16 587.868 1261.97 582.248 1263.95L573.171 1267.13Z", "fill", "black", "fill-opacity", "0.1"], ["d", "M562.605 1260.57C560.011 1264.03 560.876 1275.96 569.952 1281.37C569.088 1279.86 565.979 1275.52 569.304 1270.1C571.033 1267.29 576.219 1267.5 578.596 1277.26C580.541 1277.26 582.702 1277.28 584.215 1277.26V1267.5C585.944 1267.94 590.914 1270.75 601.287 1274.22C611.661 1277.69 634.352 1268.37 634.352 1254.5C634.352 1234.77 621.169 1228.7 610.364 1230.22C618.36 1232.82 624.627 1239.33 622.25 1248.86C602.8 1225.45 576.435 1246.26 575.355 1254.5C571.033 1253.63 565.198 1257.1 562.605 1260.57Z", "fill", "#FFB56C"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M613.524 1273.98C623.606 1271.43 634.352 1264.04 634.352 1254.5C634.352 1234.77 621.169 1228.7 610.364 1230.22C618.36 1232.82 624.627 1239.33 622.25 1248.86C613.303 1238.09 602.894 1236.68 594.155 1239.1C605.977 1245.52 613.822 1256.81 613.822 1269.67C613.822 1271.13 613.72 1272.57 613.524 1273.98Z", "fill", "#FFD76C"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M562.604 1260.57C562.586 1260.59 562.569 1260.61 562.551 1260.64C564.088 1260.17 565.699 1259.92 567.359 1259.92C574.62 1259.92 580.942 1264.72 584.215 1271.82V1267.5C584.36 1267.54 584.527 1267.59 584.718 1267.66C582.849 1262.48 579.654 1257.79 575.473 1253.89C575.42 1254.1 575.38 1254.3 575.355 1254.5C571.033 1253.63 565.198 1257.1 562.604 1260.57Z", "fill", "#FFD76C"], ["d", "M832.656 1701.08C839.737 1707.54 851.083 1706.64 857.998 1699.08C864.914 1691.52 864.78 1680.16 857.699 1673.71C850.618 1667.25 820.241 1660.08 813.326 1667.64C806.411 1675.2 825.575 1694.62 832.656 1701.08Z", "fill", "#563993"], ["d", "M832.656 1696.01C839.737 1702.46 851.083 1701.57 857.998 1694.01C864.914 1686.45 864.78 1675.09 857.699 1668.63C850.618 1662.18 820.241 1655 813.326 1662.56C806.411 1670.12 825.575 1689.55 832.656 1696.01Z", "fill", "white"], ["d", "M853.617 1543.68C853.217 1534.81 845.621 1528 836.761 1528.55C828.229 1529.09 821.658 1536.29 821.899 1544.84L825.631 1677.29C825.902 1686.9 834.087 1694.37 843.681 1693.77C852.923 1693.19 859.994 1685.31 859.577 1676.06L853.617 1543.68Z", "fill", "#563993"], ["rx", "22.022", "ry", "21.9864", "transform", "matrix(-1 0 0 1 837.063 1564.32)", "fill", "#563993"], ["d", "M836.762 1528.55C845.621 1528 853.217 1534.8 853.615 1543.66L853.908 1550.16C857.139 1553.99 859.085 1558.93 859.085 1564.32C859.085 1569.01 857.616 1573.35 855.113 1576.92L859.579 1676.08C859.994 1685.32 852.923 1693.19 843.68 1693.77C834.086 1694.37 825.902 1686.92 825.632 1677.32L822.923 1581.18C818.105 1577.15 815.041 1571.09 815.041 1564.32C815.041 1558 817.715 1552.3 821.996 1548.29L821.898 1544.81C821.658 1536.28 828.23 1529.09 836.762 1528.55Z", "fill", "black", "fill-opacity", "0.1"], ["d", "M783.53 1705.31C790.611 1711.77 801.957 1710.87 808.873 1703.31C815.788 1695.75 815.654 1684.39 808.573 1677.93C801.492 1671.48 771.116 1664.31 764.2 1671.87C757.285 1679.43 776.449 1698.85 783.53 1705.31Z", "fill", "#563993"], ["d", "M783.53 1700.24C790.611 1706.69 801.957 1705.8 808.872 1698.24C815.788 1690.68 815.654 1679.32 808.573 1672.86C801.492 1666.4 771.115 1659.23 764.2 1666.79C757.285 1674.35 776.449 1693.78 783.53 1700.24Z", "fill", "white"], ["d", "M817.289 1543.7C817.45 1534.82 810.299 1527.54 801.422 1527.54C792.873 1527.54 785.861 1534.31 785.562 1542.85L780.929 1675.28C780.593 1684.89 788.291 1692.86 797.904 1692.86C807.165 1692.86 814.718 1685.44 814.886 1676.18L817.289 1543.7Z", "fill", "#563993"], ["rx", "22.022", "ry", "21.9864", "transform", "matrix(-1 0 0 1 815.888 1573.2)", "fill", "#563993"], ["width", "29.6152", "height", "61.9866", "rx", "14.8076", "transform", "matrix(-0.615592 -0.788065 -0.78903 0.614354 895.083 1508.6)", "fill", "#FEA299"], ["width", "29.6256", "height", "76.7476", "rx", "14.8128", "transform", "matrix(-0.772097 0.635505 0.636731 0.771086 848.756 1448.34)", "fill", "white"], ["d", "M837.319 1457.75C843.636 1452.55 852.978 1453.45 858.185 1459.76L888.195 1496.1C893.402 1502.41 892.503 1511.73 886.187 1516.93C884.53 1518.3 882.666 1519.24 880.722 1519.78L857.862 1537.58C851.407 1542.6 842.092 1541.45 837.058 1535.01C832.024 1528.56 833.176 1519.26 839.631 1514.24L854.921 1502.33L835.311 1478.59C830.104 1472.28 831.003 1462.95 837.319 1457.75Z", "fill", "black", "fill-opacity", "0.1"], ["width", "77.0769", "height", "122.193", "rx", "38.5384", "transform", "matrix(-1 0 0 1 860.779 1446.78)", "fill", "#FFD76C"], ["d", "M831.77 1567.79C828.722 1568.56 825.53 1568.97 822.241 1568.97C800.957 1568.97 783.702 1551.75 783.702 1530.5V1485.26C783.702 1464.01 800.957 1446.78 822.241 1446.78C825.53 1446.78 828.722 1447.19 831.77 1447.97C815.094 1452.2 802.76 1467.29 802.76 1485.26V1530.5C802.76 1548.46 815.094 1563.55 831.77 1567.79Z", "fill", "black", "fill-opacity", "0.1"], ["rx", "19.9045", "ry", "7.18785", "transform", "matrix(-1 0 0 1 822.664 1453.97)", "fill", "white"], ["rx", "18.2105", "ry", "18.181", "transform", "matrix(-1 0 0 1 753.21 1546.57)", "fill", "#FEA299"], ["width", "29.6236", "height", "61.9689", "rx", "14.8118", "transform", "matrix(-0.745609 -0.666384 -0.667583 0.744536 802.76 1513.45)", "fill", "#FEA299"], ["width", "29.6395", "height", "71.0589", "rx", "14.8198", "transform", "matrix(-0.941963 -0.335716 -0.336681 0.941619 819.77 1463.05)", "fill", "white"], ["width", "28.798", "height", "49.0465", "rx", "14.399", "transform", "matrix(-1 0 0 1 840.028 1410.84)", "fill", "#FEA299"], ["width", "35.9974", "height", "48.2009", "rx", "17.9987", "transform", "matrix(-1 0 0 1 837.063 1389.7)", "fill", "#FEA299"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M828.593 1411.15C822.063 1412.51 817.159 1418.3 817.159 1425.24V1445.49C817.159 1452.43 822.063 1458.22 828.593 1459.58C835.123 1458.22 840.028 1452.43 840.028 1445.49V1425.24C840.028 1418.3 835.123 1412.51 828.593 1411.15Z", "fill", "black", "fill-opacity", "0.1"], ["d", "M811.23 1450.16C811.23 1453.25 817.516 1455.75 825.525 1455.75C833.535 1455.75 840.028 1453.25 840.028 1450.16C840.028 1457.41 833.535 1460.73 825.525 1460.73C817.516 1460.73 811.23 1456.99 811.23 1450.16Z", "fill", "white"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M805.071 1403.98L804.996 1403.92C806.821 1404.44 808.782 1404.89 810.849 1405.24C811.859 1401.84 814.398 1399.43 817.371 1399.43C821.23 1399.43 824.358 1403.5 824.358 1408.52C824.358 1413.54 821.23 1417.61 817.371 1417.61C817.163 1417.61 816.957 1417.59 816.753 1417.57C816.741 1417.86 816.735 1418.16 816.735 1418.45C816.735 1430.13 826.216 1439.59 837.91 1439.59C847.614 1439.59 855.793 1433.08 858.297 1424.19C861.425 1420.61 863.32 1415.93 863.32 1410.81V1399.46C863.32 1390.21 857.139 1382.4 848.681 1379.94C843.534 1370.4 833.434 1363.91 821.817 1363.91C809.357 1363.91 798.642 1371.37 793.911 1382.06C793.882 1381.51 793.866 1380.96 793.866 1380.4C793.866 1367.46 801.951 1356.41 813.352 1352C798.721 1354.24 787.514 1366.86 787.514 1382.09C787.514 1387.56 788.958 1391.95 791.485 1395.39C792.261 1397.95 795.821 1400.6 801.108 1402.63C802.366 1403.15 803.69 1403.6 805.071 1403.98Z", "fill", "#563993"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M848.498 1389.7C854.17 1389.7 859.299 1392.02 862.987 1395.77C861.252 1386.3 852.96 1379.13 842.992 1379.13C831.766 1379.13 822.664 1388.23 822.664 1399.46V1402.58C823.72 1404.17 824.358 1406.25 824.358 1408.52C824.358 1410.59 823.822 1412.51 822.92 1414.04C823.601 1418.3 825.608 1422.12 828.504 1425.07C828.284 1423.87 828.17 1422.64 828.17 1421.38V1410.03C828.17 1398.8 837.271 1389.7 848.498 1389.7Z", "fill", "white", "fill-opacity", "0.2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M846.341 1376.26C845.829 1375.57 845.289 1374.9 844.722 1374.26C840.038 1370.94 834.238 1368.98 827.958 1368.98C812.404 1368.98 799.795 1381 799.795 1395.83C799.795 1398.12 800.095 1400.33 800.658 1402.45C802.621 1403.23 804.836 1403.93 807.246 1404.5C807.08 1403.33 806.995 1402.13 806.995 1400.91C806.995 1386.08 819.604 1374.06 835.158 1374.06C839.131 1374.06 842.913 1374.84 846.341 1376.26Z", "fill", "white", "fill-opacity", "0.2"], ["d", "M895.1 1146.05C895.1 1139.22 890.272 1130.98 884.316 1127.65L678.173 1012.2C675.416 1010.66 672.755 1010.8 670.273 1011.52C665.329 1012.96 666.874 1012.76 657.193 1016.15V1133.77C657.193 1140.6 672.217 1154.71 678.173 1158.04L819.11 1236.97C824.882 1251.78 827.947 1280.06 841.449 1294.45C846.702 1292.69 851.955 1290.84 854.931 1289.78C847.195 1277.5 846.739 1264.09 849.565 1254.03L876.879 1279.51C886.664 1276.11 889.136 1275.39 891.917 1274.15C893.883 1273.02 895.1 1270.6 895.1 1267.17V1146.05Z", "fill", "#56CF1C"], ["d", "M895.1 1146.05C895.1 1139.22 890.272 1130.98 884.316 1127.65L678.173 1012.2C675.416 1010.66 672.755 1010.8 670.273 1011.52C665.329 1012.96 666.874 1012.76 657.193 1016.15V1133.77C657.193 1140.6 672.217 1154.71 678.173 1158.04L819.11 1236.97C824.882 1251.78 827.947 1280.06 841.449 1294.45C846.702 1292.69 851.955 1290.84 854.931 1289.78C847.195 1277.5 846.739 1264.09 849.565 1254.03L876.879 1279.51C886.664 1276.11 889.136 1275.39 891.917 1274.15C893.883 1273.02 895.1 1270.6 895.1 1267.17V1146.05Z", "fill", "black", "fill-opacity", "0.1"], ["d", "M881.71 1150.79C881.71 1143.96 876.882 1135.72 870.927 1132.39L664.783 1016.94C658.828 1013.61 654 1016.44 654 1023.26V1144.38C654 1151.21 658.828 1159.45 664.783 1162.78L805.721 1241.71C812.582 1259.31 823.053 1278.05 841.542 1294.52C833.806 1282.23 833.35 1268.83 836.176 1258.77L870.927 1278.23C876.882 1281.56 881.71 1278.73 881.71 1271.91V1150.79Z", "fill", "#56CF1C"], ["d", "M697.939 1239.44C742.606 1264.45 778.815 1258.96 778.815 1227.16C778.815 1195.36 742.606 1149.31 697.939 1124.29C653.273 1099.28 617.063 1104.78 617.063 1136.57C617.063 1156.19 630.841 1181.23 651.883 1203.41C654.205 1214.49 651.052 1221.38 647.706 1222.12C654.797 1224.06 662.754 1222.18 668.431 1218.96C677.573 1226.63 687.526 1233.61 697.939 1239.44Z", "fill", "#30C2F0"], ["d", "M697.939 1239.44C742.606 1264.45 778.815 1258.96 778.815 1227.16C778.815 1195.36 742.606 1149.31 697.939 1124.29C653.273 1099.28 617.063 1104.78 617.063 1136.57C617.063 1156.19 630.841 1181.23 651.883 1203.41C654.205 1214.49 651.052 1221.38 647.706 1222.12C654.797 1224.06 662.754 1222.18 668.431 1218.96C677.573 1226.63 687.526 1233.61 697.939 1239.44Z", "fill", "black", "fill-opacity", "0.1"], ["d", "M688.876 1243.35C733.542 1268.37 769.752 1262.87 769.752 1231.07C769.752 1199.28 733.542 1153.22 688.876 1128.21C644.209 1103.19 608 1108.69 608 1140.49C608 1160.1 621.778 1185.14 642.82 1207.32C645.141 1218.4 641.989 1225.3 638.643 1226.04C645.733 1227.98 653.691 1226.09 659.368 1222.88C668.51 1230.55 678.463 1237.52 688.876 1243.35Z", "fill", "#30C2F0"], ["d", "M202 310.202C202 288.111 217.625 261.452 236.9 250.657L483.1 112.779C502.375 101.984 518 111.142 518 133.234V574.616C518 596.707 502.375 623.366 483.1 634.161L236.9 772.04C217.625 782.834 202 773.676 202 751.584V310.202Z", "fill", "black", "fill-opacity", "0.3"], ["d", "M215 318.202C215 296.111 230.625 269.452 249.9 258.657L496.1 120.779C515.375 109.984 531 119.142 531 141.234V582.616C531 604.707 515.375 631.366 496.1 642.161L249.9 780.04C230.625 790.834 215 781.676 215 759.584V318.202Z", "fill", "white"], ["width", "150.508", "height", "37.1773", "transform", "matrix(0.872496 -0.488621 0 1 307.341 219.397)", "fill", "#C4C4C4"], ["d", "M291.814 362.111L258.517 380.758C256.01 382.162 253.977 385.631 253.977 388.505V426.667C253.977 429.541 256.01 430.733 258.517 429.329L291.814 410.682C294.321 409.277 296.354 405.809 296.354 402.935V364.772C296.354 361.898 294.321 360.707 291.814 362.111ZM291.814 365.58C292.648 365.113 293.327 365.511 293.327 366.468V404.63C293.327 405.586 292.648 406.745 291.814 407.212L258.517 425.859C257.683 426.327 257.004 425.929 257.004 424.972V386.81C257.004 385.853 257.683 384.695 258.517 384.227L291.814 365.58ZM288.569 378.054L287.77 377.578C287.328 377.315 286.61 377.714 286.165 378.47L270.704 404.705L264.18 400.821C263.738 400.558 263.019 400.957 262.574 401.712L261.768 403.08C261.323 403.835 261.321 404.661 261.762 404.923L269.885 409.76C270.327 410.023 271.046 409.624 271.491 408.868L288.563 379.897C289.008 379.142 289.011 378.317 288.569 378.054Z", "fill", "#18AA27"], ["width", "215.569", "height", "7.79525", "rx", "3.89762", "transform", "matrix(0.872496 -0.488621 0 1 311.788 360.819)", "fill", "#C4C4C4"], ["width", "147.51", "height", "7.79525", "rx", "3.89762", "transform", "matrix(0.872496 -0.488621 0 1 311.788 379.408)", "fill", "#C4C4C4"], ["d", "M291.814 450.258L258.517 468.904C256.01 470.309 253.977 473.777 253.977 476.651V514.814C253.977 517.688 256.01 518.879 258.517 517.475L291.814 498.828C294.321 497.424 296.354 493.955 296.354 491.081V452.919C296.354 450.045 294.321 448.853 291.814 450.258ZM291.814 453.727C292.648 453.259 293.327 453.657 293.327 454.614V492.776C293.327 493.733 292.648 494.891 291.814 495.359L258.517 514.006C257.683 514.473 257.004 514.075 257.004 513.119V474.956C257.004 474 257.683 472.841 258.517 472.374L291.814 453.727ZM288.569 466.2L287.77 465.724C287.328 465.462 286.61 465.861 286.165 466.616L270.704 492.852L264.18 488.967C263.738 488.704 263.019 489.103 262.574 489.859L261.768 491.226C261.323 491.982 261.321 492.807 261.762 493.07L269.885 497.906C270.327 498.169 271.046 497.77 271.491 497.015L288.563 468.044C289.008 467.289 289.011 466.463 288.569 466.2Z", "fill", "#18AA27"], ["width", "215.569", "height", "7.79525", "rx", "3.89762", "transform", "matrix(0.872496 -0.488621 0 1 311.788 448.965)", "fill", "#C4C4C4"], ["width", "147.51", "height", "7.79525", "rx", "3.89762", "transform", "matrix(0.872496 -0.488621 0 1 311.788 467.554)", "fill", "#C4C4C4"], ["d", "M291.814 538.404L258.517 557.05C256.01 558.455 253.977 561.923 253.977 564.797V602.96C253.977 605.834 256.01 607.025 258.517 605.621L291.814 586.974C294.321 585.57 296.354 582.101 296.354 579.227V541.065C296.354 538.191 294.321 536.999 291.814 538.404ZM291.814 541.873C292.648 541.405 293.327 541.803 293.327 542.76V580.922C293.327 581.879 292.648 583.037 291.814 583.505L258.517 602.152C257.683 602.619 257.004 602.221 257.004 601.265V563.102C257.004 562.146 257.683 560.987 258.517 560.52L291.814 541.873ZM288.569 554.346L287.77 553.87C287.328 553.608 286.61 554.007 286.165 554.762L270.704 580.998L264.18 577.113C263.738 576.85 263.019 577.249 262.574 578.005L261.768 579.372C261.323 580.128 261.321 580.953 261.762 581.216L269.885 586.052C270.327 586.315 271.046 585.916 271.491 585.161L288.563 556.19C289.008 555.435 289.011 554.609 288.569 554.346Z", "fill", "#18AA27"], ["width", "215.569", "height", "7.79525", "rx", "3.89762", "transform", "matrix(0.872496 -0.488621 0 1 311.788 537.111)", "fill", "#C4C4C4"], ["width", "147.51", "height", "7.79525", "rx", "3.89762", "transform", "matrix(0.872496 -0.488621 0 1 311.788 555.7)", "fill", "#C4C4C4"], ["d", "M291.814 626.55L258.517 645.197C256.01 646.601 253.977 650.069 253.977 652.944V691.106C253.977 693.98 256.01 695.172 258.517 693.767L291.814 675.12C294.321 673.716 296.354 670.248 296.354 667.374V629.211C296.354 626.337 294.321 625.146 291.814 626.55ZM291.814 630.019C292.648 629.552 293.327 629.95 293.327 630.906V669.069C293.327 670.025 292.648 671.184 291.814 671.651L258.517 690.298C257.683 690.765 257.004 690.367 257.004 689.411V651.248C257.004 650.292 257.683 649.134 258.517 648.666L291.814 630.019ZM288.569 642.493L287.77 642.017C287.328 641.754 286.61 642.153 286.165 642.908L270.704 669.144L264.18 665.26C263.738 664.997 263.019 665.396 262.574 666.151L261.768 667.519C261.323 668.274 261.321 669.099 261.762 669.362L269.885 674.199C270.327 674.461 271.046 674.062 271.491 673.307L288.563 644.336C289.008 643.581 289.011 642.756 288.569 642.493Z", "fill", "#18AA27"], ["width", "215.569", "height", "7.79525", "rx", "3.89762", "transform", "matrix(0.872496 -0.488621 0 1 311.788 625.258)", "fill", "#C4C4C4"], ["width", "147.51", "height", "7.79525", "rx", "3.89762", "transform", "matrix(0.872496 -0.488621 0 1 311.788 643.846)", "fill", "#C4C4C4"], ["cx", "265", "cy", "1020.5", "rx", "81", "ry", "44.5", "fill", "black", "fill-opacity", "0.1"], ["d", "M238.739 1026.01C233.427 1030.87 224.915 1030.2 219.727 1024.5C214.539 1018.81 214.639 1010.25 219.952 1005.38C225.264 1000.52 248.052 995.114 253.24 1000.81C258.428 1006.51 244.051 1021.14 238.739 1026.01Z", "fill", "#563993"], ["d", "M238.739 1022.18C233.427 1027.05 224.915 1026.37 219.727 1020.68C214.539 1014.98 214.64 1006.42 219.952 1001.56C225.264 996.694 248.052 991.291 253.24 996.987C258.428 1002.68 244.051 1017.32 238.739 1022.18Z", "fill", "white"], ["d", "M223.017 907.365C223.315 900.713 229.012 895.6 235.658 896.021C242.059 896.426 246.99 901.829 246.81 908.24L244.007 1008.14C243.805 1015.35 237.666 1020.95 230.469 1020.5C223.535 1020.06 218.229 1014.15 218.54 1007.2L223.017 907.365Z", "fill", "#563993"], ["cx", "235.432", "cy", "922.97", "rx", "16.5208", "ry", "16.5651", "fill", "#563993"], ["d", "M235.658 896.021C229.012 895.6 223.314 900.728 223.015 907.398L222.795 912.299C220.372 915.182 218.911 918.905 218.911 922.97C218.911 926.501 220.013 929.774 221.891 932.462L218.541 1007.17C218.229 1014.13 223.535 1020.06 230.468 1020.5C237.666 1020.95 243.805 1015.33 244.008 1008.11L246.04 935.669C249.655 932.631 251.953 928.069 251.953 922.97C251.953 918.205 249.947 913.911 246.736 910.889L246.809 908.27C246.99 901.842 242.059 896.426 235.658 896.021Z", "fill", "black", "fill-opacity", "0.1"], ["d", "M275.593 1029.19C270.281 1034.06 261.769 1033.38 256.581 1027.69C251.393 1021.99 251.494 1013.43 256.806 1008.57C262.118 1003.7 284.906 998.299 290.094 1004C295.282 1009.69 280.905 1024.33 275.593 1029.19Z", "fill", "#563993"], ["d", "M275.593 1025.37C270.281 1030.23 261.769 1029.56 256.581 1023.86C251.393 1018.17 251.494 1009.61 256.806 1004.74C262.118 999.879 284.906 994.477 290.094 1000.17C295.282 1005.87 280.905 1020.5 275.593 1025.37Z", "fill", "white"], ["d", "M250.266 907.375C250.146 900.717 255.51 895.255 262.169 895.255C268.583 895.255 273.844 900.336 274.067 906.746L277.546 1006.63C277.797 1013.83 272.022 1019.81 264.811 1019.81C257.863 1019.81 252.196 1014.25 252.07 1007.3L250.266 907.375Z", "fill", "#563993"], ["cx", "251.318", "cy", "929.66", "rx", "16.5208", "ry", "16.5651", "fill", "#563993"], ["x", "0.569703", "y", "-0.418864", "width", "21.2961", "height", "45.5694", "rx", "10.6481", "transform", "matrix(0.152107 -0.989481 0.9873 0.151754 232.766 893.297)", "fill", "white", "stroke", "black"], ["x", "0.402016", "y", "0.581796", "width", "21.2408", "height", "56.7329", "rx", "10.6204", "transform", "matrix(0.982791 0.178563 -0.17876 0.985029 240.242 836.373)", "fill", "white", "stroke", "black"], ["d", "M245.435 894.655L245.337 894.64L245.241 894.664C243.837 895.009 242.341 895.07 240.826 894.796C235.054 893.748 231.227 888.208 232.279 882.421L238.624 847.504C239.676 841.717 245.208 837.875 250.98 838.922C256.752 839.969 260.579 845.509 259.527 851.296L255.381 874.113L255.289 874.619L255.796 874.697L270.176 876.904C275.975 877.794 279.95 883.228 279.056 889.041C278.161 894.854 272.735 898.845 266.936 897.955L245.435 894.655Z", "fill", "black", "fill-opacity", "0.1", "stroke", "black"], ["width", "57.8308", "height", "92.051", "rx", "28.9154", "transform", "matrix(0.973966 0.226694 -0.225547 0.974232 235.595 830.043)", "fill", "white"], ["d", "M236.234 923.787C238.329 924.873 240.592 925.718 242.996 926.277C258.549 929.898 274.085 920.19 277.696 904.594L285.383 871.391C288.993 855.796 279.311 840.219 263.757 836.598C261.354 836.039 258.951 835.798 256.593 835.847C268.059 841.791 274.509 854.964 271.456 868.15L263.769 901.353C260.717 914.539 249.139 923.516 236.234 923.787Z", "fill", "black", "fill-opacity", "0.1"], ["rx", "14.9343", "ry", "5.41476", "transform", "matrix(0.973966 0.226694 -0.225547 0.974232 262.227 841.802)", "fill", "white"], ["rx", "13.6686", "ry", "13.6909", "transform", "matrix(0.983842 -0.17904 0.177518 0.984118 319.969 909.205)", "fill", "#FEA299"], ["width", "22.2796", "height", "46.5862", "rx", "11.1398", "transform", "matrix(0.613529 -0.790263 0.787993 0.614926 278.957 891.312)", "fill", "white"], ["width", "22.2622", "height", "53.4945", "rx", "11.1311", "transform", "matrix(0.866398 -0.49995 0.497478 0.867135 259.648 856.223)", "fill", "white"], ["width", "21.6055", "height", "36.9505", "rx", "10.8028", "transform", "matrix(0.988068 0.154019 -0.153217 0.988193 252.739 809.498)", "fill", "#FEA299"], ["width", "27.0069", "height", "36.3134", "rx", "13.5035", "transform", "matrix(0.988068 0.154019 -0.153217 0.988193 257.377 794.102)", "fill", "#FEA299"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M261.18 811.046C265.864 812.814 268.834 817.674 268.037 822.816L265.685 837.98C264.888 843.122 260.587 846.849 255.589 847.107C250.905 845.339 247.935 840.48 248.733 835.337L251.084 820.173C251.881 815.031 256.182 811.305 261.18 811.046Z", "fill", "black", "fill-opacity", "0.1"], ["d", "M269.548 842.1C269.192 844.397 264.244 845.533 258.306 844.607C252.369 843.682 247.844 841.069 248.2 838.772C247.364 844.164 251.793 847.392 257.731 848.318C263.668 849.243 268.76 847.183 269.548 842.1Z", "fill", "white"], ["d", "M296.791 792.559C301.321 791.498 304.978 787.78 305.737 782.888C306.734 776.456 302.342 770.43 295.927 769.43C291.257 768.703 286.802 770.838 284.339 774.535C283.642 774.333 282.924 774.174 282.187 774.059C280.92 773.861 279.664 773.807 278.435 773.884C276.133 770.307 272.376 767.694 267.85 766.988C259.952 765.757 252.524 770.774 250.567 778.375C239.649 778.204 229.998 786.122 228.273 797.249C227.241 803.909 229.262 810.338 233.293 815.104C231.016 817.683 229.425 820.925 228.858 824.581C227.281 834.751 234.225 844.278 244.368 845.859C252.577 847.138 260.366 842.822 263.873 835.738C267.693 834.281 270.647 830.865 271.32 826.526C271.998 822.151 270.183 817.965 266.935 815.42C269.101 812.961 270.746 810.001 271.666 806.689C273.259 807.502 275.005 808.079 276.868 808.37C286.317 809.843 295.168 803.356 296.637 793.881C296.706 793.439 296.757 792.998 296.791 792.559Z", "fill", "#563993"], ["d", "M299.057 791.776C302.502 790.174 305.11 786.932 305.737 782.888C306.734 776.456 302.342 770.431 295.927 769.431C292.822 768.947 289.813 769.728 287.42 771.393C289.454 770.447 291.78 770.074 294.162 770.445C300.577 771.445 304.969 777.47 303.972 783.902C303.457 787.222 301.608 790.001 299.057 791.776Z", "fill", "white", "fill-opacity", "0.1"], ["d", "M274.14 807.3C283.589 808.773 292.44 802.286 293.909 792.811C295.1 785.127 291.071 777.838 284.464 774.571C292.651 777.002 297.985 785.189 296.637 793.881C295.168 803.356 286.317 809.843 276.867 808.37C275.081 808.091 273.402 807.548 271.862 806.787C272.599 807.006 273.359 807.178 274.14 807.3Z", "fill", "white", "fill-opacity", "0.1"], ["d", "M270.865 770.36C273.718 770.804 276.266 772.008 278.336 773.733C276.027 770.233 272.312 767.684 267.851 766.988C259.953 765.757 252.524 770.775 250.567 778.375C251.591 778.391 252.625 778.478 253.665 778.64C254 778.692 254.332 778.751 254.661 778.818C257.553 772.905 264.033 769.295 270.865 770.36Z", "fill", "white", "fill-opacity", "0.1"], ["d", "M240.609 820.776C236.128 815.945 233.819 809.177 234.908 802.151C236.795 789.982 248.163 781.651 260.3 783.543C262.515 783.888 264.602 784.55 266.523 785.475C263.242 781.938 258.795 779.439 253.665 778.64C241.529 776.748 230.16 785.079 228.273 797.249C226.731 807.197 232.003 816.631 240.609 820.776Z", "fill", "white", "fill-opacity", "0.1"], ["d", "M242.129 841.641C252.272 843.222 261.772 836.259 263.349 826.089C263.86 822.796 263.477 819.57 262.381 816.66C265.084 820.478 266.363 825.315 265.589 830.307C264.012 840.477 254.511 847.44 244.368 845.859C237.51 844.79 232.114 840.088 229.826 834.011C232.63 837.971 236.965 840.836 242.129 841.641Z", "fill", "white", "fill-opacity", "0.1"], ["rx", "5.24252", "ry", "6.84858", "transform", "matrix(0.988068 0.154019 -0.153217 0.988193 269.811 810.332)", "fill", "#FEA299"], ["id", "clip0"], ["width", "2506", "height", "1864", "fill", "white"]], template: function IllustrationAuditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "circle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "circle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "rect", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "rect", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "rect", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "rect", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "rect", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "rect", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "rect", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "rect", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "circle", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "circle", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "circle", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "circle", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "rect", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "rect", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "rect", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "rect", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "rect", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "rect", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "rect", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "rect", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "rect", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "rect", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "rect", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "rect", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "rect", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "rect", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "rect", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "rect", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "rect", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "rect", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "rect", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "rect", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "rect", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "rect", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "rect", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "rect", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "rect", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "rect", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "rect", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "rect", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "rect", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "rect", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "rect", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "rect", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "rect", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "rect", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "rect", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "rect", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "rect", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "rect", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "rect", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "rect", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "rect", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "rect", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "rect", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "rect", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "rect", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "rect", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "rect", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "rect", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "rect", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "rect", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "rect", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "rect", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "rect", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "rect", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "rect", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "rect", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "rect", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "rect", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "rect", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "rect", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "rect", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "rect", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "rect", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "rect", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "rect", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "rect", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "rect", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "rect", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "rect", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "rect", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "rect", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "rect", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "rect", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "rect", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "rect", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "rect", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "rect", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "rect", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "rect", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "rect", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "rect", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "rect", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "rect", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "rect", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "rect", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "rect", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "rect", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "rect", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "rect", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "rect", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "rect", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "rect", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "rect", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "rect", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "rect", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "rect", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "rect", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "rect", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "ellipse", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "ellipse", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "ellipse", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "ellipse", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "rect", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "rect", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "ellipse", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "ellipse", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "rect", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "rect", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "path", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "rect", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "rect", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "path", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "ellipse", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "rect", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "path", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "path", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "path", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "ellipse", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "path", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "rect", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "rect", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "rect", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "path", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "ellipse", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "rect", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "path", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "path", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "path", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "path", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "path", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "path", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "path", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "path", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "ellipse", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "path", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "path", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "path", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "path", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "ellipse", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "rect", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "rect", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "path", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "rect", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "path", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "ellipse", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "ellipse", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "rect", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "rect", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "rect", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "rect", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "path", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "path", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "path", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "path", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "path", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "path", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "path", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "path", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "path", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "path", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "path", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "path", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "path", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "rect", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "path", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "rect", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "rect", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "path", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "rect", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "rect", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "path", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "rect", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "rect", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "path", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "rect", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "rect", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "ellipse", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "path", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "path", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "path", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "ellipse", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "path", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "path", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "path", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "path", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "ellipse", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "rect", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "rect", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "path", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "rect", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "path", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "ellipse", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "ellipse", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "rect", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "rect", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "rect", 233);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "rect", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "path", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "path", 236);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "path", 237);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "path", 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "path", 239);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "path", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "path", 241);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "path", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "ellipse", 243);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "clipPath", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "rect", 245);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2lsbHVzdHJhdGlvbi1hdWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFRLGtCQUFBO0FBRVIiLCJmaWxlIjoiaWxsdXN0cmF0aW9uLWF1ZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyBwb3NpdGlvbjogcmVsYXRpdmU7IH0iXX0= */"] });


/***/ }),

/***/ "e5GX":
/*!*****************************************************************************!*\
  !*** ./src/app/page-home/sections/section-audit/section-audit.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SectionAuditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionAuditComponent", function() { return SectionAuditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_illustration_audit_illustration_audit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/illustration-audit/illustration-audit.component */ "dZAL");


class SectionAuditComponent {
    constructor() { }
    ngOnInit() {
    }
}
SectionAuditComponent.ɵfac = function SectionAuditComponent_Factory(t) { return new (t || SectionAuditComponent)(); };
SectionAuditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionAuditComponent, selectors: [["app-section-audit"]], decls: 24, vars: 0, consts: [["id", "audit"], [1, "line-decor"], [1, "container"], [1, "line", "left"], [1, "container", "d-grid", "grid-two-columns", "align-items-center", "grid-column-reverse"], [1, "content"], [1, "subtitle"], [1, "img"], [1, "decor"], ["width", "731", "viewBox", "0 0 731 1052", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M525.819 326.853C486.319 171.853 271.319 748.853 180.319 204.853C89.3187 -339.148 0.318858 330.095 0.318848 728.353C0.318832 1300.85 577.319 961.853 697.319 845.853C801.801 744.853 633.319 794.353 560.819 672.353C488.319 550.353 572.643 510.593 525.819 326.853Z", "fill", "#6B41A6", "fill-opacity", "0.2"]], template: function SectionAuditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Audit d'interfaces");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "R\u00E9v\u00E9ler les points positifs et n\u00E9gatifs du point de vue ergonomie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Permettre de concevoir un produit respectueux des grands principes d'ergonomie et adapt\u00E9 \u00E0 ses utilisateurs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "R\u00E9v\u00E9ler des probl\u00E8mes d'utilisation ou d'ergonomie qui contrarient l'exp\u00E9rience utilisateur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "B\u00E9n\u00E9ficier de recommandations pr\u00E9cises et concr\u00E8tes pour am\u00E9liorer l'exp\u00E9rience utilisateur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-illustration-audit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_illustration_audit_illustration_audit_component__WEBPACK_IMPORTED_MODULE_1__["IllustrationAuditComponent"]], styles: [".img[_ngcontent-%COMP%] {\n  position: relative;\n}\n.img[_ngcontent-%COMP%]   .decor[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -400px;\n  left: -370px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NlY3Rpb24tYXVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRVIiLCJmaWxlIjoic2VjdGlvbi1hdWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuZGVjb3Ige1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTQwMHB4O1xuICAgICAgICBsZWZ0OiAtMzcwcHg7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "eKob":
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/illustration-presentation/illustration-presentation.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: IllustrationPresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IllustrationPresentationComponent", function() { return IllustrationPresentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class IllustrationPresentationComponent {
    constructor() { }
    ngOnInit() {
    }
}
IllustrationPresentationComponent.ɵfac = function IllustrationPresentationComponent_Factory(t) { return new (t || IllustrationPresentationComponent)(); };
IllustrationPresentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IllustrationPresentationComponent, selectors: [["app-illustration-presentation"]], decls: 33, vars: 0, consts: [["width", "100%", "height", "100%", "viewBox", "0 0 976 897", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M692.007 401.757C692.007 454.149 671.745 501.806 638.632 537.313C624.449 552.522 593.107 568.696 593.107 627.538C564.592 643.368 528.258 652.383 493.336 652.383C458.413 652.383 417.723 643.368 389.207 627.538C389.207 569.568 362.222 552.522 348.039 537.313C314.926 501.806 294.664 454.149 294.664 401.757C294.664 291.987 383.612 203 493.336 203C603.059 203 692.007 291.987 692.007 401.757Z", "fill", "url(#paint0_linear)"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M367.303 557.266C482.17 582.522 688.176 508.967 608.792 241.793C608.564 241.027 608.34 240.266 608.12 239.51C658.88 275.517 692.007 334.767 692.007 401.757C692.007 454.149 671.745 501.806 638.632 537.313C636.227 539.892 633.329 542.498 630.174 545.336C614.722 559.234 593.107 578.673 593.107 627.538C564.591 643.369 528.258 652.383 493.335 652.383C458.413 652.383 417.723 643.369 389.207 627.538C389.207 591.313 378.669 571.068 367.303 557.266Z", "fill", "black", "fill-opacity", "0.1"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M296.406 384.758C336.054 296.276 405.327 214.769 495.95 204.743C498.899 204.417 501.463 203.919 503.658 203.264C500.239 203.089 496.798 203 493.336 203C388.551 203 302.714 284.156 295.198 387.066C295.609 386.288 296.012 385.519 296.406 384.758Z", "fill", "white", "fill-opacity", "0.5"], ["d", "M388.771 667.639V692.047C388.771 730.563 419.981 761.787 458.481 761.787H523.833C562.333 761.787 593.543 730.563 593.543 692.047V667.639H388.771Z", "fill", "#4857D1"], ["d", "M552.588 687.253C544.31 723.866 535.597 744.788 498.999 761.351C498.679 761.496 498.366 761.641 498.059 761.787H524C562.66 761.787 594 730.447 594 691.787V667.639H555.911C555.324 670.245 554.962 672.968 554.582 675.827C554.105 679.412 553.601 683.209 552.588 687.253Z", "fill", "black", "fill-opacity", "0.1"], ["x", "365.245", "y", "626.667", "width", "252.697", "height", "59.2784", "rx", "29.6392", "fill", "#4857D1"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M396.287 685.945H588.302C604.671 685.945 617.941 672.675 617.941 656.306C617.941 639.937 604.671 626.667 588.302 626.667H554.541C568.589 657.011 465.107 685.073 393.128 685.073C394.155 685.358 395.208 685.648 396.287 685.945Z", "fill", "black", "fill-opacity", "0.1"], ["opacity", "0.5", "d", "M365.515 660.329C366.278 631.382 395.487 627 432 627C435.203 627 437.835 626.884 439.947 626.667H394.884C378.515 626.667 365.245 639.937 365.245 656.306C365.245 657.671 365.337 659.014 365.515 660.329Z", "fill", "white"], ["cx", "212.5", "cy", "471.893", "rx", "28.5", "ry", "29", "fill", "#78C4F8"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M669.316 309.429C675.63 308.742 681.749 308.167 687.657 307.706C715.914 305.502 739.127 305.913 755.775 308.933C764.107 310.444 770.552 312.567 775.112 315.17C779.65 317.761 781.993 320.624 782.863 323.561C783.733 326.497 783.329 330.176 780.936 334.822C778.532 339.491 774.285 344.785 768.124 350.596C755.811 362.206 736.574 375.211 711.683 388.771C661.966 415.858 590.531 444.716 509.184 468.847C427.836 492.978 352.223 507.739 295.783 512.143C267.527 514.348 244.313 513.936 227.665 510.916C219.333 509.405 212.888 507.282 208.329 504.679C203.791 502.089 201.448 499.225 200.577 496.288C199.707 493.352 200.111 489.673 202.504 485.027C204.909 480.358 209.155 475.064 215.317 469.253C227.629 457.643 246.866 444.639 271.757 431.078C279.165 427.042 287.056 422.966 295.39 418.873C295.124 415.754 294.93 412.614 294.81 409.456C285.162 414.137 276.069 418.802 267.589 423.422C242.422 437.133 222.441 450.556 209.34 462.91C202.795 469.081 197.786 475.154 194.758 481.034C191.718 486.937 190.511 492.99 192.223 498.767C193.935 504.543 198.245 508.959 204.01 512.25C209.753 515.529 217.261 517.889 226.11 519.494C243.825 522.707 267.89 523.063 296.461 520.834C353.674 516.37 429.908 501.455 511.661 477.205C593.414 452.954 665.452 423.885 715.851 396.427C741.018 382.716 761 369.294 774.1 356.939C780.645 350.768 785.654 344.695 788.682 338.815C791.722 332.912 792.929 326.859 791.217 321.083C789.505 315.306 785.195 310.89 779.43 307.599C773.687 304.32 766.18 301.96 757.33 300.355C739.615 297.142 715.55 296.786 686.98 299.015C679.848 299.572 672.421 300.291 664.724 301.17C666.318 303.882 667.849 306.636 669.316 309.429Z", "fill", "url(#paint1_linear)"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M317.905 308.389C310.537 307.496 303.425 306.754 296.593 306.167C268.355 303.74 245.139 303.969 228.467 306.858C220.124 308.303 213.663 310.375 209.082 312.942C204.524 315.497 202.159 318.342 201.265 321.272C200.372 324.201 200.747 327.883 203.104 332.548C205.471 337.236 209.676 342.563 215.792 348.422C228.012 360.129 247.147 373.284 271.93 387.041C321.433 414.517 392.638 443.937 473.794 468.707C554.949 493.478 630.444 508.834 686.847 513.682C715.085 516.109 738.301 515.88 754.973 512.991C763.316 511.545 769.778 509.473 774.358 506.906C778.916 504.352 781.281 501.506 782.175 498.577C783.068 495.648 782.693 491.966 780.337 487.301C777.969 482.613 773.764 477.285 767.648 471.427C755.428 459.72 736.294 446.564 711.51 432.808C705.035 429.214 698.188 425.586 690.996 421.94C691.309 418.829 691.551 415.697 691.72 412.545C700.186 416.784 708.206 421.005 715.738 425.185C740.796 439.094 760.672 452.673 773.675 465.13C780.171 471.353 785.132 477.465 788.114 483.369C791.107 489.296 792.266 495.358 790.509 501.121C788.752 506.883 784.407 511.266 778.617 514.511C772.848 517.745 765.322 520.045 756.46 521.581C738.721 524.654 714.653 524.821 686.101 522.367C628.925 517.453 552.811 501.939 471.251 477.045C389.691 452.152 317.884 422.517 267.702 394.663C242.644 380.754 222.768 367.175 209.765 354.718C203.269 348.495 198.308 342.384 195.326 336.48C192.333 330.553 191.174 324.49 192.931 318.728C194.688 312.965 199.033 308.583 204.823 305.337C210.592 302.104 218.118 299.804 226.98 298.268C244.72 295.195 268.787 295.028 297.339 297.482C305.375 298.172 313.786 299.073 322.533 300.179C320.928 302.875 319.384 305.612 317.905 308.389Z", "fill", "url(#paint2_linear)"], ["cx", "251.5", "cy", "295.394", "r", "38.5", "fill", "#78C4F8"], ["cx", "310", "cy", "237.394", "rx", "11", "ry", "11.5", "fill", "#78C4F8"], ["cx", "757.5", "cy", "527.893", "rx", "32.5", "ry", "32", "fill", "#78C4F8"], ["cx", "764", "cy", "409.393", "rx", "19", "ry", "19.5", "fill", "#78C4F8"], ["cx", "662", "cy", "592.893", "r", "12", "fill", "#78C4F8"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M182.061 152.576C183.86 150.481 187.017 150.241 189.112 152.04L246.125 200.994C248.22 202.793 248.46 205.95 246.662 208.045C244.863 210.14 241.706 210.38 239.611 208.581L182.597 159.627C180.502 157.828 180.262 154.671 182.061 152.576Z", "fill", "#F5E1A9"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M493 15C495.761 15 498 17.2386 498 20L498 95.1469C498 97.9084 495.761 100.147 493 100.147C490.239 100.147 488 97.9084 488 95.1469L488 20C488 17.2386 490.239 15 493 15Z", "fill", "#F5E1A9"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M314.243 42.3551C316.587 40.8945 319.671 41.6102 321.131 43.9538L360.879 107.728C362.34 110.072 361.624 113.156 359.28 114.616C356.937 116.077 353.853 115.361 352.392 113.018L312.645 49.2431C311.184 46.8996 311.9 43.8157 314.243 42.3551Z", "fill", "#F5E1A9"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M803.463 152.576C801.664 150.481 798.507 150.241 796.412 152.04L739.398 200.994C737.303 202.793 737.063 205.95 738.862 208.045C740.661 210.14 743.818 210.38 745.913 208.581L802.927 159.627C805.022 157.828 805.262 154.671 803.463 152.576Z", "fill", "#F5E1A9"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M671.28 42.3551C668.937 40.8945 665.853 41.6102 664.392 43.9538L624.645 107.728C623.184 110.072 623.9 113.156 626.243 114.616C628.587 116.077 631.671 115.361 633.131 113.018L672.879 49.2431C674.34 46.8996 673.624 43.8157 671.28 42.3551Z", "fill", "#F5E1A9"], ["id", "paint0_linear", "x1", "330.39", "y1", "239.177", "x2", "643.814", "y2", "640.484", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#FFEEB1"], ["offset", "0.307292", "stop-color", "#E3CA99"], ["offset", "1", "stop-color", "#891EBB"], ["id", "paint1_linear", "x1", "204.913", "y1", "505.495", "x2", "791.39", "y2", "318.216", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#FDF7D7"], ["offset", "1", "stop-color", "#FF1FDB"], ["id", "paint2_linear", "x1", "191.842", "y1", "314.583", "x2", "791.389", "y2", "502.296", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#FFFDD6"], ["offset", "1", "stop-color", "#FF20DB"]], template: function IllustrationPresentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "rect", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ellipse", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "circle", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ellipse", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ellipse", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ellipse", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "circle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "linearGradient", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "stop", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "stop", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "stop", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "linearGradient", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "stop", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "stop", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "linearGradient", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "stop", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "stop", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbGx1c3RyYXRpb24tcHJlc2VudGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "hA6M":
/*!****************************************************************!*\
  !*** ./src/app/page-realisation/page-realisation.component.ts ***!
  \****************************************************************/
/*! exports provided: PageRealisationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRealisationComponent", function() { return PageRealisationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_slides_slides_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/slides/slides.component */ "0q0b");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_realisation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/realisation.service */ "XpdA");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = ["content"];
function PageRealisationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function PageRealisationComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Loading...");
} }
function PageRealisationComponent_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function PageRealisationComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PageRealisationComponent_ng_template_6_ng_container_0_Template, 1, 0, "ng-container", 1);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.realisation)("ngIfThen", _r8)("ngIfElse", _r6);
} }
function PageRealisationComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Contenu inexistant");
} }
function PageRealisationComponent_ng_template_10_Template(rf, ctx) { }
class PageRealisationComponent {
    constructor(route, realisationsService, componentFactoryResolver, http) {
        this.route = route;
        this.realisationsService = realisationsService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.http = http;
        this.loading = false;
        this.realisation = undefined;
        this.folder = "";
        this.SlideRegEx = /{{slide:(?<from>[\w\d\.\-\_]*):(?<to>[\w\d\.\-\_]*)}}/gm;
    }
    ngOnInit() {
        console.log("page realisation");
        this.loading = true;
        this.folder = this.realisationsService.getFolder();
        this.route.params.subscribe(routeParams => {
            let __id = routeParams["id"];
            if (!__id) {
                this.loading = false;
                return;
            }
            this.realisationsService.loadRealisations().subscribe(realisations => {
                this.loading = false;
                this.realisation = realisations.find(x => x.tag.toLowerCase() == __id.toLowerCase());
                this.initPage();
            });
        });
    }
    createPageWithContent(content) {
        let baseUrl = this.folder + this.realisation.tag + "/";
        let elements = [];
        //Slides
        let slide = this.SlideRegEx.exec(content);
        if (slide) {
            elements.push({ type: "markdown", content: content.substring(0, slide.index) });
            elements.push({ type: "slide", content: slide });
            elements.push({ type: "markdown", content: content.substring(slide.index + slide[0].length) });
        }
        else {
            elements.push({ type: "markdown", content: content });
        }
        elements.forEach(elem => {
            switch (elem.type) {
                case "markdown":
                    {
                        let cf = this.componentFactoryResolver.resolveComponentFactory(ngx_markdown__WEBPACK_IMPORTED_MODULE_1__["MarkdownComponent"]);
                        let comp = this.contentRef.createComponent(cf);
                        comp.instance.render(elem.content);
                    }
                    break;
                case "slide":
                    {
                        let from = parseInt((/(?<number>\d+)/g).exec(elem.content.groups.from).groups.number);
                        let to = parseInt((/(?<number>\d+)/g).exec(elem.content.groups.to).groups.number);
                        let template = elem.content.groups.from.replace(from.toString(), "{{x}}");
                        let _slides = [];
                        for (let i = from; i <= to; i++)
                            _slides.push(baseUrl + template.replace("{{x}}", i.toString()));
                        let cf = this.componentFactoryResolver.resolveComponentFactory(_shared_slides_slides_component__WEBPACK_IMPORTED_MODULE_3__["SlidesComponent"]);
                        let comp = this.contentRef.createComponent(cf);
                        comp.instance.slides = _slides;
                    }
                    break;
            }
        });
    }
    initPage() {
        this.contentRef.clear();
        if (!this.realisation)
            return;
        let _file = this.realisation.file;
        let url = this.folder + this.realisation.tag + "/" + _file;
        this.http.get(url, { responseType: "text" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(content => {
            this.createPageWithContent(content);
        });
    }
}
PageRealisationComponent.ɵfac = function PageRealisationComponent_Factory(t) { return new (t || PageRealisationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_realisation_service__WEBPACK_IMPORTED_MODULE_5__["RealisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
PageRealisationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageRealisationComponent, selectors: [["app-page-realisation"]], viewQuery: function PageRealisationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentRef = _t.first);
    } }, decls: 12, vars: 3, consts: [[1, "container", "page-realisation"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["content", ""], ["loadingBlock", ""], ["loadedBlock", ""], ["undefinedBlock", ""], ["validBlock", ""]], template: function PageRealisationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageRealisationComponent_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PageRealisationComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PageRealisationComponent_ng_template_6_Template, 1, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PageRealisationComponent_ng_template_8_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PageRealisationComponent_ng_template_10_Template, 0, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfThen", _r2)("ngIfElse", _r4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".page-realisation {\n  padding-top: 2rem;\n}\n.page-realisation img {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ2UtcmVhbGlzYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKO0FBQUk7RUFDSSxXQUFBO0FBRVIiLCJmaWxlIjoicGFnZS1yZWFsaXNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXJlYWxpc2F0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ "hrOu":
/*!*****************************************************************!*\
  !*** ./src/app/shared/logo-linkedin/logo-linkedin.component.ts ***!
  \*****************************************************************/
/*! exports provided: LogoLinkedinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoLinkedinComponent", function() { return LogoLinkedinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LogoLinkedinComponent {
    constructor() {
        this.invertedColor = false;
    }
    ngOnInit() {
    }
}
LogoLinkedinComponent.ɵfac = function LogoLinkedinComponent_Factory(t) { return new (t || LogoLinkedinComponent)(); };
LogoLinkedinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoLinkedinComponent, selectors: [["app-logo-linkedin"]], inputs: { invertedColor: "invertedColor" }, decls: 2, vars: 2, consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 382 382", 0, "xml", "space", "preserve"], ["fill", "#0077B7", "d", "M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889\n        C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056\n        H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806\n        c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1\n        s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73\n        c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079\n        c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426\n        c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472\n        L341.91,330.654L341.91,330.654z"]], template: function LogoLinkedinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("contrast", ctx.invertedColor);
    } }, styles: [".contrast[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ28tbGlua2VkaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0FBQVIiLCJmaWxlIjoibG9nby1saW5rZWRpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250cmFzdCB7XG4gICAgKiB7XG4gICAgICAgIGZpbGw6ICNmZmZmZmY7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _logo_reseaux_logo_reseaux_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logo-reseaux/logo-reseaux.component */ "wPIg");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 7, vars: 1, consts: [[1, "container", "d-grid", "grid-three-columns", "align-items-center", "height-full"], [1, "text-align-left"], [1, "text-align-center"], [1, "text-align-right"], [3, "invertedColor"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "David Violet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "davidviolet18@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-logo-reseaux", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invertedColor", true);
    } }, directives: [_logo_reseaux_logo_reseaux_component__WEBPACK_IMPORTED_MODULE_1__["LogoReseauxComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #736E79;\n  height: 5rem;\n  color: var(--text-contrast);\n}\n@media (min-width: 0px) and (max-width: 730px) {\n  [_nghost-%COMP%] {\n    height: 8rem;\n  }\n  [_nghost-%COMP%]   .text-align-left[_ngcontent-%COMP%], [_nghost-%COMP%]   .text-align-right[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  [_nghost-%COMP%]   .container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9taXhpbnMvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUFESjtBQ2NJO0VEakJKO0lBTVEsWUFBQTtFQUNOO0VBQU07SUFDSSxrQkFBQTtFQUVWO0VBQU07SUFDSSxrQkFBQTtFQUVWO0FBQ0YiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9taXhpbnMvbWl4aW5zLnNjc3NcIjtcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MzZFNzk7XG4gICAgaGVpZ2h0OiA1cmVtO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbnRyYXN0KTtcbiAgICBAaW5jbHVkZSB4cyB7XG4gICAgICAgIGhlaWdodDogOHJlbTtcbiAgICAgICAgLnRleHQtYWxpZ24tbGVmdCwgLnRleHQtYWxpZ24tcmlnaHQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWluZXIgPiBkaXYge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICAgIH1cbiAgICB9XG59IiwiQGltcG9ydCBcIi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcblxuLy8gVFlQT0dSQVBIWVxuQG1peGluIHR5cG9ncmFwaHktdGhpbiB7IGZvbnQtd2VpZ2h0OiAxMDA7IH1cbkBtaXhpbiB0eXBvZ3JhcGh5LWV4dHJhLWxpZ2h0IHsgZm9udC13ZWlnaHQ6IDIwMDsgfVxuQG1peGluIHR5cG9ncmFwaHktbGlnaHQgeyBmb250LXdlaWdodDogMzAwOyB9XG5AbWl4aW4gdHlwb2dyYXBoeS1ub3JtYWwgeyBmb250LXdlaWdodDogNDAwOyB9XG5AbWl4aW4gdHlwb2dyYXBoeS1tZWRpdW0geyBmb250LXdlaWdodDogNTAwOyB9XG5AbWl4aW4gdHlwb2dyYXBoeS1zZW1pLWJvbGQgeyBmb250LXdlaWdodDogNjAwOyB9XG5AbWl4aW4gdHlwb2dyYXBoeS1ib2xkIHsgZm9udC13ZWlnaHQ6IDcwMDsgfVxuQG1peGluIHR5cG9ncmFwaHktZXh0cmEtYm9sZCB7IGZvbnQtd2VpZ2h0OiA4MDA7IH1cbkBtaXhpbiB0eXBvZ3JhcGh5LWJsYWNrIHsgZm9udC13ZWlnaHQ6IDkwMDsgfVxuXG5AbWl4aW4gdHlwb2dyYXBoeS1yb2JvdG8geyBmb250LWZhbWlseTogJ3JvYm90bycsIHNhbnMtc2VyaWY7IH1cbkBtaXhpbiB0eXBvZ3JhcGh5LWNvb2tpZSB7IGZvbnQtZmFtaWx5OiAnY29va2llJywgY3Vyc2l2ZTsgfVxuXG4vLyBSRVNQT05TSVZFXG5AbWl4aW4geHMge1xuICAgICRtcTogbWFwLWdldCgkbWFwOiAkYnJlYWtwb2ludHMsICRrZXk6IFwieHNcIik7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7bWFwLWdldCgkbXEsIFwibWluXCIpfSkgYW5kIChtYXgtd2lkdGg6ICN7bWFwLWdldCgkbXEsIFwibWF4XCIpfSlcbiAgICB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiBzbSB7XG4gICAgJG1xOiBtYXAtZ2V0KCRtYXA6ICRicmVha3BvaW50cywgJGtleTogXCJzbVwiKTtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3ttYXAtZ2V0KCRtcSwgXCJtaW5cIil9KSBhbmQgKG1heC13aWR0aDogI3ttYXAtZ2V0KCRtcSwgXCJtYXhcIil9KVxuICAgIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIG1kIHtcbiAgICAkbXE6IG1hcC1nZXQoJG1hcDogJGJyZWFrcG9pbnRzLCAka2V5OiBcIm1kXCIpO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAje21hcC1nZXQoJG1xLCBcIm1pblwiKX0pIGFuZCAobWF4LXdpZHRoOiAje21hcC1nZXQoJG1xLCBcIm1heFwiKX0pXG4gICAge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5AbWl4aW4geGwge1xuICAgICRtcTogbWFwLWdldCgkbWFwOiAkYnJlYWtwb2ludHMsICRrZXk6IFwieGxcIik7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7bWFwLWdldCgkbXEsIFwibWluXCIpfSkgYW5kIChtYXgtd2lkdGg6ICN7bWFwLWdldCgkbXEsIFwibWF4XCIpfSlcbiAgICB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ "oE1+":
/*!*******************************************************************************************!*\
  !*** ./src/app/page-home/sections/section-presentation/section-presentation.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SectionPresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionPresentationComponent", function() { return SectionPresentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_illustration_presentation_illustration_presentation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/illustration-presentation/illustration-presentation.component */ "eKob");


class SectionPresentationComponent {
    constructor() { }
    ngOnInit() {
    }
}
SectionPresentationComponent.ɵfac = function SectionPresentationComponent_Factory(t) { return new (t || SectionPresentationComponent)(); };
SectionPresentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionPresentationComponent, selectors: [["app-section-presentation"]], decls: 22, vars: 0, consts: [[1, "line-decor"], [1, "container"], ["viewBox", "0 0 1024 550", "preserveAspectRatio", "none", 1, "line"], ["stroke-dashoffset", "40", "d", "M780 400 C 780 520, 646 450, 512 550"], [1, "container", "d-grid", "grid-two-columns", "align-items-center"], [1, "content"], [1, "header"], [1, "body1"], [1, "subtitle"], [1, "img"], [1, "decor"], ["viewBox", "0 0 548 252", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "xMidYMid meet"], ["d", "M547.455 0.409515H0.854736C2.35303 0.469475 3.90151 0.499932 5.5001 0.499931C88.3092 0.499907 111.799 15.3298 151.15 40.1737C160.27 45.9312 170.241 52.2266 182 58.9999C211.447 75.9613 241.893 67.9496 272.449 59.9089C306.747 50.8836 341.183 41.8219 374.501 67.9999C400.49 88.4205 420.032 123.222 439.034 157.064C466.094 205.255 492.061 251.5 534 251.5C538.436 251.5 542.927 251.413 547.455 251.23V0.409515Z", "fill", "#6B41A6"]], template: function SectionPresentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "David Violet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Designer et d\u00E9veloppeur d'exp\u00E9rience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Passionn\u00E9 d'innovation digitale Web, j\u2019aime r\u00E9soudre des probl\u00E8mes en imaginant et concevant des exp\u00E9riences \u00E9motionnelles \u00E0 travers d\u2019interfaces agr\u00E9ables et cr\u00E9atives. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Ma m\u00E9thode, une d\u00E9marche de conception centr\u00E9e utilisateurs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-illustration-presentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_illustration_presentation_illustration_presentation_component__WEBPACK_IMPORTED_MODULE_1__["IllustrationPresentationComponent"]], styles: ["section[_ngcontent-%COMP%] {\n  background-color: var(--secondary-color);\n  color: var(--text-contrast);\n  min-height: 34rem;\n}\n@media (min-width: 0px) and (max-width: 730px) {\n  section[_ngcontent-%COMP%] {\n    min-height: auto;\n  }\n  section[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > div.header[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > div.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\nsection[_ngcontent-%COMP%]   .decor[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -198px;\n  height: 200px;\n  right: 0;\n}\nsection[_ngcontent-%COMP%]   .decor[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NlY3Rpb24tcHJlc2VudGF0aW9uLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL21peGlucy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHdDQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQUFKO0FDZUk7RURsQko7SUFRUSxnQkFBQTtFQUROO0VBRk07SUFDSSxhQUFBO0VBSVY7QUFDRjtBQUVZO0VBQ0ksbUJBQUE7QUFBaEI7QUFDZ0I7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFDcEI7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0FBRlI7QUFHUTtFQUNJLGFBQUE7QUFEWiIsImZpbGUiOiJzZWN0aW9uLXByZXNlbnRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvbWl4aW5zL21peGlucy5zY3NzXCI7XG5zZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbnRyYXN0KTtcbiAgICBtaW4taGVpZ2h0OiAzNHJlbTtcbiAgICBAaW5jbHVkZSB4cyB7XG4gICAgICAgIC5pbWcge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICBcbiAgICAuY29udGVudCB7XG4gICAgICAgID4gZGl2IHtcbiAgICAgICAgICAgICYuaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuZGVjb3Ige1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTE5OHB4O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgPiBzdmcge1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJAaW1wb3J0IFwiLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG4vLyBUWVBPR1JBUEhZXG5AbWl4aW4gdHlwb2dyYXBoeS10aGluIHsgZm9udC13ZWlnaHQ6IDEwMDsgfVxuQG1peGluIHR5cG9ncmFwaHktZXh0cmEtbGlnaHQgeyBmb250LXdlaWdodDogMjAwOyB9XG5AbWl4aW4gdHlwb2dyYXBoeS1saWdodCB7IGZvbnQtd2VpZ2h0OiAzMDA7IH1cbkBtaXhpbiB0eXBvZ3JhcGh5LW5vcm1hbCB7IGZvbnQtd2VpZ2h0OiA0MDA7IH1cbkBtaXhpbiB0eXBvZ3JhcGh5LW1lZGl1bSB7IGZvbnQtd2VpZ2h0OiA1MDA7IH1cbkBtaXhpbiB0eXBvZ3JhcGh5LXNlbWktYm9sZCB7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cbkBtaXhpbiB0eXBvZ3JhcGh5LWJvbGQgeyBmb250LXdlaWdodDogNzAwOyB9XG5AbWl4aW4gdHlwb2dyYXBoeS1leHRyYS1ib2xkIHsgZm9udC13ZWlnaHQ6IDgwMDsgfVxuQG1peGluIHR5cG9ncmFwaHktYmxhY2sgeyBmb250LXdlaWdodDogOTAwOyB9XG5cbkBtaXhpbiB0eXBvZ3JhcGh5LXJvYm90byB7IGZvbnQtZmFtaWx5OiAncm9ib3RvJywgc2Fucy1zZXJpZjsgfVxuQG1peGluIHR5cG9ncmFwaHktY29va2llIHsgZm9udC1mYW1pbHk6ICdjb29raWUnLCBjdXJzaXZlOyB9XG5cbi8vIFJFU1BPTlNJVkVcbkBtaXhpbiB4cyB7XG4gICAgJG1xOiBtYXAtZ2V0KCRtYXA6ICRicmVha3BvaW50cywgJGtleTogXCJ4c1wiKTtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3ttYXAtZ2V0KCRtcSwgXCJtaW5cIil9KSBhbmQgKG1heC13aWR0aDogI3ttYXAtZ2V0KCRtcSwgXCJtYXhcIil9KVxuICAgIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIHNtIHtcbiAgICAkbXE6IG1hcC1nZXQoJG1hcDogJGJyZWFrcG9pbnRzLCAka2V5OiBcInNtXCIpO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAje21hcC1nZXQoJG1xLCBcIm1pblwiKX0pIGFuZCAobWF4LXdpZHRoOiAje21hcC1nZXQoJG1xLCBcIm1heFwiKX0pXG4gICAge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5AbWl4aW4gbWQge1xuICAgICRtcTogbWFwLWdldCgkbWFwOiAkYnJlYWtwb2ludHMsICRrZXk6IFwibWRcIik7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7bWFwLWdldCgkbXEsIFwibWluXCIpfSkgYW5kIChtYXgtd2lkdGg6ICN7bWFwLWdldCgkbXEsIFwibWF4XCIpfSlcbiAgICB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiB4bCB7XG4gICAgJG1xOiBtYXAtZ2V0KCRtYXA6ICRicmVha3BvaW50cywgJGtleTogXCJ4bFwiKTtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3ttYXAtZ2V0KCRtcSwgXCJtaW5cIil9KSBhbmQgKG1heC13aWR0aDogI3ttYXAtZ2V0KCRtcSwgXCJtYXhcIil9KVxuICAgIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page_home_page_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-home/page-home.component */ "O4QB");
/* harmony import */ var _page_realisation_page_realisation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-realisation/page-realisation.component */ "hA6M");
/* harmony import */ var _page_realisations_page_realisations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-realisations/page-realisations.component */ "PZ0w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: "", pathMatch: "full", component: _page_home_page_home_component__WEBPACK_IMPORTED_MODULE_1__["PageHomeComponent"] },
    { path: "realisations/:id", component: _page_realisation_page_realisation_component__WEBPACK_IMPORTED_MODULE_2__["PageRealisationComponent"] },
    { path: "realisations", component: _page_realisations_page_realisations_component__WEBPACK_IMPORTED_MODULE_3__["PageRealisationsComponent"] },
    { path: "**", redirectTo: "" }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { anchorScrolling: "enabled" })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wPIg":
/*!***************************************************************!*\
  !*** ./src/app/shared/logo-reseaux/logo-reseaux.component.ts ***!
  \***************************************************************/
/*! exports provided: LogoReseauxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoReseauxComponent", function() { return LogoReseauxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _logo_linkedin_logo_linkedin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logo-linkedin/logo-linkedin.component */ "hrOu");
/* harmony import */ var _logo_dribbble_logo_dribbble_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logo-dribbble/logo-dribbble.component */ "JSry");



class LogoReseauxComponent {
    constructor() {
        this.invertedColor = false;
    }
    ngOnInit() {
    }
}
LogoReseauxComponent.ɵfac = function LogoReseauxComponent_Factory(t) { return new (t || LogoReseauxComponent)(); };
LogoReseauxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoReseauxComponent, selectors: [["app-logo-reseaux"]], inputs: { invertedColor: "invertedColor" }, decls: 6, vars: 2, consts: [["target", "_blank", "href", "https://www.linkedin.com/in/david-violet-2b3764162/"], [3, "invertedColor"], ["target", "_blank", "href", "https://dribbble.com/dadoudidou"]], template: function LogoReseauxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-logo-linkedin", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-logo-dribbble", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invertedColor", ctx.invertedColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invertedColor", ctx.invertedColor);
    } }, directives: [_logo_linkedin_logo_linkedin_component__WEBPACK_IMPORTED_MODULE_1__["LogoLinkedinComponent"], _logo_dribbble_logo_dribbble_component__WEBPACK_IMPORTED_MODULE_2__["LogoDribbbleComponent"]], styles: ["a[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n  padding: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ28tcmVzZWF1eC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoibG9nby1yZXNlYXV4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbn0iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
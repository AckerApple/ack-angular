(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+48O":
/*!****************************************!*\
  !*** ./src/providers/WindowService.ts ***!
  \****************************************/
/*! exports provided: WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


function getWindow() { return window; }
let WindowService = class WindowService {
    get nativeElement() { return getWindow(); }
    get nativeWindow() { return getWindow(); }
};
WindowService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], WindowService);



/***/ }),

/***/ "+JZX":
/*!***********************************************!*\
  !*** ./src/providers/AckSections.provider.ts ***!
  \***********************************************/
/*! exports provided: SectionProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionProvider", function() { return SectionProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let SectionProvider = class SectionProvider {
    constructor() {
        this.headerTemplates = [];
        this.footerTemplates = [];
        this.leftBodyTemplates = [];
        this.rightBodyTemplates = [];
    }
    unregisterHeaderTemplate(item) {
        this.unregisterTemplateFrom(item, this.headerTemplates);
    }
    unregisterFooterTemplate(item) {
        this.unregisterTemplateFrom(item, this.footerTemplates);
    }
    unregisterTemplateFrom(item, templates) {
        for (let x = templates.length - 1; x >= 0; --x) {
            if (templates[x] === item) {
                templates.splice(x, 1);
                break;
            }
        }
    }
    unregisterTemplate(item) {
        this.unregisterTemplateFrom(item, this.headerTemplates);
        this.unregisterTemplateFrom(item, this.footerTemplates);
        this.unregisterTemplateFrom(item, this.leftBodyTemplates);
        this.unregisterTemplateFrom(item, this.rightBodyTemplates);
    }
};
SectionProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SectionProvider);



/***/ }),

/***/ "/2xC":
/*!**************************************************!*\
  !*** ./src/directives/ScreenScroll.directive.ts ***!
  \**************************************************/
/*! exports provided: ScreenScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenScroll", function() { return ScreenScroll; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let ScreenScroll = class ScreenScroll {
    constructor() {
        this.screenScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onScroll = () => this.screenScroll.emit({ x: window['pageXOffset'], y: window['pageYOffset'] });
        this.onScroll();
        window.addEventListener("scroll", this.onScroll);
    }
    ngOnInit() {
        Promise.resolve().then(() => this.onScroll());
    }
    ngOnDestroy() {
        window.removeEventListener("scroll", this.onScroll);
    }
};
ScreenScroll.ctorParameters = () => [];
ScreenScroll.propDecorators = {
    screenScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
ScreenScroll = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[screenScroll]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ScreenScroll);



/***/ }),

/***/ "/7QA":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: AckModule, AckRouterModule, RouteWatchReporter, components, pipes, ack, AckArray, HtmlSizeService, Log, AckApp, Prompts, ErrorLog, UrlVars, WindowService, DocumentService, providers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AckModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AckModule */ "RFfi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AckModule", function() { return _AckModule__WEBPACK_IMPORTED_MODULE_0__["AckModule"]; });

/* harmony import */ var _modules_router_AckRouterModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/router/AckRouterModule */ "3P8O");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AckRouterModule", function() { return _modules_router_AckRouterModule__WEBPACK_IMPORTED_MODULE_1__["AckRouterModule"]; });

/* harmony import */ var _modules_router_RouteWatchReporter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/router/RouteWatchReporter */ "o6mJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteWatchReporter", function() { return _modules_router_RouteWatchReporter__WEBPACK_IMPORTED_MODULE_2__["RouteWatchReporter"]; });

/* harmony import */ var _declarations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./declarations */ "O5Bq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _declarations__WEBPACK_IMPORTED_MODULE_3__["declarations"]; });

/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes */ "yco1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipes", function() { return _pipes__WEBPACK_IMPORTED_MODULE_4__["declarations"]; });

/* harmony import */ var _ack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ack */ "L1dz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ack", function() { return _ack__WEBPACK_IMPORTED_MODULE_5__["ack"]; });

/* harmony import */ var _directives_AckArray_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/AckArray.directive */ "4Ihc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AckArray", function() { return _directives_AckArray_directive__WEBPACK_IMPORTED_MODULE_6__["AckArray"]; });

/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./providers */ "AkTa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HtmlSizeService", function() { return _providers__WEBPACK_IMPORTED_MODULE_7__["HtmlSizeService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return _providers__WEBPACK_IMPORTED_MODULE_7__["Log"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AckApp", function() { return _providers__WEBPACK_IMPORTED_MODULE_7__["AckApp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prompts", function() { return _providers__WEBPACK_IMPORTED_MODULE_7__["Prompts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorLog", function() { return _providers__WEBPACK_IMPORTED_MODULE_7__["ErrorLog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlVars", function() { return _providers__WEBPACK_IMPORTED_MODULE_7__["UrlVars"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return _providers__WEBPACK_IMPORTED_MODULE_7__["WindowService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentService", function() { return _providers__WEBPACK_IMPORTED_MODULE_7__["DocumentService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "providers", function() { return _providers__WEBPACK_IMPORTED_MODULE_7__["providers"]; });











/***/ }),

/***/ "/D3w":
/*!***********************************************!*\
  !*** ./src/components/ErrorWell.component.ts ***!
  \***********************************************/
/*! exports provided: ErrorWell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorWell", function() { return ErrorWell; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ack_angular_fx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ack-angular-fx */ "cRtS");
/* harmony import */ var _templates_error_well_pug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/error-well.pug */ "WH1a");




let ErrorWell = class ErrorWell {
    constructor() {
        this.message = 'Unexpected Error Occured';
        this.closable = true;
        this.allowDetails = true;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.cssClasses = this.cssClasses || 'bg-danger border border-danger text-danger';
    }
    getErrorMessage(error) {
        if (!error)
            return this.message;
        if (typeof error == 'string')
            return error;
        return error.message || error["statusText"] || this.message;
    }
};
ErrorWell.propDecorators = {
    moreDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    cssClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    closable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    allowDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    titleFooter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ["titleFooter",] }]
};
ErrorWell = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'error-well',
        template: _templates_error_well_pug__WEBPACK_IMPORTED_MODULE_3__["string"],
        animations: ack_angular_fx__WEBPACK_IMPORTED_MODULE_2__["animations"]
    })
], ErrorWell);



/***/ }),

/***/ "/ibX":
/*!***************************************!*\
  !*** ./modules/offline/AckOffline.ts ***!
  \***************************************/
/*! exports provided: AckOffline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AckOffline", function() { return AckOffline; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! localforage */ "oAJy");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let AckOffline = class AckOffline {
    constructor() {
        this.prefix = "offline";
    }
    set(name, data) {
        if (data && data.constructor == Object)
            data.offlineSavedAt = new Date().toString();
        if (data && data.constructor == Object)
            data.offlineCreatedAt = data.offlineCreatedAt || new Date().toString();
        return localforage__WEBPACK_IMPORTED_MODULE_1__["setItem"](this.prefix + '-' + name, data);
    }
    get(name) {
        return localforage__WEBPACK_IMPORTED_MODULE_1__["getItem"](this.prefix + '-' + name);
    }
    remove(name) {
        return localforage__WEBPACK_IMPORTED_MODULE_1__["removeItem"](this.prefix + '-' + name);
    }
    clear(name) { return this.remove(name); }
    clearAll() {
        return this.promiseNameArray().then((keys) => keys.forEach(name => this.remove(name)));
    }
    promiseNameArray() {
        let keys = [];
        return localforage__WEBPACK_IMPORTED_MODULE_1__["iterate"]((_, k) => {
            if (k.startsWith(this.prefix)) {
                keys.push(k.substring(this.prefix.length + 1, k.length));
            }
        })
            .then(() => keys);
    }
};
AckOffline = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AckOffline);



/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./example/src/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ackerapple/projects/web/angular/ack-angular/src/example/src/index.ts */"kKke");


/***/ }),

/***/ "1KjV":
/*!****************************************************!*\
  !*** ./src/components/AckModalLayout.component.ts ***!
  \****************************************************/
/*! exports provided: AckModalLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AckModalLayout", function() { return AckModalLayout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _providers_AckApp_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/AckApp.provider */ "6x/B");
/* harmony import */ var ack_angular_fx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ack-angular-fx */ "cRtS");
/* harmony import */ var _templates_ack_modal_layout_pug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/ack-modal-layout.pug */ "E4xO");





let AckModalLayout = class AckModalLayout {
    constructor(element, AckApp) {
        this.element = element;
        this.AckApp = AckApp;
        this.zIndex = 20;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.allowClose = true;
        this.isModelMode = false;
        this.showModel = true;
        this.showModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        setTimeout(() => this.clickListenForClose(), 400);
    }
    clickListenForClose() {
        this.element.nativeElement.addEventListener('click', (event) => {
            if (!this.allowClose)
                return false;
            const eTar = event.srcElement || event.toElement || event.target;
            const isDirectChild = eTar == this.element.nativeElement.children[0] || eTar == this.element.nativeElement.children[0].children[0];
            if (isDirectChild) {
                this.fireClose();
            }
            return true;
        });
    }
    ngOnInit() {
        return Promise.resolve().then(() => {
            if (this.showModel !== undefined && this.showModelChange.observers.length) {
                this.isModelMode = true;
            }
        });
    }
    fireClose() {
        this.showModelChange.emit(this.showModel = false);
        this.close.emit(this);
    }
};
AckModalLayout.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _providers_AckApp_provider__WEBPACK_IMPORTED_MODULE_2__["AckApp"] }
];
AckModalLayout.propDecorators = {
    zIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    allowClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    wrapStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    wrapCellStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    isModelMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
AckModalLayout = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ack-modal-layout',
        template: _templates_ack_modal_layout_pug__WEBPACK_IMPORTED_MODULE_4__["string"],
        animations: ack_angular_fx__WEBPACK_IMPORTED_MODULE_3__["animations"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _providers_AckApp_provider__WEBPACK_IMPORTED_MODULE_2__["AckApp"]])
], AckModalLayout);



/***/ }),

/***/ "1dUt":
/*!******************************************!*\
  !*** ./src/providers/DocumentService.ts ***!
  \******************************************/
/*! exports provided: DocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentService", function() { return DocumentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


function getDocument() { return document; }
let DocumentService = class DocumentService {
    get nativeElement() { return getDocument(); }
};
DocumentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DocumentService);



/***/ }),

/***/ "2Uos":
/*!************************************************************!*\
  !*** ./src/directives/ScreenScrollHeightDiff.directive.ts ***!
  \************************************************************/
/*! exports provided: ScreenScrollHeightDiff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenScrollHeightDiff", function() { return ScreenScrollHeightDiff; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let ScreenScrollHeightDiff = class ScreenScrollHeightDiff {
    constructor() {
        this.screenScrollHeightDiffChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.on = () => {
            this.apply();
        };
        window.addEventListener("scroll", this.on);
        window.addEventListener("resize", this.on);
    }
    apply() {
        this.screenScrollHeightDiff = document.body.scrollHeight - window.innerHeight;
        if (this.screenScrollHeightDiff < 0)
            this.screenScrollHeightDiff = 0;
        this.screenScrollHeightDiffChange.emit(this.screenScrollHeightDiff);
    }
    ngOnDestroy() {
        window.removeEventListener("scroll", this.on);
        window.removeEventListener("resize", this.on);
    }
};
ScreenScrollHeightDiff.ctorParameters = () => [];
ScreenScrollHeightDiff.propDecorators = {
    screenScrollHeightDiff: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    screenScrollHeightDiffChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
ScreenScrollHeightDiff = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[screenScrollHeightDiff]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ScreenScrollHeightDiff);



/***/ }),

/***/ "2nh+":
/*!**********************************************!*\
  !*** ./example/src/templates/jjs-woz.pug.ts ***!
  \**********************************************/
/*! exports provided: string */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
const string = "<h2 class=\"margin-top-0\">Jersey Jack's The Wizard of Oz</h2><audio style=\"display:none;\"><source src=\"WoZ.mp3\" type=\"audio/mpeg\"/></audio><div class=\"text-xs text-grey-2x text-center\">NOTE: This is not a sponsored nor paid advertisement. Just a showing of love for pinball.</div><div class=\"text-center flex-center flex-wrap\"><div class=\"flex-1\"><a href=\"http://www.jerseyjackpinball.com/\"><img class=\"width-full\" src=\"wizard75.png\" style=\"max-width:497px;\" border=\"0\"/><div class=\"margin text-info text-xs\">tap image above</div></a></div></div><div class=\"max-width-600\"><p>As a boy I fell in love with pinball, especially the memories with my mom yelling at the exciting parts of pinball play.</p><p class=\"text-grey-2x\">Then for years pinball disappeard along with the arcades, for quite some time.</p><p>I have fallen back into loving pinball! Pinball is back! And I only had to play this modern pinball machine one time, The Wizard of Oz - 75th Anniversary Edition by <a href=\"http://www.jerseyjackpinball.com/\">Jersey Jack Pinball</a>. This machine with it's great marriage of hardware to software, pulled the child out of this Software Engineer.</p><p>You should check her out too. She's a beauty with her purty color changing LED lights.</p><p class=\"text-grey\">_Acker Apple</p></div>";


/***/ }),

/***/ "3+aZ":
/*!************************************************!*\
  !*** ./example/src/PipesExamples.component.ts ***!
  \************************************************/
/*! exports provided: PipesExamples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesExamples", function() { return PipesExamples; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_templates_pipes_examples_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./templates/pipes-examples.html */ "J8rJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ack_angular_fx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ack-angular-fx */ "cRtS");
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-page-scroll-core */ "Mpij");





let PipesExamples = class PipesExamples {
    constructor(PageScrollService) {
        this.PageScrollService = PageScrollService;
        this.views = {};
        this.simpleArray = ["a", "b", "c"];
    }
    scrollToModuleImport() {
        setTimeout(() => {
            this.PageScrollService.scroll({ document: document, scrollTarget: "#Import AckModule" });
        }, 600);
    }
};
PipesExamples.ctorParameters = () => [
    { type: ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_4__["PageScrollService"] }
];
PipesExamples = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "pipes-examples",
        template: _raw_loader_templates_pipes_examples_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: ack_angular_fx__WEBPACK_IMPORTED_MODULE_3__["animations"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_4__["PageScrollService"]])
], PipesExamples);



/***/ }),

/***/ "3DDj":
/*!**********************************************************!*\
  !*** ./src/components/debug-area/debug-area.template.ts ***!
  \**********************************************************/
/*! exports provided: string */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
const string = "<div class=\"child-pad-h-xs flex-wrap text-center\" *ngIf=\"DebugItems.length&gt;1\"><a class=\"cursor-pointer border border-grey-3x radius-5 flex-1\" *ngFor=\"let item of DebugItems\" [ngClass]=\"item===debugItem ? 'bg-positive text-white' : ''\" (click)=\"debugItem = debugItem===item ? null : item\">{{item.name}}<ng-container *ngIf=\"item.type==='array'\">&nbsp;( {{ item.value?.length || 0 }} )</ng-container></a></div><ng-container *ngIf=\"debugItem\"><h3 class=\"margin-bottom-0\">{{ debugItem.name }}</h3><ng-container *ngIf=\"debugItem.type==='array';else regdebug\"><ng-container #loop=\"var\" [var]=\"{view:0}\"></ng-container><pre class=\"bg-grey-3x margin-0 sample-code\" *ngFor=\"let data of debugItem.value;let ii=index\"><ng-container *ngIf=\"loop.var.view==ii\"><div class=\"flex-valign-center child-pad-xs\" style=\"padding:.4em;float:right\"><a class=\"fas fa-caret-square-left hover-bg-energized\" (click)=\"loop.var.view=ii===0 ? debugItem.value.length-1 : ii-1\">&lt;</a><a style=\"color:blue;\" (click)=\"editsMap[ii]=!editsMap[ii]\">edit</a><a style=\"color:blue;\" (click)=\"debugItem.type=null\">all</a><a class=\"fas fa-caret-square-right hover-bg-energized\" (click)=\"loop.var.view=ii===debugItem.value.length-1 ? 0 : ii+1\">&gt;</a></div><p><ng-container *ngIf=\"debugItem.rowTitle;else defaultRowLabel\"><ng-template *ngTemplateOutlet=\"debugItem.rowTitle;context:{index:ii}\"></ng-template></ng-container><ng-template #defaultRowLabel=\"\"><strong>Result {{ii}} of {{debugItem.value.length}} </strong></ng-template></p><absolute-overflow-x *ngIf=\"!editsMap[ii]\" style=\"font-size:0.8em;\"><pre>{{ data | json }}</pre></absolute-overflow-x><ng-container *ngIf=\"editsMap[ii]\"><textarea [name]=\"'editsMap' + ii\" style=\"width:100%;height:300px\" (change)=\"dataString = $event.target.value\">{{ data | json }}</textarea><div style=\"text-align:center\"><a style=\"color:blue;padding-top:.4em;\" (click)=\"updateDataByJsonString(data, dataString, debugItem);editsMap[ii]=false\">save</a></div></ng-container></ng-container></pre></ng-container><ng-template #regdebug=\"\"><div class=\"pos-rel\"><div class=\"pos-abs right-0 z-index-10\"><div class=\"pad-xxs\"><i class=\"fas fa-pencil-alt hover-text-energized\" (click)=\"edit=!edit\" [class.text-calm]=\"edit\">edit</i></div></div></div><ng-container *ngIf=\"edit;else readMode\"><textarea class=\"width-full\" rows=\"30\" (change)=\"apply(debugItem.value,$event.target.value, debugItem)\" wrap=\"off\">{{ debugItem.value | json }}</textarea></ng-container><ng-template #readMode=\"\"><absolute-overflow-x><pre class=\"code-sample\">{{ debugItem.value | json }}</pre></absolute-overflow-x></ng-template></ng-template></ng-container>";


/***/ }),

/***/ "3P8O":
/*!***********************************************!*\
  !*** ./src/modules/router/AckRouterModule.ts ***!
  \***********************************************/
/*! exports provided: providers, AckRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providers", function() { return providers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AckRouterModule", function() { return AckRouterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _RouteWatchReporter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RouteWatchReporter */ "o6mJ");
/* harmony import */ var _RouteHistory_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RouteHistory.provider */ "SXd7");
/* harmony import */ var _RouteReporter_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RouteReporter.directive */ "Ys4p");
var AckRouterModule_1;







const providers = [_RouteWatchReporter__WEBPACK_IMPORTED_MODULE_4__["RouteWatchReporter"], _RouteHistory_provider__WEBPACK_IMPORTED_MODULE_5__["RouteHistory"]];
let AckRouterModule = AckRouterModule_1 = class AckRouterModule {
    static forRoot() {
        return {
            ngModule: AckRouterModule_1,
            providers: providers
        };
    }
};
AckRouterModule = AckRouterModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ],
        declarations: [_RouteReporter_directive__WEBPACK_IMPORTED_MODULE_6__["RouteReporter"]],
        exports: [
            _RouteReporter_directive__WEBPACK_IMPORTED_MODULE_6__["RouteReporter"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]
    })
], AckRouterModule);



/***/ }),

/***/ "4Ihc":
/*!**********************************************!*\
  !*** ./src/directives/AckArray.directive.ts ***!
  \**********************************************/
/*! exports provided: AckArray, dataKeysMatch, mergeArrays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AckArray", function() { return AckArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataKeysMatch", function() { return dataKeysMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeArrays", function() { return mergeArrays; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "7RJT");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _AckAggregate_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AckAggregate.directive */ "LfEq");




let AckArray = class AckArray {
    constructor(_iterableDiffers) {
        this._iterableDiffers = _iterableDiffers;
        this.pushed = {};
        this.inSort = false;
        this.sortArray = [];
        this.pageAt = 0;
        this.pagesChange = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.page = 0;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.keyMapChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.loopStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.loopEach = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.loopEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.arrayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        const f = this._iterableDiffers.find([]);
        this.iterableDiffer = f.create();
    }
    ngOnDestroy() {
        if (this.array$sub) {
            this.array$sub.unsubscribe();
        }
    }
    ngOnInit() {
        if (this.keyMapChange.observers.length) {
            if (!this.keyMap) {
                Promise.resolve().then(() => {
                    this.keyMap = {};
                    this.keyMapChange.emit(this.keyMap);
                });
            }
            this.pushCreateMap();
        }
    }
    ngAfterViewInit() {
        if (this.AckAggregates) {
            this.pushAggregates(this.AckAggregates);
        }
        this.inited = true;
        Promise.resolve().then(() => this.loop(true));
    }
    ngDoCheck() {
        if (!this.inited)
            return;
        let changes = this.iterableDiffer.diff(this.array);
        if (changes) {
            Promise.resolve().then(() => this.loop(false));
        }
    }
    ngOnChanges(changes) {
        if (changes.array$) {
            if (this.array$sub) {
                this.array$sub.unsubscribe();
                delete this.array$sub;
            }
            if (this.array$) {
                this.array$sub = this.array$.subscribe(array => {
                    if (this.merge) {
                        mergeArrays(this.array, array, this.idKeys);
                    }
                    else {
                        const reset = this.array != array;
                        this.array = array;
                        this.loop(reset);
                    }
                });
            }
        }
        let loop = changes.array ? true : false;
        if (changes.pageAt) {
            this.pushCreatePages();
            loop = true;
        }
        if (this.inited && loop) {
            Promise.resolve().then(() => this.loop(true));
        }
    }
    pushAggregates(aggs) {
        aggs.forEach(agg => {
            let memory;
            switch (agg.type) {
                default: {
                    this.loopStart.subscribe(() => memory = 0);
                    this.loopEach.subscribe(loop => {
                        const value = this.getItemValueByKeys(loop.item, agg.keys);
                        if (value) {
                            memory = memory + value;
                        }
                    });
                    this.loopEnd.subscribe(() => {
                        agg.output = memory;
                        agg.outputChange.emit(memory);
                    });
                }
            }
        });
    }
    getItemValueByKeys(item, keys) {
        for (let x = 0; x < keys.length; ++x) {
            let keyName = keys[x];
            item = item[keyName];
            if (item == null)
                return null;
        }
        return item;
    }
    loop(reset) {
        if (!this.array) {
            this.array = [];
        }
        this.loopStart.emit(reset);
        const last = this.array.length;
        for (let x = 0; x < last; ++x) {
            this.loopEach.emit({ index: x, item: this.array[x] });
        }
        this.loopEnd.emit();
    }
    pushCreateMap() {
        if (this.pushed.createMap)
            return;
        this.pushed.createMap = true;
        this.loopStart.subscribe(() => this.keyMap = {});
        this.loopEach.subscribe(ob => {
            let key = this.getItemId(ob.item);
            this.keyMap[key] = ob.item;
        });
        this.loopEnd.subscribe(() => this.keyMapChange.emit(this.keyMap));
    }
    pushCreatePages() {
        if (this.pushed.createPages)
            return;
        this.pushed.createPages = true;
        let pos = 0;
        let last = 0;
        this.loopStart.subscribe(reset => {
            pos = 0;
            last = this.array.length;
            if (reset) {
                this.pageChange.emit(this.page = 0);
            }
            this.pages = this.pages || [];
            this.pages.length = 0;
            this.pages.push([]);
        });
        this.loopEach.subscribe(ob => {
            this.pages[pos].push(ob.item);
            if (this.pages[pos].length == this.pageAt && ob.index < last - 1) {
                this.pages.push([]);
                ++pos;
            }
        });
        this.loopEnd.subscribe(() => {
            if (this.page && this.page >= this.pages.length) {
                this.pageChange.emit(this.page = 0);
            }
            this.pagesChange.next(this.pages);
        });
    }
    only(item) {
        this.array.length = 0;
        this.array.push(item);
        this.arrayChange.emit(this.array);
        this.loop(true);
    }
    getItemId(item) {
        return this.idKeys && this.idKeys[0] && item[this.idKeys[0]];
    }
    getCompareArray() {
        if (this.array && this.idKeys && this.idKeys.length) {
            const idKey = this.idKeys[0];
            return this.array.map(item => item[idKey]);
        }
        return this.array || [];
    }
    itemIndex(item) {
        const array = this.getCompareArray();
        for (let x = array.length - 1; x >= 0; --x) {
            if (dataKeysMatch(array[x], item, this.idKeys)) {
                return x;
            }
        }
        return -1;
    }
    toggle(item) {
        const index = this.itemIndex(item);
        if (index >= 0) {
            return this.splice(index);
        }
        return this.push(item);
    }
    push(item) {
        this.param().push(item);
        this.loop(false);
        return this;
    }
    unshift(item) {
        this.param().unshift(item);
        return this;
    }
    splice(x, y = 1) {
        this.param().splice(x, y);
        this.loop(false);
        return this;
    }
    param() {
        if (!this.array)
            this.arrayChange.emit(this.array = []);
        return this.array;
    }
    toggleSort(arrayKey, sortType) {
        if (this.inSort)
            return false;
        this.inSort = true;
        let asc = false;
        if (this.sortArray.length && this.sortArray[0].arrayKey) {
            asc = !this.sortArray[0].asc;
            this.sortArray[0] = {
                arrayKey: arrayKey,
                asc: !this.sortArray[0].asc
            };
        }
        else {
            this.sortArray.unshift({
                arrayKey: arrayKey,
                asc: asc
            });
        }
        const toKey = function (a, index = 0) {
            const value = a[arrayKey[index]];
            if (value == null || index == arrayKey.length - 1) {
                return value;
            }
            return toKey(value, index + 1);
        };
        if (arrayKey.constructor != Array) {
            arrayKey = [arrayKey];
        }
        const numberSort = !isNaN(sortType) || ["int", "number"].indexOf(sortType) >= 0;
        if (numberSort) {
            if (asc) {
                this.array.sort((a, b) => Number(toKey(a)) - Number(toKey(b)));
            }
            else {
                this.array.sort((b, a) => Number(toKey(a)) - Number(toKey(b)));
            }
        }
        else {
            switch (sortType) {
                case "date":
                case "time":
                case "datetime":
                    if (asc) {
                        this.array.sort((a, b) => {
                            a = new Date(toKey(a, 0));
                            b = new Date(toKey(b, 0));
                            return a == "Invalid Date" || a > b ? -1 : b == "Invalid Date" || a < b ? 1 : 0;
                        });
                    }
                    else {
                        this.array.sort((b, a) => {
                            a = new Date(toKey(a, 0));
                            b = new Date(toKey(b, 0));
                            return a == "Invalid Date" || a > b ? -1 : b == "Invalid Date" || a < b ? 1 : 0;
                        });
                    }
                    break;
                default:
                    if (asc) {
                        this.array.sort((a, b) => String(toKey(a) || "").toLowerCase() > String(toKey(b) || "").toLowerCase() ? 1 : -1);
                    }
                    else {
                        this.array.sort((b, a) => String(toKey(a) || "").toLowerCase() > String(toKey(b) || "").toLowerCase() ? 1 : -1);
                    }
            }
        }
        if (this.sortArray.length > 3) {
            this.sortArray.pop();
        }
        this.inSort = false;
        this.loop(true);
    }
};
AckArray.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"] }
];
AckArray.propDecorators = {
    pageAt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    pages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    pagesChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    pageChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    keyMap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    keyMapChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    AckAggregates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [_AckAggregate_directive__WEBPACK_IMPORTED_MODULE_3__["AckAggregate"],] }],
    idKeys: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    merge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    array: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    arrayChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    array$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
AckArray = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
        selector: "ack-array",
        exportAs: "AckArray"
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"]])
], AckArray);

function dataKeysMatch(ao, an, idKeys) {
    for (let x = idKeys.length - 1; x >= 0; --x) {
        let idKey = idKeys[x];
        if (ao[idKey] != null && ao[idKey] !== an[idKey]) {
            return false;
        }
    }
    return true;
}
function mergeArrays(arrayOriginal, arrayNew, idKeys) {
    for (let x = arrayOriginal.length - 1; x >= 0; --x) {
        let ao = arrayOriginal[x];
        let an = arrayNew[x];
        if (an && dataKeysMatch(ao, an, idKeys)) {
            continue;
        }
        let found = false;
        for (let xx = arrayNew.length - 1; xx >= 0; --xx) {
            if (dataKeysMatch(ao, arrayNew[xx], idKeys)) {
                found = true;
                break;
            }
        }
        if (found)
            continue;
        arrayOriginal.splice(x, 1);
    }
    for (let x = 0; x < arrayNew.length; ++x) {
        let ao = arrayOriginal[x];
        let an = arrayNew[x];
        let found = false;
        if (ao && dataKeysMatch(ao, an, idKeys)) {
            mergeObjects(ao, an);
            continue;
        }
        for (let xx = arrayOriginal.length - 1; xx >= 0; --xx) {
            ao = arrayOriginal[xx];
            if (dataKeysMatch(ao, an, idKeys)) {
                mergeObjects(ao, an);
                found = true;
                continue;
            }
        }
        if (found) {
            continue;
        }
        arrayOriginal.splice(x, 0, an);
    }
}
function mergeObjects(ao, an) {
    for (let x in ao) {
        delete ao[x];
    }
    Object.assign(ao, an);
}


/***/ }),

/***/ "4rJv":
/*!***********************************************************!*\
  !*** ./src/components/templates/ack-options-modal.pug.ts ***!
  \***********************************************************/
/*! exports provided: string */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
const string = "<ack-modal (close)=\"close.emit($event)\" [allowClose]=\"allowClose\" [showModel]=\"showModel\" (showModelChange)=\"showModelChange.emit($event)\" [isModelMode]=\"showModelChange.observers.length\" [wrapStyle]=\"wrapStyle\" [wrapCellStyle]=\"wrapCellStyle\" [backgroundColor]=\"backgroundColor\" (backgroundColorChange)=\"backgroundColorChange.emit($event)\"><ng-content></ng-content><div class=\"border-grey-6x border bg-white\"><ack-options #ackOptions=\"\" [array]=\"array\" [max]=\"max\" [modelAsArray]=\"modelAsArray\" [model]=\"model\" (modelChange)=\"fireModelChange($event)\" [multiple]=\"multiple\" [toggleable]=\"toggleable\" [stylize]=\"stylize\" [inputTemplateRefs]=\"templateRefs\" [arrayKey]=\"arrayKey\" [arrayToModelKey]=\"arrayToModelKey\" [modelKey]=\"modelKey\"></ack-options></div></ack-modal>";


/***/ }),

/***/ "5sUW":
/*!*****************************************************!*\
  !*** ./src/directives/HtmlHeightModel.directive.ts ***!
  \*****************************************************/
/*! exports provided: HtmlHeightModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlHeightModel", function() { return HtmlHeightModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _HtmlSizeWatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HtmlSizeWatcher */ "B6H9");
/* harmony import */ var _HtmlWidthModel_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HtmlWidthModel.directive */ "7RV/");




let HtmlHeightModel = class HtmlHeightModel extends _HtmlWidthModel_directive__WEBPACK_IMPORTED_MODULE_3__["HtmlWidthModel"] {
    constructor(HtmlSizeService) {
        super(HtmlSizeService);
        this.HtmlSizeService = HtmlSizeService;
        this.htmlHeightModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    hasChanged() {
        return this.htmlHeightModel !== window.document.documentElement.clientHeight;
    }
    setModel(model) {
        this.htmlHeightModel = model.height;
        this.htmlHeightModelChange.emit(this.htmlHeightModel);
    }
};
HtmlHeightModel.ctorParameters = () => [
    { type: _HtmlSizeWatcher__WEBPACK_IMPORTED_MODULE_2__["HtmlSizeService"] }
];
HtmlHeightModel.propDecorators = {
    htmlHeightModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    htmlHeightModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
HtmlHeightModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[htmlHeightModel]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_HtmlSizeWatcher__WEBPACK_IMPORTED_MODULE_2__["HtmlSizeService"]])
], HtmlHeightModel);



/***/ }),

/***/ "6DBY":
/*!**********************************************!*\
  !*** ./src/directives/SelectOn.directive.ts ***!
  \**********************************************/
/*! exports provided: SelectOn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectOn", function() { return SelectOn; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let SelectOn = class SelectOn {
    constructor(element) {
        this.element = element;
        this.selectOnDelay = 0;
        this.selectThen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        if (changes.selectOn && changes.selectOn.currentValue) {
            if (this.selectOnDelay === 0) {
                Promise.resolve().then(() => this.update());
            }
            setTimeout(() => this.update(), this.selectOnDelay);
        }
    }
    update() {
        this.element.nativeElement.select();
        this.selectThen.emit();
    }
};
SelectOn.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
SelectOn.propDecorators = {
    selectOn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selectOnDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selectThen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
SelectOn = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[selectOn]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], SelectOn);



/***/ }),

/***/ "6L4j":
/*!****************************************************!*\
  !*** ./example/src/templates/ack-app-stage.pug.ts ***!
  \****************************************************/
/*! exports provided: string */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
const string = "<ng-container [(htmlWidthModel)]=\"screenWidthModel\"></ng-container><route-reporter (beforeChange)=\"panelAnim=$event.isBackMode?'slideInLeft':'slideInRight';isBackMode=$event.isBackMode;\" (onChange)=\"stateName=$event.current.config.name\"></route-reporter><ack-fixed-element-stage></ack-fixed-element-stage><div id=\"top\"></div><reader-header-body style=\"font-size:16px;\"><ack-sections mode=\"clone\"><ack-section-templates *ngIf=\"screenWidthModel &lt; 800\"><ng-template #sectionFooter=\"\"><absolute-overflow-x class=\"bg-info text-center border-top border-grey-2x\" [@fadeInOutUp]=\"1\"><div class=\"flex child-hover-bg-warning child-pad-h-lg child-pad-v-sm\"><a class=\"nowrap no-a-style flex-1 border-right border-white height-60 flex-valign-center\" *ngFor=\"let item of menu\" [ngClass]=\"{'strong bg-energized':stateName==item.path}\" [href]=\"'#/' + item.path\">{{ item.data.title }}</a></div></absolute-overflow-x></ng-template></ack-section-templates><fx-tracker #fx=\"\" [activatedRoute]=\"routerOutlet.activated ? routerOutlet.activatedRoute : null\"></fx-tracker><table class=\"height-full width-full\" cellPadding=\"0\" cellSpacing=\"0\" border=\"0\"><tbody><tr><td><div style=\"max-width:1000px\"><div class=\"bg-energized border-grey-3x border-left-1 border-right-1\"><div class=\"flex-valign-center flex-wrap\"><strong class=\"margin-0\" [ngClass]=\"screenWidthModel &gt; 800 ? 'pad-xs text-6x' : 'pad-xxs text-4x'\"><span class=\"text-sm\">🚴</span>&nbsp;ack-angular</strong><span class=\"text-right flex-1 text-white pad-right-xs\">v{{ version }}</span></div></div><div *ngIf=\"screenWidthModel &gt; 800\" [@fadeInOutUp]=\"1\"><scroll-past-fixed><div style=\"max-width:1000px\"><absolute-overflow-x class=\"bg-info text-center border-bottom border-grey-2x\"><div class=\"flex child-hover-bg-warning child-pad-sm text-2x\"><a class=\"no-a-style flex-1 border-right border-white\" *ngFor=\"let item of menu\" [ngClass]=\"{'strong bg-energized':stateName==item.path}\" [href]=\"'#/' + item.path\">{{ item.data.title }}</a></div></absolute-overflow-x></div></scroll-past-fixed></div></div></td></tr><tr><td class=\"width-full height-full bg-white border-grey-3x\"><table class=\"width-full height-full\" cellPadding=\"0\" cellSpacing=\"0\" border=\"0\"><tr><td [ngClass]=\"screenWidthModel&gt;=800 ? 'width-20' : 'width-10'\"></td><td><div class=\"text-left height-full pad-top-lg\" [@slideInOutLeftKids]=\"{value:fx.id, params:{time:'500ms'}}\" [@absoluteKids]=\"{value:fx.id, params:{time:'500ms'}}\" (@absoluteKids.start)=\"inFx=true\" (@absoluteKids.done)=\"inFx=false\" [style.max-width.px]=\"screenWidthModel - (screenWidthModel&gt;=800 ? 40 : 20)\" [ngStyle]=\"inFx ? {position:'relative',overflow:'hidden'} : null\"><router-outlet #routerOutlet=\"outlet\"></router-outlet></div></td><td [ngClass]=\"screenWidthModel&gt;=800 ? 'width-20' : 'width-10'\"></td></tr></table></td></tr><tr><td><div class=\"text-center\" *ngIf=\"!inFx\"><br/><a class=\"text-xs\" href=\"#top\" pageScroll=\"pageScroll\">top</a><br/><br/></div></td></tr></tbody></table></ack-sections></reader-header-body>";


/***/ }),

/***/ "6x/B":
/*!******************************************!*\
  !*** ./src/providers/AckApp.provider.ts ***!
  \******************************************/
/*! exports provided: AckApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AckApp", function() { return AckApp; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _Prompts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Prompts */ "jXv3");



let AckApp = class AckApp {
    constructor(prompts) {
        this.prompts = prompts;
        this.warnedFixElements = true;
        this.fixedElms = [];
        this.modals = [];
    }
    registerModal(item) {
        this.modals.push(item);
        return this;
    }
    unregisterModal(item) {
        for (let index = this.modals.length - 1; index >= 0; --index) {
            if (this.modals[index] == item) {
                this.modals.splice(index, 1);
                break;
            }
        }
        return this;
    }
};
AckApp.ctorParameters = () => [
    { type: _Prompts__WEBPACK_IMPORTED_MODULE_2__["Prompts"] }
];
AckApp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Prompts__WEBPACK_IMPORTED_MODULE_2__["Prompts"]])
], AckApp);



/***/ }),

/***/ "7RV/":
/*!****************************************************!*\
  !*** ./src/directives/HtmlWidthModel.directive.ts ***!
  \****************************************************/
/*! exports provided: HtmlWidthModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlWidthModel", function() { return HtmlWidthModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _HtmlSizeWatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HtmlSizeWatcher */ "B6H9");



let HtmlWidthModel = class HtmlWidthModel {
    constructor(HtmlSizeService) {
        this.HtmlSizeService = HtmlSizeService;
        this.htmlWidthModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sub = this.HtmlSizeService.change.subscribe(() => this.changed());
        this.HtmlSizeService.checkWatchers();
    }
    ngAfterViewInit() {
        Promise.resolve().then(() => this.changed());
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
        this.HtmlSizeService.checkWatchers();
    }
    changed() {
        if (!this.HtmlSizeService.htmlSize || !this.hasChanged())
            return;
        this.setModel(this.HtmlSizeService.htmlSize);
    }
    hasChanged() {
        return this.htmlWidthModel !== window.document.documentElement.clientWidth;
    }
    setModel(htmlSize) {
        this.htmlWidthModel = htmlSize.width;
        this.htmlWidthModelChange.emit(this.htmlWidthModel);
    }
};
HtmlWidthModel.ctorParameters = () => [
    { type: _HtmlSizeWatcher__WEBPACK_IMPORTED_MODULE_2__["HtmlSizeService"] }
];
HtmlWidthModel.propDecorators = {
    htmlWidthModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    htmlWidthModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
HtmlWidthModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[htmlWidthModel]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_HtmlSizeWatcher__WEBPACK_IMPORTED_MODULE_2__["HtmlSizeService"]])
], HtmlWidthModel);



/***/ }),

/***/ "8SBA":
/*!**********************************************!*\
  !*** ./src/components/AckModal.component.ts ***!
  \**********************************************/
/*! exports provided: AckModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AckModal", function() { return AckModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ack_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ack-modal.component.html */ "lfps");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _providers_AckApp_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/AckApp.provider */ "6x/B");




let AckModal = class AckModal {
    constructor(element, AckApp) {
        this.element = element;
        this.AckApp = AckApp;
        this.allowClose = true;
        this.zIndex = 20;
        this.showModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        Promise.resolve().then(() => this.determineStage());
    }
    determineStage() {
        if (this.inline)
            return;
        if (this.AckApp.fixedElementStage) {
            this.AckApp.registerModal(this);
        }
        else if (!this.AckApp.warnedFixElements) {
            this.AckApp.warnedFixElements = true;
            console.warn('Please put the element tag <ack-fixed-element-stage> inside your app so <ack-modal> renders properly amongst other elements. OR set <ack-modal inline="true">');
        }
    }
    ngOnDestroy() {
        this.AckApp.unregisterModal(this);
    }
};
AckModal.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _providers_AckApp_provider__WEBPACK_IMPORTED_MODULE_3__["AckApp"] }
];
AckModal.propDecorators = {
    body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: ['body',] }],
    layout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['placeholder',] }],
    inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isModelMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    allowClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    zIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    wrapStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    wrapCellStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    showModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    showModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
AckModal = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "ack-modal",
        template: _raw_loader_ack_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
        _providers_AckApp_provider__WEBPACK_IMPORTED_MODULE_3__["AckApp"]])
], AckModal);



/***/ }),

/***/ "8Wnv":
/*!******************************************************!*\
  !*** ./src/components/ReaderHeaderBody.component.ts ***!
  \******************************************************/
/*! exports provided: ReaderHeaderBody, ReaderHeader, ReaderBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReaderHeaderBody", function() { return ReaderHeaderBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReaderHeader", function() { return ReaderHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReaderBody", function() { return ReaderBody; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _templates_reader_header_body_pug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/reader-header-body.pug */ "lIVJ");



let ReaderHeaderBody = class ReaderHeaderBody {
};
ReaderHeaderBody.propDecorators = {
    readerHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ['reader-header',] }]
};
ReaderHeaderBody = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'reader-header-body',
        template: _templates_reader_header_body_pug__WEBPACK_IMPORTED_MODULE_2__["string"]
    })
], ReaderHeaderBody);

let ReaderHeader = class ReaderHeader {
};
ReaderHeader = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'reader-header'
    })
], ReaderHeader);

let ReaderBody = class ReaderBody {
    constructor(element) {
        this.element = element;
        element.nativeElement.style.height = '100%';
        element.nativeElement.style.display = 'block';
    }
};
ReaderBody.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
ReaderBody.propDecorators = {
    readerHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ['reader-header',] }]
};
ReaderBody = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "reader-body"
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ReaderBody);



/***/ }),

/***/ "9zf9":
/*!**********************************!*\
  !*** ./src/providers/UrlVars.ts ***!
  \**********************************/
/*! exports provided: UrlVars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlVars", function() { return UrlVars; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _WindowService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WindowService */ "+48O");



let UrlVars = class UrlVars {
    constructor(WindowService) {
        this.WindowService = WindowService;
        this.vars = this.parse();
    }
    parse() {
        var regex = /[?&]([^=#]+)(=([^&#]*))?/g, url = this.WindowService.nativeWindow.location.href, params = {}, match;
        while (match = regex.exec(url)) {
            params[match[1]] = match[2] == null ? true : match[3];
        }
        return params;
    }
    get(name, param) {
        if (!name)
            return;
        if (this.vars && this.vars[name] != null)
            return this.vars[name];
        var lcase = name.toLowerCase();
        for (var key in this.vars) {
            if (lcase == key.toLowerCase())
                return this.vars[key];
        }
        return param;
    }
};
UrlVars.ctorParameters = () => [
    { type: _WindowService__WEBPACK_IMPORTED_MODULE_2__["WindowService"] }
];
UrlVars = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_WindowService__WEBPACK_IMPORTED_MODULE_2__["WindowService"]])
], UrlVars);



/***/ }),

/***/ "AkTa":
/*!**************************!*\
  !*** ./src/providers.ts ***!
  \**************************/
/*! exports provided: HtmlSizeService, Log, AckApp, Prompts, ErrorLog, UrlVars, WindowService, DocumentService, providers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providers", function() { return providers; });
/* harmony import */ var _directives_HtmlSizeWatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/HtmlSizeWatcher */ "B6H9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HtmlSizeService", function() { return _directives_HtmlSizeWatcher__WEBPACK_IMPORTED_MODULE_0__["HtmlSizeService"]; });

/* harmony import */ var _providers_Log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./providers/Log */ "mo0d");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return _providers_Log__WEBPACK_IMPORTED_MODULE_1__["Log"]; });

/* harmony import */ var _providers_AckApp_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./providers/AckApp.provider */ "6x/B");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AckApp", function() { return _providers_AckApp_provider__WEBPACK_IMPORTED_MODULE_2__["AckApp"]; });

/* harmony import */ var _providers_Prompts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./providers/Prompts */ "jXv3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prompts", function() { return _providers_Prompts__WEBPACK_IMPORTED_MODULE_3__["Prompts"]; });

/* harmony import */ var _providers_ErrorLog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./providers/ErrorLog */ "k4hH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorLog", function() { return _providers_ErrorLog__WEBPACK_IMPORTED_MODULE_4__["ErrorLog"]; });

/* harmony import */ var _providers_UrlVars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers/UrlVars */ "9zf9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlVars", function() { return _providers_UrlVars__WEBPACK_IMPORTED_MODULE_5__["UrlVars"]; });

/* harmony import */ var _providers_WindowService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./providers/WindowService */ "+48O");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return _providers_WindowService__WEBPACK_IMPORTED_MODULE_6__["WindowService"]; });

/* harmony import */ var _providers_DocumentService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./providers/DocumentService */ "1dUt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentService", function() { return _providers_DocumentService__WEBPACK_IMPORTED_MODULE_7__["DocumentService"]; });

















const providers = [
    _providers_Log__WEBPACK_IMPORTED_MODULE_1__["Log"],
    _providers_ErrorLog__WEBPACK_IMPORTED_MODULE_4__["ErrorLog"],
    _providers_AckApp_provider__WEBPACK_IMPORTED_MODULE_2__["AckApp"],
    _providers_UrlVars__WEBPACK_IMPORTED_MODULE_5__["UrlVars"],
    _providers_WindowService__WEBPACK_IMPORTED_MODULE_6__["WindowService"],
    _providers_DocumentService__WEBPACK_IMPORTED_MODULE_7__["DocumentService"],
    _providers_Prompts__WEBPACK_IMPORTED_MODULE_3__["Prompts"],
    _directives_HtmlSizeWatcher__WEBPACK_IMPORTED_MODULE_0__["HtmlSizeService"]
];


/***/ }),

/***/ "AkYC":
/*!*************************************!*\
  !*** ./src/TemplateReader.class.ts ***!
  \*************************************/
/*! exports provided: TemplateReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateReader", function() { return TemplateReader; });
class TemplateReader {
    constructor(options) {
        this.types = {};
        this.templates = {};
        Object.assign(this, options);
    }
    readTemplates(templateRefs) {
        const count = templateRefs['_results'].length;
        for (let x = count - 1; x >= 0; --x) {
            let row = templateRefs['_results'][x];
            this.applyReferences(row._def.references, row);
        }
        if (this.lastTemplateName && (!this.templates[this.lastTemplateName] || !templateRefs.length)) {
            this.afterReadTemplates(templateRefs);
        }
    }
    afterReadTemplates(templateRefs) {
        const index = templateRefs['_results'].length - 1;
        const lastTemplate = templateRefs['_results'][index];
        if (!lastTemplate || !this.lastTemplateName)
            return;
        const matched = this.applyReferences(lastTemplate._def.references, lastTemplate);
        if (!matched) {
            this.templates[this.lastTemplateName] = lastTemplate;
        }
    }
    applyReferences(refs, row) {
        for (let x in refs) {
            if (this.types[x]) {
                this.templates[this.types[x]] = row;
                return true;
            }
        }
        return false;
    }
}


/***/ }),

/***/ "Aqkq":
/*!***********************************!*\
  !*** ./modules/offline/AckQue.ts ***!
  \***********************************/
/*! exports provided: AckQue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AckQue", function() { return AckQue; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _AckOffline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AckOffline */ "/ibX");



let AckQue = class AckQue extends _AckOffline__WEBPACK_IMPORTED_MODULE_2__["AckOffline"] {
    constructor() {
        super(...arguments);
        this.prefix = "offline-que";
        this.handlers = [];
    }
    get(name) {
        return super.get(name)
            .then(data => data && data['que'] ? data['que'] : []);
    }
    getQue(name) {
        return this.get(name);
    }
    setQue(name, que) {
        return this.set(name, que);
    }
    que(name, queData) {
        return super.get(name)
            .then(data => {
            data = data || {};
            data['que'] = data['que'] || [];
            if (queData.forEach) {
                queData.forEach((x) => {
                    data['que'].push(x);
                });
            }
            else {
                data['que'].push(queData);
            }
            return super.set(name, data);
        });
    }
    set(name, queData) {
        return this.que(name, queData);
    }
    dequeByIndex(name, index) {
        return this.getQue(name)
            .then(array => {
            array.splice(index, 1);
            return array;
        })
            .then(array => this.setQue(name, array));
    }
    processQuedByIndex(name, index) {
        const handler = this.getQueHandlerByName(name);
        const mem = { item: null, array: null, result: null };
        return this.getQue(name)
            .then(array => {
            mem.item = array.splice(index, 1);
            mem.array = array;
        })
            .then(() => this.handleQued(mem.item, handler))
            .then(result => mem.result = result)
            .then(() => this.setQue(name, mem.array))
            .then(() => mem.result);
    }
    registerHandler(name, handler) {
        this.handlers.push({ name, handler });
        return this;
    }
    registerQueHandler(name, handler) {
        return this.registerHandler(name, handler);
    }
    paramHandler(name, handler) {
        for (let x = this.handlers.length - 1; x >= 0; --x) {
            const handler = this.handlers[x];
            if (handler.name == name) {
                return this;
            }
        }
        this.handlers.push({ name, handler });
        return this;
    }
    getQueHandDefByName(name) {
        for (let i = this.handlers.length - 1; i >= 0; --i) {
            if (this.handlers[i].name == name)
                return this.handlers[i];
        }
    }
    getQueHandlerByName(name) {
        const hand = this.getQueHandDefByName(name);
        if (hand)
            return hand.handler;
    }
    handleQued(qued, handler) {
        return Promise.resolve(handler(qued));
    }
    processQuedHandler(hand) {
        const results = [];
        const mem = { que: [] };
        const eachHandle = this.eachHandler(hand.handler);
        return this.get(hand.name)
            .then(que => mem.que = que)
            .then(() => this.clear(hand.name))
            .then(() => {
            var promise = Promise.resolve();
            mem.que.forEach(v => {
                promise = promise
                    .then(() => eachHandle(v))
                    .catch(e => e)
                    .then(r => results.push(r));
            });
            return promise;
        })
            .then(() => results);
    }
    eachHandler(handler) {
        return (data) => this.handleQued(data, handler);
    }
    processQue(name) {
        const handler = this.getQueHandDefByName(name);
        return handler ? this.processQuedHandler(handler) : Promise.resolve();
    }
    processAllQues() {
        const promises = [];
        this.handlers.forEach(hand => promises.push(this.processQuedHandler(hand)));
        return Promise.all(promises)
            .then(proms => {
            const results = [];
            proms.forEach(subArray => results.push.apply(results, subArray));
            return Promise.all(results);
        });
    }
};
AckQue = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AckQue);



/***/ }),

/***/ "B5gt":
/*!***********************************************************!*\
  !*** ./src/components/templates/scroll-past-fixed.pug.ts ***!
  \***********************************************************/
/*! exports provided: string */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
const string = "<div style=\"width:100%;top:0;z-index:1\" [style.position]=\"currentPosition\"><ng-content></ng-content></div><div [style.height.px]=\"fillHeight\"></div>";


/***/ }),

/***/ "B6H9":
/*!*******************************************!*\
  !*** ./src/directives/HtmlSizeWatcher.ts ***!
  \*******************************************/
/*! exports provided: HtmlSizeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlSizeService", function() { return HtmlSizeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let HtmlSizeService = class HtmlSizeService {
    constructor() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.htmlSize = { width: null, height: null };
        this.onResize = () => {
            this.htmlSize.width = window.document.documentElement.clientWidth;
            this.htmlSize.height = window.document.documentElement.clientHeight;
            this.change.emit();
        };
        this.checkWatchers();
        this.onResize();
    }
    checkWatchers() {
        if (this.change.observers.length) {
            window.addEventListener('resize', this.onResize);
        }
        else {
            window.removeEventListener('resize', this.onResize);
        }
    }
};
HtmlSizeService.ctorParameters = () => [];
HtmlSizeService.propDecorators = {
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
HtmlSizeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], HtmlSizeService);



/***/ }),

/***/ "CsuE":
/*!**********************************************************!*\
  !*** ./src/components/AckFixedElementStage.component.ts ***!
  \**********************************************************/
/*! exports provided: AckFixedElementStage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AckFixedElementStage", function() { return AckFixedElementStage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _providers_AckApp_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/AckApp.provider */ "6x/B");
/* harmony import */ var _templates_ack_fixed_element_stage_pug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/ack-fixed-element-stage.pug */ "iabq");




let AckFixedElementStage = class AckFixedElementStage {
    constructor(AckApp, ElementRef) {
        this.AckApp = AckApp;
        this.ElementRef = ElementRef;
        AckApp.fixedElementStage = ElementRef;
    }
};
AckFixedElementStage.ctorParameters = () => [
    { type: _providers_AckApp_provider__WEBPACK_IMPORTED_MODULE_2__["AckApp"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
AckFixedElementStage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ack-fixed-element-stage',
        template: _templates_ack_fixed_element_stage_pug__WEBPACK_IMPORTED_MODULE_3__["string"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_providers_AckApp_provider__WEBPACK_IMPORTED_MODULE_2__["AckApp"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], AckFixedElementStage);



/***/ }),

/***/ "DJT/":
/*!*********************************************************!*\
  !*** ./example/src/templates/animation-examples.pug.ts ***!
  \*********************************************************/
/*! exports provided: string */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
const string = "<h2 class=\"margin-top-0\">Animations</h2><p class=\"text-grey-2x\">Make an app far more beautiful when changing scenery</p>Currently, all animations are provided by <a href=\"https://npmjs.org/ack-angular-fx\">ack-angular-fx</a><ul><li><a href=\"https://ackerapple.github.io/ack-angular-fx/\">examples</a></li><li><a href=\"https://github.com/AckerApple/ack-angular-fx\">repository</a></li></ul><h4>Table of Contents</h4><ul class=\"child-pad-xxs\"><li><a href=\"#Import Example\" pageScroll=\"pageScroll\">Import Example</a></li><li><a href=\"#Usage Example\" pageScroll=\"pageScroll\">Usage Example</a></li></ul><h3 id=\"Import Example\">Import Example</h3><pre class=\"code-sample\" ngNonBindable=\"ngNonBindable\">import &#123; Component &#125; from '@angular/core'" +
    "\nimport &#123; animations &#125; from 'ack-angular/fx'" +
    "\nimport &#123; BrowserModule &#125; from '@angular/platform-browser'" +
    "\nimport &#123; BrowserAnimationsModule &#125; from '@angular/platform-browser/animations';" +
    "\n" +
    "\n@Component(&#123;" +
    "\n  selector: 'app-tag'" +
    "\n  ,template: 'Hello Template'" +
    "\n  ,animations: animations" +
    "\n&#125;) class AppComponent &#123;&#125;" +
    "\n" +
    "\n@NgModule(&#123;" +
    "\n  imports : [ BrowserModule, BrowserAnimationsModule ]" +
    "\n  declarations : [ AppComponent ]," +
    "\n  boostrap : [ AppComponent ]" +
    "\n&#125;) export class AppModule &#123;&#125;" +
    "\n</pre><h3 id=\"Usage Example\">Usage Example</h3><pre class=\"code-sample\" ngNonBindable=\"ngNonBindable\">&lt;button \"(click)\"=\"viewDets=!viewDets\")&gt; view details &lt;/button&gt;" +
    "\n" +
    "\n&lt;div *ngIf=\"viewDets\" [@slideInLeft]=\"1\"&gt;" +
    "\n  &lt;p&gt;This is some goooooood animated content right here&lt;/p&gt;" +
    "\n  &lt;p&gt;You should try it.&lt;/p&gt;" +
    "\n&lt;/div&gt;</pre><br/><h3>Supporting Examples</h3><p>*ngFor *ngIf Stagger Code</p><div class=\"flex-wrap\"><fieldset><label class=\"pad-h\">*ngFor list with stagger toggle</label><ul [@childStag]=\"toggleNgForFx\"><ng-container *ngFor=\"let item of list;let i = index;\"><li class=\"childFx\" *ngIf=\"!toggleNgForFx\" [@fadeInLeft]=\"1\">{{item}} - {{i}}<button (click)=\"list.splice(i,1)\">X</button></li></ng-container></ul><div class=\"flex\"><input class=\"flex-1\" [(ngModel)]=\"supportExampleAddItem\"/><button (click)=\"list.push(supportExampleAddItem)\">add</button><button (click)=\"toggleNgForFx=!toggleNgForFx\">toggle</button></div></fieldset></div><br/><h3>ngFor ngIf Stagger Code</h3><pre class=\"code-sample\" ngNonBindable=\"ngNonBindable\">&lt;ul [@childStag]=\"toggleNgForFx\"&gt;" +
    "\n  &lt;ng-container *ngFor=\"let item of list;let i = index;\"&gt;" +
    "\n    &lt;li class=\"childFx\" *ngIf=\"!toggleNgForFx\" [@fadeInLeft]=\"1\"&gt;" +
    "\n        &#123;&#123;item&#125;&#125; - &#123;&#123;i&#125;&#125;" +
    "\n        &lt;button (click)=\"list.splice(i,1)\"&gt; X &lt;/button&gt;" +
    "\n    &lt;/li&gt;" +
    "\n&lt;/ul&gt;" +
    "\n&lt;input class\"flex-1\" [(ngModel)]=\"supportExampleAddItem\" /&gt;" +
    "\n&lt;button (click)=\"list.push(supportExampleAddItem)\"&gt; add &lt;/button&gt;" +
    "\n&lt;button (click)=\"toggleNgForFx=!toggleNgForFx\"&gt; toggle &lt;/button&gt;</pre><br/>";


/***/ }),

/***/ "E4xO":
/*!**********************************************************!*\
  !*** ./src/components/templates/ack-modal-layout.pug.ts ***!
  \**********************************************************/
/*! exports provided: string */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
const string = "<div *ngIf=\"showModel || !isModelMode\" [@fadeInOutUp]=\"1\" style=\"position:fixed;top:0;left:0;height:100%;width:100%;overflow:auto;\" [style.z-index]=\"zIndex || 20\"><div style=\"height:100%;width:100%;padding:20px;display:inline-table;\" [ngStyle]=\"{'background-color':backgroundColor || 'rgba(0,0,0,.7)'}\"><table style=\"height:100%;margin:auto\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" [ngStyle]=\"wrapStyle\"><tr><td (click)=\"allowClose ? fireClose() : 0\"></td></tr><tr><td valign=\"top\" [ngStyle]=\"wrapCellStyle\"><div *ngIf=\"allowClose\" style=\"position:relative\"><div style=\"position:absolute;bottom:-17px;right:-16px;border:1px solid #DDD;border-radius:50%;z-index:20\"><ack-close-icon (click)=\"fireClose()\"></ack-close-icon></div></div><ng-content></ng-content></td></tr><tr><td (click)=\"allowClose ? fireClose() : 0\"></td></tr></table></div></div>";


/***/ }),

/***/ "F25f":
/*!********************************************************!*\
  !*** ./example/src/templates/overview-examples.pug.ts ***!
  \********************************************************/
/*! exports provided: string */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
const string = "<h2 class=\"margin-top-0\">Overview</h2><p class=\"pad-h\"><strong>ack-angular</strong>&nbsp;is extra special directives, components, providers and pipes to aide in tackling everyday Angular2 driven development.</p><h4>Table of Contents</h4><ul class=\"margin-top-0\"><li><a href=\"#Install ack-angular\" pageScroll=\"pageScroll\">Install ack-angular</a></li><li><a href=\"#Import AckModule\" pageScroll=\"pageScroll\">Import AckModule</a></li><li><a href=\"#Requirements\" pageScroll=\"pageScroll\">Requirements</a></li><li><a href=\"#This Demo Area\" pageScroll=\"pageScroll\">This Demo Area</a></li><li><a href=\"#Available Stylesheets\" pageScroll=\"pageScroll\">Available Stylesheets</a></li><li><a href=\"#Resources\" pageScroll=\"pageScroll\">Resources</a></li><li><a href=\"#My Personal TypeScript Opinion\" pageScroll=\"pageScroll\">My Personal TypeScript Opinion</a></li><li><a href=\"#ack-angularjs\" pageScroll=\"pageScroll\">ack-angularjs</a></li></ul><br/><h3 class=\"margin-bottom-0\" id=\"Install ack-angular\">Install ack-angular</h3><p>Install jsDependencies via <a href=\"https://www.npmjs.com/package/ack-webpack\">ack-webpack</a></p><div class=\"pad text-grey-2x text-sm\">NOTE : ack-webpack reads the jsDependencies in a package.json to then install packages. Also when ack-webpack is installed, it auto adds a script entry to your package.json file to make CLI commands easier.</div><strong>Step 1</strong><pre class=\"code-sample\">npm install ack-webpack --save-dev</pre><strong>Step 2</strong><pre class=\"code-sample\">npm run ack-webpack -- install ack-angular</pre><br/><h3 class=\"margin-bottom-0\" id=\"Import AckModule\">Import AckModule</h3><div class=\"pad\"><p>Most all functionality can be achieved by importing AckModule</p><p>Example</p><pre class=\"code-sample\">import &#123;" +
    "\n  AckModule," +
    "\n  AckRouterModule // if using routing components" +
    "\n  AckOfflineModule // if using local storage components" +
    "\n&#125; from \"ack-angular\"" +
    "\nimport &#123; NgModule &#125; from \"@angular/core\"" +
    "\n" +
    "\n@NgModule(&#123;" +
    "\n  imports:[" +
    "\n    AckModule.forRoot()," +
    "\n    AckRouterModule.forRoot(), // if using routing components" +
    "\n    AckOfflineModule.forRoot(), // if using local storage components" +
    "\n  ]" +
    "\n&#125;)" +
    "\n</pre><div class=\"pad-xxs\"><div class=\"pad bg-warning bg-warning text-warning\">NOTE : You need to have the <a href=\"https://www.typescriptlang.org/docs/handbook/compiler-options.html\">allowSyntheticDefaultImports compiler option</a> set to <strong>true</strong> in your <a href=\"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html\">tsconfig.json</a>.</div></div></div><br/><h3 class=\"margin-bottom-0\" id=\"Requirements\">Requirements</h3><div class=\"pad\"><p>It is very important to understand what connects where</p></div><ul><li>core angular components are expected to have already been installed</li><ul><li>reflect-metadata</li><li>@angular/core</li><li>@angular/common/http</li></ul><li>jsDependencies</li><ul><li><a href=\"https://www.npmjs.com/package/ack-angular-fx\">ack-angular-fx</a></li><ul><li>only required for animation implementing</li><li>The following code would depend on ack-angular-fx installation<pre class=\"code-sample\">import * as fx from \"ack-angular/fx\"</pre></li></ul><li><a href=\"https://www.npmjs.com/package/@angular/router\">@angular/router</a></li><ul><li>only required for @angular/router based ack-angular component and services</li><li>The following code would depend on @angular/router installation<pre class=\"code-sample\">import &#123; RouteReporter &#125; from \"ack-angular/RouteReporter.directive\"" +
    "\nimport &#123; RouteWatchReporter &#125; from \"ack-angular/RouteWatchReporter\"</pre></li></ul><li><a href=\"https://www.npmjs.com/package/ui-router-ng2\">ui-router-ng2</a></li><ul><li>only required for ui-router-ng2 based ack-angular component and services</li><li>The following code would depend on ui-router-ng2 installation<pre class=\"code-sample\">import &#123; UiRouteReporter &#125; from \"ack-angular/UiRouteReporter.directive\"" +
    "\nimport &#123; UiRouteWatchReporter &#125; from \"ack-angular/UiRouteWatchReporter\"" +
    "\n</pre></li></ul></ul></ul><br/><h3 id=\"This Demo Area\">This Demo Area</h3><ul><li>Uses hash routing to support github's gh-pages servers which do not support html5 non-hash routing</li><li>Pagescrolling, which is not a jsDependency of ack-angular, is provided by <a href=\"https://www.npmjs.com/package/ng2-page-scroll\">ng2-page-scroll</a></li></ul><br/><h3 id=\"Available Stylesheets\">Available Stylesheets</h3><div class=\"pad-h\"><p>ack-angular offers common animation, Ionic, and Bootstrap like classes</p></div><ul><li><a href=\"https://www.npmjs.com/package/csshake\">csshake</a></li><ul><li>File Location : ack-angular/csshake.css</li></ul><li><a href=\"https://www.npmjs.com/package/ack-css-boot\">ack-css-boot</a></li><ul><li>File Location : ack-angular/ack-css-boot.css</li></ul><li>ack-angular</li><ul><li>Includes the following stylesheets</li><ul><li><span class=\"code-sample\" style=\"display:inline\">* &#123;box-sizing:border-box&#125;</span></li><li>csshake</li><li>ack-css-boot</li></ul></ul></ul><br/><h3 id=\"Resources\">Resources</h3><ul><li><a href=\"https://github.com/AckerApple/ack-angular\">Repository</a></li><li><a href=\"https://angular.io/docs/ts/latest/guide/cheatsheet.html\">Angular2 Cheatsheet</a></li></ul><h3 id=\"My Personal TypeScript Opinion\">My Personal TypeScript Opinion</h3><div class=\"pad-h\"><div class=\"border-left-5 border-grey-5x bg-stable pad\"><i>\"TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.\"\"</i><div class=\"text-sm pad-top\"><a href=\"https://www.typescriptlang.org/\">typescriptlang.org</a></div></div><p>The above statement is just not 100% true, it's more like 96.5%</p></div><ul><li>ISSUE : <a href=\"https://github.com/Microsoft/TypeScript/issues/6373\">TS2339</a></li><ul><li>Error Message : Property 'name' does not exist on type '&#123;&#125;'</li><li>Cannot create object and then add properties to it that were not already defined</li><li><pre class=\"code-sample\">let obj = &#123;&#125;" +
    "\nobj.name = \"name prop\"</pre><div class=\"text-grey-2x text-sm\">The above code, under most ts configurations, will fail</div></li></ul><li>ISSUE : <a href=\"https://github.com/Microsoft/TypeScript/issues/6373\">TS2346</a></li><ul><li>Error Message : Supplied parameters do not match any signature of call target.</li><li>You have to call a function with exact number of arguments OR put a question mark in your argument definition</li><li><pre class=\"code-sample\">function myFunc(a,b,c)&#123;&#125;" +
    "\n" +
    "\nmyFunc(1)</pre><div class=\"text-grey-2x text-sm\">The above code, under most ts configurations, will fail</div></li><li>Fix<pre class=\"code-sample\">function myFunc(a,b?,c?)&#123;&#125;" +
    "\n" +
    "\nmyFunc(1)" +
    "\n</pre></li></ul></ul><br/><h3 id=\"ack-angularjs\">ack-angularjs</h3><div class=\"pad-h\"><p>ack-angular is a continuation of successful directives, services, and filters that were established for AngularJs during the building of <a href=\"https://github.com/AckerApple/ack-angularjs\">ack-angularjs</a></p></div>";


/***/ }),

/***/ "F4ZD":
/*!*************************************************!*\
  !*** ./src/components/AckSections.component.ts ***!
  \*************************************************/
/*! exports provided: AckSections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AckSections", function() { return AckSections; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _providers_AckSections_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/AckSections.provider */ "+JZX");
/* harmony import */ var _templates_ack_sections_pug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/ack-sections.pug */ "e7tw");




let AckSections = class AckSections {
    constructor(SectionProvider, ElementRef) {
        this.SectionProvider = SectionProvider;
        this.ElementRef = ElementRef;
        this.mode = "calculate";
        this.zIndex = 19;
        const elmStyle = ElementRef.nativeElement.style;
        elmStyle.height = "100%";
        elmStyle.display = "block";
    }
};
AckSections.ctorParameters = () => [
    { type: _providers_AckSections_provider__WEBPACK_IMPORTED_MODULE_2__["SectionProvider"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
AckSections.propDecorators = {
    mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    zIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    table: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ["table",] }],
    headerWrap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ["headerWrap",] }],
    bodyCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ["bodyCell",] }],
    leftBodyWrap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ["leftBodyWrap",] }],
    rightBodyWrap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ["rightBodyWrap",] }]
};
AckSections = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ack-sections',
        template: _templates_ack_sections_pug__WEBPACK_IMPORTED_MODULE_3__["string"],
        providers: [_providers_AckSections_provider__WEBPACK_IMPORTED_MODULE_2__["SectionProvider"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_providers_AckSections_provider__WEBPACK_IMPORTED_MODULE_2__["SectionProvider"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], AckSections);



/***/ }),

/***/ "Gcs9":
/*!*****************************************************!*\
  !*** ./src/components/templates/ack-options.pug.ts ***!
  \*****************************************************/
/*! exports provided: string */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
const string = "<div [ngClass]=\"{'border-grey-6x border-top':stylize}\"></div><div *ngFor=\"let item of array|array\" (click)=\"selectItem(item)\" [ngClass]=\"getItemClass(item)\"><ng-template *ngIf=\"TemplateReader.templates.selected &amp;&amp; isItemSelected(item)\" [ngTemplateOutlet]=\"TemplateReader.templates.selected\" [ngTemplateOutletContext]=\"{item:item}\"></ng-template><ng-template *ngIf=\"TemplateReader.templates.templateRef &amp;&amp; (!TemplateReader.templates.selected || !isItemSelected(item))\" [ngTemplateOutlet]=\"TemplateReader.templates.templateRef\" [ngTemplateOutletContext]=\"{item:item, selected:isItemSelected(item)}\"></ng-template><span *ngIf=\"!TemplateReader.templates.templateRef\">{{ item }}</span></div>";


/***/ }),

/***/ "Hib5":
/*!***************************************!*\
  !*** ./example/src/arrayOfObjects.ts ***!
  \***************************************/
/*! exports provided: array */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "array", function() { return array; });
const array = [{
        letter: 'a', number: 1
    }, {
        letter: 'b', number: 2
    }, {
        letter: 'c', number: 3
    }, {
        letter: 'd', number: 4
    }, {
        letter: 'e', number: 5
    }, {
        letter: 'f', number: 6
    }, {
        letter: 'g', number: 7
    }, {
        letter: 'h', number: 8
    }, {
        letter: 'i', number: 9
    }];


/***/ }),

/***/ "Hkjg":
/*!******************************!*\
  !*** ./src/invokeRotator.ts ***!
  \******************************/
/*! exports provided: invokeRotator, objectInvoker, getInvokerBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invokeRotator", function() { return invokeRotator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectInvoker", function() { return objectInvoker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInvokerBy", function() { return getInvokerBy; });
function invokeRotator(invoke) {
    return getInvokerBy(invoke);
}
function objectInvoker(object, plan) {
    var rtn = object;
    var subargs;
    var item;
    let newkey;
    let key;
    let typo;
    for (let x = 0; x < plan.length; ++x) {
        key = plan[x];
        subargs = [];
        if (rtn == null) {
            typo = typeof (rtn);
            const msg = "TypeError: Cannot read property '" + key + "' of " + typo + ". Invoke instructions: " + JSON.stringify(plan);
            throw new Error(msg);
        }
        let asFunc = key.constructor == Array;
        if (asFunc) {
            key = [];
            key.push.apply(key, plan[x]);
            newkey = key.shift();
            subargs = key;
            key = newkey;
        }
        item = rtn[key];
        let isFunc = item && item.constructor == Function;
        if (asFunc && !isFunc) {
            if (item == null || item.constructor !== Function) {
                typo = typeof (item);
                const msg = "TypeError: '" + key + "' of " + typo + " is not a function. Invoke instructions: " + JSON.stringify(plan);
                throw new Error(msg);
            }
        }
        if (isFunc) {
            rtn = item.apply(rtn, subargs);
        }
        else {
            rtn = item;
        }
    }
    return rtn;
}
function getInvokerBy(invoke) {
    const isF = typeof invoke == 'function';
    if (isF) {
        return function (...args) {
            var x = invoke(args[0]);
            args.shift();
            return objectInvoker(x, args);
        };
    }
    return function (...plan) {
        const a = plan[0];
        plan[0] = plan[1];
        plan[1] = a;
        return objectInvoker(invoke, [plan]);
    };
}


/***/ }),

/***/ "IyaO":
/*!*******************************************************!*\
  !*** ./src/directives/StatusOnlineModel.directive.ts ***!
  \*******************************************************/
/*! exports provided: StatusOnlineModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusOnlineModel", function() { return StatusOnlineModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let StatusOnlineModel = class StatusOnlineModel {
    constructor() {
        this.statusOnlineModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = () => {
            this.statusOnlineModel = navigator.onLine;
            this.statusOnlineModelChange.emit(this.statusOnlineModel);
        };
        window.addEventListener("online", this.onChange);
        window.addEventListener("offline", this.onChange);
        Promise.resolve().then(() => this.onChange());
    }
    ngOnDestroy() {
        window.removeEventListener("online", this.onChange);
        window.removeEventListener("offline", this.onChange);
    }
};
StatusOnlineModel.ctorParameters = () => [];
StatusOnlineModel.propDecorators = {
    statusOnlineModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    statusOnlineModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
StatusOnlineModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[statusOnlineModel]' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], StatusOnlineModel);



/***/ }),

/***/ "J8rJ":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./example/src/templates/pipes-examples.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"margin-top-0\">Pipes</h2>\n<p class=\"text-sm text-grey-2x\">Decorate and filter output via Pipes</p>\n<p class=\"margin-bottom-0\">Import Example</p>\n<div class=\"pad-h text-warning text-xs\">The following import code, is NOT needed if you used the AckModule import <a\n    class=\"text-calm\" href=\"#/overview\" (click)=\"scrollToModuleImport()\">seen here</a>\n</div>\n<pre class=\"code-sample\">import &#123; NgModule &#125; from '@angular/core'\n  import &#123; AppComponent &#125; from './SomeRandomComponent'\n  import * as ackPipes from 'ack-angular/pipes'\n\n  @NgModule(&#123;\n    declarations : [ AppComponent, ...ackPipes.declarations ]\n  &#125;) export class AppModule &#123;&#125;\n</pre><br />\n<h3 id=\"Documentation\">Documentation</h3>\n<div class=\"flex-wrap child-margin-xxs\">\n  <div class=\"flex3 border-grey-6x border width-full\">\n    <div class=\"pad-h\">\n      <h3>textDownload &amp; safeUrl</h3>\n      <p class=\"text-sm text-grey-2x\">Cast string to a data:text/plain uri</p>\n    </div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.SafeUrl=!views.SafeUrl\"\n      [ngClass]=\"views.SafeUrl?'border-energized bg-energized':'border-info bg-info'\">view details</a>\n    <div *ngIf=\"views.SafeUrl\" [@fadeInOutUp]=\"1\">\n      <absolute-overflow-x>\n        <pre class=\"code-sample margin-0\">\n          <span ngNonBindable=\"ngNonBindable\">&lt;a [href]=\"'Usage Examples' | textDownload | safeUrl\" download=\"download.txt\"&gt;download&lt;/a&gt;</span>\n          <span class=\"pad-h\">== <a [href]=\"'Usage Examples' | textDownload | safeUrl\" download=\"download.txt\">download</a></span>\n        </pre>\n      </absolute-overflow-x>\n    </div>\n  </div>\n  <div class=\"flex2 border-grey-6x border width-full\">\n    <div class=\"pad-h\">\n      <h3>safeStyle</h3>\n      <p class=\"text-sm text-grey-2x\">Cast string to safe style</p>\n    </div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.safeStyle=!views.safeStyle\"\n      [ngClass]=\"views.safeStyle?'border-energized bg-energized':'border-info bg-info'\">view details</a>\n    <div *ngIf=\"views.safeStyle\" [@fadeInOutUp]=\"1\">\n      <absolute-overflow-x>\n        <pre class=\"code-sample\n          margin-0\"><span ngNonBindable=\"ngNonBindable\">&lt;span [ngStyle]=\"&#123;'...':('...'|safeStyle)&#125;\"&gt;\n    trusted style\n&lt;/span&gt;</span><span class=\"pad-h\">== <span [ngStyle]=\"{'...':('...'|safeStyle)}\">safe styled</span></span></pre>\n      </absolute-overflow-x>\n    </div>\n  </div>\n  <div class=\"flex3 border-grey-6x border width-full\">\n    <div class=\"pad-h\">\n      <h3>safeHtml</h3>\n      <p class=\"text-sm text-grey-2x\">Cast string to safe html</p>\n    </div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.safeHtml=!views.safeHtml\"\n      [ngClass]=\"views.safeHtml?'border-energized bg-energized':'border-info bg-info'\">view details</a>\n    <div *ngIf=\"views.safeHtml\" [@fadeInOutUp]=\"1\">\n      <absolute-overflow-x>\n        <pre\n          class=\"code-sample\n          margin-0\"><span ngNonBindable=\"ngNonBindable\">&lt;span class=\"safeHtml\" [innerHtml]=\"'&lt;style&gt;.safeHtml&#123;border:1px solid purple&#125;.safeHtml::before&#123;content:\\\\\"trusted html\\\\\"&#125;&lt;/style&gt;'|safeHtml\"&gt;\n    untrusted html\n&lt;/span&gt;</span><span class=\"pad-h\">==&nbsp;</span><span class=\"safeHtml\" [innerHtml]=\"'&lt;style&gt;.safeHtml{border:1px solid purple}.safeHtml::before{content:\\&quot;trusted html\\&quot;}&lt;/style&gt;'|safeHtml\">untrusted html</span></pre>\n      </absolute-overflow-x>\n    </div>\n  </div>\n  <div class=\"flex2 border-grey-6x border\">\n    <div class=\"pad-h\">\n      <h3>markdownAnchor</h3>\n      <p class=\"text-sm text-grey-2x\">Cast string to a github markdown #anchor</p>\n    </div><a class=\"text-center block border pad-xxs hover-bg-warning\"\n      (click)=\"views.markdownAnchor=!views.markdownAnchor\" [ngClass]=\"views.markdownAnchor?'border-energized\n      bg-energized':'border-info bg-info'\">view details</a>\n    <div *ngIf=\"views.markdownAnchor\" [@fadeInOutUp]=\"1\">\n      <absolute-overflow-x>\n        <pre\n          class=\"code-sample\n          margin-0\"><span ngNonBindable=\"ngNonBindable\">{{ 'Usage Examples' | markdownAnchor }}</span><span class=\"pad-h\">== {{ 'Usage Examples' | markdownAnchor }}</span></pre>\n      </absolute-overflow-x>\n    </div>\n  </div>\n  <div class=\"flex2 border-grey-6x border\">\n    <div class=\"pad-h\">\n      <h3>typeof</h3>\n      <p class=\"text-sm text-grey-2x\">Result of native javascript typeof</p>\n    </div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.typeof=!views.typeof\"\n      [ngClass]=\"views.typeof?'border-energized bg-energized':'border-info bg-info'\">view details</a>\n    <div *ngIf=\"views.typeof\" [@fadeInOutUp]=\"1\">\n      <absolute-overflow-x>\n        <pre\n          class=\"code-sample\n          margin-0\"><span ngNonBindable=\"ngNonBindable\">{{ 0 | typeof }}</span><span class=\"pad-h\">== {{ 0 | typeof }}</span></pre>\n      </absolute-overflow-x>\n    </div>\n  </div>\n  <div class=\"flex2 border-grey-6x border\">\n    <div class=\"pad-h\">\n      <h3>endNumberWord</h3>\n      <p class=\"text-sm text-grey-2x\">Decides to add an \"s\" at the end of a word</p>\n    </div><a class=\"text-center block border pad-xxs hover-bg-warning\"\n      (click)=\"views.endNumberWord=!views.endNumberWord\" [ngClass]=\"views.endNumberWord?'border-energized\n      bg-energized':'border-info bg-info'\">view details</a>\n    <div *ngIf=\"views.endNumberWord\" [@fadeInOutUp]=\"1\">\n      <absolute-overflow-x>\n        <pre\n          class=\"code-sample\n          margin-0\"><div><span ngNonBindable=\"ngNonBindable\">balloon{{ 0 | endNumberWord }}</span><span class=\"pad-h\">== balloon{{ 0 | endNumberWord }}</span></div><div><span ngNonBindable=\"ngNonBindable\">balloon{{ 1 | endNumberWord }}</span><span class=\"pad-h\">== balloon{{ 1 | endNumberWord }}</span></div><div><span ngNonBindable=\"ngNonBindable\">balloon{{ 2 | endNumberWord }}</span><span class=\"pad-h\">== balloon{{ 2 | endNumberWord }}</span></div><div><span ngNonBindable=\"ngNonBindable\">balloon{{ 2 | endNumberWord }}</span><span class=\"pad-h\">== balloon{{ 2 | endNumberWord }}</span></div></pre>\n      </absolute-overflow-x>\n    </div>\n  </div>\n  <div class=\"flex2 border-grey-6x border\">\n    <div class=\"pad-h\">\n      <h3>between</h3>\n      <p class=\"text-sm text-grey-2x\">(input &gt;= a &amp;&amp; input &lt;= b) || (input &lt;= a &amp;&amp; input\n        &gt;= b)</p>\n    </div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.between=!views.between\"\n      [ngClass]=\"views.between?'border-energized bg-energized':'border-info bg-info'\">view details</a>\n    <div *ngIf=\"views.between\" [@fadeInOutUp]=\"1\">\n      <absolute-overflow-x>\n        <pre\n          class=\"code-sample\n          margin-0\"><span ngNonBindable=\"ngNonBindable\">{{ 10 | between : 5 : 15 }}</span><span class=\"pad-h\">== {{ 10 | between : 5 : 15 }}</span></pre>\n      </absolute-overflow-x>\n    </div>\n  </div>\n  <div class=\"flex2 border-grey-6x border\">\n    <div class=\"pad-h\">\n      <h3>replaceMaxLength</h3>\n      <p class=\"text-sm text-grey-2x\">When max length exceeded, string sliced and replacement used as seen here...</p>\n    </div>\n    <a class=\"text-center block border pad-xxs hover-bg-warning\"\n      (click)=\"views.replaceMaxLength=!views.replaceMaxLength\" [ngClass]=\"views.replaceMaxLength?'border-energized\n      bg-energized':'border-info bg-info'\"\n    >view details</a>\n    <div *ngIf=\"views.replaceMaxLength\" [@fadeInOutUp]=\"1\">\n      <absolute-overflow-x>\n        <pre class=\"code-sample margin-0\"><span ngNonBindable=\"ngNonBindable\"\n          >{{ 'a very long string' | replaceMaxLength : 11 }}</span><span class=\"pad-h\"\n          >== {{ 'a very long string' | replaceMaxLength : 11 }}</span><br /><span ngNonBindable=\"ngNonBindable\"\n          >{{ 'a very long string' | replaceMaxLength : 11 : ',,,' }}</span><span class=\"pad-h\"\n          >== {{ 'a very long string' | replaceMaxLength : 11 : ',,,' }}</span><br /><span ngNonBindable=\"ngNonBindable\"\n          >{{ 'a short string' | replaceMaxLength : 14 }}</span><span class=\"pad-h\"\n          >== {{ 'a short string' | replaceMaxLength : 14 }}</span></pre></absolute-overflow-x>\n    </div>\n  </div>\n  <div class=\"flex2 border-grey-6x border\">\n    <div class=\"pad-h\">\n      <h3>numberSuffix</h3>\n      <p class=\"text-sm text-grey-2x\">suffix for a given number {{ 1|numberSuffix:1 }} {{ 2|numberSuffix:1 }} {{ 3|numberSuffix:1 }}</p>\n    </div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.numberSuffix=!views.numberSuffix\"\n      [ngClass]=\"views.numberSuffix?'border-energized\n      bg-energized':'border-info bg-info'\">view details</a>\n    <div *ngIf=\"views.numberSuffix\" [@fadeInOutUp]=\"1\">\n      <absolute-overflow-x>\n        <pre\n          class=\"code-sample\n          margin-0\"><div><span ngNonBindable=\"ngNonBindable\">1{{ 1 | numberSuffix }}</span><span class=\"pad-h\">== 1{{ 1 | numberSuffix }}</span></div><div><span ngNonBindable=\"ngNonBindable\">2{{ 2 | numberSuffix : true }}</span><span class=\"pad-h\">== {{ 2 | numberSuffix : true }}</span></div><div><span ngNonBindable=\"ngNonBindable\">0{{ '0' | numberSuffix }}</span><span class=\"pad-h\">== 0{{ '0' | numberSuffix }}</span></div><div><span ngNonBindable=\"ngNonBindable\">13{{ '13' | numberSuffix }}</span><span class=\"pad-h\">== 13{{ '13' | numberSuffix }}</span></div><div><span ngNonBindable=\"ngNonBindable\">33{{ '33' | numberSuffix : 1 }}</span><span class=\"pad-h\">== {{ '33' | numberSuffix : 1 }}</span></div><div><span ngNonBindable=\"ngNonBindable\">{{ null | numberSuffix }}</span><span class=\"pad-h\">== {{ null | numberSuffix }}</span></div></pre>\n      </absolute-overflow-x>\n    </div>\n  </div>\n  <div class=\"flex2 border-grey-6x border\">\n    <div class=\"pad-h\">\n      <h3>numberToPhone</h3>\n      <p class=\"text-sm text-grey-2x\">Converts numbers in input into basic phone format</p>\n    </div><a class=\"text-center block border pad-xxs hover-bg-warning\"\n      (click)=\"views.numberToPhone=!views.numberToPhone\" [ngClass]=\"views.numberToPhone?'border-energized\n      bg-energized':'border-info bg-info'\">view details</a>\n    <div *ngIf=\"views.numberToPhone\" [@fadeInOutUp]=\"1\">\n      <absolute-overflow-x>\n        <pre\n          class=\"code-sample\n          margin-0\"><div><span ngNonBindable=\"ngNonBindable\">{{ 8779276969 | numberToPhone }}</span><span class=\"pad-h\">== {{ 8779276969 | numberToPhone }}</span></div><div><span ngNonBindable=\"ngNonBindable\">{{ 'L8O7V7E9D2O7C6T9O6R9S' | numberToPhone }}</span><span class=\"pad-h\">== {{ 'L8O7V7E9D2O7C6T9O6R9S' | numberToPhone }}</span></div><div><span ngNonBindable=\"ngNonBindable\">{{ 'L8O7V7E9D2O' | numberToPhone }}</span><span class=\"pad-h\">== {{ 'L8O7V7E9D2O7C6T9O6' | numberToPhone }}</span></div><div><span ngNonBindable=\"ngNonBindable\">{{ 'L8O7V7E9D2O7C6T9O6' | numberToPhone }}</span><span class=\"pad-h\">== {{ 'L8O7V7E9D2O' | numberToPhone }}</span></div></pre>\n      </absolute-overflow-x>\n    </div>\n  </div>\n  <div class=\"flex2 border-grey-6x border\">\n    <div class=\"pad-h\">\n      <h3>indexTrack</h3>\n      <p class=\"text-sm text-grey-2x\">Force ngFor into trackBy index</p>\n    </div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.indexOf=!views.indexOf\"\n      [ngClass]=\"views.indexOf?'border-energized bg-energized':'border-info bg-info'\">view details</a>\n    <div *ngIf=\"views.indexOf\" [@fadeInOutUp]=\"1\">\n      <div class=\"pad-xs text-info text-sm\">Simple arrays like [\"a\",\"b\",\"c\"] are hard to work with ngFor +\n        ngModel</div><strong>With indexTrack</strong>\n      <div *ngFor=\"let item of simpleArray; let i=index; trackBy:0|indexTrack\"><input class=\"width-full\"\n          [(ngModel)]=\"simpleArray[i]\" /></div>\n      <absolute-overflow-x>\n        <pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div *ngFor=\"let item of simpleArray; let i=index; trackBy:0|indexTrack\"&gt;\n    &lt;input [(ngModel)]=\"simpleArray[i]\" /&gt;\n&lt;/div&gt;</pre>\n      </absolute-overflow-x><br /><strong class=\"text-warning\">Without indexTrack</strong>\n      <div class=\"text-xs text-grey-2x pad-left-xs\">Inputs blur as you type in them</div>\n      <div *ngFor=\"let item of simpleArray; let i=index; trackBy:index\"><input class=\"width-full\"\n          [(ngModel)]=\"simpleArray[i]\" /></div>\n    </div>\n  </div>\n  <div class=\"flex2 border-grey-6x border\">\n    <div class=\"pad-h\">\n      <h3>arrayOfObjects</h3>\n      <p class=\"text-sm text-grey-2x\" ngNonBindable=\"ngNonBindable\">Param and cast an array into an array of\n        &#123;value, index&#125; objects</p>\n    </div><a class=\"text-center block border pad-xxs hover-bg-warning\"\n      (click)=\"views.arrayOfObjects=!views.arrayOfObjects\" [ngClass]=\"views.arrayOfObjects?'border-energized\n      bg-energized':'border-info bg-info'\">view details</a>\n    <div *ngIf=\"views.arrayOfObjects\" [@fadeInOutUp]=\"1\">\n      <div class=\"pad-xs text-warning\">Having troubles with *ngFor [(ngModel)] for simple array of strings? Try\n        indexTrack, it's within ack-angular, first because it works far better\n\n      </div>\n      <div class=\"pad-xs text-info text-sm\">Simple arrays like [\"a\",\"b\",\"c\"] are hard to work with ngFor +\n        ngModel. This pipe can help with that (not as well as indexTrack pipe)</div><strong>With arrayOfObjects</strong>\n      <div *ngFor=\"let item of simpleArray|arrayOfObjects\"><input class=\"width-full\" [(ngModel)]=\"simpleArray[\n          item.index ]\" /></div>\n      <absolute-overflow-x>\n        <pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div *ngFor=\"let item of simpleArray|arrayOfObjects\"&gt;\n    &lt;input [(ngModel)]=\"simpleArray[ item.index ]\" /&gt;\n&lt;/div&gt;</pre>\n      </absolute-overflow-x><br /><strong class=\"text-warning\">Without arrayOfObjects</strong>\n      <div class=\"text-xs text-grey-2x pad-left-xs\">Inputs blur as you type in them</div>\n      <div *ngFor=\"let item of simpleArray; let i=index; trackBy:index\"><input class=\"width-full\"\n          [(ngModel)]=\"simpleArray[i]\" /></div>\n    </div>\n  </div>\n  <div class=\"flex2 border-grey-6x border\">\n    <div class=\"pad-h\">\n      <h3>array : repeat : repeatValue</h3>\n      <p class=\"text-sm text-grey-2x\">Force any variable to array</p>\n    </div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.array=!views.array\"\n      [ngClass]=\"views.array?'border-energized bg-energized':'border-info bg-info'\">view details</a>\n    <div *ngIf=\"views.array\" [@fadeInOutUp]=\"1\">\n      <absolute-overflow-x>\n        <pre\n          class=\"code-sample\n          margin-0\"><span ngNonBindable=\"ngNonBindable\">{{ 'a' | array }}</span><span class=\"pad-h\">== {{ 'a' | array | stringify }}</span><br/><span ngNonBindable=\"ngNonBindable\">{{ 'a' | array : 3 }}</span><span class=\"pad-h\">== {{ 'a' | array : 3 | stringify }}</span><br/><span ngNonBindable=\"ngNonBindable\">{{ ['a'] | array : 3 : 1 }}</span><span class=\"pad-h\">== {{ ['a'] | array:3:1 | stringify }}</span><br/><span ngNonBindable=\"ngNonBindable\">{{ 'a' | array : 3 : 1 }}</span><span class=\"pad-h\">== {{ 'a' | array : 3 : 1 | stringify }}</span><br/><span ngNonBindable=\"ngNonBindable\">{{ 0 | array : 3 : 'b' }}</span><span class=\"pad-h\">== {{ 0 | array : 3 : 'b' | stringify }}</span><br/><span ngNonBindable=\"ngNonBindable\">{{ 'c' | array : 3 }}</span><span class=\"pad-h\">== {{ 'c' | array : 3 | stringify }}</span></pre>\n      </absolute-overflow-x>\n    </div>\n  </div>\n  <div class=\"flex2 border-grey-6x border\">\n    <div class=\"pad-h\">\n      <h3>console</h3>\n      <p class=\"text-sm text-grey-2x\">console log result of native console.log() function</p>\n    </div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.console=!views.console\"\n      [ngClass]=\"views.console?'border-energized bg-energized':'border-info bg-info'\">view details</a>\n    <div *ngIf=\"views.console\" [@fadeInOutUp]=\"1\">\n      <absolute-overflow-x>\n        <pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">{{ 'message1' | console : 'message2' }}\n\n</pre>\n      </absolute-overflow-x>\n    </div>\n  </div>\n  <div class=\"flex3 border-grey-6x border\">\n    <div class=\"pad-h\">\n      <h3>capitalize</h3>\n      <p class=\"text-sm text-grey-2x\">Each sentence leading word is capitalized</p>\n    </div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.capitalize=!views.capitalize\"\n      [ngClass]=\"views.capitalize?'border-energized bg-energized':'border-info bg-info'\">view details</a>\n    <div *ngIf=\"views.capitalize\" [@fadeInOutUp]=\"1\">\n      <absolute-overflow-x>\n        <pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">{{ 'how do you do?' | capitalize }} == How do you do?\n\n</pre>\n      </absolute-overflow-x>\n    </div>\n  </div>\n  <div class=\"flex2 border-grey-6x border\">\n    <div class=\"pad-h\">\n      <h3>capitalizeWords</h3>\n      <p class=\"text-sm text-grey-2x\">Every word is capitalized</p>\n    </div><a class=\"text-center block border pad-xxs hover-bg-warning\"\n      (click)=\"views.capitalizeWords=!views.capitalizeWords\" [ngClass]=\"views.capitalizeWords?'border-energized\n      bg-energized':'border-info bg-info'\">view details</a>\n    <div *ngIf=\"views.capitalizeWords\" [@fadeInOutUp]=\"1\">\n      <absolute-overflow-x>\n        <pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">{{ 'how do you do?' | capitalizeWords }} == How Do You Do?\n\n</pre>\n      </absolute-overflow-x>\n    </div>\n  </div>\n  <div class=\"flex2 border-grey-6x border\">\n    <div class=\"pad-h\">\n      <h3>bit</h3>\n      <p class=\"text-sm text-grey-2x\">Truthy value converts to: 1. Otherwise: 0</p>\n    </div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.bit=!views.bit\"\n      [ngClass]=\"views.bit?'border-energized bg-energized':'border-info bg-info'\">view details</a>\n    <div *ngIf=\"views.bit\" [@fadeInOutUp]=\"1\">\n      <absolute-overflow-x>\n        <pre\n          class=\"code-sample\n          margin-0\"><div><span ngNonBindable=\"ngNonBindable\">{{ 'true' | bit }}</span><span>&nbsp;==&nbsp;</span><span>{{ 'true' | bit }}</span></div><div><span ngNonBindable=\"ngNonBindable\">{{ '0' | bit }}</span><span>&nbsp;==&nbsp;</span><span>{{ '0' | bit }}</span></div><div><span ngNonBindable=\"ngNonBindable\">{{ 'false' | bit }}</span><span>&nbsp;==&nbsp;</span><span>{{ 'false' | bit }}</span></div></pre>\n      </absolute-overflow-x>\n    </div>\n  </div>\n  <div class=\"flex2 border-grey-6x border\">\n    <div class=\"pad-h\">\n      <h3>boolean</h3>\n      <p class=\"text-sm text-grey-2x\">Truthy value converts to: true. Otherwise: false</p>\n    </div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.boolean=!views.boolean\"\n      [ngClass]=\"views.boolean?'border-energized bg-energized':'border-info bg-info'\">view details</a>\n    <div *ngIf=\"views.boolean\" [@fadeInOutUp]=\"1\">\n      <absolute-overflow-x>\n        <pre\n          class=\"code-sample\n          margin-0\"><div><span ngNonBindable=\"ngNonBindable\">{{ 1 | boolean }}</span><span>&nbsp;==&nbsp;</span><span>{{ 1 | boolean }}</span></div><div><span ngNonBindable=\"ngNonBindable\">{{ '0' | boolean }}</span><span>&nbsp;==&nbsp;</span><span>{{ '0' | boolean }}</span></div><div><span ngNonBindable=\"ngNonBindable\">{{ 'false' | boolean }}</span><span>&nbsp;==&nbsp;</span><span>{{ 'false' | boolean }}</span></div></pre>\n      </absolute-overflow-x>\n    </div>\n  </div>\n  <div class=\"flex2 border-grey-6x border\">\n    <div class=\"pad-h\">\n      <h3>yesno</h3>\n      <p class=\"text-sm text-grey-2x\">Truthy value converts to: yes. Otherwise: no</p>\n    </div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.yesno=!views.yesno\"\n      [ngClass]=\"views.yesno?'border-energized bg-energized':'border-info bg-info'\">view details</a>\n    <div *ngIf=\"views.yesno\" [@fadeInOutUp]=\"1\">\n      <absolute-overflow-x>\n        <pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">{{ 'true' | yesno }} == yes\n\n</pre>\n      </absolute-overflow-x>\n    </div>\n  </div>\n  <div class=\"flex2 border-grey-6x border\">\n    <div class=\"pad-h\">\n      <h3>YesNo</h3>\n      <p class=\"text-sm text-grey-2x\">Truthy value converts to: Yes. Otherwise: No</p>\n    </div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.yesNo=!views.yesNo\"\n      [ngClass]=\"views.yesNo?'border-energized bg-energized':'border-info bg-info'\">view details</a>\n    <div *ngIf=\"views.yesNo\" [@fadeInOutUp]=\"1\">\n      <absolute-overflow-x>\n        <pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">{{ 1 | YesNo }} == Yes\n\n</pre>\n      </absolute-overflow-x>\n    </div>\n  </div>\n  <div class=\"flex2 border-grey-6x border\">\n    <div class=\"pad-h\">\n      <h3>numbers</h3>\n      <p class=\"text-sm text-grey-2x\">Removes anything not a number from a string</p>\n    </div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.numbers=!views.numbers\"\n      [ngClass]=\"views.numbers?'border-energized bg-energized':'border-info bg-info'\">view details</a>\n    <div *ngIf=\"views.numbers\" [@fadeInOutUp]=\"1\">\n      <absolute-overflow-x>\n        <pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">{{ 'sam123acb456xyz' | numbers }} == 123456\n\n</pre>\n      </absolute-overflow-x>\n    </div>\n  </div>\n  <div class=\"flex2 border-grey-6x border\">\n    <div class=\"pad-h\">\n      <h3>keys</h3>\n      <p class=\"text-sm text-grey-2x\">List of keys for an Object</p>\n    </div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.keys=!views.keys\"\n      [ngClass]=\"views.keys?'border-energized bg-energized':'border-info bg-info'\">view details</a>\n    <div *ngIf=\"views.keys\" [@fadeInOutUp]=\"1\">\n      <absolute-overflow-x>\n        <pre\n          class=\"code-sample\n          margin-0\"><span ngNonBindable=\"ngNonBindable\">{{ {x:1,y:2,z:3} | keys }}</span><span class=\"pad-h-sm\">==</span><span>{{ {x:1,y:2,z:3} | keys | ack:['stringify',0] }}</span></pre>\n      </absolute-overflow-x>\n    </div>\n  </div>\n  <div class=\"flex2 border-grey-6x border\">\n    <div class=\"pad-h\">\n      <h3>aDate</h3>\n      <p class=\"text-sm text-grey-2x\">A different approach @ date decorating</p>\n    </div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.aDate=!views.aDate\"\n      [ngClass]=\"views.aDate?'border-energized bg-energized':'border-info bg-info'\">view details</a>\n    <div *ngIf=\"views.aDate\" [@fadeInOutUp]=\"1\">\n      <absolute-overflow-x>\n        <pre\n          class=\"code-sample\n          margin-0\"><span ngNonBindable=\"ngNonBindable\">{{ 0 | aDate : 'now' : 'date' : 'getTime' }}</span><span>&nbsp;== {{ 0 | aDate:'now':'date':'getTime' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ 0 | aDate : 'now' : 'hmmtt' }}</span><span>&nbsp;== {{ 0 | aDate : 'now' : 'hmmtt' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ 0 | aDate : 'now' : 'hhmmtt' }}</span><span>&nbsp;== {{ 0 | aDate : 'now' : 'hhmmtt' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ null | aDate : 'now' : 'hmmtt' }}</span><span>&nbsp;== {{ null | aDate : 'now' : 'hmmtt' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ null | aDate : 'now' : 'hhmmtt' }}</span><span>&nbsp;== {{ null | aDate : 'now' : 'hhmmtt' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ 0 | aDate : 'now' : ['addSeconds',60] : 'dateSecondDiff' }}</span><span>&nbsp;== {{ 0 | aDate : 'now' : ['addSeconds',60] : 'dateSecondDiff' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ '01/01/2014 2:00 am' | aDate : ['dateMinuteDiff','01/02/2014 2:00 am'] }}</span><span>&nbsp;== {{ '01/01/2014 2:00 am' | aDate : ['dateMinuteDiff','01/02/2014 2:00 am'] }}</span></pre>\n      </absolute-overflow-x>\n    </div>\n  </div>\n  <div class=\"flex2 border-grey-6x border\">\n    <div class=\"pad-h\">\n      <h3>aTime</h3>\n      <p class=\"text-sm text-grey-2x\">A different approach @ time decorating</p>\n    </div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.aTime=!views.aTime\"\n      [ngClass]=\"views.aTime?'border-energized bg-energized':'border-info bg-info'\">view details</a>\n    <div *ngIf=\"views.aTime\" [@fadeInOutUp]=\"1\">\n      <absolute-overflow-x>\n        <pre\n          class=\"code-sample\n          margin-0\"><span ngNonBindable=\"ngNonBindable\">{{ 0 | aTime : 'now' : 'date' }}</span><span>&nbsp;== {{ 0 | aDate:'now':'date':'getTime' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ '13:30' | aTime : 'hhmmtt' }}</span><span>&nbsp;== {{ '13:30' | aTime : 'hhmmtt' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ '1:30 pm' | aTime : 'hhmmtt' }}</span><span>&nbsp;== {{ '1:30 pm' | aTime : 'hhmmtt' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ '12:00 am' | aTime : 'hhmmtt' }}</span><span>&nbsp;== {{ '12:00 am' | aTime : 'hhmmtt' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ '12:00 pm' | aTime : 'hhmmtt' }}</span><span>&nbsp;== {{ '12:00 pm' | aTime : 'hhmmtt' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ '13:30' | aTime : 'hhmmtt' }}</span><span>&nbsp;== {{ '13:30' | aTime : 'hhmmtt' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ '1:30 pm' | aTime : 'hhmmtt' }}</span><span>&nbsp;== {{ '1:30 pm' | aTime : 'hhmmtt' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ '12:00 am' | aTime : 'hhmmtt' }}</span><span>&nbsp;== {{ '12:00 am' | aTime : 'hhmmtt' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ '12:00 pm' | aTime : 'hhmmtt' }}</span><span>&nbsp;== {{ '12:00 pm' | aTime : 'hhmmtt' }}</span></pre>\n      </absolute-overflow-x>\n    </div>\n  </div>\n  <div class=\"flex2 border-grey-6x border\">\n    <div class=\"pad-h\">\n      <h3>aMath</h3>\n      <p class=\"text-sm text-grey-2x\">A connection to Javascript Math functions</p>\n    </div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.aMath=!views.aMath\"\n      [ngClass]=\"views.aMath?'border-energized bg-energized':'border-info bg-info'\">view details</a>\n    <div *ngIf=\"views.aMath\" [@fadeInOutUp]=\"1\">\n      <absolute-overflow-x>\n        <pre\n          class=\"code-sample\n          margin-0\"><span ngNonBindable=\"ngNonBindable\">{{ 2.2 | aMath:'ceil' }}</span><span class=\"pad-h-sm\">==</span><span>{{ 2.2 | aMath:'ceil' }}</span></pre>\n      </absolute-overflow-x>\n    </div>\n  </div>\n  <div class=\"flex2 border-grey-6x border\">\n    <div class=\"pad-h\">\n      <h3>aString</h3>\n      <p class=\"text-sm text-grey-2x\">A connection to Javascript String functions</p>\n    </div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.aString=!views.aString\"\n      [ngClass]=\"views.aString?'border-energized bg-energized':'border-info bg-info'\">view details</a>\n    <div *ngIf=\"views.aString\" [@fadeInOutUp]=\"1\">\n      <absolute-overflow-x>\n        <pre\n          class=\"code-sample\n          margin-0\"><span ngNonBindable=\"ngNonBindable\">{{ 2.35 | aString:['slice',-2] }}</span><span class=\"pad-h-sm\">==</span><span>{{ 2.35 | aString:['slice',-2] }}</span></pre>\n      </absolute-overflow-x>\n    </div>\n  </div>\n  <div class=\"flex2 border-grey-6x border\">\n    <div class=\"pad-h\">\n      <h3>ack</h3>\n      <p class=\"text-sm text-grey-2x\">A connection to objectifying functions</p>\n    </div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.ack=!views.ack\"\n      [ngClass]=\"views.ack?'border-energized bg-energized':'border-info bg-info'\">view details</a>\n    <div *ngIf=\"views.ack\" [@fadeInOutUp]=\"1\">\n      <absolute-overflow-x>\n        <pre\n          class=\"code-sample\n          margin-0\"><span ngNonBindable=\"ngNonBindable\">{{ 0 | ack:'date':'toUtc':'date':'toString' }}</span><span class=\"pad-h-sm\">==</span><span>{{ 0 | ack:'date':'toUtc':'date':'toString' }}</span></pre>\n      </absolute-overflow-x>\n    </div>\n  </div>\n</div>\n<h3 class=\"margin-bottom-0\">More Pipe Examples</h3>\n<div class=\"flex-wrap child-margin-xs child-pad-xs text-center\">\n  <div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ 0 | ack : 'date' : 'now' :\n      'hmmtt' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ 0 | ack : 'date' : 'now' : 'hmmtt' }}</span></div>\n  <div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ 0 | ack : 'date' : 'now' :\n      'hhmmtt' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ 0 | ack : 'date' : 'now' : 'hhmmtt' }}</span></div>\n  <div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ null | ack : 'date' : 'now' :\n      'hmmtt' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ null | ack : 'date' : 'now' : 'hmmtt' }}</span></div>\n  <div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ null | ack : 'date' : 'now' :\n      'hhmmtt' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ null | ack : 'date' : 'now' : 'hhmmtt' }}</span></div>\n  <div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ 0 | ack : 'date' : 'now' :\n      ['addSeconds',60] : 'dateSecondDiff' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ 0 | ack : 'date' : 'now' :\n      ['addSeconds',60] : 'dateSecondDiff' }}</span></div>\n  <div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ '01/01/2014 2:00 am' | ack :\n      'date' : ['dateMinuteDiff','01/02/2014 2:00 am'] }}</span><span class=\"text-grey-2x\">&nbsp;== {{ '01/01/2014\n      2:00 am' | ack : 'date' : ['dateMinuteDiff','01/02/2014 2:00 am'] }}</span></div>\n</div>");

/***/ }),

/***/ "JJlj":
/*!**************************************!*\
  !*** ./modules/offline/providers.ts ***!
  \**************************************/
/*! exports provided: providers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providers", function() { return providers; });
/* harmony import */ var _AckOffline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AckOffline */ "/ibX");
/* harmony import */ var _AckCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AckCache */ "VfWh");
/* harmony import */ var _AckQue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AckQue */ "Aqkq");
/* harmony import */ var _AckApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AckApi */ "T5m/");




const providers = [
    _AckApi__WEBPACK_IMPORTED_MODULE_3__["AckApi"],
    _AckOffline__WEBPACK_IMPORTED_MODULE_0__["AckOffline"],
    _AckCache__WEBPACK_IMPORTED_MODULE_1__["AckCache"],
    _AckQue__WEBPACK_IMPORTED_MODULE_2__["AckQue"],
];


/***/ }),

/***/ "L1dz":
/*!********************!*\
  !*** ./src/ack.ts ***!
  \********************/
/*! exports provided: ack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ack_x_es_index_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ack-x/es/index-browser */ "qVHK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ack", function() { return ack_x_es_index_browser__WEBPACK_IMPORTED_MODULE_0__["ack"]; });




/***/ }),

/***/ "LfEq":
/*!**************************************************!*\
  !*** ./src/directives/AckAggregate.directive.ts ***!
  \**************************************************/
/*! exports provided: AckAggregate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AckAggregate", function() { return AckAggregate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let AckAggregate = class AckAggregate {
    constructor() {
        this.outputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
};
AckAggregate.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    keys: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    output: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    outputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
AckAggregate = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'ack-aggregate'
    })
], AckAggregate);



/***/ }),

/***/ "Ln0R":
/*!*********************************************!*\
  !*** ./src/directives/ShakeOn.directive.ts ***!
  \*********************************************/
/*! exports provided: ShakeOn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShakeOn", function() { return ShakeOn; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _FxOn_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FxOn.directive */ "UV2o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let ShakeOn = class ShakeOn {
    constructor(element) {
        this.element = element;
        this.shakeConstant = false;
        this.shakeThen = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.shakeTypes = [
            'shake-slow', 'shake-hard', 'shake-little', 'shake-horizontal',
            'shake-vertical', 'shake-rotate', 'shake-opacity', 'shake-crazy',
            'shake-chunk'
        ];
    }
    ngOnInit() {
        Promise.resolve().then(() => this.update());
    }
    update() {
        this.shakeForMs = this.shakeForMs || 2000;
        this.shakeType = this.shakeType || 'shake-slow';
    }
    ngOnChanges(changes) {
        if (changes.shakeOn && changes.shakeOn.currentValue != null && changes.shakeOn.currentValue != changes.shakeOn.previousValue) {
            if (changes.shakeOn.currentValue) {
                this.onTrue();
            }
            else {
                this.onFalse();
            }
        }
        if (changes.shakeType && changes.shakeType.currentValue != changes.shakeType.previousValue) {
            if (this.shakeOn) {
                const pv = changes.shakeType.previousValue;
                if (pv) {
                    Object(_FxOn_directive__WEBPACK_IMPORTED_MODULE_1__["removeClass"])(this.element.nativeElement, pv);
                }
                this.applyType();
            }
            else {
                this.removeType();
            }
        }
    }
    onFalse() {
        Object(_FxOn_directive__WEBPACK_IMPORTED_MODULE_1__["removeClass"])(this.element.nativeElement, 'shake-constant');
        this.removeType();
        if (this.timeout) {
            clearTimeout(this.timeout);
            delete this.timeout;
        }
    }
    removeType() {
        Object(_FxOn_directive__WEBPACK_IMPORTED_MODULE_1__["removeClass"])(this.element.nativeElement, this.shakeType || 'shake-slow');
    }
    applyType() {
        Object(_FxOn_directive__WEBPACK_IMPORTED_MODULE_1__["addClass"])(this.element.nativeElement, this.shakeType || 'shake-slow');
    }
    onTrue() {
        Object(_FxOn_directive__WEBPACK_IMPORTED_MODULE_1__["addClass"])(this.element.nativeElement, 'shake-constant');
        this.applyType();
        if (!this.shakeConstant) {
            this.timeout = setTimeout(() => {
                this.onFalse();
                this.shakeThen.emit(this);
            }, this.shakeForMs);
        }
    }
};
ShakeOn.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
ShakeOn.propDecorators = {
    shakeConstant: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    shakeOn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    shakeForMs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    shakeType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    shakeThen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
ShakeOn = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
        selector: "[shakeOn]",
        exportAs: "ShakeOn"
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
], ShakeOn);



/***/ }),

/***/ "Lu4X":
/*!***********************************!*\
  !*** ./modules/offline/module.ts ***!
  \***********************************/
/*! exports provided: AckOfflineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AckOfflineModule", function() { return AckOfflineModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./providers */ "JJlj");
var AckOfflineModule_1;



let AckOfflineModule = AckOfflineModule_1 = class AckOfflineModule {
    static forRoot() {
        return {
            ngModule: AckOfflineModule_1,
            providers: _providers__WEBPACK_IMPORTED_MODULE_2__["providers"]
        };
    }
};
AckOfflineModule = AckOfflineModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: []
    })
], AckOfflineModule);



/***/ }),

/***/ "Lw2E":
/*!*******************************************************!*\
  !*** ./node_modules/moment-mini/locale sync ^\.\/.*$ ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./locale": "wCDk",
	"./locale.js": "wCDk"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "Lw2E";

/***/ }),

/***/ "O5Bq":
/*!*****************************!*\
  !*** ./src/declarations.ts ***!
  \*****************************/
/*! exports provided: screenDirectives, declarations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenDirectives", function() { return screenDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "declarations", function() { return declarations; });
/* harmony import */ var _components_AckSections_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AckSections.component */ "F4ZD");
/* harmony import */ var _components_AckSectionTemplates_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AckSectionTemplates.component */ "fA6y");
/* harmony import */ var _components_AckModal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AckModal.component */ "8SBA");
/* harmony import */ var _components_AckModalLayout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AckModalLayout.component */ "1KjV");
/* harmony import */ var _components_AckFixedElementStage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/AckFixedElementStage.component */ "CsuE");
/* harmony import */ var _components_AckFixedElement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/AckFixedElement.component */ "SfXv");
/* harmony import */ var _components_AckCloseIcon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/AckCloseIcon.component */ "S2n4");
/* harmony import */ var _components_AckOptions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/AckOptions.component */ "nlrQ");
/* harmony import */ var _components_AckOptionsModal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/AckOptionsModal.component */ "iooJ");
/* harmony import */ var _components_AbsoluteOverflowX_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/AbsoluteOverflowX.component */ "sEoc");
/* harmony import */ var _components_ErrorWell_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ErrorWell.component */ "/D3w");
/* harmony import */ var _components_ReaderHeaderBody_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/ReaderHeaderBody.component */ "8Wnv");
/* harmony import */ var _components_debug_area_DebugArea_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/debug-area/DebugArea.component */ "iEvh");
/* harmony import */ var _directives_AckArray_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/AckArray.directive */ "4Ihc");
/* harmony import */ var _directives_AckAggregate_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/AckAggregate.directive */ "LfEq");
/* harmony import */ var _components_ScrollPastFixed_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/ScrollPastFixed.component */ "T/m2");
/* harmony import */ var _directives_ShakeOn_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/ShakeOn.directive */ "Ln0R");
/* harmony import */ var _directives_FxOn_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/FxOn.directive */ "UV2o");
/* harmony import */ var _directives_FocusOn_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/FocusOn.directive */ "xM1n");
/* harmony import */ var _directives_Init_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/Init.directive */ "eNHZ");
/* harmony import */ var _directives_ContentModel_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/ContentModel.directive */ "nuEm");
/* harmony import */ var _directives_SelectOn_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/SelectOn.directive */ "6DBY");
/* harmony import */ var _directives_InnerHtmlModel_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./directives/InnerHtmlModel.directive */ "dLpJ");
/* harmony import */ var _directives_ReplaceModel_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./directives/ReplaceModel.directive */ "eTfi");
/* harmony import */ var _directives_ElementSizeModel_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./directives/ElementSizeModel.directive */ "unt3");
/* harmony import */ var _directives_ScreenScrollHeightDiff_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./directives/ScreenScrollHeightDiff.directive */ "2Uos");
/* harmony import */ var _directives_ScreenScroll_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./directives/ScreenScroll.directive */ "/2xC");
/* harmony import */ var _directives_PxFromHtmlTop_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./directives/PxFromHtmlTop.directive */ "v+h3");
/* harmony import */ var _directives_ScreenScrollModelY_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./directives/ScreenScrollModelY.directive */ "q90b");
/* harmony import */ var _directives_ScreenWidthModel_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./directives/ScreenWidthModel.directive */ "stBn");
/* harmony import */ var _directives_ScreenHeightModel_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./directives/ScreenHeightModel.directive */ "SJOV");
/* harmony import */ var _directives_HtmlWidthModel_directive__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./directives/HtmlWidthModel.directive */ "7RV/");
/* harmony import */ var _directives_HtmlHeightModel_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./directives/HtmlHeightModel.directive */ "5sUW");
/* harmony import */ var _directives_StatusOnlineModel_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./directives/StatusOnlineModel.directive */ "IyaO");
/* harmony import */ var _directives_StatusOfflineModel_directive__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./directives/StatusOfflineModel.directive */ "zFTS");
/* harmony import */ var _directives_VarDirective_directive__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./directives/VarDirective.directive */ "jaOU");
/* harmony import */ var _declarations_short__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./declarations.short */ "oN2l");





































const screenDirectives = [
    _directives_ScreenScrollModelY_directive__WEBPACK_IMPORTED_MODULE_28__["ScreenScrollModelY"],
    _directives_ScreenWidthModel_directive__WEBPACK_IMPORTED_MODULE_29__["ScreenWidthModel"],
    _directives_ScreenHeightModel_directive__WEBPACK_IMPORTED_MODULE_30__["ScreenHeightModel"],
    _directives_ScreenScroll_directive__WEBPACK_IMPORTED_MODULE_26__["ScreenScroll"],
    _components_ScrollPastFixed_component__WEBPACK_IMPORTED_MODULE_15__["ScrollPastFixed"],
    _directives_ScreenScrollHeightDiff_directive__WEBPACK_IMPORTED_MODULE_25__["ScreenScrollHeightDiff"],
    _directives_PxFromHtmlTop_directive__WEBPACK_IMPORTED_MODULE_27__["PxFromHtmlTop"]
];
const declarations = [
    _directives_Init_directive__WEBPACK_IMPORTED_MODULE_19__["InitDirective"],
    _directives_SelectOn_directive__WEBPACK_IMPORTED_MODULE_21__["SelectOn"],
    _directives_FocusOn_directive__WEBPACK_IMPORTED_MODULE_18__["FocusOn"],
    _directives_VarDirective_directive__WEBPACK_IMPORTED_MODULE_35__["VarDirective"],
    _directives_ContentModel_directive__WEBPACK_IMPORTED_MODULE_20__["ContentModel"],
    _directives_InnerHtmlModel_directive__WEBPACK_IMPORTED_MODULE_22__["InnerHtmlModel"],
    _directives_ReplaceModel_directive__WEBPACK_IMPORTED_MODULE_23__["ReplaceModel"],
    _declarations_short__WEBPACK_IMPORTED_MODULE_36__["FormAlter"],
    _declarations_short__WEBPACK_IMPORTED_MODULE_36__["FormChanged"],
    _declarations_short__WEBPACK_IMPORTED_MODULE_36__["EnterKey"],
    _declarations_short__WEBPACK_IMPORTED_MODULE_36__["EscapeKey"],
    _declarations_short__WEBPACK_IMPORTED_MODULE_36__["PreventBackKey"],
    _declarations_short__WEBPACK_IMPORTED_MODULE_36__["PreventEnterKey"],
    ...screenDirectives,
    _directives_HtmlWidthModel_directive__WEBPACK_IMPORTED_MODULE_31__["HtmlWidthModel"],
    _directives_HtmlHeightModel_directive__WEBPACK_IMPORTED_MODULE_32__["HtmlHeightModel"],
    _directives_ShakeOn_directive__WEBPACK_IMPORTED_MODULE_16__["ShakeOn"],
    _directives_FxOn_directive__WEBPACK_IMPORTED_MODULE_17__["FxOn"],
    _directives_StatusOnlineModel_directive__WEBPACK_IMPORTED_MODULE_33__["StatusOnlineModel"],
    _directives_StatusOfflineModel_directive__WEBPACK_IMPORTED_MODULE_34__["StatusOfflineModel"],
    _directives_ElementSizeModel_directive__WEBPACK_IMPORTED_MODULE_24__["ElementSizeModel"],
    _directives_ElementSizeModel_directive__WEBPACK_IMPORTED_MODULE_24__["ElementWidthModel"],
    _directives_ElementSizeModel_directive__WEBPACK_IMPORTED_MODULE_24__["ElementHeightModel"],
    _declarations_short__WEBPACK_IMPORTED_MODULE_36__["InputHint"],
    ..._components_debug_area_DebugArea_component__WEBPACK_IMPORTED_MODULE_12__["declarations"],
    _components_ErrorWell_component__WEBPACK_IMPORTED_MODULE_10__["ErrorWell"],
    _components_AbsoluteOverflowX_component__WEBPACK_IMPORTED_MODULE_9__["AbsoluteOverflowX"],
    _components_ReaderHeaderBody_component__WEBPACK_IMPORTED_MODULE_11__["ReaderHeaderBody"],
    _components_ReaderHeaderBody_component__WEBPACK_IMPORTED_MODULE_11__["ReaderHeader"],
    _components_ReaderHeaderBody_component__WEBPACK_IMPORTED_MODULE_11__["ReaderBody"],
    _components_AckCloseIcon_component__WEBPACK_IMPORTED_MODULE_6__["AckCloseIcon"],
    _components_AckSections_component__WEBPACK_IMPORTED_MODULE_0__["AckSections"],
    _components_AckSectionTemplates_component__WEBPACK_IMPORTED_MODULE_1__["AckSectionTemplates"],
    _components_AckOptions_component__WEBPACK_IMPORTED_MODULE_7__["AckOptions"],
    _components_AckOptionsModal_component__WEBPACK_IMPORTED_MODULE_8__["AckOptionsModal"],
    _components_AckModal_component__WEBPACK_IMPORTED_MODULE_2__["AckModal"],
    _components_AckModalLayout_component__WEBPACK_IMPORTED_MODULE_3__["AckModalLayout"],
    _directives_AckArray_directive__WEBPACK_IMPORTED_MODULE_13__["AckArray"],
    _directives_AckAggregate_directive__WEBPACK_IMPORTED_MODULE_14__["AckAggregate"],
    _components_AckFixedElement_component__WEBPACK_IMPORTED_MODULE_5__["AckFixedElement"],
    _components_AckFixedElementStage_component__WEBPACK_IMPORTED_MODULE_4__["AckFixedElementStage"]
];


/***/ }),

/***/ "QjCW":
/*!********************************************************!*\
  !*** ./example/src/templates/provider-examples.pug.ts ***!
  \********************************************************/
/*! exports provided: string */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
const string = "<h2 class=\"margin-top-0\">Providers</h2><ng-container [(statusOnlineModel)]=\"statusOnlineModel\"></ng-container><p class=\"margin-bottom-0\">Import Example</p><div class=\"text-warning text-xs\">The following import code, is NOT needed if you used the AckModule import <a class=\"text-calm\" href=\"#/overview\" (click)=\"scrollToModuleImport()\">seen here</a></div><pre class=\"code-sample\">import &#123; providers as ackProviders &#125; from \"ack-angular/providers\"" +
    "\nimport &#123; NgModule &#125; from '@angular/core';" +
    "\n" +
    "\n@NgModule(&#123;" +
    "\n  providers:[ ...ackProviders ]" +
    "\n&#125;)" +
    "\n</pre><error-well [error]=\"error\"></error-well><br/><div class=\"flex-wrap child-margin-xxs\"><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>Prompts</h3><div class=\"text-grey-2x\">Modal driven prompts to require user confirmation</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"views.confirm=!views.confirm\" [ngClass]=\"views.confirm?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.confirm\" [@fadeInOutUp]=\"1\"><div class=\"bg-info pad text-info\">This component requires the element &lt;ack-fixed-element-stage&gt; to be present somewhere in your app</div><div class=\"pad flex-wrap child-margin-xxs child-border child-radius-3 child-pad-h\"><a class=\"bg-warning\" (click)=\"runAlert()\">alert</a><a class=\"bg-info\" (click)=\"runConfirm()\">confirm</a></div><h4 class=\"pad-h-sm margin-h-0 margin-bottom-0\">Usage Example</h4><div class=\"pad-xs\"><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">import &#123; Prompts &#125; from \"./ack-angular\"" +
    "\n" +
    "\nclass MyClass&#123;" +
    "\n  constructor(public prompts:Prompts)&#123;&#125;" +
    "\n" +
    "\n  runConfirm():EventEmitter&lt;boolean&gt;&#123;" +
    "\n    return this.prompts.confirm('This is a confirm example')" +
    "\n    .subscribe(result=&gt;console.log('result of confirm:' +result))" +
    "\n  &#125;" +
    "\n" +
    "\n  runAlert():EventEmitter&lt;boolean&gt;&#123;" +
    "\n    return this.prompts.alert('This is an alert example')" +
    "\n    .subscribe(result=&gt;console.log('alert prompt closed'))" +
    "\n  &#125;" +
    "\n&#125;" +
    "\n" +
    "\n" +
    "\n</pre></absolute-overflow-x></div></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>AckApi</h3><div class=\"text-grey-2x\">Http util with offline config for request failures</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"views.ackApi=!views.ackApi\" [ngClass]=\"views.ackApi?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.ackApi\" [@fadeInOutUp]=\"1\"><div class=\"strong pad-sm\">Http Tester</div><div class=\"pad-xs\"><div class=\"flex-center flex-valign-center child-pad-xxs\"><div><label>method</label><select class=\"text-md block width-full\" [(ngModel)]=\"httpConfig.method\" name=\"httpConfig.method\"><option value=\"GET\">GET</option><option value=\"POST\">POST</option><option value=\"PUT\">PUT</option><option value=\"PATCH\">PATCH</option><option value=\"DELETE\">DELETE</option></select></div><div class=\"flex-1\"><label>url</label><input class=\"block width-full min-width-300 text-md\" [(ngModel)]=\"httpConfig.url\" name=\"httpConfig.url\" (enterKey)=\"sendHttp()\"/></div><div><label>&nbsp;</label><div><button class=\"border bg-success text-success border-success text-md\" type=\"submit\" (click)=\"sendHttp()\">request</button></div></div></div><div class=\"margin-top-xs pad-xxs bg-white border border-grey-6x\"><div class=\"flex-center child-margin-1 child-pad-xs text-center\"><a class=\"flex-1 border\" (click)=\"views.httpSub=views.httpSub=='body'?null:'body'\" [ngClass]=\"views.httpSub=='body'?'bg-energized border-energized':'bg-info text-info border-info'\">request config</a><a class=\"pos-rel flex-1 border\" (click)=\"views.httpSub=views.httpSub=='headers'?null:'headers';loadHttpHeaderConfigArray();\" [ngClass]=\"views.httpSub=='headers'?'bg-energized border-energized':'bg-info text-info border-info'\"><div class=\"pos-abs pad-xxs right-0 text-white\" style=\"line-height:20px\"><div class=\"font-fixed-width radius-half height-20 width-20 bg-grey-3x pad-h-xxs\">{{ httpHeaderConfigArray.length }}</div></div><div class=\"pad-h-lg\">request headers</div></a><a class=\"pos-rel flex-1 border\" (click)=\"views.httpSub=views.httpSub=='offlineModel'?null:'offlineModel';\" [ngClass]=\"views.httpSub=='offlineModel'?'bg-energized border-energized':'bg-info text-info border-info'\"><div class=\"pos-abs pad-xxs left-0 text-white\" style=\"line-height:20px\"><div class=\"inline-block font-fixed-width radius-half height-20 width-20 bg-grey-3x pad-h-xxs\">{{ httpQueArray.length || 0 }}</div></div><div class=\"pos-abs pad-xxs right-0 text-white\" style=\"line-height:20px\"><div class=\"inline-block font-fixed-width radius-half height-20 width-20 bg-grey-3x pad-h-xxs\">{{ (httpCache|keys).length || 0 }}</div></div>que and cache</a></div><div class=\"pad-xs\" *ngIf=\"views.httpSub=='body'\" [@fadeInOutUp]=\"1\"><div class=\"flex-wrap child-pad-xs\"><div><label>responseType</label><select class=\"width-full\" name=\"reponseType\" id=\"reponseType\" [(ngModel)]=\"httpConfig.responseType\"><option value=\"\"></option><option value=\"text\">text</option></select><div class=\"pos-rel text-xs\"><div class=\"pos-abs top-0 text-grey-3x width-full\">Control response parsing</div></div></div><div><label>Content-Type</label><select class=\"width-full\" name=\"httpConfig.headers['Content-Type']\" [(ngModel)]=\"httpConfig.headers['Content-Type']\"><option value=\"text/plain\">text/plain</option><option value=\"application/json\">application/json</option></select></div></div><h4 class=\"margin-bottom-0\">Request Body</h4><textarea class=\"width-full height-100\" name=\"httpConfig.data\" placeholder=\"transmit data here\" [(ngModel)]=\"httpConfig.body\"></textarea></div><div class=\"pad-xs\" *ngIf=\"views.httpSub=='headers'\" [@fadeInOutUp]=\"1\"><div class=\"flex child-margin-xxs child-pad-xxs\" *ngFor=\"let item of httpHeaderConfigArray; let i = index\" [@fadeInOutUp]=\"1\"><input class=\"flex-1\" [(ngModel)]=\"item.name\" placeholder=\"name\" (change)=\"readHttpHeaderConfigArray()\"/><input class=\"flex-1\" [(ngModel)]=\"item.value\" placeholder=\"value\" (change)=\"readHttpHeaderConfigArray()\"/><button class=\"border border-warning text-warning bg-warning\" type=\"button\" (click)=\"httpHeaderConfigArray.splice(i,1);readHttpHeaderConfigArray()\" [ngClass]=\"0==i?'width-50 margin-right-0 border-right-0':'width-100'\">drop</button><button class=\"border-left-0 margin-left-0 width-50 border border-calm text-white bg-calm\" *ngIf=\"0==i\" type=\"button\" (click)=\"httpHeaderConfigArray.unshift({name:'', value:''})\" [@fadeInOutUp]=\"1\">add</button></div></div><div class=\"pad-xs\" *ngIf=\"views.httpSub=='offlineModel'\" [@fadeInOutUp]=\"1\"><div *ngIf=\"httpConfig.method=='GET'\" [@fadeInOutUp]=\"1\"><div class=\"text-grey-2x\">Cache GET requests.</div><div class=\"pad flex-wrap child-margin-xxs\"><div class=\"flex-1\"><label>maxAge <span class=\"text-xs text-grey-3x\">milsecs</span></label><input class=\"width-full\" type=\"number\" [(ngModel)]=\"httpConfig.offlineModel.maxAge\"/><input-hint>New fetch will occur after cache has aged</input-hint></div><div class=\"flex-1\"><label>expires</label><input class=\"width-full\" type=\"datetime-local\" [(ngModel)]=\"httpConfig.offlineModel.expires\"/><input-hint>New fetch will occur after above date</input-hint></div></div><div class=\"pad-top text-warning text-center text-xs\">change request method for QUE details</div><div class=\"pad-xs\" *ngIf=\"(httpCache|keys).length\" [@fadeInOutUp]=\"1\"><h4 class=\"margin-0\">HTTP Cache Array</h4><p class=\"text-grey-2x text-xs\">Requests awaiting internet connection to return</p><div class=\"pad-xxs\" *ngFor=\"let key of (httpCache|keys); let i=index\" [@fadeInOutUp]=\"1\"><error-well [error]=\"httpCache[key]\" cssClasses=\"bg-info\" message=\"{{key}}\"></error-well></div><p class=\"text-grey-2x text-xs\"><strong>Seconds</strong>, after restoring internet connection, the above requests will process</p><div class=\"pad text-center\"><button (click)=\"clearHttpCache()\">clear cache</button></div></div></div><div *ngIf=\"httpConfig.method!='GET'\" [@fadeInOutUp]=\"1\"><div class=\"text-grey-2x\">Que failed POST/PUT/PATCH/DELETE requests. </div><div class=\"pad\"><label>maxTry</label><input class=\"block\" type=\"number\" [(ngModel)]=\"httpConfig.offlineModel.maxTry\"/><div class=\"pos-rel text-xs\"><div class=\"pos-abs top-0 text-grey-3x width-full\">Control number of failed <strong>attempts</strong> to reprocess</div></div></div><div class=\"pad-top text-warning text-center text-xs\">change request method to GET for CACHE details</div><div class=\"pad-xs\" *ngIf=\"httpQueArray.length\" [@fadeInOutUp]=\"1\"><h4 class=\"margin-0\">HTTP Que Array</h4><p class=\"text-grey-2x\">Requests awaiting internet connection to return. <strong>Seconds</strong>, after restoring internet connection, the following requests will process</p><div class=\"pad-xxs\" *ngFor=\"let item of httpQueArray; let i=index\" [@fadeInOutUp]=\"1\"><error-well [error]=\"item\" cssClasses=\"border border-info bg-info\" message=\"{{item.method}}:{{ item.url }}\"></error-well></div><div class=\"pad text-center\"><button (click)=\"clearHttpQue()\">clear que</button></div></div></div></div></div></div><error-well [error]=\"httpResponse\" cssClasses=\"border border-success text-success bg-success\"></error-well><error-well [error]=\"httpError\"></error-well><div class=\"margin pad bg-royal text-sm\"><div class=\"text-white\">TRY THIS</div><ul><li>Disconnect from the internet. You are currently: <strong>{{ statusOnlineModel ? 'online':'offline' }}</strong></li><li>Make POST, PUT, or PATCH request(s). Currently: <strong>{{ httpConfig.method }}</strong></li><li>Your requests will be qued into offline memory</li><li>Connect to the internet. Your request should automatically resend and the que is cleared</li></ul></div><h4 class=\"pad-h-sm margin-h-0 margin-bottom-0\">Usage Example</h4><div class=\"pad-xs\"><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">import &#123; AckApi &#125; from \"ack-angular\"" +
    "\nimport &#123; Component &#125; from \"@angular/core\"" +
    "\n" +
    "\n@Component(&#123;...&#125;)" +
    "\nexport class SomeClass&#123;" +
    "\n  offlineModel = &#123;" +
    "\n    name:'ackHttpTests'," +
    "\n    maxAge:15000,//GET cache busted at 15 seconds" +
    "\n    maxTry:50//POST failure retries allowed" +
    "\n  &#125;" +
    "\n" +
    "\n  constructor(public AckApi:AckApi)&#123;&#125;" +
    "\n" +
    "\n  monitorOnlineStatus()&#123;" +
    "\n    window.addEventListener('online',()=&gt;&#123;" +
    "\n      if(navigator.onLine)&#123;" +
    "\n        this.AckApi.processQue('ackHttpTests')" +
    "\n      &#125;" +
    "\n    &#125;)" +
    "\n  &#125;" +
    "\n" +
    "\n  clearPostQue()&#123;" +
    "\n    return this.AckApi.clearQue('ackHttpTests')" +
    "\n  &#125;" +
    "\n" +
    "\n  clearGetCache()&#123;" +
    "\n    return this.AckApi.clearCache('ackHttpTests')" +
    "\n  &#125;" +
    "\n" +
    "\n  request()&#123;" +
    "\n    return this.AckApi.request(&#123;" +
    "\n      url:'...'." +
    "\n      method:'...'" +
    "\n      offlineModel:this.offlineModel" +
    "\n    &#125;)" +
    "\n    .then( response=&gt;console.log('200',response) )" +
    "\n    .catch(e=&gt;&#123;" +
    "\n" +
    "\n      //ignore error, has been qued for when internet returns" +
    "\n      if(e.sendFailMeta)return" +
    "\n" +
    "\n      return Promise.reject(e)" +
    "\n    &#125;)" +
    "\n  &#125;" +
    "\n" +
    "\n  POST()&#123;" +
    "\n    return this.AckApi.post('url', &#123;data&#125;, &#123;offlineModel:this.offlineModel&#125;)" +
    "\n    .then( response=&gt;console.log('200',response) )" +
    "\n    .catch(e=&gt;&#123;" +
    "\n      //ignore error, has been qued for when internet returns" +
    "\n      if(e.sendFailMeta)return" +
    "\n" +
    "\n      return Promise.reject(e)" +
    "\n    &#125;)" +
    "\n  &#125;" +
    "\n" +
    "\n  GET()&#123;" +
    "\n    return this.AckApi.get('url', &#123;offlineModel:this.offlineModel&#125;)" +
    "\n    .then( response=&gt;console.log('200',response) )" +
    "\n    .catch( e=&gt;console.error(e) )" +
    "\n  &#125;" +
    "\n&#125;</pre></absolute-overflow-x></div></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>ErrorLog</h3><div class=\"text-grey-2x\">Smart error logging for single page apps</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"views.errorLog=!views.errorLog\" [ngClass]=\"views.errorLog?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.errorLog\" [@fadeInOutUp]=\"1\"><div class=\"strong pad-sm\">Error Tester</div><form class=\"flex-center flex-valign-center child-margin-xs\"><span class=\"margin-right-0\">maxLog:</span><input class=\"margin-left-0 width-50 text-md\" type=\"number\" [(ngModel)]=\"ErrorLog.maxLog\" name=\"ErrorLog.maxLog\"/><button class=\"text-md\" (click)=\"causeErrorLog()\">cause error</button></form><div class=\"margin-bottom-xxs\" *ngFor=\"let item of ErrorLog.log\" [@fadeInOutUp]=\"1\"><error-well [error]=\"item\"></error-well></div><h4 class=\"pad-h-sm margin-0\">Usage Example</h4><div class=\"pad-xs\"><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">import &#123; ErrorLog &#125; from \"ack-angular\"" +
    "\nimport &#123; Component &#125; from \"@angular/core\"" +
    "\n" +
    "\n@Component(&#123;...&#125;)" +
    "\nexport class SomeClass&#123;" +
    "\n  constructor(public ErrorLog:ErrorLog)&#123;" +
    "\n    this.ErrorLog.maxLog = 30" +
    "\n    this.ErrorLog.add('some error')" +
    "\n    this.errorCount  = this.ErrorLog.log.length" +
    "\n" +
    "\n    //catch and log all uncaught window onerror events" +
    "\n    this.ErrorLog.monitorWindow()" +
    "\n  &#125;" +
    "\n&#125;" +
    "\n</pre></absolute-overflow-x></div></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>Log</h3><div class=\"text-grey-2x\">Smart logging for single page apps</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"views.log=!views.log\" [ngClass]=\"views.log?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.log\" [@fadeInOutUp]=\"1\"><div class=\"strong pad-sm\">Log Tester</div><form class=\"flex-center flex-valign-center child-margin-xs\"><span class=\"margin-right-0\">maxLog:</span><input class=\"margin-left-0 width-50 text-md\" type=\"number\" [(ngModel)]=\"Log.maxLog\" name=\"Log.maxLog\"/><button class=\"text-md\" (click)=\"causeLog()\">cause log</button></form><div class=\"margin-bottom-xxs\" *ngFor=\"let item of Log.log\" [@fadeInOutUp]=\"1\"><error-well [error]=\"item\" cssClasses=\"border-info border text-info bg-info\"></error-well></div><h4 class=\"pad-h-sm margin-0\">Usage Example</h4><div class=\"pad-xs\"><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">import &#123; Log &#125; from \"ack-angular\"" +
    "\nimport &#123; Component &#125; from \"@angular/core\"" +
    "\n" +
    "\n@Component(&#123;...&#125;)" +
    "\nexport class SomeClass&#123;" +
    "\n  constructor(public Log:Log)&#123;" +
    "\n    this.Log.maxLog = 30" +
    "\n    this.Log.add('some error')" +
    "\n    this.logCount  = this.Log.log.length" +
    "\n  &#125;" +
    "\n&#125;" +
    "\n</pre></absolute-overflow-x></div></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>UrlVars</h3><div class=\"text-grey-2x\">Parse and get url query variables regardless of case sensativity</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"views.urlVars=!views.urlVars\" [ngClass]=\"views.urlVars?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.urlVars\" [@fadeInOutUp]=\"1\"><h4 class=\"pad-h-sm margin-0\">Usage Example</h4><div class=\"pad-xs\"><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">import &#123; UrlVars &#125; from \"ack-angular\"" +
    "\nimport &#123; Component &#125; from \"@angular/core\"" +
    "\n" +
    "\n@Component(&#123;...&#125;)" +
    "\nexport class SomeClass&#123;" +
    "\n  token:any" +
    "\n" +
    "\n  constructor(public UrlVars:UrlVars)&#123;" +
    "\n    console.log('all parsed variables', this.UrlVars.vars)" +
    "\n    " +
    "\n    this.token = this.UrlVars.get('token')//case insensative variable fetch" +
    "\n  &#125;" +
    "\n&#125;" +
    "\n</pre></absolute-overflow-x></div></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>WindowService</h3><div class=\"text-grey-2x\">Proper dependency injection of window variable</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"views.windowService=!views.windowService\" [ngClass]=\"views.windowService?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.windowService\" [@fadeInOutUp]=\"1\"><h4 class=\"pad-h-sm margin-0\">Usage Example</h4><div class=\"pad-xs\"><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">import &#123; WindowService &#125; from \"ack-angular\"" +
    "\nimport &#123; Component &#125; from \"@angular/core\"" +
    "\n" +
    "\n@Component(&#123;...&#125;)" +
    "\nexport class SomeClass&#123;" +
    "\n  token:any" +
    "\n" +
    "\n  constructor(public WindowService:WindowService)&#123;" +
    "\n    console.log('window', this.WindowService.nativeWindow)" +
    "\n  &#125;" +
    "\n&#125;" +
    "\n</pre></absolute-overflow-x></div></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>AckOffline</h3><div class=\"text-grey-2x\">Offline storage provided by <a class=\"text-calm\" href=\"https://www.npmjs.com/package/localforage\">localforage</a></div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"views.ackOffline=!views.ackOffline\" [ngClass]=\"views.ackOffline?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.ackOffline\" [@fadeInOutUp]=\"1\"><div class=\"strong pad-sm\">Memory Test</div><form class=\"pad-xs flex child-margin-xxs\" (ngSubmit)=\"setOffline(newOfflineStorage)\"><input class=\"flex-1\" [(ngModel)]=\"newOfflineStorage\" name=\"newOfflineStorage\" placeholder=\"put something into browser memory\"/><button (click)=\"setOffline(newOfflineStorage)\">set</button><button type=\"button\" (click)=\"clearOffline()\">clear</button></form><div class=\"text-xs pad-xs border-success text-success bg-success\" *ngIf=\"offlineStorage\" [@fadeInOutUp]=\"1\"><h5 class=\"margin-0\">Current Offline Storage</h5><div class=\"pad\">{{ offlineStorage|json }}</div></div><div class=\"text-xs pad-xs border-info text-info bg-info margin-bottom\"><ul><li>Above you can edit offline browser storage.</li><li>Come back later and your memory will still be there</li></ul></div><h4 class=\"pad-h-sm margin-0\">Usage Example</h4><div class=\"pad-xs\"><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">import &#123; AckOffline &#125; from \"ack-angular\"" +
    "\nimport &#123; Component &#125; from \"@angular/core\"" +
    "\n" +
    "\n@Component(&#123;...&#125;)" +
    "\nexport class SomeClass&#123;" +
    "\n  constructor(public AckOffline:AckOffline)&#123;" +
    "\n    this.AckOffline.get('my-app-data')" +
    "\n    .then(data=&gt;this.appData=data)" +
    "\n  &#125;" +
    "\n" +
    "\n  set(data)&#123;" +
    "\n    return this.AckOffline.set('my-app-data', data)" +
    "\n    .catch(e=&gt;console.error(e))" +
    "\n  &#125;" +
    "\n" +
    "\n  get()&#123;" +
    "\n    return this.AckOffline.get('my-app-data')" +
    "\n    .catch(e=&gt;console.error(e))" +
    "\n  &#125;" +
    "\n" +
    "\n  clear()&#123;" +
    "\n    return this.AckOffline.clear('my-app-data')" +
    "\n    .catch(e=&gt;console.error(e))" +
    "\n  &#125;" +
    "\n&#125;" +
    "\n</pre></absolute-overflow-x></div></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>AckCache</h3><div class=\"text-grey-2x\">Offline storage used with expires and maxAge cache control options</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"views.ackCache=!views.ackCache\" [ngClass]=\"views.ackCache?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.ackCache\" [@fadeInOutUp]=\"1\"><div class=\"strong pad-sm\">Cache Test</div><form class=\"pad-xs flex child-margin-xxs\" (ngSubmit)=\"setCache(cacheStorage, cacheSeconds)\"><input class=\"flex-1\" [(ngModel)]=\"cacheStorage\" name=\"cacheStorage\" placeholder=\"put something expirable into browser memory\"/><input class=\"width-50\" type=\"number\" [(ngModel)]=\"cacheSeconds\" name=\"cacheSeconds\" placeholder=\"expires in seconds\" value=\"30\"/><span class=\"text-xs text-grey-2x margin-left-0 flex-stacked flex-valign-bottom\"><div class=\"flex-1 line-height-0\">&nbsp;</div><span class=\"line-height-3-4\">secs&nbsp;</span></span><button (click)=\"setCache(cacheStorage, cacheSeconds)\">set</button><button type=\"button\" (click)=\"clearCache()\">clear</button></form><div class=\"text-xs pad-xs border-success text-success bg-success\" *ngIf=\"cache\" [@fadeInOutUp]=\"1\"><h5 class=\"margin-0\">Current Cache</h5><div class=\"pad\">{{ cache|json }}</div></div><div class=\"text-xs pad-xs border-info text-info bg-info margin-bottom\"><ul><li>Above you can edit offline browser storage.</li><li>Come back later</li><li>Your memory will still be there (until it expires)</li></ul></div><h4 class=\"pad-h-sm margin-0\">Usage Example</h4><div class=\"pad-xs\"><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">import &#123; AckCache &#125; from \"ack-angular\"" +
    "\nimport &#123; Component &#125; from \"@angular/core\"" +
    "\n" +
    "\n@Component(&#123;...&#125;)" +
    "\nexport class SomeClass&#123;" +
    "\n  constructor(public AckCache:AckCache)&#123;" +
    "\n  &#125;" +
    "\n" +
    "\n  set(data)&#123;" +
    "\n    return this.AckCache.set('my-app-data', data)" +
    "\n    .catch(e=&gt;console.error(e))" +
    "\n  &#125;" +
    "\n" +
    "\n  get()&#123;" +
    "\n    return this.AckCache.get('my-app-data')" +
    "\n    .catch(e=&gt;console.error(e))" +
    "\n  &#125;" +
    "\n" +
    "\n  clear()&#123;" +
    "\n    return this.AckCache.clear('my-app-data')" +
    "\n    .catch(e=&gt;console.error(e))" +
    "\n  &#125;" +
    "\n&#125;" +
    "\n</pre></absolute-overflow-x></div></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>AckQue</h3><div class=\"text-grey-2x\">Offline storage used to provide association between data and data-processors</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"views.ackQue=!views.ackQue\" [ngClass]=\"views.ackQue?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.ackQue\" [@fadeInOutUp]=\"1\"><div class=\"pad-sm strong\">Que Test</div><form class=\"flex child-margin-xxs\" *ngFor=\"let item of queArray; let i=index\" [@fadeInOutUp]=\"1\"><div class=\"text-xs pad-h-xs\">{{i}}</div><input class=\"flex-1\" [(ngModel)]=\"queArray[i]\" name=\"que{{index}}\" readonly=\"readonly\"/><button (click)=\"processQuedByIndex(i)\">process</button><button (click)=\"dequeByIndex(i)\">remove</button></form><form class=\"flex child-margin-xxs\" (ngSumbit)=\"que(queStorage)\"><div class=\"text-xs pad-h-xs\">add</div><input class=\"flex-1\" [(ngModel)]=\"queStorage\" name=\"queStorage\" placeholder=\"put process data into que\"/><button (click)=\"que(queStorage)\">que item</button><button (click)=\"clearQue()\">clear all</button><button (click)=\"processQue()\">process all</button></form><div class=\"flex child-margin-xxs\" *ngFor=\"let item of processQueResults; let i=index\" [@fadeInOutUp]=\"1\"><div class=\"text-xs pad-h-xs\">Completed {{i}} :</div><input class=\"flex-1\" [ngModel]=\"item\" disabled=\"disabled\"/></div><div class=\"text-xs pad-xs border-info text-info bg-info margin-bottom\">TRY THIS<ul><li>Put items into que</li><li>Disable your internet connection (unplug it)</li><li>Enable your internet connection</li><li>The entire que will be processed (takes seconds)</li></ul><div class=\"pad-xs\">You are currently : {{statusOnlineModel ? 'online' : 'offline'}}</div></div><h4 class=\"pad-h-sm margin-0\">Usage Example</h4><div class=\"pad-xs\"><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">import &#123; AckOffline &#125; from \"ack-angular\"" +
    "\nimport &#123; Component &#125; from \"@angular/core\"" +
    "\n" +
    "\n@Component(&#123;...&#125;)" +
    "\nexport class SomeClass&#123;" +
    "\n  constructor(public AckOffline:AckOffline)&#123;" +
    "\n    this.AckOffline.registerQueHandler('postHttpQue',quedData=&gt;&#123;" +
    "\n      console.log('browser back online, ready to transmit data', quedData)" +
    "\n    &#125;)" +
    "\n" +
    "\n    this.onlineEvent = ()=&gt;this.onOnline()" +
    "\n" +
    "\n    window.addEventListener('online',this.onlineEvent)" +
    "\n  &#125;" +
    "\n" +
    "\n  /** anytime we come back from offline, lets process our que */" +
    "\n  onOnline()&#123;" +
    "\n    this.AckOffline.processQue()" +
    "\n    .catch(e=&gt;console.error(e))" +
    "\n  &#125;" +
    "\n" +
    "\n  set(data)&#123;" +
    "\n    return this.AckOffline.set('my-app-que', data)" +
    "\n    .catch(e=&gt;console.error(e))" +
    "\n  &#125;" +
    "\n  " +
    "\n  ngOnDestroy()&#123;" +
    "\n    window.removeEventListender(this.onlineEvent)" +
    "\n  &#125;" +
    "\n&#125;</pre></absolute-overflow-x></div></div></div></div><div class=\"pad\"><div class=\"text-center bg-info pad\"><div class=\"inline-block pad border border-dotted border-grey-5x bg-stable\"><div class=\"pad-sm text-sm text-grey-2x\">After testing offline storage providers, you may want to clear the memory that was created</div><button (click)=\"clearAllOffline()\">clear all offline memory</button></div></div></div>";


/***/ }),

/***/ "RFfi":
/*!**************************!*\
  !*** ./src/AckModule.ts ***!
  \**************************/
/*! exports provided: CommonModule, AckModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AckModule", function() { return AckModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonModule", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]; });

/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./providers */ "AkTa");
/* harmony import */ var _declarations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./declarations */ "O5Bq");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes */ "yco1");
var AckModule_1;







const declarations = [..._declarations__WEBPACK_IMPORTED_MODULE_4__["declarations"], ..._pipes__WEBPACK_IMPORTED_MODULE_5__["declarations"]];
let AckModule = AckModule_1 = class AckModule {
    static forRoot() {
        return {
            ngModule: AckModule_1, providers: _providers__WEBPACK_IMPORTED_MODULE_3__["providers"],
        };
    }
};
AckModule = AckModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        declarations, providers: _providers__WEBPACK_IMPORTED_MODULE_3__["providers"],
        exports: declarations
    })
], AckModule);



/***/ }),

/***/ "S2n4":
/*!**************************************************!*\
  !*** ./src/components/AckCloseIcon.component.ts ***!
  \**************************************************/
/*! exports provided: AckCloseIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AckCloseIcon", function() { return AckCloseIcon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


const template = '<div style="display:inline-block;cursor:pointer;border:3px solid white;border-radius:50%;background-color:#666;color:white;text-align:center;font-family:Arial">' +
    '<div style="font-weight:bold;line-height:22px;font-size:23px;height:25px;width:25px">x</div>' +
    '</div>';
let AckCloseIcon = class AckCloseIcon {
};
AckCloseIcon = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ack-close-icon',
        template: template
    })
], AckCloseIcon);



/***/ }),

/***/ "SJOV":
/*!*******************************************************!*\
  !*** ./src/directives/ScreenHeightModel.directive.ts ***!
  \*******************************************************/
/*! exports provided: ScreenHeightModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenHeightModel", function() { return ScreenHeightModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _HtmlSizeWatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HtmlSizeWatcher */ "B6H9");



let ScreenHeightModel = class ScreenHeightModel {
    constructor(HtmlSizeService) {
        this.HtmlSizeService = HtmlSizeService;
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sub = this.HtmlSizeService.change.subscribe(() => this.changed());
        this.HtmlSizeService.checkWatchers();
    }
    ngAfterViewInit() {
        Promise.resolve().then(() => this.updateModel());
        this.delayCheck(250);
        this.delayCheck(1500);
    }
    delayCheck(num = 0) {
        setTimeout(() => this.updateModel(), num);
    }
    changed() {
        if (!this.HtmlSizeService.htmlSize || !this.hasChanged())
            return;
        this.updateModel();
    }
    hasChanged() {
        return this.model !== window.innerHeight;
    }
    updateModel() {
        this.model = window.innerHeight;
        this.modelChange.emit(this.model);
    }
};
ScreenHeightModel.ctorParameters = () => [
    { type: _HtmlSizeWatcher__WEBPACK_IMPORTED_MODULE_2__["HtmlSizeService"] }
];
ScreenHeightModel.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['screenHeightModel',] }],
    modelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['screenHeightModelChange',] }]
};
ScreenHeightModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[screenHeightModel]',
        exportAs: 'ScreenHeightModel'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_HtmlSizeWatcher__WEBPACK_IMPORTED_MODULE_2__["HtmlSizeService"]])
], ScreenHeightModel);



/***/ }),

/***/ "SXd7":
/*!*****************************************************!*\
  !*** ./src/modules/router/RouteHistory.provider.ts ***!
  \*****************************************************/
/*! exports provided: RouteHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteHistory", function() { return RouteHistory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");



let RouteHistory = class RouteHistory {
    constructor(Router) {
        this.Router = Router;
        this.routeHistory = [];
        this.maxHistory = 10;
        this.historyIndex = 0;
        this.subs = [];
        this.monitor();
    }
    monitor() {
        this.subs.push(this.Router.events.subscribe(event => {
            if (event.constructor === _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.addRouteToHistory();
            }
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    addRouteToHistory() {
        const priorPage = this.historyIndex + 1;
        const nextPage = this.historyIndex - 1;
        const matchesBack = this.routeHistory.length >= priorPage && this.Router.url === this.routeHistory[priorPage];
        const matchesNext = this.routeHistory.length >= nextPage && this.Router.url === this.routeHistory[nextPage];
        const matchesCurrent = this.Router.url === this.routeHistory[this.historyIndex];
        if (matchesNext) {
            --this.historyIndex;
        }
        if (matchesBack) {
            ++this.historyIndex;
        }
        if (matchesNext || matchesCurrent || matchesBack) {
            this.applyNav();
            return;
        }
        while (this.routeHistory.length > this.maxHistory) {
            this.routeHistory.pop();
        }
        this.routeHistory.splice(this.historyIndex, 0, this.Router.url);
        this.applyNav();
    }
    applyNav() {
        const posAvail = this.historyIndex < this.routeHistory.length - 1;
        if (posAvail) {
            this.back = this.routeHistory[this.historyIndex + 1];
        }
        else if (this.routeHistory.length) {
            const newBack = this.routeHistory[this.routeHistory.length - 1].split("/");
            newBack.pop();
            this.back = newBack.join("/");
            ++this.historyIndex;
        }
        else {
            delete this.back;
        }
        if (this.historyIndex > 0) {
            this.forward = this.routeHistory[this.historyIndex - 1];
        }
        else {
            delete this.forward;
        }
    }
    goBack() {
        if (this.historyIndex === this.routeHistory.length - 1)
            return;
        const rh = this.routeHistory[this.historyIndex + 1];
        this.Router.navigate([rh]);
    }
    goForward() {
        if (this.historyIndex === 0)
            return;
        const rh = this.routeHistory[this.historyIndex - 1];
        this.Router.navigate([rh]);
    }
};
RouteHistory.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RouteHistory = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], RouteHistory);



/***/ }),

/***/ "SfXv":
/*!*****************************************************!*\
  !*** ./src/components/AckFixedElement.component.ts ***!
  \*****************************************************/
/*! exports provided: AckFixedElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AckFixedElement", function() { return AckFixedElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _providers_AckApp_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/AckApp.provider */ "6x/B");



let AckFixedElement = class AckFixedElement {
    constructor(AckApp) {
        this.AckApp = AckApp;
        this.AckApp.fixedElms.push(this);
    }
    ngOnDestroy() {
        for (let x = this.AckApp.fixedElms.length - 1; x >= 0; --x) {
            const iClass = this.AckApp.fixedElms[x];
            if (iClass === this) {
                this.AckApp.fixedElms.splice(x, 1);
                break;
            }
        }
    }
};
AckFixedElement.ctorParameters = () => [
    { type: _providers_AckApp_provider__WEBPACK_IMPORTED_MODULE_2__["AckApp"] }
];
AckFixedElement.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['content',] }]
};
AckFixedElement = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ack-fixed-element',
        template: '<ng-template #content><ng-content></ng-content></ng-template>'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_providers_AckApp_provider__WEBPACK_IMPORTED_MODULE_2__["AckApp"]])
], AckFixedElement);



/***/ }),

/***/ "T/m2":
/*!*****************************************************!*\
  !*** ./src/components/ScrollPastFixed.component.ts ***!
  \*****************************************************/
/*! exports provided: ScrollPastFixed, getDistanceFromTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollPastFixed", function() { return ScrollPastFixed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDistanceFromTop", function() { return getDistanceFromTop; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _templates_scroll_past_fixed_pug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/scroll-past-fixed.pug */ "B5gt");



let ScrollPastFixed = class ScrollPastFixed {
    constructor(ElementRef) {
        this.ElementRef = ElementRef;
    }
    getReadElement() {
        const children = this.ElementRef.nativeElement.children;
        return children[children.length - 2];
    }
    init() {
        this.onScroll = () => this.check();
        window.addEventListener("scroll", this.onScroll);
        this.onScroll();
    }
    ngAfterViewInit() {
        Promise.resolve().then(() => this.init());
    }
    check() {
        const scrollPos = window['pageYOffset'];
        if (this.placeholder && this.placeholder <= scrollPos) {
            return;
        }
        const elm = this.getReadElement();
        const offsetTop = this.placeholder || getDistanceFromTop(elm);
        if (offsetTop <= scrollPos) {
            this.currentPosition = 'fixed';
            this.placeholder = offsetTop;
            this.fillHeight = elm.offsetHeight;
        }
        else {
            delete this.fillHeight;
            delete this.placeholder;
            delete this.currentPosition;
        }
    }
};
ScrollPastFixed.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
ScrollPastFixed.propDecorators = {
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['template',] }]
};
ScrollPastFixed = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'scroll-past-fixed',
        template: _templates_scroll_past_fixed_pug__WEBPACK_IMPORTED_MODULE_2__["string"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ScrollPastFixed);

function getDistanceFromTop(element) {
    let yPos = 0;
    while (element) {
        yPos += (element.offsetTop);
        element = element.offsetParent;
    }
    return yPos;
}


/***/ }),

/***/ "T5m/":
/*!***********************************!*\
  !*** ./modules/offline/AckApi.ts ***!
  \***********************************/
/*! exports provided: TimeOutError, AckApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeOutError", function() { return TimeOutError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AckApi", function() { return AckApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _AckCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AckCache */ "VfWh");
/* harmony import */ var _AckQue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AckQue */ "Aqkq");





class TimeOutError {
    constructor(message) {
        Error["captureStackTrace"](this, this.constructor);
        this.name = this.constructor.name;
        this.status = 504;
        this.code = "gateway_timeout";
        this.message = message || "Could not connect to server or server did not respond in a timely manner. Please check internet connection and then try again.";
    }
}
let AckApi = class AckApi {
    constructor(HttpClient) {
        this.HttpClient = HttpClient;
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.Request = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.AuthError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ApiError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.AckCache = new _AckCache__WEBPACK_IMPORTED_MODULE_3__["AckCache"]();
        this.AckQue = new _AckQue__WEBPACK_IMPORTED_MODULE_4__["AckQue"]();
        this.config = {
            baseUrl: '',
            $http: {
                method: "GET",
                headers: {},
                timeout: 6500
            }
        };
        this.paramConfig();
    }
    paramConfig() { }
    registerHandler(name, handler, options) {
        options = options || { maxTry: 50 };
        handler = handler || (config => this.request(config));
        this.AckQue.registerHandler(name, handler);
        return this;
    }
    getQue(name) {
        return this.AckQue.get(name);
    }
    getCache(name) {
        return this.AckCache.get(name);
    }
    processQue(name) {
        this.AckQue.paramHandler(name, config => this._fetch(config));
        return this.AckQue.processQue(name);
    }
    clearQue(name) {
        return this.AckQue.clear(name);
    }
    clearCache(name) {
        return this.AckCache.clear(name);
    }
    request(config) {
        const defaults = Object.assign({}, this.config.$http);
        defaults.headers = Object.assign({}, this.config.$http.headers);
        const request = Object.assign(defaults, (config || {}));
        request.url = (this.config.baseUrl || '') + request.url;
        if (request.offlineModel) {
            return this.requestOfflineModel(request);
        }
        return this._fetch(request);
    }
    getCacheByNamedRequest(request) {
        const offlineModel = request.offlineModel;
        return this.AckCache.get(offlineModel.name, offlineModel)
            .then(routes => {
            routes = routes || {};
            const cacheName = this.getStorageNameByRequest(request);
            return routes[cacheName];
        })
            .then(cache => this.processCacheGet(cache, request));
    }
    getStorageNameByRequest(request) {
        if (request.params) {
            const paramKeys = Object.keys(request.params);
            if (!paramKeys.length)
                return request.url;
            let url = request.url + (request.url.search(/\?/) >= 0 ? "&" : "?");
            paramKeys.sort().forEach(name => url += name + "=" + request.params[name] + "&");
            return url.substring(0, url.length - 1);
        }
        return request.url;
    }
    requestOfflineModel(request) {
        let offlineModel = request.offlineModel;
        if (offlineModel && offlineModel.constructor == String) {
            request.offlineModel = offlineModel = { name: request.offlineModel };
        }
        if (request.method === "GET") {
            return this.getCacheByNamedRequest(request);
        }
        this.AckQue.paramHandler(offlineModel.name, config => this._fetch(config));
        return this._fetch(request)
            .catch(e => this.postRequestFail(e, request));
    }
    processCacheGet(cache, cfg) {
        if (cache == null)
            return this._fetch(cfg);
        const offlineModel = cfg.offlineModel;
        return this.AckCache.cacheToReturn(offlineModel.name, cache, offlineModel)
            .then((rtn) => {
            const willExpire = this.AckCache.optionsKillCache(offlineModel);
            if (rtn && !willExpire) {
                console.log("AckApi fetched cache that will never expire. Set offlineModel.expires=0 or offlineModel.maxAge=0 to avoid this message", rtn);
            }
            if (rtn != null) {
                return rtn;
            }
            return this._fetch(cfg);
        });
    }
    postRequestFail(e, request) {
        const saveWorthy = e.status == 0 || e.status == -1 || e.status == 503;
        if (!saveWorthy)
            return Promise.reject(e);
        request.sendFailMeta = request.sendFailMeta || {};
        request.sendFailMeta.offlineId = Date.now();
        request.sendFailMeta.lastAttempt = new Date();
        request.sendFailMeta.attempts = request.sendFailMeta.attempts == null ? 1 : ++request.sendFailMeta.attempts;
        request.sendFailMeta.maxTry = request.sendFailMeta.maxTry || 50;
        const tryAgainLater = request.sendFailMeta.maxTry && request.sendFailMeta.attempts <= request.sendFailMeta.maxTry;
        e.sendFailMeta = request.sendFailMeta;
        if (tryAgainLater) {
            const requestSave = Object.assign({}, request);
            delete requestSave.offlineModel;
            const offlineModel = request.offlineModel;
            return this.AckQue.set(offlineModel.name, requestSave)
                .then(() => Promise.reject(e));
        }
        return Promise.reject(e);
    }
    _fetch(cfg) {
        upgradeConfig(cfg);
        const cfgPlus = Object.assign({}, cfg);
        if (cfg.params) {
            cfgPlus.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
                fromObject: cfg.params
            });
        }
        if (cfg.headers) {
            cfgPlus.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](cfg.headers);
        }
        const request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"](cfg.method, cfg.url, cfg.body, cfgPlus);
        const promise = (resolve, reject) => {
            let resolved = false;
            this.Request.emit(request);
            const req = this.HttpClient.request(request)
                .subscribe(event => {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response) {
                    resolved = true;
                    resolve(event);
                }
            }, err => {
                resolved = true;
                reject(err);
            });
            if (cfg.timeout) {
                setTimeout(() => {
                    if (resolved)
                        return;
                    req.unsubscribe();
                    const timeoutError = new TimeOutError();
                    Object.assign(timeoutError, request);
                    timeoutError.timeout = cfg.timeout;
                    reject(timeoutError);
                }, cfg.timeout);
            }
        };
        return new Promise(promise)
            .then((response) => this.processFetchByConfig(response, cfg))
            .catch(e => this.httpFailByConfig(e, cfg));
    }
    processFetchByConfig(response, request) {
        this.response.emit(response);
        const data = response.body || response["_body"];
        const isJson = data && response.headers.get("Content-Type") == "application/json";
        if (isJson && !response["data"]) {
            try {
                response["data"] = JSON.parse(data);
            }
            catch (e) { }
        }
        response["data"] = data;
        const isDataMode = !request.promise || request.promise == "data";
        const output = isDataMode ? data : response;
        const isCacheReponse = request.method === "GET" && request.offlineModel;
        if (isCacheReponse) {
            return this.requestResponseToCache(request, output)
                .then(() => output);
        }
        return Promise.resolve(output);
    }
    httpFailByConfig(e, cfg) {
        const isReduceData = cfg.catch == null || cfg.catch == "data";
        const data = e["data"];
        const isCatchData = isReduceData && data && data.error;
        if (isCatchData) {
            const newError = new Error();
            Object.assign(newError, e["data"].error);
            e = newError;
        }
        e["method"] = e["method"] || cfg.method;
        if (e["status"] == 401) {
            this.AuthError.emit(e);
        }
        else {
            this.ApiError.emit(e);
        }
        return Promise.reject(e);
    }
    requestResponseToCache(request, output) {
        var _a;
        const cachename = ((_a = request.offlineModel) === null || _a === void 0 ? void 0 : _a.name) || request.offlineModel;
        return this.AckCache.get(cachename)
            .then(routes => {
            routes = routes || {};
            const cacheName = this.getStorageNameByRequest(request);
            routes[cacheName] = { cache: output };
            this.AckCache.dataOptionsCache(routes[request.url], request.offlineModel, output);
            return routes;
        })
            .then(routes => this.AckCache.set(cachename, routes));
    }
    get(path, config) {
        const cfg = Object.assign({}, config);
        cfg.method = "GET";
        cfg.url = path;
        return this.request(cfg);
    }
    post(path, data, config) {
        const cfg = Object.assign({}, config);
        cfg.method = "POST";
        cfg.body = data;
        cfg.url = path;
        return this.request(cfg);
    }
    delete(path, config) {
        const cfg = Object.assign({}, config);
        cfg.method = "DELETE";
        cfg.url = path;
        return this.request(cfg);
    }
    put(path, data, config) {
        const cfg = Object.assign({}, config);
        cfg.method = "PUT";
        cfg.body = data;
        cfg.url = path;
        return this.request(cfg);
    }
};
AckApi.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AckApi = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AckApi);

function upgradeConfig(cfg) {
    cfg.method = cfg.method || "GET";
    cfg.reportProgress = cfg.reportProgress || false;
    if (cfg.params) {
        for (let key in cfg.params) {
            if (cfg.params[key] == null) {
                cfg.params[key] = "";
            }
        }
    }
    return cfg;
}


/***/ }),

/***/ "TTIt":
/*!**********************************!*\
  !*** ./modules/offline/index.ts ***!
  \**********************************/
/*! exports provided: AckOffline, AckCache, AckQue, AckApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AckOffline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AckOffline */ "/ibX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AckOffline", function() { return _AckOffline__WEBPACK_IMPORTED_MODULE_0__["AckOffline"]; });

/* harmony import */ var _AckCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AckCache */ "VfWh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AckCache", function() { return _AckCache__WEBPACK_IMPORTED_MODULE_1__["AckCache"]; });

/* harmony import */ var _AckQue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AckQue */ "Aqkq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AckQue", function() { return _AckQue__WEBPACK_IMPORTED_MODULE_2__["AckQue"]; });

/* harmony import */ var _AckApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AckApi */ "T5m/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AckApi", function() { return _AckApi__WEBPACK_IMPORTED_MODULE_3__["AckApi"]; });







/***/ }),

/***/ "UV2o":
/*!******************************************!*\
  !*** ./src/directives/FxOn.directive.ts ***!
  \******************************************/
/*! exports provided: FxOn, hasClass, addClass, removeClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FxOn", function() { return FxOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let FxOn = class FxOn {
    constructor(element) {
        this.element = element;
        this.fxThen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fxTypes = [
            "bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello",
            "bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp"
        ];
    }
    ngOnInit() {
        Promise.resolve().then(() => this.update());
    }
    update() {
        if (this.fxOn) {
            this.onTrue();
        }
        else {
            this.onFalse();
        }
    }
    ngOnChanges(changes) {
        if (changes.fxOn && changes.fxOn.currentValue != null && changes.fxOn.currentValue != changes.fxOn.previousValue) {
            this.update();
        }
        if (changes.fxClass && changes.fxClass.currentValue != changes.fxClass.previousValue) {
            if (this.fxOn) {
                removeClass(this.element.nativeElement, changes.fxClass.previousValue);
                this.applyType();
            }
            else {
                this.removeType();
            }
        }
    }
    onFalse() {
        this.removeType();
        if (this.timeout) {
            clearTimeout(this.timeout);
            delete this.timeout;
        }
    }
    removeType() {
        const elm = this.element.nativeElement;
        removeClass(elm, this.fxClass);
        if (this.inlineTreated) {
            elm.style.display = 'inline';
            this.inlineTreated = false;
        }
    }
    applyType() {
        const elm = this.element.nativeElement;
        if (elm.style && elm.style.display === 'inline' || getElementDefaultDisplay(elm) === 'inline') {
            this.inlineTreated = true;
            elm.style.display = 'inline-block';
        }
        addClass(elm, this.fxClass);
    }
    onTrue() {
        this.applyType();
        if (this.fxForMs) {
            this.timeout = setTimeout(() => {
                this.onFalse();
                this.fxThen.emit();
            }, this.fxForMs);
        }
    }
};
FxOn.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
FxOn.propDecorators = {
    fxOn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fxClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fxForMs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fxThen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
FxOn = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[fxOn]",
        exportAs: "FxOn"
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], FxOn);

function hasClass(el, className) {
    const names = className.split(" ");
    for (let x = names.length - 1; x >= 0; --x) {
        if (el.classList) {
            if (el.classList.contains(names[x])) {
                continue;
            }
        }
        else {
            if (el.className.match(new RegExp('(\\s|^)' + names[x] + '(\\s|$)'))) {
                continue;
            }
        }
        return false;
    }
    return true;
}
function addClass(el, className) {
    className.split(' ').forEach(className => {
        if (el.classList) {
            el.classList.add(className);
        }
        else if (!hasClass(el, className)) {
            el.className += " " + className;
        }
    });
}
function removeClass(el, className) {
    className.split(' ').forEach(className => {
        if (el.classList) {
            el.classList.remove(className);
        }
        else if (hasClass(el, className)) {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    });
}
function getElementDefaultDisplay(tag) {
    var cStyle, t = tag, gcs = "getComputedStyle" in window;
    cStyle = (gcs ? window.getComputedStyle(t, "") : t.currentStyle).display;
    return cStyle;
}


/***/ }),

/***/ "VfWh":
/*!*************************************!*\
  !*** ./modules/offline/AckCache.ts ***!
  \*************************************/
/*! exports provided: AckCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AckCache", function() { return AckCache; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _AckOffline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AckOffline */ "/ibX");



let AckCache = class AckCache extends _AckOffline__WEBPACK_IMPORTED_MODULE_2__["AckOffline"] {
    constructor() {
        super(...arguments);
        this.prefix = "offline-cache";
    }
    validate(data, config) {
        const exists = data !== null && typeof data.cache !== "undefined";
        return exists && !this.hasExpired(data._timestamp, data.expires || config.expires);
    }
    optionsKillCache(options) {
        return options.maxAge == null && options.expires == null ? false : true;
    }
    hasMaxAged(stamp, maxAge) {
        const diff = Date.now() - maxAge;
        const expired = stamp <= diff;
        return maxAge && expired ? true : false;
    }
    hasExpired(_stamp, expires) {
        const expired = Date.now() >= new Date(expires).getTime();
        return expires && expired ? true : false;
    }
    param(name, options = {}) {
        options.param = options.param || [];
        return this.getCache(name, options);
    }
    paramCache(name, options) {
        return this.param(name, options);
    }
    paramSave(name, options) {
        return this.paramCache(name, options)
            .then(items => this.setCache(name, items));
    }
    paramSaveCache(name, options) {
        return this.paramSave(name, options);
    }
    cacheToReturn(name, data, options) {
        if (data.cache == null && data._timestamp == null) {
            return Promise.resolve(data);
        }
        const expires = data.expires || options.expires;
        const maxAge = data.maxAge || options.maxAge;
        if (options.allowExpired || (!expires && !maxAge)) {
            return Promise.resolve(data.cache);
        }
        const expired = expires && this.hasExpired(data._timestamp, expires);
        const isMaxed = maxAge && this.hasMaxAged(data._timestamp, maxAge);
        if (expired || isMaxed) {
            return this.selfDestructData(name, data)
                .then(() => {
                if (options.param)
                    return Promise.resolve(options.param);
            });
        }
        return Promise.resolve(data['cache']);
    }
    selfDestructData(name, data) {
        if (this.dataDestructReady(data))
            return this.clear(name);
        return Promise.resolve();
    }
    dataDestructReady(data) {
        const isMemMaxed = data.maxAge && this.hasMaxAged(data['_timestamp'], data['maxAge']);
        const isMemExpired = data.expires && this.hasExpired(data['_timestamp'], data['expires']);
        return isMemMaxed || isMemExpired;
    }
    get(name, options = {}) {
        return super.get(name)
            .then(data => {
            if (data) {
                return this.cacheToReturn(name, data, options);
            }
            if (options.param)
                return options.param;
            return;
        });
    }
    getCache(name, options) {
        return this.get(name, options);
    }
    dataOptionsCache(allCache, options = {}, cache) {
        const newOptions = {};
        newOptions._timestamp = Date.now();
        if (options.expires)
            newOptions.expires = options.expires;
        if (options.maxAge)
            newOptions.maxAge = options.maxAge;
        allCache = allCache && allCache.constructor != String ? allCache : {};
        Object.assign(allCache, newOptions);
        if (cache && cache.constructor == String) {
            allCache.cache = cache;
        }
        else if (allCache.cache && allCache.cache.constructor != String) {
            Object.assign(allCache.cache, cache);
        }
        else {
            allCache.cache = cache;
        }
        return allCache;
    }
    set(name, cache, options = {}) {
        options.name = options.name || name;
        return super.get(name)
            .then(allCache => this.dataOptionsCache(allCache, options, cache))
            .then(data => super.set(name, data));
    }
    setCache(name, cache, options) {
        return this.set(name, cache, options);
    }
};
AckCache = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AckCache);



/***/ }),

/***/ "WH1a":
/*!****************************************************!*\
  !*** ./src/components/templates/error-well.pug.ts ***!
  \****************************************************/
/*! exports provided: string */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
const string = "<div *ngIf=\"error!=null &amp;&amp; errorClose!=error\" [@fadeInOutUp]=\"1\"><div *ngIf=\"error &amp;&amp; closable\" (click)=\"close.emit();errorClose=error\" style=\"position:relative\"><div style=\"position:absolute;bottom:-17px;right:-16px;border:1px solid #DDD;border-radius:50%;z-index:20\"><ack-close-icon></ack-close-icon></div></div><div class=\"pad-xxs\" *ngIf=\"error!=null &amp;&amp; errorClose!=error\" [@fadeInOutUp]=\"1\" [ngClass]=\"cssClasses\"><div class=\"flex-valign-center flex-wrap child-margin-xxs\"><div class=\"flex-1\"><div class=\"strong text-3x margin-0\" [class.cursor-pointer]=\"allowDetails\" (click)=\"!allowDetails || moreDetails=!moreDetails\">{{ getErrorMessage(error) }}</div></div><a class=\"text-blue underline text-xs\" *ngIf=\"allowDetails &amp;&amp; error &amp;&amp; (error|typeof)!='string'\" (click)=\"moreDetails=!moreDetails\">details</a></div><ng-container *ngTemplateOutlet=\"titleFooter\"></ng-container><div *ngIf=\"moreDetails\" [@fadeInOutUp]=\"1\"><absolute-overflow-x class=\"text-sm\"><pre class=\"margin-0 pad-xs\">{{ error|json }}</pre></absolute-overflow-x></div></div></div>";


/***/ }),

/***/ "WcXA":
/*!*****************************************************!*\
  !*** ./example/src/ComponentsExamples.component.ts ***!
  \*****************************************************/
/*! exports provided: ComponentsExamples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsExamples", function() { return ComponentsExamples; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "cY6P");
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-page-scroll-core */ "Mpij");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ack_angular_fx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ack-angular-fx */ "cRtS");
/* harmony import */ var _arrayOfObjects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./arrayOfObjects */ "Hib5");
/* harmony import */ var _templates_components_examples_pug__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/components-examples.pug */ "oGl4");







let ComponentsExamples = class ComponentsExamples {
    constructor(PageScrollService) {
        this.PageScrollService = PageScrollService;
        this.fxClass = "bounce";
        this.initArray = [{ value: 0 }, { value: 1 }, { value: 2 }];
        this.views = {};
        this.screenScrollCount = 0;
        this.contentArray = [];
        this.modalBackgroundColor = "rgba(255,255,255,0.95)";
        this.ackOptionArray = [];
        this.ackOptionArrayModal = [{ key: "b" }];
        this.pageAt = 2;
        this.arrayOfObjects = _arrayOfObjects__WEBPACK_IMPORTED_MODULE_5__["array"];
        this.selectedArray = [
            _arrayOfObjects__WEBPACK_IMPORTED_MODULE_5__["array"][2],
            _arrayOfObjects__WEBPACK_IMPORTED_MODULE_5__["array"][4],
            _arrayOfObjects__WEBPACK_IMPORTED_MODULE_5__["array"][6],
            _arrayOfObjects__WEBPACK_IMPORTED_MODULE_5__["array"][8]
        ];
        this.absoluteOverflowXActive = true;
        this.contentModel = 'This is some demo content being displayed';
    }
    causeError() {
        this.error = new Error("An intended error was caused @ " + Object(_functions__WEBPACK_IMPORTED_MODULE_1__["getServerTime"])());
    }
    scrollToModuleImport() {
        setTimeout(() => {
            this.PageScrollService.scroll({ document: document, scrollTarget: "#Import AckModule" });
        }, 600);
    }
    setModalWrapStyle(v) {
        try {
            this.modalWrapStyle = JSON.parse(v);
        }
        catch (e) { }
    }
};
ComponentsExamples.ctorParameters = () => [
    { type: ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_2__["PageScrollService"] }
];
ComponentsExamples = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "components-examples",
        template: _templates_components_examples_pug__WEBPACK_IMPORTED_MODULE_6__["string"],
        animations: ack_angular_fx__WEBPACK_IMPORTED_MODULE_4__["animations"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_2__["PageScrollService"]])
], ComponentsExamples);



/***/ }),

/***/ "Ys4p":
/*!*******************************************************!*\
  !*** ./src/modules/router/RouteReporter.directive.ts ***!
  \*******************************************************/
/*! exports provided: RouteReporter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteReporter", function() { return RouteReporter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _RouteWatchReporter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RouteWatchReporter */ "o6mJ");





let RouteReporter = class RouteReporter {
    constructor(Router, RouteWatchReporter, ActivatedRoute) {
        this.Router = Router;
        this.RouteWatchReporter = RouteWatchReporter;
        this.ActivatedRoute = ActivatedRoute;
        this.stateChanger = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.beforeChanger = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.activatedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.paramsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.queryChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.routeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.parentRouteChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.parentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.parentDataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.$document = document;
        this.apply();
    }
    ngOnInit() {
        this.docCallbacks = this.RouteWatchReporter.getDocumentCallbacks();
        this.RouteWatchReporter.router.events.subscribe(event => {
            if (event.constructor === _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.beforeChanger.emit(this.RouteWatchReporter);
                this.apply();
                Promise.resolve().then(() => this.emit());
            }
        });
        if (this.ActivatedRoute) {
            this.ActivatedRoute.data.subscribe(data => this.dataChange.emit(this.data = data));
        }
        this.RouteWatchReporter.watchDocByCallbacks(this.$document, this.docCallbacks);
        this.apply();
        Promise.resolve().then(() => {
            this.emit();
            this.querySub = this.RouteWatchReporter
                .activatedRoute.queryParams
                .subscribe(query => this.queryChange.emit(query));
        });
        if (this.onLoad) {
            this.onLoad({
                state: this.RouteWatchReporter.current,
                params: this.RouteWatchReporter.current.params,
                current: this.RouteWatchReporter.current
            });
        }
    }
    ngOnDestroy() {
        this.RouteWatchReporter.unwatchDocByCallbacks(this.$document, this.docCallbacks);
        if (this.querySub) {
            this.querySub.unsubscribe();
        }
    }
    apply() {
        const current = Object(_RouteWatchReporter__WEBPACK_IMPORTED_MODULE_3__["getCurrentByActive"])(this.ActivatedRoute);
        this.route = current.config;
        this.current = current;
        this.state = current;
        this.activated = current.ActivatedRoute;
        this.params = current.params || {};
        this.data = current.config.data || {};
        const parent = current.parent;
        if (parent) {
            const config = parent.config;
            const ar = parent.ActivatedRoute;
            this.parentRoute = config;
            this.parent = ar;
            this.parentData = config.data;
        }
    }
    emit() {
        this.stateChanger.emit(this.RouteWatchReporter);
        const current = this.RouteWatchReporter.getCurrent();
        this.routeChange.emit(current.config);
        this.stateChange.emit(current);
        this.activatedChange.emit(current.ActivatedRoute);
        this.paramsChange.emit(current.params);
        this.dataChange.emit(current.config.data);
        const parent = current.parent;
        if (parent) {
            const config = parent.config;
            const ar = parent.ActivatedRoute;
            this.parentRouteChange.emit(config);
            this.parentChange.emit(ar);
            this.parentDataChange.emit(config.data);
        }
    }
    goBackTo(name, params) {
        this.RouteWatchReporter.goBackTo(name, params);
    }
    tryBack(name, params) {
        this.RouteWatchReporter.tryBack(name, params);
    }
};
RouteReporter.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _RouteWatchReporter__WEBPACK_IMPORTED_MODULE_3__["RouteWatchReporter"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
RouteReporter.propDecorators = {
    onLoad: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    stateChanger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ["onChange",] }],
    beforeChanger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ["beforeChange",] }],
    activated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    activatedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    params: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    paramsChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    dataChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    query: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    queryChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    route: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    routeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    parentRoute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    parentRouteChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    parent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    parentChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    parentData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    parentDataChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    current: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    stateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
RouteReporter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "route-reporter",
        exportAs: "RouteReporter"
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _RouteWatchReporter__WEBPACK_IMPORTED_MODULE_3__["RouteWatchReporter"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], RouteReporter);



/***/ }),

/***/ "bfac":
/*!***************************************************!*\
  !*** ./example/src/ProviderExamples.component.ts ***!
  \***************************************************/
/*! exports provided: ProviderExamples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderExamples", function() { return ProviderExamples; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-page-scroll-core */ "Mpij");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src */ "/7QA");
/* harmony import */ var _modules_offline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/offline */ "TTIt");
/* harmony import */ var ack_angular_fx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ack-angular-fx */ "cRtS");
/* harmony import */ var _templates_provider_examples_pug__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/provider-examples.pug */ "QjCW");







const pathing = window.location.pathname.split("/").slice(0, -1).join("/");
const defaultUrl = window.location.origin + pathing + "/test.json";
let ProviderExamples = class ProviderExamples {
    constructor(Log, ErrorLog, PageScrollService, AckOffline, AckCache, AckQue, AckApi, Prompts) {
        this.Log = Log;
        this.ErrorLog = ErrorLog;
        this.PageScrollService = PageScrollService;
        this.AckOffline = AckOffline;
        this.AckCache = AckCache;
        this.AckQue = AckQue;
        this.AckApi = AckApi;
        this.Prompts = Prompts;
        this.views = {};
        this.queArray = [];
        this.processQueResults = [];
        this.httpQueArray = [];
        this.httpCache = {};
        this.cacheSeconds = 20;
        this.httpHeaderConfigArray = [];
        this.httpConfig = {
            offlineModel: {
                name: "ackHttpTests", maxAge: 15000
            },
            promise: "response",
            method: "GET",
            url: defaultUrl,
            headers: {
                "Content-Type": "text/plain"
            }
        };
        this.ErrorLog.monitorWindow();
        this.AckQue.registerHandler("ackNgQueTest", item => this.processQueItem(item));
    }
    ngOnInit() {
        window.addEventListener("online", () => {
            if (navigator.onLine) {
                this.backOnlineAt = getServerTime();
                this.processQue();
                this.processHttpQue();
            }
        });
        this.loadHttpHeaderConfigArray();
        this.reloadData();
    }
    clearHttpQue() {
        return this.AckApi.clearQue("ackHttpTests").then(() => this.readHttpQueArray(false));
    }
    clearHttpCache() {
        return this.AckApi.clearCache("ackHttpTests").then(() => this.readHttpCache());
    }
    sendHttp() {
        delete this.httpError;
        delete this.httpResponse;
        this.viewHttpSub = false;
        let promise = Promise.resolve();
        if (!navigator.onLine && this.httpConfig.method != "GET") {
            this.httpError = new Error("Offline mode detected. Request qued");
            promise = this.AckApi.AckQue.set("ackHttpTests", this.httpConfig);
        }
        else {
            promise = this.AckApi.request(this.httpConfig)
                .then(res => {
                this.httpResponse = res;
                delete this.httpError;
            })
                .catch(e => {
                this.httpError = e;
                delete this.httpResponse;
            });
        }
        return promise
            .then(() => this.readHttpQueArray(false))
            .then(() => this.readHttpCache());
    }
    readHttpHeaderConfigArray() {
        for (let x = 0; x < this.httpHeaderConfigArray.length; ++x) {
            let headDef = this.httpHeaderConfigArray[x];
            this.httpConfig.headers[headDef.name] = headDef.value;
        }
    }
    readHttpQueArray(process) {
        return this.AckApi.getQue("ackHttpTests")
            .then(que => {
            this.httpQueArray = que;
            const doProcess = process || process == null && que.length && navigator.onLine;
            if (doProcess) {
                return this.processHttpQue();
            }
        });
    }
    readHttpCache() {
        return this.AckApi.getCache("ackHttpTests")
            .then(cache => this.httpCache = cache);
    }
    processHttpQue() {
        return this.AckApi.processQue("ackHttpTests")
            .then(() => this.readHttpQueArray(false));
    }
    loadHttpHeaderConfigArray() {
        const rtn = [];
        for (let name in this.httpConfig.headers) {
            if (!name.length)
                continue;
            rtn.push({ name, value: this.httpConfig.headers[name] });
        }
        this.httpHeaderConfigArray.length = 0;
        this.httpHeaderConfigArray.push.apply(this.httpHeaderConfigArray, rtn);
    }
    causeErrorLog() {
        this.ErrorLog.add("Error " + this.ErrorLog.log.length + " of " + this.ErrorLog.maxLog + " fired @ " + getServerTime());
    }
    causeLog() {
        this.Log.add("Log " + this.Log.log.length + " of " + this.Log.maxLog + " fired @ " + getServerTime());
    }
    scrollToModuleImport() {
        setTimeout(() => {
            this.PageScrollService.scroll({ document: document, scrollTarget: "#Import AckModule" });
        }, 600);
    }
    reloadData() {
        return Promise.all([
            this.readOffline(),
            this.readQue(),
            this.readCache(),
            this.readHttpQueArray(),
            this.readHttpCache()
        ]);
    }
    readOffline() {
        this.AckOffline.get("ack-angular")
            .then(data => this.offlineStorage = data);
    }
    readQue() {
        return this.AckQue.getQue("ackNgQueTest")
            .then(que => this.queArray = que);
    }
    readCache() {
        return this.AckCache.get("ackNgCacheTest")
            .then(cache => this.cacheStorage = cache)
            .then(() => this.readCacheObject())
            .catch(e => {
            if (e.code && e.code == 401) {
                return;
            }
            return Promise.reject(e);
        });
    }
    readCacheObject() {
        return this.AckOffline.get("ackNgCacheTest")
            .then(v => {
            this.cache = v;
            if (v) {
                this.cache.seconds = (v["expires"] - v["_timestamp"]) / 1000;
            }
        });
    }
    clearAllOffline() {
        this.AckOffline.clearAll()
            .then(() => this.reloadData());
    }
    setCache(value, seconds) {
        const expires = new Date(Date.now() + (seconds * 1000)).getTime();
        return this.AckCache.set("ackNgCacheTest", value, { expires: expires })
            .then(() => this.readCache());
    }
    clearCache() {
        this.AckCache.clear("ackNgCacheTest")
            .then(() => this.readCache());
    }
    clearOffline() {
        this.offlineStorage = "";
        this.AckOffline.clear("ack-angular")
            .then(() => this.readOffline());
    }
    setOffline(string) {
        this.offlineStorage = string;
        this.AckOffline.set("ack-angular", string);
    }
    clearQue() {
        return this.AckQue.clear("ackNgQueTest")
            .then(() => this.readQue());
    }
    que(itemData) {
        this.queStorage = "";
        return this.AckQue.que("ackNgQueTest", itemData)
            .then(() => this.readQue());
    }
    dequeByIndex(index) {
        return this.AckQue.dequeByIndex("ackNgQueTest", index)
            .then(() => this.readQue());
    }
    processQueItem(itemData) {
        return getServerTime() + " : ack-touched-data : " + itemData;
    }
    processQuedByIndex(index) {
        return this.AckQue.processQuedByIndex("ackNgQueTest", index)
            .then(result => this.processQueResults.push(result))
            .then(() => this.readQue());
    }
    processQue() {
        return this.AckQue.processQue("ackNgQueTest")
            .then(results => this.processQueResults.push.apply(this.processQueResults, results))
            .then(() => this.readQue())
            .catch(e => this.error = e);
    }
    runConfirm() {
        return this.Prompts.confirm("This is a confirm example")
            .subscribe(result => console.log("result of confirm:" + result));
    }
    runAlert() {
        return this.Prompts.alert("This is an alert example")
            .subscribe(() => console.log("alert prompt closed"));
    }
};
ProviderExamples.ctorParameters = () => [
    { type: _src__WEBPACK_IMPORTED_MODULE_3__["Log"] },
    { type: _src__WEBPACK_IMPORTED_MODULE_3__["ErrorLog"] },
    { type: ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_2__["PageScrollService"] },
    { type: _modules_offline__WEBPACK_IMPORTED_MODULE_4__["AckOffline"] },
    { type: _modules_offline__WEBPACK_IMPORTED_MODULE_4__["AckCache"] },
    { type: _modules_offline__WEBPACK_IMPORTED_MODULE_4__["AckQue"] },
    { type: _modules_offline__WEBPACK_IMPORTED_MODULE_4__["AckApi"] },
    { type: _src__WEBPACK_IMPORTED_MODULE_3__["Prompts"] }
];
ProviderExamples = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "provider-examples",
        template: _templates_provider_examples_pug__WEBPACK_IMPORTED_MODULE_6__["string"],
        animations: ack_angular_fx__WEBPACK_IMPORTED_MODULE_5__["animations"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_src__WEBPACK_IMPORTED_MODULE_3__["Log"],
        _src__WEBPACK_IMPORTED_MODULE_3__["ErrorLog"],
        ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_2__["PageScrollService"],
        _modules_offline__WEBPACK_IMPORTED_MODULE_4__["AckOffline"],
        _modules_offline__WEBPACK_IMPORTED_MODULE_4__["AckCache"],
        _modules_offline__WEBPACK_IMPORTED_MODULE_4__["AckQue"],
        _modules_offline__WEBPACK_IMPORTED_MODULE_4__["AckApi"],
        _src__WEBPACK_IMPORTED_MODULE_3__["Prompts"]])
], ProviderExamples);

function getServerTime(d) {
    d = d || new Date();
    var h = d.getHours(), t = "AM", m = d.getMinutes();
    m = m < 10 ? "0" + m : m;
    h = h >= 12 ? (t = "PM", h - 12 || 12) : h == 0 ? 12 : h;
    return ("0" + h).slice(-2) + ":" + m + ":" + ("0" + d.getSeconds()).slice(-2) + "." + d.getMilliseconds() + " " + t;
}


/***/ }),

/***/ "cY6P":
/*!**********************************!*\
  !*** ./example/src/functions.ts ***!
  \**********************************/
/*! exports provided: getServerTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerTime", function() { return getServerTime; });
function getServerTime(d) {
    d = d || new Date();
    var h = d.getHours(), t = 'AM', m = d.getMinutes();
    m = m < 10 ? '0' + m : m;
    h = h >= 12 ? (t = 'PM', h - 12 || 12) : h == 0 ? 12 : h;
    return ('0' + h).slice(-2) + ':' + m + ':' + ('0' + d.getSeconds()).slice(-2) + '.' + d.getMilliseconds() + ' ' + t;
}


/***/ }),

/***/ "dLpJ":
/*!****************************************************!*\
  !*** ./src/directives/InnerHtmlModel.directive.ts ***!
  \****************************************************/
/*! exports provided: InnerHtmlModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerHtmlModel", function() { return InnerHtmlModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let InnerHtmlModel = class InnerHtmlModel {
    constructor(element) {
        this.element = element;
        this.innerHtmlModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.observer = new MutationObserver(() => this.setModel());
        const config = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };
        this.observer.observe(this.element.nativeElement, config);
    }
    ngOnChanges() {
        Promise.resolve().then(() => this.setModel());
    }
    setModel() {
        this.innerHtmlModel = this.element.nativeElement.innerHTML;
        this.innerHtmlModelChange.emit(this.innerHtmlModel);
    }
    ngOnDestroy() {
        this.observer.disconnect();
    }
};
InnerHtmlModel.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
InnerHtmlModel.propDecorators = {
    innerHtmlModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    innerHtmlModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
InnerHtmlModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[innerHtmlModel]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], InnerHtmlModel);



/***/ }),

/***/ "e7tw":
/*!******************************************************!*\
  !*** ./src/components/templates/ack-sections.pug.ts ***!
  \******************************************************/
/*! exports provided: string */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
const string = "<ng-container [(htmlHeightModel)]=\"htmlHeightModel\"></ng-container><ng-container *ngIf=\"SectionProvider.headerTemplates.length\"><div *ngIf=\"mode==='calculate'\" style=\"position:fixed;top:0;width:100%\" [style.z-index]=\"zIndex\" [(elementHeightModel)]=\"headerHeight\" [elementSizeModelWatch]=\"SectionProvider.headerTemplates.length\"><ng-template *ngTemplateOutlet=\"headerWrap || headerContent;context:{outlet:headerContent}\"></ng-template></div><ng-template #headerContent=\"\"><ng-container *ngFor=\"let item of SectionProvider.headerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></ng-template><div *ngIf=\"!mode || mode==='clone'\" style=\"position:fixed;top:0;width:100%\" [style.z-index]=\"zIndex\"><ng-template *ngTemplateOutlet=\"headerContent\"></ng-template></div></ng-container><ng-template *ngTemplateOutlet=\"table || defaultTableTag;context:{outlet:tableRows}\"></ng-template><ng-template #defaultTableTag=\"\"><table style=\"height:100%;width:100%;border-collapse: collapse;\" cellPadding=\"0\" cellSpacing=\"0\" border=\"0\"><ng-template *ngTemplateOutlet=\"tableRows\"></ng-template></table></ng-template><ng-template #tableRows=\"\"><tr *ngIf=\"SectionProvider.headerTemplates.length\"><td colspan=\"3\" [style.height.px]=\"headerHeight\" style=\"visibility:hidden\"><ng-container *ngIf=\"!mode || mode==='clone'\"><ng-container *ngFor=\"let item of SectionProvider.headerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></ng-container></td></tr><tr><td *ngIf=\"SectionProvider.leftBodyTemplates.length\" [style.min-width.px]=\"leftBodyWidth\" valign=\"top\" align=\"right\"><ng-template #defaultLeftBodyWrap=\"\"><div style=\"overflow:auto;height:100%;\"><ng-template *ngTemplateOutlet=\"leftBodyContent\"></ng-template></div></ng-template><ng-template #leftBodyContent=\"\"><ng-container *ngFor=\"let item of SectionProvider.leftBodyTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></ng-template><div *ngIf=\"mode==='calculate'\" style=\"position:fixed;\" [style.z-index]=\"zIndex - 1\" [style.height.px]=\"htmlHeightModel - (SectionProvider.headerTemplates.length ? headerHeight : 0) - (SectionProvider.footerTemplates.length ? footerHeight : 0)\" [(elementWidthModel)]=\"leftBodyWidth\" [elementSizeModelWatch]=\"SectionProvider.leftBodyTemplates.length\"><ng-template *ngTemplateOutlet=\"leftBodyWrap || defaultLeftBodyWrap;context:{outlet:leftBodyContent}\"></ng-template></div><div *ngIf=\"!mode || mode==='clone'\" style=\"position:fixed;top:0;\" [style.z-index]=\"zIndex - 1\"><ng-template *ngTemplateOutlet=\"leftBodyWrap || defaultLeftBodyWrap;context:{outlet:leftBodyContent}\"></ng-template></div><ng-container *ngIf=\"!mode || mode==='clone'\"><ng-template *ngTemplateOutlet=\"leftBodyWrap || defaultLeftBodyWrap;context:{outlet:leftBodyContent}\"></ng-template></ng-container></td><ng-container *ngTemplateOutlet=\"bodyCell || defaultBodyCell;context:{outlet:body}\"></ng-container><ng-template #defaultBodyCell=\"\"><td style=\"height:100%\" valign=\"top\"><ng-template *ngTemplateOutlet=\"body\"></ng-template></td></ng-template><ng-template #body=\"\"><ng-content></ng-content></ng-template><td *ngIf=\"SectionProvider.rightBodyTemplates.length\" [style.min-width.px]=\"rightBodyWidth\" valign=\"top\" align=\"left\"><ng-template #defaultRightBodyWrap=\"\"><div style=\"overflow:auto;height:100%;\"><ng-template *ngTemplateOutlet=\"rightBodyContent\"></ng-template></div></ng-template><ng-template #rightBodyContent=\"\"><ng-container *ngFor=\"let item of SectionProvider.rightBodyTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></ng-template><div *ngIf=\"mode==='calculate'\" style=\"position:fixed;\" [style.z-index]=\"zIndex - 1\" [style.height.px]=\"htmlHeightModel - (SectionProvider.headerTemplates.length ? headerHeight : 0) - (SectionProvider.footerTemplates.length ? footerHeight : 0)\" [(elementWidthModel)]=\"rightBodyWidth\" [elementSizeModelWatch]=\"SectionProvider.rightBodyTemplates.length\"><ng-template *ngTemplateOutlet=\"rightBodyWrap || defaultRightBodyWrap;context:{outlet:rightBodyContent}\"></ng-template></div><div *ngIf=\"!mode || mode==='clone'\" style=\"position:fixed;top:0;overflow:auto;\" [style.z-index]=\"zIndex - 1\"><ng-template *ngTemplateOutlet=\"rightBodyWrap || defaultRightBodyWrap;context:{outlet:rightBodyContent}\"></ng-template></div><ng-container *ngIf=\"!mode || mode==='clone'\"><ng-template *ngTemplateOutlet=\"rightBodyWrap || defaultRightBodyWrap;context:{outlet:rightBodyContent}\"></ng-template></ng-container></td></tr><tr *ngIf=\"SectionProvider.footerTemplates.length\"><td colspan=\"3\" [style.height.px]=\"footerHeight\"><div *ngIf=\"!mode || mode==='clone'\" style=\"visibility:hidden\"><ng-container *ngFor=\"let item of SectionProvider.footerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></div></td></tr></ng-template><ng-container *ngIf=\"SectionProvider.footerTemplates.length\"><div *ngIf=\"mode==='calculate'\" style=\"position:fixed;bottom:0;width:100%\" [style.z-index]=\"zIndex\" [(elementHeightModel)]=\"footerHeight\" [elementSizeModelWatch]=\"SectionProvider.footerTemplates.length\"><ng-container *ngFor=\"let item of SectionProvider.footerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></div><div *ngIf=\"!mode || mode==='clone'\" style=\"position:fixed;bottom:0;width:100%\" [style.z-index]=\"zIndex\"><ng-container *ngFor=\"let item of SectionProvider.footerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></div></ng-container>";


/***/ }),

/***/ "eNHZ":
/*!******************************************!*\
  !*** ./src/directives/Init.directive.ts ***!
  \******************************************/
/*! exports provided: InitDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitDirective", function() { return InitDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let InitDirective = class InitDirective {
    constructor() {
        this.init = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.init.emit();
    }
};
InitDirective.propDecorators = {
    init: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
InitDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[init]'
    })
], InitDirective);



/***/ }),

/***/ "eTfi":
/*!**************************************************!*\
  !*** ./src/directives/ReplaceModel.directive.ts ***!
  \**************************************************/
/*! exports provided: ReplaceModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceModel", function() { return ReplaceModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let ReplaceModel = class ReplaceModel {
    constructor() {
        this.replaceModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        const isString = changes.replaceModel && this.replaceModel && this.replaceModel.constructor === String;
        if (isString) {
            Promise.resolve().then(() => this.run());
        }
    }
    run() {
        const rx = new RegExp(this.replaceExpression, 'gi');
        const oldModel = this.replaceModel;
        const newModel = this.replaceModel.replace(rx, '');
        if (oldModel === newModel) {
            return;
        }
        this.replaceModel = newModel;
        this.replaceModelChange.emit(this.replaceModel);
    }
};
ReplaceModel.propDecorators = {
    replaceModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    replaceModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    replaceExpression: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
ReplaceModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[replaceModel]'
    })
], ReplaceModel);



/***/ }),

/***/ "fA6y":
/*!*********************************************************!*\
  !*** ./src/components/AckSectionTemplates.component.ts ***!
  \*********************************************************/
/*! exports provided: AckSectionTemplates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AckSectionTemplates", function() { return AckSectionTemplates; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _providers_AckSections_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/AckSections.provider */ "+JZX");



let AckSectionTemplates = class AckSectionTemplates {
    constructor(SectionProvider) {
        this.SectionProvider = SectionProvider;
    }
    ngAfterViewInit() {
        Promise.resolve().then(() => {
            this.check();
            this.inited = true;
        });
    }
    ngOnChanges() {
        if (this.inited) {
            this.check();
        }
    }
    check() {
        if (this.pushed)
            return;
        if (this.header) {
            this.SectionProvider.headerTemplates.unshift(this.header);
        }
        if (this.footer) {
            this.SectionProvider.footerTemplates.unshift(this.footer);
        }
        if (this.leftBody) {
            this.SectionProvider.leftBodyTemplates.unshift(this.leftBody);
        }
        if (this.rightBody) {
            this.SectionProvider.rightBodyTemplates.unshift(this.rightBody);
        }
        this.pushed = true;
    }
    ngOnDestroy() {
        Promise.resolve().then(() => this.unregister());
    }
    unregister() {
        this.pushed = false;
        this.SectionProvider.unregisterHeaderTemplate(this.header);
        this.SectionProvider.unregisterFooterTemplate(this.footer);
        this.SectionProvider.unregisterTemplate(this.leftBody);
        this.SectionProvider.unregisterTemplate(this.rightBody);
    }
};
AckSectionTemplates.ctorParameters = () => [
    { type: _providers_AckSections_provider__WEBPACK_IMPORTED_MODULE_2__["SectionProvider"] }
];
AckSectionTemplates.propDecorators = {
    header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ['sectionHeader',] }],
    footer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ['sectionFooter',] }],
    leftBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ['sectionLeftBody',] }],
    rightBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ['sectionRightBody',] }]
};
AckSectionTemplates = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "ack-section-templates"
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_providers_AckSections_provider__WEBPACK_IMPORTED_MODULE_2__["SectionProvider"]])
], AckSectionTemplates);



/***/ }),

/***/ "iEvh":
/*!**********************************************************!*\
  !*** ./src/components/debug-area/DebugArea.component.ts ***!
  \**********************************************************/
/*! exports provided: DebugItem, DebugArea, declarations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugItem", function() { return DebugItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugArea", function() { return DebugArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "declarations", function() { return declarations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _debug_area_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debug-area.template */ "3DDj");



let DebugItem = class DebugItem {
    constructor() {
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
};
DebugItem.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    rowTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ["rowTitle",] }],
    save: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
DebugItem = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "debug-item"
    })
], DebugItem);

let DebugArea = class DebugArea {
    constructor() {
        this.editsMap = {};
    }
    ngAfterViewInit() {
        if (this.DebugItems.length === 1) {
            Promise.resolve().then(() => this.debugItem = this.DebugItems.first);
        }
    }
    updateDataByJsonString(item, string, debugItem) {
        try {
            const json = JSON.parse(string);
            for (let x in item)
                delete item[x];
            Object.assign(item, json);
            debugItem.save.emit(item);
        }
        catch (e) {
            console.error('invalid json string');
        }
    }
    apply(item, json, debugItem) {
        const ob = JSON.parse(json);
        Object.assign(item, ob);
        debugItem.save.emit(item);
    }
};
DebugArea.propDecorators = {
    DebugItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [DebugItem,] }]
};
DebugArea = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "debug-area",
        template: _debug_area_template__WEBPACK_IMPORTED_MODULE_2__["string"]
    })
], DebugArea);

const declarations = [
    DebugItem, DebugArea
];


/***/ }),

/***/ "iabq":
/*!*****************************************************************!*\
  !*** ./src/components/templates/ack-fixed-element-stage.pug.ts ***!
  \*****************************************************************/
/*! exports provided: string */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
const string = "<ng-container *ngFor=\"let fixedElm of AckApp.fixedElms\"><ng-container *ngTemplateOutlet=\"fixedElm.content\"></ng-container></ng-container><ng-container *ngFor=\"let prompt of AckApp.prompts.prompts;let i=index\"><ack-modal-layout zIndex=\"99\" [allowClose]=\"0\"><div style=\"text-align:left;max-width:900px;border:1px solid #DDD;border-radius:5px;margin:1em;padding:1em;background-color:white;\"><h3 *ngIf=\"prompt.title\" style=\"margin-top:0;\">{{ prompt.title }}</h3><div style=\"padding-right:1em;\">{{ prompt.message }}</div><br/><br/><div style=\"text-align:right;\"><a *ngIf=\"prompt.type=='confirm'\" (click)=\"prompt.emitter.emit(false)\" style=\"text-align:center;display:inline-block;min-width:75px;border-radius:3px;border:1px solid #AAA;padding:0 .5em;margin-right:.5em;\">Cancel</a><a (click)=\"prompt.emitter.emit(true)\" style=\"text-align:center;display:inline-block;min-width:75px;border-radius:3px;border:1px solid #AAA;padding:0 .5em;\" [ngStyle]=\"{'font-weight':prompt.type=='confirm' ? 'bold' : null}\">OK</a></div></div></ack-modal-layout></ng-container><ng-container *ngFor=\"let item of AckApp.modals\"><ng-container *ngIf=\"!item.isModelMode || item.showModel\"><ng-template [ngTemplateOutlet]=\"item.layout\"></ng-template></ng-container></ng-container>";


/***/ }),

/***/ "iooJ":
/*!*****************************************************!*\
  !*** ./src/components/AckOptionsModal.component.ts ***!
  \*****************************************************/
/*! exports provided: AckOptionsModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AckOptionsModal", function() { return AckOptionsModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _AckOptions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AckOptions.component */ "nlrQ");
/* harmony import */ var _templates_ack_options_modal_pug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/ack-options-modal.pug */ "4rJv");




let AckOptionsModal = class AckOptionsModal extends _AckOptions_component__WEBPACK_IMPORTED_MODULE_2__["AckOptions"] {
    constructor() {
        super(...arguments);
        this.allowClose = true;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.backgroundColorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showModel = true;
        this.showModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    fireModelChange(model) {
        if (!this.multiple)
            this.close.emit();
        this.modelChange.emit(model);
    }
};
AckOptionsModal.propDecorators = {
    allowClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    wrapStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    wrapCellStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    backgroundColorChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    showModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
AckOptionsModal = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ack-options-modal',
        template: _templates_ack_options_modal_pug__WEBPACK_IMPORTED_MODULE_3__["string"]
    })
], AckOptionsModal);



/***/ }),

/***/ "jXv3":
/*!**********************************!*\
  !*** ./src/providers/Prompts.ts ***!
  \**********************************/
/*! exports provided: Prompts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prompts", function() { return Prompts; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let Prompts = class Prompts {
    constructor() {
        this.prompts = [];
    }
    remove(prompt) {
        for (let x = this.prompts.length - 1; x >= 0; --x) {
            if (this.prompts[x] == prompt) {
                this.prompts.splice(x, 1);
                return;
            }
        }
    }
    issuePrompt(prompt) {
        this.prompts.push(prompt);
        prompt.emitter.subscribe(() => this.remove(prompt));
        return prompt.emitter;
    }
    alert(message, options = {}) {
        options.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        options.type = "alert";
        options.message = message;
        return this.issuePrompt(options);
    }
    confirm(message, options = {}) {
        options.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        options.type = "confirm";
        options.message = message;
        return this.issuePrompt(options);
    }
};
Prompts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], Prompts);



/***/ }),

/***/ "jaOU":
/*!**************************************************!*\
  !*** ./src/directives/VarDirective.directive.ts ***!
  \**************************************************/
/*! exports provided: VarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VarDirective", function() { return VarDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let VarDirective = class VarDirective {
    constructor() {
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        if (changes.var) {
            Promise.resolve().then(() => this.changed.emit(this.var));
        }
    }
};
VarDirective.propDecorators = {
    var: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    changed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
VarDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[var]",
        exportAs: "var"
    })
], VarDirective);



/***/ }),

/***/ "k4hH":
/*!***********************************!*\
  !*** ./src/providers/ErrorLog.ts ***!
  \***********************************/
/*! exports provided: ErrorLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorLog", function() { return ErrorLog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let ErrorLog = class ErrorLog {
    constructor() {
        this.log = [];
        this.maxLog = 30;
    }
    monitorWindow(win) {
        win = win || window;
        const callback = (evt) => this.add(evt, false);
        win.addEventListener('error', callback);
    }
    reject(err) {
        const e = this.add(err);
        return Promise.reject(e);
    }
    rejector() {
        return (err) => this.reject(err);
    }
    add(e, toConsole) {
        const ob = this.paramAudit(e, toConsole);
        this.log.unshift(ob);
        if (this.maxLog) {
            while (this.log.length > this.maxLog) {
                this.log.pop();
            }
        }
        return logObToErrorObject(ob);
    }
    paramAudit(e, toConsole) {
        if (e.constructor === String) {
            e = new Error(e);
        }
        if (toConsole == null || toConsole)
            console.error(e);
        const err = this.objectifyError(e);
        err['datetime'] = err['datetime'] || getDateTimeString();
        if (!e.message && e.status == -1) {
            e.message = "Cannot connect to server";
            e.details = e.details || "Connection to internet maybe down. Also possible CORS needs be to enabled at remote server.";
        }
        return err;
    }
    objectifyError(err) {
        const keys = Object.getOwnPropertyNames(err);
        keys.push.apply(keys, Object.keys(err));
        const recErr = {};
        keys.forEach(v => recErr[v] = err[v]);
        const knownKeys = ["stack", "message", "name", "arguments", "type"];
        knownKeys.forEach(key => {
            if (typeof err[key] != 'undefined') {
                recErr[key] = err[key];
            }
        });
        const body = err.body || err._body;
        if (body && !err.data && err.headers) {
            const contentType = err.headers.get('content-type');
            if (contentType && contentType.toLowerCase() == 'application/json') {
                try {
                    recErr.data = JSON.parse(body);
                }
                catch (e) { }
            }
        }
        return recErr;
    }
    rethrow(err) {
        const e = this.add(err);
        throw e;
    }
};
ErrorLog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorLog);

function getErrorMessage(err) {
    return err.message || err.statusText || err.name || 'Unexpected Error Occured';
}
function getResponseMessage(res) {
    if (res.data && res.data.error && res.data.error.message) {
        return res.data.error.message;
    }
    return getErrorMessage(res);
}
function logObToErrorObject(log) {
    const e = new Error(getResponseMessage(log));
    Object.keys(log).forEach(v => e[v] = log[v]);
    return e;
}
function getDateTimeString() {
    return (function (d) { return (('0' + (d.getMonth() + 1)).slice(-2) + '/' + ('0' + d.getDate()).slice(-2) + '/' + d.getFullYear()); })(new Date()) + ' ' + (function (d) { var h = d.getHours(), t = 'AM', m = d.getMinutes(); var mn = m < 10 ? '0' + m : m; h = h >= 12 ? (t = 'PM', h - 12 || 12) : h == 0 ? 12 : h; return ('0' + h).slice(-2) + ':' + ('0' + mn).slice(-2) + ' ' + t; })(new Date());
}


/***/ }),

/***/ "k57P":
/*!***************************************************!*\
  !*** ./example/src/OverviewExamples.component.ts ***!
  \***************************************************/
/*! exports provided: OverviewExamples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewExamples", function() { return OverviewExamples; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _templates_overview_examples_pug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/overview-examples.pug */ "F25f");



let OverviewExamples = class OverviewExamples {
};
OverviewExamples = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'overview-examples',
        template: _templates_overview_examples_pug__WEBPACK_IMPORTED_MODULE_2__["string"]
    })
], OverviewExamples);



/***/ }),

/***/ "kKke":
/*!******************************!*\
  !*** ./example/src/index.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js */ "m+po");
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reflect-metadata */ "mNvP");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "wAiw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.module */ "mMy2");





Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["enableProdMode"])();
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]);


/***/ }),

/***/ "kiQV":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, typings, scripts, repository, keywords, author, license, bugs, homepage, dependencies, devDependencies, ngPackage, private, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"ack-angular\",\"version\":\"2.0.9\",\"description\":\"Extra special directives, components, providers and pipes to aide in tackling everyday interface development needs in Angular2\",\"main\":\"dist/index.js\",\"typings\":\"dist/index.d.ts\",\"scripts\":{\"start\":\"ng serve example --port 4201 --open\",\"build:index\":\"pug example/src/index.pug --out example/src\",\"stats\":\"webpack-bundle-analyzer example/www/stats.json\",\"install:example\":\"npm install --prefix example\",\"test\":\"ng test --browser PhantomJS --single-run\",\"test:watch\":\"ng test\",\"build:offline\":\"ngc --project modules/offline/tsconfig.json\",\"build:dist:ng\":\"ngc --project src/tsconfig.json\",\"build:dist\":\"ng-packagr -p package.json\",\"watch:dist\":\"watch \\\"npm-run-all build:dist\\\" src/ --ignoreDirectoryPattern=/pugs/\",\"build:assets\":\"npm-run-all build:assets:src build:assets:example compile:templates\",\"build:assets:src\":\"ack-pug-bundler src/components/pugs/ src/components/templates/ --oneToOne --outType ts\",\"build:assets:example\":\"ack-pug-bundler example/src/pugs/ example/src/templates/ --oneToOne --outType ts\",\"watch:assets\":\"npm-run-all --parallel \\\"build:assets:src -- --watch\\\" \\\"build:assets:example -- --watch\\\" \\\"compile:templates -- --watch\\\"\",\"compile:templates\":\"ack-pug-bundler ./src/ ./src/ --outFileExt template.ts --outType ts --oneToOne\",\"watch\":\"npm-run-all --parallel build:index watch:dist watch:assets watch:js\",\"watch:js\":\"ng serve example --port 4201 --open\",\"build:js\":\"ng build example --stats-json\",\"build:universal\":\"npm-run-all build:index build:assets\",\"build\":\"npm-run-all build:universal build:dist compile:dist:package copy:scss build:js\",\"copy:scss\":\"ack-path copy ./src/ack-angular.scss ./dist/ack-angular.scss\",\"compile:dist:package\":\"node scripts/update-dist-package.js\",\"save\":\"git add . && git commit -m \\\"update\\\" && git push\",\"deploy\":\"npm-run-all build deploy:gh-pages deploy:npm save\",\"deploy:npm\":\"cp -R ./dist/. ../master && cd ../master && git add . && git commit -m \\\"update\\\" && git push && npm publish\",\"deploy:gh-pages\":\"cp -R ./example/www/. ../gh-pages && cd ../gh-pages && git add . && git commit -m \\\"update\\\" && git push\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/AckerApple/ack-angular.git\"},\"keywords\":[\"ng\",\"Angular\",\"directives\",\"components\",\"pipes\",\"providers\"],\"author\":\"Acker Dawn Apple\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/AckerApple/ack-angular/issues\"},\"homepage\":\"https://github.com/AckerApple/ack-angular#readme\",\"dependencies\":{\"ack-angular-fx\":\"^4.1.0\",\"ack-css-boot\":\"^2.0.4\",\"ack-x\":\"^2.1.1\",\"animate.css\":\"^4.1.1\",\"csshake\":\"^1.5.3\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.1102.8\",\"@angular-devkit/build-ng-packagr\":\"^0.1002.0\",\"@angular/animations\":\"^11.2.9\",\"@angular/cli\":\"^12.0.0\",\"@angular/common\":\"^11.2.9\",\"@angular/compiler\":\"^11.2.9\",\"@angular/compiler-cli\":\"^11.2.9\",\"@angular/core\":\"^12.0.0\",\"@angular/forms\":\"^11.2.9\",\"@angular/platform-browser\":\"^11.2.9\",\"@angular/platform-browser-dynamic\":\"^11.2.9\",\"@angular/router\":\"^11.2.9\",\"@types/jasmine\":\"^3.6.9\",\"ack-path\":\"^1.8.0\",\"ack-pug-bundler\":\"^1.4.8\",\"classlist-polyfill\":\"^1.2.0\",\"jasmine\":\"^3.7.0\",\"karma\":\"^6.3.2\",\"karma-chrome-launcher\":\"^3.1.0\",\"karma-coverage-istanbul-reporter\":\"^3.0.3\",\"karma-jasmine\":\"^4.0.1\",\"karma-jasmine-html-reporter\":\"^1.5.4\",\"karma-phantomjs-launcher\":\"^1.0.4\",\"localforage\":\"^1.9.0\",\"ng-packagr\":\"^11.2.4\",\"ngx-page-scroll\":\"^7.0.4\",\"ngx-page-scroll-core\":\"^7.0.4\",\"npm-run-all\":\"^4.1.5\",\"phantomjs-prebuilt\":\"^2.1.16\",\"pug\":\"^3.0.2\",\"pug-attrs\":\"^3.0.0\",\"pug-cli\":\"^1.0.0-alpha6\",\"reflect-metadata\":\"^0.1.13\",\"rxjs\":\"^6.6.7\",\"ts-helpers\":\"^1.1.2\",\"ts-node\":\"^9.1.1\",\"typescript\":\"4.0.5\",\"webpack-bundle-analyzer\":\"^4.4.1\",\"zone.js\":\"~0.11.4\"},\"ngPackage\":{\"lib\":{\"entryFile\":\"src/index.ts\"},\"allowedNonPeerDependencies\":[\"ack-angular-fx\",\"ack-css-boot\",\"ack-x\",\"animate.css\",\"csshake\"]},\"private\":true}");

/***/ }),

/***/ "lIVJ":
/*!************************************************************!*\
  !*** ./src/components/templates/reader-header-body.pug.ts ***!
  \************************************************************/
/*! exports provided: string */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
const string = "<div style=\"text-align:center;height:100%\"><div style=\"display:inline-block;width:100%;height:100%;max-width:1000px\"><div style=\"width:100%;height:100%;\"><table cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%;height:100%;\"><tr *ngIf=\"readerHeader\"><td><ng-template *ngTemplateOutlet=\"readerHeader\"></ng-template></td></tr><tr><td style=\"height:100%\"><ng-content></ng-content></td></tr></table></div></div></div>";


/***/ }),

/***/ "lfps":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/ack-modal.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- create a display hook for ack-fixed-element-stage to hook onto (must be first ng-template) -->\n<ng-template #placeholder=\"\">\n  <ack-modal-layout\n    [zIndex]           = \"zIndex\"\n    (close)           = \"close.emit($event)\"\n    [isModelMode]     = \"isModelMode==null ? showModelChange.observers.length : isModelMode\"\n    [showModel]       = \"showModel\"\n    (showModelChange) = \"showModelChange.emit(showModel=$event)\"\n    [backgroundColor] = \"backgroundColor\"\n    [wrapStyle]       = \"wrapStyle\"\n    [wrapCellStyle]   = \"wrapCellStyle\"\n    [allowClose]      = \"allowClose\"\n  >\n    <ng-template [ngTemplateOutlet]=\"body\"></ng-template>\n    <ng-content *ngIf=\"!body\"></ng-content>\n  </ack-modal-layout>\n</ng-template>\n\n<!-- if no ack-fixed-element-stage tag present, then render in-place -->\n<ng-template *ngIf = \"!AckApp.fixedElementStage || inline\" [ngTemplateOutlet]=\"layout\"></ng-template>\n");

/***/ }),

/***/ "mMy2":
/*!***********************************!*\
  !*** ./example/src/app.module.ts ***!
  \***********************************/
/*! exports provided: declarations, imports, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "declarations", function() { return declarations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imports", function() { return imports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "cY6P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ack_angular_fx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ack-angular-fx */ "cRtS");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _src_modules_router_AckRouterModule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/modules/router/AckRouterModule */ "3P8O");
/* harmony import */ var _modules_offline_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/offline/module */ "Lu4X");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src */ "/7QA");
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-page-scroll-core */ "Mpij");
/* harmony import */ var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-page-scroll */ "IHjr");
/* harmony import */ var _ProviderExamples_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProviderExamples.component */ "bfac");
/* harmony import */ var _AckAppStage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AckAppStage.component */ "r773");
/* harmony import */ var _states_object__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./states.object */ "t3Vn");
/* harmony import */ var _AnimationExamples_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AnimationExamples.component */ "s9RN");
/* harmony import */ var _JjsWoz_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./JjsWoz.component */ "tAfC");
/* harmony import */ var _OverviewExamples_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./OverviewExamples.component */ "k57P");
/* harmony import */ var _ComponentsExamples_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ComponentsExamples.component */ "WcXA");
/* harmony import */ var _PipesExamples_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./PipesExamples.component */ "3+aZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "IheW");

window["strapTime"] = Date.now();


















const declarations = [
    _AckAppStage_component__WEBPACK_IMPORTED_MODULE_12__["AckAppStage"],
    _AnimationExamples_component__WEBPACK_IMPORTED_MODULE_14__["AnimationExamples"],
    _OverviewExamples_component__WEBPACK_IMPORTED_MODULE_16__["OverviewExamples"],
    _ComponentsExamples_component__WEBPACK_IMPORTED_MODULE_17__["ComponentsExamples"],
    _PipesExamples_component__WEBPACK_IMPORTED_MODULE_18__["PipesExamples"],
    _ProviderExamples_component__WEBPACK_IMPORTED_MODULE_11__["ProviderExamples"],
    _JjsWoz_component__WEBPACK_IMPORTED_MODULE_15__["JjsWoz"],
    ..._states_object__WEBPACK_IMPORTED_MODULE_13__["declarations"]
];


const imports = [
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
    _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
    _states_object__WEBPACK_IMPORTED_MODULE_13__["routing"],
    ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_9__["NgxPageScrollCoreModule"].forRoot({}),
    ngx_page_scroll__WEBPACK_IMPORTED_MODULE_10__["NgxPageScrollModule"],
    _src_modules_router_AckRouterModule__WEBPACK_IMPORTED_MODULE_6__["AckRouterModule"].forRoot(),
    _src__WEBPACK_IMPORTED_MODULE_8__["AckModule"].forRoot(),
    _modules_offline_module__WEBPACK_IMPORTED_MODULE_7__["AckOfflineModule"].forRoot(),
    ack_angular_fx__WEBPACK_IMPORTED_MODULE_3__["AckFxModule"]
];
console.log("declarations", declarations);
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: imports,
        declarations: declarations,
        providers: [],
        bootstrap: [_AckAppStage_component__WEBPACK_IMPORTED_MODULE_12__["AckAppStage"]]
    })
], AppModule);

console.log("Ng Define Time", Date.now() - window["strapTime"] + "ms", "@", Object(_functions__WEBPACK_IMPORTED_MODULE_1__["getServerTime"])());


/***/ }),

/***/ "mo0d":
/*!******************************!*\
  !*** ./src/providers/Log.ts ***!
  \******************************/
/*! exports provided: Log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return Log; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let Log = class Log {
    constructor() {
        this.log = [];
        this.maxLog = 80;
    }
    add(e, toConsole) {
        const ob = this.paramAudit(e, toConsole);
        this.log.unshift(ob);
        if (this.maxLog) {
            while (this.log.length > this.maxLog) {
                this.log.pop();
            }
        }
        return e;
    }
    paramAudit(e, toConsole) {
        switch (e.constructor) {
            case String:
            case Boolean:
            case Number: {
                e = { message: e };
            }
        }
        if (toConsole == null || toConsole)
            console.log(e);
        e['datetime'] = e['datetime'] || getDateTimeString();
        return e;
    }
};
Log = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], Log);

function getDateTimeString() {
    return (function (d) { return (('0' + (d.getMonth() + 1)).slice(-2) + '/' + ('0' + d.getDate()).slice(-2) + '/' + d.getFullYear()); })(new Date()) + ' ' + (function (d) { var h = d.getHours(), t = 'AM', m = d.getMinutes(); var mn = m < 10 ? '0' + m : m; h = h >= 12 ? (t = 'PM', h - 12 || 12) : h == 0 ? 12 : h; return ('0' + h).slice(-2) + ':' + ('0' + mn).slice(-2) + ' ' + t; })(new Date());
}


/***/ }),

/***/ "my9p":
/*!*************************************************************!*\
  !*** ./src/components/templates/absolute-overflow-x.pug.ts ***!
  \*************************************************************/
/*! exports provided: string */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
const string = "<div [(elementHeightModel)]=\"elementHeightModel\" [ngClass]=\"wrapClass\" [class.no-scroll-bars]=\"active &amp;&amp; !scrollBars &amp;&amp; scrollBars!=null\" [ngStyle]=\"active ? {overflow:overflow,position:'absolute',width:'100%'} : {}\"><ng-content></ng-content></div><div *ngIf=\"elementHeightModel &amp;&amp; active\" style=\"visibility:hidden;overflow:hidden;width:100%\" [style.height.px]=\"elementHeightModel\">&nbsp;</div>";


/***/ }),

/***/ "nlrQ":
/*!************************************************!*\
  !*** ./src/components/AckOptions.component.ts ***!
  \************************************************/
/*! exports provided: AckOptions, getParentByTagName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AckOptions", function() { return AckOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParentByTagName", function() { return getParentByTagName; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _pipes_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipes.class */ "zgg7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _TemplateReader_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TemplateReader.class */ "AkYC");
/* harmony import */ var _templates_ack_options_pug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/ack-options.pug */ "Gcs9");





let AckOptions = class AckOptions {
    constructor(ElementRef) {
        this.ElementRef = ElementRef;
        this.array = [];
        this.stylize = true;
        this.TemplateReader = new _TemplateReader_class__WEBPACK_IMPORTED_MODULE_3__["TemplateReader"]({
            lastTemplateName: "templateRef",
            types: {
                option: "templateRef",
                selected: "selected"
            }
        });
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ngAfterViewInit() {
        Promise.resolve().then(() => {
            if (this.inputTemplateRefs) {
                this.TemplateReader.readTemplates(this.inputTemplateRefs);
            }
            if (this.templateRefs) {
                this.TemplateReader.readTemplates(this.templateRefs);
            }
        });
    }
    selectItem(item) {
        const value = this.getArrayItemValue(item);
        const isArrayMode = this.multiple || this.modelAsArray;
        if (isArrayMode) {
            const modelIndex = this.modelIndex(item);
            if (modelIndex >= 0) {
                this.model.splice(modelIndex, 1);
            }
            else {
                this.model.push(this.getArrayItemModel(item));
            }
            if (this.max) {
                while (this.model.length > this.max) {
                    this.model.shift();
                }
            }
        }
        else {
            if (this.toggleable && this.model == value) {
                delete this.model;
            }
            else {
                this.model = this.getArrayItemModel(item);
            }
        }
        this.emitChange();
    }
    emitChange() {
        this.modelChange.emit(this.model);
        const form = getParentByTagName(this.ElementRef.nativeElement, 'form');
        if (form)
            this.fireFormEvents(form);
    }
    fireFormEvents(form) {
        let event = document.createEvent("HTMLEvents");
        event.initEvent("input", true, true);
        form.dispatchEvent(event);
        event = document.createEvent("HTMLEvents");
        event.initEvent("change", true, true);
        form.dispatchEvent(event);
    }
    getArrayItemModel(item) {
        if (this.arrayToModelKey != null) {
            if (this.arrayToModelKey == '') {
                return item;
            }
            const split = this.arrayToModelKey.split('.');
            var scope = item;
            while (split.length) {
                if (scope == null)
                    return null;
                let key = split.shift();
                scope = scope[key];
            }
            return scope;
        }
        return this.getArrayItemValue(item);
    }
    getArrayItemValue(item) {
        if (!this.arrayKey)
            return item;
        let items = this.arrayKey.split('.');
        var scope = item;
        while (items.length) {
            if (scope == null)
                return null;
            let firstItem = items.shift();
            scope = scope[firstItem];
        }
        return scope;
    }
    getModelValueToArrayItem(modelValue) {
        if (!this.modelKey)
            return modelValue;
        let items = this.modelKey.split('.');
        var scope = modelValue;
        while (items.length) {
            if (scope == null)
                return null;
            let firstItem = items.shift();
            scope = scope[firstItem];
        }
        return scope;
    }
    modelIndex(item) {
        this.model = Object(_pipes_class__WEBPACK_IMPORTED_MODULE_1__["array"])(this.model);
        for (let i = this.model.length - 1; i >= 0; --i) {
            let value = this.getArrayItemValue(item);
            let modelValue = this.getModelValueToArrayItem(this.model[i]);
            if (value == modelValue)
                return i;
        }
        return -1;
    }
    isItemSelected(item) {
        return this.modelIndex(item) >= 0;
    }
    getItemClass(item) {
        const selected = this.isItemSelected(item);
        let string = '';
        if (this.stylize) {
            string += 'cursor-pointer pad-h pad-v-sm border-grey-6x border-bottom ';
        }
        if (this.stylize && selected) {
            string += 'bg-warning ';
        }
        if (this.stylize && !selected) {
            string += 'hover-bg-grey-5x ';
        }
        return string;
    }
};
AckOptions.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
AckOptions.propDecorators = {
    array: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    stylize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    modelAsArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    toggleable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    templateRefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"],] }],
    inputTemplateRefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    modelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    arrayKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    modelKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    arrayToModelKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
AckOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "ack-options",
        template: _templates_ack_options_pug__WEBPACK_IMPORTED_MODULE_4__["string"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
], AckOptions);

function getParentByTagName(node, tagname) {
    let parent;
    if (node === null || tagname === '')
        return;
    parent = node.parentNode;
    tagname = tagname.toUpperCase();
    while (parent && parent.tagName !== "HTML") {
        if (parent.tagName === tagname) {
            return parent;
        }
        parent = parent.parentNode;
    }
    return;
}


/***/ }),

/***/ "nuEm":
/*!**************************************************!*\
  !*** ./src/directives/ContentModel.directive.ts ***!
  \**************************************************/
/*! exports provided: ContentModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentModel", function() { return ContentModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let ContentModel = class ContentModel {
    constructor(elm) {
        this.elm = elm;
        this.changeDone = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.contentModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.enter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.recentInputs = 0;
        this.elm.nativeElement.setAttribute('contenteditable', true);
    }
    ngOnDestroy() {
        this.elm.nativeElement.removeAttribute('contenteditable');
    }
    ngOnChanges() {
        const nElm = this.elm.nativeElement;
        if (this.recentInputs) {
            --this.recentInputs;
            return;
        }
        const usePlaceholder = this.evalPlaceholder();
        if (!usePlaceholder) {
            nElm.textContent = this.contentModel;
        }
    }
    evalPlaceholder(placeholder) {
        const nElm = this.elm.nativeElement;
        const usePlaceholder = this.contentModel == null || this.contentModel === '';
        if (usePlaceholder) {
            nElm.textContent = placeholder == null ? this.placeholder : placeholder;
            return true;
        }
        return false;
    }
    shouldCancelEvent(event) {
        const key = event.which || event.keyCode;
        return this.enterEnds && key === 13;
    }
    onKeyDown(event) {
        this.checkPlaceholder();
        const cancel = this.shouldCancelEvent(event);
        if (cancel) {
            this.onBlur();
            cancelEvent(event);
            this.enter.emit(this.contentModel);
            return;
        }
        if (this.maxLength) {
            const newValue = this.elm.nativeElement.textContent;
            const maxLength = Number(this.maxLength);
            const maxed = this.maxLength && newValue.length > maxLength;
            const key = event.which || event.keyCode;
            if (maxed) {
                const isDelete = [8, 46].indexOf(key) >= 0;
                if (!isDelete) {
                    cancelEvent(event);
                    return;
                }
            }
        }
    }
    onInput() {
        const newValue = this.elm.nativeElement.textContent;
        const maxLength = Number(this.maxLength);
        if (this.maxLength && newValue.length > maxLength) {
            return;
        }
        ++this.recentInputs;
        this.updateValue();
        this.inputChange.emit(this.contentModel);
    }
    updateValue() {
        this.contentModel = this.elm.nativeElement.textContent;
        this.contentModelChange.emit(this.contentModel);
    }
    onFocus() {
        this.lastValue = this.contentModel;
        this.evalPlaceholder('');
    }
    checkPlaceholder() {
        if (this.placeholder && this.elm.nativeElement.textContent === this.placeholder) {
            this.elm.nativeElement.textContent = '';
        }
    }
    onBlur() {
        if (this.lastValue !== this.elm.nativeElement.textContent) {
            this.lastValue = this.elm.nativeElement.textContent;
            this.updateValue();
            this.changeDone.emit(this.contentModel);
        }
        this.evalPlaceholder();
    }
};
ContentModel.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
ContentModel.propDecorators = {
    changeDone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    contentModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    contentModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    maxLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    enterEnds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    enter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['keydown', ['$event'],] }],
    onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['input',] }],
    onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['focus',] }],
    onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['blur',] }]
};
ContentModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[contentModel]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ContentModel);

function cancelEvent(event) {
    event.preventDefault();
    event.stopPropagation();
}


/***/ }),

/***/ "o6mJ":
/*!**************************************************!*\
  !*** ./src/modules/router/RouteWatchReporter.ts ***!
  \**************************************************/
/*! exports provided: RouteWatchReporter, getCurrentByActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteWatchReporter", function() { return RouteWatchReporter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentByActive", function() { return getCurrentByActive; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let RouteWatchReporter = class RouteWatchReporter {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.current = {};
        this.$history = [];
        this.historyPos = 0;
        this.isBackMode = false;
        this.isOsAction = false;
        this.isNextBackMode = false;
        this.isNextBackHistory = false;
        this.activatedRoute = activatedRoute;
        router.events.subscribe(event => {
            if (event.constructor == _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                const current = this.getCurrent();
                this.recordStateChange(current.config, current.params);
            }
        });
        this.current = this.getCurrent();
    }
    $window() {
        return window;
    }
    getCurrent() {
        return getCurrentByActive(this.activatedRoute);
    }
    getCurrentConfig() {
        let target = this.activatedRoute;
        while (target.firstChild)
            target = target.firstChild;
        return (target.routeConfig || target["config"] || target);
    }
    getCurrentParams() {
        let target = this.activatedRoute;
        while (target.firstChild)
            target = target.firstChild;
        return target.snapshot.params;
    }
    isTrapHistory(toState, toParams) {
        return this.isBackHistory(toState, toParams) && this.isForwardHistory(toState, toParams);
    }
    isBackHistory(toState, toParams) {
        const $history = this.$history;
        const isEven = $history.length > this.historyPos + 1;
        const isNameMatch = isEven && toState && toState.name == $history[this.historyPos + 1].name;
        return isNameMatch && this.isParamsMatch(toParams, $history[this.historyPos + 1].params);
    }
    isForwardHistory(toState, toParams) {
        const $history = this.$history;
        const isEven = !this.isNextBackMode && this.historyPos && $history.length > this.historyPos;
        const isNameMatch = isEven && toState && toState.name == $history[this.historyPos - 1].name;
        return isNameMatch && this.isParamsMatch(toParams, $history[this.historyPos - 1].params);
    }
    isParamsMatch(toParams, otherParams) {
        if (!toParams || !otherParams) {
            return false;
        }
        for (let x in toParams) {
            if (toParams[x] != otherParams[x]) {
                return false;
            }
        }
        return true;
    }
    recordStateChange(toState, toParams) {
        this.current = { params: toParams, config: toState };
        let isForward = this.isForwardHistory(toState, toParams);
        let isBackHistory = this.isNextBackHistory || this.isBackHistory(toState, toParams);
        if (this.isOsAction && this.isTrapHistory(toState, toParams)) {
            if (this.isBackMode) {
                isForward = false;
            }
            else {
                isBackHistory = false;
            }
        }
        else {
            this.isBackMode = this.isNextBackMode || (this.isOsAction && isBackHistory);
        }
        const $history = this.$history;
        if (!toState)
            return;
        if (isForward) {
            --this.historyPos;
        }
        else if (this.isBackMode) {
            ++this.historyPos;
        }
        else {
            this.historyPos = 0;
            const hist = { name: toState.name, params: toParams };
            if (!Object.keys(toParams).length) {
                delete hist.params;
            }
            $history.unshift(hist);
        }
        this.isNextBackHistory = false;
    }
    goBackTo(name, params) {
        this.isNextBackMode = true;
        this.isNextBackHistory = true;
        this.$state().go(name, params);
    }
    tryBack(name, params) {
        if (this.$history.length) {
            this.isNextBackMode = true;
            this.isNextBackHistory = true;
            this.$window().history.back();
        }
        else {
            this.goBackTo(name, params);
        }
    }
    watchDocument($document) {
        this.watchDocByCallbacks($document, this.getDocumentCallbacks());
    }
    getDocumentCallbacks() {
        const isBackButton = () => {
            this.isOsAction = true;
        };
        const isNotBackButton = () => {
            this.isOsAction = false;
        };
        return {
            isBackButton: isBackButton,
            isNotBackButton: isNotBackButton
        };
    }
    watchDocByCallbacks($document, callbacks) {
        $document.addEventListener('mouseout', callbacks.isBackButton);
        $document.addEventListener('mousedown', callbacks.isNotBackButton);
    }
    unwatchDocByCallbacks($document, callbacks) {
        $document.removeEventListener('mouseout', callbacks.isBackButton);
        $document.removeEventListener('mouseover', callbacks.isNotBackButton);
        $document.removeEventListener('mousedown', callbacks.isNotBackButton);
    }
};
RouteWatchReporter.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
];
RouteWatchReporter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
], RouteWatchReporter);

function getCurrentByActive(ActivatedRoute) {
    let parent = ActivatedRoute;
    let target = ActivatedRoute;
    while (target.firstChild) {
        parent = target;
        target = target.firstChild;
    }
    const snapshot = target.snapshot || {};
    const parentSnap = parent.snapshot || {};
    return {
        ActivatedRoute: target,
        config: (target.routeConfig || target["config"] || target),
        params: snapshot.params,
        parent: {
            ActivatedRoute: parent,
            config: (parent.routeConfig || target["config"] || parent),
            params: parentSnap.params
        }
    };
}


/***/ }),

/***/ "oGl4":
/*!**********************************************************!*\
  !*** ./example/src/templates/components-examples.pug.ts ***!
  \**********************************************************/
/*! exports provided: string */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
const string = "<h2 class=\"margin-top-0\">Components</h2><div class=\"margin-xxs\"><p class=\"margin-bottom-0\">Import Example</p><div class=\"text-warning text-xs\">The following import code, is NOT needed if you used the AckModule import <a class=\"text-calm\" href=\"#/overview\" (click)=\"scrollToModuleImport()\">seen here</a></div><pre class=\"code-sample\" ngNonBindable=\"ngNonBindable\">import &#123; declarations as ackDecs &#125; from \"ack-angular/components\"" +
    "\nimport &#123; NgModule &#125; from '@angular/core';" +
    "\n" +
    "\n@NgModule(&#123;" +
    "\n  declarations:ackDecs" +
    "\n&#125;)" +
    "\n</pre></div><br/><h4 class=\"margin-bottom-0\">Table of Contents</h4><ul><li><a href=\"#Tags\" pageScroll=\"pageScroll\">Tags</a></li><li><a href=\"#ExpressionBinds\" pageScroll=\"pageScroll\">Expression Binds</a></li><li><a href=\"#OneWayBinds\" pageScroll=\"pageScroll\">One Way Binds</a></li><li><a href=\"#TwoWayBinds\" pageScroll=\"pageScroll\">Two Way Binds</a></li><li><a href=\"#LayoutComponents\" pageScroll=\"pageScroll\">Layout Components</a></li><li><a href=\"#ComplexComponents\" pageScroll=\"pageScroll\">Complex Components" +
    "\n</a></li></ul><br/><h2 class=\"margin-bottom-0\" id=\"Tags\">Tags</h2><div class=\"flex-wrap child-margin-xxs\"><div class=\"flex-1\" [class.width-full]=\"views.ackFixedElmStage\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>ack-fixed-element-stage</h3><div class=\"text-grey-2x max-width-400\">Required to use such components as &lt;ack-model&gt;, &lt;ack-options-modal&gt;, and the Confirm provider</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.ackFixedElmStage=!views.ackFixedElmStage\" [ngClass]=\"views.ackFixedElmStage?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.ackFixedElmStage\" [@fadeInOutUp]=\"1\"><div class=\"pad\">Use ONLY ONE time. This is a display control component for other components. It has no natural display until position fixed elements, such as modals, need to be rendered to screen.</div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;!DOCTYPE html&gt;" +
    "\n&lt;html lang=\"en\"&gt;" +
    "\n  &lt;head&gt;&lt;/head&gt;" +
    "\n  &lt;body&gt;" +
    "\n    &lt;ack-fixed-element-stage&gt;&lt;/ack-fixed-element-stage&gt;" +
    "\n  &lt;/body&gt;" +
    "\n&lt;/html&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>debug-area</h3><div class=\"text-grey-2x max-width-400\">A super convenient way to debug and edit variables<ack-close-icon></ack-close-icon></div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.debugArea=!views.debugArea\" [ngClass]=\"views.debugArea?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.debugArea\" [@fadeInOutUp]=\"1\"><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;debug-area&gt;" +
    "\n  &lt;debug-item name=\"someArray\" [value]=\"someArray\" type=\"array\"&gt;&lt;/debug-item&gt;" +
    "\n&lt;/debug-area&gt;</pre></absolute-overflow-x><h4 class=\"pad-sm margin-0\">Example Results<debug-area><debug-item name=\"arrayOfObjects\" [value]=\"arrayOfObjects\" type=\"array\"></debug-item><debug-item name=\"selectedArray\" [value]=\"selectedArray\" type=\"array\"></debug-item></debug-area></h4></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>ack-close-icon</h3><div class=\"text-grey-2x max-width-400\">A super convenient html based close icon. No img refs. No style sheet refs<ack-close-icon></ack-close-icon></div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.ackCloseIcon=!views.ackCloseIcon\" [ngClass]=\"views.ackCloseIcon?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.ackCloseIcon\" [@fadeInOutUp]=\"1\"><div class=\"pad\"><ack-close-icon (click)=\"views.ackCloseIcon=false\"></ack-close-icon></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;ack-close-icon (click)=\"views.ackCloseIcon=false\"&gt;&lt;/ack-close-icon&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>ack-array</h3><div class=\"text-grey-2x\">Common array functionality available at a template level</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.ackArray=!views.ackArray\" [ngClass]=\"views.ackArray?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.ackArray\" [@fadeInOutUp]=\"1\"><ack-array #Array=\"AckArray\" [(array)]=\"selectedArray\" idKey=\"letter\" [(pageAt)]=\"pageAt\" [(pages)]=\"arrayPages\" [(keyMap)]=\"arrayMap\"><ack-aggregate type=\"sum\" [keys]=\"['number']\" [(output)]=\"sumNumber\"></ack-aggregate></ack-array><h4 class=\"pad-sm margin-0\">Bind Documentation</h4><ul><li>[(array)] - main array to stem functionality from</li><li>[idKey] - pointer to each array node id field</li><li>[pageAt] - what number to break array into page buckets</li><li>([pages]) - buckets of arrays based on pageAt</li></ul><h4 class=\"pad-sm margin-0\">API Documentation</h4><ul><li>toggle(item) - adds or removes item based on existence</li><li>push(item) - param and append item to array</li><li>unshift(item) - param and prepend item to array</li><li>splice(item) - remove item by index from array</li><li>param() - ensure array exists</li><li>only(item) - reduce array down to only item argument</li></ul><div class=\"pad-sm\"><h4 class=\"margin-0\">Usage Example: Toggle Items</h4><div class=\"text-grey-2x\">Take an arbitrary array (arrayOfObjects in demo) and allow a system of toggling selections</div></div><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;ack-array #Array=\"AckArray\" [(array)]=\"selectedArray\" idKey=\"letter\"&gt;&lt;/ack-array&gt;" +
    "\n&lt;ng-container *ngIf=\"Array&gt;" +
    "\n  &lt;div *ngFor=\"let item of arrayOfObjects\"&gt;" +
    "\n    &lt;input type=\"checkbox\" [checked]=\"Array.selected(item)\" (click)=\"Array.toggle(item)\" /&gt;" +
    "\n    &nbsp;&nbsp;{{ item | json }}" +
    "\n  &lt;/div&gt;" +
    "\n&lt;/ng-container&gt;" +
    "\n</pre></absolute-overflow-x><h5 class=\"pad-sm margin-0\">Example Array Adjusters</h5><div class=\"pad-left text-grey-2x\">Use the checkboxes below to alter the original array</div><div class=\"flex-wrap child-margin-xs\"><div *ngFor=\"let item of arrayOfObjects;let i=index\"><input type=\"checkbox\" [checked]=\"Array?.selected(item)\" (click)=\"Array.toggle(item)\" name=\"ackArray\" id=\"ackArray{{i}}\"/>&nbsp;{{ item | json }}</div></div><div class=\"pad\"><a (click)=\"Array.toggleSort('letter')\">toggle sort</a></div><h5 class=\"pad-sm margin-0\">Example Selected Array</h5><absolute-overflow-x><pre class=\"code-sample margin-0\">{{ selectedArray | json }}" +
    "\n</pre></absolute-overflow-x><div class=\"pad-sm\"><h4 class=\"margin-0\">Usage Example: Map Items</h4><div class=\"text-grey-2x\">Take an arbitrary array and create an object map</div></div><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;ack-array" +
    "\n  [(array)]  = \"selectedArray\"" +
    "\n  idKey      = \"letter\"" +
    "\n  [(keyMap)] = \"objectOfArrays\"&gt;" +
    "\n&lt;/ack-array&gt;" +
    "\n&lt;pre&gt;" +
    "\n  {{ objectOfArrays | json}}" +
    "\n&lt;/pre&gt;" +
    "\n</pre></absolute-overflow-x><h5 class=\"pad-sm margin-0\">Example Selected Map</h5><absolute-overflow-x><pre class=\"code-sample margin-0\">{{ arrayMap | json }}" +
    "\n</pre></absolute-overflow-x><div class=\"pad-sm\"><h4 class=\"margin-0\">Usage Example: Pages of Array</h4><div class=\"text-grey-2x\">Break array into buckets of results</div></div><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;ack-array [(array)]=\"largeArray\" [(pages)]=\"pages\" pageAt=\"20\"&gt;&lt;/ack-array&gt;" +
    "\nTotal Pages : {{ pages?.length }}" +
    "\n&lt;div *ngFor=\"let page of pages;let page=index\"&gt;" +
    "\n  Page {{ page }} = {{ item | json }}" +
    "\n&lt;/div&gt;" +
    "\n</pre></absolute-overflow-x><div class=\"text-center bg-grey-4x pad-xxs margin-xxs\"><strong>pageAt:</strong><select [(ngModel)]=\"pageAt\"><option *ngFor=\"let page of [0,1,2,4,6,8]\" [value]=\"page\">{{page}}</option></select></div><div class=\"flex-wrap child-margin-xxs\"><absolute-overflow-x class=\"flex-1\" *ngFor=\"let page of arrayPages;let x=index\"><h5 class=\"margin-0\">Example pages[{{ x+1 }}]</h5><pre class=\"code-sample margin-0\">{{ page | json }}" +
    "\n</pre></absolute-overflow-x></div><div class=\"pad-sm\"><h4 class=\"margin-0\">Usage Example: Aggregates</h4><div class=\"text-grey-2x\">Sum an array</div></div><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;ack-array [(array)]=\"[&#123;parentOb:&#123;childOb:&#123;value:33&#125;&#125;&#125;]\"&gt;" +
    "\n  &lt;ack-aggregate type=\"sum\" [(output)]=\"sumAmount\" keys=\"['parentOb','childOb','value']\"&gt;&lt;/ack-aggregate&gt;" +
    "\n&lt;/ack-array&gt;" +
    "\n" +
    "\nYour sum of &#123;&#123; sumAmount &#125;&#125; should be equal to 33</pre></absolute-overflow-x><div class=\"pad-xxs\">Your sum is {{ sumNumber }}" +
    "\n</div></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>ack-options</h3><div class=\"text-grey-2x max-width-400\">Array of choosable options tied to a model</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.ackOptions=!views.ackOptions\" [ngClass]=\"views.ackOptions?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.ackOptions\" [@fadeInOutUp]=\"1\"><div class=\"pad-sm\"><h4 class=\"margin-0\">Demo</h4><p class=\"text-grey-3x text-sm\">Each item in list the below is selectable</p><div *ngIf=\"ackOptionString\" [@fadeInOutUp]=\"1\"><strong>Selected Option:</strong>&nbsp;{{ ackOptionString }}</div><ack-options [array]=\"['x','y','z']\" [(model)]=\"ackOptionString\" toggleable=\"1\"></ack-options><hr/><strong>Multiple Example</strong><div *ngIf=\"ackOptionArray?.length\" [@fadeInOutUp]=\"1\"><div><strong>Selected Options:</strong></div><absolute-overflow-x><pre class=\"code-sample\">{{ ackOptionArray | json }}</pre></absolute-overflow-x></div><ack-options [array]=\"[{name:'x'},{name:'y'},{name:'z'}]\" [(model)]=\"ackOptionArray\" multiple=\"1\"><ng-template #option=\"\" let-item=\"item\"><div>&bull; name:{{ item.name }}</div></ng-template><ng-template #selected=\"\" let-item=\"item\"><div class=\"bold\">&bull; name:{{ item.name }}</div></ng-template></ack-options></div><h4 class=\"pad-sm margin-0\">Properties</h4><ul><li>[array]</li><li>[stylize]:boolean = true</li><li>[multiple]:boolean</li><li>[modelAsArray]:boolean</li><li>[max]:number</li><li>[toggleable]:boolean</li></ul><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div *ngIf=\"ackOptionString\"&gt;" +
    "\n  &lt;strong&gt; Selected Option: &lt;/strong&gt;" +
    "\n  &#123;&#123; ackOptionString &#125;&#125;" +
    "\n&lt;/div&gt;" +
    "\n&lt;ack-options [array]=\"['x','y','z']\" [(model)]=\"ackOptionString\" toggleable&gt;&lt;/ack-options&gt;" +
    "\n" +
    "\n&lt;hr /&gt;" +
    "\n" +
    "\n&lt;div *ngIf=\"ackOptionArray?.length\"&gt;" +
    "\n  &lt;strong&gt; Selected Options: &lt;/strong&gt;" +
    "\n  &lt;pre&gt; &#123;&#123; ackOptionArray | json &#125;&#125; &lt;/pre&gt;" +
    "\n&lt;/div&gt;" +
    "\n&lt;ack-options [array]=\"[&#123;name:'x'&#125;,&#123;name:'y'&#125;,&#123;name:'z'&#125;]\" [(model)]=\"ackOptionArray\" multiple&gt;" +
    "\n  &lt;ng-template #option let-item=\"item\"&gt;" +
    "\n    &lt;div&gt; &amp;bull; name:&#123;&#123; item.name &#125;&#125; &lt;/div&gt;" +
    "\n  &lt;/ng-template&gt;" +
    "\n  &lt;ng-template #selected let-item=\"item\"&gt;" +
    "\n    &lt;div style=\"font-weight:bold\"&gt; &amp;bull; name:&#123;&#123; item.name &#125;&#125; &lt;/div&gt;" +
    "\n  &lt;/ng-template&gt;" +
    "\n&lt;/ack-options&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>ack-modal</h3><div class=\"text-grey-2x max-width-400\">Open simple dialog modal</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.ackModal=!views.ackModal\" [ngClass]=\"views.ackModal?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.ackModal\" [@fadeInOutUp]=\"1\"><div class=\"bg-info pad text-info\">This component requires the element &lt;ack-fixed-element-stage&gt; to be present somewhere in your app</div><ack-modal *ngIf=\"showAckModal\" (close)=\"showAckModal=false\" [(backgroundColor)]=\"modalBackgroundColor\" [(wrapStyle)]=\"modalWrapStyle\"><div class=\"bg-white border border-grey-4x pad-4x radius-5\">Sample Modal Dialog Window<div class=\"text-xs text-grey-2x pad-h\">*ngIf driven modal with animation provided by ack-angular-fx [@fadeInOutUp]=\"1\"</div></div></ack-modal><ack-modal [(showModel)]=\"showAckModalModel\" [(backgroundColor)]=\"modalBackgroundColor\" [(wrapStyle)]=\"modalWrapStyle\"><div class=\"bg-white border border-grey-4x pad-4x radius-5\">Sample Modal Dialog Window<div class=\"text-xs text-grey-2x pad-h\">model driven modal with animation provided by ack-angular-fx [@fadeInOutUp]=\"1\"</div></div></ack-modal><div class=\"pad text-center flex-wrap child-margin-xxs\"><button class=\"text-lg\" (click)=\"showAckModal=1\">*ngIf show modal</button><button class=\"text-lg\" (click)=\"showAckModalModel=1\">modal by [(showModel)]</button><div class=\"flex-1 flex-valign-center\"><div class=\"height-30 pad-h-sm bg-grey-5x border border-grey-4x border-right-0\">bg</div><input class=\"height-30 flex-1\" [(ngModel)]=\"modalBackgroundColor\"/></div><div class=\"flex-1 flex-valign-center\"><div class=\"height-30 pad-h-sm bg-grey-5x border border-grey-4x border-right-0\">width</div><input class=\"height-30 flex-1\" (change)=\"setModalWrapStyle($event.target.value)\" placeholder=\"default width is content\"/></div></div><div class=\"pad-sm\"><h4>Properties</h4><ul><li>(close)</li><li>[wrapStyle]</li><li>[wrapCellStyle]</li><li>[allowClose]:boolean = true</li><li>[backgroundColor]</li><li>[(showModel)]:boolean</li></ul></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;ack-modal *ngIf=\"showAckModal\" (close)=\"showAckModal=false\" backgroundColor=\"rgba(255,255,255,0.95)\"&gt;" +
    "\n  &lt;div style=\"background-color:white;padding:1em;\"&gt;" +
    "\n    Sample Modal Dialog Window" +
    "\n  &lt;/div&gt;" +
    "\n&lt;/ack-model&gt;" +
    "\n&lt;button (click)=\"showAckModal=1\"&gt; show modal &lt;/button&gt;" +
    "\n</pre></absolute-overflow-x><h4 class=\"pad-sm margin-0\">Model Usage Example</h4><div class=\"text-grey-3x text-smx\">Control modal display by a variable model</div><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;ack-modal [(showModel)]=\"showAckModal\" backgroundColor=\"rgba(255,255,255,0.95)\"&gt;" +
    "\n  &lt;div style=\"background-color:white;padding:1em;\"&gt;" +
    "\n    Sample Modal Dialog Window" +
    "\n  &lt;/div&gt;" +
    "\n&lt;/ack-model&gt;" +
    "\n&lt;button (click)=\"showAckModal=1\"&gt; show modal &lt;/button&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>ack-options-modal</h3><div class=\"text-grey-2x max-width-400\">Array of choosable options, in a modal, tied to a model</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.ackOptionsModal=!views.ackOptionsModal\" [ngClass]=\"views.ackOptionsModal?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.ackOptionsModal\" [@fadeInOutUp]=\"1\"><div class=\"bg-info pad text-info\">This component requires the element &lt;ack-fixed-element-stage&gt; to be present somewhere in your app</div><div class=\"pad\">The ack-options-modal component extends ack-options and implements ack-modal. All options in ack-modal are available in ack-options-modal.</div><div class=\"pad-sm\"><h4 class=\"margin-0\">Demo</h4><p class=\"text-grey-3x text-sm\">Each item in list the below is selectable</p><div *ngIf=\"ackOptionStringModal\" [@fadeInOutUp]=\"1\"><strong>Selected Option:</strong>&nbsp;{{ ackOptionStringModal }}</div><ack-options-modal [(showModel)]=\"showAckOptionsStringModal\" [allowClose]=\"0\" [array]=\"['option 0','option 1','option 2']\" [(model)]=\"ackOptionStringModal\" (modelChange)=\"showAckOptionsStringModal=0\" toggleable=\"1\"><div class=\"pad-right-3x\">Select Something Below</div></ack-options-modal><button (click)=\"showAckOptionsStringModal=!showAckOptionsStringModal\">select option</button><hr/><strong>Multiple Example</strong><div *ngIf=\"ackOptionArrayModal?.length\" [@fadeInOutUp]=\"1\"><div><strong>Selected Options:</strong></div><absolute-overflow-x><pre class=\"code-sample\">{{ ackOptionArrayModal | json }}</pre></absolute-overflow-x></div><ack-options-modal [(showModel)]=\"showAckOptionsObjectModal\" [array]=\"[{name:'red',key:'r'},{name:'blue',key:'b'},{name:'green',key:'g'}]\" [(model)]=\"ackOptionArrayModal\" multiple=\"1\" arrayKey=\"key\" arrayToModelKey=\"\" modelKey=\"key\"><div class=\"pad-right-3x text-grey\">Select Multiple Things Below</div><ng-template #selected=\"\" let-item=\"item\"><div class=\"bold\">&bull; name:{{ item.name }}</div></ng-template><ng-template #option=\"\" let-item=\"item\"><div>&bull; name:{{ item.name }}</div></ng-template></ack-options-modal><button (click)=\"showAckOptionsObjectModal=!showAckOptionsObjectModal\">select options</button></div><h4 class=\"pad-sm margin-0\">Properties</h4><ul><li>[array]</li><li>[stylize]:boolean = true</li><li>[multiple]:boolean</li><li>[modelAsArray]:boolean</li><li>[max]:number</li><li>[toggleable]:boolean</li><li>(close)</li><li>[wrapStyle]</li><li>[wrapCellStyle]</li><li>[allowClose]:boolean = true</li><li>[backgroundColor]</li><li>[(showModel)]:boolean</li></ul><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div *ngIf=\"ackOptionStringModal\"&gt;" +
    "\n  &lt;strong&gt; Selected Option: &lt;/strong&gt;" +
    "\n  &#123;&#123; ackOptionStringModal &#125;&#125;" +
    "\n&lt;/div&gt;" +
    "\n" +
    "\n&lt;ack-options-modal" +
    "\n  [(showModel)]= \"showAckOptionsStringModal\"" +
    "\n  [allowClose] = \"0\"" +
    "\n  [array]      = \"['x','y','z']\"" +
    "\n  [(model)]    = \"ackOptionStringModal\"" +
    "\n  (modelChange)= \"showAckOptionsStringModal=0\"" +
    "\n  toggleable" +
    "\n&gt;" +
    "\n  &lt;div style=\"padding-right:30px;\"&gt;Select Something Below&lt;/div&gt;" +
    "\n&lt;/ack-options-modal&gt;" +
    "\n&lt;button (click)=\"showAckOptionsStringModal=!showAckOptionsStringModal\")&gt;" +
    "\n  select option" +
    "\n&lt;/button&gt;" +
    "\n" +
    "\n&lt;hr /&gt;" +
    "\n" +
    "\n&lt;div *ngIf=\"ackOptionArrayModal?.length\"&gt;" +
    "\n  &lt;strong&gt; Selected Options: &lt;/strong&gt;" +
    "\n  &lt;pre&gt; &#123;&#123; ackOptionArrayModal | json &#125;&#125; &lt;/pre&gt;" +
    "\n&lt;/div&gt;" +
    "\n" +
    "\n&lt;ack-options-modal" +
    "\n  [(showModel)]   = \"showAckOptionsObjectModal\"" +
    "\n  [array]         = \"[&#123;name:'red'&#125;,&#123;name:'blue'&#125;,&#123;name:'green'&#125;]\"" +
    "\n  [(model)]       = \"ackOptionArrayModal\"" +
    "\n  arrayKey        = \"name\"" +
    "\n  arrayToModelKey = \"key\"" +
    "\n  multiple" +
    "\n&gt;" +
    "\n  &lt;div style=\"padding-right:30px;\"&gt;" +
    "\n    Select Multiple Things Below" +
    "\n  &lt;/div&gt;" +
    "\n  &lt;ng-template let-item=\"item\"&gt;" +
    "\n    &lt;div&gt; &amp;bull; name:&#123;&#123; item.name &#125;&#125; &lt;/div&gt;" +
    "\n  &lt;/ng-template&gt;" +
    "\n  &lt;ng-template #selected let-item=\"item\"&gt;" +
    "\n    &lt;div style=\"font-weight:bold\"&gt; &amp;bull; name:&#123;&#123; item.name &#125;&#125; &lt;/div&gt;" +
    "\n  &lt;/ng-template&gt;" +
    "\n&lt;/ack-options-modal&gt;" +
    "\n&lt;button (click)=\"showAckOptionsObjectModal=!showAckOptionsObjectModal\")&gt;" +
    "\n  select options" +
    "\n&lt;/button&gt;" +
    "\n</pre></absolute-overflow-x></div></div></div><br/><h2 class=\"margin-bottom-0\" id=\"ExpressionBinds\">Expression Binds</h2><div class=\"flex-wrap child-margin-xxs\"><div class=\"flex-1\" [class.width-full]=\"views.init\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>(init)</h3><div class=\"text-grey-2x max-width-400\">execute expression at render</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.init=!views.init\" [ngClass]=\"views.init?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.init\" [@fadeInOutUp]=\"1\"><div *ngFor=\"let item of initArray;let i=index\" (init)=\"item.name=item.name || 'no-name-'+(item.value+1)\">init val {{i}} {{ item.name }}</div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">@Component(&#123;" +
    "\n  selector: 'example'" +
    "\n  ,template: `" +
    "\n    &lt;div" +
    "\n      *ngFor=\"let item of initArray;let i=index\"" +
    "\n      (init)=\"item.name=item.name || 'no-name-'+(item.value+1)\"" +
    "\n    &gt;" +
    "\n      init val &#123;&#123;i&#125;&#125; &#123;&#123; item.name &#125;&#125;" +
    "\n    &lt;/div&gt;" +
    "\n  `" +
    "\n&#125;) export class Example &#123;" +
    "\n  initArray = [&#123;value:0&#125;,&#123;value:1&#125;,&#123;value:2&#125;]" +
    "\n&#125;" +
    "\n" +
    "\n" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\" [class.width-full]=\"views.screenScroll\"><div class=\"border border-grey-4x border border-bottom-0\"><div (screenScroll)=\"screenScrollCount=screenScrollCount+1\"></div><div class=\"pad-h\"><h3>(screenScroll)</h3><div class=\"text-grey-2x\">Run expression on screen scroll. Scroll Event Count :<div class=\"inline-block width-50\">&nbsp;{{ screenScrollCount }}</div></div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.screenScroll=!views.screenScroll\" [ngClass]=\"views.screenScroll?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.screenScroll\" [@fadeInOutUp]=\"1\"><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div (screenScroll)=\"screenScrollCount=screenScrollCount?1:++screenScrollCount\" &gt;" +
    "\n&nbsp;&nbsp;screenScroll count : {{ screenScrollCount }}" +
    "\n&lt;/div&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\" [class.width-full]=\"views.formChanged\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>(formChanged)</h3><div class=\"text-grey-2x max-width-400\">Capture a form tag onchange event</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.formChanged=!views.formChanged\" [ngClass]=\"views.formChanged?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.formChanged\" [@fadeInOutUp]=\"1\"><h4 class=\"pad-sm margin-0\">Example</h4><form class=\"pad\" (formChanged)=\"formChanges=formChanges==null?1:formChanges+1\"><span>Change Count : {{formChanges || 0}} :</span>&nbsp;<input type=\"radio\" name=\"fcTest\"/>&nbsp;<input type=\"radio\" name=\"fcTest\"/>&nbsp;<input type=\"radio\" name=\"fcTest\"/></form><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;form (formChanged)=\"formChanges=formChanges==null?1:formChanges+1\" &gt;" +
    "\n  &lt;span&gt; Change Count : {{formChanges || 0}} &lt;/span&gt;" +
    "\n  &lt;input type=\"radio\" name=\"fcTest\" /&gt;" +
    "\n  &lt;input type=\"radio\" name=\"fcTest\" /&gt;" +
    "\n  &lt;input type=\"radio\" name=\"fcTest\" /&gt;" +
    "\n&lt;/form&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\" [class.width-full]=\"views.formAlter\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>(formAlter)</h3><div class=\"text-grey-2x max-width-400\">Capture a form tag oninput event</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.formAlter=!views.formAlter\" [ngClass]=\"views.formAlter?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.formAlter\" [@fadeInOutUp]=\"1\"><div class=\"pad text-info\">Fires for every form input alteration and NOT just after a change occurred</div><h4 class=\"pad-sm margin-0\">Example</h4><form class=\"pad\" (formAlter)=\"formAlters=formAlters==null?1:formAlters+1\"><span>Alter Count : {{formAlters || 0}} :</span><input type=\"text\"/></form><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;form (formAlter)=\"formAlters=formAlters==null?1:formAlters+1\" &gt;" +
    "\n  &lt;span&gt; Alter Count : {{formAlters || 0}} &lt;/span&gt;" +
    "\n  &lt;input type=\"text\" /&gt;" +
    "\n&lt;/form&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\" [class.width-full]=\"views.enterKey\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>(enterKey)</h3><div class=\"text-grey-2x max-width-400\">Capture keyUp events when enter key used</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.enterKey=!views.enterKey\" [ngClass]=\"views.enterKey?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.enterKey\" [@fadeInOutUp]=\"1\"><div class=\"pad text-info\">Fires for every onKeyUp event where enter key was pressed</div><h4 class=\"pad-sm margin-0\">Example</h4><div class=\"flex child-margin-xs pad-xs\"><span>Enter Count : {{enterCountKey || 0}}</span><input class=\"flex-1\" type=\"text\" (enterKey)=\"enterCountKey=enterCountKey==null?1:enterCountKey+1\" placeholder=\"type here and use enter key\"/></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;span&gt; Enter Count : {{enterCountKey || 0}} &lt;/span&gt;" +
    "\n&lt;input type=\"text\" (enterKey)=\"enterCountKey=enterCountKey==null?1:enterCountKey+1\" placeholder=\"type here and use enter key\" /&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\" [class.width-full]=\"views.escapeKey\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>(escapeKey)</h3><div class=\"text-grey-2x max-width-400\">Capture keyUp events when escape key used</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.escapeKey=!views.escapeKey\" [ngClass]=\"views.escapeKey?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.escapeKey\" [@fadeInOutUp]=\"1\"><div class=\"pad text-info\">Fires for every onKeyUp event where enter key was pressed</div><h4 class=\"pad-sm margin-0\">Example</h4><div class=\"flex child-margin-xs pad-xs\"><span>Escape Count : {{escapeCountKey || 0}}</span><input class=\"flex-1\" type=\"text\" (escapeKey)=\"escapeCountKey=escapeCountKey==null?1:escapeCountKey+1\" placeholder=\"type here and use escape key\"/></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;span&gt; Escape Count : {{escapeCountKey || 0}} &lt;/span&gt;" +
    "\n&lt;input type=\"text\" (escapeKey)=\"escapeCountKey=escapeCountKey==null?1:escapeCountKey+1\" placeholder=\"type here and use escape key\" /&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\" [class.width-full]=\"views.preventBackKey\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>(preventBackKey)</h3><div class=\"text-grey-2x max-width-400\">Prevent the use of the backspace key</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.preventBackKey=!views.preventBackKey\" [ngClass]=\"views.preventBackKey?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.preventBackKey\" [@fadeInOutUp]=\"1\"><div class=\"pad text-info\">Prevents and fires every onKeyUp event where backspace key was pressed</div><h4 class=\"pad-sm margin-0\">Example</h4><div class=\"flex child-margin-xs pad-xs\"><span>Backspace Count : {{backspaceCount || 0}}</span><input class=\"flex-1\" type=\"text\" (preventBackKey)=\"backspaceCount=backspaceCount==null?1:backspaceCount+1\" placeholder=\"type here and use enter key\"/></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;span&gt; Backspace Count : {{backspaceCount || 0}} &lt;/span&gt;" +
    "\n&lt;input type=\"text\" (preventBackKey)=\"backspaceCount=backspaceCount==null?1:backspaceCount+1\" placeholder=\"type here and then use backspace key\" /&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\" [class.width-full]=\"views.preventEnterKey\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>(preventEnterKey)</h3><div class=\"text-grey-2x max-width-400\">Prevent the use of the enter keys</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.preventEnterKey=!views.preventEnterKey\" [ngClass]=\"views.preventEnterKey?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.preventEnterKey\" [@fadeInOutUp]=\"1\"><div class=\"pad text-info\">Prevents and fires every onKeyUp event where enter key was pressed</div><h4 class=\"pad-sm margin-0\">Example</h4><div class=\"flex child-margin-xs pad-xs\"><span>Enter Count : {{preventEnterCount || 0}}</span><input class=\"flex-1\" type=\"text\" (preventEnterKey)=\"preventEnterCount=preventEnterCount==null?1:preventEnterCount+1\" placeholder=\"type here and use enter key\"/></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;span&gt; Enter Count : {{preventEnterCount || 0}} &lt;/span&gt;" +
    "\n&lt;input type=\"text\" (preventEnterKey)=\"preventEnterCount=preventEnterCount==null?1:preventEnterCount+1\" placeholder=\"type here and use enter key\" /&gt;" +
    "\n</pre></absolute-overflow-x></div></div></div><br/><h2 class=\"margin-bottom-0\" id=\"OneWayBinds\">One Way Binds</h2><div class=\"flex-wrap child-margin-xxs\"><div class=\"flex-1\" [class.width-full]=\"views.Var\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>[var]</h3><div class=\"text-grey-2x max-width-400\">Create local template variables</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.Var=!views.Var\" [ngClass]=\"views.Var?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.Var\" [@fadeInOutUp]=\"1\"><div class=\"pad-sm\"><h4 class=\"margin-0\">Demo</h4><p class=\"text-grey-3x text-sm\">Each item in list below, has a localized variable</p><div class=\"flex-wrap child-margin-xxs\" #myVar=\"var\" [var]=\"0\"><button (click)=\"myVar.var=myVar.var+1\">outsize memory {{ myVar.var }}</button><button *ngFor=\"let i of [0,1,2,3]\" #myVar=\"var\" [var]=\"i\" (click)=\"myVar.var=myVar.var+1\">click count + index {{ myVar.var }}</button></div></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div #myVar=\"var\" [var]=\"0\"&gt;" +
    "\n  &lt;button (click)=\"myVar.var=myVar.var+1\"&gt;" +
    "\n    outsize memory &#123;&#123;&#123; myVar.var &#125;&#125;" +
    "\n  &lt;/button&gt;" +
    "\n  &lt;button *ngFor=\"let i of [0,1,2,3]\" #myVar=\"var\" [var]=\"i\" (click)=\"myVar.var=myVar.var+1\"&gt;" +
    "\n    click count + index &#123;&#123; myVar.var &#125;&#125;" +
    "\n  &lt;/button&gt;" +
    "\n&lt;/div&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\" [class.width-full]=\"views.focusOn\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>[focusOn]</h3><div class=\"text-grey-2x max-width-400\">element focus on demand</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.focusOn=!views.focusOn\" [ngClass]=\"views.focusOn?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.focusOn\" [@fadeInOutUp]=\"1\"><div class=\"pad text-center flex-wrap child-margin-xxs\"><div><button class=\"text-lg\" (click)=\"focusOn=1\">focus input</button></div><div class=\"flex-1\"><input class=\"width-full text-lg\" [focusOn]=\"focusOn\" (focusThen)=\"focusOn=0\" [focusOnDelay]=\"focusOnDelay\" placeholder=\"focus target\"/></div><div><input class=\"text-lg width-100\" type=\"number\" [(ngModel)]=\"focusOnDelay\" placeholder=\"delay\"/>ms</div></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;button (click)=\"focusOn=1\"&gt; focus input &lt;/button&gt;" +
    "\n&lt;input [focusOn]=\"focusOn\" (focusThen)=\"focusOn=0\" [focusOnDelay]=\"focusOnDelay\" placeholder=\"focus target\" /&gt;" +
    "\n&lt;input type=\"number\" [(ngModel)]=\"focusOnDelay\" placeholder=\"delay\" /&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\" [class.width-full]=\"views.selectOn\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>[selectOn]</h3><div class=\"text-grey-2x max-width-400\">element select on demand</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.selectOn=!views.selectOn\" [ngClass]=\"views.selectOn?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.selectOn\" [@fadeInOutUp]=\"1\"><div class=\"pad text-center flex-wrap child-margin-xxs\"><div><button class=\"text-lg\" (click)=\"selectOn=1\">select input</button></div><div class=\"flex-1\"><input class=\"width-full text-lg\" [selectOn]=\"selectOn\" (selectThen)=\"selectOn=0\" [selectOnDelay]=\"selectOnDelay\" placeholder=\"select target\" value=\"test to select\"/></div><div><input class=\"text-lg width-100\" type=\"number\" [(ngModel)]=\"selectOnDelay\" placeholder=\"delay\"/>ms</div></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;button (click)=\"selectOn=1\"&gt; select input &lt;/button&gt;" +
    "\n&lt;input [selectOn]=\"selectOn\" (selectThen)=\"selectOn=0\" [selectOnDelay]=\"selectOnDelay\" placeholder=\"select target\" value=\"test to select\" /&gt;" +
    "\n&lt;input type=\"number\" [(ngModel)]=\"selectOnDelay\" placeholder=\"delay\" /&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\" [class.width-full]=\"views.fxOn\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>[fxOn]</h3><div class=\"text-grey-2x max-width-400\">Control css classes for periods of time</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.fxOn=!views.fxOn\" [ngClass]=\"views.fxOn ? 'border-energized bg-energized' : 'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.fxOn\" [@fadeInOutUp]=\"1\"><div class=\"pad\"><div class=\"pad-xs bg-warning border-warning text-warning border\">You will need to &lt;link&gt; one of two style sheets:<ul><li>ack-angular/ack-angular.css</li><li>- or -</li><li><a href=\"https://github.com/daneden/animate.css\">animate.css</a></li></ul></div></div><h4 class=\"pad-h-sm margin-0\">Example</h4><div class=\"flex-wrap child-pad-h-xs pad-h\"><div><label class=\"block\">&nbsp;</label><label #fxRef=\"FxOn\" [fxOn]=\"fxOn\" (fxThen)=\"fxOn=false\" [fxForMs]=\"fxForMs\" [fxClass]=\"'animated ' + fxClass\">animate this text</label></div><div class=\"width-100\"><label>&nbsp;</label><button class=\"width-full\" (click)=\"fxOn=!fxOn\">fx:{{ fxOn || false }}</button></div><div><label>&nbsp;</label><a class=\"pad-h border border-positive text-positive block text-center hover-bg-positive hover-text-white\" (mouseover)=\"fxOn=true\" (mouseout)=\"fxOn=false\">hover me</a></div><div><label>fxType</label><select class=\"width-full\" [(ngModel)]=\"fxClass\" (change)=\"fxOn=true\"><option *ngFor=\"let item of (fxRef?fxRef.fxTypes:[])\" value=\"{{item}}\">{{item}}</option></select></div><div><label>&nbsp;</label><div><input type=\"checkbox\" id=\"fxConstant\" [(ngModel)]=\"fxConstant\" (change)=\"fxOn=$event.target.checked\"/>&nbsp;<label for=\"fxConstant\">fxConstant</label></div></div><div><label>fxForMs</label><div><input class=\"width-100\" [(ngModel)]=\"fxForMs\" (change)=\"fxOn=true\"/></div></div></div><strong>fxClass = \"animated {{fxClass}}\"</strong><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;label [fxOn]=\"fxOn\" (fxThen)=\"fxOn=false\" #fxRef=\"FxOn\" [(fxForMs)]=\"fxForMs\" [(fxType)]=\"fxClass\"&gt;" +
    "\n  animate this text :: {{ fxOn || false }}" +
    "\n&lt;/label&gt;" +
    "\n&lt;button (click)=\"fxOn=true\"&gt; fx:{{fxOn||false}} &lt;/button&gt;" +
    "\n&lt;a (mouseover)=\"fxOn=true\" (mouseout)=\"fxOn=false\"&gt;" +
    "\n  hover me" +
    "\n&lt;/a&gt;" +
    "\n&lt;select [(ngModel)]=\"fxClass\" (change)=\"fxOn=true\"&gt;" +
    "\n  &lt;option *ngFor=\"let item of (fxRef?fxRef.fxTypes:[])\" value=\"{{item}}\"&gt;{{item}}&lt;/option&gt;" +
    "\n&lt;/select&gt;" +
    "\n&lt;input type=\"checkbox\" id=\"fxConstant\" [(ngModel)]=\"fxConstant\" (change)=\"fxOn=$event.target.checked\" /&gt;" +
    "\n&lt;input [(ngModel)]=\"fxForMs\" (change)=\"fxOn=true\" /&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\" [class.width-full]=\"views.shakeOn\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>[shakeOn]</h3><div class=\"text-grey-2x max-width-400\">Control an animated shaking effect on demand</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.shakeOn=!views.shakeOn\" [ngClass]=\"views.shakeOn?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.shakeOn\" [@fadeInOutUp]=\"1\"><div class=\"pad\"><div class=\"pad-xs bg-warning border-warning text-warning border\">You will need to &lt;link&gt; one of two style sheets:<ul><li>ack-angular/ack-angular.css</li><li>- or -</li><li>ack-angular/csshake.css</li></ul></div></div><h4 class=\"pad-h-sm margin-0\">Example</h4><div class=\"flex-wrap child-pad-h-xs pad-h\"><div><label class=\"block\">&nbsp;</label><label #shakeRef=\"ShakeOn\" [shakeOn]=\"shakeOn\" (shakeThen)=\"shakeOn=false\" [shakeForMs]=\"shakeForMs\" [shakeType]=\"shakeOnType\" [shakeConstant]=\"shakeConstant\">shake this text</label></div><div class=\"width-100\"><label>&nbsp;</label><button class=\"width-full\" (click)=\"shakeOn=!shakeOn\">shake:{{shakeOn||false}}</button></div><div><label>&nbsp;</label><a class=\"pad-h border border-positive text-positive block text-center hover-bg-positive hover-text-white\" (mouseover)=\"shakeOn=true\" (mouseout)=\"shakeOn=false\">hover me</a></div><div><label>shakeType</label><select class=\"width-full\" [(ngModel)]=\"shakeOnType\" (change)=\"shakeOn=true\"><option *ngFor=\"let item of (shakeRef?shakeRef.shakeTypes:[])\" value=\"{{item}}\">{{item}}</option></select></div><div><label>&nbsp;</label><div><input type=\"checkbox\" id=\"shakeConstant\" [(ngModel)]=\"shakeConstant\" (change)=\"shakeOn=$event.target.checked\"/>&nbsp;<label for=\"shakeConstant\">shakeConstant</label></div></div><div><label>shakeForMs</label><div><input class=\"width-100\" [(ngModel)]=\"shakeForMs\" (change)=\"shakeOn=true\"/></div></div></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;label [shakeOn]=\"shakeOn\" (shakeThen)=\"shakeOn=false\" #shakeRef=\"ShakeOn\" [(shakeForMs)]=\"shakeForMs\" [(shakeType)]=\"shakeOnType\"&gt;" +
    "\n  shake this text :: {{ shakeOn||false }}" +
    "\n&lt;/label&gt;" +
    "\n&lt;button (click)=\"shakeOn=true\"&gt; shake:{{shakeOn||false}} &lt;/button&gt;" +
    "\n&lt;a (mouseover)=\"shakeOn=true\" (mouseout)=\"shakeOn=false\"&gt;" +
    "\n  hover me" +
    "\n&lt;/a&gt;" +
    "\n&lt;select [(ngModel)]=\"shakeOnType\" (change)=\"shakeOn=true\"&gt;" +
    "\n  &lt;option *ngFor=\"let item of (shakeRef?shakeRef.shakeTypes:[])\" value=\"{{item}}\"&gt;{{item}}&lt;/option&gt;" +
    "\n&lt;/select&gt;" +
    "\n&lt;input type=\"checkbox\" id=\"shakeConstant\" [(ngModel)]=\"shakeConstant\" (change)=\"shakeOn=$event.target.checked\" /&gt;" +
    "\n&lt;input [(ngModel)]=\"shakeForMs\" (change)=\"shakeOn=true\" /&gt;" +
    "\n</pre></absolute-overflow-x></div></div></div><br/><h2 class=\"margin-bottom-0\" id=\"TwoWayBinds\">Two Way Binds</h2><div class=\"flex-wrap child-margin-xxs\"><div class=\"flex-1\" [class.width-full]=\"views.statusOnlineModel\"><div class=\"border border-grey-4x border border-bottom-0\"><div [(statusOnlineModel)]=\"statusOnlineModel\"></div><div class=\"pad-h\"><h3>[(statusOnlineModel)]</h3><div class=\"text-grey-2x max-width-400\">Get browser internet status. <strong>IS ONLINE</strong> :<div class=\"inline-block width-50\">&nbsp;{{ statusOnlineModel }}</div></div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.statusOnlineModel=!views.statusOnlineModel\" [ngClass]=\"views.statusOnlineModel?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.statusOnlineModel\" [@fadeInOutUp]=\"1\"><div class=\"pad\"><div class=\"pad bg-warning border-warning border text-warning\">Completely turn off your internet and the online status will change.<br/>A delay is expected during transition from offline to online</div></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div(\"[(statusOnlineModel)]\"=\"statusOnlineModel\")&gt;" +
    "\n  |statusOnlineModel : {{ statusOnlineModel ? 'online' : 'offline'}}" +
    "\n&lt;/div&gt;" +
    "\n</pre></absolute-overflow-x></div></div><!-- statusOfflineModel--><div class=\"flex-1\" [class.width-full]=\"views.statusOfflineModel\"><div class=\"border border-grey-4x border border-bottom-0\"><div [(statusOfflineModel)]=\"statusOfflineModel\"></div><div class=\"pad-h\"><h3>[(statusOfflineModel)]</h3><div class=\"text-grey-2x max-width-400\">Get browser internet status. <strong>IS OFFLINE</strong> :<div class=\"inline-block width-50\">&nbsp;{{ statusOfflineModel }}</div></div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.statusOfflineModel=!views.statusOfflineModel\" [ngClass]=\"views.statusOfflineModel?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.statusOfflineModel\" [@fadeInOutUp]=\"1\"><div class=\"pad\"><div class=\"pad bg-warning border-warning border text-warning\"></div>Completely turn off your internet and the offline status will change<br/>A delay is expected during transition from offline to online</div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div(\"[(statusOfflineModel)]\"=\"statusOfflineModel\")&gt;" +
    "\n  |statusOfflineModel : {{ statusOfflineModel ? 'offline' : 'online'}}" +
    "\n&lt;/div&gt;" +
    "\n</pre></absolute-overflow-x></div></div><!-- pxFromHtmlTop--><div class=\"flex-1\" [class.width-full]=\"views.pxFromHtmlTop\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>[pxFromHtmlTop]</h3><div class=\"text-grey-2x\">Get element position from top of screen.<div class=\"inline-block width-50\" [(pxFromHtmlTop)]=\"pxFromHtmlTop\">Currently:&nbsp;{{pxFromHtmlTop}}</div></div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.pxFromHtmlTop=!views.pxFromHtmlTop\" [ngClass]=\"views.pxFromHtmlTop ? 'border-energized bg-energized' : 'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.pxFromHtmlTop\" [@fadeInOutUp]=\"1\"><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div [(pxFromHtmlTop)]=\"pxFromHtmlTop\" &gt;" +
    "\n&nbsp;&nbsp;pxFromHtmlTop: {{ pxFromHtmlTop }}" +
    "\n&lt;/div&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\" [class.width-full]=\"views.screenScrollHeightDiff\"><div class=\"border border-grey-4x border border-bottom-0\"><div [(screenScrollHeightDiff)]=\"screenScrollHeightDiff\"></div><div class=\"pad-h\"><h3>[(screenScrollHeightDiff)]</h3><div class=\"text-grey-2x\">Model of how many pixels overflow past the screen height (screenHeight - scrollHeight).<div>Currently :<div class=\"inline-block width-50\">&nbsp;{{ screenScrollHeightDiff }}</div></div><div class=\"pad text-grey-3x text-smx\">resize window height to see change</div></div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.screenScrollHeightDiff=!views.screenScrollHeightDiff\" [ngClass]=\"views.screenScrollHeightDiff?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.screenScrollHeightDiff\" [@fadeInOutUp]=\"1\"><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div [(screenScrollHeightDiff)]=\"screenScrollHeightDiff\" &gt;" +
    "\n&nbsp;&nbsp;screenScrollHeightDiff : {{ screenScrollHeightDiff }}" +
    "\n&lt;/div&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\" [class.width-full]=\"views.screenScrollModelY\"><div class=\"border border-grey-4x border border-bottom-0\"><div [(screenScrollModelY)]=\"screenScrollModelY\"></div><div class=\"pad-h\"><h3>[(screenScrollModelY)]</h3><div class=\"text-grey-2x max-width-400\">Get browser height scrolled. Currently :<div class=\"inline-block width-50\">&nbsp;{{screenScrollModelY}}px</div></div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.screenScrollModelY=!views.screenScrollModelY\" [ngClass]=\"views.screenScrollModelY?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.screenScrollModelY\" [@fadeInOutUp]=\"1\"><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div [(screenScrollModelY)]=\"screenScrollModelY\" &gt;" +
    "\n&nbsp;&nbsp;screenScrollModelY : {{ screenScrollModelY }}px" +
    "\n&lt;/div&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\" [class.width-full]=\"views.htmlWidthModel\"><div class=\"border border-grey-4x border border-bottom-0\"><div [(htmlWidthModel)]=\"htmlWidthModel\"></div><div class=\"pad-h\"><h3>[(htmlWidthModel)]</h3><div class=\"text-grey-2x\">Get the browser document inner width. Currently : {{htmlWidthModel}}px</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.htmlWidthModel=!views.htmlWidthModel\" [ngClass]=\"views.htmlWidthModel?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.htmlWidthModel\" [@fadeInOutUp]=\"1\"><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div [(htmlWidthModel)]=\"htmlWidthModel\"&gt;" +
    "\n&nbsp;&nbsp;htmlWidthModel : {{ htmlWidthModel }}px" +
    "\n&lt;/div&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\" [class.width-full]=\"views.htmlHeightModel\"><div class=\"border border-grey-4x border border-bottom-0\"><div [(htmlHeightModel)]=\"htmlHeightModel\"></div><div class=\"pad-h\"><h3>[(htmlHeightModel)]</h3><div class=\"text-grey-2x\">Get the browser document inner height. Currently : {{ htmlHeightModel }}px</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.htmlHeightModel=!views.htmlHeightModel\" [ngClass]=\"views.htmlHeightModel?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.htmlHeightModel\" [@fadeInOutUp]=\"1\"><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div [(htmlHeightModel)]=\"htmlHeightModel\"&gt;" +
    "\n&nbsp;&nbsp;htmlHeightModel : {{ htmlHeightModel }}px" +
    "\n&lt;/div&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\" [class.width-full]=\"views.screenWidthModel\"><div class=\"border border-grey-4x border border-bottom-0\"><div [(screenWidthModel)]=\"screenWidthModel\"></div><div class=\"pad-h\"><h3>[(screenWidthModel)]</h3><div class=\"text-grey-2x max-width-400\">Get the browser window inner width. Currently : {{ screenWidthModel }}px</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"viewScreenWidthModel=!viewScreenWidthModel\" [ngClass]=\"viewScreenWidthModel?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewScreenWidthModel\" [@fadeInOutUp]=\"1\"><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div [(screenWidthModel)]=\"screenWidthModel\"&gt;" +
    "\n&nbsp;&nbsp;screenWidthModel : {{ screenWidthModel }}px" +
    "\n&lt;/div&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\" [class.width-full]=\"views.screenHeightModel\"><div class=\"border border-grey-4x border border-bottom-0\"><div [(screenHeightModel)]=\"screenHeightModel\"></div><div class=\"pad-h\"><h3>[(screenHeightModel)]</h3><div class=\"text-grey-2x max-width-400\">Get the browser window inner height. Currently : {{screenHeightModel}}px</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"viewScreenHeightModel=!viewScreenHeightModel\" [ngClass]=\"viewScreenHeightModel?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewScreenHeightModel\" [@fadeInOutUp]=\"1\"><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div [(screenHeightModel)]=\"screenHeightModel\"&gt;" +
    "\n&nbsp;&nbsp;screenHeightModel : {{ screenHeightModel }}px" +
    "\n&lt;/div&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\" [class.width-full]=\"views.innerHtmlModel\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>[(innerHtmlModel)]</h3><div class=\"text-grey-2x max-width-400\">Capture an elements innerHTML into a model</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.innerHtmlModel=!views.innerHtmlModel\" [ngClass]=\"views.innerHtmlModel?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.innerHtmlModel\" [@fadeInOutUp]=\"1\"><h4 class=\"pad-sm margin-0\">Example</h4><div [(innerHtmlModel)]=\"innerHtmlModel\"><button (click)=\"contentArray.push('')\">add content</button><span *ngFor=\"let item of contentArray\">&#10;<button (click)=\"contentArray.push('')\">add content</button></span></div><absolute-overflow-x><pre class=\"code-sample margin-0\">{{ innerHtmlModel }}</pre></absolute-overflow-x><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;span&gt; Enter Count : {{preventEnterCount || 0}} &lt;/span&gt;" +
    "\n&lt;input type=\"text\" (enterKey)=\"preventEnterCount=preventEnterCount==null?1:preventEnterCount+1\" placeholder=\"type here and use enter key\" /&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\" [class.width-full]=\"views.contentModel\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>[(contentModel)]</h3><div class=\"text-grey-2x max-width-400\">Capture an elements innerHTML into a model</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.contentModel=!views.contentModel\" [ngClass]=\"views.contentModel?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.contentModel\" [@fadeInOutUp]=\"1\"><h4 class=\"pad-sm margin-0\">Example</h4><div>Tap to edit:&nbsp;<span [(contentModel)]=\"contentModel\" placeholder=\"tap to create text\"></span></div><absolute-overflow-x><pre class=\"code-sample margin-0\">{{ contentModel }}</pre></absolute-overflow-x><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div [(contentModel)]=\"contentModel\" placeholder=\"tap to create text\"&gt;{{ contentModel }}&lt;/div&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\" [class.width-full]=\"views.absoluteOverflowX\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>absolute-overflow-x</h3><div class=\"text-grey-2x max-width-400\">Control pre and nowrap elements x-axis overflow</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.absoluteOverflowX=!views.absoluteOverflowX\" [ngClass]=\"views.absoluteOverflowX?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.absoluteOverflowX\" [@fadeInOutUp]=\"1\"><div class=\"pad\"><div class=\"pad bg-info text-info text-info\">Often, pre elements and nowrap styles, make it hard to contronl x-axis overflow.<p>The following component, uses a relative and a absolute position elements along with height monitoring to manage x-axis overflow.</p><p>A no-sroll-bar option is defaulted to remove overflow scroll bars.</p></div></div><h4 class=\"pad-sm margin-0\">Bindings</h4><li>[scrollBars]</li><li>[wrapClass]</li><li>[active] = true</li><li>[overflow]:'auto'|'none'|'hidden'|'scroll' = 'auto'</li><h4 class=\"pad-sm margin-0\">Example</h4><div class=\"pad\"><absolute-overflow-x [active]=\"absoluteOverflowXActive\"><div class=\"nowrap\">&nbsp;&nbsp;This content all runs on one line flat out for as long as I can stand to stand typing at a Veridesk in Delray Beach, FL. Not that long it turns out...</div></absolute-overflow-x><label for=\"absoluteOverflowXActive\"><input type=\"checkbox\" [(ngModel)]=\"absoluteOverflowXActive\" id=\"absoluteOverflowXActive\"/>&nbsp;&nbsp;Overflow On/Off \"active\" Toggle</label><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;absolute-overflow-x&gt;" +
    "\n&nbsp;&nbsp;&lt;div style=\"white-space:nowrap;\"&gt;" +
    "\n&nbsp;&nbsp;&nbsp;&nbsp;This content all runs on one line flat out for as long as I can stand to stand typing at a Veridesk in Delray Beach, FL. Not that long it turns out..." +
    "\n&nbsp;&nbsp;&lt;/div&gt;" +
    "\n&lt;/absolute-overflow-x&gt;" +
    "\n</pre></absolute-overflow-x></div></div></div><div class=\"flex-1\" [class.width-full]=\"views.elementSizeModel\" [(elementSizeModel)]=\"elementSizeModel\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>[(elementSizeModel)]</h3><div class=\"text-grey-2x max-width-400\">Get an elements size. Currently : {{ elementSizeModel?.width }}x{{elementSizeModel?.height }}</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.elementSizeModel=!views.elementSizeModel\" [ngClass]=\"views.elementSizeModel?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.elementSizeModel\" [@fadeInOutUp]=\"1\"><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div [(elementSizeModel)]=\"elementSizeModel\"&gt;" +
    "\n&nbsp;&nbsp;elementSizeModel : {{ elementSizeModel?.width }}x{{ elementSizeModel?.height }}" +
    "\n&lt;/div&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\" [class.width-full]=\"views.elementHeightModel\" [(elementHeightModel)]=\"elementHeightModel\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>[(elementHeightModel)]</h3><div class=\"text-grey-2x max-width-400\">Get an elements height. Currently : {{elementHeightModel}}px</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.elementHeightModel=!views.elementHeightModel\" [ngClass]=\"views.elementHeightModel?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.elementHeightModel\" [@fadeInOutUp]=\"1\"><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div [(elementHeightModel)]=\"elementHeightModel\"&gt;" +
    "\n&nbsp;&nbsp;elementHeightModel : {{ elementHeightModel }}px" +
    "\n&lt;/div&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\" [class.width-full]=\"views.elementWidthModel\" [(elementWidthModel)]=\"elementWidthModel\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>[(elementWidthModel)]</h3><div class=\"text-grey-2x max-width-400\">Get an elements width. Currently : {{elementWidthModel}}px</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.elementWidthModel=!views.elementWidthModel\" [ngClass]=\"views.elementWidthModel?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.elementWidthModel\" [@fadeInOutUp]=\"1\"><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div [(elementWidthModel)]=\"elementWidthModel\"&gt;" +
    "\n&nbsp;&nbsp;elementWidthModel : {{ elementWidthModel }}px" +
    "\n&lt;/div&gt;" +
    "\n</pre></absolute-overflow-x></div></div></div><br/><h2 class=\"margin-bottom-0\" id=\"LayoutComponents\">Layout Components</h2><div class=\"pad\"><div class=\"pad bg-warning border-warning text-warning border\">You will need to &lt;link&gt; one of two style sheets:<ul><li>ack-angular/ack-angular.css</li><li>- or -</li><li>ack-angular/ack-css-boot.css</li></ul></div></div><div class=\"flex-wrap child-margin-xxs\"><div class=\"flex-1\" [class.width-full]=\"views.errorWell\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>error-well</h3><div class=\"text-grey-2x max-width-400\">a smart and simple place to display errors</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.errorWell=!views.errorWell\" [ngClass]=\"views.errorWell?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.errorWell\" [@fadeInOutUp]=\"1\"><h4 class=\"pad-sm margin-0\">Example</h4><div class=\"pad\"><select name=\"cssClasses\" [(ngModel)]=\"cssClasses\"><option value=\"bg-info border-info text-info\">bg-info border-info text-info</option><option value=\"bg-warning border-warning text-warning\">bg-warning border-warning text-warning</option><option value=\"bg-danger border-danger text-danger\">bg-danger border-danger text-danger</option><option value=\"bg-energized border-energized text-energized\">bg-energized border-energized text-energized</option><option value=\"bg-calm border-calm text-calm\">bg-calm border-calm text-calm</option><option value=\"bg-assertive border-assertive text-assertive\">bg-assertive border-assertive text-assertive</option><option value=\"bg-success border-success text-success\">bg-success border-success text-success</option><option value=\"bg-positive border-positive text-positive\">bg-positive border-positive text-positive</option><option value=\"bg-balanced border-balanced text-balanced\">bg-balanced border-balanced text-balanced</option><option value=\"bg-stable border-stable text-stable\">bg-stable border-stable text-stable</option><option value=\"bg-dark border-dark text-dark\">bg-dark border-dark text-dark</option><option value=\"bg-royal border-royal text-royal\">bg-royal border-royal text-royal</option></select><error-well class=\"margin\" [error]=\"error\" [cssClasses]=\"cssClasses\"></error-well><button (click)=\"causeError()\">cause error</button></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;error-well [error]=\"error\"&gt;&lt;/error-well&gt;</pre></absolute-overflow-x><h4 class=\"pad-sm margin-0\">Advanced Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;error-well [error]=\"error\" [closable]=\"1\" [allowDetails]=\"1\"&gt;&lt;/error-well&gt;" +
    "\n</pre></absolute-overflow-x></div></div></div><br/><h3 id=\"ComplexComponents\">Complex Components</h3><div class=\"pad-h\"><p class=\"margin-bottom-0\">Components that have additional dependencies or restrictions</p></div><div class=\"flex-wrap child-margin-xxs\"><div class=\"flex-1 border border-grey-4x border\" [class.width-full]=\"views.routeReporter\"><div class=\"pad-h\"><h3>route-reporter</h3><div class=\"text-grey-2x max-width-400\">Get in tune with router states when using @angular/router</div><br/></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.routeReporter=!views.routeReporter\" [ngClass]=\"views.routeReporter?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.routeReporter\" [@fadeInOutUp]=\"1\"><div class=\"pad\">Bindings<table cellPadding=\"2\" cellSpacing=\"0\" border=\"0\"><tr><td>[(state)]</td><td>Creates a reference to the current route</td></tr><tr><td>[(params)]</td><td>Creates a reference to the current route's params</td></tr><tr><td>[(query)]</td><td>Creates a reference to the current route's query params</td></tr><tr><td>(beforeChange)</td><td>Expression bind called before route changes</td></tr><tr><td>(onChange)</td><td>Expression bind called when route changes</td></tr></table></div><route-reporter #routeState=\"RouteReporter\" [(query)]=\"query\"></route-reporter><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\"><div ngNonBindable=\"ngNonBindable\">&lt;route-reporter" +
    "\n  #routeState = \"RouteReporter\"" +
    "\n  [(query)]     = \"query\"" +
    "\n&gt;&lt;/route-reporter&gt;" +
    "\n</div><div><span ngNonBindable=\"ngNonBindable\">{{ routeState.current?.config.name }}</span><span>&nbsp;==&nbsp;</span><span>{{ routeState.current?.config.name }}</span></div><div><span ngNonBindable=\"ngNonBindable\">{{ query | json }}</span><span>&nbsp;==&nbsp;</span><span>{{ query | json }}</span></div></pre></absolute-overflow-x></div></div></div>";


/***/ }),

/***/ "oN2l":
/*!***********************************!*\
  !*** ./src/declarations.short.ts ***!
  \***********************************/
/*! exports provided: EnterKey, EscapeKey, PreventBackKey, PreventEnterKey, InputHint, FormChanged, FormAlter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterKey", function() { return EnterKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscapeKey", function() { return EscapeKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreventBackKey", function() { return PreventBackKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreventEnterKey", function() { return PreventEnterKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputHint", function() { return InputHint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormChanged", function() { return FormChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormAlter", function() { return FormAlter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let EnterKey = class EnterKey {
    constructor(element) {
        this.element = element;
        this.enterKey = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        element.nativeElement.addEventListener('keydown', (event) => {
            var yesNo = [13, 10].indexOf(event.which || event.keyCode) >= 0;
            if (yesNo) {
                this.enterKey.emit(event);
            }
        });
    }
};
EnterKey.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
EnterKey.propDecorators = {
    enterKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
EnterKey = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[enterKey]' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], EnterKey);

let EscapeKey = class EscapeKey {
    constructor(element) {
        this.element = element;
        this.escapeKey = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        element.nativeElement.addEventListener('keydown', (event) => {
            const code = event.which || event.keyCode;
            if (code == 27) {
                this.escapeKey.emit(event);
            }
        });
    }
};
EscapeKey.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
EscapeKey.propDecorators = {
    escapeKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
EscapeKey = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[escapeKey]' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], EscapeKey);

let PreventBackKey = class PreventBackKey {
    constructor(element) {
        this.element = element;
        this.preventBackKey = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        element.nativeElement.addEventListener('keydown', (event) => {
            var yesNo = [8].indexOf(event.which || event.keyCode) < 0;
            if (!yesNo) {
                this.preventBackKey.emit(event);
                if (event.preventDefault) {
                    event.preventDefault();
                }
            }
            return yesNo;
        });
    }
};
PreventBackKey.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
PreventBackKey.propDecorators = {
    preventBackKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
PreventBackKey = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[preventBackKey]' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], PreventBackKey);

let PreventEnterKey = class PreventEnterKey {
    constructor(element) {
        this.element = element;
        this.preventEnterKey = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        element.nativeElement.addEventListener('keydown', (event) => {
            var yesNo = [13, 10].indexOf(event.which || event.keyCode) < 0;
            if (!yesNo) {
                this.preventEnterKey.emit(event);
                if (event.preventDefault) {
                    event.preventDefault();
                }
            }
            return yesNo;
        });
    }
};
PreventEnterKey.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
PreventEnterKey.propDecorators = {
    preventEnterKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
PreventEnterKey = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[preventEnterKey]' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], PreventEnterKey);

let InputHint = class InputHint {
    constructor() {
        this.hintStyle = { 'font-size': '75%', 'color': '#BBB' };
    }
};
InputHint.propDecorators = {
    hintStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
InputHint = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'input-hint',
        template: '<div style="position:relative;" [ngStyle]="hintStyle"><div style="position:absolute;top:0;width:100%"><ng-content></ng-content></div></div>'
    })
], InputHint);

let FormChanged = class FormChanged {
    constructor(element) {
        this.element = element;
        this.formChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = (event) => {
            this.formChanged.emit(event);
        };
        element.nativeElement.addEventListener('change', this.onChange);
    }
    ngOnDestroy() {
        this.element.nativeElement.removeEventListener('change', this.onChange);
    }
};
FormChanged.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
FormChanged.propDecorators = {
    formChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
FormChanged = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[formChanged]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], FormChanged);

let FormAlter = class FormAlter {
    constructor(element) {
        this.element = element;
        this.formAlter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = (event) => {
            this.formAlter.emit(event);
        };
        element.nativeElement.addEventListener('input', this.onChange);
        element.nativeElement.addEventListener('change', this.onChange);
    }
    ngOnDestroy() {
        this.element.nativeElement.removeEventListener('change', this.onChange);
        this.element.nativeElement.removeEventListener('input', this.onChange);
    }
};
FormAlter.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
FormAlter.propDecorators = {
    formAlter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
FormAlter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[formAlter]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], FormAlter);



/***/ }),

/***/ "q90b":
/*!********************************************************!*\
  !*** ./src/directives/ScreenScrollModelY.directive.ts ***!
  \********************************************************/
/*! exports provided: ScreenScrollModelY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenScrollModelY", function() { return ScreenScrollModelY; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let ScreenScrollModelY = class ScreenScrollModelY {
    constructor() {
        this.screenScrollModelYChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onScroll = () => {
            this.screenScrollModelY = window['pageYOffset'];
            this.screenScrollModelYChange.emit(this.screenScrollModelY);
        };
        this.onScroll();
        window.addEventListener("scroll", this.onScroll);
    }
    ngOnInit() {
        Promise.resolve().then(() => this.onScroll());
    }
    ngOnDestroy() {
        window.removeEventListener("scroll", this.onScroll);
    }
};
ScreenScrollModelY.ctorParameters = () => [];
ScreenScrollModelY.propDecorators = {
    screenScrollModelY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    screenScrollModelYChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
ScreenScrollModelY = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[screenScrollModelY]',
        exportAs: 'ScreenScrollModelY'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ScreenScrollModelY);



/***/ }),

/***/ "r773":
/*!**********************************************!*\
  !*** ./example/src/AckAppStage.component.ts ***!
  \**********************************************/
/*! exports provided: AckAppStage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AckAppStage", function() { return AckAppStage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ack_angular_fx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ack-angular-fx */ "cRtS");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../package.json */ "kiQV");
var _package_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "kiQV", 1);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions */ "cY6P");
/* harmony import */ var _states_object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./states.object */ "t3Vn");
/* harmony import */ var _templates_ack_app_stage_pug__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/ack-app-stage.pug */ "6L4j");







let AckAppStage = class AckAppStage {
    constructor() {
        this.panelAnim = 'slideInRight';
        this.version = _package_json__WEBPACK_IMPORTED_MODULE_3__["version"];
        this.menu = _states_object__WEBPACK_IMPORTED_MODULE_5__["menu"];
    }
    ngAfterViewInit() {
        console.log('Total Wire Time:', Date.now() - window['strapTime'] + 'ms');
        if (window['startAckTime']) {
            console.log('Overall Load Time:', Date.now() - window['startAckTime'] + 'ms', '@', Object(_functions__WEBPACK_IMPORTED_MODULE_4__["getServerTime"])());
        }
    }
};
AckAppStage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ack-app-stage',
        template: _templates_ack_app_stage_pug__WEBPACK_IMPORTED_MODULE_6__["string"],
        animations: ack_angular_fx__WEBPACK_IMPORTED_MODULE_2__["animations"]
    })
], AckAppStage);



/***/ }),

/***/ "rJkW":
/*!******************************************************************!*\
  !*** ./example/src/$$_lazy_route_resource lazy namespace object ***!
  \******************************************************************/
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
webpackEmptyAsyncContext.id = "rJkW";

/***/ }),

/***/ "s9RN":
/*!****************************************************!*\
  !*** ./example/src/AnimationExamples.component.ts ***!
  \****************************************************/
/*! exports provided: AnimationExamples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationExamples", function() { return AnimationExamples; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _templates_animation_examples_pug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/animation-examples.pug */ "DJT/");
/* harmony import */ var ack_angular_fx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ack-angular-fx */ "cRtS");




let AnimationExamples = class AnimationExamples {
    constructor() {
        this.list = ['abc', 'defg', 'hij', 'klm', 'opq', 'rst', 'uvx', 'yz'];
    }
};
AnimationExamples = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: _templates_animation_examples_pug__WEBPACK_IMPORTED_MODULE_2__["string"],
        animations: ack_angular_fx__WEBPACK_IMPORTED_MODULE_3__["animations"]
    })
], AnimationExamples);



/***/ }),

/***/ "sEoc":
/*!*******************************************************!*\
  !*** ./src/components/AbsoluteOverflowX.component.ts ***!
  \*******************************************************/
/*! exports provided: AbsoluteOverflowX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbsoluteOverflowX", function() { return AbsoluteOverflowX; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _templates_absolute_overflow_x_pug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/absolute-overflow-x.pug */ "my9p");



let AbsoluteOverflowX = class AbsoluteOverflowX {
    constructor(ElementRef) {
        this.ElementRef = ElementRef;
        this.active = true;
        this.overflow = 'auto';
    }
    ngOnInit() {
        this.checkDisplay();
    }
    ngOnChanges(changes) {
        if (changes.active) {
            this.checkDisplay();
        }
    }
    ngAfterViewInit() {
        this.ElementRef.nativeElement.style.display = 'block';
    }
    checkDisplay() {
        this.ElementRef.nativeElement.style.position = this.active ? 'relative' : 'static';
    }
};
AbsoluteOverflowX.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
AbsoluteOverflowX.propDecorators = {
    scrollBars: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    wrapClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    overflow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
AbsoluteOverflowX = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'absolute-overflow-x',
        template: _templates_absolute_overflow_x_pug__WEBPACK_IMPORTED_MODULE_2__["string"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], AbsoluteOverflowX);



/***/ }),

/***/ "stBn":
/*!******************************************************!*\
  !*** ./src/directives/ScreenWidthModel.directive.ts ***!
  \******************************************************/
/*! exports provided: ScreenWidthModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthModel", function() { return ScreenWidthModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _HtmlSizeWatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HtmlSizeWatcher */ "B6H9");



let ScreenWidthModel = class ScreenWidthModel {
    constructor(HtmlSizeService) {
        this.HtmlSizeService = HtmlSizeService;
        this.screenWidthModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sub = this.HtmlSizeService.change.subscribe(() => this.changed());
        this.HtmlSizeService.checkWatchers();
        if (this.HtmlSizeService.htmlSize) {
            this.changed();
        }
    }
    changed() {
        if (!this.HtmlSizeService.htmlSize
            || !this.hasChanged())
            return;
        this.updateModel();
    }
    hasChanged() {
        return this.screenWidthModel !== window.innerWidth;
    }
    updateModel() {
        this.screenWidthModel = window.innerWidth;
        this.screenWidthModelChange.emit(this.screenWidthModel);
    }
};
ScreenWidthModel.ctorParameters = () => [
    { type: _HtmlSizeWatcher__WEBPACK_IMPORTED_MODULE_2__["HtmlSizeService"] }
];
ScreenWidthModel.propDecorators = {
    screenWidthModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    screenWidthModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
ScreenWidthModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[screenWidthModel]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_HtmlSizeWatcher__WEBPACK_IMPORTED_MODULE_2__["HtmlSizeService"]])
], ScreenWidthModel);



/***/ }),

/***/ "t3Vn":
/*!**************************************!*\
  !*** ./example/src/states.object.ts ***!
  \**************************************/
/*! exports provided: FakeComponent, declarations, menu, routes, routeConfig, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeComponent", function() { return FakeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "declarations", function() { return declarations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeConfig", function() { return routeConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ComponentsExamples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ComponentsExamples.component */ "WcXA");
/* harmony import */ var _OverviewExamples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OverviewExamples.component */ "k57P");
/* harmony import */ var _PipesExamples_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PipesExamples.component */ "3+aZ");
/* harmony import */ var _ProviderExamples_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProviderExamples.component */ "bfac");
/* harmony import */ var _AnimationExamples_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AnimationExamples.component */ "s9RN");
/* harmony import */ var _JjsWoz_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./JjsWoz.component */ "tAfC");









let FakeComponent = class FakeComponent {
};
FakeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({ template: '' })
], FakeComponent);

const declarations = [
    FakeComponent
];
const menu = [
    {
        name: 'overview',
        path: 'overview',
        component: _OverviewExamples_component__WEBPACK_IMPORTED_MODULE_4__["OverviewExamples"],
        data: {
            title: "Overview"
        },
    }, {
        name: 'components',
        path: 'components',
        component: _ComponentsExamples_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsExamples"],
        data: {
            title: "Components"
        }
    }, {
        name: 'pipes',
        path: 'pipes',
        component: _PipesExamples_component__WEBPACK_IMPORTED_MODULE_5__["PipesExamples"],
        data: {
            title: "Pipes"
        }
    }, {
        name: 'animations',
        path: 'animations',
        component: _AnimationExamples_component__WEBPACK_IMPORTED_MODULE_7__["AnimationExamples"],
        data: {
            title: "Animations"
        }
    }, {
        name: 'providers',
        path: 'providers',
        component: _ProviderExamples_component__WEBPACK_IMPORTED_MODULE_6__["ProviderExamples"],
        data: {
            title: "Providers"
        }
    }, {
        name: 'jjswoz',
        path: 'jjswoz',
        component: _JjsWoz_component__WEBPACK_IMPORTED_MODULE_8__["JjsWoz"],
        data: {
            title: "JJ's WoZ"
        }
    }
];
const routes = [
    ...menu,
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: '**', redirectTo: 'overview' }
];
const routeConfig = {
    useHash: true,
    initialNavigation: 'enabled',
    enableTracing: false
};
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, routeConfig);


/***/ }),

/***/ "tAfC":
/*!*****************************************!*\
  !*** ./example/src/JjsWoz.component.ts ***!
  \*****************************************/
/*! exports provided: JjsWoz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JjsWoz", function() { return JjsWoz; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _templates_jjs_woz_pug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/jjs-woz.pug */ "2nh+");



let JjsWoz = class JjsWoz {
    constructor(ElementRef) {
        this.ElementRef = ElementRef;
    }
    ngOnInit() {
        this.ElementRef.nativeElement.getElementsByTagName('audio')[0].play();
    }
};
JjsWoz.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
JjsWoz = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'jjs-woz',
        template: _templates_jjs_woz_pug__WEBPACK_IMPORTED_MODULE_2__["string"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], JjsWoz);



/***/ }),

/***/ "unt3":
/*!******************************************************!*\
  !*** ./src/directives/ElementSizeModel.directive.ts ***!
  \******************************************************/
/*! exports provided: ElementSizeModel, ElementHeightModel, ElementWidthModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementSizeModel", function() { return ElementSizeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementHeightModel", function() { return ElementHeightModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementWidthModel", function() { return ElementWidthModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let ElementSizeModel = class ElementSizeModel {
    constructor(element) {
        this.element = element;
        this.elementSizeModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngAfterViewInit() {
        this.onResize = () => {
            this.setModel();
        };
        window.addEventListener('resize', this.onResize);
        Promise.resolve().then(() => this.setModel());
        this.observer = new MutationObserver(() => {
            this.setModel();
        });
        const config = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };
        this.observer.observe(this.element.nativeElement, config);
        setTimeout(() => this.setModel(), 800);
    }
    ngOnChanges() {
        Promise.resolve().then(() => {
            if (!this.inChange) {
                this.setModel();
            }
        });
    }
    setModel() {
        this.elementSizeModel = this.elementSizeModel || {};
        this.inChange = true;
        this.elementSizeModel.width = this.element.nativeElement.offsetWidth;
        this.elementSizeModel.height = this.element.nativeElement.offsetHeight;
        this.elementSizeModelChange.emit(this.elementSizeModel);
        Promise.resolve().then(() => {
            this.inChange = false;
        });
    }
    ngOnDestroy() {
        this.observer.disconnect();
        window.removeEventListener('resize', this.onResize);
    }
};
ElementSizeModel.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
ElementSizeModel.propDecorators = {
    elementSizeModelWatch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    elementSizeModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    elementSizeModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
ElementSizeModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[elementSizeModel]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ElementSizeModel);

let ElementHeightModel = class ElementHeightModel extends ElementSizeModel {
    constructor(element) {
        super(element);
        this.element = element;
        this.elementHeightModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    setModel() {
        this.elementHeightModel = this.element.nativeElement.offsetHeight;
        this.elementHeightModelChange.emit(this.elementHeightModel);
    }
};
ElementHeightModel.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
ElementHeightModel.propDecorators = {
    elementHeightModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    elementHeightModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
ElementHeightModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[elementHeightModel]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ElementHeightModel);

let ElementWidthModel = class ElementWidthModel extends ElementSizeModel {
    constructor(element) {
        super(element);
        this.element = element;
        this.elementWidthModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    setModel() {
        this.elementWidthModel = this.element.nativeElement.offsetWidth;
        this.elementWidthModelChange.emit(this.elementWidthModel);
    }
};
ElementWidthModel.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
ElementWidthModel.propDecorators = {
    elementWidthModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    elementWidthModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
ElementWidthModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[elementWidthModel]',
        exportAs: 'ElementWidthModel'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ElementWidthModel);



/***/ }),

/***/ "v+h3":
/*!***************************************************!*\
  !*** ./src/directives/PxFromHtmlTop.directive.ts ***!
  \***************************************************/
/*! exports provided: PxFromHtmlTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PxFromHtmlTop", function() { return PxFromHtmlTop; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let PxFromHtmlTop = class PxFromHtmlTop {
    constructor(ElementRef) {
        this.ElementRef = ElementRef;
        this.numberChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onScroll = () => {
            this.setter();
            this.emit();
        };
        window.addEventListener("resize", this.onScroll);
        window.addEventListener("scroll", this.onScroll);
    }
    emit() {
        this.numberChange.emit(this.number);
    }
    ngOnChanges() {
        Promise.resolve().then(() => {
            this.setter();
            this.emit();
        });
        this.delayFire(250);
        this.delayFire(750);
        this.delayFire(1500);
    }
    setter() {
        const top = this.ElementRef.nativeElement.getBoundingClientRect().top;
        this.number = top;
    }
    ngAfterViewInit() {
        this.delayFire();
        this.delayFire(200);
    }
    delayFire(num = 0) {
        setTimeout(() => {
            this.setter();
            this.emit();
        }, num);
    }
    ngOnDestroy() {
        window.removeEventListener("scroll", this.onScroll);
        window.removeEventListener("resize", this.onScroll);
    }
};
PxFromHtmlTop.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
PxFromHtmlTop.propDecorators = {
    number: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["pxFromHtmlTop",] }],
    numberChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ["pxFromHtmlTopChange",] }],
    watch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
PxFromHtmlTop = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[pxFromHtmlTop]",
        exportAs: "PxFromHtmlTop"
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], PxFromHtmlTop);



/***/ }),

/***/ "xM1n":
/*!*********************************************!*\
  !*** ./src/directives/FocusOn.directive.ts ***!
  \*********************************************/
/*! exports provided: FocusOn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusOn", function() { return FocusOn; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let FocusOn = class FocusOn {
    constructor(element) {
        this.element = element;
        this.focusOnDelay = 0;
        this.focusThen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        if (changes.focusOn && changes.focusOn.currentValue) {
            if (this.focusOnDelay === 0) {
                Promise.resolve().then(() => this.update());
            }
            else {
                setTimeout(() => this.update(), this.focusOnDelay);
            }
        }
    }
    update() {
        this.element.nativeElement.focus();
        this.focusThen.emit();
    }
};
FocusOn.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
FocusOn.propDecorators = {
    focusOn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    focusOnDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    focusThen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
FocusOn = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[focusOn]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], FocusOn);



/***/ }),

/***/ "yco1":
/*!**********************!*\
  !*** ./src/pipes.ts ***!
  \**********************/
/*! exports provided: IndexTrack, Stringify, ForceArray, ArrayOfObjects, SafeUrl, NumberWord, EndNumberWord, SafeHtml, SafeStyle, Between, ReplaceMaxLength, TextDownload, NumberToPhone, toNumber, NumberSuffix, MarkdownAnchor, Capitalize, CapitalizeWords, Yesno, YesNo, BooleanPipe, Bit, Numbers, ADate, AMath, AString, ATime, Ack, Keys, TypeofPipe, ConsolePipe, declarations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexTrack", function() { return IndexTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stringify", function() { return Stringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForceArray", function() { return ForceArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayOfObjects", function() { return ArrayOfObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeUrl", function() { return SafeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberWord", function() { return NumberWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndNumberWord", function() { return EndNumberWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtml", function() { return SafeHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeStyle", function() { return SafeStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Between", function() { return Between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceMaxLength", function() { return ReplaceMaxLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDownload", function() { return TextDownload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberToPhone", function() { return NumberToPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberSuffix", function() { return NumberSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownAnchor", function() { return MarkdownAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Capitalize", function() { return Capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizeWords", function() { return CapitalizeWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Yesno", function() { return Yesno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YesNo", function() { return YesNo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanPipe", function() { return BooleanPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bit", function() { return Bit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Numbers", function() { return Numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADate", function() { return ADate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMath", function() { return AMath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AString", function() { return AString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATime", function() { return ATime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ack", function() { return Ack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keys", function() { return Keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeofPipe", function() { return TypeofPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsolePipe", function() { return ConsolePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "declarations", function() { return declarations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _pipes_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes.class */ "zgg7");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




let IndexTrack = class IndexTrack {
    transform() {
        return function (index) { return index; };
    }
};
IndexTrack = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'indexTrack' })
], IndexTrack);

let Stringify = class Stringify {
    transform(input, spaces) {
        return JSON.stringify(input, null, spaces);
    }
};
Stringify = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'stringify' })
], Stringify);

let ForceArray = class ForceArray {
    transform(input, repeat, repeatValue) {
        return _pipes_class__WEBPACK_IMPORTED_MODULE_2__["array"](input, repeat, repeatValue);
    }
};
ForceArray = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'array' })
], ForceArray);

let ArrayOfObjects = class ArrayOfObjects {
    transform(input, repeat, repeatValue) {
        return _pipes_class__WEBPACK_IMPORTED_MODULE_2__["arrayOfObjects"](input, repeat, repeatValue);
    }
};
ArrayOfObjects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'arrayOfObjects' })
], ArrayOfObjects);

let SafeUrl = class SafeUrl {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(input) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(input);
    }
};
SafeUrl.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
SafeUrl = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safeUrl' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
], SafeUrl);

let NumberWord = class NumberWord {
    constructor() { }
    transform(input, number) {
        return input + (number && number == 1 ? '' : 's');
    }
};
NumberWord.ctorParameters = () => [];
NumberWord = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'numberWord' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], NumberWord);

let EndNumberWord = class EndNumberWord {
    constructor() { }
    transform(input) {
        return input && input == 1 ? '' : 's';
    }
};
EndNumberWord.ctorParameters = () => [];
EndNumberWord = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'endNumberWord' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], EndNumberWord);

let SafeHtml = class SafeHtml {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(input) {
        return this.domSanitizer.bypassSecurityTrustHtml(input);
    }
};
SafeHtml.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
SafeHtml = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safeHtml' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
], SafeHtml);

let SafeStyle = class SafeStyle {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(input) {
        return this.domSanitizer.bypassSecurityTrustStyle(input);
    }
};
SafeStyle.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
SafeStyle = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safeStyle' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
], SafeStyle);

let Between = class Between {
    transform(input, a, b) {
        return _pipes_class__WEBPACK_IMPORTED_MODULE_2__["between"](input, a, b);
    }
};
Between = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'between' })
], Between);

let ReplaceMaxLength = class ReplaceMaxLength {
    transform(input, max, replacement) {
        return _pipes_class__WEBPACK_IMPORTED_MODULE_2__["replaceMaxLength"](input, max, replacement);
    }
};
ReplaceMaxLength = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'replaceMaxLength' })
], ReplaceMaxLength);

let TextDownload = class TextDownload {
    transform(input) { return _pipes_class__WEBPACK_IMPORTED_MODULE_2__["textDownload"](input); }
};
TextDownload = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'textDownload' })
], TextDownload);

let NumberToPhone = class NumberToPhone {
    transform(input) { return _pipes_class__WEBPACK_IMPORTED_MODULE_2__["numberToPhone"](input); }
};
NumberToPhone = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'numberToPhone' })
], NumberToPhone);

let toNumber = class toNumber {
    transform(input) { return _pipes_class__WEBPACK_IMPORTED_MODULE_2__["toNumber"](input); }
};
toNumber = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'toNumber' })
], toNumber);

let NumberSuffix = class NumberSuffix {
    transform(input, rtnInput) { return _pipes_class__WEBPACK_IMPORTED_MODULE_2__["numberSuffix"](input, rtnInput); }
};
NumberSuffix = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'numberSuffix' })
], NumberSuffix);

let MarkdownAnchor = class MarkdownAnchor {
    transform(input) { return _pipes_class__WEBPACK_IMPORTED_MODULE_2__["markdownAnchor"](input); }
};
MarkdownAnchor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'markdownAnchor' })
], MarkdownAnchor);

let Capitalize = class Capitalize {
    transform(input) { return _pipes_class__WEBPACK_IMPORTED_MODULE_2__["capitalize"](input); }
};
Capitalize = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'capitalize' })
], Capitalize);

let CapitalizeWords = class CapitalizeWords {
    transform(input) { return _pipes_class__WEBPACK_IMPORTED_MODULE_2__["capitalizeWords"](input); }
};
CapitalizeWords = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'capitalizeWords' })
], CapitalizeWords);

let Yesno = class Yesno {
    transform(input) { return _pipes_class__WEBPACK_IMPORTED_MODULE_2__["yesno"](input); }
};
Yesno = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'yesno' })
], Yesno);

let YesNo = class YesNo {
    transform(input) { return _pipes_class__WEBPACK_IMPORTED_MODULE_2__["yesNo"](input); }
};
YesNo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'YesNo' })
], YesNo);

let BooleanPipe = class BooleanPipe {
    transform(input) { return _pipes_class__WEBPACK_IMPORTED_MODULE_2__["boolean"](input); }
};
BooleanPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'boolean' })
], BooleanPipe);

let Bit = class Bit {
    transform(input) { return _pipes_class__WEBPACK_IMPORTED_MODULE_2__["bit"](input); }
};
Bit = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'bit' })
], Bit);

let Numbers = class Numbers {
    transform(input) { return _pipes_class__WEBPACK_IMPORTED_MODULE_2__["numbers"](input); }
};
Numbers = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'numbers' })
], Numbers);

let ADate = class ADate {
    transform(...args) { return _pipes_class__WEBPACK_IMPORTED_MODULE_2__["aDate"].apply(_pipes_class__WEBPACK_IMPORTED_MODULE_2__["aDate"], args); }
};
ADate = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'aDate' })
], ADate);

let AMath = class AMath {
    transform(...args) { return _pipes_class__WEBPACK_IMPORTED_MODULE_2__["aMath"].apply(_pipes_class__WEBPACK_IMPORTED_MODULE_2__["aMath"], args); }
};
AMath = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'aMath' })
], AMath);

let AString = class AString {
    transform(...args) { return _pipes_class__WEBPACK_IMPORTED_MODULE_2__["aString"].apply(_pipes_class__WEBPACK_IMPORTED_MODULE_2__["aString"], args); }
};
AString = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'aString' })
], AString);

let ATime = class ATime {
    transform(...args) { return _pipes_class__WEBPACK_IMPORTED_MODULE_2__["aTime"].apply(_pipes_class__WEBPACK_IMPORTED_MODULE_2__["aTime"], args); }
};
ATime = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'aTime' })
], ATime);

let Ack = class Ack {
    transform(...args) { return _pipes_class__WEBPACK_IMPORTED_MODULE_2__["ack"].apply(_pipes_class__WEBPACK_IMPORTED_MODULE_2__["ack"], args); }
};
Ack = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'ack' })
], Ack);

let Keys = class Keys {
    transform(input) {
        const type = typeof (input) == 'object';
        const isOb = input && type;
        const isArray = isOb && input.constructor == Array;
        if (isArray) {
            return input.map((_value, index) => index);
        }
        return input ? Object.keys(input) : [];
    }
};
Keys = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'keys' })
], Keys);

let TypeofPipe = class TypeofPipe {
    transform(input) { return typeof (input); }
};
TypeofPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'typeof' })
], TypeofPipe);

let ConsolePipe = class ConsolePipe {
    transform() {
        return console.log.apply(console, arguments);
    }
};
ConsolePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'console' })
], ConsolePipe);

const declarations = [
    IndexTrack,
    Stringify,
    ForceArray,
    ArrayOfObjects,
    SafeHtml,
    SafeUrl,
    SafeStyle,
    TextDownload,
    MarkdownAnchor,
    Capitalize,
    CapitalizeWords,
    Yesno,
    YesNo,
    Keys,
    TypeofPipe,
    ConsolePipe,
    ADate,
    AMath,
    AString,
    ATime,
    Ack,
    Numbers,
    toNumber,
    NumberToPhone,
    NumberSuffix,
    Bit,
    NumberWord,
    EndNumberWord,
    BooleanPipe,
    Between,
    ReplaceMaxLength,
];


/***/ }),

/***/ "zFTS":
/*!********************************************************!*\
  !*** ./src/directives/StatusOfflineModel.directive.ts ***!
  \********************************************************/
/*! exports provided: StatusOfflineModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusOfflineModel", function() { return StatusOfflineModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let StatusOfflineModel = class StatusOfflineModel {
    constructor() {
        this.statusOfflineModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = () => {
            this.statusOfflineModel = !navigator.onLine;
            this.statusOfflineModelChange.emit(this.statusOfflineModel);
        };
        window.addEventListener("offline", this.onChange);
        window.addEventListener("online", this.onChange);
        Promise.resolve().then(() => this.onChange());
    }
    ngOnDestroy() {
        window.removeEventListener("offline", this.onChange);
        window.removeEventListener("online", this.onChange);
    }
};
StatusOfflineModel.ctorParameters = () => [];
StatusOfflineModel.propDecorators = {
    statusOfflineModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    statusOfflineModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
StatusOfflineModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[statusOfflineModel]' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], StatusOfflineModel);



/***/ }),

/***/ "zgg7":
/*!****************************!*\
  !*** ./src/pipes.class.ts ***!
  \****************************/
/*! exports provided: between, replaceMaxLength, numberToPhone, toNumber, numberSuffix, array, arrayOfObjects, markdownAnchor, textDownload, yesno, yesNo, boolean, bit, numbers, capitalizeWords, capitalize, capitalizeAfterSentence, capitalizeOne, aDate, aTime, aMath, aString, ack, pipes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceMaxLength", function() { return replaceMaxLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberToPhone", function() { return numberToPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberSuffix", function() { return numberSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "array", function() { return array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayOfObjects", function() { return arrayOfObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markdownAnchor", function() { return markdownAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textDownload", function() { return textDownload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yesno", function() { return yesno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yesNo", function() { return yesNo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boolean", function() { return boolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bit", function() { return bit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeWords", function() { return capitalizeWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeAfterSentence", function() { return capitalizeAfterSentence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeOne", function() { return capitalizeOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aDate", function() { return aDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aTime", function() { return aTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aMath", function() { return aMath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aString", function() { return aString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ack", function() { return ack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipes", function() { return pipes; });
/* harmony import */ var ack_x_es_index_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ack-x/es/index-browser */ "qVHK");
/* harmony import */ var _invokeRotator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invokeRotator */ "Hkjg");

function between(input, a, b) {
    if (a == null || b == null)
        return false;
    return (input >= a && input <= b) || (input <= a && input >= b) ? true : false;
}
function replaceMaxLength(input, max, replacement = '...') {
    if ((input === null || input === void 0 ? void 0 : input.length) > max) {
        return input.slice(0, max) + replacement;
    }
    return input;
}
function numberToPhone(val) {
    if (val == null || !val) {
        return val;
    }
    val = String(val).replace(/[^0-9]/g, '');
    if (val.length == 0)
        return val;
    return '(' + val.substring(0, 3) + ') ' + val.substring(3, 6) + '-' + val.substring(6, 10);
}
function toNumber(val) {
    return Number(numbers(val, "."));
}
function numberSuffix(val, rtnVal = false) {
    var rtn = rtnVal ? val : '';
    val = Number(val);
    if (!val || isNaN(val))
        return '';
    var j = val % 10, k = val % 100;
    if (j == 1 && k != 11) {
        return rtn + "st";
    }
    if (j == 2 && k != 12) {
        return rtn + "nd";
    }
    if (j == 3 && k != 13) {
        return rtn + "rd";
    }
    return rtn + "th";
}
function array(input, repeat, repeatValue) {
    const isArray = input != null && input.constructor == Array;
    let rtn = isArray ? input : [];
    if (!repeat && !isArray && input != null) {
        rtn.push(input);
    }
    if (repeat && !isNaN(Number(repeat))) {
        const val = typeof (repeatValue) === 'undefined' ? input : repeatValue;
        while (rtn.length < repeat) {
            rtn.push(val);
        }
    }
    return rtn;
}
function arrayOfObjects(input, repeat, repeatValue) {
    return array(input, repeat, repeatValue).map((v, i) => ({ value: v, index: i }));
}
function markdownAnchor(input) {
    input = input.toString().replace(/&/gi, 'amp');
    input = input.toString().replace(/ /gi, '-');
    input = input.replace(/[^a-z0-9_-]/gi, '');
    return input.toLowerCase();
}
function textDownload(input) {
    if (input == null)
        return input;
    return 'data:text/plain;charset=utf-8,' + encodeURIComponent(input);
}
function yesno(input) {
    if (input == null)
        return input;
    return input ? 'yes' : 'no';
}
function yesNo(input) {
    if (input == null)
        return input;
    return input ? 'Yes' : 'No';
}
function boolean(input) {
    if (input == null)
        return false;
    const num = Number(input);
    if (!isNaN(num)) {
        return Boolean(num) ? true : false;
    }
    if (input.toLowerCase) {
        if (input.toLowerCase() == 'true')
            return true;
        if (input.toLowerCase() == 'false')
            return false;
    }
    return Boolean(input) ? true : false;
}
function bit(input) {
    return boolean(input) ? 1 : 0;
}
function numbers(input, safeChars) {
    let xString = '[^0-9';
    if (safeChars) {
        if (safeChars.length > 4) {
            safeChars = safeChars.substring(0, 4);
        }
        xString += safeChars;
    }
    xString += ']';
    const regX = new RegExp(xString, 'g');
    return input ? String(input).replace(regX, '') : input;
}
function capitalizeWords(input) {
    var reg = /[^\W_]+[^\s-]* */g;
    return (!!input) ? input.replace(reg, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }) : '';
}
function capitalize(input) {
    input = pipes.capitalizeOne(input);
    var reg = /[.?!][\s\r\t]+\w/g;
    return (!!input) ? input.replace(reg, pipes.capitalizeAfterSentence) : '';
}
function capitalizeAfterSentence(input) {
    var reg = /[\s\r\t]\w/g;
    return (!!input) ? input.replace(reg, function (txt) { return txt.charAt(0) + txt.charAt(1).toUpperCase() + txt.substr(2).toLowerCase(); }) : '';
}
function capitalizeOne(input) {
    var reg = /[^\W_]+[^\s-]*/;
    return (!!input) ? input.replace(reg, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }) : '';
}
function a(name) {
    const av = new ack_x_es_index_browser__WEBPACK_IMPORTED_MODULE_0__["ack"]();
    return Object(_invokeRotator__WEBPACK_IMPORTED_MODULE_1__["invokeRotator"])(av[name]);
}

const aDate = a('date');
const aTime = a('time');
const aMath = Object(_invokeRotator__WEBPACK_IMPORTED_MODULE_1__["invokeRotator"])(Math);
const aString = Object(_invokeRotator__WEBPACK_IMPORTED_MODULE_1__["invokeRotator"])(String);
const ack = Object(_invokeRotator__WEBPACK_IMPORTED_MODULE_1__["invokeRotator"])(ack_x_es_index_browser__WEBPACK_IMPORTED_MODULE_0__["ack"]);
const pipes = {
    ack,
    aDate,
    aMath,
    array,
    aString,
    aTime,
    between,
    capitalize,
    capitalizeAfterSentence,
    capitalizeOne,
    capitalizeWords,
    numbers,
    numberSuffix,
    numberToPhone,
    markdownAnchor,
    replaceMaxLength,
    textDownload,
    toNumber,
    yesno,
    yesNo,
};


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
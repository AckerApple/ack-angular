(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":
/*!********************************************************!*\
  !*** ../node_modules/moment-mini/locale sync ^\.\/.*$ ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./locale": "../node_modules/moment-mini/locale/locale.js",
	"./locale.js": "../node_modules/moment-mini/locale/locale.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../node_modules/moment-mini/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "../package.json":
/*!***********************!*\
  !*** ../package.json ***!
  \***********************/
/*! exports provided: name, version, description, main, typings, scripts, repository, keywords, author, license, bugs, homepage, devDependencies, private, default */
/***/ (function(module) {

module.exports = {"name":"ack-angular","version":"1.12.0","description":"Extra special directives, components, providers and pipes to aide in tackling everyday interface development needs in Angular2","main":"dist/index.js","typings":"dist/index.d.ts","scripts":{"start":"ack-reload -d example/www","build:index":"pug example/src/index.pug --out example/src","build:css":"npm-run-all build:css:ack-css-boot build:css:csshake build:css:dist","stats":"webpack-bundle-analyzer example/www/stats.json","build:css:ack-css-boot":"ack-sass node_modules/ack-css-boot/scss/ack-css-boot.scss dist/ack-css-boot.css --production","build:css:csshake":"ack-sass node_modules/csshake/scss/csshake.scss dist/csshake.css --production","build:css:dist":"ack-sass src/ack-angular.scss dist/ack-angular.css --production","install:example":"npm install --prefix example","test":"ng test --browser PhantomJS --single-run","test:watch":"ng test","build:dist":"ngc --declaration --project src","watch:dist":"watch \"npm-run-all build:dist\" src/ --ignoreDirectoryPattern=/pugs/","build:assets":"npm-run-all build:assets:src build:assets:example","build:assets:src":"ack-pug-bundler src/components/pugs/ src/components/templates/ --oneToOne --outType ts","build:assets:example":"ack-pug-bundler example/src/pugs/ example/src/templates/ --oneToOne --outType ts","watch:assets":"npm-run-all --parallel \"build:assets:src -- --watch\" \"build:assets:example -- --watch\"","watch":"npm-run-all --parallel build:index watch:dist watch:assets watch:js","watch:js":"ng serve example --port 4201 --open","build:js":"ng build example --stats-json","build:universal":"npm-run-all build:index build:css build:assets compile:dist:package","build":"npm-run-all build:universal build:dist copy:scss build:js","copy:scss":"ack-path copy ./src/ack-angular.scss ./dist/ack-angular.scss","compile:dist:package":"node scripts/update-dist-package.js"},"repository":{"type":"git","url":"git+https://github.com/AckerApple/ack-angular.git"},"keywords":["ng","Angular","directives","components","pipes","providers"],"author":"Acker Dawn Apple","license":"MIT","bugs":{"url":"https://github.com/AckerApple/ack-angular/issues"},"homepage":"https://github.com/AckerApple/ack-angular#readme","devDependencies":{"@angular-devkit/build-angular":"~0.13.8","@angular/animations":"^7.2.12","@angular/cli":"^7.2.12","@angular/common":"^7.2.12","@angular/compiler":"^7.2.12","@angular/compiler-cli":"^7.2.12","@angular/core":"^7.2.12","@angular/forms":"^7.2.12","@angular/platform-browser":"^7.2.12","@angular/platform-browser-dynamic":"^7.2.12","@angular/router":"^7.2.12","@types/jasmine":"^3.3.12","ack-angular-fx":"^3.0.1","ack-css-boot":"^1.2.55","ack-path":"^1.5.19","ack-pug-bundler":"^1.4.0","ack-reload":"^2.0.12","ack-sass":"^1.1.1","ack-x":"^1.5.6","animate.css":"^3.7.0","classlist-polyfill":"^1.2.0","csshake":"^1.5.3","jasmine":"^3.4.0","karma":"^4.0.1","karma-chrome-launcher":"^2.2.0","karma-coverage-istanbul-reporter":"^2.0.5","karma-jasmine":"^2.0.1","karma-jasmine-html-reporter":"^1.4.0","karma-phantomjs-launcher":"^1.0.4","localforage":"^1.7.3","ngx-page-scroll":"^6.0.0-beta.1","ngx-page-scroll-core":"^6.0.0-beta.1","npm-run-all":"^4.1.5","phantomjs-prebuilt":"^2.1.16","pug":"^2.0.3","pug-cli":"^1.0.0-alpha6","reflect-metadata":"^0.1.13","rxjs":"^6.4.0","ts-helpers":"^1.1.2","ts-node":"^8.0.3","typescript":"3.2.2","webpack-bundle-analyzer":"^3.3.0","zone.js":"^0.9.0"},"private":true};

/***/ }),

/***/ "../src/AckModule.ts":
/*!***************************!*\
  !*** ../src/AckModule.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var AckModule_1;
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
const common_1 = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm2015/common.js");
const providers_1 = __webpack_require__(/*! ./providers */ "../src/providers.ts");
const declarations_1 = __webpack_require__(/*! ./declarations */ "../src/declarations.ts");
const pipes_1 = __webpack_require__(/*! ./pipes */ "../src/pipes.ts");
const declarations = [...declarations_1.declarations, ...pipes_1.declarations];
let AckModule = AckModule_1 = class AckModule {
    static forRoot() {
        return {
            ngModule: AckModule_1,
            providers: providers_1.providers
        };
    }
};
AckModule = AckModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            http_1.HttpClientModule
        ],
        declarations: declarations,
        exports: [
            http_1.HttpClientModule,
            ...declarations,
        ]
    })
], AckModule);
exports.AckModule = AckModule;


/***/ }),

/***/ "../src/RouteReporter.directive.ts":
/*!*****************************************!*\
  !*** ../src/RouteReporter.directive.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
const RouteWatchReporter_1 = __webpack_require__(/*! ./RouteWatchReporter */ "../src/RouteWatchReporter.ts");
const router_2 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
let RouteReporter = class RouteReporter {
    constructor(RouteWatchReporter, ActivatedRoute) {
        this.RouteWatchReporter = RouteWatchReporter;
        this.ActivatedRoute = ActivatedRoute;
        this.stateChanger = new core_1.EventEmitter();
        this.beforeChanger = new core_1.EventEmitter();
        this.activatedChange = new core_1.EventEmitter();
        this.paramsChange = new core_1.EventEmitter();
        this.dataChange = new core_1.EventEmitter();
        this.queryChange = new core_1.EventEmitter();
        this.routeChange = new core_1.EventEmitter();
        this.parentRouteChange = new core_1.EventEmitter();
        this.parentChange = new core_1.EventEmitter();
        this.parentDataChange = new core_1.EventEmitter();
        this.stateChange = new core_1.EventEmitter();
        this.$document = document;
        this.docCallbacks = RouteWatchReporter.getDocumentCallbacks();
        this.apply();
    }
    ngOnInit() {
        this.RouteWatchReporter.router.events.subscribe(event => {
            if (event.constructor === router_2.NavigationEnd) {
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
        const current = this.RouteWatchReporter.getCurrent();
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
RouteReporter.parameters = [[
        RouteWatchReporter_1.RouteWatchReporter
    ]];
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "onLoad", void 0);
__decorate([
    core_1.Output("onChange"),
    __metadata("design:type", Object)
], RouteReporter.prototype, "stateChanger", void 0);
__decorate([
    core_1.Output("beforeChange"),
    __metadata("design:type", Object)
], RouteReporter.prototype, "beforeChanger", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", router_1.ActivatedRoute)
], RouteReporter.prototype, "activated", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RouteReporter.prototype, "activatedChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "params", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RouteReporter.prototype, "paramsChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RouteReporter.prototype, "dataChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "query", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RouteReporter.prototype, "queryChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "route", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RouteReporter.prototype, "routeChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "parentRoute", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RouteReporter.prototype, "parentRouteChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", router_1.ActivatedRoute)
], RouteReporter.prototype, "parent", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RouteReporter.prototype, "parentChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "parentData", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RouteReporter.prototype, "parentDataChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "current", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "state", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RouteReporter.prototype, "stateChange", void 0);
RouteReporter = __decorate([
    core_1.Directive({
        selector: "route-reporter",
        exportAs: "RouteReporter"
    }),
    __metadata("design:paramtypes", [RouteWatchReporter_1.RouteWatchReporter,
        router_1.ActivatedRoute])
], RouteReporter);
exports.RouteReporter = RouteReporter;


/***/ }),

/***/ "../src/RouteWatchReporter.ts":
/*!************************************!*\
  !*** ../src/RouteWatchReporter.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
let RouteWatchReporter = class RouteWatchReporter {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.current = {};
        this.historyPos = 0;
        this.isBackMode = false;
        this.isOsAction = false;
        this.isNextBackMode = false;
        this.isNextBackHistory = false;
        this.activatedRoute = activatedRoute;
        this.$window = () => window;
        this.$history = [];
        router.events.subscribe(event => {
            if (event.constructor == router_1.NavigationEnd) {
                const current = this.getCurrent();
                this.recordStateChange(current.config, current.params);
            }
        });
        this.current = this.getCurrent();
    }
    getCurrent() {
        let parent = this.activatedRoute;
        let target = this.activatedRoute;
        while (target.firstChild) {
            parent = target;
            target = target.firstChild;
        }
        const snapshot = target.snapshot || {};
        const parentSnap = parent.snapshot || {};
        return {
            ActivatedRoute: target,
            config: (target.routeConfig || target),
            params: snapshot.params,
            parent: {
                ActivatedRoute: parent,
                config: (parent.routeConfig || parent),
                params: parentSnap.params
            }
        };
    }
    getCurrentConfig() {
        let target = this.activatedRoute;
        while (target.firstChild)
            target = target.firstChild;
        return (target.routeConfig || target);
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
RouteWatchReporter = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute])
], RouteWatchReporter);
exports.RouteWatchReporter = RouteWatchReporter;


/***/ }),

/***/ "../src/TemplateReader.class.ts":
/*!**************************************!*\
  !*** ../src/TemplateReader.class.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.TemplateReader = TemplateReader;


/***/ }),

/***/ "../src/components/AbsoluteOverflowX.component.ts":
/*!********************************************************!*\
  !*** ../src/components/AbsoluteOverflowX.component.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const absolute_overflow_x_pug_1 = __webpack_require__(/*! ./templates/absolute-overflow-x.pug */ "../src/components/templates/absolute-overflow-x.pug.ts");
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AbsoluteOverflowX.prototype, "scrollBars", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AbsoluteOverflowX.prototype, "wrapClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AbsoluteOverflowX.prototype, "active", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AbsoluteOverflowX.prototype, "overflow", void 0);
AbsoluteOverflowX = __decorate([
    core_1.Component({
        selector: 'absolute-overflow-x',
        template: absolute_overflow_x_pug_1.string
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], AbsoluteOverflowX);
exports.AbsoluteOverflowX = AbsoluteOverflowX;


/***/ }),

/***/ "../src/components/AckCloseIcon.component.ts":
/*!***************************************************!*\
  !*** ../src/components/AckCloseIcon.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const template = '<div style="display:inline-block;cursor:pointer;border:3px solid white;border-radius:50%;background-color:#666;color:white;text-align:center;font-family:Arial">' +
    '<div style="font-weight:bold;line-height:22px;font-size:23px;height:25px;width:25px">x</div>' +
    '</div>';
let AckCloseIcon = class AckCloseIcon {
};
AckCloseIcon = __decorate([
    core_1.Component({
        selector: 'ack-close-icon',
        template: template
    })
], AckCloseIcon);
exports.AckCloseIcon = AckCloseIcon;


/***/ }),

/***/ "../src/components/AckFixedElementStage.component.ts":
/*!***********************************************************!*\
  !*** ../src/components/AckFixedElementStage.component.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const AckApp_provider_1 = __webpack_require__(/*! ../providers/AckApp.provider */ "../src/providers/AckApp.provider.ts");
const ack_fixed_element_stage_pug_1 = __webpack_require__(/*! ./templates/ack-fixed-element-stage.pug */ "../src/components/templates/ack-fixed-element-stage.pug.ts");
let AckFixedElementStage = class AckFixedElementStage {
    constructor(AckApp, ElementRef) {
        this.AckApp = AckApp;
        this.ElementRef = ElementRef;
        AckApp.fixedElementStage = ElementRef;
    }
};
AckFixedElementStage = __decorate([
    core_1.Component({
        selector: 'ack-fixed-element-stage',
        template: ack_fixed_element_stage_pug_1.string
    }),
    __metadata("design:paramtypes", [AckApp_provider_1.AckApp, core_1.ElementRef])
], AckFixedElementStage);
exports.AckFixedElementStage = AckFixedElementStage;


/***/ }),

/***/ "../src/components/AckModal.component.ts":
/*!***********************************************!*\
  !*** ../src/components/AckModal.component.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const AckApp_provider_1 = __webpack_require__(/*! ../providers/AckApp.provider */ "../src/providers/AckApp.provider.ts");
const ack_modal_pug_1 = __webpack_require__(/*! ./templates/ack-modal.pug */ "../src/components/templates/ack-modal.pug.ts");
let AckModal = class AckModal {
    constructor(element, AckApp) {
        this.element = element;
        this.AckApp = AckApp;
        this.allowClose = true;
        this.zIndex = 20;
        this.showModelChange = new core_1.EventEmitter();
        this.close = new core_1.EventEmitter();
    }
    ngOnInit() {
        this.determineStage();
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
__decorate([
    core_1.ContentChild('body'),
    __metadata("design:type", core_1.TemplateRef)
], AckModal.prototype, "body", void 0);
__decorate([
    core_1.ViewChild('placeholder'),
    __metadata("design:type", core_1.ElementRef)
], AckModal.prototype, "layout", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AckModal.prototype, "inline", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AckModal.prototype, "isModelMode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AckModal.prototype, "allowClose", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AckModal.prototype, "zIndex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AckModal.prototype, "wrapStyle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AckModal.prototype, "wrapCellStyle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AckModal.prototype, "backgroundColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AckModal.prototype, "showModel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AckModal.prototype, "showModelChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AckModal.prototype, "close", void 0);
AckModal = __decorate([
    core_1.Component({
        selector: "ack-modal",
        template: ack_modal_pug_1.string
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        AckApp_provider_1.AckApp])
], AckModal);
exports.AckModal = AckModal;


/***/ }),

/***/ "../src/components/AckModalLayout.component.ts":
/*!*****************************************************!*\
  !*** ../src/components/AckModalLayout.component.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const AckApp_provider_1 = __webpack_require__(/*! ../providers/AckApp.provider */ "../src/providers/AckApp.provider.ts");
const ack_angular_fx_1 = __webpack_require__(/*! ack-angular-fx */ "../node_modules/ack-angular-fx/dist/index.js");
const ack_modal_layout_pug_1 = __webpack_require__(/*! ./templates/ack-modal-layout.pug */ "../src/components/templates/ack-modal-layout.pug.ts");
let AckModalLayout = class AckModalLayout {
    constructor(element, AckApp) {
        this.element = element;
        this.AckApp = AckApp;
        this.zIndex = 20;
        this.close = new core_1.EventEmitter();
        this.allowClose = true;
        this.isModelMode = false;
        this.showModel = true;
        this.showModelChange = new core_1.EventEmitter();
        setTimeout(() => this.clickListenForClose(), 400);
    }
    clickListenForClose() {
        this.element.nativeElement.addEventListener('click', event => {
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
        Promise.resolve().then(() => {
            if (this.isModelMode || (this.isModelMode == null && this.showModelChange.observers.length)) {
                this.isModelMode = true;
            }
        });
    }
    fireClose() {
        this.showModelChange.emit(this.showModel = false);
        this.close.emit(this);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AckModalLayout.prototype, "zIndex", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AckModalLayout.prototype, "close", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AckModalLayout.prototype, "allowClose", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AckModalLayout.prototype, "wrapStyle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AckModalLayout.prototype, "wrapCellStyle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AckModalLayout.prototype, "backgroundColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AckModalLayout.prototype, "isModelMode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AckModalLayout.prototype, "showModel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AckModalLayout.prototype, "showModelChange", void 0);
AckModalLayout = __decorate([
    core_1.Component({
        selector: 'ack-modal-layout',
        template: ack_modal_layout_pug_1.string,
        animations: ack_angular_fx_1.animations
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        AckApp_provider_1.AckApp])
], AckModalLayout);
exports.AckModalLayout = AckModalLayout;


/***/ }),

/***/ "../src/components/AckOptions.component.ts":
/*!*************************************************!*\
  !*** ../src/components/AckOptions.component.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const pipes_class_1 = __webpack_require__(/*! ../pipes.class */ "../src/pipes.class.ts");
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const TemplateReader_class_1 = __webpack_require__(/*! ../TemplateReader.class */ "../src/TemplateReader.class.ts");
const ack_options_pug_1 = __webpack_require__(/*! ./templates/ack-options.pug */ "../src/components/templates/ack-options.pug.ts");
let AckOptions = class AckOptions {
    constructor(ElementRef) {
        this.ElementRef = ElementRef;
        this.array = [];
        this.stylize = true;
        this.TemplateReader = new TemplateReader_class_1.TemplateReader({
            lastTemplateName: "templateRef",
            types: {
                option: "templateRef",
                selected: "selected"
            }
        });
        this.modelChange = new core_1.EventEmitter();
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
        this.model = pipes_class_1.array(this.model);
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AckOptions.prototype, "array", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AckOptions.prototype, "stylize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AckOptions.prototype, "multiple", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AckOptions.prototype, "modelAsArray", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AckOptions.prototype, "max", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AckOptions.prototype, "toggleable", void 0);
__decorate([
    core_1.ContentChildren(core_1.TemplateRef),
    __metadata("design:type", Object)
], AckOptions.prototype, "templateRefs", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AckOptions.prototype, "inputTemplateRefs", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AckOptions.prototype, "model", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AckOptions.prototype, "modelChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AckOptions.prototype, "arrayKey", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AckOptions.prototype, "modelKey", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AckOptions.prototype, "arrayToModelKey", void 0);
AckOptions = __decorate([
    core_1.Component({
        selector: "ack-options",
        template: ack_options_pug_1.string
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], AckOptions);
exports.AckOptions = AckOptions;
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
exports.getParentByTagName = getParentByTagName;


/***/ }),

/***/ "../src/components/AckOptionsModal.component.ts":
/*!******************************************************!*\
  !*** ../src/components/AckOptionsModal.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const AckOptions_component_1 = __webpack_require__(/*! ./AckOptions.component */ "../src/components/AckOptions.component.ts");
const ack_options_modal_pug_1 = __webpack_require__(/*! ./templates/ack-options-modal.pug */ "../src/components/templates/ack-options-modal.pug.ts");
let AckOptionsModal = class AckOptionsModal extends AckOptions_component_1.AckOptions {
    constructor() {
        super(...arguments);
        this.allowClose = true;
        this.close = new core_1.EventEmitter();
        this.backgroundColorChange = new core_1.EventEmitter();
        this.showModel = true;
        this.showModelChange = new core_1.EventEmitter();
    }
    fireModelChange(model) {
        if (!this.multiple)
            this.close.emit();
        this.modelChange.emit(model);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AckOptionsModal.prototype, "allowClose", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AckOptionsModal.prototype, "wrapStyle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AckOptionsModal.prototype, "wrapCellStyle", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AckOptionsModal.prototype, "close", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AckOptionsModal.prototype, "backgroundColor", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AckOptionsModal.prototype, "backgroundColorChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AckOptionsModal.prototype, "showModel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AckOptionsModal.prototype, "showModelChange", void 0);
AckOptionsModal = __decorate([
    core_1.Component({
        selector: 'ack-options-modal',
        template: ack_options_modal_pug_1.string
    })
], AckOptionsModal);
exports.AckOptionsModal = AckOptionsModal;


/***/ }),

/***/ "../src/components/AckSectionTemplates.component.ts":
/*!**********************************************************!*\
  !*** ../src/components/AckSectionTemplates.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const AckSections_provider_1 = __webpack_require__(/*! ../providers/AckSections.provider */ "../src/providers/AckSections.provider.ts");
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
__decorate([
    core_1.ContentChild('sectionHeader'),
    __metadata("design:type", core_1.TemplateRef)
], AckSectionTemplates.prototype, "header", void 0);
__decorate([
    core_1.ContentChild('sectionFooter'),
    __metadata("design:type", core_1.TemplateRef)
], AckSectionTemplates.prototype, "footer", void 0);
__decorate([
    core_1.ContentChild('sectionLeftBody'),
    __metadata("design:type", core_1.TemplateRef)
], AckSectionTemplates.prototype, "leftBody", void 0);
__decorate([
    core_1.ContentChild('sectionRightBody'),
    __metadata("design:type", core_1.TemplateRef)
], AckSectionTemplates.prototype, "rightBody", void 0);
AckSectionTemplates = __decorate([
    core_1.Directive({
        selector: "ack-section-templates"
    }),
    __metadata("design:paramtypes", [AckSections_provider_1.SectionProvider])
], AckSectionTemplates);
exports.AckSectionTemplates = AckSectionTemplates;


/***/ }),

/***/ "../src/components/AckSections.component.ts":
/*!**************************************************!*\
  !*** ../src/components/AckSections.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const AckSections_provider_1 = __webpack_require__(/*! ../providers/AckSections.provider */ "../src/providers/AckSections.provider.ts");
const ack_sections_pug_1 = __webpack_require__(/*! ./templates/ack-sections.pug */ "../src/components/templates/ack-sections.pug.ts");
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
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AckSections.prototype, "mode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AckSections.prototype, "zIndex", void 0);
__decorate([
    core_1.ContentChild("table"),
    __metadata("design:type", core_1.TemplateRef)
], AckSections.prototype, "table", void 0);
__decorate([
    core_1.ContentChild("headerWrap"),
    __metadata("design:type", core_1.TemplateRef)
], AckSections.prototype, "headerWrap", void 0);
__decorate([
    core_1.ContentChild("bodyCell"),
    __metadata("design:type", core_1.TemplateRef)
], AckSections.prototype, "bodyCell", void 0);
__decorate([
    core_1.ContentChild("leftBodyWrap"),
    __metadata("design:type", core_1.TemplateRef)
], AckSections.prototype, "leftBodyWrap", void 0);
__decorate([
    core_1.ContentChild("rightBodyWrap"),
    __metadata("design:type", core_1.TemplateRef)
], AckSections.prototype, "rightBodyWrap", void 0);
AckSections = __decorate([
    core_1.Component({
        selector: 'ack-sections',
        template: ack_sections_pug_1.string,
        providers: [AckSections_provider_1.SectionProvider]
    }),
    __metadata("design:paramtypes", [AckSections_provider_1.SectionProvider,
        core_1.ElementRef])
], AckSections);
exports.AckSections = AckSections;


/***/ }),

/***/ "../src/components/ErrorWell.component.ts":
/*!************************************************!*\
  !*** ../src/components/ErrorWell.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const ack_angular_fx_1 = __webpack_require__(/*! ack-angular-fx */ "../node_modules/ack-angular-fx/dist/index.js");
const error_well_pug_1 = __webpack_require__(/*! ./templates/error-well.pug */ "../src/components/templates/error-well.pug.ts");
let ErrorWell = class ErrorWell {
    constructor() {
        this.message = 'Unexpected Error Occured';
        this.closable = true;
        this.allowDetails = true;
        this.close = new core_1.EventEmitter();
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ErrorWell.prototype, "moreDetails", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ErrorWell.prototype, "message", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Error)
], ErrorWell.prototype, "error", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ErrorWell.prototype, "cssClasses", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ErrorWell.prototype, "closable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ErrorWell.prototype, "allowDetails", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ErrorWell.prototype, "close", void 0);
__decorate([
    core_1.ContentChild("titleFooter"),
    __metadata("design:type", core_1.TemplateRef)
], ErrorWell.prototype, "titleFooter", void 0);
ErrorWell = __decorate([
    core_1.Component({
        selector: 'error-well',
        template: error_well_pug_1.string,
        animations: ack_angular_fx_1.animations
    })
], ErrorWell);
exports.ErrorWell = ErrorWell;


/***/ }),

/***/ "../src/components/ReaderHeaderBody.component.ts":
/*!*******************************************************!*\
  !*** ../src/components/ReaderHeaderBody.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const reader_header_body_pug_1 = __webpack_require__(/*! ./templates/reader-header-body.pug */ "../src/components/templates/reader-header-body.pug.ts");
let ReaderHeaderBody = class ReaderHeaderBody {
};
__decorate([
    core_1.ContentChild('reader-header'),
    __metadata("design:type", core_1.TemplateRef)
], ReaderHeaderBody.prototype, "readerHeader", void 0);
ReaderHeaderBody = __decorate([
    core_1.Component({
        selector: 'reader-header-body',
        template: reader_header_body_pug_1.string
    })
], ReaderHeaderBody);
exports.ReaderHeaderBody = ReaderHeaderBody;
let ReaderHeader = class ReaderHeader {
};
ReaderHeader = __decorate([
    core_1.Directive({
        selector: 'reader-header'
    })
], ReaderHeader);
exports.ReaderHeader = ReaderHeader;
let ReaderBody = class ReaderBody {
    constructor(element) {
        this.element = element;
        element.nativeElement.style.height = '100%';
        element.nativeElement.style.display = 'block';
    }
};
__decorate([
    core_1.ContentChild('reader-header'),
    __metadata("design:type", core_1.TemplateRef)
], ReaderBody.prototype, "readerHeader", void 0);
ReaderBody = __decorate([
    core_1.Directive({
        selector: "reader-body"
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ReaderBody);
exports.ReaderBody = ReaderBody;


/***/ }),

/***/ "../src/components/ScrollPastFixed.component.ts":
/*!******************************************************!*\
  !*** ../src/components/ScrollPastFixed.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const scroll_past_fixed_pug_1 = __webpack_require__(/*! ./templates/scroll-past-fixed.pug */ "../src/components/templates/scroll-past-fixed.pug.ts");
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
__decorate([
    core_1.ViewChild('template'),
    __metadata("design:type", core_1.TemplateRef)
], ScrollPastFixed.prototype, "template", void 0);
ScrollPastFixed = __decorate([
    core_1.Component({
        selector: 'scroll-past-fixed',
        template: scroll_past_fixed_pug_1.string
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ScrollPastFixed);
exports.ScrollPastFixed = ScrollPastFixed;
function getDistanceFromTop(element) {
    let yPos = 0;
    while (element) {
        yPos += (element.offsetTop);
        element = element.offsetParent;
    }
    return yPos;
}
exports.getDistanceFromTop = getDistanceFromTop;


/***/ }),

/***/ "../src/components/templates/absolute-overflow-x.pug.ts":
/*!**************************************************************!*\
  !*** ../src/components/templates/absolute-overflow-x.pug.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<div [(elementHeightModel)]=\"elementHeightModel\" [ngClass]=\"wrapClass\" [class.no-scroll-bars]=\"active &amp;&amp; !scrollBars &amp;&amp; scrollBars!=null\" [ngStyle]=\"active ? {overflow:overflow,position:'absolute',width:'100%'} : {}\"><ng-content></ng-content></div><div *ngIf=\"elementHeightModel &amp;&amp; active\" style=\"visibility:hidden;overflow:hidden;width:100%\" [style.height.px]=\"elementHeightModel\">&nbsp;</div>";


/***/ }),

/***/ "../src/components/templates/ack-fixed-element-stage.pug.ts":
/*!******************************************************************!*\
  !*** ../src/components/templates/ack-fixed-element-stage.pug.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<ng-container *ngFor=\"let prompt of AckApp.prompts.prompts;let i=index\"><ack-modal-layout zIndex=\"99\" [allowClose]=\"0\"><div style=\"text-align:left;max-width:900px;border:1px solid #DDD;border-radius:5px;margin:1em;padding:1em;background-color:white;\"><h3 *ngIf=\"prompt.title\" style=\"margin-top:0;\">{{ prompt.title }}</h3><div style=\"padding-right:1em;\">{{ prompt.message }}</div><br/><br/><div style=\"text-align:right;\"><a *ngIf=\"prompt.type=='confirm'\" (click)=\"prompt.emitter.emit(false)\" style=\"text-align:center;display:inline-block;min-width:75px;border-radius:3px;border:1px solid #AAA;padding:0 .5em;margin-right:.5em;\">Cancel</a><a (click)=\"prompt.emitter.emit(true)\" style=\"text-align:center;display:inline-block;min-width:75px;border-radius:3px;border:1px solid #AAA;padding:0 .5em;\" [ngStyle]=\"{'font-weight':prompt.type=='confirm' ? 'bold' : null}\">OK</a></div></div></ack-modal-layout></ng-container><ng-container *ngFor=\"let item of AckApp.modals\"><ng-container *ngIf=\"!item.isModelMode || item.showModel\"><ng-template [ngTemplateOutlet]=\"item.layout\"></ng-template></ng-container></ng-container>";


/***/ }),

/***/ "../src/components/templates/ack-modal-layout.pug.ts":
/*!***********************************************************!*\
  !*** ../src/components/templates/ack-modal-layout.pug.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<div *ngIf=\"showModel || !isModelMode\" [@fadeInOutUp]=\"1\" style=\"position:fixed;top:0;left:0;height:100%;width:100%;overflow:auto;\" [style.z-index]=\"zIndex || 20\"><div style=\"height:100%;width:100%;padding:20px;display:inline-table;\" [ngStyle]=\"{'background-color':backgroundColor || 'rgba(255,255,255,0.95)'}\"><table style=\"height:100%;margin:auto\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" [ngStyle]=\"wrapStyle\"><tr><td (click)=\"allowClose ? fireClose() : 0\"></td></tr><tr><td valign=\"top\" [ngStyle]=\"wrapCellStyle\"><div *ngIf=\"allowClose\" style=\"position:relative\"><div style=\"position:absolute;bottom:-17px;right:-16px;border:1px solid #DDD;border-radius:50%;z-index:20\"><ack-close-icon (click)=\"fireClose()\"></ack-close-icon></div></div><ng-content></ng-content></td></tr><tr><td (click)=\"allowClose ? fireClose() : 0\"></td></tr></table></div></div>";


/***/ }),

/***/ "../src/components/templates/ack-modal.pug.ts":
/*!****************************************************!*\
  !*** ../src/components/templates/ack-modal.pug.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<ng-template #placeholder=\"\"><ack-modal-layout [zIndex]=\"zIndex\" (close)=\"close.emit($event)\" [isModelMode]=\"isModelMode==null ? showModelChange.observers.length : isModelMode\" [showModel]=\"showModel\" (showModelChange)=\"showModelChange.emit(showModel=$event)\" [backgroundColor]=\"backgroundColor\" [wrapStyle]=\"wrapStyle\" [wrapCellStyle]=\"wrapCellStyle\" [allowClose]=\"allowClose\"><ng-template [ngTemplateOutlet]=\"body\"></ng-template><ng-content *ngIf=\"!body\"></ng-content></ack-modal-layout></ng-template><ng-template *ngIf=\"!AckApp.fixedElementStage || inline\" [ngTemplateOutlet]=\"layout\"></ng-template>";


/***/ }),

/***/ "../src/components/templates/ack-options-modal.pug.ts":
/*!************************************************************!*\
  !*** ../src/components/templates/ack-options-modal.pug.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<ack-modal (close)=\"close.emit($event)\" [allowClose]=\"allowClose\" [showModel]=\"showModel\" (showModelChange)=\"showModelChange.emit($event)\" [isModelMode]=\"showModelChange.observers.length\" [wrapStyle]=\"wrapStyle\" [wrapCellStyle]=\"wrapCellStyle\" [backgroundColor]=\"backgroundColor\" (backgroundColorChange)=\"backgroundColorChange.emit($event)\"><ng-content></ng-content><div class=\"border-grey-6x border bg-white\"><ack-options #ackOptions=\"\" [array]=\"array\" [max]=\"max\" [modelAsArray]=\"modelAsArray\" [model]=\"model\" (modelChange)=\"fireModelChange($event)\" [multiple]=\"multiple\" [toggleable]=\"toggleable\" [stylize]=\"stylize\" [inputTemplateRefs]=\"templateRefs\" [arrayKey]=\"arrayKey\" [arrayToModelKey]=\"arrayToModelKey\" [modelKey]=\"modelKey\"></ack-options></div></ack-modal>";


/***/ }),

/***/ "../src/components/templates/ack-options.pug.ts":
/*!******************************************************!*\
  !*** ../src/components/templates/ack-options.pug.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<div [ngClass]=\"{'border-grey-6x border-top':stylize}\"></div><div *ngFor=\"let item of array|array\" (click)=\"selectItem(item)\" [ngClass]=\"getItemClass(item)\"><ng-template *ngIf=\"TemplateReader.templates.selected &amp;&amp; isItemSelected(item)\" [ngTemplateOutlet]=\"TemplateReader.templates.selected\" [ngTemplateOutletContext]=\"{item:item}\"></ng-template><ng-template *ngIf=\"TemplateReader.templates.templateRef &amp;&amp; (!TemplateReader.templates.selected || !isItemSelected(item))\" [ngTemplateOutlet]=\"TemplateReader.templates.templateRef\" [ngTemplateOutletContext]=\"{item:item, selected:isItemSelected(item)}\"></ng-template><span *ngIf=\"!TemplateReader.templates.templateRef\">{{ item }}</span></div>";


/***/ }),

/***/ "../src/components/templates/ack-sections.pug.ts":
/*!*******************************************************!*\
  !*** ../src/components/templates/ack-sections.pug.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<ng-container [(htmlHeightModel)]=\"htmlHeightModel\"></ng-container><ng-container *ngIf=\"SectionProvider.headerTemplates.length\"><div *ngIf=\"mode==='calculate'\" style=\"position:fixed;top:0;width:100%\" [style.z-index]=\"zIndex\" [(elementHeightModel)]=\"headerHeight\" [elementSizeModelWatch]=\"SectionProvider.headerTemplates.length\"><ng-template *ngTemplateOutlet=\"headerWrap || headerContent;context:{outlet:headerContent}\"></ng-template></div><ng-template #headerContent=\"\"><ng-container *ngFor=\"let item of SectionProvider.headerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></ng-template><div *ngIf=\"!mode || mode==='clone'\" style=\"position:fixed;top:0;width:100%\" [style.z-index]=\"zIndex\"><ng-template *ngTemplateOutlet=\"headerContent\"></ng-template></div></ng-container><ng-template *ngTemplateOutlet=\"table || defaultTableTag;context:{outlet:tableRows}\"></ng-template><ng-template #defaultTableTag=\"\"><table style=\"height:100%;width:100%;border-collapse: collapse;\" cellPadding=\"0\" cellSpacing=\"0\" border=\"0\"><ng-template *ngTemplateOutlet=\"tableRows\"></ng-template></table></ng-template><ng-template #tableRows=\"\"><tr *ngIf=\"SectionProvider.headerTemplates.length\"><td colspan=\"3\" [style.height.px]=\"headerHeight\" style=\"visibility:hidden\"><ng-container *ngIf=\"!mode || mode==='clone'\"><ng-container *ngFor=\"let item of SectionProvider.headerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></ng-container></td></tr><tr><td *ngIf=\"SectionProvider.leftBodyTemplates.length\" [style.min-width.px]=\"leftBodyWidth\" valign=\"top\" align=\"right\"><ng-template #defaultLeftBodyWrap=\"\"><div style=\"overflow:auto;height:100%;\"><ng-template *ngTemplateOutlet=\"leftBodyContent\"></ng-template></div></ng-template><ng-template #leftBodyContent=\"\"><ng-container *ngFor=\"let item of SectionProvider.leftBodyTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></ng-template><div *ngIf=\"mode==='calculate'\" style=\"position:fixed;\" [style.z-index]=\"zIndex - 1\" [style.height.px]=\"htmlHeightModel - (SectionProvider.headerTemplates.length ? headerHeight : 0) - (SectionProvider.footerTemplates.length ? footerHeight : 0)\" [(elementWidthModel)]=\"leftBodyWidth\" [elementSizeModelWatch]=\"SectionProvider.leftBodyTemplates.length\"><ng-template *ngTemplateOutlet=\"leftBodyWrap || defaultLeftBodyWrap;context:{outlet:leftBodyContent}\"></ng-template></div><div *ngIf=\"!mode || mode==='clone'\" style=\"position:fixed;top:0;\" [style.z-index]=\"zIndex - 1\"><ng-template *ngTemplateOutlet=\"leftBodyWrap || defaultLeftBodyWrap;context:{outlet:leftBodyContent}\"></ng-template></div><ng-container *ngIf=\"!mode || mode==='clone'\"><ng-template *ngTemplateOutlet=\"leftBodyWrap || defaultLeftBodyWrap;context:{outlet:leftBodyContent}\"></ng-template></ng-container></td><ng-container *ngTemplateOutlet=\"bodyCell || defaultBodyCell;context:{outlet:body}\"></ng-container><ng-template #defaultBodyCell=\"\"><td style=\"height:100%\" valign=\"top\"><ng-template *ngTemplateOutlet=\"body\"></ng-template></td></ng-template><ng-template #body=\"\"><ng-content></ng-content></ng-template><td *ngIf=\"SectionProvider.rightBodyTemplates.length\" [style.min-width.px]=\"rightBodyWidth\" valign=\"top\" align=\"left\"><ng-template #defaultRightBodyWrap=\"\"><div style=\"overflow:auto;height:100%;\"><ng-template *ngTemplateOutlet=\"rightBodyContent\"></ng-template></div></ng-template><ng-template #rightBodyContent=\"\"><ng-container *ngFor=\"let item of SectionProvider.rightBodyTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></ng-template><div *ngIf=\"mode==='calculate'\" style=\"position:fixed;\" [style.z-index]=\"zIndex - 1\" [style.height.px]=\"htmlHeightModel - (SectionProvider.headerTemplates.length ? headerHeight : 0) - (SectionProvider.footerTemplates.length ? footerHeight : 0)\" [(elementWidthModel)]=\"rightBodyWidth\" [elementSizeModelWatch]=\"SectionProvider.rightBodyTemplates.length\"><ng-template *ngTemplateOutlet=\"rightBodyWrap || defaultRightBodyWrap;context:{outlet:rightBodyContent}\"></ng-template></div><div *ngIf=\"!mode || mode==='clone'\" style=\"position:fixed;top:0;overflow:auto;\" [style.z-index]=\"zIndex - 1\"><ng-template *ngTemplateOutlet=\"rightBodyWrap || defaultRightBodyWrap;context:{outlet:rightBodyContent}\"></ng-template></div><ng-container *ngIf=\"!mode || mode==='clone'\"><ng-template *ngTemplateOutlet=\"rightBodyWrap || defaultRightBodyWrap;context:{outlet:rightBodyContent}\"></ng-template></ng-container></td></tr><tr *ngIf=\"SectionProvider.footerTemplates.length\"><td colspan=\"3\" [style.height.px]=\"footerHeight\"><div *ngIf=\"!mode || mode==='clone'\" style=\"visibility:hidden\"><ng-container *ngFor=\"let item of SectionProvider.footerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></div></td></tr></ng-template><ng-container *ngIf=\"SectionProvider.footerTemplates.length\"><div *ngIf=\"mode==='calculate'\" style=\"position:fixed;bottom:0;width:100%\" [style.z-index]=\"zIndex\" [(elementHeightModel)]=\"footerHeight\" [elementSizeModelWatch]=\"SectionProvider.footerTemplates.length\"><ng-container *ngFor=\"let item of SectionProvider.footerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></div><div *ngIf=\"!mode || mode==='clone'\" style=\"position:fixed;bottom:0;width:100%\" [style.z-index]=\"zIndex\"><ng-container *ngFor=\"let item of SectionProvider.footerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></div></ng-container>";


/***/ }),

/***/ "../src/components/templates/error-well.pug.ts":
/*!*****************************************************!*\
  !*** ../src/components/templates/error-well.pug.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<div *ngIf=\"error!=null &amp;&amp; errorClose!=error\" [@fadeInOutUp]=\"1\"><div *ngIf=\"error &amp;&amp; closable\" (click)=\"close.emit();errorClose=error\" style=\"position:relative\"><div style=\"position:absolute;bottom:-17px;right:-16px;border:1px solid #DDD;border-radius:50%;z-index:20\"><ack-close-icon></ack-close-icon></div></div><div class=\"pad-xxs\" *ngIf=\"error!=null &amp;&amp; errorClose!=error\" [@fadeInOutUp]=\"1\" [ngClass]=\"cssClasses\"><div class=\"flex-valign-center flex-wrap child-margin-xxs\"><div class=\"flex-1\"><div class=\"strong text-3x margin-0\" [class.cursor-pointer]=\"allowDetails\" (click)=\"!allowDetails || moreDetails=!moreDetails\">{{ getErrorMessage(error) }}</div></div><a class=\"text-blue underline text-xs\" *ngIf=\"allowDetails &amp;&amp; error &amp;&amp; (error|typeof)!='string'\" (click)=\"moreDetails=!moreDetails\">details</a></div><ng-container *ngTemplateOutlet=\"titleFooter\"></ng-container><div *ngIf=\"moreDetails\" [@fadeInOutUp]=\"1\"><absolute-overflow-x class=\"text-sm\"><pre class=\"margin-0 pad-xs\">{{ error|json }}</pre></absolute-overflow-x></div></div></div>";


/***/ }),

/***/ "../src/components/templates/reader-header-body.pug.ts":
/*!*************************************************************!*\
  !*** ../src/components/templates/reader-header-body.pug.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<div style=\"text-align:center;height:100%\"><div style=\"display:inline-block;width:100%;height:100%;max-width:1000px\"><div style=\"width:100%;height:100%;\"><table cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%;height:100%;\"><tr *ngIf=\"readerHeader\"><td><ng-template *ngTemplateOutlet=\"readerHeader\"></ng-template></td></tr><tr><td style=\"height:100%\"><ng-content></ng-content></td></tr></table></div></div></div>";


/***/ }),

/***/ "../src/components/templates/scroll-past-fixed.pug.ts":
/*!************************************************************!*\
  !*** ../src/components/templates/scroll-past-fixed.pug.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<div style=\"width:100%;top:0;z-index:1\" [style.position]=\"currentPosition\"><ng-content></ng-content></div><div [style.height.px]=\"fillHeight\"></div>";


/***/ }),

/***/ "../src/declarations.ts":
/*!******************************!*\
  !*** ../src/declarations.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const AckSections_component_1 = __webpack_require__(/*! ./components/AckSections.component */ "../src/components/AckSections.component.ts");
const AckSectionTemplates_component_1 = __webpack_require__(/*! ./components/AckSectionTemplates.component */ "../src/components/AckSectionTemplates.component.ts");
const AckModal_component_1 = __webpack_require__(/*! ./components/AckModal.component */ "../src/components/AckModal.component.ts");
const AckModalLayout_component_1 = __webpack_require__(/*! ./components/AckModalLayout.component */ "../src/components/AckModalLayout.component.ts");
const AckCloseIcon_component_1 = __webpack_require__(/*! ./components/AckCloseIcon.component */ "../src/components/AckCloseIcon.component.ts");
const AckOptions_component_1 = __webpack_require__(/*! ./components/AckOptions.component */ "../src/components/AckOptions.component.ts");
const AckOptionsModal_component_1 = __webpack_require__(/*! ./components/AckOptionsModal.component */ "../src/components/AckOptionsModal.component.ts");
const AbsoluteOverflowX_component_1 = __webpack_require__(/*! ./components/AbsoluteOverflowX.component */ "../src/components/AbsoluteOverflowX.component.ts");
const ErrorWell_component_1 = __webpack_require__(/*! ./components/ErrorWell.component */ "../src/components/ErrorWell.component.ts");
const AckFixedElementStage_component_1 = __webpack_require__(/*! ./components/AckFixedElementStage.component */ "../src/components/AckFixedElementStage.component.ts");
const ReaderHeaderBody_component_1 = __webpack_require__(/*! ./components/ReaderHeaderBody.component */ "../src/components/ReaderHeaderBody.component.ts");
const AckArray_directive_1 = __webpack_require__(/*! ./directives/AckArray.directive */ "../src/directives/AckArray.directive.ts");
const AckAggregate_directive_1 = __webpack_require__(/*! ./directives/AckAggregate.directive */ "../src/directives/AckAggregate.directive.ts");
const ScrollPastFixed_component_1 = __webpack_require__(/*! ./components/ScrollPastFixed.component */ "../src/components/ScrollPastFixed.component.ts");
const ShakeOn_directive_1 = __webpack_require__(/*! ./directives/ShakeOn.directive */ "../src/directives/ShakeOn.directive.ts");
const FxOn_directive_1 = __webpack_require__(/*! ./directives/FxOn.directive */ "../src/directives/FxOn.directive.ts");
const FocusOn_directive_1 = __webpack_require__(/*! ./directives/FocusOn.directive */ "../src/directives/FocusOn.directive.ts");
const Init_directive_1 = __webpack_require__(/*! ./directives/Init.directive */ "../src/directives/Init.directive.ts");
const SelectOn_directive_1 = __webpack_require__(/*! ./directives/SelectOn.directive */ "../src/directives/SelectOn.directive.ts");
const InnerHtmlModel_directive_1 = __webpack_require__(/*! ./directives/InnerHtmlModel.directive */ "../src/directives/InnerHtmlModel.directive.ts");
const ReplaceModel_directive_1 = __webpack_require__(/*! ./directives/ReplaceModel.directive */ "../src/directives/ReplaceModel.directive.ts");
const ElementSizeModel_directive_1 = __webpack_require__(/*! ./directives/ElementSizeModel.directive */ "../src/directives/ElementSizeModel.directive.ts");
const ScreenScrollHeightDiff_directive_1 = __webpack_require__(/*! ./directives/ScreenScrollHeightDiff.directive */ "../src/directives/ScreenScrollHeightDiff.directive.ts");
const ScreenScroll_directive_1 = __webpack_require__(/*! ./directives/ScreenScroll.directive */ "../src/directives/ScreenScroll.directive.ts");
const PxFromHtmlTop_directive_1 = __webpack_require__(/*! ./directives/PxFromHtmlTop.directive */ "../src/directives/PxFromHtmlTop.directive.ts");
const ScreenScrollModelY_directive_1 = __webpack_require__(/*! ./directives/ScreenScrollModelY.directive */ "../src/directives/ScreenScrollModelY.directive.ts");
const ScreenWidthModel_directive_1 = __webpack_require__(/*! ./directives/ScreenWidthModel.directive */ "../src/directives/ScreenWidthModel.directive.ts");
const ScreenHeightModel_directive_1 = __webpack_require__(/*! ./directives/ScreenHeightModel.directive */ "../src/directives/ScreenHeightModel.directive.ts");
const HtmlWidthModel_directive_1 = __webpack_require__(/*! ./directives/HtmlWidthModel.directive */ "../src/directives/HtmlWidthModel.directive.ts");
const HtmlHeightModel_directive_1 = __webpack_require__(/*! ./directives/HtmlHeightModel.directive */ "../src/directives/HtmlHeightModel.directive.ts");
const StatusOnlineModel_directive_1 = __webpack_require__(/*! ./directives/StatusOnlineModel.directive */ "../src/directives/StatusOnlineModel.directive.ts");
const StatusOfflineModel_directive_1 = __webpack_require__(/*! ./directives/StatusOfflineModel.directive */ "../src/directives/StatusOfflineModel.directive.ts");
const VarDirective_directive_1 = __webpack_require__(/*! ./directives/VarDirective.directive */ "../src/directives/VarDirective.directive.ts");
let EnterKey = class EnterKey {
    constructor(element) {
        this.element = element;
        this.enterKey = new core_1.EventEmitter();
        element.nativeElement.addEventListener('keydown', (event) => {
            var yesNo = [13, 10].indexOf(event.which || event.keyCode) >= 0;
            if (yesNo) {
                this.enterKey.emit(event);
            }
        });
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], EnterKey.prototype, "enterKey", void 0);
EnterKey = __decorate([
    core_1.Directive({ selector: '[enterKey]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], EnterKey);
exports.EnterKey = EnterKey;
let EscapeKey = class EscapeKey {
    constructor(element) {
        this.element = element;
        this.escapeKey = new core_1.EventEmitter();
        element.nativeElement.addEventListener('keydown', (event) => {
            const code = event.which || event.keyCode;
            if (code == 27) {
                this.escapeKey.emit(event);
            }
        });
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], EscapeKey.prototype, "escapeKey", void 0);
EscapeKey = __decorate([
    core_1.Directive({ selector: '[escapeKey]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], EscapeKey);
exports.EscapeKey = EscapeKey;
let PreventBackKey = class PreventBackKey {
    constructor(element) {
        this.element = element;
        this.preventBackKey = new core_1.EventEmitter();
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
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PreventBackKey.prototype, "preventBackKey", void 0);
PreventBackKey = __decorate([
    core_1.Directive({ selector: '[preventBackKey]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], PreventBackKey);
exports.PreventBackKey = PreventBackKey;
let PreventEnterKey = class PreventEnterKey {
    constructor(element) {
        this.element = element;
        this.preventEnterKey = new core_1.EventEmitter();
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
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PreventEnterKey.prototype, "preventEnterKey", void 0);
PreventEnterKey = __decorate([
    core_1.Directive({ selector: '[preventEnterKey]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], PreventEnterKey);
exports.PreventEnterKey = PreventEnterKey;
let InputHint = class InputHint {
    constructor() {
        this.hintStyle = { 'font-size': '75%', 'color': '#BBB' };
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], InputHint.prototype, "hintStyle", void 0);
InputHint = __decorate([
    core_1.Component({
        selector: 'input-hint',
        template: '<div style="position:relative;" [ngStyle]="hintStyle"><div style="position:absolute;top:0;width:100%"><ng-content></ng-content></div></div>'
    })
], InputHint);
exports.InputHint = InputHint;
let FormChanged = class FormChanged {
    constructor(element) {
        this.element = element;
        this.formChanged = new core_1.EventEmitter();
        this.onChange = (event) => {
            this.formChanged.emit(event);
        };
        element.nativeElement.addEventListener('change', this.onChange);
    }
    ngOnDestroy() {
        this.element.nativeElement.removeEventListener('change', this.onChange);
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FormChanged.prototype, "formChanged", void 0);
FormChanged = __decorate([
    core_1.Directive({
        selector: '[formChanged]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FormChanged);
exports.FormChanged = FormChanged;
let FormAlter = class FormAlter {
    constructor(element) {
        this.element = element;
        this.formAlter = new core_1.EventEmitter();
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
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FormAlter.prototype, "formAlter", void 0);
FormAlter = __decorate([
    core_1.Directive({
        selector: '[formAlter]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FormAlter);
exports.FormAlter = FormAlter;
exports.screenDirectives = [
    ScreenScrollModelY_directive_1.ScreenScrollModelY,
    ScreenWidthModel_directive_1.ScreenWidthModel,
    ScreenHeightModel_directive_1.ScreenHeightModel,
    ScreenScroll_directive_1.ScreenScroll,
    ScrollPastFixed_component_1.ScrollPastFixed,
    ScreenScrollHeightDiff_directive_1.ScreenScrollHeightDiff,
    PxFromHtmlTop_directive_1.PxFromHtmlTop
];
exports.declarations = [
    Init_directive_1.Init,
    SelectOn_directive_1.SelectOn,
    FocusOn_directive_1.FocusOn,
    VarDirective_directive_1.VarDirective,
    InnerHtmlModel_directive_1.InnerHtmlModel,
    ReplaceModel_directive_1.ReplaceModel,
    FormAlter,
    FormChanged,
    EnterKey,
    EscapeKey,
    PreventBackKey,
    PreventEnterKey,
    ...exports.screenDirectives,
    HtmlWidthModel_directive_1.HtmlWidthModel,
    HtmlHeightModel_directive_1.HtmlHeightModel,
    ShakeOn_directive_1.ShakeOn,
    FxOn_directive_1.FxOn,
    StatusOnlineModel_directive_1.StatusOnlineModel,
    StatusOfflineModel_directive_1.StatusOfflineModel,
    ElementSizeModel_directive_1.ElementSizeModel,
    ElementSizeModel_directive_1.ElementWidthModel,
    ElementSizeModel_directive_1.ElementHeightModel,
    InputHint,
    ErrorWell_component_1.ErrorWell,
    AbsoluteOverflowX_component_1.AbsoluteOverflowX,
    ReaderHeaderBody_component_1.ReaderHeaderBody,
    ReaderHeaderBody_component_1.ReaderHeader,
    ReaderHeaderBody_component_1.ReaderBody,
    AckCloseIcon_component_1.AckCloseIcon,
    AckSections_component_1.AckSections,
    AckSectionTemplates_component_1.AckSectionTemplates,
    AckOptions_component_1.AckOptions,
    AckOptionsModal_component_1.AckOptionsModal,
    AckModal_component_1.AckModal,
    AckModalLayout_component_1.AckModalLayout,
    AckArray_directive_1.AckArray,
    AckAggregate_directive_1.AckAggregate,
    AckFixedElementStage_component_1.AckFixedElementStage
];


/***/ }),

/***/ "../src/directives/AckAggregate.directive.ts":
/*!***************************************************!*\
  !*** ../src/directives/AckAggregate.directive.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
let AckAggregate = class AckAggregate {
    constructor() {
        this.outputChange = new core_1.EventEmitter();
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AckAggregate.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AckAggregate.prototype, "keys", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AckAggregate.prototype, "output", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AckAggregate.prototype, "outputChange", void 0);
AckAggregate = __decorate([
    core_1.Directive({
        selector: 'ack-aggregate'
    })
], AckAggregate);
exports.AckAggregate = AckAggregate;


/***/ }),

/***/ "../src/directives/AckArray.directive.ts":
/*!***********************************************!*\
  !*** ../src/directives/AckArray.directive.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const AckAggregate_directive_1 = __webpack_require__(/*! ./AckAggregate.directive */ "../src/directives/AckAggregate.directive.ts");
let AckArray = class AckArray {
    constructor(_iterableDiffers) {
        this._iterableDiffers = _iterableDiffers;
        this.pushed = {};
        this.inSort = false;
        this.sortArray = [];
        this.pageAt = 0;
        this.pagesChange = new core_1.EventEmitter();
        this.page = 0;
        this.pageChange = new core_1.EventEmitter();
        this.arrayChange = new core_1.EventEmitter();
        this.keyMapChange = new core_1.EventEmitter();
        this.loopStart = new core_1.EventEmitter();
        this.loopEach = new core_1.EventEmitter();
        this.loopEnd = new core_1.EventEmitter();
        const f = this._iterableDiffers.find([]);
        this.iterableDiffer = f.create();
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
            this.pagesChange.emit(this.pages);
        });
    }
    only(item) {
        this.array.length = 0;
        this.array.push(item);
        this.arrayChange.emit(this.array);
        this.loop(true);
    }
    getItemId(item, itemIndexName) {
        itemIndexName = itemIndexName || this.idKey;
        return itemIndexName ? item[itemIndexName] : item;
    }
    getCompareArray() {
        if (this.array && this.idKey) {
            return this.array.map(item => item[this.idKey]);
        }
        return this.array || [];
    }
    selected(item) {
        return this.itemIndex(item) >= 0 ? true : false;
    }
    itemIndex(item, itemIndexName) {
        const array = this.getCompareArray();
        const itemId = this.getItemId(item, itemIndexName);
        for (let x = array.length - 1; x >= 0; --x) {
            if (itemId == array[x]) {
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AckArray.prototype, "idKey", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AckArray.prototype, "pageAt", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AckArray.prototype, "pages", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AckArray.prototype, "pagesChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AckArray.prototype, "page", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AckArray.prototype, "pageChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AckArray.prototype, "array", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AckArray.prototype, "arrayChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AckArray.prototype, "keyMap", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AckArray.prototype, "keyMapChange", void 0);
__decorate([
    core_1.ContentChildren(AckAggregate_directive_1.AckAggregate),
    __metadata("design:type", Array)
], AckArray.prototype, "AckAggregates", void 0);
AckArray = __decorate([
    core_1.Directive({
        selector: "ack-array",
        exportAs: "AckArray"
    }),
    __metadata("design:paramtypes", [core_1.IterableDiffers])
], AckArray);
exports.AckArray = AckArray;


/***/ }),

/***/ "../src/directives/ElementSizeModel.directive.ts":
/*!*******************************************************!*\
  !*** ../src/directives/ElementSizeModel.directive.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
let ElementSizeModel = class ElementSizeModel {
    constructor(element) {
        this.element = element;
        this.elementSizeModelChange = new core_1.EventEmitter();
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
        Promise.resolve().then(() => this.inChange = false);
    }
    ngOnDestroy() {
        this.observer.disconnect();
        window.removeEventListener('resize', this.onResize);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ElementSizeModel.prototype, "elementSizeModelWatch", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ElementSizeModel.prototype, "elementSizeModel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ElementSizeModel.prototype, "elementSizeModelChange", void 0);
ElementSizeModel = __decorate([
    core_1.Directive({
        selector: '[elementSizeModel]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ElementSizeModel);
exports.ElementSizeModel = ElementSizeModel;
let ElementHeightModel = class ElementHeightModel extends ElementSizeModel {
    constructor(element) {
        super(element);
        this.element = element;
        this.elementHeightModelChange = new core_1.EventEmitter();
    }
    setModel() {
        this.elementHeightModel = this.element.nativeElement.offsetHeight;
        this.elementHeightModelChange.emit(this.elementHeightModel);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ElementHeightModel.prototype, "elementHeightModel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ElementHeightModel.prototype, "elementHeightModelChange", void 0);
ElementHeightModel = __decorate([
    core_1.Directive({
        selector: '[elementHeightModel]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ElementHeightModel);
exports.ElementHeightModel = ElementHeightModel;
let ElementWidthModel = class ElementWidthModel extends ElementSizeModel {
    constructor(element) {
        super(element);
        this.element = element;
        this.elementWidthModelChange = new core_1.EventEmitter();
    }
    setModel() {
        this.elementWidthModel = this.element.nativeElement.offsetWidth;
        this.elementWidthModelChange.emit(this.elementWidthModel);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ElementWidthModel.prototype, "elementWidthModel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ElementWidthModel.prototype, "elementWidthModelChange", void 0);
ElementWidthModel = __decorate([
    core_1.Directive({
        selector: '[elementWidthModel]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ElementWidthModel);
exports.ElementWidthModel = ElementWidthModel;


/***/ }),

/***/ "../src/directives/FocusOn.directive.ts":
/*!**********************************************!*\
  !*** ../src/directives/FocusOn.directive.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
let FocusOn = class FocusOn {
    constructor(element) {
        this.element = element;
        this.focusOnDelay = 0;
        this.focusThen = new core_1.EventEmitter();
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FocusOn.prototype, "focusOn", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FocusOn.prototype, "focusOnDelay", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FocusOn.prototype, "focusThen", void 0);
FocusOn = __decorate([
    core_1.Directive({
        selector: '[focusOn]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FocusOn);
exports.FocusOn = FocusOn;


/***/ }),

/***/ "../src/directives/FxOn.directive.ts":
/*!*******************************************!*\
  !*** ../src/directives/FxOn.directive.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
let FxOn = class FxOn {
    constructor(element) {
        this.element = element;
        this.fxThen = new core_1.EventEmitter();
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FxOn.prototype, "fxOn", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FxOn.prototype, "fxClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FxOn.prototype, "fxForMs", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FxOn.prototype, "fxThen", void 0);
FxOn = __decorate([
    core_1.Directive({
        selector: "[fxOn]",
        exportAs: "FxOn"
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FxOn);
exports.FxOn = FxOn;
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
exports.hasClass = hasClass;
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
exports.addClass = addClass;
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
exports.removeClass = removeClass;
function getElementDefaultDisplay(tag) {
    var cStyle, t = tag, gcs = "getComputedStyle" in window;
    cStyle = (gcs ? window.getComputedStyle(t, "") : t.currentStyle).display;
    return cStyle;
}


/***/ }),

/***/ "../src/directives/HtmlHeightModel.directive.ts":
/*!******************************************************!*\
  !*** ../src/directives/HtmlHeightModel.directive.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const HtmlSizeWatcher_1 = __webpack_require__(/*! ./HtmlSizeWatcher */ "../src/directives/HtmlSizeWatcher.ts");
const HtmlWidthModel_directive_1 = __webpack_require__(/*! ./HtmlWidthModel.directive */ "../src/directives/HtmlWidthModel.directive.ts");
let HtmlHeightModel = class HtmlHeightModel extends HtmlWidthModel_directive_1.HtmlWidthModel {
    constructor(HtmlSizeService) {
        super(HtmlSizeService);
        this.HtmlSizeService = HtmlSizeService;
        this.htmlHeightModelChange = new core_1.EventEmitter();
    }
    hasChanged() {
        return this.htmlHeightModel !== window.document.documentElement.clientHeight;
    }
    setModel(model) {
        this.htmlHeightModel = model.height;
        this.htmlHeightModelChange.emit(this.htmlHeightModel);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], HtmlHeightModel.prototype, "htmlHeightModel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], HtmlHeightModel.prototype, "htmlHeightModelChange", void 0);
HtmlHeightModel = __decorate([
    core_1.Directive({
        selector: '[htmlHeightModel]'
    }),
    __metadata("design:paramtypes", [HtmlSizeWatcher_1.HtmlSizeService])
], HtmlHeightModel);
exports.HtmlHeightModel = HtmlHeightModel;


/***/ }),

/***/ "../src/directives/HtmlSizeWatcher.ts":
/*!********************************************!*\
  !*** ../src/directives/HtmlSizeWatcher.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
let HtmlSizeService = class HtmlSizeService {
    constructor() {
        this.change = new core_1.EventEmitter();
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
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], HtmlSizeService.prototype, "change", void 0);
HtmlSizeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], HtmlSizeService);
exports.HtmlSizeService = HtmlSizeService;


/***/ }),

/***/ "../src/directives/HtmlWidthModel.directive.ts":
/*!*****************************************************!*\
  !*** ../src/directives/HtmlWidthModel.directive.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const HtmlSizeWatcher_1 = __webpack_require__(/*! ./HtmlSizeWatcher */ "../src/directives/HtmlSizeWatcher.ts");
let HtmlWidthModel = class HtmlWidthModel {
    constructor(HtmlSizeService) {
        this.HtmlSizeService = HtmlSizeService;
        this.htmlWidthModelChange = new core_1.EventEmitter();
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], HtmlWidthModel.prototype, "htmlWidthModel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], HtmlWidthModel.prototype, "htmlWidthModelChange", void 0);
HtmlWidthModel = __decorate([
    core_1.Directive({
        selector: '[htmlWidthModel]'
    }),
    __metadata("design:paramtypes", [HtmlSizeWatcher_1.HtmlSizeService])
], HtmlWidthModel);
exports.HtmlWidthModel = HtmlWidthModel;


/***/ }),

/***/ "../src/directives/Init.directive.ts":
/*!*******************************************!*\
  !*** ../src/directives/Init.directive.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
let Init = class Init {
    constructor() {
        this.init = new core_1.EventEmitter();
    }
    ngOnInit() {
        this.init.emit();
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Init.prototype, "init", void 0);
Init = __decorate([
    core_1.Directive({
        selector: '[init]'
    })
], Init);
exports.Init = Init;


/***/ }),

/***/ "../src/directives/InnerHtmlModel.directive.ts":
/*!*****************************************************!*\
  !*** ../src/directives/InnerHtmlModel.directive.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
let InnerHtmlModel = class InnerHtmlModel {
    constructor(element) {
        this.element = element;
        this.innerHtmlModelChange = new core_1.EventEmitter();
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], InnerHtmlModel.prototype, "innerHtmlModel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], InnerHtmlModel.prototype, "innerHtmlModelChange", void 0);
InnerHtmlModel = __decorate([
    core_1.Directive({
        selector: '[innerHtmlModel]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], InnerHtmlModel);
exports.InnerHtmlModel = InnerHtmlModel;


/***/ }),

/***/ "../src/directives/PxFromHtmlTop.directive.ts":
/*!****************************************************!*\
  !*** ../src/directives/PxFromHtmlTop.directive.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
let PxFromHtmlTop = class PxFromHtmlTop {
    constructor(ElementRef) {
        this.ElementRef = ElementRef;
        this.numberChange = new core_1.EventEmitter();
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
__decorate([
    core_1.Input("pxFromHtmlTop"),
    __metadata("design:type", Number)
], PxFromHtmlTop.prototype, "number", void 0);
__decorate([
    core_1.Output("pxFromHtmlTopChange"),
    __metadata("design:type", core_1.EventEmitter)
], PxFromHtmlTop.prototype, "numberChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PxFromHtmlTop.prototype, "watch", void 0);
PxFromHtmlTop = __decorate([
    core_1.Directive({
        selector: "[pxFromHtmlTop]",
        exportAs: "PxFromHtmlTop"
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], PxFromHtmlTop);
exports.PxFromHtmlTop = PxFromHtmlTop;


/***/ }),

/***/ "../src/directives/ReplaceModel.directive.ts":
/*!***************************************************!*\
  !*** ../src/directives/ReplaceModel.directive.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
let ReplaceModel = class ReplaceModel {
    constructor() {
        this.replaceModelChange = new core_1.EventEmitter();
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
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ReplaceModel.prototype, "replaceModel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ReplaceModel.prototype, "replaceModelChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ReplaceModel.prototype, "replaceExpression", void 0);
ReplaceModel = __decorate([
    core_1.Directive({
        selector: '[replaceModel]'
    })
], ReplaceModel);
exports.ReplaceModel = ReplaceModel;


/***/ }),

/***/ "../src/directives/ScreenHeightModel.directive.ts":
/*!********************************************************!*\
  !*** ../src/directives/ScreenHeightModel.directive.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const HtmlSizeWatcher_1 = __webpack_require__(/*! ./HtmlSizeWatcher */ "../src/directives/HtmlSizeWatcher.ts");
let ScreenHeightModel = class ScreenHeightModel {
    constructor(HtmlSizeService) {
        this.HtmlSizeService = HtmlSizeService;
        this.modelChange = new core_1.EventEmitter();
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
__decorate([
    core_1.Input('screenHeightModel'),
    __metadata("design:type", Number)
], ScreenHeightModel.prototype, "model", void 0);
__decorate([
    core_1.Output('screenHeightModelChange'),
    __metadata("design:type", core_1.EventEmitter)
], ScreenHeightModel.prototype, "modelChange", void 0);
ScreenHeightModel = __decorate([
    core_1.Directive({
        selector: '[screenHeightModel]',
        exportAs: 'ScreenHeightModel'
    }),
    __metadata("design:paramtypes", [HtmlSizeWatcher_1.HtmlSizeService])
], ScreenHeightModel);
exports.ScreenHeightModel = ScreenHeightModel;


/***/ }),

/***/ "../src/directives/ScreenScroll.directive.ts":
/*!***************************************************!*\
  !*** ../src/directives/ScreenScroll.directive.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
let ScreenScroll = class ScreenScroll {
    constructor() {
        this.screenScroll = new core_1.EventEmitter();
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
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ScreenScroll.prototype, "screenScroll", void 0);
ScreenScroll = __decorate([
    core_1.Directive({
        selector: '[screenScroll]'
    }),
    __metadata("design:paramtypes", [])
], ScreenScroll);
exports.ScreenScroll = ScreenScroll;


/***/ }),

/***/ "../src/directives/ScreenScrollHeightDiff.directive.ts":
/*!*************************************************************!*\
  !*** ../src/directives/ScreenScrollHeightDiff.directive.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
let ScreenScrollHeightDiff = class ScreenScrollHeightDiff {
    constructor() {
        this.screenScrollHeightDiffChange = new core_1.EventEmitter();
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ScreenScrollHeightDiff.prototype, "screenScrollHeightDiff", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ScreenScrollHeightDiff.prototype, "screenScrollHeightDiffChange", void 0);
ScreenScrollHeightDiff = __decorate([
    core_1.Directive({
        selector: '[screenScrollHeightDiff]'
    }),
    __metadata("design:paramtypes", [])
], ScreenScrollHeightDiff);
exports.ScreenScrollHeightDiff = ScreenScrollHeightDiff;


/***/ }),

/***/ "../src/directives/ScreenScrollModelY.directive.ts":
/*!*********************************************************!*\
  !*** ../src/directives/ScreenScrollModelY.directive.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
let ScreenScrollModelY = class ScreenScrollModelY {
    constructor() {
        this.screenScrollModelYChange = new core_1.EventEmitter();
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ScreenScrollModelY.prototype, "screenScrollModelY", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ScreenScrollModelY.prototype, "screenScrollModelYChange", void 0);
ScreenScrollModelY = __decorate([
    core_1.Directive({
        selector: '[screenScrollModelY]'
    }),
    __metadata("design:paramtypes", [])
], ScreenScrollModelY);
exports.ScreenScrollModelY = ScreenScrollModelY;


/***/ }),

/***/ "../src/directives/ScreenWidthModel.directive.ts":
/*!*******************************************************!*\
  !*** ../src/directives/ScreenWidthModel.directive.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const HtmlSizeWatcher_1 = __webpack_require__(/*! ./HtmlSizeWatcher */ "../src/directives/HtmlSizeWatcher.ts");
let ScreenWidthModel = class ScreenWidthModel {
    constructor(HtmlSizeService) {
        this.HtmlSizeService = HtmlSizeService;
        this.screenWidthModelChange = new core_1.EventEmitter();
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ScreenWidthModel.prototype, "screenWidthModel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ScreenWidthModel.prototype, "screenWidthModelChange", void 0);
ScreenWidthModel = __decorate([
    core_1.Directive({
        selector: '[screenWidthModel]'
    }),
    __metadata("design:paramtypes", [HtmlSizeWatcher_1.HtmlSizeService])
], ScreenWidthModel);
exports.ScreenWidthModel = ScreenWidthModel;


/***/ }),

/***/ "../src/directives/SelectOn.directive.ts":
/*!***********************************************!*\
  !*** ../src/directives/SelectOn.directive.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
let SelectOn = class SelectOn {
    constructor(element) {
        this.element = element;
        this.selectOnDelay = 0;
        this.selectThen = new core_1.EventEmitter();
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SelectOn.prototype, "selectOn", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SelectOn.prototype, "selectOnDelay", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SelectOn.prototype, "selectThen", void 0);
SelectOn = __decorate([
    core_1.Directive({
        selector: '[selectOn]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], SelectOn);
exports.SelectOn = SelectOn;


/***/ }),

/***/ "../src/directives/ShakeOn.directive.ts":
/*!**********************************************!*\
  !*** ../src/directives/ShakeOn.directive.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const FxOn_directive_1 = __webpack_require__(/*! ./FxOn.directive */ "../src/directives/FxOn.directive.ts");
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
let ShakeOn = class ShakeOn {
    constructor(element) {
        this.element = element;
        this.shakeConstant = false;
        this.shakeThen = new core_1.EventEmitter();
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
                    FxOn_directive_1.removeClass(this.element.nativeElement, pv);
                }
                this.applyType();
            }
            else {
                this.removeType();
            }
        }
    }
    onFalse() {
        FxOn_directive_1.removeClass(this.element.nativeElement, 'shake-constant');
        this.removeType();
        if (this.timeout) {
            clearTimeout(this.timeout);
            delete this.timeout;
        }
    }
    removeType() {
        FxOn_directive_1.removeClass(this.element.nativeElement, this.shakeType || 'shake-slow');
    }
    applyType() {
        FxOn_directive_1.addClass(this.element.nativeElement, this.shakeType || 'shake-slow');
    }
    onTrue() {
        FxOn_directive_1.addClass(this.element.nativeElement, 'shake-constant');
        this.applyType();
        if (!this.shakeConstant) {
            this.timeout = setTimeout(() => {
                this.onFalse();
                this.shakeThen.emit(this);
            }, this.shakeForMs);
        }
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ShakeOn.prototype, "shakeConstant", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ShakeOn.prototype, "shakeOn", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ShakeOn.prototype, "shakeForMs", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ShakeOn.prototype, "shakeType", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ShakeOn.prototype, "shakeThen", void 0);
ShakeOn = __decorate([
    core_1.Directive({
        selector: "[shakeOn]",
        exportAs: "ShakeOn"
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ShakeOn);
exports.ShakeOn = ShakeOn;


/***/ }),

/***/ "../src/directives/StatusOfflineModel.directive.ts":
/*!*********************************************************!*\
  !*** ../src/directives/StatusOfflineModel.directive.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
let StatusOfflineModel = class StatusOfflineModel {
    constructor() {
        this.statusOfflineModelChange = new core_1.EventEmitter();
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StatusOfflineModel.prototype, "statusOfflineModel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], StatusOfflineModel.prototype, "statusOfflineModelChange", void 0);
StatusOfflineModel = __decorate([
    core_1.Directive({ selector: '[statusOfflineModel]' }),
    __metadata("design:paramtypes", [])
], StatusOfflineModel);
exports.StatusOfflineModel = StatusOfflineModel;


/***/ }),

/***/ "../src/directives/StatusOnlineModel.directive.ts":
/*!********************************************************!*\
  !*** ../src/directives/StatusOnlineModel.directive.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
let StatusOnlineModel = class StatusOnlineModel {
    constructor() {
        this.statusOnlineModelChange = new core_1.EventEmitter();
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StatusOnlineModel.prototype, "statusOnlineModel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], StatusOnlineModel.prototype, "statusOnlineModelChange", void 0);
StatusOnlineModel = __decorate([
    core_1.Directive({ selector: '[statusOnlineModel]' }),
    __metadata("design:paramtypes", [])
], StatusOnlineModel);
exports.StatusOnlineModel = StatusOnlineModel;


/***/ }),

/***/ "../src/directives/VarDirective.directive.ts":
/*!***************************************************!*\
  !*** ../src/directives/VarDirective.directive.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
let VarDirective = class VarDirective {
    constructor() {
        this.changed = new core_1.EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.var) {
            Promise.resolve().then(() => this.changed.emit(this.var));
        }
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], VarDirective.prototype, "var", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], VarDirective.prototype, "changed", void 0);
VarDirective = __decorate([
    core_1.Directive({
        selector: "[var]",
        exportAs: "var"
    })
], VarDirective);
exports.VarDirective = VarDirective;


/***/ }),

/***/ "../src/index.ts":
/*!***********************!*\
  !*** ../src/index.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var AckModule_1 = __webpack_require__(/*! ./AckModule */ "../src/AckModule.ts");
exports.AckModule = AckModule_1.AckModule;
var RouteWatchReporter_1 = __webpack_require__(/*! ./RouteWatchReporter */ "../src/RouteWatchReporter.ts");
exports.RouteWatchReporter = RouteWatchReporter_1.RouteWatchReporter;
var declarations_1 = __webpack_require__(/*! ./declarations */ "../src/declarations.ts");
exports.components = declarations_1.declarations;
var pipes_1 = __webpack_require__(/*! ./pipes */ "../src/pipes.ts");
exports.pipes = pipes_1.declarations;
var browser_1 = __webpack_require__(/*! ack-x/browser */ "../node_modules/ack-x/browser.js");
exports.ack = browser_1.ack;
var AckApi_1 = __webpack_require__(/*! ./providers/AckApi */ "../src/providers/AckApi.ts");
exports.AckApi = AckApi_1.AckApi;
var AckArray_directive_1 = __webpack_require__(/*! ./directives/AckArray.directive */ "../src/directives/AckArray.directive.ts");
exports.AckArray = AckArray_directive_1.AckArray;
__export(__webpack_require__(/*! ./providers */ "../src/providers.ts"));


/***/ }),

/***/ "../src/invokeRotator.ts":
/*!*******************************!*\
  !*** ../src/invokeRotator.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function invokeRotator(invoke) {
    return getInvokerBy(invoke);
}
exports.invokeRotator = invokeRotator;
function objectInvoker(object, plan) {
    var rtn = object;
    var subargs, item;
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
exports.objectInvoker = objectInvoker;
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
exports.getInvokerBy = getInvokerBy;


/***/ }),

/***/ "../src/pipes.class.ts":
/*!*****************************!*\
  !*** ../src/pipes.class.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const browser_1 = __webpack_require__(/*! ack-x/browser */ "../node_modules/ack-x/browser.js");
function between(input, a, b) {
    if (a == null || b == null)
        return false;
    return (input >= a && input <= b) || (input <= a && input >= b) ? true : false;
}
exports.between = between;
function numberToPhone(val) {
    if (val == null || !val)
        return val;
    val = String(val).replace(/[^0-9]/g, '');
    if (val.length == 0)
        return val;
    return '(' + val.substring(0, 3) + ') ' + val.substring(3, 6) + '-' + val.substring(6, 10);
}
exports.numberToPhone = numberToPhone;
function toNumber(val) {
    return Number(numbers(val, "."));
}
exports.toNumber = toNumber;
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
exports.numberSuffix = numberSuffix;
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
exports.array = array;
function arrayOfObjects(input, repeat, repeatValue) {
    return array(input, repeat, repeatValue).map((v, i) => ({ value: v, index: i }));
}
exports.arrayOfObjects = arrayOfObjects;
function markdownAnchor(input) {
    input = input.toString().replace(/&/gi, 'amp');
    input = input.toString().replace(/ /gi, '-');
    input = input.replace(/[^a-z0-9_-]/gi, '');
    return input.toLowerCase();
}
exports.markdownAnchor = markdownAnchor;
function textDownload(input) {
    if (input == null)
        return input;
    return 'data:text/plain;charset=utf-8,' + encodeURIComponent(input);
}
exports.textDownload = textDownload;
function yesno(input) {
    if (input == null)
        return input;
    return input ? 'yes' : 'no';
}
exports.yesno = yesno;
function yesNo(input) {
    if (input == null)
        return input;
    return input ? 'Yes' : 'No';
}
exports.yesNo = yesNo;
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
exports.boolean = boolean;
function bit(input) {
    return boolean(input) ? 1 : 0;
}
exports.bit = bit;
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
exports.numbers = numbers;
function capitalizeWords(input) {
    var reg = /[^\W_]+[^\s-]* */g;
    return (!!input) ? input.replace(reg, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }) : '';
}
exports.capitalizeWords = capitalizeWords;
function capitalize(input) {
    input = exports.pipes.capitalizeOne(input);
    var reg = /[.?!][\s\r\t]+\w/g;
    return (!!input) ? input.replace(reg, exports.pipes.capitalizeAfterSentence) : '';
}
exports.capitalize = capitalize;
function capitalizeAfterSentence(input) {
    var reg = /[\s\r\t]\w/g;
    return (!!input) ? input.replace(reg, function (txt) { return txt.charAt(0) + txt.charAt(1).toUpperCase() + txt.substr(2).toLowerCase(); }) : '';
}
exports.capitalizeAfterSentence = capitalizeAfterSentence;
function capitalizeOne(input) {
    var reg = /[^\W_]+[^\s-]*/;
    return (!!input) ? input.replace(reg, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }) : '';
}
exports.capitalizeOne = capitalizeOne;
function a(name) {
    const av = new browser_1.ack();
    return invokeRotator_1.invokeRotator(av[name]);
}
const invokeRotator_1 = __webpack_require__(/*! ./invokeRotator */ "../src/invokeRotator.ts");
exports.aDate = a('date');
exports.aTime = a('time');
exports.aMath = invokeRotator_1.invokeRotator(Math);
exports.aString = invokeRotator_1.invokeRotator(String);
exports.ack = invokeRotator_1.invokeRotator(browser_1.ack);
exports.pipes = {
    array,
    markdownAnchor,
    textDownload,
    yesno,
    yesNo,
    numbers,
    capitalizeWords,
    capitalize,
    capitalizeAfterSentence,
    capitalizeOne,
    toNumber,
    numberToPhone,
    numberSuffix,
    aDate: exports.aDate,
    aMath: exports.aMath,
    aString: exports.aString,
    aTime: exports.aTime,
    ack: exports.ack,
    between
};


/***/ }),

/***/ "../src/pipes.ts":
/*!***********************!*\
  !*** ../src/pipes.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const pipes = __webpack_require__(/*! ./pipes.class */ "../src/pipes.class.ts");
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
let IndexTrack = class IndexTrack {
    transform() {
        return function (index) { return index; };
    }
};
IndexTrack = __decorate([
    core_1.Pipe({ name: 'indexTrack' })
], IndexTrack);
exports.IndexTrack = IndexTrack;
let Stringify = class Stringify {
    transform(input, spaces) {
        return JSON.stringify(input, null, spaces);
    }
};
Stringify = __decorate([
    core_1.Pipe({ name: 'stringify' })
], Stringify);
exports.Stringify = Stringify;
let ForceArray = class ForceArray {
    transform(input, repeat, repeatValue) {
        return pipes.array(input, repeat, repeatValue);
    }
};
ForceArray = __decorate([
    core_1.Pipe({ name: 'array' })
], ForceArray);
exports.ForceArray = ForceArray;
let ArrayOfObjects = class ArrayOfObjects {
    transform(input, repeat, repeatValue) {
        return pipes.arrayOfObjects(input, repeat, repeatValue);
    }
};
ArrayOfObjects = __decorate([
    core_1.Pipe({ name: 'arrayOfObjects' })
], ArrayOfObjects);
exports.ArrayOfObjects = ArrayOfObjects;
let SafeUrl = class SafeUrl {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(input) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(input);
    }
};
SafeUrl = __decorate([
    core_1.Pipe({ name: 'safeUrl' }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], SafeUrl);
exports.SafeUrl = SafeUrl;
let SafeHtml = class SafeHtml {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(input) {
        return this.domSanitizer.bypassSecurityTrustHtml(input);
    }
};
SafeHtml = __decorate([
    core_1.Pipe({ name: 'safeHtml' }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], SafeHtml);
exports.SafeHtml = SafeHtml;
let SafeStyle = class SafeStyle {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(input) {
        return this.domSanitizer.bypassSecurityTrustStyle(input);
    }
};
SafeStyle = __decorate([
    core_1.Pipe({ name: 'safeStyle' }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], SafeStyle);
exports.SafeStyle = SafeStyle;
let Between = class Between {
    transform(input, a, b) { return pipes.between(input, a, b); }
};
Between = __decorate([
    core_1.Pipe({ name: 'between' })
], Between);
exports.Between = Between;
let TextDownload = class TextDownload {
    transform(input) { return pipes.textDownload(input); }
};
TextDownload = __decorate([
    core_1.Pipe({ name: 'textDownload' })
], TextDownload);
exports.TextDownload = TextDownload;
let NumberToPhone = class NumberToPhone {
    transform(input) { return pipes.numberToPhone(input); }
};
NumberToPhone = __decorate([
    core_1.Pipe({ name: 'numberToPhone' })
], NumberToPhone);
exports.NumberToPhone = NumberToPhone;
let toNumber = class toNumber {
    transform(input) { return pipes.toNumber(input); }
};
toNumber = __decorate([
    core_1.Pipe({ name: 'toNumber' })
], toNumber);
exports.toNumber = toNumber;
let NumberSuffix = class NumberSuffix {
    transform(input, rtnInput) { return pipes.numberSuffix(input, rtnInput); }
};
NumberSuffix = __decorate([
    core_1.Pipe({ name: 'numberSuffix' })
], NumberSuffix);
exports.NumberSuffix = NumberSuffix;
let MarkdownAnchor = class MarkdownAnchor {
    transform(input) { return pipes.markdownAnchor(input); }
};
MarkdownAnchor = __decorate([
    core_1.Pipe({ name: 'markdownAnchor' })
], MarkdownAnchor);
exports.MarkdownAnchor = MarkdownAnchor;
let Capitalize = class Capitalize {
    transform(input) { return pipes.capitalize(input); }
};
Capitalize = __decorate([
    core_1.Pipe({ name: 'capitalize' })
], Capitalize);
exports.Capitalize = Capitalize;
let CapitalizeWords = class CapitalizeWords {
    transform(input) { return pipes.capitalizeWords(input); }
};
CapitalizeWords = __decorate([
    core_1.Pipe({ name: 'capitalizeWords' })
], CapitalizeWords);
exports.CapitalizeWords = CapitalizeWords;
let Yesno = class Yesno {
    transform(input) { return pipes.yesno(input); }
};
Yesno = __decorate([
    core_1.Pipe({ name: 'yesno' })
], Yesno);
exports.Yesno = Yesno;
let YesNo = class YesNo {
    transform(input) { return pipes.yesNo(input); }
};
YesNo = __decorate([
    core_1.Pipe({ name: 'YesNo' })
], YesNo);
exports.YesNo = YesNo;
let BooleanPipe = class BooleanPipe {
    transform(input) { return pipes.boolean(input); }
};
BooleanPipe = __decorate([
    core_1.Pipe({ name: 'boolean' })
], BooleanPipe);
exports.BooleanPipe = BooleanPipe;
let Bit = class Bit {
    transform(input) { return pipes.bit(input); }
};
Bit = __decorate([
    core_1.Pipe({ name: 'bit' })
], Bit);
exports.Bit = Bit;
let Numbers = class Numbers {
    transform(input) { return pipes.numbers(input); }
};
Numbers = __decorate([
    core_1.Pipe({ name: 'numbers' })
], Numbers);
exports.Numbers = Numbers;
let ADate = class ADate {
    transform() { return pipes.aDate.apply(pipes.aDate, arguments); }
};
ADate = __decorate([
    core_1.Pipe({ name: 'aDate' })
], ADate);
exports.ADate = ADate;
let AMath = class AMath {
    transform() { return pipes.aMath.apply(pipes.aMath, arguments); }
};
AMath = __decorate([
    core_1.Pipe({ name: 'aMath' })
], AMath);
exports.AMath = AMath;
let AString = class AString {
    transform() { return pipes.aString.apply(pipes.aString, arguments); }
};
AString = __decorate([
    core_1.Pipe({ name: 'aString' })
], AString);
exports.AString = AString;
let ATime = class ATime {
    transform() { return pipes.aTime.apply(pipes.aTime, arguments); }
};
ATime = __decorate([
    core_1.Pipe({ name: 'aTime' })
], ATime);
exports.ATime = ATime;
let Ack = class Ack {
    transform() { return pipes.ack.apply(pipes.ack, arguments); }
};
Ack = __decorate([
    core_1.Pipe({ name: 'ack' })
], Ack);
exports.Ack = Ack;
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
Keys = __decorate([
    core_1.Pipe({ name: 'keys' })
], Keys);
exports.Keys = Keys;
let TypeofPipe = class TypeofPipe {
    transform(input) { return typeof (input); }
};
TypeofPipe = __decorate([
    core_1.Pipe({ name: 'typeof' })
], TypeofPipe);
exports.TypeofPipe = TypeofPipe;
let ConsolePipe = class ConsolePipe {
    transform() { return console.log.apply(console, arguments); }
};
ConsolePipe = __decorate([
    core_1.Pipe({ name: 'console' })
], ConsolePipe);
exports.ConsolePipe = ConsolePipe;
exports.declarations = [
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
    BooleanPipe,
    Between
];


/***/ }),

/***/ "../src/providers.ts":
/*!***************************!*\
  !*** ../src/providers.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlSizeWatcher_1 = __webpack_require__(/*! ./directives/HtmlSizeWatcher */ "../src/directives/HtmlSizeWatcher.ts");
exports.HtmlSizeService = HtmlSizeWatcher_1.HtmlSizeService;
const HtmlSizeWatcher_2 = __webpack_require__(/*! ./directives/HtmlSizeWatcher */ "../src/directives/HtmlSizeWatcher.ts");
var Log_1 = __webpack_require__(/*! ./providers/Log */ "../src/providers/Log.ts");
exports.Log = Log_1.Log;
const Log_2 = __webpack_require__(/*! ./providers/Log */ "../src/providers/Log.ts");
var AckApp_provider_1 = __webpack_require__(/*! ./providers/AckApp.provider */ "../src/providers/AckApp.provider.ts");
exports.AckApp = AckApp_provider_1.AckApp;
const AckApp_provider_2 = __webpack_require__(/*! ./providers/AckApp.provider */ "../src/providers/AckApp.provider.ts");
var Prompts_1 = __webpack_require__(/*! ./providers/Prompts */ "../src/providers/Prompts.ts");
exports.Prompts = Prompts_1.Prompts;
const Prompts_2 = __webpack_require__(/*! ./providers/Prompts */ "../src/providers/Prompts.ts");
var AckOffline_1 = __webpack_require__(/*! ./providers/AckOffline */ "../src/providers/AckOffline.ts");
exports.AckOffline = AckOffline_1.AckOffline;
const AckOffline_2 = __webpack_require__(/*! ./providers/AckOffline */ "../src/providers/AckOffline.ts");
var AckCache_1 = __webpack_require__(/*! ./providers/AckCache */ "../src/providers/AckCache.ts");
exports.AckCache = AckCache_1.AckCache;
const AckCache_2 = __webpack_require__(/*! ./providers/AckCache */ "../src/providers/AckCache.ts");
var AckQue_1 = __webpack_require__(/*! ./providers/AckQue */ "../src/providers/AckQue.ts");
exports.AckQue = AckQue_1.AckQue;
const AckQue_2 = __webpack_require__(/*! ./providers/AckQue */ "../src/providers/AckQue.ts");
var ErrorLog_1 = __webpack_require__(/*! ./providers/ErrorLog */ "../src/providers/ErrorLog.ts");
exports.ErrorLog = ErrorLog_1.ErrorLog;
const ErrorLog_2 = __webpack_require__(/*! ./providers/ErrorLog */ "../src/providers/ErrorLog.ts");
__export(__webpack_require__(/*! ./providers/AckApi */ "../src/providers/AckApi.ts"));
const AckApi_1 = __webpack_require__(/*! ./providers/AckApi */ "../src/providers/AckApi.ts");
var UrlVars_1 = __webpack_require__(/*! ./providers/UrlVars */ "../src/providers/UrlVars.ts");
exports.UrlVars = UrlVars_1.UrlVars;
const UrlVars_2 = __webpack_require__(/*! ./providers/UrlVars */ "../src/providers/UrlVars.ts");
var WindowService_1 = __webpack_require__(/*! ./providers/WindowService */ "../src/providers/WindowService.ts");
exports.WindowService = WindowService_1.WindowService;
const WindowService_2 = __webpack_require__(/*! ./providers/WindowService */ "../src/providers/WindowService.ts");
var DocumentService_1 = __webpack_require__(/*! ./providers/DocumentService */ "../src/providers/DocumentService.ts");
exports.DocumentService = DocumentService_1.DocumentService;
const DocumentService_2 = __webpack_require__(/*! ./providers/DocumentService */ "../src/providers/DocumentService.ts");
exports.providers = [
    Log_2.Log,
    ErrorLog_2.ErrorLog,
    AckApp_provider_2.AckApp,
    AckOffline_2.AckOffline,
    AckCache_2.AckCache,
    AckQue_2.AckQue,
    AckApi_1.AckApi,
    UrlVars_2.UrlVars,
    WindowService_2.WindowService,
    DocumentService_2.DocumentService,
    Prompts_2.Prompts,
    HtmlSizeWatcher_2.HtmlSizeService
];


/***/ }),

/***/ "../src/providers/AckApi.ts":
/*!**********************************!*\
  !*** ../src/providers/AckApi.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
const AckCache_1 = __webpack_require__(/*! ./AckCache */ "../src/providers/AckCache.ts");
const AckQue_1 = __webpack_require__(/*! ./AckQue */ "../src/providers/AckQue.ts");
function TimeOutError(message) {
    Error["captureStackTrace"](this, this.constructor);
    this.name = this.constructor.name;
    this.status = 504;
    this.code = "gateway_timeout";
    this.message = message || "Could not connect to server or server did not respond in a timely manner. Please check internet connection and then try again.";
}
exports.TimeOutError = TimeOutError;
TimeOutError.prototype = Object.create(Error.prototype);
let AckApi = class AckApi {
    constructor(HttpClient) {
        this.HttpClient = HttpClient;
        this.response = new core_1.EventEmitter();
        this.Request = new core_1.EventEmitter();
        this.AuthError = new core_1.EventEmitter();
        this.ApiError = new core_1.EventEmitter();
        this.AckCache = new AckCache_1.AckCache();
        this.AckQue = new AckQue_1.AckQue();
        this.config = {
            baseUrl: "",
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
        request.url = this.config.baseUrl + request.url;
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
            .then(rtn => {
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
            cfgPlus.params = new http_1.HttpParams({
                fromObject: cfg.params
            });
        }
        if (cfg.headers) {
            cfgPlus.headers = new http_1.HttpHeaders(cfg.headers);
        }
        const request = new http_1.HttpRequest(cfg.method, cfg.url, cfg.body, cfgPlus);
        const promise = (resolve, reject) => {
            let resolved = false;
            this.Request.emit(request);
            const req = this.HttpClient.request(request)
                .subscribe(event => {
                if (event.type === http_1.HttpEventType.Response) {
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
        const cachename = request.offlineModel.name || request.offlineModel;
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
AckApi = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], AckApi);
exports.AckApi = AckApi;
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

/***/ "../src/providers/AckApp.provider.ts":
/*!*******************************************!*\
  !*** ../src/providers/AckApp.provider.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const Prompts_1 = __webpack_require__(/*! ./Prompts */ "../src/providers/Prompts.ts");
let AckApp = class AckApp {
    constructor(prompts) {
        this.prompts = prompts;
        this.warnedFixElements = true;
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
AckApp = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [Prompts_1.Prompts])
], AckApp);
exports.AckApp = AckApp;


/***/ }),

/***/ "../src/providers/AckCache.ts":
/*!************************************!*\
  !*** ../src/providers/AckCache.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const AckOffline_1 = __webpack_require__(/*! ./AckOffline */ "../src/providers/AckOffline.ts");
let AckCache = class AckCache extends AckOffline_1.AckOffline {
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
        const isMemMaxed = data['maxAge'] && this.hasMaxAged(data['_timestamp'], data['maxAge']);
        const isMemExpired = data['expires'] && this.hasExpired(data['_timestamp'], data['expires']);
        return isMemMaxed || isMemExpired;
    }
    get(name, options = { expires: null }) {
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
AckCache = __decorate([
    core_1.Injectable()
], AckCache);
exports.AckCache = AckCache;


/***/ }),

/***/ "../src/providers/AckOffline.ts":
/*!**************************************!*\
  !*** ../src/providers/AckOffline.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const localForage = __webpack_require__(/*! localforage */ "../node_modules/localforage/dist/localforage.js");
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
let AckOffline = class AckOffline {
    constructor() {
        this.prefix = "offline";
    }
    set(name, data) {
        if (data && data.constructor == Object)
            data.offlineSavedAt = new Date().toString();
        if (data && data.constructor == Object)
            data.offlineCreatedAt = data.offlineCreatedAt || new Date().toString();
        return localForage.setItem(this.prefix + '-' + name, data);
    }
    get(name) {
        return localForage.getItem(this.prefix + '-' + name);
    }
    remove(name) {
        return localForage.removeItem(this.prefix + '-' + name);
    }
    clear(name) { return this.remove(name); }
    clearAll() {
        return this.promiseNameArray().then((keys) => keys.forEach(name => this.remove(name)));
    }
    promiseNameArray() {
        let keys = [];
        return localForage.iterate((_, k) => {
            if (k.startsWith(this.prefix)) {
                keys.push(k.substring(this.prefix.length + 1, k.length));
            }
        })
            .then(() => keys);
    }
};
AckOffline = __decorate([
    core_1.Injectable()
], AckOffline);
exports.AckOffline = AckOffline;


/***/ }),

/***/ "../src/providers/AckQue.ts":
/*!**********************************!*\
  !*** ../src/providers/AckQue.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const AckOffline_1 = __webpack_require__(/*! ./AckOffline */ "../src/providers/AckOffline.ts");
let AckQue = class AckQue extends AckOffline_1.AckOffline {
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
                queData.forEach(x => {
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
            if (this.handlers[x].name == name) {
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
        return data => this.handleQued(data, handler);
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
AckQue = __decorate([
    core_1.Injectable()
], AckQue);
exports.AckQue = AckQue;


/***/ }),

/***/ "../src/providers/AckSections.provider.ts":
/*!************************************************!*\
  !*** ../src/providers/AckSections.provider.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
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
SectionProvider = __decorate([
    core_1.Injectable()
], SectionProvider);
exports.SectionProvider = SectionProvider;


/***/ }),

/***/ "../src/providers/DocumentService.ts":
/*!*******************************************!*\
  !*** ../src/providers/DocumentService.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
function getDocument() { return document; }
let DocumentService = class DocumentService {
    get nativeElement() { return getDocument(); }
};
DocumentService = __decorate([
    core_1.Injectable()
], DocumentService);
exports.DocumentService = DocumentService;


/***/ }),

/***/ "../src/providers/ErrorLog.ts":
/*!************************************!*\
  !*** ../src/providers/ErrorLog.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
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
        return err => this.reject(err);
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
        if (e.constructor == String) {
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
ErrorLog = __decorate([
    core_1.Injectable()
], ErrorLog);
exports.ErrorLog = ErrorLog;
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

/***/ "../src/providers/Log.ts":
/*!*******************************!*\
  !*** ../src/providers/Log.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
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
Log = __decorate([
    core_1.Injectable()
], Log);
exports.Log = Log;
function getDateTimeString() {
    return (function (d) { return (('0' + (d.getMonth() + 1)).slice(-2) + '/' + ('0' + d.getDate()).slice(-2) + '/' + d.getFullYear()); })(new Date()) + ' ' + (function (d) { var h = d.getHours(), t = 'AM', m = d.getMinutes(); var mn = m < 10 ? '0' + m : m; h = h >= 12 ? (t = 'PM', h - 12 || 12) : h == 0 ? 12 : h; return ('0' + h).slice(-2) + ':' + ('0' + mn).slice(-2) + ' ' + t; })(new Date());
}


/***/ }),

/***/ "../src/providers/Prompts.ts":
/*!***********************************!*\
  !*** ../src/providers/Prompts.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
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
        options.emitter = new core_1.EventEmitter();
        options.type = "alert";
        options.message = message;
        return this.issuePrompt(options);
    }
    confirm(message, options = {}) {
        options.emitter = new core_1.EventEmitter();
        options.type = "confirm";
        options.message = message;
        return this.issuePrompt(options);
    }
};
Prompts = __decorate([
    core_1.Injectable()
], Prompts);
exports.Prompts = Prompts;


/***/ }),

/***/ "../src/providers/UrlVars.ts":
/*!***********************************!*\
  !*** ../src/providers/UrlVars.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const WindowService_1 = __webpack_require__(/*! ./WindowService */ "../src/providers/WindowService.ts");
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
UrlVars = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [WindowService_1.WindowService])
], UrlVars);
exports.UrlVars = UrlVars;


/***/ }),

/***/ "../src/providers/WindowService.ts":
/*!*****************************************!*\
  !*** ../src/providers/WindowService.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
function getWindow() { return window; }
let WindowService = class WindowService {
    get nativeElement() { return getWindow(); }
    get nativeWindow() { return getWindow(); }
};
WindowService = __decorate([
    core_1.Injectable()
], WindowService);
exports.WindowService = WindowService;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/AckAppStage.component.ts":
/*!**************************************!*\
  !*** ./src/AckAppStage.component.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const ack_angular_fx_1 = __webpack_require__(/*! ack-angular-fx */ "../node_modules/ack-angular-fx/dist/index.js");
const packJson = __webpack_require__(/*! ../../package.json */ "../package.json");
const functions_1 = __webpack_require__(/*! ./functions */ "./src/functions.ts");
const states_object_1 = __webpack_require__(/*! ./states.object */ "./src/states.object.ts");
const ack_app_stage_pug_1 = __webpack_require__(/*! ./templates/ack-app-stage.pug */ "./src/templates/ack-app-stage.pug.ts");
let AckAppStage = class AckAppStage {
    constructor() {
        this.panelAnim = 'slideInRight';
        this.version = packJson['version'];
        this.menu = states_object_1.menu;
    }
    ngAfterViewInit() {
        console.log('Total Wire Time:', Date.now() - window['strapTime'] + 'ms');
        if (window['startAckTime']) {
            console.log('Overall Load Time:', Date.now() - window['startAckTime'] + 'ms', '@', functions_1.getServerTime());
        }
    }
};
AckAppStage = __decorate([
    core_1.Component({
        selector: 'ack-app-stage',
        template: ack_app_stage_pug_1.string,
        animations: ack_angular_fx_1.animations
    })
], AckAppStage);
exports.AckAppStage = AckAppStage;


/***/ }),

/***/ "./src/AnimationExamples.component.ts":
/*!********************************************!*\
  !*** ./src/AnimationExamples.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const animation_examples_pug_1 = __webpack_require__(/*! ./templates/animation-examples.pug */ "./src/templates/animation-examples.pug.ts");
const ack_angular_fx_1 = __webpack_require__(/*! ack-angular-fx */ "../node_modules/ack-angular-fx/dist/index.js");
let AnimationExamples = class AnimationExamples {
    constructor() {
        this.list = ['abc', 'defg', 'hij', 'klm', 'opq', 'rst', 'uvx', 'yz'];
    }
};
AnimationExamples = __decorate([
    core_1.Component({
        template: animation_examples_pug_1.string,
        animations: ack_angular_fx_1.animations
    })
], AnimationExamples);
exports.AnimationExamples = AnimationExamples;


/***/ }),

/***/ "./src/ComponentsExamples.component.ts":
/*!*********************************************!*\
  !*** ./src/ComponentsExamples.component.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = __webpack_require__(/*! ./functions */ "./src/functions.ts");
const ngx_page_scroll_core_1 = __webpack_require__(/*! ngx-page-scroll-core */ "../node_modules/ngx-page-scroll-core/fesm2015/ngx-page-scroll-core.js");
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const ack_angular_fx_1 = __webpack_require__(/*! ack-angular-fx */ "../node_modules/ack-angular-fx/dist/index.js");
const arrayOfObjects_1 = __webpack_require__(/*! ./arrayOfObjects */ "./src/arrayOfObjects.ts");
const components_examples_pug_1 = __webpack_require__(/*! ./templates/components-examples.pug */ "./src/templates/components-examples.pug.ts");
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
        this.arrayOfObjects = arrayOfObjects_1.array;
        this.selectedArray = [
            arrayOfObjects_1.array[2],
            arrayOfObjects_1.array[4],
            arrayOfObjects_1.array[6],
            arrayOfObjects_1.array[8]
        ];
        this.absoluteOverflowXActive = true;
    }
    causeError() {
        this.error = new Error("An intended error was caused @ " + functions_1.getServerTime());
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
ComponentsExamples = __decorate([
    core_1.Component({
        selector: "components-examples",
        template: components_examples_pug_1.string,
        animations: ack_angular_fx_1.animations
    }),
    __metadata("design:paramtypes", [ngx_page_scroll_core_1.PageScrollService])
], ComponentsExamples);
exports.ComponentsExamples = ComponentsExamples;


/***/ }),

/***/ "./src/JjsWoz.component.ts":
/*!*********************************!*\
  !*** ./src/JjsWoz.component.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const jjs_woz_pug_1 = __webpack_require__(/*! ./templates/jjs-woz.pug */ "./src/templates/jjs-woz.pug.ts");
let JjsWoz = class JjsWoz {
    constructor(ElementRef) {
        this.ElementRef = ElementRef;
    }
    ngOnInit() {
        this.ElementRef.nativeElement.getElementsByTagName('audio')[0].play();
    }
};
JjsWoz = __decorate([
    core_1.Component({
        selector: 'jjs-woz',
        template: jjs_woz_pug_1.string
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], JjsWoz);
exports.JjsWoz = JjsWoz;


/***/ }),

/***/ "./src/OverviewExamples.component.ts":
/*!*******************************************!*\
  !*** ./src/OverviewExamples.component.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const overview_examples_pug_1 = __webpack_require__(/*! ./templates/overview-examples.pug */ "./src/templates/overview-examples.pug.ts");
let OverviewExamples = class OverviewExamples {
};
OverviewExamples = __decorate([
    core_1.Component({
        selector: 'overview-examples',
        template: overview_examples_pug_1.string
    })
], OverviewExamples);
exports.OverviewExamples = OverviewExamples;


/***/ }),

/***/ "./src/PipesExamples.component.ts":
/*!****************************************!*\
  !*** ./src/PipesExamples.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const ack_angular_fx_1 = __webpack_require__(/*! ack-angular-fx */ "../node_modules/ack-angular-fx/dist/index.js");
const ngx_page_scroll_core_1 = __webpack_require__(/*! ngx-page-scroll-core */ "../node_modules/ngx-page-scroll-core/fesm2015/ngx-page-scroll-core.js");
const pipes_examples_pug_1 = __webpack_require__(/*! ./templates/pipes-examples.pug */ "./src/templates/pipes-examples.pug.ts");
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
PipesExamples = __decorate([
    core_1.Component({
        selector: "pipes-examples",
        template: pipes_examples_pug_1.string,
        animations: ack_angular_fx_1.animations
    }),
    __metadata("design:paramtypes", [ngx_page_scroll_core_1.PageScrollService])
], PipesExamples);
exports.PipesExamples = PipesExamples;


/***/ }),

/***/ "./src/ProviderExamples.component.ts":
/*!*******************************************!*\
  !*** ./src/ProviderExamples.component.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const ngx_page_scroll_core_1 = __webpack_require__(/*! ngx-page-scroll-core */ "../node_modules/ngx-page-scroll-core/fesm2015/ngx-page-scroll-core.js");
const src_1 = __webpack_require__(/*! ../../src */ "../src/index.ts");
const ack_angular_fx_1 = __webpack_require__(/*! ack-angular-fx */ "../node_modules/ack-angular-fx/dist/index.js");
const provider_examples_pug_1 = __webpack_require__(/*! ./templates/provider-examples.pug */ "./src/templates/provider-examples.pug.ts");
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
ProviderExamples = __decorate([
    core_1.Component({
        selector: "provider-examples",
        template: provider_examples_pug_1.string,
        animations: ack_angular_fx_1.animations
    }),
    __metadata("design:paramtypes", [src_1.Log,
        src_1.ErrorLog,
        ngx_page_scroll_core_1.PageScrollService,
        src_1.AckOffline,
        src_1.AckCache,
        src_1.AckQue,
        src_1.AckApi,
        src_1.Prompts])
], ProviderExamples);
exports.ProviderExamples = ProviderExamples;
function getServerTime(d) {
    d = d || new Date();
    var h = d.getHours(), t = "AM", m = d.getMinutes();
    m = m < 10 ? "0" + m : m;
    h = h >= 12 ? (t = "PM", h - 12 || 12) : h == 0 ? 12 : h;
    return ("0" + h).slice(-2) + ":" + m + ":" + ("0" + d.getSeconds()).slice(-2) + "." + d.getMilliseconds() + " " + t;
}


/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
window["strapTime"] = Date.now();
const functions_1 = __webpack_require__(/*! ./functions */ "./src/functions.ts");
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const ack_angular_fx_1 = __webpack_require__(/*! ack-angular-fx */ "../node_modules/ack-angular-fx/dist/index.js");
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
const animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "../node_modules/@angular/platform-browser/fesm2015/animations.js");
const RouteWatchReporter_1 = __webpack_require__(/*! ../../src/RouteWatchReporter */ "../src/RouteWatchReporter.ts");
const RouteReporter_directive_1 = __webpack_require__(/*! ../../src/RouteReporter.directive */ "../src/RouteReporter.directive.ts");
const src_1 = __webpack_require__(/*! ../../src */ "../src/index.ts");
const ngx_page_scroll_core_1 = __webpack_require__(/*! ngx-page-scroll-core */ "../node_modules/ngx-page-scroll-core/fesm2015/ngx-page-scroll-core.js");
const ngx_page_scroll_1 = __webpack_require__(/*! ngx-page-scroll */ "../node_modules/ngx-page-scroll/fesm2015/ngx-page-scroll.js");
const ProviderExamples_component_1 = __webpack_require__(/*! ./ProviderExamples.component */ "./src/ProviderExamples.component.ts");
const AckAppStage_component_1 = __webpack_require__(/*! ./AckAppStage.component */ "./src/AckAppStage.component.ts");
const states_object_1 = __webpack_require__(/*! ./states.object */ "./src/states.object.ts");
const AnimationExamples_component_1 = __webpack_require__(/*! ./AnimationExamples.component */ "./src/AnimationExamples.component.ts");
const JjsWoz_component_1 = __webpack_require__(/*! ./JjsWoz.component */ "./src/JjsWoz.component.ts");
const OverviewExamples_component_1 = __webpack_require__(/*! ./OverviewExamples.component */ "./src/OverviewExamples.component.ts");
const ComponentsExamples_component_1 = __webpack_require__(/*! ./ComponentsExamples.component */ "./src/ComponentsExamples.component.ts");
const PipesExamples_component_1 = __webpack_require__(/*! ./PipesExamples.component */ "./src/PipesExamples.component.ts");
exports.declarations = [
    AckAppStage_component_1.AckAppStage,
    RouteReporter_directive_1.RouteReporter,
    AnimationExamples_component_1.AnimationExamples,
    OverviewExamples_component_1.OverviewExamples,
    ComponentsExamples_component_1.ComponentsExamples,
    PipesExamples_component_1.PipesExamples,
    ProviderExamples_component_1.ProviderExamples,
    JjsWoz_component_1.JjsWoz,
    ...states_object_1.declarations
];
const forms_1 = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm2015/forms.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            http_1.HttpClientModule,
            states_object_1.routing,
            ngx_page_scroll_core_1.NgxPageScrollCoreModule.forRoot({}),
            ngx_page_scroll_1.NgxPageScrollModule,
            src_1.AckModule.forRoot(),
            ack_angular_fx_1.AckFxModule
        ],
        declarations: exports.declarations,
        providers: [
            RouteWatchReporter_1.RouteWatchReporter
        ],
        bootstrap: [AckAppStage_component_1.AckAppStage]
    })
], AppModule);
exports.AppModule = AppModule;
console.log("Ng Define Time", Date.now() - window["strapTime"] + "ms", "@", functions_1.getServerTime());


/***/ }),

/***/ "./src/arrayOfObjects.ts":
/*!*******************************!*\
  !*** ./src/arrayOfObjects.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.array = [{
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

/***/ "./src/functions.ts":
/*!**************************!*\
  !*** ./src/functions.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getServerTime(d) {
    d = d || new Date();
    var h = d.getHours(), t = 'AM', m = d.getMinutes();
    m = m < 10 ? '0' + m : m;
    h = h >= 12 ? (t = 'PM', h - 12 || 12) : h == 0 ? 12 : h;
    return ('0' + h).slice(-2) + ':' + m + ':' + ('0' + d.getSeconds()).slice(-2) + '.' + d.getMilliseconds() + ' ' + t;
}
exports.getServerTime = getServerTime;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! zone.js */ "../node_modules/zone.js/dist/zone.js");
__webpack_require__(/*! reflect-metadata */ "../node_modules/reflect-metadata/Reflect.js");
const platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
core_1.enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ "./src/states.object.ts":
/*!******************************!*\
  !*** ./src/states.object.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const ComponentsExamples_component_1 = __webpack_require__(/*! ./ComponentsExamples.component */ "./src/ComponentsExamples.component.ts");
const OverviewExamples_component_1 = __webpack_require__(/*! ./OverviewExamples.component */ "./src/OverviewExamples.component.ts");
const PipesExamples_component_1 = __webpack_require__(/*! ./PipesExamples.component */ "./src/PipesExamples.component.ts");
const ProviderExamples_component_1 = __webpack_require__(/*! ./ProviderExamples.component */ "./src/ProviderExamples.component.ts");
const AnimationExamples_component_1 = __webpack_require__(/*! ./AnimationExamples.component */ "./src/AnimationExamples.component.ts");
const JjsWoz_component_1 = __webpack_require__(/*! ./JjsWoz.component */ "./src/JjsWoz.component.ts");
let FakeComponent = class FakeComponent {
};
FakeComponent = __decorate([
    core_1.Component({ template: '' })
], FakeComponent);
exports.FakeComponent = FakeComponent;
exports.declarations = [
    FakeComponent
];
exports.menu = [
    {
        name: 'overview',
        path: 'overview',
        component: OverviewExamples_component_1.OverviewExamples,
        data: {
            title: "Overview"
        },
    }, {
        name: 'components',
        path: 'components',
        component: ComponentsExamples_component_1.ComponentsExamples,
        data: {
            title: "Components"
        }
    }, {
        name: 'pipes',
        path: 'pipes',
        component: PipesExamples_component_1.PipesExamples,
        data: {
            title: "Pipes"
        }
    }, {
        name: 'animations',
        path: 'animations',
        component: AnimationExamples_component_1.AnimationExamples,
        data: {
            title: "Animations"
        }
    }, {
        name: 'providers',
        path: 'providers',
        component: ProviderExamples_component_1.ProviderExamples,
        data: {
            title: "Providers"
        }
    }, {
        name: 'jjswoz',
        path: 'jjswoz',
        component: JjsWoz_component_1.JjsWoz,
        data: {
            title: "JJ's WoZ"
        }
    }
];
exports.routes = [
    ...exports.menu,
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: '**', redirectTo: 'overview' }
];
exports.routeConfig = { useHash: true, initialNavigation: true, enableTracing: false };
exports.routing = router_1.RouterModule.forRoot(exports.routes, exports.routeConfig);


/***/ }),

/***/ "./src/templates/ack-app-stage.pug.ts":
/*!********************************************!*\
  !*** ./src/templates/ack-app-stage.pug.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<ng-container [(htmlWidthModel)]=\"screenWidthModel\"></ng-container><route-reporter (beforeChange)=\"panelAnim=$event.isBackMode?'slideInLeft':'slideInRight';isBackMode=$event.isBackMode;\" (onChange)=\"stateName=$event.current.config.name\"></route-reporter><ack-fixed-element-stage></ack-fixed-element-stage><div id=\"top\"></div><reader-header-body style=\"font-size:16px;\"><ack-sections mode=\"clone\"><ack-section-templates *ngIf=\"screenWidthModel &lt; 800\"><ng-template #sectionFooter=\"\"><absolute-overflow-x class=\"bg-info text-center border-top border-grey-2x\" [@fadeInOutUp]=\"1\"><div class=\"flex child-hover-bg-warning child-pad-h-lg child-pad-v-sm\"><a class=\"nowrap no-a-style flex-1 border-right border-white height-60 flex-valign-center\" *ngFor=\"let item of menu\" [ngClass]=\"{'strong bg-energized':stateName==item.path}\" [href]=\"'#/' + item.path\">{{ item.data.title }}</a></div></absolute-overflow-x></ng-template></ack-section-templates><fx-tracker #fx=\"FxTracker\" [activatedRoute]=\"routerOutlet.activated ? routerOutlet.activatedRoute : null\"></fx-tracker><table class=\"height-full width-full\" cellPadding=\"0\" cellSpacing=\"0\" border=\"0\"><tbody><tr><td><div style=\"max-width:1000px\"><div class=\"bg-energized border-grey-3x border-left-1 border-right-1\"><div class=\"flex-valign-center flex-wrap\"><strong class=\"margin-0\" [ngClass]=\"screenWidthModel &gt; 800 ? 'pad-xs text-6x' : 'pad-xxs text-4x'\"><span class=\"text-sm\">🚴</span>&nbsp;ack-angular</strong><span class=\"text-right flex-1 text-white pad-right-xs\">v{{ version }}</span></div></div><div *ngIf=\"screenWidthModel &gt; 800\" [@fadeInOutUp]=\"1\"><scroll-past-fixed><div style=\"max-width:1000px\"><absolute-overflow-x class=\"bg-info text-center border-bottom border-grey-2x\"><div class=\"flex child-hover-bg-warning child-pad-sm text-2x\"><a class=\"no-a-style flex-1 border-right border-white\" *ngFor=\"let item of menu\" [ngClass]=\"{'strong bg-energized':stateName==item.path}\" [href]=\"'#/' + item.path\">{{ item.data.title }}</a></div></absolute-overflow-x></div></scroll-past-fixed></div></div></td></tr><tr><td class=\"width-full height-full bg-white border-grey-3x\"><table class=\"width-full height-full\" cellPadding=\"0\" cellSpacing=\"0\" border=\"0\"><tr><td [ngClass]=\"screenWidthModel&gt;=800 ? 'width-20' : 'width-10'\"></td><td><div class=\"text-left height-full pad-top-lg\" [@slideInOutLeftKids]=\"{value:fx.id, params:{time:'500ms'}}\" [@absoluteKids]=\"{value:fx.id, params:{time:'500ms'}}\" (@absoluteKids.start)=\"inFx=true\" (@absoluteKids.done)=\"inFx=false\" [style.max-width.px]=\"screenWidthModel - (screenWidthModel&gt;=800 ? 40 : 20)\" [ngStyle]=\"inFx ? {position:'relative',overflow:'hidden'} : null\"><router-outlet #routerOutlet=\"outlet\"></router-outlet></div></td><td [ngClass]=\"screenWidthModel&gt;=800 ? 'width-20' : 'width-10'\"></td></tr></table></td></tr><tr><td><div class=\"text-center\" *ngIf=\"!inFx\"><br/><a class=\"text-xs\" href=\"#top\" pageScroll=\"pageScroll\">top</a><br/><br/></div></td></tr></tbody></table></ack-sections></reader-header-body>";


/***/ }),

/***/ "./src/templates/animation-examples.pug.ts":
/*!*************************************************!*\
  !*** ./src/templates/animation-examples.pug.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<h2 class=\"margin-top-0\">Animations</h2><p class=\"text-grey-2x\">Make an app far more beautiful when changing scenery</p>Currently, all animations are provided by <a href=\"https://npmjs.org/ack-angular-fx\">ack-angular-fx</a><ul><li><a href=\"https://ackerapple.github.io/ack-angular-fx/\">examples</a></li><li><a href=\"https://github.com/AckerApple/ack-angular-fx\">repository</a></li></ul><h4>Table of Contents</h4><ul class=\"child-pad-xxs\"><li><a href=\"#Import Example\" pageScroll=\"pageScroll\">Import Example</a></li><li><a href=\"#Usage Example\" pageScroll=\"pageScroll\">Usage Example</a></li></ul><h3 id=\"Import Example\">Import Example</h3><pre class=\"code-sample\" ngNonBindable=\"ngNonBindable\">import &#123; Component &#125; from '@angular/core'" +
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

/***/ "./src/templates/components-examples.pug.ts":
/*!**************************************************!*\
  !*** ./src/templates/components-examples.pug.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<h2 class=\"margin-top-0\">Components</h2><div class=\"margin-xxs\"><p class=\"margin-bottom-0\">Import Example</p><div class=\"text-warning text-xs\">The following import code, is NOT needed if you used the AckModule import <a class=\"text-calm\" href=\"#/overview\" (click)=\"scrollToModuleImport()\">seen here</a></div><pre class=\"code-sample\" ngNonBindable=\"ngNonBindable\">import &#123; declarations as ackDecs &#125; from \"ack-angular/components\"" +
    "\nimport &#123; NgModule &#125; from '@angular/core';" +
    "\n" +
    "\n@NgModule(&#123;" +
    "\n  declarations:ackDecs" +
    "\n&#125;)" +
    "\n</pre></div><br/><h4 class=\"margin-bottom-0\">Table of Contents</h4><ul><li><a href=\"#Tags\" pageScroll=\"pageScroll\">Tags</a></li><li><a href=\"#ExpressionBinds\" pageScroll=\"pageScroll\">Expression Binds</a></li><li><a href=\"#OneWayBinds\" pageScroll=\"pageScroll\">One Way Binds</a></li><li><a href=\"#TwoWayBinds\" pageScroll=\"pageScroll\">Two Way Binds</a></li><li><a href=\"#LayoutComponents\" pageScroll=\"pageScroll\">Layout Components</a></li><li><a href=\"#ComplexComponents\" pageScroll=\"pageScroll\">Complex Components" +
    "\n</a></li></ul><br/><h3 class=\"margin-bottom-0\" id=\"Tags\">Tags</h3><div class=\"flex-wrap child-margin-xxs\"><div class=\"flex-1\" [class.width-full]=\"views.ackFixedElmStage\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>ack-fixed-element-stage</h3><div class=\"text-grey-2x max-width-400\">Required to use such components as &lt;ack-model&gt;, &lt;ack-options-modal&gt;, and the Confirm provider</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.ackFixedElmStage=!views.ackFixedElmStage\" [ngClass]=\"views.ackFixedElmStage?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.ackFixedElmStage\" [@fadeInOutUp]=\"1\"><div class=\"pad\">Use ONLY ONE time. This is a display control component for other components. It has no natural display until position fixed elements, such as modals, need to be rendered to screen.</div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;!DOCTYPE html&gt;" +
    "\n&lt;html lang=\"en\"&gt;" +
    "\n  &lt;head&gt;&lt;/head&gt;" +
    "\n  &lt;body&gt;" +
    "\n    &lt;ack-fixed-element-stage&gt;&lt;/ack-fixed-element-stage&gt;" +
    "\n  &lt;/body&gt;" +
    "\n&lt;/html&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>ack-close-icon</h3><div class=\"text-grey-2x max-width-400\">A super convenient html based close icon. No img refs. No style sheet refs<ack-close-icon></ack-close-icon></div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.ackCloseIcon=!views.ackCloseIcon\" [ngClass]=\"views.ackCloseIcon?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.ackCloseIcon\" [@fadeInOutUp]=\"1\"><div class=\"pad\"><ack-close-icon (click)=\"views.ackCloseIcon=false\"></ack-close-icon></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;ack-close-icon (click)=\"views.ackCloseIcon=false\"&gt;&lt;/ack-close-icon&gt;" +
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
    "\n</pre></absolute-overflow-x></div></div></div><br/><h3 class=\"margin-bottom-0\" id=\"ExpressionBinds\">Expression Binds</h3><div class=\"flex-wrap child-margin-xxs\"><div class=\"flex-1\" [class.width-full]=\"views.init\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>(init)</h3><div class=\"text-grey-2x max-width-400\">execute expression at render</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.init=!views.init\" [ngClass]=\"views.init?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.init\" [@fadeInOutUp]=\"1\"><div *ngFor=\"let item of initArray;let i=index\" (init)=\"item.name=item.name || 'no-name-'+(item.value+1)\">init val {{i}} {{ item.name }}</div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">@Component(&#123;" +
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
    "\n</pre></absolute-overflow-x></div></div></div><br/><h3 class=\"margin-bottom-0\" id=\"OneWayBinds\">One Way Binds</h3><div class=\"flex-wrap child-margin-xxs\"><div class=\"flex-1\" [class.width-full]=\"views.Var\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>[var]</h3><div class=\"text-grey-2x max-width-400\">Create local template variables</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.Var=!views.Var\" [ngClass]=\"views.Var?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.Var\" [@fadeInOutUp]=\"1\"><div class=\"pad-sm\"><h4 class=\"margin-0\">Demo</h4><p class=\"text-grey-3x text-sm\">Each item in list below, has a localized variable</p><div class=\"flex-wrap child-margin-xxs\" #myVar=\"var\" [var]=\"0\"><button (click)=\"myVar.var=myVar.var+1\">outsize memory {{ myVar.var }}</button><button *ngFor=\"let i of [0,1,2,3]\" #myVar=\"var\" [var]=\"i\" (click)=\"myVar.var=myVar.var+1\">click count + index {{ myVar.var }}</button></div></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div #myVar=\"var\" [var]=\"0\"&gt;" +
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
    "\n</pre></absolute-overflow-x></div></div></div><br/><h3 class=\"margin-bottom-0\" id=\"TwoWayBinds\">Two Way Binds</h3><div class=\"flex-wrap child-margin-xxs\"> <div class=\"flex-1\" [class.width-full]=\"views.statusOnlineModel\"><div class=\"border border-grey-4x border border-bottom-0\"><div [(statusOnlineModel)]=\"statusOnlineModel\"></div><div class=\"pad-h\"><h3>[(statusOnlineModel)]</h3><div class=\"text-grey-2x max-width-400\">Get browser internet status. <strong>IS ONLINE</strong> :<div class=\"inline-block width-50\">&nbsp;{{ statusOnlineModel }}</div></div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.statusOnlineModel=!views.statusOnlineModel\" [ngClass]=\"views.statusOnlineModel?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.statusOnlineModel\" [@fadeInOutUp]=\"1\"><div class=\"pad\"><div class=\"pad bg-warning border-warning border text-warning\">Completely turn off your internet and the online status will change.<br/>A delay is expected during transition from offline to online</div></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div(\"[(statusOnlineModel)]\"=\"statusOnlineModel\")&gt;" +
    "\n  |statusOnlineModel : {{ statusOnlineModel ? 'online' : 'offline'}}" +
    "\n&lt;/div&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\" [class.width-full]=\"views.statusOfflineModel\"><div class=\"border border-grey-4x border border-bottom-0\"><div [(statusOfflineModel)]=\"statusOfflineModel\"></div><div class=\"pad-h\"><h3>[(statusOfflineModel)]</h3><div class=\"text-grey-2x max-width-400\">Get browser internet status. <strong>IS OFFLINE</strong> :<div class=\"inline-block width-50\">&nbsp;{{ statusOfflineModel }}</div></div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.statusOfflineModel=!views.statusOfflineModel\" [ngClass]=\"views.statusOfflineModel?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.statusOfflineModel\" [@fadeInOutUp]=\"1\"><div class=\"pad\"><div class=\"pad bg-warning border-warning border text-warning\"></div>Completely turn off your internet and the offline status will change<br/>A delay is expected during transition from offline to online</div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div(\"[(statusOfflineModel)]\"=\"statusOfflineModel\")&gt;" +
    "\n  |statusOfflineModel : {{ statusOfflineModel ? 'offline' : 'online'}}" +
    "\n&lt;/div&gt;" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex-1\" [class.width-full]=\"views.pxFromHtmlTop\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>[pxFromHtmlTop]</h3><div class=\"text-grey-2x\">Get element position from top of screen.<div class=\"inline-block width-50\" [(pxFromHtmlTop)]=\"pxFromHtmlTop\">Currently:&nbsp;{{pxFromHtmlTop}}</div></div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.pxFromHtmlTop=!views.pxFromHtmlTop\" [ngClass]=\"views.pxFromHtmlTop ? 'border-energized bg-energized' : 'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.pxFromHtmlTop\" [@fadeInOutUp]=\"1\"><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div [(pxFromHtmlTop)]=\"pxFromHtmlTop\" &gt;" +
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
    "\n</pre></absolute-overflow-x></div></div></div><br/><h3 class=\"margin-bottom-0\" id=\"LayoutComponents\">Layout Components</h3><div class=\"pad\"><div class=\"pad bg-warning border-warning text-warning border\">You will need to &lt;link&gt; one of two style sheets:<ul><li>ack-angular/ack-angular.css</li><li>- or -</li><li>ack-angular/ack-css-boot.css</li></ul></div></div><div class=\"flex-wrap child-margin-xxs\"><div class=\"flex-1\" [class.width-full]=\"views.errorWell\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>error-well</h3><div class=\"text-grey-2x max-width-400\">a smart and simple place to display errors</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.errorWell=!views.errorWell\" [ngClass]=\"views.errorWell?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.errorWell\" [@fadeInOutUp]=\"1\"><h4 class=\"pad-sm margin-0\">Example</h4><div class=\"pad\"><select name=\"cssClasses\" [(ngModel)]=\"cssClasses\"><option value=\"bg-info border-info text-info\">bg-info border-info text-info</option><option value=\"bg-warning border-warning text-warning\">bg-warning border-warning text-warning</option><option value=\"bg-danger border-danger text-danger\">bg-danger border-danger text-danger</option><option value=\"bg-energized border-energized text-energized\">bg-energized border-energized text-energized</option><option value=\"bg-calm border-calm text-calm\">bg-calm border-calm text-calm</option><option value=\"bg-assertive border-assertive text-assertive\">bg-assertive border-assertive text-assertive</option><option value=\"bg-success border-success text-success\">bg-success border-success text-success</option><option value=\"bg-positive border-positive text-positive\">bg-positive border-positive text-positive</option><option value=\"bg-balanced border-balanced text-balanced\">bg-balanced border-balanced text-balanced</option><option value=\"bg-stable border-stable text-stable\">bg-stable border-stable text-stable</option><option value=\"bg-dark border-dark text-dark\">bg-dark border-dark text-dark</option><option value=\"bg-royal border-royal text-royal\">bg-royal border-royal text-royal</option></select><error-well class=\"margin\" [error]=\"error\" [cssClasses]=\"cssClasses\"></error-well><button (click)=\"causeError()\">cause error</button></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;error-well [error]=\"error\"&gt;&lt;/error-well&gt;</pre></absolute-overflow-x><h4 class=\"pad-sm margin-0\">Advanced Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;error-well [error]=\"error\" [closable]=\"1\" [allowDetails]=\"1\"&gt;&lt;/error-well&gt;" +
    "\n</pre></absolute-overflow-x></div></div></div><br/><h3 id=\"ComplexComponents\">Complex Components</h3><div class=\"pad-h\"><p class=\"margin-bottom-0\">Components that have additional dependencies or restrictions</p></div><div class=\"flex-wrap child-margin-xxs\"><div class=\"flex-1 border border-grey-4x border\" [class.width-full]=\"views.routeReporter\"><div class=\"pad-h\"><h3>route-reporter</h3><div class=\"text-grey-2x max-width-400\">Get in tune with router states when using @angular/router</div><br/></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"views.routeReporter=!views.routeReporter\" [ngClass]=\"views.routeReporter?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.routeReporter\" [@fadeInOutUp]=\"1\"><div class=\"pad\">Bindings<table cellPadding=\"2\" cellSpacing=\"0\" border=\"0\"><tr><td>[(state)]</td><td>Creates a reference to the current route</td></tr><tr><td>[(params)]</td><td>Creates a reference to the current route's params</td></tr><tr><td>[(query)]</td><td>Creates a reference to the current route's query params</td></tr><tr><td>(beforeChange)</td><td>Expression bind called before route changes</td></tr><tr><td>(onChange)</td><td>Expression bind called when route changes</td></tr></table></div><route-reporter #routeState=\"RouteReporter\" [(query)]=\"query\"></route-reporter><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-x><pre class=\"code-sample margin-0\"><div ngNonBindable=\"ngNonBindable\">&lt;route-reporter" +
    "\n  #routeState = \"RouteReporter\"" +
    "\n  [(query)]     = \"query\"" +
    "\n&gt;&lt;/route-reporter&gt;" +
    "\n</div><div><span ngNonBindable=\"ngNonBindable\">{{ routeState.current?.config.name }}</span><span>&nbsp;==&nbsp;</span><span>{{ routeState.current?.config.name }}</span></div><div><span ngNonBindable=\"ngNonBindable\">{{ query | json }}</span><span>&nbsp;==&nbsp;</span><span>{{ query | json }}</span></div></pre></absolute-overflow-x></div></div></div>";


/***/ }),

/***/ "./src/templates/jjs-woz.pug.ts":
/*!**************************************!*\
  !*** ./src/templates/jjs-woz.pug.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<h2 class=\"margin-top-0\">Jersey Jack's The Wizard of Oz</h2><audio style=\"display:none;\"><source src=\"WoZ.mp3\" type=\"audio/mpeg\"/></audio><div class=\"text-xs text-grey-2x text-center\">NOTE: This is not a sponsored nor paid advertisement. Just a showing of love for pinball.</div><div class=\"text-center flex-center flex-wrap\"><div class=\"flex-1\"><a href=\"http://www.jerseyjackpinball.com/\"><img class=\"width-full\" src=\"wizard75.png\" style=\"max-width:497px;\" border=\"0\"/><div class=\"margin text-info text-xs\">tap image above</div></a></div></div><div class=\"max-width-600\"><p>As a boy I fell in love with pinball, especially the memories with my mom yelling at the exciting parts of pinball play.</p><p class=\"text-grey-2x\">Then for years pinball disappeard along with the arcades, for quite some time.</p><p>I have fallen back into loving pinball! Pinball is back! And I only had to play this modern pinball machine one time, The Wizard of Oz - 75th Anniversary Edition by <a href=\"http://www.jerseyjackpinball.com/\">Jersey Jack Pinball</a>. This machine with it's great marriage of hardware to software, pulled the child out of this Software Engineer.</p><p>You should check her out too. She's a beauty with her purty color changing LED lights.</p><p class=\"text-grey\">_Acker Apple</p></div>";


/***/ }),

/***/ "./src/templates/overview-examples.pug.ts":
/*!************************************************!*\
  !*** ./src/templates/overview-examples.pug.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<h2 class=\"margin-top-0\">Overview</h2><p class=\"pad-h\"><strong>ack-angular</strong>&nbsp;is extra special directives, components, providers and pipes to aide in tackling everyday Angular2 driven development.</p><h4>Table of Contents</h4><ul class=\"margin-top-0\"><li><a href=\"#Install ack-angular\" pageScroll=\"pageScroll\">Install ack-angular</a></li><li><a href=\"#Import AckModule\" pageScroll=\"pageScroll\">Import AckModule</a></li><li><a href=\"#Requirements\" pageScroll=\"pageScroll\">Requirements</a></li><li><a href=\"#This Demo Area\" pageScroll=\"pageScroll\">This Demo Area</a></li><li><a href=\"#Available Stylesheets\" pageScroll=\"pageScroll\">Available Stylesheets</a></li><li><a href=\"#Resources\" pageScroll=\"pageScroll\">Resources</a></li><li><a href=\"#My Personal TypeScript Opinion\" pageScroll=\"pageScroll\">My Personal TypeScript Opinion</a></li><li><a href=\"#ack-angularjs\" pageScroll=\"pageScroll\">ack-angularjs</a></li></ul><br/><h3 class=\"margin-bottom-0\" id=\"Install ack-angular\">Install ack-angular</h3><p>Install jsDependencies via <a href=\"https://www.npmjs.com/package/ack-webpack\">ack-webpack</a></p><div class=\"pad text-grey-2x text-sm\">NOTE : ack-webpack reads the jsDependencies in a package.json to then install packages. Also when ack-webpack is installed, it auto adds a script entry to your package.json file to make CLI commands easier.</div><strong>Step 1</strong><pre class=\"code-sample\">npm install ack-webpack --save-dev</pre><strong>Step 2</strong><pre class=\"code-sample\">npm run ack-webpack -- install ack-angular</pre><br/><h3 class=\"margin-bottom-0\" id=\"Import AckModule\">Import AckModule</h3><div class=\"pad\"><p>Most all functionality can be achieved by importing AckModule</p><p>Example</p><pre class=\"code-sample\">import &#123; AckModule &#125; from \"ack-angular\"" +
    "\nimport &#123; NgModule &#125; from \"@angular/core\"" +
    "\n" +
    "\n@NgModule(&#123;" +
    "\n  imports:[ AckModule.forRoot() ]" +
    "\n&#125;)" +
    "\n</pre><div class=\"pad-xxs\"><div class=\"pad bg-warning bg-warning text-warning\">NOTE : You need to have the <a href=\"https://www.typescriptlang.org/docs/handbook/compiler-options.html\">allowSyntheticDefaultImports compiler option</a> set to <strong>true</strong> in your <a href=\"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html\">tsconfig.json</a>.</div></div></div><br/><h3 class=\"margin-bottom-0\" id=\"Requirements\">Requirements</h3><div class=\"pad\"><p>It is very important to understand what connects where</p></div><ul><li>core angular components are expected to have already been installed</li><ul><li>reflect-metadata</li><li>@angular/core</li><li>@angular/forms</li><li>@angular/common/http</li></ul><li>jsDependencies</li><ul><li><a href=\"https://www.npmjs.com/package/ack-angular-fx\">ack-angular-fx</a></li><ul><li>only required for animation implementing</li><li>The following code would depend on ack-angular-fx installation<pre class=\"code-sample\">import * as fx from \"ack-angular/fx\"</pre></li></ul><li><a href=\"https://www.npmjs.com/package/@angular/router\">@angular/router</a></li><ul><li>only required for @angular/router based ack-angular component and services</li><li>The following code would depend on @angular/router installation<pre class=\"code-sample\">import &#123; RouteReporter &#125; from \"ack-angular/RouteReporter.directive\"" +
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

/***/ "./src/templates/pipes-examples.pug.ts":
/*!*********************************************!*\
  !*** ./src/templates/pipes-examples.pug.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<h2 class=\"margin-top-0\">Pipes</h2><p class=\"text-sm text-grey-2x\">Decorate and filter output via Pipes</p><p class=\"margin-bottom-0\">Import Example</p><div class=\"pad-h text-warning text-xs\">The following import code, is NOT needed if you used the AckModule import <a class=\"text-calm\" href=\"#/overview\" (click)=\"scrollToModuleImport()\">seen here</a></div><pre class=\"code-sample\">import &#123; NgModule &#125; from '@angular/core'" +
    "\nimport &#123; AppComponent &#125; from './SomeRandomComponent'" +
    "\n" +
    "\nimport * as ackPipes from 'ack-angular/pipes'" +
    "\n" +
    "\n@NgModule(&#123;" +
    "\n  declarations : [ AppComponent, ...ackPipes.declarations ]" +
    "\n&#125;) export class AppModule &#123;&#125;" +
    "\n</pre><br/><h3 id=\"Documentation\">Documentation</h3><div class=\"flex-wrap child-margin-xxs\"><div class=\"flex3 border-grey-6x border width-full\"><div class=\"pad-h\"><h3>textDownload &amp; safeUrl</h3><p class=\"text-sm text-grey-2x\">Cast string to a data:text/plain uri</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.SafeUrl=!views.SafeUrl\" [ngClass]=\"views.SafeUrl?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"views.SafeUrl\" [@fadeInOutUp]=\"1\"><absolute-overflow-x><pre class=\"code-sample margin-0\"><span ngNonBindable=\"ngNonBindable\">&lt;a [href]=\"'Usage Examples' | textDownload | safeUrl\" download=\"download.txt\"&gt;" +
    "\n  download" +
    "\n&lt;/a&gt;</span><span class=\"pad-h\">== <a [href]=\"'Usage Examples' | textDownload | safeUrl\" download=\"download.txt\">download</a></span></pre></absolute-overflow-x></div></div><div class=\"flex2 border-grey-6x border width-full\"><div class=\"pad-h\"><h3>safeStyle</h3><p class=\"text-sm text-grey-2x\">Cast string to safe style</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.safeStyle=!views.safeStyle\" [ngClass]=\"views.safeStyle?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"views.safeStyle\" [@fadeInOutUp]=\"1\"><absolute-overflow-x><pre class=\"code-sample margin-0\"><span ngNonBindable=\"ngNonBindable\">&lt;span [ngStyle]=\"&#123;'...':('...'|safeStyle)&#125;\"&gt;" +
    "\n  trusted style" +
    "\n&lt;/span&gt;</span><span class=\"pad-h\">== <span [ngStyle]=\"{'...':('...'|safeStyle)}\">safe styled</span></span></pre></absolute-overflow-x></div></div><div class=\"flex3 border-grey-6x border width-full\"><div class=\"pad-h\"><h3>safeHtml</h3><p class=\"text-sm text-grey-2x\">Cast string to safe html</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.safeHtml=!views.safeHtml\" [ngClass]=\"views.safeHtml?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"views.safeHtml\" [@fadeInOutUp]=\"1\"><absolute-overflow-x><pre class=\"code-sample margin-0\"><span ngNonBindable=\"ngNonBindable\">&lt;span class=\"safeHtml\" [innerHtml]=\"'&lt;style&gt;.safeHtml&#123;border:1px solid purple&#125;.safeHtml::before&#123;content:\\\"trusted html\\\"&#125;&lt;/style&gt;'|safeHtml\"&gt;" +
    "\n  untrusted html" +
    "\n&lt;/span&gt;</span><span class=\"pad-h\">==&nbsp;</span><span class=\"safeHtml\" [innerHtml]=\"'&lt;style&gt;.safeHtml{border:1px solid purple}.safeHtml::before{content:\&quot;trusted html\&quot;}&lt;/style&gt;'|safeHtml\">untrusted html</span></pre></absolute-overflow-x></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>markdownAnchor</h3><p class=\"text-sm text-grey-2x\">Cast string to a github markdown #anchor</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.markdownAnchor=!views.markdownAnchor\" [ngClass]=\"views.markdownAnchor?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"views.markdownAnchor\" [@fadeInOutUp]=\"1\"><absolute-overflow-x><pre class=\"code-sample margin-0\"><span ngNonBindable=\"ngNonBindable\">{{ 'Usage Examples' | markdownAnchor }}</span><span class=\"pad-h\">== {{ 'Usage Examples' | markdownAnchor }}</span></pre></absolute-overflow-x></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>typeof</h3><p class=\"text-sm text-grey-2x\">Result of native javascript typeof</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.typeof=!views.typeof\" [ngClass]=\"views.typeof?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"views.typeof\" [@fadeInOutUp]=\"1\"><absolute-overflow-x><pre class=\"code-sample margin-0\"><span ngNonBindable=\"ngNonBindable\">{{ 0 | typeof }}</span><span class=\"pad-h\">== {{ 0 | typeof }}</span></pre></absolute-overflow-x></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>between</h3><p class=\"text-sm text-grey-2x\">(input &gt;= a &amp;&amp; input &lt;= b) || (input &lt;= a &amp;&amp; input &gt;= b)</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.between=!views.between\" [ngClass]=\"views.between?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"views.between\" [@fadeInOutUp]=\"1\"><absolute-overflow-x><pre class=\"code-sample margin-0\"><span ngNonBindable=\"ngNonBindable\">{{ 10 | between : 5 : 15 }}</span><span class=\"pad-h\">== {{ 10 | between : 5 : 15 }}</span></pre></absolute-overflow-x></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>numberSuffix</h3><p class=\"text-sm text-grey-2x\">suffix for a given number {{ 1|numberSuffix:1 }} {{ 2|numberSuffix:1 }} {{ 3|numberSuffix:1 }}</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.numberSuffix=!views.numberSuffix\" [ngClass]=\"views.numberSuffix?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"views.numberSuffix\" [@fadeInOutUp]=\"1\"><absolute-overflow-x><pre class=\"code-sample margin-0\"><div><span ngNonBindable=\"ngNonBindable\">1{{ 1 | numberSuffix }}</span><span class=\"pad-h\">== 1{{ 1 | numberSuffix }}</span></div><div><span ngNonBindable=\"ngNonBindable\">{{ 2 | numberSuffix : true }}</span><span class=\"pad-h\">== {{ 2 | numberSuffix : true }}</span></div><div><span ngNonBindable=\"ngNonBindable\">0{{ '0' | numberSuffix }}</span><span class=\"pad-h\">== 0{{ '0' | numberSuffix }}</span></div><div><span ngNonBindable=\"ngNonBindable\">{{ null | numberSuffix }}</span><span class=\"pad-h\">== {{ null | numberSuffix }}</span></div><div><span ngNonBindable=\"ngNonBindable\">13{{ '13' | numberSuffix }}</span><span class=\"pad-h\">== 13{{ '13' | numberSuffix }}</span></div><div><span ngNonBindable=\"ngNonBindable\">{{ '33' | numberSuffix : 1 }}</span><span class=\"pad-h\">== {{ '33' | numberSuffix : 1 }}</span></div></pre></absolute-overflow-x></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>numberToPhone</h3><p class=\"text-sm text-grey-2x\">Converts numbers in input into basic phone format</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.numberToPhone=!views.numberToPhone\" [ngClass]=\"views.numberToPhone?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"views.numberToPhone\" [@fadeInOutUp]=\"1\"><absolute-overflow-x><pre class=\"code-sample margin-0\"><div><span ngNonBindable=\"ngNonBindable\">{{ 8779276969 | numberToPhone }}</span><span class=\"pad-h\">== {{ 8779276969 | numberToPhone }}</span></div><div><span ngNonBindable=\"ngNonBindable\">{{ 'L8O7V7E9D2O7C6T9O6R9S' | numberToPhone }}</span><span class=\"pad-h\">== {{ 'L8O7V7E9D2O7C6T9O6R9S' | numberToPhone }}</span></div><div><span ngNonBindable=\"ngNonBindable\">{{ 'L8O7V7E9D2O' | numberToPhone }}</span><span class=\"pad-h\">== {{ 'L8O7V7E9D2O7C6T9O6' | numberToPhone }}</span></div><div><span ngNonBindable=\"ngNonBindable\">{{ 'L8O7V7E9D2O7C6T9O6' | numberToPhone }}</span><span class=\"pad-h\">== {{ 'L8O7V7E9D2O' | numberToPhone }}</span></div></pre></absolute-overflow-x></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>indexTrack</h3><p class=\"text-sm text-grey-2x\">Force ngFor into trackBy index</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.indexOf=!views.indexOf\" [ngClass]=\"views.indexOf?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"views.indexOf\" [@fadeInOutUp]=\"1\"><div class=\"pad-xs text-info text-sm\">Simple arrays like [\"a\",\"b\",\"c\"] are hard to work with ngFor + ngModel</div><strong>With indexTrack</strong><div *ngFor=\"let item of simpleArray; let i=index; trackBy:0|indexTrack\"><input class=\"width-full\" [(ngModel)]=\"simpleArray[i]\"/></div><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div *ngFor=\"let item of simpleArray; let i=index; trackBy:0|indexTrack\"&gt;" +
    "\n  &lt;input [(ngModel)]=\"simpleArray[i]\" /&gt;" +
    "\n&lt;/div&gt;</pre></absolute-overflow-x><br/><strong class=\"text-warning\">Without indexTrack</strong><div class=\"text-xs text-grey-2x pad-left-xs\">Inputs blur as you type in them</div><div *ngFor=\"let item of simpleArray; let i=index; trackBy:index\"><input class=\"width-full\" [(ngModel)]=\"simpleArray[i]\"/></div></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>arrayOfObjects</h3><p class=\"text-sm text-grey-2x\" ngNonBindable=\"ngNonBindable\">Param and cast an array into an array of &#123;value, index&#125; objects</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.arrayOfObjects=!views.arrayOfObjects\" [ngClass]=\"views.arrayOfObjects?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"views.arrayOfObjects\" [@fadeInOutUp]=\"1\"><div class=\"pad-xs text-warning\">Having troubles with *ngFor [(ngModel)] for simple array of strings? Try indexTrack, it's within ack-angular, first because it works far better" +
    "\n</div><div class=\"pad-xs text-info text-sm\">Simple arrays like [\"a\",\"b\",\"c\"] are hard to work with ngFor + ngModel. This pipe can help with that (not as well as indexTrack pipe)</div><strong>With arrayOfObjects</strong><div *ngFor=\"let item of simpleArray|arrayOfObjects\"><input class=\"width-full\" [(ngModel)]=\"simpleArray[ item.index ]\"/></div><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div *ngFor=\"let item of simpleArray|arrayOfObjects\"&gt;" +
    "\n  &lt;input [(ngModel)]=\"simpleArray[ item.index ]\" /&gt;" +
    "\n&lt;/div&gt;</pre></absolute-overflow-x><br/><strong class=\"text-warning\">Without arrayOfObjects</strong><div class=\"text-xs text-grey-2x pad-left-xs\">Inputs blur as you type in them</div><div *ngFor=\"let item of simpleArray; let i=index; trackBy:index\"><input class=\"width-full\" [(ngModel)]=\"simpleArray[i]\"/></div></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>array : repeat : repeatValue</h3><p class=\"text-sm text-grey-2x\">Force any variable to array</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.array=!views.array\" [ngClass]=\"views.array?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"views.array\" [@fadeInOutUp]=\"1\"><absolute-overflow-x><pre class=\"code-sample margin-0\"><span ngNonBindable=\"ngNonBindable\">{{ 'a' | array }}</span><span class=\"pad-h\">== {{ 'a' | array | stringify }}</span><br/><span ngNonBindable=\"ngNonBindable\">{{ 'a' | array : 3 }}</span><span class=\"pad-h\">== {{ 'a' | array : 3 | stringify }}</span><br/><span ngNonBindable=\"ngNonBindable\">{{ ['a'] | array : 3 : 1 }}</span><span class=\"pad-h\">== {{ ['a'] | array:3:1 | stringify }}</span><br/><span ngNonBindable=\"ngNonBindable\">{{ 'a' | array : 3 : 1 }}</span><span class=\"pad-h\">== {{ 'a' | array : 3 : 1 | stringify }}</span><br/><span ngNonBindable=\"ngNonBindable\">{{ 0 | array : 3 : 'b' }}</span><span class=\"pad-h\">== {{ 0 | array : 3 : 'b' | stringify }}</span><br/><span ngNonBindable=\"ngNonBindable\">{{ 'c' | array : 3 }}</span><span class=\"pad-h\">== {{ 'c' | array : 3 | stringify }}</span></pre></absolute-overflow-x></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>console</h3><p class=\"text-sm text-grey-2x\">console log result of native console.log() function</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.console=!views.console\" [ngClass]=\"views.console?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"views.console\" [@fadeInOutUp]=\"1\"><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">{{ 'message1' | console : 'message2' }}" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex3 border-grey-6x border\"><div class=\"pad-h\"><h3>capitalize</h3><p class=\"text-sm text-grey-2x\">Each sentence leading word is capitalized</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.capitalize=!views.capitalize\" [ngClass]=\"views.capitalize?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"views.capitalize\" [@fadeInOutUp]=\"1\"><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">{{ 'how do you do?' | capitalize }} == How do you do?" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>capitalizeWords</h3><p class=\"text-sm text-grey-2x\">Every word is capitalized</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.capitalizeWords=!views.capitalizeWords\" [ngClass]=\"views.capitalizeWords?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"views.capitalizeWords\" [@fadeInOutUp]=\"1\"><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">{{ 'how do you do?' | capitalizeWords }} == How Do You Do?" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>bit</h3><p class=\"text-sm text-grey-2x\">Truthy value converts to: 1. Otherwise: 0</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.bit=!views.bit\" [ngClass]=\"views.bit?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"views.bit\" [@fadeInOutUp]=\"1\"><absolute-overflow-x><pre class=\"code-sample margin-0\"><div><span ngNonBindable=\"ngNonBindable\">{{ 'true' | bit }}</span><span>&nbsp;==&nbsp;</span><span>{{ 'true' | bit }}</span></div><div><span ngNonBindable=\"ngNonBindable\">{{ '0' | bit }}</span><span>&nbsp;==&nbsp;</span><span>{{ '0' | bit }}</span></div><div><span ngNonBindable=\"ngNonBindable\">{{ 'false' | bit }}</span><span>&nbsp;==&nbsp;</span><span>{{ 'false' | bit }}</span></div></pre></absolute-overflow-x></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>boolean</h3><p class=\"text-sm text-grey-2x\">Truthy value converts to: true. Otherwise: false</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.boolean=!views.boolean\" [ngClass]=\"views.boolean?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"views.boolean\" [@fadeInOutUp]=\"1\"><absolute-overflow-x><pre class=\"code-sample margin-0\"><div><span ngNonBindable=\"ngNonBindable\">{{ 1 | boolean }}</span><span>&nbsp;==&nbsp;</span><span>{{ 1 | boolean }}</span></div><div><span ngNonBindable=\"ngNonBindable\">{{ '0' | boolean }}</span><span>&nbsp;==&nbsp;</span><span>{{ '0' | boolean }}</span></div><div><span ngNonBindable=\"ngNonBindable\">{{ 'false' | boolean }}</span><span>&nbsp;==&nbsp;</span><span>{{ 'false' | boolean }}</span></div></pre></absolute-overflow-x></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>yesno</h3><p class=\"text-sm text-grey-2x\">Truthy value converts to: yes. Otherwise: no</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.yesno=!views.yesno\" [ngClass]=\"views.yesno?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"views.yesno\" [@fadeInOutUp]=\"1\"><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">{{ 'true' | yesno }} == yes" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>YesNo</h3><p class=\"text-sm text-grey-2x\">Truthy value converts to: Yes. Otherwise: No</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.yesNo=!views.yesNo\" [ngClass]=\"views.yesNo?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"views.yesNo\" [@fadeInOutUp]=\"1\"><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">{{ 1 | YesNo }} == Yes" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>numbers</h3><p class=\"text-sm text-grey-2x\">Removes anything not a number from a string</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.numbers=!views.numbers\" [ngClass]=\"views.numbers?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"views.numbers\" [@fadeInOutUp]=\"1\"><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">{{ 'sam123acb456xyz' | numbers }} == 123456" +
    "\n</pre></absolute-overflow-x></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>keys</h3><p class=\"text-sm text-grey-2x\">List of keys for an Object</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.keys=!views.keys\" [ngClass]=\"views.keys?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"views.keys\" [@fadeInOutUp]=\"1\"><absolute-overflow-x><pre class=\"code-sample margin-0\"><span ngNonBindable=\"ngNonBindable\">{{ {x:1,y:2,z:3} | keys }}</span><span class=\"pad-h-sm\">==</span><span>{{ {x:1,y:2,z:3} | keys | ack:['stringify',0] }}</span></pre></absolute-overflow-x></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>aDate</h3><p class=\"text-sm text-grey-2x\">A different approach @ date decorating</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.aDate=!views.aDate\" [ngClass]=\"views.aDate?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"views.aDate\" [@fadeInOutUp]=\"1\"><absolute-overflow-x><pre class=\"code-sample margin-0\"><span ngNonBindable=\"ngNonBindable\">{{ 0 | aDate : 'now' : 'date' : 'getTime' }}</span><span>&nbsp;== {{ 0 | aDate:'now':'date':'getTime' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ 0 | aDate : 'now' : 'hmmtt' }}</span><span>&nbsp;== {{ 0 | aDate : 'now' : 'hmmtt' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ 0 | aDate : 'now' : 'hhmmtt' }}</span><span>&nbsp;== {{ 0 | aDate : 'now' : 'hhmmtt' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ null | aDate : 'now' : 'hmmtt' }}</span><span>&nbsp;== {{ null | aDate : 'now' : 'hmmtt' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ null | aDate : 'now' : 'hhmmtt' }}</span><span>&nbsp;== {{ null | aDate : 'now' : 'hhmmtt' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ 0 | aDate : 'now' : ['addSeconds',60] : 'dateSecondDiff' }}</span><span>&nbsp;== {{ 0 | aDate : 'now' : ['addSeconds',60] : 'dateSecondDiff' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ '01/01/2014 2:00 am' | aDate : ['dateMinuteDiff','01/02/2014 2:00 am'] }}</span><span>&nbsp;== {{ '01/01/2014 2:00 am' | aDate : ['dateMinuteDiff','01/02/2014 2:00 am'] }}</span></pre></absolute-overflow-x></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>aTime</h3><p class=\"text-sm text-grey-2x\">A different approach @ time decorating</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.aTime=!views.aTime\" [ngClass]=\"views.aTime?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"views.aTime\" [@fadeInOutUp]=\"1\"><absolute-overflow-x><pre class=\"code-sample margin-0\"><span ngNonBindable=\"ngNonBindable\">{{ 0 | aTime : 'now' : 'date' }}</span><span>&nbsp;== {{ 0 | aDate:'now':'date':'getTime' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ '13:30' | aTime : 'hhmmtt' }}</span><span>&nbsp;== {{ '13:30' | aTime : 'hhmmtt' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ '1:30 pm' | aTime : 'hhmmtt' }}</span><span>&nbsp;== {{ '1:30 pm' | aTime : 'hhmmtt' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ '12:00 am' | aTime : 'hhmmtt' }}</span><span>&nbsp;== {{ '12:00 am' | aTime : 'hhmmtt' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ '12:00 pm' | aTime : 'hhmmtt' }}</span><span>&nbsp;== {{ '12:00 pm' | aTime : 'hhmmtt' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ '13:30' | aTime : 'hhmmtt' }}</span><span>&nbsp;== {{ '13:30' | aTime : 'hhmmtt' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ '1:30 pm' | aTime : 'hhmmtt' }}</span><span>&nbsp;== {{ '1:30 pm' | aTime : 'hhmmtt' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ '12:00 am' | aTime : 'hhmmtt' }}</span><span>&nbsp;== {{ '12:00 am' | aTime : 'hhmmtt' }}</span><br/><br/><span ngNonBindable=\"ngNonBindable\">{{ '12:00 pm' | aTime : 'hhmmtt' }}</span><span>&nbsp;== {{ '12:00 pm' | aTime : 'hhmmtt' }}</span></pre></absolute-overflow-x></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>aMath</h3><p class=\"text-sm text-grey-2x\">A connection to Javascript Math functions</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.aMath=!views.aMath\" [ngClass]=\"views.aMath?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"views.aMath\" [@fadeInOutUp]=\"1\"><absolute-overflow-x><pre class=\"code-sample margin-0\"><span ngNonBindable=\"ngNonBindable\">{{ 2.2 | aMath:'ceil' }}</span><span class=\"pad-h-sm\">==</span><span>{{ 2.2 | aMath:'ceil' }}</span></pre></absolute-overflow-x></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>aString</h3><p class=\"text-sm text-grey-2x\">A connection to Javascript String functions</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.aString=!views.aString\" [ngClass]=\"views.aString?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"views.aString\" [@fadeInOutUp]=\"1\"><absolute-overflow-x><pre class=\"code-sample margin-0\"><span ngNonBindable=\"ngNonBindable\">{{ 2.35 | aString:['slice',-2] }}</span><span class=\"pad-h-sm\">==</span><span>{{ 2.35 | aString:['slice',-2] }}</span></pre></absolute-overflow-x></div></div><div class=\"flex2 border-grey-6x border\"><div class=\"pad-h\"><h3>ack</h3><p class=\"text-sm text-grey-2x\">A connection to objectifying functions</p></div><a class=\"text-center block border pad-xxs hover-bg-warning\" (click)=\"views.ack=!views.ack\" [ngClass]=\"views.ack?'border-energized bg-energized':'border-info bg-info'\">view details</a><div *ngIf=\"views.ack\" [@fadeInOutUp]=\"1\"><absolute-overflow-x><pre class=\"code-sample margin-0\"><span ngNonBindable=\"ngNonBindable\">{{ 0 | ack:'date':'toUtc':'date':'toString' }}</span><span class=\"pad-h-sm\">==</span><span>{{ 0 | ack:'date':'toUtc':'date':'toString' }}</span></pre></absolute-overflow-x></div></div></div><h3 class=\"margin-bottom-0\">More Pipe Examples</h3><div class=\"flex-wrap child-margin-xs child-pad-xs text-center\"><div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ 0 | ack : 'date' : 'now' : 'hmmtt' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ 0 | ack : 'date' : 'now' : 'hmmtt' }}</span></div><div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ 0 | ack : 'date' : 'now' : 'hhmmtt' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ 0 | ack : 'date' : 'now' : 'hhmmtt' }}</span></div><div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ null | ack : 'date' : 'now' : 'hmmtt' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ null | ack : 'date' : 'now' : 'hmmtt' }}</span></div><div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ null | ack : 'date' : 'now' : 'hhmmtt' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ null | ack : 'date' : 'now' : 'hhmmtt' }}</span></div><div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ 0 | ack : 'date' : 'now' : ['addSeconds',60] : 'dateSecondDiff' }}</span><span class=\"text-grey-2x\">&nbsp;== {{ 0 | ack : 'date' : 'now' : ['addSeconds',60] : 'dateSecondDiff' }}</span></div><div class=\"flex-1 border border-grey-3x\"><span ngNonBindable=\"ngNonBindable\">{{ '01/01/2014 2:00 am' | ack : 'date' : ['dateMinuteDiff','01/02/2014 2:00 am'] }}</span><span class=\"text-grey-2x\">&nbsp;== {{ '01/01/2014 2:00 am' | ack : 'date' : ['dateMinuteDiff','01/02/2014 2:00 am'] }}</span></div></div>";


/***/ }),

/***/ "./src/templates/provider-examples.pug.ts":
/*!************************************************!*\
  !*** ./src/templates/provider-examples.pug.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<h2 class=\"margin-top-0\">Providers</h2><ng-container [(statusOnlineModel)]=\"statusOnlineModel\"></ng-container><p class=\"margin-bottom-0\">Import Example</p><div class=\"text-warning text-xs\">The following import code, is NOT needed if you used the AckModule import <a class=\"text-calm\" href=\"#/overview\" (click)=\"scrollToModuleImport()\">seen here</a></div><pre class=\"code-sample\">import &#123; providers as ackProviders &#125; from \"ack-angular/providers\"" +
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

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/adminapple/projects/Ack/browser/ Angular/ack-angular/src/example/src/index.ts */"./src/index.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
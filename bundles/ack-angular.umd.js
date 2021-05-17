(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('ack-angular-fx'), require('ack-x/es/index-browser'), require('rxjs/internal/BehaviorSubject'), require('@angular/platform-browser'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('ack-angular', ['exports', '@angular/core', '@angular/common', 'ack-angular-fx', 'ack-x/es/index-browser', 'rxjs/internal/BehaviorSubject', '@angular/platform-browser', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ack-angular'] = {}, global.ng.core, global.ng.common, global.ackAngularFx, global.indexBrowser, global.rxjs['internal/BehaviorSubject'], global.ng.platformBrowser, global.ng.router));
}(this, (function (exports, core, common, ackAngularFx, indexBrowser, BehaviorSubject, platformBrowser, router) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __createBinding(o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    }
    function __exportStar(m, exports) {
        for (var p in m)
            if (p !== "default" && !exports.hasOwnProperty(p))
                exports[p] = m[p];
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    result[k] = mod[k];
        result.default = mod;
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    //import { Subscription } from "rxjs/internal/Subscription"
    var HtmlSizeService = /** @class */ (function () {
        function HtmlSizeService() {
            var _this = this;
            this.change = new core.EventEmitter();
            this.htmlSize = { width: null, height: null };
            this.onResize = function () {
                _this.htmlSize.width = window.document.documentElement.clientWidth;
                _this.htmlSize.height = window.document.documentElement.clientHeight;
                _this.change.emit();
            };
            this.checkWatchers();
            this.onResize();
        }
        HtmlSizeService.prototype.checkWatchers = function () {
            if (this.change.observers.length) {
                window.addEventListener('resize', this.onResize);
                //window.addEventListener('scroll', this.onResize)
            }
            else {
                window.removeEventListener('resize', this.onResize);
                //window.removeEventListener('scroll', this.onResize)
            }
        };
        return HtmlSizeService;
    }());
    HtmlSizeService.decorators = [
        { type: core.Injectable }
    ];
    HtmlSizeService.ctorParameters = function () { return []; };
    HtmlSizeService.propDecorators = {
        change: [{ type: core.Output }]
    };

    var Log = /** @class */ (function () {
        function Log() {
            this.log = [];
            this.maxLog = 80;
        }
        Log.prototype.add = function (e, toConsole) {
            var ob = this.paramAudit(e, toConsole);
            this.log.unshift(ob);
            if (this.maxLog) {
                while (this.log.length > this.maxLog) {
                    this.log.pop(); //remove last
                }
            }
            return e;
        };
        Log.prototype.paramAudit = function (e, toConsole) {
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
        };
        return Log;
    }());
    Log.decorators = [
        { type: core.Injectable }
    ];
    function getDateTimeString() {
        return (function (d) { return (('0' + (d.getMonth() + 1)).slice(-2) + '/' + ('0' + d.getDate()).slice(-2) + '/' + d.getFullYear()); })(new Date()) + ' ' + (function (d) { var h = d.getHours(), t = 'AM', m = d.getMinutes(); var mn = m < 10 ? '0' + m : m; h = h >= 12 ? (t = 'PM', h - 12 || 12) : h == 0 ? 12 : h; return ('0' + h).slice(-2) + ':' + ('0' + mn).slice(-2) + ' ' + t; })(new Date());
    }

    var Prompts = /** @class */ (function () {
        function Prompts() {
            this.prompts = [];
        }
        Prompts.prototype.remove = function (prompt) {
            for (var x = this.prompts.length - 1; x >= 0; --x) {
                if (this.prompts[x] == prompt) {
                    this.prompts.splice(x, 1);
                    return;
                }
            }
        };
        Prompts.prototype.issuePrompt = function (prompt) {
            var _this = this;
            this.prompts.push(prompt);
            prompt.emitter.subscribe(function () { return _this.remove(prompt); });
            return prompt.emitter;
        };
        Prompts.prototype.alert = function (message, options) {
            if (options === void 0) { options = {}; }
            options.emitter = new core.EventEmitter();
            options.type = "alert";
            options.message = message;
            return this.issuePrompt(options);
        };
        Prompts.prototype.confirm = function (message, options) {
            if (options === void 0) { options = {}; }
            options.emitter = new core.EventEmitter();
            options.type = "confirm";
            options.message = message;
            return this.issuePrompt(options);
        };
        return Prompts;
    }());
    Prompts.decorators = [
        { type: core.Injectable }
    ];

    var AckApp = /** @class */ (function () {
        function AckApp(prompts) {
            this.prompts = prompts;
            this.warnedFixElements = true;
            this.fixedElms = [];
            this.modals = [];
        }
        AckApp.prototype.registerModal = function (item) {
            this.modals.push(item);
            return this;
        };
        AckApp.prototype.unregisterModal = function (item) {
            for (var index = this.modals.length - 1; index >= 0; --index) {
                if (this.modals[index] == item) {
                    this.modals.splice(index, 1);
                    break;
                }
            }
            return this;
        };
        return AckApp;
    }());
    AckApp.decorators = [
        { type: core.Injectable }
    ];
    AckApp.ctorParameters = function () { return [
        { type: 
            //prompt,
            Prompts }
    ]; };

    var ErrorLog = /** @class */ (function () {
        function ErrorLog() {
            this.log = [];
            this.maxLog = 30;
        }
        ErrorLog.prototype.monitorWindow = function (win) {
            var _this = this;
            win = win || window;
            var callback = function (evt) { return _this.add(evt, false); };
            win.addEventListener('error', callback);
        };
        ErrorLog.prototype.reject = function (err) {
            var e = this.add(err);
            return Promise.reject(e);
        };
        ErrorLog.prototype.rejector = function () {
            var _this = this;
            return function (err) { return _this.reject(err); };
        };
        ErrorLog.prototype.add = function (e, toConsole) {
            var ob = this.paramAudit(e, toConsole);
            this.log.unshift(ob);
            if (this.maxLog) {
                while (this.log.length > this.maxLog) {
                    this.log.pop(); //remove last
                }
            }
            return logObToErrorObject(ob);
        };
        //api error to js Error object
        ErrorLog.prototype.paramAudit = function (e, toConsole) {
            if (e.constructor === String) {
                e = new Error(e);
            }
            if (toConsole == null || toConsole)
                console.error(e);
            var err = this.objectifyError(e);
            err['datetime'] = err['datetime'] || getDateTimeString$1();
            if (!e.message && e.status == -1) {
                e.message = "Cannot connect to server";
                e.details = e.details || "Connection to internet maybe down. Also possible CORS needs be to enabled at remote server.";
            }
            return err;
        };
        /** Convert Error object to a regular object */
        ErrorLog.prototype.objectifyError = function (err) {
            var keys = Object.getOwnPropertyNames(err);
            keys.push.apply(keys, Object.keys(err));
            var recErr = {}; //new Error(err.message || err.name || err.type || 'Unexpected Error Occured')
            keys.forEach(function (v) { return recErr[v] = err[v]; });
            var knownKeys = ["stack", "message", "name", "arguments", "type"];
            knownKeys.forEach(function (key) {
                if (typeof err[key] != 'undefined') {
                    recErr[key] = err[key];
                }
            });
            var body = err.body || err._body;
            //auto attempt to parse body
            if (body && !err.data && err.headers) {
                var contentType = err.headers.get('content-type');
                if (contentType && contentType.toLowerCase() == 'application/json') {
                    try {
                        recErr.data = JSON.parse(body);
                    }
                    catch (e) { }
                }
            }
            return recErr;
        };
        /** same as reject but uses native throw instead of native Promise.reject */
        ErrorLog.prototype.rethrow = function (err) {
            var e = this.add(err);
            throw e;
        };
        return ErrorLog;
    }());
    ErrorLog.decorators = [
        { type: core.Injectable }
    ];
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
        var e = new Error(getResponseMessage(log));
        Object.keys(log).forEach(function (v) { return e[v] = log[v]; });
        return e;
    }
    function getDateTimeString$1() {
        return (function (d) { return (('0' + (d.getMonth() + 1)).slice(-2) + '/' + ('0' + d.getDate()).slice(-2) + '/' + d.getFullYear()); })(new Date()) + ' ' + (function (d) { var h = d.getHours(), t = 'AM', m = d.getMinutes(); var mn = m < 10 ? '0' + m : m; h = h >= 12 ? (t = 'PM', h - 12 || 12) : h == 0 ? 12 : h; return ('0' + h).slice(-2) + ':' + ('0' + mn).slice(-2) + ' ' + t; })(new Date());
    }

    function getWindow() { return window; }
    var WindowService = /** @class */ (function () {
        function WindowService() {
        }
        Object.defineProperty(WindowService.prototype, "nativeElement", {
            get: function () { return getWindow(); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(WindowService.prototype, "nativeWindow", {
            //deprecated
            get: function () { return getWindow(); },
            enumerable: false,
            configurable: true
        });
        return WindowService;
    }());
    WindowService.decorators = [
        { type: core.Injectable }
    ];

    var UrlVars = /** @class */ (function () {
        function UrlVars(WindowService) {
            this.WindowService = WindowService;
            this.vars = this.parse();
        }
        UrlVars.prototype.parse = function () {
            var regex = /[?&]([^=#]+)(=([^&#]*))?/g, url = this.WindowService.nativeWindow.location.href, params = {}, match;
            while (match = regex.exec(url)) {
                params[match[1]] = match[2] == null ? true : match[3];
            }
            return params;
        };
        /** case in-sensative variable fetch */
        UrlVars.prototype.get = function (name, param) {
            if (!name)
                return;
            if (this.vars && this.vars[name] != null) //try exact match first
                return this.vars[name];
            //case insensative search
            var lcase = name.toLowerCase();
            for (var key in this.vars) {
                if (lcase == key.toLowerCase())
                    return this.vars[key];
            }
            return param;
        };
        return UrlVars;
    }());
    UrlVars.decorators = [
        { type: core.Injectable }
    ];
    UrlVars.ctorParameters = function () { return [
        { type: WindowService }
    ]; };

    function getDocument() { return document; }
    var DocumentService = /** @class */ (function () {
        function DocumentService() {
        }
        Object.defineProperty(DocumentService.prototype, "nativeElement", {
            get: function () { return getDocument(); },
            enumerable: false,
            configurable: true
        });
        return DocumentService;
    }());
    DocumentService.decorators = [
        { type: core.Injectable }
    ];

    var providers = [
        Log,
        ErrorLog,
        AckApp,
        UrlVars,
        WindowService,
        DocumentService,
        Prompts,
        HtmlSizeService
    ];

    var SectionProvider = /** @class */ (function () {
        function SectionProvider() {
            //appTemplates:AckSectionTemplates[] = []
            this.headerTemplates = [];
            this.footerTemplates = [];
            this.leftBodyTemplates = [];
            this.rightBodyTemplates = [];
        }
        SectionProvider.prototype.unregisterHeaderTemplate = function (item) {
            this.unregisterTemplateFrom(item, this.headerTemplates);
        };
        SectionProvider.prototype.unregisterFooterTemplate = function (item) {
            this.unregisterTemplateFrom(item, this.footerTemplates);
        };
        SectionProvider.prototype.unregisterTemplateFrom = function (item, templates) {
            for (var x = templates.length - 1; x >= 0; --x) {
                if (templates[x] === item) {
                    templates.splice(x, 1);
                    break;
                }
            }
        };
        SectionProvider.prototype.unregisterTemplate = function (item) {
            this.unregisterTemplateFrom(item, this.headerTemplates);
            this.unregisterTemplateFrom(item, this.footerTemplates);
            this.unregisterTemplateFrom(item, this.leftBodyTemplates);
            this.unregisterTemplateFrom(item, this.rightBodyTemplates);
        };
        return SectionProvider;
    }());
    SectionProvider.decorators = [
        { type: core.Injectable }
    ];

    var string = "<ng-container [(htmlHeightModel)]=\"htmlHeightModel\"></ng-container><ng-container *ngIf=\"SectionProvider.headerTemplates.length\"><div *ngIf=\"mode==='calculate'\" style=\"position:fixed;top:0;width:100%\" [style.z-index]=\"zIndex\" [(elementHeightModel)]=\"headerHeight\" [elementSizeModelWatch]=\"SectionProvider.headerTemplates.length\"><ng-template *ngTemplateOutlet=\"headerWrap || headerContent;context:{outlet:headerContent}\"></ng-template></div><ng-template #headerContent=\"\"><ng-container *ngFor=\"let item of SectionProvider.headerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></ng-template><div *ngIf=\"!mode || mode==='clone'\" style=\"position:fixed;top:0;width:100%\" [style.z-index]=\"zIndex\"><ng-template *ngTemplateOutlet=\"headerContent\"></ng-template></div></ng-container><ng-template *ngTemplateOutlet=\"table || defaultTableTag;context:{outlet:tableRows}\"></ng-template><ng-template #defaultTableTag=\"\"><table style=\"height:100%;width:100%;border-collapse: collapse;\" cellPadding=\"0\" cellSpacing=\"0\" border=\"0\"><ng-template *ngTemplateOutlet=\"tableRows\"></ng-template></table></ng-template><ng-template #tableRows=\"\"><tr *ngIf=\"SectionProvider.headerTemplates.length\"><td colspan=\"3\" [style.height.px]=\"headerHeight\" style=\"visibility:hidden\"><ng-container *ngIf=\"!mode || mode==='clone'\"><ng-container *ngFor=\"let item of SectionProvider.headerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></ng-container></td></tr><tr><td *ngIf=\"SectionProvider.leftBodyTemplates.length\" [style.min-width.px]=\"leftBodyWidth\" valign=\"top\" align=\"right\"><ng-template #defaultLeftBodyWrap=\"\"><div style=\"overflow:auto;height:100%;\"><ng-template *ngTemplateOutlet=\"leftBodyContent\"></ng-template></div></ng-template><ng-template #leftBodyContent=\"\"><ng-container *ngFor=\"let item of SectionProvider.leftBodyTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></ng-template><div *ngIf=\"mode==='calculate'\" style=\"position:fixed;\" [style.z-index]=\"zIndex - 1\" [style.height.px]=\"htmlHeightModel - (SectionProvider.headerTemplates.length ? headerHeight : 0) - (SectionProvider.footerTemplates.length ? footerHeight : 0)\" [(elementWidthModel)]=\"leftBodyWidth\" [elementSizeModelWatch]=\"SectionProvider.leftBodyTemplates.length\"><ng-template *ngTemplateOutlet=\"leftBodyWrap || defaultLeftBodyWrap;context:{outlet:leftBodyContent}\"></ng-template></div><div *ngIf=\"!mode || mode==='clone'\" style=\"position:fixed;top:0;\" [style.z-index]=\"zIndex - 1\"><ng-template *ngTemplateOutlet=\"leftBodyWrap || defaultLeftBodyWrap;context:{outlet:leftBodyContent}\"></ng-template></div><ng-container *ngIf=\"!mode || mode==='clone'\"><ng-template *ngTemplateOutlet=\"leftBodyWrap || defaultLeftBodyWrap;context:{outlet:leftBodyContent}\"></ng-template></ng-container></td><ng-container *ngTemplateOutlet=\"bodyCell || defaultBodyCell;context:{outlet:body}\"></ng-container><ng-template #defaultBodyCell=\"\"><td style=\"height:100%\" valign=\"top\"><ng-template *ngTemplateOutlet=\"body\"></ng-template></td></ng-template><ng-template #body=\"\"><ng-content></ng-content></ng-template><td *ngIf=\"SectionProvider.rightBodyTemplates.length\" [style.min-width.px]=\"rightBodyWidth\" valign=\"top\" align=\"left\"><ng-template #defaultRightBodyWrap=\"\"><div style=\"overflow:auto;height:100%;\"><ng-template *ngTemplateOutlet=\"rightBodyContent\"></ng-template></div></ng-template><ng-template #rightBodyContent=\"\"><ng-container *ngFor=\"let item of SectionProvider.rightBodyTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></ng-template><div *ngIf=\"mode==='calculate'\" style=\"position:fixed;\" [style.z-index]=\"zIndex - 1\" [style.height.px]=\"htmlHeightModel - (SectionProvider.headerTemplates.length ? headerHeight : 0) - (SectionProvider.footerTemplates.length ? footerHeight : 0)\" [(elementWidthModel)]=\"rightBodyWidth\" [elementSizeModelWatch]=\"SectionProvider.rightBodyTemplates.length\"><ng-template *ngTemplateOutlet=\"rightBodyWrap || defaultRightBodyWrap;context:{outlet:rightBodyContent}\"></ng-template></div><div *ngIf=\"!mode || mode==='clone'\" style=\"position:fixed;top:0;overflow:auto;\" [style.z-index]=\"zIndex - 1\"><ng-template *ngTemplateOutlet=\"rightBodyWrap || defaultRightBodyWrap;context:{outlet:rightBodyContent}\"></ng-template></div><ng-container *ngIf=\"!mode || mode==='clone'\"><ng-template *ngTemplateOutlet=\"rightBodyWrap || defaultRightBodyWrap;context:{outlet:rightBodyContent}\"></ng-template></ng-container></td></tr><tr *ngIf=\"SectionProvider.footerTemplates.length\"><td colspan=\"3\" [style.height.px]=\"footerHeight\"><div *ngIf=\"!mode || mode==='clone'\" style=\"visibility:hidden\"><ng-container *ngFor=\"let item of SectionProvider.footerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></div></td></tr></ng-template><ng-container *ngIf=\"SectionProvider.footerTemplates.length\"><div *ngIf=\"mode==='calculate'\" style=\"position:fixed;bottom:0;width:100%\" [style.z-index]=\"zIndex\" [(elementHeightModel)]=\"footerHeight\" [elementSizeModelWatch]=\"SectionProvider.footerTemplates.length\"><ng-container *ngFor=\"let item of SectionProvider.footerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></div><div *ngIf=\"!mode || mode==='clone'\" style=\"position:fixed;bottom:0;width:100%\" [style.z-index]=\"zIndex\"><ng-container *ngFor=\"let item of SectionProvider.footerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></div></ng-container>";

    var AckSections = /** @class */ (function () {
        function AckSections(SectionProvider, ElementRef) {
            this.SectionProvider = SectionProvider;
            this.ElementRef = ElementRef;
            //clone is more performant in most cases but things duplicate like requests and timers may result
            this.mode = "calculate";
            this.zIndex = 19;
            var elmStyle = ElementRef.nativeElement.style;
            elmStyle.height = "100%";
            elmStyle.display = "block";
        }
        return AckSections;
    }());
    AckSections.decorators = [
        { type: core.Component, args: [{
                    selector: 'ack-sections',
                    template: string,
                    providers: [SectionProvider]
                    //,exportAs:"AckSections"
                },] }
    ];
    AckSections.ctorParameters = function () { return [
        { type: SectionProvider },
        { type: core.ElementRef }
    ]; };
    AckSections.propDecorators = {
        mode: [{ type: core.Input }],
        zIndex: [{ type: core.Input }],
        table: [{ type: core.ContentChild, args: ["table",] }],
        headerWrap: [{ type: core.ContentChild, args: ["headerWrap",] }],
        bodyCell: [{ type: core.ContentChild, args: ["bodyCell",] }],
        leftBodyWrap: [{ type: core.ContentChild, args: ["leftBodyWrap",] }],
        rightBodyWrap: [{ type: core.ContentChild, args: ["rightBodyWrap",] }]
    };

    var AckSectionTemplates = /** @class */ (function () {
        function AckSectionTemplates(SectionProvider) {
            this.SectionProvider = SectionProvider;
        }
        AckSectionTemplates.prototype.ngAfterViewInit = function () {
            var _this = this;
            Promise.resolve().then(function () {
                _this.check();
                _this.inited = true;
            });
        };
        AckSectionTemplates.prototype.ngOnChanges = function () {
            if (this.inited) {
                this.check();
            }
        };
        AckSectionTemplates.prototype.check = function () {
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
        };
        AckSectionTemplates.prototype.ngOnDestroy = function () {
            var _this = this;
            Promise.resolve().then(function () { return _this.unregister(); });
        };
        AckSectionTemplates.prototype.unregister = function () {
            this.pushed = false;
            this.SectionProvider.unregisterHeaderTemplate(this.header);
            this.SectionProvider.unregisterFooterTemplate(this.footer);
            this.SectionProvider.unregisterTemplate(this.leftBody);
            this.SectionProvider.unregisterTemplate(this.rightBody);
        };
        return AckSectionTemplates;
    }());
    AckSectionTemplates.decorators = [
        { type: core.Directive, args: [{
                    selector: "ack-section-templates"
                },] }
    ];
    AckSectionTemplates.ctorParameters = function () { return [
        { type: SectionProvider }
    ]; };
    AckSectionTemplates.propDecorators = {
        header: [{ type: core.ContentChild, args: ['sectionHeader',] }],
        footer: [{ type: core.ContentChild, args: ['sectionFooter',] }],
        leftBody: [{ type: core.ContentChild, args: ['sectionLeftBody',] }],
        rightBody: [{ type: core.ContentChild, args: ['sectionRightBody',] }]
    };

    var string$1 = "<ng-template #placeholder=\"\"><ack-modal-layout [zIndex]=\"zIndex\" (close)=\"close.emit($event)\" [isModelMode]=\"isModelMode==null ? showModelChange.observers.length : isModelMode\" [showModel]=\"showModel\" (showModelChange)=\"showModelChange.emit(showModel=$event)\" [backgroundColor]=\"backgroundColor\" [wrapStyle]=\"wrapStyle\" [wrapCellStyle]=\"wrapCellStyle\" [allowClose]=\"allowClose\"><ng-template [ngTemplateOutlet]=\"body\"></ng-template><ng-content *ngIf=\"!body\"></ng-content></ack-modal-layout></ng-template><ng-template *ngIf=\"layout\"></ng-template>";

    var AckModal = /** @class */ (function () {
        function AckModal(element, AckApp) {
            var _this = this;
            this.element = element;
            this.AckApp = AckApp;
            this.allowClose = true;
            this.zIndex = 20;
            this.showModelChange = new core.EventEmitter();
            //one way expression binds
            this.close = new core.EventEmitter();
            Promise.resolve().then(function () { return _this.determineStage(); });
        }
        /*ngOnInit(){
          return this.determineStage() // causes race error ExpressionChangedAfterItHasBeenCheckedError
        }*/
        AckModal.prototype.determineStage = function () {
            if (this.inline)
                return;
            if (this.AckApp.fixedElementStage) {
                this.AckApp.registerModal(this);
            }
            else if (!this.AckApp.warnedFixElements) {
                this.AckApp.warnedFixElements = true;
                console.warn('Please put the element tag <ack-fixed-element-stage> inside your app so <ack-modal> renders properly amongst other elements. OR set <ack-modal inline="true">');
            }
        };
        AckModal.prototype.ngOnDestroy = function () {
            this.AckApp.unregisterModal(this);
        };
        return AckModal;
    }());
    AckModal.decorators = [
        { type: core.Component, args: [{
                    selector: "ack-modal",
                    template: string$1
                    //,exportAs:"AckModal"
                    //,animations:animations
                },] }
    ];
    AckModal.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: AckApp }
    ]; };
    AckModal.propDecorators = {
        body: [{ type: core.ContentChild, args: ['body',] }],
        layout: [{ type: core.ViewChild, args: ['placeholder',] }],
        inline: [{ type: core.Input }],
        isModelMode: [{ type: core.Input }],
        allowClose: [{ type: core.Input }],
        zIndex: [{ type: core.Input }],
        wrapStyle: [{ type: core.Input }],
        wrapCellStyle: [{ type: core.Input }],
        backgroundColor: [{ type: core.Input }],
        showModel: [{ type: core.Input }],
        showModelChange: [{ type: core.Output }],
        close: [{ type: core.Output }]
    };

    var string$2 = "<div *ngIf=\"showModel || !isModelMode\" [@fadeInOutUp]=\"1\" style=\"position:fixed;top:0;left:0;height:100%;width:100%;overflow:auto;\" [style.z-index]=\"zIndex || 20\"><div style=\"height:100%;width:100%;padding:20px;display:inline-table;\" [ngStyle]=\"{'background-color':backgroundColor || 'rgba(0,0,0,.7)'}\"><table style=\"height:100%;margin:auto\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" [ngStyle]=\"wrapStyle\"><tr><td (click)=\"allowClose ? fireClose() : 0\"></td></tr><tr><td valign=\"top\" [ngStyle]=\"wrapCellStyle\"><div *ngIf=\"allowClose\" style=\"position:relative\"><div style=\"position:absolute;bottom:-17px;right:-16px;border:1px solid #DDD;border-radius:50%;z-index:20\"><ack-close-icon (click)=\"fireClose()\"></ack-close-icon></div></div><ng-content></ng-content></td></tr><tr><td (click)=\"allowClose ? fireClose() : 0\"></td></tr></table></div></div>";

    var AckModalLayout = /** @class */ (function () {
        //@Input() template:ElementRef<any>
        function AckModalLayout(element, AckApp) {
            var _this = this;
            this.element = element;
            this.AckApp = AckApp;
            this.zIndex = 20;
            this.close = new core.EventEmitter();
            this.allowClose = true;
            this.isModelMode = false;
            this.showModel = true; // when using, do not allow to be undefined
            this.showModelChange = new core.EventEmitter();
            //after possible double click, close on outside content click
            setTimeout(function () { return _this.clickListenForClose(); }, 400);
        }
        AckModalLayout.prototype.clickListenForClose = function () {
            var _this = this;
            this.element.nativeElement.addEventListener('click', function (event) {
                if (!_this.allowClose)
                    return false;
                var eTar = event.srcElement || event.toElement || event.target;
                var isDirectChild = eTar == _this.element.nativeElement.children[0] || eTar == _this.element.nativeElement.children[0].children[0];
                if (isDirectChild) {
                    _this.fireClose();
                }
                return true;
            });
        };
        AckModalLayout.prototype.ngOnInit = function () {
            var _this = this;
            return Promise.resolve().then(function () {
                if (_this.showModel != undefined && _this.showModelChange.observers.length) {
                    _this.isModelMode = true;
                }
            });
        };
        AckModalLayout.prototype.fireClose = function () {
            this.showModelChange.emit(this.showModel = false);
            this.close.emit(this);
        };
        return AckModalLayout;
    }());
    AckModalLayout.decorators = [
        { type: core.Component, args: [{
                    selector: 'ack-modal-layout',
                    template: string$2,
                    animations: ackAngularFx.animations
                },] }
    ];
    AckModalLayout.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: AckApp }
    ]; };
    AckModalLayout.propDecorators = {
        zIndex: [{ type: core.Input }],
        close: [{ type: core.Output }],
        allowClose: [{ type: core.Input }],
        wrapStyle: [{ type: core.Input }],
        wrapCellStyle: [{ type: core.Input }],
        backgroundColor: [{ type: core.Input }],
        isModelMode: [{ type: core.Input }],
        showModel: [{ type: core.Input }],
        showModelChange: [{ type: core.Output }]
    };

    var string$3 = "<ng-container *ngFor=\"let fixedElm of AckApp.fixedElms\"><ng-container *ngTemplateOutlet=\"fixedElm.content\"></ng-container></ng-container><ng-container *ngFor=\"let prompt of AckApp.prompts.prompts;let i=index\"><ack-modal-layout zIndex=\"99\" [allowClose]=\"0\"><div style=\"text-align:left;max-width:900px;border:1px solid #DDD;border-radius:5px;margin:1em;padding:1em;background-color:white;\"><h3 *ngIf=\"prompt.title\" style=\"margin-top:0;\">{{ prompt.title }}</h3><div style=\"padding-right:1em;\">{{ prompt.message }}</div><br/><br/><div style=\"text-align:right;\"><a *ngIf=\"prompt.type=='confirm'\" (click)=\"prompt.emitter.emit(false)\" style=\"text-align:center;display:inline-block;min-width:75px;border-radius:3px;border:1px solid #AAA;padding:0 .5em;margin-right:.5em;\">Cancel</a><a (click)=\"prompt.emitter.emit(true)\" style=\"text-align:center;display:inline-block;min-width:75px;border-radius:3px;border:1px solid #AAA;padding:0 .5em;\" [ngStyle]=\"{'font-weight':prompt.type=='confirm' ? 'bold' : null}\">OK</a></div></div></ack-modal-layout></ng-container><ng-container *ngFor=\"let item of AckApp.modals\"><ng-container *ngIf=\"!item.isModelMode || item.showModel\"><ng-template [ngTemplateOutlet]=\"item.layout\"></ng-template></ng-container></ng-container>";

    var AckFixedElementStage = /** @class */ (function () {
        function AckFixedElementStage(AckApp, ElementRef) {
            this.AckApp = AckApp;
            this.ElementRef = ElementRef;
            AckApp.fixedElementStage = ElementRef;
        }
        return AckFixedElementStage;
    }());
    AckFixedElementStage.decorators = [
        { type: core.Component, args: [{
                    selector: 'ack-fixed-element-stage',
                    template: string$3
                },] }
    ];
    AckFixedElementStage.ctorParameters = function () { return [
        { type: AckApp },
        { type: core.ElementRef }
    ]; };

    var AckFixedElement = /** @class */ (function () {
        function AckFixedElement(AckApp) {
            this.AckApp = AckApp;
            this.AckApp.fixedElms.push(this);
        }
        AckFixedElement.prototype.ngOnDestroy = function () {
            for (var x = this.AckApp.fixedElms.length - 1; x >= 0; --x) {
                var iClass = this.AckApp.fixedElms[x];
                if (iClass === this) {
                    this.AckApp.fixedElms.splice(x, 1);
                    break;
                }
            }
        };
        return AckFixedElement;
    }());
    AckFixedElement.decorators = [
        { type: core.Component, args: [{
                    selector: 'ack-fixed-element',
                    template: '<ng-template #content><ng-content></ng-content></ng-template>'
                },] }
    ];
    AckFixedElement.ctorParameters = function () { return [
        { type: AckApp }
    ]; };
    AckFixedElement.propDecorators = {
        content: [{ type: core.ViewChild, args: ['content',] }]
    };

    var template = '<div style="display:inline-block;cursor:pointer;border:3px solid white;border-radius:50%;background-color:#666;color:white;text-align:center;font-family:Arial">' +
        '<div style="font-weight:bold;line-height:22px;font-size:23px;height:25px;width:25px">x</div>' +
        '</div>';
    var AckCloseIcon = /** @class */ (function () {
        function AckCloseIcon() {
        }
        return AckCloseIcon;
    }());
    AckCloseIcon.decorators = [
        { type: core.Component, args: [{
                    selector: 'ack-close-icon',
                    template: template
                },] }
    ];

    /** responsible for ack-angular pipe'in system into ackX */
    function invokeRotator(invoke //|(any[])=>any
    ) {
        return getInvokerBy(invoke);
    }
    function objectInvoker(object, plan) {
        var rtn = object;
        var subargs;
        var item;
        var newkey;
        var key;
        var typo;
        //loop extra arguments as property collectors
        for (var x = 0; x < plan.length; ++x) {
            key = plan[x];
            subargs = [];
            //undefined error catcher
            if (rtn == null) {
                typo = typeof (rtn);
                var msg = "TypeError: Cannot read property '" + key + "' of " + typo + ". Invoke instructions: " + JSON.stringify(plan);
                throw new Error(msg);
            }
            var asFunc = key.constructor == Array;
            //array where 1st arg is method and subs are positional arguments
            if (asFunc) {
                key = [];
                key.push.apply(key, plan[x]); //clone array memory, do not touch original array
                newkey = key.shift(); // first arg is name of key, remove it from array
                subargs = key; //what is left in array is the arguments
                key = newkey; //key to string
            }
            item = rtn[key];
            var isFunc = item && item.constructor == Function;
            if (asFunc && !isFunc) {
                if (item == null || item.constructor !== Function) {
                    typo = typeof (item);
                    var msg = "TypeError: '" + key + "' of " + typo + " is not a function. Invoke instructions: " + JSON.stringify(plan);
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
        var isF = typeof invoke == 'function';
        if (isF) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var x = invoke(args[0]);
                args.shift();
                return objectInvoker(x, args);
            };
        }
        return function () {
            var plan = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                plan[_i] = arguments[_i];
            }
            var a = plan[0];
            plan[0] = plan[1];
            plan[1] = a;
            return objectInvoker(invoke, [plan]);
        };
        /*
          return function(args:any[]):any{
            const rtn = invoke[ args[1] ]( args[0] )
        
            for(let x=0; x<args.length; ++x){
              if( x<1 ){
                delete args[x]
              }else{
                args[ x-1 ] = args[x]
              }
            }
        
            args.length = args.length - 2
        
            return rtn
          }
        */
    }

    function between(input, a, b) {
        if (a == null || b == null)
            return false;
        return (input >= a && input <= b) || (input <= a && input >= b) ? true : false;
    }
    function replaceMaxLength(input, max, replacement) {
        if (replacement === void 0) { replacement = '...'; }
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
    function numberSuffix(val, rtnVal) {
        if (rtnVal === void 0) { rtnVal = false; }
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
    /** if input is array returned otherwise array created with  */
    function array(input, repeat, repeatValue) {
        var isArray = input != null && input.constructor == Array;
        var rtn = isArray ? input : [];
        if (!repeat && !isArray && input != null) {
            rtn.push(input);
        }
        if (repeat && !isNaN(Number(repeat))) {
            var val = typeof (repeatValue) === 'undefined' ? input : repeatValue;
            while (rtn.length < repeat) {
                rtn.push(val);
            }
        }
        return rtn;
    }
    function arrayOfObjects(input, repeat, repeatValue) {
        return array(input, repeat, repeatValue).map(function (v, i) { return ({ value: v, index: i }); });
    }
    function markdownAnchor(input) {
        input = input.toString().replace(/&/gi, 'amp'); //possibly unneeded
        input = input.toString().replace(/ /gi, '-');
        input = input.replace(/[^a-z0-9_-]/gi, '');
        return input.toLowerCase();
    }
    //use with bypassSecurityTrustResourceUrl for href
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
        var num = Number(input);
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
    function numbers(input, safeChars //upto 4 acceptable characters
    ) {
        var xString = '[^0-9';
        if (safeChars) {
            if (safeChars.length > 4) {
                safeChars = safeChars.substring(0, 4); //do not allow safeChars to create a maliscous regx
            }
            xString += safeChars;
        }
        xString += ']';
        var regX = new RegExp(xString, 'g');
        return input ? String(input).replace(regX, '') : input;
    }
    function capitalizeWords(input) {
        var reg = /[^\W_]+[^\s-]* */g;
        return (!!input) ? input.replace(reg, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }) : '';
    }
    /** each sentence word is capitalized */
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
        var av = new indexBrowser.ack();
        return invokeRotator(av[name]);
    }
    var aDate = a('date');
    var aTime = a('time');
    var aMath = invokeRotator(Math);
    var aString = invokeRotator(String);
    var ack = invokeRotator(indexBrowser.ack);
    // maybe deprecated . Remove in future releases. Just an array ref of all pipes
    var pipes = {
        ack: ack,
        aDate: aDate,
        aMath: aMath,
        array: array,
        aString: aString,
        aTime: aTime,
        between: between,
        capitalize: capitalize,
        capitalizeAfterSentence: capitalizeAfterSentence,
        capitalizeOne: capitalizeOne,
        capitalizeWords: capitalizeWords,
        numbers: numbers,
        numberSuffix: numberSuffix,
        numberToPhone: numberToPhone,
        markdownAnchor: markdownAnchor,
        replaceMaxLength: replaceMaxLength,
        textDownload: textDownload,
        toNumber: toNumber,
        yesno: yesno,
        yesNo: yesNo,
    };

    var TemplateReader = /** @class */ (function () {
        function TemplateReader(options) {
            this.types = {};
            this.templates = {};
            Object.assign(this, options);
        }
        TemplateReader.prototype.readTemplates = function (templateRefs) {
            var count = templateRefs['_results'].length;
            for (var x = count - 1; x >= 0; --x) {
                var row = templateRefs['_results'][x];
                this.applyReferences(row._def.references, row);
            }
            if (this.lastTemplateName && (!this.templates[this.lastTemplateName] || !templateRefs.length)) {
                this.afterReadTemplates(templateRefs);
            }
        };
        //look to apply last template as a specified templates[name]
        TemplateReader.prototype.afterReadTemplates = function (templateRefs) {
            var index = templateRefs['_results'].length - 1;
            var lastTemplate = templateRefs['_results'][index];
            if (!lastTemplate || !this.lastTemplateName)
                return;
            var matched = this.applyReferences(lastTemplate._def.references, lastTemplate);
            if (!matched) {
                this.templates[this.lastTemplateName] = lastTemplate;
            }
        };
        TemplateReader.prototype.applyReferences = function (refs, row) {
            for (var x in refs) {
                if (this.types[x]) {
                    this.templates[this.types[x]] = row;
                    return true;
                }
            }
            return false;
        };
        return TemplateReader;
    }());

    var string$4 = "<div [ngClass]=\"{'border-grey-6x border-top':stylize}\"></div><div *ngFor=\"let item of array|array\" (click)=\"selectItem(item)\" [ngClass]=\"getItemClass(item)\"><ng-template *ngIf=\"TemplateReader.templates.selected &amp;&amp; isItemSelected(item)\" [ngTemplateOutlet]=\"TemplateReader.templates.selected\" [ngTemplateOutletContext]=\"{item:item}\"></ng-template><ng-template *ngIf=\"TemplateReader.templates.templateRef &amp;&amp; (!TemplateReader.templates.selected || !isItemSelected(item))\" [ngTemplateOutlet]=\"TemplateReader.templates.templateRef\" [ngTemplateOutletContext]=\"{item:item, selected:isItemSelected(item)}\"></ng-template><span *ngIf=\"!TemplateReader.templates.templateRef\">{{ item }}</span></div>";

    var AckOptions = /** @class */ (function () {
        function AckOptions(ElementRef) {
            this.ElementRef = ElementRef;
            this.array = [];
            this.stylize = true;
            this.TemplateReader = new TemplateReader({
                lastTemplateName: "templateRef",
                types: {
                    option: "templateRef",
                    selected: "selected"
                }
            });
            this.modelChange = new core.EventEmitter();
        }
        AckOptions.prototype.ngAfterViewInit = function () {
            var _this = this;
            Promise.resolve().then(function () {
                if (_this.inputTemplateRefs) {
                    _this.TemplateReader.readTemplates(_this.inputTemplateRefs);
                }
                if (_this.templateRefs) {
                    _this.TemplateReader.readTemplates(_this.templateRefs);
                }
            });
        };
        AckOptions.prototype.selectItem = function (item) {
            var value = this.getArrayItemValue(item);
            var isArrayMode = this.multiple || this.modelAsArray;
            if (isArrayMode) {
                var modelIndex = this.modelIndex(item);
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
        };
        AckOptions.prototype.emitChange = function () {
            this.modelChange.emit(this.model);
            var form = getParentByTagName(this.ElementRef.nativeElement, 'form');
            if (form)
                this.fireFormEvents(form);
        };
        AckOptions.prototype.fireFormEvents = function (form) {
            var event = document.createEvent("HTMLEvents");
            event.initEvent("input", true, true);
            form.dispatchEvent(event);
            event = document.createEvent("HTMLEvents");
            event.initEvent("change", true, true);
            form.dispatchEvent(event);
        };
        AckOptions.prototype.getArrayItemModel = function (item) {
            if (this.arrayToModelKey != null) {
                if (this.arrayToModelKey == '') {
                    return item;
                }
                var split = this.arrayToModelKey.split('.');
                var scope = item;
                while (split.length) {
                    if (scope == null)
                        return null;
                    var key = split.shift();
                    scope = scope[key];
                }
                return scope;
            }
            return this.getArrayItemValue(item);
        };
        AckOptions.prototype.getArrayItemValue = function (item) {
            if (!this.arrayKey)
                return item;
            var items = this.arrayKey.split('.');
            var scope = item;
            while (items.length) {
                if (scope == null)
                    return null;
                var firstItem = items.shift();
                scope = scope[firstItem];
            }
            return scope;
        };
        AckOptions.prototype.getModelValueToArrayItem = function (modelValue) {
            if (!this.modelKey)
                return modelValue;
            var items = this.modelKey.split('.');
            var scope = modelValue;
            while (items.length) {
                if (scope == null)
                    return null;
                var firstItem = items.shift();
                scope = scope[firstItem];
            }
            return scope;
        };
        AckOptions.prototype.modelIndex = function (item) {
            this.model = array(this.model);
            for (var i = this.model.length - 1; i >= 0; --i) {
                var value = this.getArrayItemValue(item);
                var modelValue = this.getModelValueToArrayItem(this.model[i]);
                if (value == modelValue)
                    return i;
            }
            return -1;
        };
        AckOptions.prototype.isItemSelected = function (item) {
            return this.modelIndex(item) >= 0;
        };
        AckOptions.prototype.getItemClass = function (item) {
            var selected = this.isItemSelected(item);
            var string = '';
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
        };
        return AckOptions;
    }());
    AckOptions.decorators = [
        { type: core.Component, args: [{
                    selector: "ack-options",
                    template: string$4
                    //,exportAs:"AckOptions"
                },] }
    ];
    AckOptions.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    AckOptions.propDecorators = {
        array: [{ type: core.Input }],
        stylize: [{ type: core.Input }],
        multiple: [{ type: core.Input }],
        modelAsArray: [{ type: core.Input }],
        max: [{ type: core.Input }],
        toggleable: [{ type: core.Input }],
        templateRefs: [{ type: core.ContentChildren, args: [core.TemplateRef,] }],
        inputTemplateRefs: [{ type: core.Input }],
        model: [{ type: core.Input }],
        modelChange: [{ type: core.Output }],
        arrayKey: [{ type: core.Input }],
        modelKey: [{ type: core.Input }],
        arrayToModelKey: [{ type: core.Input }]
    };
    function getParentByTagName(node, tagname) {
        var parent;
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

    var string$5 = "<ack-modal (close)=\"close.emit($event)\" [allowClose]=\"allowClose\" [showModel]=\"showModel\" (showModelChange)=\"showModelChange.emit($event)\" [isModelMode]=\"showModelChange.observers.length\" [wrapStyle]=\"wrapStyle\" [wrapCellStyle]=\"wrapCellStyle\" [backgroundColor]=\"backgroundColor\" (backgroundColorChange)=\"backgroundColorChange.emit($event)\"><ng-content></ng-content><div class=\"border-grey-6x border bg-white\"><ack-options #ackOptions=\"\" [array]=\"array\" [max]=\"max\" [modelAsArray]=\"modelAsArray\" [model]=\"model\" (modelChange)=\"fireModelChange($event)\" [multiple]=\"multiple\" [toggleable]=\"toggleable\" [stylize]=\"stylize\" [inputTemplateRefs]=\"templateRefs\" [arrayKey]=\"arrayKey\" [arrayToModelKey]=\"arrayToModelKey\" [modelKey]=\"modelKey\"></ack-options></div></ack-modal>";

    var AckOptionsModal = /** @class */ (function (_super) {
        __extends(AckOptionsModal, _super);
        function AckOptionsModal() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            //one way binds
            _this.allowClose = true;
            //one way expressions
            _this.close = new core.EventEmitter();
            _this.backgroundColorChange = new core.EventEmitter();
            _this.showModel = true;
            _this.showModelChange = new core.EventEmitter();
            return _this;
        }
        AckOptionsModal.prototype.fireModelChange = function (model) {
            if (!this.multiple)
                this.close.emit();
            this.modelChange.emit(model);
        };
        return AckOptionsModal;
    }(AckOptions));
    AckOptionsModal.decorators = [
        { type: core.Component, args: [{
                    selector: 'ack-options-modal',
                    template: string$5
                },] }
    ];
    AckOptionsModal.propDecorators = {
        allowClose: [{ type: core.Input }],
        wrapStyle: [{ type: core.Input }],
        wrapCellStyle: [{ type: core.Input }],
        close: [{ type: core.Output }],
        backgroundColor: [{ type: core.Input }],
        backgroundColorChange: [{ type: core.Output }],
        showModel: [{ type: core.Input }],
        showModelChange: [{ type: core.Output }]
    };

    var string$6 = "<div [(elementHeightModel)]=\"elementHeightModel\" [ngClass]=\"wrapClass\" [class.no-scroll-bars]=\"active &amp;&amp; !scrollBars &amp;&amp; scrollBars!=null\" [ngStyle]=\"active ? {overflow:overflow,position:'absolute',width:'100%'} : {}\"><ng-content></ng-content></div><div *ngIf=\"elementHeightModel &amp;&amp; active\" style=\"visibility:hidden;overflow:hidden;width:100%\" [style.height.px]=\"elementHeightModel\">&nbsp;</div>";

    var AbsoluteOverflowX = /** @class */ (function () {
        function AbsoluteOverflowX(ElementRef) {
            this.ElementRef = ElementRef;
            this.active = true;
            this.overflow = 'auto';
        }
        AbsoluteOverflowX.prototype.ngOnInit = function () {
            this.checkDisplay();
        };
        AbsoluteOverflowX.prototype.ngOnChanges = function (changes) {
            if (changes.active) {
                this.checkDisplay();
            }
        };
        AbsoluteOverflowX.prototype.ngAfterViewInit = function () {
            this.ElementRef.nativeElement.style.display = 'block';
        };
        AbsoluteOverflowX.prototype.checkDisplay = function () {
            this.ElementRef.nativeElement.style.position = this.active ? 'relative' : 'static';
        };
        return AbsoluteOverflowX;
    }());
    AbsoluteOverflowX.decorators = [
        { type: core.Component, args: [{
                    selector: 'absolute-overflow-x',
                    template: string$6
                },] }
    ];
    AbsoluteOverflowX.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    AbsoluteOverflowX.propDecorators = {
        scrollBars: [{ type: core.Input }],
        wrapClass: [{ type: core.Input }],
        active: [{ type: core.Input }],
        overflow: [{ type: core.Input }]
    };

    var string$7 = "<div *ngIf=\"error!=null &amp;&amp; errorClose!=error\" [@fadeInOutUp]=\"1\"><div *ngIf=\"error &amp;&amp; closable\" (click)=\"close.emit();errorClose=error\" style=\"position:relative\"><div style=\"position:absolute;bottom:-17px;right:-16px;border:1px solid #DDD;border-radius:50%;z-index:20\"><ack-close-icon></ack-close-icon></div></div><div class=\"pad-xxs\" *ngIf=\"error!=null &amp;&amp; errorClose!=error\" [@fadeInOutUp]=\"1\" [ngClass]=\"cssClasses\"><div class=\"flex-valign-center flex-wrap child-margin-xxs\"><div class=\"flex-1\"><div class=\"strong text-3x margin-0\" [class.cursor-pointer]=\"allowDetails\" (click)=\"!allowDetails || moreDetails=!moreDetails\">{{ getErrorMessage(error) }}</div></div><a class=\"text-blue underline text-xs\" *ngIf=\"allowDetails &amp;&amp; error &amp;&amp; (error|typeof)!='string'\" (click)=\"moreDetails=!moreDetails\">details</a></div><ng-container *ngTemplateOutlet=\"titleFooter\"></ng-container><div *ngIf=\"moreDetails\" [@fadeInOutUp]=\"1\"><absolute-overflow-x class=\"text-sm\"><pre class=\"margin-0 pad-xs\">{{ error|json }}</pre></absolute-overflow-x></div></div></div>";

    var ErrorWell = /** @class */ (function () {
        function ErrorWell() {
            this.message = 'Unexpected Error Occured';
            this.closable = true;
            this.allowDetails = true;
            this.close = new core.EventEmitter();
        }
        ErrorWell.prototype.ngOnInit = function () {
            this.cssClasses = this.cssClasses || 'bg-danger border border-danger text-danger';
        };
        ErrorWell.prototype.getErrorMessage = function (error) {
            if (!error)
                return this.message;
            if (typeof error == 'string')
                return error;
            return error.message || error["statusText"] || this.message;
        };
        return ErrorWell;
    }());
    ErrorWell.decorators = [
        { type: core.Component, args: [{
                    selector: 'error-well',
                    template: string$7,
                    animations: ackAngularFx.animations
                },] }
    ];
    ErrorWell.propDecorators = {
        moreDetails: [{ type: core.Input }],
        message: [{ type: core.Input }],
        error: [{ type: core.Input }],
        cssClasses: [{ type: core.Input }],
        closable: [{ type: core.Input }],
        allowDetails: [{ type: core.Input }],
        close: [{ type: core.Output }],
        titleFooter: [{ type: core.ContentChild, args: ["titleFooter",] }]
    };

    var string$8 = "<div style=\"text-align:center;height:100%\"><div style=\"display:inline-block;width:100%;height:100%;max-width:1000px\"><div style=\"width:100%;height:100%;\"><table cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%;height:100%;\"><tr *ngIf=\"readerHeader\"><td><ng-template *ngTemplateOutlet=\"readerHeader\"></ng-template></td></tr><tr><td style=\"height:100%\"><ng-content></ng-content></td></tr></table></div></div></div>";

    //easy to use common full page templater
    var ReaderHeaderBody = /** @class */ (function () {
        function ReaderHeaderBody() {
        }
        return ReaderHeaderBody;
    }());
    ReaderHeaderBody.decorators = [
        { type: core.Component, args: [{
                    selector: 'reader-header-body',
                    template: string$8
                },] }
    ];
    ReaderHeaderBody.propDecorators = {
        readerHeader: [{ type: core.ContentChild, args: ['reader-header',] }]
    };
    var ReaderHeader = /** @class */ (function () {
        function ReaderHeader() {
        }
        return ReaderHeader;
    }());
    ReaderHeader.decorators = [
        { type: core.Directive, args: [{
                    selector: 'reader-header'
                },] }
    ];
    var ReaderBody = /** @class */ (function () {
        function ReaderBody(element) {
            this.element = element;
            element.nativeElement.style.height = '100%';
            element.nativeElement.style.display = 'block';
        }
        return ReaderBody;
    }());
    ReaderBody.decorators = [
        { type: core.Directive, args: [{
                    selector: "reader-body"
                },] }
    ];
    ReaderBody.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    ReaderBody.propDecorators = {
        readerHeader: [{ type: core.ContentChild, args: ['reader-header',] }]
    };

    var string$9 = "<div class=\"child-pad-h-xs flex-wrap text-center\" *ngIf=\"DebugItems.length&gt;1\"><a class=\"cursor-pointer border border-grey-3x radius-5 flex-1\" *ngFor=\"let item of DebugItems\" [ngClass]=\"item===debugItem ? 'bg-positive text-white' : ''\" (click)=\"debugItem = debugItem===item ? null : item\">{{item.name}}<ng-container *ngIf=\"item.type==='array'\">&nbsp;( {{ item.value?.length || 0 }} )</ng-container></a></div><ng-container *ngIf=\"debugItem\"><h3 class=\"margin-bottom-0\">{{ debugItem.name }}</h3><ng-container *ngIf=\"debugItem.type==='array';else regdebug\"><ng-container #loop=\"var\" [var]=\"{view:0}\"></ng-container><pre class=\"bg-grey-3x margin-0 sample-code\" *ngFor=\"let data of debugItem.value;let ii=index\"><ng-container *ngIf=\"loop.var.view==ii\"><div class=\"flex-valign-center child-pad-xs\" style=\"padding:.4em;float:right\"><a class=\"fas fa-caret-square-left hover-bg-energized\" (click)=\"loop.var.view=ii===0 ? debugItem.value.length-1 : ii-1\">&lt;</a><a style=\"color:blue;\" (click)=\"editsMap[ii]=!editsMap[ii]\">edit</a><a style=\"color:blue;\" (click)=\"debugItem.type=null\">all</a><a class=\"fas fa-caret-square-right hover-bg-energized\" (click)=\"loop.var.view=ii===debugItem.value.length-1 ? 0 : ii+1\">&gt;</a></div><p><ng-container *ngIf=\"debugItem.rowTitle;else defaultRowLabel\"><ng-template *ngTemplateOutlet=\"debugItem.rowTitle;context:{index:ii}\"></ng-template></ng-container><ng-template #defaultRowLabel=\"\"><strong>Result {{ii}} of {{debugItem.value.length}} </strong></ng-template></p><absolute-overflow-x *ngIf=\"!editsMap[ii]\" style=\"font-size:0.8em;\"><pre>{{ data | json }}</pre></absolute-overflow-x><ng-container *ngIf=\"editsMap[ii]\"><textarea [name]=\"'editsMap' + ii\" style=\"width:100%;height:300px\" (change)=\"dataString = $event.target.value\">{{ data | json }}</textarea><div style=\"text-align:center\"><a style=\"color:blue;padding-top:.4em;\" (click)=\"updateDataByJsonString(data, dataString, debugItem);editsMap[ii]=false\">save</a></div></ng-container></ng-container></pre></ng-container><ng-template #regdebug=\"\"><div class=\"pos-rel\"><div class=\"pos-abs right-0 z-index-10\"><div class=\"pad-xxs\"><i class=\"fas fa-pencil-alt hover-text-energized\" (click)=\"edit=!edit\" [class.text-calm]=\"edit\">edit</i></div></div></div><ng-container *ngIf=\"edit;else readMode\"><textarea class=\"width-full\" rows=\"30\" (change)=\"apply(debugItem.value,$event.target.value, debugItem)\" wrap=\"off\">{{ debugItem.value | json }}</textarea></ng-container><ng-template #readMode=\"\"><absolute-overflow-x><pre class=\"code-sample\">{{ debugItem.value | json }}</pre></absolute-overflow-x></ng-template></ng-template></ng-container>";

    var DebugItem = /** @class */ (function () {
        function DebugItem() {
            this.save = new core.EventEmitter();
        }
        return DebugItem;
    }());
    DebugItem.decorators = [
        { type: core.Directive, args: [{
                    selector: "debug-item"
                },] }
    ];
    DebugItem.propDecorators = {
        name: [{ type: core.Input }],
        value: [{ type: core.Input }],
        type: [{ type: core.Input }],
        rowTitle: [{ type: core.ContentChild, args: ["rowTitle",] }],
        save: [{ type: core.Output }]
    };
    var DebugArea = /** @class */ (function () {
        function DebugArea() {
            this.editsMap = {}; //map of debug edits
        }
        DebugArea.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.DebugItems.length === 1) {
                Promise.resolve().then(function () { return _this.debugItem = _this.DebugItems.first; });
            }
        };
        //update data from debug area
        DebugArea.prototype.updateDataByJsonString = function (item, string, debugItem) {
            try {
                var json = JSON.parse(string);
                for (var x in item)
                    delete item[x];
                Object.assign(item, json);
                //this.arrayChange.emit(this.array)
                debugItem.save.emit(item);
            }
            catch (e) {
                console.error('invalid json string');
            }
        };
        DebugArea.prototype.apply = function (item, json, debugItem) {
            var ob = JSON.parse(json);
            Object.assign(item, ob);
            debugItem.save.emit(item);
        };
        return DebugArea;
    }());
    DebugArea.decorators = [
        { type: core.Component, args: [{
                    selector: "debug-area",
                    template: string$9
                },] }
    ];
    DebugArea.propDecorators = {
        DebugItems: [{ type: core.ContentChildren, args: [DebugItem,] }]
    };
    var declarations = [
        DebugItem, DebugArea
    ];

    var AckAggregate = /** @class */ (function () {
        function AckAggregate() {
            this.outputChange = new core.EventEmitter();
        }
        return AckAggregate;
    }());
    AckAggregate.decorators = [
        { type: core.Directive, args: [{
                    selector: 'ack-aggregate'
                },] }
    ];
    AckAggregate.propDecorators = {
        type: [{ type: core.Input }],
        keys: [{ type: core.Input }],
        output: [{ type: core.Input }],
        outputChange: [{ type: core.Output }]
    };

    var AckArray = /** @class */ (function () {
        function AckArray(_iterableDiffers) {
            this._iterableDiffers = _iterableDiffers;
            this.pushed = {};
            this.inSort = false;
            this.sortArray = [];
            this.pageAt = 0; //when to page aka maxrows
            this.pagesChange = new BehaviorSubject.BehaviorSubject(null);
            //@Output() pagesChange:EventEmitter<any[][]> = new EventEmitter()
            //a chance to know when current viewed page should be zero
            this.page = 0;
            this.pageChange = new core.EventEmitter();
            this.keyMapChange = new core.EventEmitter();
            this.loopStart = new core.EventEmitter();
            this.loopEach = new core.EventEmitter();
            this.loopEnd = new core.EventEmitter();
            this.arrayChange = new core.EventEmitter();
            //super()
            //watch deep changes
            var f = this._iterableDiffers.find([]);
            this.iterableDiffer = f.create();
        }
        AckArray.prototype.ngOnDestroy = function () {
            if (this.array$sub) {
                this.array$sub.unsubscribe();
            }
        };
        AckArray.prototype.ngOnInit = function () {
            var _this = this;
            if (this.keyMapChange.observers.length) {
                if (!this.keyMap) {
                    Promise.resolve().then(function () {
                        _this.keyMap = {};
                        _this.keyMapChange.emit(_this.keyMap);
                    });
                }
                this.pushCreateMap();
            }
        };
        AckArray.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.AckAggregates) {
                this.pushAggregates(this.AckAggregates);
            }
            this.inited = true;
            Promise.resolve().then(function () { return _this.loop(true); });
        };
        //watch array deep changes
        AckArray.prototype.ngDoCheck = function () {
            var _this = this;
            if (!this.inited)
                return;
            var changes = this.iterableDiffer.diff(this.array);
            if (changes) {
                Promise.resolve().then(function () { return _this.loop(false); });
            }
        };
        AckArray.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes.array$) {
                if (this.array$sub) {
                    this.array$sub.unsubscribe();
                    delete this.array$sub;
                }
                if (this.array$) {
                    this.array$sub = this.array$.subscribe(function (array) {
                        if (_this.merge) {
                            mergeArrays(_this.array, array, _this.idKeys);
                        }
                        else {
                            var reset = _this.array != array;
                            _this.array = array;
                            _this.loop(reset);
                        }
                    });
                }
            }
            var loop = changes.array ? true : false;
            if (changes.pageAt) {
                this.pushCreatePages();
                loop = true;
            }
            if (this.inited && loop) {
                Promise.resolve().then(function () { return _this.loop(true); });
            }
        };
        /*
          performJoins(){
            this.AckArrayJoins.forEach(join=>
              join.joinTo( this.array )
            )
          }
        */
        AckArray.prototype.pushAggregates = function (aggs) {
            var _this = this;
            aggs.forEach(function (agg) {
                var memory;
                switch (agg.type) {
                    //default is to sum
                    default: {
                        _this.loopStart.subscribe(function () { return memory = 0; });
                        _this.loopEach.subscribe(function (loop) {
                            var value = _this.getItemValueByKeys(loop.item, agg.keys);
                            if (value) {
                                memory = memory + value;
                            }
                        });
                        _this.loopEnd.subscribe(function () {
                            agg.output = memory;
                            agg.outputChange.emit(memory);
                        });
                    }
                }
            });
        };
        AckArray.prototype.getItemValueByKeys = function (item, keys) {
            for (var x = 0; x < keys.length; ++x) {
                var keyName = keys[x];
                item = item[keyName];
                if (item == null)
                    return null;
            }
            return item;
        };
        AckArray.prototype.loop = function (reset) {
            //super.loop( reset )
            if (!this.array) {
                this.array = [];
            }
            this.loopStart.emit(reset);
            var last = this.array.length;
            for (var x = 0; x < last; ++x) {
                this.loopEach.emit({ index: x, item: this.array[x] });
            }
            //this.performJoins()
            this.loopEnd.emit();
        };
        AckArray.prototype.pushCreateMap = function () {
            var _this = this;
            if (this.pushed.createMap)
                return;
            this.pushed.createMap = true;
            this.loopStart.subscribe(function () { return _this.keyMap = {}; });
            this.loopEach.subscribe(function (ob) {
                var key = _this.getItemId(ob.item);
                _this.keyMap[key] = ob.item;
            });
            this.loopEnd.subscribe(function () { return _this.keyMapChange.emit(_this.keyMap); });
        };
        /** adds to loop functionality how to create pages */
        AckArray.prototype.pushCreatePages = function () {
            var _this = this;
            if (this.pushed.createPages)
                return;
            this.pushed.createPages = true;
            var pos = 0;
            var last = 0;
            this.loopStart.subscribe(function (reset) {
                pos = 0;
                last = _this.array.length;
                if (reset) {
                    _this.pageChange.emit(_this.page = 0);
                }
                _this.pages = _this.pages || [];
                _this.pages.length = 0; //dont break binding if pages remembered
                _this.pages.push([]);
            });
            this.loopEach.subscribe(function (ob) {
                _this.pages[pos].push(ob.item);
                if (_this.pages[pos].length == _this.pageAt && ob.index < last - 1) {
                    _this.pages.push([]);
                    ++pos;
                }
            });
            this.loopEnd.subscribe(function () {
                if (_this.page && _this.page >= _this.pages.length) {
                    _this.pageChange.emit(_this.page = 0);
                }
                //this.pagesChange.emit( this.pages )
                _this.pagesChange.next(_this.pages);
            });
        };
        //reduce array down to one item
        AckArray.prototype.only = function (item) {
            this.array.length = 0;
            this.array.push(item);
            this.arrayChange.emit(this.array);
            this.loop(true);
        };
        //looks up id or the item itself is an ID
        AckArray.prototype.getItemId = function (item) {
            return this.idKeys && this.idKeys[0] && item[this.idKeys[0]];
        };
        AckArray.prototype.getCompareArray = function () {
            if (this.array && this.idKeys && this.idKeys.length) {
                var idKey_1 = this.idKeys[0];
                return this.array.map(function (item) { return item[idKey_1]; });
            }
            return this.array || [];
        };
        /*
          selected(item){
            return this.itemIndex(item) >= 0 ? true : false
          }
        */
        AckArray.prototype.itemIndex = function (item) {
            var array = this.getCompareArray();
            for (var x = array.length - 1; x >= 0; --x) {
                if (dataKeysMatch(array[x], item, this.idKeys)) {
                    return x;
                }
            }
            return -1;
        };
        AckArray.prototype.toggle = function (item) {
            var index = this.itemIndex(item);
            if (index >= 0) {
                return this.splice(index);
            }
            return this.push(item);
        };
        AckArray.prototype.push = function (item) {
            this.param().push(item);
            this.loop(false);
            return this;
        };
        AckArray.prototype.unshift = function (item) {
            this.param().unshift(item);
            return this;
        };
        AckArray.prototype.splice = function (x, y) {
            if (y === void 0) { y = 1; }
            this.param().splice(x, y);
            this.loop(false);
            return this;
        };
        AckArray.prototype.param = function () {
            if (!this.array)
                this.arrayChange.emit(this.array = []);
            return this.array;
        };
        AckArray.prototype.toggleSort = function (arrayKey, sortType) {
            if (this.inSort)
                return false;
            this.inSort = true;
            var asc = false; //most lists come pre sorted asc, our default should be desc
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
            var toKey = function (a, index) {
                if (index === void 0) { index = 0; }
                var value = a[arrayKey[index]];
                if (value == null || index == arrayKey.length - 1) {
                    return value;
                }
                return toKey(value, index + 1);
            };
            if (arrayKey.constructor != Array) {
                arrayKey = [arrayKey];
            }
            var numberSort = !isNaN(sortType) || ["int", "number"].indexOf(sortType) >= 0;
            if (numberSort) {
                if (asc) {
                    this.array.sort(function (a, b) { return Number(toKey(a)) - Number(toKey(b)); });
                }
                else {
                    this.array.sort(function (b, a) { return Number(toKey(a)) - Number(toKey(b)); });
                }
            }
            else {
                switch (sortType) {
                    case "date":
                    case "time":
                    case "datetime":
                        if (asc) {
                            this.array.sort(function (a, b) {
                                a = new Date(toKey(a, 0));
                                b = new Date(toKey(b, 0));
                                return a == "Invalid Date" || a > b ? -1 : b == "Invalid Date" || a < b ? 1 : 0;
                            });
                        }
                        else {
                            this.array.sort(function (b, a) {
                                a = new Date(toKey(a, 0));
                                b = new Date(toKey(b, 0));
                                return a == "Invalid Date" || a > b ? -1 : b == "Invalid Date" || a < b ? 1 : 0;
                            });
                        }
                        break;
                    default: //STRING BASED SORT
                        if (asc) {
                            this.array.sort(function (a, b) { return String(toKey(a) || "").toLowerCase() > String(toKey(b) || "").toLowerCase() ? 1 : -1; });
                        }
                        else {
                            this.array.sort(function (b, a) { return String(toKey(a) || "").toLowerCase() > String(toKey(b) || "").toLowerCase() ? 1 : -1; });
                        }
                }
            }
            //cleanup
            if (this.sortArray.length > 3) {
                this.sortArray.pop();
            }
            this.inSort = false;
            this.loop(true); //cause pages to be updated
        };
        return AckArray;
    }());
    AckArray.decorators = [
        { type: core.Directive, args: [{
                    selector: "ack-array",
                    exportAs: "AckArray"
                },] }
    ];
    AckArray.ctorParameters = function () { return [
        { type: core.IterableDiffers }
    ]; };
    AckArray.propDecorators = {
        pageAt: [{ type: core.Input }],
        pages: [{ type: core.Input }],
        pagesChange: [{ type: core.Output }],
        page: [{ type: core.Input }],
        pageChange: [{ type: core.Output }],
        keyMap: [{ type: core.Input }],
        keyMapChange: [{ type: core.Output }],
        AckAggregates: [{ type: core.ContentChildren, args: [AckAggregate,] }],
        idKeys: [{ type: core.Input }],
        merge: [{ type: core.Input }],
        array: [{ type: core.Input }],
        arrayChange: [{ type: core.Output }],
        array$: [{ type: core.Input }]
    };
    function dataKeysMatch(ao, an, idKeys) {
        for (var x = idKeys.length - 1; x >= 0; --x) {
            var idKey = idKeys[x];
            if (ao[idKey] != null && ao[idKey] !== an[idKey]) {
                return false;
            }
        }
        return true;
    }
    function mergeArrays(arrayOriginal, arrayNew, idKeys) {
        //removals
        for (var x = arrayOriginal.length - 1; x >= 0; --x) {
            var ao = arrayOriginal[x];
            var an = arrayNew[x];
            //quick match
            if (an && dataKeysMatch(ao, an, idKeys)) {
                continue;
            }
            var found = false;
            for (var xx = arrayNew.length - 1; xx >= 0; --xx) {
                if (dataKeysMatch(ao, arrayNew[xx], idKeys)) {
                    found = true;
                    break;
                }
            }
            if (found)
                continue;
            arrayOriginal.splice(x, 1);
        }
        //merge and add
        for (var x = 0; x < arrayNew.length; ++x) {
            var ao = arrayOriginal[x];
            var an = arrayNew[x];
            var found = false;
            //try by index match first, may to near identical arrays
            if (ao && dataKeysMatch(ao, an, idKeys)) {
                mergeObjects(ao, an);
                continue;
            }
            //try to match by loop against loop
            for (var xx = arrayOriginal.length - 1; xx >= 0; --xx) {
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
            //not found, add to array
            //arrayOriginal.unshift(an)
            arrayOriginal.splice(x, 0, an);
        }
    }
    function mergeObjects(ao, an) {
        for (var x in ao) {
            delete ao[x];
        }
        Object.assign(ao, an);
    }

    var string$a = "<div style=\"width:100%;top:0;z-index:1\" [style.position]=\"currentPosition\"><ng-content></ng-content></div><div [style.height.px]=\"fillHeight\"></div>";

    var ScrollPastFixed = /** @class */ (function () {
        function ScrollPastFixed(ElementRef) {
            this.ElementRef = ElementRef;
        }
        ScrollPastFixed.prototype.getReadElement = function () {
            var children = this.ElementRef.nativeElement.children;
            return children[children.length - 2];
        };
        ScrollPastFixed.prototype.init = function () {
            var _this = this;
            this.onScroll = function () { return _this.check(); };
            window.addEventListener("scroll", this.onScroll);
            this.onScroll();
        };
        ScrollPastFixed.prototype.ngAfterViewInit = function () {
            var _this = this;
            Promise.resolve().then(function () { return _this.init(); }); //prevent Expression has changed after it was checked error
        };
        ScrollPastFixed.prototype.check = function () {
            var scrollPos = window['pageYOffset'];
            if (this.placeholder && this.placeholder <= scrollPos) {
                return;
            }
            var elm = this.getReadElement();
            var offsetTop = this.placeholder || getDistanceFromTop(elm);
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
        };
        return ScrollPastFixed;
    }());
    ScrollPastFixed.decorators = [
        { type: core.Component, args: [{
                    selector: 'scroll-past-fixed',
                    template: string$a
                },] }
    ];
    ScrollPastFixed.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    ScrollPastFixed.propDecorators = {
        template: [{ type: core.ViewChild, args: ['template',] }]
    };
    function getDistanceFromTop(element) {
        var yPos = 0;
        while (element) {
            yPos += (element.offsetTop);
            element = element.offsetParent;
        }
        return yPos;
    }

    /**
      Applies css class when condition returns a truthy value. Allows timed removal
      Html inline elms cannot be animated. They will be upgraded to display inline-block
    */
    var FxOn = /** @class */ (function () {
        function FxOn(element) {
            this.element = element;
            this.fxThen = new core.EventEmitter();
            //an array to be used in #FxOn refs for fx selectable options (see examples)
            this.fxTypes = [
                "bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello",
                "bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp"
            ];
        }
        FxOn.prototype.ngOnInit = function () {
            var _this = this;
            Promise.resolve().then(function () { return _this.update(); });
        };
        FxOn.prototype.update = function () {
            if (this.fxOn) {
                this.onTrue();
            }
            else {
                this.onFalse();
            }
        };
        FxOn.prototype.ngOnChanges = function (changes) {
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
        };
        FxOn.prototype.onFalse = function () {
            this.removeType();
            if (this.timeout) {
                clearTimeout(this.timeout);
                delete this.timeout;
            }
        };
        FxOn.prototype.removeType = function () {
            var elm = this.element.nativeElement;
            removeClass(elm, this.fxClass);
            if (this.inlineTreated) {
                elm.style.display = 'inline';
                this.inlineTreated = false;
            }
        };
        FxOn.prototype.applyType = function () {
            var elm = this.element.nativeElement;
            if (elm.style && elm.style.display === 'inline' || getElementDefaultDisplay(elm) === 'inline') {
                this.inlineTreated = true;
                elm.style.display = 'inline-block';
            }
            addClass(elm, this.fxClass);
        };
        FxOn.prototype.onTrue = function () {
            var _this = this;
            this.applyType();
            if (this.fxForMs) {
                this.timeout = setTimeout(function () {
                    _this.onFalse();
                    _this.fxThen.emit();
                }, this.fxForMs);
            }
        };
        return FxOn;
    }());
    FxOn.decorators = [
        { type: core.Directive, args: [{
                    selector: "[fxOn]",
                    exportAs: "FxOn"
                },] }
    ];
    FxOn.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    FxOn.propDecorators = {
        fxOn: [{ type: core.Input }],
        fxClass: [{ type: core.Input }],
        fxForMs: [{ type: core.Input }],
        fxThen: [{ type: core.Output }]
    };
    function hasClass(el, className) {
        var names = className.split(" ");
        for (var x = names.length - 1; x >= 0; --x) {
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
        className.split(' ').forEach(function (className) {
            if (el.classList) {
                el.classList.add(className);
            }
            else if (!hasClass(el, className)) {
                el.className += " " + className;
            }
        });
    }
    function removeClass(el, className) {
        className.split(' ').forEach(function (className) {
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

    /** runs shake instructions when condition returns a truthy value */
    var ShakeOn = /** @class */ (function () {
        function ShakeOn(element) {
            this.element = element;
            this.shakeConstant = false;
            this.shakeThen = new core.EventEmitter();
            //an array to be used in #ShakeOn refs for fx selectable options (see examples)
            this.shakeTypes = [
                'shake-slow', 'shake-hard', 'shake-little', 'shake-horizontal',
                'shake-vertical', 'shake-rotate', 'shake-opacity', 'shake-crazy',
                'shake-chunk'
            ];
        }
        ShakeOn.prototype.ngOnInit = function () {
            var _this = this;
            Promise.resolve().then(function () { return _this.update(); });
        };
        ShakeOn.prototype.update = function () {
            this.shakeForMs = this.shakeForMs || 2000;
            this.shakeType = this.shakeType || 'shake-slow';
        };
        ShakeOn.prototype.ngOnChanges = function (changes) {
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
                    var pv = changes.shakeType.previousValue;
                    if (pv) {
                        removeClass(this.element.nativeElement, pv);
                    }
                    this.applyType();
                }
                else {
                    this.removeType();
                }
            }
        };
        ShakeOn.prototype.onFalse = function () {
            removeClass(this.element.nativeElement, 'shake-constant');
            this.removeType();
            if (this.timeout) {
                clearTimeout(this.timeout);
                delete this.timeout;
            }
        };
        ShakeOn.prototype.removeType = function () {
            removeClass(this.element.nativeElement, this.shakeType || 'shake-slow');
        };
        ShakeOn.prototype.applyType = function () {
            addClass(this.element.nativeElement, this.shakeType || 'shake-slow');
        };
        ShakeOn.prototype.onTrue = function () {
            var _this = this;
            addClass(this.element.nativeElement, 'shake-constant');
            this.applyType();
            if (!this.shakeConstant) {
                this.timeout = setTimeout(function () {
                    //$scope.shakeOnController.shakeOn = false
                    _this.onFalse();
                    _this.shakeThen.emit(_this);
                }, this.shakeForMs);
            }
        };
        return ShakeOn;
    }());
    ShakeOn.decorators = [
        { type: core.Directive, args: [{
                    selector: "[shakeOn]",
                    exportAs: "ShakeOn"
                },] }
    ];
    ShakeOn.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    ShakeOn.propDecorators = {
        shakeConstant: [{ type: core.Input }],
        shakeOn: [{ type: core.Input }],
        shakeForMs: [{ type: core.Input }],
        shakeType: [{ type: core.Input }],
        shakeThen: [{ type: core.Output }]
    };

    var FocusOn = /** @class */ (function () {
        function FocusOn(element) {
            this.element = element;
            this.focusOnDelay = 0;
            this.focusThen = new core.EventEmitter();
        }
        FocusOn.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes.focusOn && changes.focusOn.currentValue) {
                if (this.focusOnDelay === 0) {
                    Promise.resolve().then(function () { return _this.update(); });
                }
                else {
                    setTimeout(function () { return _this.update(); }, this.focusOnDelay);
                }
            }
        };
        FocusOn.prototype.update = function () {
            this.element.nativeElement.focus();
            this.focusThen.emit();
        };
        return FocusOn;
    }());
    FocusOn.decorators = [
        { type: core.Directive, args: [{
                    selector: '[focusOn]'
                },] }
    ];
    FocusOn.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    FocusOn.propDecorators = {
        focusOn: [{ type: core.Input }],
        focusOnDelay: [{ type: core.Input }],
        focusThen: [{ type: core.Output }]
    };

    var InitDirective = /** @class */ (function () {
        function InitDirective() {
            this.init = new core.EventEmitter();
        }
        InitDirective.prototype.ngOnInit = function () {
            this.init.emit();
        };
        return InitDirective;
    }());
    InitDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[init]'
                },] }
    ];
    InitDirective.propDecorators = {
        init: [{ type: core.Output }]
    };

    var ContentModel = /** @class */ (function () {
        function ContentModel(elm) {
            this.elm = elm;
            this.changeDone = new core.EventEmitter();
            this.inputChange = new core.EventEmitter();
            // Below, avoid using (contentModelChange) ... use (inputChange) instead
            this.contentModelChange = new core.EventEmitter();
            this.enter = new core.EventEmitter(); // fires when enter key used
            this.recentInputs = 0; // check in/out user input to prevent updating content right after user input
            this.elm.nativeElement.setAttribute('contenteditable', true);
        }
        ContentModel.prototype.ngOnDestroy = function () {
            this.elm.nativeElement.removeAttribute('contenteditable');
        };
        ContentModel.prototype.ngOnChanges = function () {
            var nElm = this.elm.nativeElement;
            // do not redraw if we are currently changing the input
            if (this.recentInputs) {
                --this.recentInputs;
                return;
            }
            var usePlaceholder = this.evalPlaceholder();
            if (!usePlaceholder) {
                nElm.textContent = this.contentModel;
            }
        };
        ContentModel.prototype.evalPlaceholder = function (placeholder) {
            var nElm = this.elm.nativeElement;
            var usePlaceholder = this.contentModel == null || this.contentModel === '';
            if (usePlaceholder) {
                nElm.textContent = placeholder == null ? this.placeholder : placeholder;
                return true;
            }
            return false;
        };
        ContentModel.prototype.shouldCancelEvent = function (event) {
            var key = event.which || event.keyCode;
            return this.enterEnds && key === 13;
        };
        ContentModel.prototype.onKeyDown = function (event) {
            this.checkPlaceholder();
            var cancel = this.shouldCancelEvent(event);
            // enter key treatment
            if (cancel) {
                this.onBlur();
                cancelEvent(event);
                this.enter.emit();
                return;
            }
            if (this.maxLength) {
                var newValue = this.elm.nativeElement.textContent;
                var maxLength = Number(this.maxLength);
                var maxed = this.maxLength && newValue.length > maxLength;
                var key = event.which || event.keyCode;
                if (maxed) {
                    var isDelete = [8, 46].indexOf(key) >= 0;
                    if (!isDelete) {
                        cancelEvent(event);
                        return;
                    }
                }
            }
        };
        ContentModel.prototype.onInput = function () {
            var newValue = this.elm.nativeElement.textContent;
            var maxLength = Number(this.maxLength);
            if (this.maxLength && newValue.length > maxLength) {
                return;
            }
            ++this.recentInputs;
            this.updateValue();
            // Below, caused focus loss blur because the model updates and causes redraw so now we use this.recentInputs
            this.inputChange.emit(this.contentModel);
        };
        ContentModel.prototype.updateValue = function () {
            this.contentModel = this.elm.nativeElement.textContent;
            this.contentModelChange.emit(this.contentModel);
            // only update this onblur and focus
            // this.lastValue = this.contentModel
        };
        ContentModel.prototype.onFocus = function () {
            this.lastValue = this.contentModel;
            this.evalPlaceholder('');
            /* 10-12: moved into keydown check
            this.checkPlaceholder();
            */
        };
        ContentModel.prototype.checkPlaceholder = function () {
            if (this.placeholder && this.elm.nativeElement.textContent === this.placeholder) {
                this.elm.nativeElement.textContent = '';
            }
        };
        ContentModel.prototype.onBlur = function () {
            if (this.lastValue !== this.elm.nativeElement.textContent) {
                this.lastValue = this.elm.nativeElement.textContent; // now update it
                this.updateValue(); // we have to emit here for change otherwise keyboard blur caused during key changes
                this.changeDone.emit(this.contentModel);
            }
            this.evalPlaceholder();
        };
        return ContentModel;
    }());
    ContentModel.decorators = [
        { type: core.Directive, args: [{
                    selector: '[contentModel]'
                },] }
    ];
    ContentModel.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    ContentModel.propDecorators = {
        changeDone: [{ type: core.Output }],
        contentModel: [{ type: core.Input }],
        inputChange: [{ type: core.Output }],
        contentModelChange: [{ type: core.Output }],
        placeholder: [{ type: core.Input }],
        maxLength: [{ type: core.Input }],
        enterEnds: [{ type: core.Input }],
        enter: [{ type: core.Output }],
        onKeyDown: [{ type: core.HostListener, args: ['keydown', ['$event'],] }],
        onInput: [{ type: core.HostListener, args: ['input',] }],
        onFocus: [{ type: core.HostListener, args: ['focus',] }],
        onBlur: [{ type: core.HostListener, args: ['blur',] }]
    };
    function cancelEvent(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    var SelectOn = /** @class */ (function () {
        function SelectOn(element) {
            this.element = element;
            this.selectOnDelay = 0;
            this.selectThen = new core.EventEmitter();
        }
        SelectOn.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes.selectOn && changes.selectOn.currentValue) {
                if (this.selectOnDelay === 0) {
                    Promise.resolve().then(function () { return _this.update(); });
                }
                setTimeout(function () { return _this.update(); }, this.selectOnDelay);
            }
        };
        SelectOn.prototype.update = function () {
            this.element.nativeElement.select();
            this.selectThen.emit();
        };
        return SelectOn;
    }());
    SelectOn.decorators = [
        { type: core.Directive, args: [{
                    selector: '[selectOn]'
                },] }
    ];
    SelectOn.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    SelectOn.propDecorators = {
        selectOn: [{ type: core.Input }],
        selectOnDelay: [{ type: core.Input }],
        selectThen: [{ type: core.Output }]
    };

    var InnerHtmlModel = /** @class */ (function () {
        function InnerHtmlModel(element) {
            var _this = this;
            this.element = element;
            this.innerHtmlModelChange = new core.EventEmitter();
            this.observer = new MutationObserver(function () { return _this.setModel(); });
            var config = {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            };
            this.observer.observe(this.element.nativeElement, config);
            //this.element.nativeElement.addEventListener("mouseup",()=>this.setModel())
            //this.element.nativeElement.addEventListener("keyup",()=>this.setModel())
        }
        InnerHtmlModel.prototype.ngOnChanges = function () {
            var _this = this;
            Promise.resolve().then(function () { return _this.setModel(); });
        };
        InnerHtmlModel.prototype.setModel = function () {
            this.innerHtmlModel = this.element.nativeElement.innerHTML;
            this.innerHtmlModelChange.emit(this.innerHtmlModel);
        };
        InnerHtmlModel.prototype.ngOnDestroy = function () {
            this.observer.disconnect();
        };
        return InnerHtmlModel;
    }());
    InnerHtmlModel.decorators = [
        { type: core.Directive, args: [{
                    selector: '[innerHtmlModel]'
                },] }
    ];
    InnerHtmlModel.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    InnerHtmlModel.propDecorators = {
        innerHtmlModel: [{ type: core.Input }],
        innerHtmlModelChange: [{ type: core.Output }]
    };

    var ReplaceModel = /** @class */ (function () {
        function ReplaceModel() {
            this.replaceModelChange = new core.EventEmitter();
        }
        ReplaceModel.prototype.ngOnChanges = function (changes) {
            var _this = this;
            var isString = changes.replaceModel && this.replaceModel && this.replaceModel.constructor === String;
            if (isString) {
                Promise.resolve().then(function () { return _this.run(); });
            }
        };
        ReplaceModel.prototype.run = function () {
            var rx = new RegExp(this.replaceExpression, 'gi');
            var oldModel = this.replaceModel;
            var newModel = this.replaceModel.replace(rx, '');
            //no change, nothing to do
            if (oldModel === newModel) {
                return;
            }
            this.replaceModel = newModel;
            this.replaceModelChange.emit(this.replaceModel);
        };
        return ReplaceModel;
    }());
    ReplaceModel.decorators = [
        { type: core.Directive, args: [{
                    selector: '[replaceModel]'
                },] }
    ];
    ReplaceModel.propDecorators = {
        replaceModel: [{ type: core.Input }],
        replaceModelChange: [{ type: core.Output }],
        replaceExpression: [{ type: core.Input }]
    };

    var ElementSizeModel = /** @class */ (function () {
        function ElementSizeModel(element) {
            this.element = element;
            this.elementSizeModelChange = new core.EventEmitter();
        }
        ElementSizeModel.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.onResize = function () {
                _this.setModel();
            };
            window.addEventListener('resize', this.onResize);
            Promise.resolve().then(function () { return _this.setModel(); });
            this.observer = new MutationObserver(function () {
                _this.setModel();
            });
            var config = {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            };
            this.observer.observe(this.element.nativeElement, config);
            setTimeout(function () { return _this.setModel(); }, 800);
        };
        ElementSizeModel.prototype.ngOnChanges = function () {
            var _this = this;
            Promise.resolve().then(function () {
                if (!_this.inChange) {
                    _this.setModel();
                }
            });
        };
        ElementSizeModel.prototype.setModel = function () {
            var _this = this;
            this.elementSizeModel = this.elementSizeModel || {};
            this.inChange = true;
            this.elementSizeModel.width = this.element.nativeElement.offsetWidth;
            this.elementSizeModel.height = this.element.nativeElement.offsetHeight;
            this.elementSizeModelChange.emit(this.elementSizeModel);
            Promise.resolve().then(function () {
                _this.inChange = false;
            });
        };
        ElementSizeModel.prototype.ngOnDestroy = function () {
            this.observer.disconnect();
            window.removeEventListener('resize', this.onResize);
        };
        return ElementSizeModel;
    }());
    ElementSizeModel.decorators = [
        { type: core.Directive, args: [{
                    selector: '[elementSizeModel]'
                },] }
    ];
    ElementSizeModel.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    ElementSizeModel.propDecorators = {
        elementSizeModelWatch: [{ type: core.Input }],
        elementSizeModel: [{ type: core.Input }],
        elementSizeModelChange: [{ type: core.Output }]
    };
    var ElementHeightModel = /** @class */ (function (_super) {
        __extends(ElementHeightModel, _super);
        function ElementHeightModel(element) {
            var _this = _super.call(this, element) || this;
            _this.element = element;
            _this.elementHeightModelChange = new core.EventEmitter();
            return _this;
        }
        ElementHeightModel.prototype.setModel = function () {
            this.elementHeightModel = this.element.nativeElement.offsetHeight;
            this.elementHeightModelChange.emit(this.elementHeightModel);
        };
        return ElementHeightModel;
    }(ElementSizeModel));
    ElementHeightModel.decorators = [
        { type: core.Directive, args: [{
                    selector: '[elementHeightModel]'
                },] }
    ];
    ElementHeightModel.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    ElementHeightModel.propDecorators = {
        elementHeightModel: [{ type: core.Input }],
        elementHeightModelChange: [{ type: core.Output }]
    };
    var ElementWidthModel = /** @class */ (function (_super) {
        __extends(ElementWidthModel, _super);
        function ElementWidthModel(element) {
            var _this = _super.call(this, element) || this;
            _this.element = element;
            _this.elementWidthModelChange = new core.EventEmitter();
            return _this;
        }
        ElementWidthModel.prototype.setModel = function () {
            this.elementWidthModel = this.element.nativeElement.offsetWidth;
            this.elementWidthModelChange.emit(this.elementWidthModel);
        };
        return ElementWidthModel;
    }(ElementSizeModel));
    ElementWidthModel.decorators = [
        { type: core.Directive, args: [{
                    selector: '[elementWidthModel]',
                    exportAs: 'ElementWidthModel'
                },] }
    ];
    ElementWidthModel.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    ElementWidthModel.propDecorators = {
        elementWidthModel: [{ type: core.Input }],
        elementWidthModelChange: [{ type: core.Output }]
    };

    var ScreenScrollHeightDiff = /** @class */ (function () {
        function ScreenScrollHeightDiff() {
            var _this = this;
            this.screenScrollHeightDiffChange = new core.EventEmitter();
            this.on = function () {
                _this.apply();
            };
            window.addEventListener("scroll", this.on);
            window.addEventListener("resize", this.on);
        }
        ScreenScrollHeightDiff.prototype.apply = function () {
            this.screenScrollHeightDiff = document.body.scrollHeight - window.innerHeight;
            if (this.screenScrollHeightDiff < 0)
                this.screenScrollHeightDiff = 0;
            this.screenScrollHeightDiffChange.emit(this.screenScrollHeightDiff);
        };
        ScreenScrollHeightDiff.prototype.ngOnDestroy = function () {
            window.removeEventListener("scroll", this.on);
            window.removeEventListener("resize", this.on);
        };
        return ScreenScrollHeightDiff;
    }());
    ScreenScrollHeightDiff.decorators = [
        { type: core.Directive, args: [{
                    selector: '[screenScrollHeightDiff]'
                },] }
    ];
    ScreenScrollHeightDiff.ctorParameters = function () { return []; };
    ScreenScrollHeightDiff.propDecorators = {
        screenScrollHeightDiff: [{ type: core.Input }],
        screenScrollHeightDiffChange: [{ type: core.Output }]
    };

    var ScreenScroll = /** @class */ (function () {
        function ScreenScroll() {
            var _this = this;
            this.screenScroll = new core.EventEmitter();
            this.onScroll = function () { return _this.screenScroll.emit({ x: window['pageXOffset'], y: window['pageYOffset'] }); };
            this.onScroll();
            window.addEventListener("scroll", this.onScroll);
        }
        ScreenScroll.prototype.ngOnInit = function () {
            var _this = this;
            Promise.resolve().then(function () { return _this.onScroll(); }); //two way bind often needs init override
        };
        ScreenScroll.prototype.ngOnDestroy = function () {
            window.removeEventListener("scroll", this.onScroll);
        };
        return ScreenScroll;
    }());
    ScreenScroll.decorators = [
        { type: core.Directive, args: [{
                    selector: '[screenScroll]'
                },] }
    ];
    ScreenScroll.ctorParameters = function () { return []; };
    ScreenScroll.propDecorators = {
        screenScroll: [{ type: core.Output }]
    };

    var PxFromHtmlTop = /** @class */ (function () {
        function PxFromHtmlTop(ElementRef) {
            var _this = this;
            this.ElementRef = ElementRef;
            this.numberChange = new core.EventEmitter();
            this.onScroll = function () {
                _this.setter();
                _this.emit();
            };
            window.addEventListener("resize", this.onScroll);
            window.addEventListener("scroll", this.onScroll);
        }
        PxFromHtmlTop.prototype.emit = function () {
            this.numberChange.emit(this.number);
        };
        PxFromHtmlTop.prototype.ngOnChanges = function () {
            var _this = this;
            Promise.resolve().then(function () {
                _this.setter();
                _this.emit();
            });
            this.delayFire(250);
            this.delayFire(750);
            this.delayFire(1500);
        };
        PxFromHtmlTop.prototype.setter = function () {
            var top = this.ElementRef.nativeElement.getBoundingClientRect().top;
            this.number = top; // || 0
            //this.number = getOffset( this.ElementRef.nativeElement ).top
        };
        PxFromHtmlTop.prototype.ngAfterViewInit = function () {
            this.delayFire();
            this.delayFire(200);
        };
        PxFromHtmlTop.prototype.delayFire = function (num) {
            var _this = this;
            if (num === void 0) { num = 0; }
            setTimeout(function () {
                _this.setter();
                _this.emit();
            }, num);
        };
        PxFromHtmlTop.prototype.ngOnDestroy = function () {
            window.removeEventListener("scroll", this.onScroll);
            window.removeEventListener("resize", this.onScroll);
        };
        return PxFromHtmlTop;
    }());
    PxFromHtmlTop.decorators = [
        { type: core.Directive, args: [{
                    selector: "[pxFromHtmlTop]",
                    exportAs: "PxFromHtmlTop"
                },] }
    ];
    PxFromHtmlTop.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    PxFromHtmlTop.propDecorators = {
        number: [{ type: core.Input, args: ["pxFromHtmlTop",] }],
        numberChange: [{ type: core.Output, args: ["pxFromHtmlTopChange",] }],
        watch: [{ type: core.Input }]
    };
    /*
    export function getOffset( el ) {
        var _x = 0;
        var _y = 0;
        while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
            _x += el.offsetLeft - el.scrollLeft;
            _y += el.offsetTop - el.scrollTop;
            el = el.offsetParent;
        }
        return { top: _y, left: _x };
    }*/

    var ScreenScrollModelY = /** @class */ (function () {
        function ScreenScrollModelY() {
            var _this = this;
            this.screenScrollModelYChange = new core.EventEmitter();
            this.onScroll = function () {
                _this.screenScrollModelY = window['pageYOffset'];
                _this.screenScrollModelYChange.emit(_this.screenScrollModelY);
            };
            this.onScroll();
            window.addEventListener("scroll", this.onScroll);
        }
        ScreenScrollModelY.prototype.ngOnInit = function () {
            var _this = this;
            Promise.resolve().then(function () { return _this.onScroll(); }); //two way bind often needs init override
        };
        ScreenScrollModelY.prototype.ngOnDestroy = function () {
            window.removeEventListener("scroll", this.onScroll);
        };
        return ScreenScrollModelY;
    }());
    ScreenScrollModelY.decorators = [
        { type: core.Directive, args: [{
                    selector: '[screenScrollModelY]',
                    exportAs: 'ScreenScrollModelY'
                },] }
    ];
    ScreenScrollModelY.ctorParameters = function () { return []; };
    ScreenScrollModelY.propDecorators = {
        screenScrollModelY: [{ type: core.Input }],
        screenScrollModelYChange: [{ type: core.Output }]
    };

    var ScreenWidthModel = /** @class */ (function () {
        function ScreenWidthModel(HtmlSizeService) {
            var _this = this;
            this.HtmlSizeService = HtmlSizeService;
            this.screenWidthModelChange = new core.EventEmitter();
            this.sub = this.HtmlSizeService.change.subscribe(function () { return _this.changed(); });
            this.HtmlSizeService.checkWatchers();
            if (this.HtmlSizeService.htmlSize) {
                this.changed();
            }
        }
        ScreenWidthModel.prototype.changed = function () {
            if (!this.HtmlSizeService.htmlSize
                || !this.hasChanged())
                return;
            this.updateModel();
        };
        ScreenWidthModel.prototype.hasChanged = function () {
            return this.screenWidthModel !== window.innerWidth;
        };
        ScreenWidthModel.prototype.updateModel = function () {
            this.screenWidthModel = window.innerWidth;
            this.screenWidthModelChange.emit(this.screenWidthModel);
        };
        return ScreenWidthModel;
    }());
    ScreenWidthModel.decorators = [
        { type: core.Directive, args: [{
                    selector: '[screenWidthModel]'
                },] }
    ];
    ScreenWidthModel.ctorParameters = function () { return [
        { type: 
            //htmlSize,
            HtmlSizeService }
    ]; };
    ScreenWidthModel.propDecorators = {
        screenWidthModel: [{ type: core.Input }],
        screenWidthModelChange: [{ type: core.Output }]
    };

    var ScreenHeightModel = /** @class */ (function () {
        function ScreenHeightModel(HtmlSizeService) {
            var _this = this;
            this.HtmlSizeService = HtmlSizeService;
            this.modelChange = new core.EventEmitter();
            this.sub = this.HtmlSizeService.change.subscribe(function () { return _this.changed(); });
            this.HtmlSizeService.checkWatchers();
        }
        ScreenHeightModel.prototype.ngAfterViewInit = function () {
            var _this = this;
            Promise.resolve().then(function () { return _this.updateModel(); });
            this.delayCheck(250);
            this.delayCheck(1500);
        };
        ScreenHeightModel.prototype.delayCheck = function (num) {
            var _this = this;
            if (num === void 0) { num = 0; }
            setTimeout(function () { return _this.updateModel(); }, num); //two way bind often needs init override
        };
        ScreenHeightModel.prototype.changed = function () {
            if (!this.HtmlSizeService.htmlSize || !this.hasChanged())
                return;
            this.updateModel();
        };
        ScreenHeightModel.prototype.hasChanged = function () {
            return this.model !== window.innerHeight;
        };
        ScreenHeightModel.prototype.updateModel = function () {
            this.model = window.innerHeight;
            this.modelChange.emit(this.model);
        };
        return ScreenHeightModel;
    }());
    ScreenHeightModel.decorators = [
        { type: core.Directive, args: [{
                    selector: '[screenHeightModel]',
                    exportAs: 'ScreenHeightModel'
                },] }
    ];
    ScreenHeightModel.ctorParameters = function () { return [
        { type: 
            //htmlSize,
            HtmlSizeService }
    ]; };
    ScreenHeightModel.propDecorators = {
        model: [{ type: core.Input, args: ['screenHeightModel',] }],
        modelChange: [{ type: core.Output, args: ['screenHeightModelChange',] }]
    };

    var HtmlWidthModel = /** @class */ (function () {
        function HtmlWidthModel(HtmlSizeService) {
            var _this = this;
            this.HtmlSizeService = HtmlSizeService;
            this.htmlWidthModelChange = new core.EventEmitter();
            this.sub = this.HtmlSizeService.change.subscribe(function () { return _this.changed(); });
            this.HtmlSizeService.checkWatchers();
            /*if( this.HtmlSizeService.htmlSize ){
              this.changed()
            }*/
        }
        HtmlWidthModel.prototype.ngAfterViewInit = function () {
            var _this = this;
            Promise.resolve().then(function () { return _this.changed(); }); //two way bind often needs init override
        };
        HtmlWidthModel.prototype.ngOnDestroy = function () {
            this.sub.unsubscribe();
            this.HtmlSizeService.checkWatchers();
        };
        HtmlWidthModel.prototype.changed = function () {
            if (!this.HtmlSizeService.htmlSize || !this.hasChanged())
                return;
            this.setModel(this.HtmlSizeService.htmlSize);
        };
        HtmlWidthModel.prototype.hasChanged = function () {
            return this.htmlWidthModel !== window.document.documentElement.clientWidth;
        };
        HtmlWidthModel.prototype.setModel = function (htmlSize) {
            this.htmlWidthModel = htmlSize.width;
            this.htmlWidthModelChange.emit(this.htmlWidthModel);
        };
        return HtmlWidthModel;
    }());
    HtmlWidthModel.decorators = [
        { type: core.Directive, args: [{
                    selector: '[htmlWidthModel]'
                },] }
    ];
    HtmlWidthModel.ctorParameters = function () { return [
        { type: HtmlSizeService }
    ]; };
    HtmlWidthModel.propDecorators = {
        htmlWidthModel: [{ type: core.Input }],
        htmlWidthModelChange: [{ type: core.Output }]
    };

    var HtmlHeightModel = /** @class */ (function (_super) {
        __extends(HtmlHeightModel, _super);
        function HtmlHeightModel(HtmlSizeService) {
            var _this = _super.call(this, HtmlSizeService) || this;
            _this.HtmlSizeService = HtmlSizeService;
            _this.htmlHeightModelChange = new core.EventEmitter();
            return _this;
        }
        HtmlHeightModel.prototype.hasChanged = function () {
            return this.htmlHeightModel !== window.document.documentElement.clientHeight;
        };
        HtmlHeightModel.prototype.setModel = function (model) {
            this.htmlHeightModel = model.height;
            this.htmlHeightModelChange.emit(this.htmlHeightModel);
        };
        return HtmlHeightModel;
    }(HtmlWidthModel));
    HtmlHeightModel.decorators = [
        { type: core.Directive, args: [{
                    selector: '[htmlHeightModel]'
                },] }
    ];
    HtmlHeightModel.ctorParameters = function () { return [
        { type: HtmlSizeService }
    ]; };
    HtmlHeightModel.propDecorators = {
        htmlHeightModel: [{ type: core.Input }],
        htmlHeightModelChange: [{ type: core.Output }]
    };

    var StatusOnlineModel = /** @class */ (function () {
        function StatusOnlineModel() {
            var _this = this;
            this.statusOnlineModelChange = new core.EventEmitter();
            this.onChange = function () {
                _this.statusOnlineModel = navigator.onLine;
                _this.statusOnlineModelChange.emit(_this.statusOnlineModel);
            };
            window.addEventListener("online", this.onChange);
            window.addEventListener("offline", this.onChange);
            Promise.resolve().then(function () { return _this.onChange(); });
        }
        StatusOnlineModel.prototype.ngOnDestroy = function () {
            window.removeEventListener("online", this.onChange);
            window.removeEventListener("offline", this.onChange);
        };
        return StatusOnlineModel;
    }());
    StatusOnlineModel.decorators = [
        { type: core.Directive, args: [{ selector: '[statusOnlineModel]' },] }
    ];
    StatusOnlineModel.ctorParameters = function () { return []; };
    StatusOnlineModel.propDecorators = {
        statusOnlineModel: [{ type: core.Input }],
        statusOnlineModelChange: [{ type: core.Output }]
    };

    var StatusOfflineModel = /** @class */ (function () {
        function StatusOfflineModel() {
            var _this = this;
            this.statusOfflineModelChange = new core.EventEmitter();
            this.onChange = function () {
                _this.statusOfflineModel = !navigator.onLine;
                _this.statusOfflineModelChange.emit(_this.statusOfflineModel);
            };
            window.addEventListener("offline", this.onChange);
            window.addEventListener("online", this.onChange);
            Promise.resolve().then(function () { return _this.onChange(); });
        }
        StatusOfflineModel.prototype.ngOnDestroy = function () {
            window.removeEventListener("offline", this.onChange);
            window.removeEventListener("online", this.onChange);
        };
        return StatusOfflineModel;
    }());
    StatusOfflineModel.decorators = [
        { type: core.Directive, args: [{ selector: '[statusOfflineModel]' },] }
    ];
    StatusOfflineModel.ctorParameters = function () { return []; };
    StatusOfflineModel.propDecorators = {
        statusOfflineModel: [{ type: core.Input }],
        statusOfflineModelChange: [{ type: core.Output }]
    };

    var VarDirective = /** @class */ (function () {
        function VarDirective() {
            this.changed = new core.EventEmitter();
        }
        VarDirective.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes.var) {
                Promise.resolve().then(function () { return _this.changed.emit(_this.var); });
            }
        };
        return VarDirective;
    }());
    VarDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: "[var]",
                    exportAs: "var"
                },] }
    ];
    VarDirective.propDecorators = {
        var: [{ type: core.Input }],
        changed: [{ type: core.Output }]
    };

    var EnterKey = /** @class */ (function () {
        function EnterKey(element) {
            var _this = this;
            this.element = element;
            this.enterKey = new core.EventEmitter();
            element.nativeElement.addEventListener('keydown', function (event) {
                var yesNo = [13, 10].indexOf(event.which || event.keyCode) >= 0;
                if (yesNo) {
                    _this.enterKey.emit(event);
                }
            });
        }
        return EnterKey;
    }());
    EnterKey.decorators = [
        { type: core.Directive, args: [{ selector: '[enterKey]' },] }
    ];
    EnterKey.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    EnterKey.propDecorators = {
        enterKey: [{ type: core.Output }]
    };
    var EscapeKey = /** @class */ (function () {
        function EscapeKey(element) {
            var _this = this;
            this.element = element;
            this.escapeKey = new core.EventEmitter();
            element.nativeElement.addEventListener('keydown', function (event) {
                var code = event.which || event.keyCode;
                if (code == 27) {
                    _this.escapeKey.emit(event);
                }
            });
        }
        return EscapeKey;
    }());
    EscapeKey.decorators = [
        { type: core.Directive, args: [{ selector: '[escapeKey]' },] }
    ];
    EscapeKey.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    EscapeKey.propDecorators = {
        escapeKey: [{ type: core.Output }]
    };
    /** Disallow keyboard access to the backspace key */
    var PreventBackKey = /** @class */ (function () {
        function PreventBackKey(element) {
            var _this = this;
            this.element = element;
            this.preventBackKey = new core.EventEmitter();
            element.nativeElement.addEventListener('keydown', function (event) {
                var yesNo = [8].indexOf(event.which || event.keyCode) < 0;
                if (!yesNo) {
                    _this.preventBackKey.emit(event);
                    if (event.preventDefault) {
                        event.preventDefault();
                    }
                }
                return yesNo;
            });
        }
        return PreventBackKey;
    }());
    PreventBackKey.decorators = [
        { type: core.Directive, args: [{ selector: '[preventBackKey]' },] }
    ];
    PreventBackKey.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    PreventBackKey.propDecorators = {
        preventBackKey: [{ type: core.Output }]
    };
    /** Disallow keyboard access to the enter keys */
    var PreventEnterKey = /** @class */ (function () {
        function PreventEnterKey(element) {
            var _this = this;
            this.element = element;
            this.preventEnterKey = new core.EventEmitter();
            element.nativeElement.addEventListener('keydown', function (event) {
                var yesNo = [13, 10].indexOf(event.which || event.keyCode) < 0;
                if (!yesNo) {
                    _this.preventEnterKey.emit(event);
                    if (event.preventDefault) {
                        event.preventDefault();
                    }
                }
                return yesNo;
            });
        }
        return PreventEnterKey;
    }());
    PreventEnterKey.decorators = [
        { type: core.Directive, args: [{ selector: '[preventEnterKey]' },] }
    ];
    PreventEnterKey.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    PreventEnterKey.propDecorators = {
        preventEnterKey: [{ type: core.Output }]
    };
    var InputHint = /** @class */ (function () {
        function InputHint() {
            this.hintStyle = { 'font-size': '75%', 'color': '#BBB' };
        }
        return InputHint;
    }());
    InputHint.decorators = [
        { type: core.Component, args: [{
                    selector: 'input-hint',
                    template: '<div style="position:relative;" [ngStyle]="hintStyle"><div style="position:absolute;top:0;width:100%"><ng-content></ng-content></div></div>'
                },] }
    ];
    InputHint.propDecorators = {
        hintStyle: [{ type: core.Input }]
    };
    /** adds form element onchange listener via addEventListener('change') that calls formChanged scope argument */
    var FormChanged = /** @class */ (function () {
        function FormChanged(element) {
            var _this = this;
            this.element = element;
            this.formChanged = new core.EventEmitter();
            this.onChange = function (event) {
                _this.formChanged.emit(event);
            };
            element.nativeElement.addEventListener('change', this.onChange);
        }
        FormChanged.prototype.ngOnDestroy = function () {
            this.element.nativeElement.removeEventListener('change', this.onChange);
        };
        return FormChanged;
    }());
    FormChanged.decorators = [
        { type: core.Directive, args: [{
                    selector: '[formChanged]' //Also try : (formAlter) directive that watches the form "input" event
                },] }
    ];
    FormChanged.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    FormChanged.propDecorators = {
        formChanged: [{ type: core.Output }]
    };
    /** when ever change or input form event triggered, bindings are called */
    var FormAlter = /** @class */ (function () {
        function FormAlter(element) {
            var _this = this;
            this.element = element;
            this.formAlter = new core.EventEmitter();
            this.onChange = function (event) {
                _this.formAlter.emit(event);
            };
            element.nativeElement.addEventListener('input', this.onChange);
            element.nativeElement.addEventListener('change', this.onChange);
        }
        FormAlter.prototype.ngOnDestroy = function () {
            this.element.nativeElement.removeEventListener('change', this.onChange);
            this.element.nativeElement.removeEventListener('input', this.onChange);
        };
        return FormAlter;
    }());
    FormAlter.decorators = [
        { type: core.Directive, args: [{
                    selector: '[formAlter]'
                },] }
    ];
    FormAlter.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    FormAlter.propDecorators = {
        formAlter: [{ type: core.Output }]
    };

    var screenDirectives = [
        ScreenScrollModelY,
        ScreenWidthModel,
        ScreenHeightModel,
        ScreenScroll,
        ScrollPastFixed,
        ScreenScrollHeightDiff,
        PxFromHtmlTop
    ];
    var declarations$1 = __spread([
        InitDirective,
        SelectOn,
        FocusOn,
        VarDirective,
        ContentModel,
        InnerHtmlModel,
        ReplaceModel,
        FormAlter,
        FormChanged,
        EnterKey,
        EscapeKey,
        PreventBackKey,
        PreventEnterKey
    ], screenDirectives, [
        HtmlWidthModel,
        HtmlHeightModel,
        ShakeOn,
        FxOn,
        StatusOnlineModel,
        StatusOfflineModel,
        ElementSizeModel,
        ElementWidthModel,
        ElementHeightModel,
        InputHint
    ], declarations, [
        ErrorWell,
        AbsoluteOverflowX,
        //sorta ack-angular-templates
        ReaderHeaderBody,
        ReaderHeader,
        ReaderBody,
        //ack-angular-templates
        AckCloseIcon,
        AckSections,
        AckSectionTemplates,
        AckOptions,
        AckOptionsModal,
        AckModal,
        AckModalLayout,
        AckArray,
        AckAggregate,
        AckFixedElement,
        AckFixedElementStage
    ]);
    // export default declarations

    /* ONLY THIS FILE */
    var IndexTrack = /** @class */ (function () {
        function IndexTrack() {
        }
        IndexTrack.prototype.transform = function () {
            return function (index) { return index; };
        };
        return IndexTrack;
    }());
    IndexTrack.decorators = [
        { type: core.Pipe, args: [{ name: 'indexTrack' },] }
    ];
    var Stringify = /** @class */ (function () {
        function Stringify() {
        }
        Stringify.prototype.transform = function (input, spaces) {
            return JSON.stringify(input, null, spaces);
        };
        return Stringify;
    }());
    Stringify.decorators = [
        { type: core.Pipe, args: [{ name: 'stringify' },] }
    ];
    var ForceArray = /** @class */ (function () {
        function ForceArray() {
        }
        ForceArray.prototype.transform = function (input, repeat, repeatValue) {
            return array(input, repeat, repeatValue);
        };
        return ForceArray;
    }());
    ForceArray.decorators = [
        { type: core.Pipe, args: [{ name: 'array' },] }
    ];
    var ArrayOfObjects = /** @class */ (function () {
        function ArrayOfObjects() {
        }
        ArrayOfObjects.prototype.transform = function (input, repeat, repeatValue) {
            return arrayOfObjects(input, repeat, repeatValue);
        };
        return ArrayOfObjects;
    }());
    ArrayOfObjects.decorators = [
        { type: core.Pipe, args: [{ name: 'arrayOfObjects' },] }
    ];
    var SafeUrl = /** @class */ (function () {
        function SafeUrl(domSanitizer) {
            this.domSanitizer = domSanitizer;
        }
        SafeUrl.prototype.transform = function (input) {
            return this.domSanitizer.bypassSecurityTrustResourceUrl(input);
        };
        return SafeUrl;
    }());
    SafeUrl.decorators = [
        { type: core.Pipe, args: [{ name: 'safeUrl' },] }
    ];
    SafeUrl.ctorParameters = function () { return [
        { type: 
            //SafeHtml as SafeHtmler,//must be exported for AOT
            //SafeStyle as SafeStyler,//must be exported for AOT
            //SafeResourceUrl,
            platformBrowser.DomSanitizer }
    ]; };
    var NumberWord = /** @class */ (function () {
        function NumberWord() {
        }
        NumberWord.prototype.transform = function (input, number) {
            return input + (number && number == 1 ? '' : 's');
        };
        return NumberWord;
    }());
    NumberWord.decorators = [
        { type: core.Pipe, args: [{ name: 'numberWord' },] }
    ];
    NumberWord.ctorParameters = function () { return []; };
    var EndNumberWord = /** @class */ (function () {
        function EndNumberWord() {
        }
        EndNumberWord.prototype.transform = function (input) {
            return input && input == 1 ? '' : 's';
        };
        return EndNumberWord;
    }());
    EndNumberWord.decorators = [
        { type: core.Pipe, args: [{ name: 'endNumberWord' },] }
    ];
    EndNumberWord.ctorParameters = function () { return []; };
    var SafeHtml = /** @class */ (function () {
        function SafeHtml(domSanitizer) {
            this.domSanitizer = domSanitizer;
        }
        SafeHtml.prototype.transform = function (input) {
            return this.domSanitizer.bypassSecurityTrustHtml(input);
        };
        return SafeHtml;
    }());
    SafeHtml.decorators = [
        { type: core.Pipe, args: [{ name: 'safeHtml' },] }
    ];
    SafeHtml.ctorParameters = function () { return [
        { type: 
            //SafeHtml as SafeHtmler,//must be exported for AOT
            //SafeStyle as SafeStyler,//must be exported for AOT
            //SafeResourceUrl,
            platformBrowser.DomSanitizer }
    ]; };
    var SafeStyle = /** @class */ (function () {
        function SafeStyle(domSanitizer) {
            this.domSanitizer = domSanitizer;
        }
        SafeStyle.prototype.transform = function (input) {
            return this.domSanitizer.bypassSecurityTrustStyle(input);
        };
        return SafeStyle;
    }());
    SafeStyle.decorators = [
        { type: core.Pipe, args: [{ name: 'safeStyle' },] }
    ];
    SafeStyle.ctorParameters = function () { return [
        { type: 
            //SafeHtml as SafeHtmler,//must be exported for AOT
            //SafeStyle as SafeStyler,//must be exported for AOT
            //SafeResourceUrl,
            platformBrowser.DomSanitizer }
    ]; };
    /* end: only this file */
    /** (input>=a && input<=b) || (input>=b && input<=a) */
    var Between = /** @class */ (function () {
        function Between() {
        }
        Between.prototype.transform = function (input, a, b) {
            return between(input, a, b);
        };
        return Between;
    }());
    Between.decorators = [
        { type: core.Pipe, args: [{ name: 'between' },] }
    ];
    var ReplaceMaxLength = /** @class */ (function () {
        function ReplaceMaxLength() {
        }
        ReplaceMaxLength.prototype.transform = function (input, max, replacement) {
            return replaceMaxLength(input, max, replacement);
        };
        return ReplaceMaxLength;
    }());
    ReplaceMaxLength.decorators = [
        { type: core.Pipe, args: [{ name: 'replaceMaxLength' },] }
    ];
    /** use with bypassSecurityTrustResourceUrl for href */
    var TextDownload = /** @class */ (function () {
        function TextDownload() {
        }
        TextDownload.prototype.transform = function (input) { return textDownload(input); };
        return TextDownload;
    }());
    TextDownload.decorators = [
        { type: core.Pipe, args: [{ name: 'textDownload' },] }
    ];
    var NumberToPhone = /** @class */ (function () {
        function NumberToPhone() {
        }
        NumberToPhone.prototype.transform = function (input) { return numberToPhone(input); };
        return NumberToPhone;
    }());
    NumberToPhone.decorators = [
        { type: core.Pipe, args: [{ name: 'numberToPhone' },] }
    ];
    var toNumber$1 = /** @class */ (function () {
        function toNumber$1() {
        }
        toNumber$1.prototype.transform = function (input) { return toNumber(input); };
        return toNumber$1;
    }());
    toNumber$1.decorators = [
        { type: core.Pipe, args: [{ name: 'toNumber' },] }
    ];
    var NumberSuffix = /** @class */ (function () {
        function NumberSuffix() {
        }
        NumberSuffix.prototype.transform = function (input, rtnInput) { return numberSuffix(input, rtnInput); };
        return NumberSuffix;
    }());
    NumberSuffix.decorators = [
        { type: core.Pipe, args: [{ name: 'numberSuffix' },] }
    ];
    var MarkdownAnchor = /** @class */ (function () {
        function MarkdownAnchor() {
        }
        MarkdownAnchor.prototype.transform = function (input) { return markdownAnchor(input); };
        return MarkdownAnchor;
    }());
    MarkdownAnchor.decorators = [
        { type: core.Pipe, args: [{ name: 'markdownAnchor' },] }
    ];
    var Capitalize = /** @class */ (function () {
        function Capitalize() {
        }
        Capitalize.prototype.transform = function (input) { return capitalize(input); };
        return Capitalize;
    }());
    Capitalize.decorators = [
        { type: core.Pipe, args: [{ name: 'capitalize' },] }
    ];
    var CapitalizeWords = /** @class */ (function () {
        function CapitalizeWords() {
        }
        CapitalizeWords.prototype.transform = function (input) { return capitalizeWords(input); };
        return CapitalizeWords;
    }());
    CapitalizeWords.decorators = [
        { type: core.Pipe, args: [{ name: 'capitalizeWords' },] }
    ];
    var Yesno = /** @class */ (function () {
        function Yesno() {
        }
        Yesno.prototype.transform = function (input) { return yesno(input); };
        return Yesno;
    }());
    Yesno.decorators = [
        { type: core.Pipe, args: [{ name: 'yesno' },] }
    ];
    var YesNo = /** @class */ (function () {
        function YesNo() {
        }
        YesNo.prototype.transform = function (input) { return yesNo(input); };
        return YesNo;
    }());
    YesNo.decorators = [
        { type: core.Pipe, args: [{ name: 'YesNo' },] }
    ];
    var BooleanPipe = /** @class */ (function () {
        function BooleanPipe() {
        }
        BooleanPipe.prototype.transform = function (input) { return boolean(input); };
        return BooleanPipe;
    }());
    BooleanPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'boolean' },] }
    ];
    var Bit = /** @class */ (function () {
        function Bit() {
        }
        Bit.prototype.transform = function (input) { return bit(input); };
        return Bit;
    }());
    Bit.decorators = [
        { type: core.Pipe, args: [{ name: 'bit' },] }
    ];
    //get and return all numbers inside a string
    var Numbers = /** @class */ (function () {
        function Numbers() {
        }
        Numbers.prototype.transform = function (input) { return numbers(input); };
        return Numbers;
    }());
    Numbers.decorators = [
        { type: core.Pipe, args: [{ name: 'numbers' },] }
    ];
    var ADate = /** @class */ (function () {
        function ADate() {
        }
        ADate.prototype.transform = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return aDate.apply(aDate, args);
        };
        return ADate;
    }());
    ADate.decorators = [
        { type: core.Pipe, args: [{ name: 'aDate' },] }
    ];
    var AMath = /** @class */ (function () {
        function AMath() {
        }
        AMath.prototype.transform = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return aMath.apply(aMath, args);
        };
        return AMath;
    }());
    AMath.decorators = [
        { type: core.Pipe, args: [{ name: 'aMath' },] }
    ];
    var AString = /** @class */ (function () {
        function AString() {
        }
        AString.prototype.transform = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return aString.apply(aString, args);
        };
        return AString;
    }());
    AString.decorators = [
        { type: core.Pipe, args: [{ name: 'aString' },] }
    ];
    var ATime = /** @class */ (function () {
        function ATime() {
        }
        ATime.prototype.transform = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return aTime.apply(aTime, args);
        };
        return ATime;
    }());
    ATime.decorators = [
        { type: core.Pipe, args: [{ name: 'aTime' },] }
    ];
    var Ack = /** @class */ (function () {
        function Ack() {
        }
        Ack.prototype.transform = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return ack.apply(ack, args);
        };
        return Ack;
    }());
    Ack.decorators = [
        { type: core.Pipe, args: [{ name: 'ack' },] }
    ];
    var Keys = /** @class */ (function () {
        function Keys() {
        }
        Keys.prototype.transform = function (input) {
            var type = typeof (input) == 'object';
            var isOb = input && type;
            var isArray = isOb && input.constructor == Array;
            if (isArray) {
                return input.map(function (_value, index) { return index; });
            }
            return input ? Object.keys(input) : [];
        };
        return Keys;
    }());
    Keys.decorators = [
        { type: core.Pipe, args: [{ name: 'keys' },] }
    ];
    var TypeofPipe = /** @class */ (function () {
        function TypeofPipe() {
        }
        TypeofPipe.prototype.transform = function (input) { return typeof (input); };
        return TypeofPipe;
    }());
    TypeofPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'typeof' },] }
    ];
    var ConsolePipe = /** @class */ (function () {
        function ConsolePipe() {
        }
        ConsolePipe.prototype.transform = function () {
            return console.log.apply(console, arguments);
        };
        return ConsolePipe;
    }());
    ConsolePipe.decorators = [
        { type: core.Pipe, args: [{ name: 'console' },] }
    ];
    var declarations$2 = [
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
        toNumber$1,
        NumberToPhone,
        NumberSuffix,
        Bit,
        NumberWord,
        EndNumberWord,
        BooleanPipe,
        Between,
        ReplaceMaxLength,
    ];

    var declarations$3 = __spread(declarations$1, declarations$2);
    var AckModule = /** @class */ (function () {
        function AckModule() {
        }
        AckModule.forRoot = function () {
            return {
                ngModule: AckModule,
                providers: providers,
            };
        };
        return AckModule;
    }());
    AckModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: declarations$3, providers: providers,
                    exports: declarations$3
                },] }
    ];
    // export default AckModule

    //import { StateService,TransitionService,Transition } from "ui-router-ng2";
    /** A stateful connection to ui-router history
     - .stateChange() with arguments MUST be called at every state change
     - Has 99% accuracy of knowing if OS back or forward button has been used
       - Their is no web event for knowing if OS button is used.
    */
    var RouteWatchReporter = /** @class */ (function () {
        function RouteWatchReporter(router$1, activatedRoute) {
            var _this = this;
            this.router = router$1;
            this.activatedRoute = activatedRoute;
            this.current = {};
            this.$history = [];
            //$window  : any
            this.historyPos = 0;
            this.isBackMode = false;
            this.isOsAction = false;
            this.isNextBackMode = false;
            this.isNextBackHistory = false;
            this.activatedRoute = activatedRoute;
            router$1.events.subscribe(function (event) {
                if (event.constructor == router.NavigationEnd) {
                    //const params = {}//COMING REALLY SOON
                    var current = _this.getCurrent();
                    _this.recordStateChange(current.config, current.params);
                }
            });
            this.current = this.getCurrent();
        }
        RouteWatchReporter.prototype.$window = function () {
            return window;
        };
        RouteWatchReporter.prototype.getCurrent = function () {
            return getCurrentByActive(this.activatedRoute);
        };
        RouteWatchReporter.prototype.getCurrentConfig = function () {
            var target = this.activatedRoute;
            while (target.firstChild)
                target = target.firstChild;
            return (target.routeConfig || target["config"] || target);
        };
        RouteWatchReporter.prototype.getCurrentParams = function () {
            var target = this.activatedRoute;
            while (target.firstChild)
                target = target.firstChild;
            return target.snapshot.params;
        };
        RouteWatchReporter.prototype.isTrapHistory = function (toState, toParams) {
            return this.isBackHistory(toState, toParams) && this.isForwardHistory(toState, toParams);
        };
        RouteWatchReporter.prototype.isBackHistory = function (toState, toParams) {
            var $history = this.$history;
            var isEven = $history.length > this.historyPos + 1;
            var isNameMatch = isEven && toState && toState.name == $history[this.historyPos + 1].name;
            return isNameMatch && this.isParamsMatch(toParams, $history[this.historyPos + 1].params);
        };
        RouteWatchReporter.prototype.isForwardHistory = function (toState, toParams) {
            var $history = this.$history;
            var isEven = !this.isNextBackMode && this.historyPos && $history.length > this.historyPos;
            var isNameMatch = isEven && toState && toState.name == $history[this.historyPos - 1].name;
            return isNameMatch && this.isParamsMatch(toParams, $history[this.historyPos - 1].params);
        };
        RouteWatchReporter.prototype.isParamsMatch = function (toParams, otherParams) {
            if (!toParams || !otherParams) {
                return false;
            }
            for (var x in toParams) {
                if (toParams[x] != otherParams[x]) {
                    return false;
                }
            }
            return true;
        };
        RouteWatchReporter.prototype.recordStateChange = function (toState, toParams) {
            this.current = { params: toParams, config: toState };
            var isForward = this.isForwardHistory(toState, toParams);
            var isBackHistory = this.isNextBackHistory || this.isBackHistory(toState, toParams);
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
            var $history = this.$history;
            if (!toState)
                return;
            if (isForward) {
                --this.historyPos;
            }
            else if (this.isBackMode) {
                ++this.historyPos;
            }
            else {
                //const $state = this.$state()
                this.historyPos = 0;
                var hist = { name: toState.name, params: toParams };
                if (!Object.keys(toParams).length) {
                    delete hist.params;
                }
                $history.unshift(hist);
            }
            this.isNextBackHistory = false;
        };
        RouteWatchReporter.prototype.goBackTo = function (name, params) {
            this.isNextBackMode = true;
            this.isNextBackHistory = true;
            this.$state().go(name, params);
        };
        RouteWatchReporter.prototype.tryBack = function (name, params) {
            if (this.$history.length) {
                this.isNextBackMode = true;
                this.isNextBackHistory = true;
                this.$window().history.back();
            }
            else {
                this.goBackTo(name, params);
            }
        };
        RouteWatchReporter.prototype.watchDocument = function ($document) {
            this.watchDocByCallbacks($document, this.getDocumentCallbacks());
        };
        RouteWatchReporter.prototype.getDocumentCallbacks = function () {
            var _this = this;
            var isBackButton = function () {
                _this.isOsAction = true;
            };
            var isNotBackButton = function () {
                _this.isOsAction = false;
            };
            return {
                isBackButton: isBackButton,
                isNotBackButton: isNotBackButton
            };
        };
        RouteWatchReporter.prototype.watchDocByCallbacks = function ($document, callbacks) {
            $document.addEventListener('mouseout', callbacks.isBackButton);
            //$document.addEventListener('mouseover', callbacks.mouseover)
            $document.addEventListener('mousedown', callbacks.isNotBackButton);
        };
        RouteWatchReporter.prototype.unwatchDocByCallbacks = function ($document, callbacks) {
            $document.removeEventListener('mouseout', callbacks.isBackButton);
            $document.removeEventListener('mouseover', callbacks.isNotBackButton);
            $document.removeEventListener('mousedown', callbacks.isNotBackButton);
        };
        return RouteWatchReporter;
    }());
    RouteWatchReporter.decorators = [
        { type: core.Injectable }
    ];
    RouteWatchReporter.ctorParameters = function () { return [
        { type: router.Router },
        { type: router.ActivatedRoute }
    ]; };
    function getCurrentByActive(ActivatedRoute) {
        var parent = ActivatedRoute;
        var target = ActivatedRoute;
        while (target.firstChild) {
            parent = target;
            target = target.firstChild;
        }
        var snapshot = target.snapshot || {};
        var parentSnap = parent.snapshot || {};
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

    var RouteHistory = /** @class */ (function () {
        function RouteHistory(Router) {
            this.Router = Router;
            this.routeHistory = [];
            this.maxHistory = 10;
            this.historyIndex = 0;
            this.subs = [];
            this.monitor();
        }
        RouteHistory.prototype.monitor = function () {
            var _this = this;
            this.subs.push(this.Router.events.subscribe(function (event) {
                if (event.constructor === router.NavigationEnd) {
                    _this.addRouteToHistory();
                }
            }));
        };
        RouteHistory.prototype.ngOnDestroy = function () {
            this.subs.forEach(function (sub) { return sub.unsubscribe(); });
        };
        RouteHistory.prototype.addRouteToHistory = function () {
            var priorPage = this.historyIndex + 1;
            var nextPage = this.historyIndex - 1;
            var matchesBack = this.routeHistory.length >= priorPage && this.Router.url === this.routeHistory[priorPage];
            var matchesNext = this.routeHistory.length >= nextPage && this.Router.url === this.routeHistory[nextPage];
            var matchesCurrent = this.Router.url === this.routeHistory[this.historyIndex];
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
            //remove old entries
            while (this.routeHistory.length > this.maxHistory) {
                //this.routeHistory.shift()
                this.routeHistory.pop();
            }
            //this.routeHistory.push(this.Router.url)
            this.routeHistory.splice(this.historyIndex, 0, this.Router.url);
            this.applyNav();
        };
        RouteHistory.prototype.applyNav = function () {
            var posAvail = this.historyIndex < this.routeHistory.length - 1;
            if (posAvail) {
                this.back = this.routeHistory[this.historyIndex + 1];
            }
            else if (this.routeHistory.length) {
                var newBack = this.routeHistory[this.routeHistory.length - 1].split("/");
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
        };
        RouteHistory.prototype.goBack = function () {
            if (this.historyIndex === this.routeHistory.length - 1)
                return;
            //++this.historyIndex
            var rh = this.routeHistory[this.historyIndex + 1];
            this.Router.navigate([rh]);
        };
        RouteHistory.prototype.goForward = function () {
            if (this.historyIndex === 0)
                return;
            //--this.historyIndex
            var rh = this.routeHistory[this.historyIndex - 1];
            this.Router.navigate([rh]);
        };
        return RouteHistory;
    }());
    RouteHistory.decorators = [
        { type: core.Injectable }
    ];
    RouteHistory.ctorParameters = function () { return [
        { type: router.Router }
    ]; };

    var RouteReporter = /** @class */ (function () {
        function RouteReporter(Router, RouteWatchReporter, ActivatedRoute) {
            this.Router = Router;
            this.RouteWatchReporter = RouteWatchReporter;
            this.ActivatedRoute = ActivatedRoute;
            this.stateChanger = new core.EventEmitter();
            this.beforeChanger = new core.EventEmitter();
            this.activatedChange = new core.EventEmitter();
            this.paramsChange = new core.EventEmitter();
            this.dataChange = new core.EventEmitter();
            this.queryChange = new core.EventEmitter();
            this.routeChange = new core.EventEmitter();
            this.parentRouteChange = new core.EventEmitter();
            this.parentChange = new core.EventEmitter();
            this.parentDataChange = new core.EventEmitter();
            this.stateChange = new core.EventEmitter();
            this.$document = document;
            this.apply();
        }
        RouteReporter.prototype.ngOnInit = function () {
            var _this = this;
            this.docCallbacks = this.RouteWatchReporter.getDocumentCallbacks();
            this.RouteWatchReporter.router.events.subscribe(function (event) {
                //if(event.constructor == NavigationStart){}
                if (event.constructor === router.NavigationEnd) {
                    _this.beforeChanger.emit(_this.RouteWatchReporter);
                    //allow one process to occur before reporting state has changed
                    _this.apply();
                    //this.addRouteToHistory()
                    Promise.resolve().then(function () { return _this.emit(); });
                }
            });
            if (this.ActivatedRoute) {
                this.ActivatedRoute.data.subscribe(function (data) { return _this.dataChange.emit(_this.data = data); });
            }
            this.RouteWatchReporter.watchDocByCallbacks(this.$document, this.docCallbacks);
            this.apply();
            Promise.resolve().then(function () {
                _this.emit();
                _this.querySub = _this.RouteWatchReporter
                    .activatedRoute.queryParams
                    .subscribe(function (query) { return _this.queryChange.emit(query); });
            });
            if (this.onLoad) {
                this.onLoad({
                    state: this.RouteWatchReporter.current,
                    params: this.RouteWatchReporter.current.params,
                    current: this.RouteWatchReporter.current
                });
            }
        };
        RouteReporter.prototype.ngOnDestroy = function () {
            this.RouteWatchReporter.unwatchDocByCallbacks(this.$document, this.docCallbacks);
            if (this.querySub) {
                this.querySub.unsubscribe();
            }
        };
        /*
          addRouteToHistory():void{
            if(!this.routeHistory){
              this.routeHistory=[]
            }
        
            const priorPage = this.routeHistory.length - 1
            if(this.Router.url === this.routeHistory[ priorPage ]){
              return
            }
        
            //remove old entries
            while(this.routeHistory.length > this.maxHistory){
              this.routeHistory.shift()
            }
        
            //oldest to recent BUT emailed as recent to oldest
            this.routeHistory.push(this.Router.url)
          }
        */
        RouteReporter.prototype.apply = function () {
            var current = getCurrentByActive(this.ActivatedRoute);
            this.route = current.config;
            this.current = current;
            this.state = current;
            this.activated = current.ActivatedRoute;
            this.params = current.params || {};
            this.data = current.config.data || {};
            var parent = current.parent;
            if (parent) {
                var config = parent.config;
                var ar = parent.ActivatedRoute;
                this.parentRoute = config;
                this.parent = ar;
                this.parentData = config.data;
            }
        };
        RouteReporter.prototype.emit = function () {
            this.stateChanger.emit(this.RouteWatchReporter);
            var current = this.RouteWatchReporter.getCurrent();
            this.routeChange.emit(current.config);
            this.stateChange.emit(current);
            this.activatedChange.emit(current.ActivatedRoute);
            this.paramsChange.emit(current.params);
            this.dataChange.emit(current.config.data);
            var parent = current.parent;
            if (parent) {
                var config = parent.config;
                var ar = parent.ActivatedRoute;
                this.parentRouteChange.emit(config);
                this.parentChange.emit(ar);
                this.parentDataChange.emit(config.data);
            }
        };
        RouteReporter.prototype.goBackTo = function (name, params) {
            this.RouteWatchReporter.goBackTo(name, params);
        };
        RouteReporter.prototype.tryBack = function (name, params) {
            this.RouteWatchReporter.tryBack(name, params);
        };
        return RouteReporter;
    }());
    RouteReporter.decorators = [
        { type: core.Directive, args: [{
                    selector: "route-reporter",
                    exportAs: "RouteReporter"
                },] }
    ];
    RouteReporter.ctorParameters = function () { return [
        { type: router.Router },
        { type: RouteWatchReporter },
        { type: router.ActivatedRoute }
    ]; };
    RouteReporter.propDecorators = {
        onLoad: [{ type: core.Input }],
        stateChanger: [{ type: core.Output, args: ["onChange",] }],
        beforeChanger: [{ type: core.Output, args: ["beforeChange",] }],
        activated: [{ type: core.Input }],
        activatedChange: [{ type: core.Output }],
        params: [{ type: core.Input }],
        paramsChange: [{ type: core.Output }],
        data: [{ type: core.Input }],
        dataChange: [{ type: core.Output }],
        query: [{ type: core.Input }],
        queryChange: [{ type: core.Output }],
        route: [{ type: core.Input }],
        routeChange: [{ type: core.Output }],
        parentRoute: [{ type: core.Input }],
        parentRouteChange: [{ type: core.Output }],
        parent: [{ type: core.Input }],
        parentChange: [{ type: core.Output }],
        parentData: [{ type: core.Input }],
        parentDataChange: [{ type: core.Output }],
        current: [{ type: core.Input }],
        state: [{ type: core.Input }],
        stateChange: [{ type: core.Output }]
    };

    var providers$1 = [RouteWatchReporter, RouteHistory];
    var AckRouterModule = /** @class */ (function () {
        function AckRouterModule() {
        }
        AckRouterModule.forRoot = function () {
            return {
                ngModule: AckRouterModule,
                providers: providers$1
            };
        };
        return AckRouterModule;
    }());
    AckRouterModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        router.RouterModule
                    ],
                    declarations: [RouteReporter],
                    // providers:providers,
                    exports: [
                        RouteReporter,
                        router.RouterModule
                    ]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    Object.defineProperty(exports, 'ack', {
        enumerable: true,
        get: function () {
            return indexBrowser.ack;
        }
    });
    exports.AckApp = AckApp;
    exports.AckArray = AckArray;
    exports.AckModule = AckModule;
    exports.AckRouterModule = AckRouterModule;
    exports.DocumentService = DocumentService;
    exports.ErrorLog = ErrorLog;
    exports.HtmlSizeService = HtmlSizeService;
    exports.Log = Log;
    exports.Prompts = Prompts;
    exports.RouteWatchReporter = RouteWatchReporter;
    exports.UrlVars = UrlVars;
    exports.WindowService = WindowService;
    exports.components = declarations$1;
    exports.pipes = declarations$2;
    exports.providers = providers;
    exports.ɵa = providers$1;
    exports.ɵb = screenDirectives;
    exports.ɵba = AMath;
    exports.ɵbb = AString;
    exports.ɵbc = ATime;
    exports.ɵbd = Ack;
    exports.ɵbe = Keys;
    exports.ɵbf = TypeofPipe;
    exports.ɵbg = ConsolePipe;
    exports.ɵbh = InitDirective;
    exports.ɵbi = SelectOn;
    exports.ɵbj = FocusOn;
    exports.ɵbk = VarDirective;
    exports.ɵbl = ContentModel;
    exports.ɵbm = InnerHtmlModel;
    exports.ɵbn = ReplaceModel;
    exports.ɵbo = EnterKey;
    exports.ɵbp = EscapeKey;
    exports.ɵbq = PreventBackKey;
    exports.ɵbr = PreventEnterKey;
    exports.ɵbs = InputHint;
    exports.ɵbt = FormChanged;
    exports.ɵbu = FormAlter;
    exports.ɵbv = ScreenScrollModelY;
    exports.ɵbw = ScreenWidthModel;
    exports.ɵbx = ScreenHeightModel;
    exports.ɵby = ScreenScroll;
    exports.ɵbz = ScrollPastFixed;
    exports.ɵc = IndexTrack;
    exports.ɵca = string$a;
    exports.ɵcb = ScreenScrollHeightDiff;
    exports.ɵcc = PxFromHtmlTop;
    exports.ɵcd = HtmlWidthModel;
    exports.ɵce = HtmlHeightModel;
    exports.ɵcf = ShakeOn;
    exports.ɵcg = FxOn;
    exports.ɵch = StatusOnlineModel;
    exports.ɵci = StatusOfflineModel;
    exports.ɵcj = ElementSizeModel;
    exports.ɵck = ElementHeightModel;
    exports.ɵcl = ElementWidthModel;
    exports.ɵcm = DebugItem;
    exports.ɵcn = DebugArea;
    exports.ɵco = declarations;
    exports.ɵcp = string$9;
    exports.ɵcq = ErrorWell;
    exports.ɵcr = string$7;
    exports.ɵcs = AbsoluteOverflowX;
    exports.ɵct = string$6;
    exports.ɵcu = ReaderHeaderBody;
    exports.ɵcv = ReaderHeader;
    exports.ɵcw = ReaderBody;
    exports.ɵcx = string$8;
    exports.ɵcy = AckCloseIcon;
    exports.ɵcz = AckSections;
    exports.ɵd = Stringify;
    exports.ɵda = string;
    exports.ɵdb = SectionProvider;
    exports.ɵdc = AckSectionTemplates;
    exports.ɵdd = AckOptions;
    exports.ɵde = string$4;
    exports.ɵdf = AckOptionsModal;
    exports.ɵdg = string$5;
    exports.ɵdh = AckModal;
    exports.ɵdi = string$1;
    exports.ɵdj = AckModalLayout;
    exports.ɵdk = string$2;
    exports.ɵdl = AckAggregate;
    exports.ɵdm = AckFixedElement;
    exports.ɵdn = AckFixedElementStage;
    exports.ɵdo = string$3;
    exports.ɵdp = RouteReporter;
    exports.ɵdq = RouteHistory;
    exports.ɵe = ForceArray;
    exports.ɵf = ArrayOfObjects;
    exports.ɵg = SafeUrl;
    exports.ɵh = NumberWord;
    exports.ɵi = EndNumberWord;
    exports.ɵj = SafeHtml;
    exports.ɵk = SafeStyle;
    exports.ɵl = Between;
    exports.ɵm = ReplaceMaxLength;
    exports.ɵn = TextDownload;
    exports.ɵo = NumberToPhone;
    exports.ɵp = toNumber$1;
    exports.ɵq = NumberSuffix;
    exports.ɵr = MarkdownAnchor;
    exports.ɵs = Capitalize;
    exports.ɵt = CapitalizeWords;
    exports.ɵu = Yesno;
    exports.ɵv = YesNo;
    exports.ɵw = BooleanPipe;
    exports.ɵx = Bit;
    exports.ɵy = Numbers;
    exports.ɵz = ADate;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ack-angular.umd.js.map

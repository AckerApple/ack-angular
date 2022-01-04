import { EventEmitter, Injectable, Output, Component, ElementRef, Input, ContentChild, Directive, ViewChild, ContentChildren, TemplateRef, IterableDiffers, HostListener, Pipe, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animations } from 'ack-angular-fx';
import { ack as ack$1 } from 'ack-x/es/index-browser';
export { ack } from 'ack-x/es/index-browser';
import { BehaviorSubject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router, ActivatedRoute, RouterModule } from '@angular/router';

//import { Subscription } from "rxjs/internal/Subscription"
class HtmlSizeService {
    constructor() {
        this.change = new EventEmitter();
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
            //window.addEventListener('scroll', this.onResize)
        }
        else {
            window.removeEventListener('resize', this.onResize);
            //window.removeEventListener('scroll', this.onResize)
        }
    }
}
HtmlSizeService.decorators = [
    { type: Injectable }
];
HtmlSizeService.ctorParameters = () => [];
HtmlSizeService.propDecorators = {
    change: [{ type: Output }]
};

class Log {
    constructor() {
        this.log = [];
        this.maxLog = 80;
    }
    add(e, toConsole) {
        const ob = this.paramAudit(e, toConsole);
        this.log.unshift(ob);
        if (this.maxLog) {
            while (this.log.length > this.maxLog) {
                this.log.pop(); //remove last
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
        e['datetime'] = e['datetime'] || getDateTimeString$1();
        return e;
    }
}
Log.decorators = [
    { type: Injectable }
];
function getDateTimeString$1() {
    return (function (d) { return (('0' + (d.getMonth() + 1)).slice(-2) + '/' + ('0' + d.getDate()).slice(-2) + '/' + d.getFullYear()); })(new Date()) + ' ' + (function (d) { var h = d.getHours(), t = 'AM', m = d.getMinutes(); var mn = m < 10 ? '0' + m : m; h = h >= 12 ? (t = 'PM', h - 12 || 12) : h == 0 ? 12 : h; return ('0' + h).slice(-2) + ':' + ('0' + mn).slice(-2) + ' ' + t; })(new Date());
}

class Prompts {
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
        options.emitter = new EventEmitter();
        options.type = "alert";
        options.message = message;
        return this.issuePrompt(options);
    }
    confirm(message, options = {}) {
        options.emitter = new EventEmitter();
        options.type = "confirm";
        options.message = message;
        return this.issuePrompt(options);
    }
}
Prompts.decorators = [
    { type: Injectable }
];

class AckApp {
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
}
AckApp.decorators = [
    { type: Injectable }
];
AckApp.ctorParameters = () => [
    { type: 
        //prompt,
        Prompts }
];

class ErrorLog {
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
                this.log.pop(); //remove last
            }
        }
        return logObToErrorObject(ob);
    }
    //api error to js Error object
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
    /** Convert Error object to a regular object */
    objectifyError(err) {
        const keys = Object.getOwnPropertyNames(err);
        keys.push.apply(keys, Object.keys(err));
        const recErr = {}; //new Error(err.message || err.name || err.type || 'Unexpected Error Occured')
        keys.forEach(v => recErr[v] = err[v]);
        const knownKeys = ["stack", "message", "name", "arguments", "type"];
        knownKeys.forEach(key => {
            if (typeof err[key] != 'undefined') {
                recErr[key] = err[key];
            }
        });
        const body = err.body || err._body;
        //auto attempt to parse body
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
    /** same as reject but uses native throw instead of native Promise.reject */
    rethrow(err) {
        const e = this.add(err);
        throw e;
    }
}
ErrorLog.decorators = [
    { type: Injectable }
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
    const e = new Error(getResponseMessage(log));
    Object.keys(log).forEach(v => e[v] = log[v]);
    return e;
}
function getDateTimeString() {
    return (function (d) { return (('0' + (d.getMonth() + 1)).slice(-2) + '/' + ('0' + d.getDate()).slice(-2) + '/' + d.getFullYear()); })(new Date()) + ' ' + (function (d) { var h = d.getHours(), t = 'AM', m = d.getMinutes(); var mn = m < 10 ? '0' + m : m; h = h >= 12 ? (t = 'PM', h - 12 || 12) : h == 0 ? 12 : h; return ('0' + h).slice(-2) + ':' + ('0' + mn).slice(-2) + ' ' + t; })(new Date());
}

function getWindow() { return window; }
class WindowService {
    get nativeElement() { return getWindow(); }
    //deprecated
    get nativeWindow() { return getWindow(); }
}
WindowService.decorators = [
    { type: Injectable }
];

class UrlVars {
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
    /** case in-sensative variable fetch */
    get(name, param) {
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
    }
}
UrlVars.decorators = [
    { type: Injectable }
];
UrlVars.ctorParameters = () => [
    { type: WindowService }
];

function getDocument() { return document; }
class DocumentService {
    get nativeElement() { return getDocument(); }
}
DocumentService.decorators = [
    { type: Injectable }
];

const providers$1 = [
    Log,
    ErrorLog,
    AckApp,
    UrlVars,
    WindowService,
    DocumentService,
    Prompts,
    HtmlSizeService
];

class SectionProvider {
    constructor() {
        //appTemplates:AckSectionTemplates[] = []
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
}
SectionProvider.decorators = [
    { type: Injectable }
];

const string$8 = "<ng-container [(htmlHeightModel)]=\"htmlHeightModel\"></ng-container><ng-container *ngIf=\"SectionProvider.headerTemplates.length\"><div *ngIf=\"mode==='calculate'\" style=\"position:fixed;top:0;width:100%\" [style.z-index]=\"zIndex\" [(elementHeightModel)]=\"headerHeight\" [elementSizeModelWatch]=\"SectionProvider.headerTemplates.length\"><ng-template *ngTemplateOutlet=\"headerWrap || headerContent;context:{outlet:headerContent}\"></ng-template></div><ng-template #headerContent=\"\"><ng-container *ngFor=\"let item of SectionProvider.headerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></ng-template><div *ngIf=\"!mode || mode==='clone'\" style=\"position:fixed;top:0;width:100%\" [style.z-index]=\"zIndex\"><ng-template *ngTemplateOutlet=\"headerContent\"></ng-template></div></ng-container><ng-template *ngTemplateOutlet=\"table || defaultTableTag;context:{outlet:tableRows}\"></ng-template><ng-template #defaultTableTag=\"\"><table style=\"height:100%;width:100%;border-collapse: collapse;\" cellPadding=\"0\" cellSpacing=\"0\" border=\"0\"><ng-template *ngTemplateOutlet=\"tableRows\"></ng-template></table></ng-template><ng-template #tableRows=\"\"><tr *ngIf=\"SectionProvider.headerTemplates.length\"><td colspan=\"3\" [style.height.px]=\"headerHeight\" style=\"visibility:hidden\"><ng-container *ngIf=\"!mode || mode==='clone'\"><ng-container *ngFor=\"let item of SectionProvider.headerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></ng-container></td></tr><tr><td *ngIf=\"SectionProvider.leftBodyTemplates.length\" [style.min-width.px]=\"leftBodyWidth\" valign=\"top\" align=\"right\"><ng-template #defaultLeftBodyWrap=\"\"><div style=\"overflow:auto;height:100%;\"><ng-template *ngTemplateOutlet=\"leftBodyContent\"></ng-template></div></ng-template><ng-template #leftBodyContent=\"\"><ng-container *ngFor=\"let item of SectionProvider.leftBodyTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></ng-template><div *ngIf=\"mode==='calculate'\" style=\"position:fixed;\" [style.z-index]=\"zIndex - 1\" [style.height.px]=\"htmlHeightModel - (SectionProvider.headerTemplates.length ? headerHeight : 0) - (SectionProvider.footerTemplates.length ? footerHeight : 0)\" [(elementWidthModel)]=\"leftBodyWidth\" [elementSizeModelWatch]=\"SectionProvider.leftBodyTemplates.length\"><ng-template *ngTemplateOutlet=\"leftBodyWrap || defaultLeftBodyWrap;context:{outlet:leftBodyContent}\"></ng-template></div><div *ngIf=\"!mode || mode==='clone'\" style=\"position:fixed;top:0;\" [style.z-index]=\"zIndex - 1\"><ng-template *ngTemplateOutlet=\"leftBodyWrap || defaultLeftBodyWrap;context:{outlet:leftBodyContent}\"></ng-template></div><ng-container *ngIf=\"!mode || mode==='clone'\"><ng-template *ngTemplateOutlet=\"leftBodyWrap || defaultLeftBodyWrap;context:{outlet:leftBodyContent}\"></ng-template></ng-container></td><ng-container *ngTemplateOutlet=\"bodyCell || defaultBodyCell;context:{outlet:body}\"></ng-container><ng-template #defaultBodyCell=\"\"><td style=\"height:100%\" valign=\"top\"><ng-template *ngTemplateOutlet=\"body\"></ng-template></td></ng-template><ng-template #body=\"\"><ng-content></ng-content></ng-template><td *ngIf=\"SectionProvider.rightBodyTemplates.length\" [style.min-width.px]=\"rightBodyWidth\" valign=\"top\" align=\"left\"><ng-template #defaultRightBodyWrap=\"\"><div style=\"overflow:auto;height:100%;\"><ng-template *ngTemplateOutlet=\"rightBodyContent\"></ng-template></div></ng-template><ng-template #rightBodyContent=\"\"><ng-container *ngFor=\"let item of SectionProvider.rightBodyTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></ng-template><div *ngIf=\"mode==='calculate'\" style=\"position:fixed;\" [style.z-index]=\"zIndex - 1\" [style.height.px]=\"htmlHeightModel - (SectionProvider.headerTemplates.length ? headerHeight : 0) - (SectionProvider.footerTemplates.length ? footerHeight : 0)\" [(elementWidthModel)]=\"rightBodyWidth\" [elementSizeModelWatch]=\"SectionProvider.rightBodyTemplates.length\"><ng-template *ngTemplateOutlet=\"rightBodyWrap || defaultRightBodyWrap;context:{outlet:rightBodyContent}\"></ng-template></div><div *ngIf=\"!mode || mode==='clone'\" style=\"position:fixed;top:0;overflow:auto;\" [style.z-index]=\"zIndex - 1\"><ng-template *ngTemplateOutlet=\"rightBodyWrap || defaultRightBodyWrap;context:{outlet:rightBodyContent}\"></ng-template></div><ng-container *ngIf=\"!mode || mode==='clone'\"><ng-template *ngTemplateOutlet=\"rightBodyWrap || defaultRightBodyWrap;context:{outlet:rightBodyContent}\"></ng-template></ng-container></td></tr><tr *ngIf=\"SectionProvider.footerTemplates.length\"><td colspan=\"3\" [style.height.px]=\"footerHeight\"><div *ngIf=\"!mode || mode==='clone'\" style=\"visibility:hidden\"><ng-container *ngFor=\"let item of SectionProvider.footerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></div></td></tr></ng-template><ng-container *ngIf=\"SectionProvider.footerTemplates.length\"><div *ngIf=\"mode==='calculate'\" style=\"position:fixed;bottom:0;width:100%\" [style.z-index]=\"zIndex\" [(elementHeightModel)]=\"footerHeight\" [elementSizeModelWatch]=\"SectionProvider.footerTemplates.length\"><ng-container *ngFor=\"let item of SectionProvider.footerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></div><div *ngIf=\"!mode || mode==='clone'\" style=\"position:fixed;bottom:0;width:100%\" [style.z-index]=\"zIndex\"><ng-container *ngFor=\"let item of SectionProvider.footerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></div></ng-container>";

class AckSections {
    constructor(SectionProvider, ElementRef) {
        this.SectionProvider = SectionProvider;
        this.ElementRef = ElementRef;
        //clone is more performant in most cases but things duplicate like requests and timers may result
        this.mode = "calculate";
        this.zIndex = 19;
        const elmStyle = ElementRef.nativeElement.style;
        elmStyle.height = "100%";
        elmStyle.display = "block";
    }
}
AckSections.decorators = [
    { type: Component, args: [{
                selector: 'ack-sections',
                template: string$8,
                providers: [SectionProvider]
                //,exportAs:"AckSections"
            },] }
];
AckSections.ctorParameters = () => [
    { type: SectionProvider },
    { type: ElementRef }
];
AckSections.propDecorators = {
    mode: [{ type: Input }],
    zIndex: [{ type: Input }],
    table: [{ type: ContentChild, args: ["table",] }],
    headerWrap: [{ type: ContentChild, args: ["headerWrap",] }],
    bodyCell: [{ type: ContentChild, args: ["bodyCell",] }],
    leftBodyWrap: [{ type: ContentChild, args: ["leftBodyWrap",] }],
    rightBodyWrap: [{ type: ContentChild, args: ["rightBodyWrap",] }]
};

class AckSectionTemplates {
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
}
AckSectionTemplates.decorators = [
    { type: Directive, args: [{
                selector: "ack-section-templates"
            },] }
];
AckSectionTemplates.ctorParameters = () => [
    { type: SectionProvider }
];
AckSectionTemplates.propDecorators = {
    header: [{ type: ContentChild, args: ['sectionHeader',] }],
    footer: [{ type: ContentChild, args: ['sectionFooter',] }],
    leftBody: [{ type: ContentChild, args: ['sectionLeftBody',] }],
    rightBody: [{ type: ContentChild, args: ['sectionRightBody',] }]
};

// import { string } from "./templates/ack-modal.pug"
class AckModal {
    constructor(element, AckApp) {
        this.element = element;
        this.AckApp = AckApp;
        this.zIndex = 20;
        this.valign = 'top';
        this.allowClose = true;
        this.showModelChange = new EventEmitter();
        //one way expression binds
        this.close = new EventEmitter();
        Promise.resolve().then(() => this.determineStage());
    }
    /*ngOnInit(){
      return this.determineStage() // causes race error ExpressionChangedAfterItHasBeenCheckedError
    }*/
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
}
AckModal.decorators = [
    { type: Component, args: [{
                selector: "ack-modal",
                template: "<ng-template #placeholder>\n  <ack-modal-layout\n    [zIndex]          = \"zIndex\"\n    [valign]          = \"valign\"\n    (close)           = \"close.emit($event)\"\n    [isModelMode]     = \"isModelMode==null ? showModelChange.observers.length : isModelMode\"\n    [showModel]       = \"showModel\"\n    (showModelChange) = \"showModelChange.emit(showModel=$event)\"\n    [backgroundColor] = \"backgroundColor\"\n    [wrapStyle]       = \"wrapStyle\"\n    [wrapCellStyle]   = \"wrapCellStyle\"\n    [allowClose]      = \"allowClose\"\n  >\n    <ng-template [ngTemplateOutlet]=\"body\"></ng-template>\n    <ng-content *ngIf=\"!body\"></ng-content>\n  </ack-modal-layout>\n</ng-template>\n\n<ng-template\n  *ngIf=\"!AckApp.fixedElementStage || inline\"\n  [ngTemplateOutlet]=\"layout\"\n></ng-template>\n"
            },] }
];
AckModal.ctorParameters = () => [
    { type: ElementRef },
    { type: AckApp }
];
AckModal.propDecorators = {
    body: [{ type: ContentChild, args: ['body',] }],
    layout: [{ type: ViewChild, args: ['placeholder',] }],
    inline: [{ type: Input }],
    isModelMode: [{ type: Input }],
    zIndex: [{ type: Input }],
    valign: [{ type: Input }],
    wrapStyle: [{ type: Input }],
    wrapCellStyle: [{ type: Input }],
    backgroundColor: [{ type: Input }],
    allowClose: [{ type: Input }],
    showModel: [{ type: Input }],
    showModelChange: [{ type: Output }],
    close: [{ type: Output }]
};

// import { string } from "./templates/ack-modal-layout.pug"
class AckModalLayout {
    //@Input() template:ElementRef<any>
    constructor(element, AckApp) {
        this.element = element;
        this.AckApp = AckApp;
        this.zIndex = 20;
        this.close = new EventEmitter();
        this.allowClose = true;
        this.valign = 'top';
        this.isModelMode = false;
        this.showModel = true; // when using, do not allow to be undefined
        this.showModelChange = new EventEmitter();
        //after possible double click, close on outside content click
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
}
AckModalLayout.decorators = [
    { type: Component, args: [{
                selector: 'ack-modal-layout',
                // template:string,
                template: "<div *ngIf=\"showModel || !isModelMode\"\n  [@fadeInOutUp]=\"1\"\n  style=\"\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n  \"\n  [style.z-index]=\"zIndex || 20\"\n>\n  <div\n    style=\"height: 100%; width: 100%; padding: 20px; display: inline-table\"\n    [ngStyle]=\"{ 'background-color': backgroundColor || 'rgba(0,0,0,.7)' }\"\n  >\n    <table\n      style=\"height: 100%; margin: auto\"\n      border=\"0\"\n      align=\"center\"\n      cellpadding=\"0\"\n      cellspacing=\"0\"\n      [ngStyle]=\"wrapStyle\"\n    >\n      <tr>\n        <td (click)=\"allowClose ? fireClose() : 0\"></td>\n      </tr>\n      <tr>\n        <td [attr.valign]=\"valign\" [ngStyle]=\"wrapCellStyle\">\n          <div *ngIf=\"allowClose\" style=\"position: relative\">\n            <div\n              style=\"\n                position: absolute;\n                bottom: -17px;\n                right: -16px;\n                border: 1px solid #ddd;\n                border-radius: 50%;\n                z-index: 20;\n              \"\n            >\n              <ack-close-icon (click)=\"fireClose()\"></ack-close-icon>\n            </div>\n          </div>\n          <ng-content></ng-content>\n        </td>\n      </tr>\n      <tr>\n        <td (click)=\"allowClose ? fireClose() : 0\"></td>\n      </tr>\n    </table>\n  </div>\n</div>\n",
                animations
            },] }
];
AckModalLayout.ctorParameters = () => [
    { type: ElementRef },
    { type: AckApp }
];
AckModalLayout.propDecorators = {
    zIndex: [{ type: Input }],
    close: [{ type: Output }],
    allowClose: [{ type: Input }],
    wrapStyle: [{ type: Input }],
    wrapCellStyle: [{ type: Input }],
    backgroundColor: [{ type: Input }],
    valign: [{ type: Input }],
    isModelMode: [{ type: Input }],
    showModel: [{ type: Input }],
    showModelChange: [{ type: Output }]
};

const string$7 = "<ng-container *ngFor=\"let fixedElm of AckApp.fixedElms\"><ng-container *ngTemplateOutlet=\"fixedElm.content\"></ng-container></ng-container><ng-container *ngFor=\"let prompt of AckApp.prompts.prompts;let i=index\"><ack-modal-layout zIndex=\"99\" [allowClose]=\"0\"><div style=\"text-align:left;max-width:900px;border:1px solid #DDD;border-radius:5px;margin:1em;padding:1em;background-color:white;\"><h3 *ngIf=\"prompt.title\" style=\"margin-top:0;\">{{ prompt.title }}</h3><div style=\"padding-right:1em;\">{{ prompt.message }}</div><br/><br/><div style=\"text-align:right;\"><a *ngIf=\"prompt.type=='confirm'\" (click)=\"prompt.emitter.emit(false)\" style=\"text-align:center;display:inline-block;min-width:75px;border-radius:3px;border:1px solid #AAA;padding:0 .5em;margin-right:.5em;\">Cancel</a><a (click)=\"prompt.emitter.emit(true)\" style=\"text-align:center;display:inline-block;min-width:75px;border-radius:3px;border:1px solid #AAA;padding:0 .5em;\" [ngStyle]=\"{'font-weight':prompt.type=='confirm' ? 'bold' : null}\">OK</a></div></div></ack-modal-layout></ng-container><ng-container *ngFor=\"let item of AckApp.modals\"><ng-container *ngIf=\"!item.isModelMode || item.showModel\"><ng-template [ngTemplateOutlet]=\"item.layout\"></ng-template></ng-container></ng-container>";

class AckFixedElementStage {
    constructor(AckApp, ElementRef) {
        this.AckApp = AckApp;
        this.ElementRef = ElementRef;
        AckApp.fixedElementStage = ElementRef;
    }
}
AckFixedElementStage.decorators = [
    { type: Component, args: [{
                selector: 'ack-fixed-element-stage',
                template: string$7
            },] }
];
AckFixedElementStage.ctorParameters = () => [
    { type: AckApp },
    { type: ElementRef }
];

class AckFixedElement {
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
}
AckFixedElement.decorators = [
    { type: Component, args: [{
                selector: 'ack-fixed-element',
                template: '<ng-template #content><ng-content></ng-content></ng-template>'
            },] }
];
AckFixedElement.ctorParameters = () => [
    { type: AckApp }
];
AckFixedElement.propDecorators = {
    content: [{ type: ViewChild, args: ['content',] }]
};

const template = '<div style="display:inline-block;cursor:pointer;border:3px solid white;border-radius:50%;background-color:#666;color:white;text-align:center;font-family:Arial">' +
    '<div style="font-weight:bold;line-height:22px;font-size:23px;height:25px;width:25px">x</div>' +
    '</div>';
class AckCloseIcon {
}
AckCloseIcon.decorators = [
    { type: Component, args: [{
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
    let newkey;
    let key;
    let typo;
    //loop extra arguments as property collectors
    for (let x = 0; x < plan.length; ++x) {
        key = plan[x];
        subargs = [];
        //undefined error catcher
        if (rtn == null) {
            typo = typeof (rtn);
            const msg = "TypeError: Cannot read property '" + key + "' of " + typo + ". Invoke instructions: " + JSON.stringify(plan);
            throw new Error(msg);
        }
        let asFunc = key.constructor == Array;
        //array where 1st arg is method and subs are positional arguments
        if (asFunc) {
            key = [];
            key.push.apply(key, plan[x]); //clone array memory, do not touch original array
            newkey = key.shift(); // first arg is name of key, remove it from array
            subargs = key; //what is left in array is the arguments
            key = newkey; //key to string
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
function toNumber$1(val) {
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
/** if input is array returned otherwise array created with  */
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
function numbers(input, safeChars //upto 4 acceptable characters
) {
    let xString = '[^0-9';
    if (safeChars) {
        if (safeChars.length > 4) {
            safeChars = safeChars.substring(0, 4); //do not allow safeChars to create a maliscous regx
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
    const av = new ack$1();
    return invokeRotator(av[name]);
}
const aDate = a('date');
const aTime = a('time');
const aMath = invokeRotator(Math);
const aString = invokeRotator(String);
const ack = invokeRotator(ack$1);
// maybe deprecated . Remove in future releases. Just an array ref of all pipes
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
    toNumber: toNumber$1,
    yesno,
    yesNo,
};

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
    //look to apply last template as a specified templates[name]
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

const string$6 = "<div [ngClass]=\"{'border-grey-6x border-top':stylize}\"></div><div *ngFor=\"let item of array|array\" (click)=\"selectItem(item)\" [ngClass]=\"getItemClass(item)\"><ng-template *ngIf=\"TemplateReader.templates.selected &amp;&amp; isItemSelected(item)\" [ngTemplateOutlet]=\"TemplateReader.templates.selected\" [ngTemplateOutletContext]=\"{item:item}\"></ng-template><ng-template *ngIf=\"TemplateReader.templates.templateRef &amp;&amp; (!TemplateReader.templates.selected || !isItemSelected(item))\" [ngTemplateOutlet]=\"TemplateReader.templates.templateRef\" [ngTemplateOutletContext]=\"{item:item, selected:isItemSelected(item)}\"></ng-template><span *ngIf=\"!TemplateReader.templates.templateRef\">{{ item }}</span></div>";

class AckOptions {
    constructor(ElementRef) {
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
        this.modelChange = new EventEmitter();
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
        this.model = array(this.model);
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
}
AckOptions.decorators = [
    { type: Component, args: [{
                selector: "ack-options",
                template: string$6
                //,exportAs:"AckOptions"
            },] }
];
AckOptions.ctorParameters = () => [
    { type: ElementRef }
];
AckOptions.propDecorators = {
    array: [{ type: Input }],
    stylize: [{ type: Input }],
    multiple: [{ type: Input }],
    modelAsArray: [{ type: Input }],
    max: [{ type: Input }],
    toggleable: [{ type: Input }],
    templateRefs: [{ type: ContentChildren, args: [TemplateRef,] }],
    inputTemplateRefs: [{ type: Input }],
    model: [{ type: Input }],
    modelChange: [{ type: Output }],
    arrayKey: [{ type: Input }],
    modelKey: [{ type: Input }],
    arrayToModelKey: [{ type: Input }]
};
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

const string$5 = "<ack-modal (close)=\"close.emit($event)\" [allowClose]=\"allowClose\" [showModel]=\"showModel\" (showModelChange)=\"showModelChange.emit($event)\" [isModelMode]=\"showModelChange.observers.length\" [wrapStyle]=\"wrapStyle\" [wrapCellStyle]=\"wrapCellStyle\" [backgroundColor]=\"backgroundColor\" (backgroundColorChange)=\"backgroundColorChange.emit($event)\"><ng-content></ng-content><div class=\"border-grey-6x border bg-white\"><ack-options #ackOptions=\"\" [array]=\"array\" [max]=\"max\" [modelAsArray]=\"modelAsArray\" [model]=\"model\" (modelChange)=\"fireModelChange($event)\" [multiple]=\"multiple\" [toggleable]=\"toggleable\" [stylize]=\"stylize\" [inputTemplateRefs]=\"templateRefs\" [arrayKey]=\"arrayKey\" [arrayToModelKey]=\"arrayToModelKey\" [modelKey]=\"modelKey\"></ack-options></div></ack-modal>";

class AckOptionsModal extends AckOptions {
    constructor() {
        super(...arguments);
        //one way binds
        this.allowClose = true;
        //one way expressions
        this.close = new EventEmitter();
        this.backgroundColorChange = new EventEmitter();
        this.showModel = true;
        this.showModelChange = new EventEmitter();
    }
    fireModelChange(model) {
        if (!this.multiple)
            this.close.emit();
        this.modelChange.emit(model);
    }
}
AckOptionsModal.decorators = [
    { type: Component, args: [{
                selector: 'ack-options-modal',
                template: string$5
            },] }
];
AckOptionsModal.propDecorators = {
    allowClose: [{ type: Input }],
    wrapStyle: [{ type: Input }],
    wrapCellStyle: [{ type: Input }],
    close: [{ type: Output }],
    backgroundColor: [{ type: Input }],
    backgroundColorChange: [{ type: Output }],
    showModel: [{ type: Input }],
    showModelChange: [{ type: Output }]
};

const string$4 = "<div [(elementHeightModel)]=\"elementHeightModel\" [ngClass]=\"wrapClass\" [class.no-scroll-bars]=\"active &amp;&amp; !scrollBars &amp;&amp; scrollBars!=null\" [ngStyle]=\"active ? {overflow:overflow,position:'absolute',width:'100%'} : {}\"><ng-content></ng-content></div><div *ngIf=\"elementHeightModel &amp;&amp; active\" style=\"visibility:hidden;overflow:hidden;width:100%\" [style.height.px]=\"elementHeightModel\">&nbsp;</div>";

class AbsoluteOverflowX {
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
}
AbsoluteOverflowX.decorators = [
    { type: Component, args: [{
                selector: 'absolute-overflow-x',
                template: string$4
            },] }
];
AbsoluteOverflowX.ctorParameters = () => [
    { type: ElementRef }
];
AbsoluteOverflowX.propDecorators = {
    scrollBars: [{ type: Input }],
    wrapClass: [{ type: Input }],
    active: [{ type: Input }],
    overflow: [{ type: Input }]
};

const string$3 = "<div *ngIf=\"error!=null &amp;&amp; errorClose!=error\" [@fadeInOutUp]=\"1\"><div *ngIf=\"error &amp;&amp; closable\" (click)=\"close.emit();errorClose=error\" style=\"position:relative\"><div style=\"position:absolute;bottom:-17px;right:-16px;border:1px solid #DDD;border-radius:50%;z-index:20\"><ack-close-icon></ack-close-icon></div></div><div class=\"pad-xxs\" *ngIf=\"error!=null &amp;&amp; errorClose!=error\" [@fadeInOutUp]=\"1\" [ngClass]=\"cssClasses\"><div class=\"flex-valign-center flex-wrap child-margin-xxs\"><div class=\"flex-1\"><div class=\"strong text-3x margin-0\" [class.cursor-pointer]=\"allowDetails\" (click)=\"!allowDetails || moreDetails=!moreDetails\">{{ getErrorMessage(error) }}</div></div><a class=\"text-blue underline text-xs\" *ngIf=\"allowDetails &amp;&amp; error &amp;&amp; (error|typeof)!='string'\" (click)=\"moreDetails=!moreDetails\">details</a></div><ng-container *ngTemplateOutlet=\"titleFooter\"></ng-container><div *ngIf=\"moreDetails\" [@fadeInOutUp]=\"1\"><absolute-overflow-x class=\"text-sm\"><pre class=\"margin-0 pad-xs\">{{ error|json }}</pre></absolute-overflow-x></div></div></div>";

class ErrorWell {
    constructor() {
        this.message = 'Unexpected Error Occured';
        this.closable = true;
        this.allowDetails = true;
        this.close = new EventEmitter();
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
}
ErrorWell.decorators = [
    { type: Component, args: [{
                selector: 'error-well',
                template: string$3,
                animations: animations
            },] }
];
ErrorWell.propDecorators = {
    moreDetails: [{ type: Input }],
    message: [{ type: Input }],
    error: [{ type: Input }],
    cssClasses: [{ type: Input }],
    closable: [{ type: Input }],
    allowDetails: [{ type: Input }],
    close: [{ type: Output }],
    titleFooter: [{ type: ContentChild, args: ["titleFooter",] }]
};

const string$2 = "<div style=\"text-align:center;height:100%\"><div style=\"display:inline-block;width:100%;height:100%;max-width:1000px\"><div style=\"width:100%;height:100%;\"><table cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%;height:100%;\"><tr *ngIf=\"readerHeader\"><td><ng-template *ngTemplateOutlet=\"readerHeader\"></ng-template></td></tr><tr><td style=\"height:100%\"><ng-content></ng-content></td></tr></table></div></div></div>";

//easy to use common full page templater
class ReaderHeaderBody {
}
ReaderHeaderBody.decorators = [
    { type: Component, args: [{
                selector: 'reader-header-body',
                template: string$2
            },] }
];
ReaderHeaderBody.propDecorators = {
    readerHeader: [{ type: ContentChild, args: ['reader-header',] }]
};
class ReaderHeader {
}
ReaderHeader.decorators = [
    { type: Directive, args: [{
                selector: 'reader-header'
            },] }
];
class ReaderBody {
    constructor(element) {
        this.element = element;
        element.nativeElement.style.height = '100%';
        element.nativeElement.style.display = 'block';
    }
}
ReaderBody.decorators = [
    { type: Directive, args: [{
                selector: "reader-body"
            },] }
];
ReaderBody.ctorParameters = () => [
    { type: ElementRef }
];
ReaderBody.propDecorators = {
    readerHeader: [{ type: ContentChild, args: ['reader-header',] }]
};

const string$1 = "<div class=\"child-pad-h-xs flex-wrap text-center\" *ngIf=\"DebugItems.length&gt;1\"><a class=\"cursor-pointer border border-grey-3x radius-5 flex-1\" *ngFor=\"let item of DebugItems\" [ngClass]=\"item===debugItem ? 'bg-positive text-white' : ''\" (click)=\"debugItem = debugItem===item ? null : item\">{{item.name}}<ng-container *ngIf=\"item.type==='array'\">&nbsp;( {{ item.value?.length || 0 }} )</ng-container></a></div><ng-container *ngIf=\"debugItem\"><h3 class=\"margin-bottom-0\">{{ debugItem.name }}</h3><ng-container *ngIf=\"debugItem.type==='array';else regdebug\"><ng-container #loop=\"var\" [var]=\"{view:0}\"></ng-container><pre class=\"bg-grey-3x margin-0 sample-code\" *ngFor=\"let data of debugItem.value;let ii=index\"><ng-container *ngIf=\"loop.var.view==ii\"><div class=\"flex-valign-center child-pad-xs\" style=\"padding:.4em;float:right\"><a class=\"fas fa-caret-square-left hover-bg-energized\" (click)=\"loop.var.view=ii===0 ? debugItem.value.length-1 : ii-1\">&lt;</a><a style=\"color:blue;\" (click)=\"editsMap[ii]=!editsMap[ii]\">edit</a><a style=\"color:blue;\" (click)=\"debugItem.type=null\">all</a><a class=\"fas fa-caret-square-right hover-bg-energized\" (click)=\"loop.var.view=ii===debugItem.value.length-1 ? 0 : ii+1\">&gt;</a></div><p><ng-container *ngIf=\"debugItem.rowTitle;else defaultRowLabel\"><ng-template *ngTemplateOutlet=\"debugItem.rowTitle;context:{index:ii}\"></ng-template></ng-container><ng-template #defaultRowLabel=\"\"><strong>Result {{ii}} of {{debugItem.value.length}} </strong></ng-template></p><absolute-overflow-x *ngIf=\"!editsMap[ii]\" style=\"font-size:0.8em;\"><pre>{{ data | json }}</pre></absolute-overflow-x><ng-container *ngIf=\"editsMap[ii]\"><textarea [name]=\"'editsMap' + ii\" style=\"width:100%;height:300px\" (change)=\"dataString = $event.target.value\">{{ data | json }}</textarea><div style=\"text-align:center\"><a style=\"color:blue;padding-top:.4em;\" (click)=\"updateDataByJsonString(data, dataString, debugItem);editsMap[ii]=false\">save</a></div></ng-container></ng-container></pre></ng-container><ng-template #regdebug=\"\"><div class=\"pos-rel\"><div class=\"pos-abs right-0 z-index-10\"><div class=\"pad-xxs\"><i class=\"fas fa-pencil-alt hover-text-energized\" (click)=\"edit=!edit\" [class.text-calm]=\"edit\">edit</i></div></div></div><ng-container *ngIf=\"edit;else readMode\"><textarea class=\"width-full\" rows=\"30\" (change)=\"apply(debugItem.value,$event.target.value, debugItem)\" wrap=\"off\">{{ debugItem.value | json }}</textarea></ng-container><ng-template #readMode=\"\"><absolute-overflow-x><pre class=\"code-sample\">{{ debugItem.value | json }}</pre></absolute-overflow-x></ng-template></ng-template></ng-container>";

class DebugItem {
    constructor() {
        this.save = new EventEmitter();
    }
}
DebugItem.decorators = [
    { type: Directive, args: [{
                selector: "debug-item"
            },] }
];
DebugItem.propDecorators = {
    name: [{ type: Input }],
    value: [{ type: Input }],
    type: [{ type: Input }],
    rowTitle: [{ type: ContentChild, args: ["rowTitle",] }],
    save: [{ type: Output }]
};
class DebugArea {
    constructor() {
        this.editsMap = {}; //map of debug edits
    }
    ngAfterViewInit() {
        if (this.DebugItems.length === 1) {
            Promise.resolve().then(() => this.debugItem = this.DebugItems.first);
        }
    }
    //update data from debug area
    updateDataByJsonString(item, string, debugItem) {
        try {
            const json = JSON.parse(string);
            for (let x in item)
                delete item[x];
            Object.assign(item, json);
            //this.arrayChange.emit(this.array)
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
}
DebugArea.decorators = [
    { type: Component, args: [{
                selector: "debug-area",
                template: string$1
            },] }
];
DebugArea.propDecorators = {
    DebugItems: [{ type: ContentChildren, args: [DebugItem,] }]
};
const declarations$3 = [
    DebugItem, DebugArea
];

class AckAggregate {
    constructor() {
        this.outputChange = new EventEmitter();
    }
}
AckAggregate.decorators = [
    { type: Directive, args: [{
                selector: 'ack-aggregate'
            },] }
];
AckAggregate.propDecorators = {
    type: [{ type: Input }],
    keys: [{ type: Input }],
    output: [{ type: Input }],
    outputChange: [{ type: Output }]
};

class AckArray {
    constructor(_iterableDiffers) {
        this._iterableDiffers = _iterableDiffers;
        this.pushed = {};
        this.inSort = false;
        this.sortArray = [];
        this.pageAt = 0; //when to page aka maxrows
        this.pagesChange = new BehaviorSubject(null);
        //@Output() pagesChange:EventEmitter<any[][]> = new EventEmitter()
        //a chance to know when current viewed page should be zero
        this.page = 0;
        this.pageChange = new EventEmitter();
        this.keyMapChange = new EventEmitter();
        this.loopStart = new EventEmitter();
        this.loopEach = new EventEmitter();
        this.loopEnd = new EventEmitter();
        this.arrayChange = new EventEmitter();
        //super()
        //watch deep changes
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
    //watch array deep changes
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
                //default is to sum
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
        //super.loop( reset )
        if (!this.array) {
            this.array = [];
        }
        this.loopStart.emit(reset);
        const last = this.array.length;
        for (let x = 0; x < last; ++x) {
            this.loopEach.emit({ index: x, item: this.array[x] });
        }
        //this.performJoins()
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
    /** adds to loop functionality how to create pages */
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
            this.pages.length = 0; //dont break binding if pages remembered
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
            //this.pagesChange.emit( this.pages )
            this.pagesChange.next(this.pages);
        });
    }
    //reduce array down to one item
    only(item) {
        this.array.length = 0;
        this.array.push(item);
        this.arrayChange.emit(this.array);
        this.loop(true);
    }
    //looks up id or the item itself is an ID
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
    selected(item) {
        return this.itemIndex(item) >= 0 ? true : false;
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
        let asc = false; //most lists come pre sorted asc, our default should be desc
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
                default: //STRING BASED SORT
                    if (asc) {
                        this.array.sort((a, b) => String(toKey(a) || "").toLowerCase() > String(toKey(b) || "").toLowerCase() ? 1 : -1);
                    }
                    else {
                        this.array.sort((b, a) => String(toKey(a) || "").toLowerCase() > String(toKey(b) || "").toLowerCase() ? 1 : -1);
                    }
            }
        }
        //cleanup
        if (this.sortArray.length > 3) {
            this.sortArray.pop();
        }
        this.inSort = false;
        this.loop(true); //cause pages to be updated
    }
}
AckArray.decorators = [
    { type: Directive, args: [{
                selector: "ack-array",
                exportAs: "AckArray"
            },] }
];
AckArray.ctorParameters = () => [
    { type: IterableDiffers }
];
AckArray.propDecorators = {
    pageAt: [{ type: Input }],
    pages: [{ type: Input }],
    pagesChange: [{ type: Output }],
    page: [{ type: Input }],
    pageChange: [{ type: Output }],
    keyMap: [{ type: Input }],
    keyMapChange: [{ type: Output }],
    AckAggregates: [{ type: ContentChildren, args: [AckAggregate,] }],
    idKeys: [{ type: Input }],
    merge: [{ type: Input }],
    array: [{ type: Input }],
    arrayChange: [{ type: Output }],
    array$: [{ type: Input }]
};
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
    //removals
    for (let x = arrayOriginal.length - 1; x >= 0; --x) {
        let ao = arrayOriginal[x];
        let an = arrayNew[x];
        //quick match
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
    //merge and add
    for (let x = 0; x < arrayNew.length; ++x) {
        let ao = arrayOriginal[x];
        let an = arrayNew[x];
        let found = false;
        //try by index match first, may to near identical arrays
        if (ao && dataKeysMatch(ao, an, idKeys)) {
            mergeObjects(ao, an);
            continue;
        }
        //try to match by loop against loop
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
        //not found, add to array
        //arrayOriginal.unshift(an)
        arrayOriginal.splice(x, 0, an);
    }
}
function mergeObjects(ao, an) {
    for (let x in ao) {
        delete ao[x];
    }
    Object.assign(ao, an);
}

const string = "<div style=\"width:100%;top:0;z-index:1\" [style.position]=\"currentPosition\"><ng-content></ng-content></div><div [style.height.px]=\"fillHeight\"></div>";

class ScrollPastFixed {
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
        Promise.resolve().then(() => this.init()); //prevent Expression has changed after it was checked error
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
}
ScrollPastFixed.decorators = [
    { type: Component, args: [{
                selector: 'scroll-past-fixed',
                template: string
            },] }
];
ScrollPastFixed.ctorParameters = () => [
    { type: ElementRef }
];
ScrollPastFixed.propDecorators = {
    template: [{ type: ViewChild, args: ['template',] }]
};
function getDistanceFromTop(element) {
    let yPos = 0;
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
class FxOn {
    constructor(element) {
        this.element = element;
        this.fxThen = new EventEmitter();
        //an array to be used in #FxOn refs for fx selectable options (see examples)
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
}
FxOn.decorators = [
    { type: Directive, args: [{
                selector: "[fxOn]",
                exportAs: "FxOn"
            },] }
];
FxOn.ctorParameters = () => [
    { type: ElementRef }
];
FxOn.propDecorators = {
    fxOn: [{ type: Input }],
    fxClass: [{ type: Input }],
    fxForMs: [{ type: Input }],
    fxThen: [{ type: Output }]
};
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

/** runs shake instructions when condition returns a truthy value */
class ShakeOn {
    constructor(element) {
        this.element = element;
        this.shakeConstant = false;
        this.shakeThen = new EventEmitter();
        //an array to be used in #ShakeOn refs for fx selectable options (see examples)
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
                    removeClass(this.element.nativeElement, pv);
                }
                this.applyType();
            }
            else {
                this.removeType();
            }
        }
    }
    onFalse() {
        removeClass(this.element.nativeElement, 'shake-constant');
        this.removeType();
        if (this.timeout) {
            clearTimeout(this.timeout);
            delete this.timeout;
        }
    }
    removeType() {
        removeClass(this.element.nativeElement, this.shakeType || 'shake-slow');
    }
    applyType() {
        addClass(this.element.nativeElement, this.shakeType || 'shake-slow');
    }
    onTrue() {
        addClass(this.element.nativeElement, 'shake-constant');
        this.applyType();
        if (!this.shakeConstant) {
            this.timeout = setTimeout(() => {
                //$scope.shakeOnController.shakeOn = false
                this.onFalse();
                this.shakeThen.emit(this);
            }, this.shakeForMs);
        }
    }
}
ShakeOn.decorators = [
    { type: Directive, args: [{
                selector: "[shakeOn]",
                exportAs: "ShakeOn"
            },] }
];
ShakeOn.ctorParameters = () => [
    { type: ElementRef }
];
ShakeOn.propDecorators = {
    shakeConstant: [{ type: Input }],
    shakeOn: [{ type: Input }],
    shakeForMs: [{ type: Input }],
    shakeType: [{ type: Input }],
    shakeThen: [{ type: Output }]
};

class FocusOn {
    constructor(element) {
        this.element = element;
        this.focusOnDelay = 0;
        this.focusThen = new EventEmitter();
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
}
FocusOn.decorators = [
    { type: Directive, args: [{
                selector: '[focusOn]'
            },] }
];
FocusOn.ctorParameters = () => [
    { type: ElementRef }
];
FocusOn.propDecorators = {
    focusOn: [{ type: Input }],
    focusOnDelay: [{ type: Input }],
    focusThen: [{ type: Output }]
};

class InitDirective {
    constructor() {
        this.init = new EventEmitter();
    }
    ngOnInit() {
        this.init.emit();
    }
}
InitDirective.decorators = [
    { type: Directive, args: [{
                selector: '[init]'
            },] }
];
InitDirective.propDecorators = {
    init: [{ type: Output }]
};

class ContentModel {
    constructor(elm) {
        this.elm = elm;
        this.changeDone = new EventEmitter();
        this.inputChange = new EventEmitter();
        // Below, avoid using (contentModelChange) ... use (inputChange) instead
        this.contentModelChange = new EventEmitter();
        this.enter = new EventEmitter(); // fires when enter key used
        this.hasFocusChange = new EventEmitter(); // fires when enter key used
        this.recentInputs = 0; // check in/out user input to prevent updating content right after user input
        this.elm.nativeElement.setAttribute('contenteditable', true);
    }
    ngOnDestroy() {
        this.elm.nativeElement.removeAttribute('contenteditable');
    }
    ngOnChanges() {
        const nElm = this.elm.nativeElement;
        // do not redraw if we are currently changing the input
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
        // enter key treatment
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
        // Below, caused focus loss blur because the model updates and causes redraw so now we use this.recentInputs
        this.inputChange.emit(this.contentModel);
    }
    updateValue() {
        this.contentModel = this.elm.nativeElement.textContent;
        this.contentModelChange.emit(this.contentModel);
        // only update this onblur and focus
        // this.lastValue = this.contentModel
    }
    onFocus() {
        this.hasFocusChange.emit(this.hasFocus = true);
        this.lastValue = this.contentModel;
        this.evalPlaceholder('');
        /* 10-12: moved into keydown check
        this.checkPlaceholder();
        */
    }
    checkPlaceholder() {
        if (this.placeholder && this.elm.nativeElement.textContent === this.placeholder) {
            this.elm.nativeElement.textContent = '';
        }
    }
    onBlur() {
        if (this.lastValue !== this.elm.nativeElement.textContent) {
            this.lastValue = this.elm.nativeElement.textContent; // now update it
            this.updateValue(); // we have to emit here for change otherwise keyboard blur caused during key changes
            this.changeDone.emit(this.contentModel);
        }
        this.evalPlaceholder();
        this.hasFocusChange.emit(this.hasFocus = false);
    }
}
ContentModel.decorators = [
    { type: Directive, args: [{
                selector: '[contentModel]'
            },] }
];
ContentModel.ctorParameters = () => [
    { type: ElementRef }
];
ContentModel.propDecorators = {
    changeDone: [{ type: Output }],
    contentModel: [{ type: Input }],
    inputChange: [{ type: Output }],
    contentModelChange: [{ type: Output }],
    placeholder: [{ type: Input }],
    maxLength: [{ type: Input }],
    enterEnds: [{ type: Input }],
    enter: [{ type: Output }],
    hasFocus: [{ type: Input }],
    hasFocusChange: [{ type: Output }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    onInput: [{ type: HostListener, args: ['input',] }],
    onFocus: [{ type: HostListener, args: ['focus',] }],
    onBlur: [{ type: HostListener, args: ['blur',] }]
};
function cancelEvent(event) {
    event.preventDefault();
    event.stopPropagation();
}

class SelectOn {
    constructor(element) {
        this.element = element;
        this.selectOnDelay = 0;
        this.selectThen = new EventEmitter();
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
}
SelectOn.decorators = [
    { type: Directive, args: [{
                selector: '[selectOn]'
            },] }
];
SelectOn.ctorParameters = () => [
    { type: ElementRef }
];
SelectOn.propDecorators = {
    selectOn: [{ type: Input }],
    selectOnDelay: [{ type: Input }],
    selectThen: [{ type: Output }]
};

class InnerHtmlModel {
    constructor(element) {
        this.element = element;
        this.innerHtmlModelChange = new EventEmitter();
        this.observer = new MutationObserver(() => this.setModel());
        const config = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };
        this.observer.observe(this.element.nativeElement, config);
        //this.element.nativeElement.addEventListener("mouseup",()=>this.setModel())
        //this.element.nativeElement.addEventListener("keyup",()=>this.setModel())
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
}
InnerHtmlModel.decorators = [
    { type: Directive, args: [{
                selector: '[innerHtmlModel]'
            },] }
];
InnerHtmlModel.ctorParameters = () => [
    { type: ElementRef }
];
InnerHtmlModel.propDecorators = {
    innerHtmlModel: [{ type: Input }],
    innerHtmlModelChange: [{ type: Output }]
};

class ReplaceModel {
    constructor() {
        this.replaceModelChange = new EventEmitter();
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
        //no change, nothing to do
        if (oldModel === newModel) {
            return;
        }
        this.replaceModel = newModel;
        this.replaceModelChange.emit(this.replaceModel);
    }
}
ReplaceModel.decorators = [
    { type: Directive, args: [{
                selector: '[replaceModel]'
            },] }
];
ReplaceModel.propDecorators = {
    replaceModel: [{ type: Input }],
    replaceModelChange: [{ type: Output }],
    replaceExpression: [{ type: Input }]
};

class ElementSizeModel {
    constructor(element) {
        this.element = element;
        this.elementSizeModelChange = new EventEmitter();
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
}
ElementSizeModel.decorators = [
    { type: Directive, args: [{
                selector: '[elementSizeModel]'
            },] }
];
ElementSizeModel.ctorParameters = () => [
    { type: ElementRef }
];
ElementSizeModel.propDecorators = {
    elementSizeModelWatch: [{ type: Input }],
    elementSizeModel: [{ type: Input }],
    elementSizeModelChange: [{ type: Output }]
};
class ElementHeightModel extends ElementSizeModel {
    constructor(element) {
        super(element);
        this.element = element;
        this.elementHeightModelChange = new EventEmitter();
    }
    setModel() {
        this.elementHeightModel = this.element.nativeElement.offsetHeight;
        this.elementHeightModelChange.emit(this.elementHeightModel);
    }
}
ElementHeightModel.decorators = [
    { type: Directive, args: [{
                selector: '[elementHeightModel]'
            },] }
];
ElementHeightModel.ctorParameters = () => [
    { type: ElementRef }
];
ElementHeightModel.propDecorators = {
    elementHeightModel: [{ type: Input }],
    elementHeightModelChange: [{ type: Output }]
};
class ElementWidthModel extends ElementSizeModel {
    constructor(element) {
        super(element);
        this.element = element;
        this.elementWidthModelChange = new EventEmitter();
    }
    setModel() {
        this.elementWidthModel = this.element.nativeElement.offsetWidth;
        this.elementWidthModelChange.emit(this.elementWidthModel);
    }
}
ElementWidthModel.decorators = [
    { type: Directive, args: [{
                selector: '[elementWidthModel]',
                exportAs: 'ElementWidthModel'
            },] }
];
ElementWidthModel.ctorParameters = () => [
    { type: ElementRef }
];
ElementWidthModel.propDecorators = {
    elementWidthModel: [{ type: Input }],
    elementWidthModelChange: [{ type: Output }]
};

class ScreenScrollHeightDiff {
    constructor() {
        this.screenScrollHeightDiffChange = new EventEmitter();
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
}
ScreenScrollHeightDiff.decorators = [
    { type: Directive, args: [{
                selector: '[screenScrollHeightDiff]'
            },] }
];
ScreenScrollHeightDiff.ctorParameters = () => [];
ScreenScrollHeightDiff.propDecorators = {
    screenScrollHeightDiff: [{ type: Input }],
    screenScrollHeightDiffChange: [{ type: Output }]
};

class ScreenScroll {
    constructor() {
        this.screenScroll = new EventEmitter();
        this.onScroll = () => this.screenScroll.emit({ x: window['pageXOffset'], y: window['pageYOffset'] });
        this.onScroll();
        window.addEventListener("scroll", this.onScroll);
    }
    ngOnInit() {
        Promise.resolve().then(() => this.onScroll()); //two way bind often needs init override
    }
    ngOnDestroy() {
        window.removeEventListener("scroll", this.onScroll);
    }
}
ScreenScroll.decorators = [
    { type: Directive, args: [{
                selector: '[screenScroll]'
            },] }
];
ScreenScroll.ctorParameters = () => [];
ScreenScroll.propDecorators = {
    screenScroll: [{ type: Output }]
};

class PxFromHtmlTop {
    constructor(ElementRef) {
        this.ElementRef = ElementRef;
        this.numberChange = new EventEmitter();
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
        this.number = top; // || 0
        //this.number = getOffset( this.ElementRef.nativeElement ).top
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
}
PxFromHtmlTop.decorators = [
    { type: Directive, args: [{
                selector: "[pxFromHtmlTop]",
                exportAs: "PxFromHtmlTop"
            },] }
];
PxFromHtmlTop.ctorParameters = () => [
    { type: ElementRef }
];
PxFromHtmlTop.propDecorators = {
    number: [{ type: Input, args: ["pxFromHtmlTop",] }],
    numberChange: [{ type: Output, args: ["pxFromHtmlTopChange",] }],
    watch: [{ type: Input }]
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

class ScreenScrollModelY {
    constructor() {
        this.screenScrollModelYChange = new EventEmitter();
        this.onScroll = () => {
            this.screenScrollModelY = window['pageYOffset'];
            this.screenScrollModelYChange.emit(this.screenScrollModelY);
        };
        this.onScroll();
        window.addEventListener("scroll", this.onScroll);
    }
    ngOnInit() {
        Promise.resolve().then(() => this.onScroll()); //two way bind often needs init override
    }
    ngOnDestroy() {
        window.removeEventListener("scroll", this.onScroll);
    }
}
ScreenScrollModelY.decorators = [
    { type: Directive, args: [{
                selector: '[screenScrollModelY]',
                exportAs: 'ScreenScrollModelY'
            },] }
];
ScreenScrollModelY.ctorParameters = () => [];
ScreenScrollModelY.propDecorators = {
    screenScrollModelY: [{ type: Input }],
    screenScrollModelYChange: [{ type: Output }]
};

class ScreenWidthModel {
    constructor(HtmlSizeService) {
        this.HtmlSizeService = HtmlSizeService;
        this.screenWidthModelChange = new EventEmitter();
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
}
ScreenWidthModel.decorators = [
    { type: Directive, args: [{
                selector: '[screenWidthModel]'
            },] }
];
ScreenWidthModel.ctorParameters = () => [
    { type: 
        //htmlSize,
        HtmlSizeService }
];
ScreenWidthModel.propDecorators = {
    screenWidthModel: [{ type: Input }],
    screenWidthModelChange: [{ type: Output }]
};

class ScreenHeightModel {
    constructor(HtmlSizeService) {
        this.HtmlSizeService = HtmlSizeService;
        this.modelChange = new EventEmitter();
        this.sub = this.HtmlSizeService.change.subscribe(() => this.changed());
        this.HtmlSizeService.checkWatchers();
    }
    ngAfterViewInit() {
        Promise.resolve().then(() => this.updateModel());
        this.delayCheck(250);
        this.delayCheck(1500);
    }
    delayCheck(num = 0) {
        setTimeout(() => this.updateModel(), num); //two way bind often needs init override
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
}
ScreenHeightModel.decorators = [
    { type: Directive, args: [{
                selector: '[screenHeightModel]',
                exportAs: 'ScreenHeightModel'
            },] }
];
ScreenHeightModel.ctorParameters = () => [
    { type: 
        //htmlSize,
        HtmlSizeService }
];
ScreenHeightModel.propDecorators = {
    model: [{ type: Input, args: ['screenHeightModel',] }],
    modelChange: [{ type: Output, args: ['screenHeightModelChange',] }]
};

class HtmlWidthModel {
    constructor(HtmlSizeService) {
        this.HtmlSizeService = HtmlSizeService;
        this.htmlWidthModelChange = new EventEmitter();
        this.sub = this.HtmlSizeService.change.subscribe(() => this.changed());
        this.HtmlSizeService.checkWatchers();
        /*if( this.HtmlSizeService.htmlSize ){
          this.changed()
        }*/
    }
    ngAfterViewInit() {
        Promise.resolve().then(() => this.changed()); //two way bind often needs init override
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
}
HtmlWidthModel.decorators = [
    { type: Directive, args: [{
                selector: '[htmlWidthModel]'
            },] }
];
HtmlWidthModel.ctorParameters = () => [
    { type: HtmlSizeService }
];
HtmlWidthModel.propDecorators = {
    htmlWidthModel: [{ type: Input }],
    htmlWidthModelChange: [{ type: Output }]
};

//import { Subscription } from "rxjs/internal/Subscription"
class HtmlHeightModel extends HtmlWidthModel {
    constructor(HtmlSizeService) {
        super(HtmlSizeService);
        this.HtmlSizeService = HtmlSizeService;
        this.htmlHeightModelChange = new EventEmitter();
    }
    hasChanged() {
        return this.htmlHeightModel !== window.document.documentElement.clientHeight;
    }
    setModel(model) {
        this.htmlHeightModel = model.height;
        this.htmlHeightModelChange.emit(this.htmlHeightModel);
    }
}
HtmlHeightModel.decorators = [
    { type: Directive, args: [{
                selector: '[htmlHeightModel]'
            },] }
];
HtmlHeightModel.ctorParameters = () => [
    { type: HtmlSizeService }
];
HtmlHeightModel.propDecorators = {
    htmlHeightModel: [{ type: Input }],
    htmlHeightModelChange: [{ type: Output }]
};

class StatusOnlineModel {
    constructor() {
        this.statusOnlineModelChange = new EventEmitter();
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
}
StatusOnlineModel.decorators = [
    { type: Directive, args: [{ selector: '[statusOnlineModel]' },] }
];
StatusOnlineModel.ctorParameters = () => [];
StatusOnlineModel.propDecorators = {
    statusOnlineModel: [{ type: Input }],
    statusOnlineModelChange: [{ type: Output }]
};

class StatusOfflineModel {
    constructor() {
        this.statusOfflineModelChange = new EventEmitter();
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
}
StatusOfflineModel.decorators = [
    { type: Directive, args: [{ selector: '[statusOfflineModel]' },] }
];
StatusOfflineModel.ctorParameters = () => [];
StatusOfflineModel.propDecorators = {
    statusOfflineModel: [{ type: Input }],
    statusOfflineModelChange: [{ type: Output }]
};

class VarDirective {
    constructor() {
        this.changed = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.var) {
            Promise.resolve().then(() => this.changed.emit(this.var));
        }
    }
}
VarDirective.decorators = [
    { type: Directive, args: [{
                selector: "[var]",
                exportAs: "var"
            },] }
];
VarDirective.propDecorators = {
    var: [{ type: Input }],
    changed: [{ type: Output }]
};

class EnterKey {
    constructor(element) {
        this.element = element;
        this.enterKey = new EventEmitter();
        element.nativeElement.addEventListener('keydown', (event) => {
            var yesNo = [13, 10].indexOf(event.which || event.keyCode) >= 0;
            if (yesNo) {
                this.enterKey.emit(event);
            }
        });
    }
}
EnterKey.decorators = [
    { type: Directive, args: [{ selector: '[enterKey]' },] }
];
EnterKey.ctorParameters = () => [
    { type: ElementRef }
];
EnterKey.propDecorators = {
    enterKey: [{ type: Output }]
};
class EscapeKey {
    constructor(element) {
        this.element = element;
        this.escapeKey = new EventEmitter();
        element.nativeElement.addEventListener('keydown', (event) => {
            const code = event.which || event.keyCode;
            if (code == 27) {
                this.escapeKey.emit(event);
            }
        });
    }
}
EscapeKey.decorators = [
    { type: Directive, args: [{ selector: '[escapeKey]' },] }
];
EscapeKey.ctorParameters = () => [
    { type: ElementRef }
];
EscapeKey.propDecorators = {
    escapeKey: [{ type: Output }]
};
/** Disallow keyboard access to the backspace key */
class PreventBackKey {
    constructor(element) {
        this.element = element;
        this.preventBackKey = new EventEmitter();
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
}
PreventBackKey.decorators = [
    { type: Directive, args: [{ selector: '[preventBackKey]' },] }
];
PreventBackKey.ctorParameters = () => [
    { type: ElementRef }
];
PreventBackKey.propDecorators = {
    preventBackKey: [{ type: Output }]
};
/** Disallow keyboard access to the enter keys */
class PreventEnterKey {
    constructor(element) {
        this.element = element;
        this.preventEnterKey = new EventEmitter();
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
}
PreventEnterKey.decorators = [
    { type: Directive, args: [{ selector: '[preventEnterKey]' },] }
];
PreventEnterKey.ctorParameters = () => [
    { type: ElementRef }
];
PreventEnterKey.propDecorators = {
    preventEnterKey: [{ type: Output }]
};
class InputHint {
    constructor() {
        this.hintStyle = { 'font-size': '75%', 'color': '#BBB' };
    }
}
InputHint.decorators = [
    { type: Component, args: [{
                selector: 'input-hint',
                template: '<div style="position:relative;" [ngStyle]="hintStyle"><div style="position:absolute;top:0;width:100%"><ng-content></ng-content></div></div>'
            },] }
];
InputHint.propDecorators = {
    hintStyle: [{ type: Input }]
};
/** adds form element onchange listener via addEventListener('change') that calls formChanged scope argument */
class FormChanged {
    constructor(element) {
        this.element = element;
        this.formChanged = new EventEmitter();
        this.onChange = (event) => {
            this.formChanged.emit(event);
        };
        element.nativeElement.addEventListener('change', this.onChange);
    }
    ngOnDestroy() {
        this.element.nativeElement.removeEventListener('change', this.onChange);
    }
}
FormChanged.decorators = [
    { type: Directive, args: [{
                selector: '[formChanged]' //Also try : (formAlter) directive that watches the form "input" event
            },] }
];
FormChanged.ctorParameters = () => [
    { type: ElementRef }
];
FormChanged.propDecorators = {
    formChanged: [{ type: Output }]
};
/** when ever change or input form event triggered, bindings are called */
class FormAlter {
    constructor(element) {
        this.element = element;
        this.formAlter = new EventEmitter();
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
}
FormAlter.decorators = [
    { type: Directive, args: [{
                selector: '[formAlter]'
            },] }
];
FormAlter.ctorParameters = () => [
    { type: ElementRef }
];
FormAlter.propDecorators = {
    formAlter: [{ type: Output }]
};

//COMPONENTS
const screenDirectives = [
    ScreenScrollModelY,
    ScreenWidthModel,
    ScreenHeightModel,
    ScreenScroll,
    ScrollPastFixed,
    ScreenScrollHeightDiff,
    PxFromHtmlTop
];
const declarations$2 = [
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
    PreventEnterKey,
    ...screenDirectives,
    HtmlWidthModel,
    HtmlHeightModel,
    ShakeOn,
    FxOn,
    StatusOnlineModel,
    StatusOfflineModel,
    ElementSizeModel,
    ElementWidthModel,
    ElementHeightModel,
    InputHint,
    //components
    ...declarations$3,
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
];
// export default declarations

/* ONLY THIS FILE */
class IndexTrack {
    transform(_x) {
        return function (index) { return index; };
    }
}
IndexTrack.decorators = [
    { type: Pipe, args: [{ name: 'indexTrack' },] }
];
class Stringify {
    transform(input, spaces = 0) {
        return JSON.stringify(input, null, spaces);
    }
}
Stringify.decorators = [
    { type: Pipe, args: [{ name: 'stringify' },] }
];
class ForceArray {
    transform(input, repeat, repeatValue) {
        return array(input, repeat, repeatValue);
    }
}
ForceArray.decorators = [
    { type: Pipe, args: [{ name: 'array' },] }
];
class ArrayOfObjects {
    transform(input, repeat, repeatValue) {
        return arrayOfObjects(input, repeat, repeatValue);
    }
}
ArrayOfObjects.decorators = [
    { type: Pipe, args: [{ name: 'arrayOfObjects' },] }
];
class SafeUrl {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(input) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(input);
    }
}
SafeUrl.decorators = [
    { type: Pipe, args: [{ name: 'safeUrl' },] }
];
SafeUrl.ctorParameters = () => [
    { type: 
        //SafeHtml as SafeHtmler,//must be exported for AOT
        //SafeStyle as SafeStyler,//must be exported for AOT
        //SafeResourceUrl,
        DomSanitizer }
];
class NumberWord {
    constructor() { }
    transform(input, number) {
        return input + (number && number == 1 ? '' : 's');
    }
}
NumberWord.decorators = [
    { type: Pipe, args: [{ name: 'numberWord' },] }
];
NumberWord.ctorParameters = () => [];
class EndNumberWord {
    constructor() { }
    transform(input) {
        return input && input == 1 ? '' : 's';
    }
}
EndNumberWord.decorators = [
    { type: Pipe, args: [{ name: 'endNumberWord' },] }
];
EndNumberWord.ctorParameters = () => [];
class SafeHtml {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(input) {
        return this.domSanitizer.bypassSecurityTrustHtml(input);
    }
}
SafeHtml.decorators = [
    { type: Pipe, args: [{ name: 'safeHtml' },] }
];
SafeHtml.ctorParameters = () => [
    { type: 
        //SafeHtml as SafeHtmler,//must be exported for AOT
        //SafeStyle as SafeStyler,//must be exported for AOT
        //SafeResourceUrl,
        DomSanitizer }
];
class SafeStyle {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(input) {
        return this.domSanitizer.bypassSecurityTrustStyle(input);
    }
}
SafeStyle.decorators = [
    { type: Pipe, args: [{ name: 'safeStyle' },] }
];
SafeStyle.ctorParameters = () => [
    { type: 
        //SafeHtml as SafeHtmler,//must be exported for AOT
        //SafeStyle as SafeStyler,//must be exported for AOT
        //SafeResourceUrl,
        DomSanitizer }
];
/* end: only this file */
/** (input>=a && input<=b) || (input>=b && input<=a) */
class Between {
    transform(input, a, b) {
        return between(input, a, b);
    }
}
Between.decorators = [
    { type: Pipe, args: [{ name: 'between' },] }
];
class ReplaceMaxLength {
    transform(input, max, replacement) {
        return replaceMaxLength(input, max, replacement);
    }
}
ReplaceMaxLength.decorators = [
    { type: Pipe, args: [{ name: 'replaceMaxLength' },] }
];
/** use with bypassSecurityTrustResourceUrl for href */
class TextDownload {
    transform(input) { return textDownload(input); }
}
TextDownload.decorators = [
    { type: Pipe, args: [{ name: 'textDownload' },] }
];
class NumberToPhone {
    transform(input) {
        return numberToPhone(input);
    }
}
NumberToPhone.decorators = [
    { type: Pipe, args: [{ name: 'numberToPhone' },] }
];
class toNumber {
    transform(input) { return toNumber$1(input); }
}
toNumber.decorators = [
    { type: Pipe, args: [{ name: 'toNumber' },] }
];
class NumberSuffix {
    transform(input, rtnInput) {
        return numberSuffix(input, rtnInput);
    }
}
NumberSuffix.decorators = [
    { type: Pipe, args: [{ name: 'numberSuffix' },] }
];
class MarkdownAnchor {
    transform(input) { return markdownAnchor(input); }
}
MarkdownAnchor.decorators = [
    { type: Pipe, args: [{ name: 'markdownAnchor' },] }
];
class Capitalize {
    transform(input) { return capitalize(input); }
}
Capitalize.decorators = [
    { type: Pipe, args: [{ name: 'capitalize' },] }
];
class CapitalizeWords {
    transform(input) { return capitalizeWords(input); }
}
CapitalizeWords.decorators = [
    { type: Pipe, args: [{ name: 'capitalizeWords' },] }
];
class Yesno {
    transform(input) { return yesno(input); }
}
Yesno.decorators = [
    { type: Pipe, args: [{ name: 'yesno' },] }
];
class YesNo {
    transform(input) { return yesNo(input); }
}
YesNo.decorators = [
    { type: Pipe, args: [{ name: 'YesNo' },] }
];
class BooleanPipe {
    transform(input) { return boolean(input); }
}
BooleanPipe.decorators = [
    { type: Pipe, args: [{ name: 'boolean' },] }
];
class Bit {
    transform(input) { return bit(input); }
}
Bit.decorators = [
    { type: Pipe, args: [{ name: 'bit' },] }
];
//get and return all numbers inside a string
class Numbers {
    transform(input) { return numbers(input); }
}
Numbers.decorators = [
    { type: Pipe, args: [{ name: 'numbers' },] }
];
class ADate {
    transform(...args) { return aDate.apply(aDate, args); }
}
ADate.decorators = [
    { type: Pipe, args: [{ name: 'aDate' },] }
];
class AMath {
    transform(...args) { return aMath.apply(aMath, args); }
}
AMath.decorators = [
    { type: Pipe, args: [{ name: 'aMath' },] }
];
class AString {
    transform(...args) { return aString.apply(aString, args); }
}
AString.decorators = [
    { type: Pipe, args: [{ name: 'aString' },] }
];
class ATime {
    transform(...args) { return aTime.apply(aTime, args); }
}
ATime.decorators = [
    { type: Pipe, args: [{ name: 'aTime' },] }
];
class Ack {
    transform(...args) { return ack.apply(ack, args); }
}
Ack.decorators = [
    { type: Pipe, args: [{ name: 'ack' },] }
];
class Keys {
    transform(input) {
        const type = typeof (input) == 'object';
        const isOb = input && type;
        const isArray = isOb && input.constructor == Array;
        if (isArray) {
            return input.map((_value, index) => index);
        }
        return input ? Object.keys(input) : [];
    }
}
Keys.decorators = [
    { type: Pipe, args: [{ name: 'keys' },] }
];
class TypeofPipe {
    transform(input) { return typeof (input); }
}
TypeofPipe.decorators = [
    { type: Pipe, args: [{ name: 'typeof' },] }
];
class ConsolePipe {
    transform() {
        return console.log.apply(console, arguments);
    }
}
ConsolePipe.decorators = [
    { type: Pipe, args: [{ name: 'console' },] }
];
const declarations$1 = [
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

const declarations = [...declarations$2, ...declarations$1];
class AckModule {
    static forRoot() {
        return {
            ngModule: AckModule, providers: providers$1,
        };
    }
}
AckModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations, providers: providers$1,
                exports: declarations
            },] }
];
// export default AckModule

//import { StateService,TransitionService,Transition } from "ui-router-ng2";
/** A stateful connection to ui-router history
 - .stateChange() with arguments MUST be called at every state change
 - Has 99% accuracy of knowing if OS back or forward button has been used
   - Their is no web event for knowing if OS button is used.
*/
class RouteWatchReporter {
    constructor(router, activatedRoute) {
        this.router = router;
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
        router.events.subscribe(event => {
            if (event.constructor == NavigationEnd) {
                //const params = {}//COMING REALLY SOON
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
            //const $state = this.$state()
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
        //$document.addEventListener('mouseover', callbacks.mouseover)
        $document.addEventListener('mousedown', callbacks.isNotBackButton);
    }
    unwatchDocByCallbacks($document, callbacks) {
        $document.removeEventListener('mouseout', callbacks.isBackButton);
        $document.removeEventListener('mouseover', callbacks.isNotBackButton);
        $document.removeEventListener('mousedown', callbacks.isNotBackButton);
    }
}
RouteWatchReporter.decorators = [
    { type: Injectable }
];
RouteWatchReporter.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute }
];
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

class RouteHistory {
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
            if (event.constructor === NavigationEnd) {
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
        //remove old entries
        while (this.routeHistory.length > this.maxHistory) {
            //this.routeHistory.shift()
            this.routeHistory.pop();
        }
        //this.routeHistory.push(this.Router.url)
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
        //++this.historyIndex
        const rh = this.routeHistory[this.historyIndex + 1];
        this.Router.navigate([rh]);
    }
    goForward() {
        if (this.historyIndex === 0)
            return;
        //--this.historyIndex
        const rh = this.routeHistory[this.historyIndex - 1];
        this.Router.navigate([rh]);
    }
}
RouteHistory.decorators = [
    { type: Injectable }
];
RouteHistory.ctorParameters = () => [
    { type: Router }
];

class RouteReporter {
    constructor(Router, RouteWatchReporter, ActivatedRoute) {
        this.Router = Router;
        this.RouteWatchReporter = RouteWatchReporter;
        this.ActivatedRoute = ActivatedRoute;
        this.stateChanger = new EventEmitter();
        this.beforeChanger = new EventEmitter();
        this.activatedChange = new EventEmitter();
        this.paramsChange = new EventEmitter();
        this.dataChange = new EventEmitter();
        this.queryChange = new EventEmitter();
        this.routeChange = new EventEmitter();
        this.parentRouteChange = new EventEmitter();
        this.parentChange = new EventEmitter();
        this.parentDataChange = new EventEmitter();
        this.stateChange = new EventEmitter();
        this.$document = document;
        this.apply();
    }
    ngOnInit() {
        this.docCallbacks = this.RouteWatchReporter.getDocumentCallbacks();
        this.RouteWatchReporter.router.events.subscribe(event => {
            //if(event.constructor == NavigationStart){}
            if (event.constructor === NavigationEnd) {
                this.beforeChanger.emit(this.RouteWatchReporter);
                //allow one process to occur before reporting state has changed
                this.apply();
                //this.addRouteToHistory()
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
    apply() {
        const current = getCurrentByActive(this.ActivatedRoute);
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
}
RouteReporter.decorators = [
    { type: Directive, args: [{
                selector: "route-reporter",
                exportAs: "RouteReporter"
            },] }
];
RouteReporter.ctorParameters = () => [
    { type: Router },
    { type: RouteWatchReporter },
    { type: ActivatedRoute }
];
RouteReporter.propDecorators = {
    onLoad: [{ type: Input }],
    stateChanger: [{ type: Output, args: ["onChange",] }],
    beforeChanger: [{ type: Output, args: ["beforeChange",] }],
    activated: [{ type: Input }],
    activatedChange: [{ type: Output }],
    params: [{ type: Input }],
    paramsChange: [{ type: Output }],
    data: [{ type: Input }],
    dataChange: [{ type: Output }],
    query: [{ type: Input }],
    queryChange: [{ type: Output }],
    route: [{ type: Input }],
    routeChange: [{ type: Output }],
    parentRoute: [{ type: Input }],
    parentRouteChange: [{ type: Output }],
    parent: [{ type: Input }],
    parentChange: [{ type: Output }],
    parentData: [{ type: Input }],
    parentDataChange: [{ type: Output }],
    current: [{ type: Input }],
    state: [{ type: Input }],
    stateChange: [{ type: Output }]
};

const providers = [RouteWatchReporter, RouteHistory];
class AckRouterModule {
    static forRoot() {
        return {
            ngModule: AckRouterModule,
            providers: providers
        };
    }
}
AckRouterModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule
                ],
                declarations: [RouteReporter],
                // providers:providers,
                exports: [
                    RouteReporter,
                    RouterModule
                ]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { AckApp, AckArray, AckModule, AckRouterModule, DocumentService, ErrorLog, HtmlSizeService, Log, Prompts, RouteWatchReporter, UrlVars, WindowService, declarations$2 as components, declarations$1 as pipes, providers$1 as providers, providers as ɵa, screenDirectives as ɵb, AMath as ɵba, AString as ɵbb, ATime as ɵbc, Ack as ɵbd, Keys as ɵbe, TypeofPipe as ɵbf, ConsolePipe as ɵbg, InitDirective as ɵbh, SelectOn as ɵbi, FocusOn as ɵbj, VarDirective as ɵbk, ContentModel as ɵbl, InnerHtmlModel as ɵbm, ReplaceModel as ɵbn, EnterKey as ɵbo, EscapeKey as ɵbp, PreventBackKey as ɵbq, PreventEnterKey as ɵbr, InputHint as ɵbs, FormChanged as ɵbt, FormAlter as ɵbu, ScreenScrollModelY as ɵbv, ScreenWidthModel as ɵbw, ScreenHeightModel as ɵbx, ScreenScroll as ɵby, ScrollPastFixed as ɵbz, IndexTrack as ɵc, string as ɵca, ScreenScrollHeightDiff as ɵcb, PxFromHtmlTop as ɵcc, HtmlWidthModel as ɵcd, HtmlHeightModel as ɵce, ShakeOn as ɵcf, FxOn as ɵcg, StatusOnlineModel as ɵch, StatusOfflineModel as ɵci, ElementSizeModel as ɵcj, ElementHeightModel as ɵck, ElementWidthModel as ɵcl, DebugItem as ɵcm, DebugArea as ɵcn, declarations$3 as ɵco, string$1 as ɵcp, ErrorWell as ɵcq, string$3 as ɵcr, AbsoluteOverflowX as ɵcs, string$4 as ɵct, ReaderHeaderBody as ɵcu, ReaderHeader as ɵcv, ReaderBody as ɵcw, string$2 as ɵcx, AckCloseIcon as ɵcy, AckSections as ɵcz, Stringify as ɵd, string$8 as ɵda, SectionProvider as ɵdb, AckSectionTemplates as ɵdc, AckOptions as ɵdd, string$6 as ɵde, AckOptionsModal as ɵdf, string$5 as ɵdg, AckModal as ɵdh, AckModalLayout as ɵdi, AckAggregate as ɵdj, AckFixedElement as ɵdk, AckFixedElementStage as ɵdl, string$7 as ɵdm, RouteReporter as ɵdn, RouteHistory as ɵdo, ForceArray as ɵe, ArrayOfObjects as ɵf, SafeUrl as ɵg, NumberWord as ɵh, EndNumberWord as ɵi, SafeHtml as ɵj, SafeStyle as ɵk, Between as ɵl, ReplaceMaxLength as ɵm, TextDownload as ɵn, NumberToPhone as ɵo, toNumber as ɵp, NumberSuffix as ɵq, MarkdownAnchor as ɵr, Capitalize as ɵs, CapitalizeWords as ɵt, Yesno as ɵu, YesNo as ɵv, BooleanPipe as ɵw, Bit as ɵx, Numbers as ɵy, ADate as ɵz };
//# sourceMappingURL=ack-angular.js.map

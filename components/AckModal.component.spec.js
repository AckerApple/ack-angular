import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AckModule } from '../AckModule';
import * as i0 from "@angular/core";
import * as i1 from "./AckModal.component";
import * as i2 from "../AckModule";
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
    }
    ContainerComponent.ɵfac = function ContainerComponent_Factory(t) { return new (t || ContainerComponent)(); };
    ContainerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContainerComponent, selectors: [["container"]], decls: 1, vars: 0, template: function ContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "ack-modal");
        } }, directives: [i1.AckModal], encapsulation: 2 });
    return ContainerComponent;
}());
export { ContainerComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContainerComponent, [{
        type: Component,
        args: [{
                selector: 'container',
                template: '<ack-modal></ack-modal>'
            }]
    }], null, null); })();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
    AppModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule });
    AppModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[BrowserAnimationsModule, AckModule.forRoot()]] });
    return AppModule;
}());
export { AppModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                imports: [BrowserAnimationsModule, AckModule.forRoot()],
                declarations: [ContainerComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [ContainerComponent], imports: [BrowserAnimationsModule, i2.AckModule] }); })();
describe('ack-modal', function () {
    var fixture;
    var component;
    beforeEach(function (done) {
        TestBed.configureTestingModule({ imports: [AppModule] });
        TestBed.compileComponents()
            .then(function () {
            fixture = TestBed.createComponent(ContainerComponent);
            fixture.detectChanges();
            component = fixture.componentInstance;
        })
            .then(function () { return new Promise(function (res, rej) {
            return setTimeout(function () { return res(1); }, 0);
        }); }) //tick for process
            .then(done).catch(done.fail);
    });
    it('inits', function () {
        expect(fixture).not.toBeNull();
        expect(component).not.toBeNull();
        //expect(component.AckModal).not.toBeNull()
    });
});
//# sourceMappingURL=AckModal.component.spec.js.map
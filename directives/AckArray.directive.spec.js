import { Component, NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AckModule } from '../AckModule';
import * as i0 from "@angular/core";
import * as i1 from "./AckArray.directive";
import * as i2 from "../AckModule";
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
    }
    ContainerComponent.ɵfac = function ContainerComponent_Factory(t) { return new (t || ContainerComponent)(); };
    ContainerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContainerComponent, selectors: [["container"]], decls: 2, vars: 0, consts: [["AckArray", "AckArray"]], template: function ContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "ack-array", null, 0);
        } }, directives: [i1.AckArray], encapsulation: 2 });
    return ContainerComponent;
}());
export { ContainerComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContainerComponent, [{
        type: Component,
        args: [{
                selector: 'container',
                //template:'none'
                template: '<ack-array #AckArray="AckArray"></ack-array>'
            }]
    }], null, null); })();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
    AppModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule });
    AppModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
                AckModule.forRoot()
            ]] });
    return AppModule;
}());
export { AppModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                imports: [
                    AckModule.forRoot()
                ],
                declarations: [ContainerComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [ContainerComponent], imports: [i2.AckModule] }); })();
describe('ack-array', function () {
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
            .then(function () { return new Promise(function (res, rej) { return setTimeout(function () { return res(null); }, 0); }); }) // tick for #AckArray to process
            .then(done).catch(done.fail);
    });
    it('inits', function () {
        expect(fixture).not.toBeNull();
        expect(component).not.toBeNull();
        expect(component.AckArray).not.toBeNull();
    });
    it('#itemIndex', function () {
        var ackArray = component.AckArray;
        ackArray.idKey = 'caregiver_id';
        ackArray.array = [{ caregiver_id: 1 }, { caregiver_id: 2 }, { caregiver_id: 3 }];
        var itemIndex = ackArray.itemIndex({ id: 3 }, 'id');
        expect(itemIndex).toEqual(2);
    });
    it('#toggleSort', function () {
        var ackArray = component.AckArray;
        ackArray.array = [{ name: 4 }, { name: 3 }, { name: 2 }, { name: 1 }];
        ackArray.toggleSort("name", 1);
        expect(ackArray.array[0].name).toEqual(1);
        expect(ackArray.array[1].name).toEqual(2);
        expect(ackArray.array[2].name).toEqual(3);
        expect(ackArray.array[3].name).toEqual(4);
    });
});
//# sourceMappingURL=AckArray.directive.spec.js.map
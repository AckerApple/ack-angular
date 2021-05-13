"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = exports.ContainerComponent = void 0;
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var AckModule_1 = require("../AckModule");
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
    }
    ContainerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'container',
                    template: '<ack-modal></ack-modal>'
                },] }
    ];
    return ContainerComponent;
}());
exports.ContainerComponent = ContainerComponent;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [animations_1.BrowserAnimationsModule, AckModule_1.AckModule.forRoot()],
                    declarations: [ContainerComponent]
                },] }
    ];
    return AppModule;
}());
exports.AppModule = AppModule;
describe('ack-modal', function () {
    var fixture;
    var component;
    beforeEach(function (done) {
        testing_1.TestBed.configureTestingModule({ imports: [AppModule] });
        testing_1.TestBed.compileComponents()
            .then(function () {
            fixture = testing_1.TestBed.createComponent(ContainerComponent);
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AckModule } from '../AckModule';
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
    }
    ContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'container',
                    template: '<ack-modal></ack-modal>'
                },] }
    ];
    return ContainerComponent;
}());
export { ContainerComponent };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    imports: [BrowserAnimationsModule, AckModule.forRoot()],
                    declarations: [ContainerComponent]
                },] }
    ];
    return AppModule;
}());
export { AppModule };
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
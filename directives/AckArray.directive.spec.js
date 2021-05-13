"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = exports.ContainerComponent = void 0;
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var AckModule_1 = require("../AckModule");
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
    }
    ContainerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'container',
                    //template:'none'
                    template: '<ack-array #AckArray="AckArray"></ack-array>'
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
                    imports: [
                        AckModule_1.AckModule.forRoot()
                    ],
                    declarations: [ContainerComponent]
                },] }
    ];
    return AppModule;
}());
exports.AppModule = AppModule;
describe('ack-array', function () {
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
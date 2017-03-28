"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { StateService } from "ui-router-ng2";
var core_1 = require("@angular/core");
var StateDef = (function () {
    //public routerState:any
    //public parameters:any = [[StateService]]
    //constructor(public stateService: StateService){
    function StateDef() {
        //this.routerState = stateService
        //this.routerState.current = {name:name}
    }
    return StateDef;
}());
exports.StateDef = StateDef;
var Overview = (function (_super) {
    __extends(Overview, _super);
    function Overview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Overview;
}(StateDef));
Overview = __decorate([
    core_1.Component({ template: '' })
], Overview);
exports.Overview = Overview;
var Components = (function (_super) {
    __extends(Components, _super);
    function Components() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Components;
}(StateDef));
Components = __decorate([
    core_1.Component({ template: '' })
], Components);
exports.Components = Components;
var Pipes = (function (_super) {
    __extends(Pipes, _super);
    function Pipes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Pipes;
}(StateDef));
Pipes = __decorate([
    core_1.Component({ template: '' })
], Pipes);
exports.Pipes = Pipes;
var Services = (function (_super) {
    __extends(Services, _super);
    function Services() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Services;
}(StateDef));
Services = __decorate([
    core_1.Component({ template: '' })
], Services);
exports.Services = Services;
var Animations = (function (_super) {
    __extends(Animations, _super);
    function Animations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Animations;
}(StateDef));
Animations = __decorate([
    core_1.Component({ template: '' })
], Animations);
exports.Animations = Animations;
exports.declarations = [
    Overview,
    Components,
    Pipes,
    Services,
    Animations
];
//ui-router-ng2
exports.states = [];
exports.routes = [
    { name: 'overview', path: 'overview', component: Overview },
    { name: 'components', path: 'components', component: Components },
    { name: 'pipes', path: 'pipes', component: Pipes },
    { name: 'services', path: 'services', component: Services },
    { name: 'animations', path: 'animations', component: Animations },
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=states.object.js.map
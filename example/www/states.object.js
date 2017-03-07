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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ui_router_ng2_1 = require("ui-router-ng2");
var core_1 = require("@angular/core");
var declarations = [];
function state(name) {
    var building = (function () {
        function building(stateService) {
            this.stateService = stateService;
            this.routerState = stateService;
            this.routerState.current = { name: name };
        }
        return building;
    }());
    building = __decorate([
        core_1.Component({
            template: '<h3>Hello {{routerState.current.name}} world!</h3>'
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return ui_router_ng2_1.StateService; }))),
        __metadata("design:paramtypes", [ui_router_ng2_1.StateService])
    ], building);
    declarations.push(building);
    return {
        name: name, url: '/' + name, component: building
    };
}
var states = [
    state('building'),
    state('reviewing'),
    state('testing')
];
exports.default = { states: states, declarations: declarations };
//export states
//export declarations 
//# sourceMappingURL=states.object.js.map
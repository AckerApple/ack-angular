"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StateManagerService_class_1 = require("../services/StateManagerService.class");
//import injector from "../injector"
//const deps = ['StateManagerService','$state','$rootScope','$document', '$scope', '$timeout']
var StateDocWatcher = (function () {
    function StateDocWatcher(stateManagerService) {
        var _this = this;
        this.stateManagerService = stateManagerService;
        //inject(arguments, this)
        this.StateManagerService = stateManagerService;
        this.$document = document;
        var isBackButton = function () {
            _this.isMouseOut = true;
            _this.StateManagerService.isOsAction = true;
        };
        var isNotBackButton = function () {
            _this.StateManagerService.isOsAction = false;
        };
        var mouseover = function () {
            _this.isMouseOut = false;
        };
        /*
            this.$rootScope.$on('$stateChangeStart', ()=>this.StateManagerService.stateChange())
        
            this.$rootScope.$on('$stateChangeSuccess', (event, toState, toParams)=>{
              this.$timeout(()=>{
                if(!this.isMouseOut){
                  this.StateManagerService.isNextBackMode = false
                  this.StateManagerService.isOsAction=true
                }
        
                this.onStateChange({
                  state:toState,
                  toState:toState,
                  params:toParams,
                  current:this.StateManagerService.$state.current
                })
              },1)//allow a digest to occur to ng-model population
            })
        */
        this.$document[0].addEventListener('mouseout', isBackButton);
        this.$document[0].addEventListener('mouseover', mouseover);
        this.$document[0].addEventListener('mousedown', isNotBackButton);
        this.$scope.$on('$destroy', function () {
            _this.$document[0].removeEventListener('mouseout', isBackButton);
            _this.$document[0].removeEventListener('mouseover', isNotBackButton);
            _this.$document[0].removeEventListener('mousedown', isNotBackButton);
        });
    }
    StateDocWatcher.prototype.ngOnInit = function () {
        this.ref = this.StateManagerService;
        if (this.onLoad) {
            this.onLoad({
                state: this.StateManagerService.$state.current,
                params: this.StateManagerService.$state.params,
                current: this.StateManagerService.$state.current
            });
        }
    };
    StateDocWatcher.prototype.goBackTo = function (name, params) {
        this.StateManagerService.goBackTo(name, params);
    };
    StateDocWatcher.prototype.tryBack = function (name, params) {
        this.StateManagerService.tryBack(name, params);
    };
    return StateDocWatcher;
}());
StateDocWatcher.parameters = [[StateManagerService_class_1.StateManagerService]];
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StateDocWatcher.prototype, "ref", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StateDocWatcher.prototype, "onStateChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StateDocWatcher.prototype, "onLoad", void 0);
exports.StateDocWatcher = StateDocWatcher;
/*
const inject = injector(StateDocWatcher, deps)

export default {
  bindings:{as:'=?', onStateChange:'&', onLoad:'&'}
  ,controller:StateDocWatcher
}*/
//# sourceMappingURL=StateDocWatcher.class.js.map 
//# sourceMappingURL=StateDocWatcher.class.js.map
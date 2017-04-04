"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var prefx_1 = require("./prefx");
var reader_header_body_pug_1 = require("./templates/reader-header-body.pug");
var error_well_pug_1 = require("./templates/error-well.pug");
var absolute_overflow_y_pug_1 = require("./templates/absolute-overflow-y.pug");
var StatusOnlineModel = (function () {
    function StatusOnlineModel() {
        var _this = this;
        this.statusOnlineModelChange = new core_1.EventEmitter();
        this.onChange = function () {
            this.statusOnlineModel = navigator.onLine;
            this.statusOnlineModelChange.emit(this.statusOnlineModel);
        }.bind(this);
        window.addEventListener("online", this.onChange);
        window.addEventListener("offline", this.onChange);
        setTimeout(function () { return _this.onChange(); }, 0);
    }
    StatusOnlineModel.prototype.ngOnDestroy = function () {
        window.removeEventListener("online", this.onChange);
        window.removeEventListener("offline", this.onChange);
    };
    return StatusOnlineModel;
}());
StatusOnlineModel.decorators = [
    { type: core_1.Directive, args: [{ selector: '[statusOnlineModel]' },] },
];
/** @nocollapse */
StatusOnlineModel.ctorParameters = function () { return []; };
StatusOnlineModel.propDecorators = {
    'statusOnlineModel': [{ type: core_1.Input },],
    'statusOnlineModelChange': [{ type: core_1.Output },],
};
exports.StatusOnlineModel = StatusOnlineModel;
var StatusOfflineModel = (function () {
    function StatusOfflineModel() {
        var _this = this;
        this.statusOfflineModelChange = new core_1.EventEmitter();
        this.onChange = function () {
            this.statusOfflineModel = !navigator.onLine;
            this.statusOfflineModelChange.emit(this.statusOfflineModel);
        }.bind(this);
        window.addEventListener("offline", this.onChange);
        window.addEventListener("online", this.onChange);
        setTimeout(function () { return _this.onChange(); }, 0);
    }
    StatusOfflineModel.prototype.ngOnDestroy = function () {
        window.removeEventListener("offline", this.onChange);
        window.removeEventListener("online", this.onChange);
    };
    return StatusOfflineModel;
}());
StatusOfflineModel.decorators = [
    { type: core_1.Directive, args: [{ selector: '[statusOfflineModel]' },] },
];
/** @nocollapse */
StatusOfflineModel.ctorParameters = function () { return []; };
StatusOfflineModel.propDecorators = {
    'statusOfflineModel': [{ type: core_1.Input },],
    'statusOfflineModelChange': [{ type: core_1.Output },],
};
exports.StatusOfflineModel = StatusOfflineModel;
/** adds form element onchange listener via addEventListener('change') that calls onFormChanged scope argument */
var OnFormChanged = (function () {
    function OnFormChanged(element) {
        this.element = element;
        this.onFormChanged = new core_1.EventEmitter();
        this.onChange = function (event) {
            this.onFormChanged.emit(event);
        }.bind(this);
        element.nativeElement.addEventListener('change', this.onChange);
    }
    OnFormChanged.prototype.ngOnDestroy = function () {
        this.element.nativeElement.removeEventListener('change', this.onChange);
    };
    return OnFormChanged;
}());
OnFormChanged.parameters = [[core_1.ElementRef]];
OnFormChanged.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[onFormChanged]'
            },] },
];
/** @nocollapse */
OnFormChanged.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
OnFormChanged.propDecorators = {
    'onFormChanged': [{ type: core_1.Output },],
};
exports.OnFormChanged = OnFormChanged;
var OnFormAlter = (function () {
    function OnFormAlter(element) {
        this.element = element;
        this.onFormAlter = new core_1.EventEmitter();
        this.onChange = function (event) {
            this.onFormAlter.emit(event);
        }.bind(this);
        element.nativeElement.addEventListener('input', this.onChange);
    }
    OnFormAlter.prototype.ngOnDestroy = function () {
        this.element.nativeElement.removeEventListener('input', this.onChange);
    };
    return OnFormAlter;
}());
OnFormAlter.parameters = [[core_1.ElementRef]];
OnFormAlter.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[onFormAlter]'
            },] },
];
/** @nocollapse */
OnFormAlter.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
OnFormAlter.propDecorators = {
    'onFormAlter': [{ type: core_1.Output },],
};
exports.OnFormAlter = OnFormAlter;
var ReaderHeaderBody = (function () {
    function ReaderHeaderBody() {
    }
    return ReaderHeaderBody;
}());
ReaderHeaderBody.decorators = [
    { type: core_1.Component, args: [{
                selector: 'reader-header-body',
                template: reader_header_body_pug_1.string
            },] },
];
/** @nocollapse */
ReaderHeaderBody.ctorParameters = function () { return []; };
exports.ReaderHeaderBody = ReaderHeaderBody;
var ReaderHeader = (function () {
    function ReaderHeader() {
    }
    return ReaderHeader;
}());
ReaderHeader.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'reader-header'
            },] },
];
/** @nocollapse */
ReaderHeader.ctorParameters = function () { return []; };
exports.ReaderHeader = ReaderHeader;
var ReaderBody = (function () {
    function ReaderBody(element) {
        this.element = element;
        element.nativeElement.style.height = '100%';
        element.nativeElement.style.display = 'block';
    }
    return ReaderBody;
}());
ReaderBody.parameters = [[core_1.ElementRef]];
ReaderBody.decorators = [
    { type: core_1.Directive, args: [{
                selector: "reader-body"
                //,parameters:[[ElementRef]]
            },] },
];
/** @nocollapse */
ReaderBody.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
exports.ReaderBody = ReaderBody;
var ElementHeightModel = (function () {
    function ElementHeightModel(element) {
        var _this = this;
        this.element = element;
        this.elementHeightModelChange = new core_1.EventEmitter();
        this.onResize = function () {
            this.setModel();
        }.bind(this);
        window.addEventListener('resize', this.onResize);
        setTimeout(function () { return _this.setModel(); }, 0);
        this.observer = new MutationObserver(function () {
            _this.setModel();
        });
        var config = {
            attributes: true,
            childList: true,
            characterData: true
        };
        this.observer.observe(this.element.nativeElement, config);
    }
    ElementHeightModel.prototype.ngOnChanges = function () {
        var _this = this;
        setTimeout(function () { return _this.setModel(); }, 0);
    };
    ElementHeightModel.prototype.setModel = function () {
        this.elementHeightModel = this.element.nativeElement.offsetHeight;
        //this.element.nativeElement.style.border='1px solid red'
        this.elementHeightModelChange.emit(this.elementHeightModel);
    };
    ElementHeightModel.prototype.ngOnDestroy = function () {
        this.observer.disconnect();
        window.removeEventListener(this.onResize);
    };
    return ElementHeightModel;
}());
ElementHeightModel.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[elementHeightModel]'
            },] },
];
/** @nocollapse */
ElementHeightModel.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
ElementHeightModel.propDecorators = {
    'elementHeightModel': [{ type: core_1.Input },],
    'elementHeightModelChange': [{ type: core_1.Output },],
};
exports.ElementHeightModel = ElementHeightModel;
var ElementWidthModel = (function () {
    function ElementWidthModel(element) {
        this.element = element;
        this.elementWidthModelChange = new core_1.EventEmitter();
        this.onResize = function () {
            this.setModel();
        }.bind(this);
        window.addEventListener('resize', this.onResize);
        this.setModel();
    }
    ElementWidthModel.prototype.ngOnChanges = function () {
        this.setModel();
    };
    ElementWidthModel.prototype.setModel = function () {
        this.elementWidthModel = this.element.nativeElement.offsetWidth;
        this.elementWidthModelChange.emit(this.elementWidthModel);
    };
    ElementWidthModel.prototype.ngOnDestroy = function () {
        window.removeEventListener(this.onResize);
    };
    return ElementWidthModel;
}());
ElementWidthModel.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[elementWidthModel]'
            },] },
];
/** @nocollapse */
ElementWidthModel.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
ElementWidthModel.propDecorators = {
    'elementWidthModel': [{ type: core_1.Input },],
    'elementWidthModelChange': [{ type: core_1.Output },],
};
exports.ElementWidthModel = ElementWidthModel;
var ScreenScrollModelY = (function () {
    function ScreenScrollModelY() {
        this.screenScrollModelYChange = new core_1.EventEmitter();
        this.onScroll = function () {
            this.screenScrollModelY = window['pageYOffset'];
            this.screenScrollModelYChange.emit(this.screenScrollModelY);
        }.bind(this);
        this.onScroll();
        window['addEventListener']("scroll", this.onScroll);
    }
    ScreenScrollModelY.prototype.ngOnDestroy = function () {
        window['removeEventListener']("scroll", this.onScroll);
    };
    return ScreenScrollModelY;
}());
ScreenScrollModelY.decorators = [
    { type: core_1.Directive, args: [{
                //inputs:['screen-height-model'],
                selector: '[screenScrollModelY]'
            },] },
];
/** @nocollapse */
ScreenScrollModelY.ctorParameters = function () { return []; };
ScreenScrollModelY.propDecorators = {
    'screenScrollModelY': [{ type: core_1.Input },],
    'screenScrollModelYChange': [{ type: core_1.Output },],
};
exports.ScreenScrollModelY = ScreenScrollModelY;
var ScreenWidthModel = (function () {
    function ScreenWidthModel() {
        var _this = this;
        this.screenWidthModelChange = new core_1.EventEmitter();
        this.onResize = function () {
            if (this.screenWidthModel !== window.innerWidth) {
                this.setModel();
            }
        }.bind(this);
        window.addEventListener('resize', this.onResize);
        setTimeout(function () { return _this.setModel(); }, 0);
    }
    ScreenWidthModel.prototype.setModel = function () {
        this.screenWidthModel = window.innerWidth;
        this.screenWidthModelChange.emit(this.screenWidthModel);
    };
    ScreenWidthModel.prototype.ngOnDestroy = function () {
        window.removeEventListener(this.onResize);
    };
    return ScreenWidthModel;
}());
ScreenWidthModel.decorators = [
    { type: core_1.Directive, args: [{
                //inputs:['screen-height-model'],
                selector: '[screenWidthModel]'
            },] },
];
/** @nocollapse */
ScreenWidthModel.ctorParameters = function () { return []; };
ScreenWidthModel.propDecorators = {
    'screenWidthModel': [{ type: core_1.Input },],
    'screenWidthModelChange': [{ type: core_1.Output },],
};
exports.ScreenWidthModel = ScreenWidthModel;
var ScreenHeightModel = (function () {
    function ScreenHeightModel() {
        var _this = this;
        this.screenHeightModelChange = new core_1.EventEmitter();
        this.onResize = function () {
            if (this.screenHeightModel !== window.innerHeight) {
                this.setModel();
            }
        }.bind(this);
        window.addEventListener('resize', this.onResize);
        setTimeout(function () { return _this.onResize(); }, 0);
    }
    ScreenHeightModel.prototype.setModel = function () {
        this.screenHeightModel = window.innerHeight;
        this.screenHeightModelChange.emit(this.screenHeightModel);
    };
    ScreenHeightModel.prototype.ngOnDestroy = function () {
        window.removeEventListener(this.onResize);
    };
    return ScreenHeightModel;
}());
ScreenHeightModel.decorators = [
    { type: core_1.Directive, args: [{
                //inputs:['screen-height-model'],
                selector: '[screenHeightModel]'
            },] },
];
/** @nocollapse */
ScreenHeightModel.ctorParameters = function () { return []; };
ScreenHeightModel.propDecorators = {
    'screenHeightModel': [{ type: core_1.Input },],
    'screenHeightModelChange': [{ type: core_1.Output },],
};
exports.ScreenHeightModel = ScreenHeightModel;
var AbsoluteOverflowY = (function () {
    function AbsoluteOverflowY() {
    }
    return AbsoluteOverflowY;
}());
AbsoluteOverflowY.decorators = [
    { type: core_1.Component, args: [{
                selector: 'absolute-overflow-y',
                template: absolute_overflow_y_pug_1.string
            },] },
];
/** @nocollapse */
AbsoluteOverflowY.ctorParameters = function () { return []; };
AbsoluteOverflowY.propDecorators = {
    'scrollBars': [{ type: core_1.Input },],
};
exports.AbsoluteOverflowY = AbsoluteOverflowY;
var ErrorWell = (function () {
    function ErrorWell() {
    }
    ErrorWell.prototype.ngOnInit = function () {
        this.cssClasses = this.cssClasses || 'bg-danger border-danger text-danger';
    };
    return ErrorWell;
}());
ErrorWell.decorators = [
    { type: core_1.Component, args: [{
                selector: 'error-well',
                template: error_well_pug_1.string,
                animations: prefx_1.fxArray
            },] },
];
/** @nocollapse */
ErrorWell.ctorParameters = function () { return []; };
ErrorWell.propDecorators = {
    'error': [{ type: core_1.Input },],
    'cssClasses': [{ type: core_1.Input },],
};
exports.ErrorWell = ErrorWell;
/** runs shake instructions when condition returns a truthy value */
var ShakeOn = (function () {
    function ShakeOn(element) {
        this.element = element;
        this.shakeThen = new core_1.EventEmitter();
        this.shakeForMsChange = new core_1.EventEmitter();
        this.shakeTypeChange = new core_1.EventEmitter();
        this.shakeRefChange = new core_1.EventEmitter();
        this.shakeTypes = ['shake-slow', 'shake-hard', 'shake-little', 'shake-horizontal', 'shake-vertical', 'shake-rotate', 'shake-opacity', 'shake-crazy'];
    }
    ShakeOn.prototype.ngAfterContentChecked = function () {
        var _this = this;
        setTimeout(function () { return _this.update(); }, 0);
    };
    ShakeOn.prototype.update = function () {
        this.shakeForMs = this.shakeForMs || 2000;
        this.shakeRef = this;
        this.shakeType = this.shakeType || 'shake-slow';
        this.shakeRefChange.emit(this.shakeRef);
        this.shakeTypeChange.emit(this.shakeType);
        this.shakeForMsChange.emit(this.shakeForMs);
    };
    ShakeOn.prototype.ngOnChanges = function (changes) {
        if (changes.shakeOn && changes.shakeOn.currentValue && changes.shakeOn.currentValue != changes.shakeOn.previousValue) {
            this.onTrue();
        }
    };
    ShakeOn.prototype.onFalse = function () {
        removeClass(this.element.nativeElement, 'shake-constant');
        removeClass(this.element.nativeElement, this.shakeType || 'shake-slow');
    };
    ShakeOn.prototype.onTrue = function () {
        var _this = this;
        addClass(this.element.nativeElement, 'shake-constant');
        addClass(this.element.nativeElement, this.shakeType || 'shake-slow');
        setTimeout(function () {
            //$scope.shakeOnController.shakeOn = false
            _this.onFalse();
            _this.shakeThen.emit(_this);
        }, this.shakeForMs);
    };
    return ShakeOn;
}());
ShakeOn.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[shakeOn]'
            },] },
];
/** @nocollapse */
ShakeOn.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
ShakeOn.propDecorators = {
    'shakeOn': [{ type: core_1.Input },],
    'shakeThen': [{ type: core_1.Output },],
    'shakeForMs': [{ type: core_1.Input },],
    'shakeForMsChange': [{ type: core_1.Output },],
    'shakeType': [{ type: core_1.Input },],
    'shakeTypeChange': [{ type: core_1.Output },],
    'shakeRef': [{ type: core_1.Input },],
    'shakeRefChange': [{ type: core_1.Output },],
};
exports.ShakeOn = ShakeOn;
/** runs shake instructions when model changes to a truthy value */
//.directive('shakeModel', shakeModel)
/*
function shakeOnDirective($timeout) {
  return {
    restrict:'A',
    scope:{},
    bindToController:{
      shakeOn:'=?', shakeForMs:'=?', shakeType:'=?', shakeThen:'&', shakeRef:'=?'
    },
    controller:shakeOn,
    controllerAs:'shakeOnController',
    link: function($scope, element, attrs){}
  };
}
shakeOnDirective.$inject=['$timeout']
*/
/** runs shake instructions when model changes to a truthy value */
/*
function shakeModel($timeout) {
  return {
    restrict:'A',
    scope:{},
    bindToController:{
      shakeModel:'=?', shakeForMs:'=?', shakeType:'=?', shakeRef:'=?'
    },
    controller:shakeOn,
    controllerAs:'shakeModelController',
    link: function($scope, element, attrs) {
      $scope.shakeModelController.shakeForMs = $scope.shakeModelController.shakeForMs || 2000
      $scope.shakeModelController.shakeType = $scope.shakeModelController.shakeType || 'shake-slow'

      function onTrue(){
        element.addClass('shake-constant')
        element.addClass($scope.shakeModelController.shakeType)

        $timeout(function() {
          $scope.shakeModelController.shakeModel = false
          element.removeClass('shake-constant')
          element.removeClass($scope.shakeModelController.shakeType)
          $scope.$apply()
        }, $scope.shakeModelController.shakeForMs);
      }

      function onChange(value) {
        if(value) {
          onTrue()
        }else{
          element.removeClass('shake-constant')
          element.removeClass($scope.shakeModelController.shakeType)
        }
      }

      function watch(){
        return $scope.shakeModelController.shakeModel
      }

      $scope.$watch(watch, onChange);
    }
  };
}
shakeModel.$inject = ['$timeout']
*/
function hasClass(el, className) {
    if (el.classList)
        return el.classList.contains(className);
    else
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}
exports.hasClass = hasClass;
function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
    }
    else if (!hasClass(el, className))
        el.className += " " + className;
}
exports.addClass = addClass;
function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className);
    else if (hasClass(el, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}
exports.removeClass = removeClass;
exports.declarations = [
    OnFormChanged,
    ScreenScrollModelY,
    ScreenHeightModel,
    ScreenWidthModel,
    ShakeOn,
    OnFormAlter,
    StatusOnlineModel,
    StatusOfflineModel,
    ElementWidthModel,
    ElementHeightModel,
    ReaderHeaderBody,
    ReaderHeader,
    ReaderBody,
    ErrorWell,
    AbsoluteOverflowY
];
//# sourceMappingURL=components.js.map
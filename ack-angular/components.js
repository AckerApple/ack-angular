"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var reader_header_body_pug_1 = require("./templates/reader-header-body.pug");
/** adds form element onchange listener via addEventListener('change') that calls formChanged scope argument */
var FormChanged = (function () {
    function FormChanged(element) {
        this.element = element;
        this.formChanged = new core_1.EventEmitter();
        console.log('launched');
        this.onChange = function (event) {
            this.formChanged.emit(event);
        }.bind(this);
        element.nativeElement.addEventListener('change', this.onChange);
    }
    FormChanged.prototype.ngOnDestroy = function () {
        this.element.nativeElement.removeEventListener('change', this.onChange);
    };
    return FormChanged;
}());
FormChanged.parameters = [[core_1.ElementRef]];
FormChanged.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[formChanged]'
            },] },
];
/** @nocollapse */
FormChanged.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
FormChanged.propDecorators = {
    'formChanged': [{ type: core_1.Output },],
};
exports.FormChanged = FormChanged;
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
var ScreenWidthModel = (function () {
    function ScreenWidthModel() {
        this.screenWidthModelChange = new core_1.EventEmitter();
        this.window = window;
        this.onResize = function () {
            if (this.screenWidthModel !== window.innerWidth) {
                this.screenWidthModel = window.innerWidth;
                this.screenWidthModelChange.emit(this.screenWidthModel);
            }
        }.bind(this);
        window.addEventListener('resize', this.onResize);
    }
    ScreenWidthModel.prototype.ngAfterViewInit = function () {
        this.screenWidthModel = this.window.innerWidth;
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
var ScreenScrollModelY = (function () {
    function ScreenScrollModelY() {
        this.screenScrollModelYChange = new core_1.EventEmitter();
        this.onScroll = function () {
            this.screenScrollModelY = window['pageYOffset'];
            this.screenScrollModelYChange.emit(this.screenScrollModelY);
        }.bind(this);
    }
    ScreenScrollModelY.prototype.ngOnInit = function () {
        this.onScroll();
        window['addEventListener']("scroll", this.onScroll);
    };
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
var ScreenHeightModel = (function () {
    function ScreenHeightModel() {
        this.screenHeightModelChange = new core_1.EventEmitter();
        this.window = window;
        this.onResize = function () {
            if (this.screenHeightModel !== window.innerHeight) {
                this.screenHeightModel = window.innerHeight;
                this.screenHeightModelChange.emit(this.screenHeightModel);
            }
        }.bind(this);
        window.addEventListener('resize', this.onResize);
    }
    ScreenHeightModel.prototype.ngAfterViewInit = function () {
        this.screenHeightModel = this.window.innerHeight;
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
    ShakeOn.prototype.ngOnInit = function () {
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
    FormChanged,
    ScreenScrollModelY,
    ScreenHeightModel,
    ScreenWidthModel,
    ReaderHeaderBody,
    ReaderHeader,
    ReaderBody,
    ShakeOn
];
//# sourceMappingURL=components.js.map
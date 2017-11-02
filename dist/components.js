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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AckModal_component_1 = require("./components/AckModal.component");
var AckArray_directive_1 = require("./AckArray.directive");
var AckOptions_component_1 = require("./AckOptions.component");
var AckOptionsModal_component_1 = require("./AckOptionsModal.component");
var reader_header_body_pug_1 = require("./templates/reader-header-body.pug");
var AbsoluteOverflowX_component_1 = require("./AbsoluteOverflowX.component");
var AbsoluteOverflowX_component_2 = require("./AbsoluteOverflowX.component");
exports.AbsoluteOverflowX = AbsoluteOverflowX_component_2.AbsoluteOverflowX;
var ShakeOn_component_1 = require("./ShakeOn.component");
var ShakeOn_component_2 = require("./ShakeOn.component");
exports.ShakeOn = ShakeOn_component_2.ShakeOn;
var ErrorWell_component_1 = require("./ErrorWell.component");
var ErrorWell_component_2 = require("./ErrorWell.component");
exports.ErrorWell = ErrorWell_component_2.ErrorWell;
var FocusOn = (function () {
    function FocusOn(element) {
        this.element = element;
    }
    FocusOn.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.focusOn && changes.focusOn.currentValue) {
            setTimeout(function () {
                _this.element.nativeElement.focus();
                _this.focusThen.emit();
            }, this.focusOnDelay);
        }
    };
    return FocusOn;
}());
exports.FocusOn = FocusOn;
var SelectOn = (function () {
    function SelectOn(element) {
        this.element = element;
    }
    SelectOn.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.selectOn && changes.selectOn.currentValue) {
            setTimeout(function () {
                _this.element.nativeElement.select();
                _this.selectThen.emit();
            }, this.selectOnDelay);
        }
    };
    return SelectOn;
}());
exports.SelectOn = SelectOn;
var VarDirective = (function () {
    function VarDirective() {
    }
    return VarDirective;
}());
exports.VarDirective = VarDirective;
var EnterKey = (function () {
    function EnterKey(element) {
        var _this = this;
        this.element = element;
        element.nativeElement.addEventListener('keydown', function (event) {
            var yesNo = [13, 10].indexOf(event.which || event.keyCode) >= 0;
            if (yesNo) {
                _this.enterKey.emit(event);
            }
        });
    }
    return EnterKey;
}());
exports.EnterKey = EnterKey;
var EscapeKey = (function () {
    function EscapeKey(element) {
        var _this = this;
        this.element = element;
        element.nativeElement.addEventListener('keydown', function (event) {
            var code = event.which || event.keyCode;
            if (code == 27) {
                _this.escapeKey.emit(event);
            }
        });
    }
    return EscapeKey;
}());
exports.EscapeKey = EscapeKey;
var PreventBackKey = (function () {
    function PreventBackKey(element) {
        var _this = this;
        this.element = element;
        element.nativeElement.addEventListener('keydown', function (event) {
            var yesNo = [8].indexOf(event.which || event.keyCode) < 0;
            if (!yesNo) {
                _this.preventBackKey.emit(event);
                if (event.preventDefault) {
                    event.preventDefault();
                }
            }
            return yesNo;
        });
    }
    return PreventBackKey;
}());
exports.PreventBackKey = PreventBackKey;
var PreventEnterKey = (function () {
    function PreventEnterKey(element) {
        var _this = this;
        this.element = element;
        element.nativeElement.addEventListener('keydown', function (event) {
            var yesNo = [13, 10].indexOf(event.which || event.keyCode) < 0;
            if (!yesNo) {
                _this.preventEnterKey.emit(event);
                if (event.preventDefault) {
                    event.preventDefault();
                }
            }
            return yesNo;
        });
    }
    return PreventEnterKey;
}());
exports.PreventEnterKey = PreventEnterKey;
var InputHint = (function () {
    function InputHint() {
    }
    return InputHint;
}());
exports.InputHint = InputHint;
var StatusOnlineModel = (function () {
    function StatusOnlineModel() {
        var _this = this;
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
exports.StatusOnlineModel = StatusOnlineModel;
var StatusOfflineModel = (function () {
    function StatusOfflineModel() {
        var _this = this;
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
exports.StatusOfflineModel = StatusOfflineModel;
var FormChanged = (function () {
    function FormChanged(element) {
        this.element = element;
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
exports.FormChanged = FormChanged;
var OnFormAlter = (function () {
    function OnFormAlter(element) {
        this.element = element;
        this.onChange = function (event) {
            this.onFormAlter.emit(event);
        }.bind(this);
        element.nativeElement.addEventListener('input', this.onChange);
        element.nativeElement.addEventListener('change', this.onChange);
    }
    OnFormAlter.prototype.ngOnDestroy = function () {
        this.element.nativeElement.removeEventListener('change', this.onChange);
        this.element.nativeElement.removeEventListener('input', this.onChange);
    };
    return OnFormAlter;
}());
exports.OnFormAlter = OnFormAlter;
var ReaderHeaderBody = (function () {
    function ReaderHeaderBody() {
    }
    return ReaderHeaderBody;
}());
exports.ReaderHeaderBody = ReaderHeaderBody;
var ReaderHeader = (function () {
    function ReaderHeader() {
    }
    return ReaderHeader;
}());
exports.ReaderHeader = ReaderHeader;
var ReaderBody = (function () {
    function ReaderBody(element) {
        this.element = element;
        element.nativeElement.style.height = '100%';
        element.nativeElement.style.display = 'block';
    }
    return ReaderBody;
}());
exports.ReaderBody = ReaderBody;
var InnerHtmlModel = (function () {
    function InnerHtmlModel(element) {
        var _this = this;
        this.element = element;
        this.observer = new MutationObserver(function () { return _this.setModel(); });
        var config = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };
        this.observer.observe(this.element.nativeElement, config);
    }
    InnerHtmlModel.prototype.ngOnChanges = function () {
        var _this = this;
        setTimeout(function () { return _this.setModel(); }, 0);
    };
    InnerHtmlModel.prototype.setModel = function () {
        this.innerHtmlModel = this.element.nativeElement.innerHTML;
        this.innerHtmlModelChange.emit(this.innerHtmlModel);
    };
    InnerHtmlModel.prototype.ngOnDestroy = function () {
        this.observer.disconnect();
    };
    return InnerHtmlModel;
}());
exports.InnerHtmlModel = InnerHtmlModel;
var ElementSizeModel = (function () {
    function ElementSizeModel(element) {
        var _this = this;
        this.element = element;
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
            characterData: true,
            subtree: true
        };
        this.observer.observe(this.element.nativeElement, config);
    }
    ElementSizeModel.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.setModel(); }, 800);
    };
    ElementSizeModel.prototype.setModel = function () {
        var _this = this;
        this.elementSizeModel = this.elementSizeModel || {};
        this.inChange = true;
        this.elementSizeModel.width = this.element.nativeElement.offsetWidth;
        this.elementSizeModel.height = this.element.nativeElement.offsetHeight;
        this.elementSizeModelChange.emit(this.elementSizeModel);
        setTimeout(function () { return _this.inChange = false; }, 0);
    };
    ElementSizeModel.prototype.ngOnChanges = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.inChange) {
                _this.setModel();
            }
        }, 0);
    };
    ElementSizeModel.prototype.ngOnDestroy = function () {
        this.observer.disconnect();
        window.removeEventListener('resize', this.onResize);
    };
    return ElementSizeModel;
}());
exports.ElementSizeModel = ElementSizeModel;
var ElementHeightModel = (function (_super) {
    __extends(ElementHeightModel, _super);
    function ElementHeightModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElementHeightModel.prototype.setModel = function () {
        this.elementHeightModel = this.element.nativeElement.offsetHeight;
        this.elementHeightModelChange.emit(this.elementHeightModel);
    };
    return ElementHeightModel;
}(ElementSizeModel));
exports.ElementHeightModel = ElementHeightModel;
var ElementWidthModel = (function (_super) {
    __extends(ElementWidthModel, _super);
    function ElementWidthModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElementWidthModel.prototype.setModel = function () {
        this.elementWidthModel = this.element.nativeElement.offsetWidth;
        this.elementWidthModelChange.emit(this.elementWidthModel);
    };
    return ElementWidthModel;
}(ElementSizeModel));
exports.ElementWidthModel = ElementWidthModel;
var ScreenScrollHeightDiff = (function () {
    function ScreenScrollHeightDiff() {
        this.on = function () {
            this.apply();
        }.bind(this);
        window.addEventListener("scroll", this.on);
        window.addEventListener("resize", this.on);
    }
    ScreenScrollHeightDiff.prototype.apply = function () {
        this.screenScrollHeightDiff = document.body.scrollHeight - window.innerHeight;
        if (this.screenScrollHeightDiff < 0)
            this.screenScrollHeightDiff = 0;
        this.screenScrollHeightDiffChange.emit(this.screenScrollHeightDiff);
    };
    ScreenScrollHeightDiff.prototype.ngOnDestroy = function () {
        window.removeEventListener("scroll", this.on);
        window.removeEventListener("resize", this.on);
    };
    return ScreenScrollHeightDiff;
}());
exports.ScreenScrollHeightDiff = ScreenScrollHeightDiff;
var ScreenScroll = (function () {
    function ScreenScroll() {
        this.onScroll = function () {
            this.screenScroll.emit({ x: window['pageXOffset'], y: window['pageYOffset'] });
        }.bind(this);
        this.onScroll();
        window.addEventListener("scroll", this.onScroll);
    }
    ScreenScroll.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.onScroll(); }, 0);
    };
    ScreenScroll.prototype.ngOnDestroy = function () {
        window.removeEventListener("scroll", this.onScroll);
    };
    return ScreenScroll;
}());
exports.ScreenScroll = ScreenScroll;
var ScreenScrollModelY = (function () {
    function ScreenScrollModelY() {
        this.onScroll = function () {
            this.screenScrollModelY = window['pageYOffset'];
            this.screenScrollModelYChange.emit(this.screenScrollModelY);
        }.bind(this);
        this.onScroll();
        window.addEventListener("scroll", this.onScroll);
    }
    ScreenScrollModelY.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.onScroll(); }, 0);
    };
    ScreenScrollModelY.prototype.ngOnDestroy = function () {
        window.removeEventListener("scroll", this.onScroll);
    };
    return ScreenScrollModelY;
}());
exports.ScreenScrollModelY = ScreenScrollModelY;
var ScreenWidthModel = (function () {
    function ScreenWidthModel() {
        var _this = this;
        this.onResize = function () {
            if (this.screenWidthModel !== window.innerWidth) {
                this.setModel();
            }
        }.bind(this);
        window.addEventListener('resize', this.onResize);
        setTimeout(function () { return _this.setModel(); }, 0);
    }
    ScreenWidthModel.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.onResize(); }, 0);
    };
    ScreenWidthModel.prototype.setModel = function () {
        this.screenWidthModel = window.innerWidth;
        this.screenWidthModelChange.emit(this.screenWidthModel);
    };
    ScreenWidthModel.prototype.ngOnDestroy = function () {
        window.removeEventListener('resize', this.onResize);
    };
    return ScreenWidthModel;
}());
exports.ScreenWidthModel = ScreenWidthModel;
var ScreenHeightModel = (function () {
    function ScreenHeightModel() {
        var _this = this;
        this.onResize = function () {
            if (this.screenHeightModel !== window.innerHeight) {
                this.setModel();
            }
        }.bind(this);
        window.addEventListener('resize', this.onResize);
        setTimeout(function () { return _this.onResize(); }, 0);
    }
    ScreenHeightModel.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.onResize(); }, 0);
    };
    ScreenHeightModel.prototype.setModel = function () {
        this.screenHeightModel = window.innerHeight;
        this.screenHeightModelChange.emit(this.screenHeightModel);
    };
    ScreenHeightModel.prototype.ngOnDestroy = function () {
        window.removeEventListener('resize', this.onResize);
    };
    return ScreenHeightModel;
}());
exports.ScreenHeightModel = ScreenHeightModel;
var HtmlWidthModel = (function () {
    function HtmlWidthModel() {
        var _this = this;
        this.onResize = function () {
            if (this.htmlWidthModel !== window.document.documentElement.clientWidth) {
                this.setModel();
            }
        }.bind(this);
        window.addEventListener('resize', this.onResize);
        setTimeout(function () { return _this.setModel(); }, 0);
    }
    HtmlWidthModel.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.onResize(); }, 0);
    };
    HtmlWidthModel.prototype.setModel = function () {
        this.htmlWidthModel = window.document.documentElement.clientWidth;
        this.htmlWidthModelChange.emit(this.htmlWidthModel);
    };
    HtmlWidthModel.prototype.ngOnDestroy = function () {
        window.removeEventListener('resize', this.onResize);
    };
    return HtmlWidthModel;
}());
exports.HtmlWidthModel = HtmlWidthModel;
var HtmlHeightModel = (function () {
    function HtmlHeightModel() {
        var _this = this;
        this.onResize = function () {
            if (this.htmlHeightModel !== window.document.documentElement.clientHeight) {
                this.setModel();
            }
        }.bind(this);
        window.addEventListener('resize', this.onResize);
        setTimeout(function () { return _this.onResize(); }, 0);
    }
    HtmlHeightModel.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.onResize(); }, 0);
    };
    HtmlHeightModel.prototype.setModel = function () {
        this.htmlHeightModel = window.document.documentElement.clientHeight;
        this.htmlHeightModelChange.emit(this.htmlHeightModel);
    };
    HtmlHeightModel.prototype.ngOnDestroy = function () {
        window.removeEventListener('resize', this.onResize);
    };
    return HtmlHeightModel;
}());
exports.HtmlHeightModel = HtmlHeightModel;
exports.declarations = [
    SelectOn,
    FocusOn,
    VarDirective,
    InnerHtmlModel,
    OnFormAlter,
    FormChanged,
    EnterKey,
    EscapeKey,
    PreventBackKey,
    PreventEnterKey,
    ScreenScrollModelY,
    ScreenWidthModel,
    ScreenHeightModel,
    ScreenScroll,
    ScreenScrollHeightDiff,
    HtmlWidthModel,
    HtmlHeightModel,
    ShakeOn_component_1.ShakeOn,
    StatusOnlineModel,
    StatusOfflineModel,
    ElementSizeModel,
    ElementWidthModel,
    ElementHeightModel,
    ReaderHeaderBody,
    ReaderHeader,
    ReaderBody,
    ErrorWell_component_1.ErrorWell,
    AbsoluteOverflowX_component_1.AbsoluteOverflowX,
    InputHint,
    AckOptions_component_1.AckOptions,
    AckOptionsModal_component_1.AckOptionsModal,
    AckModal_component_1.AckModal,
    AckArray_directive_1.AckArray
];

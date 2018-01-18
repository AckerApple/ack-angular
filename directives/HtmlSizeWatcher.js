"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlSizeWatcher = (function () {
    function HtmlSizeWatcher() {
        var _this = this;
        this.onResize = function () {
            if (_this.hasChanged()) {
                _this.setModel();
            }
        };
        window.addEventListener('resize', this.onResize);
        window.addEventListener('scroll', this.onResize);
        setTimeout(function () { return _this.onResize(); }, 0);
    }
    HtmlSizeWatcher.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.onResize(); }, 200);
    };
    HtmlSizeWatcher.prototype.hasChanged = function () {
        return true;
    };
    HtmlSizeWatcher.prototype.setModel = function () { };
    HtmlSizeWatcher.prototype.ngOnDestroy = function () {
        window.removeEventListener('scroll', this.onResize);
        window.removeEventListener('resize', this.onResize);
    };
    return HtmlSizeWatcher;
}());
exports.HtmlSizeWatcher = HtmlSizeWatcher;

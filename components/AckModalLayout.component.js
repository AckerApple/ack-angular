import { 
//  Directive,
Component, Input, Output, EventEmitter, ElementRef } from "@angular/core";
import { AckApp } from "../providers/AckApp.provider";
import { animations } from "ack-angular-fx";
import { string } from "./templates/ack-modal-layout.pug";
var AckModalLayout = /** @class */ (function () {
    //@Input() template:ElementRef<any>
    function AckModalLayout(element, AckApp) {
        var _this = this;
        this.element = element;
        this.AckApp = AckApp;
        this.zIndex = 20;
        this.close = new EventEmitter();
        this.allowClose = true;
        this.isModelMode = false;
        this.showModel = true;
        this.showModelChange = new EventEmitter();
        //after possible double click, close on outside content click
        setTimeout(function () { return _this.clickListenForClose(); }, 400);
    }
    AckModalLayout.prototype.clickListenForClose = function () {
        var _this = this;
        this.element.nativeElement.addEventListener('click', function (event) {
            if (!_this.allowClose)
                return false;
            var eTar = event.srcElement || event.toElement || event.target;
            var isDirectChild = eTar == _this.element.nativeElement.children[0] || eTar == _this.element.nativeElement.children[0].children[0];
            if (isDirectChild) {
                _this.fireClose();
            }
            return true;
        });
    };
    AckModalLayout.prototype.ngOnInit = function () {
        var _this = this;
        return Promise.resolve().then(function () {
            if (_this.isModelMode || (_this.isModelMode == null && _this.showModelChange.observers.length)) {
                _this.isModelMode = true;
            }
        });
    };
    AckModalLayout.prototype.fireClose = function () {
        this.showModelChange.emit(this.showModel = false);
        this.close.emit(this);
    };
    AckModalLayout.decorators = [
        { type: Component, args: [{
                    selector: 'ack-modal-layout',
                    template: string,
                    animations: animations
                },] }
    ];
    AckModalLayout.ctorParameters = function () { return [
        { type: ElementRef },
        { type: AckApp }
    ]; };
    AckModalLayout.propDecorators = {
        zIndex: [{ type: Input }],
        close: [{ type: Output }],
        allowClose: [{ type: Input }],
        wrapStyle: [{ type: Input }],
        wrapCellStyle: [{ type: Input }],
        backgroundColor: [{ type: Input }],
        isModelMode: [{ type: Input }],
        showModel: [{ type: Input }],
        showModelChange: [{ type: Output }]
    };
    return AckModalLayout;
}());
export { AckModalLayout };
//# sourceMappingURL=AckModalLayout.component.js.map
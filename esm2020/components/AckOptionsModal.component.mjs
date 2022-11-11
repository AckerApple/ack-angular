import { Component, Input, Output, EventEmitter } from "@angular/core";
import { AckOptions } from "./AckOptions.component";
import * as i0 from "@angular/core";
import * as i1 from "./AckOptions.component";
import * as i2 from "./AckModal.component";
export class AckOptionsModal extends AckOptions {
    constructor() {
        super(...arguments);
        //one way binds
        this.allowClose = true;
        //one way expressions
        this.close = new EventEmitter();
        this.backgroundColorChange = new EventEmitter();
        this.showModel = true;
        this.showModelChange = new EventEmitter();
    }
    fireModelChange(model) {
        if (!this.multiple)
            this.close.emit();
        this.modelChange.emit(model);
    }
}
AckOptionsModal.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckOptionsModal, deps: null, target: i0.ɵɵFactoryTarget.Component });
AckOptionsModal.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.4", type: AckOptionsModal, selector: "ack-options-modal", inputs: { allowClose: "allowClose", wrapStyle: "wrapStyle", wrapCellStyle: "wrapCellStyle", backgroundColor: "backgroundColor", showModel: "showModel" }, outputs: { close: "close", backgroundColorChange: "backgroundColorChange", showModelChange: "showModelChange" }, usesInheritance: true, ngImport: i0, template: "<ack-modal\n  (close)=\"close.emit($event)\"\n  [allowClose]=\"allowClose\"\n  [showModel]=\"showModel\"\n  (showModelChange)=\"showModelChange.emit($event)\"\n  [isModelMode]=\"showModelChange.observers.length\"\n  [wrapStyle]=\"wrapStyle\"\n  [wrapCellStyle]=\"wrapCellStyle\"\n  [backgroundColor]=\"backgroundColor\"\n  (backgroundColorChange)=\"backgroundColorChange.emit($event)\"\n  >\n    <ng-content></ng-content>\n    <div class=\"border-grey-6x border bg-white\">\n      <ack-options\n        #ackOptions=\"\"\n        [array]=\"array\"\n        [max]=\"max\"\n        [modelAsArray]=\"modelAsArray\"\n        [model]=\"model\"\n        (modelChange)=\"fireModelChange($event)\"\n        [multiple]=\"multiple\"\n        [toggleable]=\"toggleable\"\n        [stylize]=\"stylize\"\n        [inputTemplateRefs]=\"templateRefs\"\n        [arrayKey]=\"arrayKey\"\n        [arrayToModelKey]=\"arrayToModelKey\"\n        [modelKey]=\"modelKey\"\n      ></ack-options>\n    </div>\n</ack-modal>\n", dependencies: [{ kind: "component", type: i1.AckOptions, selector: "ack-options", inputs: ["array", "stylize", "multiple", "modelAsArray", "max", "toggleable", "inputTemplateRefs", "model", "arrayKey", "modelKey", "arrayToModelKey"], outputs: ["modelChange"] }, { kind: "component", type: i2.AckModal, selector: "ack-modal", inputs: ["inline", "isModelMode", "zIndex", "valign", "wrapStyle", "wrapCellStyle", "wrapContentClass", "backgroundColor", "allowClose", "showModel"], outputs: ["showModelChange", "close"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckOptionsModal, decorators: [{
            type: Component,
            args: [{ selector: 'ack-options-modal', template: "<ack-modal\n  (close)=\"close.emit($event)\"\n  [allowClose]=\"allowClose\"\n  [showModel]=\"showModel\"\n  (showModelChange)=\"showModelChange.emit($event)\"\n  [isModelMode]=\"showModelChange.observers.length\"\n  [wrapStyle]=\"wrapStyle\"\n  [wrapCellStyle]=\"wrapCellStyle\"\n  [backgroundColor]=\"backgroundColor\"\n  (backgroundColorChange)=\"backgroundColorChange.emit($event)\"\n  >\n    <ng-content></ng-content>\n    <div class=\"border-grey-6x border bg-white\">\n      <ack-options\n        #ackOptions=\"\"\n        [array]=\"array\"\n        [max]=\"max\"\n        [modelAsArray]=\"modelAsArray\"\n        [model]=\"model\"\n        (modelChange)=\"fireModelChange($event)\"\n        [multiple]=\"multiple\"\n        [toggleable]=\"toggleable\"\n        [stylize]=\"stylize\"\n        [inputTemplateRefs]=\"templateRefs\"\n        [arrayKey]=\"arrayKey\"\n        [arrayToModelKey]=\"arrayToModelKey\"\n        [modelKey]=\"modelKey\"\n      ></ack-options>\n    </div>\n</ack-modal>\n" }]
        }], propDecorators: { allowClose: [{
                type: Input
            }], wrapStyle: [{
                type: Input
            }], wrapCellStyle: [{
                type: Input
            }], close: [{
                type: Output
            }], backgroundColor: [{
                type: Input
            }], backgroundColorChange: [{
                type: Output
            }], showModel: [{
                type: Input
            }], showModelChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrT3B0aW9uc01vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Fja09wdGlvbnNNb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9hY2stb3B0aW9ucy1tb2RhbC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUE7QUFDdEIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFBOzs7O0FBS2hELE1BQU0sT0FBTyxlQUFnQixTQUFRLFVBQVU7SUFIbEQ7O1FBT0UsZUFBZTtRQUNOLGVBQVUsR0FBVyxJQUFJLENBQUE7UUFJbEMscUJBQXFCO1FBQ1gsVUFBSyxHQUFxQixJQUFJLFlBQVksRUFBRSxDQUFBO1FBSTVDLDBCQUFxQixHQUFxQixJQUFJLFlBQVksRUFBRSxDQUFBO1FBQzdELGNBQVMsR0FBVyxJQUFJLENBQUE7UUFDdkIsb0JBQWUsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtLQU1yRTtJQUpDLGVBQWUsQ0FBQyxLQUFVO1FBQ3hCLElBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDOUIsQ0FBQzs7NEdBckJhLGVBQWU7Z0dBQWYsZUFBZSwyVkNYL0IseStCQThCQTsyRkRuQmdCLGVBQWU7a0JBSDlCLFNBQVM7K0JBQ0MsbUJBQW1COzhCQU9uQixVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFHSSxLQUFLO3NCQUFkLE1BQU07Z0JBR0UsZUFBZTtzQkFBdkIsS0FBSztnQkFDSSxxQkFBcUI7c0JBQTlCLE1BQU07Z0JBQ0UsU0FBUztzQkFBakIsS0FBSztnQkFDSSxlQUFlO3NCQUF4QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuaW1wb3J0IHsgQWNrT3B0aW9ucyB9IGZyb20gXCIuL0Fja09wdGlvbnMuY29tcG9uZW50XCJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOidhY2stb3B0aW9ucy1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2stb3B0aW9ucy1tb2RhbC5odG1sJ1xufSkgZXhwb3J0IGNsYXNzIEFja09wdGlvbnNNb2RhbCBleHRlbmRzIEFja09wdGlvbnN7XG4gIC8vYWNrTW9kYWxcbiAgYWNrT3B0aW9ucyE6IEFja09wdGlvbnNcblxuICAvL29uZSB3YXkgYmluZHNcbiAgQElucHV0KCkgYWxsb3dDbG9zZTpib29sZWFuID0gdHJ1ZVxuICBASW5wdXQoKSB3cmFwU3R5bGU6YW55XG4gIEBJbnB1dCgpIHdyYXBDZWxsU3R5bGU6YW55XG5cbiAgLy9vbmUgd2F5IGV4cHJlc3Npb25zXG4gIEBPdXRwdXQoKSBjbG9zZTpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIC8vdHdvIHdheSBiaW5kc1xuICBASW5wdXQoKSBiYWNrZ3JvdW5kQ29sb3I6YW55XG4gIEBPdXRwdXQoKSBiYWNrZ3JvdW5kQ29sb3JDaGFuZ2U6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgQElucHV0KCkgc2hvd01vZGVsOmJvb2xlYW4gPSB0cnVlXG4gIEBPdXRwdXQoKSBzaG93TW9kZWxDaGFuZ2U6RXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgZmlyZU1vZGVsQ2hhbmdlKG1vZGVsOiBhbnkpe1xuICAgIGlmKCF0aGlzLm11bHRpcGxlKXRoaXMuY2xvc2UuZW1pdCgpXG4gICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KG1vZGVsKVxuICB9XG59XG4iLCI8YWNrLW1vZGFsXG4gIChjbG9zZSk9XCJjbG9zZS5lbWl0KCRldmVudClcIlxuICBbYWxsb3dDbG9zZV09XCJhbGxvd0Nsb3NlXCJcbiAgW3Nob3dNb2RlbF09XCJzaG93TW9kZWxcIlxuICAoc2hvd01vZGVsQ2hhbmdlKT1cInNob3dNb2RlbENoYW5nZS5lbWl0KCRldmVudClcIlxuICBbaXNNb2RlbE1vZGVdPVwic2hvd01vZGVsQ2hhbmdlLm9ic2VydmVycy5sZW5ndGhcIlxuICBbd3JhcFN0eWxlXT1cIndyYXBTdHlsZVwiXG4gIFt3cmFwQ2VsbFN0eWxlXT1cIndyYXBDZWxsU3R5bGVcIlxuICBbYmFja2dyb3VuZENvbG9yXT1cImJhY2tncm91bmRDb2xvclwiXG4gIChiYWNrZ3JvdW5kQ29sb3JDaGFuZ2UpPVwiYmFja2dyb3VuZENvbG9yQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXG4gID5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPGRpdiBjbGFzcz1cImJvcmRlci1ncmV5LTZ4IGJvcmRlciBiZy13aGl0ZVwiPlxuICAgICAgPGFjay1vcHRpb25zXG4gICAgICAgICNhY2tPcHRpb25zPVwiXCJcbiAgICAgICAgW2FycmF5XT1cImFycmF5XCJcbiAgICAgICAgW21heF09XCJtYXhcIlxuICAgICAgICBbbW9kZWxBc0FycmF5XT1cIm1vZGVsQXNBcnJheVwiXG4gICAgICAgIFttb2RlbF09XCJtb2RlbFwiXG4gICAgICAgIChtb2RlbENoYW5nZSk9XCJmaXJlTW9kZWxDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFttdWx0aXBsZV09XCJtdWx0aXBsZVwiXG4gICAgICAgIFt0b2dnbGVhYmxlXT1cInRvZ2dsZWFibGVcIlxuICAgICAgICBbc3R5bGl6ZV09XCJzdHlsaXplXCJcbiAgICAgICAgW2lucHV0VGVtcGxhdGVSZWZzXT1cInRlbXBsYXRlUmVmc1wiXG4gICAgICAgIFthcnJheUtleV09XCJhcnJheUtleVwiXG4gICAgICAgIFthcnJheVRvTW9kZWxLZXldPVwiYXJyYXlUb01vZGVsS2V5XCJcbiAgICAgICAgW21vZGVsS2V5XT1cIm1vZGVsS2V5XCJcbiAgICAgID48L2Fjay1vcHRpb25zPlxuICAgIDwvZGl2PlxuPC9hY2stbW9kYWw+XG4iXX0=
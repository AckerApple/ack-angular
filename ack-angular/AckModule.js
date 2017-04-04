"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
//import { FormsModule }   from '@angular/forms';
//import { Ng2PageScrollModule } from 'ng2-page-scroll';
var providers_1 = require("./providers");
var components_1 = require("./components");
var pipes_1 = require("./pipes");
var declarations = components_1.declarations.concat(pipes_1.declarations);
var AckModule = (function () {
    function AckModule() {
    }
    return AckModule;
}());
AckModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule
                    //,AckOffline
                    //,BrowserAnimationsModule
                    //,FormsModule
                    //,Ng2PageScrollModule.forRoot()
                ],
                declarations: declarations,
                providers: providers_1.providers,
                exports: declarations.slice()
            },] },
];
/** @nocollapse */
AckModule.ctorParameters = function () { return []; };
exports.AckModule = AckModule;
//# sourceMappingURL=AckModule.js.map
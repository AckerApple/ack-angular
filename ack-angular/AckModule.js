"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
//import { Ng2PageScrollModule } from 'ng2-page-scroll';
var providers_1 = require("./providers");
var components_1 = require("./components");
var pipes_1 = require("./pipes");
var declarations = components_1.declarations.concat(pipes_1.declarations);
var AckModule = (function () {
    function AckModule() {
    }
    AckModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        forms_1.FormsModule,
                        http_1.HttpModule
                        //,AckOffline
                        //,BrowserAnimationsModule
                        //,Ng2PageScrollModule.forRoot()
                    ],
                    declarations: declarations,
                    providers: providers_1.providers,
                    exports: [forms_1.FormsModule, http_1.HttpModule].concat(declarations)
                },] },
    ];
    /** @nocollapse */
    AckModule.ctorParameters = function () { return []; };
    return AckModule;
}());
exports.AckModule = AckModule;
//# sourceMappingURL=AckModule.js.map
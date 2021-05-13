"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AckArray = exports.ack = exports.pipes = exports.components = exports.RouteWatchReporter = exports.AckRouterModule = exports.AckModule = void 0;
var AckModule_1 = require("./AckModule");
Object.defineProperty(exports, "AckModule", { enumerable: true, get: function () { return AckModule_1.AckModule; } });
var AckRouterModule_1 = require("./modules/router/AckRouterModule");
Object.defineProperty(exports, "AckRouterModule", { enumerable: true, get: function () { return AckRouterModule_1.AckRouterModule; } });
var RouteWatchReporter_1 = require("./modules/router/RouteWatchReporter");
Object.defineProperty(exports, "RouteWatchReporter", { enumerable: true, get: function () { return RouteWatchReporter_1.RouteWatchReporter; } });
var declarations_1 = require("./declarations");
Object.defineProperty(exports, "components", { enumerable: true, get: function () { return declarations_1.declarations; } });
var pipes_1 = require("./pipes");
Object.defineProperty(exports, "pipes", { enumerable: true, get: function () { return pipes_1.declarations; } });
var ack_1 = require("./ack");
Object.defineProperty(exports, "ack", { enumerable: true, get: function () { return ack_1.ack; } });
var AckArray_directive_1 = require("./directives/AckArray.directive");
Object.defineProperty(exports, "AckArray", { enumerable: true, get: function () { return AckArray_directive_1.AckArray; } });
// moved to /modules/offline
// export { httpOptions } from "./httpOptions"
// export { AckApi } from "./modules/offline/AckApi"
// export { AckOfflineModule } from "./modules/offline/module"; // no longer include by default
__exportStar(require("./providers"), exports);
//# sourceMappingURL=index.js.map
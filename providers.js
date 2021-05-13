"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providers = exports.DocumentService = exports.WindowService = exports.UrlVars = exports.ErrorLog = exports.Prompts = exports.AckApp = exports.Log = exports.HtmlSizeService = void 0;
var HtmlSizeWatcher_1 = require("./directives/HtmlSizeWatcher");
Object.defineProperty(exports, "HtmlSizeService", { enumerable: true, get: function () { return HtmlSizeWatcher_1.HtmlSizeService; } });
var HtmlSizeWatcher_2 = require("./directives/HtmlSizeWatcher");
var Log_1 = require("./providers/Log");
Object.defineProperty(exports, "Log", { enumerable: true, get: function () { return Log_1.Log; } });
var Log_2 = require("./providers/Log");
var AckApp_provider_1 = require("./providers/AckApp.provider");
Object.defineProperty(exports, "AckApp", { enumerable: true, get: function () { return AckApp_provider_1.AckApp; } });
var AckApp_provider_2 = require("./providers/AckApp.provider");
var Prompts_1 = require("./providers/Prompts");
Object.defineProperty(exports, "Prompts", { enumerable: true, get: function () { return Prompts_1.Prompts; } });
var Prompts_2 = require("./providers/Prompts");
var ErrorLog_1 = require("./providers/ErrorLog");
Object.defineProperty(exports, "ErrorLog", { enumerable: true, get: function () { return ErrorLog_1.ErrorLog; } });
var ErrorLog_2 = require("./providers/ErrorLog");
var UrlVars_1 = require("./providers/UrlVars");
Object.defineProperty(exports, "UrlVars", { enumerable: true, get: function () { return UrlVars_1.UrlVars; } });
var UrlVars_2 = require("./providers/UrlVars");
var WindowService_1 = require("./providers/WindowService");
Object.defineProperty(exports, "WindowService", { enumerable: true, get: function () { return WindowService_1.WindowService; } });
var WindowService_2 = require("./providers/WindowService");
var DocumentService_1 = require("./providers/DocumentService");
Object.defineProperty(exports, "DocumentService", { enumerable: true, get: function () { return DocumentService_1.DocumentService; } });
var DocumentService_2 = require("./providers/DocumentService");
exports.providers = [
    Log_2.Log,
    ErrorLog_2.ErrorLog,
    AckApp_provider_2.AckApp,
    UrlVars_2.UrlVars,
    WindowService_2.WindowService,
    DocumentService_2.DocumentService,
    Prompts_2.Prompts,
    HtmlSizeWatcher_2.HtmlSizeService
];
//# sourceMappingURL=providers.js.map
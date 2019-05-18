"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlSizeWatcher_1 = require("./directives/HtmlSizeWatcher");
exports.HtmlSizeService = HtmlSizeWatcher_1.HtmlSizeService;
var HtmlSizeWatcher_2 = require("./directives/HtmlSizeWatcher");
var Log_1 = require("./providers/Log");
exports.Log = Log_1.Log;
var Log_2 = require("./providers/Log");
var AckApp_provider_1 = require("./providers/AckApp.provider");
exports.AckApp = AckApp_provider_1.AckApp;
var AckApp_provider_2 = require("./providers/AckApp.provider");
var Prompts_1 = require("./providers/Prompts");
exports.Prompts = Prompts_1.Prompts;
var Prompts_2 = require("./providers/Prompts");
var ErrorLog_1 = require("./providers/ErrorLog");
exports.ErrorLog = ErrorLog_1.ErrorLog;
var ErrorLog_2 = require("./providers/ErrorLog");
var UrlVars_1 = require("./providers/UrlVars");
exports.UrlVars = UrlVars_1.UrlVars;
var UrlVars_2 = require("./providers/UrlVars");
var WindowService_1 = require("./providers/WindowService");
exports.WindowService = WindowService_1.WindowService;
var WindowService_2 = require("./providers/WindowService");
var DocumentService_1 = require("./providers/DocumentService");
exports.DocumentService = DocumentService_1.DocumentService;
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

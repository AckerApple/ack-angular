"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Log_1 = require("./Log");
exports.Log = Log_1.Log;
var ErrorLog_1 = require("./ErrorLog");
exports.ErrorLog = ErrorLog_1.ErrorLog;
var AckOffline_1 = require("./AckOffline");
exports.AckOffline = AckOffline_1.AckOffline;
var AckCache_1 = require("./AckCache");
exports.AckCache = AckCache_1.AckCache;
var AckQue_1 = require("./AckQue");
exports.AckQue = AckQue_1.AckQue;
var AckApi_1 = require("./AckApi");
exports.AckApi = AckApi_1.AckApi;
var AckOffline_2 = require("./AckOffline");
var AckCache_2 = require("./AckCache");
var AckQue_2 = require("./AckQue");
var ErrorLog_2 = require("./ErrorLog");
var Log_2 = require("./Log");
var AckApi_2 = require("./AckApi");
exports.providers = [
    Log_2.Log,
    ErrorLog_2.ErrorLog,
    AckOffline_2.AckOffline,
    AckCache_2.AckCache,
    AckQue_2.AckQue,
    AckApi_2.AckApi
];
//# sourceMappingURL=providers.js.map
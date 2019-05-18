"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AckOffline_1 = require("./AckOffline");
var AckCache_1 = require("./AckCache");
var AckQue_1 = require("./AckQue");
var AckApi_1 = require("./AckApi");
exports.providers = [
    AckApi_1.AckApi,
    AckOffline_1.AckOffline,
    AckCache_1.AckCache,
    AckQue_1.AckQue,
];

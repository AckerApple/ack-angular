"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AckOffline_1 = require("./AckOffline");
var AckQue = (function (_super) {
    __extends(AckQue, _super);
    function AckQue() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prefix = "offline-que";
        _this.handlers = [];
        return _this;
    }
    AckQue.prototype.get = function (name) {
        return _super.prototype.get.call(this, name)
            .then(function (data) { return data && data['que'] ? data['que'] : []; });
    };
    AckQue.prototype.getQue = function (name) {
        return this.get(name);
    };
    AckQue.prototype.setQue = function (name, que) {
        return this.set(name, que);
    };
    AckQue.prototype.que = function (name, queData) {
        var _this = this;
        return _super.prototype.get.call(this, name)
            .then(function (data) {
            data = data || {};
            data['que'] = data['que'] || [];
            if (queData.forEach) {
                queData.forEach(function (x) {
                    data['que'].push(x);
                });
            }
            else {
                data['que'].push(queData);
            }
            return _super.prototype.set.call(_this, name, data);
        });
    };
    AckQue.prototype.set = function (name, queData) {
        return this.que(name, queData);
    };
    AckQue.prototype.dequeByIndex = function (name, index) {
        var _this = this;
        return this.getQue(name)
            .then(function (array) {
            array.splice(index, 1);
            return array;
        })
            .then(function (array) { return _this.setQue(name, array); });
    };
    AckQue.prototype.processQuedByIndex = function (name, index) {
        var _this = this;
        var handler = this.getQueHandlerByName(name);
        var mem = { item: null, array: null, result: null };
        return this.getQue(name)
            .then(function (array) {
            mem.item = array.splice(index, 1);
            mem.array = array;
        })
            .then(function () { return _this.handleQued(mem.item, handler); })
            .then(function (result) { return mem.result = result; })
            .then(function () { return _this.setQue(name, mem.array); })
            .then(function () { return mem.result; });
    };
    AckQue.prototype.registerHandler = function (name, handler) {
        this.handlers.push({ name: name, handler: handler });
        return this;
    };
    AckQue.prototype.registerQueHandler = function (name, handler) {
        return this.registerHandler(name, handler);
    };
    AckQue.prototype.paramHandler = function (name, handler) {
        for (var x = this.handlers.length - 1; x >= 0; --x) {
            if (this.handlers[x].name == name) {
                return this;
            }
        }
        this.handlers.push({ name: name, handler: handler });
        return this;
    };
    AckQue.prototype.getQueHandDefByName = function (name) {
        for (var i = this.handlers.length - 1; i >= 0; --i) {
            if (this.handlers[i].name == name)
                return this.handlers[i];
        }
    };
    AckQue.prototype.getQueHandlerByName = function (name) {
        var hand = this.getQueHandDefByName(name);
        if (hand)
            return hand.handler;
    };
    AckQue.prototype.handleQued = function (qued, handler) {
        return Promise.resolve(handler(qued));
    };
    AckQue.prototype.processQuedHandler = function (hand) {
        var _this = this;
        var results = [];
        var mem = { que: [] };
        var eachHandle = this.eachHandler(hand.handler);
        return this.get(hand.name)
            .then(function (que) { return mem.que = que; })
            .then(function () { return _this.clear(hand.name); })
            .then(function () {
            var promise = Promise.resolve();
            mem.que.forEach(function (v) {
                promise = promise
                    .then(function () { return eachHandle(v); })
                    .catch(function (e) { return e; })
                    .then(function (r) { return results.push(r); });
            });
            return promise;
        })
            .then(function () { return results; });
    };
    AckQue.prototype.eachHandler = function (handler) {
        var _this = this;
        return function (data) { return _this.handleQued(data, handler); };
    };
    AckQue.prototype.processQue = function (name) {
        var handler = this.getQueHandDefByName(name);
        return handler ? this.processQuedHandler(handler) : Promise.resolve();
    };
    AckQue.prototype.processAllQues = function () {
        var _this = this;
        var promises = [];
        this.handlers.forEach(function (hand) {
            return promises.push(_this.processQuedHandler(hand));
        });
        return Promise.all(promises)
            .then(function (proms) {
            var results = [];
            proms.forEach(function (subArray) { return results.push.apply(results, subArray); });
            return Promise.all(results);
        });
    };
    AckQue = __decorate([
        core_1.Injectable()
    ], AckQue);
    return AckQue;
}(AckOffline_1.AckOffline));
exports.AckQue = AckQue;

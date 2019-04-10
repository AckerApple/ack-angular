"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const AckOffline_1 = require("./AckOffline");
let AckQue = class AckQue extends AckOffline_1.AckOffline {
    constructor() {
        super(...arguments);
        this.prefix = "offline-que";
        this.handlers = [];
    }
    get(name) {
        return super.get(name)
            .then(data => data && data['que'] ? data['que'] : []);
    }
    getQue(name) {
        return this.get(name);
    }
    setQue(name, que) {
        return this.set(name, que);
    }
    que(name, queData) {
        return super.get(name)
            .then(data => {
            data = data || {};
            data['que'] = data['que'] || [];
            if (queData.forEach) {
                queData.forEach(x => {
                    data['que'].push(x);
                });
            }
            else {
                data['que'].push(queData);
            }
            return super.set(name, data);
        });
    }
    set(name, queData) {
        return this.que(name, queData);
    }
    dequeByIndex(name, index) {
        return this.getQue(name)
            .then(array => {
            array.splice(index, 1);
            return array;
        })
            .then(array => this.setQue(name, array));
    }
    processQuedByIndex(name, index) {
        const handler = this.getQueHandlerByName(name);
        const mem = { item: null, array: null, result: null };
        return this.getQue(name)
            .then(array => {
            mem.item = array.splice(index, 1);
            mem.array = array;
        })
            .then(() => this.handleQued(mem.item, handler))
            .then(result => mem.result = result)
            .then(() => this.setQue(name, mem.array))
            .then(() => mem.result);
    }
    registerHandler(name, handler) {
        this.handlers.push({ name, handler });
        return this;
    }
    registerQueHandler(name, handler) {
        return this.registerHandler(name, handler);
    }
    paramHandler(name, handler) {
        for (let x = this.handlers.length - 1; x >= 0; --x) {
            if (this.handlers[x].name == name) {
                return this;
            }
        }
        this.handlers.push({ name, handler });
        return this;
    }
    getQueHandDefByName(name) {
        for (let i = this.handlers.length - 1; i >= 0; --i) {
            if (this.handlers[i].name == name)
                return this.handlers[i];
        }
    }
    getQueHandlerByName(name) {
        const hand = this.getQueHandDefByName(name);
        if (hand)
            return hand.handler;
    }
    handleQued(qued, handler) {
        return Promise.resolve(handler(qued));
    }
    processQuedHandler(hand) {
        const results = [];
        const mem = { que: [] };
        const eachHandle = this.eachHandler(hand.handler);
        return this.get(hand.name)
            .then(que => mem.que = que)
            .then(() => this.clear(hand.name))
            .then(() => {
            var promise = Promise.resolve();
            mem.que.forEach(v => {
                promise = promise
                    .then(() => eachHandle(v))
                    .catch(e => e)
                    .then(r => results.push(r));
            });
            return promise;
        })
            .then(() => results);
    }
    eachHandler(handler) {
        return data => this.handleQued(data, handler);
    }
    processQue(name) {
        const handler = this.getQueHandDefByName(name);
        return handler ? this.processQuedHandler(handler) : Promise.resolve();
    }
    processAllQues() {
        const promises = [];
        this.handlers.forEach(hand => promises.push(this.processQuedHandler(hand)));
        return Promise.all(promises)
            .then(proms => {
            const results = [];
            proms.forEach(subArray => results.push.apply(results, subArray));
            return Promise.all(results);
        });
    }
};
AckQue = __decorate([
    core_1.Injectable()
], AckQue);
exports.AckQue = AckQue;

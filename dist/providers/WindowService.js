import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
function getWindow() { return window; }
let WindowService = class WindowService {
    get nativeElement() { return getWindow(); }
    get nativeWindow() { return getWindow(); }
};
WindowService = __decorate([
    Injectable()
], WindowService);
export { WindowService };

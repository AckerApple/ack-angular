import { Injectable } from '@angular/core';
function getWindow() { return window; }
export class WindowService {
    get nativeElement() { return getWindow(); }
    get nativeWindow() { return getWindow(); }
}
WindowService.decorators = [
    { type: Injectable }
];

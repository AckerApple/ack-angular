import { Injectable } from '@angular/core';
import { WindowService } from "./WindowService";
export class UrlVars {
    constructor(WindowService) {
        this.WindowService = WindowService;
        this.vars = this.parse();
    }
    parse() {
        var regex = /[?&]([^=#]+)(=([^&#]*))?/g, url = this.WindowService.nativeWindow.location.href, params = {}, match;
        while (match = regex.exec(url)) {
            params[match[1]] = match[2] == null ? true : match[3];
        }
        return params;
    }
    get(name, param) {
        if (!name)
            return;
        if (this.vars && this.vars[name] != null)
            return this.vars[name];
        var lcase = name.toLowerCase();
        for (var key in this.vars) {
            if (lcase == key.toLowerCase())
                return this.vars[key];
        }
        return param;
    }
}
UrlVars.decorators = [
    { type: Injectable }
];
UrlVars.ctorParameters = () => [
    { type: WindowService }
];

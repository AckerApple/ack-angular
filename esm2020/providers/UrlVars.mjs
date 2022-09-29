import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./WindowService";
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
    /** case in-sensative variable fetch */
    get(name, param) {
        if (!name)
            return;
        if (this.vars && this.vars[name] != null) //try exact match first
            return this.vars[name];
        //case insensative search
        var lcase = name.toLowerCase();
        for (var key in this.vars) {
            if (lcase == key.toLowerCase())
                return this.vars[key];
        }
        return param;
    }
}
UrlVars.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: UrlVars, deps: [{ token: i1.WindowService }], target: i0.ɵɵFactoryTarget.Injectable });
UrlVars.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: UrlVars });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: UrlVars, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.WindowService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXJsVmFycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcm92aWRlcnMvVXJsVmFycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBOzs7QUFHNUIsTUFBTSxPQUFPLE9BQU87SUFHaEMsWUFBbUIsYUFBMkI7UUFBM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDMUIsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLEtBQUssR0FBRywyQkFBMkIsRUFDbkMsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQ25ELE1BQU0sR0FBRyxFQUFFLEVBQ1gsS0FBSyxDQUFDO1FBRVYsT0FBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM3QixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDcEQ7UUFDRCxPQUFPLE1BQU0sQ0FBQTtJQUNmLENBQUM7SUFFRCx1Q0FBdUM7SUFDdkMsR0FBRyxDQUFDLElBQVMsRUFBRSxLQUFXO1FBQ3hCLElBQUcsQ0FBQyxJQUFJO1lBQUMsT0FBTTtRQUVmLElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFFLElBQUksRUFBQyx1QkFBdUI7WUFDM0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRXhCLHlCQUF5QjtRQUN6QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDOUIsS0FBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFDO1lBQ3ZCLElBQUcsS0FBSyxJQUFJLEdBQUcsQ0FBQyxXQUFXLEVBQUU7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUN4QjtRQUVELE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQzs7b0dBbEN3QixPQUFPO3dHQUFQLE9BQU87MkZBQVAsT0FBTztrQkFBakMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgV2luZG93U2VydmljZSB9IGZyb20gXCIuL1dpbmRvd1NlcnZpY2VcIlxuXG5ASW5qZWN0YWJsZSgpIGV4cG9ydCBjbGFzcyBVcmxWYXJze1xuICB2YXJzXG5cbiAgY29uc3RydWN0b3IocHVibGljIFdpbmRvd1NlcnZpY2U6V2luZG93U2VydmljZSl7XG4gICAgdGhpcy52YXJzID0gdGhpcy5wYXJzZSgpXG4gIH1cblxuICBwYXJzZSgpe1xuICAgIHZhciByZWdleCA9IC9bPyZdKFtePSNdKykoPShbXiYjXSopKT8vZyxcbiAgICAgICAgdXJsID0gdGhpcy5XaW5kb3dTZXJ2aWNlLm5hdGl2ZVdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICBwYXJhbXMgPSB7fSxcbiAgICAgICAgbWF0Y2g7XG5cbiAgICB3aGlsZShtYXRjaCA9IHJlZ2V4LmV4ZWModXJsKSkge1xuICAgICAgcGFyYW1zW21hdGNoWzFdXSA9IG1hdGNoWzJdPT1udWxsID8gdHJ1ZSA6IG1hdGNoWzNdXG4gICAgfVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxuXG4gIC8qKiBjYXNlIGluLXNlbnNhdGl2ZSB2YXJpYWJsZSBmZXRjaCAqL1xuICBnZXQobmFtZTogYW55LCBwYXJhbT86IGFueSl7XG4gICAgaWYoIW5hbWUpcmV0dXJuXG5cbiAgICBpZih0aGlzLnZhcnMgJiYgdGhpcy52YXJzW25hbWVdIT1udWxsKS8vdHJ5IGV4YWN0IG1hdGNoIGZpcnN0XG4gICAgICByZXR1cm4gdGhpcy52YXJzW25hbWVdXG5cbiAgICAvL2Nhc2UgaW5zZW5zYXRpdmUgc2VhcmNoXG4gICAgdmFyIGxjYXNlID0gbmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgZm9yKHZhciBrZXkgaW4gdGhpcy52YXJzKXtcbiAgICAgIGlmKGxjYXNlID09IGtleS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICByZXR1cm4gdGhpcy52YXJzW2tleV1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1cbiAgfVxufVxuXG4iXX0=
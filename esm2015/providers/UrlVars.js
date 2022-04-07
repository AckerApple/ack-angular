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
UrlVars.decorators = [
    { type: Injectable }
];
UrlVars.ctorParameters = () => [
    { type: WindowService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXJsVmFycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcm92aWRlcnMvVXJsVmFycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTtBQUVqQyxNQUFNLE9BQU8sT0FBTztJQUdoQyxZQUFtQixhQUEyQjtRQUEzQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUM1QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUMxQixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksS0FBSyxHQUFHLDJCQUEyQixFQUNuQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksRUFDbkQsTUFBTSxHQUFHLEVBQUUsRUFDWCxLQUFLLENBQUM7UUFFVixPQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNwRDtRQUNELE9BQU8sTUFBTSxDQUFBO0lBQ2YsQ0FBQztJQUVELHVDQUF1QztJQUN2QyxHQUFHLENBQUMsSUFBUyxFQUFFLEtBQVc7UUFDeEIsSUFBRyxDQUFDLElBQUk7WUFBQyxPQUFNO1FBRWYsSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUUsSUFBSSxFQUFDLHVCQUF1QjtZQUMzRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFeEIseUJBQXlCO1FBQ3pCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUM5QixLQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUM7WUFDdkIsSUFBRyxLQUFLLElBQUksR0FBRyxDQUFDLFdBQVcsRUFBRTtnQkFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ3hCO1FBRUQsT0FBTyxLQUFLLENBQUE7SUFDZCxDQUFDOzs7WUFsQ0YsVUFBVTs7O1lBRkYsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgV2luZG93U2VydmljZSB9IGZyb20gXCIuL1dpbmRvd1NlcnZpY2VcIlxuXG5ASW5qZWN0YWJsZSgpIGV4cG9ydCBjbGFzcyBVcmxWYXJze1xuICB2YXJzXG5cbiAgY29uc3RydWN0b3IocHVibGljIFdpbmRvd1NlcnZpY2U6V2luZG93U2VydmljZSl7XG4gICAgdGhpcy52YXJzID0gdGhpcy5wYXJzZSgpXG4gIH1cblxuICBwYXJzZSgpe1xuICAgIHZhciByZWdleCA9IC9bPyZdKFtePSNdKykoPShbXiYjXSopKT8vZyxcbiAgICAgICAgdXJsID0gdGhpcy5XaW5kb3dTZXJ2aWNlLm5hdGl2ZVdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICBwYXJhbXMgPSB7fSxcbiAgICAgICAgbWF0Y2g7XG5cbiAgICB3aGlsZShtYXRjaCA9IHJlZ2V4LmV4ZWModXJsKSkge1xuICAgICAgcGFyYW1zW21hdGNoWzFdXSA9IG1hdGNoWzJdPT1udWxsID8gdHJ1ZSA6IG1hdGNoWzNdXG4gICAgfVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxuXG4gIC8qKiBjYXNlIGluLXNlbnNhdGl2ZSB2YXJpYWJsZSBmZXRjaCAqL1xuICBnZXQobmFtZTogYW55LCBwYXJhbT86IGFueSl7XG4gICAgaWYoIW5hbWUpcmV0dXJuXG5cbiAgICBpZih0aGlzLnZhcnMgJiYgdGhpcy52YXJzW25hbWVdIT1udWxsKS8vdHJ5IGV4YWN0IG1hdGNoIGZpcnN0XG4gICAgICByZXR1cm4gdGhpcy52YXJzW25hbWVdXG5cbiAgICAvL2Nhc2UgaW5zZW5zYXRpdmUgc2VhcmNoXG4gICAgdmFyIGxjYXNlID0gbmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgZm9yKHZhciBrZXkgaW4gdGhpcy52YXJzKXtcbiAgICAgIGlmKGxjYXNlID09IGtleS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICByZXR1cm4gdGhpcy52YXJzW2tleV1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1cbiAgfVxufVxuXG4iXX0=
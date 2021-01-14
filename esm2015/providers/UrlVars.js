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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXJsVmFycy5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9zcmMvIiwic291cmNlcyI6WyJwcm92aWRlcnMvVXJsVmFycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTtBQUVqQyxNQUFNLE9BQU8sT0FBTztJQUdoQyxZQUFtQixhQUEyQjtRQUEzQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUM1QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUMxQixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksS0FBSyxHQUFHLDJCQUEyQixFQUNuQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksRUFDbkQsTUFBTSxHQUFHLEVBQUUsRUFDWCxLQUFLLENBQUM7UUFFVixPQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNwRDtRQUNELE9BQU8sTUFBTSxDQUFBO0lBQ2YsQ0FBQztJQUVELHVDQUF1QztJQUN2QyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQU07UUFDZCxJQUFHLENBQUMsSUFBSTtZQUFDLE9BQU07UUFFZixJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBRSxJQUFJLEVBQUMsdUJBQXVCO1lBQzNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUV4Qix5QkFBeUI7UUFDekIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzlCLEtBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBQztZQUN2QixJQUFHLEtBQUssSUFBSSxHQUFHLENBQUMsV0FBVyxFQUFFO2dCQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDeEI7UUFFRCxPQUFPLEtBQUssQ0FBQTtJQUNkLENBQUM7OztZQWxDRixVQUFVOzs7WUFGRixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlIH0gZnJvbSBcIi4vV2luZG93U2VydmljZVwiXG5cbkBJbmplY3RhYmxlKCkgZXhwb3J0IGNsYXNzIFVybFZhcnN7XG4gIHZhcnNcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgV2luZG93U2VydmljZTpXaW5kb3dTZXJ2aWNlKXtcbiAgICB0aGlzLnZhcnMgPSB0aGlzLnBhcnNlKClcbiAgfVxuXG4gIHBhcnNlKCl7XG4gICAgdmFyIHJlZ2V4ID0gL1s/Jl0oW149I10rKSg9KFteJiNdKikpPy9nLFxuICAgICAgICB1cmwgPSB0aGlzLldpbmRvd1NlcnZpY2UubmF0aXZlV2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgIHBhcmFtcyA9IHt9LFxuICAgICAgICBtYXRjaDtcblxuICAgIHdoaWxlKG1hdGNoID0gcmVnZXguZXhlYyh1cmwpKSB7XG4gICAgICBwYXJhbXNbbWF0Y2hbMV1dID0gbWF0Y2hbMl09PW51bGwgPyB0cnVlIDogbWF0Y2hbM11cbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG5cbiAgLyoqIGNhc2UgaW4tc2Vuc2F0aXZlIHZhcmlhYmxlIGZldGNoICovXG4gIGdldChuYW1lLCBwYXJhbT8pe1xuICAgIGlmKCFuYW1lKXJldHVyblxuXG4gICAgaWYodGhpcy52YXJzICYmIHRoaXMudmFyc1tuYW1lXSE9bnVsbCkvL3RyeSBleGFjdCBtYXRjaCBmaXJzdFxuICAgICAgcmV0dXJuIHRoaXMudmFyc1tuYW1lXVxuXG4gICAgLy9jYXNlIGluc2Vuc2F0aXZlIHNlYXJjaFxuICAgIHZhciBsY2FzZSA9IG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGZvcih2YXIga2V5IGluIHRoaXMudmFycyl7XG4gICAgICBpZihsY2FzZSA9PSBrZXkudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgcmV0dXJuIHRoaXMudmFyc1trZXldXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtXG4gIH1cbn1cblxuIl19
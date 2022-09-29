import { Injectable } from "@angular/core";
import { NavigationEnd } from "@angular/router";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class RouteHistory {
    constructor(Router) {
        this.Router = Router;
        this.routeHistory = [];
        this.maxHistory = 10;
        this.historyIndex = 0;
        this.subs = [];
        this.monitor();
    }
    monitor() {
        this.subs.push(this.Router.events.subscribe(event => {
            if (event.constructor === NavigationEnd) {
                this.addRouteToHistory();
            }
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    addRouteToHistory() {
        const priorPage = this.historyIndex + 1;
        const nextPage = this.historyIndex - 1;
        const matchesBack = this.routeHistory.length >= priorPage && this.Router.url === this.routeHistory[priorPage];
        const matchesNext = this.routeHistory.length >= nextPage && this.Router.url === this.routeHistory[nextPage];
        const matchesCurrent = this.Router.url === this.routeHistory[this.historyIndex];
        if (matchesNext) {
            --this.historyIndex;
        }
        if (matchesBack) {
            ++this.historyIndex;
        }
        if (matchesNext || matchesCurrent || matchesBack) {
            this.applyNav();
            return;
        }
        //remove old entries
        while (this.routeHistory.length > this.maxHistory) {
            //this.routeHistory.shift()
            this.routeHistory.pop();
        }
        //this.routeHistory.push(this.Router.url)
        this.routeHistory.splice(this.historyIndex, 0, this.Router.url);
        this.applyNav();
    }
    applyNav() {
        const posAvail = this.historyIndex < this.routeHistory.length - 1;
        if (posAvail) {
            this.back = this.routeHistory[this.historyIndex + 1];
        }
        else if (this.routeHistory.length) {
            const newBack = this.routeHistory[this.routeHistory.length - 1].split("/");
            newBack.pop();
            this.back = newBack.join("/");
            ++this.historyIndex;
        }
        else {
            delete this.back;
        }
        if (this.historyIndex > 0) {
            this.forward = this.routeHistory[this.historyIndex - 1];
        }
        else {
            delete this.forward;
        }
    }
    goBack() {
        if (this.historyIndex === this.routeHistory.length - 1)
            return;
        //++this.historyIndex
        const rh = this.routeHistory[this.historyIndex + 1];
        this.Router.navigate([rh]);
    }
    goForward() {
        if (this.historyIndex === 0)
            return;
        //--this.historyIndex
        const rh = this.routeHistory[this.historyIndex - 1];
        this.Router.navigate([rh]);
    }
}
RouteHistory.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: RouteHistory, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
RouteHistory.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: RouteHistory });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: RouteHistory, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm91dGVIaXN0b3J5LnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcm91dGVyL1JvdXRlSGlzdG9yeS5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzFDLE9BQU8sRUFFTCxhQUFhLEVBQ2QsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRVgsTUFBTSxPQUFPLFlBQVk7SUFRckMsWUFDUyxNQUFhO1FBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQVJ0QixpQkFBWSxHQUFhLEVBQUUsQ0FBQTtRQUMzQixlQUFVLEdBQVcsRUFBRSxDQUFBO1FBQ3ZCLGlCQUFZLEdBQVcsQ0FBQyxDQUFBO1FBQ3hCLFNBQUksR0FBbUIsRUFBRSxDQUFBO1FBT3ZCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNoQixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUEsRUFBRTtZQUNsQyxJQUFHLEtBQUssQ0FBQyxXQUFXLEtBQUssYUFBYSxFQUFDO2dCQUNyQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTthQUN6QjtRQUNILENBQUMsQ0FBQyxDQUNILENBQUE7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQSxFQUFFLENBQUEsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUE7SUFDM0MsQ0FBQztJQUVELGlCQUFpQjtRQUNmLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sV0FB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RyxDQUFDO1lBQUUsT0FBTTtRQUNqQyxxQkFBcUI7UUFDckIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBRSxJQUFJLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBRSxDQUFBO1FBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUM1QixDQUFDOzt5R0E1RndCLFlBQVk7NkdBQVosWUFBWTsyRkFBWixZQUFZO2tCQUF0QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcbmltcG9ydCB7XG4gIFJvdXRlcixcbiAgTmF2aWdhdGlvbkVuZFxufSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBJbmplY3RhYmxlKCkgZXhwb3J0IGNsYXNzIFJvdXRlSGlzdG9yeXtcbiAgcm91dGVIaXN0b3J5OiBzdHJpbmdbXSA9IFtdXG4gIG1heEhpc3Rvcnk6IG51bWJlciA9IDEwXG4gIGhpc3RvcnlJbmRleDogbnVtYmVyID0gMFxuICBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdXG4gIGZvcndhcmQ/OiBzdHJpbmcvL3VybFxuICBiYWNrPzogc3RyaW5nLy91cmxcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgUm91dGVyOlJvdXRlclxuICApe1xuICAgIHRoaXMubW9uaXRvcigpXG4gIH1cblxuICBtb25pdG9yKCl7XG4gICAgdGhpcy5zdWJzLnB1c2goXG4gICAgICB0aGlzLlJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50PT57XG4gICAgICAgIGlmKGV2ZW50LmNvbnN0cnVjdG9yID09PSBOYXZpZ2F0aW9uRW5kKXtcbiAgICAgICAgICB0aGlzLmFkZFJvdXRlVG9IaXN0b3J5KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1Yj0+c3ViLnVuc3Vic2NyaWJlKCkpXG4gIH1cblxuICBhZGRSb3V0ZVRvSGlzdG9yeSgpOnZvaWR7XG4gICAgY29uc3QgcHJpb3JQYWdlID0gdGhpcy5oaXN0b3J5SW5kZXggKyAxXG4gICAgY29uc3QgbmV4dFBhZ2UgPSB0aGlzLmhpc3RvcnlJbmRleCAtIDFcbiAgICBjb25zdCBtYXRjaGVzQmFjayA9IHRoaXMucm91dGVIaXN0b3J5Lmxlbmd0aD49cHJpb3JQYWdlICYmIHRoaXMuUm91dGVyLnVybCA9PT0gdGhpcy5yb3V0ZUhpc3RvcnlbIHByaW9yUGFnZSBdXG4gICAgY29uc3QgbWF0Y2hlc05leHQgPSB0aGlzLnJvdXRlSGlzdG9yeS5sZW5ndGg+PW5leHRQYWdlICYmIHRoaXMuUm91dGVyLnVybCA9PT0gdGhpcy5yb3V0ZUhpc3RvcnlbIG5leHRQYWdlIF1cbiAgICBjb25zdCBtYXRjaGVzQ3VycmVudCA9IHRoaXMuUm91dGVyLnVybCA9PT0gdGhpcy5yb3V0ZUhpc3RvcnlbIHRoaXMuaGlzdG9yeUluZGV4IF1cblxuICAgIGlmKCBtYXRjaGVzTmV4dCApe1xuICAgICAgLS10aGlzLmhpc3RvcnlJbmRleFxuICAgIH1cblxuICAgIGlmKCBtYXRjaGVzQmFjayApe1xuICAgICAgKyt0aGlzLmhpc3RvcnlJbmRleFxuICAgIH1cblxuICAgIGlmKG1hdGNoZXNOZXh0IHx8IG1hdGNoZXNDdXJyZW50IHx8IG1hdGNoZXNCYWNrKXtcbiAgICAgIHRoaXMuYXBwbHlOYXYoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy9yZW1vdmUgb2xkIGVudHJpZXNcbiAgICB3aGlsZSh0aGlzLnJvdXRlSGlzdG9yeS5sZW5ndGggPiB0aGlzLm1heEhpc3Rvcnkpe1xuICAgICAgLy90aGlzLnJvdXRlSGlzdG9yeS5zaGlmdCgpXG4gICAgICB0aGlzLnJvdXRlSGlzdG9yeS5wb3AoKVxuICAgIH1cblxuICAgIC8vdGhpcy5yb3V0ZUhpc3RvcnkucHVzaCh0aGlzLlJvdXRlci51cmwpXG4gICAgdGhpcy5yb3V0ZUhpc3Rvcnkuc3BsaWNlKHRoaXMuaGlzdG9yeUluZGV4LCAwLCB0aGlzLlJvdXRlci51cmwpXG4gICAgdGhpcy5hcHBseU5hdigpXG4gIH1cblxuICBhcHBseU5hdigpe1xuICAgIGNvbnN0IHBvc0F2YWlsID0gdGhpcy5oaXN0b3J5SW5kZXggPCB0aGlzLnJvdXRlSGlzdG9yeS5sZW5ndGgtMVxuXG4gICAgaWYoIHBvc0F2YWlsICl7XG4gICAgICB0aGlzLmJhY2sgPSB0aGlzLnJvdXRlSGlzdG9yeVsgdGhpcy5oaXN0b3J5SW5kZXgrMSBdXG4gICAgfSBlbHNlIGlmICh0aGlzLnJvdXRlSGlzdG9yeS5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgbmV3QmFjayA9IHRoaXMucm91dGVIaXN0b3J5W3RoaXMucm91dGVIaXN0b3J5Lmxlbmd0aCAtIDFdLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgbmV3QmFjay5wb3AoKTtcbiAgICAgICAgdGhpcy5iYWNrID0gbmV3QmFjay5qb2luKFwiL1wiKTtcbiAgICAgICAgKyt0aGlzLmhpc3RvcnlJbmRleDtcbiAgICB9ZWxzZXtcbiAgICAgIGRlbGV0ZSB0aGlzLmJhY2tcbiAgICB9XG5cbiAgICBpZiggdGhpcy5oaXN0b3J5SW5kZXg+MCApe1xuICAgICAgdGhpcy5mb3J3YXJkID0gdGhpcy5yb3V0ZUhpc3RvcnlbIHRoaXMuaGlzdG9yeUluZGV4LTFdXG4gICAgfWVsc2V7XG4gICAgICBkZWxldGUgdGhpcy5mb3J3YXJkXG4gICAgfVxuICB9XG5cbiAgZ29CYWNrKCl7XG4gICAgaWYoIHRoaXMuaGlzdG9yeUluZGV4PT09dGhpcy5yb3V0ZUhpc3RvcnkubGVuZ3RoLTEgKXJldHVyblxuICAgIC8vKyt0aGlzLmhpc3RvcnlJbmRleFxuICAgIGNvbnN0IHJoID0gdGhpcy5yb3V0ZUhpc3RvcnlbIHRoaXMuaGlzdG9yeUluZGV4KzEgXVxuICAgIHRoaXMuUm91dGVyLm5hdmlnYXRlKFtyaF0pXG4gIH1cblxuICBnb0ZvcndhcmQoKXtcbiAgICBpZiggdGhpcy5oaXN0b3J5SW5kZXg9PT0wIClyZXR1cm5cbiAgICAvLy0tdGhpcy5oaXN0b3J5SW5kZXhcbiAgICBjb25zdCByaCA9IHRoaXMucm91dGVIaXN0b3J5WyB0aGlzLmhpc3RvcnlJbmRleC0xIF1cbiAgICB0aGlzLlJvdXRlci5uYXZpZ2F0ZShbcmhdKVxuICB9XG59XG4iXX0=
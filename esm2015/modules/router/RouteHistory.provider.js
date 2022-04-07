import { Injectable } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
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
RouteHistory.decorators = [
    { type: Injectable }
];
RouteHistory.ctorParameters = () => [
    { type: Router }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm91dGVIaXN0b3J5LnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcm91dGVyL1JvdXRlSGlzdG9yeS5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzFDLE9BQU8sRUFDTCxNQUFNLEVBQ04sYUFBYSxFQUNkLE1BQU0saUJBQWlCLENBQUM7QUFFWCxNQUFNLE9BQU8sWUFBWTtJQVFyQyxZQUNTLE1BQWE7UUFBYixXQUFNLEdBQU4sTUFBTSxDQUFPO1FBUnRCLGlCQUFZLEdBQWEsRUFBRSxDQUFBO1FBQzNCLGVBQVUsR0FBVyxFQUFFLENBQUE7UUFDdkIsaUJBQVksR0FBVyxDQUFDLENBQUE7UUFDeEIsU0FBSSxHQUFtQixFQUFFLENBQUE7UUFPdkIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ2hCLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQSxFQUFFO1lBQ2xDLElBQUcsS0FBSyxDQUFDLFdBQVcsS0FBSyxhQUFhLEVBQUM7Z0JBQ3JDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO2FBQ3pCO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQTtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFBLEVBQUUsQ0FBQSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUE7UUFDdkMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUE7UUFDdEMs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WUFBWSxLQUFHLENBQUM7WUFBRSxPQUFNO1FBQ2pDLHFCQUFxQjtRQUNyQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFFLElBQUksQ0FBQyxZQUFZLEdBQUMsQ0FBQyxDQUFFLENBQUE7UUFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzVCLENBQUM7OztZQTVGRixVQUFVOzs7WUFKVCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcbmltcG9ydCB7XG4gIFJvdXRlcixcbiAgTmF2aWdhdGlvbkVuZFxufSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBJbmplY3RhYmxlKCkgZXhwb3J0IGNsYXNzIFJvdXRlSGlzdG9yeXtcbiAgcm91dGVIaXN0b3J5OiBzdHJpbmdbXSA9IFtdXG4gIG1heEhpc3Rvcnk6IG51bWJlciA9IDEwXG4gIGhpc3RvcnlJbmRleDogbnVtYmVyID0gMFxuICBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdXG4gIGZvcndhcmQ/OiBzdHJpbmcvL3VybFxuICBiYWNrPzogc3RyaW5nLy91cmxcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgUm91dGVyOlJvdXRlclxuICApe1xuICAgIHRoaXMubW9uaXRvcigpXG4gIH1cblxuICBtb25pdG9yKCl7XG4gICAgdGhpcy5zdWJzLnB1c2goXG4gICAgICB0aGlzLlJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50PT57XG4gICAgICAgIGlmKGV2ZW50LmNvbnN0cnVjdG9yID09PSBOYXZpZ2F0aW9uRW5kKXtcbiAgICAgICAgICB0aGlzLmFkZFJvdXRlVG9IaXN0b3J5KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1Yj0+c3ViLnVuc3Vic2NyaWJlKCkpXG4gIH1cblxuICBhZGRSb3V0ZVRvSGlzdG9yeSgpOnZvaWR7XG4gICAgY29uc3QgcHJpb3JQYWdlID0gdGhpcy5oaXN0b3J5SW5kZXggKyAxXG4gICAgY29uc3QgbmV4dFBhZ2UgPSB0aGlzLmhpc3RvcnlJbmRleCAtIDFcbiAgICBjb25zdCBtYXRjaGVzQmFjayA9IHRoaXMucm91dGVIaXN0b3J5Lmxlbmd0aD49cHJpb3JQYWdlICYmIHRoaXMuUm91dGVyLnVybCA9PT0gdGhpcy5yb3V0ZUhpc3RvcnlbIHByaW9yUGFnZSBdXG4gICAgY29uc3QgbWF0Y2hlc05leHQgPSB0aGlzLnJvdXRlSGlzdG9yeS5sZW5ndGg+PW5leHRQYWdlICYmIHRoaXMuUm91dGVyLnVybCA9PT0gdGhpcy5yb3V0ZUhpc3RvcnlbIG5leHRQYWdlIF1cbiAgICBjb25zdCBtYXRjaGVzQ3VycmVudCA9IHRoaXMuUm91dGVyLnVybCA9PT0gdGhpcy5yb3V0ZUhpc3RvcnlbIHRoaXMuaGlzdG9yeUluZGV4IF1cblxuICAgIGlmKCBtYXRjaGVzTmV4dCApe1xuICAgICAgLS10aGlzLmhpc3RvcnlJbmRleFxuICAgIH1cblxuICAgIGlmKCBtYXRjaGVzQmFjayApe1xuICAgICAgKyt0aGlzLmhpc3RvcnlJbmRleFxuICAgIH1cblxuICAgIGlmKG1hdGNoZXNOZXh0IHx8IG1hdGNoZXNDdXJyZW50IHx8IG1hdGNoZXNCYWNrKXtcbiAgICAgIHRoaXMuYXBwbHlOYXYoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy9yZW1vdmUgb2xkIGVudHJpZXNcbiAgICB3aGlsZSh0aGlzLnJvdXRlSGlzdG9yeS5sZW5ndGggPiB0aGlzLm1heEhpc3Rvcnkpe1xuICAgICAgLy90aGlzLnJvdXRlSGlzdG9yeS5zaGlmdCgpXG4gICAgICB0aGlzLnJvdXRlSGlzdG9yeS5wb3AoKVxuICAgIH1cblxuICAgIC8vdGhpcy5yb3V0ZUhpc3RvcnkucHVzaCh0aGlzLlJvdXRlci51cmwpXG4gICAgdGhpcy5yb3V0ZUhpc3Rvcnkuc3BsaWNlKHRoaXMuaGlzdG9yeUluZGV4LCAwLCB0aGlzLlJvdXRlci51cmwpXG4gICAgdGhpcy5hcHBseU5hdigpXG4gIH1cblxuICBhcHBseU5hdigpe1xuICAgIGNvbnN0IHBvc0F2YWlsID0gdGhpcy5oaXN0b3J5SW5kZXggPCB0aGlzLnJvdXRlSGlzdG9yeS5sZW5ndGgtMVxuXG4gICAgaWYoIHBvc0F2YWlsICl7XG4gICAgICB0aGlzLmJhY2sgPSB0aGlzLnJvdXRlSGlzdG9yeVsgdGhpcy5oaXN0b3J5SW5kZXgrMSBdXG4gICAgfSBlbHNlIGlmICh0aGlzLnJvdXRlSGlzdG9yeS5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgbmV3QmFjayA9IHRoaXMucm91dGVIaXN0b3J5W3RoaXMucm91dGVIaXN0b3J5Lmxlbmd0aCAtIDFdLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgbmV3QmFjay5wb3AoKTtcbiAgICAgICAgdGhpcy5iYWNrID0gbmV3QmFjay5qb2luKFwiL1wiKTtcbiAgICAgICAgKyt0aGlzLmhpc3RvcnlJbmRleDtcbiAgICB9ZWxzZXtcbiAgICAgIGRlbGV0ZSB0aGlzLmJhY2tcbiAgICB9XG5cbiAgICBpZiggdGhpcy5oaXN0b3J5SW5kZXg+MCApe1xuICAgICAgdGhpcy5mb3J3YXJkID0gdGhpcy5yb3V0ZUhpc3RvcnlbIHRoaXMuaGlzdG9yeUluZGV4LTFdXG4gICAgfWVsc2V7XG4gICAgICBkZWxldGUgdGhpcy5mb3J3YXJkXG4gICAgfVxuICB9XG5cbiAgZ29CYWNrKCl7XG4gICAgaWYoIHRoaXMuaGlzdG9yeUluZGV4PT09dGhpcy5yb3V0ZUhpc3RvcnkubGVuZ3RoLTEgKXJldHVyblxuICAgIC8vKyt0aGlzLmhpc3RvcnlJbmRleFxuICAgIGNvbnN0IHJoID0gdGhpcy5yb3V0ZUhpc3RvcnlbIHRoaXMuaGlzdG9yeUluZGV4KzEgXVxuICAgIHRoaXMuUm91dGVyLm5hdmlnYXRlKFtyaF0pXG4gIH1cblxuICBnb0ZvcndhcmQoKXtcbiAgICBpZiggdGhpcy5oaXN0b3J5SW5kZXg9PT0wIClyZXR1cm5cbiAgICAvLy0tdGhpcy5oaXN0b3J5SW5kZXhcbiAgICBjb25zdCByaCA9IHRoaXMucm91dGVIaXN0b3J5WyB0aGlzLmhpc3RvcnlJbmRleC0xIF1cbiAgICB0aGlzLlJvdXRlci5uYXZpZ2F0ZShbcmhdKVxuICB9XG59XG4iXX0=
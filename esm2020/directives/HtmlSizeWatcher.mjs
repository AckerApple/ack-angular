import { Injectable, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export class HtmlSizeService {
    constructor() {
        this.change = new EventEmitter();
        this.htmlSize = { width: null, height: null };
        this.onResize = () => {
            this.htmlSize.width = window.document.documentElement.clientWidth;
            this.htmlSize.height = window.document.documentElement.clientHeight;
            this.change.emit();
        };
        this.checkWatchers();
        this.onResize();
    }
    checkWatchers() {
        if (this.change.observers.length) {
            window.addEventListener('resize', this.onResize);
            //window.addEventListener('scroll', this.onResize)
        }
        else {
            window.removeEventListener('resize', this.onResize);
            //window.removeEventListener('scroll', this.onResize)
        }
    }
}
HtmlSizeService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: HtmlSizeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
HtmlSizeService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: HtmlSizeService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: HtmlSizeService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; }, propDecorators: { change: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHRtbFNpemVXYXRjaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RpcmVjdGl2ZXMvSHRtbFNpemVXYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFDakMsTUFBTSxlQUFlLENBQUE7O0FBT1IsTUFBTSxPQUFPLGVBQWU7SUFNeEM7UUFGVSxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUE7UUFHdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLElBQUksRUFBQyxDQUFBO1FBRXpDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQTtZQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUE7WUFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNwQixDQUFDLENBQUE7UUFFRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDcEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ2pCLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDaEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDaEQsa0RBQWtEO1NBQ25EO2FBQUk7WUFDSCxNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNuRCxxREFBcUQ7U0FDdEQ7SUFDSCxDQUFDOzs0R0EzQndCLGVBQWU7Z0hBQWYsZUFBZTsyRkFBZixlQUFlO2tCQUF6QyxVQUFVOzBFQUlDLE1BQU07c0JBQWYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsIE91dHB1dCwgRXZlbnRFbWl0dGVyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuZXhwb3J0IGludGVyZmFjZSBodG1sU2l6ZXtcbiAgd2lkdGg6IG51bWJlciB8IG51bGxcbiAgaGVpZ2h0OiBudW1iZXIgfCBudWxsXG59XG5cbkBJbmplY3RhYmxlKCkgZXhwb3J0IGNsYXNzIEh0bWxTaXplU2VydmljZSB7XG4gIHByaXZhdGUgb25SZXNpemU6KCk9PnZvaWRcbiAgaHRtbFNpemU6aHRtbFNpemVcblxuICBAT3V0cHV0KCkgY2hhbmdlOkV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5odG1sU2l6ZSA9IHt3aWR0aDpudWxsLCBoZWlnaHQ6bnVsbH1cblxuICAgIHRoaXMub25SZXNpemUgPSAoKT0+e1xuICAgICAgdGhpcy5odG1sU2l6ZS53aWR0aCA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICAgIHRoaXMuaHRtbFNpemUuaGVpZ2h0ID0gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoKVxuICAgIH1cblxuICAgIHRoaXMuY2hlY2tXYXRjaGVycygpXG4gICAgdGhpcy5vblJlc2l6ZSgpXG4gIH1cblxuICBjaGVja1dhdGNoZXJzKCl7XG4gICAgaWYoIHRoaXMuY2hhbmdlLm9ic2VydmVycy5sZW5ndGggKXtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplKVxuICAgICAgLy93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblJlc2l6ZSlcbiAgICB9ZWxzZXtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplKVxuICAgICAgLy93aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblJlc2l6ZSlcbiAgICB9XG4gIH1cbn0iXX0=
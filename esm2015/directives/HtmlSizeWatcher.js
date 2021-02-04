//import { Subscription } from "rxjs/internal/Subscription"
import { Injectable, Output, EventEmitter } from "@angular/core";
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
HtmlSizeService.decorators = [
    { type: Injectable }
];
HtmlSizeService.ctorParameters = () => [];
HtmlSizeService.propDecorators = {
    change: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHRtbFNpemVXYXRjaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RpcmVjdGl2ZXMvSHRtbFNpemVXYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJEQUEyRDtBQUUzRCxPQUFPLEVBQ0wsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQ2pDLE1BQU0sZUFBZSxDQUFBO0FBT1IsTUFBTSxPQUFPLGVBQWU7SUFNeEM7UUFGVSxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUE7UUFHdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLElBQUksRUFBQyxDQUFBO1FBRXpDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQTtZQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUE7WUFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNwQixDQUFDLENBQUE7UUFFRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDcEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ2pCLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDaEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDaEQsa0RBQWtEO1NBQ25EO2FBQUk7WUFDSCxNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNuRCxxREFBcUQ7U0FDdEQ7SUFDSCxDQUFDOzs7WUEzQkYsVUFBVTs7OztxQkFJUixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9pbnRlcm5hbC9TdWJzY3JpcHRpb25cIlxuXG5pbXBvcnQge1xuICBJbmplY3RhYmxlLCBPdXRwdXQsIEV2ZW50RW1pdHRlclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgaHRtbFNpemV7XG4gIHdpZHRoOiBudW1iZXJcbiAgaGVpZ2h0OiBudW1iZXJcbn1cblxuQEluamVjdGFibGUoKSBleHBvcnQgY2xhc3MgSHRtbFNpemVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBvblJlc2l6ZTooKT0+dm9pZFxuICBodG1sU2l6ZTpodG1sU2l6ZVxuXG4gIEBPdXRwdXQoKSBjaGFuZ2U6RXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLmh0bWxTaXplID0ge3dpZHRoOm51bGwsIGhlaWdodDpudWxsfVxuXG4gICAgdGhpcy5vblJlc2l6ZSA9ICgpPT57XG4gICAgICB0aGlzLmh0bWxTaXplLndpZHRoID0gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgICAgdGhpcy5odG1sU2l6ZS5oZWlnaHQgPSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCgpXG4gICAgfVxuXG4gICAgdGhpcy5jaGVja1dhdGNoZXJzKClcbiAgICB0aGlzLm9uUmVzaXplKClcbiAgfVxuXG4gIGNoZWNrV2F0Y2hlcnMoKXtcbiAgICBpZiggdGhpcy5jaGFuZ2Uub2JzZXJ2ZXJzLmxlbmd0aCApe1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUpXG4gICAgICAvL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uUmVzaXplKVxuICAgIH1lbHNle1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUpXG4gICAgICAvL3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uUmVzaXplKVxuICAgIH1cbiAgfVxufSJdfQ==
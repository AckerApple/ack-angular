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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHRtbFNpemVXYXRjaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RpcmVjdGl2ZXMvSHRtbFNpemVXYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJEQUEyRDtBQUUzRCxPQUFPLEVBQ0wsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQ2pDLE1BQU0sZUFBZSxDQUFBO0FBT1IsTUFBTSxPQUFPLGVBQWU7SUFNeEM7UUFGVSxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUE7UUFHdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLElBQUksRUFBQyxDQUFBO1FBRXpDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQTtZQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUE7WUFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNwQixDQUFDLENBQUE7UUFFRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDcEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ2pCLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDaEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDaEQsa0RBQWtEO1NBQ25EO2FBQUk7WUFDSCxNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNuRCxxREFBcUQ7U0FDdEQ7SUFDSCxDQUFDOzs7WUEzQkYsVUFBVTs7OztxQkFJUixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9pbnRlcm5hbC9TdWJzY3JpcHRpb25cIlxuXG5pbXBvcnQge1xuICBJbmplY3RhYmxlLCBPdXRwdXQsIEV2ZW50RW1pdHRlclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgaHRtbFNpemV7XG4gIHdpZHRoOiBudW1iZXIgfCBudWxsXG4gIGhlaWdodDogbnVtYmVyIHwgbnVsbFxufVxuXG5ASW5qZWN0YWJsZSgpIGV4cG9ydCBjbGFzcyBIdG1sU2l6ZVNlcnZpY2Uge1xuICBwcml2YXRlIG9uUmVzaXplOigpPT52b2lkXG4gIGh0bWxTaXplOmh0bWxTaXplXG5cbiAgQE91dHB1dCgpIGNoYW5nZTpFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuaHRtbFNpemUgPSB7d2lkdGg6bnVsbCwgaGVpZ2h0Om51bGx9XG5cbiAgICB0aGlzLm9uUmVzaXplID0gKCk9PntcbiAgICAgIHRoaXMuaHRtbFNpemUud2lkdGggPSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICB0aGlzLmh0bWxTaXplLmhlaWdodCA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KClcbiAgICB9XG5cbiAgICB0aGlzLmNoZWNrV2F0Y2hlcnMoKVxuICAgIHRoaXMub25SZXNpemUoKVxuICB9XG5cbiAgY2hlY2tXYXRjaGVycygpe1xuICAgIGlmKCB0aGlzLmNoYW5nZS5vYnNlcnZlcnMubGVuZ3RoICl7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZSlcbiAgICAgIC8vd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25SZXNpemUpXG4gICAgfWVsc2V7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZSlcbiAgICAgIC8vd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25SZXNpemUpXG4gICAgfVxuICB9XG59Il19
import { Directive, Input, Output, EventEmitter } from "@angular/core";
export class ScreenScrollHeightDiff {
    constructor() {
        this.screenScrollHeightDiffChange = new EventEmitter();
        this.on = () => {
            this.apply();
        };
        window.addEventListener("scroll", this.on);
        window.addEventListener("resize", this.on);
    }
    apply() {
        this.screenScrollHeightDiff = document.body.scrollHeight - window.innerHeight;
        if (this.screenScrollHeightDiff < 0)
            this.screenScrollHeightDiff = 0;
        this.screenScrollHeightDiffChange.emit(this.screenScrollHeightDiff);
    }
    ngOnDestroy() {
        window.removeEventListener("scroll", this.on);
        window.removeEventListener("resize", this.on);
    }
}
ScreenScrollHeightDiff.decorators = [
    { type: Directive, args: [{
                selector: '[screenScrollHeightDiff]'
            },] }
];
ScreenScrollHeightDiff.ctorParameters = () => [];
ScreenScrollHeightDiff.propDecorators = {
    screenScrollHeightDiff: [{ type: Input }],
    screenScrollHeightDiffChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyZWVuU2Nyb2xsSGVpZ2h0RGlmZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9TY3JlZW5TY3JvbGxIZWlnaHREaWZmLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFBO0FBSW5CLE1BQU0sT0FBTyxzQkFBc0I7SUFLcEM7UUFGVSxpQ0FBNEIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO1FBR3pELElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRSxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ2QsQ0FBQyxDQUFBO1FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDMUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQTtRQUM3RSxJQUFHLElBQUksQ0FBQyxzQkFBc0IsR0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLHNCQUFzQixHQUFDLENBQUMsQ0FBQTtRQUM5RCxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBRSxDQUFBO0lBQ3ZFLENBQUM7SUFFRCxXQUFXO1FBQ1QsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDN0MsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDL0MsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2FBQ3JDOzs7O3FDQUVFLEtBQUs7MkNBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3NjcmVlblNjcm9sbEhlaWdodERpZmZdJ1xufSkgZXhwb3J0IGNsYXNzIFNjcmVlblNjcm9sbEhlaWdodERpZmZ7XG4gIG9uOiBhbnlcbiAgQElucHV0KCkgc2NyZWVuU2Nyb2xsSGVpZ2h0RGlmZjogYW55XG4gIEBPdXRwdXQoKSBzY3JlZW5TY3JvbGxIZWlnaHREaWZmQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLm9uID0gKCk9PntcbiAgICAgIHRoaXMuYXBwbHkoKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub24pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vbilcbiAgfVxuXG4gIGFwcGx5KCl7XG4gICAgdGhpcy5zY3JlZW5TY3JvbGxIZWlnaHREaWZmID0gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICBpZih0aGlzLnNjcmVlblNjcm9sbEhlaWdodERpZmY8MCl0aGlzLnNjcmVlblNjcm9sbEhlaWdodERpZmY9MFxuICAgIHRoaXMuc2NyZWVuU2Nyb2xsSGVpZ2h0RGlmZkNoYW5nZS5lbWl0KCB0aGlzLnNjcmVlblNjcm9sbEhlaWdodERpZmYgKVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5vbilcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uKVxuICB9XG59XG4iXX0=
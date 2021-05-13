import { Component, Directive, ElementRef, ContentChild } from "@angular/core";
import { string as readerHeaderBody } from "./templates/reader-header-body.pug";
//easy to use common full page templater
export class ReaderHeaderBody {
}
ReaderHeaderBody.decorators = [
    { type: Component, args: [{
                selector: 'reader-header-body',
                template: readerHeaderBody
            },] }
];
ReaderHeaderBody.propDecorators = {
    readerHeader: [{ type: ContentChild, args: ['reader-header',] }]
};
export class ReaderHeader {
}
ReaderHeader.decorators = [
    { type: Directive, args: [{
                selector: 'reader-header'
            },] }
];
export class ReaderBody {
    constructor(element) {
        this.element = element;
        element.nativeElement.style.height = '100%';
        element.nativeElement.style.display = 'block';
    }
}
ReaderBody.decorators = [
    { type: Directive, args: [{
                selector: "reader-body"
            },] }
];
ReaderBody.ctorParameters = () => [
    { type: ElementRef }
];
ReaderBody.propDecorators = {
    readerHeader: [{ type: ContentChild, args: ['reader-header',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZGVySGVhZGVyQm9keS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9SZWFkZXJIZWFkZXJCb2R5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLFNBQVMsRUFDcEIsVUFBVSxFQUFlLFlBQVksRUFDckMsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLE1BQU0sSUFBSSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFBO0FBRS9FLHdDQUF3QztBQUlyQyxNQUFNLE9BQU8sZ0JBQWdCOzs7WUFIL0IsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBQyxvQkFBb0I7Z0JBQzdCLFFBQVEsRUFBQyxnQkFBZ0I7YUFDMUI7OzsyQkFDQyxZQUFZLFNBQUMsZUFBZTs7QUFLM0IsTUFBTSxPQUFPLFlBQVk7OztZQUYzQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFDLGVBQWU7YUFDekI7O0FBSUUsTUFBTSxPQUFPLFVBQVU7SUFHeEIsWUFBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNwQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDaEQsQ0FBQzs7O1lBUkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBQyxhQUFhO2FBQ3ZCOzs7WUFuQkEsVUFBVTs7OzJCQW9CUixZQUFZLFNBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCwgRGlyZWN0aXZlLFxuXHRFbGVtZW50UmVmLCBUZW1wbGF0ZVJlZiwgQ29udGVudENoaWxkXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuaW1wb3J0IHsgc3RyaW5nIGFzIHJlYWRlckhlYWRlckJvZHkgfSBmcm9tIFwiLi90ZW1wbGF0ZXMvcmVhZGVyLWhlYWRlci1ib2R5LnB1Z1wiXG5cbi8vZWFzeSB0byB1c2UgY29tbW9uIGZ1bGwgcGFnZSB0ZW1wbGF0ZXJcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjoncmVhZGVyLWhlYWRlci1ib2R5JyxcbiAgdGVtcGxhdGU6cmVhZGVySGVhZGVyQm9keVxufSkgZXhwb3J0IGNsYXNzIFJlYWRlckhlYWRlckJvZHkge1xuXHRAQ29udGVudENoaWxkKCdyZWFkZXItaGVhZGVyJykgcmVhZGVySGVhZGVyITogVGVtcGxhdGVSZWY8YW55PlxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6J3JlYWRlci1oZWFkZXInXG59KSBleHBvcnQgY2xhc3MgUmVhZGVySGVhZGVyIHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjpcInJlYWRlci1ib2R5XCJcbn0pIGV4cG9ydCBjbGFzcyBSZWFkZXJCb2R5IHtcbiAgQENvbnRlbnRDaGlsZCgncmVhZGVyLWhlYWRlcicpIHJlYWRlckhlYWRlciE6VGVtcGxhdGVSZWY8YW55PlxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmKXtcbiAgICBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxufVxuIl19
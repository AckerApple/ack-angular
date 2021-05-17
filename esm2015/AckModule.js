import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
export { CommonModule } from "@angular/common";
//import { FormsModule }   from "@angular/forms"
import { providers } from "./providers";
import { declarations as components } from "./declarations";
import { declarations as pipes } from "./pipes";
const declarations = [...components, ...pipes];
export class AckModule {
    static forRoot() {
        return {
            ngModule: AckModule, providers,
        };
    }
}
AckModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations, providers,
                exports: declarations
            },] }
];
// export default AckModule
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrTW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0Fja01vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsUUFBUSxFQUNULE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTtBQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFDOUMsZ0RBQWdEO0FBRWhELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUE7QUFDdkMsT0FBTyxFQUFFLFlBQVksSUFBSSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUMzRCxPQUFPLEVBQUUsWUFBWSxJQUFJLEtBQUssRUFBRSxNQUFNLFNBQVMsQ0FBQTtBQUUvQyxNQUFNLFlBQVksR0FBRyxDQUFDLEdBQUcsVUFBVSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUE7QUFRM0MsTUFBTSxPQUFPLFNBQVM7SUFDdkIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTO1NBQy9CLENBQUE7SUFDSCxDQUFDOzs7WUFYRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFDO29CQUNOLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLE9BQU8sRUFBRSxZQUFZO2FBQ3RCOztBQVFELDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiXG5leHBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCJcbi8vaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSAgIGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiXG5cbmltcG9ydCB7IHByb3ZpZGVycyB9IGZyb20gXCIuL3Byb3ZpZGVyc1wiXG5pbXBvcnQgeyBkZWNsYXJhdGlvbnMgYXMgY29tcG9uZW50cyB9IGZyb20gXCIuL2RlY2xhcmF0aW9uc1wiXG5pbXBvcnQgeyBkZWNsYXJhdGlvbnMgYXMgcGlwZXMgfSBmcm9tIFwiLi9waXBlc1wiXG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFsuLi5jb21wb25lbnRzLCAuLi5waXBlc11cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czpbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9ucywgcHJvdmlkZXJzLFxuICBleHBvcnRzOiBkZWNsYXJhdGlvbnNcbn0pIGV4cG9ydCBjbGFzcyBBY2tNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEFja01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQWNrTW9kdWxlLCBwcm92aWRlcnMsXG4gICAgfVxuICB9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEFja01vZHVsZSJdfQ==
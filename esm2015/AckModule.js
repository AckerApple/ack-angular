import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
export { CommonModule } from "@angular/common";
//import { FormsModule }   from "@angular/forms"
import { providers } from "./providers";
import { declarations as components } from "./declarations";
import { pipes } from "./pipes";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrTW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0Fja01vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsUUFBUSxFQUNULE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTtBQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFDOUMsZ0RBQWdEO0FBRWhELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUE7QUFDdkMsT0FBTyxFQUFFLFlBQVksSUFBSSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUMzRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFBO0FBRS9CLE1BQU0sWUFBWSxHQUFHLENBQUMsR0FBRyxVQUFVLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQTtBQVEzQyxNQUFNLE9BQU8sU0FBUztJQUN2QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVM7U0FDL0IsQ0FBQTtJQUNILENBQUM7OztZQVhGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUM7b0JBQ04sWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUUsU0FBUztnQkFDdkIsT0FBTyxFQUFFLFlBQVk7YUFDdEI7O0FBUUQsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgTmdNb2R1bGVcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCJcbmV4cG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIlxuLy9pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCJcblxuaW1wb3J0IHsgcHJvdmlkZXJzIH0gZnJvbSBcIi4vcHJvdmlkZXJzXCJcbmltcG9ydCB7IGRlY2xhcmF0aW9ucyBhcyBjb21wb25lbnRzIH0gZnJvbSBcIi4vZGVjbGFyYXRpb25zXCJcbmltcG9ydCB7IHBpcGVzIH0gZnJvbSBcIi4vcGlwZXNcIlxuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbLi4uY29tcG9uZW50cywgLi4ucGlwZXNdXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6W1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnMsIHByb3ZpZGVycyxcbiAgZXhwb3J0czogZGVjbGFyYXRpb25zXG59KSBleHBvcnQgY2xhc3MgQWNrTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxBY2tNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFja01vZHVsZSwgcHJvdmlkZXJzLFxuICAgIH1cbiAgfVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBBY2tNb2R1bGUiXX0=
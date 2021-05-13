import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//import { FormsModule }   from "@angular/forms"
import { providers } from "./providers";
import { declarations as components } from "./declarations";
import { declarations as pipes } from "./pipes";
const declarations = [...components, ...pipes];
export class AckModule {
    static forRoot() {
        return {
            ngModule: AckModule, providers
        };
    }
}
AckModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations, providers,
                exports: [
                    ...declarations,
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrTW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0Fja01vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ2dCLFFBQVEsRUFDOUIsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBQzlDLGdEQUFnRDtBQUVoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFBO0FBQ3ZDLE9BQU8sRUFBRSxZQUFZLElBQUksVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFDM0QsT0FBTyxFQUFFLFlBQVksSUFBSSxLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUE7QUFFL0MsTUFBTSxZQUFZLEdBQUcsQ0FBQyxHQUFHLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFBO0FBVTNDLE1BQU0sT0FBTyxTQUFTO0lBQ3ZCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUztTQUMvQixDQUFBO0lBQ0gsQ0FBQzs7O1lBYkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBQztvQkFDTixZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRSxTQUFTO2dCQUN2QixPQUFPLEVBQUM7b0JBQ04sR0FBRyxZQUFZO2lCQUNmO2FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZVxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIlxuLy9pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCJcblxuaW1wb3J0IHsgcHJvdmlkZXJzIH0gZnJvbSBcIi4vcHJvdmlkZXJzXCJcbmltcG9ydCB7IGRlY2xhcmF0aW9ucyBhcyBjb21wb25lbnRzIH0gZnJvbSBcIi4vZGVjbGFyYXRpb25zXCJcbmltcG9ydCB7IGRlY2xhcmF0aW9ucyBhcyBwaXBlcyB9IGZyb20gXCIuL3BpcGVzXCJcblxuY29uc3QgZGVjbGFyYXRpb25zID0gWy4uLmNvbXBvbmVudHMsIC4uLnBpcGVzXVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOltcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zLCBwcm92aWRlcnMsXG4gIGV4cG9ydHM6W1xuICAgIC4uLmRlY2xhcmF0aW9ucyxcbiAgIF1cbn0pIGV4cG9ydCBjbGFzcyBBY2tNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPGFueT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQWNrTW9kdWxlLCBwcm92aWRlcnNcbiAgICB9XG4gIH1cbn0iXX0=
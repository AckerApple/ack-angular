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
            ngModule: AckModule,
            providers: providers
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrTW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0Fja01vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ2dCLFFBQVEsRUFDOUIsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBQzlDLGdEQUFnRDtBQUVoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFBO0FBQ3ZDLE9BQU8sRUFBRSxZQUFZLElBQUksVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFDM0QsT0FBTyxFQUFFLFlBQVksSUFBSSxLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUE7QUFFL0MsTUFBTSxZQUFZLEdBQUcsQ0FBQyxHQUFHLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFBO0FBVTNDLE1BQU0sT0FBTyxTQUFTO0lBQ3ZCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFNBQVMsRUFBRSxTQUFTO1NBQ3JCLENBQUE7SUFDSCxDQUFDOzs7WUFkRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFDO29CQUNOLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLE9BQU8sRUFBQztvQkFDTixHQUFHLFlBQVk7aUJBQ2Y7YUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiXG4vL2ltcG9ydCB7IEZvcm1zTW9kdWxlIH0gICBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIlxuXG5pbXBvcnQgeyBwcm92aWRlcnMgfSBmcm9tIFwiLi9wcm92aWRlcnNcIlxuaW1wb3J0IHsgZGVjbGFyYXRpb25zIGFzIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9kZWNsYXJhdGlvbnNcIlxuaW1wb3J0IHsgZGVjbGFyYXRpb25zIGFzIHBpcGVzIH0gZnJvbSBcIi4vcGlwZXNcIlxuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbLi4uY29tcG9uZW50cywgLi4ucGlwZXNdXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6W1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnMsIHByb3ZpZGVycyxcbiAgZXhwb3J0czpbXG4gICAgLi4uZGVjbGFyYXRpb25zLFxuICAgXVxufSkgZXhwb3J0IGNsYXNzIEFja01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8YW55PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBY2tNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IHByb3ZpZGVyc1xuICAgIH1cbiAgfVxufSJdfQ==
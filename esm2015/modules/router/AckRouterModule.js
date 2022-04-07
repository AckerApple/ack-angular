import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouteWatchReporter } from "./RouteWatchReporter";
import { RouteHistory } from "./RouteHistory.provider";
import { RouteReporter } from "./RouteReporter.directive";
export { RouteReporter } from "./RouteReporter.directive";
const providers = [RouteWatchReporter, RouteHistory];
export class AckRouterModule {
    static forRoot() {
        return {
            ngModule: AckRouterModule,
            providers: providers
        };
    }
}
AckRouterModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule
                ],
                declarations: [RouteReporter],
                // providers:providers,
                exports: [
                    RouteReporter,
                    RouterModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrUm91dGVyTW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcm91dGVyL0Fja1JvdXRlck1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ2dCLFFBQVEsRUFDOUIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQTtBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUE7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFBO0FBRXpELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQTtBQUV6RCxNQUFNLFNBQVMsR0FBRyxDQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBRSxDQUFBO0FBYW5ELE1BQU0sT0FBTyxlQUFlO0lBQzdCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRSxTQUFTO1NBQ3JCLENBQUE7SUFDSCxDQUFDOzs7WUFqQkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBQztvQkFDTixZQUFZO29CQUNaLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFLENBQUUsYUFBYSxDQUFFO2dCQUMvQix1QkFBdUI7Z0JBQ3ZCLE9BQU8sRUFBQztvQkFDTixhQUFhO29CQUNiLFlBQVk7aUJBQ2I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFJvdXRlV2F0Y2hSZXBvcnRlciB9IGZyb20gXCIuL1JvdXRlV2F0Y2hSZXBvcnRlclwiXG5pbXBvcnQgeyBSb3V0ZUhpc3RvcnkgfSBmcm9tIFwiLi9Sb3V0ZUhpc3RvcnkucHJvdmlkZXJcIlxuaW1wb3J0IHsgUm91dGVSZXBvcnRlciB9IGZyb20gXCIuL1JvdXRlUmVwb3J0ZXIuZGlyZWN0aXZlXCJcblxuZXhwb3J0IHsgUm91dGVSZXBvcnRlciB9IGZyb20gXCIuL1JvdXRlUmVwb3J0ZXIuZGlyZWN0aXZlXCJcblxuY29uc3QgcHJvdmlkZXJzID0gWyBSb3V0ZVdhdGNoUmVwb3J0ZXIsIFJvdXRlSGlzdG9yeSBdXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6W1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbIFJvdXRlUmVwb3J0ZXIgXSxcbiAgLy8gcHJvdmlkZXJzOnByb3ZpZGVycyxcbiAgZXhwb3J0czpbXG4gICAgUm91dGVSZXBvcnRlcixcbiAgICBSb3V0ZXJNb2R1bGVcbiAgXVxufSkgZXhwb3J0IGNsYXNzIEFja1JvdXRlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8YW55PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBY2tSb3V0ZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IHByb3ZpZGVyc1xuICAgIH1cbiAgfVxufVxuXG4iXX0=
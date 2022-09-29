import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouteWatchReporter } from "./RouteWatchReporter";
import { RouteHistory } from "./RouteHistory.provider";
import { RouteReporter } from "./RouteReporter.directive";
import * as i0 from "@angular/core";
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
AckRouterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckRouterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AckRouterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: AckRouterModule, declarations: [RouteReporter], imports: [CommonModule,
        RouterModule], exports: [RouteReporter,
        RouterModule] });
AckRouterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckRouterModule, imports: [CommonModule,
        RouterModule, RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckRouterModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrUm91dGVyTW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcm91dGVyL0Fja1JvdXRlck1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ2dCLFFBQVEsRUFDOUIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQTtBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUE7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFBOztBQUV6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUE7QUFFekQsTUFBTSxTQUFTLEdBQUcsQ0FBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUUsQ0FBQTtBQWFuRCxNQUFNLE9BQU8sZUFBZTtJQUM3QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUUsU0FBUztTQUNyQixDQUFBO0lBQ0gsQ0FBQzs7NEdBTmEsZUFBZTs2R0FBZixlQUFlLGlCQU5iLGFBQWEsYUFIM0IsWUFBWTtRQUNaLFlBQVksYUFLWixhQUFhO1FBQ2IsWUFBWTs2R0FFQSxlQUFlLFlBVDNCLFlBQVk7UUFDWixZQUFZLEVBTVosWUFBWTsyRkFFQSxlQUFlO2tCQVg5QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBQzt3QkFDTixZQUFZO3dCQUNaLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFLENBQUUsYUFBYSxDQUFFO29CQUMvQix1QkFBdUI7b0JBQ3ZCLE9BQU8sRUFBQzt3QkFDTixhQUFhO3dCQUNiLFlBQVk7cUJBQ2I7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBSb3V0ZVdhdGNoUmVwb3J0ZXIgfSBmcm9tIFwiLi9Sb3V0ZVdhdGNoUmVwb3J0ZXJcIlxuaW1wb3J0IHsgUm91dGVIaXN0b3J5IH0gZnJvbSBcIi4vUm91dGVIaXN0b3J5LnByb3ZpZGVyXCJcbmltcG9ydCB7IFJvdXRlUmVwb3J0ZXIgfSBmcm9tIFwiLi9Sb3V0ZVJlcG9ydGVyLmRpcmVjdGl2ZVwiXG5cbmV4cG9ydCB7IFJvdXRlUmVwb3J0ZXIgfSBmcm9tIFwiLi9Sb3V0ZVJlcG9ydGVyLmRpcmVjdGl2ZVwiXG5cbmNvbnN0IHByb3ZpZGVycyA9IFsgUm91dGVXYXRjaFJlcG9ydGVyLCBSb3V0ZUhpc3RvcnkgXVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOltcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWyBSb3V0ZVJlcG9ydGVyIF0sXG4gIC8vIHByb3ZpZGVyczpwcm92aWRlcnMsXG4gIGV4cG9ydHM6W1xuICAgIFJvdXRlUmVwb3J0ZXIsXG4gICAgUm91dGVyTW9kdWxlXG4gIF1cbn0pIGV4cG9ydCBjbGFzcyBBY2tSb3V0ZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPGFueT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQWNrUm91dGVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBwcm92aWRlcnNcbiAgICB9XG4gIH1cbn1cblxuIl19
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
AckRouterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckRouterModule, providers: providers, imports: [CommonModule,
        RouterModule, RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckRouterModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        RouterModule
                    ],
                    declarations: [RouteReporter],
                    providers: providers,
                    exports: [
                        RouteReporter,
                        RouterModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrUm91dGVyTW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcm91dGVyL0Fja1JvdXRlck1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ2dCLFFBQVEsRUFDOUIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQTtBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUE7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFBOztBQUV6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUE7QUFFekQsTUFBTSxTQUFTLEdBQUcsQ0FBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUUsQ0FBQTtBQWFuRCxNQUFNLE9BQU8sZUFBZTtJQUM3QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUUsU0FBUztTQUNyQixDQUFBO0lBQ0gsQ0FBQzs7NEdBTmEsZUFBZTs2R0FBZixlQUFlLGlCQU5iLGFBQWEsYUFIM0IsWUFBWTtRQUNaLFlBQVksYUFLWixhQUFhO1FBQ2IsWUFBWTs2R0FFQSxlQUFlLGFBTGxCLFNBQVMsWUFKbEIsWUFBWTtRQUNaLFlBQVksRUFNWixZQUFZOzJGQUVBLGVBQWU7a0JBWDlCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFDO3dCQUNOLFlBQVk7d0JBQ1osWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUUsQ0FBRSxhQUFhLENBQUU7b0JBQy9CLFNBQVMsRUFBRSxTQUFTO29CQUNwQixPQUFPLEVBQUM7d0JBQ04sYUFBYTt3QkFDYixZQUFZO3FCQUNiO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgUm91dGVXYXRjaFJlcG9ydGVyIH0gZnJvbSBcIi4vUm91dGVXYXRjaFJlcG9ydGVyXCJcbmltcG9ydCB7IFJvdXRlSGlzdG9yeSB9IGZyb20gXCIuL1JvdXRlSGlzdG9yeS5wcm92aWRlclwiXG5pbXBvcnQgeyBSb3V0ZVJlcG9ydGVyIH0gZnJvbSBcIi4vUm91dGVSZXBvcnRlci5kaXJlY3RpdmVcIlxuXG5leHBvcnQgeyBSb3V0ZVJlcG9ydGVyIH0gZnJvbSBcIi4vUm91dGVSZXBvcnRlci5kaXJlY3RpdmVcIlxuXG5jb25zdCBwcm92aWRlcnMgPSBbIFJvdXRlV2F0Y2hSZXBvcnRlciwgUm91dGVIaXN0b3J5IF1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czpbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsgUm91dGVSZXBvcnRlciBdLFxuICBwcm92aWRlcnM6IHByb3ZpZGVycyxcbiAgZXhwb3J0czpbXG4gICAgUm91dGVSZXBvcnRlcixcbiAgICBSb3V0ZXJNb2R1bGVcbiAgXVxufSkgZXhwb3J0IGNsYXNzIEFja1JvdXRlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8YW55PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBY2tSb3V0ZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IHByb3ZpZGVyc1xuICAgIH1cbiAgfVxufVxuXG4iXX0=
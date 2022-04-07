import { AckModal } from './AckModal.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser/animations";
import * as i2 from "../AckModule";
export declare class ContainerComponent {
    AckModal: AckModal;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContainerComponent, "container", never, {}, {}, never, never>;
}
export declare class AppModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<AppModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AppModule, [typeof ContainerComponent], [typeof i1.BrowserAnimationsModule, typeof i2.AckModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AppModule>;
}

import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class KeysPipe {
    transform(input) {
        const type = typeof (input) == 'object';
        const isOb = input && type;
        const isArray = isOb && input.constructor == Array;
        if (isArray) {
            return input.map((_value, index) => index);
        }
        return input ? Object.keys(input) : [];
    }
}
KeysPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: KeysPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
KeysPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: KeysPipe, name: "keys" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: KeysPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'keys' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5cy5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BpcGVzL2tleXMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFBOztBQUVkLE1BQU0sT0FBTyxRQUFRO0lBQ3pDLFNBQVMsQ0FBQyxLQUFTO1FBQ2pCLE1BQU0sSUFBSSxHQUFHLE9BQU0sQ0FBQyxLQUFLLENBQUMsSUFBRSxRQUFRLENBQUE7UUFDcEMsTUFBTSxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQTtRQUMxQixNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksS0FBSyxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUE7UUFFbEQsSUFBRyxPQUFPLEVBQUM7WUFDVCxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFXLEVBQUUsS0FBVSxFQUFDLEVBQUUsQ0FBQSxLQUFLLENBQUMsQ0FBQTtTQUNuRDtRQUVELE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7SUFDeEMsQ0FBQzs7cUdBWGdDLFFBQVE7bUdBQVIsUUFBUTsyRkFBUixRQUFRO2tCQUExQyxJQUFJO21CQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5AUGlwZSh7bmFtZTogJ2tleXMnfSkgZXhwb3J0IGNsYXNzIEtleXNQaXBlIHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZihpbnB1dCk9PSdvYmplY3QnXG4gICAgY29uc3QgaXNPYiA9IGlucHV0ICYmIHR5cGVcbiAgICBjb25zdCBpc0FycmF5ID0gaXNPYiAmJiBpbnB1dC5jb25zdHJ1Y3RvciA9PSBBcnJheVxuXG4gICAgaWYoaXNBcnJheSl7XG4gICAgICByZXR1cm4gaW5wdXQubWFwKChfdmFsdWU6IGFueSwgaW5kZXg6IGFueSk9PmluZGV4KVxuICAgIH1cblxuICAgIHJldHVybiBpbnB1dCA/IE9iamVjdC5rZXlzKGlucHV0KSA6IFtdXG4gIH1cbn1cbiJdfQ==
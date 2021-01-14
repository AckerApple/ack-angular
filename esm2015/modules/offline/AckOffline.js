//import localForage from "localforage/dist/localforage.js"
import * as localForage from "localforage";
import { Injectable } from '@angular/core';
/** Offline storage provided by localforage */
export class AckOffline {
    constructor() {
        this.prefix = "offline";
    }
    /** save to browser offline memory with datetime stamps offlineSavedAt and offlineCreatedAt */
    set(name, data) {
        if (data && data.constructor == Object)
            data.offlineSavedAt = new Date().toString();
        if (data && data.constructor == Object)
            data.offlineCreatedAt = data.offlineCreatedAt || new Date().toString();
        return localForage.setItem(this.prefix + '-' + name, data);
    }
    get(name) {
        return localForage.getItem(this.prefix + '-' + name);
    }
    remove(name) {
        return localForage.removeItem(this.prefix + '-' + name);
    }
    /** aka of remove */
    clear(name) { return this.remove(name); }
    clearAll() {
        return this.promiseNameArray().then((keys) => keys.forEach(name => this.remove(name)));
    }
    /** returns string array of all key names used for browser storage */
    promiseNameArray() {
        let keys = [];
        return localForage.iterate((_, k) => {
            if (k.startsWith(this.prefix)) {
                keys.push(k.substring(this.prefix.length + 1, k.length));
            }
        })
            .then(() => keys);
    }
}
AckOffline.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrT2ZmbGluZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL29mZmxpbmUvQWNrT2ZmbGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyREFBMkQ7QUFDM0QsT0FBTyxLQUFLLFdBQVcsTUFBTSxhQUFhLENBQUE7QUFDMUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyw4Q0FBOEM7QUFDaEMsTUFBTSxPQUFPLFVBQVU7SUFBckM7UUFDUyxXQUFNLEdBQVEsU0FBUyxDQUFBO0lBbUNoQyxDQUFDO0lBakNDLDhGQUE4RjtJQUM5RixHQUFHLENBQUMsSUFBVyxFQUFFLElBQVE7UUFDdkIsSUFBRyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBRSxNQUFNO1lBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQy9FLElBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUUsTUFBTTtZQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUUxRyxPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxHQUFHLEdBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3hELENBQUM7SUFFRCxHQUFHLENBQUMsSUFBVztRQUNiLE9BQU8sV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQVc7UUFDaEIsT0FBTyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3JELENBQUM7SUFFRCxvQkFBb0I7SUFDcEIsS0FBSyxDQUFDLElBQVcsSUFBRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQSxDQUFDO0lBRTVDLFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUEsRUFBRSxDQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3RGLENBQUM7SUFFRCxxRUFBcUU7SUFDckUsZ0JBQWdCO1FBQ2QsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFBO1FBQ2IsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFFLENBQUE7YUFDekQ7UUFDSCxDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsR0FBRSxFQUFFLENBQUEsSUFBSSxDQUFDLENBQUE7SUFDakIsQ0FBQzs7O1lBbkNGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBsb2NhbEZvcmFnZSBmcm9tIFwibG9jYWxmb3JhZ2UvZGlzdC9sb2NhbGZvcmFnZS5qc1wiXG5pbXBvcnQgKiBhcyBsb2NhbEZvcmFnZSBmcm9tIFwibG9jYWxmb3JhZ2VcIlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogT2ZmbGluZSBzdG9yYWdlIHByb3ZpZGVkIGJ5IGxvY2FsZm9yYWdlICovXG5ASW5qZWN0YWJsZSgpIGV4cG9ydCBjbGFzcyBBY2tPZmZsaW5le1xuICBwdWJsaWMgcHJlZml4OnN0cmluZz1cIm9mZmxpbmVcIlxuXG4gIC8qKiBzYXZlIHRvIGJyb3dzZXIgb2ZmbGluZSBtZW1vcnkgd2l0aCBkYXRldGltZSBzdGFtcHMgb2ZmbGluZVNhdmVkQXQgYW5kIG9mZmxpbmVDcmVhdGVkQXQgKi9cbiAgc2V0KG5hbWU6c3RyaW5nLCBkYXRhOmFueSkge1xuICAgIGlmKGRhdGEgJiYgZGF0YS5jb25zdHJ1Y3Rvcj09T2JqZWN0KWRhdGEub2ZmbGluZVNhdmVkQXQgPSBuZXcgRGF0ZSgpLnRvU3RyaW5nKClcbiAgICBpZihkYXRhICYmIGRhdGEuY29uc3RydWN0b3I9PU9iamVjdClkYXRhLm9mZmxpbmVDcmVhdGVkQXQgPSBkYXRhLm9mZmxpbmVDcmVhdGVkQXQgfHwgbmV3IERhdGUoKS50b1N0cmluZygpXG4gICAgXG4gICAgcmV0dXJuIGxvY2FsRm9yYWdlLnNldEl0ZW0odGhpcy5wcmVmaXgrJy0nK25hbWUsIGRhdGEpXG4gIH1cblxuICBnZXQobmFtZTpzdHJpbmcpOlByb21pc2U8YW55PntcbiAgICByZXR1cm4gbG9jYWxGb3JhZ2UuZ2V0SXRlbSh0aGlzLnByZWZpeCsnLScrbmFtZSlcbiAgfVxuXG4gIHJlbW92ZShuYW1lOnN0cmluZyl7XG4gICAgcmV0dXJuIGxvY2FsRm9yYWdlLnJlbW92ZUl0ZW0odGhpcy5wcmVmaXgrJy0nK25hbWUpXG4gIH1cblxuICAvKiogYWthIG9mIHJlbW92ZSAqL1xuICBjbGVhcihuYW1lOnN0cmluZyl7cmV0dXJuIHRoaXMucmVtb3ZlKG5hbWUpfVxuXG4gIGNsZWFyQWxsKCkge1xuICAgIHJldHVybiB0aGlzLnByb21pc2VOYW1lQXJyYXkoKS50aGVuKChrZXlzKSA9PiBrZXlzLmZvckVhY2gobmFtZT0+dGhpcy5yZW1vdmUobmFtZSkpKVxuICB9XG5cbiAgLyoqIHJldHVybnMgc3RyaW5nIGFycmF5IG9mIGFsbCBrZXkgbmFtZXMgdXNlZCBmb3IgYnJvd3NlciBzdG9yYWdlICovXG4gIHByb21pc2VOYW1lQXJyYXkoKXtcbiAgICBsZXQga2V5cyA9IFtdXG4gICAgcmV0dXJuIGxvY2FsRm9yYWdlLml0ZXJhdGUoKF8sIGspID0+IHtcbiAgICAgIGlmIChrLnN0YXJ0c1dpdGgodGhpcy5wcmVmaXgpKSB7XG4gICAgICAgIGtleXMucHVzaCggay5zdWJzdHJpbmcodGhpcy5wcmVmaXgubGVuZ3RoKzEsIGsubGVuZ3RoKSApXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbigoKT0+a2V5cylcbiAgfVxufSJdfQ==
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class Log {
    constructor() {
        this.log = [];
        this.maxLog = 80;
    }
    add(e, toConsole) {
        const ob = this.paramAudit(e, toConsole);
        this.log.unshift(ob);
        if (this.maxLog) {
            while (this.log.length > this.maxLog) {
                this.log.pop(); //remove last
            }
        }
        return e;
    }
    paramAudit(e, toConsole) {
        switch (e.constructor) {
            case String:
            case Boolean:
            case Number: {
                e = { message: e };
            }
        }
        if (toConsole == null || toConsole)
            console.log(e);
        e['datetime'] = e['datetime'] || getDateTimeString();
        return e;
    }
}
Log.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: Log, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
Log.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: Log });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: Log, decorators: [{
            type: Injectable
        }] });
function getDateTimeString() {
    return (function (d) { return (('0' + (d.getMonth() + 1)).slice(-2) + '/' + ('0' + d.getDate()).slice(-2) + '/' + d.getFullYear()); })(new Date()) + ' ' + (function (d) { var h = d.getHours(), t = 'AM', m = d.getMinutes(); var mn = m < 10 ? '0' + m : m; h = h >= 12 ? (t = 'PM', h - 12 || 12) : h == 0 ? 12 : h; return ('0' + h).slice(-2) + ':' + ('0' + mn).slice(-2) + ' ' + t; })(new Date());
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Byb3ZpZGVycy9Mb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFN0IsTUFBTSxPQUFPLEdBQUc7SUFBOUI7UUFDUyxRQUFHLEdBQVUsRUFBRSxDQUFBO1FBQ2YsV0FBTSxHQUFHLEVBQUUsQ0FBQTtLQTRCbkI7SUExQkMsR0FBRyxDQUFDLENBQU0sRUFBRSxTQUFlO1FBQ3pCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBQ3ZCLElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBQztZQUNiLE9BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQztnQkFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQSxDQUFBLGFBQWE7YUFDNUI7U0FDRjtRQUNELE9BQU8sQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUVELFVBQVUsQ0FBQyxDQUFNLEVBQUUsU0FBZTtRQUNoQyxRQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUM7WUFDbkIsS0FBSyxNQUFNLENBQUM7WUFDWixLQUFLLE9BQU8sQ0FBQztZQUNiLEtBQUssTUFBTSxDQUFDLENBQUE7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxDQUFBO2FBQ2hCO1NBQ0Y7UUFFRCxJQUFHLFNBQVMsSUFBRSxJQUFJLElBQUksU0FBUztZQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFFOUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBRSxpQkFBaUIsRUFBRSxDQUFBO1FBRWxELE9BQU8sQ0FBQyxDQUFBO0lBQ1YsQ0FBQzs7Z0dBN0J3QixHQUFHO29HQUFILEdBQUc7MkZBQUgsR0FBRztrQkFBN0IsVUFBVTs7QUFnQ1gsU0FBUyxpQkFBaUI7SUFDeEIsT0FBTyxDQUFDLFVBQVMsQ0FBQyxJQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLEdBQUcsR0FBQyxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxHQUFHLEdBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEdBQUMsR0FBRyxHQUFDLENBQUMsVUFBUyxDQUFDLElBQUUsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFDLENBQUMsR0FBQyxJQUFJLEVBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFBLElBQUksRUFBRSxHQUFHLENBQUMsR0FBQyxFQUFFLENBQUEsQ0FBQyxDQUFBLEdBQUcsR0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFBLENBQUMsR0FBRyxDQUFDLElBQUUsRUFBRSxDQUFBLENBQUMsQ0FBQSxDQUFDLENBQUMsR0FBQyxJQUFJLEVBQUMsQ0FBQyxHQUFDLEVBQUUsSUFBRSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUEsQ0FBQyxJQUFFLENBQUMsQ0FBQSxDQUFDLENBQUEsRUFBRSxDQUFBLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQSxPQUFPLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLEdBQUcsR0FBQyxDQUFDLEdBQUcsR0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxHQUFHLEdBQUMsQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBQzdULENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKCkgZXhwb3J0IGNsYXNzIExvZ3tcbiAgcHVibGljIGxvZzogYW55W10gPSBbXVxuICBwdWJsaWMgbWF4TG9nID0gODBcblxuICBhZGQoZTogYW55LCB0b0NvbnNvbGU/OiBhbnkpe1xuICAgIGNvbnN0IG9iID0gdGhpcy5wYXJhbUF1ZGl0KGUsdG9Db25zb2xlKVxuICAgIHRoaXMubG9nLnVuc2hpZnQoIG9iICk7XG4gICAgaWYodGhpcy5tYXhMb2cpe1xuICAgICAgd2hpbGUodGhpcy5sb2cubGVuZ3RoPnRoaXMubWF4TG9nKXtcbiAgICAgICAgdGhpcy5sb2cucG9wKCkvL3JlbW92ZSBsYXN0XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlXG4gIH1cblxuICBwYXJhbUF1ZGl0KGU6IGFueSwgdG9Db25zb2xlPzogYW55KXtcbiAgICBzd2l0Y2goZS5jb25zdHJ1Y3Rvcil7XG4gICAgICBjYXNlIFN0cmluZzpcbiAgICAgIGNhc2UgQm9vbGVhbjpcbiAgICAgIGNhc2UgTnVtYmVyOntcbiAgICAgICAgZSA9IHttZXNzYWdlOmV9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYodG9Db25zb2xlPT1udWxsIHx8IHRvQ29uc29sZSljb25zb2xlLmxvZyhlKVxuXG4gICAgZVsnZGF0ZXRpbWUnXSA9IGVbJ2RhdGV0aW1lJ118fGdldERhdGVUaW1lU3RyaW5nKClcblxuICAgIHJldHVybiBlXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZVRpbWVTdHJpbmcoKXtcbiAgcmV0dXJuIChmdW5jdGlvbihkKXtyZXR1cm4gKCgnMCcrKGQuZ2V0TW9udGgoKSsxKSkuc2xpY2UoLTIpKycvJysoJzAnK2QuZ2V0RGF0ZSgpKS5zbGljZSgtMikrJy8nK2QuZ2V0RnVsbFllYXIoKSl9KShuZXcgRGF0ZSgpKSsnICcrKGZ1bmN0aW9uKGQpe3ZhciBoPWQuZ2V0SG91cnMoKSx0PSdBTScsbT1kLmdldE1pbnV0ZXMoKTt2YXIgbW4gPSBtPDEwPycwJyttOm07aCA9IGg+PTEyPyh0PSdQTScsaC0xMnx8MTIpOmg9PTA/MTI6aDtyZXR1cm4gKCcwJytoKS5zbGljZSgtMikrJzonKygnMCcrbW4pLnNsaWNlKC0yKSsnICcrdH0pKG5ldyBEYXRlKCkpXG59Il19
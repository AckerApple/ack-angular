export declare const string = "<div *ngIf=\"showModel || !isModelMode\" [@fadeInOutUp]=\"1\" style=\"position:fixed;top:0;left:0;height:100%;width:100%;overflow:auto;\" [style.z-index]=\"zIndex || 20\"><div style=\"height:100%;width:100%;padding:20px;display:inline-table;\" [ngStyle]=\"{'background-color':backgroundColor || 'rgba(255,255,255,0.95)'}\"><table style=\"height:100%;margin:auto\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" [ngStyle]=\"wrapStyle\"><tr><td (click)=\"allowClose ? fireClose() : 0\"></td></tr><tr><td valign=\"top\" [ngStyle]=\"wrapCellStyle\"><div *ngIf=\"allowClose\" style=\"position:relative\"><div style=\"position:absolute;bottom:-17px;right:-16px;border:1px solid #DDD;border-radius:50%;z-index:20\"><ack-close-icon (click)=\"fireClose()\"></ack-close-icon></div></div><ng-content></ng-content></td></tr><tr><td (click)=\"allowClose ? fireClose() : 0\"></td></tr></table></div></div>";

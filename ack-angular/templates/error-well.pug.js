"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<div class=\"border pad-xxs\" *ngIf=\"error &amp;&amp; errorClose!=error\" [@200]=\"'fadeInUp'\" [ngClass]=\"cssClasses\"><div class=\"flex-valign-center flex-wrap child-margin-xxs\"><div class=\"flex-1\"><div class=\"strong text-3x margin-0\" (click)=\"moreDetails=!moreDetails\">{{ error && error.message ? error.message : 'Unexpected Error Occured' }}</div></div><a class=\"text-blue underline text-xs\" *ngIf=\"error\" (click)=\"moreDetails=!moreDetails\">details</a><a class=\"text-blue underline text-xs\" *ngIf=\"error\" (click)=\"errorClose=error\">close</a></div><absolute-overflow-y class=\"text-sm\" *ngIf=\"moreDetails\" [@200]=\"'fadeInUp'\"><pre class=\"margin-0 pad-xs\">{{ error|json }}</pre></absolute-overflow-y></div>";
//# sourceMappingURL=error-well.pug.js.map
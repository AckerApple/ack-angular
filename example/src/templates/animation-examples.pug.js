"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<p class=\"text-grey-2x\">Make an app far more beautiful when changing scenery</p>Currently, all animations are provided by <a href=\"https://npmjs.org/ack-angular-fx\">ack-angular-fx</a><ul><li><a href=\"https://ackerapple.github.io/ack-angular-fx/\">examples</a></li><li><a href=\"https://github.com/AckerApple/ack-angular-fx\">repository</a></li></ul><h4>Table of Contents</h4><ul class=\"child-pad-xxs\"><li><a href=\"#Import Example\" pageScroll=\"pageScroll\">Import Example</a></li><li><a href=\"#Usage Example\" pageScroll=\"pageScroll\">Usage Example</a></li><li><a href=\"#Swap Example\" pageScroll=\"pageScroll\">Swap Example</a></li><li><a href=\"#Supported Definitions\" pageScroll=\"pageScroll\">Supported Definitions</a></li></ul><h3 id=\"Import Example\">Import Example</h3><pre class=\"code-sample\">import &#123; Component &#125; from '@angular/core'" +
    "\nimport &#123; ackAnimations &#125; from 'ack-angular/fx'" +
    "\n" +
    "\n@Component(&#123;" +
    "\n  selector: 'app-tag'" +
    "\n  ,template: 'Hello Template'" +
    "\n  ,animations: ackAnimations" +
    "\n&#125;) class AppComponent &#123;&#125;" +
    "\n</pre><h3 id=\"Usage Example\">Usage Example</h3><pre class=\"code-sample\">&lt;button \"(click)\"=\"viewDets=!viewDets\")&gt; view details &lt;/button&gt;" +
    "\n" +
    "\n&lt;div [*ngIf]=\"viewDets\" [@200]=\"'slideInLeft'\"&gt;" +
    "\n  &lt;p&gt;This is some goooooood animated content right here&lt;/p&gt;" +
    "\n  &lt;p&gt;You should try it.&lt;/p&gt;" +
    "\n&lt;/div&gt;</pre><br/><h3 id=\"Swap Example\">Swap Example</h3><p class=\"text-grey-2x\">Animate swapping elements using @absoluteSwap. Behind the scene, during animation, the following is styles are applied position:absolute;width:100%;overflow:hidden;</p><pre class=\"code-sample\">&lt;button \"(click)\"=\"viewDets='default'\")&gt; view default &lt;/button&gt;" +
    "\n&lt;button \"(click)\"=\"viewDets='other'\")&gt; view other &lt;/button&gt;" +
    "\n" +
    "\n&lt;div style=\"position:relative;\"&gt;" +
    "\n  &lt;div [*ngIf]=\"!viewDets || viewDets=='default'\" [@absoluteSwap]=\"'slideInLeft'\"&gt;" +
    "\n    &lt;p&gt;This is some goooooood animated content right here&lt;/p&gt;" +
    "\n    &lt;p&gt;You should try it.&lt;/p&gt;" +
    "\n  &lt;/div&gt;" +
    "\n" +
    "\n  &lt;div [*ngIf]=\"!viewDets || viewDets=='other'\" [@absoluteSwap]=\"'slideInLeft'\"&gt;" +
    "\n    &lt;p&gt;This is some goooooood animated content right here&lt;/p&gt;" +
    "\n    &lt;p&gt;You should try it.&lt;/p&gt;" +
    "\n  &lt;/div&gt;" +
    "\n&lt;/div&gt;</pre><br/><h3 id=\"Supported Definitions\">Supported Definitions</h3><div class=\"flex-wrap\"><div class=\"pad\"><ul><li *ngFor=\"let item of delayArray\">{{ item }}</li></ul></div><div class=\"pad\"><ul><li>absoluteSwap</li><li *ngFor=\"let item of delayArray\">absoluteSwap{{ item }}</li></ul></div></div><br/><h3>Supporting Examples</h3><div class=\"flex-wrap\"><fieldset><label class=\"pad-h\">*ngFor</label><ul><li *ngFor=\"let item of list;let i = index;\" [@200]=\"'fadeInLeft'\">{{item}} - {{i}}<button (click)=\"list.splice(i,1)\">X</button></li></ul><div class=\"flex\"><input class=\"flex-1\" [(ngModel)]=\"supportExampleAddItem\"/><button (click)=\"list.push(supportExampleAddItem)\">add</button></div></fieldset></div><br/>";
//# sourceMappingURL=animation-examples.pug.js.map
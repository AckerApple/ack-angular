export const string = "<h2 class=\"margin-top-0\">Animations</h2><p class=\"text-grey-2x\">Make an app far more beautiful when changing scenery</p>Currently, all animations are provided by <a href=\"https://npmjs.org/ack-angular-fx\">ack-angular-fx</a><ul><li><a href=\"https://ackerapple.github.io/ack-angular-fx/\">examples</a></li><li><a href=\"https://github.com/AckerApple/ack-angular-fx\">repository</a></li></ul><h4>Table of Contents</h4><ul class=\"child-pad-xxs\"><li><a href=\"#Import Example\" pageScroll=\"pageScroll\">Import Example</a></li><li><a href=\"#Usage Example\" pageScroll=\"pageScroll\">Usage Example</a></li></ul><h3 id=\"Import Example\">Import Example</h3><pre class=\"code-sample\" ngNonBindable=\"ngNonBindable\">import &#123; Component &#125; from '@angular/core'"+
"\nimport &#123; fxArray &#125; from 'ack-angular/fx'"+
"\nimport &#123; BrowserModule &#125; from '@angular/platform-browser'"+
"\nimport &#123; BrowserAnimationsModule &#125; from '@angular/platform-browser/animations';"+
"\n"+
"\n@Component(&#123;"+
"\n  selector: 'app-tag'"+
"\n  ,template: 'Hello Template'"+
"\n  ,animations: fxArray"+
"\n&#125;) class AppComponent &#123;&#125;"+
"\n"+
"\n@NgModule(&#123;"+
"\n  imports : [ BrowserModule, BrowserAnimationsModule ]"+
"\n  declarations : [ AppComponent ],"+
"\n  boostrap : [ AppComponent ]"+
"\n&#125;) export class AppModule &#123;&#125;"+
"\n</pre><h3 id=\"Usage Example\">Usage Example</h3><pre class=\"code-sample\" ngNonBindable=\"ngNonBindable\">&lt;button \"(click)\"=\"viewDets=!viewDets\")&gt; view details &lt;/button&gt;"+
"\n"+
"\n&lt;div *ngIf=\"viewDets\" [@slideInLeft]=\"1\"&gt;"+
"\n  &lt;p&gt;This is some goooooood animated content right here&lt;/p&gt;"+
"\n  &lt;p&gt;You should try it.&lt;/p&gt;"+
"\n&lt;/div&gt;</pre><br/><h3>Supporting Examples</h3><p>*ngFor *ngIf Stagger Code</p><div class=\"flex-wrap\"><fieldset><label class=\"pad-h\">*ngFor list with stagger toggle</label><ul [@childStag]=\"toggleNgForFx\"><ng-container *ngFor=\"let item of list;let i = index;\"><li class=\"childFx\" *ngIf=\"!toggleNgForFx\" [@fadeInLeft]=\"1\">{{item}} - {{i}}<button (click)=\"list.splice(i,1)\">X</button></li></ng-container></ul><div class=\"flex\"><input class=\"flex-1\" [(ngModel)]=\"supportExampleAddItem\"/><button (click)=\"list.push(supportExampleAddItem)\">add</button><button (click)=\"toggleNgForFx=!toggleNgForFx\">toggle</button></div></fieldset></div><br/><h3>ngFor ngIf Stagger Code</h3><pre class=\"code-sample\" ngNonBindable=\"ngNonBindable\">&lt;ul [@childStag]=\"toggleNgForFx\"&gt;"+
"\n  &lt;ng-container *ngFor=\"let item of list;let i = index;\"&gt;"+
"\n    &lt;li class=\"childFx\" *ngIf=\"!toggleNgForFx\" [@200]=\"'fadeInLeft'\"&gt;"+
"\n        &#123;&#123;item&#125;&#125; - &#123;&#123;i&#125;&#125;"+
"\n        &lt;button (click)=\"list.splice(i,1)\"&gt; X &lt;/button&gt;"+
"\n    &lt;/li&gt;"+
"\n&lt;/ul&gt;"+
"\n&lt;input class\"flex-1\" [(ngModel)]=\"supportExampleAddItem\" /&gt;"+
"\n&lt;button (click)=\"list.push(supportExampleAddItem)\"&gt; add &lt;/button&gt;"+
"\n&lt;button (click)=\"toggleNgForFx=!toggleNgForFx\"&gt; toggle &lt;/button&gt;</pre><br/>"
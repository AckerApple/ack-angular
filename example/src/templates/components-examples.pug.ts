export const string = "<h3>Common Components</h3><div class=\"pad-h\"><p class=\"margin-bottom-0\">Import Example</p><pre class=\"code-sample\">import &#123; declarations as ackDecs &#125; from \"ack-angular/components\""+
"\nimport &#123; NgModule &#125; from '@angular/core';"+
"\n"+
"\n@NgModule(&#123;"+
"\n  declarations:ackDecs"+
"\n&#125;)"+
"\n</pre></div><div class=\"flex-wrap child-margin-xxs\"><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div [(screenScrollModelY)]=\"screenScrollModelY\"></div><div class=\"pad-h\"><h3>screenScrollModelY</h3><div class=\"text-grey-2x max-width-400\">Get browser window inner width. Currently :<div class=\"inline-block width-50\">&nbsp;{{screenScrollModelY}}px</div></div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"viewScreenScrollModelY=!viewScreenScrollModelY\" [ngClass]=\"viewScreenScrollModelY?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewScreenScrollModelY\" [@500]=\"'fadeInUp'\"><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div(\"[(screenScrollModelY)]\"=\"screenScrollModelY\")&gt;"+
"\n  |screenScrollModelY : {{ screenScrollModelY }}px"+
"\n&lt;/div&gt;"+
"\n</pre></absolute-overflow-y></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div [(screenWidthModel)]=\"screenWidthModel\"></div><div class=\"pad-h\"><h3>screenWidthModel</h3><div class=\"text-grey-2x max-width-400\">Get the browser window inner width. Currently : {{screenWidthModel}}px</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"viewScreenWidthModel=!viewScreenWidthModel\" [ngClass]=\"viewScreenWidthModel?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewScreenWidthModel\" [@500]=\"'fadeInUp'\"><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div(\"[(screenWidthModel)]\"=\"screenWidthModel\")&gt;"+
"\n&nbsp;&nbsp;screenWidthModel : {{ screenWidthModel }}px"+
"\n&lt;/div&gt;"+
"\n</pre></absolute-overflow-y></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div [(screenHeightModel)]=\"screenHeightModel\"></div><div class=\"pad-h\"><h3>screenHeightModel</h3><div class=\"text-grey-2x max-width-400\">Get the browser window inner height. Currently : {{screenHeightModel}}px</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"viewScreenHeightModel=!viewScreenHeightModel\" [ngClass]=\"viewScreenHeightModel?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewScreenHeightModel\" [@500]=\"'fadeInUp'\"><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div(\"[(screenHeightModel)]\"=\"screenHeightModel\")&gt;"+
"\n&nbsp;&nbsp;screenHeightModel : {{ screenHeightModel }}px"+
"\n&lt;/div&gt;"+
"\n</pre></absolute-overflow-y></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>onFormChanged</h3><div class=\"text-grey-2x max-width-400\">Capture a form tag onchange event</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"viewOnFormChanged=!viewOnFormChanged\" [ngClass]=\"viewOnFormChanged?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewOnFormChanged\" [@500]=\"'fadeInUp'\"><h4 class=\"pad-sm margin-0\">Example</h4><form class=\"pad\" (onFormChanged)=\"formChanges=formChanges==null?1:formChanges+1\"><span>Change Count : {{formChanges || 0}} :</span>&nbsp;<input type=\"radio\" name=\"fcTest\"/>&nbsp;<input type=\"radio\" name=\"fcTest\"/>&nbsp;<input type=\"radio\" name=\"fcTest\"/></form><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;form (onFormChanged)=\"formChanges=formChanges==null?1:formChanges+1\" &gt;"+
"\n  &lt;span&gt; Change Count : {{formChanges || 0}} &lt;/span&gt;"+
"\n  &lt;input type=\"radio\" name=\"fcTest\" /&gt;"+
"\n  &lt;input type=\"radio\" name=\"fcTest\" /&gt;"+
"\n  &lt;input type=\"radio\" name=\"fcTest\" /&gt;"+
"\n&lt;/form&gt;"+
"\n</pre></absolute-overflow-y></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>onFormAlter</h3><div class=\"text-grey-2x max-width-400\">Capture a form tag oninput event</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"viewOnFormAlter=!viewOnFormAlter\" [ngClass]=\"viewOnFormAlter?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewOnFormAlter\" [@500]=\"'fadeInUp'\"><div class=\"pad text-info\">Fires for every form input alteration and NOT just after a change occurred</div><h4 class=\"pad-sm margin-0\">Example</h4><form class=\"pad\" (onFormAlter)=\"formAlters=formAlters==null?1:formAlters+1\"><span>Alter Count : {{formAlters || 0}} :</span><input type=\"text\"/></form><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;form (onFormAlter)=\"formAlters=formAlters==null?1:formAlters+1\" &gt;"+
"\n  &lt;span&gt; Alter Count : {{formAlters || 0}} &lt;/span&gt;"+
"\n  &lt;input type=\"text\" /&gt;"+
"\n&lt;/form&gt;"+
"\n</pre></absolute-overflow-y></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>shakeOn</h3><div class=\"text-grey-2x max-width-400\">Control an animated shaking effect on demand</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"viewShakeOn=!viewShakeOn\" [ngClass]=\"viewShakeOn?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewShakeOn\" [@500]=\"'fadeInUp'\"><div class=\"pad\"><div class=\"pad-xs bg-warning border-warning text-warning border\">You will need to &lt;link&gt; one of two style sheets:<ul><li>ack-angular/ack-angular.css</li><li>- or -</li><li>ack-angular/csshake.css</li></ul></div></div><h4 class=\"pad-sm margin-0\">Example</h4><div class=\"pad\"><label [shakeOn]=\"shakeOn\" (shakeThen)=\"shakeOn=false\" [(shakeRef)]=\"shakeRef\" [(shakeForMs)]=\"shakeForMs\" [(shakeType)]=\"shakeOnType\">shake this text :: {{ shakeOn||false }}</label>&nbsp;<button (click)=\"shakeOn=true\">shake:{{shakeOn||false}}</button>&nbsp;<select [(ngModel)]=\"shakeOnType\" (change)=\"shakeOn=true\"><option *ngFor=\"let item of shakeRef.shakeTypes\" value=\"{{item}}\">{{item}}</option></select>&nbsp;<input [(ngModel)]=\"shakeForMs\" (change)=\"shakeOn=true\"/></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;label [shakeOn]=\"shakeOn\" (shakeThen)=\"shakeOn=false\" [(shakeRef)]=\"shakeRef\" [(shakeForMs)]=\"shakeForMs\" [(shakeType)]=\"shakeOnType\"&gt;"+
"\n  |shake this text :: {{ shakeOn||false }}"+
"\n&lt;/label&gt;"+
"\n&lt;button (click)=\"shakeOn=true\"&gt; shake:{{shakeOn||false}} &lt;/button&gt;"+
"\n&lt;select [(ngModel)]=\"shakeOnType\" (change)=\"shakeOn=true\"&gt;"+
"\n  &lt;option *ngFor=\"let item of (shakeRef?shakeRef.shakeTypes:[])\" value=\"{{item}}\"&gt;{{item}}&lt;/option&gt;"+
"\n&lt;/select&gt;"+
"\n&lt;input [(ngModel)]=\"shakeForMs\" (change)=\"shakeOn=true\" /&gt;"+
"\n</pre></absolute-overflow-y></div></div></div><br/><h3 class=\"margin-bottom-0\">Layout Components</h3><div class=\"pad\"><div class=\"pad bg-warning border-warning text-warning border\">You will need to &lt;link&gt; one of two style sheets:<ul><li>ack-angular/ack-angular.css</li><li>- or -</li><li>ack-angular/ack-css-boot.css</li></ul></div></div><div class=\"flex-wrap child-margin-xxs\"><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>absolute-overflow-y</h3><div class=\"text-grey-2x max-width-400\">Control pre and nowrap elements y-axis overflow</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"absoluteOverflowY=!absoluteOverflowY\" [ngClass]=\"absoluteOverflowY?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"absoluteOverflowY\" [@500]=\"'fadeInUp'\"><div class=\"pad\"><div class=\"pad bg-info text-info text-info\">Often, pre elements and nowrap styles, make it hard to contronl y-axis overflow.<p>The following component, uses a relative and a absolute position elements along with height monitoring to manage y-axis overflow.</p><p>A no-sroll-bar option is defaulted to remove overflow scroll bars.</p></div></div><h4 class=\"pad-sm margin-0\">Example</h4><div class=\"pad\"><absolute-overflow-y><div class=\"nowrap\">&nbsp;&nbsp;This content all runs on one line flat out for as long as I can stand to stand typing at a Veridesk in Delray Beach, FL. Not that long it turns out...</div></absolute-overflow-y><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;absolute-overflow-y&gt;"+
"\n&nbsp;&nbsp;&lt;div style=\"white-space:nowrap;\"&gt;"+
"\n&nbsp;&nbsp;&nbsp;&nbsp;This content all runs on one line flat out for as long as I can stand to stand typing at a Veridesk in Delray Beach, FL. Not that long it turns out..."+
"\n&nbsp;&nbsp;&lt;/div&gt;"+
"\n&lt;/absolute-overflow-y&gt;"+
"\n</pre></absolute-overflow-y></div></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>error-well</h3><div class=\"text-grey-2x max-width-400\">a smart and simple place to display errors</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"viewErrorWell=!viewErrorWell\" [ngClass]=\"viewErrorWell?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewErrorWell\" [@500]=\"'fadeInUp'\"><h4 class=\"pad-sm margin-0\">Example</h4><div class=\"pad\"><select name=\"cssClasses\" [(ngModel)]=\"cssClasses\"><option value=\"bg-info border-info text-info\">bg-info border-info text-info</option><option value=\"bg-warning border-warning text-warning\">bg-warning border-warning text-warning</option><option value=\"bg-danger border-danger text-danger\">bg-danger border-danger text-danger</option><option value=\"bg-energized border-energized text-energized\">bg-energized border-energized text-energized</option><option value=\"bg-calm border-calm text-calm\">bg-calm border-calm text-calm</option><option value=\"bg-assertive border-assertive text-assertive\">bg-assertive border-assertive text-assertive</option><option value=\"bg-success border-success text-success\">bg-success border-success text-success</option><option value=\"bg-positive border-positive text-positive\">bg-positive border-positive text-positive</option><option value=\"bg-balanced border-balanced text-balanced\">bg-balanced border-balanced text-balanced</option><option value=\"bg-stable border-stable text-stable\">bg-stable border-stable text-stable</option><option value=\"bg-dark border-dark text-dark\">bg-dark border-dark text-dark</option><option value=\"bg-royal border-royal text-royal\">bg-royal border-royal text-royal</option></select><error-well class=\"margin\" [error]=\"error\" [cssClasses]=\"cssClasses\"></error-well><button (click)=\"causeError()\">cause error</button></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;error-well [error]=\"error\"&gt;&lt;/error-well&gt;"+
"\n&lt;button(\"(click)\"=\"causeError()\") cause error &lt;/button&gt;"+
"\n</pre></absolute-overflow-y></div></div></div><br/><h3>Complex Components</h3><div class=\"pad-h\"><p class=\"margin-bottom-0\">Components that have additional dependencies or restrictions</p></div><div class=\"flex-wrap child-margin-xxs\"><div class=\"flex-1 border border-grey-4x border\"><div class=\"pad-h\"><h3>route-reporter</h3><div class=\"text-grey-2x max-width-400\">Get in tune with your document route states using @angular/router</div><br/></div><div class=\"text-center\"><div class=\"border pad-xxs\" (click)=\"viewRouteReporter=!viewRouteReporter\" [ngClass]=\"viewRouteReporter?'border-energized bg-energized':'border-info bg-info'\">view details</div></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewRouteReporter\" [@500]=\"'fadeInUp'\"><div class=\"pad\">Requirements<ul><li>route-reporter</li></ul></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;route-reporter [(ref)]=\"\" (beforeChange)=\"\" (onChange)=\"\"&gt;</pre></absolute-overflow-y><h4 class=\"pad-sm margin-0\">ref example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;route-reporter [(ref)]=\"routeState\" &gt;"+
"\n-----------------------------------------"+
"\nrouteState:{{ routeState|json }}</pre></absolute-overflow-y></div></div></div>"
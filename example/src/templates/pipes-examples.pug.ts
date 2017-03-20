export const string = "<p class=\"text-grey-2x\">Decorate and filter output via Pipes</p><h3 id=\"Import Example\">Import Example</h3><p>How to make all ack-angular pipes available</p><pre class=\"code-sample\">import &#123; NgModule &#125; from '@angular/core'"+
"\nimport &#123; AppComponent &#125; from './SomeRandomComponent'"+
"\n"+
"\nimport * as ackPipes from 'ack-angular/pipes'"+
"\n"+
"\nlet decs = [ AppComponent ]"+
"\n"+
"\ndecs = decs.concat( ackPipes.declarations )"+
"\n"+
"\n@NgModule(&#123;"+
"\n  declarations:decs"+
"\n&#125;) export class AppModule &#123;&#125;"+
"\n</pre><br/><h3 id=\"Documentation\">Documentation</h3><div class=\"flex-wrap\"><fieldset class=\"flex1 border-dotted border-grey-2x border\"><legend class=\"pad-h\"><h3>typeof</h3></legend><p class=\"text-grey-2x\">Output result of native javascript typeof() function</p><h4>Usage Example</h4><pre class=\"code-sample\">{{ 0 | typeof }<!---->}"+
"\n</pre></fieldset><fieldset class=\"flex1 border-dotted border-grey-2x border\"><legend class=\"pad-h\"><h3>console</h3></legend><p class=\"text-grey-2x\">console log result of native console.log() function</p><h4>Usage Example</h4><pre class=\"code-sample\">{{ 'message1' | console : 'message2' }<!---->}"+
"\n</pre></fieldset><fieldset class=\"flex1 border-dotted border-grey-2x border\"><legend class=\"pad-h\"><h3>capitalize</h3></legend><p class=\"text-grey-2x\">Each sentence leading word is capitalized</p><h4>Usage Example</h4><pre class=\"code-sample\">{{ 'how do you do?' | capitalize }<!---->} == How do you do?"+
"\n</pre></fieldset><fieldset class=\"flex1 border-dotted border-grey-2x border\"><legend class=\"pad-h\"><h3>capitalizeWords</h3></legend><p class=\"text-grey-2x\">Every word is capitalized</p><h4>Usage Example</h4><pre class=\"code-sample\">{{ 'how do you do?' | capitalizeWords }<!---->} == How Do You Do?"+
"\n</pre></fieldset><fieldset class=\"flex1 border-dotted border-grey-2x border\"><legend class=\"pad-h\"><h3>yesno</h3></legend><p class=\"text-grey-2x\">Truthy value converts to: yes. Otherwise: no</p><h4>Usage Example</h4><pre class=\"code-sample\">{{ 'true' | yesno }<!---->} == yes"+
"\n</pre></fieldset><fieldset class=\"flex1 border-dotted border-grey-2x border\"><legend class=\"pad-h\"><h3>YesNo</h3></legend><p class=\"text-grey-2x\">Truthy value converts to: Yes. Otherwise: No</p><h4>Usage Example</h4><pre class=\"code-sample\">{{ 1 | YesNo }<!---->} == Yes"+
"\n</pre></fieldset><fieldset class=\"flex1 border-dotted border-grey-2x border\"><legend class=\"pad-h\"><h3>numbers</h3></legend><p class=\"text-grey-2x\">Removes anything not a number from a string</p><h4>Usage Example</h4><pre class=\"code-sample\">{{ 'sam123acb456xyz' | numbers }<!---->} == 123456"+
"\n</pre></fieldset><fieldset class=\"flex1 border-dotted border-grey-2x border\"><legend class=\"pad-h\"><h3>keys</h3></legend><p class=\"text-grey-2x\">List of keys for an Object</p><h4>Usage Example</h4><pre class=\"code-sample\">{{ {x:1,y:2,z:3} | keys }<!---->} == [\"x\",\"y\",\"z\"]</pre></fieldset></div>"
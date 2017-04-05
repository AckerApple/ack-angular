export const string = "<div class=\"pad-h\"><p class=\"margin-bottom-0\">Import Example</p><div class=\"pad-h text-warning text-xs\">The following import code, is NOT needed if you used the AckModule import <a class=\"text-calm\" href=\"#/overview\" (click)=\"scrollToModuleImport()\">seen here</a></div><pre class=\"code-sample\">import &#123; providers as ackProviders &#125; from \"ack-angular/providers\""+
"\nimport &#123; NgModule &#125; from '@angular/core';"+
"\n"+
"\n@NgModule(&#123;"+
"\n  providers:[ ...ackProviders ]"+
"\n&#125;)"+
"\n</pre></div><error-well [error]=\"error\"></error-well><div class=\"flex-wrap child-margin-xxs\"><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>ErrorLog</h3><div class=\"text-grey-2x\">Smart error logging for single page apps</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"viewErrorLog=!viewErrorLog\" [ngClass]=\"viewErrorLog?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewErrorLog\" [@500]=\"'fadeInUp'\"><div class=\"strong pad-sm\">Error Tester</div><form class=\"flex-center flex-valign-center child-margin-xs\"><span class=\"margin-right-0\">maxLog:</span><input class=\"margin-left-0 width-50 text-md\" type=\"number\" [(ngModel)]=\"ErrorLog.maxLog\" name=\"ErrorLog.maxLog\"/><button class=\"text-md\" (click)=\"causeErrorLog()\">cause error</button></form><div class=\"margin-bottom-xxs\" *ngFor=\"let item of ErrorLog.log\"><error-well [error]=\"item\"></error-well></div><h4 class=\"pad-h-sm margin-0\">Usage Example</h4><div class=\"pad-xs\"><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">import &#123; ErrorLog &#125; from \"ack-angular\""+
"\nimport &#123; Component &#125; from \"@angular/core\""+
"\n"+
"\n@Component(&#123;...&#125;)"+
"\nexport class SomeClass&#123;"+
"\n  constructor(public ErrorLog:ErrorLog)&#123;"+
"\n    this.ErrorLog.maxLog = 30"+
"\n    this.ErrorLog.add('some error')"+
"\n    this.errorCount  = this.ErrorLog.log.length"+
"\n  &#125;"+
"\n&#125;"+
"\n</pre></absolute-overflow-y></div></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>Log</h3><div class=\"text-grey-2x\">Smart logging for single page apps</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"viewLog=!viewLog\" [ngClass]=\"viewLog?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewLog\" [@500]=\"'fadeInUp'\"><div class=\"strong pad-sm\">Log Tester</div><form class=\"flex-center flex-valign-center child-margin-xs\"><span class=\"margin-right-0\">maxLog:</span><input class=\"margin-left-0 width-50 text-md\" type=\"number\" [(ngModel)]=\"Log.maxLog\" name=\"Log.maxLog\"/><button class=\"text-md\" (click)=\"causeLog()\">cause log</button></form><div class=\"margin-bottom-xxs\" *ngFor=\"let item of Log.log\"><error-well [error]=\"item\" cssClasses=\"border-info border text-info bg-info\"></error-well></div><h4 class=\"pad-h-sm margin-0\">Usage Example</h4><div class=\"pad-xs\"><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">import &#123; Log &#125; from \"ack-angular\""+
"\nimport &#123; Component &#125; from \"@angular/core\""+
"\n"+
"\n@Component(&#123;...&#125;)"+
"\nexport class SomeClass&#123;"+
"\n  constructor(public Log:Log)&#123;"+
"\n    this.Log.maxLog = 30"+
"\n    this.Log.add('some error')"+
"\n    this.logCount  = this.Log.log.length"+
"\n  &#125;"+
"\n&#125;"+
"\n</pre></absolute-overflow-y></div></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>AckOffline</h3><div class=\"text-grey-2x\">Offline storage provided by <a class=\"text-calm\" href=\"https://www.npmjs.com/package/localforage\">localforage</a></div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"viewAckOffline=!viewAckOffline\" [ngClass]=\"viewAckOffline?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewAckOffline\" [@500]=\"'fadeInUp'\"><div class=\"strong pad-sm\">Memory Test</div><form class=\"pad-xs flex child-margin-xxs\" (ngSubmit)=\"setOffline(newOfflineStorage)\"><input class=\"flex-1\" [(ngModel)]=\"newOfflineStorage\" name=\"newOfflineStorage\" placeholder=\"put something into browser memory\"/><button (click)=\"setOffline(newOfflineStorage)\">set</button><button type=\"button\" (click)=\"clearOffline()\">clear</button></form><div class=\"text-xs pad-xs border-success text-success bg-success\" *ngIf=\"offlineStorage\" [@500]=\"'slideInLeft'\"><h5 class=\"margin-0\">Current Offline Storage</h5><div class=\"pad\">{{ offlineStorage|json }}</div></div><div class=\"text-xs pad-xs border-info text-info bg-info margin-bottom\"><ul><li>Above you can edit offline browser storage.</li><li>Come back later and your memory will still be there</li></ul></div><h4 class=\"pad-h-sm margin-0\">Usage Example</h4><div class=\"pad-xs\"><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">import &#123; AckOffline &#125; from \"ack-angular\""+
"\nimport &#123; Component &#125; from \"@angular/core\""+
"\n"+
"\n@Component(&#123;...&#125;)"+
"\nexport class SomeClass&#123;"+
"\n  constructor(public AckOffline:AckOffline)&#123;"+
"\n    this.AckOffline.get('my-app-data')"+
"\n    .then(data=&gt;this.appData=data)"+
"\n  &#125;"+
"\n"+
"\n  set(data)&#123;"+
"\n    return this.AckOffline.set('my-app-data', data)"+
"\n    .catch(e=&gt;console.error(e))"+
"\n  &#125;"+
"\n"+
"\n  get()&#123;"+
"\n    return this.AckOffline.get('my-app-data')"+
"\n    .catch(e=&gt;console.error(e))"+
"\n  &#125;"+
"\n"+
"\n  clear()&#123;"+
"\n    return this.AckOffline.clear('my-app-data')"+
"\n    .catch(e=&gt;console.error(e))"+
"\n  &#125;"+
"\n&#125;"+
"\n</pre></absolute-overflow-y></div></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>AckCache</h3><div class=\"text-grey-2x\">Offline storage used with expires and maxAge cache control options</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"viewAckCache=!viewAckCache\" [ngClass]=\"viewAckCache?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewAckCache\" [@500]=\"'fadeInUp'\"><div class=\"strong pad-sm\">Cache Test</div><form class=\"pad-xs flex child-margin-xxs\" (ngSubmit)=\"setCache(cacheStorage, cacheSeconds)\"><input class=\"flex-1\" [(ngModel)]=\"cacheStorage\" name=\"cacheStorage\" placeholder=\"put something expirable into browser memory\"/><input class=\"width-50\" type=\"number\" [(ngModel)]=\"cacheSeconds\" name=\"cacheSeconds\" placeholder=\"expires in seconds\" value=\"30\"/><span class=\"text-xs text-grey-2x margin-left-0 flex-stacked flex-valign-bottom\"><div class=\"flex-1 line-height-0\">&nbsp;</div><span class=\"line-height-3-4\">secs&nbsp;</span></span><button (click)=\"setCache(cacheStorage, cacheSeconds)\">set</button><button type=\"button\" (click)=\"clearCache()\">clear</button></form><div class=\"text-xs pad-xs border-success text-success bg-success\" *ngIf=\"cache\" [@500]=\"'slideInLeft'\"><h5 class=\"margin-0\">Current Cache</h5><div class=\"pad\">{{ cache|json }}</div></div><div class=\"text-xs pad-xs border-info text-info bg-info margin-bottom\"><ul><li>Above you can edit offline browser storage.</li><li>Come back later</li><li>Your memory will still be there (until it expires)</li></ul></div><h4 class=\"pad-h-sm margin-0\">Usage Example</h4><div class=\"pad-xs\"><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">import &#123; AckCache &#125; from \"ack-angular\""+
"\nimport &#123; Component &#125; from \"@angular/core\""+
"\n"+
"\n@Component(&#123;...&#125;)"+
"\nexport class SomeClass&#123;"+
"\n  constructor(public AckCache:AckCache)&#123;"+
"\n  &#125;"+
"\n"+
"\n  set(data)&#123;"+
"\n    return this.AckCache.set('my-app-data', data)"+
"\n    .catch(e=&gt;console.error(e))"+
"\n  &#125;"+
"\n"+
"\n  get()&#123;"+
"\n    return this.AckCache.get('my-app-data')"+
"\n    .catch(e=&gt;console.error(e))"+
"\n  &#125;"+
"\n"+
"\n  clear()&#123;"+
"\n    return this.AckCache.clear('my-app-data')"+
"\n    .catch(e=&gt;console.error(e))"+
"\n  &#125;"+
"\n&#125;"+
"\n</pre></absolute-overflow-y></div></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>AckQue</h3><div class=\"text-grey-2x\">Offline storage used to provide association between data and data-processors</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"viewAckQue=!viewAckQue\" [ngClass]=\"viewAckQue?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewAckQue\" [@500]=\"'fadeInUp'\"><div class=\"pad-sm strong\">Que Test</div><form class=\"flex child-margin-xxs\" *ngFor=\"let item of queArray; let i=index\" [@200]=\"'slideInLeft'\"><div class=\"text-xs pad-h-xs\">{{i}}</div><input class=\"flex-1\" [(ngModel)]=\"queArray[i]\" name=\"que{{index}}\" readonly=\"readonly\"/><button (click)=\"processQuedByIndex(i)\">process</button><button (click)=\"dequeByIndex(i)\">remove</button></form><form class=\"flex child-margin-xxs\" (ngSumbit)=\"que(queStorage)\"><div class=\"text-xs pad-h-xs\">add</div><input class=\"flex-1\" [(ngModel)]=\"queStorage\" name=\"queStorage\" placeholder=\"put process data into que\"/><button (click)=\"que(queStorage)\">que item</button><button (click)=\"clearQue()\">clear all</button><button (click)=\"processQue()\">process all</button></form><div class=\"flex child-margin-xxs\" *ngFor=\"let item of processQueResults; let i=index\" [@500]=\"'slideInLeft'\"><div class=\"text-xs pad-h-xs\">Completed {{i}} :</div><input class=\"flex-1\" [ngModel]=\"item\" disabled=\"disabled\"/></div><div class=\"text-xs pad-xs border-info text-info bg-info margin-bottom\">TRY THIS:<ul><li>Put items into que</li><li>Disable your internet connection (unplug it)</li><li>Enable your internet connection</li><li>The entire que will be processed (takes seconds)</li></ul><div class=\"pad-xs\" [(statusOnlineModel)]=\"statusOnlineModel\">You are currently : {{statusOnlineModel ? 'online' : 'offline'}}</div></div><h4 class=\"pad-h-sm margin-0\">Usage Example</h4><div class=\"pad-xs\"><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">import &#123; AckOffline &#125; from \"ack-angular\""+
"\nimport &#123; Component &#125; from \"@angular/core\""+
"\n"+
"\n@Component(&#123;...&#125;)"+
"\nexport class SomeClass&#123;"+
"\n  constructor(public AckOffline:AckOffline)&#123;"+
"\n    this.AckOffline.registerQueHandler('postHttpQue',quedData=&gt;&#123;"+
"\n      console.log('browser back online, ready to transmit data', quedData)"+
"\n    &#125;)"+
"\n"+
"\n    this.onlineEvent = ()=&gt;this.onOnline()"+
"\n"+
"\n    window.addEventListener('online',this.onlineEvent)"+
"\n  &#125;"+
"\n"+
"\n  /** anytime we come back from offline, lets process our que */"+
"\n  onOnline()&#123;"+
"\n    this.AckOffline.processQue()"+
"\n    .catch(e=&gt;console.error(e))"+
"\n  &#125;"+
"\n"+
"\n  set(data)&#123;"+
"\n    return this.AckOffline.set('my-app-que', data)"+
"\n    .catch(e=&gt;console.error(e))"+
"\n  &#125;"+
"\n  "+
"\n  ngOnDestroy()&#123;"+
"\n    window.removeEventListender(this.onlineEvent)"+
"\n  &#125;"+
"\n&#125;</pre></absolute-overflow-y></div></div></div></div><div class=\"pad\"><div class=\"text-center bg-info pad\"><div class=\"inline-block pad border border-dotted border-grey-5x bg-stable\"><div class=\"pad-sm text-sm text-grey-2x\">After testing offline storage providers, you may want to clear the memory that was created</div><button (click)=\"clearAllOffline()\">clear all offline memory</button></div></div></div>"
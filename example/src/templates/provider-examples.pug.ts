export const string = "<ng-container [(statusOnlineModel)]=\"statusOnlineModel\"></ng-container><div class=\"pad-h\"><p class=\"margin-bottom-0\">Import Example</p><div class=\"pad-h text-warning text-xs\">The following import code, is NOT needed if you used the AckModule import <a class=\"text-calm\" href=\"#/overview\" (click)=\"scrollToModuleImport()\">seen here</a></div><pre class=\"code-sample\">import &#123; providers as ackProviders &#125; from \"ack-angular/providers\""+
"\nimport &#123; NgModule &#125; from '@angular/core';"+
"\n"+
"\n@NgModule(&#123;"+
"\n  providers:[ ...ackProviders ]"+
"\n&#125;)"+
"\n</pre></div><error-well [error]=\"error\"></error-well><div class=\"flex-wrap child-margin-xxs\"><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>AckApi</h3><div class=\"text-grey-2x\">Http util with offline config for request failures</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"views.ackApi=!views.ackApi\" [ngClass]=\"views.ackApi?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.ackApi\" [@500]=\"'fadeInUp'\"><div class=\"strong pad-sm\">Http Tester</div><div class=\"pad-xs\"><div class=\"flex-center flex-valign-center child-pad-xxs\"><div><label>method</label><select class=\"text-md block width-full\" [(ngModel)]=\"httpConfig.method\" name=\"httpConfig.method\"><option value=\"GET\">GET</option><option value=\"POST\">POST</option><option value=\"PUT\">PUT</option><option value=\"PATCH\">PATCH</option><option value=\"DELETE\">DELETE</option></select></div><div class=\"flex-1\"><label>url</label><input class=\"block width-full min-width-300 text-md\" [(ngModel)]=\"httpConfig.url\" name=\"httpConfig.url\" (enterKey)=\"sendHttp()\"/></div><div><label>&nbsp;</label><div><button class=\"border bg-success text-success border-success text-md\" type=\"submit\" (click)=\"sendHttp()\">request</button></div></div></div><div class=\"margin-top-xs pad-xxs bg-white border border-grey-6x\"><div class=\"flex-center child-margin-xxs child-pad-h-xs text-center\"><a class=\"flex-1 border\" (click)=\"views.httpSub=views.httpSub=='body'?null:'body'\" [ngClass]=\"views.httpSub=='body'?'bg-energized border-energized':'bg-info text-info border-info'\">request body</a><a class=\"pos-rel flex-1 border\" (click)=\"views.httpSub=views.httpSub=='headers'?null:'headers';loadHttpHeaderConfigArray();\" [ngClass]=\"views.httpSub=='headers'?'bg-energized border-energized':'bg-info text-info border-info'\"><div class=\"pos-abs pad-xxs right-0 text-white\" style=\"line-height:20px;\"><div class=\"font-fixed-width radius-half height-20 width-20 bg-grey-3x pad-h-xxs\">{{ httpHeaderConfigArray.length }}</div></div><div class=\"pad-h-lg\">request headers</div></a><a class=\"pos-rel flex-1 border\" (click)=\"views.httpSub=views.httpSub=='queModel'?null:'queModel';\" [ngClass]=\"views.httpSub=='queModel'?'bg-energized border-energized':'bg-info text-info border-info'\"><div class=\"pos-abs pad-xxs left-0 text-white\" style=\"line-height:20px;\"><div class=\"inline-block font-fixed-width radius-half height-20 width-20 bg-grey-3x pad-h-xxs\">{{ httpQueArray.length || 0 }}</div></div><div class=\"pos-abs pad-xxs right-0 text-white\" style=\"line-height:20px;\"><div class=\"inline-block font-fixed-width radius-half height-20 width-20 bg-grey-3x pad-h-xxs\">{{ (httpCache|keys).length || 0 }}</div></div>que and cache</a></div><div class=\"pad-xs\" *ngIf=\"views.httpSub=='body'\" [@500]=\"'fadeInUp'\"><select class=\"width-full\" [(ngModel)]=\"httpConfig.headers['Content-Type']\" name=\"httpConfig.headers['Content-Type']\"><option value=\"text/plain\">text/plain</option><option value=\"application/json\">application/json</option></select><textarea class=\"width-full height-100\" [(ngModel)]=\"httpConfig.body\" name=\"httpConfig.data\" placeholder=\"transmit data here\"></textarea></div><div class=\"pad-xs\" *ngIf=\"views.httpSub=='headers'\" [@500]=\"'fadeInUp'\"><div class=\"flex child-margin-xxs child-pad-xxs\" *ngFor=\"let item of httpHeaderConfigArray; let i = index\" [@200]=\"'fadeInUp'\"><input class=\"flex-1\" [(ngModel)]=\"item.name\" placeholder=\"name\" (change)=\"readHttpHeaderConfigArray()\"/><input class=\"flex-1\" [(ngModel)]=\"item.value\" placeholder=\"value\" (change)=\"readHttpHeaderConfigArray()\"/><button class=\"border border-warning text-warning bg-warning\" type=\"button\" (click)=\"httpHeaderConfigArray.splice(i,1);readHttpHeaderConfigArray()\" [ngClass]=\"0==i?'width-50 margin-right-0 border-right-0':'width-100'\">drop</button><button class=\"border-left-0 margin-left-0 width-50 border border-calm text-white bg-calm\" *ngIf=\"0==i\" type=\"button\" (click)=\"httpHeaderConfigArray.unshift({name:'', value:''})\" [@200]=\"'fadeInUp'\">add</button></div></div><div class=\"pad-xs\" *ngIf=\"views.httpSub=='queModel'\" [@500]=\"'fadeInUp'\"><div *ngIf=\"httpConfig.method=='GET'\" [@500]=\"'fadeInUp'\"><div class=\"text-grey-2x\">Cache GET requests.</div><div class=\"pad flex-wrap child-margin-xxs\"><div class=\"flex-1\"><label>maxAge <span class=\"text-xs text-grey-3x\">milsecs</span></label><input class=\"width-full\" type=\"number\" [(ngModel)]=\"httpConfig.queModel.maxAge\"/><input-hint>New fetch will occur after cache has aged</input-hint></div><div class=\"flex-1\"><label>expires</label><input class=\"width-full\" type=\"datetime-local\" [(ngModel)]=\"httpConfig.queModel.expires\"/><input-hint>New fetch will occur after above date</input-hint></div></div><div class=\"pad-top text-warning text-center text-xs\">change request method for QUE details</div><div class=\"pad-xs\" *ngIf=\"(httpCache|keys).length\" [@500]=\"'fadeInUp'\"><h4 class=\"margin-0\">HTTP Cache Array</h4><p class=\"text-grey-2x text-xs\">Requests awaiting internet connection to return</p><div class=\"pad-xxs\" *ngFor=\"let key of (httpCache|keys); let i=index\" [@500]=\"'fadeInUp'\"><error-well [error]=\"httpCache[key]\" cssClasses=\"bg-info\" message=\"{{key}}\"></error-well></div><p class=\"text-grey-2x text-xs\"><strong>Seconds</strong>, after restoring internet connection, the above requests will process</p><div class=\"pad text-center\"><button (click)=\"clearHttpCache()\">clear cache</button></div></div></div><div *ngIf=\"httpConfig.method!='GET'\" [@500]=\"'fadeInUp'\"><div class=\"text-grey-2x\">Que failed POST/PUT/PATCH/DELETE requests. </div><div class=\"pad\"><label>maxTry</label><input class=\"block\" type=\"number\" [(ngModel)]=\"httpConfig.queModel.maxTry\"/><div class=\"pos-rel text-xs\"><div class=\"pos-abs top-0 text-grey-3x width-full\">Control number of failed <strong>attempts</strong> to reprocess</div></div></div><div class=\"pad-top text-warning text-center text-xs\">change request method to GET for CACHE details</div><div class=\"pad-xs\" *ngIf=\"httpQueArray.length\" [@500]=\"'fadeInUp'\"><h4 class=\"margin-0\">HTTP Que Array</h4><p class=\"text-grey-2x\">Requests awaiting internet connection to return. <strong>Seconds</strong>, after restoring internet connection, the following requests will process</p><div class=\"pad-xxs\" *ngFor=\"let item of httpQueArray; let i=index\" [@500]=\"'fadeInUp'\"><error-well [error]=\"item\" cssClasses=\"border border-info bg-info\" message=\"{{item.method}}:{{ item.url }}\"></error-well></div><div class=\"pad text-center\"><button (click)=\"clearHttpQue()\">clear que</button></div></div></div></div></div></div><error-well [error]=\"httpResponse\" cssClasses=\"border border-success text-success bg-success\"></error-well><error-well [error]=\"httpError\"></error-well><div class=\"margin pad bg-royal text-sm\"><div class=\"text-white\">TRY THIS</div><ul><li>Disconnect from the internet. You are currently: <strong>{{ statusOnlineModel ? 'online':'offline' }}</strong></li><li>Make POST, PUT, or PATCH request(s). Currently: <strong>{{ httpConfig.method }}</strong></li><li>Your requests will be qued into offline memory</li><li>Connect to the internet. Your request should automatically resend and the que is cleared</li></ul></div><h4 class=\"pad-h-sm margin-h-0 margin-bottom-0\">Usage Example</h4><div class=\"pad-xs\"><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">import &#123; AckApi &#125; from \"ack-angular\""+
"\nimport &#123; Component &#125; from \"@angular/core\""+
"\n"+
"\n@Component(&#123;...&#125;)"+
"\nexport class SomeClass&#123;"+
"\n  public queModel = &#123;"+
"\n    name:'ackHttpTests',"+
"\n    maxAge:15000,//GET cache busted at 15 seconds"+
"\n    maxTry:50//POST failure retries allowed"+
"\n  &#125;"+
"\n"+
"\n  constructor(public AckApi:AckApi)&#123;&#125;"+
"\n"+
"\n  monitorOnlineStatus()&#123;"+
"\n    window.addEventListener('online',()=&gt;&#123;"+
"\n      if(navigator.onLine)&#123;"+
"\n        this.AckApi.processQue('ackHttpTests')"+
"\n      &#125;"+
"\n    &#125;)"+
"\n  &#125;"+
"\n"+
"\n  clearPostQue()&#123;"+
"\n    return this.AckApi.clearQue('ackHttpTests')"+
"\n  &#125;"+
"\n"+
"\n  clearGetCache()&#123;"+
"\n    return this.AckApi.clearCache('ackHttpTests')"+
"\n  &#125;"+
"\n"+
"\n  request()&#123;"+
"\n    return this.AckApi.request(&#123;"+
"\n      url:'...'."+
"\n      method:'...'"+
"\n      queModel:this.queModel"+
"\n    &#125;)"+
"\n    .then( response=&gt;console.log('200',response) )"+
"\n    .catch(e=&gt;&#123;"+
"\n"+
"\n      //ignore error, has been qued for when internet returns"+
"\n      if(e.offlineMetadata)return"+
"\n"+
"\n      return Promise.reject(e)"+
"\n    &#125;)"+
"\n  &#125;"+
"\n"+
"\n  POST()&#123;"+
"\n    return this.AckApi.post('url', &#123;data&#125;, &#123;queModel:this.queModel&#125;)"+
"\n    .then( response=&gt;console.log('200',response) )"+
"\n    .catch(e=&gt;&#123;"+
"\n      //ignore error, has been qued for when internet returns"+
"\n      if(e.offlineMetadata)return"+
"\n"+
"\n      return Promise.reject(e)"+
"\n    &#125;)"+
"\n  &#125;"+
"\n"+
"\n  GET()&#123;"+
"\n    return this.AckApi.get('url', &#123;queModel:this.queModel&#125;)"+
"\n    .then( response=&gt;console.log('200',response) )"+
"\n    .catch( e=&gt;console.error(e) )"+
"\n  &#125;"+
"\n&#125;</pre></absolute-overflow-x></div></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>ErrorLog</h3><div class=\"text-grey-2x\">Smart error logging for single page apps</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"views.errorLog=!views.errorLog\" [ngClass]=\"views.errorLog?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.errorLog\" [@500]=\"'fadeInUp'\"><div class=\"strong pad-sm\">Error Tester</div><form class=\"flex-center flex-valign-center child-margin-xs\"><span class=\"margin-right-0\">maxLog:</span><input class=\"margin-left-0 width-50 text-md\" type=\"number\" [(ngModel)]=\"ErrorLog.maxLog\" name=\"ErrorLog.maxLog\"/><button class=\"text-md\" (click)=\"causeErrorLog()\">cause error</button></form><div class=\"margin-bottom-xxs\" *ngFor=\"let item of ErrorLog.log\" [@500]=\"'fadeInUp'\"><error-well [error]=\"item\"></error-well></div><h4 class=\"pad-h-sm margin-0\">Usage Example</h4><div class=\"pad-xs\"><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">import &#123; ErrorLog &#125; from \"ack-angular\""+
"\nimport &#123; Component &#125; from \"@angular/core\""+
"\n"+
"\n@Component(&#123;...&#125;)"+
"\nexport class SomeClass&#123;"+
"\n  constructor(public ErrorLog:ErrorLog)&#123;"+
"\n    this.ErrorLog.maxLog = 30"+
"\n    this.ErrorLog.add('some error')"+
"\n    this.errorCount  = this.ErrorLog.log.length"+
"\n"+
"\n    //catch and log all uncaught window onerror events"+
"\n    this.ErrorLog.monitorWindow()"+
"\n  &#125;"+
"\n&#125;"+
"\n</pre></absolute-overflow-x></div></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>Log</h3><div class=\"text-grey-2x\">Smart logging for single page apps</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"views.log=!views.log\" [ngClass]=\"views.log?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.log\" [@500]=\"'fadeInUp'\"><div class=\"strong pad-sm\">Log Tester</div><form class=\"flex-center flex-valign-center child-margin-xs\"><span class=\"margin-right-0\">maxLog:</span><input class=\"margin-left-0 width-50 text-md\" type=\"number\" [(ngModel)]=\"Log.maxLog\" name=\"Log.maxLog\"/><button class=\"text-md\" (click)=\"causeLog()\">cause log</button></form><div class=\"margin-bottom-xxs\" *ngFor=\"let item of Log.log\" [@500]=\"'fadeInUp'\"><error-well [error]=\"item\" cssClasses=\"border-info border text-info bg-info\"></error-well></div><h4 class=\"pad-h-sm margin-0\">Usage Example</h4><div class=\"pad-xs\"><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">import &#123; Log &#125; from \"ack-angular\""+
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
"\n</pre></absolute-overflow-x></div></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>UrlVars</h3><div class=\"text-grey-2x\">Parse and get url query variables regardless of case sensativity</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"views.urlVars=!views.urlVars\" [ngClass]=\"views.urlVars?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.urlVars\" [@500]=\"'fadeInUp'\"><h4 class=\"pad-h-sm margin-0\">Usage Example</h4><div class=\"pad-xs\"><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">import &#123; UrlVars &#125; from \"ack-angular\""+
"\nimport &#123; Component &#125; from \"@angular/core\""+
"\n"+
"\n@Component(&#123;...&#125;)"+
"\nexport class SomeClass&#123;"+
"\n  token:any"+
"\n"+
"\n  constructor(public UrlVars:UrlVars)&#123;"+
"\n    console.log('all parsed variables', this.UrlVars.vars)"+
"\n    "+
"\n    this.token = this.UrlVars.get('token')//case insensative variable fetch"+
"\n  &#125;"+
"\n&#125;"+
"\n</pre></absolute-overflow-x></div></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>WindowService</h3><div class=\"text-grey-2x\">Proper dependency injection of window variable</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"views.windowService=!views.windowService\" [ngClass]=\"views.windowService?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.windowService\" [@500]=\"'fadeInUp'\"><h4 class=\"pad-h-sm margin-0\">Usage Example</h4><div class=\"pad-xs\"><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">import &#123; WindowService &#125; from \"ack-angular\""+
"\nimport &#123; Component &#125; from \"@angular/core\""+
"\n"+
"\n@Component(&#123;...&#125;)"+
"\nexport class SomeClass&#123;"+
"\n  token:any"+
"\n"+
"\n  constructor(public WindowService:WindowService)&#123;"+
"\n    console.log('window', this.WindowService.nativeWindow)"+
"\n  &#125;"+
"\n&#125;"+
"\n</pre></absolute-overflow-x></div></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>AckOffline</h3><div class=\"text-grey-2x\">Offline storage provided by <a class=\"text-calm\" href=\"https://www.npmjs.com/package/localforage\">localforage</a></div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"views.ackOffline=!views.ackOffline\" [ngClass]=\"views.ackOffline?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.ackOffline\" [@500]=\"'fadeInUp'\"><div class=\"strong pad-sm\">Memory Test</div><form class=\"pad-xs flex child-margin-xxs\" (ngSubmit)=\"setOffline(newOfflineStorage)\"><input class=\"flex-1\" [(ngModel)]=\"newOfflineStorage\" name=\"newOfflineStorage\" placeholder=\"put something into browser memory\"/><button (click)=\"setOffline(newOfflineStorage)\">set</button><button type=\"button\" (click)=\"clearOffline()\">clear</button></form><div class=\"text-xs pad-xs border-success text-success bg-success\" *ngIf=\"offlineStorage\" [@500]=\"'fadeInUp'\"><h5 class=\"margin-0\">Current Offline Storage</h5><div class=\"pad\">{{ offlineStorage|json }}</div></div><div class=\"text-xs pad-xs border-info text-info bg-info margin-bottom\"><ul><li>Above you can edit offline browser storage.</li><li>Come back later and your memory will still be there</li></ul></div><h4 class=\"pad-h-sm margin-0\">Usage Example</h4><div class=\"pad-xs\"><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">import &#123; AckOffline &#125; from \"ack-angular\""+
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
"\n</pre></absolute-overflow-x></div></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>AckCache</h3><div class=\"text-grey-2x\">Offline storage used with expires and maxAge cache control options</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"views.ackCache=!views.ackCache\" [ngClass]=\"views.ackCache?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.ackCache\" [@500]=\"'fadeInUp'\"><div class=\"strong pad-sm\">Cache Test</div><form class=\"pad-xs flex child-margin-xxs\" (ngSubmit)=\"setCache(cacheStorage, cacheSeconds)\"><input class=\"flex-1\" [(ngModel)]=\"cacheStorage\" name=\"cacheStorage\" placeholder=\"put something expirable into browser memory\"/><input class=\"width-50\" type=\"number\" [(ngModel)]=\"cacheSeconds\" name=\"cacheSeconds\" placeholder=\"expires in seconds\" value=\"30\"/><span class=\"text-xs text-grey-2x margin-left-0 flex-stacked flex-valign-bottom\"><div class=\"flex-1 line-height-0\">&nbsp;</div><span class=\"line-height-3-4\">secs&nbsp;</span></span><button (click)=\"setCache(cacheStorage, cacheSeconds)\">set</button><button type=\"button\" (click)=\"clearCache()\">clear</button></form><div class=\"text-xs pad-xs border-success text-success bg-success\" *ngIf=\"cache\" [@500]=\"'fadeInUp'\"><h5 class=\"margin-0\">Current Cache</h5><div class=\"pad\">{{ cache|json }}</div></div><div class=\"text-xs pad-xs border-info text-info bg-info margin-bottom\"><ul><li>Above you can edit offline browser storage.</li><li>Come back later</li><li>Your memory will still be there (until it expires)</li></ul></div><h4 class=\"pad-h-sm margin-0\">Usage Example</h4><div class=\"pad-xs\"><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">import &#123; AckCache &#125; from \"ack-angular\""+
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
"\n</pre></absolute-overflow-x></div></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>AckQue</h3><div class=\"text-grey-2x\">Offline storage used to provide association between data and data-processors</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xs hover-bg-warning\" (click)=\"views.ackQue=!views.ackQue\" [ngClass]=\"views.ackQue?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"views.ackQue\" [@500]=\"'fadeInUp'\"><div class=\"pad-sm strong\">Que Test</div><form class=\"flex child-margin-xxs\" *ngFor=\"let item of queArray; let i=index\" [@200]=\"'fadeInUp'\"><div class=\"text-xs pad-h-xs\">{{i}}</div><input class=\"flex-1\" [(ngModel)]=\"queArray[i]\" name=\"que{{index}}\" readonly=\"readonly\"/><button (click)=\"processQuedByIndex(i)\">process</button><button (click)=\"dequeByIndex(i)\">remove</button></form><form class=\"flex child-margin-xxs\" (ngSumbit)=\"que(queStorage)\"><div class=\"text-xs pad-h-xs\">add</div><input class=\"flex-1\" [(ngModel)]=\"queStorage\" name=\"queStorage\" placeholder=\"put process data into que\"/><button (click)=\"que(queStorage)\">que item</button><button (click)=\"clearQue()\">clear all</button><button (click)=\"processQue()\">process all</button></form><div class=\"flex child-margin-xxs\" *ngFor=\"let item of processQueResults; let i=index\" [@500]=\"'fadeInUp'\"><div class=\"text-xs pad-h-xs\">Completed {{i}} :</div><input class=\"flex-1\" [ngModel]=\"item\" disabled=\"disabled\"/></div><div class=\"text-xs pad-xs border-info text-info bg-info margin-bottom\">TRY THIS<ul><li>Put items into que</li><li>Disable your internet connection (unplug it)</li><li>Enable your internet connection</li><li>The entire que will be processed (takes seconds)</li></ul><div class=\"pad-xs\">You are currently : {{statusOnlineModel ? 'online' : 'offline'}}</div></div><h4 class=\"pad-h-sm margin-0\">Usage Example</h4><div class=\"pad-xs\"><absolute-overflow-x><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">import &#123; AckOffline &#125; from \"ack-angular\""+
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
"\n&#125;</pre></absolute-overflow-x></div></div></div></div><div class=\"pad\"><div class=\"text-center bg-info pad\"><div class=\"inline-block pad border border-dotted border-grey-5x bg-stable\"><div class=\"pad-sm text-sm text-grey-2x\">After testing offline storage providers, you may want to clear the memory that was created</div><button (click)=\"clearAllOffline()\">clear all offline memory</button></div></div></div>"
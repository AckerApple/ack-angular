import { Subscription } from "rxjs"
import { Directive, Input, Output, EventEmitter } from "@angular/core"
import {
  ActivatedRoute, Route, Router
} from "@angular/router"
import {
  currentRoute, RouteWatchReporter, getCurrentByActive, RouteInsight, getRouteByActive
} from "./RouteWatchReporter"
import {
  //NavigationStart,
  NavigationEnd
} from "@angular/router";

@Directive({
  selector: "route-reporter",
  exportAs:"RouteReporter"
}) export class RouteReporter{
  //deprecated
  @Input() onLoad: any

  @Output("onChange") stateChanger: EventEmitter<RouteWatchReporter> = new EventEmitter()
  @Output("beforeChange") beforeChanger = new EventEmitter()

  @Input() activated!: ActivatedRoute//ignored in
  @Output() activatedChange:EventEmitter<ActivatedRoute> = new EventEmitter()

  @Input() params:any//ignored in
  @Output() paramsChange:EventEmitter<any> = new EventEmitter()

  @Input() data:any//ignored in
  @Output() dataChange:EventEmitter<any> = new EventEmitter()

  @Input() query:any//ignored in
  @Output() queryChange:EventEmitter<any> = new EventEmitter()

  @Input() route!: Route//ignored in
  @Output() routeChange:EventEmitter<Route> = new EventEmitter()

  /* parent bindings */
    @Input() parentRoute?: Route//ignored in
    @Output() parentRouteChange:EventEmitter<Route> = new EventEmitter()

    @Input() parent?: ActivatedRoute//ignored in
    @Output() parentChange:EventEmitter<ActivatedRoute> = new EventEmitter()

    @Input() parentData:any//ignored in
    @Output() parentDataChange:EventEmitter<any> = new EventEmitter()
  /* end: parent bindings */


  // deprecated?
  @Input() current!: currentRoute
  @Input() state!: currentRoute//ignored in
  @Output() stateChange:EventEmitter<currentRoute> = new EventEmitter()

  $document
  $scope: any
  docCallbacks: any
  querySub!: Subscription

  constructor(
    public Router:Router,
    public RouteWatchReporter:RouteWatchReporter,
    public ActivatedRoute:ActivatedRoute
  ){
    this.$document = document
    this.apply()
  }

  ngOnInit(){
    this.docCallbacks = this.RouteWatchReporter.getDocumentCallbacks()
    
    this.RouteWatchReporter.router.events.subscribe(event => {
      //if(event.constructor == NavigationStart){}
      if(event.constructor === NavigationEnd){
        this.beforeChanger.emit( this.RouteWatchReporter )
        
        //allow one process to occur before reporting state has changed
        this.apply()
        //this.addRouteToHistory()
        Promise.resolve().then(()=>this.emit())
      }
    })
    
    if( this.ActivatedRoute ){
      this.ActivatedRoute.data.subscribe(data => this.dataChange.emit(this.data=data))
    }
    
    this.RouteWatchReporter.watchDocByCallbacks(this.$document, this.docCallbacks)
    this.apply()
    
    Promise.resolve().then(()=>{
      this.emit()
      
      this.querySub = this.RouteWatchReporter
      .activatedRoute.queryParams
      .subscribe( query=>this.queryChange.emit(query) )
    })
    
    if(this.onLoad){
      this.onLoad({
        state:this.RouteWatchReporter.current,
        params:this.RouteWatchReporter.current.params,
        current:this.RouteWatchReporter.current
      })
    }    
  }

  ngOnDestroy(){
    this.RouteWatchReporter.unwatchDocByCallbacks(this.$document, this.docCallbacks)

    if( this.querySub ){
      this.querySub.unsubscribe()
    }
  }
/*
  addRouteToHistory():void{
    if(!this.routeHistory){
      this.routeHistory=[]
    }

    const priorPage = this.routeHistory.length - 1
    if(this.Router.url === this.routeHistory[ priorPage ]){
      return
    }

    //remove old entries
    while(this.routeHistory.length > this.maxHistory){
      this.routeHistory.shift()
    }

    //oldest to recent BUT emailed as recent to oldest
    this.routeHistory.push(this.Router.url)
  }
*/
  apply(){
    const current = getCurrentByActive( this.ActivatedRoute )
    this.route = current.config
    this.current = current
    this.state = current
    this.activated = current.ActivatedRoute
    this.params = current.params || {}
    this.data = current.config?.data || {}
    this.attemptSetParentByCurrent(current)
    this.updateCrumbArray()
  }

  crumbArray: RouteInsight[] = []
  updateCrumbArray() {
    const activeRoute = getRouteByActive(this.ActivatedRoute)
    
    // reset the array
    this.crumbArray = []

    // add current if it is not the root
    if ( activeRoute.routeConfig ) {
        this.crumbArray.push({
            config: activeRoute.routeConfig,
            ActivatedRoute: activeRoute,
        })
    }

    this.populateCrumbArray(this.crumbArray, activeRoute)
  }

  populateCrumbArray(array: RouteInsight[], current: ActivatedRoute): void {
    const parent = current.parent
    if (parent?.routeConfig) {
      array.unshift({
          config: parent.routeConfig,
          ActivatedRoute: parent,
      })
      if (parent.parent?.routeConfig) {
          return this.populateCrumbArray(array, parent.parent);
      }
    }
    
    if ( current.routeConfig ) {
        this.populateCrumbArrayLikes(array, current.routeConfig);
    }
  }

  populateCrumbArrayLikes(array: RouteInsight[], current: Route) {
    const parent = this.getLikeParent(current);
    if (parent) {
      array.unshift({
          config: parent
      })
      if (parent.path?.length) {
          this.populateCrumbArrayLikes(array, parent);
      }
    }
  }

  attemptSetParentByCurrent(current: currentRoute) {
    const parent = this.getCrumbParentFor(current)

    if ( parent ) {
      this.parentRoute = parent.config
      this.parent = parent.ActivatedRoute
      this.parentData = parent.config.data
      return
    }

    delete this.parentRoute
    delete this.parent
    delete this.parentData
  }

  emit(){
    this.stateChanger.emit( this.RouteWatchReporter )
    const current = this.RouteWatchReporter.getCurrent()

    this.stateChange.emit( current )
    this.activatedChange.emit( current.ActivatedRoute )
    this.paramsChange.emit( current.params )
    if ( current.config ) {
      this.routeChange.emit( current.config )
      this.dataChange.emit( current.config.data )
    }

    const parent = current.parent

    if( parent ){
      const config = parent.config
      const ar = parent.ActivatedRoute

      this.parentChange.emit( ar )
      if ( config ) {
        this.parentRouteChange.emit( config )
        this.parentDataChange.emit( config.data )
      }
    }
  }

  goBackOrUp() {
    if ( this.RouteWatchReporter.$history.length ) {
      this.RouteWatchReporter.goHistoryBack()
      return
    }

    this.goUp()
  }

  goUp() {
    const target = this.crumbArray[ this.crumbArray.length - 1 ]
    const route = target.config
    
    if ( !route ) {
      return
    }

    this.Router.navigateByUrl( route.path as string )
  }

  goBackTo(name: string, params: any){
    this.RouteWatchReporter.goBackTo(name, params)
  }

  tryBack(name: string, params: any){
    this.RouteWatchReporter.tryBack(name, params)
  }
  
  getCrumbParentFor(current: currentRoute): RouteInsight | undefined {
    const parent = current.parent
    if( parent && parent.ActivatedRoute.routeConfig ){
      return {
        ActivatedRoute: parent.ActivatedRoute,
        config: parent.config
      }
    }

    if ( !current.config ) {
      return
    }

    const likeParent = this.getLikeParent(current.config)
    if ( likeParent ) {
      return {
        config: likeParent
      }
    }
  }

  getLikeParent(route: Route): Route | undefined {
    // try to find a related path at base
    const currentPathing = route.path?.split('/') || []
    let likeParent: Route | undefined
    currentPathing.pop() // remove the current
    while( currentPathing.length ) {
      const targetPath = currentPathing.join('/')
  
      // try to find parent by path matching
      likeParent = this.Router.config.find(route => route.path === targetPath)
      
      if ( likeParent ) {
        return likeParent
      }
      currentPathing.pop()
    }

    // look for a redirect parent but ensure it does not redirect to current route
    const redirectRoot = this.Router.config.find(x => x.path === '' && x.redirectTo && x.redirectTo !== route.path)
    if ( redirectRoot ) {
      return this.Router.config.find(route => route.path === redirectRoot.redirectTo)
    }
  }
}

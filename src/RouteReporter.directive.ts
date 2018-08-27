import { Directive, Input, Output, EventEmitter } from "@angular/core"
import {
  ActivatedRoute, Route
} from "@angular/router"
import {
  currentRoute, RouteWatchReporter
} from "./RouteWatchReporter"
import { NavigationStart, NavigationEnd } from "@angular/router";

@Directive({
  selector: "route-reporter"
}) export class RouteReporter{
  $document
  $scope

  static parameters = [[
    RouteWatchReporter
  ]]
  docCallbacks
  querySub

  @Output("onChange") stateChanger = new EventEmitter()
  @Output("beforeChange") beforeChanger = new EventEmitter()

  @Input() activated:ActivatedRoute//ignored in
  @Output() activatedChange:EventEmitter<ActivatedRoute> = new EventEmitter()

  @Input() params:any//ignored in
  @Output() paramsChange:EventEmitter<any> = new EventEmitter()

  @Input() data:any//ignored in
  @Output() dataChange:EventEmitter<any> = new EventEmitter()

  @Input() query:any//ignored in
  @Output() queryChange:EventEmitter<any> = new EventEmitter()

  @Input() route:Route//ignored in
  @Output() routeChange:EventEmitter<Route> = new EventEmitter()

  /* parent bindings */
    @Input() parentRoute:Route//ignored in
    @Output() parentRouteChange:EventEmitter<Route> = new EventEmitter()

    @Input() parent:ActivatedRoute//ignored in
    @Output() parentChange:EventEmitter<ActivatedRoute> = new EventEmitter()

    @Input() parentData:any//ignored in
    @Output() parentDataChange:EventEmitter<any> = new EventEmitter()
  /* end: parent bindings */

  //deprecated
  @Input() state:currentRoute//ignored in
  @Output() stateChange:EventEmitter<currentRoute> = new EventEmitter()

  //deprecated
  @Input() onLoad

  //deprecated
  @Input() ref//variable reference
  @Output() refChange = new EventEmitter()

  //deprecated
  @Input() stateName:string//ignored in
  @Output() stateNameChange:EventEmitter<string> = new EventEmitter()
  
  constructor(
    public RouteWatchReporter:RouteWatchReporter,
    public ActivatedRoute:ActivatedRoute
  ){
    this.$document = document
    this.docCallbacks = RouteWatchReporter.getDocumentCallbacks()
  }

  ngOnInit(){
    this.RouteWatchReporter.router.events.subscribe(event=>{
      //if(event.constructor == NavigationStart){}
      if(event.constructor == NavigationEnd){
        this.beforeChanger.emit( this.RouteWatchReporter )

        //allow one process to occur before reporting state has changed
        setTimeout(()=>this.emit(), 0)
      }
    })

    if( this.ActivatedRoute ){
      this.ActivatedRoute.data.subscribe(data=>
        this.dataChange.emit(this.data=data)
      )
    }

    this.RouteWatchReporter.watchDocByCallbacks(this.$document, this.docCallbacks)

    setTimeout(()=>{
      this.ref = this.RouteWatchReporter
      this.refChange.emit(this.ref)
      this.emit()

      if( this.queryChange.observers.length ){
        this.querySub = this.RouteWatchReporter
        .activatedRoute.queryParams
        .subscribe( query=>this.queryChange.emit(query) )
      }
    }, 0)

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

    if( this.queryChange.observers.length ){
      this.querySub.unsubscribe()
    }
  }

  emit(){
    this.stateChanger.emit( this.RouteWatchReporter )
     const current = this.RouteWatchReporter.getCurrent()
    
    if( !current )return

    this.route = current.config
    this.routeChange.emit( current.config )

    this.state = current
    this.stateChange.emit( current )

    this.activated = current.ActivatedRoute
    this.activatedChange.emit( current.ActivatedRoute )
    
    if( current.config ){
      const name = current.config.path
      this.stateNameChange.emit( this.stateName=name )
    }

    this.paramsChange.emit( this.params=current.params )
    this.dataChange.emit( this.data=current.config.data )
    
    /* parent bindings */
      this.parentRoute = current.parent.config
      this.parentRouteChange.emit( current.parent.config )
      
      this.parent = current.parent.ActivatedRoute
      this.parentChange.emit( current.parent.ActivatedRoute )
      
      this.parentData = current.parent.config.data
      this.parentDataChange.emit( current.parent.config.data )
    /* end */
  }

  goBackTo(name, params){
    this.RouteWatchReporter.goBackTo(name, params)
  }

  tryBack(name, params){
    this.RouteWatchReporter.tryBack(name, params)
  }
}

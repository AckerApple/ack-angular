import { Directive, Input, Output, EventEmitter } from "@angular/core"
import { Route } from "@angular/router"
import { RouteWatchReporter } from "./RouteWatchReporter"
import { NavigationStart, NavigationEnd } from '@angular/router';

@Directive({
  selector: 'route-reporter'
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

  @Input() ref//variable reference
  @Output() refChange = new EventEmitter()

  @Input() stateName:string//ignored in
  @Output() stateNameChange:EventEmitter<string> = new EventEmitter()

  @Input() params:any//ignored in
  @Output() paramsChange:EventEmitter<any> = new EventEmitter()

  @Input() data:any//ignored in
  @Output() dataChange:EventEmitter<any> = new EventEmitter()

  @Input() query:any//ignored in
  @Output() queryChange:EventEmitter<any> = new EventEmitter()

  @Input() route:Route//ignored in
  @Output() routeChange:EventEmitter<Route> = new EventEmitter()

  //deprecate
  @Input() onLoad
  @Input() state:any//ignored in
  @Output() stateChange:EventEmitter<any> = new EventEmitter()
  
  constructor(public RouteWatchReporter:RouteWatchReporter){
    this.$document = document
    this.docCallbacks = RouteWatchReporter.getDocumentCallbacks()

    RouteWatchReporter.router.events.subscribe(event=>{
      //if(event.constructor == NavigationStart){}
      if(event.constructor == NavigationEnd){
        this.beforeChanger.emit( this.RouteWatchReporter )

        //allow one process to occur before reporting state has changed
        setTimeout(()=>this.emit(), 0)
      }
    })

    RouteWatchReporter.watchDocByCallbacks(this.$document, this.docCallbacks)
  }

  ngOnInit(){
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
 
    if( this.RouteWatchReporter.current ){
      this.routeChange.emit( this.RouteWatchReporter.current.config )
      this.stateChange.emit( this.RouteWatchReporter.current )
      
      if( this.RouteWatchReporter.current.config ){
        const name = this.RouteWatchReporter.current.config.name || this.RouteWatchReporter.current.config.path
        this.stateNameChange.emit( this.stateName=name )
      }

      this.dataChange.emit( this.data=this.RouteWatchReporter.current.config.data )
      this.paramsChange.emit( this.params=this.RouteWatchReporter.current.params )
    }
  }

  goBackTo(name, params){
    this.RouteWatchReporter.goBackTo(name, params)
  }

  tryBack(name, params){
    this.RouteWatchReporter.tryBack(name, params)
  }
}

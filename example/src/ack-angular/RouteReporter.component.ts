//import { TransitionService } from "ui-router-ng2";
import { Directive, Input, Output, EventEmitter } from "@angular/core"
import { RouteWatchReporter } from "./RouteWatchReporter"
import { NavigationStart, NavigationEnd } from '@angular/router';

@Directive({
  //inputs:['ref'],
  selector: 'route-reporter'
}) export class RouteReporter{
  $document
  $scope
  static parameters = [[
    RouteWatchReporter
  ]]
  docCallbacks
  //isBackButton
  //isNotBackButton
  //mouseover

  @Output("onChange") stateChanger = new EventEmitter()
  @Output("beforeChange") beforeChanger = new EventEmitter()
  @Input() onLoad
  @Input() ref//variable reference
  @Output() refChange = new EventEmitter()

  @Input() stateName
  @Output() stateNameChange = new EventEmitter()

  @Input() params
  @Output() paramsChange = new EventEmitter()

  @Input() state
  @Output() stateChange = new EventEmitter()
  
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

  ngOnDestroy(){
    this.RouteWatchReporter.unwatchDocByCallbacks(this.$document, this.docCallbacks)
  }

  emit(){
    this.stateChanger.emit( this.RouteWatchReporter )
 
    if( this.RouteWatchReporter.current ){
      this.stateChange.emit( this.RouteWatchReporter.current )
      
      if( this.RouteWatchReporter.current.config ){
        const name = this.RouteWatchReporter.current.config.name || this.RouteWatchReporter.current.config.path
        this.stateNameChange.emit( this.stateName=name )
      }

      this.paramsChange.emit( this.params=this.RouteWatchReporter.current.params )
    }
  }

  ngOnInit(){
    setTimeout(()=>{
      this.ref = this.RouteWatchReporter
      this.refChange.emit(this.ref)
      this.emit()
    }, 0)

    if(this.onLoad){
      this.onLoad({
        state:this.RouteWatchReporter.current,
        params:this.RouteWatchReporter.current.params,
        current:this.RouteWatchReporter.current
      })
    }

  }

  goBackTo(name, params){
    this.RouteWatchReporter.goBackTo(name, params)
  }

  tryBack(name, params){
    this.RouteWatchReporter.tryBack(name, params)
  }
}
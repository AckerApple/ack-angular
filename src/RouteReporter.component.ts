//import { TransitionService } from "ui-router-ng2";
import { Directive, Input, Output, EventEmitter } from "@angular/core"
import { RouteWatchReporter } from "./RouteWatchReporter.class"
import { NavigationStart, NavigationEnd } from '@angular/router';

@Directive({
  //inputs:['ref'],
  selector: 'route-reporter'
}) export class RouteReporter{
  public $document
  public $scope
  static parameters = [[
    RouteWatchReporter
  ]]
  public docCallbacks
  //public isBackButton
  //public isNotBackButton
  //public mouseover

  @Output("onChange") public stateChanger = new EventEmitter()
  @Output("beforeChange") public beforeChanger = new EventEmitter()
  @Input() public onLoad
  @Input() public ref//variable reference
  @Output() public refChange = new EventEmitter()

  constructor(public RouteWatchReporter:RouteWatchReporter){
    this.$document = document
    this.docCallbacks = RouteWatchReporter.getDocumentCallbacks()
    
    /*TransitionService.onStart({to:'*'}, transition=>{
      this.beforeChanger.emit( this.RouteWatchReporter )
    })

    TransitionService.onSuccess({to:'*'}, transition=>{
      //ensure smallest gap in digest occurs for things like animation swapping
      setTimeout(()=>this.stateChanger.emit( this.RouteWatchReporter ), 0)
    })*/

    RouteWatchReporter.router.events.subscribe(event=>{
      if(event.constructor == NavigationStart){
        this.beforeChanger.emit( this.RouteWatchReporter )
      }

      if(event.constructor == NavigationEnd){
        this.stateChanger.emit( this.RouteWatchReporter )
      }
    })

    RouteWatchReporter.watchDocByCallbacks(this.$document, this.docCallbacks)
    
    this.ref = this.RouteWatchReporter
  }

  ngOnDestroy(){
    this.RouteWatchReporter.unwatchDocByCallbacks(this.$document, this.docCallbacks)
  }

  ngOnInit(){
    setTimeout(()=>this.refChange.emit(this.ref), 0)

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
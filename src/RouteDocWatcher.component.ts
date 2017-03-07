import { TransitionService } from "ui-router-ng2";
import { Component, Input, Output, EventEmitter } from "@angular/core"
import { RouteWatcher } from "./RouteWatcher.class"

@Component({
  //inputs:['ref'],
  selector: 'route-doc-watcher',
  template:''
}) export class RouteDocWatcher{
  public $document
  public $scope
  //public RouteWatcher : RouteWatcher
  static parameters = [[RouteWatcher],[TransitionService]]
  public docCallbacks
  //public isBackButton
  //public isNotBackButton
  //public mouseover

  @Output("onChange") stateChanger = new EventEmitter()
  @Output("beforeChange") beforeChanger = new EventEmitter()
  @Input() public onLoad
  @Input() public ref//variable reference
  @Output() refChange = new EventEmitter()

  constructor(public RouteWatcher, public transitionService){
    this.$document = document

    this.docCallbacks = RouteWatcher.getDocumentCallbacks()
    
    transitionService.onStart({to:'*'}, transition=>{
      this.beforeChanger.emit( this.RouteWatcher )
    })

    transitionService.onSuccess({to:'*'}, transition=>{
      //ensure smallest gap in digest occurs for things like animation swapping
      setTimeout(()=>this.stateChanger.emit( this.RouteWatcher ), 0)
    })

    RouteWatcher.watchDocByCallbacks(this.$document, this.docCallbacks)
  }

  ngOnDestroy(){
    this.RouteWatcher.unwatchDocByCallbacks(this.$document, this.docCallbacks)
  }

  ngOnInit(){
    this.ref = this.RouteWatcher
    setTimeout(()=>this.refChange.emit(this.ref), 0)

    if(this.onLoad){
      this.onLoad({
        state:this.RouteWatcher.$state.current,
        params:this.RouteWatcher.$state.params,
        current:this.RouteWatcher.$state.current
      })
    }
  }

  goBackTo(name, params){
    this.RouteWatcher.goBackTo(name, params)
  }

  tryBack(name, params){
    this.RouteWatcher.tryBack(name, params)
  }
}
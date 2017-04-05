import { TransitionService } from "ui-router-ng2";
import { Directive, Input, Output, EventEmitter } from "@angular/core"
import { UiRouteWatchReporter } from "./UiRouteWatchReporter"

@Directive({
  //inputs:['ref'],
  selector: 'ui-route-reporter'
}) export class UiRouteReporter{
  public $document
  public $scope
  static parameters = [[UiRouteWatchReporter],[TransitionService]]
  public docCallbacks
  //public isBackButton
  //public isNotBackButton
  //public mouseover

  @Output("onChange") public stateChanger = new EventEmitter()
  @Output("beforeChange") public beforeChanger = new EventEmitter()
  @Input() public onLoad
  @Input() public ref//variable reference
  @Output() public refChange = new EventEmitter()

  constructor(public UiRouteWatchReporter:UiRouteWatchReporter, public TransitionService:TransitionService){
    this.$document = document

    this.docCallbacks = UiRouteWatchReporter.getDocumentCallbacks()
    
    TransitionService.onStart({to:'*'}, transition=>{
      this.beforeChanger.emit( this.UiRouteWatchReporter )
    })

    TransitionService.onSuccess({to:'*'}, transition=>{
      //ensure smallest gap in digest occurs for things like animation swapping
      setTimeout(()=>this.stateChanger.emit( this.UiRouteWatchReporter ), 0)
    })

    UiRouteWatchReporter.watchDocByCallbacks(this.$document, this.docCallbacks)
  }

  ngOnDestroy(){
    this.UiRouteWatchReporter.unwatchDocByCallbacks(this.$document, this.docCallbacks)
  }

  ngOnInit(){
    this.ref = this.UiRouteWatchReporter
    setTimeout(()=>this.refChange.emit(this.ref), 0)

    if(this.onLoad){
      this.onLoad({
        state:this.UiRouteWatchReporter.$state.current,
        params:this.UiRouteWatchReporter.$state.params,
        current:this.UiRouteWatchReporter.$state.current
      })
    }
  }

  goBackTo(name, params){
    this.UiRouteWatchReporter.goBackTo(name, params)
  }

  tryBack(name, params){
    this.UiRouteWatchReporter.tryBack(name, params)
  }
}
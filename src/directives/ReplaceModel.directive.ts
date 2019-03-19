import {
  Input, Output,
  EventEmitter, Directive
} from "@angular/core"

@Directive({
  selector: '[replaceModel]'
}) export class ReplaceModel{
  @Input() replaceModel:string
  @Output() replaceModelChange:EventEmitter<string> = new EventEmitter()
  @Input() replaceExpression:string//regular expression

  ngOnChanges( changes:any ){
    const isString = changes.replaceModel && this.replaceModel && this.replaceModel.constructor === String
    if( isString ){
      Promise.resolve().then(()=>this.run())
    }
  }

  run(){
    const rx = new RegExp(this.replaceExpression, 'gi')
    const oldModel = this.replaceModel
    const newModel = this.replaceModel.replace(rx, '')

    //no change, nothing to do
    if( oldModel===newModel ){
      return
    }

    this.replaceModel = newModel
    this.replaceModelChange.emit( this.replaceModel )
  }
}

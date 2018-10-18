import {
  Directive, Input, EventEmitter, Output
} from "@angular/core"

@Directive({
  selector: '[var]',
  exportAs: 'var'
}) export class VarDirective {
  @Input() var:any;
  @Output() changed:EventEmitter<any> = new EventEmitter()

  ngOnChanges( changes:any ){
    if( changes.var ){
      setTimeout(()=>this.changed.emit( this.var ), 0)
    }
  }
}
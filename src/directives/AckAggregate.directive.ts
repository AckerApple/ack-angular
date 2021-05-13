import { EventEmitter, Output, Input, Directive } from "@angular/core"

@Directive({
  selector:'ack-aggregate'
}) export class AckAggregate {
  @Input() type!: 'sum'|string
  @Input() keys!: string[]//path to variable

  @Input() output!: number
  @Output() outputChange:EventEmitter<number> = new EventEmitter()
}
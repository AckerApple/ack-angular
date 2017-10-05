import { Component,Input } from "@angular/core"

import { string as absoluteOverflowX } from "./templates/absolute-overflow-x.pug"
@Component({
  selector:'absolute-overflow-x',
  template:absoluteOverflowX
}) export class AbsoluteOverflowX{
  elementHeightModel
  @Input() scrollBars
  @Input() wrapClass
  @Input() active = true
}

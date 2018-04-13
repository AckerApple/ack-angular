import { ElementRef, Component } from "@angular/core"
import { AckApp } from "../providers/AckApp.provider"

import { string } from "./templates/ack-fixed-element-stage.pug"

@Component({
  selector:'ack-fixed-element-stage',
  template:string
}) export class AckFixedElementStage{
  constructor(public AckApp:AckApp, public ElementRef:ElementRef){
    AckApp.fixedElementStage = ElementRef
  }
}
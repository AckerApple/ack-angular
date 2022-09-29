import { ElementRef, Component } from "@angular/core"
import { AckApp } from "../providers/AckApp.provider"

@Component({
  selector:'ack-fixed-element-stage',
  templateUrl: './ack-fixed-element-stage.html'
}) export class AckFixedElementStage{
  constructor(
    public AckApp:AckApp,
    public ElementRef:ElementRef
  ){
    AckApp.fixedElementStage = ElementRef
  }
}
import { Component } from "@angular/core"
import { animations } from "ack-angular-fx"
// import * as packJson from "../../package.json"
import { getServerTime } from "./functions"
import { menu } from "./states.object"
const packJson = require("../../package.json")

@Component({
  selector: 'ack-app-stage',
  templateUrl: './ack-app-stage.html',
  animations
}) export class AckAppStage {
  inFx: any
  panelAnim = 'slideInRight'
  version = (packJson as any).version
  screenWidthModel:number
  stateName:string
  isSwaping:boolean
  isBackMode:boolean
  fx: any
  menu = menu

  ngAfterViewInit(){
    console.log('Total Wire Time:', Date.now()-window['strapTime']+'ms')
    if( window['startAckTime'] ){
      console.log('Overall Load Time:', Date.now()-window['startAckTime']+'ms', '@', getServerTime())
    }
  }
}

import { Component } from "@angular/core"
import { fxArray } from "ack-angular-fx"
import * as packJson from "../../package.json"
import { getServerTime } from "./functions"
import { menu } from "./states.object"
import { string } from './templates/ack-app-stage.pug'

@Component({
  selector: 'ack-app-stage'
  ,template: string
  ,animations:fxArray
}) export class AckAppStage {
  panelAnim = 'slideInRight'
  version = packJson['version']
  screenWidthModel:number
  stateName:string
  isSwaping:boolean
  isBackMode:boolean
  
  menu = menu

  ngAfterViewInit(){
    console.log('Total Wire Time:', Date.now()-window['strapTime']+'ms')
    if( window['startAckTime'] ){
      console.log('Overall Load Time:', Date.now()-window['startAckTime']+'ms', '@', getServerTime())
    }
  }
}

import { Component } from "@angular/core"
import { fxArray } from "ack-angular-fx"
import * as packJson from "../../package.json"
import { getServerTime } from "./functions"
import {string as ackAppStageTemplate} from './templates/ack-app-stage.pug'

@Component({
  selector: 'ack-app-stage'
  ,template: ackAppStageTemplate
  ,animations:fxArray
}) export class AppComponent {
  panelAnim = 'slideInRight'
  version = packJson['version']
  screenWidthModel
  routeReporter
  stateName
  isSwaping
  isBackMode

  ngAfterViewInit(){
    console.log('Total Wire Time:', Date.now()-window['strapTime']+'ms')
    if( window['startAckTime'] ){
      console.log('Overall Load Time:', Date.now()-window['startAckTime']+'ms', '@', getServerTime())
    }
  }
}

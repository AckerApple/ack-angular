import { getServerTime } from "./functions"
import {
  PageScrollService, PageScrollInstance
} from "ngx-page-scroll"
import { Component } from "@angular/core";
import { fxArray } from "ack-angular-fx"
import { array as arrayOfObjects } from "./arrayOfObjects"
import {string as componentsExamples} from "./templates/components-examples.pug"

export interface selected{
  letter:string
  number:number
}

@Component({
  selector: "components-examples"
  ,template: componentsExamples
  ,animations:fxArray
}) export class ComponentsExamples {
  initArray = [{value:0},{value:1},{value:2}]
  views:any = {}
  absoluteOverflowX
  elementWidthModel
  elementHeightModel
  htmlWidthModel
  htmlHeightModel
  screenScrollModelY
  screenScrollHeightDiff
  screenWidthModel
  screenHeightModel
  elementSizeModel
  viewShakeOn
  viewSelectOn
  viewScreenHeightModel
  viewScreenWidthModel
  statusOnlineModel
  statusOfflineModel
  screenScrollCount = 0
  escapeCountKey
  error
  contentArray = []
  modalBackgroundColor = "rgba(255,255,255,0.95)"
  modalWrapStyle
  ackOptionArray = []
  ackOptionArrayModal = [{key:"b"}]
  pageAt = 2
  arrayOfObjects = arrayOfObjects
  selectedArray:selected[] = [
    arrayOfObjects[2],
    arrayOfObjects[4],
    arrayOfObjects[6],
    arrayOfObjects[8] 
  ]
  absoluteOverflowXActive = true//control the absolute-overflow-x example

  constructor(public PageScrollService:PageScrollService){}
  
  causeError(){
    this.error = new Error( "An intended error was caused @ "+getServerTime() )
  }

  scrollToModuleImport(){
    setTimeout(()=>{
      const pageScrollInstance = PageScrollInstance.simpleInstance(document, "#Import AckModule");
      this.PageScrollService.start(pageScrollInstance);
    }, 600)
  }

  setModalWrapStyle(v){
    try{
      this.modalWrapStyle = JSON.parse(v)
    }catch(e){}
  }
}

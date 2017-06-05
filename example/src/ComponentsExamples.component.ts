import { getServerTime } from "./functions"
import { PageScrollService, PageScrollInstance } from 'ng2-page-scroll'
import { Component } from '@angular/core';
import { fxArray } from './prefx'

import {string as componentsExamples} from './templates/components-examples.pug'
@Component({
  selector: 'components-examples'
  ,template: componentsExamples
  ,animations:fxArray
}) export class ComponentsExamples {
  public error
  public contentArray = []
  public modalBackgroundColor = 'rgba(255,255,255,0.95)'
  public modalWrapStyle
  //public ackOptionArrayModal = ['blue']

  constructor(public PageScrollService:PageScrollService){}
  
  causeError(){
    this.error = new Error( 'An intended error was caused @ '+getServerTime() )
  }

  scrollToModuleImport(){
    setTimeout(()=>{
      const pageScrollInstance = PageScrollInstance.simpleInstance(document, '#Import AckModule');
      this.PageScrollService.start(pageScrollInstance);
    }, 600)
  }

  setModalWrapStyle(v){
    try{
      this.modalWrapStyle = JSON.parse(v)
    }catch(e){}
  }
}

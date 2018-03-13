import { Component } from '@angular/core';
import { fxArray } from 'ack-angular-fx'

import {
  PageScrollService,
  PageScrollInstance
} from 'ng2-page-scroll'

import {string as pipesExamples} from './templates/pipes-examples.pug'
@Component({
  selector: 'pipes-examples'
  ,template: pipesExamples
  ,animations:fxArray
}) export class PipesExamples {
  views:any = {}
  simpleArray = ['a','b','c']

  constructor(public PageScrollService:PageScrollService){}

  scrollToModuleImport(){
    setTimeout(()=>{
      const pageScrollInstance = PageScrollInstance.simpleInstance(document, '#Import AckModule');
      this.PageScrollService.start(pageScrollInstance);
    }, 600)
  }
}

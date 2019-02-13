import { Component } from "@angular/core";
import { animations } from "ack-angular-fx"

import {
  PageScrollService,
  PageScrollInstance
} from "ngx-page-scroll"

import {string as pipesExamples} from "./templates/pipes-examples.pug"
@Component({
  selector: "pipes-examples"
  ,template: pipesExamples
  ,animations:animations
}) export class PipesExamples {
  views:any = {}
  simpleArray = ["a","b","c"]

  constructor(public PageScrollService:PageScrollService){}

  scrollToModuleImport(){
    setTimeout(()=>{
      const pageScrollInstance = PageScrollInstance.simpleInstance(document, "#Import AckModule");
      this.PageScrollService.start(pageScrollInstance);
    }, 600)
  }
}

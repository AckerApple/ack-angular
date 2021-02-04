import { Component } from "@angular/core";
import { animations } from "ack-angular-fx"

import {
  PageScrollService
  //,PageScrollInstance
} from "ngx-page-scroll-core"

@Component({
  selector: "pipes-examples",
  templateUrl: './templates/pipes-examples.html',
  animations: animations,
}) export class PipesExamples {
  views:any = {}
  simpleArray = ["a","b","c"]

  constructor(public PageScrollService:PageScrollService){}

  scrollToModuleImport(){
    setTimeout(()=>{
      this.PageScrollService.scroll({document:document, scrollTarget:"#Import AckModule"})
    }, 600)
  }
}

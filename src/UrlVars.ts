import { Injectable } from '@angular/core'
import { WindowService } from "./WindowService"

@Injectable() export class UrlVars{
  vars

  constructor(public WindowService:WindowService){
    this.vars = this.parse()
  }

  parse(){
    var regex = /[?&]([^=#]+)=([^&#]*)/g,
        url = this.WindowService.nativeWindow.location.href,
        params = {},
        match;

    while(match = regex.exec(url)) {
      params[match[1]] = match[2];
    }
    return params
  }

  /** case in-sensative variable fetch */
  get(name, param?){
    if(!name)return

    if(this.vars && this.vars[name]!=null)//try exact match first
      return this.vars[name]

    //case insensative search
    var lcase = name.toLowerCase()
    for(var key in this.vars){
      if(lcase == key.toLowerCase())
        return this.vars[key]
    }

    return param
  }
}


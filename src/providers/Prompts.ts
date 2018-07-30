import { Injectable, EventEmitter } from '@angular/core';

export interface button{
  text: string
  //role?: "cancel"//when "cancel" then auto configs to close prompt
  handler?: () => any
}

export interface promptOptions{
  title?   : string
  buttons? : button[]//not yet used
  emitter? : EventEmitter<boolean>
  message? : string
  type?    : "confirm"|"alert"|"string"
}

export interface prompt extends promptOptions{
  type:"confirm"|"alert"|"string"
  message:string
  emitter:EventEmitter<boolean>
}

/** Http util with offline config for request failures */
@Injectable() export class Prompts{
  prompts:prompt[] = []
 
  remove(prompt:prompt){
    for(let x=this.prompts.length-1; x >= 0; --x){
      if(this.prompts[x] == prompt){
        this.prompts.splice(x, 1)
        return
      }
    }
  }

  issuePrompt(prompt:prompt){
    this.prompts.push(prompt)
    prompt.emitter.subscribe(result=>this.remove(prompt))
    return prompt.emitter
  }

  alert(
    message:string,
    options:promptOptions=<promptOptions>{}
  ):EventEmitter<boolean>{
    options.emitter = new EventEmitter()
    options.type = "alert"
    options.message = message
    return this.issuePrompt( <prompt>options )
  }

  confirm(
    message:string,
    options:promptOptions=<promptOptions>{}
  ):EventEmitter<boolean>{
    options.emitter = new EventEmitter()
    options.type = "confirm"
    options.message = message
    return this.issuePrompt( <prompt>options )
  }
}
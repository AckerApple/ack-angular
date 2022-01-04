import { Subscription } from "rxjs"
import { Injectable } from "@angular/core"
import {
  Router,
  NavigationEnd
} from "@angular/router";

@Injectable() export class RouteHistory{
  routeHistory: string[] = []
  maxHistory: number = 10
  historyIndex: number = 0
  subs: Subscription[] = []
  forward?: string//url
  back?: string//url

  constructor(
    public Router:Router
  ){
    this.monitor()
  }

  monitor(){
    this.subs.push(
      this.Router.events.subscribe(event=>{
        if(event.constructor === NavigationEnd){
          this.addRouteToHistory()
        }
      })
    )
  }

  ngOnDestroy(){
    this.subs.forEach(sub=>sub.unsubscribe())
  }

  addRouteToHistory():void{
    const priorPage = this.historyIndex + 1
    const nextPage = this.historyIndex - 1
    const matchesBack = this.routeHistory.length>=priorPage && this.Router.url === this.routeHistory[ priorPage ]
    const matchesNext = this.routeHistory.length>=nextPage && this.Router.url === this.routeHistory[ nextPage ]
    const matchesCurrent = this.Router.url === this.routeHistory[ this.historyIndex ]

    if( matchesNext ){
      --this.historyIndex
    }

    if( matchesBack ){
      ++this.historyIndex
    }

    if(matchesNext || matchesCurrent || matchesBack){
      this.applyNav()
      return
    }

    //remove old entries
    while(this.routeHistory.length > this.maxHistory){
      //this.routeHistory.shift()
      this.routeHistory.pop()
    }

    //this.routeHistory.push(this.Router.url)
    this.routeHistory.splice(this.historyIndex, 0, this.Router.url)
    this.applyNav()
  }

  applyNav(){
    const posAvail = this.historyIndex < this.routeHistory.length-1

    if( posAvail ){
      this.back = this.routeHistory[ this.historyIndex+1 ]
    } else if (this.routeHistory.length) {
        const newBack = this.routeHistory[this.routeHistory.length - 1].split("/");
        newBack.pop();
        this.back = newBack.join("/");
        ++this.historyIndex;
    }else{
      delete this.back
    }

    if( this.historyIndex>0 ){
      this.forward = this.routeHistory[ this.historyIndex-1]
    }else{
      delete this.forward
    }
  }

  goBack(){
    if( this.historyIndex===this.routeHistory.length-1 )return
    //++this.historyIndex
    const rh = this.routeHistory[ this.historyIndex+1 ]
    this.Router.navigate([rh])
  }

  goForward(){
    if( this.historyIndex===0 )return
    //--this.historyIndex
    const rh = this.routeHistory[ this.historyIndex-1 ]
    this.Router.navigate([rh])
  }
}

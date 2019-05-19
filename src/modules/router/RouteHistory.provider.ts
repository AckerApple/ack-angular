import { Subscription } from "rxjs/internal/Subscription"
import { Injectable } from "@angular/core"
import {
  Router,
  NavigationEnd
} from "@angular/router";

@Injectable() export class RouteHistory{
  routeHistory:string[] = []
  maxHistory:number = 10
  historyIndex:number = 0
  subs:Subscription[] = []

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
    const priorPage = this.routeHistory.length - 1
    const matchesLast = this.Router.url === this.routeHistory[ priorPage ]
    const matchesCurrent = this.Router.url === this.routeHistory[ this.historyIndex ]
    if(matchesCurrent || matchesLast){
      return
    }

    //remove old entries
    while(this.routeHistory.length > this.maxHistory){
      //this.routeHistory.shift()
      this.routeHistory.pop()
    }

    //this.routeHistory.push(this.Router.url)
    this.routeHistory.splice(this.historyIndex, 0, this.Router.url)
console.log('this.routeHistory', this.historyIndex, this.routeHistory)
  }

  goBack(){
    if( this.historyIndex===this.routeHistory.length-1 )return
    ++this.historyIndex
    const rh = this.routeHistory[ this.historyIndex ]
    this.Router.navigate([rh])
  }

  goForward(){
    if( this.historyIndex===0 )return
    --this.historyIndex
    const rh = this.routeHistory[ this.historyIndex ]
    this.Router.navigate([rh])
  }
}

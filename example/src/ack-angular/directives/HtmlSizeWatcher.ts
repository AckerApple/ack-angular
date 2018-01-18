import { EventEmitter } from "@angular/core"

export class HtmlSizeWatcher{
  private onResize:()=>any

  constructor(){
    this.onResize = ()=>{
      if( this.hasChanged() ){
        this.setModel()
      }
    }

    window.addEventListener('resize', this.onResize)
    window.addEventListener('scroll', this.onResize)
    setTimeout(()=>this.onResize(), 0)
  }

  ngOnInit(){
    //content may grow
    setTimeout(()=>this.onResize(), 200)//two way bind often needs init override
  }

  //meant to be overridden
  hasChanged():boolean{
    return true
  }

  //meant to be overridden
  setModel(){}

  ngOnDestroy(){
    window.removeEventListener('scroll', this.onResize)
    window.removeEventListener('resize', this.onResize)
  }
}

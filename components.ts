import { Directive, Input, Output, EventEmitter } from "@angular/core"

@Directive({
  //inputs:['screen-height-model'],
  selector: '[screenWidthModel]'
}) export class ScreenWidthModel{
  public window
  public onResize

  @Input() public screenWidthModel
  @Output() public screenWidthModelChange = new EventEmitter()

  constructor(){
    this.window = window

    this.onResize = function(){
      if(this.screenWidthModel !== window.innerWidth){
        this.screenWidthModel = window.innerWidth
        this.screenWidthModelChange.emit(this.screenWidthModel)
      }
    }.bind(this)

    window.addEventListener('resize', this.onResize)
  }

  ngAfterViewInit(){
    this.screenWidthModel = this.window.innerWidth
    this.screenWidthModelChange.emit(this.screenWidthModel)
  }

  ngOnDestroy(){
    window.removeEventListener(this.onResize)
  }
}

@Directive({
  //inputs:['screen-height-model'],
  selector: '[screenHeightModel]'
}) export class ScreenHeightModel{
  public window
  public onResize

  @Input() public screenHeightModel
  @Output() public screenHeightModelChange = new EventEmitter()

  constructor(){
    this.window = window

    this.onResize = function(){
      if(this.screenHeightModel !== window.innerHeight){
        this.screenHeightModel = window.innerHeight
        this.screenHeightModelChange.emit(this.screenHeightModel)
      }
    }.bind(this)

    window.addEventListener('resize', this.onResize)
  }

  ngAfterViewInit(){
    this.screenHeightModel = this.window.innerHeight
    this.screenHeightModelChange.emit(this.screenHeightModel)
  }

  ngOnDestroy(){
    window.removeEventListener(this.onResize)
  }
}

export const declarations = [
  ScreenHeightModel,
  ScreenWidthModel
]
import {
  Component,
  Directive,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from "@angular/core"

import {string as readerHeaderBody} from "./templates/reader-header-body.pug"

@Component({
  selector:'reader-header-body',
  template:readerHeaderBody
}) export class ReaderHeaderBody {}

@Directive({
  selector:'reader-header'
}) export class ReaderHeader {}


@Directive({
  selector:"reader-body"
  //,parameters:[[ElementRef]]
}) export class ReaderBody {
  static parameters = [[ElementRef]]

  constructor(public el: ElementRef){
    el.nativeElement.style.height = '100%';
    el.nativeElement.style.display = 'block';
  }
}

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
  selector: '[screenScrollModelY]'
}) export class ScreenScrollModelY{
  public window
  public onScroll

  @Input() public screenScrollModelY
  @Output() public screenScrollModelYChange = new EventEmitter()

  constructor(){
    this.onScroll = function(){
      this.screenScrollModelY = window['pageYOffset']
      this.screenScrollModelYChange.emit(this.screenScrollModelY)
    }.bind(this)
  }
  
  ngOnInit(){
    this.onScroll()
    window['addEventListener']("scroll", this.onScroll)
  }

  ngOnDestroy(){
    window['removeEventListener']("scroll", this.onScroll)
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
  ScreenScrollModelY,
  ScreenHeightModel,
  ScreenWidthModel,
  ReaderHeaderBody,
  ReaderHeader,
  ReaderBody
]
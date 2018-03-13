import { ElementRef, Component } from '@angular/core';

import {string as jjsWoz} from './templates/jjs-woz.pug'
@Component({
  selector: 'jjs-woz'
  ,template: jjsWoz
}) export class JjsWoz {
  constructor(public ElementRef:ElementRef){}

  ngOnInit(){
    this.ElementRef.nativeElement.getElementsByTagName('audio')[0].play()
  }
}

import { Component } from '@angular/core';
import { string } from './templates/animation-examples.pug'
import { fxArray } from './prefx'
import * as ackFx from 'ack-angular-fx'

@Component({
  selector: 'animation-examples'
  ,template: string
  ,animations: fxArray
  //,animations:[]
}) export class AnimationExamples {
  toggleNgForFx
  supportExampleAddItem
  list = ['abc','defg','hij','klm','opq','rst','uvx','yz']
  delayArray = ackFx.delayArray
}

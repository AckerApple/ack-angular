import { Component } from '@angular/core';
import { string } from './templates/animation-examples.pug'
import { fxArray } from 'ack-angular-fx'

@Component({
  template: string,
  animations: fxArray
}) export class AnimationExamples {
  toggleNgForFx
  supportExampleAddItem
  list = ['abc','defg','hij','klm','opq','rst','uvx','yz']
}

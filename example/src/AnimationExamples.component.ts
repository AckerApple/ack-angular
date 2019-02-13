import { Component } from '@angular/core';
import { string } from './templates/animation-examples.pug'
import { animations } from 'ack-angular-fx'

@Component({
  template: string,
  animations: animations
}) export class AnimationExamples {
  toggleNgForFx
  supportExampleAddItem
  list = ['abc','defg','hij','klm','opq','rst','uvx','yz']
}

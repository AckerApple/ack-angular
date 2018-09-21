import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, NgModule } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AckModule } from '../AckModule'
import { AckModal } from './AckModal.component'

@Component({
  selector: 'container',
  template: '<ack-modal></ack-modal>'
})
export class ContainerComponent {
  AckModal:AckModal
}

@NgModule({
  imports: [ BrowserAnimationsModule, AckModule ],
  declarations: [ ContainerComponent ]
}) export class AppModule {}

describe('ack-modal', ()=>{
  let fixture: ComponentFixture<ContainerComponent>;
  let component:any
  
  beforeEach(done=>{
    TestBed.configureTestingModule({imports: [AppModule]})

    TestBed.compileComponents()
    .then(()=>{
      fixture = TestBed.createComponent(ContainerComponent)
      fixture.detectChanges()
      component = fixture.componentInstance
    })
    .then( ()=>new Promise((res,rej)=>setTimeout(()=>res(), 0)) )//tick for process
    .then(done).catch(done.fail)
  })

  it('inits', ()=>{
    expect(fixture).not.toBeNull()
    expect(component).not.toBeNull()
    //expect(component.AckModal).not.toBeNull()
  })
})
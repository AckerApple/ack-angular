import { Component, NgModule } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AckModule } from '../AckModule';

@Component({
  selector: 'container',
  template: 'nothing'
  //template: '<ack-modal [(ref)]="ackModal"></ack-modal>'
})
export class ContainerComponent {}

@NgModule({
  imports: [ AckModule ],
  declarations: [ ContainerComponent ]
}) export class AppModule {
  //ackModal
}

describe('ack-modal', () => {
  let fixture: ComponentFixture<ContainerComponent>;
  let component:any
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({imports: [AppModule]})

    TestBed.compileComponents()
    .then(()=>{
      fixture = TestBed.createComponent(ContainerComponent)
      fixture.detectChanges()
      component = fixture.componentInstance
    })
  }));

  it('inits', ()=>{
    expect(fixture).not.toBeNull()
    expect(component).not.toBeNull()

    //console.log('x', component.ackModal)
    //expect(component.ackModal).not.toBeNull()
  })

  it('inits2', ()=>{
    expect(fixture).not.toBeNull()
    expect(component).not.toBeNull()

    //console.log('x', component.ackModal)
    //expect(component.ackModal).not.toBeNull()
  })
})
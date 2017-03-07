import { Pipe, Input, Component, NgModule } from '@angular/core';

@Pipe({name: 'typeof'}) class TypeofPipe {
  transform(value): string {
    return typeof(value)
  }
}

@Pipe({name: 'console'}) class ConsolePipe {
  transform(){
    return console.log.apply(console,arguments)
  }
}

export const declarations = [TypeofPipe,ConsolePipe]
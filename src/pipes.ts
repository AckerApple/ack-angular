import { Pipe } from '@angular/core';
import { pipes } from "./pipes.class"

@Pipe({name: 'capitalize'}) export class Capitalize {
  transform(input:any){
    return pipes.capitalize(input)
  }
}

@Pipe({name: 'capitalizeWords'}) export class CapitalizeWords {
  transform(input:any){
    return pipes.capitalizeWords(input)
  }
}

@Pipe({name: 'yesno'}) export class Yesno {
  transform(input:any){
    return pipes.yesno(input)
  }
}

@Pipe({name: 'YesNo'}) export class YesNo {
  transform(input:any){
    return pipes.yesNo(input)
  }
}

@Pipe({name: 'numbers'}) export class Numbers {
  transform(input:any){
    return pipes.numbers(input)
  }
}

@Pipe({name: 'aDate'}) export class ADate {
  transform(){
    return pipes.aDate.apply(pipes.aDate, arguments)
  }
}

@Pipe({name: 'aTime'}) export class ATime {
  transform(){
    return pipes.aTime.apply(pipes.aTime, arguments)
  }
}

@Pipe({name: 'ack'}) export class Ack {
  transform(){
    return pipes.ack.apply(pipes.ack, arguments)
  }
}

@Pipe({name: 'keys'}) export class Keys {
  transform(input:any){
    if(input)return Object.keys(input)
  }
}

@Pipe({name: 'typeof'}) export class TypeofPipe {
  transform(input:any){
    return typeof(input)
  }
}

@Pipe({name: 'console'}) export class ConsolePipe {
  transform(){
    return console.log.apply(console,arguments)
  }
}

export const declarations = [
  Capitalize,
  CapitalizeWords,
  Yesno,
  YesNo,
  Numbers,
  Keys,
  TypeofPipe,
  ConsolePipe,
  ADate,
  ATime,
  Ack
]
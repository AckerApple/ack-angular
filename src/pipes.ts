import { Pipe, Input, Component, NgModule } from '@angular/core';

export function yesno(input){
  if(input==null)return input
  return input ? 'yes' : 'no';
}

export function yesNo(input){
  if(input==null)return input
  return input ? 'Yes' : 'No';
}

export function numbers(input){
  return input ? String(input).replace(/[^0-9]/g,'') : input
}

export function capitalizeWords(input){
  var reg = /[^\W_]+[^\s-]* */g
  return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}) : ''
}

/** each sentence word is capitalized */
export function capitalize(input){
  input = capitalizeOne(input)
  var reg = /[.?!][\s\r\t]+\w/g
  return (!!input) ? input.replace(reg, capitalizeAfterSentence) : ''
}

function capitalizeAfterSentence(input){
  var reg = /[\s\r\t]\w/g
  return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0) + txt.charAt(1).toUpperCase() + txt.substr(2).toLowerCase()}) : ''
}

function capitalizeOne(input) {
  var reg = /[^\W_]+[^\s-]*/
  return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}) : ''
}


@Pipe({name: 'capitalize'}) export class Capitalize {
  transform(input){
    return capitalize(input)
  }
}

@Pipe({name: 'capitalizeWords'}) export class CapitalizeWords {
  transform(input){
    return capitalizeWords(input)
  }
}

@Pipe({name: 'yesno'}) export class Yesno {
  transform(input){
    return yesno(input)
  }
}

@Pipe({name: 'YesNo'}) export class YesNo {
  transform(input){
    return yesNo(input)
  }
}

@Pipe({name: 'numbers'}) export class Numbers {
  transform(input){
    return numbers(input)
  }
}

@Pipe({name: 'keys'}) export class Keys {
  transform(input){
    if(input)return Object.keys(input)
  }
}

@Pipe({name: 'typeof'}) export class TypeofPipe {
  transform(input){
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
  ConsolePipe
 ]
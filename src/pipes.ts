import { Pipe } from '@angular/core';

import * as pipes from "./pipes.class"

import {
  SafeHtml as SafeHtmler,//must be exported for AOT
  SafeStyle as SafeStyler,//must be exported for AOT
  SafeResourceUrl,
  DomSanitizer
} from '@angular/platform-browser';

/* ONLY THIS FILE */
  @Pipe({name: 'indexTrack'}) export class IndexTrack {
    transform() {
      return function(index, ob){return index}
    }
  }

  @Pipe({name: 'stringify'}) export class Stringify {
    transform(input, spaces) {
      return JSON.stringify(input, null, spaces)
    }
  }

  @Pipe({name: 'array'}) export class ForceArray {
    transform(input, repeat, repeatValue) {
      return pipes.array(input, repeat, repeatValue)
    }
  }

  @Pipe({name: 'arrayOfObjects'}) export class ArrayOfObjects {
    transform(input, repeat, repeatValue) {
      return pipes.arrayOfObjects(input, repeat, repeatValue)
    }
  }

  @Pipe({name: 'safeUrl'}) export class SafeUrl {
    constructor(private domSanitizer: DomSanitizer) {}
    transform(input) {
      return this.domSanitizer.bypassSecurityTrustResourceUrl(input)
    }
  }

  @Pipe({name: 'safeHtml'}) export class SafeHtml {
    constructor(private domSanitizer: DomSanitizer) {}
    transform(input) {
      return this.domSanitizer.bypassSecurityTrustHtml(input)
    }
  }

  @Pipe({name: 'safeStyle'}) export class SafeStyle {
    constructor(private domSanitizer: DomSanitizer) {}
    transform(input) {
      return this.domSanitizer.bypassSecurityTrustStyle(input)
    }
  }
/* end: only this file */


/** (input>=a && input<=b) || (input>=b && input<=a) */
@Pipe({name: 'between'}) export class Between {
  transform(input, a, b) {return pipes.between(input, a, b)}
}

/** use with bypassSecurityTrustResourceUrl for href */
@Pipe({name: 'textDownload'}) export class TextDownload {
  transform(input:string){return pipes.textDownload(input)}
}

@Pipe({name: 'numberToPhone'}) export class NumberToPhone {
  transform(input:string){return pipes.numberToPhone(input)}
}

@Pipe({name: 'toNumber'}) export class toNumber {
  transform(input:string){return pipes.toNumber(input)}
}

@Pipe({name: 'numberSuffix'}) export class NumberSuffix {
  transform(input:string, rtnInput){return pipes.numberSuffix(input, rtnInput)}
}

@Pipe({name: 'markdownAnchor'}) export class MarkdownAnchor {
  transform(input:string){return pipes.markdownAnchor(input)}
}

@Pipe({name: 'capitalize'}) export class Capitalize {
  transform(input:any){return pipes.capitalize(input)}
}

@Pipe({name: 'capitalizeWords'}) export class CapitalizeWords {
  transform(input:any){return pipes.capitalizeWords(input)}
}

@Pipe({name: 'yesno'}) export class Yesno {
  transform(input:any){return pipes.yesno(input)}
}

@Pipe({name: 'YesNo'}) export class YesNo {
  transform(input:any){return pipes.yesNo(input)}
}

@Pipe({name: 'boolean'}) export class BooleanPipe {
  transform(input:any){return pipes.boolean(input)}
}

@Pipe({name: 'bit'}) export class Bit {
  transform(input:any){return pipes.bit(input)}
}

//get and return all numbers inside a string
@Pipe({name: 'numbers'}) export class Numbers {
  transform(input:any){return pipes.numbers(input)}
}

@Pipe({name: 'aDate'}) export class ADate {
  transform(){return pipes.aDate.apply(pipes.aDate, arguments)}
}

@Pipe({name: 'aMath'}) export class AMath {
  transform(){return pipes.aMath.apply(pipes.aMath, arguments)}
}

@Pipe({name: 'aTime'}) export class ATime {
  transform(){return pipes.aTime.apply(pipes.aTime, arguments)}
}

@Pipe({name: 'ack'}) export class Ack {
  transform(){return pipes.ack.apply(pipes.ack, arguments)}
}

@Pipe({name: 'keys'}) export class Keys {
  transform(input:any){
    const type = typeof(input)=='object'
    const isOb = input && type
    const isArray = isOb && input.constructor == Array
    
    if(isArray){
      return input.map((value,index)=>index)
    }
    
    return input ? Object.keys(input) : []
  }
}

@Pipe({name: 'typeof'}) export class TypeofPipe {
  transform(input:any){return typeof(input)}
}

@Pipe({name: 'console'}) export class ConsolePipe {
  transform(){return console.log.apply(console,arguments)}
}

export const declarations = [
  IndexTrack,
  Stringify,
  ForceArray,
  ArrayOfObjects,
  SafeHtml,
  SafeUrl,
  SafeStyle,
  TextDownload,
  MarkdownAnchor,
  Capitalize,
  CapitalizeWords,
  Yesno,
  YesNo,
  Keys,
  TypeofPipe,
  ConsolePipe,
  ADate,
  AMath,
  ATime,
  Ack,
  Numbers,
  toNumber,
  NumberToPhone,
  NumberSuffix,
  Bit,
  BooleanPipe,
  Between
]
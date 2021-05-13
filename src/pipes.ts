import { Pipe } from '@angular/core';

import * as pipes from "./pipes.class"

import {
  //SafeHtml as SafeHtmler,//must be exported for AOT
  //SafeStyle as SafeStyler,//must be exported for AOT
  //SafeResourceUrl,
  DomSanitizer
} from '@angular/platform-browser';

/* ONLY THIS FILE */
  @Pipe({name: 'indexTrack'}) export class IndexTrack {
    transform() {
      return function(index: any){return index}
    }
  }

  @Pipe({name: 'stringify'}) export class Stringify {
    transform(input: any, spaces: any) {
      return JSON.stringify(input, null, spaces)
    }
  }

  @Pipe({name: 'array'}) export class ForceArray {
    transform(input: any, repeat?: any, repeatValue?: any) {
      return pipes.array(input, repeat, repeatValue)
    }
  }

  @Pipe({name: 'arrayOfObjects'}) export class ArrayOfObjects {
    transform(input: any, repeat: any, repeatValue: any) {
      return pipes.arrayOfObjects(input, repeat, repeatValue)
    }
  }

  @Pipe({name: 'safeUrl'}) export class SafeUrl {
    constructor(private domSanitizer: DomSanitizer) {}
    transform(input: any) {
      return this.domSanitizer.bypassSecurityTrustResourceUrl(input)
    }
  }

  @Pipe({name: 'numberWord'}) export class NumberWord {
    constructor() {}
    transform(input: any, number: any) {
      return input + (number && number==1 ? '' : 's')
    }
  }

  @Pipe({name: 'endNumberWord'}) export class EndNumberWord {
    constructor() {}
    transform(input: any) {
      return input && input==1 ? '' : 's'
    }
  }

  @Pipe({name: 'safeHtml'}) export class SafeHtml {
    constructor(private domSanitizer: DomSanitizer) {}
    transform(input: any) {
      return this.domSanitizer.bypassSecurityTrustHtml(input)
    }
  }

  @Pipe({name: 'safeStyle'}) export class SafeStyle {
    constructor(private domSanitizer: DomSanitizer) {}
    transform(input: any) {
      return this.domSanitizer.bypassSecurityTrustStyle(input)
    }
  }
/* end: only this file */


/** (input>=a && input<=b) || (input>=b && input<=a) */
@Pipe({name: 'between'}) export class Between {
  transform(input: any, a: any, b: any) {
    return pipes.between(input, a, b)
  }
}

@Pipe({name: 'replaceMaxLength'}) export class ReplaceMaxLength {
  transform(
   input:string, max: number, replacement: string
  ) {
    return pipes.replaceMaxLength(input, max, replacement)
  }
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
  transform(input:string, rtnInput?: any){return pipes.numberSuffix(input, rtnInput)}
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
  transform(...args: any){return pipes.aDate.apply(pipes.aDate, args)}
}

@Pipe({name: 'aMath'}) export class AMath {
  transform(...args: any){return pipes.aMath.apply(pipes.aMath, args)}
}

@Pipe({name: 'aString'}) export class AString {
  transform(...args: any){return pipes.aString.apply(pipes.aString, args)}
}

@Pipe({name: 'aTime'}) export class ATime {
  transform(...args: any){return pipes.aTime.apply(pipes.aTime, args)}
}

@Pipe({name: 'ack'}) export class Ack {
  transform(...args: any){return pipes.ack.apply(pipes.ack, args)}
}

@Pipe({name: 'keys'}) export class Keys {
  transform(input:any){
    const type = typeof(input)=='object'
    const isOb = input && type
    const isArray = isOb && input.constructor == Array

    if(isArray){
      return input.map((_value: any, index: any)=>index)
    }

    return input ? Object.keys(input) : []
  }
}

@Pipe({name: 'typeof'}) export class TypeofPipe {
  transform(input:any){return typeof(input)}
}

@Pipe({name: 'console'}) export class ConsolePipe {
  transform(){
    return console.log.apply(console, arguments as any)
  }
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
  AString,
  ATime,
  Ack,
  Numbers,
  toNumber,
  NumberToPhone,
  NumberSuffix,
  Bit,
  NumberWord,
  EndNumberWord,
  BooleanPipe,
  Between,
  ReplaceMaxLength,
]
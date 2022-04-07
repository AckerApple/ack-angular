import { DomSanitizer } from '@angular/platform-browser'
import { KeysPipe } from './pipes/keys.pipe'
import * as pipesUtils from "./pipes.class"
import { Pipe } from '@angular/core'

export { KeysPipe } from './pipes/keys.pipe'

/* ONLY THIS FILE */
  @Pipe({name: 'indexTrack'}) export class IndexTrack {
    transform(_x: any) {
      return function(index: any){return index}
    }
  }

  @Pipe({name: 'stringify'}) export class Stringify {
    transform(input: any, spaces=0) {
      return JSON.stringify(input, null, spaces)
    }
  }

  @Pipe({name: 'array'}) export class ForceArray {
    transform(input: any, repeat?: any, repeatValue?: any) {
      return pipesUtils.array(input, repeat, repeatValue)
    }
  }

  @Pipe({name: 'arrayOfObjects'}) export class ArrayOfObjects {
    transform(input: any, repeat?: number | undefined, repeatValue?: unknown) {
      return pipesUtils.arrayOfObjects(input, repeat, repeatValue)
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
    return pipesUtils.between(input, a, b)
  }
}

@Pipe({name: 'replaceMaxLength'}) export class ReplaceMaxLength {
  transform(
   input:string, max: number, replacement?: string
  ) {
    return pipesUtils.replaceMaxLength(input, max, replacement)
  }
}

/** use with bypassSecurityTrustResourceUrl for href */
@Pipe({name: 'textDownload'}) export class TextDownload {
  transform(input:string){return pipesUtils.textDownload(input)}
}

@Pipe({name: 'numberToPhone'}) export class NumberToPhone {
  transform(input:string | number){
    return pipesUtils.numberToPhone(input)
  }
}

@Pipe({name: 'toNumber'}) export class toNumber {
  transform(input:string){return pipesUtils.toNumber(input)}
}

@Pipe({name: 'numberSuffix'}) export class NumberSuffix {
  transform(input: number | string, rtnInput?: any){
    return pipesUtils.numberSuffix(input, rtnInput)
  }
}

@Pipe({name: 'markdownAnchor'}) export class MarkdownAnchor {
  transform(input:string){return pipesUtils.markdownAnchor(input)}
}

@Pipe({name: 'capitalize'}) export class Capitalize {
  transform(input:any){return pipesUtils.capitalize(input)}
}

@Pipe({name: 'capitalizeWords'}) export class CapitalizeWords {
  transform(input:any){return pipesUtils.capitalizeWords(input)}
}

@Pipe({name: 'yesno'}) export class Yesno {
  transform(input:any){return pipesUtils.yesno(input)}
}

@Pipe({name: 'YesNo'}) export class YesNo {
  transform(input:any){return pipesUtils.yesNo(input)}
}

@Pipe({name: 'boolean'}) export class BooleanPipe {
  transform(input:any){return pipesUtils.boolean(input)}
}

@Pipe({name: 'bit'}) export class Bit {
  transform(input:any){return pipesUtils.bit(input)}
}

//get and return all numbers inside a string
@Pipe({name: 'numbers'}) export class Numbers {
  transform(input:any){return pipesUtils.numbers(input)}
}

@Pipe({name: 'aDate'}) export class ADate {
  transform(...args: any){return pipesUtils.aDate.apply(pipesUtils.aDate, args)}
}

@Pipe({name: 'aMath'}) export class AMath {
  transform(...args: any){return pipesUtils.aMath.apply(pipesUtils.aMath, args)}
}

@Pipe({name: 'aString'}) export class AString {
  transform(...args: any){return pipesUtils.aString.apply(pipesUtils.aString, args)}
}

@Pipe({name: 'aTime'}) export class ATime {
  transform(...args: any){return pipesUtils.aTime.apply(pipesUtils.aTime, args)}
}

@Pipe({name: 'ack'}) export class Ack {
  transform(...args: any){return pipesUtils.ack.apply(pipesUtils.ack, args)}
}

@Pipe({name: 'typeof'}) export class TypeofPipe {
  transform(input:any){return typeof(input)}
}

@Pipe({name: 'console'}) export class ConsolePipe {
  transform(){
    return console.log.apply(console, arguments as any)
  }
}

export const pipes = [
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
  KeysPipe,
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
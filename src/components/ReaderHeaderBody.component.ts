import {
	Component, Directive,
	ElementRef, TemplateRef, ContentChild
} from "@angular/core"

import { string as readerHeaderBody } from "./templates/reader-header-body.pug"

//easy to use common full page templater
@Component({
  selector:'reader-header-body',
  template:readerHeaderBody
}) export class ReaderHeaderBody {}

@Directive({
  selector:'reader-header'
}) export class ReaderHeader {}

@Directive({
  selector:"reader-body"
}) export class ReaderBody {
	@ContentChild('reader-header') readerHeader:TemplateRef<any>

  constructor(public element: ElementRef){
    element.nativeElement.style.height = '100%';
    element.nativeElement.style.display = 'block';
  }
}

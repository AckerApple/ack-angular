import { Injectable } from '@angular/core';

function getDocument():any{return document}

@Injectable() export class DocumentService {
  get nativeElement(): any {return getDocument()}
}
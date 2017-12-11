import { Injectable } from '@angular/core';

function getWindow():any{return window}

@Injectable() export class WindowService {
  get nativeElement(): any {return getWindow()}
  //deprecated
  get nativeWindow(): any {return getWindow()}
}
import { Injectable } from '@angular/core';
function getDocument() { return document; }
export class DocumentService {
    get nativeElement() { return getDocument(); }
}
DocumentService.decorators = [
    { type: Injectable }
];

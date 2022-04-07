import { ElementRef, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
export declare class ContentModel implements OnChanges, OnDestroy {
    elm: ElementRef;
    changeDone: EventEmitter<string>;
    contentModel: string;
    inputChange: EventEmitter<string>;
    contentModelChange: EventEmitter<string>;
    placeholder?: string;
    maxLength?: number;
    enterEnds?: boolean;
    enter: EventEmitter<string>;
    hasFocus?: boolean;
    hasFocusChange: EventEmitter<boolean>;
    recentInputs: number;
    lastValue?: string;
    constructor(elm: ElementRef);
    ngOnDestroy(): void;
    ngOnChanges(): void;
    evalPlaceholder(placeholder?: string): boolean;
    shouldCancelEvent(event: Event): boolean;
    onKeyDown(event: Event): void;
    onInput(): void;
    updateValue(): void;
    onFocus(): void;
    checkPlaceholder(): void;
    onBlur(): void;
}

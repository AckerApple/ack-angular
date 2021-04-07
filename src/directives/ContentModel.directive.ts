import {
  ElementRef, Output, EventEmitter,
  Input, HostListener, Directive, OnChanges, OnDestroy
} from '@angular/core';

@Directive({
  selector: '[contentModel]'
}) export class ContentModel implements OnChanges, OnDestroy {
  @Output() changeDone: EventEmitter<string> = new EventEmitter();

  @Input() contentModel!: string;
  @Output() inputChange: EventEmitter<string> = new EventEmitter();
  // Below, avoid using (contentModelChange) ... use (inputChange) instead
  @Output() contentModelChange: EventEmitter<string> = new EventEmitter();

  @Input() placeholder?: string;
  @Input() maxLength?: number;

  @Input() enterEnds?: boolean
  @Output() enter: EventEmitter<void> = new EventEmitter(); // fires when enter key used

  recentInputs = 0; // check in/out user input to prevent updating content right after user input
  lastValue?: string;

  constructor(public elm: ElementRef) {
    this.elm.nativeElement.setAttribute('contenteditable', true);
  }

  ngOnDestroy(){
    this.elm.nativeElement.removeAttribute('contenteditable');
  }

  ngOnChanges(){
    const nElm = this.elm.nativeElement;

    // do not redraw if we are currently changing the input
    if (this.recentInputs) {
      --this.recentInputs;
      return;
    }

    const usePlaceholder = this.evalPlaceholder();
    if (!usePlaceholder) {
      nElm.textContent = this.contentModel;
    }
  }

  evalPlaceholder(placeholder?: string): boolean {
    const nElm = this.elm.nativeElement;

    const usePlaceholder = this.contentModel == null || this.contentModel === '';

    if (usePlaceholder) {
      nElm.textContent = placeholder == null ? this.placeholder : placeholder;
      return true;
    }

    return false;
  }

  shouldCancelEvent(event: Event) {
    const key = (event as any).which || (event as any).keyCode;
    return this.enterEnds && key === 13
  }

  @HostListener('keydown', ['$event']) onKeyDown(event: Event) {
    this.checkPlaceholder();
    const cancel = this.shouldCancelEvent(event)

    // enter key treatment
    if (cancel) {
      this.onBlur();
      cancelEvent(event)
      this.enter.emit();
      return;
    }

    if (this.maxLength) {
      const newValue = this.elm.nativeElement.textContent;
      const maxLength = Number(this.maxLength);
      const maxed = this.maxLength && newValue.length > maxLength;
      const key = (event as any).which || (event as any).keyCode;

      if (maxed) {
        const isDelete = [8, 46].indexOf( key ) >= 0;

        if (!isDelete) {
          cancelEvent(event)
          return;
        }
      }
    }
  }

  @HostListener('input') onInput() {
    const newValue = this.elm.nativeElement.textContent;
    const maxLength = Number(this.maxLength);

    if (this.maxLength && newValue.length > maxLength) {
      return;
    }

    ++this.recentInputs;
    this.updateValue()
    // Below, caused focus loss blur because the model updates and causes redraw so now we use this.recentInputs
    this.inputChange.emit(this.contentModel);
  }

  updateValue() {
    this.contentModel = this.elm.nativeElement.textContent
    this.contentModelChange.emit(this.contentModel);
  }

  @HostListener('focus') onFocus() {
    this.lastValue = this.contentModel;
    this.evalPlaceholder('');
    /* 10-12: moved into keydown check
    this.checkPlaceholder();
    */
  }

  checkPlaceholder() {
    if (this.placeholder && this.elm.nativeElement.textContent === this.placeholder) {
      this.elm.nativeElement.textContent = '';
    }
  }

  @HostListener('blur') onBlur() {
    if (this.lastValue !== this.elm.nativeElement.textContent) {
      this.updateValue() // we have to emit here for change otherwise keyboard blur caused during key changes
      this.changeDone.emit(this.contentModel);
    }

    this.evalPlaceholder();
  }
}

function cancelEvent(event: Event) {
  event.preventDefault()
  event.stopPropagation()
}
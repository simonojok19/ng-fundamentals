import {Directive, ElementRef, Inject, OnInit} from '@angular/core';
import {JQ_TOKEN} from './jquery.service';

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  private htmlElement: HTMLElement;
  constructor(elementRef: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.htmlElement = elementRef.nativeElement;
  }
  ngOnInit(): void {
    this.htmlElement.addEventListener('click', (event) => {
      this.$('#simple-modal').modal({});
    });
  }

}

import {Directive, Inject, OnInit} from '@angular/core';
import {JQ_TOKEN} from './jquery.service';

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  constructor(@Inject(JQ_TOKEN) private $: any) {}
  ngOnInit(): void {
    this.$('#simple-modal').modal({});
  }

}

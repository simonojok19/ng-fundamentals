import {Component, ElementRef, Inject, Input, ViewChild} from '@angular/core';
import {isBoolean} from 'util';
import {JQ_TOKEN} from './jquery.service';

@Component({
  selector: 'app-simple-modal',
  template: `
    <div id="{{ elementId }}" #modalContainer class="modal fade" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-header">
                <h4 class="modal-title">{{ title }}</h4>
                <button type="button" class="close" data-dismiss="modal">
                    <span>&times;</span>
                </button>
            </div>
            <div class="modal-content">
                <div class="modal-body" (click)="closeModal()">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    </div>
  `,
  styles: [`
    .modal-body { height: 250px; overflow-y: scroll; }
  `]
})
export class SimpleModalComponent {
  @Input() title: string;
  @Input() elementId: string;
  // @ts-ignore
  @ViewChild('modalContainer') containerEl: ElementRef;
  @Input() closeOnBodyClick: string;
  constructor(@Inject(JQ_TOKEN) private jquery: any) {}

  closeModal() {
    if (this.closeOnBodyClick === 'true') {
      this.jquery(this.containerEl.nativeElement).modal('hide');
    }
  }
}

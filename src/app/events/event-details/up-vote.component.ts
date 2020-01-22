import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-up-vote',
  template: `
    <div class="votingWidgetContainer pointable" (click)="onClick()">
        <div class="well votingWidget">
            <div class="votingButton">
                <i class="glyphicon glyphicon-heart"
                [style.color]="iconColor"></i>
<!--                <i *ngIf="!voted" class="glyphicon glyphicon-heart-empty"></i>-->
            </div>
            <div class="badge badge-inverse votingCount">
                <div>{{ count }}</div>
            </div>
        </div>
    </div>
  `,
  styleUrls: ['./up-vote.component.css']
})

export class UpVoteComponent {
  @Input() count: number;
  @Input() set voted(val) {
    this.iconColor = val ? 'red' : 'white';
  }
  @Output() vote = new EventEmitter();
  iconColor: string;

  onClick() {
    this.vote.emit({});
  }
}

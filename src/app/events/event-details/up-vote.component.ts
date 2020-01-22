import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-up-vote',
  template: `
    <div class="votingWidgetContainer pointable" (click)="onClick()">
        <div class="well votingWidget">
            <div class="votingButton">
                <i *ngIf="voted" class="glyphicon glyphicon-heart"></i>
                <i *ngIf="!voted" class="glyphicon glyphicon-heart-empty"></i>
            </div>
            <div class="badge badge-inverse votingCount">
                <di>{{ count }}</di>
            </div>
        </div>
    </div>
  `
})

export class UpVoteComponent {
  @Input() count: number;
}

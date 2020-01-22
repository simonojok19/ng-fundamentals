import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-collapsible-well',
  template: `
    <div (click)="toggleContent()" class="well pointable">
        <h4 class="well-title">{{ title }}</h4>
        // content
    </div>
  `
})
export class CollapsibleWellComponent {
  @Input() title: string;
}

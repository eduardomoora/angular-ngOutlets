import {Component, inject} from '@angular/core';
import {WidgetActionsService} from '../../services/widget-actions.service';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [],
  template: `
    <button (click)="onClick()">Reload</button>
    <button (click)="onClick()">Copy Info</button>
  `,
  styleUrl: './actions.component.scss'
})
export class ActionsComponent {

  // will try to find in parent component where is declared NOT render
  actionServices = inject(WidgetActionsService);
onClick() {
  this.actionServices.reload();
  this.actionServices.copyData();
}
}

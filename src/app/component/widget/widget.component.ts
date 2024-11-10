import {Component, inject} from '@angular/core';
import {WidgetStateService} from '../../services/widget-state.service';
import {WidgetActionsService} from '../../services/widget-actions.service';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [],
  providers: [WidgetActionsService,WidgetStateService],

  template: `
    <div class="widget-header">
      <div class="widget-title">Weather Forecast</div>
      <div class="widget-subtitle">Current weather in your location</div>
    </div>
    <div class="widget-content">
      <div class="sky-condition"> {{ (state.data.skyCondition === 'sunny') ? '☀️'  : '🌨️'}}</div>
      <div class="temperature"> {{state.data.temperature}}c</div>
    </div>
    <div class="widget-actions">
      <button>Reload</button>
      <button>Copy Info</button>
    </div>



  `,
  styleUrl: './widget.component.scss'
})
export class WidgetComponent {
state = inject(WidgetStateService);
actions = inject(WidgetActionsService);
}

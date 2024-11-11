import {Component, inject, Injector, input, Input, model, TemplateRef} from '@angular/core';
import {WidgetStateService} from '../../services/widget-state.service';
import {WidgetActionsService} from '../../services/widget-actions.service';
import {CommonModule, NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [
    CommonModule
  ],
  providers: [WidgetActionsService, WidgetStateService],

  template: `
    <div class="widget-header">
      <ng-container *ngTemplateOutlet="customTemplateHeader() || defaultHeader"></ng-container>
      <ng-template #defaultHeader>
        <div class="widget-title">Weather Forecast</div>
        <div class="widget-subtitle">Current weather in your location</div>
      </ng-template>
    </div>
    <div class="widget-content">
      <ng-container
        [ngTemplateOutlet]=" customTemplateContent() || defaultContent"
        [ngTemplateOutletContext]="{state: state}"
      >

      </ng-container>
      <ng-template #defaultContent>
        <div class="sky-condition"> {{ (state.data.skyCondition === 'sunny') ? '☀️' : '🌨️' }}</div>
        <div class="temperature"> {{ state.data.temperature }}c</div>
      </ng-template>

    </div>
    <div class="widget-actions">
      <ng-container
        [ngTemplateOutlet]="customTemplateActions() || defaultAction"
      [ngTemplateOutletInjector]="injectorWidget"
      >

      </ng-container>
    </div>

    <ng-template #defaultAction>
      <button>Reload</button>
      <button>Copy Info</button>
    </ng-template>
  `,
  styleUrl: './widget.component.scss'
})
export class WidgetComponent {
  /*  @Input()
    customTemplateHeaader!:TemplateRef<any>;*/
   injectorWidget =inject(Injector);
  customTemplateHeader = input<TemplateRef<any>>();
  customTemplateContent = input<TemplateRef<any>>();
  customTemplateActions = input<TemplateRef<any>>();
  state = inject(WidgetStateService);
  actions = inject(WidgetActionsService);
}

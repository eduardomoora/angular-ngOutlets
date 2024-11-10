import {inject, Injectable} from '@angular/core';
import {WidgetStateService} from './widget-state.service';

@Injectable()
export class WidgetActionsService {
 state = inject(WidgetStateService, {self: true});

 reload(): void{
   this.state.lastUpdateAt = new Date();
   console.log('Reload widget Data...');
 }

 copyData():void{
   console.log('Copy widget Data into clipboard...');
 }
}

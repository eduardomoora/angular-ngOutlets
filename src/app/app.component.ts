import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WidgetComponent} from './component/widget/widget.component';
import {ActionsComponent} from './component/actions/actions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WidgetComponent, ActionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngOutletApp';
}

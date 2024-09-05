import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '@env';

declare const APP_KEY: string;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  appKey = APP_KEY;
  currentEnvironment = environment.currentEnvironment;
}

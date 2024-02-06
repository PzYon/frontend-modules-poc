import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebComponentHostComponent } from './web-component-host/web-component-host.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WebComponentHostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'main-app';
}

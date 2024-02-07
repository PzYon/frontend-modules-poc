import { Component } from '@angular/core';
import { WebComponentHostComponent } from './web-component-host/web-component-host.component';
import { AngularLibraryService } from 'angular-library';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WebComponentHostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'main-app';

  constructor(public libraryService: AngularLibraryService) {
    this.libraryService.getRandomValue();
  }
}

import {
  Component,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/native-federation';

@Component({
  selector: 'web-component-host',
  standalone: true,
  imports: [],
  templateUrl: './web-component-host.component.html',
  styleUrl: './web-component-host.component.scss',
})
export class WebComponentHostComponent implements OnInit {
  @ViewChild('placeHolder', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  ngOnInit(): void {
    this.load();
  }

  async load(): Promise<void> {
    const remoteModule = await loadRemoteModule<{
      AppComponent: Type<{ sampleParameter: string }>;
    }>({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Component',
    });

    const ref = this.viewContainer.createComponent(remoteModule.AppComponent);
    ref.setInput('sampleParameter', 'Gusti');
  }
}

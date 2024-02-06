import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {loadRemoteModule} from "@angular-architects/native-federation";

@Component({
  selector: 'web-component-host',
  standalone: true,
  imports: [],
  templateUrl: './web-component-host.component.html',
  styleUrl: './web-component-host.component.scss'
})
export class WebComponentHostComponent implements OnInit {
  @ViewChild('placeHolder', {read: ViewContainerRef})
  viewContainer!: ViewContainerRef;

  constructor() {
  }

  ngOnInit(): void {
    this.load();
  }

  async load(): Promise<void> {

    const m = await loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Component'
    });



    const ref = this.viewContainer.createComponent(m.AppComponent);
    // const compInstance = ref.instance;
    // compInstance.ngOnInit()
  }

}

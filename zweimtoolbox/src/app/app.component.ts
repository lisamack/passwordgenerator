import { Component } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '2M Toolbox';
  private _dockItems : MenuItem[] = [];

  ngOnInit() {
    this._dockItems = [
      {
        label: 'Passwortgenerator', 
        icon: 'assets/images/key2.png'
      }, 
      {
        label: 'DFÜ', 
        icon: 'assets/images/files.png'
      }
    ];
  }

  get dockItems(): MenuItem[] {
    return this._dockItems;
  }

  set dockItems(dockItems: MenuItem[]) {
    this._dockItems = dockItems;
  }
}

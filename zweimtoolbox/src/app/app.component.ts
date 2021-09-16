import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '2M Passwortgenerator';
  private _passwordLength: number = 10; 

  get passwordLength(): number {
    return this._passwordLength;
  }

  set passwordLength(passwordLength: number) {
    this._passwordLength = passwordLength;
  }
}

import { PasswordGenerator } from './password-generator';
import { PasswordDetails } from './password-details';
import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '2M Passwortgenerator';
  private _passwordLength: number = 10; 
  private _upperCase: boolean = true;
  private _easy: boolean = false; 
  private _specialSigns: boolean = true; 
  private _numbers: boolean = true; 
  private _generatedPassword: string = ""; 

  constructor(private confirmationService: ConfirmationService) {}

public generatePassword(): void {
  let passwordDetails: PasswordDetails = new PasswordDetails(this._passwordLength, this._upperCase, this._easy, this._numbers, this._specialSigns);
  this._generatedPassword = PasswordGenerator.generatePassword(passwordDetails); 
  this.confirmationService.confirm({message: this._generatedPassword, accept: () => { 
    // copy password into context menu
  }})
}

  get generatedPassword(): string {
    return this._generatedPassword; 
  }

  get passwordLength(): number {
    return this._passwordLength;
  }

  set passwordLength(passwordLength: number) {
    this._passwordLength = passwordLength;
  }

  get upperCase(): boolean {
    return this._upperCase;
  }

  set upperCase(upperCase: boolean) {
    this._upperCase = upperCase;
  }

  get easy(): boolean {
    return this._easy;
  }

  set easy(easy: boolean) {
    this._easy = easy;
  }

  get specialSigns(): boolean {
    return this._specialSigns; 
  }

  set specialSigns(specialSigns: boolean) {
    this._specialSigns = specialSigns; 
  }

  get numbers(): boolean {
    return this._numbers;
  }

  set numbers(numbers: boolean) {
    this._numbers = numbers;
  }

}

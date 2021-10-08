import { PasswordGenerator } from './password-generator';
import { PasswordDetails } from './password-details';
import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SubjectSubscriber } from 'rxjs/internal/Subject';

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

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

  /**
   * Generates a new password by the chosen settings und shows the new password in a dialog where it can be copied. 
   */
  public generatePassword(): void {
    let passwordDetails: PasswordDetails = new PasswordDetails(this._passwordLength, this._upperCase, this._easy, this._numbers, this._specialSigns);
    this._generatedPassword = PasswordGenerator.generatePassword(passwordDetails); 
    this.confirmationService.confirm({message: this._generatedPassword, accept: () => { 
      navigator.clipboard.writeText(this._generatedPassword).then().catch(e => console.error(e));
      this.messageService.add({severity: 'info', summary: 'Kopiervorgang', detail: 'Das Passwort wurde in die Zwischenablage kopiert.'})
    }})
  }

  /**
   * Prepare the settings for a password that should be easy to notice. 
   */
  public prepareEasyToNotice(): void {
    this._passwordLength = 10; 
    this._specialSigns = true; 
    this._upperCase = true; 
    this._numbers = true; 
    this._easy = true; 
  }

  /**
   * Prepares the settings for a password that should be safe. 
   */
  public prepareSafePassword(): void {
    this._passwordLength = 16; 
    this._specialSigns = true; 
    this._upperCase = true; 
    this._numbers = true; 
    this._easy = false; 
  }

  /**
   * Prepares the settings for a password that is suitable for administration purposes.
   */
  public prepareAdminPassword(): void {
    this._passwordLength = 32; 
    this._specialSigns = true; 
    this._upperCase = true; 
    this._numbers = true; 
    this._easy = false; 
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


/**
 * Todo: 
 * - Logik testen
 * - Fehlerbehandlungen einbauen
 * - Passwort nur vorübergehend in die Zwischenablage kopieren
 * - ConfirmDialog nach dem Kopieren des Passwortes nicht schließen
 * - Recherchieren, wie man das fertige Angularprojekt ausliefert
 */

}

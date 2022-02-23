import { PasswordDetails } from './password-details';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, SharedModule } from 'primeng/api';
import { TestBed } from '@angular/core/testing';
import { PasswordGenerator } from './password-generator';

/**
 * Tests the password generation.
 */
describe('PasswordGenerator', () => {
  let generator: PasswordGenerator; 
  let confirmService: ConfirmationService; 
  
  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      imports: [ConfirmDialogModule, SharedModule], 
      providers: [ConfirmationService, PasswordGenerator] });
    generator = TestBed.inject(PasswordGenerator);
    confirmService = TestBed.inject(ConfirmationService);
  })
  
  it('instance should be created', () => {
    expect(confirmService).toBeTruthy();
  });

  it('instance should be created', () => {
    expect(generator).toBeTruthy();
  });

  /**
   * Checks if password has the length that was defined in Password Details. 
   */
  it('password should have given length', () => {
    let passwordDetails: PasswordDetails = new PasswordDetails(12); 

    let password: string = generator.generatePassword(passwordDetails);

    expect(password.length).toBe(12);
  }); 

  /**
   * Checks if password structure of the easy passwords is correct. 
   */
  it('password should be a correct easy password', () => {
    let passwordDetails: PasswordDetails = new PasswordDetails(10, true, true);

    let password: string = generator.generatePassword(passwordDetails); 

    // password length should be 10 
    expect(password.length).toBe(10); 

    // the first symbol should be an upper case letter
    expect(password.substr(0, 1) == password.substr(0, 1).toUpperCase()).toBeTrue(); 
    expect(password).toMatch(/[a-zA-Z]/i);
    
    // the next 4 or 5 symbols (depending on number of special sings) should be lower case letters
    const longLCstring: boolean = password.substr(1, 5) == password.substr(1, 5).toLocaleLowerCase() && password.substr(1, 5).match(/[a-z]/i) != null;
    const shortLCstring: boolean = password.substr(1, 4) == password.substr(1, 4).toLocaleLowerCase() && password.substr(1, 4).match(/[a-z]/i) != null;
    expect(shortLCstring || longLCstring).toBeTrue();

    // the following 3 sings should be numbers
    expect(Number.isNaN(password.substr(5, 3)) && Number.isNaN(password.substr(6, 3))).toBeFalse();
    
    // if lower case string is longer then there has to be 1 special sign
    // if lower case string is shorter then there have to be 2 special signs
    // only longLCstring is checked here because if it is true then shortLCstring is automatically true as well 
    if (longLCstring === true) {
      expect(password.substr(9, 1)).not.toMatch(/[a-zA-Z0-9]/i);
    } else {
      expect(password.substr(8, 2)).not.toMatch(/[a-zA-Z0-9]/i);
    }
  });

  /**
   * Passwords that are generated with the same password details may not equal. 
   */
  it('generated passwords should differ', () => {
    let passwordDetails: PasswordDetails = new PasswordDetails(15); 

    let password1: string = generator.generatePassword(passwordDetails); 
    let password2: string = generator.generatePassword(passwordDetails); 
    let password3: string = generator.generatePassword(passwordDetails); 

    expect(password1).not.toEqual(password2); 
    expect(password2).not.toEqual(password3); 
    expect(password3).not.toEqual(password1); 
  })

  /**
   * Easy passwords that are generated with the same password details may not equal. 
   */
   it('generated easy passwords should differ', () => {
    let passwordDetails: PasswordDetails = new PasswordDetails(15, true, true); 

    let password1: string = generator.generatePassword(passwordDetails); 
    let password2: string = generator.generatePassword(passwordDetails); 
    let password3: string = generator.generatePassword(passwordDetails); 

    expect(password1).not.toEqual(password2); 
    expect(password2).not.toEqual(password3); 
    expect(password3).not.toEqual(password1); 
  })

});

import { PasswordDetails } from './password-details';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, SharedModule } from 'primeng/api';
import { TestBed } from '@angular/core/testing';
import { PasswordGenerator } from './password-generator';

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

  it('password should have given length', () => {
    let passwordDetails: PasswordDetails = new PasswordDetails(12); 
    let password: string = generator.generatePassword(passwordDetails);
    expect(password.length).toBe(12);
  }); 

  it('password should be easy', () => {
    let passwordDetails: PasswordDetails = new PasswordDetails(10, true, true);
    let password: string = generator.generatePassword(passwordDetails); 
    expect(password.length).toBe(10); 
    expect(password.substr(0, 1) == password.substr(0, 1).toUpperCase()).toBeTrue(); 
    expect(password.substr(1, 5) == password.substr(1, 5).toLocaleLowerCase() || password.substr(1, 4) == password.substr(1, 4).toLocaleLowerCase()).toBeTrue();
    expect(Number.isNaN(password.substr(5, 3)) && Number.isNaN(password.substr(6, 3))).toBeFalse();
    // todo: test special signs
  });

  // todo: test if generated passwords differ

});

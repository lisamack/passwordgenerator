import { TestBed } from '@angular/core/testing';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PasswordDetails } from './password-details';


let confirmService: ConfirmationService; 
  
beforeEach(() => { 
  TestBed.configureTestingModule({ 
    imports: [ConfirmDialogModule], 
    providers: [ConfirmationService] });
})

describe('PasswordDetails', () => {
  it('should create an instance', () => {
    expect(new PasswordDetails()).toBeTruthy();
  });
});

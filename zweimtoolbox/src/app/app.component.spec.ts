import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        ConfirmDialogModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        ConfirmationService,
        MessageService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title '2M Passwortgenerator'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('2M Passwortgenerator');
  });

  //it('should render title', () => {
    //const fixture = TestBed.createComponent(AppComponent);
    //fixture.detectChanges();
    //const compiled = fixture.nativeElement as HTMLElement;
    //expect(compiled.querySelector('.content span')?.textContent).toContain('2M Passwortgenerator');
  //});
});

import { PasswordGenerator } from './password-generator';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';

import { MessageService, SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DockModule } from 'primeng/dock';
import { InputTextModule } from 'primeng/inputtext'
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    CommonModule,
    DockModule, 
    MenuModule, 
    ButtonModule, 
    PanelModule, 
    SharedModule, 
    BrowserAnimationsModule, 
    InputTextModule, 
    InputNumberModule, 
    CheckboxModule, 
    ConfirmDialogModule, 
    ToastModule, 
    HttpClientModule
  ],
  providers: [ConfirmationService, MessageService, PasswordGenerator],
  bootstrap: [AppComponent]
})
export class AppModule { }

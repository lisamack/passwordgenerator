import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DockModule } from 'primeng/dock';
import { InputTextModule } from 'primeng/inputtext'
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';

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
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DockModule } from 'primeng/dock';
import { MenuModule } from 'primeng/menu';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
    MenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './Views/home/home.component';
import { CalculadoraComponent } from './Services/calculadora/calculadora.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

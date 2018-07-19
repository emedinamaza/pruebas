import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './Views/home/home.component';
import { CalculadoraComponent } from './Services/calculadora/calculadora.component';
import { AppRoutingModule } from './app-routing.module';
import { MediaComponent } from './Services/media/media.component';
import { OtherComponent } from './Services/other/other.component';
import { MediaItemComponent } from './Services/media/media-item/media-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculadoraComponent,
    MediaComponent,
    OtherComponent,
    MediaItemComponent,
    
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

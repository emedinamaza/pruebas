import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { CalculadoraComponent } from './Services/calculadora/calculadora.component';
import { MediaComponent } from './Services/media/media.component';
import { HomeComponent } from './Views/home/home.component';
import { OtherComponent } from './Services/other/other.component';

const routes: Routes =[
  { path : 'calculadora', component: CalculadoraComponent},
  { path : 'media', component: MediaComponent}, 
  { path : 'home', component: HomeComponent},
  { path : 'other', component: OtherComponent}

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }

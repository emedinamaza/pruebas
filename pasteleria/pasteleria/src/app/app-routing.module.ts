import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { AboutComponent} from './components/about/about.component';
import {AppComponent} from './app.component';
import {ProductsComponent} from './components/products/products.component';

const routes: Routes = [
    {path : '', component: AppComponent},
    {path: 'productos', component: ProductsComponent} ,
    {path: 'sobrenosotros', component: AboutComponent}
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
],
exports: [RouterModule]

})
export class AppRoutingModule { }

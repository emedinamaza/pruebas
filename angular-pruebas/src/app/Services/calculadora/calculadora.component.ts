import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
 public op1:number;
  public op2:number;
  resultado;
  res;

  constructor() { }

  ngOnInit() {


  }

  imprimirnumero1( evento){
  this.op1=evento.key;
  
  }
  imprimirnumero2( evento){
    this.op2=evento.key;
   
    }

  sumar() {
    this.res = this.op1 + this.op2;
  }

  restar() {
    this.res = this.op1 - this.op2;
  }

  multiplicar() {
    this.res = this.op1 * this.op2;
  }

  dividir() {
    this.res = this.op1 / this.op2;
  }

}

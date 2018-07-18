import { Component } from '@angular/core';
@Component({
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
public op1;
public op2;
public res;
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

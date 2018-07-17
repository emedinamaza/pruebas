import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  var op1:number=0;
  var op2:number=0;

  constructor() { }

  ngOnInit() {
  }

}

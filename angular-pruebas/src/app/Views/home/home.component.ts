import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datos = ['1', '2 ','3','4' ];

  miDato= this.datos[0];

  constructor() { 
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {
 today: number = Date.now();
 
//al crear el input le dices que esté atento a cualquier "objeto" que se llame
//dado, y luego en el mediacomponent.html se asocia el bucle que hemos hecho del 
//objeto literal de discos a dado. 

@Input() dado;
  
constructor() {
   }


  cambiar(){     
      if(this.dado.agotado==true){
        this.dado.agotado=false;
      }else{
        this.dado.agotado=true;
      }
   }

  ngOnInit() {
  }
 
}

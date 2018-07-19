import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   
  primerdisco = {
    id:1,
    name:"Dark Side of the Moon",
    grupo:"Pink Floyd"
    };
  borrarDisco(){}

}



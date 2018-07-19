import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {
 id;
 name;
 grupo;

 

    @Input() disco; 
    @Output() delete = new EventEmitter();

    onDelete(){
      this.delete.emit(this.disco);
    }
  constructor() {
    // this.id="1";
    // this.name="Dark Side of the Moon";
    // this.grupo="Pink Floyd";

   }

  ngOnInit() {
  }

}

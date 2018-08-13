import {Component, OnInit} from '@angular/core';
import {isBoolean} from 'util';

@Component({
    selector: 'app-media',
    templateUrl: './media.component.html',
    styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

    primerdisco = {
        id: 1,
        name: 'dark side of the moon',
        grupo: 'Pink Floyd',
        agotado: true,
        fecha: 21048999

    };
    discos = [
        {
            id: 1,
            name: 'dark side of the moon',
            grupo: 'Pink Floyd',
            agotado: true,
            favorite: true,
            fecha: 1532939388,
            genero:"rock"
        },
        /*These examples transform a date into various formats, assuming that dateObj
         is a JavaScript Date object for year: 2015, month: 6, day: 15, hour: 21, minute: 43, second: 11,
         given in the local time for the en-US locale.*/
        {
            id: 2,
            name: 'la ley innata',
            grupo: 'Extremoduro',
            agotado: true,
            favorite: false,
            fecha: 1015615214221,
            genero:"rock"
        },
        {
            id: 3,
            name: 'The Tree Hill',
            grupo: 'U2',
            agotado: false,
            favorite: true,
            fecha: null,
            genero:"rock"
        },
        {
            id: 4,
            name: 'A Night at the Opera',
            grupo: 'Queen',
            agotado: false,
            favorite: false,
            fecha: null,
            genero:"rock"
        },
        {
            id: 5,
            name: 'Abbey Road',
            grupo: 'The Beatles',
            agotado: true,
            favorite: false,
            fecha: null,
            genero:"rock"
        }

    ];
    libros = [
        {}
    ];

    constructor() {
    }

    ngOnInit() {
    }

    /*
      misdiscos=this.discos[0];
        borrarDisco(disco){

        }
    */

}




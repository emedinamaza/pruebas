/*

Las directivas dan funcionalidad, pueden cambiar el dom. Las templates de angular son dinámicas,
 cuando angular las renderiza transforma el dom en base a lo que encuentra en las directivas. Hay dos tipos:
    - Structural, que modifican el layout alterando elementos del DOM
    - Atributte, que cambian el compoartamiento o la apariencia del Dom que ya existe
Atributte directives customizadas

*/

import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
/*Creo el selector y le bindo la clase es-Favorita, añadiendole ademas el valor true
* luego en media component le paso el nombre del selector*/

    selector: '[favoritito]'
})
export class FavoriteDirective {

    @HostBinding('class.es-Favorita') esFavorita = true;



    /*hovering se usará para poder añadir o quitar la clase css */
    @HostListener('mouseenter') ratonEncima(){
        this.hovering = true;
    }
    @HostListener('mouseleave') ratonFuera(){
        this.hovering = false;
    }
    @HostBinding('class.es-Favorita-hovering') hovering = false;
    @Input() set favoritito(value){
        this.esFavorita=value;

    }
}




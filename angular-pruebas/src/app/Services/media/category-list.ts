import {Pipe} from '@angular/core';
@Pipe({
    name: 'categoryList',
    /*
    * Two properties available name and pure
    *  Pure  helps define if a pipe is stateless or statefull.
    *  a pure pipe means that the pipe will take in data, and will return data without any side effects, just like pure functions.
    *  If we dont add the pure property it measn that the pipe is stateless
    * */
 })
export class CategoryListPipe {

    /*
    * Cuando se llama al metodo*/

    transform(discos) {
        var categories = [];

        /*
        * recorre discos y por cada elemento en el que encuentra la categoria genero lo añade al nuevo array
        * */
        discos.forEach(papa => {
            if (categories.indexOf(papa.genero) <= -1) {
                categories.push(papa.genero);
            }
        });
        return categories.join(', ');

    }
}

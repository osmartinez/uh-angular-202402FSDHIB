import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divisa',
  standalone: true
})
export class DivisaPipe implements PipeTransform {

  transform(value: number): string {
    const idioma = navigator.language
    if(idioma=="es-ES"){
      return value+"€"
    }
    else{
      return (value * 1.07).toFixed(2)+"$"
    }
  }

}

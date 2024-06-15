import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divisa',
  standalone: true
})
export class DivisaPipe implements PipeTransform {

  // 200 -> $(valorConvertido)
  transform(value: number): string {
    const idioma = navigator.language

    if(idioma.includes("US")){
      return "$"+value
    }
    else{
      return "€"+(value *0.93).toFixed(2)
    }
    
  }

}

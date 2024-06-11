import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroNumeros',
  standalone: true
})
export class FiltroNumerosPipe implements PipeTransform {

  transform(value: number[], min: number, max: number): number[] {

    return value.filter(x=> min<=x && x <= max)
  }

}

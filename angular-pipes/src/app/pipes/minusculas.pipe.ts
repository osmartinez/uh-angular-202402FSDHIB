import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minusculas',
  standalone: true
})
export class MinusculasPipe implements PipeTransform {

  transform(value: string): string {
    return value.toLowerCase();
  }

}

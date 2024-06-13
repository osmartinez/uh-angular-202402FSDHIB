import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixToDate',
  standalone: true
})
export class UnixToDatePipe implements PipeTransform {

  transform(value: number): string {
    const fecha: Date = new Date(value*1000)
    return fecha.toLocaleDateString('es-ES')
  }

}

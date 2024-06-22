import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canCancel',
  standalone: true
})
export class CanCancelPipe implements PipeTransform {

  transform(value: string): boolean {
    return new Date(value)> new Date()
  }

}

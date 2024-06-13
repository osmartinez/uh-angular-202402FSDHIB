import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordEllipsis',
  standalone: true
})
export class WordEllipsisPipe implements PipeTransform {

  transform(value: string, length: number): string {
    if(value.length > length){
      return value.substring(0, length)+"..."
    }
    else{
      return value
    }
  }

}

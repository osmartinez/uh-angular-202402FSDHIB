import { Pipe, PipeTransform } from '@angular/core';
import { Vehicle } from '../interfaces/vehicle';

@Pipe({
  name: 'filterVehicles',
  standalone: true
})
export class FilterVehiclesPipe implements PipeTransform {

  transform(value: Vehicle[], filtro: string): Vehicle[] {
    return value.filter(x=> x.model.toLowerCase().includes(filtro) || x.brand.toLocaleLowerCase().includes(filtro))
  }

}

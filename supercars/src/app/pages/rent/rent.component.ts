import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../../interfaces/vehicle';
import { VehicleService } from '../../services/vehicle.service';
import { DivisaPipe } from '../../pipes/divisa.pipe';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-rent',
  standalone: true,
  imports: [DivisaPipe, ReactiveFormsModule],
  templateUrl: './rent.component.html',
  styleUrl: './rent.component.css',
})
export class RentComponent {
  parametro: string | null = null;
  vehicle: Vehicle | null = null;
  mostrarCodigoPromocional: boolean = false;
  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
    private builder: FormBuilder
  ) {
    this.form = builder.group({
      "fechaInicio": new FormControl(null, [Validators.required]),
      "fechaFin": new FormControl(null, [Validators.required]),
      "codigoPromocional": new FormControl(null, []),
    });

    route.paramMap.subscribe((params) => {
      this.parametro = params.get('id');
    });

    if (this.parametro !== null) {
      vehicleService.getById(this.parametro).subscribe({
        next: (response) => {
          this.vehicle = response as Vehicle;
        },
        error: () => {},
      });
    }
  }

 
 public get numDias() : number {
    const fechaini = new Date(this.form.value.fechaInicio) 
    const fechafin = new Date(this.form.value.fechaFin)

    const millisDif = fechafin.getTime() - fechaini.getTime()
    const dias = millisDif / 1000 / 60 / 60 / 24
    if(dias < 0){
      return 0
    }
    else{
      return dias
    }
 }
 
}

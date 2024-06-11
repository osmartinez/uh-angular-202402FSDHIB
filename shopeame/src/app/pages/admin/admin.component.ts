import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ProductComponent } from '../../components/product/product.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ProductComponent, ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  parametro: string|null = null
  product: Product|null = null
  form!: FormGroup 

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private builder: FormBuilder){

    route.paramMap.subscribe(param=>{
      this.parametro = param.get("id")
    })

    if(this.parametro === "nuevo"){
      this.product = {
        description: "",
        price: 0,
        id: 0,
        image: "",
        name: "",
        stars: 0,
      }
      this.construirFormulario(builder)
    }
    else{
      productService.getById(Number(this.parametro)).subscribe({
        next: (response)=>{
          this.product = response as Product
          this.construirFormulario(builder)
        },
        error: ()=>{}
      })
    }
  }

  construirFormulario(builder: FormBuilder){
    if(this.product){
      this.form = builder.group({
        "name": new FormControl(this.product.name, []) , 
        "description": new FormControl(this.product.description, []), 
        "price":new FormControl(this.product.price, []) , 
        "image": new FormControl(this.product.image, []), 
         "review": new FormControl(this.product.stars, [Validators.max(5), Validators.min(0)]), 
      })
    }
    
  }

  onCambioValoracion(){
    const stars = Number(this.form.value.review)
    if(this.product){
      this.product.stars = stars
    }
  }

  onCambioPrecio(){
    const precio = Number(this.form.value.price)
    if(this.product){
      this.product.price = precio
    }
  }

  onCambioImagen(){
    const img = this.form.value.image
    if(this.product){
      this.product.image = img
    }
  }
}

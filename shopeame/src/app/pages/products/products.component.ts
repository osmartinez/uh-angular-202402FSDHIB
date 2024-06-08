import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: Product[] = []

  constructor(private productService: ProductService){
    productService.getAll().subscribe({
      next: (response)=>{
        this.products = response as Product[]
      },
      error: ()=>{}
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Interfaces
import { Product } from 'src/app/interfaces/product';

// Services
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-enchufe-o-conector',
  templateUrl: './enchufe-o-conector.component.html',
  styleUrls: ['./enchufe-o-conector.component.css']
})
export class EnchufeOConectorComponent implements OnInit {
  public title: string = 'Enchufe o conector'
  public products: Product[] = [];
  private category: string = 'eoc';

  constructor( 
    private router: Router,
    private productsService: ProductsService
  ) { 
    this.products = productsService.getProducts( this.category );
  }

  ngOnInit(): void {
  }

  onProduct( product: Product ) {
    this.router.navigate([ '/producto', product.id ])
  }
}

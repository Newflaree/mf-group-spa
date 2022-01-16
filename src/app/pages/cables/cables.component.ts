import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Interfaces
import { Product } from 'src/app/interfaces/product';

// Services
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cables',
  templateUrl: './cables.component.html',
  styleUrls: ['./cables.component.css']
})
export class CablesComponent implements OnInit {
  public title: string = 'Cables'
  public products: Product[] = [];
  private category: string = 'cab';

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

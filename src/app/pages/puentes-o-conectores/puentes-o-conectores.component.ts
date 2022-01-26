import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Interfaces
import { Product } from 'src/app/interfaces/product';

// Services
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-puentes-o-conectores',
  templateUrl: './puentes-o-conectores.component.html',
  styleUrls: ['./puentes-o-conectores.component.css']
})
export class PuentesOConectoresComponent implements OnInit {
  public title: string = 'Puentes o conectores'
  public products: Product[] = [];
  private category: string = 'poc';

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

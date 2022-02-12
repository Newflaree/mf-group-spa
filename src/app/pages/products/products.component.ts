import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Interfaces
import { EstTech, Paragraph } from 'src/app/interfaces/product';
// Services
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public product: any;
  public espTech: EstTech[] = []; 
  public description: Paragraph[] = []; 

  constructor( 
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
  ) {  }

  ngOnInit(): void {
    this.onTopPage();
    const { id } =  this.activatedRoute.snapshot.params;
    const product = this.productsService.findById( id );

    this.product = product;
    this.espTech = product.espTech;
    this.description = product.description;
  }

  onTopPage() {
    window.scrollTo( 0, 0);
  }
}

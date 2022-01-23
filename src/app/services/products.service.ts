import { Injectable } from '@angular/core';

// Interfaces
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public productsData: Product[] = [];

  constructor() { 
    this.setItems();
  }
  
  findById( id: string ) {
    const filtered = this.productsData.filter( ( element: Product ) => {
      return element.id === id
    });

    return {
      id: filtered[0].id,
      categ: filtered[0].categ,
      name: filtered[0].name,
      url: filtered[0].url,
      desc: filtered[0].description,
      espTech: filtered[0].espTech
    };
  }

  getProducts( categ: string ) {
    const products = this.productsData.filter( ( element: Product ) => {
      return element.categ === categ;
    });

    return products;
  }

  setItems() {
    this.productsData = [
      // Enchufes o Conectores
      {
        id: '111001',
        categ: 'eoc',
        name: 'CONECTOR SB120',
        url: '../../assets/products/DIN 320 amp Hembra.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus quam id fringilla laoreet. Vivamus semper, justo a efficitur mollis, leo sapien sagittis ipsum, vitae laoreet erat velit at tortor. Etiam suscipit felis id magna blandit, sit amet finibus diam congue. Vivamus ac sem accumsan, rutrum tortor et, fermentum enim. ',
        espTech: [
	        { line: 'lalala' },
	        { line: 'lelele' },
	        { line: 'lilili' },
	        { line: 'lololo' },
	        { line: 'lalala' },
	        { line: 'lelele' },
	        { line: 'lilili' },
	        { line: 'lololo' },
        ],
      },
      {
        id: '111002',
        categ: 'eoc',
        name: 'CONECTOR SB350',
        url: '../../assets/products/DIN 320 amp Hembra.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus quam id fringilla laoreet. Vivamus semper, justo a efficitur mollis, leo sapien sagittis ipsum, vitae laoreet erat velit at tortor. Etiam suscipit felis id magna blandit, sit amet finibus diam congue. Vivamus ac sem accumsan, rutrum tortor et, fermentum enim. ',
        espTech: [
	        { line: 'lalala' },
	        { line: 'lelele' },
	        { line: 'lilili' },
	        { line: 'lilili' },
        ],
      },
      {
        id: '111003',
        categ: 'eoc',
        name: 'CONECTOR SB175',
        url: '../../assets/products/DIN 320 amp Hembra.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus quam id fringilla laoreet. Vivamus semper, justo a efficitur mollis, leo sapien sagittis ipsum, vitae laoreet erat velit at tortor. Etiam suscipit felis id magna blandit, sit amet finibus diam congue. Vivamus ac sem accumsan, rutrum tortor et, fermentum enim. ',
        espTech: [
	        { line: 'lalala' },
	        { line: 'lelele' },
	        { line: 'lilili' },
	        { line: 'lilili' },
        ],
      },
      {
        id: '111004',
        categ: 'eoc',
        name: 'CONECTOR PP30',
        url: '../../assets/products/DIN 320 amp Hembra.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus quam id fringilla laoreet. Vivamus semper, justo a efficitur mollis, leo sapien sagittis ipsum, vitae laoreet erat velit at tortor. Etiam suscipit felis id magna blandit, sit amet finibus diam congue. Vivamus ac sem accumsan, rutrum tortor et, fermentum enim. ',
        espTech: [
	        { line: 'lalala' },
	        { line: 'lelele' },
	        { line: 'lilili' },
	        { line: 'lilili' },
        ],
      },
      // Pernos
      {
        id: '222001',
        categ: 'per',
        name: 'Infiltrado',
        url: '../../assets/products/DIN 320 amp Hembra.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus quam id fringilla laoreet. Vivamus semper, justo a efficitur mollis, leo sapien sagittis ipsum, vitae laoreet erat velit at tortor. Etiam suscipit felis id magna blandit, sit amet finibus diam congue. Vivamus ac sem accumsan, rutrum tortor et, fermentum enim. ',
        espTech: [
	        { line: 'lalala' },
	        { line: 'lelele' },
	        { line: 'lilili' },
	        { line: 'lilili' },
        ],
      },
      {
        id: '222002',
        categ: 'per',
        name: 'Infiltrado',
        url: '../../assets/products/DIN 320 amp Hembra.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus quam id fringilla laoreet. Vivamus semper, justo a efficitur mollis, leo sapien sagittis ipsum, vitae laoreet erat velit at tortor. Etiam suscipit felis id magna blandit, sit amet finibus diam congue. Vivamus ac sem accumsan, rutrum tortor et, fermentum enim. ',
        espTech: [
	        { line: 'lalala' },
	        { line: 'lelele' },
	        { line: 'lilili' },
	        { line: 'lilili' },
        ],
      },
      // Puentes o Conectores
      {
        id: '333001',
        categ: 'poc',
        name: 'Infiltrado',
        url: '../../assets/products/DIN 320 amp Hembra.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus quam id fringilla laoreet. Vivamus semper, justo a efficitur mollis, leo sapien sagittis ipsum, vitae laoreet erat velit at tortor. Etiam suscipit felis id magna blandit, sit amet finibus diam congue. Vivamus ac sem accumsan, rutrum tortor et, fermentum enim. ',
        espTech: [
	        { line: 'lalala' },
	        { line: 'lelele' },
	        { line: 'lilili' },
	        { line: 'lilili' },
        ],
      },
      // Cables
      {
        id: '444001',
        categ: 'cab',
        name: 'Infiltra3',
        url: '../../assets/products/DIN 320 amp Hembra.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus quam id fringilla laoreet. Vivamus semper, justo a efficitur mollis, leo sapien sagittis ipsum, vitae laoreet erat velit at tortor. Etiam suscipit felis id magna blandit, sit amet finibus diam congue. Vivamus ac sem accumsan, rutrum tortor et, fermentum enim. ',
        espTech: [
	        { line: 'lalala' },
	        { line: 'lelele' },
	        { line: 'lilili' },
	        { line: 'lilili' },
        ],
      },
    ];
  }
}

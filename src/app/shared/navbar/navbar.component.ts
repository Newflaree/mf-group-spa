import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public productOptions = [
    {
      nameOption: 'Enchufe o Conector',
      routerLink: '/enchufe-o-conector'
    },
    {
      nameOption: 'Pernos',
      routerLink: '/pernos'
    },
    {
      nameOption: 'Puentes o Conectores',
      routerLink: '/puentes-o-conectores'
    },
    {
      nameOption: 'Cables',
      routerLink: '/cables'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toHome() {
    document.getElementById( 'home' )
  }

  showBox() {
    let productBox: HTMLElement | null = document.querySelector( '.products-box' );
    if ( !productBox ) {
      return;
    }
    
    productBox.classList.toggle( 'hidden' );
  }

  toAbout() {
    document.getElementById( 'about' )?.scrollIntoView({ behavior:'smooth' });
  }

  toContact() {
    document.getElementById( 'contact' )?.scrollIntoView({ behavior:'smooth' });
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styles: [
  ]
})
export class PageLoaderComponent implements OnInit {
  public loading: boolean;

  constructor() { 
    this.loading = true;
  }

  ngOnInit(): void {
    this.loaderHidden();
  }

  loaderHidden() {
    setTimeout( () => {
      const preloader = document.querySelector( '.preloader' );
      preloader?.classList.add( 'hidden' );
    }, 1500);
  }
}

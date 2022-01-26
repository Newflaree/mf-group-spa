import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageLoaderComponent } from './page-loader/page-loader.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PageLoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    PageLoaderComponent
  ]
})
export class SharedModule { }

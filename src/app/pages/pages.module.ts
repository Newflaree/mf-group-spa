import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

// Pages
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';
import { EnchufeOConectorComponent } from './enchufe-o-conector/enchufe-o-conector.component';
import { PernosComponent } from './pernos/pernos.component';
import { CablesComponent } from './cables/cables.component';
import { PuentesOConectoresComponent } from './puentes-o-conectores/puentes-o-conectores.component';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ProductsComponent,
    CategoriesComponent,
    AboutComponent,
    EnchufeOConectorComponent,
    PernosComponent,
    CablesComponent,
    PuentesOConectoresComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    RouterModule
  ],
  exports: [
    PagesComponent,
    HomeComponent,
    ProductsComponent,
    CategoriesComponent,
    AboutComponent,
  ]
})
export class PagesModule { }

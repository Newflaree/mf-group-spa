import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { EnchufeOConectorComponent } from './pages/enchufe-o-conector/enchufe-o-conector.component';
import { PernosComponent } from './pages/pernos/pernos.component';
import { PuentesOConectoresComponent } from './pages/puentes-o-conectores/puentes-o-conectores.component';
import { CablesComponent } from './pages/cables/cables.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent  },
  { path: 'about', component: HomeComponent  },
  { path: 'contact', component: HomeComponent  },
  { path: 'enchufe-o-conector', component: EnchufeOConectorComponent  },
  { path: 'pernos', component: PernosComponent  },
  { path: 'puentes-o-conectores', component: PuentesOConectoresComponent  },
  { path: 'cables', component: CablesComponent  },
  { path: 'producto/:id', component: ProductsComponent },
  { path: '**', redirectTo: '/home' },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouingModule { }

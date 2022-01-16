import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ProductCardComponent } from './product-card/product-card.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { WsppBtnComponent } from './wspp-btn/wspp-btn.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    WsppBtnComponent,
    SlideshowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductCardComponent,
    WsppBtnComponent,
    SlideshowComponent
  ]
})
export class ComponentsModule { }

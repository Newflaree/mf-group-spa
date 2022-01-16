import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Routing
import { AppRouingModule } from './app-routing.module';

// Modules
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

// Components
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';



@NgModule({
  declarations: [
    AppComponent,
    NotPageFoundComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    SharedModule,
    ComponentsModule,
    AppRouingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

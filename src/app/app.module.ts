import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { PrimaryNavComponent } from './shared/navigations/primary-nav/primary-nav.component';
import { HomeComponent } from './modules/dashboard/home/home.component';
import { CatalogComponent } from './modules/catalog/catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryNavComponent,
    HomeComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

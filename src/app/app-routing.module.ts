import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/dashboard/home/home.component';
import { CatalogComponent } from './modules/catalog/catalog.component';

const routes: Routes = [
  { path: 'dashboard', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'authentification', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'authentification', loadChildren: './authentification/authentification.module#AuthentificationPageModule' },
  { path: 'list/:name', loadChildren: './list/list.module#ListPageModule' },
  { path: 'detail', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'favoris', loadChildren: './favoris/favoris.module#FavorisPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

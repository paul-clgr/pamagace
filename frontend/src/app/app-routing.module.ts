import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent} from "./accueil/accueil.component";
import { PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: '**', component: PageNotFoundComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

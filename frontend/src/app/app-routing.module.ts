import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RecommandationsComponent} from "./components/recommandations/recommandations.component";
import {AccueilComponent} from "./pages/accueil/accueil.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {RechercheComponent} from "./pages/recherche/recherche.component";

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'recommandation', component: RecommandationsComponent},
  { path: 'recherche', component: RechercheComponent},
  { path: '**', component: PageNotFoundComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

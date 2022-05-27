import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RecommandationsComponent} from "./components/recommandations/recommandations.component";
import {AccueilComponent} from "./pages/accueil/accueil.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";

import {RechercheComponent} from "./pages/recherche/recherche.component";
import {VisuMaisonComponent} from "./pages/visu-maison/visu-maison.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {AuthGuard} from "./auth/auth.guard";
import {LoginComponent} from "./pages/login/login.component";
import {UserComponent} from "./components/user/user.component";
import {UserFormComponent} from "./components/user-form/user-form.component";
import {InboxComponent} from "./pages/inbox/inbox.component";
import {PageProfilComponent} from "./pages/page-profil/page-profil.component";
import {HouseFormComponent} from "./components/house-form/house-form.component";
import {CriteriaFormComponent} from "./components/criteria-form/criteria-form.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: AccueilComponent},
  { path: 'recommendation', component: RecommandationsComponent},
  { path: 'research', component: RechercheComponent},
  { path: 'visualhouse', component: VisuMaisonComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signin', component:UserFormComponent},
  {path: 'addHouse', component:HouseFormComponent},
  {path: 'addCriteria', component:CriteriaFormComponent},
  {path: 'user', component:UserComponent},
  {path: 'profile', component:PageProfilComponent},
  {path: 'inbox', component: InboxComponent},
  {
    path: 'admin', component: AdminComponent,
    canActivate: [AuthGuard], data: {role: 'ADMIN'}
  },
  { path: '**', component: PageNotFoundComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

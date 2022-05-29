import {NgModule} from '@angular/core';
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
import {AffichageMaisonComponent} from "./components/affichage-maison/affichage-maison.component";
import {LogoutComponent} from "./components/logout/logout.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: AccueilComponent},
  {path: 'login', component: LoginComponent},
  {path: 'inscription', component: UserFormComponent},
  {path: 'logout', component: LogoutComponent},

  {path: 'house/:id', component: AffichageMaisonComponent},

  {
    path: 'addHouse', component: HouseFormComponent,
    canActivate: [AuthGuard], data: {role: 'ADMIN'}
  },

{
    path: 'addHouse/:id', component: HouseFormComponent,
    canActivate : [AuthGuard], data: {role: 'ADMIN'}
},
  {path: 'profil', component: PageProfilComponent,
    canActivate: [AuthGuard], data: {role: 'ADMIN'}},

  {
    path: 'admin/users', component: UserComponent,
    canActivate: [AuthGuard], data: {role: 'ADMIN'}
  },
  {
    path: 'admin/addCriteria', component: CriteriaFormComponent,
    canActivate: [AuthGuard], data: {role: 'ADMIN'}
  },
  {
    path: 'admin', component: AdminComponent,
    canActivate: [AuthGuard], data: {role: 'ADMIN'}
  }, 
  {path: 'recherche', component: RechercheComponent},
  {path: '**', component: PageNotFoundComponent},


  //{path: 'recommendation', component: RecommandationsComponent},
 
  //{path: 'visualhouse', component: VisuMaisonComponent},
  //{path: 'user', component: UserComponent},

  //{path: 'inbox', component: InboxComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

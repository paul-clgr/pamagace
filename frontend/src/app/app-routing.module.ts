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
import { ReservationPageComponent } from './pages/reservation-page/reservation-page.component';
import {UserFormComponent} from "./components/user-form/user-form.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: AccueilComponent},
  { path: 'recommandation', component: RecommandationsComponent},
  { path: 'recherche', component: RechercheComponent},
  { path: 'visumaison', component: VisuMaisonComponent},
  {path: 'login', component:LoginComponent},
  {path: 'sighin', component:UserFormComponent},
  {path: 'user', component:UserComponent},
  {path: 'reservation', component:ReservationPageComponent},
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

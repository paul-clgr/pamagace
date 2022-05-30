import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from "@angular/material/slider";
import { MatToolbarModule } from '@angular/material/toolbar'; //module pour le header
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon'; //icons pour le site
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AppRoutingModule } from './app-routing.module';
import { RechercheFormComponent } from './components/recherche-form/recherche-form.component';
import { RecommandationsComponent } from './components/recommandations/recommandations.component';
import { RechercheListComponent } from './components/recherche-list/recherche-list.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { RechercheComponent } from './pages/recherche/recherche.component';
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { VisuMaisonComponent } from './pages/visu-maison/visu-maison.component';
import { AffichageMaisonComponent } from './components/affichage-maison/affichage-maison.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './components/user/user.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { ReservationComponent } from './components/reservation/reservation.component';
import { ReservationPageComponent } from './pages/reservation-page/reservation-page.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { HouseCardComponent } from './components/house-card/house-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagerieComponent } from './pages/messagerie/messagerie.component';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    RechercheFormComponent,
    RecommandationsComponent,
    RechercheListComponent,
    AccueilComponent,
    RechercheComponent,
    VisuMaisonComponent,
    AffichageMaisonComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    ReservationComponent,
    ReservationPageComponent,
    UserFormComponent,
    HouseCardComponent,
    MessagerieComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    IvyCarouselModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatToolbarModule]
})
export class AppModule { }

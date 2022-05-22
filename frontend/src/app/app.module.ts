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
    AffichageMaisonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    IvyCarouselModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatToolbarModule]
})
export class AppModule { }

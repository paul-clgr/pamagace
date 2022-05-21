import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from "@angular/material/slider";
import { MatToolbarModule } from '@angular/material/toolbar'; //module pour le header
import { MatSidenavModule } from '@angular/material/sidenav';
import { AccueilComponent } from './accueil/accueil.component'; //module pour le footer
import {MatIconModule} from '@angular/material/icon'; //icons pour le site
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { RechercheComponent } from './recherche/recherche.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RechercheFormComponent } from './components/recherche-form/recherche-form.component';
import { RecommandationsComponent } from './components/recommandations/recommandations.component';
import { RechercheListComponent } from './components/recherche-list/recherche-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    RechercheComponent,
    PageNotFoundComponent,
    RechercheFormComponent,
    RecommandationsComponent,
    RechercheListComponent
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

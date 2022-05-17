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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatToolbarModule]
})
export class AppModule { }

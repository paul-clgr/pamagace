import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  titleHeader!: string;
  titleLogo!: string;
  //imageLogo!: string;
  //imageMess!: string;
  //imagePDP!: string;

  constructor(private router: Router) {
  }
  ngOnInit() {
    this.titleHeader= 'Home Exchange';
    this.titleLogo= 'Logo';
    //this.imageLogo= 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';

  }

  toHome(){
    this.router.navigate(['/home']);
  }

  toProfil(){
    this.router.navigate(['/login']);
  }

  toForum(){
    this.router.navigate(['/messagerie']);
  }

}



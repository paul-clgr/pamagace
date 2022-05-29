import {Component, OnChanges, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges  {
  titleHeader!: string;
  titleLogo!: string;
  isLoggedIn!:boolean;
  role!: string |null;
  username!: string|null;

  //imageLogo!: string;
  //imageMess!: string;
  //imagePDP!: string;

  constructor(private router: Router, private authService : AuthService) {
  }
  ngOnInit() {
    this.titleHeader= 'Home Exchange';
    this.titleLogo= 'Logo';
    //this.imageLogo= 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';

    this.isLoggedIn = this.authService.isLoggedIn();
    if(this.isLoggedIn){
      this.username = localStorage.getItem('USERNAME');
      this.role = localStorage.getItem('ROLE');
    }

  }

  ngOnChanges(){
    this.isLoggedIn = this.authService.isLoggedIn();
    if(this.isLoggedIn){
      this.username = localStorage.getItem('USERNAME');
      this.role = localStorage.getItem('ROLE');
    }

  }

  toHome(){
    this.router.navigate(['/home']);
  }

  toProfil(){
    this.router.navigate(['/profil']);
  }

  toForum(){
    this.router.navigate(['/messagerie']);
  }

  toAddhouse(){
    this.router.navigate(['/addHouse']);
  }
  toReservation(){
    this.router.navigate(['/reservation']);
  }
  toEditProfil(){
    this.router.navigate(['/edit']);
  }
  toUsers(){
    this.router.navigate(['/admin/users']);
  }
  toHouses(){
    this.router.navigate(['/admin/houses']);
  }
  toCriterias(){
    this.router.navigate(['/admin/criterias']);
  }
  toLogout(){
    this.router.navigate(['/logout']);
  }

}



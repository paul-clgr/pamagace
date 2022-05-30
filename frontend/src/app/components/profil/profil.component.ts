import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  photoProf!: string;
  username!: string|null;


  constructor() { }

  ngOnInit(): void {
    this.photoProf = "https://thumbs.dreamstime.com/b/ic%C3%B4ne-noire-solide-d-avatar-de-profil-utilisateur-134114292.jpg";
    this.username = localStorage.getItem('USERNAME');

  }

}

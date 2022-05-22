import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  photoProf!: string;
  nom!: string;
  photoM1!: string;
  photoM2!: string;
  photoM3!: string;
  photoM4!: string;

  constructor() { }

  ngOnInit(): void {
    this.photoProf = "https://thumbs.dreamstime.com/b/ic%C3%B4ne-noire-solide-d-avatar-de-profil-utilisateur-134114292.jpg";
    this.nom = "Jean Dupont";
    this.photoM1 = "https://q-xx.bstatic.com/images/hotel/max1024x768/750/75006837.jpg";
    this.photoM2 = "https://photo.barnes-international.com/annonces/bms/111/xl/17181965645f219d33ac0973.31884369_a6028841d1_1920.jpg";
    this.photoM3 = "https://www.book-a-flat.com/photo/paris/8928/chambre.jpg";
    this.photoM4 = "https://www.book-a-flat.com/magazine/wp-content/uploads/2018/12/salon-salle-a-manger-cuisine-ouverte-appartement-meuble-paris-Trocadero-481x321.jpg";

  }

}

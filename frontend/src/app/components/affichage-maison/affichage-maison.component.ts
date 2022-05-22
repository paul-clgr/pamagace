import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affichage-maison',
  templateUrl: './affichage-maison.component.html',
  styleUrls: ['./affichage-maison.component.css']
})
export class AffichageMaisonComponent implements OnInit {

  titreMaison!: string;
  note!: string;
  adresse!: string;
  photo1!: string;
  photo2!: string;
  photo3!: string;
  photo4!: string;
  recapLgmt!: string;
  condition1!: string;
  condition2!: string;
  condition3!: string;
  limite1!: string;
  limite2!: string;
  limite3!: string;
  recapComm!: string;

  constructor() { }

  ngOnInit(): void {
    this.titreMaison = "Park House";
    this.note = "5";
    this.adresse = "3 rue Jean Dunand, 75013, Paris";
    this.photo1 = "https://q-xx.bstatic.com/images/hotel/max1024x768/750/75006837.jpg";
    this.photo2 = "https://photo.barnes-international.com/annonces/bms/111/xl/17181965645f219d33ac0973.31884369_a6028841d1_1920.jpg";
    this.photo3 = "https://www.book-a-flat.com/photo/paris/8928/chambre.jpg";
    this.photo4 = "https://www.book-a-flat.com/magazine/wp-content/uploads/2018/12/salon-salle-a-manger-cuisine-ouverte-appartement-meuble-paris-Trocadero-481x321.jpg";
    this.recapLgmt = "Apartment in Paris - 2 rooms";
    this.condition1 = "Water the plants !";
    this.condition2 = "Feed the fish !";
    this.condition3 = "Aerate the apartment";
    this.limite1 = "Don't smoke in the house !";
    this.limite2 = "You can't bring more people into the house.";
    this.limite3 = "Don't stain the carpet !";
    this.recapComm = "Order summary: ";
  }

}

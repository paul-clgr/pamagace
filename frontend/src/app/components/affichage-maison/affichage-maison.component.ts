import {Component, OnInit} from '@angular/core';
import {House} from "../../models/house";
import {CriteriaService} from "../../services/criteria.service";
import {HouseService} from "../../services/house.service";
import {map, Observable, switchMap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Criteria} from "../../models/criteria";

@Component({
  selector: 'app-affichage-maison',
  templateUrl: './affichage-maison.component.html',
  styleUrls: ['./affichage-maison.component.css']
})
export class AffichageMaisonComponent implements OnInit {
  id!: string | null;
  note!: string;
  photo1!: string;
  photo2!: string;
  photo3!: string;
  photo4!: string;
  description!: string;
  recapComm!: string;

  house!: House;
  error!: string;
  conditions: Criteria[] = [];
  limites: Criteria[] = [];

  constructor(private activatedRoute: ActivatedRoute, private houseService: HouseService) {

  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    let test = this.houseService.getHousebyId(this.id).subscribe({
        next: house => {
          this.house = house;
          this.getConditions();
        },
        error: error => this.error = error

      }
    )

    this.note = "5";
    this.photo1 = "https://q-xx.bstatic.com/images/hotel/max1024x768/750/75006837.jpg";
    this.photo2 = "https://photo.barnes-international.com/annonces/bms/111/xl/17181965645f219d33ac0973.31884369_a6028841d1_1920.jpg";
    this.photo3 = "https://www.book-a-flat.com/photo/paris/8928/chambre.jpg";
    this.photo4 = "https://www.book-a-flat.com/magazine/wp-content/uploads/2018/12/salon-salle-a-manger-cuisine-ouverte-appartement-meuble-paris-Trocadero-481x321.jpg";
    this.recapComm = "Order summary: ";
  }

  getConditions(): void {
    let criterias = this.house.criterias;
    // @ts-ignore
    for (let criteria of criterias) {
      if (criteria.category == "condition") {
        this.conditions.push(criteria);
      }
      if (criteria.category == "limite") {
        this.limites.push(criteria);
      }
    }
  }
}

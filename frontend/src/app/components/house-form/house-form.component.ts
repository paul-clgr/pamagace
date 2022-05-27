import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HouseService} from "../../services/house.service";
import {Router} from "@angular/router";
import {House} from "../../models/house";
import {Criteria} from "../../models/criteria";
import {CriteriaService} from "../../services/criteria.service";
import {MatChip} from "@angular/material/chips";

@Component({
  selector: 'app-house-form',
  templateUrl: './house-form.component.html',
  styleUrls: ['./house-form.component.css']
})
export class HouseFormComponent implements OnInit {
  id!: number;
  adress!:string;
  bedrooms!:number;
  city!:string;
  description!:string;
  type!:string;
  idUser!:number;
  criterias!: Criteria[];
  idCriterias!: number[];

  types: string[] = ['House', 'Apartment'];

  house !: House;
  error !: string;


  constructor(private houseService: HouseService, private router: Router, private criteriaService: CriteriaService) { }

  ngOnInit(): void {
    this.criteriaService.getCriterias().subscribe({
      next: criterias =>this.criterias = criterias,
      error: error => this.error = error
    }
    )
  }

  add(addHomeForm: NgForm) {
    let newHouse = addHomeForm.value;
    newHouse.idUser= 6; // TODO a recuperer avec identification
    this.houseService.addHouse(newHouse).subscribe({
      next: house =>this.house = house,
      error: error => this.error=error
    })

  }
/*
  toggleSelection(chip: MatChip) {
    chip.toggleSelected();
  }
*/

}

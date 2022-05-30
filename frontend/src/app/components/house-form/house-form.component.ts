import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HouseService} from "../../services/house.service";
import {ActivatedRoute, Router} from "@angular/router";
import {House} from "../../models/house";
import {Criteria} from "../../models/criteria";
import {CriteriaService} from "../../services/criteria.service";
import {MatChip} from "@angular/material/chips";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-house-form',
  templateUrl: './house-form.component.html',
  styleUrls: ['./house-form.component.css']
})
export class HouseFormComponent implements OnInit {
  id!: string | null;
  adress!:string;
  bedrooms!:number;
  city!:string;
  description!:string;
  type!:string;
  idUser!:number;
  criterias?: Criteria[];
  idCriterias!: number[];
  user!: User;

  types: string[] = ['House', 'Apartment'];

  house !: House;
  error !: string;

  update:boolean=false;

  constructor(private houseService: HouseService, private router: Router, private criteriaService: CriteriaService, private userService: UserService,private activatedRoute: ActivatedRoute,private criteriaService: CriteriaService) { }


  ngOnInit(): void {
    this.criteriaService.getCriterias().subscribe({
      next: criterias =>this.criterias = criterias,
      error: error => this.error = error
    }
    );
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    if (this.id){
      this.update=true;
      console.log(this.getHouseValues(this.id));
    }
  }

  add(addHomeForm: NgForm) {
    let newHouse = addHomeForm.value;
    const name = localStorage.getItem('USERNAME')
    if (name!=null) {
      this.userService.getUser(name).subscribe({
        next: user => {
          console.log(user.iduser);
          newHouse.idUser = user.iduser;
          console.log(newHouse)
          this.houseService.addHouse(newHouse).subscribe({
            next: house => {this.house = house
            this.router.navigate(['/profil'])},
            error: error => this.error = error
          })
        }
      })
    }
  }
/*
  toggleSelection(chip: MatChip) {
    chip.toggleSelected();
  }
*/

  getHouseValues(id:string){
    let res = this.houseService.getHousebyId(id).subscribe({
      next: house => {
        this.house = house;
        // this.getConditions();
        this.description=this.house.description;
        this.type=this.house.type;
        this.city=this.house.city;
        this.bedrooms=this.house.bedrooms;
        // this.idCriterias=this.house.idCriterias;
        this.adress=this.house.adress;
      },
      error: error => this.error = error

      })

  }

}

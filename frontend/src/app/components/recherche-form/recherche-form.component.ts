import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {NgForm} from "@angular/forms";
import { Router } from '@angular/router';
import { Criteria } from 'src/app/models/criteria';
import { House } from 'src/app/models/house';
import { CriteriaService } from 'src/app/services/criteria.service';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-recherche-form',
  templateUrl: './recherche-form.component.html',
  styleUrls: ['./recherche-form.component.css']
})
export class RechercheFormComponent implements OnInit {

  city!:string;
  date!:string;
  bedrooms!: number;
  category!: string;
  criterias?: Criteria[];
  idCriterias!: number[];

  error !: string;

  @Output() dataEvent = new EventEmitter<House[]>();
  data!: House[];

  constructor(private http: HttpClient, private houseService: HouseService, private criteriaService: CriteriaService, private router: Router) { }

  ngOnInit(): void {
    this.criteriaService.getCriterias().subscribe({
      next: criterias =>this.criterias = criterias,
      error: error => this.error = error
    }
    );
  }

  search(searchForm: NgForm) {

    let criteria = searchForm.value;
    console.log(criteria);
    this.houseService.getHouseByCriteria(criteria).subscribe(data=>{this.data=data; this.dataEvent.emit(this.data);});
    this.router.navigate(['/recherche']);
    

  }

  // console(){
  //   console.log("form");
  //   this.dataEvent.emit(this.data);
  //   console.log(this.data);
  // }
}

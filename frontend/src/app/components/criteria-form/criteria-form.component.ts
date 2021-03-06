import { Component, OnInit } from '@angular/core';
import {Criteria} from "../../models/criteria";
import {CriteriaService} from "../../services/criteria.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-criteria-form',
  templateUrl: './criteria-form.component.html',
  styleUrls: ['./criteria-form.component.css']
})
export class CriteriaFormComponent implements OnInit {

  id!: number;
  name!:string;
  description!:string;
  category!:string;
categories: string[] = ['Condition', 'Limite'];

  criteria!:Criteria;
  error!:string;

  constructor(private criteriaService: CriteriaService, private router:Router) { }

  ngOnInit(): void {
  }

  add(addCriteriaForm: NgForm){
    let newCriteria = addCriteriaForm.value;
    console.log(newCriteria);
    this.criteriaService.addCriteria(newCriteria).subscribe({
      next: criteria =>{this.criteria = criteria;
        this.router.navigate(['/admin/criterias']);
      },
      error: error => this.error=error
    })
  }

}

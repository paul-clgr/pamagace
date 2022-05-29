import { Component, OnInit } from '@angular/core';
import {Criteria} from "../../models/criteria";
import {CriteriaService} from "../../services/criteria.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-creiteria-list',
  templateUrl: './creiteria-list.component.html',
  styleUrls: ['./creiteria-list.component.css']
})
export class CreiteriaListComponent implements OnInit {

  public criterias!: Criteria[];
  private error: string | undefined;
  displayedColumns!: string[];


  constructor(private criteriaService : CriteriaService, private router:Router) { }

  ngOnInit(): void {
    this.criteriaService.getCriterias().subscribe({
      next: criterias => {this.criterias = criterias;
    },
      error: error => this.error = error
  }
    )
    this.displayedColumns = ['name', 'description', 'category',' '];
  }

  toAddCriteria(){
    this.router.navigate(['/admin/addCriteria'])
  }

  deleteCriteria(id:number){
    this.criteriaService.deleteCriteriabyId(id).subscribe({
      next: data =>this.criteriaService.getCriterias().subscribe({
        next: criterias => {this.criterias = criterias;
        },
        error: error => this.error = error
      }),
      error: error=>this.error = error});
    }


}

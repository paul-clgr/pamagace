import {Component, OnInit} from '@angular/core';
import {House} from "../../models/house";
import {HouseService} from "../../services/house.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {

  public houses!: House[];
  private error: string | undefined;
  displayedColumns!: string[];
  username!:string|null;

  constructor(private houseService: HouseService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.router.url.endsWith('/houses') || this.router.url.endsWith('/admin')){
    this.houseService.getAllHouse().subscribe({
        next: houses => {
          this.houses = houses;
        },
        error: error => this.error = error
      }
    )}else{
       this.username = localStorage.getItem('USERNAME');
      this.houseService.getHousesByOwner(this.username).subscribe({
          next: houses => {
            this.houses = houses;
          },
          error: error => this.error = error
        }
      )
    }
    this.displayedColumns = ['username', 'adress', 'city', 'bedrooms', ' '];

  }

  toAddHouse() {
    this.router.navigate(['addHouse']);
  }

  deleteHouse(id: number) {
    this.houseService.deleteHousebyId(id).subscribe({
      next: data => this.houseService.getAllHouse().subscribe({
        next: houses => {
          this.houses = houses;
        },
        error: error => this.error = error
      }),
      error: error => this.error = error
    });

  }

  getHouse(id: number){
    this.router.navigate(['house/'+id])
  }

}

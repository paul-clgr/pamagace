import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { House } from 'src/app/models/house';

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.css']
})
export class HouseCardComponent implements OnInit, OnChanges {

  constructor(private router: Router) { }
  
  @Input() data!: House[];

  ngOnInit(): void {

    console.log(this.data)
  }

  ngOnChanges(changes:SimpleChanges): void {

    console.log("card");
    console.log(this.data);
    
  }

  toHouse(id:any){
    this.router.navigate(['/house/'+id]);
  }

}

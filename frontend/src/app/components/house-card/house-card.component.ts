import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { House } from 'src/app/models/house';

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.css']
})
export class HouseCardComponent implements OnInit, OnChanges {

  constructor() { }
  
  @Input() data!: House[];

  ngOnInit(): void {

    console.log(this.data)
  }

  ngOnChanges(changes:SimpleChanges): void {

    console.log(this.data)
    
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recherche-list',
  templateUrl: './recherche-list.component.html',
  styleUrls: ['./recherche-list.component.css']
})
export class RechercheListComponent implements OnInit {

  filtre1!: string;
  filtre2!: string;
  filtre3!: string;
  filtre4!: string;
  descriptionM1!: string;
  descriptionM2!: string;
  descriptionM3!: string;

  constructor() { }

  ngOnInit(): void {
    this.filtre1 = 'Beach';
    this.filtre2 = 'Mountain';
    this.filtre3 = 'Cabin in the woods';
    this.filtre4 = 'Castle';
    this.descriptionM1 = 'Paris, France ; 2 rooms, 20-25th june ; 30€ per night';
    this.descriptionM2 = 'Issy-les-Moulineaux, France ; 1 rooms, 21-26th june ; 50€ per night';
    this.descriptionM3 = 'Paris, France ; 2 rooms, 18-23th june ; 60€ per night';

  }

}

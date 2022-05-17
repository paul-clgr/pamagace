import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  destination!: string;
  date!: string;
  voyageurs!: string;
  presentation1!:string;
  presentation2!:string;

  constructor() { }

  ngOnInit(): void {
    this.destination='';
    this.date='';
    this.voyageurs='';
    this.presentation1='Where do you want to go next?'
    this.presentation2='Our best houses:'
  }

}

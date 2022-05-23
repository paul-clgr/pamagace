import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-recherche-form',
  templateUrl: './recherche-form.component.html',
  styleUrls: ['./recherche-form.component.css']
})
export class RechercheFormComponent implements OnInit {

  city!:string;
  date!:string;
  room!: number;
  category!: string;

  constructor() { }

  ngOnInit(): void {
  }

  search(searchForm: NgForm) {

  }
}

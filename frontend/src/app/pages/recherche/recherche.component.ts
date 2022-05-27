import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RechercheFormComponent } from 'src/app/components/recherche-form/recherche-form.component';
import { House } from 'src/app/models/house';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {




  data!: House[];

  constructor() { }
  

  ngOnInit(): void {
  }

  receiveData($event: House[]) {
    this.data = $event
  }
  console(){
    console.log("recherche");
    console.log(this.data);
  }
  

}

import { Component, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  presentationFooter!: string;
  liens!: string;

  constructor() { }

  ngOnInit(): void {
    this.presentationFooter= 'You can contact us thanks to the following links: ';
    this.liens= '';


  }

}

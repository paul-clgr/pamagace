import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  nomPers!: string;
  msgPers!: string;

  constructor() { }

  ngOnInit(): void {
    this.nomPers = 'John Cena';
    this.msgPers = 'Hello ! I  am really insterested by your house !';
  }

}

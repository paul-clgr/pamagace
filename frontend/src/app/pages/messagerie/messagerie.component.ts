import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MessagerieService } from 'src/app/services/messagerie.service';
import {Message} from "../../models/message";
import {FormGroup, NgForm, FormControl,Validators} from "@angular/forms";

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {
  userID!: number;
  userAnswer!:number;

  messageList!: Message[];
  error !: string;

  isHidden = true;

  displayedColumns: string[] = ['id_user_sender', 'message'];

  messageForm!: FormGroup;

  constructor( private messagerieService : MessagerieService) {
    this.messageForm = new FormGroup({
      'message': new FormControl('', { validators: [Validators.required] })
    });
   }

  ngOnInit(): void {
    this.userID = 1;
    this.messagerieService.getMessages(this.userID).subscribe({
      next: messages => this.messageList = messages,
      error: error => this.error = error
    }
    )

  }

  answer(idUser:number): void {
    this.isHidden = false;
    this.userAnswer = idUser;
    console.log(this.userAnswer)
  }

  postMessage(): void {
    this.messagerieService.postMessage(this.messageForm.controls['message'].value, this.userAnswer);
  }

}

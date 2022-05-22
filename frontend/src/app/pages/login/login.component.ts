import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  hide = true;

  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    console.log(form.value)


  }
}

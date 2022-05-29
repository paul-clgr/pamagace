import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, tap, throwError} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  hide = true;

  constructor(private userService: UserService, private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    console.log(form.value)
    this.http.post("http://localhost:8080/login", {
      "username": form.value.username,
      "password": form.value.password
    }).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}

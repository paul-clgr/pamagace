import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, tap, throwError} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  hide = true;

  constructor(private userService: UserService, private http: HttpClient, private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    console.log(form.value)
    const username = form.value.username;
    const password = form.value.password;
    let res = this.authService.getConnexion(username, password).subscribe({
        next: data => {
          console.log(data);
          this.authService.login(data.username, data.role);
        }

      })
    ;
    //this.router.navigate(['/users']);
  }


}

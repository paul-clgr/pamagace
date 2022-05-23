import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  username!: string;
  firstname!: string;
  lastname!: string;
  emailadress!: string;
  password!: string;
  birthday!:string;

  hide = true;
  user !: User;
  error !: string;

  constructor(private http: HttpClient, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  signIn(form: NgForm) {
    let newUser = form.value;
      this.userService.addUser(newUser).subscribe({
        next: user => this.user = user,
        error: error => this.error = error
      })
    this.router.navigate(['/home']);
  }
}

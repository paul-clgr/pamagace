import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";

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

  usernameupdate?: string|null;

  hide = true;
  user !: User;
  error !: string;
  role!: string;

  constructor(private http: HttpClient, private userService: UserService, private router: Router, private authService: AuthService, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.usernameupdate = this.activatedRoute.snapshot.paramMap.get('username');
    if (this.usernameupdate){
      this.getUserValues(this.usernameupdate);
    }
  }

  signIn(form: NgForm) {
    let newUser = form.value;
    if (this.router.url.endsWith('/admin/addadmin')){
      this.userService.addAdmin(newUser).subscribe({
        next: user => {this.user = user;
          this.router.navigate(['/admin/users'])},
        error: error => this.error = error
      })
    }else {

      this.userService.addUser(newUser).subscribe({
        next: user => {this.user = user
          this.authService.getConnexion(newUser.username, newUser.password).subscribe({ next: data => {
            this.authService.login(data.username, data.role);
            this.router.navigate(['']);
          } })
        },
        error: error => this.error = error
      })
    }
  }

  getUserValues(username:string){
    let res = this.userService.getUser(username).subscribe({
      next: user => {
        this.username=user.username;
        this.firstname=user.firstname;
        this.lastname=user.lastname;
        this.emailadress=user.emailadress;
        this.birthday=user.birthday.substring(0,10);
        console.log(user.birthday, this.birthday);
      },
      error: error => this.error = error

      })
  }
}

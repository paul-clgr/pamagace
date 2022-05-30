import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users!: User[];
  private error: string | undefined;
  displayedColumns!: string[];

  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: users => {this.users = users;
      },
      error: error => this.error = error
    }
    )
    this.displayedColumns = ['username', 'firstname', 'lastname', 'emailadress', 'role',' '];
  }

toAdd():void{
this.router.navigate(['/admin/addadmin']);
}

  deleteUser(id:number) {
    this.userService.deleteUserbyId(id).subscribe({next: data => this.userService.getUsers().subscribe({
          next: users => {this.users = users;
          },
          error: error => this.error = error
        }
      ),
      error: error=>this.error = error});
  }
}

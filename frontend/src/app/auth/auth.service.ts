import {Injectable} from '@angular/core';
import {catchError, Observable, of, tap, throwError} from "rxjs";
import {User} from "../models/user";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = false;
  username: string | undefined | null;
  roleAs!: string | null;
  authorization!: string;

  constructor(private http: HttpClient) {
  }

  login(username: string, role: string) {
    this.isLogin = true;
    this.roleAs = role;
    this.username = username;
    localStorage.setItem('STATE', 'true');
    localStorage.setItem('ROLE', this.roleAs);
    localStorage.setItem('USERNAME', this.username);
    localStorage.setItem('TOKEN', this.authorization);
    return of({success: this.isLogin, role: this.roleAs, username: this.username});
  }

  logout() {
    this.isLogin = false;
    this.roleAs = '';
    localStorage.setItem('STATE', 'false');
    localStorage.setItem('ROLE', '');
    localStorage.setItem('USERNAME', '');
    localStorage.setItem('TOKEN', '');
    return of({success: this.isLogin, role: ''});
  }

  isLoggedIn() {
    const loggedIn = localStorage.getItem('STATE');
    if (loggedIn == 'true')
      this.isLogin = true;
    else
      this.isLogin = false;
    return this.isLogin;
  }

  getRole() {
    this.roleAs = localStorage.getItem('ROLE');
    return this.roleAs;
  }

  getUsername() {
    this.username = localStorage.getItem('USERNAME');
    return this.username;
  }

  getConnexion(username: string, password: string): Observable<any> {
    this.authorization = btoa(username + ':' + password);
    const header = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + btoa(username + ':' + password),
      })
    }
    return this.http.get("http://localhost:8080/api/public/login", header).pipe(tap(text => console.log(text)), catchError(this.handleError));

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

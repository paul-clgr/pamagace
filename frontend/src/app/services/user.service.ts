import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http"
import {catchError, Observable, tap, throwError} from "rxjs";
import {User} from "../models/user";
import {NgForm} from "@angular/forms";
import {stringify} from "@angular/compiler/src/util";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<User>{
    return this.http.get<User>('http://localhost:8080/api/public/user/admin').pipe(
      tap(user=> console.log('user: ', user)),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse){
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
     console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  addUser(user: User): Observable<User>{
      return this.http.post<User>('http://localhost:8080/api/public/addUser', {
        "username": user.username,
        "firstname": user.firstname,
        "lastname": user.lastname,
        "emailadress": user.emailadress,
        "password": user.password,
        "birthday": user.birthday
      }).pipe(
        tap(user=> console.log('user: ', user)),
        catchError(this.handleError)
      );
    }

}

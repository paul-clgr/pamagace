import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http"
import {catchError, Observable, tap, throwError} from "rxjs";
import {Message} from "../models/message";

@Injectable({
  providedIn: 'root'
})
export class MessagerieService {

  constructor(private http: HttpClient) { }

  getMessages(userID:number): Observable<Message[]> {
    return this.http.get<Message[]>('http://localhost:8080/api/public/message/get/user/inbox/'+userID).pipe(
      tap(messages=> console.log('messages: ', messages)),
      catchError(this.handleError)
    );
  }

  postMessage(message:string, id_user_receiver: number): Observable<Message[]> {
    return this.http.post<Message[]>('http://localhost:8080/api/public/message/post', {
      id_user_sender: 1,
      id_user_receiver: id_user_receiver,
      message: message
    }).pipe(
      tap(messages=> console.log('messages: ', messages)),
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
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {User} from "../models/user";
import {House} from "../models/house";

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private http: HttpClient) { }

  addHouse(house: House): Observable<House>{
    return this.http.post<House>('http://localhost:8080/api/public/house/addhouse', {
      "criteria": house.idCriterias,
      "house": {
        "adress": house.adress,
        "bedrooms": house.bedrooms,
        "city": house.city,
        "description": house.description,
        "type": house.type
      },
      "idUser": house.idUser
    }).pipe(
      tap(house=> console.log('house: ', house)),
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

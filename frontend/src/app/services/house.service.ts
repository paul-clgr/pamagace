import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {User} from "../models/user";
import {House} from "../models/house";

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  baseUrl = "http://localhost:8080/api/public/house"

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

  getAllHouse(): Observable<House[]>{
    return this.http.get<House[]>(
      `${this.baseUrl}/all`
    )
  }

  getHouseByCriteria(house: House): Observable<House[]>{
    const url = `${this.baseUrl}/search`;
    let queryParams = new HttpParams();
    queryParams = queryParams.append("bedrooms",house.bedrooms);
    queryParams = queryParams.append("city",house.city);
    queryParams = queryParams.append("type",house.type);
    return this.http.get<House[]>(url,{params:queryParams});

  }

  // getStatsDemandesByMonth(minDate, maxDate): Observable<PeriodeRecueil[]> {
  //   return this.http.get<PeriodeRecueil[]>(
  //     `${this.baseUrl}/months/${minDate}/${maxDate}`
  //   )
  // }





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

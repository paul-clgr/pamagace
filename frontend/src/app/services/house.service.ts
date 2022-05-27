import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from '../models/house';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  baseUrl = "http://localhost:8080/api/public/house"

  constructor(private http: HttpClient) { }

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

}

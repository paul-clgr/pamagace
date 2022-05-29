import {Injectable} from '@angular/core';
import {catchError, Observable, tap, throwError} from "rxjs";
import {Criteria} from "../models/criteria";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {House} from "../models/house";

@Injectable({
  providedIn: 'root'
})
export class CriteriaService {

  constructor(private http: HttpClient) {
  }

  getCriterias(): Observable<Criteria[]> {
    return this.http.get<Criteria[]>('http://localhost:8080/api/public/criteria/all').pipe(
      tap(criteria => console.log('criteria: ', criteria)),
      catchError(this.handleError)
    );
  }

  addCriteria(criteria: Criteria): Observable<Criteria> {
    return this.http.post<Criteria>('http://localhost:8080/api/public/criteria/addCriteria', {
      "name": criteria.name,
      "category": criteria.category,
      "description": criteria.description,
    }).pipe(
      tap(criteria => console.log('criteria: ', criteria)),
      catchError(this.handleError)
    );
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

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
  
})
export class ReservationComponent implements OnInit {
  id_user = 0;
  id_house = 0;

  range = new FormGroup({
    start_date: new FormControl(),
    end_date: new FormControl(),
  })
  
  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {
    this.id_house = 1;
    this.id_user = 4;
  }

  postReservation(form: NgForm) : void {
    this.http.post("localhost:8080/reservation/post", {
      "id_user": this.id_user,
      "id_house": this.id_house,
      "start_date": this.range.value.start_date,
      "end_date": this.range.value.end_date
    }).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        'Backend returned code ${error.status}, body was:' , error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}




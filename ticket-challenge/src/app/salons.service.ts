import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalonsService {
  // چون داده ای برای گرفتن ای پی آی 
  //نداشتم این ماکت دیتا راه انداختم تا بتونم یه جوری روی این ماتریس داده های خودم ببینم
  private stadiumMapMock: number[][] = [
    [0, 1, 0, 1],
    [1, 1, 0, 0],
    [0, 0, 1, 0],
    [1, 0, 1, 1]
  ];

  constructor() { }

  getStadiumMap(): Observable<number[][]> {
    return of(this.stadiumMapMock);
  }

  reserveSeat(row: number, col: number): Observable<any> {
    return of('Seat reserved successfully!');
  }
}

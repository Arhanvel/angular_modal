import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Bank } from '../types/bank';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankListService {
  private banksUrl = 'api/banks';

  constructor(private http: HttpClient) { }

  getBanks(): Observable<Bank[]> {
    return this.http.get<Bank[]>(this.banksUrl)
    .pipe(
      tap(_ => console.log('fetch bank list')),
      catchError(this.handleError<Bank[]>('getHeroes', []))
    );
  }

  getBank(id: number): Observable<Bank> {
    const url = `${this.banksUrl}/${id}`;
    return this.http.get<Bank>(url).pipe(
      tap(_ => console.log(`fetched bank id=${id}`)),
      catchError(this.handleError<Bank>(`getBank id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}

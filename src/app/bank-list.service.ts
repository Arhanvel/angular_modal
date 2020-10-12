import { Injectable } from '@angular/core';
import { Bank } from './bank';
import { BANKLIST } from './mock-banks/mock-banks.module';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankListService {

  constructor() { }

  getBanks(): Observable<Bank[]> {
    return of(BANKLIST);
  }
  getBank(id: number): Observable<Bank> {
    return of(BANKLIST.find(item=>item.id === id));
  }
}

import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BankAccountFull } from '../types/bank-account';
import { Observable, of } from 'rxjs';
import { ACCOUNTTYPES, AccountType } from '../types/account-type';
import { TankType, TANKTYPES } from '../types/tank-type';
import { AccList } from '../types/acc-list';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
  private accountsUrl = 'api/accounts';

  constructor(private http: HttpClient) { }

  getAccountList(token: string): Observable<BankAccountFull[]> {
    return this.http.get<BankAccountFull[]>(this.accountsUrl)
    .pipe(
      map((accounts: BankAccountFull[]) => {
        return accounts.map((item) => {
          const temp: AccountType = ACCOUNTTYPES.find(el => el.id === item.accType);
          const tempRes: BankAccountFull = {...item};
          if (temp.id) {
            tempRes.accTypeHint = temp.hint;
            tempRes.accTypeImg = temp.img;
          }
          const tempTank: TankType = TANKTYPES.find(el => el.id === item.tankType);
          if (tempTank.id) {
            tempRes.tankTypeImg = tempTank.img;
            tempRes.tankTypeName = tempTank.name;
          }
          return tempRes;
        }
      );
      }),
      catchError(this.handleError<BankAccountFull[]>('getHeroes', []))
    );
  }

  postAccList(token: string, accList: AccList[]): Observable<string>{
    const requestBody = {
      userToken: token,
      account_list: accList,
    };
    console.log(JSON.stringify(requestBody));
    return of('SUCCESS');
  }

  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

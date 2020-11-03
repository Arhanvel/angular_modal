import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  private userAccUrl = 'api/userAcc';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  getAccountList(token: string): Observable<BankAccountFull[]> {
    return this.http.get<BankAccountFull[]>(this.accountsUrl)
    .pipe(
      map(response => {
        const accounts: BankAccountFull[] = response as BankAccountFull[];
        return accounts.map((item) => {
          const temp: AccountType = ACCOUNTTYPES.find(el => el.id === item.accType);
          const tempRes: BankAccountFull = new BankAccountFull(item.active, item.id, item.name, item.accType, item.balance, item.tankType);
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
      catchError(this.handleError<BankAccountFull[]>('getAccList', []))
    );
  }

  postAccList(token: string, accList: AccList[]): Observable<AccList[]>{
    const requestBody = {
      userToken: token,
      accountList: accList,
    };
    console.log(JSON.stringify(requestBody));
    return this.http.post<AccList[]>(this.userAccUrl, accList, this.httpOptions)
      .pipe(
        catchError(this.handleError<AccList[]>('postAccList', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

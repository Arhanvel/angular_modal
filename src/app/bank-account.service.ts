import { Injectable } from '@angular/core';
import { BankAccount, BankAccountFull } from './bank-account';
import { Observable, of } from 'rxjs';
import { ACCOUNTTYPES, TankType, AccountType, TANKTYPES, AccList } from './dict-const';
import { BANK_ACCOUNT_LIST } from './mock-accounts/mock-accounts.module'

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  constructor() { }

  getAccountList(token: string): Observable<BankAccountFull[]> {
    return of(
      BANK_ACCOUNT_LIST.map(
        (item) => {
          let temp: AccountType = ACCOUNTTYPES.find(el => el.id == item.acc_type);
          let tempRes: BankAccountFull = {...item};
          if (temp.id) {
            tempRes.acc_type_hint = temp.hint;
            tempRes.acc_type_img = temp.img; 
          }
          let tempTank: TankType = TANKTYPES.find(el => el.id == item.tank_type);
          if (tempTank.id) {
            tempRes.tank_type_img = tempTank.img;
            tempRes.tank_type_name = tempTank.name;
          }
          return tempRes;
        }
      )
    );
  }

  postAccList(token:string, accList: AccList[]): Observable<string>{
    let requestBody = {
      userToken: token,
      account_list: accList,
    };
    console.log(JSON.stringify(requestBody));
    return of('SUCCESS');
  }
}

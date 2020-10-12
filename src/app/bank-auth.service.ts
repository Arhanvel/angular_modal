import { Injectable } from '@angular/core';
import { Auth } from './auth';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankAuthService {

  constructor() { }

  Authorize(data: Auth): Observable<string> {
    let result = (data.login == 'admin') && (data.password == 'admin') && (data.security == 'admin');
    return of(result ? 'someMD5Token' : '');
  }

}

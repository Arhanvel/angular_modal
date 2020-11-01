import { Injectable } from '@angular/core';
import { Auth } from '../types/auth';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankAuthService {

  constructor() { }

  Authorize(data: Auth): Observable<string> {
    const result = (data.login === 'admin') && (data.password === 'admin') && (data.security === 'admin');
    return of(result ? 'someMD5Token' : '');
  }

}

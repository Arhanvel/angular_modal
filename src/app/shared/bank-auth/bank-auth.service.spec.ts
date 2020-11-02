import { TestBed } from '@angular/core/testing';

import { BankAuthService } from './bank-auth.service';
import { Auth } from '../types/auth'

describe('BankAuthService', () => {
  let service: BankAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [BankAuthService] });
    service = TestBed.inject(BankAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should authorize', (done: DoneFn) => {
    service.Authorize(new Auth('admin','admin','admin','')).subscribe(value => {
      expect(value).toBe('someMD5Token');
      done();
    })
  })

  it('shouldn\'t authorize', (done: DoneFn) => {
    service.Authorize(new Auth('','','','')).subscribe(value => {
      expect(value).toBe('');
      done();
    })
  })
});

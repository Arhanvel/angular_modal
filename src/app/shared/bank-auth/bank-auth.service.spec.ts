import { TestBed } from '@angular/core/testing';

import { BankAuthService } from './bank-auth.service';

describe('BankAuthService', () => {
  let service: BankAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { BankAccountService } from './bank-account.service';
import { BankAccountFull } from '../types/bank-account';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('BankAccountService', () => {
  let httpClientSpy: {get: jasmine.Spy};
  let service: BankAccountService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new BankAccountService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected accounts list', () => {
    const expectedAccList: BankAccountFull[] =
      [
        new BankAccountFull(true, 1, '068985 2563', 1, 500000, 1,
        '../../assets/img/acc-types/home-loan.png', 'Home loan', '../../assets/img/tank-types/property-tank.png', 'Property Tank'),
        new BankAccountFull(false, 2, '068985 2563', 1, 500000, 1,  '../../assets/img/acc-types/home-loan.png', 'Home loan',
          '../../assets/img/tank-types/property-tank.png', 'Property Tank'),
        new BankAccountFull(false, 3, '068985 2563', 2, 50000, 2, '../../assets/img/acc-types/mortgage.png', 'Mortgage',
          '../../assets/img/tank-types/property-tank.png', 'Work Tank'),
        new BankAccountFull(false, 4, '068985 2563', 3, 50000, 2, '../../assets/img/acc-types/car-loan.png', 'Car loan',
          '../../assets/img/tank-types/property-tank.png', 'Work Tank'),
      ];

    httpClientSpy.get.and.returnValue(of(expectedAccList));

    service.getAccountList('someMD5Token').subscribe(
      (accList: BankAccountFull[]) => expect(accList as BankAccountFull[]).toEqual(expectedAccList, 'expected accounts list'),
      fail
    );
  });
});

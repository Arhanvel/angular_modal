import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Bank } from './shared/types/bank';
import { BankAccount } from './shared/types/bank-account';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    const accounts: BankAccount[] = [
      new BankAccount(true, 1, '068985 2563', 1, 500000, 0),
      new BankAccount(false, 2, '068985 2563', 1, 500000, 0),
      new BankAccount(false, 3, '068985 2563', 2, 50000, 1),
      new BankAccount(false, 4, '068985 2563', 3, 50000, 1),
    ];

    const banks: Bank[] = [
      new Bank(1, 'Сбербанк', '../../assets/img/bank-logo/sberbank-sm.png', '../../assets/img/bank-logo/sberbank-bg.png'),
      new Bank(2, 'ВТБ', '../../assets/img/bank-logo/vtb-sm.png', '../../assets/img/bank-logo/vtb-bg.png'),
      new Bank(3, 'Тинькоф', '../../assets/img/bank-logo/tinkoff-sm.png', '../../assets/img/bank-logo/tinkoff-bg.png'),
      new Bank(4, 'Альфа-банк', '../../assets/img/bank-logo/alpha-sm.png', '../../assets/img/bank-logo/alpha-bg.png'),
      new Bank(5, 'Газпромбанк', '../../assets/img/bank-logo/gazprombank-sm.png', '../../assets/img/bank-logo/gazprombank-bg.png'),
      new Bank(6,
        'Россельхозбанк',
        '../../assets/img/bank-logo/rosselkhozbank-sm.webp',
        '../../assets/img/bank-logo/rosselkhozbank-bg.png'),
      new Bank(7, 'Банк Открытие', '../../assets/img/bank-logo/otkritie-sm.png', '../../assets/img/bank-logo/otkritie-bg.png'),
      new Bank(8, 'Райффайзенбанк', '../../assets/img/bank-logo/raiffaizenbank-sm.png', '../../assets/img/bank-logo/raiffaizenbank-bg.png'),
      new Bank(9, 'ЮниКредит Банк', '../../assets/img/bank-logo/unicredit-sm.png', '../../assets/img/bank-logo/unicredit-bg.png'),
      new Bank(10, 'Русский стандарт', '../../assets/img/bank-logo/russtandart-sm.png', '../../assets/img/bank-logo/russtandart-bg.png'),
    ];

    return {banks, accounts};
  }

  genId<T extends Bank | BankAccount>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 1;
  }
}

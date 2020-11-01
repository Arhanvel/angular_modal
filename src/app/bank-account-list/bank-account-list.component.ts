import { Component, OnInit, Optional, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { Bank } from '../shared/types/bank';
import { BankAccountFull } from '../shared/types/bank-account';
import { BankAccountService } from '../shared/bank-account/bank-account.service';
import { BankListService } from '../shared/bank-list/bank-list.service';
import { ModalBankAccComponent } from '../modal-bank-acc/modal-bank-acc.component';
import { TANKTYPES } from '../shared/types/tank-type';
import { AccList } from '../shared/types/acc-list';

@Component({
  selector: 'app-bank-account-list',
  templateUrl: './bank-account-list.component.html',
  styleUrls: ['./bank-account-list.component.scss']
})
export class BankAccountListComponent implements OnInit {
  @Input() selectedBankId: number;
  selectedBank: Bank;
  bankAcc: BankAccountFull[];
  readonly TANKTYPES = TANKTYPES;

  constructor(
    private bankService: BankListService,
    private service: BankAccountService,
    @Optional() public modal?: ModalBankAccComponent) { }

  ngOnInit(): void {
  }

  getBank(id: number): void {
    this.bankService.getBank(id).subscribe(selectedBank => this.selectedBank = selectedBank);
  }

  closeModal(): void {
    const accList: AccList[] = [];
    this.bankAcc.forEach(acc => {
      if (acc.active) {
        const item: AccList = {
          accId: acc.id,
          tankId: acc.tankType
        };
        accList.push(item);
      }
    });
    this.service.postAccList(this.modal?.userToken, accList).subscribe(response => console.log(response));
    this.modal?.closeDialog();
  }

  getAccList(userToken: string): void {
    this.service.getAccountList(userToken).subscribe(res => this.bankAcc = res);
  }

}

import { Component, OnInit, Optional, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { Bank } from '../bank';
import { BankAccountFull } from '../bank-account';
import { BankAccountService } from '../bank-account.service';
import { BankListService } from '../bank-list.service';
import { ModalBankAccComponent } from '../modal-bank-acc/modal-bank-acc.component';
import { TANKTYPES, AccList } from '../dict-const';

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
    let accList: AccList[] = [];
    this.bankAcc.forEach(acc => {
      if (acc.active) {
        let item: AccList = {
          acc_id: acc.id,
          tank_id: acc.tank_type
        };
        accList.push(item);
      }
    });
    this.service.postAccList(this.modal?.userToken, accList).subscribe(response => console.log(response));
    this.modal?.closeDialog();
  }
  
  getAccList(userToken: string) : void {
    this.service.getAccountList(userToken).subscribe(res => this.bankAcc = res);
  }

}

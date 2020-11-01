import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { BankAuthComponent } from '../bank-auth/bank-auth.component';
import { BankAccountListComponent } from '../bank-account-list/bank-account-list.component';

@Component({
  selector: 'app-modal-bank-acc',
  templateUrl: './modal-bank-acc.component.html',
  styleUrls: ['./modal-bank-acc.component.scss']
})
export class ModalBankAccComponent implements OnInit {

  currentBankId: number;
  userToken: string;
  @ViewChild('stepper') stepper: MatStepper;
  @ViewChild('bankAuth') bankAuth: BankAuthComponent;
  @ViewChild('accList') accList: BankAccountListComponent;

  constructor(public dialogRef: MatDialogRef<ModalBankAccComponent>) { }

  closeDialog(): void {
    this.dialogRef.close('Closed');
  }

  selectBank(id: number): void {
    this.currentBankId = id;
    this.bankAuth.getBank(this.currentBankId);
    this.stepper.next();
  }

  authUser(token: string): void {
    if (token) {
      this.userToken = token;
      this.accList.getAccList(this.userToken);
      this.accList.getBank(this.currentBankId);
      this.stepper.next();
    }
  }

  ngOnInit(): void {
  }

}

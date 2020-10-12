import { Component, OnInit } from '@angular/core';
import { ModalBankAccComponent } from '../modal-bank-acc/modal-bank-acc.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bank-feeds',
  templateUrl: './bank-feeds.component.html',
  styleUrls: ['./bank-feeds.component.scss']
})
export class BankFeedsComponent implements OnInit {

  constructor(public modal: MatDialog) {}

  openModal() {
    const dialogRef = this.modal.open(ModalBankAccComponent); 
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Optional } from '@angular/core';
import { Bank } from '../shared/types/bank';
import { BankListService } from '../shared/bank-list/bank-list.service';
import { ModalBankAccComponent } from '../modal-bank-acc/modal-bank-acc.component';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss']
})
export class BankListComponent implements OnInit {
  banks: Bank[];
  searchText = '';

  constructor(private bankService: BankListService, @Optional() public modal?: ModalBankAccComponent) { }

  ngOnInit(): void {
    this.getBanks();
  }

  toggle(): void{}

  getBanks(): void{
    this.bankService.getBanks().subscribe(banks => this.banks = banks);
  }

  selectBank(id: number): void{
    this.modal?.selectBank(id);
  }
}

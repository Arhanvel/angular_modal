import { Component, OnInit, Input, Optional } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Bank } from '../bank';
import { Auth } from '../auth';
import { BankListService } from '../bank-list.service';
import { BankAuthService } from '../bank-auth.service';
import { ModalBankAccComponent } from '../modal-bank-acc/modal-bank-acc.component';

@Component({
  selector: 'app-bank-auth',
  templateUrl: './bank-auth.component.html',
  styleUrls: ['./bank-auth.component.scss']
})
export class BankAuthComponent implements OnInit {
  @Input() selectedBankId: number;
  error: string;
  selectedBank: Bank;
  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    mfa: new FormControl('')
  });

  constructor(
      private bankService: BankListService,
      private authService: BankAuthService, 
      @Optional() public modal?: ModalBankAccComponent) { }

  ngOnInit(): void {
    if (this.selectedBankId){
      this.getBank(this.selectedBankId);
    }
    this.error = '';
  }

  getBank(id: number): void {
    this.bankService.getBank(id).subscribe(selectedBank => this.selectedBank = selectedBank);
  }

  closeModal(): void {
    this.modal?.closeDialog();
  }

  onSubmit(): void {
    let data: Auth = {
      login: '',
      password: '',
      security: '',
      response: ''
    };
    data.login = this.authForm.get('username')?.value;
    data.password = this.authForm.get('password')?.value;
    data.security = this.authForm.get('mfa')?.value;
    this.authService.Authorize(data).subscribe(
      res => {
        this.error = res ? '' : 'Login credentials not found';
        this.modal?.authUser(res);
      })
  }

}

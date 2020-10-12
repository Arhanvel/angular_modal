import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalBankAccComponent } from './modal-bank-acc/modal-bank-acc.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatDialogModule],
  exports: [RouterModule],
  entryComponents : [ ModalBankAccComponent ]
})
export class AppRoutingModule { }

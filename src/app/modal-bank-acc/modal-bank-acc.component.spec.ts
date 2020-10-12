import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBankAccComponent } from './modal-bank-acc.component';

describe('ModalBankAccComponent', () => {
  let component: ModalBankAccComponent;
  let fixture: ComponentFixture<ModalBankAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBankAccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBankAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

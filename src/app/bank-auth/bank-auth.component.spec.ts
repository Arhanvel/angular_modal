import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAuthComponent } from './bank-auth.component';

describe('BankAuthComponent', () => {
  let component: BankAuthComponent;
  let fixture: ComponentFixture<BankAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

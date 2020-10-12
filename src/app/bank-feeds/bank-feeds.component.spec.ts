import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankFeedsComponent } from './bank-feeds.component';

describe('BankFeedsComponent', () => {
  let component: BankFeedsComponent;
  let fixture: ComponentFixture<BankFeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankFeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

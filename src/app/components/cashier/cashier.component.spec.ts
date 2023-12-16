import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierComponent } from './cashier.component';

describe('CashierComponent', () => {
  let component: CashierComponent;
  let fixture: ComponentFixture<CashierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashierComponent]
    });
    fixture = TestBed.createComponent(CashierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

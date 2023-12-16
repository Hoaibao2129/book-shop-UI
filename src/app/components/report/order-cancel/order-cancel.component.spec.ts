import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCancelComponent } from './order-cancel.component';

describe('OrderCancelComponent', () => {
  let component: OrderCancelComponent;
  let fixture: ComponentFixture<OrderCancelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderCancelComponent]
    });
    fixture = TestBed.createComponent(OrderCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertStaffComponent } from './insert-staff.component';

describe('InsertStaffComponent', () => {
  let component: InsertStaffComponent;
  let fixture: ComponentFixture<InsertStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertStaffComponent]
    });
    fixture = TestBed.createComponent(InsertStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

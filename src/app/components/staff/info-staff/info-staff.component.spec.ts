import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoStaffComponent } from './info-staff.component';

describe('InfoStaffComponent', () => {
  let component: InfoStaffComponent;
  let fixture: ComponentFixture<InfoStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoStaffComponent]
    });
    fixture = TestBed.createComponent(InfoStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

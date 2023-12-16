import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertRoleComponent } from './insert-role.component';

describe('InsertRoleComponent', () => {
  let component: InsertRoleComponent;
  let fixture: ComponentFixture<InsertRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertRoleComponent]
    });
    fixture = TestBed.createComponent(InsertRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

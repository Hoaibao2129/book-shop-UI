import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertBookComponent } from './insert-book.component';

describe('InsertBookComponent', () => {
  let component: InsertBookComponent;
  let fixture: ComponentFixture<InsertBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertBookComponent]
    });
    fixture = TestBed.createComponent(InsertBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

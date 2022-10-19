import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseRecordItemComponent } from './expense-record-item.component';

describe('ExpenseRecordItemComponent', () => {
  let component: ExpenseRecordItemComponent;
  let fixture: ComponentFixture<ExpenseRecordItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseRecordItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseRecordItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

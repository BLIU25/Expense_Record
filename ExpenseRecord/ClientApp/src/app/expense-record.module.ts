import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExpenseRecordRoutingModule } from './expense-record-routing.module';
import { ExpenseRecordComponent } from './expense-record/expense-record.component';
import { ExpenseRecordItemComponent } from './expense-record-item/expense-record-item.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    ExpenseRecordComponent,
    ExpenseRecordItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExpenseRecordRoutingModule,
    HttpClientModule
  ]
})
export class ExpenseRecordModule {
}

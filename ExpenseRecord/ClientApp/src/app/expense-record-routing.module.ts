import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExpenseRecordComponent } from './expense-record/expense-record.component';
import { ExpenseRecordItemComponent } from './expense-record-item/expense-record-item.component';
import { ExpenseRecordItemGuard } from './expense-record-item.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'items'
      },
      {
        path: 'items',
        component: ExpenseRecordComponent
      },
      {
        path: 'item/:id',
        component: ExpenseRecordItemComponent,
        canDeactivate: [ExpenseRecordItemGuard]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ExpenseRecordRoutingModule {

}

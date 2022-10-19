import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ExpenseRecordComponent } from './expense-record/expense-record.component';
import { ExpenseRecordItemComponent } from './expense-record-item/expense-record-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent
    ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

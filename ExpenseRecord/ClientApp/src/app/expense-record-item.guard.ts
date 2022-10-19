import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ExpenseRecordItemComponent } from './expense-record-item/expense-record-item.component';

@Injectable({
  providedIn: 'root'
})
export class ExpenseRecordItemGuard implements CanDeactivate<ExpenseRecordItemComponent> {
  canDeactivate(
    component: ExpenseRecordItemComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate();
  }
}

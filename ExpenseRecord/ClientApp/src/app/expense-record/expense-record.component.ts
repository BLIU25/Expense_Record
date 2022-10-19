import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseRecordItem } from '../models/ExpenseRecordItem';
import { ExpenseRecordService } from '../services/expense-record.service.mock';

@Component({
  selector: 'app-expense-record',
  templateUrl: './expense-record.component.html',
  styleUrls: ['./expense-record.component.scss']
})
export class ExpenseRecordComponent implements OnInit {

  private expenseRecordItem: ExpenseRecordItem;

  public searchString: string = '';
  // public displayList: Array<ExpenseRecordItem> = new Array<ExpenseRecordItem>;
  private fullList: ExpenseRecordItem[] = [];

  constructor(public expenseRecordService: ExpenseRecordService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy() {

  }

  reload(): void {
    this.searchString = "";
    this.loadData();
  }

  async navToCreateNew(): Promise<boolean> {
    return this.router.navigate(['item', 'new'], {
      relativeTo: this.route.parent
    });
  }

  private loadData(): void {
    this.expenseRecordService.getAll().subscribe((response:ExpenseRecordItem[])=>{
      this.expenseRecordService.displayList = response;
      this.fullList = [...this.expenseRecordService.displayList];
      this.expenseRecordService.saveExpenseRecords(this.fullList);
    });
  }

  deleteItem() {
    const ok = confirm(`Delete this item?`);
    if (ok){
        this.expenseRecordService.deleteOne(this.expenseRecordItem.id).subscribe(() => {
          this.navToList();
        });
      } 
    else {
        this.navToList();
    }
  }

  async navToList(): Promise<boolean> {
    return this.router.navigate(['items'], {
      relativeTo: this.route.parent
    });
  }

}

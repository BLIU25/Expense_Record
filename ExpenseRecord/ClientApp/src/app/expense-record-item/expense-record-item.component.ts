import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpenseRecordItem } from '../models/ExpenseRecordItem';
import { ExpenseRecordService } from '../services/expense-record.service.mock';

@Component({
  selector: 'app-expense-record-item',
  templateUrl: './expense-record-item.component.html',
  styleUrls: ['./expense-record-item.component.css']
})
export class ExpenseRecordItemComponent implements OnInit {

  expenseRecordItem: ExpenseRecordItem;
  form: FormGroup;

  private fullList: ExpenseRecordItem[] = [];
  public inputItem: Array<ExpenseRecordItem> = new Array<ExpenseRecordItem>;
  id: string = '';

  constructor(public expenseRecordService: ExpenseRecordService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.expenseRecordItem = {
      id: 'new',
      date: new Date().toISOString(),
      description: '',
      type: '',
      amount: 0,
    };
    this.form = this.fb.group({
      description: this.fb.control('', [Validators.required]),
      done: this.fb.control(''),
      favorite: this.fb.control('')
    });
    this.form.valueChanges.subscribe(() => {
      this.expenseRecordItem.description = this.form.get('description')?.value ?? '';
      this.expenseRecordItem.amount = this.form.get('amount')?.value ?? '';
      this.expenseRecordItem.type = this.form.get('type')?.value ?? '';
      this.expenseRecordItem.date = this.form.get('date')?.value ?? '';
    });
  }

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    // if (id && id !== 'new') {
    //   this.loadData(id);
    // } else {
    //   this.patchFormWithItem(this.expenseRecordItem);
    // }

      this.patchFormWithItem(this.expenseRecordItem);

  }

  ngOnDestroy() {

  }

  toggleItemDone(): void {
  }


  backToRecordlist() {
    return this.router.navigate(['items'], {
      relativeTo: this.route.parent
    });
  }

  deleteItem() {
    const ok = confirm(`Delete this item?`);
    if (ok) {
      if (!this.isNewItem()) {
        this.expenseRecordService.deleteOne(this.expenseRecordItem.id).subscribe(() => {
          this.navToList();
        });
      } else {
        this.navToList();
      }
    }
  }

  saveItem() {
      this.expenseRecordService.createOne(this.expenseRecordItem).subscribe(expenseRecordItem => {
        this.form.markAsPristine();
        this.navToList();
      }, () => {
        console.error('Failed to create record');
      });
    }

  isNewItem(): boolean {
    return this.expenseRecordItem?.id === 'new';
  }

  async navToList(): Promise<boolean> {
    return this.router.navigate(['items'], {
      relativeTo: this.route.parent
    });
  }

  // private loadData(id: string): void {
  //   this.expenseRecordService.getOne(id).subscribe({
  //     next: item => {
  //       this.expenseRecordItem = item;
  //       this.patchFormWithItem(this.expenseRecordItem);
  //     },
  //     error: () => {
  //       this.navToList();
  //       console.error('Failed to load item');
  //     }
  //   });
  // }

  private patchFormWithItem(item: ExpenseRecordItem): void {
    this.form.patchValue({
      description: item.description,
      date: item.date,
      amount: item.amount,
      type: item.type
      });
  }

  async canDeactivate(): Promise<boolean> {
    if (this.form.dirty) {
      const ok = confirm(`Discard changes and leave?`);
      if (ok) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }

}

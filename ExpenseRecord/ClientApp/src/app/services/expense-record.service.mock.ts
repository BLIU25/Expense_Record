import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { ExpenseRecordItem } from '../models/ExpenseRecordItem';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseRecordService {
  
  expenseRecords: ExpenseRecordItem[] = [];

  public displayList: Array<ExpenseRecordItem> = new Array<ExpenseRecordItem>;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ExpenseRecordItem[]> {
    return this.httpClient.get<ExpenseRecordItem[]>(`http://localhost:44425/api/records/all`);     
  }

  createOne(body: ExpenseRecordItem): Observable<ExpenseRecordItem> {
    return this.httpClient.post<ExpenseRecordItem>(`http://localhost:44425/api/records`,body);
  }

  saveExpenseRecords(expenseRecords: ExpenseRecordItem[]) {
    this.expenseRecords = expenseRecords;
  }

  deleteOne(id: string): Observable<String> {
    return this.httpClient.delete<String>(`http://localhost:44425/api/records/${id}`);
  }

  private read(): ExpenseRecordItem[] {
    const expenseRecordsString: string | null = localStorage.getItem('expenseRecords');
    try {
      const expenseRecords: ExpenseRecordItem[] = expenseRecordsString ? JSON.parse(expenseRecordsString) : [];
      return (Array.isArray(expenseRecords) && expenseRecords) || [];
    } catch (e) {
      return [];
    }
  }

  private write(items: ExpenseRecordItem[]): void {
    localStorage.setItem('expenseRecords', JSON.stringify(items));
  }
}

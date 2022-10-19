# Expense Record System

## Business Requirement
We are going to implement an expense record system for personal use.
It’s used to record daily expenses, and do query, and deletion operations.
The expense record includes the following information: description, type, amount, date
For example: lunch, meal, 50, 20221010

AC1: 
GIVEN there is no expense data, 
WHEN user visits page, 
THEN the page does not show any expense data.
没消费记录，什么都不显示；

AC2: 
GIVEN page without any data, 
WHEN user types expense information and clicks add button, 
THEN the page shows the newly added expense data.
点击add按钮，输入，然后显示新增加的数据；

AC3: 
GIVEN page with some data, 
WHEN user visits page, 
THEN the page shows all expense data.
如果有消费记录，显示消费记录；

AC4: 
GIVEN page with some data, 
WHEN user types expense information and clicks add button, 
THEN the page shows the newly added expense data on the top.
新增的放在第一位；

AC5: 
GIVEN page with some data, 
WHEN user clicks delete button next to expense, 
THEN the page no longer shows the deleted expense.
删除功能；


## Practice Requirement:
- Git commit with baby steps
- Follow commit specifications https://www.conventionalcommits.org/en/v1.0.0/
- Write tests for frontend and backend

## How to Test
- backend test
    Run `dotnet test` under root catalogue and view test result
- frontend test
    Go to the catalogue ExpenseRecord/ClientApp, and run `ng test`
 
# Tips - how to create angular conponent
- Go to the catalogue ExpenseRecord/ClientApp
- `ng generate component COMPOENT_NAME --module app`

# References
- C# 
    https://learn.microsoft.com/en-us/dotnet/csharp/
- ASP.NET Core
    https://learn.microsoft.com/en-us/aspnet/core/getting-started
- Angular
    https://angular.io/
    https://angular.io/guide/testing
- Typescript
    https://www.typescriptlang.org/docs/
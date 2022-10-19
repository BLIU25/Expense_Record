using ExpenseRecord.Dto;

namespace ExpenseRecord.ExpenseRecordService
{
    public interface IExpenseRecordService
    {
        Task <string> CreateAsync(ExpenseRecordDto expenseRecordDto);
        Task DeleteAsync(string id);
        Task<List<ExpenseRecordDto>> GetAll();
    }
}

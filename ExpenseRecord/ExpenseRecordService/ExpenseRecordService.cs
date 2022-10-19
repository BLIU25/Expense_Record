using ExpenseRecord.Dto;

namespace ExpenseRecord.ExpenseRecordService
{
    public class ExpenseRecordService: IExpenseRecordService
    {
        private ApplicationDb _applicationDb;
        public async Task<string> CreateAsync(ExpenseRecordDto expenseRecordCreateDto)
        {
            if (_applicationDb.ExpenseRecords.Any(x => x.Description == expenseRecordCreateDto.Description
                                                       && x.Date == expenseRecordCreateDto.Date
                                                       && x.Amount == expenseRecordCreateDto.Amount
                                                       && x.Type == expenseRecordCreateDto.Type))
                throw new ExpenseRecordException("The description has already exists");
            
            var id = Guid.NewGuid().ToString();

            var expenseRecordGet = new ExpenseRecordDto
            {
                Id = id,
                Amount = expenseRecordCreateDto.Amount,
                Description = expenseRecordCreateDto.Description,
                Type = expenseRecordCreateDto.Type,
                Date = expenseRecordCreateDto.Date
            };

            _applicationDb.ExpenseRecords.Add(expenseRecordGet);
            return id;
        }

        public Task DeleteAsync(string id)
        {
            throw new NotImplementedException();
        }
    }
}

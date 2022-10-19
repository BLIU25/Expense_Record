namespace ExpenseRecord
{
    public class ExpenseRecordException : Exception
    {
        public ExpenseRecordException() : base() { }
        public ExpenseRecordException(string message) : base(message) { }
    }
}

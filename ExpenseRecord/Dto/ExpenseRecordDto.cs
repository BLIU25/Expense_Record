using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ExpenseRecord.Dto
{
    public class ExpenseRecordDto
    {
        public string Description { get; set; }

        public string Type { get; set; }

        public double Amount { get; set; }

        public DateTime? Date { get; set; }

    }
}

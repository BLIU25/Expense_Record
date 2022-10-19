using ExpenseRecord.Dto;
using ExpenseRecord.ExpenseRecordService;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseRecord.Controllers;

[ApiController]
[Route("[controller]")]
public class ExpenseRecordController : ControllerBase
{
    private readonly IExpenseRecordService _expenseRecordService;

    public ExpenseRecordController(IExpenseRecordService expenseRecordService)
    {
        _expenseRecordService = expenseRecordService;
    }

    [HttpPost]
    public async Task<IActionResult> CreateRecordAsync(ExpenseRecordDto expenseRecordDto)
    {
        try
        {
            var id = await _expenseRecordService.CreateAsync(expenseRecordDto);
            expenseRecordDto.Id = id;
            return Created($"api/records/{id}", expenseRecordDto);
        }
        catch (ExpenseRecordException e)
        {
            return BadRequest(e.Message);
        }
    }
}
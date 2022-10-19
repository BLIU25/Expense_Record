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

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteItemAsync([FromRoute] string id)
    {
        try
        {
            await _expenseRecordService.DeleteAsync(id);
            return NoContent();
        }
        catch (Exception e)
        {
            return NotFound(e.Message);
        }

    }

    [HttpGet("all")]
    public async Task<IActionResult> GetAll()
    {
        try
        {
            var toDoItem = await _expenseRecordService.GetAll();
            return new ObjectResult(toDoItem);
        }
        catch (ExpenseRecordException e)
        {
            return NotFound(e.Message);
        }

    }
}
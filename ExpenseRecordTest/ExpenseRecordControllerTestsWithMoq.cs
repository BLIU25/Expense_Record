using ExpenseRecord.Controllers;
using ExpenseRecord.ExpenseRecordService;
using Microsoft.AspNetCore.Mvc;
using Moq;
using FluentAssertions;

namespace ExpenseRecord.UnitTest;

public class ExpenseRecordControllerTestsWithMoq
{

    [Fact]
    public void UT_Deletion_Should_Handle_Exception_From_ExpenseRecordService()
    {
        var mock = new Mock<IExpenseRecordService>();
        mock.Setup(x => x.DeleteAsync(It.IsAny<string>())).Throws<Exception>();
        var controller = new ExpenseRecordController(mock.Object);
        var result = controller.DeleteItemAsync("id").GetAwaiter().GetResult();

        result.Should().BeOfType<NotFoundObjectResult>();
        var notFoundResult = result as NotFoundObjectResult;
        notFoundResult?.StatusCode.Should().Be(404);
    }

    [Fact]
    public void UT_Successful_Deletion_Should_Return_204NoContentResult()
    {
        var mock = new Mock<IExpenseRecordService>();
        mock.Setup(x => x.DeleteAsync(It.IsAny<string>())).Returns(Task.CompletedTask);
        var controller = new ExpenseRecordController(mock.Object);
        var result = controller.DeleteItemAsync("id").GetAwaiter().GetResult();
        result.Should().BeOfType<NoContentResult>();
        var notFoundResult = result as NoContentResult;
        notFoundResult?.StatusCode.Should().Be(204);
    }
}
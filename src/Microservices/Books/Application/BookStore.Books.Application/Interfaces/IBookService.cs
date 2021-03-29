using System.Threading.Tasks;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;

namespace BookStore.Books.Application.Interfaces
{
    public interface IBookService
    {
        Task<HttpResponseData> GetBookDetails(HttpRequestData request, ILogger log);
        Task<HttpResponseData> Search(HttpRequestData request, ILogger log, FunctionContext executionContext);
    }
}

using System.IO;
using System.Net;
using System.Threading.Tasks;
using Newtonsoft.Json;
using BookStore.Books.Application.DTOs;
using BookStore.Books.Application.Interfaces;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;

namespace BookStore.Books.Application.Services
{

    public class BookService : IBookService
    {
        private readonly IBookServiceProvider _serviceProvider;
        public BookService(IBookServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        // http://openlibrary.org/books/OL17910702M.json
        /*
        curl -X POST -H 'Content-Type: application/json' -d '{
        "id": "OL17910702M",
        }' http://localhost:7071/api/GetBookDetails -i
        */
        [Function("GetBookDetails")]
        public async Task<HttpResponseData> GetBookDetails([HttpTrigger(AuthorizationLevel.Anonymous, "get", "post")] HttpRequestData request, ILogger log)
        {


            var body = await new StreamReader(request.Body).ReadToEndAsync();
            var data = JsonConvert.DeserializeObject<BookDetailRequest>(body);


            var bookDetails = await _serviceProvider.GetBookDetails(data.Id);

            var response = request.CreateResponse(HttpStatusCode.OK);
            await response.WriteAsJsonAsync(bookDetails).ConfigureAwait(false);

            return response;
        }

        // curl http://localhost:7071/api/Search?q=the+lord+of+the+rings -i
        // openlibrary.org/search.json?q=the+lord+of+the+rings
        [Function("Search")]
        public async Task<HttpResponseData> Search([HttpTrigger(AuthorizationLevel.Anonymous, "get", "post")] HttpRequestData request, ILogger log,
            FunctionContext executionContext)
        {
            var query = request.Url.Query;

            var logger = executionContext.GetLogger(nameof(BookService));
            logger.LogInformation("message logged");

            var book = await _serviceProvider.Search(query);

            var response = request.CreateResponse(HttpStatusCode.OK);
            await response.WriteAsJsonAsync(book).ConfigureAwait(false);

            return response;
        }
    }

    
}
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using BookStore.UI.Providers.DTOs;
using Newtonsoft.Json;

namespace BookStore.UI.Providers.Services
{
    public class BookService : IBookService
    {
        private readonly HttpClient _httpClient;

        public BookService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        // http://localhost:7071/api/GetBookDetails
        public async Task<BookDetails> GetBookDetails(string id)
        {
            var json = JsonConvert.SerializeObject(new  BookDetailRequest(id));
            using (var response = await _httpClient.PostAsync("api/GetBookDetails", new StringContent(json, Encoding.UTF8, "application/json")))
            {
                var data = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<BookDetails>(data);
            }
        }

        // http://localhost:7071/api/Search
        public async Task<Book> Search(string query)
        {
            using (var response = await _httpClient.GetAsync("api/Search?q="+query))
            {
                var data = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<Book>(data);
            }
        }
    }
}

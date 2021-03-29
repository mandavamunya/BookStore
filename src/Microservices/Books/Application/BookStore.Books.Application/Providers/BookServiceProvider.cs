using System.Net.Http;
using System.Threading.Tasks;
using BookStore.Books.Application.DTOs;
using BookStore.Books.Application.Interfaces;
using Newtonsoft.Json;

namespace BookStore.Books.Application.Providers
{
    public class BookServiceProvider : IBookServiceProvider
    {
        private readonly HttpClient _httpClient;

        public BookServiceProvider(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<BookDetails> GetBookDetails(string id)
        {
            using (var response = await _httpClient.GetAsync("books/" + id + ".json"))
            {
                var data = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<BookDetails>(data);
            }
        }

        public async Task<Book> Search(string query)
        {
            using (var response = await _httpClient.GetAsync("search.json/" + query))
            {
                var data = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<Book>(data);
            }
        }
    }
}

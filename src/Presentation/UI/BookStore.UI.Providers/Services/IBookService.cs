using System.Threading.Tasks;
using BookStore.UI.Providers.DTOs;

namespace BookStore.UI.Providers.Services
{
    public interface IBookService
    {
        Task<BookDetails> GetBookDetails(string id);
        Task<Book> Search(string query);
    }
}

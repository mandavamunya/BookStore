using System.Threading.Tasks;
using BookStore.Books.Application.DTOs;

namespace BookStore.Books.Application.Interfaces
{
    public interface IBookServiceProvider
    {
        Task<BookDetails> GetBookDetails(string path);
        Task<Book> Search(string query);
    }
}

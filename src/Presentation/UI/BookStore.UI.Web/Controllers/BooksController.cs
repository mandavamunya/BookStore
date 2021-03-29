using System.Threading.Tasks;
using BookStore.UI.Providers.Services;
using Microsoft.AspNetCore.Mvc;

namespace BookStore.UI.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IBookService _service;
        public BooksController(IBookService service)
        {
            _service = service;
        }

        [HttpGet("GetBookDetails/{id}")]
        public async Task<IActionResult> GetBookDetails(string id)
        {
            return Ok(await _service.GetBookDetails(id));
        }

        [HttpGet("Search/{query}")]
        public async Task<IActionResult> Search(string query)
        {
            return Ok(await _service.Search(query));
        }
    }
}

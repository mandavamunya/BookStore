using System.Collections.Generic;

namespace BookStore.UI.Providers.DTOs
{
    public class Book
    {
        public int NumFound { get; set; }
        public int Start { get; set; }
        public List<Docs> Docs { get; set; }
    }
}

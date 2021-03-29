namespace BookStore.UI.Providers.DTOs
{
    public class BookDetailRequest
    {
        public BookDetailRequest(string id)
        {
            Id = id;
        }
        public string Id { get; private set; }

    }
}

namespace backend.Models
{
    public class EventModel
    {
        public int Id { get; set; }
        public required string Nome { get; set; }
        public string? descricao { get; set; }
    }
}

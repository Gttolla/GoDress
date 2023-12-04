using backend.Enums;

namespace backend.Models
{
    public class ClothingModel
    {
        public int Id { get; set; }
        public string? Nome { get; set; }
        public required string Tipo { get; set; }
        public string? Marca { get; set; }
        public StatusClothing Status { get; set; }
    }
}

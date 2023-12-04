using backend.Enums;

namespace backend.Models
{
    public class OutfitModel
    {
        public int Id { get; set; }
        public string? Nome { get; set; }
        public StatusOutfit status { get; set; }   
    }
}

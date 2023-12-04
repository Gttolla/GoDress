using System.ComponentModel;

namespace backend.Enums
{
    public enum StatusClothing
    {
        [Description("Nenhum status ativo")]
        None = 0,
        [Description("Favoritado")]
        Favorited = 1,
    }
}

using Microsoft.EntityFrameworkCore;
using backend.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace backend.Data.Map
{
    public class OutfitMap : IEntityTypeConfiguration<OutfitModel>
    {
        public void Configure(EntityTypeBuilder<OutfitModel> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Nome).HasMaxLength(50);
            builder.Property(x => x.status);
        }
    }
}

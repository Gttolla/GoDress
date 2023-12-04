using Microsoft.EntityFrameworkCore;
using backend.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace backend.Data.Map
{
    public class ClothingMap : IEntityTypeConfiguration<ClothingModel>
    {
        public void Configure(EntityTypeBuilder<ClothingModel> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x  => x.Nome).HasMaxLength(50);
            builder.Property(x => x.Tipo).IsRequired().HasMaxLength(128);
            builder.Property(x => x.Marca).HasMaxLength(50);
            builder.Property(x => x.Status); 
        }
    }
}

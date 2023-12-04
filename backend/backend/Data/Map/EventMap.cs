using Microsoft.EntityFrameworkCore;
using backend.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace backend.Data.Map
{
    public class EventMap : IEntityTypeConfiguration<EventModel>
    {
        public void Configure(EntityTypeBuilder<EventModel> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x  => x.Nome).IsRequired().HasMaxLength(128);
            builder.Property(x => x.descricao).HasMaxLength(300);
            
        }
    }
}

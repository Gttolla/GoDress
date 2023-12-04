using Microsoft.EntityFrameworkCore;
using backend.Models;
using backend.Data.Map;

namespace backend.Data
{
    public class BackendDBContext : DbContext
    {
        public BackendDBContext(DbContextOptions<BackendDBContext> options) : base(options)
        {
        }

        public DbSet<ClothingModel> Clothes { get; set; }
        public DbSet<EventModel> Events { get; set; }
        public DbSet<OutfitModel> Outfits { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ClothingMap());
            modelBuilder.ApplyConfiguration(new EventMap());
            modelBuilder.ApplyConfiguration(new OutfitMap());

            base.OnModelCreating(modelBuilder);
        }
    }
}

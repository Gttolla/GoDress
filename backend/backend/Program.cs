
using backend.Data;
using Microsoft.EntityFrameworkCore;
using backend.Repositories;
using backend.Repositories.Interfaces;

namespace backend
{
    public class Program
    {
        private static readonly string[] uiCultures = ["en-US", "pt-BR"];
        private static readonly string[] cultures = ["en-US", "pt-BR"];

        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.Configure<RequestLocalizationOptions>(options =>
            {
                options.AddSupportedCultures(cultures).AddSupportedUICultures(uiCultures);
            });

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddEntityFrameworkSqlServer()
                .AddDbContext<BackendDBContext> (
                    options => options.UseSqlServer(builder.Configuration.GetConnectionString("DataBase"))
                );

            builder.Services.AddScoped<ClothingInterface, ClothingRepositorie>();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseRequestLocalization();

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}

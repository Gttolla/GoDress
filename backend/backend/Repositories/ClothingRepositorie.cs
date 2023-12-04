using backend.Data;
using backend.Models;
using backend.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories
{
    public class ClothingRepositorie : ClothingInterface
    {
        private readonly BackendDBContext _dbContext;
        public ClothingRepositorie(BackendDBContext backendDBContext)
        {
            _dbContext = backendDBContext;
        }

        public async Task<ClothingModel> findClothingById(int id)
        {
            return await _dbContext.Clothes.FirstOrDefaultAsync(x => x.Id == id);
        }
        public async Task<List<ClothingModel>> findAllClothes()
        {
            return await _dbContext.Clothes.ToListAsync();
        }
        public async Task<ClothingModel> addClothing(ClothingModel clothing)
        {
            await _dbContext.Clothes.AddAsync(clothing);
            await _dbContext.SaveChangesAsync();

            return clothing;
        }
        public async Task<ClothingModel> updateClothing(ClothingModel clothing, int id)
        {
            ClothingModel clothingById = await findClothingById(id);

            if (clothingById == null) 
            {
                throw new Exception($"A roupa com o id:{id} não foi encontrada no banco de dados");
            }

            clothingById.Nome = clothing.Nome;
            clothingById.Tipo = clothing.Tipo;
            clothingById.Marca = clothing.Marca;
            clothingById.Status = clothing.Status;

            _dbContext.Clothes.Update( clothingById );
            await _dbContext.SaveChangesAsync();

            return clothingById;
        }
        public async Task<bool> deleteClothingById(int id)
        {
            ClothingModel clothingById = await findClothingById(id);

            if (clothingById == null)
            {
                throw new Exception($"A roupa com o id:{id} não foi encontrada no banco de dados");
            }
            
            _dbContext.Clothes.Remove( clothingById );
            await _dbContext.SaveChangesAsync();   

            return true;
        }
    }
}

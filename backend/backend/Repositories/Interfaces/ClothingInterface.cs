using backend.Models;

namespace backend.Repositories.Interfaces
{
    public interface ClothingInterface
    {
        Task<List<ClothingModel>> findAllClothes();
        Task<ClothingModel> findClothingById(int id);
        Task<ClothingModel> addClothing(ClothingModel clothing);
        Task<ClothingModel> updateClothing(ClothingModel clothing, int id);
        Task<bool> deleteClothingById(int id);
    }
}

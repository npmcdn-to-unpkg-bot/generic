using System.Threading.Tasks;
using Generic.Web.Entities;

namespace Generic.Web.Infrastructure.Repositories.Abstract
{
    public interface IProductRepository : IEntityBaseRepository<Product>
    {
        Task<Product> GetDetail(int productId);
    }
}

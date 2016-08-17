using System.Collections.Generic;
using System.Threading.Tasks;
using Generic.Web.Entities;
using Generic.Web.Infrastructure.Repositories.Abstract;
using Microsoft.EntityFrameworkCore;

namespace Generic.Web.Infrastructure.Repositories
{
    public class ProductRepository : EntityBaseRepository<Product>, IProductRepository
    {
        public ProductRepository(PhotoGalleryContext context) 
            : base(context)
        {
        }

        public async Task<Product> GetDetail(int productId)
        {
            return await _context.Products
                .Include(p => p.ProductStatuses).ThenInclude(s => s.Status)
                .Include(p => p.ProductType)
                .FirstOrDefaultAsync(p => p.Id == productId);
        }
    }
}

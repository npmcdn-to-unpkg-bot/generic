using System.Collections.Generic;
using System.Linq;

namespace Generic.Web.Entities
{
    public class Product : IEntityBase
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Code { get; set; }
        public int ProductTypeId { get; set; }
        public virtual ProductType ProductType { get; set; }
        public virtual ICollection<ProductOccasion> ProductOccasions { get; set; }
        public virtual ICollection<ProductStatus> ProductStatuses { get; set; }

        public string ImageUrl
        {
            get
            {
                return ProductStatuses.Any()
                    ? ProductStatuses.OrderBy(p => p.Price).First().ImageUrl
                    : "";
            }
        }

        public decimal Price
        {
            get
            {
                return ProductStatuses.Any()
                    ? ProductStatuses.OrderBy(p => p.Price).First().Price
                    : 0;
            }
        }
    }

    /// <summary>
    /// Managing many to many relationship
    /// </summary>
    public class ProductOccasion
    {
        public int ProductId { get; set; }
        public Product Product { get; set; }
        public int OccasionId { get; set; }
        public Occasion Occasion { get; set; }
    }
}

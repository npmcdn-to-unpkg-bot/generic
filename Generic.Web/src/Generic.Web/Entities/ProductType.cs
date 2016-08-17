using System;
using System.Collections.Generic;

namespace Generic.Web.Entities
{
    public class ProductType : IEntityBase
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public virtual ICollection<Product> Products { get; set; }
        public virtual ICollection<ProductTypeStatus> ProductTypeStatuses { get; set; }
    }

    /// <summary>
    /// Managing many to many relationship
    /// </summary>
    public class ProductTypeStatus
    {
        public int ProductTypeId { get; set; }
        public ProductType ProductType { get; set; }
        public int StatusId { get; set; }
        public Status Status { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Generic.Web.Entities
{
    public class Status : IEntityBase
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public virtual ICollection<ProductTypeStatus> ProductTypeStatuses { get; set; }
        public virtual ICollection<ProductStatus> ProductStatuses { get; set; }
    }
}

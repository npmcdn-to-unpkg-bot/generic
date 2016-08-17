using System.Collections.Generic;

namespace Generic.Web.Entities
{
    public class Occasion : IEntityBase
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public virtual ICollection<ProductOccasion> ProductOccasions { get; set; }
    }
}

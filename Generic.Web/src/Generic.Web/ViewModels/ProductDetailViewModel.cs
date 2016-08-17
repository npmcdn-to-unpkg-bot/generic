using System.Collections.Generic;

namespace Generic.Web.ViewModels
{
    public class ProductDetailViewModel
    {
        public int  Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Code { get; set; }

        public List<ProductStatusViewModel> ProductStatuses { get; set; }
    }
}

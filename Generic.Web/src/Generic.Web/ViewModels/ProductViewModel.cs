using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Generic.Web.ViewModels
{
    public class ProductViewModel
    {
        public int  Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public decimal Price { get; set; }
        public string ImageUrl { get; set; }
    }
}

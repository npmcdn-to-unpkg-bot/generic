namespace Generic.Web.Entities
{
    public class ProductStatus : IEntityBase
    {
        public int Id { get; set; }
        public decimal Price{ get; set; }
        public string ImageUrl { get; set; }
        public int ProductId { get; set; }
        public virtual Product Product { get; set; }
        public int StatusId { get; set; }
        public virtual Status Status { get; set; }
    }
}

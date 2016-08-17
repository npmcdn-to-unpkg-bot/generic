using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Generic.Web.Entities;
using Generic.Web.ViewModels;

namespace Generic.Web.Infrastructure.Mappings
{
    public class DomainToViewModelMappingProfile : Profile
    {
        protected override void Configure()
        {
            Mapper.CreateMap<Product, ProductViewModel>()
                .ForMember(vm => vm.ImageUrl,
                    map => map.MapFrom(p => $"/images/products/{p.ProductType.Name.ToLower()}/{p.ImageUrl}"));

            Mapper.CreateMap<ProductStatus, ProductStatusViewModel>()
                .ForMember(vm => vm.ImageUrl, 
                    map => map.MapFrom(s => $"/images/products/{s.Product.ProductType.Name.ToLower()}/{s.ImageUrl}"))
                .ForMember(vm => vm.Status,
                    map => map.MapFrom(s => s.Status.Name))
                .ForMember(vm => vm.StatusDescription,
                    map => map.MapFrom(s => s.Status.Description));

            Mapper.CreateMap<Product, ProductDetailViewModel>()
               .ForMember(vm => vm.ProductStatuses, 
                    map => map.MapFrom(p => Mapper.Map<IEnumerable<ProductStatus>, IEnumerable<ProductStatusViewModel>>(p.ProductStatuses)));

            Mapper.CreateMap<Photo, PhotoViewModel>()
               .ForMember(vm => vm.Uri, map => map.MapFrom(p => "/images/" + p.Uri));

            Mapper.CreateMap<Album, AlbumViewModel>()
                .ForMember(vm => vm.TotalPhotos, map => map.MapFrom(a => a.Photos.Count))
                .ForMember(vm => vm.Thumbnail, map => 
                    map.MapFrom(a => (a.Photos != null && a.Photos.Count > 0) ?
                    "/images/" + a.Photos.First().Uri :
                    "/images/thumbnail-default.png"));
        }
    }
}

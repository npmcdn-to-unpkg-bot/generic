using Generic.Web.Entities;
using Generic.Web.Infrastructure.Repositories.Abstract;

namespace Generic.Web.Infrastructure.Repositories
{
    public class PhotoRepository : EntityBaseRepository<Photo>, IPhotoRepository
    {
        public PhotoRepository(PhotoGalleryContext context)
            : base(context)
        { }
    }
}

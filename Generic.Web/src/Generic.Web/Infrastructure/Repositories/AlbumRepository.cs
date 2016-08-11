using Generic.Web.Entities;
using Generic.Web.Infrastructure.Repositories.Abstract;

namespace Generic.Web.Infrastructure.Repositories
{
    public class AlbumRepository : EntityBaseRepository<Album>, IAlbumRepository
    {
        public AlbumRepository(PhotoGalleryContext context)
            : base(context)
        { }
    }
}

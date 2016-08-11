using Generic.Web.Entities;
using Generic.Web.Infrastructure.Repositories.Abstract;

namespace Generic.Web.Infrastructure.Repositories
{
    public class RoleRepository : EntityBaseRepository<Role>, IRoleRepository
    {
        public RoleRepository(PhotoGalleryContext context)
            : base(context)
        { }
    }
}

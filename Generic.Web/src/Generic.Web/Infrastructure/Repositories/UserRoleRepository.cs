using Generic.Web.Entities;
using Generic.Web.Infrastructure.Repositories.Abstract;

namespace Generic.Web.Infrastructure.Repositories
{
    public class UserRoleRepository : EntityBaseRepository<UserRole>, IUserRoleRepository
    {
        public UserRoleRepository(PhotoGalleryContext context)
            : base(context)
        { }
    }
}

﻿using System.Collections.Generic;
using Generic.Web.Entities;

namespace Generic.Web.Infrastructure.Repositories.Abstract
{
    public interface IAlbumRepository : IEntityBaseRepository<Album> { }

    public interface ILoggingRepository : IEntityBaseRepository<Error> { }

    public interface IPhotoRepository : IEntityBaseRepository<Photo> { }

    public interface IRoleRepository : IEntityBaseRepository<Role> { }

    public interface IUserRepository : IEntityBaseRepository<User>
    {
        User GetSingleByUsername(string username);
        IEnumerable<Role> GetUserRoles(string username);
    }

    public interface IUserRoleRepository : IEntityBaseRepository<UserRole> { }
}

using Generic.Web.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Generic.Web.Infrastructure
{
    public class PhotoGalleryContext : DbContext
    {
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Album> Albums { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<Error> Errors { get; set; }

        public DbSet<Product> Products { get; set; }
        public DbSet<ProductType> ProductTypes { get; set; }
        public DbSet<ProductStatus> ProductsStatusCollection { get; set; }
        public DbSet<Status> Statuses { get; set; }
        public DbSet<Occasion> Occasions { get; set; }

        public PhotoGalleryContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            foreach (var entity in modelBuilder.Model.GetEntityTypes())
            {
                entity.Relational().TableName = entity.DisplayName();
            }

            // Photos
            modelBuilder.Entity<Photo>().Property(p => p.Title).HasMaxLength(100);
            modelBuilder.Entity<Photo>().Property(p => p.AlbumId).IsRequired();

            // Album
            modelBuilder.Entity<Album>().Property(a => a.Title).HasMaxLength(100);
            modelBuilder.Entity<Album>().Property(a => a.Description).HasMaxLength(500);
            modelBuilder.Entity<Album>().HasMany(a => a.Photos).WithOne(p => p.Album);

            // User
            modelBuilder.Entity<User>().Property(u => u.Username).IsRequired().HasMaxLength(100);
            modelBuilder.Entity<User>().Property(u => u.Email).IsRequired().HasMaxLength(200);
            modelBuilder.Entity<User>().Property(u => u.HashedPassword).IsRequired().HasMaxLength(200);
            modelBuilder.Entity<User>().Property(u => u.Salt).IsRequired().HasMaxLength(200);

            // UserRole
            modelBuilder.Entity<UserRole>().Property(ur => ur.UserId).IsRequired();
            modelBuilder.Entity<UserRole>().Property(ur => ur.RoleId).IsRequired();

            // Role
            modelBuilder.Entity<Role>().Property(r => r.Name).IsRequired().HasMaxLength(50);

            //Product
            modelBuilder.Entity<Product>().Property(p => p.Name).IsRequired().HasMaxLength(50);
            modelBuilder.Entity<Product>().Property(p => p.Description).HasMaxLength(5000);
            modelBuilder.Entity<Product>().Property(p => p.Code).IsRequired().HasMaxLength(8);

            //ProductType
            modelBuilder.Entity<ProductType>().Property(pc => pc.Name).IsRequired().HasMaxLength(50);

            //Status
            modelBuilder.Entity<Status>().Property(pc => pc.Name).IsRequired().HasMaxLength(50);
            modelBuilder.Entity<Status>().Property(pc => pc.Description).IsRequired().HasMaxLength(500);

            //managing many to many relationship
            modelBuilder.Entity<ProductTypeStatus>()
                .HasKey(t => new { t.ProductTypeId, t.StatusId});

            modelBuilder.Entity<ProductTypeStatus>()
                .HasOne(pt => pt.ProductType)
                .WithMany(p => p.ProductTypeStatuses)
                .HasForeignKey(pt => pt.ProductTypeId);

            modelBuilder.Entity<ProductTypeStatus>()
                .HasOne(pt => pt.Status)
                .WithMany(p => p.ProductTypeStatuses)
                .HasForeignKey(pt => pt.StatusId);

            //occasions
            modelBuilder.Entity<Occasion>().Property(pc => pc.Name).IsRequired().HasMaxLength(50);
            modelBuilder.Entity<Occasion>().Property(pc => pc.Description).IsRequired().HasMaxLength(500);

            //managing many to many relationship
            modelBuilder.Entity<ProductOccasion>()
                .HasKey(t => new { t.ProductId, t.OccasionId });

            modelBuilder.Entity<ProductOccasion>()
                .HasOne(pt => pt.Product)
                .WithMany(p => p.ProductOccasions)
                .HasForeignKey(pt => pt.ProductId);

            modelBuilder.Entity<ProductOccasion>()
                .HasOne(pt => pt.Occasion)
                .WithMany(p => p.ProductOccasions)
                .HasForeignKey(pt => pt.OccasionId);
        }
    }
}

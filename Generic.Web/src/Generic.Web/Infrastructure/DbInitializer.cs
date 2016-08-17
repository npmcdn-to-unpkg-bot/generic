using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Generic.Web.Entities;

namespace Generic.Web.Infrastructure
{
    public static class DbInitializer
    {
        private static PhotoGalleryContext context;
        public static void Initialize(IServiceProvider serviceProvider, string imagesPath)
        {
            context = (PhotoGalleryContext)serviceProvider.GetService(typeof(PhotoGalleryContext));

            InitializePhotoAlbums(imagesPath);
            InitializeUserRoles();
            InitializeProduct();
        }

        private static void InitializeProduct()
        {
            //occasions
            if (!context.Occasions.Any())
            {
                context.Occasions.AddRange(
                    new Occasion() { Name = "Any Occasion", Description = "" },
                    new Occasion() { Name = "Summer", Description = "" },
                    new Occasion() { Name = "Birthday", Description = "" },
                    new Occasion() { Name = "Love & Romance", Description = "" },
                    new Occasion() { Name = "Anniversary", Description = "" },
                    new Occasion() { Name = "New Baby", Description = "" },
                    new Occasion() { Name = "Congratulations", Description = "" },
                    new Occasion() { Name = "Thanks", Description = "" },
                    new Occasion() { Name = "Get Well", Description = "" },
                    new Occasion() { Name = "Sympathy", Description = "" },
                    new Occasion() { Name = "Wedding", Description = "" },
                    new Occasion() { Name = "Ceremonies", Description = "" },
                    new Occasion() { Name = "Wedding Party - Floral", Description = "" },
                    new Occasion() { Name = "Reception", Description = "" },
                    new Occasion() { Name = "Corsages & Boutonnieres", Description = "" },
                    new Occasion { Name = "Wedding Accessories", Description = "" });

                context.SaveChanges();
            }

            //Status
            if (!context.Statuses.Any())
            {
                var status1 = context.Statuses.Add(new Status { Name = "Good", Description = "The floral arrangement is designed as shown in the picture"}).Entity;
                var status2 = context.Statuses.Add(new Status { Name = "Better", Description = "The floral arrangement is designed as shown in the picture, upgraded with either more flowers or more expensive flowers than the 'Good' product version."}).Entity;
                var status3 = context.Statuses.Add(new Status { Name = "Best", Description = "The floral arrangement is designed as shown in the picture, upgraded with either more flowers or more expensive flowers than the 'Better' product version."}).Entity;

                //productTypes
                if (!context.ProductTypes.Any())
                {
                    var productTypes = new List<ProductType>()
                    {
                        new ProductType
                        {
                            Name = "Roses",
                            Description = ""
                        },
                        new ProductType
                        {
                            Name = "FTD Exclusives",
                            Description = ""
                        },
                        new ProductType
                        {
                            Name = "Plants",
                            Description = ""
                        },
                        new ProductType
                        {
                            Name = "Gourmet Baskets",
                            Description = ""
                        },
                        new ProductType
                        {
                            Name = "Corporate Gifts",
                            Description = ""
                        },
                        new ProductType
                        {
                            Name = "FTD Luxury Collection",
                            Description = ""
                        },
                        new ProductType
                        {
                            Name = "Better Homes and Gardens",
                            Description = ""
                        }
                    };

                    context.ProductTypes.AddRange(productTypes);

                    foreach (var productType in productTypes)
                    {
                        context.Set<ProductTypeStatus>().Add(new ProductTypeStatus
                        {
                            ProductType = productType,
                            Status = status1
                        });
                        context.Set<ProductTypeStatus>().Add(new ProductTypeStatus
                        {
                            ProductType = productType,
                            Status = status2
                        });
                        context.Set<ProductTypeStatus>().Add(new ProductTypeStatus
                        {
                            ProductType = productType,
                            Status = status3
                        });
                    }
                }

                context.SaveChanges();
            }
            
        }

        private static void InitializePhotoAlbums(string imagesPath)
        {
            if (!context.Albums.Any())
            {
                List<Album> _albums = new List<Album>();

                var _album1 = context.Albums.Add(
                    new Album
                    {
                        DateCreated = DateTime.Now,
                        Title = "Album 1",
                        Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    }).Entity;
                var _album2 = context.Albums.Add(
                    new Album
                    {
                        DateCreated = DateTime.Now,
                        Title = "Album 2",
                        Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    }).Entity;
                var _album3 = context.Albums.Add(
                    new Album
                    {
                        DateCreated = DateTime.Now,
                        Title = "Album 3",
                        Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    }).Entity;
                var _album4 = context.Albums.Add(
                    new Album
                    {
                        DateCreated = DateTime.Now,
                        Title = "Album 4",
                        Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    }).Entity;

                _albums.Add(_album1); _albums.Add(_album2); _albums.Add(_album3); _albums.Add(_album4);

                string[] _images = Directory.GetFiles(Path.Combine(imagesPath, "images"));
                Random rnd = new Random();

                foreach (string _image in _images)
                {
                    int _selectedAlbum = rnd.Next(1, 4);
                    string _fileName = Path.GetFileName(_image);

                    context.Photos.Add(
                        new Photo()
                        {
                            Title = _fileName,
                            DateUploaded = DateTime.Now,
                            Uri = _fileName,
                            Album = _albums.ElementAt(_selectedAlbum)
                        }
                        );
                }

                context.SaveChanges();
            }
        }

        private static void InitializeUserRoles()
        {
            if (!context.Roles.Any())
            {
                // create roles
                context.Roles.AddRange(new Role[]
                {
                new Role()
                {
                    Name="Admin"
                }
                });

                context.SaveChanges();
            }

            if (!context.Users.Any())
            {
                context.Users.Add(new User()
                {
                    Email = "ycabrerago@gmail.com",
                    Username = "admin",
                    HashedPassword = "9wsmLgYM5Gu4zA/BSpxK2GIBEWzqMPKs8wl2WDBzH/4=",
                    Salt = "GTtKxJA6xJuj3ifJtTXn9Q==",
                    IsLocked = false,
                    DateCreated = DateTime.Now
                });

                // create user-admin for chsakell
                context.UserRoles.AddRange(new UserRole[] {
                new UserRole() {
                    RoleId = 1, // admin
                    UserId = 1  // ycabrerago
                }
            });
                context.SaveChanges();
            }
        }
    }
}

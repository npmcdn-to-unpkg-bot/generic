using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Generic.Web.Entities;
using Generic.Web.Infrastructure.Core;
using Generic.Web.Infrastructure.Repositories.Abstract;
using Generic.Web.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace Generic.Web.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private readonly IProductRepository _productRepository;
        private readonly ILoggingRepository _loggingRepository;

        public ProductController(IProductRepository productRepository, ILoggingRepository loggingRepository)
        {
            _productRepository = productRepository;
            _loggingRepository = loggingRepository;
        }

        [HttpGet("{page:int=0}/{pageSize=12}")]
        public PaginationSet<ProductViewModel> Get(int page, int pageSize)
        {
            PaginationSet<ProductViewModel> pagedSet = null;

            try
            {
                var products = _productRepository
                    .AllIncluding(p => p.ProductStatuses, p => p.ProductType)
                    .OrderBy(p => p.Name)
                    .Skip(page * pageSize)
                    .Take(pageSize)
                    .ToList();

                var totalCount = _productRepository.GetAll().Count();

                var viewModels = Mapper.Map<IEnumerable<Product>, IEnumerable<ProductViewModel>>(products);

                pagedSet = new PaginationSet<ProductViewModel>()
                {
                    Page = page,
                    TotalCount = totalCount,
                    TotalPages = (int)Math.Ceiling((decimal)totalCount / pageSize),
                    Items = viewModels
                };

            }
            catch (Exception ex)
            {
                _loggingRepository.Add(new Error() { Message = ex.Message, StackTrace = ex.StackTrace, DateCreated = DateTime.Now });
                _loggingRepository.Commit();
            }

            return pagedSet;
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> Get(int id)
        {
            ProductDetailViewModel viewModel = null;

            try
            {
                var product = await _productRepository.GetDetail(id);
                viewModel = Mapper.Map<Product, ProductDetailViewModel>(product);
            }
            catch (Exception ex)
            {
                _loggingRepository.Add(new Error() { Message = ex.Message, StackTrace = ex.StackTrace, DateCreated = DateTime.Now });
                _loggingRepository.Commit();
            }

            return Json(viewModel);
        }
    }
}

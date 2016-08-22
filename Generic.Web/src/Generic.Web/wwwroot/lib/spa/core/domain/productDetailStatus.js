"use strict";
var ProductDetailStatus = (function () {
    function ProductDetailStatus(price, imageUrl, status, statusDescription) {
        this.Price = price;
        this.ImageUrl = imageUrl;
        this.Status = status;
        this.StatusDescription = statusDescription;
    }
    return ProductDetailStatus;
}());
exports.ProductDetailStatus = ProductDetailStatus;

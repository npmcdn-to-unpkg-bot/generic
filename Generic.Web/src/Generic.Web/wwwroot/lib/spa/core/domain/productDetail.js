"use strict";
var ProductDetail = (function () {
    function ProductDetail(id, name, description, code, productStatuses) {
        this.Id = id;
        this.Name = name;
        this.Description = description;
        this.Code = code;
        this.ProductStatuses = productStatuses;
    }
    return ProductDetail;
}());
exports.ProductDetail = ProductDetail;

import { ProductDetailStatus } from './productDetailStatus';

export class ProductDetail {
    Id: number;
    Name: string;
    Description: string;
    Code: string;
    ProductStatuses: Array<ProductDetailStatus>;

    constructor(
      id: number,
      name: string,
      description: string,
      code: string,
      productStatuses: Array<ProductDetailStatus>) {
        this.Id = id;
        this.Name = name;
        this.Description = description;
        this.Code = code;
        this.ProductStatuses = productStatuses;
    }
}
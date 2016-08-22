export class ProductDetailStatus {
    Price: number;
    ImageUrl: string;
    Status: string;
    StatusDescription: string;

    constructor(
        price: number,
        imageUrl: string,
        status: string,
        statusDescription: string) {
        this.Price = price;
        this.ImageUrl = imageUrl;
        this.Status = status;
        this.StatusDescription = statusDescription;
    }
}
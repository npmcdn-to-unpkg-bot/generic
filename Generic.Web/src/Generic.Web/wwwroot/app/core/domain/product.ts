export class Product {
    Id: number;
    Name: string;
    Code: string;
    Price: number;
    ImageUrl: string;

    constructor(
      id: number,
      name: string,
      code: string,
      price: number,
      imageUrl: string) {
        this.Id = id;
        this.Name = name;
        this.Code = code;
        this.Price = price;
        this.ImageUrl = imageUrl;
    }
}
export class ProductDetail {
    Id: number;
    Name: string;
    Description: string;
    Code: string;

    constructor(
      id: number,
      name: string,
      description: string,
      code: string) {
        this.Id = id;
        this.Name = name;
        this.Description = description;
        this.Code = code;
    }
}
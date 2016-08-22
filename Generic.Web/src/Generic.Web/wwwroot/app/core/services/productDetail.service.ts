import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ProductDetail } from '../domain/productDetail';

@Injectable()
export class ProductDetailService{
    
    private productDetailsUrl: string = 'api/product/';

    constructor(private http: Http){

    }

    getProductDetail(id: number): Promise<ProductDetail> {
        const uri = `${this.productDetailsUrl}${id}`;
        
        return this.http.get(uri, { headers: new Headers() })
               .toPromise()
               .then(response => response.json() as ProductDetail)
               .catch(this.handleError);
  }

   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { category } from '../common/category';
import { product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
 
export class ManagementServiceService {
    proURL = "http://localhost:8080/api/product"
    catURL  = "http://localhost:8080/api/categories"
    constructor( private httpClient : HttpClient) { }
  
    getAllCategories()  : Observable<category[]>{
      return this.httpClient.get<getCategoryResponse>(this.catURL).pipe(map(response => response._embedded.categories))
    }
   
    getAllProducts() : Observable<product[]>{
      return this.httpClient.get<getProductResponse>(this.proURL).pipe(map(response => response._embedded.products))
    }

    getProductById(id: number) : Observable<product> {
      const idURL = "http://localhost:8080/api/product/"+id
      return this.httpClient.get<product>(idURL);
    }

    saveProduct(product : product) : Observable<product>{
      console.log(product)
  
      const httpOptions = {
        headers : new HttpHeaders({
            'Content-Type' : 'application/json',
            'Authorization' : 'auth-token',
            'Access-Control-Allow-Origin' : '*'
        })
      }
      return this.httpClient.post<product>(this.proURL,product,httpOptions);
  }
  
  updateProduct(product : product): Observable<product>{
    console.log(product)
  
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    }
  
    return this.httpClient.put<product>(this.proURL+`/${product.id}`,product,httpOptions)
  }
  
  
  }
  
  interface getCategoryResponse {
    _embedded : {
        categories : category[]
    }
}

interface getProductResponse {
  _embedded : {
      products : product[]
  }
}
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

    saveProduct(pro : product) : Observable<product>{
      console.log(pro)
  
      const httpOptions = {
        headers : new HttpHeaders({
            'Content-Type' : 'application/json',
            'Authorization' : 'auth-token',
            'Access-Control-Allow-Origin' : '*'
        })
      }
      return this.httpClient.post<product>(this.proURL,pro,httpOptions);
  }

  getProductByCatId(categoryid: number):Observable<product[]>{
    const productcatURL = "http://localhost:8080/api/product/search/findBycategoryid?categoryid="+categoryid;
    return this.httpClient.get<getProductResponse>(productcatURL).pipe(map(response=>response._embedded.products))
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

  getProductByName(name: String): Observable<product[]>{
    const pronameURL = "http://localhost:8080/api/product/search/findByName?name=" + name
    return this.httpClient.get<getProductResponse>(pronameURL).pipe(map(response => response._embedded.products))
  }
  
  deleteProduct(id : number): Observable<product>{
    console.log(id)
  
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
  
    return this.httpClient.delete<product>(this.proURL+`/${id}`,httpOptions)
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
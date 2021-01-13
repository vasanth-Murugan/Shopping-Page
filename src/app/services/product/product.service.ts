import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  public url: string= "/assets/data/product.json";
  constructor(private http:HttpClient) { }
  
  getProducts(): Observable<Product[]>{
    
   return  this.http.get<Product[]>(this.url);
  }

  addProductToCart(products: any) {
    localStorage.setItem("product", JSON.stringify(products));
  }

  getProductFromCart() {
    // return localStorage.getItem("product");
    return JSON.parse(localStorage.getItem('product') as any);
  }

  removeAllProductFromCart() {
    return localStorage.removeItem("product");
  }

  deleteproduct(prod: any) {
    let cart = JSON.parse(localStorage.getItem('product') as any);
    for(let i = 0; i <cart.length; i++) {
     if(cart[i].name == prod) {
         cart.splice(i, 1);
     }
  }
  return localStorage.setItem("product", JSON.stringify(cart));
  }


  cartcount(){
   let cart=0 ;
       let count = JSON.parse(localStorage.getItem('product') as any);
       if(count == null){
         return 0;
       }
       else {
         cart = count.length;
         return cart;
       }
  }

   
calculteAllTotal(allItems:Product[])
{
  let total=0;
  for (let i in allItems) {
    total= total+(allItems[i].Quantity *allItems[i].price);
 }
 return total;
}
}

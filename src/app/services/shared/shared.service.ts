import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private currentCartCount = new BehaviorSubject(this.productservice.cartcount());
  currentMessage = this.currentCartCount.asObservable();

  constructor(private productservice:ProductService) {
   }
   updateCartCount(count: number) {
    this.currentCartCount.next(count)
  }

}

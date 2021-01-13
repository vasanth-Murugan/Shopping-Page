import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product/product.service';
import { SharedService } from '../../services/shared/shared.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {
  productList:Product[] | any;
  allTotal:number | any;
  cartItemCount:number=0;
  shipping: number | any;
  constructor(private productservice:ProductService,private sharedService:SharedService) { }

  ngOnInit() {
    this.cartItemCount=this.productservice.cartcount();
    this.productList=this.productservice.getProductFromCart();
   this.productservice.addProductToCart(this. productList);
   this.allTotal=this.productservice.calculteAllTotal(this.productList);
   this.shipping = "50";
  }

  onAddQuantity(product:Product)
  {
    
    this.productList=this.productservice.getProductFromCart();
    this.productList.find((p: { id: string; })=>p.id==product.id).Quantity = product.Quantity+1;
    this.allTotal=this.productservice.calculteAllTotal(this.productList);
    this.productservice.addProductToCart(this.productList);

  }
  onRemoveQuantity(product:Product)
  {
    if(product.Quantity>1){
    this.productList=this.productservice.getProductFromCart();
    this.productList.find((p: { id: string; })=>p.id==product.id).Quantity = product.Quantity-1;
    this.productservice.addProductToCart(this.productList);
    this.allTotal=this.productservice.calculteAllTotal(this.productList);
  }
  }

 clear(){
      this.productservice.removeAllProductFromCart();
      
 }

delete(prod: any){
  this.productservice.deleteproduct(prod);
  this.productList = this.productservice.getProductFromCart();
  this.productservice.addProductToCart(this.productList);
  this.allTotal=this.productservice.calculteAllTotal(this.productList);
  const count = this.productList;
  this.sharedService.updateCartCount(count.length);
}


}




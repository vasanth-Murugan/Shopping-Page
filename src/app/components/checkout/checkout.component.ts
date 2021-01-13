import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product/product.service';
import { SharedService } from '../../services/shared/shared.service';
import { BuyComponent } from './dialog/buy/buy.component';
import { Dialog1Component } from './dialog/dialog1/dialog1.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  productList:  Product[] | any;
  allTotal:number | any;
  cartItemCount:number=0;

  constructor(private productservice:ProductService,private sharedService:SharedService,public dialog: MatDialog) { }

  ngOnInit() {
    this.productList = this.productservice.getProductFromCart();
    this.allTotal=this.productservice.calculteAllTotal(this.productList);
    this.sharedService.currentMessage.subscribe(msg => this.cartItemCount = msg);

  }

  
 confirm(){
  // alert("confirm you");
  // this.productservice.removeAllProductFromCart();
  // this.sharedService.updateCartCount(0);
  // this.productList = null;
  // this.allTotal = 0;
  if(this.cartItemCount > 0){
  this.dialog.open(Dialog1Component);
}
else{
  this.dialog.open(BuyComponent);

  setTimeout(()=>{
      this.dialog.closeAll()
    },1000);
}
  
}


}


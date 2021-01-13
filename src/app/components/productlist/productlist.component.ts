import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from '../../services/product/product.service';
import { SharedService } from '../../services/shared/shared.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  productList: Product[] = [];
  cartItemCount: number = 0;
  // @Output() cartEvent = new EventEmitter<number>();
  productAddedTocart= [] as any;
  button: any;

  constructor(private productService: ProductService,private sharedService:SharedService,private toastr: ToastrService,private router:Router) { }

  ngOnInit() {
    this.productService.getProducts()
    .subscribe(data => this.productList=data);
  }

  OnAddCart(product:Product)
  {
  this.productAddedTocart=this.productService.getProductFromCart();
  if(this.productAddedTocart==null)
  {
    this.productAddedTocart=[];
    this.productAddedTocart.push(product);
    this.productService.addProductToCart(this.productAddedTocart);
    this.toastr.success('Product added succesfully','',{timeOut: 1000})

  }
  else
  {
    
    let tempProduct=this.productAddedTocart.find((p: { id: string; })=>p.id==product.id);
    if(tempProduct==null)
    {
      this.productAddedTocart.push(product);
      this.productService.addProductToCart(this.productAddedTocart);
     
      this.toastr.success('Product added succesfully','',{timeOut: 1000})
      
    }
    else{
    this.toastr.warning("Product already exists",'',{timeOut:1000})
    }
    
  }
 
  this.cartItemCount=this.productAddedTocart.length;
  this.sharedService.updateCartCount(this.cartItemCount);
}
go(element: any){
  this.button = element;
  this.button.textContent = 'go to cart';
}
}   





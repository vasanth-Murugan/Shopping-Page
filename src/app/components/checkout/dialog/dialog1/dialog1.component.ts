import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../../../../services/product/product.service';
import { SharedService } from '../../../../services/shared/shared.service';
import { Dialog2Component } from '../dialog2/dialog2.component';

@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.css']
})
export class Dialog1Component  {
  cartItemCount:number=0;

  constructor(private productservice:ProductService,private sharedService:SharedService,public dialog: MatDialog) { }

  onconfirm(){
    this.dialog.closeAll();
    this.productservice.removeAllProductFromCart();
   this.sharedService.updateCartCount(0);
    this.dialog.open(Dialog2Component);


  // const dial = this.dialog.open(Dialogcontent2Component);
  // setTimeout(()=>{
  //   this.dialog.closeAll()
  // },2000);
  }
  oncancel(){
    this.dialog.closeAll();
  }

  
}
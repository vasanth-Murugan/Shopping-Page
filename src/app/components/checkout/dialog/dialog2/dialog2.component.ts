import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog2',
  templateUrl: './dialog2.component.html',
  styleUrls: ['./dialog2.component.css']
})
export class Dialog2Component  {

  constructor(public dialog: MatDialog,private route: Router) { }

 done(){
  this.dialog.closeAll();
  this.route.navigateByUrl("/home");
  
 }
}








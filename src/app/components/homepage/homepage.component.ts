import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  Amount: any;
  Amount1: any;
  Amount2: any;
  Amount3: any;

  constructor() { }

  ngOnInit() {
    this.Amount="12500";
    this.Amount1="10500";
    this.Amount2="11500";
    this.Amount3="12000"
  }

}




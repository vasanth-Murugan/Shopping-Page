import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  display(){
    this.router.navigateByUrl('/display');
  }


}

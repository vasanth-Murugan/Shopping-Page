import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartpageComponent } from './components/cartpage/cartpage.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ExploreComponent } from './components/explore/explore.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductdisplayComponent } from './components/productdisplay/productdisplay.component';

const routes: Routes = [
  {path:'cart',component:CartpageComponent},
  {path:'home',component:ExploreComponent},
  {path:'display',component:ProductdisplayComponent},
  {path:'checkout',component:CheckoutComponent},

  {path:'homepage',component:HomepageComponent},
  { path: '',   redirectTo: '/homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

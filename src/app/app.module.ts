import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { MaterialModule } from '../app/material/material.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ExploreComponent } from './components/explore/explore.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductdisplayComponent } from './components/productdisplay/productdisplay.component';
import { CartpageComponent } from './components/cartpage/cartpage.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BuyComponent } from './components/checkout/dialog/buy/buy.component';
import { Dialog1Component } from './components/checkout/dialog/dialog1/dialog1.component';
import { Dialog2Component } from './components/checkout/dialog/dialog2/dialog2.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ExploreComponent,
    SidebarComponent,
    ProductlistComponent,
    ProductdisplayComponent,
    CartpageComponent,
    CheckoutComponent,
    NavbarComponent,
    BuyComponent,
    Dialog1Component,
    Dialog2Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

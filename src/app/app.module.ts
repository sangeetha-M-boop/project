import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { CarsComponent } from './components/cars/cars.component';
import { BikesComponent } from './components/bikes/bikes.component';
import { AddvehiclesComponent } from './components/addvehicles/addvehicles.component';
import { ManagevehiclesComponent } from './components/managevehicles/managevehicles.component';
import { ViewordersComponent } from './components/vieworders/vieworders.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { BookingComponent } from './components/booking/booking.component';
import { ViewvehicalsComponent } from './components/viewvehicals/viewvehicals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    CarsComponent,
    BikesComponent,
    AddvehiclesComponent,
    ManagevehiclesComponent,
    ViewordersComponent,
    WishlistComponent,
    BookingComponent,
    ViewvehicalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

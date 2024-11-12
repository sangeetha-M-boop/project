import { Injectable } from '@angular/core';
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }
  orders:any=[];
  getOrders(){
    return of (this.orders);

  }
  addtoOrders(neworders:any){
    this.orders.push(neworders);
  }
}

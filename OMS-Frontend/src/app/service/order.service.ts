import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Order } from '../order/order.component';

export class Order{
  constructor(
    public userid:string,
    public id:string,
    public orderTime:Date,
    public orderType:string,
    public buyOrSell:string,
    public quantity:string,
    public price:string,
    public allOrNone:string,
    public minFill:string,
    public orderStatus:string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private orderClient:HttpClient) { }

  public getOrders(){
    console.log("getting orders");
    return this.orderClient.get<Order[]>("http://localhost:8080/order");
  }

  public addOrder(order){
    console.log("order to be added : " + order);
    return this.orderClient.post<Order>("http://localhost:8080/order", order);
  }
}

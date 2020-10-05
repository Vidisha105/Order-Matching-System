import { Component, OnInit, ViewChild } from '@angular/core';

import { Order, OrderService} from '../service/order.service'

import { faCoffee, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import {PriceErrorComponent} from '../price-error/price-error.component';
import { MarketBuyErrorComponent } from '../market-buy-error/market-buy-error.component';
import { MarketSellErrorComponent } from '../market-sell-error/market-sell-error.component';
import { SubmissionComponent } from '../submission/submission.component';
import { FormControl, Validators } from '@angular/forms';
import { MinFillErrorComponent } from '../min-fill-error/min-fill-error.component';
import { TimeComponentComponent } from '../time-component/time-component.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {
  order:Order = new Order("","",new Date(),"","","","","0","","");
  orders : Order[];
  

  pbuy = false;
  psell = false;
  slidervalue = false;
  buyoption = 'None';
  selloption = 'None';
  buycategory = true;
  sellcategory = true;
  validprice = true;
  
  faCoffee = faCoffee;
  ltpinfo = faInfoCircle;
  priceinfo = faInfoCircle;
  quantityinfo = faInfoCircle;
  isbuyavailable = false;
  issellavailable = false;
  curr;
  f = 0;
  t = 0;

  ltp = 2685
  maxlimit = (this.ltp + this.ltp/10).toFixed(2);
  minlimit = (this.ltp - this.ltp/10).toFixed(2);

  //rateControl = new FormControl("", [Validators.max(parseInt(this.order.quantity)), Validators.min(0)])
  //val = 0;

  constructor(private orderservice : OrderService,
              public dialog: MatDialog) { }

  onSliderChange(){
    this.slidervalue = !this.slidervalue;
  }

  enablebuyprice(){
    this.pbuy = false;
  }

  disablebuyprice(){
    this.pbuy = true;
    this.order.price = "";
    this.buyoption = "None"
  }

  enablesellprice(){
    this.psell = false;
  }

  disablesellprice(){
    this.psell = true;
    this.order.price = "";
    this.buyoption = "None"
  }

  buytoggle(){
    this.psell = false;
  }

  selltoggle(){
    this.pbuy = false;
  }

  checkminbuy(){
    if(this.buyoption == "Minimum Filled")
    return false;
    return true;
  }

  checkminsell(){
    if(this.selloption == "Minimum Filled")
    return false;
    return true;
  }

  validate(myform):void{
    let val = this.order.price;
    let len = val.length;
    
    //PRICE VALIDATION START
    if(len >= 3 && val[len-3] == '.' && val[len-1] != '5' && val[len-1] != '0'){
      this.f = 1;
    }
    else if(parseFloat(val) < parseFloat(this.minlimit) || parseFloat(val) > parseFloat(this.maxlimit)){
      this.f = 1;
    }
    //PRICE-VALIDATION-END

    
      //MARKET-LIMIT VALIDATION
      if(this.slidervalue){
        console.log("this is a SELL order");
        /*if(this.psell && !this.issellavailable){
          let dialogRef = this.dialog.open(MarketSellErrorComponent, {
            width: '250px',
          });
    
          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
          });
          return;
        }*/
        if(this.selloption == "All or None"){
          this.order.allOrNone = "1";
          this.order.minFill = "0";
        }
        else if(this.selloption == "None"){
          this.order.minFill = "0";
          this.order.allOrNone = "0";
        }
        this.order.buyOrSell = "SELL";
        if(!this.psell)
        this.order.orderType = "LIMIT";
        else
        this.order.orderType = "MARKET";
      }
      else{
        console.log("this is a BUY order");
        /*
        if(this.pbuy && !this.isbuyavailable){
          let dialogRef = this.dialog.open(MarketBuyErrorComponent, {
            width: '250px',
          });
    
          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
          });

          return;
        }
        */
        
        if(this.buyoption == "All or None"){
          this.order.allOrNone = "1";
          this.order.minFill = "0";
        }
        else if(this.buyoption == "None"){    
           this.order.minFill = "0";
           this.order.allOrNone = "0";
        }
        this.order.buyOrSell = "BUY";
        if(!this.pbuy)
        this.order.orderType = "LIMIT";
        else
        this.order.orderType = "MARKET";
      }
      //MARKET-LIMIT VALIDATION-END
      
      //MIN-FILL VALIDATION-START
      if((parseInt(this.order.minFill) > 0) && (parseInt(this.order.minFill) > parseInt(this.order.quantity))){
        let dialogRef = this.dialog.open(MinFillErrorComponent, {
          width: '250px',
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });

        return;
      }
      //MIN-FILL VALIDATION-END

      //DATE-TIME-SHENANIGANS
      let currtime = (<HTMLInputElement>(document.getElementById("time"))).value;
      if(currtime == "")
      currtime = "00:00:00";
      console.log(currtime);
      let hrs = parseInt(currtime.substr(0,2));
      let mins = parseInt(currtime.substr(3,2));
      let secs = parseInt(currtime.substr(6,2));

      if(hrs < 11 || hrs > 12){
        this.t = 1;
      }
      else if(hrs == 12 && (mins || secs)){
        this.t = 1;
      }
      console.log(this.t);
      this.order.orderTime = new Date(new Date().toISOString().slice(0,10) + " " + currtime);
      console.log(this.order.orderTime);
      //DATE-TIME-SHENANIGANS

      if(this.f){
        this.order.orderStatus = "REJECTED";
        let dialogRef = this.dialog.open(PriceErrorComponent, {
          width: '250px',
        });
  
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      }
      else if(this.t){
        this.order.orderStatus = "REJECTED";
        let dialogRef = this.dialog.open(TimeComponentComponent, {
          width: '250px',
        });
  
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      }
      else{
      this.order.orderStatus = "PENDING";
      //this.order.orderStatus = "EXECUTED";
      }

      this.order.userid = "user1";
      console.log(this.order);
      this.orderservice.addOrder(this.order)
      .subscribe(data => {

        if(this.f || this.t){
          this.f = 0;
          this.t = 0;
          return;
        }

        let dialogRef = this.dialog.open(SubmissionComponent, {
          width: '250px',
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      });
      //myform.reset();
      //window.location.reload();
  
}

  ngOnInit(): void {

    //(<HTMLInputElement>(document.getElementById("time"))).value = new Date().toDateString();

    /*this.orderservice.getOrders().subscribe(data => {this.orders = data;
      for(let i = 0;i<this.orders.length;i++){
        if(this.orders[i].buyOrSell == "SELL" && this.orders[i].orderType == "LIMIT")
          this.isbuyavailable = true;
        if(this.orders[i].buyOrSell == "BUY" && this.orders[i].orderType == "LIMIT")
          this.issellavailable = true;
        if(this.isbuyavailable && this.issellavailable)
        break;
      }
    });*/
    //console.log(typeof(this.orders));
    //this.orders.forEach(data => console.log("allo sir"));
  }

}

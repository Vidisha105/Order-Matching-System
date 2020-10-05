import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MarketSellErrorComponent } from '../market-sell-error/market-sell-error.component';

@Component({
  selector: 'app-time-component',
  templateUrl: './time-component.component.html',
  styleUrls: ['./time-component.component.css']
})
export class TimeComponentComponent implements OnInit {

  constructor(public dialogref : MatDialogRef<MarketSellErrorComponent>,@Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
  }

  ok(){
    this.dialogref.close();
  }
  
}

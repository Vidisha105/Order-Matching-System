import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-market-buy-error',
  templateUrl: './market-buy-error.component.html',
  styleUrls: ['./market-buy-error.component.css']
})
export class MarketBuyErrorComponent implements OnInit {

  constructor(public dialogref : MatDialogRef<MarketBuyErrorComponent>,@Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
  }

  ok(){
    this.dialogref.close();
  }

}

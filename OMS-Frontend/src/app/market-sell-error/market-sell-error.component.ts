import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-market-sell-error',
  templateUrl: './market-sell-error.component.html',
  styleUrls: ['./market-sell-error.component.css']
})
export class MarketSellErrorComponent implements OnInit {

  constructor(public dialogref : MatDialogRef<MarketSellErrorComponent>,@Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
  }

  ok(){
    this.dialogref.close();
  }
  
}

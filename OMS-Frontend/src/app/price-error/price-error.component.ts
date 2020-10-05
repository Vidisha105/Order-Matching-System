import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-price-error',
  templateUrl: './price-error.component.html',
  styleUrls: ['./price-error.component.css']
})
export class PriceErrorComponent implements OnInit {

  constructor(public dialogref : MatDialogRef<PriceErrorComponent>,@Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
  }

  ok(){
    this.dialogref.close();
  }

}


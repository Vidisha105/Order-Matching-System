import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-min-fill-error',
  templateUrl: './min-fill-error.component.html',
  styleUrls: ['./min-fill-error.component.css']
})
export class MinFillErrorComponent implements OnInit {

  constructor(public dialogref : MatDialogRef<MinFillErrorComponent>,@Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
  }

  ok(){
    this.dialogref.close();
  }
  
}

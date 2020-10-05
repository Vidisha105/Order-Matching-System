import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';  

@Component({
  selector: 'app-signup-complete',
  templateUrl: './signup-complete.component.html',
  styleUrls: ['./signup-complete.component.css']
})
export class SignupCompleteComponent implements OnInit {

  constructor(public dialogref : MatDialogRef<SignupCompleteComponent>,@Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
  }

  ok(){
    this.dialogref.close();
  }


}

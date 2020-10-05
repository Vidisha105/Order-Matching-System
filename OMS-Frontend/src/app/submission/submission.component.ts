import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {

  constructor(public dialogref : MatDialogRef<SubmissionComponent>,@Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
  }

  ok(){
    this.dialogref.close();
    window.location.reload();
  }

}

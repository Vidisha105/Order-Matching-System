import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, NgForm, Form} from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AuthenticationService, User } from '../service/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginErrorComponent } from '../login-error/login-error.component';
import { SignupCompleteComponent } from '../signup-complete/signup-complete.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailLogin = new FormControl('', [Validators.required, Validators.email]);
  passwordLogin = new FormControl('',[Validators.required,Validators.required]);

  emailSignUp = new FormControl('',[Validators.required, Validators.email]);
  passwordSignUp = new FormControl('', [Validators.required, Validators.required]);
  userNameSignUp = new FormControl('',[Validators.required,Validators.required]);

  emailId:string;
  username: string;
  password:string;
  usernameSignup: string;
  passwordSignup:string;
  status:string;
  flag:boolean = false;

  users = {};

  user: User= new User();


  constructor(private router: Router,
    private authentication: AuthenticationService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.flag = false;
    console.log('In ngOninit'+this.flag);
  }

  checkUser(){

    if(this.emailLogin.value == null && this.passwordLogin.value == null)
    return false;

    for(var i in this.users)
    {
      if(this.users[i].emailAddress!=this.emailLogin.value || this.users[i].password!=this.passwordLogin.value){
       this.flag = true;   // Either email address or password does not match       
      }
      else{
        this.flag=false;    // He is a valid user
        break;
      }
    }

    if(this.flag==true && this.emailLogin.value!=null && this.passwordLogin.value!=null){
      console.log('Not a valid user');
      return false;
    }
    else{
      console.log('Valid User');
      console.log(this.passwordLogin.value);
      return true;
    }
  }

  loginUser(){
    this.user.username = this.username;
    this.user.pass_word = this.password;
    console.log(this.user);
    
    this.authentication.authenticateUser(this.user).subscribe(res => {
      console.log(res)
      if((this.checkUser) && res!=null){
        sessionStorage.setItem('authenticationStatus', 'valid');
        this.router.navigate(['orderbook']);
      }
      else{
        let dialogRef = this.dialog.open(LoginErrorComponent, {
          width: '250px',
        });
  
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
        window.location.reload();
      }
    
    });
    /*
    if((this.checkUser) && (this.authentication.authenticateUser(this.user)!=null)){
      sessionStorage.setItem('authenticationStatus', 'valid');
      this.router.navigate(['orderbook']);}*/
    
  }


  getErrorMessage() {

    if(this.emailLogin.touched){
    return this.emailLogin.hasError('required') ? 'You must enter a value' :
        this.emailLogin.hasError('emailLogin') ? 'Not a valid email' :
            '';
          }
    if(this.emailSignUp.touched){
      return this.emailSignUp.hasError('required') ? 'You must enter a value' :
      this.emailSignUp.hasError('emailSignUp') ? 'Not a valid email' : '';
    }   

    if(this.userNameSignUp.touched){
      return this.userNameSignUp.hasError('required') ? 'You must enter your username' :
      this.userNameSignUp.hasError('userNameSignUp') ? 'Not a valid Username' : '';
    }
  }

  /*
  createUser(userForm: NgForm){
    console.log(JSON.stringify(userForm.value));
  }*/

  createUser(){
    this.user.username = this.usernameSignup;
    this.user.pass_word = this.passwordSignup;
    this.user.email_id = this.emailId;
    console.log(this.user);
    this.authentication.createUser(this.user).subscribe(res => {
      console.log(res)
      if(res!=null){
        let dialogRef = this.dialog.open(SignupCompleteComponent, {
          width: '250px',
        });
  
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
        window.location.reload();
      }
    });

  }

}

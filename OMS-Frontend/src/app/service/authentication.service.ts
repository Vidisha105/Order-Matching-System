import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class User{
  public user_id: number;
  public username: string;
  public email_id: string;
  public pass_word: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  authenticateUser(user: User){
    
    return this.httpClient.post<User>("http://localhost:8080/authenticate", user);
  }

  createUser(user: User){
    return this.httpClient.post<User>("http://localhost:8080/user", user);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticationStatus')
    console.log(!(user === null))
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticationStatus');
  }

}

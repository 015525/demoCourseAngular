import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private isLoggedSubject : BehaviorSubject<boolean>;
  constructor() {
    this.isLoggedSubject = new BehaviorSubject<boolean>(this.isUserLogged);
   }

  login(userName:string, password:string)
  {
    //call login api and recieve accesstoken
    let usrToken = "123456789"
    localStorage.setItem("token", usrToken)
    this.isLoggedSubject.next(true)
  }

  logout()
  {
    localStorage.removeItem("token")
    this.isLoggedSubject.next(false)
  }

  get isUserLogged() : boolean
  {
    return localStorage.getItem("token") ? true : false
  }

  getLoggedStatus() : Observable<boolean>
  {
    return this.isLoggedSubject.asObservable();
  }

}

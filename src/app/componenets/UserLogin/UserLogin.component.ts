import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-UserLogin',
  templateUrl: './UserLogin.component.html',
  styleUrls: ['./UserLogin.component.css']
})
export class UserLoginComponent implements OnInit {

  isUserLogged : boolean = false;
  constructor(private authServ:UserAuthService) { }

  ngOnInit() {
    this.isUserLogged = this.authServ.isUserLogged;
    
    /*this.authServ.getLoggedStatus().subscribe((status)=>{
      this.isUserLogged=status
    })*/
  }

  login()
  {
    this.authServ.login('UserName', 'Password')
    this.isUserLogged = this.authServ.isUserLogged;
  }

  logout()
  {
    this.authServ.logout()
    this.isUserLogged = this.authServ.isUserLogged;
  }

}

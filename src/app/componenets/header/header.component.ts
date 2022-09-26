import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isUserLogged : boolean;
  constructor(private authServ : UserAuthService) { 
    this.isUserLogged=this.authServ.isUserLogged;
  }

  ngOnInit(): void {
    //this.isUserLogged = this.authServ.isUserLogged;
    this.authServ.getLoggedStatus().subscribe(status=>{
      this.isUserLogged=status
    })
  }

}

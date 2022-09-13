import { Component, OnInit } from '@angular/core';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  storeInfo:StoreData;
  imageShown:boolean=true;
  constructor() { 
    this.storeInfo=new StoreData('iti', 'https://picsum.photos/400/300', ['Cairo', 'Alex', 'Qena'])
  }

  ngOnInit(): void {
  }

  toggleImage(){
    this.imageShown=!this.imageShown;
  }

}

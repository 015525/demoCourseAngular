import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit, AfterViewInit {

  catList:ICategory[];
  selectedCatId:number=0;
  orderTotalPrice:number=0;
  receivedOrderTotalPrice:number=0;

  //clientNameInpElement:ElementRef = new ElementRef(); // bad solution
  //clientNameInpElement:ElementRef = {} as ElementRef; // not very bad
  //clientNameInpElement:ElementRef | undefined = undefined;
  //clientNameInpElement:ElementRef|null = null;
  //clientNameInpElement?:ElementRef; // optional may be null or not
  @ViewChild('clientNameInp') clientNameInpElement!:ElementRef //Non-null assertion operator (property canot be null)
  @ViewChild(ProductListComponent) prdListComObj!:ProductListComponent;

  constructor() { 
    this.catList=[
      {id:1, name:"Laptop"},
      {id:2, name:"taplet"},
      {id:3, name:"mobile"}
    ];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.clientNameInpElement.nativeElement.value="Your name here";
    this.clientNameInpElement.nativeElement.style.border="2px solid red";
    //console.log(this.prdListComObj.prdList);
  }

  onTotalPriceChanged(totalPrice:number){
    this.receivedOrderTotalPrice=totalPrice;
  }

  completeOrder(){
    //this.prdListComObj.prdList[0].quantity-=1;
  }

}

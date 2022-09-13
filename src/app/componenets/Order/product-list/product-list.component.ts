import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  selectedCatId:number=0;
  catList:ICategory[];
  orderTotalPrice:number=0;
  prdList:Iproduct[];
  constructor() {
    this.prdList=[
      {id:100, name:"lenove thinkpad laptop", price:100, quantity:1, imgUrl:"https://fakeimg.pl/200x100/", categoryId:1},
      {id:200, name:"apple macbook laptop", price:200, quantity:0, imgUrl:"https://fakeimg.pl/200x100/", categoryId:1},
      {id:300, name:"lenove tap2", price:120, quantity:10, imgUrl:"https://fakeimg.pl/200x100/", categoryId:2},
      {id:400, name:"samsung tap2", price:120, quantity:10, imgUrl:"https://fakeimg.pl/200x100/", categoryId:2},
      {id:500, name:"lenove 3 laptop", price:140, quantity:2, imgUrl:"https://fakeimg.pl/200x100/", categoryId:1},      
      {id:600, name:"samsung note 10", price:200, quantity:0, imgUrl:"https://fakeimg.pl/200x100/", categoryId:3},
      {id:700, name:"lenove mobile", price:120, quantity:9, imgUrl:"https://fakeimg.pl/200x100/", categoryId:3},
    ];
    this.catList=[
      {id:1, name:"Laptop"},
      {id:2, name:"taplet"},
      {id:3, name:"mobile"}
    ];
   }

  ngOnInit(): void {
  }

  prdTrackByFn(index:number, item:Iproduct): number
  {
    return item.id;
  }

  changeCat(){
    this.selectedCatId=1;
  }

  buy(price:number, Count:string){
    //casting
    this.orderTotalPrice+=parseInt(Count)*price;
    //this.orderTotalPrice+=Number(Count)*price;
    //this.orderTotalPrice= (Count as number) *price
    //this.orderTotalPrice+=+Count*price;



    /*
    for(let i=0; i<this.prdList.length; i++){
      if (this.prdList[i].id == id) {
        this.prdList[i].quantity-=itemsCount;
      }
    }
    */
  }

}

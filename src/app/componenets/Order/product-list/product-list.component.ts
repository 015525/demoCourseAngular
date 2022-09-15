import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnChanges {

  @Input() sentCatId:number=0;
  orderTotalPrice:number=0;
  prdList:Iproduct[];
  prdListOfCat:Iproduct[] = [];
  orderDate:Date;

  // use constructor for variable initailization and dependency injection
  // any thing else we need to be done when component is initailized 
  // prefered to be in the ngOnInit

  constructor() { 
    this.prdList=[
      {id:100, name:"lenove thinkpad laptop", price:1000000, quantity:1, imgUrl:"https://fakeimg.pl/200x100/", categoryId:1},
      {id:200, name:"apple macbook laptop", price:2078940, quantity:0, imgUrl:"https://fakeimg.pl/200x100/", categoryId:1},
      {id:300, name:"lenove tap2", price:1203.5, quantity:10, imgUrl:"https://fakeimg.pl/200x100/", categoryId:2},
      {id:400, name:"samsung tap2", price:12023, quantity:10, imgUrl:"https://fakeimg.pl/200x100/", categoryId:2},
      {id:500, name:"lenove 3 laptop", price:14320, quantity:2, imgUrl:"https://fakeimg.pl/200x100/", categoryId:1},      
      {id:600, name:"samsung note 10", price:2002, quantity:0, imgUrl:"https://fakeimg.pl/200x100/", categoryId:3},
      {id:700, name:"lenove mobile", price:120, quantity:9, imgUrl:"https://fakeimg.pl/200x100/", categoryId:3},
    ];
    
    
    this.prdListOfCat=this.prdList;

    this.orderDate=new Date();
   }
  ngOnChanges(): void {
    this.filterPrdList()
  }

  ngOnInit(): void {
  }

  prdTrackByFn(index:number, item:Iproduct): number
  {
    return item.id;
  }

  changeCat(){
    this.sentCatId=1;
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

  private filterPrdList(){
    if (this.sentCatId==0)
      this.prdListOfCat=this.prdList;
    else
      this.prdListOfCat=this.prdList.filter(prd=>prd.categoryId==this.sentCatId);
  }

}

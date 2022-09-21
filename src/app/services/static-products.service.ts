import { Injectable } from '@angular/core';
import { ROUTER_CONFIGURATION } from '@angular/router';
import { retry } from 'rxjs';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {

  private prdList:Iproduct[];
  
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
  }

  getAllProducts() : Iproduct[]
  {
    return this.prdList;
  }

  getPrdbByCatId(catId : number) : Iproduct[]
  {
    if (catId==0)
      return this.prdList;
    else
      return this.prdList.filter(prd=>prd.categoryId==catId);
  }

  getPrdById(id : number) : Iproduct | null
  {
    let found = this.prdList.find(prd=>prd.id == id);
    return found? found : null;
  }

  addNewProduct(prd:Iproduct)
  {
    this.prdList.push(prd);
  }

  getPrdIds() :number[]
  {
    return this.prdList.map(prd=>prd.id);
  }
}

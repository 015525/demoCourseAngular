import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/services/static-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  currPrdId : number=0;
  prd:Iproduct | null = null;
  prdIdsList : number[] = [];

  constructor(private activedRoute : ActivatedRoute
            , private router:Router
            , private prdService : StaticProductsService
            , private location : Location) //Location in angular common not other location
            { }

  ngOnInit(): void {
    this.prdIdsList = this.prdService.getPrdIds();
    //this.currPrdId = Number(this.activedRoute.snapshot.paramMap.get('pid'));
    // console.log(this.currPrdId);
    //this.prd = this.prdService.getPrdById(this.currPrdId);
    // when navigate to same componenet , angular WILL NOT reload component
    // even if there is a change in the router param
    console.log("in onInit ...");

    this.activedRoute.paramMap.subscribe((paramMap) => {
      this.currPrdId = Number(paramMap.get('pid'));
      this.prd = this.prdService.getPrdById(this.currPrdId);
    })
  }

  goBack(){
    this.location.back();
  }

  getPrev(){
    let currInd = this.prdIdsList.findIndex((elem, index) => elem == this.currPrdId);
    console.log(currInd);

    let prevPrdId;
    if (currInd>0) {
      prevPrdId = this.prdIdsList[currInd-1];
      this.router.navigate(['/Products', prevPrdId]);
    }
  }

  getNext(){
    let currInd = this.prdIdsList.findIndex((elem, index) => elem == this.currPrdId);
    console.log(currInd);

    let nextPrdId;
    if (currInd<this.prdIdsList.length) {
      nextPrdId = this.prdIdsList[currInd+1];
      this.router.navigate(['/Products', nextPrdId]);
    }
  }

}

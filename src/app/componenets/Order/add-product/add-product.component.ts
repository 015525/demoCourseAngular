import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorObserver } from 'rxjs';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  newId:number = 800;
  constructor(private prdServ:ProductsService
            , private router: Router) { 
            }

  ngOnInit(): void {
  }

  AddProduct()
  {

    this.newId=this.newId+100;

    console.log(this.newId)
    const prd:Iproduct = {
      id:this.newId, 
      name:"lenove tap2", 
      price:1203.5, 
      quantity:10, 
      imgUrl:"https://fakeimg.pl/200x100/", 
      categoryId:2
    }

    const observer  ={
      next: (prd:Iproduct) => {
        alert('Product Added succesfully') // NOT recommended
        // Use instead Toast (Snackbar in angular : https://v5.material.angular.io/components/snack-bar/overview), BS Alert, ....
  
        this.router.navigateByUrl('/Products')
      },
      error: (err:Error) => {alert(err.message)}
      
    }

    this.prdServ.addProduct(prd).subscribe(observer)

    // this.prdServ.addProduct(prd).subscribe((prd) => {
    //   alert('Product Added succesfully') // NOT recommended
    //   // Use instead Toast (Snackbar in angular : https://v5.material.angular.io/components/snack-bar/overview), BS Alert, ....

    //   this.router.navigateByUrl('/Products')
    // })
  }

}

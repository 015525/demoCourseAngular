import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenets/home/home.component';
import { MainLayoutComponent } from './componenets/MainLayout/MainLayout.component';
import { NotFoundComponent } from './componenets/NotFound/NotFound.component';
import { AddProductComponent } from './componenets/Order/add-product/add-product.component';
import { OrderMasterComponent } from './componenets/Order/order-master/order-master.component';
import { ProductListComponent } from './componenets/Order/product-list/product-list.component';
import { ProductDetailsComponent } from './componenets/product-details/product-details.component';
import { UserLoginComponent } from './componenets/UserLogin/UserLogin.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [ // works with first match wins
  {path:'', component:MainLayoutComponent, children:[
    {path:'', redirectTo:'/Home', pathMatch:'full'}, //Default path
    {path:'Home', component:HomeComponent},
    {path:'Products', component:ProductListComponent},
    {path:'Products/Add', component:AddProductComponent},
    {path:'Products/:pid', component:ProductDetailsComponent},
    {path:'Order', component:OrderMasterComponent, canActivate:[AuthGuard]},
  ]},
  {path:'Login', component:UserLoginComponent},
  {path:'Logout', component:UserLoginComponent},
  {path:'**', component:NotFoundComponent} //wild card path (must be at the end)

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

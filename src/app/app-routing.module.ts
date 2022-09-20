import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenets/home/home.component';
import { MainLayoutComponent } from './componenets/MainLayout/MainLayout.component';
import { NotFoundComponent } from './componenets/NotFound/NotFound.component';
import { OrderMasterComponent } from './componenets/Order/order-master/order-master.component';
import { ProductListComponent } from './componenets/Order/product-list/product-list.component';
import { ProductDetailsComponent } from './componenets/product-details/product-details.component';
import { UserLoginComponent } from './componenets/UserLogin/UserLogin.component';

const routes: Routes = [ // works with first match wins
  {path:'', component:MainLayoutComponent, children:[
    {path:'', redirectTo:'/Home', pathMatch:'full'}, //Default path
    {path:'Home', component:HomeComponent},
    {path:'Products', component:ProductListComponent},
    {path:'Products/:pid', component:ProductDetailsComponent},
    {path:'Order', component:OrderMasterComponent},
  ]},
  {path:'Login', component:UserLoginComponent},
  {path:'**', component:NotFoundComponent} //wild card path (must be at the end)

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

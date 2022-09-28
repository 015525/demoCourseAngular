import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componenets/header/header.component';
import { FooterComponent } from './componenets/footer/footer.component';
import { SidebarComponent } from './componenets/sidebar/sidebar.component';
import { HomeComponent } from './componenets/home/home.component';
import { ProductListComponent } from './componenets/Order/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { LightBoxDirective } from './Directives/light-box.directive';
import { USDtoEGPPipe } from './Pipes/usdto-egp.pipe';
import { OrderMasterComponent } from './componenets/Order/order-master/order-master.component';
import { UserLoginComponent } from './componenets/UserLogin/UserLogin.component';
import { MainLayoutComponent } from './componenets/MainLayout/MainLayout.component';
import { NotFoundComponent } from './componenets/NotFound/NotFound.component';
import { ProductDetailsComponent } from './componenets/product-details/product-details.component';
import { AddProductComponent } from './componenets/Order/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ProductListComponent,
    LightBoxDirective,
    USDtoEGPPipe,
    OrderMasterComponent,
    UserLoginComponent,
    MainLayoutComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

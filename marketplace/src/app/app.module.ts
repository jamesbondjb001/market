import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StickyHeaderComponent } from './sticky-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { BuyProductsComponent } from './categories/buy-products/buy-products.component';
import { BuyProductsHeaderComponent } from './categories/buy-products/buy-products-header/buy-products-header.component';
import { TransactionsHistComponent } from './transactions-hist/transactions-hist.component';
import { SellProductsComponent } from './sell-products/sell-products.component';
import { UploadProductsComponent } from './sell-products/upload-products/upload-products.component';
import { UploadProductsListComponent } from './sell-products/upload-products-list/upload-products-list.component';
import { ShowAllProductsComponent } from './categories/show-all-products/show-all-products.component'
import { ShowAutomobileProductsComponent } from './categories/show-automobile-products/show-automobile-products.component'
import { ShowElectronicProductsComponent } from './categories/show-electronic-products/show-electronic-products.component'
import { ShowFashionProductsComponent } from './categories/show-fashion-products/show-fashion-products.component'
import { ShowFoodProductsComponent } from './categories/show-food-products/show-food-products.component';
import { OrderPlacedComponent } from './categories/buy-products/order-placed/order-placed.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CategoriesComponent,
    CategoryListComponent,
    BuyProductsComponent,
    BuyProductsHeaderComponent,
    TransactionsHistComponent,
    SellProductsComponent,
    UploadProductsComponent,
    UploadProductsListComponent,
    ShowAllProductsComponent,
    ShowAutomobileProductsComponent,
    ShowElectronicProductsComponent,
    ShowFashionProductsComponent,
    ShowFoodProductsComponent,
    StickyHeaderComponent,
    OrderPlacedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
     NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }

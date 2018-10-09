import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OrderedProduct } from '../ordered-product-list/ordered-product.model';

@Component({
  selector: 'app-buy-products',
  templateUrl: './buy-products.component.html',
  styleUrls: ['./buy-products.component.scss']
})
export class BuyProductsComponent implements OnInit {

  @Output() resetProduct = new EventEmitter<boolean>();
  @Output() orderConfirmed = new EventEmitter<boolean>();
  quantity : number = 1;
  FixedQuantity : number = 1;
  
  confirmedProductList : OrderedProduct[] =[];
  orderIdGen : number =10001 ;

  constructor() { }

  ngOnInit() {
  }

  product = JSON.parse(localStorage.getItem("currentProduct"));
  
  deleteBuyingProduct(){
    localStorage.removeItem("currentProduct");
    this.resetProduct.emit(false);
  }
  confirmBuyingProduct(){

    this.confirmedProductList = JSON.parse(localStorage.getItem("confirmedProduct"));
    localStorage.removeItem("confirmedProduct");
    
    this.confirmedProductList.push(new OrderedProduct(
      this.product.category,
      this.product.productName,
      this.product.productId,
      this.product.sellerId,
      this.orderIdGen,
      this.product.price,
      this.product.description,
      this.quantity,
      this.quantity * this.product.price
      )); 
    localStorage.setItem("confirmedProduct", JSON.stringify(this.confirmedProductList));
    this.orderConfirmed.emit(true);
    this.orderIdGen += 1; 
  }

  onQuantityChange(qty : string){
    //console.log(qty);
    if(parseInt(qty)<this.FixedQuantity){
     alert("Quantity cannot be zero");
     //console.log("if  "+qty);
      this.quantity=1;
    }
  }
}

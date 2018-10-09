import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../products-list/product.model';

@Component({
  selector: 'app-buy-products',
  templateUrl: './buy-products.component.html',
  styleUrls: ['./buy-products.component.scss']
})
export class BuyProductsComponent implements OnInit {

  @Output() resetProduct = new EventEmitter<boolean>();
<<<<<<< HEAD
=======
  @Output() orderConfirmed = new EventEmitter<boolean>();
>>>>>>> 99464605cd689af85828e6778793e6f80ee449f4
  quantity : number = 1;
  FixedQuantity : number = 1;
  constructor() { }

  ngOnInit() {
  }

  product = JSON.parse(localStorage.getItem("currentProduct"));
  
  deleteBuyingProduct(){
    localStorage.removeItem('currentProduct');
    this.resetProduct.emit(false);
  }
  confirmBuyingProduct(){

<<<<<<< HEAD
=======
    this.orderConfirmed.emit(true);
>>>>>>> 99464605cd689af85828e6778793e6f80ee449f4
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

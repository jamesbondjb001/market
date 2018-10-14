import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OrderedProductService }  from 'src/app/shared/ordered-product.service';

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
  showSuccessMessage: boolean;

  orderId : String;
  
  constructor(private orderedProductService: OrderedProductService) { }
  
 
  ngOnInit() {
  }

  product = JSON.parse(localStorage.getItem("currentProduct"));
  user = JSON.parse(localStorage.getItem('currentUser'));

  deleteBuyingProduct(){
    localStorage.removeItem("currentProduct");
    this.resetProduct.emit(false);
  }
  
  confirmBuyingProduct(){
    //console.log(this.product.category);
   localStorage.setItem("orderedProduct", JSON.stringify({
      'category' : this.product.category,
      'buyerId' : this.user.username,
      'sellerId' : this.product.sellerId,
      'productName': this.product.productName,
      'price': this.product.price,
      'description': this.product.description,
      'totalPrice' : this.quantity*this.product.price,
      'quantity': this.quantity
    }))

    // console.log(JSON.parse(localStorage.getItem("orderedProduct")));
    // console.log(this.product.category);
    this.orderedProductService.insertOrderedProduct();
    this.orderId = this.orderedProductService.keyValue;
    this.orderConfirmed.emit(true);
    localStorage.setItem("orderIdPass", JSON.stringify({'orderId':this.orderId}));

    // localStorage.removeItem("currentProduct");
    // localStorage.removeItem("orderedProduct");
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

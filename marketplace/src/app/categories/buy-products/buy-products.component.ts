import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OrderedProductService }  from 'src/app/shared/ordered-product.service';
import { ProductService }  from 'src/app/shared/product.service';

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
  
  constructor(private orderedProductService: OrderedProductService,private ProductService : ProductService) { }
  
 
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
   // console.log(this.product.quantityAvailable );
    this.orderedProductService.insertOrderedProduct();
    this.orderId = this.orderedProductService.keyValue;
    this.orderConfirmed.emit(true);
    //update quantity
    this.product.quantityAvailable = this.product.quantityAvailable - this.quantity;
   // console.log(this.product.quantityAvailable );
    localStorage.setItem("orderIdPass", JSON.stringify({'orderId':this.orderId}));
    this.ProductService.updateQuantity(this.product.$key,this.product.quantityAvailable);
    // localStorage.removeItem("currentProduct");
    // localStorage.removeItem("orderedProduct");
  }

  onQuantityChange(qty : string){
    //console.log(qty);
    if(parseInt(qty)<this.FixedQuantity || qty===null ){
     alert("Quantity cannot be zero");
     //console.log("if  "+qty);
      this.quantity=1;
    }
  }
}

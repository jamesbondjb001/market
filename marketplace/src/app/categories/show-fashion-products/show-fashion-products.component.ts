import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Product } from '../products-list/product.model';

@Component({
  selector: 'app-show-fashion-products',
  templateUrl: './show-fashion-products.component.html',
  styleUrls: ['./show-fashion-products.component.scss']
})
export class ShowFashionProductsComponent implements OnInit {

  product : Product[] =[
    new Product("Electronics","iphone 6s","54321","12345","Apple","./assets/images/iphone6s.jpg",35000,"A7 chip 8 MP Camera 2600 mAh",10),
    new Product("Automobile","MRF tyres","54321","12345","MRF","./assets/images/mrf_tyres.jpg",20000,"Nylo grip/ 18' 19' inch/ All bikes",10),
    new Product("Fashion","Jeans","54321","12345","Wrangler","./assets/images/wrangler.jpg",4500,"W-32 / slim fit",10),
    new Product("Food","Almonds","54321","12345","Local seller","./assets/images/almonds.jpg",800,"Kashmiri almonds",10)
   ];

   @Output() buyNow = new EventEmitter<boolean>();

   constructor() { }
 
   ngOnInit() {
   }
 
   setBuyingProduct(prod : Product){
     console.log(prod);
     this.buyNow.emit(true);
     //this.buyNow=true;
     localStorage.setItem("currentProduct", JSON.stringify(prod))
   }
}

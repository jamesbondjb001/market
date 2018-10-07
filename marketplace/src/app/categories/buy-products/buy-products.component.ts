import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../products-list/product.model';

@Component({
  selector: 'app-buy-products',
  templateUrl: './buy-products.component.html',
  styleUrls: ['./buy-products.component.scss']
})
export class BuyProductsComponent implements OnInit {

  @Output() resetProduct = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  product = JSON.parse(localStorage.getItem("currentProduct"));
  
  deleteBuyingProduct(){
    localStorage.removeItem('currentProduct');
    this.resetProduct.emit(false);
  }
  confirmBuyingProduct(){

  }
}

import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class OrderedProductService {

  constructor(private firebase: AngularFireDatabase) { }
  orderedProductList: AngularFireList<any>;

  user = JSON.parse(localStorage.getItem('currentUser'));
  products = JSON.parse(localStorage.getItem("currentProduct"));

  form = new FormGroup({
    $key: new FormControl(null),
    sellerId : new FormControl(''),
    productName: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    totalPrice: new FormControl(''),
    quantity: new FormControl('')
  });


  getAllOrderedProducts() {
    this.orderedProductList = this.firebase.list('OrderedProducts');
    return this.orderedProductList.snapshotChanges();
  }


  insertOrderedProduct(product) {
    this.orderedProductList.push({
      category : this.products.category,
      buyerId : this.user.username,
      sellerId : product.sellerId,
      productName: product.productName,
      price: product.price,
      description: product.description,
      totalPrice : product.totalPrice,
      quantity: product.quantity
    });
  }

  populateForm(product) {
    this.form.setValue(product);
  }

  // updateCustomer(product) {
  //   this.orderedProductList.update(product.$key,
  //     {
  //       category : product.category,
  //       sellerId : this.user.username,
  //       productName: product.productName,
  //       price: product.price,
  //       description: product.description,
  //       quantityAvailable: product.quantityAvailable
  //     });
  // }

  // deleteCustomer($key: string) {
  //   this.orderedProductList.remove($key);
  // }

}

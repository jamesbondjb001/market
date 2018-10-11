import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firebase: AngularFireDatabase) { }
  productlist: AngularFireList<any>;

  user = JSON.parse(localStorage.getItem('currentUser'))

  form = new FormGroup({
    $key: new FormControl(null),
    category: new FormControl('', Validators.required),
    productName: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    quantityAvailable: new FormControl('', Validators.required)
  });


  getAllProducts() {
    this.productlist = this.firebase.list('products');
    return this.productlist.snapshotChanges();
  }


  insertCustomer(product) {
    this.productlist.push({
      category : product.category,
      sellerId : this.user.username,
      productName: product.productName,
      price: product.price,
      description: product.description,
      quantityAvailable: product.quantityAvailable
    });
  }

  populateForm(product) {
    this.form.setValue(product);
  }

  updateCustomer(product) {
    this.productlist.update(product.$key,
      {
        category : product.category,
        sellerId : this.user.username,
        productName: product.productName,
        price: product.price,
        description: product.description,
        quantityAvailable: product.quantityAvailable
      });
  }

  deleteCustomer($key: string) {
    this.productlist.remove($key);
  }

}

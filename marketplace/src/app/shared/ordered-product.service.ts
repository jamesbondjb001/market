import { Injectable } from '@angular/core';
import { FormControl, FormGroup ,FormsModule } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { query } from '@angular/core/src/render3/query';
import { analyzeAndValidateNgModules } from '@angular/compiler';

// Imports up here..

interface OrderedProduct{
  category : string;
  buyerId : string;
  sellerId : string;
  productName : string;
  price : number ;
  description : string;
  totalPrice : number ;
  quantity : number;  
}

@Injectable({
  providedIn: 'root'
})
export class OrderedProductService {

  constructor(private afs: AngularFireDatabase) { }

  postsCol: AngularFireList<any>;
  posts: Observable<OrderedProduct[]>;

  productList : any[];
  keyValue : String;

  user = JSON.parse(localStorage.getItem('currentUser'));
  orderedProductJson = JSON.parse(localStorage.getItem("orderedProduct"));
  product = JSON.parse(localStorage.getItem("currentProduct"));

  ngOnInit() {
    // this.postsCol = this.afs.list('OrderedProduct');
    // this.posts = this.postsCol.valueChanges();
  }

  
  getAllOrderedProducts() {
    this.postsCol = this.afs.list('OrderedProduct');
    return this.postsCol.snapshotChanges();
  }

  insertOrderedProduct() {
   
    // this.afs.collection('OrderedProduct').add({'title': this.title, 'content': this.content});
    this.postsCol = this.afs.list('OrderedProduct');

    this.orderedProductJson = JSON.parse(localStorage.getItem("orderedProduct"));

    console.log(this.orderedProductJson.category);
    
    this.keyValue = this.postsCol.push({
      category : this.orderedProductJson.category,
      buyerId : this.user.username,
      sellerId : this.orderedProductJson.sellerId,
      productName: this.orderedProductJson.productName,
      price: this.orderedProductJson.price,
      description: this.orderedProductJson.description,
      totalPrice : this.orderedProductJson.totalPrice,
      quantity: this.orderedProductJson.quantity
  }).key;

  console.log( "oder key " +this.keyValue);
  }
  // populateForm(product) {
  //   this.form.setValue(product);
  // }

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

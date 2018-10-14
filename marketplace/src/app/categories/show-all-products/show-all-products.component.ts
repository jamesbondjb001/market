import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from '../products-list/product.model';
import { ProductService }  from 'src/app/shared/product.service';

@Component({
  selector: 'app-show-all-products',
  templateUrl: './show-all-products.component.html',
  styleUrls: ['./show-all-products.component.scss']
})
export class ShowAllProductsComponent implements OnInit {
   
  @Output() buyNow = new EventEmitter<boolean>();

  @Input() categoryFetch : string;

  constructor(private productService: ProductService) { }
  productArray = [];
  searchText: string = "";

  user = JSON.parse(localStorage.getItem('currentUser'))

  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      list => {
        this.productArray = list.map(item => {
          
          const $key = item.payload.key;
          const data = { $key, ...item.payload.val() };
          console.log("data "+ this.user.username);
          if(data.sellerId!= this.user.username){
            return data;
          }

          // return {
          //   $key: item.key,
          //   ...item.payload.val()
          // };
        });
      });
  }

  filterCondition(product) {
    return product.productName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

  

  setBuyingProduct(prod : Product){
    console.log(prod);
    this.buyNow.emit(true);
    //this.buyNow=true;
    localStorage.setItem("currentProduct", JSON.stringify(prod))
  }
}

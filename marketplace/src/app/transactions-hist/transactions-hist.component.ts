import { Component, OnInit } from '@angular/core';
import { OrderedProductService }  from 'src/app/shared/ordered-product.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-transactions-hist',
  templateUrl: './transactions-hist.component.html',
  styleUrls: ['./transactions-hist.component.css']
})
export class TransactionsHistComponent implements OnInit {

  productArray : any [];
  productArrayFiltered : any [];
  user = JSON.parse(localStorage.getItem('currentUser'))
  constructor(private orderedProductService: OrderedProductService) { }

  ngOnInit() {
    this.orderedProductService.getAllOrderedProducts().subscribe(
      list => {
        this.productArray = list.map(item => {
          const $key = item.payload.key;
          const data = { $key, ...item.payload.val() };
          console.log("data "+ this.user.username);
          if(data.buyerId == this.user.username){
            return data;
          }          
        });
      });     
  }
}

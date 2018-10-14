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

          // return {
          //   $key: item.key, 
          //   ...item.payload.val()
          // };
          
        });


        // console.log(this.productArray);
        // this.productArray.forEach(item =>  { 
        //   if(item.category=="Electronics")
        //       console.log(item.$key + " " + item.category);
        //       this.productArrayFiltered.push(item);
        //    });
      });
    
      console.log("los");

    //  this.productArray.forEach(item =>  { 
    //     console.log(item);
    //  });
    //   this.productArray.forEach
    //   //   if(prod.category=="Electronics")
    //   // this.productArrayFiltered.push(prod);
    //   console.log(prod);
    // };  

    //console.log(this.productArrayFiltered);
    // this.orderedProductService.getAllOrderedProducts().subscribe(
    //   productArray1 =>{
    //     this.productArray = productArray1
    //     console.log(this.productArray.map);
    //   }
    // );
     
  }

  
}

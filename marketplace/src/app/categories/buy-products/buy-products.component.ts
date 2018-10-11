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
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.orderedProductService.form.controls;
  
 
  constructor(private orderedProductService: OrderedProductService) { }
  
 
  ngOnInit() {
  }

  product = JSON.parse(localStorage.getItem("currentProduct"));
  
  deleteBuyingProduct(){
    localStorage.removeItem("currentProduct");
    this.resetProduct.emit(false);
  }
  
  confirmBuyingProduct(){
    this.submitted = true;

    if (this.orderedProductService.form.valid) {
      if (this.orderedProductService.form.get('$key').value == null)
      console.log(this.orderedProductService.form.value);
        this.orderedProductService.insertOrderedProduct(this.orderedProductService.form.value);
      // else
      //   this.orderedProductService.updateCustomer(this.orderedProductService.form.value);
      // this.showSuccessMessage = true;
      // setTimeout(() => this.showSuccessMessage = false, 3000);
      // this.submitted = false;
      // this.orderedProductService.form.reset();
      //this is to be done for proper reset operation
      this.orderedProductService.form.setValue({
        $key: null,
        category:'',
        buyerId :'',
        sellerId : '',
        productName: '',
        price: '',
        description: '',
        totalPrice :'',
        quantity: ''
      });
    }
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

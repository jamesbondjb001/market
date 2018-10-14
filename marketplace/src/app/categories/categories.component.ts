import { Component, OnInit, Output ,EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  //styleUrls: ['./categories.component.scss']
  styles: [
    `
      :host {
        background: rgba(0, 0, 0, 0.1);
      }

      app-sticky-header {
        padding-top: 150px;
        padding-left: 50px;
        z-index: 10;
        width: 50px;
      }

      .content {
        padding-left: 70px;
        z-index: 1;
      }

    `
  ]
})
export class CategoriesComponent implements OnInit {

  @Output() trackOrder = new EventEmitter<String>();
  @Input() categorySel ='home';
  buyFlag : boolean =false;
  orderConfirmed : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onCategorySelect(categorySelect : string){
    console.log("cat " + categorySelect);
    // this.categorySel.emit(categorySelect);
    this.categorySel=categorySelect;
  }

  buyNowSelected(buy : boolean){
    this.buyFlag =  buy;
  }

  resetAllProducts(buy : boolean){
    this.buyFlag=buy;
  }

  orderSubmit(order : boolean){
    console.log("order " +order);
    this.orderConfirmed = order;
  }

  resetOrderAllProduct(order : boolean){
    console.log(order  +" reset order")
    this.orderConfirmed = order;
    this.buyFlag=order;
  }

  setTranPage(track : string){
    this.trackOrder.emit(track);
  }
}

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

  // @Output() categorySel = new EventEmitter<String>();
  @Input() categorySel ='home';
  buyFlag : boolean =false;
<<<<<<< HEAD
=======
  orderConfirmed : boolean = false;
>>>>>>> 99464605cd689af85828e6778793e6f80ee449f4
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
<<<<<<< HEAD
=======

  orderSubmit(order : boolean){
    console.log("order " +order);
    this.orderConfirmed = order;
  }

  resetOrderAllProduct(order : boolean){
    console.log(order  +" reset order")
    this.orderConfirmed = order;
    this.buyFlag=order;
  }
>>>>>>> 99464605cd689af85828e6778793e6f80ee449f4
}

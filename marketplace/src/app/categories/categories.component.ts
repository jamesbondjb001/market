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
        
        z-index: 10;
      }

      .content {
        padding-left: 70px;
      }

    `
  ]
})
export class CategoriesComponent implements OnInit {

  // @Output() categorySel = new EventEmitter<String>();
  @Input() categorySel ='home';
  buyFlag : boolean =false;
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
}

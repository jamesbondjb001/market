import { Component, OnInit ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  @Output() categorySelected = new EventEmitter<object>();
  //@Output() home = new EventEmitter<Boolean>();
 home : boolean;
  // categorySelected : string;
  constructor() { }

  ngOnInit() {
  }

  onSelect(categorySelectedTemp : String){
    console.log("cat list "+ categorySelectedTemp);
    if(categorySelectedTemp=='home'){
      this.home= true;
    }
    else{
      this.home= false;
    }
    this.categorySelected.emit({category :categorySelectedTemp,home :this.home});
    // this.categorySelected=categorySelectedTemp;
  }
}

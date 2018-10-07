import { Component, OnInit ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  @Output() categorySelected = new EventEmitter<String>();

  // categorySelected : string;
  constructor() { }

  ngOnInit() {
  }

  onSelect(categorySelectedTemp : string){
    console.log("cat list "+ categorySelectedTemp);
    this.categorySelected.emit(categorySelectedTemp);
    // this.categorySelected=categorySelectedTemp;
  }
}

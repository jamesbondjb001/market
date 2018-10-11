import { Component, OnInit } from '@angular/core';
import { ProductService }  from 'src/app/shared/product.service';

@Component({
  selector: 'app-upload-products-list',
  templateUrl: './upload-products-list.component.html',
  styleUrls: ['./upload-products-list.component.scss']
})
export class UploadProductsListComponent implements OnInit {

  constructor(private productService: ProductService) { }
  productArray = [];
 showDeletedMessage: boolean;
  searchText: string = "";

  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      list => {
        this.productArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onDelete($key) {
    if (confirm('Are you sure to delete this record ?')) {
      this.productService.deleteCustomer($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }


  filterCondition(product) {
    return product.productName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductService }  from 'src/app/shared/product.service';

@Component({
  selector: 'app-upload-products',
  templateUrl: './upload-products.component.html',
  styleUrls: ['./upload-products.component.scss']
})
export class UploadProductsComponent implements OnInit {

  constructor(private productrService: ProductService) { }
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.productrService.form.controls;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.productrService.form.valid) {
      if (this.productrService.form.get('$key').value == null)
        this.productrService.insertCustomer(this.productrService.form.value);
      else
        this.productrService.updateCustomer(this.productrService.form.value);
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.productrService.form.reset();
      //this is to be done for proper reset operation
      this.productrService.form.setValue({
        $key: null,
        category:'',
        sellerId : '',
        productName: '',
        price: '',
        description: '',
        quantityAvailable: ''
      });
    }
  }


}

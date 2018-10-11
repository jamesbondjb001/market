import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.scss']
})
export class OrderPlacedComponent implements OnInit {

  @Output() resetOrderAllProduct = new EventEmitter<boolean>();
  @Output() trackProduct = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  goToAllProduct(){
    this.resetOrderAllProduct.emit(false);
  }

  trackOrder(){
    this.trackProduct.emit("tran");
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions-hist',
  templateUrl: './transactions-hist.component.html',
  styleUrls: ['./transactions-hist.component.css']
})
export class TransactionsHistComponent implements OnInit {

  product = JSON.parse(localStorage.getItem("confirmedProduct"));
  constructor() { }

  ngOnInit() {
  }

}

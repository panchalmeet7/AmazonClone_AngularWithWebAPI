import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  view: 'grid' | 'list' = 'grid';
  sortby: 'default' | 'hightolow' | 'lowtohigh' = 'default';
  constructor() {}
  ngOnInit(): void {}
}

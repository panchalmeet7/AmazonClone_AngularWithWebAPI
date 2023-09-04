import { Component, OnInit } from '@angular/core';
import { SuggestedProducts } from 'src/app/models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  suggestedProducts: SuggestedProducts[] = [
    {
      bannerimage: 'Baner/Baner_Mobile.png',
      category: {
        id: 1,
        category: 'electronics',
        subcategory: 'mobiles',
      },
    },
    {
      bannerimage: 'Baner/Baner_Chair.png',
      category: {
        id: 2,
        category: 'furniture',
        subcategory: 'chairs',
      },
    },
    {
      bannerimage: 'Baner/Baner_Laptop.png',
      category: {
        id: 3,
        category: 'electronics',
        subcategory: 'laptops',
      },
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}

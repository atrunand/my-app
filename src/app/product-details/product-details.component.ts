// import { ProductDetailsComponent } from './product-details.component';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { products } from "../products";

export class ProductDetailsComponent implements OnInit {
  products: any;

  constructor (
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.products = products[+params.get('productID')];
    })
  }

}

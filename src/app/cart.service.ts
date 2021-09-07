
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class CartService {

  items : string[] = [];

  addToCart(products: any) {
    this.items.push(products);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() {

  }
}

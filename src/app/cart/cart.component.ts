import { Component, OnInit } from "@angular/core";

import { CartService } from "../cart.service";

@Component ({
  selector: 'app-cart', //ตัวเลือกองค์ประกอบ CSS ของส่วนประกอบ
  templateUrl: './cart.component.html', //ตำแหน่งของไฟล์เทมเพลตของส่วนประกอบ
  styleUrls: ['./cart.component.css'] //ตำแหน่งของสไตล์ CSS ส่วนตัวของคอมโพเนนต์
})

export class CartComponent implements OnInit {

  items: any;

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

}

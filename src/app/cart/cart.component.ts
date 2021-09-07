import { Component, OnInit } from "@angular/core";

import { CartService } from "../cart.service";

import { FormBuilder } from "@angular/forms";

@Component ({
  selector: 'app-cart', //ตัวเลือกองค์ประกอบ CSS ของส่วนประกอบ
  templateUrl: './cart.component.html', //ตำแหน่งของไฟล์เทมเพลตของส่วนประกอบ
  styleUrls: ['./cart.component.css'] //ตำแหน่งของสไตล์ CSS ส่วนตัวของคอมโพเนนต์
})

export class CartComponent implements OnInit {

  items: any;
  checkoutForm: any;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData: any) {
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset(); //resrt form
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

}

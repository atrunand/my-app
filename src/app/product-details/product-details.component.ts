// import { products } from './../products';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { products } from "../products";
import { CartService } from "../cart.service";

@Component ({
  selector: 'app-product-details', //ตัวเลือกองค์ประกอบ CSS ของส่วนประกอบ
  templateUrl: './product-details.component.html', //ตำแหน่งของไฟล์เทมเพลตของส่วนประกอบ
  styleUrls: ['./product-details.component.css'] //ตำแหน่งของสไตล์ CSS ส่วนตัวของคอมโพเนนต์
})

// @Component({
//   template: ''
// })

export class ProductDetailsComponent implements OnInit {
 //เพื่อให้คุณสามารถimportไปที่อื่น
  products:any;


  constructor (
    private route: ActivatedRoute,
    private CartService: CartService
  ) {}

  addToCart(products: any) {
    window.alert('your product has been added to cart!');
    this.CartService.addToCart(products);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params:any) => {
      this.products = products[+params.get('productId')];
    });
    // this.products = this.route.paramMap.get('productId');
    // this.routes.paramMap.subscribe((products: any) => this.products = 'productId');

  }

}

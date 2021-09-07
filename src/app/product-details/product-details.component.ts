import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { products } from "../products";

@Component ({
  selector: 'app-product-details', //ตัวเลือกองค์ประกอบ CSS ของส่วนประกอบ
  templateUrl: './product-details.component.html', //ตำแหน่งของไฟล์เทมเพลตของส่วนประกอบ
  styleUrls: ['./product-details.component.css'] //ตำแหน่งของสไตล์ CSS ส่วนตัวของคอมโพเนนต์
})

// @Component({
//   template: ''
// })

export class ProductDetailsComponent implements OnInit { //เพื่อให้คุณสามารถimportไปที่อื่น
  products: any;


  constructor (
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.products = products[+params.get('productId')];
    })
  }

}


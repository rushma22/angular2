import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit{
  pageTitle: string = "Product Details";
  product: IProduct | undefined;

  constructor(private route:ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;

    this.product = {
      "productId": id,
        "productName": "Leaf cutter",
        "quantity": 20,
        "imgUrl": "assets/hammer.jpg",
        "price": 15,
        "rating":4
    }
  }

  onBack():void {
    this.router.navigate(['/products']);
  }
}

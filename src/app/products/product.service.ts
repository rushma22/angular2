import { Injectable } from "@angular/core";
import {IProduct } from "./product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    getProducts(): IProduct[] {
       return [
            {
                "productName": "Hammer",
                "quantity": 20,
                "imgUrl": "assets/hammer.jpg",
                "price": 15,
                "rating":4
                
            },
            {
                "productName": "Spanner",
                "quantity": 32,
                "imgUrl": "assets/spanner.jpg",
                "price": 10,
                "rating":2
            },
            {
                "productName": "Nails",
                "quantity": 45,
                "imgUrl": "assets/nails.jpg",
                "price": 5,
                "rating":3
            },
            {
                "productName": "Saw",
                "quantity": 10,
                "imgUrl": "assets/saw.jpeg",
                "price": 25,
                "rating":5
            }
           
        ];
    }
}
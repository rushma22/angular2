import { Component } from "@angular/core";

@Component({
    selector: 'app-product',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent {
    pageHeader: string ="Product List";
    products: any[] = [
        {
            "productName": "Hammer",
            "quantity": 20
        },
        {
            "productName": "Spanner",
            "quantity": 32
        },
        {
            "productName": "Nails",
            "quantity": 45
        },
        {
            "productName": "Grilling machine",
            "quantity": 10
        }
       
    ];
}
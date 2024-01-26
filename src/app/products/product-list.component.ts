import { Component } from "@angular/core";

@Component({
    selector: 'app-product',
    templateUrl: './product-list.component.html',
 
})

export class ProductListComponent {
    pageHeader: string = "Product List";
    imageMargin: number = 2;
    imageWidth: number = 50;
    showImage: boolean = false;
    listFilter: string = " ";
    buttonPadding: number = 10;
    colour: string = "orange";

    products: any[] = [
        {
            "productName": "Hammer",
            "quantity": 20,
            "imgUrl": "assets/hammer.jpg"
            
        },
        {
            "productName": "Spanner",
            "quantity": 32,
            "imgUrl": "assets/spanner.jpg"
        },
        {
            "productName": "Nails",
            "quantity": 45,
            "imgUrl": "assets/nails.jpg"
        },
        {
            "productName": "Saw",
            "quantity": 10,
            "imgUrl": "assets/saw.jpeg"
        }
       
    ];

    toggleImage(): void{
        this.showImage = !this.showImage;
    }
}
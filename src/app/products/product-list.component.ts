import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector: 'app-product',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
 
})

export class ProductListComponent  implements OnInit{
    pageHeader: string = "Product List";
    imageMargin: number = 2;
    imageWidth: number = 50;
    showImage: boolean = false;

    private _listFilter = "";

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.performFilter(value);
    }

    filteredProducts: IProduct[] = []
    products: IProduct[] = [
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


    performFilter(filterBy: string): IProduct[]{

        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct)=> 
            product.productName.toLocaleLowerCase().includes(filterBy));
    }

    ngOnInit(): void {
        console.log("working")
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageHeader = 'Product List: ' + message;
    }
}
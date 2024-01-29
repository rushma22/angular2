import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

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
    products: IProduct[] = [];

    constructor(private productService : ProductService){

    }

    performFilter(filterBy: string): IProduct[]{

        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct)=> 
            product.productName.toLocaleLowerCase().includes(filterBy));
    }

    ngOnInit(): void {
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageHeader = 'Product List: ' + message;
    }
}
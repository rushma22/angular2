import { Component } from "@angular/core";

@Component({
  selector:'app-root',
  template:`
  <div class='container'>
  <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLink="/welcome">Home</a></li>
          <li><a class='nav-link' routerLink="/products">Product List</a></li>
        </ul>
    </nav>

    <router-outlet></router-outlet>
  </div>
`
})

export class AppComponent{
  pageTitle: string = 'Garden Products Mart';
}
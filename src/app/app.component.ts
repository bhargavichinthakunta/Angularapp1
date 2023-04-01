import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `
  <ul>
    <li *ngFor="let product of products">{{ product.name }} -{{ product.price }}</li>
  </ul>
  `,
})
export class AppComponent {
  products: any[];

  constructor(private dataService: DataService){
    this.products = dataService.products;
  }
  title = 'application';
}

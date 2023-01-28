import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productDataService: ProductDataService) { }
  products:Observable<any>;

  ngOnInit(): void {
    this.products = this.productDataService.getAllProducts();
    console.log(this.products);
  }

}

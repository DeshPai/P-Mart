import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// 3 ways of importing  ProductDataService 
//import { ProductDataService } from '../../core/products/product-data.service';

// Dynamic paths set for @core in tsconfig.json 
//import { ProductDataService } from '@core/products/product-data.service';

// Dynamic import path for @core in Barrel File (src/app/core/index.ts) 
import { ProductDataService } from '@core/index';


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

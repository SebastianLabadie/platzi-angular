import { Product } from './product.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter<any>();
    date = new Date();

  // tslint:disable-next-line: typedef
    addToCart() {
        console.log(this.product.title);
        this.productClicked.emit(this.product.id);
    }
}

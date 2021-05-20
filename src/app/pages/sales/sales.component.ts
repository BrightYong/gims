import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import productData from 'src/app/data/product.data.json';
import { PrintService } from 'src/app/services/print.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  searchValue = '';
  productItems: IProduct[] = productData;
  currentProductId = 0;
  currentDetails?: IProduct;
  addingSale = false;

  constructor(public printService: PrintService) { }

  onPrintInvoice() {
    const invoiceIds = ['10189854', '102234235'];
    this.printService
      .printDocument('invoice', invoiceIds);
  }

  ngOnInit(): void {
  }

  replaceDollar(str: string) {
    return str.replace(/$/g, '₦');
  }

  displayDetails (item: IProduct) {
    this.currentDetails = item;
    this.currentProductId = item.ID;
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from '../services/print.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  today = new Date();
  invoiceIds: string[];
  invoiceDetails: Promise<any>[] = [];

  constructor(route: ActivatedRoute, private printService: PrintService) {
    this.invoiceIds = route.snapshot.params['invoiceIds']
      .split(',');
  }

  ngOnInit() {
    this.invoiceDetails = this.invoiceIds.map(id => this.getInvoiceDetails(id));
    Promise.all(this.invoiceDetails)
      .then(() => this.printService.onDataReady());
  }

  getInvoiceDetails(invoiceId: string) {
    // get sale record via invoice

    // simulation: replace with actual db call
    const amount = Math.floor((Math.random() * 100));
    return new Promise(resolve =>
      setTimeout(() => resolve({
        amount,
        customerName: 'Bright Yong',
        streetAddress: '12A Mendon, Gendarmerie',
        city: 'Yawunde',
        country: 'Cameroon'
      }), 1000)
    );
  }

}

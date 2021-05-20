import {AfterViewInit, Component, ViewChild, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {FormGroup, FormControl} from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { IOrder } from 'src/app/interfaces/order';

import productList from 'src/app/data/product.data.json';
import { UtilitiesService } from 'src/app/services/utilities.service';

const NAMES: string[] = [
  'Tedber Soundbar', 'Men\'s Casual Sneaker', 'Ladies Leisure Casual Sneaker', 'Gionnee S11 Lite',
  'Seagate 1TB HD', 'Oraimo Compact 1000'
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css']
})
export class SuppliesComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'productName', 'quantityOrdered', 'orderPrice', 'totalOrderAmount'];
  dataSource: MatTableDataSource<IOrder>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  campaignOne: FormGroup;

  constructor(public dialog: MatDialog) {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createOrders(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);

    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16))
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getOrders(start:string, end:string) {
    alert('Getting date')
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createOrders(id: number): IOrder {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  const quantityOrdered = parseFloat(Math.random().toFixed(2)) * 100;
  const orderPrice = parseFloat(Math.random().toFixed(2)) * 10000;
  return {
    id: id,
    productName: name,
    quantityOrdered: quantityOrdered,
    quantityDelivered: quantityOrdered,
    orderPrice: orderPrice,
    totalOrderAmount: orderPrice * quantityOrdered,
    amountDue: orderPrice * quantityOrdered,
    deliveryStatus: 'complete',
    paymentStatus: 'pending',
    suppliers: [{
      name: 'Mark Twain',
      email: 'mark.twain@gmail.com'
    },{
      name: 'Shar Carr',
      email: 's.harr@gmail.com'
    }]
  };
}

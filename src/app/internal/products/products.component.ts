
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

/**
 * @title Table with pagination
 */
 @Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'views', 'amount'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  views: number;
  amount: number;
  color?: string[]
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Gionnne S11 Lite', weight: 1.0079, views: 123, amount: 162000},
  {position: 2, name: 'Oraimo Compact 1000', weight: 4.0026, views: 133, amount: 48000},
  {position: 3, name: 'Men\'s Casual Shoes', weight: 6.941, views: 139, amount: 5800},
  {position: 4, name: 'Ladies Leisure Casual Sneaker', weight: 1.0122, views: 213, amount: 4850},
  {position: 5, name: 'Daughter of the King T-Shirt', weight: 0.811, views: 134, amount: 3000},
  {position: 6, name: 'Gatwiga Black bag', weight: 3.0107, views: 135, amount: 3200, color: ['black']},
  {position: 7, name: 'Tedber Soundbar SR100 Plus 60W Bluetooth', weight: 12.0067, views: 813, amount: 33900, color: ['black', 'silver']},
  {position: 8, name: 'Seagate External HDD', weight: 1.234, views: 130, amount: 6800, color: ['white']},
  {position: 9, name: 'SanDisk 64GB Cruzer USB 2.0 Flash Drive', weight: 0.1984, views: 13, amount: 2900}
];

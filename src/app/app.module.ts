import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './internal/dashboard/dashboard.component';
import { DefaultComponent } from './default/default.component';
import { LeftPaneComponent } from './internal/left-pane/left-pane.component';
import { SearchComponent } from './internal/search/search.component';
import { TopLinksComponent } from './internal/top-links/top-links.component';
import { MidContentComponent } from './internal/mid-content/mid-content.component';

import { ProductsComponent } from './internal/products/products.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BestSellingComponent } from './internal/card-items/best-selling/best-selling.component';
import { MostViewedComponent } from './internal/card-items/most-viewed/most-viewed.component';
import { MostProfitableComponent } from './internal/card-items/most-profitable/most-profitable.component';
import { ImageListAmountComponent } from './internal/card-items/image-list-amount/image-list-amount.component';
import { GeneralStatisticsComponent } from './internal/card-items/general-statistics/general-statistics.component';
import { TopBarComponent } from './internal/top-bar/top-bar.component';
import { SalesComponent } from './pages/sales/sales.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SampleComponent } from './code-snippiets/sample/sample.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AddOrderDialog, AddSupplyDialog, OrdersComponent } from './pages/orders/orders.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SuppliesComponent } from './pages/supplies/supplies.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DefaultComponent,
    LeftPaneComponent,
    SearchComponent,
    TopLinksComponent,
    MidContentComponent,
    ProductsComponent,
    BestSellingComponent,
    MostViewedComponent,
    MostProfitableComponent,
    ImageListAmountComponent,
    GeneralStatisticsComponent,
    TopBarComponent,
    SalesComponent,
    SampleComponent,
    ProductFilterPipe,
    PrintLayoutComponent,
    InvoiceComponent,
    OrdersComponent,
    AddOrderDialog,
    AddSupplyDialog,
    SuppliesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    BrowserAnimationsModule,

    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCheckboxModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

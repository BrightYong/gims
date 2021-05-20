import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { DashboardComponent } from './internal/dashboard/dashboard.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { SalesComponent } from './pages/sales/sales.component';
import { SuppliesComponent } from './pages/supplies/supplies.component';
import { PrintLayoutComponent } from './print-layout/print-layout.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'sales', component: SalesComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'supplies', component: SuppliesComponent},

  { path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [
      { path: 'invoice/:invoiceIds', component: InvoiceComponent }
    ]
  },
  { path: '**', component: DefaultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Routing
import { AppRoutingModule } from './app-routing.module';
// material section
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
// import { CustomersComponent } from './customers/customers.component';
// import { OrdersComponent } from './orders/orders.component';
// import { CustomerListComponent } from './customers/customer-list/customer-list.component';
// import { OrderListComponent } from './orders/order-list/order-list.component';
// import { MessageListComponent } from './messages/message-list/message-list.component';

@NgModule({
  declarations: [
    AppComponent,
    // CustomersComponent,
    // OrdersComponent,
    // CustomerListComponent,
    // OrderListComponent,
    // MessageListComponent
  ],
  imports: [
    BrowserModule,
    // routing
    // AppRoutingModule,
    // Material
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

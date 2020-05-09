import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopBarComponent} from './components/top-bar/top-bar.component';
import {LoginComponent} from './components/login/login.component';
import {ServiceSelectionComponent} from './components/service-selection/service-selection.component';
import {ServiceRowComponent} from './components/service-selection/service-row/service-row.component';
import {CheckoutComponent} from './components/service-selection/checkout/checkout.component';
import {PurchaseComponent} from './components/purchase/purchase.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent,
    ServiceSelectionComponent,
    ServiceRowComponent,
    CheckoutComponent,
    PurchaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    PurchaseComponent,
  ],
})
export class AppModule { }

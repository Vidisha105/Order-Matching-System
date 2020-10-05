import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//import { MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatPaginatorModule ,MatInputModule, MatCardModule, MatTabsModule, MatSortModule, MatTableModule,  } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MyMaterialModule } from  './material.module';
import { NgxSpinnerModule } from "ngx-spinner";


import { NavbarComponent } from './navbar/navbar.component';
import { TradesComponent } from './trades/trades.component';
import { OrderbookComponent } from './orderbook/orderbook.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { MatDialogModule } from '@angular/material/dialog';
import { AddordersComponent } from './addorders/addorders.component';
import { TableComponent } from './table/table.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';


//new
import { AddorderComponent } from './addorder/addorder.component';
import { LoginErrorComponent } from './login-error/login-error.component';
import { SignupCompleteComponent } from './signup-complete/signup-complete.component';
import { NewTableComponent } from './new-table/new-table.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TradesComponent,
    OrderbookComponent,
    AddordersComponent,
    LoginComponent,
    LogoutComponent,
    TableComponent,
    AddorderComponent,
    LoginErrorComponent,
    SignupCompleteComponent,
    NewTableComponent,
    AboutComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule ,
    FontAwesomeModule,
    MatDialogModule,
    MatTabsModule,
    MatSortModule,
    MatPaginatorModule,
    MyMaterialModule,
    MatProgressBarModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

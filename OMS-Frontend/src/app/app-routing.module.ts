import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddordersComponent } from './addorders/addorders.component';
import { LoginComponent } from './login/login.component';
import { OrderbookComponent } from './orderbook/orderbook.component';
import { TradesComponent } from './trades/trades.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AddorderComponent } from './addorder/addorder.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'orderbook', component: OrderbookComponent, canActivate:[AuthGaurdService]},
  {path: 'trades', component: TradesComponent, canActivate:[AuthGaurdService]},
  { path: '', component: LoginComponent},
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService]},
  { path: 'addorder', component: AddorderComponent, canActivate:[AuthGaurdService]},
  { path: 'about', component: AboutComponent, canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
// import { TableDataSource, TableItem } from './table-datasource';
import { MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import {TradeItem} from '../trades/trades-datasource';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import {faExclamationTriangle, faCheckCircle, faSpinner, faCog} from '@fortawesome/free-solid-svg-icons';

export interface Idata {
    id: number;
    buyOrSell: string;
    orderTime: string;
    quantity: number;
    orderType: string;
    price: number;
    orderStatus: string;
    allorNone: number;
    minFill: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit, OnInit {
  IsWait:boolean = true ;
  clickMessage = false;
  parentMessage = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatTable) table: MatTable<TableItem>;
  // dataSource: TableDataSource;

  displayedColumns = ['id','buyOrSell','orderTime','quantity','orderType','price','allorNone','orderStatus'];
  dataSource = new MatTableDataSource<Idata>();
  selected = 'NONE';

  //new changes
  farejected = faExclamationTriangle;
  faaccepted = faCheckCircle;
  fapending = faCog;

    constructor(
      private httpClient: HttpClient, private router : Router,
      private spinner: NgxSpinnerService
    ) { }

  ngOnInit() {
    // this.dataSource = new TableDataSource();
    this.spinner.hide();
    this.httpClient.get('http://localhost:8080/order')
        .subscribe((data: Idata[]) => {
          this.dataSource.data = data;
          console.log(data)
        });
        console.log("Value of click msg in onInit : "+this.clickMessage);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    // this.table.dataSource = this.dataSource;
    // this.IsWait=false;

  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  onClickMe() {
    this.parentMessage = true;
    console.log("Button clicked ... ");
    this.spinner.show();
  
    //this.httpClient.get('http://localhost:8080/order');
    this.httpClient.get('http://localhost:8080/randomize')
    .subscribe((data: Idata[]) => {
      this.dataSource.data = data;
      console.log(data)
    });
        
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  }

  transact()
  {
    this.clickMessage = true;
    console.log("Transact clicked .. ");
    this.spinner.show();

    this.httpClient.get('http://localhost:8080/match')
    .subscribe((data: TradeItem[])=>{
      console.log(data)
    });
    
    setTimeout(() => {
      this.router.navigate(['trades']);
  }, 10000);  

    //this.router.navigate(['trades']);
    console.log("Value of click message : "+this.clickMessage);
  }

  onReset() {
    console.log("Reset clicked");  
    this.httpClient.get('http://localhost:8080/reset').subscribe();
    window.location.reload();
    window.location.reload();
    window.location.reload();
  }

}

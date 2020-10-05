import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
// import { TableDataSource, TableItem } from './table-datasource';
import { MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import {TradeItem} from '../trades/trades-datasource';
import { Router } from '@angular/router';
import { faCheckCircle, faCog, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

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
  selector: 'app-new-table',
  templateUrl: './new-table.component.html',
  styleUrls: ['./new-table.component.css']
})
export class NewTableComponent implements OnInit {

  IsWait:boolean = true ;
  clickMessage = '';
  parentMessage = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  farejected = faExclamationTriangle;
  faaccepted = faCheckCircle;
  fapending = faCog;

  // @ViewChild(MatTable) table: MatTable<TableItem>;
  // dataSource: TableDataSource;

  displayedColumns = ['id','buyOrSell','orderTime','quantity','orderType','price','allorNone','orderStatus'];
  dataSource = new MatTableDataSource<Idata>();
  selected = 'NONE';
    constructor(
      private httpClient: HttpClient, private router : Router
    ) { }

  ngOnInit() {
    // this.dataSource = new TableDataSource();
    this.httpClient.get('http://localhost:8080/updatedorder')
        .subscribe((data: Idata[]) => {
          this.dataSource.data = data;
          console.log(data)
        });
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

}

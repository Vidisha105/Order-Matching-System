import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TradeItem {
  tradeId: number;
  tradeTime: Date;
  quantity: number;
  price: number;
  buyId: number;
  sellId: number;

}

// TODO: replace this with real data from your application
export const EXAMPLE_DATA: TradeItem[] = [
  {tradeId: 1, tradeTime: new Date(), quantity: 200, price: 100.79, buyId: 1, sellId:1},
  {tradeId: 2, tradeTime: new Date(), quantity: 200, price: 100.79, buyId: 2, sellId:2},
  {tradeId: 3, tradeTime: new Date(), quantity: 200, price: 100.79, buyId: 3, sellId:3},
  {tradeId: 4, tradeTime: new Date(), quantity: 200, price: 100.79, buyId: 4, sellId:4},
  {tradeId: 5, tradeTime: new Date(), quantity: 200, price: 100.79, buyId: 5, sellId:5},
  {tradeId: 6, tradeTime: new Date(), quantity: 200, price: 100.79, buyId: 6, sellId:6},
  {tradeId: 7, tradeTime: new Date(), quantity: 200, price: 100.79, buyId: 7, sellId:7},
  {tradeId: 8, tradeTime: new Date(), quantity: 200, price: 100.79, buyId: 8, sellId:8},
  {tradeId: 18, tradeTime: new Date(), quantity: 200, price: 100.79, buyId: 9, sellId:9},
  {tradeId: 10, tradeTime: new Date(), quantity: 200, price: 100.79, buyId: 10, sellId:10},
  
];

/**
 * Data source for the MyTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TradeDataSource extends DataSource<TradeItem> {
  data: TradeItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TradeItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TradeItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TradeItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        // case 'id': return compare(+a.id, +b.id, isAsc);
        case 'price': return compare(+a.price, +b.price, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

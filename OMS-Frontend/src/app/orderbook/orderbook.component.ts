import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-orderbook',
  templateUrl: './orderbook.component.html',
  styleUrls: ['./orderbook.component.css']
})
export class OrderbookComponent implements OnInit {

  clickMessage = '';
  parentMessage = false;


  constructor(private httpClient : HttpClient) { }

  ngOnInit() {
  }

  onClickMe() {
    console.log("Reset clicked");  
    this.httpClient.get('http://localhost:8080/reset').subscribe();
    window.location.reload();
    window.location.reload();
    window.location.reload();
    window.location.reload();
  }

}

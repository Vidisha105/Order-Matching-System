import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTitle ="Trade-It";
  faCoffee = faCoffee;

  public constructor(private titleService: Title ) {
    this.titleService.setTitle( this.newTitle );
   }
}

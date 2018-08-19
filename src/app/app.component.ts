import { Component } from '@angular/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';
import { MasterService } from './master.service';
import { routerTransition} from './common/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ routerTransition ],
})
export class AppComponent {
  title = 'PortfolioVersion2';
  
  constructor( public ms: MasterService ) {
    this.ms = ms;
  }
}

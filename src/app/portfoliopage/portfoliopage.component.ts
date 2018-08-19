import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';
@Component({
  selector: 'app-portfoliopage',
  templateUrl: './portfoliopage.component.html',
  styleUrls: ['./portfoliopage.component.css']
})
export class PortfoliopageComponent implements OnInit {

  constructor(public ms: MasterService) {
    this.ms = ms;
   }

  ngOnInit() {
  }

}

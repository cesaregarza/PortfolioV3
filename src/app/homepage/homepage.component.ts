import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor( public ms: MasterService) {
    this.ms = ms;
   }

  ngOnInit() {
    console.log("Init!");
  }

}

import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent implements OnInit {

  constructor(public ms: MasterService) {
    this.ms = ms;
   }

  ngOnInit() {
  }

}

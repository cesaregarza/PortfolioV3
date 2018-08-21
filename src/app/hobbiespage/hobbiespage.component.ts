import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service'; 

@Component({
  selector: 'app-hobbiespage',
  templateUrl: './hobbiespage.component.html',
  styleUrls: ['./hobbiespage.component.scss']
})
export class HobbiespageComponent implements OnInit {

  constructor(public ms: MasterService) {
      this.ms = ms;
   }

  ngOnInit() {
  }

}

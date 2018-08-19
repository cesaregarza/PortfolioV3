import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';
@Component({
  selector: 'app-skillspage',
  templateUrl: './skillspage.component.html',
  styleUrls: ['./skillspage.component.css']
})
export class SkillspageComponent implements OnInit {

  constructor(public ms: MasterService) {
    this.ms = ms;
   }

  ngOnInit() {
  }

}

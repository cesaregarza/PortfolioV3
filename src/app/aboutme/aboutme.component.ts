import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MasterService } from '../master.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})

export class AboutmeComponent implements OnInit {
  
  constructor(public ms: MasterService) {
    this.ms = ms;
  }

  @ViewChild('aCanvas') canvasRef: ElementRef;
  
  ngOnInit() {
    let ctx: CanvasRenderingContext2D =
    this.canvasRef.nativeElement.getContext('2d');
    
    this.canvasRef.nativeElement.style.maxHeight = "100px";
  }
  

}

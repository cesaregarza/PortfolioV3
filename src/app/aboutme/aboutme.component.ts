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
    let dpi = window.devicePixelRatio;
    let canvasEle = document.getElementById('aCanvas');

    
    this.canvasRef.nativeElement.style.maxHeight = "100px";
    let style_height = +getComputedStyle(canvasEle).getPropertyValue("height").slice(0, -2);
    let style_width = +getComputedStyle(canvasEle).getPropertyValue("width").slice(0, -2);

    let canvasHeight = style_height * dpi;
    let canvasWidth = style_width * dpi;
    
    canvasEle.setAttribute('height', "" + canvasHeight);
    canvasEle.setAttribute('width', "" + canvasWidth);

    ctx.font = "" + (canvasHeight * 0.8) + "px Arial"
    ctx.fillStyle = "white";
    ctx.fillText("About", 0, 0.8 * canvasHeight);
    

  }
  

}

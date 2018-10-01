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

    // function Circle(x,y,dx,dy,radius){
    //   this.x = x;
    //   this.y = y;
    //   this.dx = dx;
    //   this.dy = dy;
    //   this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    //   this.radius = radius;
      
    //   // Create function for animte circle
      
    //   this.update = function(){
    //      if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
    //         this.dx = -this.dx;
    //    }	
   
    //      if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
    //         this.dy = -this.dy;
    //    }
   
    //      this.x += this.dx;
    //      this.y += this.dy;
   
    //      this.draw();	  
    //   }
    // }
    

  }
  

}

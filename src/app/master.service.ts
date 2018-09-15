declare var require: any;

import { Injectable } from '@angular/core';
import { Router, OutletContext } from '@angular/router';
import * as $ from 'jquery';
let WheelIndicator = require('wheel-indicator');

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  
  constructor(private router: Router) {
    this.router = router;

    $('html').on({
      'mousewheel': (e) => {
        e.preventDefault();
        e.stopPropagation();

      }
    });
  }

  pages = [
    { id: 1, page: "/home", state: "home"},
    { id: 2, page: "/about", state: "about"},
    { id: 3, page: "/portfolio", state: "portfolio"},
    { id: 4, page: "/skills", state: "skills"},
    { id: 5, page: "/hobbies", state: "hobbies"},
    { id: 6, page: "/contact", state: "contact"},
  ];
  currentpage = this.pages[0];
  maxpages = this.pages.length;
  transition: String;
  blocked: number = 0;
  breakpoints = {sm: 576, md: 768, lg: 992, xl: 1200};

  indicator = new WheelIndicator({
    elem: window.document.querySelector('html'),
    callback: (e) => {
      this.onscroll(e);
    }
  });

  getState(x){
    return this.transition;
  }

  animStart(e){
    this.blocked++;
  }

  animEnd(e){
    console.log("animated end!");
    this.transition = "none";
    this.blocked = (this.blocked++)%2;
  }

  scrollDown(){
    this.onscroll({direction: "down"});
  }

  scrollUp(){
    this.onscroll({direction: "up"});
  }

  onscroll(e) {
    let dir = e.direction;

    if (dir == "down" && !this.blocked){
      let nxt = this.currentpage.id % this.maxpages;
      let next = this.pages[nxt];
      this.router.navigate([next.page]);
      this.currentpage = next;
      this.transition = "plus";
    } else if (dir == "up" && !this.blocked) {
      let prv = (this.currentpage.id + this.maxpages - 2) % this.maxpages;
      let prev = this.pages[prv];
      this.router.navigate([prev.page]);
      this.currentpage = this.pages[prv];
      this.transition = "minus";
    }
  }

  //Check screen size, essentially do the same job as bootstrap and CSS. This is important so that ng-container and ngIf can be used in conjunction to allow it to keep working in a flexbox
  checkScreenSize(breakpoint: "sm" | "md" | "lg" | "xl", type: "atLeast" | "atMost" | "between", betweens?: "md" | "lg" | "xl") {
    type = type ? type : "atLeast";
    let width = document.body.offsetWidth;
    let x = this.breakpoints[breakpoint];
    let y = {atLeast: ">=", atMost: "<=", between: ""};
    let z = this.breakpoints[betweens];

    if (betweens) {
      return eval(x + "<=" + width + "<=" + z);
    } else {
      return eval (width + y[type] + x);
    }
  }


  }

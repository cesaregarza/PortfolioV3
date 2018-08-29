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
    console.log(`transition: ${this.transition} blocked: ${this.blocked}`);

    if (dir == "down" && !this.blocked){
      console.log(`activated!`);
      let nxt = this.currentpage.id % this.maxpages;
      let next = this.pages[nxt];
      this.router.navigate([next.page]);
      this.currentpage = next;
      this.transition = "plus";
      console.log(this.transition);
    } else if (dir == "up" && !this.blocked) {
      let prv = (this.currentpage.id + this.maxpages - 2) % this.maxpages;
      let prev = this.pages[prv];
      this.router.navigate([prev.page]);
      this.currentpage = this.pages[prv];
      this.transition = "minus";
      console.log(this.transition);
    }
  }


  }

import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  isClick: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  change(): void {
    //var baseColor = "rgb(0,0,0)";
    //&& document.body.style.color == baseColor
    if(this.isClick == false){
      var x = 0; // range is 0-255
      var y = 0;
      var z = 255;
      var thergb = "rgb(" + x + "," + y + "," + z + ")"; 
      console.log(thergb,document.body.style.background);
      document.body.style.color=thergb;
      this.isClick = true;
    }
    else{
      var x = 0; // range is 0-255
      var y = 0;
      var z = 0;
      var thergb = "rgb(" + x + "," + y + "," + z + ")"; 
      console.log(thergb,document.body.style.background);
      document.body.style.color=thergb;
      this.isClick = false;
    }
    
  }

}
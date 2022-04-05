import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.scss']
})
export class JeuComponent implements OnInit {

  public indexQuestion : number;

  constructor() {
    this.indexQuestion = 0;
   }

  ngOnInit(): void {
  }

}
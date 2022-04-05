import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.scss']
})
export class JeuComponent implements OnInit {

  @Input()
  quiz: Quiz;
  public indexQuestion : number;

  constructor() {
    this.indexQuestion = 0;
   }

  ngOnInit(): void {
  }

}
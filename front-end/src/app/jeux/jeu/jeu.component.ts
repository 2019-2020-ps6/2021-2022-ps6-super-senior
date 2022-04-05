import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Jeu } from 'src/models/jeu.model';
import { Quiz } from 'src/models/quiz.model';
import { Question } from 'src/models/question.model';
import { QuizService } from 'src/services/quiz.service';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.scss']
})
export class JeuComponent implements OnInit {

  @Input()
  quiz: Quiz;
  public test : Quiz;
  public jeu : Jeu;
  public indexQuestion : number;

  constructor(private route: ActivatedRoute, private quizService: QuizService, private forBuilder : FormBuilder) {
    this.indexQuestion = 0;
    this.quizService.quizSelected$.subscribe((quiz) => {
      this.jeu.quiz = quiz;
      this.test = quiz;
    });
    
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id);
  }

}
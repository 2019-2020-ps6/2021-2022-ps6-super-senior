import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/models/question.model';

@Component({
  selector: 'app-jeu-question',
  templateUrl: './jeu-question.component.html',
  styleUrls: ['./jeu-question.component.scss']
})
export class JeuQuestionComponent implements OnInit {

    @Input()
  question: Question;

  @Output()
  answerSelected: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  answerCorrect: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  selectAnswer(answersId : string ) : void {
    this.answerSelected.emit(answersId);
  }

  isCorrect(isCorrect : boolean) : void {
    console.log(isCorrect);
    this.answerCorrect.emit(isCorrect);
  }

}
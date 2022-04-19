import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Answer, Question } from 'src/models/question.model';
import { ConfigurationService } from 'src/services/configuration.service';

@Component({
  selector: 'app-jeu-question',
  templateUrl: './jeu-question.component.html',
  styleUrls: ['./jeu-question.component.scss']
})
export class JeuQuestionComponent implements OnInit {

  @Input()
  question: Question;

  public answersRandom : Answer[];

  @Output()
  answerSelected: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  answerCorrect: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public configurationService: ConfigurationService) {}

  ngOnInit(): void {
    console.log(this.question.id);
    this.answersRandom = this.shuffle(this.question.answers);
  }

  selectAnswer(answersId : string ) : void {
    this.answerSelected.emit(answersId);
  }

  isCorrect(isCorrect : boolean) : void {
    console.log(isCorrect);
    this.answerCorrect.emit(isCorrect);
  }

  shuffle(array): any {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  

}
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

  timeLeft: number = 5;
  interval;
  answerHover: Answer;
  answerId: string;

  @Input()
  question: Question;

  public answersRandom : Answer[];

  @Output()
  answerSelected: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  answerCorrect: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public configurationService: ConfigurationService) {
    this.timeLeft = configurationService.temps;
    console.log(configurationService.getCentreForGlaucome());
    console.log(configurationService.getProtanopieGlaucomeArthroseButtonSmall());
  }

  ngOnInit(): void {
    this.answersRandom = this.shuffle(this.question.answers);
  }

  selectAnswer(answersId : string ) : void {
    this.answerSelected.emit(answersId);
  }

  isCorrect(isCorrect : boolean) : void {
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

  lecture(texte : string){
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(texte);
    utterThis.lang = 'fr-FR';
    synth.speak(utterThis);
  }

  startTimer(answer: Answer, answersId: string) : void {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      }
      if(this.timeLeft==0){
        this.answerHover=answer;
        this.answerId=answersId;
        this.stopTimer();
      }
    },1000)
    this.answerHover=answer;
    this.answerId=answersId;
  
  }
  
  stopTimer() {
    if(this.timeLeft ==0){
      this.selectAnswer(this.answerId);
      this.isCorrect(this.answerHover.isCorrect)
    }
    this.timeLeft=this.configurationService.temps;
    clearInterval(this.interval);
  }

  

}
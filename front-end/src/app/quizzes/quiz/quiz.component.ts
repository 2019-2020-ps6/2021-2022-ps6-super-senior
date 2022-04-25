import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quiz } from '../../../models/quiz.model';
import { ConfigurationService } from 'src/services/configuration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  timeLeft: number = 5;
  interval;
  path: String;

  @Input()
  quiz: Quiz;

  @Output()
  quizSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  editQuiz: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  @Output()
  deleteQuiz: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  constructor(public configurationService: ConfigurationService, private router: Router) {
    this.timeLeft = configurationService.temps;
  }

  ngOnInit(): void {
  }

  selectQuiz(): void {
    this.quizSelected.emit(true);
  }

  edit(): void {
    this.editQuiz.emit(this.quiz);
  }

  delete(): void {
    this.deleteQuiz.emit(this.quiz);
  }

  startTimer(path: String) : void {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      }
      if(this.timeLeft==0){
        this.path=path;
        this.stopTimer();
      }
    },1000)
    this.path=path;

  }
  
  stopTimer() {
    if(this.timeLeft ==0){
      if(this.path=='select'){
        this.selectQuiz();}
      else if(this.path=='delete'){
        this.delete();}
      else{
        this.router.navigate([this.path+this.quiz.id]);
      }
    }
    this.timeLeft=this.configurationService.temps;
    clearInterval(this.interval);
  }
}

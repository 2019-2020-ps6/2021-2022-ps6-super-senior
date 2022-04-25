import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';
import { ConfigurationService } from 'src/services/configuration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lancement-quiz',
  templateUrl: './lancement-quiz.component.html',
  styleUrls: ['./lancement-quiz.component.scss']
})
export class LancementQuizComponent implements OnInit {
  
  timeLeft: number = 5;
  interval;
  path: String;
  public quiz: Quiz;
  public nbQuestion: number;
  public theme: string;
  public name:string;
  public id: string;

  constructor(private route: ActivatedRoute, private quizService: QuizService, public configurationService: ConfigurationService, private router: Router) {
    this.quizService.quizSelected$.subscribe((quiz) => this.quiz = quiz);
    this.timeLeft = configurationService.temps;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(this.id);
    this.update();
  }

  update(){
    this.quizService.quizSelected$.subscribe((quiz) => {
      this.nbQuestion=this.quiz.questions.length;
      this.theme=this.quiz.theme;
      this.name=this.quiz.name;
    });
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
      if(this.path!='/accueil'){
        this.router.navigate([this.path+"/"+this.quiz.id ]);
      }
      else{
        this.router.navigate([this.path ]);
      }
    }
    this.timeLeft=this.configurationService.temps;
    clearInterval(this.interval);
  }

}
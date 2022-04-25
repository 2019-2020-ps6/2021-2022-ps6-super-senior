import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';
import { ConfigurationService } from 'src/services/configuration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config-quiz',
  templateUrl: './config-quiz.component.html',
  styleUrls: ['./config-quiz.component.scss'],
})
export class ConfigQuizComponent implements OnInit {

  timeLeft: number = 5;
  interval;
  path: String;

  public quiz: Quiz;
  public protanopie: boolean = this.configurationService.protanopie;
  public glaucome: boolean = this.configurationService.glaucome;
  public arthrose: boolean = this.configurationService.arthrose;
  public temps: number = 2;

  constructor(private route: ActivatedRoute, private quizService: QuizService, public configurationService: ConfigurationService, private router: Router) {
    this.quizService.quizCurrent$.subscribe((quiz) => this.quiz = quiz);
    this.timeLeft = configurationService.temps;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id);
  }

  saveChange() : void{
    this.configurationService.protanopie = this.protanopie;
    this.configurationService.glaucome = this.glaucome;
    this.configurationService.arthrose = this.arthrose;
    this.configurationService.temps = this.temps;
    
  }


  selectProtanopie(){
    this.protanopie = !this.protanopie;
  }

  selectGlaucome(){
    this.glaucome = !this.glaucome;
  }

  selectArthrose(){
    this.arthrose = !this.arthrose;
  }

  newTime(event){
    this.temps = event.target.value;
  }

  protanopieIsChecked(): boolean{
      return this.protanopie;
  }

  glaucomeIsChecked(): boolean{
    return this.glaucome;
  }

  arthroseIsChecked(): boolean{
    return this.arthrose;
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
      if(this.path=='/config-quiz/'){
        this.saveChange();
      }
      console.log(this.path);
        this.router.navigate([this.path +this.quiz.id]);
    }
    this.timeLeft=this.configurationService.temps;
    clearInterval(this.interval);
  }

}
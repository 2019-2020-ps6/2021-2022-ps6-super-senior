import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationService } from 'src/services/configuration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fin-quiz',
  templateUrl: './fin-quiz.component.html',
  styleUrls: ['./fin-quiz.component.scss']
})
export class FinQuizComponent implements OnInit {

  timeLeft: number = 5;
  interval;
  path: String;

  constructor(public configurationService: ConfigurationService,  private router: Router) { 
    this.timeLeft = configurationService.temps;
  }

  ngOnInit(): void {
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
      this.router.navigate([this.path]);
    }
    this.timeLeft=this.configurationService.temps;
    clearInterval(this.interval);
  }

}
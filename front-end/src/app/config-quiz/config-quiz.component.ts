import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';
import { ConfigurationService } from 'src/services/configuration.service';

@Component({
  selector: 'app-config-quiz',
  templateUrl: './config-quiz.component.html',
  styleUrls: ['./config-quiz.component.scss']
})
export class ConfigQuizComponent implements OnInit {

  public quiz: Quiz;

  constructor(private route: ActivatedRoute, private quizService: QuizService, public configurationService: ConfigurationService) {
    this.quizService.quizSelected$.subscribe((quiz) => this.quiz = quiz);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id);
  }

}
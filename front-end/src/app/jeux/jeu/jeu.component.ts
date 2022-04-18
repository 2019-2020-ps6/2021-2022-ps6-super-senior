import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Jeu } from 'src/models/jeu.model';
import { Quiz } from 'src/models/quiz.model';
import { Question } from 'src/models/question.model';
import { JeuService } from 'src/services/jeu.service';
import { QuizService } from 'src/services/quiz.service';
import { LancementQuizComponent } from 'src/app/lancement-quiz/lancement-quiz.component';


@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.scss']
})
export class JeuComponent implements OnInit {


  public quiz : Quiz;
  public jeu : Jeu;
  public indexQuestion : number;
  public score : number = 0;

  constructor(private route: ActivatedRoute, private jeuService: JeuService, private quizService: QuizService, private forBuilder : FormBuilder) {
    /*this.quizService.quizSelected$.subscribe((quiz) => {
      this.test = quiz;
      this.addJeu();
    }
    );*/
    const id = this.route.snapshot.paramMap.get('id');
    this.quiz = this.quizService.getQuiz(id) as Quiz;
    this.quizService.quizSelected$.subscribe((quiz) => {
      this.quiz = quiz;
    });
    this.addJeu();
    this.indexQuestion = 0;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("ngInit");
  }

  addJeu() : void {
    let quizId = this.quiz.id;
    var reponse: string[] = [];
    let jeuToCreate: Jeu = {
      quizId : quizId,
      answers : reponse,
      user : {},
      quiz: this.quiz} as Jeu;
    jeuToCreate.quiz = this.quiz;
    console.log(jeuToCreate.quiz.id);
    this.jeuService.addJeu(jeuToCreate);
    this.jeu = jeuToCreate;
  }

  answerSelected(answersId : string): void {
    this.jeu.answers.push(answersId);
    this.indexQuestion++;
  }

  isCorrect(isCorrect : boolean) : void {
    console.log("jeu " + isCorrect);
    if(isCorrect){
      this.score++;
    }
  }

}
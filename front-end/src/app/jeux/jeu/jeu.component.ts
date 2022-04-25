import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Jeu } from 'src/models/jeu.model';
import { Quiz } from 'src/models/quiz.model';
import { Question } from 'src/models/question.model';
import { JeuService } from 'src/services/jeu.service';
import { QuizService } from 'src/services/quiz.service';
import { LancementQuizComponent } from 'src/app/lancement-quiz/lancement-quiz.component';
import { ConfigurationService } from 'src/services/configuration.service';


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
  private formJeu: FormGroup;

  constructor(private route: ActivatedRoute, private jeuService: JeuService, private quizService: QuizService, private forBuilder : FormBuilder, public configurationService: ConfigurationService) {
    const id = this.route.snapshot.paramMap.get('id');
    //this.quiz = this.quizService.getQuiz(id) as Quiz;
    this.quizService.quizCurrent$.subscribe((quiz) => {
      this.quiz = quiz;
    });
    this.addJeu();
    this.indexQuestion = 0;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
  }

  addJeu() : void {
    var reponse: string[] = [];
    const jeuToCreate: Jeu = {
      quizId : this.quiz.id,
      answers : [],
      userId : '0'
      } as Jeu; 
    this.jeu = jeuToCreate;
  }

  answerSelected(answersId : string): void {
    this.jeu.answers.push(answersId);
    this.indexQuestion++;
    if(this.indexQuestion==this.quiz.questions.length) { 
      this.jeuService.addJeu(this.jeu);
      return;
    }
    this.shuffle(this.quiz.questions[this.indexQuestion].answers);
  }

  isCorrect(isCorrect : boolean) : void {
    console.log("jeu " + isCorrect);
    if(isCorrect){
      this.score++;
    }
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
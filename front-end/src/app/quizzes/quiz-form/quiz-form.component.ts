import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';
import { Question } from 'src/models/question.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {

  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)

  /**
   * QuizForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms#step-1-creating-a-formgroup-instance
   */
  public quizForm: FormGroup;
  public quiz : Quiz;
  public questionForm: FormGroup;
  private bool: Boolean;
  private i:number;
  public quizList: Quiz[] = [];

  constructor(public formBuilder: FormBuilder, public quizService: QuizService, private router: Router) {
    this.quizForm = this.formBuilder.group({
      name: [''],
      theme: ['']
    });
    this.initializeQuestionForm();
    this.bool=false;
    this.i=0;
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.quizList = quizzes;
    });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  private initializeQuestionForm(): void {
    this.questionForm = this.formBuilder.group({
      label: ['', Validators.required],
      answers: this.formBuilder.array([])
    });
    this.addAnswer();
    this.addAnswer();
  }

  ngOnInit(): void {
  }

  addQuiz(): void {
    // We retrieve here the quiz object from the quizForm and we cast the type "as Quiz".
    const quizToCreate: Quiz = this.quizForm.getRawValue() as Quiz;

    this.quizService.addQuiz(quizToCreate);
    this.quizService.retrieveQuizzes();
    console.log(this.quizList);
    this.quiz=this.quizList[this.quizList.length-1];
    console.log(this.quiz);
  }

  get answers(): FormArray {
    return this.questionForm.get('answers') as FormArray;
  }

  private createFalseAnswer(): FormGroup {
    return this.formBuilder.group({
      value: '',
      isCorrect: false,
    });
  }
  private createTrueAnswer(): FormGroup {
    return this.formBuilder.group({
      value: '',
      isCorrect: true,
    });
  }

  addAnswer(): void {
    if(this.answers.length==0){
      this.answers.push(this.createTrueAnswer());
    }
    else{
      this.answers.push(this.createFalseAnswer());
    }
  }

  addQuestion(): void {
    //si c'est la première fois qu'on est ici et c'est valide on fait un add quizz 
    if (this.questionForm.valid) {

      const question = this.questionForm.getRawValue() as Question;

      if(this.bool==false){
        this.addQuiz();
        this.bool=true;
        
        this.i=0;
        while(this.i<110){this.i++;}
        this.quizService.addQuestion(this.quiz,question);
      }
      else{

        this.quizService.addQuestion(this.quiz, question);
      }
      this.initializeQuestionForm();
    }
  }

}

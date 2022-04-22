import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
import { Answer, Question } from 'src/models/question.model';
import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  @Input()
  quiz: Quiz;

  public questionForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private quizService: QuizService) {
    // Form creation
    this.initializeQuestionForm();
  }

  private initializeQuestionForm(): void {
    this.questionForm = this.formBuilder.group({
      label: ['', Validators.required],
      answers: this.formBuilder.array([]),
      image: ['']
    });
    this.addAnswer();
    this.addAnswer();
  }

  ngOnInit(): void {
  }

  get answers(): FormArray {
    return this.questionForm.get('answers') as FormArray;
  }

  private createFalseAnswer(): FormGroup {
    return this.formBuilder.group({
      value: '',
      imageAnswer:['', Validators.nullValidator],
      isCorrect: false,
    });
  }
  private createTrueAnswer(): FormGroup {
    return this.formBuilder.group({
      value: '',
      imageAnswer:['', Validators.nullValidator],
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
    if (this.questionForm.valid) {
      const question = this.questionForm.getRawValue() as Question;
      this.quizService.addQuestion(this.quiz, question);
      this.initializeQuestionForm();
    }
  }
}

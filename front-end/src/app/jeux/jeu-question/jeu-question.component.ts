import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/models/question.model';

@Component({
  selector: 'app-jeu-question',
  templateUrl: './jeu-question.component.html',
  styleUrls: ['./jeu-question.component.scss']
})
export class JeuQuestionComponent implements OnInit {

    @Input()
  question: Question;

  constructor() { }

  ngOnInit(): void {
  }

}
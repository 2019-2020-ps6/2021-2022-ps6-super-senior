import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationService } from 'src/services/configuration.service';

@Component({
  selector: 'app-fin-quiz',
  templateUrl: './fin-quiz.component.html',
  styleUrls: ['./fin-quiz.component.scss']
})
export class FinQuizComponent implements OnInit {

  constructor(public configurationService: ConfigurationService) { }

  ngOnInit(): void {
  }

}
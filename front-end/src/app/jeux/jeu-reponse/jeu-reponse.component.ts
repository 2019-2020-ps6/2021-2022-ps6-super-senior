import { asNativeElements, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AbstractExtendedWebDriver } from "protractor/built/browser";
import { Answer } from "src/models/question.model";
import { ConfigurationService } from "src/services/configuration.service";
import { UserService } from "src/services/user.service";


@Component({
    selector: 'app-jeu-reponse',
    templateUrl: './jeu-reponse.component.html',
    styleUrls: ['./jeu-reponse.component.scss']
  })

  export class JeuReponseComponent implements OnInit {

    @Input()
    answer : Answer

    @Input()
    isCorrect : boolean

    @Input()
    numero : number

    @Input()
    nbQuestion : number

    @Input()
    nomQuiz : string

    @Input()
    question: string

    @Output()
    newQuestionSelected : EventEmitter<boolean> = new EventEmitter<boolean>();

    interval;
    timeLeft : number;
    lien : string = "data:image/png;base64,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";


    constructor( public configurationService : ConfigurationService, public userService : UserService){
        this.timeLeft = configurationService.temps;
    }

    ngOnInit(): void {
    }

    lecture(texte : string){
        const synth = window.speechSynthesis;
        const utterThis = new SpeechSynthesisUtterance(texte);
        utterThis.lang = 'fr-FR';
        synth.speak(utterThis);
    }

    newQuestion(){
        this.newQuestionSelected.emit(true);
    }

    startTimer() : void {
        this.interval = setInterval(() => {
          if(this.timeLeft > 0) {
            this.timeLeft--;
          }
          if(this.timeLeft==0){
            this.stopTimer();
          }
        },1000)
      
      }
      
      stopTimer() {
        if(this.timeLeft==0){
          this.newQuestion();
        }
        this.timeLeft=this.configurationService.temps;
        clearInterval(this.interval);
      }
}  
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


    constructor( public configurationService : ConfigurationService, public userService : UserService){
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
}  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { serverUrl, httpOptionsBase } from '../configs/server.config';

@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {
    private configUrl = serverUrl + '/configs';

    protanopie: boolean = false;

    glaucome: boolean = false;

    arthrose: boolean = false;

    temps: number = 2;

    private httpOptions = httpOptionsBase;

    constructor(private http: HttpClient) {
        this.http = http;
    }

    getColorForProtanopieText() {
        return {'color-protanopie': this.protanopie, 'color-normal': !this.protanopie}
    }

    getColorForProtanopieButton() {
        return {'color-protanopie': this.protanopie, 'color-normal': !this.protanopie, 
        'color-protanopie-button': this.protanopie, 'color-normal-button': !this.protanopie}
    }

    getColorForProtanopieGlaucomeButtonSmall() {
        return {'color-protanopie': this.protanopie, 'color-normal': !this.protanopie, 
        'color-protanopie-question': this.protanopie, 'color-normal-question': !this.protanopie,
        'answer-glaucome': this.glaucome, 'answerSmall': !this.glaucome}
    }

    getColorForProtanopieGlaucomeButtonBig() {
        return {'color-protanopie': this.protanopie, 'color-normal': !this.protanopie, 
        'color-protanopie-question': this.protanopie, 'color-normal-question': !this.protanopie,
        'answer-glaucome': this.glaucome, 'answerBig': !this.glaucome}
    }

    getAbandonSize(){
        return {'abandon-glaucome': this.glaucome, 'abandon-normal': !this.glaucome}
    }

    getCentreForGlaucome() {
        return {'position-glaucome': this.glaucome}
    }

    getGlaucomeForQuiz() {
        return {'top-jeu-glaucome': this.glaucome, 'top-jeu': !this.glaucome}
    }

    getTailleForArthrose() {
        return {'taille-arthrose': this.arthrose, 'taille-normal': !this.arthrose}
    }

    getTemps(){
        return{'temps': this.temps}
    }
}
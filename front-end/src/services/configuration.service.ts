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

    public indicationProtanopie: string = "Le texte sera écrit en bleu."
    public indicationArthrose: string = "Les cases de réponses seront affichées en plus gros.\nIl faut rester un certains temps sur la réponse pour la sélectioner";
    public indicationGlaucome: string = "Les élements du site seront centrés."

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

    getCentreForGlaucome() {
        return {'position-glaucome': this.glaucome}
    }

    getTailleForArthrose() {
        return {'taille-arthrose': this.arthrose, 'taille-normal': !this.arthrose}
    }

    getTemps(){
        return{'temps': this.temps}
    }
    
    getArthrose(){
        return this.arthrose;
    }
}
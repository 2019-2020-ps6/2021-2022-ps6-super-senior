import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { serverUrl, httpOptionsBase } from '../configs/server.config';

@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {
    private configUrl = serverUrl + '/configs';

    protanopie: boolean = true;

    glaucome: boolean = true;

    arthrose: boolean = true;

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
        return {'position-glaucome': this.glaucome, 'position-normal': !this.glaucome}
    }

    getTailleForArthrose() {
        return {'taille-arthrose': this.arthrose, 'taille-normal': !this.arthrose}
    }
}
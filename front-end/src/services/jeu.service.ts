import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { Jeu } from 'src/models/jeu.model';
import {JEU_LIST} from '../mocks/jeu-list.mock';
import { serverUrl, httpOptionsBase } from '../configs/server.config';

@Injectable({
    providedIn: 'root'
  })

export class JeuService{
    private jeux: Jeu[]=JEU_LIST;

    public jeux$: BehaviorSubject<Jeu[]>=new BehaviorSubject(this.jeux);

    public jeuSelected$: Subject<Jeu>=new Subject();

    private jeuURL = serverUrl+ '/jeux';

    private httpOptions = httpOptionsBase;

    constructor(private http: HttpClient) {
        this.retrieveJeux();
    }

    retrieveJeux():void{
        this.http.get<Jeu[]>(this.jeuURL).subscribe((jeuList) => {
            this.jeux = jeuList;
            this.jeux$.next(this.jeux);
          });
    }

    addJeu(jeu: Jeu):void{
        this.http.post<Jeu>(this.jeuURL,jeu,this.httpOptions).subscribe(()=>this.retrieveJeux());
    }

    setSelectedJeu(jeuId: string): void{
        const urlWithId= this.jeuURL+'/'+jeuId;
        this.http.get<Jeu>(urlWithId).subscribe((jeu) => {
            this.jeuSelected$.next(jeu);
          });
    }

    deleteJeu(jeu: Jeu): void {
        const urlWithId = this.jeuURL + '/' + jeu.id;
        this.http.delete<Jeu>(urlWithId, this.httpOptions).subscribe(() => this.retrieveJeux());
      }


}
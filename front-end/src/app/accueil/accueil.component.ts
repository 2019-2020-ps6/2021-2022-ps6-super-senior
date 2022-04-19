import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigurationService } from 'src/services/configuration.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(public configurationService: ConfigurationService) { }

  ngOnInit(): void {
    
  }

  changeProtanopie(): void {
    this.configurationService.protanopie = !this.configurationService.protanopie;
  }

  changeArthrose(): void {
    this.configurationService.arthrose = !this.configurationService.arthrose;
  }

  changeGlaucome(): void {
    console.log(this.configurationService.glaucome);
    this.configurationService.glaucome = !this.configurationService.glaucome;
  }

}
import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/services/configuration.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public configurationService: ConfigurationService) { }

  ngOnInit(): void {
  }

}

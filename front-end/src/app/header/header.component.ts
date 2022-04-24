import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/services/configuration.service';
import { UserService } from 'src/services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user: string = "User";

  constructor(public configurationService: ConfigurationService, public userService: UserService) {
    userService.userSelected$.subscribe((user) => this.user = user.firstName);
  }

  ngOnInit(): void {
  }

}

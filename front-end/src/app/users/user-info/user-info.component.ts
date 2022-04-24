import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';
import { ConfigurationService } from 'src/services/configuration.service';
import { UserService } from 'src/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.scss']
  })
  export class UserInfoComponent implements OnInit {

    public user : User;

    constructor(public configurationService : ConfigurationService, public userService: UserService) {
        userService.userCurrent$.subscribe((user: User) => {
            this.user = user;
        });
      }
    
      ngOnInit(): void {
      }

      selectProtanopie(){
        this.user.protanopie = !this.user.protanopie;
      }
    
      selectGlaucome(){
        this.user.glaucome = !this.user.glaucome;
      }
    
      selectArthrose(){
        this.user.arthrose = !this.user.arthrose;
      }
    
      newTime(event){
        this.user.temps = event.target.value;
      }

      save(){
        this.configurationService.protanopie = this.user.protanopie;
        this.configurationService.glaucome = this.user.glaucome;
        this.configurationService.arthrose = this.user.arthrose;
        this.userService.updateUser(this.user);
      }
  }
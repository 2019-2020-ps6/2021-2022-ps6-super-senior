import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';
import { ConfigurationService } from 'src/services/configuration.service';
import { UserService } from 'src/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.scss']
  })
  export class UserInfoComponent implements OnInit {

    public userForm: FormGroup;
    public user : User;
    public editFirstName : boolean = false;
    public editLastName : boolean = false;
    public editPicture : boolean = false;

    constructor( public formBuilder: FormBuilder, public configurationService : ConfigurationService, public userService: UserService) {
        userService.userCurrent$.subscribe((user: User) => {
            this.user = user;
        });
        this.userForm = this.formBuilder.group({
          firstName: [this.user.firstName, Validators.required],
          lastName: [this.user.lastName, Validators.required],
          photo: [this.user.photo]
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
        this.configurationService.temps = this.user.temps;
        const userFirstName: string = this.userForm.value.firstName;
        this.user.firstName = userFirstName;
        const userLastName: string = this.userForm.value.lastName;
        this.user.lastName = userLastName;
        const userPicture: string = this.userForm.value.photo;
        if(!(userPicture == '')){
          this.user.photo = userPicture;
        }
        this.editFirstName = false;
        this.editLastName = false;
        this.editPicture = false;
        this.userService.updateUser(this.user);
      }

      delete(){
        this.userService.deleteUser(this.user);
        
      }

      editedFirstName() : void{
        this.editFirstName = !this.editFirstName;
        /*this.userForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          //lastName: ['', Validators.required],
          //photo: ['']
        });*/
      }

      /*saveFirstName(){
        const userFirstName: string = this.userForm.value.firstName;
        console.log(userFirstName + "nom");
        this.user.firstName = userFirstName;
        this.editFirstName = !this.editFirstName;
        //this.userService.updateUser(this.user);
      }*/

      editedLastName(){
        this.editLastName = !this.editLastName;
      }

      editedPicture(){
        this.editPicture = !this.editPicture;
      }
  }
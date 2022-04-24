import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';
import { collectExternalReferences } from '@angular/compiler';
import { ConfigurationService } from 'src/services/configuration.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public userForm: FormGroup;
  public protanopie: boolean = false;
  public glaucome: boolean = false;
  public arthrose: boolean = false;
  public temps: number = 2;

  constructor(public formBuilder: FormBuilder, public userService: UserService, public configurationService: ConfigurationService) {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      photo: ['']
    });
  }

  ngOnInit(): void {
  }

  private initializeUserForm(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      photo: ['']
    });
  }

  addUser(): void {
    // We retrieve here the user object from the userForm and we cast the type "as User".
    const userToCreate: User = this.userForm.getRawValue() as User;
    userToCreate.protanopie = this.protanopie;
    userToCreate.glaucome = this.glaucome;
    userToCreate.arthrose = this.arthrose;
    userToCreate.temps = this.temps;
    console.log(userToCreate.temps);
    //userToCreate.temps = this.temps;
    this.userService.addUser(userToCreate);
    this.initializeUserForm();
  }

  selectProtanopie(){
    this.protanopie = !this.protanopie;
  }

  selectGlaucome(){
    this.glaucome = !this.glaucome;
  }

  selectArthrose(){
    this.arthrose = !this.arthrose;
  }

  newTime(event){
    this.temps = event.target.value;
  }
}

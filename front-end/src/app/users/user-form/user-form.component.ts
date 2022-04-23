import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';
import { collectExternalReferences } from '@angular/compiler';

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
  public indicationProtanopie: string = "Le texte sera écrit en bleu."
  public indicationArthrose: string = "Les cases de réponses seront affichées en plus gros.\nIl faut rester un certains temps sur la réponse pour la sélectioner";
  public indicationGlaucome: string = "Les élements du site seront centrés."

  constructor(public formBuilder: FormBuilder, public userService: UserService) {
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

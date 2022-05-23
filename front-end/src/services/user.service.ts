import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../models/user.model';
import { serverUrl, httpOptionsBase } from '../configs/server.config';
import { ConfigurationService } from './configuration.service';
import { threadId } from 'worker_threads';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /*
   The list of user.
   */
  private users: User[] = [];
  private user: User = {} as User;

  /*
   Observable which contains the list of the user.
   */
  public users$: BehaviorSubject<User[]>
    = new BehaviorSubject([]);

  public userSelected$: Subject<User> = new Subject();

  public userCurrent$: BehaviorSubject<User> = new BehaviorSubject(this.user);

  private userUrl = serverUrl + '/users';

  private httpOptions = httpOptionsBase;

  constructor(private http: HttpClient, public configurationService : ConfigurationService) {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.http.get<User[]>(this.userUrl).subscribe((userList) => {
      this.users = userList;
      this.users$.next(this.users);
      this.userCurrent$.next(null);
    });
  }

  addUser(user: User): void {
    this.http.post<User>(this.userUrl, user, this.httpOptions).subscribe(() => this.retrieveUsers());
  }

  setSelectedUser(userId: string): void {
    const urlWithId = this.userUrl + '/' + userId;
    this.http.get<User>(urlWithId).subscribe((user) => {
      this.userSelected$.next(user);
      this.userCurrent$.next(user);
      this.configurationService.arthrose = user.arthrose;
      this.configurationService.protanopie = user.protanopie;
      this.configurationService.glaucome = user.glaucome;
      this.configurationService.temps = user.temps;
    });
  }

  deleteUser(user: User): void {
    const urlWithId = this.userUrl + '/' + user.id;
    this.http.delete<User>(urlWithId, this.httpOptions).subscribe(() => this.retrieveUsers());
  }

  updateUser(user: User): void {
    const urlWithId = this.userUrl + '/' + user.id;
    this.http.put<User>(urlWithId, user).subscribe(() => this.retrieveUsers());
    this.user = user;
    this.userCurrent$.next(user);
    this.userSelected$.next(user);
  }

  deconnexion(){
    this.userCurrent$.next(null);
      this.configurationService.arthrose = false;
      this.configurationService.protanopie = false;
      this.configurationService.glaucome = false;
      this.configurationService.temps = 5;
  }

  
}

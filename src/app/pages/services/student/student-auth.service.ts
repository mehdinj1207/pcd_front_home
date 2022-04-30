import { Role } from './../../model/role';
import { Router } from '@angular/router';
import { Student } from './../../model/student';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../../model/user';
@Injectable({
  providedIn: 'root'
})
export class StudentAuthService {
 
  constructor(private router:Router) {}

  public loggedStudent!:string;
  public isloggedIn: Boolean = false;
  public roles!:Role[];

  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): [] {
    return JSON.parse(localStorage.getItem('roles')!);
  }

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): string {
    return localStorage.getItem('jwtToken')!;
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }

  signIn(student :Student){
    this.loggedStudent = student.userName;
 
    this.isloggedIn = true;
    this.roles = student.roles;
    localStorage.setItem('loggedStudent',this.loggedStudent);
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    console.log(this.loggedStudent);
 }

    setLoggedUserFromLocalStorage(login : string) {
      this.loggedStudent = login;
      this.isloggedIn = true;
      this.getRoles();
      }
      
      public logout() {
       //
      
 
       this.clear();
       
    
        this.router.navigate(['/home']);
      }
}

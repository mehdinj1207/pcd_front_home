import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Role } from '../../model/role';
import { Former } from '../../model/former';

@Injectable({
  providedIn: 'root'
})
export class FormerAuthService {
 
  constructor(private router:Router) { }

  public loggedFormer!:string;
  public isloggedInF: Boolean = false;
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

  public isLoggedInF() {
    return this.getRoles() && this.getToken();
  }
  signInF(former:Former){
    this.loggedFormer = former.userName;
    this.isloggedInF = true;
    this.roles = former.roles;
    localStorage.setItem('loggedFormer',this.loggedFormer);
    localStorage.setItem('isloggedInF',String(this.isloggedInF));
    console.log(this.loggedFormer);
 }

    setLoggedUserFromLocalStorageF(login : string) {
      this.loggedFormer = login;
      this.isloggedInF = true;
      this.getRoles();
      }
      
      public logoutF() {
       //
      
 
       this.clear();
       
    
        this.router.navigate(['/home']);
      }
}
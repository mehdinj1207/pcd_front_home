import { FormerAuthService } from './former-auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Former } from '../../model/former';

@Injectable({
  providedIn: 'root'
})
export class FormerService {
  PATH_OF_API = 'http://localhost:9090';
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(private httpclient: HttpClient, private formerAuthService: FormerAuthService ) {}

  public login(loginData: any) {
     
    return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }

  public registerF(former:Former){
     
    return this.httpclient.post(this.PATH_OF_API + '/registerNewFormer', former, {
      headers: this.requestHeader,
    });
  }

  public roleMatchF(allowedRoles: string | any[]): boolean {
    let isMatch = false;
    const formerRoles: any = this.formerAuthService.getRoles();

    if (formerRoles!=null && formerRoles){
      for(let i =0; i<formerRoles.length;i++){
        for(let j=0;j<allowedRoles.length;j++){
          if (formerRoles[i].roleName===allowedRoles[j]){
            isMatch=true;
            return isMatch;
          }
          
        }
      }
    }
    return isMatch;
  }







}

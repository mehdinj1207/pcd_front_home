import { CenterAuthService } from './center-auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Center } from '../../model/center';

@Injectable({
  providedIn: 'root'
})
export class CenterService {
  PATH_OF_API = 'http://localhost:9090';
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(private httpclient: HttpClient,private centerAuthService: CenterAuthService) { }
  public login(loginData: any) {
     
    return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }

  public registerC(center:Center){
     
    return this.httpclient.post(this.PATH_OF_API + '/registerNewCenter', center, {
      headers: this.requestHeader,
    });
  }

  public roleMatchC(allowedRoles: string | any[]): boolean {
    let isMatch = false;
    const formerRoles: any = this.centerAuthService.getRoles();

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

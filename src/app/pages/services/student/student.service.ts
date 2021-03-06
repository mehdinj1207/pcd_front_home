import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../../model/student';
import { StudentAuthService } from './student-auth.service';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  PATH_OF_API = 'http://localhost:9090';
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(private httpclient: HttpClient, private studentAuthService : StudentAuthService) {}
    public login(loginData: any) {
     
      return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
        headers: this.requestHeader,
      });
    }
  
    public register(student:Student){
     
      return this.httpclient.post(this.PATH_OF_API + '/registerNewStudent', student, {
        headers: this.requestHeader,
      });
    }

    
    public forStudent() {
      return this.httpclient.get(this.PATH_OF_API + '/forStudent', {
        responseType: 'text',
      });
    }
  
  
    public forAdmin() {
      return this.httpclient.get(this.PATH_OF_API + '/forAdmin', {
        responseType: 'text',
      });
    }

    public roleMatch(allowedRoles: string | any[]): boolean {
      let isMatch = false;
      const userRoles: any = this.studentAuthService.getRoles();
  
      if (userRoles!=null && userRoles){
        for(let i =0; i<userRoles.length;i++){
          for(let j=0;j<allowedRoles.length;j++){
            if (userRoles[i].roleName===allowedRoles[j]){
              isMatch=true;
              return isMatch;
            }
            
          }
        }
      }
      return isMatch;
    }
}

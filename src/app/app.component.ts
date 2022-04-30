import { FormerAuthService } from './pages/services/former/former-auth.service';
import { Router } from '@angular/router';
import { StudentAuthService } from './pages/services/student/student-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pcd'
  constructor(public studentservice:StudentAuthService, private router :Router,private formerAuthService: FormerAuthService) {}

  ngOnInit () {
    let isloggedin: string;
    let loggedStudent:string;
    /*let isloggedinF: string;
    let loggedFormer:string;*/
   
   
    isloggedin = localStorage.getItem('isloggedIn')!;
    loggedStudent = localStorage.getItem('loggedStudent')!;
    /*isloggedinF = localStorage.getItem('isloggedinF')!;
    loggedFormer = localStorage.getItem('loggedFormer')!;*/
    
   

    if (isloggedin!="true" || !loggedStudent )
    this.router.navigate(['/home']);
    else
    this.studentservice.setLoggedUserFromLocalStorage(loggedStudent);
   /* if (isloggedinF!="true" || !loggedFormer)
    this.router.navigate(['/home']);
    else
    this.formerAuthService.setLoggedUserFromLocalStorageF(loggedFormer);*/
    
    
    
  }
  
}




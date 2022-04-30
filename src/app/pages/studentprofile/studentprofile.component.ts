import { StudentAuthService } from './../services/student/student-auth.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import {Clipboard} from '@angular/cdk/clipboard';
@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentprofileComponent implements OnInit {
  value =
  `https//:wwww.welearn.com` 
  ;
  constructor(public studentAuthService:StudentAuthService,private clipboard: Clipboard) { }
  student!:Student;

 
  ngOnInit(): void {
  }
  course= [
    {'id':1,'name':'Nouveau message','firstname':'français avec Mehdi njema ','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/img8.jpg','linkpage':'allprof'},
    {'id':2,'name':'Nouveau message','firstname':'français avec Mehdi njema français','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/img2.jpg','linkpage':'allprof'},
    {'id':3,'name':'Nouveau message','firstname':'français avec Mehdi njema français','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/img3.jpg','linkpage':'allprof'},
    {'id':4,'name':'Nouveau message','firstname':'français avec Mehdi njema français','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/img5.jpg','linkpage':'allprof'},
  ]
  info= [
    {'id':1,'name':'Learn Angular','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/angular.jpg','linkpage':'allprof'},
    {'id':2,'name':'Learn Typescript','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/typescript.jpg','linkpage':'allprof'},
    {'id':3,'name':'Learn Nodejs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/nodejs.jpg','linkpage':'allprof'},
    {'id':4,'name':'Learn Reactjs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/reactjs.jpg','linkpage':'allprof'},
  ]
}

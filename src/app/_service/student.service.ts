import { Injectable } from '@angular/core';
import { Student } from '../_models/student';
import { element } from 'protractor';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseurl:string="http://localhost:8080/students/";
  getstudents(){
    return this.http.get<Student[]>(this.baseurl+"list");
  }
  getstudentdetails(id:number){
    return this.http.get<Student>(this.baseurl+"details");
  }
  AddStudent(std:Student){
    return this.http.post<Student>(this.baseurl+"add",std);
  }
  constructor( private http:HttpClient) { }
}

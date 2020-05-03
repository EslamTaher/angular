import { Component, OnInit } from '@angular/core';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { StudentService } from '../../_service/student.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { Student } from "../../_models/student";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  students:Student[];
  constructor(private studentservice :StudentService,
    private router:Router) { }

    deleteStudent(id,i){

      console.log(id)
      this.studentservice.deleteStudent(id).subscribe(a=>{
        this.students.splice(i,1)
        console.log(a)
       }
      )
    }
  ngOnInit(): void {
    this.studentservice.getstudents().subscribe(d=>{console.log(d)})
    this.studentservice.getstudents().subscribe(
      data=>this.students=data
    )
    
  }

}

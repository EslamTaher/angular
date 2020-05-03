import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/student';
import { StudentService } from 'src/app/_service/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  nstd:Student=new Student();
  constructor(private stdser:StudentService,
    private r:Router) { }
  onSave(){
    this.stdser.AddStudent(this.nstd).subscribe(a=>{
      console.log(a);
      this.r.navigateByUrl("/student");
    })
  }

  ngOnInit(): void {
  }

}

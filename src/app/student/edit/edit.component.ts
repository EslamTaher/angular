import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/student';
import { StudentService } from 'src/app/_service/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  // std:Student;
  nstd:Student=new Student();
  constructor(
    private stdser:StudentService,
    private activeRouter:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    console.log(this.activeRouter.snapshot.params.id);
    this.stdser.getstudentdetails(this.activeRouter.snapshot.params.id).subscribe(
      data=>this.nstd=data
    )
  }
  onsave(id){
    this.stdser.editStudent(id,this.nstd).subscribe(a=>{
      console.log(a);
      // this.router.navigate(['/student']);
      this.router.navigateByUrl("/student");
    })
  }
}

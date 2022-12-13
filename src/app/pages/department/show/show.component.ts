import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../../../models/Department';
import { DepartmentService } from '../../../services/department.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private service:DepartmentService,private router:Router) { }
  ListDepartment !: Department[];

 
 
  ngOnInit(): void {
    this.GetAllDepartment();
  }
  GetAllDepartment()
  {
    this.service.fetchDepartments().subscribe(
      (t)=>{

        this.ListDepartment=t;
      },
      (error)=>{
        console.log(error.status)
      }
    );
  }

  Delete(id:number)
  {
    this.service.deleteDepartment(id).subscribe(()=>{},(error)=>{console.log(error)});
    this.GetAllDepartment();
  }
  Update(id:number)
  {
    this.router.navigate(['/department/DepartmentHome/update/',id])
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../../../models/Department';
import { DepartmentService } from '../../../services/department.service';

@Component({
  selector: 'app-get-parent',
  templateUrl: './get-parent.component.html',
  styleUrls: ['./get-parent.component.css']
})
export class GetParentComponent implements OnInit {

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
        console.log(error)
      }
    );
  }


  executes(i:any){
    this.service.deleteDepartment(i.id).subscribe(()=>{},(error)=>{console.log(error)});
    this.GetAllDepartment();
  }

}

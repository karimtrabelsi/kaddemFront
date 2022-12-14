import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../../../models/Department';
import { DepartmentService } from '../../../services/department.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private ac:ActivatedRoute,private service:DepartmentService,private router:Router) { }


  isLoading = true;

  department = new Department();
  id=this.ac.snapshot.params['id'];
  
  ngOnInit(): void {
    this.getDepartment();
  }
 

  getDepartment()
  {
    this.service.fetchDepartmentById(this.id).subscribe(
      (res:Department)=>
      {
        this.department=res;
        this.department.idDepart=res.idDepart;
        this.isLoading = false;
      },
      (error)=>{
        console.log(error)
      }
    );
  }

  UpdateDepartment(data:Department){
    
    data.idDepart=this.id;

    this.service.UpdateDepartment(data).subscribe(()=>{},(error)=>{console.log(error);})
    this.router.navigateByUrl("department/DepartmentHome/detail/"+this.id);
    
  }
  

}

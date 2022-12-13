import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from '../../../models/Department';
import { DepartmentService } from '../../../services/department.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  Dep!:Department[];

  idDepart !:number;
  nomDepart!:String;
 

  DepForm = new FormGroup(
		{
			
			nomDepart : new FormControl('')
		}
		)
    constructor(private service:DepartmentService,private router:Router) { }


    ngOnInit(): void {
      this.service.fetchDepartments().subscribe(
        (t)=>{
          this.Dep=t;
        },
        (error)=>{
          console.log(error.status)
        }
      );
    }
    
    SaveDep(data:any)
    {
  
  
     
      this.service.addDepartment(data).subscribe(()=>{},(error)=>{console.log(error);})
      this.router.navigateByUrl("department/DepartmentHome/getParent");
   
    }
  
  
 
	
  }
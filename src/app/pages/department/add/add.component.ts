import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators,FormBuilder} from '@angular/forms';
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
  submitted = false;


  DepForm = new FormGroup(
		{
			
			nomDepart : new FormControl('')
		}
		)
    constructor(private service:DepartmentService,private router:Router, private formBuilder:FormBuilder ) { }


    ngOnInit(): void {
      this.DepForm = this.formBuilder.group(
        {
          nomDepart: ['', [Validators.required,Validators.minLength(6),
          Validators.maxLength(20)]]
        },
      );
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
      this.submitted = true;

      if (this.DepForm.invalid) {
        return;
      }
      this.service.addDepartment(data).subscribe(()=>{},(error)=>{console.log(error);})
      this.router.navigateByUrl("department/DepartmentHome/getParent");
      this.reloadPage();
    } 
  
    reloadPage() { let currentUrl = this.router.url; this.router.routeReuseStrategy.shouldReuseRoute = () => false; this.router.onSameUrlNavigation = 'reload'; this.router.navigate([currentUrl]); }
 
	
  }
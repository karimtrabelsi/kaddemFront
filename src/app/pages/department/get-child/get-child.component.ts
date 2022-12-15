import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../../../models/Department';
import { DepartmentService } from '../../../services/department.service';
import { GetParentComponent } from '../get-parent/get-parent.component';
@Component({
  selector: 'app-get-child',
  templateUrl: './get-child.component.html',
  styleUrls: ['./get-child.component.css']
})
export class GetChildComponent implements OnInit {
  @Input() department!:Department;
  @Input() photoURL:any;

  @Output() notif= new EventEmitter<any>(); //notif pour le parent
  
  @ViewChild(GetParentComponent) c!:GetChildComponent;
  
    constructor(private service:DepartmentService,private router:Router) { }
  
    

  ngOnInit(): void {
  }
  Delete()
  {
    this.notif.emit(this.department);

  }
  UpdateUser(id:number)
  {
    this.router.navigate(['department/DepartmentHome/update',id])
  }
}

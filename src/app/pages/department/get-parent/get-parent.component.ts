import { Component, OnInit,ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../../../models/Department';
import { DepartmentService } from '../../../services/department.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-get-parent',
  templateUrl: './get-parent.component.html',
  styleUrls: ['./get-parent.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class GetParentComponent implements OnInit {

  constructor(private service:DepartmentService,private router:Router , private modalService: NgbModal) { }
  closeResult = '';
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
  
  
  open(content:any) {
    console.log("1")
    this.modalService.open(content, {backdrop: false , ariaLabelledBy:  'modal-basic-title'} ).result.then((result) => {
      console.log("2")

      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    console.log("3")

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}

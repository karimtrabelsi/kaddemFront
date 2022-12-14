import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Department } from '../../../models/Department';
import { DepartmentService } from '../../../services/department.service';

@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.css']
})
export class GetDetailsComponent implements OnInit {

  id!:number;
  department !:Department;
  isLoading = true;
  @ViewChild('content') content!: ElementRef;  


 
  constructor(private route:ActivatedRoute, private service:DepartmentService,private router:Router) { }



  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.GetAllIvoice();

  }
  GetAllIvoice()
  {
    this.service.fetchDepartmentById(this.id).subscribe((res:any)=>{

    this.department = res;
    this.department.idDepart = res.id;

    this.isLoading = false;
    
  },
  (error)=>{
    console.log(error)
  
  });
}
 
  Delete(idDepart:number)
  {
    this.service.deleteDepartment(this.id).subscribe(()=>{},(error)=>{console.log(error)});
    // this.router.navigateByUrl('/department/DepartmentHome/getParent');
    this.reload('/department/DepartmentHome/getParent')
    
  }
  async reload(url: string): Promise<boolean> {
    await this.router.navigateByUrl('/', { skipLocationChange: true });
    return this.router.navigateByUrl(url);
  }
  Update(idDepart:number)
  {
    
    this.router.navigate(['/department/DepartmentHome/update/',this.id])
  }
 

  public SavePDF()
  {

  var element = document.getElementById('contentToConvert') as HTMLElement;
  html2canvas(element).then(canvas => {
    var imgW = 200;
    var imgH = canvas.height * imgW /canvas.width	;
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jsPDF('p','mm','a4');
    var position = 0;
    pdf.addImage(contentDataURL,'PNG',0,position,imgW,imgH)
    pdf.save(this.department.nomDepart+".pdf");  
  });
}
  
}


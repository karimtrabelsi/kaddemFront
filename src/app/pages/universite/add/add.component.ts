import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Universite } from '../../../models/Universite';
import { UniversiteService } from '../../../services/universite.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  Constat!:Universite[];

  nomUniv !:String;
  submitted = false;


  ConstatForm = new FormGroup(
		{
			nomUniv : new FormControl(''),
		}
		)
  //formBuilder: any;
    constructor(private service:UniversiteService,private router:Router , private formBuilder: FormBuilder) { }


    ngOnInit(): void {
      this.ConstatForm = this.formBuilder.group(
        {
          nomUniv: ['', [Validators.required,Validators.minLength(6),
          Validators.maxLength(20)]]
        },
      );
      this.service.fetchUniversite().subscribe(
        
        (t)=>{
          this.Constat=t;
        },
        (error)=>{
          console.log(error.status)
        }
      );
     
    }
    
    SaveConstat(data:any)
    {

      this.submitted = true;

      if (this.ConstatForm.invalid) {
        return;
      }

      this.service.addUniversite(data).subscribe(()=>{},(error)=>{console.log(error);})
      this.router.navigateByUrl("universite/UniversiteHome/getParent");
   this.reloadPage()   }
    reloadPage() { let currentUrl = this.router.url; this.router.routeReuseStrategy.shouldReuseRoute = () => false; this.router.onSameUrlNavigation = 'reload'; this.router.navigate([currentUrl]); }
 
	
  }
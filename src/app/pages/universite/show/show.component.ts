import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Universite } from '../../../models/Universite';
import { UniversiteService } from '../../../services/universite.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private service:UniversiteService,private router:Router) { }
  ListUniversite !: Universite[];

 
 
  ngOnInit(): void {
    this.GetAllUniversite();
  }
  GetAllUniversite()
  {
    this.service.fetchUniversite().subscribe(
      (t)=>{
        console.log(t)
        this.ListUniversite=t;
      },
      (error)=>{
        console.log(error.status)
      }
    );
  }

  Delete(id:number)
  {
    this.service.deleteUniversite(id).subscribe(()=>{},(error)=>{console.log(error)});
    this.GetAllUniversite();
  }
  Update(id:number)
  {
    this.router.navigate(['/universite/UniversiteHome/update/',id])
  }

}

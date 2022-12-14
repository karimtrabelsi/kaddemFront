import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from '../../../models/Universite';
import { UniversiteService } from '../../../services/universite.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private ac :ActivatedRoute,private service:UniversiteService,private router:Router) { }


  isLoading = true;

  universite = new Universite();
  id=this.ac.snapshot.params['id'];
  
  ngOnInit(): void {
    this.getUniversite();
  }
 

  getUniversite()
  {
    this.service.fetchUniversiteById(this.id).subscribe(
      (res:Universite)=>
      {
        this.universite=res;
        this.universite.id=res.id;
        this.isLoading = false;
      },
      (error)=>{
        console.log(error)
      }
    );
  }

  Updateuniversite(data:Universite){
    
    data.id=this.id;
   

    this.service.UpdatUniversite(data).subscribe(()=>{},(error)=>{console.log(error);})
    this.router.navigateByUrl("universite/UniversiteHome/detail/"+this.id);
    
  }
  

}

import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Universite } from '../../../models/Universite'
import { GetParentComponent } from '../get-parent/get-parent.component';
import { UniversiteService } from '../../../services/universite.service';

@Component({
  selector: 'app-get-child',
  templateUrl: './get-child.component.html',
  styleUrls: ['./get-child.component.css']
})
export class GetChildComponent implements OnInit {

  @Input() universite!:Universite;
  @Input() photoURL:any;

  @Output() notif= new EventEmitter<any>();
  
  @ViewChild(GetParentComponent) c!:GetChildComponent;
  
    constructor(private service:UniversiteService,private router:Router) { }
  
    

  ngOnInit(): void {
  }
  Delete()
  {
    this.notif.emit(this.universite);

  }
  UpdateUser(id:number)
  {
    this.router.navigate(['universite/UniversiteHome/update',id])
  }
}

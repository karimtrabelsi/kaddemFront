import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Universite } from '../../../models/Universite';
import { UniversiteService } from '../../../services/universite.service';

@Component({
  selector: 'app-get-parent',
  templateUrl: './get-parent.component.html',
  styleUrls: ['./get-parent.component.css']
})
export class GetParentComponent implements OnInit {

  constructor(private service: UniversiteService, private router: Router) { }

  ListUniversite !: Universite[];


  ngOnInit(): void {
    this.GetAllUniversite();
  }
  GetAllUniversite() {
    this.service.fetchUniversite().subscribe(
      (t) => {

        this.ListUniversite = t;
      },
      (error) => {
        console.log(error.status)
      }
    );
  }


  executes(i: any) {
    this.service.deleteUniversite(i.id).subscribe(() => { }, (error) => { console.log(error) });
    this.GetAllUniversite();
  }

}

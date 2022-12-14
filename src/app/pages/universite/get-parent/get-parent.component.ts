import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Universite } from '../../../models/Universite';
import { UniversiteService } from '../../../services/universite.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-get-parent',
  templateUrl: './get-parent.component.html',
  styleUrls: ['./get-parent.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class GetParentComponent implements OnInit {

  constructor(private service: UniversiteService, private router: Router, private modalService: NgbModal
    ) { }
  closeResult = '';
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
  
  open(content:any) {
    console.log("1")
    this.modalService.open(content, {backdrop: false , ariaLabelledBy:
'modal-basic-title'} ).result.then((result) => {
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

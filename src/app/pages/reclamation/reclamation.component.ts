import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import { Reclamation } from 'app/models/Reclamation';
import { ReclamationService } from 'app/services/reclamation.service';
import { ReclamationFormComponent } from './reclamation-form/reclamation-form.component';
import { ReclamationDetailComponent } from './reclamation-detail/reclamation-detail.component';
import { ReclamationDeleteComponent } from './reclamation-delete/reclamation-delete.component';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent implements OnInit {

  @ViewChild('content', { static: false }) el!: ElementRef;

  constructor(private ReclamationService: ReclamationService, private modalService: NgbModal) {}
  Reclamation: Reclamation;

  ReclamationList: Reclamation[];
  ngOnInit(): void {
    this.Reclamation = new Reclamation();
    //getContracts
    this.ReclamationService.getAllReclamations().subscribe((data: Reclamation[]) => {
      this.ReclamationList = data;
    });
  }

  //addContract
  add() {
    this.ReclamationService
      .addReclamation(this.Reclamation)
      .subscribe(
        () => (this.ReclamationList = [this.Reclamation, ...this.ReclamationList])
      );
  }
  //deleteContract
  delete(id: number) {
    this.ReclamationService.deleteReclamation(id).subscribe((data) => {
      console.log(data);
      this.ReclamationService.getAllReclamations();
      location.reload();
    });
  }

  confirmReclamation(id:number,data:Reclamation){
    this.ReclamationService.confirmReclamation(id,data).subscribe(data =>{location.reload();})
  }
  //updateContract
  update() {}

  //generate pdf
  makePDF() {
    
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save('Reclamation.pdf');
      },
    });
  }

  open(id:any) {
		const modalRef = this.modalService.open(ReclamationFormComponent);
		modalRef.componentInstance.id = id;
	}

  openDetail(id:any) {
		const modalRef = this.modalService.open(ReclamationDetailComponent);
		modalRef.componentInstance.id = id;
	}

  openDelete(id:any) {
		const modalRef = this.modalService.open(ReclamationDeleteComponent);
		modalRef.componentInstance.id = id;
	}

  getColor(statut) { 
    switch (statut) {
      case true:
        return 'green';
      case false:
        return 'red';
    }
  }


}

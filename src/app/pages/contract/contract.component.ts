import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import jsPDF from 'jspdf';
import { Contrat } from 'app/models/Contrat';
import { ContratService } from 'app/services/contrat.service';
import { ContractFormComponent } from './contract-form/contract-form.component';
import { ContractDetailComponent } from './contract-detail/contract-detail.component';
import { ContractDeleteComponent } from './contract-delete/contract-delete.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {
  @ViewChild('content', { static: false }) el!: ElementRef;

  constructor(private contratService: ContratService, private modalService: NgbModal) {}
  contrat: Contrat;
  closeResult = "";
  contratList: Contrat[];
  ngOnInit(): void {
    this.contrat = new Contrat();
    //getContracts
    this.contratService.getAllContrat().subscribe((data: Contrat[]) => {
      this.contratList = data;
    });
  }

  //addContract
  add() {
    this.contratService
      .addContrat(this.contrat)
      .subscribe(
        () => (this.contratList = [this.contrat, ...this.contratList])
      );
  }
  //deleteContract
  delete(id: number) {
    this.contratService.deleteContrat(id).subscribe((data) => {
      console.log(data);
      this.contratService.getAllContrat();
      location.reload();
    });
  }
  
  //generate pdf
  makePDF() {
    
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save('contrat.pdf');
      },
    });
  }


  open(id:any) {
		const modalRef = this.modalService.open(ContractFormComponent);
		modalRef.componentInstance.id = id;
	}

  openDetail(id:any) {
		const modalRef = this.modalService.open(ContractDetailComponent);
		modalRef.componentInstance.id = id;
	}

  openDelete(id:any) {
		const modalRef = this.modalService.open(ContractDeleteComponent);
		modalRef.componentInstance.id = id;
	}

  unaffectContract(id:number,data:Contrat){
    this.contratService.unaffectContract(id,data).subscribe(data =>{location.reload();})
  }

  getColor(archive) { 
    switch (archive) {
      case false:
        return 'green';
      case true:
        return 'red';
    }
  }

}

import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import jsPDF from 'jspdf';
import { Contrat } from 'app/models/Contrat';
import { ContratService } from 'app/services/contrat.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contract-delete',
  templateUrl: './contract-delete.component.html',
  styleUrls: ['./contract-delete.component.css']
})
export class ContractDeleteComponent implements OnInit {

  @ViewChild('content', { static: false }) el!: ElementRef;

  constructor(private contratService: ContratService,private _NgbActiveModal: NgbActiveModal) {}

  contrat: Contrat;
  contratList: Contrat[];
  @Input() id:any;
  
  ngOnInit(): void {
    let id = this.id;
    this.contrat = new Contrat();
    this.contratService.getContratById(this.id).subscribe((data: Contrat) => {
      this.contrat = data;
    });
    
  }

  get activeModal() {
    return this._NgbActiveModal;
  }

  delete(id: number) {
    this.contratService.deleteContrat(id).subscribe((data) =>{this.activeModal.close()});
    location.reload();
  }

}

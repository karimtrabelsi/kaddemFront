import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import jsPDF from 'jspdf';
import { Reclamation } from 'app/models/Reclamation';
import { ReclamationService } from 'app/services/reclamation.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reclamation-delete',
  templateUrl: './reclamation-delete.component.html',
  styleUrls: ['./reclamation-delete.component.css']
})
export class ReclamationDeleteComponent implements OnInit {

  @ViewChild('content', { static: false }) el!: ElementRef;

  constructor(private ReclamationService: ReclamationService,private _NgbActiveModal: NgbActiveModal) {}
  Reclamation: Reclamation;
  ReclamationList: Reclamation[];
  @Input() id:any;
  ngOnInit(): void {
    let id = this.id;
    this.Reclamation = new Reclamation();
    this.ReclamationService.getReclamationById(this.id).subscribe((data: Reclamation) => {
      this.Reclamation = data;
    });
  }

  get activeModal() {
    return this._NgbActiveModal;
  }

  delete(id: number) {
    this.ReclamationService.deleteReclamation(id).subscribe((data) =>{this.activeModal.close()});
    location.reload();
  }

}

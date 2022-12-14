import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Reclamation } from 'app/models/Reclamation';
import { ReclamationService } from 'app/services/reclamation.service';

@Component({
  selector: 'app-Reclamation-detail',
  templateUrl: './Reclamation-detail.component.html',
  styleUrls: ['./Reclamation-detail.component.css']
})
export class ReclamationDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private ReclamationService: ReclamationService,
    private _NgbActiveModal: NgbActiveModal,
  ) {}
  @Input() id:any;
  Reclamation: Reclamation;
  ngOnInit(): void {
    this.id = this.id;
    this.Reclamation = new Reclamation();
    this.ReclamationService.getReclamationById(this.id).subscribe((data: Reclamation) => {
      this.Reclamation = data;
    });
  }
  get activeModal() {
    return this._NgbActiveModal;
  }
}

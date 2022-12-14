import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contrat } from 'app/models/Contrat';
import { ContratService } from 'app/services/contrat.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']
})
export class ContractDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private contratService: ContratService,
    private _NgbActiveModal: NgbActiveModal,
  ) {}
  contrat: Contrat;
  @Input() id:any;
  ngOnInit(): void {
    this.id = this.id;
    this.contrat = new Contrat();
    this.contratService.getContratById(this.id).subscribe((data: Contrat) => {
    this.contrat = data;
    });
  }
  get activeModal() {
    return this._NgbActiveModal;
  }
}

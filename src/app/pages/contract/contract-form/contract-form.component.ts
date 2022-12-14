import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Contrat } from 'app/models/Contrat';
import { ContratService } from 'app/services/contrat.service';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.css'],
  providers: [DatePipe],
})
export class ContractFormComponent implements OnInit {

  constructor(
    private datePipe: DatePipe,
    private contratService: ContratService,
    private route: Router,
    private currentRoute: ActivatedRoute,
    private _NgbActiveModal: NgbActiveModal,
    
  ) {}
  contrat: Contrat;
  action: string;
  contratList: Contrat[];
  currentDate = new Date();
  mindate: any;
  @Input() id:any;
  ngOnInit(): void {
   
    console.log(this.id);
    
    this.mindate = this.datePipe.transform(this.currentDate, 'yyyy-MM-dd');
    this.contrat = new Contrat();
    let id = this.id;
    console.log(id);
    
    if (id != null) {
      //update
      this.action = 'update';
      this.contratService.getContratById(id).subscribe((data: Contrat) => {
        this.contrat = data;
      });
    } else {
      //add
      this.action = 'add new';
      this.contrat = new Contrat();
    }

    //get
    this.contratService.getAllContrat().subscribe((data: Contrat[]) => {
    this.contratList = data;
    });
  }

  //add|update
  add() {
    if (this.action == 'update') {
      this.contratService
        .updateContrat(this.contrat.idContrat,this.contrat)
        .subscribe(data =>{this.activeModal.close()})
        location.reload();
        
    } else {
      this.contratService.addContrat(this.contrat).subscribe(result=>{this.activeModal.close()
      });
    }
  }

  //delete
  delete() {
    this.contratService.deleteContrat(this.contrat.idContrat);
  }
  //navigate
  goToContractList() {
    this.route.navigate(['/contracts/ContractsList']);
  }

  get activeModal() {
    return this._NgbActiveModal;
  }

}

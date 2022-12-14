import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Reclamation } from 'app/models/Reclamation';
import { Type } from 'app/models/Type';
import { ReclamationService } from 'app/services/reclamation.service';

@Component({
  selector: 'app-reclamation-form',
  templateUrl: './reclamation-form.component.html',
  styleUrls: ['./reclamation-form.component.css'],
  providers: [DatePipe],
})
export class ReclamationFormComponent implements OnInit {

  constructor(
    private datePipe: DatePipe,
    private ReclamationService: ReclamationService,
    private route: Router,
    private currentRoute: ActivatedRoute,
    private _NgbActiveModal: NgbActiveModal
  ) {}
  Rec!:Reclamation[];
  idReclamation !:number;
  DateReclamation!:Date;
  description?: string;
  screenshot?: string;
  statut?: boolean;
  type?: Type;
  
    RecForm = new FormGroup(
      {
        
        description : new FormControl(''),
        screenshot : new FormControl(''),
        type : new FormControl('')

      })
  Reclamation: Reclamation;
  action: string;
  ReclamationList: Reclamation[];
  currentDate = new Date();
  mindate: any;
  @Input() id:any;
  ngOnInit(): void {

    //this.mindate = this.datePipe.transform(this.currentDate, 'yyyy-MM-dd');
    this.mindate =this.datePipe.transform((new Date), 'yyyy-MM-dd');
    this.Reclamation = new Reclamation();
    let id = this.id;
    if (id != null) {
      //update
      this.action = 'Update';
      this.ReclamationService.getReclamationById(id).subscribe((data: Reclamation) => {
        
        this.Reclamation = data;
      });
    } else {
      //add
      this.action = 'Add new';
      this.Reclamation = new Reclamation();
    }

    //get
    this.ReclamationService.getAllReclamations().subscribe((data: Reclamation[]) => {
      this.ReclamationList = data;
    });
  }

  //add|update
  add() {
    if (this.action == 'Update') {
      this.ReclamationService
        .updateReclamation(this.Reclamation.idReclamation,this.Reclamation)
        .subscribe(data =>{this.activeModal.close()});
        location.reload();
    } else {
      this.ReclamationService.addReclamation(this.Reclamation).subscribe(result=>{this.activeModal.close()
      });
      location.reload();
    }
  }

  SaveRec(data:Reclamation)
    {
      if (this.action == 'Update') {


    this.ReclamationService.updateReclamation(this.Reclamation.idReclamation,data).subscribe(data =>{this.activeModal.close()})
      } else {
      
      this.ReclamationService.addReclamation(data).subscribe(data =>{this.activeModal.close()})
      }
    }

  //delete
  delete() {
    this.ReclamationService.deleteReclamation(this.Reclamation.idReclamation);
  }
  //navigate
  goToReclamationtList() {
    this.route.navigate(['/reclamations/ReclamationsList']);
  }


  

  get activeModal() {
    return this._NgbActiveModal;
  }

}

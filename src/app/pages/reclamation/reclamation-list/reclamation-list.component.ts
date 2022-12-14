import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import { Reclamation } from 'app/models/Reclamation';
import { ReclamationService } from 'app/services/reclamation.service';

@Component({
  selector: 'app-reclamation-list',
  templateUrl: './reclamation-list.component.html',
  styleUrls: ['./reclamation-list.component.css']
})
export class ReclamationListComponent implements OnInit {

  @ViewChild('content', { static: false }) el!: ElementRef;

  constructor(private ReclamationService: ReclamationService) {}
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

}

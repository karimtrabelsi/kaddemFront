import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReclamationRoutingModule } from './reclamation-routing.module';
import { ReclamationFormComponent } from './reclamation-form/reclamation-form.component';
import { ReclamationDetailComponent } from './reclamation-detail/reclamation-detail.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReclamationFormComponent,
    ReclamationDetailComponent,
    ReclamationListComponent,
  ],
  imports: [CommonModule, ReclamationRoutingModule, FormsModule , ReactiveFormsModule],
})
export class ReclamationsModule {}

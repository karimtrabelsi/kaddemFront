import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclamationComponent } from './reclamation.component';
import { ReclamationFormComponent } from './reclamation-form/reclamation-form.component';
import { ReclamationDetailComponent } from './reclamation-detail/reclamation-detail.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';

const routes: Routes = [{ path: '', component: ReclamationComponent },
{ path: 'ReclamationsList', component: ReclamationListComponent },
{ path: 'addReclamation', component: ReclamationFormComponent },
{ path: 'updateReclamation/:id', component: ReclamationFormComponent },
{ path: ':id', component: ReclamationDetailComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationRoutingModule { }

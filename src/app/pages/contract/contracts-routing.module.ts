import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractDetailComponent } from './contract-detail/contract-detail.component';
import { ContractFormComponent } from './contract-form/contract-form.component';
import { ContractDeleteComponent } from './contract-delete/contract-delete.component';
import { ContractComponent } from './contract.component';

const routes: Routes = [{ path: '', component: ContractComponent },
{ path: 'ContractsList', component: ContractDeleteComponent },
{ path: 'addContract', component: ContractFormComponent },
{ path: 'updateContract/:id', component: ContractFormComponent },
{ path: ':id', component: ContractDetailComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractsRoutingModule { }

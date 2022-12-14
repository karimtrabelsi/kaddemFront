import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { ContractFormComponent } from './contract-form/contract-form.component';
import { ContractDetailComponent } from './contract-detail/contract-detail.component';
import { ContractDeleteComponent } from './contract-delete/contract-delete.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContractFormComponent,
    ContractDetailComponent,
    ContractDeleteComponent,
  ],
  imports: [CommonModule, ContractsRoutingModule, FormsModule],
})
export class ContractsModule {}

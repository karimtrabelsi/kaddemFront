import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowComponent } from './show/show.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
import { GetParentComponent } from './get-parent/get-parent.component';
import { GetChildComponent } from './get-child/get-child.component';
import { GetDetailsComponent } from './get-details/get-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UniversiteComponent } from './universite.component';
import { UniversiteRoutingModule } from './universite-routing.module';


@NgModule({
  declarations: [
    ShowComponent,
    UpdateComponent,
    AddComponent,
    GetParentComponent,
    GetChildComponent,
    GetDetailsComponent
  ],
  imports: [
    CommonModule,
    UniversiteRoutingModule,
    ReactiveFormsModule,FormsModule
  ]
})
export class UniversiteModule { }

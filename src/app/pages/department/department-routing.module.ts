import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DepartmentComponent } from './department.component';
import { GetDetailsComponent } from './get-details/get-details.component';
import { GetParentComponent } from './get-parent/get-parent.component';
import { ShowComponent } from './show/show.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [ {path:'',redirectTo:'DepartmentHome/getParent',pathMatch:'full'},
{ 
  path: 'DepartmentHome', component: DepartmentComponent,
  children:[
            {path:"add", component:AddComponent},
            {path:'update/:id', component:UpdateComponent},
            {path:"show", component:ShowComponent},
            {path:"getParent", component:GetParentComponent},
            {path:"detail/:id", component:GetDetailsComponent}
            ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }

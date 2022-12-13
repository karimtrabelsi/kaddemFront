import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DepartmentComponent } from "./pages/department/department.component";
import { CourseComponent } from "./pages/course/course.component";
import { ContractComponent } from "./pages/contract/contract.component";
import { ReclamationComponent } from "./pages/reclamation/reclamation.component";
import { TrainingComponent } from './pages/training/training.component';
import { UniversiteComponent } from './pages/universite/universite.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
  ],
  declarations: [
    AppComponent,
    UniversiteComponent,
    DepartmentComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    CourseComponent,
    ContractComponent,
    ReclamationComponent,
    TrainingComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
